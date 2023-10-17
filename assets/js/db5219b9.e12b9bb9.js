"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2,title:"Container",tags:["architecture","porto","container"]},i=void 0,c={unversionedId:"architecture-concepts/container",id:"architecture-concepts/container",title:"Container",description:"Containers are at the core of Apiato.",source:"@site/docs/architecture-concepts/container.md",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/container",permalink:"/docs/next/architecture-concepts/container",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/architecture-concepts/container.md",tags:[{label:"architecture",permalink:"/docs/next/tags/architecture"},{label:"porto",permalink:"/docs/next/tags/porto"},{label:"container",permalink:"/docs/next/tags/container"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Container",tags:["architecture","porto","container"]},sidebar:"tutorialSidebar",previous:{title:"Porto",permalink:"/docs/next/architecture-concepts/porto"},next:{title:"Components",permalink:"/docs/next/architecture-concepts/components"}},l={},s=[{value:"Composer Dependencies",id:"composer-dependencies",level:2},{value:"Readme",id:"readme",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#containers"},"Containers")," are at the core of Apiato.\nWithin Containers, you'll find the application-specific business logic,\nencompassing all the features and functionalities of your application.\nThis is where you'll spend almost all of your time,\nwhether it's developing new features or maintaining existing ones."),(0,o.kt)("p",null,"A fundamental advantage of Apiato is its ability to simplify complex problems by breaking them down into smaller,\nmore manageable Containers.\nEach Container is thoughtfully designed to encapsulate a specific piece of functionality,\nwhich, in turn, makes development, testing, and maintenance more accessible."),(0,o.kt)("p",null,"By structuring your code in this modular fashion, Apiato empowers you to create a more modular and reusable codebase.\nThis not only facilitates scaling and long-term maintenance\nbut also minimizes code duplication throughout different segments of your application."),(0,o.kt)("p",null,"In summary, a Container represents a cohesive set of related functionalities.\nIt can be a specific feature or a wrapper around a RESTful API resource."),(0,o.kt)("p",null,"To generate new containers along with all their ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/architecture-concepts/components"},"components"),",\nyou may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato:generate:container")," interactive command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan apiato:generate:container\n")),(0,o.kt)("h2",{id:"composer-dependencies"},"Composer Dependencies"),(0,o.kt)("p",null,"To manage Composer dependencies, follow these guidelines:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All the Composer dependencies for a specific Container should be defined within that Container's ",(0,o.kt)("inlineCode",{parentName:"li"},"composer.json")," file."),(0,o.kt)("li",{parentName:"ul"},"Dependencies related to the Ship layer should be placed in the root of the Ship layer, in a ",(0,o.kt)("inlineCode",{parentName:"li"},"composer.json")," file."),(0,o.kt)("li",{parentName:"ul"},"Framework core dependencies should be defined in the project's root-level ",(0,o.kt)("inlineCode",{parentName:"li"},"composer.json")," file.")),(0,o.kt)("p",null,"In practice, you can choose to place Composer dependencies in any of these ",(0,o.kt)("inlineCode",{parentName:"p"},"composer.json")," files,\nand they will perform the same function.\nThe choice of location depends on what is most relevant and convenient for your project."),(0,o.kt)("h2",{id:"readme"},"Readme"),(0,o.kt)("p",null,"Each Container has the option to include a ",(0,o.kt)("inlineCode",{parentName:"p"},"readme.md")," file at its root, which serves to explain the Container's purpose and how to use it."),(0,o.kt)("p",null,"To generate new readme files, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato:generate:readme")," interactive command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan apiato:generate:readme\n")))}d.isMDXComponent=!0}}]);