"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[444],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(o),c=n,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||l;return o?r.createElement(f,a(a({ref:t},d),{},{components:o})):r.createElement(f,a({ref:t},d))}));function c(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,a=new Array(l);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<l;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},6163:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const l={},a="Hub Module",i={unversionedId:"komple-framework/modules/Hub-Module",id:"komple-framework/modules/Hub-Module",title:"Hub Module",description:"Hub Module is the heart of the Komple Framework. It's main purpose is to act as a registry for different modules and their addresses.",source:"@site/docs/komple-framework/modules/02-Hub-Module.md",sourceDirName:"komple-framework/modules",slug:"/komple-framework/modules/Hub-Module",permalink:"/komple-docs/komple-framework/modules/Hub-Module",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Fee Module",permalink:"/komple-docs/komple-framework/modules/Fee-Module"},next:{title:"Marketplace Module",permalink:"/komple-docs/komple-framework/modules/Marketplace-Module"}},s={},u=[{value:"Module Registry",id:"module-registry",level:2},{value:"Removing Modules",id:"removing-modules",level:2},{value:"Hub Communication Framework",id:"hub-communication-framework",level:2}],d={toc:u};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hub-module"},"Hub Module"),(0,n.kt)("p",null,"Hub Module is the heart of the Komple Framework. It's main purpose is to act as a registry for different modules and their addresses."),(0,n.kt)("p",null,"Every projects starts out with a Hub Module and has only one."),(0,n.kt)("h2",{id:"module-registry"},"Module Registry"),(0,n.kt)("p",null,"Module registry is a way of adding modules to be used by the framework."),(0,n.kt)("p",null,"After registration, the new module's address is saved to Hub Module's storage. This address is later used in internal messages between contracts within the framework."),(0,n.kt)("p",null,"While the framework provides the tools to develop projects, in some cases those modules might not be enough for making applications work the way they are imagined. Sometimes there needs to be some custom logic added to the framework."),(0,n.kt)("p",null,"Just like the official modules, additional custom modules can be registered too. See ",(0,n.kt)("a",{parentName:"p",href:"/komple-docs/komple-framework/modules/Custom-Modules"},"Custom Modules")," to learn more about developing custom modules."),(0,n.kt)("h2",{id:"removing-modules"},"Removing Modules"),(0,n.kt)("p",null,"When a module needs to be removed, this is a one way operation. "),(0,n.kt)("p",null,"After a module's address is removed it cannot be added back to the registry. These module addresses come from registration only."),(0,n.kt)("p",null,"If the module is needed again, it needs to be registered again."),(0,n.kt)("h2",{id:"hub-communication-framework"},"Hub Communication Framework"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is not a live feature. Still in thought progress.")),(0,n.kt)("p",null,"As described above, Hub module is the center piece of Komple Framework. "),(0,n.kt)("p",null,"With that said, it will be possible to open communication between two different hubs for implementing complex application logic. Minting, merging, swapping and other kinds of operations will be invoked by an outside Hub. "),(0,n.kt)("p",null,"This will allow the projects to collaborate on a decentralized level."))}m.isMDXComponent=!0}}]);