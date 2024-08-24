"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[8668],{22340:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var t=i(74848),o=i(28453);const s={title:"Notifications"},a=void 0,l={id:"optional-components/notifications",title:"Notifications",description:"* Definition",source:"@site/versioned_docs/version-9.x/optional-components/notifications.md",sourceDirName:"optional-components",slug:"/optional-components/notifications",permalink:"/docs/9.x/optional-components/notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/optional-components/notifications.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618096631e3,frontMatter:{title:"Notifications"},sidebar:"docs",previous:{title:"Mails",permalink:"/docs/9.x/optional-components/mails"},next:{title:"Values",permalink:"/docs/9.x/optional-components/values"}},c={},r=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:2},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"Select Channels",id:"select-channels",level:2},{value:"Queueing a Notification",id:"queueing",level:2},{value:"Use DB channel",id:"db-channel",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#definition",children:"Definition"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#principles",children:"Principles"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#rules",children:"Rules"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#code-samples",children:"Code Samples"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#select-channels",children:"Select Channels"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#queueing",children:"Queueing"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#db-channel",children:"Use DB channel"})}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(e.p,{children:"Notifications allow you to inform the user about a state changes in your application."}),"\n",(0,t.jsx)(e.p,{children:"The Laravel notifications supports sending notifications across a variety channels (mail, SMS, Slack, Database...)."}),"\n",(0,t.jsx)(e.p,{children:"When using the Database channel the notifications will be stored in a database to be displayed in your client interface."}),"\n",(0,t.jsxs)(e.p,{children:["For more details refer to this ",(0,t.jsx)(e.a,{href:"https://laravel.com/docs/notifications",children:"link"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"principles",children:"Principles"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Containers MAY or MAY NOT have one or more Notification."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Ship may contain Application general Notifications."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["All Notifications MUST extend from ",(0,t.jsx)(e.code,{children:"App\\Ship\\Parents\\Notifications\\Notification"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:" - app\n    - Containers\n        - {container-name}\n            - Notifications\n                - UserRegisteredNotification.php\n                - ...\n    - Ship\n        - Notifications\n            - SystemFailureNotification.php\n            - ...\n"})}),"\n",(0,t.jsx)(e.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example: a simple Notification"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-php",children:'<?php\n\nnamespace App\\Containers\\User\\Notifications;\n\nuse App\\Containers\\User\\Models\\User;\nuse App\\Ship\\Parents\\Notifications\\Notification;\nuse Illuminate\\Bus\\Queueable;\nuse Illuminate\\Contracts\\Queue\\ShouldQueue;\n\nclass BirthdayReminderNotification extends Notification implements ShouldQueue\n{\n\n    use Queueable;\n\n    protected $notificationMessage;\n\n    public function __construct($notificationMessage)\n    {\n        $this->notificationMessage = $notificationMessage;\n    }\n    \n    public function toArray($notifiable)\n    {\n        return [\n            \'content\' => $this->notificationMessage,\n        ];\n    }\n\n    public function toMail($notifiable)\n    {\n        // $notifiable is the object you want to notify "e.g. user"\n        return (new MailMessage)\n            ->subject("Hello World")\n            ->line("Hi, $notifiable->name")\n            ->line($this->notificationMessage);\n    }\n\n    public function toSms($notifiable)\n    {\n        // ...\n    }\n    \n    // ...\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Usage from an Action or Task:"})}),"\n",(0,t.jsxs)(e.p,{children:["Notifications can be sent from Actions or Tasks using the ",(0,t.jsx)(e.code,{children:"Notification"})," Facade."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-php",children:"\\Notification::send($user, new BirthdayReminderNotification($notificationMessage));\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Alternatively you can use the ",(0,t.jsx)(e.code,{children:"Illuminate\\Notifications\\Notifiable"}),' trait on the notifiable object "e.g. User" and then call it as follows:']}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-php",children:"// get any user\n$user = User::firstOrCreate([\n    'name' => 'Mahmoud Zalt',\n    'email' => 'mail@something.com',\n    'phone' => '0096123456789',\n]);\n\n// call notify, found on the Notifiable trait\n$user->notify(new BirthdayReminderNotification($notificationMessage));\n"})}),"\n",(0,t.jsx)(e.h2,{id:"select-channels",children:"Select Channels"}),"\n",(0,t.jsxs)(e.p,{children:["To select a notification channel, apiato have the ",(0,t.jsx)(e.code,{children:"app/Ship/Configs/notification.php"}),' config file where you can define the array of supported channels "e.g. SMS, Email, WebPush...", to be used for all your notifications.']}),"\n",(0,t.jsxs)(e.p,{children:["If you want to override the configuration for some notifications classes, or if you prefer to define the channels within each notification class itself,\nyou can override the ",(0,t.jsx)(e.strong,{children:"via"})," function ",(0,t.jsx)(e.code,{children:"public function via($notifiable)"})," in the notification class and define your channels."]}),"\n",(0,t.jsxs)(e.p,{children:["Checkout ",(0,t.jsx)(e.a,{href:"http://laravel-notification-channels.com",children:"laravel notification channels"})," for list of supported integrations."]}),"\n",(0,t.jsx)(e.h2,{id:"queueing",children:"Queueing a Notification"}),"\n",(0,t.jsxs)(e.p,{children:["To queue a notification you should use ",(0,t.jsx)(e.code,{children:"Illuminate\\Bus\\Queueable"})," and implement ",(0,t.jsx)(e.code,{children:"Illuminate\\Contracts\\Queue\\ShouldQueue"}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"db-channel",children:"Use DB channel"}),"\n",(0,t.jsxs)(e.p,{children:["Generally you need to generate the notification migration ",(0,t.jsx)(e.code,{children:"php artisan notifications:table"}),", then run ",(0,t.jsx)(e.code,{children:"php artisan migrate"}),",\nhowever just running the migration command will do the job, since Apiato already adds the ",(0,t.jsx)(e.code,{children:"_create_notifications_table.php"})," in the default migrations files directory ",(0,t.jsx)(e.code,{children:"app/Ship/Migrations/"}),"."]})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>l});var t=i(96540);const o={},s=t.createContext(o);function a(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);