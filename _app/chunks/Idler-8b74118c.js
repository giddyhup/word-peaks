import{S as T,i as X,s as Y,e as m,t as q,c as _,a as p,h as C,d as u,b as w,g as L,L as g,j as R,E as P,v as z,P as B,ad as E}from"./index-3a3d0142.js";import{g as F,s as G,a as H,A as J}from"./idle-scheduler-57767ec5.js";import"./SvelteToast.svelte_svelte_type_style_lang-248c31f8.js";import"./preload-helper-b55195a1.js";function K(i){let l,e,a,o,s,n,r,d=(i[0]||"")+"",c;return{c(){l=m("div"),e=m("div"),a=m("div"),o=m("div"),s=m("div"),n=m("div"),r=m("div"),c=q(d),this.h()},l(h){l=_(h,"DIV",{class:!0});var v=p(l);e=_(v,"DIV",{class:!0});var k=p(e);a=_(k,"DIV",{class:!0});var y=p(a);o=_(y,"DIV",{class:!0});var D=p(o);s=_(D,"DIV",{class:!0});var I=p(s);n=_(I,"DIV",{class:!0});var b=p(n);r=_(b,"DIV",{class:!0});var j=p(r);c=C(j,d),j.forEach(u),b.forEach(u),I.forEach(u),D.forEach(u),y.forEach(u),k.forEach(u),v.forEach(u),this.h()},h(){w(r,"class","letter svelte-1kljvhh"),w(n,"class","letter-animation svelte-1kljvhh"),w(s,"class","letter-animation svelte-1kljvhh"),w(o,"class","letter-animation svelte-1kljvhh"),w(a,"class","letter-animation svelte-1kljvhh"),w(e,"class","letter-anchor svelte-1kljvhh"),w(l,"class","frame svelte-1kljvhh")},m(h,v){L(h,l,v),g(l,e),g(e,a),g(a,o),g(o,s),g(s,n),g(n,r),g(r,c),i[6](n),i[7](s),i[8](o),i[9](a)},p(h,[v]){v&1&&d!==(d=(h[0]||"")+"")&&R(c,d)},i:P,o:P,d(h){h&&u(l),i[6](null),i[7](null),i[8](null),i[9](null)}}}function N(i,l,e){let a=!1,o,{id:s}=l,n,r,d,c;const h=new Map([["translateX",()=>n],["translateY",()=>r],["rotate",()=>d],["scale",()=>c]]),v=async(t,f=0,S=1,M="forwards")=>{await Promise.all(J.map(async V=>{const A=h.get(V)();A&&t[V]&&await A.animate(t[V],{duration:t.duration,iterations:S,endDelay:f,fill:M}).finished}))},k=async({animations:t})=>{for(const f of t){if(!a)break;await v(f.animation,f.endDelay||0,f.iterations)}},y=t=>new Promise(f=>setTimeout(f,t));z(async()=>{for(a=!0,await y(Math.random()*100);a;){const t=await F(s);if("wait"in t){await y(t.wait);continue}e(0,o=t.letter),!(document.hidden||!a)&&(G(s),await k(t),H(s),await y(10*1e3))}}),B(()=>a=!1);function D(t){E[t?"unshift":"push"](()=>{c=t,e(4,c)})}function I(t){E[t?"unshift":"push"](()=>{d=t,e(3,d)})}function b(t){E[t?"unshift":"push"](()=>{r=t,e(2,r)})}function j(t){E[t?"unshift":"push"](()=>{n=t,e(1,n)})}return i.$$set=t=>{"id"in t&&e(5,s=t.id)},[o,n,r,d,c,s,D,I,b,j]}class Z extends T{constructor(l){super(),X(this,l,N,K,Y,{id:5})}}export{Z as default};