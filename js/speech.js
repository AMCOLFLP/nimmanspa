/* =========================================================================
   SPEECH — pronunciation playback via the Web Speech API.

   Goal: a neutral, clearly-female English voice.

   The browser owns the voice list and it differs on every OS/browser combo,
   so naming a single voice will not work. Instead every installed voice is
   scored and the best match wins:

     1. Known female English voices are named explicitly (strongest signal).
     2. Known male voices are excluded from automatic selection.
     3. Neutral general accents (en-US, then en-GB) beat strongly regional
        ones (en-AU / en-IN / en-ZA / en-IE / en-NG).
     4. "Natural"/"Neural"/"Online" voices sound smoother, so they get a bump.

   The learner can override the pick in Settings, because no heuristic beats
   hearing it for yourself.
   ========================================================================= */

const Speech = (() => {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const PREF_KEY = 'spa_voice_uri';

  let voices = [];
  let chosen = null;
  let readyCallbacks = [];

  /* Female English voices shipped by the major platforms, matched
     case-insensitively against the voice name. */
  const FEMALE_NAMES = [
    // Apple (macOS / iOS)
    'samantha','ava','allison','susan','zoe','nicky','karen','moira',
    'tessa','fiona','serena','kate','stephanie','joelle',
    // Microsoft (Windows / Edge)
    'aria','jenny','michelle','ana','zira','hazel','susanna','linda',
    'emma','sonia','libby','maisie','natasha','clara',
    // Google (Chrome / Android)
    'google us english','google uk english female',
    // Android / generic TTS naming
    'female','woman','en-us-x-sfg','en-us-x-tpf','en-gb-x-rjs',
  ];

  /* Never auto-select these (male voices and Apple's novelty voices). */
  const MALE_NAMES = [
    'daniel','alex','fred','tom','aaron','arthur','gordon','oliver',
    'rishi','david','mark','guy','ryan','william','james','brian',
    'eric','christopher','roger','steffan','thomas','george','albert',
    'bad news','bahh','bells','boing','bubbles','cellos','jester',
    'organ','superstar','trinoids','whisper','wobble','zarvox',
    'google uk english male','male',
  ];

  const NEUTRAL_LANGS  = { 'en-us': 60, 'en-gb': 42 };
  const REGIONAL_LANGS = { 'en-au': 12, 'en-ie': 10, 'en-nz': 8, 'en-in': 4, 'en-za': 4, 'en-ng': 2 };

  /* Whole-word matching matters here. A plain substring test wrongly rejects
     "Google UK English Female" (contains "male") and "English (America)"
     (contains "eric"), which are both perfectly good female/neutral voices. */
  const wordRe = {};
  function hasWord(haystack, needle){
    if (!wordRe[needle]){
      const esc = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      wordRe[needle] = new RegExp('(?:^|[^a-z])' + esc + '(?:[^a-z]|$)', 'i');
    }
    return wordRe[needle].test(haystack);
  }

  function scoreVoice(v){
    const name = (v.name || '').toLowerCase();
    const lang = (v.lang || '').toLowerCase().replace('_', '-');

    if (!lang.startsWith('en')) return -1;                        // English only
    if (MALE_NAMES.some(m => hasWord(name, m))) return -1;        // never auto-pick

    let score = 0;
    if (FEMALE_NAMES.some(f => hasWord(name, f))) score += 100;
    if (NEUTRAL_LANGS[lang] !== undefined) score += NEUTRAL_LANGS[lang];
    else if (REGIONAL_LANGS[lang] !== undefined) score += REGIONAL_LANGS[lang];
    else score += 20;

    if (/natural|neural|online|premium|enhanced/.test(name)) score += 18;
    if (v.localService) score += 6;                           // no network delay
    if (/compact|eloquence|espeak/.test(name)) score -= 25;   // robotic fallbacks

    return score;
  }

  function refreshVoices(){
    if (!supported) return;
    voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return;

    // Honour an explicit user choice while that voice is still installed.
    const savedUri = localStorage.getItem(PREF_KEY);
    if (savedUri){
      const saved = voices.find(v => v.voiceURI === savedUri);
      if (saved){ chosen = saved; flushReady(); return; }
    }

    const ranked = voices
      .map(v => ({ v, s: scoreVoice(v) }))
      .filter(x => x.s >= 0)
      .sort((a, b) => b.s - a.s);

    // Fall back to any English voice. If the device has none at all we leave
    // `chosen` null and only set utter.lang — reading English aloud with, say,
    // a Japanese voice is worse than letting the engine decide.
    chosen = ranked.length
      ? ranked[0].v
      : (voices.find(v => /^en/i.test((v.lang || '').replace('_', '-'))) || null);
    flushReady();
  }

  function flushReady(){
    const cbs = readyCallbacks;
    readyCallbacks = [];
    cbs.forEach(cb => { try { cb(); } catch(e){} });
  }

  /* The voice list arrives asynchronously in most browsers. */
  if (supported){
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
    // Safari sometimes never fires the event; poll briefly as a safety net.
    let tries = 0;
    const poll = setInterval(() => {
      if (chosen || tries++ > 12){ clearInterval(poll); return; }
      refreshVoices();
    }, 250);
  }

  function stop(){
    if (supported) window.speechSynthesis.cancel();
  }

  function speak(text, opts){
    opts = opts || {};
    const onstart = opts.onstart, onend = opts.onend;
    const rate = opts.rate !== undefined ? opts.rate : 0.88;
    const pitch = opts.pitch !== undefined ? opts.pitch : 1.06;
    stop();

    if (!supported){
      // Visual-only fallback so play buttons still give feedback.
      if (onstart) onstart();
      window.setTimeout(() => onend && onend(), Math.max(900, String(text).length * 55));
      return;
    }

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = rate;    // slower than default: this is a learning app
    utter.pitch = pitch;  // nudged up slightly to keep the voice clearly female
    utter.volume = 1;
    if (chosen){
      utter.voice = chosen;
      utter.lang = chosen.lang;
    } else {
      utter.lang = 'en-US';
    }
    utter.onend = () => onend && onend();
    utter.onerror = () => onend && onend();
    window.speechSynthesis.speak(utter);
    if (onstart) onstart();  // some engines never fire onstart
  }

  /* ---- settings surface ---- */
  function englishVoices(){
    return voices
      .filter(v => /^en/i.test((v.lang || '').replace('_', '-')))
      .map(v => ({ uri:v.voiceURI, name:v.name, lang:v.lang, score:scoreVoice(v) }))
      .sort((a, b) => b.score - a.score);
  }

  function setVoice(uri){
    if (!uri) localStorage.removeItem(PREF_KEY);
    else localStorage.setItem(PREF_KEY, uri);
    chosen = null;
    refreshVoices();
    return chosen;
  }

  return {
    supported, speak, stop, englishVoices, setVoice,
    get currentVoice(){ return chosen; },
    get currentVoiceName(){ return chosen ? chosen.name : null; },
    onReady(cb){ if (chosen) cb(); else readyCallbacks.push(cb); },
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

/* Feedback strip markup shared by every activity */
function feedbackStrip(isCorrect, html){
  return `<div class="feedback-strip ${isCorrect ? 'correct' : 'incorrect'}">
    ${isCorrect ? ICN.check : ICN.cross}<div>${html}</div></div>`;
}
