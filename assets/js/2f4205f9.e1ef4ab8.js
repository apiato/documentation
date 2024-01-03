"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2,title:"Controllers",tags:["component","main-component","controller","action","view","request","route","transformer"]},l=void 0,i={unversionedId:"components/main-components/controllers",id:"version-12.x/components/main-components/controllers",title:"Controllers",description:"Controllers are tasked with two primary responsibilities:",source:"@site/versioned_docs/version-12.x/components/main-components/controllers.md",sourceDirName:"components/main-components",slug:"/components/main-components/controllers",permalink:"/docs/components/main-components/controllers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/controllers.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"main-component",permalink:"/docs/tags/main-component"},{label:"controller",permalink:"/docs/tags/controller"},{label:"action",permalink:"/docs/tags/action"},{label:"view",permalink:"/docs/tags/view"},{label:"request",permalink:"/docs/tags/request"},{label:"route",permalink:"/docs/tags/route"},{label:"transformer",permalink:"/docs/tags/transformer"}],version:"12.x",lastUpdatedBy:"Sean Poynter-Smith",lastUpdatedAt:1704288284,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Controllers",tags:["component","main-component","controller","action","view","request","route","transformer"]},sidebar:"tutorialSidebar",previous:{title:"Routes",permalink:"/docs/components/main-components/routes"},next:{title:"Requests",permalink:"/docs/components/main-components/requests"}},s={},p=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"API Controller",id:"api-controller",level:4},{value:"Web Controller",id:"web-controller",level:4},{value:"Response Helpers Methods",id:"response-helpers-methods",level:2},{value:"transform",id:"transform",level:3},{value:"withMeta",id:"withmeta",level:3},{value:"json",id:"json",level:3},{value:"created",id:"created",level:3},{value:"deleted",id:"deleted",level:3},{value:"accepted",id:"accepted",level:3},{value:"noContent",id:"nocontent",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/controllers"},"Controllers")," are tasked with two primary responsibilities:\nserving the requested data and constructing the corresponding response."),(0,a.kt)("p",null,"To generate new controllers\nyou may use the ",(0,a.kt)("inlineCode",{parentName:"p"},"apiato:generate:controller")," interactive command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"php artisan apiato:generate:controller\n")),(0,a.kt)("h2",{id:"definition--principles"},"Definition & Principles"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#definitions--principles"},(0,a.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Controllers)")),"."),(0,a.kt)("h2",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All API Controllers:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/API/Controllers")," directory."),(0,a.kt)("li",{parentName:"ul"},"MUST extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\ApiController")," class."),(0,a.kt)("li",{parentName:"ul"},"MUST format their responses via a ",(0,a.kt)("a",{parentName:"li",href:"/docs/components/main-components/transformers"},"Transformer"),"."))),(0,a.kt)("li",{parentName:"ul"},"All Web Controllers:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,a.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/WEB/Controllers")," directory."),(0,a.kt)("li",{parentName:"ul"},"MUST extend the ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Controllers\\WebController")," class."))),(0,a.kt)("li",{parentName:"ul"},"Controllers:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MUST only call the ",(0,a.kt)("inlineCode",{parentName:"li"},"run")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"transactionalRun")," method of Actions."),(0,a.kt)("li",{parentName:"ul"},"SHOULD pass the Request object to the Action instead of passing data from the request.")))),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u251c\u2500\u2500 API\n                \u2502   \u2514\u2500\u2500 Controllers\n                \u2502       \u251c\u2500\u2500 ControllerA.php\n                \u2502       \u251c\u2500\u2500 ControllerB.php\n                \u2502       \u2514\u2500\u2500 ...\n                \u2514\u2500\u2500 WEB\n                    \u2514\u2500\u2500 Controllers\n                        \u251c\u2500\u2500 ControllerA.php\n                        \u251c\u2500\u2500 ControllerB.php\n                        \u2514\u2500\u2500 ...\n")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)("h4",{id:"api-controller"},"API Controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Ship\\Parents\\Controllers\\ApiController;\n\nclass Controller extends ApiController\n{\n    public function __construct(\n        private readonly SampleAction $sampleAction,\n    ) {\n    }\n    \n    public function __invoke(SampleRequest $request): array\n    {\n        $sample = $this->sampleAction->run($request);\n        \n        return $this->transform($sample, SampleTransformer::class);\n    }\n}\n")),(0,a.kt)("h4",{id:"web-controller"},"Web Controller"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Ship\\Parents\\Controllers\\WebController;\n\nclass Controller extends WebController\n{\n    public function show(): Factory|View|Application\n    {\n        return view('sectionName@containerName::view-name');\n    }\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In case you want to handle the same Action differently based on the UI type (e.g., API, Web, CLI), you can set the\nUI on Action with ",(0,a.kt)("inlineCode",{parentName:"p"},"setUI")," method."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$action = app(Action::class);\n$action->setUI('web');\n")),(0,a.kt)("p",{parentName:"admonition"},"and get the UI in your Action with ",(0,a.kt)("inlineCode",{parentName:"p"},"getUI")," method."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$action->getUI(); // will return 'web'\n"))),(0,a.kt)("h2",{id:"response-helpers-methods"},"Response Helpers Methods"),(0,a.kt)("h3",{id:"transform"},"transform"),(0,a.kt)("p",null,"This method is incredibly useful and will be used in most cases."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first required parameter accepts data as an object or a Collection of objects."),(0,a.kt)("li",{parentName:"ul"},"The second required parameter is the transformer class."),(0,a.kt)("li",{parentName:"ul"},"The third optional parameter allows you to specify the ",(0,a.kt)("a",{parentName:"li",href:"/docs/components/main-components/transformers#including-relationships"},"includes")," that should be returned in the response."),(0,a.kt)("li",{parentName:"ul"},"The fourth optional parameter lets you include metadata in the response. This metadata will be returned under the ",(0,a.kt)("inlineCode",{parentName:"li"},"meta")," key in the ",(0,a.kt)("inlineCode",{parentName:"li"},"custom")," key.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// With Includes\n$this->transform($resource, ResourceTransformer::class, ['foo', 'bar']);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'// With Meta\n$this->transform($resource, ResourceTransformer::class, meta: [\'foo\' => \'bar\', \'baz\' => 1]);\n\n// Response\n{\n  "data": {},\n  "meta": {\n    "include": [...],\n    "custom": {\n      "foo": "bar",\n      "baz": 1\n    },\n    "pagination": {}\n  }\n}\n')),(0,a.kt)("h3",{id:"withmeta"},"withMeta"),(0,a.kt)("p",null,"This method enables you to add metadata to the response,\nand it MUST be used in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," method.\nThis is different from the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," parameter in the ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," method.\nThis metadata will be returned directly under the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," key."),(0,a.kt)("p",null,"You can use this method in conjunction with the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," parameter in the ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$metaData = [\'foo\' => 999, \'bar\'];\n\n$this->withMeta($metaData)->transform($sample, SampleTransformer::class, meta: [\'foo\' => \'bar\', \'baz\' => 1]);\n\n// Response\n{\n  "data": {},\n    "meta": {\n      "foo": 999,\n      "0": "bar",\n      "include": [...],\n      "custom": {\n        "foo": "bar",\n        "baz": 1\n      },\n      "pagination": {}\n  }\n}\n')),(0,a.kt)("h3",{id:"json"},"json"),(0,a.kt)("p",null,"This method allows you to pass an array of data that will be represented as JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->json($data)\n")),(0,a.kt)("h3",{id:"created"},"created"),(0,a.kt)("p",null,"This method allows you to return a response with a ",(0,a.kt)("inlineCode",{parentName:"p"},"201")," status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->created($data)\n")),(0,a.kt)("h3",{id:"deleted"},"deleted"),(0,a.kt)("p",null,"This method allows you to return a response with a ",(0,a.kt)("inlineCode",{parentName:"p"},"202")," status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$this->deleted($deletedModel)\n\n// Response\n{\n  "message": "Model (1) Deleted Successfully."\n}\n')),(0,a.kt)("h3",{id:"accepted"},"accepted"),(0,a.kt)("p",null,"This method allows you to return a response with a ",(0,a.kt)("inlineCode",{parentName:"p"},"202")," status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->accepted($data)\n")),(0,a.kt)("h3",{id:"nocontent"},"noContent"),(0,a.kt)("p",null,"This method allows you to return a response with a ",(0,a.kt)("inlineCode",{parentName:"p"},"204")," status code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$this->noContent()\n")))}d.isMDXComponent=!0}}]);