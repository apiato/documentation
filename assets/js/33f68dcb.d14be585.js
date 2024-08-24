"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4030],{82160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=n(74848),i=n(28453);const d={title:"Requests"},r=void 0,o={id:"getting-started/requests",title:"Requests",description:"* Form content types",source:"@site/versioned_docs/version-11.x/getting-started/requests.md",sourceDirName:"getting-started",slug:"/getting-started/requests",permalink:"/docs/11.x/getting-started/requests",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/getting-started/requests.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629e3,frontMatter:{title:"Requests"},sidebar:"docs",previous:{title:"Samples",permalink:"/docs/11.x/getting-started/samples"},next:{title:"Responses",permalink:"/docs/11.x/getting-started/responses"}},l={},a=[{value:"Form content types (W3C)",id:"form-content-types",level:2},{value:"ASCII payload",id:"ascii-payload",level:3},{value:"JSON payload",id:"json-payload",level:3},{value:"HTTP Request Headers",id:"http-request-headers",level:2},{value:"Heads Up!",id:"heads-up",level:4},{value:"Calling Endpoints",id:"calling-endpoints",level:2},{value:"Calling unprotected endpoint example:",id:"calling-unprotected-endpoint",level:4},{value:"Calling protected endpoint (passing Bearer Token) example:",id:"calling-protected-endpoint",level:4}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#form-content-types",children:"Form content types"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#http-request-headers",children:"HTTP Request Headers"})}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#calling-endpoints",children:"Calling Endpoints"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#calling-unprotected-endpoint",children:"Calling unprotected endpoint example"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#calling-protected-endpoint",children:"Calling protected endpoint (passing Bearer Token) example"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"form-content-types",children:"Form content types (W3C)"}),"\n",(0,s.jsxs)(t.p,{children:["By default, Apiato is configured to encode simple text/ASCII data ",(0,s.jsx)(t.code,{children:"x-www-form-urlencoded"}),". However, it does support\nother types as well."]}),"\n",(0,s.jsx)(t.h3,{id:"ascii-payload",children:"ASCII payload"}),"\n",(0,s.jsxs)(t.p,{children:["To tell the web server that you are posting simple text/ASCII payload (",(0,s.jsx)(t.code,{children:"name=John+Doe&age=18"}),"), you need to include\n",(0,s.jsx)(t.code,{children:"Content-Type : x-www-form-urlencoded"})," in the request header."]}),"\n",(0,s.jsx)(t.h3,{id:"json-payload",children:"JSON payload"}),"\n",(0,s.jsxs)(t.p,{children:["To tell the web server that you are posting JSON-formatted payload (",(0,s.jsx)(t.code,{children:"{name : 'John Doe', age: 18}"}),"), you need to\ninclude ",(0,s.jsx)(t.code,{children:"Content-Type = application/json"})," in the request header."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["(you may wish return Json data in this case as well, you can do so by changing the response serializer from\n",(0,s.jsx)(t.code,{children:"DataArraySerializer"})," to ",(0,s.jsx)(t.code,{children:"JsonApiSerializer"}),", more about that in the ",(0,s.jsx)(t.a,{href:"./responses",children:"response page"}),")."]})}),"\n",(0,s.jsx)(t.h2,{id:"http-request-headers",children:"HTTP Request Headers"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Header"}),(0,s.jsx)(t.th,{children:"Value Sample"}),(0,s.jsx)(t.th,{children:"When to send it"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Accept"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"application/json"})}),(0,s.jsx)(t.td,{children:"MUST be sent with every endpoint."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Content-Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"application/x-www-form-urlencoded"})}),(0,s.jsx)(t.td,{children:"MUST be sent when passing Data."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Authorization"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Bearer {Access-Token-Here}"})}),(0,s.jsx)(t.td,{children:"MUST be sent whenever the endpoint requires (Authenticated User)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"If-None-Match"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"811b22676b6a4a0489c920073c0df914"})}),(0,s.jsxs)(t.td,{children:["MAY be sent to indicate a specific ",(0,s.jsx)(t.strong,{children:"ETag"})," of an prior Request to this Endpoint. If both ETags match (i.e., are the same) a HTTP 304 (not modified) is returned."]})]})]})]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.h4,{id:"heads-up",children:"Heads Up!"}),"\n",(0,s.jsxs)(t.p,{children:["Normally you should include the ",(0,s.jsx)(t.code,{children:"Accept : application/json"})," HTTP header when you call a JSON API. However, in Apiato\nyou can force your users to send ",(0,s.jsx)(t.code,{children:"application/json"})," by setting ",(0,s.jsx)(t.code,{children:"'force-accept-header' => true,"})," in\n",(0,s.jsx)(t.code,{children:"app/Ship/Configs/apiato.php"})," or allow them to skip it completely by setting the ",(0,s.jsx)(t.code,{children:"'force-accept-header' => false,"}),".\nBy default this flag is set to false."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"calling-endpoints",children:"Calling Endpoints"}),"\n",(0,s.jsx)(t.h4,{id:"calling-unprotected-endpoint",children:"Calling unprotected endpoint example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/json" -H "Content-Type: application/x-www-form-urlencoded; -F "email=admin@admin.com" -F "password=admin" -F "=" "http://api.domain.test/v2/register"\n'})}),"\n",(0,s.jsx)(t.h4,{id:"calling-protected-endpoint",children:"Calling protected endpoint (passing Bearer Token) example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9..." -H "http://api.domain.test/v1/users"\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);