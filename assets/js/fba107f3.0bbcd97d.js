"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9384],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>y});var o=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,y=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(y,l(l({ref:n},s),{},{components:t})):o.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(45072),r=(t(11504),t(95788));const a={title:"Helpers",tags:["component","optional-component","helper"]},l=void 0,p={unversionedId:"components/optional-components/helpers",id:"version-12.x/components/optional-components/helpers",title:"Helpers",description:'You have the option to create your own global "helper" PHP functions in designated directories, and Apiato will automatically autoload them for you.',source:"@site/versioned_docs/version-12.x/components/optional-components/helpers.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/helpers",permalink:"/docs/components/optional-components/helpers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/helpers.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"helper",permalink:"/docs/tags/helper"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Helpers",tags:["component","optional-component","helper"]},sidebar:"tutorialSidebar",previous:{title:"Factories",permalink:"/docs/components/optional-components/factories"},next:{title:"Jobs",permalink:"/docs/components/optional-components/jobs"}},i={},c=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,'You have the option to create your own global "helper" PHP functions in designated directories, and Apiato will automatically autoload them for you.'),(0,r.yg)("admonition",{title:"Deprecation Notice",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Please be aware that Container Helpers are deprecated and will be removed in the next major release.")),(0,r.yg)("h2",{id:"rules"},"Rules"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"You MAY create as many helper files as you need per container."),(0,r.yg)("li",{parentName:"ul"},"All container-specific helpers MUST be placed in the ",(0,r.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Helpers")," directory."),(0,r.yg)("li",{parentName:"ul"},"All general helpers MUST be placed in the ",(0,r.yg)("inlineCode",{parentName:"li"},"app/Ship/Helpers")," directory.")),(0,r.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Helpers\n\u2502               \u251c\u2500\u2500 helpers.php\n\u2502               \u251c\u2500\u2500 mix.php\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Helpers\n        \u251c\u2500\u2500 another-helper.php\n        \u251c\u2500\u2500 and-another.php\n        \u2514\u2500\u2500 ...\n")),(0,r.yg)("h2",{id:"code-example"},"Code Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"if (!function_exists('add')) {\n    function add(int $firstNumber, int $secondNumber): int\n    {\n        return $firstNumber + $secondNumber;\n    }\n}\n")))}m.isMDXComponent=!0}}]);