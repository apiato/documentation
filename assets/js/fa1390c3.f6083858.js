"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={title:"System Settings"},i=void 0,o={unversionedId:"core-features/system-settings",id:"version-9.x/core-features/system-settings",title:"System Settings",description:"- Seed the default settings",source:"@site/versioned_docs/version-9.x/core-features/system-settings.md",sourceDirName:"core-features",slug:"/core-features/system-settings",permalink:"/docs/9.x/core-features/system-settings",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/system-settings.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"Apr 18, 2021",frontMatter:{title:"System Settings"},sidebar:"version-9.x/docs",previous:{title:"Payments",permalink:"/docs/9.x/core-features/payments"},next:{title:"API Versioning",permalink:"/docs/9.x/core-features/api-versioning"}},l={},c=[{value:"Seed the default settings",id:"seed-the-default-settings",level:3},{value:"Read settings",id:"read-settings",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#seed-the-default-settings"},"Seed the default settings")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#read-settings"},"Read settings"))),(0,a.kt)("p",null,"At many cases you need to have some dynamic system settings, such as in a referral program, where you give 'gifts' to anyone who refers new users but, those gifts can be changed in the future, so it's better not have them statically created in the code, instead read from the database where an  Admin can manage them at any time."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/Settings")," Container helps to store and retrieve those key values settings. It also seeds the database with the default configurations during the installation."),(0,a.kt)("h3",{id:"seed-the-default-settings"},"Seed the default settings"),(0,a.kt)("p",null,"Default Settings should be seeded in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Containers/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php")),(0,a.kt)("h3",{id:"read-settings"},"Read settings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = $this->findSettingsByKeyTask->run('whateverSettingsName');\n")),(0,a.kt)("p",null,"You can search for settings by Key as in the example above, or create a class for each settings as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n$value = $this->findWhateverSettingsTask->run();\n")))}d.isMDXComponent=!0}}]);