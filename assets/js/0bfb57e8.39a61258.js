"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},s),{},{components:n})):a.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={title:"Requests"},i=void 0,l={unversionedId:"getting-started/requests",id:"version-9.x/getting-started/requests",title:"Requests",description:"* Form content types",source:"@site/versioned_docs/version-9.x/getting-started/requests.md",sourceDirName:"getting-started",slug:"/getting-started/requests",permalink:"/docs/9.x/getting-started/requests",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/getting-started/requests.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"Apr 10, 2021",frontMatter:{title:"Requests"},sidebar:"version-9.x/docs",previous:{title:"Overview",permalink:"/docs/9.x/getting-started/overview"},next:{title:"Responses",permalink:"/docs/9.x/getting-started/responses"}},p={},d=[{value:"Form content types (W3C)",id:"form-content-types",level:2},{value:"ASCII payload",id:"ascii-payload",level:3},{value:"JSON payload",id:"json-payload",level:3},{value:"HTTP Request Headers",id:"http-request-headers",level:2},{value:"Calling Endpoints",id:"calling-endpoints",level:2},{value:"Calling unprotected endpoint example:",id:"calling-unprotected-endpoint",level:4},{value:"Calling protected endpoint (passing Bearer Token) example:",id:"calling-protected-endpoint",level:4}],s={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#form-content-types"},"Form content types")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#http-request-headers"},"HTTP Request Headers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#calling-endpoints"},"Calling Endpoints"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#calling-unprotected-endpoint"},"Calling unprotected endpoint example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#calling-protected-endpoint"},"Calling protected endpoint (passing Bearer Token) example"))))),(0,r.kt)("h2",{id:"form-content-types"},"Form content types (W3C)"),(0,r.kt)("p",null,"By default, Apiato is configured to encode simple text/ASCII data ",(0,r.kt)("inlineCode",{parentName:"p"},"x-www-form-urlencoded"),". However, it does support\nother types as well."),(0,r.kt)("h3",{id:"ascii-payload"},"ASCII payload"),(0,r.kt)("p",null,"To tell the web server that you are posting simple text/ASCII payload (",(0,r.kt)("inlineCode",{parentName:"p"},"name=Mahmoud+Zalt&age=18"),"), you need to include\n",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type : x-www-form-urlencoded")," in the request header."),(0,r.kt)("h3",{id:"json-payload"},"JSON payload"),(0,r.kt)("p",null,"To tell the web server that you are posting JSON-formatted payload (",(0,r.kt)("inlineCode",{parentName:"p"},"{name : 'Mahmoud Zalt', age: 18}"),"), you need to\ninclude ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type = application/json")," in the request header."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(you may wish return Json data in this case as well, you can do so by changing the response serializer from\n",(0,r.kt)("inlineCode",{parentName:"em"},"DataArraySerializer")," to ",(0,r.kt)("inlineCode",{parentName:"em"},"JsonApiSerializer"),", more about that in the response page).")),(0,r.kt)("h2",{id:"http-request-headers"},"HTTP Request Headers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Header"),(0,r.kt)("th",{parentName:"tr",align:null},"Value Sample"),(0,r.kt)("th",{parentName:"tr",align:null},"When to send it"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accept"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/json")),(0,r.kt)("td",{parentName:"tr",align:null},"MUST be sent with every endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"application/x-www-form-urlencoded")),(0,r.kt)("td",{parentName:"tr",align:null},"MUST be sent when passing Data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Bearer {Access-Token-Here}")),(0,r.kt)("td",{parentName:"tr",align:null},"MUST be sent whenever the endpoint requires (Authenticated User).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"If-None-Match"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"811b22676b6a4a0489c920073c0df914")),(0,r.kt)("td",{parentName:"tr",align:null},"MAY be sent to indicate a specific ",(0,r.kt)("strong",{parentName:"td"},"ETag")," of an prior Request to this Endpoint. If both ETags match (i.e., are the same) a HTTP 304 (not modified) is returned.")))),(0,r.kt)("blockquote",null,(0,r.kt)("h4",{parentName:"blockquote",id:"heads-up"},"Heads Up!"),(0,r.kt)("p",{parentName:"blockquote"},"Normally you should include the ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept : application/json")," HTTP header when you call a JSON API. However, in Apiato\nyou can force your users to send ",(0,r.kt)("inlineCode",{parentName:"p"},"application/json")," by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"'force-accept-header' => true,")," in\n",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php")," or allow them to skip it completely by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"'force-accept-header' => false,"),".\nBy default this flag is set to false.")),(0,r.kt)("h2",{id:"calling-endpoints"},"Calling Endpoints"),(0,r.kt)("h4",{id:"calling-unprotected-endpoint"},"Calling unprotected endpoint example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X POST -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded; -F "email=admin@admin.com" -F "password=admin" -F "=" "http://api.domain.test/v2/register"\n')),(0,r.kt)("h4",{id:"calling-protected-endpoint"},"Calling protected endpoint (passing Bearer Token) example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." -H "http://api.domain.test/v1/users"\n')))}u.isMDXComponent=!0}}]);