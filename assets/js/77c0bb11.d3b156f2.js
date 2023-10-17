"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3727],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||n;return t?o.createElement(m,i(i({ref:r},u),{},{components:t})):o.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51353:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=t(87462),a=(t(67294),t(3905));const n={sidebar_position:3,title:"Role Based Access Control",tags:["framework-feature","role-based-access-control"]},i=void 0,s={unversionedId:"framework-features/rbac",id:"version-12.x/framework-features/rbac",title:"Role Based Access Control",description:"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.",source:"@site/versioned_docs/version-12.x/framework-features/rbac.md",sourceDirName:"framework-features",slug:"/framework-features/rbac",permalink:"/docs/framework-features/rbac",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/framework-features/rbac.md",tags:[{label:"framework-feature",permalink:"/docs/tags/framework-feature"},{label:"role-based-access-control",permalink:"/docs/tags/role-based-access-control"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Role Based Access Control",tags:["framework-feature","role-based-access-control"]},sidebar:"tutorialSidebar",previous:{title:"API Versioning",permalink:"/docs/framework-features/api-versioning"},next:{title:"Profiler",permalink:"/docs/framework-features/profiler"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.\nBehind the scenes,\nApiato uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission"},"Laravel Permission")," package."),(0,a.kt)("p",null,"You can read more about this feature in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/security/authorization"},"Authorization")," documentation."))}f.isMDXComponent=!0}}]);