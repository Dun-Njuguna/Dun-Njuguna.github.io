"use strict";(self.webpackChunkDuncan_portfolio=self.webpackChunkDuncan_portfolio||[]).push([[114],{7942:(e,i,t)=>{t.r(i),t.d(i,{default:()=>j});var r=t(4647),n=t(2444),s=t(4703),o=t(4117);const d=(0,t(4905).Ay)("button")`
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
`;var l=t(579);const c=e=>{let{color:i,children:t,onClick:r}=e;return(0,l.jsx)(d,{color:i,onClick:r,children:t})};var a=t(2646),h=t(2026),x=(t(5043),t(2382));t(4430),t(9078);const p=e=>{const{className:i,style:t,onClick:r}=e;return(0,l.jsx)("div",{className:i,style:{...t,display:"flex",alignItems:"center",justifyContent:"center",left:"-20px",zIndex:1,width:"40px",height:"40px",backgroundColor:"#18216d",borderRadius:"50%"},onClick:r})},m=e=>{const{className:i,style:t,onClick:r}=e;return(0,l.jsx)("div",{className:i,style:{...t,display:"flex",alignItems:"center",justifyContent:"center",right:"-20px",zIndex:1,width:"40px",height:"40px",backgroundColor:"#18216d",borderRadius:"50%"},onClick:r})},g={dots:!0,lazyLoad:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!0,prevArrow:(0,l.jsx)(p,{}),nextArrow:(0,l.jsx)(m,{})},f=e=>{let{images:i}=e;return 1===i.length?(0,l.jsx)(a.A,{src:i[0],width:"100%",height:"100%"}):(0,l.jsx)(x.A,{...g,children:i.map(((e,i)=>(0,l.jsx)("div",{children:(0,l.jsx)(a.A,{src:e,width:"84%",height:"600px"})},i)))})},j=(0,o.CI)()((e=>{let{images:i,title:t,content:o,github_url:d,modules:x,section:p,button:m,t:g,id:j,direction:u}=e;return(0,l.jsx)(h.Fe,{children:(0,l.jsx)(s.zW,{direction:u,triggerOnce:!0,children:(0,l.jsxs)(h.yX,{justify:"space-between",align:"middle",id:j,direction:u,children:[(0,l.jsx)(r.A,{lg:11,md:11,sm:12,xs:24,children:(0,l.jsx)(f,{images:i})}),(0,l.jsx)(r.A,{lg:11,md:11,sm:11,xs:24,children:(0,l.jsxs)(h.HD,{children:[(0,l.jsx)("h3",{children:g(t)}),(0,l.jsx)(h.UC,{children:g(o)}),(0,l.jsxs)("div",{children:[d&&(0,l.jsx)("p",{children:(0,l.jsx)("a",{href:d,target:"_blank",rel:"noopener noreferrer",children:t})}),x&&x.length>0&&(0,l.jsx)("ul",{children:x.map(((e,i)=>(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:e.github_url,target:"_blank",rel:"noopener noreferrer",children:e.title})},i)))})]}),"right"===u?(0,l.jsx)(h.eM,{children:"object"===typeof m&&m.map(((e,i)=>(0,l.jsx)(c,{color:e.color,onClick:()=>(e=>{document.getElementById(e).scrollIntoView({behavior:"smooth"})})("contact"),children:g(e.title)},i)))}):(0,l.jsx)(h.xv,{children:(0,l.jsx)(n.A,{justify:"space-between",children:"object"===typeof p&&p.map(((e,i)=>(0,l.jsxs)(r.A,{span:11,children:[(0,l.jsx)(a.A,{src:e.icon,width:"60px",height:"60px"}),(0,l.jsx)(h.j_,{children:g(e.title)}),(0,l.jsx)(h.dG,{children:g(e.content)})]},i)))})})]})})]})})})}))},2026:(e,i,t)=>{t.d(i,{Fe:()=>s,HD:()=>l,UC:()=>o,ck:()=>p,dG:()=>h,eM:()=>x,j_:()=>a,xv:()=>c,yX:()=>d});var r=t(2444),n=t(4905);const s=(0,n.Ay)("section")`
  position: relative;
  padding: 5rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`,o=(0,n.Ay)("p")`
  margin: 1.5rem 0 2rem 0;
`,d=(0,n.Ay)(r.A)`
  flex-direction: ${e=>{let{direction:i}=e;return"left"===i?"row":"row-reverse"}};
`,l=(0,n.Ay)("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`,c=(0,n.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`,a=(0,n.Ay)("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`,h=(0,n.Ay)("p")`
  font-size: 15px;
`,x=(0,n.Ay)("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`,p=n.Ay.img`
  width: 160%;
  height: 160%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`}}]);
//# sourceMappingURL=114.d3266f4b.chunk.js.map