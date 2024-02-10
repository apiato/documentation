"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7604],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>f});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||c;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96788:(e,t,n)=>{n.d(t,{c:()=>h});var o=n(11504),r=n(14971),c=n(79940),a=n(76016),i=n(18136),s=n(84357);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:n}=e;return o.createElement(a.c,{href:t,className:(0,r.c)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:c,description:a}=e;return o.createElement(p,{href:t},o.createElement("h2",{className:(0,r.c)("text--truncate",l.cardTitle),title:c},n," ",c),a&&o.createElement("p",{className:(0,r.c)("text--truncate",l.cardDescription),title:a},a))}function d(e){let{item:t}=e;const n=(0,c.OQ)(t);return n?o.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,i.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,c._4)(t.docId??void 0);return o.createElement(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(u,{item:t});case"category":return o.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,c.wt)();return o.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return o.createElement(y,e);const a=(0,c.ML)(t);return o.createElement("section",{className:(0,r.c)("row",n)},a.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(f,{item:e})))))}},73836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(45072),r=(n(11504),n(95788)),c=n(96788);const a={title:"Optional Components"},i=void 0,s={unversionedId:"components/optional-components/index",id:"components/optional-components/index",title:"Optional Components",description:"Optional Components offer additional functionality",source:"@site/docs/components/optional-components/index.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/",permalink:"/docs/next/components/optional-components/",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/optional-components/index.md",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Optional Components"},sidebar:"tutorialSidebar",previous:{title:"Sub Actions",permalink:"/docs/next/components/main-components/subactions"},next:{title:"Commands",permalink:"/docs/next/components/optional-components/commands"}},l={},p=[],m={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Optional Components offer additional functionality\nthat can be incorporated into the Container.\nTheir usage is discretionary, depending on specific requirements."),(0,r.yg)("p",null,"Most of these components are just Laravel components,\nand they function in the exact same way as Laravel components.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To learn more about Apiato components, check the ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/architecture-concepts/components"},"Components")," section.")),(0,r.yg)(c.c,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);