"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3431],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=a.createContext({}),s=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(m.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,f=c["".concat(m,".").concat(u)]||c[u]||d[u]||r;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const r={title:"Commands"},l=void 0,i={unversionedId:"optional-components/commands",id:"version-11.x/optional-components/commands",title:"Commands",description:"* Definition",source:"@site/versioned_docs/version-11.x/optional-components/commands.md",sourceDirName:"optional-components",slug:"/optional-components/commands",permalink:"/docs/optional-components/commands",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/commands.md",tags:[],version:"11.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Commands"},sidebar:"version-11.x/docs",previous:{title:"Helpers",permalink:"/docs/optional-components/helpers"},next:{title:"Jobs",permalink:"/docs/optional-components/jobs"}},m={},s=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A Simple Command",id:"a-simple-command",level:4},{value:"Usage from CLI (Terminal)",id:"usage-from-cli-terminal",level:4},{value:"Schedule Commands Execution",id:"Schedule-Commands-Execution",level:3},{value:"Define Consoles Closure Commands",id:"define-consoles-closure-commands",level:3}],p={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#Schedule-Commands-Execution"},"Schedule Commands Execution")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#define-consoles-closure-commands"},"Define Consoles Closure Commands"))),(0,o.kt)("h3",{id:"definition"},"Definition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commands are a Laravel artisan command. Laravel has its own default commands, and you can create your own as well."),(0,o.kt)("li",{parentName:"ul"},"Commands provide a way to interact with the Laravel app."),(0,o.kt)("li",{parentName:"ul"},'A Command can be scheduled by a Task scheduler, like Cron Job or by the Laravel built-in wrapper of the Cron Job "laravel scheduler".'),(0,o.kt)("li",{parentName:"ul"},"Commands could be Closure based or Classes."),(0,o.kt)("li",{parentName:"ul"},'"dispatch" is the term that is usually used to call a Command.')),(0,o.kt)("h3",{id:"principles"},"Principles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Commands.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Every Command SHOULD call an Action to perform its job, and should not contain any business logic.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ship may contain Application general Commands."))),(0,o.kt)("h3",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All Commands MUST extend from ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Commands\\ConsoleCommand"),".")),(0,o.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - UI\n          - CLI\n            - Commands\n              - SayHelloCommand.php\n              - ...\n  - Ship\n    - Commands\n      - GeneralCommand.php\n      - ...\n")),(0,o.kt)("h3",{id:"code-samples"},"Code Samples"),(0,o.kt)("h4",{id:"a-simple-command"},"A Simple Command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"class HelloWorldCommand extends ConsoleCommand\n{\n    protected $signature = 'hello:world';\n    protected $description = 'Hello World!';\n\n    public function handle()\n    {\n        echo \"Hello World :)\\n\";\n    }\n}\n")),(0,o.kt)("h4",{id:"usage-from-cli-terminal"},"Usage from CLI (Terminal)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan hello:world\n")),(0,o.kt)("h3",{id:"Schedule-Commands-Execution"},"Schedule Commands Execution"),(0,o.kt)("p",null,"To Schedule the execution of a Command checkout the ",(0,o.kt)("a",{parentName:"p",href:"../miscellaneous/tasks-scheduling"},"Tasks Scheduling")," page."),(0,o.kt)("h3",{id:"define-consoles-closure-commands"},"Define Consoles Closure Commands"),(0,o.kt)("p",null,"To define Console closure commands go to ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Commands/closures.php"),"."),(0,o.kt)("admonition",{title:"Further reading",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"More info at ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/artisan#writing-commands"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);