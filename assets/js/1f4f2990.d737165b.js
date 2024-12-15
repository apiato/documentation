"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4660],{94359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"getting-started/installation","title":"Installation","description":"Installation Guide","source":"@site/versioned_docs/version-12.x/getting-started/installation.mdx","sourceDirName":"getting-started","slug":"/getting-started/installation","permalink":"/docs/getting-started/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/getting-started/installation.mdx","tags":[],"version":"12.x","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1734275758000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Installation"},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/getting-started/introduction"},"next":{"title":"Best Practices","permalink":"/docs/getting-started/best-practices"}}');var s=n(74848),a=n(28453),r=n(19395);const o={sidebar_position:1,title:"Installation"},l=void 0,d={},c=[{value:"Installation Guide",id:"installation-guide",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Step 1: Create an Apiato Project",id:"step-1-create-an-apiato-project",level:3},{value:"Step 2: Configure Your Environment",id:"step-2-configure-your-environment",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Step 3: Database Setup",id:"step-3-database-setup",level:3},{value:"Using MySQL (Default)",id:"using-mysql-default",level:4},{value:"Using SQLite (Alternative)",id:"using-sqlite-alternative",level:4},{value:"Step 4: Default User Setup",id:"step-4-default-user-setup",level:3},{value:"Authentication",id:"authentication",level:3},{value:"API Documentation",id:"api-documentation",level:2},{value:"Quick Start",id:"quick-start",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,s.jsx)(t.p,{children:"Get started with Apiato by following these installation and setup instructions."}),"\n",(0,s.jsx)(t.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.p,{children:["Ensure ",(0,s.jsx)(t.strong,{children:"PHP"})," and ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://getcomposer.org/",children:"Composer"})})," are installed. For macOS users, these can be easily installed with ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"})}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"step-1-create-an-apiato-project",children:"Step 1: Create an Apiato Project"}),"\n",(0,s.jsx)(t.p,{children:"Use Composer to create a new Apiato project by running the following command in your terminal:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"composer create-project apiato/apiato example-app\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-2-configure-your-environment",children:"Step 2: Configure Your Environment"}),"\n",(0,s.jsxs)(t.p,{children:["Apiato uses Laravel's configuration files, which are stored in the ",(0,s.jsx)(t.code,{children:"config"})," folder, and Apiato-specific configuration is in ",(0,s.jsx)(t.code,{children:"app/Ship/Configs"}),". Most settings work out-of-the-box, but review the ",(0,s.jsx)(t.code,{children:"apiato.php"})," file in ",(0,s.jsx)(t.code,{children:"app/Ship/Configs"})," if your application requires additional customization."]}),"\n",(0,s.jsx)(t.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(t.p,{children:["Apiato relies on environment variables for different configurations across development, staging, and production environments. These are defined in the ",(0,s.jsx)(t.code,{children:".env"})," file located in the project root."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": Never commit ",(0,s.jsx)(t.code,{children:".env"})," files to source control, as they often contain sensitive information."]}),"\n",(0,s.jsx)(t.h3,{id:"step-3-database-setup",children:"Step 3: Database Setup"}),"\n",(0,s.jsx)(t.h4,{id:"using-mysql-default",children:"Using MySQL (Default)"}),"\n",(0,s.jsxs)(t.p,{children:["By default, Apiato uses MySQL. To use it, set up your database connection in the ",(0,s.jsx)(t.code,{children:".env"})," file with your MySQL credentials:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"DB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=your_database_name\nDB_USERNAME=your_username\nDB_PASSWORD=your_password\n"})}),"\n",(0,s.jsx)(t.h4,{id:"using-sqlite-alternative",children:"Using SQLite (Alternative)"}),"\n",(0,s.jsx)(t.p,{children:"If you prefer to use SQLite instead, create a new SQLite database file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"touch database/database.sqlite\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then update your ",(0,s.jsx)(t.code,{children:".env"})," configuration to switch to SQLite:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"DB_CONNECTION=sqlite\n"})}),"\n",(0,s.jsx)(t.p,{children:"Run the following command to create your database tables:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"php artisan migrate\n"})}),"\n",(0,s.jsx)(t.h3,{id:"step-4-default-user-setup",children:"Step 4: Default User Setup"}),"\n",(0,s.jsx)(t.p,{children:"Apiato includes a default Super Admin user with predefined roles and permissions. To seed these values into the database, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"php artisan db:seed\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Default Super Admin Credentials:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Email"}),": ",r.N.w.R]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Password"}),": ",r.N.w.w]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You can also create a new admin user with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"php artisan apiato:create:admin\n"})}),"\n",(0,s.jsx)(t.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(t.p,{children:["Next, you should execute the ",(0,s.jsx)(t.code,{children:"passport:install"}),' Artisan command.\nThis command will create the encryption keys needed to generate secure access tokens.\nIn addition, the command will create "personal access"\nand "password grant" clients which will be used to generate access tokens:']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"php artisan passport:install\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Visit ",(0,s.jsx)(t.a,{href:"/docs/security/authentication",children:"Authentication"})," for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"api-documentation",children:"API Documentation"}),"\n",(0,s.jsxs)(t.p,{children:["Apiato provides a Documentation Generator based on ",(0,s.jsx)(t.a,{href:"https://apidocjs.com/",children:"ApiDocJs"}),". To set up documentation:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Install ApiDocJs:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"npm install\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Generate documentation:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"php artisan apiato:apidoc\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,s.jsx)(t.p,{children:"To test your Apiato setup, you can access these default endpoints:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Web Interface"}),": ",(0,s.jsx)(t.a,{href:"http://apiato.test",children:"http://apiato.test"})," \u2013 Apiato welcome page."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"API Endpoints"}),":","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"http://api.apiato.test",children:"http://api.apiato.test"})," \u2013 ",(0,s.jsx)(t.code,{children:'"Welcome to Apiato"'})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"http://api.apiato.test/v1",children:"http://api.apiato.test/v1"})," \u2013 ",(0,s.jsx)(t.code,{children:'"Welcome to Apiato (API V1)"'})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}},19395:e=>{e.exports=JSON.parse('{"N":{"p":{"F":"http://api.apiato.test/v1"},"w":{"R":"admin@admin.com","w":"admin"}}}')}}]);