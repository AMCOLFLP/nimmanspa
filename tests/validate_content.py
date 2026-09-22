import json,collections,re
from pathlib import Path
R=Path(__file__).resolve().parents[1];D=json.loads((R/'content/content.json').read_text())['courses'];issues=[];summary={}
for course,d in D.items():
 p=[p for c in d['phrases'] for p in c['items']]
 norm=lambda s:re.sub(r'[^\w\s]','',s.casefold()).strip()
 for name,items,field in [('vocab',d['vocab'],'word'),('phrases',p,'text')]:
  dup=[s for s,n in collections.Counter(norm(x[field]) for x in items).items() if n>1]
  if dup:issues.append((course,'duplicates',name,dup))
  ids=[x['id'] for x in items]
  assert len(ids)==len(set(ids)),(course,'duplicate ids',name)
 for v in d['vocab']:
  for field in ['word','th','phon','def','short','example','exampleTh','collocation','id']:
   assert v.get(field),(course,v['word'],field)
  assert v['level'] in [1,2,3]
  assert any(c['id']==v['cat'] for c in d['categories'])
 for x in p:
  for field in ['text','th','note','noteTh','id','audience']:assert x.get(field),(course,x['text'],field)
  assert all(i in {v['id'] for v in d['vocab']} for i in x['relatedVocabularyIds'])
  assert all(i in {g['id'] for g in d['dialogues']} for i in x['dialogueIds'])
 for key in ['mc','error']:
  for q in d[key]:
   assert 0<=q['correct']<len(q['options']),(course,key,q)
   assert len(q['options'])==len(set(q['options'])),(course,key,'duplicated options',q)
 for g in d['dialogues']:
  for line in g['lines']:
   if not line.get('fixed'):
    assert line['correct'] in line['options'],(course,g['id'],line)
    assert len(line['options'])==len(set(line['options'])),(course,g['id'],'duplicated options')
 for x in d['pron']:assert 0<=x['stress']<len(x['syll'])
 for x in d['listen']:assert x['target'] not in x['distractors'] and len(set(x['distractors']))==3
 summary[course]={'vocabulary':len(d['vocab']),'phrases':len(p),'dialogues':len(d['dialogues']),'pronunciation':len(d['pron']),'mc':len(d['mc']),'listening':len(d['listen']),'builder':len(d['builder']),'vocab_levels':dict(collections.Counter(v['level'] for v in d['vocab'])),'phrase_levels':dict(collections.Counter(v['level'] for v in p)),'vocabulary_categories':len(d['categories']),'phrase_categories':len(d['phrases']),'new_prompt_pairs':sum(bool(x.get('prompt')) for x in p)}
print(json.dumps({'summary':summary,'issues':issues},indent=2,ensure_ascii=False))
(R/'content/validation.json').write_text(json.dumps({'summary':summary,'issues':issues,'checks':['unique stable content IDs','all vocabulary has English and Thai workplace examples','phrase translations and usage support present','all related-item links resolve','correct options exist','no duplicate answer options','valid categories and learning levels','valid pronunciation stress positions']},ensure_ascii=False,indent=2))
