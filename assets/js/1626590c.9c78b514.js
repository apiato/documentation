"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},s),{},{components:a})):n.createElement(h,i({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Upgrade Guide"},i=void 0,p={unversionedId:"upgrade-guide",id:"version-9.x/upgrade-guide",title:"Upgrade Guide",description:"- Upgrade from 8.0 to 9.0",source:"@site/versioned_docs/version-9.x/upgrade-guide.md",sourceDirName:".",slug:"/upgrade-guide",permalink:"/docs/9.x/upgrade-guide",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/upgrade-guide.md",tags:[],version:"9.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Upgrade Guide"},sidebar:"version-9.x/docs",previous:{title:"Postman Environment",permalink:"/docs/9.x/miscellaneous/postman"},next:{title:"Contribution Guide",permalink:"/docs/9.x/contribution-guide"}},l={},u=[{value:"Upgrade from 8.0 to 9.0",id:"upgrade-80To90",level:2},{value:"Upgrade from 7.4 to 8.0",id:"upgrade-74To80",level:2},{value:"Upgrade from 7.3 to 7.4",id:"upgrade-73To74",level:2},{value:"Upgrade from 7.2 to 7.3",id:"upgrade-72To73",level:2},{value:"Upgrade from 7.1 to 7.2",id:"upgrade-71To72",level:2},{value:"Upgrade from 7.0 to 7.1",id:"upgrade-70To71",level:2},{value:"Upgrade from 5.0 to 7.0",id:"upgrade-50To70",level:2},{value:"Upgrade from 4.1 to 5.0",id:"upgrade-41To50",level:2},{value:"How to manually upgrade older versions to 4.1?",id:"how-to-manually-upgrade-older-versions-to-41",level:2},{value:"Manual Upgrading Guide",id:"Manual-Upgrading-Guide",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-80To90"},"Upgrade from 8.0 to 9.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-74To80"},"Upgrade from 7.4 to 8.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-73To74"},"Upgrade from 7.3 to 7.4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-72To73"},"Upgrade from 7.2 to 7.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-71To72"},"Upgrade from 7.1 to 7.2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-70To71"},"Upgrade from 7.0 to 7.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-50To70"},"Upgrade from 5.0 to 7.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#upgrade-41To50"},"Upgrade from 4.1 to 5.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#how-to-manually-upgrade-older-versions-to-41"},"How to manually upgrade older versions to 4.1?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide"))),(0,r.kt)("h2",{id:"upgrade-80To90"},"Upgrade from 8.0 to 9.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),(0,r.kt)("p",null,"1) Follow the steps in the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below. "),(0,r.kt)("p",null,"You can view ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/compare/8.0...9.0"},"all changes here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"php artisan apiato")," should return ",(0,r.kt)("inlineCode",{parentName:"li"},"9.0.0")),(0,r.kt)("li",{parentName:"ul"},"Running ",(0,r.kt)("inlineCode",{parentName:"li"},"php artisan -V")," should return ",(0,r.kt)("inlineCode",{parentName:"li"},"7.*.*"),"  ")),(0,r.kt)("h2",{id:"upgrade-74To80"},"Upgrade from 7.4 to 8.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),(0,r.kt)("p",null,"1) Move the ",(0,r.kt)("inlineCode",{parentName:"p"},"WePay")," Container away until the upgrade is done, or delete it if you're not using it. This container was removed in Apiato 8.0."),(0,r.kt)("p",null,"2) Follow the steps in the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),(0,r.kt)("p",null,"3) Use ",(0,r.kt)("inlineCode",{parentName:"p"},".test")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},".develop")," for the URL's."),(0,r.kt)("h2",{id:"upgrade-73To74"},"Upgrade from 7.3 to 7.4"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE 1")," : Before upgrading, please review ",(0,r.kt)("strong",{parentName:"p"},"all"),' of your own dependencies, if respective "Laravel 5.6\ncompatible versions" are already published!'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT NOTE 2")," : Before upgrading, please ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit")," all of your changes in order to rollback if something breaks!"),(0,r.kt)("p",null,"Key Changes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apiato now requires PHP 7.1.3 to run - this is because of Laravel's dependency!"),(0,r.kt)("li",{parentName:"ul"},"Added Laravel 5.6. See the ",(0,r.kt)("a",{parentName:"li",href:"https://laravel.com/docs/master/upgrade"},"Laravel Upgrade Guide")," for more details.")),(0,r.kt)("p",null,"Most of the changes introduced by Laravel 5.6 are easy to integrate. However, the following might be a ",(0,r.kt)("strong",{parentName:"p"},"BREAKING CHANGE"),"\nto your application. Please review the following changes with caution:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Database: Index Order Of Morph Columns"),(0,r.kt)("p",{parentName:"blockquote"},"The indexing of the columns built by the morphs migration method has been reversed for better performance. If you are\nusing the morphs method in one of your migrations, you may receive an error when attempting to run the migration's\ndown method. If the application is still in development, you may use the migrate:fresh command to rebuild the database\nfrom scratch. If the application is in production, you should pass an explicit index name to the morphs method.")),(0,r.kt)("p",null,"Manual Tasks to do:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update your own dependencies to new L5.6 compatible versions!"),(0,r.kt)("li",{parentName:"ul"},"Add the new ",(0,r.kt)("inlineCode",{parentName:"li"},"LOG_CHANNEL=stack")," to your environment file."),(0,r.kt)("li",{parentName:"ul"},"Copy the 2 new Laravel config files (",(0,r.kt)("inlineCode",{parentName:"li"},"hashing.php")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"logging.php"),") to ",(0,r.kt)("inlineCode",{parentName:"li"},"/config/")," folder in your main project tree."),(0,r.kt)("li",{parentName:"ul"},"Adjust the ",(0,r.kt)("inlineCode",{parentName:"li"},"TrustProxies")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"App/Ship/Middlewares")," accordingly."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'Check, if the described "breaking change" may affect your application!')),(0,r.kt)("li",{parentName:"ul"},"Check (and eventually manually set) the dependency to ",(0,r.kt)("inlineCode",{parentName:"li"},"apiato/core : 2.4.*")," in your ",(0,r.kt)("inlineCode",{parentName:"li"},"App/Ship/composer.json")," file")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),(0,r.kt)("h2",{id:"upgrade-72To73"},"Upgrade from 7.2 to 7.3"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 20 minutes.")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),(0,r.kt)("h2",{id:"upgrade-71To72"},"Upgrade from 7.1 to 7.2"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 10 minutes.")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),(0,r.kt)("h2",{id:"upgrade-70To71"},"Upgrade from 7.0 to 7.1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 45 minutes.")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),(0,r.kt)("h2",{id:"upgrade-50To70"},"Upgrade from 5.0 to 7.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 30 minutes.")),(0,r.kt)("p",null,"By upgrading to ",(0,r.kt)("inlineCode",{parentName:"p"},"Apiato 7.0")," you can benefit from all the features provided by ",(0,r.kt)("inlineCode",{parentName:"p"},"Laravel 5.5"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This upgrade is simple.")),(0,r.kt)("p",null,"You just have to do the following changes found at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/compare/5.0...7.0"},"GitHub Comparison Tool"),"."),(0,r.kt)("p",null,"Note: Some of the files are not required to be upgraded. And some of them, can be simply replaced by the new files\n(copy a file content from the Apiato repository and replace it with your older version)."),(0,r.kt)("p",null,"Hint: You can do a git merge and solve the conflicts, if you don't want to manually do the changes commit by commit."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Important Information"),": Laravel 5.5 introduces an ",(0,r.kt)("inlineCode",{parentName:"p"},"auto-discovery")," feature that lets you automatically register ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceProviders"),".\nDue to the nature and structure of Apiato applications, this features ",(0,r.kt)("strong",{parentName:"p"},"is turned off"),", because it messes up how ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," files are loaded\nin apiato. This means, that you still need to ",(0,r.kt)("strong",{parentName:"p"},"manually")," register 3rd-party ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceProviders")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceProvider")," of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Container"),". (This should be a temporary situation)")),(0,r.kt)("h2",{id:"upgrade-41To50"},"Upgrade from 4.1 to 5.0"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated upgrading time: 15 minutes.")),(0,r.kt)("p",null,"This guide will show you how to freshly install the new Apiato 5.0, then migrate your old project (built with Apiato 4.1)\nto the freshly installed one (Apiato 5.0)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"In the guide we'll be using the term ",(0,r.kt)("strong",{parentName:"em"},"Old Project")," (referring to your old project that was built with Apiato 4.1),\nand the term New ",(0,r.kt)("strong",{parentName:"em"},"Project")," (referring to the new freshly installed Apiato 5.0).")),(0,r.kt)("p",null,"1) Download and install Apiato 5.0. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/9.x/getting-started/installation"},"Application Setup"),"."),(0,r.kt)("p",null,"2) Delete the Containers directory ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Containers")," from the new project."),(0,r.kt)("p",null,"3) Move the Containers directory ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Containers")," from the old project to the new project."),(0,r.kt)("p",null,"4) Open this file ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/composer.json")," in your old project and only copy the required dependencies, from the old project to the same file in the new project."),(0,r.kt)("p",null,"5) Again, open the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/composer.json")," file in the new project, and remove the following dependencies:\n",(0,r.kt)("inlineCode",{parentName:"p"},"guzzlehttp/guzzle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"prettus/l5-repository"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"barryvdh/laravel-cors"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spatie/laravel-fractal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"vinkla/hashids")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"johannesschobel/apiato-container-installer"),"."),(0,r.kt)("p",null,"6) Move and replace the following directories from the old project to the new project: ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),"."),(0,r.kt)("p",null,"7) Open ",(0,r.kt)("inlineCode",{parentName:"p"},"config/app.php")," and replace ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Engine\\Providers\\PortoServiceProvider::class")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Providers\\ApiatoProvider::class"),"."),(0,r.kt)("p",null,"8) Move ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files, from the old project to the new project."),(0,r.kt)("p",null,"9) Open the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file on the new project and append this to it ",(0,r.kt)("inlineCode",{parentName:"p"},"API_RATE_LIMIT_ENABLED=true"),"."),(0,r.kt)("p",null,"10) Open ",(0,r.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," file of the new project and delete this line from the file ",(0,r.kt)("inlineCode",{parentName:"p"},"<file>./app/Ship/Engine/Loaders/FactoryMixer/FactoriesLoader.php</file>"),"."),(0,r.kt)("p",null,"11) If you had live testing data in your old project inside ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Seeders/Data/Testing/Seeders/TestingDataSeeder.php")," file, then copy that file content and past it in the new project inside ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Seeders/SeedTestingData.php"),". You will need to rename the class (not the file) from ",(0,r.kt)("inlineCode",{parentName:"p"},"TestingDataSeeder")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"SeedTestingData"),",\nand you will need to update the namespace from ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace App\\Ship\\Seeders\\Data\\Testing\\Seeders;")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"namespace App\\Ship\\Seeders;"),"."),(0,r.kt)("p",null,"12) If you ever used the ",(0,r.kt)("inlineCode",{parentName:"p"},"HashIdTrait"),", you need to search and replace this namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Ship\\Engine\\Traits\\HashIdTrait")," with this ",(0,r.kt)("inlineCode",{parentName:"p"},"Apiato\\Core\\Traits\\HashIdTrait"),"."),(0,r.kt)("p",null,"13) Run ",(0,r.kt)("inlineCode",{parentName:"p"},"composer update"),". If you got any error at this step, try to solve it or open an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apiato/apiato/issues"},"Issue"),"."),(0,r.kt)("p",null,"14) Move the ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," directory from the old project to the new one. Add all changes ",(0,r.kt)("inlineCode",{parentName:"p"},"git add .")," then commit ",(0,r.kt)("inlineCode",{parentName:"p"},"git commit -m 'upgrade Apiato from 4.1 to 5.0'"),"."),(0,r.kt)("p",null,"15) Run your tests ",(0,r.kt)("inlineCode",{parentName:"p"},"vendor/bin/phpunit"),"."),(0,r.kt)("p",null,"That's it :)"),(0,r.kt)("h2",{id:"how-to-manually-upgrade-older-versions-to-41"},"How to manually upgrade older versions to 4.1?"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"#Manual-Upgrading-Guide"},"Manual Upgrading Guide")," below."),(0,r.kt)("h2",{id:"Manual-Upgrading-Guide"},"Manual Upgrading Guide"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These commands and examples, are compatible with the Apiato 8.0 upgrade. You can just copy/past.")),(0,r.kt)("p",null,"1) Checkout a new branch from your stable branch, to perform the upgrade."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b upgrade-apiato\n")),(0,r.kt)("p",null,"2) Configure a new remote (upstream) that points to the official Apiato repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/apiato/apiato\n")),(0,r.kt)("p",null,"Verify the new upstream repository was added, by listing the current configured remote repositories."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git remote -vv\n\norigin      git@bitbucket.org:username/my-awesome-api.git (fetch)\norigin      git@bitbucket.org:username/my-awesome-api.git (push)\nupstream    git@github.com:apiato/apiato.git (fetch)\nupstream    git@github.com:apiato/apiato.git (push)\n")),(0,r.kt)("p",null,"3) Checkout a new branch to hold the latest Apiato changes. ",(0,r.kt)("em",{parentName:"p"},"This branch will be merged into your ",(0,r.kt)("inlineCode",{parentName:"em"},"upgrade-apiato")," branch created above.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b apiato-{version}\n// Example:   git checkout -b apiato-8.0\n")),(0,r.kt)("p",null,"4) Configure this branch to track an upstream specific branch."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Replace ",(0,r.kt)("inlineCode",{parentName:"em"},"{upstream-branch-name}")," with the ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/apiato/apiato/branches"},"branch")," name you want to upgrade to (for example ",(0,r.kt)("inlineCode",{parentName:"em"},"8.0"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch upstream {upstream-branch-name}\n// Example:   git fetch upstream 8.0\n\ngit branch --set-upstream-to upstream/{upstream-branch-name}\n// Example:   git branch --set-upstream-to upstream/8.0\n")),(0,r.kt)("p",null,"Verify your local branch is tracking the Apiato specified upstream branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -vv\n\n apiato          77b4d945 [upstream/{upstream-branch-name}] ...\n master          77d302aa [origin/master] ...\n")),(0,r.kt)("p",null,"5) Make this branch identical to the remote upstream branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git reset --hard upstream/{upstream-branch-name}\n// Example:   git reset --hard upstream/8.0\n")),(0,r.kt)("p",null,"Verify this branch now contains the latest changes from the upstream branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git log\n")),(0,r.kt)("p",null,"6) Switch back to the ",(0,r.kt)("inlineCode",{parentName:"p"},"upgrade-apiato")," branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout upgrade-apiato\n")),(0,r.kt)("p",null,"7) Now lets merge the 2 branches. This step can be done in two ways:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option A"),": Merge all the changes together and solve the conflicts if any. (Recommended)"),(0,r.kt)("p",null,"You can execute the next command with different different parameters, below are 2 options to pick whatever feels safer to you. Do not execute both of them."),(0,r.kt)("p",null,"A1: This will overwrite your changes with the upstream changes. (Try this first and if your tests failed then you can try the second one)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git merge --allow-unrelated-histories --strategy-option=theirs apiato-{version}\n// Example:   git merge --allow-unrelated-histories --strategy-option=theirs apiato-8.0\n")),(0,r.kt)("p",null,"A2: This will let you solve all the conflicts manually. (Can be the most secure choice, but it's time consuming as well.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git merge --allow-unrelated-histories apiato-{version}\n// Example:   git merge --allow-unrelated-histories apiato-8.0\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option B"),": Manually cherry pick the commits you likes to have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git log {upstream-branch-name}\n")),(0,r.kt)("p",null,"(copy each commit ID, one by one)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git cherry-pick {commit-ID}\n")),(0,r.kt)("p",null,"(if you get any conflict solve it and keep moving)"),(0,r.kt)("p",null,"8) Compare your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," with the new ",(0,r.kt)("inlineCode",{parentName:"p"},".env-example")," and update it."),(0,r.kt)("p",null,"9) Check everything is working. By running Composer install first then re-running your tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the changelog ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apiato/apiato/releases"},"releases")," page."),(0,r.kt)("li",{parentName:"ul"},"You may want to update your custom containers dependencies, simply follow the ",(0,r.kt)("inlineCode",{parentName:"li"},"composer install")," error outputs and bump each failing dependency. (Hint: visit each package ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apiato/apiato/releases"},"releases")," page, and use the version which supports the supported version of Laravel)."),(0,r.kt)("li",{parentName:"ul"},"You may need to fix the failing tests.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"composer install  &&  vendor/bin/phpunit\n")),(0,r.kt)("p",null,"10) Finally, merge the upgrade-apiato (which contains the upgraded changes) with your stable branch (could be master)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit merge upgrade-apiato\n\nphp artisan -V\n")),(0,r.kt)("p",null,"Enjoy :)"))}m.isMDXComponent=!0}}]);