/* Pure curriculum / assessment helpers. No server, DOM or scoring side effects. */
const LearningModel = (() => {
  const D = CURRICULUM_DATA;
  const norm = s => String(s ?? '').normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
  const esc = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function shuffle(a){const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;}
  const itemCache=new Map();
  function items(course,module='all',kind='both',category='all'){
    const cacheKey=JSON.stringify([course,module,kind,category]);if(itemCache.has(cacheKey))return itemCache.get(cacheKey);
    const seen=new Set();
    const result=(D.mappings[course]||[]).filter(m=>module==='all'||m.primary===module||m.also.includes(module)).map(m=>({...D.entries[m.id],mapping:m})).filter(e=>{
      // One target per English form/kind, even when multiple source banks contain it.
      const key=e.kind+':'+norm(e.en);
      if(seen.has(key)||(kind!=='both'&&e.kind!==kind)||(category!=='all'&&e.category!==category))return false;
      seen.add(key);return true;
    });
    itemCache.set(cacheKey,result);return result;
  }
  function categories(course,module='all',kind='both'){
    return [...new Map(items(course,module,kind).map(e=>[e.category,{id:e.category,en:e.category,th:e.categoryTh}])).values()].sort((a,b)=>a.en.localeCompare(b.en));
  }
  function gap(e){
    if(e.kind!=='word'||!e.example)return null;
    const safe=e.en.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    const re=new RegExp('(?<![a-zA-Z])'+safe+'(?![a-zA-Z])','i');
    const match=e.example.match(re);
    return match?{prompt:e.example.replace(re,'________'),answer:match[0]}:null;
  }
  function eligible(e,type,course){
    if(type==='gap')return !!gap(e);
    if(type==='order')return e.kind==='phrase'&&e.en.trim().split(/\s+/).length>=3;
    if(type==='choice'||type==='listen')return items(course).some(x=>x.kind===e.kind&&norm(x.en)!==norm(e.en)&&norm(x.th)!==norm(e.th));
    return !!e.en&&!!e.th;
  }
  function options(e,course){
    const used=new Set([norm(e.th)]),usedEn=new Set([norm(e.en)]);
    const source=shuffle(items(course)).filter(x=>x.kind===e.kind&&x.id!==e.id);
    source.sort((a,b)=>Number(b.category===e.category)-Number(a.category===e.category));
    const distract=[];
    for(const x of source){if(!used.has(norm(x.th))&&!usedEn.has(norm(x.en))){used.add(norm(x.th));usedEn.add(norm(x.en));distract.push({id:x.id,en:x.en,th:x.th});}if(distract.length===3)break;}
    return shuffle([{id:e.id,en:e.en,th:e.th},...distract]);
  }
  function pool(config){return items(config.course,config.module,config.kind,config.category).filter(e=>eligible(e,config.type,config.course));}
  function select(config,review={}){
    let p=pool(config);
    if(config.scope==='review')p=p.filter(e=>review[e.id]?.needsReview);
    if(config.scope==='selected')p=p.filter(e=>(config.selected||[]).includes(e.id));
    if(config.type==='match'){
      const meanings=new Set();p=p.filter(e=>{const k=norm(e.th);if(meanings.has(k))return false;meanings.add(k);return true;});
    }
    return p;
  }
  function validate(config,review={}){
    const p=select(config,review),n=Number(config.count);
    if(!Number.isInteger(n)||n<1)return {ok:false,code:'integer',available:p.length};
    if(!p.length)return {ok:false,code:'empty',available:0};
    if(config.type==='match'&&n<2)return {ok:false,code:'match',available:p.length};
    if(n>p.length)return {ok:false,code:'short',available:p.length};
    return {ok:true,available:p.length,items:p};
  }
  function build(config,review={}){
    const v=validate(config,review);if(!v.ok)return v;
    const selected=shuffle(v.items).slice(0,Number(config.count));
    const questions=selected.map(e=>{
      let type=config.type;
      if(type==='mixed'){
        const possible=['choice','type'];if(gap(e))possible.push('gap');if(eligible(e,'order',config.course))possible.push('order');
        type=possible[Math.floor(Math.random()*possible.length)];
      }
      return {entry:e,type,options:options(e,config.course),gap:gap(e)};
    });
    return {ok:true,questions};
  }
  function accepted(q,answer){
    const expected=q.type==='gap'?q.gap.answer:q.entry.en;
    const aliases=q.entry.raw.acceptedAnswers||[];
    return [expected,...aliases].some(x=>norm(x)===norm(answer));
  }
  function batches(qs){
    const out=[];let i=0;
    while(i<qs.length){let size=Math.min(5,qs.length-i);if(qs.length-i===6)size=4;out.push(qs.slice(i,i+size));i+=size;}
    return out;
  }
  return {D,norm,esc,shuffle,items,categories,gap,eligible,options,pool,select,validate,build,accepted,batches};
})();
