"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4432],{95788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>m});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=y;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},82628:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(45072),a=(t(11504),t(95788));const i={title:"Criterias"},o=void 0,s={unversionedId:"optional-components/criterias",id:"version-11.x/optional-components/criterias",title:"Criterias",description:"* Definition",source:"@site/versioned_docs/version-11.x/optional-components/criterias.md",sourceDirName:"optional-components",slug:"/optional-components/criterias",permalink:"/docs/11.x/optional-components/criterias",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/criterias.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{title:"Criterias"},sidebar:"version-11.x/docs",previous:{title:"Repositories",permalink:"/docs/11.x/optional-components/repositories"},next:{title:"Tests",permalink:"/docs/11.x/optional-components/tests"}},l={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A Shared Criteria",id:"a-shared-criteria",level:4},{value:"Usage from Task",id:"usage-from-task",level:4},{value:"Criteria Accepting Data Input",id:"criteria-accepting-data-input",level:4},{value:"Passing Data from Task to Criteria",id:"passing-data-from-task-to-criteria",level:4}],c={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(u,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,a.yg)("h3",{id:"definition"},"Definition"),(0,a.yg)("p",null,"Criterias are classes that hold and apply query condition when retrieving data from the database through a Repository."),(0,a.yg)("p",null,"Without using a Criteria class, you can add your query conditions to a Repository or to a Model as scope, but with Criterias, your query conditions can be shared across multiple Models and Repositories. It allows you to define the query condition once and use it anywhere in the App."),(0,a.yg)("h3",{id:"principles"},"Principles"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Every Container MAY have its own Criterias. However, shared Criterias SHOULD be created in the Ship layer.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"A Criteria MUST not contain any extra code, if it needs data, the data SHOULD be passed to it from the Actions or the Task. It SHOULD not call any ",(0,a.yg)("inlineCode",{parentName:"p"},"Task")," for data."))),(0,a.yg)("h3",{id:"rules"},"Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"All Criterias MUST extend from ",(0,a.yg)("inlineCode",{parentName:"p"},"App\\Ship\\Parents\\Criterias\\Criteria"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Every Criteria SHOULD have an ",(0,a.yg)("inlineCode",{parentName:"p"},"apply()")," function."))),(0,a.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Data\n                    - Criterias\n                      - ColourRedCriteria.php\n                      - RaceCarsCriteria.php\n                      - ...\n    - Ship\n        - Criterias\n            - CreatedTodayCriteria.php\n            - NotNullCriteria.php\n            - ...\n")),(0,a.yg)("h3",{id:"code-samples"},"Code Samples"),(0,a.yg)("h4",{id:"a-shared-criteria"},"A Shared Criteria"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"class OrderByCreationDateDescendingCriteria extends Criteria\n{\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->orderBy('created_at', 'desc');\n    }\n}\n")),(0,a.yg)("h4",{id:"usage-from-task"},"Usage from Task"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"public function run()\n{\n    $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria());\n    return  $this->userRepository->paginate();\n}\n")),(0,a.yg)("h4",{id:"criteria-accepting-data-input"},"Criteria Accepting Data Input"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"class ThisUserCriteria extends Criteria\n{\n    private $userId;\n\n    public function __construct($userId)\n    {\n        $this->userId = $userId;\n    }\n\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->where('user_id', '=', $this->userId);\n    }\n}\n")),(0,a.yg)("h4",{id:"passing-data-from-task-to-criteria"},"Passing Data from Task to Criteria"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"public function run($user)\n{\n    $this->accountRepository->pushCriteria(new ThisUserCriteria($user->id));\n    return $this->accountRepository->paginate();\n}\n\n")),(0,a.yg)("admonition",{title:"Further reading",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"More info at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository#create-a-criteria"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);