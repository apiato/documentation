"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Seeders"},s=void 0,o={unversionedId:"optional-components/seeders",id:"version-9.x/optional-components/seeders",title:"Seeders",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/seeders.md",sourceDirName:"optional-components",slug:"/optional-components/seeders",permalink:"/docs/9.x/optional-components/seeders",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/seeders.md",tags:[],version:"9.x",lastUpdatedBy:"hossein-moghadam",lastUpdatedAt:1684419989,formattedLastUpdatedAt:"May 18, 2023",frontMatter:{title:"Seeders"},sidebar:"version-9.x/docs",previous:{title:"Migrations",permalink:"/docs/9.x/optional-components/migrations"},next:{title:"Factories",permalink:"/docs/9.x/optional-components/factories"}},l={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Run the Seeders",id:"run-the-seeders",level:3},{value:"Apiato testing seeder command",id:"apiato-testing-seeder-command",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-seeders"},"Run the Seeders")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#apiato-testing-seeder-command"},"Testing seeder command"))),(0,r.kt)("h3",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Seeders (are a short name for Database Seeders)."),(0,r.kt)("p",null,"Seeders are classes made to seed the database with real data, this data usually should exist in the Application after the installation (Example: the default Users Roles and Permissions or the list of Countries)."),(0,r.kt)("h3",{id:"principles"},"Principles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Seeders SHOULD be created in the Containers. (If the container is using a package that publishes a Seeder class, this class should be manually placed in the Container that make use of it. Do not reply on the package to place it on its right location).")),(0,r.kt)("h3",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Seeders should be in the right directory inside the container to be loaded.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To avoid any conflict between containers seeders classes, you SHOULD always prepend the Seeders of each container with the container name. (Example: ",(0,r.kt)("inlineCode",{parentName:"p"},"UserPermissionsSeeder"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ItemPermissionsSeeder"),"). ",(0,r.kt)("em",{parentName:"p"},"If 2 seeders classes have the same name but live in different containers, one of them will not be loaded."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you wish to order the seeding of the classes, you can just append ",(0,r.kt)("inlineCode",{parentName:"p"},"_1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"_2")," to your classes."))),(0,r.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," - App\n    - Containers\n        - {container-name}\n             - Data\n                - Seeders\n                    - ContainerNameRolesSeeder_1.php\n                    - ContainerNamePermissionsSeeder_2.php\n                    - ...\n")),(0,r.kt)("h3",{id:"code-samples"},"Code Samples"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Roles ",(0,r.kt)("inlineCode",{parentName:"strong"},"Seeder"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\Order\\Data\\Seeders;\n\nuse App\\Ship\\Parents\\Seeders\\Seeder;\nuse Apiato\\Core\\Foundation\\Facades\\Apiato;\n\nclass OrderPermissionsSeeder_1 extends Seeder\n{\n\n    public function run()\n    {\n        Apiato::call('Authorization@CreatePermissionTask', ['approve-reject-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['find-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['list-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['update-orders']);\n        Apiato::call('Authorization@CreatePermissionTask', ['delete-orders']);\n\n        // ...\n\n    }\n}\n\n")),(0,r.kt)("p",null,"Note: Same ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeder")," class is allowed to contain seeding for multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Models"),"."),(0,r.kt)("h3",{id:"run-the-seeders"},"Run the Seeders"),(0,r.kt)("p",null,"After registering the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeders")," you can run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan db:seed\n")),(0,r.kt)("p",null,"To run specific Seeder class you can specify its class in the parameter as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan db:seed --class="your\\single\\seeder\\goes-here"\n')),(0,r.kt)("p",null,"Migrate & seed at the same time"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan migrate --seed\n")),(0,r.kt)("p",null,"For more information about the Database Seeders read ",(0,r.kt)("a",{parentName:"p",href:"https://laravel.com/docs/master/seeding"},"this"),"."),(0,r.kt)("h2",{id:"apiato-testing-seeder-command"},"Apiato testing seeder command"),(0,r.kt)("p",null,"It's useful sometimes to create a big set of testing data. apiato facilitates this task:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Ship/Seeders/SeedTestingData.php")," and write your testing data here."),(0,r.kt)("li",{parentName:"ol"},"Run this command any time you want this data available (example at staging servers):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan apiato:seed-test\n")))}u.isMDXComponent=!0}}]);