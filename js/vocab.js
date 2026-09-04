/* =========================================================================
   VOCABULARY MODULE — six activities over the 102-word pool
   flashcards · matching · scramble · Thai recall · category sort · speed round
   ========================================================================= */

const VOCAB_MODES = [
  { id:'flash',    key:'modeFlash' },
  { id:'match',    key:'modeMatch' },
  { id:'scramble', key:'modeScramble' },
  { id:'thai',     key:'modeThai' },
  { id:'sort',     key:'modeSort' },
  { id:'speed',    key:'modeSpeed' },
];

const Vocab = (() => {
  let mode = 'flash';
  let cat = 'all';
  let pool = VOCAB;
  let index = 0;

  function label(v){ return I18N.current === 'th' ? v.th : v.en; }

  function renderModeChips(){
    const wrap = document.getElementById('vocabModeChips');
    wrap.innerHTML = VOCAB_MODES.map(m =>
      `<button class="chip ${m.id === mode ? 'active' : ''}" data-mode="${m.id}">${I18N.t(m.key)}</button>`
    ).join('');
  }

  function renderCatChips(){
    const wrap = document.getElementById('vocabCatChips');
    // category filter only applies to the card/word activities
    const usesCat = ['flash','scramble','thai'].includes(mode);
    wrap.style.display = usesCat ? 'flex' : 'none';
    // search only makes sense while browsing flashcards
    const sw = document.getElementById('vocabSearchWrap');
    if (sw) sw.style.display = (mode === 'flash') ? 'block' : 'none';
    const sc = document.getElementById('vocabSearchCount');
    if (sc && mode !== 'flash') sc.style.display = 'none';
    if (!usesCat) return;
    const all = [{ id:'all', en:I18N.t('catAll'), th:I18N.t('catAll') }, ...VOCAB_CATEGORIES];
    wrap.innerHTML = all.map(c =>
      `<button class="chip ${c.id === cat ? 'active' : ''}" data-cat="${c.id}">${label(c)}</button>`
    ).join('');
  }

  let query = '';

  /* The search box narrows the deck on top of the category filter, and
     matches English, Thai and the definition so either language works. */
  function applyPool(){
    let base = cat === 'all' ? VOCAB : VOCAB.filter(v => v.cat === cat);
    const q = query.trim().toLowerCase();
    if (q){
      base = base.filter(v =>
        `${v.word} ${v.th} ${v.def} ${v.short}`.toLowerCase().includes(q));
    }
    pool = base;
    if (index >= pool.length) index = 0;

    const countEl = document.getElementById('vocabSearchCount');
    if (countEl){
      if (q){
        countEl.style.display = 'block';
        countEl.textContent = `${pool.length} ${I18N.t('searchResults')}`;
      } else {
        countEl.style.display = 'none';
      }
    }
  }

  function showPane(){
    ['flash','match','scramble','thai','sort','speed'].forEach(id => {
      const el = document.getElementById('pane-' + id);
      if (el) el.style.display = (id === mode) ? 'block' : 'none';
    });
  }

  /* ---------------- flashcards ---------------- */
  function renderCard(){
    const stage = document.querySelector('#pane-flash .flip-stage');
    const emptyId = 'vocabFlashEmpty';
    let emptyEl = document.getElementById(emptyId);

    if (!pool.length){
      // Search matched nothing: show a clear message instead of a blank card.
      if (stage) stage.style.display = 'none';
      if (!emptyEl){
        emptyEl = document.createElement('div');
        emptyEl.id = emptyId;
        stage.parentNode.insertBefore(emptyEl, stage);
      }
      emptyEl.innerHTML = `<div class="empty-state">
        <div class="es-icon">${ICN.search}</div>
        <h4>${I18N.t('searchNoResultsTitle')}</h4>
        <p>${I18N.t('searchNoResultsBody')}</p></div>`;
      document.getElementById('fcPos').textContent = '0';
      document.getElementById('fcTotal').textContent = '0';
      return;
    }
    if (stage) stage.style.display = 'block';
    if (emptyEl) emptyEl.innerHTML = '';

    const w = pool[index];
    const catObj = VOCAB_CATEGORIES.find(c => c.id === w.cat);
    document.getElementById('fcCategory').textContent = label(catObj).toUpperCase();
    document.getElementById('fcWord').textContent = w.word;
    document.getElementById('fcPhon').textContent = w.phon;
    document.getElementById('fcThFront').textContent = w.th;
    document.getElementById('fcDef').textContent = w.def;
    document.getElementById('fcThBack').textContent = w.th;
    document.getElementById('fcPos').textContent = index + 1;
    document.getElementById('fcTotal').textContent = pool.length;
    document.getElementById('fcKnownCount').textContent = Progress.knownCount();
    document.getElementById('flashcard').classList.remove('flipped');

    const strip = document.getElementById('fcIndexStrip');
    const maxTicks = 40;
    if (pool.length <= maxTicks){
      strip.innerHTML = pool.map((w2, i) =>
        `<i class="${i === index ? 'current' : (Progress.isKnown(w2.word) ? 'seen' : '')}"></i>`
      ).join('');
    } else {
      const pct = Math.round(((index + 1) / pool.length) * 100);
      strip.innerHTML = `<i class="current" style="flex:0 0 ${pct}%"></i><i style="flex:1"></i>`;
    }
  }

  /* ---------------- matching ---------------- */
  let matchFirst = null, matchSolved = 0;
  const MATCH_PAIRS = 6;

  function newMatchRound(){
    matchFirst = null; matchSolved = 0;
    const chosen = sample(VOCAB, MATCH_PAIRS);
    let tiles = [];
    chosen.forEach((v, i) => {
      tiles.push({ pair:i, kind:'term', text:v.word });
      tiles.push({ pair:i, kind:'def',  text: I18N.current === 'th' ? v.th : v.short });
    });
    const grid = document.getElementById('matchGrid');
    grid.innerHTML = shuffle(tiles).map(t =>
      `<div class="match-tile ${t.kind}" data-pair="${t.pair}" data-kind="${t.kind}">${t.text}</div>`
    ).join('');
    document.getElementById('matchStatus').textContent = I18N.t('matchInstruction');
  }

  function onMatchTile(el){
    if (el.classList.contains('done') || el.classList.contains('picked')) return;
    if (!matchFirst){ matchFirst = el; el.classList.add('picked'); return; }
    if (matchFirst === el) return;

    const same = matchFirst.dataset.pair === el.dataset.pair;
    const diff = matchFirst.dataset.kind !== el.dataset.kind;
    if (same && diff){
      [matchFirst, el].forEach(t => { t.classList.remove('picked'); t.classList.add('right','done'); });
      matchFirst = null; matchSolved++;
      document.getElementById('matchStatus').textContent = matchSolved === MATCH_PAIRS
        ? I18N.t('allMatched')
        : `${I18N.t('matchedPair')} ${matchSolved}/${MATCH_PAIRS} ${I18N.t('pairsFound')}`;
    } else {
      const a = matchFirst, b = el;
      a.classList.add('oops'); b.classList.add('oops');
      document.getElementById('matchStatus').textContent = I18N.t('notQuite');
      matchFirst = null;
      setTimeout(() => { a.classList.remove('oops','picked'); b.classList.remove('oops'); }, 480);
    }
  }

  /* ---------------- word scramble ---------------- */
  let scrRounds = [], scrIdx = 0, scrScore = 0, scrPlaced = [], scrDone = false;
  const SCR_COUNT = 8;

  function newScramble(){
    scrRounds = genScrambleRounds(SCR_COUNT, cat);
    scrIdx = 0; scrScore = 0;
    renderScramble();
  }

  function renderScramble(){
    if (scrIdx >= scrRounds.length){ finishScramble(); return; }
    scrDone = false; scrPlaced = [];
    const r = scrRounds[scrIdx];
    const catObj = VOCAB_CATEGORIES.find(c => c.id === r.category);
    document.getElementById('scrCat').textContent = label(catObj);
    document.getElementById('scrClue').textContent = r.clue;
    document.getElementById('scrClueTh').textContent = I18N.current === 'th' ? r.clueTh : '';
    document.getElementById('scrScore').textContent = `${scrScore} / ${scrRounds.length}`;
    document.getElementById('scrFeedback').innerHTML = '';
    renderDots('scrDots', scrRounds.length, scrIdx);

    document.getElementById('scrSlots').innerHTML =
      r.answerLetters.map((_, i) => `<div class="slot" data-slot="${i}"></div>`).join('');
    document.getElementById('scrLetters').innerHTML =
      r.scrambled.map((ch, i) => `<button class="letter-tile" data-letter="${i}">${ch}</button>`).join('');

    const btn = document.getElementById('scrNext');
    btn.disabled = true;
    btn.textContent = I18N.t('builderCheck');
  }

  function scrPlaceLetter(tileIdx){
    if (scrDone) return;
    const r = scrRounds[scrIdx];
    if (scrPlaced.length >= r.answerLetters.length) return;
    scrPlaced.push({ tileIdx, ch: r.scrambled[tileIdx] });
    paintScramble();
    if (scrPlaced.length === r.answerLetters.length) checkScramble();
  }

  function scrRemoveAt(slotIdx){
    if (scrDone) return;
    if (slotIdx >= scrPlaced.length) return;
    scrPlaced.splice(slotIdx, 1);
    paintScramble();
  }

  function paintScramble(){
    const r = scrRounds[scrIdx];
    document.querySelectorAll('#scrSlots .slot').forEach((el, i) => {
      const p = scrPlaced[i];
      el.textContent = p ? p.ch : '';
      el.className = 'slot' + (p ? ' filled' : '');
    });
    const usedTiles = new Set(scrPlaced.map(p => p.tileIdx));
    document.querySelectorAll('#scrLetters .letter-tile').forEach((el, i) => {
      el.classList.toggle('used', usedTiles.has(i));
    });
  }

  function checkScramble(){
    const r = scrRounds[scrIdx];
    const attempt = scrPlaced.map(p => p.ch).join('');
    const correct = attempt === r.answerLetters.join('');
    scrDone = true;
    if (correct) scrScore++;

    document.querySelectorAll('#scrSlots .slot').forEach(el => {
      el.classList.remove('filled');
      el.classList.add(correct ? 'right' : 'wrong');
    });
    document.getElementById('scrScore').textContent = `${scrScore} / ${scrRounds.length}`;
    document.getElementById('scrFeedback').innerHTML = feedbackStrip(correct,
      correct ? `<b>${I18N.t('correct')}</b> ${r.answer} — ${r.phon}`
              : `<b>${I18N.t('notQuiteCap')}</b> ${r.answer} — ${r.clue}`);

    const btn = document.getElementById('scrNext');
    btn.disabled = false;
    btn.textContent = scrIdx === scrRounds.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishScramble(){
    const pct = Math.round((scrScore / scrRounds.length) * 100);
    Progress.recordQuizResult('scramble', pct);
    App.showResults(scrScore, scrRounds.length, I18N.t('modeScramble'));
  }

  /* ---------------- Thai recall ---------------- */
  let thQs = [], thIdx = 0, thScore = 0, thAnswered = false;
  const TH_COUNT = 12;

  function newThai(){
    thQs = genThaiQuestions(TH_COUNT, cat);
    thIdx = 0; thScore = 0;
    renderThai();
  }

  function renderThai(){
    if (thIdx >= thQs.length){ finishThai(); return; }
    thAnswered = false;
    const q = thQs[thIdx];
    document.getElementById('thPromptLabel').textContent = I18N.t('thaiPromptLabel');
    document.getElementById('thPrompt').textContent = q.prompt;
    document.getElementById('thScore').textContent = `${thScore} / ${thQs.length}`;
    document.getElementById('thFeedback').innerHTML = '';
    renderDots('thDots', thQs.length, thIdx);

    const letters = ['A','B','C','D'];
    document.getElementById('thOptions').innerHTML = q.options.map((o, i) =>
      `<div class="q-option" data-i="${i}"><div class="opt-mark">${letters[i]}</div><div>${o}</div></div>`
    ).join('');

    const btn = document.getElementById('thNext');
    btn.disabled = true;
    btn.textContent = I18N.t('selectAnswer');
  }

  function answerThai(i){
    if (thAnswered) return;
    thAnswered = true;
    const q = thQs[thIdx];
    document.querySelectorAll('#thOptions .q-option').forEach((el, idx) => {
      el.classList.add('locked');
      if (idx === q.correct) el.classList.add('is-correct');
      else if (idx === i) el.classList.add('is-wrong');
    });
    const ok = i === q.correct;
    if (ok) thScore++;
    document.getElementById('thScore').textContent = `${thScore} / ${thQs.length}`;
    document.getElementById('thFeedback').innerHTML = feedbackStrip(ok,
      `<b>${ok ? I18N.t('correct') : I18N.t('notQuiteCap')}</b> ${q.explain}`);
    const btn = document.getElementById('thNext');
    btn.disabled = false;
    btn.textContent = thIdx === thQs.length - 1 ? I18N.t('seeResults') : I18N.t('nextQuestion');
  }

  function finishThai(){
    const pct = Math.round((thScore / thQs.length) * 100);
    Progress.recordQuizResult('thai_recall', pct);
    App.showResults(thScore, thQs.length, I18N.t('modeThai'));
  }

  /* ---------------- category sort ---------------- */
  let sortRound = null, sortPicked = null, sortPlaced = 0;

  function newSort(){
    sortRound = genCategorySortRound(9);
    sortPicked = null; sortPlaced = 0;
    document.getElementById('sortStatus').textContent = I18N.t('sortInstruction');
    document.getElementById('sortTerms').innerHTML = sortRound.terms.map((t, i) =>
      `<button class="sort-term" data-term="${i}">${t.word}</button>`
    ).join('');
    document.getElementById('sortBuckets').innerHTML = sortRound.buckets.map(b => `
      <div class="bucket" data-bucket="${b.id}">
        <h5>${b.en}</h5>
        <div class="bk-th">${b.th}</div>
        <div class="bucket-items" data-items="${b.id}"></div>
      </div>`).join('');
  }

  function pickSortTerm(el){
    if (el.classList.contains('placed')) return;
    document.querySelectorAll('#sortTerms .sort-term').forEach(t => t.classList.remove('picked'));
    el.classList.add('picked');
    sortPicked = el;
    document.querySelectorAll('#sortBuckets .bucket').forEach(b => b.classList.add('armed'));
  }

  function dropInBucket(bucketEl){
    if (!sortPicked) return;
    const term = sortRound.terms[Number(sortPicked.dataset.term)];
    const bucketId = bucketEl.dataset.bucket;
    const ok = term.cat === bucketId;
    bucketEl.querySelector('.bucket-items').insertAdjacentHTML('beforeend',
      `<span class="bucket-chip ${ok ? 'right' : 'wrong'}">${term.word}</span>`);
    sortPicked.classList.add('placed');
    sortPicked.classList.remove('picked');
    sortPicked = null;
    sortPlaced++;
    document.querySelectorAll('#sortBuckets .bucket').forEach(b => b.classList.remove('armed'));

    const remaining = sortRound.terms.length - sortPlaced;
    document.getElementById('sortStatus').textContent = remaining === 0
      ? I18N.t('sortDone')
      : `${remaining} ${I18N.t('sortRemaining')}`;

    if (remaining === 0){
      const correct = document.querySelectorAll('#sortBuckets .bucket-chip.right').length;
      Progress.recordQuizResult('category_sort', Math.round((correct / sortRound.terms.length) * 100));
      App.refreshHome();
    }
  }

  /* ---------------- speed round ---------------- */
  let spQs = [], spIdx = 0, spScore = 0, spStreak = 0, spBestStreak = 0, spTimer = null, spLeft = 60;
  const SPEED_SECONDS = 60;

  function speedIntro(){
    document.getElementById('speedIntro').style.display = 'block';
    document.getElementById('speedPlay').style.display = 'none';
    document.getElementById('speedIntroTitle').textContent = I18N.t('speedTitle');
    document.getElementById('speedIntroBody').textContent = I18N.t('speedBody');
    document.getElementById('speedStart').textContent = I18N.t('speedStart');
    document.getElementById('speedTimeLabel').textContent = I18N.t('speedSeconds');
    document.getElementById('speedScoreLabel').textContent = I18N.t('speedCorrect');
    document.getElementById('speedStreakLabel').textContent = I18N.t('speedStreak');
  }

  function startSpeed(){
    spQs = genSpeedQuestions(60);
    spIdx = 0; spScore = 0; spStreak = 0; spBestStreak = 0; spLeft = SPEED_SECONDS;
    document.getElementById('speedIntro').style.display = 'none';
    document.getElementById('speedPlay').style.display = 'block';
    renderSpeedQ();
    clearInterval(spTimer);
    spTimer = setInterval(() => {
      spLeft--;
      const t = document.getElementById('speedTime');
      t.textContent = spLeft;
      t.classList.toggle('warn', spLeft <= 10);
      if (spLeft <= 0) endSpeed();
    }, 1000);
  }

  function renderSpeedQ(){
    if (spIdx >= spQs.length){ endSpeed(); return; }
    const q = spQs[spIdx];
    document.getElementById('speedTime').textContent = spLeft;
    document.getElementById('speedScore').textContent = spScore;
    document.getElementById('speedStreak').textContent = spStreak;
    document.getElementById('speedPrompt').textContent = q.prompt;
    const letters = ['A','B','C','D'];
    document.getElementById('speedOptions').innerHTML = q.options.map((o, i) =>
      `<div class="q-option" data-i="${i}"><div class="opt-mark">${letters[i]}</div><div>${o}</div></div>`
    ).join('');
  }

  function answerSpeed(i, el){
    const q = spQs[spIdx];
    const ok = i === q.correct;
    if (ok){
      spScore++; spStreak++;
      spBestStreak = Math.max(spBestStreak, spStreak);
      el.classList.add('is-correct');
    } else {
      spStreak = 0;
      el.classList.add('is-wrong');
      const right = document.querySelector(`#speedOptions .q-option[data-i="${q.correct}"]`);
      if (right) right.classList.add('is-correct');
    }
    document.querySelectorAll('#speedOptions .q-option').forEach(o => o.classList.add('locked'));
    setTimeout(() => { spIdx++; renderSpeedQ(); }, ok ? 220 : 700);
  }

  function endSpeed(){
    clearInterval(spTimer);
    spTimer = null;
    const attempted = Math.max(1, spIdx);
    const pct = Math.round((spScore / attempted) * 100);
    Progress.recordQuizResult('speed_round', pct);
    App.showResults(spScore, attempted, I18N.t('modeSpeed'), {
      extraNote: `${I18N.t('speedBestStreak')}: ${spBestStreak}`
    });
    speedIntro();
  }

  function stopTimers(){ if (spTimer){ clearInterval(spTimer); spTimer = null; } }

  /* ---------------- shared dots helper ---------------- */
  function renderDots(id, total, current){
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = Array.from({ length: total }).map((_, i) =>
      `<i class="${i < current ? 'done' : ''} ${i === current ? 'current' : ''}"></i>`
    ).join('');
  }

  /* ---------------- wiring ---------------- */
  function bind(){
    document.getElementById('vocabModeChips').addEventListener('click', e => {
      const chip = e.target.closest('.chip'); if (!chip) return;
      setMode(chip.dataset.mode);
    });
    document.getElementById('vocabCatChips').addEventListener('click', e => {
      const chip = e.target.closest('.chip'); if (!chip) return;
      cat = chip.dataset.cat;
      applyPool(); index = 0;
      renderCatChips();
      chip.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
      if (mode === 'flash') renderCard();
      if (mode === 'scramble') newScramble();
      if (mode === 'thai') newThai();
    });

    const searchInput = document.getElementById('vocabSearch');
    const searchClear = document.getElementById('vocabSearchClear');
    if (searchInput){
      searchInput.addEventListener('input', () => {
        query = searchInput.value;
        searchClear.classList.toggle('show', query.length > 0);
        index = 0;
        applyPool();
        renderCard();
      });
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        query = '';
        searchClear.classList.remove('show');
        index = 0;
        applyPool();
        renderCard();
        searchInput.focus();
      });
    }

    document.getElementById('flashcard').addEventListener('click', () => {
      document.getElementById('flashcard').classList.toggle('flipped');
    });
    document.getElementById('fcPrev').addEventListener('click', () => { index = (index - 1 + pool.length) % pool.length; renderCard(); });
    document.getElementById('fcNext').addEventListener('click', () => { index = (index + 1) % pool.length; renderCard(); });
    document.getElementById('fcSpeak').addEventListener('click', () => {
      const btn = document.getElementById('fcSpeak');
      btn.style.background = 'var(--gold-mist)';
      Speech.speak(pool[index].word, { rate: App.speechRate(), onend(){ btn.style.background = ''; } });
    });
    document.getElementById('fcKnow').addEventListener('click', () => {
      Progress.markWordKnown(pool[index].word, true);
      index = (index + 1) % pool.length; renderCard(); App.refreshHome();
    });
    document.getElementById('fcAgain').addEventListener('click', () => {
      Progress.markWordKnown(pool[index].word, false);
      index = (index + 1) % pool.length; renderCard(); App.refreshHome();
    });

    document.getElementById('matchGrid').addEventListener('click', e => {
      const tile = e.target.closest('.match-tile'); if (tile) onMatchTile(tile);
    });
    document.getElementById('matchNew').addEventListener('click', newMatchRound);

    document.getElementById('scrLetters').addEventListener('click', e => {
      const t = e.target.closest('.letter-tile'); if (t) scrPlaceLetter(Number(t.dataset.letter));
    });
    document.getElementById('scrSlots').addEventListener('click', e => {
      const s = e.target.closest('.slot'); if (s) scrRemoveAt(Number(s.dataset.slot));
    });
    document.getElementById('scrNext').addEventListener('click', () => { scrIdx++; renderScramble(); });

    document.getElementById('thOptions').addEventListener('click', e => {
      const o = e.target.closest('.q-option'); if (o) answerThai(Number(o.dataset.i));
    });
    document.getElementById('thNext').addEventListener('click', () => { thIdx++; renderThai(); });

    document.getElementById('sortTerms').addEventListener('click', e => {
      const t = e.target.closest('.sort-term'); if (t) pickSortTerm(t);
    });
    document.getElementById('sortBuckets').addEventListener('click', e => {
      const b = e.target.closest('.bucket'); if (b) dropInBucket(b);
    });
    document.getElementById('sortNew').addEventListener('click', newSort);

    document.getElementById('speedStart').addEventListener('click', startSpeed);
    document.getElementById('speedOptions').addEventListener('click', e => {
      const o = e.target.closest('.q-option');
      if (o && !o.classList.contains('locked')) answerSpeed(Number(o.dataset.i), o);
    });
  }

  function setMode(next){
    stopTimers();
    mode = next;
    renderModeChips();
    renderCatChips();
    showPane();
    if (mode === 'flash') renderCard();
    if (mode === 'match') newMatchRound();
    if (mode === 'scramble') newScramble();
    if (mode === 'thai') newThai();
    if (mode === 'sort') newSort();
    if (mode === 'speed') speedIntro();
  }

  return {
    init(){ applyPool(); bind(); setMode('flash'); },
    rerender(){ renderModeChips(); renderCatChips(); setMode(mode); },
    stopTimers,
  };
})();
