"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6862],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7392:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"Tasks"},i=void 0,s={unversionedId:"main-components/tasks",id:"version-10.x/main-components/tasks",title:"Tasks",description:"- Definition & Principles",source:"@site/versioned_docs/version-10.x/main-components/tasks.md",sourceDirName:"main-components",slug:"/main-components/tasks",permalink:"/docs/10.x/main-components/tasks",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/main-components/tasks.md",tags:[],version:"10.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Tasks"},sidebar:"version-10.x/docs",previous:{title:"Actions",permalink:"/docs/10.x/main-components/actions"},next:{title:"Models",permalink:"/docs/10.x/main-components/models"}},l={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Task",id:"task",level:4},{value:"Task usage from an Action",id:"task-usage-from-an-action",level:4}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,a.kt)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Tasks"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Tasks)")),"."),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All Tasks MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tasks\\Task"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Tasks\n                    - ConfirmUserEmailTask.php\n                    - GenerateEmailConfirmationUrlTask.php\n                    - SendConfirmationEmailTask.php\n                    - ValidateConfirmationCodeTask.php\n                    - SetUserEmailTask.php\n                    - ...\n")),(0,a.kt)("h3",{id:"code-sample"},"Code Sample"),(0,a.kt)("h4",{id:"task"},"Task"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class FindUserByIdTask extends Task\n{\n    private $userRepository;\n\n    public function __construct(UserRepository $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run($id)\n    {\n        try {\n            $user = $this->userRepository->find($id);\n        } catch (Exception $e) {\n            throw new UserNotFoundException();\n        }\n\n        return $user;\n    }\n}\n")),(0,a.kt)("h4",{id:"task-usage-from-an-action"},"Task usage from an Action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class ValidateUserEmailByConfirmationCodeAction extends Action\n{\n    public function run($userId, $code)\n    {\n        app(ValidateConfirmationCodeTask::class)->run($userId, $code);\n        $user = app(FindUserByIdTask::class)->run($userId);\n        app(ConfirmUserEmailTask::class)->run($user);\n    }\n}\n")))}m.isMDXComponent=!0}}]);