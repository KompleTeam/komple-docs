"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[265],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return r?o.createElement(f,l(l({ref:t},p),{},{components:r})):o.createElement(f,l({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3929:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},l="Registering a Module",i={unversionedId:"komple-framework-playground/projects/register-module",id:"komple-framework-playground/projects/register-module",title:"Registering a Module",description:"This section is under https://playground.komple.io/modules/hub/execute",source:"@site/docs/komple-framework-playground/projects/02-register-module.md",sourceDirName:"komple-framework-playground/projects",slug:"/komple-framework-playground/projects/register-module",permalink:"/komple-framework-playground/projects/register-module",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a Project",permalink:"/komple-framework-playground/projects/create-project"},next:{title:"Searching for a Module's Address",permalink:"/komple-framework-playground/projects/search-module-address"}},s={},u=[{value:"Code ID",id:"code-id",level:3},{value:"Module Name",id:"module-name",level:3},{value:"Register Message",id:"register-message",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registering-a-module"},"Registering a Module"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This section is under ",(0,n.kt)("a",{parentName:"p",href:"https://playground.komple.io/modules/hub/execute"},"https://playground.komple.io/modules/hub/execute"))),(0,n.kt)("p",null,"In order to register a module you need to select ",(0,n.kt)("inlineCode",{parentName:"p"},"Register Module")," from the dropdown and have the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code ID of the module"),(0,n.kt)("li",{parentName:"ul"},"Module name"),(0,n.kt)("li",{parentName:"ul"},"Register message")),(0,n.kt)("p",null,"To make it easier to register official modules, we have abstracted these information from the UI."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Register Module Dropdown",src:r(431).Z,width:"468",height:"629"})),(0,n.kt)("p",null,"Just select an item from the dropdown to register the module you want. We will cover the official modules later on so let's focus on the custom module registration."),(0,n.kt)("h3",{id:"code-id"},"Code ID"),(0,n.kt)("p",null,"Code ID is the identifier of the contract on the network. You can get it after uploading the contract on ",(0,n.kt)("a",{parentName:"p",href:"https://playground.komple.io/upload"},"Upload Contract")," page."),(0,n.kt)("h3",{id:"module-name"},"Module Name"),(0,n.kt)("p",null,"Every module has a name that is used to identify the module. For example, the Hub Module has a name of ",(0,n.kt)("inlineCode",{parentName:"p"},"hub"),". "),(0,n.kt)("p",null,"Write an unique name for your module."),(0,n.kt)("h3",{id:"register-message"},"Register Message"),(0,n.kt)("p",null,"Your custom module may or may not need to have a register message. If it does, you can define the json message here."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom Module Information",src:r(5229).Z,width:"505",height:"990"})),(0,n.kt)("p",null,"After you have filled in the information, click on the ",(0,n.kt)("strong",{parentName:"p"},"Execute Hub Module")," button to register your module."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom Module Response",src:r(4012).Z,width:"473",height:"307"})),(0,n.kt)("p",null,"Now you have your module registered in the project! Let's move on to the next step to search for a module's address."))}d.isMDXComponent=!0},5229:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/custom-information-e4f047ee2c09b5ede3b431b3621e5134.png"},431:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/dropdown-cfd853ee7e9ac41d97c14c0764d95740.png"},4012:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/response-978e24663b9d9cff77e4898776d24a2e.png"}}]);