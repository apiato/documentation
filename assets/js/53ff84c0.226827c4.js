"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9970],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=o,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16478:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={title:"Seeders",tags:["component","optional-component","seeder","migration"]},i=void 0,s={unversionedId:"components/optional-components/seeders",id:"version-12.x/components/optional-components/seeders",title:"Seeders",description:"Apiato seeders are just Laravel Seeders,",source:"@site/versioned_docs/version-12.x/components/optional-components/seeders.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/seeders",permalink:"/docs/components/optional-components/seeders",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/seeders.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"seeder",permalink:"/docs/tags/seeder"},{label:"migration",permalink:"/docs/tags/migration"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Seeders",tags:["component","optional-component","seeder","migration"]},sidebar:"tutorialSidebar",previous:{title:"Criterias",permalink:"/docs/components/optional-components/repository/criterias"},next:{title:"Service Providers",permalink:"/docs/components/optional-components/service-providers"}},l={},d=[{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Prepend Container Name",id:"prepend-container-name",level:4},{value:"Prepend Section Name",id:"prepend-section-name",level:4},{value:"Loading Order",id:"loading-order",level:2},{value:"Special Seeders",id:"special-seeders",level:2},{value:"Testing",id:"testing",level:3},{value:"Deployment",id:"deployment",level:3}],p={toc:d},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apiato seeders are just ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/seeding"},"Laravel Seeders"),",\nand they function in the exact same way as Laravel seeders.\nHowever, they come with additional rules and conventions specific to Apiato."),(0,o.kt)("p",null,"To generate new seeders you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"apiato:generate:seeder")," interactive command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan apiato:generate:seeder\n")),(0,o.kt)("h2",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All container-specific and third-party package Seeders MUST be placed in the ",(0,o.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Data/Seeders")," directory."),(0,o.kt)("li",{parentName:"ul"},"All non-Laravel or third-party package Seeders MUST extend the ",(0,o.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Seeders\\Seeder")," class.")),(0,o.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 Data\n                \u2514\u2500\u2500 Seeders\n                    \u251c\u2500\u2500 DemoSeeder_1.php\n                    \u251c\u2500\u2500 AnotherDemoSeeder_2.php\n                    \u2514\u2500\u2500 ...\n")),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"Seeders are defined exactly as you would define them in Laravel."),(0,o.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,o.kt)("p",null,"To avoid conflicts between containers' seeder classes, it is crucial to follow specific naming conventions.\nIf two seeder classes have the same name but exist in different containers, Apiato will not be able to load one of them,\nleading to unintended consequences and potential data inconsistencies."),(0,o.kt)("p",null,"To ensure smooth and error-free seeding, adhere to the following naming conventions:"),(0,o.kt)("h4",{id:"prepend-container-name"},"Prepend Container Name"),(0,o.kt)("p",null,"Always prepend the seeders of each container with the container name.\nFor example, if you have containers named ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Item"),",\nthe seeder classes should be named ",(0,o.kt)("inlineCode",{parentName:"p"},"UserPermissionsSeeder")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ItemPermissionsSeeder"),", respectively."),(0,o.kt)("h4",{id:"prepend-section-name"},"Prepend Section Name"),(0,o.kt)("p",null,"In situations where two seeder classes have the same name but exist in different containers,\nmanually prepend the seeder name with the section name to distinguish them."),(0,o.kt)("h2",{id:"loading-order"},"Loading Order"),(0,o.kt)("p",null,"Apiato enables the loading of seeders in a specific order.\nTo organize the seeding of classes, simply add ",(0,o.kt)("inlineCode",{parentName:"p"},"_1"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"_2"),", and so on, to your class names.\nFor instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"UserPermissionsSeeder_1")," will be loaded before ",(0,o.kt)("inlineCode",{parentName:"p"},"UserPermissionsSeeder_2"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By default, Laravel invokes the ",(0,o.kt)("inlineCode",{parentName:"li"},"run")," method of the ",(0,o.kt)("inlineCode",{parentName:"li"},"database/seeders/DatabaseSeeder.php")," class."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"run")," method within ",(0,o.kt)("inlineCode",{parentName:"li"},"DatabaseSeeder")," calls the ",(0,o.kt)("inlineCode",{parentName:"li"},"runLoadingSeeders")," method of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Apiato\\Core\\Loaders\\SeederLoaderTrait.php")," trait."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"runLoadingSeeders")," method, in turn, loads all the seeders within each container following this sequence:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"It first loads all the seeders whose names contain ",(0,o.kt)("inlineCode",{parentName:"li"},"_1"),"."),(0,o.kt)("li",{parentName:"ol"},"Subsequently, it proceeds to load seeders with names containing ",(0,o.kt)("inlineCode",{parentName:"li"},"_2"),"."),(0,o.kt)("li",{parentName:"ol"},"This pattern continues until it loads all seeders with names containing ",(0,o.kt)("inlineCode",{parentName:"li"},"_n"),"."),(0,o.kt)("li",{parentName:"ol"},"Lastly, any remaining seeders without the ",(0,o.kt)("inlineCode",{parentName:"li"},"_n")," suffix are loaded.")))),(0,o.kt)("h2",{id:"special-seeders"},"Special Seeders"),(0,o.kt)("h3",{id:"testing"},"Testing"),(0,o.kt)("p",null,"For testing purposes, Apiato offers a special seeder class to seed testing data.\nYou can find this seeder class at ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Seeders/SeedTestingData.php"),".\nIt's important to note that this seeder is not loaded automatically by Apiato.\nInstead, you can manually trigger the seeding process by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan apiato:seed-test\n")),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"In addition to the testing seeder, Apiato also provides a special seeder class for production data seeding.\nYou can locate this seeder class at ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Seeders/SeedDeploymentData.php"),".\nSimilar to the testing seeder, the deployment seeder is not automatically loaded by Apiato.\nYou can call this seeder and populate your database with production data by executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan apiato:seed-deployment\n")))}m.isMDXComponent=!0}}]);