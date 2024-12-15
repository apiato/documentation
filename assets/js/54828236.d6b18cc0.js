"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3011],{29746:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>v,frontMatter:()=>d,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"optional-components/providers","title":"Providers","description":"* Definition","source":"@site/versioned_docs/version-11.x/optional-components/providers.md","sourceDirName":"optional-components","slug":"/optional-components/providers","permalink":"/docs/11.x/optional-components/providers","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/providers.md","tags":[],"version":"11.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1659346629000,"frontMatter":{"title":"Providers"},"sidebar":"docs","previous":{"title":"Sub Actions","permalink":"/docs/11.x/main-components/subactions"},"next":{"title":"Repositories","permalink":"/docs/11.x/optional-components/repositories"}}');var s=i(74848),o=i(28453);const d={title:"Providers"},t=void 0,a={},l=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Example: User Container <code>Service Providers</code>",id:"example-user-container-service-providers",level:4},{value:"Code Samples",id:"code-samples",level:3},{value:"Main Service Provider Example",id:"main-service-provider-example",level:4},{value:"Register Service Providers:",id:"register-service-providers",level:3},{value:"Container&#39;s Main Service Provider",id:"container-s-main-service-provider",level:4},{value:"Container&#39;s Additional Service Providers",id:"container-s-additional-service-providers",level:4},{value:"Third party packages Service Providers",id:"third-party-packages-service-providers",level:4},{value:"Information about Laravel Service Providers",id:"information-about-laravel-service-providers",level:3}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#definition",children:"Definition"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#principles",children:"Principles"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#rules",children:"Rules"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#code-samples",children:"Code Samples"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#register-service-providers",children:"Register Service Providers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#container-s-main-service-provider",children:"Container's Main Service Provider"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#container-s-additional-service-providers",children:"Container's Additional Service Providers"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#third-party-packages-service-providers",children:"Third party packages Service Providers"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#information-about-laravel-service-providers",children:"Information about Laravel Service Providers"})}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(r.p,{children:"Providers (are short names for Service Providers)."}),"\n",(0,s.jsx)(r.p,{children:"Providers are the central place of configuring and bootstrapping a Container."}),"\n",(0,s.jsx)(r.p,{children:"They are the place where you register things like container bindings, event listeners, middleware, routes, other providers, aliases... to the framework service container."}),"\n",(0,s.jsx)(r.h3,{id:"principles",children:"Principles"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["There are 2 types of Providers in a Container, the ",(0,s.jsx)(r.strong,{children:"Main Provider"})," and the ",(0,s.jsx)(r.strong,{children:"Additional (Job Specific) Providers"})," (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider)."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"A Container MAY have one or many Providers and MAY have no Provider at all."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"A Container CAN have only a single Main Provider."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The Main Provider is where all the Job Specific Providers get registered."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Third party packages Providers MUST be registered inside the Container Main service provider. (Same applies to Aliases)."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Providers CAN be registered on the Ship Main Provider, if they are general or are intended to be used by many containers. (Same applies to Aliases)."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"The Main Provider will be auto registered by the Ship Engine, so no need to register it manually anywhere."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["All Main Providers MUST extend from ",(0,s.jsx)(r.code,{children:"App\\Ship\\Parents\\Providers\\MainProvider"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["All other types of Providers (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider) must extend from their parent providers ",(0,s.jsx)(r.code,{children:"Ship/Parents/Providers/*"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["The Main Provider MUST be named ",(0,s.jsx)(r.code,{children:"MainServiceProvider"})," in every container."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["You should not register any Provider in the framework (",(0,s.jsx)(r.code,{children:"config/app.php"}),")."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsxs)(r.h4,{id:"example-user-container-service-providers",children:["Example: User Container ",(0,s.jsx)(r.code,{children:"Service Providers"})]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:" - app\n     - Containers\n        - {section-name}\n            - User\n                - Providers\n                    - MainServiceProvider.php\n                    - AuthServiceProvider.php\n                    - EventsServiceProvider.php\n                    - ...\n"})}),"\n",(0,s.jsxs)(r.p,{children:["In this example above only the ",(0,s.jsx)(r.code,{children:"AuthServiceProvider"})," and ",(0,s.jsx)(r.code,{children:"EventsServiceProvider"})," needs to be registered in ",(0,s.jsx)(r.code,{children:"MainServiceProvider"}),". While the ",(0,s.jsx)(r.code,{children:"MainServiceProvider"})," will get automatically registered."]}),"\n",(0,s.jsx)(r.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,s.jsx)(r.h4,{id:"main-service-provider-example",children:"Main Service Provider Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"class MainServiceProvider extends MainProvider\n{\n    // These providers will we automatically registered\n    public array $serviceProviders = [\n        PassportServiceProvider::class,\n        AuthProvider::class,\n        MiddlewareServiceProvider::class\n        // ...\n    ];\n\n    public array $aliases = [\n        // ...\n    ];\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"register-service-providers",children:"Register Service Providers:"}),"\n",(0,s.jsx)(r.h4,{id:"container-s-main-service-provider",children:"Container's Main Service Provider"}),"\n",(0,s.jsxs)(r.p,{children:["No need to register the ",(0,s.jsx)(r.code,{children:"MainService Provider"})," anywhere, it will be automatically registered, and it is responsible for registering all Container Additional (Job Specific) Providers."]}),"\n",(0,s.jsx)(r.h4,{id:"container-s-additional-service-providers",children:"Container's Additional Service Providers"}),"\n",(0,s.jsxs)(r.p,{children:["You MAY add as many Additional Service Providers as you want in a Container. However, in order to get them loaded in the framework you MUST register them all in the ",(0,s.jsx)(r.code,{children:"MainService Provider"})," as follows:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"public array $serviceProviders = [\n    AuthServiceProvider::class,\n    EventsServiceProvider::class,\n    // ...\n];\n"})}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["Same rule applies to ",(0,s.jsx)(r.strong,{children:"Aliases"}),"."]})}),"\n",(0,s.jsx)(r.h4,{id:"third-party-packages-service-providers",children:"Third party packages Service Providers"}),"\n",(0,s.jsxs)(r.p,{children:["If a package requires registering its service provider in the ",(0,s.jsx)(r.code,{children:"config/app.php"}),", you SHOULD register its service provider in the Main container where you are using it.\nHowever, if it's a generic package used by the entire framework and not a specific Container or feature. Then you can register that service provider in the ",(0,s.jsx)(r.code,{children:"app/Ship/Providers/ShipProvider.php"}),", but never in the ",(0,s.jsx)(r.code,{children:"config/app.php"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"information-about-laravel-service-providers",children:"Information about Laravel Service Providers"}),"\n",(0,s.jsxs)(r.p,{children:["By default, Laravel provides some service providers in its ",(0,s.jsx)(r.code,{children:"app/providers"})," directory.\nIn apiato those providers have been renamed and moved to the Ship Layer ",(0,s.jsx)(r.code,{children:"app/Ship/Parents/Providers/*"}),":"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"AppServiceProvider"}),"\n",(0,s.jsx)(r.li,{children:"RouteServiceProvider"}),"\n",(0,s.jsx)(r.li,{children:"AuthServiceProvider"}),"\n",(0,s.jsx)(r.li,{children:"BroadcastServiceProvider"}),"\n",(0,s.jsx)(r.li,{children:"EventsServiceProvider"}),"\n"]}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:["You should not touch those providers, instead you have to extend them from a containers providers in order to modify them.\nExample: the ",(0,s.jsx)(r.strong,{children:"app/Containers/AppSection/Authentication/Providers/AuthProvider.php"})," is extending the ",(0,s.jsx)(r.strong,{children:"AuthServiceProvider"})," to modify it."]})}),"\n",(0,s.jsx)(r.p,{children:"Those providers are not auto registered by default, thus writing any code there will not be available, unless you extend them.\nOnce extended the child Provider should be registered in its Container Main Provider, which makes its parent available."}),"\n",(0,s.jsxs)(r.p,{children:["This rule does not apply to the ",(0,s.jsx)(r.code,{children:"RouteServiceProvider"})," since it's required by Apiato, this Provider is registered by the ",(0,s.jsx)(r.code,{children:"ShipProvider"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Check ",(0,s.jsx)(r.a,{href:"../faq",children:"How Service Providers are auto-loaded"}),"."]}),"\n",(0,s.jsx)(r.admonition,{title:"Further reading",type:"info",children:(0,s.jsxs)(r.p,{children:["More info at ",(0,s.jsx)(r.a,{href:"https://laravel.com/docs/providers",children:"Laravel Docs"}),"."]})})]})}function v(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>t});var n=i(96540);const s={},o=n.createContext(s);function d(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);