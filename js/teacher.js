/* =========================================================================
   TEACHER — a local admin account, a class roster and a progress dashboard.

   ⚠ THE ACCOUNT BELOW IS A LOCAL DEVELOPMENT FIXTURE, NOT SECURITY. ⚠
   The credentials are in this file, which ships to every browser, so anyone
   who opens devtools can read them and sign in as the teacher. That is
   acceptable only because everything it unlocks is also local: a roster and
   progress snapshots in this browser's own localStorage. Before this is put
   in front of real students it must move to the PHP/MySQL backend — a
   `teacher` role on the users table, a classes/enrolments table, and a
   server-side endpoint that checks the session role before returning anyone
   else's progress. See TEACHER_SETUP.md.

   Student progress shown here comes from two places:
     • sample students, seeded once so the dashboard is reviewable; and
     • snapshots written whenever a signed-in learner studies in THIS
       browser, matched to the roster by email.
   A student enrolled here who has never studied on this device therefore
   shows "no data yet" — the dashboard says so rather than implying zero.
   ========================================================================= */

const Teacher = (() => {
  /* --- the local fixture account ---------------------------------------- */
  const LOCAL_TEACHER = {
    email: 'teacher@nimman.local',
    password: 'nimman-teacher',
    name: 'Admin Teacher',
    role: 'teacher',
  };

  const ROSTER_KEY   = 'nimman_roster_v1';
  const SNAPSHOT_KEY = 'nimman_student_progress_v1';
  const SEEDED_KEY   = 'nimman_roster_seeded_v1';

  const T = (en, th) => I18N.current === 'th' ? th : en;
  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

  let selected = null;        // email of the student whose detail is open
  let courseFilter = 'all';
  let query = '';

  /* --------------------------------------------------------------- store */
  function readJSON(key, fallback){
    try { const v = JSON.parse(localStorage.getItem(key)); return v == null ? fallback : v; }
    catch(e){ return fallback; }
  }
  function writeJSON(key, value){
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch(e){ return false; }
  }

  function roster(){ return readJSON(ROSTER_KEY, []); }
  function setRoster(list){ writeJSON(ROSTER_KEY, list); }
  function snapshots(){ return readJSON(SNAPSHOT_KEY, {}); }
  function setSnapshots(map){ writeJSON(SNAPSHOT_KEY, map); }

  const snapKey = (email, course) => `${String(email).toLowerCase()}__${course}`;

  /* ------------------------------------------------------------- seeding */
  /* Six sample students so the dashboard is reviewable on a fresh install.
     Every one is flagged `sample:true`, badged in the table, and removable in
     one tap — nothing here is ever mistaken for a real learner's record. */
  const SAMPLES = [
    { name:'Ploy Suwannee',   email:'ploy.s@sample.local',   course:'spa',    chapters:3, words:118, streak:6,  assessAvg:74, activities:19, daysAgo:0 },
    { name:'Nut Kittipong',   email:'nut.k@sample.local',    course:'spa',    chapters:5, words:241, streak:21, assessAvg:91, activities:44, daysAgo:0 },
    { name:'Mai Thanaporn',   email:'mai.t@sample.local',    course:'salon',  chapters:1, words:26,  streak:2,  assessAvg:58, activities:5,  daysAgo:1 },
    { name:'Arm Chaiwat',     email:'arm.c@sample.local',    course:'cruise', chapters:4, words:163, streak:9,  assessAvg:82, activities:27, daysAgo:2 },
    { name:'Fon Rattana',     email:'fon.r@sample.local',    course:'cruise', chapters:2, words:71,  streak:0,  assessAvg:49, activities:11, daysAgo:12 },
    { name:'Bee Natcha',      email:'bee.n@sample.local',    course:'spa',    chapters:0, words:8,   streak:1,  assessAvg:null, activities:1, daysAgo:5 },
  ];

  function seedOnce(){
    if (readJSON(SEEDED_KEY, false)) return;
    const list = roster();
    const snaps = snapshots();
    SAMPLES.forEach(s => {
      if (list.some(r => r.email === s.email)) return;
      list.push({ name:s.name, email:s.email, course:s.course, sample:true,
        enrolled: Date.now() - (30 + s.daysAgo) * 86400000 });
      const mods = (typeof CURRICULUM_DATA !== 'undefined' && CURRICULUM_DATA.modules[s.course]) || [];
      snaps[snapKey(s.email, s.course)] = {
        course: s.course,
        chapters: mods.slice(0, s.chapters).map(m => m.id),
        words: s.words, streak: s.streak, assessAvg: s.assessAvg,
        activities: s.activities, dailyDone: s.daysAgo === 0 && s.streak > 0,
        updated: Date.now() - s.daysAgo * 86400000,
      };
    });
    setRoster(list); setSnapshots(snaps); writeJSON(SEEDED_KEY, true);
  }

  function clearSamples(){
    setRoster(roster().filter(r => !r.sample));
    const snaps = snapshots();
    SAMPLES.forEach(s => { delete snaps[snapKey(s.email, s.course)]; });
    setSnapshots(snaps);
    selected = null;
    render();
  }

  /* --------------------------------------------------------- capture ----
     Called whenever a signed-in learner is on their Daily tab. Writes what
     the dashboard needs for that learner and course; guests have no email
     and are never recorded. */
  function capture(){
    const u = Auth.currentUser();
    if (!u || u.guest || !u.email) return;
    if (u.role === 'teacher') return;
    const course = Courses.currentId;
    const mods = (typeof CURRICULUM_DATA !== 'undefined' && CURRICULUM_DATA.modules[course]) || [];
    const ls = Progress.learningState();
    const d = Progress.dailyState();
    const snaps = snapshots();
    snaps[snapKey(u.email, course)] = {
      course,
      chapters: mods.filter(m => ls.modules[m.id]).map(m => m.id),
      words: Progress.knownCount(),
      streak: Progress.streak,
      assessAvg: Progress.quizAverage(),
      activities: Progress.activitiesCompleted(),
      dailyDone: !!d.checkDone,
      updated: Date.now(),
    };
    setSnapshots(snaps);
  }

  /* ------------------------------------------------------------- queries */
  function snapshotFor(student){ return snapshots()[snapKey(student.email, student.course)] || null; }
  function chapterTotal(course){
    const mods = (typeof CURRICULUM_DATA !== 'undefined' && CURRICULUM_DATA.modules[course]) || [];
    return mods.length;
  }
  function courseName(id){
    const c = Courses.all.find(x => x.id === id);
    return c ? I18N.t(c.nameKey) : id;
  }

  function rows(){
    return roster()
      .filter(s => courseFilter === 'all' || s.course === courseFilter)
      .filter(s => !query || (s.name + ' ' + s.email).toLowerCase().includes(query.toLowerCase()))
      .map(s => {
        const snap = snapshotFor(s);
        const total = chapterTotal(s.course);
        const done = snap ? snap.chapters.length : 0;
        return { ...s, snap, total, done, pct: total ? Math.round(done / total * 100) : 0 };
      })
      .sort((a, b) => b.pct - a.pct || a.name.localeCompare(b.name));
  }

  const DAY = 86400000;
  function activeThisWeek(r){ return r.snap && (Date.now() - r.snap.updated) < 7 * DAY; }

  function relative(ts){
    if (!ts) return T('never', 'ยังไม่เคย');
    const days = Math.floor((Date.now() - ts) / DAY);
    if (days <= 0) return T('today', 'วันนี้');
    if (days === 1) return T('yesterday', 'เมื่อวาน');
    if (days < 7) return T(`${days} days ago`, `${days} วันก่อน`);
    const weeks = Math.floor(days / 7);
    return weeks === 1 ? T('1 week ago', '1 สัปดาห์ก่อน') : T(`${weeks} weeks ago`, `${weeks} สัปดาห์ก่อน`);
  }

  /* -------------------------------------------------------------- render */
  /* A ratio against a limit is a meter, not a chart: the unfilled track is a
     lighter step of the same ramp so the whole bar reads as one scale, and
     the state is written out beside it rather than carried by colour alone. */
  function meter(done, total, pct){
    const state = total && done >= total ? 'done' : pct >= 40 ? 'on' : 'behind';
    return `<div class="tm-meter" role="img"
      aria-label="${esc(T(`${done} of ${total} chapters studied`, `เรียนแล้ว ${done} จาก ${total} บท`))}">
      <div class="tm-track"><div class="tm-fill is-${state}" style="width:${pct}%"></div></div>
      <span class="tm-meter-val">${done}/${total || '—'}</span>
    </div>`;
  }

  function kpis(all){
    const withData = all.filter(r => r.snap);
    const avgPct = withData.length ? Math.round(withData.reduce((n, r) => n + r.pct, 0) / withData.length) : 0;
    const avgStreak = withData.length ? Math.round(withData.reduce((n, r) => n + (r.snap.streak || 0), 0) / withData.length) : 0;
    const active = all.filter(activeThisWeek).length;
    const tiles = [
      [all.length, T('Students enrolled', 'นักเรียนที่ลงทะเบียน'), ''],
      [active, T('Studied this week', 'เรียนในสัปดาห์นี้'), all.length ? `${Math.round(active / all.length * 100)}%` : ''],
      [avgPct + '%', T('Average chapters done', 'ความคืบหน้าบทเรียนเฉลี่ย'), ''],
      [avgStreak, T('Average daily streak', 'สถิติต่อเนื่องเฉลี่ย'), T('days', 'วัน')],
    ];
    return `<div class="tm-kpis">${tiles.map(([v, label, note]) => `
      <div class="tm-kpi"><b>${esc(v)}</b><span>${esc(label)}</span>${note ? `<em>${esc(note)}</em>` : ''}</div>`).join('')}</div>`;
  }

  function table(all){
    if (!all.length){
      return `<p class="tm-empty">${esc(roster().length
        ? T('No students match this filter.', 'ไม่มีนักเรียนที่ตรงกับตัวกรองนี้')
        : T('No students enrolled yet. Use the form below to add one.', 'ยังไม่มีนักเรียน ใช้แบบฟอร์มด้านล่างเพื่อเพิ่ม'))}</p>`;
    }
    return `<div class="tm-table" role="table">
      <div class="tm-row tm-head" role="row">
        <span role="columnheader">${esc(T('Student', 'นักเรียน'))}</span>
        <span role="columnheader">${esc(T('Course', 'หลักสูตร'))}</span>
        <span role="columnheader">${esc(T('Chapters', 'บทเรียน'))}</span>
        <span role="columnheader">${esc(T('Words', 'คำศัพท์'))}</span>
        <span role="columnheader">${esc(T('Streak', 'ต่อเนื่อง'))}</span>
        <span role="columnheader">${esc(T('Last studied', 'เรียนล่าสุด'))}</span>
      </div>
      ${all.map(r => `<div class="tm-row ${selected === r.email ? 'is-open' : ''}" role="row"
          tabindex="0" data-tm-student="${esc(r.email)}">
        <span role="cell" class="tm-name">
          <b>${esc(r.name)}</b>
          ${r.sample ? `<span class="tm-sample">${esc(T('SAMPLE', 'ตัวอย่าง'))}</span>` : ''}
          <small>${esc(r.email)}</small>
        </span>
        <span role="cell" class="tm-course">${esc(courseName(r.course))}</span>
        <span role="cell">${meter(r.done, r.total, r.pct)}</span>
        <span role="cell" class="tm-num" data-label="${esc(T('words', 'คำศัพท์'))}">${r.snap ? r.snap.words : '—'}</span>
        <span role="cell" class="tm-num" data-label="${esc(T('streak', 'ต่อเนื่อง'))}">${r.snap ? r.snap.streak : '—'}</span>
        <span role="cell" class="tm-when" data-label="${esc(T('last studied', 'เรียนล่าสุด'))}">${esc(relative(r.snap && r.snap.updated))}</span>
      </div>
      ${selected === r.email ? detail(r) : ''}`).join('')}
    </div>`;
  }

  function detail(r){
    const mods = (typeof CURRICULUM_DATA !== 'undefined' && CURRICULUM_DATA.modules[r.course]) || [];
    const taken = new Set(r.snap ? r.snap.chapters : []);
    return `<div class="tm-detail" role="row">
      ${!r.snap ? `<p class="tm-nodata">${esc(T(
        'No study data on this device yet. Progress appears here once this student signs in and studies in this browser.',
        'ยังไม่มีข้อมูลการเรียนบนอุปกรณ์นี้ ความคืบหน้าจะปรากฏเมื่อนักเรียนเข้าสู่ระบบและเรียนในเบราว์เซอร์นี้'))}</p>` : `
      <div class="tm-detail-stats">
        <div><b>${r.snap.activities}</b><span>${esc(T('activities done', 'กิจกรรมที่ทำแล้ว'))}</span></div>
        <div><b>${r.snap.assessAvg == null ? '—' : r.snap.assessAvg + '%'}</b><span>${esc(T('practice average', 'คะแนนฝึกเฉลี่ย'))}</span></div>
        <div><b>${r.snap.dailyDone ? esc(T('Done', 'เสร็จแล้ว')) : esc(T('Not yet', 'ยังไม่เสร็จ'))}</b><span>${esc(T('today’s Daily Five', 'ห้าคำประจำวันนี้'))}</span></div>
      </div>`}
      <h4>${esc(T('Chapters taken', 'บทเรียนที่เรียนแล้ว'))}</h4>
      <ol class="tm-chapters">${mods.map(m => `<li class="${taken.has(m.id) ? 'is-done' : ''}">
        <span class="tm-tick" aria-hidden="true">${taken.has(m.id) ? '✓' : ''}</span>
        <span>${esc(I18N.current === 'th' ? m.th : m.title)}</span>
        <em>${esc(taken.has(m.id) ? T('studied', 'เรียนแล้ว') : T('not yet', 'ยังไม่เรียน'))}</em>
      </li>`).join('')}</ol>
      <p class="lh-caption">${esc(T(
        '“Studied” is the learner’s own mark on a chapter, not a graded result.',
        '“เรียนแล้ว” คือการที่ผู้เรียนทำเครื่องหมายเอง ไม่ใช่ผลการประเมิน'))}</p>
      <div class="tm-detail-actions">
        <button type="button" class="lh-link" data-tm="unenrol" data-email="${esc(r.email)}">${esc(T('Remove from class', 'นำออกจากชั้นเรียน'))}</button>
      </div>
    </div>`;
  }

  function enrolForm(){
    return `<section class="lh-panel tm-enrol">
      <h3>${esc(T('Enrol a student', 'ลงทะเบียนนักเรียน'))}</h3>
      <form id="tmEnrolForm" novalidate>
        <div class="tm-enrol-grid">
          <label>${esc(T('Full name', 'ชื่อ-นามสกุล'))}<input type="text" id="tmName" autocomplete="off" required></label>
          <label>${esc(T('Email', 'อีเมล'))}<input type="email" id="tmEmail" autocomplete="off" required></label>
          <label>${esc(T('Course', 'หลักสูตร'))}<select id="tmCourse">${
            Courses.all.map(c => `<option value="${esc(c.id)}">${esc(I18N.t(c.nameKey))}</option>`).join('')}</select></label>
        </div>
        <p class="tm-error" id="tmError" hidden></p>
        <button type="submit" class="btn btn-gold">${esc(T('Enrol student', 'ลงทะเบียน'))} →</button>
      </form>
      <p class="lh-caption">${esc(T(
        'Enrolling adds the student to this class list on this device. It does not create a sign-in for them — account creation still happens on the register screen, and the two are matched by email.',
        'การลงทะเบียนจะเพิ่มนักเรียนเข้าชั้นเรียนบนอุปกรณ์นี้ แต่ไม่ได้สร้างบัญชีเข้าสู่ระบบให้ นักเรียนยังต้องสมัครเองที่หน้าสมัครสมาชิก และระบบจะจับคู่กันด้วยอีเมล'))}</p>
    </section>`;
  }

  function render(){
    const root = document.getElementById('teacherRoot');
    if (!root) return;
    const all = rows();
    const hasSamples = roster().some(r => r.sample);
    root.innerHTML = `
      <div class="tm-banner">
        <b>${esc(T('Local teacher account', 'บัญชีครูแบบใช้ในเครื่อง'))}</b>
        <span>${esc(T(
          'This dashboard reads a class list and progress kept in this browser only. It is a local build for review — not a server, and not a place for real student records yet.',
          'แดชบอร์ดนี้อ่านรายชื่อชั้นเรียนและความคืบหน้าที่เก็บไว้ในเบราว์เซอร์นี้เท่านั้น เป็นเวอร์ชันสำหรับทดลองใช้ ยังไม่ใช่เซิร์ฟเวอร์และยังไม่ควรใช้เก็บข้อมูลนักเรียนจริง'))}</span>
      </div>
      ${kpis(all)}
      <div class="tm-controls">
        <label class="filter-field"><span>${esc(T('Course', 'หลักสูตร'))}</span>
          <select id="tmFilterCourse">
            <option value="all" ${courseFilter === 'all' ? 'selected' : ''}>${esc(T('All courses', 'ทุกหลักสูตร'))}</option>
            ${Courses.all.map(c => `<option value="${esc(c.id)}" ${courseFilter === c.id ? 'selected' : ''}>${esc(I18N.t(c.nameKey))}</option>`).join('')}
          </select></label>
        <label class="filter-field"><span>${esc(T('Find a student', 'ค้นหานักเรียน'))}</span>
          <input type="search" id="tmSearch" value="${esc(query)}" placeholder="${esc(T('Name or email', 'ชื่อหรืออีเมล'))}"></label>
      </div>
      ${table(all)}
      ${hasSamples ? `<p class="tm-sample-note">${esc(T(
        'Rows badged SAMPLE are seeded demo data, not real students.', 'แถวที่มีป้าย “ตัวอย่าง” เป็นข้อมูลสาธิต ไม่ใช่นักเรียนจริง'))}
        <button type="button" class="lh-link" data-tm="clear-samples">${esc(T('Remove all sample students', 'ลบนักเรียนตัวอย่างทั้งหมด'))}</button></p>` : ''}
      ${enrolForm()}`;
  }

  /* ---------------------------------------------------------------- flow */
  function isLocalTeacher(email, password){
    return String(email).trim().toLowerCase() === LOCAL_TEACHER.email &&
           password === LOCAL_TEACHER.password;
  }
  function isTeacher(){
    const u = Auth.currentUser();
    return !!(u && u.role === 'teacher');
  }

  /* Signs the fixture account in without touching the server: it does not
     exist there, and pretending otherwise would just produce a login error. */
  function signIn(){
    localStorage.setItem('spa_session', JSON.stringify({
      name: LOCAL_TEACHER.name, email: LOCAL_TEACHER.email,
      role: 'teacher', lang: I18N.current, guest: false, local: true,
    }));
  }

  function open(){
    seedOnce();
    document.body.classList.add('teacher-mode');
    document.getElementById('authWrap').classList.remove('active');
    document.getElementById('appShell').style.display = 'block';
    // The topbar normally names the course being studied; a teacher is not
    // studying one, so it names them instead.
    const h1 = document.querySelector('.brand-text h1');
    const tag = document.querySelector('.brand-text p');
    if (h1) h1.textContent = LOCAL_TEACHER.name;
    if (tag) tag.textContent = T('Teacher · class dashboard', 'ครูผู้สอน · แดชบอร์ดชั้นเรียน');
    render();
    Nav.go('teacher');
  }

  function exit(){ document.body.classList.remove('teacher-mode'); }

  function enrol(name, email, course){
    name = String(name || '').trim();
    email = String(email || '').trim().toLowerCase();
    if (!name || !email) return { ok:false, error: T('Enter a name and an email.', 'กรุณากรอกชื่อและอีเมล') };
    if (!Auth.isValidEmail(email)) return { ok:false, error: T('That email does not look right.', 'รูปแบบอีเมลไม่ถูกต้อง') };
    const list = roster();
    if (list.some(s => s.email === email && s.course === course)){
      return { ok:false, error: T('That student is already in this course.', 'นักเรียนคนนี้อยู่ในหลักสูตรนี้แล้ว') };
    }
    list.push({ name, email, course, sample:false, enrolled: Date.now() });
    setRoster(list);
    return { ok:true };
  }

  function unenrol(email){
    if (!window.confirm(T('Remove this student from the class list? Their own progress is not deleted.',
      'นำนักเรียนคนนี้ออกจากรายชื่อชั้นเรียนหรือไม่? ความคืบหน้าของนักเรียนจะไม่ถูกลบ'))) return;
    setRoster(roster().filter(s => s.email !== email));
    selected = null;
    render();
  }

  /* ------------------------------------------------------------- wiring */
  function init(){
    const screen = document.getElementById('screen-teacher');
    if (!screen) return;

    screen.addEventListener('click', e => {
      const act = e.target.closest('[data-tm]');
      if (act){
        if (act.dataset.tm === 'clear-samples') clearSamples();
        if (act.dataset.tm === 'unenrol') unenrol(act.dataset.email);
        return;
      }
      const row = e.target.closest('[data-tm-student]');
      if (row){
        selected = selected === row.dataset.tmStudent ? null : row.dataset.tmStudent;
        render();
      }
    });

    screen.addEventListener('keydown', e => {
      const row = e.target.closest('[data-tm-student]');
      if (row && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); row.click(); }
    });

    screen.addEventListener('change', e => {
      if (e.target.id === 'tmFilterCourse'){ courseFilter = e.target.value; selected = null; render(); }
    });

    let timer;
    screen.addEventListener('input', e => {
      if (e.target.id !== 'tmSearch') return;
      query = e.target.value;
      clearTimeout(timer);
      timer = setTimeout(() => {
        const pos = e.target.selectionStart;
        render();
        const input = document.getElementById('tmSearch');
        if (input){ input.focus({ preventScroll:true }); input.setSelectionRange(pos, pos); }
      }, 200);
    });

    screen.addEventListener('submit', e => {
      if (e.target.id !== 'tmEnrolForm') return;
      e.preventDefault();
      const res = enrol(
        document.getElementById('tmName').value,
        document.getElementById('tmEmail').value,
        document.getElementById('tmCourse').value);
      if (!res.ok){
        const box = document.getElementById('tmError');
        box.textContent = res.error; box.hidden = false;
        return;
      }
      render();
    });
  }

  return { init, open, exit, render, capture, isTeacher, isLocalTeacher, signIn,
           credentials: { email: LOCAL_TEACHER.email, password: LOCAL_TEACHER.password } };
})();
