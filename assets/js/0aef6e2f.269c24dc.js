"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3088],{57124:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=s(74848),a=s(28453);const t={title:"Responses"},o=void 0,i={id:"getting-started/responses",title:"Responses",description:"* Apiato Response",source:"@site/versioned_docs/version-11.x/getting-started/responses.md",sourceDirName:"getting-started",slug:"/getting-started/responses",permalink:"/docs/11.x/getting-started/responses",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/getting-started/responses.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629e3,frontMatter:{title:"Responses"},sidebar:"docs",previous:{title:"Requests",permalink:"/docs/11.x/getting-started/requests"},next:{title:"Conventions",permalink:"/docs/11.x/getting-started/conventions-and-principles"}},l={},d=[{value:"Apiato Response",id:"response",level:3},{value:"Default Apiato Responses Payload:",id:"default-response-payload",level:3},{value:"Change the default Response payload:",id:"change-default-response-payload",level:3},{value:"Resource Keys",id:"resource-keys",level:3},{value:"Error Responses formats",id:"error-response-formats",level:3},{value:"Building a Responses from the Controller:",id:"building-response-from-controller",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#response",children:"Apiato Response"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#default-response-payload",children:"Default Apiato Responses Payload"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#change-default-response-payload",children:"Change the default Response payload"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#resource-keys",children:"Resource Keys"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#error-response-formats",children:"Error Responses formats"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#building-response-from-controller",children:"Building a Responses from the Controller"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Apiato Response"}),"\n",(0,r.jsx)(n.p,{children:"In Apiato you can define your own response payload or use one of the supported serializers."}),"\n",(0,r.jsxs)(n.p,{children:["Currently, the supported serializers are (",(0,r.jsx)(n.code,{children:"ArraySerializer"}),", ",(0,r.jsx)(n.code,{children:"DataArraySerializer"})," and ",(0,r.jsx)(n.code,{children:"JsonApiSerializer"}),"). As provided\nby ",(0,r.jsx)(n.a,{href:"http://fractal.thephpleague.com/transformers/",children:"Fractal"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, Apiato uses ",(0,r.jsx)(n.code,{children:"DataArraySerializer"}),". Below is an example of the response payload."]}),"\n",(0,r.jsx)(n.h3,{id:"default-response-payload",children:"Default Apiato Responses Payload:"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DataArraySerializer"})," response payload looks like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": [\n    {\n      "id": 100,\n      ...\n      "relation 1": {\n        "data": [ // multiple data\n          {\n            "id": 11,\n\t\t\t  ...\n          }\n        ]\n      },\n      "relation 2": {\n        "data": { // single data\n          "id": 22,\n          ...\n          }\n        }\n      }\n    },\n    ...\n  ],\n  "meta": {\n    "include": [ // what can be included\n      "xxx",\n      "yyy"\n    ],\n    "custom": [],\n    "pagination": {\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Paginated response:"})}),"\n",(0,r.jsxs)(n.p,{children:["When data is paginated the response payload will contain a ",(0,r.jsx)(n.code,{children:"meta"})," description about the pagination."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "meta": {\n    "include": [\n      "xxx",\n      "yyy"\n    ],\n    "custom": [],\n    "pagination": { // pagination meta\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Includes:"})}),"\n",(0,r.jsxs)(n.p,{children:["Informs the User about what relationships can be included in the response. Example: ",(0,r.jsx)(n.code,{children:"?include=tags,user"})]}),"\n",(0,r.jsxs)(n.p,{children:["For more details read the ",(0,r.jsx)(n.code,{children:"Relationships"})," section in the ",(0,r.jsx)(n.a,{href:"../core-features/query-parameters#relationships-include",children:"Query Parameters"})," page."]}),"\n",(0,r.jsx)(n.h3,{id:"change-default-response-payload",children:"Change the default Response payload:"}),"\n",(0,r.jsxs)(n.p,{children:["The default response format (specification) is the ",(0,r.jsx)(n.code,{children:"DataArray"})," Fractal Serializer (",(0,r.jsx)(n.code,{children:"League\\Fractal\\Serializer\\DataArraySerializer"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["To change the default Fractal Serializer open the ",(0,r.jsx)(n.code,{children:"app/Ship/Configs/fractal.php"})," file and change the"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"'default_serializer' => League\\Fractal\\Serializer\\DataArraySerializer::class,\n"})}),"\n",(0,r.jsx)(n.p,{children:"The Supported Serializers are"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"ArraySerializer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"DataArraySerializer"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"JsonApiSerializer"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["More details can be found at ",(0,r.jsx)(n.a,{href:"http://fractal.thephpleague.com/transformers/",children:"Fractal"})," and\n",(0,r.jsx)(n.a,{href:"https://github.com/spatie/laravel-fractal",children:"Laravel Fractal Wrapper"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In case of returning JSON Data (",(0,r.jsx)(n.code,{children:"JsonApiSerializer"}),"), you may wish to check some JSON response standards:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://labs.omniti.com/labs/jsend",children:"JSEND"})," (very basic)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://jsonapi.org/format/",children:"JSON API"})," (very popular and well documented)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"http://stateless.co/hal_specification.html",children:"HAL"})," (useful in case of hypermedia)"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"resource-keys",children:"Resource Keys"}),"\n",(0,r.jsxs)(n.p,{children:["The transformer allows appending a ",(0,r.jsx)(n.code,{children:"ResourceKey"})," to the transformed resource. You can set the ",(0,r.jsx)(n.code,{children:"ResourceKey"})," in your\nresponse payload in 2 ways:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Manually set it via the respective parameter in the ",(0,r.jsx)(n.code,{children:"$this->transform()"})," call. Note that this will only set the\n",(0,r.jsx)(n.code,{children:"top level"})," resource key and does not affect the resource keys from ",(0,r.jsx)(n.code,{children:"included"})," resources!"]}),"\n",(0,r.jsxs)(n.li,{children:["Specify it on the respective ",(0,r.jsx)(n.code,{children:"Model"}),". By overriding $resourceKey, (",(0,r.jsx)(n.code,{children:"protected $resourceKey = 'FooBar';"}),").\nIf no ",(0,r.jsx)(n.code,{children:"$resourceKey"})," is defined at the ",(0,r.jsx)(n.code,{children:"Model"}),", the ",(0,r.jsx)(n.code,{children:"ShortClassName"})," is used as key. For example, the ",(0,r.jsx)(n.code,{children:"ShortClassName"})," of\nthe ",(0,r.jsx)(n.code,{children:"App\\Containers\\AppSection\\User\\Models\\User::class"})," is ",(0,r.jsx)(n.code,{children:"User"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"error-response-formats",children:"Error Responses formats"}),"\n",(0,r.jsx)(n.p,{children:"Visit each feature, e.g. the Authentication and there you will see how an unauthenticated response looks like, same\nfor Authorization, Validation and so on."}),"\n",(0,r.jsx)(n.h2,{id:"building-response-from-controller",children:"Building a Responses from the Controller:"}),"\n",(0,r.jsxs)(n.p,{children:["Checkout the ",(0,r.jsx)(n.a,{href:"../main-components/controllers",children:"Controller response builder helper functions"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(96540);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);