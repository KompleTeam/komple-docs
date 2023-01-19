"use strict";(self.webpackChunkkomple_documentation=self.webpackChunkkomple_documentation||[]).push([[530],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(o),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return o?r.createElement(g,l(l({ref:t},p),{},{components:o})):r.createElement(g,l({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=o[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8473:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={},l="Registering a Module",i={unversionedId:"komple-playground/projects/register-module",id:"komple-playground/projects/register-module",title:"Registering a Module",description:"This section is under https://playground.komple.io/modules/hub/execute",source:"@site/docs/komple-playground/projects/02-register-module.md",sourceDirName:"komple-playground/projects",slug:"/komple-playground/projects/register-module",permalink:"/komple-playground/projects/register-module",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating a Project",permalink:"/komple-playground/projects/create-project"},next:{title:"Searching for a Module's Address",permalink:"/komple-playground/projects/search-module-address"}},s={},u=[{value:"Code ID",id:"code-id",level:3},{value:"Module Name",id:"module-name",level:3},{value:"Register Message",id:"register-message",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"registering-a-module"},"Registering a Module"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This section is under ",(0,n.kt)("a",{parentName:"p",href:"https://playground.komple.io/modules/hub/execute"},"https://playground.komple.io/modules/hub/execute"))),(0,n.kt)("p",null,"In order to register a module you need to select ",(0,n.kt)("inlineCode",{parentName:"p"},"Register Module")," from the dropdown and have the following information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Code ID of the module"),(0,n.kt)("li",{parentName:"ul"},"Module name"),(0,n.kt)("li",{parentName:"ul"},"Register message")),(0,n.kt)("p",null,"To make it easier to register official modules, we have abstracted these information from the UI."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Register Module Dropdown",src:o(431).Z,width:"468",height:"629"})),(0,n.kt)("p",null,"Just select an item from the dropdown to register the module you want. We will cover the official modules later on so let's focus on the custom module registration."),(0,n.kt)("h3",{id:"code-id"},"Code ID"),(0,n.kt)("p",null,"Code ID is the identifier of the contract on the network. You can get it after uploading the contract on ",(0,n.kt)("a",{parentName:"p",href:"https://playground.komple.io/upload"},"Upload Contract")," page."),(0,n.kt)("h3",{id:"module-name"},"Module Name"),(0,n.kt)("p",null,"Every module has a name that is used to identify the module. For example, the Hub Module has a name of ",(0,n.kt)("inlineCode",{parentName:"p"},"hub"),". "),(0,n.kt)("p",null,"Write an unique name for your module."),(0,n.kt)("h3",{id:"register-message"},"Register Message"),(0,n.kt)("p",null,"Your custom module may or may not need to have a register message. If it does, you can define the json message here."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom Module Information",src:o(5229).Z,width:"505",height:"990"})),(0,n.kt)("p",null,"After you have filled in the information, click on the ",(0,n.kt)("strong",{parentName:"p"},"Execute Hub Module")," button to register your module."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Custom Module Response",src:o(4012).Z,width:"473",height:"307"})),(0,n.kt)("p",null,"Now you have your module registered in the project! Let's move on to the next step to search for a module's address."))}d.isMDXComponent=!0},5229:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/custom-information-e4f047ee2c09b5ede3b431b3621e5134.png"},431:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/dropdown-cfd853ee7e9ac41d97c14c0764d95740.png"},4012:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/response-978e24663b9d9cff77e4898776d24a2e.png"}}]);