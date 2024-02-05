"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4624],{95788:(e,n,t)=>{t.d(n,{Iu:()=>p,yg:()=>m});var i=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||o;return t?i.createElement(m,r(r({ref:n},p),{},{components:t})):i.createElement(m,r({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(45072),a=(t(11504),t(95788));const o={title:"Notifications"},r=void 0,l={unversionedId:"optional-components/notifications",id:"version-10.x/optional-components/notifications",title:"Notifications",description:"* Definition",source:"@site/versioned_docs/version-10.x/optional-components/notifications.md",sourceDirName:"optional-components",slug:"/optional-components/notifications",permalink:"/docs/10.x/optional-components/notifications",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/optional-components/notifications.md",tags:[],version:"10.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1619394104,formattedLastUpdatedAt:"Apr 25, 2021",frontMatter:{title:"Notifications"},sidebar:"version-10.x/docs",previous:{title:"Mails",permalink:"/docs/10.x/optional-components/mails"},next:{title:"Values",permalink:"/docs/10.x/optional-components/values"}},s={},c=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:2},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A Simple Notification",id:"a-simple-notification",level:4},{value:"Usage from an Action or Task",id:"usage-from-an-action-or-task",level:4},{value:"Select Channels",id:"select-channels",level:2},{value:"Queueing a Notification",id:"queueing",level:2},{value:"Use DB channel",id:"db-channel",level:2}],p={toc:c},u="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,i.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#definition"},"Definition")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#principles"},"Principles")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#rules"},"Rules")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#code-samples"},"Code Samples")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#select-channels"},"Select Channels")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#queueing"},"Queueing")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"#db-channel"},"Use DB channel"))),(0,a.yg)("h3",{id:"definition"},"Definition"),(0,a.yg)("p",null,"Notifications allow you to inform the user about a state changes in your application.  "),(0,a.yg)("p",null,"The Laravel notifications supports sending notifications across a variety of channels (mail, SMS, Slack, Database...). "),(0,a.yg)("p",null,"When using the Database channel, the notifications will be stored in a database to be displayed in your client interface."),(0,a.yg)("h2",{id:"principles"},"Principles"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Containers MAY or MAY NOT have one or more Notification.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Ship MAY contain Application general Notifications."))),(0,a.yg)("h3",{id:"rules"},"Rules"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"All Notifications MUST extend from ",(0,a.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Notifications\\Notification"),".")),(0,a.yg)("h3",{id:"folder-structure"},"Folder Structure"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"- app\n  - Containers\n    - {select-name}\n      - {container-name}\n        - Notifications\n          - UserRegisteredNotification.php\n          - ...\n  - Ship\n    - Notifications\n      - SystemFailureNotification.php\n      - ...\n")),(0,a.yg)("h3",{id:"code-samples"},"Code Samples"),(0,a.yg)("h4",{id:"a-simple-notification"},"A Simple Notification"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},'class BirthdayReminderNotification extends Notification implements ShouldQueue\n{\n    use Queueable;\n\n    protected $notificationMessage;\n\n    public function __construct($notificationMessage)\n    {\n        $this->notificationMessage = $notificationMessage;\n    }\n    \n    public function toArray($notifiable)\n    {\n        return [\n            \'content\' => $this->notificationMessage,\n        ];\n    }\n\n    public function toMail($notifiable)\n    {\n        // $notifiable is the object you want to notify "e.g. user"\n        return (new MailMessage)\n            ->subject("Hello World")\n            ->line("Hi, $notifiable->name")\n            ->line($this->notificationMessage);\n    }\n\n    public function toSms($notifiable)\n    {\n        // ...\n    }\n    \n    // ...\n}\n')),(0,a.yg)("h4",{id:"usage-from-an-action-or-task"},"Usage from an Action or Task"),(0,a.yg)("p",null,"Notifications can be sent from Actions or Tasks using the ",(0,a.yg)("inlineCode",{parentName:"p"},"Notification")," Facade.  "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"\\Notification::send($user, new BirthdayReminderNotification($notificationMessage));\n")),(0,a.yg)("p",null,"Alternatively you can use the ",(0,a.yg)("inlineCode",{parentName:"p"},"Illuminate\\Notifications\\Notifiable"),' trait on the notifiable object "e.g. User" and then call it as follows:'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"// call notify, found on the Notifiable trait\n$user->notify(new BirthdayReminderNotification($notificationMessage));\n")),(0,a.yg)("h2",{id:"select-channels"},"Select Channels"),(0,a.yg)("p",null,"To select a notification channel, apiato have the ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Configs/notification.php"),' config file where you can define the array of supported channels "e.g. SMS, Email, WebPush...", to be used for all your notifications.'),(0,a.yg)("p",null,"If you want to override the configuration for some notifications classes, or if you prefer to define the channels within each notification class itself,\nyou can override the ",(0,a.yg)("inlineCode",{parentName:"p"},"via")," function ",(0,a.yg)("inlineCode",{parentName:"p"},"public function via($notifiable)")," in the notification class and define your channels. "),(0,a.yg)("p",null,"Checkout ",(0,a.yg)("a",{parentName:"p",href:"http://laravel-notification-channels.com"},"laravel notification channels")," for list of supported integrations."),(0,a.yg)("h2",{id:"queueing"},"Queueing a Notification"),(0,a.yg)("p",null,"To queue a notification you should use ",(0,a.yg)("inlineCode",{parentName:"p"},"Illuminate\\Bus\\Queueable")," and implement ",(0,a.yg)("inlineCode",{parentName:"p"},"Illuminate\\Contracts\\Queue\\ShouldQueue"),"."),(0,a.yg)("h2",{id:"db-channel"},"Use DB channel"),(0,a.yg)("p",null,"Generally you need to generate the notification migration ",(0,a.yg)("inlineCode",{parentName:"p"},"php artisan notifications:table"),", then run ",(0,a.yg)("inlineCode",{parentName:"p"},"php artisan migrate"),",\nhowever just running the migration command will do the job, since Apiato already adds the ",(0,a.yg)("inlineCode",{parentName:"p"},"_create_notifications_table.php")," in the default migrations files directory ",(0,a.yg)("inlineCode",{parentName:"p"},"app/Ship/Migrations/"),"."),(0,a.yg)("admonition",{title:"Further reading",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"More info at ",(0,a.yg)("a",{parentName:"p",href:"https://laravel.com/docs/notifications"},"Laravel Docs"),".")))}f.isMDXComponent=!0}}]);