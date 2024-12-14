"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4351],{47128:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"miscellaneous/tasks-scheduling","title":"Tasks Scheduling","description":"* Tasks Scheduler is a script executor program, such as \\"Cron Job\\". (Cron Job is a time-based script scheduler in Unix-like computer","source":"@site/versioned_docs/version-11.x/miscellaneous/tasks-scheduling.md","sourceDirName":"miscellaneous","slug":"/miscellaneous/tasks-scheduling","permalink":"/docs/11.x/miscellaneous/tasks-scheduling","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/miscellaneous/tasks-scheduling.md","tags":[],"version":"11.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1659346629000,"frontMatter":{"title":"Tasks Scheduling"},"sidebar":"docs","previous":{"title":"Tests Helpers","permalink":"/docs/11.x/miscellaneous/tests-helpers"},"next":{"title":"Tasks Queuing","permalink":"/docs/11.x/miscellaneous/tasks-queuing"}}');var o=n(74848),i=n(28453);const r={title:"Tasks Scheduling"},l=void 0,a={},c=[{value:"Server Setup",id:"server-setup",level:3},{value:"App Setup",id:"app-setup",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'Tasks Scheduler is a script executor program, such as "Cron Job". (Cron Job is a time-based script scheduler in Unix-like computer\noperating systems).'}),"\n",(0,o.jsx)(s.li,{children:'Tasks Scheduler role is to schedule the execution of CLI Commands "Artisan Commands", periodically at fixed times, dates, or\nintervals.'}),"\n",(0,o.jsx)(s.li,{children:'Laravel has a wrapper around the "Cron Job" called the Laravel scheduler. This allows the framework to schedule\nArtisan Commands and Queued Jobs in addition to custom Shell Commands, to run later.'}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Below is a quick guide for how to schedule some script execution such as (custom Shell Commands, Laravel Commands,\nLaravel ",(0,o.jsx)(s.a,{href:"https://laravel.com/docs/queues",children:"Jobs"}),", and other classes), in order to run at specific intervals or dates."]}),"\n",(0,o.jsx)(s.h3,{id:"server-setup",children:"Server Setup"}),"\n",(0,o.jsx)(s.p,{children:"First let's set it up, by adding our single Cron entry, on the server. As follows:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Type ",(0,o.jsx)(s.code,{children:"crontab -e"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["At the last line add the following: ",(0,o.jsx)(s.code,{children:"* * * * * php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Don't forget to replace the ",(0,o.jsx)(s.em,{children:"path-to-your-project"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["More details ",(0,o.jsx)(s.a,{href:"https://laravel.com/docs/scheduling#introduction",children:"here"}),"."]}),"\n",(0,o.jsx)(s.h3,{id:"app-setup",children:"App Setup"}),"\n",(0,o.jsxs)(s.p,{children:["First you need to create some commands that needs to be scheduled.\nThey can be created in the Containers ",(0,o.jsx)(s.code,{children:"(app/Containers/{section-name}/{container-name}/UI/CLI/Commands)"})," or in the Ship (",(0,o.jsx)(s.code,{children:"app/Ship/Commands"}),").\nSee the ",(0,o.jsx)(s.a,{href:"../optional-components/commands",children:"Commands Page"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Once you have your command ready, go to ",(0,o.jsx)(s.code,{children:"app/Ship/Kernels/ConsoleKernel.php"})," and start adding the commands you need\nto schedule inside the ",(0,o.jsx)(s.code,{children:"schedule"})," function."]}),"\n",(0,o.jsx)(s.p,{children:"Example:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-php",children:"protected function schedule(Schedule $schedule)\n{\n     $schedule->command('apiato:welcome')->everyMinute();\n     $schedule->job(new myJob)->hourly();\n     $schedule->exec('touch me.txt')->dailyAt('12:00');\n     // ...\n}\n"})}),"\n",(0,o.jsxs)(s.p,{children:["More details ",(0,o.jsx)(s.a,{href:"https://laravel.com/docs/scheduling#defining-schedules",children:"here"}),"."]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsxs)(s.p,{children:["You do not need to register the commands with the ",(0,o.jsx)(s.code,{children:"$commands"})," property or point to them in the ",(0,o.jsx)(s.code,{children:"commands()"}),"\nfunction. Apiato will do that automatically for you."]})}),"\n",(0,o.jsx)(s.admonition,{title:"Further reading",type:"info",children:(0,o.jsxs)(s.p,{children:["More info at ",(0,o.jsx)(s.a,{href:"https://laravel.com/docs/scheduling",children:"Laravel Docs"}),"."]})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(96540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);