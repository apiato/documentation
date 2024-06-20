"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8316],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(96540),r(15680));const o={title:"ETag"},i=void 0,l={unversionedId:"core-features/etag",id:"version-10.x/core-features/etag",title:"ETag",description:"ETag Middleware",source:"@site/versioned_docs/version-10.x/core-features/etag.md",sourceDirName:"core-features",slug:"/core-features/etag",permalink:"/docs/10.x/core-features/etag",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/etag.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"Apr 25, 2021",frontMatter:{title:"ETag"},sidebar:"version-10.x/docs",previous:{title:"Validation",permalink:"/docs/10.x/core-features/validation"},next:{title:"Useful Commands",permalink:"/docs/10.x/core-features/useful-commands"}},s={},p=[{value:"ETag Middleware",id:"etag-middleware",level:3},{value:"Enable / Disable ETag",id:"enable--disable-etag",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(d,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"etag-middleware"},"ETag Middleware"),(0,a.yg)("p",null,"Apiato provides an ETag Middleware (",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Middlewares/Http/ProcessETagHeadersMiddleware.php"),") that implements the Shallow technique.\nIt can be used to reduce bandwidth on the client side (especially for Mobile devices)."),(0,a.yg)("h3",{id:"enable--disable-etag"},"Enable / Disable ETag"),(0,a.yg)("admonition",{type:"info"},(0,a.yg)("p",{parentName:"admonition"},"This feature is ",(0,a.yg)("strong",{parentName:"p"},"disabled")," By default.")),(0,a.yg)("p",null,"To enable it go to ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," and set ",(0,a.yg)("inlineCode",{parentName:"p"},"use-etag")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),".\nOf course your client should send the ",(0,a.yg)("inlineCode",{parentName:"p"},"If-None-Match")," HTTP Header ",(0,a.yg)("inlineCode",{parentName:"p"},"(= etag)")," in his request for this feature to work properly."))}u.isMDXComponent=!0}}]);