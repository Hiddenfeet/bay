(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2246,2521],{89881:function(e,t,n){var r=n(47816),o=n(99291)(r);e.exports=o},80760:function(e,t,n){var r=n(89881);e.exports=function(e,t){var n=[];return r(e,function(e,r,o){t(e,r,o)&&n.push(e)}),n}},99291:function(e,t,n){var r=n(98612);e.exports=function(e,t){return function(n,o){if(null==n)return n;if(!r(n))return e(n,o);for(var i=n.length,s=t?i:-1,a=Object(n);(t?s--:++s<i)&&!1!==o(a[s],s,a););return n}}},63105:function(e,t,n){var r=n(34963),o=n(80760),i=n(67206),s=n(1469);e.exports=function(e,t){return(s(e)?r:o)(e,i(t,3))}},58533:function(e,t,n){"use strict";var r=n(67294),o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s={Pixel:"Pixel",Percent:"Percent"},a={unit:s.Percent,value:.8};function l(e){return"number"==typeof e?{unit:s.Percent,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:s.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:s.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var c=function(e){function t(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"==typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){!n.lastScrollTop&&(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){n.dragging&&(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||!n._infScroll||(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")})},n.onScrollListener=function(e){"function"==typeof n.props.onScroll&&setTimeout(function(){return n.props.onScroll&&n.props.onScroll(e)},0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=(function(e,t,n,r){var o,i=!1,s=0;function a(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-s,u=arguments;function d(){s=Date.now(),n.apply(l,u)}i||(r&&!o&&d(),a(),void 0===r&&c>e?d():!0!==t&&(o=setTimeout(r?function(){o=void 0}:d,void 0===r?e-c:e)))}return"boolean"!=typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){a(),i=!0},l})(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return!function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?i(i({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=l(t);return r.unit===s.Pixel?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=l(t);return r.unit===s.Pixel?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(r.Component);t.Z=c},77484:function(e,t,n){"use strict";n.d(t,{K:function(){return l}});var r=n(91836),o=n(35059),i=n(51550),s=n(25432),a=n(85893),l=(0,o.G)(function(e,t){let{getButtonProps:n}=(0,r.bB)(),o=n(e,t),l=(0,r.YO)(),c={display:"flex",alignItems:"center",width:"100%",outline:0,...l.button};return(0,a.jsx)(i.m.button,{...o,className:(0,s.cx)("chakra-accordion__button",e.className),__css:c})});l.displayName="AccordionButton"},21673:function(e,t,n){"use strict";n.d(t,{X:function(){return l}});var r=n(17257),o=n(91836),i=n(56877),s=n(25432),a=n(85893);function l(e){let{isOpen:t,isDisabled:n}=(0,o.bB)(),{reduceMotion:l}=(0,r.EF)(),c=(0,s.cx)("chakra-accordion__icon",e.className),u=(0,o.YO)(),d={opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:l?void 0:"transform 0.2s",transformOrigin:"center",...u.icon};return(0,a.jsx)(i.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:c,__css:d,...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}l.displayName="AccordionIcon"},16743:function(e,t,n){"use strict";n.d(t,{O:function(){return p}});var r=n(59690),o=n(85130),i=n(52366),s=n(35155),a=n(81103),l=n(25432),c={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},u=n(46256),d=n(67294);function p(e={}){let t=(0,r.K)(e),{isDisabled:n,isReadOnly:p,isRequired:f,isInvalid:m,id:v,onBlur:g,onFocus:y,"aria-describedby":b}=t,{defaultChecked:w,isChecked:_,isFocusable:x,onChange:S,isIndeterminate:T,name:E,value:L,tabIndex:k,"aria-label":N,"aria-labelledby":C,"aria-invalid":M,...j}=e,D=function(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}(j,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),P=(0,s.W)(S),B=(0,s.W)(g),Y=(0,s.W)(y),[R,A]=(0,d.useState)(!1),[O,F]=(0,d.useState)(!1),[H,G]=(0,d.useState)(!1),[I,J]=(0,d.useState)(!1);(0,d.useEffect)(()=>(0,u.BT)(A),[]);let q=(0,d.useRef)(null),[K,U]=(0,d.useState)(!0),[z,W]=(0,d.useState)(!!w),V=void 0!==_,$=V?_:z,X=(0,d.useCallback)(e=>{if(p||n){e.preventDefault();return}V||($?W(e.target.checked):W(!!T||e.target.checked)),null==P||P(e)},[p,n,$,V,T,P]);(0,o.G)(()=>{q.current&&(q.current.indeterminate=!!T)},[T]),(0,i.r)(()=>{n&&F(!1)},[n,F]),(0,o.G)(()=>{let e=q.current;(null==e?void 0:e.form)&&(e.form.onreset=()=>{W(!!w)})},[]);let Z=n&&!x,Q=(0,d.useCallback)(e=>{" "===e.key&&J(!0)},[J]),ee=(0,d.useCallback)(e=>{" "===e.key&&J(!1)},[J]);(0,o.G)(()=>{if(!q.current)return;let e=q.current.checked!==$;e&&W(q.current.checked)},[q.current]);let et=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,"data-active":(0,l.PB)(I),"data-hover":(0,l.PB)(H),"data-checked":(0,l.PB)($),"data-focus":(0,l.PB)(O),"data-focus-visible":(0,l.PB)(O&&R),"data-indeterminate":(0,l.PB)(T),"data-disabled":(0,l.PB)(n),"data-invalid":(0,l.PB)(m),"data-readonly":(0,l.PB)(p),"aria-hidden":!0,onMouseDown:(0,l.v0)(e.onMouseDown,e=>{O&&e.preventDefault(),J(!0)}),onMouseUp:(0,l.v0)(e.onMouseUp,()=>J(!1)),onMouseEnter:(0,l.v0)(e.onMouseEnter,()=>G(!0)),onMouseLeave:(0,l.v0)(e.onMouseLeave,()=>G(!1))}),[I,$,n,O,R,H,T,m,p]),en=(0,d.useCallback)((e={},t=null)=>({...D,...e,ref:(0,a.lq)(t,e=>{e&&U("LABEL"===e.tagName)}),onClick:(0,l.v0)(e.onClick,()=>{var e;K||(null==(e=q.current)||e.click(),requestAnimationFrame(()=>{var e;null==(e=q.current)||e.focus()}))}),"data-disabled":(0,l.PB)(n),"data-checked":(0,l.PB)($),"data-invalid":(0,l.PB)(m)}),[D,n,$,m,K]),er=(0,d.useCallback)((e={},t=null)=>({...e,ref:(0,a.lq)(q,t),type:"checkbox",name:E,value:L,id:v,tabIndex:k,onChange:(0,l.v0)(e.onChange,X),onBlur:(0,l.v0)(e.onBlur,B,()=>F(!1)),onFocus:(0,l.v0)(e.onFocus,Y,()=>F(!0)),onKeyDown:(0,l.v0)(e.onKeyDown,Q),onKeyUp:(0,l.v0)(e.onKeyUp,ee),required:f,checked:$,disabled:Z,readOnly:p,"aria-label":N,"aria-labelledby":C,"aria-invalid":M?!!M:m,"aria-describedby":b,"aria-disabled":n,style:c}),[E,L,v,X,B,Y,Q,ee,f,$,Z,p,N,C,M,m,b,n,k]),eo=(0,d.useCallback)((e={},t=null)=>({...e,ref:t,onMouseDown:(0,l.v0)(e.onMouseDown,h),onTouchStart:(0,l.v0)(e.onTouchStart,h),"data-disabled":(0,l.PB)(n),"data-checked":(0,l.PB)($),"data-invalid":(0,l.PB)(m)}),[$,n,m]);return{state:{isInvalid:m,isFocused:O,isChecked:$,isActive:I,isHovered:H,isIndeterminate:T,isDisabled:n,isReadOnly:p,isRequired:f},getRootProps:en,getCheckboxProps:et,getInputProps:er,getLabelProps:eo,htmlProps:D}}function h(e){e.preventDefault(),e.stopPropagation()}},5370:function(e,t,n){"use strict";n.d(t,{l:function(){return u}});var r=n(38267),o=n(35059),i=n(91639),s=n(33179),a=n(51550),l=n(25432),c=n(85893),u=(0,o.G)(function(e,t){var n;let o=(0,i.mq)("FormLabel",e),u=(0,s.Lr)(e),{className:p,children:h,requiredIndicator:f=(0,c.jsx)(d,{}),optionalIndicator:m=null,...v}=u,g=(0,r.NJ)(),y=null!=(n=null==g?void 0:g.getLabelProps(v,t))?n:{ref:t,...v};return(0,c.jsxs)(a.m.label,{...y,className:(0,l.cx)("chakra-form__label",u.className),__css:{display:"block",textAlign:"start",...o},children:[h,(null==g?void 0:g.isRequired)?f:m]})});u.displayName="FormLabel";var d=(0,o.G)(function(e,t){let n=(0,r.NJ)(),o=(0,r.e)();if(!(null==n?void 0:n.isRequired))return null;let i=(0,l.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(a.m.span,{...null==n?void 0:n.getRequiredIndicatorProps(e,t),__css:o.requiredIndicator,className:i})});d.displayName="RequiredIndicator"},62807:function(e,t,n){"use strict";n.d(t,{g:function(){return r}});var r=(0,n(40078).I)({d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",displayName:"ChevronUpIcon"})},57577:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var r=n(11028),o=n(25432),i=n(35059),s=n(51550),a=n(85893),l=(0,i.G)(function(e,t){let n=(0,r.J)();return(0,a.jsx)(s.m.dd,{ref:t,...e,className:(0,o.cx)("chakra-stat__help-text",e.className),__css:n.helpText})});l.displayName="StatHelpText"},33229:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var r=n(11028),o=n(25432),i=n(35059),s=n(51550),a=n(85893),l=(0,i.G)(function(e,t){let n=(0,r.J)();return(0,a.jsx)(s.m.dd,{ref:t,...e,className:(0,o.cx)("chakra-stat__number",e.className),__css:{...n.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});l.displayName="StatNumber"},43954:function(e,t,n){"use strict";n.d(t,{uY:function(){return c}});var r=n(11028),o=n(56877),i=n(51550),s=n(85893),a=e=>(0,s.jsx)(o.J,{color:"red.400",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})});function l(e){return(0,s.jsx)(o.J,{color:"green.400",...e,children:(0,s.jsx)("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})})}function c(e){let{type:t,"aria-label":n,...o}=e,c=(0,r.J)(),u="increase"===t?l:a;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.m.span,{srOnly:!0,children:n||("increase"===t?"increased by":"decreased by")}),(0,s.jsx)(u,{"aria-hidden":!0,...o,__css:c.icon})]})}a.displayName="StatDownArrow",l.displayName="StatUpArrow",c.displayName="StatArrow"},11028:function(e,t,n){"use strict";n.d(t,{J:function(){return d},k:function(){return p}});var r=n(55227),o=n(35059),i=n(91639),s=n(33179),a=n(51550),l=n(25432),c=n(85893),[u,d]=(0,r.k)({name:"StatStylesContext",errorMessage:"useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Stat />\" "}),p=(0,o.G)(function(e,t){let n=(0,i.jC)("Stat",e),r={position:"relative",flex:"1 1 0%",...n.container},{className:o,children:d,...p}=(0,s.Lr)(e);return(0,c.jsx)(u,{value:n,children:(0,c.jsx)(a.m.div,{ref:t,...p,className:(0,l.cx)("chakra-stat",o),__css:r,children:(0,c.jsx)("dl",{children:d})})})});p.displayName="Stat"},47441:function(e,t,n){"use strict";n.d(t,{d:function(){return l}});var r=n(11028),o=n(25432),i=n(35059),s=n(51550),a=n(85893),l=(0,i.G)(function(e,t){let n=(0,r.J)();return(0,a.jsx)(s.m.dt,{ref:t,...e,className:(0,o.cx)("chakra-stat__label",e.className),__css:n.label})});l.displayName="StatLabel"},76060:function(e,t,n){"use strict";n.d(t,{r:function(){return d}});var r=n(16743),o=n(35059),i=n(91639),s=n(33179),a=n(51550),l=n(25432),c=n(67294),u=n(85893),d=(0,o.G)(function(e,t){let n=(0,i.jC)("Switch",e),{spacing:o="0.5rem",children:d,...p}=(0,s.Lr)(e),{state:h,getInputProps:f,getCheckboxProps:m,getRootProps:v,getLabelProps:g}=(0,r.O)(p),y=(0,c.useMemo)(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...n.container}),[n.container]),b=(0,c.useMemo)(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...n.track}),[n.track]),w=(0,c.useMemo)(()=>({userSelect:"none",marginStart:o,...n.label}),[o,n.label]);return(0,u.jsxs)(a.m.label,{...v(),className:(0,l.cx)("chakra-switch",e.className),__css:y,children:[(0,u.jsx)("input",{className:"chakra-switch__input",...f({},t)}),(0,u.jsx)(a.m.span,{...m(),className:"chakra-switch__track",__css:b,children:(0,u.jsx)(a.m.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":(0,l.PB)(h.isChecked),"data-hover":(0,l.PB)(h.isHovered)})}),d&&(0,u.jsx)(a.m.span,{className:"chakra-switch__label",...g(),__css:w,children:d})]})});d.displayName="Switch"},89594:function(e,t,n){"use strict";n.d(t,{SD:function(){return m},Sn:function(){return h},Vp:function(){return p}});var r=n(56877),o=n(55227),i=n(35059),s=n(91639),a=n(33179),l=n(51550),c=n(85893),[u,d]=(0,o.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),p=(0,i.G)((e,t)=>{let n=(0,s.jC)("Tag",e),r=(0,a.Lr)(e),o={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...n.container};return(0,c.jsx)(u,{value:n,children:(0,c.jsx)(l.m.span,{ref:t,...r,__css:o})})});p.displayName="Tag";var h=(0,i.G)((e,t)=>{let n=d();return(0,c.jsx)(l.m.span,{ref:t,noOfLines:1,...e,__css:n.label})});h.displayName="TagLabel",(0,i.G)((e,t)=>(0,c.jsx)(r.J,{ref:t,verticalAlign:"top",marginEnd:"0.5rem",...e})).displayName="TagLeftIcon",(0,i.G)((e,t)=>(0,c.jsx)(r.J,{ref:t,verticalAlign:"top",marginStart:"0.5rem",...e})).displayName="TagRightIcon";var f=e=>(0,c.jsx)(r.J,{verticalAlign:"inherit",viewBox:"0 0 512 512",...e,children:(0,c.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});f.displayName="TagCloseIcon";var m=(0,i.G)((e,t)=>{let{isDisabled:n,children:r,...o}=e,i=d(),s={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...i.closeButton};return(0,c.jsx)(l.m.button,{ref:t,"aria-label":"close",...o,type:"button",disabled:n,__css:s,children:r||(0,c.jsx)(f,{})})});m.displayName="TagCloseButton"},46256:function(e,t,n){"use strict";n.d(t,{BT:function(){return v}});var r=!1,o=null,i=!1,s=!1,a=new Set;function l(e,t){a.forEach(n=>n(e,t))}var c="undefined"!=typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function u(e){i=!0,e.metaKey||!c&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(o="keyboard",l("keyboard",e))}function d(e){if(o="pointer","mousedown"===e.type||"pointerdown"===e.type){i=!0;let t=e.composedPath?e.composedPath()[0]:e.target,n=!1;try{n=t.matches(":focus-visible")}catch{}n||l("pointer",e)}}function p(e){(0===e.mozInputSource&&e.isTrusted||0===e.detail&&!e.pointerType)&&(i=!0,o="virtual")}function h(e){e.target!==window&&e.target!==document&&(i||s||(o="virtual",l("virtual",e)),i=!1,s=!1)}function f(){i=!1,s=!0}function m(){return"pointer"!==o}function v(e){!function(){if("undefined"==typeof window||r)return;let{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...t){i=!0,e.apply(this,t)},document.addEventListener("keydown",u,!0),document.addEventListener("keyup",u,!0),document.addEventListener("click",p,!0),window.addEventListener("focus",h,!0),window.addEventListener("blur",f,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",d,!0),document.addEventListener("pointermove",d,!0),document.addEventListener("pointerup",d,!0)):(document.addEventListener("mousedown",d,!0),document.addEventListener("mousemove",d,!0),document.addEventListener("mouseup",d,!0)),r=!0}(),e(m());let t=()=>e(m());return a.add(t),()=>{a.delete(t)}}}}]);