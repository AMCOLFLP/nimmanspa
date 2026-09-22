"""Validate the shipped content, activity banks, IDs and runtime bank overlay."""
import json,re,collections,subprocess
from pathlib import Path
R=Path(__file__).resolve().parents[1]
C=json.loads((R/'content/content.json').read_text())['courses']
errors=[];checks=[];counts={}
EXPECTED={'mc':100,'tf':50,'error':50,'listen':80,'builder':80,'dialogues':30,'scenario':30,'readings':10,'listenRespond':20,'order':10,'context':30}
normal=lambda s:re.sub(r'\s+',' ',s.lower().replace('’',"'")).strip()
all_ids=[]
for course,c in C.items():
    counts[course]={k:len(c[k]) for k in EXPECTED}
    counts[course]['readingQuestions']=sum(len(r['questions']) for r in c['readings'])
    counts[course]['dialogueBlanks']=sum(sum(not l.get('fixed') for l in d['lines']) for d in c['dialogues'])
    assert len(c['vocab'])==250
    assert sum(len(cat['items']) for cat in c['phrases'])=={'spa':220,'cruise':180}[course]
    for kind,n in EXPECTED.items():
        if len(c[kind])!=n:errors.append(f'{course}/{kind}: count {len(c[kind])}, expected {n}')
        ids=[q['id'] for q in c[kind]]
        if len(ids)!=len(set(ids)):errors.append(f'{course}/{kind}: duplicate ID')
        primary={'mc':'q','tf':'statement','error':'wrong','listen':'target','builder':'sentence','scenario':'q','context':'sentence','order':'title','dialogues':'title','readings':'passage','listenRespond':'audioText'}[kind]
        dup=[k for k,n in collections.Counter(normal(q[primary]) for q in c[kind]).items() if n>1]
        if dup:errors.append(f'{course}/{kind}: duplicate text {dup}')
        for q in c[kind]:
            if q.get('level') not in (1,2,3):errors.append(f'{q["id"]}: missing editorial level')
            if kind not in ('dialogues','readings'):all_ids.append(q['id'])
            if 'options' in q:
                if not isinstance(q['correct'],int) or not 0<=q['correct']<len(q['options']):errors.append(f'{q["id"]}: invalid key')
                if len(set(map(normal,q['options'])))!=len(q['options']):errors.append(f'{q["id"]}: duplicate options')
                if len(q['options'])<3:errors.append(f'{q["id"]}: too few options')
            if kind=='listen':
                if len(set(map(normal,[q['target']]+q['distractors'])))!=4:errors.append(f'{q["id"]}: invalid listening options')
            if kind=='tf' and not isinstance(q['answer'],bool):errors.append(f'{q["id"]}: non-boolean TF key')
            if kind=='context':
                if q['sentence'].count('___')!=1 or q['answer'] not in q['accepted']:errors.append(f'{q["id"]}: invalid typed prompt')
            if kind=='order' and len(q['turns'])!=3:errors.append(f'{q["id"]}: expected 3 movable turns')
            if kind in ('scenario','listenRespond','context','order') and not (q.get('explainTh') or q.get('hintTh')):errors.append(f'{q["id"]}: missing Thai support')
    for d in c['dialogues']:
        for l in d['lines']:
            if not l.get('fixed'):
                all_ids.append(l['id'])
                if l['correct'] not in l['options'] or len(set(map(normal,l['options'])))!=len(l['options']):errors.append(f'{d["id"]}: invalid dialogue options')
    for r in c['readings']:
        if len(r['questions'])!=3:errors.append(f'{r["id"]}: expected 3 reading questions')
        for q in r['questions']:
            all_ids.append(q['id'])
            if len(set(q['options']))!=4 or q['correct'] not in range(4):errors.append(f'{q["id"]}: invalid reading key')
    checks.append(f'{course}: 12 activity banks, unique per-bank prompts, keys, options, levels and linked IDs checked')
if len(all_ids)!=len(set(all_ids)):errors.append('Global scored-item IDs are not unique')
# Compare what JavaScript actually loads with the JSON editing/export copy.
files=['js/data.js','js/activities.js','js/data-cruise.js','js/practice-data.js']
js="const fs=require('fs'),vm=require('vm');const ctx=vm.createContext({});\n"
for f in files:js+=f"vm.runInContext(fs.readFileSync({json.dumps(str(R/f))},'utf8'),ctx);\n"
js+="console.log(vm.runInContext('JSON.stringify({spa:{mc:SPA_MC_BANK,tf:SPA_TRUE_FALSE_BANK,error:SPA_ERROR_BANK,listen:SPA_LISTEN_BANK,builder:SPA_BUILDER_BANK,dialogues:SPA_FILL_DIALOGUES},cruise:{mc:CRUISE_MC_BANK,tf:CRUISE_TRUE_FALSE_BANK,error:CRUISE_ERROR_BANK,listen:CRUISE_LISTEN_BANK,builder:CRUISE_BUILDER_BANK,dialogues:CRUISE_FILL_DIALOGUES}})',ctx));"
runtime=json.loads(subprocess.check_output(['node','-e',js],text=True))
for course,b in runtime.items():
    for kind,items in b.items():
        if items!=C[course][kind]:errors.append(f'Runtime/export mismatch: {course}/{kind}')
for p in (R/'js').glob('*.js'):
    subprocess.run(['node','--check',str(p)],check=True,capture_output=True)
checks+=['All JavaScript files pass Node syntax validation','Runtime bank overlays exactly match content/content.json','All scored-item IDs unique across both courses','Original 500 vocabulary entries and 400 phrases retained']
report={'status':'passed' if not errors else 'failed','counts':counts,'checks':checks,'errors':errors,'scope':'Automated structural checks; not independent language, clinical, operational or psychometric validation.'}
(R/'tests/activity-validation-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False,indent=2));assert not errors
