"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8488],{95788:(e,n,t)=>{t.d(n,{Iu:()=>u,yg:()=>g});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(t),m=o,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,i(i({ref:n},u),{},{components:t})):a.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(45072),o=(t(11504),t(95788));const r={title:"API Docs Generator"},i=void 0,p={unversionedId:"core-features/api-docs-generator",id:"version-9.x/core-features/api-docs-generator",title:"API Docs Generator",description:"- Requirements",source:"@site/versioned_docs/version-9.x/core-features/api-docs-generator.md",sourceDirName:"core-features",slug:"/core-features/api-docs-generator",permalink:"/docs/9.x/core-features/api-docs-generator",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/api-docs-generator.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"Apr 18, 2021",frontMatter:{title:"API Docs Generator"},sidebar:"version-9.x/docs",previous:{title:"Code Generator",permalink:"/docs/9.x/core-features/code-generator"},next:{title:"Authentication",permalink:"/docs/9.x/core-features/authentication"}},s={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"1 - Write a PHP <strong>docblock</strong> on top of your endpoint like this:",id:"write-a-php-docblock-on-top-of-your-endpoint-like-this",level:4},{value:"2 - Run the documentation generator command from the root directory:",id:"run-the-documentation-generator-command-from-the-root-directory",level:4},{value:"3 - Visit this URL&#39;s as shown in your terminal:",id:"visit-this-urls-as-shown-in-your-terminal",level:4},{value:"Generate Swagger/OpenAPI JSON schema from apiDoc",id:"generate-swagger-openapi-json-schema-from-apidoc",level:3},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found",level:3},{value:"Shared response for faster updating and less outdated responses:",id:"shared-response-for-faster-updating-and-less-outdated-responses",level:3},{value:"Edit the default generated values in the templates:",id:"edit-the-default-generated-values-in-the-templates",level:2},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",level:2},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",level:2}],u={toc:l},c="wrapper";function d(e){let{components:n,...r}=e;return(0,o.yg)(c,(0,a.c)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#usage"},"Usage"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#write-a-php-docblock-on-top-of-your-endpoint-like-this"},"1- Write a PHP ",(0,o.yg)("strong",{parentName:"a"},"docblock")," on top of your endpoint like this:")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#run-the-documentation-generator-command-from-the-root-directory"},"2- Run the documentation generator command from the root directory:")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#visit-this-urls-as-shown-in-your-terminal"},"3- Visit this URL's as shown in your terminal:")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#generate-swagger-openapi-json-schema-from-apidoc"},"Generate Swagger/OpenAPI JSON schema from apiDoc")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#error-apidoc-not-found"},"Error: ApiDoc not found !!")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#shared-response-for-faster-updating-and-less-outdated-responses"},"Shared response for faster updating and less outdated responses:")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#edit-the-default-generated-values-in-the-templates"},"Edit the default generated values in the templates:")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#change-the-documentations-urls"},"Change the Documentations URL's")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"#edit-the-documentation-header"},"Edit the Documentation Header"))),(0,o.yg)("p",null,"Every great API needs a great Documentation."),(0,o.yg)("p",null,"Apiato make writing and generating documentations very easy with the ",(0,o.yg)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")," command."),(0,o.yg)("p",null,"Alternatively you can generate a swagger doc from the apidoc comments, to do so run ",(0,o.yg)("inlineCode",{parentName:"p"},"php artisan apiato:swagger")," command."),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Install the ",(0,o.yg)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," tool, the project directory"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"(",(0,o.yg)("inlineCode",{parentName:"li"},"npm install apidoc"),")"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"(Recommended) read the ",(0,o.yg)("a",{parentName:"p",href:".././main-components/routes"},"Routes")," page first."))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h4",{id:"write-a-php-docblock-on-top-of-your-endpoint-like-this"},"1 - Write a PHP ",(0,o.yg)("strong",{parentName:"h4"},"docblock")," on top of your endpoint like this:"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"For more info about the parameters check out ",(0,o.yg)("a",{parentName:"em",href:"http://apidocjs.com/#install"},"ApiDocJs")," documentation")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'<?php\n\n/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /users/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "owpzanmh",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\n$router->post(\'users/login\', [\n    \'uses\' => \'Controller@userLogin\',\n]);\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Note:")," All the Endpoints ",(0,o.yg)("inlineCode",{parentName:"p"},"DocBlocks")," MUST be written inside Routes files, otherwise they won't be loaded."),(0,o.yg)("h4",{id:"run-the-documentation-generator-command-from-the-root-directory"},"2 - Run the documentation generator command from the root directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"\nphp artisan apiato:apidoc\n\n")),(0,o.yg)("h4",{id:"visit-this-urls-as-shown-in-your-terminal"},"3 - Visit this URL's as shown in your terminal:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Public (external) API at ",(0,o.yg)("a",{parentName:"li",href:"http://apiato.test/api/documentation/"},"http://apiato.test/api/documentation/"),".")),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(33652).c,width:"2880",height:"1800"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Private (internal) API at ",(0,o.yg)("a",{parentName:"li",href:"http://apiato.test/api/private/documentation/"},"http://apiato.test/api/private/documentation/"),".")),(0,o.yg)("p",null,(0,o.yg)("img",{src:t(4468).c,width:"2880",height:"1800"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"NOTE:")," Every time you change the DocBlock of a Route file you need to run the ",(0,o.yg)("inlineCode",{parentName:"p"},"apiato:apidoc")," command, to regenerate."),(0,o.yg)("h3",{id:"generate-swagger-openapi-json-schema-from-apidoc"},"Generate Swagger/OpenAPI JSON schema from apiDoc"),(0,o.yg)("p",null,"It's also possible to generate a Swagger/OpenAPI JSON schema from apiDoc with:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"\nphp artisan apiato:swagger\n\n")),(0,o.yg)("p",null,"You can find the JSON schema at ",(0,o.yg)("a",{parentName:"p",href:"http://apiato.test/api/private/documentation/swagger/swagger.json"},"http://apiato.test/api/private/documentation/swagger/swagger.json")),(0,o.yg)("h3",{id:"error-apidoc-not-found"},"Error: ApiDoc not found !!"),(0,o.yg)("p",null,"If you get an error (",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc not found"),"),"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"open the container config file ",(0,o.yg)("inlineCode",{parentName:"p"},"Containers/Documentation/Configs/apidoc.php"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"edit the ",(0,o.yg)("inlineCode",{parentName:"p"},"executable")," path to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"$(npm bin)/apidoc"))," or to however you access the ",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc")," tool on your machine."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'apidoc',\n")),(0,o.yg)("h3",{id:"shared-response-for-faster-updating-and-less-outdated-responses"},"Shared response for faster updating and less outdated responses:"),(0,o.yg)("p",null,"To prevent duplicating the responses between routes, let's create a shared response for each object."),(0,o.yg)("p",null,"Example: ",(0,o.yg)("inlineCode",{parentName:"p"},"_user.v1.public.php")," will contain all responses (single, multiple...) of the User:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'<?php\n\n/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Usage of the shared User response from any endpoint:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"* @apiUse UserSuccessSingleResponse\n")),(0,o.yg)("p",null,"To avoid having to generate and update the Single and Multiple responses of the same object (recommended only for private API's)\nyou can use the general shared Multiple Response ",(0,o.yg)("inlineCode",{parentName:"p"},"* @apiUse GeneralSuccessMultipleResponse"),"\nwhich you can find and modify it from ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Documentation/UI/API/Routes/*")),(0,o.yg)("h2",{id:"edit-the-default-generated-values-in-the-templates"},"Edit the default generated values in the templates:"),(0,o.yg)("p",null,"Apiato generates by defaults 2 API documentations, each one has its own ",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc.json")," file. Both can be modified from the Documentation Containers in ",(0,o.yg)("inlineCode",{parentName:"p"},"Containers/Documentation/ApiDocJs/")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"apidoc.json")," Example file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "Apiato",\n  "description": "Apiato (Private API) Documentation",\n  "title": "Welcome to Apiato",\n  "version": "1.0.0",\n  "url" : "http://api.apiato.test",\n  "template": {\n    "withCompare": true,\n    "withGenerator": true\n  },\n  "header": {\n    "title": "API Overview",\n    "filename": "app/Containers/Documentation/ApiDocJs/private/header.md"\n  },\n  "footer": {\n    "title": "Footer",\n    "filename": "app/Containers/Documentation/ApiDocJs/private/header.md"\n  },\n  "order": [\n\n  ]\n}\n')),(0,o.yg)("h2",{id:"change-the-documentations-urls"},"Change the Documentations URL's"),(0,o.yg)("p",null,"Edit the config file of the Documentation Container ",(0,o.yg)("inlineCode",{parentName:"p"},"Containers/Documentation/Configs/apidoc.php")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'apidoc',\n\n    /*\n    |--------------------------------------------------------------------------\n    | API Types\n    |--------------------------------------------------------------------------\n    |\n    | The `types` helps generating multiple documentations, by grouping them\n    | under types names. You can add or remove any type. By default\n    | `public` and `private` types are set.\n    |\n    | url: The url to access that generated API documentation.\n    |\n    | routes: The route file to read when generating this documentation.\n    |         Every route file will have the following name format:\n    |         `{endpoint-name}.v{version-number}.{documentation-type}.php`.\n    |\n    */\n\n    'types' => [\n\n        'public' => [\n            'url' => 'api/documentation',\n            'routes' => [\n                'public',\n            ],\n        ],\n\n        'private' => [\n            'url' => 'api/private/documentation',\n            'routes' => [\n                'private',\n                'public',\n            ],\n        ],\n    ],\n\n\n    /*\n    |--------------------------------------------------------------------------\n    | HTML files\n    |--------------------------------------------------------------------------\n    |\n    | Specify where to put the generated HTML files.\n    |\n    */\n\n    'html_files' => 'public/'\n\n\n    // ...\n];\n")),(0,o.yg)("h2",{id:"edit-the-documentation-header"},"Edit the Documentation Header"),(0,o.yg)("p",null,"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."),(0,o.yg)("p",null,"All this information is written in ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Documentation/ApiDocJs/shared/header.template.md")," file, and the same file is used as header for both private and public documentations."),(0,o.yg)("p",null,"To edit the content just open the markdown file in any markdown editor and edit it."),(0,o.yg)("p",null,"You will notice some variables like ",(0,o.yg)("inlineCode",{parentName:"p"},"{{rate-limit}}")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"{{token-expires}}"),". Those are replaced when running ",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc:generate")," with real values from your application configuration files."),(0,o.yg)("p",null,"Feel free to extend them to include more info about your API from the ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Documentation/Actions/ProcessMarkdownTemplatesAction.php")," class."))}d.isMDXComponent=!0},4468:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/private-api-doc-df79775c15a1f15953133d1b8a6d0b52.png"},33652:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/public-api-doc-b4b04c485ce84cb3b4c455d83cf9dfec.png"}}]);