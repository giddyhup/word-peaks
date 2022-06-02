var rt=Object.defineProperty,st=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var ke=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var Oe=(t,e,a)=>e in t?rt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,w=(t,e)=>{for(var a in e||(e={}))ot.call(e,a)&&Oe(t,a,e[a]);if(ke)for(var a of ke(e))it.call(e,a)&&Oe(t,a,e[a]);return t},F=(t,e)=>st(t,nt(e));import{$ as i,K as lt}from"./index-8c23243b.js";import{w as m,_ as E,d as b}from"./preload-helper-cc41f808.js";var Pe=Object.freeze(Object.defineProperty({__proto__:null,get storeVersion(){return ye},get storedLocale(){return Dt},get openScreen(){return Tt},get highContrast(){return ee},get showAllHints(){return te},get swapEnterBackspace(){return ae},get keyboardLayout(){return re},get dyslexicFont(){return se},get shareURL(){return ne},get shareTimes(){return oe},get lastPlayedDaily(){return me},get stats(){return ie},get lastDailyDetail(){return K},get lastRandomDetail(){return J},get lastGameDetail(){return _t},get newUser(){return Et},get answerDaily(){return C},get answerRandom(){return G},get guessesDaily(){return N},get guessesRandom(){return Z},get lastPlayedDailyWasHard(){return z},get lastPlayedRandomWasHard(){return B},get hardMode(){return yt},get changeHardMode(){return mt},get gameMode(){return _},get lastPlayedWasHard(){return Ie},get invalidHardModeGuess(){return vt},get notEnoughLetters(){return bt},get invalidWord(){return wt},get invalidWordPreview(){return kt},get boardContent(){return de},get answer(){return H},get guesses(){return j},get updateGuesses(){return Ot},get guessTimesDaily(){return fe},get guessTimesRandom(){return ge},get guessTimes(){return Ce},get currentRow(){return pe},get currentTile(){return He},get gameWon(){return qe},get gameFinished(){return he},get validLetters(){return Lt},get initGameState(){return Ne}},Symbol.toStringTag,{value:"Module"})),X={};function y(t,e){const a=typeof localStorage!="undefined";function r(s,n){!a||localStorage.setItem(s,JSON.stringify(n))}if(!X[t]){const s=m(e,l=>{const d=a?localStorage.getItem(t):null;if(d&&l(JSON.parse(d)),a){const c=f=>{f.key===t&&l(f.newValue?JSON.parse(f.newValue):null)};return window.addEventListener("storage",c),()=>window.removeEventListener("storage",c)}}),{subscribe:n,set:o}=s;X[t]={set(l){r(t,l),o(l)},update(l){const d=l(i(s));r(t,d),o(d)},subscribe:n}}return X[t]}const S=6,q=5;let I;async function Re(){I||(I=(await E(()=>import("./targets-filtered-02e8b7ca.js"),[])).default)}let V;async function ct(){V||(V=(await E(()=>import("./dictionary-filtered-f84f8acf.js"),[])).default)}async function wa(t){return V||await ct(),V.includes(t)}function xe(){const t=[];for(let e=0;e<S;e++){const a=[];t[e]=a;for(let r=0;r<q;r++)a.push({id:r,letter:"",scored:!1,distance:0,magnitude:0,polarity:0})}return t}function ut(t,e,a,r,s){const n=$.indexOf(t)-$.indexOf(e[r]),o=n===0?0:n>0?1:-1;let l=0;if(a===0)l=S;else{const d=s[a-1][r];d.polarity!==o?l=S:Math.abs(n)>Math.abs(d.distance)?l=d.magnitude+1:Math.abs(n)<Math.abs(d.distance)&&(l=d.magnitude-1);const c=s.find((f,h)=>h<a&&f[r].letter===t);c&&(l=c[r].magnitude)}return n===0&&(l=0),{id:r,scored:!0,distance:n,magnitude:l,polarity:o,letter:t}}function Ae(t,e,a){if(a===q)return new Set;const r=new Set($);return $.forEach(s=>{if(!!r.has(s))for(let n=0;n<e;n++){const o=t[n][a];o.distance===0&&s!==o.letter&&r.delete(s),o.distance<0&&s<=o.letter&&r.delete(s),o.distance>0&&s>=o.letter&&r.delete(s)}}),r}function dt(t){return t.map(e=>e.letter).join("")}function ft(t){return[$.find(e=>t.has(e)),[...$].reverse().find(e=>t.has(e))]}function ka(t,e){const a=dt(t[e]);return!(a.length<q||a.includes(" "))}const je=new Date(2022,1,25),Oa=()=>{let t=0;const e=new Date(je),a=new Date;for(a.setHours(0,0,0,0);e<a;)t++,e.setDate(e.getDate()+1);return t};async function La(t){return await Re(),I[t%I.length]}const Da=t=>{const e=new Date(je);let a=new Date(e);return a.setDate(e.getDate()+t+1),a};function gt(t){return t[Math.floor(Math.random()*t.length)]}async function Ta(){return await Re(),gt(I)}function pt(t){let e=0;for(const[a,r]of[...t].entries())e+=$.indexOf(r)<<a*5;return e.toString(36)}function _a(t){if(!t)return!1;let e="";for(let a=0;a<q;a++)e+=$[(parseInt(t,36)&31<<a*5)>>a*5];return e.length===5&&e}const $="abcdefghijklmnopqrstuvwxyz".split(""),ht=["alphabetic","qwerty","azerty","qwertz","dvorak","colemak"],Ea=[{value:"alphabetic",label:"Alphabetic",layout:[["a","b","c","d","e","f","g","h","i","j"],["k","l","m","n","o","p","q","r","s","t"],["u","v","w","x","y","z"]],wideKeysRow:2},{value:"qwerty",label:"QWERTY",layout:[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["z","x","c","v","b","n","m"]],wideKeysRow:2},{value:"azerty",label:"AZERTY",layout:[["a","z","e","r","t","y","u","i","o","p"],["q","s","d","f","g","h","j","k","l","m"],["z","x","c","v","b","n"]],wideKeysRow:2},{value:"qwertz",label:"QWERTZ",layout:[["q","w","e","r","t","z","u","i","o","p"],["a","s","d","f","g","h","j","k","l"],["y","x","c","v","b","n","m"]],wideKeysRow:2},{value:"dvorak",label:"Dvorak",layout:[["p","y","f","g","c","r","l"],["a","o","e","u","i","d","h","t","n","s"],["q","j","k","x","b","m","w","v","z"]],wideKeysRow:0},{value:"colemak",label:"Colemak",layout:[["q","w","f","p","g","j","l","u","y"],["a","r","s","t","d","h","n","e","i","o"],["z","x","c","v","b","k","m"]],wideKeysRow:2}],We=()=>({currentStreak:0,bestStreak:0,totalGames:0,wonGames:0,distribution:new Array(S).fill(0)});function Sa(){const t=i(_);Pe[t==="daily"?"lastDailyDetail":"lastRandomDetail"].set({mode:t,dayNumber:t==="daily"?i(me)+1:0,hardMode:i(Ie),answer:i(H),guesses:i(j),guessTimes:i(Ce),hash:t==="daily"?null:pt(i(H))})}function $a(t){Pe[i(_)==="daily"?"guessTimesDaily":"guessTimesRandom"].update(e=>(e[t]=new Date().getTime(),e))}const Pa=t=>t.distribution.reduce((e,a)=>Math.max(e,a),1),C=y("wp-answer",""),G=y("wp-answerRandom",""),N=y("wp-guesses",[]),Z=y("wp-guessesRandom",[]),z=y("wp-lastPlayedWasHard",!1),B=y("wp-lastPlayedRandomWasHard",!1),Me=y("wp-hardMode",!1),yt=b(Me,t=>t),mt=t=>{if(!i(he)&&i(j).length>0)throw"Can't change that during a game!";Me.set(t)},_=m("daily"),Ie=b([_,z,B],([t,e,a])=>t==="daily"?e:a),vt=m(!1),bt=m(!1),wt=m(!1),kt=m(!1),de=m(xe()),H=b([_,C,G],([t,e,a])=>t==="daily"?e:a),j=b([_,N,Z],([t,e,a])=>t==="daily"?e:a);function Ot(t){(i(_)==="daily"?N:Z).update(t)}const fe=y("wp-guessTimesDaily",[]),ge=y("wp-guessTimesRandom",[]),Ce=b([_,fe,ge],([t,e,a])=>t==="daily"?e:a),pe=b(j,t=>t.length),He=m(0),qe=b([H,j],([t,e])=>e.length>0&&e[e.length-1]===t),he=b([pe,qe],([t,e])=>e||t===S),Lt=b([de,pe,He,he],([t,e,a,r])=>r?new Set:Ae(t,e,a));function Ne(){j.subscribe(t=>{de.update(e=>{const a=xe();return e.forEach((r,s)=>{if(s<t.length){const n=t[s];a[s]=[...n].map((o,l)=>ut(o,i(H),s,l,e))}else s>0&&s===t.length&&a[s].forEach((n,o)=>{n.letterBounds=ft(Ae(a,s,o))})}),a})})}const ye=y("wp-version",0),Dt=y("wp-locale",""),Tt=m(null),ee=y("wp-highContrast",!1),te=y("wp-showAllHints",!1),ae=y("wp-swapEnterBackspace",!1),re=y("wp-keyboardLayout","alphabetic"),se=y("wp-dyslexicFont",!1),ne=y("wp-shareURL",!0),oe=y("wp-shareTimes",!1),me=y("wp-lastPlayedDaily",-1),ie=y("wp-stats",We()),K=y("wp-lastDailyDetail",null),J=y("wp-lastRandomDetail",null),_t=b([_,K,J],([t,e,a])=>t==="daily"?e:a),Et=m(!1),W=t=>!t||typeof t!="string"&&!(t instanceof String)||t.length!==q;function St(){[!0,!1].includes(i(ee))||ee.set(!1),[!0,!1].includes(i(te))||te.set(!1),[!0,!1].includes(i(ae))||ae.set(!1),[!0,!1].includes(i(se))||se.set(!1),[!0,!1].includes(i(ne))||ne.set(!0),[!0,!1].includes(i(oe))||oe.set(!1),ht.includes(i(re))||re.set("qwerty");const t=i(ie);t.currentStreak>=0||(t.currentStreak=0),t.bestStreak>=0||(t.bestStreak=0),t.totalGames>=0||(t.totalGames=0),t.wonGames>=0||(t.wonGames=0),(!Array.isArray(t.distribution)||t.distribution.length!==S)&&(t.distribution=We().distribution);for(let r=0;r<t.distribution.length;r++)t.distribution[r]>=0||(t.distribution[r]=0);ie.set(t),[["daily",i(K)],["random",i(J)]].forEach(([r,s])=>{if(s!==null)try{if(s.mode!==r)throw"wrong mode";if(!(s.dayNumber>=0))throw"invalid day number";if(![!0,!1].includes(s.hardMode))throw"invalid hard mode setting";if(W(s.answer))throw"invalid answer";if(!Array.isArray(s.guesses)||s.guesses.length<1||s.guesses.length>S)throw"invalid guesses array";if(s.guesses.some(W))throw"invalid guess(es)";if(!Array.isArray(s.guessTimes)||s.guessTimes.length!==s.guesses.length+1)throw"invalid guessTimes array";const n=new Date().getTime();for(let o=0;o<s.guessTimes.length;o++)if(!(s.guessTimes[o]>=n-1e12))throw"invalid guess time"}catch{r==="daily"?K.set(null):J.set(null)}}),W(i(C))&&C.set(""),W(i(G))&&G.set(""),[!0,!1].includes(i(z))||z.set(!1),[!0,!1].includes(i(B))||B.set(!1),[[N,fe],[Z,ge]].forEach(([r,s])=>{try{if(!Array.isArray(i(r))||i(r).length>S||i(r).some(W))throw"invalid guess(es)";if(!Array.isArray(i(s))||i(s).length!==i(r).length+1)throw"invalid guessTimes array";const n=new Date().getTime();for(let o=0;o<i(s).length;o++)if(!(i(s)[o]>=n-1e12))throw"invalid guess time"}catch{r.set([]),s.set([])}})}const $t=1,Le=i(ye);(!Le||Le<1)&&(me.set(-1),C.set(""),N.set([]));ye.set($t);St();Ne();var Pt=Object.defineProperty,Rt=Object.defineProperties,xt=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,Fe=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable,De=(t,e,a)=>e in t?Pt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,v=(t,e)=>{for(var a in e||(e={}))Fe.call(e,a)&&De(t,a,e[a]);if(U)for(var a of U(e))Ve.call(e,a)&&De(t,a,e[a]);return t},O=(t,e)=>Rt(t,xt(e)),le=(t,e)=>{var a={};for(var r in t)Fe.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&U)for(var r of U(t))e.indexOf(r)<0&&Ve.call(t,r)&&(a[r]=t[r]);return a},Te=({parser:t,key:e,params:a,translations:r,locale:s,fallbackLocale:n})=>{if(!(e&&s))return console.warn("[i18n]: No translation key or locale provided. Skipping translation..."),"";let o=(r[s]||{})[e];return n&&o===void 0&&(o=(r[n]||{})[e]),t.parse(o,a,s,e)},k=(...t)=>t.length?t.filter(e=>!!e).map(e=>{let a=`${e}`.toLowerCase();try{if([a]=Intl.Collator.supportedLocalesOf(e),!a)throw new Error(`[i18n]: '${e}' is non-standard.`)}catch{console.warn(`[i18n]: Non-standard locale provided: '${e}'. Check your 'translations' and 'loaders' in i18n config...`)}return a}):[],ve=(t,e)=>Object.keys(t||{}).reduce((a,r)=>{let s=t[r],n=e?`${e}.${r}`:`${r}`;return s&&typeof s=="object"?v(v({},a),ve(s,n)):O(v({},a),{[n]:s})},{}),At=async t=>{try{return(await Promise.all(t.map(e=>{var a=e,{loader:r}=a,s=le(a,["loader"]);return new Promise(async n=>{let o;try{o=await r()}catch(l){console.error(`[i18n]: Failed to load translation. Verify your '${s.locale}' > '${s.key}' Loader.`),console.error(l)}n(O(v({loader:r},s),{data:o}))})}))).reduce((e,{key:a,data:r,locale:s})=>{if(!r)return e;let[n]=k(s);return O(v({},e),{[n]:ve(O(v({},e[n]||{}),{[a]:r}))})},{})}catch(e){console.error(e)}return{}},jt=t=>e=>{try{if(typeof e=="string")return e===t;if(typeof e=="object")return e.test(t)}catch{throw new Error("[i18n]: Invalid route config!")}return!1},Wt=(t,e)=>{let a=!0;try{a=Object.keys(t).filter(r=>t[r]!==void 0).every(r=>t[r]===e[r])}catch{}return a},_e=1e3*60*60*24,Mt=class{constructor(t){this.cachedAt=0,this.loadedKeys={},this.currentRoute=m(),this.config=m(),this.isLoading=m(!1),this.promises=new Set,this.loading={subscribe:this.isLoading.subscribe,toPromise:(e,a)=>{let r=Array.from(this.promises).filter(s=>Wt({locale:k(e)[0],route:a},s)).map(({promise:s})=>s);return Promise.all(r)},get:()=>i(this.isLoading)},this.privateTranslations=m({}),this.translations={subscribe:this.privateTranslations.subscribe,get:()=>i(this.translations)},this.locales=O(v({},b([this.config,this.privateTranslations],([e,a])=>{if(!e)return[];let{loaders:r=[]}=e,s=r.map(({locale:o})=>k(o)[0]),n=Object.keys(a).map(o=>k(o)[0]);return Array.from(new Set([...s,...n]))},[])),{get:()=>i(this.locales)}),this.internalLocale=m(),this.loaderTrigger=b([this.internalLocale,this.currentRoute],([e,a],r)=>{var s,n,o;e!==void 0&&a!==void 0&&(e!==((s=i(this.loaderTrigger))==null?void 0:s[0])||a!==((n=i(this.loaderTrigger))==null?void 0:n[1]))&&((o=i(this.config))!=null&&o.debug&&console.debug("[i18n]: Triggering translation load..."),r([e,a]))},[]),this.localeHelper=m(),this.locale={subscribe:this.localeHelper.subscribe,forceSet:this.localeHelper.set,set:this.internalLocale.set,update:this.internalLocale.update,get:()=>i(this.locale)},this.initialized=b([this.locale,this.currentRoute,this.privateTranslations],([e,a,r],s)=>{i(this.initialized)||s(e!==void 0&&a!==void 0&&!!Object.keys(r).length)}),this.translation=b([this.privateTranslations,this.locale,this.isLoading],([e,a,r],s)=>{let n=e[a];n&&Object.keys(n).length&&!r&&s(n)},{}),this.t=O(v({},b([this.config,this.translation],([{parser:e,fallbackLocale:a}])=>(r,...s)=>Te({parser:e,key:r,params:s,translations:this.translations.get(),locale:this.locale.get(),fallbackLocale:a}))),{get:(e,...a)=>i(this.t)(e,...a)}),this.l=O(v({},b([this.config,this.translations],([{parser:e,fallbackLocale:a},r])=>(s,n,...o)=>Te({parser:e,key:n,params:o,translations:r,locale:s,fallbackLocale:a}))),{get:(e,a,...r)=>i(this.l)(e,a,...r)}),this.getLocale=e=>{if(!e)return"";let a=this.locales.get().find(r=>r===k(e)[0])||"";return k(a)[0]||""},this.setLocale=e=>{var a;if(!e)return;let[r]=k(e);if(r!==i(this.internalLocale))return(a=i(this.config))!=null&&a.debug&&console.debug(`[i18n]: Setting '${r}' locale.`),this.internalLocale.set(r),this.loading.toPromise(e,i(this.currentRoute))},this.setRoute=e=>{var a;if(e!==i(this.currentRoute)){(a=i(this.config))!=null&&a.debug&&console.debug(`[i18n]: Setting '${e}' route.`),this.currentRoute.set(e);let r=i(this.internalLocale);return this.loading.toPromise(r,e)}},this.loadConfig=async e=>{await this.configLoader(e)},this.getTranslationProps=async(e=this.locale.get(),a=i(this.currentRoute))=>{let r=i(this.config);if(!r||!e)return[];let s=this.translations.get(),{loaders:n,fallbackLocale:o="",cache:l=_e}=r||{},d=Number.isNaN(+l)?_e:+l;this.cachedAt?Date.now()>d+this.cachedAt&&(r!=null&&r.debug&&console.debug("[i18n]: Refreshing cache."),this.loadedKeys={},this.cachedAt=0):(r!=null&&r.debug&&console.debug("[i18n]: Setting cache timestamp."),this.cachedAt=Date.now());let[c,f]=k(e,o),h=s[c],p=s[f],u=(n||[]).map(g=>{var L=g,{locale:x}=L,D=le(L,["locale"]);return O(v({},D),{locale:k(x)[0]})}).filter(({routes:g})=>!g||(g||[]).some(jt(a))).filter(({key:g,locale:L})=>L===c&&(!h||!(this.loadedKeys[c]||[]).includes(g))||o&&L===f&&(!p||!(this.loadedKeys[f]||[]).includes(g)));if(u.length){this.isLoading.set(!0),r!=null&&r.debug&&console.debug("[i18n]: Fetching translations...");let g=await At(u);this.isLoading.set(!1);let L=Object.keys(g).reduce((D,T)=>O(v({},D),{[T]:Object.keys(g[T])}),{}),x=u.filter(({key:D,locale:T})=>(L[T]||[]).some(R=>`${R}`.startsWith(D))).reduce((D,{key:T,locale:R})=>O(v({},D),{[R]:[...D[R]||[],T]}),{});return[g,x]}return[]},this.addTranslations=(e,a)=>{var r;if(!e)return;(r=i(this.config))!=null&&r.debug&&console.debug("[i18n]: Adding translations...");let s=Object.keys(e||{});this.privateTranslations.update(n=>s.reduce((o,l)=>O(v({},o),{[l]:v(v({},o[l]||{}),ve(e[l]))}),n)),s.forEach(n=>{let o=Object.keys(e[n]).map(l=>`${l}`.split(".")[0]);a&&(o=a[n]),this.loadedKeys[n]=Array.from(new Set([...this.loadedKeys[n]||[],...o||[]]))})},this.loader=async([e,a])=>{var r;(r=i(this.config))!=null&&r.debug&&console.debug("[i18n]: Adding loader promise.");let s=(async()=>{let n=await this.getTranslationProps(e,a);n.length&&this.addTranslations(...n)})();this.promises.add({locale:e,route:a,promise:s}),s.then(()=>{let n=this.getLocale(e);n&&this.locale.get()!==n&&this.locale.forceSet(n)})},this.loadTranslations=(e,a=i(this.currentRoute)||"")=>{if(e)return this.setRoute(a),this.setLocale(e),this.loading.toPromise(e,a)},t&&this.loadConfig(t),this.loaderTrigger.subscribe(this.loader),this.isLoading.subscribe(async e=>{var a;e&&this.promises.size&&(await this.loading.toPromise(),this.promises.clear(),(a=i(this.config))!=null&&a.debug&&console.debug("[i18n]: Loader promises have been purged."))})}async configLoader(t){if(!t)throw new Error("[i18n]: No config provided!");let e=t,{initLocale:a,fallbackLocale:r,translations:s,debug:n}=e,o=le(e,["initLocale","fallbackLocale","translations","debug"]);[a]=k(a),[r]=k(r),n&&console.debug("[i18n]: Setting config."),this.config.set(v({initLocale:a,fallbackLocale:r,translations:s,debug:n},o)),s&&this.addTranslations(s),await this.loadTranslations(a)}},Ge=Object.defineProperty,It=Object.defineProperties,Ct=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,Ee=(t,e,a)=>e in t?Ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,P=(t,e)=>{for(var a in e||(e={}))ze.call(e,a)&&Ee(t,a,e[a]);if(Q)for(var a of Q(e))Be.call(e,a)&&Ee(t,a,e[a]);return t},Ke=(t,e)=>It(t,Ct(e)),A=(t,e)=>{var a={};for(var r in t)ze.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&Q)for(var r of Q(t))e.indexOf(r)<0&&Be.call(t,r)&&(a[r]=t[r]);return a},Ht=(t,e)=>{for(var a in e)Ge(t,a,{get:e[a],enumerable:!0})},Je={};Ht(Je,{ago:()=>Kt,date:()=>Gt,eq:()=>we,gt:()=>Qe,gte:()=>Ft,lt:()=>Ue,lte:()=>Nt,ne:()=>qt,number:()=>Vt});var be=(t,e)=>{let{modifierDefaults:a}=e||{},{[t]:r}=a||{};return r||{}},we=({value:t,options:e=[],defaultValue:a=""})=>(e.find(({key:r})=>`${r}`.toLowerCase()===`${t}`.toLowerCase())||{}).value||a,qt=({value:t,options:e=[],defaultValue:a=""})=>(e.find(({key:r})=>`${r}`.toLowerCase()!==`${t}`.toLowerCase())||{}).value||a,Ue=({value:t,options:e=[],defaultValue:a=""})=>(e.sort((r,s)=>+r.key-+s.key).find(({key:r})=>+t<+r)||{}).value||a,Qe=({value:t,options:e=[],defaultValue:a=""})=>(e.sort((r,s)=>+s.key-+r.key).find(({key:r})=>+t>+r)||{}).value||a,Nt=({value:t,options:e=[],defaultValue:a=""})=>we({value:t,options:e,defaultValue:Ue({value:t,options:e,defaultValue:a})}),Ft=({value:t,options:e=[],defaultValue:a=""})=>we({value:t,options:e,defaultValue:Qe({value:t,options:e,defaultValue:a})}),Vt=({value:t,props:e,defaultValue:a="",locale:r="",parserOptions:s})=>{if(!r)return"";let n=be("number",s),{maximumFractionDigits:o}=n,l=A(n,["maximumFractionDigits"]),d=(e==null?void 0:e.number)||{},{maximumFractionDigits:c=o||2}=d,f=A(d,["maximumFractionDigits"]);return new Intl.NumberFormat(r,P(Ke(P({},l),{maximumFractionDigits:c}),f)).format(+t||+a)},Gt=({value:t,props:e,defaultValue:a="",locale:r="",parserOptions:s})=>{if(!r)return"";let n=A(be("date",s),[]),o=A((e==null?void 0:e.date)||{},[]);return new Intl.DateTimeFormat(r,P(P({},n),o)).format(+t||+a)},ce=[{key:"second",multiplier:1e3},{key:"minute",multiplier:60},{key:"hour",multiplier:60},{key:"day",multiplier:24},{key:"week",multiplier:7},{key:"month",multiplier:13/3},{key:"year",multiplier:12}],Ye=(t="",e="")=>new RegExp(`^${t}s?$`).test(e),zt=t=>ce.indexOf(ce.find(({key:e})=>Ye(e,t))),Bt=(t,e)=>ce.reduce(([a,r],{key:s,multiplier:n},o)=>{if(Ye(r,e))return[a,r];if(!r||o===zt(r)+1){let l=Math.round(a/n);if(!r||Math.abs(l)>=1||e!=="auto")return[l,s]}return[a,r]},[t,""]),Kt=({value:t,defaultValue:e="",locale:a="",props:r,parserOptions:s})=>{if(!a)return"";let n=be("ago",s),{format:o,numeric:l}=n,d=A(n,["format","numeric"]),c=(r==null?void 0:r.ago)||{},{format:f=o||"auto",numeric:h=l||"auto"}=c,p=A(c,["format","numeric"]),u=+t||+e,g=Bt(u,f);return new Intl.RelativeTimeFormat(a,P(Ke(P({},d),{numeric:h}),p)).format(...g)},Jt=t=>typeof t=="string"&&/{{(?:(?!{{|}}).)+}}/.test(t),ue=t=>typeof t=="string"?t.replace(/\\(?=:|;|{|})/g,""):t,Ut=({value:t,props:e,payload:a,parserOptions:r,locale:s})=>`${t}`.replace(/{{\s*(?:(?!{{|}}).)+\s*}}/g,n=>{let o=ue(`${n.match(/(?!{|\s).+?(?!\\[:;]).(?=\s*(?:[:;]|}}$))/)}`),l=a==null?void 0:a[o],[,d=""]=n.match(/.+?(?!\\;).;\s*default\s*:\s*([^\s:;].+?(?:\\[:;]|[^;\s}])*)(?=\s*(?:;|}}$))/i)||[];d=d||(a==null?void 0:a.default)||"";let[,c=""]=n.match(/{{\s*(?:[^;]|(?:\\;))+\s*(?:(?!\\:).[:])\s*(?!\s)((?:\\;|[^;])+?)(?=\s*(?:[;]|}}$))/i)||[];if(l===void 0&&c!=="ne")return d;let f=!!c,{customModifiers:h}=r||{},p=P(P({},Je),h||{});c=Object.keys(p).includes(c)?c:"eq";let u=p[c],g=(n.match(/[^\s:;{](?:[^;]|\\[;])+[^\s:;}]/gi)||[]).reduce((L,x,D)=>{if(D>0){let T=ue(`${x.match(/(?:(?:\\:)|[^:])+/)}`.trim()),R=`${x.match(/(?:(?:\\:)|[^:])+$/)}`.trim();if(T&&T!=="default"&&R)return[...L,{key:T,value:R}]}return L},[]);return!f&&!g.length?l:u({value:l,options:g,props:e,defaultValue:d,locale:s,parserOptions:r})}),Ze=({value:t,props:e,payload:a,parserOptions:r,locale:s})=>{if(Jt(t)){let n=Ut({value:t,payload:a,props:e,parserOptions:r,locale:s});return Ze({value:n,payload:a,props:e,parserOptions:r,locale:s})}else return ue(t)},Qt=t=>({parse:(e,[a,r],s,n)=>((a==null?void 0:a.default)&&e===void 0&&(e=`${a.default}`),e===void 0&&(e=`${n}`),Ze({value:e,payload:a,props:r,parserOptions:t,locale:s}))}),Yt=Qt,Zt=Object.defineProperty,Xt=Object.defineProperties,ea=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,Se=(t,e,a)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,ta=(t,e)=>{for(var a in e||(e={}))Xe.call(e,a)&&Se(t,a,e[a]);if(Y)for(var a of Y(e))et.call(e,a)&&Se(t,a,e[a]);return t},aa=(t,e)=>Xt(t,ea(e)),ra=(t,e)=>{var a={};for(var r in t)Xe.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&Y)for(var r of Y(t))e.indexOf(r)<0&&et.call(t,r)&&(a[r]=t[r]);return a},$e=t=>{var e=t,{parserOptions:a={}}=e,r=ra(e,["parserOptions"]);return aa(ta({},r),{parser:Yt(a)})},sa=class extends Mt{constructor(t){super(t&&$e(t)),this.loadConfig=e=>super.configLoader($e(e))}},na=sa;const oa="English",ia="Fran\xE7aise",la="Nederlands",ca="Espa\xF1ol",ua="Portugues do Brasil",da="T\xFCrk\xE7e";var M={en:oa,fr:ia,nl:la,es:ca,pt:ua,tr:da};const fa={translations:{en:{lang:M},fr:{lang:M},nl:{lang:M},es:{lang:M},pt:{lang:M}},loaders:[{locale:"en",key:"main",loader:async()=>(await E(()=>import("./main-30d2fa60.js"),[])).default},{locale:"fr",key:"main",loader:async()=>(await E(()=>import("./main-20a69974.js"),[])).default},{locale:"nl",key:"main",loader:async()=>(await E(()=>import("./main-5d3edd86.js"),[])).default},{locale:"es",key:"main",loader:async()=>(await E(()=>import("./main-727aef1a.js"),[])).default},{locale:"pt",key:"main",loader:async()=>(await E(()=>import("./main-52184054.js"),[])).default},{locale:"tr",key:"main",loader:async()=>(await E(()=>import("./main-07d4b173.js"),[])).default}]};function Ra(){return!navigator||!navigator.language?"en":navigator.language.startsWith("fr")?"fr":navigator.language.startsWith("nl")?"nl":navigator.language.startsWith("es")?"es":navigator.language.startsWith("pt")?"pt":navigator.language.startsWith("tr")?"tr":"en"}const{t:xa,loading:Aa,locales:ja,locale:Wa,loadTranslations:Ma,translations:Ia}=new na(fa);function ga(t,e,a){const r=/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname)||location.protocol==="file:";if(!e.trackLocalhost&&r)return console.warn("[Plausible] Ignoring event because website is running locally");if(localStorage.getItem("plausible_ignore")==="true")return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage');const n={n:t,u:e.url,d:e.domain,r:e.referrer,w:e.deviceWidth,h:e.hashMode?1:0,p:a&&a.props?JSON.stringify(a.props):void 0},o=new XMLHttpRequest;o.open("POST",`${e.apiHost}/api/event`,!0),o.setRequestHeader("Content-Type","text/plain"),o.send(JSON.stringify(n)),o.onreadystatechange=()=>{o.readyState===4&&a&&a.callback&&a.callback()}}function pa(t){const e=()=>w({hashMode:!1,trackLocalhost:!1,url:location.href,domain:location.hostname,referrer:document.referrer||null,deviceWidth:window.innerWidth,apiHost:"https://plausible.io"},t),a=(o,l,d)=>{ga(o,w(w({},e()),d),l)},r=(o,l)=>{a("pageview",l,o)};return{trackEvent:a,trackPageview:r,enableAutoPageviews:()=>{const o=()=>r(),l=history.pushState;return l&&(history.pushState=function(d,c,f){l.apply(this,[d,c,f]),o()},addEventListener("popstate",o)),t&&t.hashMode&&addEventListener("hashchange",o),r(),function(){l&&(history.pushState=l,removeEventListener("popstate",o)),t&&t.hashMode&&removeEventListener("hashchange",o)}},enableAutoOutboundTracking:(o=document,l={subtree:!0,childList:!0,attributes:!0,attributeFilter:["href"]})=>{function d(u){a("Outbound Link: Click",{props:{url:this.href}}),typeof process!="undefined"&&process,setTimeout(()=>{location.href=this.href},150),u.preventDefault()}const c=new Set;function f(u){u instanceof HTMLAnchorElement?u.host!==location.host&&(u.addEventListener("click",d),c.add(u)):"querySelectorAll"in u&&u.querySelectorAll("a").forEach(f)}function h(u){u instanceof HTMLAnchorElement?(u.removeEventListener("click",d),c.delete(u)):"querySelectorAll"in u&&u.querySelectorAll("a").forEach(h)}const p=new MutationObserver(u=>{u.forEach(g=>{g.type==="attributes"?(h(g.target),f(g.target)):g.type==="childList"&&(g.addedNodes.forEach(f),g.removedNodes.forEach(h))})});return o.querySelectorAll("a").forEach(f),p.observe(o,l),function(){c.forEach(g=>{g.removeEventListener("click",d)}),c.clear(),p.disconnect()}}}}const tt=pa({domain:"vegeta897.github.io/wordle-peaks",apiHost:"https://plausible.pixelatomy.com"}),Ca=()=>tt.trackPageview(),Ha=t=>tt.trackEvent(t);function at(t){const e=t-1;return e*e*e+1}function qa(t){return t*t}function Na(t){return-t*(t-2)}function Fa(t){return-.5*(Math.cos(Math.PI*t)-1)}function Va(t,{delay:e=0,duration:a=400,easing:r=lt}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:a,easing:r,css:n=>`opacity: ${n*s}`}}function Ga(t,{delay:e=0,duration:a=400,easing:r=at,x:s=0,y:n=0,opacity:o=0}={}){const l=getComputedStyle(t),d=+l.opacity,c=l.transform==="none"?"":l.transform,f=d*(1-o);return{delay:e,duration:a,easing:r,css:(h,p)=>`
			transform: ${c} translate(${(1-h)*s}px, ${(1-h)*n}px);
			opacity: ${d-f*p}`}}function za(t,{delay:e=0,duration:a=400,easing:r=at}={}){const s=getComputedStyle(t),n=+s.opacity,o=parseFloat(s.height),l=parseFloat(s.paddingTop),d=parseFloat(s.paddingBottom),c=parseFloat(s.marginTop),f=parseFloat(s.marginBottom),h=parseFloat(s.borderTopWidth),p=parseFloat(s.borderBottomWidth);return{delay:e,duration:a,easing:r,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*n};height: ${u*o}px;padding-top: ${u*l}px;padding-bottom: ${u*d}px;margin-top: ${u*c}px;margin-bottom: ${u*f}px;border-top-width: ${u*h}px;border-bottom-width: ${u*p}px;`}}const ha={duration:4e3,initial:1,next:0,pausable:!1,dismissable:!0,reversed:!1,intro:{x:256},theme:{}},ya=()=>{const{subscribe:t,update:e}=m([]);let a=0;const r={},s=c=>c instanceof Object;return{subscribe:t,push:(c,f={})=>{const h=w({target:"default"},s(c)?c:F(w({},f),{msg:c})),p=r[h.target]||{},u=F(w(w(w({},ha),p),h),{theme:w(w({},p.theme),h.theme),id:++a});return e(g=>u.reversed?[...g,u]:[u,...g]),a},pop:c=>{e(f=>{if(!f.length||c===0)return[];if(s(c))return f.filter(p=>c(p));const h=c||Math.max(...f.map(p=>p.id));return f.filter(p=>p.id!==h)})},set:(c,f={})=>{const h=s(c)?w({},c):F(w({},f),{id:c});e(p=>{const u=p.findIndex(g=>g.id===h.id);return u>-1&&(p[u]=w(w({},p[u]),h)),p})},_init:(c="default",f={})=>(r[c]=f,r)}},Ba=ya();export{oe as $,_ as A,he as B,ct as C,xa as D,$a as E,ft as F,Lt as G,dt as H,H as I,wa as J,ka as K,yt as L,Ot as M,qe as N,Et as O,ie as P,Sa as Q,S as R,Ea as S,re as T,ae as U,$ as V,q as W,Pa as X,za as Y,gt as Z,ne as _,Va as a,Ie as a0,N as a1,me as a2,Oa as a3,C as a4,Da as a5,_t as a6,M as a7,mt as a8,G as a9,_a as aa,Ta as ab,pt as ac,Z as ad,La as ae,Ca as b,at as c,Ma as d,se as e,Ga as f,Ra as g,ee as h,pe as i,de as j,Fa as k,ja as l,kt as m,wt as n,bt as o,vt as p,Na as q,He as r,Dt as s,Ba as t,qa as u,j as v,Tt as w,Pe as x,Ha as y,xe as z};
