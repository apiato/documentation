"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={title:"Documentation"},r=void 0,l={unversionedId:"additional-features/apiato-containers/documentation",id:"version-10.x/additional-features/apiato-containers/documentation",title:"Documentation",description:"- Requirements",source:"@site/versioned_docs/version-10.x/additional-features/apiato-containers/documentation.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/documentation",permalink:"/docs/10.x/additional-features/apiato-containers/documentation",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/additional-features/apiato-containers/documentation.md",tags:[],version:"10.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Documentation"},sidebar:"version-10.x/docs",previous:{title:"Overview",permalink:"/docs/10.x/additional-features/apiato-containers/overview"},next:{title:"Debugger",permalink:"/docs/10.x/additional-features/apiato-containers/debugger"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Write PHP <strong>docblock</strong>",id:"write-php-docblock",level:3},{value:"Run Documentation Generator",id:"run-documentation-generator",level:3},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found-",level:4},{value:"Visit Documentation URL&#39;s",id:"visit-docs-urls",level:3},{value:"Shared Response",id:"shared-response",level:3},{value:"Change Documentation Routes",id:"change-documentation-routes",level:2},{value:"Private Documentation Protection",id:"private-docs-protection",level:2},{value:"Documentation Container Customization",id:"documentation-customization",level:2},{value:"Edit Default Generated Values in Templates",id:"edit-default-generated-values-in-templates",level:3},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",level:3},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",level:3},{value:"Localization for Documentation Header",id:"localization-for-documentation-header",level:3}],d={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#write-php-docblock"},"Write PHP ",(0,o.kt)("strong",{parentName:"a"},"docblock"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-documentation-generator"},"Run Documentation Generator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#visit-docs-urls"},"Visit Documentation URL's")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#shared-response"},"Shared Response")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#change-documentation-routes"},"Change Documentation Routes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#private-docs-protection"},"Private Documentation Protection")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#documentation-customization"},"Documentation Container Customization"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#edit-default-generated-values-in-templates"},"Edit Default Generated Values in Templates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#change-the-documentations-urls"},"Change the Documentations URL's")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#edit-the-documentation-header"},"Edit the Documentation Header")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#localization-for-documentation-header"},"Localization for Documentation Header"))))),(0,o.kt)("p",null,"Every great API needs a great Documentation."),(0,o.kt)("p",null,"Apiato make writing and generating documentations very easy with the ",(0,o.kt)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")," command."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"http://apidocjs.com/"},"ApiDocJs")," in the project directory"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(",(0,o.kt)("inlineCode",{parentName:"li"},"npm install apidoc"),")"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"(Recommended) read the ",(0,o.kt)("a",{parentName:"p",href:"../../main-components/routes"},"Routes")," page first."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"composer require apiato/documentation-generator-container\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This container is installed by default with an Apiato fresh installation.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"write-php-docblock"},"Write PHP ",(0,o.kt)("strong",{parentName:"h3"},"docblock")),(0,o.kt)("p",null,"Write a PHP ",(0,o.kt)("strong",{parentName:"p"},"docblock")," on top of your endpoint like this:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For more info about the parameters check out ",(0,o.kt)("a",{parentName:"em",href:"http://apidocjs.com/#install"},"ApiDocJs")," documentation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /clients/web/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "XbPW7awNkzl83LD6",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\nuse App\\Containers\\AppSection\\Authentication\\UI\\API\\Controllers\\Controller;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::post(\'clients/web/login\', [Controller::class, \'proxyLoginForWebClient\']);\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All the Endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"DocBlocks")," MUST be written inside Routes files, otherwise they won't be loaded.")),(0,o.kt)("h3",{id:"run-documentation-generator"},"Run Documentation Generator"),(0,o.kt)("p",null,"Run the documentation generator command from the root directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\nphp artisan apiato:apidoc\n\n")),(0,o.kt)("h4",{id:"error-apidoc-not-found-"},"Error: ApiDoc not found !!"),(0,o.kt)("p",null,"If you get an error (",(0,o.kt)("inlineCode",{parentName:"p"},"apidoc not found"),"),"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Read about ",(0,o.kt)("a",{parentName:"p",href:"#documentation-customization"},"container customization"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the container config file ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/Configs/vendor-documentation.php"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"executable")," path to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"$(npm bin)/apidoc"))," or to however you access the ",(0,o.kt)("inlineCode",{parentName:"p"},"apidoc")," tool on your machine."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'node_modules/.bin/apidoc',\n    // 'executable' => 'apidoc',\n")),(0,o.kt)("h3",{id:"visit-docs-urls"},"Visit Documentation URL's"),(0,o.kt)("p",null,"Visit documentation URL's as shown in your terminal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public (external) API at ",(0,o.kt)("a",{parentName:"li",href:"http://apiato.test/docs"},"http://apiato.test/docs"),"."),(0,o.kt)("li",{parentName:"ul"},"Private (internal) API at ",(0,o.kt)("a",{parentName:"li",href:"http://apiato.test/docs/private"},"http://apiato.test/docs/private"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Every time you change the DocBlock of a Route file you need to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato:apidoc")," command, to regenerate.")),(0,o.kt)("h3",{id:"shared-response"},"Shared Response"),(0,o.kt)("p",null,"You can use shared responses to update the documentation faster, with less outdated responses and prevent duplicating the responses between routes.  "),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"_user.v1.public.php")," will contain all responses (single, multiple...) of the User:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage of the shared User response from any endpoint:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"* @apiUse UserSuccessSingleResponse\n")),(0,o.kt)("h2",{id:"change-documentation-routes"},"Change Documentation Routes"),(0,o.kt)("p",null,"You can change the documentation routes by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"PUBLIC_DOCS_URL")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"PRIVATE_DOCS_URL")," to ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"PUBLIC_DOCS_URL=docs/public\nPRIVATE_DOCS_URL=docs/private\n")),(0,o.kt)("h2",{id:"private-docs-protection"},"Private Documentation Protection"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"By default, this feature is ",(0,o.kt)("strong",{parentName:"p"},"disabled")," in local environment and Private docs are not protected.",(0,o.kt)("br",{parentName:"p"}),"\n","You can change this by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"PROTECT_PRIVATE_DOCS=true")," in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file.")),(0,o.kt)("p",null,"Private documentations route is protection with the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth:web")," middleware.\nIn order to access it you need to have ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," role or ",(0,o.kt)("inlineCode",{parentName:"p"},"access-private-docs")," permission.\nTo modify this behavior you can remove ",(0,o.kt)("inlineCode",{parentName:"p"},"hasDocAccess")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"check()")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"GetPrivateDocumentationRequest")," and add your own role/permissions or update ",(0,o.kt)("inlineCode",{parentName:"p"},"HasDocAccessTrait"),"."),(0,o.kt)("p",null,"Read Documentation Customization ",(0,o.kt)("a",{parentName:"p",href:"#documentation-container-customization"},"Below"),":"),(0,o.kt)("h2",{id:"documentation-customization"},"Documentation Container Customization"),(0,o.kt)("admonition",{title:"Instructions",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"),(0,o.kt)("p",{parentName:"admonition"},"1- Copy the container from ",(0,o.kt)("inlineCode",{parentName:"p"},"Vendor")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AppSection")," (or any of your custom sections) of your project",(0,o.kt)("br",{parentName:"p"}),"\n","2- Fix the namespaces",(0,o.kt)("br",{parentName:"p"}),"\n","3- Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato/documentation-generator-container")," dependency from project root composer.json",(0,o.kt)("br",{parentName:"p"}),"\n","4- Update ",(0,o.kt)("inlineCode",{parentName:"p"},"section_name")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"html_files")," in container configs",(0,o.kt)("br",{parentName:"p"}),"\n","5- Update ",(0,o.kt)("inlineCode",{parentName:"p"},"apidoc.json")," files in ",(0,o.kt)("inlineCode",{parentName:"p"},"ApiDocJs/private")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"public")," folders and fix the ",(0,o.kt)("inlineCode",{parentName:"p"},"filename"),"  "),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "header": {\n        "filename": "Containers/NEW_SECTION_NAME/Documentation/UI/WEB/Views/documentation/header.md"\n    }\n}\n'))),(0,o.kt)("h3",{id:"edit-default-generated-values-in-templates"},"Edit Default Generated Values in Templates"),(0,o.kt)("p",null,"Apiato by defaults generates 2 API documentations, each one has its own ",(0,o.kt)("inlineCode",{parentName:"p"},"apidoc.json")," file. Both can be modified from the Documentation Containers in ",(0,o.kt)("inlineCode",{parentName:"p"},"Containers/Vendor/Documentation/ApiDocJs/")),(0,o.kt)("h3",{id:"change-the-documentations-urls"},"Change the Documentations URL's"),(0,o.kt)("p",null,"Edit the config file of the Documentation Container ",(0,o.kt)("inlineCode",{parentName:"p"},"Containers/Vendor/Documentation/Configs/vendor-documentation.php")),(0,o.kt)("h3",{id:"edit-the-documentation-header"},"Edit the Documentation Header"),(0,o.kt)("p",null,"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."),(0,o.kt)("p",null,"All this information is written in ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs/shared/header.template.md")," file, and the same file is used as header for both private and public documentations."),(0,o.kt)("p",null,"To edit the content just open the markdown file in any markdown editor and edit it."),(0,o.kt)("p",null,"You will notice some variables like ",(0,o.kt)("inlineCode",{parentName:"p"},"{{rate-limit}}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"{{token-expires}}"),". Those are replaced when running ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato:apidoc")," with real values from your application configuration files."),(0,o.kt)("p",null,"Feel free to extend them to include more info about your API from the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/Tasks/RenderTemplatesTask.php")," class."),(0,o.kt)("h3",{id:"localization-for-documentation-header"},"Localization for Documentation Header"),(0,o.kt)("p",null,"Default, the documentation title is in English ",(0,o.kt)("inlineCode",{parentName:"p"},"en")," localization."),(0,o.kt)("p",null,"See which locales are supported by going in ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs/shared/")),(0,o.kt)("p",null,"There will be some ",(0,o.kt)("inlineCode",{parentName:"p"},"header.template.{locale}.md")," files in the folder."),(0,o.kt)("p",null,"You can change the language by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"APIDOC_LOCALE=ru")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,o.kt)("p",null,"If you didn't find a file with your locale, you can create it. You need to ",(0,o.kt)("a",{parentName:"p",href:"#modify-code"},"modify its source code")," and create new file like ",(0,o.kt)("inlineCode",{parentName:"p"},"header.template.cn.md")))}u.isMDXComponent=!0}}]);