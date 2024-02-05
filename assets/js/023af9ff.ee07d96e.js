"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1932],{95788:(e,r,i)=>{i.d(r,{Iu:()=>d,yg:()=>u});var n=i(11504);function a(e,r,i){return r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function t(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach((function(r){a(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function p(e,r){if(null==e)return{};var i,n,a=function(e,r){if(null==e)return{};var i,n,a={},t=Object.keys(e);for(n=0;n<t.length;n++)i=t[n],r.indexOf(i)>=0||(a[i]=e[i]);return a}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)i=t[n],r.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),i=r;return e&&(i="function"==typeof e?e(r):o(o({},r),e)),i},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var i=e.components,a=e.mdxType,t=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),v=l(i),g=a,u=v["".concat(s,".").concat(g)]||v[g]||c[g]||t;return i?n.createElement(u,o(o({ref:r},d),{},{components:i})):n.createElement(u,o({ref:r},d))}));function u(e,r){var i=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var t=i.length,o=new Array(t);o[0]=g;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[v]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<t;l++)o[l]=i[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},74012:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>t,metadata:()=>p,toc:()=>l});var n=i(45072),a=(i(11504),i(95788));const t={title:"Service Providers",tags:["component","optional-component","service-provider","middleware","event"]},o=void 0,p={unversionedId:"components/optional-components/service-providers",id:"version-12.x/components/optional-components/service-providers",title:"Service Providers",description:"Apiato service providers are just Laravel Service Providers,",source:"@site/versioned_docs/version-12.x/components/optional-components/service-providers.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/service-providers",permalink:"/docs/components/optional-components/service-providers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/service-providers.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"service-provider",permalink:"/docs/tags/service-provider"},{label:"middleware",permalink:"/docs/tags/middleware"},{label:"event",permalink:"/docs/tags/event"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1704287783,formattedLastUpdatedAt:"Jan 3, 2024",frontMatter:{title:"Service Providers",tags:["component","optional-component","service-provider","middleware","event"]},sidebar:"tutorialSidebar",previous:{title:"Seeders",permalink:"/docs/components/optional-components/seeders"},next:{title:"Tests",permalink:"/docs/components/optional-components/tests"}},s={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Main Service Provider:",id:"main-service-provider",level:4},{value:"Register Providers",id:"register-providers",level:2},{value:"Container Service Providers",id:"container-service-providers",level:3},{value:"Main Service Provider",id:"main-service-provider-1",level:4},{value:"Additional Service Providers",id:"additional-service-providers",level:4},{value:"General Service Providers",id:"general-service-providers",level:3},{value:"Third Party Service Providers",id:"third-party-service-providers",level:3},{value:"Laravel Service Providers",id:"laravel-service-providers",level:2},{value:"Service Providers Registration Flow",id:"service-providers-registration-flow",level:2}],d={toc:l},v="wrapper";function c(e){let{components:r,...i}=e;return(0,a.yg)(v,(0,n.c)({},d,i,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apiato service providers are just ",(0,a.yg)("a",{parentName:"p",href:"https://laravel.com/docs/providers"},"Laravel Service Providers"),",\nand they function in the exact same way as Laravel service providers.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,a.yg)("p",null,"To generate new service providers\nyou may use the ",(0,a.yg)("inlineCode",{parentName:"p"},"apiato:generate:provider")," interactive command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"php artisan apiato:generate:provider\n")),(0,a.yg)("p",null,"There are two distinct types of service providers within a container:\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"Main Service Provider")," and additional service providers.\nThe Main Service Provider serves as the central registration point for all custom service providers within the container.\nIt orchestrates the setup and integration of these custom providers,\nensuring the seamless functioning of your application's components."),(0,a.yg)("h2",{id:"rules"},"Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"You MUST NOT register any Service Provider in the ",(0,a.yg)("inlineCode",{parentName:"li"},"config/app.php")," (except Laravel default service providers)."),(0,a.yg)("li",{parentName:"ul"},"Each Container:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MAY have one or many Service Providers."),(0,a.yg)("li",{parentName:"ul"},"MUST have a ",(0,a.yg)("inlineCode",{parentName:"li"},"Main Service Provider")," -> ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\Providers\\MainServiceProvider")," class.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MUST be named ",(0,a.yg)("inlineCode",{parentName:"li"},"MainServiceProvider"),"."),(0,a.yg)("li",{parentName:"ul"},"MUST extend the ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\MainServiceProvider")," class.",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,a.yg)("inlineCode",{parentName:"li"},"ParentMainServiceProvider"),"."))))))),(0,a.yg)("li",{parentName:"ul"},"All container-specific Service Providers:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MUST be placed in the ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Providers")," directory."),(0,a.yg)("li",{parentName:"ul"},"MUST be registered in their respective container's ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\Providers\\MainServiceProvider")," class."))),(0,a.yg)("li",{parentName:"ul"},"All general Service Providers:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MUST be placed in the ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Ship/Providers")," directory."),(0,a.yg)("li",{parentName:"ul"},"MUST be registered in the ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Prviders\\ShipProvider")," class."))),(0,a.yg)("li",{parentName:"ul"},"All non-Laravel or third-party package Service Providers:",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"MUST extend the ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\MainServiceProvider")," class."),(0,a.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,a.yg)("inlineCode",{parentName:"li"},"ParentMainServiceProvider"),"."))),(0,a.yg)("li",{parentName:"ul"},"When using Laravel ",(0,a.yg)("a",{parentName:"li",href:"#laravel-service-providers"},"default service providers"),":",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"AuthServiceProvider")," MUST extend ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\AuthServiceProvider"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"BroadcastServiceProvider")," MUST extend ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\BroadcastServiceProvider"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"EventServiceProvider")," MUST extend ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\EventServiceProvider"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"MiddlewareServiceProvider")," MUST extend ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\MiddlewareServiceProvider"),"."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"RouteServiceProvider")," MUST extend ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\RouteServiceProvider"),"."),(0,a.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,a.yg)("inlineCode",{parentName:"li"},"Parent{ServiceProviderName}"),". For example: ",(0,a.yg)("inlineCode",{parentName:"li"},"ParentAuthServiceProvider"),".")))),(0,a.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.yg)("p",null,"The highlighted sections showcase service provider registration points:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"MainServiceProvider.php")," acts as the central registration point for custom service providers specific to a container."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ShipProvider.php")," acts as the central registration point for the Ship (general) service providers.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Providers\n\u2502               \u251c\u2500\u2500 AuthServiceProvider.php\n\u2502               \u251c\u2500\u2500 BroadcastServiceProvider.php\n\u2502               \u251c\u2500\u2500 EventServiceProvider.php\n                // highlight-start\n\u2502               \u251c\u2500\u2500 MainServiceProvider.php\n                // highlight-end\n\u2502               \u251c\u2500\u2500 MiddlewareServiceProvider.php\n\u2502               \u251c\u2500\u2500 RouteServiceProvider.php\n\u2502               \u251c\u2500\u2500 CustomServiceProvider.php\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Providers\n        \u251c\u2500\u2500 RouteServiceProvider.php\n        // highlight-start\n        \u251c\u2500\u2500 ShipProvider.php\n        // highlight-end\n        \u2514\u2500\u2500 ...\n")),(0,a.yg)("h2",{id:"code-example"},"Code Example"),(0,a.yg)("h4",{id:"main-service-provider"},"Main Service Provider:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\MainServiceProvider as ParentMainServiceProvider;\n\nclass MainServiceProvider extends ParentMainServiceProvider\n{\n    // This providers will be automatically registered\n    public array $serviceProviders = [\n        CustomServiceProvider::class,\n        MiddlewareServiceProvider::class,\n        PassportServiceProvider::class,\n        // ...\n    ];\n\n    public array $aliases = [\n        // ...\n    ];\n}\n")),(0,a.yg)("h2",{id:"register-providers"},"Register Providers"),(0,a.yg)("p",null,"The registration process for a service provider varies depending on its intended scope within the application.\nDifferent places are designated for different levels of service provider usage."),(0,a.yg)("p",null,"In essence, the decision of where to register a service provider boils down to two key factors:\nthe scope of service provider usage and the logical location for its registration."),(0,a.yg)("h3",{id:"container-service-providers"},"Container Service Providers"),(0,a.yg)("h4",{id:"main-service-provider-1"},"Main Service Provider"),(0,a.yg)("p",null,"A container ",(0,a.yg)("inlineCode",{parentName:"p"},"Main Service Provider")," will be automatically registered by Apiato\nso manual registration isn't necessary.\nIn turn,\nMain Service Providers will register all service providers listed in their ",(0,a.yg)("inlineCode",{parentName:"p"},"$serviceProviders")," property."),(0,a.yg)("h4",{id:"additional-service-providers"},"Additional Service Providers"),(0,a.yg)("p",null,"To register a provider,\nadd the provider's class name to the ",(0,a.yg)("inlineCode",{parentName:"p"},"serviceProviders")," array in the ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\MainServiceProvider")," class."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"public array $serviceProviders = [\n    CustomServiceProvider::class,\n    AnotherCustomServiceProvider::class,\n    EventsServiceProvider::class,\n    // ...\n];\n")),(0,a.yg)("p",null,"You can also list aliases in the ",(0,a.yg)("inlineCode",{parentName:"p"},"$aliases")," property of the ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\MainServiceProvider")," class."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"public array $aliases = [\n    'CustomAlias' => CustomFacade::class,\n    'AnotherCustomAlias' => AnotherCustomFacade::class,\n    // ...\n];\n")),(0,a.yg)("h3",{id:"general-service-providers"},"General Service Providers"),(0,a.yg)("p",null,"General service providers must be registered in the ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Ship\\Providers\\ShipProvider")," class.\nThis can be done by adding the provider class name to the ",(0,a.yg)("inlineCode",{parentName:"p"},"serviceProviders")," array."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"public array $serviceProviders = [\n    CustomServiceProvider::class,\n    AnotherCustomServiceProvider::class,\n    EventsServiceProvider::class,\n    // ...\n];\n")),(0,a.yg)("h3",{id:"third-party-service-providers"},"Third Party Service Providers"),(0,a.yg)("p",null,"When dealing with third-party packages that require service provider registration in ",(0,a.yg)("inlineCode",{parentName:"p"},"config/app.php"),",\nyou should follow these guidelines:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Specific Container Usage"),": If the package is used within a particular container, register its service provider in that container ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\MainServiceProvider")," class.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Framework-wide Usage"),": If the package is generic and used throughout the entire application, you can register its service provider in the ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Ship\\Prviders\\ShipProvider")," class. However, avoid registering it directly in ",(0,a.yg)("inlineCode",{parentName:"p"},"config/app.php"),"."))),(0,a.yg)("h2",{id:"laravel-service-providers"},"Laravel Service Providers"),(0,a.yg)("p",null,"Apiato introduces a refined organization for Laravel service providers.\nBy default, Laravel standard service providers,\nlocated in the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/providers")," directory,\nhave been restructured in Apiato to reside in the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Parents/Providers")," directory."),(0,a.yg)("p",null,"Here's the mapping of Laravel's default service providers to their new locations in Apiato:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"App\\Providers\\AppServiceProvider")," \u2192 ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\MainServiceProvider"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Note: Laravel ",(0,a.yg)("inlineCode",{parentName:"li"},"AppServiceProvider")," is renamed to ",(0,a.yg)("inlineCode",{parentName:"li"},"MainServiceProvider")," in Apiato."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"App\\Providers\\AuthServiceProvider")," \u2192 ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\AuthServiceProvider")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"App\\Providers\\BroadcastServiceProvider")," \u2192 ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\BroadcastServiceProvider")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"App\\Providers\\EventServiceProvider")," \u2192 ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\EventServiceProvider")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"App\\Providers\\RouteServiceProvider")," \u2192 ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Providers\\RouteServiceProvider"))),(0,a.yg)("p",null,"You should not modify these providers directly.\nInstead, extend them within your container's ",(0,a.yg)("inlineCode",{parentName:"p"},"Providers")," directory.\nFor instance,\nthe ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\Authentication\\Providers\\AuthServiceProvider")," class extends ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\AuthServiceProvider"),"."),(0,a.yg)("p",null,"Those providers are not auto registered by default,\nthus writing any code there will not be available, unless you extend them.\nOnce extended, the child Service Provider should be registered in its container ",(0,a.yg)("inlineCode",{parentName:"p"},"MainServiceProvider"),",\nwhich makes it available."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Do note that the ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\RouteServiceProvider")," is a unique case.\nBecause it's required by Apiato, it is registered by the ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Ship\\Prviders\\ShipProvider")," and is loaded automatically.")),(0,a.yg)("h2",{id:"service-providers-registration-flow"},"Service Providers Registration Flow"),(0,a.yg)("p",null,"If you want to understand the service provider registration process,\nhere is a breakdown of the registration flow."),(0,a.yg)("p",null,"Consider the following folder structure:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u251c\u2500\u2500 ContainerA\n\u2502       \u2502   \u2514\u2500\u2500 Providers\n\u2502       \u2502       \u251c\u2500\u2500 CustomServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502       \u2502       \u251c\u2500\u2500 EventServiceProvider.php  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502       \u2502       \u251c\u2500\u2500 MainServiceProvider.php  \u25c4\u2500\u2500registered\u2500in\u2500\u25c4\u2500\u2518\n\u2502       \u2502       \u2514\u2500\u2500 ...\n\u2502       \u2514\u2500\u2500 ContainerB\n\u2502           \u2514\u2500\u2500 Providers\n\u2502               \u251c\u2500\u2500 AnotherCustomServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502               \u251c\u2500\u2500 EventServiceProvider.php         \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502               \u251c\u2500\u2500 MainServiceProvider.php        \u25c4\u2500\u2500registered\u2500in\u2500\u25c4\u2500\u2524\n\u2502               \u251c\u2500\u2500 MiddlewareServiceProvider.php    \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Providers\n        \u251c\u2500\u2500 CustomGeneralServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n        \u251c\u2500\u2500 RouteServiceProvider.php         \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n        \u251c\u2500\u2500 ShipProvider.php               \u25c4\u2500\u2500registered\u2500in\u2500\u25c4\u2500\u2518\n        \u2514\u2500\u2500 ...\n")),(0,a.yg)("p",null,"The following diagram illustrates the registration flow of service providers in the above folder structure:"),(0,a.yg)("mermaid",{value:"graph TB\n  subgraph ContainerB[Container B]\n    BMP[MainServiceProvider]\n    BEP[EventServiceProvider]\n    subgraph BServiceProviders[Service Providers]\n      AnotherCustomServiceProvider\n      BEP\n      MiddlewareServiceProvider\n    end\n    BMP\n  end\n    \n  subgraph ContainerA[Container A]\n    AMP[MainServiceProvider]\n    subgraph AServiceProviders[Service Providers]\n      CustomServiceProvider\n      EventServiceProvider\n    end\n    AMP\n  end\n  \n  subgraph Application\n    SPLoader[[Service Provider Loader]]-- loads--\x3eAMP\n    SPLoader-- loads--\x3eBMP\n  end\n  \n  AMP --\x3e|loads| AServiceProviders\n  AServiceProviders --\x3e|registered in| AMP\n  BMP --\x3e|loads| BServiceProviders\n  BServiceProviders --\x3e|registered in| BMP"}))}c.isMDXComponent=!0}}]);