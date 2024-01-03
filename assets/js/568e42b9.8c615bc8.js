"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),i=n(86302);const r={sidebar_position:2,title:"Authentication"},s=void 0,l={unversionedId:"security/authentication",id:"security/authentication",title:"Authentication",description:"Apiato utilizes the Laravel Passport package to provide a complete OAuth2 server.",source:"@site/docs/security/authentication.mdx",sourceDirName:"security",slug:"/security/authentication",permalink:"/docs/next/security/authentication",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/security/authentication.mdx",tags:[],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Authentication"},sidebar:"tutorialSidebar",previous:{title:"Registration",permalink:"/docs/next/security/registration"},next:{title:"Authorization",permalink:"/docs/next/security/authorization"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Password Grant Tokens",id:"password-grant-tokens",level:2},{value:"Creating A Password Grant Client",id:"creating-a-password-grant-client",level:3},{value:"Requesting Tokens",id:"requesting-tokens",level:3},{value:"Requesting Tokens Through The Proxy",id:"requesting-tokens-through-the-proxy",level:3},{value:"Requesting Tokens With Custom Attributes",id:"requesting-tokens-with-custom-attributes",level:3},{value:"Database Adaptation:",id:"database-adaptation",level:4},{value:"Task Modification:",id:"task-modification",level:4},{value:"Configuration File:",id:"configuration-file",level:4},{value:"Refresh Token",id:"refresh-token",level:3},{value:"Proxy Endpoint",id:"proxy-endpoint",level:4},{value:"Laravel Passport Endpoint",id:"laravel-passport-endpoint",level:4},{value:"Revoking Tokens",id:"revoking-tokens",level:3},{value:"Protecting Routes",id:"protecting-routes",level:2},{value:"API",id:"api",level:4},{value:"Web",id:"web",level:4},{value:"Passing The Access Token",id:"passing-the-access-token",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Social Authentication",id:"social-authentication",level:2}],c={toc:u},d="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apiato utilizes the ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/passport"},"Laravel Passport")," package to provide a complete OAuth2 server.\nWhile this guide focuses on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Password Grant"),", you can use any other grant type supported by Passport."),(0,o.kt)("p",null,"OAuth2 offers various methods of authentication, known as ",(0,o.kt)("inlineCode",{parentName:"p"},"grants"),".\nTo learn how to choose the best grant type for your needs,\nread ",(0,o.kt)("a",{parentName:"p",href:"https://oauth2.thephpleague.com/authorization-server/which-grant/"},"this")," article."),(0,o.kt)("admonition",{title:"Important",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This documentation assumes prior familiarity with OAuth2.\nIf you're new to OAuth2,\nwe recommend\nacquainting yourself with its general ",(0,o.kt)("a",{parentName:"p",href:"https://oauth2.thephpleague.com/terminology/"},"terminology")," and features before proceeding.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To access a comprehensive list of available Passport endpoints,\nplease refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Containers/Authentication/UI/API/Routes/passport.v1.private.php")," file.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To get started, you should execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"passport:install"),' Artisan command.\nThis command will create the encryption keys needed to generate secure access tokens.\nIn addition, the command will create "personal access"\nand "password grant" clients which will be used to generate access tokens:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan passport:install\n")),(0,o.kt)("p",null,"You should see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Personal access client created successfully.\nClient ID: 1\nClient secret: Mo45lC2zhZWcMfDGmCbsw1OfasdCrc3wqQAeeYAO\nPassword grant client created successfully.\nClient ID: 2\nClient secret: nu8B2npfoR4hP6sWHaf90EvWUFe2EDYyJXGnCrso\n")),(0,o.kt)("p",null,"Next you need to add the Password grant ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"CLIENT_SECRET")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dotenv"},"CLIENT_WEB_ID=2\nCLIENT_WEB_SECRET=nu8B2npfoR4hP6sWHaf90EvWUFe2EDYyJXGnCrso\n")),(0,o.kt)("h2",{id:"password-grant-tokens"},"Password Grant Tokens"),(0,o.kt)("p",null,"The OAuth2 password grant allows your other first-party clients, such as a mobile application,\nto obtain an access token using an email address / username and password.\nThis allows you to issue access tokens securely to your first-party clients\nwithout requiring your users to go through the entire OAuth2 authorization code redirect flow."),(0,o.kt)("h3",{id:"creating-a-password-grant-client"},"Creating A Password Grant Client"),(0,o.kt)("p",null,"Before your application can issue tokens via the password grant, you will need to create a password grant client.\nYou may do this using the ",(0,o.kt)("inlineCode",{parentName:"p"},"passport:client")," Artisan command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--password")," option.\nIf you have already run the ",(0,o.kt)("inlineCode",{parentName:"p"},"passport:install")," command, you do not need to run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"php artisan passport:client --password\n")),(0,o.kt)("h3",{id:"requesting-tokens"},"Requesting Tokens"),(0,o.kt)("span",null,(0,o.kt)("code",null,"POST ",i.c.F.h,"/oauth/token")),(0,o.kt)("div",null,(0,o.kt)("br",null)),(0,o.kt)("p",null,"Once you have created a password grant client,\nyou may request an access token\nby issuing a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/oauth/token")," route with the user's email address and password.\nIf the request is successful,\nyou will receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token")," in the JSON response from the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Request\n{\n  "grant_type": "password", // should always be "password"\n  "client_id": "client-id", // required\n  "client_secret": "client-secret", // required\n  "username": "john@doe.com",\n  "password": "secret",\n  "scope": "" // can be empty\n}\n')),(0,o.kt)("h3",{id:"requesting-tokens-through-the-proxy"},"Requesting Tokens Through The Proxy"),(0,o.kt)("span",null,(0,o.kt)("code",null,"POST ",i.c.F.h,"/clients/web/login")),(0,o.kt)("div",null,(0,o.kt)("br",null)),(0,o.kt)("p",null,"By default, Apiato provides a single ready-to-use URL for your web client: ",(0,o.kt)("inlineCode",{parentName:"p"},"clients/web/login"),".\nHowever, you can add additional URLs as needed for each of your trusted first-party client apps.\nFor example, you could have URLs like ",(0,o.kt)("inlineCode",{parentName:"p"},"clients/mobile/login"),"."),(0,o.kt)("p",null,"You may request an access token\nby issuing a ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/clients/web/login")," route with the user's email address and password.\nIf the request is successful,\nyou will receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token")," in the JSON response from the server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Request\n{\n  "username": "john@doe.com",\n  "password": "secret"\n}\n')),(0,o.kt)("p",null,"Behind the scenes, when a request is made to these endpoints,\nthe corresponding client ID and secret are automatically appended to the request.\nThis allows Apiato to make an additional call to your authentication server with all the necessary data.\nThis approach eliminates the need for clients to send their ID and secret with each request,\nand it allows them to use their own URL, providing even more control over which client is accessing your server.\nThe authentication server then returns the authentication response to the client, including the tokens."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You must manually extract the client credentials from the database\nand update your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file with the appropriate credentials for each client.")),(0,o.kt)("h3",{id:"requesting-tokens-with-custom-attributes"},"Requesting Tokens With Custom Attributes"),(0,o.kt)("p",null,"By default, Apiato enables users to request an access token using their email address.\nHowever,\nyou may want\nto enhance this functionality to allow users to request an access token using other identifiers like their username,\nphone number, etc. Here's a guide on how to configure and utilize this feature:"),(0,o.kt)("h4",{id:"database-adaptation"},"Database Adaptation:"),(0,o.kt)("p",null,"You will need to make adjustments to your database schema to accommodate the new fields.\nFor example, you can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"phone")," fields to the ",(0,o.kt)("inlineCode",{parentName:"p"},"users")," table."),(0,o.kt)("h4",{id:"task-modification"},"Task Modification:"),(0,o.kt)("p",null,"If you have a ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/components/main-components/tasks"},"Task")," responsible for creating a user object,\nsuch as the ",(0,o.kt)("inlineCode",{parentName:"p"},"CreateUserByCredentialsTask"),", you need to update it to support the new fields.\nAdditionally, this modification may also impact your registration logic,\nso ensure that you make the necessary adjustments there as well."),(0,o.kt)("h4",{id:"configuration-file"},"Configuration File:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"appSection-authentication")," configuration file.\nIt is typically found at ",(0,o.kt)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\Authentication\\Configs\\appSection-authentication"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("inlineCode",{parentName:"p"},"appSection-authentication")," configuration file and search for the ",(0,o.kt)("inlineCode",{parentName:"p"},"login.attributes")," parameter.\nThis parameter allows you to configure the login attributes based on your requirements.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"login.attributes")," parameter according to your needs.\nYou can specify the login attributes that should be considered during the authentication process.\nFor example, if you want to allow users to log in using their ",(0,o.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"phone"),",\nupdate the ",(0,o.kt)("inlineCode",{parentName:"p"},"login.attributes")," parameter as follows:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"'login' => [\n    'attributes' => [\n        'email' => ['email'],\n        'phone' => ['string', 'min:6', 'max:25'],\n    ],\n],\n")),(0,o.kt)("p",null,"Now user can request a token using their email or phone number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// Request\n{\n  "username": "+1234567890",\n  "password": "secret"\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This feature is well documented in the configuration file.")),(0,o.kt)("h3",{id:"refresh-token"},"Refresh Token"),(0,o.kt)("p",null,"If your application utilizes short-lived access tokens,\nusers will need\nto refresh their access tokens\nusing the refresh token that was provided to them when the access token was initially issued."),(0,o.kt)("p",null,"There are two recommended methods to refresh the token:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Proxy Endpoint (recommended for first-party clients):"),(0,o.kt)("span",null,(0,o.kt)("code",null,"POST ",i.c.F.h,"/clients/web/refresh"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Proxy Endpoint (recommended for first-party clients):"),(0,o.kt)("span",null,(0,o.kt)("code",null,"POST ",i.c.F.h,"/oauth/token")))),(0,o.kt)("h4",{id:"proxy-endpoint"},"Proxy Endpoint"),(0,o.kt)("span",null,"Apiato provides a default endpoint, ",(0,o.kt)("code",null,i.c.F.h,"/clients/web/refresh"),", specifically for the Web Client to refresh its token. You can create additional endpoints for each client as needed. This endpoint can be used in two ways: by manually passing the ",(0,o.kt)("code",null,"refresh_token")," to the endpoint or by including it in the request's ",(0,o.kt)("code",null,"HttpCookie"),". In either case, the server will respond with a new access token and refresh token."),(0,o.kt)("h4",{id:"laravel-passport-endpoint"},"Laravel Passport Endpoint"),(0,o.kt)("p",null,"You can find more information about the Laravel Passport refresh token endpoint ",(0,o.kt)("a",{parentName:"p",href:"https://laravel.com/docs/passport#refreshing-tokens"},"here"),"."),(0,o.kt)("h3",{id:"revoking-tokens"},"Revoking Tokens"),(0,o.kt)("span",null,(0,o.kt)("code",null,"POST ",i.c.F.h,"/api/logout")),(0,o.kt)("div",null,(0,o.kt)("br",null)),(0,o.kt)("p",null,"You may revoke a token by using this endpoint\nand passing the token to be revoked in the header ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer {token}"),"."),(0,o.kt)("h2",{id:"protecting-routes"},"Protecting Routes"),(0,o.kt)("h4",{id:"api"},"API"),(0,o.kt)("p",null,"To protect an API endpoint from being accessible by unauthenticated users, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth:api")," middleware."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('secret/info', Controller::class)\n    ->middleware('auth:api');\n")),(0,o.kt)("p",null,"All endpoints protected with the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth:api")," middleware can only be accessed\nby sending a valid access token along with the request.\nThis ensures that only authenticated users with valid tokens are granted access to these endpoints."),(0,o.kt)("h4",{id:"web"},"Web"),(0,o.kt)("p",null,"To secure a web endpoint and restrict access to authenticated users only, you can utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth:web")," middleware.\nBy applying the ",(0,o.kt)("inlineCode",{parentName:"p"},"auth:web")," middleware to a specific endpoint or route,\nyou ensure that only authenticated users can access it.\nThis middleware verifies the user's authentication status based on their web session or cookie,\nmaking it suitable for web-based authentication and authorization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"Route::get('private/page', Controller::class)\n    ->middleware('auth:web');\n")),(0,o.kt)("p",null,"If authentication fails, users will be redirected to a login page by default.\nTo modify the login page view,\nyou can navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ship/Providers/RouteServiceProvider.php")," file and update the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOGIN")," constant."),(0,o.kt)("h3",{id:"passing-the-access-token"},"Passing The Access Token"),(0,o.kt)("p",null,"When calling routes that are protected by Passport,\nyour application's API consumers should specify their access token as a ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer")," token in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header of their request.\nFor example, when using the Guzzle HTTP library:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Illuminate\\Support\\Facades\\Http;\n\n$response = Http::withHeaders([\n    'Accept' => 'application/json',\n    'Authorization' => 'Bearer '.$accessToken,\n])->get('http://api.apiato.test/v1/users');\n\nreturn $response->json();\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Most of the configuration is done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/Ships/Configs/apiato.php")," file."),(0,o.kt)("h2",{id:"social-authentication"},"Social Authentication"),(0,o.kt)("p",null,"For Social Authentication visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/pacakges/social-authentication"},"Social Authentication")," page."))}h.isMDXComponent=!0},86302:e=>{e.exports=JSON.parse('{"c":{"F":{"h":"http://api.apiato.test/v1"},"S":{"D":"admin@admin.com","B":"admin"}}}')}}]);