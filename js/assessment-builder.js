/* Custom word/phrase assessments. Separate practice records, never official course grades. */
const AssessmentBuilder = (() => {
 const M=LearningModel,D=M.D,E=M.esc,T=(en,th)=>I18N.current==='th'?th:en;
 const TYPES={
  choice:['Multiple choice','เลือกคำตอบ','Choose the English entry for its Thai meaning.','เลือกคำศัพท์หรือวลีภาษาอังกฤษที่ตรงกับความหมายภาษาไทย'],
  match:['Match pairs','จับคู่','Match English entries with Thai meanings; first attempts count.','จับคู่ภาษาอังกฤษกับความหมายภาษาไทย ให้คะแนนจากการตอบครั้งแรก'],
  type:['Type the answer','พิมพ์คำตอบ','Recall the course entry from its Thai meaning.','นึกและพิมพ์คำศัพท์หรือวลีในหลักสูตรจากความหมายภาษาไทย'],
  gap:['Word in context','เติมคำตามบริบท','Fill a vocabulary gap in an example sentence. Words only.','เติมคำศัพท์ในประโยคตัวอย่าง ใช้ได้เฉพาะคำศัพท์'],
  order:['Sentence builder','เรียงคำในประโยค','Put the phrase tokens in order. Phrases only.','เรียงคำให้เป็นวลีหรือประโยค ใช้ได้เฉพาะวลี'],
  listen:['Listen & select','ฟังและเลือก','Listen, then select the English entry.','ฟังแล้วเลือกคำศัพท์หรือวลีภาษาอังกฤษ'],
  mixed:['Mixed practice','แบบผสม','A mix of choice, typing, context gaps and sentence building.','ผสมการเลือก พิมพ์ เติมคำตามบริบท และเรียงประโยค']
 };
 let config=null,configCourse=null,session=null,reviewLimit=12;
 function defaults(){return {course:Courses.currentId,module:'all',category:'all',kind:'both',count:10,type:'choice',feedback:'practice',scope:'all',selected:[]};}
 function ensure(){
  if(configCourse!==Courses.currentId){configCourse=Courses.currentId;config={...defaults(),...Progress.assessmentPreferences(),course:Courses.currentId};
   if(!D.modules[config.course].some(m=>m.id===config.module))config.module='all';
   if(!TYPES[config.type])config.type='choice';
  }
 }
 function save(){Progress.setAssessmentPreferences(config);}
 function errors(v){return v.code==='integer'?T('Enter a whole number of at least 1.','กรอกจำนวนเต็มตั้งแต่ 1 ขึ้นไป'):v.code==='match'?T('Matching needs at least 2 entries.','การจับคู่ต้องมีอย่างน้อย 2 รายการ'):v.code==='empty'?T('No eligible entries. Change the module, category, content or assessment type.','ไม่มีรายการที่ใช้ได้ กรุณาเปลี่ยนโมดูล หมวดหมู่ เนื้อหา หรือรูปแบบแบบฝึก'):T(`Only ${v.available} unique entries are available. Reduce the count or widen your selection.`,`มีรายการไม่ซ้ำที่ใช้ได้ ${v.available} รายการ กรุณาลดจำนวนหรือเลือกเนื้อหาเพิ่ม`);}
 function header(){return `<div class="lh-course-line"><span class="lh-eyebrow">${E(T(D.courses[config.course].title,D.courses[config.course].th))}</span><button class="lh-link" data-ab="switch">${T('Switch course','เปลี่ยนหลักสูตร')} ↗</button></div>`;}
 function render(){
  ensure();const el=document.getElementById('assessmentBuilder');if(!el)return;
  const hist=Progress.assessmentHistory(),v=M.validate(config,hist),available=M.select(config,hist),cats=M.categories(config.course,config.module,config.kind);
  const fullPool=M.pool(config),selected=new Set(config.selected||[]),summaryModule=D.modules[config.course].find(m=>m.id===config.module);
  el.innerHTML=`${header()}<div class="ab-intro"><span class="lh-eyebrow">${T('BUILD YOUR OWN PRACTICE','จัดชุดฝึกของคุณเอง')}</span><h2>${T('What would you like to practise?','คุณต้องการฝึกอะไร?')}</h2><p>${T('Choose your learning content, set the number of entries, then choose how to answer.','เลือกเนื้อหาที่ต้องการเรียน กำหนดจำนวนรายการ แล้วเลือกรูปแบบการตอบ')}</p></div>
  <form id="assessmentConfig" novalidate><div class="ab-config-grid"><section class="lh-panel ab-step"><div class="ab-step-title"><b>1</b><h3>${T('Choose the content','เลือกเนื้อหา')}</h3></div><label for="abModule">${T('Module','โมดูล')}</label><select id="abModule"><option value="all">${T('All modules in this course','ทุกโมดูลในหลักสูตรนี้')}</option>${D.modules[config.course].map(m=>`<option value="${m.id}" ${config.module===m.id?'selected':''}>${E(T(m.title,m.th))}</option>`).join('')}</select><fieldset class="ab-kind"><legend>${T('Practise','ฝึก')}</legend>${[['both','Words & phrases','คำศัพท์และวลี'],['word','Words','คำศัพท์'],['phrase','Phrases','วลี']].map(([k,en,th])=>`<label><input type="radio" name="abKind" value="${k}" ${config.kind===k?'checked':''}>${T(en,th)}</label>`).join('')}</fieldset><label for="abCategory">${T('Category','หมวดหมู่')}</label><select id="abCategory"><option value="all">${T('All categories','ทุกหมวดหมู่')}</option>${cats.map(c=>`<option value="${E(c.id)}" ${config.category===c.id?'selected':''}>${E(T(c.en,c.th))}</option>`).join('')}</select></section>
  <section class="lh-panel ab-step"><div class="ab-step-title"><b>2</b><h3>${T('How many entries?','ต้องการกี่รายการ?')}</h3></div><p class="lh-caption">${T('One word or phrase = one scored item. No repeated targets in a session.','คำศัพท์หรือวลีหนึ่งรายการ = หนึ่งข้อที่ให้คะแนน ไม่มีรายการซ้ำในรอบเดียวกัน')}</p><div class="ab-presets">${[5,10,15,20,30,50].map(n=>`<button type="button" data-ab="count" data-count="${n}" class="${Number(config.count)===n?'selected':''}" aria-pressed="${Number(config.count)===n}">${n}</button>`).join('')}</div><label for="abCount">${T('Custom number','กำหนดจำนวนเอง')}</label><input type="number" id="abCount" min="1" max="${Math.max(1,available.length)}" step="1" value="${E(config.count)}" inputmode="numeric"><label for="abScope">${T('Choose entries from','เลือกจาก')}</label><select id="abScope">${[['all','All eligible entries','รายการที่ใช้ได้ทั้งหมด'],['review','My missed items','รายการที่ตอบผิด'],['selected','My selected words / phrases','คำศัพท์หรือวลีที่ฉันเลือก']].map(([id,en,th])=>`<option value="${id}" ${config.scope===id?'selected':''}>${T(en,th)}</option>`).join('')}</select><div class="ab-availability" aria-live="polite"><b>${available.length}</b> ${T('eligible, unique entries','รายการไม่ซ้ำที่ใช้ได้')}</div></section></div>
  ${config.scope==='selected'?`<section class="lh-panel"><div class="ab-selection-top"><h3>${T('Select your study targets','เลือกรายการที่ต้องการฝึก')} <span class="lh-badge">${available.length}</span></h3><div><button type="button" class="lh-link" data-ab="select-all">${T('Select all eligible','เลือกทั้งหมดที่ใช้ได้')}</button> · <button type="button" class="lh-link" data-ab="select-none">${T('Clear','ล้าง')}</button></div></div><div class="ab-pick-list">${fullPool.map(e=>`<label><input type="checkbox" name="abEntry" value="${E(e.id)}" ${selected.has(e.id)?'checked':''}><span><b>${E(e.en)}</b><small lang="th">${E(e.th)}</small></span></label>`).join('')||`<p>${T('No eligible entries for this type.','ไม่มีรายการที่ใช้ได้กับรูปแบบนี้')}</p>`}</div></section>`:''}
  <section class="lh-panel ab-step"><div class="ab-step-title"><b>3</b><h3>${T('Choose an assessment type','เลือกรูปแบบแบบฝึก')}</h3></div><fieldset class="ab-types"><legend class="sr-only">${T('Assessment type','รูปแบบแบบฝึก')}</legend>${Object.entries(TYPES).map(([key,a])=>{const n=M.pool({...config,type:key}).length;return `<label class="ab-type ${config.type===key?'selected':''} ${n===0?'unavailable':''}"><input type="radio" name="abType" value="${key}" ${config.type===key?'checked':''} ${n===0?'disabled':''}><span><b>${T(a[0],a[1])}</b><small>${T(a[2],a[3])}</small><em>${n} ${T('eligible entries','รายการที่ใช้ได้')}</em></span></label>`;}).join('')}</fieldset><p class="lh-caption">${T('Some types need specific content. Context gaps use words present in their example sentence; sentence building uses phrases. Matching removes duplicate meanings.','บางรูปแบบต้องใช้เนื้อหาเฉพาะ การเติมคำใช้คำศัพท์ที่ปรากฏในประโยคตัวอย่าง การเรียงประโยคใช้วลี และการจับคู่จะตัดความหมายซ้ำออก')}</p></section>
  <section class="lh-panel ab-step"><div class="ab-step-title"><b>4</b><h3>${T('Choose feedback & start','เลือกการแสดงผลและเริ่ม')}</h3></div><fieldset class="ab-kind"><legend>${T('Feedback timing','เวลาที่แสดงผล')}</legend><label><input type="radio" name="abFeedback" value="practice" ${config.feedback==='practice'?'checked':''}>${T('Practice — after each answer','ฝึก — แสดงผลหลังตอบแต่ละข้อ')}</label><label><input type="radio" name="abFeedback" value="test" ${config.feedback==='test'?'checked':''} ${config.type==='match'?'disabled':''}>${T('Self-check — at the end','ตรวจสอบตนเอง — แสดงผลตอนจบ')}</label></fieldset>${config.type==='match'?`<p class="lh-caption">${T('Matching uses immediate feedback so you can complete the pairs. The first attempt determines the score.','การจับคู่แสดงผลทันทีเพื่อให้จับคู่จนครบ คะแนนขึ้นอยู่กับการตอบครั้งแรก')}</p>`:''}<div class="ab-summary"><b>${E(T(TYPES[config.type][0],TYPES[config.type][1]))}</b><span>${E(summaryModule?T(summaryModule.title,summaryModule.th):T('All modules','ทุกโมดูล'))} · ${E(config.count)} ${T('entries','รายการ')}</span></div><div id="abValidation" class="ab-validation ${v.ok?'valid':'invalid'}" role="status">${v.ok?T('Ready. Your selected number of unique targets will be used.','พร้อมแล้ว ระบบจะใช้รายการไม่ซ้ำตามจำนวนที่คุณกำหนด'):E(errors(v))}</div>${!v.ok&&v.available>0?`<button type="button" class="lh-link" data-ab="use-available">${T(`Use ${v.available} available entries`,`ใช้ ${v.available} รายการที่มี`)}</button>`:''}<button class="btn btn-gold btn-block ab-start" id="abStart" type="submit" ${v.ok?'':'disabled'}>${T('Start my assessment','เริ่มแบบฝึกของฉัน')} →</button><p class="lh-caption">${T('Distractors may use other entries from the same course. Results describe this practice set only, not a CEFR level, recruitment decision or official course pass.','ตัวลวงอาจมาจากรายการอื่นในหลักสูตรเดียวกัน ผลแสดงเฉพาะชุดฝึกนี้ ไม่ใช่ระดับ CEFR ผลการสมัครงาน หรือผลผ่านหลักสูตรอย่างเป็นทางการ')}</p></section></form>
  ${recent()}`;
 }
 function recent(){const attempts=Progress.assessmentAttempts().slice(-5).reverse();return attempts.length?`<section class="lh-panel"><h3>${T('Recent practice attempts','การฝึกครั้งล่าสุด')}</h3><div class="lh-weight-list">${attempts.map(a=>`<div><span>${E(T(TYPES[a.type]?.[0]||a.type,TYPES[a.type]?.[1]||a.type))}<small>${new Date(a.at).toLocaleString(I18N.current==='th'?'th-TH':'en-GB')} · ${a.supported?T('text-supported','มีข้อความช่วย'):T('unassisted','ไม่มีข้อความช่วย')}</small></span><b>${a.score}/${a.total}</b></div>`).join('')}</div><p class="lh-caption">${T('Each attempt is kept separately; lower later scores are not replaced by a previous best.','บันทึกแต่ละครั้งแยกกัน คะแนนครั้งหลังที่ต่ำกว่าไม่ถูกแทนด้วยคะแนนสูงสุดก่อนหน้า')}</p></section>`:'';}
 function open(module='all'){ensure();config={...defaults(),module};const p=M.pool(config);config.count=Math.min(10,p.length)||10;save();Nav.go('assess');}
 function start(custom=null){
  ensure();const c=custom||{...config,selected:[...config.selected]};if(c.type==='match')c.feedback='practice';
  const built=M.build(c,Progress.assessmentHistory());if(!built.ok){render();return;}
  session={config:c,questions:built.questions,index:0,answers:[],current:null,finished:false,batchIndex:0,batches:M.batches(built.questions),started:Date.now()};
  prepare();Nav.go('customplay');renderSession();
 }
 function prepare(){if(!session)return;const q=session.questions[session.index];session.current={answered:false,typed:'',tokens:q?.entry.en.trim().split(/\s+/)||[],order:[],chosen:[],played:false,supported:false,audioError:false};session.current.order=M.shuffle(session.current.tokens.map((_,i)=>i));if(session.current.order.length>1&&session.current.order.every((v,i)=>v===i))session.current.order.push(session.current.order.shift());if(session.config.type==='match')prepareMatch();}
 function prepareMatch(){const qs=session.batches[session.batchIndex]||[];session.match={qs,left:null,matched:[],tried:{},firstChoices:{},right:M.shuffle(qs.map(q=>q.entry.id)),notice:''};}
 function sessionHead(){return `<div class="lh-course-line"><span class="lh-eyebrow">${E(T(D.courses[session.config.course].title,D.courses[session.config.course].th))}</span><button class="lh-link" data-ab="exit">${T('Exit assessment','ออกจากแบบฝึก')}</button></div><h2>${E(T(TYPES[session.config.type][0],TYPES[session.config.type][1]))}</h2>`;}
 function questionPrompt(q){if(q.type==='listen')return T('Listen. Which English entry did you hear?','ฟัง คุณได้ยินคำศัพท์หรือวลีภาษาอังกฤษใด');if(q.type==='gap')return q.gap.prompt;return q.entry.th;}
 function renderSession(){
  const el=document.getElementById('customPlayRoot');if(!el||!session)return;
  if(session.finished){renderResults();return;}
  if(session.config.type==='match'){renderMatch();return;}
  const q=session.questions[session.index],s=session.current,answered=s.answered,a=session.answers[session.index];
  const gating=q.type==='listen'&&!s.played&&!s.supported;
  el.innerHTML=`${sessionHead()}<div class="ab-progress"><span>${session.index+1} / ${session.questions.length}</span><span>${T(TYPES[q.type][0],TYPES[q.type][1])}</span></div><progress max="${session.questions.length}" value="${session.index}"></progress><section class="ab-question lh-panel" data-question="${E(q.entry.id)}" data-type="${q.type}"><div class="lh-eyebrow">${q.type==='gap'?T('COMPLETE THE SENTENCE','เติมประโยคให้สมบูรณ์'):q.type==='listen'?T('LISTEN FIRST','ฟังก่อน'):T('THAI → ENGLISH','ภาษาไทย → ภาษาอังกฤษ')}</div><h3 lang="${q.type==='gap'?'en':'th'}">${E(questionPrompt(q))}</h3>${q.type==='type'?`<p class="lh-caption">${T('Recall the exact course entry. Capital letters and punctuation are ignored. This is not an open-ended translation task.','นึกคำศัพท์หรือวลีตามที่เรียน ไม่ตรวจความแตกต่างของตัวพิมพ์ใหญ่และเครื่องหมายวรรคตอน นี่ไม่ใช่การแปลแบบเปิด')}</p>`:''}${q.type==='listen'?`<div class="lh-actions"><button class="btn btn-outline" data-ab="audio">▷ ${T(s.played?'Replay':'Play audio',s.played?'ฟังอีกครั้ง':'เล่นเสียง')}</button><button class="lh-link" data-ab="transcript">${T('Use text instead (supported)','ใช้ข้อความแทน (มีตัวช่วย)')}</button></div>${s.supported?`<div class="ab-supported">${E(q.entry.en)}<p>${T('Text-supported item; not unassisted listening evidence.','ข้อนี้มีข้อความช่วย ไม่ใช่หลักฐานการฟังโดยไม่มีตัวช่วย')}</p></div>`:''}${s.audioError?`<p class="ab-validation invalid">${T('Audio was unavailable. Replay or choose the text-supported option.','เสียงไม่พร้อมใช้งาน ลองใหม่หรือเลือกใช้ข้อความช่วย')}</p>`:''}`:''}
  ${(q.type==='choice'||q.type==='listen')?`<div class="ab-options">${q.options.map((o,i)=>`<button data-ab="answer-choice" data-value="${E(o.id)}" ${answered||gating?'disabled':''} class="${answered&&a.given===o.id?'chosen':''}"><span>${String.fromCharCode(65+i)}</span>${E(o.en)}</button>`).join('')}</div>`:q.type==='order'?`<div class="ab-built" aria-live="polite">${s.chosen.length?s.chosen.map(i=>`<button data-ab="remove-token" data-value="${i}" ${answered?'disabled':''}>${E(s.tokens[i])} ×</button>`).join(''):T('Tap the words in order.','แตะคำตามลำดับ')}</div><div class="ab-token-bank">${s.order.map(i=>`<button data-ab="token" data-value="${i}" ${answered||s.chosen.includes(i)?'disabled':''}>${E(s.tokens[i])}</button>`).join('')}</div><button class="btn btn-outline" data-ab="check" ${answered||s.chosen.length!==s.tokens.length?'disabled':''}>${T('Submit answer','ส่งคำตอบ')}</button>`:`<label for="abTyped">${T('Your answer','คำตอบของคุณ')}</label><input id="abTyped" value="${E(s.typed)}" autocomplete="off" autocapitalize="off" spellcheck="false" ${answered?'disabled':''}><button class="btn btn-outline" data-ab="check" ${answered?'disabled':''}>${T('Submit answer','ส่งคำตอบ')}</button>`}
  ${answered?feedback(q,a):''}<button class="btn btn-gold btn-block" data-ab="next" ${answered?'':'disabled'}>${session.index+1===session.questions.length?T('See my results','ดูผลของฉัน'):T('Next item','ข้อถัดไป')} →</button></section><p class="lh-caption">${T('Switching language keeps your current answer. Leaving an unfinished assessment does not create a completed attempt.','การเปลี่ยนภาษาเก็บคำตอบปัจจุบันไว้ การออกจากแบบฝึกที่ยังไม่เสร็จจะไม่สร้างบันทึกการฝึกที่เสร็จแล้ว')}</p>`;
 }
 function feedback(q,a){
  if(session.config.feedback==='test')return `<div class="ab-feedback neutral" role="status">${T('Answer saved. Feedback will appear at the end.','บันทึกคำตอบแล้ว จะแสดงผลตอนจบ')}</div>`;
  return `<div class="ab-feedback ${a.correct?'right':'wrong'}" role="status"><strong>${a.correct?T('Correct.','ถูกต้อง'):T('Not yet. Review the model.','ยังไม่ถูกต้อง ทบทวนตัวอย่างคำตอบ')}</strong><p>${E(q.entry.en)}</p><p lang="th">${E(q.entry.th)}</p><p>${E(q.entry.description)}</p>${q.entry.example?`<blockquote>${E(q.entry.example)}</blockquote>`:''}</div>`;
 }
 function answer(given){
  if(!session||session.finished||session.current.answered)return;
  const q=session.questions[session.index],s=session.current;
  if(q.type==='listen'&&!s.played&&!s.supported)return;
  const correct=(q.type==='choice'||q.type==='listen')?given===q.entry.id:M.accepted(q,given);
  session.answers.push({id:q.entry.id,type:q.type,given,display:(q.type==='choice'||q.type==='listen')?(q.options.find(x=>x.id===given)?.en||given):given,correct,supported:s.supported});s.answered=true;renderSession();
 }
 function next(){if(!session?.current?.answered)return;if(session.index+1>=session.questions.length){finish();return;}session.index++;Speech.stop();prepare();renderSession();window.scrollTo(0,0);}
 function renderMatch(){
  const el=document.getElementById('customPlayRoot'),s=session.match,n=session.questions.length;
  el.innerHTML=`${sessionHead()}<div class="ab-progress"><span>${T('Pairs completed','คู่ที่ทำเสร็จ')} ${session.answers.length}/${n}</span><span>${T('First attempt counts','ให้คะแนนครั้งแรก')}</span></div><progress max="${n}" value="${session.answers.length}"></progress><section class="lh-panel"><p>${T('Select an English entry on the left, then its Thai meaning on the right. Use the keyboard or tap.','เลือกภาษาอังกฤษทางซ้าย แล้วเลือกความหมายภาษาไทยทางขวา ใช้แป้นพิมพ์หรือแตะได้')}</p><div class="ab-match"><div>${s.qs.map(q=>`<button data-ab="match-left" data-value="${E(q.entry.id)}" aria-pressed="${s.left===q.entry.id}" class="${s.left===q.entry.id?'selected':''} ${s.matched.includes(q.entry.id)?'done':''}" ${s.matched.includes(q.entry.id)?'disabled':''}>${E(q.entry.en)}${s.matched.includes(q.entry.id)?' ✓':''}</button>`).join('')}</div><div>${s.right.map(id=>{const q=s.qs.find(q=>q.entry.id===id);return `<button data-ab="match-right" data-value="${E(id)}" ${s.matched.includes(id)||!s.left?'disabled':''} class="${s.matched.includes(id)?'done':''}" lang="th">${E(q.entry.th)}${s.matched.includes(id)?' ✓':''}</button>`;}).join('')}</div></div><div class="ab-feedback neutral" role="status">${E(s.notice||T('Choose a word or phrase to begin.','เลือกคำศัพท์หรือวลีเพื่อเริ่ม'))}</div><button class="btn btn-gold btn-block" data-ab="match-next" ${s.matched.length===s.qs.length?'':'disabled'}>${session.batchIndex+1===session.batches.length?T('See my results','ดูผลของฉัน'):T('Next group of pairs','กลุ่มคู่ถัดไป')} →</button></section>`;
 }
 function matchRight(id){
  const s=session?.match;if(!s?.left||s.matched.includes(id))return;
  const target=s.left,correct=target===id;
  if(!(target in s.tried)){s.tried[target]=correct;s.firstChoices[target]=id;}
  if(correct){s.matched.push(target);session.answers.push({id:target,type:'match',given:s.firstChoices[target],display:D.entries[target].en+' → '+D.entries[s.firstChoices[target]].th,correct:s.tried[target],supported:false});s.left=null;s.notice=s.tried[target]?T('Matched on the first attempt.','จับคู่ถูกตั้งแต่ครั้งแรก'):T('Matched. This item stays in your review list because the first attempt was incorrect.','จับคู่ถูกแล้ว ข้อนี้ยังอยู่ในรายการทบทวนเพราะตอบครั้งแรกผิด');}
  else{s.notice=T('Not this pair. Try another meaning. The first attempt for this entry is recorded as incorrect.','คู่นี้ยังไม่ถูก ลองความหมายอื่น การตอบครั้งแรกของรายการนี้ถูกบันทึกว่าผิด');}
  renderMatch();
 }
 function finish(){
  if(!session||session.finished||session.answers.length!==session.questions.length)return;
  session.finished=true;Speech.stop();
  const score=session.answers.filter(a=>a.correct).length,supported=session.answers.some(a=>a.supported);
  session.result={at:Date.now(),type:session.config.type,module:session.config.module,category:session.config.category,kind:session.config.kind,feedback:session.config.feedback,score,total:session.questions.length,supported,answers:session.answers.map(a=>({...a}))};
  // Save only when still on the originating course. Never mix records after a course switch.
  if(Courses.currentId===session.config.course)Progress.recordAssessmentAttempt(session.result);
  reviewLimit=12;Nav.go('customresults');renderResults();
 }
 function renderResults(){
  const el=document.getElementById('customResultsRoot');if(!el||!session?.finished)return;
  const r=session.result,missed=session.answers.filter(a=>!a.correct),percent=Math.round(r.score/r.total*100);
  const cats={};session.answers.forEach(a=>{const e=D.entries[a.id];const c=cats[e.category]||(cats[e.category]={right:0,total:0,th:e.categoryTh});c.total++;if(a.correct)c.right++;});
  el.innerHTML=`<div class="lh-eyebrow">${T('PRACTICE RESULTS','ผลการฝึก')}</div><h2>${T('Here is what to review next','สิ่งที่ควรทบทวนต่อ')}</h2><div class="ab-result-summary"><div><b>${r.score}<small>/${r.total}</small></b><span>${T('correct','ตอบถูก')}</span></div><div><b>${percent}%</b><span>${r.supported?T('text-supported practice','การฝึกที่มีข้อความช่วย'):T('this attempt','การฝึกครั้งนี้')}</span></div><div><b>${missed.length}</b><span>${T('items to review','รายการที่ควรทบทวน')}</span></div></div><p class="lh-caption">${T('This is a practice result, not a course pass, CEFR result or pronunciation grade. Studied items and quiz accuracy are recorded separately.','นี่คือผลการฝึก ไม่ใช่ผลผ่านหลักสูตร ผล CEFR หรือคะแนนการออกเสียง บันทึกการเรียนแล้วแยกจากความถูกต้องในการตอบ')}</p><div class="lh-actions"><button class="btn btn-gold" data-ab="retry" ${missed.length?'':'disabled'}>${T('Retry missed items','ฝึกข้อที่ตอบผิดอีกครั้ง')} (${missed.length})</button><button class="btn btn-outline" data-ab="new">${T('Build another assessment','จัดแบบฝึกชุดใหม่')}</button><button class="lh-link" data-ab="back-lesson">${T('Back to learning','กลับไปเรียนรู้')}</button><button class="lh-link" data-ab="download">${T('Export this result (JSON)','ส่งออกผลครั้งนี้ (JSON)')}</button></div><section class="lh-panel"><h3>${T('Accuracy by category','ความถูกต้องแยกตามหมวด')}</h3><div class="lh-weight-list">${Object.entries(cats).map(([name,c])=>`<div><span>${E(T(name,c.th))}</span><b>${c.right}/${c.total}</b></div>`).join('')}</div></section><section class="lh-panel"><h3>${T('Answer review','ทบทวนคำตอบ')}</h3>${session.answers.slice(0,reviewLimit).map((a,i)=>{const e=D.entries[a.id];return `<details class="ab-review ${a.correct?'right':'wrong'}"><summary><span>${a.correct?'✓':'↺'} ${i+1}. ${E(e.en)}</span><span>${a.supported?T('Supported','มีตัวช่วย'):a.correct?T('Correct','ถูกต้อง'):T('Review','ทบทวน')}</span></summary><p>${T('Your answer','คำตอบของคุณ')}: ${E(a.display)}</p><p lang="th">${E(e.th)}</p><p>${E(e.description)}</p>${e.example?`<blockquote>${E(e.example)}<span class="lh-th">${E(e.exampleTh)}</span></blockquote>`:''}<button class="lh-link" data-lh-speak="${E(e.en)}">▷ ${T('Listen to model','ฟังตัวอย่าง')}</button></details>`;}).join('')}${session.answers.length>reviewLimit?`<button class="lh-link" data-ab="more-results">${T('Show more answers','แสดงคำตอบเพิ่ม')}</button>`:''}</section>`;
 }
 function rerender(){render();if(document.getElementById('screen-customplay')?.classList.contains('active'))renderSession();if(document.getElementById('screen-customresults')?.classList.contains('active'))renderResults();}
 function init(){
  document.addEventListener('submit',e=>{if(e.target.id==='assessmentConfig'){e.preventDefault();start();}});
  document.addEventListener('input',e=>{
   if(e.target.id==='abTyped'&&session)session.current.typed=e.target.value;
   if(e.target.id==='abCount'){config.count=e.target.value;save();const sy=window.scrollY;render();document.getElementById('abCount').focus({preventScroll:true});window.scrollTo(0,sy);}
  });
  document.addEventListener('keydown',e=>{if(e.target.id==='abTyped'&&e.key==='Enter'){e.preventDefault();answer(e.target.value);}});
  document.addEventListener('change',e=>{
   const el=e.target;ensure();let changed=true;
   if(el.id==='abModule'){config.module=el.value;config.category='all';config.selected=[];}
   else if(el.id==='abCategory'){config.category=el.value;config.selected=[];}
   else if(el.id==='abCount')changed=false;
   else if(el.id==='abScope')config.scope=el.value;
   else if(el.name==='abKind'){config.kind=el.value;config.category='all';config.selected=[];}
   else if(el.name==='abType'){config.type=el.value;if(config.type==='match')config.feedback='practice';}
   else if(el.name==='abFeedback')config.feedback=el.value;
   else if(el.name==='abEntry'){const set=new Set(config.selected);if(el.checked)set.add(el.value);else set.delete(el.value);config.selected=[...set];}
   else changed=false;
   if(changed){const sy=window.scrollY;save();render();window.scrollTo(0,sy);}
  });
  document.addEventListener('click',e=>{
   const b=e.target.closest('[data-ab]');if(!b)return;const action=b.dataset.ab;
   if(action==='switch')App.showCourseChooser({cancellable:true});
   if(action==='count'){config.count=Number(b.dataset.count);save();render();}
   if(action==='select-all'){config.selected=M.pool(config).map(e=>e.id);save();render();}
   if(action==='select-none'){config.selected=[];save();render();}
   if(action==='use-available'){config.count=M.select(config,Progress.assessmentHistory()).length;save();render();}
   if(action==='answer-choice')answer(b.dataset.value);
   if(action==='check'){if(!session?.current?.answered)answer(session.questions[session.index].type==='order'?session.current.chosen.map(i=>session.current.tokens[i]).join(' '):session.current.typed);}
   if(action==='next')next();
   if(action==='token'&&!session.current.answered){const i=Number(b.dataset.value);if(!session.current.chosen.includes(i))session.current.chosen.push(i);renderSession();}
   if(action==='remove-token'&&!session.current.answered){session.current.chosen=session.current.chosen.filter(i=>i!==Number(b.dataset.value));renderSession();}
   if(action==='audio'){
    const ref=session,cur=ref.current,q=ref.questions[ref.index];Speech.speak(q.entry.en,{rate:App.speechRate(),onend(){if(session===ref&&session.current===cur){cur.played=true;cur.audioError=false;renderSession();}},onerror(){if(session===ref&&session.current===cur){cur.audioError=true;renderSession();}}});
   }
   if(action==='transcript'){session.current.supported=true;renderSession();}
   if(action==='exit'){if(window.confirm(T('Leave this unfinished assessment? It will not be recorded as a completed attempt.','ออกจากแบบฝึกที่ยังไม่เสร็จหรือไม่? จะไม่บันทึกว่าเป็นการฝึกที่เสร็จแล้ว'))){session=null;Speech.stop();Nav.go('assess');}}
   if(action==='match-left'){if(!session.match.matched.includes(b.dataset.value))session.match.left=b.dataset.value;renderMatch();}
   if(action==='match-right')matchRight(b.dataset.value);
   if(action==='match-next'){if(session.match.matched.length!==session.match.qs.length)return;if(session.batchIndex+1===session.batches.length)finish();else{session.batchIndex++;prepareMatch();renderMatch();}}
   if(action==='new')Nav.go('assess');
   if(action==='back-lesson')LearningHub.open(session.config.module==='all'?null:session.config.module);
   if(action==='retry'){
    const ids=session.answers.filter(a=>!a.correct).map(a=>a.id);if(!ids.length)return;
    const c={...session.config,scope:'selected',selected:ids,count:ids.length,feedback:'practice'};
    if(c.type==='match'&&ids.length<2)c.type='choice';start(c);
   }
   if(action==='more-results'){reviewLimit+=20;renderResults();}
   if(action==='download'){
    const blob=new Blob([JSON.stringify({course:session.config.course,...session.result},null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='nimman-practice-result.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
   }
  });
 }
 // Read-only debug snapshots support automated checks without changing assessment state.
 function inspect(){return session?JSON.parse(JSON.stringify(session)):null;}
 return {init,render,rerender,open,start,renderSession,renderResults,inspect,get config(){ensure();return {...config,selected:[...config.selected]};}};
})();
