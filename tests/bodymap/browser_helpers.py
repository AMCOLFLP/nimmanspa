from pathlib import Path
import re,base64,json
R=Path(__file__).resolve().parents[2]
MEMORY_STORAGE="""<script>Object.defineProperty(window,'localStorage',{value:(()=>{const d={};return {getItem:k=>Object.prototype.hasOwnProperty.call(d,k)?d[k]:null,setItem:(k,v)=>d[k]=String(v),removeItem:k=>delete d[k],clear:()=>Object.keys(d).forEach(k=>delete d[k]),key:i=>Object.keys(d)[i]??null,get length(){return Object.keys(d).length}}})(),configurable:true});</script>"""
URIS={str(p.relative_to(R)):'data:image/png;base64,'+base64.b64encode(p.read_bytes()).decode() for p in (R/'assets').rglob('*.png')}
def inline_js(path):
 s=(R/path.split('?')[0]).read_text()
 if path.startswith('js/anatomy-data.js'):
  for f,uri in URIS.items():
   if f.startswith('assets/anatomy/'):
    s=s.replace(json.dumps(f),json.dumps(uri))
 return s.replace('</script','<\\/script')
def markup():
 s=(R/'index.html').read_text().replace('<head>','<head>'+MEMORY_STORAGE)
 s=re.sub(r'<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>',lambda m:'<style>'+re.sub(r'^@import[^\n]+','',(R/m[1].split('?')[0]).read_text(),flags=re.M)+'</style>',s)
 s=re.sub(r'<script src="([^"]+)"></script>',lambda m:'<script>'+inline_js(m[1])+'</script>',s)
 for f,uri in URIS.items(): s=s.replace('src="'+f+'"','src="'+uri+'"').replace('href="'+f+'"','href="'+uri+'"')
 return s
