"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[2568],{158:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"core-features/query-parameters","title":"Query Parameters","description":"- Sorting & Ordering","source":"@site/versioned_docs/version-9.x/core-features/query-parameters.md","sourceDirName":"core-features","slug":"/core-features/query-parameters","permalink":"/docs/9.x/core-features/query-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/query-parameters.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618748235000,"frontMatter":{"title":"Query Parameters"},"sidebar":"docs","previous":{"title":"Social Authentication","permalink":"/docs/9.x/core-features/social-authentication"},"next":{"title":"Default Endpoints","permalink":"/docs/9.x/core-features/default-endpoints"}}');var s=i(74848),d=i(28453);const l={title:"Query Parameters"},t=void 0,a={},c=[{value:"Sorting &amp; Ordering",id:"sorting-ordering",level:2},{value:"Searching",id:"searching",level:2},{value:"Search any field for multiple keywords",id:"search-any-field-for-multiple-keywords",level:4},{value:"Search in a specific field",id:"search-in-a-specific-field",level:4},{value:"Search in specific fields for multiple keywords",id:"search-in-specific-fields-for-multiple-keywords",level:4},{value:"Define query condition",id:"define-query-condition",level:4},{value:"Define search fields for search",id:"define-search-fields-for-search",level:3},{value:"Define the query condition for search",id:"define-the-query-condition-for-search",level:3},{value:"Filtering",id:"filtering",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Limit",id:"limit",level:2},{value:"Relationships (include)",id:"relationships-include",level:2},{value:"How to use it",id:"relationships-include-how-to-use-it",level:3},{value:"Nested Includes",id:"relationships-include-nested-includes",level:3},{value:"Caching skipping",id:"caching-skipping",level:2},{value:"Configuration",id:"configuration",level:2},{value:"See the Query parameters from the User Developer perspective",id:"see-the-query-parameters-from-the-user-developer-perspective",level:2},{value:"More Information",id:"more-information",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#sorting-ordering",children:"Sorting & Ordering"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#searching",children:"Searching"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#search-any-field-for-multiple-keywords",children:"Search any field for multiple keywords"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#search-in-a-specific-field",children:"Search in a specific field"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#search-in-specific-fields-for-multiple-keywords",children:"Search in specific fields for multiple keywords"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#define-query-condition",children:"Define query condition"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#define-search-fields-for-search",children:"Define search fields for search"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#define-the-query-condition-for-search",children:"Define the query condition for search"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#filtering",children:"Filtering"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#pagination",children:"Pagination"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#limit",children:"Limit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#relationships-include",children:"Relationships (include)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#caching-skipping",children:"Caching skipping"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#configuration",children:"Configuration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#see-the-query-parameters-from-the-user-developer-perspective",children:"See the Query parameters from the User Developer perspective"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#more-information",children:"More Information"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Users often need to control the response data, thus the apiato supports some useful and common query parameters:"}),"\n",(0,s.jsx)(n.h2,{id:"sorting-ordering",children:"Sorting & Ordering"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"?sortedBy="})," parameter is usually used with the ",(0,s.jsx)(n.code,{children:"orderBy"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["By default, the ",(0,s.jsx)(n.code,{children:"orderBy"})," sorts the data in ",(0,s.jsx)(n.strong,{children:"Ascending"})," order, if you want the data sorted in ",(0,s.jsx)(n.strong,{children:"Descending"})," order, you can add ",(0,s.jsx)(n.code,{children:"&sortedBy=desc"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?orderBy=id&sortedBy=asc\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?orderBy=created_at&sortedBy=desc\n?orderBy=name&sortedBy=asc\n"})}),"\n",(0,s.jsx)(n.p,{children:"Accepts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"asc"})," for Ascending."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"desc"})," for Descending."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the L5 Repository)"})}),"\n",(0,s.jsx)(n.h2,{id:"searching",children:"Searching"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"?search="})," parameter can be applied to any ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"GET"})})," HTTP request."]}),"\n",(0,s.jsxs)(n.p,{children:["For the search to work you need to add ",(0,s.jsx)(n.code,{children:"fieldSearchable"})," to the Repository of the Model."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"<?php\n\nprotected $fieldSearchable = [\n    'name',\n    'email',\n    // ...\n];\n\n// OR\n\nprotected $fieldSearchable = [\n    'name'  => 'like',\n    'email' => '=',\n    // ...\n];\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?search=John\n?search=name:John\n?search=name:John%20Doe\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Notice should replace the space with ",(0,s.jsx)(n.code,{children:"%20"}),"."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Space should be replaced with ",(0,s.jsx)(n.code,{children:"%20"})," (search=keyword%20here)."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"search-any-field-for-multiple-keywords",children:"Search any field for multiple keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?search=first keyword;second keyword\n"})}),"\n",(0,s.jsx)(n.h4,{id:"search-in-a-specific-field",children:"Search in a specific field"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?search=field:keyword here\n"})}),"\n",(0,s.jsx)(n.h4,{id:"search-in-specific-fields-for-multiple-keywords",children:"Search in specific fields for multiple keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?search=field1:first field keyword;field2:second field keyword\n"})}),"\n",(0,s.jsx)(n.h4,{id:"define-query-condition",children:"Define query condition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?search=field:keyword&searchFields=name:like\n"})}),"\n",(0,s.jsx)(n.p,{children:"Checkout the Search Page for full implementation example."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the L5 Repository)"})}),"\n",(0,s.jsx)(n.h3,{id:"define-search-fields-for-search",children:"Define search fields for search"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?search=name:John&email:john@main.com\n?search=name:John;email:john@main.com\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the L5 Repository)"})}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"search-query-parameter",children:"Search query parameter"})," page, for how to set it up and control the searchability."]}),"\n",(0,s.jsx)(n.h3,{id:"define-the-query-condition-for-search",children:"Define the query condition for search"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?searchFields=name:like\n?searchFields=email:=\n?searchFields=name:like;email:=\n?search=git&searchFields=url:like\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the L5 Repository)"})}),"\n",(0,s.jsx)(n.h2,{id:"filtering",children:"Filtering"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"?filter="})," parameter can be applied to any HTTP request and is used to control the response size, by defining what\ndata you want back in the response."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,s.jsxs)(n.p,{children:["Return only ID and Name from that Model, (everything else will be returned as ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?filter=id;status\n"})}),"\n",(0,s.jsx)(n.p,{children:"Example Response, including only id and status:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "data": [\n    {\n      "id": "0one37vjk49rp5ym",\n      "status": "approved",\n      "products": {\n        "data": [\n          {\n            "id": "bmo7y84xpgeza06k",\n            "status": "pending"\n          },\n          {\n            "id": "o0wzxbg0q4k7jp9d",\n            "status": "fulfilled"\n          }\n        ]\n      },\n      "recipients": {\n        "data": [\n          {\n            "id": "r6lbekg8rv5ozyad"\n          }\n        ]\n      },\n      "store": {\n        "data": {\n          "id": "r6lbekg8rv5ozyad"\n        }\n      }\n    }...\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the L5 Repository)"})}),"\n",(0,s.jsx)(n.p,{children:"Note that the transformer, which is used to output / format the data is also filtered. This means, that only the fields\nto be filtered are present - all other fields are excluded. This also applies for all (!) relationships (i.e., includes)\nof the object."}),"\n",(0,s.jsx)(n.h2,{id:"pagination",children:"Pagination"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"?page="})," parameter can be applied to any ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"GET"})})," HTTP request responsible for listing records (mainly for Paginated data)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?page=200\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["Pagination object is always returned in ",(0,s.jsx)(n.strong,{children:"meta"})," when pagination is available on the endpoint."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'  "data": [...],\n  "meta": {\n    "pagination": {\n      "total": 2000,\n      "count": 30,\n      "per_page": 30,\n      "current_page": 22,\n      "total_pages": 1111,\n      "links": {\n        "previous": "http://api.domain.test/endpoint?page=21"\n      }\n    }\n  }\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the Laravel Paginator)"})}),"\n",(0,s.jsx)(n.h2,{id:"limit",children:"Limit"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"?limit="})," parameter can be applied to define, how many results should be returned on one page (see also ",(0,s.jsx)(n.code,{children:"Pagination"}),"!)."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?limit=100\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This would return 100 resources within one page of the result. Of course, the ",(0,s.jsx)(n.code,{children:"limit"})," and ",(0,s.jsx)(n.code,{children:"page"})," query parameter can be\ncombined in order to get the next 100 resources:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?limit=100&page=2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In order to allow clients to request all data that matches their criteria (e.g., search-criteria) and disable pagination,\nyou can manually override the ",(0,s.jsx)(n.code,{children:"$allowDisablePagination"})," property in your specific ",(0,s.jsx)(n.code,{children:"Repository"})," class. A requester can then\nget all data (with no pagination applied) by requesting ",(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?limit=0"}),". This will return all matching\nentities."]}),"\n",(0,s.jsx)(n.h2,{id:"relationships-include",children:"Relationships (include)"}),"\n",(0,s.jsx)(n.p,{children:"Include relationships for complex data structures."}),"\n",(0,s.jsx)(n.p,{children:"Get an object with its relationships:"}),"\n",(0,s.jsxs)(n.p,{children:["For this to work, your ",(0,s.jsx)(n.code,{children:"Transformer"})," should have the relationships defined on it.\n",(0,s.jsxs)(n.em,{children:["Check the ",(0,s.jsx)(n.a,{href:".././main-components/transformers",children:"Transformers"})," for more details on how to define such relationships."]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can include such relationships by adding the ",(0,s.jsx)(n.code,{children:"include"})," query parameter with comma ",(0,s.jsx)(n.code,{children:","})," separated names, like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?include=tags,user\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is also possible to"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"?include="})," parameter can be used with any endpoint if it is supported."]}),"\n",(0,s.jsx)(n.h3,{id:"relationships-include-how-to-use-it",children:"How to use it"}),"\n",(0,s.jsxs)(n.p,{children:["Let's say there is a ",(0,s.jsx)(n.code,{children:"Driver"})," and a ",(0,s.jsx)(n.code,{children:"Car"})," object. Also, there is an ",(0,s.jsx)(n.code,{children:"/cars"})," endpoint that returns all ",(0,s.jsx)(n.code,{children:"Car"})," objects.\nThe ",(0,s.jsx)(n.code,{children:"?include"})," parameter allows getting all cars with their respective drivers in one request by calling ",(0,s.jsx)(n.code,{children:"/cars?include=driver"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["However, for this parameter to work, the ",(0,s.jsx)(n.code,{children:"CarTransformer"}),", which handles the ",(0,s.jsx)(n.code,{children:"/cars"})," endpoint should clearly define that it\naccepts ",(0,s.jsx)(n.code,{children:"driver"})," as relationship (in the ",(0,s.jsx)(n.strong,{children:"Available Relationships"})," section)."]}),"\n",(0,s.jsx)(n.h3,{id:"relationships-include-nested-includes",children:"Nested Includes"}),"\n",(0,s.jsxs)(n.p,{children:['It is also possible to request "nested includes". Extend the example from above. Imagine, that a ',(0,s.jsx)(n.code,{children:"Driver"})," may also have a\nrelationship to an ",(0,s.jsx)(n.code,{children:"Address"})," object. You can access this information as well by calling ",(0,s.jsx)(n.code,{children:"?include=driver,driver.address"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Of course, the ",(0,s.jsx)(n.code,{children:"address"})," include is defined in the respective ",(0,s.jsx)(n.code,{children:"DriverTransformer"})," that is used here."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Usage:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"api.domain.test/endpoint?include=relationship\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Where to define the includes:"})}),"\n",(0,s.jsxs)(n.p,{children:["Every Transformer can have 2 types of includes ",(0,s.jsx)(n.code,{children:"$availableIncludes"})," and ",(0,s.jsx)(n.code,{children:"$defaultIncludes"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"    protected $availableIncludes = [\n        'products',\n        'store',\n        'recipients',\n    ];\n\n    protected $defaultIncludes = [\n        'invoice',\n    ];\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$defaultIncludes"})," will not be listed in the response, only the ",(0,s.jsx)(n.code,{children:"$availableIncludes"})," will be."]}),"\n",(0,s.jsxs)(n.p,{children:["Visit the ",(0,s.jsx)(n.a,{href:".././main-components/transformers",children:"Transformers"})," page for more details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the Fractal Transformer)"})}),"\n",(0,s.jsx)(n.h2,{id:"caching-skipping",children:"Caching skipping"}),"\n",(0,s.jsx)(n.p,{children:'Note: You need to turn the Eloquent Query Caching ON for this feature to work. Checkout the Configuration Page "ELOQUENT_QUERY_CACHE".'}),"\n",(0,s.jsx)(n.p,{children:"To run a new query and force disabling the cache on certain endpoints, you can use this parameter"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"?skipCache=true\n"})}),"\n",(0,s.jsx)(n.p,{children:"It's not recommended to keep skipping cache as it has bad impact on the performance."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(provided by the L5 Repository)"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Most of these parameters are provided by the L5 Repository and configurable from the ",(0,s.jsx)(n.code,{children:"Ship/Configs/repository.php"})," file.\nSome of them are built in house, or inherited from other packages such as Fractal."]}),"\n",(0,s.jsx)(n.h2,{id:"see-the-query-parameters-from-the-user-developer-perspective",children:"See the Query parameters from the User Developer perspective"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generate the Default API documentation"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Visit the documentation URL"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["More details in the ",(0,s.jsx)(n.a,{href:"api-docs-generator",children:"API Docs Generator"})," page."]}),"\n",(0,s.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,s.jsx)(n.p,{children:"For more details on these parameters check out these links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/andersao/l5-repository#example-the-criteria",children:"l5-repository"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://fractal.thephpleague.com/transformers/",children:"Fractal Transformers"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var r=i(96540);const s={},d=r.createContext(s);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);