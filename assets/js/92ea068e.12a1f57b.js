"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[759],{57326:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=o(74848),i=o(28453);const a={title:"Overview"},s=void 0,r={id:"pacakges/readme",title:"Overview",description:"Apiato ships with a few pre-defined and pre-configured containers.",source:"@site/versioned_docs/version-12.x/pacakges/readme.md",sourceDirName:"pacakges",slug:"/pacakges/",permalink:"/docs/pacakges/",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/pacakges/readme.md",tags:[],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1707153375e3,frontMatter:{title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Hash ID",permalink:"/docs/security/hash-id"},next:{title:"Documentation",permalink:"/docs/pacakges/documentation"}},c={},d=[{value:"Downloading and Installing Containers",id:"downloading-and-installing-containers",level:3},{value:"Modifying Containers",id:"modifying-containers",level:3},{value:"Developing a Container",id:"developing-a-container",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Apiato ships with a few pre-defined and pre-configured containers.\nSome of these containers (e.g. ",(0,t.jsx)(n.a,{href:"/docs/pacakges/documentation",children:"Documentation"}),") are installed by default with a fresh Apiato project."]}),"\n",(0,t.jsx)(n.h3,{id:"downloading-and-installing-containers",children:"Downloading and Installing Containers"}),"\n",(0,t.jsx)(n.p,{children:"Apiato provides an easy-to-use solution for downloading, installing and continuously updating containers from 3rd party developers."}),"\n",(0,t.jsxs)(n.p,{children:["As an application developer, you simply need to include the respective ",(0,t.jsx)(n.code,{children:"vendor/project"})," to the",(0,t.jsx)(n.code,{children:"composer.json"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, your ",(0,t.jsx)(n.code,{children:"/composer.json"})," file may look something like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "require": {\n    "apiato/some-container": "^2.0.1"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You just need to call ",(0,t.jsx)(n.code,{children:"composer update"})," in order to install the respective packages. The package (e.g., the container)\n",(0,t.jsx)(n.code,{children:"apiato/settings-container"})," is then installed into the ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor"})," directory. However, the developer of the package\nneeds to follow some basic guidelines listed below."]}),"\n",(0,t.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Do not"})," modify content within a downloaded container, as it will be overwritten if you call ",(0,t.jsx)(n.code,{children:"composer update"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"modifying-containers",children:"Modifying Containers"}),"\n",(0,t.jsxs)(n.p,{children:["To modify the code of this container usually you just need to copy the container to ",(0,t.jsx)(n.code,{children:"AppSection"}),"\n(or any of your custom sections) and update the namespaces. (See each container documentation for more details)"]}),"\n",(0,t.jsx)(n.h3,{id:"developing-a-container",children:"Developing a Container"}),"\n",(0,t.jsxs)(n.p,{children:["Developing a container that can be used by others is quite easy. Basically, you can ",(0,t.jsx)(n.code,{children:"extract"})," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",(0,t.jsx)(n.code,{children:"GitHub"})," and then release\nit on ",(0,t.jsx)(n.code,{children:"Packagist"})," in order for it to be available via ",(0,t.jsx)(n.code,{children:"Composer"}),". Please see a respective tutorial how to submit a package\nto ",(0,t.jsx)(n.code,{children:"GitHub"})," and release it via ",(0,t.jsx)(n.code,{children:"Packagist"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In particular, the only thing that needs to be done, when developing a container is to provide a specific ",(0,t.jsx)(n.code,{children:"composer.json"}),"\nfile in the root of the container directory."]}),"\n",(0,t.jsxs)(n.p,{children:["An example of such a ",(0,t.jsx)(n.code,{children:"composer.json"})," file is shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here.\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container in the app/Containers/Vendor directory\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Important Information:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["You ",(0,t.jsx)(n.strong,{children:"must"})," add the respective ",(0,t.jsx)(n.code,{children:"type : apiato-container"})," to the composer file. This way, the custom installer is used\nthat allows installing/updating containers."]}),"\n",(0,t.jsxs)(n.li,{children:["You ",(0,t.jsx)(n.strong,{children:"must"})," provide the key ",(0,t.jsx)(n.code,{children:"extra.apiato.container.name"}),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor"})," directory. In the shown example, the container would be installed to\n",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/Foo"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);