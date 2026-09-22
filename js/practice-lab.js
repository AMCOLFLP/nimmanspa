/* ======================================================================
   PRACTICE LAB — balanced quiz banks, bilingual feedback and mistake review.
   No new network dependency. TTS continues to use the app's Speech module.
   Session scores are first-attempt practice scores, never CEFR certification.
   ====================================================================== */
const Practice = (() => {
  const T=(en,th)=>I18N.current==='th'?th:en;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const plain=v=>String(v||'').replace(/<[^>]+>/g,'');
  const normal=v=>String(v||'').normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[^\p{L}\p{N}'\s]/gu,' ').replace(/\s+/g,' ').trim();
  const titles={mc:['Workplace English quiz','แบบทดสอบภาษาอังกฤษในงาน'],definition:['Vocabulary meaning','ความหมายคำศัพท์'],fill:['Complete the conversation','เติมบทสนทนา'],listen:['Hear the word','ฟังและเลือกคำศัพท์'],builder:['Build a useful sentence','เรียงคำเป็นประโยค'],truefalse:['True or false','ถูกหรือผิด'],errorfix:['Correct the sentence','แก้ประโยคให้ถูกต้อง'],scenario:['What would you say?','คุณจะตอบว่าอย่างไร'],reading:['Read the workplace message','อ่านข้อความในที่ทำงาน'],listenRespond:['Listen & respond','ฟังและเลือกคำตอบ'],order:['Order the conversation','เรียงลำดับบทสนทนา'],context:['Word in context','เติมคำศัพท์ตามบริบท'],review:['Review my mistakes','ทบทวนข้อที่ตอบผิด']};
  const dataKeys={mc:'mc',truefalse:'tf',errorfix:'error',listen:'listen',builder:'builder',fill:'dialogues',scenario:'scenario',reading:'readings',listenRespond:'listenRespond',order:'order',context:'context'};
  let session=null,lastSession=null,bound=false;
  function title(kind){const x=titles[kind]||titles.mc;return T(...x);}
  function levelName(n){return n===1?T('Starter','เริ่มต้น'):n===3?T('Extended','ต่อยอด'):T('Everyday','ใช้ในชีวิตการทำงาน');}
  function data(){return PRACTICE_CONTENT[Courses.currentId];}
  function settings(){return Progress.practiceSettings();}
  function filtered(items){const p=settings();return items.filter(x=>p.level==='all'||String(x.level||2)===p.level);}
  function take(items,n=settings().length,filter=true){
    const history=Progress.practiceHistory();
    const pool=shuffle(filter?filtered(items):items);
    // Prefer unseen items, then the least recently attempted. Ties stay random.
    pool.sort((a,b)=>(history[a.id]?.lastSeen||0)-(history[b.id]?.lastSeen||0));
    return pool.slice(0,Math.min(n,pool.length));
  }
  function defs(){
    return VOCAB.map(v=>{
      const candidates=shuffle(VOCAB.filter(o=>o.id!==v.id&&normal(o.short)!==normal(v.short)));
      const same=candidates.filter(o=>o.cat===v.cat),other=candidates.filter(o=>o.cat!==v.cat);
      const distractors=[...same,...other].slice(0,3);
      return {id:`${Courses.currentId}-definition-${v.id}`,q:T('Which word matches this meaning?','คำใดตรงกับความหมายนี้'),context:v.short,options:[v.word,...distractors.map(o=>o.word)],correct:0,explain:`${v.word}: ${v.def}`,explainTh:v.th,level:v.level,topic:'vocabulary',vocabularyId:v.id};
    });
  }
  function adapt(item,kind,extra={}){
    const q={...item,...extra,kind,sourceActivity:kind,type:'choice'};
    q.explain=plain(item.explain||item.why||item.hit||item.miss||item.feedback||'');
    q.explainTh=item.explainTh||item.feedbackTh||'';
    if(kind==='truefalse'){q.q=item.statement;q.options=['True','False'];q.correct=item.answer?0:1;}
    if(kind==='errorfix'){q.q=T('Choose the correct or most appropriate rewrite.','เลือกประโยคที่แก้ไขถูกต้องหรือเหมาะสมที่สุด');q.context=item.wrong;}
    if(kind==='listen'){q.q=T('Listen and choose the word you hear.','ฟังและเลือกคำที่ได้ยิน');q.audioText=item.target;q.options=[item.target,...item.distractors];q.correct=0;const v=VOCAB.find(v=>normal(v.word)===normal(item.target));q.explain=q.explain||(v?v.def:'Recognise the spoken term.');q.explainTh=q.explainTh||(v?v.th:'');}
    if(kind==='builder'){q.type='builder';q.q=T('Build the model sentence for this Thai meaning.','เรียงคำให้เป็นประโยคตามความหมายภาษาไทย');q.context=item.th;q.answer=item.sentence;}
    if(kind==='context'){q.type='text';q.q=item.sentence;}
    if(kind==='order'){q.type='order';q.q=T('The opening is fixed. Arrange the next three turns to continue the conversation.','กำหนดประโยคเริ่มต้นให้แล้ว เรียงสามข้อความถัดไปให้เป็นบทสนทนาที่ต่อเนื่อง');}
    if(q.options){q.correctText=q.options[q.correct];}
    return q;
  }
  function readingItems(passages){
    return passages.flatMap(p=>p.questions.map(q=>adapt(q,'reading',{passage:p.passage,passageTh:p.passageTh,passageTitle:p.title,passageTitleTh:p.titleTh,readingId:p.id,trainingExample:true})));
  }
  function dialogueItems(d){
    return d.lines.flatMap((line,index)=>line.fixed?[]:[adapt({
      ...line,id:line.id||`${Courses.currentId}-dialogue-${d.id}-${index+1}`,q:T('Choose the word that completes this turn.','เลือกคำที่เติมในข้อความนี้ได้เหมาะสม'),correct:line.options.indexOf(line.correct),explain:line.feedback||`Complete response: ${line.before}${line.correct}${line.after}`,explainTh:line.feedbackTh||line.th||'',level:d.level||2,topic:d.topic||'communication'
    },'fill',{dialogue:d,lineIndex:index,correctWord:line.correct,dialogueId:d.id})]);
  }
  function bank(kind){
    if(kind==='definition')return defs().map(q=>adapt(q,kind));
    if(kind==='reading')return readingItems(data().readings);
    if(kind==='fill')return data().dialogues.flatMap(dialogueItems);
    const items=data()[dataKeys[kind]]||[];
    return items.map(q=>adapt(q,kind));
  }
  function allQuestions(){return Object.keys(dataKeys).flatMap(kind=>bank(kind)).concat(bank('definition'));}
  function reviewCount(){return Object.values(Progress.practiceHistory()).filter(x=>x.needsReview).length;}
  function cardMeta(kind){
    let total,available,unit=T('items','รายการ');
    if(kind==='definition'){total=VOCAB.length;available=filtered(VOCAB).length;unit=T('vocabulary prompts','โจทย์คำศัพท์');}
    else if(dataKeys[kind]){const b=data()[dataKeys[kind]];total=b.length;available=filtered(b).length;if(kind==='fill')unit=T('dialogues','บทสนทนา');if(kind==='reading')unit=T('passages · 3 questions each','บทอ่าน · บทละ 3 คำถาม');}
    else return '';
    return `<div class="px-card-meta">${total} ${esc(unit)}${settings().level==='all'?'':`<span>${available} ${T('at selected level','ในระดับที่เลือก')}</span>`}</div>`;
  }
  function renderControls(){
    const el=document.getElementById('practiceControls');if(!el||!Courses.active)return;
    const p=settings(),count=reviewCount();
    el.innerHTML=`<div class="px-settings"><div class="px-eyebrow">${T('YOUR PRACTICE SESSION','ตั้งค่าการฝึก')}</div><div class="px-setting-grid"><label for="pxLength">${T('Items per session','จำนวนข้อต่อรอบ')}<select id="pxLength">${[5,10,15,20].map(n=>`<option value="${n}" ${p.length===n?'selected':''}>${n} ${T('items','ข้อ')}</option>`).join('')}</select></label><label for="pxLevel">${T('Difficulty','ระดับความยาก')}<select id="pxLevel"><option value="all">${T('All levels','ทุกระดับ')}</option>${[1,2,3].map(n=>`<option value="${n}" ${p.level===String(n)?'selected':''}>${levelName(n)}</option>`).join('')}</select></label></div><p class="px-small">${T('Settings apply to the quiz and real-world activity cards below. Reading keeps complete three-question passages together; dialogue length follows the selected conversation. Levels are editorial, not CEFR certification.','ใช้การตั้งค่านี้กับแบบทดสอบและกิจกรรมสถานการณ์ด้านล่าง บทอ่านจะคงชุดคำถามบทละสามข้อ และบทสนทนาใช้จำนวนข้อตามเรื่อง ระดับนี้เป็นการจัดเพื่อการเรียน ไม่ใช่การรับรอง CEFR')}</p><button class="btn btn-outline btn-block" id="pxReviewStart" ${count?'':'disabled'}>${T('Review my mistakes','ทบทวนข้อที่ตอบผิด')} <span class="px-badge">${count}</span></button><p class="px-small">${T('Review combines missed items from this course across all levels. Guest progress lasts only for this session.','การทบทวนรวมข้อที่ตอบผิดทุกระดับในวิชานี้ ความคืบหน้าของผู้เยี่ยมชมอยู่เฉพาะการใช้งานครั้งนี้')}</p></div>`;
  }
  function openDialogues(){
    Nav.go('fillquiz');document.getElementById('fillPicker').style.display='block';document.getElementById('fillPlay').style.display='none';
    const ds=filtered(data().dialogues),el=document.getElementById('fillDialogueList');
    el.innerHTML=ds.length?ds.map(d=>`<button type="button" class="menu-row px-dialogue-row" data-dialogue="${esc(d.id)}"><span class="menu-body"><h4>${esc(I18N.current==='th'?d.th:d.title)}</h4><p>${d.lines.filter(l=>!l.fixed).length} ${T('blanks','ช่องว่าง')} · ${levelName(d.level||2)}</p><p class="gloss-inline">${esc(I18N.current==='th'?d.title:d.th)}</p></span><span aria-hidden="true">→</span></button>`).join(''):`<p class="px-empty">${T('No dialogue at this level. Choose another level in Practice settings.','ไม่มีบทสนทนาในระดับนี้ กรุณาเปลี่ยนระดับที่หน้าการฝึก')}</p>`;
  }
  function startDialogue(id){const d=data().dialogues.find(x=>x.id===id);if(d)begin('fill',dialogueItems(d),{dialogueId:id,dialogueTitle:d.title,dialogueTitleTh:d.th});}
  function start(kind){
    if(kind==='fill'){openDialogues();return;}
    if(kind==='review'){
      const h=Progress.practiceHistory();begin('review',take(allQuestions().filter(q=>h[q.id]?.needsReview),settings().length,false));return;
    }
    if(kind==='reading'){
      const count=Math.max(1,Math.floor(settings().length/3));
      const history=Progress.practiceHistory();
      const passages=shuffle(filtered(data().readings)).sort((a,b)=>Math.max(...a.questions.map(q=>history[q.id]?.lastSeen||0))-Math.max(...b.questions.map(q=>history[q.id]?.lastSeen||0)));
      begin(kind,readingItems(passages.slice(0,count)));return;
    }
    begin(kind,take(bank(kind)));
  }
  function begin(activity,items,extra={}){
    session={activity,items:items.map(q=>({...q})),course:Courses.currentId,level:settings().level,index:0,score:0,answers:[],finished:false,...extra};
    Nav.go('practiceplay');prepare();render();
  }
  function prepare(){
    if(!session||session.index>=session.items.length)return;
    const q=session.items[session.index];
    session.current={answered:false,chosen:null,typed:'',placed:[],assisted:false,transcript:false,played:false};
    if(q.type==='choice')session.current.options=shuffle(q.options.map((text,index)=>({text,correct:index===q.correct})));
    if(q.type==='builder'){
      session.current.tokens=q.sentence.replace(/[.?!]$/,'').split(/\s+/);
      session.current.order=shuffle(session.current.tokens.map((_,i)=>i));
    }
    if(q.type==='order'){
      session.current.tokens=q.turns.map(t=>`${t.speaker}: ${t.text}`);
      session.current.order=shuffle(session.current.tokens.map((_,i)=>i));
    }
    const cur=session.current;
    if(cur.order&&cur.order.every((x,i)=>x===i)&&cur.order.length>1)cur.order.push(cur.order.shift());
  }
  function expected(q){
    if(q.type==='builder')return q.sentence;
    if(q.type==='text')return q.answer;
    if(q.type==='order')return q.turns.map(t=>`${t.speaker}: ${t.text}`).join('\n');
    return q.correctText;
  }
  function dialogueHTML(q,answered){
    const d=q.dialogue;
    let limit=q.lineIndex;
    if(answered)while(limit+1<d.lines.length&&d.lines[limit+1].fixed)limit++;
    return `<div class="px-script">${d.lines.slice(0,limit+1).map((l,i)=>{
      const completed=l.fixed?l.before:(l.before+(i===q.lineIndex&&!answered?'_____':l.correct)+l.after);
      return `<div class="px-turn ${i===q.lineIndex?'px-current-turn':''}"><span class="px-speaker">${esc(l.speaker)}</span><p>${esc(completed)}</p>${(l.fixed||i<q.lineIndex||answered)&&l.th?`<p class="px-th" lang="th">${esc(l.th)}</p>`:''}</div>`;
    }).join('')}</div>`;
  }
  function render(){
    if(!session)return;
    const stage=document.getElementById('pxStage');
    document.getElementById('pxTitle').textContent=title(session.activity);
    if(!session.items.length){stage.innerHTML=`<div class="px-empty"><h3>${T('Nothing in this set yet','ยังไม่มีรายการในชุดนี้')}</h3><p>${T('There are no matching items. Change the difficulty, or complete an activity to build your review list.','ไม่มีรายการตรงตามเงื่อนไข เปลี่ยนระดับ หรือทำกิจกรรมเพื่อสร้างรายการทบทวน')}</p><button class="btn btn-gold" data-px="back">${T('Back to practice','กลับหน้าการฝึก')}</button></div>`;return;}
    const q=session.items[session.index],cur=session.current,n=session.items.length;
    stage.dataset.questionId=q.id;stage.dataset.kind=q.sourceActivity;stage.dataset.type=q.type;
    let html=`<div class="px-progress-line"><span>${T('Question','ข้อ')} ${session.index+1} / ${n}</span><strong>${session.score} ${T('correct','ข้อถูก')}</strong></div><progress class="px-progress" value="${session.index+(cur.answered?1:0)}" max="${n}" aria-label="${T('Session progress','ความคืบหน้าการฝึก')}"></progress><div class="px-tags"><span>${levelName(q.level||2)}</span><span>${esc(title(q.sourceActivity))}</span>${q.trainingExample||q.passage||q.dialogue?`<span>${T('Fictional training example','ตัวอย่างสมมติสำหรับฝึก')}</span>`:''}</div>`;
    if(q.passage)html+=`<article class="px-passage"><div class="px-eyebrow">${T('READ THE MESSAGE','อ่านข้อความ')}</div><h3>${esc(I18N.current==='th'?q.passageTitleTh:q.passageTitle)}</h3><p lang="en">${esc(q.passage)}</p><small>${T('Use only this message to answer. Times, prices and locations are examples.','ตอบจากข้อความนี้เท่านั้น เวลา ราคา และสถานที่เป็นตัวอย่าง')}</small></article>`;
    if(q.dialogue)html+=`<h3 class="px-subtitle">${esc(I18N.current==='th'?q.dialogue.th:q.dialogue.title)}</h3>${dialogueHTML(q,cur.answered)}`;
    if(q.type==='order')html+=`<div class="px-fixed-turn"><div class="px-eyebrow">${T('OPENING — ALREADY IN PLACE','ข้อความเริ่มต้นที่กำหนดให้')}</div><strong>${esc(q.opening.speaker)}</strong><p>${esc(q.opening.text)}</p></div>`;
    html+=`<h3 class="px-question" id="pxQuestion">${esc(q.q)}</h3>`;
    if(q.context)html+=`<div class="px-context" ${q.type==='builder'?'lang="th"':''}>${esc(q.context)}</div>`;
    if(q.audioText){
      html+=`<div class="px-audio"><button type="button" class="btn btn-gold" data-px="audio">${T('▶ Play / replay','▶ ฟัง / ฟังซ้ำ')}</button><button type="button" class="btn btn-outline" data-px="transcript" ${cur.answered?'disabled':''}>${T('Show transcript','ดูข้อความเสียง')}</button><p class="px-small">${T('Choose a reply after listening. Showing the transcript or answering without pressing Play records supported practice. Voice availability depends on your browser.','ฟังก่อนเลือกคำตอบ การเปิดข้อความหรือเลือกก่อนกดฟังจะบันทึกเป็นการฝึกแบบมีตัวช่วย เสียงขึ้นอยู่กับเบราว์เซอร์')}</p>${cur.transcript||cur.answered?`<div class="px-transcript"><strong>${T('Transcript','ข้อความเสียง')}</strong><p lang="en">${esc(q.audioText)}</p>${q.audioTextTh?`<p lang="th">${esc(q.audioTextTh)}</p>`:''}</div>`:''}</div>`;
    }
    if(q.type==='choice'){
      html+=`<div class="px-options" role="group" aria-labelledby="pxQuestion">${cur.options.map((o,i)=>{
        const mark=cur.answered?(o.correct?' is-correct':cur.chosen===i?' is-wrong':''):'';
        return `<button type="button" class="q-option${mark}" data-px="choice" data-value="${i}" ${cur.answered?'disabled':''}><span class="opt-mark">${String.fromCharCode(65+i)}</span><span>${esc(q.kind==='truefalse'?(o.text==='True'?T('True','ถูก'):T('False','ผิด')):o.text)}</span>${cur.answered&&o.correct?`<span class="px-answer-mark">${T('Correct','ถูกต้อง')}</span>`:''}</button>`;
      }).join('')}</div>`;
    }else if(q.type==='text'){
      const length=[...q.answer].filter(c=>/\p{L}/u.test(c)).length;
      html+=`<div class="px-clue"><p>${esc(q.hint)}</p><small>${T('Target word starts with','คำเป้าหมายขึ้นต้นด้วย')} <b>${esc(q.answer[0])}</b> · ${length} ${T('letters','ตัวอักษร')}</small><details><summary>${T('Thai meaning support','ดูคำอธิบายภาษาไทย')}</summary><p lang="th">${esc(q.hintTh)}</p></details></div><form id="pxAnswerForm"><label class="px-input-label" for="pxTyped">${T('Type the missing word','พิมพ์คำที่หายไป')}</label><input id="pxTyped" class="px-input" type="text" value="${esc(cur.typed)}" autocomplete="off" autocorrect="off" spellcheck="false" autocapitalize="none" ${cur.answered?'disabled':''}><button type="submit" class="btn btn-gold btn-block" id="pxCheck" ${cur.answered||!cur.typed.trim()?'disabled':''}>${T('Check answer','ตรวจคำตอบ')}</button></form><p class="px-small">${T('Upper/lower case and surrounding punctuation are ignored. Accepted spelling variants are checked, not fuzzy guesses.','ไม่แยกตัวพิมพ์ใหญ่–เล็ก และไม่คิดเครื่องหมายรอบคำ รองรับรูปสะกดที่กำหนดไว้ ไม่เดาคำจากความคล้าย')}</p>`;
    }else{
      const sequence=q.type==='order';
      html+=`<p class="px-small">${sequence?T('Tap the turns in order. Tap a placed turn to remove it.','แตะข้อความตามลำดับ แตะข้อความที่วางแล้วเพื่อนำออก'):T('Tap words to build the model. Tap a placed word to put it back.','แตะคำเพื่อเรียงประโยค แตะคำที่วางแล้วเพื่อนำกลับ')}</p><div class="px-assembly ${sequence?'px-sequence':''}" aria-label="${T('Your answer','คำตอบของคุณ')}">${cur.placed.length?cur.placed.map((id,pos)=>`<button type="button" class="px-token placed" data-px="remove" data-value="${pos}" ${cur.answered?'disabled':''}>${sequence?`<b>${pos+2}.</b> `:''}${esc(cur.tokens[id])}</button>`).join(''):`<span class="px-placeholder">${T('Your answer will appear here','คำตอบจะแสดงที่นี่')}</span>`}</div><div class="px-token-bank ${sequence?'px-sequence':''}">${cur.order.map(id=>`<button type="button" class="px-token ${cur.placed.includes(id)?'spent':''}" data-px="place" data-value="${id}" ${cur.answered||cur.placed.includes(id)?'disabled':''}>${esc(cur.tokens[id])}</button>`).join('')}</div><div class="px-build-actions"><button type="button" class="btn btn-outline" data-px="clear" ${cur.answered?'disabled':''}>${T('Clear','ล้างคำตอบ')}</button><button type="button" class="btn btn-gold" data-px="check" ${cur.answered||cur.placed.length!==cur.tokens.length?'disabled':''}>${T('Check answer','ตรวจคำตอบ')}</button></div>`;
    }
    if(cur.answered){
      const a=session.answers[session.answers.length-1];
      html+=`<div class="px-feedback ${a.correct?'right':'wrong'}" role="status"><h4>${a.correct?T('Correct — well done!','ถูกต้อง — ทำได้ดี!'):T('Not yet — learn from this answer','ยังไม่ถูก — มาดูคำตอบกัน')}</h4><div class="px-model"><strong>${T('Model answer','คำตอบตัวอย่าง')}</strong><p>${esc(a.expected).replace(/\n/g,'<br>')}</p></div><p>${esc(a.explain)}</p>${a.explainTh?`<p class="px-th" lang="th">${esc(a.explainTh)}</p>`:''}${a.assisted?`<p class="px-small">${T('Supported practice: transcript opened or no playback requested.','การฝึกแบบมีตัวช่วย: เปิดข้อความเสียงหรือยังไม่ได้กดฟัง')}</p>`:''}${q.passageTh?`<details><summary>${T('Read the message in Thai','อ่านบทความภาษาไทย')}</summary><p lang="th">${esc(q.passageTh)}</p></details>`:''}</div><button class="btn btn-gold btn-block px-next" data-px="next">${session.index===n-1?T('See results & review','ดูผลและทบทวน'):T('Next question','ข้อถัดไป')}</button>`;
    }
    stage.innerHTML=html;
  }
  function grade(choice){
    if(!session||!session.current||session.current.answered||session.course!==Courses.currentId)return;
    const q=session.items[session.index],cur=session.current;let value,correct;
    if(q.type==='choice'){
      if(!Number.isInteger(choice)||!cur.options[choice])return;
      cur.chosen=choice;value=cur.options[choice].text;correct=cur.options[choice].correct;
    }else if(q.type==='text'){
      if(!cur.typed.trim())return;value=cur.typed;correct=(q.accepted||[q.answer]).some(v=>normal(v)===normal(value));
    }else{
      if(cur.placed.length!==cur.tokens.length)return;
      value=cur.placed.map(i=>cur.tokens[i]).join(q.type==='order'?'\n':' ');
      correct=q.type==='order'?cur.placed.every((id,i)=>id===i):[q.sentence,...(q.alternatives||[])].some(s=>normal(s)===normal(value));
    }
    if(q.audioText&&!cur.played)cur.assisted=true;
    cur.answered=true;if(correct)session.score++;
    const entry={id:q.id,sourceActivity:q.sourceActivity,prompt:q.type==='builder'?q.th:q.type==='order'?q.title:q.dialogue?`${q.before}_____${q.after}`:q.q,context:q.passage||q.context||q.audioText||'',chosen:value,expected:expected(q),correct,assisted:cur.assisted,explain:q.explain||T('Use the model to practise the complete response.','ฝึกตอบโดยใช้ประโยคตัวอย่าง'),explainTh:q.explainTh||'',question:{...q}};
    session.answers.push(entry);Progress.recordPracticeAnswer(q.id,q.sourceActivity,correct,cur.assisted);
    render();document.querySelector('#pxStage .px-feedback')?.scrollIntoView({block:'nearest',behavior:'smooth'});
  }
  function next(){
    if(!session?.current?.answered||session.finished)return;
    Speech.stop();session.index++;
    if(session.index>=session.items.length){finish();return;}
    prepare();render();window.scrollTo(0,0);
  }
  function finish(){
    if(!session||session.finished||!session.items.length)return;session.finished=true;
    const assisted=session.answers.filter(a=>a.assisted).length;
    const key=session.activity==='fill'?`fill_${session.dialogueId}`:session.activity;
    Progress.recordQuizResult(assisted?`${key}_supported`:key,Math.round(100*session.score/session.items.length));
    Progress.recordPracticeSession({activity:session.activity,score:session.score,total:session.items.length,assisted,level:session.level});
    lastSession={...session,assisted,answers:[...session.answers]};
    App.showResults(session.score,session.items.length,title(session.activity),{practiceSession:lastSession,extraNote:assisted?T(`${assisted} item(s) used transcript support or were answered without pressing Play; saved separately as supported practice.`,`${assisted} ข้อใช้ข้อความช่วยหรือยังไม่ได้กดฟัง จึงบันทึกแยกเป็นการฝึกแบบมีตัวช่วย`):T('This is a first-attempt practice score, not a proficiency certificate.','คะแนนนี้เป็นการฝึกจากคำตอบครั้งแรก ไม่ใช่ใบรับรองความสามารถ')});
  }
  function renderResults(snapshot){
    const el=document.getElementById('practiceResults');if(!el)return;
    if(!snapshot||snapshot.course!==Courses.currentId){lastSession=null;el.innerHTML='';return;}
    lastSession=snapshot;const misses=snapshot.answers.filter(a=>!a.correct);
    el.innerHTML=`<div class="px-results"><h3>${T('Understand your answers','ทำความเข้าใจคำตอบ')}</h3><p>${T('The score above is unchanged by a retry. Review shows your first answer, the model and the reason.','การลองใหม่ไม่เปลี่ยนคะแนนรอบแรก รายการทบทวนแสดงคำตอบเดิม คำตอบตัวอย่าง และเหตุผล')}</p><div class="px-result-actions"><button class="btn btn-gold" data-px-result="retry" ${misses.length?'':'disabled'}>${T('Retry missed items','ลองใหม่เฉพาะข้อผิด')} (${misses.length})</button><button class="btn btn-outline" data-px-result="fresh">${T('New practice set','ฝึกชุดใหม่')}</button></div><div class="px-review-list">${snapshot.answers.map((a,i)=>`<details class="px-review-item ${a.correct?'right':'wrong'}"><summary><span>${a.correct?'✓':'↻'} ${i+1}.</span> ${esc(a.prompt)} ${a.assisted?`<small>${T('Supported','มีตัวช่วย')}</small>`:''}</summary>${a.context?`<p class="px-small">${esc(a.context)}</p>`:''}<p><b>${T('Your answer','คำตอบของคุณ')}:</b> ${esc(a.chosen).replace(/\n/g,'<br>')}</p><p><b>${T('Model answer','คำตอบตัวอย่าง')}:</b> ${esc(a.expected).replace(/\n/g,'<br>')}</p><p>${esc(a.explain)}</p>${a.explainTh?`<p lang="th" class="px-th">${esc(a.explainTh)}</p>`:''}</details>`).join('')}</div><p class="px-small">${T('Review and listening tasks reuse taught vocabulary. A correct assisted answer does not clear an earlier mistake from the review list.','กิจกรรมทบทวนและการฟังนำคำศัพท์ที่เรียนแล้วกลับมาฝึก คำตอบถูกที่มีตัวช่วยจะไม่ลบข้อผิดเดิมออกจากรายการทบทวน')}</p></div>`;
  }
  function handle(e){
    const btn=e.target.closest('[data-px]');if(!btn)return;const action=btn.dataset.px;
    if(action==='back'){Nav.go('assess');return;}
    if(!session?.current)return;
    const cur=session.current,q=session.items[session.index];
    if(action==='next'){next();return;}
    if(action==='audio'){
      cur.played=true;Speech.speak(q.audioText,{rate:App.speechRate(),onerror(){
        if(session?.current!==cur||cur.answered)return;
        cur.played=false;cur.assisted=true;cur.transcript=true;render();
      }});btn.textContent=T('↻ Replay audio','↻ ฟังซ้ำ');return;
    }
    if(action==='transcript'&&!cur.answered){cur.transcript=true;cur.assisted=true;render();return;}
    if(cur.answered)return;
    const value=Number(btn.dataset.value);
    if(action==='choice'){grade(value);return;}
    if(action==='place'&&cur.tokens[value]!==undefined&&!cur.placed.includes(value)){cur.placed.push(value);render();}
    if(action==='remove'&&Number.isInteger(value)){cur.placed.splice(value,1);render();}
    if(action==='clear'){cur.placed=[];render();}
    if(action==='check')grade();
  }
  function rerender(){
    if(document.getElementById('screen-practiceplay')?.classList.contains('active'))render();
    if(document.getElementById('screen-results')?.classList.contains('active'))renderResults(lastSession);
    if(document.getElementById('screen-fillquiz')?.classList.contains('active')&&document.getElementById('fillPicker').style.display!=='none')openDialogues();
  }
  function init(){
    if(bound)return;bound=true;
    document.getElementById('practiceControls').addEventListener('change',()=>{Progress.setPracticeSettings({length:document.getElementById('pxLength').value,level:document.getElementById('pxLevel').value});App.renderAssessHub();});
    document.getElementById('practiceControls').addEventListener('click',e=>{if(e.target.closest('#pxReviewStart'))start('review');});
    const stage=document.getElementById('pxStage');stage.addEventListener('click',handle);
    stage.addEventListener('input',e=>{if(e.target.id==='pxTyped'&&session?.current&&!session.current.answered){session.current.typed=e.target.value;document.getElementById('pxCheck').disabled=!e.target.value.trim();}});
    stage.addEventListener('submit',e=>{if(e.target.id==='pxAnswerForm'){e.preventDefault();grade();}});
    document.getElementById('practiceResults').addEventListener('click',e=>{
      const b=e.target.closest('[data-px-result]');if(!b||!lastSession||lastSession.course!==Courses.currentId)return;
      if(b.dataset.pxResult==='retry'){const missed=lastSession.answers.filter(a=>!a.correct).map(a=>a.question);if(missed.length)begin('review',missed);}
      if(b.dataset.pxResult==='fresh'){if(lastSession.activity==='fill')startDialogue(lastSession.dialogueId);else start(lastSession.activity);}
    });
  }
  return {init,start,startDialogue,openDialogues,renderControls,cardMeta,renderResults,rerender,reviewCount,normal};
})();

// Keep the existing hub and translations; add four task types as a new group.
Object.assign(UI_STRINGS.en,{
  coachHigh:'Strong practice result. Explain your choices, then try a fresh set or practise the exchange with a partner.',
  coachMid:'You are making progress. Review the reasons behind missed answers, then try those items again.',
  coachLow:'Use the model answers to practise. Start with a few useful expressions, then retry the missed items.',
  grpAppliedTitle:'Read, listen & use',grpAppliedDesc:'Practise complete messages, guest requests and connected conversations.',
  actReadingTitle:'Read a workplace message',actReadingDesc:'Find the purpose, details and next action in short notes.',
  actListenRespondTitle:'Listen & respond',actListenRespondDesc:'Hear the guest’s request and choose a relevant response.',
  actOrderTitle:'Order the conversation',actOrderDesc:'Continue a fixed opening with three turns in a logical order.',
  actContextTitle:'Word in context',actContextDesc:'Type the missing word using its meaning and first letter.',
  practiceLede:'Choose an activity, set your level and practise useful workplace English. Review every answer and revisit your mistakes.',
  actMcDesc:'A larger bank of clear vocabulary, grammar and workplace questions.',actTfDesc:'Check the meaning and accuracy of workplace statements.',
  actErrDesc:'Correct grammar and improve guest-facing language.',actScenarioDesc:'Choose a response that meets the guest’s specific request.',
  actFillDesc:'Complete short guest and staff conversations with meaningful words.',actBuilderDesc:'Arrange the words into a useful model sentence.',
  menuAssessDesc:'Quizzes, readings, listening, conversation practice and mistake review.',
  tipOfDayBody:'When a guest reports discomfort, acknowledge it and check: “Thank you for telling me. I will stop and check.” Do not dismiss the concern or guarantee safety.'
});
Object.assign(UI_STRINGS.th,{
  coachHigh:'ผลการฝึกดีมาก ลองอธิบายเหตุผลที่เลือกคำตอบ แล้วทำชุดใหม่หรือฝึกบทสนทนากับเพื่อน',
  coachMid:'กำลังพัฒนาได้ดี ทบทวนเหตุผลของข้อที่ตอบผิด แล้วกลับมาลองใหม่',
  coachLow:'ใช้คำตอบตัวอย่างช่วยฝึก เริ่มจากสำนวนที่ใช้บ่อยไม่กี่สำนวน แล้วลองทำข้อที่ตอบผิดอีกครั้ง',
  grpAppliedTitle:'อ่าน ฟัง และนำไปใช้',grpAppliedDesc:'ฝึกอ่านข้อความ ฟังคำขอ และต่อบทสนทนาในสถานการณ์ทำงาน',
  actReadingTitle:'อ่านข้อความในที่ทำงาน',actReadingDesc:'ค้นหาใจความ รายละเอียด และสิ่งที่ต้องทำต่อจากบันทึกสั้น ๆ',
  actListenRespondTitle:'ฟังและเลือกคำตอบ',actListenRespondDesc:'ฟังคำขอของผู้ใช้บริการแล้วเลือกคำตอบที่ตรงประเด็น',
  actOrderTitle:'เรียงลำดับบทสนทนา',actOrderDesc:'เรียงสามข้อความให้ต่อเนื่องจากข้อความเริ่มต้นที่กำหนด',
  actContextTitle:'เติมคำศัพท์ตามบริบท',actContextDesc:'พิมพ์คำที่หายไปโดยใช้ความหมายและอักษรตัวแรกเป็นตัวช่วย',
  practiceLede:'เลือกกิจกรรมและระดับ ฝึกภาษาอังกฤษที่ใช้ในการทำงาน ทบทวนเหตุผลของทุกคำตอบและกลับมาฝึกข้อที่ตอบผิด',
  actMcDesc:'คลังคำถามคำศัพท์ ไวยากรณ์ และสถานการณ์ทำงานที่เพิ่มขึ้น',actTfDesc:'ตรวจความหมายและความถูกต้องของข้อความในการทำงาน',
  actErrDesc:'แก้ไวยากรณ์และปรับภาษาที่ใช้สื่อสารกับผู้ใช้บริการ',actScenarioDesc:'เลือกคำตอบที่ตรงกับคำขอของผู้ใช้บริการ',
  actFillDesc:'เติมคำในบทสนทนาสั้น ๆ ระหว่างผู้ใช้บริการและพนักงาน',actBuilderDesc:'เรียงคำให้เป็นประโยคตัวอย่างที่นำไปใช้ได้',
  menuAssessDesc:'แบบทดสอบ บทอ่าน การฟัง บทสนทนา และการทบทวนข้อผิด',
  tipOfDayBody:'เมื่อผู้ใช้บริการแจ้งความไม่สบาย ควรรับทราบและตรวจสอบ เช่น “ขอบคุณที่แจ้งค่ะ จะหยุดและตรวจสอบก่อนค่ะ” ไม่ปฏิเสธข้อกังวลหรือรับรองว่าปลอดภัยเสมอ'
});
PRACTICE_GROUPS.splice(2,0,{titleKey:'grpAppliedTitle',descKey:'grpAppliedDesc',items:[
  {key:'reading',titleKey:'actReadingTitle',descKey:'actReadingDesc',icon:'book',score:'reading',run:()=>Practice.start('reading')},
  {key:'listenRespond',titleKey:'actListenRespondTitle',descKey:'actListenRespondDesc',icon:'wave',score:'listenRespond',sage:true,run:()=>Practice.start('listenRespond')},
  {key:'order',titleKey:'actOrderTitle',descKey:'actOrderDesc',icon:'shuffle',score:'order',run:()=>Practice.start('order')},
  {key:'context',titleKey:'actContextTitle',descKey:'actContextDesc',icon:'chat',score:'context',sage:true,run:()=>Practice.start('context')}
]});
PRACTICE_INDEX.splice(0,PRACTICE_INDEX.length,...PRACTICE_GROUPS.flatMap(g=>g.items));

UI_STRINGS.en.tipSpa = UI_STRINGS.en.tipOfDayBody;
UI_STRINGS.th.tipSpa = UI_STRINGS.th.tipOfDayBody;
