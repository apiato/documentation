"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4164],{95788:(e,n,o)=>{o.d(n,{Iu:()=>c,yg:()=>m});var i=o(11504);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,i,t=function(e,n){if(null==e)return{};var o,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=i.createContext({}),p=function(e){var n=i.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),y=t,m=d["".concat(s,".").concat(y)]||d[y]||u[y]||r;return o?i.createElement(m,a(a({ref:n},c),{},{components:o})):i.createElement(m,a({ref:n},c))}));function m(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,a=new Array(r);a[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:t,a[1]=l;for(var p=2;p<r;p++)a[p]=o[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}y.displayName="MDXCreateElement"},61576:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=o(45072),t=(o(11504),o(95788));const r={title:"Policies",tags:["component","optional-component","policy","authorization","request"]},a=void 0,l={unversionedId:"components/optional-components/policies",id:"components/optional-components/policies",title:"Policies",description:"Apiato policies are just Laravel Policies,",source:"@site/docs/components/optional-components/policies.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/policies",permalink:"/docs/next/components/optional-components/policies",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/policies.md",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"optional-component",permalink:"/docs/next/tags/optional-component"},{label:"policy",permalink:"/docs/next/tags/policy"},{label:"authorization",permalink:"/docs/next/tags/authorization"},{label:"request",permalink:"/docs/next/tags/request"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Policies",tags:["component","optional-component","policy","authorization","request"]},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/docs/next/components/optional-components/notifications"},next:{title:"Repositories",permalink:"/docs/next/components/optional-components/repository/repositories"}},s={},p=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Registering Policies",id:"registering-policies",level:2},{value:"Policy Auto-Discovery",id:"policy-auto-discovery",level:3},{value:"Policy Registration Flow",id:"policy-registration-flow",level:2},{value:"Helper Methods",id:"helper-methods",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,t.yg)(d,(0,i.c)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Apiato policies are just ",(0,t.yg)("a",{parentName:"p",href:"https://laravel.com/docs/authorization"},"Laravel Policies"),",\nand they function in the exact same way as Laravel policies.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,t.yg)("p",null,"To generate new policies you may use the ",(0,t.yg)("inlineCode",{parentName:"p"},"apiato:generate:policy")," interactive command:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"php artisan apiato:generate:policy\n")),(0,t.yg)("h2",{id:"rules"},"Rules"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"All Policies:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"MUST be placed in the ",(0,t.yg)("inlineCode",{parentName:"li"},"app/Containers/{section}/{container}/Policies")," directory."),(0,t.yg)("li",{parentName:"ul"},"MUST extend the ",(0,t.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Policies\\Policy")," class.",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,t.yg)("inlineCode",{parentName:"li"},"ParentPolicy"),"."))),(0,t.yg)("li",{parentName:"ul"},"SHOULD be named after the model they are associated with, followed by the ",(0,t.yg)("inlineCode",{parentName:"li"},"Policy")," suffix. For instance, ",(0,t.yg)("inlineCode",{parentName:"li"},"UserPolicy.php"),".")))),(0,t.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,t.yg)("p",null,"The highlighted section showcases the policy registration point:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u251c\u2500\u2500 Policies\n            \u2502   \u251c\u2500\u2500 UserPolicy.php\n            \u2502   \u2514\u2500\u2500 ...\n            \u2514\u2500\u2500 Providers\n                // highlight-start\n                \u251c\u2500\u2500 AuthServiceProvider.php\n                // highlight-end\n                \u2514\u2500\u2500 ...\n")),(0,t.yg)("h2",{id:"code-example"},"Code Example"),(0,t.yg)("p",null,"Policies are defined exactly as you would define them in Laravel."),(0,t.yg)("h2",{id:"registering-policies"},"Registering Policies"),(0,t.yg)("p",null,"Once the policy class has been created, it needs to be registered.\nRegistering policies is\nhow we can inform Apiato which policy to use when authorizing actions against a given model type."),(0,t.yg)("p",null,"Registering policies can be done\nby adding them to the ",(0,t.yg)("inlineCode",{parentName:"p"},"policies")," array in the ",(0,t.yg)("inlineCode",{parentName:"p"},"App\\Containers\\{Section}\\{Container}\\Providers\\AuthServiceProvider")," class."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\AuthServiceProvider as ParentAuthProvider;\n\nclass AuthServiceProvider extends ParentAuthProvider\n{\n    protected $policies = [\n        Post::class => PostPolicy::class,\n    ];\n}\n")),(0,t.yg)("p",null,"To generate an event service provider\nyou may use the ",(0,t.yg)("inlineCode",{parentName:"p"},"apiato:generate:provider")," interactive command:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"php artisan apiato:generate:provider\n")),(0,t.yg)("p",null,"Remember to also register the ",(0,t.yg)("inlineCode",{parentName:"p"},"AuthServiceProvider")," in the container's ",(0,t.yg)("inlineCode",{parentName:"p"},"MainServiceProvider"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Providers\\MainServiceProvider as ParentMainServiceProvider;\n\nclass MainServiceProvider extends ParentMainServiceProvider\n{\n    protected array $serviceProviders = [\n        // ... Other service providers\n        AuthServiceProvider::class,\n    ];\n}\n")),(0,t.yg)("h3",{id:"policy-auto-discovery"},"Policy Auto-Discovery"),(0,t.yg)("p",null,"Apiato offers a policy auto-discovery feature that eliminates the need for manual registration of model policies.\nThis automatic discovery process relies on adhering to standard Apiato naming conventions for policies."),(0,t.yg)("p",null,"By following the ",(0,t.yg)("a",{parentName:"p",href:"#rules"},"rules")," outlined above, you allow Apiato to automatically discover your policies."),(0,t.yg)("p",null,"To summarize:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Policies must be stored within the ",(0,t.yg)("inlineCode",{parentName:"li"},"app/Containers/{section}/{container}/Policies")," directory."),(0,t.yg)("li",{parentName:"ul"},"The policy name should mirror the corresponding model's name while appending a ",(0,t.yg)("inlineCode",{parentName:"li"},"Policy")," suffix. For instance, a ",(0,t.yg)("inlineCode",{parentName:"li"},"User")," model corresponds to a ",(0,t.yg)("inlineCode",{parentName:"li"},"UserPolicy")," policy class.")),(0,t.yg)("h2",{id:"policy-registration-flow"},"Policy Registration Flow"),(0,t.yg)("p",null,"In case you are going to register your policies manually, and don't want to use the auto-discovery feature,\nyou may want to understand the policy registration process.\nHere is a breakdown of the registration flow."),(0,t.yg)("p",null,"Consider the following folder structure:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u251c\u2500\u2500 Policies\n            \u2502   \u251c\u2500\u2500 DemoPolicy.php \u2500\u25ba\u2500\u2510\n            \u2502   \u2514\u2500\u2500 ...               \u2502                                                                                         \n            \u2514\u2500\u2500 Providers             \u25bc\n                \u251c\u2500\u2500 AuthServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                \u251c\u2500\u2500 MainServiceProvider.php \u25c4\u2500registered\u2500in\u2500\u25c4\u2518\n                \u2514\u2500\u2500 ...\n\n")),(0,t.yg)("p",null,"The following diagram illustrates the registration flow of policies in the above folder structure:"),(0,t.yg)("mermaid",{value:"graph LR\n  subgraph Container\n    MainServiceProvider\n    AuthServiceProvider\n    DemoPolicy\n  end\n  \n  MainServiceProvider --\x3e|loads| AuthServiceProvider\n  AuthServiceProvider --\x3e|registered in| MainServiceProvider\n  DemoPolicy --\x3e|registered in| AuthServiceProvider\n\n  subgraph Application\n    SPLoader[[Service Provider Loader]]-- loads--\x3eMainServiceProvider\n  end"}),(0,t.yg)("h2",{id:"helper-methods"},"Helper Methods"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"Available in v12.2.0 and above.")),(0,t.yg)("p",null,"All models are equipped with the ",(0,t.yg)("inlineCode",{parentName:"p"},"owns")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"isOwnedBy")," methods,\nmade available through the ",(0,t.yg)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\CanOwnTrait")," trait.\nThese methods offer a convenient way to determine if a model is owned by another model or if a model owns another model."),(0,t.yg)("p",null,"These methods support all types of relationships, as demonstrated below:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"// Check if a user owns a post\n$user->owns($post);\n\n// Check if a post is owned by a user\n$post->isOwnedBy($user);\n")))}u.isMDXComponent=!0}}]);