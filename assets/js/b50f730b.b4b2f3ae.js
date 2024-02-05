"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5222],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>y});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96508:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const o={title:"Views"},l=void 0,i={unversionedId:"main-components/views",id:"version-9.x/main-components/views",title:"Views",description:"* Definition & Principles",source:"@site/versioned_docs/version-9.x/main-components/views.md",sourceDirName:"main-components",slug:"/main-components/views",permalink:"/docs/9.x/main-components/views",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/main-components/views.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631,formattedLastUpdatedAt:"Apr 10, 2021",frontMatter:{title:"Views"},sidebar:"version-9.x/docs",previous:{title:"Models",permalink:"/docs/9.x/main-components/models"},next:{title:"Transformers",permalink:"/docs/9.x/main-components/transformers"}},s={},p=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-samples",level:3},{value:"Namespaces",id:"namespaces",level:2}],c={toc:p},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#definition-principles"},"Definition & Principles")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#namespaces"},"Namespaces"))),(0,a.yg)("h3",{id:"definition-principles"},"Definition & Principles"),(0,a.yg)("p",null,"Read from the ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#Views"},(0,a.yg)("strong",{parentName:"a"},"Porto SAP Documentation (#Views)")),"."),(0,a.yg)("h3",{id:"rules"},"Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"All Views are namespaced as the lower case of the Container name."))),(0,a.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"}," - app\n    - Containers\n        - {container-name}\n            - UI\n                - WEB\n                    - Views\n                        - welcome.php\n                        - profile.php\n                        - ...\n")),(0,a.yg)("h3",{id:"code-samples"},"Code Sample"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Welcome page View")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n<div class="container">\n    <div class="content">\n        <div class="title">Welcome</div>\n    </div>\n</div>\n</body>\n</html>\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example: Usage From Controller")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Welcome\\UI\\WEB\\Controllers;\n\nuse App\\Ship\\Parents\\Controllers\\WebController;\n\nclass Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('just-welcome');\n    }\n}\n\n")),(0,a.yg)("h2",{id:"namespaces"},"Namespaces"),(0,a.yg)("p",null,"By default, all the Container Views are namespaced to the Container name."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"If a Container named ",(0,a.yg)("em",{parentName:"p"},"Store")," has View ",(0,a.yg)("inlineCode",{parentName:"p"},"say-hello"),", you can access the view like this ",(0,a.yg)("inlineCode",{parentName:"p"},"view('store::just-welcome')"),". If you try to access it without the namespace ",(0,a.yg)("inlineCode",{parentName:"p"},"view('just-welcome')"),", it will not find your View."))}u.isMDXComponent=!0}}]);