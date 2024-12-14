"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[7974],{96526:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"main-components/views","title":"Views","description":"* Definition & Principles","source":"@site/versioned_docs/version-10.x/main-components/views.md","sourceDirName":"main-components","slug":"/main-components/views","permalink":"/docs/10.x/main-components/views","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-10.x/main-components/views.md","tags":[],"version":"10.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1619394104000,"frontMatter":{"title":"Views"},"sidebar":"docs","previous":{"title":"Models","permalink":"/docs/10.x/main-components/models"},"next":{"title":"Transformers","permalink":"/docs/10.x/main-components/transformers"}}');var o=i(74848),l=i(28453);const t={title:"Views"},r=void 0,c={},a=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-samples",level:3},{value:"Welcome page View",id:"welcome-page-view",level:4},{value:"Usage From Controller",id:"usage-from-controller",level:4},{value:"Namespaces",id:"namespaces",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#definition-principles",children:"Definition & Principles"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#rules",children:"Rules"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#code-sample",children:"Code Sample"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#namespaces",children:"Namespaces"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"definition-principles",children:"Definition & Principles"}),"\n",(0,o.jsxs)(n.p,{children:["Read ",(0,o.jsx)(n.a,{href:"https://github.com/Mahmoudz/Porto#Views",children:(0,o.jsx)(n.strong,{children:"Porto SAP Documentation (#Views)"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:" - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - UI\n                    - WEB\n                        - Views\n                            - welcome.php\n                            - profile.php\n                            - ...\n"})}),"\n",(0,o.jsx)(n.h3,{id:"code-samples",children:"Code Sample"}),"\n",(0,o.jsx)(n.h4,{id:"welcome-page-view",children:"Welcome page View"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome</title>\n</head>\n<body>\n    <div class="container">\n        <div class="content">\n            <div class="title">Welcome</div>\n        </div>\n    </div>\n</body>\n</html>\n'})}),"\n",(0,o.jsx)(n.h4,{id:"usage-from-controller",children:"Usage From Controller"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-php",children:"class Controller extends WebController\n{\n    public function sayWelcome()\n    {\n        return view('just-welcome');\n    }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["By default, all Views are namespaced as the camelCase of its Section name + ",(0,o.jsx)(n.code,{children:"@"})," + camelCase of its Container name."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For example, a view named ",(0,o.jsx)(n.code,{children:"welcome-page"})," inside ",(0,o.jsx)(n.code,{children:"MySection"})," > ",(0,o.jsx)(n.code,{children:"MyContainer"})," can be accessed like this: ",(0,o.jsx)(n.code,{children:"view(mySection@myContainer::welcome-page)"})]}),"\n",(0,o.jsxs)(n.p,{children:["If you try to access it without the namespace ",(0,o.jsx)(n.code,{children:"view('just-welcome')"}),", it will not find your View."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["View files in ",(0,o.jsx)(n.strong,{children:"Ship"}),' folder are exception to this and will be namespaced with the word "',(0,o.jsx)(n.strong,{children:"ship"}),'" instead of section name, e.g. ',(0,o.jsx)(n.code,{children:"view(ship::welcome-page)"})]})})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(96540);const o={},l=s.createContext(o);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);