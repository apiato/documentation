"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[3337],{28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(96540);const l={},t=i.createContext(l);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(t.Provider,{value:n},e.children)}},80734:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"pacakges/localization","title":"Localization","description":"The Localization Container is built on top of Laravel\'s localization features","source":"@site/docs/pacakges/localization.md","sourceDirName":"pacakges","slug":"/pacakges/localization","permalink":"/docs/next/pacakges/localization","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/pacakges/localization.md","tags":[{"inline":true,"label":"package","permalink":"/docs/next/tags/package"}],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1734360023000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Localization","tags":["package"]},"sidebar":"tutorialSidebar","previous":{"title":"Documentation","permalink":"/docs/next/pacakges/documentation"},"next":{"title":"Social Authentication","permalink":"/docs/next/pacakges/social-authentication"}}');var l=a(74848),t=a(28453);const s={sidebar_position:2,title:"Localization",tags:["package"]},o=void 0,c={},r=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Publishing Configs",id:"publishing-configs",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Usage",id:"usage",level:2},{value:"Adding New Languages",id:"adding-new-languages",level:2},{value:"Supporting New Languages",id:"supporting-new-languages",level:2},{value:"Requesting a Specific Language",id:"requesting-a-specific-language",level:2},{value:"Enable/Disable Localization",id:"enabledisable-localization",level:2},{value:"Retrieve Available Localizations",id:"retrieve-available-localizations",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["The Localization Container is built on top of Laravel's ",(0,l.jsx)(n.a,{href:"https://laravel.com/docs/localization",children:"localization"})," features\nand provides a convenient way to create and manage translations for your application."]}),"\n",(0,l.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Intl"})," PHP Extension is required to use this feature."]}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"composer require apiato/localization-container\n"})}),"\n",(0,l.jsx)(n.h2,{id:"publishing-configs",children:"Publishing Configs"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"php artisan vendor:publish\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Config file will be placed at ",(0,l.jsx)(n.code,{children:"app/Ship/Configs/vendor-localization.php"})]}),"\n",(0,l.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Languages\n                \u251c\u2500\u2500 en\n                \u2502   \u251c\u2500\u2500 messages.php\n                \u2502   \u251c\u2500\u2500 users.php\n                \u2502   \u2514\u2500\u2500 ...\n                \u251c\u2500\u2500 ar\n                \u2502   \u251c\u2500\u2500 messages.php\n                \u2502   \u251c\u2500\u2500 users.php\n                \u2502   \u2514\u2500\u2500 ...\n                \u2514\u2500\u2500 ...\n"})}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n.p,{children:"All Translations are namespaced with the following pattern:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"camelCase of its Section name + `@` + camelCase of its Container name\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Let's say we have a ",(0,l.jsx)(n.code,{children:"welcome"})," translation key in the ",(0,l.jsx)(n.code,{children:"app/Containers/MySection/MyContainer/en/messages.php"})," file."]}),"\n",(0,l.jsx)(n.p,{children:"You can retrieve this translation like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"__('mySection@myContainer::messages.welcome');\n"})}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Translation files in ",(0,l.jsx)(n.strong,{children:"Ship"}),' folder are exception to this and will be namespaced with the word "',(0,l.jsx)(n.strong,{children:"ship"}),'"\ninstead of section name, e.g. ',(0,l.jsx)(n.code,{children:"__('ship::messages.welcome')"})]})}),"\n",(0,l.jsx)(n.h2,{id:"adding-new-languages",children:"Adding New Languages"}),"\n",(0,l.jsxs)(n.p,{children:["Language files can be placed in any container's ",(0,l.jsx)(n.code,{children:"Languages"})," folder.\nYou can also place general language files in ",(0,l.jsx)(n.code,{children:"app/Ship/Languages"}),".\nThe language files placed in the default Laravel ",(0,l.jsx)(n.code,{children:"lang"})," folder are still loaded and can be used as well."]}),"\n",(0,l.jsxs)(n.p,{children:["These language folders work exactly the same way as the default Laravel ",(0,l.jsx)(n.code,{children:"lang"})," folder."]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Just create the ",(0,l.jsx)(n.code,{children:"Languages"})," folder if it does not exist in your container or the ",(0,l.jsx)(n.code,{children:"app/Ship"})," directory."]})}),"\n",(0,l.jsx)(n.h2,{id:"supporting-new-languages",children:"Supporting New Languages"}),"\n",(0,l.jsxs)(n.p,{children:["All supported languages must be added to the ",(0,l.jsx)(n.code,{children:"supported_languages"})," array in the ",(0,l.jsx)(n.code,{children:"vendor-localization.php"})," config file\nto prevent users from requesting unsupported languages."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"'supported_languages' => [\n    'ar',\n    'en' => [\n        'en-GB',\n        'en-US',\n    ],\n    'es',\n    'fr',\n    'fa',\n],\n"})}),"\n",(0,l.jsx)(n.h2,{id:"requesting-a-specific-language",children:"Requesting a Specific Language"}),"\n",(0,l.jsxs)(n.p,{children:["You can select the language of the response by adding the header ",(0,l.jsx)(n.code,{children:"Accept-Language"})," to the request. By default, the\n",(0,l.jsx)(n.code,{children:"Accept-Language"})," is set to the language defined in ",(0,l.jsx)(n.code,{children:"config/app.php"})," ",(0,l.jsx)(n.code,{children:"locale"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Please note\nthat the ",(0,l.jsx)(n.code,{children:"Accept-Language"})," only declares that the client ",(0,l.jsx)(n.em,{children:"would like"})," to get the information in this specific language.\nIt is not a given that the API responds in that language!"]}),"\n",(0,l.jsx)(n.admonition,{type:"note",children:(0,l.jsxs)(n.p,{children:["Please be sure that your client does not send an ",(0,l.jsx)(n.code,{children:"Accept-Language"})," header automatically. Some REST clients\n(e.g., ",(0,l.jsx)(n.code,{children:"POSTMAN"}),") automatically add header-fields based on the operating-systems settings. So your ",(0,l.jsx)(n.code,{children:"Accept-Language"})," header\nmay be set automatically without you knowing!"]})}),"\n",(0,l.jsxs)(n.p,{children:["Now that we have a ",(0,l.jsx)(n.code,{children:"Accept-Language"})," set,\nthe API will answer with the applied language in the ",(0,l.jsx)(n.code,{children:"Content-Language"})," header of the response.\nAnd if the requested language cannot be resolved (e.g., it is not defined),\nan ",(0,l.jsx)(n.code,{children:"UnsupportedLanguageException"})," will be thrown."]}),"\n",(0,l.jsx)(n.p,{children:"The overall workflow of the Middleware is as follows:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Extract the ",(0,l.jsx)(n.code,{children:"Accept-Language"})," field from the request header. If none is set, use the default locale from the config file"]}),"\n",(0,l.jsxs)(n.li,{children:["Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",(0,l.jsx)(n.code,{children:"['en-GB', 'en-US', 'en']"})," (the regions before languages,\nas regions are more specific)"]}),"\n",(0,l.jsxs)(n.li,{children:["Check if the requested language is supported.\nIf the language is supported, set it as application language, if not throw an ",(0,l.jsx)(n.code,{children:"Exception"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"enabledisable-localization",children:"Enable/Disable Localization"}),"\n",(0,l.jsxs)(n.p,{children:["To enable or disable the localization,\nyou can set the ",(0,l.jsx)(n.code,{children:"LOCALIZATION_ENABLED"})," environment variable in the ",(0,l.jsx)(n.code,{children:".env"})," file\nto ",(0,l.jsx)(n.code,{children:"true"})," or ",(0,l.jsx)(n.code,{children:"false"})," respectively.\nThis can also be done in the ",(0,l.jsx)(n.code,{children:"vendor-localization.php"})," config file."]}),"\n",(0,l.jsx)(n.h2,{id:"retrieve-available-localizations",children:"Retrieve Available Localizations"}),"\n",(0,l.jsxs)(n.p,{children:["Available localizations can be retrieved via ",(0,l.jsx)(n.code,{children:"GET /localizations"})," endpoint."]}),"\n",(0,l.jsx)(n.p,{children:"You will get a response like this:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "data": [\n    {\n      "object": "Localization",\n      "id": "de", // The language code (same as \'language.code\')\n      "language": {\n        "code": "de", // The language code\n        "default_name": "German", // The language name in the application\'s default language\n        "locale_name": "Deutsch" // The language name in its native form\n        "regions": [\n          {\n            "code": "de-DE", // The region code\n            "default_name": "Germany", // The region name in the application\'s default language\n            "locale_name": "Deutschland" // The region name in its native form\n          },\n          {\n            "code": "de-AT", // The region code\n            "default_name": "Austria", // The region name in the application\'s default language\n            "locale_name": "\xd6sterreich" // The region name in its native form\n          }\n        ]\n      }\n    }\n  ]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}}}]);