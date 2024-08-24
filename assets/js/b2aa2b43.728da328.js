"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[330],{28637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=t(74848),i=t(28453);const a={title:"Container Installer"},s=void 0,r={id:"getting-started/container-installer",title:"Container Installer",description:"* Downloading and Installing Containers",source:"@site/versioned_docs/version-10.x/getting-started/container-installer.md",sourceDirName:"getting-started",slug:"/getting-started/container-installer",permalink:"/docs/10.x/getting-started/container-installer",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/getting-started/container-installer.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104e3,frontMatter:{title:"Container Installer"},sidebar:"docs",previous:{title:"Conventions",permalink:"/docs/10.x/getting-started/conventions-and-principles"},next:{title:"Code Generator",permalink:"/docs/10.x/core-features/code-generator"}},d={},l=[{value:"Downloading and Installing Containers",id:"downloading-and-installing-containers",level:3},{value:"Modifying Containers",id:"modifying-containers",level:3},{value:"Developing a Container",id:"developing-a-container",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#downloading-and-installing-containers",children:"Downloading and Installing Containers"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#developing-a-container",children:"Developing a Container"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"downloading-and-installing-containers",children:"Downloading and Installing Containers"}),"\n",(0,o.jsx)(n.p,{children:"Apiato provides an easy-to-use solution for downloading, installing and continuously updating containers from 3rd party developers."}),"\n",(0,o.jsxs)(n.p,{children:["As an application developer, you simply need to include the respective ",(0,o.jsx)(n.code,{children:"vendor/project"})," to the",(0,o.jsx)(n.code,{children:"composer.json"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, your ",(0,o.jsx)(n.code,{children:"/composer.json"})," file may look something like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "require": {\n    "apiato/settings-container": "^2.0.6"\n  }\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You just need to call ",(0,o.jsx)(n.code,{children:"composer update"})," in order to install the respective packages. The package (e.g., the container)\n",(0,o.jsx)(n.code,{children:"apiato/settings-container"})," is then installed to the ",(0,o.jsx)(n.code,{children:"app/Containers/VendorSection"})," folder. However, the developer of the package\nneeds to follow some basic guidelines listed below."]}),"\n",(0,o.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Do not"})," modify content within a downloaded container, as it will be overwritten if you call ",(0,o.jsx)(n.code,{children:"composer update"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"modifying-containers",children:"Modifying Containers"}),"\n",(0,o.jsxs)(n.p,{children:["To modify the code of this container usually you just need to copy the container to ",(0,o.jsx)(n.code,{children:"AppSection"}),"\n(or any of your custom sections) and update the namespaces. (See each container documentation for more details)"]}),"\n",(0,o.jsx)(n.h3,{id:"developing-a-container",children:"Developing a Container"}),"\n",(0,o.jsxs)(n.p,{children:["Developing a container that can be used by others is quite easy. Basically, you can ",(0,o.jsx)(n.code,{children:"extract"})," already existing functionality\nin a new container and provide the features. Note that you need to upload the container to ",(0,o.jsx)(n.code,{children:"GitHub"})," and then release\nit on ",(0,o.jsx)(n.code,{children:"Packagist"})," in order for it to be available via ",(0,o.jsx)(n.code,{children:"Composer"}),". Please see a respective tutorial how to submit a package\nto ",(0,o.jsx)(n.code,{children:"GitHub"})," and release it via ",(0,o.jsx)(n.code,{children:"Packagist"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In particular, the only thing that needs to be done, when developing a container is to provide a specific ",(0,o.jsx)(n.code,{children:"composer.json"}),"\nfile within the main folder of the container."]}),"\n",(0,o.jsxs)(n.p,{children:["An example of such a ",(0,o.jsx)(n.code,{children:"composer.json"})," file is shown below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "name": "vendor/project",\n  "description": "This is a short description for your container.",\n  "type": "apiato-container",   // you must set the type to "apiato-container" here.\n  "require": {\n    "somevendor/somepackage" : "dev-master"\n    // some other requirements here\n  },\n  "extra": {\n    "apiato": {\n      "container": {\n        "name": "Foo"   // The name of the container within the /app/Containers/VendorSection folder\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Important Information:"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["You ",(0,o.jsx)(n.strong,{children:"must"})," add the respective ",(0,o.jsx)(n.code,{children:"type : apiato-container"})," to the composer file. This way, the custom installer is used\nthat allows installing/updating containers."]}),"\n",(0,o.jsxs)(n.li,{children:["You ",(0,o.jsx)(n.strong,{children:"must"})," provide the key ",(0,o.jsx)(n.code,{children:"extra.apiato.container.name"}),". This key indicates the name of the folder (e.g., container)\nwhen installing the package to the ",(0,o.jsx)(n.code,{children:"/app/ContainersVendorSection"})," folder. In the shown example, the container would be installed to\n",(0,o.jsx)(n.code,{children:"app/Containers/VendorSection/Foo"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);