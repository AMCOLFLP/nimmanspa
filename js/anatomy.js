/* =========================================================================
   BODY MAP — supplied male/female PNGs + image-calibrated HTML controls.
   No SVG silhouette or raster-to-vector conversion. Geometry is stored as
   percentages of the entire original PNG, so the image and controls resize
   together. The supplied image canvases MUST NOT be cropped.

   Word data still comes from the active course's VOCAB array. This module
   does not create a second vocabulary bank or alter assessment/progress.
   Surface locations are illustrative, not clinical anatomy/treatment advice.
   ========================================================================= */
const Anatomy = (() => {
  'use strict';
  const D = AnatomyMapData;
  const PREF_KEY = 'nimman_bodymap_preferences_v1';
  const VIEWS = ['front','back','face'];
  const MODELS = ['female','male'];
  const MIN_REGIONS = 8; // Retain the original course-availability rule.
  let model = 'female', view = 'front', selected = null, points = true;
  let initialized = false;
  const T = (en,th) => I18N.current === 'th' ? th : en;
  const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;')
    .replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  const norm = s => String(s || '').trim().toLowerCase();
  const viewName = id => I18N.t({front:'anatomyFront',back:'anatomyBack',face:'anatomyFace'}[id]);
  const modelName = id => id === 'female' ? T('Female','ผู้หญิง') : T('Male','ผู้ชาย');

  try {
    const p = JSON.parse(localStorage.getItem(PREF_KEY) || '{}');
    if (MODELS.includes(p.model)) model = p.model;
    if (VIEWS.includes(p.view)) view = p.view;
    if (typeof p.points === 'boolean') points = p.points;
  } catch (_) { /* Storage is optional; the map still works without it. */ }
  function remember(){
    try { localStorage.setItem(PREF_KEY,JSON.stringify({model,view,points})); } catch (_) {}
  }
  function bodyWords(){
    return (typeof VOCAB === 'undefined' ? [] : VOCAB).filter(v => v.cat === 'body');
  }
  function find(word){ return bodyWords().find(v => norm(v.word) === norm(word)) || null; }
  function current(){ return D.models[model][view]; }
  function placed(){ return current().regions.filter(r => find(r.word)); }
  function allPlaced(){
    return new Set(VIEWS.flatMap(v => D.models.female[v].regions.map(r => norm(r.word))));
  }
  function available(){
    const known = new Set(bodyWords().map(v => norm(v.word)));
    return [...allPlaced()].filter(w => known.has(w)).length >= MIN_REGIONS;
  }
  function isPlaced(word){ return placed().some(r => norm(r.word) === norm(word)); }

  // Native HTML buttons over the PNG: small shapes are accompanied by the
  // full-size word-list buttons, so a tiny landmark is never the only target.
  function geometry(shape){
    if (shape.type === 'ellipse'){
      return `left:${shape.cx-shape.rx}%;top:${shape.cy-shape.ry}%;width:${2*shape.rx}%;height:${2*shape.ry}%;border-radius:50%;`;
    }
    const xs=shape.points.map(p=>p[0]),ys=shape.points.map(p=>p[1]);
    const x=Math.min(...xs),y=Math.min(...ys),w=Math.max(...xs)-x,h=Math.max(...ys)-y;
    const clip=shape.points.map(p=>`${((p[0]-x)/w*100).toFixed(4)}% ${((p[1]-y)/h*100).toFixed(4)}%`).join(',');
    return `left:${x}%;top:${y}%;width:${w}%;height:${h}%;clip-path:polygon(${clip});`;
  }
  function controls(){
    document.getElementById('anatomyModelControls').innerHTML = `
      <div class="an-control-group"><span class="an-control-label">${T('Choose a model','เลือกแบบจำลอง')}</span>
        <div class="an-segment" role="group" aria-label="${T('Body model','แบบจำลองร่างกาย')}">
          ${MODELS.map(id=>`<button type="button" data-an-model="${id}" class="${id===model?'is-active':''}" aria-pressed="${id===model}">${modelName(id)}</button>`).join('')}
        </div>
      </div>
      <label class="an-points-toggle"><input type="checkbox" id="anatomyPoints" ${points?'checked':''}>${T('Show numbered points','แสดงจุดหมายเลข')}</label>`;
    document.getElementById('anatomyViewChips').innerHTML = `
      <div class="an-segment an-view-segment" role="group" aria-label="${T('Image view','มุมมองภาพ')}">
      ${VIEWS.map(id=>`<button type="button" data-an-view="${id}" class="${view===id?'is-active':''}" aria-pressed="${view===id}">${viewName(id)}</button>`).join('')}</div>`;
  }
  function mapMarkup(){
    const data=current(),rs=placed();
    const alt=T(`${modelName(model)} model, ${viewName(view).toLowerCase()} view. Interactive English vocabulary map.`,
      `แบบจำลอง${modelName(model)} มุมมอง${viewName(view)} สำหรับเรียนคำศัพท์ภาษาอังกฤษ`);
    const shapes=rs.map(r=>r.shapes.map((s,i)=>`<button type="button" class="an-hit${selected===r.word?' selected':''}"
      data-an-word="${esc(r.word)}" data-an-shape="${i}" style="${geometry(s)}" tabindex="-1"
      aria-label="${esc(r.word+' · '+(find(r.word).th||''))}" aria-pressed="${selected===r.word}"></button>`).join('')).join('');
    const pins=rs.map((r,i)=>`<button type="button" class="an-pin${selected===r.word?' selected':''}"
      data-an-word="${esc(r.word)}" style="left:${r.pin[0]}%;top:${r.pin[1]}%"
      aria-label="${esc((i+1)+'. '+r.word+' · '+(find(r.word).th||''))}" aria-pressed="${selected===r.word}"
      title="${esc(r.word+' · '+(find(r.word).th||''))}"><span aria-hidden="true">${i+1}</span></button>`).join('');
    return `<div class="an-figure-head"><span>${modelName(model)} <span aria-hidden="true">/</span> ${viewName(view)}</span>
      <span>${rs.length} ${T('terms','คำศัพท์')}</span></div>
      <div class="an-map${view==='face'?' an-map-face':''}" data-model="${model}" data-view="${view}" data-points="${points}" style="aspect-ratio:${data.width} / ${data.height}">
        <img class="an-photo" src="${esc(data.src)}" width="${data.width}" height="${data.height}"
          alt="${esc(alt)}" decoding="async" draggable="false">
        <div class="an-layer">${shapes}${pins}</div>
        <p class="an-image-error" role="status" hidden>${T('The image could not be loaded. You can still use the word list.','โหลดภาพไม่สำเร็จ ยังสามารถเรียนจากรายการคำศัพท์ได้')}</p>
      </div>
      <div class="an-figure-footer${selected?' has-selection':''}" id="anatomyFigureFooter">${footerMarkup()}</div>`;
  }
  /* Kept separate because select() updates the page in place instead of
     re-rendering the map, and on phones this footer is the pinned bar that
     keeps the chosen word readable without scrolling. */
  function footerMarkup(){
    const v=selected?find(selected):null;
    return `<span id="anatomySelectionLabel">${v?esc(v.word+' · '+(v.th||'')):T('Select a point or a word below.','เลือกจุดบนภาพหรือคำศัพท์ในรายการ')}</span>
      ${v?`<button type="button" class="mini-play" data-an-speak="${esc(v.word)}" aria-label="${esc(T('Listen to ','ฟังคำว่า ')+v.word)}">${ICN.play}</button>`:''}
      <button type="button" class="an-text-button" data-an-detail>${T('Word details','รายละเอียดคำศัพท์')} ↓</button>`;
  }
  function listMarkup(){
    const rs=placed();
    return `<h3>${T('Words in this view','คำศัพท์ในมุมมองนี้')}</h3>
      <p class="an-small">${T('The numbers match the points on the image.','หมายเลขตรงกับจุดบนภาพ')}</p>
      <div class="an-word-grid">${rs.map((r,i)=>{
        const v=find(r.word);return `<button type="button" class="an-word-button${selected===v.word?' selected':''}" data-an-word="${esc(v.word)}" aria-pressed="${selected===v.word}">
          <span class="an-word-number" aria-hidden="true">${i+1}</span><span><b lang="en">${esc(v.word)}</b><small lang="th">${esc(v.th||'')}</small></span></button>`;
      }).join('')}</div>`;
  }
  function detail(){
    const v=find(selected);
    if (!v) return `<div class="an-detail an-detail-empty"><span class="an-eyebrow">${T('Explore & learn','สำรวจและเรียนรู้')}</span>
      <h3>${T('Every point opens a word.','เลือกจุดเพื่อเปิดคำศัพท์')}</h3>
      <p>${T('Tap a numbered point, an area of the model, or a word in the list. Read the meaning and listen to the English pronunciation.','แตะจุดหมายเลข บริเวณบนแบบจำลอง หรือคำศัพท์ในรายการ เพื่ออ่านความหมายและฟังการออกเสียงภาษาอังกฤษ')}</p>
      <p class="an-small">${T('Front and back views show the whole body. Face opens a close-up.','มุมมองด้านหน้าและด้านหลังแสดงเต็มตัว มุมมองใบหน้าแสดงภาพระยะใกล้')}</p></div>`;
    const onMap=isPlaced(v.word),region=placed().find(r=>norm(r.word)===norm(v.word));
    return `<div class="an-detail">
      <span class="an-eyebrow">${onMap?T('Selected area','บริเวณที่เลือก'):T('Related vocabulary','คำศัพท์ที่เกี่ยวข้อง')}</span>
      <div class="an-detail-top"><div><h3 class="an-word" lang="en">${esc(v.word)}</h3>
        ${v.phon?`<div class="an-phon" lang="en">${esc(v.phon)}</div>`:''}
        ${v.th?`<div class="an-th" lang="th">${esc(v.th)}</div>`:''}</div>
        <button type="button" class="mini-play" data-an-speak="${esc(v.word)}" aria-label="${esc(T('Listen to ','ฟังคำว่า ')+v.word)}">${ICN.play}</button></div>
      ${typeof levelBadge==='function'?levelBadge(v.level,{compact:true}):''}
      ${v.def||v.short?`<p class="an-def" lang="en">${esc(v.def||v.short)}</p>`:''}
      ${v.example?`<div class="an-example-block"><span class="an-eyebrow">${T('Use it with a guest','ตัวอย่างการใช้กับลูกค้า')}</span>
        <p class="an-example" lang="en">“${esc(v.example)}”</p>
        ${v.exampleTh?`<p class="an-example-th" lang="th">${esc(v.exampleTh)}</p>`:''}
        <button type="button" class="an-text-button" data-an-speak="${esc(v.example)}">▷ ${T('Listen to the sentence','ฟังประโยคตัวอย่าง')}</button></div>`:''}
      ${region?.surfaceOnly?`<p class="an-location-note">${T('The marker shows a general surface location; it does not reveal structures beneath skin or clothing.','จุดบนภาพแสดงตำแหน่งบนผิวโดยประมาณ ไม่ได้แสดงโครงสร้างใต้ผิวหนังหรือเสื้อผ้า')}</p>`:''}
      ${!onMap?`<p class="an-location-note">${T('This term has no hotspot in these supplied views. Its vocabulary entry is kept here.','คำนี้ไม่มีจุดบนภาพมุมมองที่ให้มา จึงแสดงเป็นคำศัพท์ที่เกี่ยวข้อง')}</p>`:''}
      ${v.word==='Face'&&view!=='face'?`<button type="button" class="an-text-button" data-an-view="face">${T('Open face close-up','เปิดภาพใบหน้าระยะใกล้')} →</button>`:''}
      <p class="an-audio-status" role="status"></p></div>`;
  }
  /* The category the curriculum files these words under, and what the
     assessment builder's category filter matches on. */
  const CATEGORY='Body parts';
  function practiceConfig(count){
    return {course:Courses.currentId,module:'all',category:CATEGORY,kind:'word',
      count,type:'match',feedback:'practice',scope:'all',selected:[]};
  }
  function practicePool(){
    if(typeof LearningModel==='undefined')return [];
    try { return LearningModel.select(practiceConfig(2)); } catch(_) { return []; }
  }
  /* Hands this vocabulary straight to the assessment builder as a Match pairs
     set instead of making the learner rebuild the same filter by hand. The
     config is passed per-call, so their saved builder preferences are left
     untouched. */
  function practise(){
    const n=practicePool().length;
    if(n<2||typeof AssessmentBuilder==='undefined')return;
    stopAudio();
    AssessmentBuilder.start(practiceConfig(Math.min(10,n)));
  }
  function practiceMarkup(){
    const n=practicePool().length;
    if(n<2)return '';
    return `<div class="an-practise-box">
      <h3>${T('Practise these words','ฝึกคำศัพท์เหล่านี้')}</h3>
      <p class="an-small">${T(`Match the English body words to their Thai meanings. Uses ${Math.min(10,n)} of the ${n} body words in this course.`,`จับคู่คำศัพท์ร่างกายภาษาอังกฤษกับความหมายภาษาไทย ใช้ ${Math.min(10,n)} จาก ${n} คำในหลักสูตรนี้`)}</p>
      <button type="button" class="btn btn-gold btn-block" data-an-practise>${T('Match pairs','จับคู่คำศัพท์')} →</button>
    </div>`;
  }
  function related(){
    const placedWords=allPlaced(),rest=bodyWords().filter(v=>!placedWords.has(norm(v.word)));
    if (!rest.length) return '';
    return `<details class="an-related-box"><summary>${T('More body vocabulary','คำศัพท์ร่างกายเพิ่มเติม')} <span>(${rest.length})</span></summary>
      <p class="an-small">${T('General terms and features not shown in these photos stay available here; they are not assigned a misleading hotspot.','คำทั่วไปและส่วนที่ไม่ปรากฏในภาพยังเรียนได้ที่นี่ โดยไม่กำหนดจุดบนภาพที่อาจทำให้เข้าใจผิด')}</p>
      <div class="an-related-words">${rest.map(v=>`<button type="button" class="chip${selected===v.word?' selected':''}" data-an-word="${esc(v.word)}" aria-pressed="${selected===v.word}">${esc(v.word)} <span lang="th">· ${esc(v.th||'')}</span></button>`).join('')}</div></details>`;
  }
  function render(){
    const stage=document.getElementById('anatomyStage');if (!stage)return;
    const ok=available();
    document.getElementById('anatomyModelControls').hidden=!ok;
    document.getElementById('anatomyViewChips').hidden=!ok;
    document.getElementById('anatomyWordList').hidden=!ok;
    if (!ok){
      selected=null;stage.innerHTML=`<p class="an-hint">${T('The body map is not available for this course.','หลักสูตรนี้ไม่มีแผนผังร่างกาย')}</p>`;
      document.getElementById('anatomyDetail').innerHTML='';document.getElementById('anatomyRelated').innerHTML='';
      return;
    }
    if(selected&&!find(selected)) selected=null;
    controls();stage.innerHTML=mapMarkup();
    document.getElementById('anatomyDetail').innerHTML=detail();
    document.getElementById('anatomyWordList').innerHTML=listMarkup();
    const practice=document.getElementById('anatomyPractice');
    if(practice)practice.innerHTML=practiceMarkup();
    document.getElementById('anatomyRelated').innerHTML=related();
  }
  function select(word){
    const entry=find(word);if(!entry)return;
    selected=entry.word;
    const screen=document.getElementById('screen-anatomy');
    screen.querySelectorAll('[data-an-word]').forEach(el=>{
      const active=norm(el.dataset.anWord)===norm(selected);
      el.classList.toggle('selected',active);el.setAttribute('aria-pressed',String(active));
    });
    document.getElementById('anatomyDetail').innerHTML=detail();
    const footer=document.getElementById('anatomyFigureFooter');
    if(footer){footer.innerHTML=footerMarkup();footer.classList.add('has-selection');}
    // Do not re-create the image or scroll the page on every tap. Keyboard
    // focus and the learner's position stay on the selected map/list control.
  }
  function stopAudio(){
    if(typeof Speech!=='undefined')Speech.stop();
    document.querySelectorAll('#screen-anatomy .playing').forEach(el=>el.classList.remove('playing'));
  }
  function showDetail(){
    const el=document.getElementById('anatomyDetail');if(!el)return;
    el.scrollIntoView({block:'nearest',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
    el.focus({preventScroll:true});
  }
  function switchView(id){
    if(!VIEWS.includes(id))return;
    stopAudio();view=id;
    if(selected&&!isPlaced(selected))selected=null;
    remember();render();
  }
  function init(){
    const screen=document.getElementById('screen-anatomy');if(!screen||initialized)return;
    initialized=true;
    screen.addEventListener('click',e=>{
      const target=e.target.closest('button');if(!target||!screen.contains(target))return;
      if(target.hasAttribute('data-an-model')){
        const id=target.dataset.anModel;if(!MODELS.includes(id))return;
        stopAudio();model=id;remember();render();
        if(e.detail===0)screen.querySelector(`[data-an-model="${model}"]`)?.focus({preventScroll:true});
      } else if(target.hasAttribute('data-an-view')){
        const id=target.dataset.anView;switchView(id);
        if(e.detail===0)screen.querySelector(`#anatomyViewChips [data-an-view="${view}"]`)?.focus({preventScroll:true});
      } else if(target.hasAttribute('data-an-word')){
        select(target.dataset.anWord);
      } else if(target.hasAttribute('data-an-practise')){
        practise();
      } else if(target.hasAttribute('data-an-detail')){
        showDetail();
      } else if(target.hasAttribute('data-an-speak')){
        stopAudio();target.classList.add('playing');
        const status=screen.querySelector('.an-audio-status');if(status)status.textContent='';
        const done=()=>target.classList.remove('playing');
        try {
          Speech.speak(target.dataset.anSpeak,{rate:App.speechRate(),onend:done,onerror:()=>{
            done();if(status)status.textContent=T('Audio is unavailable. You can still read the word and example.','เสียงไม่พร้อมใช้งาน ยังสามารถอ่านคำศัพท์และประโยคตัวอย่างได้');
          }});
        } catch (_) {
          done();if(status)status.textContent=T('Audio is unavailable.','เสียงไม่พร้อมใช้งาน');
        }
      }
    });
    screen.addEventListener('change',e=>{
      if(e.target.id!=='anatomyPoints')return;
      points=e.target.checked;remember();
      const canvas=screen.querySelector('.an-map');if(canvas)canvas.dataset.points=String(points);
    });
    screen.addEventListener('error',e=>{
      if(!e.target.matches?.('.an-photo'))return;
      const canvas=e.target.closest('.an-map');canvas?.classList.add('image-failed');
      const msg=canvas?.querySelector('.an-image-error');if(msg)msg.hidden=false;
    },true);
  }
  function inspect(){
    return {model,view,selected,points,available:available(),image:current().src,
      regions:placed().map(r=>({word:r.word,pin:[...r.pin],shapes:r.shapes})),
      related:bodyWords().filter(v=>!allPlaced().has(norm(v.word))).map(v=>v.word)};
  }
  return {init,render,available,inspect,open(){Nav.go('anatomy');}};
})();
