"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[499],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?i.createElement(k,a(a({ref:t},u),{},{components:n})):i.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={},a="Update Listing Price",l={unversionedId:"komple-playground/marketplaces/update-listing-price",id:"komple-playground/marketplaces/update-listing-price",title:"Update Listing Price",description:"This section is under https://playground.komple.io/modules/marketplace/execute",source:"@site/docs/komple-playground/marketplaces/03-update-listing-price.md",sourceDirName:"komple-playground/marketplaces",slug:"/komple-playground/marketplaces/update-listing-price",permalink:"/komple-playground/marketplaces/update-listing-price",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fixed Price Listing",permalink:"/komple-playground/marketplaces/list-fixed-price"},next:{title:"Buying Tokens",permalink:"/komple-playground/marketplaces/buy-tokens"}},p={},c=[{value:"Listing Type",id:"listing-type",level:3},{value:"Collection ID",id:"collection-id",level:3},{value:"Token ID",id:"token-id",level:3},{value:"New Listing Price",id:"new-listing-price",level:3}],u={toc:c};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update-listing-price"},"Update Listing Price"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section is under ",(0,r.kt)("a",{parentName:"p",href:"https://playground.komple.io/modules/marketplace/execute"},"https://playground.komple.io/modules/marketplace/execute"))),(0,r.kt)("p",null,"In this section, you will learn how to update the price of a listing in your marketplace."),(0,r.kt)("p",null,"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Update Listing Price")," from the dropdown and fill the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Listing Type"),(0,r.kt)("li",{parentName:"ul"},"Collection ID"),(0,r.kt)("li",{parentName:"ul"},"Token ID"),(0,r.kt)("li",{parentName:"ul"},"New Listing Price")),(0,r.kt)("h3",{id:"listing-type"},"Listing Type"),(0,r.kt)("p",null,"This is the type of the listing that you want to update the price of. It can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"Fixed Price")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Auction"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"At the moment ",(0,r.kt)("inlineCode",{parentName:"p"},"Auction")," listing type is not supported so you can only update the price of ",(0,r.kt)("inlineCode",{parentName:"p"},"Fixed Price")," listings.")),(0,r.kt)("h3",{id:"collection-id"},"Collection ID"),(0,r.kt)("p",null,"This is the collection identifier of the listing that you want to update the price of."),(0,r.kt)("h3",{id:"token-id"},"Token ID"),(0,r.kt)("p",null,"This is the token identifier of the listing that you want to update the price of."),(0,r.kt)("h3",{id:"new-listing-price"},"New Listing Price"),(0,r.kt)("p",null,"This is the new price that you want to update the listing with."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Update Listing Price",src:n(9596).Z,width:"431",height:"590"})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Execute Marketplace Module")," button to update the listing price. This new price will be automatically reflected in the marketplace."))}s.isMDXComponent=!0},9596:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/update-listing-price-fcd276eff0dd53b60194a41a1d7427b7.png"}}]);