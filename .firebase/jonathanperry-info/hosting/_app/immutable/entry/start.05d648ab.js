import{o as _e,t as we}from"../chunks/scheduler.4971ffed.js";import{S as Ke,a as We,I as F,g as Fe,f as Me,b as me,c as le,s as te,i as ye,d as V,o as He,e as z,P as Ve,h as at}from"../chunks/singletons.79a0c154.js";function rt(e,r){return e==="/"||r==="ignore"?e:r==="never"?e.endsWith("/")?e.slice(0,-1):e:r==="always"&&!e.endsWith("/")?e+"/":e}function ot(e){return e.split("%25").map(decodeURI).join("%25")}function it(e){for(const r in e)e[r]=decodeURIComponent(e[r]);return e}const st=["href","pathname","search","searchParams","toString","toJSON"];function ct(e,r){const o=new URL(e);for(const i of st)Object.defineProperty(o,i,{get(){return r(),e[i]},enumerable:!0,configurable:!0});return lt(o),o}function lt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ft="/__data.json";function ut(e){return e.replace(/\/$/,"")+ft}function dt(...e){let r=5381;for(const o of e)if(typeof o=="string"){let i=o.length;for(;i;)r=r*33^o.charCodeAt(--i)}else if(ArrayBuffer.isView(o)){const i=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);let d=i.length;for(;d;)r=r*33^i[--d]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}let Se=0;const Ye=window.fetch;function ht(){Se+=1}function pt(){Se-=1}{let e=!1;(async()=>{e=new Error().stack.includes("check_stack_trace")})(),window.fetch=(o,i)=>{const d=o instanceof Request?o.url:o.toString(),u=new Error().stack.split(`
`),y=u.findIndex(O=>O.includes("load@")||O.includes("at load")),l=u.slice(0,y+2).join(`
`),g=e?l.includes("src/runtime/client/client.js"):Se,_=i==null?void 0:i.__sveltekit_fetch__;return g&&!_&&console.warn(`Loading ${d} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(o instanceof Request?o.method:(i==null?void 0:i.method)||"GET")!=="GET"&&ae.delete(Re(o)),Ye(o,i)}}const ae=new Map;function gt(e,r){const o=Re(e,r),i=document.querySelector(o);if(i!=null&&i.textContent){const{body:d,...u}=JSON.parse(i.textContent),y=i.getAttribute("data-ttl");return y&&ae.set(o,{body:d,init:u,ttl:1e3*Number(y)}),Promise.resolve(new Response(d,u))}return Xe(e,r)}function _t(e,r,o){if(ae.size>0){const i=Re(e,o),d=ae.get(i);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(o==null?void 0:o.cache))return new Response(d.body,d.init);ae.delete(i)}}return Xe(r,o)}function Xe(e,r){const o={...r};return Object.defineProperty(o,"__sveltekit_fetch__",{value:!0,writable:!0,configurable:!0}),window.fetch(e,o)}function Re(e,r){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(r!=null&&r.headers||r!=null&&r.body){const d=[];r.headers&&d.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&d.push(r.body),i+=`[data-hash="${dt(...d)}"]`}return i}const wt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function mt(e){const r=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${vt(e).map(i=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(d)return r.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return r.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const y=i.split(/\[(.+?)\](?!\])/);return"/"+y.map((g,_)=>{if(_%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(x=>parseInt(x,16))));const p=wt.exec(g);if(!p)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,O,T,R,C]=p;return r.push({name:R,matcher:C,optional:!!O,rest:!!T,chained:T?_===1&&y[0]==="":!1}),T?"(.*?)":O?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),params:r}}function yt(e){return!/^\([^)]+\)$/.test(e)}function vt(e){return e.slice(1).split("/").filter(yt)}function bt(e,r,o){const i={},d=e.slice(1),u=d.filter(l=>l!==void 0);let y=0;for(let l=0;l<r.length;l+=1){const g=r[l];let _=d[l-y];if(g.chained&&g.rest&&y&&(_=d.slice(l-y,l+1).filter(p=>p).join("/"),y=0),_===void 0){g.rest&&(i[g.name]="");continue}if(!g.matcher||o[g.matcher](_)){i[g.name]=_;const p=r[l+1],O=d[l+1];p&&!p.rest&&p.optional&&O&&g.chained&&(y=0),!p&&!O&&Object.keys(i).length===u.length&&(y=0);continue}if(g.optional&&g.chained){y++;continue}return}if(!y)return i}function ve(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function kt({nodes:e,server_loads:r,dictionary:o,matchers:i}){const d=new Set(r);return Object.entries(o).map(([l,[g,_,p]])=>{const{pattern:O,params:T}=mt(l),R={id:l,exec:C=>{const x=O.exec(C);if(x)return bt(x,T,i)},errors:[1,...p||[]].map(C=>e[C]),layouts:[0,..._||[]].map(y),leaf:u(g)};return R.errors.length=R.layouts.length=Math.max(R.errors.length,R.layouts.length),R});function u(l){const g=l<0;return g&&(l=~l),[g,e[l]]}function y(l){return l===void 0?l:[d.has(l),e[l]]}}function Ze(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Ge(e,r){const o=JSON.stringify(r);try{sessionStorage[e]=o}catch{}}const Et=-1,St=-2,Rt=-3,At=-4,$t=-5,It=-6;function Pt(e,r){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const o=e,i=Array(o.length);function d(u,y=!1){if(u===Et)return;if(u===Rt)return NaN;if(u===At)return 1/0;if(u===$t)return-1/0;if(u===It)return-0;if(y)throw new Error("Invalid input");if(u in i)return i[u];const l=o[u];if(!l||typeof l!="object")i[u]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const g=l[0],_=r==null?void 0:r[g];if(_)return i[u]=_(d(l[1]));switch(g){case"Date":i[u]=new Date(l[1]);break;case"Set":const p=new Set;i[u]=p;for(let R=1;R<l.length;R+=1)p.add(d(l[R]));break;case"Map":const O=new Map;i[u]=O;for(let R=1;R<l.length;R+=2)O.set(d(l[R]),d(l[R+1]));break;case"RegExp":i[u]=new RegExp(l[1],l[2]);break;case"Object":i[u]=Object(l[1]);break;case"BigInt":i[u]=BigInt(l[1]);break;case"null":const T=Object.create(null);i[u]=T;for(let R=1;R<l.length;R+=2)T[l[R]]=d(l[R+1]);break;default:throw new Error(`Unknown type ${g}`)}}else{const g=new Array(l.length);i[u]=g;for(let _=0;_<l.length;_+=1){const p=l[_];p!==St&&(g[_]=d(p))}}else{const g={};i[u]=g;for(const _ in l){const p=l[_];g[_]=d(p)}}return i[u]}return d(0)}function Lt(e){return e.filter(r=>r!=null)}function Ot(e){function r(o,i){if(o)for(const d in o){if(d[0]==="_"||e.has(d))continue;const u=[...e.values()],y=jt(d,i==null?void 0:i.slice(i.lastIndexOf(".")))??`valid exports are ${u.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${i?` in ${i}`:""} (${y})`)}}return r}function jt(e,r=".js"){const o=[];if(Ae.has(e)&&o.push(`+layout${r}`),Qe.has(e)&&o.push(`+page${r}`),et.has(e)&&o.push(`+layout.server${r}`),xt.has(e)&&o.push(`+page.server${r}`),Tt.has(e)&&o.push(`+server${r}`),o.length>0)return`'${e}' is a valid export in ${o.slice(0,-1).join(", ")}${o.length>1?" or ":""}${o.at(-1)}`}const Ae=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Qe=new Set([...Ae,"entries"]),et=new Set([...Ae]),xt=new Set([...et,"actions","entries"]),Tt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),Ut=Ot(Qe);async function Nt(e){var r;for(const o in e)if(typeof((r=e[o])==null?void 0:r.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([i,d])=>[i,await d])));return e}class ne{constructor(r,o){this.status=r,typeof o=="string"?this.body={message:o}:o?this.body=o:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(r,o){this.status=r,this.location=o}}function Ct(e,r){const o=/^(moz-icon|view-source|jar):/.exec(r);o&&console.warn(`${e}: Calling \`depends('${r}')\` will throw an error in Firefox because \`${o[1]}\` is a special URI scheme`)}const be="x-sveltekit-invalidated",Dt="x-sveltekit-trailing-slash",B=Ze(Ke)??{},ee=Ze(We)??{};function ke(e){B[e]=te()}function J(e){return location.href=e.href,new Promise(()=>{})}function qt(e,r){var Ce;const o=kt(e),i=e.nodes[0],d=e.nodes[1];i(),d();const u=document.documentElement,y=[],l=[];let g=null;const _={before_navigate:[],on_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},O=!1,T=!1,R=!0,C=!1,x=!1,D=!1,K=!1,M,j=(Ce=history.state)==null?void 0:Ce[F];j||(j=Date.now(),history.replaceState({...history.state,[F]:j},"",location.href));const fe=B[j];fe&&(history.scrollRestoration="manual",scrollTo(fe.x,fe.y));let H,W,Y;async function $e(){if(Y=Y||Promise.resolve(),await Y,!Y)return;Y=null;const t=new URL(location.href),c=Z(t,!0);g=null;const n=W={},s=c&&await he(c);if(n===W&&s){if(s.type==="redirect")return re(new URL(s.location,t).href,{},1,n);s.props.page!==void 0&&(H=s.props.page),M.$set(s.props)}}function Ie(t){l.some(c=>c==null?void 0:c.snapshot)&&(ee[t]=l.map(c=>{var n;return(n=c==null?void 0:c.snapshot)==null?void 0:n.capture()}))}function Pe(t){var c;(c=ee[t])==null||c.forEach((n,s)=>{var a,f;(f=(a=l[s])==null?void 0:a.snapshot)==null||f.restore(n)})}function Le(){ke(j),Ge(Ke,B),Ie(j),Ge(We,ee)}async function re(t,{noScroll:c=!1,replaceState:n=!1,keepFocus:s=!1,state:a={},invalidateAll:f=!1},h,b){return typeof t=="string"&&(t=new URL(t,Fe(document))),ce({url:t,scroll:c?te():null,keepfocus:s,redirect_count:h,details:{state:a,replaceState:n},nav_token:b,accepted:()=>{f&&(K=!0)},blocked:()=>{},type:"goto"})}async function Oe(t){return g={id:t.id,promise:he(t).then(c=>(c.type==="loaded"&&c.state.error&&(g=null),c))},g.promise}async function oe(...t){const n=o.filter(s=>t.some(a=>s.exec(a))).map(s=>Promise.all([...s.layouts,s.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function je(t){var s;if(t.state.error&&document.querySelector("vite-error-overlay"))return;p=t.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),H=t.props.page,M=new e.root({target:r,props:{...t.props,stores:V,components:l},hydrate:!0}),Pe(j);const n={from:null,to:{params:p.params,route:{id:((s=p.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};_.after_navigate.forEach(a=>a(n)),T=!0}async function X({url:t,params:c,branch:n,status:s,error:a,route:f,form:h}){let b="never";for(const w of n)(w==null?void 0:w.slash)!==void 0&&(b=w.slash);t.pathname=rt(t.pathname,b),t.search=t.search;const k={type:"loaded",state:{url:t,params:c,branch:n,error:a,route:f},props:{constructors:Lt(n).map(w=>w.node.component)}};h!==void 0&&(k.props.form=h);let v={},I=!H,A=0;for(let w=0;w<Math.max(n.length,p.branch.length);w+=1){const m=n[w],L=p.branch[w];(m==null?void 0:m.data)!==(L==null?void 0:L.data)&&(I=!0),m&&(v={...v,...m.data},I&&(k.props[`data_${A}`]=v),A+=1)}return(!p.url||t.href!==p.url.href||p.error!==a||h!==void 0&&h!==H.form||I)&&(k.props.page={error:a,params:c,route:{id:(f==null?void 0:f.id)??null},status:s,url:new URL(t),form:h??null,data:I?v:H.data}),k}async function ue({loader:t,parent:c,url:n,params:s,route:a,server_data_node:f}){var v,I,A;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},k=await t();if(Ut(k.universal),(v=k.universal)!=null&&v.load){let P=function(...m){for(const L of m){Ct(a.id,L);const{href:U}=new URL(L,n);b.dependencies.add(U)}};const w={route:new Proxy(a,{get:(m,L)=>(b.route=!0,m[L])}),params:new Proxy(s,{get:(m,L)=>(b.params.add(L),m[L])}),data:(f==null?void 0:f.data)??null,url:ct(n,()=>{b.url=!0}),async fetch(m,L){let U;m instanceof Request?(U=m.url,L={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...L}):U=m;const q=new URL(U,n);return P(q.href),q.origin===n.origin&&(U=q.href.slice(n.origin.length)),T?_t(U,q.href,L):gt(U,L)},setHeaders:()=>{},depends:P,parent(){return b.parent=!0,c()}};try{if(ht(),h=await k.universal.load.call(null,w)??null,h!=null&&Object.getPrototypeOf(h)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof h!="object"?`a ${typeof h}`:h instanceof Response?"a Response object":Array.isArray(h)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{pt()}h=h?await Nt(h):null}return{node:k,loader:t,server:f,universal:(I=k.universal)!=null&&I.load?{type:"data",data:h,uses:b}:null,data:h??(f==null?void 0:f.data)??null,slash:((A=k.universal)==null?void 0:A.trailingSlash)??(f==null?void 0:f.slash)}}function xe(t,c,n,s,a){if(K)return!0;if(!s)return!1;if(s.parent&&t||s.route&&c||s.url&&n)return!0;for(const f of s.params)if(a[f]!==p.params[f])return!0;for(const f of s.dependencies)if(y.some(h=>h(new URL(f))))return!0;return!1}function de(t,c){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?c??null:null}async function he({id:t,invalidating:c,url:n,params:s,route:a}){if((g==null?void 0:g.id)===t)return g.promise;const{errors:f,layouts:h,leaf:b}=a,k=[...h,b];f.forEach(E=>E==null?void 0:E().catch(()=>{})),k.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let v=null;const I=p.url?t!==p.url.pathname+p.url.search:!1,A=p.route?a.id!==p.route.id:!1;let P=!1;const w=k.map((E,$)=>{var G;const S=p.branch[$],N=!!(E!=null&&E[0])&&((S==null?void 0:S.loader)!==E[1]||xe(P,A,I,(G=S.server)==null?void 0:G.uses,s));return N&&(P=!0),N});if(w.some(Boolean)){try{v=await Be(n,w)}catch(E){return ie({status:E instanceof ne?E.status:500,error:await Q(E,{url:n,params:s,route:{id:a.id}}),url:n,route:a})}if(v.type==="redirect")return v}const m=v==null?void 0:v.nodes;let L=!1;const U=k.map(async(E,$)=>{var pe;if(!E)return;const S=p.branch[$],N=m==null?void 0:m[$];if((!N||N.type==="skip")&&E[1]===(S==null?void 0:S.loader)&&!xe(L,A,I,(pe=S.universal)==null?void 0:pe.uses,s))return S;if(L=!0,(N==null?void 0:N.type)==="error")throw N;return ue({loader:E[1],url:n,params:s,route:a,parent:async()=>{var qe;const De={};for(let ge=0;ge<$;ge+=1)Object.assign(De,(qe=await U[ge])==null?void 0:qe.data);return De},server_data_node:de(N===void 0&&E[0]?{type:"skip"}:N??null,E[0]?S==null?void 0:S.server:void 0)})});for(const E of U)E.catch(()=>{});const q=[];for(let E=0;E<k.length;E+=1)if(k[E])try{q.push(await U[E])}catch($){if($ instanceof ze)return{type:"redirect",location:$.location};let S=500,N;if(m!=null&&m.includes($))S=$.status??S,N=$.error;else if($ instanceof ne)S=$.status,N=$.body;else{if(await V.updated.check())return await J(n);N=await Q($,{params:s,url:n,route:{id:a.id}})}const G=await Te(E,q,f);return G?await X({url:n,params:s,branch:q.slice(0,G.idx).concat(G.node),status:S,error:N,route:a}):await Ne(n,{id:a.id},N,S)}else q.push(void 0);return await X({url:n,params:s,branch:q,status:200,error:null,route:a,form:c?void 0:null})}async function Te(t,c,n){for(;t--;)if(n[t]){let s=t;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:t,error:c,url:n,route:s}){const a={};let f=null;if(e.server_loads[0]===0)try{const v=await Be(n,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;f=v.nodes[0]??null}catch{(n.origin!==He||n.pathname!==location.pathname||O)&&await J(n)}const b=await ue({loader:i,url:n,params:a,route:s,parent:()=>Promise.resolve({}),server_data_node:de(f)}),k={node:await d(),loader:d,universal:null,server:null,data:null};return await X({url:n,params:a,branch:[b,k],status:t,error:c,route:null})}function Z(t,c){if(ye(t,z))return;const n=se(t);for(const s of o){const a=s.exec(n);if(a)return{id:t.pathname+t.search,invalidating:c,route:s,params:it(a),url:t}}}function se(t){return ot(t.pathname.slice(z.length)||"/")}function Ue({url:t,type:c,intent:n,delta:s}){let a=!1;const f=Je(p,n,t,c);s!==void 0&&(f.navigation.delta=s);const h={...f.navigation,cancel:()=>{a=!0,f.reject(new Error("navigation was cancelled"))}};return x||_.before_navigate.forEach(b=>b(h)),a?null:f}async function ce({url:t,scroll:c,keepfocus:n,redirect_count:s,details:a,type:f,delta:h,nav_token:b={},accepted:k,blocked:v}){var U,q,E;const I=Z(t,!1),A=Ue({url:t,type:f,delta:h,intent:I});if(!A){v();return}const P=j;k(),x=!0,T&&V.navigating.set(A.navigation),W=b;let w=I&&await he(I);if(!w){if(ye(t,z))return await J(t);w=await Ne(t,{id:null},await Q(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(I==null?void 0:I.url)||t,W!==b)return A.reject(new Error("navigation was aborted")),!1;if(w.type==="redirect")if(s>=20)w=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return re(new URL(w.location,t).href,{},s+1,b),!1;else((U=w.props.page)==null?void 0:U.status)>=400&&await V.updated.check()&&await J(t);if(y.length=0,K=!1,C=!0,ke(P),Ie(P),(q=w.props.page)!=null&&q.url&&w.props.page.url.pathname!==t.pathname&&(t.pathname=(E=w.props.page)==null?void 0:E.url.pathname),a){const $=a.replaceState?0:1;if(a.state[F]=j+=$,history[a.replaceState?"replaceState":"pushState"](a.state,"",t),!a.replaceState){let S=j+1;for(;ee[S]||B[S];)delete ee[S],delete B[S],S+=1}}if(g=null,T){p=w.state,w.props.page&&(w.props.page.url=t);const $=(await Promise.all(_.on_navigate.map(S=>S(A.navigation)))).filter(S=>typeof S=="function");if($.length>0){let S=function(){_.after_navigate=_.after_navigate.filter(N=>!$.includes(N))};$.push(S),_.after_navigate.push(...$)}M.$set(w.props)}else je(w);const{activeElement:m}=document;if(await we(),R){const $=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));c?scrollTo(c.x,c.y):$?$.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==m&&document.activeElement!==document.body;!n&&!L&&Ee(),R=!0,w.props.page&&(H=w.props.page),x=!1,f==="popstate"&&Pe(j),A.fulfil(void 0),_.after_navigate.forEach($=>$(A.navigation)),V.navigating.set(null),C=!1}async function Ne(t,c,n,s){if(t.origin===He&&t.pathname===location.pathname&&!O)return await ie({status:s,error:n,url:t,route:c});if(s!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await J(t)}function nt(){let t;u.addEventListener("mousemove",f=>{const h=f.target;clearTimeout(t),t=setTimeout(()=>{s(h,2)},20)});function c(f){s(f.composedPath()[0],1)}u.addEventListener("mousedown",c),u.addEventListener("touchstart",c,{passive:!0});const n=new IntersectionObserver(f=>{for(const h of f)h.isIntersecting&&(oe(se(new URL(h.target.href))),n.unobserve(h.target))},{threshold:0});function s(f,h){const b=Me(f,u);if(!b)return;const{url:k,external:v,download:I}=me(b,z);if(v||I)return;const A=le(b);if(!A.reload)if(h<=A.preload_data){const P=Z(k,!1);P&&Oe(P).then(w=>{w.type==="loaded"&&w.state.error&&console.warn(`Preloading data for ${P.url.pathname} failed with the following error: ${w.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else h<=A.preload_code&&oe(se(k))}function a(){n.disconnect();for(const f of u.querySelectorAll("a")){const{url:h,external:b,download:k}=me(f,z);if(b||k)continue;const v=le(f);v.reload||(v.preload_code===Ve.viewport&&n.observe(f),v.preload_code===Ve.eager&&oe(se(h)))}}_.after_navigate.push(a),a()}function Q(t,c){return t instanceof ne?t.body:(console.warn("The next HMR update will cause the page to reload"),e.hooks.handleError({error:t,event:c})??{message:c.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:t=>{_e(()=>(_.after_navigate.push(t),()=>{const c=_.after_navigate.indexOf(t);_.after_navigate.splice(c,1)}))},before_navigate:t=>{_e(()=>(_.before_navigate.push(t),()=>{const c=_.before_navigate.indexOf(t);_.before_navigate.splice(c,1)}))},on_navigate:t=>{_e(()=>(_.on_navigate.push(t),()=>{const c=_.on_navigate.indexOf(t);_.on_navigate.splice(c,1)}))},disable_scroll_handling:()=>{if(T&&!C)throw new Error("Can only disable scroll handling during navigation");(C||!T)&&(R=!1)},goto:(t,c={})=>re(t,c,0),invalidate:t=>{if(typeof t=="function")y.push(t);else{const{href:c}=new URL(t,location.href);y.push(n=>n.href===c)}return $e()},invalidate_all:()=>(K=!0,$e()),preload_data:async t=>{const c=new URL(t,Fe(document)),n=Z(c,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${c}`);await Oe(n)},preload_code:oe,apply_action:async t=>{if(t.type==="error"){const c=new URL(location.href),{branch:n,route:s}=p;if(!s)return;const a=await Te(p.branch.length,n,s.errors);if(a){const f=await X({url:c,params:p.params,branch:n.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:s});p=f.state,M.$set(f.props),we().then(Ee)}}else t.type==="redirect"?re(t.location,{invalidateAll:!0},0):(M.$set({form:null,page:{...H,form:t.data,status:t.status}}),await we(),M.$set({form:t.data}),t.type==="success"&&Ee())},_start_router:()=>{var c;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let s=!1;if(Le(),!x){const a=Je(p,void 0,null,"leave"),f={...a.navigation,cancel:()=>{s=!0,a.reject(new Error("navigation was cancelled"))}};_.before_navigate.forEach(h=>h(f))}s?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),(c=navigator.connection)!=null&&c.saveData||nt(),u.addEventListener("click",n=>{var P;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const s=Me(n.composedPath()[0],u);if(!s)return;const{url:a,external:f,target:h,download:b}=me(s,z);if(!a)return;if(h==="_parent"||h==="_top"){if(window.parent!==window)return}else if(h&&h!=="_self")return;const k=le(s);if(!(s instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||b)return;if(f||k.reload){Ue({url:a,type:"link"})?x=!0:n.preventDefault();return}const[I,A]=a.href.split("#");if(A!==void 0&&I===location.href.split("#")[0]){if(p.url.hash===a.hash){n.preventDefault(),(P=s.ownerDocument.getElementById(A))==null||P.scrollIntoView();return}if(D=!0,ke(j),t(a),!k.replace_state)return;D=!1,n.preventDefault()}ce({url:a,scroll:k.noscroll?te():null,keepfocus:k.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:k.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),u.addEventListener("submit",n=>{if(n.defaultPrevented)return;const s=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||s.method)!=="get")return;const h=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||s.action);if(ye(h,z))return;const b=n.target,{keep_focus:k,noscroll:v,reload:I,replace_state:A}=le(b);if(I)return;n.preventDefault(),n.stopPropagation();const P=new FormData(b),w=a==null?void 0:a.getAttribute("name");w&&P.append(w,(a==null?void 0:a.getAttribute("value"))??""),h.search=new URLSearchParams(P).toString(),ce({url:h,scroll:v?te():null,keepfocus:k??!1,redirect_count:0,details:{state:{},replaceState:A??h.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var s;if(W={},(s=n.state)!=null&&s[F]){if(n.state[F]===j)return;const a=B[n.state[F]],f=new URL(location.href);if(p.url.href.split("#")[0]===location.href.split("#")[0]){t(f),B[j]=te(),j=n.state[F],scrollTo(a.x,a.y);return}const h=n.state[F]-j;await ce({url:f,scroll:a,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{j=n.state[F]},blocked:()=>{history.go(-h)},type:"popstate",delta:h,nav_token:W})}else if(!D){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{D&&(D=!1,history.replaceState({...history.state,[F]:++j},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&V.navigating.set(null)});function t(n){p.url=n,V.page.set({...H,url:n}),V.page.notify()}},_hydrate:async({status:t=200,error:c,node_ids:n,params:s,route:a,data:f,form:h})=>{O=!0;const b=new URL(location.href);({params:s={},route:a={id:null}}=Z(b,!1)||{});let k;try{const v=n.map(async(P,w)=>{const m=f[w];return m!=null&&m.uses&&(m.uses=tt(m.uses)),ue({loader:e.nodes[P],url:b,params:s,route:a,parent:async()=>{const L={};for(let U=0;U<w;U+=1)Object.assign(L,(await v[U]).data);return L},server_data_node:de(m)})}),I=await Promise.all(v),A=o.find(({id:P})=>P===a.id);if(A){const P=A.layouts;for(let w=0;w<P.length;w++)P[w]||I.splice(w,0,void 0)}k=await X({url:b,params:s,branch:I,status:t,error:c,form:h,route:A??null})}catch(v){if(v instanceof ze){await J(new URL(v.location,location.href));return}k=await ie({status:v instanceof ne?v.status:500,error:await Q(v,{url:b,params:s,route:a}),url:b,route:a})}je(k)}}}async function Be(e,r){var d;const o=new URL(e);if(o.pathname=ut(e.pathname),e.pathname.endsWith("/")&&o.searchParams.append(Dt,"1"),e.searchParams.has(be))throw new Error(`Cannot used reserved query parameter "${be}"`);o.searchParams.append(be,r.map(u=>u?"1":"0").join(""));const i=await Ye(o.href);if((d=i.headers.get("content-type"))!=null&&d.includes("text/html")&&await J(e),!i.ok)throw new ne(i.status,await i.json());return new Promise(async u=>{var O;const y=new Map,l=i.body.getReader(),g=new TextDecoder;function _(T){return Pt(T,{Promise:R=>new Promise((C,x)=>{y.set(R,{fulfil:C,reject:x})})})}let p="";for(;;){const{done:T,value:R}=await l.read();if(T&&!p)break;for(p+=!R&&p?`
`:g.decode(R);;){const C=p.indexOf(`
`);if(C===-1)break;const x=JSON.parse(p.slice(0,C));if(p=p.slice(C+1),x.type==="redirect")return u(x);if(x.type==="data")(O=x.nodes)==null||O.forEach(D=>{(D==null?void 0:D.type)==="data"&&(D.uses=tt(D.uses),D.data=_(D.data))}),u(x);else if(x.type==="chunk"){const{id:D,data:K,error:M}=x,j=y.get(D);y.delete(D),M?j.reject(_(M)):j.fulfil(_(K))}}}})}function tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Ee(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const r=document.body,o=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),o!==null?r.setAttribute("tabindex",o):r.removeAttribute("tabindex");const i=getSelection();if(i&&i.type!=="None"){const d=[];for(let u=0;u<i.rangeCount;u+=1)d.push(i.getRangeAt(u));setTimeout(()=>{if(i.rangeCount===d.length){for(let u=0;u<i.rangeCount;u+=1){const y=d[u],l=i.getRangeAt(u);if(y.commonAncestorContainer!==l.commonAncestorContainer||y.startContainer!==l.startContainer||y.endContainer!==l.endContainer||y.startOffset!==l.startOffset||y.endOffset!==l.endOffset)return}i.removeAllRanges()}})}}}function Je(e,r,o,i){var g,_;let d,u;const y=new Promise((p,O)=>{d=p,u=O});return y.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((g=e.route)==null?void 0:g.id)??null},url:e.url},to:o&&{params:(r==null?void 0:r.params)??null,route:{id:((_=r==null?void 0:r.route)==null?void 0:_.id)??null},url:o},willUnload:!r,type:i,complete:y},fulfil:d,reject:u}}{const e=console.warn;console.warn=function(...o){o.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(o[0])||e(...o)}}async function Ht(e,r,o){r===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const i=qt(e,r);at({client:i}),o?await i._hydrate(o):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Ht as start};
