"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[5862],{41387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"components/optional-components/seeders","title":"Seeders","description":"Apiato seeders are just Laravel Seeders,","source":"@site/docs/components/optional-components/seeders.md","sourceDirName":"components/optional-components","slug":"/components/optional-components/seeders","permalink":"/docs/next/components/optional-components/seeders","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/seeders.md","tags":[{"inline":true,"label":"component","permalink":"/docs/next/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/next/tags/optional-component"},{"inline":true,"label":"seeder","permalink":"/docs/next/tags/seeder"},{"inline":true,"label":"migration","permalink":"/docs/next/tags/migration"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Seeders","tags":["component","optional-component","seeder","migration"]},"sidebar":"tutorialSidebar","previous":{"title":"Criterias","permalink":"/docs/next/components/optional-components/repository/criterias"},"next":{"title":"Service Providers","permalink":"/docs/next/components/optional-components/service-providers"}}');var o=s(74848),i=s(28453);const a={title:"Seeders",tags:["component","optional-component","seeder","migration"]},r=void 0,d={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Prepend Container Name",id:"prepend-container-name",level:4},{value:"Prepend Section Name",id:"prepend-section-name",level:4},{value:"Loading Order",id:"loading-order",level:2},{value:"Special Seeders",id:"special-seeders",level:2},{value:"Testing",id:"testing",level:3},{value:"Deployment",id:"deployment",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Apiato seeders are just ",(0,o.jsx)(n.a,{href:"https://laravel.com/docs/seeding",children:"Laravel Seeders"}),",\nand they function in the exact same way as Laravel seeders.\nHowever, they come with additional rules and conventions specific to Apiato."]}),"\n",(0,o.jsxs)(n.p,{children:["To generate new seeders you may use the ",(0,o.jsx)(n.code,{children:"apiato:generate:seeder"})," interactive command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"php artisan apiato:generate:seeder\n"})}),"\n",(0,o.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["All container-specific and third-party package Seeders MUST be placed in the ",(0,o.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/Data/Seeders"})," directory."]}),"\n",(0,o.jsxs)(n.li,{children:["All non-Laravel or third-party package Seeders MUST extend the ",(0,o.jsx)(n.code,{children:"App\\Ship\\Parents\\Seeders\\Seeder"})," class."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Data\n                \u2514\u2500\u2500 Seeders\n                    \u251c\u2500\u2500 DemoSeeder_1.php\n                    \u251c\u2500\u2500 AnotherDemoSeeder_2.php\n                    \u2514\u2500\u2500 ...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,o.jsx)(n.p,{children:"Seeders are defined exactly as you would define them in Laravel."}),"\n",(0,o.jsx)(n.h2,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,o.jsx)(n.p,{children:"To avoid conflicts between containers' seeder classes, it is crucial to follow specific naming conventions.\nIf two seeder classes have the same name but exist in different containers, Apiato will not be able to load one of them,\nleading to unintended consequences and potential data inconsistencies."}),"\n",(0,o.jsx)(n.p,{children:"To ensure smooth and error-free seeding, adhere to the following naming conventions:"}),"\n",(0,o.jsx)(n.h4,{id:"prepend-container-name",children:"Prepend Container Name"}),"\n",(0,o.jsxs)(n.p,{children:["Always prepend the seeders of each container with the container name.\nFor example, if you have containers named ",(0,o.jsx)(n.code,{children:"User"})," and ",(0,o.jsx)(n.code,{children:"Item"}),",\nthe seeder classes should be named ",(0,o.jsx)(n.code,{children:"UserPermissionsSeeder"})," and ",(0,o.jsx)(n.code,{children:"ItemPermissionsSeeder"}),", respectively."]}),"\n",(0,o.jsx)(n.h4,{id:"prepend-section-name",children:"Prepend Section Name"}),"\n",(0,o.jsx)(n.p,{children:"In situations where two seeder classes have the same name but exist in different containers,\nmanually prepend the seeder name with the section name to distinguish them."}),"\n",(0,o.jsx)(n.h2,{id:"loading-order",children:"Loading Order"}),"\n",(0,o.jsxs)(n.p,{children:["Apiato enables the loading of seeders in a specific order.\nTo organize the seeding of classes, simply add ",(0,o.jsx)(n.code,{children:"_1"}),", ",(0,o.jsx)(n.code,{children:"_2"}),", and so on, to your class names.\nFor instance, ",(0,o.jsx)(n.code,{children:"UserPermissionsSeeder_1"})," will be loaded before ",(0,o.jsx)(n.code,{children:"UserPermissionsSeeder_2"}),"."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["By default, Laravel invokes the ",(0,o.jsx)(n.code,{children:"run"})," method of the ",(0,o.jsx)(n.code,{children:"database/seeders/DatabaseSeeder.php"})," class."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"run"})," method within ",(0,o.jsx)(n.code,{children:"DatabaseSeeder"})," calls the ",(0,o.jsx)(n.code,{children:"runLoadingSeeders"})," method of the ",(0,o.jsx)(n.code,{children:"Apiato\\Core\\Loaders\\SeederLoaderTrait.php"})," trait."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"runLoadingSeeders"})," method, in turn, loads all the seeders within each container following this sequence:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["It first loads all the seeders whose names contain ",(0,o.jsx)(n.code,{children:"_1"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Subsequently, it proceeds to load seeders with names containing ",(0,o.jsx)(n.code,{children:"_2"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["This pattern continues until it loads all seeders with names containing ",(0,o.jsx)(n.code,{children:"_n"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Lastly, any remaining seeders without the ",(0,o.jsx)(n.code,{children:"_n"})," suffix are loaded."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"special-seeders",children:"Special Seeders"}),"\n",(0,o.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,o.jsxs)(n.p,{children:["For testing purposes, Apiato offers a special seeder class to seed testing data.\nYou can find this seeder class at ",(0,o.jsx)(n.code,{children:"app/Ship/Seeders/SeedTestingData.php"}),".\nIt's important to note that this seeder is not loaded automatically by Apiato.\nInstead, you can manually trigger the seeding process by running the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"php artisan apiato:seed-test\n"})}),"\n",(0,o.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the testing seeder, Apiato also provides a special seeder class for production data seeding.\nYou can locate this seeder class at ",(0,o.jsx)(n.code,{children:"app/Ship/Seeders/SeedDeploymentData.php"}),".\nSimilar to the testing seeder, the deployment seeder is not automatically loaded by Apiato.\nYou can call this seeder and populate your database with production data by executing the following command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"php artisan apiato:seed-deployment\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(96540);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);