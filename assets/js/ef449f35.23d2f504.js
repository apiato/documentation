"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4623],{59279:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"optional-components/criterias","title":"Criterias","description":"* Definition","source":"@site/versioned_docs/version-11.x/optional-components/criterias.md","sourceDirName":"optional-components","slug":"/optional-components/criterias","permalink":"/docs/11.x/optional-components/criterias","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/criterias.md","tags":[],"version":"11.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1659346629000,"frontMatter":{"title":"Criterias"},"sidebar":"docs","previous":{"title":"Repositories","permalink":"/docs/11.x/optional-components/repositories"},"next":{"title":"Tests","permalink":"/docs/11.x/optional-components/tests"}}');var t=n(74848),s=n(28453);const a={title:"Criterias"},o=void 0,c={},l=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A Shared Criteria",id:"a-shared-criteria",level:4},{value:"Usage from Task",id:"usage-from-task",level:4},{value:"Criteria Accepting Data Input",id:"criteria-accepting-data-input",level:4},{value:"Passing Data from Task to Criteria",id:"passing-data-from-task-to-criteria",level:4}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#definition",children:"Definition"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#principles",children:"Principles"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#rules",children:"Rules"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#code-samples",children:"Code Samples"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(i.p,{children:"Criterias are classes that hold and apply query condition when retrieving data from the database through a Repository."}),"\n",(0,t.jsx)(i.p,{children:"Without using a Criteria class, you can add your query conditions to a Repository or to a Model as scope, but with Criterias, your query conditions can be shared across multiple Models and Repositories. It allows you to define the query condition once and use it anywhere in the App."}),"\n",(0,t.jsx)(i.h3,{id:"principles",children:"Principles"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Every Container MAY have its own Criterias. However, shared Criterias SHOULD be created in the Ship layer."}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["A Criteria MUST not contain any extra code, if it needs data, the data SHOULD be passed to it from the Actions or the Task. It SHOULD not call any ",(0,t.jsx)(i.code,{children:"Task"})," for data."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["All Criterias MUST extend from ",(0,t.jsx)(i.code,{children:"App\\Ship\\Parents\\Criterias\\Criteria"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Every Criteria SHOULD have an ",(0,t.jsx)(i.code,{children:"apply()"})," function."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:" - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Data\n                    - Criterias\n                      - ColourRedCriteria.php\n                      - RaceCarsCriteria.php\n                      - ...\n    - Ship\n        - Criterias\n            - CreatedTodayCriteria.php\n            - NotNullCriteria.php\n            - ...\n"})}),"\n",(0,t.jsx)(i.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,t.jsx)(i.h4,{id:"a-shared-criteria",children:"A Shared Criteria"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-php",children:"class OrderByCreationDateDescendingCriteria extends Criteria\n{\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->orderBy('created_at', 'desc');\n    }\n}\n"})}),"\n",(0,t.jsx)(i.h4,{id:"usage-from-task",children:"Usage from Task"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-php",children:"public function run()\n{\n    $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria());\n    return  $this->userRepository->paginate();\n}\n"})}),"\n",(0,t.jsx)(i.h4,{id:"criteria-accepting-data-input",children:"Criteria Accepting Data Input"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-php",children:"class ThisUserCriteria extends Criteria\n{\n    private $userId;\n\n    public function __construct($userId)\n    {\n        $this->userId = $userId;\n    }\n\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->where('user_id', '=', $this->userId);\n    }\n}\n"})}),"\n",(0,t.jsx)(i.h4,{id:"passing-data-from-task-to-criteria",children:"Passing Data from Task to Criteria"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-php",children:"public function run($user)\n{\n    $this->accountRepository->pushCriteria(new ThisUserCriteria($user->id));\n    return $this->accountRepository->paginate();\n}\n\n"})}),"\n",(0,t.jsx)(i.admonition,{title:"Further reading",type:"info",children:(0,t.jsxs)(i.p,{children:["More info at ",(0,t.jsx)(i.a,{href:"https://github.com/andersao/l5-repository#create-a-criteria",children:"Laravel Docs"}),"."]})})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var r=n(96540);const t={},s=r.createContext(t);function a(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);