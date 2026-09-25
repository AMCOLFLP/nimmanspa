"""Build a standalone offline Body Map preview from the actual app renderer.
Requires Python 3 and Node.js to read the existing JavaScript vocabulary bank.
No web font files or external images are embedded or downloaded.
"""
from pathlib import Path
import argparse, base64, json, re, subprocess
R=Path(__file__).resolve().parents[1]

def build(output: Path) -> None:
    node_code="""const fs=require('fs'),vm=require('vm');
for(const f of ['data.js','activities.js','data-cruise.js','curriculum-data.js','curriculum-bank.js']) vm.runInThisContext(fs.readFileSync('js/'+f,'utf8'));
console.log(JSON.stringify(SPA_VOCAB.filter(v=>v.cat==='body')));"""
    run=subprocess.run(['node','-e',node_code],cwd=R,capture_output=True,text=True,check=True)
    words=json.loads(run.stdout)
    def image(path):
        return 'data:image/png;base64,'+base64.b64encode((R/path).read_bytes()).decode()
    data=(R/'js/anatomy-data.js').read_text()
    for model in ['female','male']:
        for view in ['front','back','face']:
            p=f'assets/anatomy/{model}-{view}.png'
            data=data.replace(json.dumps(p),json.dumps(image(p)))
    source=(R/'index.html').read_text()
    section=re.search(r'<section class="screen" id="screen-anatomy">.*?</section>\s*</div>\s*</div>.*?</section>',source,re.S)
    # The word-list section is nested, so take the explicit next-screen marker.
    start=source.index('  <section class="screen" id="screen-anatomy">')
    end=source.index('  <!-- ============================= PRONUNCIATION',start)
    body=source[start:end].replace('class="screen" id="screen-anatomy"','class="screen active" id="screen-anatomy"')
    body=re.sub(r'<button class="crumb-back".*?</button>','',body,flags=re.S)
    css='\n'.join(re.sub(r'^@import[^\n]+','',(R/name).read_text(),flags=re.M) for name in ['styles.css','learning.css','anatomy.css'])
    safe_storage="""try {localStorage.getItem('spa_lang');} catch (_) {
Object.defineProperty(window,'localStorage',{value:(()=>{const d={};return {getItem:k=>d[k]??null,setItem:(k,v)=>d[k]=String(v),removeItem:k=>delete d[k]};})(),configurable:true});} """
    preview_css=""".app-shell{padding-bottom:24px;overflow:visible}.topbar{margin-bottom:14px}.topbar-row{gap:16px}.preview-brand{display:flex;align-items:center;gap:12px;min-width:0}.preview-brand img{width:38px;height:38px;object-fit:contain}.preview-brand b{display:block;font:600 16px/1.5 var(--serif)}.preview-brand span{display:block;font-size:11px;color:var(--ink-soft)}.preview-note{font-size:11px;color:var(--ink-soft);line-height:1.8;margin:12px 20px 18px} .crumb h2{margin-left:0}@media(max-width:480px){.preview-brand b{font-size:13px}.preview-brand span{font-size:10px}.preview-brand img{width:30px;height:30px}.topbar-row{gap:8px}}"""
    scripts=[safe_storage,(R/'js/i18n.js').read_text(),
             'const VOCAB = '+json.dumps(words,ensure_ascii=False)+';\nconst App={speechRate:()=>0.88};',
             (R/'js/speech.js').read_text(),data,(R/'js/anatomy.js').read_text(),
             """I18N.applyStatic();Anatomy.init();Anatomy.render();
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>I18N.set(b.dataset.lang,()=>Anatomy.render())));"""]
    js=''.join('<script>'+s.replace('</script','<\\/script')+'</script>' for s in scripts)
    html=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>NIMMAN · Interactive Body Map</title><meta name="description" content="Male and female PNG body maps with front, back and face views, English/Thai vocabulary and pronunciation controls."><style>{css}\n{preview_css}</style></head><body><div class="app-shell"><header class="topbar"><div class="topbar-row"><div class="preview-brand"><img src="{image('assets/nimman-logo-small.png')}" alt="NIMMAN"><div><b>NIMMAN · Body Map</b><span>Interactive PNG preview · English / ไทย</span></div></div><div class="lang-toggle"><button class="lang-opt" data-lang="en">EN</button><button class="lang-opt" data-lang="th">ไทย</button></div></div></header><main>{body}</main><p class="preview-note">Standalone feature preview. No sign-in, assessment results or account progress are saved here. Model/view preferences may be stored in this browser. Pronunciation uses the browser's available English voices.</p></div>{js}</body></html>'''
    output.parent.mkdir(parents=True,exist_ok=True);output.write_text(html,encoding='utf-8')
    print(f'Created {output} ({output.stat().st_size:,} bytes); {len(words)} source vocabulary entries; six embedded PNG assets.')

if __name__=='__main__':
    a=argparse.ArgumentParser();a.add_argument('--output',type=Path,default=R/'BODY_MAP_PREVIEW.html');build(a.parse_args().output)
