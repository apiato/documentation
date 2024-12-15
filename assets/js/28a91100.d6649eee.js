"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9361],{28417:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"framework-features/code-generator","title":"Code Generator","description":"Apiato comes with a powerful code generator that can help you to generate all the boilerplate code for your containers.","source":"@site/versioned_docs/version-12.x/framework-features/code-generator.md","sourceDirName":"framework-features","slug":"/framework-features/code-generator","permalink":"/docs/framework-features/code-generator","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/framework-features/code-generator.md","tags":[{"inline":true,"label":"framework-feature","permalink":"/docs/tags/framework-feature"},{"inline":true,"label":"code-generator","permalink":"/docs/tags/code-generator"}],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Code Generator","tags":["framework-feature","code-generator"]},"sidebar":"tutorialSidebar","previous":{"title":"Framework Features","permalink":"/docs/framework-features/"},"next":{"title":"API Versioning","permalink":"/docs/framework-features/api-versioning"}}');var r=t(74848),o=t(28453);const i={sidebar_position:1,title:"Code Generator",tags:["framework-feature","code-generator"]},s=void 0,c={},l=[{value:"Available Commands",id:"available-commands",level:2},{value:"Stub Customization",id:"stub-customization",level:2}];function p(e){const a={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.p,{children:["Apiato comes with a powerful code generator that can help you to generate all the boilerplate code for your containers.\nApiato code generator is valuable tool\nthat can significantly accelerate the development process\nby automating the creation of boilerplate code based on user inputs.\nFor example, with the ",(0,r.jsx)(a.code,{children:"apiato:generate:container"})," command,\nyou can quickly generate a complete container with fully functional CRUD operations,\ncomplete with test coverage."]}),"\n",(0,r.jsx)(a.p,{children:"To access the latest list of code generator commands you may run the following command:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"php artisan list apiato:generate\n"})}),"\n",(0,r.jsx)(a.h2,{id:"available-commands",children:"Available Commands"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'php artisan apiato:generate:action           Create a Action file for a Container\nphp artisan apiato:generate:configuration    Create a Configuration file for a Container\nphp artisan apiato:generate:container        Create a Container for apiato from scratch\nphp artisan apiato:generate:container:api    Create a Container for apiato from scratch (API Part)\nphp artisan apiato:generate:container:web    Create a Container for apiato from scratch (WEB Part)\nphp artisan apiato:generate:controller       Create a controller for a container\nphp artisan apiato:generate:event            Create a new Event class and its corresponding Listener\nphp artisan apiato:generate:exception        Create a new Exception class\nphp artisan apiato:generate:factory          Create a new Model Factory class for a given Model\nphp artisan apiato:generate:job              Create a new Job class\nphp artisan apiato:generate:listener         Create a new Event Listener class\nphp artisan apiato:generate:mail             Create a new Mail class\nphp artisan apiato:generate:middleware       Create a new Middleware class\nphp artisan apiato:generate:migration        Create an "empty" migration file for a Container\nphp artisan apiato:generate:model            Create a new Model class\nphp artisan apiato:generate:notification     Create a new Notification class\nphp artisan apiato:generate:policy           Create a new Policy class\nphp artisan apiato:generate:provider         Create a Service Provider for a Container\nphp artisan apiato:generate:readme           Create a README file for a Container\nphp artisan apiato:generate:repository       Create a new Repository class\nphp artisan apiato:generate:request          Create a new Request class\nphp artisan apiato:generate:route            Create a new Route class\nphp artisan apiato:generate:seeder           Create a new Seeder class\nphp artisan apiato:generate:subaction        Create a new SubAction class\nphp artisan apiato:generate:task             Create a Task file for a Container\nphp artisan apiato:generate:test:functional  Create a Functional Test file.\nphp artisan apiato:generate:test:testcase    Create the TestCase file.\nphp artisan apiato:generate:test:unit        Create a Unit Test file.\nphp artisan apiato:generate:transformer      Create a new Transformer class for a given Model\nphp artisan apiato:generate:value            Create a new Value class\n'})}),"\n",(0,r.jsx)(a.h2,{id:"stub-customization",children:"Stub Customization"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.code,{children:"apiato:generate"}),' commands utilize "stub" files that are pre-filled with values based on your input.\nIf you wish to make modifications to the files generated by Apiato,\nyou can create your own custom stub files and place them in the ',(0,r.jsx)(a.code,{children:"app/Ship/Generators/CustomStubs"})," directory.\nThese custom stubs will then override the default stubs used by Apiato.\nHowever, it is crucial to adhere to one essential rule:"]}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["The name of the file and the folder structure in ",(0,r.jsx)(a.code,{children:"app/Ship/Generators/CustomStubs"})," MUST exactly match those in ",(0,r.jsx)(a.code,{children:"vendor/apiato/core/Generator/Stubs"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["To illustrate the process, let's assume you want to customize the creation of an ",(0,r.jsx)(a.code,{children:"action"}),". Follow these steps:"]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["Locate the ",(0,r.jsx)(a.code,{children:"action.stub"})," file in ",(0,r.jsx)(a.code,{children:"vendor/apiato/core/Generator/Stubs/actions"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:["Copy the ",(0,r.jsx)(a.code,{children:"action.stub"})," file and paste it into the ",(0,r.jsx)(a.code,{children:"app/Ship/Generators/CustomStubs/actions"})," directory."]}),"\n",(0,r.jsxs)(a.li,{children:["Make the desired changes to the copied ",(0,r.jsx)(a.code,{children:"action.stub"})," file according to your requirements."]}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["By completing these steps, whenever you run the ",(0,r.jsx)(a.code,{children:"php artisan apiato:generate:action"})," command,\nyour customized stub file will be employed instead of the default one,\napplying your modifications to the generated ",(0,r.jsx)(a.code,{children:"action"})," files."]})]})}function d(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>s});var n=t(96540);const r={},o=n.createContext(r);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);