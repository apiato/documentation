"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[8153],{80619:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"security/authorization","title":"Authorization","description":"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.","source":"@site/docs/security/authorization.mdx","sourceDirName":"security","slug":"/security/authorization","permalink":"/docs/next/security/authorization","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/security/authorization.mdx","tags":[{"inline":true,"label":"component","permalink":"/docs/next/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/next/tags/optional-component"},{"inline":true,"label":"authorization","permalink":"/docs/next/tags/authorization"},{"inline":true,"label":"request","permalink":"/docs/next/tags/request"},{"inline":true,"label":"policy","permalink":"/docs/next/tags/policy"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1707555342000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Authorization","tags":["component","optional-component","authorization","request","policy"]},"sidebar":"tutorialSidebar","previous":{"title":"Authentication","permalink":"/docs/next/security/authentication"},"next":{"title":"Email Verification","permalink":"/docs/next/security/email-varification"}}');var s=n(74848),i=n(28453);const r={sidebar_position:3,title:"Authorization",tags:["component","optional-component","authorization","request","policy"]},a=void 0,c={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Code Example",id:"code-example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.\nBehind the scenes,\nApiato uses the ",(0,s.jsx)(t.a,{href:"https://github.com/spatie/laravel-permission",children:"Laravel Permission"})," package."]}),"\n",(0,s.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(t.p,{children:"Authorization in Apiato is indeed straightforward and easy.\nIt operates by linking permissions to roles and then assigning roles to users."}),"\n",(0,s.jsx)(t.p,{children:"To implement the authorization process, follow these steps:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Create Roles and Permissions"}),"\n",(0,s.jsx)(t.li,{children:"Attach Permissions to Roles"}),"\n",(0,s.jsx)(t.li,{children:"Attach Roles and/or Permissions to Users"}),"\n",(0,s.jsx)(t.li,{children:"Protect Endpoints with Permissions and/or Roles"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To ",(0,s.jsx)(t.a,{href:"/docs/next/components/main-components/requests#request-properties",children:"protect your endpoints"}),",\nyou have to specify the required permissions and/or roles in the ",(0,s.jsx)(t.code,{children:"Request"})," class.\nIn doing so, you can check whether the current user has the necessary access rights to reach a particular endpoint.\nBy verifying permissions and roles at the request level,\nyou ensure that unauthorized users are denied access before any further processing takes place."]}),"\n",(0,s.jsx)(t.admonition,{title:"Default Roles & Permissions",type:"info",children:(0,s.jsxs)(t.p,{children:["Apiato comes with some default Roles and Permissions.\nYou can find them in ",(0,s.jsx)(t.code,{children:"app/Containers/AppSection/Authorization/Data/Seeders"}),".\nYou can use them as a starting point, or delete them and create your own."]})}),"\n",(0,s.jsx)(t.h2,{id:"code-example",children:"Code Example"}),"\n",(0,s.jsxs)(t.p,{children:["Protecting the ",(0,s.jsx)(t.strong,{children:"delete user"})," endpoint with ",(0,s.jsx)(t.code,{children:"delete-users"})," permission:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"use App\\Ship\\Parents\\Requests\\Request as ParentRequest;\n\nclass DeleteUserRequest extends ParentRequest\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => '',\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->hasAccess();\n    }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Authorization failed JSON response:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "message": "This action is unauthorized.",\n  "errors": []\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);