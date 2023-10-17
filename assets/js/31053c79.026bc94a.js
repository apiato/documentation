"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={title:"Actions"},o=void 0,l={unversionedId:"main-components/actions",id:"version-11.x/main-components/actions",title:"Actions",description:"- Definition & Principles",source:"@site/versioned_docs/version-11.x/main-components/actions.md",sourceDirName:"main-components",slug:"/main-components/actions",permalink:"/docs/11.x/main-components/actions",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/main-components/actions.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{title:"Actions"},sidebar:"version-11.x/docs",previous:{title:"Requests",permalink:"/docs/11.x/main-components/requests"},next:{title:"Tasks",permalink:"/docs/11.x/main-components/tasks"}},s={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Action",id:"action",level:4},{value:"Calling multiple Tasks",id:"calling-multiple-tasks",level:4},{value:"Usage from a Controller",id:"usage-from-a-controller",level:4},{value:"Transactional Run",id:"transactional-run",level:3}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transactional-run"},"Transactional Run"))),(0,r.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Actions"},(0,r.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Actions)")),"."),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Actions MUST extend ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Actions\\Action"),".")),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Actions\n                    - CreateUserAction.php\n                    - DeleteUserAction.php\n                    - ...\n")),(0,r.kt)("h3",{id:"code-sample"},"Code Sample"),(0,r.kt)("h4",{id:"action"},"Action"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class CreateAdminAction extends Action\n{\n    public function run(string $email, string $password, string $name, bool $isClient = false): User\n    {\n        $admin = app(CreateUserByCredentialsTask::class)->run(\n            $isClient,\n            $email,\n            $password,\n            $name\n        );\n\n        app(AssignUserToRoleTask::class)->run($admin, ['admin']);\n\n        return $admin;\n    }\n}\n")),(0,r.kt)("h4",{id:"calling-multiple-tasks"},"Calling multiple Tasks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class DemoAction extends Action\n{\n    public function run($xxx, $yyy, $zzz)\n    {\n        $foo = app(Sample111Task::class)->run($xxx, $yyy);\n        $bar = app(Sample222Task::class)->run($zzz);\n    }\n}\n")),(0,r.kt)("h4",{id:"usage-from-a-controller"},"Usage from a Controller"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"    public function deleteUser(DeleteUserRequest $request)\n    {\n        $user = app(DeleteUserAction::class)->run($request);\n        return $this->deleted($user);\n    }\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The same Action MAY be called by multiple Controllers (Web, Api, Cli).")),(0,r.kt)("h3",{id:"transactional-run"},"Transactional Run"),(0,r.kt)("p",null,"Sometimes, you want to wrap a call into one ",(0,r.kt)("inlineCode",{parentName:"p"},"Database Transaction")," (see\n",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/database#database-transactions"},"Laravel Documentation"),")."),(0,r.kt)("p",null,"Consider the following example: You want to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Team")," and automatically assign yourself (i.e., your own\n",(0,r.kt)("inlineCode",{parentName:"p"},"User"),") to this newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"Team"),". Your ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateTeamAction")," may call a dedicated ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateTeamTask")," and a\n",(0,r.kt)("inlineCode",{parentName:"p"},"AssignMemberToTeamTask")," afterwards."),(0,r.kt)("p",null,"However, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"AssignMemberToTeamTask"),' fails, for unknown reasons, you may want to "rollback" (i.e., remove) the\nnewly created ',(0,r.kt)("inlineCode",{parentName:"p"},"Team")," from the database in order to keep the database in a valid state."),(0,r.kt)("p",null,"That's where ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::transactions")," comes into play!"),(0,r.kt)("p",null,"Apiato provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionalRun(...$arguments)")," method which internally just wraps the ",(0,r.kt)("inlineCode",{parentName:"p"},"run()")," method of the action in a ",(0,r.kt)("inlineCode",{parentName:"p"},"DB::Transaction")," and passes all the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"as is")," to it."),(0,r.kt)("p",null,"If any ",(0,r.kt)("inlineCode",{parentName:"p"},"Exception")," occurs during the execution of the ",(0,r.kt)("inlineCode",{parentName:"p"},"run()"),", everything done in this context is\nautomatically rolled-back from the database. However, respective operations on the file system (e.g., you may also\nhave uploaded a profile picture for this ",(0,r.kt)("inlineCode",{parentName:"p"},"Team")," already) need to be performed\nmanually!"),(0,r.kt)("p",null,"Typically, you may want to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"transactionalRun()")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Controller")," level!"))}u.isMDXComponent=!0}}]);