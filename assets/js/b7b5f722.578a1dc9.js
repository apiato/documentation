"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9940],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}},49034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"core-features/user-registration","title":"User Registration","description":"- Register users by credentials (email and passwords)","source":"@site/versioned_docs/version-10.x/core-features/user-registration.md","sourceDirName":"core-features","slug":"/core-features/user-registration","permalink":"/docs/10.x/core-features/user-registration","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/user-registration.md","tags":[],"version":"10.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1619394104000,"frontMatter":{"title":"User Registration"},"sidebar":"docs","previous":{"title":"Authorization","permalink":"/docs/10.x/core-features/authorization"},"next":{"title":"Query Parameters","permalink":"/docs/10.x/core-features/query-parameters"}}');var r=n(74848),o=n(28453);const i={title:"User Registration"},a=void 0,c={},l=[{value:"Register users by credentials (email and passwords)",id:"register-users-by-credentials-email-and-passwords",level:3},{value:"Register users by Social Account",id:"register-users-by-social-account",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#register-users-by-credentials-email-and-passwords",children:"Register users by credentials (email and passwords)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#register-users-by-social-account",children:"Register users by Social Account"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"register-users-by-credentials-email-and-passwords",children:"Register users by credentials (email and passwords)"}),"\n",(0,r.jsxs)(t.p,{children:["Call the ",(0,r.jsx)(t.code,{children:"http://api.apiato.test/v1/register"})," endpoint (you can find its documentation after generating the API Docs."]}),"\n",(0,r.jsxs)(t.p,{children:["Check out the ",(0,r.jsx)(t.code,{children:"registerUser"})," endpoint in the API Routes files."]}),"\n",(0,r.jsx)(t.p,{children:"This will register a new User and respond with user object."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Registration request:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"curl --request POST \\\n  --url http://api.apiato.test/v1/register \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'email=john%40doe.com&password=password&name=John%20Doe'\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Registration response:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": "John Doe",\n    "email": "john@doe.com",\n    "email_verified_at": null,\n    "gender": null,\n    "birth": null,\n    "created_at": "2021-04-15T14:17:24.000000Z",\n    "updated_at": "2021-04-15T14:17:24.000000Z",\n    "readable_created_at": "1 second ago",\n    "readable_updated_at": "1 second ago"\n  },\n  "meta": {\n    "include": [\n      "roles"\n    ],\n    "custom": []\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Note: After registration in order to get the user access token you will have to send another call to ",(0,r.jsx)(t.code,{children:"http://api.example.com/v1/oauth/token"})," with following fields and values"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"username => your_username e.g. admin@admin.com\npassword => your_password\ngrant_type => password\nclient_id => your_client_id\nclient_secret => your_client_secret\n"})}),"\n",(0,r.jsx)(t.p,{children:"For third-party clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport."}),"\n",(0,r.jsxs)(t.p,{children:["For first-party clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at ",(0,r.jsx)(t.code,{children:"ProxyLoginForWebClientAction"})," Action in Authentication Container."]}),"\n",(0,r.jsx)(t.h3,{id:"register-users-by-social-account",children:"Register users by Social Account"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"(Facebook, Twitter, Google..)"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Checkout the ",(0,r.jsx)(t.a,{href:"../additional-features/apiato-containers/social-authentication",children:"Social Authentication"})," Page for how to Sign up with Social Account."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);