"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8564],{95788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>m});var r=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||a;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},97360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(45072),o=(t(11504),t(95788));const a={sidebar_position:4,title:"Request Lifecycle",tags:["architecture","porto","lifecycle"]},i=void 0,l={unversionedId:"architecture-concepts/request-lifecycle",id:"version-12.x/architecture-concepts/request-lifecycle",title:"Request Lifecycle",description:'When using any tool in the "real world", you feel more confident if you understand how that tool works.',source:"@site/versioned_docs/version-12.x/architecture-concepts/request-lifecycle.md",sourceDirName:"architecture-concepts",slug:"/architecture-concepts/request-lifecycle",permalink:"/docs/architecture-concepts/request-lifecycle",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/architecture-concepts/request-lifecycle.md",tags:[{label:"architecture",permalink:"/docs/tags/architecture"},{label:"porto",permalink:"/docs/tags/porto"},{label:"lifecycle",permalink:"/docs/tags/lifecycle"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Request Lifecycle",tags:["architecture","porto","lifecycle"]},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/docs/architecture-concepts/components"},next:{title:"Framework Features",permalink:"/docs/framework-features/"}},s={},c=[{value:"Request Lifecycle Diagram",id:"request-lifecycle-diagram",level:2},{value:"Legend:",id:"legend",level:4}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,'When using any tool in the "real world", you feel more confident if you understand how that tool works.\nApplication development is no different.\nWhen you understand how your development tools function, you feel more comfortable and confident using them.'),(0,o.yg)("p",null,"The following steps describe a basic API call scenario:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The User calls an ",(0,o.yg)("inlineCode",{parentName:"li"},"Endpoint")," in a ",(0,o.yg)("inlineCode",{parentName:"li"},"Route")," file."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Endpoint")," calls a ",(0,o.yg)("inlineCode",{parentName:"li"},"Middleware")," to handle the Authentication."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Endpoint")," calls its corresponding ",(0,o.yg)("inlineCode",{parentName:"li"},"Controller")," function."),(0,o.yg)("li",{parentName:"ol"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"Request")," object, which is injected in the ",(0,o.yg)("inlineCode",{parentName:"li"},"Controller"),", applies the request validation and authorization rules."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Controller")," calls an ",(0,o.yg)("inlineCode",{parentName:"li"},"Action")," and passes the data from the ",(0,o.yg)("inlineCode",{parentName:"li"},"Request")," object to it."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Action")," executes the business logic or call as many ",(0,o.yg)("inlineCode",{parentName:"li"},"Tasks")," as needed."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Tasks")," execute reusable subsets of the business logic."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Action")," prepares the data to be returned to the ",(0,o.yg)("inlineCode",{parentName:"li"},"Controller"),", and may collect data from the ",(0,o.yg)("inlineCode",{parentName:"li"},"Tasks")," if needed."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"Controller")," builds the response using a ",(0,o.yg)("inlineCode",{parentName:"li"},"View")," or ",(0,o.yg)("inlineCode",{parentName:"li"},"Transformer"),", and sends it back to the User.")),(0,o.yg)("p",null,"It is important to note that the ",(0,o.yg)("inlineCode",{parentName:"p"},"Request")," object handles request validation and authorization rules,\nwhile the ",(0,o.yg)("inlineCode",{parentName:"p"},"Action")," executes the business logic.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"Tasks")," can be used to execute reusable subsets of the business logic,\nwith each ",(0,o.yg)("inlineCode",{parentName:"p"},"Task")," responsible for a single portion of the main ",(0,o.yg)("inlineCode",{parentName:"p"},"Action"),".\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"View")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"Transformer")," is used to build the response that is sent back to the User."),(0,o.yg)("h2",{id:"request-lifecycle-diagram"},"Request Lifecycle Diagram"),(0,o.yg)("h4",{id:"legend"},"Legend:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Solid Line: Mandatory dependency (always used)"),(0,o.yg)("li",{parentName:"ul"},"Doted Line: Optional dependency (not always used)"),(0,o.yg)("li",{parentName:"ul"},"Red Solid Border: Response generation"),(0,o.yg)("li",{parentName:"ul"},"Green Dashed Border: Optional component (not always used)")),(0,o.yg)("mermaid",{value:"graph TD\n  classDef dashedBorder stroke:#0f0,stroke-dasharray: 5 5;\n  classDef response stroke:red,stroke-width:2px;\n  subgraph Container\n    WebRoute[Web Route]\n    WebMiddleware[Middleware]\n    WebRequest[\\Request/]\n    WebController{Controller}\n    WebAction[Action]\n    \n    CLI[CLI]\n    Command\n    CLIAction[Action]\n    \n    SubAction[SubAction]\n    \n    APIRoute[API Route]\n    APIMiddleware[Middleware]\n    APIRequest[\\Request/]\n    APIController{Controller}\n    APIAction[Action]\n    \n    TaskA[Task]\n    TaskB[Task]\n    TaskC[Task]\n    TaskD[Task]\n    TaskE[Task]\n    \n    Job[Job]\n    \n    View[\\View\\]:::response\n    Transformer[/Transformer/]:::response\n    \n    RepositoryA[Repository]\n    RepositoryB[Repository]\n    \n    ModelA[Model]\n    ModelB[Model]\n    \n    ValueObject[Value Object]\n    \n    Event[Event]\n    ListenerA[Listener]\n    ListenerB[Listener]\n  end\n  \n  WebRoute[Web Route]--\x3eWebMiddleware\n  WebMiddleware--\x3eWebRequest\n  WebRequest--\x3eWebController\n  WebController--\x3eView\n  WebController<--\x3eWebAction\n  WebAction<-..->TaskA{{Task}}\n  WebAction<-.->SubAction\n  \n  APIRoute[API Route]--\x3eAPIMiddleware\n  APIMiddleware--\x3eAPIRequest\n  APIRequest--\x3eAPIController\n  APIController<--\x3eAPIAction\n  APIController--\x3eTransformer\n  APIAction<-..->TaskD{{Task}}\n  APIAction<-..->TaskE{{Task}}\n  APIAction-.->Job:::dashedBorder\n  \n  CLI[CLI]----\x3eCommand[[Command]]\n  Command--\x3eCLIAction\n  CLIAction<-.->SubAction:::dashedBorder\n  CLIAction<-..->TaskD{{Task}}\n  \n  SubAction<-.->TaskB{{Task}}\n  SubAction<-.->TaskC{{Task}}\n  \n  TaskA-.-RepositoryA[(Repository)]:::dashedBorder\n  TaskB-.-RepositoryA[(Repository)]:::dashedBorder\n  TaskC-.-RepositoryB[(Repository)]:::dashedBorder\n  TaskD-.-RepositoryB[(Repository)]:::dashedBorder\n  \n  RepositoryA-.-ModelA\n  RepositoryB-.-ModelB\n  \n  ModelA(((Model)))-.-ValueObject[/ValueObject\\]:::dashedBorder\n  ModelB(((Model)))-.-ValueObject[/ValueObject\\]:::dashedBorder\n  \n  TaskE-.->Event:::dashedBorder\n  Event-.-ListenerA([Listener]):::dashedBorder\n  Event-.-ListenerB([Listener]):::dashedBorder\n  \n  Web--request--\x3eFramework\n  Mobile--request--\x3eFramework\n  etc[etc...]--request--\x3eFramework\n  Framework--\x3eWebRoute((Web Route))\n  Framework--\x3eCLI((CLI))\n  Framework--\x3eAPIRoute((API Route))"}))}p.isMDXComponent=!0}}]);