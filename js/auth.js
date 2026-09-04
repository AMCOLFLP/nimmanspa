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
  let guestCache = null;   // session-only, never written to localStorage

  function keyFor(){
    const u = Auth.currentUser();
    return (u && !u.guest) ? `spa_progress_${u.email}` : null;
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
      if (!guestCache) guestCache = blank();
      cache = guestCache; cacheKey = null;
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

  function clearGuest(){ guestCache = null; }

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

  function reset(){ cache = blank(); cacheKey = keyFor(); save(); }

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

  function pickDailyWords(){
    const knownSet = new Set(load().knownWords);
    const seed = dateSeed();
    const fresh  = seededShuffle(VOCAB.filter(v => !knownSet.has(v.word)), seed);
    const review = seededShuffle(VOCAB.filter(v =>  knownSet.has(v.word)), seed + 7);
    return [...fresh, ...review].slice(0, DAILY_SIZE).map(v => v.word);
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

  function dailyCompleteCheck(score, total){
    const p = load();
    const d = dailyState();
    d.checkDone = true;
    d.checkScore = score;
    d.checkTotal = total;
    // Finishing the day's check banks those words as learned.
    const set = new Set(p.knownWords);
    d.words.forEach(w => set.add(w));
    p.knownWords = [...set];
    save();
    recordQuizResult('daily', Math.round((score / total) * 100));
    return d;
  }

  return {
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
