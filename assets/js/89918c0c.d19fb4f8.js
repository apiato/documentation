"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[8283],{28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>c});var t=o(96540);const s={},a=t.createContext(s);function i(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(a.Provider,{value:e},n.children)}},30144:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>r,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"components/optional-components/commands","title":"Commands","description":"Apiato commands are just Laravel Commands,","source":"@site/versioned_docs/version-12.x/components/optional-components/commands.md","sourceDirName":"components/optional-components","slug":"/components/optional-components/commands","permalink":"/docs/components/optional-components/commands","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/commands.md","tags":[{"inline":true,"label":"component","permalink":"/docs/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/tags/optional-component"},{"inline":true,"label":"command","permalink":"/docs/tags/command"},{"inline":true,"label":"action","permalink":"/docs/tags/action"}],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Commands","tags":["component","optional-component","command","action"]},"sidebar":"tutorialSidebar","previous":{"title":"Optional Components","permalink":"/docs/components/optional-components/"},"next":{"title":"Configs","permalink":"/docs/components/optional-components/configs"}}');var s=o(74848),a=o(28453);const i={title:"Commands",tags:["component","optional-component","command","action"]},c=void 0,l={},d=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Closure Commands",id:"closure-commands",level:2}];function m(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Apiato commands are just ",(0,s.jsx)(e.a,{href:"https://laravel.com/docs/artisan",children:"Laravel Commands"}),",\nand they function in the exact same way as Laravel commands.\nHowever, they come with additional rules and conventions specific to Apiato."]}),"\n",(0,s.jsx)(e.h2,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["All container-specific Commands MUST be placed in the ",(0,s.jsx)(e.code,{children:"app/Containers/{Section}/{Container}/UI/CLI/Commands"})," directory."]}),"\n",(0,s.jsxs)(e.li,{children:["All general Commands MUST be placed in the ",(0,s.jsx)(e.code,{children:"app/Ship/Commands"})," directory."]}),"\n",(0,s.jsxs)(e.li,{children:["All Commands:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["MUST extend the ",(0,s.jsx)(e.code,{children:"App\\Ship\\Parents\\Commands\\ConsoleCommand"})," class.","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["The parent extension SHOULD be aliased as ",(0,s.jsx)(e.code,{children:"ConsoleCommand"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"SHOULD call an Action to perform its job, and SHOULD NOT contain any business logic."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-markdown",children:"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 UI\n\u2502               \u2514\u2500\u2500 CLI\n\u2502                   \u2514\u2500\u2500 Commands\n\u2502                       \u251c\u2500\u2500 FirstCommand.php\n\u2502                       \u251c\u2500\u2500 SecondCommand.php\n\u2502                       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Commands\n        \u251c\u2500\u2500 FirstCommand.php\n        \u251c\u2500\u2500 SecondCommand.php\n        \u2514\u2500\u2500 ...\n"})}),"\n",(0,s.jsx)(e.h2,{id:"code-example",children:"Code Example"}),"\n",(0,s.jsx)(e.p,{children:"Commands are defined exactly as you would define them in Laravel."}),"\n",(0,s.jsx)(e.h2,{id:"closure-commands",children:"Closure Commands"}),"\n",(0,s.jsxs)(e.p,{children:["You can define your console closure commands in ",(0,s.jsx)(e.code,{children:"app/Ship/Commands/closures.php"}),"."]})]})}function r(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(m,{...n})}):m(n)}}}]);