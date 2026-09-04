/* =========================================================================
   DAILY FIVE — a swipe deck of the day's five words.
   Swipe right when a word is understood; swipe left and it returns to the
   back of the queue. Once all five have gone right, the knowledge check
   unlocks and quizzes exactly those five words.

   Gestures use Pointer Events, so the same code path serves touch, pen and
   mouse. Every gesture also has an equivalent button and arrow-key binding,
   so the deck is fully usable without dragging.
   ========================================================================= */

const Daily = (() => {
  const COMMIT_PX = 88;        // horizontal distance that commits a swipe
  const COMMIT_VELOCITY = 0.6; // px/ms flick that commits regardless of distance

  let queue = [];       // words still awaiting a right-swipe, in order
  let drag = null;
  let animating = false;

  function wordObj(name){ return VOCAB.find(v => v.word === name); }

  function catLabelFor(catId){
    const c = VOCAB_CATEGORIES.find(x => x.id === catId);
    if (!c) return '';
    return I18N.current === 'th' ? c.th : c.en;
  }

  /* ---------------- state → view ---------------- */
  function buildQueue(){
    const d = Progress.dailyState();
    const done = new Set(d.right);
    queue = d.words.filter(w => !done.has(w));
  }

  function render(){
    const d = Progress.dailyState();
    const ready = Progress.dailyIsReadyForCheck();

    document.getElementById('dailySwipe').style.display = (!ready) ? 'block' : 'none';
    document.getElementById('dailyReady').style.display = (ready && !d.checkDone) ? 'block' : 'none';
    document.getElementById('dailyDone').style.display  = (ready && d.checkDone) ? 'block' : 'none';

    renderPills(d);

    if (!ready){ renderStack(); }
    else if (!d.checkDone){ renderReady(d); }
    else { renderDone(d); }
  }

  function renderPills(d){
    const done = new Set(d.right);
    document.getElementById('dailyPills').innerHTML = d.words.map(w =>
      `<i class="${done.has(w) ? 'on' : ''}"></i>`).join('');
    document.getElementById('dailyCount').textContent =
      `${d.right.length} / ${d.words.length}`;
  }

  function cardMarkup(name, depth){
    const v = wordObj(name);
    if (!v) return '';
    return `
      <article class="swipe-card depth-${depth}" data-word="${v.word}">
        <div class="swipe-badge like">${I18N.t('swipeGotItStamp')}</div>
        <div class="swipe-badge nope">${I18N.t('swipeNotYetStamp')}</div>
        <div class="sc-top">
          <span class="sc-cat">${catLabelFor(v.cat)}</span>
          <button class="sc-speak" data-speak="${v.word}" aria-label="Hear ${v.word}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6.5 9H4v6h2.5L11 19V5Z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5"/><path d="M18 7a7 7 0 0 1 0 10"/></svg>
          </button>
        </div>
        <h3 class="sc-word">${v.word}</h3>
        <p class="sc-phon">${v.phon}</p>
        <p class="sc-th">${v.th}</p>
        <div class="sc-rule"></div>
        <p class="sc-def">${v.def}</p>
      </article>`;
  }

  function renderStack(){
    const stage = document.getElementById('swipeStage');
    // Render at most three cards: the live one plus two for depth.
    const visible = queue.slice(0, 3);
    stage.innerHTML = visible.map((w, i) => cardMarkup(w, i)).reverse().join('');
    document.getElementById('swipeHint').textContent =
      queue.length ? I18N.t('swipeHint') : '';
    bindTopCard();
  }

  function renderReady(d){
    document.getElementById('dailyReadyTitle').textContent = I18N.t('dailyReadyTitle');
    document.getElementById('dailyReadyBody').textContent = I18N.t('dailyReadyBody');
    document.getElementById('dailyStartCheck').textContent = I18N.t('dailyStartCheck');
    document.getElementById('dailyReadyList').innerHTML = wordListMarkup(d.words);
  }

  function renderDone(d){
    const pct = d.checkTotal ? Math.round((d.checkScore / d.checkTotal) * 100) : 0;
    document.getElementById('dailyDoneRing').style.setProperty('--pct', pct);
    document.getElementById('dailyDonePct').textContent = pct + '%';
    document.getElementById('dailyDoneTitle').textContent = I18N.t('dailyDoneTitle');
    document.getElementById('dailyDoneBody').textContent =
      `${I18N.t('dailyDoneScore')} ${d.checkScore}/${d.checkTotal}. ${I18N.t('dailyComeBack')}`;
    document.getElementById('dailyRetake').textContent = I18N.t('dailyRetake');
    document.getElementById('dailyDoneList').innerHTML = wordListMarkup(d.words);
  }

  function wordListMarkup(words){
    return words.map(w => {
      const v = wordObj(w);
      if (!v) return '';
      return `<div class="daily-word-row">
        <div>
          <div class="dwr-word">${v.word}</div>
          <div class="dwr-th">${v.th}</div>
        </div>
        <button class="mini-play" data-speak="${v.word}" aria-label="Hear ${v.word}">${ICN.play}</button>
      </div>`;
    }).join('');
  }

  /* ---------------- gesture handling ---------------- */
  function topCard(){
    const cards = document.querySelectorAll('#swipeStage .swipe-card');
    return cards.length ? cards[cards.length - 1] : null; // last in DOM = front
  }

  function bindTopCard(){
    const card = topCard();
    if (!card) return;
    card.classList.add('is-top');
    card.addEventListener('pointerdown', onPointerDown);
  }

  function onPointerDown(e){
    if (animating) return;
    // Let the speaker button work without starting a drag.
    if (e.target.closest('.sc-speak')) return;
    const card = e.currentTarget;
    card.setPointerCapture(e.pointerId);
    drag = { card, id:e.pointerId, x0:e.clientX, y0:e.clientY, dx:0, dy:0, t0:performance.now() };
    card.classList.add('dragging');
    card.addEventListener('pointermove', onPointerMove);
    card.addEventListener('pointerup', onPointerUp);
    card.addEventListener('pointercancel', onPointerUp);
  }

  function onPointerMove(e){
    if (!drag || e.pointerId !== drag.id) return;
    drag.dx = e.clientX - drag.x0;
    drag.dy = e.clientY - drag.y0;
    paintDrag(drag.card, drag.dx, drag.dy);
  }

  function paintDrag(card, dx, dy){
    const rot = dx / 18;
    card.style.transform = `translate(${dx}px, ${dy * 0.35}px) rotate(${rot}deg)`;
    const like = Math.max(0, Math.min(1, dx / COMMIT_PX));
    const nope = Math.max(0, Math.min(1, -dx / COMMIT_PX));
    card.querySelector('.swipe-badge.like').style.opacity = like;
    card.querySelector('.swipe-badge.nope').style.opacity = nope;
  }

  function onPointerUp(e){
    if (!drag || e.pointerId !== drag.id) return;
    const { card, dx, t0 } = drag;
    card.removeEventListener('pointermove', onPointerMove);
    card.removeEventListener('pointerup', onPointerUp);
    card.removeEventListener('pointercancel', onPointerUp);
    card.classList.remove('dragging');

    const elapsed = Math.max(1, performance.now() - t0);
    const velocity = Math.abs(dx) / elapsed;
    const commit = Math.abs(dx) > COMMIT_PX || velocity > COMMIT_VELOCITY;
    drag = null;

    if (commit) commitSwipe(dx > 0 ? 'right' : 'left', card);
    else springBack(card);
  }

  function springBack(card){
    card.style.transform = '';
    card.querySelector('.swipe-badge.like').style.opacity = 0;
    card.querySelector('.swipe-badge.nope').style.opacity = 0;
  }

  /* ---------------- swipe outcomes ---------------- */
  function commitSwipe(direction, card){
    if (animating) return;
    const el = card || topCard();
    if (!el) return;
    const word = el.dataset.word;
    animating = true;

    const goRight = direction === 'right';
    el.classList.add('flying');
    el.style.transform = `translate(${goRight ? 520 : -520}px, 40px) rotate(${goRight ? 26 : -26}deg)`;
    el.style.opacity = '0';
    el.querySelector('.swipe-badge.' + (goRight ? 'like' : 'nope')).style.opacity = 1;

    window.setTimeout(() => {
      if (goRight){
        Progress.dailySwipeRight(word);
        queue = queue.filter(w => w !== word);
        announce(I18N.t('swipeGotIt') + ': ' + word);
      } else {
        Progress.dailySwipeLeft();
        // Back of the queue, so it comes round again this session.
        queue = queue.filter(w => w !== word).concat(word);
        announce(I18N.t('swipeNotYet') + ': ' + word);
      }
      animating = false;
      render();
      App.refreshHome();
    }, 300);
  }

  function announce(msg){
    const live = document.getElementById('dailyLive');
    if (live) live.textContent = msg;
  }

  /* ---------------- knowledge check ---------------- */
  function buildCheck(words){
    // One question per word, cycling through three question shapes so the
    // check tests recognition, recall and Thai comprehension.
    return words.map((name, i) => {
      const v = wordObj(name);
      const others = sample(VOCAB.filter(o => o.word !== v.word), 3);
      const shape = i % 3;

      if (shape === 0){
        const opts = shuffle([v, ...others]);
        return {
          q: `${I18N.t('defQuestion')} \u201c${v.word}\u201d`,
          promptTh: I18N.current === 'th' ? v.th : null,
          options: opts.map(o => o.short),
          correct: opts.findIndex(o => o.word === v.word),
          explain: `${v.word} — ${v.def}`,
        };
      }
      if (shape === 1){
        const opts = shuffle([v, ...others]);
        return {
          q: `${I18N.t('revQuestion')} \u201c${v.short}\u201d`,
          options: opts.map(o => o.word),
          correct: opts.findIndex(o => o.word === v.word),
          explain: `${v.word} — ${v.def}`,
        };
      }
      const opts = shuffle([v, ...others]);
      return {
        q: v.th,
        isThaiPrompt: true,
        options: opts.map(o => o.word),
        correct: opts.findIndex(o => o.word === v.word),
        explain: `${v.word} (${v.th}) — ${v.def}`,
      };
    });
  }

  function startCheck(){
    const d = Progress.dailyState();
    Quiz.startMC({
      questions: buildCheck(d.words),
      title: I18N.t('dailyCheckTitle'),
      kicker: I18N.t('dailyCheckKicker'),
      progressKey: 'daily',
      onFinish(score, total){
        Progress.dailyCompleteCheck(score, total);
        App.showResults(score, total, I18N.t('dailyCheckTitle'), {
          extraNote: I18N.t('dailyBanked'),
          backTo: 'daily',
        });
        render();
        App.refreshHome();
      }
    });
  }

  /* ---------------- wiring ---------------- */
  function bind(){
    document.getElementById('swipeLeft').addEventListener('click', () => commitSwipe('left'));
    document.getElementById('swipeRight').addEventListener('click', () => commitSwipe('right'));
    document.getElementById('dailyStartCheck').addEventListener('click', startCheck);
    document.getElementById('dailyRetake').addEventListener('click', startCheck);

    // Speaker buttons on cards and word lists
    document.getElementById('screen-daily').addEventListener('click', e => {
      const btn = e.target.closest('[data-speak]');
      if (!btn) return;
      e.stopPropagation();
      Speech.speak(btn.dataset.speak, { rate: App.speechRate() });
    });

    // Arrow keys drive the deck for anyone not using touch
    document.addEventListener('keydown', e => {
      const active = document.getElementById('screen-daily').classList.contains('active');
      if (!active || animating) return;
      if (Progress.dailyIsReadyForCheck()) return;
      if (e.key === 'ArrowRight'){ e.preventDefault(); commitSwipe('right'); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); commitSwipe('left'); }
    });
  }

  return {
    init(){ bind(); },
    open(){ buildQueue(); render(); },
    rerender(){ buildQueue(); render(); },
    startCheck,
    /* Home-screen summary */
    summary(){
      const d = Progress.dailyState();
      return {
        total: d.words.length,
        done: d.right.length,
        checkDone: d.checkDone,
        ready: Progress.dailyIsReadyForCheck(),
        score: d.checkScore,
        scoreTotal: d.checkTotal,
      };
    }
  };
})();
