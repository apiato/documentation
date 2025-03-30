"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[1699],{28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function t(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:r},e.children)}},88053:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"optional-components/repositories","title":"Repositories","description":"* Definition","source":"@site/versioned_docs/version-10.x/optional-components/repositories.md","sourceDirName":"optional-components","slug":"/optional-components/repositories","permalink":"/docs/10.x/optional-components/repositories","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/repositories.md","tags":[],"version":"10.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1619394104000,"frontMatter":{"title":"Repositories"},"sidebar":"docs","previous":{"title":"Providers","permalink":"/docs/10.x/optional-components/providers"},"next":{"title":"Criterias","permalink":"/docs/10.x/optional-components/criterias"}}');var s=n(74848),o=n(28453);const t={title:"Repositories"},l=void 0,a={},d=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Demo Repository",id:"demo-repository",level:4},{value:"Usage",id:"usage",level:4},{value:"Different Model and Container Name",id:"model-method-example",level:4},{value:"Other Properties:",id:"other-properties",level:3},{value:"API Query Parameters Property",id:"api-query-parameters-property",level:4},{value:"All other Properties",id:"all-other-properties",level:4}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#definition",children:"Definition"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#principles",children:"Principles"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#rules",children:"Rules"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#code-samples",children:"Code Samples"})}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"#other-properties",children:"Other Properties"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#api-query-parameters-property",children:"API Query Parameters Property"})}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"#all-other-properties",children:"All other Properties"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(r.p,{children:"The Repository classes are an implementation of the Repository Design Pattern."}),"\n",(0,s.jsx)(r.p,{children:"Their major roles are separating the business logic from the data (or the data access Task)."}),"\n",(0,s.jsx)(r.p,{children:"Repositories save and retrieves Models to/from the underlying storage mechanism."}),"\n",(0,s.jsx)(r.p,{children:"The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model."}),"\n",(0,s.jsx)(r.h3,{id:"principles",children:"Principles"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"Every Model SHOULD have a Repository."}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsx)(r.p,{children:"A Model SHOULD always get accessed through its Repository. (Never accessed directly)."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["All Repositories MUST extend from ",(0,s.jsx)(r.code,{children:"App\\Ship\\Parents\\Repositories\\Repository"}),". Extending from this class will give you access to methods like (",(0,s.jsx)(r.code,{children:"find"}),", ",(0,s.jsx)(r.code,{children:"create"}),", ",(0,s.jsx)(r.code,{children:"update"})," and much more)."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["Repository name should be same as it's model name (model: ",(0,s.jsx)(r.code,{children:"Foo"})," -> repository: ",(0,s.jsx)(r.code,{children:"FooRepository"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["\n",(0,s.jsxs)(r.p,{children:["If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository implement ",(0,s.jsx)(r.code,{children:"model()"})," method like ",(0,s.jsx)(r.a,{href:"#model-method-example",children:"this"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:" - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Data\n                - Repositories\n                    - UserRepository.php\n                    - ...\n"})}),"\n",(0,s.jsx)(r.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,s.jsx)(r.h4,{id:"demo-repository",children:"Demo Repository"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"class DemoRepository extends Repository\n{\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'email' => '=',\n    ];\n}\n"})}),"\n",(0,s.jsx)(r.h4,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"// paginate the data by 10\n$users = $userRepository->paginate(10);\n\n// search by 1 field\n$cars = $carRepository->findByField('colour', $colour);\n\n// searching multiple fields\n$offer = $offerRepository->findWhere([\n    'offer_id' => $offer_id,\n    'user_id'  => $user_id,\n])->first();\n\n//....\n"})}),"\n",(0,s.jsx)(r.h4,{id:"model-method-example",children:"Different Model and Container Name"}),"\n",(0,s.jsxs)(r.p,{children:["The ",(0,s.jsx)(r.code,{children:"model()"})," method must be implemented when the model has different name than the container."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"class DemoRepository extends Repository\n{\n    // ...\n    \n    public function model(): string\n    {\n        return Demo::class;\n    }\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"other-properties",children:"Other Properties:"}),"\n",(0,s.jsx)(r.h4,{id:"api-query-parameters-property",children:"API Query Parameters Property"}),"\n",(0,s.jsxs)(r.p,{children:["To enable query parameters (",(0,s.jsx)(r.code,{children:"?search=text"}),",...) in your API you need to set the property ",(0,s.jsx)(r.code,{children:"$fieldSearchable"})," on the Repository class, to instruct the querying on your model. More ",(0,s.jsx)(r.a,{href:"../core-features/query-parameters##using-the-request-criteria",children:"details"}),"."]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-php",children:"\tprotected $fieldSearchable = [\n      'name'  => 'like',\n      'email' => '=',\n\t];\n"})}),"\n",(0,s.jsx)(r.h4,{id:"all-other-properties",children:"All other Properties"}),"\n",(0,s.jsxs)(r.p,{children:["Apiato uses the ",(0,s.jsx)(r.code,{children:"l5-repository"})," package, to provide a lot of powerful features to the repository class."]}),"\n",(0,s.jsx)(r.admonition,{title:"Further reading",type:"info",children:(0,s.jsxs)(r.p,{children:["To learn more about all the properties you can use, visit the ",(0,s.jsx)(r.code,{children:"andersao/l5-repository"})," package ",(0,s.jsx)(r.a,{href:"https://github.com/andersao/l5-repository",children:"documentation"}),"."]})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);