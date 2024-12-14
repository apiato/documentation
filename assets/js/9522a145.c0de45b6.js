"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3782],{84593:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"components/optional-components/events","title":"Events","description":"Apiato events are just Laravel Events,","source":"@site/versioned_docs/version-12.x/components/optional-components/events.md","sourceDirName":"components/optional-components","slug":"/components/optional-components/events","permalink":"/docs/components/optional-components/events","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/events.md","tags":[{"inline":true,"label":"component","permalink":"/docs/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/tags/optional-component"},{"inline":true,"label":"event","permalink":"/docs/tags/event"},{"inline":true,"label":"listener","permalink":"/docs/tags/listener"},{"inline":true,"label":"service-provider","permalink":"/docs/tags/service-provider"},{"inline":true,"label":"action","permalink":"/docs/tags/action"},{"inline":true,"label":"task","permalink":"/docs/tags/task"}],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Events","tags":["component","optional-component","event","listener","service-provider","action","task"]},"sidebar":"tutorialSidebar","previous":{"title":"Configs","permalink":"/docs/components/optional-components/configs"},"next":{"title":"Factories","permalink":"/docs/components/optional-components/factories"}}');var t=i(74848),s=i(28453);const o={title:"Events",tags:["component","optional-component","event","listener","service-provider","action","task"]},a=void 0,d={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Registering Events &amp; Listeners",id:"registering-events--listeners",level:2},{value:"In The Container",id:"in-the-container",level:3},{value:"In The Ship",id:"in-the-ship",level:3},{value:"Events &amp; Listeners Registration Flow",id:"events--listeners-registration-flow",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Apiato events are just ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/events",children:"Laravel Events"}),",\nand they function in the exact same way as Laravel events.\nHowever, they come with additional rules and conventions specific to Apiato."]}),"\n",(0,t.jsx)(n.p,{children:"To generate new events and listeners you may use the following interactive commands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan apiato:generate:event\nphp artisan apiato:generate:listener\n"})}),"\n",(0,t.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["All","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Events MUST extend the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Parents\\Events\\Event"})," class.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The parent extension SHOULD be aliased as ",(0,t.jsx)(n.code,{children:"ParentEvent"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Listeners MUST extend the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Parents\\Listeners\\Listener"})," class.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The parent extension SHOULD be aliased as ",(0,t.jsx)(n.code,{children:"ParentListener"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["All container-specific","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Events MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/Events"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Listeners MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/Listeners"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["All general","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Events MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Ship/Events"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["Listeners MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Ship/Listeners"})," directory."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Listeners CAN listen to all cross-container & cross-section events."}),"\n",(0,t.jsxs)(n.li,{children:["Events & Listeners MUST be registered in the location where you intend to handle that event.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you intend to handle an event in:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A container, the Listener MUST be registered in ",(0,t.jsx)(n.code,{children:"App\\Containers\\{Section}\\{Container}\\Providers\\EventServiceProvider"})," class."]}),"\n",(0,t.jsxs)(n.li,{children:["The Ship, the Listener MUST be registered in ",(0,t.jsx)(n.code,{children:"App\\Ship\\Providers\\EventServiceProvider"})," class."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(n.p,{children:"The highlighted sections showcase event & listener registration points:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u251c\u2500\u2500 Events\n\u2502           \u2502   \u251c\u2500\u2500 DemoEvent.php\n\u2502           \u2502   \u2514\u2500\u2500 ...\n\u2502           \u251c\u2500\u2500 Listeners\n\u2502           \u2502   \u251c\u2500\u2500 DemoListener.php\n\u2502           \u2502   \u2514\u2500\u2500 ...\n\u2502           \u2514\u2500\u2500 Providers\n                // highlight-start\n\u2502               \u251c\u2500\u2500 EventServiceProvider.php\n                // highlight-end\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u251c\u2500\u2500 Events\n    \u2502   \u251c\u2500\u2500 ShipDemoEvent.php\n    \u2502   \u2514\u2500\u2500 ...\n    \u251c\u2500\u2500 Listeners\n    \u2502   \u251c\u2500\u2500 ShipDemoListener.php\n    \u2502   \u2514\u2500\u2500 ...\n    \u2514\u2500\u2500 Providers\n        // highlight-start\n        \u251c\u2500\u2500 EventServiceProvider.php\n        // highlight-end\n        \u2514\u2500\u2500 ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,t.jsx)(n.p,{children:"Events and Listeners are defined exactly as you would define them in Laravel."}),"\n",(0,t.jsx)(n.h2,{id:"registering-events--listeners",children:"Registering Events & Listeners"}),"\n",(0,t.jsx)(n.p,{children:"The registration of events and listeners depends on where you intend to respond to events.\nListeners can be registered in both container and Ship."}),"\n",(0,t.jsx)(n.h3,{id:"in-the-container",children:"In The Container"}),"\n",(0,t.jsxs)(n.p,{children:["Registering events and listeners in the container can be done\nby adding them to the ",(0,t.jsx)(n.code,{children:"listen"})," array in the ",(0,t.jsx)(n.code,{children:"App\\Containers\\{Section}\\{Container}\\Providers\\EventServiceProvider"})," class."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use ...\nuse App\\Ship\\Parents\\Providers\\EventServiceProvider as ParentEventServiceProvider;\n\nclass EventServiceProvider extends ParentEventServiceProvider\n{\n    protected $listen = [\n        OrderShipped::class => [\n            SendShipmentNotification::class,\n        ],\n    ];\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To generate an event service provider\nyou may use the ",(0,t.jsx)(n.code,{children:"apiato:generate:provider"})," interactive command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan apiato:generate:provider\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remember to also register the ",(0,t.jsx)(n.code,{children:"EventServiceProvider"})," in the container's ",(0,t.jsx)(n.code,{children:"MainServiceProvider"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use ...\nuse App\\Ship\\Parents\\Providers\\MainServiceProvider as ParentMainServiceProvider;\n\nclass MainServiceProvider extends ParentMainServiceProvider\n{\n    protected array $serviceProviders = [\n        // ... Other service providers\n        EventServiceProvider::class,\n    ];\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"in-the-ship",children:"In The Ship"}),"\n",(0,t.jsxs)(n.p,{children:["Registering events and listeners in the Ship can be done\nby adding them to the ",(0,t.jsx)(n.code,{children:"listen"})," array in the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Providers\\EventServiceProvider"})," class."]}),"\n",(0,t.jsx)(n.h2,{id:"events--listeners-registration-flow",children:"Events & Listeners Registration Flow"}),"\n",(0,t.jsx)(n.p,{children:"If you are manually registering events and listeners and wish to understand the registration process,\nhere is a breakdown of the registration flow."}),"\n",(0,t.jsx)(n.p,{children:"Consider the following folder structure:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u251c\u2500\u2500 Events\n\u2502           \u2502   \u251c\u2500\u2500 DemoEvent.php \u2500\u2500\u2500\u2500\u25ba\u2500\u2510\n\u2502           \u2502   \u2514\u2500\u2500 ...                 \u2502\n\u2502           \u251c\u2500\u2500 Listeners               \u2502\n\u2502           \u2502   \u251c\u2500\u2500 DemoListener.php \u2500\u25ba\u2500\u2524\n\u2502           \u2502   \u2514\u2500\u2500 ...                 \u2502\n\u2502           \u2514\u2500\u2500 Providers               \u25bc\n\u2502               \u251c\u2500\u2500 EventServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502               \u251c\u2500\u2500 MainServiceProvider.php \u25c4\u2500\u2500\u2500registered\u2500in\u2500\u25c4\u2500\u2518\n\u2502               \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u251c\u2500\u2500 Events\n    \u2502   \u251c\u2500\u2500 ShipDemoEvent.php \u2500\u2500\u25ba\u2500\u2510\n    \u2502   \u2514\u2500\u2500 ...                   \u2502\n    \u251c\u2500\u2500 Listeners                 \u2502\n    \u2502   \u251c\u2500\u2500 ShipDemoListener.php \u25ba\u2524\n    \u2502   \u2514\u2500\u2500 ...                   \u2502\n    \u2514\u2500\u2500 Providers                 \u25bc\n        \u251c\u2500\u2500 EventServiceProvider.php \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n        \u251c\u2500\u2500 ShipProvider.php        \u25c4\u2500\u2500\u2500registered\u2500in\u2500\u25c4\u2500\u2518\n        \u2514\u2500\u2500 ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following diagram illustrates the registration flow of events and listeners in the above folder structure:"}),"\n",(0,t.jsx)(n.mermaid,{value:"graph LR\n  subgraph Container\n    MainServiceProvider\n    EventServiceProvider\n    DemoEvent\n    DemoListener\n  end\n  \n  MainServiceProvider --\x3e|loads| EventServiceProvider\n  EventServiceProvider --\x3e|registered in| MainServiceProvider\n  DemoEvent --\x3e|registered in| EventServiceProvider\n  DemoListener --\x3e|registered in| EventServiceProvider\n  \n  subgraph Ship\n    ShipProvider\n    ShipEventServiceProvider[EventServiceProvider]\n    ShipDemoEvent\n    ShipDemoListener\n  end\n\n  subgraph Application\n    SPLoader[[Service Provider Loader]]-- loads--\x3eMainServiceProvider\n    SPLoader-- loads--\x3eShipProvider\n  end\n  \n  ShipProvider --\x3e|loads| ShipEventServiceProvider\n  ShipEventServiceProvider --\x3e|registered in| ShipProvider\n  ShipDemoEvent --\x3e|registered in| ShipEventServiceProvider\n  ShipDemoListener --\x3e|registered in| ShipEventServiceProvider"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var r=i(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);