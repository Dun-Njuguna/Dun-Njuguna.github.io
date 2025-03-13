"use strict";(self.webpackChunkDuncan_portfolio=self.webpackChunkDuncan_portfolio||[]).push([[735],{5639:(e,r,i)=>{i.d(r,{$:()=>t});const o=(0,i(4905).Ay)("button")`
  background: ${e=>e.color||"#2e186a"};
  color: ${e=>e.color?"#2E186A":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;var n=i(579);const t=e=>{let{color:r,children:i,onClick:t}=e;return(0,n.jsx)(o,{color:r,onClick:t,children:i})}},1825:(e,r,i)=>{i.d(r,{A:()=>a});i(5043);var o=i(2382),n=i(2646),t=(i(4430),i(9078),i(579));const l=e=>{const{className:r,style:i,onClick:o}=e;return(0,t.jsx)("div",{className:r,style:{...i,display:"flex",alignItems:"center",justifyContent:"center",left:"-0px",zIndex:1,width:"40px",height:"40px",backgroundColor:"#18216d",borderRadius:"50%"},onClick:o})},d=e=>{const{className:r,style:i,onClick:o}=e;return(0,t.jsx)("div",{className:r,style:{...i,display:"flex",alignItems:"center",justifyContent:"center",right:"-0px",zIndex:1,width:"40px",height:"40px",backgroundColor:"#18216d",borderRadius:"50%"},onClick:o})},s={dots:!0,lazyLoad:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,prevArrow:(0,t.jsx)(l,{}),nextArrow:(0,t.jsx)(d,{})},a=e=>{let{images:r}=e;return 1===r.length?(0,t.jsx)(n.A,{src:r[0],width:"100%",height:"100%"}):(0,t.jsx)(o.A,{...s,children:r.map(((e,r)=>(0,t.jsx)("div",{children:(0,t.jsx)(n.A,{src:e,width:"84%",height:"600px"})},r)))})}},8307:(e,r,i)=>{i.r(r),i.d(r,{default:()=>v});var o=i(2444),n=i(4647),t=i(1793),l=i(4703),d=i(4117),s=i(5639),a=i(4905);const c=a.Ay.section`
  padding: 4rem 0;
`,x=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`,h=a.Ay.h3`
  margin-bottom: 0.5rem;
  color: #222;
`,p=a.Ay.p`
  line-height: 2;
  color: #555;
`,g=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,m=a.Ay.div`
  width: 60px;
  height: 60px;
  background:rgba(243, 244, 246, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #e5e7eb;
  }
`,u=(a.Ay.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.5rem;
  background: #24292e;
  color: white;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #000;
  }
`,a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;

  a {
    color: #0366d6;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #023e8a;
    }
  }
`,a.Ay.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h4 {
    margin: 0;
    color: #333;
  }

  p {
    margin: 0;
    color: #555;
  }
`),f=a.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,b=a.Ay.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`,y=(a.Ay.a`
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.8rem 1.6rem;
  background: #24292e;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #000;
  }
`,a.Ay.div`
  margin-left: 2rem; /* to indicate hierarchy under main repo */
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -1.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 2px;
    background: #d1d5db;
  }
`),j=a.Ay.div`
  a {
    padding: 0.5rem 1.2rem;
    border-radius: 30px;
    background: #f3f4f6;
    color: #0366d6;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #e5e7eb;
      color: #023e8a;
    }
  }
`;var w=i(1825),k=i(2646),A=i(579);const v=(0,d.CI)()((e=>{let{images:r,title:i,content:d,github_url:a,modules:v,technologies:C,section:z,button:I,t:_,id:N,direction:$}=e;return(0,A.jsx)(c,{id:N,children:(0,A.jsx)(l.zW,{direction:$,triggerOnce:!0,children:(0,A.jsxs)(o.A,{gutter:[32,32],align:"middle",justify:"center",style:{flexDirection:"left"===$?"row":"row-reverse"},children:[(0,A.jsx)(n.A,{lg:11,md:24,sm:24,xs:24,children:(0,A.jsx)(w.A,{images:r})}),(0,A.jsx)(n.A,{lg:11,md:24,sm:24,xs:24,children:(0,A.jsxs)(x,{children:[(0,A.jsx)(h,{children:_(i)}),(0,A.jsx)(p,{children:_(d)}),C&&C.length>0&&(0,A.jsxs)(n.A,{children:[(0,A.jsx)(p,{children:"Technologies:"}),(0,A.jsx)(g,{children:C.map(((e,r)=>(0,A.jsx)(t.A,{title:e.name,children:(0,A.jsx)(m,{children:(0,A.jsx)(k.A,{src:e.icon,width:"90%",height:"60%"})})},r)))})]}),(0,A.jsx)(b,{children:v&&v.length>0&&(0,A.jsx)(y,{children:v.map(((e,r)=>(0,A.jsx)(j,{children:(0,A.jsxs)("a",{href:e.github_url,target:"_blank",rel:"noopener noreferrer",children:["\ud83d\udce6 ",e.title]})},r)))})}),z&&(0,A.jsx)(u,{children:z.map(((e,r)=>(0,A.jsxs)("div",{children:[(0,A.jsx)("h4",{children:_(e.title)}),(0,A.jsx)("p",{children:_(e.content)})]},r)))}),I&&(0,A.jsx)(f,{children:I.map(((e,r)=>(0,A.jsx)(s.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("contact"),children:_(e.title)},r)))})]})})]})})})}))}}]);
//# sourceMappingURL=735.a3e5b944.chunk.js.map