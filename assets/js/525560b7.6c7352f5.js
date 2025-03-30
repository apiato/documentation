"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4847],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var r=t(96540);const o={},n=r.createContext(o);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(n.Provider,{value:s},e.children)}},94522:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"security/password-reset","title":"Password Reset","description":"Most web applications provide a way for users to reset their forgotten passwords.","source":"@site/docs/security/password-reset.md","sourceDirName":"security","slug":"/security/password-reset","permalink":"/docs/next/security/password-reset","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/security/password-reset.md","tags":[],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Password Reset"},"sidebar":"tutorialSidebar","previous":{"title":"Email Verification","permalink":"/docs/next/security/email-varification"},"next":{"title":"Hash ID","permalink":"/docs/next/security/hash-id"}}');var o=t(74848),n=t(28453);const i={sidebar_position:6,title:"Password Reset"},a=void 0,d={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Routing",id:"routing",level:2},{value:"Requesting The Password Reset Link",id:"requesting-the-password-reset-link",level:3},{value:"Resetting The Password",id:"resetting-the-password",level:3},{value:"Process Flow",id:"process-flow",level:2}];function l(e){const s={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Most web applications provide a way for users to reset their forgotten passwords.\nRather than forcing you to re-implement this by hand for every application you create,\nApiato provides convenient services for sending password reset links and secure resetting passwords."}),"\n",(0,o.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsxs)(s.p,{children:["All the configuration options for the password reset feature are located in the ",(0,o.jsx)(s.code,{children:"app/Containers/AppSection/Authorization/Configs/appSection-authentication"})," configuration file."]}),"\n",(0,o.jsxs)(s.p,{children:["Make sure that you have configured the ",(0,o.jsx)(s.code,{children:"MAIL_FROM_ADDRESS"})," in your ",(0,o.jsx)(s.code,{children:".env"})," file."]}),"\n",(0,o.jsxs)(s.p,{children:["Include your web app's password reset page URL, such as ",(0,o.jsx)(s.code,{children:"https://myapp.com/password/reset"}),",\nin the ",(0,o.jsx)(s.code,{children:"allowed-reset-password-urls"})," array within the ",(0,o.jsx)(s.code,{children:"appSection-authentication"})," configuration."]}),"\n",(0,o.jsx)(s.h2,{id:"routing",children:"Routing"}),"\n",(0,o.jsx)(s.h3,{id:"requesting-the-password-reset-link",children:"Requesting The Password Reset Link"}),"\n",(0,o.jsxs)(s.p,{children:["To request a password reset link, call the ",(0,o.jsx)(s.code,{children:"/password/forgot"})," endpoint with the user's email address."]}),"\n",(0,o.jsx)(s.h3,{id:"resetting-the-password",children:"Resetting The Password"}),"\n",(0,o.jsxs)(s.p,{children:["To reset the user's password, call the ",(0,o.jsx)(s.code,{children:"/password/reset"})," endpoint with the user's email address,\nnew password, and password reset token."]}),"\n",(0,o.jsx)(s.h2,{id:"process-flow",children:"Process Flow"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Add your web app's password reset page URL, for example, ",(0,o.jsx)(s.code,{children:"https://myapp.com/password/reset"}),", to the ",(0,o.jsx)(s.code,{children:"allowed-reset-password-urls"})," array within the ",(0,o.jsx)(s.code,{children:"appSection-authentication"})," configuration."]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["Call the ",(0,o.jsx)(s.code,{children:"/password/forgot"})," endpoint with a ",(0,o.jsx)(s.strong,{children:"reset URL"})," of your choice, which should correspond to one of the URLs in the ",(0,o.jsx)(s.code,{children:"allowed-reset-password-urls"})," array. This endpoint will send the user an email containing a link like this:",(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.code,{children:"https://myapp.com/password/resetd?email=mohammad.alavi1990@gmail.com&token=51f8d80182f3785648c9b9dc7162719d158fc418b3cca86c14963638ec83d663"})]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsxs)(s.p,{children:["When the user clicks on that link, they will be directed to your front-end app's password reset page. From there, you can collect the user's new password and make a call to the ",(0,o.jsx)(s.code,{children:"/password/reset"})," endpoint with all the required fields to complete the password reset."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);