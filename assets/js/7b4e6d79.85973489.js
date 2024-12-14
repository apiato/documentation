"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4135],{40471:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});const a=JSON.parse('{"id":"pacakges/localization","title":"Localization","description":"Languages are not real Components, they are just files that holds translations.","source":"@site/versioned_docs/version-12.x/pacakges/localization.md","sourceDirName":"pacakges","slug":"/pacakges/localization","permalink":"/docs/pacakges/localization","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/pacakges/localization.md","tags":[],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1707153375000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Localization"},"sidebar":"tutorialSidebar","previous":{"title":"Documentation","permalink":"/docs/pacakges/documentation"},"next":{"title":"Social Authentication","permalink":"/docs/pacakges/social-authentication"}}');var s=i(74848),t=i(28453);const l={sidebar_position:2,title:"Localization"},o=void 0,c={},r=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Usage",id:"usage",level:2},{value:"Installation",id:"installation",level:2},{value:"Creating new languages files",id:"create-new-languages-files",level:2},{value:"Support new languages",id:"support-new-languages",level:2},{value:"Publishing configs",id:"publishing-configs",level:3},{value:"Modifying the source code",id:"modify-code",level:3},{value:"Select Request Language",id:"select-request-language",level:2},{value:"Translating Strings",id:"translating-strings",level:2},{value:"Example",id:"example",level:2},{value:"Enable/Disable Localization",id:"enable-disable-localization",level:2},{value:"Get Available Localizations",id:"get-available-localizations",level:2},{value:"Tests",id:"tests",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Languages are not real Components, they are just files that holds translations."}),"\n",(0,s.jsx)(n.p,{children:"Laravel localization features provide a convenient way to retrieve strings in various languages, allowing you to easily support multiple languages within your application."}),"\n",(0,s.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Languages CAN be placed inside the Containers. However, the default laravel ",(0,s.jsx)(n.code,{children:"resources/lang"})," languages files are still loaded and can be used as well."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["All Translations are namespaced as the camelCase of its Section name + ",(0,s.jsx)(n.code,{children:"@"})," + camelCase of its Container name.",(0,s.jsx)(n.br,{}),"\n","For example, translation key inside a translation file named ",(0,s.jsx)(n.code,{children:"messages"})," inside ",(0,s.jsx)(n.code,{children:"MySection"})," > ",(0,s.jsx)(n.code,{children:"MyContainer"})," can be accessed like this: ",(0,s.jsx)(n.code,{children:"__(mySection@myContainer::messages.welcome)"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"- app\n  - Containers\n    - {Section}\n      - {Container}\n        - Resources\n          - Languages\n            - en\n              - messages.php\n              - users.php\n            - ar\n              - messages.php\n              - users.php\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"__('myS\nection@myContainer::messages.welcome');\n"})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Intl PHP Extension is required to use this feature."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"composer require apiato/localization-container\n"})}),"\n",(0,s.jsx)(n.h2,{id:"create-new-languages-files",children:"Creating new languages files"}),"\n",(0,s.jsxs)(n.p,{children:["Languages file can be placed in any container, not only the Localization Container.",(0,s.jsx)(n.br,{}),"\n","Place language files inside the ",(0,s.jsx)(n.code,{children:"/Languages"})," folder of your container. For example\n",(0,s.jsx)(n.code,{children:"app/Containers/Section/Container/Languages"}),".\nYou can also place general language files in ",(0,s.jsx)(n.code,{children:"app/Ship/Languages"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.mdxAdmonitionTitle,{}),(0,s.jsxs)(n.p,{children:["Just create the ",(0,s.jsx)(n.code,{children:"Languages"})," folder if it does not exist in your container or ",(0,s.jsx)(n.code,{children:"app/Ship"})," folder."]})]}),"\n",(0,s.jsxs)(n.p,{children:["You can still use the default Laravel translations by placing language files in ",(0,s.jsx)(n.code,{children:"/lang"})," folder."]}),"\n",(0,s.jsx)(n.h2,{id:"support-new-languages",children:"Support new languages"}),"\n",(0,s.jsxs)(n.p,{children:["All supported languages must be added to the ",(0,s.jsx)(n.code,{children:"supported_languages"})," array in the ",(0,s.jsx)(n.code,{children:"vendor-localization.php"})," config file\nto prevent users from requesting unsupported languages. There are 2 ways to do this: Using the configs or by modifying the source code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"    'supported_languages' => [\n        'ar',\n        'en' => [\n            'en-GB',\n            'en-US',\n        ],\n        'es',\n        'fr',\n        'fa',\n    ],\n"})}),"\n",(0,s.jsx)(n.h3,{id:"publishing-configs",children:"Publishing configs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan vendor:publish\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Config file will be copied to ",(0,s.jsx)(n.code,{children:"app/Ship/Configs/vendor-localization.php"})]}),"\n",(0,s.jsx)(n.h3,{id:"modify-code",children:"Modifying the source code"}),"\n",(0,s.jsxs)(n.p,{children:["1- Copy the container from ",(0,s.jsx)(n.code,{children:"Vendor"})," to ",(0,s.jsx)(n.code,{children:"AppSection"})," (or any of your custom sections) of your project",(0,s.jsx)(n.br,{}),"\n","2- Fix the namespaces",(0,s.jsx)(n.br,{}),"\n","3- Remove ",(0,s.jsx)(n.code,{children:"apiato/localization-container"})," dependency from project root composer.json"]}),"\n",(0,s.jsx)(n.h2,{id:"select-request-language",children:"Select Request Language"}),"\n",(0,s.jsxs)(n.p,{children:["You can select the language of the response by adding the header ",(0,s.jsx)(n.code,{children:"Accept-Language"})," to the request. By default, the\n",(0,s.jsx)(n.code,{children:"Accept-Language"})," is set to the language defined in ",(0,s.jsx)(n.code,{children:"config/app.php"})," ",(0,s.jsx)(n.code,{children:"locale"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Please note that ",(0,s.jsx)(n.code,{children:"Accept-Language"})," only determines, that the client ",(0,s.jsx)(n.em,{children:"would like"})," to get the information in this specific\nlanguage. It is not given, that the API responds in this language!"]}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"Accept-Language"})," header is missing, the default locale will be applied."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Please be sure that your client does not send an ",(0,s.jsx)(n.code,{children:"Accept-Language"})," header automatically. Some REST clients\n(e.g., ",(0,s.jsx)(n.code,{children:"POSTMAN"}),") automatically add header-fields based on the operating-systems settings. So your ",(0,s.jsx)(n.code,{children:"Accept-Language"})," header\nmay be set automatically without you knowing!"]})}),"\n",(0,s.jsxs)(n.p,{children:["The API will answer with the applied language in the ",(0,s.jsx)(n.code,{children:"Content-Language"})," header of the response."]}),"\n",(0,s.jsxs)(n.p,{children:["If the requested language cannot be resolved (e.g. it is not defined) the API throws an ",(0,s.jsx)(n.code,{children:"UnsupportedLanguageException"})," to tell\nthe client about this."]}),"\n",(0,s.jsx)(n.p,{children:"The overall workflow of the Middleware is as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Extract the ",(0,s.jsx)(n.code,{children:"Accept-Language"})," field from the request header. If none is set, use the default locale from the config file"]}),"\n",(0,s.jsxs)(n.li,{children:["Build a list of all supported localizations based on the configuration of the respective container. If a language\n(top level) contains regions (sub-level), order them like this: ",(0,s.jsx)(n.code,{children:"['en-GB', 'en-US', 'en']"})," (the regions before languages,\nas regions are more specific)"]}),"\n",(0,s.jsxs)(n.li,{children:["Check, if the value from 1) is within the list from 2). If the value is within this list, set it as application language,\nif not throw an ",(0,s.jsx)(n.code,{children:"Exception"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"translating-strings",children:"Translating Strings"}),"\n",(0,s.jsxs)(n.p,{children:["By default, all the Container translation files are namespaced as the camelCase of its Section name + ",(0,s.jsx)(n.code,{children:"@"})," + camelCase of its Container name."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Translation files in ",(0,s.jsx)(n.strong,{children:"Ship"}),' folder are exception to this and will be namespaced with the word "',(0,s.jsx)(n.strong,{children:"ship"}),'" instead of section name, e.g. ',(0,s.jsx)(n.code,{children:"__('ship::notifications.welcome')"})]})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["If a translation file called ",(0,s.jsx)(n.code,{children:"notifications"})," is inside ",(0,s.jsx)(n.code,{children:"MySection"})," > ",(0,s.jsx)(n.code,{children:"MyContainer"})," that contains translation for ",(0,s.jsx)(n.code,{children:"welcome"}),'\nlike "Welcome to our store :)". You can access this translation as follows ',(0,s.jsx)(n.code,{children:"__('mySection@myContainer::notifications.welcome')"}),". If\nyou remove the namespace (part before ",(0,s.jsx)(n.code,{children:"::"}),") and try to access it like this\n",(0,s.jsx)(n.code,{children:"__('notifications.welcome')"})," it will not find your translation and will print ",(0,s.jsx)(n.code,{children:"notifications.welcome"})," only."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you try to load a string for a language that is ",(0,s.jsx)(n.strong,{children:"not available"})," (e.g., there is no folder for this language), Apiato\nwill stick to the default one that is defined in ",(0,s.jsx)(n.code,{children:"app.locale"})," config file. This is also true, if the requested locale\nis present in the ",(0,s.jsx)(n.code,{children:"supported_languages"})," array from the configuration file."]})}),"\n",(0,s.jsx)(n.h2,{id:"enable-disable-localization",children:"Enable/Disable Localization"}),"\n",(0,s.jsxs)(n.p,{children:["When using this container, Localization is ",(0,s.jsx)(n.strong,{children:"enabled"})," by default.\nTo disable it set ",(0,s.jsx)(n.code,{children:"LOCALIZATION_ENABLED"})," to ",(0,s.jsx)(n.code,{children:"false"})," in the ",(0,s.jsx)(n.code,{children:".env"})," file.\nYou can also change this behaviour in the ",(0,s.jsx)(n.a,{href:"#publishing-configs",children:"configs"}),".\nThis will disable the localization middleware."]}),"\n",(0,s.jsx)(n.h2,{id:"get-available-localizations",children:"Get Available Localizations"}),"\n",(0,s.jsxs)(n.p,{children:["This container provides a convenient way to get all defined localizations. These localizations can be retrieved via ",(0,s.jsx)(n.code,{children:"GET /localizations"}),'\nby default. Note that this route only outputs the "top level" locales, like ',(0,s.jsx)(n.code,{children:"en"})," from the example above. However, if\nspecific regions (e.g., ",(0,s.jsx)(n.code,{children:"en-US"}),") are defined, these will show up in the result as well."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Transformer"})," for the localizations not only provide the ",(0,s.jsx)(n.code,{children:"language"})," (e.g., ",(0,s.jsx)(n.code,{children:"de"}),"), but also outputs the name of the\nlanguage in this specific language (e.g., ",(0,s.jsx)(n.code,{children:"locale_name => Deutsch"}),"). Furthermore, the language name is outputted in the\napplications default name (e.g., configured in ",(0,s.jsx)(n.code,{children:"app.locale"}),"). This would result in ",(0,s.jsx)(n.code,{children:"default_name => German"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The same applies to the regions that are defined (e.g., ",(0,s.jsx)(n.code,{children:"de-DE"}),"). Consequently, this results in ",(0,s.jsx)(n.code,{children:"locale_name => Deutschland"}),"\nand ",(0,s.jsx)(n.code,{children:"default_name = Germany"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"tests",children:"Tests"}),"\n",(0,s.jsxs)(n.p,{children:["To change the default language in your tests requests. You can set the ",(0,s.jsx)(n.code,{children:"env"})," language in the ",(0,s.jsx)(n.code,{children:"phpunit.xml"})," file."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var a=i(96540);const s={},t=a.createContext(s);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);