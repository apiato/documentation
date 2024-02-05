"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9450],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>g});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=a,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:3,title:"Customized Laravel Components"},i=void 0,l={unversionedId:"getting-started/customized-laravel-components",id:"version-12.x/getting-started/customized-laravel-components",title:"Customized Laravel Components",description:"Apiato provides a refined organization for Laravel default class locations.",source:"@site/versioned_docs/version-12.x/getting-started/customized-laravel-components.md",sourceDirName:"getting-started",slug:"/getting-started/customized-laravel-components",permalink:"/docs/getting-started/customized-laravel-components",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/getting-started/customized-laravel-components.md",tags:[],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697549732,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Customized Laravel Components"},sidebar:"tutorialSidebar",previous:{title:"Best Practices",permalink:"/docs/getting-started/best-practices"},next:{title:"Architecture Concepts",permalink:"/docs/architecture-concepts/"}},p={},s=[{value:"Kernels",id:"kernels",level:2},{value:"Middlewares",id:"middlewares",level:2},{value:"Handler",id:"handler",level:2},{value:"Providers",id:"providers",level:2},{value:"Routes",id:"routes",level:2},{value:"Web and API",id:"web-and-api",level:3},{value:"Channels",id:"channels",level:3},{value:"Console",id:"console",level:3}],d={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apiato provides a refined organization for Laravel default class locations.\nHere, you can find the default Laravel components and their corresponding locations within Apiato."),(0,a.yg)("h2",{id:"kernels"},"Kernels"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Http Kernel")," is moved from ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Http")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Kernels")," and renamed to ",(0,a.yg)("inlineCode",{parentName:"p"},"HttpKernel"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Console Kernel")," is moved from ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Console")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Kernels")," and renamed to ",(0,a.yg)("inlineCode",{parentName:"p"},"ConsoleKernel"),"."))),(0,a.yg)("h2",{id:"middlewares"},"Middlewares"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Middlewares")," are moved from ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Http/Middleware")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Ship/Middlewares"),".")),(0,a.yg)("h2",{id:"handler"},"Handler"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Exception ",(0,a.yg)("strong",{parentName:"li"},"Handler")," is moved from ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Exceptions")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Ship/Exceptions/Handlers")," and renamed to ",(0,a.yg)("inlineCode",{parentName:"li"},"ExceptionsHandler"),".")),(0,a.yg)("h2",{id:"providers"},"Providers"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For information about the new locations of ",(0,a.yg)("strong",{parentName:"li"},"Providers"),", please refer to ",(0,a.yg)("a",{parentName:"li",href:"/docs/components/optional-components/service-providers#laravel-service-providers"},"this link"),".")),(0,a.yg)("h2",{id:"routes"},"Routes"),(0,a.yg)("h3",{id:"web-and-api"},"Web and API"),(0,a.yg)("p",null,"Apiato introduces a new approach to route organization and does not use the default ",(0,a.yg)("inlineCode",{parentName:"p"},"routes/web.php")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"routes/api.php")," files. Therefore, you won't find these files in Apiato. To learn more, please visit ",(0,a.yg)("a",{parentName:"p",href:"/docs/components/main-components/routes"},"this link"),"."),(0,a.yg)("h3",{id:"channels"},"Channels"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"channels.php")," file has been relocated from ",(0,a.yg)("inlineCode",{parentName:"li"},"routes")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Ship/Broadcasts"),".")),(0,a.yg)("h3",{id:"console"},"Console"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"The ",(0,a.yg)("strong",{parentName:"li"},"console.php")," file has been moved from ",(0,a.yg)("inlineCode",{parentName:"li"},"routes")," to ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Ship/Commands")," and renamed to ",(0,a.yg)("inlineCode",{parentName:"li"},"closures.php"),".")))}m.isMDXComponent=!0}}]);