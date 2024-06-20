"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4275],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,c(c({ref:t},p),{},{components:n})):o.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3514:(e,t,n)=>{n.d(t,{A:()=>h});var o=n(96540),r=n(20053),a=n(81754),c=n(75489),i=n(16654),s=n(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return o.createElement(c.A,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:a,description:c}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,r.A)("text--truncate",l.cardTitle),title:a},n," ",a),c&&o.createElement("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:c},c))}function d(e){let{item:t}=e;const n=(0,a._o)(t);return n?o.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(u,{item:t});case"category":return o.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.$S)();return o.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return o.createElement(y,e);const c=(0,a.d1)(t);return o.createElement("section",{className:(0,r.A)("row",n)},c.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},3147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var o=n(58168),r=(n(96540),n(15680)),a=n(3514);const c={title:"Optional Components"},i=void 0,s={unversionedId:"components/optional-components/index",id:"components/optional-components/index",title:"Optional Components",description:"Optional Components offer additional functionality",source:"@site/docs/components/optional-components/index.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/",permalink:"/docs/next/components/optional-components/",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/index.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Optional Components"},sidebar:"tutorialSidebar",previous:{title:"Sub Actions",permalink:"/docs/next/components/main-components/subactions"},next:{title:"Commands",permalink:"/docs/next/components/optional-components/commands"}},l={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Optional Components offer additional functionality\nthat can be incorporated into the Container.\nTheir usage is discretionary, depending on specific requirements."),(0,r.yg)("p",null,"Most of these components are just Laravel components,\nand they function in the exact same way as Laravel components.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To learn more about Apiato components, check the ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/architecture-concepts/components"},"Components")," section.")),(0,r.yg)(a.A,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);