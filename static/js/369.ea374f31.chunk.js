"use strict";(self.webpackChunkdashboard=self.webpackChunkdashboard||[]).push([[369],{6369:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(5043),l=a(3519),r=a(1072),i=a(8602),c=a(8628),n=a(3502),d=a(4282),o=a(4737),m=a(6555),x=a(579);function h(){const[e,s]=(0,t.useState)("10:00"),[a,h]=(0,t.useState)(""),[j,A]=(0,t.useState)(!1),[p,u]=(0,t.useState)(1),[b,y]=(0,t.useState)(!1);return(0,x.jsx)(m.A,{title:"Advanced Form Elements",children:(0,x.jsx)("div",{className:"p-lg-4",children:(0,x.jsxs)(l.A,{fluid:!0,children:[(0,x.jsx)("div",{className:"d-flex align-items-center justify-content-between my-3",children:(0,x.jsx)("h3",{children:"Advanced Form"})}),(0,x.jsxs)(r.A,{className:" my-3",children:[(0,x.jsxs)(i.A,{xs:12,md:6,lg:6,className:"mt-lg-0 mt-sm-3",children:[(0,x.jsxs)(c.A,{className:"mt-lg-3",children:[(0,x.jsx)(c.A.Header,{className:"bg-primary text-white py-3",children:"Switch"}),(0,x.jsx)(c.A.Body,{children:(0,x.jsxs)(n.A,{children:[(0,x.jsx)(n.A.Check,{type:"switch",id:"custom-switch",label:"Check this switch"}),(0,x.jsx)(n.A.Check,{disabled:!0,type:"switch",label:"disabled switch",id:"disabled-custom-switch"})]})})]}),(0,x.jsxs)(c.A,{className:"mt-3",children:[(0,x.jsx)(c.A.Header,{className:"bg-primary text-white py-3",children:"Validation"}),(0,x.jsx)(c.A.Body,{children:(0,x.jsxs)(n.A,{noValidate:!0,validated:b,onSubmit:e=>{!1===e.currentTarget.checkValidity()&&(e.preventDefault(),e.stopPropagation()),y(!0)},children:[(0,x.jsxs)(r.A,{className:"mb-3",children:[(0,x.jsxs)(n.A.Group,{as:i.A,md:"6",controlId:"validationCustom01",children:[(0,x.jsx)(n.A.Label,{children:"First name"}),(0,x.jsx)(n.A.Control,{required:!0,type:"text",placeholder:"First name",defaultValue:"Mark"}),(0,x.jsx)(n.A.Control.Feedback,{children:"Looks good!"})]}),(0,x.jsxs)(n.A.Group,{as:i.A,md:"6",controlId:"validationCustom02",children:[(0,x.jsx)(n.A.Label,{children:"Last name"}),(0,x.jsx)(n.A.Control,{required:!0,type:"text",placeholder:"Last name",defaultValue:"Otto"}),(0,x.jsx)(n.A.Control.Feedback,{children:"Looks good!"})]})]}),(0,x.jsx)(n.A.Group,{className:"mb-3",children:(0,x.jsx)(n.A.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting.",feedbackType:"invalid"})}),(0,x.jsx)(d.A,{type:"submit",children:"Submit form"})]})})]})]}),(0,x.jsxs)(i.A,{xs:12,md:6,lg:6,className:"mt-lg-0 mt-sm-3",children:[(0,x.jsxs)(c.A,{className:"mt-3",children:[(0,x.jsx)(c.A.Header,{className:"bg-primary text-white py-3",children:"Switch Bootstrap"}),(0,x.jsx)(c.A.Body,{children:(0,x.jsx)("div",{className:"border",style:{width:"90px"},children:(0,x.jsx)("div",{onClick:()=>{A(!j)},className:"bg-".concat(j?"success":"danger"," text-white px-3 py-2 float-").concat(j?"start":"end"),style:{width:"70px",cursor:"pointer",transition:" 0.3s ease-in-out"},children:j?"ON":"OFF"})})})]}),(0,x.jsxs)(c.A,{className:"mt-3",children:[(0,x.jsx)(c.A.Header,{className:"bg-primary text-white py-3",children:"Color , Date & Time Picker"}),(0,x.jsxs)(c.A.Body,{children:[(0,x.jsxs)(n.A.Group,{className:"mb-3",children:[(0,x.jsx)(n.A.Label,{htmlFor:"exampleTimeInput",children:"Time picker"}),(0,x.jsx)(n.A.Control,{id:"exampleTimeInput",type:"time",value:e,onChange:e=>{s(e.target.value)},style:{fontSize:"16px",padding:"5px"}})]}),(0,x.jsxs)(n.A.Group,{className:"mb-3",children:[(0,x.jsx)(n.A.Label,{htmlFor:"exampleDateInput",children:"Date picker"}),(0,x.jsx)(n.A.Control,{id:"exampleDateInput",type:"date",value:a,onChange:e=>{h(e.target.value)},style:{fontSize:"16px",padding:"5px"}})]}),(0,x.jsxs)(n.A.Group,{className:"mb-3",children:[(0,x.jsx)(n.A.Label,{htmlFor:"exampleColorInput",children:"Color picker"}),(0,x.jsx)(n.A.Control,{type:"color",id:"exampleColorInput",defaultValue:"#563d7c",title:"Choose your color"})]})]})]})]})]}),(0,x.jsx)(r.A,{className:" my-3",children:(0,x.jsx)(i.A,{children:(0,x.jsxs)(c.A,{className:"mt-3",children:[(0,x.jsx)(c.A.Header,{className:"bg-primary text-white py-3",children:"Form Stepper"}),(0,x.jsxs)(c.A.Body,{children:[(0,x.jsxs)(o.A,{fill:!0,variant:"tabs",activeKey:p,children:[(0,x.jsx)(o.A.Item,{children:(0,x.jsx)(o.A.Link,{eventKey:1,onClick:()=>u(1),children:"Step 1"})}),(0,x.jsx)(o.A.Item,{children:(0,x.jsx)(o.A.Link,{eventKey:2,onClick:()=>u(2),children:"Step 2"})}),(0,x.jsx)(o.A.Item,{children:(0,x.jsx)(o.A.Link,{eventKey:3,onClick:()=>u(3),children:"Step 3"})})]}),(0,x.jsxs)(n.A,{className:"mt-4",children:[1===p&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{children:"Step 1: Personal Information"}),(0,x.jsxs)(n.A.Group,{controlId:"formName",className:"mb-3",children:[(0,x.jsx)(n.A.Label,{children:"Name"}),(0,x.jsx)(n.A.Control,{type:"text",placeholder:"Enter your name",required:!0})]}),(0,x.jsxs)(n.A.Group,{controlId:"formEmail",className:"mb-3",children:[(0,x.jsx)(n.A.Label,{children:"Email"}),(0,x.jsx)(n.A.Control,{type:"email",placeholder:"Enter your email",required:!0})]})]}),2===p&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{children:"Step 2: Address Details"}),(0,x.jsxs)(n.A.Group,{controlId:"formAddress",className:"mb-3",children:[(0,x.jsx)(n.A.Label,{children:"Address"}),(0,x.jsx)(n.A.Control,{type:"text",placeholder:"Enter your address",required:!0})]}),(0,x.jsxs)(n.A.Group,{controlId:"formCity",className:"mb-3",children:[(0,x.jsx)(n.A.Label,{children:"City"}),(0,x.jsx)(n.A.Control,{type:"text",placeholder:"Enter your city",required:!0})]})]}),3===p&&(0,x.jsxs)("div",{children:[(0,x.jsx)("h4",{children:"Step 3: Review & Submit"}),(0,x.jsx)("p",{children:"Review your details before submitting the form."})]}),(0,x.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,x.jsx)(d.A,{variant:"secondary",onClick:()=>u((e=>e-1)),disabled:1===p,children:"Previous"}),p<3?(0,x.jsx)(d.A,{variant:"primary",onClick:()=>u((e=>e+1)),children:"Next"}):(0,x.jsx)(d.A,{variant:"success",type:"submit",children:"Submit"})]})]})]})]})})})]})})})}},4737:(e,s,a)=>{a.d(s,{A:()=>v});var t=a(9379),l=a(45),r=a(8139),i=a.n(r),c=a(5043),n=a(1969),d=a(927),o=a(7852),m=a(9125),x=a(1778),h=a(579);const j=["className","bsPrefix","as"],A=c.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:c="div"}=e,n=(0,l.A)(e,j);return r=(0,o.oU)(r,"nav-item"),(0,h.jsx)(c,(0,t.A)({ref:s,className:i()(a,r)},n))}));A.displayName="NavItem";const p=A;var u=a(4541);const b=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],y=c.forwardRef(((e,s)=>{const a=(0,n.Zw)(e,{activeKey:"onSelect"}),{as:r="div",bsPrefix:j,variant:A,fill:p=!1,justify:u=!1,navbar:y,navbarScroll:v,className:f,activeKey:N}=a,C=(0,l.A)(a,b),k=(0,o.oU)(j,"nav");let g,w,S=!1;const I=(0,c.useContext)(m.A),L=(0,c.useContext)(x.A);return I?(g=I.bsPrefix,S=null==y||y):L&&({cardHeaderBsPrefix:w}=L),(0,h.jsx)(d.A,(0,t.A)({as:r,ref:s,activeKey:N,className:i()(f,{[k]:!S,["".concat(g,"-nav")]:S,["".concat(g,"-nav-scroll")]:S&&v,["".concat(w,"-").concat(A)]:!!w,["".concat(k,"-").concat(A)]:!!A,["".concat(k,"-fill")]:p,["".concat(k,"-justified")]:u})},C))}));y.displayName="Nav";const v=Object.assign(y,{Item:p,Link:u.A})},9125:(e,s,a)=>{a.d(s,{A:()=>l});const t=a(5043).createContext(null);t.displayName="NavbarContext";const l=t}}]);
//# sourceMappingURL=369.ea374f31.chunk.js.map