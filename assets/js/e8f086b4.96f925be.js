"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:7,title:"Hash ID"},i=void 0,s={unversionedId:"security/hash-id",id:"version-12.x/security/hash-id",title:"Hash ID",description:"Hashing your internal ID's is a very helpful feature for many security reasons,",source:"@site/versioned_docs/version-12.x/security/hash-id.md",sourceDirName:"security",slug:"/security/hash-id",permalink:"/docs/security/hash-id",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/security/hash-id.md",tags:[],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1704287783,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Hash ID"},sidebar:"tutorialSidebar",previous:{title:"Password Reset",permalink:"/docs/security/password-reset"},next:{title:"Overview",permalink:"/docs/pacakges/"}},l={},p=[{value:"Enabling Hash ID",id:"enabling-hash-id",level:2},{value:"Usage",id:"usage",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Route Model Binding",id:"route-model-binding",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hashing your internal ID's is a very helpful feature for many security reasons,\nsuch as preventing your internal ID's from being exposed to the public, your competitors, and hackers."),(0,a.kt)("h2",{id:"enabling-hash-id"},"Enabling Hash ID"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"HASH_ID=true")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"BCMath PHP Extension is required to use this feature.")),(0,a.kt)("p",null,"Make sure to always use the ",(0,a.kt)("inlineCode",{parentName:"p"},"getHashedKey")," method on any model,\nwhenever you need to return an ID (mainly from ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/main-components/transformers"},"transformers"),")\nweather you are using Hash ID or not.\nIf Hash ID feature is disabled, the ",(0,a.kt)("inlineCode",{parentName:"p"},"getHashedKey")," method will return the normal ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"'id' => $user->getHashedKey(),\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"There are three ways to pass an ID to your system via the API:"),(0,a.kt)("p",null,"In URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/items/XbPW7awNkzl83LD6\n")),(0,a.kt)("p",null,"As query string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"/items?id=XbPW7awNkzl83LD6\n")),(0,a.kt)("p",null,"Or as HTTP request body:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "XbPW7awNkzl83LD6"\n}\n')),(0,a.kt)("p",null,"Now you need to tell your API to ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/main-components/requests#request-properties"},"decode the ID")," for you.\nThis is done by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"$decode")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$urlParameters")," properties on your Request class.\nAfter setting those properties,\nthe ID will be automatically decoded for you to apply validation rules on it or/and use it from your controller."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"$request->id")," will return the decoded ID.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Hash ID configuration is done in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/hashids.php")," config file.\nYou can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"HASH_ID_KEY")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file to any random string.\nApiato defaults to the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_KEY")," should this not be set."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HASH_ID_KEY")," acts as the salt during hashing of the ID. This should never be changed in production\nas it renders all previously generated IDs impossible to decode.")),(0,a.kt)("h2",{id:"route-model-binding"},"Route Model Binding"),(0,a.kt)("p",null,"Laravel ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/routing#route-model-binding"},"Route Model Binding")," feature is supported out of the box and Apiato will automatically decode the ID for you."))}c.isMDXComponent=!0}}]);