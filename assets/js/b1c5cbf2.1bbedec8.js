"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7671],{23953:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"optional-components/mails","title":"Mails","description":"* Definition","source":"@site/versioned_docs/version-11.x/optional-components/mails.md","sourceDirName":"optional-components","slug":"/optional-components/mails","permalink":"/docs/11.x/optional-components/mails","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/mails.md","tags":[],"version":"11.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1659346629000,"frontMatter":{"title":"Mails"},"sidebar":"docs","previous":{"title":"Events","permalink":"/docs/11.x/optional-components/events"},"next":{"title":"Notifications","permalink":"/docs/11.x/optional-components/notifications"}}');var l=i(74848),t=i(28453);const a={title:"Mails"},r=void 0,o={},c=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Samples",id:"code-samples",level:3},{value:"A simple Mail",id:"a-simple-mail",level:4},{value:"Usage from an Action",id:"usage-from-an-action",level:4},{value:"Email Templates",id:"email-templates",level:2},{value:"Configure Emails",id:"configure-emails",level:2},{value:"Queueing A Notification",id:"queueing",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#definition",children:"Definition"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#principles",children:"Principles"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#rules",children:"Rules"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#code-samples",children:"Code Samples"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#email-templates",children:"Email Templates"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#configure-emails",children:"Configure Emails"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"#queueing",children:"Queueing"})}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"definition",children:"Definition"}),"\n",(0,l.jsx)(n.p,{children:"The Mail component allows you to describe an email and send it whenever needed."}),"\n",(0,l.jsx)(n.h3,{id:"principles",children:"Principles"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Containers MAY or MAY NOT have one or more Mail."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Ship may contain general Mails."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["All Notifications MUST extend from ",(0,l.jsx)(n.code,{children:"App\\Ship\\Parents\\Mails\\Mail"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:["Email Templates must be placed inside the Mail directory in a Templates directory ",(0,l.jsx)(n.code,{children:"app/Containers/{section}/{container}/Mails/Templates"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"- app\n  - Containers\n    - {section-name}\n      - {container-name}\n        - Mails\n          - UserRegisteredMail.php\n          - ...\n          - Templates\n            - user-registered.blade.php\n            - ...\n- Ship\n  - Mails\n    - SomeMail.php\n    - ...\n    - Templates\n      - some-template.blade.php\n      - ...\n"})}),"\n",(0,l.jsx)(n.h3,{id:"code-samples",children:"Code Samples"}),"\n",(0,l.jsx)(n.h4,{id:"a-simple-mail",children:"A simple Mail"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"class UserRegisteredMail extends Mail implements ShouldQueue\n{\n    use Queueable;\n\n    protected $user;\n\n    public function __construct(User $user)\n    {\n        $this->user = $user;\n    }\n\n    public function build()\n    {\n        return $this->view('appSection@user::user-registered')\n            ->to($this->user->email, $this->user->name)\n            ->with([\n                'name' => $this->user->name,\n            ]);\n    }\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"usage-from-an-action",children:"Usage from an Action"}),"\n",(0,l.jsxs)(n.p,{children:["Notifications can be sent from Actions or Tasks using the ",(0,l.jsx)(n.code,{children:"Mail"})," Facade."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"Mail::send(new UserRegisteredMail($user));\n"})}),"\n",(0,l.jsx)(n.h2,{id:"email-templates",children:"Email Templates"}),"\n",(0,l.jsxs)(n.p,{children:["Templates should be placed inside a folder ",(0,l.jsx)(n.code,{children:"Templates"})," inside the ",(0,l.jsx)(n.code,{children:"Mail"})," folder."]}),"\n",(0,l.jsxs)(n.p,{children:["To access a Mail template ",(0,l.jsx)(n.em,{children:"(same like accessing a web view)"})," you must call the camelCase of its Section name + ",(0,l.jsx)(n.code,{children:"@"})," + camelCase of its Container name."]}),"\n",(0,l.jsxs)(n.p,{children:["In the example below we're using the ",(0,l.jsx)(n.code,{children:"user-registered.blade.php"})," template in the ",(0,l.jsx)(n.code,{children:"AppSection"})," Section > ",(0,l.jsx)(n.code,{children:"User"})," Container."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-php",children:"$this->view('appSection@user::user-registered');\n"})}),"\n",(0,l.jsx)(n.h2,{id:"configure-emails",children:"Configure Emails"}),"\n",(0,l.jsxs)(n.p,{children:["Open the ",(0,l.jsx)(n.code,{children:".env"})," file and set the ",(0,l.jsx)(n.code,{children:"from"})," mail and address. This will be used globally whenever the ",(0,l.jsx)(n.code,{children:"from"})," function is not called in the Mail."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-env",children:'MAIL_FROM_ADDRESS=test@test.test\nMAIL_FROM_NAME="apiato"\n'})}),"\n",(0,l.jsxs)(n.p,{children:["To use different email address in some classes add ",(0,l.jsx)(n.code,{children:"->to($this->email, $this->name)"})," to the ",(0,l.jsx)(n.code,{children:"build"})," function in your Mail class."]}),"\n",(0,l.jsxs)(n.p,{children:["By default Apiato is configured to use Log Driver ",(0,l.jsx)(n.code,{children:"MAIL_DRIVER=log"}),", you can change that from the ",(0,l.jsx)(n.code,{children:".env"})," file."]}),"\n",(0,l.jsx)(n.h2,{id:"queueing",children:"Queueing A Notification"}),"\n",(0,l.jsxs)(n.p,{children:["To queue a notification you should use ",(0,l.jsx)(n.code,{children:"Illuminate\\Bus\\Queueable"})," and implement ",(0,l.jsx)(n.code,{children:"Illuminate\\Contracts\\Queue\\ShouldQueue"}),"."]}),"\n",(0,l.jsx)(n.admonition,{title:"Further reading",type:"info",children:(0,l.jsxs)(n.p,{children:["More info at ",(0,l.jsx)(n.a,{href:"https://laravel.com/docs/mail",children:"Laravel Docs"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(96540);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);