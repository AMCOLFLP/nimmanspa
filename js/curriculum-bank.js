/* Adds shared course support; preserves all original word/phrase IDs and progress keys. */
const CurriculumBank = (() => {
 const D=CURRICULUM_DATA;
 function bank(course){
   const es=D.mappings[course].map(m=>D.entries[m.id]);
   const vocab=es.filter(e=>e.kind==='word').map(e=>({...e.raw}));
   const cats=[...new Set(vocab.map(v=>v.cat))].map(id=>{const e=es.find(e=>e.kind==='word'&&e.raw.cat===id);return {id,en:e.category,th:e.categoryTh};});
   const phrases=[];
   es.filter(e=>e.kind==='phrase').forEach(e=>{let cat=phrases.find(c=>c.id===e.category);if(!cat){cat={id:e.category,en:e.category,th:e.categoryTh,items:[]};phrases.push(cat);}cat.items.push({...e.raw});});
   return {vocab,cats,phrases};
 }
 // Append, rather than replacing the original categories used by legacy filters.
 function supplement(course,vs,cs,ps){
   const es=D.mappings[course].map(m=>D.entries[m.id]);
   es.forEach(e=>{
    if(e.kind==='word'&&!vs.some(v=>v.id===e.id)){
     const v={...e.raw}; if(!cs.some(c=>c.id===v.cat))cs.push({id:v.cat,en:e.category,th:e.categoryTh});vs.push(v);
    }
    if(e.kind==='phrase'&&!ps.some(c=>c.items.some(p=>p.id===e.id))){
     let cat=ps.find(c=>c.id===e.category);if(!cat){cat={id:e.category,en:e.category,th:e.categoryTh,items:[]};ps.push(cat);}cat.items.push({...e.raw});
    }
   });
 }
 supplement('spa',SPA_VOCAB,SPA_VOCAB_CATEGORIES,SPA_PHRASES);
 supplement('cruise',CRUISE_VOCAB,CRUISE_VOCAB_CATEGORIES,CRUISE_PHRASES);
 const salon=bank('salon');
 return {salon};
})();
