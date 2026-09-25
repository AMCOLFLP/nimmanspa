"""Chromium integration checks using actual app JS/CSS in an in-memory page.
Navigation is blocked by this authoring environment; localStorage and TTS are mocked.
No claim of live PHP/MySQL, network, voice quality or microphone verification.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import re,json,base64
R=Path(__file__).resolve().parents[1]
checks=[];errors=[];shots=[]
def check(name,value=True):
 assert value,name
 checks.append(name);print('PASS',name,flush=True)
 (R/'tests/learning-browser-progress.json').write_text(json.dumps({'passed':len(checks),'checks':checks,'errors':errors},ensure_ascii=False,indent=2))
def markup():
 h=(R/'index.html').read_text()
 shim="""<script>Object.defineProperty(window,'localStorage',{value:(()=>{const d={};return {getItem:k=>Object.prototype.hasOwnProperty.call(d,k)?d[k]:null,setItem:(k,v)=>d[k]=String(v),removeItem:k=>delete d[k],clear:()=>Object.keys(d).forEach(k=>delete d[k]),key:i=>Object.keys(d)[i]??null,get length(){return Object.keys(d).length}}})(),configurable:true});</script>"""
 h=h.replace('<head>','<head>'+shim)
 h=re.sub(r'<link[^>]+href="(styles.css|learning.css)"[^>]*>',lambda m:'<style>'+'\n'.join(l for l in (R/m[1]).read_text().splitlines() if not l.strip().startswith('@import'))+'</style>',h)
 h=re.sub(r'<link[^>]+href="https:[^>]+>','',h)
 h=re.sub(r'<script src="([^"]+)"></script>',lambda m:'<script>'+(R/m[1]).read_text().replace('</script','<\\/script')+'</script>',h)
 return re.sub(r'src="(assets/[^"]+)"',lambda m:'src="data:image/png;base64,'+base64.b64encode((R/m[1]).read_bytes()).decode()+'"',h)
def snapshot(p):return p.evaluate('AssessmentBuilder.inspect()')
def shot(p,name,full=False):
 p.wait_for_timeout(100);p.screenshot(path=str(R/'tests'/name),full_page=full,animations='disabled');shots.append(name)
def switch(p,course):
 p.evaluate('App.showCourseChooser({cancellable:true})');p.locator(f'[data-course="{course}"]').evaluate("(e)=>e.click()");p.wait_for_timeout(70)
def start(p,course,kind,count=5,feedback='practice',**extra):
 cfg=dict(course=course,module='all',category='all',kind='both',count=count,type=kind,feedback=feedback,scope='all',selected=[]);cfg.update(extra)
 p.evaluate('(c)=>AssessmentBuilder.start(c)',cfg)
def finish(p,wrong=2,supported=False):
 s=snapshot(p);n=len(s['questions']);kind=s['config']['type']
 if kind=='match':
  answered=0
  while not snapshot(p)['finished']:
   s=snapshot(p);qs=s['match']['qs']
   for q in qs:
    eid=q['entry']['id'];p.locator(f'[data-ab="match-left"][data-value="{eid}"]').evaluate("(e)=>e.click()")
    if answered<wrong:
     other=next(x['entry']['id'] for x in qs if x['entry']['id']!=eid and x['entry']['id'] not in snapshot(p)['match']['matched'])
     p.locator(f'[data-ab="match-right"][data-value="{other}"]').evaluate("(e)=>e.click()")
    p.locator(f'[data-ab="match-right"][data-value="{eid}"]').evaluate("(e)=>e.click()");answered+=1
   p.locator('[data-ab="match-next"]').evaluate("(e)=>e.click()")
 else:
  for i in range(n):
   s=snapshot(p);q=s['questions'][s['index']];right=i>=wrong;typ=q['type']
   if typ=='listen':
    assert p.locator('[data-ab="answer-choice"]').first.is_disabled()
    p.locator('[data-ab="transcript"]' if supported else '[data-ab="audio"]').evaluate("(e)=>e.click()")
   if typ in ['choice','listen']:
    eid=q['entry']['id'] if right else next(o['id'] for o in q['options'] if o['id']!=q['entry']['id'])
    p.locator(f'[data-ab="answer-choice"][data-value="{eid}"]').evaluate("(e)=>e.click()")
   elif typ=='order':
    tokens=list(range(len(s['current']['tokens'])))
    if not right:tokens[0],tokens[1]=tokens[1],tokens[0]
    for ti in tokens:p.locator(f'[data-ab="token"][data-value="{ti}"]').evaluate("(e)=>e.click()")
    p.locator('[data-ab="check"]').evaluate("(e)=>e.click()")
   else:
    answer=q['gap']['answer'] if typ=='gap' else q['entry']['en']
    p.locator('#abTyped').fill(' '+answer.upper()+'. ' if right else 'not-the-answer')
    p.locator('[data-ab="check"]').evaluate("(e)=>e.click()")
   if s['config']['feedback']=='test':
    assert p.locator('.ab-feedback.neutral').count()==1
    assert p.locator('.ab-feedback.right,.ab-feedback.wrong').count()==0
   else:
    assert p.locator('.ab-feedback.right').count()==(1 if right else 0)
   p.locator('[data-ab="next"]').evaluate("(e)=>e.click()")
 r=snapshot(p)['result'];assert r['total']==n and r['score']==n-wrong,(kind,r,n,wrong)
 assert p.locator('#screen-customresults.active').count()==1
 assert len(r['answers'])==n
 return r
report={}
try:
 with sync_playwright() as pw:
  b=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
  p=b.new_page(viewport={'width':1280,'height':900});p.set_default_timeout(6000);p.on('pageerror',lambda e:errors.append(str(e)))
  p.emulate_media(reduced_motion='reduce')
  p.set_content(markup(),wait_until='domcontentloaded',timeout=20000)
  p.add_style_tag(content='.screen{animation:none!important}.screen.nav-out-push,.screen.nav-out-pop{display:none!important}')
  p.locator('#guestBtn').evaluate("(e)=>e.click()");check('Three real course choices',p.locator('[data-course]').count()==3);shot(p,'learning-course-chooser.png')
  p.locator('[data-course="spa"]').evaluate("(e)=>e.click()");p.wait_for_timeout(80)
  p.evaluate("Speech.speak=(text,options={})=>{if(options.onend)options.onend();}")
  for course in ['spa','cruise','salon']:
   if course!='spa':switch(p,course)
   count=9 if course=='cruise' else 5
   check(course+': learning path visible',p.locator('.lh-module').count()==count)
   first='s1' if course=='spa' else 'c1' if course=='cruise' else 'h1'
   p.locator(f'[data-lh="module"][data-id="{first}"]').evaluate("(e)=>e.click()")
   p.locator('[data-lh="studied"]').evaluate("(e)=>e.click()");check(course+': mark lesson studied',p.evaluate('(id)=>!!Progress.learningState().modules[id]',first))
   p.locator('[data-lh="reviewed"]').first.evaluate("(e)=>e.click()");check(course+': mark individual entry reviewed',p.evaluate('Object.keys(Progress.learningState().items).length')>=1)
   p.locator('[data-lh="assess"]').evaluate("(e)=>e.click()");check(course+': module selection transfers into builder',p.locator('#abModule').input_value()==first)
   if course=='spa':shot(p,'learning-assessment-desktop.png')
   for typ in ['choice','match','type','gap','order','listen','mixed']:
    n=6 if typ=='match' else 3
    start(p,course,typ,n)
    r=finish(p,wrong=1,supported=typ=='listen')
    check(f'{course}: {typ} exact {n}-item session, scoring, feedback and review')
    if typ=='listen':check(course+': listening transcript support recorded',r['supported'])
   start(p,course,'choice',5,'test');finish(p,wrong=1);check(course+': test mode defers feedback to results')
   attempts=p.evaluate('Progress.assessmentAttempts()');check(course+': independent attempt summaries',len(attempts)==8 and attempts[-1]['score']==4)
   if course=='salon':shot(p,'learning-salon-results.png')
  switch(p,'spa');check('Per-course progress survives course switching',p.evaluate("!!Progress.learningState().modules.s1 && !Progress.learningState().modules.c1 && Progress.assessmentAttempts().length===8"))
  # Genuine UI selection, count validation and question generation.
  p.evaluate("AssessmentBuilder.open('s3')")
  p.locator('input[name="abKind"][value="phrase"]').check();check('Word-in-context disabled for phrases',p.locator('input[name="abType"][value="gap"]').is_disabled())
  p.locator('input[name="abKind"][value="word"]').check();check('Sentence builder disabled for words',p.locator('input[name="abType"][value="order"]').is_disabled())
  p.locator('#abCount').fill('9999');check('Oversized count blocks start with truthful pool count',p.locator('#abStart').is_disabled() and 'available' in p.locator('#abValidation').inner_text())
  p.locator('#abCount').fill('2');p.locator('#abScope').select_option('selected')
  check('Empty manual selection prevents start',p.locator('#abStart').is_disabled())
  boxes=p.locator('input[name="abEntry"]');ids=[boxes.nth(i).get_attribute('value') for i in range(2)]
  for id in ids:p.locator(f'input[name="abEntry"][value="{id}"]').check()
  check('Manual selection enables exact selected count',p.locator('#abStart').is_enabled());p.locator('#abStart').evaluate("(e)=>e.click()")
  check('Manual selected IDs are exactly the tested targets',{q['entry']['id'] for q in snapshot(p)['questions']}==set(ids));finish(p,wrong=1)
  p.locator('[data-ab="retry"]').evaluate("(e)=>e.click()");check('Retry includes only the missed entry',len(snapshot(p)['questions'])==1);finish(p,wrong=0)
  # Lower later scores do not become the previous best.
  start(p,'spa','choice',2);finish(p,wrong=2)
  check('Latest lower score retained',p.evaluate('Progress.assessmentAttempts().slice(-1)[0].score')==0)
  # In-progress language changes preserve typed input, question and order.
  start(p,'spa','type',2);qid=snapshot(p)['questions'][0]['entry']['id'];p.locator('#abTyped').fill('unfinished answer')
  p.evaluate('I18N.set("th");App.rerenderAll()');check('Thai switch preserves live question and typed answer',p.locator('#abTyped').input_value()=='unfinished answer' and snapshot(p)['questions'][0]['entry']['id']==qid)
  p.evaluate('I18N.set("en");App.rerenderAll()')
  # Audio failure does not falsely mark a listening item as played.
  p.evaluate('Speech.speak=(text,opts={})=>{if(opts.onerror)opts.onerror();}')
  start(p,'spa','listen',2);p.locator('[data-ab="audio"]').evaluate("(e)=>e.click()");check('Audio failure keeps answers gated',p.locator('[data-ab="answer-choice"]').first.is_disabled())
  p.locator('[data-ab="transcript"]').evaluate("(e)=>e.click()");check('Explicit supported fallback unlocks answering',p.locator('[data-ab="answer-choice"]').first.is_enabled())
  p.evaluate('Speech.speak=(text,opts={})=>{if(opts.onend)opts.onend();}')
  # Legacy libraries remain accessible, and the salon does not show empty old modes.
  p.evaluate('Nav.go("assess")');p.locator('#legacyPractice').evaluate('(e)=>e.open=true');check('Original spa activity library retained',p.locator('#assessGrid [data-act]').count()==20)
  p.evaluate('Progress.setPracticeSettings({length:5,level:"all"});Practice.start("mc")');check('Original MC engine still opens',p.locator('#screen-practiceplay.active').count()==1)
  # Mobile, Thai and desktop checks include every new screen.
  for width in [390,320,1280]:
   p.set_viewport_size({'width':width,'height':844 if width<600 else 900})
   switch(p,'salon');p.evaluate('I18N.set("th");App.rerenderAll();LearningHub.open()')
   check(f'{width}px Thai learning: no horizontal overflow',not p.evaluate('document.documentElement.scrollWidth>innerWidth+1'))
   if width==390:shot(p,'learning-mobile-thai.png')
   p.evaluate("LearningHub.open('h3')");check(f'{width}px lesson: no horizontal overflow',not p.evaluate('document.documentElement.scrollWidth>innerWidth+1'))
   if width==390:shot(p,'learning-lesson-mobile.png')
   p.evaluate("AssessmentBuilder.open('h3')");check(f'{width}px builder: no horizontal overflow',not p.evaluate('document.documentElement.scrollWidth>innerWidth+1'))
   if width==390:shot(p,'learning-assessment-mobile.png')
   start(p,'salon','match',6);check(f'{width}px matching: no horizontal overflow',not p.evaluate('document.documentElement.scrollWidth>innerWidth+1'))
   if width==390:shot(p,'learning-matching-mobile.png')
   check('Salon hides unmapped legacy modes',p.locator('#legacyPractice').is_hidden())
  # Critical progress-load failure path, mocked transport only.
  p.evaluate('''async()=>{Auth.continueAsGuest();localStorage.setItem('spa_session',JSON.stringify({email:'qa@example.test',name:'QA',guest:false}));Progress.invalidate();window.qaPosts=[];Api.get=async()=>{throw new Error('test offline')};Api.post=async(path,body)=>{window.qaPosts.push({path,body});return {}};await Progress.hydrate();Progress.setLearningModule('h1',true);}''')
  p.wait_for_timeout(650);check('Failed server progress load blocks destructive replacement saves',p.evaluate('qaPosts.length')==0 and p.evaluate('Progress.status')=='load-error')
  p.evaluate('''async()=>{Api.get=async()=>({data:{knownWords:['existing'],learningModules:{h2:123}}});await Progress.hydrate();Progress.setLearningModule('h1',true);}''')
  p.wait_for_timeout(650);check('Successful mocked reload preserves existing fields in next save',p.evaluate('qaPosts.length===1 && qaPosts[0].body.data.knownWords[0]==="existing" && !!qaPosts[0].body.data.learningModules.h2'))
  check('No JavaScript page errors captured',not errors)
  b.close()
 report={'passed':len(checks),'checks':checks,'errors':errors,'screenshots':shots,'environment':'Chromium; actual local scripts/styles in in-memory HTML; DOM click events for repetitive answer loops, real form fill/check/select operations; mock localStorage, TTS and selected transport calls.','limitations':['Direct HTTP/file navigation blocked by environment; no live server deployment tested.','No live PHP/MySQL round-trip or real-origin persistence validation.','Audio control/fallback tested with mocks; no audible playback quality, microphone, Safari or iOS validation.','Content mapping is editorial; not independent translation, clinical, CEFR or psychometric certification.']}
except Exception as e:
 report={'passed':len(checks),'checks':checks,'errors':errors,'failure':str(e)}
 raise
finally:
 (R/'tests/learning-browser-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
