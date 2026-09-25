"""Test the real application JS/CSS and PNGs in Chromium.
The authoring environment blocks URL navigation. Tests embed local assets in
an in-memory document, mock localStorage and stub audible TTS only. No PHP/
MySQL deployment, actual sound, Safari/iOS or clinical validation is claimed.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
from browser_helpers import markup,MEMORY_STORAGE
import json,sys
R=Path(__file__).resolve().parents[2];OUT=Path(__file__).resolve().parent
checks=[];errors=[]
def check(name,value=True):
    if not value: raise AssertionError(name)
    checks.append(name)
def imgready(p):
    p.wait_for_function('document.querySelector(".an-photo")?.naturalWidth>0')
def setview(p,model,view):
    p.locator(f'[data-an-model="{model}"]').click()
    p.locator(f'#anatomyViewChips [data-an-view="{view}"]').click()
    imgready(p)
def snapshot(p,name):
    p.screenshot(path=str(OUT/name),full_page=True,animations='disabled')
def fitcheck(p,label):
    x=p.evaluate('''()=>{
const m=document.querySelector('.an-map'),im=document.querySelector('.an-photo'),o=document.querySelector('.an-layer');
const a=m.getBoundingClientRect(),b=im.getBoundingClientRect(),c=o.getBoundingClientRect();
return {overflow:document.documentElement.scrollWidth>innerWidth+1,
 aligned:Math.abs(a.x-b.x)<0.15&&Math.abs(a.y-b.y)<0.15&&Math.abs(a.width-b.width)<0.15&&Math.abs(a.height-b.height)<0.15&&Math.abs(a.width-c.width)<0.15&&Math.abs(a.height-c.height)<0.15,
 ratio:Math.abs(b.width/b.height-im.naturalWidth/im.naturalHeight)<0.001,
 png:im.naturalWidth>0&&im.naturalHeight>0,
 svg:document.querySelectorAll('#anatomyStage svg').length};}''')
    check(label+': PNG dimensions and untrimmed image/overlay aligned',x['aligned'] and x['ratio'] and x['png'])
    check(label+': no SVG body figure and no page overflow',x['svg']==0 and not x['overflow'])
report={}
try:
 with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    p=browser.new_page(viewport={'width':1440,'height':1000});p.set_default_timeout(3500)
    p.emulate_media(reduced_motion='reduce');p.on('pageerror',lambda e:errors.append(str(e)))
    p.set_content(markup(),wait_until='domcontentloaded',timeout=30000)
    p.locator('#guestBtn').click();p.locator('[data-course="spa"]').click();p.evaluate("Nav.go('home')")
    p.locator('#homeAnatomyRow').click();imgready(p)
    check('Real home menu opens the new body map',p.locator('#screen-anatomy.active').count()==1)
    before=p.evaluate('JSON.stringify(({known:Progress.knownCount(),learning:Progress.learningState(),attempts:Progress.assessmentAttempts(),quiz:Progress.quizAverage(),activities:Progress.activitiesCompleted()}))')
    for width in [1440,320]:
      p.set_viewport_size({'width':width,'height':1000 if width>600 else 844})
      for model in ['female','male']:
       for view in ['front','back','face']:
        setview(p,model,view)
        words=p.evaluate('Anatomy.inspect().regions.map(r=>r.word)')
        check(f'{width}px {model}/{view}: expected unique word count',len(words)=={'front':18,'back':16,'face':10}[view] and len(words)==len(set(words)))
        fitcheck(p,f'{width}px {model}/{view}')
        p.evaluate('window.qaMapImage=document.querySelector(".an-photo")')
        for word in words:
          p.locator('.an-pin[data-an-word='+json.dumps(word,ensure_ascii=False)+']').click()
          value=p.locator('#anatomyDetail .an-word').inner_text()
          check(f'{width}px {model}/{view}: click {word}',value==word)
          check(f'{width}px {model}/{view}: selected-list and PNG retained {word}',p.locator('.an-word-button[data-an-word='+json.dumps(word,ensure_ascii=False)+']').get_attribute('aria-pressed')=='true' and p.evaluate('window.qaMapImage===document.querySelector(".an-photo")'))
          check(f'{width}px {model}/{view}: definition is source vocabulary {word}',p.evaluate('(w)=>document.querySelector(".an-def").textContent===VOCAB.find(v=>v.word===w).def',word))
        p.locator('.an-word-button').first.click()
        check(f'{width}px {model}/{view}: full-size word-list selection',p.locator('#anatomyDetail .an-word').inner_text()==words[0])
    print('Completed 176 real marker clicks across desktop/mobile.',flush=True)
    # Preserve selection while changing between model-specific coordinate sets.
    setview(p,'female','face');p.locator('.an-pin[data-an-word="Cheek"]').click()
    p.locator('[data-an-model="male"]').click()
    check('Changing model preserves selected vocabulary and face view',p.evaluate('Anatomy.inspect().selected==="Cheek" && Anatomy.inspect().model==="male" && Anatomy.inspect().view==="face"'))
    p.locator('[data-an-model="female"]').focus();p.locator('[data-an-model="female"]').press('Enter')
    check('Keyboard model switch keeps focus on its replacement button',p.evaluate('document.activeElement.dataset.anModel==="female"'))
    b=p.locator('.an-word-button[data-an-word="Chin"]');b.focus();b.press('Enter')
    check('Enter selects a word and retains keyboard focus',p.locator('#anatomyDetail .an-word').inner_text()=='Chin' and b.evaluate('(el)=>el===document.activeElement'))
    b=p.locator('.an-word-button[data-an-word="Neck"]');b.focus();b.press('Space')
    check('Space selects a word with native button behavior',p.locator('#anatomyDetail .an-word').inner_text()=='Neck')
    p.locator('#anatomyPoints').uncheck()
    check('Hide markers leaves PNG and full-size vocabulary controls',p.locator('.an-pin').first.is_hidden() and p.locator('.an-photo').is_visible() and p.locator('.an-word-button').count()==10)
    # Both sides of the PNG are clickable even though each word has only one numbered pin.
    setview(p,'female','front')
    p.locator('.an-hit[data-an-word="Shoulder"]').nth(1).click()
    check('Opposite shoulder surface selects the same existing word',p.locator('#anatomyDetail .an-word').inner_text()=='Shoulder')
    check('Bilateral selection highlights both surface shapes',p.locator('.an-hit[data-an-word="Shoulder"].selected').count()==2)
    p.locator('#anatomyPoints').check()
    setview(p,'male','back');p.locator('.an-pin[data-an-word="Calf"]').click()
    p.locator('.topbar [data-lang="th"]').click()
    check('Thai switch rerenders dynamic controls without resetting selection',p.locator('[data-an-model="male"]').inner_text()=='ผู้ชาย' and p.locator('#anatomyViewChips [data-an-view="back"]').inner_text()=='ด้านหลัง' and p.locator('#anatomyDetail .an-word').inner_text()=='Calf')
    check('Thai meaning remains the existing entry',p.locator('#anatomyDetail .an-th').inner_text()==p.evaluate('VOCAB.find(v=>v.word==="Calf").th'))
    p.locator('.an-related-box summary').click()
    p.locator('.an-related-words [data-an-word="Sole"]').click()
    check('Sole retained as related vocabulary without a false hotspot',p.locator('#anatomyDetail .an-word').inner_text()=='Sole' and p.locator('.an-pin[data-an-word="Sole"]').count()==0)
    p.locator('.an-related-words [data-an-word="Sinuses"]').click()
    check('Sinuses retained as related vocabulary without a false hotspot',p.locator('#anatomyDetail .an-word').inner_text()=='Sinuses' and p.locator('.an-pin[data-an-word="Sinuses"]').count()==0)
    # TTS wiring only; do not claim an actual audible speech test.
    p.evaluate('window.qaSpeech=[];Speech.speak=(text,opts={})=>{qaSpeech.push({text,rate:opts.rate});opts.onend?.();};void 0;')
    p.locator('#anatomyDetail .mini-play').click()
    p.locator('#anatomyDetail .an-example-block [data-an-speak]').click()
    check('Pronunciation and example buttons pass existing text/rate to speech engine',p.evaluate('qaSpeech.length===2 && qaSpeech[0].text==="Sinuses" && qaSpeech[1].text===VOCAB.find(v=>v.word==="Sinuses").example && qaSpeech.every(x=>x.rate===App.speechRate())'))
    p.evaluate('Speech.speak=(text,opts={})=>opts.onerror?.();void 0;')
    p.locator('#anatomyDetail .mini-play').click()
    check('Audio failure is visible, and play button resets',bool(p.locator('.an-audio-status').inner_text()) and not p.locator('#anatomyDetail .mini-play').get_attribute('class').endswith('playing'))
    p.evaluate('Speech.speak=(text,opts={})=>opts.onend?.();void 0;')
    for width in [390,768,1280]:
      p.set_viewport_size({'width':width,'height':900})
      for model in ['female','male']:
       for view in ['front','back','face']:
        setview(p,model,view);fitcheck(p,f'{width}px Thai {model}/{view}')
    p.set_viewport_size({'width':1440,'height':1000});p.locator('.topbar [data-lang="en"]').click()
    for model in ['female','male']:
      for view,word in [('front','Shoulder'),('back','Shoulder blade'),('face','Cheek')]:
       setview(p,model,view);p.locator('.an-pin[data-an-word='+json.dumps(word,ensure_ascii=False)+']').click();snapshot(p,f'{model}-{view}-desktop.png')
    p.set_viewport_size({'width':390,'height':844});p.locator('.topbar [data-lang="th"]').click()
    setview(p,'female','face');p.locator('.an-pin[data-an-word="Forehead"]').click();snapshot(p,'female-face-mobile-thai.png')
    setview(p,'male','back');p.locator('.an-pin[data-an-word="Calf"]').click();snapshot(p,'male-back-mobile-thai.png')
    check('Viewing/clicking does not change learner progress or quiz scores',p.evaluate('JSON.stringify(({known:Progress.knownCount(),learning:Progress.learningState(),attempts:Progress.assessmentAttempts(),quiz:Progress.quizAverage(),activities:Progress.activitiesCompleted()}))')==before)
    pref=p.evaluate('JSON.parse(localStorage.getItem("nimman_bodymap_preferences_v1"))')
    check('Preference storage is separate from learning progress',pref['model']=='male' and pref['view']=='back' and pref['points'])
    p.evaluate('Nav.go("vocab");Nav.go("anatomy")');imgready(p)
    check('Navigation back preserves model and view',p.evaluate('Anatomy.inspect().model==="male" && Anatomy.inspect().view==="back"'))
    # Image-load failure never leaves floating hotspots over a missing image.
    p.evaluate('document.querySelector(".an-photo").dispatchEvent(new Event("error"))')
    check('Missing PNG reports failure and suppresses misleading overlay',p.locator('.an-image-error').is_visible() and p.locator('.an-layer').is_hidden())
    p.locator('.an-word-button[data-an-word="Calf"]').click()
    check('Word list is still usable when an image fails',p.locator('#anatomyDetail .an-word').inner_text()=='Calf')
    p.evaluate('Anatomy.render()');imgready(p)
    # Other course availability unchanged. No body-map takeover of assessments.
    for course in ['cruise','salon']:
      p.evaluate('App.showCourseChooser({cancellable:true})');p.locator(f'[data-course="{course}"]').click();p.evaluate('Nav.go("home")')
      check(f'{course}: original course restriction retained',not p.evaluate('Anatomy.available()') and p.locator('#homeAnatomyRow').is_hidden())
    p.evaluate('App.showCourseChooser({cancellable:true})');p.locator('[data-course="spa"]').click();p.evaluate('AssessmentBuilder.open("s3")')
    check('Existing assessment builder still opens',p.locator('#abModule').input_value()=='s3')
    p.evaluate('AssessmentBuilder.start({course:"spa",module:"all",category:"all",kind:"word",count:3,type:"choice",feedback:"practice",scope:"all",selected:[]})')
    check('Existing custom assessment still creates requested exact count',p.evaluate('AssessmentBuilder.inspect().questions.length')==3)
    check('No JavaScript page errors',not errors)
    # Standalone output uses the identical renderer and all six embedded PNGs.
    preview_path=Path(sys.argv[1]) if len(sys.argv)>1 else R/'BODY_MAP_PREVIEW.html'
    if preview_path.exists():
      q=browser.new_page(viewport={'width':1280,'height':900});q.set_default_timeout(3500);q.emulate_media(reduced_motion='reduce')
      q.on('pageerror',lambda e:errors.append(str(e)))
      text=preview_path.read_text().replace('<head>','<head>'+MEMORY_STORAGE)
      q.set_content(text,wait_until='domcontentloaded',timeout=30000)
      for model in ['female','male']:
       for view in ['front','back','face']:
        setview(q,model,view);fitcheck(q,f'Preview {model}/{view}')
        q.locator('.an-pin').first.click();check(f'Preview {model}/{view}: interactive',q.locator('.an-word').count()==1)
      q.locator('[data-lang="th"]').click();check('Preview Thai controls work',q.locator('[data-an-model="male"]').inner_text()=='ผู้ชาย')
      check('Preview has no external image references',q.evaluate('Array.from(document.images).every(im=>im.src.startsWith("data:image/png;base64,"))'))
      snapshot(q,'standalone-preview.png');q.close()
    check('Application and standalone preview have no JS page errors',not errors)
    browser.close()
 report={'passed':len(checks),'checks':checks,'errors':errors,'environment':'Chromium, actual app scripts/styles/PNG images embedded in-memory; real mouse/keyboard clicks; mocked localStorage and TTS callbacks.','limitations':['Local URL navigation blocked by environment; no hosted deployment or live PHP/MySQL testing.','No audible voice quality, microphone, Safari or iOS validation.','Hotspots are editorial surface-language aids, not independent clinical anatomy or translation certification.']}
except Exception as e:
 report={'passed':len(checks),'checks':checks,'errors':errors,'failure':str(e)}
 raise
finally:
 (OUT/'browser-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
 print(json.dumps({k:v for k,v in report.items() if k not in ['checks']},ensure_ascii=False,indent=2),flush=True)
