"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2147],{36024:function(e,n,t){t.d(n,{U:function(){return f}});var o=t(17257),r=t(91836),i=t(35059),l=t(91639),a=t(33179),u=t(51550),s=t(25432),c=t(67294),d=t(85893),f=(0,i.G)(function({children:e,reduceMotion:n,...t},i){let f=(0,l.jC)("Accordion",t),p=(0,a.Lr)(t),{htmlProps:m,descendants:v,...h}=(0,o.As)(p),x=(0,c.useMemo)(()=>({...h,reduceMotion:!!n}),[h,n]);return(0,d.jsx)(r.di,{value:v,children:(0,d.jsx)(o.a2,{value:x,children:(0,d.jsx)(r.lh,{value:f,children:(0,d.jsx)(u.m.div,{ref:i,...m,className:(0,s.cx)("chakra-accordion",t.className),__css:f.root,children:e})})})})});f.displayName="Accordion"},5077:function(e,n,t){t.d(n,{Q:function(){return c}});var o=t(17257),r=t(91836),i=t(35059),l=t(51550),a=t(25432),u=t(67294),s=t(85893),c=(0,i.G)(function(e,n){let{children:t,className:i}=e,{htmlProps:c,...d}=(0,o.Zl)(e),f=(0,r.YO)(),p={...f.container,overflowAnchor:"none"},m=(0,u.useMemo)(()=>d,[d]);return(0,s.jsx)(r.ec,{value:m,children:(0,s.jsx)(l.m.div,{ref:n,...c,className:(0,a.cx)("chakra-accordion__item",i),__css:p,children:"function"==typeof t?t({isExpanded:!!d.isOpen,isDisabled:!!d.isDisabled}):t})})});c.displayName="AccordionItem"},17257:function(e,n,t){t.d(n,{As:function(){return s},EF:function(){return d},Zl:function(){return f},a2:function(){return c}});var o=t(91836),r=t(55227),i=t(61942),l=t(81103),a=t(25432),u=t(67294);function s(e){let{onChange:n,defaultIndex:t,index:r,allowMultiple:l,allowToggle:s,...c}=e;(function(e){let n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,a.ZK)({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})})(e),(0,a.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let d=(0,o._v)(),[f,p]=(0,u.useState)(-1);(0,u.useEffect)(()=>()=>{p(-1)},[]);let[m,v]=(0,i.T)({value:r,defaultValue:()=>l?null!=t?t:[]:null!=t?t:-1,onChange:n});return{index:m,setIndex:v,htmlProps:c,getAccordionItemProps:e=>{let n=!1;return null!==e&&(n=Array.isArray(m)?m.includes(e):m===e),{isOpen:n,onChange:n=>{if(null!==e){if(l&&Array.isArray(m)){let t=n?m.concat(e):m.filter(n=>n!==e);v(t)}else n?v(e):s&&v(-1)}}}},focusedIndex:f,setFocusedIndex:p,descendants:d}}var[c,d]=(0,r.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function f(e){var n;let{isDisabled:t,isFocusable:r,id:i,...s}=e,{getAccordionItemProps:c,setFocusedIndex:f}=d(),p=(0,u.useRef)(null),m=(0,u.useId)(),v=null!=i?i:m,h=`accordion-button-${v}`,x=`accordion-panel-${v}`;(0,a.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:b,index:y,descendants:_}=(0,o.mc)({disabled:t&&!r}),{isOpen:k,onChange:g}=c(-1===y?null:y);n={isOpen:k,isDisabled:t},(0,a.ZK)({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"});let w=(0,u.useCallback)(()=>{null==g||g(!k),f(y)},[y,f,k,g]),A=(0,u.useCallback)(e=>{let n={ArrowDown:()=>{let e=_.nextEnabled(y);null==e||e.node.focus()},ArrowUp:()=>{let e=_.prevEnabled(y);null==e||e.node.focus()},Home:()=>{let e=_.firstEnabled();null==e||e.node.focus()},End:()=>{let e=_.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))},[_,y]),j=(0,u.useCallback)(()=>{f(y)},[f,y]),N=(0,u.useCallback)(function(e={},n=null){return{...e,type:"button",ref:(0,l.lq)(b,p,n),id:h,disabled:!!t,"aria-expanded":!!k,"aria-controls":x,onClick:(0,a.v0)(e.onClick,w),onFocus:(0,a.v0)(e.onFocus,j),onKeyDown:(0,a.v0)(e.onKeyDown,A)}},[h,t,k,w,j,A,x,b]),C=(0,u.useCallback)(function(e={},n=null){return{...e,ref:n,role:"region",id:x,"aria-labelledby":h,hidden:!k}},[h,k,x]);return{isOpen:k,isDisabled:t,isFocusable:r,onOpen:()=>{null==g||g(!0)},onClose:()=>{null==g||g(!1)},getButtonProps:N,getPanelProps:C,htmlProps:s}}},91836:function(e,n,t){t.d(n,{YO:function(){return l},_v:function(){return d},bB:function(){return u},di:function(){return s},ec:function(){return a},lh:function(){return i},mc:function(){return f}});var o=t(73614),r=t(55227),[i,l]=(0,r.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[a,u]=(0,r.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[s,c,d,f]=(0,o.n)()},64657:function(e,n,t){t.d(n,{H:function(){return c}});var o=t(17257),r=t(91836),i=t(35059),l=t(51550),a=t(88e3),u=t(25432),s=t(85893),c=(0,i.G)(function(e,n){let{className:t,motionProps:i,...c}=e,{reduceMotion:d}=(0,o.EF)(),{getPanelProps:f,isOpen:p}=(0,r.bB)(),m=f(c,n),v=(0,u.cx)("chakra-accordion__panel",t),h=(0,r.YO)();d||delete m.hidden;let x=(0,s.jsx)(l.m.div,{...m,__css:h.panel,className:v});return d?x:(0,s.jsx)(a.U,{in:p,...i,children:x})});c.displayName="AccordionPanel"},85931:function(e,n,t){t.d(n,{A:function(){return a},f:function(){return u}});var o=t(35059),r=t(51550),i=t(25432),l=t(85893),a=(0,o.G)(function(e,n){let{isExternal:t,target:o,rel:a,className:u,...s}=e;return(0,l.jsx)(r.m.a,{...s,ref:n,className:(0,i.cx)("chakra-linkbox__overlay",u),rel:t?"noopener noreferrer":a,target:t?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),u=(0,o.G)(function(e,n){let{className:t,...o}=e;return(0,l.jsx)(r.m.div,{ref:n,position:"relative",...o,className:(0,i.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})})},61942:function(e,n,t){t.d(n,{T:function(){return i}});var o=t(67294),r=t(35155);function i(e){let{value:n,defaultValue:t,onChange:i,shouldUpdate:l=(e,n)=>e!==n}=e,a=(0,r.W)(i),u=(0,r.W)(l),[s,c]=(0,o.useState)(t),d=void 0!==n,f=d?n:s,p=(0,r.W)(e=>{let n="function"==typeof e?e(f):e;u(f,n)&&(d||c(n),a(n))},[d,a,f,u]);return[f,p]}},36354:function(e,n,t){t.d(n,{x:function(){return a}});var o=t(35059),r=t(51550),i=t(25432),l=t(85893),a=(0,o.G)((e,n)=>{var t;let{overflow:o,overflowX:a,className:u,...s}=e;return(0,l.jsx)(r.m.div,{ref:n,className:(0,i.cx)("chakra-table__container",u),...s,__css:{display:"block",whiteSpace:"nowrap",WebkitOverflowScrolling:"touch",overflowX:null!=(t=null!=o?o:a)?t:"auto",overflowY:"hidden",maxWidth:"100%"}})})},36557:function(e,n,t){t.d(n,{i:function(){return f},p:function(){return d}});var o=t(35059),r=t(91639),i=t(33179),l=t(51550),a=t(25432),u=t(55227),s=t(85893),[c,d]=(0,u.k)({name:"TableStylesContext",errorMessage:"useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Table />\" "}),f=(0,o.G)((e,n)=>{let t=(0,r.jC)("Table",e),{className:o,layout:u,...d}=(0,i.Lr)(e);return(0,s.jsx)(c,{value:t,children:(0,s.jsx)(l.m.table,{ref:n,__css:{tableLayout:u,...t.table},className:(0,a.cx)("chakra-table",o),...d})})});f.displayName="Table"},577:function(e,n,t){t.d(n,{Td:function(){return a}});var o=t(36557),r=t(35059),i=t(51550),l=t(85893),a=(0,r.G)(({isNumeric:e,...n},t)=>{let r=(0,o.p)();return(0,l.jsx)(i.m.td,{...n,ref:t,__css:r.td,"data-is-numeric":e})})},28650:function(e,n,t){t.d(n,{p:function(){return a}});var o=t(36557),r=t(35059),i=t(51550),l=t(85893),a=(0,r.G)((e,n)=>{let t=(0,o.p)();return(0,l.jsx)(i.m.tbody,{...e,ref:n,__css:t.tbody})})},24304:function(e,n,t){t.d(n,{h:function(){return a}});var o=t(36557),r=t(35059),i=t(51550),l=t(85893),a=(0,r.G)((e,n)=>{let t=(0,o.p)();return(0,l.jsx)(i.m.thead,{...e,ref:n,__css:t.thead})})},36526:function(e,n,t){t.d(n,{Tr:function(){return a}});var o=t(36557),r=t(35059),i=t(51550),l=t(85893),a=(0,r.G)((e,n)=>{let t=(0,o.p)();return(0,l.jsx)(i.m.tr,{...e,ref:n,__css:t.tr})})},75421:function(e,n,t){t.d(n,{Th:function(){return a}});var o=t(36557),r=t(35059),i=t(51550),l=t(85893),a=(0,r.G)(({isNumeric:e,...n},t)=>{let r=(0,o.p)();return(0,l.jsx)(i.m.th,{...n,ref:t,__css:r.th,"data-is-numeric":e})})},88e3:function(e,n,t){t.d(n,{U:function(){return f}});var o=t(99155),r=t(25432),i=t(65820),l=t(49762),a=t(67294),u=t(85893),s=e=>null!=e&&parseInt(e.toString(),10)>0,c={exit:{height:{duration:.2,ease:o.Lj.ease},opacity:{duration:.3,ease:o.Lj.ease}},enter:{height:{duration:.3,ease:o.Lj.ease},opacity:{duration:.4,ease:o.Lj.ease}}},d={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:r,delay:i})=>{var l;return{...e&&{opacity:s(n)?1:0},height:n,transitionEnd:null==r?void 0:r.exit,transition:null!=(l=null==t?void 0:t.exit)?l:o.p$.exit(c.exit,i)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:r,delay:i})=>{var l;return{...e&&{opacity:1},height:n,transitionEnd:null==r?void 0:r.enter,transition:null!=(l=null==t?void 0:t.enter)?l:o.p$.enter(c.enter,i)}}},f=(0,a.forwardRef)((e,n)=>{let{in:t,unmountOnExit:o,animateOpacity:s=!0,startingHeight:c=0,endingHeight:f="auto",style:p,className:m,transition:v,transitionEnd:h,...x}=e,[b,y]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let e=setTimeout(()=>{y(!0)});return()=>clearTimeout(e)},[]),(0,r.ZK)({condition:!!(c>0&&o),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let _=parseFloat(c.toString())>0,k={startingHeight:c,endingHeight:f,animateOpacity:s,transition:b?v:{enter:{duration:0}},transitionEnd:{enter:null==h?void 0:h.enter,exit:o?null==h?void 0:h.exit:{...null==h?void 0:h.exit,display:_?"block":"none"}}},g=!o||t,w=t||o?"enter":"exit";return(0,u.jsx)(i.M,{initial:!1,custom:k,children:g&&(0,u.jsx)(l.E.div,{ref:n,...x,className:(0,r.cx)("chakra-collapse",m),style:{overflow:"hidden",display:"block",...p},custom:k,variants:d,initial:!!o&&"exit",animate:w,exit:"exit"})})});f.displayName="Collapse"}}]);