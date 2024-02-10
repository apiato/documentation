"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3676],{95788:(e,n,a)=>{a.d(n,{Iu:()=>g,yg:()=>m});var t=a(11504);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},g=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),u=p(a),d=i,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return a?t.createElement(m,o(o({ref:n},g),{},{components:a})):t.createElement(m,o({ref:n},g))}));function m(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,o=new Array(l);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85652:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var t=a(45072),i=(a(11504),a(95788));const l={title:"Localization"},o=void 0,r={unversionedId:"core-features/localization",id:"version-9.x/core-features/localization",title:"Localization",description:"- Select Request Language",source:"@site/versioned_docs/version-9.x/core-features/localization.md",sourceDirName:"core-features",slug:"/core-features/localization",permalink:"/docs/9.x/core-features/localization",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/localization.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618751700,formattedLastUpdatedAt:"Apr 18, 2021",frontMatter:{title:"Localization"},sidebar:"version-9.x/docs",previous:{title:"Hash ID",permalink:"/docs/9.x/core-features/hash-id"},next:{title:"Rate Limiting",permalink:"/docs/9.x/core-features/rate-limiting"}},s={},p=[{value:"Select Request Language",id:"select-request-language",level:2},{value:"Support new languages",id:"support-new-languages",level:2},{value:"Translating Strings",id:"translating-strings",level:2},{value:"Disable Localization",id:"disable-localization",level:2},{value:"Get Available Localizations",id:"get-available-localizations",level:2},{value:"Tests",id:"tests",level:2}],g={toc:p},u="wrapper";function c(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.c)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#select-request-language"},"Select Request Language")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#support-new-languages"},"Support new languages")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#translating-strings"},"Translating Strings")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#disable-localization"},"Disable Localization")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#get-available-localizations"},"Get Available Localizations")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"#tests"},"Tests"))),(0,i.yg)("p",null,"The Localization is provided by the Localization Container."),(0,i.yg)("h2",{id:"select-request-language"},"Select Request Language"),(0,i.yg)("p",null,"You can select the language of the response by adding the header ",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," to the request. By default, the\n",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," is set to the language defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"config/app.php")," ",(0,i.yg)("inlineCode",{parentName:"p"},"locale"),". "),(0,i.yg)("p",null,"Please note that ",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," only determines, that the client ",(0,i.yg)("em",{parentName:"p"},"would like")," to get the information in this specific\nlanguage. It is not given, that the API responds in this language!"),(0,i.yg)("p",null,"When the ",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," header is missing, the default locale will be applied."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Heads up!"),"\nPlease be sure that your client does not send an ",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," header automatically. Some REST clients\n(e.g., ",(0,i.yg)("inlineCode",{parentName:"p"},"POSTMAN"),") automatically add header-fields based on the operating-systems settings. So your ",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," header\nmay be set automatically without knowing!")),(0,i.yg)("p",null,"The API will answer with the applied language in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Content-Language")," header of the response."),(0,i.yg)("p",null,"If the requested language cannot be resolved (e.g. it is not defined) the API throws an ",(0,i.yg)("inlineCode",{parentName:"p"},"UnsupportedLanguageException")," to tell\nthe client about this."),(0,i.yg)("p",null,"The overall workflow of the Middleware is as follows:\n1) Extract the ",(0,i.yg)("inlineCode",{parentName:"p"},"Accept-Language")," field from the request header. If none is set, use the default locale from the config file\n2) Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",(0,i.yg)("inlineCode",{parentName:"p"},"['en-GB', 'en-US', 'en']")," (the regions before languages,\nas regions are more specific)\n3) Check, if the value from 1) is within the list from 2). If the value is within this list, set it as application language,\nif not throw an ",(0,i.yg)("inlineCode",{parentName:"p"},"Exception"),"."),(0,i.yg)("h2",{id:"support-new-languages"},"Support new languages"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"All supported languages must be added to the ",(0,i.yg)("inlineCode",{parentName:"li"},"supported_languages")," in ",(0,i.yg)("inlineCode",{parentName:"li"},"app/Containers/Localization/Configs/localization.php"),"\nto prevent users from requesting unsupported languages, as follows:")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\n    'supported_languages' => [\n        'ar',\n        'en' => [\n            'en-GB',\n            'en-US',\n        ],\n        'es',\n        'fr',\n    ],\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Create new languages files:")),(0,i.yg)("p",null,"Languages file can be placed in any container, not only the Localization Container. Refer to the ",(0,i.yg)("a",{parentName:"p",href:"./localization"},"Localization"),"\npage for more info."),(0,i.yg)("p",null,"Example languages files are included in the Localization Container at ",(0,i.yg)("inlineCode",{parentName:"p"},"app/Containers/Localization/Resources/Languages"),"."),(0,i.yg)("h2",{id:"translating-strings"},"Translating Strings"),(0,i.yg)("p",null,"By default all the Container translation files are namespaced to the Container name."),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Example:")),(0,i.yg)("p",null,"If a Container named ",(0,i.yg)("inlineCode",{parentName:"p"},"Store")," has ",(0,i.yg)("inlineCode",{parentName:"p"},"en")," translation file called ",(0,i.yg)("inlineCode",{parentName:"p"},"notifications")," that contains translation for ",(0,i.yg)("inlineCode",{parentName:"p"},"welcome"),'\nlike "Welcome to our store :)". You can access this translation as follows ',(0,i.yg)("inlineCode",{parentName:"p"},"trans('store::notifications.welcome')"),". If\nyou remove the namespace (which is the lowercase of the container name) and try to access it like this\n",(0,i.yg)("inlineCode",{parentName:"p"},"trans('notifications.welcome')")," it will not find your translation and will print ",(0,i.yg)("inlineCode",{parentName:"p"},"notifications.welcome")," only."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"Heads up!"),"\nIf you try to load a string for a language that is ",(0,i.yg)("strong",{parentName:"p"},"not available")," (e.g., there is no folder for this language), Apiato\nwill stick to the default one that is defined in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.locale")," config file. This is also true, if the requested locale\nis present in the ",(0,i.yg)("inlineCode",{parentName:"p"},"supported_languages")," array from the configuration file.")),(0,i.yg)("h2",{id:"disable-localization"},"Disable Localization"),(0,i.yg)("p",null,"You will need to remove the Localization Middleware, by simply going to ",(0,i.yg)("inlineCode",{parentName:"p"},"app/Containers/Localization/Providers/MainServiceProvider.php"),"\nand removing the ",(0,i.yg)("inlineCode",{parentName:"p"},"MiddlewareServiceProvider")," from the ",(0,i.yg)("inlineCode",{parentName:"p"},"$serviceProviders")," property."),(0,i.yg)("h2",{id:"get-available-localizations"},"Get Available Localizations"),(0,i.yg)("p",null,"Apiato provides a convenient way to get all defined localizations. These localizations can be retrieved via ",(0,i.yg)("inlineCode",{parentName:"p"},"GET /localizations"),'\nby default. Note that this route only outputs the "top level" locales, like ',(0,i.yg)("inlineCode",{parentName:"p"},"en")," from the example above. However, if\nspecific regions (e.g., ",(0,i.yg)("inlineCode",{parentName:"p"},"en-US"),") are defined, these will show up in the result as well."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"Transformer")," for the localizations not only provide the ",(0,i.yg)("inlineCode",{parentName:"p"},"language")," (e.g., ",(0,i.yg)("inlineCode",{parentName:"p"},"de"),"), but also outputs the name of the\nlanguage in this specific language (e.g., ",(0,i.yg)("inlineCode",{parentName:"p"},"locale_name => Deutsch"),"). Furthermore, the language name is outputted in the\napplications default name (e.g., configured in ",(0,i.yg)("inlineCode",{parentName:"p"},"app.locale"),"). This would result in ",(0,i.yg)("inlineCode",{parentName:"p"},"default_name => German"),"."),(0,i.yg)("p",null,"The same applies to the regions that are defined (e.g., ",(0,i.yg)("inlineCode",{parentName:"p"},"de-DE"),"). Consequently, this results in ",(0,i.yg)("inlineCode",{parentName:"p"},"locale_name => Deutschland"),"\nand ",(0,i.yg)("inlineCode",{parentName:"p"},"default_name = Germany"),"."),(0,i.yg)("h2",{id:"tests"},"Tests"),(0,i.yg)("p",null,"To change the default language in your tests requests. You can set the ",(0,i.yg)("inlineCode",{parentName:"p"},"env")," language in the ",(0,i.yg)("inlineCode",{parentName:"p"},"phpunit.xml")," file."))}c.isMDXComponent=!0}}]);