"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7258],{28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var r=s(96540);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}},78607:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"core-features/validation","title":"Validation","description":"Apiato uses the powerful Laravel validation system.","source":"@site/versioned_docs/version-10.x/core-features/validation.md","sourceDirName":"core-features","slug":"/core-features/validation","permalink":"/docs/10.x/core-features/validation","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/core-features/validation.md","tags":[],"version":"10.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1619394104000,"frontMatter":{"title":"Validation"},"sidebar":"docs","previous":{"title":"API Versioning","permalink":"/docs/10.x/core-features/api-versioning"},"next":{"title":"ETag","permalink":"/docs/10.x/core-features/etag"}}');var t=s(74848),a=s(28453);const i={title:"Validation"},o=void 0,l={},d=[{value:"Responses",id:"responses",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Apiato uses the powerful ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/validation",children:"Laravel validation"})," system."]}),"\n",(0,t.jsxs)(n.p,{children:["In Apiato, validation must be defined in ",(0,t.jsx)(n.a,{href:"../main-components/requests",children:"Request"})," component, since every request might have different rules."]}),"\n",(0,t.jsx)(n.p,{children:"Validation rules are automatically applied, once injecting the Request in the Controller."}),"\n",(0,t.jsx)(n.p,{children:"Requests help validating User data, accessibility, ownership and more."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example Request with Validation rules:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"namespace App\\Containers\\AppSection\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass RegisterUserRequest extends Request\n{\n    /**\n     * @return  array\n     */\n    public function rules()\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => 'required|min:2|max:400',\n        ];\n    }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Usage from Controller Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"    public function registerUser(RegisterUserRequest $request)\n    {\n        $user = app(RegisterUserAction::class)->run($request);\n        return $this->transform($user, UserTransformer::class);\n    }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"responses",children:"Responses"}),"\n",(0,t.jsx)(n.p,{children:"Validation Error response format:"}),"\n",(0,t.jsx)(n.p,{children:"Single Field:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Multiple Fields:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "message": "The given data was invalid.",\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ],\n    "password": [\n      "The password field is required."\n    ]\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["More details about requests in the ",(0,t.jsx)(n.a,{href:"../main-components/requests",children:"Requests"})," Page."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);