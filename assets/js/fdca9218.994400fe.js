"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[244],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,d=f["".concat(p,".").concat(u)]||f[u]||m[u]||r;return t?i.createElement(d,o(o({ref:n},s),{},{components:t})):i.createElement(d,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},46485:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const r={title:"Configs"},o=void 0,l={unversionedId:"optional-components/configs",id:"version-10.x/optional-components/configs",title:"Configs",description:"* Definition",source:"@site/versioned_docs/version-10.x/optional-components/configs.md",sourceDirName:"optional-components",slug:"/optional-components/configs",permalink:"/docs/10.x/optional-components/configs",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/configs.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"Apr 25, 2021",frontMatter:{title:"Configs"},sidebar:"version-10.x/docs",previous:{title:"Middlewares",permalink:"/docs/10.x/optional-components/middlewares"},next:{title:"Helpers",permalink:"/docs/10.x/optional-components/helpers"}},p={},c=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Example simple Config file",id:"example-simple-config-file",level:4}],s={toc:c},f="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(f,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("p",null,"Configs are files that contain configurations."),(0,a.kt)("p",null,"In each Apiato container, there are two types of config files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the container specific config file (a config file that contains the container specific configurations)."),(0,a.kt)("li",{parentName:"ul"},"the container third party packages config files (a config file that belongs to a third party package, required by the composer file of the container).")),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your custom config files and third party packages config files, should be placed in the Container, unless it's too generic then it can be placed on the Ship Layer."),(0,a.kt)("li",{parentName:"ul"},"Containers can have as many config files as they need.")),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When publishing a third party package config file, move it manually to its container or to the Ship Configs folder in case it is generic."),(0,a.kt)("li",{parentName:"ul"},"Framework config files (provided by Laravel) lives at the default config directory on the root of the project."),(0,a.kt)("li",{parentName:"ul"},"You SHOULD NOT add any config file to the root ",(0,a.kt)("inlineCode",{parentName:"li"},"config")," directory."),(0,a.kt)("li",{parentName:"ul"},"The container specific config file, MUST be named this way:",(0,a.kt)("br",{parentName:"li"}),"camelCase of its Section name + ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," + camelCase of its Container name, to prevent conflicts between third party packages and container specific packages.",(0,a.kt)("br",{parentName:"li"}),"For example, config file inside ",(0,a.kt)("inlineCode",{parentName:"li"},"MySection")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"MyContainer")," should be named like this: ",(0,a.kt)("inlineCode",{parentName:"li"},"mySection-myContainer.php"))),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- app\n  - Containers\n    {section-name}\n      - {container-name}\n        - Configs\n          - {section-name}-{container-name}.php\n          - package-config-file1.php\n          - ...\n  - Ship\n    - Configs\n      - apiato.php\n      - ...\n- config\n  - app.php\n  - ...\n")),(0,a.kt)("h3",{id:"code-samples"},"Code Samples"),(0,a.kt)("h4",{id:"example-simple-config-file"},"Example simple Config file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// app/Containers/{SectionName}/{ContainerName}/Configs/{section-name}-{container-name}.php\nreturn [\n\n    /*\n    |--------------------------------------------------------------------------\n    | Default Namespace\n    |--------------------------------------------------------------------------\n    */\n    'namespace'       => 'App',\n\n    // some other config params here...\n")),(0,a.kt)("p",null,"You can access the respective configuration key like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$value = Config::get('{section-name}-{container-name}.namespace');     // returns 'App'\n$value = config('{section-name}-{container-name}.namespace');          // same, but using laravel helper function\n")),(0,a.kt)("admonition",{title:"Further reading",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More info at ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/configuration"},"Laravel Docs"),".")))}m.isMDXComponent=!0}}]);