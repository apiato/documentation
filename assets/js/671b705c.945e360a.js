"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5375],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2048:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Languages"},i=void 0,l={unversionedId:"optional-components/languages",id:"optional-components/languages",title:"Languages",description:"- Definition",source:"@site/docs/optional-components/languages.md",sourceDirName:"optional-components",slug:"/optional-components/languages",permalink:"/docs/next/optional-components/languages",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/languages.md",tags:[],version:"current",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Languages"},sidebar:"tutorialSidebar",previous:{title:"Jobs",permalink:"/docs/next/optional-components/jobs"},next:{title:"Events",permalink:"/docs/next/optional-components/events"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Usage",id:"usage",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#usage"},"Usage"))),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Languages are not real Components, they are just files that holds translations."),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Languages CAN be placed inside the Containers. However, the default laravel ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/lang")," languages files are still loaded and can be used as well.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All Translations are namespaced as the camelCase of its Section name + ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," + camelCase of its Container name.",(0,r.kt)("br",{parentName:"p"}),"\n","For example, translation key inside a translation file named ",(0,r.kt)("inlineCode",{parentName:"p"},"messages")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"MySection")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"MyContainer")," can be accessed like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"__(mySection@myContainer::messages.welcome)")))),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Resources\n          - Languages\n            - en\n              - messages.php\n              - users.php\n            - ar\n              - messages.php\n              - users.php\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Nothing much to show here, here's how you use translated strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"__('mySection@myContainer::messages.welcome');\n")),(0,r.kt)("admonition",{title:"Further reading",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More info at ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/additional-features/localization"},"Localization"),".")))}m.isMDXComponent=!0}}]);