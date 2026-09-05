/* =========================================================================
   SPEECH — pronunciation playback, locked to a neutral US female voice.

   iOS (both Safari AND Chrome, which is WebKit underneath) needs special
   handling, and getting this wrong is why the voice used to drift:

     1. getVoices() returns [] until the synthesis engine wakes up, which on
        iOS only happens after a real user gesture. Resolving the voice once
        at page load therefore left us with nothing, and iOS then read the
        text with the system default — often male, or an English voice
        coloured by the phone's UI language.
     2. Voice objects go stale. A VoiceObject captured early can be silently
        ignored later, so the voice must be re-resolved from a fresh
        getVoices() immediately before every utterance.
     3. cancel() followed synchronously by speak() drops the utterance or
        resets it to the default voice. The new utterance has to be queued
        on a later tick.
     4. onvoiceschanged frequently never fires, so polling is required.

   Selection is a hard preference order rather than a guess:
     en-US female  >  en-GB female  >  any en-US  >  other English
   Male and novelty voices are excluded from automatic selection entirely.
   ========================================================================= */

const Speech = (() => {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const PREF_KEY = 'spa_voice_uri';

  const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
  const isIOS = /iP(hone|ad|od)/.test(ua) ||
    (typeof navigator !== 'undefined' && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isAppleWebKit = isIOS || (/Safari/.test(ua) && !/Chrome|Chromium|Android/.test(ua));

  let voices = [];
  let chosen = null;          // last resolved voice (for display)
  let primed = false;
  let readyCallbacks = [];

  /* ---- name tables ------------------------------------------------------ */

  /* Female English voices across Apple, Microsoft, Google and Android. */
  const FEMALE_NAMES = [
    // Apple / iOS — these are the ones that matter most for iPhone users
    'samantha','ava','allison','susan','zoe','nicky','joelle','karen','moira',
    'tessa','fiona','serena','kate','stephanie','catherine','martha','shelley',
    'sandy','flo','grandma',
    // Microsoft
    'aria','jenny','michelle','ana','zira','hazel','susanna','linda','emma',
    'sonia','libby','maisie','natasha','clara','amber','ashley','cora','elizabeth',
    'monica','jane','nancy','sara',
    // Google
    'google us english','google uk english female',
    // Android / generic
    'female','woman','en-us-x-sfg','en-us-x-tpf','en-us-x-iob','en-gb-x-rjs',
  ];

  /* Never auto-selected: male voices plus Apple's joke/novelty voices. */
  const MALE_NAMES = [
    // Apple / iOS
    'alex','fred','daniel','tom','aaron','arthur','gordon','oliver','rishi',
    'nathan','eddy','reed','rocko','grandpa','junior','ralph','albert',
    'bad news','good news','bahh','bells','boing','bubbles','cellos','jester',
    'organ','superstar','trinoids','whisper','wobble','zarvox','deranged','hysterical',
    // Microsoft
    'david','mark','guy','ryan','william','james','brian','eric','christopher',
    'roger','steffan','thomas','george','andrew','brandon','jason','tony',
    // Google
    'google uk english male','male',
  ];

  /* Real voices, but character voices that read oddly for language learning. */
  const NOVELTY_NAMES = ['shelley','sandy','flo','grandma','superstar','jester','rocko','reed','eddy'];

  const wordCache = {};
  /* Whole-word matching: a plain substring test wrongly rejects
     "Google UK English Female" (contains "male") and "English (America)"
     (contains "eric"). */
  function hasWord(haystack, needle){
    if (!wordCache[needle]){
      const esc = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      wordCache[needle] = new RegExp('(?:^|[^a-z])' + esc + '(?:[^a-z]|$)', 'i');
    }
    return wordCache[needle].test(haystack);
  }

  function normLang(v){ return ((v && v.lang) || '').toLowerCase().replace('_', '-'); }

  /* Higher is better. Negative means "never pick automatically". */
  function scoreVoice(v){
    const name = ((v && v.name) || '').toLowerCase();
    const lang = normLang(v);

    if (!lang.startsWith('en')) return -1;                     // English only
    if (MALE_NAMES.some(m => hasWord(name, m))) return -1;     // excluded

    let score = 0;
    const isFemale = FEMALE_NAMES.some(f => hasWord(name, f));
    if (isFemale) score += 100;

    // Accent preference — en-US wins decisively, so an American female voice
    // always outranks a British one.
    if (lang === 'en-us') score += 80;
    else if (lang === 'en-gb') score += 40;
    else if (lang === 'en-au' || lang === 'en-ie' || lang === 'en-nz') score += 12;
    else score += 2;                                           // en-IN / en-ZA / en-NG

    if (/natural|neural|online|premium|enhanced/.test(name)) score += 18;
    if (v.localService) score += 4;                            // no network delay
    if (/compact|eloquence|espeak/.test(name)) score -= 20;    // robotic fallbacks
    if (NOVELTY_NAMES.some(n => hasWord(name, n))) score -= 60; // character voices

    return score;
  }

  /* ---- resolution ------------------------------------------------------- */

  function readVoices(){
    if (!supported) return [];
    try { voices = window.speechSynthesis.getVoices() || []; }
    catch(e){ voices = []; }
    return voices;
  }

  function rank(list){
    return list
      .map(v => ({ v, s: scoreVoice(v) }))
      .filter(x => x.s >= 0)
      .sort((a, b) => b.s - a.s)
      .map(x => x.v);
  }

  /* Always resolves against a FRESH voice list, because on iOS the list
     arrives late and cached voice objects can be ignored by the engine. */
  function resolveVoice(){
    const list = readVoices();
    if (!list.length) return null;

    // An explicit user choice wins, matched by URI and then by name, since
    // iOS regenerates voiceURI values between page loads.
    const saved = localStorage.getItem(PREF_KEY);
    if (saved){
      const hit = list.find(v => v.voiceURI === saved) ||
                  list.find(v => v.name === saved);
      if (hit) return hit;
    }

    const ranked = rank(list);
    if (ranked.length) return ranked[0];

    // No acceptable voice: prefer any en-US, then any English, else nothing.
    return list.find(v => normLang(v) === 'en-us') ||
           list.find(v => normLang(v).startsWith('en')) ||
           null;
  }

  function refreshVoices(){
    const next = resolveVoice();
    if (next) chosen = next;
    if (chosen) flushReady();
    return chosen;
  }

  function flushReady(){
    if (!readyCallbacks.length) return;
    const cbs = readyCallbacks;
    readyCallbacks = [];
    cbs.forEach(cb => { try { cb(); } catch(e){} });
  }

  /* ---- engine priming (the core iOS fix) -------------------------------- */

  /* iOS keeps the synthesis engine asleep until speech is triggered inside a
     real user gesture, and getVoices() stays empty until then. We spend the
     first tap on a silent utterance so the voice list is populated and the
     engine is awake before the learner taps an actual play button. */
  function prime(){
    if (primed || !supported) return;
    primed = true;
    try {
      const warm = new SpeechSynthesisUtterance(' ');
      warm.volume = 0;
      warm.rate = 1;
      window.speechSynthesis.speak(warm);
      window.speechSynthesis.cancel();
    } catch(e){ /* priming is best-effort */ }
    refreshVoices();
    // The list can still land a moment later.
    let n = 0;
    const t = setInterval(() => {
      refreshVoices();
      if (chosen || n++ > 8) clearInterval(t);
    }, 200);
  }

  if (supported){
    refreshVoices();
    try { window.speechSynthesis.onvoiceschanged = refreshVoices; } catch(e){}

    // onvoiceschanged is unreliable on WebKit, so poll briefly as well.
    let tries = 0;
    const poll = setInterval(() => {
      refreshVoices();
      if (chosen || tries++ > 16) clearInterval(poll);
    }, 250);

    // First real interaction wakes the engine.
    ['pointerdown','touchstart','keydown','click'].forEach(ev => {
      window.addEventListener(ev, prime, { once:true, passive:true });
    });
  }

  /* ---- speaking --------------------------------------------------------- */

  function stop(){
    if (!supported) return;
    try { window.speechSynthesis.cancel(); } catch(e){}
  }

  function speak(text, opts){
    opts = opts || {};
    const onstart = opts.onstart, onend = opts.onend;
    const rate = opts.rate !== undefined ? opts.rate : 0.88;
    const pitch = opts.pitch !== undefined ? opts.pitch : 1.05;

    if (!supported){
      // Visual-only fallback so play buttons still give feedback.
      if (onstart) onstart();
      window.setTimeout(() => onend && onend(), Math.max(900, String(text).length * 55));
      return;
    }

    prime();  // no-op after the first call

    let busy = false;
    try { busy = window.speechSynthesis.speaking || window.speechSynthesis.pending; } catch(e){}
    if (busy) stop();

    const emit = () => {
      // Re-resolve every time: this is what actually keeps iOS on the
      // intended voice instead of silently reverting to the system default.
      const voice = resolveVoice() || chosen;
      if (voice) chosen = voice;

      const utter = new SpeechSynthesisUtterance(String(text));
      utter.rate = rate;      // slower than default: this is a learning app
      utter.pitch = pitch;
      utter.volume = 1;
      // Set lang before voice; WebKit reads lang when the voice is unset.
      utter.lang = voice ? (voice.lang || 'en-US') : 'en-US';
      if (voice) utter.voice = voice;
      utter.onend = () => onend && onend();
      utter.onerror = () => onend && onend();

      try { window.speechSynthesis.speak(utter); }
      catch(e){ if (onend) onend(); return; }
      if (onstart) onstart();   // some engines never fire onstart
    };

    // Never cancel and speak in the same tick: WebKit drops the utterance or
    // resets its voice. Give the queue a moment to actually clear.
    if (busy) window.setTimeout(emit, isAppleWebKit ? 130 : 50);
    else if (isAppleWebKit) window.setTimeout(emit, 0);
    else emit();
  }

  /* ---- settings surface ------------------------------------------------- */

  function englishVoices(){
    return readVoices()
      .filter(v => normLang(v).startsWith('en'))
      .map(v => ({ uri:v.voiceURI, name:v.name, lang:v.lang, score:scoreVoice(v) }))
      .sort((a, b) => b.score - a.score);
  }

  function setVoice(uri){
    if (!uri) localStorage.removeItem(PREF_KEY);
    else localStorage.setItem(PREF_KEY, uri);
    chosen = null;
    return refreshVoices();
  }

  /* True when the active voice is the US female target. */
  function isPreferredVoice(){
    if (!chosen) return false;
    const name = (chosen.name || '').toLowerCase();
    return normLang(chosen) === 'en-us' && FEMALE_NAMES.some(f => hasWord(name, f));
  }

  return {
    supported, isIOS, speak, stop, englishVoices, setVoice, prime,
    isPreferredVoice,
    get currentVoice(){ return chosen; },
    get currentVoiceName(){ return chosen ? chosen.name : null; },
    get currentVoiceLang(){ return chosen ? chosen.lang : null; },
    onReady(cb){ if (chosen) cb(); else readyCallbacks.push(cb); },
    refresh: refreshVoices,
  };
})();

/* Shared inline icons used by dynamically-built rows */
const ICN = {
  play:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6.5" y="5" width="4" height="14" rx="1"/><rect x="13.5" y="5" width="4" height="14" rx="1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.5 2.5L16 9"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5l5 5M14.5 9.5l-5 5"/></svg>',
  crossFlag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  checkFlag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5L19 7"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>',
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6.5 9H4v6h2.5L11 19V5Z"/><path d="M15.5 9.5a3.5 3.5 0 0 1 0 5"/><path d="M18 7a7 7 0 0 1 0 10"/></svg>',
};


/* =========================================================================
   DIFFICULTY LEVELS — 1 Easy (A1-A2) · 2 Intermediate (B1) · 3 Advanced (C1)
   Every vocabulary word and phrase carries a `level`, so learners can work
   through the material in order instead of meeting "petrissage" on day one.
   ========================================================================= */
const LEVEL_KEYS = { 1:'levelEasy', 2:'levelIntermediate', 3:'levelAdvanced' };

function levelLabel(n){
  return I18N.t(LEVEL_KEYS[n] || 'levelIntermediate');
}

function levelBadge(n, opts){
  const lvl = [1,2,3].includes(n) ? n : 2;
  const compact = opts && opts.compact;
  return `<span class="level-badge l${lvl}${compact ? ' compact' : ''}"><i></i>${levelLabel(lvl)}</span>`;
}

/* Filter chips shared by the vocabulary and phrase screens. */
const LEVEL_FILTERS = [
  { id:'all', key:'levelAll' },
  { id:'1',   key:'levelEasy' },
  { id:'2',   key:'levelIntermediate' },
  { id:'3',   key:'levelAdvanced' },
];

function levelChipsMarkup(active){
  return LEVEL_FILTERS.map(f =>
    `<button class="chip level-chip lv-${f.id} ${f.id === active ? 'active' : ''}" data-level="${f.id}">
      ${f.id === 'all' ? '' : '<span class="lvl-dot"></span>'}${I18N.t(f.key)}
    </button>`).join('');
}

/* Feedback strip markup shared by every activity */
function feedbackStrip(isCorrect, html){
  return `<div class="feedback-strip ${isCorrect ? 'correct' : 'incorrect'}">
    ${isCorrect ? ICN.check : ICN.cross}<div>${html}</div></div>`;
}
