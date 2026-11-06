/* Learning pages: source-aligned modules, transparent provenance and self-study progress. */
const LearningHub = (() => {
 const M=LearningModel, D=M.D, E=M.esc;
 const T=(en,th)=>I18N.current==='th'?th:en;
 const planTitle=(en,th)=>Auth.currentUser()?.guest?T('Your learning plan','แผนการเรียนรู้ของคุณ'):T(en,th);
 let course=null, moduleId=null, dayNumber=null, filter={kind:'both',category:'all',query:'',limit:12};
 function ensure(){if(course!==Courses.currentId){course=Courses.currentId;moduleId=null;dayNumber=null;filter={kind:'both',category:'all',query:'',limit:12};}}
 function title(m){return T(m.title,m.th);}
 /* The chrome carries the course's own name; the syllabus title it follows is
    stated in the source note, next to the documents it comes from. */
 function courseHeader(){return `<div class="lh-course-line"><span class="lh-eyebrow">${E(Courses.name(course))}</span><button class="lh-link" data-lh="switch">${T('Switch course','เปลี่ยนหลักสูตร')} ↗</button></div>`;}
 function sourceNote(){return `<details class="lh-source"><summary>${T('Course sources & details to confirm','เอกสารหลักสูตรและรายละเอียดที่ต้องยืนยัน')}</summary><p>${T('Module titles follow the uploaded outlines. Short lessons, models and module mappings are editorial learning support, not quotations or newly approved course requirements.','ชื่อโมดูลอิงจากโครงร่างที่แนบ บทเรียนสั้น ตัวอย่าง และการจัดหมวดเป็นสื่อเสริมที่เรียบเรียงขึ้น ไม่ใช่ข้อความคัดลอกหรือข้อกำหนดหลักสูตรที่ได้รับอนุมัติใหม่')}</p><p><b>${T('Follows','อิงหลักสูตร')}:</b> ${E(T(D.courses[course].title,D.courses[course].th))}</p><p>${E(D.courses[course].duration)}</p><p>${D.courses[course].sources.map(E).join('<br>')}</p><a href="LEARNING_GUIDE.html" target="_blank" rel="noopener">${T('Read the mapping and source notes','อ่านการจัดหมวดและหมายเหตุเอกสาร')} ↗</a></details>`;}
 /* Only courses whose curriculum carries an interview script show rehearsal. */
 function rehearsalCard(){
  if(typeof Interview==='undefined'||!Interview.available())return '';
  const s=Interview.summary();if(!s)return '';
  const started=s.at>0;
  return `<article class="lh-module is-rehearsal"><div class="lh-module-top"><span class="lh-index" aria-hidden="true">★</span><span class="lh-badge">${T('Rehearsal · unscored','ซ้อม · ไม่มีคะแนน')}</span></div><h3>${E(I18N.t('interviewHeading'))}</h3><p>${T('Walk the employer’s interview and practical test step by step. Answer each question out loud, then open the model answer and compare.','ซ้อมการสัมภาษณ์และทดสอบภาคปฏิบัติของนายจ้างทีละขั้น ตอบออกเสียงก่อน แล้วเปิดดูตัวอย่างคำตอบเพื่อเปรียบเทียบ')}</p><div class="lh-meta">${s.steps} ${T('steps','ขั้นตอน')} · ${s.questions} ${T('questions','คำถาม')}${started?` · ${T('Step','ขั้นที่')} ${s.at+1}/${s.steps}`:''}</div><button class="btn btn-outline btn-block" data-lh="rehearsal">${started?T('Continue rehearsal','ซ้อมต่อ'):T('Start rehearsal','เริ่มซ้อม')} →</button></article>`;
 }
 function moduleCard(m,progress){
  const es=M.items(course,m.id),w=es.filter(e=>e.kind==='word').length,p=es.length-w,studied=!!progress.modules[m.id];
  return `<article class="lh-module ${studied?'is-studied':''}"><div class="lh-module-top"><span class="lh-badge">${m.supplement?T('Language supplement','บทเสริมด้านภาษา'):m.teacherAssessed?T('Includes teacher feedback','มีงานที่ต้องรับข้อเสนอแนะจากครู'):T('Self-study + practice','เรียนรู้และฝึกด้วยตนเอง')}</span>${studied?`<span class="lh-studied">✓ ${T('Studied','เรียนแล้ว')}</span>`:''}</div><h3>${E(title(m))}</h3><p>${E(T(m.goal,m.goalTh))}</p><div class="lh-meta">${T('Reference library','คลังอ้างอิง')}: ${w} ${T('words','คำศัพท์')} · ${p} ${T('phrases','วลี')}</div><button class="btn btn-outline btn-block" data-lh="module" data-id="${m.id}">${studied?T('Revisit lesson','ทบทวนบทเรียน'):T('Open lesson','เปิดบทเรียน')} →</button></article>`;
 }
 function assessmentNote(){
  const labels={
   'Pre-course Diagnostic Test':'แบบประเมินก่อนเรียน','Listening & Speaking Tasks':'งานฝึกฟังและพูด','Workplace Role-play':'บทบาทสมมติในที่ทำงาน','Cruise Job Interview':'สัมภาษณ์งานเรือสำราญ','Final Practical Simulation':'สถานการณ์จำลองภาคปฏิบัติปลายหลักสูตร',
   'Cruise Spa English & Terminology':'ภาษาอังกฤษและคำศัพท์สปาบนเรือสำราญ','Professional English & Specialized Terminology':'ภาษาอังกฤษวิชาชีพและคำศัพท์เฉพาะ','Professional CV':'ประวัติย่อเพื่อสมัครงาน','English Self-Introduction':'การแนะนำตัวภาษาอังกฤษ','Interview Q&A & Situational Role Play':'ถามตอบสัมภาษณ์และบทบาทสมมติตามสถานการณ์','Interview Q&A & Role Play':'ถามตอบสัมภาษณ์และบทบาทสมมติ','Final Mock Interview':'การสัมภาษณ์จำลองปลายหลักสูตร'
  };
  return `<details class="lh-source lh-assessment"><summary>${T('Teacher assessment & course completion','การประเมินโดยครูและการจบหลักสูตร')}</summary><p>${T('Marking a chapter studied records your own progress. Practice results help you find what to review. Official assessment and certification require the teacher-led work described in the source course.','การทำเครื่องหมายว่าเรียนแล้วเป็นบันทึกความคืบหน้าของคุณ ผลแบบฝึกช่วยระบุสิ่งที่ควรทบทวน การประเมินอย่างเป็นทางการและประกาศนียบัตรต้องอาศัยงานที่ครูประเมินตามหลักสูตรต้นฉบับ')}</p><div class="lh-weight-list">${D.courses[course].assessment.map(([name,weight])=>`<div><span>${E(T(name,labels[name]||name))}</span><b>${weight}%</b></div>`).join('')}</div></details>`;
 }
 function overview(){
  const progress=Progress.learningState();
  return `${courseHeader()}${DailyLearning.overview(course)}<details class="lh-source dl-reference"><summary>${T('Chapter library & extra practice','คลังบทเรียนและแบบฝึกเพิ่มเติม')}</summary><div class="lh-module-grid">${D.modules[course].map(m=>moduleCard(m,progress)).join('')}</div>${rehearsalCard()}</details>${assessmentNote()}${sourceNote()}`;
 }
 function lesson(){
  const m=D.modules[course].find(m=>m.id===moduleId);if(!m){moduleId=null;return overview();}
  const es=M.items(course,moduleId),state=Progress.learningState();
  let pool=M.items(course,moduleId,filter.kind,filter.category);
  if(filter.query){const q=filter.query.toLowerCase();pool=pool.filter(e=>[e.en,e.th,e.category].some(v=>v.toLowerCase().includes(q)));}
  const cats=M.categories(course,moduleId,filter.kind);
  const week=StudyPlan.weekForModule(course,moduleId);
  return `${courseHeader()}<button class="lh-link lh-back" data-lh="back">← ${planTitle('Your 30-day plan','แผนการเรียน 30 วันของคุณ')}</button><header class="lh-lesson-head"><span class="lh-eyebrow">${T('WEEK','สัปดาห์ที่')} ${week.number} · ${T('SHORT LESSON','บทเรียนสั้น')}</span><h2>${E(title(m))}</h2><p>${E(T(m.goal,m.goalTh))}</p><div class="lh-actions"><button class="btn btn-gold" data-lh="assess" data-id="${m.id}">${T('Practise this module','ฝึกโมดูลนี้')} →</button></div></header>${DailyLearning.chapter(course,moduleId)}
  <div class="lh-lesson-grid"><section class="lh-panel"><h3>${T('Understand & use','เข้าใจและนำไปใช้')}</h3>${m.points.map(([en,th],i)=>`<div class="lh-point"><b>${i+1}</b><div><p>${E(en)}</p><p lang="th" class="lh-th">${E(th)}</p></div></div>`).join('')}<p class="lh-caption">${T('Newly authored learning support; aligned to the source topic.','สื่อเสริมที่เรียบเรียงขึ้นใหม่ โดยสอดคล้องกับหัวข้อในเอกสาร')}</p></section><section class="lh-panel"><h3>${T('Model exchange','ตัวอย่างการโต้ตอบ')}</h3>${m.model.map(([who,line])=>`<div class="lh-turn"><span>${E(who)}</span><p>${E(line)}</p><button class="lh-link" data-lh-speak="${E(line)}">▷ ${T('Listen','ฟัง')}</button></div>`).join('')}<p class="lh-caption">${T('Fictional training example. Use your real experience and confirm workplace details.','ตัวอย่างสมมติสำหรับฝึก ใช้ประสบการณ์จริงของคุณและยืนยันรายละเอียดของที่ทำงาน')}</p></section></div>
  <section class="lh-panel lh-transfer"><h3>${m.teacherAssessed?T('Teacher / partner task','งานฝึกกับครูหรือคู่ฝึก'):T('Try it at work','ลองใช้ในสถานการณ์งาน')}</h3><p>${E(T(m.task,m.taskTh))}</p>${m.teacherAssessed?`<p class="lh-caption">${T('Human feedback is required for this task; no automatic speaking or CV grade is awarded.','งานนี้ต้องได้รับข้อเสนอแนะจากผู้ประเมิน ไม่มีการให้คะแนนการพูดหรือประวัติย่อโดยอัตโนมัติ')}</p>`:''}</section>
  <section class="lh-library"><h3>${T('Words & phrases for this lesson','คำศัพท์และวลีสำหรับบทเรียนนี้')}</h3><p class="lh-caption">${T('Start with five useful entries. Listen, read the example and use each in your own sentence. Search or filter the reference library when you need more.','เริ่มจากห้ารายการที่ใช้ได้จริง ฟัง อ่านตัวอย่าง และลองแต่งประโยคด้วยตนเอง ค้นหาหรือกรองคลังอ้างอิงเมื่อต้องการเรียนรู้เพิ่มเติม')}</p><div class="lh-filter-row"><label>${T('Content','เนื้อหา')}<select id="lhKind"><option value="both" ${filter.kind==='both'?'selected':''}>${T('Words & phrases','คำศัพท์และวลี')}</option><option value="word" ${filter.kind==='word'?'selected':''}>${T('Words only','เฉพาะคำศัพท์')}</option><option value="phrase" ${filter.kind==='phrase'?'selected':''}>${T('Phrases only','เฉพาะวลี')}</option></select></label><label>${T('Category','หมวดหมู่')}<select id="lhCategory"><option value="all">${T('All categories','ทุกหมวดหมู่')}</option>${cats.map(c=>`<option value="${E(c.id)}" ${filter.category===c.id?'selected':''}>${E(T(c.en,c.th))}</option>`).join('')}</select></label><label>${T('Find an entry','ค้นหารายการ')}<input id="lhQuery" value="${E(filter.query)}" placeholder="${T('English or Thai','ภาษาอังกฤษหรือภาษาไทย')}"></label></div><p class="lh-caption">${pool.length} ${T('matching entries','รายการที่ตรงเงื่อนไข')} · ${es.filter(e=>state.items[e.id]).length}/${es.length} ${T('marked reviewed','ทำเครื่องหมายว่าทบทวนแล้ว')}</p><div class="lh-entry-grid">${pool.slice(0,filter.limit).map(e=>entryCard(e,state)).join('')||`<p class="lh-empty">${T('No entries match these filters.','ไม่พบรายการที่ตรงกับตัวกรอง')}</p>`}</div>${pool.length>filter.limit?`<button class="btn btn-outline btn-block" data-lh="more">${T('Show 12 more','แสดงเพิ่ม 12 รายการ')}</button>`:''}</section><p class="lh-caption">${T('Source topic','หัวข้ออ้างอิง')}: ${E(m.source)}</p>${sourceNote()}`;
 }
 function entryCard(e,state){
  const reviewed=!!state.items[e.id],primary=D.modules[course].find(m=>m.id===e.mapping.primary);
  return `<article class="lh-entry"><div class="lh-entry-top"><span class="lh-badge">${T(e.kind==='word'?'Word':'Phrase',e.kind==='word'?'คำศัพท์':'วลี')}</span><button class="lh-link" data-lh-speak="${E(e.en)}" aria-label="${E(T('Listen to ','ฟัง ')+e.en)}">▷ ${T('Listen','ฟัง')}</button></div><h4>${E(e.en)}</h4><p lang="th" class="lh-meaning">${E(e.th)}</p><details><summary>${T('Meaning, example & module','ความหมาย ตัวอย่าง และโมดูล')}</summary><p>${E(e.description)}</p>${e.descriptionTh?`<p class="lh-th" lang="th">${E(e.descriptionTh)}</p>`:''}${e.example?`<blockquote>${E(e.example)}<span class="lh-th" lang="th">${E(e.exampleTh)}</span></blockquote>`:''}<p class="lh-caption">${E(T(e.category,e.categoryTh))}<br>${T('Primary module','โมดูลหลัก')}: ${E(title(primary))}<br>${T('Origin','ที่มา')}: ${E(e.origin)}</p></details><button class="lh-review-btn ${reviewed?'reviewed':''}" data-lh="reviewed" data-id="${E(e.id)}" aria-pressed="${reviewed}">${reviewed?'✓ '+T('Reviewed — undo','ทบทวนแล้ว — ยกเลิก'):T('Mark reviewed','ทำเครื่องหมายว่าทบทวนแล้ว')}</button></article>`;
 }
 function render(){ensure();const el=document.getElementById('learningRoot');if(el)el.innerHTML=dayNumber?courseHeader()+DailyLearning.lesson(course,dayNumber):moduleId?lesson():overview();}
 function open(id=null){ensure();moduleId=id;dayNumber=null;filter={kind:'both',category:'all',query:'',limit:12};Nav.go('learning');}
 function openDay(number){ensure();if(!StudyPlan.day(course,number))return;dayNumber=Number(number);moduleId=null;Nav.go('learning');document.getElementById('dlTitle')?.focus({preventScroll:true});}
 function home(){
  const el=document.getElementById('learningHomeCard');if(!el)return;
  const states=Progress.learningState().days||{},next=StudyPlan.nextDay(Courses.currentId,states),done=StudyPlan.completedCount(Courses.currentId,states);
  el.innerHTML=`<span class="lh-eyebrow">${T('YOUR DAILY LEARNING','บทเรียนประจำวันของคุณ')} · ${done}/30</span><h3>${next?`${T('Day','วันที่')} ${next.day}: ${E(T(...next.title))}`:T('All 30 days complete','เรียนครบทั้ง 30 วันแล้ว')}</h3><p>${next?E(T(...next.objective)):T('Revisit your final project and keep practising.','ทบทวนงานฝึกสุดท้ายและฝึกฝนต่อไป')}</p><button class="btn btn-gold" data-lh="day" data-day="${next?.day||30}">${next?T('Continue my lesson','เรียนบทของฉันต่อ'):T('Review my final project','ทบทวนงานฝึกสุดท้าย')} →</button><button class="lh-link" data-lh="back">${T('View all 30 days','ดูทั้ง 30 วัน')}</button>`;
 }
 function init(){
  DailyLearning.init();
  document.addEventListener('click',e=>{
   const speech=e.target.closest('[data-lh-speak]');if(speech){Speech.speak(speech.dataset.lhSpeak,{rate:App.speechRate()});return;}
   const b=e.target.closest('[data-lh]');if(!b)return;
   if(b.dataset.lh==='day')openDay(Number(b.dataset.day));
   if(b.dataset.lh==='module')open(b.dataset.id);
   if(b.dataset.lh==='back')open();
   if(b.dataset.lh==='rehearsal')Interview.open();
   if(b.dataset.lh==='switch')App.showCourseChooser({cancellable:true});
   if(b.dataset.lh==='assess')AssessmentBuilder.open(b.dataset.id);
   if(b.dataset.lh==='reviewed'){Progress.setLearningItem(b.dataset.id,!Progress.learningState().items[b.dataset.id]);const sy=window.scrollY;render();window.scrollTo(0,sy);}
   if(b.dataset.lh==='more'){filter.limit+=12;const sy=window.scrollY;render();window.scrollTo(0,sy);}
  });
  document.addEventListener('change',e=>{if(e.target.id==='lhKind'){filter.kind=e.target.value;filter.category='all';filter.limit=12;render();}if(e.target.id==='lhCategory'){filter.category=e.target.value;filter.limit=12;render();}});
  let searchTimer;document.addEventListener('input',e=>{if(e.target.id!=='lhQuery')return;filter.query=e.target.value;clearTimeout(searchTimer);searchTimer=setTimeout(()=>{const pos=e.target.selectionStart,sy=window.scrollY;render();const input=document.getElementById('lhQuery');input.focus({preventScroll:true});input.setSelectionRange(pos,pos);window.scrollTo(0,sy);},200);});
 }
 return {render,open,openDay,currentDay:()=>dayNumber,home,init};
})();
