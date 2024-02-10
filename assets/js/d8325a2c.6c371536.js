"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4028],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(45072),o=(t(11504),t(95788));const a={title:"Jobs"},i=void 0,l={unversionedId:"optional-components/jobs",id:"version-9.x/optional-components/jobs",title:"Jobs",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/jobs.md",sourceDirName:"optional-components",slug:"/optional-components/jobs",permalink:"/docs/9.x/optional-components/jobs",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/jobs.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"Apr 10, 2021",frontMatter:{title:"Jobs"},sidebar:"version-9.x/docs",previous:{title:"Commands",permalink:"/docs/9.x/optional-components/commands"},next:{title:"Languages",permalink:"/docs/9.x/optional-components/languages"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Execute Jobs Execution",id:"execute-jobs-execution",level:3}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#definition"},"Definition")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#principles"},"Principles")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#execute-jobs-execution"},"Execute Jobs Execution"))),(0,o.yg)("h3",{id:"definition"},"Definition"),(0,o.yg)("p",null,"Jobs:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"are simple classes that can do one thing or multiple related things. "),(0,o.yg)("li",{parentName:"ul"},"Job is a name given to a class that is usually created to be queued (it's execution is usually deferred for later, after the execution of previous Jobs are completed)."),(0,o.yg)("li",{parentName:"ul"},"Jobs can be scheduled to be executed later by a queuing mechanism (queue system like beanstalkd)."),(0,o.yg)("li",{parentName:"ul"},"When a Job class is dispatched, it performs its specific job and dies."),(0,o.yg)("li",{parentName:"ul"},"Laravel's queue worker will process every Job as it's pushed onto the queue.")),(0,o.yg)("p",null,"More info ",(0,o.yg)("a",{parentName:"p",href:"https://laravel.com/docs/queues"},"here"),"."),(0,o.yg)("h3",{id:"principles"},"Principles"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A Container MAY have more than one Job.")),(0,o.yg)("h3",{id:"rules"},"Rules"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"All Jobs MUST extend from ",(0,o.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Jobs\\Job"),".")),(0,o.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - Jobs\n                - DoSomethingJob.php\n                - DoSomethingElseJob.php\n")),(0,o.yg)("h3",{id:"code-samples"},"Code Samples"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"CreateAndValidateAddress with third party ",(0,o.yg)("inlineCode",{parentName:"strong"},"Job"),":")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Shipment\\Jobs;\n\nuse App\\Port\\Job\\Abstracts\\Job;\n\nclass CreateAndValidateAddressJob extends Job\n{\n    private $recipients;\n\n    public function __construct(array $recipients)\n    {\n        $this->recipients = $recipients;\n    }\n\n    public function handle()\n    {\n        foreach ($this->recipients as $recipient) {\n            // do whatever you like\n        }\n    }\n}\n")),(0,o.yg)("p",null,"Check the parent Job class."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Usage from ",(0,o.yg)("inlineCode",{parentName:"strong"},"Action"),":")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// using helper function\ndispatch(new CreateAndValidateAddressJob($recipients));\n\n// manually\nApp::make(\\Illuminate\\Contracts\\Bus\\Dispatcher\\Dispatcher::class)->dispatch(New StatusChangedJob($object));\n")),(0,o.yg)("h3",{id:"execute-jobs-execution"},"Execute Jobs Execution"),(0,o.yg)("p",null,"For running your Jobs checkout the ",(0,o.yg)("a",{parentName:"p",href:".././miscellaneous/tasks-queuing"},"Tasks Queuing")," page."))}d.isMDXComponent=!0}}]);