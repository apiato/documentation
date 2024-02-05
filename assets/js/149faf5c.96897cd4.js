"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2352],{95788:(e,n,a)=>{a.d(n,{Iu:()=>p,yg:()=>y});var o=a(11504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=o.createContext({}),m=function(e){var n=o.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},p=function(e){var n=m(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=t,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||r;return a?o.createElement(y,l(l({ref:n},p),{},{components:a})):o.createElement(y,l({ref:n},p))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:t,l[1]=i;for(var m=2;m<r;m++)l[m]=a[m];return o.createElement.apply(null,l)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1732:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var o=a(45072),t=(a(11504),a(95788));const r={title:"Commands"},l=void 0,i={unversionedId:"optional-components/commands",id:"version-11.x/optional-components/commands",title:"Commands",description:"* Definition",source:"@site/versioned_docs/version-11.x/optional-components/commands.md",sourceDirName:"optional-components",slug:"/optional-components/commands",permalink:"/docs/11.x/optional-components/commands",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/commands.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{title:"Commands"},sidebar:"version-11.x/docs",previous:{title:"Helpers",permalink:"/docs/11.x/optional-components/helpers"},next:{title:"Jobs",permalink:"/docs/11.x/optional-components/jobs"}},s={},m=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A Simple Command",id:"a-simple-command",level:4},{value:"Usage from CLI (Terminal)",id:"usage-from-cli-terminal",level:4},{value:"Schedule Commands Execution",id:"Schedule-Commands-Execution",level:3},{value:"Define Consoles Closure Commands",id:"define-consoles-closure-commands",level:3}],p={toc:m},c="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(c,(0,o.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#definition"},"Definition")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#principles"},"Principles")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#Schedule-Commands-Execution"},"Schedule Commands Execution")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"#define-consoles-closure-commands"},"Define Consoles Closure Commands"))),(0,t.yg)("h3",{id:"definition"},"Definition"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Commands are a Laravel artisan command. Laravel has its own default commands, and you can create your own as well."),(0,t.yg)("li",{parentName:"ul"},"Commands provide a way to interact with the Laravel app."),(0,t.yg)("li",{parentName:"ul"},'A Command can be scheduled by a Task scheduler, like Cron Job or by the Laravel built-in wrapper of the Cron Job "laravel scheduler".'),(0,t.yg)("li",{parentName:"ul"},"Commands could be Closure based or Classes."),(0,t.yg)("li",{parentName:"ul"},'"dispatch" is the term that is usually used to call a Command.')),(0,t.yg)("h3",{id:"principles"},"Principles"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Commands.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Every Command SHOULD call an Action to perform its job, and should not contain any business logic.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Ship may contain Application general Commands."))),(0,t.yg)("h3",{id:"rules"},"Rules"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"All Commands MUST extend from ",(0,t.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Commands\\ConsoleCommand"),".")),(0,t.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - UI\n          - CLI\n            - Commands\n              - SayHelloCommand.php\n              - ...\n  - Ship\n    - Commands\n      - GeneralCommand.php\n      - ...\n")),(0,t.yg)("h3",{id:"code-samples"},"Code Samples"),(0,t.yg)("h4",{id:"a-simple-command"},"A Simple Command"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"class HelloWorldCommand extends ConsoleCommand\n{\n    protected $signature = 'hello:world';\n    protected $description = 'Hello World!';\n\n    public function handle()\n    {\n        echo \"Hello World :)\\n\";\n    }\n}\n")),(0,t.yg)("h4",{id:"usage-from-cli-terminal"},"Usage from CLI (Terminal)"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"php artisan hello:world\n")),(0,t.yg)("h3",{id:"Schedule-Commands-Execution"},"Schedule Commands Execution"),(0,t.yg)("p",null,"To Schedule the execution of a Command checkout the ",(0,t.yg)("a",{parentName:"p",href:"../miscellaneous/tasks-scheduling"},"Tasks Scheduling")," page."),(0,t.yg)("h3",{id:"define-consoles-closure-commands"},"Define Consoles Closure Commands"),(0,t.yg)("p",null,"To define Console closure commands go to ",(0,t.yg)("inlineCode",{parentName:"p"},"app/Ship/Commands/closures.php"),"."),(0,t.yg)("admonition",{title:"Further reading",type:"info"},(0,t.yg)("p",{parentName:"admonition"},"More info at ",(0,t.yg)("a",{parentName:"p",href:"https://laravel.com/docs/artisan#writing-commands"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);