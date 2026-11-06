/* Actual 30-day content, progress, and UI flows. Run with node tests/validate_study_plan.cjs. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),checks=[];
const source=name=>fs.readFileSync(path.join(root,'js',name),'utf8');
function check(name,fn){fn();checks.push(name);}
function harness(){
 const store=new Map([['spa_session',JSON.stringify({guest:true})]]),events={},calls=[],timers=new Map();
 let timer=0,serverData={};
 const elements={learningRoot:{innerHTML:''},learningHomeCard:{innerHTML:''},dlFooter:{innerHTML:''},dlTitle:{focus(){}}};
 const ctx=vm.createContext({console,Intl,Date,Set,Map,Promise,JSON,performance:{now:()=>0},
  localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},
  setTimeout:fn=>{timers.set(++timer,fn);return timer;},clearTimeout:id=>timers.delete(id),
  CustomEvent:class{},window:{scrollY:0,scrollTo(){},dispatchEvent(){},addEventListener(){}},
  document:{getElementById:id=>elements[id]||null,querySelectorAll:()=>[],querySelector:()=>null,addEventListener:(type,fn)=>(events[type]??=[]).push(fn)},
  I18N:{current:'en',t:key=>key},Courses:{currentId:'spa',name:id=>id},VOCAB:[],
  CourseAccess:{reset(){},canLearn:()=>true,handleApiError(){}},
  Api:{get:async()=>({ok:true,data:serverData}),post:async(route,body)=>{calls.push({route,body});return {ok:true,user:{email:'learner@example.test',name:'Learner',is_admin:false},csrf_token:'csrf'};}},
  App:{refreshHome(){},speechRate:()=>1,showCourseChooser(){}},Interview:{available:()=>false},
  AssessmentBuilder:{open(){}},Speech:{speak(){}},Nav:{go(){vm.runInContext('LearningHub.render()',ctx);}}
 });
 for(const file of ['curriculum-data.js','learning-model.js','daily-program-data.js','study-plan.js','auth.js','daily-learning.js','learning-hub.js'])vm.runInContext(source(file),ctx,{filename:file});
 const run=code=>vm.runInContext(code,ctx);
 run('LearningHub.init()');
 return {ctx,run,elements,calls,server:data=>{serverData=data;},event:(name,target)=>events[name]?.forEach(fn=>fn({target})),
  click(dataset,id=''){const target={dataset,id,closest:selector=>selector==='[data-dl]'&&dataset.dl?target:selector==='[data-lh]'&&dataset.lh?target:null};events.click.forEach(fn=>fn({target}));}};
}
const h=harness(),run=h.run;
check('The browser data matches all authored lesson files',()=>{
 for(const course of ['spa','cruise','salon']){const authored=JSON.parse(fs.readFileSync(path.join(root,'content',`program-${course}.json`),'utf8'));assert.equal(JSON.stringify(run(`StudyPlan.days('${course}')`)),JSON.stringify(authored));}
});
for(const course of ['spa','cruise','salon']){
 check(`${course}: all 30 days cover every chapter with real bilingual teaching and checks`,()=>{
  const data=run(`StudyPlan.days('${course}')`),ids=run(`CURRICULUM_DATA.modules.${course}.map(m=>m.id)`);
  assert.equal(data.length,30);assert.equal(new Set(data.map(d=>d.title[0])).size,30);
  assert.equal(JSON.stringify([...new Set(data.map(d=>d.moduleId))].sort()),JSON.stringify([...ids].sort()));
  const pairs=[];
  data.forEach((d,i)=>{
   assert.equal(d.day,i+1);assert.equal(d.teach.length,2);assert.equal(d.checks.length,2);assert.equal(d.practice.criteria.length,3);assert(d.dialogue.length>=2&&d.dialogue.length<=4);
   if(![7,14,21,28,29,30].includes(d.day))assert.equal(d.kind,'lesson');
   pairs.push(d.title,d.objective,d.review.prompt,d.review.model,d.practice.prompt,d.practice.model,...d.practice.criteria);
   d.teach.forEach(p=>{pairs.push(p.title,p.body,p.example);assert(p.body[0].length>=50,'Teaching needs an explanation, not just a label.');});
   d.dialogue.forEach(t=>pairs.push([t.en,t.th]));
   d.checks.forEach(q=>{pairs.push(q.question,q.explanation,...q.options);assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<3);assert.equal(new Set(q.options.map(o=>o[0])).size,3);});
   if([7,14,21,28,29].includes(d.day))assert.equal(d.kind,'checkpoint');
   if(d.day===30)assert.equal(d.kind,'capstone');
  });
  for(const pair of pairs){assert.equal(pair.length,2);assert(pair.every(x=>typeof x==='string'&&x.trim()));assert(/[\u0E00-\u0E7F]/.test(pair[1]),'Thai support must contain Thai text.');assert(!pair.join('').includes('\uFFFD'));}
  assert.equal(run(`StudyPlan.groups('${course}').flatMap(g=>g.days).length`),30);
 });
 for(const lang of ['en','th']){
  check(`${course}/${lang}: overview, all 30 lessons and chapter routes render`,()=>{
   run(`Courses.currentId='${course}';I18N.current='${lang}';LearningHub.open()`);
   let html=h.elements.learningRoot.innerHTML;
   assert.equal((html.match(/class="lh-week /g)||[]).length,5);
   assert.equal((html.match(/class="dl-day /g)||[]).length,30);
   assert.equal((html.match(/class="lh-week [^"]*" open/g)||[]).length,1);
   assert(html.includes('29\u201330'));
   for(let i=1;i<=30;i++){
    run(`LearningHub.openDay(${i})`);html=h.elements.learningRoot.innerHTML;
    for(let part=1;part<=5;part++)assert(html.includes(`id="dlPart${part}"`));
    run(`StudyPlan.day('${course}',${i}).checks`).forEach((q,qi)=>q.options.forEach((option,oi)=>{const button=html.split(`id="dlAnswer${qi}-${oi}"`)[1]?.split('</button>')[0]||'';assert(button.includes('<span lang="en">'+run(`LearningModel.esc(${JSON.stringify(option[0])})`)+'</span>'), 'Each answer button must show its English choice in Thai mode');}));
    assert(html.includes('id="dlResponse"'));assert.equal((html.match(/data-dl="answer"/g)||[]).length,6);
    assert(html.includes('id="dlFinish"'));assert(!html.includes('undefined'));assert(!html.includes('\uFFFD'));
   }
   for(const id of run(`CURRICULUM_DATA.modules.${course}.map(m=>m.id)`)){
    run(`LearningHub.open('${id}')`);html=h.elements.learningRoot.innerHTML;
    assert(html.includes('dl-chapter'));assert(html.includes('data-lh="day"'));assert(!html.includes('data-lh="studied"'));
   }
  });
 }
}
check('Content getters cannot mutate the authored sequence',()=>{
 run("StudyPlan.day('spa',1).checks[0].answer=99;StudyPlan.days('spa').pop();StudyPlan.get('spa')[0].modules.push('bad')");
 assert.notEqual(run("StudyPlan.day('spa',1).checks[0].answer"),99);assert.equal(run("StudyPlan.days('spa').length"),30);assert.equal(run("StudyPlan.get('spa')[0].modules.includes('bad')"),false);
});
check('Daily work cannot complete with missing teaching, short response, missing self-checks or wrong answers',()=>{
 run("Courses.currentId='spa';I18N.current='en';Progress.clearGuest();Progress.invalidate();LearningHub.openDay(1)");
 const valid={learned:true,response:'I greet guests and confirm their preferences.',criteria:[true,true,true],answers:run("StudyPlan.day('spa',1).checks.map(q=>q.answer)")};
 const invalid=[{}, {...valid,learned:false}, {...valid,response:'short'}, {...valid,criteria:[true,false,true]}, {...valid,answers:[(valid.answers[0]+1)%3,valid.answers[1]]}];
 for(const patch of invalid){
  run('Progress.clearGuest();Progress.invalidate()');
  assert.equal(run(`Progress.updateLearningDay(1,${JSON.stringify({...patch,finish:true})})`),false);
  assert.equal(run("StudyPlan.completedCount('spa',Progress.learningState().days)"),0);
 }
 run('Progress.clearGuest();Progress.invalidate()');
 assert.equal(run(`Progress.updateLearningDay(1,${JSON.stringify(valid)})`),false);
 assert.equal(run("StudyPlan.ready(StudyPlan.day('spa',1),Progress.learningState().days['day-1'])"),true);
 assert.equal(run("StudyPlan.completedCount('spa',Progress.learningState().days)"),0,'Ready work still needs explicit completion.');
 run('Progress.clearGuest();Progress.invalidate();LearningHub.openDay(1)');
});
check('Actual UI handlers save work, explain mistakes, complete and resume the next day',()=>{
 h.event('input',{id:'dlResponse',value:'I prepare the room and welcome each guest.',dataset:{}});
 h.event('change',{id:'dlLearned',dataset:{dl:'learned'},checked:true});
 for(let i=0;i<3;i++)h.event('change',{id:`dlCriterion${i}`,dataset:{dl:'criterion',index:String(i)},checked:true});
 const answers=run("StudyPlan.day('spa',1).checks.map(q=>q.answer)");
 h.click({dl:'answer',question:'0',answer:String((answers[0]+1)%3)});
 assert(h.elements.learningRoot.innerHTML.includes('ab-feedback wrong'));
 answers.forEach((answer,i)=>h.click({dl:'answer',question:String(i),answer:String(answer)}));
 assert(!h.elements.learningRoot.innerHTML.includes('id="dlFinish" class="btn btn-gold" data-dl="finish" disabled'));
 h.click({dl:'finish'});
 assert.equal(run("StudyPlan.completedCount('spa',Progress.learningState().days)"),1);
 assert.equal(run("StudyPlan.nextDay('spa',Progress.learningState().days).day"),2);
 assert(h.elements.learningRoot.innerHTML.includes('Continue to day 2'));
 run('LearningHub.open();LearningHub.home()');assert(h.elements.learningHomeCard.innerHTML.includes('Day 2'));
 h.click({lh:'day',day:'1'});assert(h.elements.learningRoot.innerHTML.includes('I prepare the room and welcome each guest.'));
});
check('Editing completed work reopens the day, unsafe text is escaped and response length is bounded',()=>{
 run("Progress.updateLearningDay(1,{response:'<script>alert(1)</script>'});LearningHub.render()");
 assert.equal(run("StudyPlan.completedCount('spa',Progress.learningState().days)"),0);
 assert(!h.elements.learningRoot.innerHTML.includes('<script>alert(1)</script>'));assert(h.elements.learningRoot.innerHTML.includes('&lt;script&gt;'));
 run("Progress.updateLearningDay(1,{response:'a'.repeat(3000)})");assert.equal(run("Progress.learningState().days['day-1'].response.length"),2000);
 assert.equal(run('Progress.updateLearningDay(31,{finish:true})'),false);
});
check('Legacy chapter marks do not skip new lessons; chapter completion needs all assigned days',()=>{
 run("Progress.clearGuest();Progress.invalidate();Progress.setLearningModule('s1',true)");
 assert.equal(run("StudyPlan.nextDay('spa',Progress.learningState().days).day"),1);
 const ids=run("StudyPlan.forModule('spa','s1').map(d=>d.day)");
 for(const n of ids){
  run(`Progress.updateLearningDay(${n},{learned:true,response:'I use clear and truthful professional English.',criteria:[true,true,true],answers:StudyPlan.day('spa',${n}).checks.map(q=>q.answer),finish:true})`);
  assert.equal(!!run("Progress.learningState().modules.s1"),n===ids.at(-1));
 }
 const snapshot=run('Progress.learningState()');snapshot.days['day-1'].response='tampered';assert.notEqual(run("Progress.learningState().days['day-1'].response"),'tampered');
});
check('Guest work stays separate by course, survives course switching, and clears at sign-out',()=>{
 run("Courses.currentId='salon';Progress.invalidate();LearningHub.open()");assert.equal(run("StudyPlan.completedCount('salon',Progress.learningState().days)"),0);
 run("Courses.currentId='spa';Progress.invalidate()");assert.equal(run("StudyPlan.completedCount('spa',Progress.learningState().days)"),3);
 run('Auth.forceSignedOut()');assert.equal(run("Object.keys(Progress.learningState().days).length"),0);
 assert.equal(h.calls.length,0,'Guest learning must not call account APIs.');
});
(async()=>{
 const a=harness();
 a.server({knownWords:['Towel'],quizBest:{mc:75},learningModules:{s2:123},learningDays:{'day-1':{response:'Previously saved draft'}}});
 await a.run("Auth.login({email:'learner@example.test',password:'test-password'})");
 await a.run('Progress.hydrate()');
 assert.equal(a.run("Progress.learningState().days['day-1'].response"),'Previously saved draft');
 a.run("Progress.updateLearningDay(1,{learned:true,response:'I explain services and confirm guest preferences.'})");
 assert.equal(await a.run('Progress.flush()'),true);
 const saved=a.calls.find(c=>c.route==='progress.php');assert(saved);assert.equal(saved.body.course,'spa');
 assert.equal(saved.body.data.learningDays['day-1'].response,'I explain services and confirm guest preferences.');
 assert.equal(saved.body.data.knownWords[0],'Towel');assert.equal(saved.body.data.quizBest.mc,75);assert.equal(saved.body.data.learningModules.s2,123);
 a.run("Progress.updateLearningDay(1,{criteria:[true,true,true],answers:StudyPlan.day('spa',1).checks.map(q=>q.answer),finish:true})");
 assert.equal(await a.run('Progress.flush()'),true);
 const completed=a.calls.filter(c=>c.route==='progress.php').at(-1).body.data;
 a.server(JSON.parse(JSON.stringify(completed)));a.run('Progress.invalidate()');assert.equal(await a.run('Progress.hydrate()'),true);
 assert.equal(a.run("StudyPlan.completedCount('spa',Progress.learningState().days)"),1);
 assert.equal(JSON.stringify(a.run("Progress.learningState().days['day-1']")),JSON.stringify(completed.learningDays['day-1']));
 checks.push('Registered drafts and completed work hydrate and save through the existing API without replacing legacy records');
 console.log(JSON.stringify({passed:checks.length,checks},null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
