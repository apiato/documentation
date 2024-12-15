"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9524],{20858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"architecture-concepts/porto","title":"Porto","description":"Porto SAP is a modern software architectural pattern","source":"@site/docs/architecture-concepts/porto.md","sourceDirName":"architecture-concepts","slug":"/architecture-concepts/porto","permalink":"/docs/next/architecture-concepts/porto","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/architecture-concepts/porto.md","tags":[{"inline":true,"label":"architecture","permalink":"/docs/next/tags/architecture"},{"inline":true,"label":"porto","permalink":"/docs/next/tags/porto"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1727006963000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Porto","tags":["architecture","porto"]},"sidebar":"tutorialSidebar","previous":{"title":"Architecture Concepts","permalink":"/docs/next/architecture-concepts/"},"next":{"title":"Container","permalink":"/docs/next/architecture-concepts/container"}}');var o=t(74848),r=t(28453);const s={sidebar_position:1,title:"Porto",tags:["architecture","porto"]},a=void 0,c={},l=[{value:"Layers",id:"layers",level:2},{value:"Containers",id:"containers",level:3},{value:"Section",id:"section",level:4},{value:"Container",id:"container",level:4},{value:"Ship",id:"ship",level:3},{value:"Typical Project Structure",id:"typical-project-structure",level:2},{value:"Default Sections",id:"default-sections",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://mahmoudz.github.io/Porto/",children:"Porto SAP"})," is a modern software architectural pattern\nthat offers developers a comprehensive set of guidelines,\nprinciples, and patterns to organize their code in a highly maintainable and reusable way.\nThe primary goal of Porto is to help developers create software that is scalable,\nflexible, and easy to maintain over time."]}),"\n",(0,o.jsx)(n.h2,{id:"layers",children:"Layers"}),"\n",(0,o.jsx)(n.p,{children:"Porto's architecture is based on two layers: Containers and Ship."}),"\n",(0,o.jsx)(n.h3,{id:"containers",children:"Containers"}),"\n",(0,o.jsx)(n.p,{children:"The Containers layer encompasses all the application's business logic code and consists of two primary concepts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Section"}),"\n",(0,o.jsx)(n.li,{children:"Container"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"section",children:"Section"}),"\n",(0,o.jsx)(n.p,{children:"A Section refers to a collection of related Containers.\nThese Containers can represent various entities such as services\n(either micro or larger in scale) or subsystems within the main system."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"A Section is not allowed to directly communicate with another Section, except via Events or Commands."})}),"\n",(0,o.jsx)(n.h4,{id:"container",children:"Container"}),"\n",(0,o.jsx)(n.p,{children:"A Container represents a cohesive set of related functionalities.\nIt can be a specific feature or a wrapper around a RESTful API resource."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"A Container is allowed to depend on other Containers in the same Section."})}),"\n",(0,o.jsx)(n.h3,{id:"ship",children:"Ship"}),"\n",(0,o.jsx)(n.p,{children:"The Ship layer contains the infrastructure code, which consists of shared code utilized by all Containers."}),"\n",(0,o.jsx)(n.h2,{id:"typical-project-structure",children:"Typical Project Structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"app\n\u251c\u2500\u2500 Containers\n\u2502   \u251c\u2500\u2500 Section\n\u2502   \u2502   \u2514\u2500\u2500 Container\n\u2502   \u2502       \u251c\u2500\u2500 Actions\n\u2502   \u2502       \u251c\u2500\u2500 Configs\n\u2502   \u2502       \u251c\u2500\u2500 Data\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 Factories\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 Migrations\n\u2502   \u2502       \u2502   \u251c\u2500\u2500 Repositories\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 Seeders\n\u2502   \u2502       \u251c\u2500\u2500 Mails\n\u2502   \u2502       \u2502   \u2514\u2500\u2500 Templates\n\u2502   \u2502       \u251c\u2500\u2500 Middlewares\n\u2502   \u2502       \u251c\u2500\u2500 Models\n\u2502   \u2502       \u251c\u2500\u2500 Notifications\n\u2502   \u2502       \u251c\u2500\u2500 Providers\n\u2502   \u2502       \u251c\u2500\u2500 Tasks\n\u2502   \u2502       \u251c\u2500\u2500 Tests\n\u2502   \u2502       \u251c\u2500\u2500 Traits\n\u2502   \u2502       \u2514\u2500\u2500 UI\n\u2502   \u2502           \u251c\u2500\u2500 API\n\u2502   \u2502           \u2502   \u251c\u2500\u2500 Controllers\n\u2502   \u2502           \u2502   \u251c\u2500\u2500 Requests\n\u2502   \u2502           \u2502   \u251c\u2500\u2500 Routes\n\u2502   \u2502           \u2502   \u2514\u2500\u2500 Transformers\n\u2502   \u2502           \u251c\u2500\u2500 WEB\n\u2502   \u2502           \u2502   \u251c\u2500\u2500 Controllers\n\u2502   \u2502           \u2502   \u251c\u2500\u2500 Requests\n\u2502   \u2502           \u2502   \u251c\u2500\u2500 Routes\n\u2502   \u2502           \u2502   \u2514\u2500\u2500 Views\n\u2502   \u2502           \u2514\u2500\u2500 CLI\n\u2502   \u2502               \u2514\u2500\u2500 Commands\n\u2502   \u2514\u2500\u2500 Vendor `// All installed and reusable Containers`\n\u2502       \u251c\u2500\u2500 ContainerA\n\u2502       \u2514\u2500\u2500 ContainerB\n\u2514\u2500\u2500 Ship `// All shared code between all Containers`\n    \u251c\u2500\u2500 Broadcasts\n    \u251c\u2500\u2500 Commands\n    \u251c\u2500\u2500 Configs\n    \u251c\u2500\u2500 Contracts\n    \u251c\u2500\u2500 Criterias\n    \u251c\u2500\u2500 Events\n    \u251c\u2500\u2500 Exceptions\n    \u251c\u2500\u2500 Generators\n    \u251c\u2500\u2500 Helpers\n    \u251c\u2500\u2500 Kernels\n    \u251c\u2500\u2500 Listeners\n    \u251c\u2500\u2500 Mails\n    \u251c\u2500\u2500 Middlewares\n    \u251c\u2500\u2500 Migrations\n    \u251c\u2500\u2500 Notifications\n    \u251c\u2500\u2500 Parents\n    \u251c\u2500\u2500 Providers\n    \u251c\u2500\u2500 Seeders\n    \u2514\u2500\u2500 Tests\n"})}),"\n",(0,o.jsx)(n.h2,{id:"default-sections",children:"Default Sections"}),"\n",(0,o.jsx)(n.p,{children:"Apiato ships with two default Sections:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"AppSection"}),": contains all the default Containers."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Vendor"}),": contains all the installed and reusable Containers."]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Vendor"})," section is a special Section within the Containers layer that holds installed and reusable Containers.\nIt serves a similar purpose as the vendor folder located at the root.\nAny Section is permitted to depend on the Vendor Section, allowing for the utilization of its Containers."]}),(0,o.jsxs)(n.p,{children:["Read more about the ",(0,o.jsx)(n.a,{href:"/docs/next/pacakges/",children:"Container Installer"})," to learn how to install Vendor Containers."]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);