/* Run with: node --test tests/course-access.test.js */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const DAY = 86400000;
const START = Date.parse('2026-11-05T09:00:00Z');
const source = name => fs.readFileSync(path.join(__dirname, '..', 'js', name), 'utf8');

function harness(){
  const storage = new Map(), calls = [], events = [], timers = new Map();
  let wall = START, elapsed = 0, timerId = 0;
  const courses = Object.fromEntries(['spa','cruise','salon'].map(id => [id, {
    course_id:id, status:'not_started', started_at:null, expires_at:null, remaining_days:0
  }]));
  const payload = () => ({ ok:true, server_now:new Date(START + elapsed).toISOString(), duration_days:30,
    trigger:'course_start', courses:JSON.parse(JSON.stringify(courses)) });
  let handler = async (method, route, body) => {
    if (route === 'access.php'){
      if (method === 'POST' && courses[body.course].status === 'not_started') Object.assign(courses[body.course], {
        status:'active', started_at:new Date(START).toISOString(), expires_at:new Date(START + 30 * DAY).toISOString(), remaining_days:30
      });
      return payload();
    }
    if (route.startsWith('progress.php')) return { ok:true, data:{ knownWords:['welcome'] } };
    if (route === 'login.php' || route === 'register.php') return { ok:true, user:{ name:'Learner', email:'learner@example.test', role:'therapist' } };
    return { ok:true };
  };
  const api = (method, route, body) => { calls.push({method,route,body}); return handler(method,route,body); };
  class Clock extends Date { constructor(...args){ super(...(args.length ? args : [wall])); } static now(){ return wall; } }
  const context = vm.createContext({ console:{ error(){} }, Date:Clock, Intl, Set, Map, Promise,
    performance:{ now:() => elapsed },
    setTimeout(fn, ms){ const id = ++timerId; timers.set(id, {fn,ms}); return id; },
    clearTimeout(id){ timers.delete(id); },
    localStorage:{ getItem:key => storage.get(key) || null, setItem:(key,val) => storage.set(key,val), removeItem:key => storage.delete(key) },
    CustomEvent:class { constructor(type, options){ this.type = type; this.detail = options?.detail; } },
    window:{ dispatchEvent:e => { events.push(e); }, addEventListener(){} },
    document:{ addEventListener(){}, visibilityState:'visible' },
    I18N:{ current:'en', t:key => key },
    Courses:{ currentId:'spa', all:[{id:'spa'},{id:'cruise'},{id:'salon'}] },
    VOCAB:[{word:'welcome'}],
    Api:{ get:route => api('GET',route), post:(route,body) => api('POST',route,body) }
  });
  vm.runInContext(source('auth.js') + '\n' + source('course-access.js') + '\nglobalThis.subject = {Auth, Progress, CourseAccess};', context);
  storage.set('spa_session', JSON.stringify({name:'Learner', email:'learner@example.test', role:'therapist', guest:false}));
  return { ...context.subject, context, storage, calls, courses, events, payload,
    clock(ms, wallValue = START + ms){ elapsed = ms; wall = wallValue; },
    handler(fn){ handler = fn; },
    async flushWrites(){ const writes = [...timers].filter(([,t]) => t.ms === 500); for (const [id,t] of writes){ timers.delete(id); t.fn(); } await Promise.resolve(); }
  };
}

test('access starts only on explicit start and each course has its own window', async () => {
  const h = harness();
  await h.CourseAccess.load();
  assert.equal(h.CourseAccess.get().status, 'not_started');
  assert.equal(await h.Progress.hydrate(), false);
  assert.equal(h.calls.filter(c => c.route.startsWith('progress')).length, 0);
  await h.CourseAccess.start('spa');
  const deadline = h.CourseAccess.get().expires_at;
  assert.equal(h.CourseAccess.get().remaining_days, 30);
  assert.equal(h.CourseAccess.get('cruise').status, 'not_started');
  assert.equal(h.CourseAccess.get('salon').status, 'not_started');
  await h.CourseAccess.start('spa');
  assert.equal(h.CourseAccess.get().expires_at, deadline);
  assert.equal(await h.Progress.hydrate(), true);
});

test('administrators use the server identity and keep CSRF tokens out of local storage', async () => {
  const h=harness();
  h.handler(async () => ({ok:true,user:{email:'admin@example.test',name:'Admin',is_admin:true,must_change_password:false},csrf_token:'test-session-csrf'}));
  await h.Auth.login({email:'admin@example.test',password:'test-password'});
  assert.equal(h.Auth.isAdmin(),true);
  assert.equal(h.Auth.csrfToken(),'test-session-csrf');
  assert.equal(h.CourseAccess.canVisit('admin'),true);
  assert.equal(h.CourseAccess.canVisit('learning'),false);
  assert.equal(h.CourseAccess.canLearn(),false);
  assert.equal([...h.storage.values()].some(v=>v.includes('test-session-csrf')),false);
  await h.Auth.logout();
  assert.equal(h.Auth.csrfToken(),'');
});

test('temporary password accounts are routed to password change before any learning', async () => {
  const h=harness();
  h.handler(async (method,route) => ({ok:true,user:{email:'learner@example.test',name:'Learner',is_admin:false,must_change_password:route==='login.php'},csrf_token:route==='login.php'?'first-token':'rotated-token'}));
  await h.Auth.login({email:'learner@example.test',password:'temporary-test-password'});
  assert.equal(h.Auth.needsPasswordChange(),true);
  assert.equal(h.CourseAccess.canVisit('security'),true);
  for(const screen of ['learning','account','settings','access','admin','preview']) assert.equal(h.CourseAccess.canVisit(screen),false);
  await h.Auth.changePassword('temporary-test-password','new-test-password');
  assert.equal(h.Auth.needsPasswordChange(),false);
  assert.equal(h.Auth.csrfToken(),'rotated-token');
  assert.equal(h.CourseAccess.canVisit('admin'),false);
  assert.equal([...h.storage.values()].some(v=>v.includes('test-password')),false);
});

test('a server password-change requirement invalidates learning before notifying the app', async () => {
  const h=harness();await h.CourseAccess.load();await h.CourseAccess.start('spa');await h.Progress.hydrate();
  h.Auth.requirePasswordChange();
  assert.equal(h.Progress.isHydrated(),false);
  assert.equal(h.CourseAccess.canLearn(),false);
  assert.equal(h.events.at(-1).type,'nimman:password-change-required');
});

test('a password-change response cannot restore an account after its session ended', async () => {
  const h=harness();let finish;
  h.handler(async () => new Promise(resolve=>{finish=resolve;}));
  const change=h.Auth.changePassword('current-test-password','new-test-password');
  h.Auth.forceSignedOut();
  finish({ok:true,user:{email:'learner@example.test',name:'Learner',must_change_password:false},csrf_token:'late-token'});
  await assert.rejects(change,error=>error.status===401);
  assert.equal(h.Auth.isLoggedIn(),false);
  assert.equal(h.Auth.csrfToken(),'');
});

test('expiry is exact and moving the device clock backwards does not extend access', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa');
  h.clock(29 * DAY, START - DAY);
  assert.equal(h.CourseAccess.get().remaining_days, 1);
  assert.equal(h.CourseAccess.dayNumber(), 30);
  assert.equal(h.CourseAccess.canLearn(), true);
  h.clock(30 * DAY, START - DAY);
  h.CourseAccess.check();
  assert.equal(h.CourseAccess.get().status, 'expired');
  assert.equal(h.CourseAccess.canLearn(), false);
  assert.equal(h.CourseAccess.canVisit('learning'), false);
  assert.equal(h.CourseAccess.canVisit('account'), true);
  assert.equal(h.CourseAccess.canVisit('settings'), true);
  assert.equal(h.events.at(-1).type, 'nimman:access-change');
});

test('preview has no API calls and no normal lesson routes', async () => {
  const h = harness(); h.Auth.continueAsGuest();
  await h.CourseAccess.load(); await h.CourseAccess.start('spa'); await h.Progress.hydrate();
  h.Progress.markWordKnown('welcome',true); await h.flushWrites();
  assert.equal(h.calls.length, 0);
  assert.equal(h.CourseAccess.canVisit('preview'), true);
  for (const route of ['daily','learning','vocab','phrases','assess','speaking','interview']) assert.equal(h.CourseAccess.canVisit(route), false);
});

test('resetting progress and logging out do not renew the server deadline', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa'); await h.Progress.hydrate();
  const deadline = h.CourseAccess.get().expires_at;
  h.Progress.reset(); await h.flushWrites();
  assert.equal(h.CourseAccess.get().expires_at, deadline);
  assert.equal(h.calls.filter(c => c.route === 'access.php' && c.method === 'POST').length,1);
  await h.Auth.logout();
  assert.equal(h.CourseAccess.ready, false);
  await h.Auth.login({email:'learner@example.test', password:'password'});
  await h.CourseAccess.load();
  assert.equal(h.CourseAccess.get().expires_at, deadline);
});

test('late access replies cannot revive a signed-out account', async () => {
  const h = harness(); let resolve;
  h.handler(() => new Promise(done => { resolve = done; }));
  const load = h.CourseAccess.load();
  h.Auth.continueAsGuest();
  resolve(h.payload()); await load;
  assert.equal(h.CourseAccess.ready, false);
  assert.equal(h.CourseAccess.get().status, 'preview');
});

test('failed progress hydration cannot overwrite previously saved records', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa');
  h.handler(async () => { throw {status:503,error:'network'}; });
  assert.equal(await h.Progress.hydrate(),false);
  h.Progress.markWordKnown('new word',true); await h.flushWrites();
  assert.equal(h.Progress.status,'load-error');
  assert.equal(h.calls.filter(c => c.route === 'progress.php' && c.method === 'POST').length,0);
});

test('server expiry blocks a course even if the local deadline has not passed', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa');
  h.handler(async () => { throw {status:403,error:'access_expired'}; });
  assert.equal(await h.Progress.hydrate(),false);
  assert.equal(h.CourseAccess.get().status,'expired');
});

test('normal navigation redirects preview and expired learners', async () => {
  const h = harness();
  vm.runInContext(source('app.js') + '\n globalThis.routes = {Nav,App};', h.context);
  let preview = 0, locked = 0;
  h.context.routes.App.showPreviewScreen = () => { preview++; };
  h.context.routes.App.showAccessScreen = () => { locked++; };
  h.Auth.continueAsGuest(); h.context.routes.Nav.go('vocab');
  assert.equal(preview,1);
  await h.Auth.login({email:'learner@example.test',password:'password'});
  await h.CourseAccess.load(); await h.CourseAccess.start('spa'); h.clock(30 * DAY);
  h.context.routes.Nav.go('learning');
  assert.equal(locked,1);
});

test('login waits for the previous server logout before creating a new session', async () => {
  const h = harness(); let finishLogout;
  h.handler(async (method,route) => route === 'logout.php'
    ? new Promise(resolve => { finishLogout = resolve; })
    : {ok:true,user:{email:'learner@example.test',name:'Learner'}});
  h.Auth.logout(); const login = h.Auth.login({email:'learner@example.test',password:'password'});
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(h.calls.some(c => c.route === 'login.php'),false);
  finishLogout({ok:true}); assert.equal((await login).ok,true);
});

test('a fast course switch flushes the last study action before cache invalidation', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa'); await h.Progress.hydrate();
  h.Progress.setLearningModule('spa-first-chapter',true);
  assert.equal(await h.Progress.flush(),true);
  h.context.Courses.currentId = 'cruise'; h.Progress.invalidate();
  const writes = h.calls.filter(c => c.route === 'progress.php' && c.method === 'POST');
  assert.equal(writes.length,1);
  assert.equal(writes[0].body.course,'spa');
  assert.equal(writes[0].body.data.learningModules['spa-first-chapter'],START);
});

test('signout flushes pending progress and does not discard it on failure', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa'); await h.Progress.hydrate();
  h.Progress.markWordKnown('saved before logout',true);
  h.handler(async () => { throw {status:503,error:'network'}; });
  assert.equal(await h.Auth.logout(),false);
  assert.equal(h.Auth.isLoggedIn(),true);
  assert.equal(h.Progress.status,'save-error');
  h.handler(async () => ({ok:true}));
  assert.equal(await h.Auth.logout(),true);
  assert.equal(h.Auth.isLoggedIn(),false);
  assert.equal(h.Progress.status,'ready');
  const writes = h.calls.filter(c => c.route === 'progress.php' && c.method === 'POST');
  assert.equal(writes.length,2);
  assert.ok(writes[1].body.data.knownWords.includes('saved before logout'));
});

test('slow older progress saves cannot overwrite the newest snapshot', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa'); await h.Progress.hydrate();
  const received = []; let finishFirst;
  h.handler(async (method,route,body) => {
    if (route !== 'progress.php') return {ok:true};
    if (!received.length){
      received.push(body.data);
      return new Promise(resolve => { finishFirst = resolve; });
    }
    received.push(body.data); return {ok:true};
  });
  h.Progress.markWordKnown('first',true); await h.flushWrites();
  h.Progress.markWordKnown('latest',true);
  const flush = h.Progress.flush();
  await Promise.resolve();
  assert.equal(received.length,1);
  finishFirst({ok:true}); assert.equal(await flush,true);
  assert.equal(received.length,2);
  assert.ok(received[1].knownWords.includes('latest'));
});

test('active course navigation waits until saved progress is hydrated', async () => {
  const h = harness(); await h.CourseAccess.load(); await h.CourseAccess.start('spa');
  vm.runInContext(source('app.js') + '\n globalThis.routes = {Nav,App};', h.context);
  let chooser = 0;
  h.context.routes.App.showCourseChooser = () => { chooser++; };
  h.context.routes.Nav.go('daily');
  assert.equal(chooser,1);
});
