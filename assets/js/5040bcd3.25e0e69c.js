"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[2038],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}},57873:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"components/main-components/routes","title":"Routes","description":"Routes are responsible for mapping incoming HTTP requests to their corresponding controller functions.","source":"@site/versioned_docs/version-12.x/components/main-components/routes.md","sourceDirName":"components/main-components","slug":"/components/main-components/routes","permalink":"/docs/components/main-components/routes","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/routes.md","tags":[{"inline":true,"label":"component","permalink":"/docs/tags/component"},{"inline":true,"label":"main-component","permalink":"/docs/tags/main-component"},{"inline":true,"label":"route","permalink":"/docs/tags/route"},{"inline":true,"label":"controller","permalink":"/docs/tags/controller"},{"inline":true,"label":"request","permalink":"/docs/tags/request"}],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Routes","tags":["component","main-component","route","controller","request"]},"sidebar":"tutorialSidebar","previous":{"title":"Main Components","permalink":"/docs/components/main-components/"},"next":{"title":"Controllers","permalink":"/docs/components/main-components/controllers"}}');var o=i(74848),r=i(28453);const s={sidebar_position:1,title:"Routes",tags:["component","main-component","route","controller","request"]},l=void 0,a={},c=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Route File Naming Convention",id:"route-file-naming-convention",level:2},{value:"API Routes",id:"api-routes",level:3},{value:"Examples of valid API Route file names:",id:"examples-of-valid-api-route-file-names",level:4},{value:"Web Routes",id:"web-routes",level:3},{value:"API Versioning",id:"api-versioning",level:2},{value:"Some Examples:",id:"some-examples",level:4},{value:"Public &amp; Private Routes",id:"public--private-routes",level:2},{value:"Public Routes:",id:"public-routes",level:4},{value:"Private Routes:",id:"private-routes",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://laravel.com/docs/routing",children:"Routes"})," are responsible for mapping incoming HTTP requests to their corresponding controller functions."]}),"\n",(0,o.jsxs)(n.p,{children:["To generate new routes you may use the ",(0,o.jsx)(n.code,{children:"apiato:generate:route"})," interactive command:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"php artisan apiato:generate:route\n"})}),"\n",(0,o.jsx)(n.h2,{id:"definition--principles",children:"Definition & Principles"}),"\n",(0,o.jsxs)(n.p,{children:["Read ",(0,o.jsx)(n.a,{href:"https://github.com/Mahmoudz/Porto#definitions--principles",children:(0,o.jsx)(n.strong,{children:"Porto SAP Documentation (#Routes)"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["All API Routes:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["MUST be placed in the ",(0,o.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/UI/API/Routes"})," directory."]}),"\n",(0,o.jsxs)(n.li,{children:["MUST follow a specific ",(0,o.jsx)(n.a,{href:"#api-routes",children:"naming convention"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["All Web Routes MUST be placed in the ",(0,o.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/UI/WEB/Routes"})," directory."]}),"\n",(0,o.jsx)(n.li,{children:"Each Route file MUST contain only one Route."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u251c\u2500\u2500 API\n                \u2502   \u2514\u2500\u2500 Routes\n                \u2502       \u251c\u2500\u2500 RouteA.v1.public.php\n                \u2502       \u251c\u2500\u2500 RouteB.v2.public.php\n                \u2502       \u251c\u2500\u2500 RouteC.v1.private.php\n                \u2502       \u2514\u2500\u2500 ...\n                \u2514\u2500\u2500 WEB\n                    \u2514\u2500\u2500 Routes\n                        \u251c\u2500\u2500 main.php\n                        \u2514\u2500\u2500 ...\n"})}),"\n",(0,o.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,o.jsx)(n.p,{children:"Routes are defined exactly as you would define them in Laravel."}),"\n",(0,o.jsx)(n.h2,{id:"route-file-naming-convention",children:"Route File Naming Convention"}),"\n",(0,o.jsx)(n.h3,{id:"api-routes",children:"API Routes"}),"\n",(0,o.jsx)(n.p,{children:"API Route files MUST be named based on their functionality, API version and exposure level (public/private)."}),"\n",(0,o.jsx)(n.h4,{id:"examples-of-valid-api-route-file-names",children:"Examples of valid API Route file names:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"CreateOrder.v1.public.php"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"FulfillOrder.v2.public.php"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"CancelOrder.v1.private.php"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"web-routes",children:"Web Routes"}),"\n",(0,o.jsx)(n.p,{children:"Web Route files can have any appropriate name."}),"\n",(0,o.jsx)(n.h2,{id:"api-versioning",children:"API Versioning"}),"\n",(0,o.jsx)(n.p,{children:"Apiato provides a streamlined approach to implementing API versioning within your application.\nThis feature is enabled by default."}),"\n",(0,o.jsxs)(n.p,{children:["If you wish to disable API versioning,\nnavigate to the ",(0,o.jsx)(n.code,{children:"app/Ship/Configs/apiato.php"})," configuration file and set the ",(0,o.jsx)(n.code,{children:"enable_version_prefix"})," to ",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Once API versioning is enabled,\nyou can create new API endpoints and define their version numbers directly in the route file names.\nThe route file names must adhere to the following naming convention:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"{endpoint-name}.{version-number}.{endpoint-visibility}.php"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By following to this naming convention,\nthe endpoint inside the specified route file will automatically become accessible by appending the version number to the URL."}),"\n",(0,o.jsx)(n.h4,{id:"some-examples",children:"Some Examples:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Route File Name"}),(0,o.jsx)(n.th,{children:"Route File Content"}),(0,o.jsx)(n.th,{children:"Generated Route"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"CreateOrder.v1.public.php"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Route::post('orders', CreateOrderController::class);"})}),(0,o.jsxs)(n.td,{children:["[POST] ",(0,o.jsx)(n.code,{children:"http://api.apiato.test/v1/orders"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"CreateOrder.v2.public.php"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Route::post('orders', AnotherCreateOrderController::class);"})}),(0,o.jsxs)(n.td,{children:["[POST] ",(0,o.jsx)(n.code,{children:"http://api.apiato.test/v2/orders"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"ListOrders.v1.private.php"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Route::get('orders', ListOrdersController::class);"})}),(0,o.jsxs)(n.td,{children:["[GET] ",(0,o.jsx)(n.code,{children:"http://api.apiato.test/v1/orders"})]})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"public--private-routes",children:"Public & Private Routes"}),"\n",(0,o.jsxs)(n.p,{children:["Apiato supports two types of endpoints, ",(0,o.jsx)(n.code,{children:"Public"})," and ",(0,o.jsx)(n.code,{children:"Private"}),", out of the box.\nMaintaining this distinction enables the generation of separate documentations for each type,\nensuring that your internal API remains private and secure.\nThis feature can be configured through the ",(0,o.jsx)(n.a,{href:"/docs/pacakges/documentation",children:"Documentation Generator"})," package."]}),"\n",(0,o.jsx)(n.h4,{id:"public-routes",children:"Public Routes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Accessible to third parties."}),"\n",(0,o.jsx)(n.li,{children:"May or may not require authentication."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"private-routes",children:"Private Routes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Accessible only to your own apps."}),"\n",(0,o.jsx)(n.li,{children:"May or may not require authentication."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);