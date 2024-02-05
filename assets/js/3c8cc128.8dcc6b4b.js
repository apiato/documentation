"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2508],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=g(n),c=a,y=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var r=n(45072),a=(n(11504),n(95788));const l={title:"Requests Monitor"},o=void 0,i={unversionedId:"core-features/requests-monitor",id:"version-9.x/core-features/requests-monitor",title:"Requests Monitor",description:"- Enable requests logging",source:"@site/versioned_docs/version-9.x/core-features/requests-monitor.md",sourceDirName:"core-features",slug:"/core-features/requests-monitor",permalink:"/docs/9.x/core-features/requests-monitor",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/requests-monitor.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"Apr 18, 2021",frontMatter:{title:"Requests Monitor"},sidebar:"version-9.x/docs",previous:{title:"Rate Limiting",permalink:"/docs/9.x/core-features/rate-limiting"},next:{title:"Data Caching",permalink:"/docs/9.x/core-features/data-caching"}},s={},g=[{value:"Enable requests logging",id:"enable-requests-logging",level:2},{value:"Usage",id:"usage",level:2},{value:"Result",id:"result",level:2},{value:"Change the default log file",id:"change-the-default-log-file",level:2}],u={toc:g},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#enable-requests-logging"},"Enable requests logging")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#usage"},"Usage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#result"},"Result")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#change-the-default-log-file"},"Change the default log file"))),(0,a.yg)("p",null,"Apiato provides a simple and easy way to monitor and log all the HTTP requests coming to your application."),(0,a.yg)("p",null,"The request monitor can be very useful when testing and debugging your frontend Apps which consume your API. Especially when the frontend apps (Mobile, Web,...) are built by other developers who are far from you."),(0,a.yg)("p",null,"The requests monitor is provided by the Debugger Container, by a ",(0,a.yg)("inlineCode",{parentName:"p"},"RequestsMonitorMiddleware")," middleware."),(0,a.yg)("h2",{id:"enable-requests-logging"},"Enable requests logging"),(0,a.yg)("p",null,"From the ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," file set ",(0,a.yg)("inlineCode",{parentName:"p"},"REQUESTS_DEBUG")," to true."),(0,a.yg)("p",null,"Now in order for this to start displaying the results you need to enable the debugging mode in Laravel by setting ",(0,a.yg)("inlineCode",{parentName:"p"},"APP_DEBUG")," to true in the ",(0,a.yg)("inlineCode",{parentName:"p"},".env")," as well."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("p",null,"Simply tail the log file"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\ntail -f storage/logs/debugger.log\n\n")),(0,a.yg)("h2",{id:"result"},"Result"),(0,a.yg)("p",null,"Screenshot example:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.readme.io/25bf091-requests-debugger.png",alt:null})),(0,a.yg)("h2",{id:"change-the-default-log-file"},"Change the default log file"),(0,a.yg)("p",null,"By default, everything is logged in the ",(0,a.yg)("inlineCode",{parentName:"p"},"debugger.log")," file, to change the default file go to ",(0,a.yg)("inlineCode",{parentName:"p"},"Debugger/Configs/debugger.php")," config file and set the file name:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\n/*\n\n |--------------------------------------------------------------------------\n | Log File\n |--------------------------------------------------------------------------\n |\n | What to name the log file in the `storage/log` path.\n |\n */\n\n'log_file' => 'debugger.log',\n\n")),(0,a.yg)("p",null,"This feature is provided by the ",(0,a.yg)("inlineCode",{parentName:"p"},"Debugger")," Container via its ",(0,a.yg)("inlineCode",{parentName:"p"},"RequestsMonitorMiddleware")," middleware."),(0,a.yg)("p",null,"To see the results go ahead and Tail the default Laravel debug file ",(0,a.yg)("inlineCode",{parentName:"p"},"tail -f storage/logs/laravel.log"),"."),(0,a.yg)("p",null,"Note: this will also not run in Testing environments, to enable it you need to manually edit the Middleware."))}d.isMDXComponent=!0}}]);