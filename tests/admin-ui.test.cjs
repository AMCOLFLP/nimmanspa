/* Run with node --test tests/admin-ui.test.cjs. This DOM/API harness exercises
   the actual event handlers, including response races and credential lifetime. */
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const tick = () => new Promise(resolve => setImmediate(resolve));
const deferred = () => { let resolve,reject; const promise = new Promise((a,b) => {resolve=a;reject=b;}); return {promise,resolve,reject}; };
const learner = (id=1,name='Ploy Learner') => ({id,name,email:`learner${id}@example.test`,role:'therapist',lang:'en',is_active:true,must_change_password:false,created_at:'2026-11-01T00:00:00Z',last_login_at:null,last_activity_at:null,courses:[{course_id:'spa',title:'Spa English',title_th:'ภาษาอังกฤษสปา',access:{status:'active',started_at:'2026-11-01T00:00:00Z',expires_at:'2026-12-01T00:00:00Z',remaining_days:26},chapters_studied:1,chapters_total:3,progress_percent:33,words_known:12,quiz_average:80,quiz_activities:2,practice_sessions:2,assessment_attempts:1,last_activity_at:'2026-11-04T00:00:00Z',chapters:[{id:'spa-one',title:'Welcome <guest>',title_th:'ต้อนรับแขก',studied:true,studied_at:'2026-11-04T00:00:00Z'}],recent_practice:[{at:'2026-11-04T00:00:00Z',activity:'Listen',score:8,total:10,assisted:1}],recent_assessments:[]}]});
const response = students => ({ok:true,students,pagination:{page:1,per_page:25,total:students.length,total_pages:1},summary:{total_students:students.length,active_accounts:students.length,active_enrollments:students.length,expired_enrollments:0}});

function harness(){
  let user={is_admin:true,must_change_password:false,email:'admin@example.test'},handler;
  const calls=[],dom=new Map(),events={},windowEvents={},documentEvents={},classes=new Set();
  let signouts=0;
  const panel={innerHTML:'',attrs:{},addEventListener:(name,cb)=>{events[name]=cb;},setAttribute(name,value){this.attrs[name]=value;}};
  dom.set('adminRoot',panel);
  const element=id=>({id,style:{},classList:{add(){},remove(){}},focus(){},setAttribute(){},value:'',remove(){if(id==='adCredential')panel.innerHTML=panel.innerHTML.replace(/<section id="adCredential"[\s\S]*?<\/section>/,'');dom.delete(id);}});
  for(const id of ['authWrap','courseWrap','appShell'])dom.set(id,element(id));
  const context=vm.createContext({URLSearchParams,Intl,Date,Set,Map,Promise,
    FormData:class{constructor(form){this.data=form.values;}entries(){return Object.entries(this.data);}},
    I18N:{current:'en'},Courses:{name:id=>({spa:'Spa English',cruise:'Cruise English',salon:'Hair & nails'})[id]},
    document:{body:{classList:{add:value=>classes.add(value),remove:value=>classes.delete(value)}},visibilityState:'visible',addEventListener:(name,cb)=>{documentEvents[name]=cb;},getElementById(id){if(dom.has(id))return dom.get(id);if(panel.innerHTML.includes(`id="${id}"`)){const e=element(id);dom.set(id,e);return e;}return null;},querySelector(){return null;}},
    window:{addEventListener:(name,cb)=>{windowEvents[name]=cb;}},
    localStorage:{setItem(){throw new Error('Admin must not persist data or credentials');},getItem(){throw new Error('Admin must not read local records');}},
    Auth:{currentUser:()=>user,forceSignedOut(){signouts++;context.Admin.exit();}},
    App:{signOut(){signouts++;context.Admin.exit();}},
    AccountSecurity:{open(){context.Admin.exit();}},Nav:{go(){}},
    Api:{get(route){calls.push({method:'GET',route});return handler('GET',route);},post(route,body){calls.push({method:'POST',route,body});return handler('POST',route,body);}}
  });
  handler=async(method,route)=>route.startsWith('admin/student.php?')?{ok:true,student:learner(Number(route.split('=')[1]))}:response([learner()]);
  vm.runInContext(fs.readFileSync(path.join(__dirname,'../js/admin.js'),'utf8')+'\nglobalThis.Admin=Admin;',context);
  return {context,Admin:context.Admin,panel,calls,classes,dom,events,windowEvents,documentEvents,
    user(value){user=value;},handler(fn){handler=fn;},signouts:()=>signouts,
    async open(){context.Admin.open();await tick();},
    click(action,extra={}){const el={dataset:{adminAction:action,...extra},setAttribute(){}};events.click({target:{closest:()=>el}});return el;},
    submit(id,values){events.submit({target:{id,values,reportValidity:()=>true},preventDefault(){}});},
  };
}

test('only an administrator without a forced password change opens the dashboard',async()=>{
  for(const user of [null,{is_admin:false},{is_admin:true,must_change_password:true}]){
    const h=harness();h.user(user);await h.open();assert.equal(h.Admin.isOpen(),false);assert.equal(h.calls.length,0);
  }
  const h=harness();await h.open();assert.equal(h.Admin.isOpen(),true);assert.ok(h.classes.has('admin-mode'));
});

test('server student strings are escaped in the list and chapter detail',async()=>{
  const h=harness(),record=learner(1,'<img src=x onerror=alert(1)>');
  record.email='" autofocus onfocus="alert(2)';
  h.handler(async(method,route)=>route.includes('student.php?')?{student:record}:response([record]));
  await h.open();assert.ok(h.panel.innerHTML.includes('&lt;img src=x onerror=alert(1)&gt;'));assert.ok(!h.panel.innerHTML.includes('<img src=x'));assert.ok(h.panel.innerHTML.includes('&quot; autofocus'));
  h.click('student',{id:'1'});await tick();assert.ok(h.panel.innerHTML.includes('Welcome &lt;guest&gt;'));assert.ok(!h.panel.innerHTML.includes('Welcome <guest>'));
});

test('search and filters are encoded and pagination updates the request',async()=>{
  const h=harness();await h.open();
  h.submit('adFilterForm',{q:'a+b & name',course:'spa',access:'expired',account:'inactive'});await tick();
  const params=new URLSearchParams(h.calls.at(-1).route.split('?')[1]);
  assert.equal(params.get('q'),'a+b & name');assert.equal(params.get('access'),'expired');assert.equal(params.get('account'),'inactive');assert.equal(params.get('page'),'1');
  h.click('next');await tick();assert.equal(new URLSearchParams(h.calls.at(-1).route.split('?')[1]).get('page'),'2');
});

test('a late student response cannot replace the newly selected student',async()=>{
  const h=harness();await h.open();const one=deferred(),two=deferred();
  h.handler((method,route)=>route.endsWith('=1')?one.promise:two.promise);
  h.click('student',{id:'1'});h.click('student',{id:'2'});
  two.resolve({student:learner(2,'Current learner')});await tick();one.resolve({student:learner(1,'Stale learner')});await tick();
  assert.ok(h.panel.innerHTML.includes('Current learner'));assert.ok(!h.panel.innerHTML.includes('Stale learner'));
});

test('reset needs a named confirmation and temporary passwords clear on language rerender',async()=>{
  const h=harness();await h.open();h.click('student',{id:'1'});await tick();h.click('reset');
  assert.equal(h.calls.filter(c=>c.method==='POST').length,0);assert.ok(h.panel.innerHTML.includes('Reset this student'));assert.ok(h.panel.innerHTML.includes('learner1@example.test'));
  h.handler(async()=>({ok:true,temporary_password:'TEMP<safe>&123',must_change_password:true}));
  h.click('confirm');await tick();assert.equal(h.calls.at(-1).route,'admin/reset-password.php');assert.equal(h.calls.at(-1).body.id,1);
  assert.ok(h.panel.innerHTML.includes('TEMP&lt;safe&gt;&amp;123'));assert.ok(h.panel.innerHTML.includes('Password change required'));
  h.context.I18N.current='th';h.Admin.render();assert.ok(!h.panel.innerHTML.includes('TEMP'));assert.ok(h.panel.innerHTML.includes('ดูแลผู้เรียนของคุณ'));
});

test('late reset credentials and failures cannot revive a dashboard after logout',async()=>{
  const h=harness();await h.open();h.click('student',{id:'1'});await tick();h.click('reset');const pending=deferred();
  h.handler(()=>pending.promise);h.click('confirm');h.click('logout');
  pending.resolve({temporary_password:'must-never-display'});await tick();
  assert.equal(h.Admin.isOpen(),false);assert.equal(h.panel.innerHTML,'');assert.equal(h.signouts(),1);
});

test('account deactivation is separate from editing and confirmation can be cancelled',async()=>{
  const h=harness();await h.open();h.click('student',{id:'1'});await tick();h.click('disable');h.click('cancel-confirm');
  assert.equal(h.calls.filter(c=>c.method==='POST').length,0);
  h.click('disable');h.handler(async(method,route,body)=>({student:{...learner(),is_active:body.is_active}}));h.click('confirm');await tick();
  const body=h.calls.at(-1).body;assert.equal(body.id,1);assert.equal(body.is_active,false);assert.equal(body.is_admin,undefined);assert.ok(h.panel.innerHTML.includes('Account disabled'));
});

test('creating an account sends profile fields only and shows the server-generated password once',async()=>{
  const h=harness();await h.open();h.click('create');
  h.handler(async()=>({student:learner(7,'New learner'),temporary_password:'new-one-time-secret'}));
  h.submit('adAccountForm',{name:'New learner',email:'new@example.test',role:'manager',lang:'th'});await tick();
  const call=h.calls.at(-1);assert.equal(call.method,'POST');assert.equal(call.route,'admin/students.php');assert.equal(call.body.is_active,true);assert.equal(call.body.password,undefined);assert.equal(call.body.is_admin,undefined);
  assert.ok(h.panel.innerHTML.includes('new-one-time-secret'));h.click('dismiss-secret');assert.ok(!h.panel.innerHTML.includes('new-one-time-secret'));h.Admin.render();assert.ok(!h.panel.innerHTML.includes('new-one-time-secret'));
});

test('hiding or leaving the page clears one-time credentials',async()=>{
  for(const hide of [h=>h.windowEvents.pagehide(),h=>{h.context.document.visibilityState='hidden';h.documentEvents.visibilitychange();}]){
    const h=harness();await h.open();h.click('student',{id:'1'});await tick();h.click('reset');h.handler(async()=>({temporary_password:'hide-this-secret'}));h.click('confirm');await tick();
    hide(h);assert.ok(!h.panel.innerHTML.includes('hide-this-secret'));h.Admin.render();assert.ok(!h.panel.innerHTML.includes('hide-this-secret'));
  }
});

test('401 signs out and a revoked admin role clears previously displayed records',async()=>{
  const h=harness();await h.open();h.handler(async()=>{throw {status:401,error:'auth_required'};});h.click('student',{id:'1'});await tick();
  assert.equal(h.signouts(),1);assert.equal(h.panel.innerHTML,'');
  const revoked=harness();await revoked.open();revoked.click('student',{id:'1'});await tick();revoked.click('reset');
  revoked.handler(async()=>{throw {status:403,error:'forbidden'};});revoked.click('confirm');await tick();
  assert.ok(!revoked.panel.innerHTML.includes('learner1@example.test'));assert.ok(!revoked.panel.innerHTML.includes('Ploy Learner'));assert.ok(revoked.panel.innerHTML.includes('does not have administrator access'));
});

test('backend validation errors are visible without leaking unescaped server markup',async()=>{
  const h=harness();await h.open();h.click('create');h.handler(async()=>{throw {status:409,error:'email_used',message:'<invalid>'};});
  h.submit('adAccountForm',{name:'Ploy',email:'used@example.test',role:'other',lang:'en'});await tick();
  assert.ok(h.panel.innerHTML.includes('An account already uses this email address.'));assert.ok(h.panel.innerHTML.includes('used@example.test'));assert.ok(!h.panel.innerHTML.includes('<invalid>'));
});
