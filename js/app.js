/* =========================================================================
   APP CONTROLLER — navigation, auth flow, static module rendering, boot
   ========================================================================= */

const Nav = {
  tabFor: {
    home:'home', account:'home', settings:'home', daily:'daily', vocab:'vocab', pron:'assess',
    phrases:'phrases', saythis:'phrases',
    assess:'assess', mcquiz:'assess', fillquiz:'assess', listen:'assess', speaking:'assess',
    builder:'assess', truefalse:'assess', errorfix:'assess', results:'assess',
  },
  go(screen){
    Vocab.stopTimers();
    Speaking.stopAll();   // never leave a microphone live behind a screen change
    Speech.stop();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('screen-' + screen);
    if (target) target.classList.add('active');

    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    const tab = document.querySelector(`.tab-item[data-tab="${this.tabFor[screen] || screen}"]`);
    if (tab) tab.classList.add('active');

    if (screen === 'daily') Daily.open();
    if (screen === 'settings') App.renderSettings();
    if (screen === 'speaking') Speaking.open();
    if (screen === 'vocab'){ App.renderVocabHint(); Vocab.refreshChrome(); }
    if (screen === 'assess') App.renderAssessHub();
    if (screen === 'account') App.renderAccount();
    if (screen === 'home') App.refreshHome();

    window.scrollTo(0, 0);
  }
};

const App = (() => {
  let resultsBackTo = 'assess';


  /* ---------------- auth screen ---------------- */
  function showAuth(){
    document.getElementById('authWrap').classList.add('active');
    document.getElementById('appShell').style.display = 'none';
    switchAuthTab('login');
  }

  function showApp(){
    document.getElementById('authWrap').classList.remove('active');
    // A first-time learner chooses a course before the app opens; returning
    // learners go straight back to the one they were studying.
    if (!Courses.saved()){ showCourseChooser({ cancellable:false }); return; }
    Courses.activate(Courses.saved());
    hideCourseChooser();
    document.getElementById('appShell').style.display = 'block';
    const user = Auth.currentUser();
    if (user && !user.guest && user.lang && user.lang !== I18N.current){
      I18N.set(user.lang, rerenderAll);
    }
    Progress.touchStreak();
    renderAll();
    Nav.go('home');
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

  function bindAuth(){
    document.getElementById('tabLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('tabRegister').addEventListener('click', () => switchAuthTab('register'));
    document.getElementById('goRegister').addEventListener('click', () => switchAuthTab('register'));
    document.getElementById('goLogin').addEventListener('click', () => switchAuthTab('login'));
    document.getElementById('forgotBtn').addEventListener('click', () => showAuthError(I18N.t('forgotPasswordNote')));

    document.getElementById('loginForm').addEventListener('submit', e => {
      e.preventDefault();
      const res = Auth.login({
        email: document.getElementById('loginEmail').value.trim(),
        password: document.getElementById('loginPassword').value,
      });
      if (!res.ok){ showAuthError(res.error); return; }
      hideAuthError();
      document.getElementById('loginForm').reset();
      showApp();
    });

    document.getElementById('registerForm').addEventListener('submit', e => {
      e.preventDefault();
      const res = Auth.register({
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        password: document.getElementById('regPassword').value,
        confirm: document.getElementById('regConfirm').value,
        role: document.getElementById('regRole').value,
        lang: document.getElementById('regLang').value,
      });
      if (!res.ok){ showAuthError(res.error); return; }
      hideAuthError();
      document.getElementById('registerForm').reset();
      showApp();
    });

    document.getElementById('guestBtn').addEventListener('click', () => {
      Auth.continueAsGuest();
      showApp();
    });
  }

  /* ---------------- course chooser ---------------- */
  function showCourseChooser(opts){
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
    document.getElementById('courseList').innerHTML = Courses.all.map(c => {
      const st = Courses.stats(c.id);
      const isCurrent = c.id === current;
      return `<div class="course-card ${isCurrent ? 'current' : ''}" data-course="${c.id}">
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
          <span class="cc-stat"><b>${st.sayThis}</b><span>${I18N.t('courseSayThis')}</span></span>
        </div>
        <div class="cc-go">
          ${I18N.t(isCurrent ? 'courseContinue' : 'courseStart')}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>
        </div>
      </div>`;
    }).join('');
  }

  /* Switching course re-aims every module, so caches and in-progress
     activities must be cleared before anything re-renders. */
  function selectCourse(id){
    Speaking.stopAll();
    Vocab.stopTimers();
    Courses.activate(id);
    Progress.invalidate();      // re-read progress under the new course key

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
    Nav.go('home');
  }

  function bindCourseChooser(){
    document.getElementById('courseList').addEventListener('click', e => {
      const card = e.target.closest('[data-course]');
      if (card) selectCourse(card.dataset.course);
    });
    document.getElementById('courseBackBtn').addEventListener('click', () => {
      hideCourseChooser();
      document.getElementById('appShell').style.display = 'block';
      Nav.go('home');
    });
    document.getElementById('courseBar').addEventListener('click', () => showCourseChooser({ cancellable:true }));
    document.getElementById('accSwitchCourse').addEventListener('click', () => showCourseChooser({ cancellable:true }));
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

    const pct = Progress.courseProgressPct();
    document.getElementById('courseProgressFill').style.setProperty('--pct', pct + '%');
    document.getElementById('courseProgressLabel').textContent = `${pct}% ${I18N.t('complete')}`;

    const initial = (user && !user.guest && user.name) ? user.name.trim()[0].toUpperCase() : 'G';
    document.getElementById('avatarBtn').textContent = initial;

    // phrase of the day, rotating by calendar day so it feels alive
    /* Phrase of the day is drawn only from guest-facing categories — the
       team-talk lines are useful, but they are not what you say to a guest. */
    const pool = [];
    PHRASES.filter(c => c.id !== 'teamwork').forEach(c => {
      c.items.forEach(item => pool.push({ ...item, catId: c.id, catLabel: I18N.current === 'th' ? c.th : c.en }));
    });
    potdIndex = (new Date().getFullYear() * 366 + dayOfYear()) % pool.length;
    const p = pool[potdIndex];
    potdPick = p;
    document.getElementById('potdCat').textContent = p.catLabel;
    document.getElementById('potdLevel').innerHTML = levelBadge(p.level, { compact:true });
    document.getElementById('potdText').textContent = `\u201c${p.text}\u201d`;
    document.getElementById('potdTh').textContent = p.th || '';
    document.getElementById('potdNote').textContent = p.note;

    renderDailyCta();
  }

  /* The home card mirrors whichever of the three daily states is live, so the
     learner can see at a glance whether today's set still needs attention. */
  function renderDailyCta(){
    const s = Daily.summary();
    const card = document.getElementById('homeDailyCta');
    card.classList.toggle('is-done', s.checkDone);
    document.getElementById('homeDailyKicker').textContent = I18N.t('dailyKicker');

    if (s.checkDone){
      document.getElementById('homeDailyTitle').textContent = I18N.t('dailyCtaDoneTitle');
      document.getElementById('homeDailyBody').textContent =
        `${I18N.t('dailyDoneScore')} ${s.score}/${s.scoreTotal} \u00b7 ${I18N.t('dailyComeBack')}`;
    } else if (s.ready){
      document.getElementById('homeDailyTitle').textContent = I18N.t('dailyCtaReadyTitle');
      document.getElementById('homeDailyBody').textContent = I18N.t('dailyCtaReadyBody');
    } else {
      document.getElementById('homeDailyTitle').textContent = I18N.t('dailyCtaTitle');
      document.getElementById('homeDailyBody').textContent =
        `${s.done} / ${s.total} ${I18N.t('dailyCtaProgress')}`;
    }

    document.getElementById('homeDailyPills').innerHTML =
      Array.from({ length: s.total }).map((_, i) =>
        `<i class="${i < s.done ? 'on' : ''}"></i>`).join('');
  }

  function dayOfYear(){
    const d = new Date();
    return Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  }

  /* ---------------- account ---------------- */
  function renderAccount(){
    const user = Auth.currentUser();
    const isGuest = !user || user.guest;
    document.getElementById('accName').textContent = isGuest ? I18N.t('accountGuestName') : user.name;
    document.getElementById('accEmail').textContent = isGuest ? I18N.t('guestNote') : user.email;
    document.getElementById('accAvatar').textContent = isGuest ? 'G' : user.name.trim()[0].toUpperCase();

    const roleKeyMap = { therapist:'roleTherapist', reception:'roleReception', manager:'roleManager', other:'roleOther', guest:'accountGuestName' };
    document.getElementById('accRole').textContent = I18N.t(roleKeyMap[isGuest ? 'guest' : (user.role || 'other')]);
    document.getElementById('accLangName').textContent = I18N.current === 'th' ? 'ไทย' : 'English';
    document.getElementById('accRegisterCta').style.display = isGuest ? 'block' : 'none';

    const bars = [
      { label: I18N.t('statWords'),   value: Progress.knownCount(),           max: VOCAB.length, sage:false },
      { label: I18N.t('statLessons'), value: Progress.activitiesCompleted(),  max: 8,            sage:true  },
      { label: I18N.t('courseProgress'), value: Progress.courseProgressPct(), max: 100,          sage:false },
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
    const wrap = document.getElementById('phraseLevelChips');
    if (wrap) wrap.innerHTML = levelChipsMarkup(phraseLevel);
  }

  function renderPhraseCats(){
    // A category id from the other course will not exist here.
    if (!PHRASES.some(c => c.id === activePhraseCat)){
      activePhraseCat = (PHRASES[0] && PHRASES[0].id) || 'everyday';
    }
    document.getElementById('phraseCatChips').innerHTML = PHRASES.map(c =>
      `<button class="chip ${c.id === activePhraseCat ? 'active' : ''}" data-cat="${c.id}">${I18N.current === 'th' ? c.th : c.en}</button>`
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
          const hay = `${p.text} ${p.th || ''} ${p.note || ''}`.toLowerCase();
          if (hay.includes(q)) rows.push({ ...p, catLabel: I18N.current === 'th' ? cat.th : cat.en });
        });
      });
    } else {
      const cat = PHRASES.find(c => c.id === activePhraseCat);
      rows = cat.items.map(p => ({ ...p, catLabel: null }));
    }

    if (phraseLevel !== 'all') rows = rows.filter(p => String(p.level) === phraseLevel);

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
    bindSearch('phraseSearch', 'phraseSearchClear', val => {
      phraseQuery = val;
      renderPhraseList();
    });
    document.getElementById('phraseLevelChips').addEventListener('click', e => {
      const chip = e.target.closest('.chip'); if (!chip) return;
      phraseLevel = chip.dataset.level;
      renderPhraseLevelChips();
      renderPhraseList();
    });
    document.getElementById('phraseCatChips').addEventListener('click', e => {
      const chip = e.target.closest('.chip'); if (!chip) return;
      activePhraseCat = chip.dataset.cat;
      renderPhraseCats(); renderPhraseList();
      chip.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
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

  /* ---------------- assessment hub ---------------- */
  function renderAssessHub(){
    // A sixteen-card list is a long scroll, so offer a jump to each group.
    document.getElementById('practiceJump').innerHTML = PRACTICE_GROUPS.map((g, i) =>
      `<button class="chip" data-jump="pg-${i}">${I18N.t(g.titleKey)}</button>`).join('');

    document.getElementById('assessGrid').innerHTML = PRACTICE_GROUPS.map((group, i) => {
      const cards = group.items.map(a => {
        const best = a.score ? Progress.bestFor(a.score) : null;
        return `<div class="activity-card ${a.wide ? 'wide' : ''}" data-act="${a.key}">
          ${best !== null ? `<span class="ac-best">${best}%</span>` : ''}
          <div class="ac-icon ${a.sage ? 'sage' : ''}">${ASSESS_ICONS[a.icon] || ''}</div>
          <h4>${I18N.t(a.titleKey)}</h4>
          <p>${I18N.t(a.descKey)}</p>
        </div>`;
      }).join('');
      return `<section class="practice-group" id="pg-${i}">
        <div class="pg-head">
          <h3>${I18N.t(group.titleKey)}</h3>
          <p>${I18N.t(group.descKey)}</p>
        </div>
        <div class="activity-grid">${cards}</div>
      </section>`;
    }).join('');
  }

  function bindAssess(){
    document.getElementById('practiceJump').addEventListener('click', e => {
      const chip = e.target.closest('[data-jump]'); if (!chip) return;
      const target = document.getElementById(chip.dataset.jump);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
    document.getElementById('assessGrid').addEventListener('click', e => {
      const card = e.target.closest('.activity-card'); if (!card) return;
      const act = PRACTICE_INDEX.find(a => a.key === card.dataset.act);
      if (act) act.run();
    });
  }

  /* ---------------- results ---------------- */
  function showResults(score, total, activityName, opts = {}){
    const pct = Math.round((score / total) * 100);
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

    document.getElementById('resetProgressBtn').addEventListener('click', () => {
      if (!window.confirm(I18N.t('setResetConfirm'))) return;
      Progress.reset();
      Progress.clearGuest();
      Progress.invalidate();
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
    renderCourseChrome();
    refreshHome();
    renderPron();
    renderPhraseCats();
    renderPhraseLevelChips();
    renderPhraseList();
    renderSayThis();
    renderAssessHub();
  }

  function rerenderAll(){
    renderAll();
    Vocab.rerender();
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
    Daily.init();
    Speaking.init();

    document.getElementById('avatarBtn').addEventListener('click', () => Nav.go('account'));
    document.getElementById('logoutBtn').addEventListener('click', () => {
      Auth.logout();
      Progress.clearGuest();
      Progress.invalidate();
      hideCourseChooser();
      showAuth();
    });
    document.getElementById('accRegisterCta').addEventListener('click', () => {
      Auth.logout();
      showAuth();
      switchAuthTab('register');
    });

    Courses.activate(Courses.saved() || 'spa', { remember: false });
    if (Auth.isLoggedIn() && Auth.currentUser()) showApp();
    else showAuth();
  }

  return {
    init, showResults, refreshHome, renderAccount, renderAssessHub, rerenderAll,
    renderSettings, speechRate, showCourseChooser,
    renderVocabHint(){ renderHint('vocabHint', 'vocab', 'hintVocab'); },
    get resultsBackTo(){ return resultsBackTo; },
  };
})();

document.addEventListener('DOMContentLoaded', App.init);
