"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7883],{9895:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"components/main-components/controllers","title":"Controllers","description":"Controllers are tasked with two primary responsibilities:","source":"@site/versioned_docs/version-12.x/components/main-components/controllers.md","sourceDirName":"components/main-components","slug":"/components/main-components/controllers","permalink":"/docs/components/main-components/controllers","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/controllers.md","tags":[{"inline":true,"label":"component","permalink":"/docs/tags/component"},{"inline":true,"label":"main-component","permalink":"/docs/tags/main-component"},{"inline":true,"label":"controller","permalink":"/docs/tags/controller"},{"inline":true,"label":"action","permalink":"/docs/tags/action"},{"inline":true,"label":"view","permalink":"/docs/tags/view"},{"inline":true,"label":"request","permalink":"/docs/tags/request"},{"inline":true,"label":"route","permalink":"/docs/tags/route"},{"inline":true,"label":"transformer","permalink":"/docs/tags/transformer"}],"version":"12.x","lastUpdatedBy":"Sean Poynter-Smith","lastUpdatedAt":1704288284000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Controllers","tags":["component","main-component","controller","action","view","request","route","transformer"]},"sidebar":"tutorialSidebar","previous":{"title":"Routes","permalink":"/docs/components/main-components/routes"},"next":{"title":"Requests","permalink":"/docs/components/main-components/requests"}}');var s=t(74848),r=t(28453);const l={sidebar_position:2,title:"Controllers",tags:["component","main-component","controller","action","view","request","route","transformer"]},i=void 0,a={},c=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"API Controller",id:"api-controller",level:4},{value:"Web Controller",id:"web-controller",level:4},{value:"Response Helpers Methods",id:"response-helpers-methods",level:2},{value:"transform",id:"transform",level:3},{value:"withMeta",id:"withmeta",level:3},{value:"json",id:"json",level:3},{value:"created",id:"created",level:3},{value:"deleted",id:"deleted",level:3},{value:"accepted",id:"accepted",level:3},{value:"noContent",id:"nocontent",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://laravel.com/docs/controllers",children:"Controllers"})," are tasked with two primary responsibilities:\nserving the requested data and constructing the corresponding response."]}),"\n",(0,s.jsxs)(n.p,{children:["To generate new controllers\nyou may use the ",(0,s.jsx)(n.code,{children:"apiato:generate:controller"})," interactive command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan apiato:generate:controller\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definition--principles",children:"Definition & Principles"}),"\n",(0,s.jsxs)(n.p,{children:["Read ",(0,s.jsx)(n.a,{href:"https://github.com/Mahmoudz/Porto#definitions--principles",children:(0,s.jsx)(n.strong,{children:"Porto SAP Documentation (#Controllers)"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["All API Controllers:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["MUST be placed in the ",(0,s.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/UI/API/Controllers"})," directory."]}),"\n",(0,s.jsxs)(n.li,{children:["MUST extend the ",(0,s.jsx)(n.code,{children:"App\\Ship\\Parents\\Controllers\\ApiController"})," class."]}),"\n",(0,s.jsxs)(n.li,{children:["MUST format their responses via a ",(0,s.jsx)(n.a,{href:"/docs/components/main-components/transformers",children:"Transformer"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["All Web Controllers:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["MUST be placed in the ",(0,s.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/UI/WEB/Controllers"})," directory."]}),"\n",(0,s.jsxs)(n.li,{children:["MUST extend the ",(0,s.jsx)(n.code,{children:"App\\Ship\\Parents\\Controllers\\WebController"})," class."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Controllers:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["MUST only call the ",(0,s.jsx)(n.code,{children:"run"})," or ",(0,s.jsx)(n.code,{children:"transactionalRun"})," method of Actions."]}),"\n",(0,s.jsx)(n.li,{children:"SHOULD pass the Request object to the Action instead of passing data from the request."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u251c\u2500\u2500 API\n                \u2502   \u2514\u2500\u2500 Controllers\n                \u2502       \u251c\u2500\u2500 ControllerA.php\n                \u2502       \u251c\u2500\u2500 ControllerB.php\n                \u2502       \u2514\u2500\u2500 ...\n                \u2514\u2500\u2500 WEB\n                    \u2514\u2500\u2500 Controllers\n                        \u251c\u2500\u2500 ControllerA.php\n                        \u251c\u2500\u2500 ControllerB.php\n                        \u2514\u2500\u2500 ...\n"})}),"\n",(0,s.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,s.jsx)(n.h4,{id:"api-controller",children:"API Controller"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"use App\\Ship\\Parents\\Controllers\\ApiController;\n\nclass Controller extends ApiController\n{\n    public function __construct(\n        private readonly SampleAction $sampleAction,\n    ) {\n    }\n    \n    public function __invoke(SampleRequest $request): array\n    {\n        $sample = $this->sampleAction->run($request);\n        \n        return $this->transform($sample, SampleTransformer::class);\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"web-controller",children:"Web Controller"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"use App\\Ship\\Parents\\Controllers\\WebController;\n\nclass Controller extends WebController\n{\n    public function show(): Factory|View|Application\n    {\n        return view('sectionName@containerName::view-name');\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["In case you want to handle the same Action differently based on the UI type (e.g., API, Web, CLI), you can set the\nUI on Action with ",(0,s.jsx)(n.code,{children:"setUI"})," method."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$action = app(Action::class);\n$action->setUI('web');\n"})}),(0,s.jsxs)(n.p,{children:["and get the UI in your Action with ",(0,s.jsx)(n.code,{children:"getUI"})," method."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$action->getUI(); // will return 'web'\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"response-helpers-methods",children:"Response Helpers Methods"}),"\n",(0,s.jsx)(n.h3,{id:"transform",children:"transform"}),"\n",(0,s.jsx)(n.p,{children:"This method is incredibly useful and will be used in most cases."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The first required parameter accepts data as an object or a Collection of objects."}),"\n",(0,s.jsx)(n.li,{children:"The second required parameter is the transformer class."}),"\n",(0,s.jsxs)(n.li,{children:["The third optional parameter allows you to specify the ",(0,s.jsx)(n.a,{href:"/docs/components/main-components/transformers#including-relationships",children:"includes"})," that should be returned in the response."]}),"\n",(0,s.jsxs)(n.li,{children:["The fourth optional parameter lets you include metadata in the response. This metadata will be returned under the ",(0,s.jsx)(n.code,{children:"meta"})," key in the ",(0,s.jsx)(n.code,{children:"custom"})," key."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"// With Includes\n$this->transform($resource, ResourceTransformer::class, ['foo', 'bar']);\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'// With Meta\n$this->transform($resource, ResourceTransformer::class, meta: [\'foo\' => \'bar\', \'baz\' => 1]);\n\n// Response\n{\n  "data": {},\n  "meta": {\n    "include": [...],\n    "custom": {\n      "foo": "bar",\n      "baz": 1\n    },\n    "pagination": {}\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"withmeta",children:"withMeta"}),"\n",(0,s.jsxs)(n.p,{children:["This method enables you to add metadata to the response,\nand it MUST be used in conjunction with the ",(0,s.jsx)(n.code,{children:"transform"})," method.\nThis is different from the ",(0,s.jsx)(n.code,{children:"meta"})," parameter in the ",(0,s.jsx)(n.code,{children:"transform"})," method.\nThis metadata will be returned directly under the ",(0,s.jsx)(n.code,{children:"meta"})," key."]}),"\n",(0,s.jsxs)(n.p,{children:["You can use this method in conjunction with the ",(0,s.jsx)(n.code,{children:"meta"})," parameter in the ",(0,s.jsx)(n.code,{children:"transform"})," method."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$metaData = [\'foo\' => 999, \'bar\'];\n\n$this->withMeta($metaData)->transform($sample, SampleTransformer::class, meta: [\'foo\' => \'bar\', \'baz\' => 1]);\n\n// Response\n{\n  "data": {},\n\t"meta": {\n\t  "foo": 999,\n\t  "0": "bar",\n\t  "include": [...],\n\t  "custom": {\n\t    "foo": "bar",\n\t    "baz": 1\n\t  },\n\t  "pagination": {}\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"json",children:"json"}),"\n",(0,s.jsx)(n.p,{children:"This method allows you to pass an array of data that will be represented as JSON."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$this->json($data)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"created",children:"created"}),"\n",(0,s.jsxs)(n.p,{children:["This method allows you to return a response with a ",(0,s.jsx)(n.code,{children:"201"})," status code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$this->created($data)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deleted",children:"deleted"}),"\n",(0,s.jsxs)(n.p,{children:["This method allows you to return a response with a ",(0,s.jsx)(n.code,{children:"202"})," status code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'$this->deleted($deletedModel)\n\n// Response\n{\n  "message": "Model (1) Deleted Successfully."\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"accepted",children:"accepted"}),"\n",(0,s.jsxs)(n.p,{children:["This method allows you to return a response with a ",(0,s.jsx)(n.code,{children:"202"})," status code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$this->accepted($data)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"nocontent",children:"noContent"}),"\n",(0,s.jsxs)(n.p,{children:["This method allows you to return a response with a ",(0,s.jsx)(n.code,{children:"204"})," status code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$this->noContent()\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);