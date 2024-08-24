"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3277],{34048:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=t(74848),i=t(28453);const r={title:"API Docs Generator"},s=void 0,a={id:"core-features/api-docs-generator",title:"API Docs Generator",description:"- Requirements",source:"@site/versioned_docs/version-9.x/core-features/api-docs-generator.md",sourceDirName:"core-features",slug:"/core-features/api-docs-generator",permalink:"/docs/9.x/core-features/api-docs-generator",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/api-docs-generator.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235e3,frontMatter:{title:"API Docs Generator"},sidebar:"docs",previous:{title:"Code Generator",permalink:"/docs/9.x/core-features/code-generator"},next:{title:"Authentication",permalink:"/docs/9.x/core-features/authentication"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"1 - Write a PHP <strong>docblock</strong> on top of your endpoint like this:",id:"write-a-php-docblock-on-top-of-your-endpoint-like-this",level:4},{value:"2 - Run the documentation generator command from the root directory:",id:"run-the-documentation-generator-command-from-the-root-directory",level:4},{value:"3 - Visit this URL&#39;s as shown in your terminal:",id:"visit-this-urls-as-shown-in-your-terminal",level:4},{value:"Generate Swagger/OpenAPI JSON schema from apiDoc",id:"generate-swagger-openapi-json-schema-from-apidoc",level:3},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found",level:3},{value:"Shared response for faster updating and less outdated responses:",id:"shared-response-for-faster-updating-and-less-outdated-responses",level:3},{value:"Edit the default generated values in the templates:",id:"edit-the-default-generated-values-in-the-templates",level:2},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",level:2},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#requirements",children:"Requirements"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#usage",children:"Usage"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsxs)(n.a,{href:"#write-a-php-docblock-on-top-of-your-endpoint-like-this",children:["1- Write a PHP ",(0,o.jsx)(n.strong,{children:"docblock"})," on top of your endpoint like this:"]})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#run-the-documentation-generator-command-from-the-root-directory",children:"2- Run the documentation generator command from the root directory:"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#visit-this-urls-as-shown-in-your-terminal",children:"3- Visit this URL's as shown in your terminal:"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#generate-swagger-openapi-json-schema-from-apidoc",children:"Generate Swagger/OpenAPI JSON schema from apiDoc"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#error-apidoc-not-found",children:"Error: ApiDoc not found !!"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#shared-response-for-faster-updating-and-less-outdated-responses",children:"Shared response for faster updating and less outdated responses:"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#edit-the-default-generated-values-in-the-templates",children:"Edit the default generated values in the templates:"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#change-the-documentations-urls",children:"Change the Documentations URL's"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#edit-the-documentation-header",children:"Edit the Documentation Header"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Every great API needs a great Documentation."}),"\n",(0,o.jsxs)(n.p,{children:["Apiato make writing and generating documentations very easy with the ",(0,o.jsx)(n.code,{children:"php artisan apiato:apidoc"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively you can generate a swagger doc from the apidoc comments, to do so run ",(0,o.jsx)(n.code,{children:"php artisan apiato:swagger"})," command."]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Install the ",(0,o.jsx)(n.a,{href:"http://apidocjs.com/",children:"ApiDocJs"})," tool, the project directory"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["(",(0,o.jsx)(n.code,{children:"npm install apidoc"}),")"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["(Recommended) read the ",(0,o.jsx)(n.a,{href:".././main-components/routes",children:"Routes"})," page first."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.h4,{id:"write-a-php-docblock-on-top-of-your-endpoint-like-this",children:["1 - Write a PHP ",(0,o.jsx)(n.strong,{children:"docblock"})," on top of your endpoint like this:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["For more info about the parameters check out ",(0,o.jsx)(n.a,{href:"http://apidocjs.com/#install",children:"ApiDocJs"})," documentation"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:'<?php\n\n/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /users/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "owpzanmh",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\n$router->post(\'users/login\', [\n    \'uses\' => \'Controller@userLogin\',\n]);\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," All the Endpoints ",(0,o.jsx)(n.code,{children:"DocBlocks"})," MUST be written inside Routes files, otherwise they won't be loaded."]}),"\n",(0,o.jsx)(n.h4,{id:"run-the-documentation-generator-command-from-the-root-directory",children:"2 - Run the documentation generator command from the root directory:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\nphp artisan apiato:apidoc\n\n"})}),"\n",(0,o.jsx)(n.h4,{id:"visit-this-urls-as-shown-in-your-terminal",children:"3 - Visit this URL's as shown in your terminal:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Public (external) API at ",(0,o.jsx)(n.a,{href:"http://apiato.test/api/documentation/",children:"http://apiato.test/api/documentation/"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(37814).A+"",width:"2880",height:"1800"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Private (internal) API at ",(0,o.jsx)(n.a,{href:"http://apiato.test/api/private/documentation/",children:"http://apiato.test/api/private/documentation/"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(1296).A+"",width:"2880",height:"1800"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"NOTE:"})," Every time you change the DocBlock of a Route file you need to run the ",(0,o.jsx)(n.code,{children:"apiato:apidoc"})," command, to regenerate."]}),"\n",(0,o.jsx)(n.h3,{id:"generate-swagger-openapi-json-schema-from-apidoc",children:"Generate Swagger/OpenAPI JSON schema from apiDoc"}),"\n",(0,o.jsx)(n.p,{children:"It's also possible to generate a Swagger/OpenAPI JSON schema from apiDoc with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"\nphp artisan apiato:swagger\n\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can find the JSON schema at ",(0,o.jsx)(n.a,{href:"http://apiato.test/api/private/documentation/swagger/swagger.json",children:"http://apiato.test/api/private/documentation/swagger/swagger.json"})]}),"\n",(0,o.jsx)(n.h3,{id:"error-apidoc-not-found",children:"Error: ApiDoc not found !!"}),"\n",(0,o.jsxs)(n.p,{children:["If you get an error (",(0,o.jsx)(n.code,{children:"apidoc not found"}),"),"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["open the container config file ",(0,o.jsx)(n.code,{children:"Containers/Documentation/Configs/apidoc.php"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["edit the ",(0,o.jsx)(n.code,{children:"executable"})," path to ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"$(npm bin)/apidoc"})})," or to however you access the ",(0,o.jsx)(n.code,{children:"apidoc"})," tool on your machine."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'apidoc',\n"})}),"\n",(0,o.jsx)(n.h3,{id:"shared-response-for-faster-updating-and-less-outdated-responses",children:"Shared response for faster updating and less outdated responses:"}),"\n",(0,o.jsx)(n.p,{children:"To prevent duplicating the responses between routes, let's create a shared response for each object."}),"\n",(0,o.jsxs)(n.p,{children:["Example: ",(0,o.jsx)(n.code,{children:"_user.v1.public.php"})," will contain all responses (single, multiple...) of the User:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:'<?php\n\n/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Usage of the shared User response from any endpoint:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"* @apiUse UserSuccessSingleResponse\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To avoid having to generate and update the Single and Multiple responses of the same object (recommended only for private API's)\nyou can use the general shared Multiple Response ",(0,o.jsx)(n.code,{children:"* @apiUse GeneralSuccessMultipleResponse"}),"\nwhich you can find and modify it from ",(0,o.jsx)(n.code,{children:"app/Containers/Documentation/UI/API/Routes/*"})]}),"\n",(0,o.jsx)(n.h2,{id:"edit-the-default-generated-values-in-the-templates",children:"Edit the default generated values in the templates:"}),"\n",(0,o.jsxs)(n.p,{children:["Apiato generates by defaults 2 API documentations, each one has its own ",(0,o.jsx)(n.code,{children:"apidoc.json"})," file. Both can be modified from the Documentation Containers in ",(0,o.jsx)(n.code,{children:"Containers/Documentation/ApiDocJs/"})]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"apidoc.json"})," Example file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "Apiato",\n  "description": "Apiato (Private API) Documentation",\n  "title": "Welcome to Apiato",\n  "version": "1.0.0",\n  "url" : "http://api.apiato.test",\n  "template": {\n    "withCompare": true,\n    "withGenerator": true\n  },\n  "header": {\n    "title": "API Overview",\n    "filename": "app/Containers/Documentation/ApiDocJs/private/header.md"\n  },\n  "footer": {\n    "title": "Footer",\n    "filename": "app/Containers/Documentation/ApiDocJs/private/header.md"\n  },\n  "order": [\n\n  ]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"change-the-documentations-urls",children:"Change the Documentations URL's"}),"\n",(0,o.jsxs)(n.p,{children:["Edit the config file of the Documentation Container ",(0,o.jsx)(n.code,{children:"Containers/Documentation/Configs/apidoc.php"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"<?php\n\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'apidoc',\n\n    /*\n    |--------------------------------------------------------------------------\n    | API Types\n    |--------------------------------------------------------------------------\n    |\n    | The `types` helps generating multiple documentations, by grouping them\n    | under types names. You can add or remove any type. By default\n    | `public` and `private` types are set.\n    |\n    | url: The url to access that generated API documentation.\n    |\n    | routes: The route file to read when generating this documentation.\n    |         Every route file will have the following name format:\n    |         `{endpoint-name}.v{version-number}.{documentation-type}.php`.\n    |\n    */\n\n    'types' => [\n\n        'public' => [\n            'url' => 'api/documentation',\n            'routes' => [\n                'public',\n            ],\n        ],\n\n        'private' => [\n            'url' => 'api/private/documentation',\n            'routes' => [\n                'private',\n                'public',\n            ],\n        ],\n    ],\n\n\n    /*\n    |--------------------------------------------------------------------------\n    | HTML files\n    |--------------------------------------------------------------------------\n    |\n    | Specify where to put the generated HTML files.\n    |\n    */\n\n    'html_files' => 'public/'\n\n\n    // ...\n];\n"})}),"\n",(0,o.jsx)(n.h2,{id:"edit-the-documentation-header",children:"Edit the Documentation Header"}),"\n",(0,o.jsx)(n.p,{children:"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."}),"\n",(0,o.jsxs)(n.p,{children:["All this information is written in ",(0,o.jsx)(n.code,{children:"app/Containers/Documentation/ApiDocJs/shared/header.template.md"})," file, and the same file is used as header for both private and public documentations."]}),"\n",(0,o.jsx)(n.p,{children:"To edit the content just open the markdown file in any markdown editor and edit it."}),"\n",(0,o.jsxs)(n.p,{children:["You will notice some variables like ",(0,o.jsx)(n.code,{children:"{{rate-limit}}"})," and ",(0,o.jsx)(n.code,{children:"{{token-expires}}"}),". Those are replaced when running ",(0,o.jsx)(n.code,{children:"apidoc:generate"})," with real values from your application configuration files."]}),"\n",(0,o.jsxs)(n.p,{children:["Feel free to extend them to include more info about your API from the ",(0,o.jsx)(n.code,{children:"app/Containers/Documentation/Actions/ProcessMarkdownTemplatesAction.php"})," class."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1296:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/private-api-doc-df79775c15a1f15953133d1b8a6d0b52.png"},37814:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/public-api-doc-b4b04c485ce84cb3b4c455d83cf9dfec.png"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(96540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);