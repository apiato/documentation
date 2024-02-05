"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6720],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>y});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(y,r(r({ref:n},p),{},{components:t})):a.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1168:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(45072),o=(t(11504),t(95788));const i={sidebar_position:4,title:"Actions",tags:["component","main-component","action","controller","request"]},r=void 0,s={unversionedId:"components/main-components/actions",id:"version-12.x/components/main-components/actions",title:"Actions",description:"Actions serve as the embodiment of the application's Use Cases,",source:"@site/versioned_docs/version-12.x/components/main-components/actions.md",sourceDirName:"components/main-components",slug:"/components/main-components/actions",permalink:"/docs/components/main-components/actions",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/actions.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"main-component",permalink:"/docs/tags/main-component"},{label:"action",permalink:"/docs/tags/action"},{label:"controller",permalink:"/docs/tags/controller"},{label:"request",permalink:"/docs/tags/request"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Actions",tags:["component","main-component","action","controller","request"]},sidebar:"tutorialSidebar",previous:{title:"Requests",permalink:"/docs/components/main-components/requests"},next:{title:"Tasks",permalink:"/docs/components/main-components/tasks"}},l={},c=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Calling multiple Tasks",id:"calling-multiple-tasks",level:4},{value:"Handling Transactions",id:"handling-transactions",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Actions serve as the embodiment of the application's Use Cases,\nencapsulating the various operations that users or software can execute within the application."),(0,o.yg)("p",null,"To generate new actions you may use the ",(0,o.yg)("inlineCode",{parentName:"p"},"apiato:generate:action")," interactive command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:generate:action\n")),(0,o.yg)("p",null,"Additionally, to retrieve a list of the existing actions in your Apiato application,\nuse the ",(0,o.yg)("inlineCode",{parentName:"p"},"apiato:list:actions")," command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:list:actions\n")),(0,o.yg)("h2",{id:"definition--principles"},"Definition & Principles"),(0,o.yg)("p",null,"Read ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#definitions--principles"},(0,o.yg)("strong",{parentName:"a"},"Porto SAP Documentation (#Actions)")),"."),(0,o.yg)("h2",{id:"rules"},"Rules"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"All Actions:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"MUST be placed in the ",(0,o.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Actions")," directory."),(0,o.yg)("li",{parentName:"ul"},"MUST extend the ",(0,o.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Actions\\Action")," class.",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,o.yg)("inlineCode",{parentName:"li"},"ParentAction"),"."))))),(0,o.yg)("li",{parentName:"ul"},"The same Action MAY be called by multiple Controllers (API, Web, CLI)")),(0,o.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Actions\n                \u251c\u2500\u2500 CreateResourceAction.php\n                \u251c\u2500\u2500 DeleteResourceAction.php\n                \u2514\u2500\u2500 ...\n")),(0,o.yg)("h2",{id:"code-example"},"Code Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Actions\\Action as ParentAction;\n\nclass DemoAction extends ParentAction\n{\n    public function __construct(\n        private readonly DemoTask $demoTask\n    ) {\n    }\n\n    public function run(DemoRequest $request)\n    {\n        return $this->demoTask->run();\n    }\n}\n")),(0,o.yg)("h4",{id:"calling-multiple-tasks"},"Calling multiple Tasks"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Actions\\Action as ParentAction;\n\nclass DemoAction extends ParentAction\n{\n    public function __construct(\n        private readonly DemoATask $demoATask,\n        private readonly DemoBTask $demoBTask\n    ) {\n    }\n    \n    public function run($xxx, $yyy, $zzz): void\n    {\n        $foo = $this->demoATask->run($xxx, $yyy);\n        $bar = $this->demoBTask->run($zzz);\n    }\n}\n")),(0,o.yg)("h2",{id:"handling-transactions"},"Handling Transactions"),(0,o.yg)("p",null,"In certain scenarios, you may need to wrap a specific call within a ",(0,o.yg)("inlineCode",{parentName:"p"},"Database Transaction")," to ensure data integrity\n(see ",(0,o.yg)("a",{parentName:"p",href:"https://laravel.com/docs/master/database#database-transactions"},"Laravel Documentation"),")."),(0,o.yg)("p",null,"Apiato offers a ",(0,o.yg)("inlineCode",{parentName:"p"},"transactionalRun")," method,\nwhich internally wraps the ",(0,o.yg)("inlineCode",{parentName:"p"},"run")," method of the action within a ",(0,o.yg)("inlineCode",{parentName:"p"},"DB::Transaction"),' and passes all the parameters "as is"\nto it.'),(0,o.yg)("p",null,"The beauty of using the ",(0,o.yg)("inlineCode",{parentName:"p"},"transactionalRun")," method is\nthat if any ",(0,o.yg)("inlineCode",{parentName:"p"},"Exception")," occurs during the execution of the ",(0,o.yg)("inlineCode",{parentName:"p"},"run")," method,\neverything performed in this context is automatically rolled back from the database.\nHowever, it's important to note that not all operations may be automatically rolled back.\nFor example, file system operations,\nsuch as uploading an image, are typically not covered by the database transaction and would need to be handled manually."))}u.isMDXComponent=!0}}]);