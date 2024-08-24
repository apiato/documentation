"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[5953],{30185:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(74848),i=n(28453);const a={title:"Settings"},o=void 0,r={id:"additional-features/apiato-containers/settings",title:"Settings",description:"- Installation",source:"@site/versioned_docs/version-10.x/additional-features/apiato-containers/settings.md",sourceDirName:"additional-features/apiato-containers",slug:"/additional-features/apiato-containers/settings",permalink:"/docs/10.x/additional-features/apiato-containers/settings",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/additional-features/apiato-containers/settings.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104e3,frontMatter:{title:"Settings"},sidebar:"docs",previous:{title:"Payments",permalink:"/docs/10.x/additional-features/apiato-containers/payments"},next:{title:"Overview",permalink:"/docs/10.x/additional-features/community-containers/overview"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Seed the default settings",id:"seed-the-default-settings",level:2},{value:"Read settings",id:"read-settings",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#seed-the-default-settings",children:"Seed the default settings"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#read-settings",children:"Read settings"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"composer require apiato/settings-container\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now run ",(0,s.jsx)(t.code,{children:"php artisan migrate"})]}),"\n",(0,s.jsx)(t.h2,{id:"seed-the-default-settings",children:"Seed the default settings"}),"\n",(0,s.jsxs)(t.admonition,{title:"Instructions",type:"caution",children:[(0,s.jsx)(t.p,{children:"This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:"}),(0,s.jsxs)(t.p,{children:["1- Copy the container from ",(0,s.jsx)(t.code,{children:"Vendor"})," to ",(0,s.jsx)(t.code,{children:"AppSection"})," (or any of your custom sections) of your project",(0,s.jsx)(t.br,{}),"\n","2- Fix the namespaces",(0,s.jsx)(t.br,{}),"\n","3- Remove ",(0,s.jsx)(t.code,{children:"apiato/settings-container"})," dependency from project root composer.json"]})]}),"\n",(0,s.jsxs)(t.p,{children:["Seed default settings in ",(0,s.jsx)(t.code,{children:"app/Containers/YourSection/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php"})]}),"\n",(0,s.jsx)(t.h2,{id:"read-settings",children:"Read settings"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"$value = $this->findSettingsByKeyTask->run('whateverSettingsName');\n"})}),"\n",(0,s.jsx)(t.p,{children:"You can search for settings by Key as in the example above, or create a class for each setting as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-php",children:"$value = $this->findWhateverSettingsTask->run();\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);