/* Guided daily lessons. Written work and self-checks use the existing course progress store. */
const DailyLearning = (() => {
 const E=LearningModel.esc, T=(en,th)=>I18N.current==='th'?th:en;
 const text=pair=>E(pair?.[I18N.current==='th'?1:0]||'');
 const state=(course,number)=>StudyPlan.stateFor(Progress.learningState().days,number);
 const label=day=>day.kind==='capstone'?T('Final project','งานฝึกสุดท้าย'):day.kind==='checkpoint'?T('Review & apply','ทบทวนและนำไปใช้'):T('Daily lesson','บทเรียนประจำวัน');
 function dayCard(course,day,next){
  const s=state(course,day.day),done=StudyPlan.complete(day,s),started=!!(s.learned||s.response||s.answers?.some(Number.isInteger));
  return `<button type="button" class="dl-day ${done?'is-complete':''} ${day.day===next?.day?'is-next':''}" data-lh="day" data-day="${day.day}"><span class="dl-day-number">${done?'✓':String(day.day).padStart(2,'0')}</span><span class="dl-day-text"><small>${T('Day','วันที่')} ${day.day} · ${label(day)}</small><strong>${text(day.title)}</strong><span>${text(day.objective)}</span></span><span class="dl-day-state">${done?T('Complete','เรียนครบแล้ว'):started?T('Continue','เรียนต่อ'):T('Open','เปิดเรียน')} →</span></button>`;
 }
 function overview(course){
  const states=Progress.learningState().days||{},done=StudyPlan.completedCount(course,states),next=StudyPlan.nextDay(course,states);
  return `<div class="lh-hero lh-plan-hero"><div><span class="lh-eyebrow">${T('YOUR DAILY CLASSROOM','ห้องเรียนประจำวันของคุณ')}</span><h2>${T('30 days. One clear next step.','30 วัน เรียนรู้ทีละก้าวอย่างชัดเจน')}</h2><p>${T('Learn useful English in a complete daily lesson: recall, understand, listen, respond and check. Four weekly checkpoints lead to a final practical project.','เรียนภาษาอังกฤษที่ใช้ได้จริงในบทเรียนประจำวัน ทบทวน ทำความเข้าใจ ฟัง ฝึกตอบ และตรวจความเข้าใจ พร้อมทบทวนทุกสัปดาห์ก่อนทำงานฝึกสุดท้าย')}</p><button class="btn btn-gold" data-lh="day" data-day="${next?.day||30}">${next?`${done?T('Continue','เริ่มเรียนต่อ'):T('Start','เริ่ม')} · ${T('Day','วันที่')} ${next.day}`:T('Revisit your final project','ทบทวนงานฝึกสุดท้าย')} →</button>${next?`<p class="lh-next-label">${text(next.title)}</p>`:`<p class="lh-next-label">✓ ${T('You have completed all 30 daily lessons. Keep practising the skills you want to strengthen.','คุณเรียนครบทั้ง 30 บทเรียนประจำวันแล้ว ฝึกทักษะที่ต้องการพัฒนาต่อไป')}</p>`}</div><div class="lh-plan-progress"><span class="lh-eyebrow">${T('DAYS COMPLETED','วันที่เรียนครบ')}</span><strong>${done}<span> / 30</span></strong><progress value="${done}" max="30" aria-label="${T('Daily lessons completed','บทเรียนประจำวันที่เรียนครบ')}"></progress><p>${T('Learn • practise • check','เรียน • ฝึก • ตรวจความเข้าใจ')}</p></div></div>
  <div class="dl-plan-note"><strong>${T('25–35 minutes a day','วันละ 25–35 นาที')}</strong><span>${T('Follow the days in order, or revisit any lesson. Day numbers describe the learning sequence; you can catch up or learn ahead.','เรียนตามลำดับวันหรือกลับไปทบทวนบทใดก็ได้ หมายเลขวันคือลำดับบทเรียน คุณสามารถเรียนชดเชยหรือล่วงหน้าได้')}</span></div>
  <div class="lh-week-list">${StudyPlan.groups(course).map(group=>{
   const count=group.days.filter(d=>StudyPlan.complete(d,StudyPlan.stateFor(states,d.day))).length,isNext=group.days.some(d=>d.day===next?.day);
   return `<details class="lh-week ${isNext?'is-next':''}" ${isNext?'open':''}><summary class="lh-week-summary"><span class="lh-week-num">${group.number===5?'↗':String(group.number).padStart(2,'0')}</span><span class="lh-week-title"><small>${group.number===5?T('Final two days','สองวันสุดท้าย'):`${T('Week','สัปดาห์ที่')} ${group.number}`} · ${T('Days','วันที่')} ${group.startDay}–${group.endDay}</small><strong>${E(T(group.title,group.th))}</strong></span><span class="lh-week-meta">${count}/${group.days.length} ${T('complete','เรียนครบ')}</span></summary><div class="lh-week-body"><p class="lh-week-outcome">${E(T(group.outcome,group.outcomeTh))}</p><div class="dl-day-list">${group.days.map(d=>dayCard(course,d,next)).join('')}</div></div></details>`;
  }).join('')}</div>`;
 }
 function chapter(course,id){
  const days=StudyPlan.forModule(course,id),next=days.find(d=>!StudyPlan.complete(d,state(course,d.day)));
  return `<section class="lh-panel dl-chapter"><span class="lh-eyebrow">${T('LEARN THIS CHAPTER STEP BY STEP','เรียนบทนี้ทีละขั้น')}</span><h3>${T('Daily lessons in this chapter','บทเรียนประจำวันในบทนี้')}</h3><p>${T('Work through the explanations, write your own response and check your understanding in each lesson below.','อ่านคำอธิบาย ฝึกเขียนคำตอบของคุณ และตรวจความเข้าใจในแต่ละบทเรียนด้านล่าง')}</p><div class="dl-day-list">${days.map(d=>dayCard(course,d,next)).join('')}</div></section>`;
 }
 function bilingualExample(pair){return `<blockquote lang="en">${E(pair[0])}</blockquote>${I18N.current==='th'?`<p class="lh-th" lang="th">${E(pair[1])}</p>`:''}`;}
 function footer(course,day){
  const s=state(course,day.day),ready=StudyPlan.ready(day,s),done=StudyPlan.complete(day,s);
  const steps=[s.learned===true,typeof s.response==='string'&&s.response.trim().length>=10&&day.practice.criteria.every((_,i)=>s.criteria?.[i]===true),day.checks.every((q,i)=>s.answers?.[i]===q.answer)];
  return `<div class="dl-finish ${done?'is-complete':''}"><div><strong>${done?T('Day complete. Well done.','เรียนครบวันนี้แล้ว'):T('Finish today’s lesson','เรียนวันนี้ให้ครบ')}</strong><p>${done?T('Your work is recorded. Revisit it whenever you need a refresher.','บันทึกงานฝึกแล้ว กลับมาทบทวนได้เมื่อต้องการ'):T('Read and practise the model, write at least 10 characters and self-check your response, then answer both questions correctly.','อ่านและฝึกตัวอย่าง เขียนอย่างน้อย 10 ตัวอักษรและตรวจคำตอบด้วยตนเอง แล้วตอบคำถามทั้งสองข้อให้ถูกต้อง')}</p><ul class="dl-finish-steps">${[T('Teaching & model','บทเรียนและตัวอย่าง'),T('Your response & self-check','คำตอบและการตรวจด้วยตนเอง'),T('Both knowledge checks','ตรวจความเข้าใจทั้งสองข้อ')].map((name,i)=>`<li>${steps[i]?'✓':'○'} ${name}</li>`).join('')}</ul></div><div class="dl-finish-actions">${done?`<button class="btn btn-gold" data-lh="${day.day===30?'back':'day'}" ${day.day===30?'':`data-day="${day.day+1}"`}>${day.day===30?T('View my course progress','ดูความคืบหน้าของฉัน'):`${T('Continue to day','เรียนต่อวันที่')} ${day.day+1}`} →</button>`:`<button id="dlFinish" class="btn btn-gold" data-dl="finish" ${ready?'':'disabled'}>${T('Complete day','บันทึกว่าเรียนครบวันที่')} ${day.day} ✓</button>`}</div></div>`;
 }
 function lesson(course,number){
  const d=StudyPlan.day(course,number);if(!d)return overview(course);
  const s=state(course,number),chapter=CURRICULUM_DATA.modules[course].find(m=>m.id===d.moduleId);
  return `<button class="lh-link lh-back" data-lh="back">← ${T('My 30-day learning path','แผนการเรียน 30 วันของฉัน')}</button><header class="dl-lesson-heading"><span class="lh-eyebrow">${number<=28?`${T('WEEK','สัปดาห์ที่')} ${Math.ceil(number/7)}`:T('FINAL PROJECT','งานฝึกท้ายหลักสูตร')} · ${T('DAY','วันที่')} ${number} / 30 · ${label(d)}</span><h2 id="dlTitle" tabindex="-1">${text(d.title)}</h2><p>${text(d.objective)}</p><div class="dl-lesson-meta"><span>25–35 ${T('minutes','นาที')}</span><button class="lh-link" data-lh="module" data-id="${d.moduleId}">${E(T(chapter.title,chapter.th))}</button></div></header>
  <nav class="dl-part-nav" aria-label="${T('Lesson parts','ส่วนต่าง ๆ ของบทเรียน')}">${[T('Recall','ทบทวน'),T('Learn','เรียน'),T('Model','ตัวอย่าง'),T('Your turn','ตาคุณ'),T('Check','ตรวจความเข้าใจ')].map((name,i)=>`<a href="#dlPart${i+1}">${i+1}. ${name}</a>`).join('')}</nav>
  <section class="lh-panel dl-part" id="dlPart1"><span class="dl-part-kicker">01 · ${T('RECALL · 2 MIN','ทบทวน · 2 นาที')}</span><h3>${T('Start with what you know','เริ่มจากสิ่งที่คุณรู้')}</h3><p>${text(d.review.prompt)}</p><details id="dlRecallModel"><summary>${T('Try first, then compare','ลองตอบก่อน แล้วเปรียบเทียบ')}</summary>${bilingualExample(d.review.model)}</details></section>
  <section class="lh-panel dl-part" id="dlPart2"><span class="dl-part-kicker">02 · ${T('LEARN · 8 MIN','เรียน · 8 นาที')}</span><h3>${T('Understand the language','เข้าใจการใช้ภาษา')}</h3>${d.teach.map(point=>`<article class="dl-teaching"><h4>${text(point.title)}</h4><p>${text(point.body)}</p>${bilingualExample(point.example)}</article>`).join('')}</section>
  <section class="lh-panel dl-part" id="dlPart3"><span class="dl-part-kicker">03 · ${T('LISTEN & SPEAK · 5 MIN','ฟังและพูด · 5 นาที')}</span><h3>${T('Hear it. Say it. Change roles.','ฟัง พูดตาม แล้วสลับบทบาท')}</h3><p>${T('Read both roles aloud. Use Listen if audio is available, then repeat without looking. English stays visible in either language.','อ่านออกเสียงทั้งสองบทบาท กดฟังหากมีเสียง แล้วลองพูดโดยไม่มองข้อความ ประโยคภาษาอังกฤษจะแสดงในทั้งสองภาษา')}</p>${d.dialogue.map(turn=>`<div class="lh-turn"><span>${E(turn.speaker)}</span><p lang="en">${E(turn.en)}</p>${I18N.current==='th'?`<p class="lh-th" lang="th">${E(turn.th)}</p>`:''}<button class="lh-link" data-lh-speak="${E(turn.en)}">▷ ${T('Listen','ฟัง')}</button></div>`).join('')}<label class="dl-checkbox"><input type="checkbox" id="dlLearned" data-dl="learned" ${s.learned?'checked':''}><span>${T('I read the teaching and practised the model aloud.','ฉันอ่านบทเรียนและฝึกพูดตัวอย่างออกเสียงแล้ว')}</span></label></section>
  <section class="lh-panel dl-part" id="dlPart4"><span class="dl-part-kicker">04 · ${T('YOUR TURN · 8 MIN','ตาคุณ · 8 นาที')}</span><h3>${T('Use it in your own words','นำไปใช้ด้วยคำพูดของคุณ')}</h3><p>${text(d.practice.prompt)}</p><label for="dlResponse" class="dl-response-label">${T('Your response or rehearsal notes','คำตอบหรือบันทึกการฝึกพูดของคุณ')}</label><textarea id="dlResponse" rows="5" maxlength="2000" aria-describedby="dlResponseHint">${E(s.response||'')}</textarea><p id="dlResponseHint" class="lh-caption">${T('Write in English. For speaking tasks, say your answer first and note the key sentences here. Your draft is included in your course progress. Editing your response clears its self-checks.','เขียนเป็นภาษาอังกฤษ สำหรับงานพูด ให้พูดก่อนแล้วจดประโยคสำคัญที่นี่ ร่างคำตอบจะบันทึกรวมกับความคืบหน้าหลักสูตร เมื่อแก้คำตอบจะต้องตรวจรายการด้วยตนเองอีกครั้ง')}</p><details id="dlPracticeModel"><summary>${T('Compare with a sample response','เปรียบเทียบกับตัวอย่างคำตอบ')}</summary>${bilingualExample(d.practice.model)}</details><fieldset class="dl-criteria"><legend>${T('Check your own work','ตรวจงานของคุณเอง')}</legend>${d.practice.criteria.map((criterion,i)=>`<label class="dl-checkbox"><input type="checkbox" id="dlCriterion${i}" data-dl="criterion" data-index="${i}" ${s.criteria?.[i]?'checked':''}><span>${text(criterion)}</span></label>`).join('')}</fieldset><p class="lh-caption">${T('These are self-checks. Ask a teacher or partner for feedback on clarity and pronunciation.','รายการนี้ใช้ตรวจด้วยตนเอง ขอให้ครูหรือคู่ฝึกช่วยให้ข้อเสนอแนะด้านความชัดเจนและการออกเสียง')}</p></section>
  <section class="lh-panel dl-part" id="dlPart5"><span class="dl-part-kicker">05 · ${T('CHECK & IMPROVE · 3 MIN','ตรวจและพัฒนา · 3 นาที')}</span><h3>${T('Check your understanding','ตรวจความเข้าใจของคุณ')}</h3><p>${T('Choose the best response. Read the explanation, revisit the teaching and try again if needed.','เลือกคำตอบที่เหมาะสมที่สุด อ่านคำอธิบาย กลับไปทบทวนบทเรียน และลองใหม่ได้')}</p>${d.checks.map((q,i)=>{
   const answered=Number.isInteger(s.answers?.[i]),correct=s.answers?.[i]===q.answer;
   return `<fieldset class="dl-question"><legend>${i+1}. ${text(q.question)}</legend><div class="dl-options">${q.options.map((option,index)=>`<button type="button" id="dlAnswer${i}-${index}" data-dl="answer" data-question="${i}" data-answer="${index}" class="${s.answers?.[i]===index?'is-selected':''}" aria-pressed="${s.answers?.[i]===index}"><span>${String.fromCharCode(65+index)}</span><span class="dl-option-copy"><span lang="en">${E(option[0])}</span>${I18N.current==='th'?`<small lang="th">${E(option[1])}</small>`:''}</span></button>`).join('')}</div>${answered?`<div class="ab-feedback ${correct?'right':'wrong'}" role="status"><strong>${correct?T('That’s right.','ถูกต้อง'):T('Revisit the lesson and try again.','ทบทวนบทเรียนแล้วลองอีกครั้ง')}</strong><p>${text(q.explanation)}</p></div>`:''}</fieldset>`;
  }).join('')}</section><div id="dlFooter" aria-live="polite">${footer(course,d)}</div><div class="dl-bottom-nav">${number>1?`<button class="lh-link" data-lh="day" data-day="${number-1}">← ${T('Day','วันที่')} ${number-1}</button>`:'<span></span>'}<button class="lh-link" data-lh="back">${T('View all 30 days','ดูทั้ง 30 วัน')} ↗</button></div>`;
 }
 function refresh(focusId){
  const scroll=window.scrollY,opened=[...document.querySelectorAll('.dl-part details[open]')].map(el=>el.id);
  LearningHub.render();opened.forEach(id=>{const el=document.getElementById(id);if(el)el.open=true;});
  if(focusId)document.getElementById(focusId)?.focus({preventScroll:true});
  window.scrollTo(0,scroll);LearningHub.home();App.refreshHome();
 }
 function init(){
  document.addEventListener('input',e=>{
   if(e.target.id!=='dlResponse')return;
   const number=LearningHub.currentDay();if(!number)return;
   Progress.updateLearningDay(number,{response:e.target.value});
   const current=state(Courses.currentId,number);
   document.querySelectorAll('[data-dl="criterion"]').forEach(el=>{el.checked=current.criteria?.[Number(el.dataset.index)]===true;});
   const el=document.getElementById('dlFooter');if(el)el.innerHTML=footer(Courses.currentId,StudyPlan.day(Courses.currentId,number));
   LearningHub.home();App.refreshHome();
  });
  document.addEventListener('change',e=>{
   const action=e.target.dataset.dl,number=LearningHub.currentDay();if(!number)return;
   if(action==='learned')Progress.updateLearningDay(number,{learned:e.target.checked});
   else if(action==='criterion'){const criteria=[...(state(Courses.currentId,number).criteria||[])];criteria[Number(e.target.dataset.index)]=e.target.checked;Progress.updateLearningDay(number,{criteria});}
   else return;
   refresh(e.target.id);
  });
  document.addEventListener('click',e=>{
   const el=e.target.closest('[data-dl]'),number=LearningHub.currentDay();if(!el||!number||el.disabled)return;
   if(el.dataset.dl==='answer'){
    const answers=[...(state(Courses.currentId,number).answers||[])];answers[Number(el.dataset.question)]=Number(el.dataset.answer);
    Progress.updateLearningDay(number,{answers});refresh(el.id);
   }else if(el.dataset.dl==='finish'){Progress.updateLearningDay(number,{finish:true});refresh();document.querySelector('#dlFooter button')?.focus({preventScroll:true});}
  });
 }
 return {overview,lesson,chapter,init};
})();
