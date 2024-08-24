"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[8108],{4034:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var s=r(74848),o=r(28453);const t={title:"Repositories"},i=void 0,l={id:"optional-components/repositories",title:"Repositories",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/repositories.md",sourceDirName:"optional-components",slug:"/optional-components/repositories",permalink:"/docs/9.x/optional-components/repositories",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/repositories.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631e3,frontMatter:{title:"Repositories"},sidebar:"docs",previous:{title:"Providers",permalink:"/docs/9.x/optional-components/providers"},next:{title:"Exceptions",permalink:"/docs/9.x/optional-components/exceptions"}},a={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Other Properties:",id:"other-properties",level:3},{value:"API Query Parameters Property",id:"api-query-parameters-property",level:3},{value:"All other Properties",id:"all-other-properties",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#definition",children:"Definition"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#principles",children:"Principles"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rules",children:"Rules"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#code-samples",children:"Code Samples"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#other-properties",children:"Other Properties:"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#api-query-parameters-property",children:"API Query Parameters Property"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#all-other-properties",children:"All other Properties"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(n.p,{children:"The Repository classes are an implementation of the Repository Design Pattern."}),"\n",(0,s.jsx)(n.p,{children:"Their major roles are separating the business logic from the data (or the data access Task)."}),"\n",(0,s.jsx)(n.p,{children:"Repositories save and retrieves Models to/from the underlying storage mechanism."}),"\n",(0,s.jsx)(n.p,{children:"The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model."}),"\n",(0,s.jsx)(n.h3,{id:"principles",children:"Principles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Every Model SHOULD have a Repository."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A Model SHOULD always get accessed through its Repository. (Never direct access to Model)."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["All Repositories MUST extend from ",(0,s.jsx)(n.code,{children:"App\\Ship\\Parents\\Repositories\\Repository"}),". Extending from this class will give access to functions like (",(0,s.jsx)(n.code,{children:"find"}),", ",(0,s.jsx)(n.code,{children:"create"}),", ",(0,s.jsx)(n.code,{children:"update"})," and much more)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Repository name should be same like it's model name (model: ",(0,s.jsx)(n.code,{children:"Foo"})," -> repository: ",(0,s.jsx)(n.code,{children:"FooRepository"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository must set the ",(0,s.jsx)(n.code,{children:"$container"})," property like this: ",(0,s.jsx)(n.code,{children:"$container='ContainerName'"}),". ",(0,s.jsx)(n.em,{children:"See an example below"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" - app\n    - Containers\n        - {container-name}\n                - Data\n                - Repositories\n                    - UserRepository.php\n                    - ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["User ",(0,s.jsx)(n.code,{children:"Repository"}),":"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\User\\Data\\Repositories;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass UserRepository extends Repository implements UserRepositoryInterface\n{\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'email' => '=',\n    ];\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n\n// paginate the data by 10\n$users = $userRepository->paginate(10);\n\n// search by 1 field\n$cars = $carRepository->findByField('colour', $colour);\n\n// searching multiple fields\n$offer = $offerRepository->findWhere([\n    'offer_id' => $offer_id,\n    'user_id'  => $user_id,\n])->first();\n\n//....\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note: If the Repository belongs to Model with a name different from its Container name, the Repository class of that Model must set the property ",(0,s.jsx)(n.code,{children:"$container"})," and define the Container name."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\Authorization\\Data\\Repositories;\n\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass RoleRepository extends Repository\n{\n    protected $container = 'Authorization'; // the container name. Must be set when the model has different name than the container\n\n    protected $fieldSearchable = [\n\n    ];\n\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"other-properties",children:"Other Properties:"}),"\n",(0,s.jsx)(n.h3,{id:"api-query-parameters-property",children:"API Query Parameters Property"}),"\n",(0,s.jsxs)(n.p,{children:["To enable query parameters (",(0,s.jsx)(n.code,{children:"?search=text"}),",...) in your API you need to set the property ",(0,s.jsx)(n.code,{children:"$fieldSearchable"})," on the Repository class, to instruct the querying on your model."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Example ",(0,s.jsx)(n.code,{children:"$fieldSearchable"})," of a ",(0,s.jsx)(n.code,{children:"Repository"}),":"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"\t <?php\n\n\tprotected $fieldSearchable = [\n\t  'name'  => 'like',\n\t  'email' => '=',\n\t];\n"})}),"\n",(0,s.jsx)(n.p,{children:"Continue reading to find more about those properties and what they do."}),"\n",(0,s.jsx)(n.h3,{id:"all-other-properties",children:"All other Properties"}),"\n",(0,s.jsxs)(n.p,{children:["apiato uses the ",(0,s.jsx)(n.code,{children:"andersao/l5-repository"})," package, to provide a lot of powerful features to the repository class. such as"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n\n\t // ...\n\n    protected $cacheMinutes = 1440; // 1 day\n\n    protected $cacheOnly = ['all'];\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To learn more about all the properties you can use, visit the ",(0,s.jsx)(n.code,{children:"andersao/l5-repository"})," package ",(0,s.jsx)(n.a,{href:"https://github.com/andersao/l5-repository",children:"documentation"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var s=r(96540);const o={},t=s.createContext(o);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);