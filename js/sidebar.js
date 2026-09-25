/* =========================================================================
   SIDE PANEL — profile, progress and navigation.

   Two behaviours from one control:
     • below 1024px it is an overlay drawer, closed by default, opened from
       the topbar button and dismissed by the backdrop, Escape, or picking a
       destination. The bottom tab bar stays as the primary navigation.
     • from 1024px up it docks beside the content. The same button then
       hides/shows it, and that choice is remembered. While it is docked the
       tab bar is hidden, because the panel already carries every
       destination; hiding the panel brings the tab bar straight back, so
       there is never a state with no navigation.
   ========================================================================= */

const Sidebar = (() => {
  const DOCK_WIDTH = 1024;
  const HIDE_KEY = 'spa_sidebar_hidden';

  function docked(){
    return typeof window.matchMedia === 'function' &&
           window.matchMedia(`(min-width:${DOCK_WIDTH}px)`).matches;
  }
  function isHidden(){
    try { return localStorage.getItem(HIDE_KEY) === '1'; } catch(e){ return false; }
  }
  function storeHidden(v){
    try { localStorage.setItem(HIDE_KEY, v ? '1' : '0'); } catch(e){}
  }

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  /* ---------------------------------------------------------------- state */

  /* True only while the main app is on screen. The panel lives inside
     .app-shell, so it is absent on the sign-in and course-chooser screens —
     and the docked layout's left gutter has to disappear with it, or those
     screens sit 280px off-centre against a sidebar that isn't there. */
  function appVisible(){
    const shell = document.getElementById('appShell');
    return !!shell && getComputedStyle(shell).display !== 'none';
  }

  function applyState(){
    const body = document.body;
    body.classList.toggle('app-visible', appVisible());
    body.classList.toggle('sb-hidden', isHidden());
    const open = docked() ? !isHidden() : body.classList.contains('sb-open');
    const toggle = document.getElementById('sbToggle');
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    const backdrop = document.getElementById('sideBackdrop');
    if (backdrop) backdrop.hidden = docked() || !body.classList.contains('sb-open');
  }

  function open(){ document.body.classList.add('sb-open'); applyState(); }
  function close(){ document.body.classList.remove('sb-open'); applyState(); }

  function toggle(){
    if (docked()) storeHidden(!isHidden());
    else document.body.classList.toggle('sb-open');
    applyState();
  }

  /* ----------------------------------------------------------------- data */

  /* Mirrors the home screen: progress is "modules marked studied" for the
     active course, falling back to nothing when a course has no curriculum
     modules rather than dividing by zero. */
  function moduleProgress(){
    const modules = (typeof CURRICULUM_DATA !== 'undefined' &&
                     CURRICULUM_DATA.modules[Courses.currentId]) || [];
    if (!modules.length) return null;
    const state = Progress.learningState();
    const studied = modules.filter(m => state.modules[m.id]).length;
    return { studied, total: modules.length, pct: Math.round(studied / modules.length * 100) };
  }

  function bar(label, value, max, valueText){
    const pct = max ? Math.min(100, Math.round(value / max * 100)) : 0;
    return `<div class="sb-bar">
      <div class="sb-bar-head"><span>${esc(label)}</span><b>${esc(valueText)}</b></div>
      <div class="sb-bar-track"><i style="width:${pct}%"></i></div>
    </div>`;
  }

  /* The bottom bar carries the five places a learner goes repeatedly; this
     panel is the full index, grouped, so everything in the app is listed
     exactly once and nothing is reachable only from one screen. Entries
     appear only where the active course actually has that content. */
  function navGroups(){
    return [
      { items:[{ screen:'home', key:'navHome' }] },
      { titleKey:'sidebarGroupLearn', items:[
        { screen:'learning', key:'navLearning' },
        { screen:'daily',    key:'navDaily' },
      ]},
      { titleKey:'sidebarGroupWords', items:[
        { screen:'vocab',   key:'navVocab' },
        ...(Anatomy.available() ? [{ screen:'anatomy', key:'menuAnatomyTitle' }] : []),
        ...(typeof PRON !== 'undefined' && PRON.length ? [{ screen:'pron', key:'menuPronTitle' }] : []),
        { screen:'phrases', key:'navPhrases' },
        ...(typeof SAYTHIS !== 'undefined' && SAYTHIS.length ? [{ screen:'saythis', key:'menuSaythisTitle' }] : []),
      ]},
      { titleKey:'sidebarGroupPractice', items:[
        { screen:'assess', key:'navPractice' },
      ]},
      { titleKey:'sidebarGroupAccount', items:[
        { screen:'account',  key:'accountHeading' },
        { screen:'settings', key:'settingsHeading' },
      ]},
    ];
  }

  function navList(items){
    const active = currentScreen();
    return items.map(n =>
      `<button class="sb-nav-item${n.screen === active ? ' active' : ''}" data-sb-go="${n.screen}">
        ${esc(I18N.t(n.key))}
      </button>`).join('');
  }

  function navMarkup(){
    return navGroups().map(g =>
      `${g.titleKey ? `<p class="sb-nav-title">${esc(I18N.t(g.titleKey))}</p>` : ''}
       ${navList(g.items)}`).join('');
  }

  function currentScreen(){
    const el = document.querySelector('.screen.active');
    return el ? el.id.replace('screen-', '') : 'home';
  }

  /* --------------------------------------------------------------- render */

  function render(){
    const host = document.getElementById('sideBarBody');
    if (!host) return;

    const user = Auth.currentUser();
    const guest = !user || user.guest;
    const name = guest ? I18N.t('accountGuestName') : (user.name || '');
    const initial = guest ? 'G' : (name.trim()[0] || 'G').toUpperCase();
    const roleKeys = { therapist:'roleTherapist', reception:'roleReception', manager:'roleManager', other:'roleOther' };
    const role = guest ? '' : I18N.t(roleKeys[user.role] || 'roleOther');

    const course = Courses.active;
    const mp = moduleProgress();
    const avg = Progress.quizAverage();
    const vocabTotal = (typeof VOCAB !== 'undefined' && VOCAB.length) || 0;

    host.innerHTML = `
      <div class="sb-profile">
        <span class="sb-avatar">${esc(initial)}</span>
        <span class="sb-who">
          <b>${esc(name)}</b>
          ${role ? `<span class="sb-role">${esc(role)}</span>` : ''}
          ${guest ? `<span class="sb-guest">${esc(I18N.t('sidebarGuestNote'))}</span>` : `<span class="sb-email">${esc(user.email || '')}</span>`}
        </span>
      </div>

      ${course ? `<button class="sb-course" data-sb-action="switch">
        <span class="sb-course-mark">${COURSE_ICONS[course.icon] || ''}</span>
        <span class="sb-course-body">
          <span class="sb-course-label">${esc(I18N.t('courseStudying'))}</span>
          <b>${esc(I18N.t(course.nameKey))}</b>
        </span>
        <span class="sb-course-switch">${esc(I18N.t('courseSwitch'))}</span>
      </button>` : ''}

      <div class="sb-section">
        ${mp ? bar(I18N.t('courseProgress'), mp.studied, mp.total, `${mp.studied}/${mp.total}`) : ''}
        ${bar(I18N.t('statWords'), Progress.knownCount(), vocabTotal, `${Progress.knownCount()}/${vocabTotal}`)}
        ${bar(I18N.t('statLessons'), Progress.activitiesCompleted(), 8, String(Progress.activitiesCompleted()))}
        <div class="sb-mini">
          <span><b>${avg === null ? '—' : avg + '%'}</b>${esc(I18N.t('statQuiz'))}</span>
          <span><b>${Progress.streak || 0}</b>${esc(I18N.t('sidebarStreak'))}</span>
        </div>
      </div>

      <nav class="sb-nav" aria-label="${esc(I18N.t('sidebarGoTo'))}">
        ${navMarkup()}
      </nav>

      <button class="sb-hide" data-sb-action="hide">${esc(I18N.t('sidebarHide'))}</button>
    `;
    applyState();
  }

  /* Cheap update used on every navigation — no re-render, just the marker. */
  function setActive(screen){
    document.querySelectorAll('#sideBar .sb-nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.sbGo === screen);
    });
  }

  /* ---------------------------------------------------------------- wiring */

  function go(screen){
    if (!docked()) close();
    // The Learning tab has its own entry point (it renders before navigating).
    if (screen === 'learning' && typeof LearningHub !== 'undefined') LearningHub.open();
    else Nav.go(screen);
  }

  function init(){
    applyState();

    /* app.js shows and hides the shell by writing style.display in several
       places (sign in, sign out, course chooser, cancel). Watching the
       attribute keeps the docked gutter in step without threading a call
       through every one of them. */
    const shell = document.getElementById('appShell');
    if (shell && typeof MutationObserver === 'function'){
      new MutationObserver(applyState)
        .observe(shell, { attributes:true, attributeFilter:['style'] });
    }

    const toggleBtn = document.getElementById('sbToggle');
    if (toggleBtn) toggleBtn.addEventListener('click', toggle);
    const closeBtn = document.getElementById('sbClose');
    if (closeBtn) closeBtn.addEventListener('click', () => docked() ? toggle() : close());
    const backdrop = document.getElementById('sideBackdrop');
    if (backdrop) backdrop.addEventListener('click', close);

    document.getElementById('sideBar').addEventListener('click', e => {
      const nav = e.target.closest('[data-sb-go]');
      if (nav){ go(nav.dataset.sbGo); return; }
      const action = e.target.closest('[data-sb-action]');
      if (!action) return;
      if (action.dataset.sbAction === 'switch'){
        if (!docked()) close();
        App.showCourseChooser({ cancellable:true });
      }
      if (action.dataset.sbAction === 'hide'){
        if (docked()) storeHidden(true); else close();
        applyState();
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.body.classList.contains('sb-open')) close();
    });

    // Crossing the dock breakpoint must not leave the drawer's open class
    // behind, or the panel reappears unbidden after a rotation or resize.
    let wasDocked = docked();
    window.addEventListener('resize', () => {
      const now = docked();
      if (now !== wasDocked){
        wasDocked = now;
        document.body.classList.remove('sb-open');
        applyState();
      }
    });
  }

  return { init, render, setActive, open, close, toggle };
})();
