"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[2999],{1654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"getting-started/samples","title":"Samples","description":"* The basic flow","source":"@site/versioned_docs/version-11.x/getting-started/samples.md","sourceDirName":"getting-started","slug":"/getting-started/samples","permalink":"/docs/11.x/getting-started/samples","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/getting-started/samples.md","tags":[],"version":"11.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1659346629000,"frontMatter":{"title":"Samples"},"sidebar":"docs","previous":{"title":"Architecture","permalink":"/docs/11.x/getting-started/software-architectural-patterns"},"next":{"title":"Requests","permalink":"/docs/11.x/getting-started/requests"}}');var l=t(74848),o=t(28453);const i={title:"Samples"},r=void 0,a={},c=[{value:"The basic flow",id:"basic-flow",level:3},{value:"Sample Route Endpoint",id:"sample-route-endpoint",level:3},{value:"Sample Controller Function",id:"controller-function",level:3},{value:"Sample Action",id:"sample-action",level:3},{value:"Sample User Response",id:"sample-user-response",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#basic-flow",children:"The basic flow"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#sample-route-endpoint",children:"Sample Route Endpoint"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#controller-function",children:"Controller Function"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#sample-action",children:"Sample Action"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#sample-user-response",children:"Sample User Response"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"basic-flow",children:"The basic flow"}),"\n",(0,l.jsx)(n.p,{children:"When an HTTP request is received, it first hits your predefined Endpoint (each endpoint live in its own Route file)."}),"\n",(0,l.jsx)(n.h3,{id:"sample-route-endpoint",children:"Sample Route Endpoint"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"Route::get('/hello', [Controller::class, 'sayHello']);\n"})}),"\n",(0,l.jsxs)(n.p,{children:["After the user makes a request to the endpoint ",(0,l.jsx)(n.code,{children:"[GET] www.api.apiato.com/v1/hello"})," it calls the defined controller\nfunction (",(0,l.jsx)(n.code,{children:"sayHello"}),")."]}),"\n",(0,l.jsx)(n.h3,{id:"controller-function",children:"Sample Controller Function"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"class Controller extends ApiController\n{\n\tpublic function sayHello(SayHelloRequest $request)\n\t{\n            $helloMessage = app(SayHelloAction::class)->run();\n\n            $this->json([\n                $helloMessage\n            ]);\n\t}\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["This function takes a Request class ",(0,l.jsx)(n.code,{children:"SayHelloRequest"})," to automatically checks if the user has the right access to this\nendpoint. ",(0,l.jsx)(n.em,{children:"Only if the user has access, it proceeds to the function body."})]}),"\n",(0,l.jsxs)(n.p,{children:["Then the function calls an Action (",(0,l.jsx)(n.code,{children:"SayHelloAction"}),") to perform the business logic."]}),"\n",(0,l.jsx)(n.h3,{id:"sample-action",children:"Sample Action"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"class SayHelloAction extends Action\n{\n\tpublic function run()\n\t{\n\t    return 'Hello World!';\n\t}\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"The Action can do anything then return a result (could be an Object, a String or anything)."}),"\n",(0,l.jsx)(n.p,{children:"When the Action finishes its job, the controller function gets ready to build a response."}),"\n",(0,l.jsxs)(n.p,{children:["Json responses can be built using the helper function ",(0,l.jsx)(n.code,{children:"json"})," (",(0,l.jsx)(n.code,{children:"$this->json(['foo' => 'bar']);"}),")."]}),"\n",(0,l.jsx)(n.h3,{id:"sample-user-response",children:"Sample User Response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n    "Hello World!"\n]\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);