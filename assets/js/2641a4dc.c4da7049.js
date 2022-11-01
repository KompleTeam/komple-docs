"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,k=c["".concat(s,".").concat(d)]||c[d]||p[d]||l;return r?n.createElement(k,a(a({ref:t},m),{},{components:r})):n.createElement(k,a({ref:t},m))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const l={},a="Merge Module",i={unversionedId:"komple-framework/modules/Merge-Module",id:"komple-framework/modules/Merge-Module",title:"Merge Module",description:"Merge module is used for merging multiple tokens and minting new ones - burning the old tokens in the process.",source:"@site/docs/komple-framework/modules/04-Merge-Module.md",sourceDirName:"komple-framework/modules",slug:"/komple-framework/modules/Merge-Module",permalink:"/komple-framework/modules/Merge-Module",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Marketplace Module",permalink:"/komple-framework/modules/Marketplace-Module"},next:{title:"Metadata Module",permalink:"/komple-framework/modules/Metadata-Module"}},s={},u=[{value:"Merge Types",id:"merge-types",level:2},{value:"Merging Tokens",id:"merging-tokens",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Examples",id:"examples",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"merge-module"},"Merge Module"),(0,o.kt)("p",null,"Merge module is used for merging multiple tokens and minting new ones - burning the old tokens in the process. "),(0,o.kt)("h2",{id:"merge-types"},"Merge Types"),(0,o.kt)("p",null,"There are three types of merging possible within the module:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normal merge"),(0,o.kt)("li",{parentName:"ul"},"Admin merge"),(0,o.kt)("li",{parentName:"ul"},"Permission merge")),(0,o.kt)("p",null,"There are no differences on the actual merge logic between these types. Only difference is the authorization and permissioning system that is used."),(0,o.kt)("h2",{id:"merging-tokens"},"Merging Tokens"),(0,o.kt)("p",null,"There are a couple of prerequisites before merging tokens. These are the same for all types of merges:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The collection must be created within the same project. Cross-project merges are not supported yet."),(0,o.kt)("li",{parentName:"ol"},"The collection must not be blacklisted."),(0,o.kt)("li",{parentName:"ol"},"The collection must not have mint and burn locked."),(0,o.kt)("li",{parentName:"ol"},"The tokens to burn must not have burn locked."),(0,o.kt)("li",{parentName:"ol"},"The token to mint must not have mint locked."),(0,o.kt)("li",{parentName:"ol"},"The tokens to burn must not be an empty list."),(0,o.kt)("li",{parentName:"ol"},"Users must own the tokens that they want to burn."),(0,o.kt)("li",{parentName:"ol"},"Users must authorize the Merge Module to burn the tokens."),(0,o.kt)("li",{parentName:"ol"},"Merge Module must have operator access on Mint Module to mint the new token.")),(0,o.kt)("p",null,"After all of the prerequisites are met, the tokens can be merged."),(0,o.kt)("h2",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Just like in ",(0,o.kt)("a",{parentName:"p",href:"/komple-framework/modules/Mint-Module"},"Mint Module")," and ",(0,o.kt)("a",{parentName:"p",href:"/komple-framework/modules/Marketplace-Module"},"Marketplace Module"),", Merge Module can also access permissioning system."),(0,o.kt)("p",null,"Normal merge operation can be locked from usage and it can be routed through the permissioned merge endpoint. Permissions must be set in ",(0,o.kt)("a",{parentName:"p",href:"/komple-framework/modules/Permission-Module"},"Permission Module")," prior to usage for this endpoint to work."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Merge types are defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MergeBurnMsg {\n    // Collection ID of the collection that the tokens are in\n    pub collection_id: u32,\n    // Token ID of the token to burn\n    pub token_id: u32\n}\n\npub struct MergeMsg {\n    // Address of the owner of the new token\n    pub recipient: String,\n    // Collection ID of the collection that the new token will be minted to\n    pub mint_id: u32,\n    // Optional field for metadata linking\n    pub metadata_id: Option<u32>,\n    // List of tokens to burn\n    pub burn_ids: Vec<MergeBurnMsg>\n}\n")),(0,o.kt)("p",null,"Execute messages can be defined as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum ExecuteMsg::Merge { msg: MergeMsg }\n")),(0,o.kt)("p",null,"Permission merge is the same as normal merge but with additional permission parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum ExecuteMsg::PermissionMerge { permission_msg: Binary, merge_msg: MergeMsg }\n")))}p.isMDXComponent=!0}}]);