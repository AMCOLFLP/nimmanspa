/* =========================================================================
   API — thin fetch wrapper for the PHP/MySQL backend in backend/api/.
   Every call sends and expects JSON and includes the session cookie; the
   server-side PHP session (not anything the client sends) is what actually
   gates access to an account's data. Guest mode never calls this.
   ========================================================================= */

const Api = (() => {
  const BASE = 'backend/api/';

  async function request(path, options = {}){
    let res;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const token = typeof Auth !== 'undefined' ? Auth.csrfToken() : '';
    try {
      res = await fetch(BASE + path, {
        method: options.method || 'GET',
        credentials: 'same-origin',
        cache: 'no-store',
        signal: controller.signal,
        headers: { 'Accept':'application/json', ...(options.body ? {'Content-Type':'application/json'} : {}), ...(token ? {'X-CSRF-Token':token} : {}) },
        body: options.body ? JSON.stringify(options.body) : undefined,
      });
    } catch (e) {
      throw { ok:false, error:'network', message:'Could not reach the server.' };
    } finally {
      clearTimeout(timeout);
    }

    let json = null;
    try { json = await res.json(); } catch (e) { /* empty/non-JSON body */ }

    if (!res.ok || !json || json.ok === false){
      const err = (json && json.error) || 'server';
      const message = (json && json.message) || 'Something went wrong.';
      if (err === 'password_change_required' && typeof Auth !== 'undefined') Auth.requirePasswordChange();
      throw { ok:false, status:res.status, error:err, message };
    }
    return json;
  }

  return {
    get(path){ return request(path); },
    post(path, body){ return request(path, { method:'POST', body: body || {} }); },
  };
})();
