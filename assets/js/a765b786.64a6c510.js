"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[5039],{12038:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"faq","title":"Frequently Asked Questions","description":"* Do I have to use the Porto Architecture to benefit from Apiato","source":"@site/versioned_docs/version-11.x/faq.md","sourceDirName":".","slug":"/faq","permalink":"/docs/11.x/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/faq.md","tags":[],"version":"11.x","lastUpdatedBy":"hossein-moghadam","lastUpdatedAt":1684419989000,"frontMatter":{"title":"Frequently Asked Questions"},"sidebar":"docs","previous":{"title":"Contribution Guide","permalink":"/docs/11.x/contribution-guide"}}');var t=o(74848),r=o(28453);const s={title:"Frequently Asked Questions"},a=void 0,d={},c=[{value:"Do I have to use the Porto Architecture to benefit from Apiato!?",id:"do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato",level:3},{value:"How to use my custom domain?",id:"how-to-use-my-custom-domain",level:3},{value:"Where to put my frontend code?",id:"where-to-put-my-frontend-code",level:3},{value:"Where do I register Service Providers and Aliases?",id:"where-do-i-register-service-providers-and-aliases",level:3},{value:"How to change the default API URL (Subdomain and Prefix)?",id:"how-to-change-the-default-api-url",level:3},{value:"Where do I define my Composer dependencies?",id:"where-do-i-define-my-composer-dependencies",level:3},{value:"How to enable Query Caching?",id:"how-to-enable-query-caching",level:3},{value:"Can I give my Actions REST names?",id:"can-i-give-my-actions-rest-names",level:3},{value:"How are Service Providers auto-loaded?",id:"how-are-service-providers-auto-loaded",level:3},{value:"How to create third-party Containers?",id:"how-to-create-third-party-containers",level:3},{value:"What is the default Username for authentication?",id:"what-is-the-default-username-for-authentication",level:3},{value:"I have a question, and I can&#39;t find answer!!",id:"other-questions",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato",children:"Do I have to use the Porto Architecture to benefit from Apiato"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-to-use-my-custom-domain",children:"How to use my custom domain?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#where-to-put-my-frontend-code",children:"Where to put my frontend code?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#where-do-i-register-service-providers-and-aliases",children:"Where do I register Service Providers and Aliases?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-to-change-the-default-api-url",children:"How to change API URL?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#where-do-i-define-my-composer-dependencies",children:"Where do I define my Composer dependencies?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-to-enable-query-caching",children:"How to enable Query Caching?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#can-i-give-my-actions-rest-names",children:"Can I give my Actions REST names?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-are-service-providers-auto-loaded",children:"How are Service Providers auto-loaded?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#how-to-create-third-party-containers",children:"How to create third-party Containers?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#what-is-the-default-username-for-authentication",children:"What is the default Username for authentication?"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#other-questions",children:"I have a question and I can't find answer!!"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato",children:"Do I have to use the Porto Architecture to benefit from Apiato!?"}),"\n",(0,t.jsxs)(n.p,{children:["No. You can still use the standard MVC (Controllers are still there) or any other architecture you prefer, and you can\ncall the Apiato provided ",(0,t.jsx)(n.code,{children:"Actions"})," and ",(0,t.jsx)(n.code,{children:"Tasks"})," from your Controllers or Services or whichever classes you prefer. You\nhave the freedom to structure your own project anyway you like, and still use all the feature that Apiato provide."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-use-my-custom-domain",children:"How to use my custom domain?"}),"\n",(0,t.jsxs)(n.p,{children:["Read the ",(0,t.jsx)(n.a,{href:"./getting-started/installation#Development-Environment",children:"installation guide"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"where-to-put-my-frontend-code",children:"Where to put my frontend code?"}),"\n",(0,t.jsxs)(n.p,{children:["It's recommended that the front-end App codes live outside apiato completely. Example in ",(0,t.jsx)(n.code,{children:"clients/web/"})," directory,\nseparated from the Server code (apiato Code)."]}),"\n",(0,t.jsx)(n.p,{children:"The front-end App should be able to run as a stand-alone App, and it can consume the Server API or other Testing API's."}),"\n",(0,t.jsxs)(n.p,{children:["You can configure NGINX to serve the Front-end and the Back-end each on a different domain or on subdomains ",(0,t.jsxs)(n.em,{children:["(Example\n",(0,t.jsx)(n.code,{children:"app.com"})," for the front-end App and ",(0,t.jsx)(n.code,{children:"api.app.com"})," for the API)"]}),"."]}),"\n",(0,t.jsx)(n.p,{children:"However, apiato does support serving HTML from within. So only of you prefer, you can serve HTML from apiato directly\nsame as serving the API."}),"\n",(0,t.jsx)(n.p,{children:"In this case the code will live in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"- MyProject\n  - app\n    - Containers\n      - Section-Z\n        - Container-X\n          - UI\n            - API\n            - WEB  // <<\n              - Views\n            - CLI\n        - Container-Y\n          - UI\n            - API\n            - WEB  // <<\n              - Views\n            - CLI\n"})}),"\n",(0,t.jsx)(n.h3,{id:"where-do-i-register-service-providers-and-aliases",children:"Where do I register Service Providers and Aliases?"}),"\n",(0,t.jsxs)(n.p,{children:["Most of the third party package Service Providers and Aliases SHOULD be registered inside the Container's Main Service\nProviders, inside the ",(0,t.jsx)(n.code,{children:"$serviceProviders"})," and ",(0,t.jsx)(n.code,{children:"$aliases"})," properties. However, some more general Service Providers and\nAliases (application features used by all containers) CAN be registered on the Ship layer in\n",(0,t.jsx)(n.code,{children:"app/Ship/Providers/ShipProvider.php"})," inside the ",(0,t.jsx)(n.code,{children:"$serviceProviders"})," and ",(0,t.jsx)(n.code,{children:"$aliases"})," properties."]}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"./optional-components/providers",children:"Providers"})," page for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-change-the-default-api-url",children:"How to change the default API URL (Subdomain and Prefix)?"}),"\n",(0,t.jsxs)(n.p,{children:["By default, Apiato uses ",(0,t.jsx)(n.code,{children:"api."})," as subdomain for all endpoints and adds only the ",(0,t.jsx)(n.code,{children:"v1"})," API version as prefix."]}),"\n",(0,t.jsxs)(n.p,{children:["To change this from ",(0,t.jsx)(n.code,{children:"api.apiato.test"})," to ",(0,t.jsx)(n.code,{children:"apiato.test/api/"}),", do the following:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Edit ",(0,t.jsx)(n.code,{children:".env"}),", change your api domain to ",(0,t.jsx)(n.code,{children:"API_URL=http://apiato.test"})," instead of ",(0,t.jsx)(n.code,{children:"API_URL=http://api.apiato.test"})," to\nremove the subdomain."]}),"\n",(0,t.jsxs)(n.li,{children:["Edit ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/apiato.php"}),", set prefix to ",(0,t.jsx)(n.code,{children:"'prefix' => 'api/',"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["That's it. Now you might need to update your tests endpoints, if they fail. Since each test can specify which\nendpoint to test, Example: In ",(0,t.jsx)(n.code,{children:"app/Containers/AppSection/User/UI/API/Tests/Functional/CreateAdminTest"})," change ",(0,t.jsx)(n.code,{children:"protected $endpoint = 'post@v1/admins';"})," to\n",(0,t.jsx)(n.code,{children:"protected $endpoint = 'post@api/v1/admins';"}),", including the new prefix."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To remove the version prefix as well, set ",(0,t.jsx)(n.code,{children:"enable_version_prefix"})," to ",(0,t.jsx)(n.code,{children:"false"})," in ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/apiato.php"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"where-do-i-define-my-composer-dependencies",children:"Where do I define my Composer dependencies?"}),"\n",(0,t.jsxs)(n.p,{children:["All the Composer dependencies should be defined in their Containers, in a ",(0,t.jsx)(n.code,{children:"composer.json"})," file."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["The Ship layer dependencies live on the root of the Ship layer in a ",(0,t.jsx)(n.code,{children:"composer.json"})," file.\nFinally, the Framework core dependencies live on the project root ",(0,t.jsx)(n.code,{children:"composer.json"})," file"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Basically using any of the ",(0,t.jsx)(n.code,{children:"composer.json"})," will do the same job. it's up to you to pick the most relevant location."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-enable-query-caching",children:"How to enable Query Caching?"}),"\n",(0,t.jsx)(n.p,{children:"By default, this feature is turned off."}),"\n",(0,t.jsxs)(n.p,{children:["To turn it on, go to the ",(0,t.jsx)(n.code,{children:".env"})," file and set ",(0,t.jsx)(n.code,{children:"ELOQUENT_QUERY_CACHE=true"}),". The query result will be cleared on\n",(0,t.jsx)(n.code,{children:"create"}),", ",(0,t.jsx)(n.code,{children:"update"})," and ",(0,t.jsx)(n.code,{children:"delete"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.em,{children:["All these configurations can be changed from ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/repository.php"})]}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"can-i-give-my-actions-rest-names",children:"Can I give my Actions REST names?"}),"\n",(0,t.jsxs)(n.p,{children:["Example: ",(0,t.jsx)(n.code,{children:"IndexAction"}),", ",(0,t.jsx)(n.code,{children:"ShowAction"}),", ",(0,t.jsx)(n.code,{children:"StoreAction"}),"..."]}),"\n",(0,t.jsxs)(n.p,{children:["Yes, you can name anything, anyway you prefer, sa long as you\u2019re just changing the name and not the naming format\n",(0,t.jsx)(n.em,{children:"\u201clike in case of routes files, they include the version number which gets applied to the api,\nand the api type to help to add the route file to different docs automatically\u201d"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The goal of giving the Actions and Tasks\u2026 a descriptive long names is, to be able to understand what\u2019s going on\ninside the class before opening it, and there\u2019s ",(0,t.jsx)(n.code,{children:"php artisan apiato:list:actions"})," command which list all the use cases \u201cActions\u201d\nin your system, so you can see what you already implemented and what needs to be done.\nIf your Action name is \u201cShowAction\u201d you will see 50 of them without really knowing what the action is doing!"]}),"\n",(0,t.jsxs)(n.p,{children:["I prepend the container name before the action name, but still a maintainable code means anyone who reads it can\nunderstand it without any explanation from the original writer!\nso I personally prefer ",(0,t.jsx)(n.code,{children:"ShowTotalNumberOfUsersAction"})," than ",(0,t.jsx)(n.code,{children:"ShowAction"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"how-are-service-providers-auto-loaded",children:"How are Service Providers auto-loaded?"}),"\n",(0,t.jsxs)(n.p,{children:["Each Container has Main Provider and other Providers (Additional Providers).\nWhen ",(0,t.jsx)(n.code,{children:"runLoadersBoot()"})," is called, it auto register ",(0,t.jsx)(n.code,{children:"ShipProvider"})," and all the Main Providers from all the Containers."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"ApiatoProvider"})," is the one who calls ",(0,t.jsx)(n.code,{children:"runLoadersBoot()"})," on startup. ",(0,t.jsx)(n.code,{children:"ApiatoProvider"})," is automatically registered using Laravel auto-discovery feature."]}),"\n",(0,t.jsx)(n.h3,{id:"how-to-create-third-party-containers",children:"How to create third-party Containers?"}),"\n",(0,t.jsxs)(n.p,{children:["Read the ",(0,t.jsx)(n.a,{href:"./getting-started/container-installer",children:"Container Installer Documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-the-default-username-for-authentication",children:"What is the default Username for authentication?"}),"\n",(0,t.jsx)(n.p,{children:"The default credentials to login are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Username: ",(0,t.jsx)(n.a,{href:"mailto:admin@admin.com",children:"admin@admin.com"})]}),"\n",(0,t.jsx)(n.li,{children:"Password: admin"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"other-questions",children:"I have a question, and I can't find answer!!"}),"\n",(0,t.jsxs)(n.p,{children:["If you have a question, or did not find an answer you were looking for on ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/apiato",children:"StackOverflow"}),". First make sure your question is related to\nApiato and is not a general question. If so, then consider visiting the\n",(0,t.jsx)(n.a,{href:"https://github.com/apiato/apiato/issues",children:"Apiato Github Issues"})," and searching for ",(0,t.jsx)(n.em,{children:"keywords"})," related to your\nissue ",(0,t.jsx)(n.em,{children:"(filter open and closed issues)"}),". Another option you have is to get help from the community on\n",(0,t.jsx)(n.a,{href:"https://discord.gg/ryPcV4KM5k",children:"Discord"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Lastly, if you got your question answered, consider sharing it, if you believe it can help others. You can submit a PR\nadding the questions and answer here on the FAQ page. Or leave it somewhere on the repository or on the chat room. Thanks in\nadvance :)"})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var i=o(96540);const t={},r=i.createContext(t);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);