"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4364],{19850:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"components/optional-components/repository/repositories","title":"Repositories","description":"Apiato provides a powerful repository pattern implementation based on the L5 Repository package.","source":"@site/docs/components/optional-components/repository/repositories.md","sourceDirName":"components/optional-components/repository","slug":"/components/optional-components/repository/repositories","permalink":"/docs/next/components/optional-components/repository/repositories","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/repository/repositories.md","tags":[{"inline":true,"label":"component","permalink":"/docs/next/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/next/tags/optional-component"},{"inline":true,"label":"repository","permalink":"/docs/next/tags/repository"},{"inline":true,"label":"criteria","permalink":"/docs/next/tags/criteria"},{"inline":true,"label":"action","permalink":"/docs/next/tags/action"},{"inline":true,"label":"task","permalink":"/docs/next/tags/task"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1707153375000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Repositories","tags":["component","optional-component","repository","criteria","action","task"]},"sidebar":"tutorialSidebar","previous":{"title":"Policies","permalink":"/docs/next/components/optional-components/policies"},"next":{"title":"Criterias","permalink":"/docs/next/components/optional-components/repository/criterias"}}');var r=i(74848),t=i(28453);const o={sidebar_position:1,title:"Repositories",tags:["component","optional-component","repository","criteria","action","task"]},a=void 0,d={},l=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Linking Repositories &amp; Models",id:"linking-repositories--models",level:2},{value:"Repositories &amp; Models Auto-Linking",id:"repositories--models-auto-linking",level:3},{value:"Pagination",id:"pagination",level:2},{value:"Limiting Results Per Page",id:"limiting-results-per-page",level:3},{value:"Maximum Pagination Limit",id:"maximum-pagination-limit",level:3},{value:"Disabling Pagination",id:"disabling-pagination",level:3},{value:"Project-Wide",id:"project-wide",level:4},{value:"Per Repository",id:"per-repository",level:4},{value:"RequestCriteria",id:"requestcriteria",level:2},{value:"Sorting &amp; Ordering",id:"sorting--ordering",level:3},{value:"Searching",id:"searching",level:3},{value:"Searching with Hashed IDs",id:"searching-with-hashed-ids",level:4},{value:"Filtering",id:"filtering",level:3},{value:"Caching",id:"caching",level:2},{value:"Skipping Cache",id:"skipping-cache",level:3},{value:"Additional Methods",id:"additional-methods",level:2},{value:"pushCriteriaWith",id:"pushcriteriawith",level:4},{value:"findById",id:"findbyid",level:4},{value:"getById",id:"getbyid",level:4},{value:"findMany",id:"findmany",level:4}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Apiato provides a powerful repository pattern implementation based on the ",(0,r.jsx)(n.a,{href:"https://github.com/andersao/l5-repository",children:"L5 Repository"})," package."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["To prevent overlap with the L5 Repository documentation, this page\nexclusively delves into Apiato distinct features and configurations,\noffering only a limited set of examples.\nTo learn more about the L5 Repository package,\nplease refer to its ",(0,r.jsx)(n.a,{href:"https://github.com/andersao/l5-repository",children:"documentation"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Repositories play a crucial role in software architecture\nby separating and abstracting the data layer from the business logic.\nThey serve as an essential architectural pattern to promote code separation,\nflexibility, and maintainability in software development.\nRepositories help\ncreate clean and organized codebases\nby abstracting the intricacies of data access and manipulation from the core business logic."}),"\n",(0,r.jsxs)(n.p,{children:["To generate new repositories\nyou may use the ",(0,r.jsx)(n.code,{children:"apiato:generate:repository"})," interactive command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"php artisan apiato:generate:repository\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can also generate a model and its repository at the same time by using the ",(0,r.jsx)(n.code,{children:"apiato:generate:model"})," interactive command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"php artisan apiato:generate:model\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["All Repositories:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["MUST be placed in the ",(0,r.jsx)(n.code,{children:"app/Containers/{section}/{container}/Data/Repositories"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["MUST extend the ",(0,r.jsx)(n.code,{children:"App\\Ship\\Parents\\Repositories\\Repository"})," class.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The parent extension SHOULD be aliased as ",(0,r.jsx)(n.code,{children:"ParentRepository"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["SHOULD be named after the model they are associated with, followed by the ",(0,r.jsx)(n.code,{children:"Repository"})," suffix. For instance, ",(0,r.jsx)(n.code,{children:"UserRepository.php"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"A Model MUST always get accessed through its Repository."}),"\n",(0,r.jsx)(n.li,{children:"Every Model MUST have a Repository."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Data\n                \u2514\u2500\u2500 Repositories\n                    \u251c\u2500\u2500 UserRepository.php\n                    \u2514\u2500\u2500 ...\n"})}),"\n",(0,r.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use App\\Ship\\Parents\\Repositories\\Repository as ParentRepository;\n\nclass UserRepository extends ParentRepository\n{\n    protected $fieldSearchable = [\n        'id' => '=',\n        'name' => 'like',\n        'email' => '=',\n        'email_verified_at' => '=',\n        'created_at' => '=',\n    ];\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["All the configuration options for the this feature are located in the ",(0,r.jsx)(n.code,{children:"app/Ship/Configs/repository.php"})," config file."]}),"\n",(0,r.jsx)(n.h2,{id:"linking-repositories--models",children:"Linking Repositories & Models"}),"\n",(0,r.jsxs)(n.p,{children:["Once you have created a repository, you need to link it to its corresponding model.\nIf you have followed the repository naming ",(0,r.jsx)(n.a,{href:"#rules",children:"rules"})," outlined above,\nApiato will automatically link your repositories to their corresponding models."]}),"\n",(0,r.jsxs)(n.p,{children:["However, if you have not followed the rules, and your repository name differs from the model name,\nyou must implement the ",(0,r.jsx)(n.code,{children:"model"})," method in the repository."]}),"\n",(0,r.jsx)(n.p,{children:"This method allows you to specify the correct model class that should be used for the repository operations."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use App\\Ship\\Parents\\Repositories\\Repository as ParentRepository;\n\nclass DemoRepository extends ParentRepository\n{\n    // ...\n    \n    public function model(): string\n    {\n        return AnotherDemo::class;\n    }\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"repositories--models-auto-linking",children:"Repositories & Models Auto-Linking"}),"\n",(0,r.jsx)(n.p,{children:"Apiato offers a repository auto-linking feature that eliminates the need for manual linking of repositories & models.\nThis automatic linking process relies on adhering to standard Apiato naming conventions for repositories."}),"\n",(0,r.jsxs)(n.p,{children:["By following the repository naming ",(0,r.jsx)(n.a,{href:"#rules",children:"rules"})," outlined above,\nyou allow Apiato to automatically link your repositories to their corresponding models."]}),"\n",(0,r.jsx)(n.p,{children:"To summarize:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Repositories must be stored within the ",(0,r.jsx)(n.code,{children:"app/Containers/{section}/{container}/Data/Repositories"})," directory."]}),"\n",(0,r.jsxs)(n.li,{children:["The repository name should mirror the corresponding model's name while appending a ",(0,r.jsx)(n.code,{children:"Repository"})," suffix. For instance, a ",(0,r.jsx)(n.code,{children:"User"})," model corresponds to a ",(0,r.jsx)(n.code,{children:"UserRepository"})," repository class."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,r.jsxs)(n.p,{children:["Pagination is automatically applied when you use the ",(0,r.jsx)(n.code,{children:"paginate"})," method with a model repository:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"{\n    $this->userRepository->paginate();\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To move between pages of results, you can use the ",(0,r.jsx)(n.code,{children:"page"})," query parameter like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"api.apiato.test/v1/users?page=200\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"page"})," parameter in any ",(0,r.jsx)(n.code,{children:"GET"})," request that lists records."]}),"\n",(0,r.jsxs)(n.p,{children:["Whenever a request returns paginated results,\nyou'll find information about the pagination in the ",(0,r.jsx)(n.strong,{children:"meta"})," section of the response,\nwhich tells you things like the total number of records, the number on the current page, and more."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'"data": [...],\n"meta": {\n    "pagination": {\n        "total": 2000,\n        "count": 30,\n        "per_page": 10,\n        "current_page": 20,\n        "total_pages": 200,\n        "links": []\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"limiting-results-per-page",children:"Limiting Results Per Page"}),"\n",(0,r.jsxs)(n.p,{children:["You can control the number of results displayed on a single page using the ",(0,r.jsx)(n.code,{children:"limit"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the pagination limit is set to 10.\nIf you don't specify the ",(0,r.jsx)(n.code,{children:"?limit="})," parameter in your request, the response will contain 10 records per page."]}),"\n",(0,r.jsxs)(n.p,{children:["You can adjust the default pagination limit in the ",(0,r.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotenv",children:"PAGINATION_LIMIT_DEFAULT=10\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For instance, if you want to receive 100 resources per page, add the ",(0,r.jsx)(n.code,{children:"?limit=100"})," query parameter to your request:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"api.apiato.test/v1/users?limit=100\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will return 100 resources within a single page of results.\nYou can also combine the ",(0,r.jsx)(n.code,{children:"limit"})," and ",(0,r.jsx)(n.code,{children:"page"})," query parameters to access the next 100 resources:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"api.apiato.test/v1/users?limit=100&page=2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"maximum-pagination-limit",children:"Maximum Pagination Limit"}),"\n",(0,r.jsxs)(n.p,{children:["You can also set the maximum number of resources\nthat can be returned in a single page by setting the ",(0,r.jsx)(n.code,{children:"$maxPaginationLimit"})," property in your repository class."]}),"\n",(0,r.jsx)(n.p,{children:"For example, to set the maximum number of resources to 20, you can do the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"protected $maxPaginationLimit = 20;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"disabling-pagination",children:"Disabling Pagination"}),"\n",(0,r.jsxs)(n.p,{children:["You can allow clients to request all data that matches their criteria and disable pagination,\nwhich can be applied either project-wide or on a per-repository basis.\nThis enables a request to retrieve all matching data by specifying ",(0,r.jsx)(n.code,{children:"limit=0"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To retrieve all matching entities in a single page, you can use the following query parameter:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"api.apiato.test/v1/users?limit=0\n"})}),"\n",(0,r.jsx)(n.h4,{id:"project-wide",children:"Project-Wide"}),"\n",(0,r.jsxs)(n.p,{children:["To allow disabling pagination for the entire project, set ",(0,r.jsx)(n.code,{children:"PAGINATION_SKIP=true"})," in the ",(0,r.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(n.h4,{id:"per-repository",children:"Per Repository"}),"\n",(0,r.jsxs)(n.p,{children:["If you wish to allow disabling pagination for a specific repository,\nset the ",(0,r.jsx)(n.code,{children:"$allowDisablePagination"})," property in your repository class."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Per-repository configurations take precedence and override the global settings."})}),"\n",(0,r.jsx)(n.h2,{id:"requestcriteria",children:"RequestCriteria"}),"\n",(0,r.jsx)(n.p,{children:"RequestCriteria is a standard Criteria implementation\nthat enables filters to be applied to the repository based on parameters sent in the request.\nIt allows for dynamic searches, data filtering, and query customization."}),"\n",(0,r.jsxs)(n.p,{children:["To utilize RequestCriteria, you need to apply it to the repository.\nApiato provides two methods, ",(0,r.jsx)(n.code,{children:"addRequestCriteria"})," and ",(0,r.jsx)(n.code,{children:"removeRequestCriteria"}),", which are available on all repositories."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example of how to use RequestCriteria:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"use App\\Containers\\AppSection\\User\\Data\\Repositories\\UserRepository;\nuse App\\Ship\\Parents\\Tasks\\Task as ParentTask;\n\nclass ListUsersTask extends ParentTask\n{\n    public function __construct(\n        protected readonly UserRepository $repository\n    ) {\n    }\n\n    public function run(): mixed\n    {\n        // $this->repository->removeRequestCriteria();\n        return $this->repository->addRequestCriteria()->paginate();\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["It's important to note\nthat using the ",(0,r.jsx)(n.code,{children:"removeRequestCriteria"})," method is only relevant if you have previously applied ",(0,r.jsx)(n.code,{children:"RequestCriteria"}),".\nIf it hasn't been applied, there is no need to remove it,\nas RequestCriteria is not automatically applied unless explicitly used."]}),"\n",(0,r.jsx)(n.h3,{id:"sorting--ordering",children:"Sorting & Ordering"}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"orderBy"})," and ",(0,r.jsx)(n.code,{children:"sortedBy"})," parameters to sort the data in the response."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"sortedBy"})," parameter is typically employed in conjunction with the ",(0,r.jsx)(n.code,{children:"orderBy"})," parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, the ",(0,r.jsx)(n.code,{children:"orderBy"})," parameter sorts the data in ",(0,r.jsx)(n.strong,{children:"Ascending"})," order.\nTo sort the data in ",(0,r.jsx)(n.strong,{children:"Descending"})," order, you can include ",(0,r.jsx)(n.code,{children:"sortedBy=desc"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"?orderBy=id&sortedBy=asc\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"?orderBy=created_at&sortedBy=desc\n?orderBy=name&sortedBy=asc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use the following values for the ",(0,r.jsx)(n.code,{children:"sortedBy"})," parameter:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"asc"})," for Ascending."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"desc"})," for Descending."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"searching",children:"Searching"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["There is much more to searching than what is covered here.\nPlease refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/andersao/l5-repository",children:"L5 Repository documentation"})," for more details."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the RequestCriteria is enabled for a specific route,\nyou can use the ",(0,r.jsx)(n.code,{children:"search"})," parameter in ",(0,r.jsx)(n.code,{children:"GET"})," HTTP requests on that route to perform searches."]}),"\n",(0,r.jsxs)(n.p,{children:["To make the search feature work, you need to specify which fields from the model should be searchable.\nIn your repository,\nset the ",(0,r.jsx)(n.code,{children:"fieldSearchable"})," field with the names of the fields\nyou want to make searchable or specify a relation to the fields."]}),"\n",(0,r.jsx)(n.p,{children:"Here's an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"protected $fieldSearchable = [\n    'name',\n    'email',\n    'product.name'\n];\n"})}),"\n",(0,r.jsx)(n.p,{children:'You can also set the type of condition that will be used to perform the query. The default condition is "=":'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"protected $fieldSearchable = [\n    'name' => 'like',\n    'email', // Default Condition \"=\"\n    'your_field' => 'condition'\n];\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"search"})," parameter in various ways:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"?search=John\n?search=name:John\n?search=name:John%20Doe\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Replace spaces with ",(0,r.jsx)(n.code,{children:"%20"})," in the URL (e.g., ",(0,r.jsx)(n.code,{children:"search=keyword%20here"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"searching-with-hashed-ids",children:"Searching with Hashed IDs"}),"\n",(0,r.jsxs)(n.p,{children:["If you have ",(0,r.jsx)(n.a,{href:"/docs/next/security/hash-id",children:"Hash ID"})," enabled and want to search a hashed field,\nlike a user ID, you need to instruct the ",(0,r.jsx)(n.code,{children:"RequestCriteria"})," to decode it before performing the search."]}),"\n",(0,r.jsx)(n.p,{children:"For example,\nif you have a search query like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"`?search=id:XbPW7awNkzl83LD6;parent_id:aYOxlpzRMwrX3gD7;some_hashed_id:NxOpZowo9GmjKqdR`\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You should update your ",(0,r.jsx)(n.code,{children:"addRequestCriteria"})," method as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"$this->repository->addRequestCriteria(['id', 'parent_id', 'some_hashed_id'])->all();\n"})}),"\n",(0,r.jsx)(n.h3,{id:"filtering",children:"Filtering"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"filter"})," parameter can be used in any HTTP request to control the response size by specifying the data you want in the response."]}),"\n",(0,r.jsxs)(n.p,{children:["For example, to retrieve only the ",(0,r.jsx)(n.code,{children:"id"})," and ",(0,r.jsx)(n.code,{children:"status"})," fields from a Model, you can use the ",(0,r.jsx)(n.code,{children:"filter"})," parameter like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"api.apiato.test/v1/users?filter=id;status\n"})}),"\n",(0,r.jsx)(n.p,{children:"The response will include only the specified fields, as shown in the example response:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": [\n    {\n      "id": "0one37vjk49rp5ym",\n      "status": "approved"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["It's important to note that the transformer used to format the data is also filtered.\nThis means that only the fields specified in the filter are present, and all other fields are excluded.\nThis filtering also applies to all ",(0,r.jsx)(n.a,{href:"/docs/next/components/main-components/transformers#including-relationships",children:"included relationships"})," of the object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": [\n    {\n      "id": "0one37vjk49rp5ym",\n      "status": "approved",\n      "products": {\n        "data": [\n          {\n            "id": "bmo7y84xpgeza06k",\n            "status": "pending"\n          },\n          {\n            "id": "o0wzxbg0q4k7jp9d",\n            "status": "fulfilled"\n          }\n        ]\n      },\n      "recipients": {\n        "data": [\n          {\n            "id": "r6lbekg8rv5ozyad"\n          }\n        ]\n      },\n      "store": {\n        "data": {\n          "id": "r6lbekg8rv5ozyad"\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"caching",children:"Caching"}),"\n",(0,r.jsxs)(n.p,{children:["L5 Repository supports caching of queries.\nThis feature is ",(0,r.jsx)(n.code,{children:"disabled"})," by default.\nYou can enable caching in the ",(0,r.jsx)(n.code,{children:"app/Ship/Configs/repository.php"})," config or the ",(0,r.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"'cache' => [\n    'enabled' => true,\n],\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dotenv",children:"ELOQUENT_QUERY_CACHE=true\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["As per the L5 Repository documentation,\nyou need to implement the ",(0,r.jsx)(n.code,{children:"CacheableRepository"})," interface\nand use the ",(0,r.jsx)(n.code,{children:"CacheableRepositoryTrait"})," trait in your repository class to enable caching.\nHowever, Apiato already implements these two requirements in the parent ",(0,r.jsx)(n.code,{children:"Repository"})," class,"]})}),"\n",(0,r.jsx)(n.h3,{id:"skipping-cache",children:"Skipping Cache"}),"\n",(0,r.jsxs)(n.p,{children:["You can skip the cache for a specific request by adding the ",(0,r.jsx)(n.code,{children:"?skipCache=true"})," query parameter to the request URL."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"?skipCache=true\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"It's not recommended to skip the cache, but it's useful for testing purposes."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"additional-methods",children:"Additional Methods"}),"\n",(0,r.jsx)(n.p,{children:"Apiato extends the L5 Repository package by adding a few more methods to the repository class."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"#pushcriteriawith",children:"pushCriteriaWith"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"#findbyid",children:"findById"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"#getbyid",children:"getById"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"#findmany",children:"findMany"})]}),"\n",(0,r.jsx)(n.h4,{id:"pushcriteriawith",children:"pushCriteriaWith"}),"\n",(0,r.jsxs)(n.p,{children:["This method is a wrapper around the ",(0,r.jsx)(n.code,{children:"pushCriteria"})," method. It accepts data to be passed to the criteria class and allows for easier testing."]}),"\n",(0,r.jsx)(n.h4,{id:"findbyid",children:"findById"}),"\n",(0,r.jsxs)(n.p,{children:["This method is a wrapper around the ",(0,r.jsx)(n.code,{children:"find"})," method. But it returns ",(0,r.jsx)(n.code,{children:"null"})," if the record is not found."]}),"\n",(0,r.jsx)(n.h4,{id:"getbyid",children:"getById"}),"\n",(0,r.jsxs)(n.p,{children:["This method is a wrapper around the ",(0,r.jsx)(n.code,{children:"find"})," method. But it throws a ",(0,r.jsx)(n.code,{children:"NotFoundException"})," if the record is not found."]}),"\n",(0,r.jsx)(n.h4,{id:"findmany",children:"findMany"}),"\n",(0,r.jsxs)(n.p,{children:["This method is a wrapper around the ",(0,r.jsx)(n.code,{children:"find"})," method. But it returns an empty collection if no records are found."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const r={},t=s.createContext(r);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);