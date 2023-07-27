"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1351],{99495:function(n,e,t){var i=t(98732),a=t(37340),s=t(85893),l=t(67294),r=t(14416),o=t(186),c=t(41664),d=t.n(c),m=t(35553),u=t(28054),f=t(48909),x=t(19669),h=t(98203),g=t(47263),p=t(79790),v=t(1751),j=t(40156),k=t(23100),b=t(204),C=t(14418),N=t(71567),w=t(54641),y=t(88911),I=t(95034),_=t(25675),A=t.n(_),Z=t(12498),L=t(58370),O=t(67814),S=t(59417),F=t(22224),M=t(22920),z=t(91922),V=t(51561),R=t(69301),D=t(21794);function G(){var n=(0,a._)(["\n  position: relative;\n  &:after {\n    content: '';\n    display: block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    background-image: url(",");\n    background-size: 60px 60px;\n    background-position: 0px 0px;\n    background-repeat: no-repeat;\n    opacity: 0.3;\n  }\n"]);return G=function(){return n},n}(0,R.eG)();var P=o.ZP.div.withConfig({componentId:"sc-fb5da790-0"})(G(),function(n){return n.watermark});e.Z=(0,l.memo)(function(n){var e,t,a,o,c,_=n.listing,R=n.imgClass,G=void 0===R?"marketplace":R,U=n.watermark,W=(0,p.Gd)("/collection/".concat(_.nftAddress,"/").concat(_.nftId)),E=(0,i._)((0,l.useState)(!1),2),H=E[0],q=E[1],B=(0,r.I0)(),X=(0,r.v9)(function(n){return n.user}),T=(0,r.v9)(function(n){return n.cart}),Y=(0,i._)((0,l.useState)(!1),2),J=(Y[0],Y[1]),Q=T.nfts.map(function(n){return n.listingId}).includes(_.listingId),$=(0,j.V)(W.toString()).onCopy,K=function(){var n,e,t;B((0,F.Xq)({listingId:_.listingId,name:_.nft.name,image:_.nft.image,price:_.price,address:_.nftAddress,id:_.nftId,rank:_.nft.rank,expirationDate:null!==(n=_.expirationDate)&&void 0!==n?n:null,seller:null!==(e=_.seller)&&void 0!==e?e:null,listingTime:null!==(t=_.listingTime)&&void 0!==t?t:null,is1155:_.is1155,amount:_.amount})),M.Am.success((0,p.jp)(function(){return B((0,F.LA)())}))},nn=function(){B((0,F.h2)(_.listingId)),M.Am.success("Removed from cart")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(k.xu,{className:"card eb-nft__card h-100 shadow",onMouseEnter:function(){return J(!0)},onMouseLeave:function(){return J(!1)},"data-group":!0,_hover:{borderColor:(0,Z.ff)("#595d69","#ddd")},children:(0,s.jsx)(k.xu,{_groupHover:{background:(0,Z.ff)("#FFFFFF","#404040"),transition:"0.3s ease"},borderRadius:"15px",transition:"0.3s ease",height:"100%",children:(0,s.jsxs)(b.k,{direction:"column",height:"100%",children:[(0,s.jsx)("div",{className:"card-img-container",children:(0,s.jsx)(k.xu,{_groupHover:{transform:"scale(1.05)",transition:"0.3s ease"},transition:"0.3s ease",transform:"scale(1.0)",children:U?(0,s.jsx)(P,{watermark:U,children:(0,s.jsx)(h.yZ,{image:(0,v.aL)(_.nftAddress,_.nft.image),className:"card-img-top ".concat(G),title:_.nft.name,url:"/collection/".concat(_.nftAddress,"/").concat(_.nftId),height:440,width:440})}):(0,s.jsx)(h.yZ,{image:(0,v.aL)(_.nftAddress,_.nft.image),className:"card-img-top ".concat(G),title:_.nft.name,url:"/collection/".concat(_.nftAddress,"/").concat(_.nftId),height:440,width:440,video:null!==(a=null!==(t=_.nft.video)&&void 0!==t?t:_.nft.animationUrl)&&void 0!==a?a:_.nft.animation_url,thumbnail:_.nft.video||_.nft.animationUrl||_.nft.animation_url?D.Z.translate(null!==(c=null!==(o=_.nft.video)&&void 0!==o?o:_.nft.animationUrl)&&void 0!==c?c:_.nft.animation_url).thumbnail():void 0,usePlaceholder:!0})})}),_.nft.rank?(0,s.jsxs)("div",{className:"badge bg-rarity text-wrap mt-1 mx-1",children:["Rank: #",_.nft.rank]}):(0,s.jsx)("div",{children:"\xa0"}),(0,s.jsxs)(b.k,{direction:"column",justify:"space-between",px:2,py:1,children:[_.collection&&(0,s.jsx)(d(),{href:"/collection/".concat(_.collection.slug),children:(0,s.jsx)("h6",{className:"card-title mt-auto fw-normal",style:{fontSize:"12px",color:(0,x.gh)(X.theme).colors.textColor4},children:_.collection.name})}),(0,s.jsx)(d(),{href:"/collection/".concat(_.collection.slug,"/").concat(_.nftId),children:(0,s.jsxs)(C.X,{as:"h6",size:"sm",className:"card-title mt-auto mb-1",children:[_.nft.name,_.amount>1?" (x".concat(_.amount,")"):""]})}),(0,s.jsx)(N.u,{label:"Listing Price",placement:"top-start",children:(0,s.jsxs)(w.U,{w:"full",fontSize:"sm",children:[(0,s.jsx)(k.xu,{w:"16px",children:(0,s.jsx)(O.G,{icon:S.QzV})}),(0,s.jsx)(k.xu,{children:(0,s.jsxs)(b.k,{children:[(0,s.jsx)(A(),{src:"/img/logos/cdc_icon.svg",width:16,height:16,alt:"Cronos Logo"}),(0,s.jsx)(k.xu,{as:"span",ms:1,children:function(n){try{return m.commify((0,p.NM)(n))}catch(e){return m.commify(n)}}(_.price)})]})}),_.expirationDate&&(0,s.jsx)(y.x,{mt:1,flex:1,align:"end",className:"text-muted",children:(0,p.VG)(_.expirationDate)})]})})]}),(0,s.jsx)(I.L,{}),(0,s.jsx)(k.xu,{borderBottomRadius:15,_groupHover:{background:(0,Z.ff)(x.Wb.textColor4,x.$_.textColor4),color:x.Wb.textColor1},px:4,py:1,children:(0,s.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,s.jsx)(k.xu,{_groupHover:{visibility:"visible",color:x.Wb.textColor1},visibility:"hidden",children:Q?(0,s.jsx)(y.x,{fontSize:"sm",fontWeight:"bold",cursor:"pointer",onClick:nn,children:"Remove From Cart"}):(0,s.jsx)(y.x,{fontSize:"sm",fontWeight:"bold",cursor:"pointer",onClick:K,children:"Add to Cart"})}),(0,s.jsx)(L.ZN,{options:((e=[]).push({icon:S.ioV,label:"Make Offer",handleClick:function(){X.address?q(!H):X.needsOnboard?new u.Z().startOnboarding():X.address?X.correctChain||B((0,g.Ns)()):B((0,g.Yn)())}}),Q?e.push({icon:S.Diu,label:"Remove from Cart",handleClick:nn}):e.push({icon:S.Diu,label:"Add to Cart",handleClick:K}),e.push({icon:S.UO1,label:"Refresh Metadata",handleClick:function(){B((0,z.cX)(_.nftAddress,_.nftId,_.listingId))}}),e.push({icon:S.gJF,label:"Open Original",handleClick:function(){_.nft.original_image&&window.open((0,V.o1)(_.nftAddress,(0,v.h9)(_.nft.original_image)),"_blank")}}),e.push({icon:S.nNP,label:"Copy link",handleClick:function(){$(),M.Am.success("Link copied!")}}),e),children:(0,s.jsx)(O.G,{icon:S.cNd,style:{cursor:"pointer"},className:"my-auto"})})]})})]})})}),H&&(0,s.jsx)(f.Z,{isOpen:H,onClose:function(){return q(!1)},nftId:_.nftId,nftAddress:_.nftAddress})]})})},81351:function(n,e,t){var i=t(85893),a=t(67294),s=t(14416),l=t(58533),r=t(36968),o=t(99495),c=t(68449),d=t(36250),m=t(79790),u=t(79564),f=t(60291);e.Z=(0,a.memo)(function(n){var e=n.limitSize,t=void 0===e?0:e,x=n.showLoadMore,h=void 0===x||x,g=n.collectionId,p=void 0===g?null:g,v=n.sellerId,j=void 0===v?"":v;n.cacheName;var k=(0,s.I0)(),b=(0,s.v9)(function(n){return n.marketplace.listings}),C=(0,s.v9)(function(n){return 0===n.marketplace.query.page||n.marketplace.query.page<n.marketplace.totalPages}),N=(0,s.v9)(function(n){return n.marketplace.loading});(0,s.v9)(function(n){return n.marketplace}),(0,a.useEffect)(function(){var n=new d.Y,e=new u.v;if(t&&(e.limit=t),p){n.key="listingId",n.direction="desc",n.label="By Id",e.collection.address=p,k((0,c.S1)(n,e)),k((0,c.VO)());return}if(j){n.key="listingId",n.direction="desc",n.label="By Id",e.seller=j,k((0,c.S1)(n,e)),k((0,c.VO)());return}k((0,c.S1)(n,e)),k((0,c.VO)())},[k]);var w=function(){N||k((0,c.VO)())};return h?(0,i.jsx)(l.Z,{dataLength:b.length,next:w,hasMore:C,style:{overflow:"hidden"},loader:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-12 text-center",children:(0,i.jsx)(r.Z,{animation:"border",role:"status",children:(0,i.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),endMessage:b.length?(0,i.jsx)(i.Fragment,{}):(0,i.jsx)("div",{className:"row mt-4",children:(0,i.jsx)("div",{className:"col-lg-12 text-center",children:(0,i.jsx)("span",{children:"Nothing to see here..."})})}),children:(0,i.jsx)("div",{className:"card-group",children:b&&b.map(function(n){return(0,i.jsx)("div",{className:"d-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 px-2",children:n.nft.nfts?(0,i.jsx)(f.Z,{listing:n,imgClass:"marketplace",watermark:(0,m.o7)(n.nftAddress)?"/img/collections/metapixels/avatar.png":null}):(0,i.jsx)(o.Z,{listing:n,imgClass:"marketplace",watermark:(0,m.o7)(n.nftAddress)?"/img/collections/metapixels/avatar.png":null})},n.listingId)})})}):(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)("div",{className:"card-group",children:b&&b.map(function(n){return(0,i.jsx)("div",{className:"d-item col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-4 px-2",children:n.nft.nfts?(0,i.jsx)(f.Z,{listing:n,imgClass:"marketplace",watermark:(0,m.o7)(n.nftAddress)?"/img/collections/metapixels/avatar.png":null}):(0,i.jsx)(o.Z,{listing:n,imgClass:"marketplace",watermark:(0,m.o7)(n.nftAddress)?"/img/collections/metapixels/avatar.png":null})},n.listingId)})}),h&&C&&(0,i.jsxs)("div",{className:"col-lg-12",children:[(0,i.jsx)("div",{className:"spacer-single"}),(0,i.jsx)("span",{onClick:w,className:"btn-main lead m-auto",children:"Load More"})]})]})})}}]);