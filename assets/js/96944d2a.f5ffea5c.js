"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[6954],{22143:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"miscellaneous/tasks-queuing","title":"Tasks Queuing","description":"* Queues System, which executes the Jobs classes one by one once it receives it or once it\'s scheduled (after being","source":"@site/versioned_docs/version-10.x/miscellaneous/tasks-queuing.md","sourceDirName":"miscellaneous","slug":"/miscellaneous/tasks-queuing","permalink":"/docs/10.x/miscellaneous/tasks-queuing","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/miscellaneous/tasks-queuing.md","tags":[],"version":"10.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1619394104000,"frontMatter":{"title":"Tasks Queuing"},"sidebar":"docs","previous":{"title":"Tasks Scheduling","permalink":"/docs/10.x/miscellaneous/tasks-scheduling"},"next":{"title":"Upgrade Guide","permalink":"/docs/10.x/upgrade-guide"}}');var o=n(74848),i=n(28453);const a={title:"Tasks Queuing"},r=void 0,u={},d=[{value:"Beanstalkd",id:"beanstalkd",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Queues System, which executes the Jobs classes one by one once it receives it or once it's scheduled (after being\nserialized and stored in a string somewhere)."}),"\n",(0,o.jsx)(s.li,{children:"To be able to queue the Jobs you need a Queuing System such as Beanstalkd, Redis, Amazon SQS or simply the DB."}),"\n",(0,o.jsxs)(s.li,{children:['Laravel has a "queue worker" that will process new Jobs as they are pushed onto the queue system, ("queue',":work",'" and\n"queue',":listen",'"). Its job is to push the jobs to the queue system in order to be executed.']}),"\n",(0,o.jsxs)(s.li,{children:['To keep the "queue',":work",'" artisan command, running permanently in the background, you should use a\nprocess monitor such as "Supervisor" to ensure that the queue worker does not stop running. It will simply make sure\nto execute the "php artisan queue',":work",'" command.']}),"\n",(0,o.jsx)(s.li,{children:"So its role is to schedule the execution of Artisan Command, Jobs, Event Listeners, and some other classes, at\nspecific intervals or dates using the third party Queueing System."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["The only addition to the Laravel's queues in Apiato, is that by default, apiato detects which queue driver you are\nplanning to use (based on the configs), to create the migration files required, in case type ",(0,o.jsx)(s.code,{children:"database"})," is used."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-php",children:"if (Config::get('queue.default') == 'database')\n{\n   // do something\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["(refer to ",(0,o.jsx)(s.code,{children:"app/Ship/Migrations/"})," folder for more details)."]}),"\n",(0,o.jsx)(s.h2,{id:"beanstalkd",children:"Beanstalkd"}),"\n",(0,o.jsxs)(s.p,{children:["In order to use Beanstalkd as your queue driver, you need to require the ",(0,o.jsx)(s.code,{children:'"pda/pheanstalk": "^4.0"'})," package first. You\ncan include this in any ",(0,o.jsx)(s.code,{children:"composer.json"})," file you want."]}),"\n",(0,o.jsx)(s.admonition,{title:"Further reading",type:"info",children:(0,o.jsxs)(s.p,{children:["More info at ",(0,o.jsx)(s.a,{href:"https://laravel.com/docs/queues",children:"Laravel Docs"}),"."]})})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>r});var t=n(96540);const o={},i=t.createContext(o);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);