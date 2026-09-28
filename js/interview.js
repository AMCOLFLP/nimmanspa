/* =========================================================================
   INTERVIEW REHEARSAL — walks the six steps of the employer's spa therapist
   interview and practical assessment.

   The script lives on the course module in content/curriculum.json (the
   `rehearsal` block on Day 5), so it is authored content like every lesson
   and appears only for a course that has one. Questions are shown closed:
   the learner reads the question, answers it aloud, then opens the model
   answer to compare. Nothing here is scored — it is rehearsal, and the
   copy says so rather than implying a pass.
   ========================================================================= */

const Interview = (() => {
  const STEP_KEY = 'nimman_interview_step_v1';
  let step = 0;

  const T = (en, th) => I18N.current === 'th' ? th : en;
  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

  function script(){
    const mods = (typeof CURRICULUM_DATA !== 'undefined' &&
                  CURRICULUM_DATA.modules[Courses.currentId]) || [];
    const owner = mods.find(m => m.rehearsal && (m.rehearsal.steps || []).length);
    return owner ? { module: owner, ...owner.rehearsal } : null;
  }
  function available(){ return !!script(); }

  function steps(){ const s = script(); return s ? s.steps : []; }
  function clamp(n){ return Math.max(0, Math.min(steps().length - 1, n)); }

  /* What the Learn hub needs to draw the rehearsal card beside the modules. */
  function summary(){
    const list = steps();
    if (!list.length) return null;
    return {
      steps: list.length,
      questions: list.reduce((n, s) => n + (s.questions || []).length, 0),
      at: clamp(step),
    };
  }

  function remember(){ try { localStorage.setItem(STEP_KEY, String(step)); } catch(e){} }
  function restore(){
    try {
      const n = parseInt(localStorage.getItem(STEP_KEY), 10);
      if (!Number.isNaN(n)) step = clamp(n);
    } catch(e){}
  }

  /* --------------------------------------------------------------- render */

  function stepper(){
    return `<ol class="iv-steps" aria-label="${esc(I18N.t('interviewSteps'))}">${
      steps().map((s, i) => `<li>
        <button type="button" class="iv-step${i === step ? ' current' : ''}${i < step ? ' done' : ''}"
          data-iv-step="${i}" aria-current="${i === step ? 'step' : 'false'}"
          aria-label="${esc(`${I18N.t('interviewStep')} ${i + 1}: ${T(s.title, s.titleTh)}`)}">
          <span aria-hidden="true">${i + 1}</span>
        </button></li>`).join('')}</ol>`;
  }

  function questionMarkup(q, i){
    return `<details class="iv-q">
      <summary>
        <span class="iv-q-num" aria-hidden="true">${i + 1}</span>
        <span class="iv-q-text">
          <b lang="en">${esc(q.en)}</b>
          <small lang="th">${esc(q.th)}</small>
        </span>
      </summary>
      <div class="iv-answer">
        <span class="iv-eyebrow">${esc(I18N.t('interviewModel'))}</span>
        <p lang="en">${esc(q.answer)}</p>
        ${q.answerTh ? `<p class="iv-answer-th" lang="th">${esc(q.answerTh)}</p>` : ''}
        <button type="button" class="an-text-button" data-iv-speak="${esc(q.en)}">
          ▷ ${esc(I18N.t('interviewListen'))}
        </button>
      </div>
    </details>`;
  }

  function render(){
    const root = document.getElementById('interviewRoot');
    if (!root) return;
    const data = script();
    if (!data){
      root.innerHTML = `<p class="an-hint">${esc(I18N.t('interviewNone'))}</p>`;
      return;
    }
    step = clamp(step);
    const s = steps()[step];
    const last = step === steps().length - 1;

    root.innerHTML = `
      <p class="iv-source">${esc(T(data.source, data.source))}</p>
      ${stepper()}
      <section class="iv-panel">
        <span class="iv-eyebrow">${esc(I18N.t('interviewStep'))} ${step + 1} ${esc(I18N.t('interviewOf'))} ${steps().length}</span>
        <h3>${esc(T(s.title, s.titleTh))}</h3>
        <div class="iv-focus">
          <span class="iv-eyebrow">${esc(I18N.t('interviewAssessed'))}</span>
          <p>${esc(T(s.focus, s.focusTh))}</p>
        </div>
        <p class="iv-hint">${esc(I18N.t('interviewHowTo'))}</p>
        ${s.questions.map(questionMarkup).join('')}
      </section>

      ${last ? `<section class="iv-panel iv-finish">
        <h3>${esc(I18N.t('interviewDoneTitle'))}</h3>
        <p>${esc(I18N.t('interviewDoneBody'))}</p>
        <button type="button" class="btn btn-line btn-block" data-iv-restart>${esc(I18N.t('interviewRestart'))}</button>
      </section>` : ''}

      <div class="iv-nav">
        <button type="button" class="btn btn-line" data-iv-prev ${step === 0 ? 'disabled' : ''}>
          ← ${esc(I18N.t('interviewPrev'))}
        </button>
        <button type="button" class="btn btn-gold" data-iv-next ${last ? 'disabled' : ''}>
          ${esc(I18N.t('interviewNext'))} →
        </button>
      </div>

      <p class="anatomy-note">${esc(T(data.note, data.noteTh))}</p>`;
  }

  function go(n){
    const next = clamp(n);
    if (next === step) return;
    step = next;
    remember();
    render();
    const panel = document.querySelector('#screen-interview .iv-panel');
    if (panel) panel.scrollIntoView({ block:'start',
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  /* --------------------------------------------------------------- wiring */

  function init(){
    const screen = document.getElementById('screen-interview');
    if (!screen) return;
    restore();

    screen.addEventListener('click', e => {
      const btn = e.target.closest('button');
      if (!btn) return;
      if (btn.hasAttribute('data-iv-prev')) return go(step - 1);
      if (btn.hasAttribute('data-iv-next')) return go(step + 1);
      if (btn.hasAttribute('data-iv-step')) return go(Number(btn.dataset.ivStep));
      if (btn.hasAttribute('data-iv-restart')){ go(0); return; }
      if (btn.hasAttribute('data-iv-speak')){
        Speech.stop();
        btn.classList.add('playing');
        const done = () => btn.classList.remove('playing');
        try { Speech.speak(btn.dataset.ivSpeak, { rate: App.speechRate(), onend: done, onerror: done }); }
        catch(e){ done(); }
      }
    });
  }

  return { init, render, available, summary, open(){ Nav.go('interview'); } };
})();
