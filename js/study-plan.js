/* A suggested 30-day self-study sequence. The source curriculum and its
   teacher-assessed requirements remain unchanged. No enrollment side effects. */
const StudyPlan = (() => {
 const plans = {
  spa: [
   {title:'Introduce your professional self',th:'แนะนำตัวอย่างมืออาชีพ',modules:['s1','s2'],outcome:'Prepare a truthful CV draft and give a 60–90 second introduction about your training, experience and goals.',outcomeTh:'เตรียมร่างประวัติย่อจากข้อมูลจริง และแนะนำการฝึกอบรม ประสบการณ์ และเป้าหมายของคุณใน 60–90 วินาที'},
   {title:'Build your spa service language',th:'สร้างพื้นฐานภาษาในงานสปา',modules:['s3'],outcome:'Choose five useful terms, explain a service and ask a clear consultation question.',outcomeTh:'เลือกคำศัพท์ที่ใช้ได้จริงห้าคำ อธิบายบริการ และถามคำถามในการให้คำปรึกษาอย่างชัดเจน'},
   {title:'Handle guest and interview situations',th:'ฝึกรับมือลูกค้าและตอบสัมภาษณ์',modules:['s4'],outcome:'Rehearse a guest complaint and a product recommendation. Explain a helpful next step without pressure or unconfirmed promises.',outcomeTh:'ซ้อมรับข้อร้องเรียนและแนะนำผลิตภัณฑ์ อธิบายขั้นตอนถัดไปที่เป็นประโยชน์โดยไม่กดดันหรือให้คำมั่นที่ยังไม่ยืนยัน'},
   {title:'Put your interview together',th:'เตรียมพร้อมสำหรับการสัมภาษณ์',modules:['s5'],outcome:'Combine your introduction, CV answers and workplace examples in a mock interview. Ask your teacher for feedback and an improvement plan.',outcomeTh:'รวมการแนะนำตัว คำตอบจากประวัติย่อ และตัวอย่างการทำงานในการสัมภาษณ์จำลอง ขอข้อเสนอแนะและแผนพัฒนาจากครู'}
  ],
  salon: [
   {title:'Introduce your salon experience',th:'แนะนำประสบการณ์งานผมและเล็บ',modules:['h1','h2'],outcome:'Prepare a truthful CV draft and give a 60–90 second introduction about your hair or nail skills and experience.',outcomeTh:'เตรียมร่างประวัติย่อจากข้อมูลจริง และแนะนำทักษะกับประสบการณ์งานผมหรือเล็บของคุณใน 60–90 วินาที'},
   {title:'Explain hair and nail services',th:'อธิบายบริการผมและเล็บ',modules:['h3'],outcome:'Use five relevant terms to explain a service and ask about a guest’s preferences before beginning.',outcomeTh:'ใช้คำศัพท์ที่เกี่ยวข้องห้าคำเพื่ออธิบายบริการ และสอบถามความต้องการของลูกค้าก่อนเริ่ม'},
   {title:'Practise guest conversations',th:'ฝึกสนทนากับลูกค้า',modules:['h4'],outcome:'Rehearse a consultation, a complaint and a product recommendation. Confirm the guest’s needs and explain the next step.',outcomeTh:'ซ้อมให้คำปรึกษา รับข้อร้องเรียน และแนะนำผลิตภัณฑ์ ยืนยันความต้องการของลูกค้าและอธิบายขั้นตอนถัดไป'},
   {title:'Rehearse your salon interview',th:'ซ้อมสัมภาษณ์งานผมและเล็บ',modules:['h5'],outcome:'Connect your CV and introduction with examples of guest service. Complete a mock interview and discuss improvements with your teacher.',outcomeTh:'เชื่อมโยงประวัติย่อและการแนะนำตัวกับตัวอย่างการบริการลูกค้า ฝึกสัมภาษณ์จำลองและหารือแนวทางพัฒนากับครู'}
  ],
  cruise: [
   {title:'Start with everyday English',th:'เริ่มจากภาษาอังกฤษในชีวิตประจำวัน',modules:['c1','c2'],outcome:'Confirm times and instructions, ask for clarification and give a short introduction using your real background.',outcomeTh:'ยืนยันเวลาและคำสั่ง ขอคำอธิบายเพิ่มเติม และแนะนำตัวสั้น ๆ โดยใช้ข้อมูลจริงของคุณ'},
   {title:'Find your way through work',th:'เรียนรู้สถานที่และงานบนเรือ',modules:['c3','c4'],outcome:'Name key ship areas, give checked directions and practise receiving, confirming and reporting a work task.',outcomeTh:'บอกชื่อพื้นที่สำคัญบนเรือ บอกทางที่ตรวจสอบแล้ว และฝึกรับงาน ยืนยันงาน และรายงานผล'},
   {title:'Support guests with confidence',th:'สื่อสารเพื่อช่วยเหลือลูกค้า',modules:['c5','c6'],outcome:'Greet a guest, clarify a request and respond to a complaint with an approved next step.',outcomeTh:'ทักทายลูกค้า สอบถามคำขอให้ชัดเจน และตอบข้อร้องเรียนด้วยขั้นตอนที่ได้รับอนุมัติ'},
   {title:'Prepare for your crew role',th:'เตรียมพร้อมสำหรับบทบาทลูกเรือ',modules:['c8','ca2','cs'],outcome:'Check understanding across accents, rehearse truthful interview answers and review the safety-language supplement with approved instructions.',outcomeTh:'ตรวจสอบความเข้าใจเมื่อพบสำเนียงต่าง ๆ ซ้อมตอบสัมภาษณ์จากข้อมูลจริง และทบทวนบทเสริมภาษาด้านความปลอดภัยด้วยคำสั่งที่ได้รับอนุมัติ'}
  ]
 };
 function get(course){return (plans[course]||[]).map((week,i)=>({...week,modules:[...week.modules],number:i+1,startDay:i*7+1,endDay:(i+1)*7}));}
 function next(course,studied={}){
  const weeks=get(course);
  for(const week of weeks){const moduleId=week.modules.find(id=>!studied[id]);if(moduleId)return {week,moduleId};}
  return null;
 }
 function weekForModule(course,id){return get(course).find(week=>week.modules.includes(id))||null;}
 return {get,next,weekForModule};
})();
