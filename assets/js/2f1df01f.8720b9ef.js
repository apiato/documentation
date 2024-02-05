"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5544],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>d});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?a.createElement(d,i(i({ref:t},p),{},{components:r})):a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[f]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45840:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(45072),n=(r(11504),r(95788));const o={sidebar_position:5,title:"Etag",tags:["framework-feature","etag"]},i=void 0,s={unversionedId:"framework-features/etag",id:"version-12.x/framework-features/etag",title:"Etag",description:"The ETag or entity tag is part of HTTP, the protocol for the World Wide Web.",source:"@site/versioned_docs/version-12.x/framework-features/etag.md",sourceDirName:"framework-features",slug:"/framework-features/etag",permalink:"/docs/framework-features/etag",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/framework-features/etag.md",tags:[{label:"framework-feature",permalink:"/docs/tags/framework-feature"},{label:"etag",permalink:"/docs/tags/etag"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Etag",tags:["framework-feature","etag"]},sidebar:"tutorialSidebar",previous:{title:"Profiler",permalink:"/docs/framework-features/profiler"},next:{title:"Rate Limiting",permalink:"/docs/framework-features/rate-limiting"}},c={},l=[],p={toc:l},f="wrapper";function u(e){let{components:t,...r}=e;return(0,n.yg)(f,(0,a.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"ETag")," or ",(0,n.yg)("strong",{parentName:"p"},"entity tag")," is part of HTTP, the protocol for the World Wide Web.\nIt is one of several mechanisms that HTTP provides for Web cache validation,\nwhich allows a client to make conditional requests."),(0,n.yg)("p",null,"You can read more about this feature in the ",(0,n.yg)("a",{parentName:"p",href:"/docs/components/main-components/requests#etag"},"Requests")," documentation."))}u.isMDXComponent=!0}}]);