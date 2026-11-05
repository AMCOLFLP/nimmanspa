/* New section labels and corrected menu/account descriptions. */
Object.assign(UI_STRINGS.en,{
 navLearning:'Learn',navPractice:'Practice',practiceHeading:'Practice',practiceLede:'',menuPracticeDesc:'Ready-made activities, or build your own set',modulesCount:'Learning tools',
 courseSpaName:'Spa Therapist at Sea',courseSpaTagline:'Consultation, treatments & interviews',courseSpaDesc:'Build your spa English over four weeks: introduce yourself, explain services, support guests and rehearse your interview. Finish with two days of review.',
 courseCruiseName:'Working at Sea',courseCruiseTagline:'Foundation, workplace English & interviews',courseCruiseDesc:'A four-week path from everyday English to shipboard tasks, guest service and job interviews, with a safety-language supplement and two final review days.',
 courseSalonName:'Hair & Nails at Sea',courseSalonTagline:'Hair, nails, guest service & interviews',courseSalonDesc:'Develop salon English over four weeks: describe your experience, explain hair and nail services, practise guest conversations and prepare for interviews. Review on days 29–30.',
 domainSalon:'hair, nail and salon',domainSalonShort:'salon',tipSalon:'Confirm the guest’s preference, service details and price before you begin.',
 courseChooseLede:'Choose one of three learning paths. Each has its own learning and practice record. Shared items may appear in more than one path.',
 courseProgress:'Legacy library activity',authTagline:'Sign in to save progress to your account, or continue as a guest for session-only practice.',
});
Object.assign(UI_STRINGS.th,{
 navLearning:'เรียนรู้',navPractice:'แบบฝึก',practiceHeading:'แบบฝึก',practiceLede:'',menuPracticeDesc:'กิจกรรมสำเร็จรูป หรือจัดชุดฝึกเอง',modulesCount:'เครื่องมือเรียนรู้',
 courseSpaName:'นักบำบัดสปาบนเรือสำราญ',courseSpaTagline:'ให้คำปรึกษา ทรีตเมนต์ และการสัมภาษณ์',courseSpaDesc:'พัฒนาภาษาอังกฤษงานสปาในสี่สัปดาห์: แนะนำตัว อธิบายบริการ ดูแลลูกค้า และซ้อมสัมภาษณ์ ปิดท้ายด้วยการทบทวนสองวัน',
 courseCruiseName:'ทำงานบนเรือสำราญ',courseCruiseTagline:'พื้นฐาน ภาษาในที่ทำงาน และการสัมภาษณ์',courseCruiseDesc:'แผนสี่สัปดาห์จากภาษาอังกฤษในชีวิตประจำวันสู่งานบนเรือ การบริการลูกค้า และการสัมภาษณ์ พร้อมบทเสริมภาษาด้านความปลอดภัยและการทบทวนสองวันสุดท้าย',
 courseSalonName:'ช่างผมและเล็บบนเรือสำราญ',courseSalonTagline:'ผม เล็บ บริการลูกค้า และการสัมภาษณ์',courseSalonDesc:'พัฒนาภาษาอังกฤษงานผมและเล็บในสี่สัปดาห์: บอกเล่าประสบการณ์ อธิบายบริการ ฝึกสนทนากับลูกค้า และเตรียมสัมภาษณ์ ทบทวนในวันที่ 29–30',
 domainSalon:'งานผม เล็บ และร้านเสริมสวย',domainSalonShort:'งานร้านเสริมสวย',tipSalon:'ยืนยันความต้องการของลูกค้า รายละเอียดบริการ และราคาก่อนเริ่ม',
 courseChooseLede:'เลือกหนึ่งในสามเส้นทางการเรียน แต่ละเส้นทางมีบันทึกการเรียนและการฝึกแยกกัน รายการที่ใช้ร่วมกันอาจปรากฏในหลายเส้นทาง',
 courseProgress:'กิจกรรมคลังเดิม',authTagline:'เข้าสู่ระบบเพื่อบันทึกความคืบหน้าในบัญชี หรือใช้งานแบบผู้เยี่ยมชมเพื่อฝึกเฉพาะครั้งนี้',
});

/* The activity library and the builder are the two halves of the Practice
   tab, chosen with a pair of buttons. The builder's own settings do not
   reach the library, which is why each mode states what it gives you. */
Object.assign(UI_STRINGS.en,{
 pmLibraryTitle:'Ready-made activities',pmLibraryDesc:'Pick one and start. Uses its own session settings.',
 pmBuilderTitle:'Build your own set',pmBuilderDesc:'Choose the module, length and how you answer.',
 pxFilterAll:'All',switchCourse:'Switch course',
});
Object.assign(UI_STRINGS.th,{
 pmLibraryTitle:'กิจกรรมสำเร็จรูป',pmLibraryDesc:'เลือกแล้วเริ่มได้ทันที ใช้การตั้งค่ารอบฝึกของตัวเอง',
 pmBuilderTitle:'จัดชุดฝึกเอง',pmBuilderDesc:'เลือกโมดูล จำนวนข้อ และรูปแบบการตอบ',
 pxFilterAll:'ทั้งหมด',switchCourse:'เปลี่ยนหลักสูตร',
});

Object.assign(UI_STRINGS.en,{courseProgress:'Chapters marked studied',statQuiz:'LEGACY BEST AVERAGE',demoNote:'Account saving requires the configured PHP/MySQL server. Guest learning and practice are kept only for the current session.'});
Object.assign(UI_STRINGS.th,{courseProgress:'บทที่ทำเครื่องหมายว่าเรียนแล้ว',statQuiz:'ค่าเฉลี่ยคะแนนสูงสุดเดิม',demoNote:'การบันทึกบัญชีต้องใช้เซิร์ฟเวอร์ PHP/MySQL ที่ตั้งค่าแล้ว ผู้เยี่ยมชมเก็บบันทึกการเรียนและการฝึกเฉพาะครั้งนี้'});

Object.assign(UI_STRINGS.en,{courseSections:'Chapters'});
Object.assign(UI_STRINGS.th,{courseSections:'บทเรียน'});

/* Daily Five is the app's front door: the first tab opens on today's deck,
   with the rest of the course below it. Seven swaps a week, refilled Monday. */
Object.assign(UI_STRINGS.en,{
 navDaily:'Daily',
 dailyEyebrow:'TODAY’S FIVE',
 dailyResetCta:'Get a new set',
 dailyResetLeft:'{n} of {t} swaps left this week',
 dailyResetSpent:'No swaps left — they refill on Monday',
 dailyResetConfirm:'Swap today’s five for a different five? Today’s progress on this set is cleared, and this uses one of your weekly swaps.',
 dailyResetDone:'New set of five loaded.',
 teacherEyebrow:'TEACHER',teacherHeading:'Class dashboard',
});
Object.assign(UI_STRINGS.th,{
 navDaily:'ประจำวัน',
 dailyEyebrow:'ห้าคำของวันนี้',
 dailyResetCta:'สุ่มชุดใหม่',
 dailyResetLeft:'เหลือสิทธิ์เปลี่ยนชุด {n} จาก {t} ครั้งในสัปดาห์นี้',
 dailyResetSpent:'ใช้สิทธิ์ครบแล้ว — รีเซ็ตใหม่ทุกวันจันทร์',
 dailyResetConfirm:'เปลี่ยนคำศัพท์ห้าคำของวันนี้เป็นชุดใหม่หรือไม่? ความคืบหน้าของชุดเดิมในวันนี้จะถูกล้าง และจะใช้สิทธิ์เปลี่ยนชุดของสัปดาห์นี้หนึ่งครั้ง',
 dailyResetDone:'โหลดคำศัพท์ชุดใหม่แล้ว',
 teacherEyebrow:'ครูผู้สอน',teacherHeading:'แดชบอร์ดชั้นเรียน',
});
