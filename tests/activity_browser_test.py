"""Actual-app Chromium regression in an in-memory HTML/localStorage harness.
TTS is stubbed: no live deployment, persistence, Safari or microphone claim.
"""
from pathlib import Path
import re,json,base64,traceback
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parents[1]
C=json.loads((R/'content/content.json').read_text())['courses']
checks=[];errors=[];shots=[]
def check(name,ok=True):
 assert ok,name
 checks.append(name);print('PASS',name,flush=True)
def markup():
 h=(R/'index.html').read_text()
 shim="""<script>Object.defineProperty(window,'localStorage',{value:(()=>{const d={};return {getItem:k=>Object.prototype.hasOwnProperty.call(d,k)?d[k]:null,setItem:(k,v)=>d[k]=String(v),removeItem:k=>delete d[k],clear:()=>Object.keys(d).forEach(k=>delete d[k]),key:i=>Object.keys(d)[i]??null,get length(){return Object.keys(d).length}}})(),configurable:true});</script>"""
 h=h.replace('<head>','<head>'+shim)
 css='\n'.join(l for l in (R/'styles.css').read_text().splitlines() if not l.strip().startswith('@import'))
 h=re.sub(r'<link[^>]+href="styles.css"[^>]*>',lambda m:'<style>'+css+'</style>',h)
 h=re.sub(r'<link[^>]+href="https:[^>]+>','',h)
 h=re.sub(r'<script src="([^"]+)"></script>',lambda m:'<script>'+(R/m[1]).read_text().replace('</script','<\\/script')+'</script>',h)
 return re.sub(r'src="(assets/[^"]+)"',lambda m:'src="data:image/png;base64,'+base64.b64encode((R/m[1]).read_bytes()).decode()+'"',h)
def shot(p,name,full=False):
 p.wait_for_timeout(420);p.screenshot(path=str(R/'tests'/name),full_page=full,animations='disabled');shots.append(name)
def lookup(course,id,kind):
 c=C[course]
 if kind=='definition':
  v=next(x for x in c['vocab'] if id==f'{course}-definition-{x["id"]}');return {'options':[v['word']],'correct':0,'level':v['level']}
 if kind=='reading':return next(q for r in c['readings'] for q in r['questions'] if q['id']==id)
 if kind=='fill':return next(l for d in c['dialogues'] for l in d['lines'] if l.get('id')==id)
 return next(q for q in c[{'truefalse':'tf','errorfix':'error'}.get(kind,kind)] if q['id']==id)
def answer(p,course,right=True,audio='play'):
 st=p.locator('#pxStage');kind=st.get_attribute('data-kind');qid=st.get_attribute('data-question-id');typ=st.get_attribute('data-type');q=lookup(course,qid,kind)
 if p.locator('[data-px="audio"]').count():
  if audio=='play':p.locator('[data-px="audio"]').click()
  elif audio=='transcript':p.locator('[data-px="transcript"]').click()
 if typ=='choice':
  if kind=='truefalse':target='True' if q['answer'] else 'False'
  elif kind=='listen':target=q['target']
  elif kind=='fill':target=q['correct']
  else:target=q['options'][q['correct']]
  texts=p.locator('.px-options button').evaluate_all('(els)=>els.map(e=>e.children[1].textContent)');i=texts.index(target)
  if not right:i=(i+1)%len(texts)
  p.locator(f'.px-options button[data-value="{i}"]').click()
 elif typ=='text':
  p.locator('#pxTyped').fill(' '+q['answer'].upper()+'. ' if right else 'zzzt');p.locator('#pxCheck').click()
 else:
  order=list(range(p.locator('.px-token-bank button').count()))
  if not right:order[0],order[1]=order[1],order[0]
  for i in order:p.locator(f'.px-token-bank button[data-value="{i}"]').click()
  p.locator('[data-px="check"]').click()
 fb=p.locator('.px-feedback');assert fb.count()==1,(kind,qid,'no feedback')
 assert ('right' in fb.get_attribute('class'))==right,(kind,qid,right,fb.inner_text())
 return qid
def finish(p,course,wrongs=0,audio='play'):
 ids=[]
 while p.locator('#screen-practiceplay.active').count():
  ids.append(answer(p,course,len(ids)>=wrongs,audio));p.locator('[data-px="next"]').click();assert len(ids)<=25
 n=len(ids)
 assert p.locator('#screen-results.active').count()==1
 assert int(p.locator('#rgTotal').inner_text())==n
 assert int(p.locator('#rgCorrect').inner_text())==n-wrongs
 assert p.locator('.px-review-item').count()==n
 assert p.locator('.px-review-item.wrong').count()==wrongs
 return ids
def settings(p,n=5,level='all'):
 p.evaluate('(s)=>{Progress.setPracticeSettings(s);App.renderAssessHub();}',{'length':n,'level':level})
report={'environment':'Chromium; actual local JS/CSS in an in-memory HTML/localStorage harness. External fonts omitted. Speech.speak stubbed for UI tests.','limitations':['HTTP navigation blocked by authoring environment: no live deployment or real-origin persistence test','No Safari/iOS or live microphone test','No real TTS/audio quality test','No independent language, operational, clinical or psychometric validation']}
try:
 with sync_playwright() as pw:
  browser=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
  p=browser.new_page(viewport={'width':390,'height':844});p.set_default_timeout(4000)
  p.on('pageerror',lambda e:errors.append(str(e)))
  p.route('https://fonts.googleapis.com/**',lambda r:r.abort());p.route('https://fonts.gstatic.com/**',lambda r:r.abort())
  p.set_content(markup(),wait_until='domcontentloaded',timeout=20000);p.locator('#guestBtn').click();p.locator('[data-course="spa"]').click()
  p.add_style_tag(content='.screen{animation:none!important}')
  p.evaluate('window.audioCalls=[];Speech.speak=(text,opts={})=>{audioCalls.push(text);if(opts.onend)opts.onend();};')
  check('App and guest session boot without script errors',not errors)
  for course in ['spa','cruise']:
   p.evaluate('(c)=>{Courses.activate(c);Progress.invalidate();App.rerenderAll();Nav.go("assess");}',course);settings(p)
   counts=p.evaluate('({mc:MC_BANK.length,tf:TRUE_FALSE_BANK.length,error:ERROR_BANK.length,listen:LISTEN_BANK.length,builder:BUILDER_BANK.length,dialogues:FILL_DIALOGUES.length,cards:document.querySelectorAll("#assessGrid [data-act]").length})')
   check(f'{course}: all expanded bank counts and 20 activity cards',counts==dict(mc=100,tf=50,error=50,listen=80,builder=80,dialogues=30,cards=20));shot(p,f'{course}-mobile-practice.png')
   for kind in ['mc','definition','truefalse','errorfix','listen','builder','scenario','reading','listenRespond','order','context']:
    p.evaluate('(k)=>Practice.start(k)',kind)
    assert not p.evaluate('document.documentElement.scrollWidth>innerWidth+1'),(course,kind,'overflow')
    if course=='spa' and kind=='reading':shot(p,'spa-mobile-reading.png',True)
    if course=='cruise' and kind=='listenRespond':shot(p,'cruise-mobile-listening.png',True)
    ids=finish(p,course,2)
    check(f'{course}: {kind} scoring, incorrect/correct feedback and end review ({len(ids)} items)')
    if kind=='mc':
     best=p.evaluate('Progress.bestFor("mc")');p.locator('[data-px-result="retry"]').click();retry=finish(p,course)
     check(f'{course}: missed-only retry leaves main best score unchanged',len(retry)==2 and p.evaluate('Progress.bestFor("mc")')==best)
     p.evaluate('Practice.start("mc")');fresh=finish(p,course)
     check(f'{course}: fresh set prioritises unseen questions',not set(ids)&set(fresh))
   for did in [C[course]['dialogues'][0]['id'],f'practice-{course}-01']:
    p.evaluate('(id)=>Quiz.startFill(id)',did);d=next(d for d in C[course]['dialogues'] if d['id']==did);first=next(i for i,l in enumerate(d['lines']) if not l.get('fixed'))
    check(f'{course}: {did} does not display future scored turns',p.locator('.px-turn').count()==first+1)
    check(f'{course}: {did} dialogue scoring',len(finish(p,course,1))==sum(not l.get('fixed') for l in d['lines']))
   p.evaluate('Practice.start("context")');before=p.locator('#pxStage').get_attribute('data-question-id');p.locator('#pxTyped').fill('example')
   p.evaluate('I18N.set("th");App.rerenderAll();')
   check(f'{course}: Thai rerender preserves question and typed input',p.locator('#pxTyped').input_value()=='example' and p.locator('#pxStage').get_attribute('data-question-id')==before)
   p.evaluate('I18N.set("en");App.rerenderAll();')
   for level in ['1','2','3']:
    settings(p,20,level)
    for kind in ['mc','truefalse','errorfix','listen','builder','scenario','reading','listenRespond','order','context']:
     p.evaluate('(k)=>Practice.start(k)',kind);qid=p.locator('#pxStage').get_attribute('data-question-id');assert lookup(course,qid,kind).get('level')==int(level),(course,kind,level,qid)
    check(f'{course}: level {level} returns matching items in ten banks')
   settings(p);p.evaluate('Practice.start("listenRespond")');finish(p,course,audio='transcript')
   check(f'{course}: transcript-supported listening saved separately',p.evaluate('Progress.bestFor("listenRespond_supported")')==100 and 'supported' in p.locator('#resultFeedback').inner_text().lower())
   p.evaluate('Speech.speak=(text,opts={})=>{if(opts.onerror)opts.onerror();};Practice.start("listenRespond");');p.locator('[data-px="audio"]').click()
   check(f'{course}: audio failure exposes transcript fallback',p.locator('.px-transcript').count()==1)
   p.evaluate('Speech.speak=(text,opts={})=>{audioCalls.push(text);if(opts.onend)opts.onend();};Practice.start("review");');finish(p,course)
   if course=='cruise':p.locator('.px-review-item').first.locator('summary').click();shot(p,'cruise-mobile-review.png',True)
  p.evaluate('Courses.activate("spa");Progress.invalidate();Progress.setPracticeSettings({length:15,level:"2"});');n=p.evaluate('Object.keys(Progress.practiceHistory()).length')
  p.evaluate('Courses.activate("cruise");Progress.invalidate();')
  check('Courses retain separate settings and question histories',p.evaluate('Progress.practiceSettings().length')==5 and p.evaluate('Object.keys(Progress.practiceHistory()).every(id=>id.startsWith("cruise"))'))
  p.evaluate('Courses.activate("spa");Progress.invalidate();')
  check('Returning to spa restores previous settings and history',p.evaluate('Progress.practiceSettings().length')==15 and p.evaluate('Object.keys(Progress.practiceHistory()).length')==n)
  p.evaluate('Progress.reset();Progress.invalidate();')
  check('Guest reset clears review and cached history',p.evaluate('Practice.reviewCount()')==0 and p.evaluate('Object.keys(Progress.practiceHistory()).length')==0)
  p.evaluate('Progress.recordPracticeAnswer("qa-review","listen",false,false);Progress.recordPracticeAnswer("qa-review","listen",true,true);')
  check('Supported correct answer does not erase an earlier mistake',p.evaluate('Progress.practiceHistory()["qa-review"].needsReview'))
  p.evaluate('Progress.recordPracticeAnswer("qa-review","listen",true,false);')
  check('Unassisted correct answer clears a review item',not p.evaluate('Progress.practiceHistory()["qa-review"].needsReview'))
  assert p.evaluate('Auth.register({name:"QA Test",email:"qa@example.invalid",password:"temporary-demo-only",confirm:"temporary-demo-only",role:"teacher",lang:"en"}).ok')
  p.evaluate('localStorage.setItem("spa_progress_qa@example.invalid__spa",JSON.stringify({knownWords:["legacy-key"],quizBest:{mc:77},attemptsByActivity:{mc:2},streak:3}));Progress.invalidate();Progress.recordPracticeAnswer("spa-migration-check","context",true,false);Progress.invalidate();')
  check('New history writes preserve legacy known words, scores and streak',p.evaluate('Progress.knownCount()')==1 and p.evaluate('Progress.bestFor("mc")')==77 and p.evaluate('Progress.streak')==3 and p.evaluate('!!Progress.practiceHistory()["spa-migration-check"]'))
  p.evaluate('Quiz.startMC({questions:[{q:"QA legacy engine",options:["Right","Wrong","Other","More"],correct:0,explain:"Test explanation."}],title:"Legacy quiz",kicker:"Test",progressKey:"legacy_test"});');p.locator('#mcOptions button').filter(has_text='Right').click();p.locator('#mcNextBtn').click()
  check('Legacy Daily Five MC engine works; old review panel is cleared',p.locator('#rgCorrect').inner_text()=='1' and p.locator('#practiceResults').inner_text()=='')
  p.evaluate('I18N.set("th");App.rerenderAll();');check('Language change does not restore stale practice review',p.locator('#practiceResults').inner_text()=='');p.evaluate('I18N.set("en");App.rerenderAll();Nav.go("assess");')
  p.locator('#pxLength').select_option('15');p.locator('#pxLevel').select_option('all');p.locator('#assessGrid [data-act="mc"]').focus();p.keyboard.press('Enter')
  check('Keyboard launch respects selected 15-question session',bool(re.search(r'/\s*15',p.locator('.px-progress-line').inner_text())))
  for width in [360,390,1280]:
   p.set_viewport_size({'width':width,'height':900 if width==1280 else 844})
   for kind in ['reading','listenRespond','order','context','mc']:
    p.evaluate('(k)=>Practice.start(k)',kind);assert not p.evaluate('document.documentElement.scrollWidth>innerWidth+1'),(width,kind)
   check(f'No horizontal overflow at {width}px across new activities')
  shot(p,'spa-desktop-quiz.png');check('No uncaught browser errors',not errors);browser.close()
 report['status']='passed'
except Exception as e:
 report['status']='failed';report['failure']=str(e);report['traceback']=traceback.format_exc();print(report['traceback'],flush=True)
finally:
 report.update(checks=checks,checkCount=len(checks),pageErrors=errors,screenshots=shots)
 (R/'tests/activity-browser-test-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2));print('FINAL',report['status'],len(checks),'checks',flush=True)
 if report['status']!='passed':raise SystemExit(1)
