"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[2919],{86760:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"components/main-components/subactions","title":"Sub Actions","description":"SubActions are designed to eliminate code duplication within Actions.","source":"@site/docs/components/main-components/subactions.md","sourceDirName":"components/main-components","slug":"/components/main-components/subactions","permalink":"/docs/next/components/main-components/subactions","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/components/main-components/subactions.md","tags":[{"inline":true,"label":"component","permalink":"/docs/next/tags/component"},{"inline":true,"label":"main-component","permalink":"/docs/next/tags/main-component"},{"inline":true,"label":"sub-action","permalink":"/docs/next/tags/sub-action"},{"inline":true,"label":"action","permalink":"/docs/next/tags/action"},{"inline":true,"label":"controller","permalink":"/docs/next/tags/controller"},{"inline":true,"label":"request","permalink":"/docs/next/tags/request"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Sub Actions","tags":["component","main-component","sub-action","action","controller","request"]},"sidebar":"tutorialSidebar","previous":{"title":"Exceptions","permalink":"/docs/next/components/main-components/exceptions"},"next":{"title":"Optional Components","permalink":"/docs/next/components/optional-components/"}}');var o=t(74848),s=t(28453);const a={sidebar_position:10,title:"Sub Actions",tags:["component","main-component","sub-action","action","controller","request"]},c=void 0,r={},l=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"SubActions are designed to eliminate code duplication within Actions.\nThey enable Actions to share a sequence of Tasks, thus promoting reusability.\nSimilar to how Tasks enable Actions to share specific functionalities,\nSubActions serve to share a predefined set of Tasks."}),"\n",(0,o.jsx)(e.p,{children:"All the features and capabilities available for regular Actions are also applicable to SubActions."}),"\n",(0,o.jsxs)(e.p,{children:["To generate new SubActions you may use the ",(0,o.jsx)(e.code,{children:"apiato:generate:subaction"})," interactive command:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"php artisan apiato:generate:subaction\n"})}),"\n",(0,o.jsx)(e.h2,{id:"definition--principles",children:"Definition & Principles"}),"\n",(0,o.jsxs)(e.p,{children:["Read ",(0,o.jsx)(e.a,{href:"https://github.com/Mahmoudz/Porto#definitions--principles",children:(0,o.jsx)(e.strong,{children:"Porto SAP Documentation (#Sub-Actions)"})}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"rules",children:"Rules"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["All SubActions:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["MUST be placed in the ",(0,o.jsx)(e.code,{children:"app/Containers/{Section}/{Container}/Actions"})," directory."]}),"\n",(0,o.jsxs)(e.li,{children:["MUST extend the ",(0,o.jsx)(e.code,{children:"App\\Ship\\Parents\\Actions\\SubAction"})," class.","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["The parent extension SHOULD be aliased as ",(0,o.jsx)(e.code,{children:"ParentSubAction"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Actions\n                \u251c\u2500\u2500 ValidateAddressSubAction.php\n                \u251c\u2500\u2500 BuildOrderSubAction.php\n                \u2514\u2500\u2500 ...\n"})}),"\n",(0,o.jsx)(e.h2,{id:"code-example",children:"Code Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-php",children:"use ...\nuse App\\Ship\\Parents\\Actions\\SubAction as ParentSubAction;\n\nclass DemoSubAction extends ParentSubAction\n{\n    public function __construct(\n        private readonly DemoTask $demoTask\n    ) {\n    }\n\n    public function run(array $data)\n    {\n        return $this->demoTask->run($data);\n    }\n}\n"})})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);