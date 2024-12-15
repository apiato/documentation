"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7520],{20658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"core-features/user-registration","title":"User Registration","description":"- Register users by credentials (email and passwords)","source":"@site/versioned_docs/version-9.x/core-features/user-registration.md","sourceDirName":"core-features","slug":"/core-features/user-registration","permalink":"/docs/9.x/core-features/user-registration","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/user-registration.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618751700000,"frontMatter":{"title":"User Registration"},"sidebar":"docs","previous":{"title":"Authorization","permalink":"/docs/9.x/core-features/authorization"},"next":{"title":"Social Authentication","permalink":"/docs/9.x/core-features/social-authentication"}}');var r=n(74848),a=n(28453);const i={title:"User Registration"},o=void 0,c={},l=[{value:"Register users by credentials (email and passwords)",id:"register-users-by-credentials-email-and-passwords",level:3},{value:"Register users by Social Account",id:"register-users-by-social-account",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#register-users-by-credentials-email-and-passwords",children:"Register users by credentials (email and passwords)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#register-users-by-social-account",children:"Register users by Social Account"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"register-users-by-credentials-email-and-passwords",children:"Register users by credentials (email and passwords)"}),"\n",(0,r.jsxs)(t.p,{children:["Call the ",(0,r.jsx)(t.code,{children:"http://api.apiato.test/v1/register"})," endpoint (you can find its documentation after generating the API Docs."]}),"\n",(0,r.jsxs)(t.p,{children:["Check out the ",(0,r.jsx)(t.code,{children:"registerUser"})," endpoint in the API Routes files."]}),"\n",(0,r.jsx)(t.p,{children:"This will register a new User and respond with user object."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Registration request:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-http",children:"curl --request POST \\\n  --url http://api.apiato.test/v1/register \\\n  --header 'accept: application/json' \\\n  --header 'content-type: application/x-www-form-urlencoded' \\\n  --data 'email=apiato%40mail.com1&password=password&name=Mahmoud%20Zalt'\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Registration response:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "data": {\n    "object": "User",\n    "id": XbPW7awNkzl83LD6,\n    "name": "Mahmoud Zalt",\n    "email": "apiato@mail.com",\n    "confirmed": null,\n    "nickname": "Mega",\n    "gender": "male",\n    "birth": null,\n    "social_auth_provider": null,\n    "social_id": null,\n    "social_avatar": {\n      "avatar": null,\n      "original": null\n    },\n    "created_at": "2021-03-24T15:02:56.000000Z",\n    "updated_at": "2021-03-24T15:02:56.000000Z",\n    "readable_created_at": "19 seconds ago",\n    "readable_updated_at": "19 seconds ago"\n    "roles": {\n      "data": []\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Note: After registration in order to get the user access token you will have to send another call to ",(0,r.jsx)(t.code,{children:"http://api.example.com/v1/oauth/token"})," with following fields and values"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"username => your_username e.g. admin@admin.com\npassword => your_password\ngrant_type => password\nclient_id => your_client_id\nclient_secret => your_client_secret\n"})}),"\n",(0,r.jsx)(t.p,{children:"For Third-Party Clients you must have client ID and secret first. You can generate them by creating new client in your app using Laravel Passport."}),"\n",(0,r.jsxs)(t.p,{children:["For First-Party Clients you can use a proxy to add those fields on requests coming from your trusted client. For an example on how to do it look at ",(0,r.jsx)(t.code,{children:"ProxyLoginForAdminWebClientAction"})," Action in Authentication Container."]}),"\n",(0,r.jsx)(t.h3,{id:"register-users-by-social-account",children:"Register users by Social Account"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"(Facebook, Twitter, Google..)"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Checkout the ",(0,r.jsx)(t.a,{href:"./social-authentication",children:"Social Authentication"})," Page for how to Sign up with Social Account."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);