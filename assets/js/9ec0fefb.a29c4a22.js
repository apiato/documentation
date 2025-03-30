"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[6915],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}},36590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"main-components/transporters","title":"Transporters","description":"- Definition & Principles","source":"@site/versioned_docs/version-9.x/main-components/transporters.md","sourceDirName":"main-components","slug":"/main-components/transporters","permalink":"/docs/9.x/main-components/transporters","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/main-components/transporters.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618096631000,"frontMatter":{"title":"Transporters"},"sidebar":"docs","previous":{"title":"Requests","permalink":"/docs/9.x/main-components/requests"},"next":{"title":"Actions","permalink":"/docs/9.x/main-components/actions"}}');var a=t(74848),s=t(28453);const o={title:"Transporters"},i=void 0,c={},l=[{value:"Definition &amp; Principles",id:"definition-principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3},{value:"Optionally switch between Requests and Transporters",id:"requests-and-transporters",level:3},{value:"Transforming a Request to a Transporter",id:"transforming-a-request-to-a-transporter",level:4},{value:"Set Data",id:"set-data",level:3},{value:"Set Instance",id:"set-instance",level:4},{value:"Get Instance:",id:"get-instance",level:4},{value:"Get Data",id:"get-data",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#definition-principles",children:"Definition & Principles"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#rules",children:"Rules"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#folder-structure",children:"Folder Structure"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#code-sample",children:"Code Sample"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#requests-and-transporters",children:"Requests and Transporters"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#set-data",children:"Set Data"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#get-data",children:"Get Data"})}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"definition-principles",children:"Definition & Principles"}),"\n",(0,a.jsx)(n.p,{children:"Transporters is a name chosen by Apiato for DTO's (Data Transfer Objects).\nTransporters are used to pass user data (coming from Requests, Commands, or other places) from place to another (Actions to Tasks / Controller to Action / Command to Action / ...)."}),"\n",(0,a.jsx)(n.p,{children:"They are very useful for reducing the number of parameters in functions, which prevents the duplication of the long parameters."}),"\n",(0,a.jsxs)(n.p,{children:["Apiato uses ",(0,a.jsx)(n.a,{href:"https://github.com/fireproofsocks/dto",children:"this package"})," for the DTO. Refer to the ",(0,a.jsx)(n.a,{href:"https://github.com/fireproofsocks/dto/wiki",children:"dto package wiki"})," for more details."]}),"\n",(0,a.jsx)(n.h3,{id:"rules",children:"Rules"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["All Models MUST extend from ",(0,a.jsx)(n.code,{children:"App\\Ship\\Parents\\Transporters\\Transporter"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" - App\n    - Containers\n        - {container-name}\n            - Data\n                - Transporters\n                    - CreateUserTransporter.php\n                    - ...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"code-sample",children:"Code Sample"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Transporter class"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\Authentication\\Transporters;\n\nuse App\\Ship\\Parents\\Transporters\\Transporter;\n\nclass ProxyApiLoginTransporter extends Transporter\n{\n\n    /**\n     * @var array\n     */\n    protected $schema = [\n        'properties' => [\n            'email',\n            'password',\n            'client_id',\n            'client_password',\n            'grant_type',\n            'scope',\n        ],\n        'required'   => [\n            'email',\n            'password',\n            'client_id',\n            'client_password',\n        ],\n        'default'    => [\n            'scope' => '',\n        ]\n    ];\n}\n\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Usage from Controller"})}),"\n",(0,a.jsx)(n.p,{children:"Normally you would use it like this"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$dataTransporter = new DataTransporter($request);\n$dataTransporter->bearerToken = $request->bearerToken();\n\nApiato::call('Authentication@ApiLogoutAction', [$dataTransporter]);\n"})}),"\n",(0,a.jsx)(n.p,{children:"Since this example above has some required data, that data must be sent to the constructor:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$dataTransporter = new ProxyApiLoginTransporter(\n    array_merge($request->all(), [\n        'client_id'       => Config::get('authentication-container.clients.web.admin.id'),\n        'client_password' => Config::get('authentication-container.clients.web.admin.secret')\n    ])\n);\n\n$result = Apiato::call('Authentication@ProxyApiLoginAction', [$dataTransporter]);\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Creating a Transporter from Test"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$data = [\n\t'foo' => 'bar'\n];\n\n$transporter = new DataTransporter($data);\n$action = App::make(RegisterUserAction::class);\n\n$user = $action->run($transporter);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"requests-and-transporters",children:"Optionally switch between Requests and Transporters"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// if you have the following function signature\npublic function run(DataTransporter $data)\n\n// you would pass a DataTransporter to it\n$user = Apiato::call('MyContainer@myAction', [new DataTransporter($request)]);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// if you have the following function signature\npublic function run(Request $data)\n\n// you would pass a Request to it\n$user = Apiato::call('MyContainer@myAction', [$request]);\n\n// if request has Transporter defined on it, it will be the one passed to the Action. So the Action can even type hint the custom Transporter defined on the Request.\n"})}),"\n",(0,a.jsx)(n.p,{children:"Here where the magic happens:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// if you have the following function signature\npublic function run(Request $data)\n\n// you can pass a DataTransporter to it, only if you are using the magical call function, for the magic to work\n$user = Apiato::call('MyContainer@myAction', [new DataTransporter($request)]);\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// if you have the following function signature\npublic function run(DataTransporter $data)\n\n// you can pass a DataTransporter to it, only if you are using the magical call function, for the magic to work\n$user = Apiato::call('MyContainer@myAction', [$request]);\n\n// if request has Transporter defined on it, it will be the one passed to the Action. So the Action can even type hint the custom Transporter defined on the Request.\n"})}),"\n",(0,a.jsx)(n.h4,{id:"transforming-a-request-to-a-transporter",children:"Transforming a Request to a Transporter"}),"\n",(0,a.jsxs)(n.p,{children:["If you want to directly transform a ",(0,a.jsx)(n.code,{children:"Request"})," to a ",(0,a.jsx)(n.code,{children:"Transporter"})," you can simply call"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$transporter = $request->toTransporter();\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This method does take the ",(0,a.jsx)(n.code,{children:"protected $transporter"})," of the ",(0,a.jsx)(n.code,{children:"Request"})," class into account. If none is defined, a regular ",(0,a.jsx)(n.code,{children:"DataTransporter"})," will be created."]}),"\n",(0,a.jsxs)(n.p,{children:["Note, that ",(0,a.jsx)(n.code,{children:"$transporter"})," will now have all fields from ",(0,a.jsx)(n.code,{children:"$request"})," - so you can directly access them. In order to do so,\nyou can call:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"// \"simple\" access via direct properties\n$name = $transporter->name;\n\n// complex access via method\n$username = $transporter->getInputByKey('your.nested.username.field');\n"})}),"\n",(0,a.jsxs)(n.p,{children:['Of course, you can also "sanitize" the data, like you would have done in the ',(0,a.jsx)(n.code,{children:"Request"})," classes by using ",(0,a.jsx)(n.code,{children:"sanitizeInput(array)"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Finally, if you need to access the original ",(0,a.jsx)(n.code,{children:"Request"})," object, you can access it via"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$originalRequest = $transporter->request;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"set-data",children:"Set Data"}),"\n",(0,a.jsx)(n.p,{children:"You can set data in many ways"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$dataTransporter = new DataTransporter($request);\n$dataTransporter->bearerToken = $request->bearerToken();\n"})}),"\n",(0,a.jsx)(n.p,{children:"If the data is defined as required like this on the Transporter:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"    protected $schema = [\n        'type' => 'object',\n        'properties' => [\n            'email',\n            'password',\n            'clientId',\n            'clientPassword',\n        ],\n        'required'   => [\n            'email',\n            'password',\n            'clientId',\n            'clientPassword',\n        ],\n    ];\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then can set data on the Transporter like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$dataTransporter = new ProxyApiLoginTransporter(\n    array_merge($request->all(), [\n        'clientId'       => Config::get('authentication-container.clients.web.admin.id'),\n        'clientPassword' => Config::get('authentication-container.clients.web.admin.secret')\n    ])\n);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"set-instance",children:"Set Instance"}),"\n",(0,a.jsx)(n.p,{children:"Passing Objects does not work!, because the third party package cannot hydrate it. So to pass instances from a place to\nanother on the Transporter object, you can do the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:'$transporter = new DataTransporter();\n$transporter->setInstance("command_instance", $this);\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning:"})," you can set instances, but they do not appear when calling ",(0,a.jsx)(n.code,{children:"toArray()"})," or other similar functions, since\nthey cannot be hydrated. See below how you can get the instance form the Transporter object."]}),"\n",(0,a.jsx)(n.h4,{id:"get-instance",children:"Get Instance:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-php",children:"$console = $data->command_instance;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"get-data",children:"Get Data"}),"\n",(0,a.jsxs)(n.p,{children:["To get all data from the Transporter you can call ",(0,a.jsx)(n.code,{children:"$data->toArray()"})," or ",(0,a.jsx)(n.code,{children:"$data->toJson()"}),"... there are many other functions on the class."]}),"\n",(0,a.jsxs)(n.p,{children:["To get specific data just call the data name, as you would when accessing data from a Request object ",(0,a.jsx)(n.code,{children:"$data->username"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);