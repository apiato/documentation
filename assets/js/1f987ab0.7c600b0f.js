"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Factories",tags:["component","optional-component","factory","model","testing","seeder"]},i=void 0,l={unversionedId:"components/optional-components/factories",id:"version-12.x/components/optional-components/factories",title:"Factories",description:"Apiato factories are just Laravel Factories,",source:"@site/versioned_docs/version-12.x/components/optional-components/factories.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/factories",permalink:"/docs/components/optional-components/factories",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/factories.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"factory",permalink:"/docs/tags/factory"},{label:"model",permalink:"/docs/tags/model"},{label:"testing",permalink:"/docs/tags/testing"},{label:"seeder",permalink:"/docs/tags/seeder"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Factories",tags:["component","optional-component","factory","model","testing","seeder"]},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/components/optional-components/events"},next:{title:"Helpers",permalink:"/docs/components/optional-components/helpers"}},s={},c=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Model &amp; Factory Discovery Conventions",id:"model--factory-discovery-conventions",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apiato factories are just ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/eloquent-factories"},"Laravel Factories"),",\nand they function in the exact same way as Laravel factories.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,a.kt)("p",null,"To generate new factories you may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiato:generate:factory")," interactive command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php artisan apiato:generate:factory\n")),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Factory name MUST be the same as its corresponding model name and suffixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"Factory"),"."),(0,a.kt)("li",{parentName:"ul"},"All Factories:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Data/Factories")," directory."),(0,a.kt)("li",{parentName:"ul"},"MUST extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Factories\\Factory")," class.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,a.kt)("inlineCode",{parentName:"li"},"ParentFactory"),".")))))),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Data\n                \u2514\u2500\u2500 Factories\n                    \u251c\u2500\u2500 ModelFactory.php\n                    \u2514\u2500\u2500 ...\n")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)("p",null,"Factories are defined exactly as you would define them in Laravel."),(0,a.kt)("h2",{id:"model--factory-discovery-conventions"},"Model & Factory Discovery Conventions"),(0,a.kt)("p",null,"When you use a factory, Laravel relies on conventions to determine the appropriate factory for the model.\nBy default,\nLaravel will search for a factory in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Database\\Factories")," namespace\nthat has a class name matching the model name and is suffixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Factory"),"."),(0,a.kt)("p",null,"However, in the case of Apiato, factories are distributed across the Containers,\nand they are not all within the same namespace.\nAs a result, Apiato follows a different convention to locate the appropriate factory for a model.\nThis is achieved by utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\FactoryLocatorTrait")," trait,\nwhich is incorporated into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\ModelTrait")," trait used by all Apiato models."),(0,a.kt)("p",null,"Therefore,\nif your model does not extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Models\\Model")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Models\\UserModel")," class,\nit is essential to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"ModelTrait")," trait in your model.\nBy doing so, Apiato will be able to locate the appropriate factory and use it for the model when needed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use Apiato\\Core\\Traits\\ModelTrait;\n\nclass Demo\n{\n    use ModelTrait;\n    ...\n}\n")))}m.isMDXComponent=!0}}]);