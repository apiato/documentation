"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[5432],{26578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"components/optional-components/migrations","title":"Migrations","description":"Apiato migrations are just Laravel Migrations,","source":"@site/docs/components/optional-components/migrations.md","sourceDirName":"components/optional-components","slug":"/components/optional-components/migrations","permalink":"/docs/next/components/optional-components/migrations","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/migrations.md","tags":[{"inline":true,"label":"component","permalink":"/docs/next/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/next/tags/optional-component"},{"inline":true,"label":"migration","permalink":"/docs/next/tags/migration"},{"inline":true,"label":"seeder","permalink":"/docs/next/tags/seeder"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Migrations","tags":["component","optional-component","migration","seeder"]},"sidebar":"tutorialSidebar","previous":{"title":"Middlewares","permalink":"/docs/next/components/optional-components/middlewares"},"next":{"title":"Notifications","permalink":"/docs/next/components/optional-components/notifications"}}');var i=t(74848),a=t(28453);const r={title:"Migrations",tags:["component","optional-component","migration","seeder"]},s=void 0,c={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Apiato migrations are just ",(0,i.jsx)(n.a,{href:"https://laravel.com/docs/migrations",children:"Laravel Migrations"}),",\nand they function in the exact same way as Laravel migrations.\nHowever, they come with additional rules and conventions specific to Apiato."]}),"\n",(0,i.jsxs)(n.p,{children:["To generate new migrations you may use the ",(0,i.jsx)(n.code,{children:"apiato:generate:migration"})," interactive command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"php artisan apiato:generate:migration\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All container-specific Migrations MUST be placed in the ",(0,i.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/Data/Migrations"})," directory."]}),"\n",(0,i.jsxs)(n.li,{children:["All general Migrations MUST be placed in the ",(0,i.jsx)(n.code,{children:"app/Ship/Migrations"})," directory."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Data\n\u2502               \u2514\u2500\u2500 Migrations\n\u2502                   \u251c\u2500\u2500 0000_01_01_000001_create_things_table.php\n\u2502                   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Migrations\n        \u251c\u2500\u2500 0000_02_02_000002_create_another_things_table.php\n        \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,i.jsx)(n.p,{children:"Migrations are defined exactly as you would define them in Laravel."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);