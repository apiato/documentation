"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[1955],{24988:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"components/optional-components/configs","title":"Configs","description":"Apiato configs are just Laravel configs, and they function in the exact same way as Laravel configs.","source":"@site/docs/components/optional-components/configs.md","sourceDirName":"components/optional-components","slug":"/components/optional-components/configs","permalink":"/docs/next/components/optional-components/configs","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/configs.md","tags":[{"inline":true,"label":"component","permalink":"/docs/next/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/next/tags/optional-component"},{"inline":true,"label":"config","permalink":"/docs/next/tags/config"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Configs","tags":["component","optional-component","config"]},"sidebar":"tutorialSidebar","previous":{"title":"Commands","permalink":"/docs/next/components/optional-components/commands"},"next":{"title":"Events","permalink":"/docs/next/components/optional-components/events"}}');var i=o(74848),a=o(28453);const c={title:"Configs",tags:["component","optional-component","config"]},s=void 0,r={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Container Main Config File",id:"container-main-config-file",level:2}];function d(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Apiato configs are just Laravel configs, and they function in the exact same way as Laravel configs.\nHowever, they come with additional rules and conventions specific to Apiato."}),"\n",(0,i.jsxs)(e.p,{children:["To generate new configs\nyou may use the ",(0,i.jsx)(e.code,{children:"apiato:generate:configuration"})," interactive command:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"php artisan apiato:generate:configuration\n"})}),"\n",(0,i.jsx)(e.h2,{id:"rules",children:"Rules"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Containers MAY have as many config files as they need."}),"\n",(0,i.jsxs)(e.li,{children:["All container-specific and third-party package config files MUST be placed in the ",(0,i.jsx)(e.code,{children:"app/Containers/{Section}/{Container}/Configs"})," directory."]}),"\n",(0,i.jsxs)(e.li,{children:["All general config files MUST be placed in the ",(0,i.jsx)(e.code,{children:"app/Ship/Configs"})," directory."]}),"\n",(0,i.jsxs)(e.li,{children:["All Laravel config files MUST be kept in the root ",(0,i.jsx)(e.code,{children:"config"})," folder."]}),"\n",(0,i.jsxs)(e.li,{children:["You MUST NOT add any non-Laravel or third-party config files to the root ",(0,i.jsx)(e.code,{children:"config"})," folder."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-markdown",children:"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Configs\n\u2502               \u251c\u2500\u2500 section-container.php\n\u2502               \u251c\u2500\u2500 another.php\n\u2502               \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 Ship\n\u2502   \u2514\u2500\u2500 Configs\n\u2502       \u251c\u2500\u2500 another-thing.php\n\u2502       \u251c\u2500\u2500 and-another.php\n\u2502       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 config\n    \u251c\u2500\u2500 app.php\n    \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsx)(e.h2,{id:"code-example",children:"Code Example"}),"\n",(0,i.jsx)(e.p,{children:"Configs are defined exactly as you would define them in Laravel."}),"\n",(0,i.jsx)(e.h2,{id:"container-main-config-file",children:"Container Main Config File"}),"\n",(0,i.jsx)(e.p,{children:"It is recommended that each container possesses a primary configuration file.\nWhile it is not obligatory,\nadhering to this practice prevents clashes between third-party package configurations and container-specific configurations."}),"\n",(0,i.jsxs)(e.p,{children:["The primary configuration file of a container should be named in accordance with a certain convention:\n",(0,i.jsx)(e.code,{children:"camelCase"})," representation of the container's Section name,\nsucceeded by ",(0,i.jsx)(e.code,{children:"-"}),", and then the ",(0,i.jsx)(e.code,{children:"camelCase"})," representation of the Container name."]}),"\n",(0,i.jsxs)(e.p,{children:['For instance, if you have a container named "MyContainer" within the "MySection"\nsection, the configuration file would be named ',(0,i.jsx)(e.code,{children:"mySection-myContainer.php"}),"."]})]})}function p(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>c,x:()=>s});var t=o(96540);const i={},a=t.createContext(i);function c(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);