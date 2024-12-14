"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[1689],{91940:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"miscellaneous/tests-helpers","title":"Tests Helpers","description":"- Tests properties","source":"@site/versioned_docs/version-9.x/miscellaneous/tests-helpers.md","sourceDirName":"miscellaneous","slug":"/miscellaneous/tests-helpers","permalink":"/docs/9.x/miscellaneous/tests-helpers","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/miscellaneous/tests-helpers.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618096631000,"frontMatter":{"title":"Tests Helpers"},"sidebar":"docs","previous":{"title":"Magical Call","permalink":"/docs/9.x/miscellaneous/magical-call"},"next":{"title":"Tasks Scheduling","permalink":"/docs/9.x/miscellaneous/tasks-scheduling"}}');var i=n(74848),r=n(28453);const a={title:"Tests Helpers"},l=void 0,o={},c=[{value:"Tests properties",id:"tests-properties",level:2},{value:"<strong>$endpoint</strong>:",id:"endpoint",level:3},{value:"Override the property value in some test functions",id:"endpoint-override-the-property-value-in-some-test-functions",level:4},{value:"<strong>$auth</strong>:",id:"auth",level:3},{value:"Override the property value in some test functions",id:"auth-override-the-property-value-in-some-test-functions",level:4},{value:"<strong>$access</strong>:",id:"access",level:3},{value:"Override the property value in some test functions",id:"access-override-the-property-value-in-some-test-functions",level:4},{value:"Tests functions",id:"tests-functions",level:2},{value:"makeCall",id:"make-call",level:4},{value:"getTestingUser",id:"get-testing-user",level:4},{value:"Faker",id:"faker",level:2},{value:"Create live Testing Data",id:"create-live-testing-data",level:2},{value:"Debugging with PsySH",id:"debugging-with-PsySH",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#tests-properties",children:"Tests properties"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#endpoint",children:"$endpoint"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#auth",children:"$auth"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#access",children:"$access"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#tests-functions",children:"Tests functions"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#make-call",children:"makeCall"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#get-testing-user",children:"getTestingUser"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#faker",children:"Faker"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#create-live-testing-data",children:"Create live Testing Data"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#debugging-with-PsySH",children:"Debugging with PsySH"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Apiato provides additional helper functions, on top of the ",(0,i.jsx)(s.a,{href:"https://laravel.com/docs/master/http-tests",children:"Laravel's default Tests"}),",\nto make testing your API much faster and fun."]}),"\n",(0,i.jsx)(s.p,{children:"Writing functional tests, makes implementing, debugging and modifying a feature faster."}),"\n",(0,i.jsxs)(s.p,{children:["With apiato you just prepare the data you want to send for your POST request, call the ",(0,i.jsx)(s.code,{children:"call()"})," function and start\nasserting the response. Everything else is set for you. There are helper functions to create and prepare a testing user\nwith the right authorization (roles and permissions) for each request."]}),"\n",(0,i.jsx)(s.h2,{id:"tests-properties",children:"Tests properties"}),"\n",(0,i.jsx)(s.p,{children:"Some test helper functions reads your test class properties, to perform their jobs. below we will see those\nproperties and who uses them:"}),"\n",(0,i.jsxs)(s.h3,{id:"endpoint",children:[(0,i.jsx)(s.strong,{children:"$endpoint"}),":"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"$endpoint = 'verb@uri';"})," property is where you define the endpoints you are trying to access when calling\n",(0,i.jsx)(s.code,{children:"$this->makeCall()"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Example:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Tests\\Functional;\n\nuse App\\Containers\\User\\Tests\\TestCase;\n\nclass RegisterUserTest extends TestCase\n{\n\n    protected $endpoint = 'post@register';\n\n    protected $auth = false;\n\n    protected $access = [\n        'roles'       => '',\n        'permissions' => '',\n    ];\n\n    public function testRegisterNewUserWithCredentials_()\n    {\n        // prepare your post data\n        $data = [\n            'email'    => 'hello@mail.test',\n            'name'     => 'Mahmoud',\n            'password' => 'secret',\n        ];\n\n        // send the HTTP request\n        $response = $this->makeCall($data);\n\n        // assert response status is correct\n        $this->assertEquals('200', $response->getStatusCode());\n\n        // ... add all your assertions\n    }\n\n}\n"})}),"\n",(0,i.jsx)(s.h4,{id:"endpoint-override-the-property-value-in-some-test-functions",children:"Override the property value in some test functions"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"\n$response = $this->endpoint('get@myEndpoint')->makeCall();\n\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"auth",children:[(0,i.jsx)(s.strong,{children:"$auth"}),":"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"$auth = false;"})," property defines if the endpoint you are trying to call requires authentication or not. By default\n",(0,i.jsx)(s.code,{children:"$auth"})," is equal to true, also when not defined on your test class it will be default to true."]}),"\n",(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.code,{children:"$auth"})," is true, the ",(0,i.jsx)(s.code,{children:"makeCall()"})," will create a testing user if no one already found, and it will inject his\naccess token in the headers, before making the call."]}),"\n",(0,i.jsx)(s.p,{children:"So only use this property when your endpoint is not protected, example for the register and login tests."}),"\n",(0,i.jsx)(s.h4,{id:"auth-override-the-property-value-in-some-test-functions",children:"Override the property value in some test functions"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$response = $this->auth(false)->makeCall();\n"})}),"\n",(0,i.jsxs)(s.h3,{id:"access",children:[(0,i.jsx)(s.strong,{children:"$access"}),":"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"$access"})," property is where you define the permissions/roles that you need to give to your testing users in that\ntest class. So when using ",(0,i.jsx)(s.code,{children:"$user = $this->getTestingUser();"})," it will automatically take all the roles and permissions\nyou gave him."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"<?php\n\n    protected $access = [\n        'roles'         => 'admin', // or   ['client', 'admin']\n        'permissions'   => 'delete-users',\n    ];\n"})}),"\n",(0,i.jsx)(s.h4,{id:"access-override-the-property-value-in-some-test-functions",children:"Override the property value in some test functions"}),"\n",(0,i.jsxs)(s.p,{children:["Call the ",(0,i.jsx)(s.code,{children:"getTestingUser"})," and pass whichever roles and permissions to him."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"$this->getTestingUser(['permissions' => 'jump', 'roles' => 'jumper']);\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Or you can call ",(0,i.jsx)(s.code,{children:"getTestingUserWithoutAccess()"})," to get user without permissions and roles."]}),"\n",(0,i.jsx)(s.h2,{id:"tests-functions",children:"Tests functions"}),"\n",(0,i.jsxs)(s.p,{children:["All the test helper functions are provided by traits classes living inside ",(0,i.jsx)(s.code,{children:"app/Ship/Tests/*"})," folder,and they are all\navailable for usage from every test class in your application."]}),"\n",(0,i.jsx)(s.h4,{id:"make-call",children:"makeCall"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"makeCall(array $data = [], array $headers = [])"})," is one of the most important helper functions for an API."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"<?php\n\n$response = $this->makeCall();\n\n$response = $this->makeCall([\n    'email'    => $userDetails['email'],\n    'password' => $userDetails['password'],\n]);\n\n$response = $this->makeCall($data, $headers);\n\n$response = $this->endpoint('get@register')->makeCall($data);\n\n$response = $this->auth(false)->makeCall();\n\n$response = $this->endpoint('get@item/{id}')->injectId($user->id)->makeCall();\n"})}),"\n",(0,i.jsx)(s.h4,{id:"get-testing-user",children:"getTestingUser"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"getTestingUser($userDetails = null, $access = null)"})," is another very important helper function:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Usage:"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-php",children:"<?php\n\n$user = $this->getTestingUser();\n\n$user = $this->getTestingUser([\n    'email'    => 'hello@mail.test',\n    'name'     => 'Hello',\n    'password' => 'secret',\n]);\n\n"})}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NOTE:"})," Later all the test helper functions will be documented, meanwhile to see all the available functions\ncheck all the public functions in all the traits in this directory ",(0,i.jsx)(s.code,{children:"vendor/apiato/core/Traits/TestsTraits/PhpUnit/*"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"faker",children:"Faker"}),"\n",(0,i.jsxs)(s.p,{children:["Just use it from any test: ",(0,i.jsx)(s.code,{children:"$this->faker->name;"})]}),"\n",(0,i.jsx)(s.p,{children:"There's an instance of faker in every class."}),"\n",(0,i.jsxs)(s.p,{children:["Just use it: ",(0,i.jsx)(s.code,{children:"$this->faker->name;"})]}),"\n",(0,i.jsxs)(s.p,{children:["See the ",(0,i.jsx)(s.a,{href:".././optional-components/tests",children:"Tests"})," Page, for more details about the Tests components."]}),"\n",(0,i.jsx)(s.h2,{id:"create-live-testing-data",children:"Create live Testing Data"}),"\n",(0,i.jsx)(s.p,{children:"To test your app with some live testing data (like creating items in an inventory) you can use this feature to\nautomatically generate those data. This is also helpful for staging when real people are testing your app with some\ntesting data."}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Go to ",(0,i.jsx)(s.code,{children:"Seeder/SeedTestingData.php"})," seeder class, and create your live testing data."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Run this command ",(0,i.jsx)(s.code,{children:"php artisan apiato:seed-test"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"debugging-with-PsySH",children:"Debugging with PsySH"}),"\n",(0,i.jsx)(s.p,{children:"For better debugging and development, you can open a runtime developer console while executing your test."}),"\n",(0,i.jsxs)(s.p,{children:["Using ",(0,i.jsx)(s.a,{href:"http://psysh.org/",children:"PsySH"}),' (interactive debugger and REPL "read-eval-print loop" for PHP). ',(0,i.jsx)(s.em,{children:"The package is\nrequired by the Laravel Tinker Package."})]}),"\n",(0,i.jsxs)(s.p,{children:["To use it set the breakpoint ",(0,i.jsx)(s.code,{children:"eval(\\Psy\\sh());"})," anywhere you want in any Actions, Controllers, Tasks... and run your\ntest normally."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var t=n(96540);const i={},r=t.createContext(i);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);