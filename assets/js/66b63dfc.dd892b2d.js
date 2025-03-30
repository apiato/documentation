"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[5083],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},75359:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"getting-started/best-practices","title":"Best Practices","description":"REST APIs are one of the most common kinds of web interfaces available today.","source":"@site/docs/getting-started/best-practices.md","sourceDirName":"getting-started","slug":"/getting-started/best-practices","permalink":"/docs/next/getting-started/best-practices","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/getting-started/best-practices.md","tags":[],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1707153375000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Best Practices"},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/docs/next/getting-started/installation"},"next":{"title":"Customized Laravel Components","permalink":"/docs/next/getting-started/customized-laravel-components"}}');var i=t(74848),r=t(28453);const o={sidebar_position:2,title:"Best Practices"},l=void 0,a={},c=[{value:"What Is A RESTful API?",id:"what-is-a-restful-api",level:2},{value:"Accept And Respond With JSON",id:"accept-and-respond-with-json",level:2},{value:"HTTP Methods Usage In RESTful API&#39;s",id:"http-methods-usage-in-restful-apis",level:2},{value:"General Principles For HTTP Methods",id:"general-principles-for-http-methods",level:2},{value:"General Guidelines And Principles For RESTful URLs",id:"general-guidelines-and-principles-for-restful-urls",level:2},{value:"Use Logical Nesting On Endpoints",id:"use-logical-nesting-on-endpoints",level:2},{value:"Good URL Examples",id:"good-url-examples",level:2},{value:"Handle Errors Gracefully And Return Standard Error Codes",id:"handle-errors-gracefully-and-return-standard-error-codes",level:2},{value:"Naming Conventions For Routes &amp; Actions",id:"naming-conventions-for-routes-and-actions",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"REST APIs are one of the most common kinds of web interfaces available today.\nThey allow various clients, including browser apps, to communicate with services via the REST API.\nTherefore, it\u2019s very important to design REST APIs properly so that we won\u2019t run into problems down the road.\nWe have to take into account security, performance, and ease of use for API consumers."}),"\n",(0,i.jsx)(n.p,{children:"Otherwise, we create problems for clients that use our APIs,\nwhich isn\u2019t pleasant and detracts people from using our API.\nIf we don\u2019t follow commonly accepted conventions,\nthen we confuse the maintainers of the API and the clients\nthat use them since it is different from what everyone expects."}),"\n",(0,i.jsx)(n.p,{children:"In this article, we'll look at how to design REST APIs to be easy to understand for anyone consuming them, future-proof,\nand secure and fast since they serve data to clients that may be confidential."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-restful-api",children:"What Is A RESTful API?"}),"\n",(0,i.jsx)(n.p,{children:"A REST API is an application programming interface architecture style\nthat conforms to specific architectural constraints,\nlike stateless communication and cacheable data.\nIt is not a protocol or standard.\nWhile REST APIs can be accessed through a number of communication protocols, most commonly, they are called over HTTPS,\nso the guidelines below apply to REST API endpoints that will be called over the internet."}),"\n",(0,i.jsx)(n.h2,{id:"accept-and-respond-with-json",children:"Accept And Respond With JSON"}),"\n",(0,i.jsxs)(n.p,{children:["Even though ",(0,i.jsx)(n.a,{href:"https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/",children:"some people think REST should only return hypertext"}),"\n(including ",(0,i.jsx)(n.a,{href:"https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven",children:"Roy Fielding"})," who created the term),\nREST APIs should accept JSON for request payload and also send responses to JSON.\nJSON is the standard for transferring data.\nAlmost every networked technology can use it:\nJavaScript has built-in methods to encode and decode JSON either through the Fetch API or another HTTP client.\nServer-side technologies have libraries that can decode JSON without doing much work."]}),"\n",(0,i.jsx)(n.h2,{id:"http-methods-usage-in-restful-apis",children:"HTTP Methods Usage In RESTful API's"}),"\n",(0,i.jsx)(n.p,{children:"The action should be indicated by the HTTP request method that we are making."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"GET: retrieve a resource."}),"\n",(0,i.jsx)(n.li,{children:"POST: create a new resource."}),"\n",(0,i.jsx)(n.li,{children:"PUT: update a resource (providing the entire resource)."}),"\n",(0,i.jsx)(n.li,{children:"PATCH: update a resource (providing only changed attributes)."}),"\n",(0,i.jsx)(n.li,{children:"DELETE: remove a resource."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The verbs map to ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",children:"CRUD"})," operations."]}),"\n",(0,i.jsx)(n.h2,{id:"general-principles-for-http-methods",children:"General Principles For HTTP Methods"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Don't ever use GET to alter state; to prevent Googlebot from corrupting your data. And use GET as much as possible."}),"\n",(0,i.jsx)(n.li,{children:"Don't use PUT unless you are updating an entire resource. And unless you can also legitimately do a GET on the same URI."}),"\n",(0,i.jsx)(n.li,{children:"Don't use POST to retrieve information that is long-lived or that might be reasonable to cache."}),"\n",(0,i.jsx)(n.li,{children:"Don't perform an operation that is not idempotent with PUT."}),"\n",(0,i.jsx)(n.li,{children:"Use GET for things like calculations, unless your input is large, in which case use POST."}),"\n",(0,i.jsx)(n.li,{children:"Use POST in preference to PUT when in doubt."}),"\n",(0,i.jsx)(n.li,{children:"Use POST whenever you have to do something that feels RPC-like."}),"\n",(0,i.jsx)(n.li,{children:"Use PUT for classes of resources that are larger or hierarchical."}),"\n",(0,i.jsx)(n.li,{children:"Use DELETE in preference to POST to remove resources."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general-guidelines-and-principles-for-restful-urls",children:"General Guidelines And Principles For RESTful URLs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A URL identifies a resource."}),"\n",(0,i.jsx)(n.li,{children:"URLs should include nouns, not verbs."}),"\n",(0,i.jsx)(n.li,{children:"Use plural nouns only for consistency (no singular nouns)."}),"\n",(0,i.jsx)(n.li,{children:"Use HTTP verbs (GET, POST, PUT, PATCH, DELETE) to operate on the collections and elements."}),"\n",(0,i.jsx)(n.li,{children:"You should not need to go deeper than resource/identifier/resource."}),"\n",(0,i.jsxs)(n.li,{children:["Put the version number at the base of your URL, for example ",(0,i.jsx)(n.code,{children:"http://api.apiato.test/v1/path/to/resource"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"If input data changes the logic of the endpoint, it should be passed in the URL. If not, it can go in the header. e.g., Auth Token."}),"\n",(0,i.jsx)(n.li,{children:"Don't use query parameters to alter state."}),"\n",(0,i.jsx)(n.li,{children:"Don't use mixed-case paths if you can help it; lowercase is best."}),"\n",(0,i.jsx)(n.li,{children:"Use hyphens to delimit words in the URIs."}),"\n",(0,i.jsx)(n.li,{children:"Don't use implementation-specific extensions in your URIs (.php, .py, .pl, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Limit your URI space as much as possible. And keep path segments short."}),"\n",(0,i.jsx)(n.li,{children:"Don't put metadata in the body of a response that should be in a header"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"use-logical-nesting-on-endpoints",children:"Use Logical Nesting On Endpoints"}),"\n",(0,i.jsx)(n.p,{children:"When designing endpoints, it makes sense to group those that contain associated information.\nThat is, if one object can contain another object, you should design the endpoint to reflect that.\nThis is good practice regardless of whether your data is structured like this in your database.\nIn fact,\nit may be advisable to avoid\nmirroring your database structure in your endpoints to avoid giving attackers unnecessary information."}),"\n",(0,i.jsxs)(n.p,{children:["For example, if we want an endpoint to get the comments for a news article,\nwe should append the ",(0,i.jsx)(n.code,{children:"/comments"})," path to the end of the ",(0,i.jsx)(n.code,{children:"/articles"})," path."]}),"\n",(0,i.jsx)(n.h2,{id:"good-url-examples",children:"Good URL Examples"}),"\n",(0,i.jsx)(n.p,{children:"With the two principles we discussed above in mind, let\u2019s look at some examples of good URLs."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Get all Articles:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Find a single Article by its unique identifier (ID):","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles/:articleId"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Find/Search Articles by one or more fields:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles?search=author:john"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles?search=author:john;color:white"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Order and Sort query result:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles?orderBy=created_at&sortedBy=desc"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles?search=author:john&orderBy=created_at&sortedBy=desc"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Specify optional fields:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles?filter=id;title;status"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles/:articleId?filter=id;title;status"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Get all Comments belonging to an Article:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles/:articleId/comments"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Include objects relationship (Comments/author) with the Article response:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles/:articleId?include=comments"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles/:articleId?include=comments,author"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Create new Article:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Add new Comment to an Article:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/articles/:articleId/comments"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the code above, we use the GET method on the path ",(0,i.jsx)(n.code,{children:"/articles/:articleId/comments"}),".\nWe get ",(0,i.jsx)(n.code,{children:"comments"})," on the article identified by ",(0,i.jsx)(n.code,{children:"articleId"})," and then return it in the response.\nWe add ",(0,i.jsx)(n.code,{children:"comments"})," after the ",(0,i.jsx)(n.code,{children:"/articles/:articleId"})," path segment to indicate that it\u2019s a child resource of /articles."]}),"\n",(0,i.jsxs)(n.p,{children:["This makes sense since ",(0,i.jsx)(n.code,{children:"comments"})," are the children objects of the ",(0,i.jsx)(n.code,{children:"articles"}),",\nassuming each article has its own comments.\nOtherwise, it\u2019s confusing to the user since this structure is generally accepted to be for accessing child objects.\nThe same principle also applies to the PUT, PATCH and DELETE endpoints.\nThey can all use the same kind of nesting structure for the path names."]}),"\n",(0,i.jsx)(n.h2,{id:"handle-errors-gracefully-and-return-standard-error-codes",children:"Handle Errors Gracefully And Return Standard Error Codes"}),"\n",(0,i.jsx)(n.p,{children:"To eliminate confusion for API users when an error occurs,\nwe should handle errors gracefully and return HTTP response codes that indicate what kind of error occurred.\nThis gives maintainers of the API enough information to understand the problem that\u2019s occurred.\nWe don\u2019t want errors to bring down our system, so we can leave them unhandled,\nwhich means that the API consumer has to handle them."}),"\n",(0,i.jsx)(n.p,{children:"Common error HTTP status codes include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"200 OK Server successfully returned the requested data."}),"\n",(0,i.jsx)(n.li,{children:"201 CREATED Server successfully created or modified the requested resource."}),"\n",(0,i.jsx)(n.li,{children:"204 NO CONTENT Server successfully deleted the requested resource."}),"\n",(0,i.jsx)(n.li,{children:"400 INVALID REQUEST The request was invalid or cannot be served. The exact error should be explained in the error payload. E.g. \u201eThe JSON is not valid\u201c."}),"\n",(0,i.jsx)(n.li,{children:"401 UNAUTHORIZED The request requires an user authentication."}),"\n",(0,i.jsx)(n.li,{children:"403 FORBIDDEN The server understood the request, but is refusing it or the access is not allowed."}),"\n",(0,i.jsx)(n.li,{children:"404 NOT FOUND There is no resource behind the URI."}),"\n",(0,i.jsx)(n.li,{children:"422 Unprocessable Entity Should be used if the server cannot process the enitity, e.g. if an image cannot be formatted or mandatory fields are missing in the payload."}),"\n",(0,i.jsx)(n.li,{children:"500 INTERNAL SERVER ERROR Internal Server Error."}),"\n",(0,i.jsx)(n.li,{children:"502 BAD GATEWAY Server received an invalid response from the upstream server while trying to fulfill the request."}),"\n",(0,i.jsx)(n.li,{children:"503 SERVICE UNAVAILABLE Service unavailable."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"naming-conventions-for-routes-and-actions",children:["Naming Conventions For ",(0,i.jsx)(n.a,{href:"/docs/next/components/main-components/routes",children:"Routes"})," & ",(0,i.jsx)(n.a,{href:"/docs/next/components/main-components/actions",children:"Actions"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ListResources"}),": to fetch all resources."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FindResourceByID"}),": to search for a single resource by its unique identifier."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CreateResource"}),": to create a new resource."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UpdateResource"}),": to update/edit existing resource."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DeleteResource"}),": to delete a resource."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);