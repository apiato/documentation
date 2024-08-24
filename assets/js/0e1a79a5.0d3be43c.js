"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3686],{87511:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),o=t(28453);const s={sidebar_position:4,title:"Actions",tags:["component","main-component","action","controller","request"]},a=void 0,c={id:"components/main-components/actions",title:"Actions",description:"Actions serve as the embodiment of the application's Use Cases,",source:"@site/versioned_docs/version-12.x/components/main-components/actions.md",sourceDirName:"components/main-components",slug:"/components/main-components/actions",permalink:"/docs/components/main-components/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/actions.md",tags:[{inline:!0,label:"component",permalink:"/docs/tags/component"},{inline:!0,label:"main-component",permalink:"/docs/tags/main-component"},{inline:!0,label:"action",permalink:"/docs/tags/action"},{inline:!0,label:"controller",permalink:"/docs/tags/controller"},{inline:!0,label:"request",permalink:"/docs/tags/request"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591e3,sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Actions",tags:["component","main-component","action","controller","request"]},sidebar:"tutorialSidebar",previous:{title:"Requests",permalink:"/docs/components/main-components/requests"},next:{title:"Tasks",permalink:"/docs/components/main-components/tasks"}},r={},l=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Calling multiple Tasks",id:"calling-multiple-tasks",level:4},{value:"Handling Transactions",id:"handling-transactions",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"Actions serve as the embodiment of the application's Use Cases,\nencapsulating the various operations that users or software can execute within the application."}),"\n",(0,i.jsxs)(e.p,{children:["To generate new actions you may use the ",(0,i.jsx)(e.code,{children:"apiato:generate:action"})," interactive command:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"php artisan apiato:generate:action\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Additionally, to retrieve a list of the existing actions in your Apiato application,\nuse the ",(0,i.jsx)(e.code,{children:"apiato:list:actions"})," command."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"php artisan apiato:list:actions\n"})}),"\n",(0,i.jsx)(e.h2,{id:"definition--principles",children:"Definition & Principles"}),"\n",(0,i.jsxs)(e.p,{children:["Read ",(0,i.jsx)(e.a,{href:"https://github.com/Mahmoudz/Porto#definitions--principles",children:(0,i.jsx)(e.strong,{children:"Porto SAP Documentation (#Actions)"})}),"."]}),"\n",(0,i.jsx)(e.h2,{id:"rules",children:"Rules"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["All Actions:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["MUST be placed in the ",(0,i.jsx)(e.code,{children:"app/Containers/{Section}/{Container}/Actions"})," directory."]}),"\n",(0,i.jsxs)(e.li,{children:["MUST extend the ",(0,i.jsx)(e.code,{children:"App\\Ship\\Parents\\Actions\\Action"})," class.","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The parent extension SHOULD be aliased as ",(0,i.jsx)(e.code,{children:"ParentAction"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"The same Action MAY be called by multiple Controllers (API, Web, CLI)"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Actions\n                \u251c\u2500\u2500 CreateResourceAction.php\n                \u251c\u2500\u2500 DeleteResourceAction.php\n                \u2514\u2500\u2500 ...\n"})}),"\n",(0,i.jsx)(e.h2,{id:"code-example",children:"Code Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-php",children:"use ...\nuse App\\Ship\\Parents\\Actions\\Action as ParentAction;\n\nclass DemoAction extends ParentAction\n{\n    public function __construct(\n        private readonly DemoTask $demoTask\n    ) {\n    }\n\n    public function run(DemoRequest $request)\n    {\n        return $this->demoTask->run();\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"calling-multiple-tasks",children:"Calling multiple Tasks"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-php",children:"use ...\nuse App\\Ship\\Parents\\Actions\\Action as ParentAction;\n\nclass DemoAction extends ParentAction\n{\n    public function __construct(\n        private readonly DemoATask $demoATask,\n        private readonly DemoBTask $demoBTask\n    ) {\n    }\n    \n    public function run($xxx, $yyy, $zzz): void\n    {\n        $foo = $this->demoATask->run($xxx, $yyy);\n        $bar = $this->demoBTask->run($zzz);\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"handling-transactions",children:"Handling Transactions"}),"\n",(0,i.jsxs)(e.p,{children:["In certain scenarios, you may need to wrap a specific call within a ",(0,i.jsx)(e.code,{children:"Database Transaction"})," to ensure data integrity\n(see ",(0,i.jsx)(e.a,{href:"https://laravel.com/docs/master/database#database-transactions",children:"Laravel Documentation"}),")."]}),"\n",(0,i.jsxs)(e.p,{children:["Apiato offers a ",(0,i.jsx)(e.code,{children:"transactionalRun"})," method,\nwhich internally wraps the ",(0,i.jsx)(e.code,{children:"run"})," method of the action within a ",(0,i.jsx)(e.code,{children:"DB::Transaction"}),' and passes all the parameters "as is"\nto it.']}),"\n",(0,i.jsxs)(e.p,{children:["The beauty of using the ",(0,i.jsx)(e.code,{children:"transactionalRun"})," method is\nthat if any ",(0,i.jsx)(e.code,{children:"Exception"})," occurs during the execution of the ",(0,i.jsx)(e.code,{children:"run"})," method,\neverything performed in this context is automatically rolled back from the database.\nHowever, it's important to note that not all operations may be automatically rolled back.\nFor example, file system operations,\nsuch as uploading an image, are typically not covered by the database transaction and would need to be handled manually."]})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);