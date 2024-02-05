"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6976],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>g});var a=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},10084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(45072),o=(t(11504),t(95788));const i={sidebar_position:1,title:"Documentation"},r=void 0,l={unversionedId:"pacakges/documentation",id:"pacakges/documentation",title:"Documentation",description:"Every great API needs a great Documentation.",source:"@site/docs/pacakges/documentation.md",sourceDirName:"pacakges",slug:"/pacakges/documentation",permalink:"/docs/next/pacakges/documentation",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/pacakges/documentation.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Documentation"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/pacakges/"},next:{title:"Localization",permalink:"/docs/next/pacakges/localization"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Write PHP <strong>docblock</strong>",id:"write-php-docblock",level:3},{value:"Run Documentation Generator",id:"run-documentation-generator",level:3},{value:"Error: ApiDoc not found !!",id:"error-apidoc-not-found-",level:4},{value:"Visit Documentation URL&#39;s",id:"visit-docs-urls",level:3},{value:"Shared Response",id:"shared-response",level:3},{value:"Documentation Container Customization",id:"documentation-customization",level:2},{value:"Publishing configs",id:"publishing-configs",level:3},{value:"Modifying the source code",id:"modify-code",level:3},{value:"Change the Documentations URL&#39;s",id:"change-the-documentations-urls",level:3},{value:"Private Documentation Protection",id:"private-docs-protection",level:3},{value:"Edit Default Generated Values in Templates",id:"edit-default-generated-values-in-templates",level:3},{value:"Edit the Documentation Header",id:"edit-the-documentation-header",level:3},{value:"Localization for Documentation Header",id:"localization-for-documentation-header",level:3}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Every great API needs a great Documentation."),(0,o.yg)("p",null,"Apiato make writing and generating documentations very easy with the ",(0,o.yg)("inlineCode",{parentName:"p"},"php artisan apiato:apidoc")," command."),(0,o.yg)("h2",{id:"requirements"},"Requirements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Install ",(0,o.yg)("a",{parentName:"p",href:"https://apidocjs.com/"},"ApiDocJs")," in the project directory"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"(",(0,o.yg)("inlineCode",{parentName:"li"},"npm install apidoc"),")"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"(Recommended) read the ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/components/main-components/routes"},"Routes")," page first."))),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"composer require apiato/documentation-generator-container\n")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"This container is installed by default with an Apiato fresh installation.")),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"write-php-docblock"},"Write PHP ",(0,o.yg)("strong",{parentName:"h3"},"docblock")),(0,o.yg)("p",null,"Write a PHP ",(0,o.yg)("strong",{parentName:"p"},"docblock")," on top of your endpoint like this:"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"For more info about the parameters check out ",(0,o.yg)("a",{parentName:"em",href:"https://apidocjs.com/#install"},"ApiDocJs")," documentation")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @apiGroup           Authentication\n * @apiName            UserLogin\n * @api                {post} /clients/web/login User Login\n * @apiDescription     Description Here....\n * @apiVersion         1.0.0\n * @apiPermission      none\n *\n * @apiHeader          Accept application/json\n *\n * @apiParam           {String}     email\n * @apiParam           {String}     password\n *\n * @apiSuccessExample  {json}       Success-Response:\n *   HTTP/1.1 200 OK\n *   {\n *     "data": {\n *       "id": "XbPW7awNkzl83LD6",\n *       "name": "Super Admin",\n *       "email": "admin@admin.com"\n *       ...\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"401 Credentials Incorrect.",\n *      "status_code":401\n *   }\n *\n * @apiErrorExample  {json}       Error-Response:\n *   {\n *      "message":"Invalid Input.",\n *      "errors":{\n *         "email":[\n *            "The email field is required."\n *         ]\n *      },\n *      "status_code":422\n *   }\n */\n\nuse App\\Containers\\AppSection\\Authentication\\UI\\API\\Controllers\\Controller;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::post(\'clients/web/login\', Controller::class);\n')),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"All the Endpoint ",(0,o.yg)("inlineCode",{parentName:"p"},"DocBlocks")," MUST be written inside Routes files, otherwise they won't be loaded.  ")),(0,o.yg)("h3",{id:"run-documentation-generator"},"Run Documentation Generator"),(0,o.yg)("p",null,"Run the documentation generator command from the root directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"\nphp artisan apiato:apidoc\n\n")),(0,o.yg)("h4",{id:"error-apidoc-not-found-"},"Error: ApiDoc not found !!"),(0,o.yg)("p",null,"If you get an error (",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc not found"),"),"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"#publishing-configs"},"Publish the configs"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Edit the ",(0,o.yg)("inlineCode",{parentName:"p"},"executable")," path to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},"$(npm bin)/apidoc"))," or to however you access the ",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc")," tool on your machine."))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"    /*\n    |--------------------------------------------------------------------------\n    | Executable\n    |--------------------------------------------------------------------------\n    |\n    | Specify how you run or access the `apidoc` tool on your machine.\n    |\n    */\n\n    'executable' => 'node_modules/.bin/apidoc',\n    // 'executable' => 'apidoc',\n")),(0,o.yg)("h3",{id:"visit-docs-urls"},"Visit Documentation URL's"),(0,o.yg)("p",null,"Visit documentation URL's as shown in your terminal:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Public (external) API at ",(0,o.yg)("a",{parentName:"li",href:"http://apiato.test/docs"},"http://apiato.test/docs"),"."),(0,o.yg)("li",{parentName:"ul"},"Private (internal) API at ",(0,o.yg)("a",{parentName:"li",href:"http://apiato.test/docs/private"},"http://apiato.test/docs/private"),".")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Every time you change the DocBlock of a Route file you need to run the ",(0,o.yg)("inlineCode",{parentName:"p"},"apiato:apidoc")," command, to regenerate.  ")),(0,o.yg)("h3",{id:"shared-response"},"Shared Response"),(0,o.yg)("p",null,"You can use shared responses to update the documentation faster, with less outdated responses and prevent duplicating the responses between routes.  "),(0,o.yg)("p",null,"Example: ",(0,o.yg)("inlineCode",{parentName:"p"},"_user.v1.public.php")," will contain all responses (single, multiple...) of the User:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @apiDefine UserSuccessSingleResponse\n * @apiSuccessExample {json} Success-Response:\nHTTP/1.1 200 OK\n{\n   "data":{\n      "object":"User",\n      "id":eqwja3vw94kzmxr0,\n   },\n   "meta":{\n      "include":[],\n      "custom":[]\n   }\n}\n */\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Usage of the shared User response from any endpoint:")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"* @apiUse UserSuccessSingleResponse\n")),(0,o.yg)("h2",{id:"documentation-customization"},"Documentation Container Customization"),(0,o.yg)("p",null,"There are 2 ways you can customize this container: Using its configs or by modifying the source code."),(0,o.yg)("h3",{id:"publishing-configs"},"Publishing configs"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"php artisan vendor:publish\n")),(0,o.yg)("p",null,"Config file will be copied to ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Ship/Configs/vendor-documentation.php")),(0,o.yg)("h3",{id:"modify-code"},"Modifying the source code"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Copy the container from ",(0,o.yg)("inlineCode",{parentName:"li"},"Vendor")," to ",(0,o.yg)("inlineCode",{parentName:"li"},"AppSection")," (or any of your custom sections) of your project  "),(0,o.yg)("li",{parentName:"ol"},"Fix the namespaces  "),(0,o.yg)("li",{parentName:"ol"},"Remove ",(0,o.yg)("inlineCode",{parentName:"li"},"apiato/documentation-generator-container")," dependency from project root composer.json  "),(0,o.yg)("li",{parentName:"ol"},"Update ",(0,o.yg)("inlineCode",{parentName:"li"},"section_name")," & ",(0,o.yg)("inlineCode",{parentName:"li"},"html_files")," in container configs  "),(0,o.yg)("li",{parentName:"ol"},"Update ",(0,o.yg)("inlineCode",{parentName:"li"},"apidoc.private.json")," & ",(0,o.yg)("inlineCode",{parentName:"li"},"apidoc.public.json")," files in ",(0,o.yg)("inlineCode",{parentName:"li"},"ApiDocJs/Configs")," and fix the ",(0,o.yg)("inlineCode",{parentName:"li"},"filename"),"  ")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "header": {\n        "filename": "Containers/NEW_SECTION_NAME/Documentation/UI/WEB/Views/documentation/header.md"\n    }\n}\n')),(0,o.yg)("h3",{id:"change-the-documentations-urls"},"Change the Documentations URL's"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"#publishing-configs"},"Publish the configs")," and change ",(0,o.yg)("inlineCode",{parentName:"p"},"types.public.url")," & ",(0,o.yg)("inlineCode",{parentName:"p"},"types.private.url"),"."),(0,o.yg)("h3",{id:"private-docs-protection"},"Private Documentation Protection"),(0,o.yg)("p",null,"By default, this feature is ",(0,o.yg)("strong",{parentName:"p"},"disabled")," in local environment and ",(0,o.yg)("strong",{parentName:"p"},"enabled")," in production.",(0,o.yg)("br",{parentName:"p"}),"\n","To change this behaviour ",(0,o.yg)("a",{parentName:"p",href:"#publishing-configs"},"Publish the configs")," and change ",(0,o.yg)("inlineCode",{parentName:"p"},"protect-private-docs"),"."),(0,o.yg)("p",null,"Private documentations route is protected with the ",(0,o.yg)("inlineCode",{parentName:"p"},"auth:web")," middleware.\nYou can grant users access to the protected docs by updating ",(0,o.yg)("inlineCode",{parentName:"p"},"access-private-docs-roles")," &\n",(0,o.yg)("inlineCode",{parentName:"p"},"access-private-docs-permission")," values in documentation config.\nBy default, users need ",(0,o.yg)("inlineCode",{parentName:"p"},"access-private-docs")," permission to access private docs."),(0,o.yg)("h3",{id:"edit-default-generated-values-in-templates"},"Edit Default Generated Values in Templates"),(0,o.yg)("p",null,"Apiato by defaults generates 2 API documentations, each one has its own ",(0,o.yg)("inlineCode",{parentName:"p"},"apidoc.json")," file. Both can be modified from\nthe Documentation Container in ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs")," and need Source code modification."),(0,o.yg)("h3",{id:"edit-the-documentation-header"},"Edit the Documentation Header"),(0,o.yg)("p",null,"The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want."),(0,o.yg)("p",null,"All this information is written in ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs/shared/header.template.en.md")," file, and the same file is used as header for both private and public documentations."),(0,o.yg)("p",null,"To edit its content you need to modify its source code and open the markdown file in any markdown editor and edit it."),(0,o.yg)("p",null,"You will notice some variables like ",(0,o.yg)("inlineCode",{parentName:"p"},"{{rate-limit}}")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"{{token-expires}}"),". Those are replaced when running ",(0,o.yg)("inlineCode",{parentName:"p"},"apiato:apidoc")," with real values from your application configuration files."),(0,o.yg)("p",null,"Feel free to extend them to include more info about your API from the ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/Tasks/RenderTemplatesTask.php")," class."),(0,o.yg)("h3",{id:"localization-for-documentation-header"},"Localization for Documentation Header"),(0,o.yg)("p",null,"Default, the documentation title is in English ",(0,o.yg)("inlineCode",{parentName:"p"},"en")," localization."),(0,o.yg)("p",null,"See which locales are supported by going in ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Vendor/Documentation/ApiDocJs/shared")),(0,o.yg)("p",null,"There will be some ",(0,o.yg)("inlineCode",{parentName:"p"},"header.template.{locale}.md")," files in the folder."),(0,o.yg)("p",null,"You can change the language by adding ",(0,o.yg)("inlineCode",{parentName:"p"},"APIDOC_LOCALE=ru")," to the ",(0,o.yg)("inlineCode",{parentName:"p"},".env")," file."),(0,o.yg)("p",null,"If you didn't find a file with your locale, you can create it. You need to modify its source code and create new file like ",(0,o.yg)("inlineCode",{parentName:"p"},"header.template.cn.md")))}u.isMDXComponent=!0}}]);