"use strict";(self.webpackChunkDuncan_portfolio=self.webpackChunkDuncan_portfolio||[]).push([[735],{5639:(e,r,o)=>{o.d(r,{$:()=>t});const i=(0,o(4905).Ay)("button")`
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
`;var n=o(579);const t=e=>{let{color:r,children:o,onClick:t}=e;return(0,n.jsx)(i,{color:r,onClick:t,children:o})}},1825:(e,r,o)=>{o.d(r,{A:()=>a});o(5043);var i=o(2382),n=o(2646),t=(o(4430),o(9078),o(579));const l=e=>{const{className:r,style:o,onClick:i}=e;return(0,t.jsx)("div",{className:r,style:{...o,display:"flex",alignItems:"center",justifyContent:"center",left:"-0px",zIndex:1,width:"40px",height:"40px",backgroundColor:"#18216d",borderRadius:"50%"},onClick:i})},s=e=>{const{className:r,style:o,onClick:i}=e;return(0,t.jsx)("div",{className:r,style:{...o,display:"flex",alignItems:"center",justifyContent:"center",right:"-0px",zIndex:1,width:"40px",height:"40px",backgroundColor:"#18216d",borderRadius:"50%"},onClick:i})},d={dots:!0,lazyLoad:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,prevArrow:(0,t.jsx)(l,{}),nextArrow:(0,t.jsx)(s,{})},a=e=>{let{images:r}=e;return 1===r.length?(0,t.jsx)(n.A,{src:r[0],width:"100%",height:"100%"}):(0,t.jsx)(i.A,{...d,children:r.map(((e,r)=>(0,t.jsx)("div",{children:(0,t.jsx)(n.A,{src:e,width:"84%",height:"600px"})},r)))})}},8307:(e,r,o)=>{o.r(r),o.d(r,{default:()=>z});var i=o(2444),n=o(4647),t=o(1793),l=o(4703),s=o(4117),d=o(5639),a=o(4905);const c=a.Ay.section`
  padding: 4rem 0;
`,x=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,h=a.Ay.h3`
  margin-bottom: 0.5rem;
  color: #222;
`,p=a.Ay.h4`
  margin-bottom: 2rem;
  color: #222;
`,g=a.Ay.p`
  line-height: 2;
  color: #555;
`,m=a.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,u=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(243, 244, 246, 0.5);
  border-radius: 9999px; /* Fully rounded pill shape */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: background 0.2s ease;
  cursor: default;

  &:hover {
    background: #e5e7eb;
  }

  svg, img {
    width: 20px;
    height: 20px;
  }
`,f=a.Ay.span`
  font-size: 0.875rem; /* Smaller text */
  color: #374151; /* Neutral gray for text */
  white-space: nowrap;
`,b=(a.Ay.a`
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
`),y=a.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`,j=a.Ay.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`,w=(a.Ay.a`
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
`),k=a.Ay.div`
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
`;var A=o(1825),v=o(2646),C=o(579);const z=(0,s.CI)()((e=>{let{images:r,title:o,content:s,github_url:a,modules:z,technologies:I,section:N,button:_,t:S,id:$,direction:D}=e;return(0,C.jsx)(c,{id:$,children:(0,C.jsx)(l.zW,{direction:D,triggerOnce:!0,children:(0,C.jsxs)(i.A,{gutter:[32,32],align:"middle",justify:"center",style:{flexDirection:"left"===D?"row":"row-reverse"},children:[(0,C.jsx)(n.A,{lg:11,md:24,sm:24,xs:24,children:(0,C.jsx)(A.A,{images:r})}),(0,C.jsx)(n.A,{lg:11,md:24,sm:24,xs:24,children:(0,C.jsxs)(x,{children:[(0,C.jsx)(h,{children:S(o)}),(0,C.jsx)(g,{children:S(s)}),(0,C.jsx)(p,{children:"Technologies:"}),I&&I.length>0&&(0,C.jsx)(m,{children:I.map(((e,r)=>(0,C.jsx)(t.A,{title:e.name,children:(0,C.jsxs)(u,{children:[(0,C.jsx)(v.A,{src:e.icon,width:"20px",height:"20px"}),(0,C.jsx)(f,{children:e.name})]})},r)))}),(0,C.jsxs)(j,{children:[(0,C.jsx)(p,{children:"Github:"}),z&&z.length>0&&(0,C.jsx)(w,{children:z.map(((e,r)=>(0,C.jsx)(k,{children:(0,C.jsxs)("a",{href:e.github_url,target:"_blank",rel:"noopener noreferrer",children:["\ud83d\udce6 ",e.title]})},r)))})]}),N&&(0,C.jsx)(b,{children:N.map(((e,r)=>(0,C.jsxs)("div",{children:[(0,C.jsx)("h4",{children:S(e.title)}),(0,C.jsx)("p",{children:S(e.content)})]},r)))}),_&&(0,C.jsx)(y,{children:_.map(((e,r)=>(0,C.jsx)(d.$,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("contact"),children:S(e.title)},r)))})]})})]})})})}))}}]);
//# sourceMappingURL=735.f333e359.chunk.js.map