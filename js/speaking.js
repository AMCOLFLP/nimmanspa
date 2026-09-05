/* =========================================================================
   SPEAKING TEST — pronunciation practice with a real, defensible score.

   HOW THE SCORE IS PRODUCED (and what it is not)
   ----------------------------------------------
   This uses the browser's own SpeechRecognition engine — the same one behind
   phone dictation. The learner speaks, the engine transcribes, and we compare
   the transcript with the target text.

   That is an *intelligibility* measure, not a phoneme-level assessment: it
   answers "would a listener understand this word?", which is exactly what
   matters at a spa reception desk. It is honest because the signal is real —
   the engine either understood the word or it did not.

   What it deliberately does NOT do: score audio loudness or duration and
   dress that up as accuracy. Recording alone cannot judge pronunciation, and
   a number invented from a waveform would be a lie to the learner.

   True phoneme scoring (per-sound accuracy, fluency, prosody) needs a cloud
   service such as Azure Pronunciation Assessment. That needs an API key and
   a server, so it is out of scope for an offline app — noted in the UI.

   SCORING MODEL
   -------------
   Single words:
     exact match on any alternative      -> 100
     otherwise best character similarity -> similarity x 95 (never a full 100)
   Phrases:
     word-level recall (in order, with near-matches at half credit) weighted
     70%, plus overall string similarity weighted 30%.
   Engine confidence, when the browser reports it, nudges the result by at
   most 15% so a hesitant-but-correct attempt is not over-rewarded.
   ========================================================================= */

const Speaking = (() => {
  const SR = (typeof window !== 'undefined') &&
             (window.SpeechRecognition || window.webkitSpeechRecognition);
  const supported = !!SR;
  const canRecord = typeof navigator !== 'undefined' &&
                    navigator.mediaDevices && navigator.mediaDevices.getUserMedia;

  const WORD_COUNT = 8;
  const PHRASE_COUNT = 5;
  const MAX_ATTEMPTS = 2;

  let mode = 'words';        // 'words' | 'phrases'
  let level = 'all';
  let items = [];
  let idx = 0;
  let scores = [];
  let attempt = 0;
  let listening = false;
  let rec = null;
  let stopTimer = null;
  let lastResult = null;

  /* Self-check fallback state (no recognition available) */
  let mediaRecorder = null;
  let recordedUrl = null;
  let recordChunks = [];

  /* ---------------------------------------------------------------- text */

  function normalise(s){
    return String(s || '')
      .toLowerCase()
      .replace(/[\u2018\u2019\u02bc]/g, "'")              // curly -> straight apostrophe
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // strip accents
      .replace(/[^a-z0-9\s']/g, ' ')                      // punctuation -> space
      .replace(/'+/g, "'")
      .replace(/(^|\s)'+|'+(\s|$)/g, '$1$2')              // drop stray quotes
      .replace(/\s+/g, ' ')
      .trim();
  }

  function levenshtein(a, b){
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++){
      const cur = [i];
      for (let j = 1; j <= b.length; j++){
        cur[j] = Math.min(
          prev[j] + 1,
          cur[j - 1] + 1,
          prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
      prev = cur;
    }
    return prev[b.length];
  }

  /* 0..1 similarity */
  function similarity(a, b){
    if (!a && !b) return 1;
    if (!a || !b) return 0;
    const d = levenshtein(a, b);
    return Math.max(0, 1 - d / Math.max(a.length, b.length));
  }

  /* --------------------------------------------------------------- score */

  /* Recognisers routinely split one spoken word into two tokens
     ("ex foliation", "contra indication"). That is an engine artefact, not a
     learner mistake, so compare with spaces removed as well. */
  function collapse(s){ return s.replace(/\s+/g, ''); }

  /* Compare one transcript against the target. Returns a score plus a
     per-word breakdown used to show the learner exactly what was missed. */
  function scoreAttempt(target, alternatives){
    const t = normalise(target);
    const tWords = t.split(' ').filter(Boolean);
    let best = { score: 0, heard: '', words: [], conf: 0 };

    (alternatives || []).forEach(alt => {
      const h = normalise(alt.transcript);
      if (!h) return;
      const hWords = h.split(' ').filter(Boolean);
      let score;
      let exact = false;

      if (h === t){
        score = 100; exact = true;                  // heard verbatim
      } else if (collapse(h) === collapse(t)){
        score = 97; exact = true;                   // right sounds, split tokens
      } else if (tWords.length === 1){
        /* Single words need a steep curve. Raw character similarity is far
           too kind to near-misses that change the word entirely:
           "contradiction" shares most of its letters with
           "contraindication", but a guest would not understand it.
           Compare collapsed forms so an engine-inserted space is not
           counted against the learner. */
        score = Math.round(Math.pow(similarity(collapse(t), collapse(h)), 1.8) * 95);
      } else {
        // Phrase: greedy in-order word recall with partial credit.
        let cursor = 0, hits = 0, near = 0;
        const marks = tWords.map(w => {
          let found = -1, isNear = false;
          for (let i = cursor; i < hWords.length; i++){
            if (hWords[i] === w){ found = i; break; }
            if (similarity(w, hWords[i]) >= 0.75){ found = i; isNear = true; break; }
          }
          if (found >= 0){
            cursor = found + 1;
            if (isNear){ near++; return 'near'; }
            hits++; return 'hit';
          }
          return 'miss';
        });
        const recall = (hits + near * 0.5) / tWords.length;
        const overall = similarity(t, h);
        score = Math.round((recall * 0.7 + overall * 0.3) * 100);
        if (score > best.score) best.words = marks;
      }

      /* Engine confidence nudges inexact attempts by at most 4% either way.
         Browsers disagree wildly here — Safari usually reports 0 — so an
         unreported value is treated as neutral (0.5) rather than as zero
         confidence. Exact matches are never touched, otherwise a browser
         reporting modest confidence would drag a perfect word below 100. */
      const rawConf = (typeof alt.confidence === 'number' && alt.confidence > 0) ? alt.confidence : 0.5;
      if (!exact) score = Math.round(score * (0.96 + 0.08 * rawConf));
      score = Math.max(0, Math.min(100, score));

      if (score > best.score){
        best = { score, heard: alt.transcript, words: best.words, conf: rawConf };
      }
    });

    // single-word breakdown
    if (tWords.length === 1 && best.score){
      best.words = [best.score >= 90 ? 'hit' : (best.score >= 60 ? 'near' : 'miss')];
    }
    return best;
  }

  function band(score){
    if (score >= 90) return { key:'spkBandExcellent', cls:'l1' };
    if (score >= 75) return { key:'spkBandGood',      cls:'l1' };
    if (score >= 60) return { key:'spkBandClear',     cls:'l2' };
    return { key:'spkBandRetry', cls:'l3' };
  }

  /* ------------------------------------------------------------ set-up UI */

  function open(){
    stopAll();
    document.getElementById('spkSetup').style.display = 'block';
    document.getElementById('spkTest').style.display = 'none';
    document.getElementById('spkDone').style.display = 'none';
    renderSetup();
  }

  function renderSetup(){
    document.getElementById('spkModeChips').innerHTML = [
      { id:'words',   key:'spkModeWords' },
      { id:'phrases', key:'spkModePhrases' },
    ].map(m => `<button class="chip ${m.id === mode ? 'active' : ''}" data-spkmode="${m.id}">${I18N.t(m.key)}</button>`).join('');

    document.getElementById('spkLevelChips').innerHTML = levelChipsMarkup(level);

    // Capability notice — always tell the learner what they are getting.
    const notice = document.getElementById('spkNotice');
    const insecure = typeof location !== 'undefined' &&
                     location.protocol === 'file:' ;
    let html = '';
    if (!supported){
      html = `<div class="spk-notice warn">
        <b>${I18N.t('spkNoRecogTitle')}</b><br>${I18N.t('spkNoRecogBody')}
      </div>`;
    } else if (insecure){
      html = `<div class="spk-notice warn">
        <b>${I18N.t('spkFileWarnTitle')}</b><br>${I18N.t('spkFileWarnBody')}
      </div>`;
    } else {
      html = `<div class="spk-notice">${I18N.t('spkHowItWorks')}</div>`;
    }
    notice.innerHTML = html;

    document.getElementById('spkStartBtn').textContent =
      supported ? I18N.t('spkStart') : I18N.t('spkStartSelfCheck');
  }

  /* --------------------------------------------------------------- items */

  function buildItems(){
    if (mode === 'words'){
      let pool = vocabPool('all', level).filter(v => !/[\s-]/.test(v.word));
      if (pool.length < WORD_COUNT) pool = vocabPool('all', 'all').filter(v => !/[\s-]/.test(v.word));
      return sample(pool, WORD_COUNT).map(v => ({
        target: v.word, th: v.th, sub: v.phon, level: v.level, kind:'word',
      }));
    }
    let pool = [];
    PHRASES.forEach(c => c.items.forEach(p => pool.push(p)));
    if (level !== 'all') {
      const filtered = pool.filter(p => String(p.level) === level);
      if (filtered.length >= PHRASE_COUNT) pool = filtered;
    }
    return sample(pool, PHRASE_COUNT).map(p => ({
      target: p.text, th: p.th, sub: p.note, level: p.level, kind:'phrase',
    }));
  }

  function start(){
    items = buildItems();
    idx = 0; scores = []; attempt = 0; lastResult = null;
    document.getElementById('spkSetup').style.display = 'none';
    document.getElementById('spkTest').style.display = 'block';
    document.getElementById('spkDone').style.display = 'none';
    renderItem();
  }

  function renderItem(){
    if (idx >= items.length){ finish(); return; }
    attempt = 0; lastResult = null;
    const it = items[idx];

    document.getElementById('spkProgress').textContent = `${idx + 1} / ${items.length}`;
    dots('spkDots', items.length, idx);
    document.getElementById('spkTarget').textContent = it.target;
    document.getElementById('spkTarget').className = it.kind === 'phrase' ? 'spk-target phrase' : 'spk-target';
    document.getElementById('spkSub').textContent = it.sub || '';
    document.getElementById('spkTh').textContent = it.th || '';
    document.getElementById('spkLevelBadge').innerHTML = levelBadge(it.level, { compact:true });
    document.getElementById('spkFeedback').innerHTML = '';
    document.getElementById('spkAttempt').textContent = '';
    setMicState('idle');

    const next = document.getElementById('spkNextBtn');
    next.disabled = true;
    next.textContent = idx === items.length - 1
      ? I18N.t('seeResults')
      : I18N.t(it.kind === 'phrase' ? 'spkNextPhrase' : 'spkNextItem');

    // self-check fallback controls
    document.getElementById('spkSelfCheck').style.display = supported ? 'none' : 'block';
    if (!supported) renderSelfCheck();
  }

  function setMicState(state){
    const btn = document.getElementById('spkMic');
    const hint = document.getElementById('spkMicHint');
    btn.classList.remove('listening','busy');
    if (state === 'listening'){
      btn.classList.add('listening');
      hint.textContent = I18N.t('spkListening');
    } else if (state === 'busy'){
      btn.classList.add('busy');
      hint.textContent = I18N.t('spkThinking');
    } else {
      hint.textContent = I18N.t('spkTapToSpeak');
    }
  }

  /* ---------------------------------------------------------- recognition */

  function listen(){
    if (listening) { stopListening(); return; }
    if (!supported){ return; }
    if (attempt >= MAX_ATTEMPTS) return;

    Speech.stop();   // synthesis and recognition must not overlap

    try { rec = new SR(); }
    catch(e){ showError('spkErrGeneric'); return; }

    rec.lang = 'en-US';
    rec.continuous = false;
    rec.interimResults = false;
    try { rec.maxAlternatives = 5; } catch(e){}

    const it = items[idx];
    let got = false;

    rec.onresult = (e) => {
      got = true;
      const res = e.results && e.results[0];
      const alts = [];
      if (res){
        for (let i = 0; i < res.length; i++){
          alts.push({ transcript: res[i].transcript, confidence: res[i].confidence });
        }
      }
      lastResult = scoreAttempt(it.target, alts);
      showResult(lastResult);
    };

    rec.onerror = (e) => {
      got = true;
      const err = (e && e.error) || '';
      if (err === 'not-allowed' || err === 'service-not-allowed') showError('spkErrMic');
      else if (err === 'no-speech') showError('spkErrNoSpeech');
      else if (err === 'network') showError('spkErrNetwork');
      else if (err === 'aborted') setMicState('idle');
      else showError('spkErrGeneric');
    };

    rec.onend = () => {
      listening = false;
      clearTimeout(stopTimer);
      if (!got) { setMicState('idle'); }
    };

    try {
      rec.start();
      listening = true;
      setMicState('listening');
      // Recognition can hang waiting for silence; cap it.
      clearTimeout(stopTimer);
      stopTimer = setTimeout(() => { try { rec.stop(); } catch(e){} },
        it.kind === 'phrase' ? 12000 : 6000);
    } catch(e){
      listening = false;
      showError('spkErrGeneric');
    }
  }

  function stopListening(){
    clearTimeout(stopTimer);
    if (rec){ try { rec.stop(); } catch(e){} }
    listening = false;
    setMicState('busy');
  }

  function stopAll(){
    clearTimeout(stopTimer);
    if (rec){ try { rec.abort(); } catch(e){} rec = null; }
    listening = false;
    if (mediaRecorder && mediaRecorder.state === 'recording'){
      try { mediaRecorder.stop(); } catch(e){}
    }
    releaseRecording();
  }

  function showError(key){
    listening = false;
    setMicState('idle');
    document.getElementById('spkFeedback').innerHTML =
      `<div class="feedback-strip incorrect">${ICN.cross}<div>${I18N.t(key)}</div></div>`;
  }

  function showResult(r){
    attempt++;
    setMicState('idle');
    const it = items[idx];
    const b = band(r.score);

    // keep the learner's best attempt on this item
    const prev = scores[idx];
    if (prev === undefined || r.score > prev) scores[idx] = r.score;

    const wordChips = (r.words && it.kind === 'phrase')
      ? `<div class="spk-words">${normalise(it.target).split(' ').map((w, i) =>
          `<span class="spk-word ${r.words[i] || 'miss'}">${w}</span>`).join('')}</div>`
      : '';

    document.getElementById('spkFeedback').innerHTML = `
      <div class="spk-result">
        <div class="spk-score-row">
          <div class="spk-score ${b.cls}">${r.score}<span>%</span></div>
          <div class="spk-band">
            <b>${I18N.t(b.key)}</b>
            <span>${I18N.t('spkBest')}: ${scores[idx]}%</span>
          </div>
        </div>
        ${r.heard ? `<p class="spk-heard"><b>${I18N.t('spkWeHeard')}</b> &ldquo;${r.heard}&rdquo;</p>` : ''}
        ${wordChips}
        ${r.score < 75 ? `<p class="spk-tip">${I18N.t('spkTipReplay')}</p>` : ''}
      </div>`;

    document.getElementById('spkAttempt').textContent =
      attempt >= MAX_ATTEMPTS ? I18N.t('spkNoMoreAttempts')
                              : `${I18N.t('spkAttemptsLeft')} ${MAX_ATTEMPTS - attempt}`;

    const next = document.getElementById('spkNextBtn');
    next.disabled = false;
  }

  /* --------------------------------------------- self-check (no recogniser) */

  /* Without a recogniser there is no honest way to produce a percentage, so
     the learner records, compares against the model voice, and rates
     themselves. The result is labelled as self-rated wherever it appears. */
  function renderSelfCheck(){
    document.getElementById('spkSelfCheck').innerHTML = `
      <p class="spk-selfnote">${I18N.t('spkSelfNote')}</p>
      <div class="spk-self-actions">
        <button class="btn btn-line" id="spkRecBtn">${I18N.t('spkRecord')}</button>
        <button class="btn btn-line" id="spkPlayBtn" disabled>${I18N.t('spkPlayMine')}</button>
      </div>
      <div class="spk-self-rate">
        <button class="tf-btn" data-self="45">${I18N.t('spkSelfNotYet')}</button>
        <button class="tf-btn" data-self="70">${I18N.t('spkSelfGetting')}</button>
        <button class="tf-btn" data-self="90">${I18N.t('spkSelfConfident')}</button>
      </div>`;
  }

  async function toggleRecord(){
    if (!canRecord){ showError('spkErrMic'); return; }
    if (mediaRecorder && mediaRecorder.state === 'recording'){
      mediaRecorder.stop();
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio:true });
      recordChunks = [];
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = e => { if (e.data.size) recordChunks.push(e.data); };
      mediaRecorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        releaseRecording();
        recordedUrl = URL.createObjectURL(new Blob(recordChunks, { type: mediaRecorder.mimeType }));
        const play = document.getElementById('spkPlayBtn');
        if (play) play.disabled = false;
        const btn = document.getElementById('spkRecBtn');
        if (btn){ btn.textContent = I18N.t('spkRecordAgain'); btn.classList.remove('recording'); }
        setMicState('idle');
      };
      mediaRecorder.start();
      const btn = document.getElementById('spkRecBtn');
      if (btn){ btn.textContent = I18N.t('spkStopRecord'); btn.classList.add('recording'); }
      setMicState('listening');
      setTimeout(() => { if (mediaRecorder && mediaRecorder.state === 'recording') mediaRecorder.stop(); }, 8000);
    } catch(e){
      showError('spkErrMic');
    }
  }

  function releaseRecording(){
    if (recordedUrl){ URL.revokeObjectURL(recordedUrl); recordedUrl = null; }
  }

  function playMine(){
    if (!recordedUrl) return;
    new Audio(recordedUrl).play().catch(() => {});
  }

  function selfRate(value){
    scores[idx] = Number(value);
    document.getElementById('spkFeedback').innerHTML =
      `<div class="feedback-strip correct">${ICN.check}<div>${I18N.t('spkSelfRecorded')}</div></div>`;
    document.getElementById('spkNextBtn').disabled = false;
  }

  /* -------------------------------------------------------------- results */

  function finish(){
    stopAll();
    const done = scores.filter(s => typeof s === 'number');
    const avg = done.length ? Math.round(done.reduce((a, b) => a + b, 0) / done.length) : 0;

    document.getElementById('spkTest').style.display = 'none';
    document.getElementById('spkDone').style.display = 'block';
    document.getElementById('spkRing').style.setProperty('--pct', avg);
    document.getElementById('spkRingPct').textContent = avg + '%';
    document.getElementById('spkDoneTitle').textContent = I18N.t(band(avg).key);
    document.getElementById('spkDoneSub').textContent =
      supported ? I18N.t('spkDoneSub') : I18N.t('spkDoneSubSelf');

    document.getElementById('spkBreakdown').innerHTML = items.map((it, i) => {
      const sc = scores[i];
      const b = sc === undefined ? null : band(sc);
      return `<div class="spk-row">
        <div class="spk-row-main">
          <div class="spk-row-word">${it.target}</div>
          <div class="dwr-th">${it.th || ''}</div>
        </div>
        <button class="mini-play" data-spkspeak="${String(it.target).replace(/"/g,'&quot;')}" aria-label="Play">${ICN.play}</button>
        <span class="spk-row-score ${b ? b.cls : ''}">${sc === undefined ? '—' : sc + '%'}</span>
      </div>`;
    }).join('');

    Progress.recordQuizResult('speaking', avg);
    App.refreshHome();
  }

  function dots(id, total, current){
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = Array.from({ length: total }).map((_, i) =>
      `<i class="${i < current ? 'done' : ''} ${i === current ? 'current' : ''}"></i>`).join('');
  }

  /* ---------------------------------------------------------------- wiring */

  function bind(){
    document.getElementById('spkModeChips').addEventListener('click', e => {
      const c = e.target.closest('[data-spkmode]'); if (!c) return;
      mode = c.dataset.spkmode; renderSetup();
    });
    document.getElementById('spkLevelChips').addEventListener('click', e => {
      const c = e.target.closest('.chip'); if (!c) return;
      level = c.dataset.level; renderSetup();
    });
    document.getElementById('spkStartBtn').addEventListener('click', start);
    document.getElementById('spkMic').addEventListener('click', listen);
    document.getElementById('spkNextBtn').addEventListener('click', () => { idx++; renderItem(); });
    document.getElementById('spkRestart').addEventListener('click', open);

    // model pronunciation
    document.getElementById('spkModel').addEventListener('click', () => {
      const btn = document.getElementById('spkModel');
      btn.classList.add('playing');
      Speech.speak(items[idx].target, {
        rate: App.speechRate(),
        onend(){ btn.classList.remove('playing'); }
      });
    });

    // self-check controls + results playback (delegated)
    document.getElementById('screen-speaking').addEventListener('click', e => {
      if (e.target.closest('#spkRecBtn')){ toggleRecord(); return; }
      if (e.target.closest('#spkPlayBtn')){ playMine(); return; }
      const self = e.target.closest('[data-self]');
      if (self){ selfRate(self.dataset.self); return; }
      const sp = e.target.closest('[data-spkspeak]');
      if (sp){ Speech.speak(sp.dataset.spkspeak, { rate: App.speechRate() }); }
    });
  }

  return {
    init: bind,
    open,
    supported,
    stopAll,
    /* Pure function, exposed so the scoring model can be tested directly
       without needing a live microphone. */
    scoreAttempt,
    band,
    rerender(){
      if (document.getElementById('spkSetup').style.display !== 'none') renderSetup();
    },
  };
})();
