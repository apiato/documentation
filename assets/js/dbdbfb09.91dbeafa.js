"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8330],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},20624:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={title:"Events"},i=void 0,l={unversionedId:"optional-components/events",id:"version-10.x/optional-components/events",title:"Events",description:"- Definition",source:"@site/versioned_docs/version-10.x/optional-components/events.md",sourceDirName:"optional-components",slug:"/optional-components/events",permalink:"/docs/10.x/optional-components/events",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/events.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"Apr 25, 2021",frontMatter:{title:"Events"},sidebar:"version-10.x/docs",previous:{title:"Languages",permalink:"/docs/10.x/optional-components/languages"},next:{title:"Mails",permalink:"/docs/10.x/optional-components/mails"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Usage",id:"usage",level:3},{value:"Broadcasting",id:"broadcasting",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#usage"},"Usage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#broadcasting"},"Broadcasting"))),(0,a.yg)("h3",{id:"definition"},"Definition"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application."),(0,a.yg)("li",{parentName:"ul"},"Events are classes that can be fired from anywhere in your application."),(0,a.yg)("li",{parentName:"ul"},"An event class will usually be bound to one, or many Events Listeners Classes or has those Listeners registered to listen to it."),(0,a.yg)("li",{parentName:"ul"},'"fire" is the term that is usually used to call an Event.')),(0,a.yg)("h3",{id:"principles"},"Principles"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended)."),(0,a.yg)("li",{parentName:"ul"},"Events SHOULD be created inside the Containers. However, general Events CAN be created in the Ship layer.")),(0,a.yg)("h3",{id:"rules"},"Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Event classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events."),(0,a.yg)("li",{parentName:"ul"},"All Events MUST extend from ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Events\\Event"),".")),(0,a.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Events\n          - SomethingHappenedEvent.php\n          - ...\n        - Listeners\n          - ListenToMusicListener.php\n          - ...\n\n  - Ship\n    - Events\n      - GlobalStateChanged.php\n      - SomethingBiiigHappenedEvent.php\n      - ...\n")),(0,a.yg)("h3",{id:"usage"},"Usage"),(0,a.yg)("p",null,"In Laravel, you can create and register events in multiple way. Read ",(0,a.yg)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel documentation")," to learn more about Events. "),(0,a.yg)("p",null,"Your custom ",(0,a.yg)("inlineCode",{parentName:"p"},"EventServiceProvider")," needs to be registered in the containers ",(0,a.yg)("inlineCode",{parentName:"p"},"MainServiceProvider")," as well."),(0,a.yg)("h2",{id:"broadcasting"},"Broadcasting"),(0,a.yg)("p",null,"To define Broadcasting route go to ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Boardcasts/Routes.php"),"."),(0,a.yg)("admonition",{title:"Further reading",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"More info at ",(0,a.yg)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);