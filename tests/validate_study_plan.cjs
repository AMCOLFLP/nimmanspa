/* Validate the suggested schedule against the actual curriculum and render
   both languages without a browser. Account dates are tested separately. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..'),checks=[];
const sandbox=vm.createContext({console});
for(const file of ['curriculum-data.js','learning-model.js','study-plan.js']){
 vm.runInContext(fs.readFileSync(path.join(root,'js',file),'utf8'),sandbox,{filename:file});
}
function run(source){return vm.runInContext(source,sandbox);}
function check(name,fn){fn();checks.push(name);}
for(const course of run('Object.keys(CURRICULUM_DATA.courses)')){
 check(`${course}: four complete weeks, every source module assigned exactly once`,()=>{
  const weeks=run(`StudyPlan.get('${course}')`),ids=weeks.flatMap(w=>w.modules);
  assert.equal(weeks.length,4);
  assert.equal(new Set(ids).size,ids.length);
  assert.equal(JSON.stringify([...ids].sort()),JSON.stringify([...run(`CURRICULUM_DATA.modules.${course}.map(m=>m.id)`)].sort()));
  weeks.forEach((week,i)=>{
   assert.equal(week.number,i+1);assert.equal(week.startDay,i*7+1);assert.equal(week.endDay,(i+1)*7);
   assert(week.title&&week.th&&week.outcome&&week.outcomeTh&&week.modules.length);
  });
 });
 check(`${course}: next lesson advances in plan order and ends when all studied`,()=>{
  const ids=run(`StudyPlan.get('${course}').flatMap(w=>w.modules)`),studied={};
  for(const id of ids){
   assert.equal(run(`StudyPlan.next('${course}',${JSON.stringify(studied)}).moduleId`),id);
   assert(run(`StudyPlan.weekForModule('${course}','${id}').modules.includes('${id}')`));
   studied[id]=true;
  }
  assert.equal(run(`StudyPlan.next('${course}',${JSON.stringify(studied)})`),null);
  studied[ids[0]]=false;
  assert.equal(run(`StudyPlan.next('${course}',${JSON.stringify(studied)}).moduleId`),ids[0]);
 });
}
check('Plan consumers cannot mutate the stored module list',()=>{
 run("StudyPlan.get('spa')[0].modules.push('not-a-module')");
 assert.equal(run("StudyPlan.get('spa')[0].modules.includes('not-a-module')"),false);
});
run(`
 const elements={learningRoot:{innerHTML:''},learningHomeCard:{innerHTML:''}};
 const document={getElementById:id=>elements[id]||null};
 const I18N={current:'en',t:k=>k};
 const Courses={currentId:'spa',name:id=>CURRICULUM_DATA.courses[id].title};
 let learningState={modules:{},items:{}};
 const Progress={learningState:()=>learningState};
 const Nav={go:()=>LearningHub.render()};
 const Interview={available:()=>false};
`);
run(fs.readFileSync(path.join(root,'js/learning-hub.js'),'utf8'));
for(const course of ['spa','cruise','salon']){
 for(const language of ['en','th']){
  check(`${course}/${language}: overview and lessons preserve routes in a compact plan`,()=>{
   run(`Courses.currentId='${course}';I18N.current='${language}';learningState={modules:{},items:{}};LearningHub.open()`);
   const html=run('elements.learningRoot.innerHTML');
   assert.equal((html.match(/<details class="lh-week /g)||[]).length,4);
   assert.equal((html.match(/<details class="lh-week [^"]*" open>/g)||[]).length,1);
   assert(html.includes('29–30'));
   assert(html.includes('15–20'));
   assert(html.includes('lh-assessment'));
   assert(!html.includes('undefined'));assert(!html.includes('\uFFFD'));
   const ids=run(`CURRICULUM_DATA.modules.${course}.map(m=>m.id)`);
   assert.equal((html.match(/<article class="lh-module /g)||[]).length,ids.length);
   for(const id of ids){
    run(`LearningHub.open('${id}')`);
    const lesson=run('elements.learningRoot.innerHTML');
    assert(lesson.includes(`data-lh="studied" data-id="${id}"`));
    assert(lesson.includes(`data-lh="assess" data-id="${id}"`));
    assert((lesson.match(/<article class="lh-entry">/g)||[]).length<=12);
    assert(!lesson.includes('undefined'));
   }
  });
 }
 check(`${course}: progress opens the next incomplete week and complete state offers review`,()=>{
  run(`Courses.currentId='${course}';I18N.current='en';learningState={modules:Object.fromEntries(StudyPlan.get('${course}')[0].modules.map(id=>[id,true])),items:{}};LearningHub.open()`);
  const next=run(`StudyPlan.get('${course}')[1].modules[0]`);
  assert(run('elements.learningRoot.innerHTML').includes(`data-lh="module" data-id="${next}"`));
  assert(run('elements.learningRoot.innerHTML').includes('Continue learning'));
  run(`learningState.modules=Object.fromEntries(CURRICULUM_DATA.modules.${course}.map(m=>[m.id,true]));LearningHub.open();LearningHub.home()`);
  assert(run('elements.learningRoot.innerHTML').includes('All chapters marked studied'));
  assert(run('elements.learningHomeCard.innerHTML').includes('final review'));
 });
}
console.log(JSON.stringify({passed:checks.length,checks},null,2));
