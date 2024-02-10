"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2856],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),y=i,m=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},18848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(45072),i=(n(11504),n(95788));const a={sidebar_position:2,title:"Criterias",tags:["component","optional-component","criteria","repository","action","task"]},o=void 0,p={unversionedId:"components/optional-components/repository/criterias",id:"version-12.x/components/optional-components/repository/criterias",title:"Criterias",description:"To prevent overlap with the L5 Repository documentation, this page",source:"@site/versioned_docs/version-12.x/components/optional-components/repository/criterias.md",sourceDirName:"components/optional-components/repository",slug:"/components/optional-components/repository/criterias",permalink:"/docs/components/optional-components/repository/criterias",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/repository/criterias.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"criteria",permalink:"/docs/tags/criteria"},{label:"repository",permalink:"/docs/tags/repository"},{label:"action",permalink:"/docs/tags/action"},{label:"task",permalink:"/docs/tags/task"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Criterias",tags:["component","optional-component","criteria","repository","action","task"]},sidebar:"tutorialSidebar",previous:{title:"Repositories",permalink:"/docs/components/optional-components/repository/repositories"},next:{title:"Seeders",permalink:"/docs/components/optional-components/seeders"}},s={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Applying Criteria",id:"applying-criteria",level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"To prevent overlap with the L5 Repository documentation, this page\nexclusively delves into Apiato distinct features and configurations,\noffering only a limited set of examples.\nTo learn more about Criterias and the L5 Repository package,\nplease refer to its ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/andersao/l5-repository"},"documentation"),".")),(0,i.yg)("p",null,"Criterias are specialized classes designed to encapsulate\nand apply query conditions when fetching data from a database using a ",(0,i.yg)("a",{parentName:"p",href:"/docs/components/optional-components/repository/repositories"},"Repository"),".\nUnlike adding query conditions directly to a Repository or as a scope within a Model,\nCriterias offer distinct advantages."),(0,i.yg)("p",null,"With Criterias, you can define query conditions in a reusable and shareable way.\nThis means\nthat a single query condition can be defined once and then\nutilized across multiple Models and Repositories in your application.\nThis approach offers the flexibility to create query conditions once\nand apply them consistently anywhere in your application,\nenhancing code reusability and maintainability."),(0,i.yg)("h2",{id:"rules"},"Rules"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"All container-specific Criterias MUST be placed in the ",(0,i.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Data/Criterias")," directory."),(0,i.yg)("li",{parentName:"ul"},"All general Criterias MUST be placed in the ",(0,i.yg)("inlineCode",{parentName:"li"},"app/Ship/Criterias")," directory."),(0,i.yg)("li",{parentName:"ul"},"All Criterias MUST extend the ",(0,i.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Criterias\\Criteria")," class.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,i.yg)("inlineCode",{parentName:"li"},"ParentCriteria"),"."))),(0,i.yg)("li",{parentName:"ul"},"Every Criteria MUST have an ",(0,i.yg)("inlineCode",{parentName:"li"},"apply")," method."),(0,i.yg)("li",{parentName:"ul"},"A Criteria MUST not contain any extra code. If it needs data, the data MUST be passed to it.")),(0,i.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Data\n\u2502               \u2514\u2500\u2500 Criterias\n\u2502                   \u251c\u2500\u2500 ColourRedCriteria.php\n\u2502                   \u251c\u2500\u2500 RaceCarsCriteria.php\n\u2502                   \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Criterias\n        \u251c\u2500\u2500 CreatedTodayCriteria.php\n        \u251c\u2500\u2500 NotNullCriteria.php\n        \u2514\u2500\u2500 ...\n")),(0,i.yg)("h2",{id:"code-example"},"Code Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"use App\\Ship\\Parents\\Criterias\\Criteria as ParentCriteria;\nuse Prettus\\Repository\\Contracts\\RepositoryInterface as PrettusRepositoryInterface;\n\nclass IsNullCriteria extends ParentCriteria\n{\n    public function __construct(\n        private readonly string $field\n    ) {\n    }\n\n    public function apply($model, PrettusRepositoryInterface $repository)\n    {\n        return $model->whereNull($this->field);\n    }\n}\n")),(0,i.yg)("h3",{id:"applying-criteria"},"Applying Criteria"),(0,i.yg)("p",null,"A Criteria can be applied to a Repository by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"pushCriteria")," method."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"public function __construct(\n    protected readonly UserRepository $repository\n) {\n}\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"pushCriteria")," method accepts an instance of a Criteria class or a string with the Criteria class name."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"public function run()\n{\n    $this->repository->pushCriteria(new IsNullCriteria('email'));\n    return $this->repository->paginate();\n}\n")),(0,i.yg)("p",null,"You can also apply multiple Criterias to a Repository by using the ",(0,i.yg)("inlineCode",{parentName:"p"},"pushCriteria")," method multiple times."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"public function run()\n{\n    $this->repository->pushCriteria(new IsNullCriteria('email'));\n    $this->repository->pushCriteria(OrderByNameCriteria::class);\n    return $this->repository->paginate();\n}\n")))}d.isMDXComponent=!0}}]);