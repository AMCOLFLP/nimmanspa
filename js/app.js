/* =========================================================================
   APP CONTROLLER — navigation, auth flow, static module rendering, boot
   ========================================================================= */

const Nav = {
  tabFor: {
    /* Which bottom-bar tab lights up for each screen. Daily Five is the first
       tab and the app's front door: the old Home screen's sections now sit
       below the deck on that same screen. Pronunciation lives under Words. */
    daily:'daily', learning:'learning', customplay:'assess', customresults:'assess', account:'daily', settings:'daily', vocab:'vocab', anatomy:'vocab', pron:'vocab', interview:'learning',
    phrases:'phrases', saythis:'phrases',
    assess:'assess', mcquiz:'assess', fillquiz:'assess', listen:'assess', speaking:'assess',
    builder:'assess', truefalse:'assess', errorfix:'assess', results:'assess', practiceplay:'assess',
  },

  // Left-to-right tab bar order, used only to pick a slide direction when
  // jumping directly between two root/tab screens (e.g. Home's "Phrase of
  // the day" card opening the Phrases tab).
  rootOrder: ['daily', 'learning', 'vocab', 'phrases', 'assess'],

  /* screen (required), dir ('back' | 'forward', optional).
     Left unset, direction is inferred from the app's tab hierarchy: leaving
     a sub-screen for its root tab screen reads as "back" (pop, slides from
     the left); leaving a root tab for a sub-screen reads as "forward"
     (push, slides from the right); root-to-root reuses tab bar order (moving
     right = forward, left = back). Crumb-back buttons pass 'back' explicitly
     since a couple of sub-screen pairs (e.g. Settings back to Account) are
     ambiguous from hierarchy alone. */
  go(screen, dir){
    if (Auth.currentUser()?.must_change_password && screen !== 'security') { AccountSecurity.open({required:true}); return false; }
    if (Auth.currentUser()?.is_admin && !['admin','security'].includes(screen)) { Admin.open(); return false; }
    if (CourseAccess.canLearn() && !Progress.isHydrated() && !['account','settings','access','security'].includes(screen)){
      App.showCourseChooser({ cancellable:false });
      return false;
    }
    if (!CourseAccess.canVisit(screen)){
      App.showAccessScreen();
      return false;
    }
    Vocab.stopTimers();
    Speaking.stopAll();   // never leave a microphone live behind a screen change
    Speech.stop();
    if(this.transitionCleanup)this.transitionCleanup();

    const current = document.querySelector('.screen.active');
    const target = document.getElementById('screen-' + screen);
    if (!target) return;

    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.tab-item[data-tab="${this.tabFor[screen] || screen}"]`);
    if (tab) tab.classList.add('active');

    const runEffects = () => {
      if (screen === 'daily') Daily.open();
      if (screen === 'settings') App.renderSettings();
      if (screen === 'speaking') Speaking.open();
      if (screen === 'vocab'){ App.renderVocabHint(); Vocab.refreshChrome(); }
      if (screen === 'anatomy') Anatomy.render();
      if (screen === 'interview') Interview.render();
      if (screen === 'assess') App.renderAssessHub();
      if (screen === 'learning') LearningHub.render();
      if (screen === 'customplay') AssessmentBuilder.renderSession();
      if (screen === 'customresults') AssessmentBuilder.renderResults();
      if (screen === 'account') App.renderAccount();
      if (screen === 'daily') App.refreshHome();   // the sections below the deck
      Sidebar.setActive(screen);
    };

    // Re-entering the already-active screen (e.g. the very first Nav.go on
    // boot, which targets the home screen the static markup already shows
    // active): nothing to transition, just refresh its content.
    if (current === target){
      runEffects();
      window.scrollTo(0, 0);
      return;
    }

    if (!dir){
      const curName = current ? current.id.slice(7) : null;
      const curIsRoot = current && current.id === 'screen-' + (this.tabFor[curName] || '');
      const nextIsRoot = screen === this.tabFor[screen];
      if (curIsRoot && nextIsRoot){
        dir = this.rootOrder.indexOf(screen) < this.rootOrder.indexOf(curName) ? 'back' : 'forward';
      } else {
        dir = !curIsRoot && nextIsRoot ? 'back' : 'forward';
      }
    }

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!current || reduced){
      if (current) current.classList.remove('active');
      target.classList.add('active');
      runEffects();
      window.scrollTo(0, 0);
      return;
    }

    const suffix = dir === 'back' ? 'pop' : 'push';
    const outClass = 'nav-out-' + suffix;
    const inClass = 'nav-in-' + suffix;

    current.classList.add(outClass);
    target.classList.add('active', inClass);

    let done = false;
    const cleanup = () => {
      if (done) return;
      done = true;
      if(this.transitionCleanup===cleanup)this.transitionCleanup=null;
      current.classList.remove('active', outClass);
      target.classList.remove(inClass);
      target.removeEventListener('animationend', onAnimEnd);
    };
    // Screens can contain their own animated children (progress rings, a
    // recording mic pulse, a shake on a wrong match…); animationend bubbles,
    // so this ignores anything that didn't fire on the screen element
    // itself — otherwise a child's animation finishing first would both
    // cut the screen's own transition short and, since the listener would
    // never see -- and so never remove -- its real match, leak one stale
    // listener per navigation.
    const onAnimEnd = e => { if (e.target === target) cleanup(); };
    this.transitionCleanup=cleanup;
    target.addEventListener('animationend', onAnimEnd);
    setTimeout(cleanup, 400); // safety net if animationend never fires (e.g. tab backgrounded mid-transition)

    runEffects();
    window.scrollTo(0, 0);
  }
};

const App = (() => {
  let resultsBackTo = 'assess';
  const T = (en, th) => I18N.current === 'th' ? th : en;
  const esc = value => LearningContent.esc(String(value == null ? '' : value));
  let courseMessage = '';
  let authSubmitting = false;

  function stopLearning(){
    Speaking.stopAll(); Vocab.stopTimers(); Speech.stop();
    if (Nav.transitionCleanup) Nav.transitionCleanup();
  }

  async function signOut(register = false){
    if (selectingCourse) return;
    stopLearning();
    const buttons = document.querySelectorAll('#logoutBtn, #courseSignOutBtn, #accRegisterCta, [data-admin-action="logout"], [data-security="logout"]');
    buttons.forEach(button => { button.disabled = true; });
    const surfaces = [document.getElementById('appShell'), document.getElementById('courseWrap')];
    surfaces.forEach(surface => { surface.inert = true; surface.setAttribute('aria-busy','true'); });
    try {
      if (!await Auth.logout()){
        window.alert(T('Your latest progress could not be saved. Check your connection and try signing out again.', 'บันทึกความคืบหน้าล่าสุดไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วออกจากระบบอีกครั้ง'));
        return;
      }
      Progress.clearGuest(); showAuth();
      if (register) switchAuthTab('register');
    } finally {
      buttons.forEach(button => { button.disabled = false; });
      surfaces.forEach(surface => { surface.inert = false; surface.removeAttribute('aria-busy'); });
    }
  }

  function renderAccessChrome(){
    const user = Auth.currentUser(), r = CourseAccess.get();
    const banner = document.getElementById('courseAccessBanner');
    const account = document.getElementById('accountAccessSummary');
    const guest = user?.guest;
    const detail = guest
      ? I18N.t('guestProgressNote')
      : r.expires_at ? T('Access ends ', 'เรียนได้ถึง ') + CourseAccess.formatDate(r.expires_at)
      : T('Your 30 days begin when you start this course.', 'ระยะเวลา 30 วันเริ่มเมื่อคุณเริ่มหลักสูตรนี้');
    const markup = `<div><span class="access-eyebrow">${esc(guest ? T('GUEST ACCOUNT', 'บัญชีผู้เยี่ยมชม') : T('YOUR LEARNING WINDOW', 'ระยะเวลาเรียนของคุณ'))}</span><strong>${esc(CourseAccess.label())}</strong><p>${esc(detail)}</p></div><button type="button" class="btn btn-line" data-access-action="courses">${T('My courses', 'หลักสูตรของฉัน')}</button>`;
    if (banner){ banner.hidden = !user || user.is_admin || user.must_change_password; banner.className = 'access-banner ' + r.status; banner.innerHTML = markup; }
    if (account){ account.className = 'access-summary ' + r.status; account.innerHTML = markup; }
    const progressCaption = document.querySelector('.progress-caption');
    const progressLine = document.querySelector('.progress-line');
    if (progressCaption) progressCaption.hidden = !CourseAccess.canLearn();
    if (progressLine) progressLine.hidden = !CourseAccess.canLearn();
    const reset = document.getElementById('resetProgressBtn');
    if (reset) reset.disabled = !CourseAccess.canLearn();
  }

  function showAccessScreen(){
    if (!Auth.currentUser()){ showAuth(); return; }
    if (Auth.currentUser().guest){ showCourseChooser({ cancellable:true }); return; }
    stopLearning(); hideCourseChooser();
    document.getElementById('appShell').style.display = 'block';
    renderCourseChrome(); renderAccessChrome();
    Sidebar.render(); Sidebar.setActive('access');
    const r = CourseAccess.get(), expired = r.status === 'expired';
    const panel = document.getElementById('courseAccessPanel');
    if (panel) panel.innerHTML = `<div class="access-panel"><span class="access-eyebrow">${esc(Courses.name(Courses.currentId))}</span><h2>${expired ? T('Your 30-day learning period has ended', 'ระยะเวลาเรียน 30 วันของคุณสิ้นสุดแล้ว') : T('Your next chapter starts here', 'เริ่มเส้นทางการเรียนของคุณที่นี่')}</h2><p>${expired ? T('Your saved progress is kept with your account. Lessons and practice are now locked for this course.', 'ความคืบหน้าที่บันทึกไว้ยังอยู่ในบัญชีของคุณ ขณะนี้บทเรียนและแบบฝึกของหลักสูตรนี้ถูกล็อกแล้ว') : T('Choose a course to begin 30 consecutive days of learning and practice.', 'เลือกหลักสูตรเพื่อเริ่มเรียนและฝึกฝนเป็นเวลา 30 วันต่อเนื่อง')}</p>${r.expires_at ? `<p class="access-date">${T('Ended ', 'สิ้นสุดเมื่อ ')}${esc(CourseAccess.formatDate(r.expires_at))}</p>` : ''}<p>${expired ? T('Speak with your course coordinator about your next learning step. You can still view your account and choose another course.', 'ติดต่อผู้ดูแลหลักสูตรเพื่อวางแผนการเรียนขั้นต่อไป คุณยังดูบัญชีและเลือกหลักสูตรอื่นได้') : ''}</p><div class="access-actions"><button type="button" class="btn btn-gold" data-access-action="courses">${T('View my courses', 'ดูหลักสูตรของฉัน')}</button><button type="button" class="btn btn-line" data-access-action="account">${T('View account', 'ดูบัญชี')}</button></div></div>`;
    document.querySelectorAll('.screen.active').forEach(el => el.classList.remove('active'));
    document.getElementById('screen-access')?.classList.add('active');
    document.querySelectorAll('.tab-item').forEach(el => el.classList.remove('active'));
    window.scrollTo(0, 0);
  }

  /* ---------------- auth screen ---------------- */
  function showAuth(){
    Tutorial.close({restoreFocus:false});
    stopLearning();
    Admin.exit();
    AccountSecurity.exit();
    hideCourseChooser();
    document.getElementById('authWrap').classList.add('active');
    document.getElementById('appShell').style.display = 'none';
    switchAuthTab('login');
  }

  /* Every sign-in — account or guest — lands on the course chooser first, so
     the learner always picks spa or cruise for that session before anything
     else loads. Switching later (Home bar, Account) reuses the same screen. */
  async function afterAuthSuccess(){
    document.getElementById('authWrap').classList.remove('active');
    const user = Auth.currentUser();
    AccountSecurity.exit();
    if (user && !user.guest && user.lang && user.lang !== I18N.current){
      I18N.set(user.lang, rerenderAll);
    }
    if (user?.must_change_password){ AccountSecurity.open({required:true}); return; }
    if (user?.is_admin){
      await Admin.open();
      if (Auth.currentUser()?.email === user.email) Tutorial.maybeOpen();
      return;
    }
    showCourseChooser({ cancellable:false });
    if (!user?.guest) await CourseAccess.load();
    const current = Auth.currentUser();
    if (current && current.email === user?.email && current.guest === user?.guest) Tutorial.maybeOpen();
  }

  function switchAuthTab(which){
    const isLogin = which === 'login';
    document.getElementById('tabLogin').classList.toggle('active', isLogin);
    document.getElementById('tabRegister').classList.toggle('active', !isLogin);
    document.getElementById('loginForm').classList.toggle('hidden', !isLogin);
    document.getElementById('registerForm').classList.toggle('hidden', isLogin);
    hideAuthError();
  }

  function showAuthError(msg){
    const box = document.getElementById('authError');
    document.getElementById('authErrorText').textContent = msg;
    box.classList.add('show');
  }
  function hideAuthError(){ document.getElementById('authError').classList.remove('show'); }

  /* Disables a form's submit button while its request is in flight, so a
     slow connection can't be turned into a double account/login attempt. */
  function setFormBusy(form, busy){
    authSubmitting = busy;
    document.querySelectorAll('#authWrap button').forEach(button => { button.disabled = busy; });
  }

  function bindAuth(){
    document.getElementById('tabLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('tabRegister').addEventListener('click', () => switchAuthTab('register'));
    document.getElementById('goRegister').addEventListener('click', () => switchAuthTab('register'));
    document.getElementById('goLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('forgotBtn').addEventListener('click', () => showAuthError(I18N.t('forgotPasswordNote')));

    document.getElementById('loginForm').addEventListener('submit', async e => {
      e.preventDefault();
      if (authSubmitting) return;
      const form = e.target;
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      setFormBusy(form, true);
      const res = await Auth.login({ email, password });
      setFormBusy(form, false);
      if (!res.ok){ showAuthError(res.error); return; }
      hideAuthError();
      form.reset();
      await afterAuthSuccess();
    });

    document.getElementById('registerForm').addEventListener('submit', async e => {
      e.preventDefault();
      if (authSubmitting) return;
      const form = e.target;
      setFormBusy(form, true);
      const res = await Auth.register({
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value,
        confirm: document.getElementById('regConfirm').value,
        role: document.getElementById('regRole').value,
        lang: document.getElementById('regLang').value,
      });
      setFormBusy(form, false);
      if (!res.ok){ showAuthError(res.error); return; }
      hideAuthError();
      form.reset();
      await afterAuthSuccess();
    });

    document.getElementById('guestBtn').addEventListener('click', () => {
      if (authSubmitting) return;
      Auth.continueAsGuest();
      afterAuthSuccess();
    });
  }

  /* ---------------- course chooser ---------------- */
  function showCourseChooser(opts){
    if (Auth.currentUser()?.must_change_password){ AccountSecurity.open({required:true}); return; }
    if (Auth.currentUser()?.is_admin){ Admin.open(); return; }
    stopLearning();
    courseMessage = '';
    const cancellable = !!(opts && opts.cancellable);
    document.getElementById('authWrap').classList.remove('active');
    document.getElementById('appShell').style.display = 'none';
    document.getElementById('courseWrap').classList.add('active');
    document.getElementById('courseBackBtn').style.display = cancellable ? 'block' : 'none';
    renderCourseList();
    window.scrollTo(0, 0);
  }

  function hideCourseChooser(){
    document.getElementById('courseWrap').classList.remove('active');
  }

  function renderCourseList(){
    const current = Courses.saved();
    const user = Auth.currentUser(), guest = !!user?.guest;
    const unavailable = !guest && (!CourseAccess.ready || CourseAccess.loading);
    for (const key of ['courseKicker','courseChooseLede','coursePolicyTitle','coursePolicyBody','courseFaqTitle','courseFaqBody']){
      const guestKey = 'guest' + key[0].toUpperCase() + key.slice(1);
      const element = document.querySelector(`#courseWrap [data-i18n="${key}"], #courseWrap [data-i18n="${guestKey}"]`);
      if (element){
        element.dataset.i18n = guest ? guestKey : key;
        element.textContent = I18N.t(element.dataset.i18n);
      }
    }
    const duration = document.querySelector('#courseWrap .policy-number');
    if (duration) duration.hidden = guest;
    const status = document.getElementById('courseChooserStatus');
    if (status){
      status.hidden = !courseMessage && !CourseAccess.error && !unavailable;
      status.innerHTML = courseMessage ? esc(courseMessage) : CourseAccess.error
        ? `${T('We could not check your course access. Please check your connection and try again.', 'ตรวจสอบสิทธิ์เรียนไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง')} <button type="button" class="btn btn-line" data-access-action="retry">${T('Try again', 'ลองอีกครั้ง')}</button>`
        : T('Checking your learning periods…', 'กำลังตรวจสอบระยะเวลาเรียน…');
    }
    document.getElementById('courseList').innerHTML = Courses.all.map(c => {
      const st = Courses.stats(c.id);
      const isCurrent = c.id === current;
      const access = CourseAccess.get(c.id);
      const cta = guest ? T('Open course', 'เข้าเรียนหลักสูตร') : access.status === 'active' ? T('Continue learning', 'เรียนต่อ') : access.status === 'expired' ? T('View course status', 'ดูสถานะหลักสูตร') : T('Start my 30 days', 'เริ่มเรียน 30 วัน');
      return `<div class="course-card ${isCurrent ? 'current' : ''} ${access.status}" data-course="${c.id}" role="button" tabindex="${unavailable ? '-1' : '0'}" aria-disabled="${unavailable}" aria-label="${esc(I18N.t(c.nameKey) + ' · ' + cta)}">
        <div class="cc-top">
          <span class="cc-mark ${c.id}">${COURSE_ICONS[c.icon]}</span>
          <span class="cc-title">
            <h3>${I18N.t(c.nameKey)}</h3>
            <p>${I18N.t(c.taglineKey)}</p>
          </span>
          ${isCurrent ? `<span class="cc-badge">${I18N.t('courseCurrent')}</span>` : ''}
        </div>
        <p class="cc-desc">${I18N.t(c.descKey)}</p>
        <div class="cc-stats">
          <span class="cc-stat"><b>${st.words}</b><span>${I18N.t('courseWords')}</span></span>
          <span class="cc-stat"><b>${st.phrases}</b><span>${I18N.t('coursePhrases')}</span></span>
          <span class="cc-stat"><b>${CURRICULUM_DATA.modules[c.id].length}</b><span>${I18N.t('courseSections')}</span></span>
        </div>
        <div class="cc-access"><strong class="cc-access-state">${esc(CourseAccess.label(c.id))}</strong><span class="cc-access-detail">${esc(access.expires_at ? T('Until ', 'ถึง ') + CourseAccess.formatDate(access.expires_at) : guest ? T('Full lessons and practice · progress for this visit', 'บทเรียนและแบบฝึกครบ · ความคืบหน้าเฉพาะการเข้าชมครั้งนี้') : T('Your progress is saved to your account.', 'ความคืบหน้าจะบันทึกในบัญชีของคุณ'))}</span></div>
        <div class="cc-go">
          ${unavailable ? T('Please wait…', 'กรุณารอสักครู่…') : cta}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>`;
    }).join('');
  }

  /* Switching course re-aims every module, so caches and in-progress
     activities must be cleared before anything re-renders. Progress for the
     newly activated course lives on the server (guests: in memory only), so
     this awaits Progress.hydrate() before anything reads it — every other
     call site in the app treats Progress.load()/save() as synchronous and
     stays that way. */
  let selectingCourse = false;
  async function selectCourse(id){
    if (selectingCourse || !Courses.get(id) || !Auth.currentUser()) return;
    if (!Auth.currentUser().guest && (!CourseAccess.ready || CourseAccess.loading)) return;
    selectingCourse = true;
    courseMessage = '';
    const card = document.querySelector(`.course-card[data-course="${id}"]`);
    const back = document.getElementById('courseBackBtn');
    const signout = document.getElementById('courseSignOutBtn');
    back.disabled = true;
    if (signout) signout.disabled = true;
    if (card) card.classList.add('loading');
    try {
      stopLearning();
      if (!await Progress.flush()) throw new Error(T('Your latest progress could not be saved. Check your connection and select the course again to retry.', 'บันทึกความคืบหน้าล่าสุดไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วเลือกหลักสูตรอีกครั้ง'));
      if (!Auth.currentUser().guest && CourseAccess.get(id).status === 'not_started'){
        if (!await CourseAccess.start(id)) throw new Error(T('The course could not be started. Please try again.', 'เริ่มหลักสูตรไม่สำเร็จ กรุณาลองอีกครั้ง'));
      }
      if (!Auth.currentUser()) return;
      Courses.activate(id);
      Progress.invalidate();      // re-read progress under the new course key
      if (!CourseAccess.canLearn(id)){ showAccessScreen(); return; }
      if (!await Progress.hydrate()){
        if (!Auth.currentUser()) return;
        if (!CourseAccess.canLearn(id)){ showAccessScreen(); return; }
        throw new Error(T('Your saved progress could not be loaded. Please try again before continuing.', 'โหลดความคืบหน้าที่บันทึกไว้ไม่สำเร็จ กรุณาลองอีกครั้งก่อนเรียนต่อ'));
      }

      // Filters hold ids from the previous course, so clear them all.
      activePhraseCat = Courses.defaultPhraseCat;
      phraseQuery = '';
      phraseLevel = 'all';
      const search = document.getElementById('phraseSearch');
      if (search) search.value = '';
      const clear = document.getElementById('phraseSearchClear');
      if (clear) clear.classList.remove('show');

      hideCourseChooser();
      document.getElementById('appShell').style.display = 'block';
      Progress.touchStreak();
      renderAll();
      Vocab.resetForCourse();
      LearningHub.home();
      LearningHub.open();
    } catch (e){
      if (Auth.currentUser()){
        courseMessage = e.message || T('Unable to open this course. Please try again.', 'เปิดหลักสูตรไม่สำเร็จ กรุณาลองอีกครั้ง');
      }
    } finally {
      selectingCourse = false;
      back.disabled = false;
      if (signout) signout.disabled = false;
      if (card) card.classList.remove('loading');
      if (document.getElementById('courseWrap').classList.contains('active')) renderCourseList();
    }
  }

  function bindCourseChooser(){
    document.getElementById('courseList').addEventListener('keydown',e=>{const card=e.target.closest('[data-course]');if(card&&card.getAttribute('aria-disabled')!=='true'&&(e.key==='Enter'||e.key===' ')){e.preventDefault();selectCourse(card.dataset.course);}});
    document.getElementById('courseList').addEventListener('click', e => {
      const card = e.target.closest('[data-course]');
      if (card && card.getAttribute('aria-disabled') !== 'true') selectCourse(card.dataset.course);
    });
    document.getElementById('courseBackBtn').addEventListener('click', () => {
      if (selectingCourse) return;
      if (CourseAccess.canLearn() && !Progress.isHydrated()){
        courseMessage = T('Select your course again to load your saved progress before continuing.', 'เลือกหลักสูตรอีกครั้งเพื่อโหลดความคืบหน้าที่บันทึกไว้ก่อนเรียนต่อ');
        renderCourseList();
        return;
      }
      hideCourseChooser();
      document.getElementById('appShell').style.display = 'block';
      Nav.go('daily');
    });
    document.getElementById('courseBar').addEventListener('click', () => showCourseChooser({ cancellable:true }));
    document.getElementById('accSwitchCourse').addEventListener('click', () => showCourseChooser({ cancellable:true }));
    document.getElementById('courseSignOutBtn')?.addEventListener('click', () => signOut());
    document.addEventListener('click', async e => {
      const action = e.target.closest('[data-access-action]')?.dataset.accessAction;
      if (action === 'courses') showCourseChooser({ cancellable:true });
      if (action === 'account') Nav.go('account');
      if (action === 'register') await signOut(true);
      if (action === 'retry'){ courseMessage = ''; await CourseAccess.load(); }
    });
  }

  /* Feeds {w}, {p}, {domain} … into every i18n string for the active course. */
  function registerCourseVars(){
    I18N.setVars(() => {
      const c = Courses.active;
      if (!c) return {};
      const st = Courses.stats(c.id) || {};
      return {
        w: st.words, wc: st.wordCats,
        p: st.phrases, pc: st.phraseCats,
        s: st.sayThis, mc: st.mc, pr: st.pron,
        domain: (UI_STRINGS[I18N.current] || UI_STRINGS.en)[c.domainKey] || '',
        domainShort: (UI_STRINGS[I18N.current] || UI_STRINGS.en)[c.domainShortKey] || '',
      };
    });
  }

  function renderCourseChrome(){
    document.querySelectorAll('#screen-daily .menu-list [onclick]').forEach(el=>{const action=el.getAttribute('onclick')||'';if(/Nav\.go\('(?:pron|saythis)'/.test(action))el.hidden=Courses.currentId==='salon';});
    // The body map only exists where the course actually teaches body parts.
    const anatomyRow = document.getElementById('homeAnatomyRow');
    if (anatomyRow) anatomyRow.hidden = !Anatomy.available();
    const c = Courses.active;
    if (!c) return;
    // The tip of the day is course-specific.
    const tip = document.querySelector('[data-i18n="tipOfDayBody"]');
    if (tip) tip.textContent = I18N.t(c.tipKey);
    // Header identity follows the active course.
    const h1 = document.querySelector('.brand-text h1');
    const tag = document.querySelector('.brand-text p');
    if (h1) h1.textContent = I18N.t(c.nameKey);
    if (tag) tag.textContent = I18N.t(c.taglineKey);

    const mark = document.getElementById('courseBarMark');
    if (mark) mark.innerHTML = COURSE_ICONS[c.icon];
    const name = document.getElementById('courseBarName');
    if (name) name.textContent = I18N.t(c.nameKey);
    const accMark = document.getElementById('accCourseMark');
    if (accMark) accMark.innerHTML = COURSE_ICONS[c.icon];
    const accName = document.getElementById('accCourseName');
    if (accName) accName.textContent = I18N.t(c.nameKey);
  }

  /* ---------------- home ---------------- */
  let potdIndex = 0;
  let potdPick = null;

  function refreshHome(){
    const user = Auth.currentUser();
    const name = user ? (user.guest ? I18N.t('accountGuestName') : (user.name || '').split(' ')[0]) : '';
    document.getElementById('homeGreetEyebrow').textContent =
      name ? `${I18N.t('greetingEyebrow')}, ${name}` : I18N.t('greetingEyebrow');

    document.getElementById('statWords').textContent = Progress.knownCount();
    const avg = Progress.quizAverage();
    document.getElementById('statQuiz').textContent = avg === null ? '—' : avg + '%';
    document.getElementById('statLessons').textContent = Progress.activitiesCompleted();

    const studied=StudyPlan.completedCount(Courses.currentId,Progress.learningState().days);
    const pct = Math.round(studied/30*100);
    document.getElementById('courseProgressFill').style.setProperty('--pct', pct + '%');
    document.getElementById('courseProgressLabel').textContent = `${studied}/30`;

    const initial = (user && !user.guest && user.name) ? user.name.trim()[0].toUpperCase() : 'G';
    document.getElementById('avatarBtn').textContent = initial;

    // phrase of the day, rotating by calendar day so it feels alive
    /* Phrase of the day is drawn only from guest-facing categories — the
       team-talk lines are useful, but they are not what you say to a guest. */
    const pool = [];
    PHRASES.forEach(c => {
      c.items.filter(item => item.audience === "guest").forEach(item => pool.push({ ...item, catId: c.id, catLabel: I18N.current === "th" ? c.th : c.en }));
    });
    potdIndex = (new Date().getFullYear() * 366 + dayOfYear()) % pool.length;
    const p = pool[potdIndex];
    potdPick = p;
    document.getElementById('potdCat').textContent = p.catLabel;
    document.getElementById('potdLevel').innerHTML = levelBadge(p.level, { compact:true });
    document.getElementById('potdText').textContent = `\u201c${p.text}\u201d`;
    document.getElementById('potdTh').textContent = p.th || '';
    document.getElementById('potdNote').textContent = I18N.current === 'th' ? (p.noteTh || p.note) : p.note;

    // The deck itself is right above these sections now, so the summary card
    // that used to stand in for it is gone; the side panel still mirrors the
    // same counters and refreshes with them.
    Sidebar.render();
  }

  function dayOfYear(){
    const d = new Date();
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  }

  /* ---------------- account ---------------- */
  function renderAccount(){
    renderAccessChrome();
    const user = Auth.currentUser();
    const isGuest = !user || user.guest;
    document.getElementById('changePasswordBtn').hidden = isGuest;
    document.getElementById('accName').textContent = isGuest ? I18N.t('accountGuestName') : user.name;
    document.getElementById('accEmail').textContent = isGuest ? I18N.t('guestNote') : user.email;
    document.getElementById('accAvatar').textContent = isGuest ? 'G' : user.name.trim()[0].toUpperCase();

    const roleKeyMap = { therapist:'roleTherapist', reception:'roleReception', manager:'roleManager', other:'roleOther', guest:'accountGuestName' };
    document.getElementById('accRole').textContent = I18N.t(roleKeyMap[isGuest ? 'guest' : (user.role || 'other')]);
    document.getElementById('accLangName').textContent = I18N.current === 'th' ? 'ไทย' : 'English';
    document.getElementById('accRegisterCta').style.display = isGuest ? 'block' : 'none';

    const barsRoot = document.getElementById('accProgressBars');
    if (!Progress.isHydrated()){
      barsRoot.innerHTML = `<p class="access-date">${T('Your saved progress stays with your account. Progress details are available while this course is active and loaded.', 'ความคืบหน้าที่บันทึกไว้ยังอยู่ในบัญชี รายละเอียดจะแสดงเมื่อหลักสูตรยังใช้งานได้และโหลดข้อมูลสำเร็จ')}</p>`;
      return;
    }
    const studied = StudyPlan.completedCount(Courses.currentId,Progress.learningState().days);
    const bars = [
      { label: I18N.t('statWords'),   value: Progress.knownCount(),           max: VOCAB.length, sage:false },
      { label: I18N.t('statLessons'), value: Progress.activitiesCompleted(),  max: 8,            sage:true  },
      { label: I18N.t('courseProgress'), value: studied, max: 30, sage:false },
    ];
    document.getElementById('accProgressBars').innerHTML = bars.map(b => {
      const pct = Math.round((b.value / b.max) * 100);
      return `<div class="pbar-item">
        <div class="pbar-head"><span>${b.label}</span><span>${b.value} / ${b.max}</span></div>
        <div class="pbar-track"><div class="pbar-fill ${b.sage ? 'sage' : ''}" style="width:${pct}%"></div></div>
      </div>`;
    }).join('');
  }

  /* ---------------- pronunciation ---------------- */
  function renderPron(){
    const list = document.getElementById('pronList');
    list.innerHTML = PRON.map((item, idx) => {
      const syll = item.syll.map((s, i) => `<div class="syll ${i === item.stress ? 'stress' : ''}">${s}</div>`).join('');
      const bars = Array.from({ length:20 }).map((_, i) =>
        `<div class="wave-bar" style="height:${7 + (i % 5) * 3}px;animation-delay:${i * 0.04}s"></div>`).join('');
      return `<div class="pron-row">
        <div class="pron-top">
          <div>
            <div class="pron-word">${item.word}</div>
            <div class="gloss-inline">${item.th}</div>
          </div>
          <button class="play-btn" data-idx="${idx}" aria-label="Play ${item.word}">${ICN.play}</button>
        </div>
        <div class="pron-phon">${item.phon}</div>
        <div class="syll-row">${syll}</div>
        <div class="wave-row" id="wave-${idx}">${bars}</div>
        <div class="pron-example"><b>${I18N.t('example')}</b> &nbsp;<i>&ldquo;${item.example}&rdquo;</i></div>
        <p class="context-th" lang="th">${LearningContent.esc(item.exampleTh || "")}</p>
      </div>`;
    }).join('');
  }

  function bindPron(){
    document.getElementById('pronList').addEventListener('click', e => {
      const btn = e.target.closest('.play-btn'); if (!btn) return;
      const idx = Number(btn.dataset.idx);
      const wave = document.getElementById('wave-' + idx);
      btn.classList.add('playing'); btn.innerHTML = ICN.pause; wave.classList.add('active');
      Speech.speak(PRON[idx].word, { rate: speechRate(),
        onend(){ btn.classList.remove('playing'); btn.innerHTML = ICN.play; wave.classList.remove('active'); }
      });
    });
  }

  /* ---------------- phrases ---------------- */
  let activePhraseCat = 'everyday';

  function renderPhraseLevelChips(){
    const sel = document.getElementById('phraseLevelSelect');
    if (!sel) return;
    sel.innerHTML = LEVEL_FILTERS.map(f =>
      `<option value="${f.id}"${f.id === phraseLevel ? ' selected' : ''}>${LearningContent.esc(I18N.t(f.key))}</option>`
    ).join('');
  }

  /* "Say this, not that" is phrase material, so the Phrases tab has to lead
     there — otherwise it is listed in the side panel and reachable from
     nowhere else but Home, which is how it was getting lost. Mirrors the
     link pills on the Words screen. */
  function renderPhraseLinks(){
    const wrap = document.getElementById('phraseLinks');
    if (!wrap) return;
    const has = typeof SAYTHIS !== 'undefined' && SAYTHIS.length;
    wrap.innerHTML = has
      ? `<button type="button" class="nav-link" data-goto="saythis">${I18N.t('menuSaythisTitle')} <span aria-hidden="true">↗</span></button>`
      : '';
  }

  function renderPhraseCats(){
    // A category id from the other course will not exist here.
    if (!PHRASES.some(c => c.id === activePhraseCat)){
      activePhraseCat = (PHRASES[0] && PHRASES[0].id) || 'everyday';
    }
    const e = LearningContent.esc;
    document.getElementById('phraseCatSelect').innerHTML = PHRASES.map(c =>
      `<option value="${e(c.id)}"${c.id === activePhraseCat ? ' selected' : ''}>${e(I18N.current === 'th' ? c.th : c.en)}</option>`
    ).join('');
  }

  let phraseQuery = '';
  let phraseLevel = 'all';

  /* With a search term, look across every category at once — a learner
     hunting for "allergies" shouldn't have to guess which tab it lives in. */
  function renderPhraseList(){
    const q = phraseQuery.trim().toLowerCase();
    let rows;

    if (q){
      rows = [];
      PHRASES.forEach(cat => {
        cat.items.forEach(p => {
          const hay = `${p.text} ${p.th || ''} ${p.note || ''} ${p.prompt || ''} ${p.promptTh || ''} ${p.noteTh || ''}`.toLowerCase();
          if (hay.includes(q)) rows.push({ ...p, catLabel: I18N.current === 'th' ? cat.th : cat.en });
        });
      });
    } else {
      const cat = PHRASES.find(c => c.id === activePhraseCat);
      rows = cat.items.map(p => ({ ...p, catLabel: null }));
    }

    if (phraseLevel !== 'all') rows = rows.filter(p => String(p.level) === phraseLevel);
    rows.sort((a,b)=>(a.level || 2)-(b.level || 2));
    LearningContent.updateNotices();

    const countEl = document.getElementById('phraseSearchCount');
    if (q){
      countEl.style.display = 'block';
      countEl.textContent = `${rows.length} ${I18N.t('searchResults')}`;
    } else {
      countEl.style.display = 'none';
    }

    document.getElementById('phraseList').innerHTML = rows.map((p, i) => `
      <div class="phrase-row">
        <div class="phrase-index">${i + 1}</div>
        <div class="phrase-copy">
          <div class="phrase-meta">${levelBadge(p.level, { compact:true })}${p.catLabel ? `<span class="phrase-note" style="margin:0;">${p.catLabel}</span>` : ''}</div>
          <div class="phrase-text">&ldquo;${p.text}&rdquo;</div>
          <div class="gloss">${p.th || ''}</div>
          <div class="phrase-note">${p.note}</div>
          ${LearningContent.phraseContext(p)}
        </div>
        <button class="mini-play" data-text="${p.text.replace(/"/g,'&quot;')}" aria-label="Play">${ICN.play}</button>
      </div>`).join('');

    document.getElementById('phraseEmpty').innerHTML = rows.length ? '' : emptyStateMarkup(
      phraseLevel !== 'all' && !q);
    document.getElementById('phraseList').style.display = rows.length ? 'block' : 'none';
  }

  function emptyStateMarkup(byLevel){
    return `<div class="empty-state">
      <div class="es-icon">${ICN.search}</div>
      <h4>${I18N.t(byLevel ? 'levelNoneTitle' : 'searchNoResultsTitle')}</h4>
      <p>${I18N.t(byLevel ? 'levelNoneBody' : 'searchNoResultsBody')}</p>
    </div>`;
  }

  function bindSearch(inputId, clearId, onChange){
    const input = document.getElementById(inputId);
    const clear = document.getElementById(clearId);
    if (!input) return;
    input.addEventListener('input', () => {
      clear.classList.toggle('show', input.value.length > 0);
      onChange(input.value);
    });
    clear.addEventListener('click', () => {
      input.value = '';
      clear.classList.remove('show');
      onChange('');
      input.focus();
    });
  }

  function bindPhrases(){
    document.getElementById('phraseLinks').addEventListener('click', e => {
      const link = e.target.closest('[data-goto]');
      if (link) Nav.go(link.dataset.goto);
    });
    bindSearch('phraseSearch', 'phraseSearchClear', val => {
      phraseQuery = val;
      renderPhraseList();
    });
    document.getElementById('phraseLevelSelect').addEventListener('change', e => {
      phraseLevel = e.target.value;
      renderPhraseLevelChips();
      renderPhraseList();
    });
    document.getElementById('phraseCatSelect').addEventListener('change', e => {
      activePhraseCat = e.target.value;
      renderPhraseCats(); renderPhraseList();
    });
    document.getElementById('phraseList').addEventListener('click', e => {
      const btn = e.target.closest('.mini-play'); if (!btn) return;
      btn.classList.add('playing'); btn.innerHTML = ICN.pause;
      Speech.speak(btn.dataset.text, { rate: speechRate(), onend(){ btn.classList.remove('playing'); btn.innerHTML = ICN.play; } });
    });
  }

  /* ---------------- say this, not that ---------------- */
  function renderSayThis(){
    const th = I18N.current === 'th';
    document.getElementById('ddList').innerHTML = SAYTHIS.map(item => `
      <div class="dd-card">
        <div class="dd-scenario">
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>${item.scenario}
        </div>
        <div class="dd-grid">
          <div class="dd-col dont">
            <div class="dd-flag">${ICN.crossFlag}${I18N.t('dontSay')}</div>
            <div class="dd-text">&ldquo;${item.dont}&rdquo;</div>
            ${th ? `<div class="gloss">${item.dontTh}</div>` : ''}
          </div>
          <div class="dd-col do">
            <div class="dd-flag">${ICN.checkFlag}${I18N.t('doSay')}</div>
            <div class="dd-text">&ldquo;${item.doo}&rdquo;</div>
            ${th ? `<div class="gloss">${item.dooTh}</div>` : ''}
          </div>
        </div>
        <div class="dd-why"><b>${I18N.t('whyItMatters')}</b> &mdash; ${item.why}</div>
      </div>`).join('');
  }

  /* ---------------- practice hub ----------------
     One screen, two ways in. The ready-made activity library used to be a
     text disclosure at the foot of the assessment builder, which read as a
     footnote and buried twenty activities behind one line of prose. Both are
     now equals behind a pair of buttons, and the library's groups are a row
     of filter buttons rather than a scroll-jump into a very long page. */
  const PRACTICE_MODE_KEY = 'nimman_practice_mode_v1';
  let practiceMode = 'library', practiceGroup = 'all';

  // The salon course has no legacy activity bank, so it only has the builder.
  // That is a property of the course, never of the learner's choice: keep the
  // two apart, or a trip through the salon leaves everyone in the builder.
  function libraryAvailable(){ return Courses.currentId !== 'salon'; }
  function effectiveMode(){ return libraryAvailable() ? practiceMode : 'builder'; }

  function restorePracticeMode(){
    try {
      const saved = localStorage.getItem(PRACTICE_MODE_KEY);
      if (saved === 'library' || saved === 'builder') practiceMode = saved;
    } catch(e){}
  }
  function setPracticeMode(mode, opts = {}){
    practiceMode = mode === 'builder' ? 'builder' : 'library';
    if (opts.remember !== false){
      try { localStorage.setItem(PRACTICE_MODE_KEY, practiceMode); } catch(e){}
    }
    if (document.getElementById('screen-assess').classList.contains('active')) renderAssessHub();
  }

  const MODE_ICONS = {
    library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></svg>',
    builder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/><circle cx="9" cy="7" r="2.2" fill="var(--paper)"/><circle cx="15" cy="12" r="2.2" fill="var(--paper)"/><circle cx="8" cy="17" r="2.2" fill="var(--paper)"/></svg>',
  };

  function renderPracticeModes(){
    const el = document.getElementById('practiceModes');
    if (!el) return;
    if (!libraryAvailable()){ el.innerHTML = ''; el.hidden = true; return; }
    el.hidden = false;
    const modes = [
      ['library', 'pmLibraryTitle', 'pmLibraryDesc', PRACTICE_INDEX.length],
      ['builder', 'pmBuilderTitle', 'pmBuilderDesc', null],
    ];
    el.innerHTML = modes.map(([id, titleKey, descKey, count]) => {
      const on = effectiveMode() === id;
      return `<button type="button" class="px-mode ${on ? 'selected' : ''}" id="pmode-${id}"
        data-pmode="${id}" role="tab" aria-selected="${on}">
        <span class="px-mode-icon" aria-hidden="true">${MODE_ICONS[id]}</span>
        <span class="px-mode-text">
          <b>${I18N.t(titleKey)}${count ? ` <span class="px-mode-count">${count}</span>` : ''}</b>
          <small>${I18N.t(descKey)}</small>
        </span>
      </button>`;
    }).join('');
  }

  function renderPracticeFilter(){
    const el = document.getElementById('practiceFilter');
    if (!el) return;
    const groups = [['all', I18N.t('pxFilterAll'), PRACTICE_INDEX.length]]
      .concat(PRACTICE_GROUPS.map((g, i) => [String(i), I18N.t(g.titleKey), g.items.length]));
    el.innerHTML = groups.map(([id, label, n]) =>
      `<button type="button" class="chip ${practiceGroup === id ? 'active' : ''}"
        data-pgroup="${id}" aria-pressed="${practiceGroup === id}">${label} <span class="chip-count">${n}</span></button>`).join('');
  }

  /* The course line belongs to the screen, not to one of its two modes: it
     used to be the first thing the builder drew, so switching to the library
     lost the course name and the way to change it. */
  function renderPracticeCourseLine(){
    const el = document.getElementById('practiceCourseLine');
    if (!el) return;
    el.innerHTML = `<div class="lh-course-line">
      <span class="lh-eyebrow">${LearningModel.esc(Courses.name(Courses.currentId))}</span>
      <button class="lh-link" data-ab="switch">${I18N.t('switchCourse')} ↗</button></div>`;
  }

  function renderAssessHub(){
    AssessmentBuilder.render();
    renderPracticeCourseLine();
    renderPracticeModes();
    const library = document.getElementById('practiceLibrary');
    const builder = document.getElementById('assessmentBuilder');
    const mode = effectiveMode();
    if (library) library.hidden = mode !== 'library';
    if (builder) builder.hidden = mode !== 'builder';
    if (mode !== 'library') return;

    Practice.renderControls();
    renderPracticeFilter();
    const shown = PRACTICE_GROUPS.filter((g, i) => practiceGroup === 'all' || practiceGroup === String(i));
    document.getElementById('assessGrid').innerHTML = shown.map(group => {
      const cards = group.items.map(a => {
        const best = a.score ? Progress.bestFor(a.score) : null;
        return `<div class="activity-card ${a.wide ? 'wide' : ''}" data-act="${a.key}" role="button" tabindex="0">
          ${best !== null ? `<span class="ac-best">${best}%</span>` : ''}
          <div class="ac-icon ${a.sage ? 'sage' : ''}">${ASSESS_ICONS[a.icon] || ''}</div>
          <h4>${I18N.t(a.titleKey)}</h4>
          <p>${I18N.t(a.descKey)}</p>
          ${Practice.cardMeta(a.key)}
        </div>`;
      }).join('');
      return `<section class="practice-group">
        <div class="pg-head">
          <h3>${I18N.t(group.titleKey)}</h3>
          <p>${I18N.t(group.descKey)}</p>
        </div>
        <div class="activity-grid">${cards}</div>
      </section>`;
    }).join('');
  }

  function bindAssess(){
    document.getElementById('practiceModes').addEventListener('click', e => {
      const btn = e.target.closest('[data-pmode]'); if (!btn) return;
      setPracticeMode(btn.dataset.pmode);
    });
    document.getElementById('practiceFilter').addEventListener('click', e => {
      const btn = e.target.closest('[data-pgroup]'); if (!btn) return;
      practiceGroup = btn.dataset.pgroup;
      renderAssessHub();
    });
    document.getElementById('assessGrid').addEventListener('keydown', e => {
      const card=e.target.closest('[data-act]');
      if (card && (e.key === 'Enter' || e.key === ' ')){e.preventDefault();card.click();}
    });
    document.getElementById('assessGrid').addEventListener('click', e => {
      const card = e.target.closest('.activity-card'); if (!card) return;
      const act = PRACTICE_INDEX.find(a => a.key === card.dataset.act);
      if (act) act.run();
    });
  }

  /* ---------------- results ---------------- */
  function showResults(score, total, activityName, opts = {}){
    const pct = total ? Math.round((score / total) * 100) : 0;
    Nav.go('results');
    // Results normally return to the assessment hub; the Daily Five check
    // sends the learner back to its own screen instead.
    resultsBackTo = opts.backTo || 'assess';
    document.getElementById('resultRing').style.setProperty('--pct', pct);
    document.getElementById('resultPct').textContent = pct + '%';
    document.getElementById('rgTotal').textContent = total;
    document.getElementById('rgCorrect').textContent = score;
    document.getElementById('rgReview').textContent = total - score;

    let titleKey, note;
    if (pct >= 90){ titleKey = 'outstanding'; note = I18N.t('coachHigh'); }
    else if (pct >= 70){ titleKey = 'greatEffort'; note = I18N.t('coachMid'); }
    else { titleKey = 'goodStart'; note = I18N.t('coachLow'); }

    document.getElementById('resultTitle').textContent = I18N.t(titleKey);
    document.getElementById('resultSub').textContent = `${pct}% · ${activityName}`;
    document.getElementById('resultFeedback').textContent = opts.extraNote ? `${note} ${opts.extraNote}` : note;
    document.getElementById('resultsBackBtn').textContent =
      resultsBackTo === 'daily' ? I18N.t('backToDaily') : I18N.t('backToAssessments');
    Practice.renderResults(opts.practiceSession || null);
    refreshHome();
  }

  /* ---------------- first-run hint ---------------- */
  /* Shown once per learner, then remembered as dismissed. Keeps the
     flashcard screen self-explanatory without nagging repeat users. */
  function renderHint(containerId, key, textKey){
    const el = document.getElementById(containerId);
    if (!el) return;
    if (localStorage.getItem('spa_hint_' + key) === 'done'){ el.innerHTML = ''; return; }
    el.innerHTML = `<div class="hint-banner">
      <span class="hb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r=".7" fill="currentColor" stroke="none"/></svg></span>
      <p>${I18N.t(textKey)}</p>
      <button class="hint-close" data-hint="${key}" aria-label="${I18N.t('hintDismiss')}">&times;</button>
    </div>`;
  }

  function bindHints(){
    document.addEventListener('click', e => {
      const btn = e.target.closest('.hint-close');
      if (!btn) return;
      localStorage.setItem('spa_hint_' + btn.dataset.hint, 'done');
      btn.closest('.hint-banner').remove();
    });
  }

  /* ---------------- settings ---------------- */
  function renderSettings(){
    // Opening Settings is always the result of a tap, so this is a valid
    // moment to wake the iOS speech engine if it isn't awake yet.
    Speech.prime();
    Speech.refresh();   // iOS populates its voice list late
    const sel = document.getElementById('voiceSelect');
    const badge = document.getElementById('voiceBadge');
    const voices = Speech.englishVoices().filter(v => v.score >= 0);
    const savedUri = localStorage.getItem('spa_voice_uri') || '';
    const note = document.getElementById('voiceIosNote');
    const resetBtn = document.getElementById('voiceReset');

    if (!voices.length){
      // On iOS the list stays empty until the engine has been woken by a tap,
      // so say that plainly rather than showing an empty dropdown.
      sel.innerHTML = `<option value="">${I18N.t('setVoiceNone')}</option>`;
      sel.disabled = true;
      badge.textContent = '\u2014';
      badge.classList.add('warn');
      if (note) note.style.display = Speech.isIOS ? 'block' : 'none';
    } else {
      sel.disabled = false;
      const best = voices[0];
      sel.innerHTML =
        `<option value="">${I18N.t('setVoiceAuto')}</option>` +
        voices.map(v => {
          const tag = (v.uri === best.uri) ? ` \u2014 ${I18N.t('setVoiceRecommended')}` : '';
          return `<option value="${v.uri}"${v.uri === savedUri ? ' selected' : ''}>${v.name} (${v.lang})${tag}</option>`;
        }).join('');
      // Green when we're on the intended US female voice, amber otherwise.
      const locked = Speech.isPreferredVoice();
      badge.textContent = locked ? I18N.t('setVoiceLocked') : (Speech.currentVoiceName || '\u2014');
      badge.classList.toggle('warn', !locked);
      if (note) note.style.display = 'none';
    }
    if (resetBtn) resetBtn.style.display = savedUri ? 'block' : 'none';

    document.getElementById('speedSelect').value = String(speechRate());
    document.getElementById('setLangName').textContent = I18N.current === 'th' ? '\u0e44\u0e17\u0e22' : 'English';
    document.querySelectorAll('#sizeToggle .size-opt').forEach(b => {
      b.classList.toggle('active', b.dataset.size === textSize());
    });
  }

  function speechRate(){
    const v = parseFloat(localStorage.getItem('spa_speech_rate'));
    return (v && v > 0.4 && v < 1.6) ? v : 0.88;
  }

  function textSize(){
    const v = localStorage.getItem('spa_text_size');
    return ['sm','md','lg'].includes(v) ? v : 'md';
  }

  function applyTextSize(size){
    const root = document.documentElement;
    root.classList.remove('text-sm','text-lg');
    if (size === 'sm') root.classList.add('text-sm');
    if (size === 'lg') root.classList.add('text-lg');
    localStorage.setItem('spa_text_size', size);
  }

  function bindSettings(){
    document.getElementById('voiceSelect').addEventListener('change', e => {
      Speech.setVoice(e.target.value || null);
      renderSettings();
      Speech.speak(I18N.t('voiceSampleText'), { rate: speechRate() });
    });

    document.getElementById('voiceReset').addEventListener('click', () => {
      Speech.setVoice(null);          // back to automatic US-female selection
      renderSettings();
      Speech.speak(I18N.t('voiceSampleText'), { rate: speechRate() });
    });

    // The voice list can land after this screen is first drawn (iOS/WebKit).
    Speech.onReady(() => {
      if (document.getElementById('screen-settings').classList.contains('active')) renderSettings();
    Speaking.rerender();
    if (document.getElementById('courseWrap').classList.contains('active')) renderCourseList();
    });

    document.getElementById('voiceTest').addEventListener('click', () => {
      const btn = document.getElementById('voiceTest');
      btn.classList.add('playing');
      Speech.speak(I18N.t('voiceSampleText'), {
        rate: speechRate(),
        onend(){ btn.classList.remove('playing'); renderSettings(); }
      });
      // iOS fills getVoices() only once speech has been attempted.
      window.setTimeout(renderSettings, 400);
    });

    document.getElementById('speedSelect').addEventListener('change', e => {
      localStorage.setItem('spa_speech_rate', e.target.value);
      Speech.speak(I18N.t('voiceSampleText'), { rate: parseFloat(e.target.value) });
    });

    document.getElementById('sizeToggle').addEventListener('click', e => {
      const btn = e.target.closest('.size-opt');
      if (!btn) return;
      applyTextSize(btn.dataset.size);
      document.querySelectorAll('#sizeToggle .size-opt').forEach(b =>
        b.classList.toggle('active', b === btn));
    });

    document.getElementById('resetProgressBtn').addEventListener('click', async () => {
      if (!window.confirm(I18N.t('setResetConfirm'))) return;
      Progress.reset();
      if (!await Progress.flush()){
        window.alert(T('The reset could not be saved. Check your connection and try again.', 'บันทึกการรีเซ็ตไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง'));
        return;
      }
      rerenderAll();
      window.alert(I18N.t('setResetDone'));
    });
  }

  /* ---------------- language ---------------- */
  function bindPhraseOfDay(){
    const play = document.getElementById('potdPlay');
    if (play){
      play.innerHTML = ICN.play;
      play.addEventListener('click', e => {
        e.stopPropagation();
        if (!potdPick) return;
        play.classList.add('playing');
        play.innerHTML = ICN.pause;
        Speech.speak(potdPick.text, {
          rate: speechRate(),
          onend(){ play.classList.remove('playing'); play.innerHTML = ICN.play; }
        });
      });
    }
    const open = document.getElementById('potdOpen');
    if (open){
      open.addEventListener('click', () => {
        if (!potdPick) return;
        activePhraseCat = potdPick.catId;   // land on the category it came from
        phraseQuery = '';
        const input = document.getElementById('phraseSearch');
        if (input) input.value = '';
        Nav.go('phrases');
        renderPhraseCats();
        renderPhraseList();
      });
    }
  }

  function bindLangToggles(){
    document.querySelectorAll('.lang-toggle').forEach(row => {
      row.addEventListener('click', e => {
        const btn = e.target.closest('.lang-opt'); if (!btn) return;
        I18N.set(btn.dataset.lang, rerenderAll);
      });
    });
  }

  function renderAll(){
    I18N.applyStatic();
    if (AccountSecurity.isOpen()){ AccountSecurity.render(); return; }
    if (Admin.isOpen()){ Admin.render(); return; }
    renderAccessChrome();
    if (!CourseAccess.canLearn()){
      renderCourseChrome();
      if (document.getElementById('screen-access')?.classList.contains('active')) showAccessScreen();
      return;
    }
    LearningHub.home();
    LearningHub.render();
    renderCourseChrome();
    refreshHome();
    renderPron();
    renderPhraseCats();
    renderPhraseLevelChips();
    renderPhraseLinks();
    renderPhraseList();
    renderSayThis();
    renderAssessHub();
  }

  function rerenderAll(){
    Tutorial.render();
    renderAll();
    if (AccountSecurity.isOpen() || Admin.isOpen()) return;
    // The chooser is the one screen shown before a course exists, so renderAll
    // does not reach it; without this, switching language there left the cards
    // in the previous language.
    if (document.getElementById('courseWrap').classList.contains('active')) renderCourseList();
    if (!CourseAccess.canLearn()){
      if (document.getElementById('screen-settings').classList.contains('active')) renderSettings();
      if (document.getElementById('screen-account').classList.contains('active')) renderAccount();
      return;
    }
    Vocab.rerender();
    if(Courses.currentId!=='salon')Practice.rerender();
    AssessmentBuilder.rerender();
    if (document.getElementById('screen-anatomy').classList.contains('active')) Anatomy.render();
    if (document.getElementById('screen-daily').classList.contains('active')) Daily.rerender();
    if (document.getElementById('screen-settings').classList.contains('active')) renderSettings();
    if (document.getElementById('screen-account').classList.contains('active')) renderAccount();
  }

  /* ---------------- boot ---------------- */
  function init(){
    registerCourseVars();
    I18N.applyStatic();
    bindAuth();
    bindLangToggles();
    bindPron();
    bindPhrases();
    bindPhraseOfDay();
    bindSettings();
    bindHints();
    bindCourseChooser();
    applyTextSize(textSize());
    bindAssess();
    Vocab.init();
    Quiz.init();
    Practice.init();
    Daily.init();
    Speaking.init();
    LearningHub.init();AssessmentBuilder.init();
    Anatomy.init();
    Interview.init();
    Admin.init();
    AccountSecurity.init();
    Sidebar.init();
    CourseAccess.init();
    Tutorial.init();
    window.addEventListener('nimman:access-change', () => {
      renderAccessChrome();
      if (document.getElementById('courseWrap').classList.contains('active')){
        if (!selectingCourse) renderCourseList();
        return;
      }
      if (document.getElementById('appShell').style.display === 'none') return;
      const screen = document.querySelector('.screen.active')?.id.slice(7);
      if (screen && !CourseAccess.canVisit(screen)) showAccessScreen();
    });
    restorePracticeMode();
    window.addEventListener('nimman:progress-status',()=>{
      const b=document.getElementById('learningSaveStatus');if(!b)return;
      const status=Progress.status;b.hidden=!['load-error','save-error'].includes(status);
      b.textContent=I18N.current==='th'?'ยังบันทึกในบัญชีไม่ได้ กรุณาตรวจสอบการเชื่อมต่อ โหลดความคืบหน้าเดิมไม่สำเร็จจะไม่เขียนทับข้อมูลเดิม':'Account saving is unavailable. Check your connection. A failed progress load will not overwrite existing records.';
    });

    document.getElementById('avatarBtn').addEventListener('click', () => Nav.go('account'));
    document.getElementById('logoutBtn').addEventListener('click', () => signOut());
    document.getElementById('changePasswordBtn').addEventListener('click', () => AccountSecurity.open({required:false}));
    window.addEventListener('nimman:password-change-required', () => AccountSecurity.open({required:true}));
    // The server session can expire (or be lost) while the app is open —
    // e.g. an idle tab overnight. Rather than let saves fail silently,
    // Progress/Auth raise this event and we drop back to sign-in with an
    // explanation, so nothing looks "saved" when it wasn't.
    window.addEventListener('nimman:session-expired', () => {
      Progress.invalidate();
      hideCourseChooser();
      showAuth();
      showAuthError(I18N.t('errSessionExpired'));
    });
    document.getElementById('accRegisterCta').addEventListener('click', () => signOut(true));

    // The app always opens on the sign-in screen. Any previous session is
    // ended on load, so a shared staff phone never drops the next person
    // into someone else's account. Progress is stored per account, so
    // nothing is lost by signing in again.
    Auth.logout();
    Progress.clearGuest();
    Progress.invalidate();
    Courses.activate(Courses.saved() || 'spa', { remember: false });
    showAuth();
  }

  return {
    init, showResults, refreshHome, renderAccount, renderAssessHub, rerenderAll,
    renderSettings, speechRate, showCourseChooser, showAccessScreen, setPracticeMode, signOut, afterAuthSuccess,
    renderVocabHint(){ renderHint('vocabHint', 'vocab', 'hintVocab'); },
    get resultsBackTo(){ return resultsBackTo; },
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
