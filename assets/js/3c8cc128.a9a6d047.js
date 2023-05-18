"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8886],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=u(n),c=a,f=g["".concat(s,".").concat(c)]||g[c]||d[c]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"Requests Monitor"},o=void 0,i={unversionedId:"core-features/requests-monitor",id:"version-9.x/core-features/requests-monitor",title:"Requests Monitor",description:"- Enable requests logging",source:"@site/versioned_docs/version-9.x/core-features/requests-monitor.md",sourceDirName:"core-features",slug:"/core-features/requests-monitor",permalink:"/docs/9.x/core-features/requests-monitor",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/requests-monitor.md",tags:[],version:"9.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Requests Monitor"},sidebar:"version-9.x/docs",previous:{title:"Rate Limiting",permalink:"/docs/9.x/core-features/rate-limiting"},next:{title:"Data Caching",permalink:"/docs/9.x/core-features/data-caching"}},s={},u=[{value:"Enable requests logging",id:"enable-requests-logging",level:2},{value:"Usage",id:"usage",level:2},{value:"Result",id:"result",level:2},{value:"Change the default log file",id:"change-the-default-log-file",level:2}],p={toc:u},g="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enable-requests-logging"},"Enable requests logging")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#result"},"Result")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#change-the-default-log-file"},"Change the default log file"))),(0,a.kt)("p",null,"Apiato provides a simple and easy way to monitor and log all the HTTP requests coming to your application."),(0,a.kt)("p",null,"The request monitor can be very useful when testing and debugging your frontend Apps which consume your API. Especially when the frontend apps (Mobile, Web,...) are built by other developers who are far from you."),(0,a.kt)("p",null,"The requests monitor is provided by the Debugger Container, by a ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestsMonitorMiddleware")," middleware."),(0,a.kt)("h2",{id:"enable-requests-logging"},"Enable requests logging"),(0,a.kt)("p",null,"From the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file set ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUESTS_DEBUG")," to true."),(0,a.kt)("p",null,"Now in order for this to start displaying the results you need to enable the debugging mode in Laravel by setting ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_DEBUG")," to true in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," as well."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Simply tail the log file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\ntail -f storage/logs/debugger.log\n\n")),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"Screenshot example:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.readme.io/25bf091-requests-debugger.png",alt:null})),(0,a.kt)("h2",{id:"change-the-default-log-file"},"Change the default log file"),(0,a.kt)("p",null,"By default, everything is logged in the ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger.log")," file, to change the default file go to ",(0,a.kt)("inlineCode",{parentName:"p"},"Debugger/Configs/debugger.php")," config file and set the file name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/*\n\n |--------------------------------------------------------------------------\n | Log File\n |--------------------------------------------------------------------------\n |\n | What to name the log file in the `storage/log` path.\n |\n */\n\n'log_file' => 'debugger.log',\n\n")),(0,a.kt)("p",null,"This feature is provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Debugger")," Container via its ",(0,a.kt)("inlineCode",{parentName:"p"},"RequestsMonitorMiddleware")," middleware."),(0,a.kt)("p",null,"To see the results go ahead and Tail the default Laravel debug file ",(0,a.kt)("inlineCode",{parentName:"p"},"tail -f storage/logs/laravel.log"),"."),(0,a.kt)("p",null,"Note: this will also not run in Testing environments, to enable it you need to manually edit the Middleware."))}d.isMDXComponent=!0}}]);