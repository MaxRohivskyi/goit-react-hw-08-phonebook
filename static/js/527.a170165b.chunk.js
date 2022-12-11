"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[527],{5527:function(n,o,r){r.r(o),r.d(o,{default:function(){return un}});var e,t,a,i,c,l,s,p,u,d,f,h=r(6009),m=r(9434),x=r(9273),g=r(168),v=r(6088),Z=r(9952),b=r(9541),k=v.Z.div(e||(e=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),j=(0,v.Z)(Z.Z)(t||(t=(0,g.Z)(["\n  margin-right: 10px;\n"]))),y=(0,v.Z)(b.Z)(a||(a=(0,g.Z)(["\n  display: inline-block;\n  color: ",";\n  font-weight: ",";\n\n  background-color: ",";\n  &:hover,\n  :focus {\n    color: ",";\n\n    background-color: ",";\n    border: "," ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontWeights.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.secondary})),C=v.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 20px 0 0;\n"]))),B=v.Z.span(c||(c=(0,g.Z)([""]))),z=v.Z.span(l||(l=(0,g.Z)([""]))),A=r(184),S=function(){var n=(0,m.I0)(),o=(0,h.a)().user;return(0,A.jsxs)(k,{children:[(0,A.jsx)(j,{}),(0,A.jsxs)(C,{children:[(0,A.jsx)(B,{children:"Welcome, ".concat(o.name.toUpperCase())}),(0,A.jsx)(z,{children:"Your email: ".concat(o.email)})]}),(0,A.jsx)(y,{variant:"contained",type:"button",onClick:function(){n((0,x.ni)())},children:"Log Out"})]})},w=r(1087),O=v.Z.nav(s||(s=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n"]))),I=(0,v.Z)(w.OL)(p||(p=(0,g.Z)(["\n  padding: 5px 20px;\n  margin: 0 20px;\n\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  border: "," ",";\n  border-radius: ",";\n  box-shadow: 1px 1px 3px ",";\n  text-decoration: none;\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &.active {\n    color: ",";\n    background-color: ",";\n    border: "," ",";\n  }\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.secondary})),D=function(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(I,{to:"register",children:"Register"}),(0,A.jsx)(I,{to:"login",children:"Login"})]})},M=function(){var n=(0,h.a)().isLoggedIn;return(0,A.jsxs)(O,{children:[(0,A.jsx)(I,{to:"/",children:"Home"}),n&&(0,A.jsx)(I,{to:"/contacts",children:"Contacts"})]})},_=r(4586),H=v.Z.div(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),L=(0,v.Z)(_.Z)(d||(d=(0,g.Z)(["\n  color: ",";\n  margin: 0 10px 0 0;\n"])),(function(n){return n.theme.colors.secondary})),R=v.Z.p(f||(f=(0,g.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.fontSizes.s}),(function(n){return n.theme.fontWeights.bold})),T=function(){return(0,A.jsxs)(H,{children:[(0,A.jsx)(L,{}),(0,A.jsx)(R,{children:"PHONEBOOK"})]})},F=r(7020),N=r(3366),W=r(7462),P=r(2791),V=r(8182),q=r(4419),E=r(277),K=r(5513),U=r(9853),Y=r(286),$=r(5878),G=r(1217);function J(n){return(0,G.Z)("MuiAppBar",n)}(0,$.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);var Q,X,nn,on=["className","color","enableColorOnDark","position"],rn=function(n,o){return"".concat(null==n?void 0:n.replace(")",""),", ").concat(o,")")},en=(0,E.ZP)(Y.Z,{name:"MuiAppBar",slot:"Root",overridesResolver:function(n,o){var r=n.ownerState;return[o.root,o["position".concat((0,U.Z)(r.position))],o["color".concat((0,U.Z)(r.color))]]}})((function(n){var o=n.theme,r=n.ownerState,e="light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[900];return(0,W.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(o.vars||o).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!o.vars&&(0,W.Z)({},"default"===r.color&&{backgroundColor:e,color:o.palette.getContrastText(e)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:o.palette[r.color].main,color:o.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===o.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,W.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===o.palette.mode&&{backgroundImage:"none"})),o.vars&&(0,W.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette.AppBar.defaultBg:rn(o.vars.palette.AppBar.darkBg,o.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?o.vars.palette.text.primary:rn(o.vars.palette.AppBar.darkColor,o.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?o.vars.palette[r.color].main:rn(o.vars.palette.AppBar.darkBg,o.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?o.vars.palette[r.color].contrastText:rn(o.vars.palette.AppBar.darkColor,o.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))})),tn=P.forwardRef((function(n,o){var r=(0,K.Z)({props:n,name:"MuiAppBar"}),e=r.className,t=r.color,a=void 0===t?"primary":t,i=r.enableColorOnDark,c=void 0!==i&&i,l=r.position,s=void 0===l?"fixed":l,p=(0,N.Z)(r,on),u=(0,W.Z)({},r,{color:a,position:s,enableColorOnDark:c}),d=function(n){var o=n.color,r=n.position,e=n.classes,t={root:["root","color".concat((0,U.Z)(o)),"position".concat((0,U.Z)(r))]};return(0,q.Z)(t,J,e)}(u);return(0,A.jsx)(en,(0,W.Z)({square:!0,component:"header",ownerState:u,elevation:4,className:(0,V.Z)(d.root,e,"fixed"===s&&"mui-fixed"),ref:o},p))})),an=(0,v.Z)(tn)(Q||(Q=(0,g.Z)(["\n  background-color: ",";\n"])),(function(n){return n.theme.colors.accent})),cn=(0,v.Z)(F.Z)(X||(X=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 0;\n"]))),ln=(0,v.Z)(F.Z)(nn||(nn=(0,g.Z)(["\n  display: flex;\n  justify-content: flex-end;\n"]))),sn=function(){var n=(0,h.a)().isLoggedIn;return(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(an,{position:"static",children:(0,A.jsxs)(cn,{children:[(0,A.jsx)(T,{}),(0,A.jsx)(M,{}),(0,A.jsx)(ln,{children:n?(0,A.jsx)(S,{}):(0,A.jsx)(D,{})})]})})})},pn=r(7689);function un(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(sn,{}),(0,A.jsx)(P.Suspense,{children:(0,A.jsx)(pn.j3,{})})]})}},9952:function(n,o,r){var e=r(4836);o.Z=void 0;var t=e(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle");o.Z=i},4586:function(n,o,r){var e=r(4836);o.Z=void 0;var t=e(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"}),"Contacts");o.Z=i}}]);
//# sourceMappingURL=527.a170165b.chunk.js.map