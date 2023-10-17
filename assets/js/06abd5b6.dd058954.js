"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3887],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(86302);const o={sidebar_position:1,title:"Registration"},s=void 0,l={unversionedId:"security/registration",id:"security/registration",title:"Registration",description:"POST {variables.defaults.baseUrl.api}/register",source:"@site/docs/security/registration.mdx",sourceDirName:"security",slug:"/security/registration",permalink:"/docs/next/security/registration",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/security/registration.mdx",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Registration"},sidebar:"tutorialSidebar",previous:{title:"Values",permalink:"/docs/next/components/optional-components/values"},next:{title:"Authentication",permalink:"/docs/next/security/authentication"}},c={},u=[{value:"Register user by email and password",id:"register-users-by-email-and-password",level:2},{value:"Registration request:",id:"registration-request",level:4},{value:"Registration response:",id:"registration-response",level:4},{value:"Register user by Social Account",id:"register-users-by-social-account",level:2}],p={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",null,(0,a.kt)("code",null,"POST ",i.c.F.h,"/register")),(0,a.kt)("div",null,(0,a.kt)("br",null)),(0,a.kt)("p",null,"At minimum, you need to pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"password")," string values to the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," endpoint. The ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," endpoint will return a ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," response containing the new user record if the registration was successful."),(0,a.kt)("h2",{id:"register-users-by-email-and-password"},"Register user by email and password"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to add ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept: application/json")," header to your request.")),(0,a.kt)("h4",{id:"registration-request"},"Registration request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "email": "john@doe.com",\n  "password": "password",\n}\n')),(0,a.kt)("h4",{id:"registration-response"},"Registration response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": null,\n    "email": "john@doe.com",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null\n  },\n  "meta": {\n    "include": [\n        "roles",\n        "permissions"\n    ],\n    "custom": []\n  }\n}\n')),(0,a.kt)("h2",{id:"register-users-by-social-account"},"Register user by Social Account"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"(Facebook, Twitter, Google, etc...)")),(0,a.kt)("p",null,"Checkout the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/pacakges/social-authentication"},"Social Authentication")," documentation."))}m.isMDXComponent=!0},86302:e=>{e.exports=JSON.parse('{"c":{"F":{"h":"http://api.apiato.test/v1"},"S":{"D":"admin@admin.com","B":"admin"}}}')}}]);