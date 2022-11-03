"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=u(r),c=o,k=d["".concat(s,".").concat(c)]||d[c]||p[c]||l;return r?n.createElement(k,i(i({ref:t},m),{},{components:r})):n.createElement(k,i({ref:t},m))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const l={},i="Merge Module",a={unversionedId:"komple-framework/modules/Merge-Module",id:"komple-framework/modules/Merge-Module",title:"Merge Module",description:"Merge module is used for merging multiple tokens and minting new ones - burning the old tokens in the process.",source:"@site/docs/komple-framework/modules/04-Merge-Module.md",sourceDirName:"komple-framework/modules",slug:"/komple-framework/modules/Merge-Module",permalink:"/komple-framework/modules/Merge-Module",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Marketplace Module",permalink:"/komple-framework/modules/Marketplace-Module"},next:{title:"Metadata Module",permalink:"/komple-framework/modules/Metadata-Module"}},s={},u=[{value:"Related Modules",id:"related-modules",level:4},{value:"Merge Types",id:"merge-types",level:2},{value:"Merging Tokens",id:"merging-tokens",level:2},{value:"Collections",id:"collections",level:3},{value:"Tokens",id:"tokens",level:3},{value:"Authorization",id:"authorization",level:3},{value:"Permissions",id:"permissions",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"merge-module"},"Merge Module"),(0,o.kt)("p",null,"Merge module is used for merging multiple tokens and minting new ones - burning the old tokens in the process. "),(0,o.kt)("h4",{id:"related-modules"},"Related Modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/komple-framework/modules/Mint-Module"},"Mint Module")," is utilized for minting new tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/komple-framework/modules/Token-Module"},"Token Module")," is utilized for burning tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/komple-framework/modules/Permission-Module"},"Permission Module")," is utilized for merging with permissions.")),(0,o.kt)("h2",{id:"merge-types"},"Merge Types"),(0,o.kt)("p",null,"There are three types of merging possible within the module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normal merge"),(0,o.kt)("li",{parentName:"ul"},"Admin merge"),(0,o.kt)("li",{parentName:"ul"},"Permission merge")),(0,o.kt)("p",null,"There are no differences on the actual merge logic between these types. Only difference is the authorization and permissioning system that is used."),(0,o.kt)("h2",{id:"merging-tokens"},"Merging Tokens"),(0,o.kt)("p",null,"There are a couple of prerequisites before merging tokens. These are the same for all types of merges:"),(0,o.kt)("h3",{id:"collections"},"Collections"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Collections must be in the same project as the Merge Module"),(0,o.kt)("li",{parentName:"ul"},"Collections must not be blacklisted"),(0,o.kt)("li",{parentName:"ul"},"Collections must not have mint and burn locked")),(0,o.kt)("h3",{id:"tokens"},"Tokens"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tokens to burn must not have burn locked"),(0,o.kt)("li",{parentName:"ul"},"Token to mint must not have mint locked"),(0,o.kt)("li",{parentName:"ul"},"Tokens to burn must not be an empty list")),(0,o.kt)("h3",{id:"authorization"},"Authorization"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users must own the tokens that they want to burn"),(0,o.kt)("li",{parentName:"ul"},"Users must authorize the Merge Module to burn the tokens"),(0,o.kt)("li",{parentName:"ul"},"Merge Module must have operator access on Mint Module to mint the new token")),(0,o.kt)("p",null,"After all of the prerequisites are met, the tokens can be merged."),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Just like in Mint Module and Marketplace Module, Merge Module can also access permissioning system."),(0,o.kt)("p",null,"Normal merge operation can be locked from usage and it can be routed through the permissioned merge endpoint. Permissions must be set in Permission Module prior to usage for this endpoint to work."))}p.isMDXComponent=!0}}]);