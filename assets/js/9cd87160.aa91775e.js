"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[6101],{62361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"security/registration","title":"Registration","description":"Apiato supports two default user registration methods:","source":"@site/versioned_docs/version-12.x/security/registration.mdx","sourceDirName":"security","slug":"/security/registration","permalink":"/docs/security/registration","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/security/registration.mdx","tags":[],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697551473000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Registration"},"sidebar":"tutorialSidebar","previous":{"title":"Values","permalink":"/docs/components/optional-components/values"},"next":{"title":"Authentication","permalink":"/docs/security/authentication"}}');var s=n(74848),o=n(28453);const r={sidebar_position:1,title:"Registration"},a=void 0,c={},l=[{value:"Register by Credentials",id:"register-by-credentials",level:2},{value:"Register by Social Account",id:"register-by-social-account",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Apiato supports two default user registration methods:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#register-by-credentials",children:"Register by Credentials"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#register-by-social-account",children:"Register by Social Account"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can also extend these methods or add new ones to customize your registration process."}),"\n",(0,s.jsx)(t.h2,{id:"register-by-credentials",children:"Register by Credentials"}),"\n",(0,s.jsxs)(t.p,{children:["To register a new user, send a ",(0,s.jsx)(t.code,{children:"POST"})," request to the ",(0,s.jsx)(t.code,{children:"/register"})," endpoint."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"api.apiato.test/v1/register\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["Don't forget to add ",(0,s.jsx)(t.code,{children:"Accept: application/json"})," header to your request."]})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"/register"})," endpoint expects a string email address and a string password field."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "email": "gandalg@the.grey",\n  "password": "password"\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"You should receive a response similar to the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": null,\n    "email": "john@doe.com",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null\n  },\n  "meta": {\n    "include": [\n        "roles",\n        "permissions"\n    ],\n    "custom": []\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"register-by-social-account",children:"Register by Social Account"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"(Facebook, Twitter, Google, etc...)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Checkout the ",(0,s.jsx)(t.a,{href:"/docs/pacakges/social-authentication",children:"Social Authentication"})," documentation."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);