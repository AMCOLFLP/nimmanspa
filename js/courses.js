/* =========================================================================
   COURSES — two separate courses sharing one app.

   Every module reads the plain names (VOCAB, PHRASES, MC_BANK …). Those are
   declared here as mutable bindings and pointed at the active course, so
   activating a course instantly re-aims the entire app — flashcards, quizzes,
   the Daily Five, the speaking test — with no changes in the modules
   themselves.

   Progress is stored per course, so a therapist studying spa English and a
   steward studying cruise English never mix scores, and one person can do
   both without one wiping the other.
   ========================================================================= */

/* ---- live content bindings (assigned by activate) ---- */
let VOCAB = [];
let VOCAB_CATEGORIES = [];
let PHRASES = [];
let SAYTHIS = [];
let PRON = [];
let MC_BANK = [];
let TRUE_FALSE_BANK = [];
let ERROR_BANK = [];
let LISTEN_BANK = [];
let BUILDER_BANK = [];
let FILL_DIALOGUES = [];

const Courses = (() => {
  const KEY = 'spa_course';

  const REGISTRY = [
    {
      id: 'spa',
      nameKey: 'courseSpaName',
      taglineKey: 'courseSpaTagline',
      descKey: 'courseSpaDesc',
      theme: null,                       // spa uses the default brass palette
      icon: 'leaf',
      domainKey: 'domainSpa',
      domainShortKey: 'domainSpaShort',
      tipKey: 'tipSpa',
      content: {
        vocab: () => SPA_VOCAB,
        vocabCategories: () => SPA_VOCAB_CATEGORIES,
        phrases: () => SPA_PHRASES,
        sayThis: () => SPA_SAYTHIS,
        pron: () => SPA_PRON,
        mc: () => SPA_MC_BANK,
        tf: () => SPA_TRUE_FALSE_BANK,
        err: () => SPA_ERROR_BANK,
        listen: () => SPA_LISTEN_BANK,
        builder: () => SPA_BUILDER_BANK,
        fill: () => SPA_FILL_DIALOGUES,
      },
      defaultPhraseCat: 'everyday',
    },
    {
      id: 'cruise',
      nameKey: 'courseCruiseName',
      taglineKey: 'courseCruiseTagline',
      descKey: 'courseCruiseDesc',
      theme: 'course-cruise',            // marine palette
      icon: 'anchor',
      domainKey: 'domainCruise',
      domainShortKey: 'domainCruiseShort',
      tipKey: 'tipCruise',
      content: {
        vocab: () => CRUISE_VOCAB,
        vocabCategories: () => CRUISE_VOCAB_CATEGORIES,
        phrases: () => CRUISE_PHRASES,
        sayThis: () => CRUISE_SAYTHIS,
        pron: () => CRUISE_PRON,
        mc: () => CRUISE_MC_BANK,
        tf: () => CRUISE_TRUE_FALSE_BANK,
        err: () => CRUISE_ERROR_BANK,
        listen: () => CRUISE_LISTEN_BANK,
        builder: () => CRUISE_BUILDER_BANK,
        fill: () => CRUISE_FILL_DIALOGUES,
      },
      defaultPhraseCat: 'everyday',
    },
  ];

  let active = null;

  function saved(){
    const id = localStorage.getItem(KEY);
    return REGISTRY.some(c => c.id === id) ? id : null;
  }

  function get(id){ return REGISTRY.find(c => c.id === id) || null; }

  /* Points the shared bindings at one course and themes the app. */
  function activate(id, opts){
    const course = get(id) || REGISTRY[0];
    active = course;
    const c = course.content;

    VOCAB            = c.vocab();
    VOCAB_CATEGORIES = c.vocabCategories();
    PHRASES          = c.phrases();
    SAYTHIS          = c.sayThis();
    PRON             = c.pron();
    MC_BANK          = c.mc();
    TRUE_FALSE_BANK  = c.tf();
    ERROR_BANK       = c.err();
    LISTEN_BANK      = c.listen();
    BUILDER_BANK     = c.builder();
    FILL_DIALOGUES   = c.fill();

    if (!opts || opts.remember !== false) localStorage.setItem(KEY, course.id);

    // Re-skin: each course swaps the accent palette via one root class.
    const root = document.documentElement;
    REGISTRY.forEach(x => { if (x.theme) root.classList.remove(x.theme); });
    if (course.theme) root.classList.add(course.theme);

    return course;
  }

  /* Counts shown on the chooser cards — computed, never hard-coded. */
  function stats(id){
    const course = get(id);
    if (!course) return null;
    const c = course.content;
    const phrases = c.phrases().reduce((s, cat) => s + cat.items.length, 0);
    return {
      words: c.vocab().length,
      wordCats: c.vocabCategories().length,
      phrases,
      phraseCats: c.phrases().length,
      sayThis: c.sayThis().length,
      mc: c.mc().length,
      pron: c.pron().length,
    };
  }

  return {
    get all(){ return REGISTRY; },
    get active(){ return active; },
    get currentId(){ return active ? active.id : (saved() || 'spa'); },
    get defaultPhraseCat(){ return active ? active.defaultPhraseCat : 'everyday'; },
    saved, get, activate, stats,
    name(id){ const c = get(id); return c ? I18N.t(c.nameKey) : ''; },
    tagline(id){ const c = get(id); return c ? I18N.t(c.taglineKey) : ''; },
  };
})();

/* Small course marks used on the chooser and the home bar. */
const COURSE_ICONS = {
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C12 2 5 10.5 5 15a7 7 0 0 0 14 0C19 10.5 12 2 12 2Z"/></svg>',
  anchor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.4"/><path d="M12 7.4V21"/><path d="M6 12H18"/><path d="M4.5 15.5a7.5 7.5 0 0 0 15 0"/></svg>',
};
