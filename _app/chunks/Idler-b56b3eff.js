import{S as M,i as T,s as Y,e as m,t as j,c as h,a as _,h as q,d as v,b as y,f as C,g as F,M as p,j as Q,F as P,v as R,Q as z,a9 as V}from"./index-0dc809ca.js";import{g as B,s as G,a as H,A as J}from"./idle-scheduler-19ed7cba.js";import{at as A,k as K}from"./index-4fc66adc.js";import"./preload-helper-5ea9bf72.js";function L(n){let l,e,a,o,s,i,r,d=(n[0]||"")+"",c;return{c(){l=m("div"),e=m("div"),a=m("div"),o=m("div"),s=m("div"),i=m("div"),r=m("div"),c=j(d),this.h()},l(f){l=h(f,"DIV",{class:!0});var u=_(l);e=h(u,"DIV",{class:!0});var g=_(e);a=h(g,"DIV",{class:!0});var I=_(a);o=h(I,"DIV",{class:!0});var D=_(o);s=h(D,"DIV",{class:!0});var b=_(s);i=h(b,"DIV",{class:!0});var E=_(i);r=h(E,"DIV",{class:!0});var t=_(r);c=q(t,d),t.forEach(v),E.forEach(v),b.forEach(v),D.forEach(v),I.forEach(v),g.forEach(v),u.forEach(v),this.h()},h(){y(r,"class","letter svelte-1ssa0ly"),y(i,"class","letter-animation svelte-1ssa0ly"),y(s,"class","letter-animation svelte-1ssa0ly"),y(o,"class","letter-animation svelte-1ssa0ly"),y(a,"class","letter-animation svelte-1ssa0ly"),C(a,"transform","translateX(-42px)"),y(e,"class","letter-anchor svelte-1ssa0ly"),y(l,"class","frame svelte-1ssa0ly")},m(f,u){F(f,l,u),p(l,e),p(e,a),p(a,o),p(o,s),p(s,i),p(i,r),p(r,c),n[6](i),n[7](s),n[8](o),n[9](a)},p(f,[u]){u&1&&d!==(d=(f[0]||"")+"")&&Q(c,d)},i:P,o:P,d(f){f&&v(l),n[6](null),n[7](null),n[8](null),n[9](null)}}}function N(n,l,e){let a=!1,o,{id:s}=l,i,r,d,c;const f={translateX:()=>i,translateY:()=>r,rotate:()=>d,scale:()=>c},u=async(t,w=0,X=1)=>{await Promise.all(J.map(async S=>{const k=f[S]();k&&t[S]&&(await k.animate(t[S],{duration:t.duration,iterations:X,fill:"forwards"}).finished,await A(w))}))},g=async({animations:t})=>{for(const w of t){if(!a)break;await u(w.animation,w.endDelay||0,w.iterations)}};R(async()=>{for(a=!0,await A(K(1,100));a;){const t=B(s);if("wait"in t){await A(t.wait);continue}e(0,o=t.letter),!(document.hidden||!a)&&(G(s),await g(t),H(s),await A(10*1e3))}}),z(()=>a=!1);function I(t){V[t?"unshift":"push"](()=>{c=t,e(4,c)})}function D(t){V[t?"unshift":"push"](()=>{d=t,e(3,d)})}function b(t){V[t?"unshift":"push"](()=>{r=t,e(2,r)})}function E(t){V[t?"unshift":"push"](()=>{i=t,e(1,i)})}return n.$$set=t=>{"id"in t&&e(5,s=t.id)},[o,i,r,d,c,s,I,D,b,E]}class x extends M{constructor(l){super(),T(this,l,N,L,Y,{id:5})}}export{x as default};
