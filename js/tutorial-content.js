/* Plain-text guidance shared by the tutorial dialog. Keep claims aligned with
   CourseAccess, Progress and the actual controls; no account data is embedded. */
const TutorialContent = (() => {
  function get(user, language){
    const T = (en, th) => language === 'th' ? th : en;
    const step = (id, short, title, lead, bullets, remember) => ({id, short, title, lead, bullets, remember});

    if (user?.must_change_password) return {
      title:T('Secure your account first','ตั้งรหัสผ่านให้บัญชีของคุณก่อน'),
      subtitle:T('A short guide to your required password change.','คำแนะนำสำหรับการเปลี่ยนรหัสผ่านที่จำเป็น'),
      steps:[
        step('password-change', T('New password','รหัสผ่านใหม่'), T('Replace your temporary password','เปลี่ยนรหัสผ่านชั่วคราว'),
          T('Your administrator has created or reset your account. Change the temporary password before continuing.','ผู้ดูแลระบบได้สร้างบัญชีหรือรีเซ็ตรหัสผ่านให้คุณ กรุณาเปลี่ยนรหัสผ่านชั่วคราวก่อนใช้งานต่อ'), [
            T('Enter the temporary password in the current-password field, then enter and confirm your own new password.','ใส่รหัสผ่านชั่วคราวในช่องรหัสผ่านปัจจุบัน แล้วใส่และยืนยันรหัสผ่านใหม่ของคุณ'),
            T('Use at least 10 characters. Choose a password different from the temporary one; the form checks its length and confirmation.','ใช้รหัสผ่านอย่างน้อย 10 ตัวอักษรและไม่ซ้ำกับรหัสผ่านชั่วคราว แบบฟอร์มจะตรวจสอบความยาวและการยืนยัน'),
            T('If the temporary password does not work, ask your administrator for help. Never share your new password.','หากรหัสผ่านชั่วคราวใช้ไม่ได้ ให้ติดต่อผู้ดูแลระบบ อย่าส่งรหัสผ่านใหม่ให้ผู้อื่น')
          ], T('Reading or closing this guide does not remove the required password change.','การอ่านหรือปิดคู่มือนี้ไม่ได้ยกเลิกข้อกำหนดให้เปลี่ยนรหัสผ่าน')),
        step('password-help', T('Continue safely','ใช้งานอย่างปลอดภัย'), T('Continue after saving','ใช้งานต่อหลังบันทึก'),
          T('After a successful change, the app opens the area available to your account.','เมื่อเปลี่ยนรหัสผ่านสำเร็จ แอปจะเปิดหน้าที่บัญชีของคุณมีสิทธิ์ใช้งาน'), [
            T('Changing a password signs out other sessions. It does not erase progress or restart course access dates.','การเปลี่ยนรหัสผ่านจะออกจากระบบในเซสชันอื่น โดยไม่ลบความคืบหน้าหรือเริ่มนับสิทธิ์เรียนใหม่'),
            T('After changing your password, select the ? icon labelled How to use the app to reopen the full tutorial.','หลังเปลี่ยนรหัสผ่านแล้ว เลือกไอคอน ? ที่ชื่อวิธีใช้แอป เพื่อเปิดคู่มือฉบับเต็มอีกครั้ง'),
            T('Sign out when you finish on a shared device.','ออกจากระบบเมื่อใช้งานอุปกรณ์ร่วมกับผู้อื่นเสร็จแล้ว')
          ], T('Your administrator can reset a forgotten password; there is no automatic email reset in this app.','ผู้ดูแลระบบช่วยรีเซ็ตรหัสผ่านที่ลืมได้ แอปนี้ไม่มีการส่งอีเมลรีเซ็ตอัตโนมัติ'))
      ]
    };

    if (user?.is_admin) return {
      title:T('Your administration guide','คู่มือผู้ดูแลระบบ'),
      subtitle:T('Find students, understand their progress and manage accounts.','ค้นหาผู้เรียน ดูความคืบหน้า และจัดการบัญชี'),
      steps:[
        step('admin-progress', T('Student progress','ความคืบหน้า'), T('Find a student and review their learning','ค้นหาผู้เรียนและตรวจสอบการเรียน'),
          T('The dashboard brings together registered student accounts and their saved course activity.','แดชบอร์ดรวมบัญชีผู้เรียนที่ลงทะเบียนและกิจกรรมของแต่ละหลักสูตรที่บันทึกไว้'), [
            T('Search by name or email. Filter by course, access status or account status, and use the page controls for more results.','ค้นหาด้วยชื่อหรืออีเมล กรองตามหลักสูตร สถานะสิทธิ์เรียน หรือสถานะบัญชี และเปลี่ยนหน้าเพื่อดูผลเพิ่มเติม'),
            T('Open a student to see chapter progress, known words, practice results, recent activity and each course’s access dates.','เปิดข้อมูลผู้เรียนเพื่อดูความคืบหน้ารายบท คำศัพท์ที่รู้ ผลการฝึก กิจกรรมล่าสุด และวันเริ่มกับสิ้นสุดสิทธิ์ของแต่ละหลักสูตร'),
            T('“Studied” is marked by the learner. “Last saved activity” is a save time, not verified attendance or study duration. Guest activity is not saved to this dashboard.','ผู้เรียนเป็นผู้ทำเครื่องหมายว่าเรียนแล้ว “กิจกรรมที่บันทึกล่าสุด” คือเวลาบันทึก ไม่ใช่การยืนยันการเข้าเรียนหรือระยะเวลาที่เรียน กิจกรรมผู้เยี่ยมชมไม่บันทึกในแดชบอร์ดนี้')
          ], T('Practice scores support self-study; they are not certification or teacher-graded outcomes.','คะแนนฝึกใช้ประกอบการเรียนด้วยตนเอง ไม่ใช่ใบรับรองหรือผลประเมินจากครู')),
        step('admin-accounts', T('Accounts','บัญชีผู้เรียน'), T('Create and maintain student accounts','สร้างและดูแลบัญชีผู้เรียน'),
          T('Use Create account for a new learner, or Edit account within a student’s profile.','ใช้สร้างบัญชีสำหรับผู้เรียนใหม่ หรือแก้ไขบัญชีในหน้าข้อมูลผู้เรียน'), [
            T('Check the name, email, occupation and preferred language before saving. Occupation does not grant administrator permissions.','ตรวจสอบชื่อ อีเมล อาชีพ และภาษาก่อนบันทึก การเลือกอาชีพไม่ได้ให้สิทธิ์ผู้ดูแลระบบ'),
            T('Creating an account gives you a temporary password to share directly with that learner. It does not start a course.','เมื่อสร้างบัญชี คุณจะได้รับรหัสผ่านชั่วคราวเพื่อส่งให้ผู้เรียนโดยตรง การสร้างบัญชียังไม่เริ่มนับเวลาเรียน'),
            T('Disable an account to block sign-in and revoke existing sessions. Enable it to allow sign-in again. Saved progress stays in place.','ปิดใช้งานบัญชีเพื่อระงับการเข้าสู่ระบบและยกเลิกเซสชันเดิม เปิดใช้งานเพื่อให้เข้าสู่ระบบได้อีกครั้ง ความคืบหน้าที่บันทึกไว้ยังคงอยู่')
          ], T('Disabling or enabling an account does not pause or renew its course access dates.','การปิดหรือเปิดใช้งานบัญชีไม่ได้หยุดเวลาหรือต่ออายุสิทธิ์เรียน')),
        step('admin-reset', T('Reset passwords','รีเซ็ตรหัสผ่าน'), T('Help a learner regain access','ช่วยผู้เรียนกลับเข้าสู่ระบบ'),
          T('Open the correct student, choose Reset password and check the named confirmation.','เปิดข้อมูลผู้เรียนที่ถูกต้อง เลือกรีเซ็ตรหัสผ่าน และตรวจสอบชื่อในข้อความยืนยัน'), [
            T('The old password stops working and existing sessions are revoked. The learner must change the new temporary password at the next sign-in.','รหัสผ่านเดิมจะใช้ไม่ได้และเซสชันเดิมจะถูกยกเลิก ผู้เรียนต้องเปลี่ยนรหัสผ่านชั่วคราวเมื่อเข้าสู่ระบบครั้งถัดไป'),
            T('Reveal and copy the temporary password while it is displayed. Share it privately with the intended learner; the app does not send it automatically.','แสดงและคัดลอกรหัสผ่านชั่วคราวขณะที่ยังแสดงอยู่ ส่งให้ผู้เรียนที่ถูกต้องเป็นการส่วนตัว แอปไม่ได้ส่งให้โดยอัตโนมัติ'),
            T('The temporary password display clears when dismissed or when you leave or hide the page. Reset again if you need a new one.','ช่องรหัสผ่านชั่วคราวจะถูกล้างเมื่อปิด ออกจากหน้า หรือซ่อนหน้า หากต้องการรหัสใหม่ให้รีเซ็ตอีกครั้ง')
          ], T('A password reset preserves saved progress and does not extend the 30-day learning window.','การรีเซ็ตรหัสผ่านเก็บความคืบหน้าเดิมไว้ และไม่ต่ออายุช่วงสิทธิ์เรียน 30 วัน')),
        step('admin-security', T('Help & security','ช่วยเหลือและความปลอดภัย'), T('Keep account access private','รักษาความเป็นส่วนตัวของบัญชี'),
          T('Use your own administrator account and only share a temporary student password with its owner.','ใช้บัญชีผู้ดูแลระบบของคุณเอง และส่งรหัสผ่านชั่วคราวของผู้เรียนให้เจ้าของบัญชีเท่านั้น'), [
            T('Use Change password to update your own password. A successful change signs out your other sessions.','ใช้เปลี่ยนรหัสผ่านเพื่อเปลี่ยนรหัสของคุณเอง เมื่อสำเร็จจะออกจากระบบในเซสชันอื่น'),
            T('Use the language control for English or Thai. Select the ? icon labelled How to use the app to read this guide again.','ใช้ตัวเลือกภาษาเพื่อสลับอังกฤษหรือไทย เลือกไอคอน ? ที่ชื่อวิธีใช้แอป เพื่ออ่านคู่มือนี้อีกครั้ง'),
            T('Sign out after working on a shared device. If a request fails, check your connection and sign-in status before trying again.','ออกจากระบบหลังใช้งานอุปกรณ์ร่วมกัน หากทำรายการไม่สำเร็จ ให้ตรวจสอบการเชื่อมต่อและสถานะการเข้าสู่ระบบก่อนลองอีกครั้ง')
          ], T('Course dates continue to run while the learner is away or their account is disabled.','สิทธิ์เรียนยังคงนับเวลาแม้ผู้เรียนไม่ได้ใช้งานหรือบัญชีถูกปิดใช้งาน'))
      ]
    };

    const guest = !!user?.guest;
    return {
      title:T('Welcome to NIMMANSPA','ยินดีต้อนรับสู่ NIMMANSPA'),
      subtitle:T('Your guide to learning, practising and keeping track of progress.','คู่มือเรียนรู้ ฝึกฝน และติดตามความคืบหน้าของคุณ'),
      steps:[
        step('access', T('Getting started','เริ่มต้นใช้งาน'),
          guest ? T('Explore freely as a guest','เรียนรู้ได้เต็มที่แบบผู้เยี่ยมชม') : T('Choose how you learn','เลือกวิธีเรียนของคุณ'),
          guest ? T('Guest access opens all courses and practice without a trial countdown or time limit.','ผู้เยี่ยมชมเปิดได้ทุกหลักสูตรและแบบฝึก โดยไม่มีเวลาทดลองหรือจำกัดระยะเวลา') : T('A registered account saves your progress. Guest access opens all courses and practice with no time limit, but keeps only temporary progress.','บัญชีที่ลงทะเบียนบันทึกความคืบหน้าของคุณ ผู้เยี่ยมชมเปิดได้ทุกหลักสูตรและแบบฝึกโดยไม่จำกัดเวลา แต่เก็บความคืบหน้าชั่วคราวเท่านั้น'), [
            T('Guest progress lasts only in the current page session. Switching courses keeps it, but refreshing, closing the page or signing out clears it.','ความคืบหน้าผู้เยี่ยมชมอยู่เฉพาะช่วงที่เปิดหน้านี้ การเปลี่ยนหลักสูตรยังเก็บไว้ แต่การรีเฟรช ปิดหน้า หรือออกจากระบบจะล้างข้อมูล'),
            T('Registered accounts save progress to the server. Each course has 30 consecutive days from the first time you start that course; registration alone starts no clock.','บัญชีที่ลงทะเบียนบันทึกความคืบหน้าบนเซิร์ฟเวอร์ แต่ละหลักสูตรมีสิทธิ์เรียน 30 วันต่อเนื่องนับจากเริ่มหลักสูตรครั้งแรก การลงทะเบียนอย่างเดียวยังไม่เริ่มนับเวลา'),
            T('The registered course clock continues while you are away. At expiry, learning access ends and saved records are retained. Switching courses, resetting progress or changing passwords does not renew it.','เวลาของหลักสูตรในบัญชียังคงเดินแม้ไม่ได้ใช้งาน เมื่อหมดอายุ สิทธิ์เรียนสิ้นสุดแต่ข้อมูลที่บันทึกยังอยู่ การเปลี่ยนหลักสูตร รีเซ็ตความคืบหน้า หรือเปลี่ยนรหัสผ่านไม่ต่ออายุสิทธิ์')
          ], T('Guest progress does not transfer into an account. Sign in before studying if you want a lasting record.','ความคืบหน้าผู้เยี่ยมชมไม่ย้ายเข้าในบัญชี หากต้องการเก็บบันทึกต่อเนื่อง ให้เข้าสู่ระบบก่อนเรียน')),
        step('navigation', T('Find your way','รู้จักเมนู'), T('Choose a course and find your tools','เลือกหลักสูตรและเครื่องมือ'),
          T('Choose Spa, Cruise or Salon English. Each course has its own content and progress.','เลือกภาษาอังกฤษสำหรับสปา เรือสำราญ หรือร้านเสริมสวย แต่ละหลักสูตรมีเนื้อหาและความคืบหน้าแยกกัน'), [
            T('The five main destinations are Daily, Learning, Words, Phrases and Practice. On a phone, use the bottom tabs.','เมนูหลักทั้งห้าคือประจำวัน เรียนรู้ คำศัพท์ ประโยค และฝึกฝน บนมือถือให้ใช้แถบเมนูด้านล่าง'),
            T('Open the side menu for all available tools, Account and Settings. On a wide screen the menu can stay beside your lessons.','เปิดเมนูด้านข้างเพื่อดูเครื่องมือทั้งหมดที่มี บัญชี และการตั้งค่า บนหน้าจอกว้างเมนูจะอยู่ข้างบทเรียนได้'),
            T('Use Switch course to return to the course chooser. Starting another registered course starts its own independent 30-day period.','ใช้เปลี่ยนหลักสูตรเพื่อกลับไปเลือกหลักสูตร การเริ่มหลักสูตรอื่นในบัญชีจะเริ่มสิทธิ์ 30 วันแยกต่างหาก')
          ], T('Finish a practice set before switching screens; an unfinished set may need to be started again.','ทำชุดฝึกให้จบก่อนเปลี่ยนหน้า เพราะชุดที่ยังไม่จบอาจต้องเริ่มใหม่')),
        step('learning', T('Your learning plan','แผนการเรียน'), T('Learn a little, then put it to use','เรียนทีละนิดแล้วลองนำไปใช้'),
          T('Learning gives you 30 daily lessons in four weeks plus a final two-day project. Each day teaches a skill, models a conversation and checks your own practice. Guests can follow the sequence at any pace.','หน้าเรียนรู้มีบทเรียนประจำวัน 30 บท แบ่งเป็นสี่สัปดาห์และงานฝึกสองวันสุดท้าย แต่ละวันสอนทักษะ มีบทสนทนาตัวอย่างและตรวจงานฝึก ผู้เยี่ยมชมเรียนตามลำดับในจังหวะของตนเองได้'), [
            T('Open a week and choose a day. Recall earlier learning, read two teaching points, then listen to or read the model aloud.','เปิดสัปดาห์แล้วเลือกวัน ทบทวนความรู้เดิม อ่านคำอธิบายสองประเด็น แล้วฟังหรืออ่านตัวอย่างออกเสียง'),
            T('Write your own response, compare the model and tick the self-check criteria. Answer both knowledge checks correctly, then choose Complete day. Editing completed work reopens that day.','เขียนคำตอบของคุณ เปรียบเทียบตัวอย่าง และตรวจตามรายการด้วยตนเอง ตอบคำถามทั้งสองข้อให้ถูกต้องแล้วกดบันทึกว่าเรียนครบ การแก้งานที่ทำครบแล้วจะเปิดวันนั้นให้ทำให้ครบอีกครั้ง'),
            T('Use Chapter library & extra practice for more words, phrases and teacher tasks. Your daily draft and checks resume when you return. Guest work lasts for this visit only.','ใช้คลังบทเรียนและแบบฝึกเพิ่มเติมเพื่อเรียนคำศัพท์ วลี และงานกับครูเพิ่ม กลับมาเรียนต่อจากร่างคำตอบและคำถามที่ทำไว้ได้ ข้อมูลผู้เยี่ยมชมอยู่เฉพาะการใช้งานครั้งนี้')
          ], T('Plan about 25–35 minutes a day. Completion records self-study; ask a teacher for speaking and writing feedback.','วางแผนเรียนวันละประมาณ 25–35 นาที ความครบถ้วนเป็นบันทึกการเรียนด้วยตนเอง ขอข้อเสนอแนะการพูดและเขียนจากครู')),
        step('words', T('Daily & Words','ประจำวันและคำศัพท์'), T('Build a useful vocabulary habit','ฝึกคำศัพท์ให้ใช้ได้จริง'),
          T('Start with Daily Five, then explore the larger word bank when you want more practice.','เริ่มจากคำศัพท์ประจำวันห้าคำ แล้วเปิดคลังคำศัพท์เมื่อต้องการฝึกเพิ่มเติม'), [
            T('In Daily Five, read each card and listen. Swipe right for Got it or left for Not yet, or use the buttons. Finish the short check to test recall.','ในคำศัพท์ประจำวัน ให้อ่านการ์ดและฟังเสียง ปัดขวาเมื่อจำได้หรือซ้ายเมื่อยังจำไม่ได้ หรือใช้ปุ่ม แล้วทำแบบเช็กสั้น ๆ เพื่อทดสอบความจำ'),
            T('You can swap the daily set up to seven times per week; the allowance refreshes on Monday. This is separate from Reset progress.','เปลี่ยนชุดคำศัพท์ประจำวันได้สูงสุดเจ็ดครั้งต่อสัปดาห์ โดยเริ่มสิทธิ์ใหม่วันจันทร์ การเปลี่ยนชุดนี้แยกจากการรีเซ็ตความคืบหน้า'),
            T('In Words, choose flashcards, matching, scramble, Thai recall, category sort or speed round. Use the category, level and search controls where shown.','ในคำศัพท์ เลือกแฟลชการ์ด จับคู่ เรียงตัวอักษร ทบทวนจากภาษาไทย จัดหมวดหมู่ หรือฝึกความเร็ว ใช้ตัวกรองหมวดหมู่ ระดับ และช่องค้นหาเมื่อแสดง')
          ], T('Listen, say the word aloud and use it in your own sentence. “Known” words and chapter progress are different records.','ฟัง พูดคำศัพท์ออกเสียง แล้วแต่งประโยคเอง คำที่รู้แล้วกับความคืบหน้ารายบทเป็นบันทึกคนละส่วน')),
        step('phrases', T('Phrases & extras','ประโยคและเครื่องมือเสริม'), T('Practise language for real situations','ฝึกภาษาในสถานการณ์งาน'),
          T('Phrases groups useful expressions by situation so you can find what you need at work.','หน้าประโยคจัดวลีที่ใช้บ่อยตามสถานการณ์ เพื่อค้นหาสิ่งที่ต้องใช้ในการทำงาน'), [
            T('Choose a phrase category, read the English and Thai, and press Listen. Repeat the expression, then adapt it to your own situation.','เลือกหมวดประโยค อ่านอังกฤษและไทย แล้วกดฟัง พูดตามและปรับให้เข้ากับสถานการณ์ของคุณ'),
            T('Where available, Pronunciation, Body map and Say this help with particular sounds, anatomy vocabulary and more natural wording.','เมื่อหลักสูตรมีเนื้อหานี้ การออกเสียง แผนภาพร่างกาย และพูดแบบนี้ช่วยฝึกเสียง คำศัพท์ร่างกาย และถ้อยคำที่เป็นธรรมชาติ'),
            T('Interview rehearsal appears only in courses with interview content. Answer aloud before comparing with the model; the rehearsal is unscored.','การซ้อมสัมภาษณ์แสดงเฉพาะหลักสูตรที่มีเนื้อหาสัมภาษณ์ ให้ตอบออกเสียงก่อนเทียบตัวอย่าง การซ้อมนี้ไม่มีคะแนน')
          ], T('Available tools vary by course. Model dialogues are training examples; use your real experience and confirm workplace details.','เครื่องมือแตกต่างกันตามหลักสูตร บทสนทนาตัวอย่างใช้เพื่อฝึก ให้ใช้ประสบการณ์จริงและตรวจสอบรายละเอียดของที่ทำงาน')),
        step('practice', T('Practice & results','แบบฝึกและผล'), T('Build a practice set and review mistakes','จัดชุดฝึกแล้วทบทวนข้อผิดพลาด'),
          T('Open Practice for course activities and a custom assessment based on the lesson library.','เปิดฝึกฝนเพื่อทำกิจกรรมของหลักสูตรและจัดแบบฝึกเองจากคลังบทเรียน'), [
            T('For a custom set, choose the chapter, words or phrases, category and item count. Practise all eligible entries, missed items or your own selection.','สำหรับชุดที่จัดเอง ให้เลือกบทเรียน คำศัพท์หรือวลี หมวดหมู่ และจำนวนข้อ ฝึกจากรายการทั้งหมด ข้อที่เคยผิด หรือรายการที่เลือกเอง'),
            T('Choose an available answer format and feedback option. Read instructions before starting; listening and other activity types depend on the selected content.','เลือกรูปแบบคำตอบและการแสดงผลตอบกลับที่มี อ่านคำแนะนำก่อนเริ่ม แบบฟังและกิจกรรมอื่นขึ้นอยู่กับเนื้อหาที่เลือก'),
            T('Complete the set to save its result. Review your answers and category accuracy, retry missed items, or export that custom result as a JSON file.','ทำชุดฝึกให้จบเพื่อบันทึกผล ทบทวนคำตอบและความถูกต้องรายหมวด ฝึกข้อที่ผิดอีกครั้ง หรือส่งออกผลชุดที่จัดเองเป็นไฟล์ JSON')
          ], T('A practice score is not a course pass, CEFR result or certificate. Teacher-assessed tasks still need human feedback.','คะแนนฝึกไม่ใช่ผลผ่านหลักสูตร ผล CEFR หรือประกาศนียบัตร งานที่ครูประเมินยังต้องได้รับข้อเสนอแนะจากผู้ประเมิน')),
        step('speaking', T('Listen & speak','ฟังและพูด'), T('Use audio and the microphone confidently','ใช้เสียงและไมโครโฟน'),
          T('Listen buttons play a model voice. Speaking practice can compare recognised words or offer self-check, depending on your browser.','ปุ่มฟังเล่นเสียงตัวอย่าง การฝึกพูดอาจเปรียบเทียบคำที่ระบบฟังได้หรือให้ประเมินตนเอง ขึ้นอยู่กับเบราว์เซอร์'), [
            T('Microphone features need permission and a supported secure page, usually HTTPS. Follow the on-screen message if the microphone or recognition is unavailable.','การใช้ไมโครโฟนต้องได้รับอนุญาตและเปิดบนหน้าที่ปลอดภัยซึ่งรองรับ โดยทั่วไปคือ HTTPS หากใช้ไมโครโฟนหรือระบบรู้จำเสียงไม่ได้ ให้ทำตามข้อความบนหน้าจอ'),
            T('Recognition compares the transcript with the target words; it is not a precise pronunciation or fluency grade. Recognition may send audio to your browser provider.','ระบบรู้จำเสียงเปรียบเทียบข้อความที่ฟังได้กับคำเป้าหมาย ไม่ใช่คะแนนการออกเสียงหรือความคล่องที่ละเอียด ระบบอาจส่งเสียงให้ผู้ให้บริการเบราว์เซอร์'),
            T('In self-check, record and replay where supported, compare with the model, then rate yourself. The app does not save recordings; you can also listen and read aloud without the microphone.','ในโหมดประเมินตนเอง บันทึกและฟังเสียงซ้ำเมื่อรองรับ เทียบกับตัวอย่าง แล้วให้คะแนนตนเอง แอปไม่เก็บบันทึกเสียง คุณฟังและอ่านออกเสียงโดยไม่เปิดไมโครโฟนก็ได้')
          ], T('Self-ratings are your own judgement. Check device volume and Settings if you cannot hear the model voice.','คะแนนที่ให้ตนเองเป็นความเห็นของคุณ หากไม่ได้ยินเสียงตัวอย่าง ให้ตรวจสอบระดับเสียงอุปกรณ์และการตั้งค่า')),
        step('settings', T('Settings & saving','ตั้งค่าและบันทึก'), T('Make the app comfortable to use','ปรับแอปให้เหมาะกับคุณ'),
          T('Use the language control for English or Thai, and Settings for audio and reading preferences.','ใช้ตัวเลือกภาษาเพื่อสลับอังกฤษหรือไทย และใช้การตั้งค่าเพื่อปรับเสียงและการอ่าน'), [
            T('Choose an available voice, test the voice, adjust playback speed and choose a comfortable text size. Voices depend on your device and browser.','เลือกเสียงที่มี ทดสอบเสียง ปรับความเร็ว และเลือกขนาดตัวอักษรที่อ่านสะดวก เสียงที่มีขึ้นอยู่กับอุปกรณ์และเบราว์เซอร์'),
            T('Registered progress saves to the server while connected. Read any saving warning and retry when your connection returns; do not assume a failed save is stored.','ความคืบหน้าในบัญชีบันทึกบนเซิร์ฟเวอร์เมื่อเชื่อมต่อได้ อ่านข้อความเตือนการบันทึกและลองอีกครั้งเมื่อเชื่อมต่อได้ อย่าถือว่าข้อมูลที่บันทึกไม่สำเร็จถูกเก็บแล้ว'),
            T('Reset progress clears the current course’s learning record after confirmation. It cannot be undone and does not restart or extend registered course access.','รีเซ็ตความคืบหน้าจะล้างบันทึกการเรียนของหลักสูตรปัจจุบันหลังยืนยัน ย้อนกลับไม่ได้ และไม่เริ่มนับใหม่หรือต่ออายุสิทธิ์เรียนในบัญชีที่ลงทะเบียน')
          ], guest ? T('Audio and display preferences may remain in this browser, but guest learning progress still clears on refresh or sign-out.','การตั้งค่าเสียงและการแสดงผลอาจยังอยู่ในเบราว์เซอร์นี้ แต่ความคืบหน้าผู้เยี่ยมชมยังคงถูกล้างเมื่อรีเฟรชหรือออกจากระบบ') : T('For registered courses, check the current course and its access deadline before resetting progress or starting a long study session.','สำหรับหลักสูตรในบัญชีที่ลงทะเบียน ให้ตรวจสอบหลักสูตรปัจจุบันและวันสิ้นสุดสิทธิ์ก่อนรีเซ็ตความคืบหน้าหรือเริ่มเรียนเป็นเวลานาน')),
        step('help', T('Account & help','บัญชีและช่วยเหลือ'), T('Come back to this guide any time','เปิดคู่มือนี้ได้ทุกเมื่อ'),
          T('Select the ? icon or How to use the app to reopen this guide. In Account, choose Read the tutorial again.','เลือกไอคอน ? หรือวิธีใช้แอป เพื่อเปิดคู่มือนี้อีกครั้ง ในหน้าบัญชีให้เลือกอ่านคู่มือการใช้งานอีกครั้ง'), [
            T('Registered learners can use Change password. If you forget a password, contact your administrator for a temporary one, then change it when signing in.','ผู้เรียนที่ลงทะเบียนใช้เปลี่ยนรหัสผ่านได้ หากลืมรหัส ให้ติดต่อผู้ดูแลระบบเพื่อรับรหัสผ่านชั่วคราว แล้วเปลี่ยนเมื่อเข้าสู่ระบบ'),
            T('Sign out when you finish on a shared device. Signing out does not pause a registered course’s access period; guest progress is cleared.','ออกจากระบบเมื่อใช้อุปกรณ์ร่วมกันเสร็จ การออกจากระบบไม่หยุดนับสิทธิ์เรียนในบัญชี และจะล้างความคืบหน้าผู้เยี่ยมชม'),
            T('This tutorial is available to guests too. Use Next and Back, or choose a topic directly, to revisit only the part you need.','ผู้เยี่ยมชมเปิดคู่มือนี้ได้เช่นกัน ใช้ถัดไปและย้อนกลับ หรือเลือกหัวข้อโดยตรงเพื่ออ่านเฉพาะส่วนที่ต้องการ')
          ], T('A simple routine: read one lesson point, practise five useful entries, then review one thing you found difficult.','กิจวัตรง่าย ๆ: อ่านหนึ่งประเด็นในบทเรียน ฝึกห้ารายการที่ใช้ได้จริง แล้วทบทวนหนึ่งสิ่งที่ยังยาก'))
      ]
    };
  }
  return { get };
})();
