"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[2048],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}},92178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"core-features/requests-monitor","title":"Requests Monitor","description":"- Enable requests logging","source":"@site/versioned_docs/version-9.x/core-features/requests-monitor.md","sourceDirName":"core-features","slug":"/core-features/requests-monitor","permalink":"/docs/9.x/core-features/requests-monitor","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/requests-monitor.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618748235000,"frontMatter":{"title":"Requests Monitor"},"sidebar":"docs","previous":{"title":"Rate Limiting","permalink":"/docs/9.x/core-features/rate-limiting"},"next":{"title":"Data Caching","permalink":"/docs/9.x/core-features/data-caching"}}');var i=t(74848),r=t(28453);const l={title:"Requests Monitor"},o=void 0,a={},d=[{value:"Enable requests logging",id:"enable-requests-logging",level:2},{value:"Usage",id:"usage",level:2},{value:"Result",id:"result",level:2},{value:"Change the default log file",id:"change-the-default-log-file",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-requests-logging",children:"Enable requests logging"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#usage",children:"Usage"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#result",children:"Result"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#change-the-default-log-file",children:"Change the default log file"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Apiato provides a simple and easy way to monitor and log all the HTTP requests coming to your application."}),"\n",(0,i.jsx)(n.p,{children:"The request monitor can be very useful when testing and debugging your frontend Apps which consume your API. Especially when the frontend apps (Mobile, Web,...) are built by other developers who are far from you."}),"\n",(0,i.jsxs)(n.p,{children:["The requests monitor is provided by the Debugger Container, by a ",(0,i.jsx)(n.code,{children:"RequestsMonitorMiddleware"})," middleware."]}),"\n",(0,i.jsx)(n.h2,{id:"enable-requests-logging",children:"Enable requests logging"}),"\n",(0,i.jsxs)(n.p,{children:["From the ",(0,i.jsx)(n.code,{children:".env"})," file set ",(0,i.jsx)(n.code,{children:"REQUESTS_DEBUG"})," to true."]}),"\n",(0,i.jsxs)(n.p,{children:["Now in order for this to start displaying the results you need to enable the debugging mode in Laravel by setting ",(0,i.jsx)(n.code,{children:"APP_DEBUG"})," to true in the ",(0,i.jsx)(n.code,{children:".env"})," as well."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Simply tail the log file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\ntail -f storage/logs/debugger.log\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,i.jsx)(n.p,{children:"Screenshot example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://files.readme.io/25bf091-requests-debugger.png",alt:""})}),"\n",(0,i.jsx)(n.h2,{id:"change-the-default-log-file",children:"Change the default log file"}),"\n",(0,i.jsxs)(n.p,{children:["By default, everything is logged in the ",(0,i.jsx)(n.code,{children:"debugger.log"})," file, to change the default file go to ",(0,i.jsx)(n.code,{children:"Debugger/Configs/debugger.php"})," config file and set the file name:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"<?php\n\n/*\n\n |--------------------------------------------------------------------------\n | Log File\n |--------------------------------------------------------------------------\n |\n | What to name the log file in the `storage/log` path.\n |\n */\n\n'log_file' => 'debugger.log',\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This feature is provided by the ",(0,i.jsx)(n.code,{children:"Debugger"})," Container via its ",(0,i.jsx)(n.code,{children:"RequestsMonitorMiddleware"})," middleware."]}),"\n",(0,i.jsxs)(n.p,{children:["To see the results go ahead and Tail the default Laravel debug file ",(0,i.jsx)(n.code,{children:"tail -f storage/logs/laravel.log"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Note: this will also not run in Testing environments, to enable it you need to manually edit the Middleware."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);