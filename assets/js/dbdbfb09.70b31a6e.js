"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2638:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Events"},i=void 0,l={unversionedId:"optional-components/events",id:"version-10.x/optional-components/events",title:"Events",description:"- Definition",source:"@site/versioned_docs/version-10.x/optional-components/events.md",sourceDirName:"optional-components",slug:"/optional-components/events",permalink:"/docs/10.x/optional-components/events",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/events.md",tags:[],version:"10.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Events"},sidebar:"version-10.x/docs",previous:{title:"Languages",permalink:"/docs/10.x/optional-components/languages"},next:{title:"Mails",permalink:"/docs/10.x/optional-components/mails"}},s={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Usage",id:"usage",level:3},{value:"Broadcasting",id:"broadcasting",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#broadcasting"},"Broadcasting"))),(0,a.kt)("h3",{id:"definition"},"Definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application."),(0,a.kt)("li",{parentName:"ul"},"Events are classes that can be fired from anywhere in your application."),(0,a.kt)("li",{parentName:"ul"},"An event class will usually be bound to one, or many Events Listeners Classes or has those Listeners registered to listen to it."),(0,a.kt)("li",{parentName:"ul"},'"fire" is the term that is usually used to call an Event.')),(0,a.kt)("h3",{id:"principles"},"Principles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended)."),(0,a.kt)("li",{parentName:"ul"},"Events SHOULD be created inside the Containers. However, general Events CAN be created in the Ship layer.")),(0,a.kt)("h3",{id:"rules"},"Rules"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Event classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events."),(0,a.kt)("li",{parentName:"ul"},"All Events MUST extend from ",(0,a.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Events\\Event"),".")),(0,a.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- App\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Events\n          - SomethingHappenedEvent.php\n          - ...\n        - Listeners\n          - ListenToMusicListener.php\n          - ...\n\n  - Ship\n    - Events\n      - GlobalStateChanged.php\n      - SomethingBiiigHappenedEvent.php\n      - ...\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"In Laravel, you can create and register events in multiple way. Read ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel documentation")," to learn more about Events. "),(0,a.kt)("p",null,"Your custom ",(0,a.kt)("inlineCode",{parentName:"p"},"EventServiceProvider")," needs to be registered in the containers ",(0,a.kt)("inlineCode",{parentName:"p"},"MainServiceProvider")," as well."),(0,a.kt)("h2",{id:"broadcasting"},"Broadcasting"),(0,a.kt)("p",null,"To define Broadcasting route go to ",(0,a.kt)("inlineCode",{parentName:"p"},"app/Ship/Boardcasts/Routes.php"),"."),(0,a.kt)("admonition",{title:"Further reading",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"More info at ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/events"},"Laravel Docs"),".")))}d.isMDXComponent=!0}}]);