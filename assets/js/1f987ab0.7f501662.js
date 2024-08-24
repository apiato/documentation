"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[8011],{2053:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=o(74848),a=o(28453);const i={title:"Factories",tags:["component","optional-component","factory","model","testing","seeder"]},s=void 0,r={id:"components/optional-components/factories",title:"Factories",description:"Apiato factories are just Laravel Factories,",source:"@site/versioned_docs/version-12.x/components/optional-components/factories.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/factories",permalink:"/docs/components/optional-components/factories",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/factories.md",tags:[{inline:!0,label:"component",permalink:"/docs/tags/component"},{inline:!0,label:"optional-component",permalink:"/docs/tags/optional-component"},{inline:!0,label:"factory",permalink:"/docs/tags/factory"},{inline:!0,label:"model",permalink:"/docs/tags/model"},{inline:!0,label:"testing",permalink:"/docs/tags/testing"},{inline:!0,label:"seeder",permalink:"/docs/tags/seeder"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591e3,frontMatter:{title:"Factories",tags:["component","optional-component","factory","model","testing","seeder"]},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/components/optional-components/events"},next:{title:"Helpers",permalink:"/docs/components/optional-components/helpers"}},c={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Model &amp; Factory Discovery Conventions",id:"model--factory-discovery-conventions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Apiato factories are just ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/eloquent-factories",children:"Laravel Factories"}),",\nand they function in the exact same way as Laravel factories.\nHowever, they come with additional rules and conventions specific to Apiato."]}),"\n",(0,t.jsxs)(n.p,{children:["To generate new factories you may use the ",(0,t.jsx)(n.code,{children:"apiato:generate:factory"})," interactive command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan apiato:generate:factory\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Factory name MUST be the same as its corresponding model name and suffixed with ",(0,t.jsx)(n.code,{children:"Factory"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["All Factories:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/Data/Factories"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["MUST extend the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Parents\\Factories\\Factory"})," class.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The parent extension SHOULD be aliased as ",(0,t.jsx)(n.code,{children:"ParentFactory"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Data\n                \u2514\u2500\u2500 Factories\n                    \u251c\u2500\u2500 ModelFactory.php\n                    \u2514\u2500\u2500 ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,t.jsx)(n.p,{children:"Factories are defined exactly as you would define them in Laravel."}),"\n",(0,t.jsx)(n.h2,{id:"model--factory-discovery-conventions",children:"Model & Factory Discovery Conventions"}),"\n",(0,t.jsxs)(n.p,{children:["When you use a factory, Laravel relies on conventions to determine the appropriate factory for the model.\nBy default,\nLaravel will search for a factory in the ",(0,t.jsx)(n.code,{children:"Database\\Factories"})," namespace\nthat has a class name matching the model name and is suffixed with ",(0,t.jsx)(n.code,{children:"Factory"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["However, in the case of Apiato, factories are distributed across the Containers,\nand they are not all within the same namespace.\nAs a result, Apiato follows a different convention to locate the appropriate factory for a model.\nThis is achieved by utilizing the ",(0,t.jsx)(n.code,{children:"Apiato\\Core\\Traits\\FactoryLocatorTrait"})," trait,\nwhich is incorporated into the ",(0,t.jsx)(n.code,{children:"Apiato\\Core\\Traits\\ModelTrait"})," trait used by all Apiato models."]}),"\n",(0,t.jsxs)(n.p,{children:["Therefore,\nif your model does not extend the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Parents\\Models\\Model"})," or the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Parents\\Models\\UserModel"})," class,\nit is essential to include the ",(0,t.jsx)(n.code,{children:"ModelTrait"})," trait in your model.\nBy doing so, Apiato will be able to locate the appropriate factory and use it for the model when needed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Apiato\\Core\\Traits\\ModelTrait;\n\nclass Demo\n{\n    use ModelTrait;\n    ...\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);