import{y as ie,g as Pe,h as Ae,e as L,r as $,x as le,f as k,w as P,d as g,j as ze,n as z,k as Oe,q as Ne,l as Le,i as Ee,v as De}from"./index-bf93e4ef.js";import{Q as He,_ as Me,L as U,M as se,I as We,D as Ze,o as re,c as E,n as A,m as ce,x as O,X as de,y as ue,e as fe,h as je,f as ve,Y as he,G as N,w as Y,t as Z,i as X,$ as Ve,l as F,j as q,a0 as Fe,K as Ke,s as Ue,a1 as Xe,a2 as Ye,a as te,a3 as qe,O as Ge,a4 as ne,v as Qe,u as Je,r as pe,a5 as et,a6 as tt}from"./index-829999cc.js";function nt(e,{args:o=[],done:l,canceled:s}){if(e){const n=e.apply(null,o);He(n)?n.then(a=>{a?l():s&&s()}).catch(Me):n?l():s&&s()}else l()}const at={to:[String,Object],url:String,replace:Boolean};function be({to:e,url:o,replace:l,$router:s}){e&&s?s[l?"replace":"push"](e):o&&(l?location.replace(o):location.href=o)}function It(){const e=ie().proxy;return()=>be(e)}function ot(e,o,l){let s=0;const n=e.scrollLeft,a=l===0?1:Math.round(l*1e3/16);function r(){e.scrollLeft+=(o-n)/a,++s<a&&U(r)}r()}function it(e,o,l,s){let n=se(e);const a=n<o,r=l===0?1:Math.round(l*1e3/16),h=(o-n)/r;function u(){n+=h,(a&&n>o||!a&&n<o)&&(n=o),We(e,n),a&&n<o||!a&&n>o?U(u):s&&U(s)}u()}let lt=0;function ge(){const e=ie(),{name:o="unknown"}=(e==null?void 0:e.type)||{};return`${o}-${++lt}`}function me(e,o){if(!Ze||!window.IntersectionObserver)return;const l=new IntersectionObserver(a=>{o(a[0].intersectionRatio>0)},{root:document.body}),s=()=>{e.value&&l.observe(e.value)},n=()=>{e.value&&l.unobserve(e.value)};Pe(n),Ae(n),re(s)}const[st,rt]=E("sticky"),ct={zIndex:A,position:ce("top"),container:Object,offsetTop:O(0),offsetBottom:O(0)};var dt=L({name:st,props:ct,emits:["scroll","change"],setup(e,{emit:o,slots:l}){const s=$(),n=de(s),a=le({fixed:!1,width:0,height:0,transform:0}),r=k(()=>ue(e.position==="top"?e.offsetTop:e.offsetBottom)),h=k(()=>{const{fixed:f,height:w,width:x}=a;if(f)return{width:`${x}px`,height:`${w}px`}}),u=k(()=>{if(!a.fixed)return;const f=fe(je(e.zIndex),{width:`${a.width}px`,height:`${a.height}px`,[e.position]:`${r.value}px`});return a.transform&&(f.transform=`translate3d(0, ${a.transform}px, 0)`),f}),C=f=>o("scroll",{scrollTop:f,isFixed:a.fixed}),b=()=>{if(!s.value||he(s))return;const{container:f,position:w}=e,x=N(s),v=se(window);if(a.width=x.width,a.height=x.height,w==="top")if(f){const S=N(f),c=S.bottom-r.value-a.height;a.fixed=r.value>x.top&&S.bottom>0,a.transform=c<0?c:0}else a.fixed=r.value>x.top;else{const{clientHeight:S}=document.documentElement;if(f){const c=N(f),R=S-c.top-r.value-a.height;a.fixed=S-r.value<x.bottom&&S>c.top,a.transform=R<0?-R:0}else a.fixed=S-r.value<x.bottom}C(v)};return P(()=>a.fixed,f=>o("change",f)),ve("scroll",b,{target:n,passive:!0}),me(s,b),()=>{var f;return g("div",{ref:s,style:h.value},[g("div",{class:rt({fixed:a.fixed}),style:u.value},[(f=l.default)==null?void 0:f.call(l)])])}}});const ut=Y(dt),[ft,ae]=E("tab");var vt=L({name:ft,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:A,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:Z},setup(e,{slots:o}){const l=k(()=>{const n={},{type:a,color:r,disabled:h,isActive:u,activeColor:C,inactiveColor:b}=e;r&&a==="card"&&(n.borderColor=r,h||(u?n.backgroundColor=r:n.color=r));const w=u?C:b;return w&&(n.color=w),n}),s=()=>{const n=g("span",{class:ae("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||X(e.badge)&&e.badge!==""?g(Ve,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[n]}):n};return()=>g("div",{id:e.id,role:"tab",class:[ae([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:l.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[s()])}});const[ht,oe]=E("tabs");var bt=L({name:ht,props:{count:F(Number),inited:Boolean,animated:Boolean,duration:F(A),swipeable:Boolean,lazyRender:Boolean,currentIndex:F(Number)},emits:["change"],setup(e,{emit:o,slots:l}){const s=$(),n=h=>o("change",h),a=()=>{var h;const u=(h=l.default)==null?void 0:h.call(l);return e.animated||e.swipeable?g(Fe,{ref:s,loop:!1,class:oe("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:n},{default:()=>[u]}):u},r=h=>{const u=s.value;u&&u.state.active!==h&&u.swipeTo(h,{immediate:!e.inited})};return P(()=>e.currentIndex,r),ze(()=>{r(e.currentIndex)}),q({swipeRef:s}),()=>g("div",{class:oe("content",{animated:e.animated||e.swipeable})},[a()])}});const[ye,W]=E("tabs"),gt={type:ce("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:O(0),duration:O(.3),animated:Boolean,ellipsis:Z,swipeable:Boolean,scrollspy:Boolean,offsetTop:O(0),background:String,lazyRender:Z,lineWidth:A,lineHeight:A,beforeChange:Function,swipeThreshold:O(5),titleActiveColor:String,titleInactiveColor:String},we=Symbol(ye);var mt=L({name:ye,props:gt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:l}){let s,n,a;const r=$(),h=$(),u=$(),C=$(),b=ge(),f=de(r),[w,x]=Ke(),{children:v,linkChildren:S}=Ue(we),c=le({inited:!1,position:"",lineStyle:{},currentIndex:-1}),R=k(()=>v.length>+e.swipeThreshold||!e.ellipsis||e.shrink),j=k(()=>({borderColor:e.color,background:e.background})),B=(t,i)=>{var d;return(d=t.name)!=null?d:i},G=k(()=>{const t=v[c.currentIndex];if(t)return B(t,c.currentIndex)}),V=k(()=>ue(e.offsetTop)),Q=k(()=>e.sticky?V.value+s:0),D=t=>{const i=h.value,d=w.value;if(!R.value||!i||!d||!d[c.currentIndex])return;const y=d[c.currentIndex].$el,m=y.offsetLeft-(i.offsetWidth-y.offsetWidth)/2;ot(i,m,t?0:+e.duration)},I=()=>{const t=c.inited;z(()=>{const i=w.value;if(!i||!i[c.currentIndex]||e.type!=="line"||he(r.value))return;const d=i[c.currentIndex].$el,{lineWidth:y,lineHeight:m}=e,T=d.offsetLeft+d.offsetWidth/2,_={width:te(y),backgroundColor:e.color,transform:`translateX(${T}px) translateX(-50%)`};if(t&&(_.transitionDuration=`${e.duration}s`),X(m)){const ee=te(m);_.height=ee,_.borderRadius=ee}c.lineStyle=_})},xe=t=>{const i=t<c.currentIndex?-1:1;for(;t>=0&&t<v.length;){if(!v[t].disabled)return t;t+=i}},H=(t,i)=>{const d=xe(t);if(!X(d))return;const y=v[d],m=B(y,d),T=c.currentIndex!==null;c.currentIndex!==d&&(c.currentIndex=d,i||D(),I()),m!==e.active&&(o("update:active",m),T&&o("change",m,y.title)),a&&!e.scrollspy&&Ge(Math.ceil(ne(r.value)-V.value))},M=(t,i)=>{const d=v.find((m,T)=>B(m,T)===t),y=d?v.indexOf(d):0;H(y,i)},J=(t=!1)=>{if(e.scrollspy){const i=v[c.currentIndex].$el;if(i&&f.value){const d=ne(i,f.value)-Q.value;n=!0,it(f.value,d,t?0:+e.duration,()=>{n=!1})}}},Se=(t,i,d)=>{const{title:y,disabled:m}=v[i],T=B(v[i],i);m||(nt(e.beforeChange,{args:[T],done:()=>{H(i),J()}}),be(t)),o("clickTab",{name:T,title:y,event:d,disabled:m})},Te=t=>{a=t.isFixed,o("scroll",t)},Ce=t=>{z(()=>{M(t),J(!0)})},ke=()=>{for(let t=0;t<v.length;t++){const{top:i}=N(v[t].$el);if(i>Q.value)return t===0?0:t-1}return v.length-1},Ie=()=>{if(e.scrollspy&&!n){const t=ke();H(t)}},$e=()=>v.map((t,i)=>g(vt,Ne({key:t.id,id:`${b}-${i}`,ref:x(i),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:i===c.currentIndex,controls:t.id,scrollable:R.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:d=>Se(t,i,d)},Qe(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),Re=()=>{if(e.type==="line"&&v.length)return g("div",{class:W("line"),style:c.lineStyle},null)},p=()=>{var t,i,d;const{type:y,border:m,sticky:T}=e,_=[g("div",{ref:T?void 0:u,class:[W("wrap"),{[qe]:y==="line"&&m}]},[g("div",{ref:h,role:"tablist",class:W("nav",[y,{shrink:e.shrink,complete:R.value}]),style:j.value,"aria-orientation":"horizontal"},[(t=l["nav-left"])==null?void 0:t.call(l),$e(),Re(),(i=l["nav-right"])==null?void 0:i.call(l)])]),(d=l["nav-bottom"])==null?void 0:d.call(l)];return T?g("div",{ref:u},[_]):_};P([()=>e.color,Xe],I),P(()=>e.active,t=>{t!==G.value&&M(t)}),P(()=>v.length,()=>{c.inited&&(M(e.active),I(),z(()=>{D(!0)}))});const Be=()=>{M(e.active,!0),z(()=>{c.inited=!0,u.value&&(s=N(u.value).height),D(!0)})},_e=(t,i)=>o("rendered",t,i);return q({resize:()=>{I(),z(()=>{var t,i;return(i=(t=C.value)==null?void 0:t.swipeRef.value)==null?void 0:i.resize()})},scrollTo:Ce}),Oe(I),Ye(I),re(Be),me(r,I),ve("scroll",Ie,{target:f,passive:!0}),S({id:b,props:e,setLine:I,onRendered:_e,currentName:G,scrollIntoView:D}),()=>g("div",{ref:r,class:W([e.type])},[e.sticky?g(ut,{container:r.value,offsetTop:V.value,onScroll:Te},{default:()=>[p()]}):p(),g(bt,{ref:C,count:v.length,inited:c.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:c.currentIndex,onChange:H},{default:()=>{var t;return[(t=l.default)==null?void 0:t.call(l)]}})])}});const yt=Symbol(),[wt,K]=E("tab"),xt=fe({},at,{dot:Boolean,name:A,badge:A,title:String,disabled:Boolean,titleClass:Je,titleStyle:[String,Object],showZeroBadge:Z});var St=L({name:wt,props:xt,setup(e,{slots:o}){const l=ge(),s=$(!1),{parent:n,index:a}=pe(we);if(!n)return;const r=()=>{var b;return(b=e.name)!=null?b:a.value},h=()=>{s.value=!0,n.props.lazyRender&&z(()=>{n.onRendered(r(),e.title)})},u=k(()=>{const b=r()===n.currentName.value;return b&&!s.value&&h(),b}),C=$(!u.value);return P(u,b=>{b?C.value=!1:et(()=>{C.value=!0})}),P(()=>e.title,()=>{n.setLine(),n.scrollIntoView()}),Le(yt,u),()=>{var b;const f=`${n.id}-${a.value}`,{animated:w,swipeable:x,scrollspy:v,lazyRender:S}=n.props;if(!o.default&&!w)return;const c=v||u.value;if(w||x)return g(tt,{id:l,role:"tabpanel",class:K("panel-wrapper",{inactive:C.value}),tabindex:u.value?0:-1,"aria-hidden":!u.value,"aria-labelledby":f},{default:()=>{var B;return[g("div",{class:K("panel")},[(B=o.default)==null?void 0:B.call(o)])]}});const j=s.value||v||!S?(b=o.default)==null?void 0:b.call(o):null;return q({id:l}),Ee(g("div",{id:l,role:"tabpanel",class:K("panel"),tabindex:c?0:-1,"aria-labelledby":f},[j]),[[De,c]])}}});const $t=Y(St),Rt=Y(mt);export{Rt as T,$t as a,ge as b,nt as c,at as r,It as u};