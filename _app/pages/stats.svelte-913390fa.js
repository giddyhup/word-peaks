import{S as bt,i as Et,s as kt,e as D,k as I,t as L,c as N,a as P,d as f,m as B,h as x,b as v,g as w,M as m,av as at,N as J,j as R,H as nt,f as K,O as X,F as lt,P as Tt,v as yt,a0 as V}from"../chunks/index-d85b3eb2.js";import{g as St}from"../chunks/navigation-0e6511d1.js";import{ao as ft,c as ut,a7 as _t,a8 as mt,ap as ct,W as it,F as Q,t as Y}from"../chunks/index-600a7069.js";import{c as wt}from"../chunks/share-54688cda.js";import{b as pt}from"../chunks/paths-396f020f.js";import"../chunks/singletons-d1fb5791.js";import"../chunks/preload-helper-911a8840.js";function ot(e){let t,s,l=e[4]("main.stats.import_info_1")+"",a,i,_=e[4]("main.stats.import_info_2")+"",k,d,c,h=e[4]("main.stats.import_info_3")+"",T,b,u,r,g,O,z,H,M,A;function G(n,o){return n[0]?n[3]?Dt:Ot:Nt}let C=G(e),y=C(e);return{c(){t=D("div"),s=D("p"),a=I(),i=D("p"),k=L(_),d=I(),c=D("p"),T=I(),b=D("label"),y.c(),u=I(),r=D("textarea"),g=I(),O=D("button"),z=L("Import"),this.h()},l(n){t=N(n,"DIV",{class:!0});var o=P(t);s=N(o,"P",{class:!0});var S=P(s);S.forEach(f),a=B(o),i=N(o,"P",{class:!0});var E=P(i);k=x(E,_),E.forEach(f),d=B(o),c=N(o,"P",{class:!0});var p=P(c);p.forEach(f),o.forEach(f),T=B(n),b=N(n,"LABEL",{for:!0,class:!0});var W=P(b);y.l(W),W.forEach(f),u=B(n),r=N(n,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),P(r).forEach(f),g=B(n),O=N(n,"BUTTON",{class:!0});var F=P(O);z=x(F,"Import"),F.forEach(f),this.h()},h(){v(s,"class","svelte-18ehvcx"),v(i,"class","svelte-18ehvcx"),v(c,"class","svelte-18ehvcx"),v(t,"class","info svelte-18ehvcx"),v(b,"for","import_text"),v(b,"class","svelte-18ehvcx"),v(r,"id","import_text"),v(r,"name","import_text"),v(r,"rows","4"),v(r,"class","svelte-18ehvcx"),v(O,"class","import-button svelte-18ehvcx"),O.disabled=H=!e[3]},m(n,o){w(n,t,o),m(t,s),s.innerHTML=l,m(t,a),m(t,i),m(i,k),m(t,d),m(t,c),c.innerHTML=h,w(n,T,o),w(n,b,o),y.m(b,null),w(n,u,o),w(n,r,o),at(r,e[0]),w(n,g,o),w(n,O,o),m(O,z),M||(A=[J(r,"input",e[8]),J(O,"click",e[9])],M=!0)},p(n,o){o&16&&l!==(l=n[4]("main.stats.import_info_1")+"")&&(s.innerHTML=l),o&16&&_!==(_=n[4]("main.stats.import_info_2")+"")&&R(k,_),o&16&&h!==(h=n[4]("main.stats.import_info_3")+"")&&(c.innerHTML=h),C===(C=G(n))&&y?y.p(n,o):(y.d(1),y=C(n),y&&(y.c(),y.m(b,null))),o&1&&at(r,n[0]),o&8&&H!==(H=!n[3])&&(O.disabled=H)},d(n){n&&f(t),n&&f(T),n&&f(b),y.d(),n&&f(u),n&&f(r),n&&f(g),n&&f(O),M=!1,nt(A)}}}function Ot(e){let t,s=e[4]("main.stats.invalid_stats")+"",l;return{c(){t=L("\u274C "),l=L(s)},l(a){t=x(a,"\u274C "),l=x(a,s)},m(a,i){w(a,t,i),w(a,l,i)},p(a,i){i&16&&s!==(s=a[4]("main.stats.invalid_stats")+"")&&R(l,s)},d(a){a&&f(t),a&&f(l)}}}function Dt(e){let t,s=e[4]("main.stats.ready_to_import")+"",l;return{c(){t=L("\u2705 "),l=L(s)},l(a){t=x(a,"\u2705 "),l=x(a,s)},m(a,i){w(a,t,i),w(a,l,i)},p(a,i){i&16&&s!==(s=a[4]("main.stats.ready_to_import")+"")&&R(l,s)},d(a){a&&f(t),a&&f(l)}}}function Nt(e){let t=e[4]("main.stats.paste_your_stats")+"",s;return{c(){s=L(t)},l(l){s=x(l,t)},m(l,a){w(l,s,a)},p(l,a){a&16&&t!==(t=l[4]("main.stats.paste_your_stats")+"")&&R(s,t)},d(l){l&&f(s)}}}function rt(e){let t,s=e[4]("main.stats.export_instructions")+"",l,a,i,_,k,d,c=e[4]("main.stats.copy")+"",h,T,b;return{c(){t=D("label"),l=L(s),a=L(":"),i=I(),_=D("textarea"),k=I(),d=D("button"),h=L(c),this.h()},l(u){t=N(u,"LABEL",{for:!0,class:!0});var r=P(t);l=x(r,s),a=x(r,":"),r.forEach(f),i=B(u),_=N(u,"TEXTAREA",{id:!0,name:!0,rows:!0,class:!0}),P(_).forEach(f),k=B(u),d=N(u,"BUTTON",{class:!0});var g=P(d);h=x(g,c),g.forEach(f),this.h()},h(){v(t,"for","export_text"),v(t,"class","svelte-18ehvcx"),v(_,"id","export_text"),v(_,"name","export_text"),v(_,"rows","4"),_.value=e[2],_.readOnly=!0,v(_,"class","svelte-18ehvcx"),v(d,"class","svelte-18ehvcx"),K(d,"align-self","flex-start")},m(u,r){w(u,t,r),m(t,l),m(t,a),w(u,i,r),w(u,_,r),w(u,k,r),w(u,d,r),m(d,h),T||(b=J(d,"click",e[5]),T=!0)},p(u,r){r&16&&s!==(s=u[4]("main.stats.export_instructions")+"")&&R(l,s),r&4&&(_.value=u[2]),r&16&&c!==(c=u[4]("main.stats.copy")+"")&&R(h,c)},d(u){u&&f(t),u&&f(i),u&&f(_),u&&f(k),u&&f(d),T=!1,b()}}}function Pt(e){let t,s,l,a,i,_=e[4]("main.stats.back_up_and_restore_your_stats")+"",k,d,c,h,T=e[4]("main.stats.import_stats")+"",b,u,r,g=e[4]("main.stats.export_stats")+"",O,z,H,M,A,G=e[4]("main.other.back")+"",C,y,n,o=e[1]==="import"&&ot(e),S=e[1]==="export"&&rt(e);return{c(){t=D("section"),s=D("h1"),l=L("Word Peaks"),a=I(),i=D("p"),k=L(_),d=I(),c=D("div"),h=D("button"),b=L(T),u=I(),r=D("button"),O=L(g),z=I(),o&&o.c(),H=I(),S&&S.c(),M=I(),A=D("a"),C=L(G),this.h()},l(E){t=N(E,"SECTION",{class:!0});var p=P(t);s=N(p,"H1",{});var W=P(s);l=x(W,"Word Peaks"),W.forEach(f),a=B(p),i=N(p,"P",{class:!0});var F=P(i);k=x(F,_),F.forEach(f),d=B(p),c=N(p,"DIV",{class:!0});var j=P(c);h=N(j,"BUTTON",{class:!0});var tt=P(h);b=x(tt,T),tt.forEach(f),u=B(j),r=N(j,"BUTTON",{class:!0});var et=P(r);O=x(et,g),et.forEach(f),j.forEach(f),z=B(p),o&&o.l(p),H=B(p),S&&S.l(p),M=B(p),A=N(p,"A",{href:!0});var st=P(A);C=x(st,G),st.forEach(f),p.forEach(f),this.h()},h(){v(i,"class","svelte-18ehvcx"),K(i,"margin-bottom","1.5rem"),v(h,"class","svelte-18ehvcx"),X(h,"active",e[1]==="import"),v(r,"class","svelte-18ehvcx"),X(r,"active",e[1]==="export"),v(c,"class","mode-buttons svelte-18ehvcx"),v(A,"href",pt+"/"),K(A,"margin-top","3rem"),K(A,"text-align","center"),v(t,"class","svelte-18ehvcx")},m(E,p){w(E,t,p),m(t,s),m(s,l),m(t,a),m(t,i),m(i,k),m(t,d),m(t,c),m(c,h),m(h,b),m(c,u),m(c,r),m(r,O),m(t,z),o&&o.m(t,null),m(t,H),S&&S.m(t,null),m(t,M),m(t,A),m(A,C),y||(n=[J(h,"click",e[6]),J(r,"click",e[7])],y=!0)},p(E,[p]){p&16&&_!==(_=E[4]("main.stats.back_up_and_restore_your_stats")+"")&&R(k,_),p&16&&T!==(T=E[4]("main.stats.import_stats")+"")&&R(b,T),p&2&&X(h,"active",E[1]==="import"),p&16&&g!==(g=E[4]("main.stats.export_stats")+"")&&R(O,g),p&2&&X(r,"active",E[1]==="export"),E[1]==="import"?o?o.p(E,p):(o=ot(E),o.c(),o.m(t,H)):o&&(o.d(1),o=null),E[1]==="export"?S?S.p(E,p):(S=rt(E),S.c(),S.m(t,M)):S&&(S.d(1),S=null),p&16&&G!==(G=E[4]("main.other.back")+"")&&R(C,G)},i:lt,o:lt,d(E){E&&f(t),o&&o.d(),S&&S.d(),y=!1,nt(n)}}}const Z={theme:{"--toastBackground":"var(--cta-color)"}},U=e=>typeof e=="number"&&e>=0,q=e=>e instanceof Array&&e.every(U);function gt(e){if(!e)return!1;try{const[t,s,l,a,i]=JSON.parse(e);if(t!==ft)throw"bad-version";if(!U(s))throw"invalid-last-daily";const[_,k,d,c,h]=l;if(!U(_)||!U(k)||!U(d)||!U(c)||!q(h))throw"invalid-stats";const[T,b,u,r]=a;if(!U(T)||!q(b)||!q(u)||!U(r))throw"invalid-time-stats";if(i){const[g,O,z,H,M,A,G,C]=i;if(g!=="daily"||!U(O)||typeof z!="boolean"||typeof H!="string"||H.length!==it||!(M instanceof Array)||M.some(y=>typeof y!="string"||y.length!==it)||!q(A)||G!==null||typeof C!="boolean")throw"invalid-daily-detail"}}catch(t){return console.warn(t),!1}return!0}const vt=["currentStreak","bestStreak","totalGames","wonGames","distribution"],Lt=e=>vt.map(t=>e[t]),ht=["gameCount","guessTotals","guessCounts","fastestGame"],xt=e=>ht.map(t=>e[t]),dt=["mode","dayNumber","hardMode","answer","guesses","guessTimes","hash","fastest"],At=e=>e===null?null:dt.map(t=>e[t]),$=(e,t)=>Object.fromEntries(e.map((s,l)=>[t[l],s]));function It(){return JSON.stringify([ft,V(ut),Lt(V(_t)),xt(V(mt)),At(V(ct))])}function Bt(e){const[t,s,l,a,i]=JSON.parse(e);ut.set(s),_t.set($(l,vt)),mt.set($(a,ht)),i!==null&&ct.set($(i,dt)),Y.push(V(Q)("main.messages.stats_imported"),Z),St(`${pt}/`)}function Ht(e,t,s){let l,a;Tt(e,Q,u=>s(4,a=u));let i=null,_,k="";function d(){Y.push(V(Q)("main.messages.stats_copied"),Z),wt(k).then(()=>Y.push("Stats copied!",Z),()=>Y.push(V(Q)("main.messages.could_not_do"),Z))}yt(()=>s(2,k=It()));const c=()=>s(1,i=i==="import"?null:"import"),h=()=>s(1,i=i==="export"?null:"export");function T(){_=this.value,s(0,_)}const b=()=>Bt(_);return e.$$.update=()=>{e.$$.dirty&1&&s(3,l=gt(_))},[_,i,k,l,a,d,c,h,T,b]}class Wt extends bt{constructor(t){super(),Et(this,t,Ht,Pt,kt,{})}}export{Wt as default};
