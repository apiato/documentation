"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4006],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>d});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},61136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:4,title:"Profiler",tags:["framework-feature","profiler"]},i=void 0,l={unversionedId:"framework-features/profiler",id:"framework-features/profiler",title:"Profiler",description:"Profiling is a crucial aspect of optimizing your application's performance",source:"@site/docs/framework-features/profiler.md",sourceDirName:"framework-features",slug:"/framework-features/profiler",permalink:"/docs/next/framework-features/profiler",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/framework-features/profiler.md",tags:[{label:"framework-feature",permalink:"/docs/next/tags/framework-feature"},{label:"profiler",permalink:"/docs/next/tags/profiler"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Profiler",tags:["framework-feature","profiler"]},sidebar:"tutorialSidebar",previous:{title:"Role Based Access Control",permalink:"/docs/next/framework-features/rbac"},next:{title:"Etag",permalink:"/docs/next/framework-features/etag"}},s={},p=[],u={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.c)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Profiling is a crucial aspect of optimizing your application's performance\nand gaining a deeper insight into the request handling process.\nIt can significantly expedite the debugging process."),(0,a.yg)("p",null,"Apiato incorporates the third-party package ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/barryvdh/laravel-debugbar"},"Laravel Debugbar"),"\nto gather profiling data."),(0,a.yg)("p",null,"By default, this package presents the profiling data directly in the browser.\nNevertheless,\nApiato employs the ",(0,a.yg)("inlineCode",{parentName:"p"},"Apiato\\Core\\Middlewares\\Http\\ProfilerMiddleware")," to include the profiling data in the response."),(0,a.yg)("p",null,"The profiler feature is initially disabled by default.\nTo enable it, you should edit the ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," file and set ",(0,a.yg)("inlineCode",{parentName:"p"},"DEBUGBAR_ENABLED=true"),"."),(0,a.yg)("p",null,"To customize and manage the profiler response,\nyou'll need to make adjustments in the configuration file located at ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Configs/debugbar.php"),"."),(0,a.yg)("p",null,"The following is an example of the profiler response:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "_profiler": {\n        "__meta": {\n            "id": "X167f293230e3457f1bbd95d9c82aba4a",\n            "datetime": "2017-09-22 18:45:27",\n            "utime": 1506105927.799299,\n            "method": "GET",\n            "uri": "/",\n            "ip": "172.20.0.1"\n        },\n        "messages": {\n            "count": 0,\n            "messages": []\n        },\n        "time": {\n            "start": 1506105922.742068,\n            "end": 1506105927.799333,\n            "duration": 5.057265043258667,\n            "duration_str": "5.06s",\n            "measures": [\n                {\n                    "label": "Booting",\n                    "start": 1506105922.742068,\n                    "relative_start": 0,\n                    "end": 1506105923.524004,\n                    "relative_end": 1506105923.524004,\n                    "duration": 0.7819359302520752,\n                    "duration_str": "781.94ms",\n                    "params": [],\n                    "collector": null\n                },\n                {\n                    "label": "Application",\n                    "start": 1506105923.535343,\n                    "relative_start": 0.7932748794555664,\n                    "end": 1506105927.799336,\n                    "relative_end": 0.00000286102294921875,\n                    "duration": 4.26399302482605,\n                    "duration_str": "4.26s",\n                    "params": [],\n                    "collector": null\n                }\n            ]\n        },\n        "memory": {\n            "peak_usage": 13234248,\n            "peak_usage_str": "12.62MB"\n        },\n        "exceptions": {\n            "count": 0,\n            "exceptions": []\n        },\n        "route": {\n            "uri": "GET /",\n            "middleware": "api, throttle:30,1",\n            "domain": "http://api.apiato.test",\n            "as": "apis_root_page",\n            "controller": "App\\\\Containers\\\\Welcome\\\\UI\\\\API\\\\Controllers\\\\Controller@apiRoot",\n            "namespace": "App\\\\Containers\\\\Welcome\\\\UI\\\\API\\\\Controllers",\n            "prefix": "/",\n            "where": [],\n            "file": "app/Containers/Welcome/UI/API/Controllers/Controller.php:20-25"\n        },\n        "queries": {\n            "nb_statements": 0,\n            "nb_failed_statements": 0,\n            "accumulated_duration": 0,\n            "accumulated_duration_str": "0\u03bcs",\n            "statements": []\n        },\n        "logs": {\n            "count": 3,\n            "messages": [\n                {\n                    "message": "...",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "error",\n                    "time": 1506105927.694807\n                },\n                {\n                    "message": "...",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "error",\n                    "time": 1506105927.694811\n                },\n                {\n                    "message": "[2017-09-18 17:38:15] testing.INFO: New User registration. ID = 970ylqvaogmxnbdr | Email = apiato@mail.test.      Thank you for signing up.\\n</div>\\n</body>\\n</html>\\n  \\n",\n                    "message_html": null,\n                    "is_string": false,\n                    "label": "info",\n                    "time": 1506105927.694812\n                }\n            ]\n        },\n        "auth": {\n            "guards": {\n                "web": "array:2 [\\n  \\"name\\" => \\"Guest\\"\\n  \\"user\\" => array:1 [\\n    \\"guest\\" => true\\n  ]\\n]",\n                "api": "array:2 [\\n  \\"name\\" => \\"Guest\\"\\n  \\"user\\" => array:1 [\\n    \\"guest\\" => true\\n  ]\\n]"\n            },\n            "names": ""\n        },\n        "gate": {\n            "count": 0,\n            "messages": []\n        }\n    }\n}\n')))}m.isMDXComponent=!0}}]);