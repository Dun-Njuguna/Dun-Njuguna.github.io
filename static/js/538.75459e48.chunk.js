"use strict";(self.webpackChunkDuncan_portfolio=self.webpackChunkDuncan_portfolio||[]).push([[538],{8538:(e,n,o)=>{o.r(n),o.d(n,{default:()=>l});var i=o(5043),t=o(2646);const s=(0,o(4905).Ay)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.$show?"visible":"hidden"};
  opacity: ${e=>e.$show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=o(579);const l=()=>{const[e,n]=(0,i.useState)(!1),o=(0,i.useCallback)((()=>{const o=window.scrollY;!e&&o>350?n(!0):o<=350&&n(!1)}),[e]);(0,i.useEffect)((()=>(window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)})),[o]);return(0,r.jsx)(s,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},$show:e,children:(0,r.jsx)(t.A,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=538.75459e48.chunk.js.map