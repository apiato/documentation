"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[996],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>v});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),p=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(d.Provider,{value:r},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,v=c["".concat(d,".").concat(u)]||c[u]||m[u]||a;return n?t.createElement(v,l(l({ref:r},s),{},{components:n})):t.createElement(v,l({ref:r},s))}));function v(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43343:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var t=n(87462),i=(n(67294),n(3905));const a={title:"Middlewares",tags:["component","optional-component","middleware","service-provider","route","controller","request"]},l=void 0,o={unversionedId:"components/optional-components/middlewares",id:"version-12.x/components/optional-components/middlewares",title:"Middlewares",description:"Apiato middlewares are just Laravel Middlewares,",source:"@site/versioned_docs/version-12.x/components/optional-components/middlewares.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/middlewares",permalink:"/docs/components/optional-components/middlewares",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/middlewares.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"middleware",permalink:"/docs/tags/middleware"},{label:"service-provider",permalink:"/docs/tags/service-provider"},{label:"route",permalink:"/docs/tags/route"},{label:"controller",permalink:"/docs/tags/controller"},{label:"request",permalink:"/docs/tags/request"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Middlewares",tags:["component","optional-component","middleware","service-provider","route","controller","request"]},sidebar:"tutorialSidebar",previous:{title:"Mail",permalink:"/docs/components/optional-components/mail"},next:{title:"Migrations",permalink:"/docs/components/optional-components/migrations"}},d={},p=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Registering Middleware",id:"registering-middleware",level:2},{value:"Container Middlewares",id:"container-middlewares",level:3},{value:"General Middlewares",id:"general-middlewares",level:3},{value:"Third Party Middlewares",id:"third-party-middlewares",level:3},{value:"Middleware Registration Flow",id:"middleware-registration-flow",level:2}],s={toc:p},c="wrapper";function m(e){let{components:r,...n}=e;return(0,i.kt)(c,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apiato middlewares are just ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/middleware"},"Laravel Middlewares"),",\nand they function in the exact same way as Laravel middlewares.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,i.kt)("p",null,"To generate new middlewares\nyou may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato:generate:middleware")," interactive command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:generate:middleware\n")),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All container-specific Middlewares:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Middlewares")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST be registered in their respective container's ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\Providers\\MiddlewareServiceProvider")," class."))),(0,i.kt)("li",{parentName:"ul"},"All general Middlewares:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Ship/Middlewares")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST be registered in the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Kernels\\HttpKernel")," class."))),(0,i.kt)("li",{parentName:"ul"},"All non-Laravel or third-party package Middlewares MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Middlewares\\Middleware")," class.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,i.kt)("inlineCode",{parentName:"li"},"ParentMiddleware"),".")))),(0,i.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("p",null,"The highlighted sections showcase middleware registration points:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u251c\u2500\u2500 Middlewares\n\u2502           \u2502   \u251c\u2500\u2500 DemoMiddleware.php\n\u2502           \u2502   \u2514\u2500\u2500 ...\n\u2502           \u2514\u2500\u2500 Providers\n                // highlight-start\n\u2502               \u251c\u2500\u2500 MiddlewareServiceProvider.php\n                // highlight-end\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u251c\u2500\u2500 Kernels\n        // highlight-start\n    \u2502   \u2514\u2500\u2500 HttpKernel.php\n        // highlight-end\n    \u2514\u2500\u2500 Middlewares\n        \u251c\u2500\u2500 AnotherMiddleware.php\n        \u2514\u2500\u2500 ...\n")),(0,i.kt)("h2",{id:"code-example"},"Code Example"),(0,i.kt)("p",null,"Middlewares are defined exactly as you would define them in Laravel."),(0,i.kt)("h2",{id:"registering-middleware"},"Registering Middleware"),(0,i.kt)("p",null,"The registration process for a middleware varies depending on its intended scope within the application.\nDifferent places are designated for different levels of middleware usage."),(0,i.kt)("p",null,"In essence, the decision of where to register a middleware boils down to two key factors:\nthe scope of middleware usage and the logical location for its registration."),(0,i.kt)("h3",{id:"container-middlewares"},"Container Middlewares"),(0,i.kt)("p",null,"If a middleware usage is specific to a container,\nit must be registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\MiddlewareServiceProvider")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\MiddlewareServiceProvider as ParentMiddlewareServiceProvider;\n\nclass MiddlewareServiceProvider extends ParentMiddlewareServiceProvider\n{\n    protected array $middlewares = [];\n    protected array $middlewareGroups = [];\n    protected array $middlewarePriority = [];\n    protected array $middlewareAliases = [];\n}\n")),(0,i.kt)("p",null,"To generate a middleware service provider\nyou may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato:generate:provider")," interactive command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:generate:provider\n")),(0,i.kt)("p",null,"Remember to also register the ",(0,i.kt)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider")," in the container's ",(0,i.kt)("inlineCode",{parentName:"p"},"MainServiceProvider"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\MainServiceProvider as ParentMainServiceProvider;\n\nclass MainServiceProvider extends ParentMainServiceProvider\n{\n    protected array $serviceProviders = [\n        // ... Other service providers\n        MiddlewareServiceProvider::class,\n    ];\n}\n")),(0,i.kt)("h3",{id:"general-middlewares"},"General Middlewares"),(0,i.kt)("p",null,"General middlewares must be registered in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Kernels\\HttpKernel")," class."),(0,i.kt)("h3",{id:"third-party-middlewares"},"Third Party Middlewares"),(0,i.kt)("p",null,"When dealing with third-party packages that require middleware registration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Kernels\\HttpKernel")," class,\nyou should follow these guidelines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Specific Container Usage"),": If the package is used within a particular container, register its middleware in that container ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\MiddlewareServiceProvider")," class.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Framework-wide Usage"),": If the package is generic and used throughout the entire application, you can register its middleware in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Kernels\\HttpKernel")," class."))),(0,i.kt)("h2",{id:"middleware-registration-flow"},"Middleware Registration Flow"),(0,i.kt)("p",null,"If you want to understand the middleware registration process,\nhere is a breakdown of the registration flow."),(0,i.kt)("p",null,"Consider the following folder structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u251c\u2500\u2500 Middlewares\n\u2502           \u2502   \u251c\u2500\u2500 DemoMiddleware.php \u2500\u25ba\u2500\u2510\n\u2502           \u2502   \u2514\u2500\u2500 ...                   \u2502\n\u2502           \u2514\u2500\u2500 Providers                 \u25bc\n\u2502               \u251c\u2500\u2500 MiddlewareServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502               \u251c\u2500\u2500 MainServiceProvider.php \u25c4\u2500registered\u2500in\u2500\u25c4\u2518\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u251c\u2500\u2500 Kernels\n    \u2502   \u251c\u2500\u2500 HttpKernel.php \u25c4\u2500registered\u2500in\u2500\u25c4\u2510\n    \u2502   \u2514\u2500\u2500 ...                             \u2502\n    \u2514\u2500\u2500 Middlewares                         \u2502\n        \u251c\u2500\u2500 AnotherMiddleware.php \u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2518\n        \u2514\u2500\u2500 ...\n")),(0,i.kt)("p",null,"The following diagram illustrates the registration flow of middlewares in the above folder structure:"),(0,i.kt)("mermaid",{value:"graph LR\n  subgraph Container\n    MainServiceProvider\n    MiddlewareServiceProvider\n    DemoMiddleware\n  end\n  \n  MainServiceProvider --\x3e|loads| MiddlewareServiceProvider\n  MiddlewareServiceProvider --\x3e|registered in| MainServiceProvider\n  DemoMiddleware --\x3e|registered in| MiddlewareServiceProvider\n  \n  subgraph Ship\n    HttpKernel\n    ShipDemoMiddleware\n  end\n\n  subgraph Application\n    SPLoader[[Service Provider Loader]]-- loads--\x3eMainServiceProvider\n    SPLoader-- loads--\x3eHttpKernel\n  end\n  \n  HttpKernel --\x3e|loads| ShipDemoMiddleware\n  ShipDemoMiddleware --\x3e|registered in| HttpKernel"}))}m.isMDXComponent=!0}}]);