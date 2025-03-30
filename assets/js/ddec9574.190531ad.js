"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7404],{28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>a});var o=i(96540);const t={},s=o.createContext(t);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),o.createElement(s.Provider,{value:n},e.children)}},59086:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"optional-components/configs","title":"Configs","description":"* Definition","source":"@site/versioned_docs/version-11.x/optional-components/configs.md","sourceDirName":"optional-components","slug":"/optional-components/configs","permalink":"/docs/11.x/optional-components/configs","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/configs.md","tags":[],"version":"11.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1659346629000,"frontMatter":{"title":"Configs"},"sidebar":"docs","previous":{"title":"Middlewares","permalink":"/docs/11.x/optional-components/middlewares"},"next":{"title":"Helpers","permalink":"/docs/11.x/optional-components/helpers"}}');var t=i(74848),s=i(28453);const c={title:"Configs"},a=void 0,r={},l=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Example simple Config file",id:"example-simple-config-file",level:4}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#definition",children:"Definition"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#principles",children:"Principles"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#rules",children:"Rules"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#code-samples",children:"Code Samples"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(n.p,{children:"Configs are files that contain configurations."}),"\n",(0,t.jsx)(n.p,{children:"In each Apiato container, there are two types of config files:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"the container specific config file (a config file that contains the container specific configurations)."}),"\n",(0,t.jsx)(n.li,{children:"the container third party packages config files (a config file that belongs to a third party package, required by the composer file of the container)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"principles",children:"Principles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Your custom config files and third party packages config files, should be placed in the Container, unless it's too generic then it can be placed on the Ship Layer."}),"\n",(0,t.jsx)(n.li,{children:"Containers can have as many config files as they need."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When publishing a third party package config file, move it manually to its container or to the Ship Configs folder in case it is generic."}),"\n",(0,t.jsx)(n.li,{children:"Framework config files (provided by Laravel) lives at the default config directory on the root of the project."}),"\n",(0,t.jsxs)(n.li,{children:["You SHOULD NOT add any config file to the root ",(0,t.jsx)(n.code,{children:"config"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["The container specific config file, MUST be named this way:",(0,t.jsx)(n.br,{}),"\n","camelCase of its Section name + ",(0,t.jsx)(n.code,{children:"-"})," + camelCase of its Container name, to prevent conflicts between third party packages and container specific packages.",(0,t.jsx)(n.br,{}),"\n","For example, config file inside ",(0,t.jsx)(n.code,{children:"MySection"})," > ",(0,t.jsx)(n.code,{children:"MyContainer"})," should be named like this: ",(0,t.jsx)(n.code,{children:"mySection-myContainer.php"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"- app\n  - Containers\n    {section-name}\n      - {container-name}\n        - Configs\n          - {section-name}-{container-name}.php\n          - package-config-file1.php\n          - ...\n  - Ship\n    - Configs\n      - apiato.php\n      - ...\n- config\n  - app.php\n  - ...\n"})}),"\n",(0,t.jsx)(n.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,t.jsx)(n.h4,{id:"example-simple-config-file",children:"Example simple Config file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"// app/Containers/{SectionName}/{ContainerName}/Configs/{section-name}-{container-name}.php\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Default Namespace\n    |--------------------------------------------------------------------------\n    */\n    'namespace'       => 'App',\n\n    // some other config params here...\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can access the respective configuration key like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$value = Config::get('{section-name}-{container-name}.namespace');     // returns 'App'\n$value = config('{section-name}-{container-name}.namespace');          // same, but using laravel helper function\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Further reading",type:"info",children:(0,t.jsxs)(n.p,{children:["More info at ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/configuration",children:"Laravel Docs"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);