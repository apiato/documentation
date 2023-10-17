"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8528],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Code Generator"},i=void 0,p={unversionedId:"core-features/code-generator",id:"version-11.x/core-features/code-generator",title:"Code Generator",description:"- Introduction",source:"@site/versioned_docs/version-11.x/core-features/code-generator.md",sourceDirName:"core-features",slug:"/core-features/code-generator",permalink:"/docs/11.x/core-features/code-generator",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/core-features/code-generator.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{title:"Code Generator"},sidebar:"version-11.x/docs",previous:{title:"Container Installer",permalink:"/docs/11.x/getting-started/container-installer"},next:{title:"Authentication",permalink:"/docs/11.x/core-features/authentication"}},l={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Available Code Generator Commands",id:"available-code-generator-commands",level:2},{value:"Demo",id:"demo",level:2},{value:"Generating a Route (endpoint) file:",id:"generating-a-route-endpoint-file",level:4},{value:"Result",id:"result",level:4},{value:"Custom Code Stubs (aka. Customizing the Generator)",id:"custom-code-stubs",level:2},{value:"Contributing",id:"contributing",level:2}],c={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#available-code-generator-commands"},"Available Code Generator Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#demo"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#custom-code-stubs"},"Custom Code Stubs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#contributing"},"Contributing"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Code Generators are a nice way to speed up development by creating boiler-plate code based on your inputs. You may\nalready be familiar with the Laravel code generators (",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan make:controller"),"). "),(0,r.kt)("p",null,"Apiato code generator works the same way. In addition, it can generate a full Container with fully working CRUD operations, including routes, requests, controller, Actions, Repositories, Models, Migrations, documentation.... and much more)"),(0,r.kt)("h2",{id:"available-code-generator-commands"},"Available Code Generator Commands"),(0,r.kt)("p",null,"To see the list of code generators type ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan")," and look for ",(0,r.kt)("inlineCode",{parentName:"p"},"apiato"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'  php artisan apiato:generate:container        Create a Container for apiato from scratch\n  php artisan apiato:generate:action           Create an Action file for a Container\n  php artisan apiato:generate:configuration    Create a Configuration file for a Container\n  php artisan apiato:generate:container:api    Create a Container for apiato from scratch (API Part)\n  php artisan apiato:generate:container:web    Create a Container for apiato from scratch (WEB Part)\n  php artisan apiato:generate:controller       Create a controller for a container\n  php artisan apiato:generate:event            Create a new Event class and (optionally) its corresponding Listener\n  php artisan apiato:generate:exception        Create a new Exception class\n  php artisan apiato:generate:factory          Create a new Factory class\n  php artisan apiato:generate:job              Create a new Job class\n  php artisan apiato:generate:listener         Create a new Event Listener class\n  php artisan apiato:generate:mail             Create a new Mail class\n  php artisan apiato:generate:middleware       Create a new Middleware class\n  php artisan apiato:generate:migration        Create an "empty" migration file for a Container\n  php artisan apiato:generate:model            Create a new Model class\n  php artisan apiato:generate:notification     Create a new Notification class\n  php artisan apiato:generate:policy           Create a new Policy class\n  php artisan apiato:generate:readme           Create a README file for a Container\n  php artisan apiato:generate:repository       Create a new Repository class\n  php artisan apiato:generate:request          Create a new Request class\n  php artisan apiato:generate:route            Create a new Route class\n  php artisan apiato:generate:seeder           Create a new Seeder class\n  php artisan apiato:generate:provider         Create a ServiceProvider, MiddlewareProvider or an EventProvider for a Container\n  php artisan apiato:generate:subaction        Create a new SubAction class\n  php artisan apiato:generate:task             Create a Task file for a Container\n  php artisan apiato:generate:test:functional  Create a Functional Test file.\n  php artisan apiato:generate:test:testcase    Create the TestCase file.\n  php artisan apiato:generate:test:unit        Create a Unit Test file.\n  php artisan apiato:generate:transformer      Create a new Transformer class for a given Model\n  php artisan apiato:generate:value            Create a new Value class\n')),(0,r.kt)("p",null,"To get more info about each command, add ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," to the command. Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan apiato:generate:route --help"),". The help page shows all options, which can be directly passed to the command."),(0,r.kt)("p",null,"If you do not provide respective information via the command line options, a wizard will be displayed to guide you through."),(0,r.kt)("p",null,"For example, you can directly call ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan apiato:generate:controller --file=UserController")," to directly specify the class\nto be generated. The wizard, however, will ask you for the ",(0,r.kt)("inlineCode",{parentName:"p"},"--section")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--container")," as well."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("strong",{parentName:"p"},"all")," generators automatically inherit the options ",(0,r.kt)("inlineCode",{parentName:"p"},"--section"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--container")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--file")," (these are documented\nas well in the help page). Furthermore, a generator may have specific options as well (e.g., the ",(0,r.kt)("inlineCode",{parentName:"p"},"--ui")," (user-interface)\nto generate something for)."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("h4",{id:"generating-a-route-endpoint-file"},"Generating a Route (endpoint) file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ php artisan apiato:generate:route\n\n Enter the name of the Section [AppSection]:\n >\n\n Enter the name of the Container:\n > Car\n\n Enter the name of the Route file [DefaultRoute]:\n > CreateCar\n\n> Generating (CreateCar) in (AppSection:Car) Container.\n\n Select the UI for the controller [API]:\n  [0] API\n  [1] WEB\n > 0\n\n Enter the endpoint version (integer)[1]:\n > 1\n\n Select the type for this endpoint?[private]:\n  [0] private\n  [1] public\n > 1\n\n Enter the name of the controller function that needs to be invoked when calling this endpoint:\n > createNewCar\n\n Enter the HTTP verb of this endpoint (GET, POST,...):\n > POST\n\n Enter the endpoint URI (foo/bar/{id}):\n > cars\n\nRoute generated successfully.\n\n")),(0,r.kt)("h4",{id:"result"},"Result"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CreateCar.v1.public.php")," file will be created in ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\Car\\UI\\API\\Routes\\")),(0,r.kt)("h2",{id:"custom-code-stubs"},"Custom Code Stubs (aka. Customizing the Generator)"),(0,r.kt)("p",null,"If you don't like the automatically generated code (or would like to adapt it to your specific needs) you can do this quite easily."),(0,r.kt)("p",null,"The existing ",(0,r.kt)("inlineCode",{parentName:"p"},"Generators")," allow to read ",(0,r.kt)("inlineCode",{parentName:"p"},"custom stubs")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs")," folder. The name of\nthe file and the folder structure needs to be the same as in ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor/apiato/core/Generator/Stubs"),"."),(0,r.kt)("p",null,"Say, if you like to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"create.stub"),", simply copy the file to ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Generators/CustomStubs/actions/create.stub")," and\nstart adapting it to your needs. "),(0,r.kt)("p",null,"If you run the respective command (e.g., in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"php artisan apiato:generate:action"),") and choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," type\nthis would read your specific ",(0,r.kt)("inlineCode",{parentName:"p"},"create.stub")," file instead of the pre-defined one!"),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"If you would like to add your own generators, please check out the ",(0,r.kt)("a",{parentName:"p",href:"../contribution-guide"},"Contribution Guide"),"."))}u.isMDXComponent=!0}}]);