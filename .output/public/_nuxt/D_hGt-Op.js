const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./F2y3dyrQ.js","./index.areehLGu.css","./DTkRihjb.js","./2rai63wT.js","./_id_.BqLGURBz.css","./CCzs_0Ic.js","./Bh2d8xFW.js","./ArticleCard.CJlJ81eb.css","./detail.cjzClcYK.css","./Bnt7xh95.js","./6qCihK2t.js","./index.BrUDO0LH.css","./BdHi-_NF.js","./index.BZoA0Y21.css","./ttFnJjPb.js","./ProsePre.D5orA6B_.css","./D6JoCKlM.js","./C22Php02.js","./error-404.C3V-3Mc4.css","./DVgHgIgm.js","./error-500.dGVH929u.css"])))=>i.map(i=>d[i]);
var lx=Object.defineProperty;var cx=(n,e,t)=>e in n?lx(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Yi=(n,e,t)=>cx(n,typeof e!="symbol"?e+"":e,t);/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Th(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ht={},Gs=[],hi=()=>{},ux=()=>!1,ya=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),bh=n=>n.startsWith("onUpdate:"),kt=Object.assign,Ah=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},fx=Object.prototype.hasOwnProperty,nt=(n,e)=>fx.call(n,e),Ne=Array.isArray,Ws=n=>Sa(n)==="[object Map]",u_=n=>Sa(n)==="[object Set]",hx=n=>Sa(n)==="[object RegExp]",ke=n=>typeof n=="function",vt=n=>typeof n=="string",Wi=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",sc=n=>(dt(n)||ke(n))&&ke(n.then)&&ke(n.catch),f_=Object.prototype.toString,Sa=n=>f_.call(n),dx=n=>Sa(n).slice(8,-1),h_=n=>Sa(n)==="[object Object]",wh=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xs=Th(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oc=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},px=/-(\w)/g,Wn=oc(n=>n.replace(px,(e,t)=>t?t.toUpperCase():"")),mx=/\B([A-Z])/g,ds=oc(n=>n.replace(mx,"-$1").toLowerCase()),ac=oc(n=>n.charAt(0).toUpperCase()+n.slice(1)),Dc=oc(n=>n?`on${ac(n)}`:""),hr=(n,e)=>!Object.is(n,e),ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},d_=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},_x=n=>{const e=parseFloat(n);return isNaN(e)?n:e},p_=n=>{const e=vt(n)?Number(n):NaN;return isNaN(e)?n:e};let Cd;const lc=()=>Cd||(Cd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cc(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?yx(i):cc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||dt(n))return n}const gx=/;(?![^(]*\))/g,vx=/:([^]+)/,xx=/\/\*[^]*?\*\//g;function yx(n){const e={};return n.replace(xx,"").split(gx).forEach(t=>{if(t){const i=t.split(vx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function as(n){let e="";if(vt(n))e=n;else if(Ne(n))for(let t=0;t<n.length;t++){const i=as(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Sx(n){if(!n)return null;let{class:e,style:t}=n;return e&&!vt(e)&&(n.class=as(e)),t&&(n.style=cc(t)),n}const Mx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ex=Th(Mx);function m_(n){return!!n||n===""}const __=n=>!!(n&&n.__v_isRef===!0),Tx=n=>vt(n)?n:n==null?"":Ne(n)||dt(n)&&(n.toString===f_||!ke(n.toString))?__(n)?Tx(n.value):JSON.stringify(n,g_,2):String(n),g_=(n,e)=>__(e)?g_(n,e.value):Ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ic(i,s)+" =>"]=r,t),{})}:u_(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ic(t))}:Wi(e)?Ic(e):dt(e)&&!Ne(e)&&!h_(e)?String(e):e,Ic=(n,e="")=>{var t;return Wi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let an;class v_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=an,!e&&an&&(this.index=(an.scopes||(an.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=an;try{return an=this,e()}finally{an=t}}}on(){an=this}off(){an=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function bx(n){return new v_(n)}function Rh(){return an}function Ax(n,e=!1){an&&an.cleanups.push(n)}let ft;const Uc=new WeakSet;class x_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,an&&an.active&&an.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Uc.has(this)&&(Uc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||S_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pd(this),M_(this);const e=ft,t=ei;ft=this,ei=!0;try{return this.fn()}finally{E_(this),ft=e,ei=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lh(e);this.deps=this.depsTail=void 0,Pd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Uc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Bu(this)&&this.run()}get dirty(){return Bu(this)}}let y_=0,Ho,zo;function S_(n,e=!1){if(n.flags|=8,e){n.next=zo,zo=n;return}n.next=Ho,Ho=n}function Ch(){y_++}function Ph(){if(--y_>0)return;if(zo){let e=zo;for(zo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ho;){let e=Ho;for(Ho=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function M_(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function E_(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Lh(i),wx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Bu(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(T_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function T_(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===na))return;n.globalVersion=na;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Bu(n)){n.flags&=-3;return}const t=ft,i=ei;ft=n,ei=!0;try{M_(n);const r=n.fn(n._value);(e.version===0||hr(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,ei=i,E_(n),n.flags&=-3}}function Lh(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Lh(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function wx(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ei=!0;const b_=[];function br(){b_.push(ei),ei=!1}function Ar(){const n=b_.pop();ei=n===void 0?!0:n}function Pd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let na=0;class Rx{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Dh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ft||!ei||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Rx(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,A_(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,na++,this.notify(e)}notify(e){Ch();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ph()}}}function A_(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)A_(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Dl=new WeakMap,Qr=Symbol(""),ku=Symbol(""),ia=Symbol("");function Kt(n,e,t){if(ei&&ft){let i=Dl.get(n);i||Dl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Dh),r.map=i,r.key=t),r.track()}}function Di(n,e,t,i,r,s){const o=Dl.get(n);if(!o){na++;return}const a=l=>{l&&l.trigger()};if(Ch(),e==="clear")o.forEach(a);else{const l=Ne(n),c=l&&wh(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===ia||!Wi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(ia)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Qr)),Ws(n)&&a(o.get(ku)));break;case"delete":l||(a(o.get(Qr)),Ws(n)&&a(o.get(ku)));break;case"set":Ws(n)&&a(o.get(Qr));break}}Ph()}function Cx(n,e){const t=Dl.get(n);return t&&t.get(e)}function gs(n){const e=Ke(n);return e===n?e:(Kt(e,"iterate",ia),Gn(n)?e:e.map(Zt))}function uc(n){return Kt(n=Ke(n),"iterate",ia),n}const Px={__proto__:null,[Symbol.iterator](){return Nc(this,Symbol.iterator,Zt)},concat(...n){return gs(this).concat(...n.map(e=>Ne(e)?gs(e):e))},entries(){return Nc(this,"entries",n=>(n[1]=Zt(n[1]),n))},every(n,e){return yi(this,"every",n,e,void 0,arguments)},filter(n,e){return yi(this,"filter",n,e,t=>t.map(Zt),arguments)},find(n,e){return yi(this,"find",n,e,Zt,arguments)},findIndex(n,e){return yi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return yi(this,"findLast",n,e,Zt,arguments)},findLastIndex(n,e){return yi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return yi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Oc(this,"includes",n)},indexOf(...n){return Oc(this,"indexOf",n)},join(n){return gs(this).join(n)},lastIndexOf(...n){return Oc(this,"lastIndexOf",n)},map(n,e){return yi(this,"map",n,e,void 0,arguments)},pop(){return Ao(this,"pop")},push(...n){return Ao(this,"push",n)},reduce(n,...e){return Ld(this,"reduce",n,e)},reduceRight(n,...e){return Ld(this,"reduceRight",n,e)},shift(){return Ao(this,"shift")},some(n,e){return yi(this,"some",n,e,void 0,arguments)},splice(...n){return Ao(this,"splice",n)},toReversed(){return gs(this).toReversed()},toSorted(n){return gs(this).toSorted(n)},toSpliced(...n){return gs(this).toSpliced(...n)},unshift(...n){return Ao(this,"unshift",n)},values(){return Nc(this,"values",Zt)}};function Nc(n,e,t){const i=uc(n),r=i[e]();return i!==n&&!Gn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Lx=Array.prototype;function yi(n,e,t,i,r,s){const o=uc(n),a=o!==n&&!Gn(n),l=o[e];if(l!==Lx[e]){const f=l.apply(n,s);return a?Zt(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,Zt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Ld(n,e,t,i){const r=uc(n);let s=t;return r!==n&&(Gn(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Zt(a),l,n)}),r[e](s,...i)}function Oc(n,e,t){const i=Ke(n);Kt(i,"iterate",ia);const r=i[e](...t);return(r===-1||r===!1)&&Nh(t[0])?(t[0]=Ke(t[0]),i[e](...t)):r}function Ao(n,e,t=[]){br(),Ch();const i=Ke(n)[e].apply(n,t);return Ph(),Ar(),i}const Dx=Th("__proto__,__v_isRef,__isVue"),w_=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Wi));function Ix(n){Wi(n)||(n=String(n));const e=Ke(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class R_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Gx:D_:s?L_:P_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ne(e);if(!r){let l;if(o&&(l=Px[t]))return l;if(t==="hasOwnProperty")return Ix}const a=Reflect.get(e,t,Bt(e)?e:i);return(Wi(t)?w_.has(t):Dx(t))||(r||Kt(e,"get",t),s)?a:Bt(a)?o&&wh(t)?a:a.value:dt(a)?r?I_(a):wr(a):a}}class C_ extends R_{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=yr(s);if(!Gn(i)&&!yr(i)&&(s=Ke(s),i=Ke(i)),!Ne(e)&&Bt(s)&&!Bt(i))return l?!1:(s.value=i,!0)}const o=Ne(e)&&wh(t)?Number(t)<e.length:nt(e,t),a=Reflect.set(e,t,i,Bt(e)?e:r);return e===Ke(r)&&(o?hr(i,s)&&Di(e,"set",t,i):Di(e,"add",t,i)),a}deleteProperty(e,t){const i=nt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Di(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Wi(t)||!w_.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",Ne(e)?"length":Qr),Reflect.ownKeys(e)}}class Ux extends R_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Nx=new C_,Ox=new Ux,Fx=new C_(!0);const Hu=n=>n,Na=n=>Reflect.getPrototypeOf(n);function Bx(n,e,t){return function(...i){const r=this.__v_raw,s=Ke(r),o=Ws(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Hu:e?zu:Zt;return!e&&Kt(s,"iterate",l?ku:Qr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Oa(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function kx(n,e){const t={get(r){const s=this.__v_raw,o=Ke(s),a=Ke(r);n||(hr(r,a)&&Kt(o,"get",r),Kt(o,"get",a));const{has:l}=Na(o),c=e?Hu:n?zu:Zt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Kt(Ke(r),"iterate",Qr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ke(s),a=Ke(r);return n||(hr(r,a)&&Kt(o,"has",r),Kt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ke(a),c=e?Hu:n?zu:Zt;return!n&&Kt(l,"iterate",Qr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return kt(t,n?{add:Oa("add"),set:Oa("set"),delete:Oa("delete"),clear:Oa("clear")}:{add(r){!e&&!Gn(r)&&!yr(r)&&(r=Ke(r));const s=Ke(this);return Na(s).has.call(s,r)||(s.add(r),Di(s,"add",r,r)),this},set(r,s){!e&&!Gn(s)&&!yr(s)&&(s=Ke(s));const o=Ke(this),{has:a,get:l}=Na(o);let c=a.call(o,r);c||(r=Ke(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?hr(s,u)&&Di(o,"set",r,s):Di(o,"add",r,s),this},delete(r){const s=Ke(this),{has:o,get:a}=Na(s);let l=o.call(s,r);l||(r=Ke(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Di(s,"delete",r,void 0),c},clear(){const r=Ke(this),s=r.size!==0,o=r.clear();return s&&Di(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Bx(r,n,e)}),t}function Ih(n,e){const t=kx(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(nt(t,r)&&r in i?t:i,r,s)}const Hx={get:Ih(!1,!1)},zx={get:Ih(!1,!0)},Vx={get:Ih(!0,!1)};const P_=new WeakMap,L_=new WeakMap,D_=new WeakMap,Gx=new WeakMap;function Wx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xx(n){return n.__v_skip||!Object.isExtensible(n)?0:Wx(dx(n))}function wr(n){return yr(n)?n:Uh(n,!1,Nx,Hx,P_)}function Ni(n){return Uh(n,!1,Fx,zx,L_)}function I_(n){return Uh(n,!0,Ox,Vx,D_)}function Uh(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Xx(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function es(n){return yr(n)?es(n.__v_raw):!!(n&&n.__v_isReactive)}function yr(n){return!!(n&&n.__v_isReadonly)}function Gn(n){return!!(n&&n.__v_isShallow)}function Nh(n){return n?!!n.__v_raw:!1}function Ke(n){const e=n&&n.__v_raw;return e?Ke(e):n}function qx(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&d_(n,"__v_skip",!0),n}const Zt=n=>dt(n)?wr(n):n,zu=n=>dt(n)?I_(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function Wt(n){return U_(n,!1)}function ra(n){return U_(n,!0)}function U_(n,e){return Bt(n)?n:new $x(n,e)}class $x{constructor(e,t){this.dep=new Dh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ke(e),this._value=t?e:Zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Gn(e)||yr(e);e=i?e:Ke(e),hr(e,t)&&(this._rawValue=e,this._value=i?e:Zt(e),this.dep.trigger())}}function _t(n){return Bt(n)?n.value:n}const Yx={get:(n,e,t)=>e==="__v_raw"?n:_t(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Bt(r)&&!Bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function N_(n){return es(n)?n:new Proxy(n,Yx)}class jx{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Cx(Ke(this._object),this._key)}}class Kx{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Zx(n,e,t){return Bt(n)?n:ke(n)?new Kx(n):dt(n)&&arguments.length>1?Jx(n,e,t):Wt(n)}function Jx(n,e,t){const i=n[e];return Bt(i)?i:new jx(n,e,t)}class Qx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Dh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return S_(this,!0),!0}get value(){const e=this.dep.track();return T_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ey(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new Qx(i,r,t)}const Fa={},Il=new WeakMap;let Gr;function ty(n,e=!1,t=Gr){if(t){let i=Il.get(t);i||Il.set(t,i=[]),i.push(n)}}function ny(n,e,t=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=x=>r?x:Gn(x)||r===!1||r===0?ar(x,1):ar(x);let u,f,h,d,g=!1,_=!1;if(Bt(n)?(f=()=>n.value,g=Gn(n)):es(n)?(f=()=>c(n),g=!0):Ne(n)?(_=!0,g=n.some(x=>es(x)||Gn(x)),f=()=>n.map(x=>{if(Bt(x))return x.value;if(es(x))return c(x);if(ke(x))return l?l(x,2):x()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){br();try{h()}finally{Ar()}}const x=Gr;Gr=u;try{return l?l(n,3,[d]):n(d)}finally{Gr=x}}:f=hi,e&&r){const x=f,b=r===!0?1/0:r;f=()=>ar(x(),b)}const m=Rh(),p=()=>{u.stop(),m&&m.active&&Ah(m.effects,u)};if(s&&e){const x=e;e=(...b)=>{x(...b),p()}}let y=_?new Array(n.length).fill(Fa):Fa;const v=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const b=u.run();if(r||g||(_?b.some((A,w)=>hr(A,y[w])):hr(b,y))){h&&h();const A=Gr;Gr=u;try{const w=[b,y===Fa?void 0:_&&y[0]===Fa?[]:y,d];l?l(e,3,w):e(...w),y=b}finally{Gr=A}}}else u.run()};return a&&a(v),u=new x_(f),u.scheduler=o?()=>o(v,!1):v,d=x=>ty(x,!1,u),h=u.onStop=()=>{const x=Il.get(u);if(x){if(l)l(x,4);else for(const b of x)b();Il.delete(u)}},e?i?v(!0):y=u.run():o?o(v.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ar(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Bt(n))ar(n.value,e,t);else if(Ne(n))for(let i=0;i<n.length;i++)ar(n[i],e,t);else if(u_(n)||Ws(n))n.forEach(i=>{ar(i,e,t)});else if(h_(n)){for(const i in n)ar(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ar(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ma(n,e,t,i){try{return i?n(...i):n()}catch(r){So(r,e,t)}}function ni(n,e,t,i){if(ke(n)){const r=Ma(n,e,t,i);return r&&sc(r)&&r.catch(s=>{So(s,e,t)}),r}if(Ne(n)){const r=[];for(let s=0;s<n.length;s++)r.push(ni(n[s],e,t,i));return r}}function So(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(s){br(),Ma(s,null,10,[n,l,c]),Ar();return}}iy(n,t,r,i,o)}function iy(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const ln=[];let si=-1;const qs=[];let nr=null,Us=0;const O_=Promise.resolve();let Ul=null;function Ea(n){const e=Ul||O_;return n?e.then(this?n.bind(this):n):e}function ry(n){let e=si+1,t=ln.length;for(;e<t;){const i=e+t>>>1,r=ln[i],s=sa(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Oh(n){if(!(n.flags&1)){const e=sa(n),t=ln[ln.length-1];!t||!(n.flags&2)&&e>=sa(t)?ln.push(n):ln.splice(ry(e),0,n),n.flags|=1,F_()}}function F_(){Ul||(Ul=O_.then(B_))}function Vu(n){Ne(n)?qs.push(...n):nr&&n.id===-1?nr.splice(Us+1,0,n):n.flags&1||(qs.push(n),n.flags|=1),F_()}function Dd(n,e,t=si+1){for(;t<ln.length;t++){const i=ln[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ln.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Nl(n){if(qs.length){const e=[...new Set(qs)].sort((t,i)=>sa(t)-sa(i));if(qs.length=0,nr){nr.push(...e);return}for(nr=e,Us=0;Us<nr.length;Us++){const t=nr[Us];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}nr=null,Us=0}}const sa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function B_(n){try{for(si=0;si<ln.length;si++){const e=ln[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ma(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<ln.length;si++){const e=ln[si];e&&(e.flags&=-2)}si=-1,ln.length=0,Nl(),Ul=null,(ln.length||qs.length)&&B_()}}let Gt=null,k_=null;function Ol(n){const e=Gt;return Gt=n,k_=n&&n.type.__scopeId||null,e}function Fs(n,e=Gt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xd(-1);const s=Ol(e);let o;try{o=n(...r)}finally{Ol(s),i._d&&Xd(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function oi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(br(),ni(l,t,8,[n.el,a,n,e]),Ar())}}const sy=Symbol("_vte"),H_=n=>n.__isTeleport,ir=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function oy(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _i(()=>{n.isMounted=!0}),hc(()=>{n.isUnmounting=!0}),n}const On=[Function,Array],z_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On},V_=n=>{const e=n.subTree;return e.component?V_(e.component):e},ay={name:"BaseTransition",props:z_,setup(n,{slots:e}){const t=ba(),i=oy();return()=>{const r=e.default&&X_(e.default(),!0);if(!r||!r.length)return;const s=G_(r),o=Ke(n),{mode:a}=o;if(i.isLeaving)return Fc(s);const l=Id(s);if(!l)return Fc(s);let c=Gu(l,o,i,t,f=>c=f);l.type!==Dt&&no(l,c);let u=t.subTree&&Id(t.subTree);if(u&&u.type!==Dt&&!Zn(l,u)&&V_(t).type!==Dt){let f=Gu(u,o,i,t);if(no(u,f),a==="out-in"&&l.type!==Dt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Fc(s);a==="in-out"&&l.type!==Dt?f.delayLeave=(h,d,g)=>{const _=W_(i,u);_[String(u.key)]=u,h[ir]=()=>{d(),h[ir]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function G_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Dt){e=t;break}}return e}const ly=ay;function W_(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Gu(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:y,onAppearCancelled:v}=e,x=String(n.key),b=W_(t,n),A=(E,T)=>{E&&ni(E,i,9,T)},w=(E,T)=>{const D=T[1];A(E,T),Ne(E)?E.every(I=>I.length<=1)&&D():E.length<=1&&D()},L={mode:o,persisted:a,beforeEnter(E){let T=l;if(!t.isMounted)if(s)T=m||l;else return;E[ir]&&E[ir](!0);const D=b[x];D&&Zn(n,D)&&D.el[ir]&&D.el[ir](),A(T,[E])},enter(E){let T=c,D=u,I=f;if(!t.isMounted)if(s)T=p||c,D=y||u,I=v||f;else return;let U=!1;const G=E[Ba]=Z=>{U||(U=!0,Z?A(I,[E]):A(D,[E]),L.delayedLeave&&L.delayedLeave(),E[Ba]=void 0)};T?w(T,[E,G]):G()},leave(E,T){const D=String(n.key);if(E[Ba]&&E[Ba](!0),t.isUnmounting)return T();A(h,[E]);let I=!1;const U=E[ir]=G=>{I||(I=!0,T(),G?A(_,[E]):A(g,[E]),E[ir]=void 0,b[D]===n&&delete b[D])};b[D]=n,d?w(d,[E,U]):U()},clone(E){const T=Gu(E,e,t,i,r);return r&&r(T),T}};return L}function Fc(n){if(Ta(n))return n=ii(n),n.children=null,n}function Id(n){if(!Ta(n))return H_(n.type)&&n.children?G_(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ke(t.default))return t.default()}}function no(n,e){n.shapeFlag&6&&n.component?(n.transition=e,no(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function X_(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Jt?(o.patchFlag&128&&r++,i=i.concat(X_(o.children,e,a))):(e||o.type!==Dt)&&i.push(a!=null?ii(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ps(n,e){return ke(n)?kt({name:n.name},e,{setup:n}):n}function Fh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function oa(n,e,t,i,r=!1){if(Ne(n)){n.forEach((g,_)=>oa(g,e&&(Ne(e)?e[_]:e),t,i,r));return}if(dr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&oa(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?zh(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,h=Ke(f),d=f===ht?()=>!1:g=>nt(h,g);if(c!=null&&c!==l&&(vt(c)?(u[c]=null,d(c)&&(f[c]=null)):Bt(c)&&(c.value=null)),ke(l))Ma(l,a,12,[o,u]);else{const g=vt(l),_=Bt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?f[l]:u[l]:l.value;r?Ne(p)&&Ah(p,s):Ne(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,Vt(m,t)):m()}}}let Ud=!1;const vs=()=>{Ud||(console.error("Hydration completed but contains mismatches."),Ud=!0)},cy=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",uy=n=>n.namespaceURI.includes("MathML"),ka=n=>{if(n.nodeType===1){if(cy(n))return"svg";if(uy(n))return"mathml"}},Bs=n=>n.nodeType===8;function fy(n){const{mt:e,p:t,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(v,x)=>{if(!x.hasChildNodes()){t(null,v,x),Nl(),x._vnode=v;return}f(x.firstChild,v,null,null,null),Nl(),x._vnode=v},f=(v,x,b,A,w,L=!1)=>{L=L||!!x.dynamicChildren;const E=Bs(v)&&v.data==="[",T=()=>_(v,x,b,A,w,E),{type:D,ref:I,shapeFlag:U,patchFlag:G}=x;let Z=v.nodeType;x.el=v,G===-2&&(L=!1,x.dynamicChildren=null);let O=null;switch(D){case ns:Z!==3?x.children===""?(l(x.el=r(""),o(v),v),O=v):O=T():(v.data!==x.children&&(vs(),v.data=x.children),O=s(v));break;case Dt:y(v)?(O=s(v),p(x.el=v.content.firstChild,v,b)):Z!==8||E?O=T():O=s(v);break;case Go:if(E&&(v=s(v),Z=v.nodeType),Z===1||Z===3){O=v;const j=!x.children.length;for(let F=0;F<x.staticCount;F++)j&&(x.children+=O.nodeType===1?O.outerHTML:O.data),F===x.staticCount-1&&(x.anchor=O),O=s(O);return E?s(O):O}else T();break;case Jt:E?O=g(v,x,b,A,w,L):O=T();break;default:if(U&1)(Z!==1||x.type.toLowerCase()!==v.tagName.toLowerCase())&&!y(v)?O=T():O=h(v,x,b,A,w,L);else if(U&6){x.slotScopeIds=w;const j=o(v);if(E?O=m(v):Bs(v)&&v.data==="teleport start"?O=m(v,v.data,"teleport end"):O=s(v),e(x,j,null,b,A,ka(j),L),dr(x)&&!x.type.__asyncResolved){let F;E?(F=ot(Jt),F.anchor=O?O.previousSibling:j.lastChild):F=v.nodeType===3?qo(""):ot("div"),F.el=v,x.component.subTree=F}}else U&64?Z!==8?O=T():O=x.type.hydrate(v,x,b,A,w,L,n,d):U&128&&(O=x.type.hydrate(v,x,b,A,ka(o(v)),w,L,n,f))}return I!=null&&oa(I,null,A,x),O},h=(v,x,b,A,w,L)=>{L=L||!!x.dynamicChildren;const{type:E,props:T,patchFlag:D,shapeFlag:I,dirs:U,transition:G}=x,Z=E==="input"||E==="option";if(Z||D!==-1){U&&oi(x,null,b,"created");let O=!1;if(y(v)){O=pg(null,G)&&b&&b.vnode.props&&b.vnode.props.appear;const F=v.content.firstChild;O&&G.beforeEnter(F),p(F,v,b),x.el=v=F}if(I&16&&!(T&&(T.innerHTML||T.textContent))){let F=d(v.firstChild,x,v,b,A,w,L);for(;F;){Ha(v,1)||vs();const fe=F;F=F.nextSibling,a(fe)}}else if(I&8){let F=x.children;F[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(F=F.slice(1)),v.textContent!==F&&(Ha(v,0)||vs(),v.textContent=x.children)}if(T){if(Z||!L||D&48){const F=v.tagName.includes("-");for(const fe in T)(Z&&(fe.endsWith("value")||fe==="indeterminate")||ya(fe)&&!Xs(fe)||fe[0]==="."||F)&&i(v,fe,null,T[fe],void 0,b)}else if(T.onClick)i(v,"onClick",null,T.onClick,void 0,b);else if(D&4&&es(T.style))for(const F in T.style)T.style[F]}let j;(j=T&&T.onVnodeBeforeMount)&&hn(j,b,x),U&&oi(x,null,b,"beforeMount"),((j=T&&T.onVnodeMounted)||U||O)&&Sg(()=>{j&&hn(j,b,x),O&&G.enter(v),U&&oi(x,null,b,"mounted")},A)}return v.nextSibling},d=(v,x,b,A,w,L,E)=>{E=E||!!x.dynamicChildren;const T=x.children,D=T.length;for(let I=0;I<D;I++){const U=E?T[I]:T[I]=Rn(T[I]),G=U.type===ns;v?(G&&!E&&I+1<D&&Rn(T[I+1]).type===ns&&(l(r(v.data.slice(U.children.length)),b,s(v)),v.data=U.children),v=f(v,U,A,w,L,E)):G&&!U.children?l(U.el=r(""),b):(Ha(b,1)||vs(),t(null,U,b,null,A,w,ka(b),L))}return v},g=(v,x,b,A,w,L)=>{const{slotScopeIds:E}=x;E&&(w=w?w.concat(E):E);const T=o(v),D=d(s(v),x,T,b,A,w,L);return D&&Bs(D)&&D.data==="]"?s(x.anchor=D):(vs(),l(x.anchor=c("]"),T,D),D)},_=(v,x,b,A,w,L)=>{if(Ha(v.parentElement,1)||vs(),x.el=null,L){const D=m(v);for(;;){const I=s(v);if(I&&I!==D)a(I);else break}}const E=s(v),T=o(v);return a(v),t(null,x,T,E,b,A,ka(T),w),b&&(b.vnode.el=x.el,pc(b,x.el)),E},m=(v,x="[",b="]")=>{let A=0;for(;v;)if(v=s(v),v&&Bs(v)&&(v.data===x&&A++,v.data===b)){if(A===0)return s(v);A--}return v},p=(v,x,b)=>{const A=x.parentNode;A&&A.replaceChild(v,x);let w=b;for(;w;)w.vnode.el===x&&(w.vnode.el=w.subTree.el=v),w=w.parent},y=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[u,f]}const Nd="data-allow-mismatch",hy={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ha(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(Nd);)n=n.parentElement;const t=n&&n.getAttribute(Nd);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:t.split(",").includes(hy[e])}}lc().requestIdleCallback;lc().cancelIdleCallback;function dy(n,e){if(Bs(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Bs(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const dr=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ut(n){ke(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let g;return c||(g=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(h()),()=>p(_),f+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return ps({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(g,_,m){const p=s?()=>{const y=s(m,v=>dy(g,v));y&&(_.bum||(_.bum=[])).push(y)}:m;u?p():d().then(()=>!_.isUnmounted&&p())},get __asyncResolved(){return u},setup(){const g=It;if(Fh(g),u)return()=>Bc(u,g);const _=v=>{c=null,So(v,g,13,!i)};if(a&&g.suspense||ro)return d().then(v=>()=>Bc(v,g)).catch(v=>(_(v),()=>i?ot(i,{error:v}):null));const m=Wt(!1),p=Wt(),y=Wt(!!r);return r&&setTimeout(()=>{y.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const v=new Error(`Async component timed out after ${o}ms.`);_(v),p.value=v}},o),d().then(()=>{m.value=!0,g.parent&&Ta(g.parent.vnode)&&g.parent.update()}).catch(v=>{_(v),p.value=v}),()=>{if(m.value&&u)return Bc(u,g);if(p.value&&i)return ot(i,{error:p.value});if(t&&!y.value)return ot(t)}}})}function Bc(n,e){const{ref:t,props:i,children:r,ce:s}=e.vnode,o=ot(n,i,r);return o.ref=t,o.ce=s,delete e.vnode.ce,o}const Ta=n=>n.type.__isKeepAlive,py={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=ba(),i=t.ctx;if(!i.renderer)return()=>{const y=e.default&&e.default();return y&&y.length===1?y[0]:y};const r=new Map,s=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(y,v,x,b,A)=>{const w=y.component;c(y,v,x,0,a),l(w.vnode,y,v,x,w,a,b,y.slotScopeIds,A),Vt(()=>{w.isDeactivated=!1,w.a&&ko(w.a);const L=y.props&&y.props.onVnodeMounted;L&&hn(L,w.parent,y)},a)},i.deactivate=y=>{const v=y.component;Bl(v.m),Bl(v.a),c(y,h,null,1,a),Vt(()=>{v.da&&ko(v.da);const x=y.props&&y.props.onVnodeUnmounted;x&&hn(x,v.parent,y),v.isDeactivated=!0},a)};function d(y){kc(y),u(y,t,a,!0)}function g(y){r.forEach((v,x)=>{const b=Qu(v.type);b&&!y(b)&&_(x)})}function _(y){const v=r.get(y);v&&(!o||!Zn(v,o))?d(v):o&&kc(o),r.delete(y),s.delete(y)}$s(()=>[n.include,n.exclude],([y,v])=>{y&&g(x=>Uo(y,x)),v&&g(x=>!Uo(v,x))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(kl(t.subTree.type)?Vt(()=>{r.set(m,za(t.subTree))},t.subTree.suspense):r.set(m,za(t.subTree)))};return _i(p),$_(p),hc(()=>{r.forEach(y=>{const{subTree:v,suspense:x}=t,b=za(v);if(y.type===b.type&&y.key===b.key){kc(b);const A=b.component.da;A&&Vt(A,x);return}d(y)})}),()=>{if(m=null,!e.default)return o=null;const y=e.default(),v=y[0];if(y.length>1)return o=null,y;if(!ls(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let x=za(v);if(x.type===Dt)return o=null,x;const b=x.type,A=Qu(dr(x)?x.type.__asyncResolved||{}:b),{include:w,exclude:L,max:E}=n;if(w&&(!A||!Uo(w,A))||L&&A&&Uo(L,A))return x.shapeFlag&=-257,o=x,v;const T=x.key==null?b:x.key,D=r.get(T);return x.el&&(x=ii(x),v.shapeFlag&128&&(v.ssContent=x)),m=T,D?(x.el=D.el,x.component=D.component,x.transition&&no(x,x.transition),x.shapeFlag|=512,s.delete(T),s.add(T)):(s.add(T),E&&s.size>parseInt(E,10)&&_(s.values().next().value)),x.shapeFlag|=256,o=x,kl(v.type)?v:x}}},my=py;function Uo(n,e){return Ne(n)?n.some(t=>Uo(t,e)):vt(n)?n.split(",").includes(e):hx(n)?(n.lastIndex=0,n.test(e)):!1}function _y(n,e){q_(n,"a",e)}function gy(n,e){q_(n,"da",e)}function q_(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(fc(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ta(r.parent.vnode)&&vy(i,e,t,r),r=r.parent}}function vy(n,e,t,i){const r=fc(e,n,i,!0);Y_(()=>{Ah(i[e],r)},t)}function kc(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function za(n){return n.shapeFlag&128?n.ssContent:n}function fc(n,e,t=It,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{br();const a=cs(t),l=ni(e,t,n,o);return a(),Ar(),l});return i?r.unshift(s):r.push(s),s}}const Xi=n=>(e,t=It)=>{(!ro||n==="sp")&&fc(n,(...i)=>e(...i),t)},xy=Xi("bm"),_i=Xi("m"),yy=Xi("bu"),$_=Xi("u"),hc=Xi("bum"),Y_=Xi("um"),Sy=Xi("sp"),My=Xi("rtg"),Ey=Xi("rtc");function j_(n,e=It){fc("ec",n,e)}const K_="components";function Od(n,e){return J_(K_,n,!0,e)||n}const Z_=Symbol.for("v-ndc");function Ty(n){return vt(n)?J_(K_,n,!1)||n:n||Z_}function J_(n,e,t=!0,i=!1){const r=Gt||It;if(r){const s=r.type;{const a=Qu(s,!1);if(a&&(a===e||a===Wn(e)||a===ac(Wn(e))))return s}const o=Fd(r[n]||s[n],e)||Fd(r.appContext[n],e);return!o&&i?s:o}}function Fd(n,e){return n&&(n[e]||n[Wn(e)]||n[ac(Wn(e))])}function HI(n,e,t,i){let r;const s=t,o=Ne(n);if(o||vt(n)){const a=o&&es(n);let l=!1;a&&(l=!Gn(n),n=uc(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?Zt(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(dt(n))if(n[Symbol.iterator])r=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}function zI(n,e,t={},i,r){if(Gt.ce||Gt.parent&&dr(Gt.parent)&&Gt.parent.ce)return cn(),Ii(Jt,null,[ot("slot",t,i)],64);let s=n[e];s&&s._c&&(s._d=!1),cn();const o=s&&Q_(s(t)),a=t.key||o&&o.key,l=Ii(Jt,{key:(a&&!Wi(a)?a:`_${e}`)+""},o||[],o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Q_(n){return n.some(e=>ls(e)?!(e.type===Dt||e.type===Jt&&!Q_(e.children)):!0)?n:null}const Wu=n=>n?Ag(n)?zh(n):Wu(n.parent):null,Vo=kt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Wu(n.parent),$root:n=>Wu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>tg(n),$forceUpdate:n=>n.f||(n.f=()=>{Oh(n.update)}),$nextTick:n=>n.n||(n.n=Ea.bind(n.proxy)),$watch:n=>Wy.bind(n)}),Hc=(n,e)=>n!==ht&&!n.__isScriptSetup&&nt(n,e),by={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Hc(i,e))return o[e]=1,i[e];if(r!==ht&&nt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(t!==ht&&nt(t,e))return o[e]=4,t[e];Xu&&(o[e]=0)}}const u=Vo[e];let f,h;if(u)return e==="$attrs"&&Kt(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==ht&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Hc(r,e)?(r[e]=t,!0):i!==ht&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==ht&&nt(n,o)||Hc(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(Vo,o)||nt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Bd(n){return Ne(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function VI(n){const e=ba();let t=n();return Zu(),sc(t)&&(t=t.catch(i=>{throw cs(e),i})),[t,()=>cs(e)]}let Xu=!0;function Ay(n){const e=tg(n),t=n.proxy,i=n.ctx;Xu=!1,e.beforeCreate&&kd(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:y,destroyed:v,unmounted:x,render:b,renderTracked:A,renderTriggered:w,errorCaptured:L,serverPrefetch:E,expose:T,inheritAttrs:D,components:I,directives:U,filters:G}=e;if(c&&wy(c,i,null),o)for(const j in o){const F=o[j];ke(F)&&(i[j]=F.bind(t))}if(r){const j=r.call(t,t);dt(j)&&(n.data=wr(j))}if(Xu=!0,s)for(const j in s){const F=s[j],fe=ke(F)?F.bind(t,t):ke(F.get)?F.get.bind(t,t):hi,_e=!ke(F)&&ke(F.set)?F.set.bind(t):hi,Me=Lt({get:fe,set:_e});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ce=>Me.value=Ce})}if(a)for(const j in a)eg(a[j],i,t,j);if(l){const j=ke(l)?l.call(t):l;Reflect.ownKeys(j).forEach(F=>{pr(F,j[F])})}u&&kd(u,n,"c");function O(j,F){Ne(F)?F.forEach(fe=>j(fe.bind(t))):F&&j(F.bind(t))}if(O(xy,f),O(_i,h),O(yy,d),O($_,g),O(_y,_),O(gy,m),O(j_,L),O(Ey,A),O(My,w),O(hc,y),O(Y_,x),O(Sy,E),Ne(T))if(T.length){const j=n.exposed||(n.exposed={});T.forEach(F=>{Object.defineProperty(j,F,{get:()=>t[F],set:fe=>t[F]=fe})})}else n.exposed||(n.exposed={});b&&n.render===hi&&(n.render=b),D!=null&&(n.inheritAttrs=D),I&&(n.components=I),U&&(n.directives=U),E&&Fh(n)}function wy(n,e,t=hi){Ne(n)&&(n=qu(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=pn(r.from||i,r.default,!0):s=pn(r.from||i):s=pn(r),Bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function kd(n,e,t){ni(Ne(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function eg(n,e,t,i){let r=i.includes(".")?gg(t,i):()=>t[i];if(vt(n)){const s=e[n];ke(s)&&$s(r,s)}else if(ke(n))$s(r,n.bind(t));else if(dt(n))if(Ne(n))n.forEach(s=>eg(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&$s(r,s,n)}}function tg(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Fl(l,c,o,!0)),Fl(l,e,o)),dt(e)&&s.set(e,l),l}function Fl(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Fl(n,s,t,!0),r&&r.forEach(o=>Fl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ry[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Ry={data:Hd,props:zd,emits:zd,methods:No,computed:No,beforeCreate:rn,created:rn,beforeMount:rn,mounted:rn,beforeUpdate:rn,updated:rn,beforeDestroy:rn,beforeUnmount:rn,destroyed:rn,unmounted:rn,activated:rn,deactivated:rn,errorCaptured:rn,serverPrefetch:rn,components:No,directives:No,watch:Py,provide:Hd,inject:Cy};function Hd(n,e){return e?n?function(){return kt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Cy(n,e){return No(qu(n),qu(e))}function qu(n){if(Ne(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function rn(n,e){return n?[...new Set([].concat(n,e))]:e}function No(n,e){return n?kt(Object.create(null),n,e):e}function zd(n,e){return n?Ne(n)&&Ne(e)?[...new Set([...n,...e])]:kt(Object.create(null),Bd(n),Bd(e??{})):e}function Py(n,e){if(!n)return e;if(!e)return n;const t=kt(Object.create(null),n);for(const i in e)t[i]=rn(n[i],e[i]);return t}function ng(){return{app:null,config:{isNativeTag:ux,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ly=0;function Dy(n,e){return function(i,r=null){ke(i)||(i=kt({},i)),r!=null&&!dt(r)&&(r=null);const s=ng(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Ly++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Rg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...f)):ke(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ot(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,zh(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ni(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=ts;ts=c;try{return u()}finally{ts=f}}};return c}}let ts=null;function pr(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function pn(n,e,t=!1){const i=It||Gt;if(i||ts){const r=ts?ts._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}function ig(){return!!(It||Gt||ts)}const rg={},sg=()=>Object.create(rg),og=n=>Object.getPrototypeOf(n)===rg;function Iy(n,e,t,i=!1){const r={},s=sg();n.propsDefaults=Object.create(null),ag(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Ni(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Uy(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ke(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(dc(n.emitsOptions,h))continue;const d=e[h];if(l)if(nt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Wn(h);r[g]=$u(l,a,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{ag(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!nt(e,f)&&((u=ds(f))===f||!nt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=$u(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],c=!0)}c&&Di(n.attrs,"set","")}function ag(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;r&&nt(r,u=Wn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:dc(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ke(t),c=a||ht;for(let u=0;u<s.length;u++){const f=s[u];t[f]=$u(r,l,f,c[f],n,!nt(c,f))}}return o}function $u(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=cs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===ds(t))&&(i=!0))}return i}const Ny=new WeakMap;function lg(n,e,t=!1){const i=t?Ny:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[h,d]=lg(f,e,!0);kt(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return dt(n)&&i.set(n,Gs),Gs;if(Ne(s))for(let u=0;u<s.length;u++){const f=Wn(s[u]);Vd(f)&&(o[f]=ht)}else if(s)for(const u in s){const f=Wn(u);if(Vd(f)){const h=s[u],d=o[f]=Ne(h)||ke(h)?{type:h}:kt({},h),g=d.type;let _=!1,m=!0;if(Ne(g))for(let p=0;p<g.length;++p){const y=g[p],v=ke(y)&&y.name;if(v==="Boolean"){_=!0;break}else v==="String"&&(m=!1)}else _=ke(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||nt(d,"default"))&&a.push(f)}}const c=[o,a];return dt(n)&&i.set(n,c),c}function Vd(n){return n[0]!=="$"&&!Xs(n)}const cg=n=>n[0]==="_"||n==="$stable",Bh=n=>Ne(n)?n.map(Rn):[Rn(n)],Oy=(n,e,t)=>{if(e._n)return e;const i=Fs((...r)=>Bh(e(...r)),t);return i._c=!1,i},ug=(n,e,t)=>{const i=n._ctx;for(const r in n){if(cg(r))continue;const s=n[r];if(ke(s))e[r]=Oy(r,s,i);else if(s!=null){const o=Bh(s);e[r]=()=>o}}},fg=(n,e)=>{const t=Bh(e);n.slots.default=()=>t},hg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Fy=(n,e,t)=>{const i=n.slots=sg();if(n.vnode.shapeFlag&32){const r=e._;r?(hg(i,e,t),t&&d_(i,"_",r,!0)):ug(e,i)}else e&&fg(n,e)},By=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:hg(r,e,t):(s=!e.$stable,ug(e,r)),o=e}else e&&(fg(n,e),o={default:1});if(s)for(const a in r)!cg(a)&&o[a]==null&&delete r[a]},Vt=Sg;function ky(n){return dg(n)}function Hy(n){return dg(n,fy)}function dg(n,e){const t=lc();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=hi,insertStaticContent:g}=n,_=(P,M,W,ee=null,$=null,Y=null,ce=void 0,te=null,R=!!M.dynamicChildren)=>{if(P===M)return;P&&!Zn(P,M)&&(ee=B(P),Ce(P,$,Y,!0),P=null),M.patchFlag===-2&&(R=!1,M.dynamicChildren=null);const{type:S,ref:N,shapeFlag:z}=M;switch(S){case ns:m(P,M,W,ee);break;case Dt:p(P,M,W,ee);break;case Go:P==null&&y(M,W,ee,ce);break;case Jt:I(P,M,W,ee,$,Y,ce,te,R);break;default:z&1?b(P,M,W,ee,$,Y,ce,te,R):z&6?U(P,M,W,ee,$,Y,ce,te,R):(z&64||z&128)&&S.process(P,M,W,ee,$,Y,ce,te,R,oe)}N!=null&&$&&oa(N,P&&P.ref,Y,M||P,!M)},m=(P,M,W,ee)=>{if(P==null)i(M.el=a(M.children),W,ee);else{const $=M.el=P.el;M.children!==P.children&&c($,M.children)}},p=(P,M,W,ee)=>{P==null?i(M.el=l(M.children||""),W,ee):M.el=P.el},y=(P,M,W,ee)=>{[P.el,P.anchor]=g(P.children,M,W,ee,P.el,P.anchor)},v=({el:P,anchor:M},W,ee)=>{let $;for(;P&&P!==M;)$=h(P),i(P,W,ee),P=$;i(M,W,ee)},x=({el:P,anchor:M})=>{let W;for(;P&&P!==M;)W=h(P),r(P),P=W;r(M)},b=(P,M,W,ee,$,Y,ce,te,R)=>{M.type==="svg"?ce="svg":M.type==="math"&&(ce="mathml"),P==null?A(M,W,ee,$,Y,ce,te,R):E(P,M,$,Y,ce,te,R)},A=(P,M,W,ee,$,Y,ce,te)=>{let R,S;const{props:N,shapeFlag:z,transition:q,dirs:X}=P;if(R=P.el=o(P.type,Y,N&&N.is,N),z&8?u(R,P.children):z&16&&L(P.children,R,null,ee,$,zc(P,Y),ce,te),X&&oi(P,null,ee,"created"),w(R,P,P.scopeId,ce,ee),N){for(const ue in N)ue!=="value"&&!Xs(ue)&&s(R,ue,null,N[ue],Y,ee);"value"in N&&s(R,"value",null,N.value,Y),(S=N.onVnodeBeforeMount)&&hn(S,ee,P)}X&&oi(P,null,ee,"beforeMount");const pe=pg($,q);pe&&q.beforeEnter(R),i(R,M,W),((S=N&&N.onVnodeMounted)||pe||X)&&Vt(()=>{S&&hn(S,ee,P),pe&&q.enter(R),X&&oi(P,null,ee,"mounted")},$)},w=(P,M,W,ee,$)=>{if(W&&d(P,W),ee)for(let Y=0;Y<ee.length;Y++)d(P,ee[Y]);if($){let Y=$.subTree;if(M===Y||kl(Y.type)&&(Y.ssContent===M||Y.ssFallback===M)){const ce=$.vnode;w(P,ce,ce.scopeId,ce.slotScopeIds,$.parent)}}},L=(P,M,W,ee,$,Y,ce,te,R=0)=>{for(let S=R;S<P.length;S++){const N=P[S]=te?rr(P[S]):Rn(P[S]);_(null,N,M,W,ee,$,Y,ce,te)}},E=(P,M,W,ee,$,Y,ce)=>{const te=M.el=P.el;let{patchFlag:R,dynamicChildren:S,dirs:N}=M;R|=P.patchFlag&16;const z=P.props||ht,q=M.props||ht;let X;if(W&&Lr(W,!1),(X=q.onVnodeBeforeUpdate)&&hn(X,W,M,P),N&&oi(M,P,W,"beforeUpdate"),W&&Lr(W,!0),(z.innerHTML&&q.innerHTML==null||z.textContent&&q.textContent==null)&&u(te,""),S?T(P.dynamicChildren,S,te,W,ee,zc(M,$),Y):ce||F(P,M,te,null,W,ee,zc(M,$),Y,!1),R>0){if(R&16)D(te,z,q,W,$);else if(R&2&&z.class!==q.class&&s(te,"class",null,q.class,$),R&4&&s(te,"style",z.style,q.style,$),R&8){const pe=M.dynamicProps;for(let ue=0;ue<pe.length;ue++){const he=pe[ue],Be=z[he],le=q[he];(le!==Be||he==="value")&&s(te,he,Be,le,$,W)}}R&1&&P.children!==M.children&&u(te,M.children)}else!ce&&S==null&&D(te,z,q,W,$);((X=q.onVnodeUpdated)||N)&&Vt(()=>{X&&hn(X,W,M,P),N&&oi(M,P,W,"updated")},ee)},T=(P,M,W,ee,$,Y,ce)=>{for(let te=0;te<M.length;te++){const R=P[te],S=M[te],N=R.el&&(R.type===Jt||!Zn(R,S)||R.shapeFlag&70)?f(R.el):W;_(R,S,N,null,ee,$,Y,ce,!0)}},D=(P,M,W,ee,$)=>{if(M!==W){if(M!==ht)for(const Y in M)!Xs(Y)&&!(Y in W)&&s(P,Y,M[Y],null,$,ee);for(const Y in W){if(Xs(Y))continue;const ce=W[Y],te=M[Y];ce!==te&&Y!=="value"&&s(P,Y,te,ce,$,ee)}"value"in W&&s(P,"value",M.value,W.value,$)}},I=(P,M,W,ee,$,Y,ce,te,R)=>{const S=M.el=P?P.el:a(""),N=M.anchor=P?P.anchor:a("");let{patchFlag:z,dynamicChildren:q,slotScopeIds:X}=M;X&&(te=te?te.concat(X):X),P==null?(i(S,W,ee),i(N,W,ee),L(M.children||[],W,N,$,Y,ce,te,R)):z>0&&z&64&&q&&P.dynamicChildren?(T(P.dynamicChildren,q,W,$,Y,ce,te),(M.key!=null||$&&M===$.subTree)&&mg(P,M,!0)):F(P,M,W,N,$,Y,ce,te,R)},U=(P,M,W,ee,$,Y,ce,te,R)=>{M.slotScopeIds=te,P==null?M.shapeFlag&512?$.ctx.activate(M,W,ee,ce,R):G(M,W,ee,$,Y,ce,R):Z(P,M,R)},G=(P,M,W,ee,$,Y,ce)=>{const te=P.component=aS(P,ee,$);if(Ta(P)&&(te.ctx.renderer=oe),lS(te,!1,ce),te.asyncDep){if($&&$.registerDep(te,O,ce),!P.el){const R=te.subTree=ot(Dt);p(null,R,M,W)}}else O(te,P,M,W,$,Y,ce)},Z=(P,M,W)=>{const ee=M.component=P.component;if(Ky(P,M,W))if(ee.asyncDep&&!ee.asyncResolved){j(ee,M,W);return}else ee.next=M,ee.update();else M.el=P.el,ee.vnode=M},O=(P,M,W,ee,$,Y,ce)=>{const te=()=>{if(P.isMounted){let{next:z,bu:q,u:X,parent:pe,vnode:ue}=P;{const Re=_g(P);if(Re){z&&(z.el=ue.el,j(P,z,ce)),Re.asyncDep.then(()=>{P.isUnmounted||te()});return}}let he=z,Be;Lr(P,!1),z?(z.el=ue.el,j(P,z,ce)):z=ue,q&&ko(q),(Be=z.props&&z.props.onVnodeBeforeUpdate)&&hn(Be,pe,z,ue),Lr(P,!0);const le=Vc(P),ge=P.subTree;P.subTree=le,_(ge,le,f(ge.el),B(ge),P,$,Y),z.el=le.el,he===null&&pc(P,le.el),X&&Vt(X,$),(Be=z.props&&z.props.onVnodeUpdated)&&Vt(()=>hn(Be,pe,z,ue),$)}else{let z;const{el:q,props:X}=M,{bm:pe,m:ue,parent:he,root:Be,type:le}=P,ge=dr(M);if(Lr(P,!1),pe&&ko(pe),!ge&&(z=X&&X.onVnodeBeforeMount)&&hn(z,he,M),Lr(P,!0),q&&Oe){const Re=()=>{P.subTree=Vc(P),Oe(q,P.subTree,P,$,null)};ge&&le.__asyncHydrate?le.__asyncHydrate(q,P,Re):Re()}else{Be.ce&&Be.ce._injectChildStyle(le);const Re=P.subTree=Vc(P);_(null,Re,W,ee,P,$,Y),M.el=Re.el}if(ue&&Vt(ue,$),!ge&&(z=X&&X.onVnodeMounted)){const Re=M;Vt(()=>hn(z,he,Re),$)}(M.shapeFlag&256||he&&dr(he.vnode)&&he.vnode.shapeFlag&256)&&P.a&&Vt(P.a,$),P.isMounted=!0,M=W=ee=null}};P.scope.on();const R=P.effect=new x_(te);P.scope.off();const S=P.update=R.run.bind(R),N=P.job=R.runIfDirty.bind(R);N.i=P,N.id=P.uid,R.scheduler=()=>Oh(N),Lr(P,!0),S()},j=(P,M,W)=>{M.component=P;const ee=P.vnode.props;P.vnode=M,P.next=null,Uy(P,M.props,ee,W),By(P,M.children,W),br(),Dd(P),Ar()},F=(P,M,W,ee,$,Y,ce,te,R=!1)=>{const S=P&&P.children,N=P?P.shapeFlag:0,z=M.children,{patchFlag:q,shapeFlag:X}=M;if(q>0){if(q&128){_e(S,z,W,ee,$,Y,ce,te,R);return}else if(q&256){fe(S,z,W,ee,$,Y,ce,te,R);return}}X&8?(N&16&&xe(S,$,Y),z!==S&&u(W,z)):N&16?X&16?_e(S,z,W,ee,$,Y,ce,te,R):xe(S,$,Y,!0):(N&8&&u(W,""),X&16&&L(z,W,ee,$,Y,ce,te,R))},fe=(P,M,W,ee,$,Y,ce,te,R)=>{P=P||Gs,M=M||Gs;const S=P.length,N=M.length,z=Math.min(S,N);let q;for(q=0;q<z;q++){const X=M[q]=R?rr(M[q]):Rn(M[q]);_(P[q],X,W,null,$,Y,ce,te,R)}S>N?xe(P,$,Y,!0,!1,z):L(M,W,ee,$,Y,ce,te,R,z)},_e=(P,M,W,ee,$,Y,ce,te,R)=>{let S=0;const N=M.length;let z=P.length-1,q=N-1;for(;S<=z&&S<=q;){const X=P[S],pe=M[S]=R?rr(M[S]):Rn(M[S]);if(Zn(X,pe))_(X,pe,W,null,$,Y,ce,te,R);else break;S++}for(;S<=z&&S<=q;){const X=P[z],pe=M[q]=R?rr(M[q]):Rn(M[q]);if(Zn(X,pe))_(X,pe,W,null,$,Y,ce,te,R);else break;z--,q--}if(S>z){if(S<=q){const X=q+1,pe=X<N?M[X].el:ee;for(;S<=q;)_(null,M[S]=R?rr(M[S]):Rn(M[S]),W,pe,$,Y,ce,te,R),S++}}else if(S>q)for(;S<=z;)Ce(P[S],$,Y,!0),S++;else{const X=S,pe=S,ue=new Map;for(S=pe;S<=q;S++){const Fe=M[S]=R?rr(M[S]):Rn(M[S]);Fe.key!=null&&ue.set(Fe.key,S)}let he,Be=0;const le=q-pe+1;let ge=!1,Re=0;const De=new Array(le);for(S=0;S<le;S++)De[S]=0;for(S=X;S<=z;S++){const Fe=P[S];if(Be>=le){Ce(Fe,$,Y,!0);continue}let Ie;if(Fe.key!=null)Ie=ue.get(Fe.key);else for(he=pe;he<=q;he++)if(De[he-pe]===0&&Zn(Fe,M[he])){Ie=he;break}Ie===void 0?Ce(Fe,$,Y,!0):(De[Ie-pe]=S+1,Ie>=Re?Re=Ie:ge=!0,_(Fe,M[Ie],W,null,$,Y,ce,te,R),Be++)}const be=ge?zy(De):Gs;for(he=be.length-1,S=le-1;S>=0;S--){const Fe=pe+S,Ie=M[Fe],it=Fe+1<N?M[Fe+1].el:ee;De[S]===0?_(null,Ie,W,it,$,Y,ce,te,R):ge&&(he<0||S!==be[he]?Me(Ie,W,it,2):he--)}}},Me=(P,M,W,ee,$=null)=>{const{el:Y,type:ce,transition:te,children:R,shapeFlag:S}=P;if(S&6){Me(P.component.subTree,M,W,ee);return}if(S&128){P.suspense.move(M,W,ee);return}if(S&64){ce.move(P,M,W,oe);return}if(ce===Jt){i(Y,M,W);for(let z=0;z<R.length;z++)Me(R[z],M,W,ee);i(P.anchor,M,W);return}if(ce===Go){v(P,M,W);return}if(ee!==2&&S&1&&te)if(ee===0)te.beforeEnter(Y),i(Y,M,W),Vt(()=>te.enter(Y),$);else{const{leave:z,delayLeave:q,afterLeave:X}=te,pe=()=>i(Y,M,W),ue=()=>{z(Y,()=>{pe(),X&&X()})};q?q(Y,pe,ue):ue()}else i(Y,M,W)},Ce=(P,M,W,ee=!1,$=!1)=>{const{type:Y,props:ce,ref:te,children:R,dynamicChildren:S,shapeFlag:N,patchFlag:z,dirs:q,cacheIndex:X}=P;if(z===-2&&($=!1),te!=null&&oa(te,null,W,P,!0),X!=null&&(M.renderCache[X]=void 0),N&256){M.ctx.deactivate(P);return}const pe=N&1&&q,ue=!dr(P);let he;if(ue&&(he=ce&&ce.onVnodeBeforeUnmount)&&hn(he,M,P),N&6)de(P.component,W,ee);else{if(N&128){P.suspense.unmount(W,ee);return}pe&&oi(P,null,M,"beforeUnmount"),N&64?P.type.remove(P,M,W,oe,ee):S&&!S.hasOnce&&(Y!==Jt||z>0&&z&64)?xe(S,M,W,!1,!0):(Y===Jt&&z&384||!$&&N&16)&&xe(R,M,W),ee&&Xe(P)}(ue&&(he=ce&&ce.onVnodeUnmounted)||pe)&&Vt(()=>{he&&hn(he,M,P),pe&&oi(P,null,M,"unmounted")},W)},Xe=P=>{const{type:M,el:W,anchor:ee,transition:$}=P;if(M===Jt){ne(W,ee);return}if(M===Go){x(P);return}const Y=()=>{r(W),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:ce,delayLeave:te}=$,R=()=>ce(W,Y);te?te(P.el,Y,R):R()}else Y()},ne=(P,M)=>{let W;for(;P!==M;)W=h(P),r(P),P=W;r(M)},de=(P,M,W)=>{const{bum:ee,scope:$,job:Y,subTree:ce,um:te,m:R,a:S}=P;Bl(R),Bl(S),ee&&ko(ee),$.stop(),Y&&(Y.flags|=8,Ce(ce,P,M,W)),te&&Vt(te,M),Vt(()=>{P.isUnmounted=!0},M),M&&M.pendingBranch&&!M.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===M.pendingId&&(M.deps--,M.deps===0&&M.resolve())},xe=(P,M,W,ee=!1,$=!1,Y=0)=>{for(let ce=Y;ce<P.length;ce++)Ce(P[ce],M,W,ee,$)},B=P=>{if(P.shapeFlag&6)return B(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const M=h(P.anchor||P.el),W=M&&M[sy];return W?h(W):M};let re=!1;const ae=(P,M,W)=>{P==null?M._vnode&&Ce(M._vnode,null,null,!0):_(M._vnode||null,P,M,null,null,null,W),M._vnode=P,re||(re=!0,Dd(),Nl(),re=!1)},oe={p:_,um:Ce,m:Me,r:Xe,mt:G,mc:L,pc:F,pbc:T,n:B,o:n};let Pe,Oe;return e&&([Pe,Oe]=e(oe)),{render:ae,hydrate:Pe,createApp:Dy(ae,Pe)}}function zc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Lr({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function mg(n,e,t=!1){const i=n.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=rr(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&mg(o,a)),a.type===ns&&(a.el=o.el)}}function zy(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function _g(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_g(e)}function Bl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Vy=Symbol.for("v-scx"),Gy=()=>pn(Vy);function GI(n,e){return kh(n,null,e)}function $s(n,e,t){return kh(n,e,t)}function kh(n,e,t=ht){const{immediate:i,deep:r,flush:s,once:o}=t,a=kt({},t),l=e&&i||!e&&s!=="post";let c;if(ro){if(s==="sync"){const d=Gy();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=hi,d.resume=hi,d.pause=hi,d}}const u=It;a.call=(d,g,_)=>ni(d,u,g,_);let f=!1;s==="post"?a.scheduler=d=>{Vt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(d,g)=>{g?d():Oh(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=ny(n,e,a);return ro&&(c?c.push(h):l&&h()),h}function Wy(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?gg(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const o=cs(this),a=kh(r,s.bind(i),t);return o(),a}function gg(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wn(e)}Modifiers`]||n[`${ds(e)}Modifiers`];function qy(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ht;let r=t;const s=e.startsWith("update:"),o=s&&Xy(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>vt(u)?u.trim():u)),o.number&&(r=t.map(_x)));let a,l=i[a=Dc(e)]||i[a=Dc(Wn(e))];!l&&s&&(l=i[a=Dc(ds(e))]),l&&ni(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ni(c,n,6,r)}}function vg(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=vg(c,e,!0);u&&(a=!0,kt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(dt(n)&&i.set(n,null),null):(Ne(s)?s.forEach(l=>o[l]=null):kt(o,s),dt(n)&&i.set(n,o),o)}function dc(n,e){return!n||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,ds(e))||nt(n,e))}function Vc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:_}=n,m=Ol(n);let p,y;try{if(t.shapeFlag&4){const x=r||i,b=x;p=Rn(c.call(b,x,u,f,d,h,g)),y=a}else{const x=e;p=Rn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),y=e.props?a:Yy(a)}}catch(x){Wo.length=0,So(x,n,1),p=ot(Dt)}let v=p;if(y&&_!==!1){const x=Object.keys(y),{shapeFlag:b}=v;x.length&&b&7&&(s&&x.some(bh)&&(y=jy(y,s)),v=ii(v,y,!1,!0))}return t.dirs&&(v=ii(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&no(v,t.transition),p=v,Ol(m),p}function $y(n,e=!0){let t;for(let i=0;i<n.length;i++){const r=n[i];if(ls(r)){if(r.type!==Dt||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Yy=n=>{let e;for(const t in n)(t==="class"||t==="style"||ya(t))&&((e||(e={}))[t]=n[t]);return e},jy=(n,e)=>{const t={};for(const i in n)(!bh(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ky(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Gd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!dc(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gd(i,o,c):!0:!!o;return!1}function Gd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!dc(t,s))return!0}return!1}function pc({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const kl=n=>n.__isSuspense;let Yu=0;const Zy={name:"Suspense",__isSuspense:!0,process(n,e,t,i,r,s,o,a,l,c){if(n==null)Jy(e,t,i,r,s,o,a,l,c);else{if(s&&s.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}Qy(n,e,t,i,r,o,a,l,c)}},hydrate:eS,normalize:tS},xg=Zy;function aa(n,e){const t=n.props&&n.props[e];ke(t)&&t()}function Jy(n,e,t,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=n.suspense=yg(n,r,i,e,f,t,s,o,a,l);c(null,h.pendingBranch=n.ssContent,f,null,i,h,s,o),h.deps>0?(aa(n,"onPending"),aa(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,s,o),Ys(h,n.ssFallback)):h.resolve(!1,!0)}function Qy(n,e,t,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:g,pendingBranch:_,isInFallback:m,isHydrating:p}=f;if(_)f.pendingBranch=h,Zn(h,_)?(l(_,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,d,t,i,r,null,s,o,a),Ys(f,d)))):(f.pendingId=Yu++,p?(f.isHydrating=!1,f.activeBranch=_):c(_,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,d,t,i,r,null,s,o,a),Ys(f,d))):g&&Zn(h,g)?(l(g,h,t,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&Zn(h,g))l(g,h,t,i,r,f,s,o,a),Ys(f,h);else if(aa(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Yu++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:y,pendingId:v}=f;y>0?setTimeout(()=>{f.pendingId===v&&f.fallback(d)},y):y===0&&f.fallback(d)}}function yg(n,e,t,i,r,s,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:g,o:{parentNode:_,remove:m}}=c;let p;const y=nS(n);y&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const v=n.props?p_(n.props.timeout):void 0,x=s,b={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Yu++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,w=!1){const{vnode:L,activeBranch:E,pendingBranch:T,pendingId:D,effects:I,parentComponent:U,container:G}=b;let Z=!1;b.isHydrating?b.isHydrating=!1:A||(Z=E&&T.transition&&T.transition.mode==="out-in",Z&&(E.transition.afterLeave=()=>{D===b.pendingId&&(h(T,G,s===x?g(E):s,0),Vu(I))}),E&&(_(E.el)===G&&(s=g(E)),d(E,U,b,!0)),Z||h(T,G,s,0)),Ys(b,T),b.pendingBranch=null,b.isInFallback=!1;let O=b.parent,j=!1;for(;O;){if(O.pendingBranch){O.effects.push(...I),j=!0;break}O=O.parent}!j&&!Z&&Vu(I),b.effects=[],y&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!w&&e.resolve()),aa(L,"onResolve")},fallback(A){if(!b.pendingBranch)return;const{vnode:w,activeBranch:L,parentComponent:E,container:T,namespace:D}=b;aa(w,"onFallback");const I=g(L),U=()=>{b.isInFallback&&(f(null,A,T,I,E,null,D,a,l),Ys(b,A))},G=A.transition&&A.transition.mode==="out-in";G&&(L.transition.afterLeave=U),b.isInFallback=!0,d(L,E,null,!0),G||U()},move(A,w,L){b.activeBranch&&h(b.activeBranch,A,w,L),b.container=A},next(){return b.activeBranch&&g(b.activeBranch)},registerDep(A,w,L){const E=!!b.pendingBranch;E&&b.deps++;const T=A.vnode.el;A.asyncDep.catch(D=>{So(D,A,0)}).then(D=>{if(A.isUnmounted||b.isUnmounted||b.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:I}=A;Ju(A,D),T&&(I.el=T);const U=!T&&A.subTree.el;w(A,I,_(T||A.subTree.el),T?null:g(A.subTree),b,o,L),U&&m(U),pc(A,I.el),E&&--b.deps===0&&b.resolve()})},unmount(A,w){b.isUnmounted=!0,b.activeBranch&&d(b.activeBranch,t,A,w),b.pendingBranch&&d(b.pendingBranch,t,A,w)}};return b}function eS(n,e,t,i,r,s,o,a,l){const c=e.suspense=yg(e,i,t,n.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function tS(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=Wd(i?t.default:t),n.ssFallback=i?Wd(t.fallback):ot(Dt)}function Wd(n){let e;if(ke(n)){const t=io&&n._c;t&&(n._d=!1,cn()),n=n(),t&&(n._d=!0,e=dn,Mg())}return Ne(n)&&(n=$y(n)),n=Rn(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function Sg(n,e){e&&e.pendingBranch?Ne(n)?e.effects.push(...n):e.effects.push(n):Vu(n)}function Ys(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;t.el=r,i&&i.subTree===t&&(i.vnode.el=r,pc(i,r))}function nS(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const Jt=Symbol.for("v-fgt"),ns=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Wo=[];let dn=null;function cn(n=!1){Wo.push(dn=n?null:[])}function Mg(){Wo.pop(),dn=Wo[Wo.length-1]||null}let io=1;function Xd(n,e=!1){io+=n,n<0&&dn&&e&&(dn.hasOnce=!0)}function Eg(n){return n.dynamicChildren=io>0?dn||Gs:null,Mg(),io>0&&dn&&dn.push(n),n}function Xo(n,e,t,i,r,s){return Eg(jt(n,e,t,i,r,s,!0))}function Ii(n,e,t,i,r){return Eg(ot(n,e,t,i,r,!0))}function ls(n){return n?n.__v_isVNode===!0:!1}function Zn(n,e){return n.type===e.type&&n.key===e.key}const Tg=({key:n})=>n??null,vl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Bt(n)||ke(n)?{i:Gt,r:n,k:e,f:!!t}:n:null);function jt(n,e=null,t=null,i=0,r=null,s=n===Jt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Tg(e),ref:e&&vl(e),scopeId:k_,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Gt};return a?(Hh(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),io>0&&!o&&dn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&dn.push(l),l}const ot=iS;function iS(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Z_)&&(n=Dt),ls(n)){const a=ii(n,e,!0);return t&&Hh(a,t),io>0&&!s&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(hS(n)&&(n=n.__vccOpts),e){e=bg(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=as(a)),dt(l)&&(Nh(l)&&!Ne(l)&&(l=kt({},l)),e.style=cc(l))}const o=vt(n)?1:kl(n)?128:H_(n)?64:dt(n)?4:ke(n)?2:0;return jt(n,e,t,i,r,o,s,!0)}function bg(n){return n?Nh(n)||og(n)?kt({},n):n:null}function ii(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?rS(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Tg(c),ref:e&&e.ref?t&&s?Ne(s)?s.concat(vl(e)):[s,vl(e)]:vl(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Jt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ii(n.ssContent),ssFallback:n.ssFallback&&ii(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&no(u,l.clone(u)),u}function qo(n=" ",e=0){return ot(ns,null,n,e)}function ju(n,e){const t=ot(Go,null,n);return t.staticCount=e,t}function WI(n="",e=!1){return e?(cn(),Ii(Dt,null,n)):ot(Dt,null,n)}function Rn(n){return n==null||typeof n=="boolean"?ot(Dt):Ne(n)?ot(Jt,null,n.slice()):ls(n)?rr(n):ot(ns,null,String(n))}function rr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ii(n)}function Hh(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hh(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!og(e)?e._ctx=Gt:r===3&&Gt&&(Gt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:Gt},t=32):(e=String(e),i&64?(t=16,e=[qo(e)]):t=8);n.children=e,n.shapeFlag|=t}function rS(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=as([e.class,i.class]));else if(r==="style")e.style=cc([e.style,i.style]);else if(ya(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){ni(n,e,7,[t,i])}const sS=ng();let oS=0;function aS(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||sS,s={uid:oS++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new v_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lg(i,r),emitsOptions:vg(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qy.bind(null,s),n.ce&&n.ce(s),s}let It=null;const ba=()=>It||Gt;let Hl,Ku;{const n=lc(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Hl=e("__VUE_INSTANCE_SETTERS__",t=>It=t),Ku=e("__VUE_SSR_SETTERS__",t=>ro=t)}const cs=n=>{const e=It;return Hl(n),n.scope.on(),()=>{n.scope.off(),Hl(e)}},Zu=()=>{It&&It.scope.off(),Hl(null)};function Ag(n){return n.vnode.shapeFlag&4}let ro=!1;function lS(n,e=!1,t=!1){e&&Ku(e);const{props:i,children:r}=n.vnode,s=Ag(n);Iy(n,i,s,e),Fy(n,r,t);const o=s?cS(n,e):void 0;return e&&Ku(!1),o}function cS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,by);const{setup:i}=t;if(i){br();const r=n.setupContext=i.length>1?fS(n):null,s=cs(n),o=Ma(i,n,0,[n.props,r]),a=sc(o);if(Ar(),s(),(a||n.sp)&&!dr(n)&&Fh(n),a){if(o.then(Zu,Zu),e)return o.then(l=>{Ju(n,l)}).catch(l=>{So(l,n,0)});n.asyncDep=o}else Ju(n,o)}else wg(n)}function Ju(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=N_(e)),wg(n)}function wg(n,e,t){const i=n.type;n.render||(n.render=i.render||hi);{const r=cs(n);br();try{Ay(n)}finally{Ar(),r()}}}const uS={get(n,e){return Kt(n,"get",""),n[e]}};function fS(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,uS),slots:n.slots,emit:n.emit,expose:e}}function zh(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(N_(qx(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Vo)return Vo[t](n)},has(e,t){return t in e||t in Vo}})):n.proxy}function Qu(n,e=!0){return ke(n)?n.displayName||n.name:n.name||e&&n.__name}function hS(n){return ke(n)&&"__vccOpts"in n}const Lt=(n,e)=>ey(n,e,ro);function Ft(n,e,t){const i=arguments.length;return i===2?dt(e)&&!Ne(e)?ls(e)?ot(n,null,[e]):ot(n,e):ot(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ls(t)&&(t=[t]),ot(n,e,t))}const Rg="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ef;const qd=typeof window<"u"&&window.trustedTypes;if(qd)try{ef=qd.createPolicy("vue",{createHTML:n=>n})}catch{}const Cg=ef?n=>ef.createHTML(n):n=>n,dS="http://www.w3.org/2000/svg",pS="http://www.w3.org/1998/Math/MathML",Ci=typeof document<"u"?document:null,$d=Ci&&Ci.createElement("template"),mS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ci.createElementNS(dS,n):e==="mathml"?Ci.createElementNS(pS,n):t?Ci.createElement(n,{is:t}):Ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ci.createTextNode(n),createComment:n=>Ci.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ci.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$d.innerHTML=Cg(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=$d.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ji="transition",wo="animation",la=Symbol("_vtc"),Pg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_S=kt({},z_,Pg),gS=n=>(n.displayName="Transition",n.props=_S,n),vS=gS((n,{slots:e})=>Ft(ly,xS(n),e)),Dr=(n,e=[])=>{Ne(n)?n.forEach(t=>t(...e)):n&&n(...e)},Yd=n=>n?Ne(n)?n.some(e=>e.length>1):n.length>1:!1;function xS(n){const e={};for(const I in n)I in Pg||(e[I]=n[I]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=yS(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:v,onLeave:x,onLeaveCancelled:b,onBeforeAppear:A=p,onAppear:w=y,onAppearCancelled:L=v}=e,E=(I,U,G,Z)=>{I._enterCancelled=Z,Ir(I,U?u:a),Ir(I,U?c:o),G&&G()},T=(I,U)=>{I._isLeaving=!1,Ir(I,f),Ir(I,d),Ir(I,h),U&&U()},D=I=>(U,G)=>{const Z=I?w:y,O=()=>E(U,I,G);Dr(Z,[U,O]),jd(()=>{Ir(U,I?l:s),Si(U,I?u:a),Yd(Z)||Kd(U,i,_,O)})};return kt(e,{onBeforeEnter(I){Dr(p,[I]),Si(I,s),Si(I,o)},onBeforeAppear(I){Dr(A,[I]),Si(I,l),Si(I,c)},onEnter:D(!1),onAppear:D(!0),onLeave(I,U){I._isLeaving=!0;const G=()=>T(I,U);Si(I,f),I._enterCancelled?(Si(I,h),Qd()):(Qd(),Si(I,h)),jd(()=>{I._isLeaving&&(Ir(I,f),Si(I,d),Yd(x)||Kd(I,i,m,G))}),Dr(x,[I,G])},onEnterCancelled(I){E(I,!1,void 0,!0),Dr(v,[I])},onAppearCancelled(I){E(I,!0,void 0,!0),Dr(L,[I])},onLeaveCancelled(I){T(I),Dr(b,[I])}})}function yS(n){if(n==null)return null;if(dt(n))return[Gc(n.enter),Gc(n.leave)];{const e=Gc(n);return[e,e]}}function Gc(n){return p_(n)}function Si(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[la]||(n[la]=new Set)).add(e)}function Ir(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[la];t&&(t.delete(e),t.size||(n[la]=void 0))}function jd(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let SS=0;function Kd(n,e,t,i){const r=n._endId=++SS,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=MS(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function MS(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ji}Delay`),s=i(`${ji}Duration`),o=Zd(r,s),a=i(`${wo}Delay`),l=i(`${wo}Duration`),c=Zd(a,l);let u=null,f=0,h=0;e===ji?o>0&&(u=ji,f=o,h=s.length):e===wo?c>0&&(u=wo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?ji:wo:null,h=u?u===ji?s.length:l.length:0);const d=u===ji&&/\b(transform|all)(,|$)/.test(i(`${ji}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Zd(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Jd(t)+Jd(n[i])))}function Jd(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Qd(){return document.body.offsetHeight}function ES(n,e,t){const i=n[la];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ep=Symbol("_vod"),TS=Symbol("_vsh"),bS=Symbol(""),AS=/(^|;)\s*display\s*:/;function wS(n,e,t){const i=n.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&xl(i,a,"")}else for(const o in e)t[o]==null&&xl(i,o,"");for(const o in t)o==="display"&&(s=!0),xl(i,o,t[o])}else if(r){if(e!==t){const o=i[bS];o&&(t+=";"+o),i.cssText=t,s=AS.test(t)}}else e&&n.removeAttribute("style");ep in n&&(n[ep]=s?i.display:"",n[TS]&&(i.display="none"))}const tp=/\s*!important$/;function xl(n,e,t){if(Ne(t))t.forEach(i=>xl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=RS(n,e);tp.test(t)?n.setProperty(ds(i),t.replace(tp,""),"important"):n[i]=t}}const np=["Webkit","Moz","ms"],Wc={};function RS(n,e){const t=Wc[e];if(t)return t;let i=Wn(e);if(i!=="filter"&&i in n)return Wc[e]=i;i=ac(i);for(let r=0;r<np.length;r++){const s=np[r]+i;if(s in n)return Wc[e]=s}return e}const ip="http://www.w3.org/1999/xlink";function rp(n,e,t,i,r,s=Ex(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ip,e.slice(6,e.length)):n.setAttributeNS(ip,e,t):t==null||s&&!m_(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Wi(t)?String(t):t)}function sp(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Cg(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=m_(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function CS(n,e,t,i){n.addEventListener(e,t,i)}function PS(n,e,t,i){n.removeEventListener(e,t,i)}const op=Symbol("_vei");function LS(n,e,t,i,r=null){const s=n[op]||(n[op]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=DS(e);if(i){const c=s[e]=NS(i,r);CS(n,a,c,l)}else o&&(PS(n,a,o,l),s[e]=void 0)}}const ap=/(?:Once|Passive|Capture)$/;function DS(n){let e;if(ap.test(n)){e={};let i;for(;i=n.match(ap);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ds(n.slice(2)),e]}let Xc=0;const IS=Promise.resolve(),US=()=>Xc||(IS.then(()=>Xc=0),Xc=Date.now());function NS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ni(OS(i,t.value),e,5,[i])};return t.value=n,t.attached=US(),t}function OS(n,e){if(Ne(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const lp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,FS=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?ES(n,i,o):e==="style"?wS(n,t,i):ya(e)?bh(e)||LS(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BS(n,e,i,o))?(sp(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&rp(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!vt(i))?sp(n,Wn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),rp(n,e,i,o))};function BS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&lp(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return lp(e)&&vt(t)?!1:e in n}const kS=["ctrl","shift","alt","meta"],HS={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>kS.some(t=>n[`${t}Key`]&&!e.includes(t))},XI=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=HS[e[o]];if(a&&a(r,e))return}return n(r,...s)})},Lg=kt({patchProp:FS},mS);let $o,cp=!1;function zS(){return $o||($o=ky(Lg))}function VS(){return $o=cp?$o:Hy(Lg),cp=!0,$o}const GS=(...n)=>{const e=zS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ig(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Dg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},WS=(...n)=>{const e=VS().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ig(i);if(r)return t(r,!0,Dg(r))},e};function Dg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ig(n){return vt(n)?document.querySelector(n):n}const XS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,qS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,$S=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function YS(n,e){if(n==="__proto__"||n==="constructor"&&e&&typeof e=="object"&&"prototype"in e){jS(n);return}return e}function jS(n){console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`)}function zl(n,e={}){if(typeof n!="string")return n;const t=n.trim();if(n[0]==='"'&&n.endsWith('"')&&!n.includes("\\"))return t.slice(1,-1);if(t.length<=9){const i=t.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!$S.test(n)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return n}try{if(XS.test(n)||qS.test(n)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(n,YS)}return JSON.parse(n)}catch(i){if(e.strict)throw i;return n}}const KS=/#/g,ZS=/&/g,JS=/\//g,QS=/=/g,Vh=/\+/g,eM=/%5e/gi,tM=/%60/gi,nM=/%7c/gi,iM=/%20/gi;function rM(n){return encodeURI(""+n).replace(nM,"|")}function tf(n){return rM(typeof n=="string"?n:JSON.stringify(n)).replace(Vh,"%2B").replace(iM,"+").replace(KS,"%23").replace(ZS,"%26").replace(tM,"`").replace(eM,"^").replace(JS,"%2F")}function qc(n){return tf(n).replace(QS,"%3D")}function Vl(n=""){try{return decodeURIComponent(""+n)}catch{return""+n}}function sM(n){return Vl(n.replace(Vh," "))}function oM(n){return Vl(n.replace(Vh," "))}function Ug(n=""){const e={};n[0]==="?"&&(n=n.slice(1));for(const t of n.split("&")){const i=t.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=sM(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=oM(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function aM(n,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(t=>`${qc(n)}=${tf(t)}`).join("&"):`${qc(n)}=${tf(e)}`:qc(n)}function lM(n){return Object.keys(n).filter(e=>n[e]!==void 0).map(e=>aM(e,n[e])).filter(Boolean).join("&")}const cM=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,uM=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,fM=/^([/\\]\s*){2,}[^/\\]/,hM=/^[\s\0]*(blob|data|javascript|vbscript):$/i,dM=/\/$|\/\?|\/#/,pM=/^\.?\//;function qi(n,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?cM.test(n):uM.test(n)||(e.acceptRelative?fM.test(n):!1)}function mM(n){return!!n&&hM.test(n)}function nf(n="",e){return e?dM.test(n):n.endsWith("/")}function mc(n="",e){if(!e)return(nf(n)?n.slice(0,-1):n)||"/";if(!nf(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");r>=0&&(t=n.slice(0,r),i=n.slice(r));const[s,...o]=t.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function Gl(n="",e){if(!e)return n.endsWith("/")?n:n+"/";if(nf(n,!0))return n||"/";let t=n,i="";const r=n.indexOf("#");if(r>=0&&(t=n.slice(0,r),i=n.slice(r),!t))return i;const[s,...o]=t.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function _M(n=""){return n.startsWith("/")}function up(n=""){return _M(n)?n:"/"+n}function gM(n,e){if(Og(e)||qi(n))return n;const t=mc(e);return n.startsWith(t)?n:_c(t,n)}function fp(n,e){if(Og(e))return n;const t=mc(e);if(!n.startsWith(t))return n;const i=n.slice(t.length);return i[0]==="/"?i:"/"+i}function Ng(n,e){const t=yM(n),i={...Ug(t.search),...e};return t.search=lM(i),SM(t)}function Og(n){return!n||n==="/"}function vM(n){return n&&n!=="/"}function _c(n,...e){let t=n||"";for(const i of e.filter(r=>vM(r)))if(t){const r=i.replace(pM,"");t=Gl(t)+r}else t=i;return t}function Fg(...n){var o,a,l,c;const e=/\/(?!\/)/,t=n.filter(Boolean),i=[];let r=0;for(const u of t)if(!(!u||u==="/")){for(const[f,h]of u.split(e).entries())if(!(!h||h===".")){if(h===".."){if(i.length===1&&qi(i[0]))continue;i.pop(),r--;continue}if(f===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+h;continue}i.push(h),r++}}let s=i.join("/");return r>=0?(a=t[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=t[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(c=t[t.length-1])!=null&&c.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function xM(n,e,t={}){return t.trailingSlash||(n=Gl(n),e=Gl(e)),t.leadingSlash||(n=up(n),e=up(e)),t.encoding||(n=Vl(n),e=Vl(e)),n===e}const Bg=Symbol.for("ufo:protocolRelative");function yM(n="",e){const t=n.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(t){const[,f,h=""]=t;return{protocol:f.toLowerCase(),pathname:h,href:f+h,auth:"",host:"",search:"",hash:""}}if(!qi(n,{acceptRelative:!0}))return hp(n);const[,i="",r,s=""]=n.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:c,hash:u}=hp(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[Bg]:!i}}function hp(n=""){const[e="",t="",i=""]=(n.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:t,hash:i}}function SM(n){const e=n.pathname||"",t=n.search?(n.search.startsWith("?")?"":"?")+n.search:"",i=n.hash||"",r=n.auth?n.auth+"@":"",s=n.host||"";return(n.protocol||n[Bg]?(n.protocol||"")+"//":"")+r+s+e+t+i}class MM extends Error{constructor(e,t){super(e,t),this.name="FetchError",t!=null&&t.cause&&!this.cause&&(this.cause=t.cause)}}function EM(n){var l,c,u,f,h;const e=((l=n.error)==null?void 0:l.message)||((c=n.error)==null?void 0:c.toString())||"",t=((u=n.request)==null?void 0:u.method)||((f=n.options)==null?void 0:f.method)||"GET",i=((h=n.request)==null?void 0:h.url)||String(n.request)||"/",r=`[${t}] ${JSON.stringify(i)}`,s=n.response?`${n.response.status} ${n.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new MM(o,n.error?{cause:n.error}:void 0);for(const d of["request","options","response"])Object.defineProperty(a,d,{get(){return n[d]}});for(const[d,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,d,{get(){return n.response&&n.response[g]}});return a}const TM=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function dp(n="GET"){return TM.has(n.toUpperCase())}function bM(n){if(n===void 0)return!1;const e=typeof n;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(n)?!0:n.buffer?!1:n.constructor&&n.constructor.name==="Object"||typeof n.toJSON=="function"}const AM=new Set(["image/svg","application/xml","application/xhtml","application/html"]),wM=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function RM(n=""){if(!n)return"json";const e=n.split(";").shift()||"";return wM.test(e)?"json":AM.has(e)||e.startsWith("text/")?"text":"blob"}function CM(n,e,t,i){const r=PM((e==null?void 0:e.headers)??(n==null?void 0:n.headers),t==null?void 0:t.headers,i);let s;return(t!=null&&t.query||t!=null&&t.params||e!=null&&e.params||e!=null&&e.query)&&(s={...t==null?void 0:t.params,...t==null?void 0:t.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...t,...e,query:s,params:s,headers:r}}function PM(n,e,t){if(!e)return new t(n);const i=new t(e);if(n)for(const[r,s]of Symbol.iterator in n||Array.isArray(n)?n:new t(n))i.set(r,s);return i}async function Va(n,e){if(e)if(Array.isArray(e))for(const t of e)await t(n);else await e(n)}const LM=new Set([408,409,425,429,500,502,503,504]),DM=new Set([101,204,205,304]);function kg(n={}){const{fetch:e=globalThis.fetch,Headers:t=globalThis.Headers,AbortController:i=globalThis.AbortController}=n;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=dp(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):LM.has(f))){const h=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return h>0&&await new Promise(d=>setTimeout(d,h)),s(a.request,{...a.options,retry:u-1})}}const c=EM(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){const u={request:l,options:CM(l,c,n.defaults,t),response:void 0,error:void 0};u.options.method&&(u.options.method=u.options.method.toUpperCase()),u.options.onRequest&&await Va(u,u.options.onRequest),typeof u.request=="string"&&(u.options.baseURL&&(u.request=gM(u.request,u.options.baseURL)),u.options.query&&(u.request=Ng(u.request,u.options.query),delete u.options.query),"query"in u.options&&delete u.options.query,"params"in u.options&&delete u.options.params),u.options.body&&dp(u.options.method)&&(bM(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new t(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half")));let f;if(!u.options.signal&&u.options.timeout){const d=new i;f=setTimeout(()=>{const g=new Error("[TimeoutError]: The operation was aborted due to timeout");g.name="TimeoutError",g.code=23,d.abort(g)},u.options.timeout),u.options.signal=d.signal}try{u.response=await e(u.request,u.options)}catch(d){return u.error=d,u.options.onRequestError&&await Va(u,u.options.onRequestError),await r(u)}finally{f&&clearTimeout(f)}if((u.response.body||u.response._bodyInit)&&!DM.has(u.response.status)&&u.options.method!=="HEAD"){const d=(u.options.parseResponse?"json":u.options.responseType)||RM(u.response.headers.get("content-type")||"");switch(d){case"json":{const g=await u.response.text(),_=u.options.parseResponse||zl;u.response._data=_(g);break}case"stream":{u.response._data=u.response.body||u.response._bodyInit;break}default:u.response._data=await u.response[d]()}}return u.options.onResponse&&await Va(u,u.options.onResponse),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await Va(u,u.options.onResponseError),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>kg({...n,...l,defaults:{...n.defaults,...l.defaults,...a}}),o}const Wl=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),IM=Wl.fetch?(...n)=>Wl.fetch(...n):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),UM=Wl.Headers,NM=Wl.AbortController,OM=kg({fetch:IM,Headers:UM,AbortController:NM}),FM=OM,BM=()=>{var n;return((n=window==null?void 0:window.__NUXT__)==null?void 0:n.config)||{}},Xl=BM().app,kM=()=>Xl.baseURL,HM=()=>Xl.buildAssetsDir,Gh=(...n)=>Fg(Hg(),HM(),...n),Hg=(...n)=>{const e=Xl.cdnURL||Xl.baseURL;return n.length?Fg(e,...n):e};globalThis.__buildAssetsURL=Gh,globalThis.__publicAssetsURL=Hg;globalThis.$fetch||(globalThis.$fetch=FM.create({baseURL:kM()}));function rf(n,e={},t){for(const i in n){const r=n[i],s=t?`${t}:${i}`:i;typeof r=="object"&&r!==null?rf(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const zM={run:n=>n()},VM=()=>zM,zg=typeof console.createTask<"u"?console.createTask:VM;function GM(n,e){const t=e.shift(),i=zg(t);return n.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function WM(n,e){const t=e.shift(),i=zg(t);return Promise.all(n.map(r=>i.run(()=>r(...e))))}function $c(n,e){for(const t of[...n])t(e)}class XM{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,t,i={}){if(!e||typeof t!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!t.name)try{Object.defineProperty(t,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(t),()=>{t&&(this.removeHook(e,t),t=void 0)}}hookOnce(e,t){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,t(...s));return i=this.hook(e,r),i}removeHook(e,t){if(this._hooks[e]){const i=this._hooks[e].indexOf(t);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,t){this._deprecatedHooks[e]=typeof t=="string"?{to:t}:t;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const t in e)this.deprecateHook(t,e[t])}addHooks(e){const t=rf(e),i=Object.keys(t).map(r=>this.hook(r,t[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const t=rf(e);for(const i in t)this.removeHook(i,t[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...t){return t.unshift(e),this.callHookWith(GM,e,...t)}callHookParallel(e,...t){return t.unshift(e),this.callHookWith(WM,e,...t)}callHookWith(e,t,...i){const r=this._before||this._after?{name:t,args:i,context:{}}:void 0;this._before&&$c(this._before,r);const s=e(t in this._hooks?[...this._hooks[t]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&$c(this._after,r)}):(this._after&&r&&$c(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const t=this._before.indexOf(e);t!==-1&&this._before.splice(t,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const t=this._after.indexOf(e);t!==-1&&this._after.splice(t,1)}}}}function Vg(){return new XM}function qM(n={}){let e,t=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(n.asyncContext){const o=n.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,t=!0},unset:()=>{e=void 0,t=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{t||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;sf.add(c);try{const u=r?r.run(o,a):a();return t||(e=void 0),await u}finally{sf.delete(c)}}}}function $M(n={}){const e={};return{get(t,i={}){return e[t]||(e[t]=qM({...n,...i})),e[t]}}}const ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},pp="__unctx__",YM=ql[pp]||(ql[pp]=$M()),jM=(n,e={})=>YM.get(n,e),mp="__unctx_async_handlers__",sf=ql[mp]||(ql[mp]=new Set);function js(n){const e=[];for(const r of sf){const s=r();s&&e.push(s)}const t=()=>{for(const r of e)r()};let i=n();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw t(),r})),[i,t]}const of={name:"page",mode:"out-in"},KM=!1,ZM={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},JM=null,QM="#__nuxt",Gg="nuxt-app",_p=36e5,eE="vite:preloadError";function Wg(n=Gg){return jM(n,{asyncContext:!1})}const tE="__nuxt_plugin";function nE(n){var r;let e=0;const t={_id:n.id||Gg||"nuxt-app",_scope:bx(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.4"},get vue(){return t.vueApp.version}},payload:Ni({...((r=n.ssrContext)==null?void 0:r.payload)||{},data:Ni({}),state:wr({}),once:new Set,_errors:Ni({})}),static:{data:{}},runWithContext(s){return t._scope.active&&!Rh()?t._scope.run(()=>gp(t,s)):gp(t,s)},isHydrating:!0,deferHydration(){if(!t.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return t.isHydrating=!1,t.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Ni({}),_payloadRevivers:{},...n};{const s=window.__NUXT__;if(s)for(const o in s)switch(o){case"data":case"state":case"_errors":Object.assign(t.payload[o],s[o]);break;default:t.payload[o]=s[o]}}t.hooks=Vg(),t.hook=t.hooks.hook,t.callHook=t.hooks.callHook,t.provide=(s,o)=>{const a="$"+s;Ga(t,a,o),Ga(t.vueApp.config.globalProperties,a,o)},Ga(t.vueApp,"$nuxt",t),Ga(t.vueApp.config.globalProperties,"$nuxt",t);{window.addEventListener(eE,o=>{t.callHook("app:chunkError",{error:o.payload}),(t.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||pt;const s=t.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});t.hook("app:mounted",s)}const i=t.payload.config;return t.provide("config",i),t}function iE(n,e){e.hooks&&n.hooks.addHooks(e.hooks)}async function rE(n,e){if(typeof e=="function"){const{provide:t}=await n.runWithContext(()=>e(n))||{};if(t&&typeof t=="object")for(const i in t)n.provide(i,t[i])}}async function sE(n,e){const t=[],i=[],r=[],s=[];let o=0;async function a(l){var u;const c=((u=l.dependsOn)==null?void 0:u.filter(f=>e.some(h=>h._name===f)&&!t.includes(f)))??[];if(c.length>0)i.push([new Set(c),l]);else{const f=rE(n,l).then(async()=>{l._name&&(t.push(l._name),await Promise.all(i.map(async([h,d])=>{h.has(l._name)&&(h.delete(l._name),h.size===0&&(o++,await a(d)))})))});l.parallel?r.push(f.catch(h=>s.push(h))):await f}}for(const l of e)iE(n,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function vi(n){if(typeof n=="function")return n;const e=n._name||n.name;return delete n.name,Object.assign(n.setup||(()=>{}),n,{[tE]:!0,_name:e})}function gp(n,e,t){const i=()=>e();return Wg(n._id).set(n),n.vueApp.runWithContext(i)}function oE(n){var t;let e;return ig()&&(e=(t=ba())==null?void 0:t.appContext.app.$nuxt),e=e||Wg(n).tryUse(),e||null}function pt(n){const e=oE(n);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Aa(n){return pt().$config}function Ga(n,e,t){Object.defineProperty(n,e,{get:()=>t})}function aE(n,e){return{ctx:{table:n},matchAll:t=>qg(t,n)}}function Xg(n){const e={};for(const t in n)e[t]=t==="dynamic"?new Map(Object.entries(n[t]).map(([i,r])=>[i,Xg(r)])):new Map(Object.entries(n[t]));return e}function lE(n){return aE(Xg(n))}function qg(n,e,t){n.endsWith("/")&&(n=n.slice(0,-1)||"/");const i=[];for(const[s,o]of vp(e.wildcard))(n===s||n.startsWith(s+"/"))&&i.push(o);for(const[s,o]of vp(e.dynamic))if(n.startsWith(s+"/")){const a="/"+n.slice(s.length).split("/").splice(2).join("/");i.push(...qg(a,o))}const r=e.static.get(n);return r&&i.push(r),i.filter(Boolean)}function vp(n){return[...n.entries()].sort((e,t)=>e[0].length-t[0].length)}function Yc(n){if(n===null||typeof n!="object")return!1;const e=Object.getPrototypeOf(n);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in n?!1:Symbol.toStringTag in n?Object.prototype.toString.call(n)==="[object Module]":!0}function af(n,e,t=".",i){if(!Yc(e))return af(n,{},t,i);const r=Object.assign({},e);for(const s in n){if(s==="__proto__"||s==="constructor")continue;const o=n[s];o!=null&&(i&&i(r,s,o,t)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:Yc(o)&&Yc(r[s])?r[s]=af(o,r[s],(t?`${t}.`:"")+s.toString(),i):r[s]=o))}return r}function cE(n){return(...e)=>e.reduce((t,i)=>af(t,i,"",n),{})}const $g=cE();function uE(n,e){try{return e in n}catch{return!1}}class lf extends Error{constructor(t,i={}){super(t,i);Yi(this,"statusCode",500);Yi(this,"fatal",!1);Yi(this,"unhandled",!1);Yi(this,"statusMessage");Yi(this,"data");Yi(this,"cause");i.cause&&!this.cause&&(this.cause=i.cause)}toJSON(){const t={message:this.message,statusCode:uf(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Yg(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Yi(lf,"__h3_error__",!0);function cf(n){if(typeof n=="string")return new lf(n);if(fE(n))return n;const e=new lf(n.message??n.statusMessage??"",{cause:n.cause||n});if(uE(n,"stack"))try{Object.defineProperty(e,"stack",{get(){return n.stack}})}catch{try{e.stack=n.stack}catch{}}if(n.data&&(e.data=n.data),n.statusCode?e.statusCode=uf(n.statusCode,e.statusCode):n.status&&(e.statusCode=uf(n.status,e.statusCode)),n.statusMessage?e.statusMessage=n.statusMessage:n.statusText&&(e.statusMessage=n.statusText),e.statusMessage){const t=e.statusMessage;Yg(e.statusMessage)!==t&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return n.fatal!==void 0&&(e.fatal=n.fatal),n.unhandled!==void 0&&(e.unhandled=n.unhandled),e}function fE(n){var e;return((e=n==null?void 0:n.constructor)==null?void 0:e.__h3_error__)===!0}const hE=/[^\u0009\u0020-\u007E]/g;function Yg(n=""){return n.replace(hE,"")}function uf(n,e=200){return!n||(typeof n=="string"&&(n=Number.parseInt(n,10)),n<100||n>999)?e:n}const dE=Symbol("layout-meta"),gc=Symbol("route"),Mn=()=>{var n;return(n=pt())==null?void 0:n.$router},jg=()=>ig()?pn(gc,pt()._route):pt()._route;const pE=()=>{try{if(pt()._processingMiddleware)return!0}catch{return!1}return!1},mE=(n,e)=>{n||(n="/");const t=typeof n=="string"?n:"path"in n?ff(n):Mn().resolve(n).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:c={}}=e.open,u=Object.entries(c).filter(([f,h])=>h!==void 0).map(([f,h])=>`${f.toLowerCase()}=${h}`).join(", ");return open(t,l,u),Promise.resolve()}const i=qi(t,{acceptRelative:!0}),r=(e==null?void 0:e.external)||i;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(t,window.location.href);if(l&&mM(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=pE();if(!r&&s)return e!=null&&e.replace?typeof n=="string"?{path:n,replace:!0}:{...n,replace:!0}:n;const o=Mn(),a=pt();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(t):location.href=t,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(n):o.push(n)};function ff(n){return Ng(n.path||"",n.query||{})+(n.hash||"")}const Kg="__nuxt_error",vc=()=>Zx(pt().payload,"error"),ks=n=>{const e=xc(n);try{const t=pt(),i=vc();t.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},_E=async(n={})=>{const e=pt(),t=vc();e.callHook("app:error:cleared",n),n.redirect&&await Mn().replace(n.redirect),t.value=JM},gE=n=>!!n&&typeof n=="object"&&Kg in n,xc=n=>{const e=cf(n);return Object.defineProperty(e,Kg,{value:!0,configurable:!1,writable:!1}),e};function xp(n){const e=xE(n),t=new ArrayBuffer(e.length),i=new DataView(t);for(let r=0;r<t.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return t}const vE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function xE(n){n.length%4===0&&(n=n.replace(/==?$/,""));let e="",t=0,i=0;for(let r=0;r<n.length;r++)t<<=6,t|=vE.indexOf(n[r]),i+=6,i===24&&(e+=String.fromCharCode((t&16711680)>>16),e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255),t=i=0);return i===12?(t>>=4,e+=String.fromCharCode(t)):i===18&&(t>>=2,e+=String.fromCharCode((t&65280)>>8),e+=String.fromCharCode(t&255)),e}const yE=-1,SE=-2,ME=-3,EE=-4,TE=-5,bE=-6;function AE(n,e){return wE(JSON.parse(n),e)}function wE(n,e){if(typeof n=="number")return r(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const t=n,i=Array(t.length);function r(s,o=!1){if(s===yE)return;if(s===ME)return NaN;if(s===EE)return 1/0;if(s===TE)return-1/0;if(s===bE)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=t[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let d=1;d<a.length;d+=1)u.add(r(a[d]));break;case"Map":const f=new Map;i[s]=f;for(let d=1;d<a.length;d+=2)f.set(r(a[d]),r(a[d+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const h=Object.create(null);i[s]=h;for(let d=1;d<a.length;d+=2)h[a[d]]=r(a[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[l],g=a[1],_=xp(g),m=new d(_);i[s]=m;break}case"ArrayBuffer":{const d=a[1],g=xp(d);i[s]=g;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==SE&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}const RE=new Set(["title","titleTemplate","script","style","noscript"]),yl=new Set(["base","meta","link","style","script","noscript"]),CE=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),PE=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Zg=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),LE=typeof window<"u";function $l(n){let e=9;for(let t=0;t<n.length;)e=Math.imul(e^n.charCodeAt(t++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function hf(n){if(n._h)return n._h;if(n._d)return $l(n._d);let e=`${n.tag}:${n.textContent||n.innerHTML||""}:`;for(const t in n.props)e+=`${t}:${String(n.props[t])},`;return $l(e)}function DE(n,e){return n instanceof Promise?n.then(e):e(n)}function df(n,e,t,i){const r=i||Qg(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[n==="script"||n==="noscript"||n==="style"?"innerHTML":"textContent"]:e},n==="templateParams"||n==="titleTemplate");if(r instanceof Promise)return r.then(o=>df(n,e,t,o));const s={tag:n,props:r};for(const o of Zg){const a=s.props[o]!==void 0?s.props[o]:t[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||RE.has(s.tag))&&(s[o==="children"?"innerHTML":o]=a),delete s.props[o])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s}function IE(n,e){var i;const t=n==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,s])=>n==="style"?`${r}:${s}`:r)),(i=String(Array.isArray(e)?e.join(t):e))==null?void 0:i.split(t).filter(r=>!!r.trim()).join(t)}function Jg(n,e,t,i){for(let r=i;r<t.length;r+=1){const s=t[r];if(s==="class"||s==="style"){n[s]=IE(s,n[s]);continue}if(n[s]instanceof Promise)return n[s].then(o=>(n[s]=o,Jg(n,e,t,r)));if(!e&&!Zg.has(s)){const o=String(n[s]),a=s.startsWith("data-");o==="true"||o===""?n[s]=a?"true":!0:n[s]||(a&&o==="false"?n[s]="false":delete n[s])}}}function Qg(n,e=!1){const t=Jg(n,e,Object.keys(n),0);return t instanceof Promise?t.then(()=>n):n}const UE=10;function ev(n,e,t){for(let i=t;i<e.length;i+=1){const r=e[i];if(r instanceof Promise)return r.then(s=>(e[i]=s,ev(n,e,i)));Array.isArray(r)?n.push(...r):n.push(r)}}function NE(n){const e=[],t=n.resolvedInput;for(const r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;const s=t[r];if(!(s===void 0||!CE.has(r))){if(Array.isArray(s)){for(const o of s)e.push(df(r,o,n));continue}e.push(df(r,s,n))}}if(e.length===0)return[];const i=[];return DE(ev(i,e,0),()=>i.map((r,s)=>(r._e=n._i,n.mode&&(r._m=n.mode),r._p=(n._i<<UE)+s,r)))}const yp=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Sp={base:-10,title:10},Mp={critical:-80,high:-10,low:20};function Yl(n){const e=n.tagPriority;if(typeof e=="number")return e;let t=100;return n.tag==="meta"?n.props["http-equiv"]==="content-security-policy"?t=-30:n.props.charset?t=-20:n.props.name==="viewport"&&(t=-15):n.tag==="link"&&n.props.rel==="preconnect"?t=20:n.tag in Sp&&(t=Sp[n.tag]),e&&e in Mp?t+Mp[e]:t}const OE=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],FE=["name","property","http-equiv"];function tv(n){const{props:e,tag:t}=n;if(PE.has(t))return t;if(t==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${t}:id:${e.id}`;for(const i of FE)if(e[i]!==void 0)return`${t}:${i}:${e[i]}`;return!1}const sr="%separator";function BE(n,e,t=!1){var r;let i;if(e==="s"||e==="pageTitle")i=n.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");i=(r=n[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else i=n[e];if(i!==void 0)return t?(i||"").replace(/"/g,'\\"'):i||""}const kE=new RegExp(`${sr}(?:\\s*${sr})*`,"g");function Wa(n,e,t,i=!1){if(typeof n!="string"||!n.includes("%"))return n;let r=n;try{r=decodeURI(n)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return n;const o=n.includes(sr);return n=n.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===sr||!s.includes(a))return a;const l=BE(e,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(n.endsWith(sr)&&(n=n.slice(0,-sr.length)),n.startsWith(sr)&&(n=n.slice(sr.length)),n=n.replace(kE,t).trim()),n}function Ep(n,e){return n==null?e||null:typeof n=="function"?n(e):n}async function nv(n,e={}){const t=e.document||n.resolvedOptions.document;if(!t||!n.dirty)return;const i={shouldRender:!0,tags:[]};if(await n.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return n._domUpdatePromise||(n._domUpdatePromise=new Promise(async r=>{var f;const s=(await n.resolveTags()).map(h=>({tag:h,id:yl.has(h.tag)?hf(h):h.tag,shouldRender:!0}));let o=n._dom;if(!o){o={elMap:{htmlAttrs:t.documentElement,bodyAttrs:t.body}};const h=new Set;for(const d of["body","head"]){const g=(f=t[d])==null?void 0:f.children;for(const _ of g){const m=_.tagName.toLowerCase();if(!yl.has(m))continue;const p={tag:m,props:await Qg(_.getAttributeNames().reduce((b,A)=>({...b,[A]:_.getAttribute(A)}),{})),innerHTML:_.innerHTML},y=tv(p);let v=y,x=1;for(;v&&h.has(v);)v=`${y}:${x++}`;v&&(p._d=v,h.add(v)),o.elMap[_.getAttribute("data-hid")||hf(p)]=_}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(h,d,g){const _=`${h}:${d}`;o.sideEffects[_]=g,delete o.pendingSideEffects[_]}function l({id:h,$el:d,tag:g}){const _=g.tag.endsWith("Attrs");if(o.elMap[h]=d,_||(g.textContent&&g.textContent!==d.textContent&&(d.textContent=g.textContent),g.innerHTML&&g.innerHTML!==d.innerHTML&&(d.innerHTML=g.innerHTML),a(h,"el",()=>{var m;(m=o.elMap[h])==null||m.remove(),delete o.elMap[h]})),g._eventHandlers)for(const m in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,m)&&d.getAttribute(`data-${m}`)!==""&&((g.tag==="bodyAttrs"?t.defaultView:d).addEventListener(m.substring(2),g._eventHandlers[m].bind(d)),d.setAttribute(`data-${m}`,""));for(const m in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,m))continue;const p=g.props[m],y=`attr:${m}`;if(m==="class"){if(!p)continue;for(const v of p.split(" "))_&&a(h,`${y}:${v}`,()=>d.classList.remove(v)),!d.classList.contains(v)&&d.classList.add(v)}else if(m==="style"){if(!p)continue;for(const v of p.split(";")){const x=v.indexOf(":"),b=v.substring(0,x).trim(),A=v.substring(x+1).trim();a(h,`${y}:${b}`,()=>{d.style.removeProperty(b)}),d.style.setProperty(b,A)}}else d.getAttribute(m)!==p&&d.setAttribute(m,p===!0?"":String(p)),_&&a(h,y,()=>d.removeAttribute(m))}}const c=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const h of s){const{tag:d,shouldRender:g,id:_}=h;if(g){if(d.tag==="title"){t.title=d.textContent;continue}h.$el=h.$el||o.elMap[_],h.$el?l(h):yl.has(d.tag)&&c.push(h)}}for(const h of c){const d=h.tag.tagPosition||"head";h.$el=t.createElement(h.tag.tag),l(h),u[d]=u[d]||t.createDocumentFragment(),u[d].appendChild(h.$el)}for(const h of s)await n.hooks.callHook("dom:renderTag",h,t,a);u.head&&t.head.appendChild(u.head),u.bodyOpen&&t.body.insertBefore(u.bodyOpen,t.body.firstChild),u.bodyClose&&t.body.appendChild(u.bodyClose);for(const h in o.pendingSideEffects)o.pendingSideEffects[h]();n._dom=o,await n.hooks.callHook("dom:rendered",{renders:s}),r()}).finally(()=>{n._domUpdatePromise=void 0,n.dirty=!1})),n._domUpdatePromise}function HE(n,e={}){const t=e.delayFn||(i=>setTimeout(i,10));return n._domDebouncedUpdatePromise=n._domDebouncedUpdatePromise||new Promise(i=>t(()=>nv(n,e).then(()=>{delete n._domDebouncedUpdatePromise,i()})))}function zE(n){return e=>{var i,r;const t=((r=(i=e.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return t&&e.push(JSON.parse(t)),{mode:"client",hooks:{"entries:updated":s=>{HE(s,n)}}}}}const VE=new Set(["templateParams","htmlAttrs","bodyAttrs"]),GE={hooks:{"tag:normalise":({tag:n})=>{n.props.hid&&(n.key=n.props.hid,delete n.props.hid),n.props.vmid&&(n.key=n.props.vmid,delete n.props.vmid),n.props.key&&(n.key=n.props.key,delete n.props.key);const e=tv(n);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete n.key;const t=e||(n.key?`${n.tag}:${n.key}`:!1);t&&(n._d=t)},"tags:resolve":n=>{const e=Object.create(null);for(const i of n.tags){const r=(i.key?`${i.tag}:${i.key}`:i._d)||hf(i),s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&VE.has(i.tag)&&(a="merge"),a==="merge"){const l=s.props;l.style&&i.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),i.props.style=`${l.style} ${i.props.style}`),l.class&&i.props.class?i.props.class=`${l.class} ${i.props.class}`:l.class&&(i.props.class=l.class),e[r].props={...l,...i.props};continue}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);continue}else if(Yl(i)>Yl(s))continue}if(!(i.innerHTML||i.textContent||Object.keys(i.props).length!==0)&&yl.has(i.tag)){delete e[r];continue}e[r]=i}const t=[];for(const i in e){const r=e[i],s=r._duped;t.push(r),s&&(delete r._duped,t.push(...s))}n.tags=t,n.tags=n.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},WE=new Set(["script","link","bodyAttrs"]),XE=n=>({hooks:{"tags:resolve":e=>{for(const t of e.tags){if(!WE.has(t.tag))continue;const i=t.props;for(const r in i){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(i,r))continue;const s=i[r];typeof s=="function"&&(n.ssr&&yp.has(r)?i[r]=`this.dataset.${r}fired = true`:delete i[r],t._eventHandlers=t._eventHandlers||{},t._eventHandlers[r]=s)}n.ssr&&t._eventHandlers&&(t.props.src||t.props.href)&&(t.key=t.key||$l(t.props.src||t.props.href))}},"dom:renderTag":({$el:e,tag:t})=>{var r,s;const i=e==null?void 0:e.dataset;if(i)for(const o in i){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);yp.has(a)&&((s=(r=t._eventHandlers)==null?void 0:r[a])==null||s.call(e,new Event(a.substring(2))))}}}}),qE=new Set(["link","style","script","noscript"]),$E={hooks:{"tag:normalise":({tag:n})=>{n.key&&qE.has(n.tag)&&(n.props["data-hid"]=n._h=$l(n.key))}}},YE={mode:"server",hooks:{"tags:beforeResolve":n=>{const e={};let t=!1;for(const i of n.tags)i._m!=="server"||i.tag!=="titleTemplate"&&i.tag!=="templateParams"&&i.tag!=="title"||(e[i.tag]=i.tag==="title"||i.tag==="titleTemplate"?i.textContent:i.props,t=!0);t&&n.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},jE={hooks:{"tags:resolve":n=>{var e;for(const t of n.tags)if(typeof t.tagPriority=="string")for(const{prefix:i,offset:r}of OE){if(!t.tagPriority.startsWith(i))continue;const s=t.tagPriority.substring(i.length),o=(e=n.tags.find(a=>a._d===s))==null?void 0:e._p;if(o!==void 0){t._p=o+r;break}}n.tags.sort((t,i)=>{const r=Yl(t),s=Yl(i);return r<s?-1:r>s?1:t._p-i._p})}}},KE={meta:"content",link:"href",htmlAttrs:"lang"},ZE=["innerHTML","textContent"],JE=n=>({hooks:{"tags:resolve":e=>{var o;const{tags:t}=e;let i;for(let a=0;a<t.length;a+=1)t[a].tag==="templateParams"&&(i=e.tags.splice(a,1)[0].props,a-=1);const r=i||{},s=r.separator||"|";delete r.separator,r.pageTitle=Wa(r.pageTitle||((o=t.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",r,s);for(const a of t){if(a.processTemplateParams===!1)continue;const l=KE[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Wa(a.props[l],r,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const c of ZE)typeof a[c]=="string"&&(a[c]=Wa(a[c],r,s,a.tag==="script"&&a.props.type.endsWith("json")))}n._templateParams=r,n._separator=s},"tags:afterResolve":({tags:e})=>{let t;for(let i=0;i<e.length;i+=1){const r=e[i];r.tag==="title"&&r.processTemplateParams!==!1&&(t=r)}t!=null&&t.textContent&&(t.textContent=Wa(t.textContent,n._templateParams,n._separator))}}}),QE={hooks:{"tags:resolve":n=>{const{tags:e}=n;let t,i;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"?t=s:s.tag==="titleTemplate"&&(i=s)}if(i&&t){const r=Ep(i.textContent,t.textContent);r!==null?t.textContent=r||t.textContent:n.tags.splice(n.tags.indexOf(t),1)}else if(i){const r=Ep(i.textContent);r!==null&&(i.textContent=r,i.tag="title",i=void 0)}i&&n.tags.splice(n.tags.indexOf(i),1)}}},eT={hooks:{"tags:afterResolve":n=>{for(const e of n.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let iv;function tT(n={}){const e=nT(n);return e.use(zE()),iv=e}function Tp(n,e){return!n||n==="server"&&e||n==="client"&&!e}function nT(n={}){const e=Vg();e.addHooks(n.hooks||{}),n.document=n.document||(LE?document:void 0);const t=!n.document,i=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:n,hooks:e,headEntries(){return s},use(l){const c=typeof l=="function"?l(a):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),Tp(c.mode,t)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return Tp(u.mode,t)&&(s.push(u),i()),{dispose(){s=s.filter(f=>f._i!==u._i),i()},patch(f){for(const h of s)h._i===u._i&&(h.input=u.input=f);i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await NE(c)){const h={tag:f,entry:c,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",h),l.tags.push(h.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:t};return[GE,YE,XE,$E,jE,JE,QE,eT,...(n==null?void 0:n.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function iT(){return iv}const rT=Rg[0]==="3";function sT(n){return typeof n=="function"?n():_t(n)}function pf(n){if(n instanceof Promise||n instanceof Date||n instanceof RegExp)return n;const e=sT(n);if(!n||!e)return e;if(Array.isArray(e))return e.map(t=>pf(t));if(typeof e=="object"){const t={};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){t[i]=_t(e[i]);continue}t[i]=pf(e[i])}return t}return e}const oT={hooks:{"entries:resolve":n=>{for(const e of n.entries)e.resolvedInput=pf(e.input)}}},rv="usehead";function aT(n){return{install(t){rT&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(rv,n))}}.install}function lT(n={}){n.domDelayFn=n.domDelayFn||(t=>Ea(()=>setTimeout(()=>t(),0)));const e=tT(n);return e.use(oT),e.install=aT(e),e}const mf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_f="__unhead_injection_handler__";function cT(n){mf[_f]=n}function uT(){return _f in mf?mf[_f]():pn(rv)||iT()}const fT="modulepreload",hT=function(n,e){return new URL(n,e).href},bp={},Je=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(c=>{if(c=hT(c,i),c in bp)return;bp[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!i)for(let g=o.length-1;g>=0;g--){const _=o[g];if(_.href===c&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":fT,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};let Sl,Ml;function dT(){return Sl=$fetch(Gh(`builds/meta/${Aa().app.buildId}.json`),{responseType:"json"}),Sl.then(n=>{Ml=lE(n.matcher)}).catch(n=>{console.error("[nuxt] Error fetching app manifest.",n)}),Sl}function yc(){return Sl||dT()}async function Wh(n){const e=typeof n=="string"?n:n.path;if(await yc(),!Ml)return console.error("[nuxt] Error creating app manifest matcher.",Ml),{};try{return $g({},...Ml.matchAll(e).reverse())}catch(t){return console.error("[nuxt] Error matching route rules.",t),{}}}async function Ap(n,e={}){const t=await mT(n,e),i=pt(),r=i._payloadCache=i._payloadCache||{};return t in r?r[t]||null:(r[t]=ov(n).then(s=>s?sv(t).then(o=>o||(delete r[t],null)):(r[t]=null,null)),r[t])}const pT="_payload.json";async function mT(n,e={}){const t=new URL(n,"http://localhost");if(t.host!=="localhost"||qi(t.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+n);const i=Aa(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await ov(n)?s:i.app.baseURL;return _c(o,t.pathname,pT+(r?`?${r}`:""))}async function sv(n){const e=fetch(n).then(t=>t.text().then(av));try{return await e}catch(t){console.warn("[nuxt] Cannot load payload ",n,t)}return null}async function ov(n=jg().path){const e=pt();return n=mc(n),(await yc()).prerendered.includes(n)?!0:e.runWithContext(async()=>{const i=await Wh({path:n});return!!i.prerender&&!i.redirect})}let Ur=null;async function _T(){var i;if(Ur)return Ur;const n=document.getElementById("__NUXT_DATA__");if(!n)return{};const e=await av(n.textContent||""),t=n.dataset.src?await sv(n.dataset.src):void 0;return Ur={...e,...t,...window.__NUXT__},(i=Ur.config)!=null&&i.public&&(Ur.config.public=wr(Ur.config.public)),Ur}async function av(n){return await AE(n,pt()._payloadRevivers)}function gT(n,e){pt()._payloadRevivers[n]=e}const vT=[["NuxtError",n=>xc(n)],["EmptyShallowRef",n=>ra(n==="_"?void 0:n==="0n"?BigInt(0):zl(n))],["EmptyRef",n=>Wt(n==="_"?void 0:n==="0n"?BigInt(0):zl(n))],["ShallowRef",n=>ra(n)],["ShallowReactive",n=>Ni(n)],["Ref",n=>Wt(n)],["Reactive",n=>wr(n)]],xT=vi({name:"nuxt:revive-payload:client",order:-30,async setup(n){let e,t;for(const[i,r]of vT)gT(i,r);Object.assign(n.payload,([e,t]=js(()=>n.runWithContext(_T)),e=await e,t(),e)),window.__NUXT__=n.payload}}),yT=[],ST=vi({name:"nuxt:head",enforce:"pre",setup(n){const e=lT({plugins:yT});cT(()=>pt().vueApp._context.provides.usehead),n.vueApp.use(e);{let t=!0;const i=async()=>{t=!1,await nv(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!t}),n.hooks.hook("page:start",()=>{t=!0}),n.hooks.hook("page:finish",()=>{n.isHydrating||i()}),n.hooks.hook("app:error",i),n.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ns=typeof document<"u";function lv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function MT(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&lv(n.default)}const tt=Object.assign;function jc(n,e){const t={};for(const i in e){const r=e[i];t[i]=ri(r)?r.map(n):n(r)}return t}const Yo=()=>{},ri=Array.isArray,cv=/#/g,ET=/&/g,TT=/\//g,bT=/=/g,AT=/\?/g,uv=/\+/g,wT=/%5B/g,RT=/%5D/g,fv=/%5E/g,CT=/%60/g,hv=/%7B/g,PT=/%7C/g,dv=/%7D/g,LT=/%20/g;function Xh(n){return encodeURI(""+n).replace(PT,"|").replace(wT,"[").replace(RT,"]")}function DT(n){return Xh(n).replace(hv,"{").replace(dv,"}").replace(fv,"^")}function gf(n){return Xh(n).replace(uv,"%2B").replace(LT,"+").replace(cv,"%23").replace(ET,"%26").replace(CT,"`").replace(hv,"{").replace(dv,"}").replace(fv,"^")}function IT(n){return gf(n).replace(bT,"%3D")}function UT(n){return Xh(n).replace(cv,"%23").replace(AT,"%3F")}function NT(n){return n==null?"":UT(n).replace(TT,"%2F")}function ca(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const OT=/\/$/,FT=n=>n.replace(OT,"");function Kc(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=zT(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ca(o)}}function BT(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function wp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function kT(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&so(e.matched[i],t.matched[r])&&pv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function so(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function pv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!HT(n[t],e[t]))return!1;return!0}function HT(n,e){return ri(n)?Rp(n,e):ri(e)?Rp(e,n):n===e}function Rp(n,e){return ri(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function zT(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const Kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ua;(function(n){n.pop="pop",n.push="push"})(ua||(ua={}));var jo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(jo||(jo={}));function VT(n){if(!n)if(Ns){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),FT(n)}const GT=/^[^#]+#/;function WT(n,e){return n.replace(GT,"#")+e}function XT(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Sc=()=>({left:window.scrollX,top:window.scrollY});function qT(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=XT(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cp(n,e){return(history.state?history.state.position-e:-1)+n}const vf=new Map;function $T(n,e){vf.set(n,e)}function YT(n){const e=vf.get(n);return vf.delete(n),e}let jT=()=>location.protocol+"//"+location.host;function mv(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),wp(l,"")}return wp(t,n)+i+r}function KT(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const d=mv(n,location),g=t.value,_=e.value;let m=0;if(h){if(t.value=d,e.value=h,o&&o===g){o=null;return}m=_?h.position-_.position:0}else i(d);r.forEach(p=>{p(t.value,g,{delta:m,type:ua.pop,direction:m?m>0?jo.forward:jo.back:jo.unknown})})};function l(){o=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(tt({},h.state,{scroll:Sc()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Pp(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Sc():null}}function ZT(n){const{history:e,location:t}=window,i={value:mv(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:jT()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function o(l,c){const u=tt({},e.state,Pp(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=tt({},r.value,e.state,{forward:l,scroll:Sc()});s(u.current,u,!0);const f=tt({},Pp(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function JT(n){n=VT(n);const e=ZT(n),t=KT(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=tt({location:"",base:n,go:i,createHref:WT.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function QT(n){return typeof n=="string"||n&&typeof n=="object"}function _v(n){return typeof n=="string"||typeof n=="symbol"}const gv=Symbol("");var Lp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Lp||(Lp={}));function oo(n,e){return tt(new Error,{type:n,[gv]:!0},e)}function Mi(n,e){return n instanceof Error&&gv in n&&(e==null||!!(n.type&e))}const Dp="[^/]+?",eb={sensitive:!1,strict:!1,start:!0,end:!0},tb=/[.+*?^${}()[\]/\\]/g;function nb(n,e){const t=tt({},eb,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(tb,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:_,optional:m,regexp:p}=h;s.push({name:g,repeatable:_,optional:m});const y=p||Dp;if(y!==Dp){d+=10;try{new RegExp(`(${y})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+x.message)}}let v=_?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),_&&(d+=-20),y===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:_,optional:m}=d,p=g in c?c[g]:"";if(ri(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=ri(p)?p.join("/"):p;if(!y)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function ib(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vv(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=ib(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Ip(i))return 1;if(Ip(r))return-1}return r.length-i.length}function Ip(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rb={type:0,value:""},sb=/[a-zA-Z0-9_]/;function ob(n){if(!n)return[[]];if(n==="/")return[[rb]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:sb.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function ab(n,e,t){const i=nb(ob(n.path),t),r=tt(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lb(n,e){const t=[],i=new Map;e=Fp({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,_=Np(f);_.aliasOf=d&&d.record;const m=Fp(e,f),p=[_];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const b of x)p.push(Np(tt({},_,{components:d?d.record.components:_.components,path:b,aliasOf:d?d.record:_})))}let y,v;for(const x of p){const{path:b}=x;if(h&&b[0]!=="/"){const A=h.record.path,w=A[A.length-1]==="/"?"":"/";x.path=h.record.path+(b&&w+b)}if(y=ab(x,h,m),d?d.alias.push(y):(v=v||y,v!==y&&v.alias.push(y),g&&f.name&&!Op(y)&&o(f.name)),xv(y)&&l(y),_.children){const A=_.children;for(let w=0;w<A.length;w++)s(A[w],y,d&&d.children[w])}d=d||y}return v?()=>{o(v)}:Yo}function o(f){if(_v(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return t}function l(f){const h=fb(f,t);t.splice(h,0,f),f.record.name&&!Op(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},_,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw oo(1,{location:f});m=d.record.name,g=tt(Up(h.params,d.keys.filter(v=>!v.optional).concat(d.parent?d.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&Up(f.params,d.keys.map(v=>v.name))),_=d.stringify(g)}else if(f.path!=null)_=f.path,d=t.find(v=>v.re.test(_)),d&&(g=d.parse(_),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(v=>v.re.test(h.path)),!d)throw oo(1,{location:f,currentLocation:h});m=d.record.name,g=tt({},h.params,f.params),_=d.stringify(g)}const p=[];let y=d;for(;y;)p.unshift(y.record),y=y.parent;return{name:m,path:_,params:g,matched:p,meta:ub(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Up(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Np(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:cb(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cb(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Op(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function ub(n){return n.reduce((e,t)=>tt(e,t.meta),{})}function Fp(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function fb(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;vv(n,e[s])<0?i=s:t=s+1}const r=hb(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function hb(n){let e=n;for(;e=e.parent;)if(xv(e)&&vv(n,e)===0)return e}function xv({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function db(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(uv," "),o=s.indexOf("="),a=ca(o<0?s:s.slice(0,o)),l=o<0?null:ca(s.slice(o+1));if(a in e){let c=e[a];ri(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bp(n){let e="";for(let t in n){const i=n[t];if(t=IT(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(ri(i)?i.map(s=>s&&gf(s)):[i&&gf(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function pb(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=ri(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mb=Symbol(""),kp=Symbol(""),qh=Symbol(""),$h=Symbol(""),xf=Symbol("");function Ro(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function or(n,e,t,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(oo(4,{from:t,to:e})):h instanceof Error?l(h):QT(h)?l(oo(2,{from:e,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Zc(n,e,t,i,r=s=>s()){const s=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(lv(l)){const u=(l.__vccOpts||l)[e];u&&s.push(or(u,t,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=MT(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&or(d,t,i,o,a,r)()}))}}return s}function Hp(n){const e=pn(qh),t=pn($h),i=Lt(()=>{const l=_t(n.to);return e.resolve(l)}),r=Lt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(so.bind(null,u));if(h>-1)return h;const d=zp(l[c-2]);return c>1&&zp(u)===d&&f[f.length-1].path!==d?f.findIndex(so.bind(null,l[c-2])):h}),s=Lt(()=>r.value>-1&&yb(t.params,i.value.params)),o=Lt(()=>r.value>-1&&r.value===t.matched.length-1&&pv(t.params,i.value.params));function a(l={}){if(xb(l)){const c=e[_t(n.replace)?"replace":"push"](_t(n.to)).catch(Yo);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Lt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function _b(n){return n.length===1?n[0]:n}const gb=ps({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hp,setup(n,{slots:e}){const t=wr(Hp(n)),{options:i}=pn(qh),r=Lt(()=>({[Vp(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Vp(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&_b(e.default(t));return n.custom?s:Ft("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),vb=gb;function xb(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function yb(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!ri(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function zp(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Vp=(n,e,t)=>n??e??t,Sb=ps({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=pn(xf),r=Lt(()=>n.route||i.value),s=pn(kp,0),o=Lt(()=>{let c=_t(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Lt(()=>r.value.matched[o.value]);pr(kp,Lt(()=>o.value+1)),pr(mb,a),pr(xf,r);const l=Wt();return $s(()=>[l.value,a.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!so(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return Gp(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=Ft(h,tt({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Gp(t.default,{Component:m,route:c})||m}}});function Gp(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const yv=Sb;function Mb(n){const e=lb(n.routes,n),t=n.parseQuery||db,i=n.stringifyQuery||Bp,r=n.history,s=Ro(),o=Ro(),a=Ro(),l=ra(Kn);let c=Kn;Ns&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jc.bind(null,B=>""+B),f=jc.bind(null,NT),h=jc.bind(null,ca);function d(B,re){let ae,oe;return _v(B)?(ae=e.getRecordMatcher(B),oe=re):oe=B,e.addRoute(oe,ae)}function g(B){const re=e.getRecordMatcher(B);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(B=>B.record)}function m(B){return!!e.getRecordMatcher(B)}function p(B,re){if(re=tt({},re||l.value),typeof B=="string"){const M=Kc(t,B,re.path),W=e.resolve({path:M.path},re),ee=r.createHref(M.fullPath);return tt(M,W,{params:h(W.params),hash:ca(M.hash),redirectedFrom:void 0,href:ee})}let ae;if(B.path!=null)ae=tt({},B,{path:Kc(t,B.path,re.path).path});else{const M=tt({},B.params);for(const W in M)M[W]==null&&delete M[W];ae=tt({},B,{params:f(M)}),re.params=f(re.params)}const oe=e.resolve(ae,re),Pe=B.hash||"";oe.params=u(h(oe.params));const Oe=BT(i,tt({},B,{hash:DT(Pe),path:oe.path})),P=r.createHref(Oe);return tt({fullPath:Oe,hash:Pe,query:i===Bp?pb(B.query):B.query||{}},oe,{redirectedFrom:void 0,href:P})}function y(B){return typeof B=="string"?Kc(t,B,l.value.path):tt({},B)}function v(B,re){if(c!==B)return oo(8,{from:re,to:B})}function x(B){return w(B)}function b(B){return x(tt(y(B),{replace:!0}))}function A(B){const re=B.matched[B.matched.length-1];if(re&&re.redirect){const{redirect:ae}=re;let oe=typeof ae=="function"?ae(B):ae;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=y(oe):{path:oe},oe.params={}),tt({query:B.query,hash:B.hash,params:oe.path!=null?{}:B.params},oe)}}function w(B,re){const ae=c=p(B),oe=l.value,Pe=B.state,Oe=B.force,P=B.replace===!0,M=A(ae);if(M)return w(tt(y(M),{state:typeof M=="object"?tt({},Pe,M.state):Pe,force:Oe,replace:P}),re||ae);const W=ae;W.redirectedFrom=re;let ee;return!Oe&&kT(i,oe,ae)&&(ee=oo(16,{to:W,from:oe}),Me(oe,oe,!0,!1)),(ee?Promise.resolve(ee):T(W,oe)).catch($=>Mi($)?Mi($,2)?$:_e($):F($,W,oe)).then($=>{if($){if(Mi($,2))return w(tt({replace:P},y($.to),{state:typeof $.to=="object"?tt({},Pe,$.to.state):Pe,force:Oe}),re||W)}else $=I(W,oe,!0,P,Pe);return D(W,oe,$),$})}function L(B,re){const ae=v(B,re);return ae?Promise.reject(ae):Promise.resolve()}function E(B){const re=ne.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(B):B()}function T(B,re){let ae;const[oe,Pe,Oe]=Eb(B,re);ae=Zc(oe.reverse(),"beforeRouteLeave",B,re);for(const M of oe)M.leaveGuards.forEach(W=>{ae.push(or(W,B,re))});const P=L.bind(null,B,re);return ae.push(P),xe(ae).then(()=>{ae=[];for(const M of s.list())ae.push(or(M,B,re));return ae.push(P),xe(ae)}).then(()=>{ae=Zc(Pe,"beforeRouteUpdate",B,re);for(const M of Pe)M.updateGuards.forEach(W=>{ae.push(or(W,B,re))});return ae.push(P),xe(ae)}).then(()=>{ae=[];for(const M of Oe)if(M.beforeEnter)if(ri(M.beforeEnter))for(const W of M.beforeEnter)ae.push(or(W,B,re));else ae.push(or(M.beforeEnter,B,re));return ae.push(P),xe(ae)}).then(()=>(B.matched.forEach(M=>M.enterCallbacks={}),ae=Zc(Oe,"beforeRouteEnter",B,re,E),ae.push(P),xe(ae))).then(()=>{ae=[];for(const M of o.list())ae.push(or(M,B,re));return ae.push(P),xe(ae)}).catch(M=>Mi(M,8)?M:Promise.reject(M))}function D(B,re,ae){a.list().forEach(oe=>E(()=>oe(B,re,ae)))}function I(B,re,ae,oe,Pe){const Oe=v(B,re);if(Oe)return Oe;const P=re===Kn,M=Ns?history.state:{};ae&&(oe||P?r.replace(B.fullPath,tt({scroll:P&&M&&M.scroll},Pe)):r.push(B.fullPath,Pe)),l.value=B,Me(B,re,ae,P),_e()}let U;function G(){U||(U=r.listen((B,re,ae)=>{if(!de.listening)return;const oe=p(B),Pe=A(oe);if(Pe){w(tt(Pe,{replace:!0,force:!0}),oe).catch(Yo);return}c=oe;const Oe=l.value;Ns&&$T(Cp(Oe.fullPath,ae.delta),Sc()),T(oe,Oe).catch(P=>Mi(P,12)?P:Mi(P,2)?(w(tt(y(P.to),{force:!0}),oe).then(M=>{Mi(M,20)&&!ae.delta&&ae.type===ua.pop&&r.go(-1,!1)}).catch(Yo),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),F(P,oe,Oe))).then(P=>{P=P||I(oe,Oe,!1),P&&(ae.delta&&!Mi(P,8)?r.go(-ae.delta,!1):ae.type===ua.pop&&Mi(P,20)&&r.go(-1,!1)),D(oe,Oe,P)}).catch(Yo)}))}let Z=Ro(),O=Ro(),j;function F(B,re,ae){_e(B);const oe=O.list();return oe.length?oe.forEach(Pe=>Pe(B,re,ae)):console.error(B),Promise.reject(B)}function fe(){return j&&l.value!==Kn?Promise.resolve():new Promise((B,re)=>{Z.add([B,re])})}function _e(B){return j||(j=!B,G(),Z.list().forEach(([re,ae])=>B?ae(B):re()),Z.reset()),B}function Me(B,re,ae,oe){const{scrollBehavior:Pe}=n;if(!Ns||!Pe)return Promise.resolve();const Oe=!ae&&YT(Cp(B.fullPath,0))||(oe||!ae)&&history.state&&history.state.scroll||null;return Ea().then(()=>Pe(B,re,Oe)).then(P=>P&&qT(P)).catch(P=>F(P,B,re))}const Ce=B=>r.go(B);let Xe;const ne=new Set,de={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:x,replace:b,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:fe,install(B){const re=this;B.component("RouterLink",vb),B.component("RouterView",yv),B.config.globalProperties.$router=re,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>_t(l)}),Ns&&!Xe&&l.value===Kn&&(Xe=!0,x(r.location).catch(Pe=>{}));const ae={};for(const Pe in Kn)Object.defineProperty(ae,Pe,{get:()=>l.value[Pe],enumerable:!0});B.provide(qh,re),B.provide($h,Ni(ae)),B.provide(xf,l);const oe=B.unmount;ne.add(B),B.unmount=function(){ne.delete(B),ne.size<1&&(c=Kn,U&&U(),U=null,l.value=Kn,Xe=!1,j=!1),oe()}}};function xe(B){return B.reduce((re,ae)=>re.then(()=>E(ae)),Promise.resolve())}return de}function Eb(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>so(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>so(c,l))||r.push(l))}return[t,i,r]}function qI(n){return pn($h)}const Tb=/(:\w+)\([^)]+\)/g,bb=/(:\w+)[?+*]/g,Ab=/:\w+/g,wb=(n,e)=>e.path.replace(Tb,"$1").replace(bb,"$1").replace(Ab,t=>{var i;return((i=n.params[t.slice(1)])==null?void 0:i.toString())||""}),yf=(n,e)=>{const t=n.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===n.Component.type}),i=e??(t==null?void 0:t.meta.key)??(t&&wb(n.route,t));return typeof i=="function"?i(n.route):i},Rb=(n,e)=>({default:()=>n?Ft(my,n===!0?{}:n,e):e});function Yh(n){return Array.isArray(n)?n:[n]}const Jc=[{name:"about",path:"/about",component:()=>Je(()=>import("./F2y3dyrQ.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"articles-id",path:"/articles/:id()",component:()=>Je(()=>import("./DTkRihjb.js"),__vite__mapDeps([2,3,4]),import.meta.url)},{name:"categories-detail",path:"/categories/detail",component:()=>Je(()=>import("./CCzs_0Ic.js"),__vite__mapDeps([5,6,3,7,8]),import.meta.url)},{name:"categories",path:"/categories",component:()=>Je(()=>import("./Bnt7xh95.js"),__vite__mapDeps([9,10,11]),import.meta.url)},{name:"index",path:"/",component:()=>Je(()=>import("./BdHi-_NF.js"),__vite__mapDeps([12,6,3,7,10,13]),import.meta.url)}],Cb=(n,e)=>({default:()=>{var t;return n?Ft(vS,n===!0?{}:n,e):(t=e.default)==null?void 0:t.call(e)}}),Pb=/(:\w+)\([^)]+\)/g,Lb=/(:\w+)[?+*]/g,Db=/:\w+/g;function Wp(n){const e=(n==null?void 0:n.meta.key)??n.path.replace(Pb,"$1").replace(Lb,"$1").replace(Db,t=>{var i;return((i=n.params[t.slice(1)])==null?void 0:i.toString())||""});return typeof e=="function"?e(n):e}function Ib(n,e){return n===e||e===Kn?!1:Wp(n)!==Wp(e)?!0:!n.matched.every((i,r)=>{var s,o;return i.components&&i.components.default===((o=(s=e.matched[r])==null?void 0:s.components)==null?void 0:o.default)})}function Ub(n,e=!1){if(n){if(n.nodeName==="#comment"&&n.nodeValue==="[")return Sv(n,[],e);if(e){const t=n.cloneNode(!0);return t.querySelectorAll("[data-island-slot]").forEach(i=>{i.innerHTML=""}),[t.outerHTML]}return[n.outerHTML]}}function Sv(n,e=[],t=!1){if(n&&n.nodeName){if(Ob(n))return e;if(!Nb(n)){const i=n.cloneNode(!0);t&&i.querySelectorAll("[data-island-slot]").forEach(r=>{r.innerHTML=""}),e.push(i.outerHTML)}Sv(n.nextSibling,e,t)}return e}function Qc(n,e){const t=n?Ub(n):[e];return t?ju(t.join(""),t.length):Ft("div")}function Nb(n){return n.nodeName==="#comment"&&n.nodeValue==="["}function Ob(n){return n.nodeName==="#comment"&&n.nodeValue==="]"}const Fb={scrollBehavior(n,e,t){var c;const i=pt(),r=((c=Mn().options)==null?void 0:c.scrollBehaviorType)??"auto";let s=t||void 0;const o=typeof n.meta.scrollToTop=="function"?n.meta.scrollToTop(n,e):n.meta.scrollToTop;if(!s&&e&&n&&o!==!1&&Ib(n,e)&&(s={left:0,top:0}),n.path===e.path)return e.hash&&!n.hash?{left:0,top:0}:n.hash?{el:n.hash,top:Xp(n.hash),behavior:r}:!1;const a=u=>!!(u.meta.pageTransition??of),l=a(e)&&a(n)?"page:transition:finish":"page:finish";return new Promise(u=>{i.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),n.hash&&(s={el:n.hash,top:Xp(n.hash),behavior:r}),u(s)})})}};function Xp(n){try{const e=document.querySelector(n);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const Bb={hashMode:!1,scrollBehaviorType:"auto"},Fn={...Bb,...Fb},kb=async n=>{var l;let e,t;if(!((l=n.meta)!=null&&l.validate))return;const i=pt(),r=Mn(),s=([e,t]=js(()=>Promise.resolve(n.meta.validate(n))),e=await e,t(),e);if(s===!0)return;const o=xc({statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${n.fullPath}`,data:{path:n.fullPath}}),a=r.beforeResolve(c=>{if(a(),c===n){const u=r.afterEach(async()=>{u(),await i.runWithContext(()=>ks(o)),window==null||window.history.pushState({},"",n.fullPath)});return!1}})},Hb=async n=>{let e,t;const i=([e,t]=js(()=>Wh({path:n.path})),e=await e,t(),e);if(i.redirect)return qi(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},zb=[kb,Hb],Ko={};function Vb(n,e,t){const{pathname:i,search:r,hash:s}=e,o=n.indexOf("#");if(o>-1){const c=s.includes(n.slice(o))?n.slice(o).length:1;let u=s.slice(c);return u[0]!=="/"&&(u="/"+u),fp(u,"")}const a=fp(i,n),l=!t||xM(a,t,{trailingSlash:!0})?a:t;return l+(l.includes("?")?"":r)+s}const Gb=vi({name:"nuxt:router",enforce:"pre",async setup(n){var m;let e,t,i=Aa().app.baseURL;const r=((m=Fn.history)==null?void 0:m.call(Fn,i))??JT(i),s=Fn.routes?([e,t]=js(()=>Fn.routes(Jc)),e=await e,t(),e??Jc):Jc;let o;const a=Mb({...Fn,scrollBehavior:(p,y,v)=>{if(y===Kn){o=v;return}if(Fn.scrollBehavior){if(a.options.scrollBehavior=Fn.scrollBehavior,"scrollRestoration"in window.history){const x=a.beforeEach(()=>{x(),window.history.scrollRestoration="manual"})}return Fn.scrollBehavior(p,Kn,o||v)}},history:r,routes:s});Fn.routes&&Fn.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),n.vueApp.use(a);const l=ra(a.currentRoute.value);a.afterEach((p,y)=>{l.value=y}),Object.defineProperty(n.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const c=Vb(i,window.location,n.payload.path),u=ra(a.currentRoute.value),f=()=>{u.value=a.currentRoute.value};n.hook("page:finish",f),a.afterEach((p,y)=>{var v,x,b,A;((x=(v=p.matched[0])==null?void 0:v.components)==null?void 0:x.default)===((A=(b=y.matched[0])==null?void 0:b.components)==null?void 0:A.default)&&f()});const h={};for(const p in u.value)Object.defineProperty(h,p,{get:()=>u.value[p],enumerable:!0});n._route=Ni(h),n._middleware=n._middleware||{global:[],named:{}};const d=vc();a.afterEach(async(p,y,v)=>{delete n._processingMiddleware,!n.isHydrating&&d.value&&await n.runWithContext(_E),v&&await n.callHook("page:loading:end")});try{[e,t]=js(()=>a.isReady()),await e,t()}catch(p){[e,t]=js(()=>n.runWithContext(()=>ks(p))),await e,t()}const g=c!==a.currentRoute.value.fullPath?a.resolve(c):a.currentRoute.value;f();const _=n.payload.state._layout;return a.beforeEach(async(p,y)=>{var v;await n.callHook("page:loading:start"),p.meta=wr(p.meta),n.isHydrating&&_&&!yr(p.meta.layout)&&(p.meta.layout=_),n._processingMiddleware=!0;{const x=new Set([...zb,...n._middleware.global]);for(const b of p.matched){const A=b.meta.middleware;if(A)for(const w of Yh(A))x.add(w)}{const b=await n.runWithContext(()=>Wh({path:p.path}));if(b.appMiddleware)for(const A in b.appMiddleware)b.appMiddleware[A]?x.add(A):x.delete(A)}for(const b of x){const A=typeof b=="string"?n._middleware.named[b]||await((v=Ko[b])==null?void 0:v.call(Ko).then(L=>L.default||L)):b;if(!A)throw new Error(`Unknown route middleware: '${b}'.`);const w=await n.runWithContext(()=>A(p,y));if(!n.payload.serverRendered&&n.isHydrating&&(w===!1||w instanceof Error)){const L=w||cf({statusCode:404,statusMessage:`Page Not Found: ${c}`});return await n.runWithContext(()=>ks(L)),!1}if(w!==!0&&(w||w===!1))return w}}}),a.onError(async()=>{delete n._processingMiddleware,await n.callHook("page:loading:end")}),a.afterEach(async(p,y)=>{p.matched.length===0&&await n.runWithContext(()=>ks(cf({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`,data:{path:p.fullPath}})))}),n.hooks.hookOnce("app:created",async()=>{try{"name"in g&&(g.name=void 0),await a.replace({...g,force:!0}),a.options.scrollBehavior=Fn.scrollBehavior}catch(p){await n.runWithContext(()=>ks(p))}}),{provide:{router:a}}}}),Sf=globalThis.requestIdleCallback||(n=>{const e=Date.now(),t={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{n(t)},1)}),Wb=globalThis.cancelIdleCallback||(n=>{clearTimeout(n)}),Mc=n=>{const e=pt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Sf(()=>n())}):Sf(()=>n())},Xb=vi({name:"nuxt:payload",setup(n){Mn().beforeResolve(async(e,t)=>{if(e.path===t.path)return;const i=await Ap(e.path);i&&Object.assign(n.static.data,i.data)}),Mc(()=>{var e;n.hooks.hook("link:prefetch",async t=>{const{hostname:i}=new URL(t,window.location.href);i===window.location.hostname&&await Ap(t)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(yc,1e3)})}}),qb=vi(()=>{const n=Mn();Mc(()=>{n.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),$b=vi(n=>{let e;async function t(){const i=await yc();e&&clearTimeout(e),e=setTimeout(t,_p);try{const r=await $fetch(Gh("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&n.hooks.callHook("app:manifest:update",r)}catch{}}Mc(()=>{e=setTimeout(t,_p)})});function Yb(n={}){const e=n.path||window.location.pathname;let t={};try{t=zl(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(n.force||(t==null?void 0:t.path)!==e||(t==null?void 0:t.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(n.ttl??1e4)}))}catch{}if(n.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:pt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const jb=vi({name:"nuxt:chunk-reload",setup(n){const e=Mn(),t=Aa(),i=new Set;e.beforeEach(()=>{i.clear()}),n.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?t.app.baseURL+s.href:_c(t.app.baseURL,s.fullPath);Yb({path:a,persistState:!0})}n.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),Kb=ut(()=>Je(()=>import("./B7zJJnyv.js"),[],import.meta.url).then(n=>n.default||n.default||n)),Zb=ut(()=>Je(()=>import("./Ce0Ctvjo.js"),[],import.meta.url).then(n=>n.default||n.default||n)),Jb=ut(()=>Je(()=>import("./C8KuiWVb.js"),[],import.meta.url).then(n=>n.default||n.default||n)),Qb=ut(()=>Je(()=>import("./DgsUqQxP.js"),[],import.meta.url).then(n=>n.default||n.default||n)),eA=ut(()=>Je(()=>import("./CD5Q5zxj.js"),[],import.meta.url).then(n=>n.default||n.default||n)),tA=ut(()=>Je(()=>import("./CV5mT3l7.js"),[],import.meta.url).then(n=>n.default||n.default||n)),nA=ut(()=>Je(()=>import("./B0MbHf10.js"),[],import.meta.url).then(n=>n.default||n.default||n)),iA=ut(()=>Je(()=>import("./zJX5XtDZ.js"),[],import.meta.url).then(n=>n.default||n.default||n)),rA=ut(()=>Je(()=>import("./BaEKYtGz.js"),[],import.meta.url).then(n=>n.default||n.default||n)),sA=ut(()=>Je(()=>import("./CQQzsaQg.js"),[],import.meta.url).then(n=>n.default||n.default||n)),oA=ut(()=>Je(()=>import("./DGd6TMmH.js"),[],import.meta.url).then(n=>n.default||n.default||n)),aA=ut(()=>Je(()=>import("./CYpUpcVq.js"),[],import.meta.url).then(n=>n.default||n.default||n)),lA=ut(()=>Je(()=>import("./iM9i_A5O.js"),[],import.meta.url).then(n=>n.default||n.default||n)),cA=ut(()=>Je(()=>import("./B9jnVRsJ.js"),[],import.meta.url).then(n=>n.default||n.default||n)),uA=ut(()=>Je(()=>import("./belzye8O.js"),[],import.meta.url).then(n=>n.default||n.default||n)),fA=ut(()=>Je(()=>import("./ttFnJjPb.js"),__vite__mapDeps([14,15]),import.meta.url).then(n=>n.default||n.default||n)),hA=ut(()=>Je(()=>import("./DIx88Cs3.js"),[],import.meta.url).then(n=>n.default||n.default||n)),dA=ut(()=>Je(()=>import("./Cj3yXhTc.js"),[],import.meta.url).then(n=>n.default||n.default||n)),pA=ut(()=>Je(()=>import("./BaDQDCp6.js"),[],import.meta.url).then(n=>n.default||n.default||n)),mA=ut(()=>Je(()=>import("./Dnrd1IMH.js"),[],import.meta.url).then(n=>n.default||n.default||n)),_A=ut(()=>Je(()=>import("./vDFxY7je.js"),[],import.meta.url).then(n=>n.default||n.default||n)),gA=ut(()=>Je(()=>import("./DR5mYIRy.js"),[],import.meta.url).then(n=>n.default||n.default||n)),vA=ut(()=>Je(()=>import("./B9jVSX-L.js"),[],import.meta.url).then(n=>n.default||n.default||n)),xA=ut(()=>Je(()=>import("./fj04oQBf.js"),[],import.meta.url).then(n=>n.default||n.default||n)),yA=ut(()=>Je(()=>import("./bYEEbSuj.js"),[],import.meta.url).then(n=>n.default||n.default||n)),SA=[["ProseA",Kb],["ProseBlockquote",Zb],["ProseCode",Jb],["ProseEm",Qb],["ProseH1",eA],["ProseH2",tA],["ProseH3",nA],["ProseH4",iA],["ProseH5",rA],["ProseH6",sA],["ProseHr",oA],["ProseImg",aA],["ProseLi",lA],["ProseOl",cA],["ProseP",uA],["ProsePre",fA],["ProseScript",hA],["ProseStrong",dA],["ProseTable",pA],["ProseTbody",mA],["ProseTd",_A],["ProseTh",gA],["ProseThead",vA],["ProseTr",xA],["ProseUl",yA]],MA=vi({name:"nuxt:global-components",setup(n){for(const[e,t]of SA)n.vueApp.component(e,t),n.vueApp.component("Lazy"+e,t)}}),Xa={},EA=vi({name:"nuxt:prefetch",setup(n){const e=Mn();n.hooks.hook("app:mounted",()=>{e.beforeEach(async t=>{var r;const i=(r=t==null?void 0:t.meta)==null?void 0:r.layout;i&&typeof Xa[i]=="function"&&await Xa[i]()})}),n.hooks.hook("link:prefetch",t=>{if(qi(t))return;const i=e.resolve(t);if(!i)return;const r=i.meta.layout;let s=Yh(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof Ko[o]=="function"&&Ko[o]();r&&typeof Xa[r]=="function"&&Xa[r]()})}});async function Mv(n,e=Mn()){const{path:t,matched:i}=e.resolve(n);if(!i.length||(e._routePreloaded||(e._routePreloaded=new Set),e._routePreloaded.has(t)))return;const r=e._preloadPromises=e._preloadPromises||[];if(r.length>4)return Promise.all(r).then(()=>Mv(n,e));e._routePreloaded.add(t);const s=i.map(o=>{var a;return(a=o.components)==null?void 0:a.default}).filter(o=>typeof o=="function");for(const o of s){const a=Promise.resolve(o()).catch(()=>{}).finally(()=>r.splice(r.indexOf(a)));r.push(a)}await Promise.all(r)}function TA(n={}){var c;const e=Wt(""),t=Wt(n.politeness||"polite"),i=uT();function r(u="",f="polite"){e.value=u,t.value=f}function s(u){return r(u,"polite")}function o(u){return r(u,"assertive")}function a(){var u;r((u=document==null?void 0:document.title)==null?void 0:u.trim(),t.value)}function l(){var u;(u=i==null?void 0:i.hooks)==null||u.removeHook("dom:rendered",a)}return a(),(c=i==null?void 0:i.hooks)==null||c.hook("dom:rendered",()=>{a()}),{_cleanup:l,message:e,politeness:t,set:r,polite:s,assertive:o}}function bA(n={}){const e=pt(),t=e._routeAnnouncer=e._routeAnnouncer||TA(n);return n.politeness!==t.politeness.value&&(t.politeness.value=n.politeness||"polite"),Rh()&&(e._routeAnnouncerDeps=e._routeAnnouncerDeps||0,e._routeAnnouncerDeps++,Ax(()=>{e._routeAnnouncerDeps--,e._routeAnnouncerDeps===0&&(t._cleanup(),delete e._routeAnnouncer)})),t}const AA=(...n)=>n.find(e=>e!==void 0);function wA(n){const e=n.componentName||"NuxtLink";function t(s){return typeof s=="string"&&s.startsWith("#")}function i(s,o){if(!s||n.trailingSlash!=="append"&&n.trailingSlash!=="remove")return s;if(typeof s=="string")return qp(s,n.trailingSlash);const a="path"in s&&s.path!==void 0?s.path:o(s).path;return{...s,name:void 0,path:qp(a,n.trailingSlash)}}function r(s){const o=Mn(),a=Aa(),l=Lt(()=>!!s.target&&s.target!=="_self"),c=Lt(()=>{const m=s.to||s.href||"";return typeof m=="string"&&qi(m,{acceptRelative:!0})}),u=Od("RouterLink"),f=typeof u!="string"?u.useLink:void 0,h=Lt(()=>{if(s.external)return!0;const m=s.to||s.href||"";return typeof m=="object"?!1:m===""||c.value}),d=Lt(()=>{const m=s.to||s.href||"";return h.value?m:i(m,o.resolve)}),g=h.value||f==null?void 0:f({...s,to:d}),_=Lt(()=>{var m;if(!d.value||c.value||t(d.value))return d.value;if(h.value){const p=typeof d.value=="object"&&"path"in d.value?ff(d.value):d.value,y=typeof p=="object"?o.resolve(p).href:p;return i(y,o.resolve)}return typeof d.value=="object"?((m=o.resolve(d.value))==null?void 0:m.href)??null:i(_c(a.app.baseURL,d.value),o.resolve)});return{to:d,hasTarget:l,isAbsoluteUrl:c,isExternal:h,href:_,isActive:(g==null?void 0:g.isActive)??Lt(()=>d.value===o.currentRoute.value.path),isExactActive:(g==null?void 0:g.isExactActive)??Lt(()=>d.value===o.currentRoute.value.path),route:(g==null?void 0:g.route)??Lt(()=>o.resolve(d.value)),async navigate(){await mE(_.value,{replace:s.replace,external:h.value||l.value})}}}return ps({name:e,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:r,setup(s,{slots:o}){const a=Mn(),{to:l,href:c,navigate:u,isExternal:f,hasTarget:h,isAbsoluteUrl:d}=r(s),g=Wt(!1),_=Wt(null),m=v=>{var x;_.value=s.custom?(x=v==null?void 0:v.$el)==null?void 0:x.nextElementSibling:v==null?void 0:v.$el};function p(v){var x,b;return!g.value&&(typeof s.prefetchOn=="string"?s.prefetchOn===v:((x=s.prefetchOn)==null?void 0:x[v])??((b=n.prefetchOn)==null?void 0:b[v]))&&(s.prefetch??n.prefetch)!==!1&&s.noPrefetch!==!0&&s.target!=="_blank"&&!LA()}async function y(v=pt()){if(g.value)return;g.value=!0;const x=typeof l.value=="string"?l.value:f.value?ff(l.value):a.resolve(l.value).fullPath,b=f.value?new URL(x,window.location.href).href:x;await Promise.all([v.hooks.callHook("link:prefetch",b).catch(()=>{}),!f.value&&!h.value&&Mv(l.value,a).catch(()=>{})])}if(p("visibility")){const v=pt();let x,b=null;_i(()=>{const A=CA();Mc(()=>{x=Sf(()=>{var w;(w=_==null?void 0:_.value)!=null&&w.tagName&&(b=A.observe(_.value,async()=>{b==null||b(),b=null,await y(v)}))})})}),hc(()=>{x&&Wb(x),b==null||b(),b=null})}return()=>{var b;if(!f.value&&!h.value&&!t(l.value)){const A={ref:m,to:l.value,activeClass:s.activeClass||n.activeClass,exactActiveClass:s.exactActiveClass||n.exactActiveClass,replace:s.replace,ariaCurrentValue:s.ariaCurrentValue,custom:s.custom};return s.custom||(p("interaction")&&(A.onPointerenter=y.bind(null,void 0),A.onFocus=y.bind(null,void 0)),g.value&&(A.class=s.prefetchedClass||n.prefetchedClass),A.rel=s.rel||void 0),Ft(Od("RouterLink"),A,o.default)}const v=s.target||null,x=AA(s.noRel?"":s.rel,n.externalRelAttribute,d.value||h.value?"noopener noreferrer":"")||null;return s.custom?o.default?o.default({href:c.value,navigate:u,prefetch:y,get route(){if(!c.value)return;const A=new URL(c.value,window.location.href);return{path:A.pathname,fullPath:A.pathname,get query(){return Ug(A.search)},hash:A.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:x,target:v,isExternal:f.value||h.value,isActive:!1,isExactActive:!1}):null:Ft("a",{ref:_,href:c.value||null,rel:x,target:v},(b=o.default)==null?void 0:b.call(o))}}})}const RA=wA(ZM);function qp(n,e){const t=e==="append"?Gl:mc;return qi(n)&&!n.startsWith("http")?n:t(n,!0)}function CA(){const n=pt();if(n._observer)return n._observer;let e=null;const t=new Map,i=(s,o)=>(e||(e=new IntersectionObserver(a=>{for(const l of a){const c=t.get(l.target);(l.isIntersecting||l.intersectionRatio>0)&&c&&c()}})),t.set(s,o),e.observe(s),()=>{t.delete(s),e==null||e.unobserve(s),t.size===0&&(e==null||e.disconnect(),e=null)});return n._observer={observe:i}}const PA=/2g/;function LA(){const n=navigator.connection;return!!(n&&(n.saveData||PA.test(n.effectiveType)))}const DA=vi(()=>{const n=e=>{let t=document.getElementById(e),i=document.getElementById("btn-"+e);t&&navigator.clipboard.writeText(t.textContent||"").then(()=>{if(console.log("复制成功"),i.innerText==="复制成功")return;i.innerText="复制成功";let r=setTimeout(()=>{i.textContent="复制",clearTimeout(r)},3e3)}).catch(()=>console.error("复制失败"))};window.copyCode=n}),IA=[xT,ST,Gb,Xb,qb,$b,jb,MA,EA,DA],qa="<div></div>",eu=new WeakMap;function UA(n){if(eu.has(n))return eu.get(n);const e={...n};return e.render?e.render=(t,i,r,s,o,a)=>{var l;if(s.mounted$??t.mounted$){const c=(l=n.render)==null?void 0:l.bind(t)(t,i,r,s,o,a);return c.children===null||typeof c.children=="string"?ii(c):Ft(c)}return Qc(t._.vnode.el,qa)}:e.template&&(e.template=`
      <template v-if="mounted$">${n.template}</template>
      <template v-else>${qa}</template>
    `),e.setup=(t,i)=>{var l;const r=pt(),s=Wt(r.isHydrating===!1),o=ba();if(r.isHydrating){const c={...o.attrs},u=NA(o);for(const f in c)delete o.attrs[f];_i(()=>{Object.assign(o.attrs,c),o.vnode.dirs=u})}_i(()=>{s.value=!0});const a=((l=n.setup)==null?void 0:l.call(n,t,i))||{};return sc(a)?Promise.resolve(a).then(c=>typeof c!="function"?(c||(c={}),c.mounted$=s,c):(...u)=>{if(s.value||!r.isHydrating){const f=c(...u);return f.children===null||typeof f.children=="string"?ii(f):Ft(f)}return Qc(o==null?void 0:o.vnode.el,qa)}):typeof a=="function"?(...c)=>s.value?Ft(a(...c),i.attrs):Qc(o==null?void 0:o.vnode.el,qa):Object.assign(a,{mounted$:s})},eu.set(n,e),e}function NA(n){if(!n||!n.vnode.dirs)return null;const e=n.vnode.dirs;return n.vnode.dirs=null,e}const OA=ps({name:"NuxtRouteAnnouncer",props:{atomic:{type:Boolean,default:!1},politeness:{type:String,default:"polite"}},setup(n,{slots:e,expose:t}){const{set:i,polite:r,assertive:s,message:o,politeness:a}=bA({politeness:n.politeness});return t({set:i,polite:r,assertive:s,message:o,politeness:a}),()=>Ft("span",{class:"nuxt-route-announcer",style:{position:"absolute"}},Ft("span",{role:"alert","aria-live":a.value,"aria-atomic":n.atomic,style:{border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",width:"1px",overflow:"hidden",position:"absolute","white-space":"nowrap","word-wrap":"normal",margin:"-1px",padding:"0"}},e.default?e.default({message:o.value}):o.value))}}),FA=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},BA={class:"navbar"},kA={class:"container navbar-container"},HA={class:"navbar-brand"},zA={class:"navbar-end"},VA={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},GA={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},WA={__name:"Navbar",setup(n){const e=Wt("light"),t=Wt(!1),i=()=>{e.value=e.value==="light"?"dark":"light",document.documentElement.setAttribute("data-theme",e.value),localStorage.setItem("theme",e.value)};_i(()=>{e.value=localStorage.getItem("theme")||"light"});const r=()=>{t.value=!t.value},s=()=>{t.value=!1};return _i(()=>{document.documentElement.setAttribute("data-theme",e.value)}),(o,a)=>{const l=RA;return cn(),Xo("nav",BA,[jt("div",kA,[jt("div",HA,[ot(l,{to:"/",class:"logo"},{default:Fs(()=>a[0]||(a[0]=[jt("span",{class:"logo-text"},"SunSun Blog",-1)])),_:1}),a[1]||(a[1]=jt("span",{class:"tagline"},"探索技术的奥秘",-1))]),jt("div",{class:as(["navbar-menu",{"is-active":t.value}])},[ot(l,{to:"/",class:"navbar-item",onClick:s},{default:Fs(()=>a[2]||(a[2]=[qo("首页")])),_:1}),ot(l,{to:"/categories",class:"navbar-item",onClick:s},{default:Fs(()=>a[3]||(a[3]=[qo("分类")])),_:1}),ot(l,{to:"/about",class:"navbar-item",onClick:s},{default:Fs(()=>a[4]||(a[4]=[qo("关于")])),_:1})],2),jt("div",zA,[a[8]||(a[8]=ju('<button class="icon-button search-button" aria-label="搜索" data-v-aac435ad><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-aac435ad><circle cx="11" cy="11" r="8" data-v-aac435ad></circle><line x1="21" y1="21" x2="16.65" y2="16.65" data-v-aac435ad></line></svg></button><div class="social-icons" data-v-aac435ad><a href="https://github.com" target="_blank" class="icon-button" aria-label="GitHub" data-v-aac435ad><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-aac435ad><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" data-v-aac435ad></path></svg></a><a href="https://twitter.com" target="_blank" class="icon-button" aria-label="Twitter" data-v-aac435ad><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-aac435ad><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" data-v-aac435ad></path></svg></a></div>',2)),jt("button",{class:"icon-button theme-toggle",onClick:i,"aria-label":"切换主题"},[e.value==="light"?(cn(),Xo("svg",VA,a[5]||(a[5]=[jt("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},null,-1)]))):(cn(),Xo("svg",GA,a[6]||(a[6]=[ju('<circle cx="12" cy="12" r="5" data-v-aac435ad></circle><line x1="12" y1="1" x2="12" y2="3" data-v-aac435ad></line><line x1="12" y1="21" x2="12" y2="23" data-v-aac435ad></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-aac435ad></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-aac435ad></line><line x1="1" y1="12" x2="3" y2="12" data-v-aac435ad></line><line x1="21" y1="12" x2="23" y2="12" data-v-aac435ad></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-aac435ad></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-aac435ad></line>',9)])))]),jt("button",{class:as(["hamburger-button",{"is-active":t.value}]),onClick:r,"aria-label":"菜单"},a[7]||(a[7]=[jt("span",null,null,-1),jt("span",null,null,-1),jt("span",null,null,-1)]),2)])])])}}},XA=FA(WA,[["__scopeId","data-v-aac435ad"]]),qA=ps({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(n){const e=n.renderKey,t=n.route,i={};for(const r in n.route)Object.defineProperty(i,r,{get:()=>e===n.renderKey?n.route[r]:t[r],enumerable:!0});return pr(gc,Ni(i)),()=>Ft(n.vnode,{ref:n.vnodeRef})}}),$A=ps({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(n,{attrs:e,slots:t,expose:i}){const r=pt(),s=Wt(),o=pn(gc,null);let a;i({pageRef:s});const l=pn(dE,null);let c;const u=r.deferHydration();if(r.isHydrating){const h=r.hooks.hookOnce("app:error",u);Mn().beforeEach(h)}n.pageKey&&$s(()=>n.pageKey,(h,d)=>{h!==d&&r.callHook("page:loading:start")});let f=!1;return()=>Ft(yv,{name:n.name,route:n.route,...e},{default:h=>{const d=jA(o,h.route,h.Component),g=o&&o.matched.length===h.route.matched.length;if(!h.Component){if(c&&!g)return c;u();return}if(c&&l&&!l.isCurrent(h.route))return c;if(d&&o&&(!l||l!=null&&l.isCurrent(o)))return g?c:null;const _=yf(h,n.pageKey);!r.isHydrating&&!KA(o,h.route,h.Component)&&a===_&&(r.callHook("page:loading:end"),f=!0),a=_;const m=!!(n.transition??h.route.meta.pageTransition??of),p=m&&YA([n.transition,h.route.meta.pageTransition,of,{onAfterLeave:()=>{r.callHook("page:transition:finish",h.Component)}}].filter(Boolean)),y=n.keepalive??h.route.meta.keepalive??KM;return c=Cb(m&&p,Rb(y,Ft(xg,{suspensible:!0,onPending:()=>r.callHook("page:start",h.Component),onResolve:()=>{Ea(()=>r.callHook("page:finish",h.Component).then(()=>{if(!f)return r.callHook("page:loading:end");f=!1}).finally(u))}},{default:()=>{const v=Ft(qA,{key:_||void 0,vnode:t.default?Ft(Jt,void 0,t.default(h)):h.Component,route:h.route,renderKey:_||void 0,trackRootNodes:m,vnodeRef:s});return y&&(v.type.name=h.Component.type.name||h.Component.type.__name||"RouteProvider"),v}}))).default(),c}})}});function YA(n){const e=n.map(t=>({...t,onAfterLeave:t.onAfterLeave?Yh(t.onAfterLeave):void 0}));return $g(...e)}function jA(n,e,t){if(!n)return!1;const i=e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(t==null?void 0:t.type)});return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=n.matched[s])==null?void 0:a.components)==null?void 0:l.default)})||t&&yf({route:e,Component:t})!==yf({route:n,Component:t})}function KA(n,e,t){return n?e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(t==null?void 0:t.type)})<e.matched.length-1:!1}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jh="174",ZA=0,$p=1,JA=2,Ev=1,QA=2,Ri=3,Sr=0,mn=1,Ui=2,mr=0,Ks=1,Yp=2,jp=3,Kp=4,ew=5,Yr=100,tw=101,nw=102,iw=103,rw=104,sw=200,ow=201,aw=202,lw=203,Mf=204,Ef=205,cw=206,uw=207,fw=208,hw=209,dw=210,pw=211,mw=212,_w=213,gw=214,Tf=0,bf=1,Af=2,ao=3,wf=4,Rf=5,Cf=6,Pf=7,Tv=0,vw=1,xw=2,_r=0,yw=1,Sw=2,Mw=3,Ew=4,Tw=5,bw=6,Aw=7,bv=300,lo=301,co=302,Lf=303,Df=304,Ec=306,If=1e3,Kr=1001,Uf=1002,ti=1003,ww=1004,$a=1005,ui=1006,tu=1007,Zr=1008,Hi=1009,Av=1010,wv=1011,fa=1012,Kh=1013,us=1014,Oi=1015,wa=1016,Zh=1017,Jh=1018,uo=1020,Rv=35902,Cv=1021,Pv=1022,Qn=1023,Lv=1024,Dv=1025,Zs=1026,fo=1027,Iv=1028,Qh=1029,Uv=1030,ed=1031,td=1033,El=33776,Tl=33777,bl=33778,Al=33779,Nf=35840,Of=35841,Ff=35842,Bf=35843,kf=36196,Hf=37492,zf=37496,Vf=37808,Gf=37809,Wf=37810,Xf=37811,qf=37812,$f=37813,Yf=37814,jf=37815,Kf=37816,Zf=37817,Jf=37818,Qf=37819,eh=37820,th=37821,wl=36492,nh=36494,ih=36495,Nv=36283,rh=36284,sh=36285,oh=36286,Rw=3200,Cw=3201,Pw=0,Lw=1,lr="",Hn="srgb",ho="srgb-linear",jl="linear",at="srgb",xs=7680,Zp=519,Dw=512,Iw=513,Uw=514,Ov=515,Nw=516,Ow=517,Fw=518,Bw=519,Jp=35044,Qp="300 es",Fi=2e3,Kl=2001;class Mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let em=1234567;const Zo=Math.PI/180,ha=180/Math.PI;function Eo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function nd(n,e){return(n%e+e)%e}function kw(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Hw(n,e,t){return n!==e?(t-n)/(e-n):0}function Jo(n,e,t){return(1-t)*n+t*e}function zw(n,e,t,i){return Jo(n,e,1-Math.exp(-t*i))}function Vw(n,e=1){return e-Math.abs(nd(n,e*2)-e)}function Gw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Ww(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Xw(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qw(n,e){return n+Math.random()*(e-n)}function $w(n){return n*(.5-Math.random())}function Yw(n){n!==void 0&&(em=n);let e=em+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jw(n){return n*Zo}function Kw(n){return n*ha}function Zw(n){return(n&n-1)===0&&n!==0}function Jw(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Qw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function eR(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Os(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const nu={DEG2RAD:Zo,RAD2DEG:ha,generateUUID:Eo,clamp:qe,euclideanModulo:nd,mapLinear:kw,inverseLerp:Hw,lerp:Jo,damp:zw,pingpong:Vw,smoothstep:Gw,smootherstep:Ww,randInt:Xw,randFloat:qw,randFloatSpread:$w,seededRandom:Yw,degToRad:jw,radToDeg:Kw,isPowerOfTwo:Zw,ceilPowerOfTwo:Jw,floorPowerOfTwo:Qw,setQuaternionFromProperEuler:eR,normalize:sn,denormalize:Os};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],y=r[1],v=r[4],x=r[7],b=r[2],A=r[5],w=r[8];return s[0]=o*_+a*y+l*b,s[3]=o*m+a*v+l*A,s[6]=o*p+a*x+l*w,s[1]=c*_+u*y+f*b,s[4]=c*m+u*v+f*A,s[7]=c*p+u*x+f*w,s[2]=h*_+d*y+g*b,s[5]=h*m+d*v+g*A,s[8]=h*p+d*x+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(iu.makeScale(e,t)),this}rotate(e){return this.premultiply(iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const iu=new Ge;function Fv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tR(){const n=Zl("canvas");return n.style.display="block",n}const tm={};function Wr(n){n in tm||(tm[n]=!0,console.warn(n))}function nR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function iR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const nm=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sR(){const n={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===lr?jl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ho]:{primaries:e,whitePoint:i,transfer:jl,toXYZ:nm,fromXYZ:im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:nm,fromXYZ:im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),n}const Ze=sR();function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ys;class oR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Zl("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ki(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aR=0;class id{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=Eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ru(r[o].image)):s.push(ru(r[o]))}else s=ru(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ru(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lR=0;class _n extends Mo{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Kr,r=Kr,s=ui,o=Zr,a=Qn,l=Hi,c=_n.DEFAULT_ANISOTROPY,u=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=Eo(),this.name="",this.source=new id(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=bv;_n.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(d+1)/2,b=(p+1)/2,A=(u+h)/4,w=(f+_)/4,L=(g+m)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=w/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=L/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=L/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cR extends Mo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new id(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends cR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bv extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uR extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ra{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-a;const p=l*h+c*d+u*g+f*_,y=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,p*y);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*y;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new Q,rm=new Ra;class Ca{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ya.copy(i.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),ja.subVectors(this.max,Co),Ss.subVectors(e.a,Co),Ms.subVectors(e.b,Co),Es.subVectors(e.c,Co),Ki.subVectors(Ms,Ss),Zi.subVectors(Es,Ms),Nr.subVectors(Ss,Es);let t=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Nr.z,Nr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Nr.z,0,-Nr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Nr.y,Nr.x,0];return!ou(t,Ss,Ms,Es,ja)||(t=[1,0,0,0,1,0,0,0,1],!ou(t,Ss,Ms,Es,ja))?!1:(Ka.crossVectors(Ki,Zi),t=[Ka.x,Ka.y,Ka.z],ou(t,Ss,Ms,Es,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],$n=new Q,Ya=new Ca,Ss=new Q,Ms=new Q,Es=new Q,Ki=new Q,Zi=new Q,Nr=new Q,Co=new Q,ja=new Q,Ka=new Q,Or=new Q;function ou(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Or.fromArray(n,s);const a=r.x*Math.abs(Or.x)+r.y*Math.abs(Or.y)+r.z*Math.abs(Or.z),l=e.dot(Or),c=t.dot(Or),u=i.dot(Or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const fR=new Ca,Po=new Q,au=new Q;class Tc{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):fR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const t=Po.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(au.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(au)),this.expandByPoint(Po.copy(e.center).sub(au))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new Q,lu=new Q,Za=new Q,Ji=new Q,cu=new Q,Ja=new Q,uu=new Q;class kv{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){lu.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),Ji.copy(this.origin).sub(lu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=Ji.dot(this.direction),l=-Ji.dot(Za),c=Ji.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(lu).addScaledVector(Za,h),d}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const i=Ti.dot(this.direction),r=Ti.dot(Ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,i,r,s){cu.subVectors(t,e),Ja.subVectors(i,e),uu.crossVectors(cu,Ja);let o=this.direction.dot(uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ji.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(Ji,Ja));if(l<0)return null;const c=a*this.direction.dot(cu.cross(Ji));if(c<0||l+c>o)return null;const u=-a*Ji.dot(uu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hR,e,dR)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Qi.crossVectors(i,bn),Qi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Qi.crossVectors(i,bn)),Qi.normalize(),Qa.crossVectors(bn,Qi),r[0]=Qi.x,r[4]=Qa.x,r[8]=bn.x,r[1]=Qi.y,r[5]=Qa.y,r[9]=bn.y,r[2]=Qi.z,r[6]=Qa.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],y=i[3],v=i[7],x=i[11],b=i[15],A=r[0],w=r[4],L=r[8],E=r[12],T=r[1],D=r[5],I=r[9],U=r[13],G=r[2],Z=r[6],O=r[10],j=r[14],F=r[3],fe=r[7],_e=r[11],Me=r[15];return s[0]=o*A+a*T+l*G+c*F,s[4]=o*w+a*D+l*Z+c*fe,s[8]=o*L+a*I+l*O+c*_e,s[12]=o*E+a*U+l*j+c*Me,s[1]=u*A+f*T+h*G+d*F,s[5]=u*w+f*D+h*Z+d*fe,s[9]=u*L+f*I+h*O+d*_e,s[13]=u*E+f*U+h*j+d*Me,s[2]=g*A+_*T+m*G+p*F,s[6]=g*w+_*D+m*Z+p*fe,s[10]=g*L+_*I+m*O+p*_e,s[14]=g*E+_*U+m*j+p*Me,s[3]=y*A+v*T+x*G+b*F,s[7]=y*w+v*D+x*Z+b*fe,s[11]=y*L+v*I+x*O+b*_e,s[15]=y*E+v*U+x*j+b*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*d-i*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=f*m*c-_*h*c+_*l*d-a*m*d-f*l*p+a*h*p,v=g*h*c-u*m*c-g*l*d+o*m*d+u*l*p-o*h*p,x=u*_*c-g*f*c+g*a*d-o*_*d-u*a*p+o*f*p,b=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,A=t*y+i*v+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*w,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*d-i*l*d)*w,e[4]=v*w,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*p+t*h*p)*w,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*w,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*w,e[8]=x*w,e[9]=(g*f*s-u*_*s-g*i*d+t*_*d+u*i*p-t*f*p)*w,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*p+t*a*p)*w,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*d-t*a*d)*w,e[12]=b*w,e[13]=(u*_*r-g*f*r+g*i*h-t*_*h-u*i*m+t*f*m)*w,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,m=o*f,p=a*f,y=l*c,v=l*u,x=l*f,b=i.x,A=i.y,w=i.z;return r[0]=(1-(_+p))*b,r[1]=(d+x)*b,r[2]=(g-v)*b,r[3]=0,r[4]=(d-x)*A,r[5]=(1-(h+p))*A,r[6]=(m+y)*A,r[7]=0,r[8]=(g+v)*w,r[9]=(m-y)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ts.set(r[0],r[1],r[2]).length();const o=Ts.set(r[4],r[5],r[6]).length(),a=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yn.copy(this);const c=1/s,u=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Fi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Fi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Kl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Fi){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,d=(i+r)*u;let g,_;if(a===Fi)g=(o+s)*f,_=-2*f;else if(a===Kl)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ts=new Q,Yn=new At,hR=new Q(0,0,0),dR=new Q(1,1,1),Qi=new Q,Qa=new Q,bn=new Q,sm=new At,om=new Ra;class zi{constructor(e=0,t=0,i=0,r=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pR=0;const am=new Q,bs=new Ra,bi=new At,el=new Q,Lo=new Q,mR=new Q,_R=new Ra,lm=new Q(1,0,0),cm=new Q(0,1,0),um=new Q(0,0,1),fm={type:"added"},gR={type:"removed"},As={type:"childadded",child:null},fu={type:"childremoved",child:null};class gn extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=Eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Q,t=new zi,i=new Ra,r=new Q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ge}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(lm,e)}rotateY(e){return this.rotateOnAxis(cm,e)}rotateZ(e){return this.rotateOnAxis(um,e)}translateOnAxis(e,t){return am.copy(e).applyQuaternion(this.quaternion),this.position.add(am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lm,e)}translateY(e){return this.translateOnAxis(cm,e)}translateZ(e){return this.translateOnAxis(um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?el.copy(e):el.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Lo,el,this.up):bi.lookAt(el,Lo,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(bi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gR),fu.child=e,this.dispatchEvent(fu),fu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,mR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,_R,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new Q(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new Q,Ai=new Q,hu=new Q,wi=new Q,ws=new Q,Rs=new Q,hm=new Q,du=new Q,pu=new Q,mu=new Q,_u=new bt,gu=new bt,vu=new bt;class Jn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),jn.subVectors(e,t),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){jn.subVectors(r,t),Ai.subVectors(i,t),hu.subVectors(e,t);const o=jn.dot(jn),a=jn.dot(Ai),l=jn.dot(hu),c=Ai.dot(Ai),u=Ai.dot(hu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return _u.setScalar(0),gu.setScalar(0),vu.setScalar(0),_u.fromBufferAttribute(e,t),gu.fromBufferAttribute(e,i),vu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(_u,s.x),o.addScaledVector(gu,s.y),o.addScaledVector(vu,s.z),o}static isFrontFacing(e,t,i,r){return jn.subVectors(i,t),Ai.subVectors(e,t),jn.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,i),Rs.subVectors(s,i),du.subVectors(e,i);const l=ws.dot(du),c=Rs.dot(du);if(l<=0&&c<=0)return t.copy(i);pu.subVectors(e,r);const u=ws.dot(pu),f=Rs.dot(pu);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ws,o);mu.subVectors(e,s);const d=ws.dot(mu),g=Rs.dot(mu);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Rs,a);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return hm.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(hm,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(ws,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},tl={h:0,s:0,l:0};function xu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=nd(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=xu(o,s,e+1/3),this.g=xu(o,s,e),this.b=xu(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Hn){const i=zv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Ze.fromWorkingColorSpace(Yt.copy(this),e),Math.round(qe(Yt.r*255,0,255))*65536+Math.round(qe(Yt.g*255,0,255))*256+Math.round(qe(Yt.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Hn){Ze.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(tl);const i=Jo(er.h,tl.h,t),r=Jo(er.s,tl.s,t),s=Jo(er.l,tl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new st;st.NAMES=zv;let vR=0;class Pa extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=Eo(),this.name="",this.type="Material",this.blending=Ks,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Ef,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==Ef&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vv extends Pa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Tv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new Q,nl=new ct;let xR=0;class di{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jp,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Os(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Os(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Os(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Os(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Os(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),r=sn(r,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jp&&(e.usage=this.usage),e}}class Gv extends di{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wv extends di{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gr extends di{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yR=0;const Bn=new At,yu=new gn,Cs=new Q,An=new Ca,Do=new Ca,Ot=new Q;class $i extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=Eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?Wv:Gv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return yu.lookAt(e),yu.updateMatrix(),this.applyMatrix4(yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gr(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ca);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(An.min,Do.min),An.expandByPoint(Ot),Ot.addVectors(An.max,Do.max),An.expandByPoint(Ot)):(An.expandByPoint(Do.min),An.expandByPoint(Do.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ot.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),Ot.add(Cs)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new Q,l[L]=new Q;const c=new Q,u=new Q,f=new Q,h=new ct,d=new ct,g=new ct,_=new Q,m=new Q;function p(L,E,T){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,T),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[L].add(_),a[E].add(_),a[T].add(_),l[L].add(m),l[E].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,E=y.length;L<E;++L){const T=y[L],D=T.start,I=T.count;for(let U=D,G=D+I;U<G;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new Q,x=new Q,b=new Q,A=new Q;function w(L){b.fromBufferAttribute(r,L),A.copy(b);const E=a[L];v.copy(E),v.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(A,E);const D=x.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,D)}for(let L=0,E=y.length;L<E;++L){const T=y[L],D=T.start,I=T.count;for(let U=D,G=D+I;U<G;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new Q,s=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,f=new Q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new di(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dm=new At,Fr=new kv,il=new Tc,pm=new Q,rl=new Q,sl=new Q,ol=new Q,Su=new Q,al=new Q,mm=new Q,ll=new Q;class Bi extends gn{constructor(e=new $i,t=new Vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){al.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Su.fromBufferAttribute(f,e),o?al.addScaledVector(Su,u):al.addScaledVector(Su.sub(t),u))}t.add(al)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(il.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(il,pm)===null||Fr.origin.distanceToSquared(pm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(dm),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,b=v;x<b;x+=3){const A=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);r=cl(this,p,e,i,c,u,f,A,w,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=cl(this,o,e,i,c,u,f,y,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),v=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=y,b=v;x<b;x+=3){const A=x,w=x+1,L=x+2;r=cl(this,p,e,i,c,u,f,A,w,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const y=m,v=m+1,x=m+2;r=cl(this,o,e,i,c,u,f,y,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function SR(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Sr,a),l===null)return null;ll.copy(a),ll.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:n}}function cl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,rl),n.getVertexPosition(l,sl),n.getVertexPosition(c,ol);const u=SR(n,e,t,i,rl,sl,ol,mm);if(u){const f=new Q;Jn.getBarycoord(mm,rl,sl,ol,f),r&&(u.uv=Jn.getInterpolatedAttribute(r,a,l,c,f,new ct)),s&&(u.uv1=Jn.getInterpolatedAttribute(s,a,l,c,f,new ct)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Q,materialIndex:0};Jn.getNormal(rl,sl,ol,h.normal),u.face=h,u.barycoord=f}return u}class La extends $i{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gr(c,3)),this.setAttribute("normal",new gr(u,3)),this.setAttribute("uv",new gr(f,2));function g(_,m,p,y,v,x,b,A,w,L,E){const T=x/w,D=b/L,I=x/2,U=b/2,G=A/2,Z=w+1,O=L+1;let j=0,F=0;const fe=new Q;for(let _e=0;_e<O;_e++){const Me=_e*D-U;for(let Ce=0;Ce<Z;Ce++){const Xe=Ce*T-I;fe[_]=Xe*y,fe[m]=Me*v,fe[p]=G,c.push(fe.x,fe.y,fe.z),fe[_]=0,fe[m]=0,fe[p]=A>0?1:-1,u.push(fe.x,fe.y,fe.z),f.push(Ce/w),f.push(1-_e/L),j+=1}}for(let _e=0;_e<L;_e++)for(let Me=0;Me<w;Me++){const Ce=h+Me+Z*_e,Xe=h+Me+Z*(_e+1),ne=h+(Me+1)+Z*(_e+1),de=h+(Me+1)+Z*_e;l.push(Ce,Xe,de),l.push(Xe,ne,de),F+=6}a.addGroup(d,F,E),d+=F,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=po(n[t]);for(const r in i)e[r]=i[r]}return e}function MR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const ER={clone:po,merge:on};var TR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Pa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TR,this.fragmentShader=bR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=MR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qv extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const tr=new Q,_m=new ct,gm=new ct;class zn extends qv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,_m,gm),t.subVectors(gm,_m)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ps=-90,Ls=1;class AR extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Ps,Ls,e,t);r.layers=this.layers,this.add(r);const s=new zn(Ps,Ls,e,t);s.layers=this.layers,this.add(s);const o=new zn(Ps,Ls,e,t);o.layers=this.layers,this.add(o);const a=new zn(Ps,Ls,e,t);a.layers=this.layers,this.add(a);const l=new zn(Ps,Ls,e,t);l.layers=this.layers,this.add(l);const c=new zn(Ps,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class $v extends _n{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wR extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $v(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ui}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:mr});s.uniforms.tEquirect.value=t;const o=new Bi(r,s),a=t.minFilter;return t.minFilter===Zr&&(t.minFilter=ui),new AR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class ul extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RR={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(RR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class CR extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Eu=new Q,PR=new Q,LR=new Ge;class Xr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Eu.subVectors(i,t).cross(PR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||LR.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Tc,fl=new Q;class Yv{constructor(e=new Xr,t=new Xr,i=new Xr,r=new Xr,s=new Xr,o=new Xr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,h-c,m-d,x-p).normalize(),i[1].setComponents(l+s,h+c,m+d,x+p).normalize(),i[2].setComponents(l+o,h+u,m+g,x+y).normalize(),i[3].setComponents(l-o,h-u,m-g,x-y).normalize(),i[4].setComponents(l-a,h-f,m-_,x-v).normalize(),t===Fi)i[5].setComponents(l+a,h+f,m+_,x+v).normalize();else if(t===Kl)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fl.x=r.normal.x>0?e.max.x:e.min.x,fl.y=r.normal.y>0?e.max.y:e.min.y,fl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jv extends Pa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vm=new At,ah=new kv,hl=new Tc,dl=new Q;class DR extends gn{constructor(e=new $i,t=new jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;vm.copy(r).invert(),ah.copy(e.ray).applyMatrix4(vm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,_=d;g<_;g++){const m=c.getX(g);dl.fromBufferAttribute(f,m),xm(dl,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,_=d;g<_;g++)dl.fromBufferAttribute(f,g),xm(dl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function xm(n,e,t,i,r,s,o){const a=ah.distanceSqToPoint(n);if(a<t){const l=new Q;ah.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kv extends _n{constructor(e,t,i,r,s,o,a,l,c,u=Zs){if(u!==Zs&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zs&&(i=us),i===void 0&&u===fo&&(i=uo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new id(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bc extends $i{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const y=p*h-o;for(let v=0;v<c;v++){const x=v*f-s;g.push(x,-y,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const v=y+c*p,x=y+c*(p+1),b=y+1+c*(p+1),A=y+1+c*p;d.push(v,x,A),d.push(x,b,A)}this.setIndex(d),this.setAttribute("position",new gr(g,3)),this.setAttribute("normal",new gr(_,3)),this.setAttribute("uv",new gr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class IR extends Pa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UR extends Pa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class NR extends qv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class OR extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function ym(n,e,t,i){const r=FR(i);switch(t){case Cv:return n*e;case Lv:return n*e;case Dv:return n*e*2;case Iv:return n*e/r.components*r.byteLength;case Qh:return n*e/r.components*r.byteLength;case Uv:return n*e*2/r.components*r.byteLength;case ed:return n*e*2/r.components*r.byteLength;case Pv:return n*e*3/r.components*r.byteLength;case Qn:return n*e*4/r.components*r.byteLength;case td:return n*e*4/r.components*r.byteLength;case El:case Tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Of:case Bf:return Math.max(n,16)*Math.max(e,8)/4;case Nf:case Ff:return Math.max(n,8)*Math.max(e,8)/2;case kf:case Hf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wl:case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Nv:case rh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FR(n){switch(n){case Hi:case Av:return{byteLength:1,components:1};case fa:case wv:case wa:return{byteLength:2,components:1};case Zh:case Jh:return{byteLength:2,components:4};case us:case Kh:case Oi:return{byteLength:4,components:1};case Rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function BR(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var kR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$R=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,YR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,QR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,l1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,c1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,u1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m1="gl_FragColor = linearToOutputTexel( gl_FragColor );",_1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,D1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Y1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,tC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,iC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_C=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,MC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,TC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,FC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$C=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,QC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_P=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:kR,alphahash_pars_fragment:HR,alphamap_fragment:zR,alphamap_pars_fragment:VR,alphatest_fragment:GR,alphatest_pars_fragment:WR,aomap_fragment:XR,aomap_pars_fragment:qR,batching_pars_vertex:$R,batching_vertex:YR,begin_vertex:jR,beginnormal_vertex:KR,bsdfs:ZR,iridescence_fragment:JR,bumpmap_pars_fragment:QR,clipping_planes_fragment:e1,clipping_planes_pars_fragment:t1,clipping_planes_pars_vertex:n1,clipping_planes_vertex:i1,color_fragment:r1,color_pars_fragment:s1,color_pars_vertex:o1,color_vertex:a1,common:l1,cube_uv_reflection_fragment:c1,defaultnormal_vertex:u1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:d1,emissivemap_pars_fragment:p1,colorspace_fragment:m1,colorspace_pars_fragment:_1,envmap_fragment:g1,envmap_common_pars_fragment:v1,envmap_pars_fragment:x1,envmap_pars_vertex:y1,envmap_physical_pars_fragment:L1,envmap_vertex:S1,fog_vertex:M1,fog_pars_vertex:E1,fog_fragment:T1,fog_pars_fragment:b1,gradientmap_pars_fragment:A1,lightmap_pars_fragment:w1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:C1,lights_pars_begin:P1,lights_toon_fragment:D1,lights_toon_pars_fragment:I1,lights_phong_fragment:U1,lights_phong_pars_fragment:N1,lights_physical_fragment:O1,lights_physical_pars_fragment:F1,lights_fragment_begin:B1,lights_fragment_maps:k1,lights_fragment_end:H1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:V1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:W1,map_fragment:X1,map_pars_fragment:q1,map_particle_fragment:$1,map_particle_pars_fragment:Y1,metalnessmap_fragment:j1,metalnessmap_pars_fragment:K1,morphinstance_vertex:Z1,morphcolor_vertex:J1,morphnormal_vertex:Q1,morphtarget_pars_vertex:eC,morphtarget_vertex:tC,normal_fragment_begin:nC,normal_fragment_maps:iC,normal_pars_fragment:rC,normal_pars_vertex:sC,normal_vertex:oC,normalmap_pars_fragment:aC,clearcoat_normal_fragment_begin:lC,clearcoat_normal_fragment_maps:cC,clearcoat_pars_fragment:uC,iridescence_pars_fragment:fC,opaque_fragment:hC,packing:dC,premultiplied_alpha_fragment:pC,project_vertex:mC,dithering_fragment:_C,dithering_pars_fragment:gC,roughnessmap_fragment:vC,roughnessmap_pars_fragment:xC,shadowmap_pars_fragment:yC,shadowmap_pars_vertex:SC,shadowmap_vertex:MC,shadowmask_pars_fragment:EC,skinbase_vertex:TC,skinning_pars_vertex:bC,skinning_vertex:AC,skinnormal_vertex:wC,specularmap_fragment:RC,specularmap_pars_fragment:CC,tonemapping_fragment:PC,tonemapping_pars_fragment:LC,transmission_fragment:DC,transmission_pars_fragment:IC,uv_pars_fragment:UC,uv_pars_vertex:NC,uv_vertex:OC,worldpos_vertex:FC,background_vert:BC,background_frag:kC,backgroundCube_vert:HC,backgroundCube_frag:zC,cube_vert:VC,cube_frag:GC,depth_vert:WC,depth_frag:XC,distanceRGBA_vert:qC,distanceRGBA_frag:$C,equirect_vert:YC,equirect_frag:jC,linedashed_vert:KC,linedashed_frag:ZC,meshbasic_vert:JC,meshbasic_frag:QC,meshlambert_vert:eP,meshlambert_frag:tP,meshmatcap_vert:nP,meshmatcap_frag:iP,meshnormal_vert:rP,meshnormal_frag:sP,meshphong_vert:oP,meshphong_frag:aP,meshphysical_vert:lP,meshphysical_frag:cP,meshtoon_vert:uP,meshtoon_frag:fP,points_vert:hP,points_frag:dP,shadow_vert:pP,shadow_frag:mP,sprite_vert:_P,sprite_frag:gP},ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},li={basic:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:on([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:on([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:on([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new st(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:on([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:on([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:on([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:on([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:on([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:on([ve.common,ve.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:on([ve.lights,ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};li.physical={uniforms:on([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const pl={r:0,b:0,g:0},kr=new zi,vP=new At;function xP(n,e,t,i,r,s,o){const a=new st(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const b=g(v);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===Ec)?(u===void 0&&(u=new Bi(new La(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:po(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),kr.copy(x.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(vP.makeRotationFromEuler(kr)),u.material.toneMapped=Ze.getTransfer(b.colorSpace)!==at,(f!==b||h!==b.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Bi(new bc(2,2),new Mr({name:"BackgroundMaterial",uniforms:po(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(b.colorSpace)!==at,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,x){v.getRGB(pl,Xv(n)),i.buffers.color.setClear(pl.r,pl.g,pl.b,x,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:m,dispose:y}}function yP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,D,I,U,G){let Z=!1;const O=f(U,I,D);s!==O&&(s=O,c(s.object)),Z=d(T,U,I,G),Z&&g(T,U,I,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(T,D,I,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,D,I){const U=I.wireframe===!0;let G=i[T.id];G===void 0&&(G={},i[T.id]=G);let Z=G[D.id];Z===void 0&&(Z={},G[D.id]=Z);let O=Z[U];return O===void 0&&(O=h(l()),Z[U]=O),O}function h(T){const D=[],I=[],U=[];for(let G=0;G<t;G++)D[G]=0,I[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:U,object:T,attributes:{},index:null}}function d(T,D,I,U){const G=s.attributes,Z=D.attributes;let O=0;const j=I.getAttributes();for(const F in j)if(j[F].location>=0){const _e=G[F];let Me=Z[F];if(Me===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),_e===void 0||_e.attribute!==Me||Me&&_e.data!==Me.data)return!0;O++}return s.attributesNum!==O||s.index!==U}function g(T,D,I,U){const G={},Z=D.attributes;let O=0;const j=I.getAttributes();for(const F in j)if(j[F].location>=0){let _e=Z[F];_e===void 0&&(F==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),F==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor));const Me={};Me.attribute=_e,_e&&_e.data&&(Me.data=_e.data),G[F]=Me,O++}s.attributes=G,s.attributesNum=O,s.index=U}function _(){const T=s.newAttributes;for(let D=0,I=T.length;D<I;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const I=s.newAttributes,U=s.enabledAttributes,G=s.attributeDivisors;I[T]=1,U[T]===0&&(n.enableVertexAttribArray(T),U[T]=1),G[T]!==D&&(n.vertexAttribDivisor(T,D),G[T]=D)}function y(){const T=s.newAttributes,D=s.enabledAttributes;for(let I=0,U=D.length;I<U;I++)D[I]!==T[I]&&(n.disableVertexAttribArray(I),D[I]=0)}function v(T,D,I,U,G,Z,O){O===!0?n.vertexAttribIPointer(T,D,I,G,Z):n.vertexAttribPointer(T,D,I,U,G,Z)}function x(T,D,I,U){_();const G=U.attributes,Z=I.getAttributes(),O=D.defaultAttributeValues;for(const j in Z){const F=Z[j];if(F.location>=0){let fe=G[j];if(fe===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),fe!==void 0){const _e=fe.normalized,Me=fe.itemSize,Ce=e.get(fe);if(Ce===void 0)continue;const Xe=Ce.buffer,ne=Ce.type,de=Ce.bytesPerElement,xe=ne===n.INT||ne===n.UNSIGNED_INT||fe.gpuType===Kh;if(fe.isInterleavedBufferAttribute){const B=fe.data,re=B.stride,ae=fe.offset;if(B.isInstancedInterleavedBuffer){for(let oe=0;oe<F.locationSize;oe++)p(F.location+oe,B.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let oe=0;oe<F.locationSize;oe++)m(F.location+oe);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let oe=0;oe<F.locationSize;oe++)v(F.location+oe,Me/F.locationSize,ne,_e,re*de,(ae+Me/F.locationSize*oe)*de,xe)}else{if(fe.isInstancedBufferAttribute){for(let B=0;B<F.locationSize;B++)p(F.location+B,fe.meshPerAttribute);T.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<F.locationSize;B++)m(F.location+B);n.bindBuffer(n.ARRAY_BUFFER,Xe);for(let B=0;B<F.locationSize;B++)v(F.location+B,Me/F.locationSize,ne,_e,Me*de,Me/F.locationSize*B*de,xe)}}else if(O!==void 0){const _e=O[j];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(F.location,_e);break;case 3:n.vertexAttrib3fv(F.location,_e);break;case 4:n.vertexAttrib4fv(F.location,_e);break;default:n.vertexAttrib1fv(F.location,_e)}}}}y()}function b(){L();for(const T in i){const D=i[T];for(const I in D){const U=D[I];for(const G in U)u(U[G].object),delete U[G];delete D[I]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const D=i[T.id];for(const I in D){const U=D[I];for(const G in U)u(U[G].object),delete U[G];delete D[I]}delete i[T.id]}function w(T){for(const D in i){const I=i[D];if(I[T.id]===void 0)continue;const U=I[T.id];for(const G in U)u(U[G].object),delete U[G];delete I[T.id]}}function L(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function SP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let g=0;g<f;g++)d+=u[g];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function MP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Hi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Oi&&!L)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function EP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Xr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,v=y*4;let x=p.clippingState||null;l.value=x,x=u(g,h,v,d);for(let b=0;b!==v;++b)x[b]=t[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=d;v!==_;++v,x+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function TP(n){let e=new WeakMap;function t(o,a){return a===Lf?o.mapping=lo:a===Df&&(o.mapping=co),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lf||a===Df)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wR(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Hs=4,Sm=[.125,.215,.35,.446,.526,.582],jr=20,Tu=new NR,Mm=new st;let bu=null,Au=0,wu=0,Ru=!1;const qr=(1+Math.sqrt(5))/2,Ds=1/qr,Em=[new Q(-qr,Ds,0),new Q(qr,Ds,0),new Q(-Ds,0,qr),new Q(Ds,0,qr),new Q(0,qr,-Ds),new Q(0,qr,Ds),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],bP=new Q;class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=bP}=s;bu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Au,wu),this._renderer.xr.enabled=Ru,e.scissorTest=!1,ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),wu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:wa,format:Qn,colorSpace:ho,depthBuffer:!1},r=bm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AP(s)),this._blurMaterial=wP(s,e,t)}return r}_compileMaterial(e){const t=new Bi(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,i,r,s){const l=new zn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Mm),f.toneMapping=_r,f.autoClear=!1;const g=new Vv({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new Bi(new La,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Mm),m=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const x=this._cubeSize;ml(r,v*x,y>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===lo||e.mapping===co;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ml(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Em[(r-s-1)%Em.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bi(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*jr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):jr;m>jr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jr}`);const p=[];let y=0;for(let w=0;w<jr;++w){const L=w/_,E=Math.exp(-L*L/2);p.push(E),w===0?y+=E:w<m&&(y+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const x=this._sizeLods[r],b=3*x*(r>v-Hs?r-v+Hs:0),A=4*(this._cubeSize-x);ml(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(f,Tu)}}function AP(n){const e=[],t=[],i=[];let r=n;const s=n-Hs+1+Sm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Hs?l=Sm[o-n+Hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*d),v=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,L=A>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];y.set(E,_*g*A),v.set(h,m*g*A);const T=[A,A,A,A,A,A];x.set(T,p*g*A)}const b=new $i;b.setAttribute("position",new di(y,_)),b.setAttribute("uv",new di(v,m)),b.setAttribute("faceIndex",new di(x,p)),e.push(b),r>Hs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function bm(n,e,t){const i=new fs(n,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ml(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wP(n,e,t){const i=new Float32Array(jr),r=new Q(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Am(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function wm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function rd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lf||l===Df,u=l===lo||l===co;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Tm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Tm(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function CP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PP(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,x=y.length;v<x;v+=3){const b=y[v+0],A=y[v+1],w=y[v+2];h.push(b,A,A,w,w,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const b=v+0,A=v+1,w=v+2;h.push(b,A,A,w,w,b)}}else return;const m=new(Fv(h)?Wv:Gv)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function LP(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function c(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function u(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*_[y];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function DP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IP(n,e,t){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){w.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;d===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let x=a.attributes.position.count*v,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*b*4*f),w=new Bv(A,x,b,f);w.type=Oi,w.needsUpdate=!0;const L=v*4;for(let T=0;T<f;T++){const D=m[T],I=p[T],U=y[T],G=x*b*4*T;for(let Z=0;Z<D.count;Z++){const O=Z*L;d===!0&&(r.fromBufferAttribute(D,Z),A[G+O+0]=r.x,A[G+O+1]=r.y,A[G+O+2]=r.z,A[G+O+3]=0),g===!0&&(r.fromBufferAttribute(I,Z),A[G+O+4]=r.x,A[G+O+5]=r.y,A[G+O+6]=r.z,A[G+O+7]=0),_===!0&&(r.fromBufferAttribute(U,Z),A[G+O+8]=r.x,A[G+O+9]=r.y,A[G+O+10]=r.z,A[G+O+11]=U.itemSize===4?r.w:1)}}h={count:f,texture:w,size:new ct(x,b)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function UP(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jv=new _n,Rm=new Kv(1,1),Qv=new Bv,e0=new uR,t0=new $v,Cm=[],Pm=[],Lm=new Float32Array(16),Dm=new Float32Array(9),Im=new Float32Array(4);function To(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cm[r];if(s===void 0&&(s=new Float32Array(r),Cm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ac(n,e){let t=Pm[e];t===void 0&&(t=new Int32Array(e),Pm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function FP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function BP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function kP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Im.set(i),n.uniformMatrix2fv(this.addr,!1,Im),Nt(t,i)}}function HP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Dm.set(i),n.uniformMatrix3fv(this.addr,!1,Dm),Nt(t,i)}}function zP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;Lm.set(i),n.uniformMatrix4fv(this.addr,!1,Lm),Nt(t,i)}}function VP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function GP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function WP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function XP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function qP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function YP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function jP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function KP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Rm.compareFunction=Ov,s=Rm):s=Jv,t.setTexture2D(e||s,r)}function ZP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||e0,r)}function JP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||t0,r)}function QP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qv,r)}function eL(n){switch(n){case 5126:return NP;case 35664:return OP;case 35665:return FP;case 35666:return BP;case 35674:return kP;case 35675:return HP;case 35676:return zP;case 5124:case 35670:return VP;case 35667:case 35671:return GP;case 35668:case 35672:return WP;case 35669:case 35673:return XP;case 5125:return qP;case 36294:return $P;case 36295:return YP;case 36296:return jP;case 35678:case 36198:case 36298:case 36306:case 35682:return KP;case 35679:case 36299:case 36307:return ZP;case 35680:case 36300:case 36308:case 36293:return JP;case 36289:case 36303:case 36311:case 36292:return QP}}function tL(n,e){n.uniform1fv(this.addr,e)}function nL(n,e){const t=To(e,this.size,2);n.uniform2fv(this.addr,t)}function iL(n,e){const t=To(e,this.size,3);n.uniform3fv(this.addr,t)}function rL(n,e){const t=To(e,this.size,4);n.uniform4fv(this.addr,t)}function sL(n,e){const t=To(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oL(n,e){const t=To(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aL(n,e){const t=To(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lL(n,e){n.uniform1iv(this.addr,e)}function cL(n,e){n.uniform2iv(this.addr,e)}function uL(n,e){n.uniform3iv(this.addr,e)}function fL(n,e){n.uniform4iv(this.addr,e)}function hL(n,e){n.uniform1uiv(this.addr,e)}function dL(n,e){n.uniform2uiv(this.addr,e)}function pL(n,e){n.uniform3uiv(this.addr,e)}function mL(n,e){n.uniform4uiv(this.addr,e)}function _L(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jv,s[o])}function gL(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||e0,s[o])}function vL(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||t0,s[o])}function xL(n,e,t){const i=this.cache,r=e.length,s=Ac(t,r);Ut(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qv,s[o])}function yL(n){switch(n){case 5126:return tL;case 35664:return nL;case 35665:return iL;case 35666:return rL;case 35674:return sL;case 35675:return oL;case 35676:return aL;case 5124:case 35670:return lL;case 35667:case 35671:return cL;case 35668:case 35672:return uL;case 35669:case 35673:return fL;case 5125:return hL;case 36294:return dL;case 36295:return pL;case 36296:return mL;case 35678:case 36198:case 36298:case 36306:case 35682:return _L;case 35679:case 36299:case 36307:return gL;case 35680:case 36300:case 36308:case 36293:return vL;case 36289:case 36303:case 36311:case 36292:return xL}}class SL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=eL(t.type)}}class ML{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yL(t.type)}}class EL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Um(n,e){n.seq.push(e),n.map[e.id]=e}function TL(n,e,t){const i=n.name,r=i.length;for(Cu.lastIndex=0;;){const s=Cu.exec(i),o=Cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Um(t,c===void 0?new SL(a,n,e):new ML(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new EL(a),Um(t,f)),t=f}}}class Rl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);TL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Nm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const bL=37297;let AL=0;function wL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Om=new Ge;function RL(n){Ze._getMatrix(Om,Ze.workingColorSpace,n);const e=`mat3( ${Om.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case jl:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wL(n.getShaderSource(e),o)}else return r}function CL(n,e){const t=RL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function PL(n,e){let t;switch(e){case yw:t="Linear";break;case Sw:t="Reinhard";break;case Mw:t="Cineon";break;case Ew:t="ACESFilmic";break;case bw:t="AgX";break;case Aw:t="Neutral";break;case Tw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _l=new Q;function LL(){Ze.getLuminanceCoefficients(_l);const n=_l.x.toFixed(4),e=_l.y.toFixed(4),t=_l.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function IL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function UL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Oo(n){return n!==""}function Bm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NL=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(n){return n.replace(NL,FL)}const OL=new Map;function FL(n,e){let t=We[e];if(t===void 0){const i=OL.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const BL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(n){return n.replace(BL,kL)}function kL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ev?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===QA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function zL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function GL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tv:e="ENVMAP_BLENDING_MULTIPLY";break;case vw:e="ENVMAP_BLENDING_MIX";break;case xw:e="ENVMAP_BLENDING_ADD";break}return e}function WL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function XL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HL(t),c=zL(t),u=VL(t),f=GL(t),h=WL(t),d=DL(t),g=IL(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oo).join(`
`),p.length>0&&(p+=`
`)):(m=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),p=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?We.tonemapping_pars_fragment:"",t.toneMapping!==_r?PL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,CL("linearToOutputTexel",t.outputColorSpace),LL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),o=lh(o),o=Bm(o,t),o=km(o,t),a=lh(a),a=Bm(a,t),a=km(a,t),o=Hm(o),a=Hm(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=y+m+o,x=y+p+a,b=Nm(r,r.VERTEX_SHADER,v),A=Nm(r,r.FRAGMENT_SHADER,x);r.attachShader(_,b),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(D){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),U=r.getShaderInfoLog(b).trim(),G=r.getShaderInfoLog(A).trim();let Z=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,A);else{const j=Fm(r,b,"vertex"),F=Fm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+j+`
`+F)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||G==="")&&(O=!1);O&&(D.diagnostics={runnable:Z,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(b),r.deleteShader(A),L=new Rl(r,_),E=UL(r,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,bL)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=AL++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let qL=0;class $L{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new YL(e),t.set(e,i)),i}}class YL{constructor(e){this.id=qL++,this.code=e,this.usedTimes=0}}function jL(n,e,t,i,r,s,o){const a=new Hv,l=new $L,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,D,I,U){const G=I.fog,Z=U.geometry,O=E.isMeshStandardMaterial?I.environment:null,j=(E.isMeshStandardMaterial?t:e).get(E.envMap||O),F=j&&j.mapping===Ec?j.image.height:null,fe=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const _e=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=_e!==void 0?_e.length:0;let Ce=0;Z.morphAttributes.position!==void 0&&(Ce=1),Z.morphAttributes.normal!==void 0&&(Ce=2),Z.morphAttributes.color!==void 0&&(Ce=3);let Xe,ne,de,xe;if(fe){const rt=li[fe];Xe=rt.vertexShader,ne=rt.fragmentShader}else Xe=E.vertexShader,ne=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);const B=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ae=U.isInstancedMesh===!0,oe=U.isBatchedMesh===!0,Pe=!!E.map,Oe=!!E.matcap,P=!!j,M=!!E.aoMap,W=!!E.lightMap,ee=!!E.bumpMap,$=!!E.normalMap,Y=!!E.displacementMap,ce=!!E.emissiveMap,te=!!E.metalnessMap,R=!!E.roughnessMap,S=E.anisotropy>0,N=E.clearcoat>0,z=E.dispersion>0,q=E.iridescence>0,X=E.sheen>0,pe=E.transmission>0,ue=S&&!!E.anisotropyMap,he=N&&!!E.clearcoatMap,Be=N&&!!E.clearcoatNormalMap,le=N&&!!E.clearcoatRoughnessMap,ge=q&&!!E.iridescenceMap,Re=q&&!!E.iridescenceThicknessMap,De=X&&!!E.sheenColorMap,be=X&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Ie=!!E.specularColorMap,it=!!E.specularIntensityMap,k=pe&&!!E.transmissionMap,ye=pe&&!!E.thicknessMap,ie=!!E.gradientMap,se=!!E.alphaMap,Te=E.alphaTest>0,Ee=!!E.alphaHash,Ve=!!E.extensions;let St=_r;E.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(St=n.toneMapping);const qt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Xe,fragmentShader:ne,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:oe,batchingColor:oe&&U._colorsTexture!==null,instancing:ae,instancingColor:ae&&U.instanceColor!==null,instancingMorph:ae&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:ho,alphaToCoverage:!!E.alphaToCoverage,map:Pe,matcap:Oe,envMap:P,envMapMode:P&&j.mapping,envMapCubeUVHeight:F,aoMap:M,lightMap:W,bumpMap:ee,normalMap:$,displacementMap:h&&Y,emissiveMap:ce,normalMapObjectSpace:$&&E.normalMapType===Lw,normalMapTangentSpace:$&&E.normalMapType===Pw,metalnessMap:te,roughnessMap:R,anisotropy:S,anisotropyMap:ue,clearcoat:N,clearcoatMap:he,clearcoatNormalMap:Be,clearcoatRoughnessMap:le,dispersion:z,iridescence:q,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:X,sheenColorMap:De,sheenRoughnessMap:be,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:it,transmission:pe,transmissionMap:k,thicknessMap:ye,gradientMap:ie,opaque:E.transparent===!1&&E.blending===Ks&&E.alphaToCoverage===!1,alphaMap:se,alphaTest:Te,alphaHash:Ee,combine:E.combine,mapUv:Pe&&_(E.map.channel),aoMapUv:M&&_(E.aoMap.channel),lightMapUv:W&&_(E.lightMap.channel),bumpMapUv:ee&&_(E.bumpMap.channel),normalMapUv:$&&_(E.normalMap.channel),displacementMapUv:Y&&_(E.displacementMap.channel),emissiveMapUv:ce&&_(E.emissiveMap.channel),metalnessMapUv:te&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:ue&&_(E.anisotropyMap.channel),clearcoatMapUv:he&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:be&&_(E.sheenRoughnessMap.channel),specularMapUv:Fe&&_(E.specularMap.channel),specularColorMapUv:Ie&&_(E.specularColorMap.channel),specularIntensityMapUv:it&&_(E.specularIntensityMap.channel),transmissionMapUv:k&&_(E.transmissionMap.channel),thicknessMapUv:ye&&_(E.thicknessMap.channel),alphaMapUv:se&&_(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&($||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!Z.attributes.uv&&(Pe||se),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:U.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,decodeVideoTexture:Pe&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===at,decodeVideoTextureEmissive:ce&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===at,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ui,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ve&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&E.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function p(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)T.push(D),T.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(y(T,E),v(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function y(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function v(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const T=g[E.type];let D;if(T){const I=li[T];D=ER.clone(I.uniforms)}else D=E.uniforms;return D}function b(E,T){let D;for(let I=0,U=u.length;I<U;I++){const G=u[I];if(G.cacheKey===T){D=G,++D.usedTimes;break}}return D===void 0&&(D=new XL(n,T,E,s),u.push(D)),D}function A(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function w(E){l.remove(E)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:L}}function KL(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ZL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Vm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||ZL),i.length>1&&i.sort(h||Vm),r.length>1&&r.sort(h||Vm)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function JL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Gm,n.set(i,[o])):r>=s.length?(o=new Gm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function QL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new st};break;case"SpotLight":t={position:new Q,direction:new Q,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function eD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let tD=0;function nD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function iD(n){const e=new QL,t=eD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const r=new Q,s=new At,o=new At;function a(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,y=0,v=0,x=0,b=0,A=0,w=0;c.sort(nD);for(let E=0,T=c.length;E<T;E++){const D=c[E],I=D.color,U=D.intensity,G=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=I.r*U,f+=I.g*U,h+=I.b*U;else if(D.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(D.sh.coefficients[O],U);w++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,F=t.get(D);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.directionalShadow[d]=F,i.directionalShadowMap[d]=Z,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=O,d++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(I).multiplyScalar(U),O.distance=G,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,i.spot[_]=O;const j=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,j.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[_]=j.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=Z,x++}_++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(I).multiplyScalar(U),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=O,m++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const j=D.shadow,F=t.get(D);F.shadowIntensity=j.intensity,F.shadowBias=j.bias,F.shadowNormalBias=j.normalBias,F.shadowRadius=j.radius,F.shadowMapSize=j.mapSize,F.shadowCameraNear=j.camera.near,F.shadowCameraFar=j.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=O,g++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(U),O.groundColor.copy(D.groundColor).multiplyScalar(U),i.hemi[p]=O,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==v||L.numSpotShadows!==x||L.numSpotMaps!==b||L.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=v,L.numSpotShadows=x,L.numSpotMaps=b,L.numLightProbes=w,i.version=tD++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const v=c[p];if(v.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(v.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Wm(n){const e=new iD(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wm(n),e.set(r,[a])):s>=o.length?(a=new Wm(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const sD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function aD(n,e,t){let i=new Yv;const r=new ct,s=new ct,o=new bt,a=new IR({depthPacking:Cw}),l=new UR,c={},u=t.maxTextureSize,f={[Sr]:mn,[mn]:Sr,[Ui]:Ui},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:sD,fragmentShader:oD}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new $i;g.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Bi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ev;let p=this.type;this.render=function(A,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),I=n.state;I.setBlending(mr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==Ri&&this.type===Ri,G=p===Ri&&this.type!==Ri;for(let Z=0,O=A.length;Z<O;Z++){const j=A[Z],F=j.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const fe=F.getFrameExtents();if(r.multiply(fe),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/fe.x),r.x=s.x*fe.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/fe.y),r.y=s.y*fe.y,F.mapSize.y=s.y)),F.map===null||U===!0||G===!0){const Me=this.type!==Ri?{minFilter:ti,magFilter:ti}:{};F.map!==null&&F.map.dispose(),F.map=new fs(r.x,r.y,Me),F.map.texture.name=j.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const _e=F.getViewportCount();for(let Me=0;Me<_e;Me++){const Ce=F.getViewport(Me);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),I.viewport(o),F.updateMatrices(j,Me),i=F.getFrustum(),x(w,L,F.camera,j,this.type)}F.isPointLightShadow!==!0&&this.type===Ri&&y(F,L),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,T,D)};function y(A,w){const L=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new fs(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,L,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,L,d,_,null)}function v(A,w,L,E){let T=null;const D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)T=D;else if(T=L.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=T.uuid,U=w.uuid;let G=c[I];G===void 0&&(G={},c[I]=G);let Z=G[U];Z===void 0&&(Z=T.clone(),G[U]=Z,w.addEventListener("dispose",b)),T=Z}if(T.visible=w.visible,T.wireframe=w.wireframe,E===Ri?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:f[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,L.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const I=n.properties.get(T);I.light=L}return T}function x(A,w,L,E,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Ri)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const U=e.update(A),G=A.material;if(Array.isArray(G)){const Z=U.groups;for(let O=0,j=Z.length;O<j;O++){const F=Z[O],fe=G[F.materialIndex];if(fe&&fe.visible){const _e=v(A,fe,E,T);A.onBeforeShadow(n,A,w,L,U,_e,F),n.renderBufferDirect(L,null,U,_e,A,F),A.onAfterShadow(n,A,w,L,U,_e,F)}}}else if(G.visible){const Z=v(A,G,E,T);A.onBeforeShadow(n,A,w,L,U,Z,null),n.renderBufferDirect(L,null,U,Z,A,null),A.onAfterShadow(n,A,w,L,U,Z,null)}}const I=A.children;for(let U=0,G=I.length;U<G;U++)x(I[U],w,L,E,T)}function b(A){A.target.removeEventListener("dispose",b);for(const L in c){const E=c[L],T=A.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const lD={[Tf]:bf,[Af]:Cf,[wf]:Pf,[ao]:Rf,[bf]:Tf,[Cf]:Af,[Pf]:wf,[Rf]:ao};function cD(n,e){function t(){let k=!1;const ye=new bt;let ie=null;const se=new bt(0,0,0,0);return{setMask:function(Te){ie!==Te&&!k&&(n.colorMask(Te,Te,Te,Te),ie=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Ee,Ve,St,qt){qt===!0&&(Te*=St,Ee*=St,Ve*=St),ye.set(Te,Ee,Ve,St),se.equals(ye)===!1&&(n.clearColor(Te,Ee,Ve,St),se.copy(ye))},reset:function(){k=!1,ie=null,se.set(-1,0,0,0)}}}function i(){let k=!1,ye=!1,ie=null,se=null,Te=null;return{setReversed:function(Ee){if(ye!==Ee){const Ve=e.get("EXT_clip_control");ye?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const St=Te;Te=null,this.setClear(St)}ye=Ee},getReversed:function(){return ye},setTest:function(Ee){Ee?B(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Ee){ie!==Ee&&!k&&(n.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(ye&&(Ee=lD[Ee]),se!==Ee){switch(Ee){case Tf:n.depthFunc(n.NEVER);break;case bf:n.depthFunc(n.ALWAYS);break;case Af:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case wf:n.depthFunc(n.EQUAL);break;case Rf:n.depthFunc(n.GEQUAL);break;case Cf:n.depthFunc(n.GREATER);break;case Pf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Ee}},setLocked:function(Ee){k=Ee},setClear:function(Ee){Te!==Ee&&(ye&&(Ee=1-Ee),n.clearDepth(Ee),Te=Ee)},reset:function(){k=!1,ie=null,se=null,Te=null,ye=!1}}}function r(){let k=!1,ye=null,ie=null,se=null,Te=null,Ee=null,Ve=null,St=null,qt=null;return{setTest:function(rt){k||(rt?B(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(rt){ye!==rt&&!k&&(n.stencilMask(rt),ye=rt)},setFunc:function(rt,Xn,xi){(ie!==rt||se!==Xn||Te!==xi)&&(n.stencilFunc(rt,Xn,xi),ie=rt,se=Xn,Te=xi)},setOp:function(rt,Xn,xi){(Ee!==rt||Ve!==Xn||St!==xi)&&(n.stencilOp(rt,Xn,xi),Ee=rt,Ve=Xn,St=xi)},setLocked:function(rt){k=rt},setClear:function(rt){qt!==rt&&(n.clearStencil(rt),qt=rt)},reset:function(){k=!1,ye=null,ie=null,se=null,Te=null,Ee=null,Ve=null,St=null,qt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,b=null,A=null,w=new st(0,0,0),L=0,E=!1,T=null,D=null,I=null,U=null,G=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=j>=1):F.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=j>=2);let fe=null,_e={};const Me=n.getParameter(n.SCISSOR_BOX),Ce=n.getParameter(n.VIEWPORT),Xe=new bt().fromArray(Me),ne=new bt().fromArray(Ce);function de(k,ye,ie,se){const Te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(k,Ee),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<ie;Ve++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ye+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ee}const xe={};xe[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(ao),ee(!1),$($p),B(n.CULL_FACE),M(mr);function B(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function re(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function ae(k,ye){return f[k]!==ye?(n.bindFramebuffer(k,ye),f[k]=ye,k===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),k===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function oe(k,ye){let ie=d,se=!1;if(k){ie=h.get(ye),ie===void 0&&(ie=[],h.set(ye,ie));const Te=k.textures;if(ie.length!==Te.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ve=Te.length;Ee<Ve;Ee++)ie[Ee]=n.COLOR_ATTACHMENT0+Ee;ie.length=Te.length,se=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,se=!0);se&&n.drawBuffers(ie)}function Pe(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const Oe={[Yr]:n.FUNC_ADD,[tw]:n.FUNC_SUBTRACT,[nw]:n.FUNC_REVERSE_SUBTRACT};Oe[iw]=n.MIN,Oe[rw]=n.MAX;const P={[sw]:n.ZERO,[ow]:n.ONE,[aw]:n.SRC_COLOR,[Mf]:n.SRC_ALPHA,[dw]:n.SRC_ALPHA_SATURATE,[fw]:n.DST_COLOR,[cw]:n.DST_ALPHA,[lw]:n.ONE_MINUS_SRC_COLOR,[Ef]:n.ONE_MINUS_SRC_ALPHA,[hw]:n.ONE_MINUS_DST_COLOR,[uw]:n.ONE_MINUS_DST_ALPHA,[pw]:n.CONSTANT_COLOR,[mw]:n.ONE_MINUS_CONSTANT_COLOR,[_w]:n.CONSTANT_ALPHA,[gw]:n.ONE_MINUS_CONSTANT_ALPHA};function M(k,ye,ie,se,Te,Ee,Ve,St,qt,rt){if(k===mr){_===!0&&(re(n.BLEND),_=!1);return}if(_===!1&&(B(n.BLEND),_=!0),k!==ew){if(k!==m||rt!==E){if((p!==Yr||x!==Yr)&&(n.blendEquation(n.FUNC_ADD),p=Yr,x=Yr),rt)switch(k){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.ONE,n.ONE);break;case jp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case jp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,v=null,b=null,A=null,w.set(0,0,0),L=0,m=k,E=rt}return}Te=Te||ye,Ee=Ee||ie,Ve=Ve||se,(ye!==p||Te!==x)&&(n.blendEquationSeparate(Oe[ye],Oe[Te]),p=ye,x=Te),(ie!==y||se!==v||Ee!==b||Ve!==A)&&(n.blendFuncSeparate(P[ie],P[se],P[Ee],P[Ve]),y=ie,v=se,b=Ee,A=Ve),(St.equals(w)===!1||qt!==L)&&(n.blendColor(St.r,St.g,St.b,qt),w.copy(St),L=qt),m=k,E=!1}function W(k,ye){k.side===Ui?re(n.CULL_FACE):B(n.CULL_FACE);let ie=k.side===mn;ye&&(ie=!ie),ee(ie),k.blending===Ks&&k.transparent===!1?M(mr):M(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const se=k.stencilWrite;a.setTest(se),se&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){T!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),T=k)}function $(k){k!==ZA?(B(n.CULL_FACE),k!==D&&(k===$p?n.cullFace(n.BACK):k===JA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),D=k}function Y(k){k!==I&&(O&&n.lineWidth(k),I=k)}function ce(k,ye,ie){k?(B(n.POLYGON_OFFSET_FILL),(U!==ye||G!==ie)&&(n.polygonOffset(ye,ie),U=ye,G=ie)):re(n.POLYGON_OFFSET_FILL)}function te(k){k?B(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function R(k){k===void 0&&(k=n.TEXTURE0+Z-1),fe!==k&&(n.activeTexture(k),fe=k)}function S(k,ye,ie){ie===void 0&&(fe===null?ie=n.TEXTURE0+Z-1:ie=fe);let se=_e[ie];se===void 0&&(se={type:void 0,texture:void 0},_e[ie]=se),(se.type!==k||se.texture!==ye)&&(fe!==ie&&(n.activeTexture(ie),fe=ie),n.bindTexture(k,ye||xe[k]),se.type=k,se.texture=ye)}function N(){const k=_e[fe];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function z(){try{n.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{n.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{n.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{n.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Be(){try{n.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{n.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Re(){try{n.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(k){Xe.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Xe.copy(k))}function be(k){ne.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function Fe(k,ye){let ie=c.get(ye);ie===void 0&&(ie=new WeakMap,c.set(ye,ie));let se=ie.get(k);se===void 0&&(se=n.getUniformBlockIndex(ye,k.name),ie.set(k,se))}function Ie(k,ye){const se=c.get(ye).get(k);l.get(ye)!==se&&(n.uniformBlockBinding(ye,se,k.__bindingPointIndex),l.set(ye,se))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},fe=null,_e={},f={},h=new WeakMap,d=[],g=null,_=!1,m=null,p=null,y=null,v=null,x=null,b=null,A=null,w=new st(0,0,0),L=0,E=!1,T=null,D=null,I=null,U=null,G=null,Xe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:B,disable:re,bindFramebuffer:ae,drawBuffers:oe,useProgram:Pe,setBlending:M,setMaterial:W,setFlipSided:ee,setCullFace:$,setLineWidth:Y,setPolygonOffset:ce,setScissorTest:te,activeTexture:R,bindTexture:S,unbindTexture:N,compressedTexImage2D:z,compressedTexImage3D:q,texImage2D:ge,texImage3D:Re,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:Be,texStorage3D:le,texSubImage2D:X,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:De,viewport:be,reset:it}}function uD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return d?new OffscreenCanvas(R,S):Zl("canvas")}function _(R,S,N){let z=1;const q=te(R);if((q.width>N||q.height>N)&&(z=N/Math.max(q.width,q.height)),z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(z*q.width),pe=Math.floor(z*q.height);f===void 0&&(f=g(X,pe));const ue=S?g(X,pe):f;return ue.width=X,ue.height=pe,ue.getContext("2d").drawImage(R,0,0,X,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+X+"x"+pe+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(R,S,N,z,q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=S;if(S===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),S===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),S===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),S===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),S===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),S===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),S===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),S===n.RGBA){const pe=q?jl:Ze.getTransfer(z);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=pe===at?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(R,S){let N;return R?S===null||S===us||S===uo?N=n.DEPTH24_STENCIL8:S===Oi?N=n.DEPTH32F_STENCIL8:S===fa&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===us||S===uo?N=n.DEPTH_COMPONENT24:S===Oi?N=n.DEPTH_COMPONENT32F:S===fa&&(N=n.DEPTH_COMPONENT16),N}function b(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==ti&&R.minFilter!==ui?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),L(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),T(S)}function L(R){const S=i.get(R);if(S.__webglInit===void 0)return;const N=R.source,z=h.get(N);if(z){const q=z[S.__cacheKey];q.usedTimes--,q.usedTimes===0&&E(R),Object.keys(z).length===0&&h.delete(N)}i.remove(R)}function E(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const N=R.source,z=h.get(N);delete z[S.__cacheKey],o.memory.textures--}function T(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(S.__webglFramebuffer[z]))for(let q=0;q<S.__webglFramebuffer[z].length;q++)n.deleteFramebuffer(S.__webglFramebuffer[z][q]);else n.deleteFramebuffer(S.__webglFramebuffer[z]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[z])}else{if(Array.isArray(S.__webglFramebuffer))for(let z=0;z<S.__webglFramebuffer.length;z++)n.deleteFramebuffer(S.__webglFramebuffer[z]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let z=0;z<S.__webglColorRenderbuffer.length;z++)S.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[z]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const N=R.textures;for(let z=0,q=N.length;z<q;z++){const X=i.get(N[z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(N[z])}i.remove(R)}let D=0;function I(){D=0}function U(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function G(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Z(R,S){const N=i.get(R);if(R.isVideoTexture&&Y(R),R.isRenderTargetTexture===!1&&R.version>0&&N.__version!==R.version){const z=R.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(N,R,S);return}}t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+S)}function O(R,S){const N=i.get(R);if(R.version>0&&N.__version!==R.version){ne(N,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+S)}function j(R,S){const N=i.get(R);if(R.version>0&&N.__version!==R.version){ne(N,R,S);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+S)}function F(R,S){const N=i.get(R);if(R.version>0&&N.__version!==R.version){de(N,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+S)}const fe={[If]:n.REPEAT,[Kr]:n.CLAMP_TO_EDGE,[Uf]:n.MIRRORED_REPEAT},_e={[ti]:n.NEAREST,[ww]:n.NEAREST_MIPMAP_NEAREST,[$a]:n.NEAREST_MIPMAP_LINEAR,[ui]:n.LINEAR,[tu]:n.LINEAR_MIPMAP_NEAREST,[Zr]:n.LINEAR_MIPMAP_LINEAR},Me={[Dw]:n.NEVER,[Bw]:n.ALWAYS,[Iw]:n.LESS,[Ov]:n.LEQUAL,[Uw]:n.EQUAL,[Fw]:n.GEQUAL,[Nw]:n.GREATER,[Ow]:n.NOTEQUAL};function Ce(R,S){if(S.type===Oi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ui||S.magFilter===tu||S.magFilter===$a||S.magFilter===Zr||S.minFilter===ui||S.minFilter===tu||S.minFilter===$a||S.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,fe[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,fe[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,fe[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_e[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ti||S.minFilter!==$a&&S.minFilter!==Zr||S.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Xe(R,S){let N=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const z=S.source;let q=h.get(z);q===void 0&&(q={},h.set(z,q));const X=G(S);if(X!==R.__cacheKey){q[X]===void 0&&(q[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),q[X].usedTimes++;const pe=q[R.__cacheKey];pe!==void 0&&(q[R.__cacheKey].usedTimes--,pe.usedTimes===0&&E(S)),R.__cacheKey=X,R.__webglTexture=q[X].texture}return N}function ne(R,S,N){let z=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(z=n.TEXTURE_3D);const q=Xe(R,S),X=S.source;t.bindTexture(z,R.__webglTexture,n.TEXTURE0+N);const pe=i.get(X);if(X.version!==pe.__version||q===!0){t.activeTexture(n.TEXTURE0+N);const ue=Ze.getPrimaries(Ze.workingColorSpace),he=S.colorSpace===lr?null:Ze.getPrimaries(S.colorSpace),Be=S.colorSpace===lr||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let le=_(S.image,!1,r.maxTextureSize);le=ce(S,le);const ge=s.convert(S.format,S.colorSpace),Re=s.convert(S.type);let De=v(S.internalFormat,ge,Re,S.colorSpace,S.isVideoTexture);Ce(z,S);let be;const Fe=S.mipmaps,Ie=S.isVideoTexture!==!0,it=pe.__version===void 0||q===!0,k=X.dataReady,ye=b(S,le);if(S.isDepthTexture)De=x(S.format===fo,S.type),it&&(Ie?t.texStorage2D(n.TEXTURE_2D,1,De,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,De,le.width,le.height,0,ge,Re,null));else if(S.isDataTexture)if(Fe.length>0){Ie&&it&&t.texStorage2D(n.TEXTURE_2D,ye,De,Fe[0].width,Fe[0].height);for(let ie=0,se=Fe.length;ie<se;ie++)be=Fe[ie],Ie?k&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,be.width,be.height,ge,Re,be.data):t.texImage2D(n.TEXTURE_2D,ie,De,be.width,be.height,0,ge,Re,be.data);S.generateMipmaps=!1}else Ie?(it&&t.texStorage2D(n.TEXTURE_2D,ye,De,le.width,le.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,ge,Re,le.data)):t.texImage2D(n.TEXTURE_2D,0,De,le.width,le.height,0,ge,Re,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ie&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,De,Fe[0].width,Fe[0].height,le.depth);for(let ie=0,se=Fe.length;ie<se;ie++)if(be=Fe[ie],S.format!==Qn)if(ge!==null)if(Ie){if(k)if(S.layerUpdates.size>0){const Te=ym(be.width,be.height,S.format,S.type);for(const Ee of S.layerUpdates){const Ve=be.data.subarray(Ee*Te/be.data.BYTES_PER_ELEMENT,(Ee+1)*Te/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Ee,be.width,be.height,1,ge,Ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,be.width,be.height,le.depth,ge,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,De,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,be.width,be.height,le.depth,ge,Re,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,De,be.width,be.height,le.depth,0,ge,Re,be.data)}else{Ie&&it&&t.texStorage2D(n.TEXTURE_2D,ye,De,Fe[0].width,Fe[0].height);for(let ie=0,se=Fe.length;ie<se;ie++)be=Fe[ie],S.format!==Qn?ge!==null?Ie?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?k&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,be.width,be.height,ge,Re,be.data):t.texImage2D(n.TEXTURE_2D,ie,De,be.width,be.height,0,ge,Re,be.data)}else if(S.isDataArrayTexture)if(Ie){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,De,le.width,le.height,le.depth),k)if(S.layerUpdates.size>0){const ie=ym(le.width,le.height,S.format,S.type);for(const se of S.layerUpdates){const Te=le.data.subarray(se*ie/le.data.BYTES_PER_ELEMENT,(se+1)*ie/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,ge,Re,Te)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ge,Re,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,le.width,le.height,le.depth,0,ge,Re,le.data);else if(S.isData3DTexture)Ie?(it&&t.texStorage3D(n.TEXTURE_3D,ye,De,le.width,le.height,le.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ge,Re,le.data)):t.texImage3D(n.TEXTURE_3D,0,De,le.width,le.height,le.depth,0,ge,Re,le.data);else if(S.isFramebufferTexture){if(it)if(Ie)t.texStorage2D(n.TEXTURE_2D,ye,De,le.width,le.height);else{let ie=le.width,se=le.height;for(let Te=0;Te<ye;Te++)t.texImage2D(n.TEXTURE_2D,Te,De,ie,se,0,ge,Re,null),ie>>=1,se>>=1}}else if(Fe.length>0){if(Ie&&it){const ie=te(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ye,De,ie.width,ie.height)}for(let ie=0,se=Fe.length;ie<se;ie++)be=Fe[ie],Ie?k&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ge,Re,be):t.texImage2D(n.TEXTURE_2D,ie,De,ge,Re,be);S.generateMipmaps=!1}else if(Ie){if(it){const ie=te(le);t.texStorage2D(n.TEXTURE_2D,ye,De,ie.width,ie.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Re,le)}else t.texImage2D(n.TEXTURE_2D,0,De,ge,Re,le);m(S)&&p(z),pe.__version=X.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function de(R,S,N){if(S.image.length!==6)return;const z=Xe(R,S),q=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+N);const X=i.get(q);if(q.version!==X.__version||z===!0){t.activeTexture(n.TEXTURE0+N);const pe=Ze.getPrimaries(Ze.workingColorSpace),ue=S.colorSpace===lr?null:Ze.getPrimaries(S.colorSpace),he=S.colorSpace===lr||pe===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Be=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!Be&&!le?ge[se]=_(S.image[se],!0,r.maxCubemapSize):ge[se]=le?S.image[se].image:S.image[se],ge[se]=ce(S,ge[se]);const Re=ge[0],De=s.convert(S.format,S.colorSpace),be=s.convert(S.type),Fe=v(S.internalFormat,De,be,S.colorSpace),Ie=S.isVideoTexture!==!0,it=X.__version===void 0||z===!0,k=q.dataReady;let ye=b(S,Re);Ce(n.TEXTURE_CUBE_MAP,S);let ie;if(Be){Ie&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Fe,Re.width,Re.height);for(let se=0;se<6;se++){ie=ge[se].mipmaps;for(let Te=0;Te<ie.length;Te++){const Ee=ie[Te];S.format!==Qn?De!==null?Ie?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,Ee.width,Ee.height,De,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,0,0,Ee.width,Ee.height,De,be,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te,Fe,Ee.width,Ee.height,0,De,be,Ee.data)}}}else{if(ie=S.mipmaps,Ie&&it){ie.length>0&&ye++;const se=te(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Fe,se.width,se.height)}for(let se=0;se<6;se++)if(le){Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,De,be,ge[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,ge[se].width,ge[se].height,0,De,be,ge[se].data);for(let Te=0;Te<ie.length;Te++){const Ve=ie[Te].image[se].image;Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,Ve.width,Ve.height,De,be,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Fe,Ve.width,Ve.height,0,De,be,Ve.data)}}else{Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,be,ge[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Fe,De,be,ge[se]);for(let Te=0;Te<ie.length;Te++){const Ee=ie[Te];Ie?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,0,0,De,be,Ee.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te+1,Fe,De,be,Ee.image[se])}}}m(S)&&p(n.TEXTURE_CUBE_MAP),X.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,N,z,q,X){const pe=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),he=v(N.internalFormat,pe,ue,N.colorSpace),Be=i.get(S),le=i.get(N);if(le.__renderTarget=S,!Be.__hasExternalTextures){const ge=Math.max(1,S.width>>X),Re=Math.max(1,S.height>>X);q===n.TEXTURE_3D||q===n.TEXTURE_2D_ARRAY?t.texImage3D(q,X,he,ge,Re,S.depth,0,pe,ue,null):t.texImage2D(q,X,he,ge,Re,0,pe,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,q,le.__webglTexture,0,ee(S)):(q===n.TEXTURE_2D||q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,q,le.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(R,S,N){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const z=S.depthTexture,q=z&&z.isDepthTexture?z.type:null,X=x(S.stencilBuffer,q),pe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=ee(S);$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,X,S.width,S.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,X,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,X,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,R)}else{const z=S.textures;for(let q=0;q<z.length;q++){const X=z[q],pe=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),he=v(X.internalFormat,pe,ue,X.colorSpace),Be=ee(S);N&&$(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,he,S.width,S.height):$(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,he,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,he,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(S.depthTexture);z.__renderTarget=S,(!z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const q=z.__webglTexture,X=ee(S);if(S.depthTexture.format===Zs)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(S.depthTexture.format===fo)$(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function ae(R){const S=i.get(R),N=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const z=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),z){const q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,z.removeEventListener("dispose",q)};z.addEventListener("dispose",q),S.__depthDisposeCallback=q}S.__boundDepthTexture=z}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");re(S.__webglFramebuffer,R)}else if(N){S.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[z]),S.__webglDepthbuffer[z]===void 0)S.__webglDepthbuffer[z]=n.createRenderbuffer(),B(S.__webglDepthbuffer[z],R,!1);else{const q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,X)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),B(S.__webglDepthbuffer,R,!1);else{const z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,z,n.RENDERBUFFER,q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(R,S,N){const z=i.get(R);S!==void 0&&xe(z.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&ae(R)}function Pe(R){const S=R.texture,N=i.get(R),z=i.get(S);R.addEventListener("dispose",w);const q=R.textures,X=R.isWebGLCubeRenderTarget===!0,pe=q.length>1;if(pe||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=S.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let he=0;he<S.mipmaps.length;he++)N.__webglFramebuffer[ue][he]=n.createFramebuffer()}else N.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<S.mipmaps.length;ue++)N.__webglFramebuffer[ue]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(pe)for(let ue=0,he=q.length;ue<he;ue++){const Be=i.get(q[ue]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&$(R)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<q.length;ue++){const he=q[ue];N.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);const Be=s.convert(he.format,he.colorSpace),le=s.convert(he.type),ge=v(he.internalFormat,Be,le,he.colorSpace,R.isXRRenderTarget===!0),Re=ee(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ge,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),B(N.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,S);for(let ue=0;ue<6;ue++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)xe(N.__webglFramebuffer[ue][he],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else xe(N.__webglFramebuffer[ue],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ue=0,he=q.length;ue<he;ue++){const Be=q[ue],le=i.get(Be);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),Ce(n.TEXTURE_2D,Be),xe(N.__webglFramebuffer,R,Be,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,z.__webglTexture),Ce(ue,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)xe(N.__webglFramebuffer[he],R,S,n.COLOR_ATTACHMENT0,ue,he);else xe(N.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ue,0);m(S)&&p(ue),t.unbindTexture()}R.depthBuffer&&ae(R)}function Oe(R){const S=R.textures;for(let N=0,z=S.length;N<z;N++){const q=S[N];if(m(q)){const X=y(R),pe=i.get(q).__webglTexture;t.bindTexture(X,pe),p(X),t.unbindTexture()}}}const P=[],M=[];function W(R){if(R.samples>0){if($(R)===!1){const S=R.textures,N=R.width,z=R.height;let q=n.COLOR_BUFFER_BIT;const X=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(R),ue=S.length>1;if(ue)for(let he=0;he<S.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let he=0;he<S.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const Be=i.get(S[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,N,z,0,0,N,z,q,n.NEAREST),l===!0&&(P.length=0,M.length=0,P.push(n.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(P.push(X),M.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let he=0;he<S.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,pe.__webglColorRenderbuffer[he]);const Be=i.get(S[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ee(R){return Math.min(r.maxSamples,R.samples)}function $(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Y(R){const S=o.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function ce(R,S){const N=R.colorSpace,z=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||N!==ho&&N!==lr&&(Ze.getTransfer(N)===at?(z!==Qn||q!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}function te(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=Z,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=F,this.rebindTextures=oe,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$}function fD(n,e){function t(i,r=lr){let s;const o=Ze.getTransfer(r);if(i===Hi)return n.UNSIGNED_BYTE;if(i===Zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Av)return n.BYTE;if(i===wv)return n.SHORT;if(i===fa)return n.UNSIGNED_SHORT;if(i===Kh)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===Oi)return n.FLOAT;if(i===wa)return n.HALF_FLOAT;if(i===Cv)return n.ALPHA;if(i===Pv)return n.RGB;if(i===Qn)return n.RGBA;if(i===Lv)return n.LUMINANCE;if(i===Dv)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===fo)return n.DEPTH_STENCIL;if(i===Iv)return n.RED;if(i===Qh)return n.RED_INTEGER;if(i===Uv)return n.RG;if(i===ed)return n.RG_INTEGER;if(i===td)return n.RGBA_INTEGER;if(i===El||i===Tl||i===bl||i===Al)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===El)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===El)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nf||i===Of||i===Ff||i===Bf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Hf||i===zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===kf||i===Hf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===Gf||i===Wf||i===Xf||i===qf||i===$f||i===Yf||i===jf||i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===eh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===th)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wl||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nv||i===rh||i===sh||i===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===uo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new _n,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Mr({vertexShader:hD,fragmentShader:dD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bi(new bc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mD extends Mo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new pD,m=t.getContextAttributes();let p=null,y=null;const v=[],x=[],b=new ct;let A=null;const w=new zn;w.viewport=new bt;const L=new zn;L.viewport=new bt;const E=[w,L],T=new OR;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let de=v[ne];return de===void 0&&(de=new Mu,v[ne]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ne){let de=v[ne];return de===void 0&&(de=new Mu,v[ne]=de),de.getGripSpace()},this.getHand=function(ne){let de=v[ne];return de===void 0&&(de=new Mu,v[ne]=de),de.getHandSpace()};function U(ne){const de=x.indexOf(ne.inputSource);if(de===-1)return;const xe=v[de];xe!==void 0&&(xe.update(ne.inputSource,ne.frame,c||o),xe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<v.length;ne++){const de=x[ne];de!==null&&(x[ne]=null,v[ne].disconnect(de))}D=null,I=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,y=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,B=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?fo:Zs,B=m.stencil?uo:us);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new fs(h.textureWidth,h.textureHeight,{format:Qn,type:Hi,depthTexture:new Kv(h.textureWidth,h.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new fs(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(ne){for(let de=0;de<ne.removed.length;de++){const xe=ne.removed[de],B=x.indexOf(xe);B>=0&&(x[B]=null,v[B].disconnect(xe))}for(let de=0;de<ne.added.length;de++){const xe=ne.added[de];let B=x.indexOf(xe);if(B===-1){for(let ae=0;ae<v.length;ae++)if(ae>=x.length){x.push(xe),B=ae;break}else if(x[ae]===null){x[ae]=xe,B=ae;break}if(B===-1)break}const re=v[B];re&&re.connect(xe)}}const O=new Q,j=new Q;function F(ne,de,xe){O.setFromMatrixPosition(de.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);const B=O.distanceTo(j),re=de.projectionMatrix.elements,ae=xe.projectionMatrix.elements,oe=re[14]/(re[10]-1),Pe=re[14]/(re[10]+1),Oe=(re[9]+1)/re[5],P=(re[9]-1)/re[5],M=(re[8]-1)/re[0],W=(ae[8]+1)/ae[0],ee=oe*M,$=oe*W,Y=B/(-M+W),ce=Y*-M;if(de.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ce),ne.translateZ(Y),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),re[10]===-1)ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const te=oe+Y,R=Pe+Y,S=ee-ce,N=$+(B-ce),z=Oe*Pe/R*te,q=P*Pe/R*te;ne.projectionMatrix.makePerspective(S,N,z,q,te,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function fe(ne,de){de===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(de.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let de=ne.near,xe=ne.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),T.near=L.near=w.near=de,T.far=L.far=w.far=xe,(D!==T.near||I!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),D=T.near,I=T.far),w.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,T.layers.mask=w.layers.mask|L.layers.mask;const B=ne.parent,re=T.cameras;fe(T,B);for(let ae=0;ae<re.length;ae++)fe(re[ae],B);re.length===2?F(T,w,L):T.projectionMatrix.copy(w.projectionMatrix),_e(ne,T,B)};function _e(ne,de,xe){xe===null?ne.matrix.copy(de.matrixWorld):(ne.matrix.copy(xe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(de.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(de.projectionMatrix),ne.projectionMatrixInverse.copy(de.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ha*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(T)};let Me=null;function Ce(ne,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const xe=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let B=!1;xe.length!==T.cameras.length&&(T.cameras.length=0,B=!0);for(let oe=0;oe<xe.length;oe++){const Pe=xe[oe];let Oe=null;if(d!==null)Oe=d.getViewport(Pe);else{const M=f.getViewSubImage(h,Pe);Oe=M.viewport,oe===0&&(e.setRenderTargetTextures(y,M.colorTexture,h.ignoreDepthValues?void 0:M.depthStencilTexture),e.setRenderTarget(y))}let P=E[oe];P===void 0&&(P=new zn,P.layers.enable(oe),P.viewport=new bt,E[oe]=P),P.matrix.fromArray(Pe.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Pe.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),oe===0&&(T.matrix.copy(P.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),B===!0&&T.cameras.push(P)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const oe=f.getDepthInformation(xe[0]);oe&&oe.isValid&&oe.texture&&_.init(e,oe,r.renderState)}}for(let xe=0;xe<v.length;xe++){const B=x[xe],re=v[xe];B!==null&&re!==void 0&&re.update(B,de,c||o)}Me&&Me(ne,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const Xe=new Zv;Xe.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const Hr=new zi,_D=new At;function gD(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Xv(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Hr.copy(x),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),m.envMapRotation.value.setFromMatrix4(_D.makeRotationFromEuler(Hr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(y,b);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const v=f();y.__bindingPointIndex=v;const x=n.createBuffer(),b=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],x=y.uniforms,b=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,w=x.length;A<w;A++){const L=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,T=L.length;E<T;E++){const D=L[E];if(d(D,A,E,b)===!0){const I=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let Z=0;Z<U.length;Z++){const O=U[Z],j=_(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,n.bufferSubData(n.UNIFORM_BUFFER,I+G,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,G),G+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,v,x,b){const A=y.value,w=v+"_"+x;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const L=b[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return b[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(y){const v=y.uniforms;let x=0;const b=16;for(let w=0,L=v.length;w<L;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let T=0,D=E.length;T<D;T++){const I=E[T],U=Array.isArray(I.value)?I.value:[I.value];for(let G=0,Z=U.length;G<Z;G++){const O=U[G],j=_(O),F=x%b,fe=F%j.boundary,_e=F+fe;x+=fe,_e!==0&&b-_e<j.storage&&(x+=b-_e),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=j.storage}}}const A=x%b;return A>0&&(x+=b-A),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const y in r)n.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class xD{constructor(e={}){const{canvas:t=tR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this.toneMapping=_r,this.toneMappingExposure=1;const x=this;let b=!1,A=0,w=0,L=null,E=-1,T=null;const D=new bt,I=new bt;let U=null;const G=new st(0);let Z=0,O=t.width,j=t.height,F=1,fe=null,_e=null;const Me=new bt(0,0,O,j),Ce=new bt(0,0,O,j);let Xe=!1;const ne=new Yv;let de=!1,xe=!1;this.transmissionResolutionScale=1;const B=new At,re=new At,ae=new Q,oe=new bt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function P(){return L===null?F:1}let M=i;function W(C,H){return t.getContext(C,H)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),M===null){const H="webgl2";if(M=W(H,C),M===null)throw W(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ee,$,Y,ce,te,R,S,N,z,q,X,pe,ue,he,Be,le,ge,Re,De,be,Fe,Ie,it,k;function ye(){ee=new CP(M),ee.init(),Ie=new fD(M,ee),$=new MP(M,ee,e,Ie),Y=new cD(M,ee),$.reverseDepthBuffer&&h&&Y.buffers.depth.setReversed(!0),ce=new DP(M),te=new KL,R=new uD(M,ee,Y,te,$,Ie,ce),S=new TP(x),N=new RP(x),z=new BR(M),it=new yP(M,z),q=new PP(M,z,ce,it),X=new UP(M,q,z,ce),De=new IP(M,$,R),le=new EP(te),pe=new jL(x,S,N,ee,$,it,le),ue=new gD(x,te),he=new JL,Be=new rD(ee),Re=new xP(x,S,N,Y,X,d,l),ge=new aD(x,X,$),k=new vD(M,ce,$,Y),be=new SP(M,ee,ce),Fe=new LP(M,ee,ce),ce.programs=pe.programs,x.capabilities=$,x.extensions=ee,x.properties=te,x.renderLists=he,x.shadowMap=ge,x.state=Y,x.info=ce}ye();const ie=new mD(x,M);this.xr=ie,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const C=ee.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ee.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(O,j,!1))},this.getSize=function(C){return C.set(O,j)},this.setSize=function(C,H,K=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,j=H,t.width=Math.floor(C*F),t.height=Math.floor(H*F),K===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(O*F,j*F).floor()},this.setDrawingBufferSize=function(C,H,K){O=C,j=H,F=K,t.width=Math.floor(C*K),t.height=Math.floor(H*K),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(Me)},this.setViewport=function(C,H,K,J){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,H,K,J),Y.viewport(D.copy(Me).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,H,K,J){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,H,K,J),Y.scissor(I.copy(Ce).multiplyScalar(F).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(C){Y.setScissorTest(Xe=C)},this.setOpaqueSort=function(C){fe=C},this.setTransparentSort=function(C){_e=C},this.getClearColor=function(C){return C.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,K=!0){let J=0;if(C){let V=!1;if(L!==null){const me=L.texture.format;V=me===td||me===ed||me===Qh}if(V){const me=L.texture.type,Se=me===Hi||me===us||me===fa||me===uo||me===Zh||me===Jh,Ae=Re.getClearColor(),we=Re.getClearAlpha(),He=Ae.r,ze=Ae.g,Le=Ae.b;Se?(g[0]=He,g[1]=ze,g[2]=Le,g[3]=we,M.clearBufferuiv(M.COLOR,0,g)):(_[0]=He,_[1]=ze,_[2]=Le,_[3]=we,M.clearBufferiv(M.COLOR,0,_))}else J|=M.COLOR_BUFFER_BIT}H&&(J|=M.DEPTH_BUFFER_BIT),K&&(J|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Re.dispose(),he.dispose(),Be.dispose(),te.dispose(),S.dispose(),N.dispose(),X.dispose(),it.dispose(),k.dispose(),pe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Md),ie.removeEventListener("sessionend",Ed),Cr.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=ce.autoReset,H=ge.enabled,K=ge.autoUpdate,J=ge.needsUpdate,V=ge.type;ye(),ce.autoReset=C,ge.enabled=H,ge.autoUpdate=K,ge.needsUpdate=J,ge.type=V}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ve(C){const H=C.target;H.removeEventListener("dispose",Ve),St(H)}function St(C){qt(C),te.remove(C)}function qt(C){const H=te.get(C).programs;H!==void 0&&(H.forEach(function(K){pe.releaseProgram(K)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,K,J,V,me){H===null&&(H=Pe);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Ae=nx(C,H,K,J,V);Y.setMaterial(J,Se);let we=K.index,He=1;if(J.wireframe===!0){if(we=q.getWireframeAttribute(K),we===void 0)return;He=2}const ze=K.drawRange,Le=K.attributes.position;let Ye=ze.start*He,Qe=(ze.start+ze.count)*He;me!==null&&(Ye=Math.max(Ye,me.start*He),Qe=Math.min(Qe,(me.start+me.count)*He)),we!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,we.count)):Le!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Le.count));const wt=Qe-Ye;if(wt<0||wt===1/0)return;it.setup(V,J,Ae,K,we);let Mt,je=be;if(we!==null&&(Mt=z.get(we),je=Fe,je.setIndex(Mt)),V.isMesh)J.wireframe===!0?(Y.setLineWidth(J.wireframeLinewidth*P()),je.setMode(M.LINES)):je.setMode(M.TRIANGLES);else if(V.isLine){let Ue=J.linewidth;Ue===void 0&&(Ue=1),Y.setLineWidth(Ue*P()),V.isLineSegments?je.setMode(M.LINES):V.isLineLoop?je.setMode(M.LINE_LOOP):je.setMode(M.LINE_STRIP)}else V.isPoints?je.setMode(M.POINTS):V.isSprite&&je.setMode(M.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Wr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))je.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ue=V._multiDrawStarts,zt=V._multiDrawCounts,et=V._multiDrawCount,qn=we?z.get(we).bytesPerElement:1,_s=te.get(J).currentProgram.getUniforms();for(let Tn=0;Tn<et;Tn++)_s.setValue(M,"_gl_DrawID",Tn),je.render(Ue[Tn]/qn,zt[Tn])}else if(V.isInstancedMesh)je.renderInstances(Ye,wt,V.count);else if(K.isInstancedBufferGeometry){const Ue=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,zt=Math.min(K.instanceCount,Ue);je.renderInstances(Ye,wt,zt)}else je.render(Ye,wt)};function rt(C,H,K){C.transparent===!0&&C.side===Ui&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,Ua(C,H,K),C.side=Sr,C.needsUpdate=!0,Ua(C,H,K),C.side=Ui):Ua(C,H,K)}this.compile=function(C,H,K=null){K===null&&(K=C),p=Be.get(K),p.init(H),v.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),C!==K&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const J=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const me=V.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const Ae=me[Se];rt(Ae,K,V),J.add(Ae)}else rt(me,K,V),J.add(me)}),p=v.pop(),J},this.compileAsync=function(C,H,K=null){const J=this.compile(C,H,K);return new Promise(V=>{function me(){if(J.forEach(function(Se){te.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){V(C);return}setTimeout(me,10)}ee.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Xn=null;function xi(C){Xn&&Xn(C)}function Md(){Cr.stop()}function Ed(){Cr.start()}const Cr=new Zv;Cr.setAnimationLoop(xi),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(C){Xn=C,ie.setAnimationLoop(C),C===null?Cr.stop():Cr.start()},ie.addEventListener("sessionstart",Md),ie.addEventListener("sessionend",Ed),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(H),H=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,H,L),p=Be.get(C,v.length),p.init(H),v.push(p),re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(re),xe=this.localClippingEnabled,de=le.init(this.clippingPlanes,xe),m=he.get(C,y.length),m.init(),y.push(m),ie.enabled===!0&&ie.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&Pc(me,H,-1/0,x.sortObjects)}Pc(C,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(fe,_e),Oe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Oe&&Re.addToRenderList(m,C),this.info.render.frame++,de===!0&&le.beginShadows();const K=p.state.shadowsArray;ge.render(K,C,H),de===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const me=H.cameras;if(V.length>0)for(let Se=0,Ae=me.length;Se<Ae;Se++){const we=me[Se];bd(J,V,C,we)}Oe&&Re.render(C);for(let Se=0,Ae=me.length;Se<Ae;Se++){const we=me[Se];Td(m,C,we,we.viewport)}}else V.length>0&&bd(J,V,C,H),Oe&&Re.render(C),Td(m,C,H);L!==null&&w===0&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),C.isScene===!0&&C.onAfterRender(x,C,H),it.resetDefaultState(),E=-1,T=null,v.pop(),v.length>0?(p=v[v.length-1],de===!0&&le.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Pc(C,H,K,J){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){J&&oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(re);const Se=X.update(C),Ae=C.material;Ae.visible&&m.push(C,Se,Ae,K,oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ne.intersectsObject(C))){const Se=X.update(C),Ae=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),oe.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),oe.copy(Se.boundingSphere.center)),oe.applyMatrix4(C.matrixWorld).applyMatrix4(re)),Array.isArray(Ae)){const we=Se.groups;for(let He=0,ze=we.length;He<ze;He++){const Le=we[He],Ye=Ae[Le.materialIndex];Ye&&Ye.visible&&m.push(C,Se,Ye,K,oe.z,Le)}}else Ae.visible&&m.push(C,Se,Ae,K,oe.z,null)}}const me=C.children;for(let Se=0,Ae=me.length;Se<Ae;Se++)Pc(me[Se],H,K,J)}function Td(C,H,K,J){const V=C.opaque,me=C.transmissive,Se=C.transparent;p.setupLightsView(K),de===!0&&le.setGlobalState(x.clippingPlanes,K),J&&Y.viewport(D.copy(J)),V.length>0&&Ia(V,H,K),me.length>0&&Ia(me,H,K),Se.length>0&&Ia(Se,H,K),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function bd(C,H,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new fs(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?wa:Hi,minFilter:Zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const me=p.state.transmissionRenderTarget[J.id],Se=J.viewport||D;me.setSize(Se.z*x.transmissionResolutionScale,Se.w*x.transmissionResolutionScale);const Ae=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(G),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Oe&&Re.render(K);const we=x.toneMapping;x.toneMapping=_r;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),de===!0&&le.setGlobalState(x.clippingPlanes,J),Ia(C,K,J),R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,Ye=H.length;Le<Ye;Le++){const Qe=H[Le],wt=Qe.object,Mt=Qe.geometry,je=Qe.material,Ue=Qe.group;if(je.side===Ui&&wt.layers.test(J.layers)){const zt=je.side;je.side=mn,je.needsUpdate=!0,Ad(wt,K,J,Mt,je,Ue),je.side=zt,je.needsUpdate=!0,ze=!0}}ze===!0&&(R.updateMultisampleRenderTarget(me),R.updateRenderTargetMipmap(me))}x.setRenderTarget(Ae),x.setClearColor(G,Z),He!==void 0&&(J.viewport=He),x.toneMapping=we}function Ia(C,H,K){const J=H.isScene===!0?H.overrideMaterial:null;for(let V=0,me=C.length;V<me;V++){const Se=C[V],Ae=Se.object,we=Se.geometry,He=J===null?Se.material:J,ze=Se.group;Ae.layers.test(K.layers)&&Ad(Ae,H,K,we,He,ze)}}function Ad(C,H,K,J,V,me){C.onBeforeRender(x,H,K,J,V,me),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(x,H,K,J,C,me),V.transparent===!0&&V.side===Ui&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,x.renderBufferDirect(K,H,J,V,C,me),V.side=Sr,V.needsUpdate=!0,x.renderBufferDirect(K,H,J,V,C,me),V.side=Ui):x.renderBufferDirect(K,H,J,V,C,me),C.onAfterRender(x,H,K,J,V,me)}function Ua(C,H,K){H.isScene!==!0&&(H=Pe);const J=te.get(C),V=p.state.lights,me=p.state.shadowsArray,Se=V.state.version,Ae=pe.getParameters(C,V.state,me,H,K),we=pe.getProgramCacheKey(Ae);let He=J.programs;J.environment=C.isMeshStandardMaterial?H.environment:null,J.fog=H.fog,J.envMap=(C.isMeshStandardMaterial?N:S).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,He===void 0&&(C.addEventListener("dispose",Ve),He=new Map,J.programs=He);let ze=He.get(we);if(ze!==void 0){if(J.currentProgram===ze&&J.lightsStateVersion===Se)return Rd(C,Ae),ze}else Ae.uniforms=pe.getUniforms(C),C.onBeforeCompile(Ae,x),ze=pe.acquireProgram(Ae,we),He.set(we,ze),J.uniforms=Ae.uniforms;const Le=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=le.uniform),Rd(C,Ae),J.needsLights=rx(C),J.lightsStateVersion=Se,J.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),J.currentProgram=ze,J.uniformsList=null,ze}function wd(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=Rl.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Rd(C,H){const K=te.get(C);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function nx(C,H,K,J,V){H.isScene!==!0&&(H=Pe),R.resetTextureUnits();const me=H.fog,Se=J.isMeshStandardMaterial?H.environment:null,Ae=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ho,we=(J.isMeshStandardMaterial?N:S).get(J.envMap||Se),He=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Le=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,Qe=!!K.morphAttributes.color;let wt=_r;J.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(wt=x.toneMapping);const Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,je=Mt!==void 0?Mt.length:0,Ue=te.get(J),zt=p.state.lights;if(de===!0&&(xe===!0||C!==T)){const nn=C===T&&J.id===E;le.setState(J,C,nn)}let et=!1;J.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==zt.state.version||Ue.outputColorSpace!==Ae||V.isBatchedMesh&&Ue.batching===!1||!V.isBatchedMesh&&Ue.batching===!0||V.isBatchedMesh&&Ue.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ue.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||V.isInstancedMesh&&Ue.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ue.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ue.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ue.instancingMorph===!1&&V.morphTexture!==null||Ue.envMap!==we||J.fog===!0&&Ue.fog!==me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==le.numPlanes||Ue.numIntersection!==le.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==ze||Ue.morphTargets!==Le||Ue.morphNormals!==Ye||Ue.morphColors!==Qe||Ue.toneMapping!==wt||Ue.morphTargetsCount!==je)&&(et=!0):(et=!0,Ue.__version=J.version);let qn=Ue.currentProgram;et===!0&&(qn=Ua(J,H,V));let _s=!1,Tn=!1,bo=!1;const mt=qn.getUniforms(),Un=Ue.uniforms;if(Y.useProgram(qn.program)&&(_s=!0,Tn=!0,bo=!0),J.id!==E&&(E=J.id,Tn=!0),_s||T!==C){Y.buffers.depth.getReversed()?(B.copy(C.projectionMatrix),iR(B),rR(B),mt.setValue(M,"projectionMatrix",B)):mt.setValue(M,"projectionMatrix",C.projectionMatrix),mt.setValue(M,"viewMatrix",C.matrixWorldInverse);const fn=mt.map.cameraPosition;fn!==void 0&&fn.setValue(M,ae.setFromMatrixPosition(C.matrixWorld)),$.logarithmicDepthBuffer&&mt.setValue(M,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&mt.setValue(M,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,Tn=!0,bo=!0)}if(V.isSkinnedMesh){mt.setOptional(M,V,"bindMatrix"),mt.setOptional(M,V,"bindMatrixInverse");const nn=V.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),mt.setValue(M,"boneTexture",nn.boneTexture,R))}V.isBatchedMesh&&(mt.setOptional(M,V,"batchingTexture"),mt.setValue(M,"batchingTexture",V._matricesTexture,R),mt.setOptional(M,V,"batchingIdTexture"),mt.setValue(M,"batchingIdTexture",V._indirectTexture,R),mt.setOptional(M,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(M,"batchingColorTexture",V._colorsTexture,R));const Nn=K.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&De.update(V,K,qn),(Tn||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,mt.setValue(M,"receiveShadow",V.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Un.envMap.value=we,Un.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&H.environment!==null&&(Un.envMapIntensity.value=H.environmentIntensity),Tn&&(mt.setValue(M,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&ix(Un,bo),me&&J.fog===!0&&ue.refreshFogUniforms(Un,me),ue.refreshMaterialUniforms(Un,J,F,j,p.state.transmissionRenderTarget[C.id]),Rl.upload(M,wd(Ue),Un,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Rl.upload(M,wd(Ue),Un,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&mt.setValue(M,"center",V.center),mt.setValue(M,"modelViewMatrix",V.modelViewMatrix),mt.setValue(M,"normalMatrix",V.normalMatrix),mt.setValue(M,"modelMatrix",V.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let fn=0,Lc=nn.length;fn<Lc;fn++){const Pr=nn[fn];k.update(Pr,qn),k.bind(Pr,qn)}}return qn}function ix(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function rx(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,H,K){te.get(C.texture).__webglTexture=H,te.get(C.depthTexture).__webglTexture=K;const J=te.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,H){const K=te.get(C);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const sx=M.createFramebuffer();this.setRenderTarget=function(C,H=0,K=0){L=C,A=H,w=K;let J=!0,V=null,me=!1,Se=!1;if(C){const we=te.get(C);if(we.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(M.FRAMEBUFFER,null),J=!1;else if(we.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(we.__hasExternalTextures)R.rebindTextures(C,te.get(C.texture).__webglTexture,te.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Le=C.depthTexture;if(we.__boundDepthTexture!==Le){if(Le!==null&&te.has(Le)&&(C.width!==Le.image.width||C.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const He=C.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Se=!0);const ze=te.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?V=ze[H][K]:V=ze[H],me=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?V=te.get(C).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[K]:V=ze,D.copy(C.viewport),I.copy(C.scissor),U=C.scissorTest}else D.copy(Me).multiplyScalar(F).floor(),I.copy(Ce).multiplyScalar(F).floor(),U=Xe;if(K!==0&&(V=sx),Y.bindFramebuffer(M.FRAMEBUFFER,V)&&J&&Y.drawBuffers(C,V),Y.viewport(D),Y.scissor(I),Y.setScissorTest(U),me){const we=te.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+H,we.__webglTexture,K)}else if(Se){const we=te.get(C.texture),He=H;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,we.__webglTexture,K,He)}else if(C!==null&&K!==0){const we=te.get(C.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,we.__webglTexture,K)}E=-1},this.readRenderTargetPixels=function(C,H,K,J,V,me,Se){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){Y.bindFramebuffer(M.FRAMEBUFFER,Ae);try{const we=C.texture,He=we.format,ze=we.type;if(!$.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-J&&K>=0&&K<=C.height-V&&M.readPixels(H,K,J,V,Ie.convert(He),Ie.convert(ze),me)}finally{const we=L!==null?te.get(L).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(C,H,K,J,V,me,Se){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=te.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){const we=C.texture,He=we.format,ze=we.type;if(!$.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=C.width-J&&K>=0&&K<=C.height-V){Y.bindFramebuffer(M.FRAMEBUFFER,Ae);const Le=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Le),M.bufferData(M.PIXEL_PACK_BUFFER,me.byteLength,M.STREAM_READ),M.readPixels(H,K,J,V,Ie.convert(He),Ie.convert(ze),0);const Ye=L!==null?te.get(L).__webglFramebuffer:null;Y.bindFramebuffer(M.FRAMEBUFFER,Ye);const Qe=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await nR(M,Qe,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Le),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,me),M.deleteBuffer(Le),M.deleteSync(Qe),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,H=null,K=0){C.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-K),V=Math.floor(C.image.width*J),me=Math.floor(C.image.height*J),Se=H!==null?H.x:0,Ae=H!==null?H.y:0;R.setTexture2D(C,0),M.copyTexSubImage2D(M.TEXTURE_2D,K,0,0,Se,Ae,V,me),Y.unbindTexture()};const ox=M.createFramebuffer(),ax=M.createFramebuffer();this.copyTextureToTexture=function(C,H,K=null,J=null,V=0,me=null){C.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],H=arguments[2],me=arguments[3]||0,K=null),me===null&&(V!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=V,V=0):me=0);let Se,Ae,we,He,ze,Le,Ye,Qe,wt;const Mt=C.isCompressedTexture?C.mipmaps[me]:C.image;if(K!==null)Se=K.max.x-K.min.x,Ae=K.max.y-K.min.y,we=K.isBox3?K.max.z-K.min.z:1,He=K.min.x,ze=K.min.y,Le=K.isBox3?K.min.z:0;else{const Nn=Math.pow(2,-V);Se=Math.floor(Mt.width*Nn),Ae=Math.floor(Mt.height*Nn),C.isDataArrayTexture?we=Mt.depth:C.isData3DTexture?we=Math.floor(Mt.depth*Nn):we=1,He=0,ze=0,Le=0}J!==null?(Ye=J.x,Qe=J.y,wt=J.z):(Ye=0,Qe=0,wt=0);const je=Ie.convert(H.format),Ue=Ie.convert(H.type);let zt;H.isData3DTexture?(R.setTexture3D(H,0),zt=M.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),zt=M.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),zt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,H.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,H.unpackAlignment);const et=M.getParameter(M.UNPACK_ROW_LENGTH),qn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),_s=M.getParameter(M.UNPACK_SKIP_PIXELS),Tn=M.getParameter(M.UNPACK_SKIP_ROWS),bo=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,Mt.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,Mt.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,He),M.pixelStorei(M.UNPACK_SKIP_ROWS,ze),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Le);const mt=C.isDataArrayTexture||C.isData3DTexture,Un=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const Nn=te.get(C),nn=te.get(H),fn=te.get(Nn.__renderTarget),Lc=te.get(nn.__renderTarget);Y.bindFramebuffer(M.READ_FRAMEBUFFER,fn.__webglFramebuffer),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,Lc.__webglFramebuffer);for(let Pr=0;Pr<we;Pr++)mt&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,te.get(C).__webglTexture,V,Le+Pr),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,te.get(H).__webglTexture,me,wt+Pr)),M.blitFramebuffer(He,ze,Se,Ae,Ye,Qe,Se,Ae,M.DEPTH_BUFFER_BIT,M.NEAREST);Y.bindFramebuffer(M.READ_FRAMEBUFFER,null),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||te.has(C)){const Nn=te.get(C),nn=te.get(H);Y.bindFramebuffer(M.READ_FRAMEBUFFER,ox),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,ax);for(let fn=0;fn<we;fn++)mt?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Nn.__webglTexture,V,Le+fn):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Nn.__webglTexture,V),Un?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,nn.__webglTexture,me,wt+fn):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,nn.__webglTexture,me),V!==0?M.blitFramebuffer(He,ze,Se,Ae,Ye,Qe,Se,Ae,M.COLOR_BUFFER_BIT,M.NEAREST):Un?M.copyTexSubImage3D(zt,me,Ye,Qe,wt+fn,He,ze,Se,Ae):M.copyTexSubImage2D(zt,me,Ye,Qe,He,ze,Se,Ae);Y.bindFramebuffer(M.READ_FRAMEBUFFER,null),Y.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Un?C.isDataTexture||C.isData3DTexture?M.texSubImage3D(zt,me,Ye,Qe,wt,Se,Ae,we,je,Ue,Mt.data):H.isCompressedArrayTexture?M.compressedTexSubImage3D(zt,me,Ye,Qe,wt,Se,Ae,we,je,Mt.data):M.texSubImage3D(zt,me,Ye,Qe,wt,Se,Ae,we,je,Ue,Mt):C.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,me,Ye,Qe,Se,Ae,je,Ue,Mt.data):C.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,me,Ye,Qe,Mt.width,Mt.height,je,Mt.data):M.texSubImage2D(M.TEXTURE_2D,me,Ye,Qe,Se,Ae,je,Ue,Mt);M.pixelStorei(M.UNPACK_ROW_LENGTH,et),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,qn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,_s),M.pixelStorei(M.UNPACK_SKIP_ROWS,Tn),M.pixelStorei(M.UNPACK_SKIP_IMAGES,bo),me===0&&H.generateMipmaps&&M.generateMipmap(zt),Y.unbindTexture()},this.copyTextureToTexture3D=function(C,H,K=null,J=null,V=0){return C.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,C=arguments[2],H=arguments[3],V=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,H,K,J,V)},this.initRenderTarget=function(C){te.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Y.unbindTexture()},this.resetState=function(){A=0,w=0,L=null,Y.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Pi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function n0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mo={duration:.5,overwrite:!1,delay:0},sd,Xt,gt,pi=1e8,en=1/pi,ch=Math.PI*2,yD=ch/4,SD=0,i0=Math.sqrt,MD=Math.cos,ED=Math.sin,Ht=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Vi=function(e){return typeof e=="number"},od=function(e){return typeof e>"u"},gi=function(e){return typeof e=="object"},vn=function(e){return e!==!1},ad=function(){return typeof window<"u"},gl=function(e){return Et(e)||Ht(e)},r0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,uh=/(?:-?\.?\d|\.)+/gi,s0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Pu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,o0=/[+-]=-?[.\d]+/,a0=/[^,'"\[\]\s]+/gi,TD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,ai,fh,ld,Dn={},Jl={},l0,c0=function(e){return(Jl=_o(e,Dn))&&En},cd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},da=function(e,t){return!t&&console.warn(e)},u0=function(e,t){return e&&(Dn[e]=t)&&Jl&&(Jl[e]=t)||Dn},pa=function(){return 0},bD={suppressEvents:!0,isStart:!0,kill:!1},Cl={suppressEvents:!0,kill:!1},AD={suppressEvents:!0},ud={},vr=[],hh={},f0,wn={},Lu={},Xm=30,Pl=[],fd="",hd=function(e){var t=e[0],i,r;if(gi(t)||Et(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Pl.length;r--&&!Pl[r].targetTest(t););i=Pl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new N0(e[r],i)))||e.splice(r,1);return e},is=function(e){return e._gsap||hd(Vn(e))[0]._gsap},h0=function(e,t,i){return(i=e[t])&&Et(i)?e[t]():od(i)&&e.getAttribute&&e.getAttribute(t)||i},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Pt=function(e){return Math.round(e*1e7)/1e7||0},Qs=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},wD=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Ql=function(){var e=vr.length,t=vr.slice(0),i,r;for(hh={},vr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},d0=function(e,t,i,r){vr.length&&!Xt&&Ql(),e.render(t,i,Xt&&t<0&&(e._initted||e._startAt)),vr.length&&!Xt&&Ql()},p0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(a0).length<2?t:Ht(e)?e.trim():e},m0=function(e){return e},In=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},RD=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},_o=function(e,t){for(var i in t)e[i]=t[i];return e},qm=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=gi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ec=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Qo=function(e){var t=e.parent||xt,i=e.keyframes?RD(tn(e.keyframes)):In;if(vn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},CD=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},_0=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},wc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Er=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},PD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},dh=function(e,t,i,r){return e._startAt&&(Xt?e._startAt.revert(Cl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},LD=function n(e){return!e||e._ts&&n(e.parent)},$m=function(e){return e._repeat?go(e._tTime,e=e.duration()+e._rDelay)*e:0},go=function(e,t){var i=Math.floor(e=Pt(e/t));return e&&i===e?i-1:i},tc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rc=function(e){return e._end=Pt(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},Cc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Pt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rc(e),i._dirty||rs(i,e)),e},g0=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=tc(e.rawTime(),t),(!t._dur||Da(0,t.totalDuration(),i)-t._tTime>en)&&t.render(i,!0)),rs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-1e-8}},ci=function(e,t,i,r){return t.parent&&Er(t),t._start=Pt((Vi(i)?i:i||e!==xt?kn(e,i,t):e._time)+t._delay),t._end=Pt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),_0(e,t,"_first","_last",e._sort?"_start":0),ph(t)||(e._recent=t),r||g0(e,t),e._ts<0&&Cc(e,e._tTime),e},v0=function(e,t){return(Dn.ScrollTrigger||cd("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},x0=function(e,t,i,r,s){if(pd(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Xt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&f0!==Cn.frame)return vr.push(e),e._lazy=[s,r],1},DD=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},ph=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ID=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&DD(e)&&!(!e._initted&&ph(e))||(e._ts<0||e._dp._ts<0)&&!ph(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Da(0,e._tDur,t),u=go(l,a),e._yoyo&&u&1&&(o=1-o),u!==go(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Xt||r||e._zTime===en||!t&&e._zTime){if(!e._initted&&x0(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?en:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&dh(e,t,i,!0),e._onUpdate&&!i&&Pn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Er(e,1),!i&&!Xt&&(Pn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},UD=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},vo=function(e,t,i,r){var s=e._repeat,o=Pt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Pt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Cc(e,e._tTime=e._tDur*a),e.parent&&Rc(e),i||rs(e.parent,e),e},Ym=function(e){return e instanceof un?rs(e):vo(e,e._dur)},ND={_start:0,endTime:pa,totalDuration:pa},kn=function n(e,t,i){var r=e.labels,s=e._recent||ND,o=e.duration()>=pi?s.endTime(!1):e._dur,a,l,c;return Ht(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(tn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},ea=function(e,t,i){var r=Vi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ct(t[0],o,t[s+1])},Rr=function(e,t){return e||e===0?t(e):t},Da=function(e,t,i){return i<e?e:i>t?t:i},Qt=function(e,t){return!Ht(e)||!(t=TD.exec(e))?"":t[1]},OD=function(e,t,i){return Rr(i,function(r){return Da(e,t,r)})},mh=[].slice,y0=function(e,t){return e&&gi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&gi(e[0]))&&!e.nodeType&&e!==ai},FD=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ht(r)&&!t||y0(r,1)?(s=i).push.apply(s,Vn(r)):i.push(r)})||i},Vn=function(e,t,i){return gt&&!t&&gt.selector?gt.selector(e):Ht(e)&&!i&&(fh||!xo())?mh.call((t||ld).querySelectorAll(e),0):tn(e)?FD(e,i):y0(e)?mh.call(e,0):e?[e]:[]},_h=function(e){return e=Vn(e)[0]||da("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Vn(t,i.querySelectorAll?i:i===e?da("Invalid scope")||ld.createElement("div"):e)}},S0=function(e){return e.sort(function(){return .5-Math.random()})},M0=function(e){if(Et(e))return e;var t=gi(e)?e:{each:e},i=ss(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return Ht(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,m=o[_],p,y,v,x,b,A,w,L,E;if(!m){if(E=t.grid==="auto"?0:(t.grid||[1,pi])[1],!E){for(w=-1e8;w<(w=g[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(m=o[_]=[],p=l?Math.min(E,_)*u-.5:r%E,y=E===pi?0:l?_*f/E-.5:r/E|0,w=0,L=pi,A=0;A<_;A++)v=A%E-p,x=y-(A/E|0),m[A]=b=c?Math.abs(c==="y"?x:v):i0(v*v+x*x),b>w&&(w=b),b<L&&(L=b);r==="random"&&S0(m),m.max=w-L,m.min=L,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Qt(t.amount||t.each)||0,i=i&&_<0?D0(i):i}return _=(m[h]-m.min)/m.max||0,Pt(m.b+(i?i(_):_)*m.v)+m.u}},gh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Pt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Vi(i)?0:Qt(i))}},E0=function(e,t){var i=tn(e),r,s;return!i&&gi(e)&&(r=i=e.radius||pi,e.values?(e=Vn(e.values),(s=!Vi(e[0]))&&(r*=r)):e=gh(e.increment)),Rr(t,i?Et(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=pi,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||Vi(o)?u:u+Qt(o)}:gh(e))},T0=function(e,t,i,r){return Rr(tn(e)?!t:i===!0?!!(i=0):!r,function(){return tn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},BD=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},kD=function(e,t){return function(i){return e(parseFloat(i))+(t||Qt(i))}},HD=function(e,t,i){return A0(e,t,0,1,i)},b0=function(e,t,i){return Rr(i,function(r){return e[~~t(r)]})},zD=function n(e,t,i){var r=t-e;return tn(e)?b0(e,n(0,e.length),t):Rr(i,function(s){return(r+(s-e)%r)%r+e})},VD=function n(e,t,i){var r=t-e,s=r*2;return tn(e)?b0(e,n(0,e.length-1),t):Rr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ma=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?a0:uh),i+=e.substr(t,r-t)+T0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},A0=function(e,t,i,r,s){var o=t-e,a=r-i;return Rr(s,function(l){return i+((l-e)/o*a||0)})},GD=function n(e,t,i,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Ht(e),a={},l,c,u,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(n(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},i=t}else r||(e=_o(tn(e)?[]:{},e));if(!u){for(l in t)dd.call(a,e,l,"get",t[l]);s=function(g){return gd(g,a)||(o?e.p:e)}}}return Rr(i,s)},jm=function(e,t,i){var r=e.labels,s=pi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Pn=function(e,t,i){var r=e.vars,s=r[t],o=gt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,i&&vr.length&&Ql(),a&&(gt=a),u=l?s.apply(c,l):s.call(c),gt=o,u},Fo=function(e){return Er(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Xt),e.progress()<1&&Pn(e,"onInterrupt"),e},Vs,w0=[],R0=function(e){if(e)if(e=!e.name&&e.default||e,ad()||e.headless){var t=e.name,i=Et(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:pa,render:gd,add:dd,kill:sI,modifier:rI,rawVars:0},o={targetTest:0,get:0,getSetter:_d,aliases:{},register:0};if(xo(),e!==r){if(wn[t])return;In(r,In(ec(e,s),o)),_o(r.prototype,_o(s,ec(e,o))),wn[r.prop=t]=r,e.targetTest&&(Pl.push(r),ud[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}u0(t,r),e.register&&e.register(En,r,yn)}else w0.push(e)},lt=255,Bo={aqua:[0,lt,lt],lime:[0,lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,lt],navy:[0,0,128],white:[lt,lt,lt],olive:[128,128,0],yellow:[lt,lt,0],orange:[lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[lt,0,0],pink:[lt,192,203],cyan:[0,lt,lt],transparent:[lt,lt,lt,0]},Du=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*lt+.5|0},C0=function(e,t,i){var r=e?Vi(e)?[e>>16,e>>8&lt,e&lt]:0:Bo.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Bo[e])r=Bo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&lt,r&lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&lt,e&lt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(uh),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Du(l+1/3,s,o),r[1]=Du(l,s,o),r[2]=Du(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(s0),i&&r.length<4&&(r[3]=1),r}else r=e.match(uh)||Bo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/lt,o=r[1]/lt,a=r[2]/lt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},P0=function(e){var t=[],i=[],r=-1;return e.split(xr).forEach(function(s){var o=s.match(zs)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Km=function(e,t,i){var r="",s=(e+r).match(xr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=C0(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=P0(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(xr,"1").split(zs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(xr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},xr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Bo)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),WD=/hsl[a]?\(/,L0=function(e){var t=e.join(" "),i;if(xr.lastIndex=0,xr.test(t))return i=WD.test(t),e[1]=Km(e[1],i),e[0]=Km(e[0],i,P0(e[1])),!0},_a,Cn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(m){var p=n()-r,y=m===!0,v,x,b,A;if((p>e||p<0)&&(i+=p-t),r+=p,b=r-i,v=b-o,(v>0||y)&&(A=++f.frame,h=b-f.time*1e3,f.time=b=b/1e3,o+=v+(v>=s?4:s-v),x=1),y||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](b,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){l0&&(!fh&&ad()&&(ai=fh=window,ld=ai.document||{},Dn.gsap=En,(ai.gsapVersions||(ai.gsapVersions=[])).push(En.version),c0(Jl||ai.GreenSockGlobals||!ai.gsap&&ai||{}),w0.forEach(R0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},_a=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),_a=0,c=pa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,y){var v=p?function(x,b,A,w){m(x,b,A,w),f.remove(v)}:m;return f.remove(m),a[y?"unshift":"push"](v),xo(),v},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),xo=function(){return!_a&&Cn.wake()},$e={},XD=/^[\d.\-M][\d.\-,\s]/,qD=/["']/g,$D=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(qD,"").trim():+c,r=l.substr(a+1).trim();return t},YD=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},jD=function(e){var t=(e+"").split("("),i=$e[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[$D(t[1])]:YD(e).split(",").map(p0)):$e._CE&&XD.test(e)?$e._CE("",e):i},D0=function(e){return function(t){return 1-e(1-t)}},I0=function n(e,t){for(var i=e._first,r;i;)i instanceof un?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},ss=function(e,t){return e&&(Et(e)?e:$e[e]||jD(e))||t},ms=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return xn(e,function(a){$e[a]=Dn[a]=s,$e[o=a.toLowerCase()]=i;for(var l in s)$e[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=$e[a+"."+l]=s[l]}),s},U0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Iu=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/ch*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*ED((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:U0(a);return s=ch/s,l.config=function(c,u){return n(e,c,u)},l},Uu=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:U0(i);return r.config=function(s){return n(e,s)},r};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ms(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});$e.Linear.easeNone=$e.none=$e.Linear.easeIn;ms("Elastic",Iu("in"),Iu("out"),Iu());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ms("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ms("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ms("Circ",function(n){return-(i0(1-n*n)-1)});ms("Sine",function(n){return n===1?1:-MD(n*yD)+1});ms("Back",Uu("in"),Uu("out"),Uu());$e.SteppedEase=$e.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-en;return function(a){return((r*Da(0,o,a)|0)+s)*i}}};mo.ease=$e["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return fd+=n+","+n+"Params,"});var N0=function(e,t){this.id=SD++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:h0,this.set=t?t.getSetter:_d},ga=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vo(this,+t.duration,1,1),this.data=t.data,gt&&(this._ctx=gt,gt.data.push(this)),_a||Cn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,vo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cc(this,i),!s._dp||s.parent||g0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ci(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===en||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),d0(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+$m(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+$m(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?go(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?tc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(Da(-Math.abs(this._delay),this._tDur,s),r!==!1),Rc(this),PD(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&ci(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?tc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=AD);var r=Xt;return Xt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Xt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Ym(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Ym(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(kn(this,i),vn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,vn(r)),this._dur||(this._zTime=-1e-8),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-en)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Et(i)?i:m0,a=function(){var c=r.then;r.then=null,Et(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Fo(this)},n}();In(ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var un=function(n){n0(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=vn(i.sortChildren),xt&&ci(i.parent||xt,Pi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&v0(Pi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ea(0,arguments,this),this},t.from=function(r,s,o){return ea(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ea(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Qo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(r,s,kn(this,o),1),this},t.call=function(r,s,o){return ci(this,Ct.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ct(r,o,kn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Qo(o).immediateRender=vn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Qo(a).immediateRender=vn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Pt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,m,p,y,v,x,b,A,w;if(this!==xt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,x=this._start,v=this._ts,p=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Pt(u%m),u===l?(_=this._repeat,h=c):(b=Pt(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=go(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),A&&_&1&&(h=c-h,w=1),_!==b&&!this._lock){var L=A&&b&1,E=L===(A&&_&1);if(_<b&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(w?0:Pt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;I0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=UD(this,Pt(a),Pt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Pn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=-1e-8);break}}d=g}else{d=this._last;for(var T=r<0?r:h;d;){if(g=d._prev,(d._act||T<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||Xt&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){y=0,g&&(u+=this._zTime=T?-1e-8:en);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-1e-8)._zTime=h>=a?1:-1,this._ts))return this._start=x,Rc(this),this.render(r,s,o);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Er(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(Pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Vi(s)||(s=kn(this,s,r)),!(r instanceof ga)){if(tn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ht(r))return this.addLabel(r,s);if(Et(r))r=Ct.delayedCall(0,r);else return this}return this!==r?ci(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ct?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ht(r)?this.removeLabel(r):Et(r)?this.killTweensOf(r):(r.parent===this&&wc(this,r),r===this._recent&&(this._recent=this._last),rs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pt(Cn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=kn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ct.delayedCall(0,s||pa,o);return a.data="isPause",this._hasPause=1,ci(this,a,kn(this,r))},t.removePause=function(r){var s=this._first;for(r=kn(this,r);s;)s._start===r&&s.data==="isPause"&&Er(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)cr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Vn(r),l=this._first,c=Vi(s),u;l;)l instanceof Ct?wD(l._targets,a)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=kn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ct.to(o,In({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||en,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&vo(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,In({startAt:{time:kn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),jm(this,kn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),jm(this,kn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return rs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),rs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=pi,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;vo(o,o===xt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(xt._ts&&(d0(xt,tc(r,xt)),f0=Cn.frame),Cn.frame>=Xm){Xm+=Ln.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&Ln.autoSleep&&Cn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Cn.sleep()}}},e}(ga);In(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var KD=function(e,t,i,r,s,o,a){var l=new yn(this._pt,e,t,0,1,z0,null,s),c=0,u=0,f,h,d,g,_,m,p,y;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=ma(r)),o&&(y=[i,r],o(y,e,t),i=y[0],r=y[1]),h=i.match(Pu)||[];f=Pu.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Qs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Pu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(o0.test(r)||p)&&(l.e=0),this._pt=l,l},dd=function(e,t,i,r,s,o,a,l,c,u){Et(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:Et(f)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Et(f)?c?tI:k0:md,g;if(Ht(r)&&(~r.indexOf("random(")&&(r=ma(r)),r.charAt(1)==="="&&(g=Qs(h,r)+(Qt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||vh)return!isNaN(h*r)&&r!==""?(g=new yn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?iI:H0,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&cd(t,r),KD.call(this,e,t,h,r,d,l||Ln.stringFilter,c))},ZD=function(e,t,i,r,s){if(Et(e)&&(e=ta(e,s,t,i,r)),!gi(e)||e.style&&e.nodeType||tn(e)||r0(e))return Ht(e)?ta(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ta(e[a],s,t,i,r);return o},O0=function(e,t,i,r,s,o){var a,l,c,u;if(wn[e]&&(a=new wn[e]).init(s,a.rawVars?t[e]:ZD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new yn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Vs))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},cr,vh,pd=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,y=p&&p.data==="nested"?p.vars.targets:m,v=e._overwrite==="auto"&&!sd,x=e.timeline,b,A,w,L,E,T,D,I,U,G,Z,O,j;if(x&&(!h||!s)&&(s="none"),e._ease=ss(s,mo.ease),e._yEase=f?D0(ss(f===!0?s:f,mo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!r.runBackwards,!x||h&&!r.stagger){if(I=m[0]?is(m[0]).harness:0,O=I&&r[I.prop],b=ec(r,ud),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Cl:bD),_._lazy=0),o){if(Er(e._startAt=Ct.set(m,In({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&vn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt||!a&&!d)&&e._startAt.revert(Cl),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),w=In({overwrite:!1,data:"isFromStart",lazy:a&&!_&&vn(l),immediateRender:a,stagger:0,parent:p},b),O&&(w[I.prop]=O),Er(e._startAt=Ct.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Xt?e._startAt.revert(Cl):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&vn(l)||l&&!g,A=0;A<m.length;A++){if(E=m[A],D=E._gsap||hd(m)[A]._gsap,e._ptLookup[A]=G={},hh[D.id]&&vr.length&&Ql(),Z=y===m?A:y.indexOf(E),I&&(U=new I).init(E,O||b,e,Z,y)!==!1&&(e._pt=L=new yn(e._pt,E,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(F){G[F]=L}),U.priority&&(T=1)),!I||O)for(w in b)wn[w]&&(U=O0(w,b,e,Z,E,y))?U.priority&&(T=1):G[w]=L=dd.call(e,E,w,"get",b[w],Z,y,0,r.stringFilter);e._op&&e._op[A]&&e.kill(E,e._op[A]),v&&e._pt&&(cr=e,xt.killTweensOf(E,G,e.globalTime(t)),j=!e.parent,cr=0),e._pt&&l&&(hh[D.id]=1)}T&&V0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,h&&t<=0&&x.render(pi,!0,!0)},JD=function(e,t,i,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return vh=1,e.vars[t]="+=0",pd(e,a),vh=0,l?da(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,f.e&&(f.e=Tt(i)+Qt(f.e)),f.b&&(f.b=u.s+Qt(f.b))},QD=function(e,t){var i=e[0]?is(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=_o({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},eI=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(tn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ta=function(e,t,i,r,s){return Et(e)?e.call(t,i,r,s):Ht(e)&&~e.indexOf("random(")?ma(e):e},F0=fd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",B0={};xn(F0+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return B0[n]=1});var Ct=function(n){n0(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Qo(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=r.parent||xt,v=(tn(i)||r0(i)?Vi(i[0]):"length"in r)?[i]:Vn(i),x,b,A,w,L,E,T,D;if(a._targets=v.length?hd(v):da("GSAP target "+i+" not found. https://gsap.com",!Ln.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||gl(c)||gl(u)){if(r=a.vars,x=a.timeline=new un({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),x.kill(),x.parent=x._dp=Pi(a),x._start=0,h||gl(c)||gl(u)){if(w=v.length,T=h&&M0(h),gi(h))for(L in h)~F0.indexOf(L)&&(D||(D={}),D[L]=h[L]);for(b=0;b<w;b++)A=ec(r,B0),A.stagger=0,p&&(A.yoyoEase=p),D&&_o(A,D),E=v[b],A.duration=+ta(c,Pi(a),b,E,v),A.delay=(+ta(u,Pi(a),b,E,v)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),x.to(E,A,T?T(b,E,v):0),x._ease=$e.none;x.duration()?c=u=0:a.timeline=0}else if(g){Qo(In(x.vars.defaults,{ease:"none"})),x._ease=ss(g.ease||r.ease||"none");var I=0,U,G,Z;if(tn(g))g.forEach(function(O){return x.to(v,O,">")}),x.duration();else{A={};for(L in g)L==="ease"||L==="easeEach"||eI(L,g[L],A,g.easeEach);for(L in A)for(U=A[L].sort(function(O,j){return O.t-j.t}),I=0,b=0;b<U.length;b++)G=U[b],Z={ease:G.e,duration:(G.t-(b?U[b-1].t:0))/100*c},Z[L]=G.v,x.to(v,Z,I),I+=Z.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return d===!0&&!sd&&(cr=Pi(a),xt.killTweensOf(v),cr=0),ci(y,Pi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===Pt(y._time)&&vn(f)&&LD(Pi(a))&&y.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-u)||0)),m&&v0(Pi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-en&&!u?l:r<en?0:r,h,d,g,_,m,p,y,v,x;if(!c)ID(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=Pt(f%_),f===l?(g=this._repeat,h=c):(m=Pt(f/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,h=c-h),m=go(this._tTime,_),h===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(v&&this._yEase&&I0(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(Pt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(x0(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(x||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(Pn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&dh(this,r,s,o),Pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&dh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Er(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Pn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){_a||Cn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||pd(this,c),u=this._ease(c/this._dur),JD(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Cc(this,0),this.parent||_0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Xt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,cr&&cr.vars.overwrite!==!0)._first||Fo(this),this.parent&&o!==this.timeline.totalDuration()&&vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Vn(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&CD(a,l))return s==="all"&&(this._pt=0),Fo(this);for(f=this._op=this._op||[],s!=="all"&&(Ht(s)&&(_={},xn(s,function(y){return _[y]=1}),s=_),s=QD(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&wc(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Fo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ea(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ea(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return xt.killTweensOf(r,s,o)},e}(ga);In(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(n){Ct[n]=function(){var e=new un,t=mh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var md=function(e,t,i){return e[t]=i},k0=function(e,t,i){return e[t](i)},tI=function(e,t,i,r){return e[t](r.fp,i)},nI=function(e,t,i){return e.setAttribute(t,i)},_d=function(e,t){return Et(e[t])?k0:od(e[t])&&e.setAttribute?nI:md},H0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},iI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},z0=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},gd=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},rI=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},sI=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?wc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},oI=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},V0=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},yn=function(){function n(t,i,r,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||H0,this.d=l||this,this.set=c||md,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=oI,this.m=i,this.mt=s,this.tween=r},n}();xn(fd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ud[n]=1});Dn.TweenMax=Dn.TweenLite=Ct;Dn.TimelineLite=Dn.TimelineMax=un;xt=new un({sortChildren:!1,defaults:mo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ln.stringFilter=L0;var os=[],Ll={},aI=[],Zm=0,lI=0,Nu=function(e){return(Ll[e]||aI).map(function(t){return t()})},xh=function(){var e=Date.now(),t=[];e-Zm>2&&(Nu("matchMediaInit"),os.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,c;for(a in r)o=ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Nu("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Zm=e,Nu("matchMedia"))},G0=function(){function n(t,i){this.selector=i&&_h(i),this.data=[],this._r=[],this.isReverted=!1,this.id=lI++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Et(i)&&(s=r,r=i,i=Et);var o=this,a=function(){var c=gt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=_h(s)),gt=o,f=r.apply(o,arguments),Et(f)&&o._r.push(f),gt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,i===Et?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=gt;gt=null,i(this),gt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ct&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ct)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=os.length;o--;)os[o].id===this.id&&os.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),cI=function(){function n(t){this.contexts=[],this.scope=t,gt&&gt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){gi(i)||(i={matches:i});var o=new G0(0,s||this.scope),a=o.conditions={},l,c,u;gt&&!o.selector&&(o.selector=gt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(c in i)c==="all"?u=1:(l=ai.matchMedia(i[c]),l&&(os.indexOf(o)<0&&os.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(xh):l.addEventListener("change",xh)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return R0(r)})},timeline:function(e){return new un(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ht(e)&&(e=Vn(e)[0]);var s=is(e||{}).get,o=i?m0:p0;return i==="native"&&(i=""),e&&(t?o((wn[t]&&wn[t].get||s)(e,t,i,r)):function(a,l,c){return o((wn[a]&&wn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Vn(e),e.length>1){var r=e.map(function(u){return En.quickSetter(u,t,i)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=wn[t],a=is(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Vs._pt=0,f.init(e,i?u+i:u,Vs,0,[e]),f.render(1,f),Vs._pt&&gd(1,Vs)}:a.set(e,l);return o?c:function(u){return c(e,l,i?u+i:u,a,1)}},quickTo:function(e,t,i){var r,s=En.to(e,In((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ss(e.ease,mo.ease)),qm(mo,e||{})},config:function(e){return qm(Ln,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!wn[a]&&!Dn[a]&&da(t+" effect requires "+a+" plugin.")}),Lu[t]=function(a,l,c){return i(Vn(a),In(l||{},s),c)},o&&(un.prototype[t]=function(a,l,c){return this.add(Lu[t](a,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){$e[e]=ss(t)},parseEase:function(e,t){return arguments.length?ss(e,t):$e},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new un(e),r,s;for(i.smoothChildTiming=vn(e.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,r=xt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ct&&r.vars.onComplete===r._targets[0]))&&ci(i,r,r._start-r._delay),r=s;return ci(xt,i,0),i},context:function(e,t){return e?new G0(e,t):gt},matchMedia:function(e){return new cI(e)},matchMediaRefresh:function(){return os.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||xh()},addEventListener:function(e,t){var i=Ll[e]||(Ll[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ll[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:zD,wrapYoyo:VD,distribute:M0,random:T0,snap:E0,normalize:HD,getUnit:Qt,clamp:OD,splitColor:C0,toArray:Vn,selector:_h,mapRange:A0,pipe:BD,unitize:kD,interpolate:GD,shuffle:S0},install:c0,effects:Lu,ticker:Cn,updateRoot:un.updateRoot,plugins:wn,globalTimeline:xt,core:{PropTween:yn,globals:u0,Tween:Ct,Timeline:un,Animation:ga,getCache:is,_removeLinkedListItem:wc,reverting:function(){return Xt},context:function(e){return e&&gt&&(gt.data.push(e),e._ctx=gt),gt},suppressOverwrites:function(e){return sd=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nc[n]=Ct[n]});Cn.add(un.updateRoot);Vs=nc.to({},{duration:0});var uI=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},fI=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=uI(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ou=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ht(s)&&(l={},xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fI(a,s)}}}},En=nc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Xt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ou("roundProps",gh),Ou("modifiers"),Ou("snap",E0))||nc;Ct.version=un.version=En.version="3.12.7";l0=1;ad()&&xo();$e.Power0;$e.Power1;$e.Power2;$e.Power3;$e.Power4;$e.Linear;$e.Quad;$e.Cubic;$e.Quart;$e.Quint;$e.Strong;$e.Elastic;$e.Back;$e.SteppedEase;$e.Bounce;$e.Sine;$e.Expo;$e.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jm,ur,eo,vd,Jr,Qm,xd,hI=function(){return typeof window<"u"},Gi={},$r=180/Math.PI,to=Math.PI/180,Is=Math.atan2,e_=1e8,yd=/([A-Z])/g,dI=/(left|right|width|margin|padding|x)/i,pI=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},yh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},mI=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_I=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},gI=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},W0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},X0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},vI=function(e,t,i){return e.style[t]=i},xI=function(e,t,i){return e.style.setProperty(t,i)},yI=function(e,t,i){return e._gsap[t]=i},SI=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},MI=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},EI=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},yt="transform",Sn=yt+"Origin",TI=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Gi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Li(r,a)}):this.tfm[e]=o.x?o[e]:Li(r,e),e===Sn&&(this.tfm.zOrigin=o.zOrigin);else return fi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=yt}(s||t)&&this.props.push(e,t,s[e])},q0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bI=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xd(),(!s||!s.isStart)&&!i[yt]&&(q0(i),r.zOrigin&&i[Sn]&&(i[Sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},$0=function(e,t){var i={target:e,props:[],revert:bI,save:TI};return e._gsap||En.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Y0,Sh=function(e,t){var i=ur.createElementNS?ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ur.createElement(e);return i&&i.style?i:ur.createElement(e)},mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(yd,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,yo(t)||t,1)||""},t_="O,Moz,ms,Ms,Webkit".split(","),yo=function(e,t,i){var r=t||Jr,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(t_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?t_[o]:"")+e},Mh=function(){hI()&&window.document&&(Jm=window,ur=Jm.document,eo=ur.documentElement,Jr=Sh("div")||{style:{}},Sh("div"),yt=yo(yt),Sn=yt+"Origin",Jr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Y0=!!yo("perspective"),xd=En.core.reverting,vd=1)},n_=function(e){var t=e.ownerSVGElement,i=Sh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),eo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),eo.removeChild(i),s},i_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},j0=function(e){var t,i;try{t=e.getBBox()}catch{t=n_(e),i=1}return t&&(t.width||t.height)||i||(t=n_(e)),t&&!t.width&&!t.x&&!t.y?{x:+i_(e,["x","cx","x1"])||0,y:+i_(e,["y","cy","y1"])||0,width:0,height:0}:t},K0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&j0(e))},hs=function(e,t){if(t){var i=e.style,r;t in Gi&&t!==Sn&&(t=yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(yd,"-$1").toLowerCase())):i.removeAttribute(t)}},fr=function(e,t,i,r,s,o){var a=new yn(e._pt,t,i,0,1,o?X0:W0);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},r_={deg:1,rad:1,turn:1},AI={grid:1,flex:1},Tr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Jr.style,l=dI.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,m,p;if(r===o||!s||r_[r]||r_[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),p=e.getCTM&&K0(e),(d||o==="%")&&(Gi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Tt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ur||!_.appendChild)&&(_=ur.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Cn.time&&!m.uncache)return Tt(s/m.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[u],y?e.style[t]=y:hs(e,t)}else(d||o==="%")&&!AI[mi(_,"display")]&&(a.position=mi(e,"position")),_===e&&(a.position="static"),_.appendChild(Jr),g=Jr[u],_.removeChild(Jr),a.position="absolute";return l&&d&&(m=is(_),m.time=Cn.time,m.width=_[u]),Tt(h?g*s/f:g&&s?f/g*s:0)},Li=function(e,t,i,r){var s;return vd||Mh(),t in fi&&t!=="transform"&&(t=fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gi[t]&&t!=="transform"?(s=xa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rc(mi(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ic[t]&&ic[t](e,t,i)||mi(e,t)||h0(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,i)+i:s},wI=function(e,t,i,r){if(!i||i==="none"){var s=yo(t,e,1),o=s&&mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=mi(e,"borderTopColor"))}var a=new yn(this._pt,e.style,t,0,1,z0),l=0,c=0,u,f,h,d,g,_,m,p,y,v,x,b;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=mi(e,t)||r,_?e.style[t]=_:hs(e,t)),u=[i,r],L0(u),i=u[0],r=u[1],h=i.match(zs)||[],b=r.match(zs)||[],b.length){for(;f=zs.exec(r);)m=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Qs(d,m)+x),p=parseFloat(m),v=m.substr((p+"").length),l=zs.lastIndex-v.length,v||(v=v||Ln.units[t]||x,l===r.length&&(r+=v,a.e+=v)),x!==v&&(d=Tr(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?X0:W0;return o0.test(r)&&(a.e=0),this._pt=a,a},s_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},RI=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=s_[i]||i,t[1]=s_[r]||r,t.join(" ")},CI=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Gi[a]&&(l=1,a=a==="transformOrigin"?Sn:yt),hs(i,a);l&&(hs(i,yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",xa(i,1),o.uncache=1,q0(r)))}},ic={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new yn(e._pt,t,i,0,0,CI);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},va=[1,0,0,1,0,0],Z0={},J0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},o_=function(e){var t=mi(e,yt);return J0(t)?va:t.substr(7).match(s0).map(Tt)},Sd=function(e,t){var i=e._gsap||is(e),r=e.style,s=o_(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?va:s):(s===va&&!e.offsetParent&&e!==eo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,eo.appendChild(e)),s=o_(e),l?r.display=l:hs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):eo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Eh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Sd(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],y=l[5],v=t.split(" "),x=parseFloat(v[0])||0,b=parseFloat(v[1])||0,A,w,L,E;i?l!==va&&(w=d*m-g*_)&&(L=x*(m/w)+b*(-_/w)+(_*y-m*p)/w,E=x*(-g/w)+b*(d/w)-(d*y-g*p)/w,x=L,b=E):(A=j0(e),x=A.x+(~v[0].indexOf("%")?x/100*A.width:x),b=A.y+(~(v[1]||v[0]).indexOf("%")?b/100*A.height:b)),r||r!==!1&&a.smooth?(p=x-c,y=b-u,a.xOffset=f+(p*d+y*_)-p,a.yOffset=h+(p*g+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Sn]="0px 0px",o&&(fr(o,a,"xOrigin",c,x),fr(o,a,"yOrigin",u,b),fr(o,a,"xOffset",f,a.xOffset),fr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+b)},xa=function(e,t){var i=e._gsap||new N0(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=mi(e,Sn)||"0",u,f,h,d,g,_,m,p,y,v,x,b,A,w,L,E,T,D,I,U,G,Z,O,j,F,fe,_e,Me,Ce,Xe,ne,de;return u=f=h=_=m=p=y=v=x=0,d=g=1,i.svg=!!(e.getCTM&&K0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yt]!=="none"?l[yt]:"")),r.scale=r.rotate=r.translate="none"),w=Sd(e,i.svg),i.svg&&(i.uncache?(F=e.getBBox(),c=i.xOrigin-F.x+"px "+(i.yOrigin-F.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),Eh(e,j||c,!!j||i.originIsAbsolute,i.smooth!==!1,w)),b=i.xOrigin||0,A=i.yOrigin||0,w!==va&&(D=w[0],I=w[1],U=w[2],G=w[3],u=Z=w[4],f=O=w[5],w.length===6?(d=Math.sqrt(D*D+I*I),g=Math.sqrt(G*G+U*U),_=D||I?Is(I,D)*$r:0,y=U||G?Is(U,G)*$r+_:0,y&&(g*=Math.abs(Math.cos(y*to))),i.svg&&(u-=b-(b*D+A*U),f-=A-(b*I+A*G))):(de=w[6],Xe=w[7],_e=w[8],Me=w[9],Ce=w[10],ne=w[11],u=w[12],f=w[13],h=w[14],L=Is(de,Ce),m=L*$r,L&&(E=Math.cos(-L),T=Math.sin(-L),j=Z*E+_e*T,F=O*E+Me*T,fe=de*E+Ce*T,_e=Z*-T+_e*E,Me=O*-T+Me*E,Ce=de*-T+Ce*E,ne=Xe*-T+ne*E,Z=j,O=F,de=fe),L=Is(-U,Ce),p=L*$r,L&&(E=Math.cos(-L),T=Math.sin(-L),j=D*E-_e*T,F=I*E-Me*T,fe=U*E-Ce*T,ne=G*T+ne*E,D=j,I=F,U=fe),L=Is(I,D),_=L*$r,L&&(E=Math.cos(L),T=Math.sin(L),j=D*E+I*T,F=Z*E+O*T,I=I*E-D*T,O=O*E-Z*T,D=j,Z=F),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Tt(Math.sqrt(D*D+I*I+U*U)),g=Tt(Math.sqrt(O*O+de*de)),L=Is(Z,O),y=Math.abs(L)>2e-4?L*$r:0,x=ne?1/(ne<0?-ne:ne):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!J0(mi(e,yt)),j&&e.setAttribute("transform",j))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||i.uncache,i.x=u-((i.xPercent=u&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Tt(d),i.scaleY=Tt(g),i.rotation=Tt(_)+a,i.rotationX=Tt(m)+a,i.rotationY=Tt(p)+a,i.skewX=y+a,i.skewY=v+a,i.transformPerspective=x+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Sn]=rc(c)),i.xOffset=i.yOffset=0,i.force3D=Ln.force3D,i.renderTransform=i.svg?LI:Y0?Q0:PI,i.uncache=0,i},rc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fu=function(e,t,i){var r=Qt(t);return Tt(parseFloat(t)+parseFloat(Tr(e,"x",i+"px",r)))+r},PI=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Q0(e,t)},zr="0deg",Io="0px",Vr=") ",Q0=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,f=i.rotationX,h=i.skewX,d=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,y=i.target,v=i.zOrigin,x="",b=p==="auto"&&e&&e!==1||p===!0;if(v&&(f!==zr||u!==zr)){var A=parseFloat(u)*to,w=Math.sin(A),L=Math.cos(A),E;A=parseFloat(f)*to,E=Math.cos(A),o=Fu(y,o,w*E*-v),a=Fu(y,a,-Math.sin(A)*-v),l=Fu(y,l,L*E*-v+v)}m!==Io&&(x+="perspective("+m+Vr),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(b||o!==Io||a!==Io||l!==Io)&&(x+=l!==Io||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vr),c!==zr&&(x+="rotate("+c+Vr),u!==zr&&(x+="rotateY("+u+Vr),f!==zr&&(x+="rotateX("+f+Vr),(h!==zr||d!==zr)&&(x+="skew("+h+", "+d+Vr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Vr),y.style[yt]=x||"translate(0, 0)"},LI=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,f=i.scaleX,h=i.scaleY,d=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,y=i.forceCSS,v=parseFloat(o),x=parseFloat(a),b,A,w,L,E;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=to,c*=to,b=Math.cos(l)*f,A=Math.sin(l)*f,w=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=to,E=Math.tan(c-u),E=Math.sqrt(1+E*E),w*=E,L*=E,u&&(E=Math.tan(u),E=Math.sqrt(1+E*E),b*=E,A*=E)),b=Tt(b),A=Tt(A),w=Tt(w),L=Tt(L)):(b=f,L=h,A=w=0),(v&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(v=Tr(d,"x",o,"px"),x=Tr(d,"y",a,"px")),(g||_||m||p)&&(v=Tt(v+g-(g*b+_*w)+m),x=Tt(x+_-(g*A+_*L)+p)),(r||s)&&(E=d.getBBox(),v=Tt(v+r/100*E.width),x=Tt(x+s/100*E.height)),E="matrix("+b+","+A+","+w+","+L+","+v+","+x+")",d.setAttribute("transform",E),y&&(d.style[yt]=E)},DI=function(e,t,i,r,s){var o=360,a=Ht(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?$r:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),f==="cw"&&c<0?c=(c+o*e_)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*e_)%o-~~(c/o)*o)),e._pt=h=new yn(e._pt,t,i,r,c,mI),h.e=u,h.u="deg",e._props.push(i),h},a_=function(e,t){for(var i in t)e[i]=t[i];return e},II=function(e,t,i){var r=a_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,f,h,d,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[yt]=t,a=xa(i,1),hs(i,yt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[yt],o[yt]=t,a=xa(i,1),o[yt]=c);for(l in Gi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Qt(c),g=Qt(u),f=d!==g?Tr(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new yn(e._pt,a,l,f,h-f,yh),e._pt.u=g||0,e._props.push(l));a_(a,r)};xn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ic[e>1?"border"+n:n]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return Li(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var ex={name:"css",register:Mh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,c,u,f,h,d,g,_,m,p,y,v,x,b,A,w,L;vd||Mh(),this.styles=this.styles||$0(e),L=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(wn[_]&&O0(_,t,i,r,e,s)))){if(d=typeof u,g=ic[_],d==="function"&&(u=u.call(i,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ma(u)),g)g(this,e,_,u,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",xr.lastIndex=0,xr.test(c)||(m=Qt(c),p=Qt(u)),p?m!==p&&(c=Tr(e,_,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Ht(c)&&~c.indexOf("random(")&&(c=ma(c)),Qt(c+"")||c==="auto"||(c+=Ln.units[_]||Qt(Li(e,_))||""),(c+"").charAt(1)==="="&&(c=Li(e,_))):c=Li(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in fi&&(_==="autoAlpha"&&(h===1&&Li(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),fr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Gi,v){if(this.styles.save(_),x||(b=e._gsap,b.renderTransform&&!t.parseTransform||xa(e,t.parseTransform),A=t.smoothOrigin!==!1&&b.smooth,x=this._pt=new yn(this._pt,a,yt,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new yn(this._pt,b,"scaleY",b.scaleY,(y?Qs(b.scaleY,y+f):f)-b.scaleY||0,yh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Sn,0,a[Sn]),u=RI(u),b.svg?Eh(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&fr(this,b,"zOrigin",b.zOrigin,p),fr(this,a,_,rc(c),rc(u)));continue}else if(_==="svgOrigin"){Eh(e,u,1,A,0,this);continue}else if(_ in Z0){DI(this,b,_,h,y?Qs(h,y+u):u);continue}else if(_==="smoothOrigin"){fr(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){II(this,u,e);continue}}else _ in a||(_=yo(_)||_);if(v||(f||f===0)&&(h||h===0)&&!pI.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),p=Qt(u)||(_ in Ln.units?Ln.units[_]:m),m!==p&&(h=Tr(e,_,c,p)),this._pt=new yn(this._pt,v?b:a,_,h,(y?Qs(h,y+f):f)-h,!v&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?gI:yh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=_I);else if(_ in a)wI.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){cd(_,u);continue}v||(_ in a?L.push(_,0,a[_]):typeof e[_]=="function"?L.push(_,2,e[_]()):L.push(_,1,c||e[_])),o.push(_)}}w&&V0(this)},render:function(e,t){if(t.tween._time||!xd())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Li,aliases:fi,getSetter:function(e,t,i){var r=fi[t];return r&&r.indexOf(",")<0&&(t=r),t in Gi&&t!==Sn&&(e._gsap.x||Li(e,"x"))?i&&Qm===i?t==="scale"?SI:yI:(Qm=i||{})&&(t==="scale"?MI:EI):e.style&&!od(e.style[t])?vI:~t.indexOf("-")?xI:_d(e,t)},core:{_removeProperty:hs,_getMatrix:Sd}};En.utils.checkPrefix=yo;En.core.getStyleSaver=$0;(function(n,e,t,i){var r=xn(n+","+e+","+t,function(s){Gi[s]=1});xn(e,function(s){Ln.units[s]="deg",Z0[s]=1}),fi[r[13]]=n+","+e,xn(i,function(s){var o=s.split(":");fi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ln.units[n]="px"});En.registerPlugin(ex);var tx=En.registerPlugin(ex)||En;tx.core.Tween;const UI=UA(OA),NI={class:"main-content"},OI={__name:"app",setup(n){const e=Wt("light"),t=()=>{e.value=e.value==="light"?"dark":"light",document.documentElement.setAttribute("data-theme",e.value),localStorage.setItem("theme",e.value)};return _i(()=>{e.value=localStorage.getItem("theme")||"light"}),pr("theme",e),pr("toggleTheme",t),Wt("欢迎来到我的技术博客"),_i(()=>{const i=new CR,r=new zn(75,window.innerWidth/window.innerHeight,.1,1e3),s=new xD({alpha:!0});s.setSize(window.innerWidth,window.innerHeight),document.getElementById("particle-container").appendChild(s.domElement);const o=new $i,a=[];for(let f=0;f<5e3;f++)a.push(nu.randFloatSpread(2e3),nu.randFloatSpread(2e3),nu.randFloatSpread(2e3));o.setAttribute("position",new gr(a,3));const l=new jv({size:2,color:6534125,transparent:!0,opacity:1}),c=new DR(o,l);i.add(c),r.position.z=1e3;function u(){requestAnimationFrame(u),c.rotation.x+=1e-4,c.rotation.y+=1e-4,s.render(i,r)}u(),tx.from(".animated-title",{duration:1.5,opacity:0,y:100,ease:"power4.out",delay:.5})}),(i,r)=>{const s=UI,o=XA,a=$A;return cn(),Xo("div",{class:as({dark:e.value==="dark"})},[ot(s),r[0]||(r[0]=jt("div",{id:"particle-container"},null,-1)),ot(o),jt("main",NI,[ot(a)])],2)}}},FI={__name:"nuxt-error-page",props:{error:Object},setup(n){const t=n.error;t.stack&&t.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(t.statusCode||500),r=i===404,s=t.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=t.message||t.toString(),a=void 0,u=r?ut(()=>Je(()=>import("./D6JoCKlM.js"),__vite__mapDeps([16,17,18]),import.meta.url)):ut(()=>Je(()=>import("./DVgHgIgm.js"),__vite__mapDeps([19,17,20]),import.meta.url));return(f,h)=>(cn(),Ii(_t(u),Sx(bg({statusCode:_t(i),statusMessage:_t(s),description:_t(o),stack:_t(a)})),null,16))}},BI={key:0},l_={__name:"nuxt-root",setup(n){const e=()=>null,t=pt(),i=t.deferHydration();if(t.isHydrating){const l=t.hooks.hookOnce("app:error",i);Mn().beforeEach(l)}const r=!1;pr(gc,jg()),t.hooks.callHookWith(l=>l.map(c=>c()),"vue:setup");const s=vc(),o=!1;j_((l,c,u)=>{if(t.hooks.callHook("vue:error",l,c,u).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),gE(l)&&(l.fatal||l.unhandled))return t.runWithContext(()=>ks(l)),!1});const a=!1;return(l,c)=>(cn(),Ii(xg,{onResolve:_t(i)},{default:Fs(()=>[_t(o)?(cn(),Xo("div",BI)):_t(s)?(cn(),Ii(_t(FI),{key:1,error:_t(s)},null,8,["error"])):_t(a)?(cn(),Ii(_t(e),{key:2,context:_t(a)},null,8,["context"])):_t(r)?(cn(),Ii(Ty(_t(r)),{key:3})):(cn(),Ii(_t(OI),{key:4}))]),_:1},8,["onResolve"]))}};let c_;{let n;c_=async function(){var o,a;if(n)return n;const i=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?WS(l_):GS(l_),r=nE({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||xc(l)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await sE(r,IA)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(QM),await r.hooks.callHook("app:mounted",i),await Ea()}catch(l){s(l)}return i},n=c_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{as as A,qI as B,Ii as C,VI as D,XI as E,Jt as F,mE as G,ps as H,zI as I,Aa as J,Lt as K,_t as L,Ty as M,up as N,Gl as O,_c as P,FA as _,jt as a,ot as b,Xo as c,qo as d,RA as e,GI as f,$s as g,hc as h,uT as i,gy as j,_y as k,ba as l,pf as m,ju as n,cn as o,HI as p,cc as q,Wt as r,Mn as s,Tx as t,jg as u,_i as v,Fs as w,tx as x,Y_ as y,WI as z};
