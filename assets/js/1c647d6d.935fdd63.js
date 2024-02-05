"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3096],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>f});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92116:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(45072),o=(t(11504),t(95788));const i={title:"Sub Actions"},a=void 0,l={unversionedId:"main-components/subactions",id:"version-10.x/main-components/subactions",title:"Sub Actions",description:"- Definition & Principles",source:"@site/versioned_docs/version-10.x/main-components/subactions.md",sourceDirName:"main-components",slug:"/main-components/subactions",permalink:"/docs/10.x/main-components/subactions",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/main-components/subactions.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"Apr 25, 2021",frontMatter:{title:"Sub Actions"},sidebar:"version-10.x/docs",previous:{title:"Exceptions",permalink:"/docs/10.x/main-components/exceptions"},next:{title:"Providers",permalink:"/docs/10.x/optional-components/providers"}},c={},s=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"ExampleSubAction",id:"examplesubaction",level:4}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,o.yg)("h3",{id:"definition-principles"},"Definition & Principles"),(0,o.yg)("p",null,"Read ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Sub-Actions"},(0,o.yg)("strong",{parentName:"a"},"Porto SAP Documentation (#Sub-Actions)")),"."),(0,o.yg)("h3",{id:"rules"},"Rules"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"All SubActions MUST extend from ",(0,o.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Actions\\SubAction"),".")),(0,o.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Actions\n                    - ValidateAddressSubAction.php\n                    - BuildOrderSubAction.php\n                    - ...\n")),(0,o.yg)("h3",{id:"code-sample"},"Code Sample"),(0,o.yg)("h4",{id:"examplesubaction"},"ExampleSubAction"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"class ExampleSubAction extends SubAction\n{\n    public function run(SomeRequest $request)\n    {\n        app(SomeTask::class)->run($request);\n    }\n}\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Every feature available for Actions, are also available in SubActions.")))}m.isMDXComponent=!0}}]);