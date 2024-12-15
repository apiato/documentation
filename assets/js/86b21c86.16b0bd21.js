"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[6987],{48510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"core-features/data-caching","title":"Data Caching","description":"- Enable / Disable Eloquent Query Caching","source":"@site/versioned_docs/version-9.x/core-features/data-caching.md","sourceDirName":"core-features","slug":"/core-features/data-caching","permalink":"/docs/9.x/core-features/data-caching","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/data-caching.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618748235000,"frontMatter":{"title":"Data Caching"},"sidebar":"docs","previous":{"title":"Requests Monitor","permalink":"/docs/9.x/core-features/requests-monitor"},"next":{"title":"Pagination","permalink":"/docs/9.x/core-features/pagination"}}');var i=n(74848),a=n(28453);const o={title:"Data Caching"},r=void 0,c={},l=[{value:"Enable / Disable Eloquent Query Caching",id:"enable-disable-eloquent-query-caching",level:2},{value:"Change different caching settings",id:"change-different-caching-settings",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#enable-disable-eloquent-query-caching",children:"Enable / Disable Eloquent Query Caching"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#change-different-caching-settings",children:"Change different caching settings"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"enable-disable-eloquent-query-caching",children:"Enable / Disable Eloquent Query Caching"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"By default caching is disabled."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["To enable it, go to ",(0,i.jsx)(t.code,{children:"app/Ship/Configs/repository.php"})," config file and set ",(0,i.jsx)(t.code,{children:"cache"})," > ",(0,i.jsx)(t.code,{children:"enabled  => true"}),", or set it from the ",(0,i.jsx)(t.code,{children:".env"})," file using ",(0,i.jsx)(t.code,{children:"ELOQUENT_QUERY_CACHE"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["More details can be found ",(0,i.jsx)(t.a,{href:"https://github.com/andersao/l5-repository#cache-config",children:"here"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Users can skip the query caching and request new data by passing specific parameter to the Endpoint. Checkout the Query parameters page."}),"\n",(0,i.jsx)(t.h2,{id:"change-different-caching-settings",children:"Change different caching settings"}),"\n",(0,i.jsx)(t.p,{children:"You can use different cache setting for each repository."}),"\n",(0,i.jsx)(t.p,{children:"To set cache settings on each repository, first the caching must be enabled, second you need to set some properties on the repository class to override the default values."}),"\n",(0,i.jsxs)(t.p,{children:["For an example look at the ",(0,i.jsx)(t.code,{children:"app/Containers/Countries/Data/Repositories/CountryRepository.php"})," class. For more details about all the properties refer to ",(0,i.jsx)(t.a,{href:"https://github.com/andersao/l5-repository#cache-config",children:"the L5 repository package documentation"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Note: you don't need to use the ",(0,i.jsx)(t.code,{children:"CacheableRepository"})," trait or implement the ",(0,i.jsx)(t.code,{children:"CacheableInterface"})," since they both exist on the Abstract repository class (",(0,i.jsx)(t.code,{children:"App\\Ship\\Parents\\Repositories\\Repository"}),")."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);