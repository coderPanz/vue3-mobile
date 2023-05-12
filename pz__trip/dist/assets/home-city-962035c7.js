import{c as ne,e as ae,m as X,n as K,t as _e,u as se,i as D,w as le,N as Ce,O as Re,E as Ge,Q as Xe,R as Je,x as Ze,r as Pe,a as Te,j as de,f as be,S as Qe,T as we,U as et,p as ue,V as tt,W as nt,b as at,X as lt,s as ot,C as it,Y as ct,M as ye,G as xe,h as rt,Z as st,v as Ve}from"./index-829999cc.js";import{I as te}from"./HY_Request-a32531ce.js";import{r as ut,u as dt,b as Be,T as ft,a as gt}from"./index-f6ee3324.js";import{e as oe,d as i,x as $e,r as N,f as H,l as ht,w as ke,n as ee,j as Me,q as Oe,E as mt,m as vt,_ as bt,A as yt,B as xt,o as j,c as G,b as fe,L as ge,F as Z,I as re,H as he,J as Ae,G as kt}from"./index-bf93e4ef.js";import{u as _t}from"./home-city-4cde8b5a.js";const[Ct,J]=ne("cell"),De={tag:X("div"),icon:String,size:String,title:K,value:K,label:K,center:Boolean,isLink:Boolean,border:_e,required:Boolean,iconPrefix:String,valueClass:se,labelClass:se,titleClass:se,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},It=ae({},De,ut);var St=oe({name:Ct,props:It,setup(e,{slots:n}){const a=dt(),f=()=>{if(n.label||D(e.label))return i("div",{class:[J("label"),e.labelClass]},[n.label?n.label():e.label])},o=()=>{var l;if(n.title||D(e.title)){const h=(l=n.title)==null?void 0:l.call(n);return Array.isArray(h)&&h.length===0?void 0:i("div",{class:[J("title"),e.titleClass],style:e.titleStyle},[h||i("span",null,[e.title]),f()])}},s=()=>{const l=n.value||n.default;if(l||D(e.value))return i("div",{class:[J("value"),e.valueClass]},[l?l():i("span",null,[e.value])])},_=()=>{if(n.icon)return n.icon();if(e.icon)return i(te,{name:e.icon,class:J("left-icon"),classPrefix:e.iconPrefix},null)},y=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const l=e.arrowDirection&&e.arrowDirection!=="right"?`arrow-${e.arrowDirection}`:"arrow";return i(te,{name:l,class:J("right-icon")},null)}};return()=>{var l;const{tag:h,size:c,center:p,border:B,isLink:$,required:T}=e,C=(l=e.clickable)!=null?l:$,E={center:p,required:T,clickable:C,borderless:!B};return c&&(E[c]=!!c),i(h,{class:J(E),role:C?"button":void 0,tabindex:C?0:void 0,onClick:a},{default:()=>{var m;return[_(),o(),s(),y(),(m=n.extra)==null?void 0:m.call(n)]}})}}});const Ne=le(St);function pe(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Tt(e,n){if(pe(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function wt(e,n){return new Promise(a=>{const f=n.validator(e,n);if(Xe(f)){f.then(a);return}a(f)})}function Ee(e,n){const{message:a}=n;return Je(a)?a(e,n):a||""}function Vt({target:e}){e.composing=!0}function Le({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function At(e,n){const a=Ce();e.style.height="auto";let f=e.scrollHeight;if(Ge(n)){const{maxHeight:o,minHeight:s}=n;o!==void 0&&(f=Math.min(f,o)),s!==void 0&&(f=Math.max(f,s))}f&&(e.style.height=`${f}px`,Re(a))}function Et(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function q(e){return[...e].length}function me(e,n){return[...e].slice(0,n).join("")}const[Lt,L]=ne("field"),Ie={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:K,formatter:Function,clearIcon:X("clear"),modelValue:Ze(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:X("focus"),formatTrigger:X("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Rt=ae({},De,Ie,{rows:K,type:X("text"),rules:Array,autosize:[Boolean,Object],labelWidth:K,labelClass:se,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Pt=oe({name:Lt,props:Rt,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:a}){const f=Be(),o=$e({status:"unvalidated",focused:!1,validateMessage:""}),s=N(),_=N(),y=N(),{parent:l}=Pe(Qe),h=()=>{var t;return String((t=e.modelValue)!=null?t:"")},c=t=>{if(D(e[t]))return e[t];if(l&&D(l.props[t]))return l.props[t]},p=H(()=>{const t=c("readonly");if(e.clearable&&!t){const d=h()!=="",u=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return d&&u}return!1}),B=H(()=>y.value&&a.input?y.value():e.modelValue),$=t=>t.reduce((d,u)=>d.then(()=>{if(o.status==="failed")return;let{value:b}=B;if(u.formatter&&(b=u.formatter(b,u)),!Tt(b,u)){o.status="failed",o.validateMessage=Ee(b,u);return}if(u.validator)return pe(b)&&u.validateEmpty===!1?void 0:wt(b,u).then(x=>{x&&typeof x=="string"?(o.status="failed",o.validateMessage=x):x===!1&&(o.status="failed",o.validateMessage=Ee(b,u))})}),Promise.resolve()),T=()=>{o.status="unvalidated",o.validateMessage=""},C=()=>n("endValidate",{status:o.status,message:o.validateMessage}),E=(t=e.rules)=>new Promise(d=>{T(),t?(n("startValidate"),$(t).then(()=>{o.status==="failed"?(d({name:e.name,message:o.validateMessage}),C()):(o.status="passed",d(),C())})):d()}),m=t=>{if(l&&e.rules){const{validateTrigger:d}=l.props,u=we(d).includes(t),b=e.rules.filter(x=>x.trigger?we(x.trigger).includes(t):u);b.length&&E(b)}},I=t=>{var d;const{maxlength:u}=e;if(D(u)&&q(t)>+u){const b=h();if(b&&q(b)===+u)return b;const x=(d=s.value)==null?void 0:d.selectionEnd;if(o.focused&&x){const V=[...t],P=V.length-+u;return V.splice(x-P,P),V.join("")}return me(t,+u)}return t},A=(t,d="onChange")=>{const u=t;t=I(t);const b=q(u)-q(t);if(e.type==="number"||e.type==="digit"){const V=e.type==="number";t=et(t,V,V)}let x=0;if(e.formatter&&d===e.formatTrigger){const{formatter:V,maxlength:P}=e;if(t=V(t),D(P)&&q(t)>+P&&(t=me(t,+P)),s.value&&o.focused){const{selectionEnd:ce}=s.value,Se=me(u,ce);x=q(V(Se))-q(Se)}}if(s.value&&s.value.value!==t)if(o.focused){let{selectionStart:V,selectionEnd:P}=s.value;if(s.value.value=t,D(V)&&D(P)){const ce=q(t);b?(V-=b,P-=b):x&&(V+=x,P+=x),s.value.setSelectionRange(Math.min(V,ce),Math.min(P,ce))}}else s.value.value=t;t!==e.modelValue&&n("update:modelValue",t)},z=t=>{t.target.composing||A(t.target.value)},r=()=>{var t;return(t=s.value)==null?void 0:t.blur()},U=()=>{var t;return(t=s.value)==null?void 0:t.focus()},F=()=>{const t=s.value;e.type==="textarea"&&e.autosize&&t&&At(t,e.autosize)},g=t=>{o.focused=!0,n("focus",t),ee(F),c("readonly")&&r()},v=t=>{o.focused=!1,A(h(),"onBlur"),n("blur",t),!c("readonly")&&(m("onBlur"),ee(F),nt())},k=t=>n("clickInput",t),w=t=>n("clickLeftIcon",t),S=t=>n("clickRightIcon",t),M=t=>{ue(t),n("update:modelValue",""),n("clear",t)},W=H(()=>{if(typeof e.error=="boolean")return e.error;if(l&&l.props.showError&&o.status==="failed")return!0}),O=H(()=>{const t=c("labelWidth"),d=c("labelAlign");if(t&&d!=="top")return{width:Te(t)}}),R=t=>{t.keyCode===13&&(!(l&&l.props.submitOnEnter)&&e.type!=="textarea"&&ue(t),e.type==="search"&&r()),n("keypress",t)},ie=()=>e.id||`${f}-input`,Y=()=>o.status,We=()=>{const t=L("control",[c("inputAlign"),{error:W.value,custom:!!a.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(a.input)return i("div",{class:t,onClick:k},[a.input()]);const d={id:ie(),ref:s,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:c("disabled"),readonly:c("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${f}-label`:void 0,onBlur:v,onFocus:g,onInput:z,onClick:k,onChange:Le,onKeypress:R,onCompositionend:Le,onCompositionstart:Vt};return e.type==="textarea"?i("textarea",d,null):i("input",Oe(Et(e.type),d),null)},je=()=>{const t=a["left-icon"];if(e.leftIcon||t)return i("div",{class:L("left-icon"),onClick:w},[t?t():i(te,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},qe=()=>{const t=a["right-icon"];if(e.rightIcon||t)return i("div",{class:L("right-icon"),onClick:S},[t?t():i(te,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},He=()=>{if(e.showWordLimit&&e.maxlength){const t=q(h());return i("div",{class:L("word-limit")},[i("span",{class:L("word-num")},[t]),mt("/"),e.maxlength])}},Ke=()=>{if(l&&l.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const d=a["error-message"],u=c("errorMessageAlign");return i("div",{class:L("error-message",u)},[d?d({message:t}):t])}},Ue=()=>{const t=c("labelWidth"),d=c("labelAlign"),u=c("colon")?":":"";if(a.label)return[a.label(),u];if(e.label)return i("label",{id:`${f}-label`,for:ie(),style:d==="top"&&t?{width:Te(t)}:void 0},[e.label+u])},Ye=()=>[i("div",{class:L("body")},[We(),p.value&&i(te,{ref:_,name:e.clearIcon,class:L("clear")},null),qe(),a.button&&i("div",{class:L("button")},[a.button()])]),He(),Ke()];return de({blur:r,focus:U,validate:E,formValue:B,resetValidation:T,getValidationStatus:Y}),ht(tt,{customValue:y,resetValidation:T,validateWithTrigger:m}),ke(()=>e.modelValue,()=>{A(h()),T(),m("onChange"),ee(F)}),Me(()=>{A(h(),e.formatTrigger),ee(F)}),be("touchstart",M,{target:H(()=>{var t;return(t=_.value)==null?void 0:t.$el})}),()=>{const t=c("disabled"),d=c("labelAlign"),u=je(),b=()=>{const x=Ue();return d==="top"?[u,x].filter(Boolean):x||[]};return i(Ne,{size:e.size,class:L({error:W.value,disabled:t,[`label-${d}`]:d}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:O.value,valueClass:L("value"),titleClass:[L("label",[d,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:u&&d!=="top"?()=>u:null,title:b,value:Ye,extra:a.extra})}}});const Bt=le(Pt);function $t(){const e="A".charCodeAt(0);return Array(26).fill("").map((a,f)=>String.fromCharCode(e+f))}const[ze,ve]=ne("index-bar"),Mt={sticky:_e,zIndex:K,teleport:[String,Object],highlightColor:String,stickyOffsetTop:it(0),indexList:{type:Array,default:$t}},Fe=Symbol(ze);var Ot=oe({name:ze,props:Mt,emits:["select","change"],setup(e,{emit:n,slots:a}){const f=N(),o=N(),s=N(""),_=at(),y=lt(f),{children:l,linkChildren:h}=ot(Fe);let c;h({props:e});const p=H(()=>{if(D(e.zIndex))return{zIndex:+e.zIndex+1}}),B=H(()=>{if(e.highlightColor)return{color:e.highlightColor}}),$=(g,v)=>{for(let k=l.length-1;k>=0;k--){const w=k>0?v[k-1].height:0,S=e.sticky?w+e.stickyOffsetTop:0;if(g+S>=v[k].top)return k}return-1},T=g=>l.find(v=>String(v.index)===g),C=()=>{if(ct(f))return;const{sticky:g,indexList:v}=e,k=ye(y.value),w=xe(y),S=l.map(W=>W.getRect(y.value,w));let M=-1;if(c){const W=T(c);if(W){const O=W.getRect(y.value,w);M=$(O.top,S)}}else M=$(k,S);s.value=v[M],g&&l.forEach((W,O)=>{const{state:R,$el:ie}=W;if(O===M||O===M-1){const Y=ie.getBoundingClientRect();R.left=Y.left,R.width=Y.width}else R.left=null,R.width=null;if(O===M)R.active=!0,R.top=Math.max(e.stickyOffsetTop,S[O].top-k)+w.top;else if(O===M-1&&c===""){const Y=S[M].top-k;R.active=Y>0,R.top=Y+w.top-S[O].height}else R.active=!1}),c=""},E=()=>{ee(C)};be("scroll",C,{target:y,passive:!0}),Me(E),ke(()=>e.indexList,E),ke(s,g=>{g&&n("change",g)});const m=()=>e.indexList.map(g=>{const v=g===s.value;return i("span",{class:ve("index",{active:v}),style:v?B.value:void 0,"data-index":g},[g])}),I=g=>{c=String(g);const v=T(c);if(v){const k=ye(y.value),w=xe(y),{offsetHeight:S}=document.documentElement;if(v.$el.scrollIntoView(),k===S-w.height){C();return}e.sticky&&e.stickyOffsetTop&&Re(Ce()-e.stickyOffsetTop),n("select",v.index)}},A=g=>{const{index:v}=g.dataset;v&&I(v)},z=g=>{A(g.target)};let r;const U=g=>{if(_.move(g),_.isVertical()){ue(g);const{clientX:v,clientY:k}=g.touches[0],w=document.elementFromPoint(v,k);if(w){const{index:S}=w.dataset;S&&r!==S&&(r=S,A(w))}}},F=()=>i("div",{ref:o,class:ve("sidebar"),style:p.value,onClick:z,onTouchstartPassive:_.start},[m()]);return de({scrollTo:I}),be("touchmove",U,{target:o}),()=>{var g;return i("div",{ref:f,class:ve()},[e.teleport?i(vt,{to:e.teleport},{default:()=>[F()]}):F(),(g=a.default)==null?void 0:g.call(a)])}}});const[Dt,Nt]=ne("index-anchor"),pt={index:K};var zt=oe({name:Dt,props:pt,setup(e,{slots:n}){const a=$e({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),f=N(),{parent:o}=Pe(Fe);if(!o)return;const s=()=>a.active&&o.props.sticky,_=H(()=>{const{zIndex:l,highlightColor:h}=o.props;if(s())return ae(rt(l),{left:a.left?`${a.left}px`:void 0,width:a.width?`${a.width}px`:void 0,transform:a.top?`translate3d(0, ${a.top}px, 0)`:void 0,color:h})});return de({state:a,getRect:(l,h)=>{const c=xe(f);return a.rect.height=c.height,l===window||l===document.body?a.rect.top=c.top+Ce():a.rect.top=c.top+ye(l)-h.top,a.rect}}),()=>{const l=s();return i("div",{ref:f,style:{height:l?`${a.rect.height}px`:void 0}},[i("div",{style:_.value,class:[Nt({sticky:l}),{[st]:l}]},[n.default?n.default():e.index])])}}});const Ft=le(zt),Wt=le(Ot),[jt,Q,qt]=ne("search"),Ht=ae({},Ie,{label:String,shape:X("square"),leftIcon:X("search"),clearable:_e,actionText:String,background:String,showAction:Boolean});var Kt=oe({name:jt,props:Ht,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:n,slots:a,attrs:f}){const o=Be(),s=N(),_=()=>{a.action||(n("update:modelValue",""),n("cancel"))},y=r=>{r.keyCode===13&&(ue(r),n("search",e.modelValue))},l=()=>e.id||`${o}-input`,h=()=>{if(a.label||e.label)return i("label",{class:Q("label"),for:l()},[a.label?a.label():e.label])},c=()=>{if(e.showAction){const r=e.actionText||qt("cancel");return i("div",{class:Q("action"),role:"button",tabindex:0,onClick:_},[a.action?a.action():r])}},p=()=>{var r;return(r=s.value)==null?void 0:r.blur()},B=()=>{var r;return(r=s.value)==null?void 0:r.focus()},$=r=>n("blur",r),T=r=>n("focus",r),C=r=>n("clear",r),E=r=>n("clickInput",r),m=r=>n("clickLeftIcon",r),I=r=>n("clickRightIcon",r),A=Object.keys(Ie),z=()=>{const r=ae({},f,Ve(e,A),{id:l()}),U=F=>n("update:modelValue",F);return i(Bt,Oe({ref:s,type:"search",class:Q("field"),border:!1,onBlur:$,onFocus:T,onClear:C,onKeypress:y,onClickInput:E,onClickLeftIcon:m,onClickRightIcon:I,"onUpdate:modelValue":U},r),Ve(a,["left-icon","right-icon"]))};return de({focus:B,blur:p}),()=>{var r;return i("div",{class:Q({"show-action":e.showAction}),style:{background:e.background}},[(r=a.left)==null?void 0:r.call(a),i("div",{class:Q("content",e.shape)},[h(),z()]),c()])}}});const Ut=le(Kt);const Yt={class:"city cover-page"},Gt={class:"top"},Xt={class:"list"},Jt=["onClick"],Zt={class:"content"},Qt={__name:"home-city",setup(e){const n=yt(),a=N("");function f(){n.back()}const o=N(),s=_t();s.fetchAllCityDataAction();const{allCities:_}=xt(s),y=H(()=>_.value[o.value]);function l(h){console.log(h),n.back(),s.clickCity=h}return(h,c)=>{const p=Ut,B=gt,$=ft,T=Ft,C=Wt,E=Ne;return j(),G("div",Yt,[fe("div",Gt,[i(p,{modelValue:a.value,"onUpdate:modelValue":c[0]||(c[0]=m=>a.value=m),placeholder:"请输入搜索关键词","show-action":"",onCancel:f,shape:"round"},null,8,["modelValue"]),i($,{active:o.value,"onUpdate:active":c[1]||(c[1]=m=>o.value=m),color:"#ff9854"},{default:ge(()=>[(j(!0),G(Z,null,re(he(_),(m,I,A)=>(j(),Ae(B,{key:I,title:m.title,name:I},null,8,["title","name"]))),128))]),_:1},8,["active"])]),i(C,{sticky:!1},{default:ge(()=>{var m;return[i(T,{index:"热门"}),fe("div",Xt,[(j(!0),G(Z,null,re((m=he(y))==null?void 0:m.hotCities,(I,A)=>(j(),G("div",{class:"list-city",onClick:z=>l(I)},kt(I.cityName),9,Jt))),256))])]}),_:1}),fe("div",Zt,[i(C,{sticky:!1},{default:ge(()=>{var m;return[(j(!0),G(Z,null,re((m=he(y))==null?void 0:m.cities,(I,A)=>(j(),G(Z,{key:A},[i(T,{index:I.group},null,8,["index"]),(j(!0),G(Z,null,re(I.cities,(z,r)=>(j(),Ae(E,{key:r,onClick:U=>l(z),title:z.cityName},null,8,["onClick","title"]))),128))],64))),128))]}),_:1})])])}}},on=bt(Qt,[["__scopeId","data-v-5d9f5112"]]);export{on as default};
