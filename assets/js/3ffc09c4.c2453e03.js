"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6580],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(45072),r=(n(11504),n(95788));const a={sidebar_position:3,title:"Authorization",tags:["component","optional-component","authorization","request","policy"]},i=void 0,s={unversionedId:"security/authorization",id:"security/authorization",title:"Authorization",description:"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.",source:"@site/docs/security/authorization.mdx",sourceDirName:"security",slug:"/security/authorization",permalink:"/docs/next/security/authorization",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/security/authorization.mdx",tags:[{label:"component",permalink:"/docs/next/tags/component"},{label:"optional-component",permalink:"/docs/next/tags/optional-component"},{label:"authorization",permalink:"/docs/next/tags/authorization"},{label:"request",permalink:"/docs/next/tags/request"},{label:"policy",permalink:"/docs/next/tags/policy"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Authorization",tags:["component","optional-component","authorization","request","policy"]},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/docs/next/security/authentication"},next:{title:"Email Verification",permalink:"/docs/next/security/email-varification"}},l={},p=[{value:"How it works",id:"how-it-works",level:2},{value:"Code Example",id:"code-example",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apiato provides a Role-Based Access Control (RBAC) through its Authorization Container.\nBehind the scenes,\nApiato uses the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/spatie/laravel-permission"},"Laravel Permission")," package."),(0,r.yg)("h2",{id:"how-it-works"},"How it works"),(0,r.yg)("p",null,"Authorization in Apiato is indeed straightforward and easy.\nIt operates by linking permissions to roles and then assigning roles to users."),(0,r.yg)("p",null,"To implement the authorization process, follow these steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create Roles and Permissions"),(0,r.yg)("li",{parentName:"ol"},"Attach Permissions to Roles"),(0,r.yg)("li",{parentName:"ol"},"Attach Roles and/or Permissions to Users"),(0,r.yg)("li",{parentName:"ol"},"Protect Endpoints with Permissions and/or Roles")),(0,r.yg)("p",null,"To ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/components/main-components/requests#request-properties"},"protect your endpoints"),",\nyou have to specify the required permissions and/or roles in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Request")," class.\nIn doing so, you can check whether the current user has the necessary access rights to reach a particular endpoint.\nBy verifying permissions and roles at the request level,\nyou ensure that unauthorized users are denied access before any further processing takes place."),(0,r.yg)("admonition",{title:"Default Roles & Permissions",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Apiato comes with some default Roles and Permissions.\nYou can find them in ",(0,r.yg)("inlineCode",{parentName:"p"},"app/Containers/AppSection/Authorization/Data/Seeders"),".\nYou can use them as a starting point, or delete them and create your own.")),(0,r.yg)("h2",{id:"code-example"},"Code Example"),(0,r.yg)("p",null,"Protecting the ",(0,r.yg)("strong",{parentName:"p"},"delete user")," endpoint with ",(0,r.yg)("inlineCode",{parentName:"p"},"delete-users")," permission:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use App\\Ship\\Parents\\Requests\\Request as ParentRequest;\n\nclass DeleteUserRequest extends ParentRequest\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => '',\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->check([\n            'hasAccess',\n        ]);\n    }\n}\n")),(0,r.yg)("p",null,"Authorization failed JSON response:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "This action is unauthorized.",\n  "errors": []\n}\n')))}d.isMDXComponent=!0}}]);