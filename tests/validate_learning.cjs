const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..');
vm.runInThisContext(fs.readFileSync(path.join(root,'js/curriculum-data.js'),'utf8'));
vm.runInThisContext(fs.readFileSync(path.join(root,'js/learning-model.js'),'utf8'));
const M=LearningModel,D=M.D,checks=[],counts={};
function check(name,fn){fn();checks.push(name);}
const original=JSON.parse(fs.readFileSync(path.join(root,'content/content.json'),'utf8')).courses;
for(const course of Object.keys(D.courses)){
 const all=M.items(course);counts[course]={words:all.filter(x=>x.kind==='word').length,phrases:all.filter(x=>x.kind==='phrase').length,sections:D.modules[course].length};
 check(course+': unique IDs / English targets / valid mappings',()=>{
   assert.equal(new Set(all.map(e=>e.id)).size,all.length);
   assert.equal(new Set(all.map(e=>e.kind+M.norm(e.en))).size,all.length);
   for(const m of D.mappings[course]){assert(D.entries[m.id]);assert(D.modules[course].some(x=>x.id===m.primary));for(const id of m.also)assert(D.modules[course].some(x=>x.id===id));}
 });
 if(original[course])check(course+': all original vocabulary and phrases remain mapped',()=>{
  const ids=new Set(D.mappings[course].flatMap(m=>[m.id,...(m.mergedSourceIds||[])]));
  for(const e of [...original[course].vocab,...original[course].phrases.flatMap(c=>c.items)])assert(ids.has(e.id),e.id);
 });
 for(const module of ['all',...D.modules[course].map(m=>m.id)]){
  for(const type of ['choice','match','type','gap','order','listen','mixed']){
   const cfg={course,module,category:'all',kind:'both',count:5,type,feedback:'practice',scope:'all',selected:[]};
   const pool=M.select(cfg);if(!pool.length)continue;cfg.count=Math.min(type==='match'?6:5,pool.length);if(type==='match'&&cfg.count<2)continue;
   check(`${course}/${module}/${type}: exact count, no repeats, correct eligible content`,()=>{
    const set=M.build(cfg);assert(set.ok);assert.equal(set.questions.length,cfg.count);assert.equal(new Set(set.questions.map(q=>q.entry.id)).size,cfg.count);
    for(const q of set.questions){assert(pool.some(e=>e.id===q.entry.id));if(q.type==='gap'){assert.equal(q.entry.kind,'word');assert(q.gap.prompt.includes('________'));assert(M.accepted(q,q.gap.answer.toUpperCase()+'.'));}if(q.type==='order')assert.equal(q.entry.kind,'phrase');if(q.type==='choice'||q.type==='listen'){assert.equal(q.options.filter(o=>o.id===q.entry.id).length,1);assert.equal(new Set(q.options.map(o=>M.norm(o.th))).size,q.options.length);}}
   });
  }
 }
 check(course+': validation and manual/missed filters',()=>{
  const cfg={course,module:'all',category:'all',kind:'both',count:0,type:'choice',scope:'all'};
  for(const count of [0,-1,1.5,'',100000])assert(!M.validate({...cfg,count}).ok);
  const chosen=all.slice(0,3).map(e=>e.id),s=M.build({...cfg,count:3,scope:'selected',selected:chosen});assert(s.ok);assert(s.questions.every(q=>chosen.includes(q.entry.id)));
  const history={[chosen[0]]:{needsReview:true},[chosen[1]]:{needsReview:false}};
  const r=M.build({...cfg,count:1,scope:'review'},history);assert(r.ok);assert.equal(r.questions[0].entry.id,chosen[0]);
  assert(!M.validate({...cfg,count:1,type:'match'}).ok);
  assert(!M.validate({...cfg,count:1,type:'order',kind:'word'}).ok);
  assert(!M.validate({...cfg,count:1,type:'gap',kind:'phrase'}).ok);
 });
}
check('Matching groups never leave an unavoidable single pair',()=>{for(let n=2;n<101;n++){const a=Array.from({length:n},(_,i)=>i),b=M.batches(a);assert(b.every(x=>x.length>=2&&x.length<=5));assert.equal(b.flat().length,n);}});
check('Source assessment weights sum to 100 for all three courses',()=>{Object.values(D.courses).forEach(c=>assert.equal(c.assessment.reduce((s,x)=>s+x[1],0),100));});
const report={date:'2026-09-25',passed:checks.length,checks,counts,limitations:['Structural and selection checks only; not independent translation, clinical or psychometric validation.']};
fs.writeFileSync(path.join(__dirname,'learning-validation-report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({passed:checks.length,counts},null,2));
