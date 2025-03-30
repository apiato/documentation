"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[9307],{28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>s});var i=o(96540);const t={},r=i.createContext(t);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},49672:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"pacakges/social-authentication","title":"Social Authentication","description":"Under the hood this container uses Laravel Socialite.","source":"@site/docs/pacakges/social-authentication.md","sourceDirName":"pacakges","slug":"/pacakges/social-authentication","permalink":"/docs/next/pacakges/social-authentication","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/docs/pacakges/social-authentication.md","tags":[],"version":"current","lastUpdatedBy":"Mohammad Alavi","lastUpdatedAt":1697511591000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Social Authentication"},"sidebar":"tutorialSidebar","previous":{"title":"Localization","permalink":"/docs/next/pacakges/localization"},"next":{"title":"Consulting","permalink":"/docs/next/consulting"}}');var t=o(74848),r=o(28453);const a={sidebar_position:3,title:"Social Authentication"},s=void 0,l={},c=[{value:"Installation",id:"installation",level:2},{value:"Default Supported Auth Provide",id:"default-supported-auth-provide",level:2},{value:"How Social Authentication Works",id:"how-social-authentication-works",level:2},{value:"Setup Social Authentication",id:"Setup-Social-Authentication",level:2},{value:"Social Authentication Container Customization",id:"social-auth-customization",level:2},{value:"Support new Auth Provider",id:"support-new-auth-provide",level:3},{value:"Changing default used Repository, Transformer &amp; DB user table name",id:"changing-defaults",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Under the hood this container uses ",(0,t.jsx)(n.a,{href:"https://github.com/laravel/socialite",children:"Laravel Socialite"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["In the following instructions we assume we have a fresh ",(0,t.jsx)(n.strong,{children:"Apiato"})," installation."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"composer require apiato/social-auth-container\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now run ",(0,t.jsx)(n.code,{children:"php artisan migrate"})]}),"\n",(0,t.jsxs)(n.p,{children:["Add this values to $fillable array in your ",(0,t.jsx)(n.code,{children:"User"})," model"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"    protected $fillable = [\n        ...\n        'social_provider',\n        'social_nickname',\n        'social_id',\n        'social_token',\n        'social_token_secret',\n        'social_refresh_token',\n        'social_expires_in',\n        'social_avatar',\n        'social_avatar_original',\n        ...\n    ];\n"})}),"\n",(0,t.jsx)(n.p,{children:"Optionally add this to your user transformer to add social auth fields to your user repsonses:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"'social_auth_provider' => $user->social_provider,\n    'social_nickname' => $user->social_nickname,\n    'social_id' => $user->social_id,\n    'social_avatar' => [\n        'avatar' => $user->social_avatar,\n        'original' => $user->social_avatar_original,\n    ]\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["It is recommended to have 2 separate transformers (private & public) for the User e.g. ",(0,t.jsx)(n.code,{children:"UserPrivateProfileTransformer"}),"\n& ",(0,t.jsx)(n.code,{children:"UserTransformer"})," and add above data to the private transformer not the public one. By doing it this way you can hide\nyour User's personal data."]})]}),"\n",(0,t.jsx)(n.h2,{id:"default-supported-auth-provide",children:"Default Supported Auth Provide"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Google"}),"\n",(0,t.jsx)(n.li,{children:"Facebook"}),"\n",(0,t.jsx)(n.li,{children:"Twitter"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-social-authentication-works",children:"How Social Authentication Works"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter...)."}),"\n",(0,t.jsx)(n.li,{children:"The Social Auth Provider returns a Token."}),"\n",(0,t.jsx)(n.li,{children:"The Client makes a call to the server (our server) and passes the Token."}),"\n",(0,t.jsx)(n.li,{children:"The Server fetches the user data from the Social Auth Provider using Token."}),"\n",(0,t.jsx)(n.li,{children:"The Server create new User from the collected social data and return the Authenticated User (If the user already\ncreated then it just returns it)."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"Setup-Social-Authentication",children:"Setup Social Authentication"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create an App on the supported Social Auth provider."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Facebook: ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"https://developers.facebook.com/apps"})]}),"\n",(0,t.jsxs)(n.li,{children:["For Twitter: ",(0,t.jsx)(n.a,{href:"https://apps.twitter.com/app",children:"https://apps.twitter.com/app"})]}),"\n",(0,t.jsxs)(n.li,{children:["For\nGoogle: ",(0,t.jsx)(n.a,{href:"https://console.developers.google.com/apis/credentials",children:"https://console.developers.google.com/apis/credentials"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["For any supported provider you want to use, add their credentials to ",(0,t.jsx)(n.code,{children:"config/services.php"}),". ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/socialite#configuration",children:"read more"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Make a request from your client to get the ",(0,t.jsx)(n.code,{children:"oauth"})," info. (Each Social provider returns different response and keys)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example Twitter Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "User": {\n    "tokentoken": "1212",\n    "tokentokenSecret": "3434",\n    "tokenid": "777",\n    "tokennickname": "John_Doe",\n    "tokenname": "John Doe",\n    "tokenemail": null,\n    "tokenavatar": "https://pbs.twimg.com/images/888/PENrcePC.jpg",\n    "tokenuser": "token",\n    "avatar_original": "https://pbs.twimg.com/images/999/PENrcePC.jpg"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps."})]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"auth/{provider}"})," route and the ",(0,t.jsx)(n.code,{children:"oauth"})," info to make a call from your server to the Social Provider in order to\nget the User info. For more details about the ",(0,t.jsx)(n.code,{children:"auth/{provider}"})," route parameters checkout the generated documentation or\nvisit ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The endpoint above should return the User and his Personal Access Token."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Example Google Response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "data": {\n        // user data\n        .\n        .\n        .\n        // additional social data if you have updated your transformer as mentioned above\n        "social_auth_provider": "google",\n        "social_id": "113834952367767922133",\n        "social_avatar": {\n            "avatar": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg",\n            "original": "https:\\/\\/lh6.googleusercontent.com\\/-OSItz6IHbSw\\/AAA\\/AMZuucltEs\\/s96-c\\/photo.jpg"\n        }\n    },\n    "meta": {\n        "include": [\n            "roles"\n        ],\n        "custom": {\n            "token_type": "personal",\n            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"For testing purposes Apiato provides two web endpoints"}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/auth/{provider}/redirect"})," which act as a client (step 3 above)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"/auth/{provider}/callback"})," which you can use in your provider's developer dashboard for callback url.",(0,t.jsx)(n.br,{}),"\n","Use those endpoints from your browser ",(0,t.jsxs)(n.em,{children:["(replace the provider with any of the supported providers ",(0,t.jsx)(n.code,{children:"facebook"}),", ",(0,t.jsx)(n.code,{children:"twitter"}),",...)"]}),"\nto get the ",(0,t.jsx)(n.code,{children:"oauth"})," info and user data respectively."]}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"social-auth-customization",children:"Social Authentication Container Customization"}),"\n",(0,t.jsx)(n.p,{children:"You can customize this container by publishing its config and modifying its values"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan vendor:publish\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Config file will be copied to ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/vendor-socialAuth.php"})]}),"\n",(0,t.jsx)(n.h3,{id:"support-new-auth-provide",children:"Support new Auth Provider"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Publish the configs"}),"\n",(0,t.jsxs)(n.li,{children:["Create your new auth provider\nby implementing the ",(0,t.jsx)(n.code,{children:"App\\Containers\\Vendor\\SocialAuth\\Contracts\\SocialAuthProvider"})," contract.",(0,t.jsx)(n.br,{}),"\n","To get an idea about how to implement your own provider you can check out supported providers here ",(0,t.jsx)(n.code,{children:"app/Containers/Vendor/SocialAuth/SocialAuthProviders"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Add your new provider to ",(0,t.jsx)(n.code,{children:"providers"})," array in the ",(0,t.jsx)(n.code,{children:"vendor-socialAuth"})," config."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"    'providers' => [\n        ...\n        'something' => Location\\Of\\Your\\Provider\\SomthingSocialAuthProvider::class,\n    ],\n"})}),"\n",(0,t.jsx)(n.h3,{id:"changing-defaults",children:"Changing default used Repository, Transformer & DB user table name"}),"\n",(0,t.jsx)(n.p,{children:"This container depends on Apiato default user repository, transformer & database user table name.\nIf you changed those defaults you can update and provide them in the configs."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);