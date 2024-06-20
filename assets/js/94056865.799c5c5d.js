"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9416],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>b});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return t?o.createElement(b,l(l({ref:n},s),{},{components:t})):o.createElement(b,l({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[u]="string"==typeof e?e:r,l[1]=p;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34799:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=t(58168),r=(t(96540),t(15680));const a={title:"Jobs",tags:["component","optional-component","job","queue"]},l=void 0,p={unversionedId:"components/optional-components/jobs",id:"components/optional-components/jobs",title:"Jobs",description:"Apiato jobs are just Laravel Jobs,",source:"@site/docs/components/optional-components/jobs.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/jobs",permalink:"/docs/next/components/optional-components/jobs",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/jobs.md",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"optional-component",permalink:"/docs/next/tags/optional-component"},{label:"job",permalink:"/docs/next/tags/job"},{label:"queue",permalink:"/docs/next/tags/queue"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Jobs",tags:["component","optional-component","job","queue"]},sidebar:"tutorialSidebar",previous:{title:"Helpers",permalink:"/docs/next/components/optional-components/helpers"},next:{title:"Mail",permalink:"/docs/next/components/optional-components/mail"}},i={},c=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apiato jobs are just ",(0,r.yg)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"Laravel Jobs"),",\nand they function in the exact same way as Laravel jobs.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,r.yg)("p",null,"To generate new jobs you may use the ",(0,r.yg)("inlineCode",{parentName:"p"},"apiato:generate:job")," interactive command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"php artisan apiato:generate:job\n")),(0,r.yg)("h2",{id:"rules"},"Rules"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"All container-specific Jobs MUST be placed in the ",(0,r.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Jobs")," directory."),(0,r.yg)("li",{parentName:"ul"},"All general Jobs MUST be placed in the ",(0,r.yg)("inlineCode",{parentName:"li"},"app/Ship/Jobs")," directory."),(0,r.yg)("li",{parentName:"ul"},"All Jobs MUST extend the ",(0,r.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Jobs\\Job")," class.",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,r.yg)("inlineCode",{parentName:"li"},"ParentJob"),".")))),(0,r.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Jobs\n\u2502               \u251c\u2500\u2500 FooJob.php\n\u2502               \u251c\u2500\u2500 BarJob.php\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Jobs\n        \u251c\u2500\u2500 BazJob.php\n        \u2514\u2500\u2500 ...\n")),(0,r.yg)("h2",{id:"code-example"},"Code Example"),(0,r.yg)("p",null,"Jobs are defined exactly as you would define them in Laravel."))}m.isMDXComponent=!0}}]);