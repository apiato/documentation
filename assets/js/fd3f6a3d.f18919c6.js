"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9052],{28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var n=r(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}},49699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"framework-features/index","title":"Framework Features","description":"Apiato is built on top of Laravel, and it uses many of its features. However, Apiato also provides some additional features that are not available in Laravel.","source":"@site/versioned_docs/version-12.x/framework-features/index.md","sourceDirName":"framework-features","slug":"/framework-features/","permalink":"/docs/framework-features/","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/framework-features/index.md","tags":[],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"frontMatter":{"title":"Framework Features"},"sidebar":"tutorialSidebar","previous":{"title":"Request Lifecycle","permalink":"/docs/architecture-concepts/request-lifecycle"},"next":{"title":"Code Generator","permalink":"/docs/framework-features/code-generator"}}');var o=r(74848),s=r(28453),a=r(99563);const i={title:"Framework Features"},c=void 0,l={},u=[];function d(e){const t={p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Apiato is built on top of Laravel, and it uses many of its features. However, Apiato also provides some additional features that are not available in Laravel."}),"\n",(0,o.jsx)(t.p,{children:"Here is a list of the most important features that Apiato provides."}),"\n",(0,o.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},81430:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),o=r(40797);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const o=r.select(t),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,t,e)}}},99563:(e,t,r)=>{r.d(t,{A:()=>v});r(96540);var n=r(34164),o=r(30102),s=r(56289),a=r(81430),i=r(22887),c=r(50539),l=r(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function f(e){let{href:t,icon:r,title:o,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:o,children:[r," ",o]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,o.Nr)(t),n=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,o.$S)();return(0,d.jsx)(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(g,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}}}]);