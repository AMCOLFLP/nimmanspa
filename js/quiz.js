/* =========================================================================
   ASSESSMENT MODULE — eight activities
   1 multiple choice    2 fill-in dialogue   3 listen & choose   4 builder
   5 what would you say 6 true or false      7 error correction   8 definition quiz
   Hand-written banks are sampled per attempt; the definition quiz is
   generated from the full 102-word pool, so it never repeats a set.
   ========================================================================= */

const Quiz = (() => {

  /* =====================================================================
     Shared multiple-choice engine.
     Every MC-shaped activity (main quiz, scenario, definition quiz) runs
     through this, so scoring, dots and feedback behave identically.
     ===================================================================== */
  let mc = null;

  function startMC(config){
    mc = {
      questions: config.questions,
      idx: 0, score: 0, answered: false,
      title: config.title,
      kicker: config.kicker,
      progressKey: config.progressKey,
      onFinish: config.onFinish || null,
    };
    document.getElementById('mcTitle').textContent = config.title;
    Nav.go('mcquiz');
    renderMC();
  }

  function renderMC(){
    if (mc.idx >= mc.questions.length){ finishMC(); return; }
    mc.answered = false;
    const q = mc.questions[mc.idx];

    document.getElementById('mcKicker').textContent = mc.kicker;
    document.getElementById('mcQuestion').textContent = q.q || q.prompt;
    const thEl = document.getElementById('mcQuestionTh');
    thEl.textContent = q.promptTh || '';
    thEl.style.display = q.promptTh ? 'block' : 'none';
    if (q.isThaiPrompt) document.getElementById('mcQuestion').classList.add('th-text');
    else document.getElementById('mcQuestion').classList.remove('th-text');

    document.getElementById('mcScoreChip').textContent = `${mc.score} / ${mc.questions.length}`;
    document.getElementById('mcFeedback').innerHTML = '';
    dots('mcDots', mc.questions.length, mc.idx);

    const letters = ['A','B','C','D'];
    document.getElementById('mcOptions').innerHTML = q.options.map((o, i) =>
      `<div class="q-option" data-i="${i}"><div class="opt-mark">${letters[i]}</div><div>${o}</div></div>`
    ).join('');

    const btn = document.getElementById('mcNextBtn');
    btn.disabled = true;
    btn.textContent = I18N.t('selectAnswer');
  }

  function answerMC(i){
    if (mc.answered) return;
    mc.answered = true;
    const q = mc.questions[mc.idx];
    document.querySelectorAll('#mcOptions .q-option').forEach((el, idx) => {
      el.classList.add('locked');
      if (idx === q.correct) el.classList.add('is-correct');
      else if (idx === i) el.classList.add('is-wrong');
    });
    const ok = i === q.correct;
    if (ok) mc.score++;
    document.getElementById('mcScoreChip').textContent = `${mc.score} / ${mc.questions.length}`;

    const msg = ok
      ? (q.hit || `<b>${I18N.t('correct')}</b> ${q.explain || ''}`)
      : (q.miss ? `<b>${I18N.t('notQuiteCap')}</b> ${q.miss}` : `<b>${I18N.t('notQuiteCap')}</b> ${q.explain || ''}`);
    document.getElementById('mcFeedback').innerHTML = feedbackStrip(ok, msg);

    const btn = document.getElementById('mcNextBtn');
    btn.disabled = false;
    btn.textContent = mc.idx === mc.questions.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishMC(){
    const pct = Math.round((mc.score / mc.questions.length) * 100);
    // A caller with its own completion flow (the Daily Five check) handles
    // its own scoring and results; otherwise fall back to the default.
    if (mc.onFinish){ mc.onFinish(mc.score, mc.questions.length); return; }
    Progress.recordQuizResult(mc.progressKey, pct);
    App.showResults(mc.score, mc.questions.length, mc.title);
  }

  /* =====================================================================
     Activity launchers that use the MC engine
     ===================================================================== */
  function startMainQuiz(){
    startMC({
      questions: sample(MC_BANK, 12),
      title: I18N.t('actMcTitle'),
      kicker: I18N.t('mcKicker'),
      progressKey: 'mc',
    });
  }

  function startScenarioQuiz(){
    const items = sample(SAYTHIS, 10).map(s => {
      const options = shuffle([s.doo, s.dont]);
      const extra = shuffle(SAYTHIS.filter(o => o.scenario !== s.scenario)).slice(0, 2).map(o => o.dont);
      const all = shuffle([s.doo, s.dont, ...extra]);
      return {
        q: `${s.scenario} — ${I18N.t('scenarioQuestion')}`,
        promptTh: I18N.current === 'th' ? s.dooTh : null,
        options: all,
        correct: all.indexOf(s.doo),
        hit: `<b>${I18N.t('correct')}</b> ${s.why}`,
        miss: `${s.why}`,
      };
    });
    startMC({
      questions: items,
      title: I18N.t('actScenarioTitle'),
      kicker: I18N.t('scenarioKicker'),
      progressKey: 'scenario',
    });
  }

  function startDefinitionQuiz(){
    const half = genDefinitionQuestions(8, 'all').map(q => ({
      q: `${I18N.t('defQuestion')} \u201c${q.prompt}\u201d`,
      promptTh: I18N.current === 'th' ? q.promptTh : null,
      options: q.options, correct: q.correct, explain: q.explain,
    }));
    const rest = genReverseQuestions(7, 'all').map(q => ({
      q: `${I18N.t('revQuestion')} \u201c${q.prompt}\u201d`,
      options: q.options, correct: q.correct, explain: q.explain,
    }));
    startMC({
      questions: shuffle([...half, ...rest]),
      title: I18N.t('actDefTitle'),
      kicker: I18N.t('defKicker'),
      progressKey: 'definition',
    });
  }

  /* =====================================================================
     Fill-in-the-blank dialogue
     ===================================================================== */
  let fill = null;

  function openFillPicker(){
    Nav.go('fillquiz');
    document.getElementById('fillPicker').style.display = 'block';
    document.getElementById('fillPlay').style.display = 'none';
    document.getElementById('fillDialogueList').innerHTML = FILL_DIALOGUES.map(d => {
      const blanks = d.lines.filter(l => !l.fixed).length;
      return `<div class="menu-row" data-dialogue="${d.id}">
        <div class="menu-icon sage"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9.5L6 21v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg></div>
        <div class="menu-body"><h4>${d.title}</h4><p>${blanks} ${I18N.t('blanksLabel')}</p><p class="gloss-inline">${d.th}</p></div>
        <div class="menu-chev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></div>
      </div>`;
    }).join('');
  }

  function startFill(dialogueId){
    const d = FILL_DIALOGUES.find(x => x.id === dialogueId);
    // deep copy so a replay starts clean
    fill = {
      id: d.id,
      title: d.title,
      lines: d.lines.map(l => ({ ...l })),
      idx: 0, score: 0, answered: false,
    };
    fill.total = fill.lines.filter(l => !l.fixed).length;
    document.getElementById('fillPicker').style.display = 'none';
    document.getElementById('fillPlay').style.display = 'block';
    document.getElementById('fillKicker').textContent = d.title;
    if (fill.lines[0].fixed) skipFixed(); else renderFill();
  }

  function skipFixed(){
    while (fill.idx < fill.lines.length && fill.lines[fill.idx].fixed) fill.idx++;
    if (fill.idx >= fill.lines.length){ finishFill(); return; }
    renderFill();
  }

  function blankNumber(){
    return fill.lines.slice(0, fill.idx).filter(l => !l.fixed).length;
  }

  function renderScript(){
    let html = '';
    fill.lines.forEach((line, i) => {
      if (line.fixed){
        html += `<div class="dscript-line"><span class="dscript-speaker">${line.speaker}</span><span class="dscript-text">${line.before}</span></div>`;
        return;
      }
      let blank;
      if (i < fill.idx){
        blank = `<span class="blank-slot ${line.chosen === line.correct ? 'correct' : 'wrong'}">${line.chosen}</span>`;
      } else if (i === fill.idx){
        blank = `<span class="blank-slot" id="activeBlank">${line.chosen || '?'}</span>`;
      } else {
        blank = `<span class="blank-slot future">&hellip;</span>`;
      }
      html += `<div class="dscript-line"><span class="dscript-speaker">${line.speaker}</span><span class="dscript-text">${line.before}${blank}${line.after}</span></div>`;
    });
    document.getElementById('dialogueScript').innerHTML = html;
    const active = document.getElementById('activeBlank');
    if (active) active.scrollIntoView({ block:'center', behavior:'smooth' });
  }

  function renderFill(){
    fill.answered = false;
    document.getElementById('fillScoreChip').textContent = `${fill.score} / ${fill.total}`;
    document.getElementById('fillFeedback').innerHTML = '';
    renderScript();
    dots('fillDots', fill.total, blankNumber());

    const line = fill.lines[fill.idx];
    document.getElementById('fillOptions').innerHTML = shuffle(line.options)
      .map(o => `<div class="word-chip" data-opt="${o}">${o}</div>`).join('');

    const btn = document.getElementById('fillNextBtn');
    btn.disabled = true;
    btn.textContent = I18N.t('selectWord');
  }

  function answerFill(opt){
    if (fill.answered) return;
    fill.answered = true;
    const line = fill.lines[fill.idx];
    line.chosen = opt;

    document.querySelectorAll('#fillOptions .word-chip').forEach(c => {
      c.classList.add('spent');
      if (c.dataset.opt === opt) c.classList.add('chosen');
    });
    const ok = opt === line.correct;
    if (ok) fill.score++;
    const blank = document.getElementById('activeBlank');
    if (blank){ blank.textContent = opt; blank.classList.add(ok ? 'correct' : 'wrong'); }

    document.getElementById('fillScoreChip').textContent = `${fill.score} / ${fill.total}`;
    dots('fillDots', fill.total, blankNumber() + 1);
    document.getElementById('fillFeedback').innerHTML = feedbackStrip(ok,
      ok ? `<b>${I18N.t('correct')}</b> \u201c${line.correct}\u201d ${I18N.t('fitsHere')}`
         : `<b>${I18N.t('almostCap')}</b> ${I18N.t('bestFit')} \u201c${line.correct}\u201d.`);

    const isLast = fill.lines.slice(fill.idx + 1).every(l => l.fixed);
    const btn = document.getElementById('fillNextBtn');
    btn.disabled = false;
    btn.textContent = isLast ? I18N.t('seeResults') : I18N.t('nextLine');
  }

  function nextFill(){
    fill.idx++;
    if (fill.idx >= fill.lines.length){ finishFill(); return; }
    if (fill.lines[fill.idx].fixed){ skipFixed(); return; }
    renderFill();
  }

  function finishFill(){
    const pct = Math.round((fill.score / fill.total) * 100);
    Progress.recordQuizResult('fill_' + fill.id, pct);
    App.showResults(fill.score, fill.total, fill.title);
  }

  /* =====================================================================
     Listen & choose
     ===================================================================== */
  let ls = null;

  function startListen(){
    ls = { rounds: sample(LISTEN_BANK, 10), idx:0, score:0, answered:false, plays:0 };
    Nav.go('listen');
    renderListen();
  }

  function renderListen(){
    if (ls.idx >= ls.rounds.length){ finishListen(); return; }
    ls.answered = false; ls.plays = 0;
    const r = ls.rounds[ls.idx];
    document.getElementById('lsScore').textContent = `${ls.score} / ${ls.rounds.length}`;
    document.getElementById('lsHint').textContent = `${I18N.t('roundOf')} ${ls.idx + 1} / ${ls.rounds.length}`;
    document.getElementById('lsReplay').textContent = I18N.t('listenReplay');
    document.getElementById('lsFeedback').innerHTML = '';
    dots('lsDots', ls.rounds.length, ls.idx);

    const options = shuffle([r.target, ...r.distractors]);
    r._options = options;
    document.getElementById('lsOptions').innerHTML = options.map((o, i) =>
      `<div class="q-option" data-i="${i}"><div class="opt-mark">${['A','B','C','D'][i]}</div><div>${o}</div></div>`
    ).join('');

    const btn = document.getElementById('lsNext');
    btn.disabled = true;
    btn.textContent = I18N.t('selectAnswer');
    playListen();
  }

  function playListen(){
    const r = ls.rounds[ls.idx];
    const btn = document.getElementById('lsPlay');
    btn.classList.add('playing');
    ls.plays++;
    Speech.speak(r.target, { rate: App.speechRate(), onend(){ btn.classList.remove('playing'); } });
  }

  function answerListen(i){
    if (ls.answered) return;
    ls.answered = true;
    const r = ls.rounds[ls.idx];
    const correctIdx = r._options.indexOf(r.target);
    document.querySelectorAll('#lsOptions .q-option').forEach((el, idx) => {
      el.classList.add('locked');
      if (idx === correctIdx) el.classList.add('is-correct');
      else if (idx === i) el.classList.add('is-wrong');
    });
    const ok = i === correctIdx;
    if (ok) ls.score++;
    document.getElementById('lsScore').textContent = `${ls.score} / ${ls.rounds.length}`;

    const entry = VOCAB.find(v => v.word.toLowerCase() === r.target.toLowerCase());
    const gloss = entry ? ` — ${entry.def}` : '';
    document.getElementById('lsFeedback').innerHTML = feedbackStrip(ok,
      `<b>${ok ? I18N.t('correct') : I18N.t('notQuiteCap')}</b> ${r.target}${gloss}`);

    const btn = document.getElementById('lsNext');
    btn.disabled = false;
    btn.textContent = ls.idx === ls.rounds.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishListen(){
    const pct = Math.round((ls.score / ls.rounds.length) * 100);
    Progress.recordQuizResult('listen', pct);
    App.showResults(ls.score, ls.rounds.length, I18N.t('actListenTitle'));
  }

  /* =====================================================================
     Phrase builder
     ===================================================================== */
  let bd = null;

  function startBuilder(){
    bd = { rounds: sample(BUILDER_BANK, 8), idx:0, score:0, placed:[], locked:false };
    Nav.go('builder');
    renderBuilder();
  }

  function renderBuilder(){
    if (bd.idx >= bd.rounds.length){ finishBuilder(); return; }
    bd.placed = []; bd.locked = false;
    const r = bd.rounds[bd.idx];
    bd.words = r.sentence.replace(/[?.]$/,'').split(' ');
    bd.punct = r.sentence.slice(-1).match(/[?.]/) ? r.sentence.slice(-1) : '';

    document.getElementById('bdScore').textContent = `${bd.score} / ${bd.rounds.length}`;
    document.getElementById('bdLabel').textContent = I18N.t('builderThaiLabel');
    document.getElementById('bdTh').textContent = r.th;
    document.getElementById('bdFeedback').innerHTML = '';
    document.getElementById('bdClear').textContent = I18N.t('builderClear');
    document.getElementById('bdCheck').textContent = I18N.t('builderCheck');
    document.getElementById('bdNext').style.display = 'none';
    document.querySelector('.builder-actions').style.display = 'grid';
    dots('bdDots', bd.rounds.length, bd.idx);

    const line = document.getElementById('bdLine');
    line.className = 'builder-line';
    line.setAttribute('data-empty', I18N.t('builderEmpty'));
    line.innerHTML = '';

    document.getElementById('bdBank').innerHTML = shuffle(bd.words.map((w, i) => ({ w, i })))
      .map(o => `<button class="bword" data-w="${o.i}">${o.w}</button>`).join('');
  }

  function bdPlace(i){
    if (bd.locked) return;
    if (bd.placed.includes(i)) return;
    bd.placed.push(i);
    paintBuilder();
  }

  function bdUnplace(pos){
    if (bd.locked) return;
    bd.placed.splice(pos, 1);
    paintBuilder();
  }

  function paintBuilder(){
    const line = document.getElementById('bdLine');
    line.innerHTML = bd.placed.map((wi, pos) =>
      `<button class="bword in-line" data-pos="${pos}">${bd.words[wi]}</button>`).join('');
    document.querySelectorAll('#bdBank .bword').forEach(el => {
      el.classList.toggle('used', bd.placed.includes(Number(el.dataset.w)));
    });
  }

  function checkBuilder(){
    if (bd.locked) return;
    if (bd.placed.length !== bd.words.length) return;
    bd.locked = true;
    const attempt = bd.placed.map(i => bd.words[i]).join(' ');
    const ok = attempt === bd.words.join(' ');
    if (ok) bd.score++;
    document.getElementById('bdScore').textContent = `${bd.score} / ${bd.rounds.length}`;
    document.getElementById('bdLine').classList.add(ok ? 'right' : 'wrong');
    document.getElementById('bdFeedback').innerHTML = feedbackStrip(ok,
      ok ? `<b>${I18N.t('builderCorrect')}</b>`
         : `<b>${I18N.t('builderWrong')}</b><br>${bd.rounds[bd.idx].sentence}`);
    document.querySelector('.builder-actions').style.display = 'none';
    const btn = document.getElementById('bdNext');
    btn.style.display = 'block';
    btn.textContent = bd.idx === bd.rounds.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishBuilder(){
    const pct = Math.round((bd.score / bd.rounds.length) * 100);
    Progress.recordQuizResult('builder', pct);
    App.showResults(bd.score, bd.rounds.length, I18N.t('actBuilderTitle'));
  }

  /* =====================================================================
     True or false
     ===================================================================== */
  let tf = null;

  function startTrueFalse(){
    tf = { items: sample(TRUE_FALSE_BANK, 12), idx:0, score:0, answered:false };
    Nav.go('truefalse');
    document.getElementById('tfTitle').textContent = I18N.t('actTfTitle');
    renderTF();
  }

  function renderTF(){
    if (tf.idx >= tf.items.length){ finishTF(); return; }
    tf.answered = false;
    const it = tf.items[tf.idx];
    document.getElementById('tfStatement').textContent = it.statement;
    document.getElementById('tfScore').textContent = `${tf.score} / ${tf.items.length}`;
    document.getElementById('tfTrueLabel').textContent = I18N.t('tfTrue');
    document.getElementById('tfFalseLabel').textContent = I18N.t('tfFalse');
    document.getElementById('tfFeedback').innerHTML = '';
    dots('tfDots', tf.items.length, tf.idx);

    ['tfTrue','tfFalse'].forEach(id => {
      const el = document.getElementById(id);
      el.className = 'tf-btn';
    });
    const btn = document.getElementById('tfNext');
    btn.disabled = true;
    btn.textContent = I18N.t('selectAnswer');
  }

  function answerTF(said){
    if (tf.answered) return;
    tf.answered = true;
    const it = tf.items[tf.idx];
    const ok = said === it.answer;
    if (ok) tf.score++;
    document.getElementById('tfScore').textContent = `${tf.score} / ${tf.items.length}`;

    const chosenEl = document.getElementById(said ? 'tfTrue' : 'tfFalse');
    const otherEl  = document.getElementById(said ? 'tfFalse' : 'tfTrue');
    chosenEl.classList.add('locked', said ? 'chosen-true' : 'chosen-false');
    otherEl.classList.add('locked','dimmed');
    if (!ok){
      const rightEl = document.getElementById(it.answer ? 'tfTrue' : 'tfFalse');
      rightEl.classList.remove('dimmed');
      rightEl.classList.add(it.answer ? 'chosen-true' : 'chosen-false');
    }

    document.getElementById('tfFeedback').innerHTML = feedbackStrip(ok,
      `<b>${ok ? I18N.t('correct') : I18N.t('notQuiteCap')}</b> ${it.why}`);
    const btn = document.getElementById('tfNext');
    btn.disabled = false;
    btn.textContent = tf.idx === tf.items.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishTF(){
    const pct = Math.round((tf.score / tf.items.length) * 100);
    Progress.recordQuizResult('truefalse', pct);
    App.showResults(tf.score, tf.items.length, I18N.t('actTfTitle'));
  }

  /* =====================================================================
     Error correction
     ===================================================================== */
  let ef = null;

  function startErrorFix(){
    ef = { items: sample(ERROR_BANK, 8), idx:0, score:0, answered:false };
    Nav.go('errorfix');
    document.getElementById('efTitle').textContent = I18N.t('actErrTitle');
    document.getElementById('efLede').textContent = I18N.t('errLede');
    document.getElementById('efDontLabel').textContent = I18N.t('dontSay');
    renderEF();
  }

  function renderEF(){
    if (ef.idx >= ef.items.length){ finishEF(); return; }
    ef.answered = false;
    const it = ef.items[ef.idx];
    // shuffle while tracking where the correct rewrite lands
    const tagged = it.options.map((o, i) => ({ o, ok: i === it.correct }));
    const order = shuffle(tagged);
    it._order = order;

    document.getElementById('efWrong').textContent = `\u201c${it.wrong}\u201d`;
    document.getElementById('efScore').textContent = `${ef.score} / ${ef.items.length}`;
    document.getElementById('efFeedback').innerHTML = '';
    dots('efDots', ef.items.length, ef.idx);
    document.getElementById('efOptions').innerHTML = order.map((t, i) =>
      `<div class="q-option" data-i="${i}"><div class="opt-mark">${['A','B','C'][i]}</div><div>\u201c${t.o}\u201d</div></div>`
    ).join('');

    const btn = document.getElementById('efNext');
    btn.disabled = true;
    btn.textContent = I18N.t('selectAnswer');
  }

  function answerEF(i){
    if (ef.answered) return;
    ef.answered = true;
    const it = ef.items[ef.idx];
    const correctIdx = it._order.findIndex(t => t.ok);
    document.querySelectorAll('#efOptions .q-option').forEach((el, idx) => {
      el.classList.add('locked');
      if (idx === correctIdx) el.classList.add('is-correct');
      else if (idx === i) el.classList.add('is-wrong');
    });
    const ok = i === correctIdx;
    if (ok) ef.score++;
    document.getElementById('efScore').textContent = `${ef.score} / ${ef.items.length}`;
    document.getElementById('efFeedback').innerHTML = feedbackStrip(ok,
      `<b>${ok ? I18N.t('correct') : I18N.t('notQuiteCap')}</b> ${it.why}`);
    const btn = document.getElementById('efNext');
    btn.disabled = false;
    btn.textContent = ef.idx === ef.items.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishEF(){
    const pct = Math.round((ef.score / ef.items.length) * 100);
    Progress.recordQuizResult('errorfix', pct);
    App.showResults(ef.score, ef.items.length, I18N.t('actErrTitle'));
  }

  /* ---------------- shared ---------------- */
  function dots(id, total, current){
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = Array.from({ length: total }).map((_, i) =>
      `<i class="${i < current ? 'done' : ''} ${i === current ? 'current' : ''}"></i>`
    ).join('');
  }

  function bind(){
    document.getElementById('mcOptions').addEventListener('click', e => {
      const o = e.target.closest('.q-option'); if (o) answerMC(Number(o.dataset.i));
    });
    document.getElementById('mcNextBtn').addEventListener('click', () => { mc.idx++; renderMC(); });

    document.getElementById('fillDialogueList').addEventListener('click', e => {
      const row = e.target.closest('.menu-row'); if (row) startFill(row.dataset.dialogue);
    });
    document.getElementById('fillOptions').addEventListener('click', e => {
      const c = e.target.closest('.word-chip'); if (c) answerFill(c.dataset.opt);
    });
    document.getElementById('fillNextBtn').addEventListener('click', nextFill);

    document.getElementById('lsPlay').addEventListener('click', playListen);
    document.getElementById('lsReplay').addEventListener('click', playListen);
    document.getElementById('lsOptions').addEventListener('click', e => {
      const o = e.target.closest('.q-option'); if (o) answerListen(Number(o.dataset.i));
    });
    document.getElementById('lsNext').addEventListener('click', () => { ls.idx++; renderListen(); });

    document.getElementById('bdBank').addEventListener('click', e => {
      const b = e.target.closest('.bword'); if (b) bdPlace(Number(b.dataset.w));
    });
    document.getElementById('bdLine').addEventListener('click', e => {
      const b = e.target.closest('.bword'); if (b) bdUnplace(Number(b.dataset.pos));
    });
    document.getElementById('bdCheck').addEventListener('click', checkBuilder);
    document.getElementById('bdClear').addEventListener('click', () => { if (!bd.locked){ bd.placed = []; paintBuilder(); } });
    document.getElementById('bdNext').addEventListener('click', () => { bd.idx++; renderBuilder(); });

    document.getElementById('tfTrue').addEventListener('click', () => answerTF(true));
    document.getElementById('tfFalse').addEventListener('click', () => answerTF(false));
    document.getElementById('tfNext').addEventListener('click', () => { tf.idx++; renderTF(); });

    document.getElementById('efOptions').addEventListener('click', e => {
      const o = e.target.closest('.q-option'); if (o) answerEF(Number(o.dataset.i));
    });
    document.getElementById('efNext').addEventListener('click', () => { ef.idx++; renderEF(); });
  }

  return {
    init: bind,
    startMC,   // shared engine, used by the Daily Five knowledge check
    startMainQuiz, startScenarioQuiz, startDefinitionQuiz,
    openFillPicker, startListen, startBuilder, startTrueFalse, startErrorFix,
  };
})();

/* =========================================================================
   ASSESSMENT HUB — the eight activity cards
   ========================================================================= */
const ASSESS_ACTIVITIES = [
  { key:'mc',         titleKey:'actMcTitle',       descKey:'actMcDesc',       run:() => Quiz.startMainQuiz(),      icon:'list',   wide:false },
  { key:'fill',       titleKey:'actFillTitle',     descKey:'actFillDesc',     run:() => Quiz.openFillPicker(),     icon:'chat',   wide:false, sage:true },
  { key:'definition', titleKey:'actDefTitle',      descKey:'actDefDesc',      run:() => Quiz.startDefinitionQuiz(),icon:'book',   wide:false },
  { key:'listen',     titleKey:'actListenTitle',   descKey:'actListenDesc',   run:() => Quiz.startListen(),        icon:'wave',   wide:false, sage:true },
  { key:'builder',    titleKey:'actBuilderTitle',  descKey:'actBuilderDesc',  run:() => Quiz.startBuilder(),       icon:'blocks', wide:false },
  { key:'truefalse',  titleKey:'actTfTitle',       descKey:'actTfDesc',       run:() => Quiz.startTrueFalse(),     icon:'check',  wide:false, sage:true },
  { key:'errorfix',   titleKey:'actErrTitle',      descKey:'actErrDesc',      run:() => Quiz.startErrorFix(),      icon:'swap',   wide:false },
  { key:'scenario',   titleKey:'actScenarioTitle', descKey:'actScenarioDesc', run:() => Quiz.startScenarioQuiz(),  icon:'star',   wide:true,  sage:true },
];

const ASSESS_ICONS = {
  list:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 10.5l1.5 1.5L12 9M8 15.5l1.5 1.5L12 14"/><line x1="14.5" y1="10" x2="17" y2="10"/><line x1="14.5" y1="15" x2="17" y2="15"/></svg>',
  chat:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9.5L6 21v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/></svg>',
  book:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.4 5.4 8.3 4.9 5 4.9v13.1c3.3 0 5.4.5 7 1.6 1.6-1.1 3.7-1.6 7-1.6V4.9c-3.3 0-5.4.5-7 1.6Z"/><path d="M12 6.5v13"/></svg>',
  wave:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="12" x2="4" y2="12"/><line x1="8" y1="8" x2="8" y2="16"/><line x1="12" y1="5" x2="12" y2="19"/><line x1="16" y1="8" x2="16" y2="16"/><line x1="20" y1="12" x2="20" y2="12"/></svg>',
  blocks:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3.5" y="6" width="7" height="5" rx="1.5"/><rect x="13.5" y="6" width="7" height="5" rx="1.5"/><rect x="8.5" y="14" width="7" height="5" rx="1.5"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8.5l2.5 2.5L11 6"/><path d="M14 7h6"/><path d="M4 17l2.5 2.5L11 15"/><path d="M14 18h6"/></svg>',
  swap:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="8" x2="17" y2="8"/><path d="M14 5l3 3-3 3"/><line x1="20" y1="16" x2="7" y2="16"/><path d="M10 13l-3 3 3 3"/></svg>',
  star:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.8 14.7 9l6.5.6-5 4.4 1.5 6.4L12 17l-5.7 3.4L8 14 3 9.6 9.5 9 12 2.8Z"/></svg>',
};
