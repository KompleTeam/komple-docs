"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[213],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,l=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=s(a),k=d,c=p["".concat(i,".").concat(k)]||p[k]||m[k]||l;return a?n.createElement(c,o(o({ref:t},u),{},{components:a})):n.createElement(c,o({ref:t},u))}));function k(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var l=a.length,o=new Array(l);o[0]=p;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:d,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9428:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(7462),d=(a(7294),a(3905));const l={},o="Metadata Module",r={unversionedId:"komple-framework/modules/Metadata-Module",id:"komple-framework/modules/Metadata-Module",title:"Metadata Module",description:"Metadata Module is used to store NFT metadata on-chain.",source:"@site/docs/komple-framework/modules/05-Metadata-Module.md",sourceDirName:"komple-framework/modules",slug:"/komple-framework/modules/Metadata-Module",permalink:"/komple-framework/modules/Metadata-Module",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Merge Module",permalink:"/komple-framework/modules/Merge-Module"},next:{title:"Mint Module",permalink:"/komple-framework/modules/Mint-Module"}},i={},s=[{value:"Related Modules",id:"related-modules",level:4},{value:"Metadata Types",id:"metadata-types",level:2},{value:"Standard Metadata",id:"standard-metadata",level:3},{value:"Shared Metadata",id:"shared-metadata",level:3},{value:"Dynamic Metadata",id:"dynamic-metadata",level:3},{value:"Adding Metadata",id:"adding-metadata",level:2},{value:"Linking Metadata",id:"linking-metadata",level:2},{value:"Contract State",id:"contract-state",level:2},{value:"Linked Metadata",id:"linked-metadata",level:3},{value:"Dynamic Linked Metadata",id:"dynamic-linked-metadata",level:3}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,d.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"metadata-module"},"Metadata Module"),(0,d.kt)("p",null,"Metadata Module is used to store NFT metadata on-chain. "),(0,d.kt)("p",null,"Main use case of an on-chain metadata that it allows you to store metadata in a decentralized way and it can be updated to work with custom logic that needs mutable information."),(0,d.kt)("h4",{id:"related-modules"},"Related Modules"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",{parentName:"li",href:"/komple-framework/modules/Token-Module"},"Token Module")," is the parent module of Metadata Module. ")),(0,d.kt)("h2",{id:"metadata-types"},"Metadata Types"),(0,d.kt)("p",null,"There are several types of metadata for different use cases."),(0,d.kt)("h3",{id:"standard-metadata"},"Standard Metadata"),(0,d.kt)("p",null,"This type of metadata is the most basic one. Every token and their metadata is unique and matched to the same token ID."),(0,d.kt)("p",null,"Some examples would be:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"A single playing card NFT in a deck collection"),(0,d.kt)("li",{parentName:"ul"},"A single color NFT in colors collection")),(0,d.kt)("h3",{id:"shared-metadata"},"Shared Metadata"),(0,d.kt)("p",null,"This type of metadata is mainly used for linking a single metadata to multiple tokens. Every token is still unique but the metadata is shared between them."),(0,d.kt)("p",null,"Some examples would be:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"A knife NFT that is minted by 100 users"),(0,d.kt)("li",{parentName:"ul"},"A spell NFT that is minted by 50 users")),(0,d.kt)("p",null,"In these cases, the metadata will be same for all the tokens but the token IDs will be different."),(0,d.kt)("h3",{id:"dynamic-metadata"},"Dynamic Metadata"),(0,d.kt)("p",null,"This type of metadata is used for metadata updates based on some custom logic. Both tokens and their metadatas are unique."),(0,d.kt)("p",null,"Some examples would be:"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"A sword NFT that is minted but upgraded over time"),(0,d.kt)("li",{parentName:"ul"},"A hero NFT that engages in battles and loses health")),(0,d.kt)("p",null,"These metadatas come from a single source just like shared metadata but duplicated on minting for each token. If updates are needed, the metadata is updated on-chain and the changes are reflected on the token."),(0,d.kt)("h2",{id:"adding-metadata"},"Adding Metadata"),(0,d.kt)("p",null,"Metadata about the tokens must be created before minting. Based on the metadata type, addition is different."),(0,d.kt)("p",null,"On ",(0,d.kt)("strong",{parentName:"p"},"Standard"),", metadata is ",(0,d.kt)("strong",{parentName:"p"},"automatically")," added to Metadata Module on minting. It is created from the IPFS url that is configured in the Token Module."),(0,d.kt)("p",null,"On ",(0,d.kt)("strong",{parentName:"p"},"Shared")," and ",(0,d.kt)("strong",{parentName:"p"},"Dynamic"),", metadata ",(0,d.kt)("strong",{parentName:"p"},"must")," be created beforehand for each token."),(0,d.kt)("h2",{id:"linking-metadata"},"Linking Metadata"),(0,d.kt)("p",null,"Because metadata lives on Metadata Module, it has to be linked to a token. Based on the metadata type, linking is different."),(0,d.kt)("p",null,"On ",(0,d.kt)("strong",{parentName:"p"},"Standard"),", metadata is ",(0,d.kt)("strong",{parentName:"p"},"automatically")," linked with the token id."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"If token ID is 10 on minting, metadata ID will be 10"),(0,d.kt)("li",{parentName:"ul"},"If token ID is 100 on minting, metadata ID will be 100")),(0,d.kt)("p",null,"On ",(0,d.kt)("strong",{parentName:"p"},"Shared")," and ",(0,d.kt)("strong",{parentName:"p"},"Dynamic"),", additional metadata ID ",(0,d.kt)("strong",{parentName:"p"},"must")," be provided on minting."),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"If token ID is 10 on minting, metadata ID can be 5"),(0,d.kt)("li",{parentName:"ul"},"If token ID is 100 on minting, metadata ID can be 50")),(0,d.kt)("h2",{id:"contract-state"},"Contract State"),(0,d.kt)("p",null,"Three different state variables are used for storing metadata."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-rust"},"// All the raw metadatas that are available on the contract\npub const METADATA: Map<u32, Metadata> = Map::new(METADATA_NAMESPACE);\n\n// Metadatas that are linked to a token\n// This is used for standard and shared metadata\npub const LINKED_METADATA: Map<u32, u32> = Map::new(LINKED_METADATA_NAMESPACE);\n\n// Metadatas that are linked to a token\n// This is used for dynamic metadata\npub const DYNAMIC_LINKED_METADATA: Map<u32, Metadata> = Map::new(DYNAMIC_LINKED_METADATA_NAMESPACE);\n")),(0,d.kt)("p",null,"When a new metadata is created, it is added to the ",(0,d.kt)("inlineCode",{parentName:"p"},"METADATA")," map."),(0,d.kt)("p",null,"On linking a metadata to a token, based on the metadata type it is added to either ",(0,d.kt)("inlineCode",{parentName:"p"},"LINKED_METADATA")," or ",(0,d.kt)("inlineCode",{parentName:"p"},"DYNAMIC_LINKED_METADATA"),"."),(0,d.kt)("h3",{id:"linked-metadata"},"Linked Metadata"),(0,d.kt)("p",null,"This state map links the token ID to the metadata ID. When a metadata is updated, it will be reflected in each token that is linked to it as ",(0,d.kt)("inlineCode",{parentName:"p"},"METADATA")," state map is used for updates."),(0,d.kt)("h3",{id:"dynamic-linked-metadata"},"Dynamic Linked Metadata"),(0,d.kt)("p",null,"This state map links the token ID to the metadata itself. When a metadata is updated, it will be reflected in only that token as this state map is used for updates."))}m.isMDXComponent=!0}}]);