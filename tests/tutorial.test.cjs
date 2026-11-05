/* Run with node --test --test-isolation=none tests/tutorial.test.cjs.
   Small DOM harness tests tutorial behavior, not browser layout or native dialog rendering. */
const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const source = name => fs.readFileSync(path.join(__dirname,'../js',name),'utf8');
const guest = () => ({guest:true,name:'Guest',lang:'en'});
const account = () => ({guest:false,name:'Learner',email:'learner@example.test',lang:'en',is_admin:false,must_change_password:false});
const admin = () => ({...account(),email:'admin@example.test',is_admin:true});
const sampleContent = (user,lang) => ({
  title:lang==='th'?'วิธีใช้งาน':'How to use NIMMANSPA',
  subtitle:lang==='th'?'คู่มือพร้อมใช้งาน':'Your reusable guide',
  steps:[0,1,2].map(index=>({id:`step-${index}`,short:`${lang} short ${index+1}`,title:`${lang} lesson ${index+1}`,lead:`Introduction ${index+1}`,bullets:[`Point ${index+1}`],remember:`Remember ${index+1}`}))
});

function harness({user:initialUser=guest(),native=true,storageFails=false,seen=false,content=sampleContent}={}){
  let user=initialUser;
  const storage=new Map(seen?[['nimmanspa_tutorial_seen_v1','1']]:[]),storageWrites=[],calls=[],classes=new Set(),dom=new Map(),documentEvents={},windowEvents={};
  const listen=(events,name,fn,options)=>{fn.capture=options===true||!!options?.capture;(events[name] ||= []).push(fn);};
  const emit=(events,name,event={})=>{event.type=name;event.preventDefault ||= function(){this.defaultPrevented=true;};event.stopPropagation ||= function(){this.propagationStopped=true;};event.stopImmediatePropagation ||= function(){this.propagationStopped=true;this.immediateStopped=true;};for(const fn of [...(events[name]||[])].sort((a,b)=>Number(b.capture)-Number(a.capture))){if(event.immediateStopped)break;if(event.propagationStopped&&!fn.capture)continue;fn(event);}return event;};
  let document;
  class Element{
    constructor(tag='div',id=''){this.tagName=tag.toUpperCase();this.id=id;this.attrs={};this.dataset={};this.style={};this.children=[];this.listeners={};this.classList={add:value=>this.classes.add(value),remove:value=>this.classes.delete(value),contains:value=>this.classes.has(value)};this.classes=new Set();this.isConnected=true;this.disabled=false;this.hidden=false;this.inert=false;this._html='';}
    set innerHTML(value){this._html=value;this.children=[];for(const match of value.matchAll(/<(button|h[1-6]|a|input|select|textarea)\b([^>]*)>/g)){const child=new Element(match[1]);for(const attr of match[2].matchAll(/([\w-]+)(?:="([^"]*)")?/g))child.setAttribute(attr[1],attr[2]??'');child.parentElement=this;this.children.push(child);}}
    get innerHTML(){return this._html;}
    addEventListener(name,fn){listen(this.listeners,name,fn);}
    removeEventListener(name,fn){this.listeners[name]=(this.listeners[name]||[]).filter(value=>value!==fn);}
    setAttribute(name,value){this.attrs[name]=String(value);if(name==='id')this.id=String(value);if(name==='open')this.open=true;if(name==='disabled')this.disabled=true;if(name.startsWith('data-'))this.dataset[name.slice(5).replace(/-([a-z])/g,(_,letter)=>letter.toUpperCase())]=String(value);}
    getAttribute(name){return Object.hasOwn(this.attrs,name)?this.attrs[name]:null;}
    hasAttribute(name){return Object.hasOwn(this.attrs,name);}
    removeAttribute(name){delete this.attrs[name];if(name==='open')this.open=false;}
    appendChild(child){this.children.push(child);child.parentElement=this;child.isConnected=true;return child;}
    replaceChildren(...children){this._html='';this.children=[];children.forEach(child=>this.appendChild(child));}
    remove(){this.isConnected=false;if(this.parentElement)this.parentElement.children=this.parentElement.children.filter(child=>child!==this);}
    contains(target){return target===this||this.children.some(child=>child.contains(target));}
    focus(){document.activeElement=this;}
    matches(selector){if(selector.includes(','))return selector.split(',').some(part=>this.matches(part.trim()));if(selector.startsWith('#'))return this.id===selector.slice(1);if(selector==='button')return this.tagName==='BUTTON';const match=selector.match(/^\[([^=\]]+)(?:=["']?([^"'\]]+)["']?)?\]$/);return !!match&&this.hasAttribute(match[1])&&(match[2]===undefined||this.getAttribute(match[1])===match[2]);}
    closest(selector){return this.matches(selector)?this:this.parentElement?.closest(selector)||null;}
    querySelectorAll(selector){const children=this.children.flatMap(child=>[child,...child.querySelectorAll('*')]);if(selector==='*')return children;if(selector.includes('button')&&selector.includes(','))return children.filter(child=>['BUTTON','A','INPUT','SELECT','TEXTAREA'].includes(child.tagName)&&!child.disabled&&!child.hidden);return children.filter(child=>child.matches(selector));}
    querySelector(selector){return this.querySelectorAll(selector)[0]||null;}
  }
  const launcher=new Element('button','tutorialLauncher'),shell=new Element('main','appShell'),dialog=new Element('dialog','tutorialDialog'),root=new Element('div','tutorialRoot');
  dialog.open=false;dialog.appendChild(root);
  if(native){dialog.showModal=function(){this.open=true;this.setAttribute('open','');};dialog.close=function(){if(!this.open)return;this.open=false;this.removeAttribute('open');emit(this.listeners,'close');};}
  const body=new Element('body');body.children=[launcher,shell,dialog];body.classList={add:value=>classes.add(value),remove:value=>classes.delete(value),contains:value=>classes.has(value)};
  for(const node of body.children){node.parentElement=body;dom.set(node.id,node);}dom.set(root.id,root);
  document={body,activeElement:launcher,visibilityState:'visible',documentElement:{style:{}},addEventListener:(name,fn,options)=>listen(documentEvents,name,fn,options),removeEventListener(name,fn){documentEvents[name]=(documentEvents[name]||[]).filter(value=>value!==fn);},getElementById(id){return dom.get(id)||root.querySelector(`#${id}`);},querySelector:selector=>body.querySelector(selector),querySelectorAll:selector=>body.querySelectorAll(selector),createElement:tag=>new Element(tag)};
  const access=Object.fromEntries(['spa','cruise','salon'].map(id=>[id,{status:'not_started',expires_at:null}]));
  const context=vm.createContext({console,Set,Map,Date,Math,JSON,Promise,
    requestAnimationFrame:fn=>fn(),cancelAnimationFrame(){},setTimeout:fn=>{fn();return 1;},clearTimeout(){},
    document,window:{addEventListener:(name,fn)=>listen(windowEvents,name,fn),removeEventListener(){},requestAnimationFrame:fn=>fn(),innerWidth:1200},
    localStorage:{getItem(key){if(storageFails)throw new Error('Storage blocked');return storage.get(key)||null;},setItem(key,value){if(storageFails)throw new Error('Storage blocked');storageWrites.push({key,value});storage.set(key,value);}},
    Auth:{currentUser:()=>user,needsPasswordChange:()=>!!user?.must_change_password},I18N:{current:'en',set(lang,rerender){this.current=lang;if(storageFails)throw new Error('Storage blocked');rerender?.();},applyStatic(){},t:key=>key},
    TutorialContent:{get:content},
    App:{rerenderAll(){context.Tutorial.render();}},
    Speech:{stop:()=>calls.push('speech:stop')},Speaking:{stopAll:()=>calls.push('microphone:stop')},Vocab:{stopTimers:()=>calls.push('vocab:stop')},
    Courses:{currentId:'spa',all:[{id:'spa'},{id:'cruise'},{id:'salon'}]},CourseAccess:{get:id=>access[id||'spa'],start:id=>{calls.push(`course:start:${id}`);}},
    Progress:{get:()=>{calls.push('progress:get');return {};},set:()=>calls.push('progress:set'),flush:()=>{calls.push('progress:flush');return Promise.resolve();}},
    Api:{get:route=>{calls.push(`GET:${route}`);return Promise.resolve({});},post:route=>{calls.push(`POST:${route}`);return Promise.resolve({});}}
  });
  vm.runInContext(source('tutorial.js')+'\nglobalThis.Tutorial=Tutorial;',context);
  const h={Tutorial:context.Tutorial,context,root,dialog,launcher,shell,body,classes,access,calls,storage,storageWrites,documentEvents,windowEvents,
    user(value){user=value;},click(action,extra={}){const target=new Element('button');target.setAttribute('data-tutorial-action',action);Object.assign(target.dataset,extra);return emit(root.listeners,'click',{target});},
    jump(index){const target=new Element('button');target.setAttribute('data-tutorial-step',index);return emit(root.listeners,'click',{target});},
    language(value){const target=new Element('button');target.setAttribute('data-tutorial-lang',value);return emit(root.listeners,'click',{target});},
    launch(){launcher.setAttribute('data-tutorial-open','');launcher.focus();return emit(documentEvents,'click',{target:launcher});},
    cancel(){const event=emit(dialog.listeners,'cancel');if(!event.defaultPrevented&&native)dialog.close();return event;},
    key(key,extra={}){return emit(documentEvents,'keydown',{key,target:document.activeElement,...extra});},
    emitDialog:(name,event)=>emit(dialog.listeners,name,event),emitDocument:(name,event)=>emit(documentEvents,name,event),emitWindow:(name,event)=>emit(windowEvents,name,event),
  };
  h.Tutorial.init();return h;
}

test('first use opens for guest, learner and admin, but never blocks signed-out or password-change screens',()=>{
  for(const user of [guest(),account(),admin()]){const h=harness({user});h.Tutorial.maybeOpen();assert.equal(h.Tutorial.isOpen(),true);assert.equal(h.dialog.open,true);assert.match(h.root.innerHTML,/en lesson 1/);}
  for(const user of [null,{...account(),must_change_password:true},{...admin(),must_change_password:true}]){const h=harness({user});h.Tutorial.maybeOpen();assert.equal(h.Tutorial.isOpen(),false);assert.equal(h.dialog.open,false);assert.equal(h.storageWrites.length,0);}
});

test('the tutorial is shown automatically once and can always be replayed from its first step',()=>{
  const h=harness();h.Tutorial.maybeOpen();h.click('next');assert.match(h.root.innerHTML,/en lesson 2/);h.Tutorial.close();
  h.Tutorial.maybeOpen();assert.equal(h.Tutorial.isOpen(),false);assert.equal(h.storage.get('nimmanspa_tutorial_seen_v1'),'1');
  h.launch();assert.equal(h.Tutorial.isOpen(),true);assert.match(h.root.innerHTML,/en lesson 1/);
  const returning=harness({seen:true});returning.Tutorial.maybeOpen();assert.equal(returning.Tutorial.isOpen(),false);returning.Tutorial.open();assert.equal(returning.Tutorial.isOpen(),true);
});

test('blocked browser storage keeps the tour usable and remembers automatic dismissal for this page',()=>{
  const h=harness({storageFails:true});assert.doesNotThrow(()=>h.Tutorial.maybeOpen());assert.equal(h.Tutorial.isOpen(),true);h.Tutorial.close();h.Tutorial.maybeOpen();assert.equal(h.Tutorial.isOpen(),false);h.Tutorial.open();assert.equal(h.Tutorial.isOpen(),true);
});

test('next, back, direct chapter navigation and finish work without changing course access',()=>{
  const h=harness(),before=JSON.stringify(h.access);h.Tutorial.open();h.click('next');assert.match(h.root.innerHTML,/en lesson 2/);h.click('back');assert.match(h.root.innerHTML,/en lesson 1/);h.jump(2);assert.match(h.root.innerHTML,/en lesson 3/);h.click('finish');assert.equal(h.Tutorial.isOpen(),false);assert.equal(JSON.stringify(h.access),before);
  assert.equal(h.calls.some(value=>/course:|progress:|GET:|POST:/.test(value)),false);
});

test('Escape closes the dialog, restores its launcher and cleans the page scroll state',()=>{
  const h=harness();h.launch();assert.equal(h.Tutorial.isOpen(),true);assert.equal(h.context.document.activeElement.id,'tutorialStepTitle');h.cancel();assert.equal(h.Tutorial.isOpen(),false);assert.equal(h.dialog.open,false);assert.equal(h.context.document.activeElement,h.launcher);assert.equal([...h.classes].some(value=>value.includes('tutorial')),false);
});

test('opening the guide stops speech, microphone and autoplay without saving learning activity',()=>{
  const h=harness();h.Tutorial.open();assert.ok(h.calls.includes('speech:stop'));assert.ok(h.calls.includes('microphone:stop'));assert.ok(h.calls.includes('vocab:stop'));assert.equal(h.calls.some(value=>/progress:|GET:|POST:|course:/.test(value)),false);
});

test('language changes rerender the selected step and keep the dialog labelled',()=>{
  for(const storageFails of [false,true]){const h=harness({storageFails});h.Tutorial.open();h.jump(1);h.language('th');assert.match(h.root.innerHTML,/th lesson 2/);assert.match(h.root.innerHTML,/วิธีใช้งาน/);assert.ok(h.root.innerHTML.includes('tutorialTitle'));assert.ok(h.root.innerHTML.includes('tutorialStepTitle'));assert.equal(h.dialog.getAttribute('lang'),'th');h.language('en');assert.match(h.root.innerHTML,/en lesson 2/);}
});

test('tutorial text is escaped before rendering',()=>{
  const h=harness({content:()=>({title:'<img src=x onerror=bad>',subtitle:'<script>bad</script>',steps:[{id:'safe',short:'<button>bad',title:'<svg onload=bad>',lead:'<iframe>bad',bullets:['<input autofocus>'],remember:'<img src=x>'}]})});h.Tutorial.open();assert.match(h.root.innerHTML,/&lt;img/);assert.ok(!h.root.innerHTML.includes('<img src=x'));assert.ok(!h.root.innerHTML.includes('<script>bad'));assert.ok(!h.root.innerHTML.includes('<svg onload'));
});

test('manual help works before sign-in and during required password change without unlocking anything',()=>{
  for(const user of [null,{...account(),must_change_password:true}]){const h=harness({user}),before=JSON.stringify(h.access);h.launch();assert.equal(h.Tutorial.isOpen(),true);h.click('finish');assert.equal(JSON.stringify(h.access),before);assert.equal(h.calls.some(value=>/GET:|POST:|course:|progress:/.test(value)),false);}
});

test('reading required-password help does not consume the full app tutorial on first sign-in',()=>{
  for(const storageFails of [false,true]){const h=harness({user:{...account(),must_change_password:true},storageFails});h.Tutorial.open();h.Tutorial.close();assert.equal(h.storageWrites.length,0);h.user(account());h.Tutorial.maybeOpen();assert.equal(h.Tutorial.isOpen(),true);assert.match(h.root.innerHTML,/en lesson 1/);}
});

test('fallback dialog traps focus and restores pre-existing background accessibility state',()=>{
  const h=harness({native:false});h.shell.setAttribute('aria-hidden','false');h.launch();assert.equal(h.dialog.getAttribute('role'),'dialog');assert.equal(h.dialog.getAttribute('aria-modal'),'true');assert.equal(h.shell.inert,true);assert.equal(h.shell.getAttribute('aria-hidden'),'true');
  const buttons=h.dialog.querySelectorAll('button,a[href]');buttons.at(-1).focus();h.key('Tab');assert.equal(h.context.document.activeElement,buttons[0]);h.key('Tab',{shiftKey:true});assert.equal(h.context.document.activeElement,buttons.at(-1));
  h.launcher.focus();h.emitDocument('focusin',{target:h.launcher});assert.equal(h.context.document.activeElement.id,'tutorialStepTitle');h.key('Escape');assert.equal(h.Tutorial.isOpen(),false);assert.equal(h.shell.inert,false);assert.equal(h.shell.hasAttribute('inert'),false);assert.equal(h.shell.getAttribute('aria-hidden'),'false');assert.equal(h.context.document.activeElement,h.launcher);assert.equal(h.body.children.length,3);
});

test('tutorial keyboard navigation cannot change the hidden daily lesson',()=>{
  const h=harness(),background=[];h.context.document.addEventListener('keydown',event=>background.push(event.key));h.Tutorial.open();h.key('ArrowRight');assert.equal(background.length,0);
  let topic=h.root.querySelector('[data-tutorial-step="0"]');h.key('End',{target:topic});assert.match(h.root.innerHTML,/en lesson 3/);topic=h.root.querySelector('[data-tutorial-step="2"]');h.key('ArrowLeft',{target:topic});assert.match(h.root.innerHTML,/en lesson 2/);topic=h.root.querySelector('[data-tutorial-step="1"]');h.key('Home',{target:topic});assert.match(h.root.innerHTML,/en lesson 1/);assert.equal(background.length,0);
  h.Tutorial.close();h.key('ArrowRight');assert.deepEqual(background,['ArrowRight']);
});

test('native close cleanup and a queued old close event cannot erase a newly reopened guide',()=>{
  const h=harness();h.Tutorial.open();h.dialog.close();assert.equal(h.Tutorial.isOpen(),false);assert.equal(h.root.innerHTML,'');assert.equal(h.classes.has('tutorial-open'),false);h.Tutorial.open();h.emitDialog('close');assert.equal(h.Tutorial.isOpen(),true);assert.match(h.root.innerHTML,/en lesson 1/);h.Tutorial.close({restoreFocus:false});assert.equal(h.root.innerHTML,'');
});

test('only an anonymous version flag is persisted by the guide',()=>{
  const h=harness({user:account()});h.Tutorial.open();h.click('next');h.Tutorial.close();assert.deepEqual(h.storageWrites,[{key:'nimmanspa_tutorial_seen_v1',value:'1'}]);
});

function realContent(){const context=vm.createContext({});vm.runInContext(source('tutorial-content.js')+'\nglobalThis.TutorialContent=TutorialContent;',context);return context.TutorialContent;}

test('English and Thai guides cover every learner tool and keep guest/account rules accurate',()=>{
  const content=realContent(),ids=['access','navigation','learning','words','phrases','practice','speaking','settings','help'];
  for(const user of [guest(),account()])for(const lang of ['en','th']){const guide=content.get(user,lang);assert.deepEqual(Array.from(guide.steps,step=>step.id),ids);for(const step of guide.steps){for(const field of ['short','title','lead','remember'])assert.ok(typeof step[field]==='string'&&step[field].trim(),`${lang} ${step.id} ${field}`);assert.ok(step.bullets.length>=2);if(lang==='th')assert.match(step.title,/[\u0e00-\u0e7f]/);}}
  const guestGuide=content.get(guest(),'en'),all=JSON.stringify(guestGuide);assert.match(guestGuide.steps[0].lead,/all courses and practice.*without.*countdown or time limit/i);assert.match(all,/refreshing.*closing the page or signing out clears/i);assert.match(all,/does not transfer into an account/i);assert.match(all,/30 consecutive days.*first time you start that course/i);assert.match(all,/registration alone starts no clock/i);assert.match(all,/Spa, Cruise or Salon/i);assert.match(all,/not a course pass, CEFR result or certificate/i);assert.match(all,/not a precise pronunciation or fluency grade/i);assert.match(all,/cannot be undone.*does not restart or extend/i);assert.match(all,/tutorial is available to guests/i);
});

test('administrator and password-recovery guides describe their actual account permissions',()=>{
  const content=realContent();for(const lang of ['en','th']){const guide=content.get(admin(),lang);assert.equal(guide.steps.length,4);assert.ok(guide.steps.every(step=>step.id.startsWith('admin-')));const reset=content.get({...account(),must_change_password:true},lang);assert.deepEqual(Array.from(reset.steps,step=>step.id),['password-change','password-help']);}
  const text=JSON.stringify(content.get(admin(),'en'));assert.match(text,/Guest activity is not saved/i);assert.match(text,/occupation does not grant administrator permissions/i);assert.match(text,/must change the new temporary password/i);assert.match(text,/does not extend the 30-day learning window/i);assert.ok(!text.includes('admin@example.test'));
});

test('rendering and reopening always use the current account role and a valid step',()=>{
  const content=realContent(),h=harness({content:content.get});h.Tutorial.open();h.jump(8);h.user(admin());h.Tutorial.render();assert.match(h.root.innerHTML,/Your administration guide/);assert.match(h.root.innerHTML,/Keep account access private/);assert.ok(!h.root.innerHTML.includes('Daily &amp; Words'));h.Tutorial.close({restoreFocus:false});assert.equal(h.root.innerHTML,'');h.user(guest());h.Tutorial.open();assert.match(h.root.innerHTML,/Explore freely as a guest/);assert.ok(!h.root.innerHTML.includes('Your administration guide'));
});

test('the page loads the tutorial and provides replay controls beyond the learning screens',()=>{
  const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8'),sidebar=source('sidebar.js');
  for(const file of ['tutorial.css','js/tutorial-content.js','js/tutorial.js'])assert.ok(html.includes(file),`${file} must load`);
  assert.ok(html.indexOf('src="js/tutorial-content.js')<html.indexOf('src="js/tutorial.js'));assert.ok(html.indexOf('src="js/tutorial.js')<html.indexOf('src="js/app.js'));
  assert.match(html,/<dialog\b[^>]*id="tutorialDialog"[^>]*aria-labelledby="tutorialTitle"/);assert.match(html,/id="tutorialRoot"/);
  const stack=[],voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']),triggers=[];let modalAncestors;
  for(const match of html.matchAll(/<\/?([a-z][\w-]*)\b([^>]*)>/gi)){const tag=match[1].toLowerCase(),attrs=match[2],closing=match[0].startsWith('</');if(closing){const at=stack.map(item=>item.tag).lastIndexOf(tag);if(at>=0)stack.splice(at);continue;}const id=attrs.match(/\bid="([^"]+)"/)?.[1];if(id==='tutorialDialog')modalAncestors=stack.map(item=>item.id);if(/\bdata-tutorial-open\b/.test(attrs))triggers.push([...stack.map(item=>item.id),id]);if(!voids.has(tag)&&!match[0].endsWith('/>'))stack.push({tag,id});}
  assert.ok(modalAncestors);assert.ok(!modalAncestors.includes('appShell'),'dialog must be outside hidden app shell');
  for(const id of ['authWrap','courseWrap','appShell','screen-account'])assert.ok(triggers.some(ancestors=>ancestors.includes(id)),`help trigger missing from ${id}`);
  assert.match(sidebar,/data-tutorial-open/);
});
