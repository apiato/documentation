"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7361],{44753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(74848),r=n(28453);const o={title:"Contribution Guide"},s=void 0,a={id:"contribution-guide",title:"Contribution Guide",description:"Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions",source:"@site/versioned_docs/version-10.x/contribution-guide.md",sourceDirName:".",slug:"/contribution-guide",permalink:"/docs/10.x/contribution-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/contribution-guide.md",tags:[],version:"10.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591e3,frontMatter:{title:"Contribution Guide"},sidebar:"docs",previous:{title:"Upgrade Guide",permalink:"/docs/10.x/upgrade-guide"},next:{title:"Frequently Asked Questions",permalink:"/docs/10.x/faq"}},c={},d=[{value:"Code of Conduct",id:"code-of-conduct",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Coding Standards",id:"coding-standards",level:2},{value:"Git Branching Strategy",id:"git-branches",level:2},{value:"Example",id:"example",level:4},{value:"Adding New Features",id:"adding-new-features",level:2},{value:"Security Vulnerabilities",id:"security-vulnerabilities",level:2},{value:"Contribution Guides",id:"contributing-apiato",level:2},{value:"Contribution General Guidelines",id:"contribution-guidelines",level:3},{value:"Contributing to the Apiato Project",id:"contributing-project",level:3},{value:"SETUP",id:"setup",level:4},{value:"One time setup",id:"one-time-setup",level:5},{value:"USAGE (Contribution Steps)",id:"usage-contribution-steps",level:4},{value:"Must do every time before you contribute",id:"must-do-every-time-before-you-contribute",level:5},{value:"Contributing to the Documentation",id:"contributing-documentation",level:3},{value:"Contributing to the Code Generator",id:"contributing-generator",level:3},{value:"Add new component generator.",id:"add-new-component-generator",level:4},{value:"Making a new Release (for admins)",id:"new-release",level:3},{value:"Minor Release",id:"minor-release",level:4},{value:"Major Release",id:"major-release",level:4}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Thank you for your consideration to contribute. This project is powered and driven by its users, and contributions\nare ",(0,i.jsx)(t.strong,{children:"welcome"})," and will be fully ",(0,i.jsx)(t.strong,{children:"credited"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#code-of-conduct",children:"Code of Conduct"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#versioning",children:"Versioning"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#coding-standards",children:"Coding Standards"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#git-branches",children:"Git Branching Strategy"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#adding-new-features",children:"Adding New Features"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#security-vulnerabilities",children:"Security Vulnerabilities"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#contributing-apiato",children:"Contribution Guides"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#contribution-guidelines",children:"Contribution General Guidelines"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#contributing-project",children:"Contributing to the Apiato Project"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#contributing-documentation",children:"Contributing to the Documentation"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#contributing-generator",children:"Contributing to the Code Generator"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#new-release",children:"Making a new Release"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"code-of-conduct",children:"Code of Conduct"}),"\n",(0,i.jsxs)(t.p,{children:["Apiato follows the ",(0,i.jsx)(t.a,{href:"https://www.contributor-covenant.org/version/1/4/code-of-conduct",children:"Contributor Covenant"})," Code of Conduct."]}),"\n",(0,i.jsx)(t.h2,{id:"versioning",children:"Versioning"}),"\n",(0,i.jsxs)(t.p,{children:["The project is versioned under the ",(0,i.jsx)(t.a,{href:"http://semver.org/",children:"Semantic Versioning"})," guidelines."]}),"\n",(0,i.jsx)(t.h2,{id:"coding-standards",children:"Coding Standards"}),"\n",(0,i.jsxs)(t.p,{children:["The project is compliant with ",(0,i.jsx)(t.a,{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md",children:"PSR-1"})," Coding Standard,\n",(0,i.jsx)(t.a,{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md",children:"PSR-2"})," Coding Style and some of the\n",(0,i.jsx)(t.a,{href:"https://github.com/php-fig/fig-standards/blob/master/proposed/extended-coding-style-guide.md",children:"PSR-12"})," Styles."]}),"\n",(0,i.jsxs)(t.p,{children:["As well as it is compliant with ",(0,i.jsx)(t.a,{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-4-autoloader.md",children:"PSR-4"})," Autoloader.\n",(0,i.jsx)(t.em,{children:"If you notice any compliance oversights, you can send a pull request to address this issue."})]}),"\n",(0,i.jsx)(t.h2,{id:"git-branches",children:"Git Branching Strategy"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"master"})," branch contains the upcoming Apiato release.\nWhile the other branches are for all the stable releases (",(0,i.jsx)(t.code,{children:"7.0"}),", ",(0,i.jsx)(t.code,{children:"7.1"}),", ",(0,i.jsx)(t.code,{children:"8.0"}),"...)."]}),"\n",(0,i.jsxs)(t.p,{children:["Bug fixes should be sent to both (the latest stable branch) and to ",(0,i.jsx)(t.code,{children:"master"})," branch, unless they fix features that exist only in the upcoming release, then they should only be sent to ",(0,i.jsx)(t.code,{children:"master"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Major new features (and big changes) should always be sent to the ",(0,i.jsx)(t.code,{children:"master"})," branch, which contains the upcoming release."]}),"\n",(0,i.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Assuming that the current stable version is ",(0,i.jsx)(t.code,{children:"10.0"}),". The repository would have at least the following two branches ",(0,i.jsx)(t.code,{children:"master"})," and ",(0,i.jsx)(t.code,{children:"10.0"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If your PR contains a major change, or a braking change, or a new Container, then it must be sent to ",(0,i.jsx)(t.code,{children:"master"})," branch.\nIf your PR fixes a bug in the existing stable release then it should be sent to the latest release branch ",(0,i.jsx)(t.code,{children:"10.0"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"If you always contribute to Apiato, it's better to use the master branch instead of the latest release\nbranch, to always have the latest features and updates and would be good to merge the latest stable branch into your master from time to time, in case it has some bug fixes."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"adding-new-features",children:"Adding New Features"}),"\n",(0,i.jsxs)(t.p,{children:["If you have an idea for a new feature, it's a good idea to check out our ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/issues",children:"issues"}),"\nor active ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/pulls",children:"pull requests"})," first to see if the feature is already being worked on.\nIf not, feel free to submit an issue first (proposing the new feature), asking whether the feature is beneficial to the project. Then go ahead and submit your PR to the master branch."]}),"\n",(0,i.jsx)(t.h2,{id:"security-vulnerabilities",children:"Security Vulnerabilities"}),"\n",(0,i.jsxs)(t.p,{children:["If you discover a security vulnerability, please email ",(0,i.jsx)(t.code,{children:"support@apiato.io"}),"."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"contributing-apiato",children:"Contribution Guides"}),"\n",(0,i.jsx)(t.h3,{id:"contribution-guidelines",children:"Contribution General Guidelines"}),"\n",(0,i.jsx)(t.p,{children:"Important things to remember when contributing:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Run tests first"})," before writing any line of code, run the tests ",(0,i.jsx)(t.code,{children:"vendor/bin/phpunit"}),", and make sure all the tests are passing in your machine."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Keep your commits atomic"})," Each commit should represent a single unit of change. (Also, remember to write helpful commit messages.)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Write as many tests"})," Your changes must be covered with Tests (Functional or Unit). (Code without tests could be accepted in some cases)."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Ensure updating the documentation"})," the doc repo is there ",(0,i.jsx)(t.code,{children:"https://github.com/apiato/documentation"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Submit one feature/change per pull request."})," If you have multiple features/changes you wish to submit, please break them up into separate pull requests."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contributing-project",children:"Contributing to the Apiato Project"}),"\n",(0,i.jsx)(t.p,{children:"This guide will help you contribute to the Apiato project, while working on your personal project."}),"\n",(0,i.jsx)(t.p,{children:"If you added a feature/function to your local project or created a useful container or fixed a bug, This guide will\nshow you how to submit that change to Apiato."}),"\n",(0,i.jsx)(t.h4,{id:"setup",children:"SETUP"}),"\n",(0,i.jsx)(t.h5,{id:"one-time-setup",children:"One time setup"}),"\n",(0,i.jsx)(t.p,{children:"In this scenario let's assume we have the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Apiato"}),"     # is the starter/framework project"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"Project-A"}),"  # your personal project your building on top of Apiato"]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Create Project A from Apiato"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If you want to fix a bug on the latest stable release, your PR should be sent to the latest stable branch, thus you need\nto pull the latest stable release of Apiato."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"composer create-project apiato/apiato project-a"})}),"\n",(0,i.jsx)(t.p,{children:"If you want to add new features or do anything else that should be added to the next stable release, you need to pull\nthe master branch and submit your PR there."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"composer create-project apiato/apiato project-a --stability=dev"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Initialize git in Project A"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git init"})}),"\n",(0,i.jsx)(t.p,{children:"3.1) Set up your origin remote (to point to your project private repository url)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git remote add origin git@bitbucket.org:username/repo.git"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"if you already have origin remote then update it with"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git remote set-url origin git@bitbucket.org:username/project-a.git"})}),"\n",(0,i.jsx)(t.p,{children:"3.2) Set up an upstream remote (to point to your fork of the Apiato repository)"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"assuming you already forked the repository"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git remote add upstream git@github.com:username/apiato.git"})}),"\n",(0,i.jsx)(t.p,{children:"Now you should have the following remotes:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"git remote -vv\norigin      git@bitbucket.org:username/project-a.git (fetch)\norigin      git@bitbucket.org:username/project-a.git (push)\nupstream    git@github.com:username/apiato.git (fetch)\nupstream    git@github.com:username/apiato.git (push)\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"Do your first commit"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git add . && git commit -m 'first commit'"})}),"\n",(0,i.jsx)(t.p,{children:"5.1) Create apiato branch"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git checkout -b apiato"})}),"\n",(0,i.jsx)(t.p,{children:"5.2) Let the apiato branch track the upstream master branch"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git checkout apiato"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git branch --set-upstream-to upstream/master"})}),"\n",(0,i.jsx)(t.p,{children:"Now you should have the following branches:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"git branch -vv\n apiato           77b4d945 [upstream/master] ...\n master           77d302aa [origin/master] ...\n"})}),"\n",(0,i.jsx)(t.h4,{id:"usage-contribution-steps",children:"USAGE (Contribution Steps)"}),"\n",(0,i.jsx)(t.h5,{id:"must-do-every-time-before-you-contribute",children:"Must do every time before you contribute"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Update remotes (fetch)"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git fetch --all"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:"Go to the apiato branch"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git checkout apiato"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:"Sync apiato branch with upstream/master"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git reset --hard upstream/master"})}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:"Now you can cherry-pick the commits you'd like to contribute"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"4.1) First go to the apiato branch"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git checkout apiato"})}),"\n",(0,i.jsx)(t.p,{children:"4.2) Create a custom branch for your PR"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"git checkout -b feature-awesome"}),"  (must be created from apiato)"]}),"\n",(0,i.jsx)(t.p,{children:"4.3) Do the cherry-picking"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"git log master"}),"      (copy the commit ID)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"git cherry-pick {commit-ID}"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(repeat for all commits you want to submit)"})}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:"Push apiato branch to the upstream"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"git push upstream feature-awesome"}),"   (replace feature-awesome with your custom branch name)"]}),"\n",(0,i.jsxs)(t.ol,{start:"6",children:["\n",(0,i.jsx)(t.li,{children:"Create a Pull Request (PR) from your forked repository to the apiato official repository."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Make sure you create a PR from your custom branch ",(0,i.jsx)(t.code,{children:"feature-awesome"})," to ",(0,i.jsx)(t.code,{children:"master"})," (or the latest stable release)."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"We'll do our best to merge your PR in the shortest time possible. Thanks in advance :)"})}),"\n",(0,i.jsx)(t.h3,{id:"contributing-documentation",children:"Contributing to the Documentation"}),"\n",(0,i.jsxs)(t.p,{children:["This documentation is built using ",(0,i.jsx)(t.a,{href:"https://v2.docusaurus.io/",children:"Docusaurus 2"}),", a modern static website generator."]}),"\n",(0,i.jsxs)(t.p,{children:["The content lives in its own repository\n",(0,i.jsx)(t.a,{href:"https://github.com/apiato/documentation",children:"(apiato/documentation)"}),", in the ",(0,i.jsx)(t.code,{children:"docs/"})," folder."]}),"\n",(0,i.jsxs)(t.p,{children:["All you have to do is navigate to ",(0,i.jsx)(t.code,{children:"docs/"})," folder, find the markdown ",(0,i.jsx)(t.code,{children:".md"})," file that you want to update ",(0,i.jsx)(t.em,{children:"(all files\nare named as they are in the site menu)"}),", update or add the text, then commit."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"You do not need to build the site locally. Just edit the markdown files and submit your PR. GitHub will build the site for us."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Optionally, visit the ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/documentation",children:"(documentation repository)"})," for more information on how to install it locally."]}),"\n",(0,i.jsx)(t.h3,{id:"contributing-generator",children:"Contributing to the Code Generator"}),"\n",(0,i.jsxs)(t.p,{children:["The Code generator is in ",(0,i.jsx)(t.code,{children:"/core/Generator"}),".  The Core is in its own ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/core",children:"repository"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:['Each component command, "Except the Containers Generator" must extend from the ',(0,i.jsx)(t.code,{children:"Apiato\\Core\\Generator\\GeneratorCommand.php"}),".\nThis abstract class does all the work for you."]}),"\n",(0,i.jsx)(t.h4,{id:"add-new-component-generator",children:"Add new component generator."}),"\n",(0,i.jsxs)(t.p,{children:["General Info: the only function that gets called whenever a command is executed is the ",(0,i.jsx)(t.code,{children:"handle()"})," function. This\nfunction exists on the abstract class ",(0,i.jsx)(t.code,{children:"Apiato\\Core\\Generator\\GeneratorCommand"})," which does all the common job for all\nthe generator commands. For better understanding of how things work. Make sure you read that function."]}),"\n",(0,i.jsxs)(t.p,{children:["1 - Add create new command by copying and pasting any of the existing components commands already supported. The\n",(0,i.jsx)(t.code,{children:"Generator/Commands/RouteGenerator.php"})," is a great example."]}),"\n",(0,i.jsx)(t.p,{children:"For each generator you need to implement exactly one method (as it is defined in the respective interface)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"getUserInputs:"}),"\nThis method reads all parameters from the command line or provides a wizard to get information from the user.\nThe available options for this generator are specified using the ",(0,i.jsx)(t.code,{children:"public $inputs = []"})," variable in respective generator."]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsxs)(t.p,{children:["You do not need to specify the options for ",(0,i.jsx)(t.code,{children:"--section"}),", ",(0,i.jsx)(t.code,{children:"--container"})," or ",(0,i.jsx)(t.code,{children:"--file"}),", as these are handled directly by the\nGenerator itself. Simply add the options that are specifically needed for this generator."]})]}),"\n",(0,i.jsxs)(t.p,{children:["Be sure to read input with the ",(0,i.jsx)(t.code,{children:"checkParameterOrXYZ()"})," methods, as they automatically check if an option is available.\nOtherwise, they will ask the user for additional input."]}),"\n",(0,i.jsx)(t.p,{children:"The method must return an array of 3 keys:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"path-parameters"})," are used to replace variables within the path where the generator creates the file."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"file-parameters"})," are used to replace variables within the name of the file to be created."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"stub-parameters"})," are used to replace variables within the stub."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["2 - Create the stub to be loaded in ",(0,i.jsx)(t.code,{children:"Generator/Stubs"}),", copy any real component code and build the stub out of it."]}),"\n",(0,i.jsxs)(t.p,{children:["3 - Finally register the command in ",(0,i.jsx)(t.code,{children:"Generator/GeneratorsServiceProvider.php"})," using ",(0,i.jsx)(t.code,{children:"registerGenerators"}),", example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-php",children:"$this->registerGenerators([\n    ActionGenerator::class,\n    RouteGenerator::class,\n    TaskGenerator::class,\n    // ...\n]);\n"})}),"\n",(0,i.jsx)(t.p,{children:"4 - Default FileName & FileExtension(optional)"}),"\n",(0,i.jsxs)(t.p,{children:["You may provide another default filename or extension by overriding the ",(0,i.jsx)(t.code,{children:"getDefaultFileName()"})," or ",(0,i.jsx)(t.code,{children:"getDefaultFileExtension()"}),"\nmethod, which simply returns a ",(0,i.jsx)(t.code,{children:"string"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"new-release",children:"Making a new Release (for admins)"}),"\n",(0,i.jsxs)(t.p,{children:["1 - Merge the last ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/branches",children:"stable branch"})," in the master branch. (To get any new bug fixes.)\n2 - Decide on the next version number for the new release. By checking the current ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/releases",children:"releases"}),".\n3 - Update ",(0,i.jsx)(t.code,{children:"VERSION"})," value in ",(0,i.jsx)(t.code,{children:"/core/Foundation/Apiato.php"})," (example: ",(0,i.jsx)(t.code,{children:"const VERSION = '10.0.0';"}),")."]}),"\n",(0,i.jsx)(t.h4,{id:"minor-release",children:"Minor Release"}),"\n",(0,i.jsx)(t.p,{children:"Your PR with that minor changes should be submitted and merged into master."}),"\n",(0,i.jsxs)(t.p,{children:["1 - Go to ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/releases",children:"releases"})," and create a new one from the master branch.\n2 - Make sure you write a complete Changelog, in the release description.\n3 - If you updated the documentation, and you should! then visit the ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/documentation",children:"documentation"})," repository and merge the PR into master."]}),"\n",(0,i.jsx)(t.h4,{id:"major-release",children:"Major Release"}),"\n",(0,i.jsx)(t.p,{children:"Master is the branch that contains all the new changes.\nSo we need to create a new branch from master then make a release from that new branch."}),"\n",(0,i.jsxs)(t.p,{children:["1 - From master, checkout a new branch named as the version number you want to release. (Example ",(0,i.jsx)(t.code,{children:"10.0"}),").\n2 - Go to ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/releases",children:"releases"})," and create a new one from the branch created in the step above. (Example ",(0,i.jsx)(t.code,{children:"10.1"}),").\n3 - Make sure you write a complete Changelog, in the release description.\n4 - Change the ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/apiato/settings/branches",children:"default branch"})," on GitHub to that new branch.\n5 - If you updated the documentation, and you should! then visit the ",(0,i.jsx)(t.a,{href:"https://github.com/apiato/documentation",children:"documentation"})," repository and merge the PR into master."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);