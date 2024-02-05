"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1860],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=t(45072),o=(t(11504),t(95788));const r={sidebar_position:1,title:"Routes",tags:["component","main-component","route","controller","request"]},i=void 0,l={unversionedId:"components/main-components/routes",id:"components/main-components/routes",title:"Routes",description:"Routes are responsible for mapping incoming HTTP requests to their corresponding controller functions.",source:"@site/docs/components/main-components/routes.md",sourceDirName:"components/main-components",slug:"/components/main-components/routes",permalink:"/docs/next/components/main-components/routes",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/main-components/routes.md",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"main-component",permalink:"/docs/next/tags/main-component"},{label:"route",permalink:"/docs/next/tags/route"},{label:"controller",permalink:"/docs/next/tags/controller"},{label:"request",permalink:"/docs/next/tags/request"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Routes",tags:["component","main-component","route","controller","request"]},sidebar:"tutorialSidebar",previous:{title:"Main Components",permalink:"/docs/next/components/main-components/"},next:{title:"Controllers",permalink:"/docs/next/components/main-components/controllers"}},p={},s=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Route File Naming Convention",id:"route-file-naming-convention",level:2},{value:"API Routes",id:"api-routes",level:3},{value:"Examples of valid API Route file names:",id:"examples-of-valid-api-route-file-names",level:4},{value:"Web Routes",id:"web-routes",level:3},{value:"API Versioning",id:"api-versioning",level:2},{value:"Some Examples:",id:"some-examples",level:4},{value:"Public &amp; Private Routes",id:"public--private-routes",level:2},{value:"Public Routes:",id:"public-routes",level:4},{value:"Private Routes:",id:"private-routes",level:4}],u={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,a.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://laravel.com/docs/routing"},"Routes")," are responsible for mapping incoming HTTP requests to their corresponding controller functions."),(0,o.yg)("p",null,"To generate new routes you may use the ",(0,o.yg)("inlineCode",{parentName:"p"},"apiato:generate:route")," interactive command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"php artisan apiato:generate:route\n")),(0,o.yg)("h2",{id:"definition--principles"},"Definition & Principles"),(0,o.yg)("p",null,"Read ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#definitions--principles"},(0,o.yg)("strong",{parentName:"a"},"Porto SAP Documentation (#Routes)")),"."),(0,o.yg)("h2",{id:"rules"},"Rules"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"All API Routes:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"MUST be placed in the ",(0,o.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/API/Routes")," directory."),(0,o.yg)("li",{parentName:"ul"},"MUST follow a specific ",(0,o.yg)("a",{parentName:"li",href:"#api-routes"},"naming convention"),"."))),(0,o.yg)("li",{parentName:"ul"},"All Web Routes MUST be placed in the ",(0,o.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/WEB/Routes")," directory."),(0,o.yg)("li",{parentName:"ul"},"Each Route file MUST contain only one Route.")),(0,o.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u251c\u2500\u2500 API\n                \u2502   \u2514\u2500\u2500 Routes\n                \u2502       \u251c\u2500\u2500 RouteA.v1.public.php\n                \u2502       \u251c\u2500\u2500 RouteB.v2.public.php\n                \u2502       \u251c\u2500\u2500 RouteC.v1.private.php\n                \u2502       \u2514\u2500\u2500 ...\n                \u2514\u2500\u2500 WEB\n                    \u2514\u2500\u2500 Routes\n                        \u251c\u2500\u2500 main.php\n                        \u2514\u2500\u2500 ...\n")),(0,o.yg)("h2",{id:"code-example"},"Code Example"),(0,o.yg)("p",null,"Routes are defined exactly as you would define them in Laravel."),(0,o.yg)("h2",{id:"route-file-naming-convention"},"Route File Naming Convention"),(0,o.yg)("h3",{id:"api-routes"},"API Routes"),(0,o.yg)("p",null,"API Route files MUST be named based on their functionality, API version and exposure level (public/private)."),(0,o.yg)("h4",{id:"examples-of-valid-api-route-file-names"},"Examples of valid API Route file names:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"CreateOrder.v1.public.php")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"FulfillOrder.v2.public.php")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"CancelOrder.v1.private.php"))),(0,o.yg)("h3",{id:"web-routes"},"Web Routes"),(0,o.yg)("p",null,"Web Route files can have any appropriate name."),(0,o.yg)("h2",{id:"api-versioning"},"API Versioning"),(0,o.yg)("p",null,"Apiato provides a streamlined approach to implementing API versioning within your application.\nThis feature is enabled by default."),(0,o.yg)("p",null,"If you wish to disable API versioning,\nnavigate to the ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," configuration file and set the ",(0,o.yg)("inlineCode",{parentName:"p"},"enable_version_prefix")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("p",null,"Once API versioning is enabled,\nyou can create new API endpoints and define their version numbers directly in the route file names.\nThe route file names must adhere to the following naming convention:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"{endpoint-name}.{version-number}.{endpoint-visibility}.php"))),(0,o.yg)("p",null,"By following to this naming convention,\nthe endpoint inside the specified route file will automatically become accessible by appending the version number to the URL."),(0,o.yg)("h4",{id:"some-examples"},"Some Examples:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Route File Name"),(0,o.yg)("th",{parentName:"tr",align:null},"Route File Content"),(0,o.yg)("th",{parentName:"tr",align:null},"Generated Route"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"CreateOrder.v1.public.php")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Route::post('orders', CreateOrderController::class);")),(0,o.yg)("td",{parentName:"tr",align:null},"[POST]"," ",(0,o.yg)("inlineCode",{parentName:"td"},"http://api.apiato.test/v1/orders"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"CreateOrder.v2.public.php")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Route::post('orders', AnotherCreateOrderController::class);")),(0,o.yg)("td",{parentName:"tr",align:null},"[POST]"," ",(0,o.yg)("inlineCode",{parentName:"td"},"http://api.apiato.test/v2/orders"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"ListOrders.v1.private.php")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"Route::get('orders', ListOrdersController::class);")),(0,o.yg)("td",{parentName:"tr",align:null},"[GET]"," ",(0,o.yg)("inlineCode",{parentName:"td"},"http://api.apiato.test/v1/orders"))))),(0,o.yg)("h2",{id:"public--private-routes"},"Public & Private Routes"),(0,o.yg)("p",null,"Apiato supports two types of endpoints, ",(0,o.yg)("inlineCode",{parentName:"p"},"Public")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Private"),", out of the box.\nMaintaining this distinction enables the generation of separate documentations for each type,\nensuring that your internal API remains private and secure.\nThis feature can be configured through the ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/pacakges/documentation"},"Documentation Generator")," package."),(0,o.yg)("h4",{id:"public-routes"},"Public Routes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Accessible to third parties."),(0,o.yg)("li",{parentName:"ul"},"May or may not require authentication.")),(0,o.yg)("h4",{id:"private-routes"},"Private Routes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Accessible only to your own apps."),(0,o.yg)("li",{parentName:"ul"},"May or may not require authentication.")))}c.isMDXComponent=!0}}]);