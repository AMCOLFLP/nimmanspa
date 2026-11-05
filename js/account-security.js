/* Password fields and temporary credentials never enter browser storage. */
const AccountSecurity = (() => {
  const T = (en, th) => I18N.current === 'th' ? th : en;
  let opened = false, required = false, busy = false, generation = 0;
  const root = () => document.getElementById('accountSecurityRoot');
  function render(){
    if (!opened || busy) return;
    const title=document.querySelector('.brand-text h1'), subtitle=document.querySelector('.brand-text p');
    if (title) title.textContent='NIMMANSPA';
    if (subtitle) subtitle.textContent=T('Account security','ความปลอดภัยของบัญชี');
    root().innerHTML = `<div class="security-card"><p class="security-kicker">${T('ACCOUNT SECURITY','ความปลอดภัยของบัญชี')}</p><h2 tabindex="-1">${required ? T('Choose your own password','ตั้งรหัสผ่านของคุณเอง') : T('Change your password','เปลี่ยนรหัสผ่าน')}</h2><p>${required ? T('Your administrator has issued a temporary password. Replace it before you continue. Your course dates and saved progress stay the same.','ผู้ดูแลออกบัญชีหรือรีเซ็ตรหัสผ่านชั่วคราวให้คุณ กรุณาตั้งรหัสผ่านใหม่ก่อนใช้งานต่อ วันเรียนและความคืบหน้าที่บันทึกไว้จะไม่เปลี่ยน') : T('Use a password you do not use elsewhere. Changing it signs out your other sessions.','ใช้รหัสผ่านที่ไม่ซ้ำกับบริการอื่น การเปลี่ยนรหัสผ่านจะออกจากระบบในอุปกรณ์อื่น')}</p><p class="security-identity">${LearningContent.esc(Auth.currentUser()?.email || '')}</p><form id="accountPasswordForm"><div class="field"><label for="securityCurrent">${required ? T('Current / temporary password','รหัสผ่านปัจจุบัน / รหัสผ่านชั่วคราว') : T('Current password','รหัสผ่านปัจจุบัน')}</label><input type="password" id="securityCurrent" autocomplete="current-password" required></div><div class="field"><label for="securityNew">${T('New password','รหัสผ่านใหม่')}</label><input type="password" id="securityNew" autocomplete="new-password" aria-describedby="securityPasswordHint" required><p id="securityPasswordHint">${T('At least 10 characters. A memorable phrase works well.','อย่างน้อย 10 ตัวอักษร อาจใช้วลีที่คุณจำได้ง่าย')}</p></div><div class="field"><label for="securityConfirm">${T('Confirm new password','ยืนยันรหัสผ่านใหม่')}</label><input type="password" id="securityConfirm" autocomplete="new-password" required></div><p id="securityError" role="alert" hidden></p><button class="btn btn-gold btn-block" type="submit">${T('Save new password','บันทึกรหัสผ่านใหม่')}</button></form><button class="btn btn-ghost btn-block" type="button" data-security="${required ? 'logout' : 'cancel'}">${required ? T('Log out','ออกจากระบบ') : T('Cancel','ยกเลิก')}</button></div>`;
  }
  async function open(options = {}){
    const user = Auth.currentUser();
    if (!user || user.guest) return;
    if (opened && busy) return;
    const force = !!options.required || !!user.must_change_password;
    if (!force && !await Progress.flush()){
      window.alert(T('Your latest progress could not be saved. Check your connection and try again.','บันทึกความคืบหน้าล่าสุดไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง'));
      return;
    }
    if (Auth.currentUser()?.email !== user.email) return;
    Tutorial.close({restoreFocus:false});
    generation++; required = force; opened = true; busy = false;
    Admin.exit();
    Vocab.stopTimers(); Speaking.stopAll(); Speech.stop();
    document.body.classList.add('security-mode');
    document.body.classList.remove('sb-open');
    document.getElementById('authWrap').classList.remove('active');
    document.getElementById('courseWrap').classList.remove('active');
    document.getElementById('appShell').style.display = 'block';
    render(); Nav.go('security');
    root().querySelector('h2')?.focus();
  }
  function exit(){
    generation++; opened = false; busy = false;
    if (root()) root().replaceChildren();
    document.body.classList.remove('security-mode');
  }
  function message(code){
    const labels = {
      password_short:T('Use at least 10 characters for your new password.','รหัสผ่านใหม่ต้องมีอย่างน้อย 10 ตัวอักษร'),
      password_long:T('This password is too long. Use a shorter phrase.','รหัสผ่านยาวเกินไป กรุณาใช้วลีที่สั้นลง'),
      password_invalid:T('Choose a password of at least 10 characters. If it is very long, shorten it.','ตั้งรหัสผ่านอย่างน้อย 10 ตัวอักษร หากยาวมากให้ใช้วลีที่สั้นลง'),
      password_same:T('Choose a new password that differs from your current one.','กรุณาตั้งรหัสผ่านใหม่ที่ต่างจากรหัสผ่านปัจจุบัน'),
      password_incorrect:T('Your current password is incorrect. Please try again.','รหัสผ่านปัจจุบันไม่ถูกต้อง กรุณาลองใหม่'),
      current_password_invalid:T('Your current password is incorrect. Please try again.','รหัสผ่านปัจจุบันไม่ถูกต้อง กรุณาลองใหม่'),
      current_password_incorrect:T('Your current password is incorrect. Please try again.','รหัสผ่านปัจจุบันไม่ถูกต้อง กรุณาลองใหม่'),
      password_unchanged:T('Choose a new password that differs from your current one.','กรุณาตั้งรหัสผ่านใหม่ที่ต่างจากรหัสผ่านปัจจุบัน'),
      csrf_invalid:T('Your session could not be verified. Log out and sign in again.','ไม่สามารถยืนยันเซสชันได้ กรุณาออกจากระบบแล้วเข้าสู่ระบบใหม่'),
      too_many_attempts:T('Too many attempts. Please wait before trying again.','ลองหลายครั้งเกินไป กรุณารอก่อนลองอีกครั้ง'),
    };
    return labels[code] || T('We could not change your password. Please check your connection and try again.','เปลี่ยนรหัสผ่านไม่สำเร็จ กรุณาตรวจสอบการเชื่อมต่อแล้วลองอีกครั้ง');
  }
  function showError(text){const el=document.getElementById('securityError');if(el){el.textContent=text;el.hidden=false;}}
  function init(){
    root().addEventListener('submit', async event => {
      if (event.target.id !== 'accountPasswordForm') return;
      event.preventDefault(); if (busy) return;
      const form=event.target, current=document.getElementById('securityCurrent').value;
      const next=document.getElementById('securityNew').value, confirm=document.getElementById('securityConfirm').value;
      if (!current || !next || !confirm){showError(T('Fill in all three password fields.','กรุณากรอกรหัสผ่านให้ครบทั้งสามช่อง'));return;}
      if (Array.from(next).length < 10){showError(message('password_short'));return;}
      if (new TextEncoder().encode(next).length > 72){showError(message('password_long'));return;}
      if (next !== confirm){showError(T('The new passwords do not match.','รหัสผ่านใหม่ทั้งสองช่องไม่ตรงกัน'));return;}
      if (next === current){showError(message('password_same'));return;}
      const token=generation; busy=true;
      root().querySelectorAll('button,input').forEach(el=>{el.disabled=true;});
      form.setAttribute('aria-busy','true');
      try{
        await Auth.changePassword(current,next);
        if (token!==generation) return;
        form.reset(); exit(); await App.afterAuthSuccess();
      } catch(error){
        if (token!==generation) return;
        if (error.status===401){Auth.forceSignedOut();return;}
        showError(message(error.error));
      } finally {
        if (token===generation){busy=false;root().querySelectorAll('button,input').forEach(el=>{el.disabled=false;});form.removeAttribute('aria-busy');}
      }
    });
    root().addEventListener('click', async event => {
      const action=event.target.closest('[data-security]')?.dataset.security;
      if (!action || busy) return;
      if (action==='logout') await App.signOut();
      if (action==='cancel' && !required){exit();await App.afterAuthSuccess();}
    });
  }
  return {init,open,render,exit,isOpen:()=>opened};
})();
