/* =========================================================================
   BODY MAP — a labelled diagram of the body for naming parts in English.

   The figure is inline SVG rather than an image: it scales to any screen
   without a second asset, recolours with the course theme, works offline,
   and each region can be a real focusable control instead of an image-map
   hotspot.

   It is a stylised service diagram, not a clinical illustration. Regions are
   the areas a therapist actually refers to during a treatment, and each one
   is bound to an existing vocabulary entry by its English word — so nothing
   is duplicated here, and a region only appears if the active course really
   has that word. Courses with no body vocabulary (cruise, salon) therefore
   get no diagram and no menu entry at all.
   ========================================================================= */

const Anatomy = (() => {
  const W = 220;   // front/back canvas width; mirrored regions reflect across it

  /* t: shape type. mirror: draw the same region again on the other side, so
     "shoulder" means both shoulders. Order matters — later shapes sit on top
     and take the tap, so small landmarks come after the large areas. */
  const FRONT = { w:220, h:460, regions:[
    { word:'Face',       shapes:[{t:'ellipse',cx:110,cy:42,rx:24,ry:29}] },
    { word:'Neck',       shapes:[{t:'rect',x:100,y:64,w:20,h:20,rx:9}] },
    { word:'Shoulder',   mirror:true, shapes:[{t:'ellipse',cx:76,cy:101,rx:19,ry:13}] },
    { word:'Chest',      shapes:[{t:'rect',x:80,y:96,w:60,h:48,rx:16}] },
    { word:'Collarbone', shapes:[{t:'rect',x:86,y:82,w:48,h:9,rx:4}] },
    { word:'Abdomen',    shapes:[{t:'rect',x:84,y:148,w:52,h:46,rx:14}] },
    { word:'Waist',      shapes:[{t:'rect',x:88,y:198,w:44,h:16,rx:8}] },
    { word:'Hip',        shapes:[{t:'rect',x:80,y:218,w:60,h:32,rx:14}] },
    { word:'Upper arm',  mirror:true, shapes:[{t:'rect',x:54,y:106,w:21,h:62,rx:10}] },
    { word:'Elbow',      mirror:true, shapes:[{t:'ellipse',cx:64,cy:174,rx:11,ry:9}] },
    { word:'Forearm',    mirror:true, shapes:[{t:'rect',x:54,y:182,w:21,h:56,rx:10}] },
    { word:'Wrist',      mirror:true, shapes:[{t:'rect',x:56,y:241,w:17,h:10,rx:5}] },
    { word:'Hand',       mirror:true, shapes:[{t:'ellipse',cx:64,cy:265,rx:12,ry:15}] },
    { word:'Thigh',      mirror:true, shapes:[{t:'rect',x:84,y:252,w:24,h:70,rx:12}] },
    { word:'Knee',       mirror:true, shapes:[{t:'ellipse',cx:96,cy:330,rx:13,ry:11}] },
    { word:'Shin',       mirror:true, shapes:[{t:'rect',x:86,y:342,w:20,h:62,rx:10}] },
    { word:'Ankle',      mirror:true, shapes:[{t:'rect',x:88,y:406,w:16,h:11,rx:5}] },
    { word:'Foot',       mirror:true, shapes:[{t:'ellipse',cx:96,cy:426,rx:15,ry:11}] },
  ]};

  const BACK = { w:220, h:460, regions:[
    { word:'Scalp',         shapes:[{t:'ellipse',cx:110,cy:42,rx:24,ry:29}] },
    { word:'Nape',          shapes:[{t:'rect',x:100,y:64,w:20,h:20,rx:9}] },
    { word:'Shoulder',      mirror:true, shapes:[{t:'ellipse',cx:76,cy:101,rx:19,ry:13}] },
    { word:'Upper back',    shapes:[{t:'rect',x:80,y:100,w:60,h:50,rx:14}] },
    { word:'Trapezius',     shapes:[{t:'rect',x:78,y:84,w:64,h:26,rx:12}] },
    { word:'Shoulder blade',mirror:true, shapes:[{t:'ellipse',cx:93,cy:126,rx:13,ry:15}] },
    { word:'Back',          shapes:[{t:'rect',x:84,y:152,w:52,h:30,rx:10}] },
    { word:'Lower back',    shapes:[{t:'rect',x:84,y:184,w:52,h:34,rx:12}] },
    { word:'Spine',         shapes:[{t:'rect',x:106,y:90,w:8,h:128,rx:4}] },
    { word:'Glutes',        mirror:true, shapes:[{t:'ellipse',cx:97,cy:236,rx:19,ry:18}] },
    { word:'Upper arm',     mirror:true, shapes:[{t:'rect',x:54,y:106,w:21,h:62,rx:10}] },
    { word:'Forearm',       mirror:true, shapes:[{t:'rect',x:54,y:182,w:21,h:56,rx:10}] },
    { word:'Hand',          mirror:true, shapes:[{t:'ellipse',cx:64,cy:265,rx:12,ry:15}] },
    { word:'Hamstring',     mirror:true, shapes:[{t:'rect',x:84,y:256,w:24,h:66,rx:12}] },
    { word:'Calf',          mirror:true, shapes:[{t:'rect',x:86,y:340,w:20,h:62,rx:10}] },
    { word:'Heel',          mirror:true, shapes:[{t:'ellipse',cx:96,cy:416,rx:10,ry:9}] },
    { word:'Sole',          mirror:true, shapes:[{t:'ellipse',cx:96,cy:432,rx:14,ry:8}] },
  ]};

  /* Proportioned to sit inside the head oval below (cx110 cy124 rx62 ry82).
     `decor` adds the eyes, nose and mouth: not vocabulary, just enough of a
     face for the zones to be recognisable as a face. */
  const FACE = { w:220, h:280,
    head:{ cx:110, cy:124, rx:62, ry:82 },
    decor:[
      'M96 146 Q90 141 84 146', 'M124 146 Q130 141 136 146',      // eye creases
      'M110 152 L110 172 Q110 178 104 178',                       // nose
      'M97 190 Q110 197 123 190',                                 // mouth
    ],
    regions:[
      { word:'Scalp',       shapes:[{t:'ellipse',cx:110,cy:74,rx:46,ry:26}] },
      { word:'Forehead',    shapes:[{t:'ellipse',cx:110,cy:106,rx:42,ry:20}] },
      { word:'Temple',      mirror:true, shapes:[{t:'ellipse',cx:64,cy:112,rx:12,ry:16}] },
      { word:'Eyebrow',     mirror:true, shapes:[{t:'rect',x:76,y:128,w:28,h:8,rx:4}] },
      { word:'Eyelid',      mirror:true, shapes:[{t:'ellipse',cx:90,cy:146,rx:14,ry:9}] },
      { word:'Sinuses',     mirror:true, shapes:[{t:'ellipse',cx:97,cy:164,rx:8,ry:10}] },
      { word:'Cheek',       mirror:true, shapes:[{t:'ellipse',cx:78,cy:172,rx:17,ry:15}] },
      { word:'Jawline',     shapes:[{t:'path',d:'M58 182 Q110 224 162 182'}] },
      { word:'Chin',        shapes:[{t:'ellipse',cx:110,cy:196,rx:16,ry:12}] },
      { word:'Neck',        shapes:[{t:'rect',x:92,y:208,w:36,h:26,rx:10}] },
      { word:'Décolletage', shapes:[{t:'rect',x:56,y:232,w:108,h:24,rx:12}] },
    ]};

  const VIEWS = [
    { id:'front', key:'anatomyFront', data:FRONT },
    { id:'back',  key:'anatomyBack',  data:BACK  },
    { id:'face',  key:'anatomyFace',  data:FACE  },
  ];

  let view = 'front';
  let selected = null;   // the vocabulary word currently shown

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  function bodyWords(){
    return (typeof VOCAB === 'undefined' ? [] : VOCAB).filter(v => v.cat === 'body');
  }
  function find(word){
    return bodyWords().find(v => v.word.toLowerCase() === String(word).toLowerCase()) || null;
  }
  /* Data-driven, with a floor: the diagram is only worth offering where the
     course teaches enough of the body to fill it. Salon, for instance, has
     seven body words (hands, feet, scalp, skin) — useful vocabulary, but it
     would leave a full-body figure almost entirely unlabelled. */
  const MIN_REGIONS = 8;
  function available(){
    const known = new Set(bodyWords().map(v => v.word.toLowerCase()));
    const placedWords = new Set(
      [FRONT, BACK, FACE].flatMap(d => d.regions.map(r => r.word.toLowerCase()))
        .filter(w => known.has(w)));
    return placedWords.size >= MIN_REGIONS;
  }

  function current(){ return (VIEWS.find(v => v.id === view) || VIEWS[0]).data; }
  function placed(){ return current().regions.filter(r => find(r.word)); }

  /* ------------------------------------------------------------------ svg */

  function shapeMarkup(s, mirrored){
    if (s.t === 'rect'){
      const x = mirrored ? W - s.x - s.w : s.x;
      return `<rect x="${x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.rx || 6}"/>`;
    }
    if (s.t === 'ellipse'){
      const cx = mirrored ? W - s.cx : s.cx;
      return `<ellipse cx="${cx}" cy="${s.cy}" rx="${s.rx}" ry="${s.ry}"/>`;
    }
    return `<path d="${s.d}" class="an-stroke"/>`;
  }

  function svg(){
    const data = current();

    /* The silhouette is drawn from every region in the view, whether or not
       the course teaches that word, so the figure always reads as a whole
       body. Only the words the course does have become interactive on top. */
    const base = data.regions.map(r =>
      r.shapes.map(s => shapeMarkup(s, false)).join('') +
      (r.mirror ? r.shapes.map(s => shapeMarkup(s, true)).join('') : '')
    ).join('');

    const parts = placed().map(r => {
      const entry = find(r.word);
      const label = `${entry.word}${entry.th ? ' · ' + entry.th : ''}`;
      const shapes = r.shapes.map(s => shapeMarkup(s, false)).join('') +
        (r.mirror ? r.shapes.map(s => shapeMarkup(s, true)).join('') : '');
      return `<g class="an-region${selected === entry.word ? ' selected' : ''}"
                 data-an-word="${esc(entry.word)}" role="button" tabindex="0"
                 aria-pressed="${selected === entry.word}" aria-label="${esc(label)}">
                <title>${esc(label)}</title>${shapes}
              </g>`;
    }).join('');

    return `<svg class="an-svg" viewBox="0 0 ${data.w} ${data.h}" role="group"
                 aria-label="${esc(I18N.t('anatomyHeading'))}" preserveAspectRatio="xMidYMid meet">
      ${data.head ? `<ellipse class="an-base" cx="${data.head.cx}" cy="${data.head.cy}" rx="${data.head.rx}" ry="${data.head.ry}"/>` : ''}
      <g class="an-base-figure" aria-hidden="true">${base}</g>
      ${parts}
      ${data.decor ? `<g class="an-decor" aria-hidden="true">${
        data.decor.map(d => `<path d="${d}"/>`).join('')}</g>` : ''}
    </svg>`;
  }

  /* --------------------------------------------------------------- detail */

  function detail(){
    if (!selected) return `<p class="an-hint">${esc(I18N.t('anatomyPrompt'))}</p>`;
    const v = find(selected);
    if (!v) return '';
    const th = I18N.current === 'th';
    return `<div class="an-detail">
      <div class="an-detail-top">
        <div>
          <div class="an-word">${esc(v.word)}</div>
          ${v.phon ? `<div class="an-phon">${esc(v.phon)}</div>` : ''}
          ${v.th ? `<div class="an-th">${esc(v.th)}</div>` : ''}
        </div>
        <button class="mini-play" data-an-speak="${esc(v.word)}" aria-label="${esc(v.word)}">${ICN.play}</button>
      </div>
      ${levelBadge(v.level, { compact:true })}
      ${v.def || v.short ? `<p class="an-def">${esc(v.def || v.short)}</p>` : ''}
      ${v.example ? `<p class="an-example">&ldquo;${esc(v.example)}&rdquo;</p>` : ''}
      ${v.exampleTh && th ? `<p class="gloss">${esc(v.exampleTh)}</p>` : ''}
    </div>`;
  }

  /* Body words with no place on any diagram — "tendon", "pressure point" and
     the like are things you talk about rather than points you can tap. */
  function related(){
    const onDiagram = new Set(
      [FRONT, BACK, FACE].flatMap(d => d.regions.map(r => r.word.toLowerCase())));
    const rest = bodyWords().filter(v => !onDiagram.has(v.word.toLowerCase()));
    if (!rest.length) return '';
    return `<p class="an-related-title">${esc(I18N.t('anatomyRelated'))}</p>
      <div class="chip-scroll an-related">${rest.map(v =>
        `<button class="chip${selected === v.word ? ' active' : ''}" data-an-word="${esc(v.word)}">${esc(v.word)}</button>`
      ).join('')}</div>`;
  }

  /* --------------------------------------------------------------- render */

  function render(){
    const stage = document.getElementById('anatomyStage');
    if (!stage) return;
    if (!available()){
      stage.innerHTML = `<p class="an-hint">${esc(I18N.t('anatomyNone'))}</p>`;
      document.getElementById('anatomyViewChips').innerHTML = '';
      document.getElementById('anatomyDetail').innerHTML = '';
      document.getElementById('anatomyRelated').innerHTML = '';
      return;
    }
    if (selected && !find(selected)) selected = null;

    document.getElementById('anatomyViewChips').innerHTML = VIEWS.map(v =>
      `<button class="chip${v.id === view ? ' active' : ''}" data-an-view="${v.id}">${esc(I18N.t(v.key))}</button>`
    ).join('');
    stage.innerHTML = svg();
    document.getElementById('anatomyDetail').innerHTML = detail();
    document.getElementById('anatomyRelated').innerHTML = related();
  }

  function select(word){
    selected = (selected === word) ? null : word;
    render();
    const d = document.querySelector('#anatomyDetail .an-detail');
    if (d) d.scrollIntoView({ block:'nearest', behavior:'smooth' });
  }

  /* --------------------------------------------------------------- wiring */

  function init(){
    const screen = document.getElementById('screen-anatomy');
    if (!screen) return;

    screen.addEventListener('click', e => {
      const speak = e.target.closest('[data-an-speak]');
      if (speak){
        speak.classList.add('playing');
        Speech.speak(speak.dataset.anSpeak, {
          rate: App.speechRate(),
          onend(){ speak.classList.remove('playing'); },
        });
        return;
      }
      const chip = e.target.closest('[data-an-view]');
      if (chip){ view = chip.dataset.anView; render(); return; }
      const region = e.target.closest('[data-an-word]');
      if (region) select(region.dataset.anWord);
    });

    // SVG groups are not buttons, so Enter/Space have to be wired by hand.
    screen.addEventListener('keydown', e => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const region = e.target.closest('.an-region');
      if (!region) return;
      e.preventDefault();
      select(region.dataset.anWord);
    });
  }

  return { init, render, available, open(){ Nav.go('anatomy'); } };
})();
