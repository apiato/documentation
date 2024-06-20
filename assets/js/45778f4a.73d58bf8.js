"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5451],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>f});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(58168),r=(n(96540),n(15680));const a={sidebar_position:3,title:"Components",tags:["architecture","porto","component"]},i=void 0,c={unversionedId:"architecture-concepts/components",id:"version-12.x/architecture-concepts/components",title:"Components",description:"In the Container layer of Porto,",source:"@site/versioned_docs/version-12.x/architecture-concepts/components.md",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/components",permalink:"/docs/architecture-concepts/components",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/architecture-concepts/components.md",tags:[{label:"architecture",permalink:"/docs/tags/architecture"},{label:"porto",permalink:"/docs/tags/porto"},{label:"component",permalink:"/docs/tags/component"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Components",tags:["architecture","porto","component"]},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/docs/architecture-concepts/container"},next:{title:"Request Lifecycle",permalink:"/docs/architecture-concepts/request-lifecycle"}},p={},s=[{value:"Main Components",id:"main-components",level:2},{value:"Optional Components",id:"optional-components",level:2}],l={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In the Container layer of ",(0,r.yg)("a",{parentName:"p",href:"/docs/architecture-concepts/porto#container"},"Porto"),",\nyou will find a comprehensive range of ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#components"},"predefined Components"),",\neach with its specific responsibility.\nIt is imperative to organize all your code within these Components to ensure proper structure and organization."),(0,r.yg)("p",null,"Apiato offers an ",(0,r.yg)("a",{parentName:"p",href:"/docs/components/"},"extensive list")," of these Components,\naccompanied by detailed guidelines for their utilization.\nAdhering to these guidelines is crucial to ensure a streamlined development process."),(0,r.yg)("p",null,"Components play a pivotal role in maintaining consistency throughout your codebase and enhancing its maintainability.\nThey provide a clear and structured approach, making it easier to locate and manage individual code snippets."),(0,r.yg)("p",null,"Leveraging these Components enables you to construct a modular and reusable codebase,\nsimplifying future maintenance and facilitating modifications when needed."),(0,r.yg)("p",null,"Components in Porto are categorized into two types: Main Components and Optional Components."),(0,r.yg)("h2",{id:"main-components"},"Main Components"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/components/main-components/"},"Main Components")," are essential for the Container's functionality and must be used to achieve its core purpose."),(0,r.yg)("h2",{id:"optional-components"},"Optional Components"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/components/optional-components/"},"Optional Components")," offer additional functionality\nthat can be incorporated into the Container.\nTheir usage is discretionary, depending on specific requirements."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"To learn more about how all this fits together, read the ",(0,r.yg)("a",{parentName:"p",href:"/docs/architecture-concepts/request-lifecycle"},"Request Lifecycle")," page.")))}m.isMDXComponent=!0}}]);