import json,threading,http.server,functools,time,re,base64
from pathlib import Path
from playwright.sync_api import sync_playwright
R=Path(__file__).resolve().parents[1]; OUT=R/'tests';OUT.mkdir(exist_ok=True)
class Quiet(http.server.SimpleHTTPRequestHandler):
 def log_message(self,*args):pass
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Quiet,directory=str(R)))
threading.Thread(target=server.serve_forever,daemon=True).start();url=f'http://127.0.0.1:{server.server_port}'
checks=[];errors=[]
with sync_playwright() as pw:
 b=pw.chromium.launch(executable_path=__import__('os').environ.get('CHROMIUM_PATH','/usr/bin/chromium'),headless=True,args=['--no-sandbox'])
 page=b.new_page(viewport={'width':1280,'height':900});page.set_default_timeout(5000);print('Browser ready',flush=True)
 page.on('pageerror',lambda e:(errors.append(str(e)),print('PAGE ERROR',e,flush=True)))
 page.route('https://fonts.googleapis.com/**',lambda route:route.abort())
 page.route('https://fonts.gstatic.com/**',lambda route:route.abort())
 # The managed browser blocks all URL navigation. Render only the supplied
 # local app in an in-memory document; use a storage shim for model tests.
 markup=(R/'index.html').read_text()
 shim="""<script>Object.defineProperty(window,'localStorage',{value:(()=>{const d={};return {getItem:k=>Object.prototype.hasOwnProperty.call(d,k)?d[k]:null,setItem:(k,v)=>d[k]=String(v),removeItem:k=>delete d[k],clear:()=>Object.keys(d).forEach(k=>delete d[k]),key:i=>Object.keys(d)[i]??null,get length(){return Object.keys(d).length}}})(),configurable:true});</script>"""
 markup=markup.replace('<head>','<head>'+shim)
 css=(R/'styles.css').read_text();css='\n'.join(line for line in css.splitlines() if not line.strip().startswith('@import '))
 markup=re.sub(r'<link[^>]+href="styles.css"[^>]*>',lambda m:'<style>'+css+'</style>',markup)
 markup=re.sub(r'<link[^>]+href="https:[^>]+>','',markup)
 markup=re.sub(r'<script src="([^"]+)"></script>',lambda m:'<script>'+(R/m[1]).read_text().replace('</script','<\\/script')+'</script>',markup)
 def image(m):
  f=R/m[1]
  return 'src="data:image/png;base64,'+base64.b64encode(f.read_bytes()).decode()+'"' if f.is_file() else m[0]
 markup=re.sub(r'src="(assets/[^"]+)"',image,markup)
 print('Loading markup',len(markup),flush=True);page.set_content(markup,wait_until='domcontentloaded',timeout=8000);print('Loaded',flush=True);page.locator('#guestBtn').click();print('Guest selected',flush=True);print('Default spa opened',flush=True)
 for course,nphrases in [('spa',220),('cruise',180)]:
  if course=='cruise':
   page.evaluate('App.showCourseChooser()');page.locator('[data-course="cruise"]').click()
  counts=page.evaluate('({v:VOCAB.length,p:PHRASES.flatMap(c=>c.items).length,d:FILL_DIALOGUES.length,pron:PRON.length})')
  assert counts=={'v':250,'p':nphrases,'d':20,'pron':40},counts
  checks.append(course+': correct course counts and switching');print(course,'counts ok',flush=True)
  page.evaluate("Vocab.openMode('flash')")
  assert page.locator('#fcContext .context-example').inner_text()
  assert page.locator('#fcContext .context-th').first.inner_text()
  page.locator('#fcNext').click()
  checks.append(course+': contextual flashcards render in English and Thai')
  page.evaluate("Nav.go('phrases')")
  page.locator('[data-cat="clarifying"]').click()
  page.locator('#phraseList .phrase-context summary').first.click()
  assert page.locator('.conversation-turn').first.inner_text()
  assert page.locator('[data-open-dialogue]').count()>0
  page.locator('[data-open-dialogue]').first.click()
  assert page.locator('#screen-fillquiz').evaluate('(e)=>e.classList.contains("active")')
  assert page.locator('#fillOptions .word-chip').count()==4
  page.locator('#fillOptions .word-chip').first.click();page.locator('#fillNextBtn').click()
  checks.append(course+': phrase-to-dialogue link and answer progression work')
  page.evaluate("Quiz.openFillPicker()")
  assert page.locator('#fillDialogueList .menu-row').count()==20
  page.evaluate("Nav.go('pron')")
  assert page.locator('#pronList .pron-row').count()==40
  checks.append(course+': 20 dialogues and 40 pronunciation guides available')
  page.evaluate("I18N.set('th', App.rerenderAll); Vocab.openMode('flash')")
  assert 'นำไปใช้' in page.locator('#fcContext .context-heading').inner_text()
  page.set_viewport_size({'width':375,'height':812})
  page.evaluate('window.scrollTo(0,0)');page.screenshot(path=str(OUT/f'{course}-mobile-vocabulary.png'),full_page=True)
  overflow=page.evaluate('document.documentElement.scrollWidth > innerWidth + 1')
  assert not overflow,(course,'horizontal overflow')
  page.evaluate("Nav.go('phrases')")
  page.locator('[data-cat="clarifying"]').click();page.locator('#phraseList .phrase-context summary').first.click()
  page.screenshot(path=str(OUT/f'{course}-mobile-phrases.png'),full_page=True)
  assert not page.evaluate('document.documentElement.scrollWidth > innerWidth + 1')
  checks.append(course+': Thai UI and 375px mobile layout without horizontal overflow')
  page.set_viewport_size({'width':1280,'height':900})
  page.evaluate("I18N.set('en',App.rerenderAll)")
 # MC correctness retained through shuffling. Every choice is tested with a known target.
 positions=[]
 for i in range(20):
  page.evaluate("window.testAnswer=null; Quiz.startMC({questions:[{q:'Choose the correct test option',options:['wrong-a','right','wrong-b','wrong-c'],correct:1,word:'Test word'}],title:'Test',kicker:'Test',progressKey:'test',onFinish:(s,t,a)=>window.testAnswer={s,t,a}})")
  labels=page.locator('#mcOptions .q-option').all_inner_texts();idx=next(i for i,s in enumerate(labels) if 'right' in s);positions.append(idx)
  page.locator('#mcOptions .q-option').nth(idx).click();page.locator('#mcNextBtn').click()
  result=page.evaluate('window.testAnswer');assert result['s']==1 and result['a'][0]['correct'] is True
 assert len(set(positions))>=3,positions
 checks.append('MC randomisation preserves correct answer; 20 launches sample multiple positions')
 # Daily Five zero, mixed and perfect recall; ensure no automatic mastery.
 result=page.evaluate('''() => {
   Progress.reset(); const d=Progress.dailyState();
   Progress.dailyCompleteCheck(0,5,d.words.map(word=>({word,correct:false})));
   const zero=d.words.filter(w=>Progress.isKnown(w)).length;
   Progress.dailyCompleteCheck(2,5,d.words.map((word,i)=>({word,correct:i<2})));
   const mixed=d.words.filter(w=>Progress.isKnown(w)).length;
   Progress.dailyCompleteCheck(5,5,d.words.map(word=>({word,correct:true})));
   const full=d.words.filter(w=>Progress.isKnown(w)).length;
   return {zero,mixed,full,results:d.itemResults.length};
 }''')
 assert result=={'zero':0,'mixed':2,'full':5,'results':5},result
 checks.append('Daily Five: zero correct marks 0 known; 2/5 marks 2 known; 5/5 marks 5 known')
 # Preserve old progress record with no reviewWords and make due items recur.
 result=page.evaluate('''() => {
   Auth.register({name:'QA test',email:'qa@example.invalid',password:'test-only',confirm:'test-only',role:'crew',lang:'en'});
   const key='spa_progress_qa@example.invalid__cruise';
   localStorage.setItem(key,JSON.stringify({knownWords:['Stateroom'],quizBest:{mc:75},attemptsByActivity:{mc:1},streak:2,lastActiveDate:null}));
   Progress.invalidate(); const preserved=Progress.isKnown('Stateroom');
   const d=Progress.dailyState();Progress.dailyCompleteCheck(1,5,d.words.map((word,i)=>({word,correct:i===0})));
   const record=JSON.parse(localStorage.getItem(key));
   const reviewWord=d.words[2];record.reviewWords[reviewWord].dueDate='2020-01-01';record.daily.date='2020-01-01';
   localStorage.setItem(key,JSON.stringify(record));Progress.invalidate();
   return {preserved,oldScore:Progress.bestFor('mc'),due:Progress.dailyState().words.includes(reviewWord),count:Progress.dailyState().words.length};
 }''')
 assert result['preserved'] and result['oldScore']==75 and result['due'] and result['count']==5,result
 checks.append('Legacy local progress and quiz score preserved; overdue word returns in Daily Five')
 # Speaking includes multiword entries; sampling is repeated, no microphone is used.
 seen=[]
 for i in range(20):
  page.evaluate("Nav.go('speaking'); Speaking.open()");page.locator('#spkStartBtn').click();seen.append(page.locator('#spkTarget').inner_text())
 assert any(' ' in s or '-' in s for s in seen),seen
 checks.append('Speaking word mode samples multiword terms (no live microphone test)')
 assert not errors,errors
 checks.append('No uncaught browser JavaScript errors across tested flows')
 b.close()
server.shutdown()
report={'browser':'Headless Chromium; local in-memory HTML harness (managed browser blocks URL navigation)', 'storage':'In-memory localStorage-compatible test shim, not a real hosted-origin persistence test','mobile_viewport':'375 × 812','checks':checks,'console_errors':errors,'not_tested':['Live microphone recognition and speech service connectivity','Real audio playback quality','Safari/iOS and other browsers','Live hosting deployment and real-origin browser persistence','Independent Thai-language or workplace-specialist review']}
(OUT/'browser-test-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False,indent=2))
