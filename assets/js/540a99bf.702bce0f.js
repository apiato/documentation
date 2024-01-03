"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(b,i(i({ref:t},p),{},{components:n})):o.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:10,title:"Sub Actions",tags:["component","main-component","sub-action","action","controller","request"]},i=void 0,c={unversionedId:"components/main-components/subactions",id:"components/main-components/subactions",title:"Sub Actions",description:"SubActions are designed to eliminate code duplication within Actions.",source:"@site/docs/components/main-components/subactions.md",sourceDirName:"components/main-components",slug:"/components/main-components/subactions",permalink:"/docs/next/components/main-components/subactions",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/main-components/subactions.md",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"main-component",permalink:"/docs/next/tags/main-component"},{label:"sub-action",permalink:"/docs/next/tags/sub-action"},{label:"action",permalink:"/docs/next/tags/action"},{label:"controller",permalink:"/docs/next/tags/controller"},{label:"request",permalink:"/docs/next/tags/request"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Sub Actions",tags:["component","main-component","sub-action","action","controller","request"]},sidebar:"tutorialSidebar",previous:{title:"Exceptions",permalink:"/docs/next/components/main-components/exceptions"},next:{title:"Optional Components",permalink:"/docs/next/components/optional-components/"}},s={},l=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"SubActions are designed to eliminate code duplication within Actions.\nThey enable Actions to share a sequence of Tasks, thus promoting reusability.\nSimilar to how Tasks enable Actions to share specific functionalities,\nSubActions serve to share a predefined set of Tasks."),(0,a.kt)("p",null,"All the features and capabilities available for regular Actions are also applicable to SubActions."),(0,a.kt)("p",null,"To generate new SubActions you may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiato:generate:subaction")," interactive command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php artisan apiato:generate:subaction\n")),(0,a.kt)("h2",{id:"definition--principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#definitions--principles"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Sub-Actions)")),"."),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All SubActions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Actions")," directory."),(0,a.kt)("li",{parentName:"ul"},"MUST extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Actions\\SubAction")," class.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,a.kt)("inlineCode",{parentName:"li"},"ParentSubAction"),".")))))),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Actions\n                \u251c\u2500\u2500 ValidateAddressSubAction.php\n                \u251c\u2500\u2500 BuildOrderSubAction.php\n                \u2514\u2500\u2500 ...\n")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Actions\\SubAction as ParentSubAction;\n\nclass DemoSubAction extends ParentSubAction\n{\n    public function __construct(\n        private readonly DemoTask $demoTask\n    ) {\n    }\n\n    public function run(array $data)\n    {\n        return $this->demoTask->run($data);\n    }\n}\n")))}m.isMDXComponent=!0}}]);