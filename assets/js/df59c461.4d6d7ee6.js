"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4261],{38459:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"core-features/search-query-parameter","title":"Search Query Parameter","description":"Below we\'ll see how to set up a Search Query Parameter, on a Model:","source":"@site/versioned_docs/version-9.x/core-features/search-query-parameter.md","sourceDirName":"core-features","slug":"/core-features/search-query-parameter","permalink":"/docs/9.x/core-features/search-query-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/search-query-parameter.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618748235000,"frontMatter":{"title":"Search Query Parameter"},"sidebar":"docs","previous":{"title":"Validation","permalink":"/docs/9.x/core-features/validation"},"next":{"title":"ETag","permalink":"/docs/9.x/core-features/etag"}}');var t=s(74848),a=s(28453);const o={title:"Search Query Parameter"},i=void 0,c={},l=[];function p(e){const n={code:"code",em:"em",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Below we'll see how to set up a Search Query Parameter, on a Model:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Add searchable Fields on the Model Repository, ",(0,t.jsx)(n.em,{children:"all the other steps are normal steps"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\User\\Data\\Repositories;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Ship\\Parents\\Repositories\\Repository;\n\nclass UserRepository extends Repository implements UserRepositoryInterface\n{\n\n    protected $fieldSearchable = [\n        'name'  => 'like',\n        'id'    => '=',\n        'email' => '=',\n    ];\n\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Create basic list and search Task"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\User\\Tasks;\n\nuse App\\Containers\\User\\Contracts\\UserRepositoryInterface;\nuse App\\Port\\Action\\Abstracts\\Action;\n\nclass ListUsersTask extends Action\n{\n    private $userRepository;\n\n    public function __construct(UserRepositoryInterface $userRepository)\n    {\n        $this->userRepository = $userRepository;\n    }\n\n    public function run($order = true)\n    {\n        return $this->userRepository->paginate();\n    }\n}\n\t \n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Create basic Action to call that basic Task, and maybe other Tasks later in the future when needed"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\User\\Actions;\n\nuse App\\Containers\\User\\Tasks\\ListUsersTask;\nuse App\\Port\\Action\\Abstracts\\Action;\n\nclass ListAndSearchUsersAction extends Action\n{\n\n    private $listUsersTask;\n\n    public function __construct(ListUsersTask $listUsersTask)\n    {\n        $this->listUsersTask = $listUsersTask;\n    }\n\n    public function run($order = true)\n    {\n        return $this->listUsersTask->run($order);\n    }\n} \n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Use the Action from a Controller"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"\n<?php\n\npublic function listAllUsers()\n{\n    $users = Apiato::call('User@ListAndSearchUsersAction');\n\n    return $this->response->paginator($users, new UserTransformer());\n} \n\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["Call it from anywhere as follows: [GET] ",(0,t.jsx)(n.code,{children:"http://api.apiato.com/users?search=Mahmoud@apiato.com"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var r=s(96540);const t={},a=r.createContext(t);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);