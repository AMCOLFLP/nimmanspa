/* =========================================================================
   AUTH — a client-side-only account system.
   Accounts and progress are stored in this browser's localStorage. There is
   no server, so this is a demo pattern, not production-grade security —
   the UI says so plainly wherever a password is collected.
   ========================================================================= */

const Auth = (() => {
  const USERS_KEY = 'spa_users';
  const SESSION_KEY = 'spa_session';

  function loadUsers(){
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch(e){ return []; }
  }
  function saveUsers(users){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

  function isValidEmail(email){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

  function findUser(email){
    return loadUsers().find(u => u.email.toLowerCase() === String(email).toLowerCase());
  }

  function register({ name, email, password, confirm, role, lang }){
    if (!name || !email || !password || !confirm){
      return { ok:false, error: I18N.t('errRequired') };
    }
    if (!isValidEmail(email)){
      return { ok:false, error: I18N.t('errEmailFormat') };
    }
    if (password.length < 6){
      return { ok:false, error: I18N.t('errPasswordShort') };
    }
    if (password !== confirm){
      return { ok:false, error: I18N.t('errPasswordMatch') };
    }
    if (findUser(email)){
      return { ok:false, error: I18N.t('errEmailUsed') };
    }
    const users = loadUsers();
    const user = { name: name.trim(), email: email.trim(), password, role: role || 'therapist', lang: lang || 'en', joined: Date.now() };
    users.push(user);
    saveUsers(users);
    startSession(user.email);
    return { ok:true, user };
  }

  function login({ email, password }){
    if (!email || !password){
      return { ok:false, error: I18N.t('errRequired') };
    }
    const user = findUser(email);
    if (!user || user.password !== password){
      return { ok:false, error: I18N.t('errLoginFailed') };
    }
    startSession(user.email);
    return { ok:true, user };
  }

  function startSession(email){
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email, guest:false, since: Date.now() }));
  }

  function continueAsGuest(){
    localStorage.setItem(SESSION_KEY, JSON.stringify({ email:null, guest:true, since: Date.now() }));
  }

  function logout(){
    localStorage.removeItem(SESSION_KEY);
  }

  function session(){
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)); }
    catch(e){ return null; }
  }

  function currentUser(){
    const s = session();
    if (!s) return null;
    if (s.guest) return { name: I18N.t('accountGuestName'), email:null, role:'guest', guest:true };
    const u = findUser(s.email);
    return u ? { ...u, guest:false } : null;
  }

  function isLoggedIn(){ return !!session(); }

  return { register, login, logout, continueAsGuest, session, currentUser, isLoggedIn, isValidEmail };
})();

/* =========================================================================
   PROGRESS — lightweight per-user stats, stored locally per email
   (guests get a transient, non-persisted progress object).
   ========================================================================= */
const Progress = (() => {
  let cache = null;
  let cacheKey = null;
  let guestCache = {};     // session-only per course, never written to localStorage

  /* One progress record per user PER COURSE, so studying spa English and
     cruise English never overwrite each other's words and scores. */
  function keyFor(){
    const u = Auth.currentUser();
    if (!u || u.guest) return null;
    return `spa_progress_${u.email}__${Courses.currentId}`;
  }

  function blank(){
    return {
      knownWords: [],
      quizBest: {},      // e.g. { mc: 88, fill_arrival: 71, listen: 90, builder: 75 }
      attemptsByActivity: {},
      streak: 0,
      lastActiveDate: null,
    };
  }

  function load(){
    const key = keyFor();
    // Guests get a real, working progress object that simply isn't persisted,
    // so counters and scores behave normally for the length of the session.
    if (!key){
      // Guests are not persisted to storage, but keep a separate in-memory
      // record per course so switching course mid-session loses nothing.
      const gk = Courses.currentId;
      if (!guestCache[gk]) guestCache[gk] = blank();
      cache = guestCache[gk]; cacheKey = null;
      return cache;
    }
    if (cache && cacheKey === key) return cache;
    try { cache = JSON.parse(localStorage.getItem(key)) || blank(); }
    catch(e){ cache = blank(); }
    cacheKey = key;
    return cache;
  }

  function save(){
    const key = keyFor();
    if (!key) return; // guest: held in memory only
    localStorage.setItem(key, JSON.stringify(cache));
  }

  function clearGuest(){ guestCache = {}; }

  function touchStreak(){
    const p = load();
    const today = new Date().toDateString();
    if (p.lastActiveDate === today) return p.streak || 1;
    const y = new Date(); y.setDate(y.getDate() - 1);
    p.streak = (p.lastActiveDate === y.toDateString()) ? (p.streak || 0) + 1 : 1;
    p.lastActiveDate = today;
    save();
    return p.streak;
  }

  function markWordKnown(word, known){
    const p = load();
    const set = new Set(p.knownWords);
    known ? set.add(word) : set.delete(word);
    p.knownWords = [...set];
    save();
  }

  function knownCount(){ return load().knownWords.length; }
  function isKnown(word){ return load().knownWords.includes(word); }

  function recordQuizResult(activityKey, pct){
    const p = load();
    p.quizBest[activityKey] = Math.max(p.quizBest[activityKey] || 0, pct);
    p.attemptsByActivity[activityKey] = (p.attemptsByActivity[activityKey] || 0) + 1;
    save();
  }

  function quizAverage(){
    const p = load();
    const vals = Object.values(p.quizBest);
    if (!vals.length) return null;
    return Math.round(vals.reduce((a,b)=>a+b,0) / vals.length);
  }

  function activitiesCompleted(){ return Object.keys(load().quizBest).length; }

  function courseProgressPct(){
    const wordPart = Math.min(1, knownCount() / VOCAB.length) * 55;
    const activityPart = Math.min(1, activitiesCompleted() / 5) * 45;
    return Math.round(wordPart + activityPart);
  }

  function reset(){ cache = blank(); cacheKey = keyFor(); if (!cacheKey) guestCache[Courses.currentId]=cache; save(); }

  function bestFor(activityKey){
    const p = load();
    // The fill activity stores one key per dialogue, so report the best of them.
    if (activityKey === 'fill'){
      const vals = Object.entries(p.quizBest)
        .filter(([k]) => k.startsWith('fill_'))
        .map(([, v]) => v);
      return vals.length ? Math.max(...vals) : null;
    }
    return p.quizBest[activityKey] !== undefined ? p.quizBest[activityKey] : null;
  }

  /* ---------------------------------------------------------------------
     DAILY FIVE — the day's small study set.
     The five words are derived from the date, so they stay the same all day,
     survive a reload, and work for guests too. Words the learner hasn't yet
     marked known come first; known words only fill a shortfall.
     --------------------------------------------------------------------- */
  const DAILY_SIZE = 5;

  function todayKey(){ return new Date().toDateString(); }
  function isoToday(){ const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }

  function dateSeed(){
    const d = new Date();
    return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  }

  function seededShuffle(arr, seed){
    const a = [...arr];
    let s = seed || 1;
    const rnd = () => { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* Daily words climb the difficulty ladder: all the Easy words are offered
     before Intermediate ones appear, and Advanced terms only once the earlier
     levels are done. Within a level the order is seeded by the date, so the
     set is stable for the day but varies day to day. */
  function pickDailyWords(){
    const knownSet = new Set(load().knownWords);
    const seed = dateSeed();
    const unknown = VOCAB.filter(v => !knownSet.has(v.word));

    const byLevel = [1, 2, 3].map(lv =>
      seededShuffle(unknown.filter(v => (v.level || 2) === lv), seed + lv * 13));

    // Mostly one level at a time, but let a couple of words from the next
    // level through so the set never feels static once a level is nearly done.
    const reviewWords = load().reviewWords || {};
    const due = VOCAB.filter(v => reviewWords[v.word] && reviewWords[v.word].dueDate <= isoToday())
      .sort((a,b)=>reviewWords[a.word].dueDate.localeCompare(reviewWords[b.word].dueDate)).slice(0,2);
    const dueSet = new Set(due.map(v=>v.word));
    let queue = [...due, ...byLevel.flat().filter(v=>!dueSet.has(v.word))];

    if (queue.length < DAILY_SIZE){
      // Everything is known: revise, easiest first, so a session still works.
      const review = [1, 2, 3].flatMap(lv =>
        seededShuffle(VOCAB.filter(v => knownSet.has(v.word) && (v.level || 2) === lv), seed + lv * 29));
      const queued = new Set(queue.map(v=>v.word));
      queue = queue.concat(review.filter(v=>!queued.has(v.word)));
    }
    return queue.slice(0, DAILY_SIZE).map(v => v.word);
  }

  function dailyState(){
    const p = load();
    if (!p.daily || p.daily.date !== todayKey()){
      p.daily = {
        date: todayKey(),
        words: pickDailyWords(),
        right: [],
        againCount: 0,
        checkDone: false,
        checkScore: null,
        checkTotal: null,
      };
      save();
    }
    return p.daily;
  }

  function dailySwipeRight(word){
    const d = dailyState();
    if (!d.right.includes(word)) d.right.push(word);
    save();
    return d;
  }

  function dailySwipeLeft(){
    const d = dailyState();
    d.againCount = (d.againCount || 0) + 1;
    save();
    return d;
  }

  function dailyIsReadyForCheck(){
    const d = dailyState();
    return d.right.length >= d.words.length;
  }

  function dailyCompleteCheck(score, total, answers = []){
    const p = load();
    const d = dailyState();
    d.checkDone = true;
    d.checkScore = score;
    d.checkTotal = total;
    const allowed = new Set(d.words);
    d.itemResults = answers.filter(a => allowed.has(a.word)).map(a=>({word:a.word,correct:a.correct === true}));
    const set = new Set(p.knownWords);
    p.reviewWords = p.reviewWords || {};
    d.itemResults.forEach(a => {
      const prior = p.reviewWords[a.word] || {successes:0};
      const successes = a.correct ? (prior.lastDate === todayKey() ? Math.max(1,prior.successes || 0) : (prior.successes || 0)+1) : 0;
      // Editorial review intervals, not a validated mastery certification.
      const intervals = [1,3,7,14];
      const date = new Date();
      date.setDate(date.getDate() + (a.correct ? intervals[Math.min(successes-1,3)] : 1));
      const dueDate = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
      p.reviewWords[a.word] = {successes,dueDate,lastDate:todayKey(),correct:a.correct};
      if(a.correct) set.add(a.word); else set.delete(a.word);
    });
    p.knownWords = [...set];
    save();
    recordQuizResult('daily', total ? Math.round((score / total) * 100) : 0);
    return d;
  }

  function practiceSettings(){
    return {...{length:10,level:'all'},...(load().practiceSettings || {})};
  }
  function setPracticeSettings(settings){
    const p=load();p.practiceSettings={length:[5,10,15,20].includes(Number(settings.length))?Number(settings.length):10,level:['all','1','2','3'].includes(String(settings.level))?String(settings.level):'all'};save();
  }
  function practiceHistory(){ return {...(load().practiceHistory || {})}; }
  function recordPracticeAnswer(id, activity, correct, assisted){
    if (!id) return;
    const p=load();p.practiceHistory=p.practiceHistory || {};
    const old=p.practiceHistory[id] || {attempts:0,right:0};
    p.practiceHistory[id]={attempts:old.attempts+1,right:old.right+(correct?1:0),lastSeen:Date.now(),activity,lastCorrect:correct,assisted:!!assisted,needsReview:!correct || (assisted && !!old.needsReview)};
    save();
  }
  function recordPracticeSession(session){
    const p=load();p.practiceSessions=p.practiceSessions || [];
    p.practiceSessions.push({at:Date.now(),activity:session.activity,score:session.score,total:session.total,assisted:session.assisted,level:session.level});
    p.practiceSessions=p.practiceSessions.slice(-50);save();
  }

  return {
    practiceSettings, setPracticeSettings, practiceHistory, recordPracticeAnswer, recordPracticeSession,
    touchStreak, markWordKnown, knownCount, isKnown,
    recordQuizResult, quizAverage, activitiesCompleted, courseProgressPct,
    bestFor,
    dailyState, dailySwipeRight, dailySwipeLeft, dailyIsReadyForCheck, dailyCompleteCheck,
    DAILY_SIZE,
    get streak(){ return load().streak || 0; },
    reset, clearGuest,
    invalidate(){ cache = null; cacheKey = null; },
  };
})();
