"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[759],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=o,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96811:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(58168),o=(t(96540),t(15680));const i={title:"Overview"},r=void 0,l={unversionedId:"pacakges/readme",id:"version-12.x/pacakges/readme",title:"Overview",description:"Apiato ships with a few pre-defined and pre-configured containers.",source:"@site/versioned_docs/version-12.x/pacakges/readme.md",sourceDirName:"pacakges",slug:"/pacakges/",permalink:"/docs/pacakges/",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/pacakges/readme.md",tags:[],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1707153375,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Hash ID",permalink:"/docs/security/hash-id"},next:{title:"Documentation",permalink:"/docs/pacakges/documentation"}},p={},s=[{value:"Downloading and Installing Containers",id:"downloading-and-installing-containers",level:3},{value:"Modifying Containers",id:"modifying-containers",level:3},{value:"Developing a Container",id:"developing-a-container",level:3}],c={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Apiato ships with a few pre-defined and pre-configured containers.\nSome of these containers (e.g. ",(0,o.yg)("a",{parentName:"p",href:"/docs/pacakges/documentation"},"Documentation"),") are installed by default with a fresh Apiato project."),(0,o.yg)("h3",{id:"downloading-and-installing-containers"},"Downloading and Installing Containers"),(0,o.yg)("p",null,"Apiato provides an easy-to-use solution for downloading, installing and continuously updating containers from 3rd party developers."),(0,o.yg)("p",null,"As an application developer, you simply need to include the respective ",(0,o.yg)("inlineCode",{parentName:"p"},"vendor/project")," to the",(0,o.yg)("inlineCode",{parentName:"p"},"composer.json"),"."),(0,o.yg)("p",null,"For example, your ",(0,o.yg)("inlineCode",{parentName:"p"},"/composer.json")," file may look something like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "apiato/some-container": "^2.0.1"\n  }\n}\n')),(0,o.yg)("p",null,"You just need to call ",(0,o.yg)("inlineCode",{parentName:"p"},"composer update")," in order to install the respective packages. The package (e.g., the container)\n",(0,o.yg)("inlineCode",{parentName:"p"},"apiato/settings-container")," is then installed into the ",(0,o.yg)("inlineCode",{parentName:"p"},"app/Containers/Vendor")," directory. However, the developer of the package\nneeds to follow some basic guidelines listed below."),(0,o.yg)("admonition",{title:"Warning",type:"caution"},(0,o.yg)("p",{parentName:"admonition"},(0,o.yg)("strong",{parentName:"p"},"Do not")," modify content within a downloaded container, as it will be overwritten if you call ",(0,o.yg)("inlineCode",{parentName:"p"},"composer update"),".")),(0,o.yg)("h3",{id:"modifying-containers"},"Modifying Containers"),(0,o.yg)("p",null,"To modify the code of this container usually you just need to copy the container to ",(0,o.yg)("inlineCode",{parentName:"p"},"AppSection"),"\n(or any of your custom sections) and update the namespaces. (See each container documentation for more details)"),(0,o.yg)("h3",{id:"developing-a-container"},"Developing a Container"),(0,o.yg)("p",null,"Developing a container that can be used by others is quite easy. Basically, you can ",(0,o.yg)("inlineCode",{parentName:"p"},"extract")," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",(0,o.yg)("inlineCode",{parentName:"p"},"GitHub")," and then release\nit on ",(0,o.yg)("inlineCode",{parentName:"p"},"Packagist")," in order for it to be available via ",(0,o.yg)("inlineCode",{parentName:"p"},"Composer"),". Please see a respective tutorial how to submit a package\nto ",(0,o.yg)("inlineCode",{parentName:"p"},"GitHub")," and release it via ",(0,o.yg)("inlineCode",{parentName:"p"},"Packagist"),"."),(0,o.yg)("p",null,"In particular, the only thing that needs to be done, when developing a container is to provide a specific ",(0,o.yg)("inlineCode",{parentName:"p"},"composer.json"),"\nfile in the root of the container directory."),(0,o.yg)("p",null,"An example of such a ",(0,o.yg)("inlineCode",{parentName:"p"},"composer.json")," file is shown below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here.\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container in the app/Containers/Vendor directory\n      }\n    }\n  }\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Important Information:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You ",(0,o.yg)("strong",{parentName:"li"},"must")," add the respective ",(0,o.yg)("inlineCode",{parentName:"li"},"type : apiato-container")," to the composer file. This way, the custom installer is used\nthat allows installing/updating containers."),(0,o.yg)("li",{parentName:"ul"},"You ",(0,o.yg)("strong",{parentName:"li"},"must")," provide the key ",(0,o.yg)("inlineCode",{parentName:"li"},"extra.apiato.container.name"),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",(0,o.yg)("inlineCode",{parentName:"li"},"app/Containers/Vendor")," directory. In the shown example, the container would be installed to\n",(0,o.yg)("inlineCode",{parentName:"li"},"app/Containers/Vendor/Foo"),".")))}u.isMDXComponent=!0}}]);