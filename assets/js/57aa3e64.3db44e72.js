"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7755],{43007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(74848),i=t(28453),o=t(19395);const a={sidebar_position:2,title:"Authentication"},r=void 0,c={id:"security/authentication",title:"Authentication",description:"Apiato utilizes the Laravel Passport package to provide a complete OAuth2 server.",source:"@site/versioned_docs/version-12.x/security/authentication.mdx",sourceDirName:"security",slug:"/security/authentication",permalink:"/docs/security/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/security/authentication.mdx",tags:[],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1707153375e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication"},sidebar:"tutorialSidebar",previous:{title:"Registration",permalink:"/docs/security/registration"},next:{title:"Authorization",permalink:"/docs/security/authorization"}},d={},l=[{value:"Installation",id:"installation",level:2},{value:"Password Grant Tokens",id:"password-grant-tokens",level:2},{value:"Creating A Password Grant Client",id:"creating-a-password-grant-client",level:3},{value:"Requesting Tokens",id:"requesting-tokens",level:3},{value:"Requesting Tokens Through The Proxy",id:"requesting-tokens-through-the-proxy",level:3},{value:"Requesting Tokens With Custom Fields",id:"requesting-tokens-with-custom-fields",level:3},{value:"Database Adaptation:",id:"database-adaptation",level:4},{value:"Task Modification:",id:"task-modification",level:4},{value:"Configuration File:",id:"configuration-file",level:4},{value:"Refresh Token",id:"refresh-token",level:3},{value:"Proxy Endpoint",id:"proxy-endpoint",level:4},{value:"Laravel Passport Endpoint",id:"laravel-passport-endpoint",level:4},{value:"Revoking Tokens",id:"revoking-tokens",level:3},{value:"Protecting Routes",id:"protecting-routes",level:2},{value:"API",id:"api",level:4},{value:"Web",id:"web",level:4},{value:"Passing The Access Token",id:"passing-the-access-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Social Authentication",id:"social-authentication",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Apiato utilizes the ",(0,s.jsx)(n.a,{href:"https://laravel.com/docs/passport",children:"Laravel Passport"})," package to provide a complete OAuth2 server.\nWhile this guide focuses on the ",(0,s.jsx)(n.code,{children:"Password Grant"}),", you can use any other grant type supported by Passport."]}),"\n",(0,s.jsxs)(n.p,{children:["OAuth2 offers various methods of authentication, known as ",(0,s.jsx)(n.code,{children:"grants"}),".\nTo learn how to choose the best grant type for your needs,\nread ",(0,s.jsx)(n.a,{href:"https://oauth2.thephpleague.com/authorization-server/which-grant/",children:"this"})," article."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"caution",children:(0,s.jsxs)(n.p,{children:["This documentation assumes prior familiarity with OAuth2.\nIf you're new to OAuth2,\nwe recommend\nacquainting yourself with its general ",(0,s.jsx)(n.a,{href:"https://oauth2.thephpleague.com/terminology/",children:"terminology"})," and features before proceeding."]})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To access a comprehensive list of available Passport endpoints,\nplease refer to the ",(0,s.jsx)(n.code,{children:"app/Containers/Authentication/UI/API/Routes/passport.v1.private.php"})," file."]})}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["To get started, you should execute the ",(0,s.jsx)(n.code,{children:"passport:install"}),' Artisan command.\nThis command will create the encryption keys needed to generate secure access tokens.\nIn addition, the command will create "personal access"\nand "password grant" clients which will be used to generate access tokens:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan passport:install\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Personal access client created successfully.\nClient ID: 1\nClient secret: Mo45lC2zhZWcMfDGmCbsw1OfasdCrc3wqQAeeYAO\nPassword grant client created successfully.\nClient ID: 2\nClient secret: nu8B2npfoR4hP6sWHaf90EvWUFe2EDYyJXGnCrso\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next you need to add the Password grant ",(0,s.jsx)(n.code,{children:"CLIENT_ID"})," and ",(0,s.jsx)(n.code,{children:"CLIENT_SECRET"})," to your ",(0,s.jsx)(n.code,{children:".env"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:"CLIENT_WEB_ID=2\nCLIENT_WEB_SECRET=nu8B2npfoR4hP6sWHaf90EvWUFe2EDYyJXGnCrso\n"})}),"\n",(0,s.jsx)(n.h2,{id:"password-grant-tokens",children:"Password Grant Tokens"}),"\n",(0,s.jsx)(n.p,{children:"The OAuth2 password grant allows your other first-party clients, such as a mobile application,\nto obtain an access token using an email address / username and password.\nThis allows you to issue access tokens securely to your first-party clients\nwithout requiring your users to go through the entire OAuth2 authorization code redirect flow."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-password-grant-client",children:"Creating A Password Grant Client"}),"\n",(0,s.jsxs)(n.p,{children:["Before your application can issue tokens via the password grant, you will need to create a password grant client.\nYou may do this using the ",(0,s.jsx)(n.code,{children:"passport:client"})," Artisan command with the ",(0,s.jsx)(n.code,{children:"--password"})," option.\nIf you have already run the ",(0,s.jsx)(n.code,{children:"passport:install"})," command, you do not need to run this command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"php artisan passport:client --password\n"})}),"\n",(0,s.jsx)(n.h3,{id:"requesting-tokens",children:"Requesting Tokens"}),"\n",(0,s.jsx)("span",{children:(0,s.jsxs)("code",{children:["POST ",o.N.p.F,"/oauth/token"]})}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("br",{})}),"\n",(0,s.jsxs)(n.p,{children:["Once you have created a password grant client,\nyou may request an access token\nby issuing a ",(0,s.jsx)(n.code,{children:"POST"})," request to the ",(0,s.jsx)(n.code,{children:"/oauth/token"})," route with the user's email address and password.\nIf the request is successful,\nyou will receive an ",(0,s.jsx)(n.code,{children:"access_token"})," and ",(0,s.jsx)(n.code,{children:"refresh_token"})," in the JSON response from the server:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// Request\n{\n  "grant_type": "password", // should always be "password"\n  "client_id": "client-id", // required\n  "client_secret": "client-secret", // required\n  "username": "john@doe.com",\n  "password": "secret",\n  "scope": "" // can be empty\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"requesting-tokens-through-the-proxy",children:"Requesting Tokens Through The Proxy"}),"\n",(0,s.jsx)("span",{children:(0,s.jsxs)("code",{children:["POST ",o.N.p.F,"/clients/web/login"]})}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("br",{})}),"\n",(0,s.jsxs)(n.p,{children:["By default, Apiato provides a single ready-to-use URL for your web client: ",(0,s.jsx)(n.code,{children:"clients/web/login"}),".\nHowever, you can add additional URLs as needed for each of your trusted first-party client apps.\nFor example, you could have URLs like ",(0,s.jsx)(n.code,{children:"clients/mobile/login"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You may request an access token\nby issuing a ",(0,s.jsx)(n.code,{children:"POST"})," request to the ",(0,s.jsx)(n.code,{children:"/clients/web/login"})," route with the user's email address and password.\nIf the request is successful,\nyou will receive an ",(0,s.jsx)(n.code,{children:"access_token"})," and ",(0,s.jsx)(n.code,{children:"refresh_token"})," in the JSON response from the server:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// Request\n{\n  "username": "john@doe.com",\n  "password": "secret"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Behind the scenes, when a request is made to these endpoints,\nthe corresponding client ID and secret are automatically appended to the request.\nThis allows Apiato to make an additional call to your authentication server with all the necessary data.\nThis approach eliminates the need for clients to send their ID and secret with each request,\nand it allows them to use their own URL, providing even more control over which client is accessing your server.\nThe authentication server then returns the authentication response to the client, including the tokens."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You must manually extract the client credentials from the database\nand update your ",(0,s.jsx)(n.code,{children:".env"})," file with the appropriate credentials for each client."]})}),"\n",(0,s.jsx)(n.h3,{id:"requesting-tokens-with-custom-fields",children:"Requesting Tokens With Custom Fields"}),"\n",(0,s.jsx)(n.p,{children:"By default, Apiato enables users to request an access token using their email address.\nHowever,\nyou may want\nto enhance this functionality to allow users to request an access token using other identifiers like their username,\nphone number, etc. Here's a guide on how to configure and utilize this feature:"}),"\n",(0,s.jsx)(n.h4,{id:"database-adaptation",children:"Database Adaptation:"}),"\n",(0,s.jsxs)(n.p,{children:["You will need to make adjustments to your database schema to accommodate the new fields.\nFor example, you can add the ",(0,s.jsx)(n.code,{children:"username"})," and ",(0,s.jsx)(n.code,{children:"phone"})," fields to the ",(0,s.jsx)(n.code,{children:"users"})," table."]}),"\n",(0,s.jsx)(n.h4,{id:"task-modification",children:"Task Modification:"}),"\n",(0,s.jsxs)(n.p,{children:["If you have a ",(0,s.jsx)(n.a,{href:"/docs/components/main-components/tasks",children:"Task"})," responsible for creating a user object,\nsuch as the ",(0,s.jsx)(n.code,{children:"CreateUserByCredentialsTask"}),", you need to update it to support the new fields.\nAdditionally, this modification may also impact your registration logic,\nso ensure that you make the necessary adjustments there as well."]}),"\n",(0,s.jsx)(n.h4,{id:"configuration-file",children:"Configuration File:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Locate the ",(0,s.jsx)(n.code,{children:"appSection-authentication"})," configuration file.\nIt is typically found at ",(0,s.jsx)(n.code,{children:"App\\Containers\\AppSection\\Authentication\\Configs\\appSection-authentication"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:"appSection-authentication"})," configuration file and search for the ",(0,s.jsx)(n.code,{children:"login.fields"})," parameter.\nThis parameter allows you to configure the login fields based on your requirements."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"login.fields"})," parameter according to your needs.\nYou can specify the login fields that should be considered during the authentication process.\nFor example, if you want to allow users to log in using their ",(0,s.jsx)(n.code,{children:"email"})," and ",(0,s.jsx)(n.code,{children:"phone"}),",\nupdate the ",(0,s.jsx)(n.code,{children:"login.fields"})," parameter as follows:"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"'login' => [\n    'fields' => [\n        'email' => ['email'],\n        'phone' => ['string', 'min:6', 'max:25'],\n    ],\n],\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now user can request a token using their email or phone number."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'// Request\n{\n  "username": "+1234567890",\n  "password": "secret"\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This feature is well documented in the configuration file."})}),"\n",(0,s.jsx)(n.h3,{id:"refresh-token",children:"Refresh Token"}),"\n",(0,s.jsx)(n.p,{children:"If your application utilizes short-lived access tokens,\nusers will need\nto refresh their access tokens\nusing the refresh token that was provided to them when the access token was initially issued."}),"\n",(0,s.jsx)(n.p,{children:"There are two recommended methods to refresh the token:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Proxy Endpoint (recommended for first-party clients):\n",(0,s.jsx)("span",{children:(0,s.jsxs)("code",{children:["POST ",o.N.p.F,"/clients/web/refresh"]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Proxy Endpoint (recommended for first-party clients):\n",(0,s.jsx)("span",{children:(0,s.jsxs)("code",{children:["POST ",o.N.p.F,"/oauth/token"]})})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"proxy-endpoint",children:"Proxy Endpoint"}),"\n",(0,s.jsxs)("span",{children:["Apiato provides a default endpoint, ",(0,s.jsxs)("code",{children:[o.N.p.F,"/clients/web/refresh"]}),",\nspecifically for the Web Client to refresh its token.\nYou can create additional endpoints for each client as needed.\nThis endpoint can be used in two ways:\nby manually passing the ",(0,s.jsx)("code",{children:"refresh_token"})," to the endpoint or by including it in the request's ",(0,s.jsx)("code",{children:"HttpCookie"}),".\nIn either case, the server will respond with a new access token and refresh token."]}),"\n",(0,s.jsx)(n.h4,{id:"laravel-passport-endpoint",children:"Laravel Passport Endpoint"}),"\n",(0,s.jsxs)(n.p,{children:["You can find more information about the Laravel Passport refresh token endpoint ",(0,s.jsx)(n.a,{href:"https://laravel.com/docs/passport#refreshing-tokens",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"revoking-tokens",children:"Revoking Tokens"}),"\n",(0,s.jsx)("span",{children:(0,s.jsxs)("code",{children:["POST ",o.N.p.F,"/api/logout"]})}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("br",{})}),"\n",(0,s.jsxs)(n.p,{children:["You may revoke a token by using this endpoint\nand passing the token to be revoked in the header ",(0,s.jsx)(n.code,{children:"Authorization: Bearer {token}"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"protecting-routes",children:"Protecting Routes"}),"\n",(0,s.jsx)(n.h4,{id:"api",children:"API"}),"\n",(0,s.jsxs)(n.p,{children:["To protect an API endpoint from being accessible by unauthenticated users, you can use the ",(0,s.jsx)(n.code,{children:"auth:api"})," middleware."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"Route::get('secret/info', Controller::class)\n    ->middleware('auth:api');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["All endpoints protected with the ",(0,s.jsx)(n.code,{children:"auth:api"})," middleware can only be accessed\nby sending a valid access token along with the request.\nThis ensures that only authenticated users with valid tokens are granted access to these endpoints."]}),"\n",(0,s.jsx)(n.h4,{id:"web",children:"Web"}),"\n",(0,s.jsxs)(n.p,{children:["To secure a web endpoint and restrict access to authenticated users only, you can utilize the ",(0,s.jsx)(n.code,{children:"auth:web"})," middleware.\nBy applying the ",(0,s.jsx)(n.code,{children:"auth:web"})," middleware to a specific endpoint or route,\nyou ensure that only authenticated users can access it.\nThis middleware verifies the user's authentication status based on their web session or cookie,\nmaking it suitable for web-based authentication and authorization."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"Route::get('private/page', Controller::class)\n    ->middleware('auth:web');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If authentication fails, users will be redirected to a login page by default.\nTo modify the login page view,\nyou can navigate to the ",(0,s.jsx)(n.code,{children:"app/Ship/Providers/RouteServiceProvider.php"})," file and update the ",(0,s.jsx)(n.code,{children:"LOGIN"})," constant."]}),"\n",(0,s.jsx)(n.h3,{id:"passing-the-access-token",children:"Passing The Access Token"}),"\n",(0,s.jsxs)(n.p,{children:["When calling routes that are protected by Passport,\nyour application's API consumers should specify their access token as a ",(0,s.jsx)(n.code,{children:"Bearer"})," token in the ",(0,s.jsx)(n.code,{children:"Authorization"})," header of their request.\nFor example, when using the Guzzle HTTP library:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"use Illuminate\\Support\\Facades\\Http;\n\n$response = Http::withHeaders([\n    'Accept' => 'application/json',\n    'Authorization' => 'Bearer '.$accessToken,\n])->get('http://api.apiato.test/v1/users');\n\nreturn $response->json();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Most of the configuration is done in the ",(0,s.jsx)(n.code,{children:"app/Ships/Configs/apiato.php"})," file."]}),"\n",(0,s.jsx)(n.h2,{id:"social-authentication",children:"Social Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["For Social Authentication visit the ",(0,s.jsx)(n.a,{href:"/docs/pacakges/social-authentication",children:"Social Authentication"})," page."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},19395:e=>{e.exports=JSON.parse('{"N":{"p":{"F":"http://api.apiato.test/v1"},"w":{"R":"admin@admin.com","w":"admin"}}}')}}]);