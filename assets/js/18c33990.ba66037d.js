"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[668],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=i.createContext({}),s=function(e){var r=i.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=s(e.components);return i.createElement(l.Provider,{value:r},e.children)},v="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},u=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),v=s(t),u=n,m=v["".concat(l,".").concat(u)]||v[u]||c[u]||a;return t?i.createElement(m,o(o({ref:r},d),{},{components:t})):i.createElement(m,o({ref:r},d))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[v]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2438:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=t(7462),n=(t(7294),t(3905));const a={title:"Providers"},o=void 0,p={unversionedId:"optional-components/providers",id:"version-9.x/optional-components/providers",title:"Providers",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/providers.md",sourceDirName:"optional-components",slug:"/optional-components/providers",permalink:"/docs/9.x/optional-components/providers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/providers.md",tags:[],version:"9.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Providers"},sidebar:"version-9.x/docs",previous:{title:"Sub Actions",permalink:"/docs/9.x/main-components/subactions"},next:{title:"Repositories",permalink:"/docs/9.x/optional-components/repositories"}},l={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Register Service Providers:",id:"register-service-providers",level:3},{value:"Container&#39;s Main Service Provider",id:"container-s-main-service-provider",level:4},{value:"Container&#39;s Additional Service Providers",id:"container-s-additional-service-providers",level:4},{value:"Third party packages Service Providers",id:"third-party-packages-service-providers",level:4},{value:"Laravel 5.5 Auto Discovery feature",id:"laravel-55-auto-discovery-feature",level:3},{value:"Information about Laravel Service Providers",id:"information-about-laravel-service-providers",level:3}],d={toc:s},v="wrapper";function c(e){let{components:r,...t}=e;return(0,n.kt)(v,(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#register-service-providers"},"Register Service Providers:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#container-s-main-service-provider"},"Container's Main Service Provider")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#container-s-additional-service-providers"},"Container's Additional Service Providers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#third-party-packages-service-providers"},"Third party packages Service Providers")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#laravel-55-auto-discovery-feature"},"Laravel 5.5 Auto Discovery feature")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#information-about-laravel-service-providers"},"Information about Laravel Service Providers"))),(0,n.kt)("h3",{id:"definition"},"Definition"),(0,n.kt)("p",null,"Providers (are short names for Service Providers)."),(0,n.kt)("p",null,"Providers are the central place of configuring and bootstrapping a Container."),(0,n.kt)("p",null,"They are the place where you register things like container bindings, event listeners, middleware, routes, other providers, aliases... to the framework service container."),(0,n.kt)("h3",{id:"principles"},"Principles"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"There are 2 types of Providers in a Container, the ",(0,n.kt)("strong",{parentName:"p"},"Main Provider")," and the ",(0,n.kt)("strong",{parentName:"p"},"Additional (Job Specific) Providers")," (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Container MAY have one or many Providers and MAY have no Provider at all.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A Container CAN have only a single Main Provider.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Main Provider is where all the Job Specific Providers get registered.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Third party packages Providers MUST be registered inside the Container Main service provider. (Same applies to Aliases).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Providers CAN be registered on the Ship Main Provider, if they are general or are intended to be used by many containers. (Same applies to Aliases)."))),(0,n.kt)("h3",{id:"rules"},"Rules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Main Provider will be auto registered by the Ship Engine, so no need to register it manually anywhere.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All Main Providers MUST extend from ",(0,n.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Providers\\MainProvider"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All other types of Providers (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider) must extend from their parent providers ",(0,n.kt)("inlineCode",{parentName:"p"},"Ship/Parents/Providers/*"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Main Provider MUST be named ",(0,n.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," in every container.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"You should not register any Provider in the framework (",(0,n.kt)("inlineCode",{parentName:"p"},"config/app.php"),"), only the ",(0,n.kt)("inlineCode",{parentName:"p"},"ApiatoProvider")," should be registered there."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important Information"),": Laravel 5.5 introduces an ",(0,n.kt)("inlineCode",{parentName:"p"},"auto-discovery")," feature that lets you automatically register ",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceProviders"),".\nDue to the nature and structure of Apiato applications, this features ",(0,n.kt)("strong",{parentName:"p"},"is turned off"),", because it messes up how ",(0,n.kt)("inlineCode",{parentName:"p"},"config")," files are loaded\nin apiato. This means, that you still need to ",(0,n.kt)("strong",{parentName:"p"},"manually")," register 3rd-party ",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceProviders")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceProvider")," of a ",(0,n.kt)("inlineCode",{parentName:"p"},"Container"),".")),(0,n.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example: User Container ",(0,n.kt)("inlineCode",{parentName:"strong"},"Service Providers"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - User\n            - Providers\n                - UserServiceProvider.php\n                - EventsServiceProvider.php\n                - ...\n")),(0,n.kt)("p",null,"In this example above only the ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthServiceProvider")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"EventsServiceProvider")," needs to be registered in ",(0,n.kt)("inlineCode",{parentName:"p"},"UserServiceProvider"),". While the ",(0,n.kt)("inlineCode",{parentName:"p"},"UserServiceProvider")," will get automatically registered (since it's named based on his Container name)."),(0,n.kt)("a",{name:""}),(0,n.kt)("h3",{id:"code-samples"},"Code Samples"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Main Service Provider Example:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Excel\\Providers;\n\nuse App\\Ship\\Parents\\Providers\\MainProvider;\nuse Maatwebsite\\Excel\\ExcelServiceProvider;\nuse Maatwebsite\\Excel\\Facades\\Excel;\n\nclass MainServiceProvider extends MainProvider\n{\n\n    /**\n     * Container Service Providers.\n     *\n     * @var array\n     */\n    public $serviceProviders = [\n        // ...          \n    ];\n\n    /**\n     * Container Aliases\n     *\n     * @var  array\n     */\n    public $aliases = [\n        // ...\n    ];\n\n    /**\n     * Register anything in the container.\n     */\n    public function register()\n    {\n        parent::register();\n\n        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);\n    }\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": when defining ",(0,n.kt)("inlineCode",{parentName:"p"},"register()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"boot()"),' function in your Main provider "only" you must call the parent functions (',(0,n.kt)("inlineCode",{parentName:"p"},"parent::register()"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"parent::boot()"),") from your extended function."),(0,n.kt)("h3",{id:"register-service-providers"},"Register Service Providers:"),(0,n.kt)("h4",{id:"container-s-main-service-provider"},"Container's Main Service Provider"),(0,n.kt)("p",null,"No need to register the Main ",(0,n.kt)("inlineCode",{parentName:"p"},"Service Provider")," anywhere, it will be automatically registered, and it is responsible for registering all the Container Additional (Job Specific) Providers."),(0,n.kt)("h4",{id:"container-s-additional-service-providers"},"Container's Additional Service Providers"),(0,n.kt)("p",null,"You MAY add as many Additional ",(0,n.kt)("inlineCode",{parentName:"p"},"Service Providers")," as you want in a ",(0,n.kt)("inlineCode",{parentName:"p"},"Container"),". However, in order to get them loaded in the framework you MUST register them all in the Main ",(0,n.kt)("inlineCode",{parentName:"p"},"Service Provider")," as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nprivate $containerServiceProviders = [\n    AuthServiceProvider::class,\n    EventsServiceProvider::class,\n    // ...\n];\n],\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Same rule applies to ",(0,n.kt)("strong",{parentName:"p"},"Aliases"),".")),(0,n.kt)("h4",{id:"third-party-packages-service-providers"},"Third party packages Service Providers"),(0,n.kt)("p",null,"If a package requires registering its service provider in the ",(0,n.kt)("inlineCode",{parentName:"p"},"config/app.php"),", you SHOULD register its service provider in the Main container where you are using it.\nHowever, if it's a generic package used by the entire framework and not a specific Container or feature. Then you can register that service provider in the ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Ship/Providers/ShipProvider.php"),", but never in the ",(0,n.kt)("inlineCode",{parentName:"p"},"config/app.php"),"."),(0,n.kt)("h3",{id:"laravel-55-auto-discovery-feature"},"Laravel 5.5 Auto Discovery feature"),(0,n.kt)("p",null,"This feature is disabled in Apiato so far.\nMore details ",(0,n.kt)("a",{parentName:"p",href:".././faq"},"here"),"."),(0,n.kt)("h3",{id:"information-about-laravel-service-providers"},"Information about Laravel Service Providers"),(0,n.kt)("p",null,"By default, Laravel provides some service providers in its ",(0,n.kt)("inlineCode",{parentName:"p"},"app/providers")," directory.\nIn apiato those providers have been renamed and moved to the Ship Layer ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Ship/Parents/Providers/*"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AppServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"RouteServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"AuthServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"BroadcastServiceProvider"),(0,n.kt)("li",{parentName:"ul"},"EventsServiceProvider")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"VIP Note:")," you should not touch those providers, instead you have to extend them from a containers providers in order to modify them.\nExample: the ",(0,n.kt)("inlineCode",{parentName:"p"},"app/Containers/Authentication/Providers/AuthProvider.php")," is extending the ",(0,n.kt)("inlineCode",{parentName:"p"},"AuthServiceProvider")," to modify it."),(0,n.kt)("p",null,"Those providers are not auto registered by default, thus writing any code there will not be available, unless you extend them.\nOnce extended the child Provider should be registered in its Container Main Provider, which makes its parent available."),(0,n.kt)("p",null,"This rule does not apply to the ",(0,n.kt)("inlineCode",{parentName:"p"},"RouteServiceProvider")," since it's required by Apiato, this Provider is registered by the ",(0,n.kt)("inlineCode",{parentName:"p"},"ApiatoProvider"),"."),(0,n.kt)("p",null,"Check ",(0,n.kt)("a",{parentName:"p",href:".././faq"},"How Service Providers are auto-loaded"),"."))}c.isMDXComponent=!0}}]);