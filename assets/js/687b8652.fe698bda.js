"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={title:"Migrations",tags:["component","optional-component","migration","seeder"]},i=void 0,l={unversionedId:"components/optional-components/migrations",id:"version-12.x/components/optional-components/migrations",title:"Migrations",description:"Apiato migrations are just Laravel Migrations,",source:"@site/versioned_docs/version-12.x/components/optional-components/migrations.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/migrations",permalink:"/docs/components/optional-components/migrations",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/migrations.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"migration",permalink:"/docs/tags/migration"},{label:"seeder",permalink:"/docs/tags/seeder"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Migrations",tags:["component","optional-component","migration","seeder"]},sidebar:"tutorialSidebar",previous:{title:"Middlewares",permalink:"/docs/components/optional-components/middlewares"},next:{title:"Notifications",permalink:"/docs/components/optional-components/notifications"}},p={},s=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apiato migrations are just ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/migrations"},"Laravel Migrations"),",\nand they function in the exact same way as Laravel migrations.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,r.kt)("p",null,"To generate new migrations you may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiato:generate:migration")," interactive command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"php artisan apiato:generate:migration\n")),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All container-specific Migrations MUST be placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Data/Migrations")," directory."),(0,r.kt)("li",{parentName:"ul"},"All general Migrations MUST be placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Ship/Migrations")," directory.")),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Data\n\u2502               \u2514\u2500\u2500 Migrations\n\u2502                   \u251c\u2500\u2500 0000_01_01_000001_create_things_table.php\n\u2502                   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Migrations\n        \u251c\u2500\u2500 0000_02_02_000002_create_another_things_table.php\n        \u2514\u2500\u2500 ...\n")),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)("p",null,"Migrations are defined exactly as you would define them in Laravel."))}d.isMDXComponent=!0}}]);