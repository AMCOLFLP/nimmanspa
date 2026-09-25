"""Validate packaged PNGs, coordinate data and dependencies (not medical anatomy)."""
from pathlib import Path
from PIL import Image
import hashlib,json,math,re,subprocess
R=Path(__file__).resolve().parents[2];O=Path(__file__).resolve().parent
D=json.loads((R/'content/anatomy-map.json').read_text());M=json.loads((R/'assets/anatomy/manifest.json').read_text())
checks=[]
def check(label,condition):
    assert condition,label
    checks.append(label)
def contains(x,y,s):
    if s['type']=='ellipse':return ((x-s['cx'])/s['rx'])**2+((y-s['cy'])/s['ry'])**2<=1.00001
    ps=s['points'];inside=False
    for i,(x1,y1) in enumerate(ps):
        x2,y2=ps[i-1]
        if ((y1>y)!=(y2>y)) and (x<(x2-x1)*(y-y1)/(y2-y1)+x1):inside=not inside
    return inside
check('Exactly six packaged PNGs',len(M)==6)
for a in M:
    p=R/a['file'];im=Image.open(p)
    check(a['file']+': PNG + RGBA alpha',im.format=='PNG' and im.mode=='RGBA' and im.getchannel('A').getextrema()==(0,255))
    check(a['file']+': dimensions and source-preserving hash',im.size==(a['width'],a['height']) and hashlib.sha256(p.read_bytes()).hexdigest()==a['sha256'])
for model,views in D['models'].items():
    for view,d in views.items():
        prefix=f'{model}/{view}';im=Image.open(R/d['src']);alpha=im.getchannel('A')
        check(prefix+': matching JSON/image dimensions',im.size==(d['width'],d['height']))
        rs=d['regions'];words=[r['word'] for r in rs]
        check(prefix+': unique expected regions',len(words)==len(set(words))=={'front':18,'back':16,'face':10}[view])
        for r in rs:
            x,y=r['pin']
            check(prefix+'/'+r['word']+': pin on nontransparent figure',alpha.getpixel((int(x/100*im.width),int(y/100*im.height)))>=200)
            check(prefix+'/'+r['word']+': pin inside own hit region',any(contains(x,y,s) for s in r['shapes']))
            for s in r['shapes']:
                if s['type']=='ellipse':
                    xs=[s['cx']-s['rx'],s['cx']+s['rx']];ys=[s['cy']-s['ry'],s['cy']+s['ry']]
                else:xs=[q[0] for q in s['points']];ys=[q[1] for q in s['points']]
                check(prefix+'/'+r['word']+': shape within PNG',min(xs)>=0 and max(xs)<=100 and min(ys)>=0 and max(ys)<=100 and max(xs)>min(xs) and max(ys)>min(ys))
        # Conservative narrow rendering width. The source PNG itself is untrimmed.
        for i,r in enumerate(rs):
            for other in rs[i+1:]:
                dx=(r['pin'][0]-other['pin'][0])*254/100;dy=(r['pin'][1]-other['pin'][1])*254*d['height']/d['width']/100
                check(prefix+f': marker spacing {r["word"]}/{other["word"]}',math.hypot(dx,dy)>=24)
for view in ['front','back','face']:
    check(view+': both models share the same vocabulary list',[r['word'] for r in D['models']['female'][view]['regions']]==[r['word'] for r in D['models']['male'][view]['regions']])
s=(R/'index.html').read_text()
for file in re.findall(r'(?:src|href)="([^"]+)"',s):
    if file.startswith(('https:','data:','#','javascript:')):continue
    check('Local HTML dependency '+file,(R/file.split('?')[0]).is_file())
check('Coordinate script loads before renderer',s.index('js/anatomy-data.js')<s.index('js/anatomy.js'))
for p in (R/'js').glob('*.js'):
    result=subprocess.run(['node','--check',str(p)],capture_output=True,text=True)
    check('JavaScript syntax '+p.name,result.returncode==0)
report={'passed':len(checks),'checks':checks,'pngCount':6,'uniqueMappedTerms':38,'regionCounts':{'front':18,'back':16,'face':10},'scope':'File, alpha-mask, coordinate, marker-spacing and syntax checks; not independent anatomical/clinical verification.'}
(O/'asset-report.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps({k:v for k,v in report.items() if k!='checks'},indent=2))
