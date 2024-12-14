"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[1781],{13539:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"core-features/system-settings","title":"System Settings","description":"- Seed the default settings","source":"@site/versioned_docs/version-9.x/core-features/system-settings.md","sourceDirName":"core-features","slug":"/core-features/system-settings","permalink":"/docs/9.x/core-features/system-settings","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/system-settings.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618748235000,"frontMatter":{"title":"System Settings"},"sidebar":"docs","previous":{"title":"Payments","permalink":"/docs/9.x/core-features/payments"},"next":{"title":"API Versioning","permalink":"/docs/9.x/core-features/api-versioning"}}');var a=s(74848),i=s(28453);const r={title:"System Settings"},o=void 0,d={},c=[{value:"Seed the default settings",id:"seed-the-default-settings",level:3},{value:"Read settings",id:"read-settings",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#seed-the-default-settings",children:"Seed the default settings"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#read-settings",children:"Read settings"})}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"At many cases you need to have some dynamic system settings, such as in a referral program, where you give 'gifts' to anyone who refers new users but, those gifts can be changed in the future, so it's better not have them statically created in the code, instead read from the database where an  Admin can manage them at any time."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"app/Containers/Settings"})," Container helps to store and retrieve those key values settings. It also seeds the database with the default configurations during the installation."]}),"\n",(0,a.jsx)(t.h3,{id:"seed-the-default-settings",children:"Seed the default settings"}),"\n",(0,a.jsxs)(t.p,{children:["Default Settings should be seeded in ",(0,a.jsx)(t.code,{children:"app/Containers/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php"})]}),"\n",(0,a.jsx)(t.h3,{id:"read-settings",children:"Read settings"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"<?php\n$value = $this->findSettingsByKeyTask->run('whateverSettingsName');\n"})}),"\n",(0,a.jsx)(t.p,{children:"You can search for settings by Key as in the example above, or create a class for each settings as follows:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-php",children:"<?php\n$value = $this->findWhateverSettingsTask->run();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>o});var n=s(96540);const a={},i=n.createContext(a);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);