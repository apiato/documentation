"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7831],{43641:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"additional-features/apiato-containers/documentation","title":"Documentation","description":"- Requirements","source":"@site/versioned_docs/version-10.x/additional-features/apiato-containers/documentation.md","sourceDirName":"additional-features/apiato-containers","slug":"/additional-features/apiato-containers/documentation","permalink":"/docs/10.x/additional-features/apiato-containers/documentation","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/additional-features/apiato-containers/documentation.md","tags":[],"version":"10.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Documentation"},"sidebar":"docs","previous":{"title":"Overview","permalink":"/docs/10.x/additional-features/apiato-containers/overview"},"next":{"title":"Debugger","permalink":"/docs/10.x/additional-features/apiato-containers/debugger"}}');var t=i(74848),s=i(28453);const a={title:"Documentation"},r=void 0,c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Write PHP <strong>docblock</strong>",id:"write-php-docblock",level:3},{value:"Run Documentation Generator",id:"run-documentation-generator",level:3},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found-",level:4},{value:"Visit Documentation URL&#39;s",id:"visit-docs-urls",level:3},{value:"Shared Response",id:"shared-response",level:3},{value:"Change Documentation Routes",id:"change-documentation-routes",level:2},{value:"Private Documentation Protection",id:"private-docs-protection",level:2},{value:"Documentation Container Customization",id:"documentation-customization",level:2},{value:"Edit Default Generated Values in Templates",id:"edit-default-generated-values-in-templates",level:3},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",level:3},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",level:3},{value:"Localization for Documentation Header",id:"localization-for-documentation-header",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#requirements",children:"Requirements"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#usage",children:"Usage"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsxs)(n.a,{href:"#write-php-docblock",children:["Write PHP ",(0,t.jsx)(n.strong,{children:"docblock"})]})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#run-documentation-generator",children:"Run Documentation Generator"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#visit-docs-urls",children:"Visit Documentation URL's"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#shared-response",children:"Shared Response"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#change-documentation-routes",children:"Change Documentation Routes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#private-docs-protection",children:"Private Documentation Protection"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#documentation-customization",children:"Documentation Container Customization"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#edit-default-generated-values-in-templates",children:"Edit Default Generated Values in Templates"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#change-the-documentations-urls",children:"Change the Documentations URL's"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#edit-the-documentation-header",children:"Edit the Documentation Header"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#localization-for-documentation-header",children:"Localization for Documentation Header"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Every great API needs a great Documentation."}),"\n",(0,t.jsxs)(n.p,{children:["Apiato make writing and generating documentations very easy with the ",(0,t.jsx)(n.code,{children:"php artisan apiato:apidoc"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install ",(0,t.jsx)(n.a,{href:"http://apidocjs.com/",children:"ApiDocJs"})," in the project directory"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["(",(0,t.jsx)(n.code,{children:"npm install apidoc"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["(Recommended) read the ",(0,t.jsx)(n.a,{href:"../../main-components/routes",children:"Routes"})," page first."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"composer require apiato/documentation-generator-container\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"This container is installed by default with an Apiato fresh installation."})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.h3,{id:"write-php-docblock",children:["Write PHP ",(0,t.jsx)(n.strong,{children:"docblock"})]}),"\n",(0,t.jsxs)(n.p,{children:["Write a PHP ",(0,t.jsx)(n.strong,{children:"docblock"})," on top of your endpoint like this:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["For more info about the parameters check out ",(0,t.jsx)(n.a,{href:"http://apidocjs.com/#install",children:"ApiDocJs"})," documentation"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /clients/web/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "XbPW7awNkzl83LD6",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\nuse App\\Containers\\AppSection\\Authentication\\UI\\API\\Controllers\\Controller;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::post(\'clients/web/login\', [Controller::class, \'proxyLoginForWebClient\']);\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["All the Endpoint ",(0,t.jsx)(n.code,{children:"DocBlocks"})," MUST be written inside Routes files, otherwise they won't be loaded."]})}),"\n",(0,t.jsx)(n.h3,{id:"run-documentation-generator",children:"Run Documentation Generator"}),"\n",(0,t.jsx)(n.p,{children:"Run the documentation generator command from the root directory:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\nphp artisan apiato:apidoc\n\n"})}),"\n",(0,t.jsx)(n.h4,{id:"error-apidoc-not-found-",children:"Error: ApiDoc not found !!"}),"\n",(0,t.jsxs)(n.p,{children:["If you get an error (",(0,t.jsx)(n.code,{children:"apidoc not found"}),"),"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Read about ",(0,t.jsx)(n.a,{href:"#documentation-customization",children:"container customization"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open the container config file ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/Documentation/Configs/vendor-documentation.php"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.code,{children:"executable"})," path to ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$(npm bin)/apidoc"})})," or to however you access the ",(0,t.jsx)(n.code,{children:"apidoc"})," tool on your machine."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'node_modules/.bin/apidoc',\n    // 'executable' => 'apidoc',\n"})}),"\n",(0,t.jsx)(n.h3,{id:"visit-docs-urls",children:"Visit Documentation URL's"}),"\n",(0,t.jsx)(n.p,{children:"Visit documentation URL's as shown in your terminal:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Public (external) API at ",(0,t.jsx)(n.a,{href:"http://apiato.test/docs",children:"http://apiato.test/docs"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Private (internal) API at ",(0,t.jsx)(n.a,{href:"http://apiato.test/docs/private",children:"http://apiato.test/docs/private"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Every time you change the DocBlock of a Route file you need to run the ",(0,t.jsx)(n.code,{children:"apiato:apidoc"})," command, to regenerate."]})}),"\n",(0,t.jsx)(n.h3,{id:"shared-response",children:"Shared Response"}),"\n",(0,t.jsx)(n.p,{children:"You can use shared responses to update the documentation faster, with less outdated responses and prevent duplicating the responses between routes."}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.code,{children:"_user.v1.public.php"})," will contain all responses (single, multiple...) of the User:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Usage of the shared User response from any endpoint:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"* @apiUse UserSuccessSingleResponse\n"})}),"\n",(0,t.jsx)(n.h2,{id:"change-documentation-routes",children:"Change Documentation Routes"}),"\n",(0,t.jsxs)(n.p,{children:["You can change the documentation routes by adding ",(0,t.jsx)(n.code,{children:"PUBLIC_DOCS_URL"})," & ",(0,t.jsx)(n.code,{children:"PRIVATE_DOCS_URL"})," to ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-dotenv",children:"PUBLIC_DOCS_URL=docs/public\nPRIVATE_DOCS_URL=docs/private\n"})}),"\n",(0,t.jsx)(n.h2,{id:"private-docs-protection",children:"Private Documentation Protection"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["By default, this feature is ",(0,t.jsx)(n.strong,{children:"disabled"})," in local environment and Private docs are not protected.",(0,t.jsx)(n.br,{}),"\n","You can change this by adding ",(0,t.jsx)(n.code,{children:"PROTECT_PRIVATE_DOCS=true"})," in ",(0,t.jsx)(n.code,{children:".env"})," file."]})}),"\n",(0,t.jsxs)(n.p,{children:["Private documentations route is protection with the ",(0,t.jsx)(n.code,{children:"auth:web"})," middleware.\nIn order to access it you need to have ",(0,t.jsx)(n.code,{children:"admin"})," role or ",(0,t.jsx)(n.code,{children:"access-private-docs"})," permission.\nTo modify this behavior you can remove ",(0,t.jsx)(n.code,{children:"hasDocAccess"})," from ",(0,t.jsx)(n.code,{children:"check()"})," in ",(0,t.jsx)(n.code,{children:"GetPrivateDocumentationRequest"})," and add your own role/permissions or update ",(0,t.jsx)(n.code,{children:"HasDocAccessTrait"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Read Documentation Customization ",(0,t.jsx)(n.a,{href:"#documentation-container-customization",children:"Below"}),":"]}),"\n",(0,t.jsx)(n.h2,{id:"documentation-customization",children:"Documentation Container Customization"}),"\n",(0,t.jsxs)(n.admonition,{title:"Instructions",type:"caution",children:[(0,t.jsx)(n.p,{children:"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"}),(0,t.jsxs)(n.p,{children:["1- Copy the container from ",(0,t.jsx)(n.code,{children:"Vendor"})," to ",(0,t.jsx)(n.code,{children:"AppSection"})," (or any of your custom sections) of your project",(0,t.jsx)(n.br,{}),"\n","2- Fix the namespaces",(0,t.jsx)(n.br,{}),"\n","3- Remove ",(0,t.jsx)(n.code,{children:"apiato/documentation-generator-container"})," dependency from project root composer.json",(0,t.jsx)(n.br,{}),"\n","4- Update ",(0,t.jsx)(n.code,{children:"section_name"})," & ",(0,t.jsx)(n.code,{children:"html_files"})," in container configs",(0,t.jsx)(n.br,{}),"\n","5- Update ",(0,t.jsx)(n.code,{children:"apidoc.json"})," files in ",(0,t.jsx)(n.code,{children:"ApiDocJs/private"})," & ",(0,t.jsx)(n.code,{children:"public"})," folders and fix the ",(0,t.jsx)(n.code,{children:"filename"})]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "header": {\n        "filename": "Containers/NEW_SECTION_NAME/Documentation/UI/WEB/Views/documentation/header.md"\n    }\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"edit-default-generated-values-in-templates",children:"Edit Default Generated Values in Templates"}),"\n",(0,t.jsxs)(n.p,{children:["Apiato by defaults generates 2 API documentations, each one has its own ",(0,t.jsx)(n.code,{children:"apidoc.json"})," file. Both can be modified from the Documentation Containers in ",(0,t.jsx)(n.code,{children:"Containers/Vendor/Documentation/ApiDocJs/"})]}),"\n",(0,t.jsx)(n.h3,{id:"change-the-documentations-urls",children:"Change the Documentations URL's"}),"\n",(0,t.jsxs)(n.p,{children:["Edit the config file of the Documentation Container ",(0,t.jsx)(n.code,{children:"Containers/Vendor/Documentation/Configs/vendor-documentation.php"})]}),"\n",(0,t.jsx)(n.h3,{id:"edit-the-documentation-header",children:"Edit the Documentation Header"}),"\n",(0,t.jsx)(n.p,{children:"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."}),"\n",(0,t.jsxs)(n.p,{children:["All this information is written in ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/Documentation/ApiDocJs/shared/header.template.md"})," file, and the same file is used as header for both private and public documentations."]}),"\n",(0,t.jsx)(n.p,{children:"To edit the content just open the markdown file in any markdown editor and edit it."}),"\n",(0,t.jsxs)(n.p,{children:["You will notice some variables like ",(0,t.jsx)(n.code,{children:"{{rate-limit}}"})," and ",(0,t.jsx)(n.code,{children:"{{token-expires}}"}),". Those are replaced when running ",(0,t.jsx)(n.code,{children:"apiato:apidoc"})," with real values from your application configuration files."]}),"\n",(0,t.jsxs)(n.p,{children:["Feel free to extend them to include more info about your API from the ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/Documentation/Tasks/RenderTemplatesTask.php"})," class."]}),"\n",(0,t.jsx)(n.h3,{id:"localization-for-documentation-header",children:"Localization for Documentation Header"}),"\n",(0,t.jsxs)(n.p,{children:["Default, the documentation title is in English ",(0,t.jsx)(n.code,{children:"en"})," localization."]}),"\n",(0,t.jsxs)(n.p,{children:["See which locales are supported by going in ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/Documentation/ApiDocJs/shared/"})]}),"\n",(0,t.jsxs)(n.p,{children:["There will be some ",(0,t.jsx)(n.code,{children:"header.template.{locale}.md"})," files in the folder."]}),"\n",(0,t.jsxs)(n.p,{children:["You can change the language by adding ",(0,t.jsx)(n.code,{children:"APIDOC_LOCALE=ru"})," to the ",(0,t.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:["If you didn't find a file with your locale, you can create it. You need to modify its source code and create new file like ",(0,t.jsx)(n.code,{children:"header.template.cn.md"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var o=i(96540);const t={},s=o.createContext(t);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);