"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9218],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var o=t(96540);const a={},s=o.createContext(a);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:n},e.children)}},89438:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"components/optional-components/values","title":"Values","description":"Value Objects are short names for known \\"Value Objects\\",","source":"@site/versioned_docs/version-12.x/components/optional-components/values.md","sourceDirName":"components/optional-components","slug":"/components/optional-components/values","permalink":"/docs/components/optional-components/values","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/values.md","tags":[{"inline":true,"label":"component","permalink":"/docs/tags/component"},{"inline":true,"label":"optional-component","permalink":"/docs/tags/optional-component"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"model","permalink":"/docs/tags/model"}],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Values","tags":["component","optional-component","value","model"]},"sidebar":"tutorialSidebar","previous":{"title":"Tests","permalink":"/docs/components/optional-components/tests"},"next":{"title":"Registration","permalink":"/docs/security/registration"}}');var a=t(74848),s=t(28453);const l={title:"Values",tags:["component","optional-component","value","model"]},i=void 0,r={},c=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:'Value Objects are short names for known "Value Objects",\nwhich are simple objects similar to Models in terms of representing data.\nHowever, unlike Models, Value Objects are not stored in the database and, therefore, do not have IDs.\nAdditionally, they do not possess functionality or modify any state; their sole purpose is to hold data.'}),"\n",(0,a.jsxs)(n.p,{children:["Value Objects are particularly well-suited for use with Laravel ",(0,a.jsx)(n.a,{href:"https://laravel.com/docs/eloquent-mutators#value-object-casting",children:"attributes casting"}),",\nwhich allows us to cast a Value Object to a specific type,\nenabling seamless integration with Eloquent models and database operations."]}),"\n",(0,a.jsxs)(n.p,{children:["To generate new values you may use the ",(0,a.jsx)(n.code,{children:"apiato:generate:value"})," interactive command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"php artisan apiato:generate:value\n"})}),"\n",(0,a.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All container-specific Values MUST be placed in the ",(0,a.jsx)(n.code,{children:"app/Containers/{section}/{container}/Values"})," directory."]}),"\n",(0,a.jsxs)(n.li,{children:["All general Values MUST be placed in the ",(0,a.jsx)(n.code,{children:"app/Ship/Values"})," directory."]}),"\n",(0,a.jsxs)(n.li,{children:["All Values MUST extend the ",(0,a.jsx)(n.code,{children:"App\\Ship\\Parents\\Values\\Value"})," class.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The parent extension SHOULD be aliased as ",(0,a.jsx)(n.code,{children:"ParentValue"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Values\n                \u251c\u2500\u2500 Output.php\n                \u251c\u2500\u2500 Region.php\n                \u2514\u2500\u2500 ...\n"})}),"\n",(0,a.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"class Location extends Value\n{\n    public function __construct(\n        public float $latitude,\n        public float $longitude,\n    ) {\n    }\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);