"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[6274],{28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}},84521:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"core-features/authorization","title":"Authorization","description":"- How it works","source":"@site/versioned_docs/version-10.x/core-features/authorization.md","sourceDirName":"core-features","slug":"/core-features/authorization","permalink":"/docs/10.x/core-features/authorization","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/authorization.md","tags":[],"version":"10.x","lastUpdatedBy":"mohammad-alavi","lastUpdatedAt":1631803396000,"frontMatter":{"title":"Authorization"},"sidebar":"docs","previous":{"title":"Authentication","permalink":"/docs/10.x/core-features/authentication"},"next":{"title":"User Registration","permalink":"/docs/10.x/core-features/user-registration"}}');var r=n(74848),o=n(28453);const t={title:"Authorization"},a=void 0,d={},l=[{value:"How it works",id:"how-it-works",level:2},{value:"Responses",id:"responses",level:2},{value:"Assign Roles &amp; Permission to the Testing User",id:"assign-roles-permission-to-the-testing-user",level:2},{value:"Seeding some users (Admins)",id:"seeding-some-users-admins",level:2},{value:"Roles &amp; Permissions guards",id:"roles-permissions-guards",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#how-it-works",children:"How it works"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#responses",children:"Responses"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#assign-roles-permission-to-the-testing-user",children:"Assign Roles & Permission to the Testing User"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#seeding-some-users-admins",children:"Seeding some users (Admins)"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"#roles-permissions-guards",children:"Roles & Permissions guards"})}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container."}),"\n",(0,r.jsxs)(s.p,{children:["Behind the scenes apiato is using the ",(0,r.jsx)(s.a,{href:"https://laravel.com/docs/authorization",children:"Laravel's authorization"})," functionality that was introduced in version 5.1.11 with the helper package ",(0,r.jsx)(s.a,{href:"https://github.com/spatie/laravel-permission",children:"laravel-permission"}),". So you can always refer to the correspond documentation for more information."]}),"\n",(0,r.jsx)(s.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)(s.p,{children:"Authorization in apiato is very simple and easy."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Create some Roles and permissions. By default, an ",(0,r.jsx)(s.code,{children:"admin"})," role and some permissions are provided by Apiato. You can find the code in ",(0,r.jsx)(s.code,{children:"app/Containers/AppSection/Authorization/Data/Seeders/*"})," directory."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Attach some permissions to the roles."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Now start creating users (or use existing users), to assign them to the new created Roles."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Finally, you need to protect your endpoints by Permissions (or/and Roles). The right place to do that is the Requests class."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["Example protecting the (delete user) endpoint with ",(0,r.jsx)(s.code,{children:"delete-users"})," permission:"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-php",children:"class DeleteUserRequest extends Request\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => '',\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess',\n        ]);\n    }\n}\n\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["For detailed explanation of this example, please visit the ",(0,r.jsx)(s.a,{href:"../main-components/requests",children:"Requests"})," Page."]})}),"\n",(0,r.jsx)(s.h2,{id:"responses",children:"Responses"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Authorization failed JSON response:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "message": "This action is unauthorized."\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"assign-roles-permission-to-the-testing-user",children:"Assign Roles & Permission to the Testing User"}),"\n",(0,r.jsxs)(s.p,{children:["You will need to set ",(0,r.jsx)(s.code,{children:"$access"})," property in your test class, check out the ",(0,r.jsx)(s.a,{href:"../miscellaneous/tests-helpers",children:"Tests Helpers"})," page for more details."]}),"\n",(0,r.jsx)(s.h2,{id:"seeding-some-users-admins",children:"Seeding some users (Admins)"}),"\n",(0,r.jsxs)(s.p,{children:["By default, Apiato comes with a ",(0,r.jsx)(s.code,{children:"Super Admin"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"This Super Admin Credentials are:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["email: ",(0,r.jsx)(s.a,{href:"mailto:admin@admin.com",children:"admin@admin.com"})]}),"\n",(0,r.jsx)(s.li,{children:"password: admin"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This Admin seeded by ",(0,r.jsx)(s.code,{children:"app/Containers/Authorization/Data/Seeders/AuthorizationDefaultUsersSeeder_3.php"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The Default Super User, has a default role ",(0,r.jsx)(s.code,{children:"admin"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"admin"})," default role ",(0,r.jsx)(s.strong,{children:"has no permissions given to it"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["To give permissions to the ",(0,r.jsx)(s.code,{children:"admin"})," role (or any other role), you can use the dedicated endpoints (from your custom Admin Interface) or use this command ",(0,r.jsx)(s.code,{children:"php artisan apiato:permissions:toRole admin"})," to give it all the permissions in the system."]}),"\n",(0,r.jsxs)(s.p,{children:["Checkout each container ",(0,r.jsx)(s.strong,{children:"Seeders"})," directory ",(0,r.jsx)(s.code,{children:"app/Containers/AppSection/{container-name}/Data/Seeders/"}),", to edit the default ",(0,r.jsx)(s.strong,{children:"Users"}),", ",(0,r.jsx)(s.strong,{children:"Roles"})," and ",(0,r.jsx)(s.strong,{children:"Permissions"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"roles-permissions-guards",children:"Roles & Permissions guards"}),"\n",(0,r.jsxs)(s.p,{children:["By default, Apiato uses a single guard called ",(0,r.jsx)(s.code,{children:"web"})," for all it's roles and permissions, you can add/edit this behavior and support multiple guards at any time. Refer to the ",(0,r.jsx)(s.a,{href:"https://github.com/spatie/laravel-permission#using-multiple-guards",children:"laravel-permission"})," package for more details."]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);