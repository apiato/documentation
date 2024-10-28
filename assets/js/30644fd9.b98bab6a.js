"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[1403],{49319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(74848),o=n(28453);const a={sidebar_position:3,title:"Contribution Guide"},s=void 0,r={id:"prologue/contribution-guide",title:"Contribution Guide",description:"Bug Reports",source:"@site/versioned_docs/version-12.x/prologue/contribution-guide.md",sourceDirName:"prologue",slug:"/prologue/contribution-guide",permalink:"/docs/prologue/contribution-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/prologue/contribution-guide.md",tags:[],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Contribution Guide"},sidebar:"tutorialSidebar",previous:{title:"Upgrade Guide",permalink:"/docs/prologue/upgrade-guide"},next:{title:"Release Notes",permalink:"/docs/prologue/release-notes"}},l={},c=[{value:"Bug Reports",id:"bug-reports",level:2},{value:"Support Questions",id:"support-questions",level:2},{value:"Core Development Discussion",id:"core-development-discussion",level:2},{value:"Which Branch?",id:"which-branch",level:2},{value:"Security Vulnerabilities",id:"security-vulnerabilities",level:2},{value:"Coding Style",id:"coding-style",level:2},{value:"PHPDoc",id:"phpdoc",level:3},{value:"GitHub Workflow",id:"github-workflow",level:3},{value:"Code of Conduct",id:"code-of-conduct",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"bug-reports",children:"Bug Reports"}),"\n",(0,i.jsx)(t.p,{children:'To encourage active collaboration, Apiato strongly encourages pull requests, not just bug reports.\nPull requests will only be reviewed when marked as "ready for review"\n(not in the "draft" state), and all tests for new features are passing.\nLingering, non-active pull requests left in the "draft" state will be closed after a few days.'}),"\n",(0,i.jsx)(t.p,{children:"However, if you file a bug report, your issue should contain a title and a clear description of the issue.\nYou should also include as much relevant information as possible and a code sample that demonstrates the issue.\nThe goal of a bug report is to make it easy for yourself - and others - to replicate the bug and develop a fix."}),"\n",(0,i.jsxs)(t.p,{children:["Remember,\nbug reports are created in the hope\nthat others with the same problem will be able to collaborate with you on solving it.\nDo not expect that the bug report will automatically see any activity or that others will jump to fix it.\nCreating a bug report serves to help yourself and others start on the path of fixing the problem.\nIf you want to chip in,\nyou can help out\nby fixing ",(0,i.jsx)(t.a,{href:"https://github.com/issues?q=is%3Aopen+is%3Aissue+user%3Aapiato",children:"any bugs\nlisted in our issue trackers"}),".\nYou must be authenticated with GitHub to view all of Apiato issues."]}),"\n",(0,i.jsx)(t.p,{children:"If you notice improper DocBlock, Psalm, or IDE warnings while using Apiato, do not create a GitHub issue.\nInstead, please submit a pull request to fix the problem."}),"\n",(0,i.jsx)(t.p,{children:"The Apiato source code is managed on GitHub, and there are repositories for each of the Apiato projects:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/laravel/laravel",children:"Apiato Application"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apiato/core",children:"Apiato Core"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apiato/documentation",children:"Apiato Documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apiato/localization-container",children:"Apiato Localization"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apiato/social-auth-container",children:"Apiato Social Authentication"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"support-questions",children:"Support Questions"}),"\n",(0,i.jsx)(t.p,{children:"Apiato GitHub issue trackers are not intended to provide Apiato help or support.\nInstead, use one of the following channels:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/discussions",children:"GitHub Discussions"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://discord.gg/ryPcV4KM5k",children:"Discord"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"core-development-discussion",children:"Core Development Discussion"}),"\n",(0,i.jsxs)(t.p,{children:["You may propose new features or improvements of existing Apiato behavior in the Apiato framework repository's ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/discussions",children:"GitHub discussion board"}),".\nIf you propose a new feature,\nplease be willing to implement at least some of the code that would be needed to complete the feature."]}),"\n",(0,i.jsx)(t.h2,{id:"which-branch",children:"Which Branch?"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"All"})," bug fixes should be sent to the latest version that supports bug fixes. Bug fixes should ",(0,i.jsx)(t.strong,{children:"never"})," be sent to the ",(0,i.jsx)(t.code,{children:"master"})," branch unless they fix features that exist only in the upcoming release."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Minor"})," features that are ",(0,i.jsx)(t.strong,{children:"fully backward compatible"})," with the current release may be sent to the latest stable branch."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Major"})," new features or features with breaking changes should always be sent to the ",(0,i.jsx)(t.code,{children:"master"})," branch, which contains the upcoming release."]}),"\n",(0,i.jsx)(t.h2,{id:"security-vulnerabilities",children:"Security Vulnerabilities"}),"\n",(0,i.jsxs)(t.p,{children:["If you discover a security vulnerability within Apiato,\nplease email Mohammad Alavi at ",(0,i.jsx)("a",{href:"mailto:mohammad.alavi1990@gmail.com",children:(0,i.jsx)(t.a,{href:"mailto:mohammad.alavi1990@gmail.com",children:"mohammad.alavi1990@gmail.com"})}),".\nAll security vulnerabilities will be promptly addressed."]}),"\n",(0,i.jsx)(t.h2,{id:"coding-style",children:"Coding Style"}),"\n",(0,i.jsxs)(t.p,{children:["Apiato follows the ",(0,i.jsx)(t.a,{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-12-extended-coding-style-guide.md",children:"PSR-12"})," coding standard with ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/blob/master/.php-cs-fixer.dist.php",children:"some modifications"})," and the ",(0,i.jsx)(t.a,{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md",children:"PSR-4"})," autoloading standard."]}),"\n",(0,i.jsx)(t.h3,{id:"phpdoc",children:"PHPDoc"}),"\n",(0,i.jsxs)(t.p,{children:["Below is an example of a valid Apiato documentation block.\nNote that the ",(0,i.jsx)(t.code,{children:"@param"})," attribute is followed by one space,\nthe argument type, one more space, and finally the variable name:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"    /**\n     * Register a binding with the container.\n     *\n     * @param string|array $abstract\n     * @param \\Closure|string|null $concrete\n     * @param bool $shared\n     * @return void\n     *\n     * @throws \\Exception\n     */\n    public function bind($abstract, $concrete = null, $shared = false)\n    {\n        // ...\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["When the ",(0,i.jsx)(t.code,{children:"@param"})," or ",(0,i.jsx)(t.code,{children:"@return"})," attributes are redundant due to the use of native types, they can be removed:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"    /**\n     * Execute the job.\n     */\n    public function handle(AudioProcessor $processor): void\n    {\n        //\n    }\n"})}),"\n",(0,i.jsxs)(t.p,{children:["However, when the native type is generic,\nplease specify the generic type through the use of the ",(0,i.jsx)(t.code,{children:"@param"})," or ",(0,i.jsx)(t.code,{children:"@return"})," attributes:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"    /**\n     * Get the attachments for the message.\n     *\n     * @return array<int, \\Illuminate\\Mail\\Mailables\\Attachment>\n     */\n    public function attachments(): array\n    {\n        return [\n            Attachment::fromStorage('/path/to/file'),\n        ];\n    }\n"})}),"\n",(0,i.jsx)(t.h3,{id:"github-workflow",children:"GitHub Workflow"}),"\n",(0,i.jsx)(t.p,{children:"Don't worry if your code styling isn't perfect!\nGitHub Actions will automatically merge any style fixes into the Apiato repository\nafter pull requests are merged.\nThis allows us to focus on the content of the contribution and not the code style."}),"\n",(0,i.jsx)(t.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,i.jsxs)(t.p,{children:["The Apiato code of conduct is derived from the Ruby code of conduct.\nAny violations of the code of conduct may be reported to Mohammad Alavi (",(0,i.jsx)(t.a,{href:"mailto:mohammad.alavi1990@gmail.com",children:"mohammad.alavi1990@gmail.com"}),"):"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Participants will be tolerant of opposing views."}),"\n",(0,i.jsx)(t.li,{children:"Participants must ensure that their language and actions are free of personal attacks and disparaging personal remarks."}),"\n",(0,i.jsx)(t.li,{children:"When interpreting the words and actions of others, participants should always assume good intentions."}),"\n",(0,i.jsx)(t.li,{children:"Behavior that can be reasonably considered harassment will not be tolerated."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);