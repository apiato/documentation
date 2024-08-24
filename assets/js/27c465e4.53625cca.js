"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3795],{48353:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(74848),a=n(28453);const r={title:"Pagination"},o=void 0,s={id:"core-features/pagination",title:"Pagination",description:"- Limit",source:"@site/versioned_docs/version-11.x/core-features/pagination.md",sourceDirName:"core-features",slug:"/core-features/pagination",permalink:"/docs/11.x/core-features/pagination",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/core-features/pagination.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629e3,frontMatter:{title:"Pagination"},sidebar:"docs",previous:{title:"Data Caching",permalink:"/docs/11.x/core-features/data-caching"},next:{title:"API Versioning",permalink:"/docs/11.x/core-features/api-versioning"}},d={},l=[{value:"Limit",id:"limit",level:3},{value:"Change the default pagination limit",id:"change-the-default-pagination-limit",level:3},{value:"Skip the Pagination Limit",id:"skip-the-pagination-limit",level:3},{value:"Project Wide",id:"project-wide",level:3},{value:"Per Repository",id:"per-repository",level:3}];function c(e){const i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#limit",children:"Limit"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#change-the-default-pagination-limit",children:"Change the default pagination limit"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#skip-the-pagination-limit",children:"Skip the Pagination Limit"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For pagination apiato uses the ",(0,t.jsx)(i.a,{href:"https://packagist.org/packages/prettus/l5-repository",children:"L5 Repository Package"})," and the\npagination gets applied whenever you use the ",(0,t.jsx)(i.code,{children:"paginate"})," function on any model repository\n(example: ",(0,t.jsx)(i.code,{children:"$stores = $this->storeRepository->paginate();"}),")."]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"?page="})," parameter can be applied to any ",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.code,{children:"GET"})})," HTTP request responsible for listing records (mainly for Paginated data)."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Usage:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"api.domain.test/endpoint?page=200\n"})}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.em,{children:["Pagination object is always returned in ",(0,t.jsx)(i.strong,{children:"meta"})," when pagination is available on the endpoint."]})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:'  "data": [...],\n  "meta": {\n    "pagination": {\n      "total": 2000,\n      "count": 30,\n      "per_page": 30,\n      "current_page": 22,\n      "total_pages": 1111,\n      "links": {\n        "previous": "http://api.domain.test/endpoint?page=21"\n      }\n    }\n  }\n'})}),"\n",(0,t.jsx)(i.h3,{id:"limit",children:"Limit"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"?limit="})," parameter can be applied to define, how many results should be returned on one page (also see ",(0,t.jsx)(i.a,{href:"../core-features/query-parameters#pagination",children:"Pagination"}),")."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"Usage:"})}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"api.domain.test/endpoint?limit=100\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This would return 100 resources within one page of the result. Of course, the ",(0,t.jsx)(i.code,{children:"limit"})," and ",(0,t.jsx)(i.code,{children:"page"})," query parameter can be\ncombined in order to get the next 100 resources:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"api.domain.test/endpoint?limit=100&page=2\n"})}),"\n",(0,t.jsx)(i.h3,{id:"change-the-default-pagination-limit",children:"Change the default pagination limit"}),"\n",(0,t.jsxs)(i.p,{children:["Open the ",(0,t.jsx)(i.code,{children:".env"})," file and set a number for ",(0,t.jsx)(i.code,{children:"PAGINATION_LIMIT_DEFAULT"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-env",children:"PAGINATION_LIMIT_DEFAULT=10\n"})}),"\n",(0,t.jsxs)(i.p,{children:["This is used in the ",(0,t.jsx)(i.code,{children:"config/repository.php"})," which is the config file of the ",(0,t.jsx)(i.strong,{children:"L5 Repository"})," Package."]}),"\n",(0,t.jsx)(i.h3,{id:"skip-the-pagination-limit",children:"Skip the Pagination Limit"}),"\n",(0,t.jsxs)(i.p,{children:["In order to allow clients to request all data that matches their criteria (e.g. search-criteria) and disable pagination,\nyou can do it either project wide or per repository. After that a request can get all the data\n(with no pagination applied) by applying ",(0,t.jsx)(i.code,{children:"limit=0"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["This will return all matching entities:",(0,t.jsx)(i.br,{}),"\n",(0,t.jsx)(i.code,{children:"api.domain.test/endpoint?limit=0"})]}),"\n",(0,t.jsx)(i.h3,{id:"project-wide",children:"Project Wide"}),"\n",(0,t.jsxs)(i.p,{children:["Set ",(0,t.jsx)(i.code,{children:"PAGINATION_SKIP=true"})," in ",(0,t.jsx)(i.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(i.h3,{id:"per-repository",children:"Per Repository"}),"\n",(0,t.jsxs)(i.p,{children:["Override the ",(0,t.jsx)(i.code,{children:"$allowDisablePagination"})," property in your specific ",(0,t.jsx)(i.code,{children:"Repository"})," class."]}),"\n",(0,t.jsxs)(i.admonition,{type:"note",children:[(0,t.jsx)(i.mdxAdmonitionTitle,{}),(0,t.jsx)(i.p,{children:"Per repository configs override the global config and have precedence."})]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var t=n(96540);const a={},r=t.createContext(a);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);