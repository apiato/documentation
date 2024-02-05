"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2152],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>g});var o=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,g=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return t?o.createElement(g,r(r({ref:n},s),{},{components:t})):o.createElement(g,r({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[m]="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},78988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=t(45072),a=(t(11504),t(95788));const i={title:"Configs",tags:["component","optional-component","config"]},r=void 0,c={unversionedId:"components/optional-components/configs",id:"version-12.x/components/optional-components/configs",title:"Configs",description:"Apiato configs are just Laravel configs, and they function in the exact same way as Laravel configs.",source:"@site/versioned_docs/version-12.x/components/optional-components/configs.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/configs",permalink:"/docs/components/optional-components/configs",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/configs.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"config",permalink:"/docs/tags/config"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Configs",tags:["component","optional-component","config"]},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/components/optional-components/commands"},next:{title:"Events",permalink:"/docs/components/optional-components/events"}},l={},p=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Container Main Config File",id:"container-main-config-file",level:2}],s={toc:p},m="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,o.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apiato configs are just Laravel configs, and they function in the exact same way as Laravel configs.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,a.yg)("p",null,"To generate new configs\nyou may use the ",(0,a.yg)("inlineCode",{parentName:"p"},"apiato:generate:configuration")," interactive command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"php artisan apiato:generate:configuration\n")),(0,a.yg)("h2",{id:"rules"},"Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Containers MAY have as many config files as they need."),(0,a.yg)("li",{parentName:"ul"},"All container-specific and third-party package config files MUST be placed in the ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Configs")," directory."),(0,a.yg)("li",{parentName:"ul"},"All general config files MUST be placed in the ",(0,a.yg)("inlineCode",{parentName:"li"},"app/Ship/Configs")," directory."),(0,a.yg)("li",{parentName:"ul"},"All Laravel config files MUST be kept in the root ",(0,a.yg)("inlineCode",{parentName:"li"},"config")," folder."),(0,a.yg)("li",{parentName:"ul"},"You MUST NOT add any non-Laravel or third-party config files to the root ",(0,a.yg)("inlineCode",{parentName:"li"},"config")," folder.")),(0,a.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u2514\u2500\u2500 Configs\n\u2502               \u251c\u2500\u2500 section-container.php\n\u2502               \u251c\u2500\u2500 another.php\n\u2502               \u2514\u2500\u2500 ...\n\u251c\u2500\u2500 Ship\n\u2502   \u2514\u2500\u2500 Configs\n\u2502       \u251c\u2500\u2500 another-thing.php\n\u2502       \u251c\u2500\u2500 and-another.php\n\u2502       \u2514\u2500\u2500 ...\n\u2514\u2500\u2500 config\n    \u251c\u2500\u2500 app.php\n    \u2514\u2500\u2500 ...\n")),(0,a.yg)("h2",{id:"code-example"},"Code Example"),(0,a.yg)("p",null,"Configs are defined exactly as you would define them in Laravel."),(0,a.yg)("h2",{id:"container-main-config-file"},"Container Main Config File"),(0,a.yg)("p",null,"It is recommended that each container possesses a primary configuration file.\nWhile it is not obligatory,\nadhering to this practice prevents clashes between third-party package configurations and container-specific configurations."),(0,a.yg)("p",null,"The primary configuration file of a container should be named in accordance with a certain convention:\n",(0,a.yg)("inlineCode",{parentName:"p"},"camelCase")," representation of the container's Section name,\nsucceeded by ",(0,a.yg)("inlineCode",{parentName:"p"},"-"),", and then the ",(0,a.yg)("inlineCode",{parentName:"p"},"camelCase")," representation of the Container name."),(0,a.yg)("p",null,'For instance, if you have a container named "MyContainer" within the "MySection"\nsection, the configuration file would be named ',(0,a.yg)("inlineCode",{parentName:"p"},"mySection-myContainer.php"),"."))}d.isMDXComponent=!0}}]);