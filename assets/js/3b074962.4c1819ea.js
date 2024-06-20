"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[874],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>f});var t=r(96540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,l=function(e,n){if(null==e)return{};var r,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=l,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(f,a(a({ref:n},c),{},{components:r})):t.createElement(f,a({ref:n},c))}));function f(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2544:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var t=r(58168),l=(r(96540),r(15680));const o={title:"Helpers"},a=void 0,i={unversionedId:"optional-components/helpers",id:"version-10.x/optional-components/helpers",title:"Helpers",description:"- Definition",source:"@site/versioned_docs/version-10.x/optional-components/helpers.md",sourceDirName:"optional-components",slug:"/optional-components/helpers",permalink:"/docs/10.x/optional-components/helpers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/helpers.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"Apr 25, 2021",frontMatter:{title:"Helpers"},sidebar:"version-10.x/docs",previous:{title:"Configs",permalink:"/docs/10.x/optional-components/configs"},next:{title:"Commands",permalink:"/docs/10.x/optional-components/commands"}},p={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Usage",id:"usage",level:3}],c={toc:s},u="wrapper";function m(e){let{components:n,...r}=e;return(0,l.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#definition"},"Definition")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#principles"},"Principles")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"#usage"},"Usage"))),(0,l.yg)("h3",{id:"definition"},"Definition"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Helpers are global PHP functions that you can call from anywhere in your application."),(0,l.yg)("li",{parentName:"ul"},"Helper files are simple PHP files that hold functions.")),(0,l.yg)("h3",{id:"principles"},"Principles"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Helpers SHOULD be created inside the Containers. However, general Helpers CAN be created in the Ship layer."),(0,l.yg)("li",{parentName:"ul"},"You can create as many helper files as you need, per container."),(0,l.yg)("li",{parentName:"ul"},"You can implement as many helper functions as you need, per helper file."),(0,l.yg)("li",{parentName:"ul"},"All Helper files will be autoloaded by the framework.")),(0,l.yg)("h3",{id:"rules"},"Rules"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Helpers CAN be placed inside the Containers in Helpers folder or on the Ship for the general Helpers.")),(0,l.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Helpers\n          - helpers.php\n          - mix.php\n          - ...\n\n  - Ship\n    - Helpers\n      - helpers.php\n      - mix.php\n      - ...\n")),(0,l.yg)("h3",{id:"usage"},"Usage"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('add')) {\n    function add(int $firstNumber, int $secondNumber): int\n    {\n        return $firstNumber + $secondNumber;\n    }\n}\n")))}m.isMDXComponent=!0}}]);