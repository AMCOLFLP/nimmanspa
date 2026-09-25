"""Rebuild browser data after editing content/curriculum.json. Standard library only."""
from pathlib import Path
import json
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'content/curriculum.json').read_text(encoding='utf-8'))
for course,mappings in data['mappings'].items():
    valid={m['id'] for m in data['modules'][course]}
    ids=set()
    for row in mappings:
        if row['id'] in ids:raise ValueError(f'Duplicate target ID in {course}: {row["id"]}')
        ids.add(row['id'])
        if row['id'] not in data['entries']:raise ValueError(f'Missing entry: {row["id"]}')
        if row['primary'] not in valid or not set(row['also']).issubset(valid):raise ValueError(f'Invalid module assignment: {row}')
(root/'js/curriculum-data.js').write_text('/* Generated from content/curriculum.json. */\nconst CURRICULUM_DATA = '+json.dumps(data,ensure_ascii=False,separators=(',',':'))+';\n',encoding='utf-8')
print('Updated js/curriculum-data.js. Run node tests/validate_learning.cjs next.')
