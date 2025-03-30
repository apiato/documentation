"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[49],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var s=o(96540);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}},41509:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"getting-started/customized-laravel-components","title":"Customized Laravel Components","description":"Customized Laravel Component Locations in Apiato","source":"@site/versioned_docs/version-12.x/getting-started/customized-laravel-components.md","sourceDirName":"getting-started","slug":"/getting-started/customized-laravel-components","permalink":"/docs/getting-started/customized-laravel-components","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/getting-started/customized-laravel-components.md","tags":[],"version":"12.x","lastUpdatedBy":"Mahmoud Zalt","lastUpdatedAt":1730083420000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Customized Laravel Components"},"sidebar":"tutorialSidebar","previous":{"title":"Best Practices","permalink":"/docs/getting-started/best-practices"},"next":{"title":"Architecture Concepts","permalink":"/docs/architecture-concepts/"}}');var i=o(74848),t=o(28453);const r={sidebar_position:3,title:"Customized Laravel Components"},l=void 0,d={},a=[{value:"Customized Laravel Component Locations in Apiato",id:"customized-laravel-component-locations-in-apiato",level:2},{value:"Kernels",id:"kernels",level:3},{value:"Middlewares",id:"middlewares",level:3},{value:"Exception Handler",id:"exception-handler",level:3},{value:"Service Providers",id:"service-providers",level:3},{value:"Routes",id:"routes",level:2},{value:"Web and API Routes",id:"web-and-api-routes",level:3},{value:"Additional Route Files",id:"additional-route-files",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"customized-laravel-component-locations-in-apiato",children:"Customized Laravel Component Locations in Apiato"}),"\n",(0,i.jsx)(n.p,{children:"Apiato organizes Laravel's core components differently for a more modular and refined structure. Below is a guide to the default Laravel components and their locations within Apiato."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"kernels",children:"Kernels"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Http Kernel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved from ",(0,i.jsx)(n.code,{children:"app/Http"})," to ",(0,i.jsx)(n.code,{children:"app/Ship/Kernels"})]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed to ",(0,i.jsx)(n.code,{children:"HttpKernel"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console Kernel"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved from ",(0,i.jsx)(n.code,{children:"app/Console"})," to ",(0,i.jsx)(n.code,{children:"app/Ship/Kernels"})]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed to ",(0,i.jsx)(n.code,{children:"ConsoleKernel"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"middlewares",children:"Middlewares"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Middlewares"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Relocated from ",(0,i.jsx)(n.code,{children:"app/Http/Middleware"})," to ",(0,i.jsx)(n.code,{children:"app/Ship/Middlewares"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"exception-handler",children:"Exception Handler"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Exception Handler"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Moved from ",(0,i.jsx)(n.code,{children:"app/Exceptions"})," to ",(0,i.jsx)(n.code,{children:"app/Ship/Exceptions/Handlers"})]}),"\n",(0,i.jsxs)(n.li,{children:["Renamed to ",(0,i.jsx)(n.code,{children:"ExceptionsHandler"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"service-providers",children:"Service Providers"}),"\n",(0,i.jsxs)(n.p,{children:["For information about the new locations of ",(0,i.jsx)(n.strong,{children:"Providers"}),", please refer to the ",(0,i.jsx)(n.a,{href:"/docs/components/optional-components/service-providers#laravel-service-providers",children:"Service Providers Documentation"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"routes",children:"Routes"}),"\n",(0,i.jsx)(n.h3,{id:"web-and-api-routes",children:"Web and API Routes"}),"\n",(0,i.jsxs)(n.p,{children:["Apiato introduces an organized approach for route management, removing the default ",(0,i.jsx)(n.code,{children:"routes/web.php"})," and ",(0,i.jsx)(n.code,{children:"routes/api.php"})," files. To learn more about how routes are structured in Apiato, refer to the ",(0,i.jsx)(n.a,{href:"/docs/components/main-components/routes",children:"Routing Documentation"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"additional-route-files",children:"Additional Route Files"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Channels"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"channels.php"})," file has been moved from ",(0,i.jsx)(n.code,{children:"routes"})," to ",(0,i.jsx)(n.code,{children:"app/Ship/Broadcasts"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Console Commands"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"console.php"})," file has been moved from ",(0,i.jsx)(n.code,{children:"routes"})," to ",(0,i.jsx)(n.code,{children:"app/Ship/Commands"})," and renamed to ",(0,i.jsx)(n.code,{children:"closures.php"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"This new organization makes it easier to locate, maintain, and manage Apiato's core components while aligning with Laravel\u2019s functionality."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);