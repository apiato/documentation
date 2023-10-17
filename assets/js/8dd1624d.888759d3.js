"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=c(t),u=a,f=s["".concat(i,".").concat(u)]||s[u]||d[u]||r;return t?o.createElement(f,l(l({ref:n},p),{},{components:t})):o.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m[s]="string"==typeof e?e:a,l[1]=m;for(var c=2;c<r;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},550:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={title:"Commands",tags:["component","optional-component","command","action"]},l=void 0,m={unversionedId:"components/optional-components/commands",id:"components/optional-components/commands",title:"Commands",description:"Apiato commands are just Laravel Commands,",source:"@site/docs/components/optional-components/commands.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/commands",permalink:"/docs/next/components/optional-components/commands",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/commands.md",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"optional-component",permalink:"/docs/next/tags/optional-component"},{label:"command",permalink:"/docs/next/tags/command"},{label:"action",permalink:"/docs/next/tags/action"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Commands",tags:["component","optional-component","command","action"]},sidebar:"tutorialSidebar",previous:{title:"Optional Components",permalink:"/docs/next/components/optional-components/"},next:{title:"Configs",permalink:"/docs/next/components/optional-components/configs"}},i={},c=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Closure Commands",id:"closure-commands",level:2}],p={toc:c},s="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apiato commands are just ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/artisan"},"Laravel Commands"),",\nand they function in the exact same way as Laravel commands.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All container-specific Commands MUST be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/CLI/Commands")," directory."),(0,a.kt)("li",{parentName:"ul"},"All general Commands MUST be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Ship/Commands")," directory."),(0,a.kt)("li",{parentName:"ul"},"All Commands:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MUST extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Commands\\ConsoleCommand")," class.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,a.kt)("inlineCode",{parentName:"li"},"ConsoleCommand"),"."))),(0,a.kt)("li",{parentName:"ul"},"SHOULD call an Action to perform its job, and SHOULD NOT contain any business logic.")))),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 UI\n\u2502               \u2514\u2500\u2500 CLI\n\u2502                   \u2514\u2500\u2500 Commands\n\u2502                       \u251c\u2500\u2500 FirstCommand.php\n\u2502                       \u251c\u2500\u2500 SecondCommand.php\n\u2502                       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Commands\n        \u251c\u2500\u2500 FirstCommand.php\n        \u251c\u2500\u2500 SecondCommand.php\n        \u2514\u2500\u2500 ...\n")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)("p",null,"Commands are defined exactly as you would define them in Laravel."),(0,a.kt)("h2",{id:"closure-commands"},"Closure Commands"),(0,a.kt)("p",null,"You can define your console closure commands in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Commands/closures.php"),"."))}d.isMDXComponent=!0}}]);