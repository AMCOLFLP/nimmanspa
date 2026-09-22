/* Bilingual context helpers for the 2026-09-22 content release. */
const LearningContent = (() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const tr = (en, th) => I18N.current === 'th' ? th : en;
  const play = (text, label) => `<button type="button" class="context-play" data-context-speak="${esc(text)}" aria-label="${esc(label)}">${esc(label)}</button>`;
  function phraseContext(p){
    const prompt = p.prompt ? `<div class="conversation-turn"><span class="context-label">${tr(p.audience === 'staff' ? 'Colleague says' : 'Guest says', p.audience === 'staff' ? 'เพื่อนร่วมงานพูด' : 'ลูกค้าพูด')}</span><p>${esc(p.prompt)}</p><p class="context-th" lang="th">${esc(p.promptTh)}</p>${play(p.prompt,tr('Listen to request','ฟังคำขอ'))}</div>` : '';
    const follow = (p.dialogueIds || []).map(id => `<button type="button" class="context-link" data-open-dialogue="${esc(id)}">${tr('Practise this conversation','ฝึกบทสนทนานี้')} →</button>`).join('');
    return `<details class="phrase-context"><summary>${tr(p.prompt ? 'Practise the exchange' : 'When to use this phrase',p.prompt ? 'ฝึกโต้ตอบบทสนทนา' : 'ใช้ประโยคนี้เมื่อใด')}</summary>${prompt}<p class="context-label">${tr('Usage support','คำแนะนำการใช้')}</p><p class="context-th" lang="th">${esc(p.noteTh || p.contextTh)}</p>${follow}</details>`;
  }
  function vocabContext(v){
    const phrases = PHRASES.flatMap(c=>c.items).filter(p=>(v.relatedPhraseIds || []).includes(p.id)).slice(0,3);
    return `<section class="word-context" aria-label="${tr('Vocabulary in context','คำศัพท์ในบริบท')}"><div class="context-heading">${tr('Use it at work','นำไปใช้ในการทำงาน')}${v.pos ? `<span>${esc(v.pos)}</span>` : ''}</div><p class="word-combination"><b>${tr('Common combination','คำที่ใช้ร่วมกัน')}:</b> ${esc(v.collocation)}</p><p class="context-example">${esc(v.example)}</p><p class="context-th" lang="th">${esc(v.exampleTh)}</p>${play(v.example,tr('Listen to example','ฟังประโยคตัวอย่าง'))}${phrases.length ? `<details class="phrase-context"><summary>${tr('Related workplace phrases','ประโยคที่เกี่ยวข้อง')}</summary>${phrases.map(p=>`<div class="linked-phrase"><p>${esc(p.text)}</p><p class="context-th" lang="th">${esc(p.th)}</p>${play(p.text,tr('Listen','ฟัง'))}</div>`).join('')}</details>` : ''}</section>`;
  }
  function updateNotices(){
    document.querySelectorAll('.training-note').forEach(el=>{
      el.textContent=tr('Training examples only. Confirm real prices, times, locations and approved workplace procedures. This is language practice, not medical advice or emergency training. Levels are editorial, not CEFR certification.','ตัวอย่างสำหรับฝึกภาษาเท่านั้น ต้องยืนยันราคา เวลา สถานที่ และขั้นตอนที่สถานประกอบการอนุมัติ ไม่ใช่คำแนะนำทางการแพทย์หรือการฝึกฉุกเฉิน ระดับเป็นการจัดเพื่อการเรียน ไม่ใช่การรับรอง CEFR');
    });
  }
  document.addEventListener('click',e=>{
    const audio=e.target.closest('[data-context-speak]');
    if(audio){e.preventDefault();Speech.speak(audio.dataset.contextSpeak,{rate:App.speechRate()});return;}
    const dialogue=e.target.closest('[data-open-dialogue]');
    if(dialogue){e.preventDefault();Quiz.startFill(dialogue.dataset.openDialogue);}
  });
  return {esc,tr,phraseContext,vocabContext,updateNotices};
})();
