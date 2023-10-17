"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={title:"Policies",tags:["component","optional-component","policy","authorization","request"]},a=void 0,l={unversionedId:"components/optional-components/policies",id:"version-12.x/components/optional-components/policies",title:"Policies",description:"Apiato policies are just Laravel Policies,",source:"@site/versioned_docs/version-12.x/components/optional-components/policies.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/policies",permalink:"/docs/components/optional-components/policies",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/policies.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"policy",permalink:"/docs/tags/policy"},{label:"authorization",permalink:"/docs/tags/authorization"},{label:"request",permalink:"/docs/tags/request"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Policies",tags:["component","optional-component","policy","authorization","request"]},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/docs/components/optional-components/notifications"},next:{title:"Repositories",permalink:"/docs/components/optional-components/repository/repositories"}},s={},p=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Registering Policies",id:"registering-policies",level:2},{value:"Policy Auto-Discovery",id:"policy-auto-discovery",level:3},{value:"Policy Registration Flow",id:"policy-registration-flow",level:2},{value:"Helper Methods",id:"helper-methods",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apiato policies are just ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/authorization"},"Laravel Policies"),",\nand they function in the exact same way as Laravel policies.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,i.kt)("p",null,"To generate new policies you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato:generate:policy")," interactive command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:generate:policy\n")),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All Policies:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{section}/{container}/Policies")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Policies\\Policy")," class.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,i.kt)("inlineCode",{parentName:"li"},"ParentPolicy"),"."))),(0,i.kt)("li",{parentName:"ul"},"SHOULD be named after the model they are associated with, followed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"Policy")," suffix. For instance, ",(0,i.kt)("inlineCode",{parentName:"li"},"UserPolicy.php"),".")))),(0,i.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("p",null,"The highlighted section showcases the policy registration point:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u251c\u2500\u2500 Policies\n            \u2502   \u251c\u2500\u2500 UserPolicy.php\n            \u2502   \u2514\u2500\u2500 ...\n            \u2514\u2500\u2500 Providers\n                // highlight-start\n                \u251c\u2500\u2500 AuthServiceProvider.php\n                // highlight-end\n                \u2514\u2500\u2500 ...\n")),(0,i.kt)("h2",{id:"code-example"},"Code Example"),(0,i.kt)("p",null,"Policies are defined exactly as you would define them in Laravel."),(0,i.kt)("h2",{id:"registering-policies"},"Registering Policies"),(0,i.kt)("p",null,"Once the policy class has been created, it needs to be registered.\nRegistering policies is\nhow we can inform Apiato which policy to use when authorizing actions against a given model type."),(0,i.kt)("p",null,"Registering policies can be done\nby adding them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"policies")," array in the ",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\AuthServiceProvider")," class."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\AuthServiceProvider as ParentAuthProvider;\n\nclass AuthServiceProvider extends ParentAuthProvider\n{\n    protected $policies = [\n        Post::class => PostPolicy::class,\n    ];\n}\n")),(0,i.kt)("p",null,"To generate an event service provider\nyou may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"apiato:generate:provider")," interactive command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:generate:provider\n")),(0,i.kt)("p",null,"Remember to also register the ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthServiceProvider")," in the container's ",(0,i.kt)("inlineCode",{parentName:"p"},"MainServiceProvider"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\MainServiceProvider as ParentMainServiceProvider;\n\nclass MainServiceProvider extends ParentMainServiceProvider\n{\n    protected array $serviceProviders = [\n        // ... Other service providers\n        AuthServiceProvider::class,\n    ];\n}\n")),(0,i.kt)("h3",{id:"policy-auto-discovery"},"Policy Auto-Discovery"),(0,i.kt)("p",null,"Apiato offers a policy auto-discovery feature that eliminates the need for manual registration of model policies.\nThis automatic discovery process relies on adhering to standard Apiato naming conventions for policies."),(0,i.kt)("p",null,"By following the ",(0,i.kt)("a",{parentName:"p",href:"#rules"},"rules")," outlined above, you allow Apiato to automatically discover your policies."),(0,i.kt)("p",null,"To summarize:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Policies must be stored within the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{section}/{container}/Policies")," directory."),(0,i.kt)("li",{parentName:"ul"},"The policy name should mirror the corresponding model's name while appending a ",(0,i.kt)("inlineCode",{parentName:"li"},"Policy")," suffix. For instance, a ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," model corresponds to a ",(0,i.kt)("inlineCode",{parentName:"li"},"UserPolicy")," policy class.")),(0,i.kt)("h2",{id:"policy-registration-flow"},"Policy Registration Flow"),(0,i.kt)("p",null,"In case you are going to register your policies manually, and don't want to use the auto-discovery feature,\nyou may want to understand the policy registration process.\nHere is a breakdown of the registration flow."),(0,i.kt)("p",null,"Consider the following folder structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u251c\u2500\u2500 Policies\n            \u2502   \u251c\u2500\u2500 DemoPolicy.php \u2500\u25ba\u2500\u2510\n            \u2502   \u2514\u2500\u2500 ...               \u2502                                                                                         \n            \u2514\u2500\u2500 Providers             \u25bc\n                \u251c\u2500\u2500 AuthServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                \u251c\u2500\u2500 MainServiceProvider.php \u25c4\u2500registered\u2500in\u2500\u25c4\u2518\n                \u2514\u2500\u2500 ...\n\n")),(0,i.kt)("p",null,"The following diagram illustrates the registration flow of policies in the above folder structure:"),(0,i.kt)("mermaid",{value:"graph LR\n  subgraph Container\n    MainServiceProvider\n    AuthServiceProvider\n    DemoPolicy\n  end\n  \n  MainServiceProvider --\x3e|loads| AuthServiceProvider\n  AuthServiceProvider --\x3e|registered in| MainServiceProvider\n  DemoPolicy --\x3e|registered in| AuthServiceProvider\n\n  subgraph Application\n    SPLoader[[Service Provider Loader]]-- loads--\x3eMainServiceProvider\n  end"}),(0,i.kt)("h2",{id:"helper-methods"},"Helper Methods"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available in v12.2.0 and above.")),(0,i.kt)("p",null,"All models are equipped with the ",(0,i.kt)("inlineCode",{parentName:"p"},"owns")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isOwnedBy")," methods,\nmade available through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\CanOwnTrait")," trait.\nThese methods offer a convenient way to determine if a model is owned by another model or if a model owns another model."),(0,i.kt)("p",null,"These methods support all types of relationships, as demonstrated below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// Check if a user owns a post\n$user->owns($post);\n\n// Check if a post is owned by a user\n$post->isOwnedBy($user);\n")))}u.isMDXComponent=!0}}]);