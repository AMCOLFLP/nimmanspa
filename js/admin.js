/* Server-backed administration. Student records and temporary credentials are
   held only in memory; authorization is checked on every API request. */
const Admin = (() => {
  const T = (en, th) => I18N.current === 'th' ? th : en;
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const num = value => Number.isFinite(Number(value)) ? Number(value) : 0;
  const root = () => document.getElementById('adminRoot');
  let active = false, initialized = false, generation = 0, loading = false, busy = false;
  let list = null, student = null, selectedId = null, form = null, confirm = null;
  let error = '', notice = '', secret = null;
  let filters = {q:'',course:'all',access:'all',account:'all',page:1};

  function date(value, withTime = false){
    if (!value) return T('Not yet', 'ยังไม่มี');
    const d = new Date(value);
    if (!Number.isFinite(d.getTime())) return T('Unavailable', 'ไม่มีข้อมูล');
    return new Intl.DateTimeFormat(I18N.current === 'th' ? 'th-TH' : 'en-GB', {
      day:'numeric',month:'short',year:'numeric', ...(withTime ? {hour:'2-digit',minute:'2-digit'} : {}),
    }).format(d);
  }
  function nameOf(course){ return I18N.current === 'th' ? course.title_th || course.title : course.title || course.course_id; }
  function courseName(id){ return typeof Courses !== 'undefined' ? Courses.name(id) || id : id; }
  function button(action, label, extra = '', kind = ''){
    return `<button type="button" class="ad-btn ${kind}" data-admin-action="${action}" ${extra}>${esc(label)}</button>`;
  }
  function badge(value, kind = ''){ return `<span class="ad-badge ${kind}">${esc(value)}</span>`; }
  function accessLabel(access){
    if (access?.status === 'active') return T('Learning open', 'กำลังเปิดให้เรียน');
    if (access?.status === 'expired') return T('Access ended', 'สิทธิ์เรียนสิ้นสุดแล้ว');
    return T('Not started', 'ยังไม่เริ่มเรียน');
  }
  function clearSecret(){
    secret = null;
    const field = document.getElementById('adTemporaryPassword');
    if (field) field.value = '';
    document.getElementById('adCredential')?.remove();
  }
  function beginNavigation(){
    clearSecret(); generation++; error = ''; notice = ''; confirm = null; form = null; busy = false;
    return generation;
  }
  function focus(id){ document.getElementById(id)?.focus({preventScroll:true}); }
  function handleError(err){
    if (err?.status === 401){ exit(); Auth.forceSignedOut(); return; }
    if (err?.error === 'password_change_required'){
      clearSecret(); AccountSecurity.open({required:true}); return;
    }
    const messages = {
      network: T('Could not reach the server. Check your connection and try again.', 'เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ โปรดตรวจสอบอินเทอร์เน็ตแล้วลองอีกครั้ง'),
      forbidden: T('This account does not have administrator access.', 'บัญชีนี้ไม่มีสิทธิ์ผู้ดูแลระบบ'),
      email_used: T('An account already uses this email address.', 'มีบัญชีที่ใช้อีเมลนี้แล้ว'),
      csrf_invalid: T('Your session needs to be refreshed. Sign out, then sign in again.', 'โปรดออกจากระบบแล้วเข้าสู่ระบบอีกครั้ง'),
    };
    if (err?.status === 403 && err?.error !== 'csrf_invalid'){
      clearSecret(); list = null; student = null; selectedId = null; form = null; confirm = null;
    }
    error = messages[err?.error] || err?.message || T('The request could not be completed. Please try again.', 'ดำเนินการไม่สำเร็จ โปรดลองอีกครั้ง');
  }
  function alerts(){
    return `${error ? `<div class="ad-message is-error" role="alert">${esc(error)}</div>` : ''}${notice ? `<div class="ad-message" role="status">${esc(notice)}</div>` : ''}`;
  }
  function header(){
    return `<header class="ad-heading"><div><p class="ad-eyebrow">${esc(T('NIMMANSPA · Administration', 'NIMMANSPA · ผู้ดูแลระบบ'))}</p><h2 id="adHeading" tabindex="-1">${esc(T('Your learning community', 'ดูแลผู้เรียนของคุณ'))}</h2><p>${esc(T('Follow each learner’s progress and keep their account ready for learning.', 'ติดตามความก้าวหน้าและจัดการบัญชีให้ผู้เรียนพร้อมเรียนรู้'))}</p></div><div class="ad-header-actions">${button('password',T('My password','รหัสผ่านของฉัน'))}${button('logout',T('Log out','ออกจากระบบ'))}</div></header>`;
  }
  function kpis(){
    const s = list?.summary;
    const tiles = [
      ['total_students',T('Student accounts','บัญชีผู้เรียน'),T('All registered learners','ผู้เรียนที่ลงทะเบียนทั้งหมด')],
      ['active_accounts',T('Enabled accounts','บัญชีที่เปิดใช้งาน'),T('Can sign in to learn','เข้าสู่ระบบเพื่อเรียนได้')],
      ['active_enrollments',T('Open course windows','หลักสูตรที่ยังมีสิทธิ์เรียน'),T('Within the 30-day window','อยู่ในช่วงสิทธิ์เรียน 30 วัน')],
      ['expired_enrollments',T('Course access ended','หลักสูตรที่สิทธิ์สิ้นสุดแล้ว'),T('Saved progress is retained','ยังคงเก็บความก้าวหน้าไว้')],
    ];
    return `<section class="ad-kpis" aria-label="${esc(T('Overview of all students','ภาพรวมผู้เรียนทั้งหมด'))}">${tiles.map(([key,label,note]) => `<div class="ad-kpi"><p>${esc(label)}</p><strong>${s ? num(s[key]).toLocaleString() : '—'}</strong><span>${esc(note)}</span></div>`).join('')}</section>`;
  }
  function option(value,label,current){ return `<option value="${esc(value)}" ${current === value ? 'selected' : ''}>${esc(label)}</option>`; }
  function controls(){
    return `<form id="adFilterForm" class="ad-filters"><label class="ad-search">${esc(T('Find a student','ค้นหาผู้เรียน'))}<input id="adSearch" name="q" type="search" maxlength="150" value="${esc(filters.q)}" placeholder="${esc(T('Name or email address','ชื่อหรืออีเมล'))}"></label><label>${esc(T('Course','หลักสูตร'))}<select name="course">${option('all',T('All courses','ทุกหลักสูตร'),filters.course)}${['spa','cruise','salon'].map(id => option(id,courseName(id),filters.course)).join('')}</select></label><label>${esc(T('Course access','สิทธิ์เรียน'))}<select name="access">${[['all',T('Any access','ทุกสถานะ')],['not_started',T('Not started','ยังไม่เริ่มเรียน')],['active',T('Learning open','กำลังเปิดให้เรียน')],['expired',T('Access ended','สิทธิ์สิ้นสุดแล้ว')]].map(([v,l]) => option(v,l,filters.access)).join('')}</select></label><label>${esc(T('Account','บัญชี'))}<select name="account">${[['all',T('All accounts','ทุกบัญชี')],['active',T('Enabled','เปิดใช้งาน')],['inactive',T('Disabled','ปิดใช้งาน')]].map(([v,l]) => option(v,l,filters.account)).join('')}</select></label><button class="ad-btn" type="submit" ${loading ? 'disabled' : ''}>${esc(T('Search','ค้นหา'))}</button></form>`;
  }
  function progress(course){
    const pct = Math.max(0, Math.min(100, num(course.progress_percent)));
    return `<div class="ad-progress"><progress max="100" value="${pct}" aria-label="${esc(T(`${nameOf(course)}: ${course.chapters_studied} of ${course.chapters_total} chapters studied`,`${nameOf(course)}: เรียนแล้ว ${course.chapters_studied} จาก ${course.chapters_total} บท`))}"></progress><span>${num(course.chapters_studied)}/${num(course.chapters_total)}</span></div>`;
  }
  function table(){
    const students = list?.students || [];
    if (loading) return `<div class="ad-empty" role="status"><span class="ad-spinner" aria-hidden="true"></span><h3>${esc(T('Loading student records…','กำลังโหลดข้อมูลผู้เรียน…'))}</h3></div>`;
    if (!list) return `<div class="ad-empty"><h3>${esc(T('Student records are unavailable','ยังไม่สามารถแสดงข้อมูลผู้เรียน'))}</h3><p>${esc(T('Try loading the dashboard again.','ลองโหลดแดชบอร์ดอีกครั้ง'))}</p>${button('refresh',T('Try again','ลองอีกครั้ง'))}</div>`;
    if (!students.length) return `<div class="ad-empty"><span class="ad-empty-mark" aria-hidden="true">○</span><h3>${esc(T('No students to show','ไม่มีผู้เรียนที่จะแสดง'))}</h3><p>${esc(filters.q || filters.course !== 'all' || filters.access !== 'all' || filters.account !== 'all' ? T('Adjust your search or filters to find a learner.','ปรับคำค้นหาหรือตัวกรองเพื่อค้นหาผู้เรียน') : T('Create the first student account to get started.','สร้างบัญชีผู้เรียนคนแรกเพื่อเริ่มต้น'))}</p></div>`;
    return `<div class="ad-table-wrap" tabindex="0" role="region" aria-label="${esc(T('Student records','ข้อมูลผู้เรียน'))}"><table class="ad-table"><thead><tr><th scope="col">${esc(T('Student','ผู้เรียน'))}</th><th scope="col">${esc(T('Account','บัญชี'))}</th><th scope="col">${esc(T('Course progress','ความก้าวหน้าแต่ละหลักสูตร'))}</th><th scope="col">${esc(T('Last saved activity','กิจกรรมที่บันทึกล่าสุด'))}</th><th scope="col"><span class="ad-sr-only">${esc(T('View account','ดูบัญชี'))}</span></th></tr></thead><tbody>${students.map(s => `<tr><th scope="row"><button class="ad-student-link" type="button" data-admin-action="student" data-id="${num(s.id)}"><span class="ad-avatar" aria-hidden="true">${esc((s.name || '?').trim().charAt(0).toUpperCase())}</span><span><b>${esc(s.name)}</b><small>${esc(s.email)}</small></span></button></th><td>${badge(s.is_active ? T('Enabled','เปิดใช้งาน') : T('Disabled','ปิดใช้งาน'),s.is_active ? 'is-active' : 'is-muted')}${s.must_change_password ? `<small class="ad-reset-note">${esc(T('Password change required','ต้องเปลี่ยนรหัสผ่าน'))}</small>` : ''}</td><td><div class="ad-row-courses">${(s.courses || []).filter(c => filters.course === 'all' || c.course_id === filters.course).map(c => `<div><span>${esc(nameOf(c))}<small class="ad-access-${esc(c.access?.status)}">${esc(accessLabel(c.access))}</small></span>${progress(c)}</div>`).join('')}</div></td><td class="ad-date">${esc(date(s.last_activity_at))}</td><td>${button('student',T('View','ดูข้อมูล'),`data-id="${num(s.id)}" aria-label="${esc(T(`View ${s.name}`,`ดูข้อมูล ${s.name}`))}"`,'ad-btn-small')}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function pagination(){
    if (!list || loading) return '';
    const p = list.pagination, total = num(p.total), page = num(p.page), pages = Math.max(1,num(p.total_pages));
    const first = total ? (page - 1) * num(p.per_page) + 1 : 0;
    return `<div class="ad-pagination"><span>${esc(T(`${first}–${Math.min(total,page*num(p.per_page))} of ${total} students`,`${first}–${Math.min(total,page*num(p.per_page))} จาก ${total} คน`))}</span><div>${button('prev',T('Previous','ก่อนหน้า'),page <= 1 ? 'disabled' : '')}<span>${esc(T(`Page ${page} of ${pages}`,`หน้า ${page} จาก ${pages}`))}</span>${button('next',T('Next','ถัดไป'),page >= pages ? 'disabled' : '')}</div></div>`;
  }
  function credentials(){
    if (!secret) return '';
    return `<section id="adCredential" class="ad-credential" aria-labelledby="adCredentialTitle"><p class="ad-eyebrow">${esc(T('One-time display','แสดงเพียงครั้งเดียว'))}</p><h3 id="adCredentialTitle" tabindex="-1">${esc(T('Temporary password is ready','รหัสผ่านชั่วคราวพร้อมแล้ว'))}</h3><p><strong>${esc(secret.name)}</strong> · ${esc(secret.email)}</p><p>${esc(T('Share this directly with the student through a trusted channel. They must choose a new password when they sign in. Nothing has been sent automatically.','ส่งรหัสนี้ให้ผู้เรียนโดยตรงผ่านช่องทางที่เชื่อถือได้ ผู้เรียนต้องตั้งรหัสผ่านใหม่เมื่อเข้าสู่ระบบ ระบบไม่ได้ส่งรหัสให้อัตโนมัติ'))}</p><label for="adTemporaryPassword">${esc(T('Temporary password','รหัสผ่านชั่วคราว'))}</label><div class="ad-secret-row"><input id="adTemporaryPassword" type="password" readonly autocomplete="off" spellcheck="false" value="${esc(secret.value)}">${button('reveal',T('Show','แสดง'),'aria-controls="adTemporaryPassword" aria-pressed="false"')}</div><p class="ad-caption">${esc(T('Save it securely now. Leaving this view, switching away, changing language or dismissing this message clears it.','เก็บรหัสผ่านอย่างปลอดภัยตอนนี้ เมื่อออกจากหน้านี้ สลับไปแอปอื่น เปลี่ยนภาษา หรือปิดข้อความ รหัสจะถูกล้าง'))}</p>${button('dismiss-secret',T('I have saved it · Dismiss','เก็บรหัสแล้ว · ปิดข้อความ'),'','ad-btn-primary')}</section>`;
  }
  function accountForm(){
    if (!form) return '';
    const edit = form.mode === 'edit', s = form.values;
    return `<section class="ad-panel ad-form-panel" aria-labelledby="adFormTitle"><div class="ad-panel-heading"><h3 id="adFormTitle" tabindex="-1">${esc(edit ? T('Edit student account','แก้ไขบัญชีผู้เรียน') : T('Create student account','สร้างบัญชีผู้เรียน'))}</h3>${button('cancel-form',T('Cancel','ยกเลิก'),busy ? 'disabled' : '')}</div><p class="ad-caption">${esc(edit ? T('Saving changes signs this student out. Their saved progress stays with the account.','เมื่อบันทึกการเปลี่ยนแปลง ผู้เรียนจะถูกออกจากระบบ ความก้าวหน้าที่บันทึกไว้ยังคงอยู่กับบัญชี') : T('A temporary password will appear once after creation. Course access starts only when the student starts each course.','รหัสผ่านชั่วคราวจะแสดงครั้งเดียวหลังสร้างบัญชี สิทธิ์เรียนเริ่มเมื่อผู้เรียนเริ่มแต่ละหลักสูตรเท่านั้น'))}</p><form id="adAccountForm"><div class="ad-form-grid"><label>${esc(T('Full name','ชื่อ-นามสกุล'))}<input name="name" type="text" autocomplete="off" maxlength="120" value="${esc(s.name)}" required ${busy ? 'disabled' : ''}></label><label>${esc(T('Email address','อีเมล'))}<input name="email" type="email" autocomplete="off" maxlength="190" value="${esc(s.email)}" required ${busy ? 'disabled' : ''}></label><label>${esc(T('Occupation','อาชีพ'))}<select name="role" ${busy ? 'disabled' : ''}>${[['therapist',T('Therapist','นักบำบัด')],['reception',T('Receptionist','พนักงานต้อนรับ')],['manager',T('Manager','ผู้จัดการ')],['other',T('Other','อื่น ๆ')]].map(([v,l]) => option(v,l,s.role)).join('')}</select></label><label>${esc(T('Preferred language','ภาษาที่ต้องการ'))}<select name="lang" ${busy ? 'disabled' : ''}>${option('en','English',s.lang)}${option('th','ไทย',s.lang)}</select></label></div><p class="ad-caption">${esc(T('These are student accounts. Occupation does not grant administrator permissions.','นี่คือบัญชีผู้เรียน การเลือกอาชีพไม่ได้ให้สิทธิ์ผู้ดูแลระบบ'))}</p><button class="ad-btn ad-btn-primary" type="submit" ${busy ? 'disabled' : ''}>${esc(busy ? T('Saving…','กำลังบันทึก…') : edit ? T('Save changes','บันทึกการเปลี่ยนแปลง') : T('Create account','สร้างบัญชี'))}</button></form></section>`;
  }
  function confirmation(){
    if (!confirm || !student) return '';
    const reset = confirm === 'reset', disabling = confirm === 'disable';
    return `<section class="ad-confirm" aria-labelledby="adConfirmTitle"><h3 id="adConfirmTitle" tabindex="-1">${esc(reset ? T('Reset this student’s password?','รีเซ็ตรหัสผ่านของผู้เรียนคนนี้หรือไม่?') : disabling ? T('Disable this student’s account?','ปิดใช้งานบัญชีผู้เรียนคนนี้หรือไม่?') : T('Enable this student’s account?','เปิดใช้งานบัญชีผู้เรียนคนนี้หรือไม่?'))}</h3><p><strong>${esc(student.name)}</strong><br>${esc(student.email)}</p><p>${esc(reset ? T('The current password will stop working and existing sessions will be signed out. You will receive a temporary password to share directly. The student must change it at their next sign-in.','รหัสผ่านเดิมจะใช้ไม่ได้และเซสชันที่เข้าสู่ระบบอยู่จะถูกออกจากระบบ คุณจะได้รับรหัสผ่านชั่วคราวเพื่อส่งให้ผู้เรียนโดยตรง ผู้เรียนต้องเปลี่ยนรหัสเมื่อเข้าสู่ระบบครั้งถัดไป') : disabling ? T('They will be signed out and unable to sign in. Their saved progress is kept. Course access dates continue to run.','ผู้เรียนจะถูกออกจากระบบและเข้าสู่ระบบไม่ได้ ความก้าวหน้ายังคงอยู่ ระยะเวลาสิทธิ์เรียนยังคงนับต่อไป') : T('They can sign in again. Existing course start and end dates remain the same.','ผู้เรียนจะเข้าสู่ระบบได้อีกครั้ง วันเริ่มและสิ้นสุดสิทธิ์เรียนยังคงเดิม'))}</p><div class="ad-action-row">${button('confirm',busy ? T('Saving…','กำลังบันทึก…') : reset ? T('Reset password','รีเซ็ตรหัสผ่าน') : disabling ? T('Disable account','ปิดใช้งานบัญชี') : T('Enable account','เปิดใช้งานบัญชี'),busy ? 'disabled' : '',reset || disabling ? 'ad-btn-danger' : 'ad-btn-primary')}${button('cancel-confirm',T('Cancel','ยกเลิก'),busy ? 'disabled' : '')}</div></section>`;
  }
  function courseDetail(c){
    const access = c.access || {}, chapters = c.chapters || [];
    const stats = [[num(c.words_known),T('Words known','คำศัพท์ที่รู้')],[c.quiz_average == null ? '—' : `${Math.round(num(c.quiz_average))}%`,T('Best-score average','เฉลี่ยคะแนนสูงสุด')],[num(c.quiz_activities),T('Quiz activities','กิจกรรมแบบทดสอบ')],[num(c.practice_sessions),T('Saved practice sessions','ครั้งที่ฝึกที่บันทึกไว้')],[num(c.assessment_attempts),T('Saved assessments','แบบประเมินที่บันทึกไว้')]];
    const isStarted = access.status === 'active' || access.status === 'expired';
    return `<article class="ad-course"><header><div><p class="ad-eyebrow">${esc(T('Course progress','ความก้าวหน้าหลักสูตร'))}</p><h3>${esc(nameOf(c))}</h3></div>${badge(accessLabel(access),access.status === 'active' ? 'is-active' : access.status === 'expired' ? 'is-expired' : 'is-muted')}</header><div class="ad-course-progress"><strong>${Math.max(0,Math.min(100,num(c.progress_percent)))}<span>%</span></strong><div>${progress(c)}<p>${esc(T('chapters marked studied','บทที่ทำเครื่องหมายว่าเรียนแล้ว'))}</p></div></div><dl class="ad-access-dates"><div><dt>${esc(T('Started','เริ่มเรียน'))}</dt><dd>${isStarted ? esc(date(access.started_at,true)) : '—'}</dd></div><div><dt>${esc(T('Access ends','สิ้นสุดสิทธิ์เรียน'))}</dt><dd>${isStarted ? esc(date(access.expires_at,true)) : '—'}</dd></div><div><dt>${esc(T('Last saved activity','กิจกรรมที่บันทึกล่าสุด'))}</dt><dd>${esc(date(c.last_activity_at,true))}</dd></div></dl>${access.status === 'active' ? `<p class="ad-window-note">${esc(T(`${Math.max(0,num(access.remaining_days))} days remaining in this course’s 30-day learning window.`, `เหลือ ${Math.max(0,num(access.remaining_days))} วัน ในช่วงสิทธิ์เรียน 30 วันของหลักสูตรนี้`))}</p>` : access.status === 'expired' ? `<p class="ad-window-note">${esc(T('Course access has ended. Saved progress remains available for review here.','สิทธิ์เรียนหลักสูตรนี้สิ้นสุดแล้ว ยังตรวจสอบความก้าวหน้าที่บันทึกไว้ได้ที่นี่'))}</p>` : `<p class="ad-window-note">${esc(T('The 30-day clock begins when the student starts this course.','ระยะเวลา 30 วันจะเริ่มเมื่อผู้เรียนเริ่มหลักสูตรนี้'))}</p>`}<div class="ad-course-stats">${stats.map(([v,l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('')}</div><details class="ad-chapters"><summary>${esc(T('View chapter progress','ดูความก้าวหน้ารายบท'))}<span>${num(c.chapters_studied)}/${num(c.chapters_total)}</span></summary><ol>${chapters.map(ch => `<li class="${ch.studied ? 'is-done' : ''}"><span class="ad-chapter-icon" aria-hidden="true">${ch.studied ? '✓' : '○'}</span><span>${esc(I18N.current === 'th' ? ch.title_th || ch.title : ch.title)}<small>${esc(ch.studied ? T('Studied','เรียนแล้ว') : T('Not yet studied','ยังไม่เรียน'))}${ch.studied_at ? ` · ${esc(date(ch.studied_at))}` : ''}</small></span></li>`).join('')}</ol></details>${recentActivity(c)}</article>`;
  }
  function recentActivity(c){
    const sessions = (c.recent_practice || []).slice(0,5), attempts = (c.recent_assessments || []).slice(0,5);
    if (!sessions.length && !attempts.length) return '';
    return `<details class="ad-chapters"><summary>${esc(T('Recent practice & assessments','การฝึกและแบบประเมินล่าสุด'))}</summary><ul class="ad-recent">${sessions.map(r => `<li><span>${esc(r.activity || T('Practice','การฝึก'))}<small>${esc(date(r.at,true))}${r.assisted ? ` · ${esc(T('With support','ใช้ตัวช่วย'))}` : ''}</small></span><b>${num(r.score)}/${num(r.total)}</b></li>`).join('')}${attempts.map(r => `<li><span>${esc(T('Assessment','แบบประเมิน'))}<small>${esc(date(r.at,true))}${r.supported ? ` · ${esc(T('With support','ใช้ตัวช่วย'))}` : ''}</small></span><b>${r.percent == null ? `${num(r.score)}/${num(r.total)}` : `${Math.round(num(r.percent))}%`}</b></li>`).join('')}</ul></details>`;
  }
  function detail(){
    const back = button('back',T('← All students','← ผู้เรียนทั้งหมด'),'','ad-btn-back');
    if (loading || !student) return `${back}<div class="ad-empty" role="status">${loading ? `<span class="ad-spinner" aria-hidden="true"></span><h3>${esc(T('Loading student…','กำลังโหลดผู้เรียน…'))}</h3>` : `<h3>${esc(T('Student record is unavailable','ไม่สามารถแสดงข้อมูลผู้เรียน'))}</h3>${button('retry-detail',T('Try again','ลองอีกครั้ง'))}`}</div>`;
    return `${back}<section class="ad-student-heading"><div class="ad-avatar is-large" aria-hidden="true">${esc((student.name || '?').trim().charAt(0).toUpperCase())}</div><div><h2 id="adStudentHeading" tabindex="-1">${esc(student.name)}</h2><p>${esc(student.email)}</p><div class="ad-action-row">${badge(student.is_active ? T('Account enabled','บัญชีเปิดใช้งาน') : T('Account disabled','บัญชีปิดใช้งาน'),student.is_active ? 'is-active' : 'is-muted')}${student.must_change_password ? badge(T('Password change required','ต้องเปลี่ยนรหัสผ่าน'),'is-expired') : ''}</div></div></section><dl class="ad-profile-meta"><div><dt>${esc(T('Registered','ลงทะเบียน'))}</dt><dd>${esc(date(student.created_at))}</dd></div><div><dt>${esc(T('Last signed in','เข้าสู่ระบบล่าสุด'))}</dt><dd>${esc(date(student.last_login_at,true))}</dd></div><div><dt>${esc(T('Preferred language','ภาษาที่ต้องการ'))}</dt><dd>${student.lang === 'th' ? 'ไทย' : 'English'}</dd></div></dl><div class="ad-student-actions">${button('edit',T('Edit account','แก้ไขบัญชี'),busy ? 'disabled' : '')}${button('reset',T('Reset password','รีเซ็ตรหัสผ่าน'),busy ? 'disabled' : '')}${button(student.is_active ? 'disable' : 'enable',student.is_active ? T('Disable account','ปิดใช้งานบัญชี') : T('Enable account','เปิดใช้งานบัญชี'),busy ? 'disabled' : '',student.is_active ? 'ad-btn-text-danger' : '')}</div>${confirmation()}${credentials()}${accountForm()}<div class="ad-section-title"><h3>${esc(T('Learning progress','ความก้าวหน้าการเรียน'))}</h3><p>${esc(T('Each course has its own 30-day access period.','แต่ละหลักสูตรมีระยะเวลาสิทธิ์เรียน 30 วันแยกกัน'))}</p></div><div class="ad-course-grid">${(student.courses || []).map(courseDetail).join('')}</div><p class="ad-caption ad-method-note">${esc(T('Progress reflects the learner’s saved activity. “Studied” is a learner-marked chapter, and practice scores are self-study results, not a certification or teacher-graded outcome. Dates are shown in your device’s time zone.','ความก้าวหน้าอ้างอิงกิจกรรมที่ผู้เรียนบันทึกไว้ “เรียนแล้ว” เป็นเครื่องหมายที่ผู้เรียนระบุเอง คะแนนฝึกเป็นผลการเรียนด้วยตนเอง ไม่ใช่ใบรับรองหรือผลประเมินจากครู วันที่แสดงตามเขตเวลาของอุปกรณ์คุณ'))}</p>`;
  }
  function paint(){
    if (!active || !root()) return;
    const brand = document.querySelector('.brand-text h1'), tagline = document.querySelector('.brand-text p');
    if (brand) brand.textContent = 'NIMMANSPA';
    if (tagline) tagline.textContent = T('Student administration','การจัดการผู้เรียน');
    root().innerHTML = `${header()}${alerts()}${selectedId ? detail() : `${kpis()}${credentials()}${accountForm()}<section class="ad-panel"><div class="ad-panel-heading"><div><h3>${esc(T('Students','ผู้เรียน'))}</h3><p>${esc(T('Manage accounts and review learning across every course.','จัดการบัญชีและตรวจสอบการเรียนรู้ในทุกหลักสูตร'))}</p></div><div class="ad-action-row">${button('refresh',T('Refresh','รีเฟรช'),loading ? 'disabled' : '')}${button('create',T('+ Add student','+ เพิ่มผู้เรียน'),busy ? 'disabled' : '', 'ad-btn-primary')}</div></div>${controls()}${table()}${pagination()}</section><p class="ad-caption">${esc(T('Overview counts cover all students. Filters apply to the student list below.','ตัวเลขภาพรวมครอบคลุมผู้เรียนทั้งหมด ตัวกรองใช้กับรายชื่อผู้เรียนด้านล่าง'))}</p>`}`;
    root().setAttribute('aria-busy',loading || busy ? 'true' : 'false');
  }
  async function loadList(){
    const token = beginNavigation(); selectedId = null; student = null; loading = true; paint();
    try {
      const params = new URLSearchParams({...filters,per_page:25});
      const result = await Api.get(`admin/students.php?${params}`);
      if (!active || token !== generation) return;
      list = result;
    } catch (err){ if (active && token === generation){ list = null; handleError(err); } }
    finally { if (active && token === generation){ loading = false; paint(); } }
  }
  async function loadStudent(id){
    if (!Number.isInteger(Number(id)) || Number(id) < 1) return;
    const token = beginNavigation(); selectedId = Number(id); student = null; loading = true; paint();
    try {
      const result = await Api.get(`admin/student.php?id=${selectedId}`);
      if (!active || token !== generation) return;
      student = result.student;
    } catch (err){ if (active && token === generation) handleError(err); }
    finally { if (active && token === generation){ loading = false; paint(); focus('adStudentHeading'); } }
  }
  async function saveAccount(element){
    if (busy || !form || !element.reportValidity()) return;
    const values = Object.fromEntries(new FormData(element).entries());
    values.name = values.name.trim(); values.email = values.email.trim();
    if (!values.name){ error = T('Enter the student’s name.','กรุณากรอกชื่อผู้เรียน'); paint(); return; }
    const edit = form.mode === 'edit';
    form.values = values; values.is_active = edit ? !!student.is_active : true;
    if (edit) values.id = student.id;
    const token = generation; busy = true; error = ''; notice = ''; paint();
    try {
      const result = await Api.post(edit ? 'admin/student.php' : 'admin/students.php',values);
      if (!active || token !== generation) return;
      student = result.student; selectedId = student.id; form = null;
      notice = edit ? T('Account updated.','อัปเดตบัญชีแล้ว') : T('Student account created.','สร้างบัญชีผู้เรียนแล้ว');
      if (result.temporary_password) secret = {value:result.temporary_password,name:student.name,email:student.email};
    } catch (err){ if (active && token === generation) handleError(err); }
    finally { if (active && token === generation){ busy = false; paint(); focus(secret ? 'adCredentialTitle' : form ? 'adFormTitle' : 'adStudentHeading'); } }
  }
  async function confirmAction(){
    if (busy || !confirm || !student) return;
    const action = confirm, token = generation, target = {...student};
    busy = true; error = ''; notice = ''; clearSecret(); paint();
    try {
      const result = action === 'reset' ? await Api.post('admin/reset-password.php',{id:target.id}) : await Api.post('admin/student.php',{id:target.id,name:target.name,email:target.email,role:target.role,lang:target.lang,is_active:action === 'enable'});
      if (!active || token !== generation) return;
      confirm = null;
      if (action === 'reset'){
        student.must_change_password = true;
        secret = {value:result.temporary_password,name:target.name,email:target.email};
        notice = T('Password reset. Previous sign-ins have been revoked.','รีเซ็ตรหัสผ่านแล้ว การเข้าสู่ระบบก่อนหน้านี้ถูกยกเลิก');
      } else {
        student = result.student;
        notice = action === 'enable' ? T('Account enabled.','เปิดใช้งานบัญชีแล้ว') : T('Account disabled.','ปิดใช้งานบัญชีแล้ว');
      }
    } catch (err){ if (active && token === generation) handleError(err); }
    finally { if (active && token === generation){ busy = false; paint(); focus(secret ? 'adCredentialTitle' : 'adStudentHeading'); } }
  }
  function reveal(buttonElement){
    const field = document.getElementById('adTemporaryPassword');
    if (!field) return;
    const show = field.type === 'password'; field.type = show ? 'text' : 'password';
    buttonElement.textContent = show ? T('Hide','ซ่อน') : T('Show','แสดง');
    buttonElement.setAttribute('aria-pressed',String(show));
  }
  function init(){
    if (initialized || !root()) return;
    initialized = true;
    root().addEventListener('click',event => {
      const el = event.target.closest('[data-admin-action]');
      if (!el || !active) return;
      const action = el.dataset.adminAction;
      if (action === 'logout'){ clearSecret(); App.signOut(); return; }
      if (action === 'password'){ clearSecret(); AccountSecurity.open({required:false}); return; }
      if (action === 'reveal'){ reveal(el); return; }
      if (action === 'dismiss-secret'){ clearSecret(); paint(); focus('adStudentHeading'); return; }
      if (busy) return;
      if (action === 'student') loadStudent(el.dataset.id);
      else if (action === 'refresh' || action === 'back') loadList();
      else if (action === 'retry-detail') loadStudent(selectedId);
      else if (action === 'prev' || action === 'next'){ filters.page += action === 'prev' ? -1 : 1; loadList(); }
      else if (action === 'create' || action === 'edit'){
        clearSecret(); confirm = null; error = ''; notice = '';
        form = {mode:action === 'edit' ? 'edit' : 'create',values:action === 'edit' ? {...student} : {name:'',email:'',role:'other',lang:I18N.current}};
        paint(); focus('adFormTitle');
      } else if (action === 'cancel-form'){ form = null; error = ''; paint(); focus(selectedId ? 'adStudentHeading' : 'adHeading'); }
      else if (['reset','disable','enable'].includes(action)){ clearSecret(); form = null; confirm = action; error = ''; notice = ''; paint(); focus('adConfirmTitle'); }
      else if (action === 'cancel-confirm'){ confirm = null; error = ''; paint(); focus('adStudentHeading'); }
      else if (action === 'confirm') confirmAction();
    });
    root().addEventListener('submit',event => {
      if (event.target.id === 'adFilterForm'){
        event.preventDefault(); if (busy) return;
        filters = {...Object.fromEntries(new FormData(event.target).entries()),page:1}; loadList();
      } else if (event.target.id === 'adAccountForm'){ event.preventDefault(); saveAccount(event.target); }
    });
    window.addEventListener('pagehide',clearSecret);
    document.addEventListener('visibilitychange',() => { if (document.visibilityState === 'hidden') clearSecret(); });
  }
  function open(){
    const u = Auth.currentUser();
    if (!u || !u.is_admin || u.must_change_password) return;
    active = true; init(); document.body.classList.add('admin-mode'); document.body.classList.remove('sb-open');
    document.getElementById('authWrap')?.classList.remove('active');
    document.getElementById('courseWrap')?.classList.remove('active');
    const shell = document.getElementById('appShell'); if (shell) shell.style.display = 'block';
    Nav.go('admin'); const pending = loadList(); focus('adHeading'); return pending;
  }
  function exit(){
    active = false; generation++; clearSecret(); list = null; student = null; selectedId = null; form = null; confirm = null; loading = false; busy = false; error = ''; notice = '';
    filters = {q:'',course:'all',access:'all',account:'all',page:1};
    document.body.classList.remove('admin-mode'); if (root()) root().innerHTML = '';
  }
  function render(){ clearSecret(); paint(); }
  return {init,open,render,exit,isOpen:() => active};
})();
