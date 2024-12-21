"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[694],{7844:(e,n,s)=>{s.r(n),s.d(n,{default:()=>E});var r=s(5043),a=s(3519),t=s(1072),i=s(4282),l=s(599),c=s(9379),o=s(45),d=s(8139),u=s.n(d),h=s(7852),m=s(579);const x=["bsPrefix","name","className","checked","type","onChange","value","disabled","id","inputRef"],f=()=>{},j=r.forwardRef(((e,n)=>{let{bsPrefix:s,name:r,className:a,checked:t,type:l,onChange:d,value:j,disabled:v,id:p,inputRef:A}=e,g=(0,o.A)(e,x);return s=(0,h.oU)(s,"btn-check"),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("input",{className:s,name:r,type:l,value:j,ref:A,autoComplete:"off",checked:!!t,disabled:!!v,onChange:d||f,id:p}),(0,m.jsx)(i.A,(0,c.A)((0,c.A)({},g),{},{ref:n,className:u()(a,v&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:p}))]})}));j.displayName="ToggleButton";const v=j,p=["bsPrefix","className","role"],A=r.forwardRef(((e,n)=>{let{bsPrefix:s,className:r,role:a="toolbar"}=e,t=(0,o.A)(e,p);const i=(0,h.oU)(s,"btn-toolbar");return(0,m.jsx)("div",(0,c.A)((0,c.A)({},t),{},{ref:n,className:u()(r,i),role:a}))}));A.displayName="ButtonToolbar";const g=A;var b=s(3688),y=s(9632),N=s(3910),w=s(7929),B=s(6555),k=s(8602);const R=e=>{let{children:n}=e;return(0,m.jsx)(k.A,{xs:12,md:6,lg:6,className:"mt-lg-0 mt-sm-3",children:(0,m.jsx)("div",{className:" bg-white rounded py-3 px-4 button-div",children:n})})};function E(){const[e,n]=(0,r.useState)(!1);(0,r.useEffect)((()=>{e&&new Promise((e=>{setTimeout(e,2e3)})).then((()=>{n(!1)}))}),[e]);const[s,c]=(0,r.useState)("1");return(0,m.jsx)(B.A,{title:"Buttons",children:(0,m.jsx)("div",{className:"p-lg-4",children:(0,m.jsxs)(a.A,{fluid:!0,children:[(0,m.jsx)("div",{className:"d-flex align-items-center justify-content-between my-3",children:(0,m.jsx)("h3",{children:"Buttons"})}),(0,m.jsxs)(t.A,{className:"g-3 my-3",children:[(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Basic Buttons"}),(0,m.jsx)("div",{className:"d-flex flex-wrap",children:["primary","secondary","success","danger","warning","info","light","dark","link"].map(((e,n)=>(0,m.jsx)(i.A,{variant:e,className:"m-2",children:e},n)))})]}),(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Outline Buttons"}),(0,m.jsx)("div",{className:"d-flex flex-wrap",children:["primary","secondary","success","danger","warning","info","light","dark","link"].map(((e,n)=>(0,m.jsx)(i.A,{variant:"outline-".concat(e),className:" m-2",children:e},n)))})]})]}),(0,m.jsxs)(t.A,{className:"g-3 my-3",children:[(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Sizing"}),(0,m.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,m.jsx)(i.A,{href:"#",className:"m-2",size:"sm",children:"Link"}),(0,m.jsx)(i.A,{type:"submit",className:"m-2",children:"Button"}),(0,m.jsx)(i.A,{as:"input",className:"m-2",type:"button",value:"Input"})]}),(0,m.jsxs)("div",{className:"d-flex flex-wrap",children:[(0,m.jsx)(i.A,{as:"input",className:"m-2",size:"lg",type:"submit",value:"Submit"}),(0,m.jsx)(i.A,{as:"input",className:"m-2",type:"reset",value:"Reset"})]})]}),(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Block Buttons"}),(0,m.jsxs)("div",{className:"d-grid gap-2",children:[(0,m.jsx)(i.A,{variant:"primary",size:"lg",children:"Block level button"}),(0,m.jsx)(i.A,{variant:"secondary",size:"lg",children:"Block level button"})]})]})]}),(0,m.jsxs)(t.A,{className:"g-3 my-3",children:[(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Button Loading State"}),(0,m.jsx)(i.A,{variant:"primary",disabled:e,onClick:e?null:()=>n(!0),children:e?"Loading\u2026":"Click to load"})]}),(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Radio Button Group"}),(0,m.jsx)(l.A,{children:[{name:"Active",value:"1"},{name:"Radio",value:"2"},{name:"Radio",value:"3"}].map(((e,n)=>(0,m.jsx)(v,{id:"radio-".concat(n),type:"radio",variant:"outline-success",name:"radio",value:e.value,checked:s===e.value,onChange:e=>c(e.currentTarget.value),children:e.name},n)))})]})]}),(0,m.jsxs)(t.A,{className:"g-3 my-3",children:[(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Button Group"}),(0,m.jsxs)(l.A,{"aria-label":"Basic example",children:[(0,m.jsx)(i.A,{variant:"secondary",children:"Left"}),(0,m.jsx)(i.A,{variant:"secondary",children:"Middle"}),(0,m.jsx)(i.A,{variant:"secondary",children:"Right"})]})]}),(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Button Toolbar"}),(0,m.jsxs)(g,{"aria-label":"Toolbar with button groups",children:[(0,m.jsxs)(l.A,{className:"me-2","aria-label":"First group",children:[(0,m.jsx)(i.A,{children:"1"}),(0,m.jsx)(i.A,{children:"2"}),(0,m.jsx)(i.A,{children:"3"}),(0,m.jsx)(i.A,{children:"4"})]}),(0,m.jsxs)(l.A,{className:"me-2","aria-label":"Second group",children:[(0,m.jsx)(i.A,{children:"5"}),(0,m.jsx)(i.A,{children:"6"}),(0,m.jsx)(i.A,{children:"7"})]}),(0,m.jsx)(l.A,{"aria-label":"Third group",children:(0,m.jsx)(i.A,{children:"8"})})]})]})]}),(0,m.jsxs)(t.A,{className:"g-3 my-3",children:[(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Vertical Button Group"}),(0,m.jsxs)(l.A,{vertical:!0,children:[(0,m.jsx)(i.A,{children:"Button"}),(0,m.jsx)(i.A,{children:"Button"}),(0,m.jsxs)(b.A,{as:l.A,title:"Dropdown",id:"bg-vertical-dropdown-1",children:[(0,m.jsx)(y.A.Item,{eventKey:"1",children:"Dropdown link"}),(0,m.jsx)(y.A.Item,{eventKey:"2",children:"Dropdown link"})]})]})]}),(0,m.jsxs)(R,{children:[(0,m.jsx)("h5",{children:"Button with icon"}),(0,m.jsxs)("div",{className:"d-flex flex-column",children:[(0,m.jsxs)(i.A,{variant:"primary",className:"m-2 p-2 w-50",children:["Right Icon",(0,m.jsx)(N.g,{className:"ms-2",icon:w.muz})]}),(0,m.jsxs)(i.A,{variant:"primary",className:"m-2 p-2 w-50",children:[(0,m.jsx)(N.g,{className:"me-2",icon:w.z$e}),"Left Icon"]})]})]})]})]})})})}},8293:(e,n,s)=>{s.d(n,{A:()=>t});var r=s(5043);const a=e=>e&&"function"!==typeof e?n=>{e.current=n}:e;const t=function(e,n){return(0,r.useMemo)((()=>function(e,n){const s=a(e),r=a(n);return e=>{s&&s(e),r&&r(e)}}(e,n)),[e,n])}},2677:(e,n,s)=>{s.d(n,{A:()=>t});var r=s(5043);const a="undefined"!==typeof s.g&&s.g.navigator&&"ReactNative"===s.g.navigator.product,t="undefined"!==typeof document||a?r.useLayoutEffect:r.useEffect},2665:(e,n,s)=>{s.d(n,{A:()=>a});var r=s(5043);function a(){const e=(0,r.useRef)(!0),n=(0,r.useRef)((()=>e.current));return(0,r.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),n.current}},4696:(e,n,s)=>{s.d(n,{A:()=>a});var r=s(5043);function a(e){const n=(0,r.useRef)(null);return(0,r.useEffect)((()=>{n.current=e})),n.current}},3043:(e,n,s)=>{s.d(n,{Ay:()=>l});var r=s(8279),a=!1,t=!1;try{var i={get passive(){return a=!0},get once(){return t=a=!0}};r.A&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(c){}const l=function(e,n,s,r){if(r&&"boolean"!==typeof r&&!t){var i=r.once,l=r.capture,c=s;!t&&i&&(c=s.__once||function e(r){this.removeEventListener(n,e,l),s.call(this,r)},s.__once=c),e.addEventListener(n,c,a?r:l)}e.addEventListener(n,s,r)}},8279:(e,n,s)=>{s.d(n,{A:()=>r});const r=!("undefined"===typeof window||!window.document||!window.document.createElement)},753:(e,n,s)=>{s.d(n,{A:()=>t});var r=s(3043),a=s(8260);const t=function(e,n,s,t){return(0,r.Ay)(e,n,s,t),function(){(0,a.A)(e,n,s,t)}}},182:(e,n,s)=>{function r(e){return e&&e.ownerDocument||document}s.d(n,{A:()=>r})},8260:(e,n,s)=>{s.d(n,{A:()=>r});const r=function(e,n,s,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,s,a),s.__once&&e.removeEventListener(n,s.__once,a)}},599:(e,n,s)=>{s.d(n,{A:()=>h});var r=s(9379),a=s(45),t=s(8139),i=s.n(t),l=s(5043),c=s(7852),o=s(579);const d=["bsPrefix","size","vertical","className","role","as"],u=l.forwardRef(((e,n)=>{let{bsPrefix:s,size:t,vertical:l=!1,className:u,role:h="group",as:m="div"}=e,x=(0,a.A)(e,d);const f=(0,c.oU)(s,"btn-group");let j=f;return l&&(j="".concat(f,"-vertical")),(0,o.jsx)(m,(0,r.A)((0,r.A)({},x),{},{ref:n,role:h,className:i()(u,j,t&&"".concat(f,"-").concat(t))}))}));u.displayName="ButtonGroup";const h=u},3688:(e,n,s)=>{s.d(n,{A:()=>v});var r=s(9379),a=s(45),t=s(5043),i=s(5173),l=s.n(i),c=s(9632),o=s(723),d=s(1748);const u=l().oneOf(["start","end"]),h=l().oneOfType([u,l().shape({sm:u}),l().shape({md:u}),l().shape({lg:u}),l().shape({xl:u}),l().shape({xxl:u}),l().object]);var m=s(579);const x=["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","renderMenuOnMount","disabled","href","id","menuVariant","flip"],f={id:l().string,href:l().string,onClick:l().func,title:l().node.isRequired,disabled:l().bool,align:h,menuRole:l().string,renderMenuOnMount:l().bool,rootCloseEvent:l().string,menuVariant:l().oneOf(["dark"]),flip:l().bool,bsPrefix:l().string,variant:l().string,size:l().string},j=t.forwardRef(((e,n)=>{let{title:s,children:t,bsPrefix:i,rootCloseEvent:l,variant:u,size:h,menuRole:f,renderMenuOnMount:j,disabled:v,href:p,id:A,menuVariant:g,flip:b}=e,y=(0,a.A)(e,x);return(0,m.jsxs)(c.A,(0,r.A)((0,r.A)({ref:n},y),{},{children:[(0,m.jsx)(o.A,{id:A,href:p,size:h,variant:u,disabled:v,childBsPrefix:i,children:s}),(0,m.jsx)(d.A,{role:f,renderOnMount:j,rootCloseEvent:l,variant:g,flip:b,children:t})]}))}));j.displayName="DropdownButton",j.propTypes=f;const v=j}}]);
//# sourceMappingURL=694.3ab1d62e.chunk.js.map