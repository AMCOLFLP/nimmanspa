/* Reopenable, role-aware guide. Only a versioned seen flag enters storage;
   opening this guide never starts a course or changes learning progress. */
const Tutorial = (() => {
  const SEEN_KEY = 'nimmanspa_tutorial_seen_v1';
  const FOCUSABLE = 'button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  let initialized = false, opened = false, seenInMemory = false;
  let index = 0, returnFocus = null, fallback = false, backdrop = null;
  let backgroundStates = [];
  const dialog = () => document.getElementById('tutorialDialog');
  const root = () => document.getElementById('tutorialRoot');
  const user = () => typeof Auth !== 'undefined' ? Auth.currentUser() : null;
  const language = () => typeof I18N !== 'undefined' && I18N.current === 'th' ? 'th' : 'en';
  const T = (en, th) => language() === 'th' ? th : en;
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  function content(){
    return typeof TutorialContent !== 'undefined' ? TutorialContent.get(user(), language()) : null;
  }
  function focusHeading(){
    const heading = document.getElementById('tutorialStepTitle');
    if (heading) heading.focus({ preventScroll:true });
  }
  function render(){
    if (!opened || !root()) return;
    const guide = content();
    if (!guide || !guide.steps || !guide.steps.length){ close(); return; }
    index = Math.max(0, Math.min(index, guide.steps.length - 1));
    const step = guide.steps[index], last = index === guide.steps.length - 1;
    const hadFocus = dialog().contains(document.activeElement);
    dialog().setAttribute('lang', language());
    root().innerHTML = `<div class="tutorial-header">
      <div><p class="tutorial-eyebrow">NIMMANSPA · ${T('YOUR APP GUIDE','คู่มือการใช้งาน')}</p>
        <h2 id="tutorialTitle">${esc(guide.title)}</h2><p class="tutorial-subtitle">${esc(guide.subtitle)}</p></div>
      <div class="tutorial-header-tools"><div class="tutorial-language" role="group" aria-label="${T('Guide language','ภาษาของคู่มือ')}"><button type="button" data-tutorial-lang="en" lang="en" aria-pressed="${language() === 'en'}">EN</button><button type="button" data-tutorial-lang="th" lang="th" aria-pressed="${language() === 'th'}">ไทย</button></div><button type="button" class="tutorial-close" data-tutorial-action="close" aria-label="${T('Close tutorial','ปิดคู่มือ')}"><span aria-hidden="true">×</span></button></div>
    </div>
    <div class="tutorial-layout">
      <nav class="tutorial-nav" aria-label="${T('Tutorial topics','หัวข้อในคู่มือ')}">
        <p class="tutorial-nav-label">${T('EXPLORE THE GUIDE','เลือกหัวข้อ')}</p>
        <ol>${guide.steps.map((item, n) => `<li><button type="button" data-tutorial-step="${n}"${n === index ? ' aria-current="step"' : ''}><span class="tutorial-step-number" aria-hidden="true">${n + 1}</span><span>${esc(item.short)}</span></button></li>`).join('')}</ol>
      </nav>
      <section class="tutorial-content" aria-labelledby="tutorialStepTitle">
        <p class="tutorial-step-count">${T(`STEP ${index + 1} OF ${guide.steps.length}`,`ขั้นตอน ${index + 1} จาก ${guide.steps.length}`)}</p>
        <div class="tutorial-progress" role="progressbar" aria-label="${T('Tutorial progress','ความคืบหน้าของคู่มือ')}" aria-valuemin="1" aria-valuemax="${guide.steps.length}" aria-valuenow="${index + 1}"><span style="width:${((index + 1) / guide.steps.length * 100).toFixed(2)}%"></span></div>
        <h3 id="tutorialStepTitle" tabindex="-1">${esc(step.title)}</h3>
        <p class="tutorial-lead">${esc(step.lead)}</p>
        <ul class="tutorial-points">${(step.bullets || []).map(item => `<li>${esc(item)}</li>`).join('')}</ul>
        ${step.remember ? `<aside class="tutorial-remember"><p>${T('REMEMBER','ข้อควรจำ')}</p><div>${esc(step.remember)}</div></aside>` : ''}
      </section>
    </div>
    <footer class="tutorial-footer"><p>${T('Open this guide again anytime from “How to use the app”.','เปิดคู่มือนี้อีกครั้งได้ทุกเมื่อจาก “วิธีใช้แอป”')}</p>
      <div class="tutorial-actions"><button type="button" class="tutorial-back" data-tutorial-action="back"${index === 0 ? ' disabled' : ''}>${T('Back','ย้อนกลับ')}</button>
      <button type="button" class="tutorial-next" data-tutorial-action="${last ? 'finish' : 'next'}">${last ? T('Finish tutorial','จบคู่มือ') : T('Next','ถัดไป')}<span aria-hidden="true">${last ? ' ✓' : ' →'}</span></button></div>
    </footer>`;
    const selected = root().querySelector(`[data-tutorial-step="${index}"]`);
    if (selected && selected.scrollIntoView && dialog().hasAttribute('open')) selected.scrollIntoView({ block:'nearest', inline:'nearest' });
    if (hadFocus) focusHeading();
  }
  function rememberSeen(){
    seenInMemory = true;
    try { localStorage.setItem(SEEN_KEY, '1'); } catch (_) { /* Private browsing: session memory is enough. */ }
  }
  function wasSeen(){
    if (seenInMemory) return true;
    try { return localStorage.getItem(SEEN_KEY) === '1'; } catch (_) { return false; }
  }
  function quietLearning(){
    if (typeof Vocab !== 'undefined' && typeof Vocab.stopTimers === 'function') Vocab.stopTimers();
    if (typeof Speech !== 'undefined' && typeof Speech.stop === 'function') Speech.stop();
    if (typeof Speaking !== 'undefined' && typeof Speaking.stopAll === 'function') Speaking.stopAll();
    if (typeof Sidebar !== 'undefined' && typeof Sidebar.close === 'function') Sidebar.close();
  }
  function hideBackground(){
    backgroundStates = [];
    let branch = dialog();
    while (branch && branch.parentElement){
      for (const sibling of Array.from(branch.parentElement.children)){
        if (sibling === branch || sibling === backdrop || ['SCRIPT','STYLE','LINK'].includes(sibling.tagName)) continue;
        backgroundStates.push({ element:sibling, inert:sibling.inert, inertAttribute:sibling.hasAttribute('inert'), hidden:sibling.getAttribute('aria-hidden') });
        sibling.inert = true;
        sibling.setAttribute('inert', '');
        sibling.setAttribute('aria-hidden', 'true');
      }
      if (branch.parentElement === document.body) break;
      branch = branch.parentElement;
    }
  }
  function restoreBackground(){
    backgroundStates.forEach(state => {
      state.element.inert = state.inert;
      if (!state.inertAttribute) state.element.removeAttribute('inert');
      if (state.hidden === null) state.element.removeAttribute('aria-hidden');
      else state.element.setAttribute('aria-hidden', state.hidden);
    });
    backgroundStates = [];
    if (backdrop) backdrop.remove();
    backdrop = null;
  }
  function openFallback(){
    fallback = true;
    backdrop = document.createElement('div');
    backdrop.className = 'tutorial-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.appendChild(backdrop);
    dialog().classList.add('tutorial-fallback');
    dialog().setAttribute('open', '');
    dialog().setAttribute('role', 'dialog');
    dialog().setAttribute('aria-modal', 'true');
    hideBackground();
  }
  function open(trigger){
    init();
    if (!dialog() || !root()) return false;
    const guide = content();
    if (!guide || !guide.steps || !guide.steps.length) return false;
    if (opened){ index = 0; render(); focusHeading(); return true; }
    returnFocus = trigger && typeof trigger.focus === 'function' ? trigger : document.activeElement;
    quietLearning();
    index = 0;
    opened = true;
    render();
    document.body.classList.add('tutorial-open');
    try {
      if (typeof dialog().showModal !== 'function') throw new Error('Native dialog unavailable');
      dialog().showModal();
    } catch (_) {
      openFallback();
    }
    // A temporary-password help sheet is shorter than the full app guide.
    // Reading it must not consume onboarding after the required change.
    if (!user()?.must_change_password) rememberSeen();
    focusHeading();
    return true;
  }
  function canRestoreFocus(element){
    return element && element.isConnected && typeof element.focus === 'function' &&
      (!element.closest || !element.closest('[inert],[hidden],[aria-hidden="true"]')) &&
      (typeof element.getClientRects !== 'function' || element.getClientRects().length > 0);
  }
  function cleanup(restoreFocus){
    const previous = returnFocus;
    opened = false;
    index = 0;
    returnFocus = null;
    restoreBackground();
    document.body.classList.remove('tutorial-open');
    if (dialog()){
      dialog().classList.remove('tutorial-fallback');
      dialog().removeAttribute('open');
      dialog().removeAttribute('aria-modal');
      dialog().removeAttribute('role');
    }
    fallback = false;
    if (root()) root().replaceChildren();
    if (restoreFocus && canRestoreFocus(previous)) previous.focus({ preventScroll:true });
  }
  function close(options = {}){
    if (!opened) return;
    const modal = dialog(), useNative = !fallback;
    // Set state before native close fires, so its event cannot clear a later open.
    opened = false;
    if (useNative && modal && typeof modal.close === 'function') modal.close();
    cleanup(options.restoreFocus !== false);
  }
  function maybeOpen(){
    const current = user();
    if (!current || current.must_change_password || wasSeen()) return false;
    return open();
  }
  function go(next, focusSelector = false){
    const guide = content();
    if (!guide || !guide.steps || !guide.steps.length) return;
    index = Math.max(0, Math.min(next, guide.steps.length - 1));
    render();
    const panel = root() && root().querySelector('.tutorial-content');
    if (panel) panel.scrollTop = 0;
    if (focusSelector){
      const button = root().querySelector(`[data-tutorial-step="${index}"]`);
      if (button){ button.focus({ preventScroll:true }); if (button.scrollIntoView) button.scrollIntoView({ block:'nearest', inline:'nearest' }); }
    } else focusHeading();
  }
  function keydown(event){
    if (!opened) return;
    // Screen-level shortcuts (for example flashcard arrows) must not act on
    // learning activity while focus belongs to the guide. Keep native button,
    // Tab and dialog Escape defaults unless this handler explicitly replaces them.
    event.stopPropagation();
    if (event.key === 'Escape' && fallback){ event.preventDefault(); close(); return; }
    const stepButton = event.target.closest && event.target.closest('[data-tutorial-step]');
    if (stepButton && ['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(event.key)){
      event.preventDefault();
      const count = content().steps.length;
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? count - 1 : index + (['ArrowUp','ArrowLeft'].includes(event.key) ? -1 : 1);
      go(next, true);
      return;
    }
    if (fallback && event.key === 'Tab'){
      const elements = Array.from(dialog().querySelectorAll(FOCUSABLE)).filter(el => !el.hidden && el.getAttribute('aria-hidden') !== 'true');
      const first = elements[0], last = elements[elements.length - 1], active = document.activeElement;
      if (!first){ event.preventDefault(); focusHeading(); return; }
      if (event.shiftKey && (active === first || !elements.includes(active))){ event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && (active === last || !dialog().contains(active))){ event.preventDefault(); first.focus(); }
    }
  }
  function init(){
    if (initialized || !dialog() || !root()) return;
    initialized = true;
    document.addEventListener('click', event => {
      const trigger = event.target.closest && event.target.closest('[data-tutorial-open]');
      if (trigger){ event.preventDefault(); open(trigger); }
    });
    root().addEventListener('click', event => {
      const lang = event.target.closest && event.target.closest('[data-tutorial-lang]');
      if (lang){
        if (typeof I18N !== 'undefined' && typeof I18N.set === 'function'){
          const rerender = () => { if (typeof App !== 'undefined' && typeof App.rerenderAll === 'function') App.rerenderAll(); };
          try { I18N.set(lang.dataset.tutorialLang, rerender); }
          catch (_){
            // I18N changes the current language before storing it. Keep the
            // guide usable if the browser refuses to persist that preference.
            if (typeof I18N.applyStatic === 'function') I18N.applyStatic();
            rerender();
          }
        }
        render(); focusHeading(); return;
      }
      const step = event.target.closest && event.target.closest('[data-tutorial-step]');
      if (step){ go(Number(step.dataset.tutorialStep)); return; }
      const action = event.target.closest && event.target.closest('[data-tutorial-action]');
      if (!action) return;
      if (action.dataset.tutorialAction === 'next') go(index + 1);
      else if (action.dataset.tutorialAction === 'back') go(index - 1);
      else close();
    });
    dialog().addEventListener('cancel', event => { event.preventDefault(); close(); });
    dialog().addEventListener('close', () => {
      // A close event is queued by the browser; ignore it if the dialog has
      // already reopened before the old event is delivered.
      if (opened && !dialog().open && !dialog().hasAttribute('open')) cleanup(true);
    });
    document.addEventListener('keydown', keydown, true);
    document.addEventListener('focusin', event => {
      if (opened && fallback && !dialog().contains(event.target)) focusHeading();
    });
  }
  return { init, open, close, render, maybeOpen, isOpen:() => opened };
})();
