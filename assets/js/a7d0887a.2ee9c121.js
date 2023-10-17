"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(f,l(l({ref:t},s),{},{components:n})):o.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Helpers",tags:["component","optional-component","helper"]},l=void 0,p={unversionedId:"components/optional-components/helpers",id:"components/optional-components/helpers",title:"Helpers",description:'You have the option to create your own global "helper" PHP functions in designated directories, and Apiato will automatically autoload them for you.',source:"@site/docs/components/optional-components/helpers.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/helpers",permalink:"/docs/next/components/optional-components/helpers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/helpers.md",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"optional-component",permalink:"/docs/next/tags/optional-component"},{label:"helper",permalink:"/docs/next/tags/helper"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Helpers",tags:["component","optional-component","helper"]},sidebar:"tutorialSidebar",previous:{title:"Factories",permalink:"/docs/next/components/optional-components/factories"},next:{title:"Jobs",permalink:"/docs/next/components/optional-components/jobs"}},i={},c=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'You have the option to create your own global "helper" PHP functions in designated directories, and Apiato will automatically autoload them for you.'),(0,r.kt)("admonition",{title:"Deprecation Notice",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please be aware that Container Helpers are deprecated and will be removed in the next major release.")),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You MAY create as many helper files as you need per container."),(0,r.kt)("li",{parentName:"ul"},"All container-specific helpers MUST be placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Helpers")," directory."),(0,r.kt)("li",{parentName:"ul"},"All general helpers MUST be placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Ship/Helpers")," directory.")),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Helpers\n\u2502               \u251c\u2500\u2500 helpers.php\n\u2502               \u251c\u2500\u2500 mix.php\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Helpers\n        \u251c\u2500\u2500 another-helper.php\n        \u251c\u2500\u2500 and-another.php\n        \u2514\u2500\u2500 ...\n")),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('add')) {\n    function add(int $firstNumber, int $secondNumber): int\n    {\n        return $firstNumber + $secondNumber;\n    }\n}\n")))}m.isMDXComponent=!0}}]);