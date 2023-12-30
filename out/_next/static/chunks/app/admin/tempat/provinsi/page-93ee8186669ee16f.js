(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[734],{4176:function(e,t,a){Promise.resolve().then(a.bind(a,8138))},8138:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(9268),i=a(6006),s=a(5437),o=a(9639),n=a(2561),l=a(4475),d=a(3415),c=a(4406);let u=(0,n.Ue)((0,l.mW)((e,t)=>({dtProvinsi:[],setProvinsi:async t=>{let{page:a=1,limit:r=10,search:i}=t;try{let t=await c.Z.getState().setToken(),s=await (0,d.Sj)({method:"get",url:"/provinsi",headers:{Authorization:"Bearer ".concat(t)},params:{limit:r,page:a,search:i}});return e(e=>({...e,dtProvinsi:s.data.data})),{status:"berhasil",data:s.data}}catch(e){var s;return{status:"error",error:null===(s=e.response)||void 0===s?void 0:s.data}}},addData:async t=>{try{let a=await c.Z.getState().setToken(),r=await (0,d.Sj)({method:"post",url:"/provinsi",headers:{Authorization:"Bearer ".concat(a)},data:t});return e(e=>({dtProvinsi:{last_page:e.dtProvinsi.last_page,current_page:e.dtProvinsi.current_page,data:[r.data.data,...e.dtProvinsi.data]}})),{status:"berhasil tambah",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},removeData:async t=>{try{let a=await c.Z.getState().setToken(),r=await (0,d.Sj)({method:"delete",url:"/provinsi/".concat(t),headers:{Authorization:"Bearer ".concat(a)}});return e(e=>({dtProvinsi:{last_page:e.dtProvinsi.last_page,current_page:e.dtProvinsi.current_page,data:e.dtProvinsi.data.filter(e=>e.id!==t)}})),{status:"berhasil hapus",data:r.data}}catch(e){return{status:"error",data:e.response.data}}},updateData:async(t,a)=>{try{let r=await c.Z.getState().setToken(),i=await (0,d.Sj)({method:"PUT",url:"/provinsi/".concat(t),headers:{Authorization:"Bearer ".concat(r)},data:a});return e(e=>({dtProvinsi:{last_page:e.dtProvinsi.last_page,current_page:e.dtProvinsi.current_page,data:e.dtProvinsi.data.map(e=>e.id===t?{...e,...i.data.data}:e)}})),{status:"berhasil update",data:i.data}}catch(e){return{status:"error",data:e.response.data}}}})));var p=e=>{let{setDelete:t,setEdit:a,search:n}=e,{setProvinsi:l,dtProvinsi:d}=u(),[c,p]=(0,i.useState)(1),[f,m]=(0,i.useState)(10),h=async()=>{await l({page:c,limit:f,search:n})};return(0,i.useEffect)(()=>(h(),()=>{}),[c,f]),(0,i.useEffect)(()=>{p(1),h()},[n]),(0,r.jsxs)("div",{className:"flex flex-col w-full h-full overflow-auto",children:[(0,r.jsx)(o.Z,{headTable:["No","Nama","Aksi"],tableBodies:["nama"],dataTable:d.data,page:c,limit:f,setEdit:a,setDelete:t,ubah:!0,hapus:!0}),(null==d?void 0:d.last_page)>1&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(s.Z,{currentPage:null==d?void 0:d.current_page,totalPages:null==d?void 0:d.last_page,setPage:p})})]})},f=a(366),m=a(2985),h=a(7808),g=a(9442),v=a(9700),b=e=>{let{showModal:t,setShowModal:a,dtEdit:s}=e,{addData:o,updateData:n}=u(),{register:l,handleSubmit:d,reset:c,setValue:p,formState:{errors:b}}=(0,v.cI)(),y=()=>{p("id",""),p("nama","")};(0,i.useEffect)(()=>{s?(p("id",s.id),p("nama",s.nama)):y()},[t,s]);let x=async e=>{if(s){let{data:t}=await n(s.id,e);(0,g.Z)({event:t}),a(!1)}else{let{data:t}=await o(e);(0,g.Z)({event:t}),(null==t?void 0:t.type)!=="success"||y()}};return(0,r.jsx)(h.Z,{title:"Form Provinsi",showModal:t,setShowModal:a,children:(0,r.jsxs)("form",{onSubmit:d(x),children:[(0,r.jsx)(m.Z,{name:"id",register:l,type:"hidden"}),(0,r.jsx)("div",{className:"flex flex-col gap-2 mb-4",children:(0,r.jsx)("div",{className:"flex gap-4",children:(0,r.jsx)(m.Z,{label:"Nama Provinsi",name:"nama",register:l,required:!0,minLength:3,errors:b.nama,addClass:"w-[100%]"})})}),(0,r.jsx)("div",{children:(0,r.jsx)(f.Z,{text:"Simpan",onClick:d(x)})})]})})},y=a(686),x=a(8919),w=a(8350),j=e=>{let{removeData:t}=u(),[a,s]=(0,i.useState)(!1),[o,n]=(0,i.useState)(!1),[l,d]=(0,i.useState)(),[c,m]=(0,i.useState)(),[h,v]=(0,i.useState)(""),j=async e=>{let{id:a,isDelete:r}=e;if(d(a),r){let{data:e}=await t(l);(0,g.Z)({event:e}),n(!1)}else n(!0)};return(0,r.jsxs)("div",{className:"flex flex-col h-full",children:[(0,r.jsxs)("div",{className:"grow h-fit",children:[(0,r.jsx)(x.x7,{}),(0,r.jsx)(b,{dtEdit:c,showModal:a,setShowModal:s}),(0,r.jsx)(y.Z,{showDel:o,setShowDel:n,setDelete:j}),(0,r.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,r.jsx)("p",{children:"Silahkan Mengolah data Provinsi"}),(0,r.jsx)("div",{children:(0,r.jsx)(f.Z,{text:"Tambah Provinsi",onClick:()=>{s(!0),m(null)}})})]}),(0,r.jsx)(w.Z,{placeholder:"Cari Provinsi",onChange:e=>v(e)})]}),(0,r.jsx)(p,{setDelete:j,setEdit:e=>{s(!0),m(e)},search:h})]})}},1712:function(e,t,a){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)e[r]=a[r]}return e}a.d(t,{Z:function(){return i}});var i=function e(t,a){function i(e,i,s){if("undefined"!=typeof document){"number"==typeof(s=r({},a,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var n in s)s[n]&&(o+="; "+n,!0!==s[n]&&(o+="="+s[n].split(";")[0]));return document.cookie=e+"="+t.write(i,e)+o}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var a=document.cookie?document.cookie.split("; "):[],r={},i=0;i<a.length;i++){var s=a[i].split("="),o=s.slice(1).join("=");try{var n=decodeURIComponent(s[0]);if(r[n]=t.read(o,n),e===n)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(a)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},8919:function(e,t,a){"use strict";let r,i;a.d(t,{x7:function(){return ei},ZP:function(){return es}});var s,o=a(6006);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",r="",i="";for(let s in e){let o=e[s];"@"==s[0]?"i"==s[1]?a=s+" "+o+";":r+="f"==s[1]?p(o,s):s+"{"+p(o,"k"==s[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>s.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=o&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(s,o):s+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+r},f={},m=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+m(e[a]);return t}return e},h=(e,t,a,r,i)=>{var s;let o=m(e),n=f[o]||(f[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!f[n]){let t=o!==e?e:(e=>{let t,a,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(a=t[3].replace(u," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);f[n]=p(i?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&f.g?f.g:null;return a&&(f.g=f[n]),s=f[n],l?t.data=t.data.replace(l,s):-1===t.data.indexOf(s)&&(t.data=r?s+t.data:t.data+s),n},g=(e,t,a)=>e.reduce((e,r,i)=>{let s=t[i];if(s&&s.call){let e=s(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==s?"":s)},"");function v(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}v.bind({g:1});let b,y,x,w=v.bind({k:1});function j(e,t){let a=this||{};return function(){let r=arguments;function i(s,o){let n=Object.assign({},s),l=n.className||i.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=v.apply(a,r)+(l?" "+l:""),t&&(n.ref=o);let d=e;return e[0]&&(d=n.as||e,delete n.as),x&&d[0]&&x(n),b(d,n)}return t?t(i):i}}var E=e=>"function"==typeof e,P=(e,t)=>E(e)?e(t):e,k=(r=0,()=>(++r).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},S=new Map,N=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),O({type:4,toastId:e})},1e3);S.set(e,t)},_=e=>{let t=S.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&_(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?D(e,{type:1,toast:a}):D(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?N(r):e.toasts.forEach(e=>{N(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},Z=[],$={toasts:[],pausedAt:void 0},O=e=>{$=D($,e),Z.forEach(e=>{e($)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,a]=(0,o.useState)($);(0,o.useEffect)(()=>(Z.push(a),()=>{let e=Z.indexOf(a);e>-1&&Z.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var a,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},I=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),T=e=>(t,a)=>{let r=I(t,e,a);return O({type:2,toast:r}),r.id},M=(e,t)=>T("blank")(e,t);M.error=T("error"),M.success=T("success"),M.loading=T("loading"),M.custom=T("custom"),M.dismiss=e=>{O({type:3,toastId:e})},M.remove=e=>O({type:4,toastId:e}),M.promise=(e,t,a)=>{let r=M.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(M.success(P(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{M.error(P(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var U=(e,t)=>{O({type:1,toast:{id:e,height:t}})},B=()=>{O({type:5,time:Date.now()})},F=e=>{let{toasts:t,pausedAt:a}=z(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&M.dismiss(t.id);return}return setTimeout(()=>M.dismiss(t.id),a)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,a]);let r=(0,o.useCallback)(()=>{a&&O({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:s}=a||{},o=t.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:U,startPause:B,endPause:r,calculateOffset:i}}},R=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,H=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,L=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,q=j("div")`
  position: absolute;
`,W=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,G=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(Y,null,t):t:"blank"===a?null:o.createElement(W,null,o.createElement(H,{...r}),"loading"!==a&&o.createElement(q,null,"error"===a?o.createElement(R,{...r}):o.createElement(L,{...r})))},J=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let a=e.includes("top")?1:-1,[r,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[J(a),K(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:r})=>{let i=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(G,{toast:e}),n=o.createElement(V,{...e.ariaProps},P(e.message,e));return o.createElement(Q,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof r?r({icon:s,message:n}):o.createElement(o.Fragment,null,s,n))});s=o.createElement,p.p=void 0,b=s,y=void 0,x=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:r,children:i})=>{let s=o.useCallback(t=>{if(t){let a=()=>{r(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:s,className:t,style:a},i)},ea=(e,t)=>{let a=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...r}},er=v`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:r,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:l,handlers:d}=F(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(a=>{let s=a.position||t,n=ea(s,d.calculateOffset(a,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?er:"",style:n},"custom"===a.type?P(a.message,a):i?i(a):o.createElement(ee,{toast:a,position:s}))}))},es=M}},function(e){e.O(0,[6680,4550,8348,6394,7742,2629,483,9253,7698,1744],function(){return e(e.s=4176)}),_N_E=e.O()}]);