"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9454],{4668:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"main-components/controllers","title":"Controllers","description":"- Definition & Principles","source":"@site/versioned_docs/version-10.x/main-components/controllers.md","sourceDirName":"main-components","slug":"/main-components/controllers","permalink":"/docs/10.x/main-components/controllers","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/main-components/controllers.md","tags":[],"version":"10.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1619394104000,"frontMatter":{"title":"Controllers"},"sidebar":"docs","previous":{"title":"Routes","permalink":"/docs/10.x/main-components/routes"},"next":{"title":"Requests","permalink":"/docs/10.x/main-components/requests"}}');var o=r(74848),t=r(28453);const l={title:"Controllers"},i=void 0,c={},d=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Web Controller",id:"web-controller",level:4},{value:"API Controller",id:"api-controller",level:4},{value:"Usage from Routes Endpoint",id:"usage-from-routes-endpoint",level:4},{value:"Controller response builder helper functions",id:"controller-response-builder-helper-functions",level:3},{value:"Some functions",id:"some-of-the-functions",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#definition-principles",children:"Definition & Principles"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#rules",children:"Rules"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#code-sample",children:"Code Sample"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#controller-response-builder-helper-functions",children:"Controller response builder helper functions"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#some-of-the-functions",children:"Some of the functions"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"definition-principles",children:"Definition & Principles"}),"\n",(0,o.jsxs)(n.p,{children:["Read ",(0,o.jsx)(n.a,{href:"https://github.com/Mahmoudz/Porto#Controllers",children:(0,o.jsx)(n.strong,{children:"Porto SAP Documentation (#Controllers)"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["All API Controller MUST extend from ",(0,o.jsx)(n.code,{children:"App\\Ship\\Parents\\Controllers\\ApiController"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["All Web Controller MUST extend from ",(0,o.jsx)(n.code,{children:"App\\Ship\\Parents\\Controllers\\WebController"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Controllers should only call the the ",(0,o.jsx)(n.code,{children:"run"})," method of Actions."]}),"\n",(0,o.jsx)(n.li,{children:"Controllers should pass the Request object to the Action instead of passing data from the request."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:" - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - API\n                        - Controllers\n                            - Controller.php\n                    - WEB\n                        - Controllers\n                            - Controller.php\n"})}),"\n",(0,o.jsx)(n.h3,{id:"code-sample",children:"Code Sample"}),"\n",(0,o.jsx)(n.h4,{id:"web-controller",children:"Web Controller"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"class Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('welcome');\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h4,{id:"api-controller",children:"API Controller"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"class Controller extends ApiController\n{\n    public function registerUser(RegisterUserRequest $request)\n    {\n        $user = app(RegisterUserAction::class)->run($request);\n        return $this->transform($user, UserTransformer::class);\n    }\n}\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["In case you want to handle the same Action differently based on the UI type (e.g. API, Web, CLI) you can set the\nUI on Action with ",(0,o.jsx)(n.code,{children:"setUI()"})," method."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"    app(WebLogoutAction::class)->setUI('Web')->run();\n"})}),(0,o.jsxs)(n.p,{children:["and get the UI in your Action with ",(0,o.jsx)(n.code,{children:"getUI()"})," method."]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"    $this->getUI();\n"})})]}),"\n",(0,o.jsx)(n.h4,{id:"usage-from-routes-endpoint",children:"Usage from Routes Endpoint"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"Route::post('login', [Controller::class, 'loginUser']);\n"})}),"\n",(0,o.jsx)(n.h3,{id:"controller-response-builder-helper-functions",children:"Controller response builder helper functions"}),"\n",(0,o.jsxs)(n.p,{children:["Many helper function are there to help you build your response faster, those helpers exist in\nthe ",(0,o.jsx)(n.code,{children:"vendor/apiato/core/Traits/ResponseTrait.php"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"some-of-the-functions",children:"Some functions"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"transform"}),"\nThis is the most useful function which you will be using in most cases."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"First required parameter accepts data as object or Collection of objects."}),"\n",(0,o.jsx)(n.li,{children:"Second required parameter is the transformer object"}),"\n",(0,o.jsxs)(n.li,{children:["Third optional parameter take the includes that should be returned by the response, ",(0,o.jsx)(n.em,{children:"($availableIncludes and\n$defaultIncludes in the transformer class)"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Fourth optional parameter accepts metadata to be injected in the response."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"// $user is a User Object\nreturn $this->transform($user, UserTransformer::class);\n\n// $orders is a Collection of Order Objects\nreturn $this->transform($orders, OrderTransformer::class, ['products', 'recipients', 'store', 'invoice']);\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"withMeta"}),"\nThis function allows including metadata in the response."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"$metaData = ['total_credits', 10000];\n\nreturn $this->withMeta($metaData)->transform($receipt, ReceiptTransformer::class);\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"json"}),"\nThis function allows passing array data to be represented as json."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"return $this->json([\n    'foo': 'bar'\n])\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Other functions"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"accepted"}),"\n",(0,o.jsx)(n.li,{children:"deleted"}),"\n",(0,o.jsx)(n.li,{children:"noContent"}),"\n",(0,o.jsxs)(n.li,{children:["// Some functions might not be documented, so refer to the ",(0,o.jsx)(n.code,{children:"vendor/apiato/core/Traits/ResponseTrait.php"})," and see the\npublic functions."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(96540);const o={},t=s.createContext(o);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);