/* Account course windows are authoritative on the server. This in-memory
   mirror drives the UI only; resetting progress or signing out never renews it. */
const CourseAccess = (() => {
  const DAY = 86400000;
  const T = (en, th) => I18N.current === 'th' ? th : en;
  let records = {}, owner = null, generation = 0, loaded = false, loading = false;
  let serverAt = 0, receivedAt = 0, wallAt = 0, timer = null, lastSync = 0;
  let trigger = 'course_start', error = null;
  const monotonic = () => typeof performance !== 'undefined' ? performance.now() : Date.now();
  const localMode = () => { const u = Auth.currentUser(); return !u || u.guest || u.is_admin || u.must_change_password; };
  function now(){
    // A wall clock moved backwards cannot extend the visible study period.
    return serverAt ? serverAt + Math.max(0, monotonic() - receivedAt, Date.now() - wallAt) : Date.now();
  }
  function emit(){ window.dispatchEvent(new CustomEvent('nimman:access-change')); }
  function reset(){
    generation++; clearTimeout(timer); timer = null;
    records = {}; owner = null; loaded = false; loading = false; error = null;
    serverAt = 0; receivedAt = 0; wallAt = 0; lastSync = 0; trigger = 'course_start';
  }
  function get(id = Courses.currentId){
    if (localMode()) return { course_id:id, status:'preview', started_at:null, expires_at:null, remaining_days:0 };
    if (owner !== Auth.currentUser()?.email || !loaded) return { course_id:id, status:'unavailable' };
    const r = records[id];
    if (!r) return { course_id:id, status:'unavailable' };
    const end = Date.parse(r.expires_at);
    const status = r.status === 'active' && (!Number.isFinite(end) || now() >= end) ? 'expired' : r.status;
    return { ...r, status, remaining_days:status === 'active' ? Math.max(1, Math.ceil((end - now()) / DAY)) : 0 };
  }
  function schedule(){
    clearTimeout(timer);
    const ends = Object.values(records).filter(r => r.status === 'active').map(r => Date.parse(r.expires_at) - now());
    if (!ends.length) return;
    timer = setTimeout(check, Math.max(1, Math.min(30000, ...ends)));
  }
  function check(){
    let changed = false;
    Object.keys(records).forEach(id => {
      if (records[id].status === 'active' && get(id).status === 'expired'){
        records[id] = { ...records[id], status:'expired', remaining_days:0 }; changed = true;
      }
    });
    schedule();
    // Countdown labels refresh even when the course remains active.
    emit();
    return changed;
  }
  function apply(payload, email){
    const instant = Date.parse(payload.server_now);
    if (!payload.courses || !Number.isFinite(instant)) throw { error:'invalid_access' };
    const next = {};
    Courses.all.forEach(c => {
      const r = payload.courses[c.id];
      if (!r || !['not_started','active','expired'].includes(r.status)) throw { error:'invalid_access' };
      if (r.status !== 'not_started' && (!Number.isFinite(Date.parse(r.started_at)) || !Number.isFinite(Date.parse(r.expires_at)))) throw { error:'invalid_access' };
      next[c.id] = { ...r };
    });
    records = next; owner = email; loaded = true; error = null;
    serverAt = instant; receivedAt = monotonic(); wallAt = Date.now(); lastSync = Date.now();
    trigger = payload.trigger === 'registration' ? 'registration' : 'course_start';
    schedule();
  }
  async function request(course){
    if (localMode()) return true;
    const email = Auth.currentUser().email, token = generation;
    loading = true; error = null; emit();
    try {
      const payload = course ? await Api.post('access.php', { course }) : await Api.get('access.php');
      if (token !== generation || Auth.currentUser()?.email !== email) return false;
      apply(payload, email);
      return true;
    } catch (e){
      if (token !== generation || Auth.currentUser()?.email !== email) return false;
      error = e;
      if (e.status === 401) Auth.forceSignedOut();
      return false;
    } finally {
      if (token === generation){ loading = false; emit(); }
    }
  }
  function canLearn(id = Courses.currentId){ return !localMode() && get(id).status === 'active'; }
  function canVisit(screen){
    const user = Auth.currentUser();
    if (user?.must_change_password) return screen === 'security';
    if (user?.is_admin) return ['admin','security'].includes(screen);
    if (screen === 'admin') return false;
    if (screen === 'security') return !!user && !user.guest;
    if (['account','settings','access'].includes(screen)) return !!Auth.currentUser();
    if (Auth.currentUser()?.guest) return screen === 'preview';
    return canLearn();
  }
  function formatDate(value){
    if (!value || !Number.isFinite(Date.parse(value))) return '';
    return new Intl.DateTimeFormat(I18N.current === 'th' ? 'th-TH' : 'en-GB', {
      day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit', timeZoneName:'short'
    }).format(new Date(value));
  }
  function label(id){
    const r = get(id);
    if (r.status === 'preview') return T('Free course preview', 'ตัวอย่างหลักสูตรฟรี');
    if (r.status === 'not_started') return T('30 days · starts when you begin', '30 วัน · เริ่มนับเมื่อเริ่มหลักสูตร');
    if (r.status === 'expired') return T('Learning period ended', 'สิ้นสุดระยะเวลาเรียนแล้ว');
    if (r.status === 'active') return T(`${r.remaining_days} ${r.remaining_days === 1 ? 'day' : 'days'} left`, `เหลือ ${r.remaining_days} วัน`);
    return T('Checking course access…', 'กำลังตรวจสอบสิทธิ์เรียน…');
  }
  function handleApiError(e, id = Courses.currentId){
    if (!['access_expired','access_not_started'].includes(e?.error)) return false;
    if (records[id]) records[id] = { ...records[id], status:e.error === 'access_expired' ? 'expired' : 'not_started', remaining_days:0 };
    emit(); return true;
  }
  function init(){
    const resume = () => {
      if (document.visibilityState === 'hidden' || !loaded || localMode()) return;
      check();
      if (!loading && Date.now() - lastSync > 60000) request();
    };
    document.addEventListener('visibilitychange', resume);
    window.addEventListener('focus', resume);
  }
  return { init, reset, get, now, canLearn, canVisit, formatDate, label, handleApiError, check,
    load(){ return request(); }, start(id){ return request(id); },
    get ready(){ return loaded && owner === Auth.currentUser()?.email; },
    get loading(){ return loading; }, get error(){ return error; }, get trigger(){ return trigger; },
    dayNumber(id = Courses.currentId){ const r = get(id); return r.started_at ? Math.min(30, Math.max(1, Math.floor((now() - Date.parse(r.started_at)) / DAY) + 1)) : 1; },
  };
})();
