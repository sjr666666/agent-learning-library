(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ro(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const De={},jt=[],Yn=()=>{},Di=()=>!1,ps=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fs=e=>e.startsWith("onUpdate:"),rn=Object.assign,Po=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Zl=Object.prototype.hasOwnProperty,ke=(e,n)=>Zl.call(e,n),se=Array.isArray,Ht=e=>Lr(e)==="[object Map]",Si=e=>Lr(e)==="[object Set]",fa=e=>Lr(e)==="[object Date]",ae=e=>typeof e=="function",Be=e=>typeof e=="string",Xn=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",Ti=e=>(Ae(e)||ae(e))&&ae(e.then)&&ae(e.catch),Ri=Object.prototype.toString,Lr=e=>Ri.call(e),ec=e=>Lr(e).slice(8,-1),Pi=e=>Lr(e)==="[object Object]",Lo=e=>Be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cr=Ro(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ms=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},nc=/-\w/g,mn=ms(e=>e.replace(nc,n=>n.slice(1).toUpperCase())),tc=/\B([A-Z])/g,Nt=ms(e=>e.replace(tc,"-$1").toLowerCase()),gs=ms(e=>e.charAt(0).toUpperCase()+e.slice(1)),js=ms(e=>e?`on${gs(e)}`:""),$n=(e,n)=>!Object.is(e,n),Hs=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Li=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},rc=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let ma;const hs=()=>ma||(ma=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function er(e){if(se(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],s=Be(r)?ic(r):er(r);if(s)for(const o in s)n[o]=s[o]}return n}else if(Be(e)||Ae(e))return e}const sc=/;(?![^(]*\))/g,oc=/:([^]+)/,ac=/\/\*[^]*?\*\//g;function ic(e){const n={};return e.replace(ac,"").split(sc).forEach(t=>{if(t){const r=t.split(oc);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function Kn(e){let n="";if(Be(e))n=e;else if(se(e))for(let t=0;t<e.length;t++){const r=Kn(e[t]);r&&(n+=r+" ")}else if(Ae(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const uc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lc=Ro(uc);function Ii(e){return!!e||e===""}function cc(e,n){if(e.length!==n.length)return!1;let t=!0;for(let r=0;t&&r<e.length;r++)t=Io(e[r],n[r]);return t}function Io(e,n){if(e===n)return!0;let t=fa(e),r=fa(n);if(t||r)return t&&r?e.getTime()===n.getTime():!1;if(t=Xn(e),r=Xn(n),t||r)return e===n;if(t=se(e),r=se(n),t||r)return t&&r?cc(e,n):!1;if(t=Ae(e),r=Ae(n),t||r){if(!t||!r)return!1;const s=Object.keys(e).length,o=Object.keys(n).length;if(s!==o)return!1;for(const a in e){const i=e.hasOwnProperty(a),u=n.hasOwnProperty(a);if(i&&!u||!i&&u||!Io(e[a],n[a]))return!1}}return String(e)===String(n)}const Mi=e=>!!(e&&e.__v_isRef===!0),Z=e=>Be(e)?e:e==null?"":se(e)||Ae(e)&&(e.toString===Ri||!ae(e.toString))?Mi(e)?Z(e.value):JSON.stringify(e,Oi,2):String(e),Oi=(e,n)=>Mi(n)?Oi(e,n.value):Ht(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,s],o)=>(t[Us(r,o)+" =>"]=s,t),{})}:Si(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Us(t))}:Xn(n)?Us(n):Ae(n)&&!se(n)&&!Pi(n)?String(n):n,Us=(e,n="")=>{var t;return Xn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class dc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&tn&&(tn.active?(this.parent=tn,this.index=(tn.scopes||(tn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const s=this.scopes.slice();for(n=0,t=s.length;n<t;n++)s[n].resume()}const r=this.effects.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}}run(n){if(this._active){const t=tn;try{return tn=this,n()}finally{tn=t}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){if(this._on>0&&--this._on===0){if(tn===this)tn=this.prevScope;else{let n=tn;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,r=s.length;t<r;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pc(){return tn}let Re;const Gs=new WeakSet;class Ni{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&(tn.active?tn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gs.has(this)&&(Gs.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ga(this),Wi(this);const n=Re,t=Ln;Re=this,Ln=!0;try{return this.fn()}finally{zi(this),Re=n,Ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)No(n);this.deps=this.depsTail=void 0,ga(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gs.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){mo(this)&&this.run()}get dirty(){return mo(this)}}let Fi=0,dr,pr;function Bi(e,n=!1){if(e.flags|=8,n){e.next=pr,pr=e;return}e.next=dr,dr=e}function Mo(){Fi++}function Oo(){if(--Fi>0)return;if(pr){let n=pr;for(pr=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;dr;){let n=dr;for(dr=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function Wi(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function zi(e){let n,t=e.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),No(r),fc(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=n,e.depsTail=t}function mo(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(qi(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function qi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===br)||(e.globalVersion=br,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!mo(e))))return;e.flags|=2;const n=e.dep,t=Re,r=Ln;Re=e,Ln=!0;try{Wi(e);const s=e.fn(e._value);(n.version===0||$n(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{Re=t,Ln=r,zi(e),e.flags&=-3}}function No(e,n=!1){const{dep:t,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)No(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function fc(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let Ln=!0;const ji=[];function lt(){ji.push(Ln),Ln=!1}function ct(){const e=ji.pop();Ln=e===void 0?!0:e}function ga(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=Re;Re=void 0;try{n()}finally{Re=t}}}let br=0;class mc{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fo{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!Re||!Ln||Re===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Re)t=this.activeLink=new mc(Re,this),Re.deps?(t.prevDep=Re.depsTail,Re.depsTail.nextDep=t,Re.depsTail=t):Re.deps=Re.depsTail=t,Hi(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Re.depsTail,t.nextDep=void 0,Re.depsTail.nextDep=t,Re.depsTail=t,Re.deps===t&&(Re.deps=r)}return t}trigger(n){this.version++,br++,this.notify(n)}notify(n){Mo();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Oo()}}}function Hi(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Hi(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const go=new WeakMap,Pt=Symbol(""),ho=Symbol(""),kr=Symbol("");function an(e,n,t){if(Ln&&Re){let r=go.get(e);r||go.set(e,r=new Map);let s=r.get(t);s||(r.set(t,s=new Fo),s.map=r,s.key=t),s.track()}}function at(e,n,t,r,s,o){const a=go.get(e);if(!a){br++;return}const i=u=>{u&&u.trigger()};if(Mo(),n==="clear")a.forEach(i);else{const u=se(e),l=u&&Lo(t);if(u&&t==="length"){const c=Number(r);a.forEach((d,p)=>{(p==="length"||p===kr||!Xn(p)&&p>=c)&&i(d)})}else switch((t!==void 0||a.has(void 0))&&i(a.get(t)),l&&i(a.get(kr)),n){case"add":u?l&&i(a.get("length")):(i(a.get(Pt)),Ht(e)&&i(a.get(ho)));break;case"delete":u||(i(a.get(Pt)),Ht(e)&&i(a.get(ho)));break;case"set":Ht(e)&&i(a.get(Pt));break}}Oo()}function Wt(e){const n=be(e);return n===e?n:(an(n,"iterate",kr),Cn(e)?n:n.map(Mn))}function _s(e){return an(e=be(e),"iterate",kr),e}function Un(e,n){return dt(e)?Vt(Lt(e)?Mn(n):n):Mn(n)}const gc={__proto__:null,[Symbol.iterator](){return $s(this,Symbol.iterator,e=>Un(this,e))},concat(...e){return Wt(this).concat(...e.map(n=>se(n)?Wt(n):n))},entries(){return $s(this,"entries",e=>(e[1]=Un(this,e[1]),e))},every(e,n){return tt(this,"every",e,n,void 0,arguments)},filter(e,n){return tt(this,"filter",e,n,t=>t.map(r=>Un(this,r)),arguments)},find(e,n){return tt(this,"find",e,n,t=>Un(this,t),arguments)},findIndex(e,n){return tt(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return tt(this,"findLast",e,n,t=>Un(this,t),arguments)},findLastIndex(e,n){return tt(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return tt(this,"forEach",e,n,void 0,arguments)},includes(...e){return Ks(this,"includes",e)},indexOf(...e){return Ks(this,"indexOf",e)},join(e){return Wt(this).join(e)},lastIndexOf(...e){return Ks(this,"lastIndexOf",e)},map(e,n){return tt(this,"map",e,n,void 0,arguments)},pop(){return sr(this,"pop")},push(...e){return sr(this,"push",e)},reduce(e,...n){return ha(this,"reduce",e,n)},reduceRight(e,...n){return ha(this,"reduceRight",e,n)},shift(){return sr(this,"shift")},some(e,n){return tt(this,"some",e,n,void 0,arguments)},splice(...e){return sr(this,"splice",e)},toReversed(){return Wt(this).toReversed()},toSorted(e){return Wt(this).toSorted(e)},toSpliced(...e){return Wt(this).toSpliced(...e)},unshift(...e){return sr(this,"unshift",e)},values(){return $s(this,"values",e=>Un(this,e))}};function $s(e,n,t){const r=_s(e),s=r[n]();return r!==e&&!Cn(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=t(o.value)),o}),s}const hc=Array.prototype;function tt(e,n,t,r,s,o){const a=_s(e),i=a!==e&&!Cn(e),u=a[n];if(u!==hc[n]){const d=u.apply(e,o);return i?Mn(d):d}let l=t;a!==e&&(i?l=function(d,p){return t.call(this,Un(e,d),p,e)}:t.length>2&&(l=function(d,p){return t.call(this,d,p,e)}));const c=u.call(a,l,r);return i&&s?s(c):c}function ha(e,n,t,r){const s=_s(e),o=s!==e&&!Cn(e);let a=t,i=!1;s!==e&&(o?(i=r.length===0,a=function(l,c,d){return i&&(i=!1,l=Un(e,l)),t.call(this,l,Un(e,c),d,e)}):t.length>3&&(a=function(l,c,d){return t.call(this,l,c,d,e)}));const u=s[n](a,...r);return i?Un(e,u):u}function Ks(e,n,t){const r=be(e);an(r,"iterate",kr);const s=r[n](...t);return(s===-1||s===!1)&&zo(t[0])?(t[0]=be(t[0]),r[n](...t)):s}function sr(e,n,t=[]){lt(),Mo();const r=be(e)[n].apply(e,t);return Oo(),ct(),r}const _c=Ro("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xn));function yc(e){Xn(e)||(e=String(e));const n=be(this);return an(n,"has",e),n.hasOwnProperty(e)}class Gi{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(s?o?Sc:Qi:o?Vi:Ki).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const a=se(n);if(!s){let u;if(a&&(u=gc[t]))return u;if(t==="hasOwnProperty")return yc}const i=Reflect.get(n,t,ln(n)?n:r);if((Xn(t)?Ui.has(t):_c(t))||(s||an(n,"get",t),o))return i;if(ln(i)){const u=a&&Lo(t)?i:i.value;return s&&Ae(u)?yo(u):u}return Ae(i)?s?yo(i):ys(i):i}}class $i extends Gi{constructor(n=!1){super(!1,n)}set(n,t,r,s){let o=n[t];const a=se(n)&&Lo(t);if(!this._isShallow){const l=dt(o);if(!Cn(r)&&!dt(r)&&(o=be(o),r=be(r)),!a&&ln(o)&&!ln(r))return l||(o.value=r),!0}const i=a?Number(t)<n.length:ke(n,t),u=Reflect.set(n,t,r,ln(n)?n:s);return n===be(s)&&u&&(i?$n(r,o)&&at(n,"set",t,r):at(n,"add",t,r)),u}deleteProperty(n,t){const r=ke(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&r&&at(n,"delete",t,void 0),s}has(n,t){const r=Reflect.has(n,t);return(!Xn(t)||!Ui.has(t))&&an(n,"has",t),r}ownKeys(n){return an(n,"iterate",se(n)?"length":Pt),Reflect.ownKeys(n)}}class bc extends Gi{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const kc=new $i,xc=new bc,Ac=new $i(!0);const _o=e=>e,Gr=e=>Reflect.getPrototypeOf(e);function vc(e,n,t){return function(...r){const s=this.__v_raw,o=be(s),a=Ht(o),i=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,l=s[e](...r),c=t?_o:n?Vt:Mn;return!n&&an(o,"iterate",u?ho:Pt),rn(Object.create(l),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:i?[c(d[0]),c(d[1])]:c(d),done:p}}})}}function $r(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function wc(e,n){const t={get(s){const o=this.__v_raw,a=be(o),i=be(s);e||($n(s,i)&&an(a,"get",s),an(a,"get",i));const{has:u}=Gr(a),l=n?_o:e?Vt:Mn;if(u.call(a,s))return l(o.get(s));if(u.call(a,i))return l(o.get(i));o!==a&&o.get(s)},get size(){const s=this.__v_raw;return!e&&an(be(s),"iterate",Pt),s.size},has(s){const o=this.__v_raw,a=be(o),i=be(s);return e||($n(s,i)&&an(a,"has",s),an(a,"has",i)),s===i?o.has(s):o.has(s)||o.has(i)},forEach(s,o){const a=this,i=a.__v_raw,u=be(i),l=n?_o:e?Vt:Mn;return!e&&an(u,"iterate",Pt),i.forEach((c,d)=>s.call(o,l(c),l(d),a))}};return rn(t,e?{add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear")}:{add(s){const o=be(this),a=Gr(o),i=be(s),u=!n&&!Cn(s)&&!dt(s)?i:s;return a.has.call(o,u)||$n(s,u)&&a.has.call(o,s)||$n(i,u)&&a.has.call(o,i)||(o.add(u),at(o,"add",u,u)),this},set(s,o){!n&&!Cn(o)&&!dt(o)&&(o=be(o));const a=be(this),{has:i,get:u}=Gr(a);let l=i.call(a,s);l||(s=be(s),l=i.call(a,s));const c=u.call(a,s);return a.set(s,o),l?$n(o,c)&&at(a,"set",s,o):at(a,"add",s,o),this},delete(s){const o=be(this),{has:a,get:i}=Gr(o);let u=a.call(o,s);u||(s=be(s),u=a.call(o,s)),i&&i.call(o,s);const l=o.delete(s);return u&&at(o,"delete",s,void 0),l},clear(){const s=be(this),o=s.size!==0,a=s.clear();return o&&at(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=vc(s,e,n)}),t}function Bo(e,n){const t=wc(e,n);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(ke(t,s)&&s in r?t:r,s,o)}const Ec={get:Bo(!1,!1)},Cc={get:Bo(!1,!0)},Dc={get:Bo(!0,!1)};const Ki=new WeakMap,Vi=new WeakMap,Qi=new WeakMap,Sc=new WeakMap;function Tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ys(e){return dt(e)?e:Wo(e,!1,kc,Ec,Ki)}function Ji(e){return Wo(e,!1,Ac,Cc,Vi)}function yo(e){return Wo(e,!0,xc,Dc,Qi)}function Wo(e,n,t,r,s){if(!Ae(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=s.get(e);if(o)return o;const a=Tc(ec(e));if(a===0)return e;const i=new Proxy(e,a===2?r:t);return s.set(e,i),i}function Lt(e){return dt(e)?Lt(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function Cn(e){return!!(e&&e.__v_isShallow)}function zo(e){return e?!!e.__v_raw:!1}function be(e){const n=e&&e.__v_raw;return n?be(n):e}function Rc(e){return!ke(e,"__v_skip")&&Object.isExtensible(e)&&Li(e,"__v_skip",!0),e}const Mn=e=>Ae(e)?ys(e):e,Vt=e=>Ae(e)?yo(e):e;function ln(e){return e?e.__v_isRef===!0:!1}function Rn(e){return Yi(e,!1)}function Pc(e){return Yi(e,!0)}function Yi(e,n){return ln(e)?e:new Lc(e,n)}class Lc{constructor(n,t){this.dep=new Fo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:be(n),this._value=t?n:Mn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Cn(n)||dt(n);n=r?n:be(n),$n(n,t)&&(this._rawValue=n,this._value=r?n:Mn(n),this.dep.trigger())}}function Dn(e){return ln(e)?e.value:e}const Ic={get:(e,n,t)=>n==="__v_raw"?e:Dn(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const s=e[n];return ln(s)&&!ln(t)?(s.value=t,!0):Reflect.set(e,n,t,r)}};function Xi(e){return Lt(e)?e:new Proxy(e,Ic)}class Mc{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Fo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return Bi(this,!0),!0}get value(){const n=this.dep.track();return qi(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function Oc(e,n,t=!1){let r,s;return ae(e)?r=e:(r=e.get,s=e.set),new Mc(r,s,t)}const Kr={},Xr=new WeakMap;let Tt;function Nc(e,n=!1,t=Tt){if(t){let r=Xr.get(t);r||Xr.set(t,r=[]),r.push(e)}}function Fc(e,n,t=De){const{immediate:r,deep:s,once:o,scheduler:a,augmentJob:i,call:u}=t,l=C=>s?C:Cn(C)||s===!1||s===0?it(C,1):it(C);let c,d,p,f,g=!1,v=!1;if(ln(e)?(d=()=>e.value,g=Cn(e)):Lt(e)?(d=()=>l(e),g=!0):se(e)?(v=!0,g=e.some(C=>Lt(C)||Cn(C)),d=()=>e.map(C=>{if(ln(C))return C.value;if(Lt(C))return l(C);if(ae(C))return u?u(C,2):C()})):ae(e)?n?d=u?()=>u(e,2):e:d=()=>{if(p){lt();try{p()}finally{ct()}}const C=Tt;Tt=c;try{return u?u(e,3,[f]):e(f)}finally{Tt=C}}:d=Yn,n&&s){const C=d,O=s===!0?1/0:s;d=()=>it(C(),O)}const P=pc(),M=()=>{c.stop(),P&&P.active&&Po(P.effects,c)};if(o&&n){const C=n;n=(...O)=>{const N=C(...O);return M(),N}}let A=v?new Array(e.length).fill(Kr):Kr;const w=C=>{if(!(!(c.flags&1)||!c.dirty&&!C))if(n){const O=c.run();if(C||s||g||(v?O.some((N,$)=>$n(N,A[$])):$n(O,A))){p&&p();const N=Tt;Tt=c;try{const $=[O,A===Kr?void 0:v&&A[0]===Kr?[]:A,f];A=O,u?u(n,3,$):n(...$)}finally{Tt=N}}}else c.run()};return i&&i(w),c=new Ni(d),c.scheduler=a?()=>a(w,!1):w,f=C=>Nc(C,!1,c),p=c.onStop=()=>{const C=Xr.get(c);if(C){if(u)u(C,4);else for(const O of C)O();Xr.delete(c)}},n?r?w(!0):A=c.run():a?a(w.bind(null,!0),!0):c.run(),M.pause=c.pause.bind(c),M.resume=c.resume.bind(c),M.stop=M,M}function it(e,n=1/0,t){if(n<=0||!Ae(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,ln(e))it(e.value,n,t);else if(se(e))for(let r=0;r<e.length;r++)it(e[r],n,t);else if(Si(e)||Ht(e))e.forEach(r=>{it(r,n,t)});else if(Pi(e)){for(const r in e)it(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&it(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ir(e,n,t,r){try{return r?e(...r):e()}catch(s){bs(s,n,t)}}function On(e,n,t,r){if(ae(e)){const s=Ir(e,n,t,r);return s&&Ti(s)&&s.catch(o=>{bs(o,n,t)}),s}if(se(e)){const s=[];for(let o=0;o<e.length;o++)s.push(On(e[o],n,t,r));return s}}function bs(e,n,t,r=!0){const s=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=n&&n.appContext.config||De;if(n){let i=n.parent;const u=n.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,u,l)===!1)return}i=i.parent}if(o){lt(),Ir(o,null,10,[e,u,l]),ct();return}}Bc(e,t,s,r,a)}function Bc(e,n,t,r=!0,s=!1){if(s)throw e;console.error(e)}const fn=[];let Hn=-1;const Ut=[];let yt=null,zt=0;const Zi=Promise.resolve();let Zr=null;function xr(e){const n=Zr||Zi;return e?n.then(this?e.bind(this):e):n}function Wc(e){let n=Hn+1,t=fn.length;for(;n<t;){const r=n+t>>>1,s=fn[r],o=Ar(s);o<e||o===e&&s.flags&2?n=r+1:t=r}return n}function qo(e){if(!(e.flags&1)){const n=Ar(e),t=fn[fn.length-1];!t||!(e.flags&2)&&n>=Ar(t)?fn.push(e):fn.splice(Wc(n),0,e),e.flags|=1,eu()}}function eu(){Zr||(Zr=Zi.then(tu))}function zc(e){if(!se(e))yt&&e.id===-1?yt.splice(zt+1,0,e):e.flags&1||(Ut.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)Ut.push(e[n]);eu()}function _a(e,n,t=Hn+1){for(;t<fn.length;t++){const r=fn[t];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;fn.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function nu(e){if(Ut.length){const n=[...new Set(Ut)].sort((t,r)=>Ar(t)-Ar(r));if(Ut.length=0,yt){for(let t=0;t<n.length;t++)yt.push(n[t]);return}for(yt=n,zt=0;zt<yt.length;zt++){const t=yt[zt];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}yt=null,zt=0}}const Ar=e=>e.id==null?e.flags&2?-1:1/0:e.id;function tu(e){try{for(Hn=0;Hn<fn.length;Hn++){const n=fn[Hn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ir(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Hn<fn.length;Hn++){const n=fn[Hn];n&&(n.flags&=-2)}Hn=-1,fn.length=0,nu(),Zr=null,(fn.length||Ut.length)&&tu()}}let yn=null,ru=null;function es(e){const n=yn;return yn=e,ru=e&&e.type.__scopeId||null,n}function Xe(e,n=yn,t){if(!n||e._n)return e;const r=(...s)=>{r._d&&rs(-1);const o=es(n),a=It.length;let i;try{i=e(...s)}finally{for(let u=It.length;u>a;u--)Du();es(o),r._d&&rs(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function qc(e,n){if(yn===null)return e;const t=ws(yn),r=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[o,a,i,u=De]=n[s];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&it(a),r.push({dir:o,instance:t,value:a,oldValue:void 0,arg:i,modifiers:u}))}return e}function Ct(e,n,t,r){const s=e.dirs,o=n&&n.dirs;for(let a=0;a<s.length;a++){const i=s[a];o&&(i.oldValue=o[a].value);let u=i.dir[r];u&&(lt(),On(u,t,8,[e.el,i,e,n]),ct())}}function Jr(e,n){if(un){let t=un.provides;const r=un.parent&&un.parent.provides;r===t&&(t=un.provides=Object.create(r)),t[e]=n}}function In(e,n,t=!1){const r=Wd();if(r||$t){let s=$t?$t._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&ae(n)?n.call(r&&r.proxy):n}}const jc=Symbol.for("v-scx"),Hc=()=>In(jc);function Pn(e,n,t){return su(e,n,t)}function su(e,n,t=De){const{immediate:r,deep:s,flush:o,once:a}=t,i=rn({},t),u=n&&r||!n&&o!=="post";let l;if(Er){if(o==="sync"){const f=Hc();l=f.__watcherHandles||(f.__watcherHandles=[])}else if(!u){const f=()=>{};return f.stop=Yn,f.resume=Yn,f.pause=Yn,f}}const c=un;i.call=(f,g,v)=>On(f,c,g,v);let d=!1;o==="post"?i.scheduler=f=>{gn(f,c&&c.suspense)}:o!=="sync"&&(d=!0,i.scheduler=(f,g)=>{g?f():qo(f)}),i.augmentJob=f=>{n&&(f.flags|=4),d&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const p=Fc(e,n,i);return Er&&(l?l.push(p):u&&p()),p}function Uc(e,n,t){const r=this.proxy,s=Be(e)?e.includes(".")?ou(r,e):()=>r[e]:e.bind(r,r);let o;ae(n)?o=n:(o=n.handler,t=n);const a=Mr(this),i=su(s,o.bind(r),t);return a(),i}function ou(e,n){const t=n.split(".");return()=>{let r=e;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const Gc=Symbol("_vte"),ks=e=>e.__isTeleport,Vs=Symbol("_leaveCb");function $c(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==ft){n=t;break}}return n}function au(e){if(!Ho(e))return ks(e.type)&&e.children?$c(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ae(t.default))return t.default()}}function jo(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;jo(ks(t.type)&&au(t)||t,n)}else e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function iu(e,n){return ae(e)?rn({name:e.name},n,{setup:e}):e}function uu(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ya(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const ns=new WeakMap;function fr(e,n,t,r,s=!1){if(se(e)){e.forEach((v,P)=>fr(v,n&&(se(n)?n[P]:n),t,r,s));return}if(mr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fr(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?ws(r.component):r.el,a=s?null:o,{i,r:u}=e,l=n&&n.r,c=i.refs===De?i.refs={}:i.refs,d=i.setupState,p=be(d),f=d===De?Di:v=>ya(c,v)?!1:ke(p,v),g=(v,P)=>!(P&&ya(c,P));if(l!=null&&l!==u){if(ba(n),Be(l))c[l]=null,f(l)&&(d[l]=null);else if(ln(l)){const v=n;g(l,v.k)&&(l.value=null),v.k&&(c[v.k]=null)}}if(ae(u))Ir(u,i,12,[a,c]);else{const v=Be(u),P=ln(u);if(v||P){const M=()=>{if(e.f){const A=v?f(u)?d[u]:c[u]:g()||!e.k?u.value:c[e.k];if(s)se(A)&&Po(A,o);else if(se(A))A.includes(o)||A.push(o);else if(v)c[u]=[o],f(u)&&(d[u]=c[u]);else{const w=[o];g(u,e.k)&&(u.value=w),e.k&&(c[e.k]=w)}}else v?(c[u]=a,f(u)&&(d[u]=a)):P&&(g(u,e.k)&&(u.value=a),e.k&&(c[e.k]=a))};if(a){const A=()=>{M(),ns.delete(e)};A.id=-1,ns.set(e,A),gn(A,t)}else ba(e),M()}}}function ba(e){const n=ns.get(e);n&&(n.flags|=8,ns.delete(e))}hs().requestIdleCallback;hs().cancelIdleCallback;const mr=e=>!!e.type.__asyncLoader,Ho=e=>e.type.__isKeepAlive;function Kc(e,n){lu(e,"a",n)}function Vc(e,n){lu(e,"da",n)}function lu(e,n,t=un){const r=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(xs(n,r,t),t){let s=t.parent;for(;s&&s.parent;)Ho(s.parent.vnode)&&Qc(r,n,t,s),s=s.parent}}function Qc(e,n,t,r){const s=xs(n,e,r,!0);Gt(()=>{Po(r[n],s)},t)}function xs(e,n,t=un,r=!1){if(t){const s=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...a)=>{lt();const i=Mr(t),u=On(n,t,e,a);return i(),ct(),u});return r?s.unshift(o):s.push(o),o}}const mt=e=>(n,t=un)=>{(!Er||e==="sp")&&xs(e,(...r)=>n(...r),t)},Jc=mt("bm"),gr=mt("m"),Yc=mt("bu"),Xc=mt("u"),Zc=mt("bum"),Gt=mt("um"),ed=mt("sp"),nd=mt("rtg"),td=mt("rtc");function rd(e,n=un){xs("ec",e,n)}const sd="components";function At(e,n){return ad(sd,e,!0,n)||e}const od=Symbol.for("v-ndc");function ad(e,n,t=!0,r=!1){const s=yn||un;if(s){const o=s.type;{const i=Ud(o,!1);if(i&&(i===n||i===mn(n)||i===gs(mn(n))))return o}const a=ka(s[e]||o[e],n)||ka(s.appContext[e],n);return!a&&r?o:a}}function ka(e,n){return e&&(e[n]||e[mn(n)]||e[gs(mn(n))])}function pt(e,n,t,r){let s;const o=t,a=se(e);if(a||Be(e)){const i=a&&Lt(e);let u=!1,l=!1;i&&(u=!Cn(e),l=dt(e),e=_s(e)),s=new Array(e.length);for(let c=0,d=e.length;c<d;c++)s[c]=n(u?l?Vt(Mn(e[c])):Mn(e[c]):e[c],c,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=n(i+1,i,void 0,o)}else if(Ae(e))if(e[Symbol.iterator])s=Array.from(e,(i,u)=>n(i,u,void 0,o));else{const i=Object.keys(e);s=new Array(i.length);for(let u=0,l=i.length;u<l;u++){const c=i[u];s[u]=n(e[c],c,u,o)}}else s=[];return s}const bo=e=>e?Ru(e)?ws(e):bo(e.parent):null,hr=rn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>bo(e.parent),$root:e=>bo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>du(e),$forceUpdate:e=>e.f||(e.f=()=>{qo(e.update)}),$nextTick:e=>e.n||(e.n=xr.bind(e.proxy)),$watch:e=>Uc.bind(e)}),Qs=(e,n)=>e!==De&&!e.__isScriptSetup&&ke(e,n),id={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:o,accessCache:a,type:i,appContext:u}=e;if(n[0]!=="$"){const p=a[n];if(p!==void 0)switch(p){case 1:return r[n];case 2:return s[n];case 4:return t[n];case 3:return o[n]}else{if(Qs(r,n))return a[n]=1,r[n];if(s!==De&&ke(s,n))return a[n]=2,s[n];if(ke(o,n))return a[n]=3,o[n];if(t!==De&&ke(t,n))return a[n]=4,t[n];ko&&(a[n]=0)}}const l=hr[n];let c,d;if(l)return n==="$attrs"&&an(e.attrs,"get",""),l(e);if((c=i.__cssModules)&&(c=c[n]))return c;if(t!==De&&ke(t,n))return a[n]=4,t[n];if(d=u.config.globalProperties,ke(d,n))return d[n]},set({_:e},n,t){const{data:r,setupState:s,ctx:o}=e;return Qs(s,n)?(s[n]=t,!0):r!==De&&ke(r,n)?(r[n]=t,!0):ke(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:s,props:o,type:a}},i){let u;return!!(t[i]||e!==De&&i[0]!=="$"&&ke(e,i)||Qs(n,i)||ke(o,i)||ke(r,i)||ke(hr,i)||ke(s.config.globalProperties,i)||(u=a.__cssModules)&&u[i])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:ke(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function xa(e){return se(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ko=!0;function ud(e){const n=du(e),t=e.proxy,r=e.ctx;ko=!1,n.beforeCreate&&Aa(n.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:i,provide:u,inject:l,created:c,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:v,deactivated:P,beforeDestroy:M,beforeUnmount:A,destroyed:w,unmounted:C,render:O,renderTracked:N,renderTriggered:$,errorCaptured:fe,serverPrefetch:we,expose:Ee,inheritAttrs:We,components:Qe,directives:Me,filters:Ue}=n;if(l&&ld(l,r,null),a)for(const pe in a){const K=a[pe];ae(K)&&(r[pe]=K.bind(t))}if(s){const pe=s.call(t,t);Ae(pe)&&(e.data=ys(pe))}if(ko=!0,o)for(const pe in o){const K=o[pe],ve=ae(K)?K.bind(t,t):ae(K.get)?K.get.bind(t,t):Yn,Le=!ae(K)&&ae(K.set)?K.set.bind(t):Yn,Ie=ue({get:ve,set:Le});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Ce=>Ie.value=Ce})}if(i)for(const pe in i)cu(i[pe],r,t,pe);if(u){const pe=ae(u)?u.call(t):u;Reflect.ownKeys(pe).forEach(K=>{Jr(K,pe[K])})}c&&Aa(c,e,"c");function ge(pe,K){se(K)?K.forEach(ve=>pe(ve.bind(t))):K&&pe(K.bind(t))}if(ge(Jc,d),ge(gr,p),ge(Yc,f),ge(Xc,g),ge(Kc,v),ge(Vc,P),ge(rd,fe),ge(td,N),ge(nd,$),ge(Zc,A),ge(Gt,C),ge(ed,we),se(Ee))if(Ee.length){const pe=e.exposed||(e.exposed={});Ee.forEach(K=>{Object.defineProperty(pe,K,{get:()=>t[K],set:ve=>t[K]=ve,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===Yn&&(e.render=O),We!=null&&(e.inheritAttrs=We),Qe&&(e.components=Qe),Me&&(e.directives=Me),we&&uu(e)}function ld(e,n,t=Yn){se(e)&&(e=xo(e));for(const r in e){const s=e[r];let o;Ae(s)?"default"in s?o=In(s.from||r,s.default,!0):o=In(s.from||r):o=In(s),ln(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):n[r]=o}}function Aa(e,n,t){On(se(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function cu(e,n,t,r){let s=r.includes(".")?ou(t,r):()=>t[r];if(Be(e)){const o=n[e];ae(o)&&Pn(s,o)}else if(ae(e))Pn(s,e.bind(t));else if(Ae(e))if(se(e))e.forEach(o=>cu(o,n,t,r));else{const o=ae(e.handler)?e.handler.bind(t):n[e.handler];ae(o)&&Pn(s,o,e)}}function du(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,i=o.get(n);let u;return i?u=i:!s.length&&!t&&!r?u=n:(u={},s.length&&s.forEach(l=>ts(u,l,a,!0)),ts(u,n,a)),Ae(n)&&o.set(n,u),u}function ts(e,n,t,r=!1){const{mixins:s,extends:o}=n;o&&ts(e,o,t,!0),s&&s.forEach(a=>ts(e,a,t,!0));for(const a in n)if(!(r&&a==="expose")){const i=cd[a]||t&&t[a];e[a]=i?i(e[a],n[a]):n[a]}return e}const cd={data:va,props:wa,emits:wa,methods:ur,computed:ur,beforeCreate:dn,created:dn,beforeMount:dn,mounted:dn,beforeUpdate:dn,updated:dn,beforeDestroy:dn,beforeUnmount:dn,destroyed:dn,unmounted:dn,activated:dn,deactivated:dn,errorCaptured:dn,serverPrefetch:dn,components:ur,directives:ur,watch:pd,provide:va,inject:dd};function va(e,n){return n?e?function(){return rn(ae(e)?e.call(this,this):e,ae(n)?n.call(this,this):n)}:n:e}function dd(e,n){return ur(xo(e),xo(n))}function xo(e){if(se(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function dn(e,n){return e?[...new Set([].concat(e,n))]:n}function ur(e,n){return e?rn(Object.create(null),e,n):n}function wa(e,n){return e?se(e)&&se(n)?[...new Set([...e,...n])]:rn(Object.create(null),xa(e),xa(n??{})):n}function pd(e,n){if(!e)return n;if(!n)return e;const t=rn(Object.create(null),e);for(const r in n)t[r]=dn(e[r],n[r]);return t}function pu(){return{app:null,config:{isNativeTag:Di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fd=0;function md(e,n){return function(r,s=null){ae(r)||(r=rn({},r)),s!=null&&!Ae(s)&&(s=null);const o=pu(),a=new WeakSet,i=[];let u=!1;const l=o.app={_uid:fd++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:$d,get config(){return o.config},set config(c){},use(c,...d){return a.has(c)||(c&&ae(c.install)?(a.add(c),c.install(l,...d)):ae(c)&&(a.add(c),c(l,...d))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,d){return d?(o.components[c]=d,l):o.components[c]},directive(c,d){return d?(o.directives[c]=d,l):o.directives[c]},mount(c,d,p){if(!u){const f=l._ceVNode||Oe(r,s);return f.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(f,c,p),u=!0,l._container=c,c.__vue_app__=l,ws(f.component)}},onUnmount(c){i.push(c)},unmount(){u&&(On(i,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return o.provides[c]=d,l},runWithContext(c){const d=$t;$t=l;try{return c()}finally{$t=d}}};return l}}let $t=null;const gd=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${mn(n)}Modifiers`]||e[`${Nt(n)}Modifiers`];function hd(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||De;let s=t;const o=n.startsWith("update:"),a=o&&gd(r,n.slice(7));a&&(a.trim&&(s=t.map(c=>Be(c)?c.trim():c)),a.number&&(s=t.map(rc)));let i,u=r[i=js(n)]||r[i=js(mn(n))];!u&&o&&(u=r[i=js(Nt(n))]),u&&On(u,e,6,s);const l=r[i+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,On(l,e,6,s)}}const _d=new WeakMap;function fu(e,n,t=!1){const r=t?_d:n.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let a={},i=!1;if(!ae(e)){const u=l=>{const c=fu(l,n,!0);c&&(i=!0,rn(a,c))};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!o&&!i?(Ae(e)&&r.set(e,null),null):(se(o)?o.forEach(u=>a[u]=null):rn(a,o),Ae(e)&&r.set(e,a),a)}function As(e,n){return!e||!ps(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),ke(e,n[0].toLowerCase()+n.slice(1))||ke(e,Nt(n))||ke(e,n))}function Ea(e){const{type:n,vnode:t,proxy:r,withProxy:s,propsOptions:[o],slots:a,attrs:i,emit:u,render:l,renderCache:c,props:d,data:p,setupState:f,ctx:g,inheritAttrs:v}=e,P=es(e);let M,A;try{if(t.shapeFlag&4){const C=s||r,O=C;M=Gn(l.call(O,C,c,d,f,p,g)),A=i}else{const C=n;M=Gn(C.length>1?C(d,{attrs:i,slots:a,emit:u}):C(d,null)),A=n.props?i:yd(i)}}catch(C){It.length=0,bs(C,e,1),M=Oe(ft)}let w=M;if(A&&v!==!1){const C=Object.keys(A),{shapeFlag:O}=w;C.length&&O&7&&(o&&C.some(fs)&&(A=bd(A,o)),w=Qt(w,A,!1,!0))}if(t.dirs&&(w=Qt(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition){const C=ks(w.type)&&au(w)||w;jo(C,t.transition)}return M=w,es(P),M}const yd=e=>{let n;for(const t in e)(t==="class"||t==="style"||ps(t))&&((n||(n={}))[t]=e[t]);return n},bd=(e,n)=>{const t={};for(const r in e)(!fs(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function kd(e,n,t){const{props:r,children:s,component:o}=e,{props:a,children:i,patchFlag:u}=n,l=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?Ca(r,a,l):!!a;if(u&8){const c=n.dynamicProps;for(let d=0;d<c.length;d++){const p=c[d];if(mu(a,r,p)&&!As(l,p))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:r===a?!1:r?a?Ca(r,a,l):!0:!!a;return!1}function Ca(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(mu(n,e,o)&&!As(t,o))return!0}return!1}function mu(e,n,t){const r=e[t],s=n[t];return t==="style"&&Ae(r)&&Ae(s)?!Io(r,s):r!==s}function xd({vnode:e,parent:n,suspense:t},r){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=n.vnode).el=r,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=r)}const gu={},hu=()=>Object.create(gu),_u=e=>Object.getPrototypeOf(e)===gu;function Ad(e,n,t,r=!1){const s={},o=hu();e.propsDefaults=Object.create(null),yu(e,n,s,o);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);t?e.props=r?s:Ji(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function vd(e,n,t,r){const{props:s,attrs:o,vnode:{patchFlag:a}}=e,i=be(s),[u]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let d=0;d<c.length;d++){let p=c[d];if(As(e.emitsOptions,p))continue;const f=n[p];if(u)if(ke(o,p))f!==o[p]&&(o[p]=f,l=!0);else{const g=mn(p);s[g]=Ao(u,i,g,f,e,!1)}else f!==o[p]&&(o[p]=f,l=!0)}}}else{yu(e,n,s,o)&&(l=!0);let c;for(const d in i)(!n||!ke(n,d)&&((c=Nt(d))===d||!ke(n,c)))&&(u?t&&(t[d]!==void 0||t[c]!==void 0)&&(s[d]=Ao(u,i,d,void 0,e,!0)):delete s[d]);if(o!==i)for(const d in o)(!n||!ke(n,d))&&(delete o[d],l=!0)}l&&at(e.attrs,"set","")}function yu(e,n,t,r){const[s,o]=e.propsOptions;let a=!1,i;if(n)for(let u in n){if(cr(u))continue;const l=n[u];let c;s&&ke(s,c=mn(u))?!o||!o.includes(c)?t[c]=l:(i||(i={}))[c]=l:As(e.emitsOptions,u)||(!(u in r)||l!==r[u])&&(r[u]=l,a=!0)}if(o){const u=be(t),l=i||De;for(let c=0;c<o.length;c++){const d=o[c];t[d]=Ao(s,u,d,l[d],e,!ke(l,d))}}return a}function Ao(e,n,t,r,s,o){const a=e[t];if(a!=null){const i=ke(a,"default");if(i&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&ae(u)){const{propsDefaults:l}=s;if(t in l)r=l[t];else{const c=Mr(s);r=l[t]=u.call(null,n),c()}}else r=u;s.ce&&s.ce._setProp(t,r)}a[0]&&(o&&!i?r=!1:a[1]&&(r===""||r===Nt(t))&&(r=!0))}return r}const wd=new WeakMap;function bu(e,n,t=!1){const r=t?wd:n.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},i=[];let u=!1;if(!ae(e)){const c=d=>{u=!0;const[p,f]=bu(d,n,!0);rn(a,p),f&&i.push(...f)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!u)return Ae(e)&&r.set(e,jt),jt;if(se(o))for(let c=0;c<o.length;c++){const d=mn(o[c]);Da(d)&&(a[d]=De)}else if(o)for(const c in o){const d=mn(c);if(Da(d)){const p=o[c],f=a[d]=se(p)||ae(p)?{type:p}:rn({},p),g=f.type;let v=!1,P=!0;if(se(g))for(let M=0;M<g.length;++M){const A=g[M],w=ae(A)&&A.name;if(w==="Boolean"){v=!0;break}else w==="String"&&(P=!1)}else v=ae(g)&&g.name==="Boolean";f[0]=v,f[1]=P,(v||ke(f,"default"))&&i.push(d)}}const l=[a,i];return Ae(e)&&r.set(e,l),l}function Da(e){return e[0]!=="$"&&!cr(e)}const Uo=e=>e==="_"||e==="_ctx"||e==="$stable",Go=e=>se(e)?e.map(Gn):[Gn(e)],Ed=(e,n,t)=>{if(n._n)return n;const r=Xe((...s)=>Go(n(...s)),t);return r._c=!1,r},ku=(e,n,t)=>{const r=e._ctx;for(const s in e){if(Uo(s))continue;const o=e[s];if(ae(o))n[s]=Ed(s,o,r);else if(o!=null){const a=Go(o);n[s]=()=>a}}},xu=(e,n)=>{const t=Go(n);e.slots.default=()=>t},Au=(e,n,t)=>{for(const r in n)(t||!Uo(r))&&(e[r]=n[r])},Cd=(e,n,t)=>{const r=e.slots=hu();if(e.vnode.shapeFlag&32){const s=n._;s?(Au(r,n,t),t&&Li(r,"_",s,!0)):ku(n,r)}else n&&xu(e,n)},Dd=(e,n,t)=>{const{vnode:r,slots:s}=e;let o=!0,a=De;if(r.shapeFlag&32){const i=n._;i?t&&i===1?o=!1:Au(s,n,t):(o=!n.$stable,ku(n,s)),a=n}else n&&(xu(e,n),a={default:1});if(o)for(const i in s)!Uo(i)&&a[i]==null&&delete s[i]},gn=Ld;function Sd(e){return Td(e)}function Td(e,n){const t=hs();t.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:a,createText:i,createComment:u,setText:l,setElementText:c,parentNode:d,nextSibling:p,setScopeId:f=Yn,insertStaticContent:g}=e,v=(m,h,x,_=null,b=null,k=null,E=void 0,R=null,I=!!h.dynamicChildren)=>{if(m===h)return;m&&!or(m,h)&&(_=T(m),Ce(m,b,k,!0),m=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:D,ref:Q,shapeFlag:W}=h;switch(D){case vs:P(m,h,x,_);break;case ft:M(m,h,x,_);break;case Ys:m==null&&A(h,x,_,E);break;case He:Qe(m,h,x,_,b,k,E,R,I);break;default:W&1?O(m,h,x,_,b,k,E,R,I):W&6?Me(m,h,x,_,b,k,E,R,I):(W&64||W&128)&&D.process(m,h,x,_,b,k,E,R,I,V)}Q!=null&&b?fr(Q,m&&m.ref,k,h||m,!h):Q==null&&m&&m.ref!=null&&fr(m.ref,null,k,m,!0)},P=(m,h,x,_)=>{if(m==null)r(h.el=i(h.children),x,_);else{const b=h.el=m.el;h.children!==m.children&&l(b,h.children)}},M=(m,h,x,_)=>{m==null?r(h.el=u(h.children||""),x,_):h.el=m.el},A=(m,h,x,_)=>{[m.el,m.anchor]=g(m.children,h,x,_,m.el,m.anchor)},w=({el:m,anchor:h},x,_)=>{let b;for(;m&&m!==h;)b=p(m),r(m,x,_),m=b;r(h,x,_)},C=({el:m,anchor:h})=>{let x;for(;m&&m!==h;)x=p(m),s(m),m=x;s(h)},O=(m,h,x,_,b,k,E,R,I)=>{if(h.type==="svg"?E="svg":h.type==="math"&&(E="mathml"),m==null)N(h,x,_,b,k,E,R,I);else{const D=m.el&&m.el._isVueCE?m.el:null;try{D&&D._beginPatch(),we(m,h,b,k,E,R,I)}finally{D&&D._endPatch()}}},N=(m,h,x,_,b,k,E,R)=>{let I,D;const{props:Q,shapeFlag:W,transition:U,dirs:ee}=m;if(I=m.el=a(m.type,k,Q&&Q.is,Q),W&8?c(I,m.children):W&16&&fe(m.children,I,null,_,b,Js(m,k),E,R),ee&&Ct(m,null,_,"created"),$(I,m,m.scopeId,E,_),Q){for(const he in Q)he!=="value"&&!cr(he)&&o(I,he,null,Q[he],k,_);"value"in Q&&o(I,"value",null,Q.value,k),(D=Q.onVnodeBeforeMount)&&qn(D,_,m)}ee&&Ct(m,null,_,"beforeMount");const re=Rd(b,U);re&&U.beforeEnter(I),r(I,h,x),((D=Q&&Q.onVnodeMounted)||re||ee)&&gn(()=>{try{D&&qn(D,_,m),re&&U.enter(I),ee&&Ct(m,null,_,"mounted")}finally{}},b)},$=(m,h,x,_,b)=>{if(x&&f(m,x),_)for(let k=0;k<_.length;k++)f(m,_[k]);if(b){let k=b.subTree;if(h===k||Cu(k.type)&&(k.ssContent===h||k.ssFallback===h)){const E=b.vnode;$(m,E,E.scopeId,E.slotScopeIds,b.parent)}}},fe=(m,h,x,_,b,k,E,R,I=0)=>{for(let D=I;D<m.length;D++){const Q=m[D]=R?ot(m[D]):Gn(m[D]);v(null,Q,h,x,_,b,k,E,R)}},we=(m,h,x,_,b,k,E)=>{const R=h.el=m.el;let{patchFlag:I,dynamicChildren:D,dirs:Q}=h;I|=m.patchFlag&16;const W=m.props||De,U=h.props||De;let ee;if(x&&Dt(x,!1),(ee=U.onVnodeBeforeUpdate)&&qn(ee,x,h,m),Q&&Ct(h,m,x,"beforeUpdate"),x&&Dt(x,!0),D&&(!m.dynamicChildren||m.dynamicChildren.length!==D.length)&&(I=0,E=!1,D=null),(W.innerHTML&&U.innerHTML==null||W.textContent&&U.textContent==null)&&c(R,""),D?Ee(m.dynamicChildren,D,R,x,_,Js(h,b),k):E||K(m,h,R,null,x,_,Js(h,b),k,!1),I>0){if(I&16)We(R,W,U,x,b);else if(I&2&&W.class!==U.class&&o(R,"class",null,U.class,b),I&4&&o(R,"style",W.style,U.style,b),I&8){const re=h.dynamicProps;for(let he=0;he<re.length;he++){const _e=re[he],Ne=W[_e],$e=U[_e];($e!==Ne||_e==="value")&&o(R,_e,Ne,$e,b,x)}}I&1&&m.children!==h.children&&c(R,h.children)}else!E&&D==null&&We(R,W,U,x,b);((ee=U.onVnodeUpdated)||Q)&&gn(()=>{ee&&qn(ee,x,h,m),Q&&Ct(h,m,x,"updated")},_)},Ee=(m,h,x,_,b,k,E)=>{for(let R=0;R<h.length;R++){const I=m[R],D=h[R],Q=I.el&&(I.type===He||!or(I,D)||I.shapeFlag&198)?d(I.el):x;v(I,D,Q,null,_,b,k,E,!0)}},We=(m,h,x,_,b)=>{if(h!==x){if(h!==De)for(const k in h)!cr(k)&&!(k in x)&&o(m,k,h[k],null,b,_);for(const k in x){if(cr(k))continue;const E=x[k],R=h[k];E!==R&&k!=="value"&&o(m,k,R,E,b,_)}"value"in x&&o(m,"value",h.value,x.value,b)}},Qe=(m,h,x,_,b,k,E,R,I)=>{const D=h.el=m?m.el:i(""),Q=h.anchor=m?m.anchor:i("");let{patchFlag:W,dynamicChildren:U,slotScopeIds:ee}=h;ee&&(R=R?R.concat(ee):ee),m==null?(r(D,x,_),r(Q,x,_),fe(h.children||[],x,Q,b,k,E,R,I)):W>0&&W&64&&U&&m.dynamicChildren&&m.dynamicChildren.length===U.length?(Ee(m.dynamicChildren,U,x,b,k,E,R),(h.key!=null||b&&h===b.subTree)&&vu(m,h,!0)):K(m,h,x,Q,b,k,E,R,I)},Me=(m,h,x,_,b,k,E,R,I)=>{h.slotScopeIds=R,m==null?h.shapeFlag&512?b.ctx.activate(h,x,_,E,I):Ue(h,x,_,b,k,E,I):ze(m,h,I)},Ue=(m,h,x,_,b,k,E)=>{const R=m.component=Bd(m,_,b);if(Ho(m)&&(R.ctx.renderer=V),zd(R,!1,E),R.asyncDep){if(b&&b.registerDep(R,ge,E),!m.el){const I=R.subTree=Oe(ft);M(null,I,h,x),m.placeholder=I.el}}else ge(R,m,h,x,b,k,E)},ze=(m,h,x)=>{const _=h.component=m.component;if(kd(m,h,x))if(_.asyncDep&&!_.asyncResolved){pe(_,h,x);return}else _.next=h,_.update();else h.el=m.el,_.vnode=h},ge=(m,h,x,_,b,k,E)=>{const R=()=>{if(m.isMounted){let{next:W,bu:U,u:ee,parent:re,vnode:he}=m;{const vn=wu(m);if(vn){W&&(W.el=he.el,pe(m,W,E)),vn.asyncDep.then(()=>{gn(()=>{m.isUnmounted||D()},b)});return}}let _e=W,Ne;Dt(m,!1),W?(W.el=he.el,pe(m,W,E)):W=he,U&&Hs(U),(Ne=W.props&&W.props.onVnodeBeforeUpdate)&&qn(Ne,re,W,he),Dt(m,!0);const $e=Ea(m),An=m.subTree;m.subTree=$e,v(An,$e,d(An.el),T(An),m,b,k),W.el=$e.el,_e===null&&xd(m,$e.el),ee&&gn(ee,b),(Ne=W.props&&W.props.onVnodeUpdated)&&gn(()=>qn(Ne,re,W,he),b)}else{let W;const{el:U,props:ee}=h,{bm:re,m:he,parent:_e,root:Ne,type:$e}=m,An=mr(h);Dt(m,!1),re&&Hs(re),!An&&(W=ee&&ee.onVnodeBeforeMount)&&qn(W,_e,h),Dt(m,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle($e,m.parent?m.parent.type:void 0);const vn=m.subTree=Ea(m);v(null,vn,x,_,m,b,k),h.el=vn.el}if(he&&gn(he,b),!An&&(W=ee&&ee.onVnodeMounted)){const vn=h;gn(()=>qn(W,_e,vn),b)}(h.shapeFlag&256||_e&&mr(_e.vnode)&&_e.vnode.shapeFlag&256)&&m.a&&gn(m.a,b),m.isMounted=!0,h=x=_=null}};m.scope.on();const I=m.effect=new Ni(R);m.scope.off();const D=m.update=I.run.bind(I),Q=m.job=I.runIfDirty.bind(I);Q.i=m,Q.id=m.uid,I.scheduler=()=>qo(Q),Dt(m,!0),D()},pe=(m,h,x)=>{h.component=m;const _=m.vnode.props;m.vnode=h,m.next=null,vd(m,h.props,_,x),Dd(m,h.children,x),lt(),_a(m),ct()},K=(m,h,x,_,b,k,E,R,I=!1)=>{const D=m&&m.children,Q=m?m.shapeFlag:0,W=h.children,{patchFlag:U,shapeFlag:ee}=h;if(U>0){if(U&128){Le(D,W,x,_,b,k,E,R,I);return}else if(U&256){ve(D,W,x,_,b,k,E,R,I);return}}ee&8?(Q&16&&en(D,b,k),W!==D&&c(x,W)):Q&16?ee&16?Le(D,W,x,_,b,k,E,R,I):en(D,b,k,!0):(Q&8&&c(x,""),ee&16&&fe(W,x,_,b,k,E,R,I))},ve=(m,h,x,_,b,k,E,R,I)=>{m=m||jt,h=h||jt;const D=m.length,Q=h.length,W=Math.min(D,Q);let U;for(U=0;U<W;U++){const ee=h[U]=I?ot(h[U]):Gn(h[U]);v(m[U],ee,x,null,b,k,E,R,I)}D>Q?en(m,b,k,!0,!1,W):fe(h,x,_,b,k,E,R,I,W)},Le=(m,h,x,_,b,k,E,R,I)=>{let D=0;const Q=h.length;let W=m.length-1,U=Q-1;for(;D<=W&&D<=U;){const ee=m[D],re=h[D]=I?ot(h[D]):Gn(h[D]);if(or(ee,re))v(ee,re,x,null,b,k,E,R,I);else break;D++}for(;D<=W&&D<=U;){const ee=m[W],re=h[U]=I?ot(h[U]):Gn(h[U]);if(or(ee,re))v(ee,re,x,null,b,k,E,R,I);else break;W--,U--}if(D>W){if(D<=U){const ee=U+1,re=ee<Q?h[ee].el:_;for(;D<=U;)v(null,h[D]=I?ot(h[D]):Gn(h[D]),x,re,b,k,E,R,I),D++}}else if(D>U)for(;D<=W;)Ce(m[D],b,k,!0),D++;else{const ee=D,re=D,he=new Map;for(D=re;D<=U;D++){const cn=h[D]=I?ot(h[D]):Gn(h[D]);cn.key!=null&&he.set(cn.key,D)}let _e,Ne=0;const $e=U-re+1;let An=!1,vn=0;const wt=new Array($e);for(D=0;D<$e;D++)wt[D]=0;for(D=ee;D<=W;D++){const cn=m[D];if(Ne>=$e){Ce(cn,b,k,!0);continue}let wn;if(cn.key!=null)wn=he.get(cn.key);else for(_e=re;_e<=U;_e++)if(wt[_e-re]===0&&or(cn,h[_e])){wn=_e;break}wn===void 0?Ce(cn,b,k,!0):(wt[wn-re]=D+1,wn>=vn?vn=wn:An=!0,v(cn,h[wn],x,null,b,k,E,R,I),Ne++)}const tr=An?Pd(wt):jt;for(_e=tr.length-1,D=$e-1;D>=0;D--){const cn=re+D,wn=h[cn],Wr=h[cn+1],Ft=cn+1<Q?Wr.el||Eu(Wr):_;wt[D]===0?v(null,wn,x,Ft,b,k,E,R,I):An&&(_e<0||D!==tr[_e]?Ie(wn,x,Ft,2):_e--)}}},Ie=(m,h,x,_,b=null)=>{const{el:k,type:E,transition:R,children:I,shapeFlag:D}=m;if(D&6){Ie(m.component.subTree,h,x,_);return}if(D&128){m.suspense.move(h,x,_);return}if(D&64){E.move(m,h,x,V);return}if(E===He){r(k,h,x);for(let W=0;W<I.length;W++)Ie(I[W],h,x,_);r(m.anchor,h,x);return}if(E===Ys){w(m,h,x);return}if(_!==2&&D&1&&R)if(_===0)R.persisted&&!k[Vs]?r(k,h,x):(R.beforeEnter(k),r(k,h,x),gn(()=>R.enter(k),b));else{const{leave:W,delayLeave:U,afterLeave:ee}=R,re=()=>{m.ctx.isUnmounted?s(k):r(k,h,x)},he=()=>{const _e=k._isLeaving||!!k[Vs];k._isLeaving&&k[Vs](!0),R.persisted&&!_e?re():W(k,()=>{re(),ee&&ee()})};U?U(k,re,he):he()}else r(k,h,x)},Ce=(m,h,x,_=!1,b=!1)=>{const{type:k,props:E,ref:R,children:I,dynamicChildren:D,shapeFlag:Q,patchFlag:W,dirs:U,cacheIndex:ee,memo:re}=m;if(W===-2&&(b=!1),R!=null&&(lt(),fr(R,null,x,m,!0),ct()),ee!=null&&(h.renderCache[ee]=void 0),Q&256){h.ctx.deactivate(m);return}const he=Q&1&&U,_e=!mr(m);let Ne;if(_e&&(Ne=E&&E.onVnodeBeforeUnmount)&&qn(Ne,h,m),Q&6)xn(m.component,x,_);else{if(Q&128){m.suspense.unmount(x,_);return}he&&Ct(m,null,h,"beforeUnmount"),Q&64?m.type.remove(m,h,x,V,_):D&&!D.hasOnce&&(k!==He||W>0&&W&64)?en(D,h,x,!1,!0):(k===He&&W&384||!b&&Q&16)&&en(I,h,x),_&&sn(m)}const $e=re!=null&&ee==null;(_e&&(Ne=E&&E.onVnodeUnmounted)||he||$e)&&gn(()=>{Ne&&qn(Ne,h,m),he&&Ct(m,null,h,"unmounted"),$e&&(m.el=null)},x)},sn=m=>{const{type:h,el:x,anchor:_,transition:b}=m;if(h===He){Bn(x,_);return}if(h===Ys){C(m);return}const k=()=>{s(x),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(m.shapeFlag&1&&b&&!b.persisted){const{leave:E,delayLeave:R}=b,I=()=>E(x,k);R?R(m.el,k,I):I()}else k()},Bn=(m,h)=>{let x;for(;m!==h;)x=p(m),s(m),m=x;s(h)},xn=(m,h,x)=>{const{bum:_,scope:b,job:k,subTree:E,um:R,m:I,a:D}=m;Sa(I),Sa(D),_&&Hs(_),b.stop(),k&&(k.flags|=8,Ce(E,m,h,x)),R&&gn(R,h),gn(()=>{m.isUnmounted=!0},h)},en=(m,h,x,_=!1,b=!1,k=0)=>{for(let E=k;E<m.length;E++)Ce(m[E],h,x,_,b)},T=m=>{if(m.shapeFlag&6)return T(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const h=p(m.anchor||m.el),x=h&&h[Gc];return x?p(x):h};let H=!1;const z=(m,h,x)=>{let _;m==null?h._vnode&&(Ce(h._vnode,null,null,!0),_=h._vnode.component):v(h._vnode||null,m,h,null,null,null,x),h._vnode=m,H||(H=!0,_a(_),nu(),H=!1)},V={p:v,um:Ce,m:Ie,r:sn,mt:Ue,mc:fe,pc:K,pbc:Ee,n:T,o:e};return{render:z,hydrate:void 0,createApp:md(z)}}function Js({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Dt({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Rd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function vu(e,n,t=!1){const r=e.children,s=n.children;if(se(r)&&se(s))for(let o=0;o<r.length;o++){const a=r[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=ot(s[o]),i.el=a.el),!t&&i.patchFlag!==-2&&vu(a,i)),i.type===vs&&(i.patchFlag===-1&&(i=s[o]=ot(i)),i.el=a.el),i.type===ft&&!i.el&&(i.el=a.el)}}function Pd(e){const n=e.slice(),t=[0];let r,s,o,a,i;const u=e.length;for(r=0;r<u;r++){const l=e[r];if(l!==0){if(s=t[t.length-1],e[s]<l){n[r]=s,t.push(r);continue}for(o=0,a=t.length-1;o<a;)i=o+a>>1,e[t[i]]<l?o=i+1:a=i;l<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,a=t[o-1];o-- >0;)t[o]=a,a=n[a];return t}function wu(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:wu(n)}function Sa(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Eu(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Eu(n.subTree):null}const Cu=e=>e.__isSuspense;function Ld(e,n){n&&n.pendingBranch?se(e)?n.effects.push(...e):n.effects.push(e):zc(e)}const He=Symbol.for("v-fgt"),vs=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),Ys=Symbol.for("v-stc"),It=[];let bn=null;function ne(e=!1){It.push(bn=e?null:[])}function Du(){It.pop(),bn=It[It.length-1]||null}let vr=1;function rs(e,n=!1){vr+=e,e<0&&bn&&n&&(bn.hasOnce=!0)}function Su(e){return e.dynamicChildren=vr>0?bn||jt:null,Du(),vr>0&&bn&&bn.push(e),e}function de(e,n,t,r,s,o){return Su(S(e,n,t,r,s,o,!0))}function Vn(e,n,t,r,s){return Su(Oe(e,n,t,r,s,!0))}function ss(e){return e?e.__v_isVNode===!0:!1}function or(e,n){return e.type===n.type&&e.key===n.key}const Tu=({key:e})=>e??null,Yr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Be(e)||ln(e)||ae(e)?{i:yn,r:e,k:n,f:!!t}:e:null);function S(e,n=null,t=null,r=0,s=null,o=e===He?0:1,a=!1,i=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Tu(n),ref:n&&Yr(n),scopeId:ru,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:yn};return i?(os(u,t),o&128&&e.normalize(u)):t&&(u.shapeFlag|=Be(t)?8:16),vr>0&&!a&&bn&&(u.patchFlag>0||o&6)&&u.patchFlag!==32&&bn.push(u),u}const Oe=Id;function Id(e,n=null,t=null,r=0,s=null,o=!1){if((!e||e===od)&&(e=ft),ss(e)){const i=Qt(e,n,!0);return t&&os(i,t),vr>0&&!o&&bn&&(i.shapeFlag&6?bn[bn.indexOf(e)]=i:bn.push(i)),i.patchFlag=-2,i}if(Gd(e)&&(e=e.__vccOpts),n){n=Md(n);let{class:i,style:u}=n;i&&!Be(i)&&(n.class=Kn(i)),Ae(u)&&(zo(u)&&!se(u)&&(u=rn({},u)),n.style=er(u))}const a=Be(e)?1:Cu(e)?128:ks(e)?64:Ae(e)?4:ae(e)?2:0;return S(e,n,t,r,s,a,o,!0)}function Md(e){return e?zo(e)||_u(e)?rn({},e):e:null}function Qt(e,n,t=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:i,transition:u}=e,l=n?Od(s||{},n):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Tu(l),ref:n&&n.ref?t&&o?se(o)?o.concat(Yr(n)):[o,Yr(n)]:Yr(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==He?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Qt(e.ssContent),ssFallback:e.ssFallback&&Qt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&r&&jo(c,u.clone(c)),c}function Ot(e=" ",n=0){return Oe(vs,null,e,n)}function En(e="",n=!1){return n?(ne(),Vn(ft,null,e)):Oe(ft,null,e)}function Gn(e){return e==null||typeof e=="boolean"?Oe(ft):se(e)?Oe(He,null,e.slice()):ss(e)?ot(e):Oe(vs,null,String(e))}function ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Qt(e)}function os(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(se(n))t=16;else if(typeof n=="object")if(r&65){const s=n.default;s&&(s._c&&(s._d=!1),os(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!_u(n)?n._ctx=yn:s===3&&yn&&(yn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(ae(n)){if(r&65){os(e,{default:n});return}n={default:n,_ctx:yn},t=32}else n=String(n),r&64?(t=16,n=[Ot(n)]):t=8;e.children=n,e.shapeFlag|=t}function Od(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const s in r)if(s==="class")n.class!==r.class&&(n.class=Kn([n.class,r.class]));else if(s==="style")n.style=er([n.style,r.style]);else if(ps(s)){const o=n[s],a=r[s];a&&o!==a&&!(se(o)&&o.includes(a))?n[s]=o?[].concat(o,a):a:a==null&&o==null&&!fs(s)&&(n[s]=a)}else s!==""&&(n[s]=r[s])}return n}function qn(e,n,t,r=null){On(e,n,7,[t,r])}const Nd=pu();let Fd=0;function Bd(e,n,t){const r=e.type,s=(n?n.appContext:e.appContext)||Nd,o={uid:Fd++,vnode:e,type:r,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bu(r,s),emitsOptions:fu(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=hd.bind(null,o),e.ce&&e.ce(o),o}let un=null;const Wd=()=>un||yn;let as,wr;{const e=hs(),n=(t,r)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(r),o=>{s.length>1?s.forEach(a=>a(o)):s[0](o)}};as=n("__VUE_INSTANCE_SETTERS__",t=>un=t),wr=n("__VUE_SSR_SETTERS__",t=>Er=t)}const Mr=e=>{const n=un;return as(e),e.scope.on(),()=>{e.scope.off(),as(n)}},Ta=()=>{un&&un.scope.off(),as(null)};function Ru(e){return e.vnode.shapeFlag&4}let Er=!1;function zd(e,n=!1,t=!1){n&&wr(n);const{props:r,children:s}=e.vnode,o=Ru(e);Ad(e,r,o,n),Cd(e,s,t||n);const a=o?qd(e,n):void 0;return n&&wr(!1),a}function qd(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,id);const{setup:r}=t;if(r){lt();const s=e.setupContext=r.length>1?Hd(e):null,o=Mr(e),a=Ir(r,e,0,[e.props,s]),i=Ti(a);if(ct(),o(),(i||e.sp)&&!mr(e)&&uu(e),i){if(a.then(Ta,Ta),n)return a.then(u=>{wr(!0);try{Ra(e,u,n)}finally{wr(!1)}}).catch(u=>{bs(u,e,0)});e.asyncDep=a}else Ra(e,a)}else Pu(e)}function Ra(e,n,t){ae(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Ae(n)&&(e.setupState=Xi(n)),Pu(e)}function Pu(e,n,t){const r=e.type;e.render||(e.render=r.render||Yn);{const s=Mr(e);lt();try{ud(e)}finally{ct(),s()}}}const jd={get(e,n){return an(e,"get",""),e[n]}};function Hd(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,jd),slots:e.slots,emit:e.emit,expose:n}}function ws(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xi(Rc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in hr)return hr[t](e)},has(n,t){return t in n||t in hr}})):e.proxy}function Ud(e,n=!0){return ae(e)?e.displayName||e.name:e.name||n&&e.__name}function Gd(e){return ae(e)&&"__vccOpts"in e}const ue=(e,n)=>Oc(e,n,Er);function Lu(e,n,t){try{rs(-1);const r=arguments.length;return r===2?Ae(n)&&!se(n)?ss(n)?Oe(e,null,[n]):Oe(e,n):Oe(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ss(t)&&(t=[t]),Oe(e,n,t))}finally{rs(1)}}const $d="3.5.41";/**
* @vue/runtime-dom v3.5.41
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vo;const Pa=typeof window<"u"&&window.trustedTypes;if(Pa)try{vo=Pa.createPolicy("vue",{createHTML:e=>e})}catch{}const Iu=vo?e=>vo.createHTML(e):e=>e,Kd="http://www.w3.org/2000/svg",Vd="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,La=st&&st.createElement("template"),Qd={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const s=n==="svg"?st.createElementNS(Kd,e):n==="mathml"?st.createElementNS(Vd,e):t?st.createElement(e,{is:t}):st.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,s,o){const a=t?t.previousSibling:n.lastChild;if(s&&(s===o||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{La.innerHTML=Iu(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const i=La.content;if(r==="svg"||r==="mathml"){const u=i.firstChild;for(;u.firstChild;)i.appendChild(u.firstChild);i.removeChild(u)}n.insertBefore(i,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Jd=Symbol("_vtc");function Yd(e,n,t){const r=e[Jd];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const is=Symbol("_vod"),Mu=Symbol("_vsh"),Xd={name:"show",beforeMount(e,{value:n},{transition:t}){e[is]=e.style.display==="none"?"":e.style.display,t&&n?t.beforeEnter(e):ar(e,n)},mounted(e,{value:n},{transition:t}){t&&n&&t.enter(e)},updated(e,{value:n,oldValue:t},{transition:r}){!n!=!t&&(r?n?(r.beforeEnter(e),ar(e,!0),r.enter(e)):r.leave(e,()=>{ar(e,!1)}):ar(e,n))},beforeUnmount(e,{value:n}){ar(e,n)}};function ar(e,n){e.style.display=n?e[is]:"none",e[Mu]=!n}const Zd=Symbol(""),ep=/(?:^|;)\s*display\s*:/;function np(e,n,t){const r=e.style,s=Be(t);let o=!1;if(t&&!s){if(n)if(Be(n))for(const a of n.split(";")){const i=a.slice(0,a.indexOf(":")).trim();t[i]==null&&lr(r,i,"")}else for(const a in n)t[a]==null&&lr(r,a,"");for(const a in t){a==="display"&&(o=!0);const i=t[a];i!=null?rp(e,a,!Be(n)&&n?n[a]:void 0,i)||lr(r,a,i):lr(r,a,"")}}else if(s){if(n!==t){const a=r[Zd];a&&(t+=";"+a),r.cssText=t,o=ep.test(t)}}else n&&e.removeAttribute("style");is in e&&(e[is]=o?r.display:"",e[Mu]&&(r.display="none"))}const Ia=/\s*!important$/;function lr(e,n,t){if(se(t))t.forEach(r=>lr(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const r=tp(e,n);Ia.test(t)?e.setProperty(Nt(r),t.replace(Ia,""),"important"):e[r]=t}}const Ma=["Webkit","Moz","ms"],Xs={};function tp(e,n){const t=Xs[n];if(t)return t;let r=mn(n);if(r!=="filter"&&r in e)return Xs[n]=r;r=gs(r);for(let s=0;s<Ma.length;s++){const o=Ma[s]+r;if(o in e)return Xs[n]=o}return n}function rp(e,n,t,r){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&Be(r)&&t===r}const Oa="http://www.w3.org/1999/xlink";function Na(e,n,t,r,s,o=lc(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Oa,n.slice(6,n.length)):e.setAttributeNS(Oa,n,t):t==null||o&&!Ii(t)?e.removeAttribute(n):e.setAttribute(n,o?"":Xn(t)?String(t):t)}function Fa(e,n,t,r,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Iu(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,u=t==null?e.type==="checkbox"?"on":"":String(t);(i!==u||!("_value"in e))&&(e.value=u),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const i=typeof e[n];i==="boolean"?t=Ii(t):t==null&&i==="string"?(t="",a=!0):i==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(s||n)}function sp(e,n,t,r){e.addEventListener(n,t,r)}function op(e,n,t,r){e.removeEventListener(n,t,r)}const Ba=Symbol("_vei");function ap(e,n,t,r,s=null){const o=e[Ba]||(e[Ba]={}),a=o[n];if(r&&a)a.value=r;else{const[i,u]=lp(n);if(r){const l=o[n]=pp(r,s);sp(e,i,l,u)}else a&&(op(e,i,a,u),o[n]=void 0)}}const ip=/(Once|Passive|Capture)$/,up=/^on:?(?:Once|Passive|Capture)$/;function lp(e){let n,t;for(;(t=e.match(ip))&&!up.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Nt(e.slice(2)),n]}let Zs=0;const cp=Promise.resolve(),dp=()=>Zs||(cp.then(()=>Zs=0),Zs=Date.now());function pp(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(se(s)){const o=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0};const a=s.slice(),i=[r];for(let u=0;u<a.length&&!r._stopped;u++){const l=a[u];l&&On(l,n,5,i)}}else On(s,n,5,[r])};return t.value=e,t.attached=dp(),t}const Wa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,fp=(e,n,t,r,s,o)=>{const a=s==="svg";n==="class"?Yd(e,r,a):n==="style"?np(e,t,r):ps(n)?fs(n)||ap(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):mp(e,n,r,a))?(Fa(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Na(e,n,r,a,o,n!=="value")):e._isVueCE&&(gp(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!Be(r)))?Fa(e,mn(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Na(e,n,r,a))};function mp(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Wa(n)&&ae(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Wa(n)&&Be(t)?!1:n in e}function gp(e,n){const t=e._def.props;if(!t)return!1;const r=mn(n);return Array.isArray(t)?t.some(s=>mn(s)===r):Object.keys(t).some(s=>mn(s)===r)}const hp=["ctrl","shift","alt","meta"],_p={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>hp.some(t=>e[`${t}Key`]&&!n.includes(t))},yp=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=((s,...o)=>{for(let a=0;a<n.length;a++){const i=_p[n[a]];if(i&&i(s,n))return}return e(s,...o)}))},bp=rn({patchProp:fp},Qd);let za;function kp(){return za||(za=Sd(bp))}const xp=((...e)=>{const n=kp().createApp(...e),{mount:t}=n;return n.mount=r=>{const s=vp(r);if(!s)return;const o=n._component;!ae(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Ap(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},n});function Ap(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vp(e){return Be(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const qt=typeof document<"u";function Ou(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function wp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ou(e.default)}const ye=Object.assign;function eo(e,n){const t={};for(const r in n){const s=n[r];t[r]=Nn(s)?s.map(e):e(s)}return t}const _r=()=>{},Nn=Array.isArray;function qa(e,n){const t={};for(const r in e)t[r]=r in n?n[r]:e[r];return t}const Nu=/#/g,Ep=/&/g,Cp=/\//g,Dp=/=/g,Sp=/\?/g,Fu=/\+/g,Tp=/%5B/g,Rp=/%5D/g,Bu=/%5E/g,Pp=/%60/g,Wu=/%7B/g,Lp=/%7C/g,zu=/%7D/g,Ip=/%20/g;function $o(e){return e==null?"":encodeURI(""+e).replace(Lp,"|").replace(Tp,"[").replace(Rp,"]")}function Mp(e){return $o(e).replace(Wu,"{").replace(zu,"}").replace(Bu,"^")}function wo(e){return $o(e).replace(Fu,"%2B").replace(Ip,"+").replace(Nu,"%23").replace(Ep,"%26").replace(Pp,"`").replace(Wu,"{").replace(zu,"}").replace(Bu,"^")}function Op(e){return wo(e).replace(Dp,"%3D")}function Np(e){return $o(e).replace(Nu,"%23").replace(Sp,"%3F")}function Fp(e){return Np(e).replace(Cp,"%2F")}function Cr(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Bp=/\/$/,Wp=e=>e.replace(Bp,"");function no(e,n,t="/"){let r,s={},o="",a="";const i=n.indexOf("#");let u=n.indexOf("?");return u=i>=0&&u>i?-1:u,u>=0&&(r=n.slice(0,u),o=n.slice(u,i>0?i:n.length),s=e(o.slice(1))),i>=0&&(r=r||n.slice(0,i),a=n.slice(i,n.length)),r=Hp(r??n,t),{fullPath:r+o+a,path:r,query:s,hash:Cr(a)}}function zp(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function ja(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function qp(e,n,t){const r=n.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&Jt(n.matched[r],t.matched[s])&&qu(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function Jt(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function qu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!jp(e[t],n[t]))return!1;return!0}function jp(e,n){return Nn(e)?Ha(e,n):Nn(n)?Ha(n,e):(e==null?void 0:e.valueOf())===(n==null?void 0:n.valueOf())}function Ha(e,n){return Nn(n)?e.length===n.length&&e.every((t,r)=>t===n[r]):e.length===1&&e[0]===n}function Hp(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=t.length-1,a,i;for(a=0;a<r.length;a++)if(i=r[a],i!==".")if(i==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Eo=(function(e){return e.pop="pop",e.push="push",e})({}),to=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Up(e){if(!e)if(qt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Wp(e)}const Gp=/^[^#]+#/;function $p(e,n){return e.replace(Gp,"#")+n}function Kp(e,n){const t=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:n.behavior,left:r.left-t.left-(n.left||0),top:r.top-t.top-(n.top||0)}}const Es=()=>({left:window.scrollX,top:window.scrollY});function Vp(e){let n;if("el"in e){const t=e.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;n=Kp(s,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function Ua(e,n){return(history.state?history.state.position-n:-1)+e}const Co=new Map;function Qp(e,n){Co.set(e,n)}function Jp(e){const n=Co.get(e);return Co.delete(e),n}function Yp(e){return typeof e=="string"||e&&typeof e=="object"}function ju(e){return typeof e=="string"||typeof e=="symbol"}let Fe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Hu=Symbol("");Fe.MATCHER_NOT_FOUND+"",Fe.NAVIGATION_GUARD_REDIRECT+"",Fe.NAVIGATION_ABORTED+"",Fe.NAVIGATION_CANCELLED+"",Fe.NAVIGATION_DUPLICATED+"";function Yt(e,n){return ye(new Error,{type:e,[Hu]:!0},n)}function rt(e,n){return e instanceof Error&&Hu in e&&(n==null||!!(e.type&n))}const Xp=["params","query","hash"];function Zp(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of Xp)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function e0(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(Fu," "),o=s.indexOf("="),a=Cr(o<0?s:s.slice(0,o)),i=o<0?null:Cr(s.slice(o+1));if(a in n){let u=n[a];Nn(u)||(u=n[a]=[u]),u.push(i)}else n[a]=i}return n}function Ga(e){let n="";for(let t in e){const r=e[t];if(t=Op(t),r==null){r!==void 0&&(n+=(n.length?"&":"")+t);continue}(Nn(r)?r.map(s=>s&&wo(s)):[r&&wo(r)]).forEach(s=>{s!==void 0&&(n+=(n.length?"&":"")+t,s!=null&&(n+="="+s))})}return n}function n0(e){const n={};for(const t in e){const r=e[t];r!==void 0&&(n[t]=Nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return n}const t0=Symbol(""),$a=Symbol(""),Cs=Symbol(""),Ko=Symbol(""),Do=Symbol("");function ir(){let e=[];function n(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function bt(e,n,t,r,s,o=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((i,u)=>{const l=p=>{p===!1?u(Yt(Fe.NAVIGATION_ABORTED,{from:t,to:n})):p instanceof Error?u(p):Yp(p)?u(Yt(Fe.NAVIGATION_GUARD_REDIRECT,{from:n,to:p})):(a&&r.enterCallbacks[s]===a&&typeof p=="function"&&a.push(p),i())},c=o(()=>e.call(r&&r.instances[s],n,t,l));let d=Promise.resolve(c);e.length<3&&(d=d.then(l)),d.catch(p=>u(p))})}function ro(e,n,t,r,s=o=>o()){const o=[];for(const a of e)for(const i in a.components){let u=a.components[i];if(!(n!=="beforeRouteEnter"&&!a.instances[i]))if(Ou(u)){const l=(u.__vccOpts||u)[n];l&&o.push(bt(l,t,r,a,i,s))}else{let l=u();o.push(()=>l.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${i}" at "${a.path}"`);const d=wp(c)?c.default:c;a.mods[i]=c,a.components[i]=d;const p=(d.__vccOpts||d)[n];return p&&bt(p,t,r,a,i,s)()}))}}return o}function r0(e,n){const t=[],r=[],s=[],o=Math.max(n.matched.length,e.matched.length);for(let a=0;a<o;a++){const i=n.matched[a];i&&(e.matched.find(l=>Jt(l,i))?r.push(i):t.push(i));const u=e.matched[a];u&&(n.matched.find(l=>Jt(l,u))||s.push(u))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let s0=()=>location.protocol+"//"+location.host;function Uu(e,n){const{pathname:t,search:r,hash:s}=n,o=e.indexOf("#");if(o>-1){let a=s.includes(e.slice(o))?e.slice(o).length:1,i=s.slice(a);return i[0]!=="/"&&(i="/"+i),ja(i,"")}return ja(t,e)+r+s}function o0(e,n,t,r){let s=[],o=[],a=null;const i=({state:p})=>{const f=Uu(e,location),g=t.value,v=n.value;let P=0;if(p){if(t.value=f,n.value=p,a&&a===g){a=null;return}P=v?p.position-v.position:0}else r(f);s.forEach(M=>{M(t.value,g,{delta:P,type:Eo.pop,direction:P?P>0?to.forward:to.back:to.unknown})})};function u(){a=t.value}function l(p){s.push(p);const f=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return o.push(f),f}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ye({},p.state,{scroll:Es()}),"")}}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:u,listen:l,destroy:d}}function Ka(e,n,t,r=!1,s=!1){return{back:e,current:n,forward:t,replaced:r,position:window.history.length,scroll:s?Es():null}}function a0(e){const{history:n,location:t}=window,r={value:Uu(e,t)},s={value:n.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function o(u,l,c){const d=e.indexOf("#"),p=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+u:s0()+e+u;try{n[c?"replaceState":"pushState"](l,"",p),s.value=l}catch(f){console.error(f),t[c?"replace":"assign"](p)}}function a(u,l){o(u,ye({},n.state,Ka(s.value.back,u,s.value.forward,!0),l,{position:s.value.position}),!0),r.value=u}function i(u,l){const c=ye({},s.value,n.state,{forward:u,scroll:Es()});o(c.current,c,!0),o(u,ye({},Ka(r.value,u,null),{position:c.position+1},l),!1),r.value=u}return{location:r,state:s,push:i,replace:a}}function i0(e){e=Up(e);const n=a0(e),t=o0(e,n.state,n.location,n.replace);function r(o,a=!0){a||t.pauseListeners(),history.go(o)}const s=ye({location:"",base:e,go:r,createHref:$p.bind(null,e)},n,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>n.state.value}),s}function u0(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),i0(e)}let Rt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ve=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ve||{});const l0={type:Rt.Static,value:""},c0=/[a-zA-Z0-9_]/;function d0(e){if(!e)return[[]];if(e==="/")return[[l0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(f){throw new Error(`ERR (${t})/"${l}": ${f}`)}let t=Ve.Static,r=t;const s=[];let o;function a(){o&&s.push(o),o=[]}let i=0,u,l="",c="";function d(){l&&(t===Ve.Static?o.push({type:Rt.Static,value:l}):t===Ve.Param||t===Ve.ParamRegExp||t===Ve.ParamRegExpEnd?(o.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Rt.Param,value:l,regexp:c,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),l="")}function p(){l+=u}for(;i<e.length;){if(u=e[i++],u==="\\"&&t!==Ve.ParamRegExp){r=t,t=Ve.EscapeNext;continue}switch(t){case Ve.Static:u==="/"?(l&&d(),a()):u===":"?(d(),t=Ve.Param):p();break;case Ve.EscapeNext:p(),t=r;break;case Ve.Param:u==="("?t=Ve.ParamRegExp:c0.test(u)?p():(d(),t=Ve.Static,u!=="*"&&u!=="?"&&u!=="+"&&i--);break;case Ve.ParamRegExp:u===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+u:t=Ve.ParamRegExpEnd:c+=u;break;case Ve.ParamRegExpEnd:d(),t=Ve.Static,u!=="*"&&u!=="?"&&u!=="+"&&i--,c="";break;default:n("Unknown state");break}}return t===Ve.ParamRegExp&&n(`Unfinished custom RegExp for param "${l}"`),d(),a(),s}const Va="[^/]+?",p0={sensitive:!1,strict:!1,start:!0,end:!0};var pn=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(pn||{});const f0=/[.+*?^${}()[\]/\\]/g;function m0(e,n){const t=ye({},p0,n),r=[];let s=t.start?"^":"";const o=[];for(const l of e){const c=l.length?[]:[pn.Root];t.strict&&!l.length&&(s+="/");for(let d=0;d<l.length;d++){const p=l[d];let f=pn.Segment+(t.sensitive?pn.BonusCaseSensitive:0);if(p.type===Rt.Static)d||(s+="/"),s+=p.value.replace(f0,"\\$&"),f+=pn.Static;else if(p.type===Rt.Param){const{value:g,repeatable:v,optional:P,regexp:M}=p;o.push({name:g,repeatable:v,optional:P});const A=M||Va;if(A!==Va){f+=pn.BonusCustomRegExp;try{`${A}`}catch(C){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+C.message)}}let w=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;d||(w=P&&l.length<2?`(?:/${w})`:"/"+w),P&&(w+="?"),s+=w,f+=pn.Dynamic,P&&(f+=pn.BonusOptional),v&&(f+=pn.BonusRepeatable),A===".*"&&(f+=pn.BonusWildcard)}c.push(f)}r.push(c)}if(t.strict&&t.end){const l=r.length-1;r[l][r[l].length-1]+=pn.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function i(l){const c=l.match(a),d={};if(!c)return null;for(let p=1;p<c.length;p++){const f=c[p]||"",g=o[p-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function u(l){let c="",d=!1;for(const p of e){(!d||!c.endsWith("/"))&&(c+="/"),d=!1;for(const f of p)if(f.type===Rt.Static)c+=f.value;else if(f.type===Rt.Param){const{value:g,repeatable:v,optional:P}=f,M=g in l?l[g]:"";if(Nn(M)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=Nn(M)?M.join("/"):M;if(!A)if(P)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);c+=A}}return c||"/"}return{re:a,score:r,keys:o,parse:i,stringify:u}}function g0(e,n){let t=0;for(;t<e.length&&t<n.length;){const r=n[t]-e[t];if(r)return r;t++}return e.length<n.length?e.length===1&&e[0]===pn.Static+pn.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===pn.Static+pn.Segment?1:-1:0}function Gu(e,n){let t=0;const r=e.score,s=n.score;for(;t<r.length&&t<s.length;){const o=g0(r[t],s[t]);if(o)return o;t++}if(Math.abs(s.length-r.length)===1){if(Qa(r))return 1;if(Qa(s))return-1}return s.length-r.length}function Qa(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const h0={strict:!1,end:!0,sensitive:!1};function _0(e,n,t){const r=m0(d0(e.path),t),s=ye(r,{record:e,parent:n,children:[],alias:[]});return n&&!s.record.aliasOf==!n.record.aliasOf&&n.children.push(s),s}function y0(e,n){const t=[],r=new Map;n=qa(h0,n);function s(d){return r.get(d)}function o(d,p,f){const g=!f,v=Ya(d);v.aliasOf=f&&f.record;const P=qa(n,d),M=[v];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of C)M.push(Ya(ye({},v,{components:f?f.record.components:v.components,path:O,aliasOf:f?f.record:v})))}let A,w;for(const C of M){const{path:O}=C;if(p&&O[0]!=="/"){const N=p.record.path,$=N[N.length-1]==="/"?"":"/";C.path=p.record.path+(O&&$+O)}if(A=_0(C,p,P),f?f.alias.push(A):(w=w||A,w!==A&&w.alias.push(A),g&&d.name&&!Xa(A)&&a(d.name)),$u(A)&&u(A),v.children){const N=v.children;for(let $=0;$<N.length;$++)o(N[$],A,f&&f.children[$])}f=f||A}return w?()=>{a(w)}:_r}function a(d){if(ju(d)){const p=r.get(d);p&&(r.delete(d),t.splice(t.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=t.indexOf(d);p>-1&&(t.splice(p,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function i(){return t}function u(d){const p=x0(d,t);t.splice(p,0,d),d.record.name&&!Xa(d)&&r.set(d.record.name,d)}function l(d,p){let f,g={},v,P;if("name"in d&&d.name){if(f=r.get(d.name),!f)throw Yt(Fe.MATCHER_NOT_FOUND,{location:d});P=f.record.name,g=ye(Ja(p.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Ja(d.params,f.keys.map(w=>w.name))),v=f.stringify(g)}else if(d.path!=null)v=d.path,f=t.find(w=>w.re.test(v)),f&&(g=f.parse(v),P=f.record.name);else{if(f=p.name?r.get(p.name):t.find(w=>w.re.test(p.path)),!f)throw Yt(Fe.MATCHER_NOT_FOUND,{location:d,currentLocation:p});P=f.record.name,g=ye({},p.params,d.params),v=f.stringify(g)}const M=[];let A=f;for(;A;)M.unshift(A.record),A=A.parent;return{name:P,path:v,params:g,matched:M,meta:k0(M)}}e.forEach(d=>o(d));function c(){t.length=0,r.clear()}return{addRoute:o,resolve:l,removeRoute:a,clearRoutes:c,getRoutes:i,getRecordMatcher:s}}function Ja(e,n){const t={};for(const r of n)r in e&&(t[r]=e[r]);return t}function Ya(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:b0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function b0(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const r in e.components)n[r]=typeof t=="object"?t[r]:t;return n}function Xa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function k0(e){return e.reduce((n,t)=>ye(n,t.meta),{})}function x0(e,n){let t=0,r=n.length;for(;t!==r;){const o=t+r>>1;Gu(e,n[o])<0?r=o:t=o+1}const s=A0(e);return s&&(r=n.lastIndexOf(s,r-1)),r}function A0(e){let n=e;for(;n=n.parent;)if($u(n)&&Gu(e,n)===0)return n}function $u({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Za(e){const n=In(Cs),t=In(Ko),r=ue(()=>{const u=Dn(e.to);return n.resolve(u)}),s=ue(()=>{const{matched:u}=r.value,{length:l}=u,c=u[l-1],d=t.matched;if(!c||!d.length)return-1;const p=d.findIndex(Jt.bind(null,c));if(p>-1)return p;const f=ei(u[l-2]);return l>1&&ei(c)===f&&d[d.length-1].path!==f?d.findIndex(Jt.bind(null,u[l-2])):p}),o=ue(()=>s.value>-1&&D0(t.params,r.value.params)),a=ue(()=>s.value>-1&&s.value===t.matched.length-1&&qu(t.params,r.value.params));function i(u={}){if(C0(u)){const l=n[Dn(e.replace)?"replace":"push"](Dn(e.to)).catch(_r);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:o,isExactActive:a,navigate:i}}function v0(e){return e.length===1?e[0]:e}const w0=iu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Za,setup(e,{slots:n}){const t=ys(Za(e)),{options:r}=In(Cs),s=ue(()=>({[ni(e.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[ni(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=n.default&&v0(n.default(t));return e.custom?o:Lu("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},o)}}}),E0=w0;function C0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function D0(e,n){for(const t in n){const r=n[t],s=e[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Nn(s)||s.length!==r.length||r.some((o,a)=>o.valueOf()!==s[a].valueOf()))return!1}return!0}function ei(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ni=(e,n,t)=>e??n??t,S0=iu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const r=In(Do),s=ue(()=>e.route||r.value),o=In($a,0),a=ue(()=>{let l=Dn(o);const{matched:c}=s.value;let d;for(;(d=c[l])&&!d.components;)l++;return l}),i=ue(()=>s.value.matched[a.value]);Jr($a,ue(()=>a.value+1)),Jr(t0,i),Jr(Do,s);const u=Rn();return Pn(()=>[u.value,i.value,e.name],([l,c,d],[p,f,g])=>{c&&(c.instances[d]=l,f&&f!==c&&l&&l===p&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),l&&c&&(!f||!Jt(c,f)||!p)&&(c.enterCallbacks[d]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,c=e.name,d=i.value,p=d&&d.components[c];if(!p)return ti(t.default,{Component:p,route:l});const f=d.props[c],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,P=Lu(p,ye({},g,n,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[c]=null)},ref:u}));return ti(t.default,{Component:P,route:l})||P}}});function ti(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const T0=S0;function R0(e){const n=y0(e.routes,e),t=e.parseQuery||e0,r=e.stringifyQuery||Ga,s=e.history,o=ir(),a=ir(),i=ir(),u=Pc(_t);let l=_t;qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=eo.bind(null,T=>""+T),d=eo.bind(null,Fp),p=eo.bind(null,Cr);function f(T,H){let z,V;return ju(T)?(z=n.getRecordMatcher(T),V=H):V=T,n.addRoute(V,z)}function g(T){const H=n.getRecordMatcher(T);H&&n.removeRoute(H)}function v(){return n.getRoutes().map(T=>T.record)}function P(T){return!!n.getRecordMatcher(T)}function M(T,H){if(H=ye({},H||u.value),typeof T=="string"){const x=no(t,T,H.path),_=n.resolve({path:x.path},H),b=s.createHref(x.fullPath);return ye(x,_,{params:p(_.params),hash:Cr(x.hash),redirectedFrom:void 0,href:b})}let z;if(T.path!=null)z=ye({},T,{path:no(t,T.path,H.path).path});else{const x=ye({},T.params);for(const _ in x)x[_]==null&&delete x[_];z=ye({},T,{params:d(x)}),H.params=d(H.params)}const V=n.resolve(z,H),le=T.hash||"";V.params=c(p(V.params));const m=zp(r,ye({},T,{hash:Mp(le),path:V.path})),h=s.createHref(m);return ye({fullPath:m,hash:le,query:r===Ga?n0(T.query):T.query||{}},V,{redirectedFrom:void 0,href:h})}function A(T){return typeof T=="string"?no(t,T,u.value.path):ye({},T)}function w(T,H){if(l!==T)return Yt(Fe.NAVIGATION_CANCELLED,{from:H,to:T})}function C(T){return $(T)}function O(T){return C(ye(A(T),{replace:!0}))}function N(T,H){const z=T.matched[T.matched.length-1];if(z&&z.redirect){const{redirect:V}=z;let le=typeof V=="function"?V(T,H):V;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=A(le):{path:le},le.params={}),ye({query:T.query,hash:T.hash,params:le.path!=null?{}:T.params},le)}}function $(T,H){const z=l=M(T),V=u.value,le=T.state,m=T.force,h=T.replace===!0,x=N(z,V);if(x)return $(ye(A(x),{state:typeof x=="object"?ye({},le,x.state):le,force:m,replace:h}),H||z);const _=z;_.redirectedFrom=H;let b;return!m&&qp(r,V,z)&&(b=Yt(Fe.NAVIGATION_DUPLICATED,{to:_,from:V}),Ie(V,V,!0,!1)),(b?Promise.resolve(b):Ee(_,V)).catch(k=>rt(k)?rt(k,Fe.NAVIGATION_GUARD_REDIRECT)?k:Le(k):K(k,_,V)).then(k=>{if(k){if(rt(k,Fe.NAVIGATION_GUARD_REDIRECT))return $(ye({replace:h},A(k.to),{state:typeof k.to=="object"?ye({},le,k.to.state):le,force:m}),H||_)}else k=Qe(_,V,!0,h,le);return We(_,V,k),k})}function fe(T,H){const z=w(T,H);return z?Promise.reject(z):Promise.resolve()}function we(T){const H=Bn.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(T):T()}function Ee(T,H){let z;const[V,le,m]=r0(T,H);z=ro(V.reverse(),"beforeRouteLeave",T,H);for(const x of V)x.leaveGuards.forEach(_=>{z.push(bt(_,T,H))});const h=fe.bind(null,T,H);return z.push(h),en(z).then(()=>{z=[];for(const x of o.list())z.push(bt(x,T,H));return z.push(h),en(z)}).then(()=>{z=ro(le,"beforeRouteUpdate",T,H);for(const x of le)x.updateGuards.forEach(_=>{z.push(bt(_,T,H))});return z.push(h),en(z)}).then(()=>{z=[];for(const x of m)if(x.beforeEnter)if(Nn(x.beforeEnter))for(const _ of x.beforeEnter)z.push(bt(_,T,H));else z.push(bt(x.beforeEnter,T,H));return z.push(h),en(z)}).then(()=>(T.matched.forEach(x=>x.enterCallbacks={}),z=ro(m,"beforeRouteEnter",T,H,we),z.push(h),en(z))).then(()=>{z=[];for(const x of a.list())z.push(bt(x,T,H));return z.push(h),en(z)}).catch(x=>rt(x,Fe.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function We(T,H,z){i.list().forEach(V=>we(()=>V(T,H,z)))}function Qe(T,H,z,V,le){const m=w(T,H);if(m)return m;const h=H===_t,x=qt?history.state:{};z&&(V||h?s.replace(T.fullPath,ye({scroll:h&&x&&x.scroll},le)):s.push(T.fullPath,le)),u.value=T,Ie(T,H,z,h),Le()}let Me;function Ue(){Me||(Me=s.listen((T,H,z)=>{if(!xn.listening)return;const V=M(T),le=N(V,xn.currentRoute.value);if(le){$(ye(le,{replace:!0,force:!0}),V).catch(_r);return}l=V;const m=u.value;qt&&Qp(Ua(m.fullPath,z.delta),Es()),Ee(V,m).catch(h=>rt(h,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_CANCELLED)?h:rt(h,Fe.NAVIGATION_GUARD_REDIRECT)?($(ye(A(h.to),{force:!0}),V).then(x=>{rt(x,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&!z.delta&&z.type===Eo.pop&&s.go(-1,!1)}).catch(_r),Promise.reject()):(z.delta&&s.go(-z.delta,!1),K(h,V,m))).then(h=>{h=h||Qe(V,m,!1),h&&(z.delta&&!rt(h,Fe.NAVIGATION_CANCELLED)?s.go(-z.delta,!1):z.type===Eo.pop&&rt(h,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),We(V,m,h)}).catch(_r)}))}let ze=ir(),ge=ir(),pe;function K(T,H,z){Le(T);const V=ge.list();return V.length?V.forEach(le=>le(T,H,z)):console.error(T),Promise.reject(T)}function ve(){return pe&&u.value!==_t?Promise.resolve():new Promise((T,H)=>{ze.add([T,H])})}function Le(T){return pe||(pe=!T,Ue(),ze.list().forEach(([H,z])=>T?z(T):H()),ze.reset()),T}function Ie(T,H,z,V){const{scrollBehavior:le}=e;if(!qt||!le)return Promise.resolve();const m=!z&&Jp(Ua(T.fullPath,0))||(V||!z)&&history.state&&history.state.scroll||null;return xr().then(()=>le(T,H,m)).then(h=>h&&Vp(h)).catch(h=>K(h,T,H))}const Ce=T=>s.go(T);let sn;const Bn=new Set,xn={currentRoute:u,listening:!0,addRoute:f,removeRoute:g,clearRoutes:n.clearRoutes,hasRoute:P,getRoutes:v,resolve:M,options:e,push:C,replace:O,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:o.add,beforeResolve:a.add,afterEach:i.add,onError:ge.add,isReady:ve,install(T){T.component("RouterLink",E0),T.component("RouterView",T0),T.config.globalProperties.$router=xn,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Dn(u)}),qt&&!sn&&u.value===_t&&(sn=!0,C(s.location).catch(V=>{}));const H={};for(const V in _t)Object.defineProperty(H,V,{get:()=>u.value[V],enumerable:!0});T.provide(Cs,xn),T.provide(Ko,Ji(H)),T.provide(Do,u);const z=T.unmount;Bn.add(T),T.unmount=function(){Bn.delete(T),Bn.size<1&&(l=_t,Me&&Me(),Me=null,u.value=_t,sn=!1,pe=!1),z()}}};function en(T){return T.reduce((H,z)=>H.then(()=>we(z)),Promise.resolve())}return xn}function Ds(){return In(Cs)}function Ss(e){return In(Ko)}const P0={class:"topbar"},L0=["aria-label","title","aria-pressed"],I0={key:0,class:"theme-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","aria-hidden":"true"},M0={key:1,class:"theme-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},ri="paid-docs-theme",O0={__name:"App",setup(e){const n=Rn(document.documentElement.dataset.theme==="dark");let t;function r(){try{const i=localStorage.getItem(ri);return i==="light"||i==="dark"?i:null}catch{return null}}function s(i){var u;n.value=i==="dark",document.documentElement.dataset.theme=i,document.documentElement.style.colorScheme=i,(u=document.querySelector('meta[name="theme-color"]'))==null||u.setAttribute("content",i==="dark"?"#000000":"#ffffff")}function o(){const i=n.value?"light":"dark";s(i);try{localStorage.setItem(ri,i)}catch{}}function a(i){r()||s(i.matches?"dark":"light")}return gr(()=>{t=window.matchMedia("(prefers-color-scheme: dark)"),t.addEventListener("change",a)}),Gt(()=>{t==null||t.removeEventListener("change",a)}),(i,u)=>{const l=At("RouterLink"),c=At("RouterView");return ne(),de(He,null,[S("header",P0,[Oe(l,{to:"/",class:"brand"},{default:Xe(()=>[...u[0]||(u[0]=[S("span",{class:"brand-mark"},"AI",-1),S("span",null,"Agent 学习资源库",-1)])]),_:1})]),S("button",{type:"button",class:"theme-toggle","aria-label":n.value?"切换为浅色模式":"切换为深色模式",title:n.value?"切换为浅色模式":"切换为深色模式","aria-pressed":n.value,onClick:o},[n.value?(ne(),de("svg",M0,[...u[2]||(u[2]=[S("path",{d:"M20.4 14.1A8.3 8.3 0 0 1 9.9 3.6a8.3 8.3 0 1 0 10.5 10.5Z"},null,-1)])])):(ne(),de("svg",I0,[...u[1]||(u[1]=[S("circle",{cx:"12",cy:"12",r:"4.2"},null,-1),S("path",{d:"M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"},null,-1)])]))],8,L0),Oe(c)],64)}}},N0="modulepreload",F0=function(e,n){return new URL(e,n).href},si={},B=function(n,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const i=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),l=(u==null?void 0:u.nonce)||(u==null?void 0:u.getAttribute("nonce"));s=a(t.map(c=>{if(c=F0(c,r),c in si)return;si[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(!!r)for(let v=i.length-1;v>=0;v--){const P=i[v];if(P.href===c&&(!d||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":N0,d||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),d)return new Promise((v,P)=>{g.addEventListener("load",v),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return s.then(a=>{for(const i of a||[])i.status==="rejected"&&o(i.reason);return n().catch(o)})},B0=""+new URL("img_001-DoClXsNr.jpg",import.meta.url).href,W0=`快速一两周时间过一下内容即可，把精力花在项目以及具体的技术点上。
每篇正文都是一篇自包含文章：概念讲解 + 代码走读 + 课后习题（答案在文末），代码不必细究、不用另找文件，学习曲线不要上来就很陡峭。

精力重点放在通用agent设计方法论上，以及项目的修改和具体面试复盘上，用最快的时间准备好简历然后参加面试，不断迭代复盘
三十天路线开放下载权限，请下载到本地阅读遇到问题和ai多交流询问来学习，一定不要一直看这些文章
`,z0=`---
title: Week 0 从这里开始
tags:
  - week0
  - concept-only
---

# 从这里开始：纯阅读，不安装、不运行

Week 0 是一段只读的衔接阅读。你不需要安装 Python、不需要装 Coding Agent、不需要付任何钱，也不需要运行任何命令。只要一篇一篇读完，建立一张基本地图，为 Week 1 的真实动手做准备。

## 推荐阅读顺序

1. 先读 [[学习路线图]]。
2. 按顺序阅读概念篇各篇（见路线图的主题列表）。
3. 第一次遇到术语时，查 [[配套指南/常见术语表]]。
4. 遇到 Coding Agent 相关内容时，查 [[配套指南/Coding-Agent安全清单]] 和 [[配套指南/Coding-Agent提示词模板]]。
5. 读到 [[概念篇/完整实践与Week1交接]] 时，了解进入 Week 1 前要选哪条模型访问路径。
6. 进 Week 1 前，补读基础篇四篇：[[Python基础语法]]、[[HTTP与API常识]]、[[环境变量与配置文件]]、[[终端实操]]。这是真正动手前要会的基础，读懂即可，Week 1 环境就绪后再照着试。

正文里偶尔会出现命令或代码片段，那只是让你"看一眼长什么样"，不需要你运行。任何动手都推迟到 Week 1。

## 把问题交给 AI 的方式

读不懂某个概念时，可以用下面这段话问 AI：

\`\`\`text
我正在学习 AI 应用开发的基础概念。
请用完全没有编程经验的人能理解的语言解释：
1. 这个词是什么；
2. 它解决什么问题；
3. 它不是什么；
4. 用一个生活中的例子类比；
5. 它在 AI 应用里大概起什么作用。

不要给代码，不要引入其它未经解释的术语。
\`\`\`

## 遇到问题怎么办

Week 0 全程只读，一般不会遇到报错。如果某段正文让你困惑，把那段正文和你的疑问一起交给 AI，让它换一种方式解释。

## Week 0 完成标志

能用自己的话解释概念之间的关系，并知道 Week 1 会从哪里开始动手。
`,q0=`---
title: Week 0 学习路线图
tags:
  - week0
  - roadmap
  - concept-only
---

# Week 0 学习路线图

Week 0 分两部分：**概念篇**建立地图，**基础篇**补动手前的基础。全程只读，不安装、不运行。

## 概念篇（建议按顺序读）

1. [[概念篇/建立AI应用与Agent地图]] -- 大模型、AI 应用、Agent 的层次和区别
2. [[概念篇/文件路径终端与Python运行]] -- 项目运行的基本语境
3. [[概念篇/JSON规则程序与输入输出]] -- 输入、处理、输出和错误边界
4. [[概念篇/Git配置与安全边界]] -- 修改为什么需要可追踪和可恢复
5. [[概念篇/认识Coding-Agent]] -- Agent 如何进入项目上下文
6. [[概念篇/需求采访Spec与TDD]] -- 如何把模糊需求变成可验收任务
7. [[概念篇/完整实践与Week1交接]] -- 任务闭环与模型访问准备

## 基础篇（概念篇读完后、进 Week 1 前过一遍）

- [[Python基础语法]] -- 能读懂 Python 代码
- [[HTTP与API常识]] -- 看得懂 API 请求、响应、状态码
- [[环境变量与配置文件]] -- 知道 API Key 怎么放、怎么读
- [[终端实操]] -- 真会跑终端命令、把报错交给 AI

## 为什么这样排

先建立概念地图，再用生活化例子让每个概念落地；随后认识 Coding Agent 的协作方式和安全边界，最后衔接 Week 1 的真实模型访问。

概念篇和基础篇各管一段：概念篇管"是什么、为什么"，基础篇管"具体怎么读、怎么跑"。

这里有一个词后面会反复出现：**确定性**。确定性程序的意思是--同样的输入永远得到同样的输出，不像大模型那样可能每次回答不同。概念篇前几篇讲的就是这种"确定性程序"，用它和后面的大模型做对比，你才能看清大模型到底多出了什么能力、又带来了什么不确定性。

## 每篇的阅读动作

- 先看本篇要解决的问题。
- 只掌握本篇的核心词。
- 用一个生活化例子复述。
- 把不懂的地方交给 AI 解释。

判断是否理解，以能否连贯解释概念关系为准。Week 0 不设自测题，也不要求你运行任何命令。

## Week 1 的入口

Week 1 会开始出现 API、Token、Prompt、\`call_model()\`、ReAct、Tool Calling 和 RAG 这些词。

这些词现在不用记，Week 1 会逐个讲。这里列出来只是让你先混个眼熟，知道它们都是 Week 1 真正动手时会用到的东西，并且它们之间不是同一个层级的概念--有的属于"模型本身"，有的属于"调用方式"，有的属于"应用编排"。等读完 Week 0，你会更有感觉去区分它们。
`,j0=`# Week 0 衔接实施计划：零基础 AI 应用与 Coding Agent 入门

## 一、定位

Week 0 是 Week 1 前的衔接周，面向没有编程经验、但希望转入 AI 应用开发的学习者。

它的主线是：先建立 AI 应用和 Agent 的基础概念，再用生活化例子让每个概念变得具体，最后认识 Coding Agent 的协作方式和安全边界。

Week 0 全程只读：不安装环境、不运行命令、不付费、不做自测题。任何动手都推迟到 Week 1。

## 二、课程目标

Week 0 结束时，学员应该能够理解：

- 大模型、AI 应用、工作流和 Agent 的区别。
- 模型、数据、上下文、工具、规则、权限和评测在应用中的位置。
- Agent 如何围绕目标进行判断、行动、观察和停止。
- Coding Agent 为什么不只是聊天窗口。
- Prompt、Context、Tool、Memory、Workflow、Guardrail、API、Token 的基本含义。
- 为什么需要先计划、限制范围、查看实际变更并进行人工验收。
- Week 1 为什么从 LLM API、Prompt、Token 和 Agent 范式开始。

## 三、概念篇安排

### 建立 AI 应用与 Agent 地图

重点：LLM、AI 应用、Agent、Tool、Memory、Workflow、Guardrail，以及规则程序和概率性模型的差别。

正文：[[概念篇/建立AI应用与Agent地图]]。

### 文件、路径、终端与 Python 运行

重点：项目目录、当前目录、相对路径、绝对路径、Python 模块和虚拟环境。只要求理解概念，不运行命令、不扩展成 Python 语法课。

正文：[[概念篇/文件路径终端与Python运行]]。

### JSON 与规则程序

重点：输入、校验、处理、输出、错误信息和退出码。用"表单 / 订单检查"类生活例子理解一个确定性程序如何工作。

正文：[[概念篇/JSON规则程序与输入输出]]。

### Git、配置与安全边界

重点：Repository、Commit、Diff、History、Branch，以及 API Key、\`.env\`、删除、上传、推送和人工确认的边界。

正文：[[概念篇/Git配置与安全边界]]。

### 认识 Coding Agent

重点：普通聊天助手与 Coding Agent 的区别；项目上下文、工具、权限、计划、验证和人类验收。

正文：[[概念篇/认识Coding-Agent]]。

### 需求采访、Spec、Plan、Tasks 与 TDD

重点：把"帮我优化一下"变成有目标、有范围、有非目标、有验收条件的任务。正文保留需求采访、简化 Spec、Plan 和 Red -> Green -> Refactor 的说明，但不要求学员真的改代码。

正文：[[概念篇/需求采访Spec与TDD]]。

### 完整实践与 Week 1 交接

重点：理解"目标 -> 计划 -> 修改 -> 验证 -> 变更检查 -> 人工验收"的闭环，并准备 Week 1 的模型访问路径。

正文：[[概念篇/完整实践与Week1交接]]。

## 四、Week 1 模型访问准备

Week 0 全程不需要 API Key；但进入 Week 1 前，需要选择一条真实模型访问路径：

- DeepSeek 官方 API：创建 API Key，按 API 实际用量充值。
- 火山引擎方舟 Coding Plan：订阅适合 Coding Agent 的套餐。
- 其它可以注册、付款和正常访问的官方模型服务。

必须特别说明：Coding Plan 套餐和普通 API 按量计费不是同一种产品，Base URL、模型名称和密钥不能混用。账号、付款、充值和密钥创建由学员本人完成；AI 只根据官方文档帮助解释和检查脱敏配置。

"完整实践与 Week 1 交接"那篇使用下面的 AI 协助模板：

\`\`\`text
我准备开始 Week 1。
模型服务：DeepSeek API / 火山引擎方舟 Coding Plan / 其他
Coding Agent：
系统：

请只根据官方文档，帮我列出：
1. 需要开通的产品；
2. Base URL；
3. 模型名称；
4. .env 变量；
5. 最小验证命令；
6. Key、余额、模型名、网络错误的排查顺序。

我不会发送完整 API Key、密码、Cookie 或付款信息。
\`\`\`

## 五、基础篇（动手前的基础阅读）

概念篇建立概念地图，但不教具体语法和操作。学员进 Week 1 动手前，还需要补四块基础阅读。这些同样是"读懂即可"，Week 1 环境就绪后可照着试：

- [[Python基础语法]]：变量、字符串、list、dict、if/for、函数、import、读写文件、try-except、读懂 traceback。目标是"能读懂 Python 代码大概在干嘛"。
- [[HTTP与API常识]]：请求/响应、状态码（200/4xx/5xx）、请求头、JSON 请求体和响应体、超时。Agent 反复调 API，这是排错底气。
- [[环境变量与配置文件]]：环境变量、为什么用 \`.env\`、\`os.environ\` 怎么读。这是概念篇 Git 那篇"敏感信息隔离"的具体实现。
- [[终端实操]]：pwd/ls/cd、跑 Python 脚本、看输出、Ctrl+C 停、翻历史、把完整报错复制给 AI。

建议顺序：概念篇读完后过一遍。完全没写过代码的同学优先读 Python 基础语法。Week 0 不要求现在运行任何命令。

## 六、其它问题的处理方式

Week 0 全程只读，一般不会遇到环境或报错问题。如果某段正文让你困惑，把那段正文和疑问交给 AI，让它换一种方式解释。涉及付款、密钥、删除、上传、推送和权限变更的概念，正文会反复强调边界，但 Week 0 不要求你实际操作。

## 七、材料结构

\`\`\`text
week0-reading/
├── README.md
├── 从这里开始.md
├── 学习路线图.md
├── 实施计划.md
├── 概念篇/                   # 概念扫盲，纯阅读（概念地图）
├── 前置基础/                 # Week 1 动手前的基础阅读（Python/HTTP/环境变量/终端）
└── 配套指南/                 # 概念、Coding Agent 与 Week 1 准备指南
\`\`\`

## 八、完成判断

Week 0 的判断依据是学员能否理解并复述：

> 模型提供能力，应用组织能力，Agent 在目标和约束下行动；Context 影响模型判断，Tool 连接外部世界，Workflow 组织步骤，Guardrail 和人工确认控制风险，验证证据决定任务是否真的完成。
`,H0=`---
title: Week 0 建立 AI 应用与 Agent 的地图
tags:
  - week0/concept
---

# 建立 AI 应用与 Agent 的地图

> 阅读约 30-40 分钟 ｜ 前置：无 ｜ 全程只读，不运行任何命令

## 本篇只解决一个问题

为什么本课程不直接从"让 AI 写代码"开始，而要先认识一个不使用大模型的"规则程序"？

因为你需要先看懂软件的基本链路：输入是什么，程序如何处理，输出如何验证。之后才能看懂 LLM 和 Agent 到底增加了什么能力，又带来了什么不确定性。

## 先看一个例子

同样是"客户重复扣款，希望今天处理"这条消息：

\`\`\`text
规则程序：找到"扣款""今天" -> 分类为财务、P0
LLM 应用：让模型判断类别、优先级和下一步
Agent：模型判断是否需要查交易记录，再根据工具结果继续行动
\`\`\`

三者不是三个品牌，而是三种系统复杂度。

## 四个必懂词

| 词 | 本篇的解释 |
|---|---|
| LLM | 能理解和生成文本的模型，不等于完整应用 |
| AI 应用 | 模型与界面、数据、规则、工具和工作流组合成的产品 |
| Agent | 在目标和约束下，能多步判断、调用工具并继续行动的系统 |
| Tool | Agent 可以请求程序执行的能力，例如读文件、查数据或计算 |

> 这里的"模型"可以理解成一个读过海量文本、能预测下一句话该说什么的程序。LLM（大语言模型）就是这类模型的一种。

\`Memory\`、\`Workflow\`、\`Guardrail\` 本篇只要求听过，后续再深入。一个 Agent 不一定同时具备所有组件。

## 读着观察：三种系统怎么处理同一条消息

不用运行任何东西，直接读下面这段对比，体会三者的差别：

\`\`\`text
输入：客户重复扣款，希望今天处理

规则程序的输出：
  category = 财务
  priority = P0
  next_step = 转给财务值班人
  （因为程序在文本里命中了"扣款"和"今天"两个关键词）

LLM 应用的输出：
  category = 财务
  priority = P0
  next_step = 建议先核对账单再联系财务
  （模型根据语义判断，措辞可能每次略有不同）

Agent 的输出：
  先调用工具查这笔订单的交易记录
  发现确实有两笔相同金额扣款
  category = 财务，priority = P0
  next_step = 附上重复扣款证据，转给财务值班人
  （它不靠猜，而是先去查证再下结论）
\`\`\`

差别在于：规则程序靠关键词、死板但可控；LLM 应用靠模型理解、灵活但可能出错；Agent 会主动调用工具去验证、再根据真实结果行动。

## 必须记住的边界

- 模型输出可能合理，也可能错误。
- Agent 说"完成了"不是证据。
- 工具真正执行动作的是程序，不是模型文字本身。
- 规则、测试和人工确认负责把概率性能力放进可控范围。

## 读完应该能用自己的话回答

1. LLM 和 AI 应用有什么区别？
2. Agent 比一次模型调用多了什么？
3. 为什么 Week 0 先讲规则程序？
4. 为什么不能只看 Agent 的完成声明？

## 交给 AI 的问题

\`\`\`text
请用"工作问题分诊"这个例子，分别解释规则程序、LLM 应用和 Agent。
每种只说：输入、处理方式、输出、可能失败的地方。
不要引入框架名称，不要使用数学术语。
\`\`\`
`,U0=`---
title: Week 0 认识 Coding Agent
tags:
  - week0/concept
---

# 认识 Coding Agent

> 阅读约 30-40 分钟 ｜ 前置：[[概念篇/Git配置与安全边界]] ｜ 全程只读，不安装或运行任何东西

> 先说明：Week 0 不需要你安装 Coding Agent。这篇只讲它和普通聊天助手有什么区别，以及将来用它时要遵守的协作方式。等 Week 1 有了真实项目，再真正上手。

## Coding Agent 是什么

普通聊天助手主要根据对话回答你；Coding Agent 可以在权限允许的范围内**读取项目、搜索文件、运行命令、修改文件并检查结果**。区别在于：聊天助手只能"说"，Coding Agent 还能"动手"（在你的授权范围内）。

\`\`\`text
用户目标
  ↓
Agent 读取上下文（项目里的文件、代码、配置）
  ↓
提出计划 或 调用工具
  ↓
程序读取 / 修改 / 运行
  ↓
Agent 根据结果继续
  ↓
人类检查证据并验收
\`\`\`

Agent 不是自动接管电脑。工作目录、可用工具、权限和人类确认，共同决定了它能做什么。它每一步都可能出错，所以需要你盯着证据验收，而不是听它说"完成了"。

## 将来怎么协作：只读分析

当你以后有一个真实项目时，可以让 Coding Agent 先只读分析，不动任何文件。一个好的只读提问长这样：

\`\`\`text
请只读取当前项目，不要修改文件。

请回答：
1. 输入文件在哪里；
2. 程序入口在哪里；
3. 哪个文件负责校验；
4. 哪个文件负责处理规则；
5. 正常和异常情况如何运行；
6. 如果只增加一个分类关键词，可能要改哪些文件。

每个判断都要引用具体的文件名和代码里的位置（函数名 / 变量名）。先给分析，不要执行修改。
\`\`\`

"函数"可以理解成代码里一个有名字、能完成某件事的小段落。让 Agent 引用文件名和函数名，是为了逼它"指给你看"，而不是含糊地说"大概在那个地方"。然后你打开它提到的文件核对，看它是不是真的读对了。

## 将来怎么协作：受控小修改

当你确认 Agent 读对了项目，可以让它做一个小修改。标准流程是：

1. **先出计划**：让 Agent 说清楚打算改哪个文件、怎么改，不要直接动手。
2. **人工确认范围**：你看过计划、同意后，才让它改。
3. **只改允许范围**：比如只允许它改某一个文件，不许动别的。
4. **运行验证**：改完让它运行一条验证命令，看结果对不对。
5. **展示变更**：让它展示实际改了什么（\`git diff\`）和实际输出。

这个流程的核心思想是：**先计划、再确认、小步改、看证据**。Week 1 有了真实项目后才会真正走一遍，现在只要记住这个流程的样子。

## 读完应该能说出

- Coding Agent 和普通聊天助手的关键区别。
- 为什么不能只听 Agent 说"完成了"，要看证据。
- 一次受控修改的标准流程有哪几步。
- "先出计划再动手"为什么重要。
`,G0=`---
title: Week 0 前置基础 · 终端实操
tags:
  - week0/foundation
---

# 终端实操

> 这篇是 Week 1 动手前的基础阅读。概念篇的"文件、路径、终端与 Python"让你"认了终端命令长什么样"，这篇让你"真会跑"。现在先读懂每条命令干嘛、会看到什么；Week 1 打开终端时照着做。
>
> Week 0 不需要你现在打开终端。读懂这篇，Week 1 第一天就不会对着黑框发懵。

## 终端是什么

终端就是一个"用文字指挥电脑"的窗口。你敲一行命令，回车，电脑执行，再打印结果给你。没有按钮，全靠打字。

- macOS：叫"终端"（Terminal）。
- Windows：常用"PowerShell"。

打开后你会看到一行提示符，类似：

\`\`\`text
用户名@电脑名 项目名 %
\`\`\`

那个 \`%\`（Windows 上是 \`>\`）后面闪动的光标，就是等你输入命令的地方。

## 三条核心命令：我在哪、有什么、去哪

### pwd：我在哪

\`\`\`text
$ pwd
/Users/你的名字/week1
\`\`\`

\`pwd\` 打印当前所在目录。**动手前先 \`pwd\`**，确认自己站在对的地方，是最重要的习惯。

### ls：这里有什么

\`\`\`text
$ ls
README.md       从这里开始.md    概念篇           配套指南
\`\`\`

\`ls\` 列出当前目录下的文件和文件夹。

### cd：去别的目录

\`\`\`text
$ cd 概念篇            # 进入"概念篇"文件夹
$ pwd
/Users/你的名字/week1/概念篇

$ cd ..            # 返回上一级
$ cd ~             # 回到用户主目录（家）
\`\`\`

- \`cd 名字\`：进入某个文件夹。
- \`cd ..\`：返回上一级。
- \`cd ~\`：回家目录。

**这三个命令不会改任何文件**，只是"看和走"，新手可以放心用。

## 跑一个 Python 脚本

到了项目目录、确认有 Python 环境后，跑一个脚本通常是：

\`\`\`text
$ python demo.py
\`\`\`

- \`python\` 是启动 Python 解释器。
- \`demo.py\` 是你要跑的那个文件。
- 中间有空格。

如果一切正常，脚本里 \`print(...)\` 的内容会直接打印在终端里，这就是"看输出"。

## 看输出：从上往下读

程序跑完会把结果打印在终端。**养成习惯：完整看完输出，别只看最后一行。** 很多时候关键信息在中间，错误在最后。

如果输出很长往上滚走了，macOS 用 \`Command + ↑\` 往上翻，Windows 用滚动条。

## 出错时：Ctrl+C 停下来

如果程序卡住不动、或者死循环一直刷屏，按 \`Ctrl + C\` 强制停止。这是终端里"紧急刹车"的通用操作，**不会损坏文件**，只是让程序停下来。

看到 \`^C\` 或者回到提示符，就是停下来了。

## 翻历史：上下箭头

终端会记住你敲过的命令。

- 按 \`↑\`：调出上一条命令。
- 按 \`↓\`：往下翻。
- 调出来后可以改几个字再回车，不用重新打整条。

跑长命令打错一个字？别重打，按 \`↑\` 调出来改。

## 最重要的一条：把完整报错复制给 AI

出错时终端会打印一串红字（traceback 或错误信息）。**新手最该养成的一个动作**：

1. **选中全部报错文字**（从报错第一行到最后一行，一个字都别漏）。
2. **复制**（macOS \`Command+C\`，Windows 选中后右键复制或 \`Ctrl+C\`）。
3. **粘贴给 AI**，连同"我想干什么、在哪个目录、敲了什么命令"一起发。

**绝对不要**只对 AI 说"报错了"或者"运行不了"。AI 没有看到你的屏幕，完整报错是它唯一能帮你定位的线索。

## 一个完整的小流程

\`\`\`text
$ pwd                                  # 1. 确认我在哪
/Users/你的名字/week1

$ ls                                   # 2. 看有什么
demo.py  .env  pyproject.toml

$ python demo.py                       # 3. 跑脚本
你好，Week 1！                          #    看到输出

$ （如果卡住）按 Ctrl+C                  # 4. 紧急停

$ 按 ↑                                  # 5. 翻历史改命令
\`\`\`

## 安全底线

终端能删文件、能改系统，所以新手记住：

- \`pwd\` / \`ls\` / \`cd\` 这类"看和走"的命令，随便用，不伤东西。
- 看到 \`rm\`（删）、\`sudo\`（提权）、\`>\`（覆盖写）、\`curl | bash\`（下载并执行）这类，**先让 AI 解释影响范围再执行**，不要复制网上的命令直接跑。
- 看不懂的命令，一律先问 AI"这条会改什么、会删什么"。

## 读完这篇，你应该能

- 说出 \`pwd\` / \`ls\` / \`cd\` 分别干嘛，知道动手前先 \`pwd\`。
- 知道怎么跑一个 Python 脚本、怎么看输出。
- 知道卡住时按 \`Ctrl + C\`、翻历史用上下箭头。
- 知道出错时要把完整报错复制给 AI，而不是只说"报错了"。
- 知道哪些命令要小心、先问 AI。

Week 1 第一天打开终端时，照着这篇走就行。
`,$0=`---
title: Week 0 文件、路径、终端与 Python 运行
tags:
  - week0/concept
---

# 文件、路径、终端与 Python 运行

> 阅读约 30-40 分钟 ｜ 前置：[[从这里开始]] ｜ 全程只读，不运行任何命令

## 本篇要建立的能力

你不需要会写代码，但要能理解一件事：当有人对电脑说"运行某个程序"时，电脑需要先搞清楚三个问题--我在哪个文件夹？我要运行哪个文件？用什么来运行它？

本篇就建立这个语境。不用动手，读懂即可。

## 四个概念

想象你在整理电脑里的照片。你有一个"旅行"文件夹，里面有"2023-青海""2024-云南"等子文件夹，每个文件夹里是照片文件。软件世界里用的词，和这件事几乎一样：

| 概念 | 解释 | 对应照片里的什么 |
|---|---|---|
| 文件 | 一份有名字和扩展名的数据，例如 \`.md\`、\`.json\`、\`.py\` | 一张照片 |
| 目录 | 用来组织文件的文件夹 | "旅行"这个文件夹 |
| 当前目录 | 终端命令默认寻找文件的位置 | 你现在正打开看的那个文件夹 |
| 路径 | 文件或目录在电脑中的位置，可用相对或绝对形式表示 | "旅行/2024-云南/IMG_001.jpg" |

路径有两种写法：

- **相对路径**：从"当前目录"出发去找。比如你现在在"旅行"文件夹，那 \`2024-云南/IMG_001.jpg\` 就是相对路径。
- **绝对路径**：从电脑最顶层开始写完整位置。比如 \`/Users/你的名字/图片/旅行/2024-云南/IMG_001.jpg\`。

区别在于：相对路径取决于"你现在在哪"，绝对路径不管你在哪都指向同一个地方。

## 认认这几条命令长什么样

Week 1 你会真正用到终端命令，现在只需要知道它们是干嘛的、看一眼长什么样，不用运行：

\`\`\`bash
pwd              # 显示当前目录（我在哪）
ls               # 列出当前目录里的文件和文件夹
cd 2024-云南     # 进入某个子目录
cd ..            # 返回上一级目录
find .           # 列出当前目录下所有文件（包括子文件夹）
python --version # 查看当前 Python 的版本
\`\`\`

每一行 \`#\` 后面是这条命令的作用。比如 \`pwd\` 就是 "print working directory" 的缩写，作用是告诉你"你现在在哪个文件夹"。

## 关于 Python，只理解三件事

1. Python 是一种编程语言，也是一台能运行 Python 代码的"解释器"。运行一个 Python 程序，就是让这台解释器去执行某个文件里的代码。
2. 运行方式常见的有两种：直接运行某个文件，或用 \`python -m 某个模块名\` 的方式按"模块名"运行。\`-m\` 的意思是"按模块名运行，不用管它在硬盘上的具体路径"。
3. 一个稍大的项目会把代码拆成多个文件、放进文件夹里组织，这种组织方式叫"包"和"模块"。你不用记细节，只要知道：项目里的代码不是乱堆的，是有组织的。

## 虚拟环境只理解三件事

1. \`.venv\` 是当前项目独立的 Python 环境，相当于给这个项目单独开了一个"小房间"。
2. 不同项目可以用不同的依赖（别人写好的、你能直接用的代码），互不干扰。
3. 这样做的好处是：A 项目用的某个库版本，不会弄坏 B 项目。

现在不必研究 Python 环境的全部内部机制。这些概念 Week 1 真正动手装环境时会再走一遍。

## 读完应该能说出

- 相对路径和绝对路径的区别。
- "当前目录"为什么会影响命令的结果。
- 运行一个 Python 程序，电脑需要先搞清楚哪三件事（我在哪 / 运行什么 / 用什么运行）。
- 虚拟环境解决什么问题。

## 交给 AI 的问题

\`\`\`text
我没有编程基础。请用"整理电脑里的照片文件夹"这个例子，解释：
1. 什么是文件、目录、当前目录、路径；
2. 相对路径和绝对路径有什么区别；
3. 为什么运行程序之前要先知道"当前目录"。
不要给代码，不要引入其它术语。
\`\`\`
`,K0=`---
title: Week 0 前置基础 · Python 基础语法
tags:
  - week0/foundation
---

# Python 基础语法

> 这篇是 Week 1 动手前的基础阅读。目标只有一个：**能读懂 Python 代码大概在干嘛**。现在读着理解每段在说什么即可；Week 1 装好 Python 环境后，可以照着试一遍。
>
> 概念篇的"文件、路径、终端与 Python"让你"认了 Python 长什么样"，这篇让你真正能看懂它。

## 先记住一句话

Python 代码是从上往下一行一行执行的。看到一段代码，先从第一行往下读，搞清楚"数据从哪来、被怎么处理、放到哪去"，大意就出来了。

## 变量、字符串、数字

\`\`\`python
name = "张三"      # 字符串：用引号包起来的一段文字
count = 3          # 数字：整数
price = 9.9        # 数字：小数
\`\`\`

- \`name = "张三"\` 的意思是：把文字 \`"张三"\` 存到一个叫 \`name\` 的盒子里。\`=\` 是"放进去"，不是"等于"。
- \`#\` 后面是注释，给人看的，Python 不执行。
- 字符串必须用引号包起来；数字不用。

## list：一排东西

\`\`\`python
names = ["张三", "李四", "王五"]
names[0]            # "张三"——从 0 开始数
names.append("赵六")  # 往末尾加一个
len(names)          # 4——有几个
\`\`\`

- list 是"一排按顺序的东西"，用方括号 \`[ ]\` 包起来，用逗号隔开。
- **从 0 开始数**：第一个是 \`[0]\`，第二个是 \`[1]\`。这是新手最容易踩的坑。

## dict：带标签的东西

\`\`\`python
person = {"名字": "张三", "年龄": 28}
person["名字"]     # "张三"
person["年龄"]     # 28
\`\`\`

- dict 是"带标签的东西"，用花括号 \`{ }\` 包起来，里面是 \`标签: 值\` 一对一对的。
- 取值用 \`["标签名"]\`，不像 list 用数字。
- JSON（概念篇讲过）长得很像 dict，所以认得 dict 就基本认得 JSON。

## if-else：按条件走

\`\`\`python
age = 28
if age >= 18:
    print("成年")
elif age >= 13:
    print("青少年")
else:
    print("儿童")
\`\`\`

- \`if\` 后面跟条件，条件成立就执行它下面缩进的部分。
- **缩进（行首的空格）在 Python 里是有意义的**：属于 \`if\` 的语句要往里缩。这是 Python 和很多语言不一样的地方。
- \`elif\` 是"再如果"，\`else\` 是"以上都不成立"。
- \`print(...)\` 是把内容打印出来给你看。

## for：重复做事

\`\`\`python
names = ["张三", "李四", "王五"]
for name in names:
    print(name)
\`\`\`

- \`for name in names\` 的意思是：把 \`names\` 里的东西一个一个拿出来，每拿一个叫 \`name\`，执行下面缩进的部分。
- 输出会是三行：张三、李四、王五。

## 函数：把一段动作打包

\`\`\`python
def greet(name):
    return "你好，" + name

greet("张三")   # "你好，张三"
\`\`\`

- \`def\` 定义一个函数，\`greet\` 是名字，括号里的 \`name\` 是输入（参数）。
- \`return\` 是"把结果交出去"。
- \`greet("张三")\` 是调用它——把"张三"传进去，拿回结果。

## import：用别人写好的东西

\`\`\`python
import json
json.loads('{"名字": "张三"}')   # 把 JSON 文字变成 dict
\`\`\`

- \`import json\` 是"引入一个叫 json 的工具包"。
- Python 有大量现成的工具包，不用自己造轮子。看到 \`import xxx\`，就是"这一段用到了别人写好的 xxx"。

## 读写文件

\`\`\`python
# 读
with open("报名名单.txt", "r", encoding="utf-8") as f:
    content = f.read()

# 写
with open("结果.txt", "w", encoding="utf-8") as f:
    f.write("处理完成")
\`\`\`

- \`open(...)\` 打开一个文件，\`"r"\` 是读、\`"w"\` 是写。
- \`with ... as f:\` 这种写法会自动帮你关文件，比手动关安全。看到 \`with open\` 就知道在操作文件。
- \`encoding="utf-8"\` 告诉它按 UTF-8 编码处理文字，中文文件基本都要加这个，不然容易乱码。

## try-except：出错别崩溃

\`\`\`python
try:
    num = int("abc")      # "abc" 没法变成数字，会出错
except ValueError:
    num = 0               # 出错了就给个默认值
\`\`\`

- \`try\` 里放"可能出错的代码"，\`except\` 里放"出错了怎么办"。
- 这样程序碰到坏数据不会直接崩，而是按你准备的方案处理。
- \`ValueError\` 是一种错误类型；先不用记具体有哪些，知道"except 后面跟错误类型"就行。

## 读懂 traceback（新手最重要的一节）

程序出错时，Python 会吐出一大段红字，叫 traceback。新手看到就慌，其实它很友好。**从下往上看**：

\`\`\`text
Traceback (most recent call last):
  File "demo.py", line 10, in <module>
    result = divide(10, 0)
  File "demo.py", line 5, in divide
    return a / b
ZeroDivisionError: division by zero
\`\`\`

- **最后一行**是错误类型和原因：\`ZeroDivisionError: division by zero\`——除以零了。
- **往上**看 \`line 5\` 和 \`line 10\`：告诉你错在第 5 行、是被第 10 行调用的。
- 排错顺序：先看最后一行搞清"什么错"，再往上找"在哪一行"。

把整段 traceback 原样复制给 AI，它能立刻告诉你错在哪、怎么改。**不要只说"报错了"**，要给完整红字。

## 读完这篇，你应该能

- 看到 \`name = "张三"\` 知道是把文字存进变量。
- 看到 \`[0]\` 知道是从 0 开始数的第一个。
- 看到 \`if\` / \`for\` / \`def\` / \`import\` / \`with open\` 知道分别在做哪类事。
- 看到 traceback 知道从最后一行往上看、再复制给 AI。

不用现在能写，**能读懂**就达到 Week 1 的入门线了。真正会写，是在 Week 1 边做边练出来的。
`,V0=`---
title: Week 0 从 JSON 到规则程序
tags:
  - week0/concept
---

# 从 JSON 到规则程序

> 阅读约 30-40 分钟 ｜ 前置：[[概念篇/文件路径终端与Python运行]] ｜ 全程只读，不运行任何命令

## 本篇的核心

所有 AI 应用最终都要落到数据输入、程序处理和结果输出。本篇先不用模型，理解一个"确定性程序"是怎么工作的。

\`\`\`text
输入数据
  ↓
读取
  ↓
校验字段
  ↓
分类、排序、推荐下一步
  ↓
输出结果 或 错误信息
\`\`\`

用一个生活例子：假设有一个"活动报名表"，程序要检查每张报名表填得对不对，然后自动分流。

## JSON 只学够用的部分

报名表在程序里常常用 JSON 这种格式表示，它长得像这样：

\`\`\`json
{
  "title": "登录页面报错",
  "description": "同事无法登录内部系统",
  "urgency": 4
}
\`\`\`

几个规则：

- 花括号 \`{ }\` 表示一个"对象"，也就是一条记录。
- 字段名（如 \`"title"\`）要用双引号包起来。
- 多个字段之间用逗号隔开。
- 文本值用双引号，数字（如 \`4\`）不加引号。
- 如果有多条记录，用方括号 \`[ ]\` 括起来组成一个"数组"。

不要把 JSON 当成某种编程语言里的东西去背，它首先是一种"人和程序都能读懂的数据格式"。

## 一个规则程序通常分这几块职责

不用看真实代码，只要知道一个确定性程序内部通常有这些分工：

| 职责 | 做什么 |
|---|---|
| 读取 | 找到输入文件，把里面的 JSON 读出来 |
| 校验 | 检查必填字段在不在、类型对不对、值合不合理 |
| 处理 | 按固定规则分类、排序、算优先级、推荐下一步 |
| 输出 | 把处理结果写成新的 JSON |
| 错误提示 | 出错时给出人能看懂的提示，并标记"失败了" |

"确定性"体现在：只要输入一样，处理过程和输出就永远一样，不会有随机性。

## 读着观察：四种输入分别会怎样

不用运行，直接读这张对照表，理解确定性程序如何处理边界情况。假设校验规则要求每条记录必须有非空的 \`title\`、\`description\` 和 1-5 的整数 \`urgency\`：

| 输入 | 程序会怎么处理 | 结果 |
|---|---|---|
| 正常的报名表（三个字段都齐全、\`urgency\` 是 4） | 读取 -> 校验通过 -> 分类排序 -> 输出结果 | 成功，输出带 \`category\`、\`priority\`、\`next_step\` 的 JSON |
| 缺字段的报名表（比如没有 \`urgency\`） | 读取 -> 校验时发现缺字段 -> 停下 | 失败，提示"缺少字段 urgency"，不再继续处理 |
| 格式错误的 JSON（比如漏了一个引号） | 读取 -> 解析 JSON 时就失败 -> 停下 | 失败，提示"第 X 行第 Y 列 JSON 格式错误" |
| 空数组 \`[ ]\`（一条记录都没有） | 读取 -> 校验发现没有可处理的记录 -> 停下 | 失败，提示"没有可处理的记录" |

注意一个关键点：程序遇到错误时**不会硬撑着往下走**，而是停下来、给一个清楚的提示、并告诉系统"我失败了"。这个"告诉系统失败了"的机制叫**退出码**：

- 退出码是程序结束时给系统的一个数字。
- \`0\` 表示成功，非 \`0\`（通常是 \`1\`）表示出错。
- 在终端里可以用 \`echo $?\`（macOS/Linux）或 \`$LASTEXITCODE\`（PowerShell）查看上一条命令的退出码。Week 1 会用到，现在知道有这么个东西就行。

这种"出错就停 + 清楚提示 + 标记失败"的设计，正是确定性程序可控的地方。相比之下，大模型被问同一个问题可能每次回答都不一样，也没有这么干脆的"成功/失败"信号。

## 读完应该能说出

- JSON 的几条基本语法规则。
- 一个规则程序内部通常分哪几块职责。
- 正常输入、缺字段、格式错误、空数组四种情况，程序分别会怎么处理。
- 退出码是什么，0 和非 0 分别表示什么。

## 交给 AI 的问题

\`\`\`text
我没有编程基础。请用一个"活动报名表检查"的例子，解释：
1. 什么是 JSON，它长什么样；
2. 一个检查报名表的程序通常会分哪几步；
3. 如果报名表缺了字段、或格式写错了，程序应该怎么处理；
4. 为什么说这种程序是"确定性"的。
不要给我完整代码，不要引入其它未经解释的术语。
\`\`\`
`,Q0=`---
title: Week 0 前置基础 · HTTP 与 API 常识
tags:
  - week0/foundation
---

# HTTP 与 API 常识

> 这篇是 Week 1 动手前的基础阅读。Agent 本质上是"反复调用大模型 API"，所以 HTTP 和 API 的基本常识是排错的底气。现在读着理解即可，Week 1 真正发请求时会用到。
>
> 不需要你现在动手发请求，读懂下面这套"办事流程"就够了。

## 一个类比：去柜台办事

把调 API 想成去柜台办事：

1. 你递一张申请单过去（**请求**）。
2. 柜台处理完，递回一张回执（**响应**）。
3. 回执上有编号告诉你办得怎么样（**状态码**）。

HTTP 就是这套"递单子-收回执"的规矩。API 是柜台提供的一项具体服务（比如"让大模型回答问题"）。

## 请求和响应

一次调用永远是一对：**请求 + 响应**。

- **请求**：你发给服务的东西。至少包含"要去哪、用什么方法、带什么数据"。
- **响应**：服务回给你的东西。至少包含"状态码、回过来的数据"。

Week 1 调大模型时，请求里通常带"你的问题 + 模型名 + 一些参数"，响应里带"模型的回答"。

## 状态码：回执上的编号

响应里有个三位数状态码，一眼看出办得怎么样：

| 状态码 | 含义 | 大白话 |
|---|---|---|
| \`200\` | 成功 | 办好了 |
| \`4xx\` | 你这边的问题 | 单子填错了（参数错、没权限、地址错） |
| \`5xx\` | 服务那边的问题 | 柜台自己出故障了，不怪你 |

常见的几个：

- \`200\`：成功。
- \`400\`：请求格式不对（比如 JSON 写错了）。
- \`401\`：没带 key 或 key 不对（没登录）。
- \`403\`：带了 key 但没权限。
- \`404\`：地址不对，没有这个服务。
- \`429\`：调用太频繁，被限流了。
- \`500\` / \`502\` / \`503\`：服务端挂了，等等再试或找官方。

排错时先看状态码：\`4xx\` 先查自己（key、地址、参数、JSON 格式），\`5xx\` 多半是服务端问题，\`429\` 是调用太急。

## 请求头：单子上的备注栏

请求除了正文数据，还有"请求头"——类似申请单边上的备注栏，放一些元信息。

调大模型 API 时，请求头里几乎一定会带一行类似：

\`\`\`text
Authorization: Bearer sk-xxxxxx
\`\`\`

这是"这是我的 key"的意思。\`Bearer\` 后面跟的就是 API Key。**Key 错了或漏了，就会拿到 \`401\`。**

请求头里还常带 \`Content-Type: application/json\`，告诉对方"我带的数据是 JSON 格式"。

## JSON：请求体和响应体都用它

概念篇讲过 JSON。在 API 调用里，请求带的数据（请求体）和响应回的数据（响应体）**基本都是 JSON**。

\`\`\`json
// 请求体（你发出去的）
{
  "model": "deepseek-chat",
  "messages": [{"role": "user", "content": "你好"}]
}

// 响应体（你收回来的）
{
  "choices": [{"message": {"content": "你好！有什么可以帮你？"}}],
  "usage": {"total_tokens": 123}
}
\`\`\`

所以"认得 JSON"和"会调 API"几乎是同一件事。看到花括号 \`{}\` 和 \`标签: 值\`，就是 JSON。

## 超时：等太久就别等了

发请求后，如果服务迟迟不回，你的程序不能无限等下去。设一个"超时"：比如 30 秒还没回，就算失败，别死等。

超时不是错误本身，是"防止程序卡死"的保护。Week 1 写调用代码时，**一定要设超时**，不然网络一抽风程序就挂住不动了。

## 为什么 Agent 离不开这些

一个 Agent 干活，往往是这样的循环：

\`\`\`text
把任务和上下文打包成 JSON 请求
  ↓
发给大模型 API
  ↓
收到 JSON 响应，取出模型的回答
  ↓
模型说"我要调某个工具"
  ↓
再发一次请求……
\`\`\`

**一次任务可能发几十次请求。** 中间任何一次 \`4xx\` / \`5xx\` / 超时，都需要你看得懂状态码、分得清"是我错了"还是"服务挂了"。这就是这篇要提前讲的原因。

## 读完这篇，你应该能

- 说出请求和响应是一对。
- 看到 \`200\` / \`401\` / \`404\` / \`429\` / \`500\` 分别知道大概什么意思。
- 知道 key 是放在请求头里带的，错了会 \`401\`。
- 知道请求体和响应体基本都是 JSON。
- 知道为什么要设超时。

Week 1 真正发请求时，把这些和报错一起交给 AI，排错会快得多。
`,J0=`---
title: Week 0 前置基础 · 环境变量与配置文件
tags:
  - week0/foundation
---

# 环境变量与配置文件（.env）

> 这篇是 Week 1 动手前的基础阅读。API Key 怎么放、程序怎么读到它，靠的就是环境变量和 \`.env\`。现在读着理解即可。
>
> 概念篇的 Git 那篇讲过"敏感信息不能写进代码、不能提交到 Git"。这篇讲具体怎么做到。

## 什么是环境变量

环境变量是"操作系统层面的一组带名字的值"，程序运行时可以读到它们。

可以把它想成：操作系统给每个运行中的程序发了一个"环境小抄"，上面写了一些 \`名字=值\` 的条目。程序想用某个值，就按名字去小抄上查。

比如：

\`\`\`text
API_KEY=sk-abcdef123456
MODEL_NAME=deepseek-chat
\`\`\`

程序里就能按 \`API_KEY\` 这个名字取到 \`sk-abcdef123456\`。

## 为什么不直接把 Key 写在代码里

两个原因：

1. **安全**：代码会被分享、会被提交到 Git、会被别人看到。Key 写在代码里等于把钥匙挂在门外。
2. **换环境方便**：本地的 Key 和服务器上的 Key 可能不一样。用环境变量，同一份代码不用改，换个环境换个值就行。

所以规矩是：**代码里只写"按某个名字去读"，真正的值放在环境变量里**。

## 为什么用 .env 文件

一个个手动设环境变量太麻烦。常见的做法是：把所有 \`名字=值\` 写在一个叫 \`.env\` 的文件里，程序启动时让工具把这个文件读进环境变量。

\`\`\`text
# .env 文件内容
API_KEY=sk-abcdef123456
BASE_URL=https://api.deepseek.com
MODEL_NAME=deepseek-chat
\`\`\`

- \`.env\` 就是一个普通文本文件，里面一行一个 \`名字=值\`。
- \`#\` 开头是注释。
- 这个文件**只放在你自己的电脑上，不提交到 Git**（靠 \`.gitignore\` 排除它）。

## os.environ 怎么读

在 Python 里，读环境变量用 \`os.environ\`：

\`\`\`python
import os

api_key = os.environ["API_KEY"]          # 直接取，没有就报错
api_key = os.environ.get("API_KEY")      # 取，没有就返回 None（不报错）
api_key = os.environ.get("API_KEY", "")  # 取，没有就用空字符串兜底
\`\`\`

- \`os.environ\` 像一个 dict，按名字取值。
- \`os.environ["API_KEY"]\`：直接取，**如果没设这个变量会直接报错**。
- \`.get(...)\`：更稳，没有也不崩，可以给个默认值。

实际项目里一般还会用一个叫 \`python-dotenv\` 的小工具，它会在程序启动时自动把 \`.env\` 文件读进 \`os.environ\`，之后你照常用 \`os.environ.get(...)\` 就行。

## 一个完整的典型流程

\`\`\`text
1. 你在 .env 文件里写：API_KEY=sk-xxxx
2. .gitignore 里写了 .env，所以它不会被提交
3. 程序启动时，python-dotenv 把 .env 读进环境变量
4. 代码里用 os.environ.get("API_KEY") 取到 sk-xxxx
5. 用这个 key 放进请求头去调 API
\`\`\`

这样代码里从头到尾**没有出现过真实的 key**，但程序又能拿到它。这就是概念篇说的"敏感信息隔离"的具体实现。

## 安全红线（再强调一次）

- \`.env\` 永远不提交到 Git，永远不分享给别人。
- 永远不把完整 API Key 发给 AI——发给 AI 时用 \`sk-***xxxx\` 打码。
- Key 不小心泄露了，立刻去平台吊销重生成，不是"删掉文件"就没事。

## 读完这篇，你应该能

- 说出环境变量是什么、程序怎么读到它。
- 说出为什么不把 Key 写在代码里。
- 说出 \`.env\` 文件的作用，以及它为什么不能提交 Git。
- 看到 \`os.environ.get("API_KEY")\` 知道是在读环境变量里的 key。
`,Y0=`---
title: Week 0 需求采访、Spec、Plan、Tasks 与 TDD
tags:
  - week0/concept
---

# 需求采访、Spec、Plan、Tasks 与 TDD

> 阅读约 40-50 分钟 ｜ 前置：[[概念篇/认识Coding-Agent]] ｜ 全程只读，不需要真的改代码

## 本篇的原则

不要对 AI 说"帮我优化一下"。"优化"是个没标准、没法验收的词。你要先把"完成"写成可以观察、可以验证的结果。

本篇讲的是怎么把一个模糊需求，变成有目标、有范围、有验收条件的任务。Week 0 不要求你真的改代码，读懂这套方法即可。

## 一个示例任务

假设我们想让前面提到的"工作问题分诊"系统多识别一类"安全问题"（比如账号泄露、权限异常）。我们用这个任务来演示怎么把需求说清楚。注意：这只是用来演示需求写法的例子，不要求你真的去改任何代码。

## 简化任务流程

### 1. 需求采访

把需求按下面这个模板写清楚，每一项都不能少：

\`\`\`text
目标：增加"安全问题"分类。
背景：工作问题分诊需要把账号泄露、权限异常等问题交给安全负责人。
范围：只允许修改 [负责分类规则的文件] 和 [相关测试]。
非目标：不新增数据库、页面、登录、通知或模型调用。
完成条件：给定包含"账号泄露"的输入，分类结果为"安全"，原有分类不受影响。
\`\`\`

五个要素：目标、背景、范围、**非目标**、完成条件。其中"非目标"特别重要--它明确划出"什么不做"，防止需求越做越大。

### 2. 写三条验收样例

在动手之前，先写"输入和期望输出"，把"完成"具象成几条可检查的样例：

\`\`\`text
输入：账号泄露，今天必须处理
期望：分类=安全，优先级=P0

输入：权限异常，影响一个项目
期望：分类=安全

输入：普通活动排期
期望：分类=运营，不被误判为安全
\`\`\`

第三条样例特别有价值：它检查"不该被误判的情况"。很多人只写"应该怎样"，忘了写"不应该怎样"，结果系统把什么都判成安全问题。

### 3. 让 AI 生成简化 Plan

把目标和验收样例给 AI，让它输出一个计划，但**不让它改文件**：

\`\`\`text
请根据上面的目标和三条验收样例，输出：
1. 只修改哪些文件；
2. 先增加什么测试或验收样例；
3. 再修改哪一条规则；
4. 最后运行哪些命令；
5. 哪些事情明确不做。
不要修改文件。
\`\`\`

### 4. Red -> Green -> Refactor

这是一种叫 TDD（测试驱动开发）的思路，三步：

- **Red（红）**：先运行测试或验收样例，确认新行为还没有实现--此时应该是"失败"状态。这步是确认"测试真的能抓住问题"。
- **Green（绿）**：只写让当前样例通过的**最小**改动，不多做。
- **Refactor（重构）**：整理命名和结构，但**不顺便加新功能**。

这不是要求你掌握完整测试理论，而是建立一个习惯：**让验证先于"我觉得代码应该可以"**。先定好"怎样算完成"，再动手去做。

## 读完应该能写出

- 用五要素（目标 / 背景 / 范围 / 非目标 / 完成条件）写一条需求采访。
- 至少一条"不应该怎样"的验收样例。
- 说清 Red / Green / Refactor 各自要干什么。
`,X0=`---
title: Week 0 Git、配置与安全边界
tags:
  - week0/concept
---

# Git、配置与安全边界

> 阅读约 30-40 分钟 ｜ 前置：[[概念篇/JSON规则程序与输入输出]] ｜ 全程只读，不运行任何命令

## Git 本篇只理解什么

Git 是一个"版本管理工具"。你可以把它想成游戏里的存档系统，或者写论文时存"初稿""修改稿""终稿"的习惯--每次存一个快照，以后随时能回到任何一个版本。

| 词 | 解释 | 游戏存档类比 |
|---|---|---|
| Repository | 被 Git 记录变化的项目目录 | 你的整个游戏存档文件夹 |
| Commit | 一个可回看的历史快照 | 点一次"保存进度" |
| Diff | 当前修改和原版本之间的差异 | 这次存档和上次存档之间，你多了哪些装备 |
| History | 过去保存过的版本记录 | 所有存档按时间排成的列表 |
| Branch | 隔离修改路线的概念 | 另开一条"如果走邪线路线"的存档分支，不影响主线 |

Git 的价值是让修改**可追踪、可比较、可恢复**。它不会自动判断一次修改是否符合你的目标--它只负责忠实地记录。

## 认认这三个命令长什么样

Week 1 你会真正用到 Git，现在只需要认认这三条命令长什么样、各干什么，不用运行：

\`\`\`bash
git status          # 看看现在有哪些文件被改动了、哪些还没存档
git diff            # 看具体改动的内容（多了什么、少了什么）
git log --oneline   # 看历史存档记录（每条一行，简洁版）
\`\`\`

\`git status\` 告诉你"现在的状态"，\`git diff\` 告诉你"具体改了啥"，\`git log\` 告诉你"过去存过哪些版本"。三个命令回答三个不同的问题。

Week 0 不需要真的用 Git，先理解它解决什么问题。Week 1 真正用时会手把手带你走。

## 敏感信息

有些东西绝对不能放进提示词、代码、普通日志或 Git 里：

- API Key（调用模型服务用的密钥）。
- 密码、Cookie、访问令牌。
- 银行卡和身份证信息。
- 未公开的客户数据。

为什么？因为 Git 会忠实地记录所有内容，一旦提交进去，就很难彻底删掉，相当于把秘密永久存档了。

\`.env\` 是一个专门用来保存本地配置的文件，并且应该被 \`.gitignore\` 排除--\`.gitignore\` 的作用就是告诉 Git"这个文件不要记录"。购买 Coding Plan 或充值 API 时，付款动作由你本人完成，AI 只能帮助解释页面和检查脱敏后的配置。

## 安全协作提示词

以后用 Coding Agent 时，可以用下面这种模板约束它的行为，让它先分析、再动手、不乱来：

\`\`\`text
请先检查当前目录和 git status，不要修改文件。
如果存在未提交修改，请先列出文件并等待我确认。
本任务只允许读取和修改：[指定文件]。
不要删除文件，不要安装新依赖，不要上传或推送。
修改前先给出计划；完成后运行相关验证，并展示 git status --short 和 git diff。
\`\`\`

## 读完应该能回答

1. Git 解决什么问题？用"游戏存档"类比说一遍。
2. \`git status\`、\`git diff\`、\`git log\` 分别回答什么问题？
3. 为什么 API Key 不能提交进 Git？\`.gitignore\` 起什么作用？
4. 为什么 \`git diff\` 不能代替人工验收？（提示：diff 只显示"改了什么"，不显示"改得对不对"。）
`,Z0=`---
title: Week 0 完整实践与 Week 1 交接
tags:
  - week0/concept
---

# 完整实践与 Week 1 交接

> 阅读约 40-50 分钟 ｜ 前置：[[概念篇/需求采访Spec与TDD]] ｜ 全程只读，不运行任何命令

## 先理解：完整验收闭环长什么样

前面几篇讲的都是零散概念。本篇把它们串成一条完整流程。这是 Week 1 起真实动手时要走的标准流程，现在只理解每一步在干嘛：

\`\`\`text
检查目录和当前状态
  ↓
阅读相关文件
  ↓
让 Agent 输出分析和计划
  ↓
人工确认范围
  ↓
执行一个小修改
  ↓
运行测试和真实命令
  ↓
查看变更和实际输出
  ↓
对照验收样例确认
\`\`\`

几个关键节点要记住：

- **先检查状态再动手**：知道自己站在哪，别在错的地方改。
- **先出计划再确认**：不让 Agent 直接改，先看它打算干什么。
- **看证据，不看总结**：亲自运行验证命令、看实际输出和变更，而不是听"应该可以"。
- **对照验收样例**：用之前写好的"完成条件"判断，而不是凭感觉。

这条流程的本质是：把每一步都变成"可观察、可回退、可验收"的。Week 1 你会真正走一遍。

## Week 1 模型访问准备

Week 0 全程不需要 API Key；但在进入 Week 1 前，需要选择并准备一条真实模型访问路径：

- **DeepSeek 官方平台**：创建 API Key，按 API 使用量充值。
- **火山引擎方舟 Coding Plan**：订阅适合 Coding Agent 的套餐。
- 其它你能注册、付款并正常访问的官方模型服务。

**必须特别注意**：Coding Plan 套餐和普通 API 按量计费不是同一种产品，它们的 Base URL（服务入口地址）、模型名称和密钥**不能混用**。选了哪条路，就按哪条路的文档来，别把两边的配置拼在一起。

购买、充值和密钥创建由你本人完成；让 AI 帮你根据官方文档检查配置即可，但不要把完整 API Key 发给 AI。

准备好后，可以用下面这个模板让 AI 帮你核对：

\`\`\`text
我准备开始 Week 1。
模型服务：DeepSeek API / 火山引擎方舟 Coding Plan / 其他
Coding Agent：
系统：

请只根据官方文档，帮我列出：
1. 需要开通的产品；
2. Base URL；
3. 模型名称；
4. .env 变量；
5. 最小验证命令；
6. Key、余额、模型名、网络错误的排查顺序。

我不会发送完整 API Key、密码、Cookie 或付款信息。
\`\`\`

## 读完 Week 0，你应该能用自己的话回答

1. 模型、AI 应用、Agent 三者是什么关系？
2. 确定性程序和大模型在"可控性"上有什么差别？
3. 为什么不能只听 Agent 说"完成了"？
4. 一次受控修改的标准流程有哪几步？
5. 怎么把"帮我优化一下"变成可验收的任务？
6. 进入 Week 1 前，你需要准备什么？Coding Plan 和普通 API 为什么不能混用？

如果这六题你都能答上来，Week 0 就算读到位了。Week 1 会从 LLM API、Prompt 和 Agent 范式真正开始动手。
`,ef=`---
title: Week 0 常见术语表
tags:
  - week0/guide
---

# 常见术语表

| 术语 | Week 0 解释 | 后续出现 |
|---|---|---|
| LLM | 能理解和生成文本的模型 | Week 1 |
| AI 应用 | 模型与数据、界面、规则和工具组成的系统 | Week 1 |
| Agent | 能多步判断并调用工具完成目标的系统 | Week 1-4 |
| Tool | Agent 请求程序执行的能力 | Week 1 |
| Workflow | 预先组织好的步骤和分支 | Week 2 |
| Memory | 保存并召回过去信息的机制 | Week 2 |
| Guardrail | 限制输入、输出或动作的规则 | Week 3 |
| API | 程序之间约定好的调用接口 | Week 1 |
| JSON | 常见的数据交换格式 | Week 0 |
| CLI | 命令行界面 | Week 0 |
| Repository | 被 Git 管理的项目目录 | Week 0 |
| Commit | Git 历史快照 | Week 0 |
| Diff | 修改前后的差异 | Week 0 |
| Token | 模型处理文本时使用的计量单位 | Week 1 |
| Base URL | API 服务入口地址 | Week 1 |
| Coding Plan | 面向 Coding Agent 的订阅式服务路径 | Week 1 |

Week 0 只要求能用一句话说明用途，不要求记住实现细节。

`,nf=`---
title: Week 0 终端命令速查表
tags:
  - week0/guide
---

# 终端命令速查表

> 本指南为 Week 1 预习用。Week 0 全程只读、不运行命令，这里只是让你先认认这些命令长什么样。

| 命令 | 作用 | 先确认什么 |
|---|---|---|
| \`pwd\` | 显示当前目录 | 是否在项目根目录 |
| \`ls\` | 查看当前目录 | 是否看到 \`pyproject.toml\` |
| \`cd name\` | 进入目录 | 目录名是否真实存在 |
| \`cd ..\` | 返回上一级 | 是否会离开项目 |
| \`find .\` | 查看目录树 | 输出是否过长 |
| \`python --version\` | 查看 Python 版本 | 当前环境是否激活 |
| \`python -m ...\` | 按模块运行程序 | 当前目录和模块名 |
| \`git status\` | 查看 Git 状态 | 是否存在未提交修改 |
| \`git diff\` | 查看已跟踪文件差异 | 新文件要另看状态 |

## 出错时给 AI 的最小信息

\`\`\`text
系统：
当前目录：
完整命令：
完整输出/报错：
目标：
允许修改范围：
\`\`\`

`,tf=`---
title: Week 0 常见文件类型
tags:
  - week0/guide
---

# 常见文件类型

> 认文件类型属于阅读范畴，Week 0 读正文时遇到这些扩展名可以回来查。

| 类型 | 例子 | 先知道什么 |
|---|---|---|
| Markdown | \`.md\` | 课程正文和说明文档 |
| Python | \`.py\` | 可被 Python 运行的代码模块 |
| JSON | \`.json\` | 结构化输入或输出数据 |
| TOML | \`pyproject.toml\` | Python 项目和依赖配置 |
| ENV | \`.env\` | 本地敏感配置，不提交 |
| YAML | \`.yaml\`/\`.yml\` | 常见配置格式 |
| TXT | \`.txt\` | 普通文本，也可故意保存非法样例 |

不要根据扩展名猜测内容。先让 AI 或编辑器打开并解释文件用途。

`,rf=`---
title: Week 0 Coding Agent 安全清单
tags:
  - week0/guide
---

# Coding Agent 安全清单

## 每次任务前

- [ ] 当前目录正确。
- [ ] 工作范围明确。
- [ ] 已检查状态或创建备份。
- [ ] API Key、密码和个人信息已脱敏。
- [ ] Agent 先分析、再计划。

## 每次任务后

- [ ] 运行了真实验证命令。
- [ ] 看过实际输出。
- [ ] 看过 \`git status\` 或文件变化清单。
- [ ] 看过 diff，并检查是否有意外删除。
- [ ] 没有任务范围外修改。
- [ ] 没有提交或推送未经确认的内容。

## 高风险动作

删除、安装、上传、发布、推送、修改权限、执行 \`sudo\` 或处理密钥，都要先让 AI 解释影响，再由本人确认。

`,sf=`---
title: Week 0 Coding Agent 提示词模板
tags:
  - week0/guide
---

# Coding Agent 提示词模板

## 环境问题诊断

\`\`\`text
目标：
当前目录：
系统和版本：
完整命令：
完整报错：
已尝试：
允许操作范围：

请判断最可能原因，先给只读检查，再给下一条命令。
不要删除文件、修改全局配置、上传数据或索要密钥。
\`\`\`

## 只读项目分析

\`\`\`text
请只读取当前项目，不要修改文件。
请用文件名和函数名说明：入口、输入、处理、输出、错误处理和测试入口。
请指出不确定的地方，不要猜测。
\`\`\`

## 受控修改

\`\`\`text
目标：
允许修改：
禁止修改：
验收样例：

先输出计划，等待确认后再修改。
完成后运行指定验证，并展示实际输出、状态和 diff。
\`\`\`

## Week 1 配置检查

\`\`\`text
我使用的模型服务：
我使用的 Coding Agent：
我的系统：

请只使用官方文档，检查产品路径、Base URL、模型名、环境变量和最小验证方式。
我不会提供完整 API Key、密码、Cookie 或付款信息。
\`\`\`

`,of=`---
title: Week 0 Git 与 Agent 协作速查表
tags:
  - week0/guide
---

# Git 与 Agent 协作速查表

## 标准流程

\`\`\`text
查看状态 → 说明范围 → 先出计划 → 人工确认 → 修改 → 验证 → 查看状态和 diff → 人工验收
\`\`\`

## 推荐提示词

\`\`\`text
任务目标：
背景：
允许读取和修改：
明确不做：
验收标准：

请先只读分析并输出计划，不要修改。
确认后只修改允许范围。
完成后运行验证，列出实际修改文件、删除操作、命令和输出。
不要提交、推送、上传或处理密钥。
\`\`\`

## 看到这些情况先停

- Agent 想修改任务范围外的文件。
- Agent 想删除、安装、上传或推送。
- Agent 要求你把 API Key 粘贴到对话中。
- Agent 只说“应该可以”，没有命令和输出。
- \`git diff\` 为空，但 \`git status\` 显示新文件未跟踪。

`,af=`---
title: Week 0 macOS 基础操作
tags:
  - week0/guide
---

# macOS 基础操作

> 本指南为 Week 1 预习用。Week 0 全程只读、不需要动手；Week 1 真正装环境和运行命令时再照着操作。

## 打开终端

按 \`Command + Space\`，输入“终端”，回车。进入项目目录后，使用 \`pwd\` 确认位置。

## 从 Finder 进入终端

在 Finder 打开项目文件夹后，可右键选择“在文件夹位置打开终端”（具体菜单名称依系统版本可能不同）。找不到时，把截图或系统版本交给 AI。

## 常用命令

\`\`\`bash
pwd
ls
cd 文件夹名
cd ..
open .
\`\`\`

不要把 \`rm\`、\`sudo\`、\`curl | bash\` 当作普通排错命令。看不懂时先让 AI 解释影响范围。

## AI 排查提示词

\`\`\`text
我在 macOS 上操作 Week 0。
请根据我的 pwd、ls 和完整报错，判断下一步只读检查命令。
不要让我执行删除、sudo、上传或安装命令，除非先解释风险并等待确认。
\`\`\`

`,uf=`---
title: Week 0 Windows 基础操作
tags:
  - week0/guide
---

# Windows 基础操作

> 本指南为 Week 1 预习用。Week 0 全程只读、不需要动手；Week 1 真正装环境和运行命令时再照着操作。

## 打开 PowerShell

打开开始菜单，搜索 PowerShell。进入项目目录后，用 \`pwd\` 和 \`ls\` 确认位置。

## 创建和激活环境

\`\`\`powershell
py -3.11 -m venv .venv
.\\.venv\\Scripts\\Activate.ps1
python -m pip install -e ".[dev]"
\`\`\`

如果出现执行策略错误，把完整错误交给 AI；不要直接复制网上的全局策略修改命令。

## 常见路径差异

Windows 路径常见形式是 \`C:\\Users\\你的名字\\项目\`，命令中也可以使用 \`/\`。不要手工猜路径，先运行 \`pwd\`。

## AI 排查提示词

\`\`\`text
我在 Windows PowerShell 上操作 Week 0。
请根据下面的完整命令、当前目录和完整错误，告诉我下一条安全的检查命令。
不要修改执行策略、删除文件或安装不明软件。
\`\`\`

`,lf=`# AI Agent 三十天学习计划 · 第一周阅读包

> **版本**：v3.1（2026-08-10，作者 Helson）
> **本周定位**：概念 + 代码一体。每篇正文 = 概念讲解 + 代码走读 + 课后习题（含答案），一篇文章自包含，在线阅读器一页一篇。
> **与八股的关系**：本周正文讲「是什么 + 怎么实现」（L1+L2）；「为什么 / 权衡 / 面试追问」（L3）见 \`agent核心模块讲解（八股）\`。
>
> **v3.1 变更**：独立代码包（\`starter/\`）已删除，代码以逐字引用形式完整嵌入每篇正文的"代码走读"（带 \`文件:行号\` 标注），纯阅读库，无需安装环境、无需 API key。
> **v3.0 变更**：每日正文改为「概念 → 代码走读 → 课后习题 → 答案」一体格式，对齐 pi-book 体例；习题与答案从 \`自测题/\` 折入正文。

## 本周概念地图

本周 7 天建立 Agent 应用的认知地基，从「一次模型调用」走到「一个可成型的 Agent 项目」：

| 天数 | 概念 | 解决什么 | 代码走读 |
| --- | --- | --- | --- |
| **Day 1** | LLM 与 API 调用 | 把大模型理解成可调用、可计费、可约束的生成服务 | \`day01_hello_llm.py\` + \`llm.py\` + \`cost.py\` |
| **Day 2** | Prompt 工程与结构化输出 | 让模型输出能被程序稳定消费的结构化结果 | \`day02_prompt/run_eval.py\` |
| **Day 3** | Agent 范式（ReAct/Plan-Execute/Reflexion） | 模型怎么组织多步行动 | \`day03_react_minimal.py\` |
| **Day 4** | 工具调用（Function Calling） | 让模型用上外部能力，程序执行工具 | \`day04_tools/openai_weather.py\` |
| **Day 5** | RAG 基础 | 回答前先检索相关资料放进上下文 | \`day05_rag/ingest.py\` + \`rag.py\` |
| **Day 6** | 框架对比 | 按抽象层和任务形态理解框架，不按流行度选 | 本篇无代码（对比/选型是判断） |
| **Day 7** | 项目选型与 PRD | 选一个有场景、能演示、能评测的主项目 | 本篇无代码（PRD 是文档交付物） |

> 每篇正文结构固定：本篇解决一个问题 -> 一个例子 -> 这个概念是什么（L1）-> 代码走读（代码完整嵌入，逐字引用 + \`文件:行号\`）-> 为什么这样写 -> 本章小结 -> 一句话边界 -> 读完能用自己的话回答 -> 想深入 -> 交给 AI 的问题 -> 课后习题 -> 答案与解析。

## 资源全景


\`\`\`
week1-reading/
├── README.md                              ← 你正在看的这页：版本 / 总览表 / 依赖图 / 使用指南
│
├── 每日正文/                              ← 7 天主线（每篇自包含：概念 + 代码走读 + 习题 + 答案）
│   ├── day01-LLM-API基础.md
│   ├── day02-Prompt工程.md
│   ├── day03-Agent范式.md
│   ├── day04-工具调用.md
│   ├── day05-RAG基础.md
│   ├── day06-框架对比.md
│   └── day07-项目选型与PRD.md
│
├── 配套指南/                              ← 3 篇支撑（按需查阅）
│   ├── 快速通道.md                        # 60 分钟急行军（已熟手）+ 自检题
│   ├── 术语表.md                          # 40 个术语 × 掌握度 × Day 映射 + 每日目标
│   └── 周末复盘.md                        # 整周复盘 + 概念自测
│
└── 自测题/
    └── 第一周-整合自测.md                 # 周末整合自测（每日习题已折入每日正文）
\`\`\`

**总计**：1 README + 7 每日正文 + 3 配套指南 + 1 整合自测。

## 跨天依赖图

\`\`\`
day01 (模型调用能力)
  ├─→ day02 (prompt 实验复用模型调用)
  ├─→ day03 (ReAct loop 内部复用模型调用)
  │     └─→ day04 (替换为带 tools 的调用)
  ├─→ day05 (RAG 生成阶段复用模型调用)
  └─→ day06 (基线版与各框架做对照)
              └─→ day07 (PRD 选型，无代码依赖)
\`\`\`

> **关键依赖**：Day 1 建立的"模型调用"能力会被 Day 2/3/4/5 复用（代码上就是 \`llm.py\` 的 \`call_model\`）。第一遍学习按顺序读，不要跳。

## 使用指南

### 1. 第一次打开，按这个顺序看

\`\`\`
                       ┌─────────────────────────────────────┐
                       │ 0. README.md（你正在看的这页）       │
                       └────────────────┬────────────────────┘
                                        │
              ┌─────────────────────────┴─────────────────────────┐
              │                                                   │
        如果你时间紧（已熟手）                            如果你是第一次接触
              │                                                   │
              ▼                                                   ▼
   1. 配套指南/快速通道.md                                    1. 每日正文/day01
      （60 分钟急行军路线）                                       （从第一天开始）
              │                                                   │
              └─────────────────────┬─────────────────────────────┘
                                    ▼
                    2. 每日正文/day01 → ... → day07
                                    │
                                    ▼
                    3. 配套指南/周末复盘.md（周末整合）
\`\`\`

### 2. 每天的阅读动作

1. 读正文"本篇解决一个问题"和"一个例子"，建立直觉。
2. 读"这个概念是什么"（L1），理解概念。
3. 读"代码走读"：代码已完整嵌入正文，逐块看懂"怎么实现的"——引用都带 \`文件:行号\` 标注。
4. 读完"为什么这样写"和"本章小结"，对照"一句话边界"检查自己有没有踩坑。
5. 用自己的话回答"读完应该能用自己的话回答"的问题。
6. 做文末"课后习题"（4 选择 + 1 开放），**做完再翻"答案与解析"**。
7. 想深挖"为什么/权衡"见八股对应模块。

### 3. 课后习题怎么用

- **习题在每篇正文末尾**：\`## 课后习题\`（4 选择 + 1 开放），答案在文末 \`## 答案与解析\`。**先做完再翻答案**——这是反作弊的有意设计。
- **每天最后 1 道是开放题**：要求写一段完整回答（推演/设计题，**不少于 150-200 字**）。开放题没标准答案，但答案部分给出了"红线"——只写"做完了"不算通过。
- **错 2 题以上**：回到正文"这个概念是什么"和"代码走读"重读一次，**不要直接背答案**。

### 4. 卡住怎么办（按优先级排）

| 问题 | 在哪查 |
| --- | --- |
| Day 3 ReAct 跑飞 / 死循环的理解 | [\`每日正文/day03-Agent范式.md\`](day03-Agent范式.md) §"代码走读" + 课后习题 Q5 |
| 术语不确定 | [\`配套指南/术语表.md\`](03-定稿/付费群文档汇总/ai应用开发工程师三十天速成计划/week1-reading/配套指南/术语表.md)（按"必懂/听过/后学"分级 + Day 映射） |
| 时间不够 | [\`配套指南/快速通道.md\`](快速通道.md) "60 分钟急行军路线" |
| 周末不知道做什么收尾 | [\`配套指南/周末复盘.md\`](03-定稿/付费群文档汇总/ai应用开发工程师三十天速成计划/week1-reading/配套指南/周末复盘.md) "整周复盘 + 概念自测" |
| 想和 AI 讨论当天内容 | 正文末尾"交给 AI 的问题"提示词 |

## 进入 Week 2 的阅读完成标志

满足以下全部才算 Week 1 真正读完：

1. 能用自己的话讲清 LLM/API、Prompt、Agent 范式、工具调用、RAG、框架对比、项目选型各是什么。
2. 每篇正文的课后习题做完且错 ≤2 题（开放题写够字数）。
3. \`配套指南/周末复盘.md\` 的整周复盘完成（含 \`自测题/第一周-整合自测.md\`）。
4. 你能在 60 秒内向陌生人讲清楚："我第一周学了什么概念、第二周准备学什么、为什么这样排"。

## 本周最重要的判断力（贴在显示器上）

- LLM 不是知识库，而是受上下文、采样参数和指令约束的生成器。
- Prompt 工程不是写漂亮话，而是把输入、约束、输出和失败处理工程化。
- ReAct 是 Reason → Act → Observe 的循环，不等于 Profile / Memory / Planning / Tools 四大组件。
- Tool Use 的关键不在"能不能调函数"，而在模型是否能稳定选择正确工具和参数。
- RAG 的第一性问题是"把什么内容以什么粒度放进上下文"，不是"向量库选哪个"。
- 框架选型要看任务形态、调试成本、可控性、可评测性，而不是 GitHub star。
- 好 Agent 项目必须能被演示、评测、复盘和写进简历。

## 阅读包定位声明

本阅读包是 v3 学习计划的"第一周浓缩可读版"，**不替代**：
- 教科书 \`hello-agents\`（系统化教学）
- \`learn-claude-code\`（Harness 工程深读）
- 母文章《Agent 开发学习路线》（总览路线）

它的角色是**让初学者在 7 个晚上内建立工程化思维**。想深挖"为什么/权衡/面试追问"见 \`agent核心模块讲解（八股）\`。
`,cf=`---
title: Day 1 LLM API 基础
tags:
  - week1/day01
  - concept
  - code
  - exercise
---

# Day 1：LLM 与 API 调用

> 阅读约 35 分钟 ｜ 前置：无 ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/day01_hello_llm.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

很多人对大模型的印象停留在"网页里聊天的机器人"。要往 Agent 走，第一件要跨过去的坎是把大模型理解成"一个可以被程序调用、按量计费、可以被约束的生成服务"。

今天看清两件事：大模型到底是怎么产生输出的（这决定了它为什么不可靠、要怎么用），以及一次 API 调用由什么组成（输入、参数、输出、用量）。后面所有 Agent 动作，本质都是一次又一次这种调用。

**一句话主旨**：一次调用 = 程序可控的输入 + 结构化的输出 + 可核算的账本。今天的代码走读就按这三块展开。

## 一个例子

同一个问题"现在几点"，两种问法：

\`\`\`text
网页聊天：你直接打字问，它凭训练记忆回答（可能答错，因为模型不知道真实当前时间）
程序调用：你把"用户问题"作为消息发给模型 API，模型返回文本；
         如果需要真实时间，你要在程序里查好，再把它放进上下文让模型用
\`\`\`

差别在于：程序调用时，你能控制放进去什么、按多少计费、失败后怎么重试。模型只负责"基于你给的上下文预测下一段输出"。

## 这个概念是什么

**LLM（大语言模型）** 是一个根据上下文预测下一段文本的概率生成器。它读入一段文本（prompt），不断预测下一个最小单位（token），直到生成结束。

两个关键属性：

- **概率性**：同样的输入，输出可能不同。即使把采样调到最稳，也不能当成绝对确定的函数。
- **无状态**：模型本身没有记忆，每次调用从零开始。"记得之前说过什么"是靠你把历史消息重新放进上下文实现的。

调用大模型的方式是通过 API（最常见是 OpenAI 的 chat completions 接口）。你发一段消息列表，它返回一段生成文本和用量统计。接下来直接看代码——今天的三段代码正好把"输入 / 输出 / 账本"各钉死一个文件里。

## 代码走读：跟一次真实调用走完全程

代码已完整嵌入下文，先看入口，再看它依赖的两个共享模块。走读时请对照下文——下面的每一段引用都标注了 \`文件:行号\`，可以就地核对。代码里的注释都是中文的，注释本身就是讲解。

### 入口：\`day01_hello_llm.py\`（52 行，完整引用）

\`agent_app/day01_hello_llm.py:1-52\`

\`\`\`python
"""Day 1：命令行小工具——一句话进，回复 + token + 成本出。

运行：
    python -m agent_app.day01_hello_llm "你好，请用一句话介绍你自己。"
"""
from __future__ import annotations

import sys

from agent_app.cost import from_usage
from agent_app.llm import call_model


# system prompt：定义模型的行为边界（角色、语气、篇幅约束）。
# 注意它不教模型知识，只约束"怎么答"——写不清，模型就乱来。
SYSTEM_PROMPT = (
    "你是一个简洁、直接的助手。"
    "始终用一句话回答用户问题，不要寒暄。"
)


def main() -> int:
    # 命令行程序第一步：检查有没有传参数，没传就打印用法并返回错误码 1
    if len(sys.argv) < 2:
        print('usage: python -m agent_app.day01_hello_llm "你的问题"', file=sys.stderr)
        return 1

    # 把命令行里的多个词拼成一个完整问题（支持带空格的引号参数）
    user_text = " ".join(sys.argv[1:])

    # 一次调用的输入 = 消息列表（每条消息有角色）+ 采样参数 + 生成上限
    # system 定义行为边界，user 是用户问题；temperature 低一点更稳定
    resp = call_model(
        [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_text},
        ],
        temperature=0.2,
        max_tokens=256,
    )

    # 输出分三行：正文、分隔线、模型名 + 成本账本（Day 1 起就养成记账习惯）
    print(resp.text)
    print("---")
    print(f"model: {resp.model}")
    print(from_usage(resp.input_tokens, resp.output_tokens))
    return 0


# 只有直接运行本文件时才执行 main()；被 import 时不执行（Python 约定）
if __name__ == "__main__":
    sys.exit(main())
\`\`\`

逐块看：

- **第 16-19 行 \`SYSTEM_PROMPT\`**：这就是"行为边界"。它不教模型知识，只约束语气和篇幅——"一句话回答，不要寒暄"。后面所有 Agent 的 system prompt 都是这个思路的加长版。代码注释已经把这个意图写在旁边了（"写不清，模型就乱来"）。
- **第 33-40 行 \`call_model(...)\`**：一次调用的输入是**消息列表**，每条消息有角色。这里只有 \`system\`（行为边界）和 \`user\`（用户问题）两种角色。\`temperature=0.2\` 是"稳一点"的采样参数，\`max_tokens=256\` 是这次调用允许生成的最长上限——注意它同时是**成本上限**。
- **第 43-46 行输出**：\`resp.text\` 是模型生成的内容；第 46 行把 token 用量交给 \`from_usage\` 转成成本。**输出（文本）和账本（usage）一次调用同时拿到**——这就是主旨里的"输出 + 账本"。

> 为什么 \`main() -> int\` 且最后 \`sys.exit(main())\`？因为这是命令行程序：返回码 0 表示成功，让 shell 脚本能判断成败。这是工程习惯，不是模型知识。

### 共享层：\`llm.py\` 的 \`call_model\` —— 全周唯一的"打电话"入口

\`agent_app/llm.py:24-40\`

\`\`\`python
@dataclass
class LLMResponse:
    """一次调用的完整返回：文本 + 用量 + 模型名。

    字段说明：
    - text: 模型生成的正文（没有内容时是空字符串）
    - input_tokens / output_tokens / total_tokens: 本次调用消耗的 token 数（算账用）
    - model: 实际使用的模型名
    - raw: 原始 SDK 返回对象。平时用不上，但 Day 4 读 tool_calls 时靠它
    """

    text: str
    input_tokens: int
    output_tokens: int
    total_tokens: int
    model: str
    raw: Any  # 原始 SDK 对象，用于高级检查（例如 Day 4 的 tool_calls）
\`\`\`

\`LLMResponse\` 把"这次调用发生了什么"打包成六个字段：文本、三段用量、模型名、原始 SDK 对象。\`raw\` 现在用不上，但 Day 4 读 \`tool_calls\` 时就要靠它——**先留好扩展位，是工程代码的常态**。注意它的 docstring 用中文把每个字段解释了一遍，注释就是给小白看的说明书。

\`agent_app/llm.py:43-58\`

\`\`\`python
def _client() -> OpenAI:
    """从环境变量读取配置并创建 OpenAI 客户端。

    密钥写在 .env 文件里（不要提交到 git），代码里永远不出现密钥。
    缺配置时直接报错退出——与其带着空 key 发一个必失败的请求，
    不如一开始就告诉你怎么修。
    """
    api_key = os.getenv("MODEL_API_KEY")
    base_url = os.getenv("MODEL_BASE_URL")
    if not api_key or not base_url:
        raise SystemExit(
            "MODEL_API_KEY / MODEL_BASE_URL not set. "
            "Run \`cp .env.example .env\` and fill in values "
            "(see ../配套指南/国产模型配置.md for ready-to-paste configs)."
        )
    return OpenAI(api_key=api_key, base_url=base_url)
\`\`\`

密钥不进代码，从环境变量读（\`.env\` 文件），这是第一周的底线约定。缺配置时**直接报错退出**，而不是带着空 key 发一个必失败的请求——失败要失败得早、失败得清楚（docstring 里写明了这个理由）。

\`agent_app/llm.py:61-118\`（完整函数，含中文 docstring）

\`\`\`python
def call_model(
    messages: Iterable[dict],
    *,
    model: str | None = None,
    temperature: float = 0.2,
    max_tokens: int = 1024,
    tools: list[dict] | None = None,
    response_format: dict | None = None,
    **extra: Any,
) -> LLMResponse:
    """全周唯一的大模型调用函数。一次调用，同时拿到文本和用量。

    参数说明：
    - messages: OpenAI 格式的消息列表（system / user / assistant / tool）
    - model: 不传就用 .env 里的 MODEL_NAME
    - temperature: 采样温度，默认 0.2——"稳定为主、略带变化"的折中值
    - max_tokens: 生成上限，同时也是成本上限；Day 3 的循环靠它保护钱包
    - tools: 透传给 OpenAI 的工具调用协议（Day 4 用）
    - response_format: 例如 {"type": "json_object"}，要求模型输出 JSON（Day 2 用）
    - **extra: 其它参数原样转发给 chat.completions.create()

    返回：LLMResponse（text、三段 token 用量、模型名、原始对象）
    """
    client = _client()
    model_name = model or os.getenv("MODEL_NAME") or "gpt-4o-mini"

    # 组装请求参数：只把有值的可选参数传给 SDK，避免传 None 触发兼容问题
    kwargs: dict[str, Any] = {
        "model": model_name,
        "messages": list(messages),
        "temperature": temperature,
        "max_tokens": max_tokens,
    }
    if tools:
        kwargs["tools"] = tools
    if response_format:
        kwargs["response_format"] = response_format
    kwargs.update(extra)

    # 这里才是真正的网络请求：把参数一次性发给模型服务商
    resp = client.chat.completions.create(**kwargs)

    # 从返回里取出模型生成的文本和用量统计
    msg = resp.choices[0].message
    text = msg.content or ""
    usage = resp.usage

    # getattr(..., 0) or 0：部分服务商不回传 usage 字段，
    # 缺字段时记 0 而不是抛异常——账本不能因为一次异常响应就断掉
    return LLMResponse(
        text=text,
        input_tokens=getattr(usage, "prompt_tokens", 0) or 0,
        output_tokens=getattr(usage, "completion_tokens", 0) or 0,
        total_tokens=getattr(usage, "total_tokens", 0) or 0,
        model=model_name,
        raw=resp,
    )
\`\`\`

（折叠：\`estimate_cost_yuan\` 见 llm.py:120-125、健康检查 \`_health_check\` 见 131-158、命令行入口见 160-166——与今天主线无关，可跳读。）

- **为什么包这一层？** 因为 Day 2-5 都要"打电话"，如果每篇代码各写一遍 OpenAI 调用，temperature 默认值、usage 解析、错误处理会七处八个样。\`llm.py\` 的 docstring 第一句就写死了这个约定：*"Week 1 全周共享的模型调用入口（唯一真源）"*——**整个 Week 1 只有一个打电话的入口**。
- **第 61-70 行签名**：\`tools\` 和 \`response_format\` 两个参数现在传 \`None\`，是给 Day 4（工具调用）和 Day 2（JSON 输出）预留的通道——今天不需要，但入口已经长好。docstring 里把每个参数都解释了一遍，包括它们将来给谁用。
- **第 65-66 行默认值**：\`temperature=0.2\`、\`max_tokens=1024\` 是**有主见的默认值**：默认就要"稳定、可预算"，而不是 SDK 的宽松默认。
- **第 94-97 行 \`if tools:\` / \`if response_format:\`**：参数有值才传给 SDK。这避免了传 \`None\` 时某些服务商报错（注释里写了原因）。
- **第 101 行 \`resp = client.chat.completions.create(**kwargs)\`**：真正的一次网络调用，把组装好的参数一次性发出去。注释标了"这里才是真正的网络请求"——前面全是准备，到这儿才花钱。
- **第 110-117 行 \`getattr(usage, ..., 0) or 0\`**：用量字段用 \`getattr\` 兜底——**部分服务商不回传 usage**。缺字段时记 0 而不是抛异常，账本不能因为一次异常响应就断掉（注释里写明了这个理由）。

### 账本：\`cost.py\` 的 \`from_usage\`

\`agent_app/cost.py:28-44\`

\`\`\`python
def from_usage(input_tokens: int, output_tokens: int) -> CostBreakdown:
    """把 token 用量换算成成本明细。

    单价从环境变量读取（INPUT_PRICE_PER_1M / OUTPUT_PRICE_PER_1M，
    单位是"每 100 万 token 的人民币价格"）。不知道单价就填 0，
    但字段必须保留——后面所有成本分析都靠这个账本。
    """
    in_price = float(os.getenv("INPUT_PRICE_PER_1M", "0") or 0)
    out_price = float(os.getenv("OUTPUT_PRICE_PER_1M", "0") or 0)
    # 小学算术：token 数 × 单价 ÷ 1,000,000（单价是"每百万 token"的价格）
    yuan = (input_tokens * in_price + output_tokens * out_price) / 1_000_000
    return CostBreakdown(
        input_tokens=input_tokens,
        output_tokens=output_tokens,
        total_tokens=input_tokens + output_tokens,
        yuan=yuan,
    )
\`\`\`

- 单价从环境变量读（\`INPUT_PRICE_PER_1M\` / \`OUTPUT_PRICE_PER_1M\`），默认 \`0\`——**不知道单价就先记 0，但统计字段必须保留**。等你知道模型价格，把单价填进 \`.env\` 就行，代码不用改。
- 换算公式就是小学算术：\`token 数 × 每百万 token 单价 ÷ 1,000,000\`（注释里写明了）。它的价值不在数学，在**每次调用都留下这个数字**——后面做 Agent 时，"一次任务烧了多少钱"只能靠这个账本回答。

> ### 岔路：token 到底是什么？（可跳读，不影响主线）
> Token 不是中文词也不是英文单词，是 tokenizer 切出来的最小处理单位。对开发者它影响三件事：**上下文容量**（system、user、历史、工具结果都要占 token）、**延迟**（输入输出越长响应越慢）、**成本**（按 token 计费）。现在你只需要知道：token 是模型的计量单位，你的每一分钱都按它算。

## 为什么这样写

- **temperature 默认 0.2 而不是 0 或 0.7**：0 输出最确定但容易"复读"，0.7 太发散；0.2 是"稳定 + 略多样"的折中（见 \`llm.py:76\` 的 docstring 原话：*"稳定为主、略带变化"的折中值*）。
- **max_tokens 默认 1024 是硬顶而不是建议**：docstring 写明 *"生成上限，同时也是成本上限；Day 3 的循环靠它保护钱包"*（\`llm.py:77\`）——Day 3 的循环每轮都要调用，没有上限会烧钱失控。**默认值服务于未来的调用方，不只是今天的舒适**。
- **为什么把成本单独放一个文件**：\`cost.py\` 的 docstring 说得很直白：*"刻意保持很小——唯一目的就是让'这通电话花了多少钱'成为任何地方都能打印、能记录的一个普通值"*（\`cost.py:1-5\`）。
- **为什么 \`_client()\` 用 \`raise SystemExit\` 而不是抛异常**：这是 CLI 场景——缺配置属于"程序没法继续"的硬错误，直接以非零码退出，比让上层 try/except 一个 \`ValueError\` 更诚实（docstring 里写明了：*"不如一开始就告诉你怎么修"*）。

## 本章小结

- LLM 是概率生成器 + 无状态：记忆靠你把历史放回上下文，可靠性靠约束不靠运气。
- 一次调用 = 消息列表（system/user/assistant/tool 角色）+ 采样参数 + token 上限，返回文本 + 用量。
- \`llm.py\` 是全周唯一的调用入口，\`LLMResponse\` 把文本、用量、模型名一次打包。
- 账本习惯：每次调用记 input/output token 和估算成本，\`cost.py\` 负责换算。
- 这一处是"一次调用"的事——后面所有 Agent 动作都只是把这种调用组织成循环和分支，**核心没变复杂**。

## 一句话边界

- LLM 是概率生成器，不是确定性函数；temperature 只调随机性，不补知识。
- 模型本身无状态，"记忆"靠你把历史放回上下文。
- 每次调用都要记 token 和成本，这是后面所有成本分析的账本。
- System prompt 是行为边界，写不清模型就乱来。

## 读完应该能用自己的话回答

1. LLM 是怎么产生输出的？为什么说它是"概率生成器"？
2. 一次 API 调用的输入由什么组成？system / user / assistant 角色各干什么？
3. temperature 调低能让模型"不胡说"吗？为什么？
4. Token 影响哪三件事？为什么每次调用都要记录用量？
5. 模型本身有记忆吗？多轮对话里"记得之前说过什么"是怎么实现的？
6. 为什么全周要共用一个 \`call_model\`？\`LLMResponse.raw\` 是留给谁的？

## 想深入

LLM 的训练机制、tokenization 原理、采样参数的数学含义等，见八股·07 大模型基础。

## 交给 AI 的问题

\`\`\`text
我正在学怎么用程序调用大模型。请解释：1) 大模型是怎么产生输出的；2) 一次 API 调用要传什么、会返回什么；3) token 是什么、为什么重要；4) temperature 调低能不能防止模型胡说。不要给完整代码，不要引入框架名称。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. Token**

一次 LLM 调用里，为什么要记录输入 token 和输出 token？

A. 为了让模型自动选择更大的上下文窗口
B. 为了评估上下文容量、延迟和成本
C. 为了让 system prompt 优先级更高
D. 为了避免模型产生任何幻觉

**Q2. Temperature**

把 \`temperature\` 调低最直接影响的是什么？

A. 采样时输出分布的发散程度
B. 模型可访问的事实知识范围
C. 单次请求允许的最大上下文长度
D. 输入和输出 token 的计费单价

**Q3. System Prompt**

System Prompt 在工程调用中最适合承担什么职责？

A. 存储所有业务数据
B. 替代检索系统回答事实问题
C. 定义角色、目标、边界和输出格式
D. 自动修复 SDK 版本兼容问题

**Q4. 成本**

一个 CLI 只打印模型回复，不打印 usage。最主要的问题是什么？

A. 无法判断 prompt 修改前后的消耗变化
B. 后续无法解释调用成本和上下文消耗
C. 无法区分 system prompt 和 user prompt 的优先级
D. 无法判断 temperature 是否设置成功

### 开放题（1 道）

**Q5. 复盘题（推演）**：假设你把 \`temperature\` 从 0 调到 1.2，对同一个问题各问 5 次——描述你预期观察到的差异：输出稳定性会怎么变化、token 用量是否有规律、有没有可能出现明显违背 system prompt 的回复；如果允许你运行实验，你会怎么设计它（控制什么变量、记录什么、怎么对比）；同一问题不同温度下，你愿意把哪个版本接入业务，为什么？**不少于 200 字**，要包含至少一个具体例子。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | token 同时决定上下文占用、延迟和计费，是后续做 Agent 成本治理的基础。A 错：上下文窗口由模型决定，不是 token 计数选择的。C/D 与 token 计数无关。 |
| Q2 | **A** | temperature 控制采样发散程度，不增加知识、不保证事实正确。降到 0 也只是采样更确定，不代表答案对。 |
| Q3 | **C** | system prompt 是行为边界和输出协议；不是数据库（A）、不能替代检索（B）、不能修复 SDK 版本（D）。 |
| Q4 | **B** | 没有 usage，无法解释一次任务为什么变慢/变贵，也无法对比两版 prompt 的 token 影响。A 是 B 的子集，B 范围更准确。 |

### 开放题参考思路

**Q5. temperature 推演**：合格答案至少要谈到 3 点：

1. **稳定性差异**：应预判高 T 下同问题输出会出现明显改写（句式、举例、结论顺序）；低 T 下趋同但不绝对（即使 T=0，部分模型仍非确定性）。
2. **token 用量**：应预判高 T 不一定 token 更多，因为模型会"风格漂移"而不是"内容增多"——要敢于推翻"温度高=啰嗦"的直觉。
3. **业务选择**：要写出选择标准（"我会选 T=0.3，因为业务对结论稳定的容忍度高于多样性"），而不是"我觉得都行"。

实验设计是否合格，看两点：是否说清控制变量（同一问题、同一模型、只改 temperature，各问 5 次）与记录内容（输出全文、token 用量、是否违反 system prompt），以及是否给出对比判据（先看稳定性，再看 token 变化，最后落到业务取舍）。

**红线**：如果复盘只写"输出更随机了"，没有具体例子，没有业务判断，**不算通过**——这条复盘题的目的是训练你"用证据说话"的工程习惯。
`,df=`---
title: Day 2 Prompt 工程与结构化输出
tags:
  - week1/day02
  - concept
  - code
  - exercise
---

# Day 2：Prompt 工程与结构化输出

> 阅读约 35 分钟 ｜ 前置：[[day01-LLM-API基础]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/day02_prompt/run_eval.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

Agent 工程里，模型的输出经常不是给人看的，而是给下一段代码、下一个工具看的。只要输出格式不稳定，后面的链路就会崩。所以 Prompt 工程的重点不是"写出更像人话的提示词"，而是让模型输出可以被程序稳定消费的结构化结果。

今天要看清：怎么把任务约束写清楚、怎么用样例校准模型、怎么让自然语言输出变成可验证的数据结构。

**一句话主旨**：prompt 是一份协议，输出要过两道关——格式关（JSON）和内容关（业务校验）。今天的代码走读就按"协议 → 样例 → 校验 → 评分"这条链路展开。

## 一个例子

从一张发票文本里提取信息，两种写法：

\`\`\`text
坏 prompt：帮我提取这张发票的信息。
  -> 模型不知道要提取哪些字段、缺失怎么处理、输出什么格式，每次返回都不一样

好 prompt：你是发票抽取器。只输出 JSON，字段是 invoice_no/seller/buyer/amount/tax/date，
          原文没有就填 null，金额只保留数字。
  -> 模型每次返回同样结构的 JSON，程序能稳定解析
\`\`\`

差别在于：后者把"要做什么、要哪些字段、缺失怎么办、输出什么格式"都写清楚了。

## 这个概念是什么

**Prompt 工程** 是把给模型的任务写成一份清楚的协议：输入是什么、要做什么、输出什么格式、哪些不能编造。它的目标是降低歧义，不是"请求更礼貌"。

**结构化输出** 是让模型的输出符合固定格式（通常是 JSON），这样程序能稳定解析。但结构化输出只保证格式对，不保证内容对--JSON 合法不代表字段值正确，还得校验。

### 把指令分层写清

一个清楚的 prompt 通常包含这几块：

- **角色**：你是谁（"你是发票抽取器"）。
- **任务**：要做什么（"从发票文本提取字段"）。
- **背景**：需要知道什么、约束是什么。
- **输出格式**：必须输出什么结构（"只输出 JSON"）。
- **约束**：缺失怎么办、不能编造什么、金额日期怎么规范化。

其中输出格式和约束最容易被漏，也最影响稳定性。

### Few-shot：用样例校准边界

Few-shot 是给模型看几个"这个任务里什么算对"的样例。价值不在数量多，而在覆盖边界：

- 给一个标准样例（字段齐全、格式规范）。
- 再给异常样例（字段缺失、金额含中文大写、日期格式不统一、买卖方容易颠倒）。

好样例覆盖边界，坏样例只是浪费 token。

### CoT：让模型内部推理

CoT（思维链）让模型先推理再答，适合多步推理、数学、规划。但生产系统里通常不把推理过程直接给下游解析（难稳定解析），而是让模型"在内部判断，最终只输出 JSON"。

### 结构化输出的几种做法

| 做法 | 适合 | 要点 |
|---|---|---|
| JSON mode / schema | SDK 支持结构化输出 | 稳定易解析，但仍需业务校验 |
| Pydantic + Instructor | Python 项目，要类型校验和重试 | 类型清晰，错误可反馈给模型修正 |
| XML tag | 长文任务，混合文本和结构 | 边界清楚，但解析约束弱于 schema |

### 结构化 ≠ 正确

JSON 合法只说明格式对。你还要校验：金额是不是数字、日期规不规范、必填字段有没有缺、金额合计对不对。"格式能解析"和"字段值对"是两类问题，要分开记录。

## 代码走读：一条"协议 → 样例 → 校验 → 评分"的抽取链路

本篇走读 \`agent_app/day02_prompt/run_eval.py\`，正文统一写作 \`agent_app/day02_prompt/\`。整份文件 196 行，依次处理 4 个评测样本，每个样本打印字段级正确率和本次调用成本。先看文件头——docstring 就是整份文件的阅读地图。

### 先看地图：模块 docstring

\`agent_app/day02_prompt/run_eval.py:1-11\`

\`\`\`python
"""Day 2：few-shot 发票抽取 + 结构化输出 + pydantic 校验。

运行：
    python -m agent_app.day02_prompt.run_eval

这份代码演示四件事（也是 Day 2 正文走读的主线）：
1. prompt 是一份协议：角色 / 任务 / 输出格式 / 约束，缺一项模型就只能猜。
2. few-shot 样例用来校准边界：给"什么算对"，尤其给异常样例。
3. JSON mode 只保证格式对，pydantic 才校验内容对。
4. "能解析成 JSON" ≠ "答案正确"——评分时两者分开记。
"""
\`\`\`

…（折叠：import 区，见 \`run_eval.py:12-21\`——\`json\`/\`dataclass\`/\`typing\`、pydantic 的 \`BaseModel\`/\`Field\`/\`ValidationError\`，以及 Day 1 的 \`from_usage\` 和 \`call_model\`，都是后面要用到的器件。）

- **第 7 行 "prompt 是一份协议"**：一句话点题——prompt 不是"请求"，是协议。协议要有字段名、有缺失规则、有输出格式，缺一项模型就只能猜。
- **第 9-10 行**：把"格式"和"内容"分开声明：JSON mode 只保格式，pydantic 验内容；"能解析成 JSON" ≠ "答案正确"，评分时两者分开记。这四行就是今天全部概念的压缩包。

### 协议本体：SYSTEM_PROMPT

\`agent_app/day02_prompt/run_eval.py:28-37\`

\`\`\`python
SYSTEM_PROMPT = """你是一个发票抽取器。从用户提供的发票文本中提取字段。
只输出 JSON，不要输出任何解释。
字段：
- invoice_no: string，发票号码，原文没有就填 null
- seller: string，销售方名称，原文没有就填 null
- buyer: string，购买方名称，原文没有就填 null
- amount: number，价税合计金额（只保留数字，去掉货币符号和单位），
          原文用中文大写金额时换算成数字，无法换算就填 null
- tax: number，税额，原文没有就填 null
- date: string，开票日期，统一为 YYYY-MM-DD，原文没有就填 null"""
\`\`\`

> 注意第 35 行的缩进是字符串内容的一部分（三引号长字符串里的续行），不是代码排版——原样搬进消息的 system prompt 就是这个样子。

逐块对照"协议分层"：

- **角色**（第 28 行）："你是一个发票抽取器"——一句话定身份，模型知道自己在干什么。
- **任务 + 输出格式**（第 28-30 行）：提取字段、只输出 JSON、不要解释。解释文本是下游解析的头号杀手，所以第一条约束就是"不要输出任何解释"。
- **字段协议**（第 31-37 行）：6 个字段，每个都写清"类型 + 规则"。为什么每个字段都跟一句"原文没有就填 null"？因为缺失是常态，不写死缺失规则，模型就会"自由发挥"补一个看似合理的值——这正是自测题 Q1 的陷阱。
- **规范化规则**（第 34-35 行）：金额要"只保留数字、去掉货币符号和单位"，中文大写要换算成数字，无法换算才填 null；日期统一成 \`YYYY-MM-DD\`。为什么要单独花两行写这些？因为同一件事在真实发票里有无数种写法（"¥1130.00"、"人民币贰仟元整"、"2025/6/30"），不规定标准形态，字段值就无法被程序稳定比较。

为什么这里要放在 system 角色里，而不是每条消息都写一遍？因为 system 是"一次对话的全局行为边界"，只发一次，全轮生效——这正是 Day 1 说的 system prompt 是行为边界的延续。

### 边界样例：FEW_SHOT_EXAMPLES

\`agent_app/day02_prompt/run_eval.py:39-66\`

\`\`\`python
# few-shot：先给一个标准样例（字段齐全），再给一个边界样例
# （字段缺失、中文大写金额、日期格式不统一）——好样例覆盖边界，坏样例只浪费 token
FEW_SHOT_EXAMPLES: list[tuple[str, dict[str, Any]]] = [
    (
        "发票号码：12345678 销售方：北京云启科技有限公司 购买方：杭州星火网络有限公司 "
        "价税合计：¥1130.00 税额：130.00 开票日期：2025年3月14日",
        {
            "invoice_no": "12345678",
            "seller": "北京云启科技有限公司",
            "buyer": "杭州星火网络有限公司",
            "amount": 1130.0,
            "tax": 130.0,
            "date": "2025-03-14",
        },
    ),
    (
        "发票号码：87654321 销售方：上海晨光贸易有限公司 购买方：个人 "
        "价税合计：人民币贰仟元整 开票日期：2025年1月5日",
        {
            "invoice_no": "87654321",
            "seller": "上海晨光贸易有限公司",
            "buyer": "个人",
            "amount": 2000.0,
            "tax": None,
            "date": "2025-01-05",
        },
    ),
]
\`\`\`

- **为什么只有两条？** 注释就是设计意图："标准样例 + 边界样例"。第一条字段齐全、格式规范，是"什么算对"的锚；第二条集中塞了三个边界——购买方是"个人"（缺失的另一种形态）、金额是中文大写"人民币贰仟元整"（要换算成 \`2000.0\`）、没有税额（要输出 \`None\`）。样例的价值在覆盖边界，不在数量——两条就锚定了最易错的三个点。
- **为什么样例是 (text, json) 一对对的？** 因为 few-shot 要以"用户提问 → 助手正确回答"的对话形式喂给模型，模型才学得会"输入这种文本 → 输出这种 JSON"。后面 \`build_messages\` 里你会看到这对结构怎么展开成消息。
- **为什么第二条的 \`tax\` 期望是 \`None\`？** 这是在用样例教模型"原文没有就填 null"——概念部分说的缺失规则，不只是写进 system prompt，还要用样例演示一遍。

### 业务校验：Invoice 模型

\`agent_app/day02_prompt/run_eval.py:69-82\`

\`\`\`python
class Invoice(BaseModel):
    """业务模型：字段类型 + 业务规则。

    JSON 合法只说明"格式对"；这里才是"内容对"的关卡——
    发票号必须是 8 位数字、金额不能为负、日期必须是 YYYY-MM-DD。
    校验失败会抛 ValidationError，由 extract_invoice 捕获并报告。
    """

    invoice_no: str | None = Field(default=None, pattern=r"^\\d{8}$")
    seller: str | None
    buyer: str | None
    amount: float | None = Field(default=None, ge=0)
    tax: float | None = Field(default=None, ge=0)
    date: str | None = Field(default=None, pattern=r"^\\d{4}-\\d{2}-\\d{2}$")
\`\`\`

- **为什么 JSON 解析之后还要 pydantic 再验一遍？** docstring 第一句就是答案："业务模型：字段类型 + 业务规则。"它接着说："JSON 合法只说明"格式对"；这里才是"内容对"的关卡——发票号必须是 8 位数字、金额不能为负、日期必须是 YYYY-MM-DD。" JSON 只保证语法，不保证字段值合理——模型完全可能输出 \`"amount": "1130 元"\`（字符串带单位）或 \`"date": "2025年3月14日"\`（原始格式），这些都能通过 \`json.loads\`，但通不过这里的业务规则。
- **规则怎么写的？** \`pattern=r"^\\d{8}$"\` 是正则校验：发票号必须恰好 8 位数字；\`ge=0\` 是"大于等于 0"：金额、税额不能为负。字段类型（\`float\`/\`str\`）本身也是校验——模型输出 \`"amount": "abc"\` 会直接抛 \`ValidationError\`。
- **为什么默认值是 \`None\`？** 每个字段都允许缺失，缺失记 \`null\`（对应 protocol 里的"原文没有就填 null"）。协议、样例、模型三层说的是同一套缺失规则。

> ### 岔路：pydantic 是什么？（可跳读，不影响主线）
> pydantic 是 Python 的数据校验库：声明字段类型和规则，实例化时自动校验。\`Field(pattern=...)\` 是正则校验，\`Field(ge=0)\` 是数值下界。Week 2/3 做 Agent 的结构化输出还会反复用到它。现在你只需要知道：它把"格式对"和"内容对"两道关分开，坏数据进业务前就被拦下。

### 评测样本：SAMPLES（含负例）

每个样本先由 \`Sample\` 数据类包成一对：原始发票文本 + 人工标注的期望字段。

\`agent_app/day02_prompt/run_eval.py:89-92\`

\`\`\`python
@dataclass
class Sample:
    text: str          # 喂给模型的发票文本
    expected: dict[str, Any]  # 标准答案（人工标注，用于打分）
\`\`\`

- **为什么把样本包成数据类？** 评测的本质是"拿着标准答案对答案"：\`text\` 是输入，\`expected\` 是标准答案，\`grade\` 拿模型输出和它逐字段比。标准答案和被测对象分离，评分才有意义。

\`SAMPLES\` 共 4 条，前 3 条是三种典型输入，第 4 条是故意设计的负例：

\`agent_app/day02_prompt/run_eval.py:95-122\`

\`\`\`python
SAMPLES: list[Sample] = [
    …（折叠：样本 1-3，见 run_eval.py:96-115——分别是字段齐全的正常发票、含中文大写金额且缺购买方（日期为 2025/6/30）、只有金额的定额发票）
    # 负样本：发票号只有 5 位、金额为负——业务校验必须拒绝（故意的坑）
    Sample(
        text="发票号码：97531 销售方：某公司 价税合计：-50 元",
        expected={"invoice_no": "97531", "seller": "某公司", "buyer": None,
                  "amount": None, "tax": None, "date": None},
    ),
]
\`\`\`

- **为什么 \`expected\` 里 \`amount\` 是 \`None\`？** 注释写得很直白："负样本：发票号只有 5 位、金额为负——业务校验必须拒绝（故意的坑）"。发票号 \`97531\` 只有 5 位（不满足 \`^\\d{8}$\`）、金额是 \`-50\`（违反 \`ge=0\`）——就算模型输出合法 JSON，\`Invoice\` 校验也会把这条样本判成错误。负例的作用是验证"坏输入确实会被业务规则拦下"，没有它，评测会显得什么都能过。
- **为什么前 3 条要覆盖不同形态？** 评测样本不是越多越好，而是每种边界来一个：正常、中文大写 + 缺字段 + 不规范日期、极简定额发票。这和 few-shot 的思路完全一致——用最少样本覆盖最宽边界。

### 链路一：build_messages —— 把协议和样例装进消息列表

\`agent_app/day02_prompt/run_eval.py:129-138\`

\`\`\`python
def build_messages(sample_text: str) -> list[dict]:
    """组装消息列表：system（协议）+ few-shot 问答对 + 当前样本。"""
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    for example_text, example_json in FEW_SHOT_EXAMPLES:
        # few-shot 的格式：user 给样例原文，assistant 给样例的标准答案
        messages.append({"role": "user", "content": example_text})
        messages.append({"role": "assistant",
                         "content": json.dumps(example_json, ensure_ascii=False)})
    messages.append({"role": "user", "content": sample_text})
    return messages
\`\`\`

- **为什么 few-shot 要按 user/assistant 交替塞？** 模型只认"对话格式"。要让模型学会"输入这种发票文本 → 输出这种 JSON"，就得把样例伪装成一轮真实的问答：\`user\` 发样例文本，\`assistant\` 回正确 JSON。最后一条 \`user\` 才是真正要提取的发票。
- **为什么 \`json.dumps(..., ensure_ascii=False)\`？** 把样例 dict 序列化成 JSON 字符串时，不转义中文——否则中文会变成 \`\\u5317\\u4eac...\`，样例的可读性和示范效果都会打折扣。
- **消息顺序为什么是 system → 样例 → 真问题？** 这就是 Day 1 说的"输入 = 消息列表"，今天只是把消息列表组织得更讲究：全局协议在前，示范在后，具体问题最后。整条链路的起点还是 \`call_model\`——Day 1 那个唯一的打电话入口。

### 链路二：extract_invoice —— 三道关卡一次走完

\`agent_app/day02_prompt/run_eval.py:141-158\`

\`\`\`python
def extract_invoice(sample_text: str) -> tuple[dict | None, str | None, LLMResponse]:
    """走完整链路：调模型 → 解析 JSON → pydantic 校验。

    返回 (发票字典, 错误信息, 原始响应)。error 不为空说明内容不可用；
    raw_response 带着 usage，用于打印成本账本。
    """
    resp = call_model(build_messages(sample_text),
                      response_format={"type": "json_object"},
                      temperature=0, max_tokens=512)
    try:
        raw = json.loads(resp.text)  # 第一道关：JSON 能不能解析
    except json.JSONDecodeError as exc:
        return None, f"JSON 解析失败: {exc}", resp
    try:
        invoice = Invoice(**raw)     # 第二道关：内容过不过业务规则
    except ValidationError as exc:
        return None, f"业务校验失败: {exc.errors()[0]['msg']}", resp
    return invoice.model_dump(), None, resp
\`\`\`

- **为什么用 \`response_format={"type": "json_object"}\`？** 这是 JSON mode：要求服务商只返回合法 JSON。它把"输出格式"这道约束从 prompt 里升级成平台级保证——但注意，它只保证格式合法，不保证字段正确，所以后面还有两道校验。
- **为什么是两道 try 而不是一道？** 两种失败的本质不同：第一道 \`json.JSONDecodeError\` 是"解析不成 JSON"（模型格式错），第二道 \`ValidationError\` 是"JSON 合法但业务不合法"（内容错）。错误信息用不同前缀（\`JSON 解析失败\` / \`业务校验失败\`）区分，评测时能精确归因。
- **为什么失败路径也返回 \`resp\`？** docstring 写死了约定："raw_response 带着 usage，用于打印成本账本"——调用已经烧了钱，账本必须记，不能因为结果不好就把这次调用抹掉。
- **为什么成功时返回 \`model_dump()\`？** \`Invoice\` 实例转回普通 dict，\`grade\` 才能用 \`expected.items()\` 逐字段比对；同时 \`model_dump()\` 的输出顺序和字段名是稳定的，打印也整齐。

### 链路三：grade —— 评分标准写死在程序里

\`agent_app/day02_prompt/run_eval.py:161-170\`

\`\`\`python
def grade(invoice: dict | None, error: str | None,
          expected: dict[str, Any]) -> tuple[int, int]:
    """按字段打分：返回 (答对数, 字段总数)。出错时整条记 0 分。"""
    if error:
        return 0, len(expected)
    correct = 0
    for key, want in expected.items():
        if invoice.get(key) == want:
            correct += 1
    return correct, len(expected)
\`\`\`

- **为什么评分用最简单的大于比较，而不是让模型自评？** 评测标准必须写死在程序里：\`expected\` 的每个字段和模型输出严格相等才算对。让模型自己评自己，等于让考生给自己打分——那不是评测，是表演。
- **为什么有 error 时整条记 0 分？** 字段级评分的前提是"字段都在"；解析失败或校验失败意味着这条样本根本没产出可用结果，记 \`0, len(expected)\`（全错）而不是跳过——评测不允许模糊地带。
- **为什么返回 \`(correct, total)\` 而不是正确率小数？** 主流程要打印"正确 4/6"，分子分母都保留，读者一眼看出错在哪几个字段；小数反而丢信息。

### 入口：main —— 评分和账本一起打印

\`agent_app/day02_prompt/run_eval.py:173-192\`

\`\`\`python
def main() -> int:
    print("== Day 2: few-shot structured extraction + validation ==")
    for i, sample in enumerate(SAMPLES, start=1):
        invoice, error, resp = extract_invoice(sample.text)
        correct, total = grade(invoice, error, sample.expected)
        cost = from_usage(resp.input_tokens, resp.output_tokens)
        print(f"\\n[样本 {i}] 正确 {correct}/{total}  | 本次调用: {cost}")
        if error:
            print(f"  ✗ 错误: {error}")
        if invoice:
            # 逐字段打勾/打叉，一眼看出模型错在哪
            for key, value in invoice.items():
                mark = "✓" if value == sample.expected.get(key) else "✗"
                print(f"  {mark} {key}: {value!r}"
                      + (f" (期望 {sample.expected.get(key)!r})"
                         if value != sample.expected.get(key) else ""))
    print("\\n== 提示 ==")
    print("每次调用都打印 usage（Day 1 的账本习惯）。"
          "对比 few-shot 和零样例的 token 消耗，是 Day 2 的开放题素材。")
    return 0
\`\`\`

- **为什么每个样本都打印 \`cost\`？** Day 1 的账本习惯直接延续：\`extract_invoice\` 返回的 \`resp\` 带着 usage，\`from_usage\` 换算成金额。评测不只关心正确率，也关心每次调用烧多少 token——Prompt 工程的每次改动都要能量化成本影响。
- **为什么逐字段打 ✓/✗？** 评测的价值在"哪个字段错了"，不是一个总分。第 185 行的 \`mark\` 按 \`value == sample.expected.get(key)\` 判定，错的字段还会附上期望值——这正是开放题里"字段级准确率"指标的计算方式：答对字段数 ÷ 字段总数。
- **结尾的"== 提示 =="点的是成本意识**：few-shot 每轮多塞两条样例消息，token 消耗自然更高——Prompt 的每次改动都要能量化消耗，这正是 Day 1 账本习惯的延续。

整条链路串起来看：**system（协议）→ few-shot（样例校准）→ JSON mode（格式保障）→ pydantic（业务校验）→ grade（字段评分）→ cost（成本账本）**。每一步都在回答同一个问题：模型输出能不能被程序稳定消费？

## 为什么这样写

- **JSON mode 与 pydantic 双层把关、职责分开**：\`Invoice\` 的 docstring 写得很直白——*"业务模型：字段类型 + 业务规则。"*（\`run_eval.py:70\`），紧跟的 docstring 又点明 *"JSON 合法只说明"格式对"；这里才是"内容对"的关卡"*（\`run_eval.py:72\`）。\`response_format\` 只保格式，业务规则（发票号 8 位、金额非负、日期格式）归 pydantic，两类错误在 error 前缀里分得清清楚楚。
- **Few-shot 只放 2 条，宁缺毋滥**：注释说 *"先给一个标准样例（字段齐全），再给一个边界样例（字段缺失、中文大写金额、日期格式不统一）"*（\`run_eval.py:39-40\`）。样例的价值是锚定边界，不是堆数量——两条就把"缺失填 null、中文大写换算、日期规范化"三个最易错点钉死。
- **评测场景用保守参数 \`temperature=0, max_tokens=512\`**（\`run_eval.py:149\`）：评测要可复现，随机性越低越好；512 对一条发票 JSON 足够，比 Day 1 的默认 1024 更省。生产场景可能用更高温度换多样性，评测场景永远优先确定性。
- **失败路径也保留 \`resp\`，账本不断**：\`extract_invoice\` 的 docstring 约定 *"error 不为空说明内容不可用；raw_response 带着 usage，用于打印成本账本"*（\`run_eval.py:144-145\`）——调用已经花钱，账本不能因为结果不好就断。
- **评分标准写死在程序里，不信任模型自评**：\`grade\` 的 docstring 只有一句 *"按字段打分：返回 (答对数, 字段总数)。出错时整条记 0 分。"*（\`run_eval.py:163\`）——期望字段与模型输出严格相等才算对，标准答案和被测对象分离，评测才有意义。

## 本章小结

- Prompt 工程 = 把任务写成协议：角色、任务、输出格式、约束，每块都写清楚；输出格式和约束最容易被漏，也最影响稳定性。
- Few-shot 用"标准样例 + 边界样例"校准模型，价值在覆盖边界不在数量；每条样例都是"输入文本 → 正确输出"的一问一答。
- 结构化输出只保证格式：JSON mode 管语法，pydantic 管业务规则，两道关分开记；"能解析成 JSON" ≠ "答案正确"。
- 评测样本 = 文本 + 标准答案，\`grade\` 逐字段严格比对，失败整条记 0；每次调用都打成本，Prompt 改动要能量化消耗。
- 这一处是"让输出可被程序消费"的事——后面 Day 3 的 ReAct 循环也只是把这种"消息列表 + 校验 + 评分"组织进循环，**核心没变复杂**。

## 一句话边界

- Prompt 工程的目标是降低歧义，把任务协议写清楚。
- 结构化输出只保证格式对，不保证内容对，还要业务校验。
- Few-shot 的价值在覆盖边界，不在数量多。
- 生产里别把模型的长篇推理直接给下游解析。

## 读完应该能用自己的话回答

1. Prompt 工程的目标是什么？坏 prompt 和好 prompt 的差别在哪？
2. 一个清楚的 prompt 通常要写清哪几块？哪两块最容易被漏？
3. Few-shot 的价值是什么？好样例和坏样例的区别？
4. 结构化输出有哪几种做法？为什么"JSON 能解析"不等于"答案正确"？

## 想深入

Prompt 的软约束性质、注入防御、prompt cache 等权衡，见八股·09 Prompt 工程。

## 交给 AI 的问题

\`\`\`text
我正在学 Prompt 工程。请解释：1) Prompt 工程的目标是什么；2) 一个清楚的 prompt 要写清哪几块；3) Few-shot 怎么帮模型校准；4) 为什么"输出能解析成 JSON"不等于"答案正确"。用"从一段文字提取信息"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. Prompt**

一个抽取任务的 prompt 只写"帮我提取信息"。最大的问题是什么？

A. 字段名可能按模型习惯自由发挥
B. 任务字段、格式和缺失规则不明确
C. 模型可能把缺失字段猜成看似合理的值
D. 输出可能混合解释文本和结构化数据

**Q2. Few-shot**

Few-shot 示例最重要的价值是什么？

A. 把所有业务规则都转移到样例里，正文不用再写约束
B. 校准任务边界和期望输出
C. 保证模型输出的每个字段都事实正确
D. 让模型自动选择最便宜的供应商

**Q3. CoT**

在结构化抽取任务中，比较稳妥的 CoT 使用方式是什么？

A. 要求模型先输出推理过程，再让下游从推理文本里找字段
B. 要求模型内部检查，但最终只输出 JSON
C. 只要任务包含 JSON，就不允许模型做任何中间判断
D. 把 CoT 当成字段校验器，省掉程序校验

**Q4. JSON**

模型输出了合法 JSON，这能证明什么？

A. 输出格式可解析
B. 字段含义一定符合业务预期
C. 缺失字段一定都被正确识别
D. 买方和卖方一定不会混淆

### 开放题（1 道）

**Q5. 三版 prompt 的推演与验证设计**：假设你在做一个发票抽取任务，字段是 \`invoice_no/seller/buyer/amount/tax/date\`，缺失填 null。你迭代了三版 prompt：

- **v1**：只写"从发票文本提取以上字段"。
- **v2**：v1 + "只输出 JSON，不要解释" + 每个字段的缺失规则（原文没有就填 null）。
- **v3**：v2 + 规范化规则（金额只保留数字、中文大写换算成数字；日期统一为 YYYY-MM-DD）+ 一条"购买方为个人、金额为中文大写"的边界样例。

不运行任何代码，纯靠推演回答：

1. **预期现象**：三版在字段级准确率上的相对排序是什么？每一版最可能在哪个字段上失败、失败模式是什么（例如日期格式不统一、金额带单位、缺失被填默认值）？
2. **验证方案**：如果要在真实模型上验证"v3 确实优于 v2"，评测该怎么设计？样本集要覆盖哪些边界？字段级准确率怎么算？只看总分够不够，要不要看失败 case 明细？
3. **判断标准**：什么证据出现才叫"v3 比 v2 好"？什么证据说明"改动没生效"？如果 v3 仍有一个字段失败，你下一步改什么？

回答时**禁止**用"v3 提示词更详细"这类空话——所有判断要落到具体字段、具体失败模式、具体改动点。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | 没有字段、类型、缺失规则和输出协议，模型只能猜。A/C/D 都是 B 的衍生症状。 |
| Q2 | **B** | Few-shot 是"用样例锚定边界"，不是把规则全部塞进样例（A 是常见误区）。C/D 都不是 few-shot 能保证的。 |
| Q3 | **B** | 生产链路要稳定结构；推理可以内部化但最终输出保持可解析。A 是把推理过程暴露给下游，会让解析极其脆弱。 |
| Q4 | **A** | JSON 合法 ≠ 字段事实正确，这是结构化输出最容易被误判的一点。 |

### 开放题参考思路

**Q5. 三版 prompt 的推演与验证设计**：合格答案要包含：

1. **推演出 3 类以上失败模式，并落到具体字段**：例如 v1 没写输出协议，最可能输出解释文本混着 JSON，\`date\` 字段格式不统一；v2 缺规范化规则，\`amount\` 字段仍可能带"元/¥"或保留中文大写；v3 若没覆盖某边界（如购买方缺失、故意负例），对应字段仍会错。每类失败模式都要说清"哪个字段 + 哪版 prompt 缺了什么"。
2. **验证方案可量化、可证伪，改动落到字段**：样本集要覆盖边界——字段齐全、缺字段、中文大写金额、不规范日期、故意负例；指标用字段级准确率（答对字段数 ÷ 字段总数）和失败 case 数，且要区分"格式错"和"内容错"。每版之间的改动要能逐条对应到字段行为（v2→v3 的规范化规则解决的是 \`amount\`/\`date\` 的格式问题），判断标准必须定量，例如"v3 的失败 case 数 ≤ v2 的一半"或"\`date\` 字段准确率从 X 提到 100%"。
3. **承认仍未解决的问题**：成熟的推演不会说"v3 全部修好了"，而是会说"v3 把 X 类问题消除了，但 Y 类可能还有漏网 case，原因是…"——说明你还知道下一步往哪改。

**红线**：把"v3 更好"建立在具体字段、具体失败模式、可验证的判断标准上；只写"提示词更详细 / 更结构化"而没有推演依据，**不算通过**。
`,pf=`---
title: Day 3 Agent 范式
tags:
  - week1/day03
  - concept
  - code
  - exercise
---

# Day 3：Agent 范式（ReAct / Plan-Execute / Reflexion）

> 阅读约 35 分钟 ｜ 前置：[[day02-Prompt工程]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/day03_react_minimal.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

到第三天，"让模型一次回答"已经不够了。复杂任务需要模型多走几步、中间还能调工具。问题是：这几步该怎么组织？

业界沉淀了三种经典组织方式：ReAct、Plan-Execute、Reflexion（再加一个进阶的 LATS）。它们不是三个框架，而是三种"模型怎么行动"的思路。看懂这三种，后面写 Agent Loop 时你就知道自己在实现哪一种。

**一句话主旨**：ReAct 是"边想边做"的最小闭环，今天的代码把它的循环完整实现出来；Plan-Execute 和 Reflexion 是另外两种组织思路，今天只做概念对比、不写代码。

## 一个例子

同样是"现在几点，加 5 小时是几点"这道题，三种范式的做法不同：

\`\`\`text
ReAct：
  Thought: 我需要先知道现在几点
  Action: get_time()
  Observation: 17:00
  Thought: 再算 17 + 5
  Action: calculator(17 + 5)
  Observation: 22
  Final Answer: 22:00

Plan-Execute：
  Plan: [1. 查现在时间, 2. 加 5 小时]
  执行步骤 1 -> 17:00
  执行步骤 2 -> 22:00
  完成

Reflexion：
  第 1 次：直接猜 20:00 -> 评：错，没查真实时间
  反思：下次先查时间再算
  第 2 次：查时间 17:00，算 22:00 -> 评：对
\`\`\`

差别在于：ReAct 边想边做、每步看结果再走下一步；Plan-Execute 先列计划再按步走；Reflexion 做错了记教训、下一轮带着教训重来。

## 这个概念是什么

| 范式 | 一句话 | 关键动作 |
|---|---|---|
| ReAct | 边想边做 | Thought -> Action -> Observation 循环 |
| Plan-Execute | 先计划后执行 | Planner 出计划，Executor 按步走 |
| Reflexion | 做完反思再试 | Actor 做，Evaluator 评，Reflector 记教训 |
| LATS | 多路搜索 | 把决策当树，探索多条路选最优 |

- **ReAct**（Reasoning + Acting）：模型在文本里交替写出"推理"和"行动"，每次行动后把工具返回的"观察"放回上下文继续推理，直到给出最终答案。
- **Plan-Execute**：分两阶段--先让模型生成一份计划（步骤列表），再逐步执行；执行中如果计划走不通，可以重新规划。
- **Reflexion**：在一次尝试失败后，让模型生成一段"反思"（错在哪、下次怎么改），把反思作为下一轮输入，带着教训重试。
- **LATS**（进阶）：把每一步决策看成树的一个分支，同时探索几条路，用评估挑最有希望的往下走。新手知道有这回事即可，本课程不实现它。

> 一个容易混的点：ReAct 是"怎么行动"的范式，和"Agent 有没有记忆 / 工具 / 规划"这些组件是两回事。一个 ReAct Agent 可以没有长期记忆；一个有记忆的 Agent 也不一定是 ReAct。范式回答"怎么行动"，组件回答"有什么能力"。

范式是"思路"，落到程序里还要一层：每种范式把"行动"组织成什么样的可执行结构。ReAct 的这套结构就是今天代码走读要实现的——先把它的协议和循环看清楚；Plan-Execute 和 Reflexion 只做文本对比，本文件不写它们的代码。

### ReAct：固定格式 + 循环

ReAct 靠一套固定文本格式让模型输出可被程序解析：

\`\`\`text
Question: 用户的问题
Thought: 下一步该做什么、为什么
Action: 工具名
Action Input: 工具参数
Observation: 工具返回的结果（由程序填，不是模型编）
... （Thought / Action / Observation 可重复）
Thought: 我现在知道答案了
Final Answer: 最终答案
\`\`\`

程序做的事是一个循环：

\`\`\`text
把 问题 + 工具清单 + 已有轨迹 拼成 prompt
调模型，拿到输出
如果输出里有 Final Answer -> 结束，返回答案
否则解析出 Action 和参数 -> 执行工具 -> 把 Observation 拼回去 -> 再调模型
达到最大步数还没结束 -> 强制停止
\`\`\`

两个要点：**Observation 必须由程序执行工具后填进去**，不能让模型自己编（否则模型会编造工具结果，看起来合理其实是错的）；**要有最大步数**，否则模型可能反复调工具停不下来。

### Plan-Execute：Planner + Executor + Replan

\`\`\`text
Planner: 读任务，输出步骤列表 [步骤1, 步骤2, ...]
Executor: 逐步执行（每步可以调工具），把结果存进 state
  如果某步失败或和预期冲突 -> Replanner 改计划，继续
全部步骤完成 -> 输出结果
\`\`\`

和 ReAct 的区别：ReAct 每一步都重新想下一步干什么；Plan-Execute 一开始就定好全局计划，执行时只管落地。计划粒度要适中--太细容易碎、太粗没法执行。

### Reflexion：Actor + Evaluator + Reflector

\`\`\`text
维护一个 reflections（反思列表），一开始为空
每轮：
  Actor: 带着任务 + reflections 生成答案（可调工具）
  Evaluator: 给答案打分 + 反馈
  如果分数够高 -> 结束
  Reflector: 根据反馈写一条反思，加进 reflections
下一轮 Actor 就会看到上一轮的教训
\`\`\`

反思不是泛泛的"我要更仔细"，而是具体的"下次应先确认单位换算"。Reflexion 适合有明确对错信号的任务（代码、数学、有测试用例的生成）。

## 代码走读：一个最小的 ReAct 循环

本篇走读 \`agent_app/day03_react_minimal.py\`（正文统一写作 \`agent_app/\`）。全文件 190 行、零框架，自上而下五块：工具区 → 协议（\`SYSTEM_PROMPT\`）→ 解析（\`parse_react\`）→ 循环（\`run_react\`）→ 入口（\`main\`）。走读顺序就是执行顺序，每一段引用都标注了 \`文件:行号\`，可以就地核对。

### 开头：docstring 先写清楚"今天要验证什么"

\`agent_app/day03_react_minimal.py:1-21\`

\`\`\`python
"""Day 3：最小 ReAct 循环——纯文本协议，约 90 行，不依赖任何框架。

运行：
    python -m agent_app.day03_react_minimal "现在几点？再过 5 小时是几点？"

Day 3 的重点是"范式"：Reason -> Act -> Observe 一圈圈转。
所以这份代码用纯文本格式（Thought / Action / Action Input /
Observation / Final Answer）实现 ReAct，而不是 Day 4 才讲的
结构化 tool_calls 协议。两条铁律今天就要立住：
1. Observation 只能来自工具执行，绝不能由模型编造（见 run_react）。
2. max_iter 是防死循环的安全阀，不能省（见 run_react）。
"""
from __future__ import annotations

import ast
import re
import sys
from datetime import datetime

from agent_app.cost import from_usage
from agent_app.llm import call_model
\`\`\`

第一行就交代了全文件的立场：*不依赖任何框架*，一个最小实现，目的是看清**范式**本身。docstring 里的两条铁律（Observation 只能来自工具执行、max_iter 是安全阀）是整个文件的验收标准——后面走读时注意它们分别落在哪几行。

> 为什么用文本协议而不是 Day 4 的 \`tool_calls\`？docstring 第 6-9 行说得很清楚：今天要看的是 *Reason -> Act -> Observe* 这个循环本身，用最朴素的文本格式（Thought / Action / Action Input / Observation / Final Answer）就能跑通；结构化工具调用是给协议换一个更稳的载体，属于 Day 4 的事。**先懂循环，再换载体**。

导入的四样东西各有用途：\`ast\` 给算术计算做安全解析（马上看到）、\`re\` 解析模型输出的文本协议、\`sys\` 处理命令行参数、\`datetime\` 提供真实时钟；\`call_model\` 和 \`from_usage\` 是 Day 1 的共享层——全周唯一的"打电话"入口和账本换算，这里直接复用。

### 工具区（上）：get_time —— 真实时钟，模型不知道时间

\`agent_app/day03_react_minimal.py:24-30\`

\`\`\`python
# ---------------------------------------------------------------------------
# 工具：模型只写"要调什么"，真正执行的是程序
# ---------------------------------------------------------------------------

def get_time() -> str:
    """真实时钟：Observation 必须来自这里——模型自己不知道当前时间。"""
    return datetime.now().strftime("%Y-%m-%d %H:%M")
\`\`\`

注释区标题就定下了本文件的信任模型：**模型只写"要调什么"，真正执行的是程序**。\`get_time\` 的 docstring 把原因写死了：模型自己不知道当前时间——Day 1 说过模型是"基于上下文预测下一段文本"的概率生成器，它的知识截止于训练数据，此刻几点它只能靠编。所以"现在几点"这类事实，必须由程序从 \`datetime.now()\` 取，作为 Observation 喂回给模型。

### 工具区（中）：_safe_eval —— 白名单式的"安全计算器"

\`agent_app/day03_react_minimal.py:33-62\`

\`\`\`python
# 白名单：只允许这四种算术运算（对应 ast 节点类型 -> 执行函数）
_OPS: dict[type[ast.AST], object] = {
    ast.Add: lambda a, b: a + b,
    ast.Sub: lambda a, b: a - b,
    ast.Mult: lambda a, b: a * b,
    ast.Div: lambda a, b: a / b,
}


def _safe_eval(node: ast.AST) -> int | float:
    """只允许数字字面量和四则运算；绝不 eval 任意字符串。

    为什么不用内置的 eval()？因为 eval("__import__('os')...") 能执行任意代码。
    我们只解析语法树（ast），遇到白名单外的节点直接报错。
    """
    if isinstance(node, ast.Expression):
        return _safe_eval(node.body)
    if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
        return node.value
    if isinstance(node, ast.BinOp) and type(node.op) in _OPS:
        return _OPS[type(node.op)](_safe_eval(node.left), _safe_eval(node.right))
    raise ValueError(f"unsupported expression: {ast.dump(node)}")


def calculator(expression: str) -> str:
    """把用户表达式解析成语法树再求值；出错时把错误信息返回给模型。"""
    try:
        return str(_safe_eval(ast.parse(expression, mode="eval")))
    except (ValueError, SyntaxError, ZeroDivisionError) as exc:
        return f"error: {exc}"
\`\`\`

> 为什么算个数要写 30 行，直接 \`eval("17 + 5")\` 不香吗？因为 \`eval\` 会执行任意 Python 代码，而**表达式字符串来自模型的输出，不可信**。模型可能被提示注入诱导输出 \`__import__('os').system('...')\` 之类的东西——把不可信文本交给 \`eval\`，等于把执行权交给了它。\`_safe_eval\` 的做法是**白名单**：先把表达式 \`ast.parse\` 成语法树，然后只接受三种节点——\`Expression\`（包一层，继续下钻）、数字字面量 \`Constant\`、四则运算 \`BinOp\`（且运算符必须在 \`_OPS\` 白名单里）。白名单之外一律 \`raise ValueError\`。能执行什么，由程序说了算，而不是由模型文本说了算。

- **第 34-39 行 \`_OPS\`**：运算符 → 执行函数的映射表，类型注解 \`dict[type[ast.AST], object]\` 说明它键是 AST 节点类型。**白名单就长在这里**——以后想加 \`**\`（幂）或取模，改这一张表即可。
- **第 42-54 行 \`_safe_eval\`**：递归下降：\`Expression\` 剥壳 → \`Constant\` 直接返回值 → \`BinOp\` 拆成左右子树递归求值，用 \`_OPS\` 里的函数合并。三个分支就是这套求值器"认识"的全部世界。
- **第 57-62 行 \`calculator\`**：工具的对外壳。注意两点：一是返回 \`str\`（协议里 Observation 是文本）；二是 \`except\` 捕获后返回 \`f"error: {exc}"\` **而不是抛异常**——工具执行失败要作为 Observation 回到模型眼里，让模型决定修正还是止损，而不是让整个程序崩掉。这条"错误进 Observation"的约定在 \`run_react\` 里还会再见一次。

### 工具区（下）：TOOLS —— "模型可见、程序可执行"的桥

\`agent_app/day03_react_minimal.py:65-75\`

\`\`\`python
# 工具清单：模型只看得见这个表（名字 + 说明 + 可调用函数）
TOOLS = {
    "get_time": {
        "description": "获取当前日期和时间。回答与时间有关的问题时必须先调用它。",
        "run": get_time,
    },
    "calculator": {
        "description": "计算一个四则运算表达式，例如 '17 + 5'。",
        "run": calculator,
    },
}
\`\`\`

\`TOOLS\` 是字典套字典：每个工具名对应 \`description\`（写给模型看的说明书）和 \`run\`（程序里的真实函数）。**模型只能看到 description，永远碰不到 run**——它提议 \`Action: get_time\`，程序查表找到 \`get_time\` 函数并执行，把结果作为 Observation 送回。这张表就是"模型只写调什么、执行权在程序手里"的落点。

### 协议：SYSTEM_PROMPT 把"怎么行动"翻译成固定文本

\`agent_app/day03_react_minimal.py:78-95\`

\`\`\`python
# ---------------------------------------------------------------------------
# 协议：让模型输出固定格式，程序才好解析
# ---------------------------------------------------------------------------

SYSTEM_PROMPT = """你是一个最小 ReAct Agent。你的输出必须严格遵循下面的格式：

Thought: 你现在的推理（下一步该做什么、为什么）
Action: 工具名，必须是 [{tool_names}] 之一
Action Input: 工具的输入（一行文本）

当你知道答案时，输出：
Thought: 我现在知道答案了
Final Answer: 你的最终回答

规则：
- Observation 由系统提供，你绝不能自己编造 Observation。
- 同一个工具重复调用 3 次仍失败时，直接给出 Final Answer 并说明失败原因。
""".format(tool_names=", ".join(TOOLS))
\`\`\`

这就是"文本协议"：概念部分说的 Thought / Action / Action Input / Final Answer，在这里变成写给模型的**输出格式说明书**。程序能不能解析，取决于模型是否照这个格式写——所以协议要写在 system prompt 里、并且措辞是命令式的。

两个细节值得注意：

- **第 95 行 \`.format(tool_names=", ".join(TOOLS))\`**：工具名清单从 \`TOOLS\` 自动生成，插进 \`[{tool_names}]\`。工具增删时，prompt 跟着变，不会出现"prompt 里写的工具列表和实际注册表不一致"——单一数据源，这是 Day 1 \`llm.py\` 那种"有主见的工程习惯"在协议层的延续。
- **规则区是行为约束，不是注释**：第 93-94 行两条规则——Observation 绝不能编造、同一工具失败 3 次就 Final Answer——分别对应 docstring 里的 invariant 1 和 SYSTEM_PROMPT 层面对应物。第一条靠程序侧强制（见 \`run_react\`），第二条是给模型的下限约定：**止损不能只靠程序，也要让模型有"承认失败"的出口**。

### 解析：parse_react 把模型文本变成三个分支

\`agent_app/day03_react_minimal.py:98-111\`

\`\`\`python
def parse_react(text: str) -> tuple[str, str | None, str | None]:
    """解析模型的输出。返回 (类型, ...)：
    - ("action", 工具名, 参数)：模型想调工具
    - ("final", 答案, None)：模型给出最终答案
    - ("malformed", 原文, None)：格式坏了，需要退回让模型修正
    """
    if "Final Answer" in text:
        match = re.search(r"Final Answer:\\s*(.+)", text, re.S)
        return "final", match.group(1).strip() if match else text.strip(), None
    action = re.search(r"Action:\\s*(\\w+)", text)
    action_input = re.search(r"Action Input:\\s*(.+)", text)
    if action and action_input:
        return "action", action.group(1).strip(), action_input.group(1).strip()
    return "malformed", text.strip(), None
\`\`\`

模型的输出只有三种归宿，docstring 三条写死：\`("action", 工具名, 参数)\`、\`("final", 答案, None)\`、\`("malformed", 原文, None)\`。**循环的分支结构就是由这三个 kind 决定的**，所以这个函数是协议和循环之间的唯一接口。

- **第 104-106 行 final**：先查 \`"Final Answer"\` 是否出现——为什么先查它而不是先查 Action？因为一次正常收尾的输出里既有最后的 Thought 也可能残留 Action 字样，Final Answer 优先级最高。\`re.S\` 让 \`.\` 能跨行匹配，保证 \`Final Answer:\` 后面直到结尾的内容（哪怕是多行）都能被抓全。
- **第 107-110 行 action**：两个正则分别抓工具名（\`\\w+\`，只能匹配单词字符，天然挡住带空格/引号的非法工具名）和参数（\`(.+)\` 抓整行）。**两个都抓到才算 action**，只抓到其中一个说明格式坏了。
- **第 111 行 malformed**：都不是，返回原始文本——这是"显式的失败状态"：循环必须识别它并处理（下一节看怎么处理），而不是让程序抛异常。

> 为什么用正则解析而不是让模型输出 JSON？因为协议本身就是文本行；正则按行特征抓取，和 SYSTEM_PROMPT 里定义的格式一一对应，零依赖。Day 4 的 \`tool_calls\` 会把"解析"这一步交给 API 的结构化返回——到那时 \`parse_react\` 整体退役，但循环的形状不变。**解析方式可换，循环结构是范式**。

### 循环：run_react 是 ReAct 的心脏

\`agent_app/day03_react_minimal.py:114-164\`

\`\`\`python
# ---------------------------------------------------------------------------
# 循环：Reason -> Act -> Observe，直到 Final Answer 或撞上 max_iter
# ---------------------------------------------------------------------------

def run_react(question: str, max_iter: int = 5) -> tuple[str, list[dict], object]:
    """跑完整个循环。返回 (最终答案, 每步记录, 总 token 用量)。

    每轮：调模型 → 解析输出 → 执行工具（或收尾）→ 把 Observation 拼回消息。
    """
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": question},
    ]
    steps: list[dict] = []   # 每一步留痕：评测和排错都靠它
    total_in = total_out = 0

    for turn in range(1, max_iter + 1):
        resp = call_model(messages, temperature=0, max_tokens=512)
        total_in += resp.input_tokens
        total_out += resp.output_tokens

        kind, action, action_input = parse_react(resp.text)
        if kind == "final":
            steps.append({"turn": turn, "event": "final_answer"})
            return action or "", steps, (total_in, total_out)

        if kind == "action":
            # 模型说调什么，程序才真正执行；工具名不在表里就返回错误
            tool = TOOLS.get(action)
            if tool is None:
                observation = f"error: 没有名为 {action} 的工具"
            else:
                observation = tool["run"](action_input or "")
            steps.append({"turn": turn, "action": action,
                          "action_input": action_input, "observation": observation})
            messages.append({"role": "assistant", "content": resp.text})
            # 关键：Observation 由程序填，模型下一轮只能看到程序给的结果——
            # 绝不能让模型自己编"工具返回了什么"
            messages.append({"role": "user",
                             "content": f"Observation: {observation}"})
            continue

        # 格式坏了：把原文退回给模型，告诉它必须输出什么格式
        steps.append({"turn": turn, "event": "malformed", "text": action})
        messages.append({"role": "assistant", "content": resp.text})
        messages.append({"role": "user",
                         "content": "格式不对：必须包含 Action 和 Action Input，"
                                    "或直接输出 Final Answer。"})

    # 安全阀：到这儿说明模型一直没停（可能在反复调同一个工具），强制停止
    return f"max_iter={max_iter} 达到上限，强制停止", steps, (total_in, total_out)
\`\`\`

整份文件的中心。逐块拆：

- **第 123-128 行初始化**：\`messages\` 从 system + user 两条消息起步；\`steps\` 是每轮的行动记录（事后可复盘）；\`total_in/total_out\` 累计每轮 token——**账本从 Day 1 延续到循环里**。
- **第 130-133 行每轮开头**：\`for turn in range(1, max_iter + 1)\` 天然从 1 数到 \`max_iter\`；\`call_model(messages, temperature=0, max_tokens=512)\`——\`temperature=0\` 是因为协议解析依赖格式稳定，\`max_tokens=512\` 是单轮输出上限，防止一轮就烧掉预算（Day 1 讲过：max_tokens 同时是成本上限）。
- **第 136-138 行 final 分支**：解析出 final 就 \`return\`——答案、步骤记录、累计用量一次带出。**正常退出只有这一条路**。
- **第 140-154 行 action 分支**：\`TOOLS.get(action)\` 查表——**查不到也不崩溃**，而是把 \`"error: 没有名为 {action} 的工具"\` 当作 Observation 喂回去（第 143-144 行），让模型自己意识到调错了工具；查得到就执行 \`tool["run"](action_input or "")\`（\`or ""\` 兜住空参数）。然后第 149-153 行两条 append：先把模型的原话作为 \`assistant\` 消息放回上下文（保持对话历史的角色交替合法），再以 \`user\` 消息放入 \`"Observation: {observation}"\`。**第 150-151 行注释就是 invariant 1 的实现处**："关键：Observation 由程序填，模型下一轮只能看到程序给的结果——绝不能让模型自己编'工具返回了什么'"。
- **第 156-161 行 malformed 分支**：格式坏了，同样把原文退回，附一句提示"格式不对：必须包含 Action 和 Action Input，或直接输出 Final Answer。"——给模型一次修正机会，而不是直接判死。
- **第 164 行循环出口**：\`max_iter\` 轮都用完还没 Final Answer，返回 \`"max_iter={max_iter} 达到上限，强制停止"\`。注意这**不是**一个正常答案，而是安全阀文案——程序在这里明确承认"这轮没跑出答案"。docstring 里的 invariant 2（max_iter 是安全阀）就落在这行。

> 为什么每轮都要把整个 \`messages\` 重发给模型？Day 1 说过模型无状态，"记得之前说过什么"靠把历史放回上下文。这里每一轮追加的 assistant 原话 + Observation，就是"轨迹"的物理载体：模型下一轮能看到的，只有程序拼好的这些消息。**轨迹 = 上下文里累积的消息**，没有魔法。

> ### 岔路：Observation 为什么用 user 角色，不用专门的 tool 角色？（可跳读，不影响主线）
> 因为文本协议阶段没有 \`tool\` 角色——OpenAI 的 \`tool\` 角色消息是配合结构化 \`tool_calls\` 用的，Day 4 才引入。这里 Observation 以 user 消息进上下文，模型按"系统补充的信息"理解即可，足够跑通 ReAct。等 Day 4 换成结构化协议，Observation 会以专门的 tool 消息出现——**角色怎么标是载体问题，Observation 由程序填是范式纪律**，两者要分清。

### 入口：main 把轨迹和账本打印出来

\`agent_app/day03_react_minimal.py:167-190\`

\`\`\`python
def main() -> int:
    if len(sys.argv) < 2:
        print('usage: python -m agent_app.day03_react_minimal "你的问题"',
              file=sys.stderr)
        return 1
    question = " ".join(sys.argv[1:])
    answer, steps, (total_in, total_out) = run_react(question)

    print(f"Q: {question}\\n")
    for step in steps:
        if "action" in step:
            print(f"[第 {step['turn']} 轮] Action: {step['action']}"
                  f"({step['action_input']!r}) -> Observation: {step['observation']}")
        elif step["event"] == "final_answer":
            print(f"[第 {step['turn']} 轮] Final Answer")
        else:
            print(f"[第 {step['turn']} 轮] {step['event']}: {step['text'][:60]}...")
    print(f"\\nA: {answer}")
    print(from_usage(total_in, total_out))
    return 0


if __name__ == "__main__":
    sys.exit(main())
\`\`\`

- **第 168-171 行**：缺参数时打印用法并返回 1——CLI 惯例，和 Day 1 一致。
- **第 172-173 行**：把命令行参数拼成问题（支持带空格的多词提问），交给 \`run_react\`。
- **第 175-183 行**：按 \`steps\` 逐轮打印，可以看到完整的 Action → Observation → Final Answer 轨迹。\`{step['action_input']!r}\` 用 \`repr\` 打印参数——空串、引号一眼能看清；malformed 只截前 60 字符（第 183 行 \`[:60]\`），避免模型跑偏输出刷屏。
- **第 184-185 行**：打印答案，再打印 \`from_usage(total_in, total_out)\`——**一轮任务总成本**，账本习惯的循环版：不是记录一次调用，而是累计一整个 Agent 任务。

> 为什么最后是 \`sys.exit(main())\`？返回码 0 表示成功，shell 脚本能据此判断成败——工程习惯，和 Day 1 的 \`day01_hello_llm.py\` 完全同款。

## 为什么这样写

- **用文本协议而不是结构化 tool_calls**：docstring 第 7-9 行原话——*"所以这份代码用纯文本格式（Thought / Action / Action Input / Observation / Final Answer）实现 ReAct，而不是 Day 4 才讲的结构化 tool_calls 协议。"*。今天的目标是看懂循环本身，载体越朴素越不会被细节干扰；等循环定型了，Day 4 再换更稳的载体。
- **\`_safe_eval\` 用白名单而不是 \`eval()\`**：docstring 第 43 行原话——*"只允许数字字面量和四则运算；绝不 eval 任意字符串。"*。模型输出是不可信文本，\`eval\` 会把任意 Python 代码变成命令执行；AST 白名单让"能执行什么"完全由程序决定——**工具的执行面必须程序说了算，这是 Agent 安全的第一道线**。
- **Observation 由程序填、模型只能看不能编**：run_react 第 150-151 行注释原话——*"关键：Observation 由程序填，模型下一轮只能看到程序给的结果——绝不能让模型自己编'工具返回了什么'"*。ReAct 的信任边界就在这：模型可以想、可以提议行动，但"世界真实发生了什么"只认工具执行结果；一旦让模型自编 Observation，循环就变成自我催眠。
- **工具失败不抛异常，而是作为 Observation 回流**：\`calculator\` 第 62 行返回 \`f"error: {exc}"\`，\`run_react\` 第 144 行返回 \`f"error: 没有名为 {action} 的工具"\`——执行失败不是程序异常，而是喂回给模型的观察，让它自己决定修正还是放弃（配合 SYSTEM_PROMPT 第 94 行"同一工具重复调用 3 次仍失败就直接 Final Answer"的止损规则）。
- **max_iter 是程序层的安全阀**：docstring 第 11 行原话——*"max_iter 是防死循环的安全阀，不能省（见 run_react）"*。循环体本身没有天然终止条件，指望模型"自觉停下来"不可靠；安全阀必须在程序层，跑满就强制停止并明确声明"没跑出答案"。

## 本章小结

- ReAct = 边想边做：Thought → Action → Observation 循环，Observation 只能来自工具执行，绝不能由模型编造。
- 工具注册表 \`TOOLS\` 是"模型可见、程序可执行"的桥：模型只写工具名，执行权永远在程序手里；不可信的模型文本永远碰不到 \`eval\` 这类危险执行。
- 文本协议（SYSTEM_PROMPT）+ 正则解析（parse_react）把模型输出变成可编程的分支：final / action / malformed 三种归宿，各走各的处理。
- run_react 里每一步的轨迹都放回上下文——无状态模型靠历史消息"记得"走到哪了；\`max_iter\` 是唯一的强制出口，跑满就承认失败。
- 这一处是"一个循环"的事——Plan-Execute 的 Executor、Reflexion 的 Actor 内部跑的还是这种 Reason → Act → Observe 的循环，后面只是把这种循环组织进不同的行动范式，**核心没变复杂**。

## 一句话边界

- Observation 只能来自工具执行，不能由模型编造。
- 三种范式不互斥：Plan-Execute 的 Executor 单步可以用 ReAct，Reflexion 的 Actor 也可以是 ReAct。
- 别在没有明确对错信号的任务上用 Reflexion--反思会变成自我解释，没有真实纠错。
- LATS 成本高（要多路探索），新手阶段不用碰。

## 读完应该能用自己的话回答

1. ReAct、Plan-Execute、Reflexion 各是怎么组织模型行动的？
2. ReAct 循环里，Observation 为什么必须由程序填、不能让模型自己写？
3. Plan-Execute 执行中计划走不通了怎么办？
4. Reflexion 的"反思"和"让模型自己检查一遍"有什么不一样？
5. 为什么说 ReAct 是"行动范式"，和"记忆 / 工具 / 规划"这些组件不是一回事？

## 想深入

三种范式各自的适用场景、优缺点对比、面试常问的"ReAct 和 CoT 有什么区别"等，见八股·02 核心框架。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 的三种行动范式。请用"做一道复杂数学题"的例子，分别解释 ReAct、Plan-Execute、Reflexion 怎么做。每种只说：它怎么组织步骤、中间靠什么纠错、什么时候停。不要给完整代码，不要引入框架名称。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. ReAct**

ReAct 最核心的循环是什么？

A. Profile → Memory → Planning → Tools
B. Reason → Act → Observe
C. Retrieve → Rerank → Generate
D. Plan → Execute → Reflect

**Q2. Loop**

最小 Agent Loop 必须设置 \`max_iter\` 的主要原因是什么？

A. 强制模型每一步都先写完整计划
B. 防止工具循环导致无限消耗
C. 让工具参数自动通过校验
D. 提高每次工具调用的事实准确率

**Q3. Plan**

Plan-Execute 最适合哪类任务？

A. 单步事实问答
B. 需要先拆解步骤再执行的较长任务
C. 只需要向量检索的任务
D. 不允许任何工具调用的任务

**Q4. Reflexion**

Reflexion 比较依赖什么条件？

A. 明确的反馈信号
B. 更多无约束的自我解释
C. 把工具结果全部丢弃
D. 每一步都强制生成新计划

### 开放题（1 道）

**Q5. Loop 故障演练（推演题）**：假设把 calculator 工具改坏——它对 \`2+2\` 返回 \`5\`（与常识冲突），而模型每轮能看到的只有工具返回的 Observation，看不到"工具坏了"这件事。不运行任何代码，纯推演回答：

1. **预期现象**：在 \`max_iter=8\` 的循环里，模型会表现出怎样的轨迹？推测它在哪一步开始反复调用同一工具、它会不会怀疑工具结果、最后靠什么停下来。
2. **验证方案**：如果给你一段完整的 ReAct 循环代码，你该观察哪些字段（比如每轮的 Action / Observation）、设什么参数，才能确认"模型不会自动停下来"？
3. **判断标准**：什么样的轨迹算"正常收尾"、什么样算"陷入循环"？据此给出判断标准，并列出 ReAct Loop 在生产环境还需要哪些"非模型层"的保护（至少 3 条）。

≥150 字。本题是推演题，不依赖任何代码文件。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | Reason → Act → Observe 是行为循环；A 是 Agent 组件分类，不是同一层抽象。这是国内绝大多数博客混淆的点。 |
| Q2 | **B** | 没有 max_iter，模型可能反复调用同一工具/同一参数。A/C/D 都不是 max_iter 的目的。 |
| Q3 | **B** | Plan-Execute 在长任务上更稳定；单步问答用它是过设计。 |
| Q4 | **A** | 没有反馈信号的"反思"会退化成空泛自我评价。Reflexion 不是单纯让模型多说几句。 |

### 开放题参考思路

**Q5. Loop 故障演练（推演题）**：合格答案要包含：

1. **预期现象**：明确指出 Agent 会在某一步开始反复调用 \`calculator("2 + 2")\`——Observation 永远"正确"地返回与常识冲突的 \`5\`，模型没有理由怀疑它，更可能反复重试同一参数或换个问法再试；因为输出里始终没有 Final Answer，最后只能靠 \`max_iter\` 强制停止。能推演出"模型不会怀疑、也没有主动停下的出口"是核心。
2. **验证方案**：说清要看 \`steps\` 轨迹里 Action / Observation 的重复模式（同一工具同一参数连续出现、没有 Final Answer），并把 \`max_iter\` 调到 8 观察"总是差一步"——每轮都想再调一次工具，证明循环里没有能让模型主动停下的机制。
3. **判断标准**：正常收尾 = 出现 Final Answer 且不再发起新的 Action；陷入循环 = 连续多轮同一工具同一参数、始终没有 Final Answer。据此给出判断标准，并列出至少 3 条非模型层保护——max_iter、工具调用指纹去重、超时、token 总额预算、人审 escalation。若加"去重 + 降级"兜底，输出应变成"工具结果与常识冲突，已停止重试，请人工确认"而不是继续调用。

**红线**：只写"加了 max_iter 就够了"不算通过——**核心是认识到模型不会自动停下来**：Observation 是模型唯一的信息来源，工具返回再离谱的结果它也没有理由怀疑，唯一能拦住循环的是程序层的安全阀。能把这条推演逻辑讲清楚，才算真的懂 ReAct Loop 的边界。
`,ff=`---
title: Day 4 工具调用
tags:
  - week1/day04
  - concept
  - code
  - exercise
---

# Day 4：工具调用（Function Calling）

> 阅读约 30-40 分钟 ｜ 前置：[[day03-Agent范式]]、[[day01-LLM-API基础]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/day04_tools/openai_weather.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

模型本身只会输出文本，没法真正去查天气、读文件、算数据。怎么让它"用上"外部能力？

答案是 Function Calling：让模型输出一个结构化的"我要调哪个工具、用什么参数"的请求，由程序去真正执行工具，再把结果喂回模型。今天要看清这条链路怎么转，以及工具描述为什么是关键。

**一句话主旨**：模型只发"调用请求"，程序负责"真执行"，结果再喂回去，转一圈才算数。今天的代码走读就按"工具本体 → 工具规格 → 多轮闭环"三块展开，正好对应这一圈。

## 一个例子

用户问"上海今天适合带伞吗"：

\`\`\`text
模型读问题 + 工具清单 -> 判断需要天气信息
输出工具调用请求：weather_query(city="上海")
程序执行 weather_query -> 拿到 {condition: "雨", temperature: 22}
把结果作为 tool 消息喂回模型
模型根据"雨"回答：今天有雨，建议带伞
\`\`\`

模型从头到尾没有"执行"任何东西，它只输出了调用请求。真正查天气的是程序。

## 这个概念是什么

**Function Calling** 是模型输出协议：模型在需要外部信息时，不直接编答案，而是输出一个结构化的工具调用请求（工具名 + 参数）。程序接到请求后执行真正的工具，把结果回填给模型，模型再据此生成答案。

关键区分：**模型只生成调用意图，执行工具的是程序**。模型不直接跑代码，执行权在你手里，这便于鉴权和审计。

一句话把这个概念钉进代码：程序里有两份东西，一份是"模型看得到的规格"（schema，纯文本），一份是"模型看不到的本体"（真函数，能跑）。下面走读的 \`openai_weather.py\` 正好把这两份东西和一个把它们串起来的循环写在了同一个文件里。

## 代码走读：一个文件走完"请求 → 执行 → 回填"闭环

本篇走读 \`agent_app/day04_tools/openai_weather.py\`（正文统一写作 \`agent_app/...\`），全文 129 行，从上到下正好三大段：工具本体（19-37 行）→ 工具规格（40-65 行）→ 多轮闭环（68-116 行），最后是 CLI 入口（119-129 行）。每一段引用都标注了 \`文件:行号\`，对照下方嵌入的代码即可就地核对。

### 文件头：docstring 先把设计意图钉死

\`agent_app/day04_tools/openai_weather.py:1-16\`

\`\`\`python
"""Day 4：Function Calling——模型提议，程序执行。

运行：
    python -m agent_app.day04_tools.openai_weather "上海今天适合带伞吗？"

demo 用内置假天气表，让整个链路确定、可跑，除了模型调用不需要任何网络。
把 weather_query 的函数体换成真实 HTTP 请求，循环一行都不用改——
这正是 Day 4 的核心：循环长在协议上，不长在具体工具上。
"""
from __future__ import annotations

import json
import sys

from agent_app.cost import from_usage
from agent_app.llm import call_model
\`\`\`

> 为什么 docstring 不写"这段代码是干嘛的"，而是写"怎么跑、为什么这么设计"？因为"干嘛的"看代码五分钟就懂，"设计意图"看代码看不出来——假天气表、循环不随工具变这两条，只有写在这里才留得下来。

> 为什么 \`import json\`？因为模型返回的工具参数是 **JSON 字符串**，第 108 行要靠它解析。\`from_usage\` 和 \`call_model\` 是 Day 1 那套共享层——工具调用没有另起炉灶，"打电话"还是那一个入口。

### 走读一：工具本体 —— 程序真正执行的函数

\`agent_app/day04_tools/openai_weather.py:19-37\`

\`\`\`python
# ---------------------------------------------------------------------------
# 1. 工具本体：程序真正执行的函数
# ---------------------------------------------------------------------------

# 假天气表：换真实天气 API 时只改 weather_query 的函数体，协议层不动
_WEATHER_DB = {
    "上海": {"condition": "雨", "temperature": 22, "humidity": 88},
    "北京": {"condition": "晴", "temperature": 30, "humidity": 40},
    "深圳": {"condition": "多云", "temperature": 28, "humidity": 70},
}


def weather_query(city: str) -> str:
    """查询指定城市今天的天气。返回给模型的是纯文本，不是 dict。"""
    row = _WEATHER_DB.get(city)
    if row is None:
        return f"error: 没有 {city} 的天气数据"
    return (f"{city}今天{row['condition']}，气温 {row['temperature']}°C，"
            f"湿度 {row['humidity']}%")
\`\`\`

- **为什么先写工具本体？** 因为"程序真正执行的东西"先于"模型知道的东西"。模型永远看不到这个函数体——它只能读到下一段的 JSON 规格。这一段是整条链路的"发动机"，规格只是它的说明书。
- **为什么用假天气表？** 第 23 行注释和 docstring（6-8 行）把话说透了：换真实 API **只改函数体**，循环一行不动——因为循环是"协议形状"的，跟工具具体是查天气还是查航班无关。假表让演示确定、无网络依赖，同样的输入结果稳定可复现。
- **为什么用 \`dict.get(city)\` 而不是 \`_WEATHER_DB[city]\`？** 查不到的城市（比如"广州"）返回 \`None\`，函数吐出一句 \`error: 没有 广州 的天气数据\` 而不是抛异常。工具把"失败"也当作一种**结果**交给模型——对话继续，模型会基于错误信息调整（比如换个城市名）。
- **为什么返回纯文本而不是 dict？** docstring 第一句就写明了：*"返回给模型的是纯文本，不是 dict"*。这是协议约束：tool 消息的 \`content\` 必须是字符串，SDK 才能把它原样放进消息列表。函数内部随便用什么结构，**边界处转成文本**。

### 走读二：工具规格 —— 模型唯一能"看到"的东西

\`agent_app/day04_tools/openai_weather.py:40-65\`

\`\`\`python
# ---------------------------------------------------------------------------
# 2. 工具规格：模型靠它决定"什么时候调、传什么参数"
# ---------------------------------------------------------------------------

WEATHER_TOOL = {
    "type": "function",
    "function": {
        "name": "weather_query",
        # description 决定模型选得对不对：写清做什么、何时用、何时不用
        "description": "查询指定城市今天的天气（天气、气温、湿度）。"
                       "只用于天气相关问题，不要用它回答其他问题。",
        "parameters": {
            "type": "object",
            "properties": {
                "city": {
                    "type": "string",
                    "description": "城市名，例如 '上海'",
                }
            },
            "required": ["city"],
        },
    },
}

SYSTEM_PROMPT = ("你是一个天气助手。需要天气信息时调用 weather_query 工具，"
                 "拿到结果后再回答。不要编造天气数据。")
\`\`\`

- **为什么模型要一份 JSON 规格，而不是直接"看代码"？** 模型是文本进、文本出，它读不了代码、更执行不了函数。这份 \`WEATHER_TOOL\` 是它决定"什么时候调、传什么参数"的**唯一依据**，所以它必须是纯数据。
- **\`"type": "function"\`**：OpenAI 协议的外层标记，告诉服务商"这是工具清单里的一项"，不是普通消息。
- **\`name\` 必须和程序里的真函数名一致**：都是 \`weather_query\`。程序收到"调用 weather_query"的请求，才能按名字映射到第 31 行的真函数——名字对不上，执行环节就断了。
- **\`description\` 是选对工具的关键，两句各有分工**：第一句写用途（查天气、气温、湿度），第二句写**负例边界**（"只用于天气相关问题，不要用它回答其他问题"）。模型靠这份文本判断"这个问题该不该调它"；边界不写清，模型连订机票都想拿它试试。这就是"工具描述决定模型会不会选对"。
- **\`parameters\` 是 JSON Schema 的一个子集**：\`type: object\` 声明参数是个对象；\`properties.city\` 声明有一个叫 \`city\` 的字符串参数，还给了示例 \`'上海'\`（给模型一个格式参考，减少它自创格式）；\`required: ["city"]\` 声明必填。模型读这份 schema 后，输出请求里的参数就会长成 \`{"city": "上海"}\` 的样子。
- **\`SYSTEM_PROMPT\` 为什么补一句"不要编造天气数据"？** schema 管"什么时候调、传什么"，system prompt 管"拿到结果怎么答"。工具结果回来之前，模型可能想凭记忆直接答——这条约束把它按回"先调工具、再回答"的轨道。两份文本互相印证，这就是行为边界。

### 走读三：多轮闭环 —— 转一圈才算数

先看循环的骨架和终止条件：

\`agent_app/day04_tools/openai_weather.py:68-91\`

\`\`\`python
# ---------------------------------------------------------------------------
# 3. 多轮闭环：tool_calls -> 程序执行 -> tool 消息回填 -> 再调模型
# ---------------------------------------------------------------------------

def run_weather_chat(question: str) -> None:
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": question},
    ]
    total_in = total_out = 0

    while True:
        resp = call_model(messages, tools=[WEATHER_TOOL],
                          temperature=0, max_tokens=512)
        total_in += resp.input_tokens
        total_out += resp.output_tokens

        msg = resp.raw.choices[0].message
        tool_calls = msg.tool_calls or []  # 模型请求的工具调用列表（可能为空）

        if not tool_calls:
            # 模型不再请求工具 -> 这就是最终答案，循环结束
            print(f"最终回答: {msg.content}")
            break
\`\`\`

- **\`messages\` 初始只有 system + user**：工具清单不混在消息里，而是作为第 80 行的调用参数 \`tools=[WEATHER_TOOL]\` 单独传给模型——协议就是这么设计的：消息是对话内容，tools 是"你可以用的东西"。
- **为什么是 \`while True\`？** 因为事先不知道要转几圈：可能零圈（模型直接回答，不需要工具）、一圈（调一次工具就够）、甚至多圈（结果不够，再调一次）。循环每转一圈就把上一圈的结果带进下一轮请求，直到模型说"够了"。
- **为什么 \`temperature=0\`、\`max_tokens=512\`？** 演示要可复现，温度归零；循环里**每转一圈都是一次计费调用**，\`max_tokens\` 是每圈的硬顶，防止模型在一圈里生成失控。
- **\`total_in\` / \`total_out\` 在干什么？** 把每一圈的 token 用量累加——这是 Day 1 留下的账本习惯，最后一行统一结算总账。
- **\`resp.raw\` 是干什么的？** Day 1 说过 \`LLMResponse.raw\` 是"留给 Day 4 读 \`tool_calls\` 用的"——今天兑现了。\`resp.text\` 只有 \`content\`，而工具请求藏在原始 SDK 对象的 \`choices[0].message.tool_calls\` 里，所以这里必须绕过封装层去 \`resp.raw\` 里取。
- **\`msg.tool_calls or []\` 为什么加 \`or []\`？** 模型没有请求工具时，SDK 给的是 \`None\`；归一化成空列表，下面 \`if not tool_calls\` 的判断才干净。
- **终止条件是什么？** 模型不再请求工具 → 它打算直接回答了 → \`msg.content\` 就是最终答案，打印后 \`break\` 出循环。**"模型不再请求"是唯一的出口**，这就是闭环的终点。

再看来回填的半圈——协议硬约束都在这：

\`agent_app/day04_tools/openai_weather.py:93-116\`

\`\`\`python
        # 模型请求了 N 个工具 -> 必须回 N 条 tool 消息（OpenAI 协议硬约束）
        print(f"模型请求 {len(tool_calls)} 次工具调用:")
        messages.append({"role": "assistant",
                         "content": msg.content or "",
                         "tool_calls": [
                             {"id": tc.id, "type": "function",
                              "function": {"name": tc.function.name,
                                           "arguments": tc.function.arguments}}
                             for tc in tool_calls
                         ]})
        for tc in tool_calls:
            print(f"  - {tc.function.name}({tc.function.arguments})")
            # 参数是 JSON 字符串，先解析再执行；解析失败也回填错误——
            # 工具执行失败同样要回一条 tool 消息（带错误文本），协议才不报错
            try:
                args = json.loads(tc.function.arguments)
                result = weather_query(args["city"])
            except (json.JSONDecodeError, KeyError, TypeError) as exc:
                result = f"error: 参数解析失败: {exc}"
            messages.append({"role": "tool",
                             "tool_call_id": tc.id,  # 配对：这条结果属于哪次请求
                             "content": result})

    print(from_usage(total_in, total_out))
\`\`\`

- **为什么要把 assistant 消息（连同 \`tool_calls\`）原样 append 回 \`messages\`？** 协议要求对话历史完整：模型下一轮需要看到"我上轮请求过什么"。\`tool_calls\` 不能丢，要按 \`id / type / function(name, arguments)\` 的结构**原样回放**——列表推导式就是干这个的。
- **为什么 N 个 tool_call 必须回 N 条 tool 消息？** 第 93 行注释写的是"OpenAI 协议硬约束"。少一条，服务端直接报错或模型失去"哪个结果对应哪次请求"的对应关系。**哪怕某个工具执行失败，也要回一条带着错误文本的 tool 消息**——错误也是结果。
- **\`tool_call_id\` 在配什么？** 每条 tool 消息用 \`tc.id\` 指向它回应的那次请求。模型一次要了 N 个工具（比如同时问上海和北京），程序就回 N 条消息，靠 id 一一对应，绝不串台。
- **为什么参数解析包在 try 里？** \`tc.function.arguments\` 是模型生成的 **JSON 字符串**，可能非法（\`json.JSONDecodeError\`）、可能漏了 \`city\`（\`KeyError\`）、可能类型不对（\`TypeError\`）。程序在边界兜底：解析失败就回填一句 \`error: 参数解析失败: ...\`，循环照常转下去——**协议不因为一次坏参数就断**。
- **打印那行 \`- weather_query({"city": "上海"})\` 是干什么的？** 可观察性：它把模型请求了什么、程序执行了什么直接打在输出里。后面排查"模型为什么答错"时，这行日志是第一现场。
- **闭环怎么合上？** 新消息（assistant 带 tool_calls + N 条 tool 结果）加入 \`messages\`，循环回到第 80 行**再调一次模型**：这次模型看到了工具结果，会综合生成最终答案，下一轮 \`tool_calls\` 为空 → \`break\`。第 116 行打印累计用量——总账收尾。

> ### 岔路：OpenAI 和 Anthropic 的协议长不一样（可跳读，不影响主线）
> 今天代码用的是 OpenAI 的 \`tool_calls\` 协议：请求字段叫 \`tool_calls\`，回填消息的 \`role\` 是 \`"tool"\`。Anthropic 那边请求字段叫 \`tool_use\`，回填是 \`tool_result\` 块。字段名、消息结构都不同，但"模型发请求 → 程序执行 → 结果回填 → 再调模型"的**闭环形状一模一样**——这就是本文件 docstring 说的"循环长在协议上，不长在具体工具上"：你掌握的是形状，不是某个厂商的字段拼写。本篇 Q5 开放题就是让你推演两边的行为差异。

### 走读四：CLI 入口

\`agent_app/day04_tools/openai_weather.py:119-129\`

\`\`\`python
def main() -> int:
    if len(sys.argv) < 2:
        print('usage: python -m agent_app.day04_tools.openai_weather "你的问题"',
              file=sys.stderr)
        return 1
    run_weather_chat(" ".join(sys.argv[1:]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
\`\`\`

入口和 Day 1 是同一个模式：没给参数就打印 usage 到 \`stderr\` 并以 1 退出；有参数就拼成一句话交给 \`run_weather_chat\`；返回码 0 表示成功，让 shell 能判断成败。真正干活的是前面 116 行，入口只是薄薄一层皮。

## 为什么这样写

- **假天气表 + 真协议循环**：第 23 行注释原话：*"假天气表：换真实天气 API 时只改 weather_query 的函数体，协议层不动"*；docstring（第 6-8 行）原话：*"把 weather_query 的函数体换成真实 HTTP 请求，循环一行都不用改——这正是 Day 4 的核心：循环长在协议上，不长在具体工具上。"*——把工具实现和循环逻辑解耦，演示要确定性，接口要可替换。
- **工具返回纯文本，不返回 dict**：第 32 行 docstring 原话：*"查询指定城市今天的天气。返回给模型的是纯文本，不是 dict。"*——函数内部随便用什么结构，但**协议边界处必须转成字符串**，因为 tool 消息的 content 只能是文本。
- **description 写用途 + 负例边界**：第 49-50 行原话：*"查询指定城市今天的天气（天气、气温、湿度）。只用于天气相关问题，不要用它回答其他问题。"*——第一句告诉模型"做什么"，第二句告诉它"什么时候别用"。模型选工具几乎全靠这份文本，边界不写清，它连订机票都想调天气。
- **\`temperature=0\` 封死演示的确定性**：第 80-81 行 \`call_model(messages, tools=[WEATHER_TOOL], temperature=0, max_tokens=512)\`——这是教学演示的有意参数，不是生产默认：温度归零保证链路稳定可复现，\`max_tokens=512\` 给循环里每一圈都上了预算顶。
- **参数解析失败也回填错误**：第 105-106 行注释原话：*"参数是 JSON 字符串，先解析再执行；解析失败也回填错误——工具执行失败同样要回一条 tool 消息（带错误文本），协议才不报错"*——协议硬约束优先于"优雅失败"：宁可把坏参数当结果回填，也不让一轮坏参数打断整段对话。

## 本章小结

- 工具 = 本体（程序里能跑的真函数）+ 规格（模型读得到的 JSON schema），模型只看得见后者，所以 description 写不写边界，直接决定它选得对不对。
- 多轮闭环四步：模型发 \`tool_calls\` 请求 → 程序逐个执行 → 每条结果用 \`tool_call_id\` 配对回填成 tool 消息 → 带着新消息再调模型，直到模型不再请求工具。
- 协议硬约束：N 个 tool_call 必须回 N 条 tool 消息；参数解析失败也回填错误文本，对话照常继续。
- 账本习惯延续：每一圈的 token 用量累加，\`from_usage\` 最后统一结算。
- 这一处是"工具调用协议"的事——后面所有带工具的 Agent（多工具、带状态的长循环）只是把这种"请求 → 执行 → 回填"组织成更长的循环和分支，**核心没变复杂**。

## 一句话边界

- 模型只生成工具调用请求，真正执行工具的是程序。
- 工具描述要写清"做什么、何时用、何时不用"，它决定模型选得对不对。
- tool_call_id 用来配对请求和结果，多个工具时不能串。
- assistant 有 N 个 tool_call，下一轮就要回 N 条 tool 消息，哪怕是错误。

## 读完应该能用自己的话回答

1. Function Calling 里，模型和程序各负责什么？
2. 一个工具要告诉模型哪三件事？工具描述为什么重要？
3. 一次工具调用的多轮闭环是怎么转的？
4. tool_call_id 是干什么用的？为什么 N 个 tool_call 就要回 N 条 tool 消息？

## 想深入

工具路由、参数校验分层、模型作为安全边界的权衡等，见八股·04 工具调用。

## 交给 AI 的问题

\`\`\`text
我正在学 Function Calling。请解释：1) 模型和程序在工具调用里各负责什么；2) 一个工具要怎么定义模型才选得对；3) 一次工具调用的多轮过程；4) tool_call_id 干什么用。用"查天气"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. 执行者**

Function Calling 中，真正执行函数的是谁？

A. 模型根据 schema 自动访问外部网络
B. 开发者的程序、框架或 Harness
C. 工具 description 本身
D. 消息里的 system prompt

**Q2. 描述**

工具 description 写得太短，最可能导致什么问题？

A. 模型不清楚什么时候该用或不该用这个工具
B. 工具执行函数的运行速度明显变慢
C. schema 里的 required 字段会被自动删除
D. 工具结果无法被序列化成字符串

**Q3. Required**

把所有工具参数都设为 required 的风险是什么？

A. 模型可能在信息不足时幻觉填参
B. 工具 schema 会变得更严格，因此一定更可靠
C. 用户必须一次性提供所有上下文，模型不再需要追问
D. 参数越多，模型越容易理解真实业务意图

**Q4. 并行**

并行工具调用最适合哪类情况？

A. 先查城市代码，再用城市代码查天气
B. 多个互不依赖的信息查询
C. 一个工具结果决定另一个工具参数
D. 每个工具都可能产生写入副作用

### 开放题（1 道）

**Q5. 协议差异落到行为**：不运行任何代码，只凭本篇走读的 \`openai_weather.py\` 与“岔路”一节的信息，推演两个用例在两套协议（OpenAI 的 \`tool_calls\` / Anthropic 的 \`tool_use\` + \`tool_result\`）下的表现：
- 用例 1：“上海今天适合带伞吗？”（应当调用天气工具）
- 用例 2：“帮我订一张去上海的机票。”（应当拒绝调用工具）

写出三部分：
1. **预期现象**：描述你预期的两边行为差异（≥3 条，可从请求/回填结构、拒绝阈值、错误处理、输出风格等维度展开）；
2. **验证方案**：设计一个只用 1 个 mock 天气工具的验证方案——说明要观察哪些行为信号，才能判断“模型选没选对工具、边界守没守住”；
3. **判断标准与可迁移经验**：给出 1 条**关于工具描述写法的可迁移经验**，并说明依据什么标准判断它对两套协议都生效。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | 模型只生成工具调用请求，程序或 Harness 负责执行。这是 Tool Use 第一性认知。 |
| Q2 | **A** | 描述是模型选工具的唯一依据。描述模糊 → 选择行为不稳定。 |
| Q3 | **A** | required 过多 → 模型为了能调用工具，倾向幻觉填补它并不知道的字段。 |
| Q4 | **B** | 互不依赖的查询适合并行；有依赖关系应该串行（先 A 拿结果再 B 用）。 |

### 开放题参考思路

**Q5. 协议差异**：合格答案至少覆盖“预期现象、验证方案、判断标准”三块，例如：

1. **预期现象**（≥3 条不同维度的差异）：
   - **请求/回填结构**：OpenAI 请求字段是 \`tool_calls\`，回填靠 \`role: "tool"\` + \`tool_call_id\` 配对；Anthropic 请求字段是 \`tool_use\`，回填是 \`tool_result\` 块——字段名不同，但“模型发请求 → 程序执行 → 结果回填 → 再调模型”的闭环形状一致。
   - **拒绝阈值**：Anthropic 在用例 2 上更倾向直接拒绝；OpenAI 在某些模型版本上仍会尝试调 weather_query 把“机票”当 city。
   - **错误返回处理**：Anthropic 的 \`is_error: true\` 标记会让它在下一轮明显调整策略；OpenAI 端只能从工具结果文字里学。
   - **输出风格**：相同 system prompt 下 Anthropic 倾向更长解释；OpenAI 倾向更短给结论。
2. **验证方案**：只用 1 个 mock 天气工具（类似本篇的 \`weather_query\`），对两个用例各观察一轮：用例 1 是否发起调用、\`city\` 参数是否按 schema 填；用例 2 是否不再发起调用而是直接作答；出错回填后下一轮是否调整策略。
3. **判断标准与可迁移经验**：在 description 里写**显式负面边界**，例如 *"only for weather/temperature/rain/wind questions; do NOT use for flights, hotels, restaurants, or any travel booking"*——判断标准是：两套协议下用例 2 都不再发起工具调用、用例 1 的调用参数一致。这条经验对两个协议都生效。

**红线**：只写"两边代码不一样"是表面观察，没有触达模型行为差异的，**不算通过**。`,mf=`---
title: Day 5 RAG 基础
tags:
  - week1/day05
  - concept
  - code
  - exercise
---

# Day 5：RAG 基础（检索增强生成）

> 阅读约 35 分钟 ｜ 前置：[[day01-LLM-API基础]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/day05_rag/ingest.py\` 与 \`agent_app/day05_rag/rag.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

模型有两个天然限制：训练截止后不知道新内容，对企业私有文档没有访问权。硬问它，它可能凭参数记忆编一个看似合理其实错的答案。

RAG 解决的就是这个：在回答前，先从外部资料里找出相关片段，放进上下文，让模型基于证据回答。今天要看清 RAG 的完整链路，以及它的质量到底由什么决定。

## 一个例子

用户问"公司的报销流程是什么"：

\`\`\`text
没有 RAG：模型凭记忆编一套流程，可能和公司实际流程完全不同
有 RAG：
  先从公司文档库里检索"报销流程"相关的几个片段
  把这些片段 + 问题一起发给模型
  模型基于这些片段回答："根据员工手册第 3 章，报销需先填申请单..."
\`\`\`

模型不再凭记忆编，而是基于你给它的资料回答。

## 这个概念是什么

**RAG（Retrieval-Augmented Generation，检索增强生成）** 是在生成回答前，先检索相关外部资料，把检索到的片段放进上下文，让模型基于这些证据回答。

RAG 回答的核心问题不是"用哪个向量库"，而是"面对一个问题，把哪些资料、以什么粒度放进上下文"。资料选得对，模型才有依据；选得不对，再好的模型也会答错。

要把"面对问题挑资料"落地，需要一条完整链路：

\`\`\`text
1. 切分：把文档切成片段（chunk）
2. embedding：把每个片段转成向量
3. 入库：向量存进向量库
4. 检索：用户问题也转向量，找最相似的 top-k 个片段
5. 生成：把检索到的片段 + 问题拼进 prompt，让模型回答
\`\`\`

这五步里，前几个概念决定了检索能不能"找对"：

- **Embedding**：把文本变成向量。语义相近的文本在向量空间里距离更近，检索就是靠这个找相关片段。
- **Chunk**：文档切成的小片段。切多大影响检索质量--太小片段缺上下文，太大噪音多还占 token。
- **Top-k**：检索几个片段。k 太小可能漏信息，k 太大会塞进无关内容干扰模型。
- **Overlap**：相邻片段重叠一部分，避免切断时丢衔接。

这几个没有通用最优值，要根据文档类型和问题类型调。

除了"怎么检索"，还有三件事直接决定 RAG 好不好用：

**召回和精排**：向量检索负责"召回"候选片段（宁可多找一些）。复杂场景还会加一层"精排"（rerank），把候选重新排序筛掉不相关的。第一版可以先不做精排，但要观察 top-k 变化对答案的影响。

**约束模型别越过资料编造**：RAG 不只是塞资料，还要约束模型只能在资料范围内回答。prompt 里通常加一句"资料不足就说无法判断"，防止模型越过资料瞎编。

**答错时分清是召回错还是生成错**：RAG 答错了，要分清两类问题：

- **召回错**：检索到的片段就不对，模型再强也没依据。
- **生成错**：片段是对的，但模型没正确利用。

排查时要先看检索到了什么片段，再判断是哪一类。不展示检索结果，答错时根本没法定位。

概念部分到此为止。接下来看代码——上面这条五步链路，正好分成两个文件：前两步（切分、embedding）在 \`ingest.py\`，后两步（检索、生成）在 \`rag.py\`。走读就按这两半来。

## 代码走读：从 4 个 txt 到"带证据的回答"

本篇走读 \`agent_app/day05_rag/\` 的两个文件（下文统一写 \`agent_app/day05_rag/…\`）。它读 \`data/\` 里的 4 个公司文档（报销流程、员工手册-考勤、设备申请、假期制度），实现的效果是：你问"公司的报销流程是什么？"，程序先检索出相关片段，再让模型基于片段回答。

### 第一半：\`ingest.py\` —— 把文档变成"可检索的向量"

ingest 阶段做的事是：读文档 → 切 chunk → 每个 chunk 转向量 → 存进 \`vectors.json\`。文件头 docstring 先交代了它的定位：

\`agent_app/day05_rag/ingest.py:1-10\`

\`\`\`python
"""Day 5a：ingest——把文档切块、向量化、存成 vectors.json。

运行：
    python -m agent_app.day05_rag.ingest

离线保底模式：embed_text 用"字符 bigram 计数"做本地向量
（无下载、无网络、无外部依赖）。它只是"把文本变成向量"的最简可跑实现，
不是真正的语义 embedding——换真实 embedding 模型时只改 embed_text
一个函数，链路其余部分不动。
"""
\`\`\`

> 为什么文档里特意写"不是语义 embedding"？因为教学代码必须能离线跑（无下载、无网络），但它不是产品级实现。把丑话说在前面，你就不会误以为 bigram 就是 RAG 的正式做法——后面换真 embedding 时，**只改 \`embed_text\` 一个函数**，链路不动。

接着是两个调参入口——chunk 切分的两个常量：

\`agent_app/day05_rag/ingest.py:19-23\`

\`\`\`python
DATA_DIR = Path(__file__).parent / "data"   # 放原始文档的目录
OUT_FILE = DATA_DIR / "vectors.json"        # 向量索引的输出文件

CHUNK_SIZE = 120    # 每个片段多少个字符
CHUNK_OVERLAP = 30  # 相邻片段重叠多少字符，避免切断处丢衔接
\`\`\`

- \`DATA_DIR\` 用 \`Path(__file__).parent / "data"\` 定位数据目录，而不是写死绝对路径——这样无论你在哪个目录运行命令都能找到数据。
- \`OUT_FILE\` 是产物：所有 chunk 和它们的向量都写进这一个 JSON 文件。
- \`CHUNK_SIZE = 120\` 和 \`CHUNK_OVERLAP = 30\` 就是概念部分说的两个"没有通用最优值"的参数，这里各取一个起步值，后面按场景调。

#### 切分：\`chunk_text\`

\`agent_app/day05_rag/ingest.py:26-37\`

\`\`\`python
def chunk_text(text: str, size: int = CHUNK_SIZE,
               overlap: int = CHUNK_OVERLAP) -> list[str]:
    """按字符切分文档（中文没有空格分词，所以按字符数切）。

    步长 = size - overlap：相邻片段重叠 overlap 个字符，
    这样一句话被拦腰切断时，下一段还带着上半句。
    """
    text = re.sub(r"\\s+", "", text)  # 中文文档先压掉所有空白
    if len(text) <= size:
        return [text] if text else []
    step = size - overlap
    return [text[i:i + size] for i in range(0, len(text) - overlap, step)]
\`\`\`

> 为什么按"字符数"切而不是按词？docstring 说得很清楚：中文没有空格分词。英文可以按空格切词，中文一句话连在一起，最稳的粒度就是字符。

逐行看：

- **第 33 行**：先把所有空白（换行、空格）压掉。中文文档里换行往往只是排版不是语义分隔，压掉后切分更干净。
- **第 34-35 行**：文档比一个 chunk 还短，直接整篇返回；空文档返回空列表。
- **第 36-37 行**：步长 \`step = size - overlap = 90\`，但窗口宽 120——相邻窗口就重叠了 30 个字符，这就是 \`CHUNK_OVERLAP\` 的作用：**避免恰好切在语义边界上丢衔接**。\`range\` 上界取 \`len(text) - overlap\` 而不是 \`len(text)\`，它保证最后一个窗口的起点落在文本尾部之前，且窗口末端越过文本结尾（被切片自动截断）——**末尾的字符也一定落在某个窗口里**。

#### 向量化：\`embed_text\`

\`agent_app/day05_rag/ingest.py:40-54\`

\`\`\`python
def embed_text(text: str) -> dict[str, float]:
    """离线向量：统计相邻两字的组合（bigram）出现次数，再做 L2 归一化。

    结果是一个稀疏向量 {bigram: 权重}。语义相近的文本，bigram 分布
    也相近，余弦相似度就高——够把"报销流程"和"报销"匹配上。
    注意：这只是教学用的最简实现，改这里即可换成真正的 embedding 模型。
    """
    chars = re.findall(r"[\\w\\u4e00-\\u9fff]", text.lower())
    # 相邻字符两两组合，例如 "报销流程" -> "报销" + "销流" + "流程"
    counts = Counter(a + b for a, b in zip(chars, chars[1:]))
    # L2 归一化：把每个权重除以向量长度，让不同长度的文本可比
    norm = math.sqrt(sum(v * v for v in counts.values()))
    if norm == 0:
        return {}
    return {k: v / norm for k, v in counts.items()}
\`\`\`

这是整个文件最关键的一个函数——**"文本变向量"就发生在这里**。它做的是字符 bigram 计数：

- **第 47 行**：取出所有"词字符和中文字符"（\`\\w\` 加 \`\\u4e00-\\u9fff\`），转小写。标点、空白被滤掉。
- **第 49 行**：\`zip(chars, chars[1:])\` 把相邻两个字符两两配对（如"报""销"配成"报销"），\`Counter\` 统计每个"相邻字符对"（bigram）出现多少次。**每个 bigram 就是一个维度**，出现次数就是该维度的值。
- **第 51-54 行**：L2 归一化——每个维度除以向量的欧几里得长度。归一化后向量长度恒为 1，**不同长度文本的相似度才有可比性**；长度为零（没有有效字符）就返回空 dict。

> 为什么返回 \`dict\` 而不是定长 list？bigram 是稀疏的——一篇文档里出现的字符对种类远少于所有可能的字符对。用 \`dict\` 只存"出现的维度"，省内存；这也是第二半 \`cosine_sim\` 能直接点积的原因。

> ### 岔路：真 embedding 长什么样？（可跳读，不影响主线）
> 真 embedding 是把整段文本喂给一个模型，压成一个固定维度的稠密向量（比如 1536 维）。语义相近的文本，向量距离就近；同义改写（"报销" vs "费用申请"）也能召回。bigram 向量是稀疏的，只反映**字面重合**——好处是离线免费、立即可跑，坏处是同义替换就"看不见"了。所以换真 embedding 时，只改 \`embed_text\` 的返回值（从 bigram dict 换成模型向量），\`chunk_text\`、\`ingest\`、\`rag.py\` 全部不用动。

#### 入库：\`ingest\`

\`agent_app/day05_rag/ingest.py:57-71\`

\`\`\`python
def ingest() -> list[dict]:
    """读 data/ 下所有 .txt，逐个切块 + 向量化，写成 vectors.json。"""
    records: list[dict] = []
    for path in sorted(DATA_DIR.glob("*.txt")):
        text = path.read_text(encoding="utf-8")
        for i, chunk in enumerate(chunk_text(text)):
            records.append({
                "doc": path.name,   # 来自哪篇文档（召回时用来标注证据来源）
                "chunk_id": i,      # 文档里的第几段
                "text": chunk,      # 原文，生成阶段拼进 prompt
                "vec": embed_text(chunk),  # 向量，检索阶段算相似度
            })
    OUT_FILE.write_text(
        json.dumps(records, ensure_ascii=False, indent=1), encoding="utf-8")
    return records
\`\`\`

- **第 60 行**：遍历 \`data/\` 下所有 txt，\`sorted\` 保证顺序稳定。
- **第 62-68 行**：每段 chunk 存成一条记录，四个字段：\`doc\`（来自哪个文件）、\`chunk_id\`（第几段）、\`text\`（原文）、\`vec\`（向量）。**\`doc\` 和 \`chunk_id\` 不是装饰——答错排查时，你要能说出"证据来自哪个文件第几段"，靠的就是这两个字段**。
- **第 69-70 行**：\`ensure_ascii=False\` 让中文直接以中文写进 JSON（而不是 \`\\uXXXX\` 转义），\`indent=1\` 方便肉眼检查。这就是本实现里的"入库"——一个 JSON 文件。

> 为什么"入库"不是真向量库？诚实地说：教学版用一个 JSON 文件代替了向量数据库。真正的向量库（如 Chroma、FAISS）负责大规模存储和近似检索，这里 4 个文档几十个 chunk，全量扫一遍点积也很快。**链路形状不变，换库只是换 \`load_vectors\` 的读法**（第二半会看到）。

\`ingest.py\` 的入口 \`main\` 只负责汇报结果：

\`agent_app/day05_rag/ingest.py:74-83\`

\`\`\`python
def main() -> int:
    records = ingest()
    docs = sorted({r["doc"] for r in records})
    print("== ingest 完成 ==")
    for doc in docs:
        n = sum(1 for r in records if r["doc"] == doc)
        print(f"  {doc}: {n} 个 chunk")
    print(f"向量维度（bigram 种类数）约 {len(records[0]['vec'])}，"
          f"已写入 {OUT_FILE.name}")
    return 0
\`\`\`

> 为什么维度写"约"？每个 chunk 的 bigram 种类数不一样，向量的"长度"（dict 的键数）并不固定——这再次说明它是稀疏向量。打印它只是让你对"向量到底长什么样"有个直观感受。

### 第二半：\`rag.py\` —— 检索 + 带证据回答

rag 阶段做的事是：读入 \`vectors.json\` 索引，把问题转向量，检索 top-3 片段，再让模型基于片段回答。文件头 docstring 先钉死了使用顺序和排查原则：

\`agent_app/day05_rag/rag.py:1-9\`

\`\`\`python
"""Day 5b：RAG——检索相关片段，再让模型基于证据回答。

运行：
    python -m agent_app.day05_rag.ingest     # 先建索引（只需一次）
    python -m agent_app.day05_rag.rag "公司的报销流程是什么？"

答错排查顺序（Day 5 正文强调）：先看检索到了什么（evidence），
再判断是召回错还是生成错——不展示检索结果，答错时根本没法定位。
"""
\`\`\`

> 注意第 4 行注释"先建索引（只需一次）"：ingest 是离线步骤，rag 是问答步骤，两者分离——文档没变就不用重建索引。

#### 加载与相似度：\`load_vectors\` + \`cosine_sim\`

\`agent_app/day05_rag/rag.py:26-40\`

\`\`\`python
def load_vectors() -> list[dict]:
    """读取 ingest 生成的索引；没生成就提示先跑 ingest。"""
    if not OUT_FILE.exists():
        raise SystemExit("索引不存在：先运行 python -m agent_app.day05_rag.ingest")
    return json.loads(OUT_FILE.read_text(encoding="utf-8"))


def cosine_sim(a: dict[str, float], b: dict[str, float]) -> float:
    """两个稀疏向量的余弦相似度。

    向量都已经归一化（长度 = 1），所以余弦相似度退化成简单的点积：
    对应维度相乘再求和。数值越大越相似。
    """
    small, big = (a, b) if len(a) <= len(b) else (b, a)
    return sum(v * big.get(k, 0.0) for k, v in small.items())
\`\`\`

- **\`load_vectors\`**：索引不存在就直接报错退出，并给出下一步该跑什么命令——"失败要失败得早、失败得清楚"，和 Day 1 \`_client()\` 缺配置直接退出是同一个工程习惯。
- **\`cosine_sim\`**：这就是检索用的"相似度"。docstring 点破了数学：**向量都归一化过，余弦相似度 = 点积 ÷（|a|·|b|），分母是 1，所以只算点积**。
- **第 39-40 行**：遍历短的那个向量，用 \`big.get(k, 0.0)\` 查长的那个——对方没有的维度按 0 算（稀疏向量的"缺维度 = 没出现"）。遍历短的省一半循环。

> 为什么相似度能这么便宜？因为归一化在 \`embed_text\` 里做完了（ingest.py:51-54），检索侧就省掉除法；又因为向量是稀疏 dict，\`get\` 查表是 O(1)。两个决定叠加，全库扫一遍点积也就是毫秒级。

#### 检索：\`retrieve\`

\`agent_app/day05_rag/rag.py:43-48\`

\`\`\`python
def retrieve(question: str, top_k: int = TOP_K) -> list[dict]:
    """把问题向量化，和所有片段算相似度，取最高的 top_k 个。"""
    q_vec = embed_text(question)
    scored = [(cosine_sim(q_vec, r["vec"]), r) for r in load_vectors()]
    scored.sort(key=lambda pair: pair[0], reverse=True)  # 相似度从高到低
    return [r for score, r in scored[:top_k]]
\`\`\`

这就是概念部分链路里的第 4 步"检索"，只有 5 行：

- **第 45 行**：问题也转成向量。**注意它复用 \`embed_text\`**——问题和文档必须落在同一个向量空间，相似度才有意义。这是检索的一条铁律：入库和查询用同一个 embedding。
- **第 46 行**：问题向量和库里的每个 chunk 向量算相似度，得到 \`(分数, 记录)\` 列表。
- **第 47-48 行**：按分数降序排，取前 \`TOP_K\`（\`TOP_K = 3\`，rag.py:23）。这就是"召回"：**宁可多找几个候选，把判断交给生成阶段**。

#### 约束与拼装：\`SYSTEM_PROMPT\` + \`build_prompt\`

\`agent_app/day05_rag/rag.py:51-63\`

\`\`\`python
# 约束模型别越过资料编造：资料里没有的，明确说不知道
SYSTEM_PROMPT = """你是一个基于资料的问答助手。
只能根据下方提供的资料回答；资料里没有的信息，明确说"资料中没有提到"。
不要编造。回答用中文，简洁。"""


def build_prompt(question: str, chunks: list[dict]) -> str:
    """把检索到的片段 + 问题拼成 prompt，并标注每个片段的出处。"""
    parts = ["【资料】"]
    for i, chunk in enumerate(chunks, start=1):
        parts.append(f"[{i}] ({chunk['doc']} 第{chunk['chunk_id']}段)\\n{chunk['text']}")
    parts.append(f"\\n【问题】\\n{question}")
    return "\\n".join(parts)
\`\`\`

- **第 51-54 行 \`SYSTEM_PROMPT\`**：概念部分"约束模型别越过资料编造"的落地。三句话三件事：你是"基于资料"的助手（立场）、资料里没有就说没有（边界）、不要编造（禁令）。**RAG 的 system prompt 不是教知识，是划边界**——和 Day 1 的 \`SYSTEM_PROMPT\`（"一句话回答，不要寒暄"）同一个思路，只是这里的边界更硬。
- **第 57-63 行 \`build_prompt\`**：把检索到的 chunk 拼成 user prompt：先是 \`【资料】\` 块（每条带 \`[1]\` 编号和来源 \`(doc 第 N 段)\`），再是 \`【问题】\` 块。编号让模型能引用"根据资料 1"；来源标注是给人看的——排查时知道哪段话出自哪个文件。

> 为什么资料要"拼进 prompt"，而不是告诉模型"去读某个文件"？因为模型没有文件系统，它的全部输入就是 prompt 里的文本。**RAG 的"增强"本质是：把外部资料显式塞进上下文**，模型还是那个模型。

#### 主流程：\`main\`

\`agent_app/day05_rag/rag.py:66-91\`

\`\`\`python
def main() -> int:
    if len(sys.argv) < 2:
        print('usage: python -m agent_app.day05_rag.rag "你的问题"',
              file=sys.stderr)
        return 1
    question = " ".join(sys.argv[1:])

    # 第一阶段：检索。先打印证据，让"答错归因"有据可查
    print("== 检索阶段 ==")
    chunks = retrieve(question)
    for i, chunk in enumerate(chunks, start=1):
        print(f"  [{i}] {chunk['doc']} 第{chunk['chunk_id']}段: {chunk['text'][:40]}...")

    # 第二阶段：生成。模型只能基于上面的资料回答
    resp = call_model(
        [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": build_prompt(question, chunks)},
        ],
        temperature=0, max_tokens=512,
    )

    print("\\n== 生成阶段 ==")
    print(f"回答: {resp.text}")
    print(from_usage(resp.input_tokens, resp.output_tokens))
    return 0
\`\`\`

- **第 73-77 行"检索阶段"**：先打印检索到了哪 3 个片段（\`[:40]\` 只预览开头 40 个字符，完整文本在 prompt 里）。**这就是"答错排查顺序"的代码化——回答还没生成，证据先摆出来**。答错时你第一眼看到的不是模型的错，而是"检索到了什么"。
- **第 79-86 行**：一次 \`call_model\`——Day 1 的全周唯一调用入口，这里原样复用。system 放 \`SYSTEM_PROMPT\`（边界），user 放 \`build_prompt\`（资料 + 问题）。\`temperature=0\`：基于证据回答不需要发散，稳定引用资料比"有创意"重要；\`max_tokens=512\` 足够一段简洁回答，同时是成本上限。
- **第 88-90 行**：打印回答和 token 成本——Day 1 的账本习惯照旧。

> 为什么整条 RAG 管线最后收敛成"一次 \`call_model\`"？因为模型唯一能做的是"根据上下文生成"。RAG 没有发明新的模型能力，只是**换了上下文的内容**：把"用户问题"换成"资料 + 用户问题"。这正是 Day 1 主旨的延伸——所有 Agent 动作都是那一次调用的组织方式。

## 为什么这样写

- **离线保底 embedding，把升级路径收敛到一个函数**：\`ingest.py:6-9\` 的 docstring 原话：*"离线保底模式：embed_text 用"字符 bigram 计数"做本地向量（无下载、无网络、无外部依赖）。它只是"把文本变成向量"的最简可跑实现，不是真正的语义 embedding——换真实 embedding 模型时只改 embed_text 一个函数，链路其余部分不动。"* 教学代码必须零配置能跑，但"这是保底"写死在文档里，升级时不迷茫。
- **chunk 参数是模块级常量，不是散落的魔法数**：\`ingest.py:22-23\` 注释：\`CHUNK_SIZE = 120    # 每个片段多少个字符\`、\`CHUNK_OVERLAP = 30  # 相邻片段重叠多少字符，避免切断处丢衔接\`。概念部分说"chunk 大小没有通用最优值，要按场景调"——常量让调参只改一处。
- **相似度实现成点积，数学依据写进 docstring**：\`rag.py:36-37\` 原话：*"向量都已经归一化（长度 = 1），所以余弦相似度退化成简单的点积：对应维度相乘再求和。数值越大越相似。"*。归一化在 \`embed_text\` 完成（ingest.py:51-54），检索侧省掉除法；稀疏 dict + 遍历短向量，全库扫描保持廉价。
- **"不许编造"是显式指令，不是道德期待**：\`rag.py:51\` 注释原话：\`# 约束模型别越过资料编造：资料里没有的，明确说不知道\`。约束写进 system prompt（rag.py:52-54），让"资料不足就说没有"成为可执行协议，而不是赌模型自觉。
- **排查原则钉在文件入口**：\`rag.py:7-8\` 的 docstring 原话：*"答错排查顺序（Day 5 正文强调）：先看检索到了什么（evidence），再判断是召回错还是生成错——不展示检索结果，答错时根本没法定位。"* 文章里强调的原则，同时是代码的使用说明——\`main\` 里先 \`print\` 检索结果，再进入生成阶段（rag.py:73-77）。

## 本章小结

- RAG = 先检索、后生成：切分 → embedding → 入库 → 检索 top-k → 带证据回答。
- 链路五步由两个文件分工：\`ingest.py\` 管前三步（\`chunk_text\` 切分 + \`embed_text\` 向量化 + 写 \`vectors.json\`），\`rag.py\` 管后两步（\`retrieve\` 检索 + 拼 prompt 生成）。
- 召回质量决定答案上限：检索到的片段不对，模型再强也没依据；答错先看检索到了什么，再判断召回错还是生成错。
- 约束模型别越过资料：system prompt 明确"资料里没有就说资料中没有提到"，这是 prompt 层的边界。
- 这一处是"把什么资料放进上下文"的事——核心还是 Day 1 那一次 \`call_model\`，RAG 只是把它的 user prompt 从"用户问题"换成了"资料 + 用户问题"，**核心没变复杂**。

## 一句话边界

- RAG 的核心是"把什么资料放进上下文"，不是"选哪个向量库"。
- 切分大小、top-k、overlap 没有通用最优值，要按场景调。
- RAG 能降低幻觉但不能完全消除（检索错、片段质量差、模型忽略证据都会出错）。
- 答错时要分清召回错还是生成错，先看检索到了什么。

## 读完应该能用自己的话回答

1. RAG 解决什么问题？不用它会怎样？
2. RAG 的完整链路是哪几步？
3. Embedding、chunk、top-k 各是什么？它们怎么影响质量？
4. RAG 答错了，怎么分清是召回错还是生成错？

## 想深入

RAG vs 微调 vs 长上下文的权衡、rerank、查询改写、GraphRAG 等，见八股·03 RAG 技术。

## 交给 AI 的问题

\`\`\`text
我正在学 RAG。请解释：1) RAG 解决什么问题；2) 它的完整链路是哪几步；3) embedding、chunk、top-k 各是什么、怎么影响质量；4) RAG 答错了怎么排查。用"查公司报销流程"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. RAG**

RAG 的核心作用是什么？

A. 在回答前检索相关外部资料并放入上下文
B. 把所有资料永久写进模型参数
C. 只要用了向量库，就不需要约束模型回答范围
D. 用 top-k 替代业务评测

**Q2. Chunk**

chunk size 过大最可能带来什么问题？

A. 检索片段噪音多且占用更多 token
B. 召回更完整，所以不再需要 top-k 对比
C. overlap 设置会自动失去意义
D. rerank 会自动修复全部噪音

**Q3. Top-k**

top-k 从 1 增加到 5，一定会提升答案质量吗？

A. 一定会，因为放进上下文的证据更多
B. 不一定，可能召回更多信息，也可能引入噪音
C. 不会影响上下文长度和成本
D. 只会改变 embedding 向量维度

**Q4. 查询改写**

复杂问题直接用原始 question 做 embedding 的风险是什么？

A. 可能召回不到真正相关的概念片段
B. 可以完全依赖增大 top-k 来补救
C. 会让向量库把所有文档都排成同一相似度
D. 会让生成模型跳过检索结果

### 开放题（1 道）

**Q5. 召回 vs 生成归因（推演题）**：本篇的 RAG 用 bigram 向量 + top-3 检索，模型基于检索到的片段回答。假设你在排查它答错的案例，但手上没有可运行的代码——纯靠推演完成：

1. **设计验证方案**：围绕"报销流程、员工手册-考勤、设备申请、假期制度"4 篇文档设计 5 个测试问题，并写出每个问题在正常情况下 top-3 应召回哪些文档、模型应该怎么答。
2. **给出判断标准**：对每个问题写下判定规则——看到什么样的 top-3 片段和模型回答，能断定是 **召回问题**（检索里没有正确证据）还是 **生成问题**（检索里有证据但模型没用对）？
3. **描述预期现象**：至少构造 1 个"字面相关但语义不对"的问法（如同义改写、跨文档问题），预测它更可能召回错还是生成错，说明理由。
4. **中文 embedding 权衡**：若把 bigram 换成云端语义 embedding（如中文模型），哪一类失败最可能改善、哪一类基本不受影响？判断标准是什么？

最后回答：

> 如果你只能优先修一类，你会先修召回还是生成？给出 ≥3 条理由。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **A** | RAG 是检索增强生成，关键是把相关资料放入上下文，而不是写入模型参数（B 错）。 |
| Q2 | **A** | chunk 太大会混入无关内容，并增加上下文成本，本质是"信噪比"问题。 |
| Q3 | **B** | top-k 越大召回更全，但也引入噪音；不一定提升答案质量。 |
| Q4 | **A** | 复杂问题直接做 embedding 容易召回偏离主题；query rewrite 是常见缓解。 |

### 开放题参考思路

**Q5. 召回 vs 生成归因（推演）**：合格答案要包含：

1. **归因判断标准**：核心只有一条——先看检索到了什么。"top-3 都是 X 文档但正确答案在 Y 文档"= 召回问题；"top-3 里有正确片段但模型答错/没引用"= 生成问题。每个 case 都要给出这条证据链，而不是凭感觉归类。
2. **预期现象**：召回错时证据里根本没有正确答案，模型再强也答不对；生成错时证据里明明有答案，模型却偏离或编造——两者靠"证据里有没有正确答案"区分。
3. **中文 embedding 权衡**：bigram 只反映字面重合，同义改写（如"费用申请"vs"报销"）会召回不到——这类"字面不重合但语义相关"的失败，换成云端语义 embedding 最可能改善；生成错与检索无关，换 embedding 基本不受影响。判断标准：先归因，再判断换 embedding 能救哪一类。
4. **优先修哪个**：合理答案是先修召回，理由可以是：
   - 召回有证据时，模型生成的失败更容易通过 prompt 修
   - 召回错误时再好的模型也答不对，是上限问题
   - 召回错可以离线评测、可量化（recall@k），更容易迭代

**红线**：把所有失败都笼统归为"模型不行"，**不算通过**——这道题就是训练你"先看证据，再说模型"。
`,gf=`---
title: Day 6 框架对比
tags:
  - week1/day06
  - concept
  - code
  - exercise
---

# Day 6：Agent 框架对比

> 阅读约 30-40 分钟 ｜ 前置：[[day03-Agent范式]]、[[day04-工具调用]]、[[day05-RAG基础]] ｜ 本篇包含：概念讲解 + 框架对比 + 课后习题
> 本篇代码：无新增代码——对照对象是前几篇正文已嵌入的 \`agent_app/llm.py\`（Day 1）与 \`agent_app/loop.py\`（Day 8），见下文"本篇没有新代码"。

## 本篇解决一个问题

到第六天，你已经听过一堆框架名字：LangChain、LangGraph、LlamaIndex、AutoGen、Coze、Dify……很容易陷入"该学哪个"的焦虑。

今天要从"框架名字焦虑"里跳出来：这些框架不是答案本身，是不同抽象层的工具。要学会按"每个框架替你做了什么、藏起了什么"来理解它们，而不是按流行度选。

**一句话主旨**：选框架不是选 star 数，而是选"替你做了什么、藏起了什么"的抽象层——今天没有新代码，练的是判断。

## 一个例子

同一个任务"判断某城市某天是否适合户外活动"，不同做法：

\`\`\`text
纯 SDK：自己写 messages、工具调用、结果回填，每一步都看得见
LangChain：用现成组件把 LLM + 工具 + 检索拼成链，几行就跑起来，但中间发生了什么不太透明
LangGraph：把流程画成图（路由 -> 查天气 -> 判断 -> 输出），分支和状态显式可见
低代码平台（Coze/Dify）：拖拽搭流程，快速出 demo，但深度定制和严谨评测受限
\`\`\`

差别在于抽象层：纯 SDK 最透明但要自己补工程脚手架；框架替你组织但藏起细节；低代码最快但可控性最弱。

> 为什么同一个任务要列四种做法？因为任务不变，变的只有抽象层——这样比较的就是"同一件事在不同抽象层下，你能看到什么、能控制什么"，而不是"谁跑得快"。选型题的正确打开方式，就是先把任务钉死，再让框架来适配它，而不是反过来。

## 这个概念是什么

**Agent 框架** 是帮你组织"模型调用、Prompt 模板、工具注册、状态流转、记忆检索、多 agent 协作"这些事的工程工具。框架不让模型更聪明，而是帮你把散乱的底层动作组织成可运行的程序。

关键判断：框架是"替你做了什么"和"藏起了什么"的权衡。封装多 = 上手快但调试难；图编排 = 可控但要先定义状态；纯 SDK = 透明但脚手架自己补。

> 这里有个容易踩的直觉：以为"用了框架 = 模型更强"。不是。框架改的是**工程组织**，模型的能力边界（上下文容量、工具格式、可靠性）一点没动——它只是让你把这些事组织得更省力。所以框架选错的症状不是"模型答错"，而是"流程跑不起来、状态对不上、问题难定位"。

下面把"替你做什么 / 藏起什么"落到每个框架的具体抽象上——判断的依据全在这张表里。

### 每个框架的核心抽象

| 框架 | 核心抽象 | 替你做什么 |
|---|---|---|
| 纯 SDK | messages + 工具调用 | 什么都不替你做，全透明 |
| LangChain | 组件拼装 + AgentExecutor 循环 | 把 LLM/Prompt/Retriever/Tool 串成链，循环标准化 |
| LangGraph | 图编排（节点/边/状态） | 把流程显式化为图，分支/循环/人机协同一等公民 |
| LlamaIndex | 数据索引 + 检索 | 偏 RAG，强项在文档解析、索引、检索 |
| AutoGen | 多 agent 对话 | 多角色分工协作（planner/coder/reviewer） |
| Coze / Dify | 低代码拖拽 | 快速搭 demo、接渠道，给非工程团队用 |

> 读这张表的姿势：先盯"核心抽象"一列——每个框架其实是把自己那一行抽象（链、图、索引、多角色对话）做成了第一等公民。你选框架，本质是选"哪一列抽象最接近你的任务本来长什么样"。
> 再看第二列："替你做什么"描述的是这行抽象把哪些手写动作包了进去——包得越多，你上手越快，但"中间发生了什么"就越不透明。两列对着读，才能看出"封装换来了什么、代价是什么"。

### LangChain vs LangGraph 的关键区别

这是最常被问的对比：

- **LangChain** 的 AgentExecutor 是一套默认循环：模型决策 -> 调工具 -> 回填 -> 再决策，适合标准工具 Agent。
- **LangGraph** 把工作流画成图：节点是处理步骤，边是流转关系，条件边可以根据状态分支。适合多阶段流水线、条件路由、回环修复、人工审核节点。

简单说：流程是单一工具循环用 LangChain；流程需要分支/回环/人机节点用 LangGraph。

> 为什么教程把这两个单独拎出来对比？因为它们是同一家族里两个相反方向的抽象：AgentExecutor 把循环写死成一个标准形状，你只能换里面的零件；LangGraph 把"流程本身"变成数据（节点/边/状态），分支和回环是图里明摆着的东西。判断你的任务属于哪种形状，比记住任何 API 都重要。
> 两个词具体指什么？"条件边"= 上一步的输出决定下一步走哪条边，典型实现是模型返回一个意图/分类，路由到不同节点——Week 2 的 \`ReActLoop\` 里"模型是否请求工具"就是一条条件边（loop.py:117）；"人机审核节点"= 流程走到某处挂起，等人工确认再继续——loop.py:119 的 interrupt 回调就是同一个机制。框架把它做成一等公民，你的手写循环里它就是几个 if 和一次回调。

### LlamaIndex 的定位

LlamaIndex 不该简单和 LangChain/LangGraph/AutoGen 并列为同类 Agent 框架。它更偏 RAG 和数据索引，强项在文档解析、索引、检索、知识增强。核心问题是复杂 Agent Loop 或多 agent 协作时，它未必是第一选择；做企业知识库、文档问答时它是强项。

> 这也解释了为什么 Day 5 讲 RAG 时没有引入任何框架：先把"文档 -> 切块 -> 检索 -> 拼进上下文"这条链路在 Day 5 的代码走读里走一遍，再回头看 LlamaIndex 替你做了什么，你才分得清"它帮我省了哪段代码"和"它改变了什么结论"。

### 多 agent 不是默认选项

AutoGen 这类多 agent 框架容易让人一上来就多角色，结果系统复杂度暴涨。经验是：大部分任务先用单 agent + 多工具解决；只有当子任务确实需要隔离角色、并行阅读、互相审查时，才引入多 agent。

> 复杂度暴涨不只是"代码多了"：状态和消息在多个 agent 之间流转，任何一环的失误都更难定位。判断标准一句话：把角色拆开，是否换来"隔离、并行、互审"里的至少一种？换不来，就别拆。
> 还有一个被低估的成本维度：token。每个角色都是一次次的模型调用（Day 1 的账本习惯就是为这种问题准备的），角色越多，单轮任务的消耗成倍上涨。拆角色之前先算账：它换来的"隔离/并行/互审"值不值这个开销。

### 低代码平台的边界

Coze/Dify 适合快速验证业务流程、搭 demo、接渠道。但它们的可控性、版本管理、测试、复杂工程集成通常不如代码项目。demo 跑通不等于工程交付完成。

> 判断边界用三个"能否"：数据能否导出？逻辑能否版本化？评测能否自动化？三个都是"否"的项目，只适合当 demo——这就是"低代码平台的边界"落到工程上的含义。

## 本篇没有新代码

这一天没有配套代码，因为框架对比是**判断型内容**，不是实现型内容：结论落在"哪个抽象层匹配我的任务形态"，而不是"这段循环怎么写"。判断要用的证据，都嵌在前几篇的代码走读里：

- \`agent_app/llm.py\` 的 \`call_model\`（llm.py:47）是"纯 SDK"抽象层的实例：自己组织 messages、传 tools、解析 usage，全透明、零封装——这是所有框架对比的基准线；
- Week 2 的 \`agent_app/loop.py\` 的 \`ReActLoop\`（loop.py:113）是"自写循环"的实例：Reason → Act → Observe、终止条件、max_iter 全由你控制——LangChain 的 AgentExecutor 想替你做的，正是这件事。

把这两处当作坐标系的两端（两段代码分别在 Day 1 与 Day 8 的代码走读中完整嵌入）。以后看任何框架的文档，只问一句：**它封装的是哪一段？** 回答不上来，说明你还没看懂这两段代码，而不是框架太复杂。

> 什么时候自写、什么时候选框架？给一条可执行的分界线：学习与调试期自写（Week 1-2 走的就是这条路，每一步都可见）；标准工具 Agent 的快速交付用框架；强约束场景（审计、审批）两者都要，但证据面必须自己留。框架能替你做的是"组织"，替不了你的是"理解"——后者只能靠你亲手读过的代码。

### 判断流程示例：一个文档问答机器人

任务：内部知识库问答（检索 + 回答，回答必须标注来源）。把它放进本篇的坐标系走一遍：

- 任务主语是"文档"而不是"流程" → LlamaIndex 的抽象形状（数据索引 + 检索）最接近；
- 但"标注来源"是约束不是抽象——无论用哪个框架，你都要在检索结果和生成之间保留证据链（Day 5 的 retrieved chunks 就是这份证据）；
- 流程本身是单次问答，没有分支/回环 → 不需要图编排。

结论："用 LlamaIndex 检索 + 自己写几行生成"，而不是上一个全家桶。注意，这不是答案，是判断过程：先钉任务形状，再对框架抽象，最后自己补约束。

> ### 岔路：AgentExecutor 替你写的循环长什么样？（可跳读，不影响主线）
> 以标准工具 Agent 为例，LangChain 的 AgentExecutor 替你做的循环是：模型收到"任务 + 工具清单"后决策（要么给出 tool_calls，要么给出最终答案）-> 你执行工具 -> 把工具结果作为 tool 角色的消息回填进上下文 -> 再交给模型决策，如此往复，直到模型给出最终答案或达到 max_iterations 上限。
> 对照 Week 2 的 \`ReActLoop\`（loop.py:113），它的 docstring 把终止条件写成了三条：*"模型不再请求工具（给出最终文本答案）→ stop_reason="final_answer"；达到 max_iter → stop_reason="max_iter"；调用方通过 interrupt 回调返回 True → stop_reason="interrupted""*（loop.py:116-119）。你会发现 AgentExecutor 那套"决策 -> 调用 -> 回填"就是这段循环的另一种表达——这就是为什么本篇说"先亲手读过，才知道框架藏起了什么"。

> ### 岔路：框架文档为什么总在变？（可跳读，不影响主线）
> 框架迭代快，接口高频变化，官方文档跟着频繁改写——你上个月学的 API 下个月可能就换写法（课后题 Q5 的"长期稳定性"维度，指的就是这一条）。所以选型清单里永远有一栏叫"接口稳定性"：越是关键系统，越要把这栏权重调高。这也是本篇一直强调"先有底层证据"的原因——messages、tool_calls 这套东西，换个框架还是这套，变的是组织方式，不是语言。

> ### 岔路：star 数为什么不是选型依据？（可跳读，不影响主线）
> star 数反映的是"多少人关注、生态多活跃"，不反映"它和你任务形态的匹配度"。框架的流行由社区、营销、生态共同驱动，而选型要回答的问题是封闭的：我的流程需要分支吗？需要人机节点吗？需要审计吗？——这些问题的答案在任务里，不在排行榜里。所以本篇的所有边界都落在任务维度上，刻意不写"哪个框架最好"。

## 为什么这样写

- **先有自己的抽象层，再谈框架**：\`agent_app/llm.py\` 的 docstring 敢给 temperature 写默认值 *"opinionated default for "stable + slightly varied""*（llm.py:62）——一个共享函数就主张"稳定 + 略多样"。框架是这种"有主见的封装"的放大版；没亲手读过 \`call_model\`，你就看不出框架的默认值在替你做哪些决定。
- **把循环从头读一遍，才能读懂 AgentExecutor**：\`agent_app/loop.py\` 的 docstring 把终止条件逐条写死：*"模型不再请求工具（给出最终文本答案）→ stop_reason="final_answer"；达到 max_iter → stop_reason="max_iter""*（loop.py:117-118）。LangChain 的 AgentExecutor 替你做的就是这个循环；先亲手走读一遍，才知道它把哪些状态藏了起来。
- **工具调用先自己读通，选型才有的比**：llm.py:64 的 docstring 写着 *"tools: pass-through to OpenAI tool_calls protocol (Day 4)"*——工具调用在 Week 1 的代码走读里已实现过。对比框架时，"框架的工具注册"和"自己传 tools"才有真实差异可谈，而不是纸面参数对比。
- **预算意识从第一周就写进默认值**：llm.py:63 的 docstring 把 max_tokens 写成 *"hard ceiling; protect Day 3 ReAct loop"*——循环必须有成本上限。框架的 AgentExecutor 同样有 \`max_iterations\` 这类参数：原理是同一个，谁先读过"循环不设限就烧钱"的教训，谁就懂框架为什么要设这个参数。
- **这一天不写代码，是刻意为之**：判断型内容没有"可走读的实现"可展示。对比的价值在任务形态（是否需要分支/回环/人机节点），不在某段循环怎么转——所以本篇的结论落在对比表里，而不是落在一个跑不起来的 demo 上。

## 本章小结

- 框架是工程组织层：组织模型调用、工具、状态、检索和工作流，不让模型更聪明，也不替你负责权限、数据和评测设计。
- 选型看任务形态：单一工具循环用 LangChain；分支/回环/人机节点用 LangGraph；RAG 优先看 LlamaIndex。
- 多 agent 不是默认选项，拆角色必须换来"隔离、并行、互审"之一；低代码 demo 跑通不等于工程交付完成。
- 抽象层坐标系：纯 SDK 的 \`call_model\`（llm.py:47）与自写循环 \`ReActLoop\`（loop.py:113）是两端的实例，所有框架都落在这两点之间。
- 这一处是判断力的事——判断力来自对抽象层的理解，不是 star 数；后面无论你选框架还是继续自写循环，问的都是"它封装了哪一段、藏起了什么"，核心没变复杂。

## 一句话边界

- 框架不替你理解底层，出问题仍要回到 messages、tool_calls、retrieved chunks 这些证据。
- 选型看任务形态（流程是否需要分支/回环/人机），不看 GitHub star。
- 多 agent 不是默认选项，单 agent + 多工具能解决就别拆。
- 低代码 demo 成功不等于工程交付完成。

## 读完应该能用自己的话回答

1. Agent 框架替你做什么？它和"让模型更聪明"是什么关系？
2. LangChain 和 LangGraph 的核心区别是什么？什么场景选哪个？
3. LlamaIndex 的定位是什么？它适合什么场景？
4. 为什么多 agent 不是默认选项？
5. 低代码平台的边界在哪？

## 想深入

各框架的范式维度对比（规划深度/验证/状态/错误恢复/成本）、CLI/MCP/Skill 分层选型等，见八股·02 核心框架。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 框架。请解释：1) Agent 框架替开发者做什么；2) 纯 SDK、LangChain、LangGraph 各自的核心抽象和取舍；3) LlamaIndex 和多 agent 框架的定位；4) 为什么不该一上来就用多 agent。不要给完整代码，不要按 star 数推荐。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

### Q1. 框架

Agent 框架主要解决什么问题？

A. 让模型不用工具也能自动访问企业私有数据
B. 组织模型调用、工具、状态、检索和工作流
C. 隐藏所有底层细节，因此不再需要调试 messages
D. 替代业务代码里的权限、数据和评测设计

### Q2. LangGraph

LangGraph 更适合哪类任务？

A. 状态和分支明确的多步骤工作流
B. 单次 prompt 就能完成的短问答
C. 只需要把文档切成 chunk 的 RAG ingest
D. 不需要显式状态的低代码表单

### Q3. LlamaIndex

在第一周的框架对比里，LlamaIndex 更应被理解为什么定位？

A. RAG 优先框架
B. 默认首选的多 Agent 协作框架
C. 主要负责可视化拖拽工作流的平台
D. 专门替代 Prompt 模板管理的工具

### Q4. AutoGen

什么时候更有理由引入 AutoGen 这类多 agent 框架？

A. 为了让简单问答看起来更像复杂系统
B. 子任务需要角色隔离、协作或互审
C. 当单 agent 加工具已经足够稳定时仍默认引入
D. 只为了把一个工具拆成多个聊天角色

### 开放题（1 道）

**Q5. 反向选型练习**：从下面 4 个场景中任选 1 个，回答"我**不会**用 LangChain"的理由（≥3 条）：

- 场景 A：内部财务报销审批 Agent，强约束、流程固定、必须可审计
- 场景 B：研究型 Multi-Agent 实验，需要观察智能体之间互相辩论的行为
- 场景 C：移动端轻量 chatbot，对包体积敏感
- 场景 D：CTO 要求"未来 6 个月架构稳定性优先于速度"

每条理由必须落到具体维度（如"调试成本"、"可控性"、"可评测性"、"依赖体积"、"长期 API 稳定性"），**禁止**写"因为不喜欢"。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | 框架是工程组织层，不直接提高模型事实能力；不能替代权限、数据和评测设计。 |
| Q2 | **A** | LangGraph 的优势是 State / Node / Edge 的显式状态机式工作流。 |
| Q3 | **A** | v3 已明确将 LlamaIndex 标为 RAG 优先，不能与 LangChain/LangGraph/AutoGen 并列做"通用 Agent 框架"。 |
| Q4 | **B** | 多 Agent 的真正价值是角色隔离、协作和互审；单 Agent 已稳定就别为了"看起来像复杂系统"而引入。 |

### 开放题参考思路

**Q5. 反向选型**：合格答案要：

1. **场景对应**：选了场景 A（财务审批）→ 重点谈"审计成本/版本稳定性/可控性"；选了场景 B（研究）→ 谈"灵活性 vs LangChain 的封装代价"。
2. **3 条理由都落维度**：例如：
   - 调试成本：LangChain Chain 多层抽象，messages 路径不直观
   - 长期稳定性：包接口高频变化，6 个月架构稳定性目标受影响
   - 依赖体积：完整安装较重，移动端不合适（场景 C）
3. **不要写"我反对 LangChain"，而是"在该场景下 trade-off 不利"**——这是工程师面试时被反复考的"对事不对人"。

**红线**：写"我用 LangGraph 替代"但说不清 LangGraph 在该场景的具体收益，**不算通过**。
`,hf=`---
title: Day 7 项目选型与 PRD
tags:
  - week1/day07
  - concept
  - code
  - exercise
---

# Day 7：项目选型与技术 PRD

> 阅读约 30 分钟 ｜ 前置：[[day01-LLM-API基础]] ~ [[day06-框架对比]] ｜ 本篇包含：概念讲解 + 结构走读 + 课后习题
> 本篇代码：无——PRD 是文档型交付物，本文走读的是"PRD 的结构"而非代码（见下文"本篇没有新代码"）

## 本篇解决一个问题

学了一周概念，很多人会忍不住做一个"万能助手"：能聊天、能查天气、能读文件、能写摘要。听起来功能多，但很难证明工程能力--面试官一追问就答不上"你解决了什么具体问题"。

今天要把第一周的知识收束成一个可执行的主项目方向，并写一份技术 PRD。重点不是选最炫的项目，而是选一个有明确场景、真实约束、能演示、能评测、能复盘的项目。

**一句话主旨**：主项目 = 明确场景 + 真实约束 + 能评测能复盘；技术 PRD 就是把这些判断写下来、让 Day 8 起照着实现的文档。

## 一个例子

两种项目方向：

\`\`\`text
万能助手：能聊天 + 查天气 + 读文件 + 写摘要
  -> 功能多但没焦点，演示时讲不清"解决谁的什么问题"，评测没标准

诊断 Agent：输入一段报错日志/指标告警，Agent 调工具查证并给出归因
  -> 场景明确（故障诊断），有真实约束（要查证不能瞎猜），
     能演示（输入告警 -> 输出归因），能评测（有标注的故障样本）
\`\`\`

差别在于：后者能回答"解决谁的问题、原来怎么解决、Agent 介入后提升在哪"。

## 这个概念是什么

**好 Agent 项目** 不是"套个框架"，而是有明确场景、真实约束、可演示流程、可评测指标、可复盘失败案例的工程作品。判断一个项目值不值得做，可以用几个问题：是否解决真实问题、是否需要 Agent（而不是普通脚本就行）、是否能演示、是否能评测、是否有工程结构、是否能失败恢复、是否能写进简历。

**技术 PRD** 是回答"怎么实现、怎么评测、怎么分阶段交付、风险在哪"的文档，不是产品宣传文档。

接下来走读这份 PRD 的结构——没有代码可看，走读对象就是文档本身长什么样。

## 本篇没有新代码

今天没有配套代码：PRD 是 Week 1 的**文档型交付物**，你要交付的不是一个能跑的程序，而是一份把"做什么、怎么做、怎么验证"写清楚的技术文档。所以本篇走读的不是代码，而是 **PRD 的结构**——一份技术 PRD 长什么样、每一节回答什么问题。下面的走读以 PRD 的七节骨架为主线：**背景 → 用户故事 → 功能清单 → 技术架构 → 评测指标 → 里程碑 → 风险登记**，这份骨架就是你要写的 \`docs/PRD-v1.0.md\` 的目录。对照它逐节填充，就是今天的交付物。

### 第一道闸门：写 PRD 之前，先过"七问"

> 为什么动手写文档之前，先判断项目值不值得做？因为 PRD 是给"已经确定要做的项目"定方案的——项目本身立不住，文档写再细也是空中楼阁。Day 7 的产出有两样：一个选定的项目方向，一份说明它怎么实现的 PRD。

\`选型闸门\`：PRD 写作前置的判断清单（不属于 PRD 正文，是写之前的检查单）

| 问题 | 判断标准 |
|---|---|
| 是否解决真实问题 | 能说出具体任务和痛点 |
| 是否需要 Agent | 需要工具、状态、检索、多步执行 |
| 是否能演示 | 5-10 分钟能展示完整链路 |
| 是否能评测 | 有输入样本、指标、bad case |
| 是否有工程结构 | 有服务层、工具层、状态、日志、配置 |
| 是否能失败恢复 | 工具异常、检索为空时有处理 |
| 是否能写进简历 | 能用数字说明效果、成本、延迟 |

> 为什么这七问按这个顺序排？前两问筛"方向对不对"：真实问题决定有没有人用，是否需要 Agent 决定是不是非 LLM 不可。中间两问筛"能不能证明"：演示和评测是验收的两只手。后三问筛"工程上成不成立"：结构、恢复、简历，都是"做完之后"才见分晓的事。

怎么用这张表？它不是打分表，是闸门——任何一行答不上来，就换方向或降级。七问全过，才轮到写 PRD。

只能展示"我调了某个模型 API"的项目，不足以作为主项目。

### 走读 PRD 的七节骨架

下面这七节就是 \`docs/PRD-v1.0.md\` 的正文骨架，逐节问"这一节回答什么问题"：

1. **背景**：为什么这个场景需要 Agent，普通脚本或聊天为什么不够。
2. **用户故事**：谁在什么情况下用它完成什么任务。
3. **功能清单**：MVP 必须有什么（P0）、增强版延后（P1）、明确不做什么。
4. **技术架构**：模型、工具、RAG/Memory、工作流、服务接口、观测日志。
5. **评测指标**：准确率、P0 通过率、延迟、成本、人工介入率。
6. **里程碑**：分阶段交付什么。
7. **风险登记**：可能的风险、影响、缓解方案。

七节正好对应一次工程交付的七个问题。逐节设问，你就能看清每一节存在的理由：

> 为什么第 1 节要写"普通脚本或聊天为什么不够"？因为这一节要回答"这确实是 Agent 的问题，不是用 if/else 就能糊弄过去的问题"——写不出这一段的项目，多半不需要 Agent。

> 为什么第 2 节要写"谁在什么情况下"？因为场景钉得越具体，"功能清单"和"评测指标"就越容易推导出来；写"给用户用"等于没写。

> 为什么第 3 节要分 P0/P1，还要单列"明确不做什么"？P0 是"没有它演示就立不住"的功能，P1 是"做完 P0 还有时间才碰"的增强；"不做什么"是范围的天花板——没有它，功能清单会一路长下去。

> 为什么第 4 节要列"模型、工具、RAG/Memory、工作流、服务接口、观测日志"六样？因为它们正好是你 Day 1-6 学过的六层：模型调用（Day 1）、提示工程（Day 2）、ReAct 循环（Day 3）、工具（Day 4）、RAG（Day 5）、框架与观测（Day 6）。这一节是"第一周知识的地图"。

> 为什么第 5 节要"准确率、P0 通过率、延迟、成本、人工介入率"五个指标？前两个管"效果对不对"，中间两个管"能不能用、烧多少钱"，最后一个管"Agent 到底替人省了多少事"——五个都能量化，项目才不是 happy path 演示。

> 为什么第 6 节要里程碑？把"做完项目"切成"每周交付一个可验收的里程碑"，进度才能自己检查，而不是最后一周才慌。

> 为什么第 7 节要提前写风险？风险写下来才有缓解方案；不写，就是出事当天才开始想怎么办。Day 6 见过的"检索为空、工具异常"，就是最典型的两条。

其中"明确不做什么"和"评测指标"最容易被漏--没有它们，项目会越做越大、做完无法验证。

把七节套到"诊断 Agent"这个例子上（示例，不是你的 PRD），骨架立刻变具体：

1. **背景**：线上故障靠人工翻日志定位，平均 40 分钟；Agent 把查证过程自动化。
2. **用户故事**：值班工程师收到告警后，把报错日志贴给 Agent，3 分钟内拿到归因和建议命令。
3. **功能清单**：P0 = 输入日志 + 调工具查证 + 输出归因；P1 = 生成修复命令；不做 = 自动执行修复。
4. **技术架构**：模型（Day 1 的 \`call_model\`）+ 工具（Day 4 的工具层）+ ReAct 循环（Day 3）+ 观测日志（Day 6）。
5. **评测指标**：20 条标注故障样本的归因准确率 ≥ 80%，P0 通过率 100%，单次 ≤ 3 分钟，成本 ≤ 0.5 元/次。
6. **里程碑**：M1 跑通 P0 链路 → M2 补 P1 与评测脚本 → M3 打磨 bad case 并复盘。
7. **风险登记**：工具超时 → 设超时与重试；检索为空 → 明确"答不出就说不确定"。

注意第 3 节的"不做 = 自动执行修复"：一句话把范围钉死，演示和评测都不必覆盖自动修复。这就是"明确不做什么"的实际作用。

> ### 岔路：技术 PRD 和产品 PRD 差在哪？（可跳读，不影响主线）
> 产品 PRD 回答"要不要做这个产品"：市场有多大、用户是谁、商业价值在哪，读者是产品经理和老板。技术 PRD 回答"怎么实现、怎么验证"，读者是自己和未来的协作者——Day 7 要写的是后者。判断标准很简单：这篇文档能不能指导 Day 8 的编码？能，就是技术 PRD；不能，就是产品宣传文档。

### 选型原则：能做完 > 功能全

> 为什么选型维度里"兴趣"排第一、却不是第一权重？因为主项目要连续做两到三周：兴趣决定你愿不愿意做完，数据/工具/评测/时间决定你能不能做完——后者更硬，缺了它项目必烂尾。

最好的选择不是功能最多的项目，而是你能做出可运行 demo 的项目。按几个维度判断：兴趣（愿意连续做吗）、数据（有样本/文档/API/mock 吗）、工具（能设计 3-5 个核心工具吗）、评测（能写测试 case 吗）、简历证明（能量化结果吗）。

> 五个维度里哪两个是硬闸门？数据和评测。工具可以再设计，时间可以再压缩，但样本/文档/API/mock 拿不到、评测 case 写不出来，项目做一半就会卡死——所以这两行答不上来，直接换项目。

某个项目数据拿不到、范围太大，就算兴趣高也要降级。能做完比功能全更重要。

走读完整份结构，今天的动手步骤其实只有三步：

1. **选题**：过七问闸门，任何一行答不上来就换方向；
2. **搭骨架**：新建 \`docs/PRD-v1.0.md\`，把七节标题写上去；
3. **逐节填充**：每一节填到"能回答它那一问"为止——尤其是第 5 节，评测指标要具体到"P0 case 10 条 + P1 case 20 条 + 评测脚本怎么跑"。

填完就是 Day 7 的交付物，也是 Day 8 起代码的施工图。

## 为什么这样写

本篇没有代码文件，下面各条的证据都引自本文保留的原文段落（行号以本文档为准）——PRD 的写作约定，就是这份文档自己的"注释"。

- **PRD 必须回答"怎么实现、怎么评测、怎么分阶段交付、风险在哪"，而不是宣传卖点**：见本文第 42 行原文——"技术 PRD 是回答"怎么实现、怎么评测、怎么分阶段交付、风险在哪"的文档，不是产品宣传文档"。读者是自己和未来的协作者，不是投资人；写不清实现细节的 PRD 无法指导 Day 8 起的编码。
- **"明确不做什么"和"评测指标"必须各占一节，不是凑数**：见本文第 100 行原文——"没有它们，项目会越做越大、做完无法验证"。P0/P1 切分是范围闸门，评测指标是验收闸门，两扇门缺一扇，项目不是失控就是没法证明。
- **选型判断"数据/工具/评测"的权重高于"兴趣"**：见本文第 125 行原文——"某个项目数据拿不到、范围太大，就算兴趣高也要降级。能做完比功能全更重要"。主项目要连续做两到三周，做不完等于零。
- **七问闸门专门留了一问给"只能调 API"的项目**：见本文第 70 行原文——"只能展示"我调了某个模型 API"的项目，不足以作为主项目"。这一问把"会调 API"和"会做 Agent"分开，是第一周结束时的自我审查。
- **"选型闸门"必须排在 PRD 七节之前**：见本文第 19 行原文——"今天要把第一周的知识收束成一个可执行的主项目方向，并写一份技术 PRD"。顺序就是取舍：先有方向，再写方案；方向没定就动笔，七节写出来也是空转。

## 本章小结

- 好 Agent 项目 = 明确场景 + 真实约束 + 可演示 + 可评测 + 可复盘；"万能助手"是反面例子，不是项目。
- 技术 PRD 七节骨架：背景 → 用户故事 → 功能清单 → 技术架构 → 评测指标 → 里程碑 → 风险登记，逐节回答"为什么做 / 给谁做 / 做什么 / 怎么做 / 怎么算做完 / 何时交 / 出事怎么办"。
- "明确不做什么"和"评测指标"是两扇闸门：前者控范围、后者控验收，最容易被漏。
- 选型先过七问闸门，再按兴趣、数据、工具、评测、简历证明五个维度比较；数据拿不到、范围太大就降级——能做完比功能全更重要。
- 这一处是"把第一周学的东西收束成一份可执行方案"的事——Day 8 起只是把这份 PRD 一节一节落成代码和评测集，核心没变复杂。

## 一句话边界

- 好项目有明确场景和真实约束，不是"万能助手"。
- 技术 PRD 要回答怎么实现/评测/交付/风险，不是产品宣传文档。
- "明确不做什么"和"评测指标"不能漏，否则项目失控、无法验证。
- 选型选能做完的，不选最炫的。

## 读完应该能用自己的话回答

1. 好 Agent 项目和"万能助手"的差别在哪？
2. 判断一个项目值不值得做，可以用哪些问题？
3. 一份技术 PRD 该写哪几节？哪两节最容易被漏？
4. 选型为什么选"能做完的"而不是"最炫的"？

## 想深入

好 Agent 项目的六维度评估、选型的可行性闸门等，见八股·01 基础概念，以及作者文章《什么样的 Agent 项目才算好项目》。

## 交给 AI 的问题

\`\`\`text
我准备做一个 Agent 主项目。请帮我判断：1) 什么样的 Agent 项目算好项目、什么样的不算；2) 一份技术 PRD 该写哪几节；3) 选型时该看什么、不该看什么。不要给我具体项目代码，不要推荐框架。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. 项目**

一个"万能助手"作为主项目的主要问题是什么？

A. 功能边界模糊，难以评测和证明能力
B. 功能越多，评测集就越容易完整覆盖
C. 只要能聊天，就能证明 Agent 工程能力
D. 没有垂直场景也能自然形成清晰简历亮点

**Q2. PRD**

技术 PRD 与产品 PRD 的关键区别是什么？

A. 技术 PRD 主要证明市场空间，不需要实现细节
B. 技术 PRD 必须说明实现、评测、架构和里程碑
C. 技术 PRD 只列功能，不需要说明验收方式
D. 技术 PRD 应尽量避免写不做什么

**Q3. 选型**

选择主项目时，哪个因素最能降低后续做不完的风险？

A. GitHub star 数最高
B. 数据、工具、评测和时间范围都可控
C. 尽量覆盖最多热门框架和协议
D. 优先选择听起来最通用的助手方向

**Q4. 评测**

为什么 Day 7 就要考虑评测？

A. 因为评测写好后，后面就不需要人工检查结果
B. 因为评测决定项目是否能证明有效，而不是只演示 happy path
C. 因为有了评测，就不需要记录 bad case
D. 因为评测指标可以替代技术架构设计

### 开放题（1 道）

**Q5. PRD 自评**：用《什么样的 Agent 项目才算好项目》里的 7 个判断问题，给你的 PRD-v1.0 打分（每题 0-3 分）：

| 判断问题 | 分数 | 主要证据（PRD 哪一节） |
| --- | --- | --- |
| 1. 是否有真实约束？ | | |
| 2. 是否有明确边界（不做什么）？ | | |
| 3. 是否有可演示流程？ | | |
| 4. 是否有可评测指标？ | | |
| 5. 是否有失败案例? | | |
| 6. 是否有人能复用/复盘？ | | |
| 7. 能否在简历一句话讲清？ | | |

总分 ≥ 15 才算合格。每个低于 2 分的题目，必须在 PRD-v1.0 里加一段对应内容，再做一次自评。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **A** | 万能助手边界太宽，很难验收、评测和复盘——这是几乎所有"30 天最后一周烂尾"的根本原因。 |
| Q2 | **B** | 技术 PRD 落到实现、架构、评测和排期；不是市场分析，也不是功能清单。 |
| Q3 | **B** | 可完成性来自资源、范围和验收标准清楚。GitHub star 不是选型理由。 |
| Q4 | **B** | 没有评测，项目只能演示 happy path，不能证明工程质量。 |

### 开放题参考思路

**Q5. PRD 自评**：合格答案要：

1. **诚实给低分**：第一版 PRD 几乎不可能 21 分；如果你给自己 19+ 分，多半是自我安慰。常见弱项是 Q5（失败案例）和 Q4（评测指标具体度）。
2. **针对每个低分写补丁**：例如 Q4 给了 1 分 → 在 PRD §"评测指标"里补上"P0 case 10 条 + P1 case 20 条 + 评测脚本路径 + 运行方式 + 阈值"。
3. **第二轮自评**：补完再打一次分，证明你修过了。

**红线**：直接给 21 分却拿不出 P0 case 列表，**不算通过**——这道题就是教你**拒绝自我感动**。
`,_f=`# 第一周快速通道（Quickstart）

> **适合谁**：已经熟练调过 OpenAI / Anthropic API、写过 Python、做过 RAG demo 的人。
> **不适合谁**：从未跑过 LLM API、不知道 token / system prompt 是什么的人。**请回到 Day 1 走完整流程**。
> **预计耗时**：60-90 分钟（不含 Day 7 PRD 写作）

## 你能跳过什么

| Day | 能跳过吗 | 跳过的前提 | 强烈不建议跳过的部分 |
| --- | --- | --- | --- |
| Day 1 | ✅ | 你的代码已经记录 token usage + 成本估算，且 \`call_model()\` 已经抽出 | 读懂 Day 1 代码走读里的 call_model，能复述它封装了什么 |
| Day 2 | 部分 | 你写过结构化输出、做过字段级评测 | "v1→v2→v3 准确率对比"——这个比你想的更难 |
| Day 3 | ❌ | — | ReAct 最小循环 + max_iter 实验 |
| Day 4 | 部分 | OpenAI Function Calling 你已熟练 | **Anthropic 协议对比**——多数人没真正写过 |
| Day 5 | 部分 | 你做过中文向量检索 | 召回/生成归因报告 |
| Day 6 | ❌ | — | 反向选型练习（开放题 Q5）|
| Day 7 | ❌ | — | PRD-v1.0 + 7 问自评 |

> **结论**：可以跳的是 Day 1 / Day 2 的"我已经会"部分；**不能跳的是 Day 3 Loop 实验、Day 4 协议对比、Day 6 反向选型、Day 7 PRD**。这四件事是本周真正训练判断力的核心。

## 60 分钟急行军路线

如果你只有一个晚上，按这个顺序走：

1. **5 min**：读 \`../README.md\` 的"本周最重要的判断力"7 条 + "跨天依赖图"。
2. **10 min**：读 Day 1 代码走读（llm.py 的 _client + call_model），能说出环境变量从哪读、一次调用返回什么。
3. **10 min**：完成 Day 3 课后习题 Q5（ReAct 死循环推演）。
4. **10 min**：读 Day 4 代码走读，画出 tool_calls 多轮闭环的时序图。
5. **10 min**：读 Day 5 代码走读，梳理 ingest→rag 链路与答错排查顺序。
6. **10 min**：做 Day 6 反向选型开放题（任选一个场景，写 3 条理由）。
7. **5 min**：开始写 PRD-v1.0 的骨架（6 节标题 + 一句话方向定位），剩下放第二天补完。

完成上面 7 步，你已经达到"懂第一周判断力"的水平；剩下的细节交付物可以分散到接下来 3-4 个晚上完成。

## 自检：你真的可以跳过吗？

如果以下任一题答不出来，**不要走快速通道**：

1. 一次 Function Calling 失败，可能在哪 4 个层失败？（提示：模型生成、参数、执行、回填）
2. 召回有证据但生成错答，你会先调 prompt 还是调 chunk？为什么？
3. ReAct 的"R-A-O"和"四大组件"分别在解释什么？
4. 你最近一个项目，能在 30 秒内说清场景、约束、评测指标和失败案例吗？

3-4 题答不出 → 老老实实走 Day 1。
1-2 题答不出 → 至少补 Day 4 + Day 5。

## 最后

快速通道的目的不是"省时间"，而是**避免重复学你已经会的，把时间砸在还不会的地方**。如果你跳完一遍后做整合自测（\`../自测题/第一周-整合自测.md\`）拿不到 4/5 题，请回头重读对应 Day。
`,yf=`# 第一周术语表

> 用人话建立索引，不要求一次背完。"Day"列说明该术语在哪一天会真正用到，便于回查。
>
> 掌握度档位：
> - **必懂** = 当天就要能用自己的话讲清
> - **听过** = 知道存在和大致定位即可
> - **后学** = 第一周不深挖，留到第二、三周

## 本周每日目标（决定术语掌握深度）

| Day | 本周需要做到 | 不要求做到 |
| --- | --- | --- |
| Day 1 | 区分 token / temperature / system prompt 的角色，能解释 usage 与成本 | 自己手写 tokenizer |
| Day 2 | 能写出 v1/v2/v3 三版 prompt 并跑出字段级准确率；能区分 JSON schema、Pydantic、XML tag 的用途 | 掌握 Instructor 框架；做 LLM-as-Judge 评测 |
| Day 3 | 能用 max_iter 跑出最小 ReAct loop；能讲清 R-A-O 循环和"四大组件"不是同维度 | 实现复杂的 Plan-Execute / Reflexion |
| Day 4 | 能让模型稳定调用 1 个工具，理解 tool_call_id 必须配对回填；知道 OpenAI/Anthropic 协议字段差异 | 自己写 MCP server |
| Day 5 | 跑通 Chroma + top-k 检索（哪怕走离线保底）；能区分召回失败和生成失败 | 做 rerank、query rewrite 工程化 |
| Day 6 | 能用 ≥6 维度对 ≥5 个框架做对比并写出推荐场景 | 把每个框架都跑一遍 |
| Day 7 | 写出 PRD 6 节 + 风险登记 + P0 评测 case ≥ 5 条 | 把项目实现完 |

## 术语索引

| 术语 | 掌握度 | Day | 一句话解释 |
| --- | --- | --- | --- |
| LLM | 必懂 | Day 1 | 大语言模型，根据上下文预测并生成下一个 token。 |
| Token | 必懂 | Day 1 | 模型处理文本的基本单位，影响上下文长度、速度和费用。 |
| Temperature | 必懂 | Day 1 | 控制生成发散程度的采样参数，不控制事实正确性。 |
| System Prompt | 必懂 | Day 1 | 给模型的高优先级行为约束，用来定义角色、边界和输出格式。 |
| Stop Token | 听过 | Day 1 | 让模型遇到指定文本时停止生成的协议控制手段。 |
| Harness | 听过 | Day 1 | 模型之外的工程壳：工具、状态、日志、权限、评测、上下文管理。 |
| Prompt Engineering | 必懂 | Day 2 | 把任务、输入、约束、输出和失败处理写清楚。 |
| Few-shot | 必懂 | Day 2 | 给模型几个输入输出样例，用来校准任务边界。 |
| CoT | 听过 | Day 2 | Chain of Thought，适合多步推理，但生产输出不一定要暴露推理过程。 |
| Self-Consistency | 后学 | Day 2 | 多次生成后投票或聚合，用成本换稳定性。 |
| JSON mode / Schema | 必懂 | Day 2 | 约束模型输出结构，方便程序解析，但不保证字段事实正确。 |
| Pydantic | 听过 | Day 2 | Python 类型校验库，常用于检查模型输出字段。 |
| Instructor | 后学 | Day 2 | 用 Pydantic 等类型约束驱动 LLM 结构化输出的工具库。 |
| XML tag | 听过 | Day 2 | 用 \`<tag>...</tag>\` 包裹结构片段，Anthropic 系常用。 |
| Agent | 必懂 | Day 3 | 能围绕目标多步调用模型、工具和状态的系统。 |
| Agent Loop | 必懂 | Day 3 | 模型决定下一步、工具执行、结果回填、继续判断的循环。 |
| ReAct | 必懂 | Day 3 | Reason → Act → Observe 的行动范式。 |
| Plan-Execute | 必懂 | Day 3 | 先规划步骤，再逐步执行的范式。 |
| Reflexion | 听过 | Day 3 | 根据失败反馈生成反思并再次尝试的范式。 |
| max_iter | 必懂 | Day 3 | Agent Loop 的硬终止条件，防止无限循环。 |
| Tool Use | 必懂 | Day 4 | 模型生成工具调用请求，程序执行工具并回填结果。 |
| Function Calling | 必懂 | Day 4 | 工具调用的一种结构化输出协议（OpenAI 命名）。 |
| tool_call_id | 必懂 | Day 4 | 用于把工具结果对应到正确的工具请求；并行时尤其关键。 |
| MCP | 听过 | Day 4 | Model Context Protocol，用统一协议把外部能力暴露给 Agent（Day 16 深入）。 |
| RAG | 必懂 | Day 5 | Retrieval-Augmented Generation，先检索资料，再让模型基于资料回答。 |
| Embedding | 必懂 | Day 5 | 把文本转成向量，用于语义相似度检索。 |
| Vector DB | 必懂 | Day 5 | 存储和检索向量的数据库，本周统一用 Chroma。 |
| Chunk | 必懂 | Day 5 | 文档切分后的片段，是 RAG 检索的基本单位。 |
| Top-k | 必懂 | Day 5 | 每次检索返回最相似的前 k 个片段。 |
| Rerank | 后学 | Day 5 | 对召回片段二次排序，提高证据质量。 |
| Query rewrite | 听过 | Day 5 | 用 LLM 把用户原问题改写成更适合检索的查询。 |
| LangChain | 听过 | Day 6 | LLM 应用开发框架，集成多、封装重。 |
| LangGraph | 听过 | Day 6 | 用 State / Node / Edge 管理 Agent 工作流的图编排框架。 |
| LlamaIndex | 听过 | Day 6 | RAG 和数据索引优先的框架（不是通用 Agent 框架）。 |
| AutoGen | 听过 | Day 6 | 多 Agent 协作框架。 |
| Coze / Dify | 听过 | Day 6 | 国内常见低代码 Agent 平台。 |
| PRD | 必懂 | Day 7 | Product Requirement Document；本周写的是偏实现和评测的技术 PRD。 |
| MVP | 必懂 | Day 7 | Minimum Viable Product，最小可用版本。 |
| P0 / P1 case | 必懂 | Day 7 | 评测集里"必须通过"和"建议通过"的优先级分档。 |
| Risk Register | 听过 | Day 7 | 风险登记表，列出已知风险与缓解方案。 |
`,bf=`# 第一周周末复盘

> **何时做**：Day 7 当晚或周末，第一周最后一件事。
> **目的**：把 Day 1-7 真正连起来，避免"做完 7 天但没整合"。完成本表是 Week 1 的硬性退出标准。
> **预计耗时**：60-90 分钟（含整合实操）

## 一、概念掌握清单（必须全部勾选）

按你 Day 1-7 的实际掌握程度对照打勾：

- [ ] **LLM 调用（Day 1）**：能用自己的话讲清「一次模型调用」是怎么发生的、token usage 与估算成本的关系、调用入口如何被后续各天复用
- [ ] **结构化输出（Day 2）**：能讲清怎么让模型输出能被程序稳定消费（约束输出格式），以及怎么用多版本 prompt + 固定样本 + 字段级准确率来迭代评测
- [ ] **ReAct 范式（Day 3）**：能讲清 Reason → Act → Observe 最小循环怎么转起来，以及为什么需要 max_iter 这类防死循环机制
- [ ] **工具调用（Day 4）**：能讲清工具调用链路——模型负责选工具与填参数、程序负责执行——以及怎么让模型稳定选对工具（可选进阶：对比 OpenAI / Anthropic 两家的工具调用协议差异，不影响 Week 1 通过）
- [ ] **RAG 链路（Day 5）**：能讲清「ingest → 检索 → 生成」整条链路，以及回答里哪些内容来自检索召回、哪些来自模型生成（召回/生成归因）
- [ ] **框架对比（Day 6）**：能讲清按抽象层与任务形态对比框架的思路，≥5 框架 × ≥6 维度的对比方法，以及各自推荐场景
- [ ] **PRD 七节（Day 7）**：能讲清 PRD 七节结构（6 节 + 风险登记表）各自回答什么问题，评测指标与里程碑怎么定
- [ ] **课后习题（7 篇正文）**：每篇 4 选择 + 1 开放，错 ≤2 题；开放题写够字数

少 1 项 → **Week 1 不算完成**。回去补，再做下面的复盘。

## 二、整合自测（30 min）

打开 [\`../自测题/第一周-整合自测.md\`](第一周-整合自测.md)：

1. 完成 5 道综合判断题（每题 ≥100 字）
2. 完成 1 道整合实操题（A 或 B）
3. 把结果存成本地笔记

## 三、自我复盘表（写下来）

| 维度 | 我的本周输出 | 留到下周修的问题 | 暴露出的真实弱项 |
| --- | --- | --- | --- |
| LLM 基础认知（Day 1） | | | |
| Prompt 工程（Day 2） | | | |
| Agent 范式（Day 3） | | | |
| Tool Use（Day 4） | | | |
| RAG（Day 5） | | | |
| 框架判断（Day 6） | | | |
| PRD/选型（Day 7） | | | |
| 整合（实操题） | | | |

存成本地笔记。**重点是第三列**——能写出 ≥3 条"真实弱项"才算诚实复盘。

## 四、判断你是否可以进入 Week 2

满足以下**全部**条件才进入 Week 2：

1. 上面概念掌握清单全部完成（7 个概念 + 课后习题达标）
2. 整合自测实操题（A 或 B）完成并写好结果
3. 自我复盘表第三列写出 ≥3 条真实弱项
4. 你能在 60 秒内向陌生人讲清楚：「我第一周做了什么、第二周准备做什么、为什么这样选」

如果 4 项里有任何一项做不到，**先在第一周再加 1-2 天**，不要为了进度跳进 Week 2。

## 五、给 Week 2 的"未解决问题清单"

把第一周暴露但没修的问题列出来，第二周第一天先看一遍：

\`\`\`
[ ] 例：Day 5 RAG 在 X 类 question 上召回率仍 < 50%
[ ] 例：Day 4 Anthropic 端在并发工具时 stop_reason 判断有边界 bug
[ ] 例：PRD 评测指标 P0 case 还差 5 条
\`\`\`

存成本地笔记，每解决一条就划掉一条。这是工程师习惯的最小痕迹。

## 六、可选：写一篇 ≤500 字的"第一周一手感受"

不为了发表，只为了沉淀。题目自定，例如：

- "ReAct 对我而言最反直觉的一点"
- "我第一次让模型选错工具是因为什么"
- "我打算把第一周学到的东西用在哪个真实场景"

存成本地笔记。一年后回头看，这种文章的价值会超过任何 README。
`,kf=`# 第一周整合自测

> 周末或 Day 7 完成后做一次。这套题不分 Day，混合考查"你是否真的把第一周连起来了"。

## 一、综合判断题（5 道）

### Q1. 一个生产 Agent 的简单链路：用户问 "上海明天天气?"。模型应该在哪一步先做检索（RAG），还是先做工具调用（weather_query）？请结合 Day 4 + Day 5 给出判断。

### Q2. 你的 Day 5 RAG 在 5 个 question 上召回了证据但生成错了答案。你现在有 1 小时去修。你会先动 Day 1（call_model 参数）、Day 2（prompt）、还是 Day 5（chunk/top-k）？为什么？

### Q3. 一位面试官问："你的项目和 LangChain 默认 Agent 有什么区别？"——结合 Day 6 的对比表，给出一段不少于 100 字的回答。

### Q4. 你的 Day 4 工具被模型在用例"帮我订机票"时错误调用。如果**不**改 description（描述维度已经写得足够），还有 2 种工程层手段可以缓解，请各举一个。

### Q5. Day 7 的 PRD-v1.0 里你写了"P0 评测指标准确率 ≥ 85%"。这个数字背后必须有 3 个明确说明，分别是什么？

## 二、整合实操题（任选 1 个交付）

**A. End-to-end 串联**：用文字 + 数据流图，设计一个端到端串联方案，把 Day 3 的 ReAct（calculator + get_time）、Day 4 的 weather_query、Day 5 的 RAG 检索串起来：
- 场景：用户问"上海明天的天气适合户外活动吗？我们公司差旅政策怎么说？"
- 写出用户问题如何一步步被处理（① 调 weather_query 拿天气；② 用 RAG 检索差旅政策；③ 综合回答），每一步的输入、输出各是什么
- 列出 3 个最可能出错的地方，并给出排查顺序

**B. 端到端评测**：为 Day 5 的问答场景设计一个评测方案，构造 10 条 case（5 条 P0 + 5 条 P1）：
- 写出每条 case 的输入、期望输出、评判标准
- 说明召回率 / 成本如何统计

**如果你用了 git**，建议提交一次 commit（消息：\`week1: integration demo / eval done\`）；不会 git 没关系，只要本地保存好文件，不影响 Week 1 通过。

## 三、本周复盘表

| 维度 | 你的本周输出 | 留到下周修的问题 |
| --- | --- | --- |
| LLM 基础认知（Day 1） | | |
| Prompt 工程（Day 2） | | |
| Agent 范式（Day 3） | | |
| Tool Use（Day 4） | | |
| RAG（Day 5） | | |
| 框架判断（Day 6） | | |
| PRD/选型（Day 7） | | |
| 整合（本表） | | |

把这份表存成本地笔记文件。第二周第一天回头看一次。

## 答案？

整合题没有标准答案。如果你写不出来，回到对应 Day 的"核心概念与技术判断"重读即可。
`,xf=`# AI Agent 三十天学习计划 · 第二周阅读包

> **版本**：v3.1（2026-08-10，作者 Helson）
> **publication_mode**：member（付费群成员分发版，不含本机路径、缓存环境或密钥）
> **本周定位**：概念 + 代码一体。从「一次调用」走到「Agent 核心机制闭环」，每篇正文 = 概念讲解 + 代码走读 + 课后习题（含答案）。
> **与八股的关系**：本周正文讲「是什么 + 怎么实现」（L1+L2）；「为什么 / 权衡 / 面试追问」（L3）见 \`agent核心模块讲解（八股）\`。
> **前周依赖**：知识上承接 Week 1，但阅读本包不需要 Week 1 文件。
>
> **v3.1 变更**：独立代码包（\`agent-app/\`）已删除，代码以逐字引用形式完整嵌入每篇正文的"代码走读"（带 \`文件:行号\` 标注），纯阅读库，无需安装环境、无需 API key。
> **v3.0 变更**：每日正文改为「概念 → 代码走读 → 课后习题 → 答案」一体格式，对齐 pi-book 体例；习题与答案从 \`自测题/\` 折入正文。

---

## 本周概念地图

本周 7 天把 Week 1 的认知拼成 Agent 的核心机制闭环：从 Loop 到隔离。

| 天数 | 概念 | 解决什么 | 代码走读 |
| --- | --- | --- | --- |
| **Day 8** | Agent Loop | 让 ReAct 真正跑起来的循环（带状态+终止+错误恢复） | \`agent_app/loop.py\` |
| **Day 9** | 多工具注册与执行 | 加工具不改循环 + 三类工具的风险防护 | \`agent_app/tools/\`（registry/shell/grep_files/http_get） |
| **Day 10** | TodoWrite 计划-执行分离 | 让模型把计划显式化，不漏步骤不草草收尾 | \`agent_app/todo.py\` |
| **Day 11** | Memory 三层记忆 | 跨会话记住该记的，不同类型不同存法 | \`agent_app/memory.py\` |
| **Day 12** | Context 压缩 | 上下文太长时裁剪/摘要，保 system 不丢 | \`agent_app/compact.py\` |
| **Day 13** | LangGraph 工作流编排 | 把反复出现的分支/并行/审批显式化为图 | \`agent_app/workflow.py\` |
| **Day 14** | Subagent 子任务隔离 | 子任务独立上下文，主上下文只看结论 | \`agent_app/subagent.py\` |

> 每篇正文结构固定：本篇解决一个问题 -> 一个例子 -> 这个概念是什么（L1）-> 代码走读（代码完整嵌入，逐字引用 + \`文件:行号\`）-> 为什么这样写 -> 本章小结 -> 一句话边界 -> 读完能用自己的话回答 -> 想深入 -> 交给 AI 的问题 -> 课后习题 -> 答案与解析。

---

## 资源全景


\`\`\`
week2-reading/
├── README.md                              ← 你正在看的这页
│
├── 每日正文/                              ← 7 天主线（每篇自包含：概念 + 代码走读 + 习题 + 答案）
│   ├── day08-从零写ReAct-Loop.md
│   ├── day09-多工具注册与执行.md
│   ├── day10-TodoWrite计划执行分离.md
│   ├── day11-Memory三层记忆.md
│   ├── day12-Context压缩.md
│   ├── day13-LangGraph工作流编排.md
│   └── day14-Subagent子任务隔离.md
│
├── 配套指南/
│   ├── 术语表.md                          # Week 2 新增术语
│   ├── 故障排查.md                        # 死循环/shell 越界/记忆投毒/压缩丢约束（概念层面）
│   └── 周末复盘.md                        # 整周复盘 + 概念自测
│
└── 自测题/
    └── 第二周-整合自测.md                 # 周末整合自测（每日习题已折入每日正文）
\`\`\`

---

## 跨天依赖图

\`\`\`
Week 1 模型调用能力
  └─→ Day 8 Agent Loop（带状态+终止+错误恢复）
        ├─→ Day 9 多工具注册（挂到 Day 8 的循环）
        │     └─→ Day 14 Sub-agent（复用工具子集）
        ├─→ Day 10 TodoWrite（挂到 Day 8 的循环）
        ├─→ Day 11 Memory（独立，被 Day 13 复用）
        ├─→ Day 12 Context 压缩（独立）
        └─→ Day 13 工作流编排（复用 Day 11 记忆 + Day 9 工具）
\`\`\`

> **关键依赖**：Day 8 的 Agent Loop 是 Day 9/10/14 的复用基础，Day 11 的记忆是 Day 13 的复用基础。第一遍学习时不要跳过 Day 8，否则后面天天补。

---

## 云盘下载后的学习入口

解压后直接按以下顺序学习，不需要安装任何环境：

1. 阅读本页的"本周概念地图"，确认每天讲什么概念。
2. 从 \`每日正文/day08-从零写ReAct-Loop.md\` 开始，每天读一篇正文。
3. 读"代码走读"：代码已完整嵌入正文，引用带 \`文件:行号\` 标注。
4. 做文末"课后习题"（4 选择 + 1 开放），**做完再翻"答案与解析"**。
5. Day 14 后用 \`配套指南/周末复盘.md\` 做整周复盘。

需要补概念时查 \`配套指南/术语表.md\`；遇到理解问题时查 \`配套指南/故障排查.md\`。想深挖"为什么/权衡/面试追问"见 \`agent核心模块讲解（八股）\`。

## 使用指南

### 1. 每天的阅读动作

1. 读正文"本篇解决一个问题"和"一个例子"，建立直觉。
2. 读"这个概念是什么"（L1），理解概念和机制。
3. 读"代码走读"：代码已完整嵌入正文，逐块看懂实现，引用带 \`文件:行号\` 标注。
4. 对照"一句话边界"检查自己有没有踩坑。
5. 用自己的话回答"读完应该能用自己的话回答"的问题。
6. 做文末"课后习题"，**做完再翻"答案与解析"**。
7. 想深挖"为什么/权衡"见八股对应模块。

### 2. 卡住怎么办

见 \`配套指南/故障排查.md\`。

---

## 进入 Week 3 的阅读完成标志

满足以下全部才算 Week 2 真正读完：

1. 能用自己的话讲清 Loop / Tools / TodoWrite / Memory / Context / Workflow / Sub-agent 各是什么、怎么实现的、彼此关系。
2. 每篇正文的课后习题做完且错 ≤2 题（开放题写够字数）。
3. \`配套指南/周末复盘.md\` 的整周复盘完成（含 \`自测题/第二周-整合自测.md\`）。
4. 你能在 60 秒内向陌生人讲清楚："第二周学了什么概念、第三周准备学什么、为什么这样排"。

---

## 本周最重要的判断力（贴在显示器上）

- Agent Loop 不是 while True 调模型，是带状态 + 终止信号 + 错误恢复的控制结构。
- 工具不是能调函数，是 dispatch map 注册 + 风险分级 + 结果截断的治理。
- TodoWrite 不是任务管理器，是让模型显式化规划的软约束。
- 记忆不是存聊天记录，是写入/巩固/检索/更新/遗忘/审计的工程系统。
- 上下文 ≠ 记忆；压缩上下文要保留 system 约束。
- 工作流不是替代 Loop，是把 Loop 里反复出现的模式显式化为图。
- Sub-agent 不是多开 Agent，是独立 messages + 工具子集 + 摘要返回的隔离。

---

## 阅读包定位声明

本阅读包是 v3 学习计划的"第二周浓缩可读版"，不替代教科书 \`hello-agents\`、
\`learn-claude-code\`、\`learn-harness-engineering\`。它的角色是让初学者在 7 个晚上
跑通 Agent 核心机制闭环。想深挖"为什么/权衡/面试追问"见 \`agent核心模块讲解（八股）\`。
`,Af=`---
title: Day 8 Agent Loop
tags:
  - week2/day08
  - concept
  - code
  - exercise
---

# Day 8：Agent Loop（让 ReAct 真正跑起来的循环）

> 阅读约 30-40 分钟 ｜ 前置：[[day03-Agent范式]]、[[day04-工具调用]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/loop.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

Day 3 讲了 ReAct 是“边想边做”的范式：Thought -> Action -> Observation 一圈圈转。但范式只是思路，要让它真正跑起来，得有一个程序把“调模型、执行工具、把结果塞回去、决定继续还是停”这几件事循环着做。这个程序就是 Agent Loop。今天要看清 Agent Loop 由哪几块组成、怎么转、什么时候停、工具报错了怎么办。

**一句话主旨**：Loop 是一个在"消息列表"上反复转的循环——调模型决定下一步、按模型说的执行工具、把结果喂回去，直到三种终止信号之一触发。今天的代码走读按"数据结构 → 注册表 → 提示词 → 循环本体 → 内置工具 → 入口"的顺序，把 432 行的 \`loop.py\` 从头走到尾。

## 一个例子

想象一个员工接到"读这份文件并数有多少字"的任务：

\`\`\`text
看任务 -> 发现需要先读文件
调工具 read_file -> 拿到文件内容
看内容 -> 发现需要数字数
调工具 count_chars -> 拿到数字
没有别的要查了 -> 给出答案：1234 字
\`\`\`

每一步都是"判断 -> 行动 -> 看结果 -> 再判断"。Agent Loop 就是把这套节奏写成程序的循环。

## 这个概念是什么

Agent Loop 是 Agent 的核心执行循环：它维护当前对话状态，反复"调模型决策 -> 执行工具 -> 把结果放回上下文"，直到模型不再需要工具、给出最终答案。

一个最小 Agent Loop 由五块组成：

| 部分 | 作用 |
|---|---|
| messages | 保存当前任务的对话上下文（system + user + 工具结果） |
| tool registry | 记录有哪些工具可调、每个工具的参数格式 |
| model call | 让模型看上下文，决定下一步是回答还是调工具 |
| tool executor | 按模型说的执行工具，拿到结果 |
| stop condition | 判断该继续还是该停 |

少了 stop condition，循环不知道什么时候结束；少了 tool executor，模型只能说要调什么但没人真去调。

## 代码走读：把“边想边做”译成 432 行 Python

本篇走读 \`agent_app/loop.py\`，全文 432 行已完整嵌入下文，每段代码块上方的 \`文件:行号\` 是它在源码中的位置标注。

\`agent_app/loop.py:1-12\`

\`\`\`python
"""Day 8: 从零写 ReAct Agent Loop.
…（折叠：Week 2 复用说明与三个设计要点（三种终止信号 / 错误恢复 / 状态可观察），见 loop.py:2-11）
"""
\`\`\`

模块 docstring 的三条设计要点分别预告了“怎么停、错了怎么办、怎么留痕”，也是后面课后习题的三个考点。注意最后一行：**不依赖任何框架，纯 SDK + Week 1 的 \`call_model\`**——Day 1 打的那个“唯一的打电话入口”，今天开始被循环反复调用。

### 三个数据结构：循环内外的"契约"

\`agent_app/loop.py:27-65\`

\`\`\`python
@dataclass(slots=True, frozen=True)
class ToolSpec:
    """工具规格：名字 + 描述 + 参数 schema。
    …（折叠：frozen 的意义与"描述/schema 是模型可见的唯一依据"的说明，见 loop.py:30-33）
    """

    name: str
    description: str
    input_schema: dict[str, Any]


@dataclass(slots=True)
class ToolResult:
    """工具执行结果。ok=False 时 error 必填。
    …（折叠：成功/失败共用一结构与错误恢复分工的说明，见 loop.py:44-47）
    """

    ok: bool
    content: str
    error: str | None = None


@dataclass(slots=True)
class AgentResult:
    """Agent 运行结果。steps 用于 trace 与评测。
    …（折叠：stop_reason 三个出口值的说明，见 loop.py:58-60）
    """

    answer: str
    steps: list[dict[str, Any]] = field(default_factory=list)
    stop_reason: str = "final_answer"
\`\`\`

> 为什么一个循环要先定义三个数据结构，而不是直接开写循环体？因为 Loop 要跨轮传递的信息正好三类：**工具长什么样**（\`ToolSpec\`）、**工具这次跑完带回什么**（\`ToolResult\`）、**整个任务结束带回什么**（\`AgentResult\`）。没有这三张"表格"，循环体和调用方各写各的格式，Day 9/11/13 复用骨架时就得为对齐格式返工。数据结构是"契约"，代码是"履约"。

- **\`ToolSpec\`**：名字、描述、参数 schema，\`frozen=True\` 表示“工具规格一旦注册就不允许修改”——注册表在循环运行期间必须稳定。**\`ToolResult\`**：\`ok\` + \`content\` + \`error\`，docstring 写死约定“ok=False 时 error 必填”，成功和失败共用这一个结构，循环处理起来就只有一个分支。
- **\`AgentResult\`**：\`steps\` 用 \`field(default_factory=list)\`——这是 Python 的经典坑：可变默认值会在所有实例间共享，必须用工厂函数每次新建。\`stop_reason\` 默认 \`"final_answer"\`，后面三个出口会分别改写它。

### ToolRegistry：加工具不用改循环

\`agent_app/loop.py:73-113\`

\`\`\`python
class ToolRegistry:
    """dispatch map 注册：加工具不用改循环，只需 register。

    handler 签名：(arguments: dict) -> ToolResult
    """

    def __init__(self) -> None:
        # 两个 dict 组成 dispatch map：名字 -> 规格、名字 -> 执行函数
        self._specs: dict[str, ToolSpec] = {}
        self._handlers: dict[str, Callable[[dict[str, Any]], ToolResult]] = {}

    def register(
        self,
        spec: ToolSpec,
        handler: Callable[[dict[str, Any]], ToolResult],
    ) -> None:
        self._specs[spec.name] = spec
        self._handlers[spec.name] = handler

    def execute(self, name: str, arguments: dict[str, Any]) -> ToolResult:
        handler = self._handlers.get(name)
        if handler is None:
            return ToolResult(ok=False, content="", error=f"unknown tool: {name}")
        return handler(arguments)

    …（折叠：specs() 返回已注册的 ToolSpec 列表，见 loop.py:98-99）

    def tool_dicts_for_openai(self) -> list[dict[str, Any]]:
        """转成 OpenAI tools 协议格式，供 call_model(tools=) 使用。"""
        …（折叠：把每个 spec 翻译成 {type/function:{name/description/parameters}} 的列表推导，见 loop.py:103-113）
\`\`\`

> 为什么循环里不直接写 \`if name == "calculator": ... elif name == "read_file": ...\`？因为每加一个工具就要改循环体——循环是"引擎"，引擎不该认识具体工具的名字。这里用两个 dict 做 **dispatch map**：\`_specs\`（名字 → 规格）和 \`_handlers\`（名字 → 执行函数）。\`register\` 同时登记两边，\`execute\` 按名字查表分发。加工具 = 一次 \`register\` 调用，循环一行不用动。

- **\`execute\`**（92-96 行）：查不到工具名时返回 \`ToolResult(ok=False, error="unknown tool: ...")\`，**而不是 raise**。注意这个选择——"查不到"被当成一次失败的执行结果，后面循环层会把它转成 observation 喂回模型，模型看到"unknown tool"后知道换个工具名。这跟模块 docstring 说的"错误恢复"是同一套策略，从入口贯彻到出口。
- **\`tool_dicts_for_openai\`**（101-113 行）：把内部的 \`ToolSpec\` 翻译成 OpenAI 协议里的 \`tools\` 参数格式。\`call_model\` 的 \`tools=\` 参数（Day 1 预留给 Day 4 的那个通道）就是吃这个格式的。描述和 schema 会随请求发给模型——**模型决定"调哪个工具、传什么参数"时，唯一依据就是这里的 description 和 input_schema**，所以工具描述要写得让模型看得懂。

### SYSTEM_PROMPT：四句话立好行为边界

\`agent_app/loop.py:121-125\`

\`\`\`python
SYSTEM_PROMPT = """你是一个最小 ReAct Agent。
你会收到用户的问题，你可以调用工具来获取信息。
如果不需要工具，直接给出最终答案。
工具调用通过 OpenAI tool_calls 协议进行。
"""
\`\`\`

四句话分别回答：你是谁（最小 ReAct Agent）、你能干什么（调工具取信息）、什么时候别调（直接给答案）、怎么调（走 tool_calls 协议）。跟 Day 1 的 system prompt 同一个思路——**它不教模型知识，只约束行为**。第一句点出"ReAct"，第二三句把"边想边做"和"想完就答"两个出口都规定好，第四句告诉模型协议形式，后面循环就按这套协议解析。

### ReActLoop：循环本体

#### 构造：默认值就是"安全"与"稳定"

\`agent_app/loop.py:128-155\`

\`\`\`python
class ReActLoop:
    """ReAct Agent Loop：Reason → Act → Observe 循环。
    …（折叠：docstring 列出的三种终止信号与 stop_reason 值，见 loop.py:130-134）
    """

    def __init__(
        self,
        registry: ToolRegistry,
        *,
        max_iter: int = 8,
        model: str | None = None,
        temperature: float = 0.0,
        system_prompt: str = SYSTEM_PROMPT,
        call_model_fn: Callable | None = None,
    ) -> None:
        if max_iter < 1:
            raise ValueError("max_iter must be >= 1")
        self.registry = registry
        self.max_iter = max_iter
        self.model = model
        self.temperature = temperature
        self.system_prompt = system_prompt
        # 注入式 call_model：测试用 mock，生产用默认。与 compact.py / workflow.py 同款模式。
        self._call_model_fn = call_model_fn
\`\`\`

类 docstring 把三种终止信号及其 \`stop_reason\` 值一一列出——这是整个循环的"出口清单"，后面代码里的每个 \`return AgentResult(...)\` 都对应这里的一行。

- **\`max_iter\` 默认 8，且 \`max_iter < 1\` 直接抛 \`ValueError\`**（147-148 行）：参数错误在入口拦截，宁可早崩不可带病运行；8 是“够做几轮推理、又不至于烧太多 token”的经验值。**\`temperature\` 默认 0.0**：比 Day 1 的 0.2 更保守，循环里每一轮决策都影响后续轮次，稳定性优先于多样性。**\`call_model_fn\` 注入**（154 行注释原文：“注入式 call_model：测试用 mock，生产用默认”）：循环不写死“必须调真的 API”，测试时注入 mock 就不烧钱。

#### run() 的准备：messages 是唯一事实来源

\`agent_app/loop.py:157-186\`

\`\`\`python
    def run(
        self,
        user_input: str,
        *,
        thread_id: str | None = None,
        interrupt: Callable[[dict[str, Any]], bool] | None = None,
    ) -> AgentResult:
        """运行一次 Agent Loop。

        thread_id 仅作 trace 标记，本 Day 不做持久化（Day 19 才接 checkpointer）。
        interrupt：每步迭代前调用，返回 True 则主动中断。
        """
        # messages 是唯一事实来源：模型“记得”什么，取决于这里累积了什么
        messages: list[dict[str, Any]] = [
            {"role": "system", "content": self.system_prompt},
            {"role": "user", "content": user_input},
        ]
        steps: list[dict[str, Any]] = []
        # 把注册表翻译成 OpenAI tools 协议格式，整个循环共用这一份
        tools = self.registry.tool_dicts_for_openai()

        # 主循环：每轮“调模型 -> 执行工具 -> 回填结果”，直到三种终止信号之一触发
        for i in range(self.max_iter):
            if interrupt and interrupt({"iter": i, "messages": messages}):
                steps.append({"iter": i, "event": "interrupted"})
                …（折叠：AgentResult(answer="", steps, stop_reason="interrupted") 返回，见 loop.py:182-186）
\`\`\`

- \`messages\` 从 \`system + user\` 两行起步，之后每一轮把模型和工具的消息都拼回这里。**模型“记得”前面发生什么，靠的就是这份不断变长的消息列表**——Day 1 说的“模型无状态”，在这里兑现为“状态由调用方维护”。\`thread_id\` 只做 trace 标记，docstring 明确写了“本 Day 不做持久化（Day 19 才接 checkpointer）”——诚实标注了哪些能力今天不做。
- **终止信号 3：主动中断**（180-186 行）。每轮迭代的**第一件事**就是问 \`interrupt\` 回调：“调用方，要不要停？”返回 \`True\` 就记一条 \`interrupted\` 事件并带着空答案退出。用户取消、超时这类外部干预都走这个口子。

#### 调模型：用 Day 1 留下的 raw 通道读 tool_calls

\`agent_app/loop.py:188-212\`

\`\`\`python
            # 调模型决定下一步（支持注入 mock，测试与 workflow/subagent 复用）
            _call = self._call_model_fn or call_model
            resp = _call(
                messages,
                tools=tools or None,
                model=self.model,
                temperature=self.temperature,
            )
            msg = resp.raw.choices[0].message
            tool_calls = getattr(msg, "tool_calls", None) or []

            if not tool_calls:
                # 终止信号 1：模型不再请求工具，给出最终答案
                answer = msg.content or ""
                steps.append({
                    "iter": i,
                    "event": "final_answer",
                    "input_tokens": resp.input_tokens,
                    "output_tokens": resp.output_tokens,
                })
                …（折叠：AgentResult(answer, steps, stop_reason="final_answer") 返回，见 loop.py:208-212）
\`\`\`

> 为什么这里不用 \`resp.text\`，而是绕到 \`resp.raw\` 去取内容？因为这一轮要看的关键信息不是文本，是 **\`tool_calls\`**——模型"决定调什么工具"的请求就藏在这里。Day 1 在 \`LLMResponse\` 里预留的 \`raw\` 字段（\`llm.py:32\`：*"original SDK object, for advanced inspection (e.g. tool_calls)"*）就是为今天准备的：\`resp.raw.choices[0].message\` 拿到 SDK 原始消息对象，\`tool_calls\` 属性直接可读。

- **\`getattr(msg, "tool_calls", None) or []\`**（197 行）：部分服务商不回传 \`tool_calls\` 字段，用 \`getattr\` 兜底成 \`None\`，再 \`or []\` 归一成空列表。后面 \`if not tool_calls:\` 一个判断就覆盖了“模型没调工具”和“服务商没回字段”两种情况。**终止信号 1：final_answer**（199-212 行）：没有工具请求，\`msg.content\` 就是最终答案，同时把这一轮的 input/output token 记进 steps——**每轮调用都留账本**，这是 Day 1 的习惯在循环里的延续。

#### 回填 assistant 消息：协议要求的上下文连续性

\`agent_app/loop.py:214-229\`

\`\`\`python
            # 把 assistant 的 tool_calls 消息追加到上下文
            messages.append({
                "role": "assistant",
                "content": msg.content or "",
                "tool_calls": [
                    …（折叠：{id/type/function} 三字段的列表推导，见 loop.py:219-227）
                ],
            })
\`\`\`

OpenAI 协议有一条硬性规定：**\`tool\` 角色的消息必须跟在对应的 \`assistant\` tool_calls 消息之后**，否则上下文不合法、下一次调用会报错。所以模型说"我要调工具"之后，先把这句"请求"原样拼回 messages，后面执行的 \`tool\` 结果才有合法位置可放。这一步没有业务逻辑，是协议要求——写这类循环时最容易漏的就是它。

#### 执行工具 + 错误恢复：异常不打断循环

\`agent_app/loop.py:231-266\`

\`\`\`python
            # 执行每个工具调用
            for tc in tool_calls:
                name = tc.function.name
                args: dict[str, Any] | None = None
                try:
                    args = json.loads(tc.function.arguments or "{}")
                except json.JSONDecodeError as exc:
                    # 参数解析失败：转成 observation 喂回，不让 loop 崩
                    obs = ToolResult(
                        ok=False,
                        content="",
                        error=f"arguments JSON parse failed: {exc}",
                    )
                else:
                    obs = self.registry.execute(name, args)

                # 错误恢复：异常转结构化 observation
                if obs.ok:
                    content = obs.content
                else:
                    content = f"[tool_error] {obs.error or 'unknown'}"

                …（折叠：steps.append 留痕（iter/tool/arguments/ok/result_preview，预览截前 200 字符），见 loop.py:253-260）

                messages.append({
                    "role": "tool",
                    "tool_call_id": tc.id,
                    "content": content,
                })
\`\`\`

1. **解析参数**（234-245 行）：模型给出的 \`arguments\` 是 JSON 字符串，得先 \`json.loads\` 成 dict。注意 \`tc.function.arguments or "{}"\`——模型偶尔给空字符串，兜底成空对象。**解析失败不 raise**，而是构造 \`ToolResult(ok=False, error="arguments JSON parse failed: ...")\`，让失败以数据的形式继续流动。2. **执行**（245 行）：\`self.registry.execute(name, args)\`——真正干活的是注册表里的 handler，循环自己一行业务代码都没有，这就是“加工具不改循环”。3. **错误恢复**（247-251 行）：\`ok=False\` 的结果统一加上 \`[tool_error]\` 前缀再喂回模型——这个前缀是给模型看的信号：**“这不是正常返回，是失败”**，模型据此换参数重试或换工具。
4. **留痕**（253-260 行）：每步记 \`iter / tool / arguments / ok / result_preview\`，其中 \`result_preview\` 只存前 200 字符——**steps 是 trace 不是上下文，塞满全文纯属浪费内存**。5. **回填**（262-266 行）：\`role: "tool"\` + \`tool_call_id: tc.id\` 把结果挂到对应的那次调用上，拼回 messages——下一轮模型就能“看到”这次执行的结果，Observation 落位。

> 为什么工具报错不能直接 raise？一旦 raise，整个循环立刻崩掉，用户看到一段 traceback，模型没有任何第二次机会。把异常转成 observation 喂回去，模型至少能读到"这个工具失败了"，然后换一个策略——这正是模块 docstring 第 8 行说的"错误恢复"。崩溃是"用户失败"，喂回是"模型还有机会"，两者的差别就是 Agent 和脚本的差别。

#### 终止信号 2：max_iter

\`agent_app/loop.py:268-274\`

\`\`\`python
        # 终止信号 2：达到 max_iter
        steps.append({"iter": self.max_iter, "event": "max_iter_reached"})
        return AgentResult(
            answer="",
            steps=steps,
            stop_reason="max_iter",
        )
\`\`\`

\`for i in range(self.max_iter)\` 正常跑完，意味着模型一直在请求工具、始终没给最终答案——典型场景是"工具一直返回'未找到结果'，模型反复重试同一个工具"。此时 \`answer\` 留空、\`stop_reason="max_iter"\`，调用方看到这个值就知道"任务没完成，被安全阀掐停了"。

### 内置工具：calculator 用 AST 白名单防注入

\`agent_app/loop.py:287-318\`

\`\`\`python
# 白名单：只允许 + - * / 四种运算。键是 AST 节点类型，值是 operator 模块的函数；
# 表里没有的节点类型一律拒绝，杜绝 eval() 执行任意代码的风险。
_OPS = {
    ast.Add: operator.add,
    …（折叠：Sub/Mult/Div 三个运算映射，见 loop.py:291-293）
}


def _eval_expr(node: ast.AST) -> int | float:
    """递归解释表达式树：只认三类节点（壳 / 数字常量 / 白名单内的二元运算）。
    …（折叠：其他节点一律 ValueError 的说明，见 loop.py:299-300）
    """
    if isinstance(node, ast.Expression):
        return _eval_expr(node.body)
    if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)):
        return node.value
    if isinstance(node, ast.BinOp) and type(node.op) in _OPS:
        return _OPS[type(node.op)](_eval_expr(node.left), _eval_expr(node.right))
    raise ValueError("unsupported expression")


def _calculator(expression: str) -> str:
    …（折叠：主体——mode="eval" 解析、_eval_expr 求值、任何异常转 "error: ..." 字符串，见 loop.py:312-318）
\`\`\`

> 为什么计算器不直接 \`eval(expression)\`？因为 \`eval\` 会执行**任意** Python 代码——模型说"帮我算 1+1"，如果表达式里被塞进 \`__import__('os').system(...)\`，就真的会执行系统命令。\`_OPS\` 是一张**白名单**：只把四种运算的 AST 节点类型映射到 \`operator\` 模块的对应函数；\`_eval_expr\` 递归解释时，只认三类节点——\`Expression\`（表达式壳）、数字常量、白名单内的二元运算，**其他一律 \`raise ValueError("unsupported expression")\`**。解释器是自己写的，能走哪条路完全可控。

- \`_eval_expr\`（297-308 行）是一个 12 行的递归下降解释器：\`Expression\` 剥壳、\`Constant\` 取值、\`BinOp\` 递归算左右子树再套白名单里的运算——整棵表达式树走完只经过这三类节点，注入的路径被彻底堵死。\`_calculator\`（311-318 行）：\`ast.parse(expression, mode="eval")\` 只解析“单个表达式”模式，任何异常都被 \`except Exception\` 接住，返回 \`"error: ..."\` 字符串——**错误以字符串形式交还，而不是让工具崩溃**。
### read_file：截断是预算纪律

\`agent_app/loop.py:325-339\`

\`\`\`python
def _read_file(path: str) -> str:
    """读本地文件并返回内容（前 4000 字符截断）。"""
    try:
        p = Path(path)
        if not p.exists():
            return f"error: file not found: {path}"
        text = p.read_text(encoding="utf-8", errors="replace")
        # 截断到前 4000 字符：大文件全量进上下文会烧爆 token（预算纪律）
        return text[:4000]
    except Exception as exc:
        return f"error: {exc}"


def _count_chars(text: str) -> str:
    return str(len(text))
\`\`\`

- 文件不存在返回 \`"error: file not found: {path}"\`——具体路径写进错误，模型下次可以改路径重试。**\`text[:4000]\`**：只回前 4000 字符。Day 1 讲过“上下文容量直接决定成本和延迟”，这里就兑现了：整本日志塞进 observation 会让一次调用 token 爆表，截断是工具层的预算纪律。\`errors="replace"\`：编码烂字节用替换符顶替、不抛异常——读文件这种“外部世界”操作，任何异常都不能让循环陪葬。
### 注册四个工具：build_default_registry

\`agent_app/loop.py:342-400\`

\`\`\`python
def build_default_registry() -> ToolRegistry:
    """构造 Day 8 默认工具集：calculator / get_time / read_file / count_chars。"""
    reg = ToolRegistry()

    …（折叠：calculator 注册，见 loop.py:346-359）

    …（折叠：get_time 注册，见 loop.py:361-368）

    reg.register(
        ToolSpec(
            name="read_file",
            description="读取本地文件内容（前 4000 字符）。",
            input_schema={
                "type": "object",
                "properties": {
                    "path": {"type": "string", "description": "文件绝对或相对路径"},
                },
                "required": ["path"],
            },
        ),
        lambda args: ToolResult(ok=True, content=_read_file(args["path"])),
    )

    …（折叠：count_chars 注册，见 loop.py:385-398，结构与上两段一致）

    return reg
\`\`\`

- **描述里的字数限制会原样发给模型**（通过 \`tool_dicts_for_openai\` 翻译进 \`tools\` 参数）：\`read_file\` 的描述写明“前 4000 字符”（\`calculator\` 的描述写明“只支持 + - * / 和数字”，见 loop.py:349）——模型是根据这些描述决定调哪个工具、期望什么返回的。**工具描述是模型可见的 API 文档**。每个 handler 都是一个 \`lambda\`，把参数包进 \`ToolResult(ok=True, ...)\`，四个工具注册完，循环一行没动——“加工具不改循环”在这里看得最清楚。

### main：CLI 入口

\`agent_app/loop.py:408-428\`

\`\`\`python
def main() -> None:
    import sys

    …（折叠：无参数时打印用法并退出的分支，见 loop.py:411-414）

    user_input = " ".join(sys.argv[1:])
    registry = build_default_registry()
    agent = ReActLoop(registry, max_iter=8)

    print(f"[loop] user: {user_input}")
    result = agent.run(user_input)

    print(f"\\n[loop] stop_reason: {result.stop_reason}")
    print(f"[loop] steps: {len(result.steps)}")
    …（折叠：逐条打印每步 iter/event/tool/ok 的 for 循环，见 loop.py:425-427）
    print(f"\\n[loop] answer:\\n{result.answer}")
\`\`\`

- 入口三行是整篇的收束：\`build_default_registry()\` 组工具 → \`ReActLoop(registry, max_iter=8)\` 组循环 → \`agent.run(user_input)\` 开跑。结束打印 \`stop_reason\` 和每一步的 \`iter/event/tool/ok\`——**“状态可观察”在 CLI 上的直接体现**：\`stop_reason\` 告诉你任务怎么结束的，\`steps\` 告诉你每一轮发生了什么。

## 为什么这样写

- **工具异常不 raise，转成 observation 喂回**：模块 docstring 第 8 行原话——*"工具异常不直接 raise，转成结构化 observation 喂回模型（错误恢复）"*，\`run()\` 里 loop.py:247 的注释再次点题"错误恢复：异常转结构化 observation"。崩溃让用户看 traceback，喂回让模型有第二次机会——Agent 的容错是产品能力，不是代码细节。
- **加工具不改循环**：\`ToolRegistry\` docstring 第一句就是 *"dispatch map 注册：加工具不用改循环，只需 register"*（loop.py:74）。循环只认识 \`registry.execute\` 一个入口，新工具 = 一次 \`register\` 调用。
- **max_iter 在构造入口就校验**：\`raise ValueError("max_iter must be >= 1")\`（loop.py:148）——参数错误在入口拦截，宁可早崩不可带病运行；默认 8 是“够做几轮推理、又不至于无限烧 token”的安全阀。**temperature 默认 0.0**：循环里每轮决策都影响后续轮次，稳定性优先——Day 1 的 0.2 是“稳定 + 略多样”的折中，到循环场景让位给“尽量确定”。**call_model_fn 可注入**：loop.py:154 注释原话——*“注入式 call_model：测试用 mock，生产用默认。与 compact.py / workflow.py 同款模式”*，测试不烧真钱。

## 本章小结

- Loop = 在 messages 上反复"调模型 → 解析 tool_calls → 执行工具 → 回填 observation"，messages 是唯一事实来源，模型的"记忆"就是这份不断变长的消息列表。
- 三种终止信号各管一种失控场景：\`final_answer\` 正常收尾、\`max_iter\` 兜死循环、\`interrupted\` 允许人工干预，缺一个就会出问题；错误恢复有两层：工具层把异常转成可读的 \`"error: ..."\` 字符串，循环层把 \`ok=False\` 统一加 \`[tool_error]\` 前缀——失败以数据的形式流动，模型永远有第二次机会。
- \`steps\` 每步留 trace（iter/event/tool/参数/结果预览/token），Day 20 的评测归因靠它——"bad case 是模型没调对工具，还是工具返回了垃圾"，只有留痕才能回答。
- 这一处是"循环"的事——后面 Day 9 的 tool registry、Day 11 的 memory、Day 13 的 workflow 只是把这里的循环骨架接上更多状态和工具，**核心没变复杂**。

## 一句话边界

- 模型只生成工具调用请求，真正执行工具的是程序。
- max_iter 是防止死循环的安全阀，不能省。
- 工具异常要转成 observation 喂回，不要直接抛出打断循环。
- 每步留 trace，评测和排错都靠它。

## 读完应该能用自己的话回答

1. Agent Loop 由哪五块组成？少了 stop condition 会怎样？
2. 模型和程序在 Loop 里各负责什么？
3. Loop 有哪几种停止情况？为什么不能只靠"模型不再调工具"？
4. 工具执行报错了，正确的处理是什么？为什么不能直接抛异常？
5. 为什么要记录每一步的 trace？

## 想深入

Loop 的状态机视角、错误恢复的 continue site、同步循环 vs 事件驱动的取舍等，见八股·02 核心框架和八股·08 工程化实践。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent Loop。请解释：1) 一个最小 Agent Loop 由哪几部分组成；2) 循环是怎么转的；3) 它怎么决定什么时候停；4) 工具执行失败时怎么办。用"读文件数字数"做例子，不要给完整代码，不要引入框架名称。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

### Q1. Loop

Agent Loop 最少需要哪几种终止信号？

A. 只有"模型给出最终答案"一种即可
B. "模型给出答案" + "达到 max_iter" 两种即可
C. "模型给出答案" + "达到 max_iter" + "主动中断" 三种
D. 终止信号由模型自行决定，不需要预设

### Q2. 错误恢复

工具执行抛出异常时，正确的处理方式是什么？

A. 直接 raise 让 loop 崩溃，便于发现问题
B. 捕获异常，转成结构化 observation 喂回模型
C. 忽略异常，继续下一轮迭代
D. 立即终止整个 Agent 运行

### Q3. max_iter

不设 max_iter 会导致什么问题？

A. 模型无法调用工具
B. 模型回答质量下降
C. 工具参数无法解析
D. Agent 可能死循环无限消耗 token

### Q4. 状态可观察

AgentResult.steps 记录每步 trace 的主要目的是什么？

A. 减少每次调用的 token 数量
B. 让模型能看见自己之前做了什么
C. 为评测和 bad case 归因提供依据
D. 替代 system prompt 的约束作用

### 开放题（1 道）

**Q5. 死循环诊断**：你的 Agent 跑一个查询任务，max_iter=8，但每次工具都返回"未找到结果"，模型反复重试同一个工具直到 max_iter。

1. 这种情况下 stop_reason 会是什么？
2. 你会在 loop 里加什么机制让 Agent 提前意识到"这条路走不通"并换策略？
3. 这说明 max_iter 之外还需要哪些"非模型层"的保护？

≥150 字。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

### Q1. 答案：C

Agent Loop 最少需要三种终止信号：模型不再调工具（final_answer）、达到 max_iter、主动中断（interrupt）。只有一两种会导致要么死循环、要么无法人工干预。

- A 错：只有 final_answer，模型反复调工具时无限循环。
- B 错：缺 interrupt，无法在发现问题时主动停下。
- D 错：终止信号必须由程序预设，模型不能自己决定何时停。

### Q2. 答案：B

工具异常应捕获后转成 \`ToolResult(ok=False, error=...)\`，loop 层再转成 \`[tool_error] ...\` 的 observation 喂回模型，让模型有机会调整策略。

- A 错：直接 raise 会让 loop 崩溃，用户看到 traceback。
- C 错：忽略异常会丢失错误信息，模型不知道工具失败了。
- D 错：一个工具失败就终止整个 Agent 过于激进。

### Q3. 答案：D

不设 max_iter，模型在工具返回不理想结果时会反复重试同一个工具，死循环烧 token。

- A/B/C 错：max_iter 与工具调用能力、回答质量、参数解析无关。

### Q4. 答案：C

steps 记录每步 trace（iter/事件/工具/参数/结果预览/token），主要用于 Day 20 评测时归因 bad case——你需要知道是模型没调工具还是工具返回了垃圾。

- A 错：steps 反而增加存储，不减 token。
- B 错：模型看的是 messages，不是 steps。
- D 错：steps 不能替代 system prompt 约束。

### 开放题 Q5 参考要点（rubric）

**0 分**：只说"会死循环"，无具体机制。

**1 分**：能说出 stop_reason="max_iter"，并提出至少一种检测机制（如"同一工具同一参数调用 ≥3 次就降级"）。

**2 分**：完整覆盖三点——(1) stop_reason 为 max_iter；(2) 加重复调用检测/工具失败计数器/模型主动放弃信号；(3) 指出 max_iter 之外还需要重复检测、成本上限、用户超时等"非模型层"保护。

关键判断：max_iter 是安全阀但不够，还需要检测重复行为模式、设成本上限、给模型"放弃"的选项。
`,vf=`---
title: Day 9 多工具注册与执行
tags:
  - week2/day09
  - concept
  - code
  - exercise
---

# Day 9：多工具注册与执行

> 阅读约 40 分钟 ｜ 前置：[[day08-从零写ReAct-Loop]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/tools/registry.py\`、\`agent_app/tools/shell.py\`、\`agent_app/tools/grep_files.py\`、\`agent_app/tools/http_get.py\`（完整代码已嵌入下方代码走读，正文统一简写为 \`agent_app/\`）

## 本篇解决一个问题

Day 8 的 loop 只会调一两个工具。真实 Agent 要调十几个：查 HTTP、搜文件、跑 shell。怎么把这么多工具加进去，又怎么管住它们各自的风险？

今天要看清两件事：加工具怎么做到不改循环（注册即插即用），以及不同类型的工具各有什么风险、怎么防护。

## 一个例子

给 Agent 加一个新工具，两种做法：

\`\`\`text
做法 A（改循环）：在 loop 的 if-else 里加一个 "如果是 shell 就执行 shell" 分支
  -> 工具越多，循环代码越膨胀，加一个工具改一次 loop

做法 B（注册）：把工具名和执行函数登记进一个 registry（字典）
  loop 只认 registry，模型说要调什么，loop 去 registry 查
  -> 加工具只是往 registry 加一条，循环代码一行不改
\`\`\`

差别在于：做法 B 把"分发"和"执行"解耦了，工具再多循环也不膨胀。

## 这个概念是什么

**工具注册** 是把工具登记进一个 dispatch map（名字 -> 执行函数 + 参数 schema），让 loop 能按名字找到并调用工具。加工具 = 往字典加一条，不改循环。

工具不止是"能调函数"。不同类型的工具有不同风险，要分别治理：HTTP 会超时挂起、文件搜索会路径越界、shell 会被恶意指令利用。治理是工具系统的一部分。

## 代码走读：注册表 + 三类工具的风险防护

本篇走读 \`agent_app/tools/\` 下四个文件：\`registry.py\` 是注册表（今天的主干），\`shell.py\` / \`grep_files.py\` / \`http_get.py\` 是三个工具。代码已完整嵌入下文，引用块上方的 \`文件:行号\` 是位置标注。

### 主干：\`registry.py\` —— 注册表长什么样

\`agent_app/tools/registry.py:1-15\`（模块 docstring + 导入）

\`\`\`python
"""Day 9: 多工具注册与执行。

registry.py 重新导出 Day 8 的 ToolRegistry / ToolSpec / ToolResult，
让 Day 9 及后续天从 agent_app.tools 统一 import（单一入口）。

build_week2_registry() 构造含 HTTP / 文件搜索 / Shell 三类工具的注册表，
挂到 Day 8 的 ReActLoop 上即可运行。
"""
from __future__ import annotations

from agent_app.loop import ToolRegistry, ToolResult, ToolSpec

from .grep_files import make_grep_files_spec, make_grep_files_handler
from .http_get import make_http_get_spec, make_http_get_handler
from .shell import make_shell_spec, make_shell_handler
\`\`\`

开头三句话写死两份职责：一是**统一入口**——\`ToolRegistry / ToolSpec / ToolResult\` 从 \`agent_app.loop\`（Day 8）重新导出，Day 9 及以后只认 \`agent_app.tools\` 这一个包名；二是**装配**——\`build_week2_registry()\` 把三个工具挂到 Day 8 的注册表上。

导入区出现六次 \`make_xxx_spec\` / \`make_xxx_handler\`，命名规律是每个工具都拆成一对工厂函数：\`spec\` 管"模型该知道什么"，\`handler\` 管"机器该做什么"。为什么拆两个？往下看 \`register\` 的签名就明白了。

\`agent_app/tools/registry.py:18-32\`（函数签名与 docstring）

\`\`\`python
def build_week2_registry(
    *,
    work_dir: str | None = None,
    shell_whitelist: list[str] | None = None,
    http_timeout: float = 10.0,
    max_result_chars: int = 4000,
) -> ToolRegistry:
    """构造 Day 9 工具集：Day 8 内置 + http_get + grep_files + shell。

    Args:
        work_dir: 文件搜索与 shell 的工作目录边界，默认当前目录。
        shell_whitelist: shell 允许的命令前缀白名单，默认 ["ls", "cat", "wc", "echo"]。
        http_timeout: HTTP 请求超时秒数。
        max_result_chars: 工具结果最大字符数，超过截断。
    """
\`\`\`

参数全是关键字参数（\`*\` 之后），四个配置项恰好对应三类风险：\`work_dir\`（文件搜索和 shell 的边界）、\`shell_whitelist\`（shell 的白名单）、\`http_timeout\`（HTTP 超时）、\`max_result_chars\`（结果截断上限）。**所有安全旋钮集中暴露在装配函数顶部**，调用方一眼能看清"这个 Agent 允许什么、限制多少"，不用钻进每个工具文件里找。

> 为什么全部用 \`*\` 强制关键字传参？因为四个参数都是"同一类东西"（都是安全配置），位置传参很容易传错位——\`work_dir\` 和 \`shell_whitelist\` 换一下位置，程序不报错，行为却彻底变了。强制关键字让每个配置都"点名"出现。

\`agent_app/tools/registry.py:33-66\`（装配主体）

\`\`\`python
    # 延迟导入：真正构造时才拉 Day 8 的装配函数，避免模块加载阶段的循环 import。
    from agent_app.loop import build_default_registry

    # 先拿到 Day 8 的内置工具，今天是在它基础上追加，不是另起炉灶。
    reg = build_default_registry()

    # 注册模式：每个工具 = spec（给模型看的说明书）+ handler（给机器执行的动作），
    # 成对 register 后，循环只认注册表，加工具不改循环。
    # 风险分级：http_get 只读网络、grep_files 只读本地文件，shell 能执行命令（风险最高）。

    # http_get：协议白名单 + 超时 + 截断
    reg.register(
        make_http_get_spec(),
        make_http_get_handler(timeout=http_timeout, max_chars=max_result_chars),
    )

    # grep_files：work_dir 边界 + 截断
    reg.register(
        make_grep_files_spec(),
        make_grep_files_handler(work_dir=work_dir, max_chars=max_result_chars),
    )

    # shell（最高风险）：白名单 + 超时 + 截断
    reg.register(
        make_shell_spec(),
        make_shell_handler(
            work_dir=work_dir,
            whitelist=shell_whitelist or ["ls", "cat", "wc", "echo"],
            timeout=10.0,
            max_chars=max_result_chars,
        ),
    )

    return reg
\`\`\`

这就是"加工具不改循环"的全部秘密：

- **第 34 行**：\`from agent_app.loop import build_default_registry\` 放在函数体内而非文件顶部——延迟导入，真正构造时才拉 Day 8 代码，避免 import 循环。
- **第 37 行**：先拿到 Day 8 的内置工具（\`build_default_registry\`，见 \`loop.py:315\`），今天是在它基础上**追加**，不是另起炉灶。
- **第 44-64 行**：三个 \`reg.register(...)\`，每个是一次"spec + handler"配对。循环一行没动——它只认 registry：\`loop.py:60\` docstring 原话 *"dispatch map 注册：加工具不用改循环，只需 register"*，执行时 \`loop.py:77-81\` 的 \`execute\` 按工具名取 handler 调用。**加第四个工具 = 再写一对工厂 + 再 register 一次，到此为止。**

为什么 \`register\` 收两个参数而不是一个？因为模型和机器需要的信息不同：\`ToolSpec\`（\`loop.py:27-33\` 的 frozen dataclass，字段 \`name / description / input_schema\`）是**给模型看的说明书**，循环靠 \`tool_dicts_for_openai()\`（\`loop.py:86-91\`）序列化成 OpenAI tools 协议发给模型；handler 是**给机器执行的动作**——拿 \`arguments\` 字典，返回 \`ToolResult\`。\`register\` 就是把两者按名字钉在一起。

\`agent_app/tools/registry.py:69-74\`（导出面）

\`\`\`python
__all__ = [
    "ToolRegistry",
    "ToolResult",
    "ToolSpec",
    "build_week2_registry",
]
\`\`\`

\`__all__\` 是包的公共接口声明：\`from agent_app.tools import *\` 只会拿到这四个名字，模块内部细节（三个工具文件）不泄露——"单一入口"约定的收尾。

### 高危工具：\`shell.py\` —— 白名单是底线

先读它的 docstring，四行字就是整个安全模型：

\`agent_app/tools/shell.py:1-9\`

\`\`\`python
"""Day 9: shell 工具。

风险：prompt injection 利用 shell 执行任意命令。
防护（对应易错点"shell 不做白名单极易被利用"）：
1. 白名单：只允许命令前缀在 whitelist 内
2. 超时：防止挂起
3. 工作目录：cwd 锁定在 work_dir
4. 结果截断：防止上下文爆炸
"""
\`\`\`

> ### 岔路：prompt injection 是什么？（可跳读，不影响主线）
> Agent 的工具是模型的"手"，而模型的输入来自不可信的用户文本。如果某段文本里写着"请执行 \`rm -rf /\`"，模型可能真的把这句话当成指令去调 shell 工具——这就是 prompt injection：**通过操纵模型的输入，间接操纵模型手里的工具**。shell 工具权限最大（能执行任意命令），所以它是注入攻击的首选目标，防护也最重。

四个防护点逐条对应后面代码的四个位置，我们拆开看。

\`agent_app/tools/shell.py:19-31\`（spec：参数面最小化）

\`\`\`python
def make_shell_spec() -> ToolSpec:
    return ToolSpec(
        name="shell",
        description="在工作目录内执行白名单命令（ls/cat/wc/echo 等）。"
                    "命令会被 shlex 解析，只允许白名单内命令前缀。",
        input_schema={
            "type": "object",
            "properties": {
                "command": {"type": "string", "description": "要执行的 shell 命令"},
            },
            "required": ["command"],
        },
    )
\`\`\`

注意 schema 里只有一个参数 \`command\`（字符串），没有 \`cwd\`、没有 \`env\`、没有 \`timeout\`。**模型能控制的输入面被压到最小**——只有"命令字符串"这一根线；工作目录、超时、白名单这些安全细节全部锁死在 handler 内部，模型既不知道也不需要操心。description 里就写明了两条约束："工作目录内"和"白名单命令"，模型看到 description 会倾向守规矩。

\`agent_app/tools/shell.py:34-48\`（工厂函数：捕获配置）

\`\`\`python
def make_shell_handler(
    *,
    work_dir: str | None = None,
    whitelist: list[str] | None = None,
    timeout: float = 10.0,
    max_chars: int = 4000,
):
    """工厂函数：捕获所有配置，避免闭包 late-binding。

    whitelist 默认 ["ls", "cat", "wc", "echo"]——只读命令，不含 rm/mv/cp 等。
    """
    # 白名单集合化：set 让成员判断 O(1)；默认只放只读命令，不含 rm/mv/cp 等破坏性命令。
    allowed = set(whitelist or ["ls", "cat", "wc", "echo"])
    # cwd 在工厂阶段就 resolve 成绝对路径——边界"出生时"就算死，运行时不再变。
    cwd = Path(work_dir).resolve() if work_dir else Path.cwd().resolve()
\`\`\`

\`make_shell_handler\` 是**工厂函数**：不直接干活，而是把配置（白名单、工作目录）捕获进闭包，返回真正的 \`handler\`。\`allowed\` 转成 set 为了 O(1) 成员判断；\`cwd\` 在工厂阶段就 \`resolve()\` 成绝对路径——**边界在出生时就算死**。docstring 第一句点破动机：*"工厂函数：捕获所有配置，避免闭包 late-binding"*——这正是课后 Q5 的坑，先记下。

白名单默认 \`["ls", "cat", "wc", "echo"]\`——docstring 第 43 行强调 *"只读命令，不含 rm/mv/cp 等"*。默认安全的哲学：不给白名单，就只放四个查文件的命令，宁可少用，不可乱用。

\`agent_app/tools/shell.py:64-71\`（白名单校验）

（折叠：第 51-62 行是参数检查——空命令、\`shlex.split\` 分词失败（\`ValueError\`）、分词结果为空，三种情况都返回 \`ok=False\`，见 shell.py:51-62。）

\`\`\`python
        cmd_name = parts[0]
        # 白名单校验：命令前缀必须在 allowed 内
        if cmd_name not in allowed:
            return ToolResult(
                ok=False,
                content="",
                error=f"command '{cmd_name}' not in whitelist {sorted(allowed)}",
            )
\`\`\`

> 为什么这里要 \`shlex.split\`？模型给的 command 是**一整串字符串**，比如 \`cat a.txt b.txt\`。要判断"这条命令允不允许"，得先知道命令名是谁——\`shlex.split\` 按 shell 的规则做分词，把字符串拆成 \`["cat", "a.txt", "b.txt"]\`，取 \`parts[0]\` 才是干净的命令名。如果偷懒用字符串 \`startswith\` 判断，\`cat_evil.py\` 这种名字就能骗过校验。顺带一提：\`shlex.split\` 遇到引号不配对会抛 \`ValueError\`，这里捕获后转成结构化错误返回，而不是让循环崩掉。

安全路径的检查顺序是有讲究的：空命令 → 分词失败 → 空列表 → **白名单**。白名单校验是最后一道（第 66-71 行）——前几步都是在"造一个能安全判断的东西"。被拒的命令返回 \`ok=False\` + 明确错误信息（连 \`sorted(allowed)\` 都列给模型看），模型收到后就知道该换什么命令了。

\`agent_app/tools/shell.py:73-96\`（handler 后半：执行、超时、截断）

\`\`\`python
        # 执行：cwd 锁在工作目录内，timeout 防止挂起拖死循环。
        try:
            proc = subprocess.run(
                parts,
                cwd=str(cwd),
                capture_output=True,
                text=True,
                timeout=timeout,
                check=False,
            )
            # stdout/stderr 拼在一起：模型只看得到 content 一个字段，stderr 丢了就看不见权限报错。
            output = (proc.stdout or "") + (proc.stderr or "")
            # 截断：输出超长就裁到 max_chars，防止结果撑爆上下文。
            if len(output) > max_chars:
                output = output[:max_chars] + f"\\n...[truncated, total {len(output)} chars]"
            if proc.returncode != 0:
                output = f"[exit={proc.returncode}]\\n" + output
            return ToolResult(ok=True, content=output or "(no output)")
        except subprocess.TimeoutExpired:
            return ToolResult(ok=False, content="", error=f"timeout after {timeout}s")
        except FileNotFoundError:
            return ToolResult(ok=False, content="", error=f"command not found: {cmd_name}")
        except Exception as exc:
            return ToolResult(ok=False, content="", error=f"{type(exc).__name__}: {exc}")
\`\`\`

- **\`cwd=str(cwd)\`**（第 77 行）：子进程被锁在工作目录内跑，第 3 条防护落地——即便命令绕过了白名单（假设有漏洞），能碰到的文件系统也只有这个目录。
- **\`timeout=timeout\`**（第 80 行）：第 2 条防护。\`subprocess.run\` 超时会抛 \`TimeoutExpired\`，第 91-92 行接住后返回 \`ok=False\` 的 ToolResult——一条卡死的命令最多拖 10 秒，拖不死整个循环。
- **\`check=False\`**（第 81 行）：命令失败**不抛异常**——"执行失败"是 Agent 运行中的常态，失败信息应该作为**结果**交给模型看，让它自己调整策略；抛异常打断循环，Agent 就失去自我修正的机会。第 88-89 行把非零返回码 \`[exit=N]\` 前缀到输出上，就是给模型看的"失败诊断书"。
- **\`capture_output=True, text=True\`**（第 78-79 行）：同时捕获 stdout 和 stderr，第 84 行把两者**拼在一起**。为什么拼？因为模型只看得见 \`content\` 一个字段，\`ls\` 权限报错这类信息通常在 stderr 里，不拼就丢了。
- **第 86-87 行**：第 4 条防护——输出超长就截到 \`max_chars\` 并追加 \`...[truncated, total N chars]\`，让模型知道"还有更多但被截了"。
- **第 91-96 行**：三种异常（超时 / 命令不存在 / 其他）全部转成结构化的 \`ToolResult(ok=False)\`，handler 永远不向循环抛业务异常。

### 只读工具：\`grep_files.py\` —— 边界与截断

\`agent_app/tools/grep_files.py:1-11\`（docstring + 导入）

\`\`\`python
"""Day 9: grep_files 工具。

风险：路径越界（读到工作目录外）+ 结果过长。
防护：work_dir 边界校验 + max_chars 截断。
"""
from __future__ import annotations

import re
from pathlib import Path

from agent_app.loop import ToolResult, ToolSpec
\`\`\`

和 shell 的 docstring 同一个句式：先声明风险，再声明防护。但注意风险不同——grep_files 是**只读**工具，最坏后果是"读到工作目录外的文件"（信息越界），不是"破坏"；所以防护不需要白名单，核心是**边界校验 + 截断**。

\`make_grep_files_spec\`（见 grep_files.py:14-28，schema 结构与 shell 同构）声明三个参数：\`pattern\`（必填）、\`suffix\`（后缀过滤，默认不限）、\`max_matches\`（最多返回条数，默认 50）。description 里写"工作目录下"——边界承诺从说明书就开始。

\`agent_app/tools/grep_files.py:31-34\`（工厂：捕获边界）

\`\`\`python
def make_grep_files_handler(*, work_dir: str | None = None, max_chars: int = 4000):
    """工厂函数：捕获 work_dir/max_chars 配置。"""

    base = Path(work_dir).resolve() if work_dir else Path.cwd().resolve()
\`\`\`

和 shell 同款的工厂结构：\`base\` 在工厂阶段就 \`resolve()\` 成绝对路径。（折叠：第 36-47 行是参数层两个"早失败"——\`pattern\` 为空直接拒；\`re.compile\` 不合法（如未闭合括号）返回 \`ok=False\`，坏输入在入口就挡掉，不让它进遍历循环，见 grep_files.py:36-47。）

\`agent_app/tools/grep_files.py:49-73\`（遍历：不跟随软链接 + 前缀校验）

\`\`\`python
        # 结果收集：matches 存匹配条目，total_chars 做预算式截断（塞不下就停）。
        matches: list[str] = []
        total_chars = 0
        try:
            # 用 os.walk(followlinks=False) 替代 rglob，从根上断绝 symlink 跟随
            import os

            for root, dirs, files in os.walk(base, followlinks=False):
                root_path = Path(root)
                for fname in files:
                    path = root_path / fname
                    if not path.is_file():
                        continue
                    if suffix and not fname.endswith(suffix):
                        continue
                    # 路径越界防护：不跟随 symlink
                    if path.is_symlink():
                        continue
                    # 结果层复核：遍历层已掐断 symlink，这里再对最终路径查一次，双保险。
                    try:
                        resolved = path.resolve()
                        if not resolved.is_relative_to(base):
                            continue
                    except (OSError, ValueError):
                        continue
\`\`\`

第 53 行的注释是设计宣言：*"用 os.walk(followlinks=False) 替代 rglob，从根上断绝 symlink 跟随"*。路径越界的经典攻击面是 **symlink**：工作目录里躺着一个指向 \`/etc/passwd\` 的软链接，\`rglob\` 会顺着它读出去——这是课后 Q3 选项 A 点名的坑。这里的防护是**两层**：

1. **遍历层**（第 56、65 行）：\`os.walk(followlinks=False)\` 不进入符号链接目录，\`path.is_symlink()\` 再把作为文件出现的链接条目跳过——**根本不给越界路径进入遍历的机会**。
2. **结果层**（第 67-73 行）：每个文件再 \`resolve()\` 一次，用 \`is_relative_to(base)\` 校验仍在 \`base\` 内，任何异常都 \`continue\` 跳过。

> 为什么两层都要？Q3 的 B 选项就是"只做事后 resolve 校验"——但遍历过程可能已经顺着链接读出去了，只校验结果拦不住越界。遍历层掐断（第一层）+ 结果层兜底（第二层），双保险而不是二选一。

（折叠：第 75-79 行读文件用 \`path.read_text(encoding="utf-8", errors="ignore")\`，二进制/乱码文件跳过不中断；\`errors="ignore"\` 保证一个坏文件毁不掉整个搜索，见 grep_files.py:75-79。）

\`agent_app/tools/grep_files.py:81-101\`（匹配、预算式截断、收尾）

\`\`\`python
                    for lineno, line in enumerate(text.splitlines(), 1):
                        if regex.search(line):
                            try:
                                rel = path.relative_to(base)
                            except ValueError:
                                rel = path
                            entry = f"{rel}:{lineno}: {line.strip()}"
                            if total_chars + len(entry) > max_chars:
                                matches.append("...[truncated]")
                                return ToolResult(ok=True, content="\\n".join(matches))
                            matches.append(entry)
                            total_chars += len(entry) + 1
                            if len(matches) >= max_matches:
                                matches.append(f"...[max {max_matches} matches reached]")
                                return ToolResult(ok=True, content="\\n".join(matches))
        except Exception as exc:
            return ToolResult(ok=False, content="", error=f"{type(exc).__name__}: {exc}")

        if not matches:
            return ToolResult(ok=True, content="(no matches)")
        return ToolResult(ok=True, content="\\n".join(matches))
\`\`\`

- **条目格式**（第 87 行）：\`rel:lineno: line\`——相对路径（\`relative_to(base)\` 失败时退回绝对路径）、行号、去首尾空白的行内容。模型看到 \`utils.py:12: def build(...)\`，既能定位又能复述给 shell 去 \`cat\`——**两个工具配合使用**。
- **预算式截断**（第 88-90 行）：维护 \`total_chars\` 预算，**塞不下下一条就停**并追加 \`...[truncated]\` 标记——命中十万行也最多消耗 \`max_chars\` 字符。
- **max_matches 上限**（第 93-95 行）：另外一条独立的停止条件，防止"匹配太少但每条都很长"或"匹配太多"两个方向的失控，到达上限追加 \`...[max N matches reached]\`。
- **第 96-97 行**：整个遍历包在 try 里，任何意外（比如权限异常）都转成 \`ok=False\` 的 ToolResult。
- **第 99-101 行**：无匹配返回 \`(no matches)\`——**"没找到"也是有效结果**，要明确告诉模型，而不是让模型猜。

### 网络工具：\`http_get.py\` —— 超时与大小限制

\`agent_app/tools/http_get.py:1-5\`（docstring）

\`\`\`python
"""Day 9: http_get 工具。

风险：超时（网络挂起）+ 响应过长（上下文爆炸）。
防护：timeout + max_chars 截断。
"""
\`\`\`

第三个 docstring，同一句式。http_get 的风险和前两个都不同：它不执行命令（不像 shell），也不碰本地文件系统（不像 grep_files），它的风险是**网络本身**——请求挂起会拖死循环（超时），响应太长会撑爆上下文（截断）。

\`make_http_get_spec\`（见 http_get.py:13-25）是三个 spec 里最简的：单参数 \`url\`。注意 description 里主动声明了"返回前 4000 字符"——**把截断写进说明书**，模型看到就知道拿到的可能是截断后的内容。

\`agent_app/tools/http_get.py:28-56\`（handler：协议白名单 + 超时 + 截断）

\`\`\`python
def make_http_get_handler(*, timeout: float = 10.0, max_chars: int = 4000):
    """工厂函数：捕获 timeout/max_chars 配置，避免闭包陷阱。"""

    def handler(arguments: dict) -> ToolResult:
        url = arguments.get("url", "")
        if not url:
            return ToolResult(ok=False, content="", error="url is required")
        # 协议白名单：只放 http/https，堵死 file:// 等读本地文件的越界通道。
        if not url.startswith(("http://", "https://")):
            return ToolResult(ok=False, content="", error="url must start with http:// or https://")

        # 延迟导入：这个工具平时用不到 httpx，真正请求时才加载。
        import httpx

        try:
            # 超时防护：整个请求最多 timeout 秒，网络挂起不会拖死循环。
            with httpx.Client(timeout=timeout) as client:
                resp = client.get(url)
                # 大小限制：响应超出 max_chars 就截断并标注，防止撑爆上下文。
                content = resp.text[:max_chars]
                if len(resp.text) > max_chars:
                    content += f"\\n...[truncated, total {len(resp.text)} chars]"
                return ToolResult(ok=True, content=content)
        except httpx.TimeoutException:
            return ToolResult(ok=False, content="", error=f"timeout after {timeout}s")
        except Exception as exc:
            return ToolResult(ok=False, content="", error=f"{type(exc).__name__}: {exc}")

    return handler
\`\`\`

- **协议白名单**（第 36-37 行）：url 必须以 \`http://\` 或 \`https://\` 开头。如果允许 \`file://\`、\`ftp://\`，模型（或被注入的模型）就能用 \`http_get\` 读本地文件，等于给只读工具开越界通道——这是 http_get 版的"白名单"，对象从命令换成协议。
- **\`httpx.Client(timeout=timeout)\`**（第 44 行）：httpx 是 Python 的 HTTP 客户端库（第 40 行在函数内导入，和 registry.py 第 34 行同样的延迟导入手法——这个工具平时用不到 httpx，用到才加载）。\`timeout\` 在构造 Client 时传入，**一次请求最多 10 秒**，超时抛 \`TimeoutException\`。
- **第 46-49 行**：\`resp.text[:max_chars]\` 截断 + 标注，和 shell.py:86-87 同款。截断发生在**取出响应那一刻**，而不是把整个响应塞进内存再处理。
- **第 51-54 行**：\`httpx.TimeoutException\` 单独接住（网络工具最常见的失败），其余异常兜底，一律转成 \`ToolResult(ok=False)\`。

### 三类工具的风险差异（收尾对比）

三个文件走完，把它们的风险模型并排看：

| 工具 | 最坏后果 | 防护手段 | 代码位置 |
| --- | --- | --- | --- |
| shell | 执行任意命令（破坏性） | 命令白名单 + 超时 + cwd 锁定 + 截断 | shell.py:64-71、80、77、86-87 |
| grep_files | 越界读到工作目录外（泄露） | 不跟随 symlink + resolve 前缀校验 + 截断 | grep_files.py:53、56、65-73、88-95 |
| http_get | 请求挂起 / 响应撑爆上下文（拖垮） | 协议白名单 + 超时 + 截断 | http_get.py:36-37、44、46-49 |

风险大小决定防护重量：**shell 能造成破坏**，四件套齐上且默认只放只读命令；**grep_files 只读但能越界**，不跟随软链接 + 双重复核路径；**http_get 既不破坏也不越界**，但网络不可控，盯死超时和响应大小。共性只有一条：**所有工具的结果一律截断**——上下文是 Agent 最贵的资源。

而"加工具不改循环"的落点就一句话：每加一个工具，就是 import 一对工厂 + 一次 \`reg.register(...)\`；\`ReActLoop\` 只认 registry，工具从 3 个变 30 个，循环零改动。

## 为什么这样写

- **风险按工具类型分级，"防什么"写在每个文件头顶**：shell.py:3-4 原文 *"风险：prompt injection 利用 shell 执行任意命令。防护（对应易错点"shell 不做白名单极易被利用"）"*，grep_files.py:3-4、http_get.py:3-4 同句式。先声明风险再写防护——安全设计前置，而不是事后打补丁。
- **工具都用工厂函数 \`make_xxx_handler\` 捕获配置**：shell.py:41 原文 *"工厂函数：捕获所有配置，避免闭包 late-binding"*，http_get.py:29 原文 *"工厂函数：捕获 timeout/max_chars 配置，避免闭包陷阱"*。工厂调用时把配置绑定进闭包，规避 late-binding 陷阱（详见课后 Q5），三个工具统一这一模式。
- **白名单默认只读命令，可覆盖但默认安全**：shell.py:43 原文 *"whitelist 默认 ["ls", "cat", "wc", "echo"]——只读命令，不含 rm/mv/cp 等"*，registry.py:29 docstring 同步写明。默认值本身就是安全策略：不给配置时按最保守的方式运行。
- **symlink 防护做在遍历层，而不是事后补救**：grep_files.py:53 注释原文 *"用 os.walk(followlinks=False) 替代 rglob，从根上断绝 symlink 跟随"*。\`rglob\` 会顺着软链接越界（Q3 的坑），所以遍历层就掐断，再叠加结果层 \`resolve()\` 校验——防护选在"越界发生之前"。

## 本章小结

- 加工具 = 一对工厂函数（\`make_xxx_spec\` + \`make_xxx_handler\`）+ 一次 \`reg.register(...)\`，循环零改动；分发（registry 查名字）与执行（handler 干活）彻底解耦。
- 三类工具风险分级：shell 白名单 + 超时 + cwd 锁定 + 截断；grep_files 不跟随 symlink + resolve 前缀校验 + 截断；http_get 协议白名单 + 超时 + 截断。
- 工厂函数把配置捕获进闭包，规避 late-binding；\`register(spec, handler)\` 分开"给模型的说明书"和"给机器的动作"。
- 工具结果一律截断并标注 \`[truncated]\`；错误一律转成结构化 \`ToolResult(ok=False)\`，绝不向循环抛业务异常。
- 这一处是"注册与执行"的事——后面给 Agent 加技能、加工具，只是再补一对 \`make_xxx_spec / make_xxx_handler\` 再 \`register\` 一次，**核心没变复杂**。

## 一句话边界

- 加工具只往 registry 注册，不改循环；分发和执行要解耦。
- 不同类型工具有不同风险，要分别治理（HTTP 超时、文件越界、shell 白名单）。
- shell 不做白名单是最严重的错误，默认只放只读命令。
- 工具结果必须截断，否则撑爆上下文。
- 协议差异收在 adapter 层，别渗进业务代码。

## 读完应该能用自己的话回答

1. 工具注册是怎么做到"加工具不改循环"的？
2. HTTP、文件搜索、shell 三类工具各有什么风险？怎么防护？
3. 为什么 shell 工具必须做白名单？默认放什么命令？
4. 工具结果为什么要截断？
5. OpenAI 和 Anthropic 的协议差异该怎么处理？

## 想深入

工具路由、参数校验分层、协议差异的工程动因等，见八股·04 工具调用。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 的多工具注册。请解释：1) 怎么做到加工具不改循环；2) HTTP、文件搜索、shell 三类工具各有什么风险、怎么防护；3) 为什么 shell 必须做白名单；4) 工具结果为什么要截断。不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

### Q1. dispatch map

给一个已可运行的 ReAct Agent 新增一个 HTTP 工具，循环主体应该怎么改？

A. 不改循环，往 dispatch map 注册一个 {tool_name: handler} 键值对
B. 在循环里加 if tool_name == "http_get" 分支单独处理
C. 只在 system prompt 里写明工具名，不注册 handler
D. 继承 ReActLoop 写一个 HttpLoop 子类

### Q2. shell 白名单

shell 工具接入 Agent 时，关于白名单的判断哪个成立？

A. 白名单是可选的性能优化，本地开发可以不开
B. 只要锁定工作目录，就不需要白名单
C. 白名单是最低门槛，默认只放只读命令
D. 白名单应放全部常用命令以提升灵活性

### Q3. 路径越界

文件搜索工具防止路径越界读到工作目录之外，下列哪种遍历方式可行？

A. 用 pathlib.Path.rglob 递归遍历匹配文件
B. 用 os.walk 遍历，遍历后对每个结果做 resolve() 前缀校验
C. 把工作目录 resolve() 成绝对路径硬编码，禁止任何相对路径输入
D. 用 os.walk(followlinks=False) 遍历、is_symlink() 跳过软链接，再对路径做 resolve() 前缀校验

### Q4. OpenAI vs Anthropic 协议差异

OpenAI 和 Anthropic 两套工具协议字段不同，处理这个差异的分层方式是？

A. 在每个工具 handler 里分别判断 provider，按需返回不同结构
B. 把差异封装在 adapter 层，主路径用 OpenAI-compatible 协议
C. 业务代码直接读 Anthropic 的 tool_use content block
D. 用 system prompt 提示模型自己适配两种协议

### 开放题

**Q5. 闭包 late-binding**：有人写了如下工具注册代码，注册 3 个工具后发现：模型调用任何一个工具，实际执行的都是最后一个工具（tool_c）的逻辑。

\`\`\`python
handlers = []
for tool in [tool_a, tool_b, tool_c]:
    def wrapper(**kw):
        return call(tool.name, kw)
    handlers.append(wrapper)
\`\`\`

1. 这是什么 bug？根因是什么？
2. 用什么模式修正？写出修正后的代码骨架。
3. 本 Day 的 \`make_http_get_handler\` / \`make_shell_handler\` 为什么用工厂函数而不是直接在循环里装饰？

≥150 字，用自己的话回答。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

### Q1. 答案：A

工具分发是一个 \`{tool_name: handler}\` 字典。加工具 = 往字典加一个键值对，循环代码一行都不用动。判断标准：如果你的 loop 代码随工具增加而膨胀，说明没把分发和执行解耦。

- B 错：在循环里写 if 分支，循环随工具增加而膨胀，分发与执行耦合。
- C 错：只在 system prompt 写工具名而不注册 handler，模型知道名字却无 handler 可调用，工具执行不了。
- D 错：为每个工具继承一个 loop 子类是过度工程，丢失了同一循环复用的能力。

### Q2. 答案：C

shell 不做白名单是最严重的错误——用户说"帮我看看系统日志"，模型可能调 \`shell("cat /etc/passwd")\`，注入者更可能让模型调 \`shell("rm -rf /")\`。白名单不是可选优化，是 shell 工具的最低门槛，默认只放只读命令。

- A 错：白名单不是性能优化，是防 prompt injection 执行任意命令的安全底线，本地开发也必须开。
- B 错：只锁工作目录挡不住注入——攻击者仍可在工作目录内执行破坏性命令或读取敏感文件。
- D 错：把全部常用命令放进白名单等于没有白名单，灵活性以安全为代价。

### Q3. 答案：D

正确防护是三层：\`os.walk(followlinks=False)\` 不跟随 symlink 目录，\`is_symlink()\` 跳过作为文件出现的 symlink 条目，再对最终路径做 \`resolve()\` 前缀校验确保不越出工作目录。

- A 错：\`rglob\` 会跟随 symlink，沿软链接读到工作目录之外，是教材点名的越界坑。
- B 错：遍历阶段不控制 symlink 跟随，仅事后 \`resolve()\` 校验无法阻止遍历过程已经越界。
- C 错：硬编码工作目录、禁止相对路径输入并不能阻止 symlink 越界，还牺牲了工具可用性；防护应在遍历层做。

### Q4. 答案：B

两家协议字段不同（OpenAI 用 \`parameters\`、\`message.tool_calls\`、\`role="tool"\`；Anthropic 用 \`input_schema\`、\`tool_use\` content block、\`role="user"\` + \`tool_result\`），但上层业务代码不应感知差异——差异只放在 adapter 层，主路径用 OpenAI-compatible，Anthropic 作为可选 adapter 展示协议差异。

- A 错：在 handler 里判断 provider 会让工具执行层耦合协议差异，handler 应只关心业务逻辑。
- C 错：业务代码直接读 Anthropic 特有的 content block，换 provider 就要改业务代码，升级困难。
- D 错：模型无法"自己适配协议"，协议差异是工程层的序列化/反序列化问题，不是模型能力问题。

### 开放题 Q5 参考要点（rubric）

**0 分**：只说"是 bug"或"循环有问题"，说不出 late-binding 根因，也给不出修正模式。

**1 分**：能说出这是 Python 闭包 late-binding（延迟绑定）——闭包捕获的是变量引用而非值，循环结束时 \`tool\` 全部指向最后一个 \`tool_c\`，所以所有 wrapper 都调用 tool_c；能给出至少一种修法（如用默认参数 \`def wrapper(t=tool, **kw)\`）。

**2 分**：完整覆盖三点——(1) late-binding 根因：闭包按引用捕获循环变量，调用时才求值，此时 \`tool\` 已是最后一项；(2) 用工厂函数显式捕获，如 \`def make_wrapper(captured): def wrapper(**kw): return call(captured.name, kw); return wrapper\` 然后 \`handlers = [make_wrapper(t) for t in tools]\`；(3) 解释 \`make_http_get_handler\`/\`make_shell_handler\` 用工厂函数正是这个模式——把配置在工厂调用时绑定到闭包，避免在循环里批量装饰时被 late-binding 覆盖。

关键判断：late-binding 是 Python 闭包经典陷阱，工厂函数（或默认参数）是标准修法；本 Day 的 make_xxx_handler 就是工厂模式的应用。
`,wf=`---
title: Day 10 TodoWrite 计划执行分离
tags:
  - week2/day10
  - concept
  - code
  - exercise
---

# Day 10：TodoWrite 与计划-执行分离

> 阅读约 35 分钟 ｜ 前置：[[day03-Agent范式]]、[[day08-从零写ReAct-Loop]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/todo.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

Agent 跑着跑着容易出两个毛病：忘了最初的目标，或者做到一半草草收尾。这不是模型能力问题，是规划没有被显式化——模型不知道自己做到哪了、还剩什么。

今天要看清 TodoWrite 怎么解决这个：让模型把"接下来要做什么"显式写出来，放在上下文里，每一步都看得见。它对应 Day 3 讲过的 Plan-Execute 范式里的"把计划显式化"。

**一句话主旨**：TodoWrite 是"让计划在上下文里可见"的软约束——模型每一步都能看见自己做到哪、还剩什么。今天的代码走读就按"状态机 → 工具 → 工厂挂载"三段展开。

## 一个例子

一个多步任务"读文件并统计行数"，两种做法：

\`\`\`text
没有 todo：模型边想边做，做到一半忘了还要统计行数，直接返回了文件内容
  -> 任务没做完就草草收尾

有 todo：模型先列出 [1.读文件, 2.统计行数, 3.返回结果]
  做第 1 步时标 in_progress，做完标 completed
  每步都能看见列表，知道还剩什么没做
  -> 全部做完才返回
\`\`\`

差别在于：todo 列表让模型始终"看见"自己做到哪了，不会漏步骤。

## 这个概念是什么

**TodoWrite** 是让模型把计划显式写成一个 todo 列表（待办项 + 状态），放在上下文里随时可见。它对应 Plan-Execute 范式：先列出计划，再逐步执行，执行中能看见进度。

关键属性：它是**软约束**，不是硬约束。软约束 = 模型可以自由选下一个做哪项，但列表始终可见；硬约束 = 强制按顺序、第 2 步没做完不许做第 3 步。硬约束会失去 ReAct 的灵活性（模型发现第 1 步结果让第 3 步更好做却不能跳），所以用软约束。

概念部分讲完了"软约束是什么"——现在看这个设计怎么在代码里落地。

## 代码走读：todo.py —— 计划如何"显式化"

本篇走读 \`agent_app/todo.py\`（正文统一写作 \`agent_app/todo.py\`），约 170 行，全文件按"数据 → 状态机 → 工具声明 → 工厂函数"四层组织，正好对应模块 docstring 里列出的三样东西：\`TodoManager\`、\`todo_write\` 工具、\`make_todo_write_spec/handler\` 工厂。代码已完整嵌入下文，每一段引用都标注了 \`文件:行号\`，可以就地核对。

### 第一站：模块 docstring —— 全文件的设计合同

\`agent_app/todo.py:1-15\`

\`\`\`python
"""Day 10: TodoWrite —— 计划-执行分离。

纠偏：TodoWrite 不是任务管理器，是"让模型把规划显式化"的软约束。
作用：抗中途忘目标 / 抗草草收尾 / 给用户进度可见性。
状态机：pending → in_progress → completed（允许回退到 pending）。

本模块提供：
1. TodoManager：维护 todo 列表 + 状态机
2. todo_write 工具：让 Agent 通过 tool_call 操作 todo
3. make_todo_write_spec/handler：工厂函数，挂到 ToolRegistry

设计要点（对应易错点）：
- todo 是软约束，不强制按序执行（保留 ReAct 灵活性）
- 每次 todo_write 返回当前进度概览，让模型"看见"自己做到哪了
"""
\`\`\`

这段 docstring 是整个文件的"设计合同"，先把三个易错点钉死：

- **第一行"纠偏"**：TodoWrite 不是任务管理器。它不做调度、不决定下一个执行哪个工具，只做一件事——把规划显式化放进上下文。后面读代码时要一直带着这个判断，否则容易把 \`todo_write\` 误当成"调度器"。
- **作用三连**：抗中途忘目标 / 抗草草收尾 / 给用户进度可见性。第三个作用容易被忽略：todo 不只是给模型看的，也是给人类用户看"Agent 现在做到哪了"的。
- **设计要点两条**：软约束 + 每次返回进度概览。这两条是全文的暗线——软约束在 \`TodoManager\` 的 docstring 里再次强调，进度概览在 \`summary()\` 和 handler 的每个成功分支里落地。
- **第 7-10 行列出模块三件套**：\`TodoManager\`（状态机）、\`todo_write\`（工具）、工厂函数（挂到 ToolRegistry）。走读顺序就是 1 → 2 → 3。

### 第二站：TodoItem —— 一个待办项的数据形状

\`agent_app/todo.py:27-36\`

\`\`\`python
@dataclass(slots=True)
class TodoItem:
    """单个 todo 项。"""

    id: int
    content: str
    status: str = "pending"  # pending / in_progress / completed

    def to_dict(self) -> dict[str, Any]:
        return {"id": self.id, "content": self.content, "status": self.status}
\`\`\`

一个待办项只有三个字段：

- **\`id\`**：列表内的自增编号。它不只是一个序号——后面 \`update\` 动作要靠它定位项，\`summary\` 渲染时也把 \`#id\` 打在每一行上，模型看到的就是它下次要填的编号。
- **\`content\`**：任务内容。注意这里**没有任何格式约束**——写"完成任务"还是写"读 loop.py 并统计行数"都能存进去，"内容要具体"这条靠使用层约定，代码不拦（后面岔路再展开）。
- **\`status\`**：状态，默认 \`pending\`，行尾注释直接标出合法取值 \`pending / in_progress / completed\`。状态是字符串而不是枚举类，因为它的取值面极小（就三个），字符串 + 校验就够了，不需要为三个常量单独建类型。

> 为什么用 dataclass 而不是字典？因为 \`TodoItem\` 既是"数据"又是状态机的承载体——\`TodoManager.update()\` 要直接改 \`item.status\`。dataclass 给字段名字、类型、默认值、docstring，字典只能靠调用方记得"key 要叫 status"。等会儿你会看到 \`TodoManager\` 修改 \`item.status\` 的那一行——字段有名字、有注释，谁改的、改什么，一眼清楚。

\`to_dict()\` 把项转成字典，但当前代码里没人调它（\`summary\` 是手拼字符串）。它更像给未来调试、日志、评测留的扩展位——Day 1 读 \`llm.py\` 时我们见过同样的"先留好扩展位"的写法：接口先长出来，用到的那天不用改结构。

### 第三站：TodoManager —— 状态机本体

先看类的 docstring 和构造：

\`agent_app/todo.py:39-51\`

\`\`\`python
class TodoManager:
    """维护 todo 列表 + 状态机。

    状态机：
        pending → in_progress → completed
                ←──────────────┘（允许回退到 pending）

    不强制按序执行：todo 是软约束，模型可自由选择下一个 in_progress 项。
    """

    def __init__(self) -> None:
        self._items: list[TodoItem] = []
        self._next_id = 1
\`\`\`

- docstring 用 ASCII 图把状态机画出来了：正箭头 \`pending → in_progress → completed\`，底部一条回箭头允许回退到 pending。**这就是全文件唯一的"规则定义"**，后面 \`update()\` 只是它的机械实现。
- 关键句："不强制按序执行：todo 是软约束，模型可自由选择下一个 in_progress 项。"——概念部分讲的"软约束"，在这里落地成一句注释，而不是一段顺序校验代码。**"不强制"在代码里的体现就是"没有写这段代码"**，后面 \`update()\` 你会看到，它根本不检查顺序。
- \`__init__\` 只有两个私有字段：\`_items\`（项列表）和 \`_next_id\`（自增发号器）。注意 \`_next_id\` 只增不减——回退状态不会让编号复用，每个 todo 项在本次任务里身份唯一。

接下来是四个方法里的前两个：\`add\` 和 \`update\`。

\`agent_app/todo.py:53-66\`

\`\`\`python
    def add(self, content: str) -> TodoItem:
        item = TodoItem(id=self._next_id, content=content)
        self._items.append(item)
        self._next_id += 1
        return item

    def update(self, item_id: int, status: str) -> TodoItem | None:
        if status not in ("pending", "in_progress", "completed"):
            raise ValueError(f"invalid status: {status}")
        for item in self._items:
            if item.id == item_id:
                item.status = status
                return item
        return None
\`\`\`

- **\`add\` 就是"领号建档"**：id 取当前 \`_next_id\`，装进列表，号码 +1，把新项返回给调用方。返回它而不是返回 None，是因为调用方（handler）要用 \`item.id\` 和 \`item.content\` 拼反馈文本。
- **\`update\` 干两件事**：第一，校验 status 合法——不在三态集合里直接 \`raise ValueError\`，错误信息把非法值带出来（\`invalid status: xxx\`）；第二，按 id 线性找项、改状态、返回它。找不到就返回 \`None\`。
- **"改成功了"和"查无此项"是两种返回值**：返回 \`TodoItem\` 表示成功，返回 \`None\` 表示没找到。调用方必须区分这两种情况，否则会把"没找到"当成"改成功了"。
- **回退在哪实现？** 就在第 64 行：\`item.status = status\`。status 的合法值里就有 \`"pending"\`，所以"把 completed 项标回 pending"和"把 pending 项标成 in_progress"是**同一个赋值操作**——状态机允许的一切转移，都被第 60 行的"三态集合校验"兜住，赋值本身根本不管顺序。这再次印证了软约束：代码只保证状态合法，不保证执行顺序。

> 为什么允许回退 completed → pending？模型做完第 1 步可能发现第 2 步其实不用做，或者第 3 步应该提前——把项标回 pending 重新排队，比硬把 completed 当终态诚实。禁止回退 = 禁止纠错，后面"为什么这样写"还会回到这点。

最后两个方法：\`list\` 和 \`summary\`。

\`agent_app/todo.py:68-83\`

\`\`\`python
    def list(self) -> list[TodoItem]:
        return list(self._items)

    def summary(self) -> str:
        """返回进度概览，让模型看见自己做到哪了。"""
        if not self._items:
            return "(no todos)"
        lines = []
        counts = {"pending": 0, "in_progress": 0, "completed": 0}
        for item in self._items:
            mark = {"pending": " ", "in_progress": ">", "completed": "x"}[item.status]
            lines.append(f"[{mark}] #{item.id} {item.content}")
            counts[item.status] += 1
        lines.append(f"\\n进度: {counts['completed']}/{len(self._items)} 完成, "
                     f"{counts['in_progress']} 进行中, {counts['pending']} 待办")
        return "\\n".join(lines)
\`\`\`

- **\`list()\` 返回的是拷贝**（\`list(self._items)\`）而不是内部列表本身——调用方随便改返回结果也不会污染内部状态。这是"防御性拷贝"的惯例：内部状态只有 Manager 自己能动。
- **\`summary()\` 是这篇文章的心脏**：把整个 todo 列表渲染成一小段**给模型看的文本**。docstring 一句话说透动机："返回进度概览，让模型看见自己做到哪了。"
- 渲染格式拆开看：每行是 \`[标记] #id 内容\`，标记三选一——空格 = pending、\`>\` = in_progress、\`x\` = completed；全部行拼完后，追加一行统计：\`进度: x/N 完成, N 进行中, N 待办\`。
- **为什么每行都带 \`#id\`？** 因为 \`update\` 按 id 定位。模型 \`list\` 之后看到的编号，就是它下一次 \`update\` 要填的 \`item_id\`——预览和操作共用同一套编号，不需要"翻译"。
- 空列表返回 \`"(no todos)"\`——空态也要有可读输出，模型不会对着空字符串困惑。

> 为什么进度概览是"文本"而不是 JSON？给模型的反馈要的是"一眼看懂"，\`[x] #1 读文件\` 比 JSON 省 token、更好读。而且模型无状态（Day 1 讲过：记忆靠你把历史放回上下文），它每一轮的"记忆"就是被拼回 messages 的那些文本——所以每次工具调用结束，都要把最新进度**带回去**，这正是模块 docstring 里"让模型'看见'自己做到哪了"的机制实现。

> ### 岔路：WIP=1 的实验证据（可跳读，不影响主线）
> learn-harness-engineering 的 lecture-07 做过实验：同时只做一件事（WIP=1）的 Agent，任务完成率比"想到哪做到哪"高约 37%。Agent 天生爱"多做一点"，但注意力是有限资源，同时在推进的项越多，越容易哪件都没做完。
> 注意 \`summary()\` 的统计行（todo.py:81-82）只是**如实计数**几个 in_progress，代码本身不限制"同时只能有一个 in_progress"——"一次只标一个 in_progress"是 system prompt 层的约定，靠它间接实现 WIP=1。这跟软约束是一脉相承的：约束靠引导，不靠锁死。

### 第四站：make_todo_write_spec —— 把 todo_write 声明成工具

\`agent_app/todo.py:86-109\`

\`\`\`python
def make_todo_write_spec() -> ToolSpec:
    return ToolSpec(
        name="todo_write",
        description="管理任务计划。action=add 添加任务，action=update 更新状态，"
                    "action=list 查看当前进度。让规划显式化，避免中途忘目标或草草收尾。",
        input_schema={
            "type": "object",
            "properties": {
                "action": {
                    "type": "string",
                    "enum": ["add", "update", "list"],
                    "description": "要执行的操作",
                },
                "content": {"type": "string", "description": "add 时的任务内容"},
                "item_id": {"type": "integer", "description": "update 时的任务 ID"},
                "status": {
                    "type": "string",
                    "enum": ["pending", "in_progress", "completed"],
                    "description": "update 时的目标状态",
                },
            },
            "required": ["action"],
        },
    )
\`\`\`

- **\`ToolSpec\` 是 Day 8 loop 里的工具描述结构**：名字 + 描述 + 参数 schema（定义见 \`loop.py:27-33\`）。模型靠这份 JSON Schema 知道"有个工具叫 todo_write、它接受什么参数"，从而生成合法的 tool_call。
- **\`description\` 是教模型"什么时候用"的地方**：一句话把三个 action 说清，最后点明目的——"让规划显式化，避免中途忘目标或草草收尾"。这段文字会原样进模型的上下文，所以它既是给人看的文档，也是给模型看的用法说明。
- **每个字段都带约束**：\`action\` 和 \`status\` 都是 \`enum\` 枚举，模型传错值直接过不了 schema 校验；\`content\`、\`item_id\`、\`status\` 各自带 description，说明"哪个动作才用我"。
- **\`required: ["action"]\`**——只有 action 是必须的。add 时才需要 content，update 时才需要 item_id + status。这与 handler 里的分支校验一一对应：schema 管"参数形状"，handler 管"具体动作的必填项"。
- **注意 schema 里没有 \`"order"\`、没有"必须按序执行"之类的字段**——工具的声明层从结构上就不支持硬约束。这是"软约束"在设计上的体现：连参数的形状都只谈"改哪个、改成什么"，不谈"第几步做完才能做第几步"。

### 第五站：make_todo_write_handler —— 捕获 manager 的工厂

\`agent_app/todo.py:112-160\`

\`\`\`python
def make_todo_write_handler(manager: TodoManager) -> Callable[[dict], ToolResult]:
    """工厂函数：捕获 TodoManager 实例，返回 handler。

    manager 由调用方持有，让 todo 状态跨多轮 loop 持续。
    """

    def handler(arguments: dict) -> ToolResult:
        action = arguments.get("action")
        if action not in VALID_ACTIONS:
            return ToolResult(
                ok=False,
                content="",
                error=f"invalid action: {action}, must be one of {VALID_ACTIONS}",
            )

        if action == "add":
            content = arguments.get("content", "").strip()
            if not content:
                return ToolResult(ok=False, content="", error="content is required for add")
            item = manager.add(content)
            return ToolResult(
                ok=True,
                content=f"已添加 #{item.id}: {item.content}\\n\\n{manager.summary()}",
            )

        if action == "update":
            item_id = arguments.get("item_id")
            status = arguments.get("status")
            if item_id is None or status is None:
                return ToolResult(
                    ok=False,
                    content="",
                    error="item_id and status are required for update",
                )
            try:
                item = manager.update(int(item_id), status)
            except ValueError as exc:
                return ToolResult(ok=False, content="", error=str(exc))
            if item is None:
                return ToolResult(ok=False, content="", error=f"todo #{item_id} not found")
            return ToolResult(
                ok=True,
                content=f"已更新 #{item.id} → {item.status}\\n\\n{manager.summary()}",
            )

        # action == "list"
        return ToolResult(ok=True, content=manager.summary())

    return handler
\`\`\`

**为什么是"工厂函数"而不是直接定义一个 handler？** docstring 第 115 行写得很清楚："manager 由调用方持有，让 todo 状态跨多轮 loop 持续。"——\`handler\` 是闭包，捕获了外面传进来的 \`manager\` 实例，loop 每轮调这个 handler 都是在**同一个 manager** 上操作。如果 handler 内部 \`TodoManager()\` 现 new 一个，todo 列表每轮工具调用都会清零，"显式化"就失效了。manager 由调用方（loop 的宿主）持有，计划才能跨多轮 Reason → Act → Observe 一直存在。\`ToolResult\` 的定义在 \`loop.py:36-42\`：\`ok\` + \`content\` + \`error\`，docstring 约定"ok=False 时 error 必填"——错误也要结构化，模型才能读到并纠正。

逐分支看：

- **未知 action 先兜住**（第 120-125 行）：\`action not in VALID_ACTIONS\` 直接返回 \`ok=False\`，error 里带出非法值和合法集合："invalid action: xxx, must be one of {'add', 'update', 'list'}"。模型读到这个错误就知道该用哪个动作——这是工具调用的**自愈机制**：错误不是终点，是下一轮修正的输入。
- **add 分支**（第 127-135 行）：\`content.strip()\` 后判空——空内容是"没意义的待办"，直接拒绝而不是存一个垃圾项。成功后返回 \`已添加 #3: 写总结\`，**注意末尾拼了 \`manager.summary()\`**。
- **update 分支**（第 137-155 行）：item_id / status 缺一不可；\`int(item_id)\` 转换可能抛 \`ValueError\`，被 try/except 接住转成 \`ok=False\` 的 ToolResult——**所有校验错误都走返回值，不往外抛**，loop 不会因为一次工具调用崩掉。找到项就改，找不到返回 \`todo #5 not found\`。
- **list 分支**（第 157-158 行）：最朴素——直接把 \`summary()\` 全文返回，不做任何修改。它是纯查询动作。
- **每次成功的 add/update，返回文本都以 \`manager.summary()\` 收尾**——这就是"让模型看见自己做到哪"的落地。模型这次调用得到的反馈不只是"已更新 #1 → completed"，而是**整个列表快照 + 进度统计**。下一轮思考时，这份文本就在它的上下文里。

**怎么挂进 loop？** \`todo.py\` docstring 写了"挂到 ToolRegistry"。挂载发生在 loop 侧：\`ToolRegistry.register(spec, handler)\` 按名字把 spec 和 handler 成对收进 \`_specs\` / \`_handlers\` 两个字典（见 \`loop.py:65-75\`），而 spec/handler 都来自 \`make_todo_write_spec()\` 和 \`make_todo_write_handler(manager)\` 两个工厂——manager 实例在工厂之外创建、作为参数传入。这就是 Day 9 讲过的"加工具不用改循环，只需 register"；今天新增的只有一件事：**谁持有 manager，谁就持有计划的跨轮生命周期**。

> ### 岔路：什么任务才开 todo？todo 写多具体？（可跳读，不影响主线）
> 两条使用层经验，代码里都"不管"，但决定了 todo 有没有用：
> 1. **单步任务别开 todo**：一次 \`get_time\`、一次 \`calculator\` 直接调就行，列 todo 是白烧 token。todo 适合多步骤、容易漏步骤的任务。
> 2. **content 要具体到可验证**：\`add()\` 只校验非空（todo.py:128-130），写"完成任务"和写"读 loop.py 并统计行数"都放行——但前者没有指导性，模型会按自己的理解乱做。所以"内容具体"这条靠 system prompt 约定，不靠代码强制。跟 WIP=1 一样：**代码只管结构，使用靠约定**，这是 TodoWrite 软约束哲学的完整版。

## 为什么这样写

- **todo 是软约束，不强制按序执行**：模块 docstring 第 13 行写死——*「- todo 是软约束，不强制按序执行（保留 ReAct 灵活性）」*（\`todo.py:13\`）；\`TodoManager\` 的 docstring 第 46 行再次强调——*「不强制按序执行：todo 是软约束，模型可自由选择下一个 in_progress 项」*（\`todo.py:46\`）。配套证据在 \`update()\`：第 60 行只校验状态合法，第 64 行直接赋值，**全文件没有任何"必须按 1→2→3 顺序执行"的检查**。为什么？强制按序会锁死 ReAct——模型发现第 1 步的结果让第 3 步更好做，却被逼着先做第 2 步。约束只管"状态合法 + 列表可见"，把顺序的自由留给模型。
- **每次写操作都把进度概览带回去**：模块 docstring 第 14 行——*「每次 todo_write 返回当前进度概览，让模型"看见"自己做到哪了」*（\`todo.py:14\`）；\`summary()\` 的 docstring（\`todo.py:72\`）更短、更直白：*「返回进度概览，让模型看见自己做到哪了。」*。机制上，handler 的 add / update 分支都在返回文本末尾拼 \`manager.summary()\`（\`todo.py:134\`、\`todo.py:154\`）。模型无状态（Day 1 讲过），"进度可见"不是靠模型记住，而是靠每次工具结果把快照**拼回上下文**——忘了目标、草草收尾这两个毛病就是这么治的。
- **允许回退 completed → pending**：\`TodoManager\` docstring 里的状态机图专门画了回箭头——*「pending → in_progress → completed / ←──────────────┘（允许回退到 pending）」*（\`todo.py:43-44\`）。实现上不需要任何特殊分支：三态校验集合里本来就有 \`"pending"\`（\`todo.py:60\`），"把已完成项标回 pending"和"把待办标成 in_progress"是同一个赋值。禁止回退等于禁止模型在发现"前面判断错了"之后纠错——状态机宁可提供回退通道，也不假装模型不会错。
- **工厂函数捕获 manager，让状态跨轮持续**：\`make_todo_write_handler\` 的 docstring——*「manager 由调用方持有，让 todo 状态跨多轮 loop 持续」*（\`todo.py:115\`）。handler 是闭包，捕获的是传入的 manager 实例；如果每次调用都 new 一个 \`TodoManager\`，todo 列表就只活在一次工具调用里，计划一眨眼就没了。manager 由 loop 的宿主持有，同一份计划才能在多轮循环里延续——"显式化"的前提是"计划活得比单次调用久"。

## 本章小结

- TodoWrite 不是任务管理器，是"让模型把规划显式化"的软约束：列表始终可见，但模型自由选择下一个做哪项，代码里根本没有顺序检查。
- 状态机 pending → in_progress → completed 由 \`update()\` 里一行赋值实现，校验只管状态合法、不管顺序；允许回退是给模型留的纠错通道。
- 每次 \`todo_write\` 的 add/update 都把 \`manager.summary()\` 拼进返回内容，进度概览随工具结果回到上下文——模型每一轮都"看见"自己做到哪、还剩什么。
- \`make_todo_write_spec\` / \`make_todo_write_handler\` 是两个工厂：spec 声明"有什么工具、怎么调"，handler 闭包捕获 manager，让计划跨多轮 loop 持续。
- 这一处是"把计划显式化、把进度喂回模型"的事——后面 Day 13 的 Workflow 编排只是把这种"计划 + 反馈"组织成更结构化的流程，**核心没变复杂**。

## 一句话边界

- TodoWrite 是软约束（列表可见但不强制顺序），不是硬约束。
- 状态机 pending -> in_progress -> completed，允许回退。
- 同时最好只有一个 in_progress，一次专注一件事。
- 每步把进度喂回模型，否则它忘了做到哪了。
- 简单任务不用 todo，多步骤易漏的任务才用。

## 读完应该能用自己的话回答

1. Agent 跑着跑着忘目标或草草收尾，根因是什么？TodoWrite 怎么解决？
2. TodoWrite 是软约束还是硬约束？为什么不用硬约束？
3. todo 的状态机是怎样的？为什么允许回退？
4. 为什么每步要把进度喂回模型？
5. 什么任务适合用 todo，什么任务不适合？

## 想深入

Plan-Execute 范式的适用场景、WIP 限制的权衡等，见八股·02 核心框架。

## 交给 AI 的问题

\`\`\`text
我正在学 TodoWrite。请解释：1) Agent 为什么会忘了目标或草草收尾，TodoWrite 怎么解决；2) 它是软约束还是硬约束、为什么；3) todo 的状态机怎么转；4) 为什么每步要把进度喂回模型。用"读文件并统计行数"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. 软约束 vs 硬约束**

TodoWrite 在 Agent 中的作用，下列哪种描述符合其设计意图？

A. 作为硬约束强制按序执行，第 2 步没完成不许做第 3 步
B. 作为软约束，todo 列表始终可见，模型可自由选下一个 in_progress 项
C. 作为任务调度器，由它而非模型决定下一步执行哪个工具
D. 作为知识库，把"如何思考"的决策树存进去供模型查阅

**Q2. 状态机**

TodoManager 的状态机为 pending → in_progress → completed，关于状态回退的说法哪个成立？

A. 不允许任何回退，completed 是终态
B. 只允许 in_progress → pending，不允许 completed → pending
C. 回退会破坏进度统计，应禁止
D. 允许 completed → pending，因为模型可能发现之前的判断错了需要重来

**Q3. WIP=1**

"WIP=1"（同时只做一件事）对 Agent 任务完成率的影响，符合实验观察的是？

A. WIP=1 的 Agent 完成率比"想到哪做到哪"高约 37%
B. WIP=1 会降低完成率，因为限制了并行
C. WIP=1 与完成率无关，只影响响应速度
D. WIP 越大完成率越高，因为模型能同时推进多步

**Q4. 知识与任务分离**

关于"知识系统"与"任务系统"的分离，下列说法成立的是？

A. 知识系统存"做什么"，任务系统存"如何思考"
B. TodoWrite 属于知识系统，因为它记录了模型的思考过程
C. 知识系统存"如何思考"（如 SKILL.md 决策树），任务系统存"做什么"（执行步骤），TodoWrite 属于后者
D. 两者应合并为一个系统，减少维护成本

### 开放题（1 道）

**Q5. 计划执行分离落地**：你的 Agent 用 TodoWrite 列了 5 步任务，跑下来发现三个问题：(1) 模型经常跳过中间步骤直接把后面的项标成 completed；(2) 跑到第 3 步就忘了最初的目标，开始做无关的事；(3) todo 项写得像"完成任务""优化代码"这种，模型按自己的理解乱做。

1. 这三个现象分别违反了 TodoWrite 的哪条设计原则或踩了哪个误区？
2. 你会怎么改 system prompt 和 todo_write 的使用方式来纠正这三个问题？
3. 为什么不能直接把 TodoWrite 改成硬约束（强制按序、不许跳步）来解决问题 (1)？

≥150 字，纯思考作答（不依赖任何代码文件）：逐个回答上面三个问题；再为你的纠正方案设计一个验证方法，说明"改对了"应观察到的预期现象与判断标准。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

**Q1. 答案：B**

TodoWrite 是软约束：模型可以自由选下一个 in_progress 项，但 todo 列表始终可见，模型每步都能看见做到哪了、还剩什么。它不是任务管理器，是让模型把"接下来做什么"显式写进上下文的强制约束。

- A 错：硬约束强制按序会失去 ReAct 灵活性——模型发现第 1 步结果让第 3 步更好做却不能跳。
- C 错：TodoWrite 不是调度器，不决定执行哪个工具，只把计划显式化让模型看见进度。
- D 错：TodoWrite 属于任务系统（存"做什么"），不是知识系统（存"如何思考"的 SKILL.md 决策树）。

**Q2. 答案：D**

状态机允许回退（completed → pending），因为模型可能发现之前的判断错了需要重来。禁止回退会让模型在发现错误时无法纠正。

- A 错：把 completed 当终态、禁止回退，模型发现前面判断错了无法纠正。
- B 错：只允许 in_progress → pending 不足以覆盖"已完成项需要推翻重来"的场景。
- C 错：回退正是为了纠错，进度统计应反映真实状态而非靠禁止回退维持数字。

**Q3. 答案：A**

learn-harness-engineering lecture-07 的实验：同时只做一件事（WIP=1）的 Agent，任务完成率比"想到哪做到哪"高约 37%。Agent 天生爱"多做一点"，注意力是有限资源，写得越多反而完成得越少。TodoWrite 通过让模型一次只标一个 in_progress 间接实现 WIP=1。

- B 错：实验观察相反，限制 WIP 反而提升完成率。
- C 错：WIP=1 与完成率强相关，不是无关。
- D 错：WIP 越大完成率越低，注意力分散反而完成得少。

**Q4. 答案：C**

知识系统存"如何思考"（如 SKILL.md 决策树），任务系统存"做什么"（执行工作流）。TodoWrite 属于任务系统，记录的是"要执行的步骤"，不是"如何思考"。

- A 错：说反了——知识系统存"如何思考"，任务系统存"做什么"。
- B 错：TodoWrite 属于任务系统（记录"要执行的步骤"），不是知识系统。
- D 错：合并会让"如何思考"与"做什么"耦合，职责不清、维护困难。

### 开放题 Q5 参考要点（rubric）

**0 分**：只笼统说"模型不老实""todo 没用"，给不出对应原则或具体改法。

**1 分**：能识别至少两个现象对应的误区——(1) 跳步标 completed 违反 WIP=1 / 一次只一个 in_progress；(2) 忘了目标是因为没把 summary 喂回模型；(3) todo 太抽象不具指导性；并提出至少一条具体改法。

**2 分**：完整覆盖三点——(1) 三现象分别对应：跳步违反 WIP=1 软约束、忘目标是因为不把 manager.summary() 每步喂回模型、抽象项踩了"todo 内容太抽象"误区应具体到"读 loop.py 并统计行数"这种可验证步骤；(2) 改法：system prompt 约束"复杂任务先 todo_write 列 5 步、每步具体可验证、一次只标一个 in_progress、每步循环后把 summary 拼回 messages"；(3) 不能改成硬约束——硬约束强制按序会失去 ReAct 灵活性，跳步问题的根因是 WIP 没控住和 summary 没反馈，应靠软约束 + 进度可见解决，而非锁死顺序。

关键判断：跳步的解法是 WIP=1 软约束 + summary 反馈，不是改成硬约束；抽象项要具体到可验证动作。
`,Ef=`---
title: Day 11 Memory 三层记忆
tags:
  - week2/day11
  - concept
  - code
  - exercise
---

# Day 11：Memory 三层记忆

> 阅读约 40 分钟 ｜ 前置：[[day05-RAG基础]]、[[day08-从零写ReAct-Loop]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/memory.py\`（完整代码已嵌入下方代码走读；接入 loop 的调用点在 \`agent_app/workflow.py\` 的 \`make_memory_recall_node\`，见文末走读）

## 本篇解决一个问题

模型本身无状态，每次调用从零开始。"记得之前说过什么"靠把历史放回上下文。但上下文窗口有限，全塞进去既贵又装不下。怎么让 Agent 跨会话记住该记的东西？

答案是分层记忆：不同类型的记忆用不同的存取方式，而不是把所有对话塞进一个地方。今天要看清三层记忆各是什么、怎么存怎么取、什么该记什么不该记。

**一句话主旨**：分层记忆 = 该精确查的精确查、该语义查的语义查、写入必须显式审查。今天的代码走读就按"三层结构 → 存取函数 → 管理入口"展开。

## 一个例子

用户两次对话：

\`\`\`text
会话 1：用户说"我最近关心 cpu_usage 这个指标"
会话 2：用户问"帮我看看现在有什么异常"

没有长期记忆：会话 2 不知道用户关心什么，只能泛泛回答
有长期记忆：会话 1 把"用户关心 cpu_usage"存进 KV，
           会话 2 召回这条，知道该重点看 cpu_usage
\`\`\`

差别在于：长期记忆让 Agent 跨会话延续"用户是谁、关心什么"。后面走读时请带着这个例子——"存进 KV"和"召回这条"在代码里各是哪个函数。

## 这个概念是什么

**记忆（Memory）** 是 Agent 跨调用持久化信息的机制。和上下文不同：上下文是单次调用拼进 messages 的内容，记忆是跨调用持久化的信息。

三层记忆各司其职：

| 层 | 存储 | 适合 | 不适合 |
|---|---|---|---|
| 短期 messages | loop 的 messages 列表 | 当前会话上下文 | 跨会话 |
| 长期 KV | SQLite 等结构化库 | 结构化键值（用户偏好、上次指标） | 大段文本语义匹配 |
| 长期语义 | 向量库 | 历史对话、文档的语义检索 | 精确键查询 |

关键判断：简单 KV 查询别走向量库--向量库的精确匹配能力远不如结构化库，是过度工程。该精确查的精确查，该语义查的语义查。

接下来直接看代码——\`memory.py\` 把这三层各钉成一个类，外加一个把两层组织起来的管理入口 \`ThreeLayerMemory\`。

## 代码走读：三层记忆是怎么存、怎么取、怎么忘的

本篇走读 \`agent_app/memory.py\`（约 277 行），把三层记忆落成了四类一协议。代码已完整嵌入下文——每一段引用都标注了 \`文件:行号\`，可以就地核对。

代码里的类与概念层的对应关系：\`MemoryStore\`（协议）约定 \`put\`/\`get\`/\`search\` 三个操作，三层共用；\`KVMemoryStore\` 是长期 KV（SQLite 精确查）；\`ChromaMemoryStore\` 是长期语义（向量查）；\`MockChromaMemoryStore\` 是语义层测试替身（不依赖 chromadb）；\`ThreeLayerMemory\` 是记忆管理入口（聚合两层，显式写入 + 双路召回）。

> 注意：短期 messages 层**不在这里**——模块 docstring 写明了，它在 "在 loop 的 messages 列表里，不在此模块"。memory.py 只管长期那两层，加上把它们组织起来的入口。

### 开卷：模块 docstring 先定"纠偏"

\`agent_app/memory.py:1-13\`

\`\`\`python
"""Day 11: Memory —— 短期 + 长期 + 检索三层记忆。

纠偏：记忆不是"存聊天记录"，是写入/巩固/检索/更新/遗忘/审计的工程系统。
关键判断：简单 KV 查询别走向量库（浪费且不准）；写入需审查（防记忆投毒）。

三层记忆：
1. 短期 messages：当前会话的对话历史（在 loop 的 messages 列表里，不在此模块）
2. 长期 KV：SQLite 持久化，结构化键值（如"用户偏好""上次关心的指标"）
3. 长期语义：Chroma 向量库，语义检索（如"类似的历史对话""相关 SOP"）

召回时机：user msg → 召回 → 拼进 system
写入策略：显式指令写入（自动总结属进阶，Day 12 compaction 涉及）
"""
\`\`\`

这段 docstring 不是装饰，它把全文件的两个"纠偏"钉死了：

- **第 3 行**：记忆是"写入/巩固/检索/更新/遗忘/审计的工程系统"——不是存聊天记录。这就是今天代码走读的路线图：写入（\`put\`/\`remember\`）、检索（\`get\`/\`search\`/\`recall\`）、更新（REPLACE/upsert）、遗忘（\`delete\`）。
- **第 4 行**：两个关键判断——简单 KV 别走向量库、写入需审查。后面每个类都在为这两条服务。
- **第 11-12 行**：召回时机是 user msg 来了先召回再拼 system；写入策略是显式指令写入。这两个约定贯穿全文。

### 公共器件：\`MemoryHit\` 与 \`MemoryStore\` 协议

\`agent_app/memory.py:23-39\`

\`\`\`python
@dataclass(slots=True)
class MemoryHit:
    """检索命中项。"""

    key: str
    value: Any
    score: float


class MemoryStore(Protocol):
    """记忆存储协议（制作提示词第五节命名一致）。"""

    def put(self, namespace: str, key: str, value: Any) -> None: ...

    def get(self, namespace: str, key: str) -> Any | None: ...

    def search(self, namespace: str, query: str, *, top_k: int = 3) -> list[MemoryHit]: ...
\`\`\`

- **\`MemoryHit\`（第 23-29 行）**：一次检索命中的统一形状——\`key\`、\`value\`、\`score\`。注意 \`@dataclass(slots=True)\`：\`slots\` 让 dataclass 不生成 \`__dict__\`，省内存，这类被大量创建的小对象正合适。
- **\`MemoryStore\` 是 \`Protocol\`（第 32-39 行）**：它不继承、不实现，只是**声明**一个存储要长什么样——有 \`put\`、\`get\`、\`search\` 三个方法就行。Python 的结构化子类型（duck typing）意味着：任何类只要实现这三个方法就能当记忆存储用——为后面的注入 mock 埋下伏笔。

> 为什么要有 \`namespace\`？一个 Agent 可能同时存用户偏好、任务状态、SOP 文档……用 \`namespace\` 隔开不同用途的记忆，避免 key 撞车，检索时还能按命名空间过滤（和 Day 5 的 RAG 命名空间同源）。

### 第二层：\`KVMemoryStore\` —— SQLite 结构化键值

\`agent_app/memory.py:42-66\`

\`\`\`python
class KVMemoryStore:
    """第二层：SQLite 持久化 KV 记忆。

    适合：用户偏好、上次关心的指标、会话配置等结构化信息。
    不适合：大段文本的语义检索（那是第三层 ChromaStore 的事）。

    线程安全：每个方法用锁保护连接。
    """

    def __init__(self, db_path: str | Path = ":memory:") -> None:
        self._db_path = str(db_path)
        self._lock = threading.Lock()
        self._conn = sqlite3.connect(self._db_path, check_same_thread=False)
        self._conn.execute(
            """
            CREATE TABLE IF NOT EXISTS kv_memory (
                namespace TEXT NOT NULL,
                key TEXT NOT NULL,
                value TEXT NOT NULL,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                PRIMARY KEY (namespace, key)
            )
            """
        )
        self._conn.commit()
\`\`\`

- **第 51 行 \`db_path: str | Path = ":memory:"\`**：默认是内存库——**会话结束数据就丢**。要跨会话，就传一个文件路径（如 \`"agent.db"\`），这就是 Q4 的考点：默认参数是 \`:memory:\`，跨会话必须显式传文件。
- **第 52-54 行**：\`threading.Lock()\` 保护连接，\`check_same_thread=False\` 允许跨线程用同一个连接——因为后面 Agent 可能多线程访问记忆。每个读写方法都拿锁，见第 72、82、100、113 行的 \`with self._lock:\`。
- **第 55-65 行建表**：\`PRIMARY KEY (namespace, key)\`——同一个 \`namespace\` 下 key 唯一，天然防重；\`updated_at\` 留了时间戳字段（今天代码里没写更新逻辑，字段先占位）；\`IF NOT EXISTS\` 让"打开已有库"变成幂等操作——第二次打开不会报错。

#### 写入：\`put\` 用 \`INSERT OR REPLACE\`，写即是更新

\`agent_app/memory.py:68-77\`

\`\`\`python
    def put(self, namespace: str, key: str, value: Any) -> None:
        import json

        serialized = json.dumps(value, ensure_ascii=False)
        with self._lock:
            self._conn.execute(
                "INSERT OR REPLACE INTO kv_memory (namespace, key, value) VALUES (?, ?, ?)",
                (namespace, key, serialized),
            )
            self._conn.commit()
\`\`\`

- **第 69-71 行**：\`import json\` 惰性导入（KV 类平时不依赖 json），\`ensure_ascii=False\` 让中文直接存原文而不是 \`\\uXXXX\` 转义，SQLite 里肉眼可读、调试友好。
- **第 74 行 \`INSERT OR REPLACE\`**：这就是"更新"的实现——**同一个 (namespace, key) 再 put 一次就是覆盖**。不需要单独的 \`update\` 方法，"写即更新"。
- **第 72-77 行**：全程持锁、每次 \`commit\`——单条 KV 的写操作，粒度小，代价可接受。

#### 检索：\`get\` 精确查，\`search\` 只做子串匹配

\`agent_app/memory.py:79-93\`

\`\`\`python
    def get(self, namespace: str, key: str) -> Any | None:
        import json

        with self._lock:
            cur = self._conn.execute(
                "SELECT value FROM kv_memory WHERE namespace=? AND key=?",
                (namespace, key),
            )
            row = cur.fetchone()
        if row is None:
            return None
        try:
            return json.loads(row[0])
        except json.JSONDecodeError:
            return row[0]
\`\`\`

- **第 83-85 行**：\`WHERE namespace=? AND key=?\` 精确命中主键——"查上次 cpu_usage 的指标"就该走这条路径，一条 SQL、毫秒级、零歧义。
- **第 88-93 行**：反序列化兜底——\`json.loads\` 失败就返回原文。为什么会有非 JSON 数据？因为旧版本或外部写入可能直接存了纯文本；**读的时候容错，不让一次脏数据把读取打崩**。

\`agent_app/memory.py:95-110\`

\`\`\`python
    def search(self, namespace: str, query: str, *, top_k: int = 3) -> list[MemoryHit]:
        """KV 存储的 search：只做子串匹配，不做语义检索。

        纠偏：简单 KV 查询别走向量库。语义检索用 ChromaMemoryStore。
        """
        with self._lock:
            cur = self._conn.execute(
                "SELECT key, value FROM kv_memory WHERE namespace=? AND "
                "(key LIKE ? OR value LIKE ?) LIMIT ?",
                (namespace, f"%{query}%", f"%{query}%", top_k),
            )
            rows = cur.fetchall()
        return [
            MemoryHit(key=row[0], value=row[1], score=1.0)
            for row in rows
        ]
\`\`\`

- **第 96-98 行 docstring 是纠偏的第二次出现**："只做子串匹配，不做语义检索……语义检索用 ChromaMemoryStore。"——KV 层的 \`search\` 老老实实用 SQL，不假装会"理解"。
- **第 101-104 行**：\`LIKE '%query%'\` 在 key **和** value 两个字段上做子串匹配，\`LIMIT top_k\` 限条数。这是最简单的一档"召回"：用户消息里出现 \`cpu_usage\` 字样，就能把"用户关心 cpu_usage"这条捞出来。
- **第 107-109 行**：命中统一包成 \`MemoryHit\`，\`score\` 固定 1.0——子串匹配没有相似度概念，命中就是命中。

#### 遗忘：\`delete\` 删键值，\`close\` 收连接

\`agent_app/memory.py:112-123\`

\`\`\`python
    def delete(self, namespace: str, key: str) -> bool:
        with self._lock:
            cur = self._conn.execute(
                "DELETE FROM kv_memory WHERE namespace=? AND key=?",
                (namespace, key),
            )
            self._conn.commit()
            return cur.rowcount > 0

    def close(self) -> None:
        with self._lock:
            self._conn.close()
\`\`\`

- **第 119 行 \`return cur.rowcount > 0\`**：SQLite 的 \`rowcount\` 是被删的行数——返回布尔值让调用方能判断"到底删没删到"（删不存在的 key 不会报错，但返回 \`False\`）。
- **第 121-123 行 \`close()\`**：程序收尾时关连接。注意今天代码里 \`close\` 只定义、没有被调用——**资源回收的触发点留给了调用方**，这是"库只提供原语、不管生命周期"的典型设计。

> 诚实标注：第三层 \`ChromaMemoryStore\` 在本文件里**没有提供 \`delete\` 方法**（见 memory.py:126-200，只有 put/get/search）。"遗忘"这条链路目前只覆盖了 KV 层；语义层的删除需要时在 Chroma 的 collection 上调用 \`delete(ids=...)\` 补上，本文件未实现。

### 第三层：\`ChromaMemoryStore\` —— 向量语义检索

\`agent_app/memory.py:126-160\`

\`\`\`python
class ChromaMemoryStore:
    """第三层：Chroma 语义检索记忆。

    适合：历史对话、SOP 文档、复盘记录等需要语义匹配的大段文本。
    首次使用需 embedding 模型；离线测试用 MockChromaMemoryStore 替代。

    延迟初始化 chromadb：没装/没网络时不影响其他层。
    """

    def __init__(
        self,
        *,
        collection_name: str = "agent_memory",
        persist_dir: str | Path | None = None,
        embedding_fn: Any | None = None,
    ) -> None:
        self._collection_name = collection_name
        self._persist_dir = str(persist_dir) if persist_dir else None
        self._embedding_fn = embedding_fn
        self._client = None
        self._collection = None

    def _ensure_collection(self) -> None:
        if self._collection is not None:
            return
        import chromadb

        if self._persist_dir:
            self._client = chromadb.PersistentClient(path=self._persist_dir)
        else:
            self._client = chromadb.Client()
        self._collection = self._client.get_or_create_collection(
            name=self._collection_name,
            embedding_function=self._embedding_fn,
        )
\`\`\`

- **第 127-133 行 docstring 的三条信息**：适合什么（大段文本）、需要什么（embedding 模型）、以及一条关键工程决策——**延迟初始化**（第 132 行："没装/没网络时不影响其他层"）。
- **第 135-146 行 \`__init__\`**：**只存配置，不连库**——\`self._client = None\`、\`self._collection = None\`，真正的连接发生在 \`_ensure_collection\`。所以哪怕 chromadb 没装，创建对象也不会报错。
- **第 148-160 行 \`_ensure_collection\`**：\`import chromadb\` 放在方法内部（第 151 行）而不是文件顶部——惰性到最后一刻。第 153-156 行：\`persist_dir\` 有值用 \`PersistentClient\`（落盘，跨会话），没有用内存 \`Client\`（重启即丢）——和 KV 层的 \`:memory:\` 与文件路径同一个思路；第 157-159 行 \`get_or_create_collection\` 重复打开不报错，并挂上外部传入的 \`embedding_fn\`。

> ### 岔路：embedding 是什么？（可跳读，不影响主线）
> 向量库存的不是原文，是文本被 embedding 模型转成的向量（一串数字）。语义检索 = 把查询也转成向量，找"方向最接近"的几条。所以它擅长"相关但字面不同"（"服务不稳定"能匹配到"connection timeout"），但查"精确等于某个 key"反而不如 SQLite。这也是"简单 KV 别走向量库"的根源——**两种检索解决的是不同问题，不是同一问题的两个档位**。

#### 写入与精确读：\`put\` 用 upsert，\`get\` 按 id

\`agent_app/memory.py:162-177\`

\`\`\`python
    def put(self, namespace: str, key: str, value: Any) -> None:
        self._ensure_collection()
        assert self._collection is not None
        self._collection.upsert(
            ids=[f"{namespace}::{key}"],
            documents=[str(value)],
            metadatas=[{"namespace": namespace, "key": key}],
        )

    def get(self, namespace: str, key: str) -> Any | None:
        self._ensure_collection()
        assert self._collection is not None
        res = self._collection.get(ids=[f"{namespace}::{key}"])
        if not res["documents"]:
            return None
        return res["documents"][0]
\`\`\`

- **第 165-169 行 \`upsert\`**：和 KV 层的 \`INSERT OR REPLACE\` 对应——**同一个 id 再写就是覆盖**。id 是 \`f"{namespace}::{key}"\`（第 166 行），用 \`::\` 拼接命名空间和 key，保证 id 全局唯一；原文文本进 \`documents\`，\`namespace\` 和 \`key\` 作为 \`metadatas\` 一起存，检索结果里能原样取回。
- **第 162-164 行**：每个方法先 \`_ensure_collection()\` 再 \`assert self._collection is not None\`——\`assert\` 在这里是给类型检查器看的"我已经初始化过了"，不是防御逻辑。
- **第 171-177 行 \`get\`**：按 id 精确取；查不到返回 \`None\`，不抛异常——和 KV 层 \`get\` 的失败语义一致。

#### 语义检索：\`search\` 向量查询，distance 转 score

\`agent_app/memory.py:179-200\`

\`\`\`python
    def search(self, namespace: str, query: str, *, top_k: int = 3) -> list[MemoryHit]:
        self._ensure_collection()
        assert self._collection is not None
        res = self._collection.query(
            query_texts=[query],
            n_results=top_k,
            where={"namespace": namespace},
        )
        hits: list[MemoryHit] = []
        docs = res.get("documents", [[]])
        dists = res.get("distances", [[]])
        metas = res.get("metadatas", [[]])
        if docs and docs[0]:
            for i, doc in enumerate(docs[0]):
                dist = dists[0][i] if dists and dists[0] else 0.0
                meta = metas[0][i] if metas and metas[0] else {}
                hits.append(MemoryHit(
                    key=meta.get("key", ""),
                    value=doc,
                    score=1.0 - dist,  # chroma distance 越小越相似，转成 score
                ))
        return hits
\`\`\`

- **第 182-186 行 \`query\`**：\`query_texts\` 传查询文本（Chroma 内部转向量），\`n_results=top_k\` 限条数，\`where\` 限定命名空间——与 KV 层的 \`WHERE namespace=?\` 对应，两层召回都带命名空间边界。
- **第 187-190 行三个 \`res.get("...", [[]])\`**：对返回结构逐层兜底——字段可能缺失（版本差异或空结果），默认空列表而不是直接 \`KeyError\`。**读结果的代码要比写结果的代码更宽容**。
- **第 191-199 行组装 hits**：distance 是"越小越相似"，而 score 语义是"越大越相关"，于是第 198 行注释写得很直白：\`# chroma distance 越小越相似，转成 score\`，\`score = 1.0 - dist\`。**两层库返回的 score 方向被统一**，上层 \`recall\` 不用知道每个库的内部语义。

### 岔路：\`MockChromaMemoryStore\` —— 没有 embedding 模型时怎么办（可跳读，不影响主线）

\`agent_app/memory.py:203-217\`（折叠：\`search\` 见 218-225）

\`\`\`python
class MockChromaMemoryStore:
    """离线测试用 mock：不依赖 chromadb / embedding。

    search 做子串匹配，score 固定 1.0，仅供测试通过。
    """

    def __init__(self) -> None:
        self._store: dict[str, dict[str, str]] = {}

    def put(self, namespace: str, key: str, value: Any) -> None:
        self._store.setdefault(namespace, {})[key] = str(value)

    def get(self, namespace: str, key: str) -> Any | None:
        return self._store.get(namespace, {}).get(key)

    …（折叠：search 与 KV 层同样做子串匹配后返回 hits[:top_k]，见 memory.py:218-225）
\`\`\`

- **第 203-207 行**：这是一个"假 Chroma"——纯内存 dict，不依赖 \`chromadb\` 和 embedding 模型，\`search\` 用 \`in\` 做子串匹配、\`score\` 固定 1.0。docstring 已经自嘲：*"仅供测试通过"*。
- **它的价值**：让整套记忆系统**零外部依赖即可工作**——没装 chromadb、没配 embedding，\`ThreeLayerMemory\` 也能正常存取与召回（默认语义层就是它，见下节第 241 行）；真上线换成 \`ChromaMemoryStore\`，**接口不变，上层代码一行不用改**——这就是 \`MemoryStore\` 协议的意义。

### 管理入口：\`ThreeLayerMemory\` —— 显式 \`remember\`、双路 \`recall\`

\`agent_app/memory.py:228-267\`

\`\`\`python
class ThreeLayerMemory:
    """三层记忆聚合：KV（结构化）+ Chroma（语义）+ messages（短期，由 loop 持有）。

    召回时机：user msg 到来时，先 recall 拼进 system。
    写入策略：显式指令写入（防记忆投毒）。
    """

    def __init__(
        self,
        kv_store: MemoryStore | None = None,
        semantic_store: MemoryStore | None = None,
    ) -> None:
        self.kv = kv_store or KVMemoryStore()
        self.semantic = semantic_store or MockChromaMemoryStore()

    def remember(self, namespace: str, key: str, value: Any, *, layer: str = "kv") -> None:
        """显式写入记忆。

        layer: "kv" 写入结构化 KV，"semantic" 写入语义库。
        纠偏：不做自动总结写入（那是 Day 12 compaction 的事），防记忆投毒。
        """
        if layer == "kv":
            self.kv.put(namespace, key, value)
        elif layer == "semantic":
            self.semantic.put(namespace, key, value)
        else:
            raise ValueError(f"unknown layer: {layer}")

    def recall(self, namespace: str, query: str, *, top_k: int = 3) -> dict[str, list[MemoryHit]]:
        """召回：同时查 KV（子串）和语义库（向量）。

        返回 {"kv": [...], "semantic": [...]}，由调用方拼进 system prompt。
        """
        return {
            "kv": self.kv.search(namespace, query, top_k=top_k),
            "semantic": self.semantic.search(namespace, query, top_k=top_k),
        }

    def get_kv(self, namespace: str, key: str) -> Any | None:
        return self.kv.get(namespace, key)
\`\`\`

（折叠：\`__all__\` 导出清单见 memory.py:270-277，只列这六个公开名字，不再赘述。）

- **第 229-233 行 docstring**：把模块顶层两条约定抄到了类上——召回时机（user msg → recall → 拼 system）、写入策略（显式指令写入）。短期 messages 注明"由 loop 持有"，所以这个类**只聚合长期两层**。
- **第 235-241 行 \`__init__\`**：两个存储都可注入——\`kv_store\` / \`semantic_store\` 传什么用什么，不传用默认（\`KVMemoryStore()\` 内存库 + \`MockChromaMemoryStore()\`）。**注入点就是测试点和替换点**：测试塞 mock，上生产塞真 Chroma。
- **第 243-254 行 \`remember\`**：全文件唯一的写入口。\`layer\` 参数路由到 KV 或语义库；不认识的分层直接 \`raise ValueError\`——**显式报错而不是悄悄忽略**。docstring 第 247 行是全文第三次纠偏：*"纠偏：不做自动总结写入（那是 Day 12 compaction 的事），防记忆投毒。"*——自动写入 = 让模型决定记什么，幻觉一旦进库就随每次召回污染上下文，所以"什么时候写、写什么"必须留在显式指令手里。
- **第 256-264 行 \`recall\`**：双路召回——KV 子串 + 语义向量**同时查**，返回 \`{"kv": [...], "semantic": [...]}\` 两路结果。docstring 第 259 行写明了分工：*"由调用方拼进 system prompt"*——**recall 只负责捞，不负责拼**：怎么截断、怎么排版、谁优先，是应用层策略，记忆库不该替它决定。
- **第 266-267 行 \`get_kv\`**：精确查的快捷通道——\`recall\` 按"相关性"捞，\`get_kv\` 按"确定的 key"取，对应开头例子里"上次 cpu_usage 指标"这种**必须查准**的场景。

### 与 loop 的接入点：\`workflow.py\` 的 \`make_memory_recall_node\`

记忆库本身不拼 prompt，也不自己跑循环。那它怎么被 Agent 用上？真正的接入点在 Day 13 的 \`workflow.py\`（第 22 行 \`from agent_app.memory import ThreeLayerMemory\`），它把召回做成了一个节点：

\`agent_app/workflow.py:80-97\`

\`\`\`python
def make_memory_recall_node(
    memory: ThreeLayerMemory,
    namespace: str = "default",
) -> Callable[[WorkflowState], WorkflowState]:
    """记忆召回节点：复用 Day 11 三层记忆，拼进上下文。"""

    def node(state: WorkflowState) -> WorkflowState:
        hits = memory.recall(namespace, state.user_input, top_k=3)
        # 记录命中数（实际拼进 prompt 由调用方处理）
        state.memory_hits = [
            {"layer": layer, "key": h.key, "value": str(h.value)[:200], "score": h.score}
            for layer, hit_list in hits.items()
            for h in hit_list
        ]
        state.steps.append({"node": "memory_recall", "hits": len(state.memory_hits)})
        return state

    return node
\`\`\`

- **第 87 行 \`memory.recall(namespace, state.user_input, top_k=3)\`**：用户消息一进来就召回——模块 docstring 第 11 行"user msg → 召回 → 拼进 system"的落地。
- **第 89-93 行**：把两路 hits 拍平成 \`state.memory_hits\` 列表，每条 \`value\` 截到 200 字符（第 90 行 \`str(h.value)[:200]\`）——**截断在这里发生**，防几条记忆撑爆上下文。
- **第 88 行注释是诚实的分工声明**：*"记录命中数（实际拼进 prompt 由调用方处理）"*——workflow 先记录、由下游节点决定怎么拼，与模块 docstring 的约定一致。

> 诚实标注：Day 8 的 \`loop.py\` 本身没有接记忆；记忆的接入点在 Day 13 的 workflow 节点。你的练习目标是看懂"库提供 recall、调用方负责拼"这条边界，把它接进任何循环都是同一套动作。

## 为什么这样写

- **显式写入、绝不自动总结**：\`remember\` 的 docstring 第 247 行原话：*"纠偏：不做自动总结写入（那是 Day 12 compaction 的事），防记忆投毒。"*——写入是审查点，不是模型自由发挥的地方：幻觉 → 进记忆库 → 每次召回污染上下文 → 错误自我强化。
- **简单 KV 查询别走向量库**：模块 docstring 第 4 行原话：*"关键判断：简单 KV 查询别走向量库（浪费且不准）"*；\`KVMemoryStore.search\` 的 docstring 第 98 行再钉一次：*"纠偏：简单 KV 查询别走向量库。语义检索用 ChromaMemoryStore。"* 证据在代码里：KV 层是 SQL \`LIKE\` 子串匹配（第 102-104 行），精确、快、零外部依赖；Chroma 层是向量相似度（第 182-186 行），查精确键反而模糊。
- **更新不发明新方法，写即是更新**：KV 层 \`INSERT OR REPLACE\`（第 74 行），Chroma 层 \`upsert\` + id \`f"{namespace}::{key}"\`（第 165-166 行）——同一个键再写就是覆盖（全文件没有 \`update\` 方法）；表结构里 \`updated_at\` 字段（第 61 行）先占位，为审计留位。
- **延迟初始化 chromadb**：\`ChromaMemoryStore\` 的 docstring 第 132 行原话：*"延迟初始化 chromadb：没装/没网络时不影响其他层。"*——\`import chromadb\` 缩在 \`_ensure_collection\` 里（第 151 行），构造对象不连库；配合默认的 \`MockChromaMemoryStore\`（第 241 行），整条链路没有任何外部硬依赖。
- **统一 score 方向**：Chroma \`search\` 第 198 行行内注释：*"# chroma distance 越小越相似，转成 score"*——\`score = 1.0 - dist\`，让两层库对外都呈现"分越高越相关"，上层 \`recall\` 拿到的是同一种语言。

## 本章小结

- 三层记忆各一个类，共同接口只有三个：\`put\` / \`get\` / \`search\`；短期 messages 在 loop 的 messages 列表里，不在这个模块。
- 写入只有显式 \`remember()\`，更新靠 REPLACE / upsert，遗忘只有 KV 层的 \`delete\`（语义层未提供，见原文）——审查是记忆系统的第一原则。
- 召回是 user msg → 双路 \`recall\`（KV 子串 + 语义向量）→ 由调用方截断后拼进 system，\`MemoryHit\` 统一携带 key / value / score。
- 默认配置（SQLite \`:memory:\` + \`MockChromaMemoryStore\`）零外部依赖；要跨会话、要真语义检索时，分别传 \`db_path\` 文件路径和真 Chroma 即可，接口不变。
- 这一处是"记忆存取"的事——Day 13 的 workflow 只是把 \`recall\` 组织成一个节点，后面 Day 12 的 compaction 也只是在管上下文那一侧，**核心没变复杂**。

## 一句话边界

- 记忆 ≠ 上下文：记忆跨调用持久化，上下文是单次调用拼进 messages 的内容。
- 三层各司其职：短期 messages / 长期 KV / 长期语义，别把简单 KV 也走向量库。
- 写入要审查，只接受显式 remember()，防记忆投毒。
- 跨会话要持久化到文件，内存模式重启就丢。
- 召回结果要截断再拼进上下文。

## 读完应该能用自己的话回答

1. 记忆和上下文有什么区别？为什么需要长期记忆？
2. 三层记忆各是什么、各适合存什么？为什么简单 KV 别走向量库？
3. 用户消息来了，记忆是怎么被用上的？
4. 为什么不能自动总结写入记忆？什么该记什么不该记？
5. 怎么实现跨会话记忆？

## 想深入

记忆的分类（情景/语义/程序性）、记忆检索的三因子融合、防投毒与多租户隔离等，见八股·05 记忆系统。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 记忆系统。请解释：1) 记忆和上下文有什么区别；2) 三层记忆各是什么、各存什么；3) 用户消息来了记忆怎么被用上；4) 为什么不能自动总结写入记忆。用"用户两次对话关心不同指标"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. 三层分层**

关于三层记忆的职责划分，下列说法成立的是？

A. 三层都存聊天记录，按时间新旧分层
B. 短期 messages 存跨会话上下文，长期 KV 存当前会话
C. 短期 messages 存当前会话上下文，长期 KV 存结构化键值，长期语义存历史对话/SOP 文档
D. 长期语义层用 SQLite，长期 KV 层用 Chroma

**Q2. 召回时机**

长期记忆的召回应该发生在什么时机？

A. 用户发来消息时，先从长期记忆召回相关项，拼进 system prompt
B. 模型给出最终答案后，再把相关记忆写回
C. 每轮工具调用前，从记忆里召回工具用法
D. 只在会话开始时召回一次，整场会话复用

**Q3. 写入审查防投毒**

ThreeLayerMemory 只接受显式 remember()、不做自动总结写入，主要原因是什么？

A. 自动写入会增加 token 消耗，显式写入更省
B. 自动写入会引入"记忆投毒"——模型把错误信息或幻觉写进记忆库，后续召回污染上下文
C. 自动写入需要额外的摘要模型，成本太高
D. 显式写入比自动写入召回更准

**Q4. 跨会话持久化**

KVMemoryStore 要实现跨会话召回（会话 1 写入、会话 2 读取），关键配置是？

A. 用 SQLite 的 :memory: 模式，速度快
B. 每次会话结束把 KV 导出成 JSON 再导入
C. 给每个会话建独立的 db_path
D. 传 db_path 指向同一个文件路径（如 "agent.db"），而非默认的 :memory:

### 开放题

**Q5. KV vs 向量库适用场景**：你的同事给 Agent 加记忆时，把所有东西都塞进向量库（Chroma）——用户偏好、上次监控指标、历史对话片段、SOP 文档全走向量检索。结果发现查用户偏好和上次指标经常查不准，向量库还慢。

1. 这种做法错在哪里？用三层记忆的视角分析。
2. 用户偏好和上次监控指标应该存哪一层？为什么向量库查它们不准？
3. 如果让你设计，四类数据分别放哪一层？给出理由。
4. 召回时这四类数据怎么拼进 system prompt 才不会撑爆上下文？

≥150 字写出你的分析与分层方案。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

**Q1. 答案：C**

三层各司其职：短期 messages（loop 的 messages 列表）存当前会话上下文；长期 KV（SQLite）存结构化键值如用户偏好、上次指标；长期语义（Chroma）存历史对话、SOP 文档做语义检索。分层依据是存储介质和查询方式，不是时间新旧。

- A 错：三层不是按时间新旧分，而是按存储介质和查询方式分。
- B 错：说反了——短期 messages 存当前会话上下文（不跨会话），长期 KV 才存跨会话的结构化键值。
- D 错：说反了——长期 KV 用 SQLite，长期语义用 Chroma。

**Q2. 答案：A**

召回时机是 user msg → 召回 → 拼 system：用户发来消息时，先从长期记忆召回相关项，拼进 system prompt，模型才有"上下文"知道用户之前关心什么。

- B 错：召回是为了给模型上下文，应在生成前拼进 system；答案后写回是"写入"不是"召回"。
- C 错：工具用法属于知识/工具描述，不是长期记忆的召回职责。
- D 错：只在会话开始召回一次无法覆盖后续每轮用户输入的语义变化。

**Q3. 答案：B**

不做自动总结写入，原因是自动写入会引入"记忆投毒"——模型把错误信息或幻觉写进记忆库，后续召回污染上下文。\`remember()\` 只接受显式调用，由调用方决定什么时候写、写什么。

- A 错：token 消耗不是主因，核心是投毒风险。
- C 错：成本不是核心理由，即使有免费摘要模型，投毒风险依然存在。
- D 错：写入方式影响的是写入内容质量，不直接决定召回准确度。

**Q4. 答案：D**

KVMemoryStore 传 \`db_path="agent.db"\` 持久化到文件：会话 1 写入落盘，会话 2 打开同一文件读取，实现跨会话召回。默认的 \`:memory:\` 是内存库，会话结束即丢。

- A 错：\`:memory:\` 是内存库，会话结束即丢失，无法跨会话。
- B 错：导出 JSON 再导入是手工同步，脆弱且多余——SQLite 文件本身已持久化。
- C 错：每个会话建独立 db_path 会导致会话间数据隔离，反而无法跨会话召回。

### 开放题 Q5 参考要点（rubric）

**0 分**：只说"不该都用向量库"，给不出分层理由，也说不清向量库查 KV 为什么不准。

**1 分**：能指出"简单 KV 查询也走向量库是过度工程"，并说明用户偏好/上次指标应走 KV 层（SQLite 精确键查询），向量库适合语义匹配；能给四类数据中至少两类正确的分层。

**2 分**：完整覆盖四点——(1) 错在把所有数据都走向量库，违反三层分层原则，简单 KV 查询也走向量是过度工程；(2) 用户偏好和上次指标应存长期 KV 层，因为是结构化键值、要精确匹配，向量库做的是语义相似度匹配，查"上次 cpu_usage"这种精确键会查不准；(3) 分层：用户偏好 → KV、上次指标 → KV、历史对话片段 → 长期语义、SOP 文档 → 长期语义；(4) 拼进 system 前每条截断（如每条 200 字），KV 结果按 key 精确拼、语义结果按相关度 top-k 拼，总量设上限避免上下文爆炸。

关键判断：精确键查询走 KV、语义匹配走向量；召回结果必须截断再拼 system。
`,Cf=`---
title: Day 12 Context 压缩
tags:
  - week2/day12
  - concept
  - code
  - exercise
---

# Day 12：上下文压缩（compaction）

> 阅读约 35 分钟 ｜ 前置：[[day11-Memory三层记忆]]、[[day08-从零写ReAct-Loop]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/compact.py\`（完整代码已嵌入下方代码走读，压缩逻辑全部在这一个文件里）

## 本篇解决一个问题

Agent 跑 30 轮后，messages 膨胀到几万 token，要么超窗口报错，要么成本飙升。得压缩。但压太狠会丢系统约束，模型行为漂移。

今天要看清：上下文和记忆不是一回事，压缩上下文有哪几种做法，以及为什么"从最旧的开始丢"是错的。

## 一个例子

Agent 跑了很多轮后：

\`\`\`text
不压缩：messages 越积越多，超过窗口报错，或成本飙升
从最旧的开始丢：把最前面的 system prompt 丢了，模型失去行为约束，开始"自由发挥"
正确压缩：保留 system + 最近几轮 + 把旧消息压成摘要，既省 token 又不丢约束
\`\`\`

差别在于：压缩要分清什么该留（system 约束、最近上下文）、什么可以压（旧消息），不能一刀切从最旧开始丢。

## 这个概念是什么

**上下文压缩（compaction）** 是上下文太长时，裁剪或摘要旧消息再继续，让 messages 保持在窗口内、成本可控。

先分清两个概念：

| | 上下文 | 记忆 |
|---|---|---|
| 生命周期 | 单次调用 | 跨调用 |
| 存储 | messages 列表 | KV / 向量库 |
| 压缩 | compaction | 遗忘/更新 |

压缩上下文（compaction）和写入记忆（Day 11）是两件事，不要混。压缩是处理当前 messages 列表，不是往记忆库写东西。

先记住三句结论，下面代码走读会逐条兑现：

- **三种策略**：截断（纯本地、零成本、丢细节）→ 摘要（一次 LLM 调用、丢细节）→ 召回（每次检索、相关性不稳），激进程度递增。
- **保 system 是铁律**：先抽 system 再对剩余消息动手，绝不能让"丢最旧"碰到行为约束。
- **触发要靠阈值**：别每轮都压，token 超阈值才动手；摘要失败要降级，不能崩掉 loop。

## 代码走读：跟着一次压缩走完 compact.py

\`compact.py\` 只有 254 行，把"估算 → 抽 system → 裁剪/摘要 → 返回结果"完整写在一个文件里。走读顺序：先看模块开头怎么把设计意图钉死，再依次看触发判断的地基、结果结构、保 system、两种策略、触发时机。每一段引用都标注了 \`文件:行号\`，可以就地核对。

### 模块 docstring：先纠偏，再列策略

\`agent_app/compact.py:1-13\`

\`\`\`python
"""Day 12: Context Engineering 与 compaction。

纠偏：上下文 ≠ 记忆。上下文是每次调模型时拼进 messages 的内容；
记忆是跨调用持久化的信息。压缩上下文不等于删除记忆。

三种压缩策略（激进程度递增）：
1. 截断 truncation：丢弃最旧的 message（必须保留 system + 最近关键状态）
2. 摘要 summarization：让模型把旧 message 压成一段摘要
3. 召回 recall：只保留与当前问题相关的 message（类似 RAG）

触发条件：剩余 token < N% 或工具结果超长。
关键约束：保留 system 约束，避免压丢导致模型行为漂移。
"""
\`\`\`

这个 docstring 本身就是一份设计文档：第一件事是**纠偏**——"上下文 ≠ 记忆"，把最容易混的两个概念先钉死；接着列出三种策略和各自的代价；最后给出两条约束——**触发条件**（token 不够用或工具结果超长才压）和**关键约束**（保留 system，避免行为漂移）。后面所有函数，都是把这几句话逐条翻译成代码。

> 为什么 docstring 要先纠偏？因为压缩最常被误用成"遗忘/写记忆"。作者把这条规则写进模块第一屏，是写给六个月后的自己看：改这个文件前先读到这条红线，就不会把压缩做成删除记忆。

### 触发判断的地基：token 估算

压缩的前提是"知道当前 messages 有多长"。先看怎么估。

\`agent_app/compact.py:22-46\`

\`\`\`python
# 粗略 token 估算：1 个中文字约 2 token，1 个英文单词约 1.3 token
def estimate_tokens(text: str) -> int:
    """粗略 token 估算，用于触发条件判断（不精确，够用）。"""
    if not text:
        return 0
    chinese = sum(1 for c in text if "\\u4e00" <= c <= "\\u9fff")
    other = len(text) - chinese
    return int(chinese * 2 + other * 0.4)


def estimate_messages_tokens(messages: list[dict[str, Any]]) -> int:
    total = 0
    for msg in messages:
        content = msg.get("content", "")
        if isinstance(content, str):
            total += estimate_tokens(content)
        elif isinstance(content, list):
            for block in content:
                if isinstance(block, dict):
                    total += estimate_tokens(str(block.get("text", "")))
        # tool_calls 也算
        if msg.get("tool_calls"):
            for tc in msg["tool_calls"]:
                total += estimate_tokens(tc.get("function", {}).get("arguments", ""))
    return total
\`\`\`

- **为什么不用 tokenizer 精确切分？** 精确切分要引入 tokenizer 依赖，甚至可能联网；而这里只需要回答一个问题——"messages 大概到没到阈值"。docstring 原话是"粗略 token 估算，用于触发条件判断（不精确，够用）"——**为精确引入依赖，不值**。
- \`estimate_tokens\` 的算法是：中文字符（\`\\u4e00\`–\`\\u9fff\` 区间）按 2 token 算，其余字符按 0.4 算。这就是估算的全部，两行。
- \`estimate_messages_tokens\` 遍历每条消息，处理 content 的三种形态：普通字符串、多模态块列表（\`list\` 里取每个 block 的 \`text\`）、以及 \`tool_calls\`。注意第 42 行注释"tool_calls 也算"——工具调用的 \`arguments\` 是一大段 JSON，往往比正文还长，**漏算会导致实际超窗口但估算没超**，压缩永远不触发。

### 压缩结果长什么样：CompactionResult

压缩不是就地改 messages，而是产出一个结构化结果。看这个 dataclass。

\`agent_app/compact.py:49-68\`

\`\`\`python
@dataclass(slots=True)
class CompactionResult:
    """压缩结果。"""

    messages: list[dict[str, Any]]
    original_tokens: int
    compacted_tokens: int
    strategy: str
    dropped_count: int
    summary: str | None = None

    @property
    def saved_tokens(self) -> int:
        return self.original_tokens - self.compacted_tokens

    @property
    def saved_ratio(self) -> float:
        if self.original_tokens == 0:
            return 0.0
        return self.saved_tokens / self.original_tokens
\`\`\`

- 六个字段回答"这次压缩发生了什么"：压缩后的 messages、压前压后的 token 数、用的哪种策略（\`truncate\` / \`summarize\` / \`none\`）、丢了几条、摘要文本（只有摘要策略才有）。
- \`saved_tokens\` / \`saved_ratio\` 是 property，调用方随时能回答"这次压缩省了多少"——**压缩效果和成本一样，要成为可打印、可记录的普通值**，这是 Week 1 账本习惯的延续。
- \`@dataclass(slots=True)\`：slots 省内存。messages 很长时对象数以万计，每个对象省掉一个 \`__dict__\`，不是微优化。

> 为什么压缩要"返回新结果"而不是"就地删消息"？因为调用方可能还想用原始 messages 做别的（比如写日志、对比压前压后）；返回不可变意义上的新列表，调用方决定用不用，主动权在调用方手里。

### 保 system 不丢：先抽出来，再动手

最容易犯的错是"从最旧开始丢，把 system 丢了"。这个模块用一个小函数把 system 隔离出去。

\`agent_app/compact.py:71-87\`

\`\`\`python
def _extract_system(messages: list[dict[str, Any]]) -> tuple[dict[str, Any] | None, list[dict[str, Any]]]:
    """分离 system message（必须保留）。"""
    system = None
    rest = []
    for msg in messages:
        if msg.get("role") == "system" and system is None:
            system = msg
        else:
            rest.append(msg)
    return system, rest


def _extract_recent_tool_pairs(rest: list[dict[str, Any]], keep_last: int = 2) -> list[dict[str, Any]]:
    """保留最近的 tool_call + tool_result 对（避免压断正在进行的工具链）。"""
    if len(rest) <= keep_last * 2:
        return rest
    return rest[-keep_last * 2:]
\`\`\`

- \`_extract_system\` 把第一条 system 抽出来单独放，其余全部进 \`rest\`。\`system is None\` 这个条件保证**只抽第一条**——后面所有策略都是在 \`rest\` 上做裁剪/摘要，system 最后再拼回去，物理上不可能被"丢最旧"逻辑碰到。
- \`_extract_recent_tool_pairs\` 的意图是保留最近的 tool_call + tool_result 对，避免压断正在进行的工具链（注释原话）。诚实说明：**当前 \`compact.py\` 里截断和摘要都直接用切片 \`rest[-keep_recent:]\` 实现了同等效果，这个 helper 暂时没有调用方**，是留作后续接线的；\`__all__\` 也没导出它。

### 策略 1：截断 truncate_messages

先看成本为零、纯本地的策略。

\`agent_app/compact.py:90-129\`

\`\`\`python
def truncate_messages(
    messages: list[dict[str, Any]],
    *,
    keep_recent: int = 6,
    max_tool_result_chars: int = 2000,
) -> CompactionResult:
    """策略 1：截断。

    规则：
    1. 保留 system（必须）
    2. 保留最近 keep_recent 条 message
    3. 对超长 tool_result 就地截断（保留前 max_tool_result_chars）
    4. 中间的 message 全部丢弃

    对应易错点："从最旧 message 开始丢 → 易丢系统约束"——本实现先抽 system 再丢。
    """
    original_tokens = estimate_messages_tokens(messages)
    system, rest = _extract_system(messages)

    # 就地截断超长 tool_result
    truncated_rest = []
    for msg in rest:
        if msg.get("role") == "tool" and isinstance(msg.get("content"), str):
            content = msg["content"]
            if len(content) > max_tool_result_chars:
                msg = {**msg, "content": content[:max_tool_result_chars] + "\\n...[truncated]"}
        truncated_rest.append(msg)

    # 保留最近 keep_recent 条
    kept = truncated_rest[-keep_recent:] if len(truncated_rest) > keep_recent else truncated_rest
    dropped_count = len(truncated_rest) - len(kept)

    result = ([system] if system else []) + kept
    return CompactionResult(
        messages=result,
        original_tokens=original_tokens,
        compacted_tokens=estimate_messages_tokens(result),
        strategy="truncate",
        dropped_count=dropped_count,
    )
\`\`\`

docstring 把四条规则写在函数头顶，实现就是照着翻译：

- **第 106-107 行**：先算原始 token 数、抽 system——规则 1 的第一个动作。
- **第 109-116 行（超长 tool_result 就地截断）**：\`role == "tool"\` 且内容是字符串时，超过 2000 字符就保留前 2000 并追加 \`\\n...[truncated]\` 标记。注意 \`msg = {**msg, ...}\` 是**新建 dict 而不是改原消息**——不污染调用方的原始列表。为什么先处理 tool_result 再保留最近 N 条？因为一条几万字符的工具结果可能比几十条普通消息还占 token，**先按长度砍一刀，再用 keep_recent 控制条数，两层防线**。
- **第 118-120 行**：\`truncated_rest[-keep_recent:]\` 保留最近 6 条，中间的（\`dropped_count\` 条）全部丢弃。这就是"从最旧开始丢"的正确版本——**最旧的部分确实丢了，但 system 早已抽走，丢不到它头上**。
- **第 122-129 行**：\`[system] + kept\` 组装压缩后结构，返回带账本的 \`CompactionResult\`。

> 为什么 \`([system] if system else []) + kept\` 要判空？因为不保证每条 messages 都有 system（测试数据、纯工具链消息都可能是裸列表）。system 有就拼，没有就空列表起头，函数在任何输入下都不崩。

### 策略 2：摘要 summarize_messages

截断丢掉的中间细节，摘要策略尝试用一次 LLM 调用把它们"留个影子"。

\`agent_app/compact.py:132-197\`

\`\`\`python
def summarize_messages(
    messages: list[dict[str, Any]],
    *,
    keep_recent: int = 4,
    model: str | None = None,
    call_model_fn: Callable | None = None,
) -> CompactionResult:
    """策略 2：摘要。

    规则：
    1. 保留 system（必须）
    2. 保留最近 keep_recent 条 message
    3. 中间的 message 让模型压成一段摘要，作为新的 system 补充
    """
    original_tokens = estimate_messages_tokens(messages)
    system, rest = _extract_system(messages)

    if len(rest) <= keep_recent:
        return CompactionResult(
            messages=messages,
            original_tokens=original_tokens,
            compacted_tokens=original_tokens,
            strategy="summarize",
            dropped_count=0,
            summary=None,
        )

    to_summarize = rest[:-keep_recent]
    kept = rest[-keep_recent:]

    # 把要摘要的内容拼成文本
    summary_input = "\\n".join(
        f"[{m.get('role')}] {str(m.get('content', ''))[:500]}"
        for m in to_summarize
    )

    _call = call_model_fn or call_model
    try:
        resp = _call(
            [
                {"role": "system", "content": "你是上下文压缩器。把以下对话历史压成一段不超过 200 字的摘要，保留关键事实、决策和未完成任务。"},
                {"role": "user", "content": summary_input},
            ],
            model=model,
            temperature=0,
            max_tokens=300,
        )
        summary = resp.text
    except Exception as exc:  # noqa: BLE001
        # 摘要失败：降级为截断
        return truncate_messages(messages, keep_recent=keep_recent)

    # 把摘要拼进 system
    summary_msg = {
        "role": "system",
        "content": (system["content"] + "\\n\\n" if system else "") + f"[历史摘要] {summary}",
    }
    result = [summary_msg] + kept
    return CompactionResult(
        messages=result,
        original_tokens=original_tokens,
        compacted_tokens=estimate_messages_tokens(result),
        strategy="summarize",
        dropped_count=len(to_summarize),
        summary=summary,
    )
\`\`\`

逐块看这个函数的四个决策点：

- **第 149-157 行（太短就不摘要）**：\`rest\` 不足 \`keep_recent\`（4 条）时原样返回，\`dropped_count=0\`。为什么？对本来就短的对话烧一次 LLM 调用纯属浪费——**摘要的成本是实打实的，只在有东西可压时才付**。
- **第 159-166 行（摘要桶的构造）**：\`rest[:-keep_recent]\` 是旧消息（进摘要桶），\`rest[-keep_recent:]\` 是最近 4 条（原样保留）。拼给模型时每条消息只取前 500 字符——防止把"要压缩的长文本"原样塞给压缩器，否则摘要调用本身就把窗口占满了。
- **第 168-179 行（调模型）**：摘要用的 system 是"你是上下文压缩器……保留关键事实、决策和未完成任务"，\`temperature=0\`（摘要要稳定复述，不要发散创作）、\`max_tokens=300\`（硬顶，同时是成本上限）——跟 Week 1 学到的"有主见的默认值"一脉相承。
- **第 180-182 行（失败降级）**：整个调用包在 \`try/except\` 里，任何异常（超时、限流、API 不可用）都落到 \`truncate_messages\`——注释原话"摘要失败：降级为截断"。**压缩是 loop 的辅助逻辑，它的失败不能拖垮主流程**。
- **第 184-189 行（压缩后的消息结构）**：摘要拼进 system——\`(system["content"] + "\\n\\n" if system else "") + f"[历史摘要] {summary}"\`，即**新 system = 原行为约束 + 历史摘要**，后面再跟最近 4 条。这就是"压缩后消息结构"：行为约束和压缩出的历史放在同一条 system 里，既省 token，模型又始终看得到约束。

> 为什么摘要要"作为新的 system 补充"而不是塞一条 \`user\` 消息？因为摘要的本质是"已经发生过的事实"，和 system 一样属于每次调用都要在的稳定背景；放 system 里不占对话轮次，也避免模型把摘要当成当前问题去回答。

### 触发时机：compact_if_needed

前面两个是"怎么压"，这里是"要不要压"——用 token 阈值把两者隔开。

\`agent_app/compact.py:200-226\`

\`\`\`python
def compact_if_needed(
    messages: list[dict[str, Any]],
    *,
    token_threshold: int = 6000,
    keep_recent: int = 6,
    strategy: str = "truncate",
    call_model_fn: Callable | None = None,
) -> CompactionResult:
    """触发条件：messages token 超过 threshold 时压缩，否则原样返回。

    strategy: "truncate" 或 "summarize"。
    """
    current_tokens = estimate_messages_tokens(messages)
    if current_tokens <= token_threshold:
        return CompactionResult(
            messages=messages,
            original_tokens=current_tokens,
            compacted_tokens=current_tokens,
            strategy="none",
            dropped_count=0,
        )

    if strategy == "summarize":
        return summarize_messages(
            messages, keep_recent=keep_recent, call_model_fn=call_model_fn
        )
    return truncate_messages(messages, keep_recent=keep_recent)
\`\`\`

- **第 212-220 行（阈值判断）**：先估算，\`<= token_threshold\`（默认 6000）就原样返回，strategy 标 \`"none"\`——这是"别每轮都压缩"的代码形态：**每轮都调这个函数很便宜，但只有超阈值那一轮才会真的动手**。
- **第 222-226 行（策略分派）**：超过阈值后按 \`strategy\` 分派——\`"summarize"\` 走摘要，其余（默认 \`"truncate"\`）走截断。
- **为什么"要不要压"和"怎么压"要拆成两个函数？** 因为它们是两个独立的决策点：阈值调高 = 更省调用、但更贴近窗口边缘；策略选摘要 = 保细节、但每次多一次 LLM 调用。拆开才能分别调、分别测。
- **\`call_model_fn\` 是依赖注入**：把"调模型的函数"作为参数传进来，让摘要逻辑与真实模型解耦——测试时传一个 mock 就能离线验证摘要逻辑，不真花 token。

> ### 岔路：demo 数据怎么造（可跳读，不影响主线）
>
> 文件末尾的 \`build_demo_messages\` 是给 demo 和测试造数据的：
>
> \`agent_app/compact.py:229-243\`
>
> \`\`\`python
> def build_demo_messages(rounds: int = 30) -> list[dict[str, Any]]:
>     """构造 30 轮对话用于 Day 12 demo：触发 2 次压缩。"""
>     messages: list[dict[str, Any]] = [
>         {"role": "system", "content": "你是一个诊断 Agent。请按指标→日志→SOP 顺序分析。"},
>         {"role": "user", "content": "开始诊断。"},
>     ]
>     for i in range(rounds):
>         messages.append({"role": "assistant", "content": f"第 {i+1} 轮分析：检查了指标 cpu_usage={80+i}%，发现持续升高。"})
>         messages.append({"role": "user", "content": f"继续，看看第 {i+1} 轮的日志。"})
>         messages.append({
>             "role": "tool",
>             "tool_call_id": f"tc_{i}",
>             "content": f"日志查询结果（第{i+1}轮）：error: connection timeout in module X, retry {i} times. " * 5,
>         })
>     return messages
> \`\`\`
>
> 每轮塞 3 条消息（assistant 分析 + user 追问 + tool 结果），30 轮下来近 90 条；内容刻意带中文长句和重复的英文日志，让估算 token 快速上涨。docstring 说"触发 2 次压缩"——具体触发几次取决于调用方在什么时机调 \`compact_if_needed\`，超阈值一次压一次。想核对理解的话，\`配套指南/故障排查.md\` 的 Day 12 一节有症状对照表，可以按现象自查。

## 为什么这样写

- **模块 docstring 先纠偏"上下文 ≠ 记忆"**：原文写的是 *"纠偏：上下文 ≠ 记忆。上下文是每次调模型时拼进 messages 的内容；记忆是跨调用持久化的信息。压缩上下文不等于删除记忆。"*（\`compact.py:3-4\`）——压缩最容易踩的坑就是把它当成遗忘/写记忆，作者把红线写进第一屏，防止后来者改错方向。
- **token 估算用启发式而不是 tokenizer**：docstring 原话 *"粗略 token 估算，用于触发条件判断（不精确，够用）"*（\`compact.py:24\`）——精确切分要引依赖、可能还要联网，而触发判断只需要"大概到没到阈值"；为精确引入依赖不值。
- **先抽 system 再动手，把易错点写进 docstring**：原文 *"对应易错点："从最旧 message 开始丢 → 易丢系统约束"——本实现先抽 system 再丢"*（\`compact.py:104\`）——最常见的错误被直接当作设计理由写下来，代码与教训一一对应。
- **摘要失败降级为截断**：注释原话 *"摘要失败：降级为截断"*（\`compact.py:181-182\`）——压缩是 loop 的辅助逻辑，它的失败不能拖垮主流程；**可用性 > 压缩质量**。
- **摘要调用用 \`temperature=0\` + \`max_tokens=300\`**（\`compact.py:176-177\`）：摘要要的是"稳定复述关键事实"，不是"发散创作"；300 的硬顶同时是成本上限——和 Week 1 的"有主见的默认值"同一套思路。

## 本章小结

- 上下文 ≠ 记忆：压缩只处理当前 messages 列表，不是往记忆库写东西，两者丢失的后果也不同。
- 三种策略激进程度递增：截断（纯本地零成本，丢中间细节）→ 摘要（一次 LLM 调用，丢细节）→ 召回（每次检索，相关性判断不稳）。
- 保 system 是铁律：\`_extract_system\` 先把 system 抽走，所有裁剪都发生在 \`rest\` 上，"丢最旧"永远碰不到行为约束。
- 触发由 token 阈值控制：\`compact_if_needed\` 先估算、超阈值才分派策略；摘要失败自动降级为截断，压缩永远不是 loop 的故障点。
- 这一处是"messages 列表怎么瘦身"的事——后面 Day 13 的工作流编排只是把这种"先检查、再分派、失败降级"的组织方式套到更多环节上，核心没变复杂。

## 一句话边界

- 上下文 ≠ 记忆：压缩上下文不是往记忆库写东西。
- 最常见的错误是从最旧开始丢、把 system 丢了；要先抽 system 再压。
- 别每轮都压缩，设 token 阈值超过才压。
- 摘要失败要降级为截断，别让压缩崩掉 loop。
- 压缩是权衡：压太狠丢约束，不压撑爆窗口。

## 读完应该能用自己的话回答

1. 上下文和记忆有什么区别？压缩上下文是不是就是写记忆？
2. 上下文太长会有什么问题？
3. 三种压缩策略各是什么、各有什么风险？
4. 为什么"从最旧的消息开始丢"是错的？正确做法是什么？
5. 为什么不能每轮都压缩？摘要失败怎么办？

## 想深入

上下文分层、KV Cache 友好的压缩、子 agent 隔离代替压缩等，见八股·12 上下文工程。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 的上下文压缩。请解释：1) 上下文和记忆的区别；2) 上下文太长有什么问题；3) 三种压缩策略各是什么；4) 为什么不能从最旧的消息开始丢、该怎么做；5) 为什么不能每轮都压。不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

### Q1. 上下文与记忆

关于"上下文"和"记忆"的关系，下列说法正确的是？

A. 上下文与记忆生命周期相同，都是跨调用持久化，压缩上下文会同时清空记忆
B. 上下文存储在向量库，记忆存储在 messages 列表，压缩上下文即遗忘
C. 压缩上下文（compaction）会触发记忆的更新与遗忘，二者必须同步执行
D. 上下文是单次调用拼进 messages 的内容，记忆是跨调用持久化的信息，二者丢失后果不同

### Q2. 三种压缩策略

关于截断、摘要、召回三种上下文压缩策略，下列描述正确的是？

A. 截断策略需要每次调用 LLM，成本最高但不会丢中间关键信息
B. 摘要策略把旧 message 压成摘要，需一次 LLM 调用，风险是丢失细节
C. 召回策略只保留相关 message，零本地成本，相关性判断永远准确
D. 三种策略激进程度相同，区别仅在实现语言不同

### Q3. 保留 system 约束

在实现上下文压缩时，处理 system message 的正确做法是？

A. 从最旧的 message 开始逐条丢弃，system message 位置最靠前应优先丢弃
B. 把 system message 和 user message 一起做摘要，压成一句话注入对话
C. 先抽出 system message 单独保留，再对剩余 message 做截断或摘要
D. system message 仅在首轮需要，压缩时可直接移出 messages 列表

### Q4. 摘要降级

当 summarize 调用模型失败时，compact_if_needed 的正确处理方式是？

A. 捕获异常，降级为 truncate_messages 截断，不让压缩崩掉整个 loop
B. 抛出异常向上传播，由 Agent Loop 统一决定是否终止
C. 忽略本次失败，保留原始 messages 不做任何压缩继续运行
D. 删除最旧的 system message 腾出空间后重试 summarize

### 开放题（1 道）

**Q5. 压缩降级场景**：你的 Agent 跑一个长文档分析任务，25 轮后触发 summarize，但模型 API 连续超时。

1. 此时 compact 应如何降级？为什么不能直接 raise 让异常上抛？
2. 如果 summarize 长期失败、系统频繁降级为截断，持续运行会出现什么问题？你会加什么监控或机制来应对？

≥150 字。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

### Q1. 答案：D

上下文是单次调用拼进 messages 的内容，记忆是跨调用持久化的信息；二者的生命周期、存储位置、丢失后果都不同（上下文丢失→当前轮行为漂移；记忆丢失→跨会话信息丢失），压缩上下文（compaction）不等于删除记忆。

- A 错：上下文生命周期是单次调用，不是跨调用持久化；压缩上下文也不会清空记忆。
- B 错：存储位置说反了——上下文存在 messages 列表，记忆存在 KV/向量库。
- C 错：compaction 压的是上下文，写入/遗忘记忆是 Day 11 的另一件事，二者不必同步。

### Q2. 答案：B

摘要策略用模型把旧 message 压成摘要，需要一次 LLM 调用，风险是摘要会丢失细节。

- A 错：截断是纯本地操作、成本为零，且会丢中间关键信息。
- C 错：召回每次都要检索（有成本），且相关性判断可能不准。
- D 错：三种策略激进程度递增（截断 < 摘要 < 召回），区别在于成本与风险的权衡。

### Q3. 答案：C

正确做法是先抽出 system message 单独保留（必须保留），再对剩余 message 做截断或摘要。system prompt 承载行为约束，丢了模型会"自由发挥"。

- A 错：从最旧的开始丢，system message 最靠前会最先被丢，是最常见的错误。
- B 错：system message 不能被摘要压成一句话，否则行为约束失真。
- D 错：system message 每轮调用都需要，不能移出列表。

### Q4. 答案：A

summarize 失败时应捕获异常、降级为 truncate_messages，不能让压缩崩掉整个 loop。压缩是 loop 内的辅助逻辑，它的失败不应拖垮主流程。

- B 错：直接 raise 会让 loop 崩溃，用户看到 traceback。
- C 错：忽略失败不压缩，messages 继续膨胀可能超窗口报错或成本飙升。
- D 错：删除 system message 是大忌，会丢失行为约束。

### 开放题 Q5 参考要点（rubric）

**0 分**：只说"重试"或"换个模型"，没有降级与监控的概念。

**1 分**：能说出降级为截断、不能 raise（因为会崩 loop），但未涉及长期频繁截断带来的信息丢失问题。

**2 分**：完整覆盖三点——(1) 捕获异常降级为 truncate，不 raise，因为压缩失败不应拖垮主 loop；(2) 长期频繁截断会丢失中间关键信息、导致模型行为漂移；(3) 提出监控手段：统计 summarize 失败率、设熔断/告警、失败率高时回退到召回策略或主动通知人工。

关键判断：降级保可用性是底线，但降级本身有代价，必须配套失败率监控与熔断。
`,Df=`---
title: Day 13 LangGraph 工作流编排
tags:
  - week2/day13
  - concept
  - code
  - exercise
---

# Day 13：工作流编排（LangGraph）

> 阅读约 35 分钟 ｜ 前置：[[day09-多工具注册与执行]]、[[day11-Memory三层记忆]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/workflow.py\`（完整代码已嵌入下方代码走读，全文 239 行）

## 本篇解决一个问题

单 Agent 用 Loop（Day 8）就够。但当你发现同一个 Agent 反复做"先判断意图、再分支处理"这种事，每次都靠 loop 临时判断，既不稳定也不好调试。

工作流就是把这种反复出现的分支、并行、审批模式显式化为一张图。今天要看清工作流和 Loop 的关系、图是怎么组织的、什么时候该用图。

## 一个例子

处理用户问题，按意图分流：

\`\`\`text
用 loop 临时判断：每轮模型都要重新判断"这是 FAQ 还是计算还是闲聊"，偶尔判错就跑错路
用工作流图：把"判断意图 -> 路由到 FAQ/计算/闲聊 -> 输出"画成图
  Router 节点判断意图，条件边路由到对应处理节点
  流程显式、可调试，不会每次临时判断
\`\`\`

差别在于：图把流程显式化，分支和路由变成一等公民，不再靠 loop 每轮临时决定。

## 这个概念是什么

**工作流编排** 是把 Agent 的处理流程画成一张图：节点是处理步骤（调模型、调工具、审核），边是流转关系，条件边可以根据状态分支。LangGraph 是实现这种图编排的工具。

工作流不是替代 Loop，是把 Loop 里反复出现的模式显式化为图。Loop 是单 Agent 的执行骨架，工作流是把多个步骤组织成可控的流程。

### 三个基本元素：State / Node / Edge

- **State**：在节点之间传递的状态（用 dataclass 描述，有默认值、有类型）。
- **Node（节点）**：一个处理步骤，输入 state，输出更新后的 state。节点是纯函数，不要有副作用（改全局变量、写文件），所有状态通过 state 传递。
- **Edge（边）**：节点间的流转。条件边可以根据 state 决定下一步去哪个节点（如意图是"计算"就去 calc 节点）。

\`\`\`text
StateGraph:
  router 节点 -> (条件边：按 intent) -> faq / calc / chat 节点 -> END
\`\`\`

### 条件边优先用规则，别用 LLM 判断

易错点：用 LLM 判断"该走哪条边"不稳定--模型偶尔返回不存在的意图，图就断了。条件边优先用规则（如关键词分类），规则覆盖不够再考虑 LLM 分类 + 规则兜底。

### 几种常见模式

| 模式 | 场景 |
|---|---|
| Router（条件分支） | 根据意图路由到不同处理 |
| Map-Reduce（并行+汇总） | 并行执行多个子任务再汇总 |
| Loop（带退出条件） | 循环直到满足条件 |
| HITL（暂停审批） | 关键节点等待人工确认 |

### 什么时候用工作流

单 Agent + 多工具能解决就别上工作流。当流程需要多阶段、条件路由、回环修复、人工审核节点时，用图编排更清晰可维护。

概念讲完了，下面进代码。今天的 \`workflow.py\` 把上面这张图——Router 节点 + 条件边 + FAQ/计算/闲聊三个处理节点——一行一行钉死在文件里。

## 代码走读：把"判断意图 → 召回记忆 → 分支处理"画成一张图

本篇走读 \`agent_app/workflow.py\`（239 行），没有 CLI 入口、没有可运行示例——它是个"图工厂"，供外部调 \`build_workflow()\` 拿编译好的图。代码已完整嵌入下文，每一段引用都标注了 \`文件:行号\`，可以对照阅读。

### 文件头：设计意图写进 docstring

\`agent_app/workflow.py:1-16\`

\`\`\`python
"""Day 13: 工作流编排（LangGraph）。

纠偏：工作流不是"替代 Agent Loop"，是把 Loop 里反复出现的分支/并行/审批
模式显式化为图。统一用 LangGraph（v1 的"或状态机"hedge 已删）。

四种基本模式：
1. Router（条件分支）：根据输入路由到不同节点
2. Map-Reduce（并行+汇总）：并行执行多个子任务再汇总
3. Loop（带退出条件）：循环执行直到满足条件
4. HITL（暂停审批）：在关键节点暂停等待人工确认

本模块复用 Day 11 memory + Day 9 tools，接到 StateGraph。
Router 节点路由 FAQ / 计算 / 闲聊三类。

延迟 import langgraph：没装时不影响其他模块 import。
"""
\`\`\`

- **第 3-4 行是全文的定调**：第一句就纠偏——"工作流不是替代 Agent Loop"。这是作者最怕读者误解的一件事，所以写在文件第一行。你后面读到 calc 节点里嵌 ReActLoop 时，会看到这句话的代码证据。
- **第 6-10 行列出四种基本模式**：Router / Map-Reduce / Loop / HITL。注意今天**只落地 Router 一种**——这张表是"图能表达什么"的清单，不是都要实现。
- **第 12-13 行声明复用**："复用 Day 11 memory + Day 9 tools，接到 StateGraph"。这篇不是从零造轮子，是把前四天的成果**接线**。
- **第 15 行**："延迟 import langgraph：没装时不影响其他模块 import。"——一个工程约定，稍后在 \`build_workflow\` 里兑现（第 197 行）。

> 为什么把设计意图写进模块 docstring？因为 239 行里最贵的不是代码，是"为什么这么写"。等三个月后有人来改这个文件，先读前 16 行就能知道哪些是不能动的底线。

### State：节点之间只靠这一个 dataclass 传话

\`agent_app/workflow.py:30-42\`

\`\`\`python
@dataclass(slots=True)
class WorkflowState:
    """LangGraph 工作流状态。

    用 dataclass 而非 TypedDict，便于类型检查与默认值。
    """

    user_input: str
    intent: Literal["faq", "calc", "chat", "unknown"] = "unknown"
    answer: str = ""
    memory_hits: list[dict[str, Any]] = field(default_factory=list)
    steps: list[dict[str, Any]] = field(default_factory=list)
    needs_human: bool = False
\`\`\`

- **第 37 行 \`user_input: str\`**：唯一没有默认值的字段——它是图的"入口载荷"，必须由外部传入。
- **第 38 行 \`intent\`**：用 \`Literal\` 把合法值锁死成四个：\`faq / calc / chat / unknown\`。**\`unknown\` 是兜底值**——分类器（或未来的 LLM 分类器）拿不准时落在这里，图永远有处可去。
- **第 39-42 行其余四个字段都有默认值**：节点可以只改自己关心的字段，不碰别人的。\`steps\` 是流水账（每个节点往里 append 一行，之后可以 trace 整次执行）；\`needs_human\` 是给 HITL 留的挂起位（对应文件头第 10 行）。
- **第 40 行 \`field(default_factory=list)\`**：可变默认值的正确写法。如果写 \`= []\`，所有实例会共享同一个 list——这是 Python 的经典坑，\`default_factory\` 就是为它准备的。

> 为什么用 dataclass 而不是 TypedDict？docstring 第 34 行只有一句话："用 dataclass 而非 TypedDict，便于类型检查与默认值。" 这就是取舍的全部理由——这题自测 Q3 会考，答案就是这句话的展开。

### Router 节点：规则分类，LLM 不碰意图判断

\`agent_app/workflow.py:50-77\`

\`\`\`python
def make_router_node(
    classify_fn: Callable[[str], str] | None = None,
) -> Callable[[WorkflowState], WorkflowState]:
    """Router 节点：根据输入判断意图，路由到 FAQ/计算/闲聊。

    纠偏（易错点）：Edge 条件用 LLM 判断不稳定，优先规则。
    本实现默认用规则分类（关键词匹配），classify_fn 可注入自定义逻辑。
    """

    def _default_classify(text: str) -> str:
        text_lower = text.lower()
        if any(kw in text_lower for kw in ["计算", "算", "多少", "+", "-", "*", "/"]):
            return "calc"
        if any(kw in text_lower for kw in ["faq", "帮助", "怎么", "什么是", "如何"]):
            return "faq"
        if any(kw in text_lower for kw in ["你好", "hi", "hello", "嗨"]):
            return "chat"
        return "chat"

    _classify = classify_fn or _default_classify

    def node(state: WorkflowState) -> WorkflowState:
        intent = _classify(state.user_input)
        state.intent = intent  # type: ignore[assignment]
        state.steps.append({"node": "router", "intent": intent})
        return state

    return node
\`\`\`

- **第 50-52 行是工厂模式**：\`make_router_node\` 不直接当节点用，它**返回一个 node 函数**。参数 \`classify_fn\` 允许外部注入分类逻辑——测试时传一个假的分类器，生产时用默认的。这是 Day 9 学过的依赖注入，在图上同样适用。
- **第 59-67 行 \`_default_classify\`**：纯规则分类。三组关键词：
  - 第 61 行：\`["计算", "算", "多少", "+", "-", "*", "/"]\` → \`"calc"\`；
  - 第 63 行：\`["faq", "帮助", "怎么", "什么是", "如何"]\` → \`"faq"\`；
  - 第 65 行：\`["你好", "hi", "hello", "嗨"]\` → \`"chat"\`。
- **第 67 行 \`return "chat"\`**：什么都没命中就回 \`"chat"\`。注意默认分类器**不产生 \`"unknown"\`**——既然 unknown 在默认规则里是死路，干脆不让它出现；\`"unknown"\` 是留给自定义 \`classify_fn\` 用的出口。
- **第 71-75 行 node 本体**：调 \`_classify\` 拿意图 → 写进 \`state.intent\` → 往 \`steps\` 记一行。第 73 行的 \`# type: ignore[assignment]\` 是因为 \`Literal\` 类型收不下任意字符串，这里用注释向类型检查器声明"我负责"。

> 为什么 router 不直接调主 LLM 让它"判断意图"？docstring 第 55 行已经把易错点钉死了："Edge 条件用 LLM 判断不稳定，优先规则。" 想想后果：规则分类是确定的——同一个输入永远走同一条边，错了改关键词就行；LLM 判断是概率的——模型偶尔返回一个图里**不存在的意图**，条件边找不到目标节点，图当场断掉。自测 Q2 和 Q5 都在考这个判断。

### memory_recall：Day 11 的三层记忆直接复用

\`agent_app/workflow.py:80-97\`

\`\`\`python
def make_memory_recall_node(
    memory: ThreeLayerMemory,
    namespace: str = "default",
) -> Callable[[WorkflowState], WorkflowState]:
    """记忆召回节点：复用 Day 11 三层记忆，拼进上下文。"""

    def node(state: WorkflowState) -> WorkflowState:
        hits = memory.recall(namespace, state.user_input, top_k=3)
        # 记录命中数（实际拼进 prompt 由调用方处理）
        state.memory_hits = [
            {"layer": layer, "key": h.key, "value": str(h.value)[:200], "score": h.score}
            for layer, hit_list in hits.items()
            for h in hit_list
        ]
        state.steps.append({"node": "memory_recall", "hits": len(state.memory_hits)})
        return state

    return node
\`\`\`

- **第 87 行**：一次 \`memory.recall(namespace, state.user_input, top_k=3)\` 同时查 Day 11 的 KV 库（子串匹配）和语义库（向量检索），\`top_k=3\` 控制每层最多召回几条。
- **第 89-93 行**：把两层的命中结果**拍平**成 \`[{layer, key, value, score}]\` 列表存进 state。\`str(h.value)[:200]\` 把每条记忆截到 200 字符——记忆可能很长，不能让 state 被一段回忆录撑爆。
- **第 88 行注释是关键分工声明**："记录命中数（实际拼进 prompt 由调用方处理）"。这个节点只负责**把记忆找出来放进 state**，不负责拼 prompt——拼 prompt 是 FAQ 节点的事（下节第 107 行）。职责边界切得干净，节点之间靠 state 传话，谁也不依赖谁。

> 为什么召回要放在分支**之前**？因为 FAQ 节点要用记忆（它把 \`memory_hits\` 拼进 system prompt），所以图的顺序是 router → memory_recall → 条件边，而不是 router 直接就分叉。图的结构是数据依赖决定的，不是想当然的顺序。

### FAQ 与闲聊：两个"轻节点"，把调模型包成函数

\`agent_app/workflow.py:100-119\`

\`\`\`python
def make_faq_node(call_model_fn: Callable | None = None) -> Callable[[WorkflowState], WorkflowState]:
    """FAQ 节点：基于记忆召回 + 模型生成答案。"""
    from agent_app.llm import call_model as default_call

    _call = call_model_fn or default_call

    def node(state: WorkflowState) -> WorkflowState:
        context = "\\n".join(h["value"] for h in state.memory_hits) or "(无相关记忆)"
        try:
            resp = _call([
                {"role": "system", "content": f"你是 FAQ 助手。参考记忆：{context}"},
                {"role": "user", "content": state.user_input},
            ], temperature=0)
            state.answer = resp.text
        except Exception as exc:  # noqa: BLE001
            state.answer = f"[FAQ 节点错误] {exc}"
        state.steps.append({"node": "faq"})
        return state

    return node
\`\`\`

- **第 102 行**：\`from agent_app.llm import call_model\` 放在函数内部——函数内 import 是"延迟 import"的第二个用例，让节点构造不背 llm 的加载成本，更重要的是配合 \`call_model_fn\` 注入。
- **第 104 行 \`_call = call_model_fn or default_call\`**：每个节点都接受注入。测试时传 mock，生产时用真模型，节点代码本身不用改。
- **第 107 行**：把上一步 \`memory_hits\` 里的 value 拼成上下文；**没有命中时给 \`"(无相关记忆)"\`**——这是告诉模型"没有记忆可用"，而不是让它凭感觉编一段。上下文拼进 system prompt，呼应 memory_recall 节点注释里那句"由调用方处理"。
- **第 108-115 行 try/except**：模型调用包在 try 里，异常不抛出去，而是变成答案文本 \`"[FAQ 节点错误] ..."\`。**节点永远不 raise**——错误也作为一种数据沿 state 往下传，图不会因为一个节点炸掉就整条流程中断。
- **第 116 行**：往 \`steps\` 记账，与 router / memory_recall 的记录串成完整执行轨迹。

闲聊节点（\`agent_app/workflow.py:157-175\`）结构几乎一样：system prompt 只有一句"你是友好的对话助手。"，唯一实质区别是 **\`temperature=0.7\`**（第 168 行）——闲聊要一点温度，别像 FAQ（\`temperature=0\`）那样死板。对比例子：同一个问题，FAQ 节点要"每次答案一致可引用"，闲聊节点要"接得住话"。这就是"同一套骨架，参数不同就是不同节点"。

### calc 节点：图节点内部跑一个 Day 8 的 Loop（本日关键）

\`agent_app/workflow.py:122-154\`

\`\`\`python
def make_calc_node(
    registry: Any | None = None,
    call_model_fn: Callable | None = None,
) -> Callable[[WorkflowState], WorkflowState]:
    """计算节点：复用 Day 8/9 的工具注册表处理计算类问题。"""
    from agent_app.llm import call_model as default_call
    from agent_app.loop import ReActLoop

    _call = call_model_fn or default_call

    def node(state: WorkflowState) -> WorkflowState:
        if registry is not None:
            # 用 Day 8 的 ReActLoop 跑工具（显式注入 call_model_fn，支持 mock 测试）
            agent = ReActLoop(
                registry,
                max_iter=5,
                call_model_fn=_call,
            )
            result = agent.run(state.user_input)
            state.answer = result.answer or "(计算未得出结果)"
        else:
            try:
                resp = _call([
                    {"role": "system", "content": "你是计算助手，直接给出计算结果。"},
                    {"role": "user", "content": state.user_input},
                ], temperature=0)
                state.answer = resp.text
            except Exception as exc:  # noqa: BLE001
                state.answer = f"[计算节点错误] {exc}"
        state.steps.append({"node": "calc"})
        return state

    return node
\`\`\`

- **第 127-128 行**：llm 和 \`ReActLoop\` 都在函数内 import——同样是为了注入 + 延迟加载。
- **第 133 行 \`if registry is not None:\`**：有工具注册表就走 ReActLoop，**没有就退化成一次普通模型调用**（第 143-150 行 else 分支）。一个节点、两条路径，有没有工具都能跑——这正是"工具是可选能力"的工程表达。
- **第 135-139 行**：\`ReActLoop(registry, max_iter=5, call_model_fn=_call)\`。注意 \`max_iter=5\`——loop.py 的默认值是 8（Day 8 讲过），这里刻意压到 5：**计算节点只是整张图的一步**，不该让子循环在这个节点里烧掉太多轮次。这是"预算收敛"的取舍，后文"为什么这样写"还会展开。
- **第 140-141 行**：\`result.answer or "(计算未得出结果)"\`——ReActLoop 可能以 \`max_iter\` 终止而没给出答案（Day 8 的三种终止信号之一），空串要用兜底文案盖住。
- **第 143-150 行 else 分支**：没有 registry 时，直接调一次模型，错误同样吞进 answer（\`[计算节点错误]\`）。

> **这就是"工作流不替代 Loop"的代码证据**：图的一个节点里，完整地跑着 Day 8 的 ReActLoop。文件头第 3 行说的"不是替代"，在这里落到实处——图管粗粒度路由（走哪条路），Loop 管细粒度推理（路上怎么调用工具），分工，不是替代。自测 Q1 的 A 选项就是这句话。

### build_workflow：把节点和边拼成一张图

\`agent_app/workflow.py:183-228\`

\`\`\`python
def build_workflow(
    *,
    memory: ThreeLayerMemory | None = None,
    registry: Any | None = None,
    classify_fn: Callable[[str], str] | None = None,
    call_model_fn: Callable | None = None,
) -> Any:
    """构建 LangGraph StateGraph。

    路由：router → memory_recall → {faq | calc | chat} → END
    HITL：faq 节点可设置 needs_human，外部检查后决定是否暂停。

    返回编译后的 graph。没装 langgraph 时抛 ImportError（正文需说明）。
    """
    from langgraph.graph import END, StateGraph

    mem = memory or ThreeLayerMemory()

    workflow = StateGraph(WorkflowState)

    workflow.add_node("router", make_router_node(classify_fn))
    workflow.add_node("memory_recall", make_memory_recall_node(mem))
    workflow.add_node("faq", make_faq_node(call_model_fn))
    workflow.add_node("calc", make_calc_node(registry, call_model_fn))
    workflow.add_node("chat", make_chat_node(call_model_fn))

    workflow.set_entry_point("router")
    workflow.add_edge("router", "memory_recall")

    # 条件路由：memory_recall 后根据 intent 分发
    workflow.add_conditional_edges(
        "memory_recall",
        lambda state: state.intent,
        {
            "faq": "faq",
            "calc": "calc",
            "chat": "chat",
            "unknown": "chat",
        },
    )

    workflow.add_edge("faq", END)
    workflow.add_edge("calc", END)
    workflow.add_edge("chat", END)

    return workflow.compile()
\`\`\`

- **第 183-189 行签名**：四个关键字参数**全都有默认值**。\`memory\` 接 Day 11 的三层记忆、\`registry\` 接 Day 9 的工具注册表、\`classify_fn\` 换分类器、\`call_model_fn\` 换模型——**这就是"复用不重写"的接口**：外部把前几天的成果塞进来，build_workflow 负责接线。
- **第 197 行 \`from langgraph.graph import END, StateGraph\`**：langgraph 在**函数体内**才 import——文件头第 15 行"延迟 import"的约定在此兑现。效果：没装 langgraph 时，import workflow 模块本身不报错，只有调用 \`build_workflow()\` 才抛 ImportError（docstring 第 195 行自己声明了这一点，诚实标注）。
- **第 199 行**：没传 memory 就 new 一个 \`ThreeLayerMemory()\`——默认值不是 None 传给图，而是就地建一个真的。
- **第 201-207 行**：\`StateGraph(WorkflowState)\` 声明状态类型，然后 add 五个节点。每个节点都是 \`make_xxx_node(...)\` 工厂的产物——**图只认节点函数，不认函数怎么造的**。
- **第 209-210 行**：入口是 router，\`router → memory_recall\` 是普通边（无条件）。为什么先召回再分支？前面说过：FAQ 节点要用记忆，数据依赖决定图序。
- **第 213-222 行：条件边，全文的心脏**。\`add_conditional_edges("memory_recall", lambda state: state.intent, {...})\`——执行完 memory_recall，按 \`state.intent\` 的值查映射表，跳到对应的节点。**注意第 220 行 \`"unknown": "chat"\`**：图里根本没有叫 unknown 的节点，但映射表把 unknown 兜底到 chat——这就是"图永远不会因为非法意图而断"的保险丝。
- **第 224-226 行**：三个处理节点殊途同归，都到 \`END\`。
- **第 228 行 \`return workflow.compile()\`**：编译成可调用的图。外部用法是 \`graph.invoke(WorkflowState(user_input="..."))\`，**返回的是 dict 而不是 dataclass**——\`result["answer"]\` 取值。这个坑自测 Q4 会考，记住它。

> ### 岔路：StateGraph 与条件边是怎么工作的？（可跳读，不影响主线）
> LangGraph 的 StateGraph 是一个状态机：\`invoke(state)\` 从 entry point 出发，执行节点函数，节点返回更新后的 state；普通边直接到下一节点，条件边把 state 喂给一个函数（这里是 \`lambda state: state.intent\`），拿返回值查映射表决定去哪。今天只需要这个心智模型：**节点是纯函数、边是路由表、state 是唯一的信使**。循环、子图、并行这些高级能力，见八股·02 核心框架。

## 为什么这样写

- **State 用 dataclass 而不是 TypedDict**：\`WorkflowState\` 的 docstring 写得很短（\`workflow.py:34\`）："用 dataclass 而非 TypedDict，便于类型检查与默认值。"——默认值（\`intent\` 的 \`"unknown"\`）、\`slots\` 省内存、类型检查兜底，三条全占；TypedDict 没有默认值，初始化时少传一个字段就静默出错。
- **条件边用规则，不用 LLM**：\`make_router_node\` 的 docstring（\`workflow.py:55-56\`）："纠偏（易错点）：Edge 条件用 LLM 判断不稳定，优先规则。本实现默认用规则分类（关键词匹配），classify_fn 可注入自定义逻辑。"——规则确定、免费、可调试；LLM 分类要付钱、要延迟、还可能返回不存在的意图把图弄断。规则是下限，LLM 只配做"规则兜不住时的补位"，且必须受合法节点集合约束。
- **延迟 import langgraph**：模块 docstring（\`workflow.py:15\`）："延迟 import langgraph：没装时不影响其他模块 import。"\`build_workflow\` 的 docstring（\`workflow.py:195\`）进一步声明："返回编译后的 graph。没装 langgraph 时抛 ImportError（正文需说明）。"——图是可选能力：其他模块引用 workflow.py 不被 langgraph 绑架，装不装都行，只在真正要图时才炸。
- **节点吞异常、错误进 state，不 raise**：\`workflow.py:114-115\` 的 \`except Exception as exc:  # noqa: BLE001\` 接 \`state.answer = f"[FAQ 节点错误] {exc}"\`——节点是纯函数约定（概念部分讲过）的自然延伸：错误也是数据，随 state 往下传。图不会因为一个节点的模型调用失败就整条流程崩掉，调用方拿到带 \`[节点错误]\` 前缀的 answer，还能 trace 是哪一步出的问题。
- **calc 节点内嵌 ReActLoop，且 max_iter 压到 5**：\`workflow.py:134\` 的注释："用 Day 8 的 ReActLoop 跑工具（显式注入 call_model_fn，支持 mock 测试）"——图管路由、Loop 管推理，分工不替代；\`max_iter=5\`（默认 8）是预算收敛：子循环只是整张图的一步，不该让它在节点里无限烧。

## 本章小结

- 工作流三元素在代码里逐一落地：\`WorkflowState\`（状态）、五个 \`make_xxx_node\` 工厂（节点）、普通边 + 条件边（流转），条件边按 \`state.intent\` 分发。
- 条件分支用规则不用 LLM：关键词分类确定、免费、可调试；\`"unknown": "chat"\` 兜底保证图不会因非法意图而断。
- 工作流不替代 Loop：calc 节点内部就是 Day 8 的 ReActLoop——图管粗粒度路由，Loop 管细粒度推理。
- 复用不重写：memory_recall 接 Day 11 三层记忆，calc 接 Day 9 工具注册表，全部通过 \`build_workflow\` 的参数注入，节点函数本身可 mock。
- 这一处是"把反复出现的分支模式画成图"的事——后面多 Agent 协作只是把图的节点换成更粗粒度的 agent，**核心没变复杂**。

## 一句话边界

- 工作流不替代 Loop，是把 Loop 里反复出现的模式显式化为图。
- 三元素：State（状态）、Node（节点，纯函数）、Edge（边，条件分支）。
- 条件边优先用规则，别用 LLM 判断（不稳定）。
- 节点是纯函数，状态通过 state 传递，别有副作用。
- 单 Agent 能解决就别上工作流；需要多阶段/分支/审批时才用。

## 读完应该能用自己的话回答

1. 工作流和 Loop 是什么关系？工作流替代 Loop 吗？
2. 工作流图的三个基本元素是什么？节点为什么要是纯函数？
3. 条件边为什么优先用规则、别用 LLM 判断？
4. 有哪几种常见工作流模式？
5. 什么时候该用工作流，什么时候不该？

## 想深入

工作流的拓扑模式、循环图终止条件、子图与 Loop 边界等，见八股·02 核心框架。

## 交给 AI 的问题

\`\`\`text
我正在学 LangGraph 工作流。请解释：1) 工作流和 Agent Loop 是什么关系；2) 图的 State/Node/Edge 各是什么、节点为什么要是纯函数；3) 条件边为什么优先用规则；4) 什么时候该用工作流。用"按意图分流处理用户问题"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

### Q1. 工作流与 Loop

关于 LangGraph 工作流与 Agent Loop 的关系，下列说法正确的是？

A. 工作流不替代 Loop，它是把 Loop 里反复出现的分支、并行、审批模式显式化为图
B. 引入工作流后应删除 Day 8 的 ReActLoop，所有执行改由图的节点直接完成
C. 工作流只能用于多 Agent 编排，单 Agent 任务必须仍用 Loop 不能用图
D. 工作流和 Loop 互斥，一个项目里二者只能选其一

### Q2. Edge 条件

在 LangGraph 中决定 Router 节点走哪条 Edge（faq / calc / chat）时，本 Day 采用的做法是？

A. 每次都调用主 LLM 让模型输出意图标签，模型返回什么节点就路由到什么节点
B. 用 LLM 输出 0-1 置信度，低于阈值时随机选一条边避免卡死
C. 用一个独立的小模型做意图分类，分类结果直接决定边，不做规则兜底
D. 默认用关键词规则分类，规则覆盖不够时再考虑 LLM 分类加规则兜底

### Q3. State 定义

关于 LangGraph 中 WorkflowState 的定义，下列说法正确的是？

A. 必须使用 TypedDict，因为 LangGraph 不支持 dataclass 序列化
B. dataclass 不能设默认值，初始化时必须显式传入所有字段
C. dataclass 支持默认值、类型检查并可加 slots 优化，比 TypedDict 更安全
D. State 字段应尽量用可变全局变量传递，避免在节点间复制 state

### Q4. invoke 返回值

调用 \`graph.invoke(state)\` 后，访问返回结果中 answer 字段的正确方式是？

A. result.answer，因为 invoke 返回的是原始 WorkflowState dataclass 对象
B. result["answer"]，因为 invoke 会把 dataclass 序列化成 dict 返回
C. result().answer，因为 invoke 返回的是一个待执行的生成器需先调用
D. result.get_answer()，因为 invoke 返回的结果对象提供专门的 getter 方法

### 开放题

**Q5. Router 长尾场景**：你的工作流 router 节点用关键词规则分类，但线上发现"帮我看看明天天气"被误分到 chat 而非 weather 节点（weather 关键词没覆盖"天气"的同义词）。

1. 为什么本 Day 不建议直接把 router 改成"全交 LLM 分类"？
2. 你会怎么改进 router，既保持稳定又覆盖长尾意图？描述规则与 LLM 的协作方式。

≥150 字。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

### Q1. 答案：A

工作流不替代 Loop。Loop 是单 Agent 的执行骨架，工作流是把 Loop 里反复出现的分支、并行、审批模式显式化为图，使其更稳定、更可调试；Day 8 的 ReActLoop 仍被 calc 节点复用。

- B 错：不删 Loop，calc 节点内部仍用 Day 8 的 ReActLoop 跑工具。
- C 错：单 Agent 任务也可以用工作流（本 Day 就是单 agent + router 图）。
- D 错：二者不互斥，工作流图里的节点可以调用 Loop。

### Q2. 答案：D

Edge 条件优先用关键词规则分类，规则覆盖不够时再考虑 LLM 分类加规则兜底。规则确定性强、可调试；LLM 判断不稳定。

- A 错：用主 LLM 输出意图标签不稳定，模型偶尔返回图中不存在的意图，图就断了。
- B 错：同样依赖 LLM，置信度方案仍不稳定，且"随机选边"会引入错误路由。
- C 错：用独立小模型分类但不做规则兜底，仍存在返回非法意图导致图断裂的风险。

### Q3. 答案：C

dataclass 支持默认值、类型检查，并可加 slots 优化，比 TypedDict 更安全；TypedDict 没默认值、初始化易错。

- A 错：LangGraph 支持 dataclass（也支持 TypedDict / Pydantic）。
- B 错：dataclass 能设默认值（如 \`intent: Literal[...] = "unknown"\`）。
- D 错：状态应通过 WorkflowState 在节点间传递，节点是纯函数、不应有副作用，更不能用全局变量。

### Q4. 答案：B

\`graph.invoke(state)\` 会把 dataclass 序列化成 dict 返回，取值用 \`result["answer"]\`。

- A 错：返回的是 dict 不是 dataclass 对象，用 \`result.answer\` 会抛 AttributeError。
- C 错：invoke 同步返回最终 state，不是生成器，不需要再调用。
- D 错：返回的是普通 dict，没有专门的 getter 方法。

### 开放题 Q5 参考要点（rubric）

**0 分**：只说"加更多关键词"或"直接换 LLM"，未讨论稳定性权衡。

**1 分**：能说出 LLM 全权分类不稳定（可能返回不存在的意图导致图断裂），但改进方案单一。

**2 分**：完整覆盖两点——(1) LLM 全权分类不稳定，可能返回图中不存在的意图节点导致图断裂、且调试困难；(2) 提出"规则优先 + LLM 兜底"的混合方案：规则覆盖已知意图保稳定，规则未命中（unknown）时再交给 LLM 处理长尾，且 LLM 输出必须映射/校验到合法节点集合，非法输出回退到 chat 或要求澄清。

关键判断：Edge 的稳定性优先于覆盖率；规则保下限，LLM 补上限，但 LLM 输出必须受合法节点集合约束。
`,Sf=`---
title: Day 14 Subagent 子任务隔离
tags:
  - week2/day14
  - concept
  - code
  - exercise
---

# Day 14：Sub-agent 与子任务隔离

> 阅读约 35 分钟 ｜ 前置：[[day08-从零写ReAct-Loop]]、[[day09-多工具注册与执行]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/subagent.py\`（完整代码已嵌入下方代码走读；核心函数 \`run_multi_doc_summary\`）

## 本篇解决一个问题

主 Agent 跑复杂任务时，上下文会被各种中间结果塞满——读了一堆文件、搜了一堆代码，全堆在主上下文里，既占窗口又干扰判断。

Sub-agent 解决的就是这个：把子任务交给一个独立的子 Agent 去跑，它有自己的上下文，跑完只把结论摘要返回给主 Agent。今天要看清隔离靠什么实现、什么时候该开 sub-agent。

**一句话主旨**：隔离不是"多开几个 Agent"，是"独立上下文 + 最小权限 + 摘要返回"三道闸门。今天的代码走读就按这三道闸门展开。

## 一个例子

"读三篇文档并总结共同主题"：

\`\`\`text
不用 sub-agent：主 Agent 自己读 doc1、doc2、doc3，三篇全文都堆进主上下文，又挤又乱
用 sub-agent：主 Agent 派三个子 Agent，各读一篇，各在自己的上下文里处理
            每个子 Agent 只返回 200 字摘要给主 Agent
            主 Agent 只看三段摘要，综合出答案
\`\`\`

差别在于：子 Agent 的中间过程（读全文、反复推理）不进主上下文，主 Agent 只看结论，上下文干净。

## 这个概念是什么

**Sub-agent** 是主 Agent 派出去跑子任务的独立 Agent。隔离靠四点实现：

- **独立 messages[]**：子 Agent 有自己的上下文，不污染主对话。
- **工具子集**：子 Agent 只拿到任务所需的工具（最小权限），不给全部工具。
- **受限上下文**：子 Agent 看不到主 Agent 的完整上下文，只拿到任务描述。
- **摘要式返回**：子 Agent 只返回结论摘要，不返回完整过程。

## 代码走读：跟一次子任务派发走完全程

本篇走读 \`agent_app/subagent.py\`（下文统一写作 \`agent_app/subagent.py\`，全文 202 行）。今天只看这一个文件——它自己就把隔离讲完了：docstring 是第一张地图，然后是"结果载体 → 派发 → 并行 → 综合 → 工具子集构造 → 交付物"一条线。代码已完整嵌入下文，每一段引用都标注了 \`文件:行号\`。

### 先读 docstring：设计意图就写在第一屏

\`agent_app/subagent.py:1-15\`

\`\`\`python
"""Day 14: Sub-agent 与子任务隔离。

纠偏：Sub-agent 不是"多开几个 Agent"，是独立 messages[] + 工具子集
+ 受限上下文 + 摘要式返回。简单工具别开 sub-agent（性能崩）。

设计要点（对应易错点）：
- 子 agent 用独立 messages[]，不共享主上下文（隔离）
- 子 agent 只拿到工具子集（最小权限）
- 子 agent 只返回摘要，不返回完整 trace（避免上下文污染）
- 主 agent 只看摘要做综合

典型场景：长文档分析、代码 review、并行检索。

本模块复用 Day 8 的 ReActLoop + Day 9 的工具子集。
"""
\`\`\`

第一句话就是纠偏："Sub-agent 不是'多开几个 Agent'"。很多人以为隔离靠"多开"，其实靠的是四个机制，docstring 里用四条 bullet 钉死，这四条就是今天全文的地图。最后一行（第 14 行）点名"复用 Day 8 的 ReActLoop + Day 9 的工具子集"——今天不发明新的循环，只是把已有的循环装进一个隔离盒。所以前置要求是 Day 8 和 Day 9，而不是更早。

### 结果载体：SubAgentResult

\`agent_app/subagent.py:25-33\`

\`\`\`python
@dataclass(slots=True)
class SubAgentResult:
    """子 agent 执行结果。"""

    task: str
    summary: str
    success: bool
    steps: int
    error: str | None = None
\`\`\`

为什么需要一个专门的 dataclass？因为它是"摘要式返回"的载体。子 Agent 跑完之后，主 Agent 关于这个子任务能拿到的全部信息就是这五个字段：任务描述、摘要、成败、走了几步、错误信息。

注意看这里**没有** messages 字段——子 Agent 的完整对话过程根本不会装进这个结构里。返回格式上没有通道，过程信息想污染主上下文都无处安放。\`steps: int\` 只记步数（一个整数），不记每一步的内容，这个设计在后面 dispatch 的收尾处会再次出现。

### 派发器：持有全部工具，但不代表会给出去

\`agent_app/subagent.py:36-54\`

\`\`\`python
class SubAgentDispatcher:
    """主 → 子派发器。

    每个子任务开一个独立的 ReActLoop（独立 messages[]），
    只给工具子集，返回摘要。
    """

    def __init__(
        self,
        full_registry: ToolRegistry,
        *,
        max_iter: int = 5,
        model: str | None = None,
        call_model_fn: Callable | None = None,
    ) -> None:
        self._full_registry = full_registry
        self._max_iter = max_iter
        self._model = model
        self._call_model_fn = call_model_fn  # 测试注入
\`\`\`

\`SubAgentDispatcher\` 是主 → 子的派发器，它的 docstring（第 39-40 行）把职责浓缩成一句：独立 ReActLoop + 工具子集 + 返回摘要——正是概念部分的四点里的三点（独立 messages、工具子集、摘要返回）。

构造函数只收四样东西：\`full_registry\`（主 Agent 的全部工具）、\`max_iter\`（子任务循环轮数上限，默认 5）、\`model\`、\`call_model_fn\`（测试注入点）。注意第 51 行：它把完整工具表存进 \`self._full_registry\`——**持有**全部工具，但"持有"不等于"会给出去"。真正发到子 Agent 手里的工具由 \`dispatch\` 的 \`allowed_tools\` 参数决定，最小权限在派发那一刻才落地。

### dispatch：子任务上下文从这里诞生

\`agent_app/subagent.py:56-90\`

\`\`\`python
    def dispatch(
        self,
        task: str,
        *,
        allowed_tools: list[str] | None = None,
        summary_instruction: str | None = None,
    ) -> SubAgentResult:
        """派发一个子任务。

        Args:
            task: 子任务描述。
            allowed_tools: 子 agent 可用的工具名子集。None 表示继承全部。
            summary_instruction: 让子 agent 按此指令生成摘要。
        """
        # 构造受限工具子集
        if allowed_tools is None:
            sub_registry = self._full_registry
        else:
            sub_registry = self._build_subset_registry(allowed_tools)

        # 独立 loop（独立 messages[]）
        system = summary_instruction or (
            "你是一个子 agent，负责完成一个独立子任务。"
            "完成后用不超过 200 字总结你的发现，不要返回完整过程。"
        )

        agent = ReActLoop(
            sub_registry,
            max_iter=self._max_iter,
            model=self._model,
            system_prompt=system,
            call_model_fn=self._call_model_fn,
        )
        result = agent.run(task)
\`\`\`

\`dispatch\` 是整篇文章的心脏，隔离的三道闸门在这里依次落下：

- **第 71-75 行，工具子集**：\`allowed_tools\` 传了就调 \`_build_subset_registry\` 现造一个受限注册表；没传（None）就继承全部——docstring 第 67 行写明了这是显式选择："None 表示继承全部"，不是漏传，是想清楚之后的决定。
- **第 77-80 行，摘要指令**：默认 system prompt 把"只返摘要"写死在行为边界里——"不超过 200 字总结你的发现，不要返回完整过程"。摘要式返回不是主 Agent 事后筛选，而是从子 Agent 的第一条消息就禁止它返回完整过程。\`summary_instruction\` 参数允许调用方覆盖这个默认。
- **第 82-89 行，独立 messages[]**：这是最关键的一步。\`ReActLoop(...)\` 每次 dispatch 都**现场 new 一个全新的 loop**，\`result = agent.run(task)\` 只把 \`task\` 这一行任务描述作为用户消息喂进去。子 Agent 的完整上下文 = system prompt + task，主 Agent 的历史消息根本没传进来——这就是"受限上下文"。

> 为什么 loop 要现场 new，而不是复用一个共享 loop？如果复用一个 loop，第一个子任务的思考过程和工具结果会留在它的 messages[] 里，第二个子任务一进来就"看到"了第一个子任务的中间过程——隔离当场失效。每次 new 一个 = 每次上下文都从空开始，这是结构上保证隔离，不靠模型自觉。

### dispatch 收尾：只把摘要和成败传出来

\`agent_app/subagent.py:91-105\`

\`\`\`python
        if result.stop_reason == "max_iter":
            return SubAgentResult(
                task=task,
                summary=result.answer or "(子 agent 达到 max_iter，未给出答案)",
                success=False,
                steps=len(result.steps),
                error="max_iter_reached",
            )

        return SubAgentResult(
            task=task,
            summary=result.answer,
            success=True,
            steps=len(result.steps),
        )
\`\`\`

子 Agent 跑完，只有两样东西被"传出来"：\`result.answer\`（它的最终回答）和 \`len(result.steps)\`（它走了几步）。steps 的完整内容——每一步的思考、工具调用、观测结果——在这里被**丢弃**，只留下一个步数整数。

两种结局分得清清楚楚：

- 正常结束：\`success=True\`，摘要就是 \`result.answer\`。
- 撞上 \`max_iter\`：\`success=False\`，\`error="max_iter_reached"\`，摘要用 \`result.answer or "..."\` 兜底——即使失败，也要以摘要的形式把"这个子任务没成"传回给主 Agent，让主 Agent 能判断，而不是静默吞掉。

> ### 岔路：子 Agent 的"开销"到底贵在哪？（可跳读，不影响主线）
> 第 82-89 行 new 出来的 ReActLoop，就是 Day 8 写的 Reason → Act → Observe 循环：每一轮，模型先思考下一步、调用一个工具、拿到观测结果，再进入下一轮。**每一轮都是一次 \`call_model\`**。所以一个子 Agent 跑 5 轮 = 至少 5 次 LLM 调用，三个子 Agent = 15 次，这还没算最后 synthesize 的一次。这就是 docstring 第 4 行"简单工具别开 sub-agent（性能崩）"的由来——单次 \`get_time\` 直接调一次模型就行，开 sub-agent 等于用 5 次调用的成本换一次调用的活。

### dispatch_parallel：名字叫并行，本 Day 是顺序模拟

\`agent_app/subagent.py:107-120\`

\`\`\`python
    def dispatch_parallel(
        self,
        tasks: list[str],
        *,
        allowed_tools: list[str] | None = None,
    ) -> list[SubAgentResult]:
        """并行派发多个子任务（顺序执行模拟，真实并行需 asyncio）。

        本 Day 用顺序执行简化；Day 17 multi-agent 会引入真并行。
        """
        return [
            self.dispatch(task, allowed_tools=allowed_tools)
            for task in tasks
        ]
\`\`\`

名字里有 parallel，实现却是一个 for 循环逐个 dispatch。docstring 第 113-115 行诚实标注了这是"顺序执行模拟"，并预告 Day 17 引入真并行。

为什么现在不真并行？因为**隔离的收益不依赖并行**——上下文干净靠的是独立 loop + 摘要返回，跟跑得快不快没关系。asyncio 并发是一整套额外的复杂度（协程、任务调度、结果收集），今天把它混进来，反而看不清隔离这条主线。先讲清楚"为什么上下文干净"，再把"怎么跑得快"留给 Day 17。

### synthesize：主上下文只看结论

\`agent_app/subagent.py:122-148\`

\`\`\`python
    def synthesize(
        self,
        results: list[SubAgentResult],
        *,
        question: str,
    ) -> str:
        """综合多个子 agent 的摘要，让主模型给出最终答案。

        主 agent 只看摘要，不看子 agent 的完整 trace。
        """
        summaries = "\\n\\n".join(
            f"### 子任务 {i+1}: {r.task}\\n{r.summary}"
            for i, r in enumerate(results)
            if r.success
        )
        if not summaries:
            return "所有子任务均失败，无法综合。"

        try:
            call = self._call_model_fn or call_model
            resp = call([
                {"role": "system", "content": "你是主 agent。根据以下子 agent 的摘要，回答用户问题。不要重复子 agent 的过程，只给结论。"},
                {"role": "user", "content": f"用户问题：{question}\\n\\n子 agent 摘要：\\n{summaries}"},
            ], temperature=0)
            return resp.text
        except Exception as exc:  # noqa: BLE001
            return f"[综合失败] {exc}\\n\\n原始摘要：\\n{summaries}"
\`\`\`

子任务全部跑完后，主 Agent 怎么给出最终答案？就在这里——\`synthesize\` 把多个摘要**综合**成一段回答：

- **第 132-136 行，信息量被刻意压到最小**：每个成功的子任务只拼成一行 \`### 子任务 N: 任务名\` 加一段摘要，\`if r.success\` 把失败子任务直接过滤掉。主模型看到的 user 内容里只有"用户问题 + 摘要"，没有别的。
- **第 137-138 行**：如果所有子任务都失败，\`summaries\` 为空字符串，直接返回提示，连模型都不调——不浪费一次调用。
- **第 140-146 行**：主模型只发一次调用，system prompt（第 143 行）明令"不要重复子 agent 的过程，只给结论"，\`temperature=0\`（第 145 行）——综合阶段不需要发散，要的是对同一组摘要给出稳定答案。这封 system prompt + user 消息就是主 Agent 的"新上下文"：它由"问题 + 摘要"组成，子 Agent 的完整 trace 一个字都没进来。

> 为什么 user content 里只放摘要、不放 steps？这正是"主上下文只看结论"的落点：如果主 Agent 拿到子 Agent 的全部 trace，子 Agent 读全文时的噪音、试错、中间推理就全进了主上下文——和不用 sub-agent 时把三篇全文堆进来没有本质区别，隔离白做。

### _build_subset_registry：最小权限是"查无此工具"

\`agent_app/subagent.py:150-170\`

\`\`\`python
    def _build_subset_registry(self, allowed_tools: list[str] | None) -> ToolRegistry:
        """从完整 registry 里挑出 allowed_tools 子集，构造受限 registry。"""
        from agent_app.loop import ToolSpec

        if allowed_tools is None:
            return self._full_registry

        sub = ToolRegistry()
        for spec in self._full_registry.specs():
            if spec.name in allowed_tools:
                # 复用原 handler——通过 execute 间接调用
                original = self._full_registry
                sub.register(
                    ToolSpec(
                        name=spec.name,
                        description=spec.description,
                        input_schema=spec.input_schema,
                    ),
                    lambda args, _name=spec.name, _orig=original: _orig.execute(_name, args),
                )
        return sub
\`\`\`

工具子集具体怎么造出来？这段代码给出答案：

- **第 158-159 行，按名字挑**：遍历完整注册表的 \`specs()\`，只有名字在 \`allowed_tools\` 里的工具才登记进新注册表。工具规格（name / description / input_schema）原样复制——子 Agent 看到的工具说明和主 Agent 一样，不会"看不懂"。
- **第 160-168 行，handler 怎么处理？** 工具规格好复制，但 handler 是函数对象，直接复制语义不干净。注释第 160 行写得很直白："复用原 handler——通过 execute 间接调用"。做法是包一层 lambda：\`lambda args, _name=spec.name, _orig=original: _orig.execute(_name, args)\`——每次调用都委托回**原注册表的 \`execute\`** 入口执行，工具的执行逻辑（包括未知工具报错等处理）一份都不用复制。\`_name\`、\`_orig\` 用默认参数捕获，是为了让闭包在循环迭代里绑定到正确的 spec，这是 Python 闭包的老陷阱。
- **效果是结构性的**：白名单之外的 \`shell\`、\`http_get\` 在子 Agent 的注册表里根本不存在。模型就算想调，\`execute\` 也只会返回 "unknown tool"。最小权限不是 system prompt 里"提醒你别乱用"，而是"你查无此工具"。

### run_multi_doc_summary：把三道闸门串成一条流水线

\`agent_app/subagent.py:173-196\`

\`\`\`python
def run_multi_doc_summary(
    doc_paths: list[str],
    *,
    registry: ToolRegistry,
    question: str,
    max_iter: int = 5,
) -> str:
    """Day 14 交付物：主 agent 派多个 sub-agent 各读一篇文档返摘要并综合。

    Args:
        doc_paths: 要读取的文档路径列表。
        registry: 工具注册表（至少含 read_file + count_chars）。
        question: 主 agent 要回答的问题。
    """
    dispatcher = SubAgentDispatcher(registry, max_iter=max_iter)

    tasks = [f"读取文档 {path}，用 200 字总结其核心内容。" for path in doc_paths]
    results = dispatcher.dispatch_parallel(
        tasks,
        allowed_tools=["read_file", "count_chars"],
    )

    return dispatcher.synthesize(results, question=question)
\`\`\`

这是今天的交付物，把前面所有机制串成一条流水线，正好对应开头"读三篇文档总结共同主题"的例子：

1. **第 189 行，受限上下文**：为每篇文档生成一行子任务描述 \`"读取文档 {path}，用 200 字总结其核心内容。"\`——子 Agent 的全部上下文就是这一行。
2. **第 190-193 行，工具子集**：\`allowed_tools=["read_file", "count_chars"]\`——读文档的子 Agent 只有两个工具，没有 shell、没有 http_get。
3. **第 195 行，摘要返回 + 只看结论**：各子 Agent 的独立 loop 跑完，\`synthesize\` 只拿摘要做综合。

docstring 第 184 行还标了前置条件："registry 工具注册表（至少含 read_file + count_chars）"——主 Agent 侧得有这两个工具，子 Agent 才能借到。

## 为什么这样写

- **隔离的四个机制写进模块 docstring 而不是散落在代码里**：\`subagent.py:3-10\` 原话：*"纠偏：Sub-agent 不是'多开几个 Agent'，是独立 messages[] + 工具子集 + 受限上下文 + 摘要式返回"*。这四个机制是一个整体，缺一个都不叫隔离，所以作为设计文档钉在文件最顶部，和易错点清单放一起。
- **默认 system prompt 就把摘要规则写死**：\`subagent.py:78-79\` 原话：*"你是一个子 agent，负责完成一个独立子任务。完成后用不超过 200 字总结你的发现，不要返回完整过程。"*——摘要式返回从子 Agent 的行为边界上就禁止返回完整过程，而不是靠主 Agent 事后大海捞针地筛选。
- **\`dispatch_parallel\` 用顺序执行模拟而不是真并发**：\`subagent.py:113-115\` docstring 原话：*"并行派发多个子任务（顺序执行模拟，真实并行需 asyncio）。本 Day 用顺序执行简化；Day 17 multi-agent 会引入真并行。"*——隔离的收益不依赖真并行，本 Day 先把"上下文干净"讲透，并发复杂度留给 Day 17。
- **综合时主模型 system prompt 明令"只给结论"且 \`temperature=0\`**：\`subagent.py:143\` 原话：*"不要重复子 agent 的过程，只给结论"*，配合第 145 行 \`temperature=0\`——综合阶段要的是对同一组摘要的稳定答案，不是发散重写。
- **工具子集用"名字白名单 + 委托原 execute"实现**：\`subagent.py:160\` 注释原话：*"复用原 handler——通过 execute 间接调用"*——工具执行逻辑不复制第二份，白名单之外的工具在结构上就不存在。最小权限是"查不到工具"，不是"提醒你别用"。

## 本章小结

- 隔离 = 独立 messages[] + 工具子集 + 受限上下文 + 摘要式返回，四件套缺一不可，不是"多开几个 Agent"。
- 每次 dispatch 都现场 new 一个 ReActLoop：子任务上下文从空开始，只有 system prompt + 一行任务描述。
- 工具子集是结构性的：白名单之外的工具在子 Agent 的注册表里根本不存在，最小权限靠结构保证。
- 子 Agent 只输出 \`SubAgentResult\`（任务、摘要、成败、步数），完整 trace 在返回前就被丢弃，主 Agent 的综合只看摘要。
- 这一处是"上下文隔离"的事——后面 Day 17 的 multi-agent 协作只是把这种"派发-摘要-综合"的调用组织成真并行和更复杂的协作网络，**核心没变复杂**。

## 一句话边界

- 隔离靠四点：独立 messages[]、工具子集、受限上下文、摘要式返回。
- 子 Agent 共享主上下文 = 没隔离；给全部工具 = 没最小权限。
- 摘要式返回，别把子 Agent 的完整过程塞回主上下文。
- 简单工具别开 sub-agent（性能崩），只给复杂子任务开。

## 读完应该能用自己的话回答

1. Sub-agent 解决什么问题？不用它会怎样？
2. 隔离靠哪四点实现？为什么独立 messages[] 是基础？
3. 为什么子 Agent 只能拿工具子集，不能拿全部工具？
4. 子 Agent 该返回什么、不该返回什么？为什么？
5. 什么任务适合开 sub-agent，什么任务不适合？

## 想深入

多 agent 协作模式、生成者/验证者分离、协调成本等，见八股·06 多智能体。

## 交给 AI 的问题

\`\`\`text
我正在学 Sub-agent。请解释：1) Sub-agent 解决什么问题；2) 隔离靠哪几点实现；3) 为什么子 Agent 只能拿工具子集；4) 子 Agent 该返回什么；5) 什么任务适合开 sub-agent。用"读三篇文档总结共同主题"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. 隔离基础**

Sub-agent 实现上下文隔离的基础是？

A. 给子 agent 共享主 agent 的 messages 列表，但在末尾追加分隔符标记子任务边界
B. 每个子 agent 开一个独立 ReActLoop，使用独立的 messages[]，不污染主对话
C. 子 agent 复用主 agent 的 messages，但通过 system prompt 告诉它忽略历史消息
D. 把主 agent 的 messages 复制一份给子 agent，复制后主 agent 清空自己的 messages

**Q2. 工具子集**

给子 agent 分配工具时，正确的做法是？

A. 只给任务所需的工具子集，如读文档的子 agent 只给 read_file + count_chars
B. 把主 agent 的全部工具都注册给子 agent，保证它任何时候都能调用
C. 先给子 agent 全部工具，运行中按调用失败情况逐步回收权限
D. 子 agent 不需要工具，所有外部操作都由主 agent 代为执行后传入

**Q3. 返回格式**

子 agent 完成子任务后向主 agent 返回结果时，本 Day 采用的做法是？

A. 返回子 agent 的完整 steps trace，让主 agent 自行从中提取结论
B. 返回子 agent 调用过的所有工具原始输出，主 agent 拼接后再次推理
C. 返回子 agent 的 messages 全文，主 agent 把它 append 到自己的 messages 里
D. 返回不超过 200 字的摘要，主 agent 的 synthesize 只看摘要不看 steps

**Q4. 何时开 sub-agent**

关于何时该开 sub-agent，下列判断正确的是？

A. 任何工具调用都应开 sub-agent 以保证隔离，包括单次 get_time 和 calculator
B. 只有涉及网络请求的工具才需要开 sub-agent，本地工具一律直接调
C. 只有长文档分析、代码 review、并行检索等复杂子任务才开 sub-agent，单次简单工具直接调
D. sub-agent 的开销与直接调工具相同，是否开 sub-agent 只看代码风格偏好

### 开放题（1 道）

**Q5. 隔离失效诊断**：你让主 agent 派 3 个子 agent 分别读 3 篇长文档并综合回答。运行后发现两个症状：(1) 主 agent 的最终回答里混入了子 agent 读到的无关细节；(2) 整体耗时是单 agent 的 4 倍。

1. 这两个症状分别最可能违反了 sub-agent 的哪两条隔离原则？
2. 你会分别如何修复（涉及 messages、工具、返回格式、sub-agent 触发判断）？

≥150 字。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

**Q1. 答案：B**

隔离的基础是每个子 agent 开一个独立 ReActLoop、使用独立的 messages[]，不污染主对话；父 agent 只接收摘要结果。

- A 错：共享 messages 列表等于没有隔离，分隔符不能阻止上下文互相影响。
- C 错：靠 system prompt 让模型"忽略历史"不可靠，历史消息仍会影响其判断。
- D 错：复制后清空主 agent 的 messages 会丢失主对话上下文，且复制本身也没隔离。

**Q2. 答案：A**

只给任务所需的工具子集（最小权限）。读文档的子 agent 只需 read_file + count_chars，不需要 shell 或 http_get。

- B 错：给子 agent 全部工具等于没有最小权限隔离，子 agent 可能越权操作。
- C 错：先给全部再运行中回收不合理，权限应在派发时确定。
- D 错：子 agent 可以有自己的工具子集并独立执行，不必所有操作都回主 agent 代办。

**Q3. 答案：D**

子 agent 返回不超过 200 字的摘要，主 agent 的 synthesize 只看摘要、不看子 agent 的 steps，避免过程信息污染主上下文。

- A 错：返回完整 steps trace 会污染主上下文，主 agent 被无关过程淹没。
- B 错：返回所有工具原始输出同样冗余且污染，还要求主 agent 二次推理。
- C 错：把子 agent messages 全文 append 到主 agent messages，直接破坏隔离。

**Q4. 答案：C**

只有长文档分析、代码 review、并行检索等复杂子任务才开 sub-agent；单次简单工具（get_time、calculator）直接调。sub-agent 有独立 loop 的开销（多次 LLM 调用），不该用于简单操作。

- A 错：每个简单工具都开 sub-agent 会让性能崩，独立 loop 的多次 LLM 调用开销过大。
- B 错：是否开 sub-agent 看任务复杂度（是否需要多次工具调用 + 推理），而非是否涉及网络请求。
- D 错：sub-agent 有独立 loop 的开销，与直接调工具的开销明显不同，不是风格偏好问题。

### 开放题 Q5 参考要点（rubric）

**0 分**：只笼统说"优化一下"或"减少 agent 数量"，未对应具体隔离原则。

**1 分**：能识别其中一条症状对应的原则（如"回答混入无关细节→违反摘要式返回"），但另一条症状和修复方案不完整。

**2 分**：完整覆盖两条——(1) 主回答混入无关细节→违反"摘要式返回 / 主 agent 只看结论"原则，修复：子 agent system prompt 要求 ≤200 字摘要、synthesize 只读 summary 不读 steps/messages；(2) 耗时 4 倍→可能违反"简单工具别开 sub-agent"或子 agent 工具子集过大/上下文过多导致 loop 轮数膨胀，修复：核查每个文档是否真需要独立 loop、把工具子集缩到最小权限、确认没有为单次简单操作开 sub-agent。

关键判断：隔离是"独立 messages + 最小权限工具 + 摘要返回"三件套缺一不可；开 sub-agent 的判断标准是任务复杂度而非"想要隔离"本身。
`,Tf=`# 术语表 · Week 2

> Week 2 新增术语，按"必须懂 / 只需听过 / 后面再学"分级。
> Week 1 术语见 week1-reading/配套指南/术语表.md。

## 必须懂

| 术语 | 一句话解释 | Day |
| --- | --- | --- |
| Agent Loop | 让模型反复"推理→调工具→观察"的控制结构，带终止信号和错误恢复 | 8 |
| max_iter | Agent Loop 的最大迭代次数，防止无限循环烧 token | 8 |
| observation | 工具执行结果，喂回给模型作为下一步推理的输入 | 8 |
| ToolRegistry | 工具注册表，加工具不用改循环，只需 register | 9 |
| dispatch map | {tool_name: handler} 字典，工具分发的核心 | 9 |
| Shell 白名单 | 只允许命令前缀在预设列表内，防 prompt injection 利用 | 9 |
| TodoWrite | 让模型把计划显式写出来的软约束，不是硬性任务管理器 | 10 |
| WIP=1 | 同时只做一件事，完成率提升 37%（lecture-07） | 10 |
| 短期记忆 | 当前会话的 messages 列表，loop 持有 | 11 |
| 长期 KV 记忆 | SQLite 持久化的结构化键值（用户偏好、上次指标） | 11 |
| 长期语义记忆 | Chroma 向量库，语义检索历史对话/SOP | 11 |
| 记忆投毒 | 未审查的写入污染记忆库，导致后续召回错误 | 11 |
| 上下文 ≠ 记忆 | 上下文是每次调用拼进 messages 的内容；记忆是跨调用持久化的 | 12 |
| compaction | 上下文压缩，三种策略：截断/摘要/召回 | 12 |
| StateGraph | LangGraph 的有向图，节点是函数，边是条件 | 13 |
| Router 节点 | 根据输入意图路由到不同处理节点的条件分支 | 13 |
| Sub-agent | 独立 messages[] + 工具子集 + 摘要返回的子任务执行器 | 14 |

## 只需听过

| 术语 | 一句话解释 | Day |
| --- | --- | --- |
| π 运行底座 | OpenClaw 的事件驱动底座，替代同步 while-True 循环 | 8 |
| Harness 三件套 | Agent Loop + Tool Layer + Context Layer | 8 |
| HITL | Human-In-The-Loop，关键节点暂停等待人工确认 | 13 |
| Map-Reduce 模式 | 并行执行多个子任务再汇总 | 13 |
| Checkpointer | LangGraph 的状态持久化机制，跨重启可恢复 | 13（Week 3 深入） |

## 后面再学

| 术语 | 一句话解释 | 何时学 |
| --- | --- | --- |
| MCP 协议 | JSON-RPC over stdio/SSE 的工具通信协议 | Week 3 Day 16 |
| Skill 系统 | 带 frontmatter + 工作流的"剧本"，按需加载 | Week 3 Day 15 |
| A2A 协议 | 多 Agent 互联协议（各家草案） | Week 3 Day 17 |
| 可观测性三件套 | Logs / Metrics / Traces | Week 3 Day 21 |
`,Rf=`# 故障排查 · Week 2

> 按 Day 和症状索引。卡 20 分钟先来这里查，再看保底路径。

## Day 8 · ReAct Loop

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| Loop 死循环烧 token | 没设 max_iter 或设太大 | \`ReActLoop(registry, max_iter=8)\`，默认 8 |
| 工具异常导致 loop 崩 | 异常直接 raise，没转 observation | 用 try/except 包住工具执行，异常转 \`ToolResult(ok=False, error=...)\` |
| 模型不调工具直接瞎答 | system prompt 没说清何时该调工具 | 在 system 里写明"需要外部信息时调用工具" |
| \`tool_call_id\` 不匹配 | OpenAI 要求 assistant 的 tool_calls 和 tool 结果的 tool_call_id 配对 | 见 Day 8 正文 §错误恢复 |

**保底路径**：回到第 8 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。

## Day 9 · 多工具

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| shell 执行了 \`rm -rf /\` | 没做白名单 | \`make_shell_handler(whitelist=["ls","cat","wc","echo"])\` |
| grep_files 读到工作目录外 | rglob 跟随 symlink | 用 \`os.walk(followlinks=False)\` + \`path.is_symlink()\` 跳过 |
| http_get 超时挂起 | 没设 timeout | \`make_http_get_handler(timeout=10.0)\` |
| 工具结果太长撑爆上下文 | 没截断 | \`max_chars=4000\` 参数 |
| \`@tool\` 装饰器在 for 循环里 late-binding | v1 闭包 bug | 用工厂函数显式捕获（见 Day 9 正文） |

**保底路径**：回到第 9 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。

## Day 10 · TodoWrite

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| 模型不主动用 todo_write | system prompt 没引导 | 在 system 里加"复杂任务先用 todo_write 列步骤" |
| todo 状态卡在 in_progress | 模型忘了更新 | 每步循环后把 \`manager.summary()\` 喂回模型 |
| 强制按序执行失去灵活性 | 把 todo 当硬约束 | todo 是软约束，允许模型自由选下一个 |

**保底路径**：回到第 10 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。

## Day 11 · Memory

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| 简单 KV 查询也走向量库 | 没区分层级 | 用 \`KVMemoryStore\` 做结构化查询，\`ChromaMemoryStore\` 做语义检索 |
| 跨会话记不住 | KV 用了 \`:memory:\` | 传 \`db_path="agent.db"\` 持久化到文件 |
| 记忆被投毒 | 未审查的自动写入 | \`ThreeLayerMemory\` 只接受显式 \`remember()\`，不做自动总结 |
| Chroma embedding 下载失败 | 网络问题 | 离线/无网环境用 mock embedding，生产配 \`EMBEDDING_API_KEY\` |

**保底路径**：回到第 11 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。

## Day 12 · Context 压缩

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| 压缩后模型行为漂移 | system 约束被压丢了 | \`truncate_messages\` 先抽 system 再丢 |
| 压缩太激进丢连贯性 | keep_recent 太小 | \`keep_recent=6\`（默认），至少保留最近 3 轮 |
| summarize 调模型失败 | API 不可用 | \`summarize_messages\` 自动降级为 truncate |
| 没触发压缩 | token_threshold 太高 | \`compact_if_needed(msgs, token_threshold=2000)\` |

**保底路径**：回到第 12 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。

## Day 13 · LangGraph

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| \`ImportError: langgraph\` | 没装 | \`uv pip install langgraph\` |
| Router 路由不准 | 用 LLM 判断意图 | 优先规则分类（关键词匹配），LLM 不稳定 |
| 节点函数副作用太多 | 在节点里改全局状态 | 用 WorkflowState dataclass 传递，节点返回新 state |
| invoke 返回 dict 不是 dataclass | LangGraph 序列化 | \`result["answer"]\` 而非 \`result.answer\` |

**保底路径**：回到第 13 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。

## Day 14 · Sub-agent

| 症状 | 原因 | 解决 |
| --- | --- | --- |
| 子 agent 共享主上下文 | 没用独立 messages[] | \`SubAgentDispatcher.dispatch()\` 每次开独立 ReActLoop |
| 简单工具也开 sub-agent | 滥用 | 简单工具直接调，只有长文档/代码 review 才开 |
| 子 agent 返回完整 trace | 污染主上下文 | system prompt 要求"只返 200 字摘要" |

**保底路径**：回到第 14 天正文的代码走读，对照「为什么这样写」一节核对你的理解；结合本节现象描述判断问题归属。
`,Pf=`# 周末复盘 · Week 2

> 完成本周概念复盘后，做整合推演题与整合自测。

---

## 概念掌握清单

逐项自查：能用自己的话讲清（对着家人/同事复述一遍，而不是"好像见过"），才算 Week 2 达标。代码已完整嵌入每篇正文，拿不准就回去重读对应"这个概念是什么"和"代码走读"。

- [ ] Day 8：能讲清 ReAct Loop 的五块——messages / tool registry / model call / tool executor / stop condition 各干什么，少了 stop condition 会怎样；工具执行报错为什么该转成 observation 继续，而不是抛异常打断循环
- [ ] Day 9：能讲清"加工具不改循环"靠什么实现（注册表）；三类工具的风险分级与防护——shell 为什么必须白名单、grep_files 怎么防 symlink 越界、http_get 为什么盯死超时与截断
- [ ] Day 10：能讲清 TodoWrite 为什么是软约束不是硬约束，计划与执行分离解决什么问题，模型偏离计划时该怎么做
- [ ] Day 11：能讲清三层记忆各存什么、各适合什么（短期 messages / 长期 KV / 长期语义）；为什么写入必须显式审查、不能自动总结；跨会话召回要满足什么条件
- [ ] Day 12：能讲清上下文与记忆的区别；为什么"从最旧的开始丢"是错的、保 system 为什么是铁律；摘要失败为什么要降级而不是崩掉 loop
- [ ] Day 13：能讲清图编排的心智模型（节点是纯函数、边是路由表、state 是唯一的信使）；Edge 条件为什么优先用规则而不是 LLM；图与 Loop 是分工不是替代
- [ ] Day 14：能讲清子任务隔离靠什么实现（独立 messages[] + 工具子集 + 受限上下文 + 摘要式返回）；什么任务才值得开 sub-agent，简单工具为什么不该开
- [ ] 每篇正文的课后习题（4 选择 + 1 开放）做完且错 ≤2 题，开放题写够字数；做完再翻"答案与解析"

---

## 整合推演题（二选一）

不运行任何代码，把答案写在纸上或 notes 里，重点是"讲清楚机制"而不是"写对代码"。

### A. 串联设计：loop + tools + memory + workflow

设计一个诊断 Agent（只写设计方案，不写代码）：

1. **底座**：说明 Day 8 的 ReActLoop 和 Day 9 的工具注册表各提供什么，为什么"加工具不改循环"；三类工具里哪类最危险、默认怎么限制
2. **记忆**：说明怎么接入三层记忆——用户问"上次我关心的指标"时，消息来了先发生什么（召回时机）、写入发生在什么时候（显式写入）、跨会话要满足什么条件（长期层落到哪里）
3. **路由**：说明怎么用图编排做 Router——"查询类"走哪条路、"计算类"走哪条路；为什么路由判断用规则而不是 LLM；图和 Loop 各管哪一层

**推演并写出判断标准**：

- 第 2 次问"上次我关心的指标"，预期发生什么（从哪层召回、拼到哪里、用户看到什么）；如果召回为空，列出 2-3 种可能原因和排查顺序
- 一个查询类问题被错误路由到计算类，最可能错在哪一步；不运行代码，怎么验证路由是否符合预期（看什么信号）

### B. 推演评测：loop 遇到 bad case

不运行代码，纯推演：

1. **构造**：设计 1 个 bad case（如工具返回错误信息、命令被白名单拒绝、工具超时），说明你会选哪类工具、喂什么输入，以及它为什么恰好能检验"错误被转成 observation 并恢复"
2. **推演**：工具返回失败后，loop 下一步会发生什么——模型看到什么、它应该做什么（换命令 / 换工具 / 直接回答）；如果 loop 没能恢复，最可能缺了 Loop 五块中的哪一块
3. **归因框架**：写出三档分类的判断标准——prompt 问题 / 工具问题 / 模型能力问题，各举一个特征信号和对应的修复方向
4. **验收标准**：怎样才算"修复成功"（描述预期行为，而不是"跑一遍看结果"）

---

## 自我复盘表

| Day | 学到什么 | 没做到什么 | 下一步 |
| --- | --- | --- | --- |
| 8 | | | |
| 9 | | | |
| 10 | | | |
| 11 | | | |
| 12 | | | |
| 13 | | | |
| 14 | | | |

> 第三列写出 ≥3 条真实弱项。

---

## 整合自测

打开 [\`../自测题/第二周-整合自测.md\`](../自测题/第二周-整合自测.md)，完成 3 道概念串联题与 7 题退出自检（合上文档自答，答对 6 题算达标）。这一步把 Day 8-14 的零散概念真正连成一条线。

---

## 退出标准

1. 概念掌握清单逐项能用自己的话讲清（每篇课后习题错 ≤2 题后再复述一遍）
2. 整合推演题（A 或 B）完成，答案覆盖数据流与判断标准
3. 整合自测完成，退出自检答对 ≥6 题
4. 60 秒内向陌生人讲清："第二周做了什么、第三周准备做什么、为什么这样选"

任何一项做不到，先在第二周再加 1-2 天，不要为了进度跳进 Week 3。
`,Lf=`# 第二周整合自测

> 串联 Week 2 全部内容：loop + tools + memory/context + workflow + subagent。
> 做完合上文档，能在 60 秒内向陌生人讲清本周学了什么。

## 一、概念串联题（3 道）

### C1. 从 Loop 到 Workflow 的演进

请按顺序解释：为什么先有 Day 8 的 ReActLoop，再到 Day 13 的 LangGraph 工作流？工作流解决的是 Loop 解决不了的什么问题？二者是替代关系还是协作关系？

### C2. Memory 与 Context 的边界

Day 11 的 Memory 和 Day 12 的 Context Engineering 都涉及"信息管理"，但它们的存储位置、生命周期、丢失后果完全不同。请用表格对比，并说明为什么"压缩上下文不等于删除记忆"。

### C3. 工具、Todo、Sub-agent 三种"增强"

Day 9 的工具、Day 10 的 TodoWrite、Day 14 的 Sub-agent 都挂到 Day 8 的 Loop 上，但它们解决的问题不同。请分别说明三者解决什么问题，以及为什么不能互相替代。

## 二、整合推演题（二选一）

### A. 串联：loop + tools + memory + workflow

用文字画出诊断 Agent 的架构：以 Day 8 loop + Day 9 tools 为底座，接入 Day 11 memory，用 Day 13 workflow 做 Router。请依次写出：

- **各模块怎么接线**：workflow 的 Router 挂在 loop 的哪个环节，下游接 memory_recall、faq、calc 三个节点，什么输入走哪条边（边条件用规则还是 LLM），失败/异常回退到哪；
- **trace 里应出现哪些步骤**：按顺序推演 3 个问题（一个查询类、一个计算类、一个涉及"上次关心的指标"）各自的 trace，并说明为什么会出现 router → memory_recall → {faq|calc} 的步骤链；
- **记忆召回在什么时机触发**：第 2 次问"上次关心的指标"时，KV 召回在 Router 分流之前还是之后触发？召回到的内容以什么形式拼进哪一步的 prompt？

验收（对照检查）：能画出完整的节点—边接线图；3 个问题的期望 trace 完整且都含 router → memory_recall → {faq|calc}；能说清第 2 次提问时记忆召回的确切时机与拼接方式。

### B. 评测：给 Day 8 loop 设计 bad case 归因方案

构造 5 个 bad case 场景（其中至少 1 个是"工具返回错误"），对每个场景写出：

- **怎么复现**：输入什么问题、期望走哪条路径、坏点出现在哪一步；
- **三档归因**：按 prompt / 工具 / 模型能力判断最可能是哪一档的问题，并说明依据（例如"工具返回错误未被转成 observation"归工具档）；
- **修复后怎么验证**：修复后用同一输入复测，看 trace 里出现什么现象才算恢复（例如错误被转成 observation 并继续往下走）。

验收（对照检查）：5 个场景齐全且至少 1 个是"工具返回错误"；每个场景都有复现步骤、三档归因与验证方式；"工具返回错误"场景能说明 loop 如何把错误转成 observation 并恢复。

## 三、退出自检（合上文档自答）

1. Agent Loop 的三种终止信号分别是什么？缺了 max_iter 会怎样？
2. shell 工具为什么必须白名单？grep_files 防越界用 os.walk 的哪个参数？
3. TodoWrite 为什么是软约束不是硬约束？WIP=1 让完成率提升多少？
4. 三层记忆分别存什么？跨会话召回 KV 要传什么参数？
5. 压缩上下文时 system message 为什么必须保留？summarize 失败要降级成什么？
6. LangGraph 的 Edge 条件为什么优先用规则不用 LLM？invoke 返回 dict 还是 dataclass？
7. Sub-agent 隔离的三件套是什么？简单工具为什么不该开 sub-agent？

≥7 题答对 6 题算 Week 2 概念达标。
`,If=`# AI Agent 三十天学习计划 · 第三周阅读包

> **版本**：v3.1（2026-08-10，作者 Helson）
> **publication_mode**：member（付费群成员分发版，不含本机密钥、缓存路径或生产系统地址）
> **本周定位**：概念 + 代码一体。把核心机制升级成可组织、可扩展、可评测、可观测、可审计的工程雏形，每篇正文 = 概念讲解 + 代码走读 + 课后习题（含答案）。
> **与八股的关系**：本周正文讲「是什么 + 怎么实现」（L1+L2）；「为什么 / 权衡 / 面试追问」（L3）见 \`agent核心模块讲解（八股）\`。
> **前周依赖**：承接 Week 2 的 Agent Loop / Tools / TodoWrite / Memory / Context / Workflow / Sub-agent。
>
> **v3.1 变更**：独立代码包（\`agent-app/\`）已删除，代码以逐字引用形式完整嵌入每篇正文的"代码走读"（带 \`文件:行号\` 标注），纯阅读库，无需安装环境、无需 API key。
> **v3.0 变更**：每日正文改为「概念 → 代码走读 → 课后习题 → 答案」一体格式，对齐 pi-book 体例；习题与答案从 \`自测题/\` 折入正文。

---

## 本周概念地图

本周 7 天把「能跑的 Agent」做成「可交付的 Agent」：补上工程外壳、能力封装、外部协议、分工、评测、安全、连续性。

| 天数 | 概念 | 解决什么 | 代码走读 |
| --- | --- | --- | --- |
| **Day 15** | Harness 工程化整理 | 模型之外的工程外壳，让系统可交接可追溯 | \`README.md\` / \`docs/ARCHITECTURE.md\` / \`configs/default.yaml\` / \`prompts/diagnosis_system.md\` |
| **Day 16** | Skill 系统 | 把一类专业工作流封装成可触发的能力包 | \`agent_app/skill_runtime.py\` + \`skills/diagnosis-reviewer/SKILL.md\` |
| **Day 17** | MCP 协议 | 让外部工具以标准协议被发现和调用 | \`agent_app/mcp_adapter.py\` + \`mcp_servers/diagnosis_tools.py\` |
| **Day 18** | Multi-agent 诊断分工 | 把复杂任务拆给不同角色协作 | \`agent_app/multi_agent.py\` |
| **Day 19** | 评测体系 | 用 golden dataset + 评分器批量测 Agent | \`agent_app/evaluator.py\` + \`eval/\` |
| **Day 20** | 可观测性/HITL/安全护栏 | 可还原、可暂停、可拒绝 | \`agent_app/observability.py\` + \`guardrails.py\` |
| **Day 21** | 会话连续性与整合复盘 | 任务能中断恢复 + 串成端到端 demo | \`agent_app/session.py\` + \`docs/week4-integration-plan.md\` |

> 每篇正文结构固定：本篇解决一个问题 -> 一个例子 -> 这个概念是什么（L1）-> 代码走读（代码完整嵌入，逐字引用 + \`文件:行号\`）-> 为什么这样写 -> 本章小结 -> 一句话边界 -> 读完能用自己的话回答 -> 想深入 -> 交给 AI 的问题 -> 课后习题 -> 答案与解析。

---

## 资源全景


\`\`\`
week3-reading/
├── README.md
│
├── 每日正文/                              ← 7 天主线（每篇自包含：概念 + 代码走读 + 习题 + 答案）
│   ├── day15-Harness工程化整理.md
│   ├── day16-Skill系统.md
│   ├── day17-MCP协议.md
│   ├── day18-Multi-agent诊断分工.md
│   ├── day19-评测体系.md
│   ├── day20-可观测性HITL安全护栏.md
│   └── day21-会话连续性与整合复盘.md
│
├── 配套指南/
│   ├── 术语表.md
│   ├── 故障排查.md
│   └── 周末复盘.md
│
└── 自测题/
    └── 第三周-整合自测.md                 # 周末整合自测（每日习题已折入每日正文）
\`\`\`

---

## 跨天依赖图

\`\`\`
Week 2 已有能力
  ├─→ Day 15 Harness 骨架（工程外壳）
  │     ├─→ Day 16 Skill（流程化复用诊断工具）
  │     └─→ Day 17 MCP（工具服务化）
  │           └─→ Day 18 Multi-agent（Router + Worker 调用工具能力）
  │                 ├─→ Day 19 Eval（批量跑多 Agent 诊断结果）
  │                 ├─→ Day 20 Observability / Guardrails / HITL
  │                 └─→ Day 21 Session + end-to-end demo
\`\`\`

> **关键依赖**：第三周在第二周基础上增加新能力，不推翻核心模块；Multi-agent 只在诊断任务天然可分解时使用。

---

## 使用指南

### 每天的阅读动作

1. 读正文"本篇解决一个问题"和"一个例子"，建立直觉。
2. 读"这个概念是什么"（L1），理解概念和机制。
3. 读"代码走读"：代码已完整嵌入正文，逐块看懂实现，引用带 \`文件:行号\` 标注。
4. 对照"一句话边界"检查自己有没有踩坑。
5. 用自己的话回答"读完应该能用自己的话回答"的问题。
6. 做文末"课后习题"，**做完再翻"答案与解析"**。
7. 想深挖"为什么/权衡"见八股对应模块。

---

## 进入 Week 4 的阅读完成标志

满足以下全部才算 Week 3 真正读完：

1. 能用自己的话讲清 Harness / Skill / MCP / Multi-agent / Eval / Observability/HITL/护栏 / Session 各是什么、怎么实现的、彼此关系。
2. 每篇正文的课后习题做完且错 ≤2 题（开放题写够字数）。
3. \`配套指南/周末复盘.md\` 的整周复盘完成（含 \`自测题/第三周-整合自测.md\`）。
4. 你能在 60 秒内讲清楚：这个诊断 Agent 如何接收问题、调用工具、分工分析、生成结论、被评测和被审计。

## 本周最重要的判断力（贴在显示器上）

- Harness 不是工具合集，而是让 Agent 状态、提示词、配置、评测和运行证据可重建的工程外壳。
- Skill 不是长 Prompt，而是带触发条件、步骤、边界、参考资料和交付格式的可复用能力。
- MCP 不是让模型变强，而是让外部工具服务能被 Agent 用统一协议发现和调用。
- Multi-agent 不是越多越高级；只有任务可并行、上下文需隔离、角色边界清楚时才值得拆。
- Eval 要早于优化，否则所有"提升"都只是体感。
- 可观测性不是上线后补日志，而是从第一版开始记录每次决策、工具调用、错误和成本。
- HITL 的价值不是让人替模型想，而是把高风险动作的最终责任留在人手里。

## 阅读包定位声明

本阅读包是 v3 学习计划第三阶段的"智能诊断 Agent 工程化验证版"。它保留 v3 的 Skill / MCP / Multi-agent / Harness / 评测 / 可观测主线，同时吸收 v1 的诊断场景验证、安全和性能意识，更适合承接 Week 1/2 已定稿材料。想深挖"为什么/权衡/面试追问"见 \`agent核心模块讲解（八股）\`。
`,Mf=`---
title: Day 15 Harness 工程化整理
tags:
  - week3/day15
  - concept
  - code
  - exercise
---

# Day 15：Harness（模型之外的工程外壳）

> 阅读约 35 分钟 ｜ 前置：[[day08-从零写ReAct-Loop]] ~ [[day14-Subagent子任务隔离]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`README.md\`、\`docs/ARCHITECTURE.md\`、\`configs/default.yaml\`、\`prompts/diagnosis_system.md\`（完整内容已嵌入下方代码走读，无运行入口，随文核对）

## 本篇解决一个问题

Week 2 结束时，你已经有了 Loop、Tools、TodoWrite、Memory、Context、Workflow、Sub-agent。它们单独都能跑，但还不像一个可交接、可扩展、可评测的工程：新同学打开目录不知道入口在哪；模型出错不知道该查 Prompt 还是工具还是配置；后续要接新能力也找不到挂载点。

今天要看清 Harness 是什么：它是模型之外的工程外壳，让模型在一个可恢复、可验证、可审计的系统里行动，而不是在裸仓库里瞎摸索。

**一句话主旨**：把"系统长什么样、怎么跑、约定在哪"写进仓库，让新人和 Agent 读同一份文档就能接手。今天的代码走读就按"入口 → 协作 → 参数 → Prompt"四个文件展开。

## 一个例子

同一个模型，两种工作环境：

\`\`\`text
裸仓库：模型大量上下文浪费在探索目录、猜约束、修环境、自说自话声明完成
有 Harness 的仓库：模型沿明确入口、工具边界、验证命令和状态记录推进任务
\`\`\`

差别不在模型，在模型之外的那层工程外壳。这就是 Harness。

## 这个概念是什么

**Harness** 是 LLM 之外的执行环境：给模型配上工具、环境、状态、记忆、反馈等工程能力的外壳。一个生动的说法：LLM 是大脑，Harness 是身体和神经系统，Agent 是有职业的人（大脑 + 身体 + 针对特定工作的技能和判断标准）。

Harness 要解决的核心问题不是"让模型更聪明"，而是让模型在真实工程环境里少犯不可复盘的错。

一个可用 Harness 至少有五个子系统：

| 子系统 | 解决什么 | 本课程的落点 |
|---|---|---|
| 指令 Instruction | Agent 该遵守什么规则 | README、prompts |
| 工具 Tools | Agent 能调哪些动作 | Week 2 的 ToolRegistry |
| 环境 Environment | 怎么运行、配置在哪 | pyproject、.env、configs |
| 状态 State | 跨步骤/跨会话怎么延续 | Week 2 memory、Day 21 session |
| 反馈 Feedback | 怎么知道做得对不对 | tests、eval、日志 |

缺一个，Agent 都会"看起来能跑但不可交付"：只有 Prompt 没测试会提前宣布完成；只有工具没边界会越权；只有会话没 trace 复盘时不知道错在哪。

## 代码走读：跟新人走一遍工程骨架

前几天的代码走读都是 Python 文件，今天的"代码"是四个文档。为什么？因为 Day 15 整理的对象是骨架本身——骨架没有行为，只有约定，而约定住在文档里。走读顺序就模拟一个新人（或一个新 Agent）认识仓库的顺序：README（入口）→ ARCHITECTURE（协作）→ configs（参数）→ prompts（Prompt）。

路径说明：下文四个文档（README、ARCHITECTURE、configs/default.yaml、prompts/diagnosis_system.md）的完整内容已嵌入本篇，代码块上方的 \`文件:行号\` 标注为出处，可对照正文逐行核对；README 里的目录树以 \`agent-app/\` 为根。

### Day 15 做的事：把 Week 2 整理成工程骨架

Day 15 不是再写一个框架，而是把已有的机制整理成可交接的骨架：

- **README**：入口说明，让新人和 Agent 知道项目目标、运行方式、目录结构。
- **ARCHITECTURE**：用文字架构图说明 Loop/Tools/Memory/Workflow/Sub-agent 怎么协作。
- **configs**：把运行参数、阈值、路径从代码中外置。
- **prompts**：把系统 Prompt 作为可版本化资产管理。

这四件事对应下面四站。

### 第一站：README —— 入口说明

\`README.md:1-28\`

\`\`\`\`markdown
# Week 3 Agent App

> 第三周阅读包配套的参考代码快照，承接 Week 2 的核心机制，并新增工程化验证层。
> 目标是把智能诊断 Agent 从“可运行练习代码”升级为“可组织、可扩展、可评测、可观测、可审计”的工程雏形。

> 本目录用于阅读和对照，不要求成员解压后直接运行。以下命令只提供给希望做本地验证的同学。

## 用法

\`\`\`bash
# 1. 安装依赖（Week 3 继续支持离线 mock 验证）
uv venv --python 3.11
uv pip install -e ".[dev]"

# 2. 配置 .env（继承 Week 1）
cp .env.example .env
# 编辑 .env，填入 MODEL_API_KEY / MODEL_BASE_URL / MODEL_NAME

# 3. 离线健康检查（不依赖真实 API key）
uv run python -m agent_app.llm --check --offline

# 4. 全量测试
uv run python -m pytest -q

# 5. 第三周新增能力验证
PYTHONPATH=. python eval/run_eval.py
PYTHONPATH=. python -m agent_app.week3_demo
\`\`\`
\`\`\`\`

逐块看：

- **第 3-4 行引用块**：两句话定义仓库定位——"参考代码快照"和"工程雏形"。一个词给身份（承接 Week 2 的核心机制），一个词给目标（升级成"可组织、可扩展、可评测、可观测、可审计"的工程雏形）。新人的第一个问题"这是什么"在这里被回答。
- **第 6 行**：明确"不要求成员解压后直接运行"——先划清边界，再给愿意验证的人留命令。
- **第 10-27 行用法**：五步，从装依赖（第 12-13 行）到配置（第 16-17 行）到验证（第 20、23、26-27 行）。注意验证路径全部离线：\`--check --offline\`（第 20 行）、\`pytest -q\`（第 23 行）、\`run_eval.py\`（第 26 行）——**第三周的工程判断不需要真实 API key 就能练**。

> 为什么把"不要求运行"写在最前面？因为这是阅读包不是实验课：文档第一职责是回答"我要不要跑、怎么跑"，而不是让人装完环境才发现不需要。命令照给，但不强迫——这是"可验证"与"必须验证"的区别。

接着看目录树——仓库的"地图"：

\`README.md:30-65\`

\`\`\`\`text
## 这个 agent-app 提供了什么

\`\`\`
agent-app/
├── pyproject.toml                    # Week 3 依赖（继承 Week 2）
├── .env.example / .gitignore
├── configs/default.yaml              # Day 15: 工程化配置
├── prompts/diagnosis_system.md       # Day 15: 诊断系统 Prompt 资产
├── docs/ARCHITECTURE.md              # Day 15: 架构说明
├── docs/week4-integration-plan.md    # Week 4: 服务化与真实接入准备
├── skills/diagnosis-reviewer/        # Day 16: 诊断复核 Skill
├── mcp_servers/diagnosis_tools.py    # Day 17: 轻量 MCP 教学 server
├── eval/                             # Day 19: Golden Dataset + baseline + trace
├── agent_app/
│   ├── __init__.py
│   ├── llm.py                        # ★ call_model() + --check --offline（Week 1 继承 + 增强）
│   ├── cost.py                       # token → 估算成本（Week 1 继承）
│   ├── day01_hello_llm.py            # Week 1 模块（继承）
│   ├── loop.py                       # Day 8: ReActLoop + ToolRegistry（13 测试）
│   ├── tools/                        # Day 9: registry + http_get/grep_files/shell（20 测试）
│   ├── adapter/                      # Day 9: anthropic_adapter（可选）
│   ├── todo.py                       # Day 10: TodoManager + todo_write（13 测试）
│   ├── memory.py                     # Day 11: 三层记忆（17 测试）
│   ├── compact.py                    # Day 12: 上下文压缩（16 测试）
│   ├── workflow.py                   # Day 13: LangGraph StateGraph（14 测试）
│   ├── subagent.py                   # Day 14: SubAgentDispatcher（8 测试）
│   ├── skill_runtime.py              # Day 16/21: Skill 元信息读取 + 输出契约校验
│   ├── mcp_adapter.py                # Day 17: MCP tool → ToolRegistry
│   ├── multi_agent.py                # Day 18: Router + Worker + Reviewer
│   ├── evaluator.py                  # Day 19: Golden Dataset judge
│   ├── observability.py              # Day 20: 结构化事件记录
│   ├── guardrails.py                 # Day 20: 安全护栏 + HITL
│   ├── session.py                    # Day 21: SQLite session store
│   └── week3_demo.py                 # Day 21: 端到端 demo
└── tests/                            # Week 2 + Week 3 离线测试
\`\`\`
\`\`\`\`

- **第 36-38 行**：Day 15 的四个产出挂在树根下（\`configs/\`、\`prompts/\`、\`docs/ARCHITECTURE.md\`）——"今天整理的东西在哪"一眼可见，这就是挂载点。
- **第 45 行**：\`llm.py\` 带 ★ 标注——Week 1 的唯一调用入口被保留并增强，星号表示"它没变，但要重点看"。
- **第 48-55 行**：Day 8-14 的模块逐行一行注释——每个模块在树里都有一句话职责。**职责列表**是系统真源的第一层。
- **第 63 行**：\`week3_demo.py\` 标注"Day 21: 端到端 demo"——终点先写出来，Week 3 所有能力最终要串成一条链。

再看 README 的"负边界"和设计理由：

\`README.md:70-86\`

\`\`\`\`markdown
## 这个 agent-app **不**提供什么

- 模型 API key：你自己申请（见 \`../配套指南/环境准备.md\`）
- 真实 Prometheus / Elasticsearch / 告警系统地址
- 真实 MCP SDK 强依赖：本包用轻量教学实现模拟 list/call/register 三个核心动作
- FastAPI、IM 机器人、部署和 Kafka 削峰：这些放到 Week 4

## 为什么这样设计

第三周要训练的是工程判断，不是堆框架：

- Harness 让代码、Prompt、配置、评测和日志能被重建。
- Skill 把多步诊断流程封装成可复用能力，并在 Day 21 demo 中校验输出契约。
- MCP adapter 让外部工具能以统一协议进入 \`ToolRegistry\`。
- Multi-agent 只在诊断任务可分解时使用。
- Eval、Observability、Guardrails 和 Session 让系统具备进入 Week 4 的交付基础。
- Day 21 demo 的真实链路是 \`Guardrails -> Skill -> MCP tools -> Multi-agent -> Eval -> Trace -> Session\`。
\`\`\`\`

- **第 72-75 行"不提供什么"**：四行负边界——API key、真实监控地址、真实 MCP SDK、FastAPI/IM/部署。负边界和正边界一样重要：明确说"这些不在本包"，新人才不会去找不存在的东西。
- **第 81 行**："Harness 让代码、Prompt、配置、评测和日志能被重建"——README 自己给出了整个 Week 3 的纲，这句话也是后面每个 Day 的验收标准。

### 第二站：ARCHITECTURE —— 协作架构

README 告诉你"有什么"，ARCHITECTURE 告诉你"怎么协作"。

\`docs/ARCHITECTURE.md:1-30\`

\`\`\`\`text
# Smart Diagnosis Agent Architecture

## 目标

本工程是第三周的离线工程化验证版：把 Week 2 的核心机制组织成智能诊断 Agent 的工程骨架，并补上 Skill、MCP、Multi-agent、Eval、Observability、Guardrails 和 Session。

## 模块关系

\`\`\`text
alert text
  └─ guardrails.py
       ├─ blocked: return safe refusal / HITL request
       └─ allowed
            └─ skill_runtime.py
                 ├─ load diagnosis-reviewer/SKILL.md
                 ├─ declare trigger_reason
                 └─ validate output contract
                      └─ mcp_adapter.py + diagnosis_tools.py
                           ├─ query_metric(cpu/error_rate)
                           └─ search_sop(alert)
                                └─ multi_agent.py
                                     ├─ route_incident()
                                     ├─ metrics_worker()
                                     ├─ logs_worker()
                                     ├─ sop_worker()
                                     └─ review_findings()
                                          ├─ evaluator.py scores report
                                          ├─ observability.py records trace_id/events
                                          └─ session.py persists messages/events
\`\`\`
\`\`\`\`

- **第 5 行目标**：一句话——把 Week 2 机制组织成骨架，并补上 Week 3 的七个新能力（Skill、MCP、Multi-agent、Eval、Observability、Guardrails、Session）。
- **第 9-30 行文字架构图**：从 \`alert text\` 一路往下——\`guardrails.py\` 拦截（第 11-13 行：blocked 就安全拒绝或转 HITL）→ \`skill_runtime.py\` 加载 Skill 并校验输出契约（第 14-17 行）→ \`mcp_adapter.py\` + \`diagnosis_tools.py\` 提供查询能力（第 18-20 行）→ \`multi_agent.py\` 分工（第 21-26 行）→ 最后三兄弟收尾：\`evaluator.py\` 打分、\`observability.py\` 记 trace、\`session.py\` 持久化（第 27-29 行）。**一条告警从进来到留下痕迹，全程走完**。

> 为什么架构图用纯 text 而不是图片或 mermaid？因为图也要能进 git diff、能被 Agent 读取、能逐字符 review。文字架构图是"文档型代码"的典型形态——零依赖、可 grep、改动可审查。

然后是"继承"与"新增"两份清单：

\`docs/ARCHITECTURE.md:32-40\`

\`\`\`\`text
## 继承 Week 2 的能力

- \`loop.py\`：最小 ReAct Loop 和 \`ToolRegistry\`。
- \`tools/\`：HTTP、文件搜索、shell 白名单等工具治理。
- \`todo.py\`：显式计划状态机。
- \`memory.py\`：短期、KV、语义三层记忆。
- \`compact.py\`：上下文压缩。
- \`workflow.py\`：LangGraph 工作流。
- \`subagent.py\`：子任务隔离。
\`\`\`\`

\`docs/ARCHITECTURE.md:42-53\`

\`\`\`\`text
## 第三周新增能力

- \`skills/diagnosis-reviewer/\`：把诊断复核流程封装成 Skill。
- \`skill_runtime.py\`：读取 Skill 元信息，声明触发原因，校验输出契约。
- \`mcp_servers/diagnosis_tools.py\`：轻量教学 MCP server，暴露诊断工具。
- \`mcp_adapter.py\`：把 MCP tools 映射成 Week 2 \`ToolRegistry\` 可执行工具。
- \`multi_agent.py\`：Router + metrics/logs/sop workers + reviewer。
- \`evaluator.py\`：读取 Golden Dataset，计算 baseline，并生成 failed-case trace。
- \`observability.py\`：结构化记录 tool/llm/guardrail/eval/session 事件。
- \`guardrails.py\`：敏感信息、越权、危险动作、无关闲聊拦截。
- \`session.py\`：SQLite 会话持久化。
- \`week3_demo.py\`：串起 \`Guardrails -> Skill -> MCP -> Multi-agent -> Eval -> Trace -> Session\`。
\`\`\`\`

- **第 34-40 行继承清单**：Day 8-14 的机制逐行列出——注意每一条都是"名词：动词"结构（"\`loop.py\`：最小 ReAct Loop 和 \`ToolRegistry\`"），协作语义由动词给出。
- **第 44-53 行新增清单**：Week 3 的新模块逐个挂上，每条同样一句动词描述（读取/映射/记录/拦截/持久化）。两份清单合起来，就是 README 目录树在"协作层"的展开。

最后是边界与输出契约：

\`docs/ARCHITECTURE.md:55-70\`

\`\`\`\`text
## Week 4 前的边界

本工程暂不做 FastAPI、IM 机器人、生产告警 webhook、Kafka 或真实数据库接入。Week 4 的任务是把这些离线能力服务化，并替换 mock 工具。

## Day 21 Demo 输出契约

\`python -m agent_app.week3_demo\` 至少输出：

- \`skill_name\`
- \`skill_invocation.output_contract_valid\`
- \`mcp_tool_calls\`
- \`multi_agent_report\`
- \`eval_result\`
- \`guardrail_events\`
- \`trace_id\`
- \`session_id\`
\`\`\`\`

- **第 57 行 Week 4 边界**：暂不做 FastAPI、IM、webhook、Kafka——和 README 的负边界互相印证，同一个承诺在入口和架构两处各说一遍。
- **第 61-70 行输出契约**：\`week3_demo.py\` 至少输出 8 个字段——契约写在文档里，Day 21 的 demo、Day 19 的评测就都有了验收清单。**先写契约，再写实现**，是工程化整理的典型姿势。

### 第三站：configs/default.yaml —— 参数外置

\`configs/default.yaml:1-29\`

\`\`\`\`yaml
# Week 3 default runtime config.
# 学习阶段只放可公开配置，不放 API key、内网地址或真实生产服务名。

project:
  name: smart-diagnosis-agent
  mode: offline-demo

model:
  provider: openai-compatible
  temperature: 0
  timeout_seconds: 30

diagnosis:
  default_window: 10m
  min_confidence_for_action: 0.8
  require_human_for_actions:
    - restart
    - rollback
    - scale
    - delete
    - clean_disk

eval:
  dataset_path: eval/dataset.jsonl
  report_path: eval/baseline-v0.md

observability:
  redact_sensitive: true
  max_event_preview_chars: 500
\`\`\`\`

- **第 2 行注释**：安全红线——"学习阶段只放可公开配置，不放 API key、内网地址或真实生产服务名"。密钥归 \`.env\`，配置归 yaml，仓库才能整体公开分享。
- **第 4-6 行 project**：\`name\` + \`mode: offline-demo\`——先声明"这是个离线 demo"，一切预期从这里开始。
- **第 8-11 行 model**：provider / temperature / timeout——运行参数从代码里搬出来。\`temperature: 0\` 是"诊断要确定性"的声明：同样的告警，模型应给出同样的推理起点。
- **第 13-21 行 diagnosis**：\`default_window\`（10 分钟窗口）、\`min_confidence_for_action\`（置信度 0.8 才动手）、\`require_human_for_actions\`（五条动作名单）——**"哪些动作必须人批"是数据，不是逻辑**。
- **第 23-25 行 eval**：评测数据在哪、报告写哪，路径外置。
- **第 27-29 行 observability**：\`redact_sensitive: true\`（敏感信息脱敏）、\`max_event_preview_chars: 500\`（事件预览截断）。

> 为什么温度、超时、阈值、路径都要从代码搬进 yaml？因为它们是"运营期会改的东西"：改名单、改阈值不碰代码、可 diff、可 review。代码里只剩结构，参数全部变成数据。

> ### 岔路：配置文件和 .env 怎么分工？（可跳读，不影响主线）
> 判断标准只有一个：这份值能不能进 git 仓库？能，就放 config；不能，就放 \`.env\`。API key 一旦进仓库，就等于公开——这是本仓库 configs 第一行注释就在立规矩的原因。

### 第四站：prompts/diagnosis_system.md —— Prompt 资产化

\`prompts/diagnosis_system.md:1-24\`

\`\`\`\`markdown
# Diagnosis System Prompt

你是一个智能诊断 Agent，面向 SRE / 后端研发的故障归因场景。

## 行为边界

- 先收集证据，再给根因假设。
- 区分事实证据、推断假设和下一步建议。
- 不直接执行重启、删除、扩容、回滚、清理磁盘等高风险动作。
- 证据不足时明确说“不足”，并列出需要补充的工具查询。
- 输出应适合被评测脚本解析，避免只写泛泛而谈的结论。

## 输出格式

\`\`\`json
{
  "root_cause": "一句话根因假设",
  "category": "metrics|logs|dependency|change|resource|unknown",
  "confidence": 0.0,
  "evidence": ["证据 1", "证据 2"],
  "next_steps": ["下一步 1", "下一步 2"],
  "requires_human": false
}
\`\`\`
\`\`\`\`

- **第 3 行**：角色定义一句话——"智能诊断 Agent，面向 SRE / 后端研发的故障归因场景"。
- **第 5-11 行行为边界五条**：先证据后假设、区分事实/推断/建议、高风险动作不直接执行、证据不足明说"不足"、输出可被评测脚本解析——每条都在回答"这 Agent 会被怎么验收"。第五条直接为 Day 19 的评测铺路。
- **第 13-23 行输出格式**：字段名 + 枚举 + 示例——模型输出契约被钉死成 JSON schema。\`confidence\`、\`requires_human\` 等字段与 default.yaml 的 \`min_confidence_for_action\`、\`require_human_for_actions\` 一一呼应：**Prompt 约定行为，Config 约定阈值，两层一起管住模型**。

> 为什么 Prompt 用 markdown 文件而不是 Python 字符串？字符串藏在函数里没法 review、没法 diff、没法被别的模块读取；文件可以。README 目录树第 37 行把它标注为"诊断系统 Prompt 资产"——资产意味着要版本化、要管理。

### 走读结论：仓库即系统真源

对 Agent 来说，不在仓库里的信息等于不存在。架构约定散落在聊天记录或脑子里，对人是可接受的，对 Agent 不行。把关键决策放到 Agent 能稳定读取的位置：入口放 README、协作放 ARCHITECTURE、参数放 config、Prompt 放 prompts。

判断仓库是否成为"系统真源"的简单方法：只给一个新 Agent 读取 \`agent-app/\`，它能不能回答"这是什么系统、怎么运行、模块在哪、怎么验证"。今天走完四个文件，四个问题各有落点：README 回答"是什么、怎么运行"，ARCHITECTURE 回答"模块在哪、怎么协作"，configs 回答"参数是什么"，prompts 加 tests/eval 回答"怎么验证"。必须靠你口头解释，说明还没成为事实来源。

## 为什么这样写

- **入口文档先划"不要求运行"的边界**：README 第 6 行原文——"本目录用于阅读和对照，不要求成员解压后直接运行"。阅读包和可运行代码是两种交付物，文档第一职责是划清边界，省得读者浪费时间装环境；同时第 10-27 行把验证命令照给，"不强迫"与"可验证"并存。
- **配置只放可公开项，密钥永不进仓库**：default.yaml 第 2 行注释原文——"学习阶段只放可公开配置，不放 API key、内网地址或真实生产服务名"。密钥归 \`.env\`、配置归 yaml，仓库才能作为真源被整体分享。
- **高风险动作做成名单数据而不是代码分支**：default.yaml 第 16-21 行 \`require_human_for_actions\` 把 restart/rollback/scale/delete/clean_disk 列成清单——"哪些动作要人批"是会随业务变的，放配置意味着改名单不动代码、可 diff、可 review；prompt 第 9 行"不直接执行重启、删除、扩容、回滚、清理磁盘等高风险动作"再从行为侧拦一道。两边是同一件事的数据层和指令层。
- **Prompt 是文件资产而不是字符串**：prompts/diagnosis_system.md 以"## 行为边界"开头列出五条规则；README 第 81 行写明动机——"Harness 让代码、Prompt、配置、评测和日志能被重建"。字符串硬编码在多个 Python 函数里恰恰是重建不了的，这也是本日自测 Q3 的答案。
- **架构图用 text 不用工具链**：ARCHITECTURE.md 第 9-30 行是纯文本模块图——文档要能被 Agent 读取、进 git diff、逐字符 review；text 图零依赖、可 grep。这本身就是"仓库即系统真源"的体现：连架构图都住在仓库里。

## 本章小结

- Harness 是模型之外的工程外壳，五子系统（指令/工具/环境/状态/反馈）缺一个都不可交付。
- Day 15 的产出是四件文档资产：README（入口）、ARCHITECTURE（协作）、configs（参数）、prompts（Prompt）。
- 文档型代码的走读方式不同：没有运行入口，靠引用块、目录树、yaml、md 本身承载约定。
- 仓库即系统真源：不在仓库里的信息对 Agent 等于不存在；判断标准是"只给新 Agent 读 \`agent-app/\`，它能否回答四问"。
- 这一处是「把系统真源写进仓库」的事——后面 Day 16-21 的 Skill、MCP、Multi-agent、Eval、Observability、Session 只是往这个骨架上逐日挂新能力，**核心没变复杂**。

## 一句话边界

- Harness 是模型之外的工程外壳，目标是让模型少犯不可复盘的错，不是让模型更聪明。
- 五子系统：指令、工具、环境、状态、反馈，缺一个都不可交付。
- 仓库即系统真源：不在仓库里的信息对 Agent 等于不存在。
- Day 15 是整理已有机制成骨架，不是重写框架。

## 读完应该能用自己的话回答

1. Harness 是什么？它和 LLM、Agent 是什么关系？
2. 为什么同一个模型在裸仓库和有 Harness 的仓库表现差很多？
3. Harness 的五个子系统各解决什么问题？
4. 为什么说"仓库即系统真源"？怎么判断仓库是不是系统真源？
5. Day 15 做的事和"再写一个框架"有什么区别？

## 想深入

Harness 五子系统的设计权衡、巨型指令文件失败、过早宣布胜利的反模式等，见八股·08 工程化实践和八股·13 Coding Agent。

## 交给 AI 的问题

\`\`\`text
我正在学 Harness。请解释：1) Harness 是什么、和 LLM/Agent 什么关系；2) 为什么模型之外需要工程外壳；3) Harness 的五个子系统各解决什么；4) 为什么说仓库是系统真源。用"新人进公司没人交接"做类比，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. Harness**

1. Harness 在本周语境中最接近什么？
   - A. 一个新的 LLM 模型
   - B. 模型之外的工程外壳
   - C. 向量数据库
   - D. 低代码平台

**Q2. Repo as System of Record**

2. Repo as System of Record 强调什么？
   - A. 所有状态都只存在内存里
   - B. 仓库能重建配置、prompt、评测和运行边界
   - C. 只保留 README
   - D. 不需要测试

**Q3. Prompt 资产**

3. Prompt 资产最不应该怎么管理？
   - A. 放在可 review 的 markdown/yaml 文件
   - B. 记录版本和用途
   - C. 大量硬编码在多个 Python 函数里
   - D. 与配置分离

**Q4. Day 15 最低线**

4. Day 15 最低线是什么？
   - A. 接入真实生产告警
   - B. 写一个 IM 机器人
   - C. 让新人打开 README 能看懂项目结构
   - D. 完成 100 条评测集

### 开放题（1 道）

**Q5. 开放题**

用 150 字说明：为什么第三周第一天先整理 Harness，而不是直接写 Skill 或 MCP？

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

1. B
2. B
3. C
4. C

开放题要点：

- Week 2 的模块还是练习题集合，先整理工程边界才能稳定承载后续能力。
- Skill、MCP、Eval、Observability 都依赖清晰目录、配置、prompt 和 README。
- Harness 让人和 Agent 都能理解项目，不只是让代码能运行。
`,Of=`---
title: Day 16 Skill 系统
tags:
  - week3/day16
  - concept
  - code
  - exercise
---

# Day 16：Skill 系统（可触发的专业能力包）

> 阅读约 30-40 分钟 ｜ 前置：[[day15-Harness工程化整理]]、[[day09-多工具注册与执行]]、[[day13-LangGraph工作流编排]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/skill_runtime.py\`、\`skills/diagnosis-reviewer/SKILL.md\`、\`skills/diagnosis-reviewer/examples/cpu_spike_input.md\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

很多人第一次写 Skill，会写成一段更长的 Prompt："你是资深 SRE 专家，根据告警判断故障原因……"。这不是 Skill，只是角色设定--没有触发条件、没有输入输出契约、没有边界、没法被复用和审计。

今天要看清 Skill 是什么：它不是长 Prompt，是把一类可复用的专业工作流封装成按需加载的能力包。以及它和 Tool、Prompt 的边界在哪。

**一句话主旨**：Skill 是"可触发的能力包"——触发条件、流程、工具白名单、输出契约、边界五样东西缺一不可；runtime 只做三件事：加载元数据、声明触发、校验契约。今天就把这三件事逐一对应到代码上。

## 一个例子

"故障诊断复核"这件事，三种承载方式：

\`\`\`text
写成 Prompt：每次都把一长段诊断指引塞进 system prompt，不管这次任务用不用得上
  -> 浪费 token，长上下文稀释重要约束

写成 Tool：不行--"复核诊断"不是单步函数，它是一套流程
  -> Tool 只有动作，没有流程语义

写成 Skill：把诊断复核的触发条件、步骤、允许工具、输出契约、边界封装成一个能力包
  系统提示里只放摘要（几百 token），真要用时再加载完整内容
  -> 按需加载，不浪费上下文
\`\`\`

差别在于：Skill 是"一类任务的复用"，不是"一次调用的表达"。

## 这个概念是什么

**Skill** 是把一类可复用的专业工作流封装成可触发、按需加载的能力包。它包含：触发条件（什么时候用）、步骤（按什么流程做）、允许工具（能调哪些）、输出契约（交付什么格式）、边界（不能做什么）。

先把它和近邻概念分清：

| 类型 | 作用 | 什么时候用 |
|---|---|---|
| Prompt | 一次性指导模型行为 | 简单、不可复用任务 |
| Tool | 执行单步外部动作 | 查指标、读文件等单步动作 |
| Workflow | 固定流程编排 | 步骤可预测、状态可枚举 |
| Skill | 可触发的专业能力包 | 高频、复杂、需要边界和契约的任务 |

Tool 回答"我能做什么动作"；Skill 回答"遇到这类问题，我该按什么专业流程工作、交付什么可验证结果"。

## 代码走读：Skill 从定义到触发的完整链路

（完整代码已嵌入下方代码走读，正文里的路径都相对 \`agent_app/\` 与 \`skills/\` 写）。全程只读、不要求运行——下面每一段引用都标注了 \`文件:行号\`，与下方嵌入的代码一一对应，可以就地核对。

今天走读三份材料：\`skills/diagnosis-reviewer/SKILL.md\`（能力包本体）、\`skills/diagnosis-reviewer/examples/cpu_spike_input.md\`（示例输入）、\`agent_app/skill_runtime.py\`（加载 / 触发 / 校验）。走读顺序反过来：先看"一个 Skill 长什么样"，再看"runtime 怎么把它变成可运行的东西"。

### 第一块：SKILL.md 的 frontmatter —— 给机器看的部分

> 为什么一个 Skill 的第一眼不是流程而是元数据？
> 因为"按需加载"的前提是"轻量发现"：system prompt 里只能放每个 Skill 的摘要（几百 token），而摘要恰恰来自 frontmatter。机器要先低成本地认出"这里有一个什么样的 Skill"，才有后面的"正文按需加载"。

\`skills/diagnosis-reviewer/SKILL.md:1-13\`

\`\`\`yaml
---
name: diagnosis-reviewer
description: Review an incident diagnosis by checking metrics, logs, SOP evidence, confidence, and human-approval requirements before a final report is trusted.
allowed-tools:
  - query_metric
  - search_sop
  - grep_files
  - read_file
---

# Diagnosis Reviewer Skill

Use this skill when the user provides an incident alert, a draft root-cause analysis, or an eval bad case and asks for diagnosis review.
\`\`\`

逐块看：

- **第 2 行 \`name\`**：这个 Skill 的唯一标识。它被写进每次调用的记录里（后面 \`SkillInvocation.skill_name\` 就是它），是"哪次诊断走了哪个流程"的关联键。
- **第 3 行 \`description\`**：一句话说清两件事——这个 Skill 覆盖什么（checking metrics, logs, SOP evidence, confidence, human-approval requirements）以及交付前提（before a final report is trusted）。注意它的写法是"何时用、为谁用"的职责描述，而不是"我能做什么"的能力罗列。**description 就是触发条件**：模型看到一条告警，是靠这句话判断"该不该叫 diagnosis-reviewer 出来"。
- **第 4-8 行 \`allowed-tools\`**：工具白名单。这个 Skill 只允许调 \`query_metric\`（查指标）、\`search_sop\`（查 SOP）、\`grep_files\` / \`read_file\`（查日志和文件）。**"允许调哪些工具"是被声明出来的，不是靠模型自觉**——这就是"边界"在结构上的第一个落点。
- **第 11-13 行正文开头**：\`# Diagnosis Reviewer Skill\` 下的第一句话进一步收窄触发场景：incident alert、draft root-cause analysis、eval bad case 三种输入。frontmatter 和正文开头互相印证，一个给机器摘要，一个给模型完整语境。

### 第二块：Trigger Examples —— description 的"人话样例"

\`skills/diagnosis-reviewer/SKILL.md:15-20\`

\`\`\`text
## Trigger Examples

- "帮我复核这个故障归因结论"
- "这条 P1 告警可能是什么原因"
- "这个 bad case 为什么诊断错了"
- "请根据指标、日志和 SOP 输出诊断报告"
\`\`\`

- 四条全是用户会说的自然语言，而且都是中文口语——因为这个场景里用户输入是中文。Trigger Examples 给抽象的 description 补上了具体形态：**"何时用我"不能只停留在职责描述，还要有能对得上的真实问法**。
- 注意这几条和后面 runtime 里的关键词清单（"告警"、"故障"、"5xx"……）能对上：示例文本不是摆设，它是触发匹配的语料来源之一。

### 第三块：Workflow —— 专业流程的全部内容

\`skills/diagnosis-reviewer/SKILL.md:22-29\`

\`\`\`text
## Workflow

1. Extract incident facts: service, severity, metric name, time window, symptom, and user-provided evidence.
2. Query or inspect metric evidence first. Do not infer resource root cause without metric evidence.
3. Inspect logs or error keywords when the alert mentions timeout, 5xx, exception, OOM, or latency.
4. Search SOP or historical incident notes for similar symptoms.
5. Build a short evidence table with source, signal, and interpretation.
6. Produce a final diagnosis with root cause, category, confidence, next steps, and human approval requirement.
\`\`\`

- 六步就是"专业流程"的全部内容：先提取事实（第 1 步），再按证据类型逐层推进（指标 → 日志 → SOP → 证据表 → 最终诊断）。
- 第 2 步是**命令句**："Query or inspect metric evidence first. Do not infer resource root cause without metric evidence."——先查指标证据，不许跳过证据直接推断资源根因。Skill 不只是描述步骤，还写明了"不许走捷径"。
- 第 6 步把交付物钉死：root cause、category、confidence、next steps、human approval requirement——正好对应后面 Output Contract 的五个字段（外加 evidence）。**流程的最后一步和输出契约是咬合的**，这不是巧合，是设计。

> 为什么 Workflow 用英文写？因为它是给模型消费的指令文本，英文指令在模型语料里更稳、更少歧义；而 Trigger Examples 用中文，因为用户输入是中文。语言选择跟随受众。

### 第四块：Boundaries —— 把"不能做"写死

\`skills/diagnosis-reviewer/SKILL.md:31-36\`

\`\`\`text
## Boundaries

- Do not execute restart, rollback, delete, scale, clean disk, or configuration changes.
- If evidence is insufficient, return "insufficient evidence" and list the missing checks.
- If sensitive data appears, mask it before including it in the final report.
- If confidence is below 0.8, do not recommend an irreversible action.
\`\`\`

- 四条边界：第 1 条是动作红线（不许重启 / 回滚 / 删除 / 扩容 / 清磁盘 / 改配置——全是生产高危动作），第 2 条是诚实义务（证据不足就明说"insufficient evidence"并列出缺什么），第 3 条是数据纪律（敏感数据先脱敏再入报告），第 4 条是数值化红线（confidence 低于 0.8 不许推荐不可逆动作）。
- 边界为什么要单独成节、而不是揉进 Workflow？因为**边界要在触发瞬间就被看见**：流程可以被跳过，边界不能。它和 \`allowed-tools\` 一外一内，共同构成"这个 Skill 的能力半径"。

### 第五块：Output Contract —— 交付物契约

\`skills/diagnosis-reviewer/SKILL.md:38-51\`

\`\`\`\`text
## Output Contract

\`\`\`json
{
  "root_cause": "short hypothesis",
  "category": "metrics|logs|dependency|change|resource|unknown",
  "confidence": 0.0,
  "evidence": [
    {"source": "metric|log|sop|user", "signal": "what was observed", "interpretation": "why it matters"}
  ],
  "next_steps": ["safe next step"],
  "requires_human": false
}
\`\`\`
\`\`\`\`

- 六个字段，字段名、类型、取值空间全部钉死：\`root_cause\`（字符串）、\`category\`（六个枚举值之一）、\`confidence\`（0.0-1.0 浮点）、\`evidence\`（对象数组，每项是 source / signal / interpretation 三元组）、\`next_steps\`（字符串数组）、\`requires_human\`（布尔）。
- 这就是"输出契约"的字面形态。它和后面 runtime 里的 \`REQUIRED_DIAGNOSIS_FIELDS\` 是**同一份契约的两面**：SKILL.md 里写给模型看（照着这个格式交付），runtime 里写给代码看（照着这个清单验收）。
- \`requires_human\` 是给 HITL（人工审批）留的开关——高危动作不在 Skill 里直接执行，而是靠这个字段把"要不要人点头"交给上层。

> ### 岔路：examples/ 目录是干嘛的？（可跳读，不影响主线）
> 一个 Skill 往往带一个 \`examples/\` 目录，每个文件是"输入 + 期望处理"的样例。看 \`skills/diagnosis-reviewer/examples/cpu_spike_input.md\`（全文 12 行）：
>
> \`skills/diagnosis-reviewer/examples/cpu_spike_input.md:1-12\`
>
> \`\`\`\`text
> # Example Input
>
> \`\`\`text
> 【P1】trade-order 下单接口 5xx 从 1% 升到 18%，CPU 96%，近 10 分钟出现大量 timeout。
> \`\`\`
>
> Draft diagnosis:
>
> \`\`\`text
> 可能是 trade-order CPU 打满导致请求超时，需要重启服务。
> \`\`\`
> \`\`\`\`
>
> 它回答两个问题：这个 Skill **什么时候被触发**（P1 告警文本：5xx、CPU、timeout 全齐）、**输入长什么样**（告警 + 一段草稿诊断）。注意草稿诊断只有一句"需要重启服务"——这正是 Boundary 第 1 条禁止的动作，也是 \`requires_human\` 要亮红灯的场景。**示例让"触发"和"边界"都有了具体测试用例**：拿这份输入对照正文的触发与边界规则逐条推演，就能验证 Skill 有没有被正确触发、有没有拦住重启建议。

### 第六块：skill_runtime.py —— 先看它承诺做什么

\`agent_app/skill_runtime.py:1-29\`

\`\`\`python
"""Week 3 的最小 Skill 运行时（runtime）。

目标不是实现一个完整的 Skill 引擎。Day 21 只需要足够的运行时行为，
用来证明 diagnosis-reviewer 这个 Skill 已经接入主链路，一共三件事：

- load metadata from SKILL.md frontmatter：从 SKILL.md 的 frontmatter 加载元数据
- declare why the skill was triggered：声明这个 Skill 为什么被触发
- validate the final report against the Skill output contract：校验最终报告是否符合输出契约

一句话：加载元数据、声明触发、校验契约，就是 runtime 的全部职责。
"""
from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any


# 输出契约的六个必填字段，与 skills/diagnosis-reviewer/SKILL.md 的 Output Contract 一一对应：
# 一份诊断报告交付前，这六个 key 一个都不能少。
# 用 set 而不是 list：校验时 "field not in report" 是 O(1) 判重，report 再大也不怕。
REQUIRED_DIAGNOSIS_FIELDS = {
    "root_cause",
    "category",
    "confidence",
    "evidence",
    "next_steps",
    "requires_human",
}
\`\`\`

- **第 1-11 行 docstring**：开篇就划清范围——*"目标不是实现一个完整的 Skill 引擎"*。为什么？因为今天只证明"diagnosis-reviewer 这个 Skill 能进主链路"，不是要造一个生产级引擎。它列出的三条承诺（加载元数据、声明触发、校验契约）就是整个文件的目录，也是本篇主旨里"runtime 做三件事"的出处。
- **第 22-29 行 \`REQUIRED_DIAGNOSIS_FIELDS\`**：六个必填字段，和 SKILL.md Output Contract 的六个 key 一模一样。用 \`set\` 而不是 \`list\`，是为了后面 \`field not in report\` 的 O(1) 判重。
- 模块结构很干净：docstring → imports → 常量 → 数据类 → 函数。小文件也要有清晰骨架。

### 第七块：两个数据类 —— "定义"和"调用"分开记

\`agent_app/skill_runtime.py:30-59\`

\`\`\`python
@dataclass(slots=True)
class SkillDefinition:
    """Skill 的静态定义：一份 SKILL.md 加载完后，凝固成一个只读快照。"""

    # name：Skill 唯一标识，来自 frontmatter 的 name，也是每次调用记录的关联键
    name: str
    # description：一句话职责描述，来自 frontmatter 的 description——"何时用我"就是触发条件
    description: str
    # allowed_tools：工具白名单，来自 frontmatter 的 allowed-tools
    allowed_tools: list[str] = field(default_factory=list)
    # path：SKILL.md 的源文件路径，加载完也不丢来源，方便追溯
    path: str = ""


@dataclass(slots=True)
class SkillInvocation:
    """一次触发事件的记录：定义只读、记录可写，一次失败不污染下一次。"""

    # skill_name：触发了哪个 Skill
    skill_name: str
    # trigger_reason：为什么触发——审计抓手，事后能查"这条诊断为什么走了这个流程"
    trigger_reason: str
    # allowed_tools：这次允许调哪些工具（照抄定义的名单）
    allowed_tools: list[str]
    # output_contract_valid：契约校验过没过；先声明触发，校验之后再把结果填进来
    output_contract_valid: bool = False
    # missing_fields：校验时缺了哪些字段，方便上层明说"哪里不合格"
    missing_fields: list[str] = field(default_factory=list)
\`\`\`

- **\`SkillDefinition\`**（第 32-43 行）：Skill 的**静态定义**——name、description、allowed_tools、path。它是 \`load_skill\` 的产出：一份 SKILL.md 加载完，就凝固成一个定义对象。
- **\`SkillInvocation\`**（第 46-59 行）：**一次触发事件的记录**——skill_name、trigger_reason（为什么触发）、allowed_tools（这次允许调什么）、output_contract_valid（校验过没过）、missing_fields（缺哪些字段）。注意后两个字段有默认值 \`False\` / 空列表：先声明触发，校验之后再把结果填进来。

> 为什么要两个类？
> 因为"定义"和"调用"是类型与实例的关系：同一个 Skill 可以被触发很多次，每次触发都要**单独记录"为什么触发、校验过没过"**。如果把记录塞进定义里，一次失败就会污染下一次；拆开之后，定义只读、记录可写，互不干扰。

- 两个类都标了 \`@dataclass(slots=True)\`：\`slots=True\` 禁止动态加属性、省内存、访问更快——dataclass 在 Python 3.10+ 的标准选项，这里两个类都开了，说明作者对"小而快"有要求。

### 第八块：load_skill —— 手工解析 frontmatter

\`agent_app/skill_runtime.py:60-119\`

\`\`\`python
def load_skill(path: str | Path) -> SkillDefinition:
    """从 SKILL.md 里手工解析 frontmatter，返回 Skill 的定义。

    做什么：只读文件第一对 --- 之间的 frontmatter，把 name / description /
    allowed-tools 三个键抠出来，装进 SkillDefinition。
    为什么手写而不引 PyYAML：frontmatter 只有三个键，手写解析比引入一个依赖库
    更符合"最小 runtime"的定位——零依赖、透明、可审计。
    常见坑：文件必须以 --- 开头、必须声明 name，否则直接抛 ValueError（硬错误，
    失败要失败得早，不给下游留半成品）。
    """
    skill_path = Path(path)
    text = skill_path.read_text(encoding="utf-8")
    # 防御：没有 frontmatter 的 SKILL.md 是坏文件，直接报错，不再往下走
    if not text.startswith("---"):
        raise ValueError(f"SKILL.md missing frontmatter: {skill_path}")
    # split("---", 2) 只切前两个 "---"，取 [1] 就是第一对 --- 之间的 frontmatter 原文
    frontmatter = text.split("---", 2)[1]

    name = ""
    description = ""
    allowed_tools: list[str] = []
    # current_key 记录"当前正在读哪个键"：frontmatter 是 key: value 的扁平结构，
    # 但 allowed-tools 的值是一个列表，需要记住"我现在还在 allowed-tools 下面"
    current_key = ""
    for raw_line in frontmatter.splitlines():
        line = raw_line.rstrip()
        stripped = line.strip()
        if not stripped:
            continue
        # 分支一：以 "- " 开头的行且当前键是 allowed-tools，就作为列表项追加
        # （stripped[1:] 去掉开头的 "-"，再 strip 掉周围空白）
        if stripped.startswith("-") and current_key == "allowed-tools":
            allowed_tools.append(stripped[1:].strip())
            continue
        # 分支二：带 ":" 的行按 key/value 切分，一次读一个键值对
        if ":" in stripped:
            # split(":", 1) 只切第一个冒号：值里再出现冒号也不会误伤
            key, value = stripped.split(":", 1)
            current_key = key.strip()
            value = value.strip()
            if current_key == "name":
                name = value
            elif current_key == "description":
                description = value
            # 兼容逗号分隔的写法：allowed-tools: a, b 和下面的 "- a" 列表写法，
            # 同一种语义，两种风格都能解析
            elif current_key == "allowed-tools" and value:
                allowed_tools = [item.strip() for item in value.split(",") if item.strip()]

    # frontmatter 缺 name 等于这个 Skill 没有身份证，无法被路由——同样是硬错误
    if not name:
        raise ValueError(f"SKILL.md missing name: {skill_path}")
    return SkillDefinition(
        name=name,
        description=description,
        allowed_tools=allowed_tools,
        path=str(skill_path),
    )
\`\`\`

逐块看：

- **第 62-78 行**：\`path\` 参数是 \`str | Path\`，内部统一转成 \`Path\` 再读。读完先防御：\`if not text.startswith("---")\` 就直接 \`raise ValueError\`——**SKILL.md 没有 frontmatter 是硬错误，失败要失败得早**。第 78 行 \`text.split("---", 2)[1]\` 取第一对 \`---\` 之间的内容，就是 frontmatter。
- **第 80-85 行**：四个变量的初始化。\`current_key\` 是"当前正在读哪个键"的状态——frontmatter 是 \`key: value\` 的扁平结构，但 \`allowed-tools\` 的值是列表，需要记住"现在我还在 allowed-tools 下面"。
- **第 86-95 行**：解析循环的第一分支：**以 \`- \` 开头的行，且当前键是 \`allowed-tools\`，就作为列表项追加**（\`stripped[1:].strip()\` 去掉 \`-\` 和周围空白）。这就是 SKILL.md 第 4-8 行那种缩进列表的解析逻辑。
- **第 96-109 行**：第二分支：带 \`:\` 的行按 key/value 切分（第 97 行）。**\`split(":", 1)\` 只切第一个冒号**（第 99 行），值里再出现冒号也不会误伤（比如 description 里的英文句号前不会有冒号，但保险起见只切第一处）。三个键各归各位（第 102-105 行）；注意第 108-109 行还兼容了逗号分隔的 \`allowed-tools: a, b\` 写法——**同一种语义，两种书写风格都能解析**。
- **第 111-113 行**：\`if not name\` 再抛一次 \`ValueError\`。frontmatter 缺 name 等于这个 Skill 没有身份证，无法被路由——同样是硬错误。
- **第 114-119 行**：返回 \`SkillDefinition\`。注意 \`path=str(skill_path)\` 把来源路径也存了进去：**"这个 Skill 从哪个文件来"是可追溯的**，不是加载完就丢了。

> 为什么手写解析、不引 PyYAML？
> 这是"最小 runtime"的取舍：frontmatter 只有三个键，三四十行手写解析比引入一个依赖库更符合 docstring 里 *"目标不是实现一个完整的 Skill 引擎"* 的承诺。引库解决 90% 的场景，但这里 100% 的场景就三个键，手写更透明、零依赖、可审计。

### 第九块：trigger_diagnosis_skill —— 触发是声明，不是推理

\`agent_app/skill_runtime.py:120-141\`

\`\`\`python
def trigger_diagnosis_skill(skill: SkillDefinition, alert: str) -> SkillInvocation:
    """为一则告警声明一次诊断 Skill 的调用——触发是"声明"，不是"推理"。

    做什么：把 alert 文本和关键词白名单逐个比对，命中任意一个就记
    "production incident diagnosis"，全没命中退回 "manual diagnosis review"。
    为什么不用模型判断：触发必须可复现、可审计——同一段输入永远得到同一个
    trigger_reason，路由决策是白盒规则，不是黑盒推理。
    常见坑：关键词匹配默认大小写敏感，所以双方都先 .lower() 再比，
    "P1"/"p1"、"5XX"/"5xx" 才能都命中。
    """
    # any(...) 逐个关键词检查：alert 里出现任意一个就算命中
    reason = "production incident diagnosis" if any(
        keyword.lower() in alert.lower()
        for keyword in ["告警", "故障", "p1", "p2", "5xx", "timeout", "cpu", "oom"]
    ) else "manual diagnosis review"
    return SkillInvocation(
        skill_name=skill.name,
        trigger_reason=reason,
        allowed_tools=skill.allowed_tools,
    )
\`\`\`

- **第 133-136 行**：触发 = 关键词匹配。\`any(...)\` 遍历 8 个关键词（"告警"、"故障"、"p1"、"p2"、"5xx"、"timeout"、"cpu"、"oom"），**命中任意一个**就算 \`"production incident diagnosis"\`；一个都没命中，退回 \`"manual diagnosis review"\`（人工复核场景——用户主动要求复核也算合法触发）。
- **大小写不敏感**：\`keyword.lower() in alert.lower()\`——告警文本里写 "P1" 还是 "p1"、"5XX" 还是 "5xx"，都能命中。生产告警的写法千奇百怪，这里一次 \`.lower()\` 消掉了最大的变数。
- **第 137-141 行**：返回 \`SkillInvocation\`，只记三件事：调用了哪个 skill、**为什么触发**（trigger_reason）、这次允许调哪些工具。\`trigger_reason\` 是审计的抓手——事后查"这条诊断为什么走了 diagnosis-reviewer 这个流程"，答案就在这个字段里。

> 为什么触发不用模型判断"该不该触发"？
> 因为触发必须**可复现、可审计**。一条告警文本来了，触不触发应该是确定性的函数，不依赖模型的随机性。关键词清单写死在代码里，任何人跑同一段输入都得到同一个 \`trigger_reason\`——这是把"路由决策"从黑盒推理变成白盒规则。

### 第十块：契约校验 —— 不合格是数据，不是异常

\`agent_app/skill_runtime.py:142-167\`

\`\`\`python
def validate_diagnosis_contract(report: dict[str, Any]) -> tuple[bool, list[str]]:
    """校验报告是否满足输出契约：返回 (是否通过, 缺哪些字段)。

    纯函数：report 是模型产出的 dict，输出 (valid, missing)。
    sorted(...) 让缺失字段列表顺序稳定——同一份不合格报告跑两遍，结果完全一样，
    好对比、好测试。
    为什么不抛异常：契约校验失败不是程序 bug，是"输出不合格"，应该作为数据记进
    invocation，而不是中断流程；这也对上 SKILL.md Boundary 第 2 条"证据不足就
    明说缺什么"的口径。
    """
    missing = sorted(field for field in REQUIRED_DIAGNOSIS_FIELDS if field not in report)
    return not missing, missing


def apply_contract_validation(invocation: SkillInvocation, report: dict[str, Any]) -> SkillInvocation:
    """把校验结果写回 invocation 并返回同一个对象，让调用链可以连续写下去。

    SkillInvocation 是 dataclass，字段可以直接改；返回它就能一条表达式写完
    "触发 + 校验"：apply_contract_validation(trigger_diagnosis_skill(skill, alert), report)。
    """
    valid, missing = validate_diagnosis_contract(report)
    invocation.output_contract_valid = valid
    invocation.missing_fields = missing
    return invocation
\`\`\`

- **第 144-155 行 \`validate_diagnosis_contract\`**：纯函数——输入是模型产出的 report（dict），输出是 \`(是否通过, 缺哪些字段)\`。\`sorted(...)\` 让缺失字段的列表**顺序稳定**（第 154 行）：同一份不合格报告，跑两遍报错顺序完全一样，好对比、好测试。
- **为什么不抛异常？** 契约校验失败不是程序 bug，是"输出不合格"——应该作为数据记进 \`SkillInvocation\`（\`output_contract_valid=False\` + \`missing_fields\` 列出缺什么），而不是中断流程。这正好对上 SKILL.md Boundary 第 2 条：*If evidence is insufficient, return "insufficient evidence" and list the missing checks*——**不合格就明说哪里不合格，两边口径一致**。
- **第 158-167 行 \`apply_contract_validation\`**：把校验结果写回 invocation 并返回同一个对象。因为 \`SkillInvocation\` 是 dataclass，字段可以直接改；返回它让调用链能连续写下去：

\`\`\`python
inv = apply_contract_validation(trigger_diagnosis_skill(skill, alert), report)
\`\`\`

一条表达式完成"触发 + 校验"，中间产物不落地——这就是 runtime 三条承诺（加载 → 触发 → 校验）的完整闭环。

（折叠：模块尾部 \`__all__\` 导出清单 8 行，见 \`skill_runtime.py:171-178\`——显式声明对外 API，\`import *\` 不会带进私有符号，是库代码的惯例。）

## 为什么这样写

- **runtime 刻意不完整**：模块 docstring 开篇就划清范围——*"目标不是实现一个完整的 Skill 引擎"*（\`skill_runtime.py:3\`），并列出三条必须满足的行为：*"load metadata from SKILL.md frontmatter" / "declare why the skill was triggered" / "validate the final report against the Skill output contract"*（\`skill_runtime.py:6-8\`）。取舍：够证明"Skill 能进主链路"即可，不为未来臆造抽象。
- **加载只读 frontmatter，不读正文**：\`load_skill\` 的 docstring 原话 *"从 SKILL.md 里手工解析 frontmatter，返回 Skill 的定义。"*（\`skill_runtime.py:63\`）。正文是给模型消费的指令文本，代码层不需要理解它——分层清晰：机器读元数据，模型读正文。
- **触发用关键词白名单而不是模型判断**：\`trigger_diagnosis_skill\` 的 docstring 只承诺 *"为一则告警声明一次诊断 Skill 的调用"*（\`skill_runtime.py:123\`）——触发是"声明"不是"推理"。8 个关键词（"告警"、"故障"、"p1"、"p2"、"5xx"、"timeout"、"cpu"、"oom"）让"何时触发"成为可测试的确定函数。
- **危险动作写进 SKILL.md，而不是靠 prompt 运气**：Boundaries 第一条原文 *"Do not execute restart, rollback, delete, scale, clean disk, or configuration changes."*（\`SKILL.md:33\`）。边界是能力包的一部分，随正文一起按需加载，而不是散落在某次对话里指望模型自觉。
- **契约在两端各写一份**：SKILL.md Output Contract 的六个字段（\`SKILL.md:41-50\`）与 \`REQUIRED_DIAGNOSIS_FIELDS\`（\`skill_runtime.py:22-29\`）一一对应。宁可双写也要两端各存，因为一端是给模型的交付规范、一端是给代码的验收判据，各司其职。

## 本章小结

- Skill = 触发条件 + 流程 + 工具白名单 + 输出契约 + 边界，封装成一份 SKILL.md（外加 examples 示例）。
- SKILL.md 一分为二：frontmatter 给代码读（name / description / allowed-tools），正文给模型读（trigger examples / workflow / boundaries / output contract）。
- runtime 只做三件事：\`load_skill\` 加载元数据、\`trigger_diagnosis_skill\` 声明触发、\`validate\` + \`apply\` 校验契约。
- description 即触发条件："何时用我"比"我能做什么"重要；Trigger Examples 给抽象描述补上真实问法的语料。
- 这一处是"一个能力包 + 三个函数"的事——后面 Agent 框架只是把这种加载-触发-校验组织成自动发现与调度，**核心没变复杂**。

## 一句话边界

- Skill 是可触发的专业能力包，不是长 Prompt。
- 与 Tool/Prompt/Workflow 的边界：Tool 是单步动作，Skill 是一类任务的复用流程。
- 摘要常驻、正文按需加载，别把完整 Skill 塞进 system prompt。
- description 即触发条件，要写"何时用/何时不用"。
- 输出要有契约，能被校验，不是文档摆设。

## 读完应该能用自己的话回答

1. Skill 和 Prompt、Tool 各有什么区别？什么时候用 Skill？
2. 为什么不能把每个 Skill 的完整内容都塞进 system prompt？该怎么放？
3. 一个 SKILL.md 通常包含哪些部分？
4. Skill 的 description 为什么是触发条件？该怎么写？
5. Skill runtime 做什么事？为什么输出要有契约？

## 想深入

Skill 的渐进式披露三层、六概念边界（Function Call/Tool/MCP/Prompt/Memory/Skill）、为何不塞 system prompt 的三个原因等，见八股·13 Coding Agent。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent Skill。请解释：1) Skill 和 Prompt、Tool 的区别；2) 为什么不能把完整 Skill 塞进 system prompt、该怎么放；3) 一个 Skill 包含哪些部分；4) Skill 的 description 为什么重要。用"故障诊断复核"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. Skill 与 Tool 的核心区别是？**

- A. Skill 一定更快
- B. Tool 是单步函数，Skill 是带流程和触发条件的能力包
- C. Tool 不能被 Agent 调用
- D. Skill 不需要边界

**Q2. 诊断复核 Skill 的输出至少应该包含什么？**

- A. 只有最终根因
- B. 根因假设、证据、置信度、下一步动作
- C. 只有完整日志
- D. 只有模型思考过程

**Q3. 哪种写法最容易把 Skill 写坏？**

- A. 写明触发条件
- B. 写明不做危险动作
- C. 写成一段很长但没有流程的 Prompt
- D. 给示例输入输出

**Q4. 高危动作在 Skill 中应该如何处理？**

- A. 直接执行
- B. 交给 HITL 审批
- C. 隐藏在 prompt 里
- D. 只要模型同意就执行

### 开放题（1 道）

**Q5.** 写出一个你认为适合封装成 Skill、但不适合只做成 Tool 的诊断场景，并说明原因。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 |
| --- | --- |
| Q1 | **B** |
| Q2 | **B** |
| Q3 | **C** |
| Q4 | **B** |

### 开放题参考思路

- 适合 Skill 的场景通常包含多步骤判断、多个工具、输出契约和安全边界。
- 例如"复核一份故障归因报告"需要查证据、比对 SOP、判断置信度、列出人工确认项，不是单个函数能表达的。
`,Nf=`---
title: Day 17 MCP 协议
tags:
  - week3/day17
  - concept
  - code
  - exercise
---

# Day 17：MCP 协议（让外部工具能被标准地发现和调用）

> 阅读约 30-40 分钟 ｜ 前置：[[day04-工具调用]]、[[day09-多工具注册与执行]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/mcp_adapter.py\`（Client 侧适配层）与 \`mcp_servers/diagnosis_tools.py\`（Server 侧实现）（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

Week 2 里我们把工具注册进 \`ToolRegistry\`，ReActLoop 就能调。但这些工具都"长在本地代码里"--查指标、搜 SOP、读日志，全得在同一个 Python 项目里写。真实系统里，工具可能由另一个团队维护、用另一种语言写、跑在另一台机器上，而且工具列表会变。

MCP 要解决的就是这个：让外部工具能被 Agent 用统一协议发现和调用，不用每接一个服务就重写一套适配。

## 一个例子

接外部工具有两种做法：

\`\`\`text
没有 MCP：
  接 GitHub   -> 自己写一套 GitHub 适配
  接数据库    -> 自己写一套数据库适配
  接文件系统  -> 自己写一套文件系统适配
  换一个 Agent 又要重写一遍

有 MCP：
  GitHub / 数据库 / 文件系统 各做一个 MCP Server，按统一协议暴露工具
  任何 Agent 只需要一个 MCP Client，就能发现并调用这些工具
\`\`\`

MCP 像是"AI 侧的 USB-C"：工具做成标准外设，Agent 有一个统一接口就能用。

## 这个概念是什么

**MCP（Model Context Protocol）** 是一个开放标准，规定 AI 应用（Host）和外部工具 / 数据源（MCP Server）之间怎么通信。它让一个 Server 暴露的工具能被多个 Agent 复用，不用每次重新对接。

先把它和两个近邻概念分清：

| 概念 | 回答的问题 |
|---|---|
| Function Calling | 模型怎么表达"我要调工具" |
| MCP | 外部工具怎么被发现和调用 |
| ToolRegistry | 本地循环怎么统一分发工具 |

三者不互斥、不替代：模型用 Function Calling 表达调用意图，工具用 MCP 暴露能力，ToolRegistry 在本地把两者接到一起。

### 三个角色：Host / Client / Server

MCP 用三层架构理解：

| 角色 | 职责 |
|---|---|
| Host | 管理用户会话、调模型、把工具结果回填（如 ReActLoop） |
| Client | 连接 MCP Server，发现和调用能力（适配层） |
| Server | 暴露工具，执行具体能力（可能是另一个进程） |

Server 和 Host 之间通过传输层通信，常见的有 stdio（本地子进程）和 HTTP（远程服务）。对 Host 来说，Server 跑在哪、用什么语言写都不重要--它只通过统一协议发现能力和发起调用。

### Server 暴露工具，Client 接进 Registry

MCP Server 通过 \`list_tools()\` 暴露自己的工具定义（名字、描述、参数 schema），通过 \`call_tool(name, args)\` 让外部调用。Client 做的事是把这些工具映射成本地 ToolRegistry 认识的格式：

\`\`\`text
Client 调 server.list_tools()  -> 拿到一批工具定义
把每个工具定义转成本地 ToolSpec，注册进 ToolRegistry
模型请求工具时 -> registry 调 client.call_tool() -> 拿结果 -> 回填模型
\`\`\`

这样一来，ReActLoop 根本不需要知道 MCP 的存在--对它来说，MCP 工具和本地函数工具没区别，都是 ToolRegistry 里的一个条目。协议的变化被封装在适配层里，主循环不膨胀。

### 三类能力：Tools / Resources / Prompts

MCP Server 不只能暴露工具，还有两类：

| 能力 | 作用 | 例子 |
|---|---|---|
| Tools | 主动执行动作 | 查指标、搜 SOP、发消息 |
| Resources | 被动提供上下文 | 文件内容、日志片段、数据库 schema |
| Prompts | 提供可复用提示模板 | 代码评审、故障复盘模板 |

本课程只实现 Tools，因为这是接入 ReActLoop 的最小闭环。生产系统里 Resources 同样重要--诊断场景的 SOP、服务拓扑、历史复盘，更适合建模成 Resources 而不是全塞进工具返回文本。

### 工具结果要结构化

MCP 工具返回值不要只追求"人能看懂"，还要让后续系统能消费。返回一段自然语言（"CPU 看起来挺高"）后面没法评测；返回结构化 JSON（service / metric / value / status）才能让 Day 19 的评测打分、Day 20 的护栏判断要不要人工确认。

概念讲到这里，接下来直接看代码：\`mcp_adapter.py\` 是 Client 侧的适配层，\`diagnosis_tools.py\` 是 Server 侧的实现，两个文件正好把"协议三要素 + 两端对接"走完整。两段代码的完整内容都嵌入在下方代码走读里，正文中的 \`agent_app/xxx.py\`、\`mcp_servers/xxx.py\` 与 \`文件:行号\` 标注均为代码出处，对照正文嵌入的代码阅读即可，无需在本地查找或打开任何文件。

## 代码走读：MCP 的"发现 - 调用 - 回填"两端实现

走读前先记住 MCP 三要素里我们用到的那一个——**Tools（工具）**：主动执行动作的能力，靠 \`list_tools()\` 发现、\`call_tool(name, args)\` 调用。另外两个（Resources 提供上下文、Prompts 提供提示模板）本课程不实现，理解表格即可，走读只看 Tools 的闭环。

### 岔路：为什么不实现 Resources / Prompts？（可跳读，不影响主线）

真实生产里，诊断场景的 SOP、服务拓扑、历史复盘更适合建模成 **Resources**——"被动提供上下文"，由 Agent 按 URI 读取，而不是塞进工具参数返回文本。Prompts 则是把"代码评审""故障复盘"这类固定套路做成可复用的提示模板。本课程只做 Tools 是因为它是接入 ReActLoop 的最小闭环：模型要主动执行动作（查指标、搜 SOP），工具就够用了。Week 4 接真实 MCP server 时，这三类能力都能按同样思路接进来。

### 先看 Client 侧：\`mcp_adapter.py\`（99 行，完整文件）

\`agent_app/mcp_adapter.py:1-7\`

\`\`\`python
"""Day 17: MCP 工具适配层（MCP tools adapter）。

把"MCP 风格的工具定义"映射进 Week 2 的 ToolRegistry。最重要的工程细节
在 make_mcp_tool_handler() 的工厂函数里：它把"当前工具名"捕获进闭包，
避开 Python 闭包 late-binding（迟绑定）的坑。
"""
from __future__ import annotations
\`\`\`

模块 docstring 一句话点明这文件干什么：把"MCP 风格的工具定义"映射进 Week 2 的 \`ToolRegistry\`。它还预告了全篇最重要的工程细节——\`make_mcp_tool_handler()\` 这个**工厂函数**，作用是"捕获当前工具名、避开 Python 的 late-binding 闭包 bug"。这个词组先记住，走到第 45-57 行再展开。

\`agent_app/mcp_adapter.py:15-24\`

\`\`\`python
class MCPClient(Protocol):
    """适配层依赖的最小 Client 协议：只要会"发现"和"调用"两件事即可。"""

    def list_tools(self) -> list[Any]:
        """发现：取回 server 暴露的全部工具定义。"""
        ...

    def call_tool(self, name: str, arguments: dict[str, Any]) -> Any:
        """调用：按名字调远端工具，结果形状任意。"""
        ...
\`\`\`

> 为什么用 \`Protocol\` 而不是写一个具体类？因为 adapter 只需要"对方会这两件事"，不关心对方是谁。\`Protocol\` 是"鸭子类型"的声明：任何实现了 \`list_tools()\` 和 \`call_tool()\` 的对象，都能当 MCP Client 用。这也正是 Week 3 能拿一个进程内模拟 server 走通协议、Week 4 再换成官方 MCP SDK 而 adapter 一行不改的前提。两个方法签名刚好就是 MCP 三要素里 Tools 的两个动作：**发现**（list）和**调用**（call）。

\`agent_app/mcp_adapter.py:27-42\`

\`\`\`python
def normalize_tool_result(result: Any) -> ToolResult:
    """把 MCP 风格的任意结果归一本地的 ToolResult。

    外部结果"形状不定"，而 ReActLoop 只认 ToolResult 一种形状（content
    必须是字符串）。这里用 getattr 兜底取字段：缺字段记默认值而不是抛
    异常；content 是字符串就直接用，否则 json.dumps 序列化成字符串。
    一个形状进，一个形状出。
    """
    ok = bool(getattr(result, "ok", False))
    content = getattr(result, "content", {})
    error = getattr(result, "error", None)
    if isinstance(content, str):
        text = content
    else:
        text = json.dumps(content, ensure_ascii=False, sort_keys=True)
    return ToolResult(ok=ok, content=text, error=error)
\`\`\`

这是**结果标准化**：MCP 返回的结果是"任意形状"的（\`result: Any\`），而本地 \`ToolResult\` 的 \`content\` 必须是字符串（见 \`loop.py:36-42\` 的 \`ToolResult\`：\`ok: bool\`、\`content: str\`、\`error: str | None\`）。这里用 \`getattr(..., 默认值)\` 兜底取字段——缺字段记默认值而不是抛异常；\`content\` 若是字符串直接用，否则 \`json.dumps\` 序列化。**一个形状进，一个形状出**：ReActLoop 只认 \`ToolResult\` 这一种形状，适配层负责把外部世界的任意形状归一到它认识的形状上。

\`agent_app/mcp_adapter.py:45-57\`

\`\`\`python
def make_mcp_tool_handler(client: MCPClient, tool_name: str):
    """工厂函数：把 tool_name 捕获进一个独立闭包。

    不要把这个闭包内联在 for 循环里——Python 闭包按引用捕获循环变量，
    循环结束后所有 handler 会一起指向最后一个工具（late-binding 迟绑定）。
    把工具名作为参数传入，每次调用都生成一个名字被钉死的独立闭包。
    """

    def handler(arguments: dict[str, Any]) -> ToolResult:
        result = client.call_tool(tool_name, arguments)
        return normalize_tool_result(result)

    return handler
\`\`\`

> 为什么这里要套一个"工厂函数"？直接看 docstring 的警告：*"不要把这个闭包内联在 for 循环里——Python 闭包按引用捕获循环变量，循环结束后所有 handler 会一起指向最后一个工具（late-binding 迟绑定）。"*——这正是 Python 经典的 late-binding（迟绑定）陷阱：循环里定义的闭包按**引用**捕获循环变量，循环结束后变量停在最后一个值，所有闭包看到的都是它。解法就是把 \`tool_name\` 变成**参数**：每次调用 \`make_mcp_tool_handler(client, tool.name)\` 都创建一个独立闭包，当前工具名被钉死在自己的作用域里。第 69 行的 for 循环正是这个工厂函数的调用方，一工厂、一闭包、一名。

\`agent_app/mcp_adapter.py:60-82\`

\`\`\`python
def register_mcp_tools(
    client: MCPClient,
    registry: ToolRegistry | None = None,
    *,
    name_prefix: str = "",
) -> ToolRegistry:
    """把 MCP 工具注册进 ToolRegistry 并返回该注册表。"""
    # 支持两种用法：注册进已有 registry，或（不传时）新建一个返回
    reg = registry or ToolRegistry()
    for tool in client.list_tools():
        # 本地名 = 前缀 + 远端名；前缀保证多个 server 的同名工具不冲突
        name = f"{name_prefix}{tool.name}"
        reg.register(
            ToolSpec(
                name=name,
                description=tool.description,
                input_schema=tool.input_schema,
            ),
            # 传远端原始名 tool.name，不是加了前缀的 name：
            # 远端 server 只认它自己的名字，前缀只是本地命名空间的私事
            make_mcp_tool_handler(client, tool.name),
        )
    return reg
\`\`\`

这一段就是概念里那张流程图的具体实现：\`client.list_tools()\` 拿到一批工具定义，每个定义转成一个 \`ToolSpec\`（name / description / input_schema，正好对应 \`loop.py:27-33\` 的本地工具规格），再用 \`make_mcp_tool_handler\` 生成它的 handler，一起 \`reg.register(...)\` 进 ToolRegistry。

> 为什么支持 \`name_prefix\`？因为多个 MCP server 可能都暴露一个叫 \`search\` 的工具，直接注册会互相覆盖。前缀（比如 \`"mcp1:"\`）保证名字全局唯一。\`registry or ToolRegistry()\` 则让调用方可以"注册进已有 registry"或"新建一个返回"，两种用法都支持。

- **第 68 行 \`registry or ToolRegistry()\`**：可选的现有注册表，不传就新建。
- **第 69-81 行循环体**：对每个远端工具，本地名 = 前缀 + 远端名，规格字段照搬（\`tool.description\`、\`tool.input_schema\`）。
- **第 80 行 \`make_mcp_tool_handler(client, tool.name)\`**：注意传的是**远端原始名** \`tool.name\`，不是加了前缀的 \`name\`——因为远端 server 只认它自己的名字，前缀是本地命名空间的私事。
- **协议的三要素在这里收口**：\`list_tools()\`（发现）、\`call_tool()\`（调用，藏在 handler 里）、结构化结果（\`normalize_tool_result\`）。Client 侧适配层到此闭环。

\`agent_app/mcp_adapter.py:85-90\`

\`\`\`python
def build_diagnosis_mcp_registry() -> ToolRegistry:
    """便捷入口：把 Week 3 本地诊断 MCP server 整体接进注册表。"""
    # 延迟导入：只有真用到诊断 server 时才加载，adapter 本身不依赖它
    from mcp_servers.diagnosis_tools import DiagnosisMCPServer

    return register_mcp_tools(DiagnosisMCPServer())
\`\`\`

一个便捷入口：把 Week 3 本地诊断 server 整个接进注册表。\`DiagnosisMCPServer\` 放在函数内部 import（延迟导入）——只有真要用到诊断 server 时才加载它，adapter 本身不依赖 server。这样 Week 4 换真实 server 时，这个函数换成 \`register_mcp_tools(RealMCPServer())\` 即可，上层（ReActLoop）完全无感。

### 再看 Server 侧：\`diagnosis_tools.py\`（161 行）

\`mcp_servers/diagnosis_tools.py:1-11\`

\`\`\`python
"""Day 17: 轻量教学用 MCP server，提供诊断工具。

本模块刻意不依赖官方 MCP SDK，只建模 Week 3 需要的三个协议级思想：

- list_tools(): 发现工具定义
- call_tool(name, args): 调用远端能力
- structured errors: 失败时返回 Agent 能推理的数据，而不是崩溃

Week 4 换真实 MCP server 时，agent_app.mcp_adapter 里的适配层不用改。
"""
from __future__ import annotations
\`\`\`

> 为什么 Server 侧不用官方 MCP SDK？docstring 写得很直白：*"本模块刻意不依赖官方 MCP SDK"*——刻意不依赖官方 SDK。它只建模 Week 3 需要的三个协议级思想：\`list_tools()\`（发现工具定义）、\`call_tool()\`（调用远端能力）、**结构化错误**（失败时返回 Agent 能推理的数据）。最后一行还点明 Week 4 的替换策略：换真实 server 时 **adapter 不用改**——这正说明"协议变化封装在适配层"不是口号，是文件间的真实约定。

\`mcp_servers/diagnosis_tools.py:18-37\`

\`\`\`python
@dataclass(slots=True, frozen=True)
class MCPToolDefinition:
    """最小的 MCP 风格工具定义（frozen=True，不可变）。"""

    name: str
    description: str
    input_schema: dict[str, Any]


@dataclass(slots=True)
class MCPToolCallResult:
    """最小的 MCP 风格调用结果。content 是结构化 dict，不是字符串。"""

    ok: bool
    content: dict[str, Any]
    error: str | None = None

    def to_json(self) -> str:
        payload = {"ok": self.ok, "content": self.content, "error": self.error}
        return json.dumps(payload, ensure_ascii=False, sort_keys=True)
\`\`\`

两个数据结构定义协议的两个"报文"：

- **\`MCPToolDefinition\`**（\`frozen=True\`，不可变）：工具定义 = 名字 + 描述 + 参数 schema。它和本地的 \`ToolSpec\`（\`loop.py:27-33\`）字段完全同构——这就是 adapter 能一行行照搬注册的原因。
- **\`MCPToolCallResult\`**：调用结果 = 成功标志 + 结构化内容 + 错误信息。注意 \`content\` 是 \`dict\`（结构化），不是字符串——字符串化是 Client 侧 \`normalize_tool_result\` 的事，server 只负责给结构化数据。\`to_json()\` 供 CLI 打印调试用。

\`mcp_servers/diagnosis_tools.py:40-48\`

\`\`\`python
class DiagnosisMCPServer:
    """进程内诊断 MCP server，供离线学习使用。"""

    def __init__(self) -> None:
        # 分发表：工具名 -> 实现方法（server 侧自己的"工具注册表"）
        self._tools = {
            "query_metric": self._query_metric,
            "search_sop": self._search_sop,
        }
\`\`\`

Server 内部维护一张**分发表**：工具名 → 实现方法。这张表就是"工具注册"在 server 侧的形态——adapter 把它暴露的注册进本地 ToolRegistry，它自己也在维护一份自己的注册表。

\`mcp_servers/diagnosis_tools.py:50-81\`

\`\`\`python
    def list_tools(self) -> list[MCPToolDefinition]:
        # 发现：向 Client 暴露工具清单（名字 / 描述 / 参数 schema）
        return [
            MCPToolDefinition(
                name="query_metric",
                description=(
                    "Query mock service metrics for diagnosis. Use for CPU, memory, "
                    "error_rate, qps, latency, and dependency_error signals."
                ),
                input_schema={
                    "type": "object",
                    "properties": {
                        "service": {"type": "string", "description": "Service name, e.g. trade-order"},
                        "metric": {"type": "string", "description": "Metric name, e.g. cpu or error_rate"},
                        "window": {"type": "string", "description": "Time window, e.g. 10m"},
                    },
                    "required": ["service", "metric"],
                },
            ),
            MCPToolDefinition(
                name="search_sop",
                description="Search mock SOP or incident notes by symptom keyword.",
                input_schema={
                    "type": "object",
                    "properties": {
                        "query": {"type": "string", "description": "Symptom or root-cause keyword"},
                        "top_k": {"type": "integer", "description": "Maximum number of SOP hits"},
                    },
                    "required": ["query"],
                },
            ),
        ]
\`\`\`

\`list_tools()\` 返回两份工具定义。注意每份定义的三个字段：

- **\`name\`**：模型看到并请求的名字，必须全局唯一（对这一个 server 而言）。
- **\`description\`**：模型决定"什么时候该用这个工具"的唯一依据——比如 \`query_metric\` 的描述明确列举它能查的信号（CPU、memory、error_rate、qps、latency、dependency_error），模型就是靠这句话把"查一下 cpu"对到 \`query_metric\` 上的。
- **\`input_schema\`**：JSON Schema 格式的参数契约，标明每个参数的类型、含义、哪些必填（\`required\`）。模型按它生成参数，server 按它校验。

这正是"**发现**"的落点：adapter 一次 \`list_tools()\`，就把这份清单原样变成本地注册表的 \`ToolSpec\`。

\`mcp_servers/diagnosis_tools.py:83-92\`

\`\`\`python
    def call_tool(self, name: str, arguments: dict[str, Any]) -> MCPToolCallResult:
        # 调用：按名字查分发表，找不到就返回"未知工具"的结构化错误
        handler = self._tools.get(name)
        if handler is None:
            return MCPToolCallResult(ok=False, content={}, error=f"unknown MCP tool: {name}")
        try:
            return handler(arguments)
        except Exception as exc:  # noqa: BLE001 - returned as structured observation
            # 异常不抛出，转成结构化错误喂回模型（错误也是数据，不是崩溃）
            return MCPToolCallResult(ok=False, content={}, error=str(exc))
\`\`\`

\`call_tool()\` 是"**调用**"的落点：按名字查分发表，查不到就返回 \`ok=False\` 的"未知工具"结果；执行时任何异常都被**捕获并转成结构化错误**（\`ok=False, error=str(exc)\`），而不是抛出。

> 为什么异常不直接抛出去？这呼应 Week 2 的约定：工具失败要变成**结构化的 observation** 喂回模型，让模型看到"这个工具失败了、原因是 X"，从而决定下一步（换个工具、换个参数、直接作答）。docstring 里"structured errors: 失败时返回 Agent 能推理的数据，而不是崩溃"说的就是这个——**错误也是数据，不是崩溃**。注释 \`# noqa: BLE001 - returned as structured observation\` 是在说明"宽泛捕获是有意的"。

\`mcp_servers/diagnosis_tools.py:94-119\`

\`\`\`python
    def _query_metric(self, arguments: dict[str, Any]) -> MCPToolCallResult:
        # 参数清洗：模型传来的参数形状不可信，先取默认值、再 strip/lower 归一化
        service = str(arguments.get("service", "")).strip() or "unknown"
        metric = str(arguments.get("metric", "")).strip().lower()
        window = str(arguments.get("window", "10m")).strip() or "10m"

        # 模拟监控系统的数据目录：(service, metric) -> 指标值
        catalog: dict[tuple[str, str], dict[str, Any]] = {
            ("trade-order", "cpu"): {"value": 96, "unit": "%", "status": "critical"},
            ("trade-order", "error_rate"): {"value": 18, "unit": "%", "status": "critical"},
            ("trade-order", "latency"): {"value": 2400, "unit": "ms", "status": "critical"},
            ("pay-core", "dependency_error"): {"value": 31, "unit": "%", "status": "critical"},
            ("inventory", "memory"): {"value": 94, "unit": "%", "status": "critical"},
            ("search-api", "qps"): {"value": 3200, "unit": "req/s", "status": "warning"},
        }
        # 兜底："没有数据"也是合法结果（value=0 / status=normal），不抛异常
        record = catalog.get((service, metric), {"value": 0, "unit": "", "status": "normal"})
        # 组装结构化返回：**record 展开指标值，evidence 拼一条人可读的证据串
        content = {
            "service": service,
            "metric": metric,
            "window": window,
            **record,
            "evidence": f"{service} {metric}={record['value']}{record['unit']} status={record['status']}",
        }
        return MCPToolCallResult(ok=True, content=content)
\`\`\`

第一个工具的实现，模拟"查监控指标"：

- **第 96-98 行参数清洗**：\`arguments.get(...)\` 取参，缺省给默认值（\`window\` 默认 \`10m\`），再 \`strip()\` / \`lower()\` 归一化。server 不能信任模型传来的参数形状，先清洗再使用。
- **第 101-108 行模拟数据目录**：一张 \`(service, metric) -> 指标值\` 的字典，模拟一个监控系统。表中全是 Week 3 诊断剧情用得到的关键信号：trade-order 的 cpu/error_rate/latency 全 critical，pay-core 依赖错误，inventory 内存告急，search-api qps 告警。
- **第 110 行兜底**：查不到的组合返回 \`value=0 / status=normal\`——**"没有数据"也要是合法结果**，不能抛异常。
- **第 112-118 行组装结构化返回**：\`**record\` 把指标值展开进 content，还拼了一条 \`evidence\` 字符串（如 \`trade-order cpu=96% status=critical\`）——既给人看，也让模型能原样复述证据。**整个返回是结构化 JSON，不是自然语言**：Day 19 的评测、Day 20 的护栏都能消费它。

\`mcp_servers/diagnosis_tools.py:121-148\`

\`\`\`python
    def _search_sop(self, arguments: dict[str, Any]) -> MCPToolCallResult:
        # 参数清洗：query 转小写；top_k 用 int(...) or 3 兜住 0/空值
        query = str(arguments.get("query", "")).lower()
        top_k = int(arguments.get("top_k", 3) or 3)
        # 模拟 SOP 文档库：三份诊断常用 runbook，keywords 混了中文关键词
        docs = [
            {
                "title": "CPU saturation runbook",
                "keywords": ["cpu", "5xx", "timeout", "latency"],
                "summary": "CPU saturation often appears with latency spikes and timeout logs. Collect profiling before restart.",
            },
            {
                "title": "OOM and memory pressure SOP",
                "keywords": ["oom", "memory", "内存"],
                "summary": "Memory pressure diagnosis requires heap, restart history, and recent traffic checks.",
            },
            {
                "title": "Dependency failure incident review",
                "keywords": ["dependency", "redis", "mysql", "依赖", "下游"],
                "summary": "Dependency failures should be confirmed by caller/callee error rates before rollback.",
            },
        ]
        # 朴素关键词检索（教学用，非向量检索）：子串匹配 + top_k 截断
        hits = [
            doc for doc in docs
            if any(keyword in query for keyword in doc["keywords"])
        ][:top_k]
        return MCPToolCallResult(ok=True, content={"query": query, "hits": hits})
\`\`\`

第二个工具，模拟"按症状搜 SOP"：

- **第 123-124 行**：query 转小写、\`top_k\` 转 int（\`int(...) or 3\` 兜住 \`top_k=0\` 传空的情况，默认 3）。
- **第 126-142 行模拟文档库**：三份 SOP——CPU 饱和、OOM 内存、下游依赖故障。每份带 \`keywords\`，其中特意混了中文关键词（\`内存\`、\`依赖\`、\`下游\`），因为诊断对话可能是中文的。
- **第 144-147 行关键词过滤**：\`any(keyword in query ...)\` 子串匹配 + \`[:top_k]\` 截断。注意这是**教学用的朴素检索**，不是向量检索——够走通协议闭环即可。
- **返回**：\`{"query": query, "hits": hits}\`，命中的文档数组整体作为结构化 content。

\`mcp_servers/diagnosis_tools.py:151-157\`

\`\`\`python
def main() -> None:
    """手工验证入口：列出全部工具并试调一次 query_metric。"""
    server = DiagnosisMCPServer()
    print("tools:")
    for tool in server.list_tools():
        print(f"- {tool.name}: {tool.description}")
    print(server.call_tool("query_metric", {"service": "trade-order", "metric": "cpu"}).to_json())
\`\`\`

\`main()\` 是手工验证入口：列出全部工具、调一次 \`query_metric\` 并打印 JSON——它展示的正是协议两端"怎么说话"：先 \`list_tools()\` 拿工具清单，再 \`call_tool\` 试调一次。对照上方嵌入的代码读这段即可：\`if __name__ == "__main__"\` 是标准的脚本入口兜底写法。

### 把两端连起来看

现在把两个文件拼成一条完整链路：

\`\`\`text
build_diagnosis_mcp_registry()  （mcp_adapter.py:85-90）
  -> register_mcp_tools(DiagnosisMCPServer())
  -> server.list_tools() 发现两份定义（query_metric / search_sop）
  -> 各转成 ToolSpec + 工厂生成的 handler，注册进 ToolRegistry
模型请求 "query_metric" -> registry 调 handler -> client.call_tool("query_metric", args)
  -> server 分发到 _query_metric -> 返回结构化 MCPToolCallResult
  -> normalize_tool_result 归一成 ToolResult -> 回填模型
\`\`\`

ReActLoop 从头到尾只见过 \`ToolRegistry.execute()\` 和 \`ToolResult\`，MCP 的字样它一次都没看到——协议被适配层完整吞掉了。

## 为什么这样写

- **工厂函数捕获工具名，而不是在循环里内联闭包**：这是本文件最重要的取舍。\`make_mcp_tool_handler\` 的 docstring 原话（\`mcp_adapter.py:48-49\`，docstring 原文在 46-51）：*"不要把这个闭包内联在 for 循环里——Python 闭包按引用捕获循环变量，循环结束后所有 handler 会一起指向最后一个工具（late-binding 迟绑定）。"* —— 循环里定义闭包会触发 Python 迟绑定，所有 handler 都指向最后一个工具；把工具名变成参数，每个 handler 的闭包就各自独立。
- **Client 侧用 \`Protocol\` 声明接口，不依赖任何具体实现**：\`MCPClient\` 的 docstring（\`mcp_adapter.py:16\`）写明 *"适配层依赖的最小 Client 协议：只要会"发现"和"调用"两件事即可。"*——只要对方会 \`list_tools()\` 和 \`call_tool()\` 就能用。这让"进程内模拟 server"和"真实 MCP server"可以互换，adapter 不用改。
- **Server 侧刻意不依赖官方 MCP SDK**：\`diagnosis_tools.py:3\` 的 docstring 原话：*"本模块刻意不依赖官方 MCP SDK"*。它只建模三个协议级思想（list / call / 结构化错误），换来的是零依赖、可单测、教学清晰；代价是传输层（stdio / HTTP）没实现——这是 Week 4 接真实 SDK 时补的，正好印证"协议变化封装在适配层"。
- **异常转结构化错误，而不是抛出**：\`diagnosis_tools.py:90-92\` 把异常捕获成 \`MCPToolCallResult(ok=False, error=str(exc))\`，行尾注释说明了意图：*"returned as structured observation"*——失败要变成模型能推理的数据，延续 Week 2 "工具异常不直接 raise，转成结构化 observation"的约定（见 \`loop.py\` 模块 docstring 第 2 条设计要点）。
- **结果在两端各做各的标准化**：server 只给结构化 dict（\`MCPToolCallResult.content\`），Client 侧 \`normalize_tool_result\` 才负责字符串化（\`mcp_adapter.py:41\` 的 \`json.dumps\`）——\`ToolResult.content\` 必须是字符串（\`loop.py:36-42\`），协议边界上的转换集中在一处，不散落在业务代码里。

## 本章小结

- MCP 是"AI 侧的 USB-C"：工具做成标准外设（MCP Server），Agent 只需一个统一客户端就能发现和调用。
- 三要素：Tools（主动执行）、Resources（被动提供上下文）、Prompts（复用提示模板）；本课程实现 Tools 这个最小闭环。
- Client 侧 \`mcp_adapter.py\` 把远端工具定义映射成 \`ToolSpec\` + handler 注册进 \`ToolRegistry\`，ReActLoop 完全无感。
- 工厂函数 \`make_mcp_tool_handler\` 用参数捕获工具名，避开 Python 闭包 late-binding 陷阱；Server 侧异常转结构化错误，错误也是模型能推理的数据。
- 这一处是"适配层"的事——后面 Day 18-21 只是把这种"发现-调用-回填"组织成多 agent 分工、评测、护栏，**核心没变复杂**。

## 一句话边界

- MCP 不替代 Function Calling：FC 是模型侧表达，MCP 是工具侧集成。
- MCP 不替代 ToolRegistry：MCP 是外部能力来源，ToolRegistry 是本地分发入口。
- MCP Server 提供能力，本身不是 Agent--它不负责自主协商任务（那是多 Agent 的事）。
- 危险动作（重启、删除、扩容）不该直接暴露给模型自动调用，要进 Day 20 的人工确认。

## 读完应该能用自己的话回答

1. MCP 解决的问题是什么？没有它会怎样？
2. Function Calling、MCP、ToolRegistry 各回答什么问题？它们是什么关系？
3. Host / Client / Server 各自的职责是什么？
4. MCP 工具怎么接进 ReActLoop？为什么 Loop 不需要知道 MCP 的存在？
5. MCP 有哪三类能力？为什么工具结果要结构化？

## 想深入

MCP 的协议细节（JSON-RPC、握手、传输）、与 CLI 的取舍、什么时候该用 MCP 什么时候不该用等，见八股·04 工具调用。

## 交给 AI 的问题

\`\`\`text
我正在学 MCP 协议。请解释：1) MCP 是什么、解决什么问题；2) 它和 Function Calling、ToolRegistry 是什么关系；3) Host / Client / Server 各做什么；4) 一个外部工具怎么通过 MCP 被 Agent 调用。用"接一个 GitHub 工具"做例子，不要给完整代码，不要引入框架名称。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. MCP 的主要价值是？**

A. 替代所有 prompt
B. 统一发现和调用外部工具上下文
C. 让模型不需要工具
D. 专门做向量检索

**Q2. 本包的 MCP adapter 最终把远端工具映射到哪里？**

A. \`ToolRegistry\`
B. \`.env\`
C. \`README\`
D. \`pytest.ini\`

**Q3. Python late-binding bug 常发生在哪里？**

A. 循环里定义闭包并引用循环变量
B. 使用 dataclass
C. 读取 JSONL
D. 写 README

**Q4. MCP 工具描述中不应该出现什么？**

A. 工具用途
B. 参数 schema
C. 生产密钥和内网地址
D. 返回格式说明

### 开放题（1 道）

**Q5.** 用自然语言说明：为什么 MCP tool wrapper 应该用工厂函数捕获工具名？

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | MCP 的价值是让 Agent 用统一协议发现和调用外部工具/上下文，而不是为每个服务重写一套适配。A/C 与 MCP 无关；D 只是 MCP 生态里的一种具体场景。 |
| Q2 | **A** | \`register_mcp_tools\` 把远端工具定义转成 \`ToolSpec\` + handler，注册进 \`ToolRegistry\`（见 \`mcp_adapter.py:60-82\`）。 |
| Q3 | **A** | 闭包按引用捕获循环变量，循环结束后所有闭包都看到最后一个值；工厂函数用参数捕获可避免（见 \`make_mcp_tool_handler\` 的 docstring）。 |
| Q4 | **C** | 工具描述是给模型看的公开元数据，生产密钥和内网地址会泄露给模型和日志，绝不该写进描述。 |

### 开放题参考思路

**Q5. 为什么用工厂函数捕获工具名？**

- Python 闭包会按引用捕获变量，循环结束后多个 wrapper 可能都看到最后一个工具名。
- 工厂函数把当前工具名作为参数创建独立闭包，可保证每个 handler 调用正确工具。
`,Ff=`---
title: Day 18 Multi-agent 诊断分工
tags:
  - week3/day18
  - concept
  - code
  - exercise
---

# Day 18：Multi-agent 与诊断分工

> 阅读约 30-40 分钟 ｜ 前置：[[day14-Subagent子任务隔离]]、[[day13-LangGraph工作流编排]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/multi_agent.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

Day 14 的 sub-agent 是主 Agent 派同质子任务、各自隔离跑完返回摘要。但当任务本身需要多个不同角色协作（诊断一个故障要有人查指标、有人查日志、有人复核结论），单纯 sub-agent 不够，需要 Multi-agent 分工。

今天要看清 Multi-agent 和 sub-agent 的区别、怎么分工、以及什么时候才该上多 agent（不是越多越好）。

**一句话主旨**：多 agent 不是"多开几个模型"，而是把任务按角色切开、各角色在窄上下文里查证、再由一个复核者汇总成结论。今天的代码走读就沿着 Router → Worker → Reviewer 这条流水线展开。

## 一个例子

诊断一个线上故障：

\`\`\`text
单 agent：一个 Agent 既要查指标、又要查日志、又要查 SOP、还要复核结论
  -> 上下文塞满各种证据，角色混乱，容易漏查或草草收尾

多 agent 分工：
  Router 把任务分给 指标分析 / 日志分析 / SOP检索 三个 worker
  各 worker 在自己上下文里查证，返回结论
  Reviewer 复核三个结论，给最终归因
  -> 每个角色专注窄任务，主上下文只看结论
\`\`\`

差别在于：多 agent 把一个复杂任务拆成不同角色，各司其职，再汇总。

## 这个概念是什么

**Multi-agent** 是把一个任务拆给多个角色化的 Agent 协作完成。和 sub-agent 的区别：sub-agent 是主 Agent 派同质子任务（读三篇文档各返摘要）；Multi-agent 是不同角色干不同事（指标分析、日志分析、复核），有分工和协作。

典型结构是 Router + Worker + Reviewer：

- **Router**：把任务分派给合适的 worker。
- **Worker**：各角色在自己上下文里干活，返回结论。
- **Reviewer**：复核各 worker 的结论，解决冲突，给最终归因。

## 代码走读：一条确定性的 Router → Worker → Reviewer 流水线

今天只走读一个文件 \`multi_agent.py\`，完整代码已嵌入下方代码走读。下面的每一段引用都标注了 \`文件:行号\`，可对照正文嵌入的代码核对。先看一眼整条流水线的形状：

\`\`\`mermaid
flowchart LR
    A[告警 alert] --> R[route_incident Router]
    R --> M[metrics_worker]
    R --> L[logs_worker]
    R --> S[sop_worker]
    M --> V[review_findings]
    L --> V
    S --> V
    V --> D[DiagnosisReport 最终报告]
\`\`\`

### 入口：18 行就装下整条流水线

\`agent_app/multi_agent.py:256-275\`

\`\`\`python
def run_multi_agent_diagnosis(
    alert: str,
    *,
    external_evidence: list[str] | None = None,
) -> DiagnosisReport:
    """整条流水线入口：Router 分派 -> 逐个执行 Worker -> Reviewer 汇总。

    顺序执行（无并发、无消息传递）——分工的骨架是"把活派给对的人"。
    """
    workers = route_incident(alert)
    findings: list[WorkerFinding] = []
    # 按路由结果逐个执行 worker：顺序执行，没有并发也没有消息传递。
    for worker in workers:
        if worker == "metrics":
            findings.append(metrics_worker(alert))
        elif worker == "logs":
            findings.append(logs_worker(alert))
        elif worker == "sop":
            findings.append(sop_worker(alert))
    return review_findings(alert, findings, external_evidence=external_evidence)
\`\`\`

逐块看：

- **第 261 行 docstring**：一句中文写死全部流程——"Router 分派 -> 逐个执行 Worker -> Reviewer 汇总"。配合模块 docstring 的 **deterministic（确定性）**（\`multi_agent.py:3-4\`）：同样的告警永远走同一条路，这是后面测试和评估能复现的前提。
- **第 265 行 \`route_incident(alert)\`**：Router 先登场，把一条告警翻译成"该叫哪几个 worker 来"。
- **第 268-274 行 for 循环**：按路由结果逐个执行 worker，把每个 worker 的 \`WorkerFinding\` 收进 \`findings\` 列表。这里没有并发、没有消息传递——分工的骨架是"顺序把活派给对的人"，并行是后加的优化。
- **第 275 行 \`review_findings(...)\`**：所有 worker 的结论汇到 Reviewer 手里，出最终报告。注意 \`external_evidence\` 一路从参数透传进来——复核阶段还能注入外部证据（比如人工补充的实时数据）。

> 为什么入口先于一切设计成"Router → Workers → Reviewer"三段？因为这是"分工"的最小单位：先决定谁干（路由），再让各角色干（执行），最后把结果合并成一份（汇总）。任何多 agent 系统，放大看都是这三步的某种变体。

### Router：分派为什么用规则，不请 LLM 来分？

\`agent_app/multi_agent.py:84-101\`

\`\`\`python
def route_incident(alert: str) -> list[WorkerName]:
    """把告警路由给专注的 worker，规则稳定：同样输入永远同样输出。

    用关键词规则而不是 LLM 分类：零 token 成本、结果可复现、行为可审计。
    """
    text = alert.lower()
    workers: list[WorkerName] = []
    # 三组 if 互相独立：一条告警可以同时命中多个 worker，按需组合。
    if any(kw in text for kw in ["cpu", "内存", "memory", "qps", "5xx", "错误率", "latency", "延迟", "成功率"]):
        workers.append("metrics")
    if any(kw in text for kw in ["timeout", "exception", "oom", "error", "日志", "trace", "慢查询", "超时"]):
        workers.append("logs")
    if any(kw in text for kw in ["sop", "历史", "复盘", "类似", "runbook", "怎么办"]):
        workers.append("sop")
    # 兜底：谁都没命中时至少派最通用的指标 worker，保证流水线不空转。
    if not workers:
        workers.append("metrics")
    return workers
\`\`\`

为什么这里要用关键词规则而不是把告警丢给 LLM 分类？三个理由：

- **稳定性**：docstring 明说"规则稳定：同样输入永远同样输出"。规则对同样的输入永远给同样的输出；LLM 分类可能十次十样——Router 一旦不稳定，下游 worker 的组合就跟着漂，整条流水线没法测试。
- **便宜**：一次路由是纯字符串匹配，零 token 成本。诊断告警本身已经花了不少钱，分派环节不该再烧。
- **可审计**：三组关键词一目了然，任何人能看懂"为什么这条告警进了日志 worker"。

还有一个容易忽略的细节：三组 \`if\` 是**独立判断**，一条告警可以同时命中多个 worker（"内存 OOM 导致 5xx"会同时进 metrics 和 logs）——多 agent 分工不是单选题，是"按需组合"。

最后看第 99-100 行 \`if not workers: workers.append("metrics")\`：谁都没命中时，兜底派给指标 worker——宁可查一个最通用的方向，也不能让流水线空转。**路由必须有默认路径**。

### Worker：一个角色，只在自己的窄上下文里查证

\`agent_app/multi_agent.py:104-138\`

\`\`\`python
def metrics_worker(alert: str) -> WorkerFinding:
    """指标角色：在自己的窄上下文里查证指标信号，返回"材料"而非结论。"""
    text = alert.lower()
    evidence: list[str] = []
    # 默认"未发现异常"：没有证据就不硬给结论，宁可低置信也不编根因。
    hypothesis = "指标未出现明确异常"
    category = "unknown"
    confidence = 0.45

    if "cpu" in text:
        evidence.append("CPU saturation signal found")
        category = "metrics"
        hypothesis = "CPU 饱和导致请求处理延迟或错误率上升"
        confidence = 0.82
    # 置信度用 max 而不是累加：多个弱信号不该堆出强结论，最强的证据说了算。
    if any(kw in text for kw in ["内存", "memory", "oom"]):
        evidence.append("memory pressure or OOM signal found")
        category = "resource"
        hypothesis = "内存压力或 OOM 导致服务不稳定"
        confidence = max(confidence, 0.8)
    if any(kw in text for kw in ["5xx", "错误率", "成功率"]):
        evidence.append("error rate or success rate degradation found")
        # 弱信号只在还没分类时才改写 category——强信号优先。
        category = "metrics" if category == "unknown" else category
        confidence = max(confidence, 0.72)
    if any(kw in text for kw in ["latency", "延迟"]):
        evidence.append("latency spike signal found")
        category = "metrics" if category == "unknown" else category
        confidence = max(confidence, 0.7)
    if "qps" in text:
        evidence.append("traffic volume change signal found")
        category = "metrics" if category == "unknown" else category
        confidence = max(confidence, 0.68)

    return WorkerFinding("metrics", category, evidence, hypothesis, confidence)
\`\`\`

逐块问几个"为什么"：

- **为什么 worker 不直接下结论，而是返回"证据 + 假设 + 置信度"？** 因为 worker 不是决策者，它是**提供材料的角色**。真正的决策发生在 Reviewer——如果每个 worker 都说"根因是 X"，三个根因撞在一起就没法综合了。\`WorkerFinding\` 的五个字段（worker/category/evidence/hypothesis/confidence）就是"可被综合的材料"的标准格式。
- **为什么先默认"未发现异常"（第 109-111 行）？** 这是最重要的工程习惯：**没有证据就不硬给结论**。默认假设是 \`hypothesis = "指标未出现明确异常"\`、\`confidence = 0.45\`（中等偏低），只有命中关键词才改写假设、提高置信度。宁可承认没查出来，也不编一个"看起来合理"的根因。
- **为什么置信度用 \`max(confidence, ...)\` 而不是累加？** 多个弱信号不该堆出一个强结论。命中三个"0.7 级别"的信号，置信度还是 0.8 出头，不会变成 2.1——置信度是"最强的那个证据说了算"，不是"证据数量说了算"。而 \`category\` 只在仍为 \`unknown\` 时才被改写（如第 127 行），弱信号不会抢走强信号的分类。

### 另外两个 Worker：形状相同，领域不同

日志 worker 和 SOP worker 与指标 worker 完全同构：关键词 → 证据 → 假设 → 置信度。区别只在"它懂什么"。

\`agent_app/multi_agent.py:141-172\`

\`\`\`python
def logs_worker(alert: str) -> WorkerFinding:
    """日志角色：从日志关键词判断"错误是源头还是被下游扩散出来的"。"""
    text = alert.lower()
    evidence: list[str] = []
    hypothesis = "日志中暂未发现明确异常关键词"
    category = "logs"
    confidence = 0.5

    if any(kw in text for kw in ["timeout", "超时"]):
        evidence.append("timeout log signal found")
        hypothesis = "大量 timeout 表明请求处理或下游依赖响应超时"
        confidence = 0.78
    if "oom" in text:
        evidence.append("OOM keyword found")
        hypothesis = "OOM 日志指向内存耗尽或容器被系统终止"
        category = "resource"
        confidence = 0.86
    if any(kw in text for kw in ["exception", "error"]):
        evidence.append("exception or error keyword found")
        confidence = max(confidence, 0.7)
    if any(kw in text for kw in ["mysql", "redis", "dependency", "下游", "依赖"]):
        evidence.append("dependency error keyword found")
        hypothesis = "下游依赖异常导致当前服务错误扩散"
        category = "dependency"
        confidence = max(confidence, 0.8)
    if "慢查询" in text:
        evidence.append("slow query keyword found")
        hypothesis = "数据库慢查询导致接口延迟或超时"
        category = "dependency"
        confidence = max(confidence, 0.82)

    return WorkerFinding("logs", category, evidence, hypothesis, confidence)
\`\`\`

注意 logs_worker 引出了两个新类别：\`resource\`（OOM 指向内存耗尽）和 \`dependency\`（mysql/redis/下游依赖异常）——**日志这个角色的价值，正是能区分"错误是源头还是被扩散出来的"**。同一类现象，指标 worker 和日志 worker 会给出不同视角的假设，这就是分工的意义。

\`sop_worker\` 里有个小差异值得注意——它的默认证据不是空列表，而是 \`evidence = ["SOP search completed"]\`（\`multi_agent.py:179\`）：**检索动作本身也要留痕**，哪怕什么都没查到，也要让 Reviewer 知道"这一步做过了，结论是没命中"。

\`agent_app/multi_agent.py:175-200\`（其中 189-198 折叠）

\`\`\`python
def sop_worker(alert: str) -> WorkerFinding:
    """SOP 角色：检索历史 runbook / 复盘记录，给出历史处置建议。"""
    text = alert.lower()
    # 默认证据不是空列表：检索动作本身也要留痕，让 Reviewer 知道"这一步做过了"。
    evidence = ["SOP search completed"]
    category = "unknown"
    hypothesis = "SOP 未命中高置信根因"
    confidence = 0.48

    if any(kw in text for kw in ["cpu", "5xx", "timeout", "超时"]):
        evidence.append("SOP hit: CPU saturation runbook")
        category = "metrics"
        hypothesis = "历史 SOP 建议先采集 profiling，再评估扩容或重启"
        confidence = 0.74
    …（折叠：OOM/内存命中块（189-193）、依赖故障命中块（194-198），结构与上面的 CPU 命中块一致，各改写 category/hypothesis/confidence，见 multi_agent.py:189-198）

    return WorkerFinding("sop", category, evidence, hypothesis, confidence)
\`\`\`

折叠掉的第 189-198 行与上面引用的 CPU 命中块逐行同构：命中 \`oom/memory/内存\` → 假设"检查 heap、重启历史和流量变化"；命中 \`redis/mysql/依赖/下游\` → 假设"确认 caller/callee 错误率后再决定回滚"。三个 worker 全部是同一个模式换关键词——**"角色"在代码里不是不同的模型，而是不同的知识范围与判断规则**。

### 数据契约：worker 之间传什么，比怎么传更重要

\`agent_app/multi_agent.py:18-55\`

\`\`\`python
@dataclass(slots=True)
class WorkerFinding:
    """worker 返回给 Reviewer 的"材料"：证据 + 假设 + 置信度，而不是最终结论。"""

    worker: WorkerName
    category: str
    evidence: list[str]
    hypothesis: str
    confidence: float

    …（折叠：to_dict 序列化方法，把五个字段打包成 dict，见 multi_agent.py:28-36）


@dataclass(slots=True)
class DiagnosisReport:
    """最终诊断报告：Reviewer 汇总所有 worker 的材料后生成。

    requires_human 把"该人工介入"变成报告的一部分，而不是藏在某段对话里。
    """

    alert: str
    routed_workers: list[WorkerName]
    findings: list[WorkerFinding]
    root_cause: str
    category: str
    confidence: float
    # 可变默认值必须用 field(default_factory=list)，否则所有实例共享同一个列表。
    evidence: list[str] = field(default_factory=list)
    next_steps: list[str] = field(default_factory=list)
    requires_human: bool = False
\`\`\`

- **为什么是 dataclass 而不是自由文本？** 结构化的返回是 multi-agent 的命脉：Router 要按名字分派（\`WorkerName\` 在 \`multi_agent.py:15\` 被定义为 \`Literal["metrics", "logs", "sop"]\`，类型层面就限定只有三个角色，写错角色名编译期报错），Reviewer 要按 \`confidence\` 排序比较、把 \`evidence\` 列表拍平合并——这些操作对自由文本都做不到。Day 14 的"摘要式返回"是同一思路：**协作的接口必须固定，参与者才好各写各的**。
- **\`requires_human: bool = False\`（第 55 行）是个重要字段**：后面会看到 Reviewer 填它，把"该人工介入"变成最终报告的一部分，而不是藏在某段对话里。
- **\`field(default_factory=list)\`（第 53-54 行）**：dataclass 里可变默认值必须用 factory，否则所有实例共享同一个列表——这是 Python 的坑，不是多 agent 的概念，但写多 agent 数据模型时天天碰到。

### Reviewer：冲突、置信度与"危险动作"

\`agent_app/multi_agent.py:203-253\`

\`\`\`python
def review_findings(
    alert: str,
    findings: list[WorkerFinding],
    *,
    external_evidence: list[str] | None = None,
) -> DiagnosisReport:
    """把各 worker 的材料合并成最终诊断报告（Reviewer 角色）。"""
    if not findings:
        # 一个 worker 都没派出（或全部失败）：明确承认证据不足，不硬凑结论。
        return DiagnosisReport(
            alert=alert,
            routed_workers=[],
            findings=[],
            root_cause="证据不足，无法判断根因",
            category="unknown",
            confidence=0.0,
            next_steps=["补充指标、日志和 SOP 查询"],
        )

    # 冲突处理第一规则：置信度最高的假设胜出，best 的 hypothesis 就是根因。
    best = max(findings, key=lambda item: item.confidence)
    # 把各 worker 的证据展平合并成一条证据链，最终报告可回溯到每条原始证据。
    evidence = [item for finding in findings for item in finding.evidence]
    if external_evidence:
        # 复核者也可以查证：外部证据（如人工补充的实时数据）拼进证据链。
        evidence.extend(external_evidence)
    # 平均置信度 + 0.05 × (worker 数 - 1)，封顶 0.95：相互印证可小幅加分，
    # 但任何自动结论都保留怀疑空间，不会到 100%。
    confidence = min(0.95, round(sum(f.confidence for f in findings) / len(findings) + 0.05 * (len(findings) - 1), 2))
    # 危险动作红线：告警里出现这些词就要求人工介入，本文件没有任何自动执行路径。
    risky = any(kw in alert for kw in ["重启", "回滚", "删除", "扩容", "清理"])
    next_steps = [
        "保留证据并补充时间窗",
        "对照最近发布、流量和依赖变更",
    ]
    if confidence >= 0.8:
        next_steps.append("进入人工确认后执行止损动作")
    else:
        next_steps.append("证据不足，先补充工具查询")

    return DiagnosisReport(
        alert=alert,
        routed_workers=[finding.worker for finding in findings],
        findings=findings,
        root_cause=best.hypothesis,
        category=best.category,
        confidence=confidence,
        evidence=evidence,
        next_steps=next_steps,
        requires_human=risky or confidence >= 0.8,
    )
\`\`\`

Reviewer 怎么处理多个 worker 的冲突？逐块看：

- **第 210-220 行空 findings 兜底**：一个 worker 都没派出（或全部失败）时，不硬凑结论，明确写"证据不足，无法判断根因"，并把"补充指标、日志和 SOP 查询"列为下一步。**多 agent 也允许承认失败**。
- **第 223 行 \`best = max(findings, key=lambda item: item.confidence)\`**：**冲突处理的第一条规则——置信度最高的假设胜出**。指标说"CPU 饱和"、日志说"依赖异常"时，谁置信度高听谁的，\`best.hypothesis\` 就是根因。这是规则，不是让 LLM 现场商量。上一节的"强症状优先于弱根因推断"，在代码里就落地成这一句。
- **第 225 行 \`evidence = [item for finding in findings for item in finding.evidence]\`**：把各 worker 的证据**展平合并**成一条证据链——最终报告要能回溯到每一条原始证据。
- **第 226-228 行 \`external_evidence\`**：Reviewer 不只是"读 worker 报告"，还能接收外部证据拼进证据链——复核者也可以查证。
- **第 231 行置信度公式**：\`平均置信度 + 0.05 × (worker 数 - 1)\`，再封顶 0.95。含义：**多角色相互印证可以小幅加分，但永远不会到 100%**——0.95 封顶是"再确定也保留怀疑空间"的工程表达。
- **第 232-241 行危险动作红线**：告警文本里出现"重启/回滚/删除/扩容/清理"等词 → \`risky=True\`；置信度 ≥ 0.8 才把"进入人工确认后执行止损动作"写进 next_steps，否则下一步是"先补充工具查询"。最终第 252 行 \`requires_human = risky or confidence >= 0.8\`——**诊断报告自己声明"这件事必须人工拍板"**。Worker 和 Reviewer 都只是诊断者，整个文件里没有任何代码路径会自动执行危险动作（概念部分说的"必须进 Day 20 的人工确认"，就是这里的 \`requires_human\` 在接流程）。

> ### 岔路：真实的 multi-agent 里，worker 之间要直接对话吗？（可跳读，不影响主线）
> 本实现里三个 worker **互相不通信**，全部结论经 Reviewer 单向汇总——这是"星型"协作：一个中心、外围各干各的。另一种是"网格型"：worker 之间互相传话、互相质疑。星型便宜、好调试、结论路径清楚；网格型表达力强但协调成本爆炸（谁先说话、消息怎么收敛、怎么避免回声室）。真实框架（如 LangGraph 的多角色 node）也大量采用"分派-汇总"结构。记住：**通信方式本身也是成本，能星型就别网格**。

### 边界：什么时候不该拆——单 agent 就够了

Multi-agent 是手段不是目的。拆分的代价（概念部分已列）：多角色通信、token 增加、调试复杂。什么时候**不**该拆？代码里其实早有答案：

\`agent_app/subagent.py:1-15\`

\`\`\`python
"""Day 14: Sub-agent 与子任务隔离。

纠偏：Sub-agent 不是"多开几个 Agent"，是独立 messages[] + 工具子集
+ 受限上下文 + 摘要式返回。简单工具别开 sub-agent（性能崩）。

设计要点（对应易错点）：
- 子 agent 用独立 messages[]，不共享主上下文（隔离）
- 子 agent 只拿到工具子集（最小权限）
- 子 agent 只返回摘要，不返回完整 trace（避免上下文污染）
- 主 agent 只看摘要做综合

典型场景：长文档分析、代码 review、并行检索。

本模块复用 Day 8 的 ReActLoop + Day 9 的工具子集。
"""
\`\`\`

Day 14 的模块 docstring 第一句就纠偏："简单工具别开 sub-agent（性能崩）"——**拆是有性能成本的，小活拆了只会更慢更贵**。再看 Day 14 的并行派发：

\`agent_app/subagent.py:113\`

\`\`\`python
        """并行派发多个子任务（顺序执行模拟，真实并行需 asyncio）。
\`\`\`

本 Day 的"多 agent"其实也还是顺序执行——代码里明说"顺序执行模拟"。课程刻意把"真并行"留到后面，先把**分工的骨架**讲清楚。

回到判断标准（呼应"这个概念是什么"）：

- **该拆**：任务天然可分解成不同角色（指标 / 日志 / SOP）；单 agent 上下文太长、注意力被稀释；需要独立复核（生成者和验证者分离）；不同子任务需要不同工具权限（按角色隔离）。
- **不该拆**：简单 FAQ、单个指标查询、单文档摘要——这些 single-agent + tools 一趟就能干完，拆了只是多付几倍 token 和多一叠调试问题。**多 agent 的第一条纪律是"能不拆就不拆"**——简单任务、单 agent + 多工具能解决就别拆。

本实现的朴素也印证了这一点：三个 worker 全是规则函数、零 LLM 调用，整条流水线一次诊断的"智能"完全来自**分工本身**。当你的任务还没有三个可分离的领域时，强行拆只会得到三份重复的上下文和一份更长的延迟。

## 为什么这样写

- **路由用规则不用 LLM，确定性优先**：文件 docstring 原话 *"本实现刻意保持确定性与离线优先：用规则把告警路由到专注的 worker，这样测试与评估基线才能稳定复现。"*（\`multi_agent.py:3-4\`）——测试和评估基线要稳定，路由就不能"每次看心情"。
- **worker 留好替换位**：docstring 下一句 *"Week 4 可以把单个 worker 替换成真实工具或 LLM 调用。"*（\`multi_agent.py:5\`）——今天的 worker 是纯规则占位，但接口（\`WorkerFinding\` / \`DiagnosisReport\`）是稳定契约，Week 4 换实现不换形状。
- **没有证据就不硬给结论**：每个 worker 的默认假设都是"未发现异常"，比如 \`"指标未出现明确异常"\`（\`multi_agent.py:109\`）、\`"SOP 未命中高置信根因"\`（\`multi_agent.py:181\`），置信度只随证据提高——宁可低置信，不编根因。
- **危险动作一律转人工**：\`risky = any(kw in alert for kw in ["重启", "回滚", "删除", "扩容", "清理"])\`，最终 \`requires_human = risky or confidence >= 0.8\`（\`multi_agent.py:233,252\`）——诊断系统只归因、不执行。
- **置信度封顶 0.95**：\`min(0.95, ...)\`（\`multi_agent.py:231\`）——多角色相互印证可以加分，但任何自动结论都保留怀疑空间，不给自己留"100% 确定"的台阶。

## 本章小结

- Multi-agent 是角色分工（Router 分派、Worker 查证、Reviewer 复核），和 Day 14 的同质子任务不一样。
- 本实现是"确定性 + 离线优先"的最小骨架：规则路由、规则 worker、顺序执行，全部可测试可复现。
- worker 返回结构化材料（证据 + 假设 + 置信度）而不是结论，结论由 Reviewer 按规则合并：没有证据就低置信，冲突时置信度最高者胜出。
- 危险动作（重启/回滚/扩容）永不自动执行，报告通过 \`requires_human\` 声明人工介入点。
- 这一处是"角色分工 + 结构化汇总"的事——后面 Week 4 只是把规则 worker 换成真工具与 LLM 调用、把人工确认接进流程，核心没变复杂。

## 一句话边界

- Multi-agent 是不同角色协作，不是 sub-agent 那种同质子任务，更不是"多开几个模型"。
- 典型结构 Router + Worker + Reviewer，各 worker 独立上下文 + 最小权限 + 结构化返回。
- 拆多 agent 是为了隔离、专注、独立复核，不是为了"更高级"。
- 多 agent 有协调成本，单 agent 能解决就别拆。
- 多 worker 结论冲突时 Reviewer 要有规则，危险动作必须人工确认。

## 读完应该能用自己的话回答

1. Multi-agent 和 Day 14 的 sub-agent 有什么区别？
2. Router + Worker + Reviewer 各干什么？
3. 为什么不一个 Agent 把所有事都干了？
4. 什么时候才该上多 agent？什么时候不该？
5. 多个 worker 的结论冲突了怎么办？危险动作谁执行？

## 想深入

多 agent 协作模式、生成者/验证者分离、协调成本与一致性等，见八股·06 多智能体。

## 交给 AI 的问题

\`\`\`text
我正在学 Multi-agent。请解释：1) Multi-agent 和单 agent 多工具、sub-agent 的区别；2) Router/Worker/Reviewer 各干什么；3) 为什么不一个 agent 全干；4) 什么时候才该上多 agent。用"诊断一个线上故障"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. Multi-agent 适用场景**

Multi-agent 最适合什么情况？

A. 所有简单 FAQ
B. 任务天然可分解、角色边界清楚、上下文需要隔离
C. 只为了显得高级
D. 不需要工具的单轮回答

**Q2. Router 职责**

诊断 Router 的职责是？

A. 执行所有工具
B. 根据输入选择需要的 worker
C. 写最终报告
D. 存储会话

**Q3. Reviewer 职责**

Reviewer 的关键职责是？

A. 删除证据
B. 合并证据、判断置信度、指出缺口
C. 替代所有 worker
D. 直接执行重启

**Q4. 规则路由**

Router 优先用规则而非 LLM 的主要原因是？

A. 规则更贵
B. 路由稳定性更好
C. LLM 不能分类
D. 规则不能测试

### 开放题（1 道）

**Q5. 开放题**：写出一个不应该拆成 Multi-agent 的任务，并说明为什么 single-agent + tools 更合适。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 |
| --- | --- |
| Q1 | **B** |
| Q2 | **B** |
| Q3 | **B** |
| Q4 | **B** |

### 开放题参考思路

- 简单 FAQ、单个指标查询、单文档摘要通常不需要 Multi-agent。
- 拆分会增加延迟、成本和调试复杂度，证据收益不明显。
`,Bf=`---
title: Day 19 评测体系
tags:
  - week3/day19
  - concept
  - code
  - exercise
---

# Day 19：评测体系（怎么知道 Agent 好不好）

> 阅读约 30-40 分钟 ｜ 前置：[[day18-Multi-agent诊断分工]]、[[day02-Prompt工程]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/evaluator.py\`、\`eval/run_eval.py\`、\`eval/dataset.jsonl\`、\`eval/baseline-v0.md\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

Agent 跑通后，最容易出现一个错觉：它能输出一段像样的结果，就说明系统变好了。但 LLM 应用不能靠感觉验收。改了 Prompt 或换了模型，你无法回答三个问题：它到底对了多少？错在哪？改完是真变好还是换了一种错法？

Day 2 做 Prompt 工程时用小样本比较版本、记字段级准确率。今天把这个习惯升级到 Agent 级：评整个 Agent 链路，而不只是一个 JSON 抽取结果。

**一句话主旨**：评测 = 数据集 + 评分器 + baseline；分数说"有问题"，trace 说"问题在哪"，两者配合才能回答"改完是真变好还是换了一种错法"。

## 一个例子

改了一个诊断 Agent 的 Prompt：

\`\`\`text
没有评测：改完看几个 case，"感觉变好了"，上线后发现某些老场景坏了，不知道是哪次改的
有评测：改前跑一遍 baseline（20 条 case，准确率 0.75），改后再跑一遍（0.80）
  某个类别从 0.5 掉到 0.4 一眼看到，知道改 Prompt 让 dependency 类场景退化了
  -> 改不改、改得对不对，用数据说话
\`\`\`

差别在于：评测把"系统当前能力"冻结成可比较的数字，而不是靠感觉。

## 这个概念是什么

**Agent 评测** 是用一批标注好的用例（golden dataset）+ 一套评分器，批量跑 Agent、给结果打分、产出可比较的 baseline。它不是给一个回答打分，而是给整个智能体系统建立可重复、可比较、可追踪的质量控制。

Agent 评测算的是一整条执行链路（Router 分派 -> Worker 查证 -> Reviewer 归因），不只是最终答案。客服说"退款已处理"不算成功，数据库真有退款记录才算。

### 三个组成部分

\`\`\`text
1. Golden Dataset：一批标注好的用例（输入 + 期望输出/期望字段）
2. 评分器：判断 Agent 输出对不对（exact / rule / llm-judge 三类）
3. Baseline：当前数据集 + 当前代码下跑出来的准确率和失败分布
\`\`\`

跑评测 = 用 dataset 的每条输入跑 Agent，用评分器比对输出和期望，汇总成准确率 + 失败 case 列表。

### 三类评分器

| 评分器 | 怎么判 | 适合 |
|---|---|---|
| 确定性（exact/rule） | 字段精确匹配或规则判断 | 能用代码判的尽量用代码判 |
| LLM-as-judge | 让模型判断输出对不对 | 难用规则判的开放输出 |
| 人工 | 人来看 | 高 stakes 或校准 judge |

能用代码判的尽量用代码判，稳定可重复；难用规则判的才上 LLM-judge。

### Baseline：把当前能力冻结下来

Baseline 不要求高分，它的价值是让问题显形。当前准确率 0.75、某类别只有 0.5，比"看起来还行"更有工程价值--它明确告诉你下一步该优先看哪类。

没有 baseline 就没有优化：改完不知道是变好还是退化，"修一个坏三个"。

### Trace：bad case 归因靠它

光有分数不够。某条 case 错了，要知道错在哪--是 Router 分派错、Worker 证据找错、还是 Reviewer 合并错。Trace 记录每一步的工具调用、参数、结果，是 bad case 归因的依据。

"分数告诉你有问题，trace 告诉你问题在哪。"

概念讲完，接下来看代码——三件套各有一份真实文件（完整代码已嵌入下方代码走读），走读一遍就全部落地了。

## 代码走读：从一条 case 到一份 baseline，把评测链路走一遍

上一节把评测拆成三件套，本节把它们逐一对上真实文件。代码分布：\`agent_app/evaluator.py\` 是评分器本体，\`eval/dataset.jsonl\` 是 golden dataset（20 条 case），\`eval/run_eval.py\` 是入口，\`eval/baseline-v0.md\` 是跑出来的基线报告，\`eval/trace-v0.jsonl\` 是配套的 trace 产物。走读顺序就是数据流顺序：数据集 -> 打分 -> 汇总 -> 入口 -> 报告。全程只读，不需要运行任何命令。

### 第一步：数据集长什么样 —— \`eval/dataset.jsonl\`

golden dataset 是文本文件，每行一条 JSON，一条就是一个 case。先看最简单的 \`case-001\`：

\`eval/dataset.jsonl:1\`

\`\`\`json
{"id":"case-001","alert":"【P1】trade-order 下单接口 5xx 升到 18%，CPU 96%，大量 timeout。","expected_category":"metrics","expected_root_cause":"CPU 饱和","evidence_keywords":["CPU saturation","error rate","timeout"],"allowed_root_causes":["CPU 饱和","CPU saturation"],"difficulty":"easy","case_type":"happy_path"}
\`\`\`

再挑一条"陷阱题" \`case-004\`：

\`eval/dataset.jsonl:4\`

\`\`\`json
{"id":"case-004","alert":"【P2】search-api latency 延迟升高，5xx 小幅增加，明确未见 OOM 或内存压力。","expected_category":"metrics","expected_root_cause":"延迟和错误率异常","evidence_keywords":["latency","error rate"],"allowed_root_causes":["延迟","错误率","latency"],"difficulty":"medium","case_type":"misleading_signal"}
\`\`\`

一条 case 是八个字段：

- **\`alert\`**：喂给 Agent 的原始告警，是这次评测的"输入"。
- **\`expected_category\` / \`expected_root_cause\`**：人类标注的期望答案，是"输出"。注意期望根因写得比较概括（"CPU 饱和"），因为根因是开放文本，允许近似命中。
- **\`evidence_keywords\`**：评分时要在 Agent 报告里找的证据关键词——防止"类别和根因蒙对了、证据全是编的"。
- **\`allowed_root_causes\`**：期望根因的等价写法（"CPU 饱和"和"CPU saturation"都算对），中英文混写是常态。
- **\`difficulty\` / \`case_type\`**：case 的元信息，本数据集里 \`difficulty\` 取值 \`easy\`/\`medium\`（没有 \`hard\`），\`case_type\` 有四种：\`happy_path\` / \`misleading_signal\` / \`multi_signal\` / \`sop_assisted\`。

> 为什么 \`case-004\` 叫 \`misleading_signal\`？看它的 alert："明确未见 OOM 或内存压力"——干扰信息故意写得和真因很像。数据集不是清一色的送分题：\`misleading_signal\` 测"会不会被带偏"，\`multi_signal\` 测"多信号并存时会不会选错"，\`sop_assisted\` 测"历史 SOP 会不会干扰结论"。

> 为什么用 JSONL 而不是一个 JSON 数组？——每行一条 case，git diff 时只看到变化的那一行；而且按行加载天然容错，坏一行只丢一条，不会整份文件解析失败。数据集是要进版本控制的资产，diff 友好很重要。

### 第二步：把一条 case 读进来 —— \`EvalCase\` 与 \`load_dataset\`

数据集是"程序与人类约定的接口"，\`evaluator.py\` 用三个 dataclass 把这份约定变成类型化对象。先看最小的 \`EvalCase\`：

\`agent_app/evaluator.py:12-28\`

\`\`\`python
@dataclass(slots=True)
class EvalCase:
    """一条评测用例（golden case）：字段与 dataset.jsonl 里的 JSON 一一对应。

    数据集就是"程序与人类约定的接口"——字段名保持一致，改数据集还是改代码
    都能一眼看出对应关系。difficulty / case_type 是可选元信息：缺了只是统计桶
    不完整，不该让整条 case 加载失败，所以给默认值，允许数据集"半成品起步"。
    """

    id: str
    alert: str
    expected_category: str
    expected_root_cause: str
    evidence_keywords: list[str]
    allowed_root_causes: list[str]
    difficulty: str = "medium"
    case_type: str = "happy_path"
\`\`\`

为什么字段和 JSON 字段一一对应？——因为数据集本身就是接口契约，两边字段名一致就不用写一堆映射代码，改数据集还是改代码都能一眼看出对应关系。注意 \`difficulty\` 和 \`case_type\` 有默认值（\`"medium"\` / \`"happy_path"\`），后面解释为什么。

把 JSONL 读进 \`EvalCase\` 的是 \`load_dataset\`：

\`agent_app/evaluator.py:70-93\`

\`\`\`python
def load_dataset(path: str | Path) -> list[EvalCase]:
    """从 dataset.jsonl 读入全部评测用例。

    每行一条 JSON、按行独立解析：一行坏了只丢这一条，不会整份文件解析失败，
    这就是 JSONL 相对整份 JSON 数组的核心优势（git diff 也更友好）。
    """
    cases: list[EvalCase] = []
    for line in Path(path).read_text(encoding="utf-8").splitlines():
        if not line.strip():  # 跳过空行：文件末尾多一个换行也不会崩
            continue
        row = json.loads(line)  # 每行独立解析成 dict，坏一行只影响这一条
        cases.append(EvalCase(
            # 必填字段硬取：缺了这条 case 就没法打分，宁可炸出来让数据集作者立刻发现
            id=row["id"],
            alert=row["alert"],
            expected_category=row["expected_category"],
            expected_root_cause=row["expected_root_cause"],
            # 可选字段用 row.get 给默认值：只是评分/分桶的辅助信息，缺了不影响打分
            evidence_keywords=list(row.get("evidence_keywords", [])),
            allowed_root_causes=list(row.get("allowed_root_causes", [])),
            difficulty=row.get("difficulty", "medium"),
            case_type=row.get("case_type", "happy_path"),
        ))
    return cases
\`\`\`

逐块看：

- **第 77-79 行**：按行读、跳过空行。空行容错，文件末尾多一个换行也不会崩。
- **第 80 行 \`row = json.loads(line)\`**：每行独立解析成 dict。一行坏了只影响这一条，这是 JSONL 相对整份 JSON 的核心优势。
- **第 83-86 行**：必填字段用 \`row["id"]\` 这种硬取——\`alert\`、期望类别、期望根因缺了，这条 case 就没法打分，宁可让它炸出来，让数据集作者立刻知道缺了什么。
- **第 88-91 行**：可选字段用 \`row.get(...)\` 给默认值——\`evidence_keywords\` 缺了就当作空列表、\`difficulty\`/\`case_type\` 缺了就用默认值。这些只是评分/分桶的辅助信息，不该让一条 case 因为没写 \`case_type\` 而整个加载失败。

> 为什么同一批字段，有的硬取、有的兜底？——核心四件套（输入告警、期望类别、期望根因、证据关键词）缺了评分毫无意义，必须失败得清楚；元信息缺了只是统计桶不完整，给默认值让数据集能"半成品起步"。

### 第三步：打分 —— \`score_case\`（评测的核心）

打分函数叫 \`score_case\`：输入一条 case 和 Agent 产出的 \`DiagnosisReport\`，输出一个 \`EvalResult\`。先看它依赖的辅助函数：

\`agent_app/evaluator.py:96-103\`

\`\`\`python
def _contains_any(text: str, candidates: list[str]) -> bool:
    """不区分大小写的子串匹配：候选词里任何一个出现在文本里就算命中。

    用子串匹配而不是语义匹配，是为了稳定可重复——同样的输入永远同样的输出，
    这正是"能用代码判的尽量用代码判"的原则。
    """
    haystack = text.lower()
    return any(candidate.lower() in haystack for candidate in candidates)
\`\`\`

\`_contains_any\` 做不区分大小写的**子串匹配**：候选词里任何一个出现在文本里就算命中。为什么用子串匹配而不是语义匹配？——稳定可重复，同样的输入永远同样的输出，这正是概念部分说的"能用代码判的尽量用代码判"。

打分主体：

\`agent_app/evaluator.py:106-138\`

\`\`\`python
def score_case(case: EvalCase, report: DiagnosisReport) -> EvalResult:
    """给一条 case 打分：类别 / 根因 / 证据三把尺子全过才算 passed。

    打分全程是精确比较和子串匹配，不调 LLM——如果打分也调 judge，
    baseline 会混入 judge 的随机性，A/B 对比就说不清是 Agent 变了还是 judge 变了。
    """
    # 把报告渲染成一段纯文本再转小写：打分的"裁判对象"就是这份文本
    rendered = report.to_text().lower()
    # 尺子一（类别）：报告类别必须与期望类别精确相等，一个字都不能差
    category_match = report.category == case.expected_category
    # 尺子二（根因）：期望根因 + 所有等价写法拼成候选列表，任一命中即可
    root_candidates = [case.expected_root_cause, *case.allowed_root_causes]
    root_match = _contains_any(rendered, root_candidates)
    # 尺子三（证据）：数证据关键词里有几个出现在报告文本里，算出命中比例
    if case.evidence_keywords:
        hits = sum(1 for keyword in case.evidence_keywords if keyword.lower() in rendered)
        evidence_ratio = hits / len(case.evidence_keywords)
    else:
        evidence_ratio = 1.0  # 没写证据要求就不卡这条
    # 三把尺子全部达标才算过；0.5 意味着 3 个关键词允许漏 1 个，打分宁宽勿苛
    passed = category_match and root_match and evidence_ratio >= 0.5

    # 失败原因可叠加：三个维度各自检查，不通过的都记进 reasons，分号拼接保留全部原因
    reasons: list[str] = []
    if not category_match:
        reasons.append("category_mismatch")
    if not root_match:
        reasons.append("root_mismatch")
    if evidence_ratio < 0.5:
        reasons.append("evidence_missing")
    failure_reason = ";".join(reasons) if reasons else ""
    # 归因粗筛：把失败先分到 router / reviewer / worker / dataset 四类，供人工 review 指路
    issue_attribution = classify_issue_attribution(case, report, failure_reason)
\`\`\`

- **第 113 行 \`rendered = report.to_text().lower()\`**：把 Agent 的 \`DiagnosisReport\` 渲染成一段纯文本再转小写。\`DiagnosisReport\` 是 Day 18 的产物，字段包括 \`category\` / \`root_cause\` / \`confidence\` / \`evidence\` 等（见 \`agent_app/multi_agent.py:40-53\`），\`to_text()\` 把它们拼成可读文本——打分的"裁判对象"就是这份文本。
- **第 115 行：第一把尺子——类别**。\`category_match\` 要求 \`report.category\` 与期望类别**精确相等**，一个字都不能差。类别只有四个（metrics/logs/dependency/resource），精确匹配最简单可靠。
- **第 116-118 行：第二把尺子——根因**。\`root_candidates\` 把期望根因和所有 \`allowed_root_causes\` 拼成候选列表，任一命中即可——"CPU 饱和"和"CPU saturation"都算对，容忍中英文等价写法。
- **第 119-124 行：第三把尺子——证据**。数一下 \`evidence_keywords\` 里有几个出现在报告文本里，算出命中比例；关键词为空时直接给 1.0（没写证据要求就不卡这条）。
- **第 125-126 行 \`passed = category_match and root_match and evidence_ratio >= 0.5\`**：三把尺子全部达标才算过。0.5 意味着 3 个关键词允许漏 1 个——打分规则宁宽勿苛，评测的目的是让问题显形，不是找茬。
- **第 128-138 行：失败原因可叠加**。三个维度各自检查，不通过的都记进 \`reasons\`，再用 \`";"\` 拼成一条 \`failure_reason\`。一条 case 可以同时错两件事（比如既类别错又根因错），分号拼接保留全部原因，供后面的归因使用。

> ### 岔路：为什么打分全程一个 LLM 都不调？（可跳读，不影响主线）
> 打分全部是精确比较和子串匹配，没有 LLM-as-judge。原因正是概念部分的原则"能用代码判的尽量用代码判"：如果打分也调模型，baseline 会带上 judge 抽风的不确定性——A/B 对比时说不清是 Agent 变了还是 judge 变了；而且 20 条 case 每次都要额外调模型，时间和成本都上去了。评测的稳定性优先于优雅，开放输出才轮到 LLM-judge 上场。

### 第四步：trace 现场与失败归因

\`score_case\` 打分的同时，顺手把这条 case 的完整现场冻结进 \`EvalTrace\`：

\`agent_app/evaluator.py:140-169\`

\`\`\`python
    trace = EvalTrace(
        case_id=case.id,
        alert=case.alert,
        # 为了归因把 Router 单独又跑了一遍：不记录分派，就分不清"分派错"还是"归因错"
        route_result=route_incident(case.alert),
        # 每个 worker 的 finding 转 dict 存档，证据链完整可查
        worker_outputs=[finding.to_dict() for finding in report.findings],
        # 最终预测与期望结果并排存放，bad case 一眼看出差在类别还是根因
        final_prediction={
            "category": report.category,
            "root_cause": report.root_cause,
            "confidence": report.confidence,
            "evidence": report.evidence,
        },
        expected_result={
            "category": case.expected_category,
            "root_cause": case.expected_root_cause,
            "evidence_keywords": case.evidence_keywords,
            "difficulty": case.difficulty,
            "case_type": case.case_type,
        },
        # 这条 case 的三项得分明细
        score={
            "passed": passed,
            "category_match": category_match,
            "root_match": root_match,
            "evidence_match_ratio": round(evidence_ratio, 2),
        },
        failure_reason=failure_reason,
    )
\`\`\`

（折叠：第 172-187 行的 \`return EvalResult(...)\` 只是把刚算好的值搬进结果对象，含 \`predicted_category\` / \`predicted_root_cause\` / \`failure_reason\` 等字段，见 \`evaluator.py:172-187\`，结构与上面重复。）

这就是概念部分说的 trace——它不是事后补的，而是打分时**顺手记录的完整现场**：

- **第 144 行 \`route_result=route_incident(case.alert)\`**：为了归因，把 Router 单独又跑了一遍，记录这次告警被分派去了哪些 worker。"分数说有问题，trace 说问题在哪"——要区分"Router 分派错"还是"Reviewer 归因错"，没有这条分派记录就没法判断。
- **第 146 行 \`worker_outputs\`**：每个 worker 的 finding 转成 dict 存档，证据链完整可查。
- **第 148-160 行 \`final_prediction\` / \`expected_result\`**：预测与期望并排存放，bad case 一眼看出差在哪——类别差、根因差、还是证据差。
- **第 162-167 行 \`score\`**：这条 case 的三项得分明细。

trace 有了，坏 case 该怪谁？\`classify_issue_attribution\` 给出第一版归因：

\`agent_app/evaluator.py:190-214\`

\`\`\`python
def classify_issue_attribution(
    case: EvalCase,
    report: DiagnosisReport,
    failure_reason: str,
) -> str:
    """第一遍粗筛式的 bad case 归因：告诉人"该往哪看"，不做精确裁决。

    精确到具体是哪个 worker 的问题，留给人工 review 时对着 trace 判断；
    规则粗筛便宜、可复现，正是评测体系该有的分工。
    """
    if not failure_reason:
        return "passed"  # 没失败，谈不上归因
    # case 本身类型就有问题：是数据集或期望标注的锅，不是 Agent 的锅
    if case.case_type in {"ambiguous", "insufficient_evidence"}:
        return "dataset_or_expectation"
    # 类别判错：类别由 Router 分派 + Reviewer 归纳共同决定，先用粗分类占位
    if "category_mismatch" in failure_reason and case.expected_category not in {"unknown", report.category}:
        return "router_or_reviewer"
    # 根因判错：类别对了根因错了，问题大概率在 Reviewer 归纳
    if "root_mismatch" in failure_reason:
        return "reviewer"
    # 证据没找全：问题在 Worker 的工具调用或证据收集
    if "evidence_missing" in failure_reason:
        return "worker_evidence"
    return "evaluator_rule"  # 兜底：评分规则本身可能不合适
\`\`\`

- 没失败 -> \`passed\`。
- case 本身属于 \`ambiguous\` / \`insufficient_evidence\` 类型 -> \`dataset_or_expectation\`：问题出在数据集或期望标注，不是 Agent 的锅。
- 类别判错 -> \`router_or_reviewer\`：类别由 Router 分派 + Reviewer 归纳共同决定，先用这个粗分类占位。
- 根因判错 -> \`reviewer\`：类别对了根因错了，问题大概率在 Reviewer 归纳。
- 证据没找全 -> \`worker_evidence\`：问题在 Worker 的工具调用或证据收集。

> 为什么这里用规则而不是让模型判？——注意 docstring 第一句就写明了定位：*第一遍粗筛式的 bad case 归因：告诉人"该往哪看"，不做精确裁决。*（\`evaluator.py:195\`）——**第一遍粗筛**。归因只要求指出"该往哪看"，不需要精确裁决；精确到具体是哪个 worker 的问题，留给人工 review 时对着 trace 判断。规则粗筛便宜、可复现，是评测体系的正确分工。

### 第五步：批量跑与汇总 —— \`run_evaluation\` 与 \`summarize_results\`

\`score_case\` 只处理一条，批量跑靠 \`run_evaluation\`：

\`agent_app/evaluator.py:217-227\`

\`\`\`python
def run_evaluation(
    cases: list[EvalCase],
    diagnose: Callable[[str], DiagnosisReport] = run_multi_agent_diagnosis,
) -> list[EvalResult]:
    """批量跑评测：每条 case 用 diagnose 跑一次 Agent，再用 score_case 打分。

    diagnose 做成参数是为了评测与 Agent 实现解耦——换模型、换 Prompt、换多智能体
    逻辑，只要传入不同的 diagnose，评测代码一行不用改；默认值就是 Day 18 的
    run_multi_agent_diagnosis。这样才能保证"改完重跑同一个脚本就能对比"。
    """
    return [score_case(case, diagnose(case.alert)) for case in cases]
\`\`\`

一行列表推导：对每条 case，用 \`diagnose\` 跑一次 Agent，再用 \`score_case\` 打分。**为什么 \`diagnose\` 要做成参数？**——评测与 Agent 实现解耦：想换模型、换 Prompt、换一版多智能体逻辑，只要传入不同的 \`diagnose\` 函数，评测代码一行不用改；默认值就是 Day 18 的 \`run_multi_agent_diagnosis\`。这保证了"改完重跑同一个脚本就能对比"。

20 条结果怎么变成准确率？\`summarize_results\` 干这件事：

\`agent_app/evaluator.py:230-274\`

\`\`\`python
def summarize_results(results: list[EvalResult]) -> dict[str, Any]:
    """把一堆评分结果汇总成一个 dict：准确率 + 失败分布 + 分桶准确率 + 归因分布。

    这份 dict 是 baseline 报告的原料——报告就是把它渲染成 markdown。
    """
    total = len(results)
    passed = sum(1 for result in results if result.passed)
    failures: dict[str, int] = {}  # 失败原因分布（叠加原因会被拆开分别计数）
    by_category: dict[str, dict[str, int]] = {}  # 按期望类别分桶：总数 / 通过数
    attribution: dict[str, int] = {}  # 归因分布：四类各多少条
    root_passed = 0  # 根因判对的条数
    evidence_total = 0.0  # 证据命中率累加，最后除以总数得平均
    for result in results:
        # 按期望类别分桶：总数 +1，通过则通过数 +1
        bucket = by_category.setdefault(result.expected_category, {"total": 0, "passed": 0})
        bucket["total"] += 1
        if result.passed:
            bucket["passed"] += 1
        if result.root_match:
            root_passed += 1
        evidence_total += result.evidence_match_ratio
        # 归因分布计数；失败原因用 ";" 拆开分别计数（如 category_mismatch;root_mismatch 算两条）
        attribution[result.issue_attribution] = attribution.get(result.issue_attribution, 0) + 1
        if result.failure_reason:
            for reason in result.failure_reason.split(";"):
                failures[reason] = failures.get(reason, 0) + 1
    # 每个类别的准确率单独算："dependency 从 0.5 掉到 0.4 一眼看到"靠的就是它
    per_category = {
        category: {
            "total": values["total"],
            "passed": values["passed"],
            "accuracy": round(values["passed"] / values["total"], 3) if values["total"] else 0.0,
        }
        for category, values in sorted(by_category.items())
    }
    return {
        "total": total,
        "passed": passed,
        "accuracy": round(passed / total, 3) if total else 0.0,
        "root_cause_accuracy": round(root_passed / total, 3) if total else 0.0,
        "avg_evidence_hit_rate": round(evidence_total / total, 3) if total else 0.0,
        "failures": failures,
        "per_category": per_category,
        "issue_attribution": attribution,
    }
\`\`\`

- **第 242-255 行：一圈遍历攒四个账本**。\`by_category\` 按期望类别分桶数总数和通过数；\`root_passed\` 数根因判对的条数；\`evidence_total\` 累加证据命中率；\`attribution\` 数四类归因的条数；\`failure_reason.split(";")\` 把叠加原因拆开分别计数——case-013 那种"三个原因并存"的 case，在失败分布里会被计三次。
- **第 257-264 行 \`per_category\`**：每个类别的准确率单独算，这就是"dependency 从 0.5 掉到 0.4 一眼看到"的数据来源。
- **第 265-274 行**：总准确率、根因准确率、平均证据命中率、失败原因分布、归因分布一次打包——baseline 报告的原料全在这里。

### 第六步：入口 —— \`eval/run_eval.py\`

数据、打分、汇总都有了，串起来的入口只有 31 行：

\`eval/run_eval.py:1-31\`

\`\`\`python
"""跑 Week 3 诊断评测基线：加载数据集 -> 批量打分 -> 报告与 trace 落盘。"""
from __future__ import annotations

from pathlib import Path

from agent_app.evaluator import (
    load_dataset,
    render_eval_trace_jsonl,
    render_markdown_report,
    run_evaluation,
)


def main() -> None:
    # 以脚本所在目录（eval/）为基准拼路径：脚本放哪都能跑，不硬编码绝对路径
    base = Path(__file__).resolve().parent
    dataset_path = base / "dataset.jsonl"
    report_path = base / "baseline-v0.md"
    trace_path = base / "trace-v0.jsonl"
    # 加载 -> 批量跑 -> 渲染 markdown，一气呵成
    cases = load_dataset(dataset_path)
    results = run_evaluation(cases)
    report = render_markdown_report(results)
    # 报告和 trace 都写进文件：可被 git 追踪的版本化产物，改完重跑就能 diff 对比
    report_path.write_text(report, encoding="utf-8")
    trace_path.write_text(render_eval_trace_jsonl(results) + "\\n", encoding="utf-8")
    print(report)  # 终端直接能看到结果，不用再开文件


if __name__ == "__main__":
    main()
\`\`\`

- **第 16-19 行**：三个文件路径都以 \`Path(__file__).resolve().parent\`（\`eval/\` 目录自身）为基准——脚本放哪都能跑，不硬编码绝对路径，换机器不换代码。
- **第 21-23 行**：加载 -> 批量跑 -> 渲染 markdown，一气呵成。
- **第 25-26 行**：报告和 trace **都写进文件**——这就是 baseline 的落盘。\`render_eval_trace_jsonl\` 把每条 case 的 \`EvalTrace\` 序列化成一行 JSON。
- **第 27 行 \`print(report)\`**：终端直接能看到结果，不用再开文件。

> 为什么报告和 trace 都要写文件而不是只打印？——因为 \`baseline-v0.md\` 和 \`trace-v0.jsonl\` 是**版本化产物**：改完 Prompt 或换完模型重跑一次，\`git diff\` 这两份文件，就能正面回答本篇开头的问题——"改完是真变好，还是换了一种错法"。

入口脚本做的事就三步：加载数据集 -> 批量跑 -> 报告与 trace 落盘，跑完一次生成 \`eval/baseline-v0.md\` 和 \`eval/trace-v0.jsonl\` 两份版本化产物——下一节要读的基线报告，就是这份入口脚本的产物。

### 第七步：读懂基线报告 —— \`eval/baseline-v0.md\`

报告不是手写的，是 \`render_markdown_report\`（\`evaluator.py:285-348\`）把 \`summarize_results\` 的 dict 拼出来的。先看它的头部：

\`eval/baseline-v0.md:1-9\`

\`\`\`text
# Baseline v0

- total: 20
- passed: 15
- accuracy: 0.75
- root_cause_accuracy: 0.85
- avg_evidence_hit_rate: 0.925
- failures: {"category_mismatch": 4, "evidence_missing": 1, "root_mismatch": 3}
- issue_attribution: {"passed": 15, "reviewer": 1, "router_or_reviewer": 4}
\`\`\`

六个数字各说明什么：

- \`accuracy: 0.75\`：20 条里 15 条整体通过（类别 + 根因 + 证据三关全过）。
- \`root_cause_accuracy: 0.85\`：根因判对的比例（17/20）。比总准确率高——说明有些 case 类别判错了但根因是对的。
- \`avg_evidence_hit_rate: 0.925\`：证据关键词平均命中率。
- \`failures\`：失败原因分布，\`category_mismatch\` 4 条是最大头。
- \`issue_attribution\`：失败归因分布——4 条指向 \`router_or_reviewer\`，1 条指向 \`reviewer\`。注意没有 \`dataset_or_expectation\` 和 \`worker_evidence\`，说明本数据集的 case 类型里没有 \`ambiguous\`/\`insufficient_evidence\`，问题集中在路由与归因环节。

报告第二部分是分桶准确率——问题在这里显形：

\`eval/baseline-v0.md:11-18\`

\`\`\`text
## Per-category accuracy

| category | total | passed | accuracy |
| --- | ---: | ---: | ---: |
| dependency | 6 | 3 | 0.5 |
| logs | 4 | 3 | 0.75 |
| metrics | 6 | 5 | 0.833 |
| resource | 4 | 4 | 1.0 |
\`\`\`

dependency 类只有 0.5，一眼可见——这就是概念部分说的"baseline 的价值是让问题显形"。整体 0.75 看起来还行，但分桶一看，资源类和日志类都很好，**dependency 是明确的短板**。下一步该优先看哪类，数据直接指出来了。

报告第三部分是失败 case 的 trace 摘要——分数之外的第二只手：

\`eval/baseline-v0.md:45-51\`

\`\`\`text
## Failed-case trace summary

- \`case-004\` route=['metrics', 'logs'] expected=metrics predicted=resource reason=category_mismatch attribution=router_or_reviewer
- \`case-009\` route=['metrics'] expected=dependency predicted=metrics reason=category_mismatch;root_mismatch attribution=router_or_reviewer
- \`case-010\` route=['metrics', 'logs'] expected=logs predicted=resource reason=category_mismatch attribution=router_or_reviewer
- \`case-013\` route=['metrics'] expected=dependency predicted=metrics reason=category_mismatch;root_mismatch;evidence_missing attribution=router_or_reviewer
- \`case-017\` route=['sop'] expected=dependency predicted=dependency reason=root_mismatch attribution=reviewer
\`\`\`

每条失败 case 一行，\`route\`（Router 实际分派）、\`expected\`、\`predicted\`、\`reason\`、\`attribution\` 全在：

- \`case-009\` 和 \`case-013\`：期望 dependency，Router 只派了 \`['metrics']\`——**分派环节就没进去**，这是 \`router_or_reviewer\` 的典型现场。
- \`case-017\`：类别对了（dependency / dependency），根因错了，归因 \`reviewer\`——5 条失败里唯一一条纯 Reviewer 问题。
- \`case-013\` 的 reason 是三个叠加：\`category_mismatch;root_mismatch;evidence_missing\`，和前面打分逻辑里 \`";".join(reasons)\` 的拼接对上号。

报告最后甚至把下一步写好了：

\`eval/baseline-v0.md:53-58\`

\`\`\`text
## Next optimization suggestions

- Fix \`dataset_or_expectation\` cases before tuning prompt or routing.
- If \`router_or_reviewer\` dominates, inspect route_result and reviewer category selection.
- If \`worker_evidence\` dominates, improve tool evidence or evidence keyword mapping.
- Keep eval traces under version control so bad-case fixes are reviewable.
\`\`\`

这是一份"会自我诊断"的报告：归因分布决定下一步。本份 baseline 里 \`router_or_reviewer\` 占 4 条——按第二条建议，先看 \`route_result\` 和 Reviewer 的类别选择（case-009/013 的分派记录已经指明了方向）。最后一条是工程纪律：trace 要进版本控制，bad case 的修复过程才可追溯。

## 为什么这样写

- **归因只做第一遍粗筛，不追求精确**：\`classify_issue_attribution\` 的 docstring 第一句是 *第一遍粗筛式的 bad case 归因：告诉人"该往哪看"，不做精确裁决。*（\`evaluator.py:195\`）。归因的目的是告诉人"该往哪看"，精确裁决是人工 review 拿着 trace 做的事——规则粗筛便宜、可复现，正是评测体系该有的分工。
- **评测与 Agent 解耦，换什么都在评测之外**：\`run_evaluation\` 把被测对象做成可注入参数，默认 \`run_multi_agent_diagnosis\`（\`evaluator.py:217-227\`）。评测脚本自己只管"加载数据集 -> 打分 -> 汇总"，被测的是谁它不关心；入口 \`run_eval.py\` 的 docstring 第一句就把定位写死了：*跑 Week 3 诊断评测基线：加载数据集 -> 批量打分 -> 报告与 trace 落盘。*（\`run_eval.py:1\`）——这个脚本的职责就是"跑 baseline"，不是跑一次性实验。
- **必填硬取、可选兜底，数据集允许半成品起步**：核心四件套用 \`row["id"]\` 硬取（\`evaluator.py:83-86\`），缺了就炸出来让作者补；\`difficulty\`/\`case_type\` 用 \`row.get\` 给默认值（\`evaluator.py:88-91\`）。缺了 alert 的 case 没法打分，缺了 case_type 的 case 只是统计桶不完整——失败要失败得清楚，小事别挡路。
- **打分全用确定性代码，证据阈值宁可宽**：子串匹配 + 精确比较 + \`evidence_ratio >= 0.5\` 写死的规则（\`evaluator.py:126\`），一个 LLM 都不调。评测的可重复性优先：用 LLM-judge 打分，baseline 会混入 judge 自身的随机性，A/B 对比就说不清了。这和概念部分"能用代码判的尽量用代码判"是同一句原则。
- **报告与 trace 落盘、进版本控制**：\`baseline-v0.md\` 和 \`trace-v0.jsonl\` 是 \`run_eval.py:25-26\` 写的文件，不是终端里的临时输出。没有落盘就没有 diff，没有 diff 就回答不了"改完是真变好还是换了一种错法"——评测的产出必须是可以被 git 追踪的资产。

## 本章小结

- 评测 = golden dataset + 确定性评分器 + baseline 报告，\`run_eval.py\` 把"加载数据集 -> 批量打分 -> 报告落盘"一条链路串起来产出。
- 一条 case = 输入告警 + 期望类别/根因 + 证据关键词 + 难度/类型；打分三把尺子：类别精确匹配、根因关键词包含、证据命中率 ≥ 0.5，全过才算通过。
- 失败原因可以叠加（\`category_mismatch;root_mismatch\`），\`classify_issue_attribution\` 把失败归到 router / reviewer / worker / dataset 四类，为人工 review 指路。
- trace 把每条 case 的 route、worker 输出、最终预测、期望结果全部冻结，bad case 归因靠它；baseline 报告连"下一步看哪"都写好了。
- 这一处是"评测"的事——后面 Day 20 的可观测性与护栏，只是把"分数说有问题、trace 说问题在哪"这套习惯搬到线上运行（trace/span/event 那一套），核心没变复杂。

## 一句话边界

- Agent 评测评的是整条执行链路，不只是最终答案。
- 三部分：golden dataset + 评分器 + baseline。
- 三类评分器：确定性 / LLM-judge / 人工，能用代码判的尽量用代码判。
- Baseline 把当前能力冻结成可比较的数字，没有 baseline 就没有优化。
- 分数说"有问题"，trace 说"问题在哪"，两者都要。

## 读完应该能用自己的话回答

1. 为什么 Agent 不能靠感觉验收？评测解决什么？
2. Agent 评测由哪三部分组成？
3. 三类评分器各是什么？优先用哪类？
4. Baseline 的价值是什么？为什么说"没有 baseline 就没有优化"？
5. 只有分数够不够？为什么还需要 trace？

## 想深入

能力 vs 回归测评、pass^k 稳定性、Goodhart 定律、LLM-judge 偏差等，见八股·10 Agent 评测。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 评测。请解释：1) 为什么 Agent 不能靠感觉验收；2) 评测由哪几部分组成；3) 三类评分器各是什么、优先用哪类；4) Baseline 的价值；5) 为什么光有分数不够还要 trace。用"改了诊断 Agent 的 prompt 后怎么验证"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

1. Golden Dataset 的作用是？
   - A. 存用户聊天头像
   - B. 用已知答案客观评估 Agent 输出
   - C. 替代所有日志
   - D. 只给模型训练用

2. 每条诊断 case 最少应该包含什么？
   - A. 原始告警、期望根因、根因类别、证据关键词
   - B. 只有用户昵称
   - C. 只有 token 成本
   - D. 只有最终答案

3. 评测 case 共用同一个 \`thread_id\` 会导致什么？
   - A. 速度一定更快
   - B. 状态和记忆污染
   - C. 输出更准确
   - D. 不影响

4. 为什么先建 baseline 再优化？
   - A. baseline 能证明后续改动是否真的提升
   - B. baseline 只是形式
   - C. 优化前不能跑测试
   - D. 因为不需要数据集

### 开放题（1 道）

设计一条智能诊断 eval case，至少包含 \`alert\`、\`expected_category\`、\`expected_root_cause\`、\`evidence_keywords\`。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 |
| --- | --- |
| 1 | B |
| 2 | A |
| 3 | B |
| 4 | A |

### 开放题参考思路

- case 应该可客观评分，不能只写"回答得好"。
- evidence keywords 应覆盖关键证据，如 CPU、timeout、OOM、发布、依赖等。
`,Wf=`---
title: Day 20 可观测性 HITL 安全护栏
tags:
  - week3/day20
  - concept
  - code
  - exercise
---

# Day 20：可观测性、HITL 与安全护栏

> 阅读约 30-40 分钟 ｜ 前置：[[day19-评测体系]]、[[day09-多工具注册与执行]]、[[day16-Skill系统]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/observability.py\` 与 \`agent_app/guardrails.py\`（完整代码已嵌入下方代码走读）

## 本篇解决一个问题

到 Day 19 你有了一个能跑通的 Agent。但能跑通不等于能交付。还有三个问题没解决：Agent 给出结论时能不能还原它为什么这么判断？它要执行高风险动作时会不会先停下来等人确认？用户输入敏感信息或越权请求时，系统能不能在代码层拦住（而不是只靠 prompt 祈祷模型听话）？

这三个问题分别对应可观测性、HITL、安全护栏。今天要看清这三个概念各是什么、怎么实现。

## 一个例子

一个诊断 Agent 建议重启服务：

\`\`\`text
没有这三样：
  结论怎么来的？不知道（无可观测性）
  直接执行重启？可能误操作（无 HITL）
  用户说"顺便把生产库删了"？模型可能照做（无护栏）

有这三样：
  trace 记录每步：调了哪些工具、拿到什么证据、怎么推到结论（可观测）
  重启这类高危动作先挂起，等人批准才执行（HITL）
  删除生产库这类请求在代码层直接拦住，不靠模型自觉（护栏）
\`\`\`

差别在于：Agent 变得可还原、可暂停、可拒绝，才适合进生产。

## 这个概念是什么

三个概念：

- **可观测性（Observability）**：记录 Agent 每一步做了什么（调了什么工具、什么参数、什么结果、花了多少 token），让结论可还原、失败可归因。
- **HITL（Human-in-the-loop，人在回路）**：高风险动作不自动执行，先挂起等人确认，把最终责任留在人手里。
- **安全护栏（Guardrails）**：在代码层拦住越权、敏感、危险的请求，不靠 prompt 祈祷模型听话。

## 代码走读：把"可还原、可暂停、可拒绝"落到两个文件里

今天走读两个文件（完整代码已嵌入下方代码走读），正好一个管一件事：\`observability.py\` 管可观测性（trace / 日志 / 指标），\`guardrails.py\` 管安全护栏与 HITL 审批（allow / block / needs_approval 三值裁决 + 人工审批状态机）。

### 第一部分：\`observability.py\` —— 把每一步变成可查的记录

先回答一个问题：可观测性到底要记录什么？回顾正文的概念——收到什么用户输入、guardrail 判定是放行/拦截/需审批、触发了哪个 Skill、调用了哪些工具、参数是什么、结果是否成功、LLM 调了哪个模型、token 消耗多少、每步耗时多少、是否出错。这些记录成结构化 trace，既能还原"结论怎么来的"，也是 Day 19 评测 bad case 归因的依据。

\`observability.py\` 怎么把这些变成代码？靠两层：一个事件类型 \`RuntimeEvent\`，一个记录器 \`TraceRecorder\`。先看事件本身。

\`agent_app/observability.py:13-42\`

\`\`\`python
def utc_now_iso() -> str:
    # 统一用 UTC 打时间戳：日志要跨机器、跨时区对账，UTC 是唯一没有歧义的基准
    return datetime.now(timezone.utc).isoformat()


@dataclass(slots=True)
class RuntimeEvent:
    """一条运行时事件：trace 的最小单位，靠 trace_id 串成一次任务的完整时间线。"""

    event_type: str
    payload: dict[str, Any]
    thread_id: str | None = None
    # 事件 ID 和时间戳都用默认工厂自动生成：调用方不用管，创建即打戳，这一栏永远不会空
    event_id: str = field(default_factory=lambda: uuid.uuid4().hex)
    timestamp: str = field(default_factory=utc_now_iso)
    # 可选的耗时与错误槽位：没有就不填
    duration_ms: float | None = None
    error: str | None = None

    def to_dict(self) -> dict[str, Any]:
        # 转成普通 dict，为 JSON 序列化（JSONL 落盘）做准备
        return {
            "event_id": self.event_id,
            "timestamp": self.timestamp,
            "thread_id": self.thread_id,
            "event_type": self.event_type,
            "duration_ms": self.duration_ms,
            "error": self.error,
            "payload": self.payload,
        }
\`\`\`

- **第 13-15 行 \`utc_now_iso\`**：统一时间戳格式——UTC 时间的 ISO 字符串。为什么不用本地时间？日志要跨机器、跨时区对账，UTC 是唯一没有歧义的基准。
- **第 19-30 行 \`RuntimeEvent\`**：一次事件的最小单位。\`event_type\` 命名"发生了什么"（比如 \`tool_call\`、\`llm_call\`），\`payload\` 装细节；\`event_id\` 和 \`timestamp\` 都用 \`default_factory\` 自动生成——**调用方不用管，每创建一条事件自动有唯一 ID 和时间**；\`duration_ms\` 和 \`error\` 是可选的耗时与错误槽位。
- **第 32-42 行 \`to_dict\`**：把 dataclass 变成普通 dict，为后面的 JSON 序列化做准备。

> 为什么 \`timestamp\` 要放进 dataclass 而不是调用方自己传？因为"记录时点"必须等于"事件发生时点"，让调用方传时间既啰嗦又容易传错；用工厂函数做默认值，创建即打戳，这一栏永远不会空。

接下来是记录器 \`TraceRecorder\`——它负责把事件攒起来、带上 trace 标识、按序导出。

\`agent_app/observability.py:45-65\`

\`\`\`python
class TraceRecorder:
    """内存中的结构化事件记录器，支持 JSONL 导出（一次实例 = 一次 trace）。"""

    def __init__(
        self,
        *,
        thread_id: str | None = None,
        trace_id: str | None = None,
        max_preview_chars: int = 500,
    ) -> None:
        self.thread_id = thread_id
        # trace_id 没传就自动生成：trace- + 12 位十六进制，作为“一次任务”的身份证
        self.trace_id = trace_id or f"trace-{uuid.uuid4().hex[:12]}"
        self.max_preview_chars = max_preview_chars
        # 私有事件列表：事件只准从 record 进
        self._events: list[RuntimeEvent] = []

    @property
    def events(self) -> list[RuntimeEvent]:
        # 返回副本：外部只能读不能写，防止绕过 record 篡改事件序列
        return list(self._events)
\`\`\`

- **第 46 行 docstring**：一句话写死定位——“内存中的结构化事件记录器，支持 JSONL 导出（一次实例 = 一次 trace）”。**内存**意味着写入零 IO、顺序天然稳定；**JSONL 导出**意味着落盘格式是“一行一条 JSON”；括号里那句“一次实例 = 一次 trace”则把记录器和 trace 一一对应钉死。
- **第 48-60 行 \`__init__\`**：\`trace_id\` 没传就自动生成 \`trace-\` + 12 位十六进制——**一次 TraceRecorder 实例 = 一次 trace**；\`thread_id\` 用来关联多轮对话；\`_events\` 是私有列表，事件只准从 \`record\` 进。
- **第 62-65 行 \`events\` 属性**：返回 \`list(self._events)\` 的**副本**。为什么返回副本而不是直接给内部列表？外部只能读不能写，防止任何代码绕过 \`record\` 篡改事件序列——trace 的完整性是"可还原"的前提。

> 为什么 payload 里最后会带 \`trace_id\`？见下面的 \`record\`——因为 JSONL 导出后是平铺的"一行一事件"，没有层级关系，事后只有靠 \`trace_id\` 才能把同一次运行的事件粘回一条时间线。这是 trace 和普通日志的关键区别：日志是散的消息，trace 是"一次任务的完整故事"。

\`agent_app/observability.py:67-85\`

\`\`\`python
    def record(
        self,
        event_type: str,
        payload: dict[str, Any] | None = None,
        *,
        duration_ms: float | None = None,
        error: str | None = None,
    ) -> RuntimeEvent:
        # 所有事件的唯一入口：自动注入 trace_id（调用方忘了传，事件也天然带着归属），payload 先截断长文本
        event = RuntimeEvent(
            event_type=event_type,
            payload=self._truncate_payload({"trace_id": self.trace_id, **(payload or {})}),
            thread_id=self.thread_id,
            duration_ms=duration_ms,
            error=error,
        )
        # 按发生顺序追加，事件序列就是“一次任务的完整故事”
        self._events.append(event)
        return event
\`\`\`

\`record\` 是所有事件的唯一入口，四个要点：

- **第 78 行自动注入 \`trace_id\`**：\`{"trace_id": self.trace_id, **(payload or {})}\` 把 trace_id 塞进每条 payload——即使调用方忘了传，事件也天然带着归属。**这就是"一次任务"的身份证**。
- **第 78 行同时过 \`_truncate_payload\`**：payload 落进内存前先截断长字符串（后面专门讲），防止工具结果几万字直接灌进事件。
- **第 84-85 行追加并返回**：事件按发生顺序进列表；返回事件对象，调用方想记 \`event_id\` 后续引用也可以。
- **\`*\` 关键字参数**：\`duration_ms\`、\`error\` 必须用关键字传，防止调用方搞错位置。

\`agent_app/observability.py:87-128\`

\`\`\`python
    def record_tool_call(
        self,
        name: str,
        arguments: dict[str, Any],
        *,
        ok: bool,
        result_preview: str,
        duration_ms: float | None = None,
    ) -> RuntimeEvent:
        # 工具调用事件：字段钉死 name/arguments/ok/result_preview，格式统一才能聚合统计
        return self.record(
            "tool_call",
            {
                "name": name,
                "arguments": arguments,
                "ok": ok,
                "result_preview": result_preview,
            },
            duration_ms=duration_ms,
            # 失败时结果本身就是要记的错误信息，双写进 error 字段，检索报错一眼可见
            error=None if ok else result_preview,
        )

    def record_llm_call(
        self,
        *,
        model: str,
        input_tokens: int,
        output_tokens: int,
        duration_ms: float | None = None,
    ) -> RuntimeEvent:
        # 模型调用事件：顺手算好 total_tokens 存进 payload，落盘后不用再算，口径一致
        return self.record(
            "llm_call",
            {
                "model": model,
                "input_tokens": input_tokens,
                "output_tokens": output_tokens,
                "total_tokens": input_tokens + output_tokens,
            },
            duration_ms=duration_ms,
        )
\`\`\`

两个"语义化封装"，把 Agent 运行时最重要的两类事件**钉死格式**：

- **\`record_tool_call\`（第 87-108 行）**：工具调用事件，字段固定为 \`name\` / \`arguments\` / \`ok\` / \`result_preview\`。注意第 107 行 \`error=None if ok else result_preview\`——**工具调用失败时，失败的结果本身就是要记的错误信息**，双写进 \`error\` 字段，检索报错时一眼可见。
- **\`record_llm_call\`（第 110-128 行）**：模型调用事件，字段固定为 \`model\` / \`input_tokens\` / \`output_tokens\`，第 125 行顺手把 \`total_tokens\` 算好存进 payload——落盘后不用再算，也保证口径一致。

> 为什么非要单独做这两个方法，而不是统一调 \`record("tool_call", {...})\`？因为工具调用和模型调用是 Agent 运行时最需要统计、最需要归因的两类事件。把字段在方法签名里**钉死**，谁调用都得按这个格式来，杜绝"每个模块各写各的 payload 键名"——格式统一，事后才能聚合统计（比如"这趟任务调了几次工具、花了多少 token"）。

\`agent_app/observability.py:130-161\`

\`\`\`python
    def to_jsonl(self) -> str:
        # 一行一条 JSON 事件；ensure_ascii=False 保留中文可读，sort_keys=True 让键有序可 diff
        return "\\n".join(
            json.dumps(event.to_dict(), ensure_ascii=False, sort_keys=True)
            for event in self._events
        )

    def write_jsonl(self, path: str | Path) -> None:
        # JSONL 追加友好、可流式消费：边跑边写也不破坏整体结构
        Path(path).write_text(self.to_jsonl() + "\\n", encoding="utf-8")

    def timed(self, event_type: str, payload: dict[str, Any] | None = None):
        """上下文管理器：with 块进入记起点，退出自动记一条带 duration_ms 的事件。"""
        recorder = self

        class _Timer:
            def __enter__(self):
                self.start = time.perf_counter()
                return self

            def __exit__(self, exc_type, exc, tb):
                duration_ms = (time.perf_counter() - self.start) * 1000
                recorder.record(
                    event_type,
                    payload or {},
                    duration_ms=round(duration_ms, 3),
                    error=str(exc) if exc else None,
                )
                # return False：异常继续向上抛——观测永远不吞掉程序的真实行为
                return False

        return _Timer()
\`\`\`

- **第 130-135 行 \`to_jsonl\`**：把事件序列化成 JSONL——\`ensure_ascii=False\` 保留中文可读，\`sort_keys=True\` 让键有序，同一批事件的 JSON 结构可 diff。
- **第 137-139 行 \`write_jsonl\`**：落盘。为什么选 JSONL 而不是一个 JSON 数组？**追加友好、流式消费**——每行一条事件，tail/管道工具天然支持，边跑边写也不会破坏整体结构。
- **第 141-161 行 \`timed\`**：上下文管理器，用法是 \`with recorder.timed("some_step"): ...\`。\`__enter__\` 记 \`perf_counter\` 起点，\`__exit__\` 算耗时并自动 \`record\` 一条带 \`duration_ms\` 的事件；如果代码块抛异常，异常信息写进 \`error\` 字段，然后 \`return False\` **把异常继续向上抛**——观测永远不吞掉程序的真实行为。**为什么 \`return False\` 这么重要？** 否则异常会被上下文管理器"吃掉"，Agent 会带着静默失败继续跑。

> ### 岔路：trace / 日志 / 指标，三者的分工（可跳读，不影响主线）
> 日志是"单条消息"（这条报错了），trace 是"一次请求/一次任务的完整时间线"（结论怎么一步步推出来的），指标是"聚合数字"（今天平均每次任务花了多少 token）。\`observability.py\` 的 \`RuntimeEvent\` 就是"带时间线的结构化日志"——事件本身是日志，靠 \`trace_id\` 串起来就是 trace，落盘后按 \`event_type\` 聚合就是指标。三个概念一份数据，这也是为什么字段要统一、时间戳要 UTC。

最后是 \`_truncate_payload\`——前面 \`record\` 里那个"截断"到底做了什么：

\`agent_app/observability.py:163-171\`

\`\`\`python
    def _truncate_payload(self, payload: dict[str, Any]) -> dict[str, Any]:
        # 超长字符串截断到 max_preview_chars 并打标记：防止工具全量输出把 trace 变成磁盘炸弹
        result: dict[str, Any] = {}
        for key, value in payload.items():
            if isinstance(value, str) and len(value) > self.max_preview_chars:
                result[key] = value[: self.max_preview_chars] + "...[truncated]"
            else:
                result[key] = value
        return result
\`\`\`

字符串字段超过 \`max_preview_chars\`（默认 500 字符）就截断，并追加 \`...[truncated]\` 标记。**为什么截断？** 工具结果可能是几万字的日志、报表，全量塞进内存事件既费内存又费磁盘，而"还原结论"通常只需要预览。注意这里截断的是**预览**——原始结果是否保留由业务层决定，这是演示级取舍。

### 第二部分：\`guardrails.py\` —— 代码层拦截 + HITL 审批

进入安全半边前，先立住那条原则：**模型不是安全边界**。Prompt 是软约束（模型可能不听），权限是硬边界（代码层强制）。护栏做的事：输入检查（拦越权请求、敏感信息泄露、危险操作）、敏感信息脱敏（日志里不记录密钥、PII）、危险动作识别（走 HITL）、allow/deny/ask 三件套（每个动作判定为放行、拦截、或需人工确认）。这和 Day 9 的工具防护（shell 白名单、超时、截断）一脉相承，Day 20 把它系统化。

先看裁决的语言——三值判定和它的三张规则表：

\`agent_app/guardrails.py:11-61\`

\`\`\`python
# allow/deny/ask 三件套：整个护栏系统的词汇表只有这三个词
DecisionAction = Literal["allow", "block", "needs_approval"]


# 敏感信息正则：密钥（要求值至少 12 位防误伤）、大陆手机号、18 位身份证号（末位允许校验位 X）
# 命中意味着“这条输入不该出现在日志里”
SENSITIVE_PATTERNS = [
    re.compile(r"(?i)(api[_-]?key|secret|token)\\s*[:=]\\s*['\\"]?[A-Za-z0-9_\\-]{12,}"),
    re.compile(r"\\b1[3-9]\\d{9}\\b"),
    re.compile(r"\\b\\d{17}[\\dXx]\\b"),
]

# 危险动作关键词（中英混合）：破坏性命令 + 高风险运维动作，
# 这类动作“可能扩大故障或造成数据损坏”，必须走 HITL 等人工确认
DANGEROUS_KEYWORDS = [
    "rm -rf",
    "kubectl delete",
    "delete pod",
    "drop table",
    "restart",
    "rollback",
    "scale",
    "重启",
    "回滚",
    "删除",
    "扩容",
    "缩容",
    "清理磁盘",
]

# 诊断 Agent 的业务边界：只聊故障诊断，聊到范围外就拦截
DIAGNOSIS_SCOPE_KEYWORDS = [
    "告警",
    "故障",
    "5xx",
    "timeout",
    "超时",
    "cpu",
    "内存",
    "oom",
    "日志",
    "trace",
    "延迟",
    "qps",
    "错误率",
    "服务",
    "接口",
    "依赖",
    "mysql",
    "redis",
]
\`\`\`

- **第 11-12 行 \`DecisionAction\`**：就是正文说的 allow/deny/ask 三件套的类型化版本——\`allow\` 放行、\`block\` 拦截、\`needs_approval\` 需人工确认。**整个护栏系统的词汇表只有这三个词**，所有判定最后都归约到这上面。
- **第 15-21 行 \`SENSITIVE_PATTERNS\`**：三条正则，分别抓三类敏感信息——形如 \`api_key=...\` 的密钥（\`(?i)\` 忽略大小写，要求值至少 12 位防误伤）、大陆手机号（\`\\b\` 单词边界）、18 位身份证号（末位允许校验位 X）。命中意味着"这条输入不该出现在日志里"。
- **第 23-39 行 \`DANGEROUS_KEYWORDS\`**：危险动作关键词，中英混合：\`rm -rf\`、\`kubectl delete\`、\`drop table\` 这类破坏性命令，以及 \`重启\`、\`回滚\`、\`删除\`、\`扩容\`、\`缩容\`、\`清理磁盘\` 这类运维动作——**这些动作"可能扩大故障或造成数据损坏"，必须走 HITL**。
- **第 41-61 行 \`DIAGNOSIS_SCOPE_KEYWORDS\`**：诊断 Agent 的业务边界——\`告警\`、\`故障\`、\`5xx\`、\`超时\`、\`cpu\`、\`内存\`、\`oom\`、\`日志\`、\`trace\`、\`延迟\`、\`qps\`、\`错误率\`、\`mysql\`、\`redis\`……这个 Agent 只聊故障诊断，聊到范围外就拦截。

> 为什么用关键词表和正则，而不是让大模型判断"这危不危险"？因为**护栏的判定必须确定、可解释、零成本**——它要在每一条用户输入上跑，如果为每条输入都花一次 LLM 调用，护栏本身就变成了 Agent 最贵的环节。确定性规则可能有漏网（这是它的代价），但漏网会被 HITL 兜住——这正是"纵深防御"：规则先拦一层，人工再兜一层。

判定和审批的数据结构：

\`agent_app/guardrails.py:64-82\`

\`\`\`python
@dataclass(slots=True)
class GuardrailDecision:
    """护栏的“判决书”：三值裁决 + 判定原因 + 脱敏后的文本。"""

    action: DecisionAction
    reason: str
    sanitized_text: str
    requires_human: bool = False


@dataclass(slots=True)
class ApprovalRequest:
    """HITL 的“审批单据”：一创建就在 pending（等待中），不存在“没有状态”的中间态。"""

    request_id: str
    action: str
    reason: str
    status: Literal["pending", "approved", "rejected"] = "pending"
    created_at: str = field(default_factory=lambda: datetime.now(timezone.utc).isoformat())
\`\`\`

- **第 64-71 行 \`GuardrailDecision\`**：护栏的"判决书"。\`action\` 是三值之一，\`reason\` 是机器可读的判定原因（\`sensitive_data\` / \`dangerous_action\` / \`out_of_scope\` / \`in_scope\`），\`sanitized_text\` 是**脱敏后的文本**——不管最终放行还是拦截，下游拿到的都是脱敏版；\`requires_human\` 在 needs_approval 时置 True，供上层决定是否挂起。
- **第 74-82 行 \`ApprovalRequest\`**：HITL 的"审批单据"。\`request_id\` 唯一标识、\`action\` 描述要做什么、\`reason\` 为什么需要审批、\`status\` 是状态机。为什么 \`status\` 用 \`Literal\` 而不是 bool？因为状态有三个（\`pending\`/\`approved\`/\`rejected\`）且默认 \`pending\`——**单据一创建就在等待中**，不存在"没有状态"的中间态。

审批管理器——HITL 的状态机本体：

\`agent_app/guardrails.py:85-105\`

\`\`\`python
class HITLApprovalManager:
    """教学/演示用的最小内存审批管理器：重点讲清状态流转，不做持久化。"""

    def __init__(self) -> None:
        self._requests: dict[str, ApprovalRequest] = {}

    def request(self, action: str, reason: str) -> ApprovalRequest:
        # 发起审批：生成单据、记入 dict，状态默认 pending。动作在这里只是“挂起”，不是执行
        req = ApprovalRequest(request_id=uuid.uuid4().hex, action=action, reason=reason)
        self._requests[req.request_id] = req
        return req

    def decide(self, request_id: str, approve: bool) -> ApprovalRequest:
        # 人工裁决：approve=True → approved，否则 rejected；批准/拒绝是状态的唯一出口
        req = self._requests[request_id]
        req.status = "approved" if approve else "rejected"
        return req

    def get(self, request_id: str) -> ApprovalRequest | None:
        # 按 request_id 查单据；dict.get 查不到返回 None，不会抛 KeyError
        return self._requests.get(request_id)
\`\`\`

三个方法正好对应 HITL 的完整生命周期：

- **\`request\`（第 91-95 行）**：发起审批——生成单据、记入 dict、状态默认 \`pending\`。**动作在这里只是"挂起"，不是执行**。
- **\`decide\`（第 97-101 行）**：人工裁决——\`approve=True\` 置 \`approved\`，否则 \`rejected\`。**批准/拒绝是状态的唯一出口**，对应正文的 \`pending -> approved -> executed\`（或 \`pending -> rejected\`）。
- **\`get\`（第 103-105 行）**：按 \`request_id\` 查单据。

> 为什么用内存 dict 就够了？docstring 已经写明：*“教学/演示用的最小内存审批管理器：重点讲清状态流转，不做持久化。”*——这是教学/演示用的最小实现，重点是把**状态流转**讲清楚，不是做持久化。真实生产要把这张 dict 换成数据库（审批记录要落库、要审计、要超时自动过期），但状态机本身不变——换的只是存储，不是逻辑。

判定原语——四个纯函数，一个"改"三个"查"：

\`agent_app/guardrails.py:108-130\`

\`\`\`python
def mask_sensitive(text: str) -> str:
    # 把命中的敏感串整体替换成 [REDACTED]——日志落盘前先脱敏，密钥/手机号/身份证永远不上磁盘
    masked = text
    for pattern in SENSITIVE_PATTERNS:
        masked = pattern.sub("[REDACTED]", masked)
    return masked


def contains_sensitive(text: str) -> bool:
    # 只判断“有没有敏感信息”，不改原文；拦截之后要留的记录由 mask_sensitive 保证干净
    return any(pattern.search(text) for pattern in SENSITIVE_PATTERNS)


def contains_dangerous_action(text: str) -> bool:
    # 先统一小写再匹配：关键词表中英混合、大小写不一，不归一化就能被变体（如 RESTART）绕过
    lowered = text.lower()
    return any(keyword.lower() in lowered for keyword in DANGEROUS_KEYWORDS)


def is_in_scope(text: str) -> bool:
    # 是否命中诊断范围关键词：判断“这条输入该不该这个 Agent 管”
    lowered = text.lower()
    return any(keyword.lower() in lowered for keyword in DIAGNOSIS_SCOPE_KEYWORDS)
\`\`\`

- **第 108-113 行 \`mask_sensitive\`**：把命中的敏感串整体替换成 \`[REDACTED]\`。**这就是"日志落盘前先脱敏"的实现**——先过 \`mask_sensitive\` 再写日志，密钥、手机号、身份证永远不会出现在磁盘上。
- **第 116-118 行 \`contains_sensitive\`**：判断"有没有敏感信息"，只看有没有命中，不改原文。
- **第 121-124 行 \`contains_dangerous_action\`**：先 \`text.lower()\` 统一小写再匹配。为什么？关键词表里中英混合、大小写不一（\`restart\` 和 \`RESTART\` 都算危险），**不归一化，大小写变体就能绕过检查**——硬边界必须对变体也硬。
- **第 127-130 行 \`is_in_scope\`**：同理，判断是否命中诊断范围关键词。

> 为什么"判定"和"脱敏"要拆成两个函数？因为拦截之后仍然可能要留记录（否则"为什么拦"无从追溯），而留下的必须是脱敏后的版本。判定函数说"拦"，脱敏函数保证"留的东西干净"，各司其职。

最后是主入口——用户输入的必经之路，把以上原语串成一条裁决链：

\`agent_app/guardrails.py:133-161\`

\`\`\`python
def evaluate_user_input(text: str) -> GuardrailDecision:
    # 用户输入的唯一入口，一条 if 链完成整个裁决；顺序 = 安全优先级：
    # 敏感 block（最硬）> 危险 needs_approval（可补救）> 范围外 block（业务规则）> allow
    # 先脱敏：无论哪个分支，下游拿到的都是脱敏版文本
    sanitized = mask_sensitive(text)
    # 敏感信息优先级最高：带密钥的“删除”请求先 block，密钥连审批单都到不了
    if contains_sensitive(text):
        return GuardrailDecision(
            action="block",
            reason="sensitive_data",
            sanitized_text=sanitized,
        )
    # 危险动作走 HITL：挂起等人工确认，最终责任留在人手里
    if contains_dangerous_action(text):
        return GuardrailDecision(
            action="needs_approval",
            reason="dangerous_action",
            sanitized_text=sanitized,
            requires_human=True,
        )
    # 聊出诊断范围：既不敏感也不危险，但不是这个 Agent 该管的，拦截
    if not is_in_scope(text):
        return GuardrailDecision(
            action="block",
            reason="out_of_scope",
            sanitized_text=sanitized,
        )
    # 全部通过才放行
    return GuardrailDecision(action="allow", reason="in_scope", sanitized_text=sanitized)
\`\`\`

一条 if 链完成整个裁决，顺序是刻意设计的：

- **先脱敏（第 137 行）**：无论结果如何，先算出 \`sanitized\`，后面每个分支都带着它。
- **敏感优先 block（第 139-144 行）**：为什么敏感的检查放在最前面？一条带密钥的"删除"请求，如果先走审批，**密钥就进了审批单**；先 block 掉，密钥连下游都到不了。数据泄露的优先级永远最高。
- **危险走审批（第 146-152 行）**：命中危险关键词 → \`needs_approval\` + \`requires_human=True\`，动作挂起等人批。
- **范围外 block（第 154-159 行）**：既不敏感也不危险，但聊的不是故障诊断 → 拦截。
- **最后才 allow（第 161 行）**：全部通过才放行，\`reason="in_scope"\`。

> 为什么顺序是"敏感 → 危险 → 范围"而不是别的？因为这是**安全优先级**的代码化：\`block\`（敏感，最硬）> \`needs_approval\`（危险，可补救）> \`block\`（范围，业务规则）> \`allow\`。任何一条输入，先问"有没有不能见光的东西"，再问"危不危险"，再问"该不该这个 Agent 管"——顺序错了，比如把范围检查放最前，一条带密钥的越权请求会被先以 \`out_of_scope\` 拦掉而**漏掉脱敏**。这一条 if 链，就是"模型不是安全边界"这句话的代码形态。

## 为什么这样写

- **trace 用“内存事件列表 + JSONL 导出”，不直接打日志**：\`TraceRecorder\` 的 docstring 一句话写死定位——*“内存中的结构化事件记录器，支持 JSONL 导出（一次实例 = 一次 trace）。”*（observability.py:46）。内存写入零 IO、顺序稳定；JSONL 一行一事件、追加友好，事后可流式消费、按 trace_id 聚合。
- **审批管理器刻意做小**：\`HITLApprovalManager\` 的 docstring 直说 *“教学/演示用的最小内存审批管理器：重点讲清状态流转，不做持久化。”*（guardrails.py:86）——教学代码的重点是状态流转（pending/approved/rejected），不是持久化；把复杂度留给真实的审批系统，而不是在演示里堆数据库。
- **判定顺序"敏感 → 危险 → 范围"，block 优先于 needs_approval**：\`evaluate_user_input\` 的 if 链（guardrails.py:139-161）把敏感数据放在第一条——带密钥的请求必须整体 block，绝不让密钥流进审批单或下游。这是"安全优先级"的代码化：拦截 > 人工 > 放行。
- **payload 默认截断到 500 字符**：\`max_preview_chars: int = 500\`（observability.py:53）配合 \`_truncate_payload\`（observability.py:163-171）——观测的目标是"还原结论"，不是把工具的全量输出再存一份；长文本留预览 + 截断标记，防止 trace 本身变成新的磁盘炸弹。
- **危险词匹配先 \`lower()\` 归一化**：\`lowered = text.lower()\`（guardrails.py:123）——中英混合的关键词表（\`rm -rf\` 和 \`删除\` 并存）若不归一化，大小写变体（如 \`RESTART\`）就能绕过检查。硬边界必须对变体也硬。

## 本章小结

- 可观测性 = 把每一步变成带 \`trace_id\` 的结构化事件（类型、payload、耗时、错误），按序落 JSONL，结论可还原、失败可归因。
- HITL = 危险动作由代码判定为 \`needs_approval\`，先进 \`pending\` 等人批，\`approved\`/\`rejected\` 之后状态才有意义，最终责任留在人手里。
- 安全护栏 = 模型不是安全边界；\`allow\`/\`block\`/\`needs_approval\` 三值裁决，敏感先 block、危险先审批、范围外 block，日志落盘前先脱敏。
- 护栏判定必须确定、可解释、零成本——正则和关键词表优先于让大模型做安全判断，漏网的由 HITL 兜住，这就是纵深防御。
- 这一处是"把每一步变成可查的记录、把决策权交给代码和人"的事——后面把 \`TraceRecorder\` 接进主循环、把 \`evaluate_user_input\` 挂在入口，只是把这些原语组织成流水线，**核心没变复杂**。

## 一句话边界

- 可观测性是架构属性，不是上线后补日志；要能还原结论怎么来的。
- HITL 把高危动作的最终责任留在人手里，不是让人替模型想。
- 模型不是安全边界：Prompt 是软约束，权限是硬边界，安全靠代码层护栏。
- 护栏用 allow/deny/ask 三件套，拦越权/敏感/危险。
- 不可观测、不可暂停、不可拒绝的 Agent 不适合进生产。

## 读完应该能用自己的话回答

1. 可观测性、HITL、安全护栏各解决什么问题？
2. 可观测性要记录哪些运行时事件？为什么不能上线后补日志？
3. HITL 的价值是什么？哪些动作该走人工确认？
4. 为什么说"模型不是安全边界"？Prompt 和权限各是什么约束？
5. 护栏的 allow/deny/ask 三件套是什么？

## 想深入

权限五对象（身份/资源/动作/策略/审计）、CLI 六层纵深防御、trace/span 等，见八股·11 Agent 权限设计和八股·08 工程化实践。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 的可观测性、HITL 和安全护栏。请解释：1) 这三个概念各解决什么问题；2) 可观测性要记什么、为什么不能上线后补；3) HITL 的价值；4) 为什么说模型不是安全边界。用"诊断 Agent 建议重启服务"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. 可观测性记录范围**

可观测性最应该记录什么？

A. 只有最终答案
B. 输入、路由、工具调用、模型调用、错误、耗时、token、安全事件
C. 只有用户姓名
D. 只有 README

**Q2. HITL 适用范围**

HITL 应该用于什么动作？

A. 所有普通问候
B. 高风险动作或证据不足但影响大的结论
C. 任何 token 计算
D. 单纯读取帮助文档

**Q3. Guardrails 的实现边界**

Guardrails 不能只靠什么实现？

A. 代码规则
B. Prompt 约束
C. 敏感信息脱敏
D. 工具白名单

**Q4. 日志落盘前的动作**

日志落盘前应该先做什么？

A. 脱敏
B. 删除所有字段
C. 只保留模型名
D. 改成截图

### 开放题（1 道）

**Q5. 开放题**：列出三个你认为诊断 Agent 必须 HITL 的动作，并说明理由。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 | 解析 |
| --- | --- | --- |
| Q1 | **B** | 可观测性要能还原"结论怎么来的"：输入、路由、工具调用、模型调用、错误、耗时、token、安全事件都是事件链的一环。A 只记最终答案无法归因；C/D 与可观测性无关。 |
| Q2 | **B** | HITL 的价值是把高风险动作的最终责任留在人手里：危险动作（删除、支付、重启）或证据不足但影响大的结论才值得挂起等人批。A/C/D 都是低风险的例行操作。 |
| Q3 | **B** | 模型不是安全边界：Prompt 是软约束（模型可能不听），权限和护栏是代码层硬边界。A/C/D 恰恰是护栏的实现手段，不是短板。 |
| Q4 | **A** | 日志是敏感信息的泄漏面，落盘前必须先脱敏（\`mask_sensitive\` 把命中串替换成 \`[REDACTED]\`）。B/C 破坏日志可用性；D 与脱敏无关。 |

### 开放题参考思路

**Q5. 诊断 Agent 必须 HITL 的动作**：合格答案至少要列出 3 个动作，且每个动作都要说明理由：

- 典型动作：重启服务、删除文件、清理磁盘、扩容缩容、回滚发布、修改配置。
- 理由：这些动作可能扩大故障或造成数据损坏，最终责任必须由人工确认。

**红线**：只列动作不说明理由，**不算通过**——每个动作的理由都要落到"可能扩大故障 / 造成数据损坏 / 责任必须人担"这类具体后果上，这正是 HITL 的判据。
`,zf=`---
title: Day 21 会话连续性与整合复盘
tags:
  - week3/day21
  - concept
  - code
  - exercise
---

# Day 21：会话连续性与整合复盘

> 阅读约 35 分钟 ｜ 前置：[[day15-Harness工程化整理]] ~ [[day20-可观测性HITL安全护栏]] ｜ 本篇包含：概念讲解 + 代码走读 + 课后习题
> 本篇代码：\`agent_app/session.py\`（SQLite 会话存储，含写与读两个方向）+ \`docs/week3-retro.md\`、\`docs/week4-integration-plan.md\`（复盘与整合计划文档），完整代码已嵌入下方代码走读。

## 本篇解决一个问题

前六天你分别有了 Harness、Skill、MCP、Multi-agent、Eval、Observability、Guardrails、HITL。每个模块单独都能跑，但真实 Agent 任务不会只发生在一次进程调用里——任务可能被中断、可能等人工审批、可能第二天由另一个人继续、可能在复盘时被翻出来。

当任务跨轮次、跨进程、跨人继续时，系统怎么知道自己之前做过什么、哪些结论已验证、哪些动作没完成、下一步从哪恢复？这就是会话连续性。今天还要把 Week 3 所有模块串成一个端到端 demo，做整周复盘。

**一句话主旨**：会话连续性的本质是状态协议——把"任务做到哪"写下来（持久化），再用同一个 \`thread_id\` 找回来（恢复）。今天的代码走读就按"写"和"读"两半展开，最后走读两篇复盘文档。

## 一个例子

一个事故诊断任务被中断：

\`\`\`text
没有会话连续性：进程一退出，之前查了什么、查到哪、哪些结论已验证全丢了
  第二天另一个人接手，只能从头重新诊断

有会话连续性：把会话状态（消息、事件、已验证结论、待办动作）持久化
  用 thread_id 串起来，第二天 resume(thread_id) 接着上次的进度继续
  -> 不重复劳动，能审计、能搜索、能复盘
\`\`\`

差别在于：会话连续性让 Agent 任务能中断恢复，而不是每次从零开始。

## 这个概念是什么

**会话连续性** 是让 Agent 任务能跨轮次、跨进程、跨入口地中断和恢复。它不是简单保存聊天记录，而是把"任务做到哪、哪些验证过、哪些没完成"持久化下来，用可恢复的协议串起整个任务。

要先分清几个容易混的概念：

| 概念 | 管什么 | 生命周期 |
|---|---|---|
| Session | 一次任务的对话和事件 | 任务/会话生命周期 |
| Memory | 跨会话的长期信息（Day 11） | 长期，可失效 |
| Trace | 运行时每步的遥测记录（Day 20） | 用于审计/归因 |
| Context | 单次调用拼进 messages 的内容（Day 12） | 单次调用 |

Session ≠ Memory ≠ Trace ≠ Context，各有各的职责，别混。

## 代码走读：把"任务做到哪"写下来，再把它读回来

（完整代码已嵌入下方代码走读，正文里的路径都相对 \`agent_app/\` 这个目录写）。把 Week 3 串成端到端 demo 的是 \`agent_app/week3_demo.py\`——它自己的 docstring 第一句就写明：\`"""Day 21: end-to-end Week 3 demo."""\`（\`week3_demo.py:1\`）。今天主线走读的是它依赖的会话存储 \`agent_app/session.py\`（全文件 158 行，下面分六块引完），以及两篇复盘文档的结构。每一段引用都标注了 \`文件:行号\`，与下方嵌入的代码一一对应，可以就地核对。

### 第一块：会话的"户口本"——\`_now\` 与 \`SessionRecord\`

\`agent_app/session.py:1-23\`

\`\`\`python
"""Day 21：轻量级 SQLite 会话存储。"""
from __future__ import annotations

import json
import sqlite3
import uuid
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


def _now() -> str:
    # 全模块唯一的时间来源：统一用 UTC 的 ISO 格式，三张表之间才能互相排序、比较
    return datetime.now(timezone.utc).isoformat()


@dataclass(slots=True)
class SessionRecord:
    """会话登记簿的一条记录：只标识"哪个会话存在、活到什么时候"，不含对话内容。"""
    thread_id: str
    created_at: str
    updated_at: str
\`\`\`

- **第 1 行模块 docstring**：一句点题——"Day 21：轻量级 SQLite 会话存储。"（轻量、SQLite、会话存储）。这三个词就是本模块的全部边界：它是存储，不是业务逻辑；它轻量，不是生产级服务。
- **第 13-15 行 \`_now()\`**：全模块唯一的时间来源，返回 UTC 的 ISO 格式字符串。为什么所有时间戳都要走它？因为 messages、events、sessions 三张表要能互相排序、比较，格式必须统一；选 UTC 是因为跨时区、跨进程恢复时，UTC 永远没有歧义。
- **第 19-23 行 \`SessionRecord\`**：只有三个字段——\`thread_id\` 加创建/更新时间。这是"会话这个壳"：docstring 自己写明职责是"只标识哪个会话存在、活到什么时候"，它不含对话内容，真正的内容在下面两张表里。\`slots=True\` 让 dataclass 不生成 \`__dict__\`，省内存，还顺便禁止了运行时动态加属性——字段写错了会在编译期暴露，而不是悄悄长出一个没用的属性。

> 为什么 \`SessionRecord\` 这么瘦？因为"会话"这个概念的职责就是标识 + 生命周期。把对话塞进 SessionRecord，它就会变成什么都能装的杂物箱——后面的 messages/events 拆分就没有意义了。

### 第二块：打开即就绪的 \`__init__\`

\`agent_app/session.py:26-42\`

\`\`\`python
class SQLiteSessionStore:
    """把消息和事件持久化到 SQLite，供离线 demo 跨进程恢复。

    写：append_message / append_event（写前自动确保会话存在）；
    读：get_session / get_messages / get_events（三个读原语拼出"恢复"）。
    注意：只适合单进程、低频读写；高并发写请换 PostgreSQL / Redis。
    """

    def __init__(self, path: str | Path = ":memory:") -> None:
        # 默认 ":memory:" 是纯内存库（进程结束即消失，适合测试）；
        # 传磁盘路径则持久化，进程重启后数据仍在
        self.path = str(path)
        self.conn = sqlite3.connect(self.path)
        # row_factory 让查询结果可以按列名取值（row["thread_id"]），而不是数字下标
        self.conn.row_factory = sqlite3.Row
        # 构造时就把表建好：拿到 store 即可直接用，"打开即就绪"是不变量
        self._init_schema()
\`\`\`

- **第 27-32 行类 docstring**：第一句*"把消息和事件持久化到 SQLite，供离线 demo 跨进程恢复。"*——"离线 demo"划定了适用场景，docstring 还明说"只适合单进程、低频读写；高并发写请换 PostgreSQL / Redis"。Week 4 服务化之后如果要换存储，接口语义不变，但实现是另一回事。
- **第 34 行 \`path: str | Path = ":memory:"\`**：默认值是 \`":memory:"\`——不传路径就是纯内存库，进程一结束就没了，最适合测试；传一个磁盘路径就是持久化库，进程重启后数据还在。同一个类、两种用法，靠的就是这一个默认参数。
- **第 40 行 \`row_factory = sqlite3.Row\`**：让查询结果能按列名取（\`row["thread_id"]\`）而不是数字下标——后面所有 \`row["..."]\` 的写法都依赖这一行。这是 SQLite 标准库里最划算的一行配置。
- **第 42 行 \`self._init_schema()\`**：构造时就建好表。调用方拿到 store 对象就能直接用，不需要记得"先初始化"——"打开即就绪"是不变量，不是约定。

### 第三块：三张表，各管一件事

\`agent_app/session.py:44-73\`

\`\`\`python
    def _init_schema(self) -> None:
        # 三张表各管一件事：
        #   sessions —— 会话登记簿（thread_id 是主键，也是另两张表的外键引用）
        #   messages —— 对话内容（role/content，按写入顺序回放给模型）
        #   events   —— 结构化事件（guardrail 判定、工具调用、HITL 审批，供检索/复盘）
        # IF NOT EXISTS + executescript：整段一次执行且幂等，重复初始化不会报错
        self.conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS sessions (
                thread_id TEXT PRIMARY KEY,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                thread_id TEXT NOT NULL,
                role TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                thread_id TEXT NOT NULL,
                event_type TEXT NOT NULL,
                payload TEXT NOT NULL,
                created_at TEXT NOT NULL
            );
            """
        )
        self.conn.commit()
\`\`\`

- **三张表的职责分工**：\`sessions\` 是会话登记簿（谁能回答"哪些会话存在"）；\`messages\` 存对话内容（role/content，供回放给模型）；\`events\` 存结构化事件（guardrail 判定、工具调用、HITL 审批，供检索和复盘）。
- **为什么消息和事件分两张表？** 因为它们的查询模式完全不同：消息要按写入顺序整段回放给模型，字段是 role/content；事件要按类型检索、看载荷，字段是 event_type/payload。混在一张表里，要么互相塞满空列，要么查询时到处过滤。
- **第 53 行 \`thread_id TEXT PRIMARY KEY\`**："用 thread_id 串起来"落到数据模型上，就是它做 sessions 主键、做 messages/events 的外键引用。没有这个字段，恢复就无从谈起。
- **第 58/65 行 \`id INTEGER PRIMARY KEY AUTOINCREMENT\`**：messages 和 events 各自有自增 id，配合后面的 \`ORDER BY id\`，保证读回来的顺序和写进去的顺序完全一致——对话历史的意义就在于顺序。
- **第 68 行 \`payload TEXT\`**：事件载荷用 TEXT 存，内容是 JSON 字符串。SQLite 不是为 JSON 查询设计的（虽然新版有 JSON1 扩展），这里保持最简：\`json.dumps\` 写、\`json.loads\` 读，成对出现。
- **\`IF NOT EXISTS\` + \`executescript\`**：整段 SQL 一次执行，且幂等——重复初始化不会炸。\`commitscript\` 会在最后统一提交。

### 第四块：创建与续接——\`create_session\` / \`get_session\`

\`agent_app/session.py:75-96\`

\`\`\`python
    def create_session(self, thread_id: str | None = None) -> SessionRecord:
        # 没传 thread_id 就现场生成全局唯一 id；传了则复用旧会话——这就是跨进程恢复的钥匙
        tid = thread_id or f"thread-{uuid.uuid4().hex[:12]}"
        now = _now()
        # INSERT OR IGNORE：thread_id 已存在时静默跳过而不是报错/覆盖——"同一个会话再来"是常态
        self.conn.execute(
            "INSERT OR IGNORE INTO sessions(thread_id, created_at, updated_at) VALUES (?, ?, ?)",
            (tid, now, now),
        )
        self.conn.commit()
        # 插入后立刻读回，保证返回的记录带真实落库时间戳；刚 INSERT OR IGNORE 过，不可能为 None
        return self.get_session(tid)  # type: ignore[return-value]

    def get_session(self, thread_id: str) -> SessionRecord | None:
        # 返回 None = 查无此会话（全新任务）；返回记录 = 已有任务，可以继续
        row = self.conn.execute(
            "SELECT thread_id, created_at, updated_at FROM sessions WHERE thread_id = ?",
            (thread_id,),
        ).fetchone()
        if row is None:
            return None
        return SessionRecord(row["thread_id"], row["created_at"], row["updated_at"])
\`\`\`

> 为什么 \`create_session\` 允许外部传入 \`thread_id\`？——这就是跨进程恢复的钥匙。会话 1 结束时，把 \`thread_id\` 交给调用方（写进 trace、写进响应体）；第二天会话 2 带着同一个 \`thread_id\` 进来，\`create_session\` 不会新建，而是复用。参数 \`None\` 时生成 \`thread-{uuid4().hex[:12]}\`——标准库就能产出的全局唯一 id，不依赖任何外部服务。

- **第 81 行 \`INSERT OR IGNORE\`**：这是"续接"语义的落点。thread_id 已存在时，静默跳过而不是报错、不是覆盖——"同一个会话再来"是常态，不是异常。
- **第 86 行 \`return self.get_session(tid)\`**：插入后立刻读回来，保证返回的记录包含真实落库的时间戳。\`# type: ignore[return-value]\` 是给类型检查器看的说明——\`get_session\` 理论上可能返回 None，但刚 \`INSERT OR IGNORE\` 过，这里不会。
- **第 88-96 行 \`get_session\`**：返回 \`None\` 就是"查无此会话"。调用方拿到 \`None\` 就知道这是全新任务；拿到记录就知道可以继续。这是恢复流程的"探针"。

### 第五块：写入——\`append_message\` / \`append_event\` / \`_touch\`

\`agent_app/session.py:98-119\`

\`\`\`python
    def append_message(self, thread_id: str, role: str, content: str) -> None:
        # 写之前先确保会话存在：调用方拿 thread_id 就能直接写，不会漏建会话而外键报错
        self.create_session(thread_id)
        now = _now()
        # 所有 SQL 都用 ? 占位符 + 参数元组（参数化查询）：转义交给驱动，中文/引号/换行都安全
        self.conn.execute(
            "INSERT INTO messages(thread_id, role, content, created_at) VALUES (?, ?, ?, ?)",
            (thread_id, role, content, now),
        )
        # 每次写入都顺手刷新 updated_at："这个会话最后活跃在什么时候"随时可查
        self._touch(thread_id, now)

    def append_event(self, thread_id: str, event_type: str, payload: dict[str, Any]) -> None:
        self.create_session(thread_id)
        now = _now()
        # 事件载荷用 JSON 字符串落库：ensure_ascii=False 让中文可读，
        # sort_keys=True 让相同载荷序列化结果稳定，方便 diff / 去重 / 测试断言
        self.conn.execute(
            "INSERT INTO events(thread_id, event_type, payload, created_at) VALUES (?, ?, ?, ?)",
            (thread_id, event_type, json.dumps(payload, ensure_ascii=False, sort_keys=True), now),
        )
        self._touch(thread_id, now)
\`\`\`

- **两个方法的第一行都是 \`self.create_session(thread_id)\`**：写之前先确保会话存在。这维护了一个不变量——"thread_id 对应的会话必须先存在，且一定存在"。调用方拿着 thread_id 就能直接写，永远不需要"先查再写"，也不会因为漏了建会话而外键报错。
- **第 117 行序列化参数**：\`ensure_ascii=False\` 让中文不转义成 \`\\uXXXX\`，落库可读；\`sort_keys=True\` 让相同载荷的序列化结果稳定一致，方便 diff、去重、测试断言。这两个参数是刻意选的，不是默认值。
- **第 108/119 行 \`_touch(thread_id, now)\`**：每次写入都顺手更新 \`sessions.updated_at\`——"这个会话最后活跃在什么时候"随时可查。这是会话级健康信号：复盘时能看出哪个会话是死的、哪个还在动。
- **所有 SQL 都用 \`?\` 占位符 + 参数元组**：参数化查询。SQL 注入防御只是顺带的好处，更日常的好处是字符串转义由驱动处理，中文、引号、换行都能安全入库。

### 第六块：读回——恢复不是魔法方法

\`agent_app/session.py:121-155\`

\`\`\`python
    def get_messages(self, thread_id: str) -> list[dict[str, Any]]:
        # ORDER BY id 保证按写入顺序回放：恢复出的消息顺序 = 任务真实发生的顺序
        rows = self.conn.execute(
            "SELECT role, content, created_at FROM messages WHERE thread_id = ? ORDER BY id",
            (thread_id,),
        ).fetchall()
        # sqlite3.Row -> 普通 dict：role/content 结构与 LLM 消息格式几乎一一对应
        return [dict(row) for row in rows]

    def get_events(self, thread_id: str) -> list[dict[str, Any]]:
        rows = self.conn.execute(
            "SELECT event_type, payload, created_at FROM events WHERE thread_id = ? ORDER BY id",
            (thread_id,),
        ).fetchall()
        return [
            {
                "event_type": row["event_type"],
                # 与写入时的 json.dumps 严格互逆：把 TEXT 还原成 dict
                "payload": json.loads(row["payload"]),
                "created_at": row["created_at"],
            }
            for row in rows
        ]

    def close(self) -> None:
        # 显式释放连接：进程退出前调用，避免 SQLite 留下写锁
        self.conn.close()

    def _touch(self, thread_id: str, timestamp: str) -> None:
        # 内部辅助：写入消息/事件后刷新会话的 updated_at（不对外暴露）
        self.conn.execute(
            "UPDATE sessions SET updated_at = ? WHERE thread_id = ?",
            (timestamp, thread_id),
        )
        self.conn.commit()
\`\`\`

- **第 124 行 \`ORDER BY id\`**：按写入顺序回放。恢复出来的 messages 顺序就是任务真实发生的顺序——这是"接着上次的进度"能成立的前提。
- **第 128 行 \`[dict(row) for row in rows]\`**：把 \`sqlite3.Row\` 转成普通 dict。dict 的 role/content 结构跟 LLM 调用要的消息格式几乎一一对应，恢复时可以直接映射进 messages 喂给模型。
- **第 139 行 \`json.loads(row["payload"])\`**：与写入时的 \`json.dumps\` 严格互逆，把 TEXT 还原成 dict。写入 dumps、读出 loads，参数成对——这是本模块最容易保持对称的地方。
- **第 145-147 行 \`close()\`**：显式释放连接。进程退出前调用，避免 SQLite 留下写锁。

> 为什么没有看到 \`resume(thread_id)\` 方法？——诚实说明：这个 store 里**没有**叫 resume 的方法。"恢复"是三个读操作拼出来的：\`get_session\` 判断会话存不存在、\`get_messages\` 拿回对话历史、\`get_events\` 拿回结构化结论（guardrail 判定、HITL 审批结果、已验证的结论）。判断"任务做到哪、哪些动作还 pending"是调用方的职责——比如 \`week3_demo.py\` 收尾就用 \`store.get_messages(session.thread_id)\` 和 \`store.get_events(session.thread_id)\` 把整个任务的过程读出来（\`week3_demo.py:196-197\`）。把"恢复"拆成可组合的读原语，而不是塞一个魔法方法，这正是这个模块的定位：只负责存取，不负责业务。

> ### 岔路：为什么选 SQLite？（可跳读，不影响主线）
> 三个理由：一是零部署，\`sqlite3\` 是标准库，不引入任何服务进程；二是单文件，数据库就是一个 \`.db\` 文件，可以整文件拷走、备份、进 git；三是够用，demo 的读写量级离 SQLite 的瓶颈差着几个数量级。它的边界也要知道：不适合高并发写、不适合多进程同时写。所以 Week 4 计划里只把它当"离线雏形"，服务化之后会话存储可能换成 PostgreSQL/Redis——但接口语义（按 thread_id 读写）不变。

### 第七块：复盘文档走读——\`week3-retro.md\` 的结构

会话存储解决了"怎么存"，复盘文档解决"怎么证明 Week 3 真的做完了"。整篇 27 行，三段式结构：

\`docs/week3-retro.md:1-27\`

\`\`\`markdown
# Week 3 Retro

## 已完成

- Harness：README、配置、Prompt 和架构文档已补齐。
- Skill：\`diagnosis-reviewer\` 已定义触发条件、流程、边界和输出格式，并可通过 \`skill_runtime.py\` 校验输出契约。
- MCP：诊断工具可通过 adapter 注册进 \`ToolRegistry\`，Day 21 demo 会实际调用 \`query_metric\` 和 \`search_sop\`。
- Multi-agent：支持 Router + metrics/logs/sop workers + reviewer。
- Eval：20 条 Golden Dataset 可批量跑 baseline，并生成 \`trace-v0.jsonl\` 支持 bad case 复盘。
- Observability / Guardrails：支持结构化事件和高风险拦截。
- Session：SQLite 保存消息和事件。

## 当前仍是 mock 的部分

- 指标查询来自本地模拟数据。
- SOP 检索来自内置文本。
- 日志分析是关键词规则。
- LLM Judge 只预留接口，默认不联网。

## Week 4 优先级

1. 先服务化：FastAPI \`/chat\` + SSE 或普通 JSON。
2. 再接入口：飞书 / Slack / 企业微信任选一条。
3. 最后接真实系统：Prometheus 或日志平台先选一个，不要同时全接。
4. 保留 eval baseline，每次接真实能力后重跑。

详见 \`docs/week4-integration-plan.md\`。
\`\`\`

- **"已完成"七条正好对应 Week 3 每天一个模块**：Harness、Skill、MCP、Multi-agent、Eval、Observability/Guardrails、Session。每条都写"做到了什么程度"（比如 MCP 那条明说 Day 21 demo 会实际调用 \`query_metric\` 和 \`search_sop\`，Eval 那条给了"20 条 Golden Dataset + \`trace-v0.jsonl\`"的可核实数字），不是"做了"两个字。
- **"当前仍是 mock 的部分"四条是诚实的边界**：指标查询来自本地模拟数据、SOP 检索来自内置文本、日志分析是关键词规则、LLM Judge 只预留接口。复盘文档的价值恰恰在于敢写"没做完"——这四条就是 Week 4 要补的清单。
- **"Week 4 优先级"是排过序的 todo**：先服务化、再入口、再真实系统，且"保留 eval baseline，每次接真实能力后重跑"——接真实能力之前先有对比基线，这是防退化的纪律。

### 第八块：整合计划走读——\`week4-integration-plan.md\` 的结构

复盘回答"这周做完了什么"，整合计划回答"下周从哪开始"。计划文档的第一段就立了边界：

\`docs/week4-integration-plan.md:1-13\`

\`\`\`markdown
# Week 4 Integration Plan

## 目标

Week 4 不再补概念，重点是把 Week 3 的离线工程雏形服务化，并接入一个真实或半真实入口。

## 入口选择

优先级：

1. FastAPI \`/chat\`：最小可测，适合先打通服务边界。
2. IM bot：飞书 / Slack / 企业微信任选一个，适合演示。
3. Alert webhook：等服务和安全边界稳定后再接。
\`\`\`

- **第 5 行目标句**："不再补概念"是 Week 4 的第一承诺——前三周的概念积累到此为止，接下来是工程落地。先立边界再写细节，跟 session.py 的 docstring 是同一个习惯。
- **入口选择给了排序理由**：FastAPI \`/chat\` 最小可测、IM bot 适合演示、Alert webhook 要等服务和安全边界稳定——每个选择都带一句为什么，不是拍脑袋。

接下来是 API Contract 草案——注意 Request 里的 \`thread_id\` 字段和 Response 里的 \`session_id\`/\`trace_id\`，这正是今天讲的会话连续性在服务边界上的投影：

\`docs/week4-integration-plan.md:15-39\`

~~~markdown
## API Contract 草案

Request:

\`\`\`json
{
  "thread_id": "optional-existing-thread",
  "alert": "【P1】trade-order CPU 96%，5xx 升高",
  "source": "manual|im|webhook"
}
\`\`\`

Response:

\`\`\`json
{
  "session_id": "thread-xxx",
  "trace_id": "trace-xxx",
  "skill_name": "diagnosis-reviewer",
  "mcp_tool_calls": [],
  "multi_agent_report": {},
  "eval_result": {},
  "requires_human": true
}
\`\`\`
~~~

- **Request 的 \`thread_id\` 是"optional-existing-thread"**：客户端可以不带（新任务，服务端生成并返回），也可以带上旧 id（继续旧任务）——"续接"从进程内约定升级成了 API 契约。
- **Response 一个不漏地回显每个模块**：session_id、trace_id、skill_name、mcp_tool_calls、multi_agent_report、eval_result、requires_human——Week 3 的七件套，在服务边界上一次说全。

后面三段是防翻车的细则：真实 adapter 的接入策略、密钥管理、baseline 保留方式：

\`docs/week4-integration-plan.md:41-51\`

\`\`\`markdown
## 真实 Adapter 设计

- \`query_metric\`：先接 Prometheus 或一个本地 JSON fixture，不要同时接多个监控系统。
- \`search_logs\`：先接日志样例文件或 Loki / Elasticsearch 的只读查询。
- \`search_sop\`：继续使用 markdown / Chroma，本周不接复杂知识库权限。

## Secrets / Config 管理

- \`.env\` 只保留本地开发配置。
- \`.env.example\` 只写变量名，不写真实值。
- 生产密钥不进入 prompt、日志、eval dataset 和 demo 输出。
\`\`\`

- **Adapter 三条都带着"不要同时接多个"的提醒**：接真实系统最怕贪多，一次一个、可回退。
- **Secrets 三条是 Week 1 就立下的密钥纪律的正式化**：\`.env\` 只放本地配置、\`.env.example\` 只写变量名、生产密钥不进 prompt/日志/数据集——demo 输出里也不许有。

文档收尾是验收标准——计划不落到可验收的条目上就不算计划：

\`docs/week4-integration-plan.md:68-74\`

\`\`\`markdown
## Week 4 Demo 验收标准

- 有一个可调用入口：FastAPI 或 IM bot。
- 输入一条告警后返回 session_id 和 trace_id。
- 至少调用一个真实或 fixture 化的外部 adapter。
- 输出中能看到 Skill、MCP、Multi-agent、Eval、Guardrails、Session。
- 录屏包含 happy path 和一个失败/拦截案例。
\`\`\`

- **每条都可验证**："返回 session_id 和 trace_id"、"至少调用一个外部 adapter"、"录屏包含 happy path 和一个失败/拦截案例"——没有一条是"做得更好"。最后一条尤其重要：Week 4 演示必须包含失败/拦截案例，因为 Week 3 的 Guardrails 和 HITL 只有在被触发时才有演示价值。

## 为什么这样写

- **边界写进 docstring 而不是 README**：模块 docstring 是 *"Day 21：轻量级 SQLite 会话存储。"*（\`session.py:1\`），类 docstring 第一句是 *"把消息和事件持久化到 SQLite，供离线 demo 跨进程恢复。"*（\`session.py:27\`）——一句说"轻量"，一句说"离线 demo"。边界写在代码第一行，比写在文档里更不容易被无视，未来维护者打开文件第一眼就看到了。
- **"会话必须先存在"由存储自己维护**：\`append_message\` 和 \`append_event\` 的第一行都是 \`self.create_session(thread_id)\`（\`session.py:100\`、\`session.py:111\`）——调用方不用记得先建会话，也不会有"忘了建"的运行时错误。不变量收在数据层，业务层才敢放心用。
- **"续接"是数据层语义，不是业务层魔法**：\`create_session\` 用 \`INSERT OR IGNORE\`（\`session.py:81\`），同一个 thread_id 再来时静默复用而不是报错或覆盖；配合第 75 行允许外部传入 thread_id——跨进程恢复就只是"带着同一个 id 再写一次"。没有 resume 方法，是因为恢复被拆成了可组合的读原语（\`get_session\`/\`get_messages\`/\`get_events\`），这是取舍不是遗漏。
- **序列化参数成对且刻意**：写入 \`json.dumps(payload, ensure_ascii=False, sort_keys=True)\`（\`session.py:117\`）、读出 \`json.loads(row["payload"])\`（\`session.py:139\`）——中文可读、键序稳定、读写严格互逆。同样的载荷序列化结果一致，eval 和测试才能对事件做确定性断言。
- **复盘文档把"没做完的"单独成节**：\`week3-retro.md:13\` 的标题就是 *"当前仍是 mock 的部分"*，下面四条逐条认账（\`week3-retro.md:15-18\`）；\`week4-integration-plan.md:5\` 开篇第一句 *"Week 4 不再补概念"* 也是在落笔前先立边界。工程复盘的价值不在罗列成果，在于诚实记录边界——这跟 docstring 先写适用场景是同一个习惯。

## 本章小结

- 会话连续性 = 持久化 + 恢复：messages 存对话、events 存结论与待办（guardrail 判定、HITL 审批），\`thread_id\` 是串起一切的主键。
- 三张表各管一件事：sessions 是登记簿，messages 按写入顺序回放，events 结构化可检索；载荷以 JSON 文本存取，写入读出严格对称。
- "恢复"不是魔法方法：store 只提供 \`get_session\` / \`get_messages\` / \`get_events\` 三个读原语，"判断任务做到哪、哪些动作还 pending"是调用方拼装出来的。
- 复盘靠文档自证：已完成、仍是 mock、Week 4 优先级三段缺一不可；整合计划先立边界（不再补概念）再排入口优先级与验收标准。
- 这一处是"会话怎么被存下来、怎么被找回来"的事——后面 Week 4 只是把这种存取组织成 FastAPI \`/chat\` 和 IM 入口，**核心没变复杂**。

## 一句话边界

- 会话连续性 ≠ 保存聊天记录，是让任务能中断恢复的状态协议。
- Session ≠ Memory ≠ Trace ≠ Context，各有职责别混。
- 用 thread_id 串起消息和事件，resume 从断点继续。
- 端到端 demo 要能说清每个模块在链路里干什么。
- Week 3 的主线：把"能跑的 Agent"做成"可交付的 Agent"。

## 读完应该能用自己的话回答

1. 会话连续性解决什么问题？没有它会怎样？
2. Session、Memory、Trace、Context 各管什么？为什么不能混？
3. resume(thread_id) 是怎么从断点继续的？
4. Week 3 的端到端 demo 串了哪些模块？
5. Week 3 整体让 Agent 从"能跑"变成什么？

## 想深入

Session Lifecycle、长时任务连续性、仓库作系统记录等，见八股·08 工程化实践和八股·12 上下文工程。

## 交给 AI 的问题

\`\`\`text
我正在学 Agent 的会话连续性。请解释：1) 会话连续性解决什么问题；2) Session、Memory、Trace、Context 各管什么、为什么不能混；3) 怎么实现任务中断后恢复；4) 一个可交付的 Agent 工程要补哪些模块。用"一个故障诊断任务被中断、第二天接着处理"做例子，不要给完整代码。
\`\`\`

## 课后习题

> 做完再翻文末的答案与解析。错 2 题以上，回正文"这个概念是什么"和"代码走读"重读一次，不要直接背答案。

### 选择题（4 道）

**Q1. Session store 最少应该保存什么？**

A. 会话消息和关键事件
B. 只有 README
C. 只有模型名称
D. 只有图片

**Q2. 评测 case 的 thread_id 应该如何处理？**

A. 所有 case 共用一个
B. 每个 case 使用唯一 thread_id
C. 不需要 thread_id
D. 固定为 \`test_1\`

**Q3. Day 21 demo 应该串起什么？**

A. 只打印 hello world
B. 告警输入、guardrails、multi-agent、observability、session
C. 只跑数据库迁移
D. 只写简历

**Q4. Week 4 的重点是什么？**

A. 推翻前三周
B. 服务化、IM/API 接入、部署和演示
C. 只背概念
D. 不再评测

### 开放题（1 道）

**Q5. 复盘题**：用 150 字写出你进入 Week 4 前的项目口径：现在有什么、还缺什么、下一周要接什么真实能力。

---

> **先做完再翻答案**。直接翻答案 = 白做。

## 答案与解析

### 选择题

| 题目 | 答案 |
| --- | --- |
| Q1 | **A** |
| Q2 | **B** |
| Q3 | **B** |
| Q4 | **B** |

### 开放题要点

- 现在有离线可跑的工程雏形：Skill、MCP、Multi-agent、Eval、Observability、Guardrails、Session。
- 还缺真实外部系统、服务化接口、IM/API 接入和部署验证。
- Week 4 应把 mock 工具替换为真实或半真实接入，并形成可演示项目。
`,qf=`# 第三周术语表

| 术语 | 掌握度 | 解释 | 对应 Day |
| --- | --- | --- | --- |
| Harness | 必懂 | 模型之外的工程外壳，包含配置、提示词、工具、状态、评测、日志和安全边界 | Day 15 |
| Repo as System of Record | 必懂 | 仓库是系统真源；状态、配置、prompt、评测和文档应能从仓库重建 | Day 15 |
| Skill | 必懂 | 带触发条件、流程、约束和交付格式的可复用能力包 | Day 16 |
| Tool | 必懂 | 可被 Agent 调用的单步函数或外部能力 | Day 16 |
| MCP | 必懂 | Model Context Protocol，用于统一发现和调用外部工具上下文 | Day 17 |
| late-binding | 必懂 | Python 闭包在循环中引用变量，可能导致所有 wrapper 都指向最后一个值 | Day 17 |
| Router | 必懂 | 根据输入选择 worker、工具或流程分支的节点 | Day 18 |
| Worker | 必懂 | 在 Multi-agent 中承担单一职责的分析角色 | Day 18 |
| Reviewer | 必懂 | 汇总证据、判断置信度、指出缺口的复核角色 | Day 18 |
| Golden Dataset | 必懂 | 已知答案的评测数据集，用来客观比较 Agent 输出 | Day 19 |
| Judge | 必懂 | 对 Agent 输出评分的评测器，可分 exact、rule、LLM judge | Day 19 |
| Baseline | 必懂 | 优化前的基线结果，用于对比后续改动是否有效 | Day 19 |
| Observability | 必懂 | 对 Agent 运行过程的日志、指标、trace 和成本记录 | Day 20 |
| HITL | 必懂 | Human-in-the-loop，在高风险动作前暂停并等待人工确认 | Day 20 |
| Guardrails | 必懂 | 安全护栏，用代码和规则拦截越权、敏感、危险或无关请求 | Day 20 |
| Session Store | 必懂 | 保存会话消息、事件和状态的持久化层 | Day 21 |
| thread_id | 必懂 | 区分一次会话或一次评测 case 的唯一标识，避免状态污染 | Day 21 |

`,jf='# 第三周故障排查\n\n## `ModuleNotFoundError`：找不到模块\n\n`ModuleNotFoundError` 的本质只有一句话：Python 在导入路径（`sys.path`）上没有找到这个名字。概念上拆成两点排查：\n\n1. **包结构对不对**：`import agent_app.xxx` 的前提是 `agent_app/` 是一个包（含 `__init__.py`），且 `xxx` 是包内真实存在的模块名。先确认名字没有拼错、文件确实在包里。\n2. **包的父目录在不在 `sys.path` 上**：Python 只从 `sys.path` 列出的目录里找包/模块。当前工作目录并不自动等于导入路径——所以标准做法是显式把项目根目录加进 `sys.path`（`PYTHONPATH=.`、`pip install -e .` 干的都是这件事），而不是依赖"碰巧在哪个目录下运行"。\n\n## `mcp_adapter` 注册后所有工具都调用同一个名字\n\n这是 Python late-binding 问题。不要在循环里直接写：\n\n```python\nfor tool in tools:\n    def handler(args):\n        return client.call_tool(tool.name, args)\n```\n\n应使用工厂函数捕获：\n\n```python\ndef make_handler(name):\n    def handler(args):\n        return client.call_tool(name, args)\n    return handler\n```\n\n正文走读里的 `make_mcp_tool_handler()`（见 day17 正文 `agent_app/mcp_adapter.py:45-57`）正是按这个方式实现。\n\n## 评测 baseline 结果全失败\n\n优先检查三件事：\n\n1. `dataset.jsonl` 是否是合法 JSONL，每行一个 JSON。\n2. Agent 输出中是否包含 `expected_category` 或 `evidence_keywords`。\n3. 相对路径依赖当前工作目录：`load_dataset("eval/dataset.jsonl")` 这类相对路径从进程启动时的工作目录开始解析——工作目录不同，同一个路径指向的文件就不同。排查"找不到数据集"时，先分清代码里写的是相对路径还是绝对路径，再核对调用方的工作目录与路径基准是否一致，不要一上来就怀疑数据文件本身。\n\n## Guardrails 拦截了正常问题\n\n检查 `GuardrailDecision.reason`。如果是 `out_of_scope`，说明问题缺少诊断关键词；如果是 `sensitive_data`，说明输入含疑似 token、手机号、身份证或密钥。\n\n学习阶段不要为了通过测试放宽敏感规则。正确做法是先脱敏，再进入 Agent。\n\n## Session 读不到历史\n\n确认使用同一个 SQLite 路径和同一个 `thread_id`。评测 case 不要共用 thread_id，正确格式类似：\n\n```python\nthread_id = f"eval-{case_id}-{uuid4().hex[:8]}"\n```\n',Hf=`# 第三周周末复盘

> **何时做**：Day 21 当晚或周末，第三周最后一件事。
> **目的**：把 Day 15-21 的七个模块（Harness / Skill / MCP / Multi-agent / Eval / Observability·HITL·护栏 / Session）真正连起来，而不只是"读过七篇"。完成本表是 Week 3 的硬性退出标准。
> **预计耗时**：60-90 分钟（含整合自测与整合推演）。

## 概念掌握清单（10 项）

> 本周没有需要运行或拷贝的代码，正文就是完整阅读材料。逐项自检：能用"自己的话 + 一个设计决定"说清，才算勾选。

- [ ] **Harness 工程化**：能一句话说清这个诊断项目的边界（读什么、不运行什么）、模块如何协作，并解释"仓库即系统真源"——代码、Prompt、配置、评测、日志为何都要能从仓库重建。
- [ ] **架构表达**：能画出一张纯文字架构图，说明 Loop / Tools / Memory / Workflow / Sub-agent 的关系与数据流向，并说清架构图为什么用 text 而不用绘图工具（可进 git diff、可 grep、可被 Agent 读）。
- [ ] **Skill 设计**：能为"诊断复盘"这类专业工作流写一个 Skill 的完整骨架：触发条件（trigger examples）、流程步骤（命令句 + 不许走捷径）、边界（允许/禁止动作）、输出契约（root cause / category / confidence / next steps / human approval requirement），并说明流程最后一步为何必须与输出契约咬合。
- [ ] **MCP 工具设计**：能设计一个诊断工具的标准接口：name、description、input schema、output schema，并说清 Agent 先"发现"（list_tools）再"调用"（call_tool）的两段式流程。
- [ ] **late-binding 机制**：能解释"工具由服务器在运行时动态暴露（late-binding）"与"客户端启动时静态注册"的区别，以及后者在工具增删、接口变更时的维护代价。
- [ ] **Multi-agent 分工**：能为一类诊断任务设计 Router + Worker + Reviewer 的分工——Router 的判据（任务可分解、上下文需隔离、角色边界清楚）、Worker 的 evidence 交付格式、Reviewer 给根因与置信度的规则；并说出一种"不该拆成多 Agent"的任务。
- [ ] **评测体系**：能设计一条 golden case（alert / expected_category / expected_root_cause / evidence_keywords / allowed_root_causes），说明 20 条 case 应如何按难度与类型（difficulty / case_type）铺开，并说清 baseline 与 trace 各回答什么问题、评分器从哪三个维度打分、为什么打分不调 LLM。
- [ ] **可观测与护栏**：能列出一次诊断必须记录的事件类型（调用、错误、成本、人工审批）与 trace_id 的贯穿方式；能把 restart / rollback / scale / delete / clean_disk 等高危动作设计成"配置名单 + 行为指令"双重拦截，并说清 HITL 的触发时机。
- [ ] **会话连续性**：能说明"任务中断后恢复"至少需要保存什么（输入、输出、trace_id、事件、上下文），以及一条端到端链路应覆盖哪些环节。
- [ ] **Week 4 接入计划**：能写一份 Week 4 接入草案：接入入口（IM / API）、API contract（请求/响应结构）、真实 adapter 选型、安全 checklist（密钥、限流、HITL、审计）。

任何一项说不清，回到对应天的正文重读；不要带着空项进入 Week 4。

## 整合自测（30 分钟）

打开 [\`../自测题/第三周-整合自测.md\`](第三周-整合自测.md)：完成综合题与整合推演，作为整周的最后一次自我检验。先做再对，不要翻着正文抄。

## 整合推演题（任选一个告警输入，完整推演一遍）

> 本题为纯推演：基于正文学到的机制，把一条告警从头到尾"走"一遍，并给出验证设计。逐条写下来，能写清才算真的懂。

\`\`\`text
【P1】trade-order 下单接口 5xx 从 1% 升到 18%，CPU 96%，近 10 分钟出现大量 timeout。
\`\`\`

逐条推演并写清依据：

1. **Router**：这条告警应该路由给哪些 worker？依据是什么（任务可分解性、上下文隔离、角色边界）？哪种拆分是不必要的？
2. **Worker evidence**：每个 worker 应产出哪些 evidence？怎么判断 evidence 合格（有指标出处、可复核、不含未经验证的推断）？
3. **Reviewer**：综合 evidence 后最可能的根因假设是什么？置信度如何定（证据充分度、有无互斥证据）？证据不足时 Reviewer 应输出什么、不该做什么？
4. **Guardrails**：本次诊断中哪些动作会被高危名单拦截？若 Agent 想直接执行重启/回滚，系统应如何响应？
5. **Skill 触发**：diagnosis-reviewer 的触发条件是什么？其输出契约（五个字段）如何被校验？
6. **MCP tool**：本次诊断会调用哪些工具？各自的输入、输出长什么样？Agent 如何发现并调用它们？
7. **Eval**：若这条告警被收进评测集，评分器从哪三个维度打分？满足什么才算过？若失败，bad case 会如何归因？
8. **Observability**：本次诊断应记录哪些事件？trace_id 如何贯穿 Router → Worker → Reviewer 全链路？
9. **Session**：要"读回本次输入和输出"，需要保存哪些字段？一次诊断如何被恢复成可复查的记录？

**验证设计（关键）**：假设你手头有一个可运行的实现，设计最小验证确认以上推演成立，每条给可观察判据：

- 怎么确认 Router 选对了 worker？（看到什么路由记录算通过）
- 怎么确认 guardrail 真的拦住了高危动作？（看到什么事件/输出算通过）
- 怎么确认 session 读回的内容与原始输入一致？（比较哪两个字段算通过）

## 100 分 Rubric

| 模块 | 分值 |
| --- | ---: |
| 工程结构清晰度 | 15 |
| Skill 设计质量与运行契约 | 10 |
| MCP 工具可调用性 | 10 |
| Multi-agent 分工合理性 | 15 |
| Eval 数据与 baseline | 20 |
| Observability / Guardrails / HITL | 15 |
| Session 与端到端 demo | 10 |
| 复盘质量 | 5 |

评分解释（自评口径：能讲清 + 能设计，而不是跑通）：

- 90+：优秀，可以顺利进入 Week 4
- 75-89：合格，可以进入 Week 4，但需补 bad case 归因推演
- 60-74：基本理解，但需补齐评测体系与端到端链路的推演
- <60：建议回到 Week 2/3 关键模块重读

## 复盘模板

| 问题 | 我的答案 |
| --- | --- |
| 第三周真正新增了什么工程能力？ | |
| 哪个模块最像"玩具"，Week 4 需要替换成真实系统？ | |
| 评测 baseline 的意义是什么？若通过率只有 40%，你会从哪三个维度归因、按什么优先级修？ | |
| 哪些动作必须 HITL？ | |
| 如果面试官问"你的 Agent 怎么评测"，我怎么回答？ | |

## 进入 Week 4 的口径

第三周完成后，你应该能说：

> 我已经能讲清一个智能诊断 Agent 工程雏形的完整骨架：清晰目录与模块边界、诊断 Skill 的触发与输出契约、MCP 工具适配、多 Agent 分工、Golden Dataset 评测、结构化日志与安全护栏、会话保存。Week 4 的重点不是再补概念，而是把这条链路服务化、接入 IM 或 API，并做可演示的项目交付。
`,Uf=`# 第三周整合自测

## 综合题

1. 用一张文字流程图说明：告警输入如何经过 Guardrails、diagnosis-reviewer Skill、MCP tools、Router、Workers、Reviewer、Eval、Observability 和 Session。

2. 解释 Tool、Skill、MCP Tool 三者的区别，并各举一个智能诊断场景例子。

3. 给出一个 Multi-agent 不适用的任务，并说明为什么。

4. 设计一个评测 case，要求含：
   - \`id\`
   - \`alert\`
   - \`expected_category\`
   - \`expected_root_cause\`
   - \`evidence_keywords\`
   - \`allowed_root_causes\`

5. 说明一次 bad case 应该如何复盘：从日志、工具结果、模型输出、评测规则四个角度各看什么。

## 整合设计推演

不运行任何代码、不依赖任何代码文件，用设计与推演的方式把 Week 3 各模块串成一份完整答案（直接在答题区作答），至少覆盖：

1. **Eval 设计与 baseline 推演**：设计 20 条评测 case，每条含 \`id\`、\`alert\`、\`expected_category\`、\`expected_root_cause\`、\`evidence_keywords\`、\`allowed_root_causes\`，并标注 \`difficulty\` 与 \`case_type\`；逐条推演预期表现，预估 baseline 通过率，指出哪些类别会偏低并说明依据。
2. **Bad case 设计**：从 20 条中选出你认为最可能失败的 3 条，说明它们会在哪一环节（Guardrails / MCP 工具调用 / Worker 推理 / Reviewer 复审 / 评测规则）出错、为什么，以及如何从日志、工具结果、模型输出、评测规则四个角度定位。
3. **trace_id 与 session_id 设计**：设计两者的生成规则与贯穿路径（从告警入口到每次工具调用、评测与事件记录），给出它们在日志中的样子，说明如何靠它们恢复一次完整调用链。
4. **Guardrail 设计**：设计至少两类 guardrail 触发规则及触发记录字段，说明高危动作如何进入人工审批（HITL）。
5. **MCP tool 调用设计**：为 \`query_metric\` 和 \`search_sop\` 各设计一次调用，给出 tool input / output 样例，说明 Worker 何时、为何调用它们。
6. **Skill 输出契约**：为 diagnosis-reviewer Skill 设计输出契约（字段、类型、约束），并说明它与 MCP tool 在流程中的分工。
7. **Observability 事件推演**：推演一次完整诊断流程会触发哪些 observability event（何时、由谁、记录什么），以及它们如何支撑 bad case 复盘。
8. **Week 4 接入草案**：论证 Week 4 最应该真实接入的一个外部系统，并写出接入草案（接入什么、如何接入、验证标准、风险）。

## 评分 Rubric（100 分）

| 模块 | 分值 | 合格要求 |
| --- | ---: | --- |
| 工程结构清晰度 | 15 | 架构图与边界说明能解释各模块职责与数据流 |
| Skill 设计质量 | 10 | 能说明触发原因、允许/禁止动作，并给出输出契约 |
| MCP 工具可调用性 | 10 | 至少设计出 \`query_metric\` / \`search_sop\` 的 tool input/output |
| Multi-agent 分工合理性 | 15 | Router、worker、reviewer 边界清楚，证据来源可追溯 |
| Eval 数据与 baseline | 20 | 20 条 case 含 \`difficulty\` / \`case_type\`，baseline 推演含 per-category 差异与依据 |
| Observability / Guardrails / HITL | 15 | 设计含 trace_id、guardrail 事件，高危动作会进入审批 |
| Session 设计 | 10 | 设计了 session_id 的生成与贯穿，消息和事件可恢复 |
| 复盘质量 | 5 | 至少推演 3 个 bad case，并写 Week 4 接入草案 |

通过标准：

- 90+：优秀，可以顺利进入 Week 4
- 75-89：合格，可以进入 Week 4，但需补 bad case 复盘
- 60-74：基本理解，但需补齐评测设计和整合推演
- <60：建议回到 Week 2/3 关键模块重做
`,Gf=`# pi-agent-core 架构导读

全库只有一个循环，其余全是组合。

这本书从代码出发，讲清楚 \`@earendil-works/pi-agent-core\` 是怎么搭起来的：它承诺什么、拒绝什么、支点在哪里。全书对应 pi 仓库 main 分支的 commit \`0df5a69e\`（v0.83.0，2026-08-05）。代码引用写成 \`文件:行号\`，**每一个引用都就地附上逐字引文**——想核对任何一处论断，当场就能验，不用去翻源码文件。行号会随代码演进漂移，以文件当前内容为准。

> 这本书的前身是同一作者的两份"代码解读"（按文件组织的参考手册版、函数级版）。那一版覆盖更广但代码为"结构还原"。这一版换了一种写法：代码一律逐字引用，保留原注释，解读围着源码说，而不是替换源码说。读法变了，可信度的地基也变了。

## 读者假设

你会读 TypeScript，知道 LLM API 的基本概念（messages、tool calls、streaming），不需要事先了解 pi 仓库。

## 这本书的一句话

**全库只有一份循环；每加一种能力，都是往它外面再包一层，而不是把它改大。**

这句话贯穿全书。你会反复看到同一个 \`runAgentLoop\` 被不同层次的消费者调用；会看到工具执行被拆成三段，是为了让持久化层在段与段之间插桩，而不是因为循环本身需要；会看到并发输入被"单飞 + 双队列"结构性消灭，而不是靠锁。每一章末尾都会回指这句话，检查"这一处是组合，还是循环在变复杂"。

## 组织方式

**整体 → 局部 → 横切。**

- **第一部分 · 整体**（第 0、1 章）：建立对整个系统的正确认知，不碰实现细节。读完这两章，你应该能不看代码就把整个系统讲清楚。
- **第二部分 · 局部**（第 2–10 章）：逐个部件展开，顺序是依赖顺序--每章只依赖它前面的章。
  - 第 2 章 · 工具执行：三段管线与并行纪律
  - 第 3 章 · 有状态 Agent：单飞与双队列
  - 第 4 章 · 会话与存储：Entry / Record 双轨
  - 第 5 章 · 环境抽象：FileSystem / Shell
  - 第 6 章 · 上下文压缩：自包含 checkpoint
  - 第 7 章 · 编辑算法：精确到模糊的两级匹配
  - 第 8 章 · Harness 契约：状态机与错误体系
  - 第 9 章 · 持久化执行与崩溃恢复
  - 第 10 章 · 技能 / 模板 / 消息投影
- **第三部分 · 横切**（附录）：文件地图、术语表，以及那些不属于任何单一部件的澄清。

### 与八股模块的映射

这本书每一章都对应「AI Agent 面试八股」知识体系里的一个核心模块：代码精讲 + 落地讲解。精讲是 pi 的逐字源码，落地是这一章回答八股里的哪些问题。

| 本书章节 | 八股模块 | 落地主题 |
|---|---|---|
| 第 0 章 它是什么 | 01 基础概念 / 02 核心框架 | Agent 定义、组成、ReAct 循环；与 Chain/ChatBot 的区别 |
| 第 1 章 一次 prompt 的全程 | 02 核心框架（ReAct） | ReAct 循环在真实代码里的样子：模型→工具→模型往复 |
| 第 2 章 工具执行三段管线 | 04 工具调用 | Function Calling 工程化：参数校验、并行执行、工具路由 |
| 第 3 章 有状态 Agent | 05 记忆系统（短期） | 对话状态、并发控制：单飞 + 双队列 |
| 第 4 章 会话与存储 | 05 记忆系统（长期）/ 12 上下文工程 | 树形历史、持久化会话、全局单调序 |
| 第 5 章 环境抽象 | 08 工程化实践 | 后端无关、错误码设计、跨平台 |
| 第 6 章 上下文压缩 | 12 上下文工程 | 压缩策略、KV 缓存、窗口溢出 |
| 第 7 章 编辑算法 | 13 Coding-Agent | 工具设计：精确到模糊的两级匹配 |
| 第 8 章 Harness 契约 | 18 Harness 工程 | 契约设计、错误体系（Result + TaggedError） |
| 第 9 章 持久化与崩溃恢复 | 18 Harness 工程 | 耐久性、恢复归约、mutation line |
| 第 10 章 技能 / 模板 / 投影 | 17 Skill / 12 上下文工程 | 技能发现、模型可发现性、消息投影 |

每章末尾的「落地：八股视角」会直接引用对应八股模块的面试题，用本章的代码作答——读完一章，你就多一块能对着源码讲清楚的八股。

## 体例

正文只讲从代码里能读出来的东西。代码引用统一写成 \`文件:行号\`，路径相对于 \`packages/agent/\`。**每一个 \`文件:行号\` 都就地附上对应的逐字引文**——这是全书的第一纪律：论断必须能被核对，代码必须是源码原样（连注释带空格），不是"我理解后重写的样子"。确实需要省略的段落，会在代码块里用 \`// ...（折叠：XXX，见下文）\` 标注，并说清折叠了什么——把"折叠了什么"本身也变成可信度声明。

正文之外，书里有四种反复出现的结构：

- **插叙**（\`###\` 级，章内）：补一块你可能缺、但与 pi 无关的背景知识——AbortController 模式、LLM 消息结构。跳读不影响主线。
- **岔路**（\`###\` 级，章内）：主干里折叠掉的自包含旁支，在这里展开。它是主线的一部分，只是位置被推迟。岔路容得下超出本章平均难度的内容——正因为它可跳过，密度超标的段落都在岔路。啃不动可以先跳过，主线不依赖它。
- **为什么不去**（章末）：用仓库里的设计文档或源码注释回答"这里为什么不写得更简单一点"。
- **回指**（章末一句）：这一章的哪一处是"组合"，哪一处是"循环本体"。

## 范围之外

- \`packages/ai\` 的内部实现（provider 目录、模型元数据）——本书只把它当作"实现了 \`StreamFn\` 契约的下游"。
- \`packages/tui\`、\`packages/coding-agent\`——它们是本库的消费者，不是本书的主角（必要时作为真实用例引用）。
- \`AgentHarness\` 的**行为**：在 \`0df5a69e\` 这个基线上，harness 是"类型完整、行为未完成"的契约桩（\`docs/harness-v2.md:2887\` 原文："type-complete but not behavior-complete"）。本书讲它的契约（它能被怎样调用、拒绝什么、承诺什么），和它的设计目标（\`harness-v2.md\` 规定的持久化语义），但不会假装它的执行方法能跑。

## 两条路线（出发前必须分清）

pi 是一个正在迁移的 monorepo。读任何一页之前，先记住这张图：

\`\`\`
路线 A（现在能跑）              路线 B（设计目标，当前是桩）
src/agent.ts（有状态 Agent）     src/harness/agent-harness.ts（契约+桩）
  └─ agent-loop.ts（循环）          └─ docs/harness-v2.md 规定的完整语义
       └─ StreamFn（LLM 调用）           └─ session/ + compaction/（已落地部分）
\`\`\`

路线 A 是你现在能 \`new Agent()\` 跑起来的东西。路线 B 是 harness-v2 设计文档描述的、可崩溃恢复的持久化 harness——它的契约文件已经写满，但执行方法全部 \`reject(HarnessNotImplemented)\`（\`agent-harness.ts:360\`）。这是迁移状态，不是 bug。

两条路线共享同一个循环原语 \`runAgentLoop\`。设计文档 \`harness-v2.md:1755\`（§14）写明了这一点：将来 harness 落地时，\`agent-loop.ts\` 会被拆成 building blocks，harness 复用同一批块、在块之间插入持久化写，而 \`runAgentLoop\` 的现有签名和行为不变。**这就是全书那句话的出处：循环只有一份，harness 是在它之上的组合，不是另一套循环。**

准备好了，就从第 0 章进去。

---

---

## 系列文件

本书按章节拆分为独立文件，可整本连读，也可单章取用。每章自带全部逐字引文，行号以 pi 仓库 commit \`0df5a69e\` 为准。

| 文件 | 章节 |
|---|---|
| [00-第0章-它是什么.md](00-第0章-它是什么.md) | 第 0 章 · 它是什么：一个循环，和它周围的世界（含全书代码索引「代码大观」） |
| [01-第1章-一次prompt的全程.md](01-第1章-一次prompt的全程.md) | 第 1 章 · 一次 prompt 的全程：从 prompt() 到 agent_end |
| [02-第2章-工具执行.md](02-第2章-工具执行.md) | 第 2 章 · 工具执行：三段管线与并行纪律 |
| [03-第3章-有状态Agent.md](03-第3章-有状态Agent.md) | 第 3 章 · 有状态 Agent：单飞与双队列 |
| [04-第4章-会话与存储.md](04-第4章-会话与存储.md) | 第 4 章 · 会话与存储：Entry / Record 双轨 |
| [05-第5章-环境抽象.md](05-第5章-环境抽象.md) | 第 5 章 · 环境抽象：FileSystem / Shell |
| [06-第6章-上下文压缩.md](06-第6章-上下文压缩.md) | 第 6 章 · 上下文压缩：自包含 checkpoint |
| [07-第7章-编辑算法.md](07-第7章-编辑算法.md) | 第 7 章 · 编辑算法：精确到模糊的两级匹配 |
| [08-第8章-Harness契约.md](08-第8章-Harness契约.md) | 第 8 章 · Harness 契约：状态机与错误体系 |
| [09-第9章-持久化执行与崩溃恢复.md](09-第9章-持久化执行与崩溃恢复.md) | 第 9 章 · 持久化执行与崩溃恢复 |
| [10-第10章-技能模板消息投影.md](10-第10章-技能模板消息投影.md) | 第 10 章 · 技能 / 模板 / 消息投影 |
| [附录-文件地图术语表与阅读路线.md](附录-文件地图术语表与阅读路线.md) | 附录 · 文件地图、术语表与阅读路线 |

**怎么读：** 第 0、1 章连着读（建立整体心智模型）；第 2–10 章按依赖顺序（每章只依赖它前面的章）；附录按需查阅。正文里的「第 N 章」即本表中的文件。遇到不认识的函数名，回第 0 章末尾「代码大观」查函数索引。
`,$f='# 第 0 章 · 它是什么：一个循环，和它周围的世界\n\n> **模块定位**（八股 01 基础概念 + 02 核心框架）：这一章回答八股里的两个入门问题——「Agent 到底是什么、由什么组成」和「ReAct 循环在工程里长什么样」。八股给你定义和类比，这一章给你 pi 的代码：定义里的每一块，在 `pi-agent-core` 里都有对应的文件。\n\n### 从一个场景开始\n\n你在写一个应用，想在里面嵌入一个能"自己干活"的 AI agent：你给它一句话，它调模型，模型说要调工具，它执行工具，把结果喂回模型，如此往复，直到模型说"完了"。中间每一步你都想实时看到，文字是一个字一个字流出来的，工具是一个一个执行的，因为你要把这些渲染到 UI 上。\n\n这就是 `pi-agent-core` 要解决的全部问题。它的 README 用一句话概括：\n\n```text\n# packages/agent/README.md:2\nStateful agent with tool execution and event streaming. Built on `@earendil-works/pi-ai`.\n```\n\n拆开看，它给你三样东西：\n\n1. **一个 agent 循环**（`src/agent-loop.ts`）：prompt 进来，事件流出去，中间是"调模型 → 执行工具 → 再调模型"的往复。\n2. **一层状态**（`src/agent.ts`）：`Agent` 类替你持有对话历史、当前正在流的消息、正在执行的工具，让你在任意时刻都能回答"它现在到哪一步了"。\n3. **一套装备**（`src/harness/`）：持久化会话、上下文压缩、内置的文件/shell 工具、skill 加载——把"能跑的循环"变成"能上线 coding agent 的循环"。\n\n三层各管一段，而串起它们的那根线，就是全书那句话：**循环只有一份，状态和装备都是组合上去的。**\n\n### 它拒绝做什么\n\n理解一个库，不能只看它能做什么，还要看它拒绝做什么。`pi-agent-core` 有四条明确的拒绝，每一条都能从代码里核实。\n\n**拒绝一：不认识任何模型厂商。** 全仓库搜不到一个 provider 的名字。循环拿到的模型接口是一个函数类型：\n\n```typescript\n// src/types.ts:28\nexport type StreamFn = (\n	model: Model<Api>,\n	context: Context,\n	options?: SimpleStreamOptions,\n) => AssistantMessageEventStream | Promise<AssistantMessageEventStream>;\n```\n\n它只约定形状：给我 `Model` 和 `Context`，还我一个事件流。谁来提供这个函数？隔壁的 `@earendil-works/pi-ai`——那是另一个包，有自己的 provider 目录和模型元数据。本包对它的唯一依赖就是这几个类型。注意 `StreamFn` 上方的契约注释（`src/types.ts:22`），它把"失败怎么处理"也写死了：\n\n```typescript\n// src/types.ts:22\n * Contract:\n * - Must not throw or return a rejected promise for request/model/runtime failures.\n * - Must return an AssistantMessageEventStream.\n * - Failures must be encoded in the returned stream via protocol events and a\n *   final AssistantMessage with stopReason "error" or "aborted" and errorMessage.\n```\n\n失败不抛异常、不 reject，而是编码进流里、用一条带 `stopReason: "error"` 的消息收尾。这条契约是第 1 章里"循环永远收到闭合事件流"的根——它把"出错"从一个跨边界的异常，变成了一个边界内的值。\n\n**拒绝二：不碰 UI。** 包里没有一行渲染代码。它对外沟通的方式只有一种：发事件。全部事件就是一个可辨识联合，十种：\n\n```typescript\n// src/types.ts:422\nexport type AgentEvent =\n	// Agent lifecycle\n	| { type: "agent_start" }\n	| { type: "agent_end"; messages: AgentMessage[] }\n	// Turn lifecycle - a turn is one assistant response + any tool calls/results\n	| { type: "turn_start" }\n	| { type: "turn_end"; message: AgentMessage; toolResults: ToolResultMessage[] }\n	// Message lifecycle - emitted for user, assistant, and toolResult messages\n	| { type: "message_start"; message: AgentMessage }\n	// Only emitted for assistant messages during streaming\n	| { type: "message_update"; message: AgentMessage; assistantMessageEvent: AssistantMessageEvent }\n	| { type: "message_end"; message: AgentMessage }\n	// Tool execution lifecycle\n	| { type: "tool_execution_start"; toolCallId: string; toolName: string; args: any }\n	| { type: "tool_execution_update"; toolCallId: string; toolName: string; args: any; partialResult: any }\n	| { type: "tool_execution_end"; toolCallId: string; toolName: string; result: any; isError: boolean };\n```\n\n文字流、工具进度、生命周期，全在这十种里。你想画成终端、网页还是日志文件，是你的事。注意这十种事件分属四个层级（run / turn / message / tool），第 1 章会跟着一次真实调用把它们逐个点亮。\n\n**拒绝三：核心不做持久化。** `Agent` 类的对话历史就是一个内存数组：\n\n```typescript\n// src/agent.ts:71（createMutableAgentState 内）\nlet tools = initialState?.tools?.slice() ?? [];\nlet messages = initialState?.messages?.slice() ?? [];\n```\n\n进程退出，一切归零。持久化存在，但它在 harness 层（第 4 章），而且是"追加条目到树"的模型——核心循环对此一无所知。这是"循环只有一份"的另一面：循环不背持久化的复杂度，持久化是挂在循环外的组合层。\n\n**拒绝四：核心不碰运行时 API。** `src/` 根目录里没有任何 `node:fs`、`node:child_process`。全部文件和 shell 访问都被逼到一个接口后面（`ExecutionEnv`，第 5 章细讲），唯一的 Node 实现被隔离在 `harness/env/nodejs.ts`，通过单独的入口导出：\n\n```json\n// packages/agent/package.json - exports\n{\n  ".":              { "types": "./dist/index.d.ts", "import": "./dist/index.js" },\n  "./node":         { "types": "./dist/node.d.ts", "import": "./dist/node.js" },\n  "./session/testing": { "types": "./dist/harness/session/testing/index.d.ts", "import": "./dist/harness/session/testing/index.js" }\n}\n```\n\n主入口 `.` 不带任何 Node 依赖；要用文件和 shell 工具，得显式从 `./node` 进。所以这个包的核心可以跑在浏览器里——`src/proxy.ts` 就是为此准备的。组合层（Node 实现）和循环层（纯接口）被入口分开了。\n\n### 两层而不是一层：循环只有一份\n\n这个包最容易产生的误解是：`Agent` 类和 `AgentHarness` 类是什么关系？继承？包装？\n\n都不是。看依赖方向：\n\n```\nagent-loop.ts  (runAgentLoop — 无状态循环，793 行)\n    ▲\n    │\nagent.ts  (Agent 类, 589 行)        ← 路线 A，现在能跑\n```\n\n`Agent` 直接调用 `runAgentLoop`，证据在它的 `runPromptMessages` 里：\n\n```typescript\n// src/agent.ts:405（Agent.runPromptMessages）\nprivate async runPromptMessages(\n	messages: AgentMessage[],\n	options: { skipInitialSteeringPoll?: boolean } = {},\n): Promise<void> {\n	await this.runWithLifecycle(async (signal) => {\n		await runAgentLoop(\n			messages,\n			this.createContextSnapshot(),\n			this.createLoopConfig(options),\n			(event) => this.processEvents(event),\n			signal,\n			this.streamFunction,\n		);\n	});\n}\n```\n\n那 `AgentHarness` 呢？在 `0df5a69e` 这个基线上，**它还不调用 `runAgentLoop`**——它的全部执行方法都是桩：\n\n```typescript\n// src/harness/agent-harness.ts:360\nprivate unavailable<T>(operation: string): Promise<T> {\n	return Promise.reject(this.closed ? new HarnessClosed() : new HarnessNotImplemented(operation));\n}\n```\n\n`prompt`、`steer`、`resume`、`abort`……每一个都走 `unavailable()`，reject 一个 `HarnessNotImplemented`（`agent-harness.ts:371` 起逐个可见）。设计文档把这件事写得很坦白：\n\n```text\n// docs/harness-v2.md:2887（节选：F0 工单一句见第 8 章）\n- `AgentHarness` is type-complete but not behavior-complete. Execution-bearing methods\n  reject with `HarnessNotImplemented`; some read/configuration/watch/manual-drive\n  methods still expose local scaffold behavior. […]\n```\n\n所以此时此刻，`Agent` 是 `runAgentLoop` 唯一的消费者。但 `AgentHarness` 不是 `Agent` 的子类，也不是它的包装：按设计（`harness-v2.md:1755`，§14），它将来是**同一循环原语之上的另一层组合**，只是组合进去的东西多得多——持久化、压缩、hook、phase 状态机。而 `runAgentLoop` 本体，届时会被拆成 building blocks，harness 复用同一批块、在块之间插入持久化写，签名和行为不变。\n\n为什么要并存两层？因为它们的"重"不一样。嵌入一个聊天面板，用 `Agent` 就够；造一个 coding agent，用 `AgentHarness`。循环本体只有一份——这是整个包结构立得住的根：**新能力都是组合出来的，循环从不为此变大。**\n\n> 这是全书那句话第一次落地：`Agent` 和 `AgentHarness` 不是继承链，而是同一循环原语上的两个组合层。第 1 章会跟着 `Agent` 把循环走一遍；第 8、9 章再讲 `AgentHarness` 的契约与设计目标。\n\n### 一章小结\n\n- `pi-agent-core` 是一个 agent 循环库：循环、状态、装备三层。\n- 它不认识模型厂商、不碰 UI、核心不做持久化、核心不碰运行时 API——四条拒绝都能从代码核实。\n- `Agent` 是 `runAgentLoop` 现在的消费者；`AgentHarness` 是它将来按同一原语组合的消费者（当前是契约桩）。循环只有一份。\n\n下一章不再谈定位，跟着一次真实的 `prompt()` 调用，把循环从头到尾走一遍。\n\n### 为什么不去\n\n> **为什么不直接依赖 pi-ai？** `StreamFn` 上方的契约注释（`src/types.ts:22`）把动机写在了脸上：模型目录是会膨胀的（每家厂商、每个模型、每项定价），而循环的契约只需要一个函数形状——并且这个函数"不得抛异常、不得 reject，失败编码进流"。依赖一个类型，而不是依赖一个目录，循环就把自己和"模型厂商会怎么变"彻底解耦了。pi-ai 装多少 provider，是 pi-ai 的事；本包只认 `StreamFn` 这个形状。\n\n> **为什么 `AgentHarness` 现在宁可全桩，也不先跑一个内存版？** 因为 harness 的全部价值在于"持久化 + 崩溃恢复"——一个不落盘的 harness 和 `Agent` 没有本质区别，写了也只是重复。设计文档选择先把契约写满（type-complete），让消费者能对着类型编程，再把行为逐个落地（F0 工单，`harness-v2.md:2887`）。这是"架构先行、实现跟进"的工程节奏，不是偷懒。\n\n> **回指**：四条拒绝都是"循环本体不背的复杂度"——厂商、UI、持久化、运行时，全被推到组合层或下游。循环只留一件事：往复。\n\n### 落地：八股视角\n\n> **Q：Agent 和 Chain 的区别是什么？**\n>\n> **A：** Chain 是编译期定死的管线，第 1 步的输出喂给第 2 步，顺序在代码里写死；Agent 是运行时决策，模型每一轮自己决定下一步调什么工具，路径不在代码里。pi 的 `runLoop` 就是后者的实体：模型输出 `toolCall` 就执行工具、把结果喂回去，模型不输出就停。**决策权在模型，循环只提供往复。**\n\n> **Q：ReAct 循环在真实代码里长什么样？**\n>\n> **A：** ReAct = Reason + Act 交替：模型推理（reasoning）→ 选动作（工具调用）→ 观察结果（toolResult 喂回）→ 再推理。pi 的内层 `while` 转一圈就是这个交替：`streamAssistantResponse`（推理）→ `executeToolCalls`（行动）→ toolResult 消息进上下文（观察）。八股里的 ReAct 伪代码，在 pi 里就是 `agent-loop.ts:155` 那个循环。\n\n> **Q：Agent 的「组成」对应 pi 的哪些文件？**\n>\n> **A：** 八股说 Agent 由模型、工具、记忆、规划组成。在 pi 里：模型 = `StreamFn` 类型（`types.ts:28`），工具 = `AgentTool` 数组（循环从 `context.tools` 里查），记忆 = 消息数组（第 3、4 章的 `Agent` 状态与会话树），规划 = 循环本身（`runLoop` 的往复）。**概念和代码一一对应，这是读源码的价值：八股不再是一堆名词。**\n\n### 代码大观：先认名字，再进细节\n\n这一节是全书所有代码的索引。不用背——它的用途是：当你读后面某章看到一个函数名，能回这里查"它是谁、谁在调它、解决什么问题"。每一行都标注了细讲章节，正文里会有逐字引文。\n\n**第一层：入口与状态（`src/agent.ts`，第 1、3 章细讲）**\n\n| 函数 | 行号 | 它是谁、谁调用它 |\n|---|---|---|\n| `prompt()` | `:346` | 对外唯一入口。宿主（UI、脚本）调用它发起一次对话；并发时直接抛错 |\n| `continue()` | `:357` | 继续入口。最后一条消息是 assistant 时，先消费两个队列再报错 |\n| `runPromptMessages` | `:405` | `prompt()` 的下游，把消息交给 `runWithLifecycle` |\n| `runWithLifecycle` | `:482` | 生命周期包装：建 AbortController、登记 activeRun、兜异常、收尾 |\n| `waitForIdle()` | `:328` | 旁观者等结算。监听器里调用会死锁（第 1 章六问） |\n| `abort()` | `:319` | 按停止按钮的人。同步按 abort 按钮，不排队 |\n| `processEvents` | `:540` | 事件归约 + 逐个 await 监听器。状态唯一写入点 |\n| `finishRun` | `:525` | 收尾：清状态、resolve waitForIdle |\n| `handleRunFailure` | `:507` | 循环炸了时合成失败消息、补发完整事件序列 |\n| `createContextSnapshot` | `:433` | 把状态拷成循环只读的快照 |\n| `createLoopConfig` | `:441` | 把回调、队列 drain 打包成循环配置 |\n\n**第二层：循环本体（`src/agent-loop.ts`，第 1、2 章细讲）**\n\n| 函数 | 行号 | 它是谁、谁调用它 |\n|---|---|---|\n| `runAgentLoop` | `:95` | 无状态循环入口。`Agent` 和将来的 `AgentHarness` 都调它 |\n| `runLoop` | `:155` | 真正的引擎：两层 while（turn + follow-up） |\n| `streamAssistantResponse` | `:281` | 调模型：过两道闸门、消费流事件、维护 partialMessage |\n| `executeToolCalls` | `:411` | 工具批处理入口：决定并行还是串行 |\n| `prepareToolCall` | `:600` | 阶段一：零副作用，校验 + beforeToolCall 拦截 |\n| `executePreparedToolCall` | `:666` | 阶段二：真调 `tool.execute()`，异常编码进 result |\n| `finalizeExecutedToolCall` | `:709` | 阶段三：afterToolCall 逐字段补丁 |\n| `shouldTerminateToolBatch` | `:582` | 全员同意才提前终止 |\n| `failToolCallsFromTruncatedMessage` | `:381` | 截断守卫：length 停的批次一个都不执行 |\n\n**第三层：会话与存储（`harness/session/`，第 4 章细讲）**\n\n| 函数 | 行号 | 它是谁、谁调用它 |\n|---|---|---|\n| `Session.view(lane)` | `session.ts:114` | 唯一的 lane 绑定点，绑完的方法不再带 lane 参数 |\n| `commitEntry` | `session.ts:272` | 所有写的必经：先验可序列化，再委托存储 |\n| `appendEntry` | `memory.ts:137` | 参考后端：parentId 赋值 + leaf 推进在同一个原子步 |\n| `provisionEntry` | `memory.ts:32` | 补上调用方不能传的三个字段 |\n| `defaultContextEntryTransform` | `context.ts:45` | 从最新 compaction 开始重建上下文 |\n\n**第四层：环境、压缩、编辑、错误、技能（第 5-10 章细讲）**\n\n| 函数 | 文件:行号 | 它是谁、谁调用它 |\n|---|---|---|\n| `toFileError` | `env/nodejs.ts:96` | Node errno → 8 个稳定错误码的唯一点 |\n| `getBashShellConfig` | `env/nodejs.ts:189` | 跨平台 shell 发现 + WSL 遗留路径 |\n| `shouldCompact` | `compaction.ts:247` | 触发判定：一个减法 |\n| `findCutPoint` | `compaction.ts:374` | 找合法切点，toolResult 不可切 |\n| `prepareCompaction` | `compaction.ts:616` | 增量压缩：物化上个 retainedTail |\n| `fuzzyFindText` | `edit-diff.ts:203` | 编辑算法入口：精确优先、NFKC 兜底 |\n| `countOccurrences` | `edit-diff.ts:248` | 唯一性校验，防模型幻觉 |\n| `stripBom` | `edit-diff.ts:244` | BOM 外置，算法层不感知 |\n| `TaggedError` | `result.ts:28` | 错误类工厂，一行声明一个类 |\n| `matchError` | `result.ts:57` | 按 `_tag` 编译期穷尽匹配 |\n| `loadSkillFromFile` | `skills.ts:243` | 技能加载 + 可发现性校验 |\n| `formatSkillsForSystemPrompt` | `system-prompt.ts:3` | 技能进系统提示词的 XML |\n| `convertToLlm` | `messages.ts:124` | 自定义消息翻译成 LLM 三种角色 |\n\n**怎么读这张表：** 第一、二层是主链路（一次 prompt 的必经之路），第 1 章会逐个点亮；第三、四层是组合层和工具层，后面各章分别展开。读正文时遇到不认识的函数名，回来查这一节就行。\n\n---\n\n',Kf=`# 第 1 章 · 一次 prompt 的全程：从 prompt() 到 agent_end

> **模块定位**（八股 02 核心框架 · ReAct）：八股里的 ReAct 是一张伪代码图，reasoning → action → observation 循环。这一章让这张图活过来：跟着 \`agent.prompt("读一下 config.json")\` 这一句真实调用，把循环从入口走到出口，看 ReAct 的三个动作在 pi 代码里各自落在哪一行。走完这一章，后面每一章的模块你都已经见过了，本章是全书的地图。

### 出发：Agent.prompt

一次对话从哪开始？答案就一个方法：\`Agent.prompt()\`。它是这个包对外的脸——你在 UI 里敲一句话、在脚本里调一次接口，最后都落在这里。它接收你的输入（字符串、图片或整组消息），把这次对话跑完。看它的实现，注意三件事：它先检查什么、把消息交给谁、自己做了什么：

\`\`\`typescript
// src/agent.ts:346（Agent.prompt）
async prompt(input: string | AgentMessage | AgentMessage[], images?: ImageContent[]): Promise<void> {
	if (this.activeRun) {
		throw new Error(
			"Agent is already processing a prompt. Use steer() or followUp() to queue messages, or wait for completion.",
		);
	}
	const messages = this.normalizePromptInput(input, images);
	await this.runPromptMessages(messages);
}
\`\`\`

它做的第一件事和 AI 无关：检查 \`activeRun\`。**一个 Agent 实例同一时刻只跑一个 run**——想插队，走 \`steer()\` 或 \`followUp()\` 队列，这是后话。注意错误信息把三条出路直接报给你：这不是一个含糊的"busy"，而是一句指路。\`prompt()\` 把归一化后的消息交给 \`runPromptMessages\`，这里能看到后续所有准备的接线方式：

\`\`\`typescript
// src/agent.ts:405（Agent.runPromptMessages）
private async runPromptMessages(
	messages: AgentMessage[],
	options: { skipInitialSteeringPoll?: boolean } = {},
): Promise<void> {
	await this.runWithLifecycle(async (signal) => {
		await runAgentLoop(
			messages,
			this.createContextSnapshot(),
			this.createLoopConfig(options),
			(event) => this.processEvents(event),
			signal,
			this.streamFunction,
		);
	});
}
\`\`\`

注意顺序：\`runWithLifecycle\` 包在最外层，而 \`createContextSnapshot()\` 和 \`createLoopConfig(options)\` 是 \`runAgentLoop\` 的实参——它们在 executor 真正执行时才求值，也就是在生命周期建立**之后**。

接下来要回答一个问题：\`runAgentLoop\` 要用的三样东西——上下文、配置、事件回调——从哪来？前两样由 \`Agent\` 的两个私有方法现场准备，事件回调就是 \`processEvents\` 自己。先看上下文怎么准备。

第一件，快照上下文：

\`\`\`typescript
// src/agent.ts:433（Agent.createContextSnapshot）
private createContextSnapshot(): AgentContext {
	return {
		systemPrompt: this._state.systemPrompt,
		messages: this._state.messages.slice(),
		tools: this._state.tools.slice(),
	};
}
\`\`\`

注意消息数组是**浅拷贝**——循环会往里推新消息，但替换不了调用方手里那个数组的引用。第二件，装配循环配置（\`src/agent.ts:441\`），把 \`Agent\` 实例上的回调和两个队列的 drain 函数打包成 \`AgentLoopConfig\`。这一步的直觉是：循环不认 \`Agent\` 实例，只认一张配置表——模型、工具、钩子、队列拉取函数全部摊在表里，循环按表取用：

\`\`\`typescript
// src/agent.ts:441（Agent.createLoopConfig，删减）
private createLoopConfig(options: { skipInitialSteeringPoll?: boolean } = {}): AgentLoopConfig {
	let skipInitialSteeringPoll = options.skipInitialSteeringPoll === true;
	const shouldStopAfterTurn = this.shouldStopAfterTurn;
	return {
		model: this._state.model,
		reasoning: this._state.thinkingLevel === "off" ? undefined : this._state.thinkingLevel,
		// ...（onPayload / onResponse / transport / thinkingBudgets 等透传键，折叠）
		toolExecution: this.toolExecution,
		beforeToolCall: this.beforeToolCall,
		afterToolCall: this.afterToolCall,
		shouldStopAfterTurn: shouldStopAfterTurn
			? async (context) => await shouldStopAfterTurn(context, this.signal)
			: undefined,
		// ...（prepareNextTurn 的适配器，折叠，见本章"岔路"）
		convertToLlm: this.convertToLlm,
		transformContext: this.transformContext,
		getApiKey: this.getApiKey,
		getSteeringMessages: async () => {
			if (skipInitialSteeringPoll) {
				skipInitialSteeringPoll = false;
				return [];
			}
			return this.steeringQueue.drain();
		},
		getFollowUpMessages: async () => this.followUpQueue.drain(),
	};
}
\`\`\`

两个队列的 drain 函数被打包成了 \`getSteeringMessages\` / \`getFollowUpMessages\` 两个回调——循环在固定点 poll 它们（本章"两层结构"一节会看到 poll 的位置）。\`skipInitialSteeringPoll\` 是个一次性的闸：\`continue()\` 路径已经 drain 过 steering，进循环时跳过第一次 poll，避免重复注入。

两个实参准备好了。回到外层：\`runWithLifecycle\` 建立一个 \`AbortController\`、登记 \`activeRun\`、置 \`isStreaming = true\`，然后才执行 executor：

\`\`\`typescript
// src/agent.ts:482（Agent.runWithLifecycle）
private async runWithLifecycle(executor: (signal: AbortSignal) => Promise<void>): Promise<void> {
	if (this.activeRun) {
		throw new Error("Agent is already processing.");
	}

	const abortController = new AbortController();
	let resolvePromise = () => {};
	const promise = new Promise<void>((resolve) => {
		resolvePromise = resolve;
	});
	this.activeRun = { promise, resolve: resolvePromise, abortController };

	this._state.isStreaming = true;
	this._state.streamingMessage = undefined;
	this._state.errorMessage = undefined;

	try {
		await executor(abortController.signal);
	} catch (error) {
		await this.handleRunFailure(error, abortController.signal.aborted);
	} finally {
		this.finishRun();
	}
}
\`\`\`

\`promise\` / \`resolvePromise\` 这三行是一个"手动引爆的 Promise"：\`new Promise\` 的 executor 是同步执行的，所以构造完成的瞬间，\`resolvePromise\` 就拿到了这个 Promise 的 resolve 函数。这个 Promise 的用途，本章"收尾"一节会拆开用到——它是 \`waitForIdle()\` 的扳机。

### 插叙：executor 与 signal 两个模式

\`runWithLifecycle\` 的签名里有两个值得展开的模式，它们在后文会反复出现。

**模式一：executor 回调（"你带活儿来，我管前后"）。** \`runWithLifecycle\` 自己不干活，它收一个函数 \`(signal) => Promise<void>\` 当参数。为什么不让它直接调用 \`runAgentLoop\`？因为有两个调用方想共用同一套"前后手续"，但干的活不一样——\`runPromptMessages\` 跑 \`runAgentLoop\`，\`runContinuation\` 跑 \`runAgentLoopContinue\`（\`src/agent.ts:421\`）：

\`\`\`typescript
// src/agent.ts:421（Agent.runContinuation）
private async runContinuation(): Promise<void> {
	await this.runWithLifecycle(async (signal) => {
		await runAgentLoopContinue(
			this.createContextSnapshot(),
			this.createLoopConfig(),
			(event) => this.processEvents(event),
			signal,
			this.streamFunction,
		);
	});
}
\`\`\`

把"活"抽象成参数，前后的手续（建 controller、登记、置状态、兜异常、收尾）就只写一份。本质是把**不变的括号**和**可变的内容**分开。

**模式二：AbortController / AbortSignal（"遥控器与电线"）。** 这是 Web 标准 API，Node 内置，和 TypeScript 无关。规则很简单：\`new AbortController()\` 造出一个**遥控器**，持有者随时可以按 \`.abort()\`；每个 controller 带一根"电线" \`controller.signal\`（\`AbortSignal\`），可以任意往下传。拿到 signal 的人不能按按钮，只能**听**——轮询 \`signal.aborted\`，或注册 \`abort\` 事件。

所以这是一个单向的取消广播：**只有创建者能取消，所有下游只能服从。** 看 \`runWithLifecycle\` 里 signal 的旅程：controller 在这里创建，signal 交给 executor → executor 传给 \`runAgentLoop\` → 循环再传给 \`streamFn\`（取消 HTTP 请求）和每个工具的 \`execute()\`（终止正在跑的命令）。而按按钮的手在别处：

\`\`\`typescript
// src/agent.ts:319（Agent.abort）
abort(): void {
	this.activeRun?.abortController.abort();
}
\`\`\`

你在 UI 上点"停止" → \`agent.abort()\` → controller 按下。注意 \`abort()\` 本身没有任何队列或时机判断——它就是同步按按钮，所以"什么时候停"不取决于循环转到哪，而取决于**听到广播的三方各自多快响应**。第 3 章会拆这三个响应方；这里只要记住：abort 结束的是整个 run，不是当前 turn。

### 进入循环：runAgentLoop 的开场

executor 跑起来，调用 \`runAgentLoop\`。它先把 prompt 消息追加进上下文，发出 \`agent_start\`、\`turn_start\` 和 prompt 自己的 \`message_start\`/\`message_end\`，然后把控制权交给真正的引擎 \`runLoop\`：

\`\`\`typescript
// src/agent-loop.ts:95（删减）
export async function runAgentLoop(
	prompts: AgentMessage[],
	context: AgentContext,
	config: AgentLoopConfig,
	emit: AgentEventSink,
	signal: AbortSignal | undefined,
	streamFn: StreamFn,
): Promise<AgentMessage[]> {
	const newMessages: AgentMessage[] = [...prompts];
	const currentContext: AgentContext = {
		...context,
		messages: [...context.messages, ...prompts],
	};

	await emit({ type: "agent_start" });
	await emit({ type: "turn_start" });
	for (const prompt of prompts) {
		await emit({ type: "message_start", message: prompt });
		await emit({ type: "message_end", message: prompt });
	}

	await runLoop(currentContext, newMessages, config, signal, emit, streamFn ?? getDefaultStreamFn());
	return newMessages;
}
\`\`\`

注意两个数组的不同命运。\`newMessages\` 是 \`runAgentLoop\` 新建的（\`[...prompts]\`），交给 \`runLoop\` 填充，跑完原样 \`return\` 给调用方——**就地推消息是结果回传的通道**。\`currentContext.messages\` 则另起了新数组（\`[...context.messages, ...prompts]\`），循环往里推多少条，调用方手里的 \`context.messages\`（也就是 \`Agent\` 的 \`state.messages\` 快照）都纹丝不动。一个负责回报结果，一个负责隔离副作用。

### 循环的两层结构

\`runLoop\` 这个"真正的引擎"里，循环到底在哪里？先说清楚"循环"指什么。日常说的"agent 循环"是**模型 → 工具 → 模型**的往复：模型产出工具调用，工具结果喂回模型，模型再产出，直到没有工具调用为止。这个往复在代码里不是递归，是迭代——\`runLoop\` 里的一个 \`while\`。而 \`runLoop\` 里其实有**两个** \`while\`，这就是"两层结构"的字面出处。把真实代码摆出来（只折叠 \`prepareNextTurn\` 块——它是岔路不是主干，见本章"岔路"专节；其余逐行保真）：

\`\`\`typescript
// src/agent-loop.ts:155（折叠 prepareNextTurn 块；其余逐行保真）
async function runLoop(
	initialContext: AgentContext,
	newMessages: AgentMessage[],
	initialConfig: AgentLoopConfig,
	signal: AbortSignal | undefined,
	emit: AgentEventSink,
	streamFunction: StreamFn,
): Promise<void> {
	let currentContext = initialContext;
	let config = initialConfig;
	let firstTurn = true;
	// Check for steering messages at start (user may have typed while waiting)
	let pendingMessages: AgentMessage[] = (await config.getSteeringMessages?.()) || [];

	// Outer loop: continues when queued follow-up messages arrive after agent would stop
	while (true) {
		let hasMoreToolCalls = true;

		// Inner loop: process tool calls and steering messages
		while (hasMoreToolCalls || pendingMessages.length > 0) {
			if (!firstTurn) {
				await emit({ type: "turn_start" });
			} else {
				firstTurn = false;
			}

			// Process pending messages (inject before next assistant response)
			if (pendingMessages.length > 0) {
				for (const message of pendingMessages) {
					await emit({ type: "message_start", message });
					await emit({ type: "message_end", message });
					currentContext.messages.push(message);
					newMessages.push(message);
				}
				pendingMessages = [];
			}

			// Stream assistant response
			const message = await streamAssistantResponse(currentContext, config, signal, emit, streamFunction);
			newMessages.push(message);

			if (message.stopReason === "error" || message.stopReason === "aborted") {
				await emit({ type: "turn_end", message, toolResults: [] });
				await emit({ type: "agent_end", messages: newMessages });
				return;
			}

			// Check for tool calls
			const toolCalls = message.content.filter((c) => c.type === "toolCall");

			const toolResults: ToolResultMessage[] = [];
			hasMoreToolCalls = false;
			if (toolCalls.length > 0) {
				// A "length" stop means the output was cut off by the token limit, so
				// every tool call in the message may carry truncated arguments. Fail
				// them all instead of executing potentially borked calls.
				const executedToolBatch =
					message.stopReason === "length"
						? await failToolCallsFromTruncatedMessage(toolCalls, emit)
						: await executeToolCalls(currentContext, message, config, signal, emit);
				toolResults.push(...executedToolBatch.messages);
				hasMoreToolCalls = !executedToolBatch.terminate;

				for (const result of toolResults) {
					currentContext.messages.push(result);
					newMessages.push(result);
				}
			}

			await emit({ type: "turn_end", message, toolResults });

			// ...（prepareNextTurn：两圈之间换快照的岔路，折叠，见下文专节）

			if (
				await config.shouldStopAfterTurn?.({
					message,
					toolResults,
					context: currentContext,
					newMessages,
				})
			) {
				await emit({ type: "agent_end", messages: newMessages });
				return;
			}

			pendingMessages = (await config.getSteeringMessages?.()) || [];
		}

		// Agent would stop here. Check for follow-up messages.
		const followUpMessages = (await config.getFollowUpMessages?.()) || [];
		if (followUpMessages.length > 0) {
			// Set as pending so inner loop processes them
			pendingMessages = followUpMessages;
			continue;
		}

		// No more messages, exit
		break;
	}

	await emit({ type: "agent_end", messages: newMessages });
}
\`\`\`

**内层 \`while\` 转一圈 = 一个 turn**：注入插队消息（如果有）→ 调一次模型 → 执行工具（如果有）→ \`turn_end\`。它的退出条件 \`hasMoreToolCalls || pendingMessages.length > 0\` 读作"模型没要新工具，也没人插队"——日常说的"agent 跑完了"，在代码里就是这个条件变假。

每圈开头补发一个 \`turn_start\`——除了第一圈。\`firstTurn\` 旗标就是干这个的：第一圈的 \`turn_start\` 在进 \`runLoop\` 之前已经由 \`runAgentLoop\` 发过了（\`agent-loop.ts:110\`），如果不压住，订阅者会看到两个挨着的 \`turn_start\`。这个旗标没有别的用途，纯粹是事件去重。

**外层 \`while (true)\` 转一圈 = 一批 follow-up。** 内层耗尽后，循环本来该结束了，但先问一句 follow-up 队列：有人排队"顺便再做一件事"，就把它们塞进 \`pendingMessages\`，\`continue\` 回去让内层再转；没有，\`break\`。外层存在的全部理由就是这一问。

为什么需要两层，而不是一个大 while？因为两种队列的**检查时机**不同：steering 在每个 turn 之后都要看（用户在 agent 工作时随时插话），follow-up 只能在"agent 真的要停了"的点才看。合并成一个循环，就得在同一个条件里表达两种时机，代码会长出奇怪的旗标；两层 while 各管一种时机，条件读起来就是业务语义本身。**steering 和 follow-up 共用一套注入管线（都是塞进 \`pendingMessages\`），区别只在 poll 的时机。**

### 插叙：消息的三件套

骨架里的 \`message\`、\`toolResults\`、\`pendingMessages\` 全都是消息数组。整个对话历史就是一个 \`Message\` 数组，而 \`Message\` 只有三种角色——user 说，assistant 做，toolResult 把工具结果喂回去。循环的"模型 → 工具 → 模型"往复，落到数据上就是 assistant 消息和 toolResult 消息在数组里交替追加。

值得破除一个命名直觉：\`message\` 听起来像"一句话"，实际上它是**模型一轮输出的全部内容**的容器——"轮"才是它的单位，不是"句"。\`AssistantMessage.content\` 不是字符串，是内容块数组，一条消息可以"想一段、说一段、调两个工具"，全部混排在同一个数组里。骨架里那个 \`filter\` 之所以成立：**"模型这一步有没有要干活" = "这个数组里有没有 \`type: "toolCall"\` 的块"**。文本块和思考块不进工具管线，它们只是对话内容。

### 调模型：两道闸门

内层循环的核心动作是 \`streamAssistantResponse\`。在真正发出请求之前，消息要过两道闸门：

\`\`\`typescript
// src/agent-loop.ts:289（streamAssistantResponse 内）
let messages = context.messages;
if (config.transformContext) {
	messages = await config.transformContext(messages, signal);
}

// Convert to LLM-compatible messages (AgentMessage[] -> Message[])
const llmMessages = await config.convertToLlm(messages);
\`\`\`

- \`transformContext\`（可选）：直接操作 agent 侧的消息数组——剪掉老消息、注入外部上下文。输入输出都是 \`AgentMessage[]\`。
- \`convertToLlm\`（必需）：把 \`AgentMessage\` 翻译成 LLM 侧的 \`Message\`。LLM 只认识 user/assistant/toolResult 三种角色，你的自定义消息类型（"通知""压缩摘要"）要么被转换，要么被过滤掉。

这两道闸门是全书最重要的设计之一，第 10 章会展开。这里只需要记住文件头注释写的那句话：

\`\`\`typescript
// src/agent-loop.ts:1
/**
 * Agent loop that works with AgentMessage throughout.
 * Transforms to Message[] only at the LLM call boundary.
 */
\`\`\`

**循环本体从头到尾只说 \`AgentMessage\`，翻译只发生在 LLM 调用边界上。** 这是"循环只有一份"的另一种表达：循环不认识 provider 的消息格式，翻译是边界上的组合层。

过了闸门，调 \`streamFn\`，事件开始回流。循环拿着流事件维护一份"正在成形的消息"（\`partialMessage\`），就地更新，同时向订阅者转发：

\`\`\`typescript
// src/agent-loop.ts:314（streamAssistantResponse 内）
let partialMessage: AssistantMessage | null = null;
let addedPartial = false;

for await (const event of response) {
	switch (event.type) {
		case "start":
			partialMessage = event.partial;
			context.messages.push(partialMessage);
			addedPartial = true;
			await emit({ type: "message_start", message: { ...partialMessage } });
			break;

		case "text_start":
		case "text_delta":
		case "text_end":
		case "thinking_start":
		case "thinking_delta":
		case "thinking_end":
		case "toolcall_start":
		case "toolcall_delta":
		case "toolcall_end":
			if (partialMessage) {
				partialMessage = event.partial;
				context.messages[context.messages.length - 1] = partialMessage;
				await emit({
					type: "message_update",
					assistantMessageEvent: event,
					message: { ...partialMessage },
				});
			}
			break;

		case "done":
		case "error": {
			const finalMessage = await response.result();
			if (addedPartial) {
				context.messages[context.messages.length - 1] = finalMessage;
			} else {
				context.messages.push(finalMessage);
			}
			if (!addedPartial) {
				await emit({ type: "message_start", message: { ...finalMessage } });
			}
			await emit({ type: "message_end", message: finalMessage });
			return finalMessage;
		}
	}
}
\`\`\`

九种增量事件（text/thinking/toolcall 各 start/delta/end）能共用一个函数体，是因为流事件个个带一份完整的 \`partial\` 快照，不是增量，是"到目前为止的整条消息"。所以循环不需要分辨来的是哪一组：\`partialMessage = event.partial\` 整体换上，就地更新，覆盖的最后一格正是 \`start\` 时 \`push\` 进去占位的那个。收到 \`done\`（或 \`error\`），\`response.result()\` 取出最终消息，替换占位格，发 \`message_end\`，这一轮模型调用结束。

### 执行工具：先准备，再开火

assistant 消息里如果带着 \`toolCall\` 内容块，就进入工具执行。入口处有一个容易漏掉的守卫——输出被 token 上限截断时（\`stopReason: "length"\`），每个工具调用的参数都可能是残缺的 JSON，**全部标记为错误，一个都不执行**，让模型自己重新发一遍：

\`\`\`typescript
// src/agent-loop.ts:208
// A "length" stop means the output was cut off by the token limit, so
// every tool call in the message may carry truncated arguments. Fail
// them all instead of executing potentially borked calls.
const executedToolBatch =
	message.stopReason === "length"
		? await failToolCallsFromTruncatedMessage(toolCalls, emit)
		: await executeToolCalls(currentContext, message, config, signal, emit);
\`\`\`

正常情况下，进入 \`executeToolCalls\`，每个工具调用走三段管线：prepare（找工具、校验参数、问 \`beforeToolCall\` 放不放行）→ execute（真正调 \`tool.execute()\`）→ finalize（问 \`afterToolCall\` 要不要改写结果）。这里跟一遍主路就够，管线的完整契约留给第 2 章。

工具结果变成 \`toolResult\` 消息进上下文，\`turn_end\` 发出，一个 turn 结束。接着是四个决策点（按代码里的询问顺序）：\`prepareNextTurn\`（换不换下一圈的装备，岔路）→ \`shouldStopAfterTurn\`（要不要体面地停）→ steering poll（有没有人插队）→ follow-up poll（真要停了，有没有人留后话）。四个都落空，发 \`agent_end\`，\`runLoop\` 返回。

### 岔路：两圈之间换快照（prepareNextTurn）

主干引文里折叠掉的那块，现在展开。它在每个 \`turn_end\` 之后、下一次 poll steering 之前，给宿主一个"换掉下一圈的装备"的机会。

坦白说，这条岔路是本章最难啃的一段——契约、适配、实现横跨三层，难度在本章平均线之上。啃不动就先跳过，主线不依赖它；读完后面几章再回来也来得及。

先说这段代码回答什么问题：run 跑到一半，宿主想换上下文、换模型、换思考强度——比如 coding agent 发现当前任务需要更强的模型。循环怎么给宿主留这个口子？答案是 \`prepareNextTurn\` 这个可空回调：每个 turn 结束时循环问一句"要换装备吗"，宿主答"要"就换，答不上来就保持原样。下面这段是循环层的调用现场，注意回调的入参出参形状：

\`\`\`typescript
// src/agent-loop.ts:226
const nextTurnContext = {
	message,
	toolResults,
	context: currentContext,
	newMessages,
};
const nextTurnSnapshot = await config.prepareNextTurn?.(nextTurnContext);
if (nextTurnSnapshot) {
	currentContext = nextTurnSnapshot.context ?? currentContext;
	config = {
		...config,
		model: nextTurnSnapshot.model ?? config.model,
		reasoning:
			nextTurnSnapshot.thinkingLevel === undefined
				? config.reasoning
				: nextTurnSnapshot.thinkingLevel === "off"
					? undefined
					: nextTurnSnapshot.thinkingLevel,
	};
}
\`\`\`

它回答的问题是：**一个 run 跑到一半，宿主想换上下文、换模型、换思考强度怎么办？** 快照的每个字段都可缺省，缺省就 \`??\` 回落到当前值——宿主可以只换模型不动上下文，反之亦然。\`thinkingLevel: "off"\` 被显式翻译成 \`reasoning: undefined\`，因为下游契约是用"没有 reasoning 字段"而不是 \`"off"\` 来表达关闭——那个三层三元表达式就是在做词汇表对齐。

\`Agent\` 层把这个契约暴露成两个可赋值的公开属性（\`prepareNextTurn\` 旧版只给 signal，\`prepareNextTurnWithContext\` 新版多给 turn 信息），装配时归一成循环认识的单一签名（\`agent.ts:459\`）。两个名字并存是兼容性历史。真正实现它的是宿主——coding-agent 每圈重读 systemPrompt、工具、模型；harness 每圈落盘后重建快照。这条岔路的全部意义：**换装备是组合层的事，循环只提供"问一句"的口子。**

### 收尾：事件如何落地，run 何时算完

\`AgentEvent\` 的事件分属四个层级，不同层级各有来源：

\`\`\`
run      agent_start · agent_end              ← 骨架（「循环的两层结构」）
turn     turn_start · turn_end                ← 骨架，内层循环每圈
message  message_start · message_update · message_end  ← 回流（assistant）· 注入（prompt、插队、follow-up）
tool     tool_execution_start · _update · _end          ← 工具管线（「执行工具」）
\`\`\`

四个层级的事件全都流过 \`Agent.processEvents\`。它做两件事：先把事件**归约**进状态，然后**逐个 await 所有订阅者**：

\`\`\`typescript
// src/agent.ts:540（Agent.processEvents 内，删减）
private async processEvents(event: AgentEvent): Promise<void> {
	switch (event.type) {
		case "message_end":
			this._state.streamingMessage = undefined;
			this._state.messages.push(event.message);
			break;
		case "tool_execution_start": {
			const pendingToolCalls = new Set(this._state.pendingToolCalls);
			pendingToolCalls.add(event.toolCallId);
			this._state.pendingToolCalls = pendingToolCalls;
			break;
		}
		// ...（message_start / message_update / tool_execution_end / turn_end / agent_end 各 case，折叠）
	}

	const signal = this.activeRun?.abortController.signal;
	if (!signal) {
		throw new Error("Agent listener invoked outside active run");
	}
	for (const listener of this.listeners) {
		await listener(event, signal);
	}
}
\`\`\`

"逐个 await"是 \`Agent\` 和裸循环之间最实质的差别——订阅者的异步处理是 run 结算的一部分。\`agent_end\` 发出 ≠ run 结束；所有 \`agent_end\` 监听器跑完，\`finishRun()\` 清掉运行时状态，\`waitForIdle()\` 才 resolve：

\`\`\`typescript
// src/agent.ts:525（Agent.finishRun）
private finishRun(): void {
	this._state.isStreaming = false;
	this._state.streamingMessage = undefined;
	this._state.pendingToolCalls = new Set<string>();
	this.activeRun?.resolve();
	this.activeRun = undefined;
}
\`\`\`

而 \`waitForIdle()\` 返回的就是 \`runWithLifecycle\` 里那个手动引爆的 Promise：

\`\`\`typescript
// src/agent.ts:328（Agent.waitForIdle）
waitForIdle(): Promise<void> {
	return this.activeRun?.promise ?? Promise.resolve();
}
\`\`\`

这段三行代码值得拆成六个问题读，每个问题都有一条真实证据：

**1. 它什么时候 resolve？** 看 \`runWithLifecycle\` 的结构：\`executor\` 跑完 → \`finally\` 里的 \`finishRun()\` → \`resolvePromise()\` 被调用。所以 resolve 时刻 = "run 彻底结束"，比 \`agent_end\` 事件晚一拍——晚的那一拍是监听器逐个跑完。

**2. 谁在 await 它？** 任何持有 \`agent\` 引用的人。\`prompt()\` 自己也 await（\`runPromptMessages\` → \`await runWithLifecycle\` 一条链下来），但真正需要 \`waitForIdle()\` 的是那些**手里没有 prompt 返回的 Promise** 的代码，它只有 \`agent\` 引用。没有 active run 时它返回一个立即 resolve 的 Promise（"已经在 idle，不用等"），所以"等安静"的调用在空闲状态下零开销，也可以放心地在 \`agent_end\` 监听器里写数据库，循环会等监听器跑完，而监听器不会等循环。

**3. 为什么需要它？** 因为"run 是否彻底结算"是 \`Agent\` 的私有知识。\`activeRun\` 是私有字段，外部能观察到的最晚信号是 \`agent_end\` 事件——但事件发出 ≠ 监听器跑完（\`processEvents\` 逐个 await，见上）。拿事件当结算信号，早了一个身位。库不把这个答案挂出来，外部只能猜错。

**4. 它在哪里被调用？** 这个包自己的生产代码里没有调用点，\`waitForIdle()\` 是纯公开 API，调用方在库外。仓库里的真实用法有两类。一类是测试，断言前等落定，\`coding-agent\` 的导航测试每步 prompt 后都等它：

\`\`\`typescript
// packages/coding-agent/test/agent-session-tree-navigation.test.ts:33
await session.prompt("First message");
await session.agent.waitForIdle();
await session.prompt("Second message");
await session.agent.waitForIdle();
\`\`\`

注意第二行 \`await session.prompt(...)\` 本身就会等到结算，测试为什么还要再等一次？因为测试的下一行要读 \`sessionManager.getTree()\`，树的最新状态是**监听器写进去的**，而监听器在 prompt 返回之后还在跑。等 idle 就是等"监听器也全部跑完"。另一类调用点是下游包装层的 abort 流程，按了停止必须等它真的安静才能返回，这个证据链在第 8 章讲 harness 契约时会用到。

**5. 那 \`Agent.waitForIdle()\` 为什么必须存在，而不是让调用方自己等 \`agent_end\`？** 因为 \`agent_end\` 是事件，不是 Promise——等一个事件需要自己包装 Promise，而"什么时候算结算完"的判定（监听器 settle）在 \`Agent\` 内部。把结算语义封装成 \`waitForIdle()\`，判定逻辑只写一份，外部拿到的就是一个可 await 的 Promise。

**6. 保证的反面：在监听器里 await 它，会死锁。** 同一条结算语义，站错位置就是陷阱。监听器里 \`await agent.waitForIdle()\`，等的是结算；而结算在等你——\`processEvents\` 逐个 await 监听器，你不 return，\`executor\` 就不算跑完，\`activeRun.promise\` 就不 resolve；你又在等它 resolve——环闭合了。不需要线程参与，Promise 依赖成环就够了，而且没有任何超时或 abort 能打破它。harness 层的设计文档把这个坑明确写了出来：

\`\`\`text
// docs/harness-v2.md:730（节选）
runWhenIdle(callback: () => void | Promise<void>): Promise<void>;   // runtime-only
\`\`\`

出路是换一个方向：把回调传进去，自己的监听器正常 return，结算照常完成；链走完后 harness 再来调这个回调，返回的 Promise 等回调跑完才 resolve——从登记那一刻起，你就不在依赖环里。注意在当前基线上它只是签名 + 桩实现（\`agent-harness.ts:413\`：\`async runWhenIdle(callback) { await callback(); }\`），行为等 F0 落地。一句话记住这条边界：**\`waitForIdle()\` 是旁观者的工具，参与者碰不得。**

### 一章小结

一次 \`prompt()\` 的全程：

\`\`\`
prompt() → runPromptMessages → runWithLifecycle → runAgentLoop(快照, 装配) → runLoop
  ├─ transformContext → convertToLlm → streamFn（流式）
  ├─ prepare → execute → finalize（工具三段管线）
  ├─ turn_end → prepareNextTurn? → shouldStopAfterTurn? → steering?
  └─ follow-up? → 外层再来一圈
→ agent_end → await 所有监听器 → finishRun → waitForIdle resolve
\`\`\`

turn 结束后的四个决策点，按代码里的询问顺序（对照骨架引文 \`agent-loop.ts:226-272\`）：

1. \`prepareNextTurn\`——换不换下一圈的装备？见"岔路"。
2. \`shouldStopAfterTurn\`——要不要体面地停？
3. steering poll——有没有人插队？有则注入，内层再转一圈。
4. follow-up poll——真要停了，有没有人留了后话？有则外层续命。

四个都落空，发 \`agent_end\`，\`runLoop\` 返回。abort 不在这条链上：它不等 turn 结束，随时生效。

下一章把这一章路过的循环本体单独拎出来，讲清楚两层 \`while\` 的每一个分支。

### 为什么不去

> **为什么并发 \`prompt()\` 直接抛错，而不是自动排队等上一轮？** 因为自动排队会把"想插队还是想等结束"的决策藏起来——而这正是 \`steer\` 和 \`followUp\` 两种语义的分野。\`prompt()\` 的错误信息（\`agent.ts:349\`）把三条出路直接报给你，而不是默默替你选一条。库的选择是把决策显式化：流式期间再调 \`prompt()\` 就 throw，steer 打断当前 run，followUp 等 agent 将要停止才投递。

> **为什么 emit 要逐个 await 订阅者，而不是 fire-and-forget？** 因为监听器的典型工作是落盘、flush——推出去不等，run 返回时写入可能还没完成。所以订阅者的异步处理被算进 run 的结算：\`agent_end\` 只代表"循环不再发事件"，idle 要等它的监听器全部 settle。\`subscribe\` 的 JSDoc（\`agent.ts:247\`）把这条语义写在了明面上："\`agent_end\` is the final emitted event for a run, but the agent does not become idle until all awaited listeners for that event have settled."

> **回指**：这一章的循环本体（\`runLoop\`）只有一份。\`Agent\` 的状态、队列、生命周期包装、事件归约，全是循环之外的组合层。循环自己不持状态、不认模型厂商、不碰 UI——它只消费 \`AgentContext\`、回报 \`AgentEvent\`。

### 落地：八股视角

> **Q：ReAct 循环和 Plan-and-Execute 有什么区别？pi 属于哪种？**
>
> **A：** ReAct 是边走边想——每轮推理完就执行动作；Plan-and-Execute 是先规划再执行——计划器产出步骤列表，执行器照单执行。pi 的 \`runLoop\` 是 ReAct：没有独立的计划阶段，模型每轮输出什么就执行什么，\`prepareNextTurn\` 那个岔路是唯一接近"换计划"的口子，但也只是换上下文/模型，不是换执行路径。八股里 Plan-and-Execute 的优势（计划可复核、步骤可回滚）在 pi 里由 harness 的持久化层承担（第 9 章），而不是由循环承担。

> **Q：模型无限循环调用工具怎么办？**
>
> **A：** 八股的朴素答案是"轮次上限"。pi 的答案是分层：循环层靠 \`shouldStopAfterTurn\`（宿主可以在 turn 后强制停）+ \`terminate\` 批量举旗（第 2 章），harness 层靠 \`maxRetries\` 和恢复归约里的重试上限（第 9 章）。上限放在组合层而不是循环本体——循环不知道自己跑了几轮，问"要不要停"的权限交给宿主。

> **Q：agent 的"实时看到每一步"是怎么做到的？**
>
> **A：** 第 0 章的十种 \`AgentEvent\` 就是答案：\`message_update\` 让你看到文字一个字一个字流出来，\`tool_execution_start/update/end\` 让你看到工具逐个执行。订阅者拿事件渲染 UI，循环不关心渲染。八股里说的"流式 + 事件驱动"，pi 用事件联合 + 订阅回调落地。

---

`,Vf=`# 第 2 章 · 工具执行：三段管线与并行纪律

> **模块定位**（八股 04 工具调用）：八股里 Function Calling 的要点是"模型只负责决策与参数，执行在应用侧"，以及参数校验、并行执行、工具路由这些工程细节。这一章看 pi 怎么落地：一次工具调用被拆成 prepare → execute → finalize 三段，每一段对应八股的一个考点。

第 1 章里，工具执行只跟了主路：prepare -> execute -> finalize。这一章把三段管线拆开，讲清楚每一段的边界在哪、为什么这样切，以及多工具时的并行纪律。

### 为什么是三段，不是一段

一个 assistant 消息可能带多个工具调用。每个调用要经历：查工具、准备参数、schema 校验、钩子检查（可能阻止）、真正执行（有副作用）、钩子补丁。混在一个函数里，未来持久化 harness 就没地方插桩--它要在"执行前"写意图记录，在"执行后"写结果 entry。pi 把一次工具调用拆成三个阶段，**边界就是插桩点**。

设计文档把这件事讲得很直白（\`harness-v2.md:1755\`，§14）：将来 \`agent-loop.ts\` 被拆成 building blocks，"the harness composes them and inserts its durability writes between their phases"。三段不是循环的需要，是组合层的需要--循环先按三段切好，持久化层才有缝可插。

### 阶段一：prepare（零副作用）

\`prepareToolCall\` 的核心纪律写在它的返回类型里：任何失败路径都归为 \`ImmediateToolCallOutcome\`--错误结果当场返回，**不产生任何副作用**。

\`\`\`typescript
// src/agent-loop.ts:600
async function prepareToolCall(
	currentContext: AgentContext,
	assistantMessage: AssistantMessage,
	toolCall: AgentToolCall,
	config: AgentLoopConfig,
	signal: AbortSignal | undefined,
): Promise<PreparedToolCall | ImmediateToolCallOutcome> {
	const tool = currentContext.tools?.find((t) => t.name === toolCall.name);
	if (!tool) {
		return {
			kind: "immediate",
			result: createErrorToolResult(\`Tool \${toolCall.name} not found\`),
			isError: true,
		};
	}

	try {
		const preparedToolCall = prepareToolCallArguments(tool, toolCall);
		const validatedArgs = validateToolArguments(tool, preparedToolCall);
		if (config.beforeToolCall) {
			const beforeResult = await config.beforeToolCall(
				{
					assistantMessage,
					toolCall,
					args: validatedArgs,
					context: currentContext,
				},
				signal,
			);
			if (signal?.aborted) {
				return {
					kind: "immediate",
					result: createErrorToolResult("Operation aborted"),
					isError: true,
				};
			}
			if (beforeResult?.block) {
				return {
					kind: "immediate",
					result: createErrorToolResult(beforeResult.reason || "Tool execution was blocked"),
					isError: true,
				};
			}
		}
		if (signal?.aborted) {
			return {
				kind: "immediate",
				result: createErrorToolResult("Operation aborted"),
				isError: true,
			};
		}
		return {
			kind: "prepared",
			toolCall,
			tool,
			args: validatedArgs,
		};
	} catch (error) {
		return {
			kind: "immediate",
			result: createErrorToolResult(error instanceof Error ? error.message : String(error)),
			isError: true,
		};
	}
}
\`\`\`

逐个数失败路径：找不到工具（\`:608\`）、\`beforeToolCall\` 拦截（\`:636\`）、abort（\`:629\`、\`:644\`）、校验异常（\`:657\` 的 catch）。每一条都返回 \`kind: "immediate"\` 的错误结果，让模型看到后自行重发。**整段没有一处 \`tool.execute()\`--这就是"零副作用"的字面保证**，也是持久化层将来敢在阶段一之后写意图记录的前提：写完意图，若崩溃，重跑阶段一不会有任何效果落到世上。

\`beforeToolCall\` 是宿主的拦截口。返回 \`undefined\` 或空对象就是放行，\`block: true\` 才拦，\`reason\` 成为错误结果的文本。注意它是 fail-closed 的：abort 信号一按，立即变成错误结果，绝不"赶在abort前抢跑"。

### 阶段二：execute（真实效果）

\`\`\`typescript
// src/agent-loop.ts:666
async function executePreparedToolCall(
	prepared: PreparedToolCall,
	signal: AbortSignal | undefined,
	emit: AgentEventSink,
): Promise<ExecutedToolCallOutcome> {
	const updateEvents: Promise<void>[] = [];
	let acceptingUpdates = true;

	try {
		const result = await prepared.tool.execute(
			prepared.toolCall.id,
			prepared.args as never,
			signal,
			(partialResult) => {
				if (!acceptingUpdates) return;
				updateEvents.push(
					Promise.resolve(
						emit({
							type: "tool_execution_update",
							toolCallId: prepared.toolCall.id,
							toolName: prepared.toolCall.name,
							args: prepared.toolCall.arguments,
							partialResult,
						}),
					),
				);
			},
		);
		acceptingUpdates = false;
		await Promise.all(updateEvents);
		return { result, isError: false };
	} catch (error) {
		acceptingUpdates = false;
		await Promise.all(updateEvents);
		return {
			result: createErrorToolResult(error instanceof Error ? error.message : String(error)),
			isError: true,
		};
	} finally {
		acceptingUpdates = false;
	}
}
\`\`\`

这里有两个值得停下来的设计。一是 \`onUpdate\` 回调把 \`emit(tool_execution_update)\` 的 Promise 收集进 \`updateEvents\`，\`acceptingUpdates\` 闸门保证工具 settle 后不再回调；execute 返回后 \`await Promise.all(updateEvents)\` 排干--**UI 看到的 update 事件先于 end 事件落定**。二是工具抛异常没关系，抓住、包成 \`isError: true\` 的结果--**异常不逃逸到循环**，循环永远收到的是一个值，不是一个 throw。这和第 0 章 \`StreamFn\` 的"失败编码进流"是同一条哲学，只是这里编码进 result。

### 阶段三：finalize（补丁）

\`\`\`typescript
// src/agent-loop.ts:709
async function finalizeExecutedToolCall(
	currentContext: AgentContext,
	assistantMessage: AssistantMessage,
	prepared: PreparedToolCall,
	executed: ExecutedToolCallOutcome,
	config: AgentLoopConfig,
	signal: AbortSignal | undefined,
): Promise<FinalizedToolCallOutcome> {
	let result = executed.result;
	let isError = executed.isError;

	if (config.afterToolCall) {
		try {
			const afterResult = await config.afterToolCall(
				{
					assistantMessage,
					toolCall: prepared.toolCall,
					args: prepared.args,
					result,
					isError,
					context: currentContext,
				},
				signal,
			);
			if (afterResult) {
				result = {
					...result,
					content: afterResult.content ?? result.content,
					details: afterResult.details ?? result.details,
					usage: afterResult.usage ?? result.usage,
					terminate: afterResult.terminate ?? result.terminate,
				};
				isError = afterResult.isError ?? isError;
			}
		} catch (error) {
			result = createErrorToolResult(error instanceof Error ? error.message : String(error));
			isError = true;
		}
	}

	return {
		toolCall: prepared.toolCall,
		result,
		isError,
	};
}
\`\`\`

\`afterToolCall\` 逐字段补丁：提供即替换，没提供（\`??\`）保持原值。注意 \`terminate\` 也在补丁名单里--**"是否提前结束"不只是工具作者的硬编码，宿主可以在 finalize 阶段代举或撤旗**。钩子自己抛异常也有兜，和 execute 段一个待遇。这条补丁语义（无深合并、提供即替换）是契约的一部分，第 8 章会看到它和 \`TaggedError\` 的 \`toJSON\` 一样，是为了让补丁可序列化、可跨边界传输。

### 并行还是顺序：执行并发，投递有序

多工具时，模式选择在 \`executeToolCalls\` 入口：

\`\`\`typescript
// src/agent-loop.ts:411
async function executeToolCalls(
	currentContext: AgentContext,
	assistantMessage: AssistantMessage,
	config: AgentLoopConfig,
	signal: AbortSignal | undefined,
	emit: AgentEventSink,
): Promise<ExecutedToolCallBatch> {
	const toolCalls = assistantMessage.content.filter((c) => c.type === "toolCall");
	const hasSequentialToolCall = toolCalls.some(
		(tc) => currentContext.tools?.find((t) => t.name === tc.name)?.executionMode === "sequential",
	);
	if (config.toolExecution === "sequential" || hasSequentialToolCall) {
		return executeToolCallsSequential(currentContext, assistantMessage, toolCalls, config, signal, emit);
	}
	return executeToolCallsParallel(currentContext, assistantMessage, toolCalls, config, signal, emit);
}
\`\`\`

默认 parallel，但只要批量里**有一个**工具声明了 \`executionMode: "sequential"\`，整批退化为逐个执行。并行的纪律在 \`executeToolCallsParallel\` 里，一句话：**执行并发、投递有序**。

\`\`\`typescript
// src/agent-loop.ts:540（executeToolCallsParallel 内）
	const orderedFinalizedCalls = await Promise.all(
		finalizedCalls.map((entry) => (typeof entry === "function" ? entry() : Promise.resolve(entry))),
	);
	const messages: ToolResultMessage[] = [];
	for (const finalized of orderedFinalizedCalls) {
		const toolResultMessage = createToolResultMessage(finalized);
		await emitToolResultMessage(toolResultMessage, emit);
		messages.push(toolResultMessage);
	}
\`\`\`

看注释怎么说（\`types.ts:38\`）：

\`\`\`typescript
// src/types.ts:38
 * - "parallel": tool calls are prepared sequentially, then allowed tools execute concurrently.
 *   \`tool_execution_end\` is emitted in tool completion order after each tool is finalized,
 *   while tool-result message artifacts are emitted later in assistant source order.
\`\`\`

两种顺序各管各的：\`tool_execution_end\` 事件按**完成顺序**发出（服务于"尽快让 UI 更新"），toolResult 消息按**声明顺序**投递（服务于"让转写可重放"）。prepare 阶段在并行版里也是**串行**的（\`:499\` 的 for 循环逐个 prepare）--\`beforeToolCall\` 需要看到完整的一批，权限系统常常要按"这条 assistant 消息总共想干什么"来决策，而不是逐个孤立判断。

### 批量终止：terminate 是"全员同意"

循环的正常出口是模型"不再调用工具"，跟举旗无关（第 1 章讲过）。这里补完举旗的判定，它只有三行：

\`\`\`typescript
// src/agent-loop.ts:582
function shouldTerminateToolBatch(finalizedCalls: FinalizedToolCallOutcome[]): boolean {
	return finalizedCalls.length > 0 && finalizedCalls.every((finalized) => finalized.result.terminate === true);
}
\`\`\`

逐词读：这批里**每一个**（\`every\`）工具结果的 \`terminate\` 都**恰好等于** \`true\`。\`terminate\` 的类型是 \`boolean | undefined\`--\`=== true\` 的严格相等让"没写这个字段"（\`undefined\`，绝大多数工具的情况）明确算作不举旗。所以门槛非常高：没有任何工具举旗、混合批次（部分举旗）、截断守卫路径（\`failToolCallsFromTruncatedMessage\` 硬编码 \`terminate: false\`，\`agent-loop.ts:405\`）--全都不终止，循环继续。

什么工具会举旗？把答案想成"工具结果就是最终答案，没有后续工作需要模型做了"--比如结构化输出工具，参数本身就是成品，工具结果只是一张"已存好"的回执。举旗的决策是**工具作者**的（写在 \`execute()\` 的返回里），模型只负责**选择时机**，宿主则可以用 \`afterToolCall\` 在 finalize 阶段代举或撤旗。三层各管一段：**作者定义语义、模型选择时机、宿主保留否决权。** 而终止决策本身被持久化进 toolResult 消息（\`createToolResultMessage\` 把 \`terminate\` 写进消息，\`agent-loop.ts:783\`），所以崩溃恢复后决策不丢。

### 一章小结

- 工具执行三段：prepare（零副作用，可安全重放）-> execute（真实效果，异常编码进 result）-> finalize（逐字段补丁）。边界就是持久化插桩点。
- 并行纪律：prepare 串行、execute 并发、投递按声明顺序。事件顺序服务于 UI，消息顺序服务于可重放。
- terminate 是"全员同意"才生效；决策持久化进 toolResult 消息。

### 为什么不去

> **为什么不执行"抢救"回来的截断工具调用？** 输出被 token 上限截断时，流式累积的半截参数会被一个"尽力抢救"的 JSON 解析器补全--补全后能解析、能过 schema 校验，但可能**悄悄不完整**：少的是哪个字段，无从分辨。\`failToolCallsFromTruncatedMessage\` 的注释（\`agent-loop.ts:374\`）把这件事写死了："a truncated message can yield tool calls whose arguments parse and validate but are silently incomplete. None of them are safe to execute." 所以整批一个都不执行，让模型自己重发。设计文档（\`harness-v2.md:487\`）还补充了用户措辞：截断的对用户说"response was truncated before completion"，中性，不谎称达到了配置上限。

> **为什么 \`beforeToolCall\` 要串行、看到完整一批？** 因为权限决策常常是"这条消息总共想干什么"的函数，不是逐个孤立的。比如"模型同时想读 Secrets 又想 bash，组合起来才是数据外泄"--逐个放行会漏掉组合风险。prepare 串行保证了 hook 看到的顺序和模型声明的顺序一致；并发只发生在"放行之后"。

> **回指**：三段管线是循环本体的一部分，但它切得这么细，是为了让将来的持久化组合层有缝可插（§14）。循环先按三段切好，组合层不用改循环就能插入 durability writes。这是"组合，不是循环变复杂"。

### 落地：八股视角

> **Q：八股说"模型只负责决策与参数，执行在应用侧"，pi 怎么保证执行权在应用侧？**
>
> **A：** 三层保证。一是循环只调 \`AgentTool.execute()\` 接口，工具实现由宿主注入；二是 prepare 阶段做 schema 校验 + \`beforeToolCall\` 拦截（\`agent-loop.ts:600\`），高风险操作在真正执行前就能 block；三是 \`afterToolCall\` 可以在结果落地前改写。"执行权在应用侧"不是一句口号，是 prepare/execute/finalize 三段里夹出来的空间。

> **Q：参数校验怎么做？**
>
> **A：** 八股的分层答案是语法层（json.loads）→ 结构层（jsonschema）→ 语义层（业务校验）。pi 对应：参数提取和 schema 校验在 \`prepareToolCallArguments\` + \`validateToolArguments\`（\`agent-loop.ts:600\` 附近），校验失败直接返回 \`ImmediateToolCallOutcome\` 错误结果；语义层校验留给 \`beforeToolCall\` 钩子。截断守卫（\`stopReason: "length"\` 整批不执行）是八股没讲到的第四层——流式场景下语法可能"恰好能解析但悄悄不完整"。

> **Q：多个工具并行执行要注意什么？**
>
> **A：** 八股说并行要注意线程安全与副作用。pi 的纪律是"prepare 串行、execute 并发、投递按声明顺序"（\`agent-loop.ts:540\`）：prepare 串行是为了让 \`beforeToolCall\` 看到完整一批（权限决策常常是"这条消息总共想干什么"的函数）；execute 并发；toolResult 消息按模型声明顺序写回，保证转写可重放。事件顺序服务于 UI，消息顺序服务于重放，两件事分开管。

三段各自回答八股的一个问题：prepare 回答"参数可靠吗、放行吗"，execute 回答"真实效果怎么不污染循环"，finalize 回答"结果能不能被审计/改写"。

下一章回答一个工具管线没回答的问题：对话历史、正在流的消息、排队插话的消息，到底谁持有？答案是 \`Agent\` 类。

---

`,Qf='# 第 3 章 · 有状态 Agent：单飞与双队列\n\n> **模块定位**（八股 05 记忆系统 · 短期记忆）：八股把记忆分短期（会话内）和长期（跨会话）。这一章讲短期记忆的载体——`Agent` 类——怎么持有对话历史，以及它怎么用"单飞 + 双队列"把并发输入结构性消灭（八股里的"对话状态管理 + 并发控制"）。\n\n`agent-loop` 是无状态的--它只消费 `AgentContext`、回报 `AgentEvent`，自己不记住任何东西。那对话历史、正在流的消息、排队插话的消息，谁持有？答案是 `Agent` 类。这一章讲它如何用"单飞 + 双队列"把并发输入结构性消灭。\n\n### 问题：自由 async 是竞态地狱\n\n如果每个调用方都能随时 `prompt()`，两个并发 prompt 会把状态搅成一团--两个 run 往同一个 messages 数组推消息，两个 AbortController 互相不知道对方的存在。pi 的答案不是加锁，而是**从结构上消灭并发入口**：`Agent` 做"单飞"（同一时刻最多一个 run），并发输入只能进两个队列，循环在固定点消费。\n\n### 单飞：activeRun 闸门\n\n`prompt()` / `continue()` 在 `activeRun` 存在时直接 throw（`agent.ts:347`、`:358`）。`activeRun` 的登记和清理都在 `runWithLifecycle` 里（第 1 章引过完整代码）：进入时建 `AbortController`、登记 `activeRun`、置 `isStreaming = true`；`finally` 里 `finishRun()` 清掉。**任何时刻最多一个 activeRun，这是"单飞"的落地。**\n\n单飞的代价是：你想"再发一句"不能直接 `prompt()`。于是有了两个队列。\n\n### 双队列：steer 与 followUp\n\n队列长什么样？pi 没有引入第三方队列库，自己写了一个 15 行的 `PendingMessageQueue`。它解决两个问题：先来先服务（FIFO）和"一次取多少"（mode）。先看结构，再讲两条队列怎么用它：\n\n```typescript\n// src/agent.ts:125\nclass PendingMessageQueue {\n	private messages: AgentMessage[] = [];\n	public mode: QueueMode;\n\n	constructor(mode: QueueMode) {\n		this.mode = mode;\n	}\n\n	enqueue(message: AgentMessage): void {\n		this.messages.push(message);\n	}\n\n	hasItems(): boolean {\n		return this.messages.length > 0;\n	}\n\n	drain(): AgentMessage[] {\n		if (this.mode === "all") {\n			const drained = this.messages.slice();\n			this.messages = [];\n			return drained;\n		}\n\n		const first = this.messages[0];\n		if (!first) {\n			return [];\n		}\n		this.messages = this.messages.slice(1);\n		return [first];\n	}\n\n	clear(): void {\n		this.messages = [];\n	}\n}\n```\n\n`mode = "all"` 一次取走全部（适合批量注入），`mode = "one-at-a-time"` 一次只取最旧一条（默认）。两条队列默认都是 `one-at-a-time`，运行时可通过 `steeringMode` / `followUpMode` setter 切换。\n\n两条队列的区别不在结构（结构一样），在**drain 时机**。第 1 章的骨架里能看到两个 poll 点：steering 在每个 turn 结束后 poll（`getSteeringMessages`），follow-up 在内层耗尽、agent 本来要停时才 poll（`getFollowUpMessages`）。`Agent` 把它们打包进 `createLoopConfig`（`agent.ts:471`）：\n\n```typescript\n// src/agent.ts:471（Agent.createLoopConfig 内）\n		getSteeringMessages: async () => {\n			if (skipInitialSteeringPoll) {\n				skipInitialSteeringPoll = false;\n				return [];\n			}\n			return this.steeringQueue.drain();\n		},\n		getFollowUpMessages: async () => this.followUpQueue.drain(),\n```\n\nsteering 是"打断当前工作"（用户在 agent 工作时插话纠正），follow-up 是"追加工作"（agent 本来要停了，用户又加一件事）。**同一个 drain 机制，两个 poll 时机，就是全部区别。** 注入管线也共用--都塞进 `pendingMessages`，由内层循环统一注入。\n\n### continue 的降级链\n\n`continue()` 是一个值得细看的入口，因为它把"队列优先级高于报错"写进了控制流：\n\n```typescript\n// src/agent.ts:357（Agent.continue）\nasync continue(): Promise<void> {\n	if (this.activeRun) {\n		throw new Error("Agent is already processing. Wait for completion before continuing.");\n	}\n\n	const lastMessage = this._state.messages[this._state.messages.length - 1];\n	if (!lastMessage) {\n		throw new Error("No messages to continue from");\n	}\n\n	if (lastMessage.role === "assistant") {\n		const queuedSteering = this.steeringQueue.drain();\n		if (queuedSteering.length > 0) {\n			await this.runPromptMessages(queuedSteering, { skipInitialSteeringPoll: true });\n			return;\n		}\n\n		const queuedFollowUps = this.followUpQueue.drain();\n		if (queuedFollowUps.length > 0) {\n			await this.runPromptMessages(queuedFollowUps);\n			return;\n		}\n\n		throw new Error("Cannot continue from message role: assistant");\n	}\n\n	await this.runContinuation();\n}\n```\n\n最后一条是 assistant 时（正常情况这不该 continue，因为该轮到模型了），`continue()` 先试 steering、再试 follow-up，**只有两个队列都空才报错**。这意味着：哪怕用户"误调"了 continue，只要队列里有积压消息，它们会被优先消费。`skipInitialSteeringPoll: true` 防重复--这里已经手动 drain 过 steering，进循环时跳过第一次自动 poll。\n\n### 故障合成：事件流永远闭合\n\n底层循环若抛异常（比如 `streamFn` 违约抛了--虽然契约禁止），`runWithLifecycle` 的 catch 兜住，交给 `handleRunFailure`：\n\n```typescript\n// src/agent.ts:507\nprivate async handleRunFailure(error: unknown, aborted: boolean): Promise<void> {\n	const failureMessage = {\n		role: "assistant",\n		content: [{ type: "text", text: "" }],\n		api: this._state.model.api,\n		provider: this._state.model.provider,\n		model: this._state.model.id,\n		usage: EMPTY_USAGE,\n		stopReason: aborted ? "aborted" : "error",\n		errorMessage: error instanceof Error ? error.message : String(error),\n		timestamp: Date.now(),\n	} satisfies AgentMessage;\n	await this.processEvents({ type: "message_start", message: failureMessage });\n	await this.processEvents({ type: "message_end", message: failureMessage });\n	await this.processEvents({ type: "turn_end", message: failureMessage, toolResults: [] });\n	await this.processEvents({ type: "agent_end", messages: [failureMessage] });\n}\n```\n\n它合成一条 `stopReason: "error"`（或 `"aborted"`）的空 assistant 消息，并**完整补发事件序列**：message_start -> message_end -> turn_end -> agent_end。这是"订阅方永远收到闭合事件流"的最终保证--哪怕循环炸了，订阅者看到的也是一个完整的 run，而不是一个悬空的 `agent_start` 没有配对的 `agent_end`。`aborted` 参数从哪来？`runWithLifecycle` 传的是 `abortController.signal.aborted`（`agent.ts:501`），所以 abort 触发的失败会被正确标成 `"aborted"` 而非 `"error"`。\n\n### 状态归约与事件分发：reducer 与订阅分开\n\n`processEvents`（第 1 章引过）前半段是纯 reducer（switch 更新 `streamingMessage` / `messages` / `pendingToolCalls`），后半段按订阅顺序 await 所有 listener。注意 `pendingToolCalls` 的更新用了 `new Set(old)`（`agent.ts:556`、`:563`）--每次都造新 Set，保证不可变性，让外部读 `state.pendingToolCalls` 拿到的快照不会被后续修改捅穿。\n\nreducer 和分发分开是有意义的：reducer 先跑完，监听器里读 `agent.state` 拿到的一定是**这个事件之后**的状态，不需要自己做同步。`state` 访问器原样返回内部字段（`agent.ts:260`），公开只读。\n\n### waitForIdle：旁观者的工具，参与者碰不得\n\n第 1 章六问之六已经拆过完整依赖环：监听器里 `await waitForIdle()` 等的是结算，而结算在等监听器返回——环闭合，没有超时或 abort 能打破。这里只补本章的一环：`activeRun.promise` 的 resolve 只发生在 `finishRun()`（`agent.ts:525`），而它要等所有监听器跑完才执行。**参与者永远等不到自己触发的结算。**\n\n所以 `waitForIdle()` 的正确用法是"旁观者等待"--退出前的清理、测试里的断言、`reset()` 之前的护栏。它的扳机只留给 `finishRun()`。**等它的人可以有很多，能结束它的只有一处。**\n\n### 一章小结\n\n- `Agent` 用单飞（`activeRun` 闸门）消灭并发入口，用双队列（steer / followUp）收纳并发输入。\n- 两条队列结构相同，区别只在 drain 时机：steering 每 turn 后 poll，follow-up 在真要停时 poll。\n- `continue()` 的降级链把"队列优先级高于报错"写进控制流；`handleRunFailure` 合成失败消息、补发完整事件序列，保证订阅方永远收到闭合事件流。\n- `waitForIdle()` 是旁观者工具，参与者碰不得（死锁）。\n\n### 为什么不去\n\n> **为什么 steer / followUp 拆成两条，而不是一个 `queueMessage`？** 因为旧名字会撒谎：一个叫 `queue` 的方法，用户期待的是"等 agent 真正结束后按序处理"，但"运行中发来的消息在工具间隙就注入"其实是插队。两种语义共用一个名字，两边都被误解。pi 的选择是把语义显式拆开：`steer()` 打断当前 run（turn 后注入），`followUp()` 等 agent 将要停止才投递。注入管线共用一条（都塞进 `pendingMessages`），但入口名字各自诚实。`prompt()` 的错误信息（`agent.ts:349`）把三条出路一次性报给调用方，也是同一种"别藏决策"的口味。\n\n> **为什么 `abort()` 不做任何时机判断，就是同步按按钮？** 因为 abort 的语义是"这个 run 到此为止"，不是"等一个体面的点"。时机判断意味着 abort 可能被推迟甚至忽略，而停止按钮不能被忽略。`abort()` 就是 `this.activeRun?.abortController.abort()`（`agent.ts:320`），一行。真正决定"多快停"的是下游三方（streamFn、工具、循环自身）多快响应 signal--这是第 1 章"插叙：signal"讲的单向广播。\n\n> **回指**：单飞 + 双队列是 `Agent` 这一组合层的事，循环本体（`runLoop`）对此一无所知--它只看到 `getSteeringMessages` / `getFollowUpMessages` 两个回调。并发正确性从循环拿走，放进了组合层。循环没有变复杂，是组合层把"什么时候轮到谁"管了起来。\n\n### 落地：八股视角\n\n> **Q：短期记忆的载体是什么？对话历史存在哪？**\n>\n> **A：** 八股里的"短期记忆"在 pi 里就是 `Agent` 的状态：`messages` 数组 + `streamingMessage` + `pendingToolCalls`（`agent.ts:72` 起的 `createMutableAgentState`）。`state` 访问器公开只读快照，reducer（`processEvents`）单向更新。短期记忆的"写"全部经过事件归约，没有别的入口——这就是八股说的"记忆要有统一读写接口"的落地。\n\n> **Q：用户正在看 agent 干活时发消息打断，八股怎么处理？**\n>\n> **A：** 八股的朴素答案是加锁或互斥。pi 是"结构性消灭"：`activeRun` 单飞闸门让并发 `prompt()` 直接抛错，打断走 `steer()`（每 turn 后注入），追加走 `followUp()`（真要停时注入）。两个队列结构相同、drain 时机不同。这个设计回答了八股里的经典追问："agent 正在跑，用户插话怎么办？"——不是锁，是入口分流。\n\n> **Q：对话无限增长怎么办？短期记忆的边界在哪？**\n>\n> **A：** 八股的答案是把短期转长期（摘要、存档）。pi 的答案是第 4 章起的会话树 + 第 6 章的压缩：内存数组只是运行时视图，真正的历史在 Entry 树里，压缩时把旧历史收成 compaction entry（summary + retainedTail）。边界由 `shouldCompact` 的减法判定（第 6 章）——"短期"不是时间概念，是窗口概念。\n\n下一章把"窗口"换成"持久"：内存数组一死全没，可持久化的会话结构长什么样？\n\n---\n\n',Jf=`# 第 4 章 · 会话与存储：Entry / Record 双轨

> **模块定位**（八股 05 记忆系统 · 长期记忆 + 12 上下文工程）：八股里的长期记忆通常是向量库、摘要、知识图谱。这一章给另一种工程答案——树形历史 + 操作日志双轨模型，为崩溃恢复而设计。短期记忆（第 3 章）是内存数组，长期记忆（本章）是可持久化的树。

第 3 章的 \`Agent\` 把对话历史放在一个内存数组里（\`agent.ts:72\`），进程一死全没。要支持崩溃恢复，对话必须变成可持久化的结构。这一章讲 harness 层的会话模型--注意：在 \`0df5a69e\` 这个基线上，这套模型已经落地（\`harness/session/*\`），但 harness 的执行方法还没接上它（仍是桩）。所以这一章讲的是"已落地的存储模型"，第 9 章才讲"怎么用它做崩溃恢复"。

### 问题：JSON 存消息不够用

朴素做法是"把消息数组存成 JSON"。但多 lane 并发写时谁先谁后？恢复时怎么知道每条消息的父是谁？pi 的答案：**树（Entry）+ 操作日志（Record）双轨模型**，外加"存储分配顺序字段"的强类型约束。

### 所有权三权分立：调用方只预置 id

会话模型的核心纪律：调用方只负责预置 \`id\`，\`parentId\`、\`seq\`、\`timestamp\` 全部由存储层写入时分配。这件事由类型系统保证--调用方只能传 \`ProvisionedEntry\`（去掉了那三个字段）。存储层用 \`provisionEntry\` 把它们补上：

\`\`\`typescript
// src/harness/session/memory.ts:32
function provisionEntry<TEntry extends Entry>(
	newEntry: ProvisionedEntry<TEntry>,
	parentId: string | null,
	seq: number,
): TEntry {
	// Object spread does not preserve the correlation between a discriminant and the rest of a union member.
	return { ...newEntry, parentId, seq, timestamp: Date.now() } as unknown as TEntry;
}
\`\`\`

注意那行注释--\`Object spread does not preserve the correlation...\`，说的是 TS 的已知坑：对象展开会把判别字段和联合成员的其余字段拆散，所以这里用了 \`as unknown as TEntry\` 的双重断言绕过。注释把"为什么这么写"留在了现场。

**调用方不能传 \`parentId\`，因此"不可能传过期 parent"--这是类型系统级别的保证**，不是运行时检查。\`parentId\` 是追加时 lane 的当前 leaf，\`seq\` 是全局单调递增，\`timestamp\` 是存储写入时刻。三个字段都不归调用方管，并发写时就不会出现"两个调用方各持一个旧 leaf"的错乱。

### appendEntry：一个原子逻辑步

参考后端 \`InMemorySessionStorage\` 的 \`appendEntry\`（文档钦定的基准实现，JSONL/SQLite 只需满足同一接口就复用同一批断言）：

\`\`\`typescript
// src/harness/session/memory.ts:137
async appendEntry<TEntry extends Entry>(newEntry: ProvisionedEntry<TEntry>, lane: string): Promise<TEntry> {
	const parentId = this.requireLane(lane);
	this.validateUnusedId(newEntry.id);
	const clonedEntry = structuredClone(newEntry);
	const entry = provisionEntry(clonedEntry, parentId, this.nextSequence());
	this.usedIds.add(entry.id);
	this.entries.push(entry);
	this.entriesById.set(entry.id, entry);
	this.lanes.set(lane, entry.id);
	this.log.push({ kind: "entry", seq: entry.seq, entry });
	if (entry.type === "message") this.stats.messageCount += 1;
	return structuredClone(entry);
}
\`\`\`

逐行看那个关键不变量：\`parentId\` 取自当前 lane 的 leaf（\`requireLane\`），然后 \`this.lanes.set(lane, entry.id)\` 把 leaf 推进到新条目--**parentId 的赋值和 leaf 的推进在同一个逻辑步里**。如果拆成两步（先赋 parentId，后面再推进 leaf），并发追加就会出现"两条消息链到同一个旧 leaf"的错乱。一个函数、一次调用、一个原子步，不变量就守住了。

注意入参和出参都 \`structuredClone\`（\`:140\`、\`:148\`）：入参 clone 防调用方改半途，出参 clone 保不可变性--存储内部的条目和调用方拿到的副本是两个对象，谁也改不了谁。\`id\` 全库唯一（\`validateUnusedId\`，entry 和 record 共用 id 空间），重复直接抛错。

### view：lane 绑定只能发生在这里

\`Session.view(lane)\` 返回一个"绑死某 lane"的 \`SessionTree\`：读默认到该 lane 的 leaf，追加链到该 lane 的 leaf 并推进它。

\`\`\`typescript
// src/harness/session/session.ts:114
view(lane: string): SessionTree {
	if (lane === "main") return this;
	return {
		getLeafId: () => this.getLeafIdForLane(lane),
		getEntry: (id) => this.getEntry(id),
		getStats: () => this.getStats(),
		getName: () => this.getName(),
		setName: (name) => this.setName(name),
		getLabel: (targetId) => this.getLabel(targetId),
		setLabel: (targetId, label) => this.setLabel(targetId, label),
		findEntries: (query) => this.queryEntries(query),
		findEntry: async (query = {}) => (await this.queryEntries(query, 1))[0],
		findEntriesOnBranch: (query) => this.queryBranchEntries(lane, query),
		findEntryOnBranch: async (query = {}) => (await this.queryBranchEntries(lane, query, 1))[0],
		appendMessage: (message) => this.appendMessageToLane(lane, message),
		appendCustomEntry: (customType, data) => this.appendCustomEntryToLane(lane, customType, data),
	};
}
\`\`\`

\`main\` lane 直接复用 \`Session\` 本身（\`if (lane === "main") return this\`）；其它 lane 返回一个所有方法都闭包了 \`lane\` 的对象。**\`SessionTree\` 接口没有任何带 lane 参数的方法**--绑定只能通过 \`view()\` 发生，一旦绑完，后续所有操作都不用再传 lane。这是把"绑定"这件事收敛到一个点的工程纪律：lane 字符串只出现在 \`view()\` 的参数里，之后消失。

### commitEntry：校验在提交前

\`Session\` 的写都走 \`commitEntry\`，它在校验通过后才委托给存储：

\`\`\`typescript
// src/harness/session/session.ts:272
private async commitEntry<TEntry extends Entry>(entry: ProvisionedEntry<TEntry>, lane: string): Promise<TEntry> {
	assertJsonSerializable(entry);
	return this.storage.appendEntry(entry, lane);
}
\`\`\`

\`assertJsonSerializable\` 是迭代式深校验：栈 + WeakSet 查环，拒绝循环引用、symbol 键、非有限数、稀疏数组、accessor。这件事的意义在于：**Memory / JSONL / SQLite 三个后端接受完全相同的值**。如果允许循环引用偷偷进 Memory，JSONL 后端一序列化就炸；校验前置，三个后端就只面对"已证明可序列化"的输入，后端实现可以假设输入干净。

### 双轨：Entry 是对话，Record 是执行描述

会话里有两类条目，别混：

- **Entry**（树）：对话本身。七种类型--message / model_change / thinking_level_change / active_tools_change / compaction / branch_summary / custom。parentId 链成树。
- **Record**（操作日志，每 lane 一条）：执行描述，**永不进模型上下文**。operation_started / step_attempt / tool_started / queue_enqueued / queue_cancelled / write_deferred / abort_requested / operation_finished / usage。

为什么要分两轨？因为"对话"和"执行的中间状态"是两种东西，生命周期不同。对话要喂给模型、要能分支、要能压缩；执行状态是给崩溃恢复看的，模型不该看到。把它们存在同一棵树里，模型上下文就要过滤一堆不属于它的噪音；分成两轨，上下文重建只读 Entry，恢复归约才读 Record。**树里存什么 ≠ 模型看什么**，第 10 章会把这条原则展开成三层投影。

所有写共享一个单调 \`seq\`：entries、records、lane 移动、facts 统一编号。\`seq\` 是全局顺序的唯一权威--恢复时按 seq 重放，写顺序 = 提交顺序 = 线性化顺序。

### 一章小结

- 会话是 Entry（树，对话）+ Record（日志，执行描述）双轨，共享全局单调 seq。
- 所有权三权分立：调用方预置 id，parentId/seq/timestamp 由存储分配。类型系统保证"不能传过期 parent"。
- \`appendEntry\` 把 parentId 赋值和 leaf 推进放在一个原子逻辑步里；\`view()\` 把 lane 绑定收敛到唯一点；\`commitEntry\` 在提交前深校验可序列化性。
- 树里存什么 ≠ 模型看什么：Entry 进上下文，Record 不进。

### 为什么不去

> **为什么用树（parentId 链）而不是数组？** 因为数组只能表达一种历史，而 agent 需要分支--steering 可能从某个点岔出去、fork 子代理要从某点拷贝。树让"同一个父有多个子"天然成立，分支只是"从某个 leaf 续写"。数组要做分支，就得自己造一套 parentId，最后还是树。pi 直接用树，把"对话可以分叉"写进了数据结构。

> **为什么 \`seq\` 全局单调，而不是每 lane 自增？** 因为恢复时要重放"写顺序 = 提交顺序"，这需要一个跨 lane 的全序。如果每 lane 自增，两个 lane 的写之间就没有可比性，恢复时无法判定谁先谁后。全局 seq 让所有写排成一条线，\`appendEntry\` 的 \`this.nextSequence()\`（\`memory.ts:141\`）就是这条线的下一个位置。

> **回指**：会话模型是 harness 组合层的东西，循环本体对此一无所知。\`Agent\` 还在用内存数组（\`agent.ts:72\`）；这套树 + 日志是给将来的持久化 harness 准备的。循环没变复杂，是组合层多了一层"可持久化的对话形状"。

### 落地：八股视角

> **Q：长期记忆为什么用树而不是数组？**
>
> **A：** 数组只能表达一种历史，树让分支天然成立（steering 岔出去、fork 子代理从某点拷贝）。八股里的"记忆检索"在 pi 对应 \`SessionTree.findEntriesOnBranch\` 等查询方法；"记忆要能回溯"对应 parentId 链。树的代价是查询要沿链走，pi 用 lane 叶子指针 + 分支查询接口把复杂度收住。

> **Q：多路并发写历史，怎么保证不乱？**
>
> **A：** 八股的答案是锁或事务。pi 是结构性的：调用方只能预置 \`id\`，\`parentId\`/\`seq\`/\`timestamp\` 由存储层分配（类型系统禁止传 parentId，\`ProvisionedEntry\`），\`appendEntry\` 把 parentId 赋值和 leaf 推进放在同一个原子逻辑步（\`memory.ts:137\`）。全局单调 \`seq\` 让所有写排成一条线——恢复时重放顺序 = 提交顺序。

> **Q：记忆和对话分离还是合一？**
>
> **A：** 八股常把"记忆"单独建库。pi 的选择是双轨合一：Entry（对话树）和 Record（执行日志）共享同一套存储、同一个 id 空间和 seq，但 Record 永不进模型上下文。好处是崩溃恢复和对话在同一份数据上重放，坏处是模型上下文要过滤（第 10 章的三层投影）。"树里存什么 ≠ 模型看什么"就是这个取舍的总结。

下一章暂时离开会话，讲这些存储和工具共同依赖的地基：文件系统与 shell 的环境抽象。

---

`,Yf=`# 第 5 章 · 环境抽象：FileSystem / Shell

> **模块定位**（八股 08 工程化实践）：八股的工程化篇讲模型路由、错误处理、可观测性、部署。这一章聚焦"后端无关"这一件：文件系统和 shell 怎么被抽象成能力接口，错误怎么编码成稳定错误码——这是 agent 系统能跑在不同运行时（Node / Bun / 浏览器）的地基。

工具（read / write / edit / bash）要碰文件系统和 shell。如果它们直接 \`import node:fs\`，这套代码就永远锁死在 Node 上--Bun、浏览器、worker 全用不了。pi 的答案：定义**后端无关的能力接口**（\`FileSystem\` + \`Shell\` = \`ExecutionEnv\`），所有工具只依赖接口；Node 实现单独一个文件，单独一个入口（第 0 章引过的 \`./node\`）。

### 接口永不 throw，失败编码进 Result

\`ExecutionEnv\` 的所有方法返回 \`Result\`，约定"must never throw or reject"。这是"后端无关性"的钥匙--工具层只认 \`FileErrorCode\`，不认 Node 的 \`ENOENT\` / \`EACCES\`。换一个后端（浏览器/worker），只需换一张错误映射表。映射发生在 \`toFileError\`：

\`\`\`typescript
// src/harness/env/nodejs.ts:96
function toFileError(error: unknown, path?: string): FileError {
	if (error instanceof FileError) return error;
	const cause = toError(error);
	if (isNodeError(error)) {
		const message = error.message;
		switch (error.code) {
			case "ABORT_ERR":
				return new FileError("aborted", message, path, cause);
			case "ENOENT":
				return new FileError("not_found", message, path, cause);
			case "EACCES":
			case "EPERM":
				return new FileError("permission_denied", message, path, cause);
			case "ENOTDIR":
				return new FileError("not_directory", message, path, cause);
			case "EISDIR":
				return new FileError("is_directory", message, path, cause);
			case "EINVAL":
				return new FileError("invalid", message, path, cause);
		}
	}
	return new FileError("unknown", cause.message, path, cause);
}
\`\`\`

\`FileErrorCode\` 一共 8 个：aborted / not_found / permission_denied / not_directory / is_directory / invalid / not_supported / unknown（类型定义 \`harness/types.ts:132\`）。Node 的 errno 被翻译成这 8 个里的一个；已经是 \`FileError\` 的直接透传（\`:97\`）；兜底是 \`unknown\`（\`:117\`）--**未知错误也编码进 Result，绝不 throw**。这和第 0 章 \`StreamFn\` 的"失败编码进流"、第 2 章工具执行的"异常编码进 result"是同一条哲学，一以贯之：**边界上不抛异常，把失败变成值。**

### shell：跨平台暗礁

\`Shell.exec\` 要处理 spawn、超时、进程树、stdio 生命周期，还要跨平台找 shell。最后这件事有几个暗礁。\`MAX_TIMEOUT_MS\` 上限是 32 位：

\`\`\`typescript
// src/harness/env/nodejs.ts:33
const MAX_TIMEOUT_MS = 2_147_483_647;
\`\`\`

\`setTimeout\` 的 32 位上限，超过这个数行为未定义，所以显式封顶。shell 发现和 WSL 遗留路径是另两个暗礁：

\`\`\`typescript
// src/harness/env/nodejs.ts:189
function getBashShellConfig(shell: string): ShellConfig {
	return isLegacyWslBashPath(shell) ? { shell, args: ["-s"], commandTransport: "stdin" } : { shell, args: ["-c"] };
}
\`\`\`

WSL 旧版的 \`C:\\Windows\\System32\\bash.exe\` 用 \`["-s"]\` + **stdin 传输**命令，其余用 \`["-c"]\` argv 传输。argv 传输避免引号转义问题，stdin 服务 WSL 旧版--两种传输方式各修一个坑。shell 发现（\`nodejs.ts:189\` 起）在 win32 依次试 Git Bash、PATH 上的 bash，全失败给带安装指引的 \`shell_unavailable\`；POSIX 试 \`/bin/bash\` -> PATH -> \`sh -c\`。

\`\`\`typescript
// src/harness/env/nodejs.ts:193（折叠 customShellPath 分支；其余逐行保真）
async function getShellConfig(customShellPath?: string): Promise<Result<ShellConfig, ExecutionError>> {
	// ...（折叠：customShellPath 分支——自定义 shell 路径存在则直返配置，否则 shell_unavailable）
	if (process.platform === "win32") {
		const candidates: string[] = [];
		const programFiles = process.env.ProgramFiles;
		if (programFiles) candidates.push(\`\${programFiles}\\\\Git\\\\bin\\\\bash.exe\`);
		const programFilesX86 = process.env["ProgramFiles(x86)"];
		if (programFilesX86) candidates.push(\`\${programFilesX86}\\\\Git\\\\bin\\\\bash.exe\`);
		for (const candidate of candidates) {
			if (await pathExists(candidate)) {
				return ok(getBashShellConfig(candidate));
			}
		}
		const bashOnPath = await findBashOnPath();
		if (bashOnPath) {
			return ok(getBashShellConfig(bashOnPath));
		}
		return err(
			new ExecutionError(
				"shell_unavailable",
				\`No bash shell found. Options:\\n\` +
					\`  1. Install Git for Windows: https://git-scm.com/download/win\\n\` +
					\`  2. Add your bash to PATH (Cygwin, MSYS2, etc.)\\n\` +
					"  3. Configure an explicit shellPath\\n\\n" +
					\`Searched Git Bash in:\\n\${candidates.map((path) => \`  \${path}\`).join("\\n")}\`,
			),
		);
	}

	if (await pathExists("/bin/bash")) {
		return ok(getBashShellConfig("/bin/bash"));
	}
	const bashOnPath = await findBashOnPath();
	if (bashOnPath) {
		return ok(getBashShellConfig(bashOnPath));
	}
	return ok({ shell: "sh", args: ["-c"] });
}
\`\`\`

进程树是另一个容易踩的坑：spawn 用 \`detached\`，POSIX 用 \`process.kill(-pid)\` 杀进程组（负号依赖 detached），win32 用 \`taskkill /F /T\`。**不杀进程组，子进程变孤儿继续跑**--这不是细节，是正确性。

\`\`\`typescript
// src/harness/env/nodejs.ts:250
function killProcessTree(pid: number): void {
	if (process.platform === "win32") {
		try {
			spawn("taskkill", ["/F", "/T", "/PID", String(pid)], {
				stdio: "ignore",
				detached: true,
				windowsHide: true,
			});
		} catch {
			// Ignore errors.
		}
		return;
	}

	try {
		process.kill(-pid, "SIGKILL");
	} catch {
		try {
			process.kill(pid, "SIGKILL");
		} catch {
			// Process already dead.
		}
	}
}
\`\`\`

\`\`\`typescript
// src/harness/env/nodejs.ts:414（折叠 exec 前后段；其余逐行保真）
				// ...（折叠：exec 前半段——settle 闭包、stdout/stderr 收集与超时变量）
				const commandFromStdin = shellConfig.value.commandTransport === "stdin";
				child = spawn(
					shellConfig.value.shell,
					commandFromStdin ? shellConfig.value.args : [...shellConfig.value.args, command],
					{
						cwd,
						detached: process.platform !== "win32",
						env: getShellEnv(this.shellEnv, options?.env, options?.inheritEnv),
						stdio: [commandFromStdin ? "pipe" : "ignore", "pipe", "pipe"],
						windowsHide: true,
					},
				);
				if (child.pid) this.activeChildPids.add(child.pid);
				// ...（折叠：exec 后半段——stdin 写命令、超时回调 killProcessTree、close 结算）
\`\`\`

### 一章小结

- \`ExecutionEnv = FileSystem & Shell\`，所有方法返回 Result，永不 throw。错误映射在 \`toFileError\`，把 Node errno 翻译成 8 个稳定错误码。
- shell 实现处理超时上限、跨平台 shell 发现、WSL 遗留路径、进程树清理。
- 后端无关性让工具代码（read/write/edit/bash）可移植：换后端只换映射表和实现，工具不动。

### 为什么不去

> **为什么工具不直接 \`import node:fs\`？** 因为那样工具就锁死在 Node 上了。pi 的核心（\`src/\`）要能跑在浏览器里（\`src/proxy.ts\` 就是为此准备的），而文件/shell 是 Node 才有的能力。把能力抽象成接口、把 Node 实现隔离到 \`./node\` 入口，工具就只依赖接口形状--同一个 \`createReadTool\` 在 Node 下读真文件，在测试里读内存 mock，在浏览器里根本不加载（因为不从 \`./node\` 进）。这是第 0 章"拒绝四"的落地：核心不碰运行时 API。

> **为什么错误要编码成 8 个码，而不是直接抛 errno？** 因为 errno 是 Node 特有的，Bun/浏览器没有 \`ENOENT\`。如果工具层认 errno，换后端就得改工具。编码成稳定的 \`FileErrorCode\`，工具层只认"not_found"这个语义，不认它来自哪个后端的哪个 errno。\`toFileError\` 是唯一的翻译点--换后端只改这一处。

> **回指**：\`ExecutionEnv\` 是组合层的能力接口，循环本体不碰它（循环只见 \`AgentTool\`，工具才见 \`ExecutionEnv\`）。可移植性是组合层的事，循环没变复杂。

### 落地：八股视角

> **Q：八股说工程化要考虑可观测性和错误处理，pi 的错误处理范式是什么？**
>
> **A：** 一以贯之的一句话：**边界上不抛异常，把失败变成值**。\`StreamFn\` 契约（失败编码进流）、\`ExecutionEnv\` 的 Result（永不 throw）、工具执行的异常捕获（编码进 result）、\`TaggedError\`（第 8 章）——四个层次同一个哲学。八股面试答"错误处理怎么设计"，这套"边界即值"的范式可以直接搬。

> **Q：换后端（Node → 浏览器）要改多少代码？**
>
> **A：** 工具层一行不改。工具只认 \`ExecutionEnv\` 接口和 8 个 \`FileErrorCode\`；Node errno → \`FileErrorCode\` 的映射只在 \`toFileError\`（\`env/nodejs.ts:96\`）一处。浏览器实现只要满足同一接口（不 throw、返回 Result），工具代码原样复用。这就是八股"面向接口编程"的实操：接口形状 + 错误码表 = 可移植边界。

> **Q：shell 执行为什么这么难？**
>
> **A：** 八股通常不提这层，但它是生产事故高发区：\`setTimeout\` 的 32 位上限（\`MAX_TIMEOUT_MS\`）、WSL 旧版要 \`-s\` + stdin 传命令、进程树不杀会留孤儿进程（POSIX \`kill(-pid)\` / win32 \`taskkill /F /T\`）。面试被问"agent 的 bash 工具怎么实现"，能讲出这三个坑就比背模板强。

下一章回到上下文：窗口装不下了，pi 的压缩怎么切、怎么重建、怎么增量。

---

`,Xf=`# 第 6 章 · 上下文压缩：自包含 checkpoint

> **模块定位**（八股 12 上下文工程）：八股的上下文工程篇有专门的"上下文压缩"考点——截断 vs 摘要、KV 缓存失效、窗口溢出怎么办。这一章是 pi 的完整答案：触发判定、切点选择、自包含 checkpoint、增量更新、反应式触发，一个不少。

上下文窗口有限。读 30 个文件、跑 20 条命令轻松突破 100k token。朴素方案是"截断旧消息"--但截断后模型失去上下文、KV 缓存被破坏。pi 的答案：**compaction entry 是自包含 checkpoint**（summary + 物化 retainedTail），上下文投影从最新 compaction 开始，之前的历史在投影层丢弃，且连续压缩只做增量更新。

### 触发：一个减法

什么时候该动手压缩？pi 的答案短得只有两行：

\`\`\`typescript
// src/harness/compaction/compaction.ts:247
/** Return whether context usage exceeds the configured compaction threshold. */
export function shouldCompact(contextTokens: number, contextWindow: number, settings: CompactionSettings): boolean {
	if (!settings.enabled) return false;
	return contextTokens > contextWindow - settings.reserveTokens;
}
\`\`\`

注释把意图写得很干净：返回"上下文用量是否超过配置的压缩阈值"。函数体只做一件事--一个减法。\`contextWindow - settings.reserveTokens\` 是"真正能用的窗口"：\`contextWindow\` 是模型宣称的容量，\`reserveTokens\` 是给压缩这件事自己留的预算。为什么要留预算？因为压缩本身要调一次模型做摘要，那次摘要请求有自己的 prompt 和输出，挤不进即将爆满的窗口。所以阈值不是顶到窗口上沿，而是提前一个 \`reserveTokens\` 的身位踩刹车。

\`if (!settings.enabled) return false\` 是唯一的短路。压缩是可以被宿主关掉的--有些场景宁可溢出报错也不要摘要损失精度。**关掉压缩不是关掉问题，是把问题挪到别处去解**（见后文"反应式触发"）。

注意这个函数不知道"token 是怎么算出来的"--\`contextTokens\` 是个传进来的数。真正的估算在隔壁的 \`estimateContextTokens\`（\`compaction.ts:216\`），优先用最近一次 assistant 消息自带的 provider usage（真实且免费），拿不到才回退字符粗估（\`chars / 4\`，图片按 4800 字符计）。

\`\`\`typescript
// src/harness/compaction/compaction.ts:252
const ESTIMATED_IMAGE_CHARS = 4800;

// src/harness/compaction/compaction.ts:254
function estimateTextAndImageContentChars(content: string | Array<{ type: string; text?: string }>): number {
	if (typeof content === "string") {
		return content.length;
	}

	let chars = 0;
	for (const block of content) {
		if (block.type === "text" && block.text) {
			chars += block.text.length;
		} else if (block.type === "image") {
			chars += ESTIMATED_IMAGE_CHARS;
		}
	}
	return chars;
}

// src/harness/compaction/compaction.ts:271
export function estimateTokens(message: AgentMessage): number {
	let chars = 0;

	switch (message.role) {
		case "user": {
			chars = estimateTextAndImageContentChars(
				(message as { content: string | Array<{ type: string; text?: string }> }).content,
			);
			return Math.ceil(chars / 4);
		}
		case "assistant": {
			const assistant = message as AssistantMessage;
			for (const block of assistant.content) {
				if (block.type === "text") {
					chars += block.text.length;
				} else if (block.type === "thinking") {
					chars += block.thinking.length;
				} else if (block.type === "toolCall") {
					chars += block.name.length + safeJsonStringify(block.arguments).length;
				}
			}
			return Math.ceil(chars / 4);
		}
		case "custom":
		case "toolResult": {
			chars = estimateTextAndImageContentChars(message.content);
			return Math.ceil(chars / 4);
		}
		case "bashExecution": {
			chars = message.command.length + message.output.length;
			return Math.ceil(chars / 4);
		}
		case "branchSummary":
		case "compactionSummary": {
			chars = message.summary.length;
			return Math.ceil(chars / 4);
		}
	}

	return 0;
}
\`\`\`

**触发判定和 token 估算解耦**：估算策略可以单独演进，触发逻辑只认一个数。这也是为什么 \`shouldCompact\` 能这么短--它把所有麻烦都推给了调用方，自己只回答"这个数够不够大"。

### 切点：toolResult 不可切

\`shouldCompact\` 说"该压了"，那从哪里切？\`findCutPoint\` 从尾部累计 token，找到"保留最近 \`keepRecentTokens\` 个 token"的合法切点：

\`\`\`typescript
// src/harness/compaction/compaction.ts:374
export function findCutPoint(
	entries: Entry[],
	startIndex: number,
	endIndex: number,
	keepRecentTokens: number,
): CutPointResult {
	const cutPoints = findValidCutPoints(entries, startIndex, endIndex);

	if (cutPoints.length === 0) {
		return { firstKeptEntryIndex: startIndex, turnStartIndex: -1, isSplitTurn: false };
	}
	let accumulatedTokens = 0;
	let cutIndex = cutPoints[0];

	for (let i = endIndex - 1; i >= startIndex; i--) {
		const entry = entries[i];
		if (entry.type !== "message") continue;
		const messageTokens = estimateTokens(entry.message as AgentMessage);
		accumulatedTokens += messageTokens;
		if (accumulatedTokens >= keepRecentTokens) {
			for (let c = 0; c < cutPoints.length; c++) {
				if (cutPoints[c] >= i) {
					cutIndex = cutPoints[c];
					break;
				}
			}
			break;
		}
	}
	while (cutIndex > startIndex) {
		const prevEntry = entries[cutIndex - 1];
		if (prevEntry.type === "compaction") {
			break;
		}
		if (prevEntry.type === "message") {
			break;
		}
		cutIndex--;
	}
	const cutEntry = entries[cutIndex];
	const isUserMessage = cutEntry.type === "message" && cutEntry.message.role === "user";
	const turnStartIndex = isUserMessage ? -1 : findTurnStartIndex(entries, cutIndex, startIndex);

	return {
		firstKeptEntryIndex: cutIndex,
		turnStartIndex,
		isSplitTurn: !isUserMessage && turnStartIndex !== -1,
	};
}
\`\`\`

合法切点 = message 条目与 branch_summary；**toolResult 不可切**（它属于某个轮次，切在它中间会让工具结果与调用分离）。\`findValidCutPoints\` 只返回这些合法点，\`findCutPoint\` 在它们里挑。从尾部累计 token（\`:388\` 的倒序 for），攒够 \`keepRecentTokens\` 就停，然后回退到最近一个合法切点。

切点不是 user 消息时，\`isSplitTurn\` 为 true--本轮被从中间切开。这时定位本轮起点（\`findTurnStartIndex\`），本轮前缀单独摘要。**split-turn 是"切点刚好落在轮次中间"的诚实处理**：宁可多摘要一段前缀，也不把一个轮次劈成两半喂给模型。

### 重建：永远不读 compaction 之前

压缩完，历史变成一个 compaction entry（自带 summary + 物化 retainedTail）。下一次重建上下文时，从最新 compaction 开始，之前的一律不读：

\`\`\`typescript
// src/harness/session/context.ts:45
export function defaultContextEntryTransform(pathEntries: readonly Entry[]): Entry[] {
	let compaction: CompactionEntry | undefined;
	let compactionIndex = -1;
	for (let index = pathEntries.length - 1; index >= 0; index--) {
		const entry = pathEntries[index]!;
		if (entry.type === "compaction") {
			compaction = entry;
			compactionIndex = index;
			break;
		}
	}
	return compaction === undefined ? [...pathEntries] : [compaction, ...pathEntries.slice(compactionIndex + 1)];
}
\`\`\`

从后往前找最新 compaction 条目（\`:49\` 的倒序 for），命中则只输出 \`[compaction, ...其后条目]\`。compaction entry 自带 summary + 物化 retainedTail -> 自包含 checkpoint，**它之前的整段历史在投影层被丢弃（不是删文件，是不读）**。没找到 compaction 就原样返回全部--第一次压缩前的会话，上下文就是完整路径。

### 连续压缩 = 增量更新

第二次压缩时，会不会把已经摘要过的内容再摘要一遍？不会。\`prepareCompaction\`（\`compaction.ts:616\`）会找到上个 compaction，取它的 summary 作 \`previousSummary\`，把它的 retainedTail 物化成"虚拟条目"拼回路径--这样切点计算看到的是"上次保留的最近消息 + 新消息"，摘要只处理增量。**连续压缩是增量更新，不是每次重压全部。**

这和 \`defaultContextEntryTransform\` 是配套的：重建只读最新 compaction 之后，所以旧 compaction 的 summary 不在上下文里；但增量压缩需要它作 \`previousSummary\`，所以 \`prepareCompaction\` 专门把它取出来用。一个负责"模型看什么"，一个负责"摘要从哪接续"--两套逻辑，各取所需。

### 摘要请求故意不碰 KV 缓存

摘要请求用 \`cacheRetention: "none"\` + 新 sessionId（\`compaction.ts:113\`）。

\`\`\`typescript
// src/harness/compaction/compaction.ts:110
	// Summaries are standalone requests, so isolate routing and avoid cache writes that cannot be reused.
	const requestOptions: SimpleStreamOptions = {
		...options,
		cacheRetention: "none",
		sessionId: uuidv7(),
	};
\`\`\`

摘要是一次性文本，不值得污染缓存，也避免与主对话缓存交错。这是个反直觉但合理的取舍：**摘要请求主动放弃缓存红利**，换主对话的 KV 缓存只在 compaction 边界失效一次（append-only 不变量）。

### 反应式触发：overflow

阈值触发是主动的；还有一种反应式触发：provider 返回 overflow 错误，或 \`length\` stop 低于预期输出上限 -> 判定"可恢复的上下文压力" -> 丢弃响应（永不成为 entry，但 usage record 已落盘）-> 压缩 -> 重试一次。设计文档（\`harness-v2.md:461\`）写明了判别逻辑：\`desiredMaxOutput\` 是调用方的 \`maxTokens ?? model.maxTokens\`（发送值不能作参考--有的 provider 拒绝显式上限，Codex 对 \`max_output_tokens\` 返 400）。达到预期上限 = 真·输出截断（压缩无用）；低于预期 = 上下文压力（压缩有效）。每会话输入只恢复一次，防 length->length 循环。

### 一章小结

- 触发是一个减法（\`shouldCompact\`）：\`contextTokens > contextWindow - reserveTokens\`。触发判定和 token 估算解耦。
- 切点（\`findCutPoint\`）：toolResult 不可切，切在轮次中间则 split-turn 单独摘要前缀。
- 重建（\`defaultContextEntryTransform\`）：从最新 compaction 开始，之前一律不读。compaction 是自包含 checkpoint。
- 连续压缩 = 增量更新：物化上个 compaction 的 retainedTail 作虚拟条目，摘要只处理增量。
- 反应式触发：overflow / 低于预期的 length -> 丢弃响应 -> 压缩 -> 重试一次。

### 为什么不去

> **为什么不直接截断旧消息？** 因为截断是信息丢失--模型彻底失去早期上下文，且 KV 缓存在插入点失效。compaction entry 保留 summary（要点）+ 物化 retainedTail（最近消息），是"换一个自包含的摘要节点"，不是"删旧消息"。重建从 compaction 开始，之前的不读但不删（还在树里，分支/导出用得上）。**截断是不可逆的信息破坏，compaction 是可逆的视角切换。**

> **为什么 \`shouldCompact\` 用"已用 > 窗口减预留"，而不是"剩余 < 阈值"？** 因为"剩余"需要一个权威的"总量"，而 provider 报的 \`contextWindow\` 是个会撒谎的数（有的厂商把系统提示算进去、有的不算）。把判断建立在"已用"上，\`contextWindow\` 只作为一个被减数参与一次，哪怕它不准，误差也只影响踩刹车的早晚，不影响"该不该踩"这个二值判断。把"剩余"当判据，则要求 \`contextWindow\` 全程精确--一次估算漂移，"剩余"就失真。pi 选了对噪声更鲁棒的那个方向。

> **回指**：压缩是组合层（harness）的东西，循环本体对此一无所知。\`Agent\`（路线 A）不做压缩；压缩在 harness 层，靠 \`shouldStopAfterTurn\` 停在这一圈、宿主压缩、开新 run，或靠 \`prepareNextTurn\` 在 run 内换上下文。循环没变复杂，是组合层把"上下文装不下时怎么办"管了起来。

### 落地：八股视角

> **Q：上下文压缩：截断还是摘要？**
>
> **A：** 八股的经典考点。pi 的答案是都不纯：summary（保要点）+ 物化 retainedTail（保最近消息）合成一个自包含 compaction entry，重建从它开始、之前不读。截断是不可逆的信息破坏，compaction 是可逆的视角切换——这句可以直接当面试答案。

压缩决策的完整链路用一段注释代码串起来（教学示意，非源码，行号见本章正文）：

\`\`\`typescript
// 压缩四步 ── 对应八股：窗口不够用时的完整应对链
async function maybeCompact(session: Session, opts: CompactionOpts): Promise<void> {
	// 第 1 步：触发判定（一个减法，compaction.ts:247）
	// 已用 > 窗口 - 预留。预留是给摘要请求自己留的预算，防止摘要时溢出
	if (!shouldCompact(countTokens(session), opts.window, opts.reserve)) return;

	// 第 2 步：找切点（compaction.ts:374）
	// toolResult 不可切（会把工具结果与调用拆开）；切在轮次中间则 split-turn 单独摘要前缀
	const cut = findCutPoint(session.entries, opts.keepRecentTokens);

	// 第 3 步：生成摘要（调一次模型，cacheRetention: none）
	// 摘要请求主动放弃缓存红利，避免与主对话 KV 缓存交错
	const summary = await summarize(session.pathSlice(cut.turnStartIndex, cut.cutIndex));

	// 第 4 步：写入 compaction entry（自包含 checkpoint）
	// summary + 物化 retainedTail；下次重建上下文从它开始，之前的历史不读（但不删）
	await session.appendEntry({ type: "compaction", summary, retainedTail: session.retainedTail() });
}
\`\`\`

四步对应八股的四个考点：什么时候压（触发）、从哪切（切点合法性）、压成什么（摘要 + 保留尾巴）、压完怎么用（投影层不读旧历史）。

> **Q：压缩会不会破坏 KV 缓存？**
>
> **A：** 会，所以 pi 把失效收敛到一点：append-only 不变量让缓存只在 compaction 边界失效一次；摘要请求主动放弃缓存红利（\`cacheRetention: "none"\` + 新 sessionId），不污染主对话缓存。八股问"KV Cache 友好设计"，这条"主动放弃 vs 被动失效"的取舍是加分项。

> **Q：窗口溢出（overflow）怎么办？**
>
> **A：** 八股说"增加窗口或压缩"。pi 的反应式触发更细：provider 返回 overflow 或 \`length\` stop 低于预期输出上限 → 判定"可恢复的上下文压力" → 丢弃响应（永不成为 entry，但 usage 已落盘）→ 压缩 → 重试一次。"发送值不能作参考"（\`desiredMaxOutput\`）这个细节是八股没有的：达到预期上限 = 真截断（压缩无用），低于预期 = 上下文压力（压缩有效）。

下一章看一个具体的 Coding Agent 工具：edit 的两级匹配算法。

---

`,Zf=`# 第 7 章 · 编辑算法：精确到模糊的两级匹配

> **模块定位**（八股 13 Coding-Agent）：八股的 Coding Agent 篇讲工具设计、代码生成策略、上下文管理。这一章是"工具设计"的精细案例：一个 edit 工具怎么做到"模型给的 oldText 有小偏差也能改对，但模型没让改的字符一个不动"。

\`edit\` 工具要让模型精确改文件：给 oldText/newText，找到并替换。但模型输出的 oldText 常带小偏差--智能引号、破折号、行尾空格。纯精确匹配会失败；无脑模糊匹配会把整个文件归一化重写--模型没让改的字符也被"修"了。pi 的答案：**精确优先、模糊兜底，模糊时只重写被触及的行**。

### 两级匹配：先精确，再 NFKC

先想清楚调用现场：\`edit\` 工具收到模型给的 oldText 后，要在整个文件内容里找到它并替换。谁来负责"找到"？就是 \`fuzzyFindText\`——它回答"oldText 在 content 里的什么位置"，回答不了就老实说没找到。它逻辑朴素到只有两步，先精确、后模糊：

\`\`\`typescript
// src/harness/tools/edit-diff.ts:203
export function fuzzyFindText(content: string, oldText: string): FuzzyMatchResult {
	// Try exact match first
	const exactIndex = content.indexOf(oldText);
	if (exactIndex !== -1) {
		return {
			found: true,
			index: exactIndex,
			matchLength: oldText.length,
			usedFuzzyMatch: false,
			contentForReplacement: content,
		};
	}

	// Try fuzzy match - work entirely in normalized space
	const fuzzyContent = normalizeForFuzzyMatch(content);
	const fuzzyOldText = normalizeForFuzzyMatch(oldText);
	const fuzzyIndex = fuzzyContent.indexOf(fuzzyOldText);

	if (fuzzyIndex === -1) {
		return {
			found: false,
			index: -1,
			matchLength: 0,
			usedFuzzyMatch: false,
			contentForReplacement: content,
		};
	}

	// When fuzzy matching, return offsets in normalized space. Callers can use
	// the normalized content to compute replacements, then decide how much of
	// that normalized output should be written back.
	return {
		found: true,
		index: fuzzyIndex,
		matchLength: fuzzyOldText.length,
		usedFuzzyMatch: true,
		contentForReplacement: fuzzyContent,
	};
}
\`\`\`

第一步 \`indexOf\` 精确匹配，命中即返回，\`contentForReplacement\` 是原文（\`:212\`）--精确命中时，写回的就是原文，不动其它字节。第二步归一化后匹配（\`normalizeForFuzzyMatch\` 做 NFKC：trimEnd、智能引号->ASCII、破折号->连字符、特殊空格->普通空格），命中则返回**归一化空间**的坐标，\`contentForReplacement\` 是归一化后的内容（\`:239\`）。

\`\`\`typescript
// src/harness/tools/edit-diff.ts:30
export function normalizeForFuzzyMatch(text: string): string {
	return (
		text
			.normalize("NFKC")
			// Strip trailing whitespace per line
			.split("\\n")
			.map((line) => line.trimEnd())
			.join("\\n")
			// Smart single quotes → '
			.replace(/[\\u2018\\u2019\\u201A\\u201B]/g, "'")
			// Smart double quotes → "
			.replace(/[\\u201C\\u201D\\u201E\\u201F]/g, '"')
			// Various dashes/hyphens → -
			// U+2010 hyphen, U+2011 non-breaking hyphen, U+2012 figure dash,
			// U+2013 en-dash, U+2014 em-dash, U+2015 horizontal bar, U+2212 minus
			.replace(/[\\u2010\\u2011\\u2012\\u2013\\u2014\\u2015\\u2212]/g, "-")
			// Special spaces → regular space
			// U+00A0 NBSP, U+2002-U+200A various spaces, U+202F narrow NBSP,
			// U+205F medium math space, U+3000 ideographic space
			.replace(/[\\u00A0\\u2002-\\u200A\\u202F\\u205F\\u3000]/g, " ")
	);
}
\`\`\`


注意 \`:231\` 那段注释--"return offsets in normalized space. Callers can use the normalized content to compute replacements, then decide how much of that normalized output should be written back." 这句话是整个算法的命门：模糊命中后，归一化空间和原文空间是两个不同的字符串，调用方要决定"写回多少归一化输出"。这个决定就是下一节"不变行保护"。

### 不变行保护：模糊只重写被触及的行

如果模糊命中就整文写回归一化内容，模型没让改的字符（比如某行的智能引号）也会被悄悄"修"成 ASCII。pi 的 \`applyReplacementsPreservingUnchangedLines\`（\`edit-diff.ts:128\`）解决这个：它把每个替换按命中行号分组，组内用归一化内容做替换，组间从原文原样复制未变行。效果是模糊匹配只在被触及的行上生效，其余行字节级不动。

前置条件是归一化前后行数必须一致（否则无法按行回填）。这是"模型没让改的字符，不会被修"的字面落地：模糊匹配的副作用被限制在命中行内，不会扩散到整文。

### 唯一性校验：防模型幻觉的护栏

定位的问题解决了，还差一个安全网：oldText 在文件里出现多次时，"找到"就不再唯一，替换哪个？pi 的答案是宁可让模型重发，也不猜。校验用的就是 \`countOccurrences\`——数 oldText 在文件里出现几次。它刻意在归一化空间计数，和模糊匹配用同一套尺子，避免"精确空间数出来 1 次、模糊空间却匹配多处"的漏网：

\`\`\`typescript
// src/harness/tools/edit-diff.ts:248
function countOccurrences(content: string, oldText: string): number {
	const fuzzyContent = normalizeForFuzzyMatch(content);
	const fuzzyOldText = normalizeForFuzzyMatch(oldText);
	return fuzzyContent.split(fuzzyOldText).length - 1;
}
\`\`\`

\`split(...).length - 1\` 是数子串出现次数的惯用法。\`countOccurrences > 1\` 时报 duplicate 错误（"Please provide more context"）--oldText 在文件里不唯一，模型必须给更多上下文才能定位。这是防模型幻觉的工程化护栏：模型给的 oldText 太短、匹配多处时，宁可让模型重发，也不猜一个替换。多 edit 按 matchIndex 排序后还有重叠检测，重叠则提示"Merge them into one edit"。

### 行尾与 BOM 全程外置

最后一个容易被忽视的坑：文件不一定是你以为的纯文本——Windows 文件带 CRLF 行尾，有些文件开头藏一个 BOM 字节（UTF-8 签名）。如果算法直接处理，"找不到"的错误会莫名其妙。pi 的做法是在最外层先把 BOM 剥掉，算法结束后再拼回：

\`\`\`typescript
// src/harness/tools/edit-diff.ts:244
export function stripBom(content: string): { bom: string; text: string } {
	return content.startsWith("\uFEFF") ? { bom: "\uFEFF", text: content.slice(1) } : { bom: "", text: content };
}
\`\`\`

\`normalizeToLF\` 抹平 CRLF，最终 \`restoreLineEndings\` 恢复原风格，BOM 由 \`edit.ts\` 拼接--**算法层不感知行尾差异和 BOM**。这意味着一个 CRLF + BOM 的 Windows 文件，编辑后行尾和 BOM 都保持原样，算法只在"内容"上工作。

### 一章小结

- 两级匹配：\`indexOf\` 精确优先，失败则 NFKC 归一化模糊兜底。
- 不变行保护：模糊命中时只重写被触及的行，未变行从原文原样复制--模型没让改的字符不会被修。
- 唯一性校验（\`countOccurrences\`）：oldText 不唯一报 duplicate，防模型幻觉。
- 行尾/BOM 全程外置，算法层只在内容上工作。

### 为什么不去

> **为什么不无脑归一化整文？** 因为归一化是破坏性的--它会把模型没碰的智能引号也改成 ASCII。模型说"把这一行的 foo 改成 bar"，文件里另一行的智能引号不该被顺带"修"了。整文归一化省事，但修改范围超出了模型的意图。pi 用"精确优先 + 模糊只重写命中行"把修改范围严格限制在模型触及的行内--多花了一层"不变行保护"的复杂度，换来的是修改的精确性。这是"修改 = 模型意图"的工程化保证。

> **为什么不直接用正则替换？** 因为正则的元字符会和老文本里的特殊字符冲突--oldText 里有个 \`.\` 或 \`*\`，正则就解释成通配。\`indexOf\` 是字面匹配，没有元字符问题。模糊路径也是在归一化后的字符串上 \`indexOf\`，不是正则。pi 全程避开了正则，用字面匹配 + 归一化，把"匹配"这件容易出意外的事降到最朴素。

> **回指**：编辑算法是工具层的实现细节，循环本体只见 \`AgentTool\` 的 \`execute()\`。算法再精细，也是组合层（工具）的事，循环没变复杂。

### 落地：八股视角

> **Q：Coding Agent 的工具设计，最怕什么？**
>
> **A：** 八股会说"工具的边界要清晰、错误要可恢复"。pi 的 edit 给出了具体答案：模型输出不可靠是常态（智能引号、破折号、行尾空格），所以工具要"宽容输入、严格输出"——精确匹配优先，NFKC 归一化兜底，但模糊只重写被触及的行，模型没让改的字符一个不动。修改范围 = 模型意图，这是工具设计的原则。

> **Q：模型给的 oldText 不唯一怎么办？**
>
> **A：** 八股的答案是"让模型重发"。pi 用 \`countOccurrences\` 在归一化空间计数，\`> 1\` 就报 duplicate 错误让模型提供更多上下文；多 edit 重叠检测后提示合并。宁可拒绝也不猜——这是防模型幻觉的工程化护栏，也是 Coding Agent 工具设计的通用原则：**工具的职责是保护文件，不是迁就模型**。

> **Q：编辑工具的常见实现坑？**
>
> **A：** 三个：一是别用正则替换（元字符冲突），用字面匹配 + 归一化；二是行尾（CRLF）和 BOM 要全程外置，算法层只在内容上工作；三是模糊匹配要在归一化空间算坐标、在原文空间写回（\`contentForReplacement\` 的区分）。这三点八股不讲，但面试"实现一个 edit 工具"时是硬核细节。

下一章转入路线 B：\`AgentHarness\` 的契约与错误体系。

---

`,em='# 第 8 章 · Harness 契约：状态机与错误体系\n\n> **模块定位**（八股 18 Harness 工程）：八股的 Harness 篇把 harness 定义为"agent 运行的外壳"——错误处理、重试、可观测性都归它管。这一章讲 pi 的 harness 契约：预期失败和框架缺陷怎么分层，错误怎么跨边界传输，执行过程为什么不是显式状态机。\n\n这一章和下一章讲路线 B（`AgentHarness`）。再强调一次：在 `0df5a69e` 这个基线上，harness 是"类型完整、行为未完成"的桩（`harness-v2.md:2887`）。这两章讲它的**契约**（能被怎样调用、拒绝什么、承诺什么）和设计目标（设计文档规定的语义），不会假装它的执行方法能跑。\n\n### 问题：预期失败和框架缺陷要分开\n\n一个可持久化的 harness 对外要回答："这次 prompt 被接受了吗？""是完成了、失败了、被中止了，还是挂起了？""lane 忙是谁占着？" 如果全用异常表达，调用方分不清"正常业务失败"（lane 忙、没东西可 resume）和"框架缺陷"（存储写失败）。pi 的答案：**Result + TaggedError（预期失败）与 Promise reject（缺陷/死亡）双层分离**。\n\n### TaggedError 工厂：一个错误类 = 一行声明\n\nharness 有几十种预期错误（lane 忙、没东西可 resume、已关闭……），如果每种都手写一个 class，重复代码会淹没业务。pi 的办法是把"定义一个错误类"本身做成一个函数——`TaggedError`，传一个 tag 进去，返回一个现成的错误类。它一个工厂，~30 行承载全部错误类：\n\n```typescript\n// src/harness/result.ts:28\nexport function TaggedError<Tag extends string>(tag: Tag): TaggedErrorFactory<Tag> {\n	class TaggedErrorClass extends Error {\n		readonly _tag = tag;\n\n		constructor(props: { message: string } & Record<string, unknown>) {\n			super(props.message);\n			this.name = tag;\n			Object.assign(this, props);\n		}\n\n		toJSON(): { _tag: Tag; message: string } & Record<string, unknown> {\n			const payload: Record<string, unknown> = {};\n			for (const key of Object.keys(this)) {\n				if (key !== "_tag") payload[key] = (this as unknown as Record<string, unknown>)[key];\n			}\n			return { _tag: tag, message: this.message, ...payload };\n		}\n\n		static is(value: unknown): value is TaggedErrorValue<Tag> {\n			return value instanceof TaggedErrorClass;\n		}\n	}\n	return TaggedErrorClass as unknown as TaggedErrorFactory<Tag>;\n}\n```\n\n每个错误类同时满足四件事：`instanceof Error`（正常异常行为）、`_tag` 字面量（判别依据）、`payload` 挂实例（`Object.assign`，`readonly` 由工厂类型保证）、`toJSON()` 可序列化。`name = tag` 让栈追踪友好。用法是一行声明一个类（`agent-harness.ts` 里 `class LaneBusy extends TaggedError("LaneBusy")<{...}>{}`），所以新增错误类的成本极低。\n\n`toJSON` 不是装饰--设计文档（`harness-v2.md:958`）写明了它的用途：transport 在 proxy 边界把错误序列化成 `{ _tag, message, ...payload }`，对端再重建类。**错误要能跨进程边界传输**，这是 harness 可被远程代理的前提。\n\n### 穷尽匹配：漏一个 tag 编译期失败\n\n错误类的另一半是"怎么消费"。`TaggedError` 造出错误，调用方要按 tag 分流处理——这个分流器就是 `matchError`：传入错误和一组按 tag 命名的处理函数，它按 `_tag` 找到对应那个并执行。关键在于它的类型签名，不是实现：\n\n```typescript\n// src/harness/result.ts:57\nexport function matchError<TError extends TaggedErrorValue<string>, TValue>(\n	error: TError,\n	matchers: ErrorMatchers<TError, TValue>,\n): TValue {\n	const matcher = (matchers as unknown as Record<string, (value: TError) => TValue>)[error._tag];\n	return matcher(error);\n}\n```\n\n`ErrorMatchers` 的类型（`result.ts:53`）要求每个 `_tag` 都有一个对应 handler--**漏掉一个 tag，编译期就失败**。新增错误类 = 全链路被迫处理。这是把"别忘了处理新错误"从代码评审纪律变成类型系统保证。设计文档（`harness-v2.md:958`）原话："Adding a rejection class changes the corresponding error union. An exhaustive `matchError` call then fails to type-check until its caller handles the new tag."\n\n### 双层：Result 是业务，reject 是缺陷\n\n```\n调用方 ──prompt()──► AgentHarness\n                        ├─ 预期失败 -> Result.err(TaggedError)   ← 业务可处理（LaneBusy / NoActiveRun / ...）\n                        ├─ 接受后   -> Result.ok(Outcome)         ← 必为 Ok（completed/aborted/failed/suspended/declined）\n                        └─ 缺陷/死亡 -> Promise reject             ← 不是业务（HarnessFault / HarnessClosed / HarnessNotImplemented）\n```\n\n**Err 语义 = "未接受工作"；一旦接受必为 Ok（含 aborted/failed/suspended）**。这是给调用方的明确承诺：你拿到 Ok，说明工作已经被 harness 接管了，哪怕它最后失败，失败也在 Outcome 里，不会再抛给你。缺陷（存储写失败 -> 全 harness 故障）走 reject，因为这不是调用方该处理的业务，是框架自己该修的 bug。\n\n### 桩的边界：什么能用，什么不能\n\n上面讲的是契约，现在看现实：`0df5a69e` 这个基线上，`AgentHarness` 到底哪些方法真的能用？答案是"窄"——所有执行方法都是桩，而桩长得一模一样：\n\n```typescript\n// src/harness/agent-harness.ts:360\nprivate unavailable<T>(operation: string): Promise<T> {\n	return Promise.reject(this.closed ? new HarnessClosed() : new HarnessNotImplemented(operation));\n}\n```\n\n`prompt`、`steer`、`resume`、`abort`、`compact`、`navigateTree`……全部走 `unavailable()`，reject `HarnessNotImplemented`（`agent-harness.ts:371` 起逐个可见）。能用的是构造、默认值、getter/setter、`lanes()`、`lane("main")`、`watch()`、`close()`。默认值：retry `{enabled:false, maxRetries:0}`、compaction `{enabled:true, reserveTokens:16384, keepRecentTokens:20000}`、steering/followUp `one-at-a-time`。**这是迁移状态，不是 bug**--`harness-v2.md:2887` 把它写成了 F0 工单："F0 owns the audit and hardening of every public method before runtime work begins."\n\n### 岔路：为什么是直线 async，不是显式状态机\n\n这一节密度超标，啃不动可以先跳过，主线（契约 + 错误体系）不依赖它。\n\nharness 的执行过程**不是经典显式状态机**，而是"直线 async 过程 + 门控效果边界"。设计文档开篇的 Decision note（`harness-v2.md:3`）把这个选择和被否决的方案并排摆了出来：\n\n```text\n// docs/harness-v2.md:3（节选：保留所选设计与被否决方案，及两条核心理由；其余理由略）\n> **Decision note.** This is the chosen design: straight-line async procedures with\n> deterministic stepping through a gated effect boundary (section 15). A competing\n> variant - the same Parts I and II over a synchronous state machine - was evaluated\n> and rejected; it is preserved as `harness-v2-generator.md` at commit `01eeafd1`.\n> Why this one: it is easy to follow and debug; plain async/await matches the rest of\n> the codebase, with no machine/executor split to reason across; types just work […]\n> it reuses the agent-loop building blocks as-is instead of reimplementing tool phases\n> inside a machine […]\n```\n\n选直线 async 的理由：易调试、和代码库其它部分一致（plain async/await）、类型自然、复用 agent-loop building blocks。被否决的同步状态机保存在 `harness-v2-generator.md`（commit `01eeafd1`），它的优势是"编译期证明 action 之间无 I/O"，但 pi 用 `Effects` 接口（所有 I/O 必须流经它）加上"parked 时零写入"测试来覆盖这个点--不是编译期强制，但表面足够小、违规容易发现。**这个取舍是"组合而非重写"的又一次落地**：harness 复用循环的 building blocks，而不是在状态机里重写一遍工具阶段。\n\n### 一章小结\n\n- 错误双层：Result + TaggedError（预期失败，业务可处理）与 Promise reject（缺陷/死亡，不是业务）。\n- `TaggedError` 工厂让一个错误类 = 一行声明；`toJSON` 支持跨边界传输；`matchError` 编译期穷尽。\n- Err = 未接受工作；一旦接受必为 Ok（含 aborted/failed/suspended）。\n- 执行过程是直线 async + 门控效果边界，不是显式状态机（同步状态机被评估后否决）。\n- `0df5a69e` 上 harness 是桩：执行方法全 reject `HarnessNotImplemented`，F0 工单负责落地。\n\n### 为什么不去\n\n> **为什么不用普通异常 + try/catch，而要 Result + TaggedError？** 因为 try/catch 让"预期失败"和"意外缺陷"混在同一个通道里--调用方 catch 到一个错误，不知道它是"lane 忙"（该重试或排队）还是"存储写失败"（该报警）。Result 把预期失败变成返回值，调用方必须处理；缺陷继续走 reject，不会被业务代码误吞。`matchError` 的编译期穷尽再补一层：新增一种预期失败，所有调用方编译失败，逼你处理。两层合起来，错误处理的完整性从"记得写 catch"变成了"类型过得了就对了"。\n\n> **为什么实现预计不超过 80 行，且没有 `Panic` 类？** 设计文档（`harness-v2.md:921`）写了："It has no mapping combinators, generator composition, promise wrappers, retry helpers, collection helpers, or `Panic` class. Promise remains the async boundary. `HarnessFault` uses native throwing and promise rejection for defects." 意思是：缺陷用语言原生的 throw/reject，不另造 `Panic` 体系；异步边界就用 Promise，不包一层。这是刻意的克制--harness 的复杂度预算花在持久化语义上，不花在重新发明错误原语上。\n\n> **回指**：错误体系是 harness 组合层的契约，循环本体用不到它（循环的错误是 `stopReason: "error"`，第 0 章 StreamFn 契约）。harness 在循环之外多了一层"业务失败 vs 框架缺陷"的分离，循环没变复杂。\n\n### 落地：八股视角\n\n> **Q：Harness 的错误处理：业务失败和框架缺陷要分开吗？**\n>\n> **A：** 八股 Harness 篇的核心考点。pi 的分层：预期失败（lane 忙、没东西可 resume）→ Result.err(TaggedError)，调用方必须处理；缺陷/死亡（存储写失败、harness 已关闭）→ Promise reject，不是业务。Err = "未接受工作"；一旦接受必为 Ok（含 aborted/failed/suspended）。这个承诺让调用方的控制流是完备的：拿 Ok 就知道工作被接管了。\n\n> **Q：新增一种错误类型，怎么保证所有调用方都处理？**\n>\n> **A：** 八股说"靠 review 纪律"。pi 是类型系统保证：`TaggedError` 工厂一行声明一个错误类，`matchError` 的 `ErrorMatchers` 要求每个 `_tag` 都有 handler，漏一个编译期失败（`result.ts:53`）。错误处理完整性从"记得写 catch"变成"类型过得了就对了"。\n\n> **Q：Harness 执行过程为什么不用显式状态机？**\n>\n> **A：** 八股常把 harness 画成状态机。pi 的 Decision note（`harness-v2.md:3`）记录了一个被评估后否决的同步状态机变体（保留在 `harness-v2-generator.md`，commit `01eeafd1`）：状态机优势是编译期证明 action 之间无 I/O，但代价是 machine/executor 分裂、类型别扭、工具阶段要重实现。pi 选直线 async + 门控效果边界，用 `Effects` 接口 + "parked 时零写入"测试覆盖同一保证。**这个"被否决的方案"就是八股面试最好的素材：能讲清为什么不选状态机，比会画状态机图更值钱。**\n\n下一章讲 harness 的另一半：持久化执行与崩溃恢复。\n\n---\n\n',nm=`# 第 9 章 · 持久化执行与崩溃恢复

> **模块定位**（八股 18 Harness 工程 · 续）：harness 的另一半是持久化与崩溃恢复——八股里"agent 系统要能扛住进程崩溃"这个点，这一章给完整设计：耐久规则、恢复归约、mutation line、工具崩溃点。和第 8 章合起来就是八股 Harness 篇的 pi 实现。

这一章讲 harness-v2 设计文档规定的持久化语义。**当前全部是设计（桩），不是能跑的代码**--但这是全书那句话最集中的一章：持久化是循环之上的组合，靠在 building blocks 之间插 durability writes 实现，循环本体不变。

### 耐久规则：效果前写意图，效果后写结果

设计文档的耐久规则一句话（\`harness-v2.md\` §5）：

> Before an effect: write an intent record that names what will happen and the ids it will produce. After the effect: append the result as an entry with exactly those ids.

推论三连：
- **无需多对象原子性**--每条 record 和每个 entry 单独持久。
- **意图被满足 ⟺ 其 provisioned id 的 entry 存在**；同 id 不同内容 = corruption。
- **成本耐久与结果耐久解耦**--重试/丢弃的响应永不成为 entry，但 usage record 已落盘。设计文档（\`harness-v2.md:371\`）原话："Cost is the one concern where an outcome record exists: **cost durability must not depend on result durability**." 重试浪费的钱不随失败消失。

这条规则把"崩溃点"从"任意状态"收窄成"意图未完成"--崩溃只可能发生在"写了意图但还没写结果"之间，恢复时只需检查哪些意图没有配对的结果。

### 恢复归约：用索引发现，不全量扫描

恢复不是把整个会话重放一遍，而是用索引发现"打开的 operation"（\`harness-v2.md\` §7）。每 lane 独立恢复（只读，不写不启效果）：\`findOpenOperations(lane, {limit:2})\`--0 个 -> idle，1 个 -> suspended，2 个 -> corruption。有打开 operation 才做两次有界读取：该 operation 以来的 records，和从 leaf 回溯的本 operation 自己的 entries。归约出：aborting? / attempts? / tool batch 各调用状态 / deferred 句柄? / pending 队列项? / pending 写入?

**归约与 live 状态同源**：正常执行时 harness 边写边更新内存 \`LaneState\`；restore 重算。状态定义为记录的归约，二者不可能不一致。\`resume()\` 完成后做 fixed-point 自检，不一致 = corruption -> fault。

### mutation line：每个竞态只有两种历史

同一 lane 的并发操作怎么排序？设计文档的答案是一条进程内 FIFO（\`harness-v2.md\` §15）：

> Same-lane decisions have one order: the lane mutation line. The final pending-work check and the terminal append are one \`tryFinishRun\` mutation, so a concurrent steer has exactly two histories.

任何"从 lane 状态做决定"的提交都进这条链：job = 校验 live \`LaneState\` -> 至多一次持久化写 -> 更新 \`LaneState\`。provider 请求 / 工具执行 / hooks / 退避**从不占用 mutation line**--所以每次提交都重新校验。两个并发操作**只有两种可能历史**（\`[A, B]\` 或 \`[B, A]\`），都是定义好的结果，无第三种交错。

这条纪律让竞态可枚举：设计文档列了 12 行竞态目录。比如 steer vs finish：\`[steer, finish]\` -> checkpoint 消费；\`[finish, steer]\` -> \`NoActiveRun\`。**第 10 行（abort vs 飞行中效果）无法用排序消除**--外部效果可能已发生而结果未达；答案与崩溃相同：意图记录 + replay 策略。

### 工具崩溃点与 replay

工具执行的崩溃恢复（\`harness-v2.md\` §6 崩溃表）分三处：

| 崩溃点 | 恢复 |
|---|---|
| 执行前（X1/X2） | 完整正常路径，\`before_tool\` 重跑 |
| 执行中（X3/X4） | 记录 AND 当前声明都 "safe" -> 用持久化参数重执行；否则合成 "interrupted" 结果 |
| 结果已落（X5） | 跳过该调用 |

blocked / invalid 调用**不写 \`tool_started\`**--没效果开始就不需要意图（\`harness-v2.md:367\`）。\`replay\` 双保险：记录快照 + 当前声明--工具实现是代码不能持久化，声明可能已变。\`stopReason: "length"\` 的批次**永不执行**（第 2 章讲过的截断守卫，这里持久化层也认）。

### deferred：suspended 的来历

provider 有一种"立即返句柄、稍后赎回"的模式（batch API、\`background: true\`）。设计文档（\`harness-v2.md:40\`）规定：pi-ai 返回一条 \`stopReason: "deferred"\` 的 assistant 消息带句柄，像任何 assistant 消息一样持久化；赎回句柄时追加一条正常 assistant 消息。恢复看到未赎回的句柄就 fetch，而不是付一次新请求的钱。这是 \`suspended\` outcome 的来源--run 可以停在"等 provider 算完"的状态，崩溃后从赎回继续。

### 一章小结

- 耐久规则：效果前写意图 record，效果后写结果 entry（用恰好这些 id）。崩溃点永远是"意图未完成"。
- 成本耐久与结果耐久解耦：重试/丢弃的响应永不成为 entry，但 usage record 已落盘。
- 恢复用索引发现打开的 operation，不全量扫描；归约与 live 状态同源。
- mutation line：每 lane 一条 FIFO，两个并发操作只有两种历史。
- 工具崩溃三处：执行前重跑、执行中按 replay 策略、结果已落则跳过。

### 为什么不去

> **为什么不需要多对象原子写？** 因为耐久规则把"原子性"拆成了"意图 + 结果"两步，每步单独持久。写了意图没写结果 = 崩溃在中间，恢复时发现意图没配对结果，重做即可。不需要把"意图 + 效果 + 结果"写成一个原子事务--那样要么需要事务存储（重），要么需要两阶段提交（更重）。单条持久 + 意图/结果配对检查，是用"可重做的幂等步骤"替代"原子事务"，换来了实现的轻量。设计文档（\`harness-v2.md:605\`）原话："No multi-object atomic write exists anywhere in the design."

> **为什么 \`stopReason: "length"\` 的批次永不执行，连持久化层都要认？** 因为截断的参数可能"能解析、能校验、但悄悄不完整"（第 2 章引过的 \`agent-loop.ts:374\` 注释）。持久化层若贪图"参数还在、重放一下试试"，就会执行一个半截参数的工具调用。所以这条纪律从循环层（\`failToolCallsFromTruncatedMessage\`）一直贯穿到持久化层（\`harness-v2.md:487\`）--两层都认同一句话：截断批次不执行。

> **回指**：持久化是 harness 组合层在循环 building blocks 之间插 durability writes（\`harness-v2.md:1755\`，§14）。循环的 \`runLoop\`、工具三段管线都没变，harness 只是在 prepare/execute 之间写意图、在 finalize 之后写结果。这是全书那句话最纯粹的一次落地：复杂功能（崩溃恢复）是组合出来的，循环没有为此变复杂一行。

### 落地：八股视角

> **Q：Agent 崩溃恢复的通用设计？**
>
> **A：** 八股的朴素答案"定期存快照"有两个坑：快照之间丢数据、快照本身可能写到一半。pi 的耐久规则更细：**效果前写意图 record，效果后写结果 entry**。崩溃点从"任意状态"收窄成"意图未完成"，恢复时只需检查哪些意图没有配对的结果。而且不需要多对象原子写（\`harness-v2.md:605\`："No multi-object atomic write exists anywhere in the design"）——单条持久 + 配对检查，用可重做的幂等步骤替代原子事务。

> **Q：恢复时怎么知道从哪开始重放？**
>
> **A：** 不重放全部，用索引发现"打开的 operation"（每 lane 只读两次有界读取）：0 个 → idle，1 个 → suspended，2 个 → corruption。归约与 live 状态同源（状态定义为记录的归约），resume 后 fixed-point 自检，不一致 = fault。八股问"恢复的复杂度"，答案是 O(打开的 operation)，不是 O(全部历史)。

> **Q：两个并发操作会不会出现第三种交错？**
>
> **A：** 不会。mutation line（每 lane 一条 FIFO）让提交序列化：两个并发操作只有两种历史（\`[A, B]\` 或 \`[B, A]\`），都是定义好的结果。provider 请求、工具执行、hooks 从不占用 mutation line，所以每次提交都重新校验。唯一无法用排序消除的是 abort vs 飞行中效果（外部效果可能已发生而结果未达）——答案与崩溃相同：意图记录 + replay。**"竞态可枚举"是比"加锁"更强的并发答案。**

下一章是最后一章：技能、模板、消息投影——harness 的定制点。

---

`,tm=`# 第 10 章 · 技能 / 模板 / 消息投影

> **模块定位**（八股 17 Skill + 12 上下文工程）：八股的 Skill 篇讲技能概念边界、渐进式披露；上下文工程篇讲"模型看到什么"。这一章合起来：技能怎么被模型发现（agentskills.io 兼容 XML）、自定义消息怎么进上下文（三层投影）。

这一章讲三件让 harness 可被定制的事：技能（skill）怎么被模型发现、模板怎么渲染、自定义消息怎么进上下文。它们共同回答一个问题：**树里存什么 ≠ 模型看什么**。

### 技能加载：把"模型可发现性"编码进加载期

先认识技能的形态：技能是一个 \`SKILL.md\` 文件（agentskills.io 社区约定的一种格式），文件头是 frontmatter（name、description），下面是正文指令。模型发现技能靠 description，找到后读正文执行。加载时的职责很明确——把磁盘上的文件变成结构化的 \`Skill\` 对象，顺便做合法性校验。这个入口就是 \`loadSkillFromFile\`：

\`\`\`typescript
// src/harness/skills.ts:243
async function loadSkillFromFile(
	env: ExecutionEnv,
	filePath: string,
	parentDirName: string,
): Promise<{ skill: Skill | null; diagnostics: SkillDiagnostic[] }> {
	const diagnostics: SkillDiagnostic[] = [];
	const rawContent = await env.readTextFile(filePath);
	if (!rawContent.ok) {
		diagnostics.push({ type: "warning", code: "read_failed", message: rawContent.error.message, path: filePath });
		return { skill: null, diagnostics };
	}

	const parsed = parseFrontmatter<SkillFrontmatter>(rawContent.value);
	if (!parsed.ok) {
		diagnostics.push({ type: "warning", code: "parse_failed", message: parsed.error.message, path: filePath });
		return { skill: null, diagnostics };
	}

	const { frontmatter, body } = parsed.value;
	const description = typeof frontmatter.description === "string" ? frontmatter.description : undefined;

	for (const error of validateDescription(description)) {
		diagnostics.push({ type: "warning", code: "invalid_metadata", message: error, path: filePath });
	}

	const frontmatterName = typeof frontmatter.name === "string" ? frontmatter.name : undefined;
	const name = frontmatterName || parentDirName;
	for (const error of validateName(name, parentDirName)) {
		diagnostics.push({ type: "warning", code: "invalid_metadata", message: error, path: filePath });
	}

	if (!description || description.trim() === "") {
		return { skill: null, diagnostics };
	}

	return {
		skill: {
			name,
			description,
			content: body,
			filePath,
			disableModelInvocation: frontmatter["disable-model-invocation"] === true,
		},
		diagnostics,
	};
}
\`\`\`

校验哲学藏在那两段 \`validateDescription\` / \`validateName\` 里。\`name\` 必须等于父目录名（\`:292\`）--因为模型按 name 引用技能，目录名即身份，名字和目录对不上模型就找不到文件。\`description\` 必填（\`:304\`）--模型靠它判断"这个技能和当前任务匹不匹配"，没有 description 的技能对模型不可见。注意 \`:274\`：description 缺失或为空，**整个技能丢弃**（返回 \`skill: null\`），但 diagnostics 不空--不静默，告诉你哪个文件为什么被丢。

\`validateName\` 的规则（\`skills.ts:290\`）：≤64 字符、\`[a-z0-9-]\`、无首尾/连续连字符。\`name !== parentDirName\` 只是 push 一个 error（告警），不丢弃--name 违反仅告警，description 违反才丢弃。**"模型可发现性"被编码进加载期校验**：加载时就保证每个存活技能都有合法 name 和必填 description，运行时不用再检查。

### 技能进系统提示词：agentskills.io 兼容 XML

\`formatSkillsForSystemPrompt\` 把技能过滤后输出成 XML 块：

\`\`\`typescript
// src/harness/system-prompt.ts:3
export function formatSkillsForSystemPrompt(skills: Skill[]): string {
	const visibleSkills = skills.filter((skill) => !skill.disableModelInvocation);
	if (visibleSkills.length === 0) return "";

	const lines = [
		"The following skills provide specialized instructions for specific tasks.",
		"Read the full skill file when the task matches its description.",
		"When a skill file references a relative path, resolve it against the skill directory (parent of SKILL.md / dirname of the path) and use that absolute path in tool commands.",
		"",
		"<available_skills>",
	];

	for (const skill of visibleSkills) {
		lines.push("  <skill>");
		lines.push(\`    <name>\${escapeXml(skill.name)}</name>\`);
		lines.push(\`    <description>\${escapeXml(skill.description)}</description>\`);
		lines.push(\`    <location>\${escapeXml(skill.filePath)}</location>\`);
		lines.push("  </skill>");
	}

	lines.push("</available_skills>");
	return lines.join("\\n");
}
\`\`\`

三条引导语（\`:8-10\`）：按 description 匹配时读全文件、相对路径以技能目录为基准解析、\`escapeXml\` 防注入。\`disableModelInvocation\` 的技能不进 XML（\`:4\` 的 filter）--它存在但模型看不到，留作宿主主动调用的入口。\`escapeXml\`（\`:27\`）转义 \`& < > " '\` 五个字符，防技能描述里的特殊字符破坏 XML 结构或注入。

### 模板：预置 prompt 的参数化入口

模板（template）是什么？一段**预置的、带参数占位符的具名 prompt**。\`prompt\` 调用要现场给全文，\`skill\` 是"模型按 description 发现后读文件"——都不适合"应用按名字主动取一段固定指令"。模板补上这个入口：**名字即身份，content 即正文，占位符由渲染函数替换**。它解决什么问题？应用把常用指令固化成具名模板，调用时只传参数，不用每次拼 prompt，也不依赖模型"碰巧发现"。

谁调用它？模板挂在 \`AgentHarnessResources\` 的资源上（和技能并列），由应用主动调用。数据形态是两个接口：

\`\`\`typescript
// src/harness/types.ts:59-78
/** Prompt template that can be formatted into a prompt for explicit invocation. */
export interface PromptTemplate {
	/** Stable template name used for lookup or application command routing. */
	name: string;
	/** Optional description for command lists or autocomplete. */
	description?: string;
	/** Template content. Argument placeholders are formatted by \`formatPromptTemplateInvocation\`. */
	content: string;
}
// src/harness/types.ts:69-78
/** Resources made available to explicit invocation methods and system-prompt callbacks. */
export interface AgentHarnessResources<
	TSkill extends Skill = Skill,
	TPromptTemplate extends PromptTemplate = PromptTemplate,
> {
	/** Prompt templates available for explicit invocation. */
	promptTemplates?: TPromptTemplate[];
	/** Skills available to the model and explicit skill invocation. */
	skills?: TSkill[];
}
\`\`\`

\`name\` 用于查找（和 \`skill\` 的 name 同构），\`content\` 是模板正文，占位符怎么替换由 \`formatPromptTemplateInvocation\` 负责（\`:65\` 的 doc 明说）。渲染是纯函数：

\`\`\`typescript
// src/harness/prompt-templates.ts:243-262
/** Substitute prompt template placeholders (\`$1\`, \`$@\`, \`$ARGUMENTS\`, \`\${@:N}\`, \`\${@:N:L}\`) with command arguments. */
export function substituteArgs(content: string, args: string[]): string {
	// ...（折叠：$1..$n 位置参数逐个替换；\${@:N} / \${@:N:L} 参数切片展开；$ARGUMENTS / $@ 替换为全部参数，折叠）
}
/** Format a prompt template invocation with positional arguments. */
export function formatPromptTemplateInvocation(template: PromptTemplate, args: string[] = []): string {
	return substituteArgs(template.content, args);
}
\`\`\`

占位符语法（\`:243\` doc）共五类：\`$1\`..\`$n\` 位置参数、\`\${@:N}\` 从第 N 个参数起、\`\${@:N:L}\` 切片、\`$ARGUMENTS\` 与 \`$@\` 全部参数。渲染 = \`substituteArgs(template.content, args)\`，不改模板本体、无副作用，模板与渲染函数都可任意复用。

名字错了怎么办？拒绝路径和第 8 章的错误系统同构：名字解析失败编码为 \`UnknownTemplate\`（\`agent-harness.ts:44\`），并进 \`RunRejected\` 联合（\`:104\`）——调用方用 \`matchError\` 穷尽处理，漏掉新 tag 编译不过：

\`\`\`typescript
// src/harness/agent-harness.ts:285-286
	skill(name: string, additionalInstructions?: string): Promise<RunResult>;
	promptFromTemplate(name: string, args?: string[]): Promise<RunResult>;
// src/harness/agent-harness.ts:44
export class UnknownTemplate extends TaggedError("UnknownTemplate")<{ name: string; message: string }> {}
// src/harness/agent-harness.ts:104
export type RunRejected = LaneBusy | InvalidMessage | UnknownSkill | UnknownTemplate | Closed;
\`\`\`

\`promptFromTemplate\` 是 \`AgentLane\` 接口里紧挨 \`skill\` 的显式调用方法（\`:285-286\`），签名是"名字 + 参数数组"；本基线上方法体还是 \`HarnessNotImplemented\` 桩（A.5 已述 type-complete but not behavior-complete），但契约是完整的——渲染纯函数、接口签名、错误类和拒绝联合都在，行为落地只是实现问题。

模板和技能、消息投影同一条线：**都是组合层的定制点，循环本体不知情**。技能靠"模型按 description 发现"，模板靠"应用按名字调用"，投影靠"编译期注册 + 翻译"——循环只负责按名字把 run 派下去，模板怎么渲染、技能怎么发现、自定义消息怎么翻译，它一概不知。定制全被挡在组合层，循环没为模板多长一个概念。

### 消息投影：三层解耦

模型只认 user / assistant / toolResult 三种角色（第 1 章插叙讲过）。但应用想要第四种角色（通知、压缩摘要、bash 执行记录）怎么办？pi 的答案：**开放联合 + 三层投影**。

第一层是开放联合。\`messages.ts\` 用 TS 的 declaration merging 扩展 \`CustomAgentMessages\`：

\`\`\`typescript
// src/harness/messages.ts:54
declare module "../types.ts" {
	interface CustomAgentMessages {
		bashExecution: BashExecutionMessage;
		custom: CustomMessage;
		branchSummary: BranchSummaryMessage;
		compactionSummary: CompactionSummaryMessage;
	}
}
\`\`\`

\`AgentMessage = Message | CustomAgentMessages[keyof CustomAgentMessages]\`（\`types.ts:319\`）。应用可继续扩展（artifact / notification……），**核心代码零改动--编译期类型即注册表**。新增消息类型不需要改 \`types.ts\`，在自己的模块里 \`declare module\` 就行。

第二层是默认投影器 \`convertToLlm\`，把自定义消息翻译成 LLM 认的三种角色：

\`\`\`typescript
// src/harness/messages.ts:124
export function convertToLlm(messages: AgentMessage[]): Message[] {
	return messages
		.map((m): Message | undefined => {
			switch (m.role) {
				case "bashExecution":
					if (m.excludeFromContext) {
						return undefined;
					}
					return {
						role: "user",
						content: [{ type: "text", text: bashExecutionToText(m) }],
						timestamp: m.timestamp,
					};
				case "custom": {
					const content = typeof m.content === "string" ? [{ type: "text" as const, text: m.content }] : m.content;
					return {
						role: "user",
						content,
						timestamp: m.timestamp,
					};
				};
				// ...（branchSummary / compactionSummary -> user 消息包 <summary> XML；user/assistant/toolResult 透传，折叠）
			}
		})
		// ...（filter 掉 undefined）
}
\`\`\`

bashExecution -> user 文本块（含截断 + fullOutputPath）；custom -> user；两个 summary -> \`<summary>\` XML 包裹的 user 消息（compaction 与 branch 文案不同，模型可区分）；未知/\`excludeFromContext\` -> \`undefined\`（过滤掉，永不进上下文）。**投影是单向的**：自定义消息进树，翻译成 user 消息进 provider 上下文；模型永远不会看到"这条原本是 bashExecution"，它只看到一段 user 文本。

第三层是 \`defaultContextEntryTransform\`（第 6 章引过）--在 entry 层面，compaction 之前的条目不进上下文。三层各管一段：entry 投影器决定"哪些条目进上下文"，\`convertToLlm\` 决定"进上下文的条目怎么翻译成 LLM 消息"，\`transformContext\`（第 1 章两道闸门）决定"翻译前要不要裁剪/注入"。**树里存什么 ≠ 模型看什么**，三层投影让存储和上下文各自演化。

### 一章小结

- 技能加载：\`name\` 必须等于父目录名、\`description\` 必填（缺失则丢弃但不静默）。"模型可发现性"编码进加载期校验。
- 技能进系统提示词：agentskills.io 兼容 XML，\`escapeXml\` 防注入，\`disableModelInvocation\` 不进 XML。
- 消息投影三层：开放联合（declaration merging 扩展消息类型）-> \`convertToLlm\`（自定义消息翻译成 user/assistant/toolResult）-> \`defaultContextEntryTransform\`（compaction 之前不进上下文）。
- 树里存什么 ≠ 模型看什么：存储和上下文各自演化。

### 为什么不去

> **为什么 \`name\` 必须等于父目录名，而不是允许 frontmatter 任意起名？** 因为模型按 name 引用技能，但技能文件在磁盘上的位置是目录路径。如果 name 和目录名不一致，模型说"用 foo 技能"，系统要维护一张"name -> 路径"的映射表才能找到文件。强制 name = 目录名，映射表就消失了--name 即路径，模型说 name，系统直接定位到目录。多一张映射表就多一个不一致的来源，pi 选择从结构上消灭它。

> **为什么用 declaration merging 扩展消息类型，而不是改 \`types.ts\` 加新角色？** 因为改 \`types.ts\` 是改核心代码--每加一种消息类型都要动核心，核心就和具体应用耦合了。declaration merging 让应用在自己的模块里扩展，核心代码零改动，类型系统自动把新成员并进 \`AgentMessage\` 联合。这是"开放-封闭"的类型层落地：对扩展开放（加新消息类型），对修改封闭（不动核心）。

> **回指**：技能、模板、投影都是组合层的定制点。循环本体只见 \`AgentMessage\` 和 \`convertToLlm\`（第 1 章两道闸门）；技能怎么发现、自定义消息怎么翻译，循环一概不知。循环没变复杂，是组合层把"模型看什么"管了起来。

### 落地：八股视角

> **Q：Skill 和 Tool 的区别？**
>
> **A：** 八股 Skill 篇的入门考点。pi 的落地：Tool 是 \`AgentTool\`（名字 + 参数 schema + \`execute()\`），进工具列表、由模型按调用；Skill 是 \`SKILL.md\` 文件（name + description + body），进系统提示词的 \`<available_skills>\` XML、由模型按 description 匹配后读文件。Tool 是"直接可调的函数"，Skill 是"发现后可读的说明书"。

> **Q：Skill 怎么保证"模型找得到"？**
>
> **A：** 八股叫"模型可发现性"。pi 把它编码进加载期校验：\`name\` 必须等于父目录名（name 即路径，模型说 name 系统直接定位目录，消灭 name→路径映射表）、\`description\` 必填（缺失整个技能丢弃但不静默，diagnostics 报原因）、\`disableModelInvocation\` 的技能不进 XML。加载时就保证每个存活技能都合法，运行时不用再检查。

> **Q：模型只认三种角色，应用想要第四种怎么办？**
>
> **A：** 八股会答"映射"。pi 的三层投影是完整答案：开放联合扩展消息类型（declaration merging，核心零改动）→ \`convertToLlm\` 翻译成 user/assistant/toolResult（bashExecution/custom/summary 都变 user 文本）→ \`defaultContextEntryTransform\` 决定哪些条目进上下文（compaction 之前不读）。**树里存什么 ≠ 模型看什么**——存储和上下文各自演化，这是上下文工程的核心原则。

到这里全书正文结束，附录有文件地图、术语表和阅读路线。

---

`,rm='# 附录 · 文件地图、术语表与阅读路线\n\n### A.1 文件地图（速查）\n\n| 章 | 文件 | 一句话职责 |\n|---|------|-----------|\n| 0 | `src/types.ts` / `package.json` | `StreamFn` 契约 / `AgentEvent` 联合 / 入口分居 |\n| 1 | `src/agent-loop.ts` / `src/agent.ts` | 无状态循环 / 有状态包装 |\n| 2 | `src/agent-loop.ts`（三阶段） | 工具执行管线 |\n| 3 | `src/agent.ts` | 单飞 + 双队列 + 事件归约 |\n| 4 | `harness/session/types.ts` / `session.ts` / `memory.ts` | Entry/Record 模型 / view 绑定 / 参考后端 |\n| 5 | `harness/types.ts` / `harness/env/nodejs.ts` | `ExecutionEnv` 接口 / Node 实现 + 错误映射 |\n| 6 | `harness/compaction/compaction.ts` / `session/context.ts` | 压缩纯函数 / 上下文投影 |\n| 7 | `harness/tools/edit-diff.ts` | 两级匹配 + 不变行保护 |\n| 8 | `harness/agent-harness.ts` / `harness/result.ts` | Harness 契约 + 桩 / `TaggedError` + `matchError` |\n| 9 | `docs/harness-v2.md`（§5/§7/§15） | 耐久规则 / 恢复归约 / mutation line（设计层） |\n| 10 | `harness/skills.ts` / `system-prompt.ts` / `messages.ts` / `harness/types.ts` | 技能加载 / 系统提示 / 模板入口 / 消息投影 |\n\n### A.2 术语表\n\n| 术语 | 含义 | 出处 |\n|------|------|------|\n| StreamFn | 唯一 LLM 调用边界（失败编码进流，不抛异常） | `types.ts:28` |\n| AgentEvent | 十种事件的可辨识联合，四个层级（run/turn/message/tool） | `types.ts:422` |\n| AgentContext | 循环眼中的"当前对话"（systemPrompt + messages + tools） | `types.ts:406` |\n| AgentMessage | 开放联合消息类型（declaration merging 扩展） | `types.ts:319` |\n| QueueMode | `"all"` \\| `"one-at-a-time"` 队列 drain 模式 | `types.ts:50` |\n| AgentTool | 工具接口：名字 + 参数 schema + execute；循环从 `context.tools` 按名查找 | `types.ts:380` |\n| terminate | 工具结果"全员 true 才提前终止"的批量控制 | `agent-loop.ts:582` |\n| prepare/execute/finalize | 工具三阶段（v2 持久化插桩点） | `agent-loop.ts:600/666/709` |\n| activeRun | 单飞闸门（同一时刻最多一个 run） | `agent.ts:482` |\n| waitForIdle | 旁观者等待 run 结算（参与者碰会死锁） | `agent.ts:328` |\n| ProvisionedEntry | 去掉 parentId/seq/timestamp 的预置 id entry | `session/memory.ts:32` |\n| Entry / Record | 对话树条目 / 操作日志条目（永不进模型上下文） | `session/types.ts` |\n| seq | 全局单调递增序号（entries/records/lane 共享） | `session/memory.ts:141` |\n| view(lane) | 唯一的 lane 绑定点（绑定后 SessionTree 无 lane 参数） | `session/session.ts:114` |\n| lane | 一条对话轨道，`main` 为默认；`view(lane)` 把树绑定到一条轨道 | `session/session.ts:114` |\n| ExecutionEnv | FileSystem + Shell 能力接口（永不 throw） | `harness/types.ts` |\n| FileErrorCode | 8 个稳定错误码（aborted/not_found/.../unknown） | `harness/types.ts:132` |\n| shouldCompact | 触发判定：`contextTokens > contextWindow - reserveTokens` | `compaction.ts:247` |\n| findCutPoint | 找保留最近 token 的合法切点（toolResult 不可切） | `compaction.ts:374` |\n| defaultContextEntryTransform | 从最新 compaction 开始重建上下文，之前不读 | `session/context.ts:45` |\n| split-turn | 切点落在轮次中间时，本轮前缀单独摘要 | `compaction.ts:420` |\n| cacheRetention | 流式请求的 KV 缓存保留策略；摘要请求显式 `"none"` + 新 sessionId 主动放弃缓存红利 | `compaction.ts:113` |\n| fuzzyFindText | 两级匹配：精确 indexOf 优先，失败则 NFKC 归一化 | `edit-diff.ts:203` |\n| matchIndex | 匹配结果在内容中的起始位置；多 edit 按它排序后做重叠检测 | `edit-diff.ts:64` |\n| TaggedError | `_tag` 字面量 + payload + toJSON 的错误工厂 | `result.ts:28` |\n| matchError | 按 `_tag` 编译期穷尽匹配 | `result.ts:57` |\n| HarnessNotImplemented | 桩方法占位（执行方法全 reject 它） | `agent-harness.ts:73` |\n| mutation line | 每 lane FIFO：校验 -> 至多一写 -> 更新态（两种历史） | `harness-v2.md` §15 |\n| Effects | 设计层：harness 所有外部效果的统一注入点；manual 驱动时同一句柄被 gate 包裹 | `harness-v2.md:1887` |\n| deferred | provider 立即返句柄、稍后赎回（suspended 的来历） | `harness-v2.md:40` |\n\n### A.3 阅读路线\n\n1. **建立心智模型**：第 0 章 -> 第 1 章。读完应能不翻代码把系统讲清楚。\n2. **理解循环与状态**：第 2 章（工具）-> 第 3 章（Agent）。\n3. **理解持久化组合层**：第 4 章（会话）-> 第 6 章（压缩）-> 第 8 章（契约）-> 第 9 章（恢复）。\n4. **理解定制点**：第 5 章（环境）-> 第 7 章（编辑）-> 第 10 章（技能/投影）。\n5. **复刻设计**：每章"为什么不去"是决策骨架；逐条回到源码/设计文档验证。\n\n### A.4 与 v2「函数级解读」的关系\n\n这本书和同一作者的《pi Agent Harness 代码解读（函数级）》（v2）覆盖同样的 12 个主题，但写法不同：\n\n- **v2**：代码为"结构还原"（重写 + 精简 + 自加编号注释），文末自承"完整语义以源码为准"。\n- **本版**：代码一律**逐字引用**，保留原英文注释，解读围着源码说；每个 `文件:行号` 都附引文，可就地核对。\n\n两版互补：v2 的"相对裸循环的变更"对照表是决策骨架的好摘要，本版的"为什么不去"是决策推理的展开。要快速扫决策，看 v2 的表；要核对任一论断，看本版的引文。本版不替代 v2，而是把 v2 的覆盖面放到一个"可核对"的写法里重走一遍。\n\n### A.5 基线与漂移说明\n\n全书基于 pi 仓库 commit `0df5a69e`（main，v0.83.0，2026-08-05）。在此基线上，`AgentHarness` 的执行方法全部 reject `HarnessNotImplemented`（`harness-v2.md:2887`："type-complete but not behavior-complete"）；`runAgentLoop` 的唯一消费者是 `Agent`。pi-book（`antinomie-lab/pi-book`）基于更晚的 commit `cd20a8d2e`，其第 1 章引到 `agent-harness.ts:658` 的 `executeTurn` 调用 `runAgentLoop`--那在本基线上尚未落地。两书行号会随版本漂移，论断以各自基线的文件内容为准。\n\n---\n\n*这本书基于 pi 仓库 commit `0df5a69e5e119f8421f4f572d9a3c2ba4c0f5a39`（main，2026-08-05）。代码引用一律逐字，保留原注释；行号随版本演进可能漂移，以文件当前内容为准。设计层论断标注 `harness-v2.md` 章节号，那是当前唯一的 harness 设计文档。*\n\n\n\n\n',sm=[{slug:"1-xiang-mu-gai-lan-qing-liang-ji-zhong-duan-bian-ma-zhu-shou-de-she-ji-zhe-xue",title:"项目概览：轻量级终端编码助手的设计哲学",file:"1-xiang-mu-gai-lan-qing-liang-ji-zhong-duan-bian-ma-zhu-shou-de-she-ji-zhe-xue.md",section:"Get Started",level:"Beginner"},{slug:"2-kuai-su-kai-shi-an-zhuang-qi-dong-yu-chi-xian-yan-shi-mo-shi",title:"快速开始：安装、启动与离线演示模式",file:"2-kuai-su-kai-shi-an-zhuang-qi-dong-yu-chi-xian-yan-shi-mo-shi.md",section:"Get Started",level:"Beginner"},{slug:"3-pei-zhi-wen-jian-ti-xi-settings-json-mcp-json-yu-mu-lu-fu-gai",title:"配置文件体系：settings.json、mcp.json 与目录覆盖",file:"3-pei-zhi-wen-jian-ti-xi-settings-json-mcp-json-yu-mu-lu-fu-gai.md",section:"Get Started",group:"安装与环境",level:"Beginner"},{slug:"4-jiao-hu-shi-jie-mian-yu-xie-gang-ming-ling-su-lan",title:"交互式界面与斜杠命令速览",file:"4-jiao-hu-shi-jie-mian-yu-xie-gang-ming-ling-su-lan.md",section:"Get Started",group:"安装与环境",level:"Beginner"},{slug:"5-nei-zhi-gong-ju-yu-ben-di-kuai-jie-zhi-ling",title:"内置工具与本地快捷指令",file:"5-nei-zhi-gong-ju-yu-ben-di-kuai-jie-zhi-ling.md",section:"Get Started",group:"日常使用",level:"Beginner"},{slug:"6-hui-hua-guan-li-ru-men-bao-cun-hui-fu-zhong-ming-ming-yu-fen-cha",title:"会话管理入门：保存、恢复、重命名与分叉",file:"6-hui-hua-guan-li-ru-men-bao-cun-hui-fu-zhong-ming-ming-yu-fen-cha.md",section:"Get Started",group:"日常使用",level:"Beginner"},{slug:"7-dai-li-xun-huan-model-tool-model-de-duo-bu-zhi-xing-liu-cheng",title:"代理循环：model → tool → model 的多步执行流程",file:"7-dai-li-xun-huan-model-tool-model-de-duo-bu-zhi-xing-liu-cheng.md",section:"Deep Dive",group:"核心执行架构",level:"Intermediate"},{slug:"8-tong-gong-ju-xie-yi-zhu-ce-schema-xiao-yan-yu-ji-zhong-zhi-xing",title:"统一工具协议：注册、Schema 校验与集中执行",file:"8-tong-gong-ju-xie-yi-zhu-ce-schema-xiao-yan-yu-ji-zhong-zhi-xing.md",section:"Deep Dive",group:"核心执行架构",level:"Intermediate"},{slug:"9-jie-gou-hua-xiao-xi-mo-xing-jiao-se-lei-xing-yu-gong-ju-diao-yong-bian-pai",title:"结构化消息模型：角色类型与工具调用编排",file:"9-jie-gou-hua-xiao-xi-mo-xing-jiao-se-lei-xing-yu-gong-ju-diao-yong-bian-pai.md",section:"Deep Dive",group:"核心执行架构",level:"Intermediate"},{slug:"10-anthropic-gua-pei-qi-zhong-shi-tui-bi-xian-liu-yu-si-kao-kuai-bao-liu",title:"Anthropic 适配器：重试退避、限流与思考块保留",file:"10-anthropic-gua-pei-qi-zhong-shi-tui-bi-xian-liu-yu-si-kao-kuai-bao-liu.md",section:"Deep Dive",group:"核心执行架构",level:"Intermediate"},{slug:"11-gong-ying-shang-yong-liang-you-xian-de-shang-xia-wen-ji-zhang-yu-ling-pai-gu-suan",title:"供应商用量优先的上下文记账与令牌估算",file:"11-gong-ying-shang-yong-liang-you-xian-de-shang-xia-wen-ji-zhang-yu-ling-pai-gu-suan.md",section:"Deep Dive",group:"长会话与上下文管理",level:"Advanced"},{slug:"12-zi-dong-ya-suo-hong-fa-yu-zhi-yu-shi-bai-rong-duan",title:"自动压缩：触发阈值与失败熔断",file:"12-zi-dong-ya-suo-hong-fa-yu-zhi-yu-shi-bai-rong-duan.md",section:"Deep Dive",group:"长会话与上下文管理",level:"Advanced"},{slug:"13-que-ding-xing-cai-jian-ya-suo-bao-hu-bian-ji-yu-cuo-wu-lun-ci-de-an-quan-shan-chu",title:"确定性裁剪压缩：保护编辑与错误轮次的安全删除",file:"13-que-ding-xing-cai-jian-ya-suo-bao-hu-bian-ji-yu-cuo-wu-lun-ci-de-an-quan-shan-chu.md",section:"Deep Dive",group:"长会话与上下文管理",level:"Advanced"},{slug:"14-shang-xia-wen-zhe-die-tou-ying-ke-zhai-yao-qu-jian-shi-bie-yu-ti-huan",title:"上下文折叠投影：可摘要区间识别与替换",file:"14-shang-xia-wen-zhe-die-tou-ying-ke-zhai-yao-qu-jian-shi-bie-yu-ti-huan.md",section:"Deep Dive",group:"长会话与上下文管理",level:"Advanced"},{slug:"15-wei-ya-suo-jiu-gong-ju-jie-guo-de-zhan-wei-qing-li",title:"微压缩：旧工具结果的占位清理",file:"15-wei-ya-suo-jiu-gong-ju-jie-guo-de-zhan-wei-qing-li.md",section:"Deep Dive",group:"长会话与上下文管理",level:"Intermediate"},{slug:"16-da-gong-ju-jie-guo-luo-pan-yu-lan-ti-huan-yu-wen-ding-ji-zhang",title:"大工具结果落盘：预览替换与稳定记账",file:"16-da-gong-ju-jie-guo-luo-pan-yu-lan-ti-huan-yu-wen-ding-ji-zhang.md",section:"Deep Dive",group:"长会话与上下文管理",level:"Intermediate"},{slug:"17-san-ceng-quan-xian-xi-tong-lu-jing-ming-ling-yu-bian-ji-shen-pi",title:"三层权限系统：路径、命令与编辑审批",file:"17-san-ceng-quan-xian-xi-tong-lu-jing-ming-ling-yu-bian-ji-shen-pi.md",section:"Deep Dive",group:"安全边界",level:"Intermediate"},{slug:"18-xie-qian-shen-yue-liu-cheng-yu-tong-diff-sheng-cheng",title:"写前审阅流程与统一 diff 生成",file:"18-xie-qian-shen-yue-liu-cheng-yu-tong-diff-sheng-cheng.md",section:"Deep Dive",group:"安全边界",level:"Intermediate"},{slug:"19-zhui-jia-shi-jsonl-shi-jian-ri-zhi-yu-duan-dian-hui-fu",title:"追加式 JSONL 事件日志与断点恢复",file:"19-zhui-jia-shi-jsonl-shi-jian-ri-zhi-yu-duan-dian-hui-fu.md",section:"Deep Dive",group:"会话持久化",level:"Intermediate"},{slug:"20-hui-hua-fen-cha-ya-suo-bian-jie-yu-guo-qi-qing-li",title:"会话分叉、压缩边界与过期清理",file:"20-hui-hua-fen-cha-ya-suo-bian-jie-yu-guo-qi-qing-li.md",section:"Deep Dive",group:"会话持久化",level:"Intermediate"},{slug:"21-ji-neng-xi-tong-skill-md-de-duo-ji-fa-xian-yu-jia-zai",title:"技能系统：SKILL.md 的多级发现与加载",file:"21-ji-neng-xi-tong-skill-md-de-duo-ji-fa-xian-yu-jia-zai.md",section:"Deep Dive",group:"扩展机制",level:"Intermediate"},{slug:"22-mcp-ji-cheng-stdio-http-qi-dong-xie-yi-xie-shang-yu-gong-ju-zhu-ru",title:"MCP 集成：stdio/HTTP 启动、协议协商与工具注入",file:"22-mcp-ji-cheng-stdio-http-qi-dong-xie-yi-xie-shang-yu-gong-ju-zhu-ru.md",section:"Deep Dive",group:"扩展机制",level:"Advanced"},{slug:"23-fen-ceng-ji-yi-zhi-ling-wen-jian-bian-li-atinclude-yu-qu-zhong",title:"分层记忆：指令文件遍历、@include 与去重",file:"23-fen-ceng-ji-yi-zhi-ling-wen-jian-bian-li-atinclude-yu-qu-zhong.md",section:"Deep Dive",group:"扩展机制",level:"Intermediate"},{slug:"24-xiang-mu-chu-shi-hua-init-jiao-shou-jia-yu-cang-ku-zi-dong-jian-ce",title:"项目初始化：/init 脚手架与仓库自动检测",file:"24-xiang-mu-chu-shi-hua-init-jiao-shou-jia-yu-cang-ku-zi-dong-jian-ce.md",section:"Deep Dive",group:"扩展机制",level:"Beginner"},{slug:"25-tui-jia-gou-zhuang-tai-ji-qu-dong-de-zhong-duan-jie-mian",title:"TUI 架构：状态机驱动的终端界面",file:"25-tui-jia-gou-zhuang-tai-ji-qu-dong-de-zhong-duan-jie-mian.md",section:"Deep Dive",group:"终端交互 UI",level:"Advanced"},{slug:"26-shu-ru-jie-xi-qi-zhuan-yi-xu-lie-shu-biao-shi-jian-yu-duo-xing-nian-tie",title:"输入解析器：转义序列、鼠标事件与多行粘贴",file:"26-shu-ru-jie-xi-qi-zhuan-yi-xu-lie-shu-biao-shi-jian-yu-duo-xing-nian-tie.md",section:"Deep Dive",group:"终端交互 UI",level:"Intermediate"},{slug:"27-hou-tai-shell-ren-wu-qian-tai-gong-ju-yu-hou-tai-jin-cheng-de-qu-fen",title:"后台 shell 任务：前台工具与后台进程的区分",file:"27-hou-tai-shell-ren-wu-qian-tai-gong-ju-yu-hou-tai-jin-cheng-de-qu-fen.md",section:"Deep Dive",group:"终端交互 UI",level:"Intermediate"},{slug:"28-ce-shi-ti-xi-cong-dan-yuan-ce-shi-dao-ji-cheng-hui-gui",title:"测试体系：从单元测试到集成回归",file:"28-ce-shi-ti-xi-cong-dan-yuan-ce-shi-dao-ji-cheng-hui-gui.md",section:"Deep Dive",group:"工程实践与学习路径",level:"Intermediate"},{slug:"29-duo-yu-yan-ban-ben-jia-zu-typescript-rust-python-go-java-dui-zhao",title:"多语言版本家族：TypeScript/Rust/Python/Go/Java 对照",file:"29-duo-yu-yan-ban-ben-jia-zu-typescript-rust-python-go-java-dui-zhao.md",section:"Deep Dive",group:"工程实践与学习路径",level:"Beginner"},{slug:"30-cong-claude-code-she-ji-mo-shi-zhong-xue-xi-minicode",title:"从 Claude Code 设计模式中学习 MiniCode",file:"30-cong-claude-code-she-ji-mo-shi-zhong-xue-xi-minicode.md",section:"Deep Dive",group:"工程实践与学习路径",level:"Beginner"}],om={pages:sm},am=[{slug:"1-xiang-mu-gai-lan-zi-tuo-guan-duo-yong-hu-claude-code-zhi-neng-ti-gong-zuo-tai",title:"项目概览：自托管多用户 Claude Code 智能体工作台",file:"1-xiang-mu-gai-lan-zi-tuo-guan-duo-yong-hu-claude-code-zhi-neng-ti-gong-zuo-tai.md",section:"Get Started",level:"Beginner"},{slug:"2-kuai-su-kai-shi-huan-jing-yao-qiu-yu-jian-qi-dong",title:"快速开始：环境要求与一键启动",file:"2-kuai-su-kai-shi-huan-jing-yao-qiu-yu-jian-qi-dong.md",section:"Get Started",level:"Beginner"},{slug:"3-kai-fa-mo-shi-yu-chang-yong-ming-ling",title:"开发模式与常用命令",file:"3-kai-fa-mo-shi-yu-chang-yong-ming-ling.md",section:"Get Started",level:"Beginner"},{slug:"4-shou-ci-pei-zhi-xiang-dao-guan-li-yuan-mo-xing-ti-gong-shang-yu-qu-dao-jie-ru",title:"首次配置向导：管理员、模型提供商与渠道接入",file:"4-shou-ci-pei-zhi-xiang-dao-guan-li-yuan-mo-xing-ti-gong-shang-yu-qu-dao-jie-ru.md",section:"Get Started",level:"Beginner"},{slug:"5-bu-shu-yu-yun-wei-huan-jing-bian-liang-docker-jing-xiang-yu-bei-fen-hui-fu",title:"部署与运维：环境变量、Docker 镜像与备份恢复",file:"5-bu-shu-yu-yun-wei-huan-jing-bian-liang-docker-jing-xiang-yu-bei-fen-hui-fu.md",section:"Get Started",level:"Intermediate"},{slug:"6-zhi-neng-ti-gong-zuo-qu-hui-hua-san-ceng-mo-xing",title:"智能体-工作区-会话三层模型",file:"6-zhi-neng-ti-gong-zuo-qu-hui-hua-san-ceng-mo-xing.md",section:"Deep Dive",group:"智能体优先产品模型",level:"Beginner"},{slug:"7-host-yu-container-shuang-zhi-xing-mo-shi",title:"Host 与 Container 双执行模式",file:"7-host-yu-container-shuang-zhi-xing-mo-shi.md",section:"Deep Dive",group:"智能体优先产品模型",level:"Intermediate"},{slug:"8-agent-neng-li-zhi-li-skills-mcp-yu-plugins",title:"Agent 能力治理：Skills、MCP 与 Plugins",file:"8-agent-neng-li-zhi-li-skills-mcp-yu-plugins.md",section:"Deep Dive",group:"智能体优先产品模型",level:"Intermediate"},{slug:"9-zhu-fu-wu-jia-gou-yu-he-xin-mo-kuai-hua-fen",title:"主服务架构与核心模块划分",file:"9-zhu-fu-wu-jia-gou-yu-he-xin-mo-kuai-hua-fen.md",section:"Deep Dive",group:"系统架构",level:"Intermediate"},{slug:"10-agent-runner-yu-ipc-tong-xin-xie-yi",title:"Agent Runner 与 IPC 通信协议",file:"10-agent-runner-yu-ipc-tong-xin-xie-yi.md",section:"Deep Dive",group:"系统架构",level:"Advanced"},{slug:"11-streamevent-liu-shi-shi-jian-ti-xi-yu-lei-xing-tong-bu",title:"StreamEvent 流式事件体系与类型同步",file:"11-streamevent-liu-shi-shi-jian-ti-xi-yu-lei-xing-tong-bu.md",section:"Deep Dive",group:"系统架构",level:"Intermediate"},{slug:"12-sqlite-schema-yu-shu-ju-ku-qian-yi-ji-zhi",title:"SQLite Schema 与数据库迁移机制",file:"12-sqlite-schema-yu-shu-ju-ku-qian-yi-ji-zhi.md",section:"Deep Dive",group:"系统架构",level:"Advanced"},{slug:"13-im-qu-dao-jia-gou-yu-duo-zhang-hao-lian-jie-chi",title:"IM 渠道架构与多账号连接池",file:"13-im-qu-dao-jia-gou-yu-duo-zhang-hao-lian-jie-chi.md",section:"Deep Dive",group:"消息渠道",level:"Intermediate"},{slug:"14-qu-dao-gua-zai-yu-hui-hua-bang-ding-bian-jie",title:"渠道挂载与会话绑定边界",file:"14-qu-dao-gua-zai-yu-hui-hua-bang-ding-bian-jie.md",section:"Deep Dive",group:"消息渠道",level:"Advanced"},{slug:"15-fei-shu-hui-hua-yu-yi-yu-yuan-sheng-hua-ti-ying-she",title:"飞书会话语义与原生话题映射",file:"15-fei-shu-hui-hua-yu-yi-yu-yuan-sheng-hua-ti-ying-she.md",section:"Deep Dive",group:"消息渠道",level:"Advanced"},{slug:"16-qu-dao-ke-kao-xing-zhuang-tai-ji-inbox-turn-yu-outbox",title:"渠道可靠性状态机：Inbox、Turn 与 Outbox",file:"16-qu-dao-ke-kao-xing-zhuang-tai-ji-inbox-turn-yu-outbox.md",section:"Deep Dive",group:"消息渠道",level:"Advanced"},{slug:"17-im-ming-ling-xi-tong-yu-xiao-xi-fen-fa",title:"IM 命令系统与消息分发",file:"17-im-ming-ling-xi-tong-yu-xiao-xi-fen-fa.md",section:"Deep Dive",group:"消息渠道",level:"Intermediate"},{slug:"18-hui-hua-dui-lie-yu-bing-fa-kong-zhi",title:"会话队列与并发控制",file:"18-hui-hua-dui-lie-yu-bing-fa-kong-zhi.md",section:"Deep Dive",group:"核心运行时",level:"Advanced"},{slug:"19-ding-shi-ren-wu-diao-du-yu-yi-chang-hui-fu",title:"定时任务调度与异常恢复",file:"19-ding-shi-ren-wu-diao-du-yu-yi-chang-hui-fu.md",section:"Deep Dive",group:"核心运行时",level:"Intermediate"},{slug:"20-provider-chi-yu-fu-zai-jun-heng-ce-lue",title:"Provider 池与负载均衡策略",file:"20-provider-chi-yu-fu-zai-jun-heng-ce-lue.md",section:"Deep Dive",group:"核心运行时",level:"Intermediate"},{slug:"21-runner-sheng-ming-zhou-qi-qia-si-jian-ce-yu-gu-zhang-hui-fu",title:"Runner 生命周期、卡死检测与故障恢复",file:"21-runner-sheng-ming-zhou-qi-qia-si-jian-ce-yu-gu-zhang-hui-fu.md",section:"Deep Dive",group:"核心运行时",level:"Advanced"},{slug:"22-workspace-memory-v2-jie-gou-hua-kua-hui-hua-zhi-shi",title:"Workspace Memory v2：结构化跨会话知识",file:"22-workspace-memory-v2-jie-gou-hua-kua-hui-hua-zhi-shi.md",section:"Deep Dive",group:"数据与记忆",level:"Intermediate"},{slug:"23-shu-ju-mu-lu-jie-gou-yu-zhi-xing-bei-fen-hui-fu",title:"数据目录结构与一致性备份恢复",file:"23-shu-ju-mu-lu-jie-gou-yu-zhi-xing-bei-fen-hui-fu.md",section:"Deep Dive",group:"数据与记忆",level:"Intermediate"},{slug:"24-rbac-quan-xian-mo-xing-yu-zi-yuan-ge-chi",title:"RBAC 权限模型与资源隔离",file:"24-rbac-quan-xian-mo-xing-yu-zi-yuan-ge-chi.md",section:"Deep Dive",group:"认证与安全",level:"Intermediate"},{slug:"25-mi-yao-jia-mi-yu-ping-ju-guan-li",title:"密钥加密与凭据管理",file:"25-mi-yao-jia-mi-yu-ping-ju-guan-li.md",section:"Deep Dive",group:"认证与安全",level:"Advanced"},{slug:"26-gua-zai-an-quan-yu-wen-jian-xiao-yan",title:"挂载安全与文件校验",file:"26-gua-zai-an-quan-yu-wen-jian-xiao-yan.md",section:"Deep Dive",group:"认证与安全",level:"Advanced"},{slug:"27-qian-duan-jia-gou-yu-ye-mian-lu-you-she-ji",title:"前端架构与页面路由设计",file:"27-qian-duan-jia-gou-yu-ye-mian-lu-you-she-ji.md",section:"Deep Dive",group:"Web 前端",level:"Intermediate"},{slug:"28-shi-shi-xiao-xi-liu-zhong-duan-yu-liu-shi-xuan-ran-ti-yan",title:"实时消息流、终端与流式渲染体验",file:"28-shi-shi-xiao-xi-liu-zhong-duan-yu-liu-shi-xuan-ran-ti-yan.md",section:"Deep Dive",group:"Web 前端",level:"Intermediate"},{slug:"29-ce-shi-ti-xi-dan-yuan-ce-shi-qi-yue-ce-shi-yu-zhen-shi-mo-xing-mou-yan",title:"测试体系：单元测试、契约测试与真实模型冒烟",file:"29-ce-shi-ti-xi-dan-yuan-ce-shi-qi-yue-ce-shi-yu-zhen-shi-mo-xing-mou-yan.md",section:"Deep Dive",group:"质量保障",level:"Intermediate"},{slug:"30-ci-liu-shui-xian-yu-gong-cheng-gui-fan",title:"CI 流水线与工程规范",file:"30-ci-liu-shui-xian-yu-gong-cheng-gui-fan.md",section:"Deep Dive",group:"质量保障",level:"Beginner"}],im={pages:am},um=[{id:"pa-intro",title:"导读",subtitle:"",md:Gf},{id:"pa-00",title:"第 0 章 · 它是什么：一个循环，和它周围的世界",subtitle:"",md:$f},{id:"pa-01",title:"第 1 章 · 一次 prompt 的全程：从 prompt() 到 agent_end",subtitle:"",md:Kf},{id:"pa-02",title:"第 2 章 · 工具执行：三段管线与并行纪律",subtitle:"",md:Vf},{id:"pa-03",title:"第 3 章 · 有状态 Agent：单飞与双队列",subtitle:"",md:Qf},{id:"pa-04",title:"第 4 章 · 会话与存储：Entry / Record 双轨",subtitle:"",md:Jf},{id:"pa-05",title:"第 5 章 · 环境抽象：FileSystem / Shell",subtitle:"",md:Yf},{id:"pa-06",title:"第 6 章 · 上下文压缩：自包含 checkpoint",subtitle:"",md:Xf},{id:"pa-07",title:"第 7 章 · 编辑算法：精确到模糊的两级匹配",subtitle:"",md:Zf},{id:"pa-08",title:"第 8 章 · Harness 契约：状态机与错误体系",subtitle:"",md:em},{id:"pa-09",title:"第 9 章 · 持久化执行与崩溃恢复",subtitle:"",md:nm},{id:"pa-10",title:"第 10 章 · 技能 / 模板 / 消息投影",subtitle:"",md:tm},{id:"pa-appendix",title:"附录 · 文件地图、术语表与阅读路线",subtitle:"",md:rm}],lm=Object.assign({"../三项目codewiki/MiniCode-main/01-项目概览：轻量级终端编码助手的设计哲学.md":()=>B(()=>import("./01-项目概览：轻量级终端编码助手的设计哲学-BO7F2hsL.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/02-快速开始：安装、启动与离线演示模式.md":()=>B(()=>import("./02-快速开始：安装、启动与离线演示模式-D931Ao9C.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/03-配置文件体系：settings.json、mcp.json 与目录覆盖.md":()=>B(()=>import("./03-配置文件体系：settings.json、mcp.json 与目录覆盖-WRq624i1.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/04-交互式界面与斜杠命令速览.md":()=>B(()=>import("./04-交互式界面与斜杠命令速览-DGArdq81.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/05-内置工具与本地快捷指令.md":()=>B(()=>import("./05-内置工具与本地快捷指令-DrRwy041.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/06-会话管理入门：保存、恢复、重命名与分叉.md":()=>B(()=>import("./06-会话管理入门：保存、恢复、重命名与分叉-AQnQXlC9.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/07-代理循环：model → tool → model 的多步执行流程.md":()=>B(()=>import("./07-代理循环：model → tool → model 的多步执行流程-CqiGQGTU.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/08-统一工具协议：注册、Schema 校验与集中执行.md":()=>B(()=>import("./08-统一工具协议：注册、Schema 校验与集中执行-B-hNmNbt.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/09-结构化消息模型：角色类型与工具调用编排.md":()=>B(()=>import("./09-结构化消息模型：角色类型与工具调用编排-Cett7Lru.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/10-Anthropic 适配器：重试退避、限流与思考块保留.md":()=>B(()=>import("./10-Anthropic 适配器：重试退避、限流与思考块保留-DqFoZrq3.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/11-供应商用量优先的上下文记账与令牌估算.md":()=>B(()=>import("./11-供应商用量优先的上下文记账与令牌估算-DYhaV_d2.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/12-自动压缩：触发阈值与失败熔断.md":()=>B(()=>import("./12-自动压缩：触发阈值与失败熔断-DWALJ2-s.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/13-确定性裁剪压缩：保护编辑与错误轮次的安全删除.md":()=>B(()=>import("./13-确定性裁剪压缩：保护编辑与错误轮次的安全删除-C8RYg6Jp.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/14-上下文折叠投影：可摘要区间识别与替换.md":()=>B(()=>import("./14-上下文折叠投影：可摘要区间识别与替换-ChG3ki2j.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/15-微压缩：旧工具结果的占位清理.md":()=>B(()=>import("./15-微压缩：旧工具结果的占位清理-vurv5rL0.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/16-大工具结果落盘：预览替换与稳定记账.md":()=>B(()=>import("./16-大工具结果落盘：预览替换与稳定记账-BbDR8SN5.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/17-三层权限系统：路径、命令与编辑审批.md":()=>B(()=>import("./17-三层权限系统：路径、命令与编辑审批-Bacf5WHs.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/18-写前审阅流程与统一 diff 生成.md":()=>B(()=>import("./18-写前审阅流程与统一 diff 生成-BOiggOUh.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/19-追加式 JSONL 事件日志与断点恢复.md":()=>B(()=>import("./19-追加式 JSONL 事件日志与断点恢复-Bt3L38Dt.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/20-会话分叉、压缩边界与过期清理.md":()=>B(()=>import("./20-会话分叉、压缩边界与过期清理-DGsfgIfy.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/21-技能系统：SKILL.md 的多级发现与加载.md":()=>B(()=>import("./21-技能系统：SKILL.md 的多级发现与加载-BcfUm_xT.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/22-MCP 集成：stdio／HTTP 启动、协议协商与工具注入.md":()=>B(()=>import("./22-MCP 集成：stdio／HTTP 启动、协议协商与工具注入-Cg7MnmEE.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/23-分层记忆：指令文件遍历、@include 与去重.md":()=>B(()=>import("./23-分层记忆：指令文件遍历、@include 与去重-CuwBYOiv.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/24-项目初始化：／init 脚手架与仓库自动检测.md":()=>B(()=>import("./24-项目初始化：／init 脚手架与仓库自动检测-DsmzLtyH.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/25-TUI 架构：状态机驱动的终端界面.md":()=>B(()=>import("./25-TUI 架构：状态机驱动的终端界面-KaB4A9kg.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/26-输入解析器：转义序列、鼠标事件与多行粘贴.md":()=>B(()=>import("./26-输入解析器：转义序列、鼠标事件与多行粘贴-eN2gLjD7.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/27-后台 shell 任务：前台工具与后台进程的区分.md":()=>B(()=>import("./27-后台 shell 任务：前台工具与后台进程的区分-CsUWHzQo.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/28-测试体系：从单元测试到集成回归.md":()=>B(()=>import("./28-测试体系：从单元测试到集成回归-CoKcWcZF.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/29-多语言版本家族：TypeScript／Rust／Python／Go／Java 对照.md":()=>B(()=>import("./29-多语言版本家族：TypeScript／Rust／Python／Go／Java 对照-DrhSpFOU.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/MiniCode-main/30-从 Claude Code 设计模式中学习 MiniCode.md":()=>B(()=>import("./30-从 Claude Code 设计模式中学习 MiniCode-CTygqB6r.js"),[],import.meta.url).then(e=>e.default)}),cm=Object.assign({"../三项目codewiki/happyclaw-main/01-项目概览：自托管多用户 Claude Code 智能体工作台.md":()=>B(()=>import("./01-项目概览：自托管多用户 Claude Code 智能体工作台-JxVWtPJc.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/02-快速开始：环境要求与一键启动.md":()=>B(()=>import("./02-快速开始：环境要求与一键启动-CPW7uAkx.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/03-开发模式与常用命令.md":()=>B(()=>import("./03-开发模式与常用命令-LtdqHzFK.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/04-首次配置向导：管理员、模型提供商与渠道接入.md":()=>B(()=>import("./04-首次配置向导：管理员、模型提供商与渠道接入-BBRg7llx.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/05-部署与运维：环境变量、Docker 镜像与备份恢复.md":()=>B(()=>import("./05-部署与运维：环境变量、Docker 镜像与备份恢复-Zg1DSYss.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/06-智能体-工作区-会话三层模型.md":()=>B(()=>import("./06-智能体-工作区-会话三层模型-C-oVnbVH.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/07-Host 与 Container 双执行模式.md":()=>B(()=>import("./07-Host 与 Container 双执行模式-DWG7u3m7.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/08-Agent 能力治理：Skills、MCP 与 Plugins.md":()=>B(()=>import("./08-Agent 能力治理：Skills、MCP 与 Plugins-DmsASYkO.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/09-主服务架构与核心模块划分.md":()=>B(()=>import("./09-主服务架构与核心模块划分-Dr4G6zct.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/10-Agent Runner 与 IPC 通信协议.md":()=>B(()=>import("./10-Agent Runner 与 IPC 通信协议-Iz8YMjjX.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/11-StreamEvent 流式事件体系与类型同步.md":()=>B(()=>import("./11-StreamEvent 流式事件体系与类型同步-DCbbzDW7.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/12-SQLite Schema 与数据库迁移机制.md":()=>B(()=>import("./12-SQLite Schema 与数据库迁移机制-C2_Si74k.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/13-IM 渠道架构与多账号连接池.md":()=>B(()=>import("./13-IM 渠道架构与多账号连接池-D5COZSei.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/14-渠道挂载与会话绑定边界.md":()=>B(()=>import("./14-渠道挂载与会话绑定边界-Dzq6PO39.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/15-飞书会话语义与原生话题映射.md":()=>B(()=>import("./15-飞书会话语义与原生话题映射-C0CDsCiE.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/16-渠道可靠性状态机：Inbox、Turn 与 Outbox.md":()=>B(()=>import("./16-渠道可靠性状态机：Inbox、Turn 与 Outbox-D9_4U_p9.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/17-IM 命令系统与消息分发.md":()=>B(()=>import("./17-IM 命令系统与消息分发-BV_nIO4b.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/18-会话队列与并发控制.md":()=>B(()=>import("./18-会话队列与并发控制-CFGR1EF6.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/19-定时任务调度与异常恢复.md":()=>B(()=>import("./19-定时任务调度与异常恢复-1PJQ5VPI.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/20-Provider 池与负载均衡策略.md":()=>B(()=>import("./20-Provider 池与负载均衡策略-DEVyAeWR.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/21-Runner 生命周期、卡死检测与故障恢复.md":()=>B(()=>import("./21-Runner 生命周期、卡死检测与故障恢复-B919TO3j.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/22-Workspace Memory v2：结构化跨会话知识.md":()=>B(()=>import("./22-Workspace Memory v2：结构化跨会话知识-D-ave25F.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/23-数据目录结构与一致性备份恢复.md":()=>B(()=>import("./23-数据目录结构与一致性备份恢复-DUMf2jz1.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/24-RBAC 权限模型与资源隔离.md":()=>B(()=>import("./24-RBAC 权限模型与资源隔离-hEDHK539.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/25-密钥加密与凭据管理.md":()=>B(()=>import("./25-密钥加密与凭据管理-CaZGaQhR.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/26-挂载安全与文件校验.md":()=>B(()=>import("./26-挂载安全与文件校验-D4hQBf3S.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/27-前端架构与页面路由设计.md":()=>B(()=>import("./27-前端架构与页面路由设计-YnrWkkYh.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/28-实时消息流、终端与流式渲染体验.md":()=>B(()=>import("./28-实时消息流、终端与流式渲染体验-Bdu09RSQ.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/29-测试体系：单元测试、契约测试与真实模型冒烟.md":()=>B(()=>import("./29-测试体系：单元测试、契约测试与真实模型冒烟-sDhnHYAM.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/happyclaw-main/30-CI 流水线与工程规范.md":()=>B(()=>import("./30-CI 流水线与工程规范-LgrD4TSn.js"),[],import.meta.url).then(e=>e.default)}),dm=Object.assign({"../三项目codewiki/craft-agents-oss/BaseAgent_抽象_lukilabs_craft-agents-oss/BaseAgent_抽象_lukilabs_craft-agents-oss.md":()=>B(()=>import("./BaseAgent_抽象_lukilabs_craft-agents-oss-BUEguS6H.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/ClaudeAgent_SDK_集成_lukilabs_craft-agents-oss/ClaudeAgent_SDK_集成_lukilabs_craft-agents-oss.md":()=>B(()=>import("./ClaudeAgent_SDK_集成_lukilabs_craft-agents-oss-Bt8O2XYV.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/Electron_主进程_lukilabs_craft-agents-oss/Electron_主进程_lukilabs_craft-agents-oss.md":()=>B(()=>import("./Electron_主进程_lukilabs_craft-agents-oss-D56ozHCc.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/MCP_客户端池_lukilabs_craft-agents-oss/MCP_客户端池_lukilabs_craft-agents-oss.md":()=>B(()=>import("./MCP_客户端池_lukilabs_craft-agents-oss-C_Ocgl6e.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/Monorepo_架构_lukilabs_craft-agents-oss/Monorepo_架构_lukilabs_craft-agents-oss.md":()=>B(()=>import("./Monorepo_架构_lukilabs_craft-agents-oss-Bp2bgM8V.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/OAuth_与凭证管理_lukilabs_craft-agents-oss/OAuth_与凭证管理_lukilabs_craft-agents-oss.md":()=>B(()=>import("./OAuth_与凭证管理_lukilabs_craft-agents-oss-CYaVQ-H0.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/PiAgent_子进程协议_lukilabs_craft-agents-oss/PiAgent_子进程协议_lukilabs_craft-agents-oss.md":()=>B(()=>import("./PiAgent_子进程协议_lukilabs_craft-agents-oss-Bfd-f2Tn.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/WebUI_与会话查看器_lukilabs_craft-agents-oss/WebUI_与会话查看器_lukilabs_craft-agents-oss.md":()=>B(()=>import("./WebUI_与会话查看器_lukilabs_craft-agents-oss-DtdSVdug.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/一键安装脚本_lukilabs_craft-agents-oss/一键安装脚本_lukilabs_craft-agents-oss.md":()=>B(()=>import("./一键安装脚本_lukilabs_craft-agents-oss-CisewOR7.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/会话与工作区模型_lukilabs_craft-agents-oss/会话与工作区模型_lukilabs_craft-agents-oss.md":()=>B(()=>import("./会话与工作区模型_lukilabs_craft-agents-oss-MAy4GcbD.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/会话工具核心_lukilabs_craft-agents-oss/会话工具核心_lukilabs_craft-agents-oss.md":()=>B(()=>import("./会话工具核心_lukilabs_craft-agents-oss-CjXnYj8O.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/传输与_RPC_层_lukilabs_craft-agents-oss/传输与_RPC_层_lukilabs_craft-agents-oss.md":()=>B(()=>import("./传输与_RPC_层_lukilabs_craft-agents-oss-I4jryyxE.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/关于贡献者_lukilabs_craft-agents-oss/关于贡献者_lukilabs_craft-agents-oss.md":()=>B(()=>import("./关于贡献者_lukilabs_craft-agents-oss-D1uid29G.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/安装方式_lukilabs_craft-agents-oss/安装方式_lukilabs_craft-agents-oss.md":()=>B(()=>import("./安装方式_lukilabs_craft-agents-oss-zOCwHdxY.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/快速开始_lukilabs_craft-agents-oss/快速开始_lukilabs_craft-agents-oss.md":()=>B(()=>import("./快速开始_lukilabs_craft-agents-oss-RFr_LxTe.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/无头远程服务器_lukilabs_craft-agents-oss/无头远程服务器_lukilabs_craft-agents-oss.md":()=>B(()=>import("./无头远程服务器_lukilabs_craft-agents-oss-CeEDoZ0M.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/最新更新_lukilabs_craft-agents-oss/最新更新_lukilabs_craft-agents-oss.md":()=>B(()=>import("./最新更新_lukilabs_craft-agents-oss-CUV5VYzo.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/权限模式系统_lukilabs_craft-agents-oss/权限模式系统_lukilabs_craft-agents-oss.md":()=>B(()=>import("./权限模式系统_lukilabs_craft-agents-oss-BxZgrfjK.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/来源与技能_lukilabs_craft-agents-oss/来源与技能_lukilabs_craft-agents-oss.md":()=>B(()=>import("./来源与技能_lukilabs_craft-agents-oss-D9cg4rrx.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/概述_lukilabs_craft-agents-oss/概述_lukilabs_craft-agents-oss.md":()=>B(()=>import("./概述_lukilabs_craft-agents-oss-CYhw6gR3.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/渲染器_UI_组件_lukilabs_craft-agents-oss/渲染器_UI_组件_lukilabs_craft-agents-oss.md":()=>B(()=>import("./渲染器_UI_组件_lukilabs_craft-agents-oss-l8aXzYY3.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/自动化引擎_lukilabs_craft-agents-oss/自动化引擎_lukilabs_craft-agents-oss.md":()=>B(()=>import("./自动化引擎_lukilabs_craft-agents-oss-yztbl1Io.js"),[],import.meta.url).then(e=>e.default),"../三项目codewiki/craft-agents-oss/问题与反馈_lukilabs_craft-agents-oss/问题与反馈_lukilabs_craft-agents-oss.md":()=>B(()=>import("./问题与反馈_lukilabs_craft-agents-oss-BTOjl2mY.js"),[],import.meta.url).then(e=>e.default)}),pm=Object.assign({"../三项目codewiki/craft-agents-oss/概述_lukilabs_craft-agents-oss/images/img_001.jpg":B0}),Ku={};for(const[e,n]of Object.entries(pm)){const t=e.match(/images\/([^/]+)$/);t&&(Ku[`images/${t[1]}`]=n)}function fm(e){return Ku[e]||null}function Vu(e,n){return Object.keys(e).sort().map((r,s)=>{const o=n.pages&&n.pages[s]||{},a=o.section||"",i=o.group||(a==="Get Started"?"概览":a)||"概览";return{id:`p${String(s+1).padStart(2,"0")}`,title:o.title||r,subtitle:i,group:i,section:a,level:o.level||"",md:e[r]}})}const mm=[{dir:"概述_lukilabs_craft-agents-oss",title:"概述",section:"Get Started",group:"概览",level:"Beginner"},{dir:"快速开始_lukilabs_craft-agents-oss",title:"快速开始",section:"Get Started",group:"安装与上手",level:"Beginner"},{dir:"安装方式_lukilabs_craft-agents-oss",title:"安装方式",section:"Get Started",group:"安装与上手",level:"Beginner"},{dir:"一键安装脚本_lukilabs_craft-agents-oss",title:"一键安装脚本",section:"Get Started",group:"安装与上手",level:"Beginner"},{dir:"最新更新_lukilabs_craft-agents-oss",title:"最新更新",section:"Get Started",group:"概览",level:"Beginner"},{dir:"问题与反馈_lukilabs_craft-agents-oss",title:"问题与反馈",section:"Get Started",group:"概览",level:"Beginner"},{dir:"关于贡献者_lukilabs_craft-agents-oss",title:"关于贡献者",section:"Get Started",group:"概览",level:"Beginner"},{dir:"Monorepo_架构_lukilabs_craft-agents-oss",title:"Monorepo 架构",section:"Deep Dive",group:"架构核心",level:"Intermediate"},{dir:"BaseAgent_抽象_lukilabs_craft-agents-oss",title:"BaseAgent 抽象",section:"Deep Dive",group:"架构核心",level:"Intermediate"},{dir:"ClaudeAgent_SDK_集成_lukilabs_craft-agents-oss",title:"ClaudeAgent SDK 集成",section:"Deep Dive",group:"架构核心",level:"Intermediate"},{dir:"PiAgent_子进程协议_lukilabs_craft-agents-oss",title:"PiAgent 子进程协议",section:"Deep Dive",group:"架构核心",level:"Advanced"},{dir:"MCP_客户端池_lukilabs_craft-agents-oss",title:"MCP 客户端池",section:"Deep Dive",group:"架构核心",level:"Intermediate"},{dir:"权限模式系统_lukilabs_craft-agents-oss",title:"权限模式系统",section:"Deep Dive",group:"权限与自动化",level:"Intermediate"},{dir:"自动化引擎_lukilabs_craft-agents-oss",title:"自动化引擎",section:"Deep Dive",group:"权限与自动化",level:"Intermediate"},{dir:"Electron_主进程_lukilabs_craft-agents-oss",title:"Electron 主进程",section:"Deep Dive",group:"桌面应用层",level:"Intermediate"},{dir:"渲染器_UI_组件_lukilabs_craft-agents-oss",title:"渲染器 UI 组件",section:"Deep Dive",group:"桌面应用层",level:"Intermediate"},{dir:"传输与_RPC_层_lukilabs_craft-agents-oss",title:"传输与 RPC 层",section:"Deep Dive",group:"桌面应用层",level:"Intermediate"},{dir:"会话与工作区模型_lukilabs_craft-agents-oss",title:"会话与工作区模型",section:"Deep Dive",group:"会话与扩展",level:"Intermediate"},{dir:"来源与技能_lukilabs_craft-agents-oss",title:"来源与技能",section:"Deep Dive",group:"会话与扩展",level:"Intermediate"},{dir:"OAuth_与凭证管理_lukilabs_craft-agents-oss",title:"OAuth 与凭证管理",section:"Deep Dive",group:"会话与扩展",level:"Advanced"},{dir:"会话工具核心_lukilabs_craft-agents-oss",title:"会话工具核心",section:"Deep Dive",group:"会话与扩展",level:"Intermediate"},{dir:"无头远程服务器_lukilabs_craft-agents-oss",title:"无头远程服务器",section:"Deep Dive",group:"部署形态",level:"Intermediate"},{dir:"WebUI_与会话查看器_lukilabs_craft-agents-oss",title:"WebUI 与会话查看器",section:"Deep Dive",group:"部署形态",level:"Intermediate"}];function gm(e){const n=`/${e}/${e}.md`,t=Object.entries(dm).find(([r])=>r.endsWith(n));return t?t[1]:null}const hm=Vu(lm,om),_m=Vu(cm,im),ym=mm.map((e,n)=>({id:`c${String(n+1).padStart(2,"0")}`,title:e.title,subtitle:e.group,group:e.group,section:e.section,level:e.level,md:gm(e.dir)})),Mt={"pi-agent":{id:"pi-agent",title:"Pi Agent 架构导读",subtitle:"pi-agent-core 源码级架构解读",description:"从一次 prompt 的全程到 Harness 契约：循环结构、工具执行、有状态 Agent、会话存储、环境抽象、上下文压缩、编辑算法、错误体系、崩溃恢复、技能系统，共 11 章 + 附录（约 2700 行）。",chapters:um},"ai-app-dev":{id:"ai-app-dev",title:"AI 应用开发工程师三十天速成计划",subtitle:"从零基础到 Agent 项目交付",description:"面向零基础/转行者的 AI 应用开发系统课程，Week 0 补齐基础 → Week 1 掌握 LLM API 与 Agent 范式 → Week 2 手写 Agent Loop → Week 3 集成 Skill/MCP/评测/安全。",chapters:[{id:"guide",title:"使用指南",subtitle:"课程总览与学习路径",md:W0},{id:"w0-start",title:"从这里开始",subtitle:"零基础入门说明",md:z0},{id:"w0-roadmap",title:"学习路线图",subtitle:"补齐基础知识的路线",md:q0},{id:"w0-plan",title:"实施计划",subtitle:"每日学习计划安排",md:j0},{id:"w0-c01",title:"建立 AI 应用与 Agent 地图",subtitle:"宏观认知建立",md:H0},{id:"w0-c02",title:"认识 Coding Agent",subtitle:"Coding Agent 入门",md:U0},{id:"w0-c03",title:"终端实操",subtitle:"终端基础操作",md:G0},{id:"w0-c04",title:"文件路径与 Python 运行",subtitle:"文件系统与 Python 执行",md:$0},{id:"w0-c05",title:"Python 基础语法",subtitle:"Python 编程入门",md:K0},{id:"w0-c06",title:"JSON 与输入输出",subtitle:"数据格式与程序交互",md:V0},{id:"w0-c07",title:"HTTP 与 API 常识",subtitle:"网络协议与 API 基础",md:Q0},{id:"w0-c08",title:"环境变量与配置文件",subtitle:"运行环境配置",md:J0},{id:"w0-c09",title:"需求采访 Spec 与 TDD",subtitle:"需求理解与测试驱动",md:Y0},{id:"w0-c10",title:"Git 配置与安全边界",subtitle:"版本控制与安全",md:X0},{id:"w0-c11",title:"完整实践与 Week 1 交接",subtitle:"阶段性总结与过渡",md:Z0},{id:"w0-r01",title:"常见术语表",subtitle:"配套参考",md:ef},{id:"w0-r02",title:"终端命令速查表",subtitle:"配套参考",md:nf},{id:"w0-r03",title:"常见文件类型",subtitle:"配套参考",md:tf},{id:"w0-r04",title:"Coding Agent 安全清单",subtitle:"配套参考",md:rf},{id:"w0-r05",title:"Coding Agent 提示词模板",subtitle:"配套参考",md:sf},{id:"w0-r06",title:"Git 与 Agent 协作速查表",subtitle:"配套参考",md:of},{id:"w0-r07",title:"macOS 基础操作",subtitle:"配套指南",md:af},{id:"w0-r08",title:"Windows 基础操作",subtitle:"配套指南",md:uf},{id:"w1-readme",title:"概览与自测",subtitle:"本周总览：LLM API、Prompt、Agent 范式、Tool Calling、RAG、框架对比、项目选型",md:lf},{id:"w1-d01",title:"Day 1 · LLM 与 API 调用",subtitle:"把大模型理解成可调用、可计费、可约束的生成服务",md:cf},{id:"w1-d02",title:"Day 2 · Prompt 工程与结构化输出",subtitle:"让模型输出能被程序稳定消费的结构化结果",md:df},{id:"w1-d03",title:"Day 3 · Agent 范式（ReAct/Plan-Execute/Reflexion）",subtitle:"模型怎么组织多步行动",md:pf},{id:"w1-d04",title:"Day 4 · 工具调用（Function Calling）",subtitle:"让模型用上外部能力，程序执行工具",md:ff},{id:"w1-d05",title:"Day 5 · RAG 基础",subtitle:"回答前先检索相关资料放进上下文",md:mf},{id:"w1-d06",title:"Day 6 · 框架对比",subtitle:"按抽象层和任务形态理解框架，不按流行度选",md:gf},{id:"w1-d07",title:"Day 7 · 项目选型与 PRD",subtitle:"选一个有场景、能演示、能评测的主项目",md:hf},{id:"w1-r03",title:"快速通道（60 分钟急行军）",subtitle:"配套指南",md:_f},{id:"w1-r04",title:"术语表",subtitle:"配套指南",md:yf},{id:"w1-r05",title:"周末复盘",subtitle:"配套指南",md:bf},{id:"w1-test",title:"第一周整合自测",subtitle:"综合题 + 整合实操题",md:kf},{id:"w2-readme",title:"概览与自测",subtitle:"本周总览：ReAct Loop、多工具、计划执行分离、Memory、Context 压缩、LangGraph、Subagent",md:xf},{id:"w2-d08",title:"Day 8 · Agent Loop",subtitle:"让 ReAct 真正跑起来的循环（带状态+终止+错误恢复）",md:Af},{id:"w2-d09",title:"Day 9 · 多工具注册与执行",subtitle:"加工具不改循环 + 三类工具的风险防护",md:vf},{id:"w2-d10",title:"Day 10 · TodoWrite 计划-执行分离",subtitle:"让模型把计划显式化，不漏步骤不草草收尾",md:wf},{id:"w2-d11",title:"Day 11 · Memory 三层记忆",subtitle:"跨会话记住该记的，不同类型不同存法",md:Ef},{id:"w2-d12",title:"Day 12 · Context 压缩",subtitle:"上下文太长时裁剪/摘要，保 system 不丢",md:Cf},{id:"w2-d13",title:"Day 13 · LangGraph 工作流编排",subtitle:"把反复出现的分支/并行/审批显式化为图",md:Df},{id:"w2-d14",title:"Day 14 · Subagent 子任务隔离",subtitle:"子任务独立上下文，主上下文只看结论",md:Sf},{id:"w2-r02",title:"术语表",subtitle:"配套指南",md:Tf},{id:"w2-r03",title:"故障排查",subtitle:"配套指南",md:Rf},{id:"w2-r04",title:"周末复盘",subtitle:"配套指南",md:Pf},{id:"w2-test",title:"第二周整合自测",subtitle:"综合题 + 整合实操题",md:Lf},{id:"w3-readme",title:"概览与自测",subtitle:"本周总览：Harness 工程化、Skill 系统、MCP、Multi-agent 诊断、评测体系、HITL 安全护栏",md:If},{id:"w3-d15",title:"Day 15 · Harness 工程化整理",subtitle:"模型之外的工程外壳，让系统可交接可追溯",md:Mf},{id:"w3-d16",title:"Day 16 · Skill 系统",subtitle:"把一类专业工作流封装成可触发的能力包",md:Of},{id:"w3-d17",title:"Day 17 · MCP 协议",subtitle:"让外部工具以标准协议被发现和调用",md:Nf},{id:"w3-d18",title:"Day 18 · Multi-agent 诊断分工",subtitle:"把复杂任务拆给不同角色协作",md:Ff},{id:"w3-d19",title:"Day 19 · 评测体系",subtitle:"用 golden dataset + 评分器批量测 Agent",md:Bf},{id:"w3-d20",title:"Day 20 · 可观测性/HITL/安全护栏",subtitle:"可还原、可暂停、可拒绝",md:Wf},{id:"w3-d21",title:"Day 21 · 会话连续性与整合复盘",subtitle:"任务能中断恢复 + 串成端到端 demo",md:zf},{id:"w3-r02",title:"术语表",subtitle:"配套指南",md:qf},{id:"w3-r03",title:"故障排查",subtitle:"配套指南",md:jf},{id:"w3-r04",title:"周末复盘",subtitle:"配套指南",md:Hf},{id:"w3-test",title:"第三周整合自测",subtitle:"综合题 + 整合实操题",md:Uf}]},minicode:{id:"minicode",title:"MiniCode CodeWiki",subtitle:"轻量级终端编码助手源码解读",description:"面向本地开发工作流的轻量级终端编码助手。用约 1.4 万行 TypeScript 还原 Claude Code 式 agent loop、统一工具协议、三层权限、上下文压缩与 TUI，模块边界清晰，适合学习与二次定制。共 30 篇。",category:"wiki",repo:"LiuMengxuan04/MiniCode",branch:"main",chapters:hm},happyclaw:{id:"happyclaw",title:"HappyClaw CodeWiki",subtitle:"自托管多用户 Claude Code 工作台",description:"自托管、多用户、智能体优先的 Claude Code 工作台。把完整 Claude Code 运行时封装成可持续运行的 Web 服务，支持 7 种 IM 渠道、多工作区、定时任务、RBAC 与 Workspace Memory。共 30 篇。",category:"wiki",repo:"riba2534/happyclaw",branch:"main",chapters:_m},"craft-agents":{id:"craft-agents",title:"Craft Agents CodeWiki",subtitle:"craft.do 的 Agent 桌面应用",description:"craft.do 团队开源的以 Agent 为核心的桌面应用：多会话收件箱、工作区、来源集成、技能系统与自动化引擎。Bun monorepo + Electron + WebSocket RPC，桌面/无头/Web 三种形态。共 23 篇。",category:"wiki",repo:"craft-ai-agents/craft-agents-oss",branch:"main",chapters:ym}};function Ts(e){return Mt[e]??null}function bm(e,n){const t=Mt[e];return t?t.chapters.find(r=>r.id===n)??null:null}function yr(e){if(!e)return"";const n=e.id.match(/^w\d-([crd])(\d+)$/);if(n)return n[1].toUpperCase()+String(Number(n[2]));const t=e.id.match(/^pa-(\d+)$/);if(t)return String(Number(t[1]));if(e.id==="pa-intro")return"导";if(e.id==="pa-appendix")return"附";if(e.id==="guide")return"始";if(e.id.endsWith("-readme"))return"总";if(e.id==="w0-start")return"起";if(e.id==="w0-roadmap")return"图";if(e.id==="w0-plan")return"表";if(e.id.endsWith("-test"))return"测";const r=e.id.match(/^[pc](\d+)$/);return r?String(Number(r[1])):""}const Rs=[{key:"w0",label:"Week 0",title:"补齐基础",desc:"概念篇建立 AI 应用与 Agent 认知地图，基础篇补齐动手前置；全程只读不运行，衔接 Week 1 的真实模型访问。",days:"概念 + 基础"},{key:"w1",label:"Week 1",title:"LLM API 与 Agent 范式",desc:"7 天建立认知地基：LLM/API、Prompt 工程、Agent 范式、工具调用、RAG、框架对比、项目选型与 PRD。",days:"Day 1–7"},{key:"w2",label:"Week 2",title:"手写 Agent Loop",desc:"从一次调用走到 Agent 核心机制闭环：ReAct Loop、多工具、计划执行分离、三层记忆、Context 压缩、LangGraph、Subagent。",days:"Day 8–14"},{key:"w3",label:"Week 3",title:"Skill / MCP / 评测 / 安全",desc:"工程化收尾：Harness、Skill 系统、MCP 协议、Multi-agent 诊断、评测体系、可观测性与安全护栏、整合复盘。",days:"Day 15–21"}];function us(e){return!e||!/^w\d-/.test(e.id)?null:e.id.slice(0,2)}function km(e,n){const t=Mt[e];if(!t)return null;const r=Rs.find(s=>s.key===n);return r?{...r,chapters:t.chapters.filter(s=>us(s)===n)}:null}const Qu=[{key:"course",label:"系统课程",hint:"从零到交付的完整学习路径",books:["ai-app-dev"]},{key:"guide",label:"架构导读",hint:"源码级架构解读",books:["pi-agent"]},{key:"wiki",label:"项目 CodeWiki",hint:"三个开源 Agent 项目的逐模块拆解",books:["craft-agents","minicode","happyclaw"]}];function Ju(e){const n=Mt[e];if(!n)return[];if(e==="ai-app-dev"){const i=[],u=n.chapters.find(l=>l.id==="guide");u&&i.push({type:"group",key:"guide",label:"使用指南",chapters:[u]});for(const l of Rs)i.push({type:"group",key:l.key,label:`${l.label} · ${l.title}`,chapters:n.chapters.filter(c=>us(c)===l.key)});return i}if(e==="pi-agent")return[{type:"group",key:"all",label:"全部章节",chapters:n.chapters}];const t=[];let r=null,s=null,o=null;const a=()=>{o&&o.chapters.length&&t.push(o)};for(const i of n.chapters){const u=i.section||"",l=i.group||"概览";u!==r&&(a(),o=null,u&&t.push({type:"section",label:u}),r=u,s=null),l!==s&&(a(),o={type:"group",key:`${u}|${l}`,label:l,chapters:[]},s=l),o.chapters.push(i)}return a(),t}function xm(e,n){if(!(e!=null&&e.repo))return"";const t=e.branch||"main",r=n.indexOf("#"),s=r>=0?n.slice(0,r):n,o=r>=0?n.slice(r):"";return`https://github.com/${e.repo}/blob/${t}/${s}${o}`}const Or=(e,n)=>{const t=e.__vccOpts||e;for(const[r,s]of n)t[r]=s;return t},Am={class:"hub"},vm={class:"hero rise"},wm={class:"meta"},Em={class:"sections"},Cm={class:"cat-head"},Dm={class:"cat-label"},Sm={class:"cat-hint"},Tm={class:"card-top"},Rm={class:"card-mark"},Pm={key:0,class:"card-repo"},Lm={class:"card-title"},Im={class:"card-sub"},Mm={class:"card-desc"},Om={class:"card-bottom"},Nm={class:"card-count"},Fm={__name:"Home",setup(e){const n={"ai-app-dev":"30","pi-agent":"Pi","craft-agents":"CA",minicode:"MC",happyclaw:"HC"},t=ue(()=>Qu.map(o=>({...o,items:o.books.map(a=>Mt[a]).filter(Boolean).map(a=>({...a,mark:n[a.id]??a.id.slice(0,2).toUpperCase()}))}))),r=ue(()=>Object.values(Mt).reduce((o,a)=>o+a.chapters.length,0)),s=ue(()=>Object.keys(Mt).length);return(o,a)=>{const i=At("RouterLink");return ne(),de("main",Am,[S("section",vm,[a[1]||(a[1]=S("h1",{class:"title"},"Agent 工程 · 从系统课程到源码拆解",-1)),a[2]||(a[2]=S("p",{class:"lede"}," 汇集三十天速成计划、Pi Agent 架构导读，以及三个开源 Agent 项目的逐模块 CodeWiki。 每本书配有常驻目录侧栏，像 GitBook 一样随时跳转、连续阅读。 ",-1)),S("div",wm,[S("span",null,Z(s.value)+" 套资料",1),a[0]||(a[0]=S("span",{class:"meta-dot"},"·",-1)),S("span",null,Z(r.value)+" 篇内容",1)])]),S("div",Em,[(ne(!0),de(He,null,pt(t.value,(u,l)=>(ne(),de("section",{key:u.key,class:"cat rise",style:er({animationDelay:`${.06*(l+1)}s`})},[S("header",Cm,[S("h2",Dm,Z(u.label),1),S("span",Sm,Z(u.hint),1)]),S("div",{class:Kn(["cat-grid",`grid-${u.items.length}`])},[(ne(!0),de(He,null,pt(u.items,c=>(ne(),Vn(i,{key:c.id,to:`/book/${c.id}`,class:"book-card"},{default:Xe(()=>[S("span",Tm,[S("span",Rm,Z(c.mark),1),c.repo?(ne(),de("span",Pm,Z(c.repo),1)):En("",!0)]),S("span",Lm,Z(c.title),1),S("span",Im,Z(c.subtitle),1),S("span",Mm,Z(c.description),1),S("span",Om,[S("span",Nm,"共 "+Z(c.chapters.length)+" 篇",1),a[3]||(a[3]=S("span",{class:"card-arrow","aria-hidden":"true"},"→",-1))])]),_:2},1032,["to"]))),128))],2)],4))),128))]),a[4]||(a[4]=S("footer",{class:"colophon"}," 持续更新中 · 遇到问题请与 AI 交流学习 ",-1))])}}},Bm=Or(Fm,[["__scopeId","data-v-dffc6cdf"]]),Wm={key:0,class:"book-shell"},zm=["aria-label","aria-expanded"],qm={class:"sidebar-book-title"},jm={class:"sidebar-book-sub"},Hm={class:"sidebar-nav"},Um={key:0,class:"nav-section"},Gm=["onClick"],$m={class:"group-text"},Km={class:"group-count"},Vm={class:"group-items"},Qm={class:"ch-badge"},Jm={class:"ch-title"},Ym={class:"shell-main"},Xm={__name:"BookShell",setup(e){const n=Ss(),t=Ds(),r=ue(()=>n.params.bookId),s=ue(()=>Ts(r.value)),o=ue(()=>s.value?Ju(r.value):[]),a=ue(()=>n.name==="chapter"?n.params.chapterId:""),i=ue(()=>n.name==="week"?n.params.week:"");function u(A){return A.id===a.value}function l(A){return!!(A.chapters.some(w=>w.id===a.value)||i.value&&A.key===i.value)}const c=Rn(new Set);function d(A){const w=new Set(c.value);w.has(A)?w.delete(A):w.add(A),c.value=w}function p(A){return c.value.has(A)}const f=Rn(!1);function g(){f.value=!1}Pn(()=>[n.name,n.params.chapterId,n.params.week,n.params.bookId],()=>{f.value&&g(),xr(()=>{var w;const A=(w=v.value)==null?void 0:w.querySelector(".ch-link.active");A==null||A.scrollIntoView({block:"center"})})});const v=Rn(null);function P(A){return r.value==="ai-app-dev"&&/^w\d$/.test(A.key)?`/book/${r.value}/week/${A.key}`:""}function M(A){const w=P(A);w?(t.push(w),g()):d(A.key)}return Pn(s,A=>{!A&&n.params.bookId&&t.replace("/")},{immediate:!0}),(A,w)=>{const C=At("RouterLink"),O=At("RouterView");return s.value?(ne(),de("div",Wm,[S("button",{type:"button",class:"drawer-toggle","aria-label":f.value?"关闭目录":"打开目录","aria-expanded":f.value,onClick:w[0]||(w[0]=N=>f.value=!f.value)},[...w[1]||(w[1]=[S("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","aria-hidden":"true"},[S("path",{d:"M4 7h16M4 12h16M4 17h16"})],-1)])],8,zm),f.value?(ne(),de("div",{key:0,class:"drawer-overlay",onClick:g,"aria-hidden":"true"})):En("",!0),S("aside",{ref_key:"sidebarRef",ref:v,class:Kn(["sidebar",{open:f.value}]),"aria-label":"书本目录"},[Oe(C,{to:"/",class:"sidebar-home"},{default:Xe(()=>[...w[2]||(w[2]=[S("span",{class:"sidebar-home-chevron","aria-hidden":"true"},"‹",-1),Ot(" 资源库 ",-1)])]),_:1}),Oe(C,{to:`/book/${r.value}`,class:"sidebar-book"},{default:Xe(()=>[S("span",qm,Z(s.value.title),1),S("span",jm,Z(s.value.subtitle),1)]),_:1},8,["to"]),S("nav",Hm,[(ne(!0),de(He,null,pt(o.value,N=>(ne(),de(He,{key:N.type+(N.key||N.label)},[N.type==="section"?(ne(),de("p",Um,Z(N.label),1)):(ne(),de("div",{key:1,class:Kn(["nav-group",{active:l(N)}])},[S("button",{type:"button",class:Kn(["group-label",{clickable:!!P(N)}]),onClick:$=>M(N)},[S("span",{class:Kn(["group-caret",{collapsed:p(N.key)}]),"aria-hidden":"true"},"▸",2),S("span",$m,Z(N.label),1),S("span",Km,Z(N.chapters.length),1)],10,Gm),qc(S("div",Vm,[(ne(!0),de(He,null,pt(N.chapters,$=>(ne(),Vn(C,{key:$.id,to:`/book/${r.value}/chapter/${$.id}`,class:Kn(["ch-link",{active:u($)}])},{default:Xe(()=>[S("span",Qm,Z(Dn(yr)($)),1),S("span",Jm,Z($.title),1)]),_:2},1032,["to","class"]))),128))],512),[[Xd,!p(N.key)]])],2))],64))),128))])],2),S("main",Ym,[Oe(O)])])):En("",!0)}}},Zm=Or(Xm,[["__scopeId","data-v-e02d0898"]]),eg={key:0,class:"book-home"},ng={class:"hero rise"},tg={key:0,class:"kicker"},rg={class:"title"},sg={class:"sub"},og={class:"lede"},ag={class:"meta"},ig={key:0,class:"week-grid rise"},ug={class:"week-top"},lg={class:"week-label"},cg={class:"week-days"},dg={class:"week-title"},pg={class:"week-desc"},fg={key:1,class:"group-list rise"},mg={key:0,class:"group-section"},gg={class:"group-card-top"},hg={class:"group-card-label"},_g={class:"group-card-count"},yg={class:"group-card-first"},bg={class:"group-card-title"},kg={key:2,class:"pa-intro rise"},xg={class:"pa-intro-text"},Ag={__name:"BookHome",setup(e){const n=Ss(),t=Ds(),r=ue(()=>Ts(n.params.bookId));Pn(r,d=>{!d&&n.params.bookId&&t.replace("/")},{immediate:!0});const s=ue(()=>{var d;return((d=r.value)==null?void 0:d.chapters[0])??null}),o=ue(()=>r.value?Ju(r.value.id):[]),a=ue(()=>r.value?Qu.find(d=>d.books.includes(r.value.id))??null:null),i=ue(()=>{if(!r.value||!o.value.length)return[];const d=[];for(const p of o.value)p.type==="section"?d.push({type:"section",label:p.label}):p.type==="group"&&p.chapters.length&&d.push({type:"group",key:p.key,label:p.label,count:p.chapters.length,first:p.chapters[0]});return d}),u=ue(()=>{var d;return((d=r.value)==null?void 0:d.id)==="ai-app-dev"}),l=ue(()=>{var d;return((d=r.value)==null?void 0:d.category)==="wiki"});function c(d){return`/book/${r.value.id}/chapter/${d}`}return(d,p)=>{const f=At("RouterLink");return r.value?(ne(),de("main",eg,[S("section",ng,[a.value?(ne(),de("p",tg,Z(a.value.label),1)):En("",!0),S("h1",rg,Z(r.value.title),1),S("p",sg,Z(r.value.subtitle),1),S("p",og,Z(r.value.description),1),S("div",ag,[S("span",null,"共 "+Z(r.value.chapters.length)+" 篇",1),p[0]||(p[0]=S("span",{class:"meta-dot"},"·",-1)),S("span",null,Z(o.value.filter(g=>g.type==="group").length)+" 个分组",1)]),s.value?(ne(),Vn(f,{key:1,to:c(s.value.id),class:"cta"},{default:Xe(()=>[...p[1]||(p[1]=[Ot(" 开始阅读 ",-1),S("span",{class:"cta-arrow","aria-hidden":"true"},"→",-1)])]),_:1},8,["to"])):En("",!0)]),u.value?(ne(),de("nav",ig,[Oe(f,{to:c("guide"),class:"guide-card"},{default:Xe(()=>[...p[2]||(p[2]=[S("span",{class:"guide-badge"},"开始",-1),S("span",{class:"guide-meta"},[S("span",{class:"guide-title"},"使用指南"),S("span",{class:"guide-sub"},"课程总览与学习路径 · 先读这一篇")],-1),S("span",{class:"guide-arrow"},"→",-1)])]),_:1},8,["to"]),(ne(!0),de(He,null,pt(Dn(Rs),(g,v)=>(ne(),Vn(f,{key:g.key,to:`/book/${r.value.id}/week/${g.key}`,class:"week-card",style:er({animationDelay:`${.06*(v+1)}s`})},{default:Xe(()=>[S("span",ug,[S("span",lg,Z(g.label),1),S("span",cg,Z(g.days),1)]),S("span",dg,Z(g.title),1),S("span",pg,Z(g.desc),1),p[3]||(p[3]=S("span",{class:"week-bottom"},[S("span",{class:"week-count"},"进入目录"),S("span",{class:"week-arrow","aria-hidden":"true"},"→")],-1))]),_:2},1032,["to","style"]))),128))])):l.value?(ne(),de("nav",fg,[(ne(!0),de(He,null,pt(i.value,g=>(ne(),de(He,{key:g.type+(g.key||g.label)},[g.type==="section"?(ne(),de("p",mg,Z(g.label),1)):(ne(),Vn(f,{key:1,to:c(g.first.id),class:"group-card"},{default:Xe(()=>[S("span",gg,[S("span",hg,Z(g.label),1),S("span",_g,Z(g.count)+" 篇",1)]),S("span",yg,[p[4]||(p[4]=S("span",{class:"group-card-from"},"从",-1)),S("span",bg,Z(g.first.title),1),p[5]||(p[5]=S("span",{class:"group-card-from"},"开始",-1))]),p[6]||(p[6]=S("span",{class:"group-card-arrow","aria-hidden":"true"},"→",-1))]),_:2},1032,["to"]))],64))),128))])):(ne(),de("section",kg,[S("p",xg," 全书共 "+Z(r.value.chapters.length)+" 章，按「一次 prompt 的全程」展开，从循环结构到 Harness 契约。 点击左侧目录任一章开始，或从第一章读起。 ",1),s.value?(ne(),Vn(f,{key:0,to:c(s.value.id),class:"pa-cta"},{default:Xe(()=>[...p[7]||(p[7]=[Ot(" 从第一章开始 ",-1),S("span",{"aria-hidden":"true"},"→",-1)])]),_:1},8,["to"])):En("",!0)])),p[8]||(p[8]=S("footer",{class:"colophon"}," 持续更新中 · 遇到问题请与 AI 交流学习 ",-1))])):En("",!0)}}},vg=Or(Ag,[["__scopeId","data-v-119c8e8d"]]),wg={key:0,class:"week-page"},Eg={class:"week-head rise"},Cg={class:"week-kicker"},Dg={class:"week-title"},Sg={class:"week-desc"},Tg={class:"chapter-list"},Rg={class:"group-label"},Pg={class:"group-count"},Lg={class:"ch-num"},Ig={class:"ch-meta"},Mg={class:"ch-title"},Og={class:"ch-sub"},Ng={__name:"Week",setup(e){const n=Ss(),t=Ds(),r=ue(()=>{const u=Ts(n.params.bookId);return u||t.replace("/"),u}),s=ue(()=>{const u=km(n.params.bookId,n.params.week);return!u&&r.value&&t.replace(`/book/${n.params.bookId}`),u}),o=[{key:"overview",label:"概览"},{key:"daily",label:"每日正文"},{key:"concepts",label:"概念篇"},{key:"start",label:"入门"},{key:"refs",label:"配套指南"},{key:"quiz",label:"自测"}];function a(u){return u.id.endsWith("-readme")?"overview":u.id.match(/^w\d-d\d/)?"daily":u.id.match(/^w\d-c\d/)?"concepts":u.id==="w0-start"||u.id==="w0-roadmap"||u.id==="w0-plan"?"start":u.id.match(/^w\d-r\d/)?"refs":u.id.endsWith("-test")?"quiz":null}const i=ue(()=>s.value?o.map(u=>({...u,chapters:s.value.chapters.filter(l=>a(l)===u.key)})).filter(u=>u.chapters.length>0):[]);return(u,l)=>{const c=At("RouterLink");return r.value&&s.value?(ne(),de("main",wg,[Oe(c,{to:`/book/${r.value.id}`,class:"back-link rise"},{default:Xe(()=>[...l[0]||(l[0]=[S("span",{class:"back-chevron","aria-hidden":"true"},"‹",-1),Ot(" 课程总览 ",-1)])]),_:1},8,["to"]),S("header",Eg,[S("p",Cg,Z(s.value.label)+" · "+Z(s.value.days)+" · 共 "+Z(s.value.chapters.length)+" 章 ",1),S("h1",Dg,Z(s.value.title),1),S("p",Sg,Z(s.value.desc),1)]),S("nav",Tg,[(ne(!0),de(He,null,pt(i.value,d=>(ne(),de("section",{key:d.key,class:"chapter-group"},[S("h2",Rg,[S("span",null,Z(d.label),1),S("span",Pg,Z(d.chapters.length)+" 章",1)]),(ne(!0),de(He,null,pt(d.chapters,p=>(ne(),Vn(c,{key:p.id,to:`/book/${r.value.id}/chapter/${p.id}`,class:"chapter-item"},{default:Xe(()=>[S("span",Lg,Z(Dn(yr)(p)),1),S("span",Ig,[S("span",Mg,Z(p.title),1),S("span",Og,Z(p.subtitle),1)]),l[1]||(l[1]=S("span",{class:"ch-arrow"},"→",-1))]),_:2},1032,["to"]))),128))]))),128))])])):En("",!0)}}},Fg=Or(Ng,[["__scopeId","data-v-4a4fb8ff"]]),oi={};function Bg(e){let n=oi[e];if(n)return n;n=oi[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);n.push(r)}for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);n[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return n}function Xt(e,n){typeof n!="string"&&(n=Xt.defaultChars);const t=Bg(n);return e.replace(/(%[a-f0-9]{2})+/gi,function(r){let s="";for(let o=0,a=r.length;o<a;o+=3){const i=parseInt(r.slice(o+1,o+3),16);if(i<128){s+=t[i];continue}if((i&224)===192&&o+3<a){const u=parseInt(r.slice(o+4,o+6),16);if((u&192)===128){const l=i<<6&1984|u&63;l<128?s+="��":s+=String.fromCharCode(l),o+=3;continue}}if((i&240)===224&&o+6<a){const u=parseInt(r.slice(o+4,o+6),16),l=parseInt(r.slice(o+7,o+9),16);if((u&192)===128&&(l&192)===128){const c=i<<12&61440|u<<6&4032|l&63;c<2048||c>=55296&&c<=57343?s+="���":s+=String.fromCharCode(c),o+=6;continue}}if((i&248)===240&&o+9<a){const u=parseInt(r.slice(o+4,o+6),16),l=parseInt(r.slice(o+7,o+9),16),c=parseInt(r.slice(o+10,o+12),16);if((u&192)===128&&(l&192)===128&&(c&192)===128){let d=i<<18&1835008|u<<12&258048|l<<6&4032|c&63;d<65536||d>1114111?s+="����":(d-=65536,s+=String.fromCharCode(55296+(d>>10),56320+(d&1023))),o+=9;continue}}s+="�"}return s})}Xt.defaultChars=";/?:@&=+$,#";Xt.componentChars="";const ai={};function Wg(e){let n=ai[e];if(n)return n;n=ai[e]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?n.push(r):n.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)n[e.charCodeAt(t)]=e[t];return n}function Nr(e,n,t){typeof n!="string"&&(t=n,n=Nr.defaultChars),typeof t>"u"&&(t=!0);const r=Wg(n);let s="";for(let o=0,a=e.length;o<a;o++){const i=e.charCodeAt(o);if(t&&i===37&&o+2<a&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3))){s+=e.slice(o,o+3),o+=2;continue}if(i<128){s+=r[i];continue}if(i>=55296&&i<=57343){if(i>=55296&&i<=56319&&o+1<a){const u=e.charCodeAt(o+1);if(u>=56320&&u<=57343){s+=encodeURIComponent(e[o]+e[o+1]),o++;continue}}s+="%EF%BF%BD";continue}s+=encodeURIComponent(e[o])}return s}Nr.defaultChars=";/?:@&=+$,-_.!~*'()#";Nr.componentChars="-_.!~*'()";function Vo(e){let n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}function ls(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const zg=/^([a-z0-9.+-]+:)/i,qg=/:[0-9]*$/,jg=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Hg=["<",">",'"',"`"," ","\r",`
`,"	"],Ug=["{","}","|","\\","^","`"].concat(Hg),Gg=["'"].concat(Ug),ii=["%","/","?",";","#"].concat(Gg),ui=["/","?","#"],$g=255,li=/^[+a-z0-9A-Z_-]{0,63}$/,Kg=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,ci={javascript:!0,"javascript:":!0},di={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Qo(e,n){if(e&&e instanceof ls)return e;const t=new ls;return t.parse(e,n),t}ls.prototype.parse=function(e,n){let t,r,s,o=e;if(o=o.trim(),!n&&e.split("#").length===1){const l=jg.exec(o);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let a=zg.exec(o);if(a&&(a=a[0],t=a.toLowerCase(),this.protocol=a,o=o.substr(a.length)),(n||a||o.match(/^\/\/[^@\/]+@[^@\/]+/))&&(s=o.substr(0,2)==="//",s&&!(a&&ci[a])&&(o=o.substr(2),this.slashes=!0)),!ci[a]&&(s||a&&!di[a])){let l=-1;for(let g=0;g<ui.length;g++)r=o.indexOf(ui[g]),r!==-1&&(l===-1||r<l)&&(l=r);let c,d;l===-1?d=o.lastIndexOf("@"):d=o.lastIndexOf("@",l),d!==-1&&(c=o.slice(0,d),o=o.slice(d+1),this.auth=c),l=-1;for(let g=0;g<ii.length;g++)r=o.indexOf(ii[g]),r!==-1&&(l===-1||r<l)&&(l=r);l===-1&&(l=o.length),o[l-1]===":"&&l--;const p=o.slice(0,l);o=o.slice(l),this.parseHost(p),this.hostname=this.hostname||"";const f=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!f){const g=this.hostname.split(/\./);for(let v=0,P=g.length;v<P;v++){const M=g[v];if(M&&!M.match(li)){let A="";for(let w=0,C=M.length;w<C;w++)M.charCodeAt(w)>127?A+="x":A+=M[w];if(!A.match(li)){const w=g.slice(0,v),C=g.slice(v+1),O=M.match(Kg);O&&(w.push(O[1]),C.unshift(O[2])),C.length&&(o=C.join(".")+o),this.hostname=w.join(".");break}}}}this.hostname.length>$g&&(this.hostname=""),f&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const i=o.indexOf("#");i!==-1&&(this.hash=o.substr(i),o=o.slice(0,i));const u=o.indexOf("?");return u!==-1&&(this.search=o.substr(u),o=o.slice(0,u)),o&&(this.pathname=o),di[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};ls.prototype.parseHost=function(e){let n=qg.exec(e);n&&(n=n[0],n!==":"&&(this.port=n.substr(1)),e=e.substr(0,e.length-n.length)),e&&(this.hostname=e)};const Vg=Object.freeze(Object.defineProperty({__proto__:null,decode:Xt,encode:Nr,format:Vo,parse:Qo},Symbol.toStringTag,{value:"Module"})),Yu=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,Xu=/[\0-\x1F\x7F-\x9F]/,Qg=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Jo=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,Zu=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,el=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Jg=Object.freeze(Object.defineProperty({__proto__:null,Any:Yu,Cc:Xu,Cf:Qg,P:Jo,S:Zu,Z:el},Symbol.toStringTag,{value:"Module"})),Yg=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),Xg=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var so;const Zg=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),eh=(so=String.fromCodePoint)!==null&&so!==void 0?so:function(e){let n="";return e>65535&&(e-=65536,n+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),n+=String.fromCharCode(e),n};function nh(e){var n;return e>=55296&&e<=57343||e>1114111?65533:(n=Zg.get(e))!==null&&n!==void 0?n:e}var Ze;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(Ze||(Ze={}));const th=32;var xt;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(xt||(xt={}));function So(e){return e>=Ze.ZERO&&e<=Ze.NINE}function rh(e){return e>=Ze.UPPER_A&&e<=Ze.UPPER_F||e>=Ze.LOWER_A&&e<=Ze.LOWER_F}function sh(e){return e>=Ze.UPPER_A&&e<=Ze.UPPER_Z||e>=Ze.LOWER_A&&e<=Ze.LOWER_Z||So(e)}function oh(e){return e===Ze.EQUALS||sh(e)}var Ye;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(Ye||(Ye={}));var ut;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(ut||(ut={}));class ah{constructor(n,t,r){this.decodeTree=n,this.emitCodePoint=t,this.errors=r,this.state=Ye.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=ut.Strict}startEntity(n){this.decodeMode=n,this.state=Ye.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(n,t){switch(this.state){case Ye.EntityStart:return n.charCodeAt(t)===Ze.NUM?(this.state=Ye.NumericStart,this.consumed+=1,this.stateNumericStart(n,t+1)):(this.state=Ye.NamedEntity,this.stateNamedEntity(n,t));case Ye.NumericStart:return this.stateNumericStart(n,t);case Ye.NumericDecimal:return this.stateNumericDecimal(n,t);case Ye.NumericHex:return this.stateNumericHex(n,t);case Ye.NamedEntity:return this.stateNamedEntity(n,t)}}stateNumericStart(n,t){return t>=n.length?-1:(n.charCodeAt(t)|th)===Ze.LOWER_X?(this.state=Ye.NumericHex,this.consumed+=1,this.stateNumericHex(n,t+1)):(this.state=Ye.NumericDecimal,this.stateNumericDecimal(n,t))}addToNumericResult(n,t,r,s){if(t!==r){const o=r-t;this.result=this.result*Math.pow(s,o)+parseInt(n.substr(t,o),s),this.consumed+=o}}stateNumericHex(n,t){const r=t;for(;t<n.length;){const s=n.charCodeAt(t);if(So(s)||rh(s))t+=1;else return this.addToNumericResult(n,r,t,16),this.emitNumericEntity(s,3)}return this.addToNumericResult(n,r,t,16),-1}stateNumericDecimal(n,t){const r=t;for(;t<n.length;){const s=n.charCodeAt(t);if(So(s))t+=1;else return this.addToNumericResult(n,r,t,10),this.emitNumericEntity(s,2)}return this.addToNumericResult(n,r,t,10),-1}emitNumericEntity(n,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(n===Ze.SEMI)this.consumed+=1;else if(this.decodeMode===ut.Strict)return 0;return this.emitCodePoint(nh(this.result),this.consumed),this.errors&&(n!==Ze.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(n,t){const{decodeTree:r}=this;let s=r[this.treeIndex],o=(s&xt.VALUE_LENGTH)>>14;for(;t<n.length;t++,this.excess++){const a=n.charCodeAt(t);if(this.treeIndex=ih(r,s,this.treeIndex+Math.max(1,o),a),this.treeIndex<0)return this.result===0||this.decodeMode===ut.Attribute&&(o===0||oh(a))?0:this.emitNotTerminatedNamedEntity();if(s=r[this.treeIndex],o=(s&xt.VALUE_LENGTH)>>14,o!==0){if(a===Ze.SEMI)return this.emitNamedEntityData(this.treeIndex,o,this.consumed+this.excess);this.decodeMode!==ut.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var n;const{result:t,decodeTree:r}=this,s=(r[t]&xt.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,s,this.consumed),(n=this.errors)===null||n===void 0||n.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(n,t,r){const{decodeTree:s}=this;return this.emitCodePoint(t===1?s[n]&~xt.VALUE_LENGTH:s[n+1],r),t===3&&this.emitCodePoint(s[n+2],r),r}end(){var n;switch(this.state){case Ye.NamedEntity:return this.result!==0&&(this.decodeMode!==ut.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Ye.NumericDecimal:return this.emitNumericEntity(0,2);case Ye.NumericHex:return this.emitNumericEntity(0,3);case Ye.NumericStart:return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Ye.EntityStart:return 0}}}function nl(e){let n="";const t=new ah(e,r=>n+=eh(r));return function(s,o){let a=0,i=0;for(;(i=s.indexOf("&",i))>=0;){n+=s.slice(a,i),t.startEntity(o);const l=t.write(s,i+1);if(l<0){a=i+t.end();break}a=i+l,i=l===0?a+1:a}const u=n+s.slice(a);return n="",u}}function ih(e,n,t,r){const s=(n&xt.BRANCH_LENGTH)>>7,o=n&xt.JUMP_TABLE;if(s===0)return o!==0&&r===o?t:-1;if(o){const u=r-o;return u<0||u>=s?-1:e[t+u]-1}let a=t,i=a+s-1;for(;a<=i;){const u=a+i>>>1,l=e[u];if(l<r)a=u+1;else if(l>r)i=u-1;else return e[u+s]}return-1}const tl=nl(Yg);nl(Xg);function uh(e,n=ut.Legacy){return tl(e,n)}function lh(e){return tl(e,ut.Strict)}function ch(e){return Object.prototype.toString.call(e)}function Yo(e){return ch(e)==="[object String]"}const dh=Object.prototype.hasOwnProperty;function ph(e,n){return dh.call(e,n)}function Ps(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){e[r]=t[r]})}}),e}function rl(e,n,t){return[].concat(e.slice(0,n),t,e.slice(n+1))}function Xo(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Dr(e){if(e>65535){e-=65536;const n=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(n,t)}return String.fromCharCode(e)}const sl=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,fh=/&([a-z#][a-z0-9]{1,31});/gi,mh=new RegExp(sl.source+"|"+fh.source,"gi"),gh=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function hh(e,n){if(n.charCodeAt(0)===35&&gh.test(n)){const r=n[1].toLowerCase()==="x"?parseInt(n.slice(2),16):parseInt(n.slice(1),10);return Xo(r)?Dr(r):e}const t=uh(e);return t!==e?t:e}function _h(e){return e.indexOf("\\")<0?e:e.replace(sl,"$1")}function Zt(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(mh,function(n,t,r){return t||hh(n,r)})}const yh=/[&<>"]/,bh=/[&<>"]/g,kh={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function xh(e){return kh[e]}function vt(e){return yh.test(e)?e.replace(bh,xh):e}const Ah=/[.?*+^$[\]\\(){}|-]/g;function vh(e){return e.replace(Ah,"\\$&")}function Pe(e){switch(e){case 9:case 32:return!0}return!1}function Sr(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function ol(e){return Jo.test(e)||Zu.test(e)}function Tr(e){return ol(Dr(e))}function Rr(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Ls(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}function pi(e){return e===32||e===9||e===10||e===13}function Is(e){let n=0;for(;n<e.length&&pi(e.charCodeAt(n));n++);let t=e.length-1;for(;t>=n&&pi(e.charCodeAt(t));t--);return e.slice(n,t+1)}const wh={mdurl:Vg,ucmicro:Jg},Eh=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:rl,asciiTrim:Is,assign:Ps,escapeHtml:vt,escapeRE:vh,fromCodePoint:Dr,has:ph,isMdAsciiPunct:Rr,isPunctChar:ol,isPunctCharCode:Tr,isSpace:Pe,isString:Yo,isValidEntityCode:Xo,isWhiteSpace:Sr,lib:wh,normalizeReference:Ls,unescapeAll:Zt,unescapeMd:_h},Symbol.toStringTag,{value:"Module"}));function Ch(e,n,t){let r,s,o,a;const i=e.posMax,u=e.pos;for(e.pos=n+1,r=1;e.pos<i;){if(o=e.src.charCodeAt(e.pos),o===93&&(r--,r===0)){s=!0;break}if(a=e.pos,e.md.inline.skipToken(e),o===91){if(a===e.pos-1)r++;else if(t)return e.pos=u,-1}}let l=-1;return s&&(l=e.pos),e.pos=u,l}function Dh(e,n,t){let r,s=n;const o={ok:!1,pos:0,str:""};if(e.charCodeAt(s)===60){for(s++;s<t;){if(r=e.charCodeAt(s),r===10||r===60)return o;if(r===62)return o.pos=s+1,o.str=Zt(e.slice(n+1,s)),o.ok=!0,o;if(r===92&&s+1<t){s+=2;continue}s++}return o}let a=0;for(;s<t&&(r=e.charCodeAt(s),!(r===32||r<32||r===127));){if(r===92&&s+1<t){if(e.charCodeAt(s+1)===32)break;s+=2;continue}if(r===40&&(a++,a>32))return o;if(r===41){if(a===0)break;a--}s++}return n===s||a!==0||(o.str=Zt(e.slice(n,s)),o.pos=s,o.ok=!0),o}function Sh(e,n,t,r){let s,o=n;const a={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)a.str=r.str,a.marker=r.marker;else{if(o>=t)return a;let i=e.charCodeAt(o);if(i!==34&&i!==39&&i!==40)return a;n++,o++,i===40&&(i=41),a.marker=i}for(;o<t;){if(s=e.charCodeAt(o),s===a.marker)return a.pos=o+1,a.str+=Zt(e.slice(n,o)),a.ok=!0,a;if(s===40&&a.marker===41)return a;s===92&&o+1<t&&o++,o++}return a.can_continue=!0,a.str+=Zt(e.slice(n,o)),a}const Th=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Dh,parseLinkLabel:Ch,parseLinkTitle:Sh},Symbol.toStringTag,{value:"Module"})),Zn={};Zn.code_inline=function(e,n,t,r,s){const o=e[n];return"<code"+s.renderAttrs(o)+">"+vt(o.content)+"</code>"};Zn.code_block=function(e,n,t,r,s){const o=e[n];return"<pre"+s.renderAttrs(o)+"><code>"+vt(e[n].content)+`</code></pre>
`};Zn.fence=function(e,n,t,r,s){const o=e[n],a=o.info?Zt(o.info).trim():"";let i="",u="";if(a){const c=a.split(/(\s+)/g);i=c[0],u=c.slice(2).join("")}let l;if(t.highlight?l=t.highlight(o.content,i,u)||vt(o.content):l=vt(o.content),l.indexOf("<pre")===0)return l+`
`;if(a){const c=o.attrIndex("class"),d=o.attrs?o.attrs.slice():[];c<0?d.push(["class",t.langPrefix+i]):(d[c]=d[c].slice(),d[c][1]+=" "+t.langPrefix+i);const p={attrs:d};return`<pre><code${s.renderAttrs(p)}>${l}</code></pre>
`}return`<pre><code${s.renderAttrs(o)}>${l}</code></pre>
`};Zn.image=function(e,n,t,r,s){const o=e[n];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,r),s.renderToken(e,n,t)};Zn.hardbreak=function(e,n,t){return t.xhtmlOut?`<br />
`:`<br>
`};Zn.softbreak=function(e,n,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Zn.text=function(e,n){return vt(e[n].content)};Zn.html_block=function(e,n){return e[n].content};Zn.html_inline=function(e,n){return e[n].content};function nr(){this.rules=Ps({},Zn)}nr.prototype.renderAttrs=function(n){let t,r,s;if(!n.attrs)return"";for(s="",t=0,r=n.attrs.length;t<r;t++)s+=" "+vt(n.attrs[t][0])+'="'+vt(n.attrs[t][1])+'"';return s};nr.prototype.renderToken=function(n,t,r){const s=n[t];let o="";if(s.hidden)return"";s.block&&s.nesting!==-1&&t&&n[t-1].hidden&&(o+=`
`),o+=(s.nesting===-1?"</":"<")+s.tag,o+=this.renderAttrs(s),s.nesting===0&&r.xhtmlOut&&(o+=" /");let a=!1;if(s.block&&(a=!0,s.nesting===1&&t+1<n.length)){const i=n[t+1];(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===s.tag)&&(a=!1)}return o+=a?`>
`:">",o};nr.prototype.renderInline=function(e,n,t){let r="";const s=this.rules;for(let o=0,a=e.length;o<a;o++){const i=e[o].type;typeof s[i]<"u"?r+=s[i](e,o,n,t,this):r+=this.renderToken(e,o,n)}return r};nr.prototype.renderInlineAsText=function(e,n,t){let r="";for(let s=0,o=e.length;s<o;s++)switch(e[s].type){case"text":r+=e[s].content;break;case"image":r+=this.renderInlineAsText(e[s].children,n,t);break;case"html_inline":case"html_block":r+=e[s].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};nr.prototype.render=function(e,n,t){let r="";const s=this.rules;for(let o=0,a=e.length;o<a;o++){const i=e[o].type;i==="inline"?r+=this.renderInline(e[o].children,n,t):typeof s[i]<"u"?r+=s[i](e,o,n,t,this):r+=this.renderToken(e,o,n,t)}return r};function hn(){this.__rules__=[],this.__cache__=null}hn.prototype.__find__=function(e){for(let n=0;n<this.__rules__.length;n++)if(this.__rules__[n].name===e)return n;return-1};hn.prototype.__compile__=function(){const e=this,n=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){n.indexOf(r)<0&&n.push(r)})}),e.__cache__={},n.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||e.__cache__[t].push(r.fn))})})};hn.prototype.at=function(e,n,t){const r=this.__find__(e),s=t||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__[r].fn=n,this.__rules__[r].alt=s.alt||[],this.__cache__=null};hn.prototype.before=function(e,n,t,r){const s=this.__find__(e),o=r||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};hn.prototype.after=function(e,n,t,r){const s=this.__find__(e),o=r||{};if(s===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:n,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};hn.prototype.push=function(e,n,t){const r=t||{};this.__rules__.push({name:e,enabled:!0,fn:n,alt:r.alt||[]}),this.__cache__=null};hn.prototype.enable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const s=this.__find__(r);if(s<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!0,t.push(r)},this),this.__cache__=null,t};hn.prototype.enableOnly=function(e,n){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,n)};hn.prototype.disable=function(e,n){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(r){const s=this.__find__(r);if(s<0){if(n)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[s].enabled=!1,t.push(r)},this),this.__cache__=null,t};hn.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Fn(e,n,t){this.type=e,this.tag=n,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Fn.prototype.attrIndex=function(n){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,s=t.length;r<s;r++)if(t[r][0]===n)return r;return-1};Fn.prototype.attrPush=function(n){this.attrs?this.attrs.push(n):this.attrs=[n]};Fn.prototype.attrSet=function(n,t){const r=this.attrIndex(n),s=[n,t];r<0?this.attrPush(s):this.attrs[r]=s};Fn.prototype.attrGet=function(n){const t=this.attrIndex(n);let r=null;return t>=0&&(r=this.attrs[t][1]),r};Fn.prototype.attrJoin=function(n,t){const r=this.attrIndex(n);r<0?this.attrPush([n,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function al(e,n,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=n}al.prototype.Token=Fn;const Rh=/\r\n?|\n/g,Ph=/\0/g;function Lh(e){let n;n=e.src.replace(Rh,`
`),n=n.replace(Ph,"�"),e.src=n}function Ih(e){let n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function Mh(e){const n=e.tokens;for(let t=0,r=n.length;t<r;t++){const s=n[t];s.type==="inline"&&e.md.inline.parse(s.content,e.md,e.env,s.children)}}function Oh(e){return/^<a[>\s]/i.test(e)}function Nh(e){return/^<\/a\s*>/i.test(e)}function Fh(e){const n=e.tokens;if(e.md.options.linkify)for(let t=0,r=n.length;t<r;t++){if(n[t].type!=="inline"||!e.md.linkify.pretest(n[t].content))continue;let s=n[t].children,o=0;for(let a=s.length-1;a>=0;a--){const i=s[a];if(i.type==="link_close"){for(a--;s[a].level!==i.level&&s[a].type!=="link_open";)a--;continue}if(i.type==="html_inline"&&(Oh(i.content)&&o>0&&o--,Nh(i.content)&&o++),!(o>0)&&i.type==="text"&&e.md.linkify.test(i.content)){const u=i.content;let l=e.md.linkify.match(u);const c=[];let d=i.level,p=0;l.length>0&&l[0].index===0&&a>0&&s[a-1].type==="text_special"&&(l=l.slice(1));for(let f=0;f<l.length;f++){const g=l[f].url,v=e.md.normalizeLink(g);if(!e.md.validateLink(v))continue;let P=l[f].text;l[f].schema?l[f].schema==="mailto:"&&!/^mailto:/i.test(P)?P=e.md.normalizeLinkText("mailto:"+P).replace(/^mailto:/,""):P=e.md.normalizeLinkText(P):P=e.md.normalizeLinkText("http://"+P).replace(/^http:\/\//,"");const M=l[f].index;if(M>p){const O=new e.Token("text","",0);O.content=u.slice(p,M),O.level=d,c.push(O)}const A=new e.Token("link_open","a",1);A.attrs=[["href",v]],A.level=d++,A.markup="linkify",A.info="auto",c.push(A);const w=new e.Token("text","",0);w.content=P,w.level=d,c.push(w);const C=new e.Token("link_close","a",-1);C.level=--d,C.markup="linkify",C.info="auto",c.push(C),p=l[f].lastIndex}if(p<u.length){const f=new e.Token("text","",0);f.content=u.slice(p),f.level=d,c.push(f)}n[t].children=s=rl(s,a,c)}}}}const il=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,Bh=/\((c|tm|r)\)/i,Wh=/\((c|tm|r)\)/ig,zh={c:"©",r:"®",tm:"™"};function qh(e,n){return zh[n.toLowerCase()]}function jh(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&(r.content=r.content.replace(Wh,qh)),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function Hh(e){let n=0;for(let t=e.length-1;t>=0;t--){const r=e[t];r.type==="text"&&!n&&il.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&n--,r.type==="link_close"&&r.info==="auto"&&n++}}function Uh(e){let n;if(e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(Bh.test(e.tokens[n].content)&&jh(e.tokens[n].children),il.test(e.tokens[n].content)&&Hh(e.tokens[n].children))}const Gh=/['"]/,fi=/['"]/g,mi="’";function Vr(e,n,t,r){e[n]||(e[n]=[]),e[n].push({pos:t,ch:r})}function $h(e,n){let t="",r=0;n.sort((s,o)=>s.pos-o.pos);for(let s=0;s<n.length;s++){const o=n[s];t+=e.slice(r,o.pos)+o.ch,r=o.pos+1}return t+e.slice(r)}function Kh(e,n){let t;const r=[],s={};for(let o=0;o<e.length;o++){const a=e[o],i=e[o].level;for(t=r.length-1;t>=0&&!(r[t].level<=i);t--);if(r.length=t+1,a.type!=="text")continue;const u=a.content;let l=0;const c=u.length;e:for(;l<c;){fi.lastIndex=l;const d=fi.exec(u);if(!d)break;let p=!0,f=!0;l=d.index+1;const g=d[0]==="'";let v=32;if(d.index-1>=0)v=u.charCodeAt(d.index-1);else for(t=o-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){v=e[t].content.charCodeAt(e[t].content.length-1);break}let P=32;if(l<c)P=u.charCodeAt(l);else for(t=o+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){P=e[t].content.charCodeAt(0);break}const M=Rr(v)||Tr(v),A=Rr(P)||Tr(P),w=Sr(v),C=Sr(P);if(C?p=!1:A&&(w||M||(p=!1)),w?f=!1:M&&(C||A||(f=!1)),P===34&&d[0]==='"'&&v>=48&&v<=57&&(f=p=!1),p&&f&&(p=M,f=A),!p&&!f){g&&Vr(s,o,d.index,mi);continue}if(f)for(t=r.length-1;t>=0;t--){let O=r[t];if(r[t].level<i)break;if(O.single===g&&r[t].level===i){O=r[t];let N,$;g?(N=n.md.options.quotes[2],$=n.md.options.quotes[3]):(N=n.md.options.quotes[0],$=n.md.options.quotes[1]),Vr(s,o,d.index,$),Vr(s,O.token,O.pos,N),r.length=t;continue e}}p?r.push({token:o,pos:d.index,single:g,level:i}):f&&g&&Vr(s,o,d.index,mi)}}Object.keys(s).forEach(function(o){e[o].content=$h(e[o].content,s[o])})}function Vh(e){if(e.md.options.typographer)for(let n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!Gh.test(e.tokens[n].content)||Kh(e.tokens[n].children,e)}function Qh(e){let n,t;const r=e.tokens,s=r.length;for(let o=0;o<s;o++){if(r[o].type!=="inline")continue;const a=r[o].children,i=a.length;for(n=0;n<i;n++)a[n].type==="text_special"&&(a[n].type="text");for(n=t=0;n<i;n++)a[n].type==="text"&&n+1<i&&a[n+1].type==="text"?a[n+1].content=a[n].content+a[n+1].content:(n!==t&&(a[t]=a[n]),t++);n!==t&&(a.length=t)}}const oo=[["normalize",Lh],["block",Ih],["inline",Mh],["linkify",Fh],["replacements",Uh],["smartquotes",Vh],["text_join",Qh]];function Zo(){this.ruler=new hn;for(let e=0;e<oo.length;e++)this.ruler.push(oo[e][0],oo[e][1])}Zo.prototype.process=function(e){const n=this.ruler.getRules("");for(let t=0,r=n.length;t<r;t++)n[t](e)};Zo.prototype.State=al;function et(e,n,t,r){this.src=e,this.md=n,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const s=this.src;for(let o=0,a=0,i=0,u=0,l=s.length,c=!1;a<l;a++){const d=s.charCodeAt(a);if(!c)if(Pe(d)){i++,d===9?u+=4-u%4:u++;continue}else c=!0;(d===10||a===l-1)&&(d!==10&&a++,this.bMarks.push(o),this.eMarks.push(a),this.tShift.push(i),this.sCount.push(u),this.bsCount.push(0),c=!1,i=0,u=0,o=a+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}et.prototype.push=function(e,n,t){const r=new Fn(e,n,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};et.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]};et.prototype.skipEmptyLines=function(n){for(let t=this.lineMax;n<t&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n};et.prototype.skipSpaces=function(n){for(let t=this.src.length;n<t;n++){const r=this.src.charCodeAt(n);if(!Pe(r))break}return n};et.prototype.skipSpacesBack=function(n,t){if(n<=t)return n;for(;n>t;)if(!Pe(this.src.charCodeAt(--n)))return n+1;return n};et.prototype.skipChars=function(n,t){for(let r=this.src.length;n<r&&this.src.charCodeAt(n)===t;n++);return n};et.prototype.skipCharsBack=function(n,t,r){if(n<=r)return n;for(;n>r;)if(t!==this.src.charCodeAt(--n))return n+1;return n};et.prototype.getLines=function(n,t,r,s){if(n>=t)return"";const o=new Array(t-n);for(let a=0,i=n;i<t;i++,a++){let u=0;const l=this.bMarks[i];let c=l,d;for(i+1<t||s?d=this.eMarks[i]+1:d=this.eMarks[i];c<d&&u<r;){const p=this.src.charCodeAt(c);if(Pe(p))p===9?u+=4-(u+this.bsCount[i])%4:u++;else if(c-l<this.tShift[i])u++;else break;c++}u>r?o[a]=new Array(u-r+1).join(" ")+this.src.slice(c,d):o[a]=this.src.slice(c,d)}return o.join("")};et.prototype.Token=Fn;const Jh=65536;function ao(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];return e.src.slice(t,r)}function gi(e){const n=[],t=e.length;let r=0,s=e.charCodeAt(r),o=!1,a=0,i="";for(;r<t;)s===124&&(o?(i+=e.substring(a,r-1),a=r):(n.push(i+e.substring(a,r)),i="",a=r+1)),o=s===92,r++,s=e.charCodeAt(r);return n.push(i+e.substring(a)),n}function Yh(e,n,t,r){if(n+2>t)return!1;let s=n+1;if(e.sCount[s]<e.blkIndent||e.sCount[s]-e.blkIndent>=4)return!1;let o=e.bMarks[s]+e.tShift[s];if(o>=e.eMarks[s])return!1;const a=e.src.charCodeAt(o++);if(a!==124&&a!==45&&a!==58||o>=e.eMarks[s])return!1;const i=e.src.charCodeAt(o++);if(i!==124&&i!==45&&i!==58&&!Pe(i)||a===45&&Pe(i))return!1;for(;o<e.eMarks[s];){const C=e.src.charCodeAt(o);if(C!==124&&C!==45&&C!==58&&!Pe(C))return!1;o++}let u=ao(e,n+1),l=u.split("|");const c=[];for(let C=0;C<l.length;C++){const O=l[C].trim();if(!O){if(C===0||C===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(O))return!1;O.charCodeAt(O.length-1)===58?c.push(O.charCodeAt(0)===58?"center":"right"):O.charCodeAt(0)===58?c.push("left"):c.push("")}if(u=ao(e,n).trim(),u.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4)return!1;l=gi(u),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const d=l.length;if(d===0||d!==c.length)return!1;if(r)return!0;const p=e.parentType;e.parentType="table";const f=e.md.block.ruler.getRules("blockquote"),g=e.push("table_open","table",1),v=[n,0];g.map=v;const P=e.push("thead_open","thead",1);P.map=[n,n+1];const M=e.push("tr_open","tr",1);M.map=[n,n+1];for(let C=0;C<l.length;C++){const O=e.push("th_open","th",1);c[C]&&(O.attrs=[["style","text-align:"+c[C]]]);const N=e.push("inline","",0);N.content=l[C].trim(),N.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let A,w=0;for(s=n+2;s<t&&!(e.sCount[s]<e.blkIndent);s++){let C=!1;for(let N=0,$=f.length;N<$;N++)if(f[N](e,s,t,!0)){C=!0;break}if(C||(u=ao(e,s).trim(),!u)||e.sCount[s]-e.blkIndent>=4||(l=gi(u),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),w+=d-l.length,w>Jh))break;if(s===n+2){const N=e.push("tbody_open","tbody",1);N.map=A=[n+2,0]}const O=e.push("tr_open","tr",1);O.map=[s,s+1];for(let N=0;N<d;N++){const $=e.push("td_open","td",1);c[N]&&($.attrs=[["style","text-align:"+c[N]]]);const fe=e.push("inline","",0);fe.content=l[N]?l[N].trim():"",fe.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return A&&(e.push("tbody_close","tbody",-1),A[1]=s),e.push("table_close","table",-1),v[1]=s,e.parentType=p,e.line=s,!0}function Xh(e,n,t){if(e.sCount[n]-e.blkIndent<4)return!1;let r=n+1,s=r;for(;r<t;){if(e.isEmpty(r)){r++;continue}if(e.sCount[r]-e.blkIndent>=4){r++,s=r;continue}break}e.line=s;const o=e.push("code_block","code",0);return o.content=e.getLines(n,s,4+e.blkIndent,!1)+`
`,o.map=[n,e.line],!0}function Zh(e,n,t,r){let s=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||s+3>o)return!1;const a=e.src.charCodeAt(s);if(a!==126&&a!==96)return!1;let i=s;s=e.skipChars(s,a);let u=s-i;if(u<3)return!1;const l=e.src.slice(i,s),c=e.src.slice(s,o);if(a===96&&c.indexOf(String.fromCharCode(a))>=0)return!1;if(r)return!0;let d=n,p=!1;for(;d++,!(d>=t||(s=i=e.bMarks[d]+e.tShift[d],o=e.eMarks[d],s<o&&e.sCount[d]<e.blkIndent));)if(e.src.charCodeAt(s)===a&&!(e.sCount[d]-e.blkIndent>=4)&&(s=e.skipChars(s,a),!(s-i<u)&&(s=e.skipSpaces(s),!(s<o)))){p=!0;break}u=e.sCount[n],e.line=d+(p?1:0);const f=e.push("fence","code",0);return f.info=c,f.content=e.getLines(n+1,d,u,!0),f.markup=l,f.map=[n,e.line],!0}function e_(e,n,t,r){let s=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];const a=e.lineMax;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(s)!==62)return!1;if(r)return!0;const i=[],u=[],l=[],c=[],d=e.md.block.ruler.getRules("blockquote"),p=e.parentType;e.parentType="blockquote";let f=!1,g;for(g=n;g<t;g++){const w=e.sCount[g]<e.blkIndent;if(s=e.bMarks[g]+e.tShift[g],o=e.eMarks[g],s>=o)break;if(e.src.charCodeAt(s++)===62&&!w){let O=e.sCount[g]+1,N,$;e.src.charCodeAt(s)===32?(s++,O++,$=!1,N=!0):e.src.charCodeAt(s)===9?(N=!0,(e.bsCount[g]+O)%4===3?(s++,O++,$=!1):$=!0):N=!1;let fe=O;for(i.push(e.bMarks[g]),e.bMarks[g]=s;s<o;){const we=e.src.charCodeAt(s);if(Pe(we))we===9?fe+=4-(fe+e.bsCount[g]+($?1:0))%4:fe++;else break;s++}f=s>=o,u.push(e.bsCount[g]),e.bsCount[g]=e.sCount[g]+1+(N?1:0),l.push(e.sCount[g]),e.sCount[g]=fe-O,c.push(e.tShift[g]),e.tShift[g]=s-e.bMarks[g];continue}if(f)break;let C=!1;for(let O=0,N=d.length;O<N;O++)if(d[O](e,g,t,!0)){C=!0;break}if(C){e.lineMax=g,e.blkIndent!==0&&(i.push(e.bMarks[g]),u.push(e.bsCount[g]),c.push(e.tShift[g]),l.push(e.sCount[g]),e.sCount[g]-=e.blkIndent);break}i.push(e.bMarks[g]),u.push(e.bsCount[g]),c.push(e.tShift[g]),l.push(e.sCount[g]),e.sCount[g]=-1}const v=e.blkIndent;e.blkIndent=0;const P=e.push("blockquote_open","blockquote",1);P.markup=">";const M=[n,0];P.map=M,e.md.block.tokenize(e,n,g);const A=e.push("blockquote_close","blockquote",-1);A.markup=">",e.lineMax=a,e.parentType=p,M[1]=e.line;for(let w=0;w<c.length;w++)e.bMarks[w+n]=i[w],e.tShift[w+n]=c[w],e.sCount[w+n]=l[w],e.bsCount[w+n]=u[w];return e.blkIndent=v,!0}function n_(e,n,t,r){const s=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let o=e.bMarks[n]+e.tShift[n];const a=e.src.charCodeAt(o++);if(a!==42&&a!==45&&a!==95)return!1;let i=1;for(;o<s;){const l=e.src.charCodeAt(o++);if(l!==a&&!Pe(l))return!1;l===a&&i++}if(i<3)return!1;if(r)return!0;e.line=n+1;const u=e.push("hr","hr",0);return u.map=[n,e.line],u.markup=Array(i+1).join(String.fromCharCode(a)),!0}function hi(e,n){const t=e.eMarks[n];let r=e.bMarks[n]+e.tShift[n];const s=e.src.charCodeAt(r++);if(s!==42&&s!==45&&s!==43)return-1;if(r<t){const o=e.src.charCodeAt(r);if(!Pe(o))return-1}return r}function _i(e,n){const t=e.bMarks[n]+e.tShift[n],r=e.eMarks[n];let s=t;if(s+1>=r)return-1;let o=e.src.charCodeAt(s++);if(o<48||o>57)return-1;for(;;){if(s>=r)return-1;if(o=e.src.charCodeAt(s++),o>=48&&o<=57){if(s-t>=10)return-1;continue}if(o===41||o===46)break;return-1}return s<r&&(o=e.src.charCodeAt(s),!Pe(o))?-1:s}function t_(e,n){const t=e.level+2;for(let r=n+2,s=e.tokens.length-2;r<s;r++)e.tokens[r].level===t&&e.tokens[r].type==="paragraph_open"&&(e.tokens[r+2].hidden=!0,e.tokens[r].hidden=!0,r+=2)}function r_(e,n,t,r){let s,o,a,i,u=n,l=!0;if(e.sCount[u]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[u]-e.listIndent>=4&&e.sCount[u]<e.blkIndent)return!1;let c=!1;r&&e.parentType==="paragraph"&&e.sCount[u]>=e.blkIndent&&(c=!0);let d,p,f;if((f=_i(e,u))>=0){if(d=!0,a=e.bMarks[u]+e.tShift[u],p=Number(e.src.slice(a,f-1)),c&&p!==1)return!1}else if((f=hi(e,u))>=0)d=!1;else return!1;if(c&&e.skipSpaces(f)>=e.eMarks[u])return!1;if(r)return!0;const g=e.src.charCodeAt(f-1),v=e.tokens.length;d?(i=e.push("ordered_list_open","ol",1),p!==1&&(i.attrs=[["start",p]])):i=e.push("bullet_list_open","ul",1);const P=[u,0];i.map=P,i.markup=String.fromCharCode(g);let M=!1;const A=e.md.block.ruler.getRules("list"),w=e.parentType;for(e.parentType="list";u<t;){o=f,s=e.eMarks[u];const C=e.sCount[u]+f-(e.bMarks[u]+e.tShift[u]);let O=C;for(;o<s;){const ze=e.src.charCodeAt(o);if(ze===9)O+=4-(O+e.bsCount[u])%4;else if(ze===32)O++;else break;o++}const N=o;let $;N>=s?$=1:$=O-C,$>4&&($=1);const fe=C+$;i=e.push("list_item_open","li",1),i.markup=String.fromCharCode(g);const we=[u,0];i.map=we,d&&(i.info=e.src.slice(a,f-1));const Ee=e.tight,We=e.tShift[u],Qe=e.sCount[u],Me=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=fe,e.tight=!0,e.tShift[u]=N-e.bMarks[u],e.sCount[u]=O,N>=s&&e.isEmpty(u+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,u,t,!0),(!e.tight||M)&&(l=!1),M=e.line-u>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=Me,e.tShift[u]=We,e.sCount[u]=Qe,e.tight=Ee,i=e.push("list_item_close","li",-1),i.markup=String.fromCharCode(g),u=e.line,we[1]=u,u>=t||e.sCount[u]<e.blkIndent||e.sCount[u]-e.blkIndent>=4)break;let Ue=!1;for(let ze=0,ge=A.length;ze<ge;ze++)if(A[ze](e,u,t,!0)){Ue=!0;break}if(Ue)break;if(d){if(f=_i(e,u),f<0)break;a=e.bMarks[u]+e.tShift[u]}else if(f=hi(e,u),f<0)break;if(g!==e.src.charCodeAt(f-1))break}return d?i=e.push("ordered_list_close","ol",-1):i=e.push("bullet_list_close","ul",-1),i.markup=String.fromCharCode(g),P[1]=u,e.line=u,e.parentType=w,l&&t_(e,v),!0}function s_(e,n,t,r){let s=e.bMarks[n]+e.tShift[n],o=e.eMarks[n],a=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(s)!==91)return!1;function i(A){const w=e.lineMax;if(A>=w||e.isEmpty(A))return null;let C=!1;if(e.sCount[A]-e.blkIndent>3&&(C=!0),e.sCount[A]<0&&(C=!0),!C){const $=e.md.block.ruler.getRules("reference"),fe=e.parentType;e.parentType="reference";let we=!1;for(let Ee=0,We=$.length;Ee<We;Ee++)if($[Ee](e,A,w,!0)){we=!0;break}if(e.parentType=fe,we)return null}const O=e.bMarks[A]+e.tShift[A],N=e.eMarks[A];return e.src.slice(O,N+1)}let u=e.src.slice(s,o+1);o=u.length;let l=-1;for(s=1;s<o;s++){const A=u.charCodeAt(s);if(A===91)return!1;if(A===93){l=s;break}else if(A===10){const w=i(a);w!==null&&(u+=w,o=u.length,a++)}else if(A===92&&(s++,s<o&&u.charCodeAt(s)===10)){const w=i(a);w!==null&&(u+=w,o=u.length,a++)}}if(l<0||u.charCodeAt(l+1)!==58)return!1;for(s=l+2;s<o;s++){const A=u.charCodeAt(s);if(A===10){const w=i(a);w!==null&&(u+=w,o=u.length,a++)}else if(!Pe(A))break}const c=e.md.helpers.parseLinkDestination(u,s,o);if(!c.ok)return!1;const d=e.md.normalizeLink(c.str);if(!e.md.validateLink(d))return!1;s=c.pos;const p=s,f=a,g=s;for(;s<o;s++){const A=u.charCodeAt(s);if(A===10){const w=i(a);w!==null&&(u+=w,o=u.length,a++)}else if(!Pe(A))break}let v=e.md.helpers.parseLinkTitle(u,s,o);for(;v.can_continue;){const A=i(a);if(A===null)break;u+=A,s=o,o=u.length,a++,v=e.md.helpers.parseLinkTitle(u,s,o,v)}let P;for(s<o&&g!==s&&v.ok?(P=v.str,s=v.pos):(P="",s=p,a=f);s<o;){const A=u.charCodeAt(s);if(!Pe(A))break;s++}if(s<o&&u.charCodeAt(s)!==10&&P)for(P="",s=p,a=f;s<o;){const A=u.charCodeAt(s);if(!Pe(A))break;s++}if(s<o&&u.charCodeAt(s)!==10)return!1;const M=Ls(u.slice(1,l));return M?(r||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[M]>"u"&&(e.env.references[M]={title:P,href:d}),e.line=a),!0):!1}const o_=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],a_="[a-zA-Z_:][a-zA-Z0-9:._-]*",i_="[^\"'=<>`\\x00-\\x20]+",u_="'[^']*'",l_='"[^"]*"',c_="(?:"+i_+"|"+u_+"|"+l_+")",d_="(?:\\s+"+a_+"(?:\\s*=\\s*"+c_+")?)",ul="<[A-Za-z][A-Za-z0-9\\-]*"+d_+"*\\s*\\/?>",ll="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",p_="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",f_="<[?][\\s\\S]*?[?]>",m_="<![A-Za-z][^>]*>",g_="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",h_=new RegExp("^(?:"+ul+"|"+ll+"|"+p_+"|"+f_+"|"+m_+"|"+g_+")"),__=new RegExp("^(?:"+ul+"|"+ll+")"),St=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+o_.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(__.source+"\\s*$"),/^$/,!1]];function y_(e,n,t,r){let s=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(s)!==60)return!1;let a=e.src.slice(s,o),i=0;for(;i<St.length&&!St[i][0].test(a);i++);if(i===St.length)return!1;if(r)return St[i][2];let u=n+1;const l=St[i][1].test("");if(!St[i][1].test(a)){for(;u<t&&!(e.sCount[u]<e.blkIndent&&(l||!e.isEmpty(u)));u++)if(s=e.bMarks[u]+e.tShift[u],o=e.eMarks[u],a=e.src.slice(s,o),St[i][1].test(a)){a.length!==0&&u++;break}}e.line=u;const c=e.push("html_block","",0);return c.map=[n,u],c.content=e.getLines(n,u,e.blkIndent,!0),!0}function b_(e,n,t,r){let s=e.bMarks[n]+e.tShift[n],o=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4)return!1;let a=e.src.charCodeAt(s);if(a!==35||s>=o)return!1;let i=1;for(a=e.src.charCodeAt(++s);a===35&&s<o&&i<=6;)i++,a=e.src.charCodeAt(++s);if(i>6||s<o&&!Pe(a))return!1;if(r)return!0;o=e.skipSpacesBack(o,s);const u=e.skipCharsBack(o,35,s);u>s&&Pe(e.src.charCodeAt(u-1))&&(o=u),e.line=n+1;const l=e.push("heading_open","h"+String(i),1);l.markup="########".slice(0,i),l.map=[n,e.line];const c=e.push("inline","",0);c.content=Is(e.src.slice(s,o)),c.map=[n,e.line],c.children=[];const d=e.push("heading_close","h"+String(i),-1);return d.markup="########".slice(0,i),!0}function k_(e,n,t){const r=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;const s=e.parentType;e.parentType="paragraph";let o=0,a,i=n+1;for(;i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3)continue;if(e.sCount[i]>=e.blkIndent){let f=e.bMarks[i]+e.tShift[i];const g=e.eMarks[i];if(f<g&&(a=e.src.charCodeAt(f),(a===45||a===61)&&(f=e.skipChars(f,a),f=e.skipSpaces(f),f>=g))){o=a===61?1:2;break}}if(e.sCount[i]<0)continue;let p=!1;for(let f=0,g=r.length;f<g;f++)if(r[f](e,i,t,!0)){p=!0;break}if(p)break}if(!o)return e.parentType=s,!1;const u=Is(e.getLines(n,i,e.blkIndent,!1));e.line=i+1;const l=e.push("heading_open","h"+String(o),1);l.markup=String.fromCharCode(a),l.map=[n,e.line];const c=e.push("inline","",0);c.content=u,c.map=[n,e.line-1],c.children=[];const d=e.push("heading_close","h"+String(o),-1);return d.markup=String.fromCharCode(a),e.parentType=s,!0}function x_(e,n,t){const r=e.md.block.ruler.getRules("paragraph"),s=e.parentType;let o=n+1;for(e.parentType="paragraph";o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)continue;let l=!1;for(let c=0,d=r.length;c<d;c++)if(r[c](e,o,t,!0)){l=!0;break}if(l)break}const a=Is(e.getLines(n,o,e.blkIndent,!1));e.line=o;const i=e.push("paragraph_open","p",1);i.map=[n,e.line];const u=e.push("inline","",0);return u.content=a,u.map=[n,e.line],u.children=[],e.push("paragraph_close","p",-1),e.parentType=s,!0}const Qr=[["table",Yh,["paragraph","reference"]],["code",Xh],["fence",Zh,["paragraph","reference","blockquote","list"]],["blockquote",e_,["paragraph","reference","blockquote","list"]],["hr",n_,["paragraph","reference","blockquote","list"]],["list",r_,["paragraph","reference","blockquote"]],["reference",s_],["html_block",y_,["paragraph","reference","blockquote"]],["heading",b_,["paragraph","reference","blockquote"]],["lheading",k_],["paragraph",x_]];function Ms(){this.ruler=new hn;for(let e=0;e<Qr.length;e++)this.ruler.push(Qr[e][0],Qr[e][1],{alt:(Qr[e][2]||[]).slice()})}Ms.prototype.tokenize=function(e,n,t){const r=this.ruler.getRules(""),s=r.length,o=e.md.options.maxNesting;let a=n,i=!1;for(;a<t&&(e.line=a=e.skipEmptyLines(a),!(a>=t||e.sCount[a]<e.blkIndent));){if(e.level>=o){e.line=t;break}const u=e.line;let l=!1;for(let c=0;c<s;c++)if(l=r[c](e,a,t,!1),l){if(u>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!i,e.isEmpty(e.line-1)&&(i=!0),a=e.line,a<t&&e.isEmpty(a)&&(i=!0,a++,e.line=a)}};Ms.prototype.parse=function(e,n,t,r){if(!e)return;const s=new this.State(e,n,t,r);this.tokenize(s,s.line,s.lineMax)};Ms.prototype.State=et;function Fr(e,n,t,r){this.src=e,this.env=t,this.md=n,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Fr.prototype.pushPending=function(){const e=new Fn("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};Fr.prototype.push=function(e,n,t){this.pending&&this.pushPending();const r=new Fn(e,n,t);let s=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],s={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(s),r};Fr.prototype.scanDelims=function(e,n){const t=this.posMax,r=this.src.charCodeAt(e);let s;if(e===0)s=32;else if(e===1)s=this.src.charCodeAt(0),(s&63488)===55296&&(s=65533);else if(s=this.src.charCodeAt(e-1),(s&64512)===56320){const P=this.src.charCodeAt(e-2);s=(P&64512)===55296?65536+(P-55296<<10)+(s-56320):65533}else(s&64512)===55296&&(s=65533);let o=e;for(;o<t&&this.src.charCodeAt(o)===r;)o++;const a=o-e;let i=o<t?this.src.charCodeAt(o):32;if((i&64512)===55296){const P=this.src.charCodeAt(o+1);i=(P&64512)===56320?65536+(i-55296<<10)+(P-56320):65533}else(i&64512)===56320&&(i=65533);const u=Rr(s)||Tr(s),l=Rr(i)||Tr(i),c=Sr(s),d=Sr(i),p=!d&&(!l||c||u),f=!c&&(!u||d||l);return{can_open:p&&(n||!f||u),can_close:f&&(n||!p||l),length:a}};Fr.prototype.Token=Fn;function A_(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function v_(e,n){let t=e.pos;for(;t<e.posMax&&!A_(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const w_=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function E_(e,n){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,r=e.posMax;if(t+3>r||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const s=e.pending.match(w_);if(!s)return!1;const o=s[1],a=e.md.linkify.matchAtStart(e.src.slice(t-o.length));if(!a)return!1;let i=a.url;if(i.length<=o.length)return!1;let u=i.length;for(;u>0&&i.charCodeAt(u-1)===42;)u--;u!==i.length&&(i=i.slice(0,u));const l=e.md.normalizeLink(i);if(!e.md.validateLink(l))return!1;if(!n){e.pending=e.pending.slice(0,-o.length);const c=e.push("link_open","a",1);c.attrs=[["href",l]],c.markup="linkify",c.info="auto";const d=e.push("text","",0);d.content=e.md.normalizeLinkText(i);const p=e.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return e.pos+=i.length-o.length,!0}function C_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const r=e.pending.length-1,s=e.posMax;if(!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){let o=r-1;for(;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<s&&Pe(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const ea=[];for(let e=0;e<256;e++)ea.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){ea[e.charCodeAt(0)]=1});function D_(e,n){let t=e.pos;const r=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let s=e.src.charCodeAt(t);if(s===10){for(n||e.push("hardbreak","br",0),t++;t<r&&(s=e.src.charCodeAt(t),!!Pe(s));)t++;return e.pos=t,!0}if(s===32){if(!n){const i=e.push("text_special","",0);i.content="\\",i.markup="\\",i.info="escape"}return e.pos=t,!0}let o=e.src[t];if(s>=55296&&s<=56319&&t+1<r){const i=e.src.charCodeAt(t+1);i>=56320&&i<=57343&&(o+=e.src[t+1],t++)}const a="\\"+o;if(!n){const i=e.push("text_special","",0);s<256&&ea[s]!==0?i.content=o:i.content=a,i.markup=a,i.info="escape"}return e.pos=t+1,!0}function S_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const s=t;t++;const o=e.posMax;for(;t<o&&e.src.charCodeAt(t)===96;)t++;const a=e.src.slice(s,t),i=a.length;if(e.backticksScanned&&(e.backticks[i]||0)<=s)return n||(e.pending+=a),e.pos+=i,!0;let u=t,l;for(;(l=e.src.indexOf("`",u))!==-1;){for(u=l+1;u<o&&e.src.charCodeAt(u)===96;)u++;const c=u-l;if(c===i){if(!n){const d=e.push("code_inline","code",0);d.markup=a,d.content=e.src.slice(t,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=u,!0}e.backticks[c]=l}return e.backticksScanned=!0,n||(e.pending+=a),e.pos+=i,!0}function T_(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==126)return!1;const s=e.scanDelims(e.pos,!0);let o=s.length;const a=String.fromCharCode(r);if(o<2)return!1;let i;o%2&&(i=e.push("text","",0),i.content=a,o--);for(let u=0;u<o;u+=2)i=e.push("text","",0),i.content=a+a,e.delimiters.push({marker:r,length:0,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return e.pos+=s.length,!0}function yi(e,n){let t;const r=[],s=n.length;for(let o=0;o<s;o++){const a=n[o];if(a.marker!==126||a.end===-1)continue;const i=n[a.end];t=e.tokens[a.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[i.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[i.token-1].type==="text"&&e.tokens[i.token-1].content==="~"&&r.push(i.token-1)}for(;r.length;){const o=r.pop();let a=o+1;for(;a<e.tokens.length&&e.tokens[a].type==="s_close";)a++;a--,o!==a&&(t=e.tokens[a],e.tokens[a]=e.tokens[o],e.tokens[o]=t)}}function R_(e){const n=e.tokens_meta,t=e.tokens_meta.length;yi(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&yi(e,n[r].delimiters)}const cl={tokenize:T_,postProcess:R_};function P_(e,n){const t=e.pos,r=e.src.charCodeAt(t);if(n||r!==95&&r!==42)return!1;const s=e.scanDelims(e.pos,r===42);for(let o=0;o<s.length;o++){const a=e.push("text","",0);a.content=String.fromCharCode(r),e.delimiters.push({marker:r,length:s.length,token:e.tokens.length-1,end:-1,open:s.can_open,close:s.can_close})}return e.pos+=s.length,!0}function bi(e,n){const t=n.length;for(let r=t-1;r>=0;r--){const s=n[r];if(s.marker!==95&&s.marker!==42||s.end===-1)continue;const o=n[s.end],a=r>0&&n[r-1].end===s.end+1&&n[r-1].marker===s.marker&&n[r-1].token===s.token-1&&n[s.end+1].token===o.token+1,i=String.fromCharCode(s.marker),u=e.tokens[s.token];u.type=a?"strong_open":"em_open",u.tag=a?"strong":"em",u.nesting=1,u.markup=a?i+i:i,u.content="";const l=e.tokens[o.token];l.type=a?"strong_close":"em_close",l.tag=a?"strong":"em",l.nesting=-1,l.markup=a?i+i:i,l.content="",a&&(e.tokens[n[r-1].token].content="",e.tokens[n[s.end+1].token].content="",r--)}}function L_(e){const n=e.tokens_meta,t=e.tokens_meta.length;bi(e,e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&bi(e,n[r].delimiters)}const dl={tokenize:P_,postProcess:L_};function I_(e,n){let t,r,s,o,a="",i="",u=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const c=e.pos,d=e.posMax,p=e.pos+1,f=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(f<0)return!1;let g=f+1;if(g<d&&e.src.charCodeAt(g)===40){for(l=!1,g++;g<d&&(t=e.src.charCodeAt(g),!(!Pe(t)&&t!==10));g++);if(g>=d)return!1;if(u=g,s=e.md.helpers.parseLinkDestination(e.src,g,e.posMax),s.ok){for(a=e.md.normalizeLink(s.str),e.md.validateLink(a)?g=s.pos:a="",u=g;g<d&&(t=e.src.charCodeAt(g),!(!Pe(t)&&t!==10));g++);if(s=e.md.helpers.parseLinkTitle(e.src,g,e.posMax),g<d&&u!==g&&s.ok)for(i=s.str,g=s.pos;g<d&&(t=e.src.charCodeAt(g),!(!Pe(t)&&t!==10));g++);}(g>=d||e.src.charCodeAt(g)!==41)&&(l=!0),g++}if(l){if(typeof e.env.references>"u")return!1;if(g<d&&e.src.charCodeAt(g)===91?(u=g+1,g=e.md.helpers.parseLinkLabel(e,g),g>=0?r=e.src.slice(u,g++):g=f+1):g=f+1,r||(r=e.src.slice(p,f)),o=e.env.references[Ls(r)],!o)return e.pos=c,!1;a=o.href,i=o.title}if(!n){e.pos=p,e.posMax=f;const v=e.push("link_open","a",1),P=[["href",a]];v.attrs=P,i&&P.push(["title",i]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=g,e.posMax=d,!0}function M_(e,n){let t,r,s,o,a,i,u,l,c="";const d=e.pos,p=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const f=e.pos+2,g=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(g<0)return!1;if(o=g+1,o<p&&e.src.charCodeAt(o)===40){for(o++;o<p&&(t=e.src.charCodeAt(o),!(!Pe(t)&&t!==10));o++);if(o>=p)return!1;for(l=o,i=e.md.helpers.parseLinkDestination(e.src,o,e.posMax),i.ok&&(c=e.md.normalizeLink(i.str),e.md.validateLink(c)?o=i.pos:c=""),l=o;o<p&&(t=e.src.charCodeAt(o),!(!Pe(t)&&t!==10));o++);if(i=e.md.helpers.parseLinkTitle(e.src,o,e.posMax),o<p&&l!==o&&i.ok)for(u=i.str,o=i.pos;o<p&&(t=e.src.charCodeAt(o),!(!Pe(t)&&t!==10));o++);else u="";if(o>=p||e.src.charCodeAt(o)!==41)return e.pos=d,!1;o++}else{if(typeof e.env.references>"u")return!1;if(o<p&&e.src.charCodeAt(o)===91?(l=o+1,o=e.md.helpers.parseLinkLabel(e,o),o>=0?s=e.src.slice(l,o++):o=g+1):o=g+1,s||(s=e.src.slice(f,g)),a=e.env.references[Ls(s)],!a)return e.pos=d,!1;c=a.href,u=a.title}if(!n){r=e.src.slice(f,g);const v=[];e.md.inline.parse(r,e.md,e.env,v);const P=e.push("image","img",0),M=[["src",c],["alt",""]];P.attrs=M,P.children=v,P.content=r,u&&M.push(["title",u])}return e.pos=o,e.posMax=p,!0}const O_=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,N_=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function F_(e,n){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const r=e.pos,s=e.posMax;for(;;){if(++t>=s)return!1;const a=e.src.charCodeAt(t);if(a===60)return!1;if(a===62)break}const o=e.src.slice(r+1,t);if(N_.test(o)){const a=e.md.normalizeLink(o);if(!e.md.validateLink(a))return!1;if(!n){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const u=e.push("text","",0);u.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}if(O_.test(o)){const a=e.md.normalizeLink("mailto:"+o);if(!e.md.validateLink(a))return!1;if(!n){const i=e.push("link_open","a",1);i.attrs=[["href",a]],i.markup="autolink",i.info="auto";const u=e.push("text","",0);u.content=e.md.normalizeLinkText(o);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=o.length+2,!0}return!1}function B_(e){return/^<a[>\s]/i.test(e)}function W_(e){return/^<\/a\s*>/i.test(e)}function z_(e){const n=e|32;return n>=97&&n<=122}function q_(e,n){if(!e.md.options.html)return!1;const t=e.posMax,r=e.pos;if(e.src.charCodeAt(r)!==60||r+2>=t)return!1;const s=e.src.charCodeAt(r+1);if(s!==33&&s!==63&&s!==47&&!z_(s))return!1;const o=e.src.slice(r).match(h_);if(!o)return!1;if(!n){const a=e.push("html_inline","",0);a.content=o[0],B_(a.content)&&e.linkLevel++,W_(a.content)&&e.linkLevel--}return e.pos+=o[0].length,!0}const j_=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,H_=/^&([a-z][a-z0-9]{1,31});/i;function U_(e,n){const t=e.pos,r=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=r)return!1;if(e.src.charCodeAt(t+1)===35){const o=e.src.slice(t).match(j_);if(o){if(!n){const a=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),i=e.push("text_special","",0);i.content=Xo(a)?Dr(a):Dr(65533),i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}else{const o=e.src.slice(t).match(H_);if(o){const a=lh(o[0]);if(a!==o[0]){if(!n){const i=e.push("text_special","",0);i.content=a,i.markup=o[0],i.info="entity"}return e.pos+=o[0].length,!0}}}return!1}function ki(e){const n={},t=e.length;if(!t)return;let r=0,s=-2;const o=[];for(let a=0;a<t;a++){const i=e[a];if(o.push(0),(e[r].marker!==i.marker||s!==i.token-1)&&(r=a),s=i.token,i.length=i.length||0,!i.close)continue;n.hasOwnProperty(i.marker)||(n[i.marker]=[-1,-1,-1,-1,-1,-1]);const u=n[i.marker][(i.open?3:0)+i.length%3];let l=r-o[r]-1,c=l;for(;l>u;l-=o[l]+1){const d=e[l];if(d.marker===i.marker&&d.open&&d.end<0){let p=!1;if((d.close||i.open)&&(d.length+i.length)%3===0&&(d.length%3!==0||i.length%3!==0)&&(p=!0),!p){const f=l>0&&!e[l-1].open?o[l-1]+1:0;o[a]=a-l+f,o[l]=f,i.open=!1,d.end=a,d.close=!1,c=-1,s=-2;break}}}c!==-1&&(n[i.marker][(i.open?3:0)+(i.length||0)%3]=c)}}function G_(e){const n=e.tokens_meta,t=e.tokens_meta.length;ki(e.delimiters);for(let r=0;r<t;r++)n[r]&&n[r].delimiters&&ki(n[r].delimiters)}function $_(e){let n,t,r=0;const s=e.tokens,o=e.tokens.length;for(n=t=0;n<o;n++)s[n].nesting<0&&r--,s[n].level=r,s[n].nesting>0&&r++,s[n].type==="text"&&n+1<o&&s[n+1].type==="text"?s[n+1].content=s[n].content+s[n+1].content:(n!==t&&(s[t]=s[n]),t++);n!==t&&(s.length=t)}const io=[["text",v_],["linkify",E_],["newline",C_],["escape",D_],["backticks",S_],["strikethrough",cl.tokenize],["emphasis",dl.tokenize],["link",I_],["image",M_],["autolink",F_],["html_inline",q_],["entity",U_]],uo=[["balance_pairs",G_],["strikethrough",cl.postProcess],["emphasis",dl.postProcess],["fragments_join",$_]];function Br(){this.ruler=new hn;for(let e=0;e<io.length;e++)this.ruler.push(io[e][0],io[e][1]);this.ruler2=new hn;for(let e=0;e<uo.length;e++)this.ruler2.push(uo[e][0],uo[e][1])}Br.prototype.skipToken=function(e){const n=e.pos,t=this.ruler.getRules(""),r=t.length,s=e.md.options.maxNesting,o=e.cache;if(typeof o[n]<"u"){e.pos=o[n];return}let a=!1;if(e.level<s){for(let i=0;i<r;i++)if(e.level++,a=t[i](e,!0),e.level--,a){if(n>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;a||e.pos++,o[n]=e.pos};Br.prototype.tokenize=function(e){const n=this.ruler.getRules(""),t=n.length,r=e.posMax,s=e.md.options.maxNesting;for(;e.pos<r;){const o=e.pos;let a=!1;if(e.level<s){for(let i=0;i<t;i++)if(a=n[i](e,!1),a){if(o>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(a){if(e.pos>=r)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Br.prototype.parse=function(e,n,t,r){const s=new this.State(e,n,t,r);this.tokenize(s);const o=this.ruler2.getRules(""),a=o.length;for(let i=0;i<a;i++)o[i](s)};Br.prototype.State=Fr;function K_(e){const n={};e=e||{},n.src_Any=Yu.source,n.src_Cc=Xu.source,n.src_Z=el.source,n.src_P=Jo.source,n.src_ZPCc=[n.src_Z,n.src_P,n.src_Cc].join("|"),n.src_ZCc=[n.src_Z,n.src_Cc].join("|");const t="[><｜]";return n.src_pseudo_letter=`(?:(?!${t}|${n.src_ZPCc})${n.src_Any})`,n.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",n.src_auth=`(?:(?:(?!${n.src_ZCc}|[@/\\[\\]()]).){1,50}@)?`,n.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",n.src_host_terminator=`(?=$|${t}|${n.src_ZPCc})(?!${e["---"]?"-(?!--)|":"-|"}_|:\\d|\\.-|\\.(?!$|${n.src_ZPCc}))`,n.src_path=`(?:[/?#](?:(?!${n.src_ZCc}|${t}|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!${n.src_ZCc}|\\]).)*\\]|\\((?:(?!${n.src_ZCc}|[)]).)*\\)|\\{(?:(?!${n.src_ZCc}|[}]).)*\\}|\\"(?:(?!${n.src_ZCc}|["]).)+\\"|\\'(?:(?!${n.src_ZCc}|[']).)+\\'|\\'(?=${n.src_pseudo_letter}|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!${n.src_ZCc}|[.]|$)|`+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+`,(?!${n.src_ZCc}|$)|;(?!${n.src_ZCc}|$)|\\!+(?!${n.src_ZCc}|[!]|$)|\\?(?!${n.src_ZCc}|[?]|$))+|\\/)?`,n.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]{0,63}',n.src_xn="xn--[a-z0-9\\-]{1,59}",n.src_domain_root="(?:"+n.src_xn+`|${n.src_pseudo_letter}{1,63})`,n.src_domain="(?:"+n.src_xn+`|(?:${n.src_pseudo_letter})|(?:${n.src_pseudo_letter}(?:-|${n.src_pseudo_letter}){0,61}${n.src_pseudo_letter}))`,n.src_host=`(?:(?:(?:(?:${n.src_domain})\\.)*${n.src_domain}))`,n.tpl_host_fuzzy="(?:"+n.src_ip4+`|(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%)))`,n.tpl_host_no_ip_fuzzy=`(?:(?:(?:${n.src_domain})\\.)+(?:%TLDS%))`,n.src_host_strict=n.src_host+n.src_host_terminator,n.tpl_host_fuzzy_strict=n.tpl_host_fuzzy+n.src_host_terminator,n.src_host_port_strict=n.src_host+n.src_port+n.src_host_terminator,n.tpl_host_port_fuzzy_strict=n.tpl_host_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_port_no_ip_fuzzy_strict=n.tpl_host_no_ip_fuzzy+n.src_port+n.src_host_terminator,n.tpl_host_fuzzy_test=`localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:${n.src_ZPCc}|>|$))`,n.tpl_email_fuzzy=`(^|${t}|"|\\(|${n.src_ZCc})(${n.src_email_name}@${n.tpl_host_fuzzy_strict})`,n.tpl_link_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_fuzzy_strict}${n.src_path})`,n.tpl_link_no_ip_fuzzy=`(^|(?![.:/\\-_@])(?:[$+<=>^\`|｜]|${n.src_ZPCc}))((?![$+<=>^\`|｜])${n.tpl_host_port_no_ip_fuzzy_strict}${n.src_path})`,n}function To(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){e[r]=t[r]})}),e}function Os(e){return Object.prototype.toString.call(e)}function V_(e){return Os(e)==="[object String]"}function Q_(e){return Os(e)==="[object Object]"}function J_(e){return Os(e)==="[object RegExp]"}function xi(e){return Os(e)==="[object Function]"}function Y_(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const pl={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function X_(e){return Object.keys(e||{}).reduce(function(n,t){return n||pl.hasOwnProperty(t)},!1)}const Z_={"http:":{validate:function(e,n,t){const r=e.slice(n);return t.re.http||(t.re.http=new RegExp(`^\\/\\/${t.re.src_auth}${t.re.src_host_port_strict}${t.re.src_path}`,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,n,t){const r=e.slice(n);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+`(?:localhost|(?:(?:${t.re.src_domain})\\.)+${t.re.src_domain_root})`+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?n>=3&&e[n-3]===":"||n>=3&&e[n-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,n,t){const r=e.slice(n);return t.re.mailto||(t.re.mailto=new RegExp(`^${t.re.src_email_name}@${t.re.src_host_strict}`,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},e1="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",n1="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function t1(e){return function(n,t){const r=n.slice(t);return e.test(r)?r.match(e)[0].length:0}}function Ai(){return function(e,n){n.normalize(e)}}function cs(e){const n=e.re=K_(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(e1),t.push(n.src_xn),n.src_tlds=t.join("|");function r(i){return i.replace("%TLDS%",n.src_tlds)}n.email_fuzzy=RegExp(r(n.tpl_email_fuzzy),"i"),n.email_fuzzy_global=RegExp(r(n.tpl_email_fuzzy),"ig"),n.link_fuzzy=RegExp(r(n.tpl_link_fuzzy),"i"),n.link_fuzzy_global=RegExp(r(n.tpl_link_fuzzy),"ig"),n.link_no_ip_fuzzy=RegExp(r(n.tpl_link_no_ip_fuzzy),"i"),n.link_no_ip_fuzzy_global=RegExp(r(n.tpl_link_no_ip_fuzzy),"ig"),n.host_fuzzy_test=RegExp(r(n.tpl_host_fuzzy_test),"i");const s=[];e.__compiled__={};function o(i,u){throw new Error(`(LinkifyIt) Invalid schema "${i}": ${u}`)}Object.keys(e.__schemas__).forEach(function(i){const u=e.__schemas__[i];if(u===null)return;const l={validate:null,link:null};if(e.__compiled__[i]=l,Q_(u)){J_(u.validate)?l.validate=t1(u.validate):xi(u.validate)?l.validate=u.validate:o(i,u),xi(u.normalize)?l.normalize=u.normalize:u.normalize?o(i,u):l.normalize=Ai();return}if(V_(u)){s.push(i);return}o(i,u)}),s.forEach(function(i){e.__compiled__[e.__schemas__[i]]&&(e.__compiled__[i].validate=e.__compiled__[e.__schemas__[i]].validate,e.__compiled__[i].normalize=e.__compiled__[e.__schemas__[i]].normalize)}),e.__compiled__[""]={validate:null,normalize:Ai()};const a=Object.keys(e.__compiled__).filter(function(i){return i.length>0&&e.__compiled__[i]}).map(Y_).join("|");e.re.schema_test=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${a})`,"i"),e.re.schema_search=RegExp(`(^|(?!_)(?:[><｜]|${n.src_ZPCc}))(${a})`,"ig"),e.re.schema_at_start=RegExp(`^${e.re.schema_search.source}`,"i"),e.re.pretest=RegExp(`(${e.re.schema_test.source})|(${e.re.host_fuzzy_test.source})|@`,"i")}function fl(e,n,t,r){const s=e.slice(t,r);this.schema=n.toLowerCase(),this.index=t,this.lastIndex=r,this.raw=s,this.text=s,this.url=s}function kn(e,n){if(!(this instanceof kn))return new kn(e,n);n||X_(e)&&(n=e,e={}),this.__opts__=To({},pl,n),this.__schemas__=To({},Z_,e),this.__compiled__={},this.__tlds__=n1,this.__tlds_replaced__=!1,this.re={},cs(this)}kn.prototype.add=function(n,t){return this.__schemas__[n]=t,cs(this),this};kn.prototype.set=function(n){return this.__opts__=To(this.__opts__,n),this};kn.prototype.test=function(n){if(!n.length)return!1;let t,r;if(this.re.schema_test.test(n)){for(r=this.re.schema_search,r.lastIndex=0;(t=r.exec(n))!==null;)if(this.testSchemaAt(n,t[2],r.lastIndex))return!0}return!!(this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&n.search(this.re.host_fuzzy_test)>=0&&n.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy)!==null||this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&n.indexOf("@")>=0&&n.match(this.re.email_fuzzy)!==null)};kn.prototype.pretest=function(n){return this.re.pretest.test(n)};kn.prototype.testSchemaAt=function(n,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(n,r,this):0};kn.prototype.match=function(n){const t=[],r=[],s=[],o=[];let a,i,u;function l(p,f){return p?f?p.index!==f.index?p.index<f.index?p:f:p.lastIndex>=f.lastIndex?p:f:p:f}if(!n.length)return null;if(this.re.schema_test.test(n))for(u=this.re.schema_search,u.lastIndex=0;(a=u.exec(n))!==null;)i=this.testSchemaAt(n,a[2],u.lastIndex),i&&r.push({schema:a[2],index:a.index+a[1].length,lastIndex:a.index+a[0].length+i});if(this.__opts__.fuzzyLink&&this.__compiled__["http:"])for(u=this.__opts__.fuzzyIP?this.re.link_fuzzy_global:this.re.link_no_ip_fuzzy_global,u.lastIndex=0;(a=u.exec(n))!==null;)s.push({schema:"",index:a.index+a[1].length,lastIndex:a.index+a[0].length});if(this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"])for(u=this.re.email_fuzzy_global,u.lastIndex=0;(a=u.exec(n))!==null;)o.push({schema:"mailto:",index:a.index+a[1].length,lastIndex:a.index+a[0].length});const c=[0,0,0];let d=0;for(;;){const p=[r[c[0]],o[c[1]],s[c[2]]],f=l(l(p[0],p[1]),p[2]);if(!f)break;if(f===p[0]?c[0]++:f===p[1]?c[1]++:c[2]++,f.index<d)continue;const g=new fl(n,f.schema,f.index,f.lastIndex);this.__compiled__[g.schema].normalize(g,this),t.push(g),d=f.lastIndex}return t.length?t:null};kn.prototype.matchAtStart=function(n){if(!n.length)return null;const t=this.re.schema_at_start.exec(n);if(!t)return null;const r=this.testSchemaAt(n,t[2],t[0].length);if(!r)return null;const s=new fl(n,t[2],t.index+t[1].length,t.index+t[0].length+r);return this.__compiled__[s.schema].normalize(s,this),s};kn.prototype.tlds=function(n,t){return n=Array.isArray(n)?n:[n],t?(this.__tlds__=this.__tlds__.concat(n).sort().filter(function(r,s,o){return r!==o[s-1]}).reverse(),cs(this),this):(this.__tlds__=n.slice(),this.__tlds_replaced__=!0,cs(this),this)};kn.prototype.normalize=function(n){n.schema||(n.url=`http://${n.url}`),n.schema==="mailto:"&&!/^mailto:/i.test(n.url)&&(n.url=`mailto:${n.url}`)};kn.prototype.onCompile=function(){};const Kt=2147483647,Qn=36,na=1,Pr=26,r1=38,s1=700,ml=72,gl=128,hl="-",o1=/^xn--/,a1=/[^\0-\x7F]/,i1=/[\x2E\u3002\uFF0E\uFF61]/g,u1={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},lo=Qn-na,Jn=Math.floor,co=String.fromCharCode;function kt(e){throw new RangeError(u1[e])}function l1(e,n){const t=[];let r=e.length;for(;r--;)t[r]=n(e[r]);return t}function _l(e,n){const t=e.split("@");let r="";t.length>1&&(r=t[0]+"@",e=t[1]),e=e.replace(i1,".");const s=e.split("."),o=l1(s,n).join(".");return r+o}function yl(e){const n=[];let t=0;const r=e.length;for(;t<r;){const s=e.charCodeAt(t++);if(s>=55296&&s<=56319&&t<r){const o=e.charCodeAt(t++);(o&64512)==56320?n.push(((s&1023)<<10)+(o&1023)+65536):(n.push(s),t--)}else n.push(s)}return n}const c1=e=>String.fromCodePoint(...e),d1=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Qn},vi=function(e,n){return e+22+75*(e<26)-((n!=0)<<5)},bl=function(e,n,t){let r=0;for(e=t?Jn(e/s1):e>>1,e+=Jn(e/n);e>lo*Pr>>1;r+=Qn)e=Jn(e/lo);return Jn(r+(lo+1)*e/(e+r1))},kl=function(e){const n=[],t=e.length;let r=0,s=gl,o=ml,a=e.lastIndexOf(hl);a<0&&(a=0);for(let i=0;i<a;++i)e.charCodeAt(i)>=128&&kt("not-basic"),n.push(e.charCodeAt(i));for(let i=a>0?a+1:0;i<t;){const u=r;for(let c=1,d=Qn;;d+=Qn){i>=t&&kt("invalid-input");const p=d1(e.charCodeAt(i++));p>=Qn&&kt("invalid-input"),p>Jn((Kt-r)/c)&&kt("overflow"),r+=p*c;const f=d<=o?na:d>=o+Pr?Pr:d-o;if(p<f)break;const g=Qn-f;c>Jn(Kt/g)&&kt("overflow"),c*=g}const l=n.length+1;o=bl(r-u,l,u==0),Jn(r/l)>Kt-s&&kt("overflow"),s+=Jn(r/l),r%=l,n.splice(r++,0,s)}return String.fromCodePoint(...n)},xl=function(e){const n=[];e=yl(e);const t=e.length;let r=gl,s=0,o=ml;for(const u of e)u<128&&n.push(co(u));const a=n.length;let i=a;for(a&&n.push(hl);i<t;){let u=Kt;for(const c of e)c>=r&&c<u&&(u=c);const l=i+1;u-r>Jn((Kt-s)/l)&&kt("overflow"),s+=(u-r)*l,r=u;for(const c of e)if(c<r&&++s>Kt&&kt("overflow"),c===r){let d=s;for(let p=Qn;;p+=Qn){const f=p<=o?na:p>=o+Pr?Pr:p-o;if(d<f)break;const g=d-f,v=Qn-f;n.push(co(vi(f+g%v,0))),d=Jn(g/v)}n.push(co(vi(d,0))),o=bl(s,l,i===a),s=0,++i}++s,++r}return n.join("")},p1=function(e){return _l(e,function(n){return o1.test(n)?kl(n.slice(4).toLowerCase()):n})},f1=function(e){return _l(e,function(n){return a1.test(n)?"xn--"+xl(n):n})},Al={version:"2.3.1",ucs2:{decode:yl,encode:c1},decode:kl,encode:xl,toASCII:f1,toUnicode:p1},m1={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},g1={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},h1={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},_1={default:m1,zero:g1,commonmark:h1},y1=/^(vbscript|javascript|file|data):/,b1=/^data:image\/(gif|png|jpeg|webp);/;function k1(e){const n=e.trim().toLowerCase();return y1.test(n)?b1.test(n):!0}const vl=["http:","https:","mailto:"];function x1(e){const n=Qo(e,!0);if(n.hostname&&(!n.protocol||vl.indexOf(n.protocol)>=0))try{n.hostname=Al.toASCII(n.hostname)}catch{}return Nr(Vo(n))}function A1(e){const n=Qo(e,!0);if(n.hostname&&(!n.protocol||vl.indexOf(n.protocol)>=0))try{n.hostname=Al.toUnicode(n.hostname)}catch{}return Xt(Vo(n),Xt.defaultChars+"%")}function Sn(e,n){if(!(this instanceof Sn))return new Sn(e,n);n||Yo(e)||(n=e||{},e="default"),this.inline=new Br,this.block=new Ms,this.core=new Zo,this.renderer=new nr,this.linkify=new kn,this.validateLink=k1,this.normalizeLink=x1,this.normalizeLinkText=A1,this.utils=Eh,this.helpers=Ps({},Th),this.options={},this.configure(e),n&&this.set(n)}Sn.prototype.set=function(e){return Ps(this.options,e),this};Sn.prototype.configure=function(e){const n=this;if(Yo(e)){const t=e;if(e=_1[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&n.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&n[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&n[t].ruler2.enableOnly(e.components[t].rules2)}),this};Sn.prototype.enable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const r=e.filter(function(s){return t.indexOf(s)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Sn.prototype.disable=function(e,n){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(s){t=t.concat(this[s].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const r=e.filter(function(s){return t.indexOf(s)<0});if(r.length&&!n)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Sn.prototype.use=function(e){const n=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,n),this};Sn.prototype.parse=function(e,n){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,n);return this.core.process(t),t.tokens};Sn.prototype.render=function(e,n){return n=n||{},this.renderer.render(this.parse(e,n),this.options,n)};Sn.prototype.parseInline=function(e,n){const t=new this.core.State(e,this,n);return t.inlineMode=!0,this.core.process(t),t.tokens};Sn.prototype.renderInline=function(e,n){return n=n||{},this.renderer.render(this.parseInline(e,n),this.options,n)};function v1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var po,wi;function w1(){if(wi)return po;wi=1;function e(y){return y instanceof Map?y.clear=y.delete=y.set=function(){throw new Error("map is read-only")}:y instanceof Set&&(y.add=y.clear=y.delete=function(){throw new Error("set is read-only")}),Object.freeze(y),Object.getOwnPropertyNames(y).forEach(L=>{const q=y[L],oe=typeof q;(oe==="object"||oe==="function")&&!Object.isFrozen(q)&&e(q)}),y}class n{constructor(L){L.data===void 0&&(L.data={}),this.data=L.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(y){return y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(y,...L){const q=Object.create(null);for(const oe in y)q[oe]=y[oe];return L.forEach(function(oe){for(const qe in oe)q[qe]=oe[qe]}),q}const s="</span>",o=y=>!!y.scope,a=(y,{prefix:L})=>{if(y.startsWith("language:"))return y.replace("language:","language-");if(y.includes(".")){const q=y.split(".");return[`${L}${q.shift()}`,...q.map((oe,qe)=>`${oe}${"_".repeat(qe+1)}`)].join(" ")}return`${L}${y}`};class i{constructor(L,q){this.buffer="",this.classPrefix=q.classPrefix,L.walk(this)}addText(L){this.buffer+=t(L)}openNode(L){if(!o(L))return;const q=a(L.scope,{prefix:this.classPrefix});this.span(q)}closeNode(L){o(L)&&(this.buffer+=s)}value(){return this.buffer}span(L){this.buffer+=`<span class="${L}">`}}const u=(y={})=>{const L={children:[]};return Object.assign(L,y),L};class l{constructor(){this.rootNode=u(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(L){this.top.children.push(L)}openNode(L){const q=u({scope:L});this.add(q),this.stack.push(q)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(L){return this.constructor._walk(L,this.rootNode)}static _walk(L,q){return typeof q=="string"?L.addText(q):q.children&&(L.openNode(q),q.children.forEach(oe=>this._walk(L,oe)),L.closeNode(q)),L}static _collapse(L){typeof L!="string"&&L.children&&(L.children.every(q=>typeof q=="string")?L.children=[L.children.join("")]:L.children.forEach(q=>{l._collapse(q)}))}}class c extends l{constructor(L){super(),this.options=L}addText(L){L!==""&&this.add(L)}startScope(L){this.openNode(L)}endScope(){this.closeNode()}__addSublanguage(L,q){const oe=L.root;q&&(oe.scope=`language:${q}`),this.add(oe)}toHTML(){return new i(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function d(y){return y?typeof y=="string"?y:y.source:null}function p(y){return v("(?=",y,")")}function f(y){return v("(?:",y,")*")}function g(y){return v("(?:",y,")?")}function v(...y){return y.map(q=>d(q)).join("")}function P(y){const L=y[y.length-1];return typeof L=="object"&&L.constructor===Object?(y.splice(y.length-1,1),L):{}}function M(...y){return"("+(P(y).capture?"":"?:")+y.map(oe=>d(oe)).join("|")+")"}function A(y){return new RegExp(y.toString()+"|").exec("").length-1}function w(y,L){const q=y&&y.exec(L);return q&&q.index===0}const C=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function O(y,{joinWith:L}){let q=0;return y.map(oe=>{q+=1;const qe=q;let je=d(oe),J="";for(;je.length>0;){const G=C.exec(je);if(!G){J+=je;break}J+=je.substring(0,G.index),je=je.substring(G.index+G[0].length),G[0][0]==="\\"&&G[1]?J+="\\"+String(Number(G[1])+qe):(J+=G[0],G[0]==="("&&q++)}return J}).map(oe=>`(${oe})`).join(L)}const N=/\b\B/,$="[a-zA-Z]\\w*",fe="[a-zA-Z_]\\w*",we="\\b\\d+(\\.\\d+)?",Ee="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",We="\\b(0b[01]+)",Qe="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",Me=(y={})=>{const L=/^#![ ]*\//;return y.binary&&(y.begin=v(L,/.*\b/,y.binary,/\b.*/)),r({scope:"meta",begin:L,end:/$/,relevance:0,"on:begin":(q,oe)=>{q.index!==0&&oe.ignoreMatch()}},y)},Ue={begin:"\\\\[\\s\\S]",relevance:0},ze={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ue]},ge={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ue]},pe={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},K=function(y,L,q={}){const oe=r({scope:"comment",begin:y,end:L,contains:[]},q);oe.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const qe=M("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return oe.contains.push({begin:v(/[ ]+/,"(",qe,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),oe},ve=K("//","$"),Le=K("/\\*","\\*/"),Ie=K("#","$"),Ce={scope:"number",begin:we,relevance:0},sn={scope:"number",begin:Ee,relevance:0},Bn={scope:"number",begin:We,relevance:0},xn={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ue,{begin:/\[/,end:/\]/,relevance:0,contains:[Ue]}]},en={scope:"title",begin:$,relevance:0},T={scope:"title",begin:fe,relevance:0},H={begin:"\\.\\s*"+fe,relevance:0};var V=Object.freeze({__proto__:null,APOS_STRING_MODE:ze,BACKSLASH_ESCAPE:Ue,BINARY_NUMBER_MODE:Bn,BINARY_NUMBER_RE:We,COMMENT:K,C_BLOCK_COMMENT_MODE:Le,C_LINE_COMMENT_MODE:ve,C_NUMBER_MODE:sn,C_NUMBER_RE:Ee,END_SAME_AS_BEGIN:function(y){return Object.assign(y,{"on:begin":(L,q)=>{q.data._beginMatch=L[1]},"on:end":(L,q)=>{q.data._beginMatch!==L[1]&&q.ignoreMatch()}})},HASH_COMMENT_MODE:Ie,IDENT_RE:$,MATCH_NOTHING_RE:N,METHOD_GUARD:H,NUMBER_MODE:Ce,NUMBER_RE:we,PHRASAL_WORDS_MODE:pe,QUOTE_STRING_MODE:ge,REGEXP_MODE:xn,RE_STARTERS_RE:Qe,SHEBANG:Me,TITLE_MODE:en,UNDERSCORE_IDENT_RE:fe,UNDERSCORE_TITLE_MODE:T});function le(y,L){y.input[y.index-1]==="."&&L.ignoreMatch()}function m(y,L){y.className!==void 0&&(y.scope=y.className,delete y.className)}function h(y,L){L&&y.beginKeywords&&(y.begin="\\b("+y.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",y.__beforeBegin=le,y.keywords=y.keywords||y.beginKeywords,delete y.beginKeywords,y.relevance===void 0&&(y.relevance=0))}function x(y,L){Array.isArray(y.illegal)&&(y.illegal=M(...y.illegal))}function _(y,L){if(y.match){if(y.begin||y.end)throw new Error("begin & end are not supported with match");y.begin=y.match,delete y.match}}function b(y,L){y.relevance===void 0&&(y.relevance=1)}const k=(y,L)=>{if(!y.beforeMatch)return;if(y.starts)throw new Error("beforeMatch cannot be used with starts");const q=Object.assign({},y);Object.keys(y).forEach(oe=>{delete y[oe]}),y.keywords=q.keywords,y.begin=v(q.beforeMatch,p(q.begin)),y.starts={relevance:0,contains:[Object.assign(q,{endsParent:!0})]},y.relevance=0,delete q.beforeMatch},E=["of","and","for","in","not","or","if","then","parent","list","value"],R="keyword";function I(y,L,q=R){const oe=Object.create(null);return typeof y=="string"?qe(q,y.split(" ")):Array.isArray(y)?qe(q,y):Object.keys(y).forEach(function(je){Object.assign(oe,I(y[je],L,je))}),oe;function qe(je,J){L&&(J=J.map(G=>G.toLowerCase())),J.forEach(function(G){const te=G.split("|");oe[te[0]]=[je,D(te[0],te[1])]})}}function D(y,L){return L?Number(L):Q(y)?0:1}function Q(y){return E.includes(y.toLowerCase())}const W={},U=y=>{console.error(y)},ee=(y,...L)=>{console.log(`WARN: ${y}`,...L)},re=(y,L)=>{W[`${y}/${L}`]||(console.log(`Deprecated as of ${y}. ${L}`),W[`${y}/${L}`]=!0)},he=new Error;function _e(y,L,{key:q}){let oe=0;const qe=y[q],je={},J={};for(let G=1;G<=L.length;G++)J[G+oe]=qe[G],je[G+oe]=!0,oe+=A(L[G-1]);y[q]=J,y[q]._emit=je,y[q]._multi=!0}function Ne(y){if(Array.isArray(y.begin)){if(y.skip||y.excludeBegin||y.returnBegin)throw U("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),he;if(typeof y.beginScope!="object"||y.beginScope===null)throw U("beginScope must be object"),he;_e(y,y.begin,{key:"beginScope"}),y.begin=O(y.begin,{joinWith:""})}}function $e(y){if(Array.isArray(y.end)){if(y.skip||y.excludeEnd||y.returnEnd)throw U("skip, excludeEnd, returnEnd not compatible with endScope: {}"),he;if(typeof y.endScope!="object"||y.endScope===null)throw U("endScope must be object"),he;_e(y,y.end,{key:"endScope"}),y.end=O(y.end,{joinWith:""})}}function An(y){y.scope&&typeof y.scope=="object"&&y.scope!==null&&(y.beginScope=y.scope,delete y.scope)}function vn(y){An(y),typeof y.beginScope=="string"&&(y.beginScope={_wrap:y.beginScope}),typeof y.endScope=="string"&&(y.endScope={_wrap:y.endScope}),Ne(y),$e(y)}function wt(y){function L(J,G){return new RegExp(d(J),"m"+(y.case_insensitive?"i":"")+(y.unicodeRegex?"u":"")+(G?"g":""))}class q{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(G,te){te.position=this.position++,this.matchIndexes[this.matchAt]=te,this.regexes.push([te,G]),this.matchAt+=A(G)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const G=this.regexes.map(te=>te[1]);this.matcherRe=L(O(G,{joinWith:"|"}),!0),this.lastIndex=0}exec(G){this.matcherRe.lastIndex=this.lastIndex;const te=this.matcherRe.exec(G);if(!te)return null;const Je=te.findIndex((rr,Ns)=>Ns>0&&rr!==void 0),Ge=this.matchIndexes[Je];return te.splice(0,Je),Object.assign(te,Ge)}}class oe{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(G){if(this.multiRegexes[G])return this.multiRegexes[G];const te=new q;return this.rules.slice(G).forEach(([Je,Ge])=>te.addRule(Je,Ge)),te.compile(),this.multiRegexes[G]=te,te}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(G,te){this.rules.push([G,te]),te.type==="begin"&&this.count++}exec(G){const te=this.getMatcher(this.regexIndex);te.lastIndex=this.lastIndex;let Je=te.exec(G);if(this.resumingScanAtSamePosition()&&!(Je&&Je.index===this.lastIndex)){const Ge=this.getMatcher(0);Ge.lastIndex=this.lastIndex+1,Je=Ge.exec(G)}return Je&&(this.regexIndex+=Je.position+1,this.regexIndex===this.count&&this.considerAll()),Je}}function qe(J){const G=new oe;return J.contains.forEach(te=>G.addRule(te.begin,{rule:te,type:"begin"})),J.terminatorEnd&&G.addRule(J.terminatorEnd,{type:"end"}),J.illegal&&G.addRule(J.illegal,{type:"illegal"}),G}function je(J,G){const te=J;if(J.isCompiled)return te;[m,_,vn,k].forEach(Ge=>Ge(J,G)),y.compilerExtensions.forEach(Ge=>Ge(J,G)),J.__beforeBegin=null,[h,x,b].forEach(Ge=>Ge(J,G)),J.isCompiled=!0;let Je=null;return typeof J.keywords=="object"&&J.keywords.$pattern&&(J.keywords=Object.assign({},J.keywords),Je=J.keywords.$pattern,delete J.keywords.$pattern),Je=Je||/\w+/,J.keywords&&(J.keywords=I(J.keywords,y.case_insensitive)),te.keywordPatternRe=L(Je,!0),G&&(J.begin||(J.begin=/\B|\b/),te.beginRe=L(te.begin),!J.end&&!J.endsWithParent&&(J.end=/\B|\b/),J.end&&(te.endRe=L(te.end)),te.terminatorEnd=d(te.end)||"",J.endsWithParent&&G.terminatorEnd&&(te.terminatorEnd+=(J.end?"|":"")+G.terminatorEnd)),J.illegal&&(te.illegalRe=L(J.illegal)),J.contains||(J.contains=[]),J.contains=[].concat(...J.contains.map(function(Ge){return cn(Ge==="self"?J:Ge)})),J.contains.forEach(function(Ge){je(Ge,te)}),J.starts&&je(J.starts,G),te.matcher=qe(te),te}if(y.compilerExtensions||(y.compilerExtensions=[]),y.contains&&y.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return y.classNameAliases=r(y.classNameAliases||{}),je(y)}function tr(y){return y?y.endsWithParent||tr(y.starts):!1}function cn(y){return y.variants&&!y.cachedVariants&&(y.cachedVariants=y.variants.map(function(L){return r(y,{variants:null},L)})),y.cachedVariants?y.cachedVariants:tr(y)?r(y,{starts:y.starts?r(y.starts):null}):Object.isFrozen(y)?r(y):y}var wn="11.11.1";class Wr extends Error{constructor(L,q){super(L),this.name="HTMLInjectionError",this.html=q}}const Ft=t,ta=r,ra=Symbol("nomatch"),Ml=7,sa=function(y){const L=Object.create(null),q=Object.create(null),oe=[];let qe=!0;const je="Could not find the language '{}', did you forget to load/include a language module?",J={disableAutodetect:!0,name:"Plain text",contains:[]};let G={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:c};function te(F){return G.noHighlightRe.test(F)}function Je(F){let X=F.className+" ";X+=F.parentNode?F.parentNode.className:"";const me=G.languageDetectRe.exec(X);if(me){const Se=gt(me[1]);return Se||(ee(je.replace("{}",me[1])),ee("Falling back to no-highlight mode for this block.",F)),Se?me[1]:"no-highlight"}return X.split(/\s+/).find(Se=>te(Se)||gt(Se))}function Ge(F,X,me){let Se="",Ke="";typeof X=="object"?(Se=F,me=X.ignoreIllegals,Ke=X.language):(re("10.7.0","highlight(lang, code, ...args) has been deprecated."),re("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Ke=F,Se=X),me===void 0&&(me=!0);const Tn={code:Se,language:Ke};qr("before:highlight",Tn);const ht=Tn.result?Tn.result:rr(Tn.language,Tn.code,me);return ht.code=Tn.code,qr("after:highlight",ht),ht}function rr(F,X,me,Se){const Ke=Object.create(null);function Tn(j,Y){return j.keywords[Y]}function ht(){if(!ie.keywords){nn.addText(Te);return}let j=0;ie.keywordPatternRe.lastIndex=0;let Y=ie.keywordPatternRe.exec(Te),ce="";for(;Y;){ce+=Te.substring(j,Y.index);const xe=zn.case_insensitive?Y[0].toLowerCase():Y[0],on=Tn(ie,xe);if(on){const[nt,Yl]=on;if(nn.addText(ce),ce="",Ke[xe]=(Ke[xe]||0)+1,Ke[xe]<=Ml&&(Ur+=Yl),nt.startsWith("_"))ce+=Y[0];else{const Xl=zn.classNameAliases[nt]||nt;Wn(Y[0],Xl)}}else ce+=Y[0];j=ie.keywordPatternRe.lastIndex,Y=ie.keywordPatternRe.exec(Te)}ce+=Te.substring(j),nn.addText(ce)}function jr(){if(Te==="")return;let j=null;if(typeof ie.subLanguage=="string"){if(!L[ie.subLanguage]){nn.addText(Te);return}j=rr(ie.subLanguage,Te,!0,pa[ie.subLanguage]),pa[ie.subLanguage]=j._top}else j=Fs(Te,ie.subLanguage.length?ie.subLanguage:null);ie.relevance>0&&(Ur+=j.relevance),nn.__addSublanguage(j._emitter,j.language)}function _n(){ie.subLanguage!=null?jr():ht(),Te=""}function Wn(j,Y){j!==""&&(nn.startScope(Y),nn.addText(j),nn.endScope())}function ua(j,Y){let ce=1;const xe=Y.length-1;for(;ce<=xe;){if(!j._emit[ce]){ce++;continue}const on=zn.classNameAliases[j[ce]]||j[ce],nt=Y[ce];on?Wn(nt,on):(Te=nt,ht(),Te=""),ce++}}function la(j,Y){return j.scope&&typeof j.scope=="string"&&nn.openNode(zn.classNameAliases[j.scope]||j.scope),j.beginScope&&(j.beginScope._wrap?(Wn(Te,zn.classNameAliases[j.beginScope._wrap]||j.beginScope._wrap),Te=""):j.beginScope._multi&&(ua(j.beginScope,Y),Te="")),ie=Object.create(j,{parent:{value:ie}}),ie}function ca(j,Y,ce){let xe=w(j.endRe,ce);if(xe){if(j["on:end"]){const on=new n(j);j["on:end"](Y,on),on.isMatchIgnored&&(xe=!1)}if(xe){for(;j.endsParent&&j.parent;)j=j.parent;return j}}if(j.endsWithParent)return ca(j.parent,Y,ce)}function $l(j){return ie.matcher.regexIndex===0?(Te+=j[0],1):(qs=!0,0)}function Kl(j){const Y=j[0],ce=j.rule,xe=new n(ce),on=[ce.__beforeBegin,ce["on:begin"]];for(const nt of on)if(nt&&(nt(j,xe),xe.isMatchIgnored))return $l(Y);return ce.skip?Te+=Y:(ce.excludeBegin&&(Te+=Y),_n(),!ce.returnBegin&&!ce.excludeBegin&&(Te=Y)),la(ce,j),ce.returnBegin?0:Y.length}function Vl(j){const Y=j[0],ce=X.substring(j.index),xe=ca(ie,j,ce);if(!xe)return ra;const on=ie;ie.endScope&&ie.endScope._wrap?(_n(),Wn(Y,ie.endScope._wrap)):ie.endScope&&ie.endScope._multi?(_n(),ua(ie.endScope,j)):on.skip?Te+=Y:(on.returnEnd||on.excludeEnd||(Te+=Y),_n(),on.excludeEnd&&(Te=Y));do ie.scope&&nn.closeNode(),!ie.skip&&!ie.subLanguage&&(Ur+=ie.relevance),ie=ie.parent;while(ie!==xe.parent);return xe.starts&&la(xe.starts,j),on.returnEnd?0:Y.length}function Ql(){const j=[];for(let Y=ie;Y!==zn;Y=Y.parent)Y.scope&&j.unshift(Y.scope);j.forEach(Y=>nn.openNode(Y))}let Hr={};function da(j,Y){const ce=Y&&Y[0];if(Te+=j,ce==null)return _n(),0;if(Hr.type==="begin"&&Y.type==="end"&&Hr.index===Y.index&&ce===""){if(Te+=X.slice(Y.index,Y.index+1),!qe){const xe=new Error(`0 width match regex (${F})`);throw xe.languageName=F,xe.badRule=Hr.rule,xe}return 1}if(Hr=Y,Y.type==="begin")return Kl(Y);if(Y.type==="illegal"&&!me){const xe=new Error('Illegal lexeme "'+ce+'" for mode "'+(ie.scope||"<unnamed>")+'"');throw xe.mode=ie,xe}else if(Y.type==="end"){const xe=Vl(Y);if(xe!==ra)return xe}if(Y.type==="illegal"&&ce==="")return Te+=`
`,1;if(zs>1e5&&zs>Y.index*3)throw new Error("potential infinite loop, way more iterations than matches");return Te+=ce,ce.length}const zn=gt(F);if(!zn)throw U(je.replace("{}",F)),new Error('Unknown language: "'+F+'"');const Jl=wt(zn);let Ws="",ie=Se||Jl;const pa={},nn=new G.__emitter(G);Ql();let Te="",Ur=0,Et=0,zs=0,qs=!1;try{if(zn.__emitTokens)zn.__emitTokens(X,nn);else{for(ie.matcher.considerAll();;){zs++,qs?qs=!1:ie.matcher.considerAll(),ie.matcher.lastIndex=Et;const j=ie.matcher.exec(X);if(!j)break;const Y=X.substring(Et,j.index),ce=da(Y,j);Et=j.index+ce}da(X.substring(Et))}return nn.finalize(),Ws=nn.toHTML(),{language:F,value:Ws,relevance:Ur,illegal:!1,_emitter:nn,_top:ie}}catch(j){if(j.message&&j.message.includes("Illegal"))return{language:F,value:Ft(X),illegal:!0,relevance:0,_illegalBy:{message:j.message,index:Et,context:X.slice(Et-100,Et+100),mode:j.mode,resultSoFar:Ws},_emitter:nn};if(qe)return{language:F,value:Ft(X),illegal:!1,relevance:0,errorRaised:j,_emitter:nn,_top:ie};throw j}}function Ns(F){const X={value:Ft(F),illegal:!1,relevance:0,_top:J,_emitter:new G.__emitter(G)};return X._emitter.addText(F),X}function Fs(F,X){X=X||G.languages||Object.keys(L);const me=Ns(F),Se=X.filter(gt).filter(ia).map(_n=>rr(_n,F,!1));Se.unshift(me);const Ke=Se.sort((_n,Wn)=>{if(_n.relevance!==Wn.relevance)return Wn.relevance-_n.relevance;if(_n.language&&Wn.language){if(gt(_n.language).supersetOf===Wn.language)return 1;if(gt(Wn.language).supersetOf===_n.language)return-1}return 0}),[Tn,ht]=Ke,jr=Tn;return jr.secondBest=ht,jr}function Ol(F,X,me){const Se=X&&q[X]||me;F.classList.add("hljs"),F.classList.add(`language-${Se}`)}function Bs(F){let X=null;const me=Je(F);if(te(me))return;if(qr("before:highlightElement",{el:F,language:me}),F.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",F);return}if(F.children.length>0&&(G.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(F)),G.throwUnescapedHTML))throw new Wr("One of your code blocks includes unescaped HTML.",F.innerHTML);X=F;const Se=X.textContent,Ke=me?Ge(Se,{language:me,ignoreIllegals:!0}):Fs(Se);F.innerHTML=Ke.value,F.dataset.highlighted="yes",Ol(F,me,Ke.language),F.result={language:Ke.language,re:Ke.relevance,relevance:Ke.relevance},Ke.secondBest&&(F.secondBest={language:Ke.secondBest.language,relevance:Ke.secondBest.relevance}),qr("after:highlightElement",{el:F,result:Ke,text:Se})}function Nl(F){G=ta(G,F)}const Fl=()=>{zr(),re("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Bl(){zr(),re("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let oa=!1;function zr(){function F(){zr()}if(document.readyState==="loading"){oa||window.addEventListener("DOMContentLoaded",F,!1),oa=!0;return}document.querySelectorAll(G.cssSelector).forEach(Bs)}function Wl(F,X){let me=null;try{me=X(y)}catch(Se){if(U("Language definition for '{}' could not be registered.".replace("{}",F)),qe)U(Se);else throw Se;me=J}me.name||(me.name=F),L[F]=me,me.rawDefinition=X.bind(null,y),me.aliases&&aa(me.aliases,{languageName:F})}function zl(F){delete L[F];for(const X of Object.keys(q))q[X]===F&&delete q[X]}function ql(){return Object.keys(L)}function gt(F){return F=(F||"").toLowerCase(),L[F]||L[q[F]]}function aa(F,{languageName:X}){typeof F=="string"&&(F=[F]),F.forEach(me=>{q[me.toLowerCase()]=X})}function ia(F){const X=gt(F);return X&&!X.disableAutodetect}function jl(F){F["before:highlightBlock"]&&!F["before:highlightElement"]&&(F["before:highlightElement"]=X=>{F["before:highlightBlock"](Object.assign({block:X.el},X))}),F["after:highlightBlock"]&&!F["after:highlightElement"]&&(F["after:highlightElement"]=X=>{F["after:highlightBlock"](Object.assign({block:X.el},X))})}function Hl(F){jl(F),oe.push(F)}function Ul(F){const X=oe.indexOf(F);X!==-1&&oe.splice(X,1)}function qr(F,X){const me=F;oe.forEach(function(Se){Se[me]&&Se[me](X)})}function Gl(F){return re("10.7.0","highlightBlock will be removed entirely in v12.0"),re("10.7.0","Please use highlightElement now."),Bs(F)}Object.assign(y,{highlight:Ge,highlightAuto:Fs,highlightAll:zr,highlightElement:Bs,highlightBlock:Gl,configure:Nl,initHighlighting:Fl,initHighlightingOnLoad:Bl,registerLanguage:Wl,unregisterLanguage:zl,listLanguages:ql,getLanguage:gt,registerAliases:aa,autoDetection:ia,inherit:ta,addPlugin:Hl,removePlugin:Ul}),y.debugMode=function(){qe=!1},y.safeMode=function(){qe=!0},y.versionString=wn,y.regex={concat:v,lookahead:p,either:M,optional:g,anyNumberOfTimes:f};for(const F in V)typeof V[F]=="object"&&e(V[F]);return Object.assign(y,V),y},Bt=sa({});return Bt.newInstance=()=>sa({}),po=Bt,Bt.HighlightJS=Bt,Bt.default=Bt,po}var E1=w1();const jn=v1(E1),Ei="[A-Za-z$_][0-9A-Za-z$_]*",C1=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],D1=["true","false","null","undefined","NaN","Infinity"],wl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],El=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Cl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],S1=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],T1=[].concat(Cl,wl,El);function R1(e){const n=e.regex,t=(K,{after:ve})=>{const Le="</"+K[0].slice(1);return K.input.indexOf(Le,ve)!==-1},r=Ei,s={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(K,ve)=>{const Le=K[0].length+K.index,Ie=K.input[Le];if(Ie==="<"||Ie===","){ve.ignoreMatch();return}Ie===">"&&(t(K,{after:Le})||ve.ignoreMatch());let Ce;const sn=K.input.substring(Le);if(Ce=sn.match(/^\s*=/)){ve.ignoreMatch();return}if((Ce=sn.match(/^\s+extends\s+/))&&Ce.index===0){ve.ignoreMatch();return}}},i={$pattern:Ei,keyword:C1,literal:D1,built_in:T1,"variable.language":S1},u="[0-9](_?[0-9])*",l=`\\.(${u})`,c="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${c})((${l})|\\.)?|(${l}))[eE][+-]?(${u})\\b`},{begin:`\\b(${c})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},f={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},v={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},P={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},A={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},w=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,g,v,P,{match:/\$\d+/},d];p.contains=w.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(w)});const C=[].concat(A,p.contains),O=C.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(C)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:O},$={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,n.concat(r,"(",n.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},fe={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...wl,...El]}},we={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ee={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},We={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Qe(K){return n.concat("(?!",K.join("|"),")")}const Me={match:n.concat(/\b/,Qe([...Cl,"super","import"].map(K=>`${K}\\s*\\(`)),r,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ue={begin:n.concat(/\./,n.lookahead(n.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ze={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},ge="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",pe={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(ge)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:fe},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),we,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,g,v,P,A,{match:/\$\d+/},d,fe,{scope:"attr",match:r+n.lookahead(":"),relevance:0},pe,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[A,e.REGEXP_MODE,{className:"function",begin:ge,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:o},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},Ee,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ue,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},Me,We,$,ze,{match:/\$[(.]/}]}}const ds="[A-Za-z$_][0-9A-Za-z$_]*",Dl=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends","using"],Sl=["true","false","null","undefined","NaN","Infinity"],Tl=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Rl=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],Pl=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],Ll=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],Il=[].concat(Pl,Tl,Rl);function P1(e){const n=e.regex,t=(K,{after:ve})=>{const Le="</"+K[0].slice(1);return K.input.indexOf(Le,ve)!==-1},r=ds,s={begin:"<>",end:"</>"},o=/<[A-Za-z0-9\\._:-]+\s*\/>/,a={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(K,ve)=>{const Le=K[0].length+K.index,Ie=K.input[Le];if(Ie==="<"||Ie===","){ve.ignoreMatch();return}Ie===">"&&(t(K,{after:Le})||ve.ignoreMatch());let Ce;const sn=K.input.substring(Le);if(Ce=sn.match(/^\s*=/)){ve.ignoreMatch();return}if((Ce=sn.match(/^\s+extends\s+/))&&Ce.index===0){ve.ignoreMatch();return}}},i={$pattern:ds,keyword:Dl,literal:Sl,built_in:Il,"variable.language":Ll},u="[0-9](_?[0-9])*",l=`\\.(${u})`,c="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={className:"number",variants:[{begin:`(\\b(${c})((${l})|\\.)?|(${l}))[eE][+-]?(${u})\\b`},{begin:`\\b(${c})\\b((${l})\\b|\\.)?|(${l})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},p={className:"subst",begin:"\\$\\{",end:"\\}",keywords:i,contains:[]},f={begin:".?html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"xml"}},g={begin:".?css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"css"}},v={begin:".?gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,p],subLanguage:"graphql"}},P={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,p]},A={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:r+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},w=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,g,v,P,{match:/\$\d+/},d];p.contains=w.concat({begin:/\{/,end:/\}/,keywords:i,contains:["self"].concat(w)});const C=[].concat(A,p.contains),O=C.concat([{begin:/(\s*)\(/,end:/\)/,keywords:i,contains:["self"].concat(C)}]),N={className:"params",begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:O},$={variants:[{match:[/class/,/\s+/,r,/\s+/,/extends/,/\s+/,n.concat(r,"(",n.concat(/\./,r),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,r],scope:{1:"keyword",3:"title.class"}}]},fe={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...Tl,...Rl]}},we={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},Ee={variants:[{match:[/function/,/\s+/,r,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[N],illegal:/%/},We={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function Qe(K){return n.concat("(?!",K.join("|"),")")}const Me={match:n.concat(/\b/,Qe([...Pl,"super","import"].map(K=>`${K}\\s*\\(`)),r,n.lookahead(/\s*\(/)),className:"title.function",relevance:0},Ue={begin:n.concat(/\./,n.lookahead(n.concat(r,/(?![0-9A-Za-z$_(])/))),end:r,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},ze={match:[/get|set/,/\s+/,r,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},N]},ge="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",pe={match:[/const|var|let/,/\s+/,r,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(ge)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[N]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:i,exports:{PARAMS_CONTAINS:O,CLASS_REFERENCE:fe},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),we,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,f,g,v,P,A,{match:/\$\d+/},d,fe,{scope:"attr",match:r+n.lookahead(":"),relevance:0},pe,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[A,e.REGEXP_MODE,{className:"function",begin:ge,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/(\s*)\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:O}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:s.begin,end:s.end},{match:o},{begin:a.begin,"on:begin":a.isTrulyOpeningTag,end:a.end}],subLanguage:"xml",contains:[{begin:a.begin,end:a.end,skip:!0,contains:["self"]}]}]},Ee,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[N,e.inherit(e.TITLE_MODE,{begin:r,className:"title.function"})]},{match:/\.\.\./,relevance:0},Ue,{match:"\\$"+r,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[N]},Me,We,$,ze,{match:/\$[(.]/}]}}function L1(e){const n=e.regex,t=P1(e),r=ds,s=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],o={begin:[/namespace/,/\s+/,e.IDENT_RE],beginScope:{1:"keyword",3:"title.class"}},a={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:s},contains:[t.exports.CLASS_REFERENCE]},i={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},u=["type","interface","public","private","protected","implements","declare","abstract","readonly","enum","override","satisfies"],l={$pattern:ds,keyword:Dl.concat(u),literal:Sl,built_in:Il.concat(s),"variable.language":Ll},c={className:"meta",begin:"@"+r},d=(v,P,M)=>{const A=v.contains.findIndex(w=>w.label===P);if(A===-1)throw new Error("can not find mode to replace");v.contains.splice(A,1,M)};Object.assign(t.keywords,l),t.exports.PARAMS_CONTAINS.push(c);const p=t.contains.find(v=>v.scope==="attr"),f=Object.assign({},p,{match:n.concat(r,n.lookahead(/\s*\?:/))});t.exports.PARAMS_CONTAINS.push([t.exports.CLASS_REFERENCE,p,f]),t.contains=t.contains.concat([c,o,a,f]),d(t,"shebang",e.SHEBANG()),d(t,"use_strict",i);const g=t.contains.find(v=>v.label==="func.def");return g.relevance=0,Object.assign(t,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),t}function I1(e){const n=e.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],i={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},u={className:"meta",begin:/^(>>>|\.\.\.) /},l={className:"subst",begin:/\{/,end:/\}/,keywords:i,illegal:/#/},c={begin:/\{\{/,relevance:0},d={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,u,c,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,u,c,l]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,c,l]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,c,l]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},p="[0-9](_?[0-9])*",f=`(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,g=`\\b|${r.join("|")}`,v={className:"number",relevance:0,variants:[{begin:`(\\b(${p})|(${f}))[eE][+-]?(${p})[jJ]?(?=${g})`},{begin:`(${f})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${g})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${g})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`},{begin:`\\b(${p})[jJ](?=${g})`}]},P={className:"comment",begin:n.lookahead(/# type:/),end:/$/,keywords:i,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},M={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:i,contains:["self",u,v,d,e.HASH_COMMENT_MODE]}]};return l.contains=[d,v,u],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:i,illegal:/(<\/|\?)|=>/,contains:[u,v,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},d,P,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[M]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[v,M,d]}]}}function M1(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},r=["true","false","null"],s={scope:"literal",beginKeywords:r.join(" ")};return{name:"JSON",aliases:["jsonc"],keywords:{literal:r},contains:[n,t,e.QUOTE_STRING_MODE,s,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ci(e){const n=e.regex,t={},r={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[t]}]};Object.assign(t,{className:"variable",variants:[{begin:n.concat(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},r]});const s={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},o=e.inherit(e.COMMENT(),{match:[/(^|\s)/,/#.*$/],scope:{2:"comment"}}),a={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},i={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,s]};s.contains.push(i);const u={match:/\\"/},l={className:"string",begin:/'/,end:/'/},c={match:/\\'/},d={begin:/\$?\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,t]},p=["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"],f=e.SHEBANG({binary:`(${p.join("|")})`,relevance:10}),g={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},v=["if","then","else","elif","fi","time","for","while","until","in","do","done","case","esac","coproc","function","select"],P=["true","false"],M={match:/(\/[a-z._-]+)+/},A=["break","cd","continue","eval","exec","exit","export","getopts","hash","pwd","readonly","return","shift","test","times","trap","umask","unset"],w=["alias","bind","builtin","caller","command","declare","echo","enable","help","let","local","logout","mapfile","printf","read","readarray","source","sudo","type","typeset","ulimit","unalias"],C=["autoload","bg","bindkey","bye","cap","chdir","clone","comparguments","compcall","compctl","compdescribe","compfiles","compgroups","compquote","comptags","comptry","compvalues","dirs","disable","disown","echotc","echoti","emulate","fc","fg","float","functions","getcap","getln","history","integer","jobs","kill","limit","log","noglob","popd","print","pushd","pushln","rehash","sched","setcap","setopt","stat","suspend","ttyctl","unfunction","unhash","unlimit","unsetopt","vared","wait","whence","where","which","zcompile","zformat","zftp","zle","zmodload","zparseopts","zprof","zpty","zregexparse","zsocket","zstyle","ztcp"],O=["chcon","chgrp","chown","chmod","cp","dd","df","dir","dircolors","ln","ls","mkdir","mkfifo","mknod","mktemp","mv","realpath","rm","rmdir","shred","sync","touch","truncate","vdir","b2sum","base32","base64","cat","cksum","comm","csplit","cut","expand","fmt","fold","head","join","md5sum","nl","numfmt","od","paste","ptx","pr","sha1sum","sha224sum","sha256sum","sha384sum","sha512sum","shuf","sort","split","sum","tac","tail","tr","tsort","unexpand","uniq","wc","arch","basename","chroot","date","dirname","du","echo","env","expr","factor","groups","hostid","id","link","logname","nice","nohup","nproc","pathchk","pinky","printenv","printf","pwd","readlink","runcon","seq","sleep","stat","stdbuf","stty","tee","test","timeout","tty","uname","unlink","uptime","users","who","whoami","yes"];return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z][a-z0-9._-]+\b/,keyword:v,literal:P,built_in:[...A,...w,"set","shopt",...C,...O]},contains:[f,e.SHEBANG(),g,d,o,a,M,i,u,l,c,t]}}function O1(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",r={className:"attr",variants:[{begin:/[\w*@][\w*@ :()\./-]*:(?=[ \t]|$)/},{begin:/"[\w*@][\w*@ :()\./-]*":(?=[ \t]|$)/},{begin:/'[\w*@][\w*@ :()\./-]*':(?=[ \t]|$)/}]},s={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},o={className:"string",relevance:0,begin:/'/,end:/'/,contains:[{match:/''/,scope:"char.escape",relevance:0}]},a={className:"string",relevance:0,variants:[{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,s]},i=e.inherit(a,{variants:[{begin:/'/,end:/'/,contains:[{begin:/''/,relevance:0}]},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),p={className:"number",begin:"\\b"+"[0-9]{4}(-[0-9][0-9]){0,2}"+"([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?"+"(\\.[0-9]*)?"+"([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?"+"\\b"},f={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},g={begin:/\{/,end:/\}/,contains:[f],illegal:"\\n",relevance:0},v={begin:"\\[",end:"\\]",contains:[f],illegal:"\\n",relevance:0},P=[r,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},p,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},g,v,o,a],M=[...P];return M.pop(),M.push(i),f.contains=M,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:P}}function N1(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),r=/[\p{L}0-9._:-]+/u,s={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},o={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},a=e.inherit(o,{begin:/\(/,end:/\)/}),i=e.inherit(e.APOS_STRING_MODE,{className:"string"}),u=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),l={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:r,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[s]},{begin:/'/,end:/'/,contains:[s]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[o,u,i,a,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[o,a,u,i]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},s,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[u]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[l],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[l],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:l}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}const F1={key:0,class:"chapter"},B1={viewBox:"0 0 58 58",class:"dial-svg"},W1={class:"dial-num"},z1={class:"chapter-grid"},q1={class:"chapter-col"},j1={class:"chapter-head rise"},H1={class:"chapter-kicker"},U1={key:0,class:"level-chip"},G1={class:"chapter-title"},$1={key:0,class:"chapter-sub"},K1={key:0,class:"chapter-loading",role:"status","aria-live":"polite"},V1=["innerHTML"],Q1={class:"chapter-nav","aria-label":"章节导航"},J1={class:"nav-meta"},Y1={class:"nav-kicker"},X1={class:"nav-title"},Z1={key:1},ey={class:"nav-meta"},ny={class:"nav-kicker"},ty={class:"nav-title"},ry={key:0,class:"toc-rail","aria-label":"本节目录"},sy=["href","onClick"],oy={class:"toc-text"},ay={key:1,class:"chapter"},iy={class:"not-found"},fo=23,uy=260,ly={__name:"Chapter",setup(e){jn.registerLanguage("javascript",R1),jn.registerLanguage("typescript",L1),jn.registerLanguage("python",I1),jn.registerLanguage("json",M1),jn.registerLanguage("bash",Ci),jn.registerLanguage("yaml",O1),jn.registerLanguage("xml",N1),jn.registerLanguage("shell",Ci);const n=new Sn({html:!1,linkify:!0,highlight(_,b){if(b&&jn.getLanguage(b))try{return jn.highlight(_,{language:b}).value}catch{}return""}});function t(_){return _.trim().toLowerCase().replace(/[`'"·]/g,"").replace(/[^\p{Letter}\p{Number}]+/gu,"-").replace(/^-+|-+$/g,"")||"sec"}n.core.ruler.push("heading-anchors",_=>{const b=new Map;for(let k=0;k<_.tokens.length;k++){const E=_.tokens[k];if(E.type!=="heading_open")continue;const R=Number(E.tag.slice(1));if(R<2||R>4)continue;const I=_.tokens[k+1],D=t((I==null?void 0:I.content)??""),Q=b.get(D)??0;b.set(D,Q+1),E.attrSet("id",Q?`${D}-${Q}`:D)}}),n.core.ruler.push("strip-empty-links",_=>{for(const b of _.tokens){if(b.type!=="inline"||!b.children)continue;const k=b.children,E=[];for(let R=0;R<k.length;R++){if(k[R].type==="link_open"&&k[R+1]&&k[R+1].type==="link_close"){R++;continue}E.push(k[R])}b.children=E}}),n.core.ruler.push("rewrite-source-links",_=>{var k;const b=(k=_.env)==null?void 0:k.book;for(const E of _.tokens)if(!(E.type!=="inline"||!E.children))for(const R of E.children){if(R.type!=="link_open")continue;const I=R.attrGet("href")||"";if(I&&!/^(https?:|mailto:|#|\/|\.\.\/)/i.test(I)){const D=xm(b,I);D?(R.attrSet("href",D),R.attrSet("target","_blank"),R.attrSet("rel","noopener noreferrer"),R.attrSet("class","src-cite")):(R.attrSet("href",""),R.attrSet("class","src-cite"))}}});const r=n.renderer.rules.image;n.renderer.rules.image=(_,b,k,E,R)=>{const I=_[b],D=I.attrGet("src");if(D){const Q=fm(D);Q&&I.attrSet("src",Q)}return r(_,b,k,E,R)};const s=Ss(),o=Ds(),a=ue(()=>Ts(s.params.bookId)),i=ue(()=>bm(s.params.bookId,s.params.chapterId)??null),u=ue(()=>{const _=us(i.value);return _?Rs.find(b=>b.key===_)??null:null}),l=ue(()=>{if(!a.value||!i.value)return"/";const _=us(i.value);return _?`/book/${a.value.id}/week/${_}`:`/book/${a.value.id}`}),c=ue(()=>{var _;return u.value?`${u.value.label} · ${u.value.title}`:((_=a.value)==null?void 0:_.title)||"目录"}),d={Beginner:"入门",Intermediate:"进阶",Advanced:"高级"},p=ue(()=>{var _;return(_=i.value)!=null&&_.level?d[i.value.level]??i.value.level:""});Pn(i,_=>{!_&&a.value&&o.replace(`/book/${s.params.bookId}`)});const f=Rn(""),g=Rn(!1);async function v(_){if(!_){f.value="";return}const b=_.md;if(typeof b=="function"){g.value=!0,f.value="";try{f.value=await b()}catch{f.value=""}finally{g.value=!1}}else f.value=b||""}Pn(i,_=>v(_),{immediate:!0});function P(_){return _.replace(/^Syntax error in textmermaid[^\n]*\n?/gm,"").replace(/^Copy code\n?/gm,"").replace(/^> 作者: Zread_ai\n?/gm,"").replace(/^> 原文链接: https:\/\/zread\.ai\/[^\n]*\n?/gm,"")}const M=ue(()=>f.value?n.render(P(f.value),{book:a.value}):""),A=ue(()=>!a.value||!i.value?-1:a.value.chapters.indexOf(i.value)),w=ue(()=>!a.value||A.value<=0?null:a.value.chapters[A.value-1]),C=ue(()=>!a.value||A.value<0?null:a.value.chapters[A.value+1]),O=Rn(0),N=Rn([]),$=Rn("");function fe(){var b;const _=((b=ge.value)==null?void 0:b.querySelectorAll("h2[id], h3[id], h4[id]"))??[];N.value=[..._].map(k=>{const E=document.createElement("a");return E.className="head-anchor",E.href=`#${k.id}`,E.title="本节链接",E.setAttribute("aria-label","本节链接"),k.prepend(E),{id:k.id,text:k.textContent,level:k.tagName.toLowerCase()}})}function we(_){const b=window.location.hash.split("#").slice(0,2).join("#"),k=window.location.pathname+window.location.search+b+(_?`#${encodeURIComponent(_)}`:"");window.location.href!==new URL(k,window.location.origin).href&&history.replaceState(null,"",k)}function Ee(){var k;const _=window.scrollY+140;let b="";for(const E of N.value){const R=document.getElementById(E.id);R&&R.offsetTop<=_&&(b=E.id)}$.value=b||(((k=N.value[0])==null?void 0:k.id)??""),we($.value)}function We(_){const b=document.getElementById(_);b&&(b.scrollIntoView({block:"start"}),$.value=_,we(_))}function Qe(){if(!s.hash)return;const _=document.getElementById(decodeURIComponent(s.hash.slice(1)));_==null||_.scrollIntoView({block:"start",behavior:"instant"})}function Me(){const _=document.documentElement,b=_.scrollHeight-_.clientHeight;O.value=b>0?Math.min(1,_.scrollTop/b):0,Ee()}gr(()=>{window.addEventListener("scroll",Me,{passive:!0}),Me()}),Gt(()=>window.removeEventListener("scroll",Me)),Pn(()=>s.params.chapterId,()=>Me());const Ue=2*Math.PI*fo,ze=ue(()=>Ue*(1-O.value)),ge=Rn(null),pe=new WeakMap;function K(_){const b=_.currentTarget;pe.set(b,setTimeout(()=>Le(b),uy))}function ve(_){const b=_.currentTarget;clearTimeout(pe.get(b)),Ie(b)}function Le(_){if(_.classList.contains("expanded"))return;_.dataset.restWidth||(_.dataset.restWidth=String(_.offsetWidth));const b=Math.min(_.scrollWidth,window.innerWidth-96);b<=_.offsetWidth+2||(_.classList.add("expanded"),_.style.width=`${_.offsetWidth}px`,_.offsetWidth,_.style.width=`${Math.max(b,Number(_.dataset.restWidth))}px`)}function Ie(_){_.classList.contains("expanded")&&(_.classList.remove("expanded"),_.style.width=`${_.dataset.restWidth}px`,_.addEventListener("transitionend",function b(k){k.propertyName!=="width"||_.classList.contains("expanded")||(_.removeEventListener("transitionend",b),_.style.width="",delete _.dataset.restWidth)}))}const Ce=/^(flowchart|graph\s|sequenceDiagram|classDiagram|erDiagram|gantt|pie|stateDiagram|journey|quadrantChart|requirementDiagram|gitGraph|mindmap|timeline|zenuml|sankey-beta|xychart-beta|block-beta|packet-beta|kanban|architecture-beta)\b/;function sn(_){return _.classList.contains("language-mermaid")?!0:_.className?!1:Ce.test((_.textContent||"").trim())}function Bn(_){const b=_.querySelector(":scope > code");if(!b)return;let E=(b.textContent||"").replace(/\r\n?/g,`
`).split(`
`);if(E.length&&E[E.length-1]===""&&(E=E.slice(0,-1)),E.length<=1)return;const R=document.createElement("span");R.className="line-numbers",R.setAttribute("aria-hidden","true"),R.textContent=E.map((I,D)=>D+1).join(`
`),_.classList.add("lined"),_.insertBefore(R,b)}function xn(){var b;const _=((b=ge.value)==null?void 0:b.querySelectorAll("pre"))??[];for(const k of _){const E=k.querySelector(":scope > code");E&&sn(E)||(E&&Bn(k),!k.closest("blockquote")&&(k.scrollWidth<=k.clientWidth+2||(k.addEventListener("mouseenter",K),k.addEventListener("mouseleave",ve))))}}function en(){var b;const _=((b=ge.value)==null?void 0:b.querySelectorAll("pre"))??[];for(const k of _)clearTimeout(pe.get(k)),k.classList.remove("expanded"),k.style.width="",delete k.dataset.restWidth,k.removeEventListener("mouseenter",K),k.removeEventListener("mouseleave",ve)}let T=[],H="",z=null;function V(){return document.documentElement.dataset.theme==="dark"?"dark":"neutral"}async function le(){return z||(z=await B(()=>import("./mermaid.core-DNuAXIBG.js").then(_=>_.bp),[],import.meta.url)),z.default}async function m(){var R;const _=((R=ge.value)==null?void 0:R.querySelectorAll("pre code"))??[],b=[];for(const I of _)if(I.classList.contains("language-mermaid"))b.push(I);else if(I.className===""||I.classList.length===0){const D=(I.textContent||"").trim();Ce.test(D)&&(I.classList.add("language-mermaid"),b.push(I))}if(T=[],!b.length)return;const k=await le(),E=V();H!==E&&(k.initialize({startOnLoad:!1,theme:E,securityLevel:"loose",fontFamily:'"PingFang SC", -apple-system, "SF Pro Text", sans-serif'}),H=E),b.forEach((I,D)=>{const Q=I.parentElement,W=I.textContent||"";if(!W.trim())return;const U=document.createElement("div");U.className="mermaid-render",Q.replaceWith(U);const ee=`mmd-${D}-${Math.random().toString(36).slice(2,7)}`;k.render(ee,W).then(({svg:re})=>{U.innerHTML=re}).catch(()=>{U.classList.add("mermaid-failed");const re=document.createElement("pre");re.textContent=W,U.replaceChildren(re)}),T.push({div:U,graph:W})})}async function h(){if(!T.length)return;const _=await le(),b=V();_.initialize({startOnLoad:!1,theme:b,securityLevel:"loose",fontFamily:'"PingFang SC", -apple-system, "SF Pro Text", sans-serif'}),H=b;for(let k=0;k<T.length;k++){const{div:E,graph:R}=T[k],I=`mmd-r${k}-${Math.random().toString(36).slice(2,7)}`;try{const{svg:D}=await _.render(I,R);E.innerHTML=D,E.classList.remove("mermaid-failed")}catch{E.classList.add("mermaid-failed")}}}let x;return gr(()=>{x=new MutationObserver(()=>h()),x.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}),Gt(()=>x==null?void 0:x.disconnect()),gr(()=>xr(()=>{fe(),xn(),Ee(),Qe(),m()})),Gt(en),Pn(M,async()=>{en(),await xr(),fe(),xn(),Ee(),Qe(),m()}),(_,b)=>{const k=At("RouterLink");return i.value&&a.value?(ne(),de("main",F1,[Oe(k,{to:l.value,class:"dial",title:"回到目录"},{default:Xe(()=>[(ne(),de("svg",B1,[S("circle",{cx:"29",cy:"29",r:fo,class:"dial-bg"}),S("circle",{cx:"29",cy:"29",r:fo,class:"dial-arc",style:er({strokeDashoffset:ze.value})},null,4)])),S("span",W1,Z(Dn(yr)(i.value)),1)]),_:1},8,["to"]),S("div",z1,[S("div",q1,[S("header",j1,[Oe(k,{to:l.value,class:"chapter-back"},{default:Xe(()=>[b[0]||(b[0]=S("span",{class:"back-chevron","aria-hidden":"true"},"‹",-1)),Ot(" "+Z(c.value),1)]),_:1},8,["to"]),S("p",H1,[S("span",null,Z(a.value.title),1),p.value?(ne(),de("span",U1,Z(p.value),1)):En("",!0)]),S("h1",G1,Z(i.value.title),1),i.value.subtitle?(ne(),de("p",$1,Z(i.value.subtitle),1)):En("",!0)]),g.value?(ne(),de("div",K1,[...b[1]||(b[1]=[S("span",{class:"sr-only"},"正文加载中",-1),S("span",{class:"loading-dot","aria-hidden":"true"},null,-1),S("span",{class:"loading-dot","aria-hidden":"true"},null,-1),S("span",{class:"loading-dot","aria-hidden":"true"},null,-1)])])):(ne(),de("article",{key:1,ref_key:"bodyRef",ref:ge,class:"chapter-body rise",innerHTML:M.value},null,8,V1)),S("nav",Q1,[w.value?(ne(),Vn(k,{key:0,to:`/book/${a.value.id}/chapter/${w.value.id}`,class:"chapter-nav-link"},{default:Xe(()=>[b[2]||(b[2]=S("span",{class:"nav-circle","aria-hidden":"true"},"←",-1)),S("span",J1,[S("span",Y1,"上一章 "+Z(Dn(yr)(w.value)),1),S("span",X1,Z(w.value.title),1)])]),_:1},8,["to"])):(ne(),de("span",Z1)),C.value?(ne(),Vn(k,{key:2,to:`/book/${a.value.id}/chapter/${C.value.id}`,class:"chapter-nav-link next"},{default:Xe(()=>[S("span",ey,[S("span",ny,"下一章 "+Z(Dn(yr)(C.value)),1),S("span",ty,Z(C.value.title),1)]),b[3]||(b[3]=S("span",{class:"nav-circle","aria-hidden":"true"},"->",-1))]),_:1},8,["to"])):En("",!0)])]),N.value.length?(ne(),de("aside",ry,[b[5]||(b[5]=S("p",{class:"toc-rail-title"},"目录",-1)),(ne(!0),de(He,null,pt(N.value,E=>(ne(),de("a",{key:E.id,class:Kn(["toc-link",[E.level,{active:E.id===$.value}]]),href:`#${E.id}`,onClick:yp(R=>We(E.id),["prevent"])},[b[4]||(b[4]=S("span",{class:"toc-marker","aria-hidden":"true"},null,-1)),S("span",oy,Z(E.text),1)],10,sy))),128))])):En("",!0)])])):(ne(),de("main",ay,[S("div",iy,[b[7]||(b[7]=S("p",null,"章节未找到",-1)),Oe(k,{to:"/",class:"back-link"},{default:Xe(()=>[...b[6]||(b[6]=[Ot("← 回到资源库",-1)])]),_:1})])]))}}},cy=Or(ly,[["__scopeId","data-v-76ea76a8"]]),dy=R0({history:u0(),routes:[{path:"/",name:"home",component:Bm},{path:"/book/:bookId",component:Zm,children:[{path:"",name:"book-home",component:vg},{path:"week/:week",name:"week",component:Fg},{path:"chapter/:chapterId",name:"chapter",component:cy}]}],scrollBehavior(e,n,t){return e.hash?!1:t??{top:0}}});xp(O0).use(dy).mount("#app");export{B as _,v1 as g};
