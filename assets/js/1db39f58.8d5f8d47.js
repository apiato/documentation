"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=p(n),c=i,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||s;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[h]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={title:"Tests",tags:["component","optional-component","test"]},o=void 0,r={unversionedId:"components/optional-components/tests",id:"version-12.x/components/optional-components/tests",title:"Tests",description:"Apiato is built with testing in mind.",source:"@site/versioned_docs/version-12.x/components/optional-components/tests.md",sourceDirName:"components/optional-components",slug:"/components/optional-components/tests",permalink:"/docs/components/optional-components/tests",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/optional-components/tests.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"optional-component",permalink:"/docs/tags/optional-component"},{label:"test",permalink:"/docs/tags/test"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1697511591,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{title:"Tests",tags:["component","optional-component","test"]},sidebar:"tutorialSidebar",previous:{title:"Service Providers",permalink:"/docs/components/optional-components/service-providers"},next:{title:"Values",permalink:"/docs/components/optional-components/values"}},l={},p=[{value:"Definitions",id:"definitions",level:2},{value:"Unit tests",id:"unit-tests",level:4},{value:"Functional tests",id:"functional-tests",level:4},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Writing Tests",id:"writing-tests",level:2},{value:"Functional Test Helpers",id:"functional-test-helpers",level:2},{value:"Properties",id:"properties",level:3},{value:"endpoint",id:"endpoint",level:4},{value:"auth",id:"auth",level:4},{value:"access",id:"access",level:4},{value:"Methods",id:"methods",level:3},{value:"makeCall",id:"makecall",level:4},{value:"injectId",id:"injectid",level:4},{value:"getTestingUser",id:"gettestinguser",level:4},{value:"getTestingUserWithoutAccess",id:"gettestinguserwithoutaccess",level:4},{value:"endpoint",id:"endpoint",level:4},{value:"auth",id:"auth",level:4},{value:"Available Assertions",id:"available-assertions",level:2},{value:"assertModelCastsIsEmpty",id:"assertmodelcastsisempty",level:4},{value:"assertDatabaseTable",id:"assertdatabasetable",level:4},{value:"getGateMock",id:"getgatemock",level:4},{value:"inIds",id:"inids",level:4},{value:"Faker",id:"faker",level:2},{value:"Create Live Testing Data",id:"create-live-testing-data",level:2}],d={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apiato is built with testing in mind.\nIn fact,\nsupport for testing with PHPUnit is included out of the box\nand a ",(0,i.kt)("inlineCode",{parentName:"p"},"phpunit.xml")," file is already set up for your application.\nIn addition to the testing capabilities provided by Laravel,\nApiato enhances the testing experience by including convenient helper methods.\nThese methods enable you to write expressive tests for your applications, further enhancing the testing process.\nYou can refer to Laravel documentation on ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/http-tests"},"HTTP tests")," for more information on the available testing methods."),(0,i.kt)("p",null,"To generate new tests you may use the following interactive commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:generate:test:unit\nphp artisan apiato:generate:test:functional\nphp artisan apiato:generate:test:testcase\n")),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"unit-tests"},"Unit tests"),(0,i.kt)("p",null,"Unit tests are tests that focus on a very small, isolated portion of your code.\nIn fact, most unit tests probably focus on a single method."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"functional-tests"},"Functional tests"),(0,i.kt)("p",null,"Functional tests may test a larger portion of your code,\nincluding how several objects interact with each other or even a full HTTP request to a JSON endpoint.\nGenerally, most of your tests should be functional tests.\nThese types of tests provide the most confidence that your system as a whole is functioning as intended."),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All container-specific Unit tests:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/Tests/Unit")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\Tests\\UnitTestCase")," class."))),(0,i.kt)("li",{parentName:"ul"},"All ",(0,i.kt)("inlineCode",{parentName:"li"},"Ship")," Unit tests:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Ship/Tests/Unit")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Tests\\TestCase")," class."))),(0,i.kt)("li",{parentName:"ul"},"All API Functional tests:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/API/Tests/Functional")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\UI\\API\\Tests\\ApiTestCase")," class."))),(0,i.kt)("li",{parentName:"ul"},"All WEB Functional tests:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,i.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/WEB/Tests/Functional")," directory."),(0,i.kt)("li",{parentName:"ul"},"MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\UI\\WEB\\Tests\\WebTestCase")," class."))),(0,i.kt)("li",{parentName:"ul"},"All TestCases MUST extend the ",(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tests\\PhpUnit\\TestCase")," class. e.g.:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Tests\\TestCase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\Tests\\UnitTestCase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\UI\\API\\Tests\\ApiTestCase")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"App\\Containers\\{Section}\\{Container}\\UI\\WEB\\Tests\\WebTestCase")),(0,i.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,i.kt)("inlineCode",{parentName:"li"},"ParentTestCase"),".")))),(0,i.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u251c\u2500\u2500 Containers\n\u2502   \u2514\u2500\u2500 Section\n\u2502       \u2514\u2500\u2500 Container\n\u2502           \u251c\u2500\u2500 Tests\n\u2502           \u2502   \u251c\u2500\u2500 Unit\n\u2502           \u2502   \u2502   \u251c\u2500\u2500 CreateUserActionTest.php\n\u2502           \u2502   \u2502   \u251c\u2500\u2500 DeleteUserTaskTest.php\n\u2502           \u2502   \u2502   \u2514\u2500\u2500 ...\n\u2502           \u2502   \u2514\u2500\u2500 UnitTestCase.php\n\u2502           \u2514\u2500\u2500 UI\n\u2502               \u251c\u2500\u2500 API\n\u2502               \u2502   \u2514\u2500\u2500 Tests\n\u2502               \u2502       \u251c\u2500\u2500 Functional\n\u2502               \u2502       \u2502   \u251c\u2500\u2500 CreateUserTest.php\n\u2502               \u2502       \u2502   \u251c\u2500\u2500 DeleteUserTest.php\n\u2502               \u2502       \u2502   \u2514\u2500\u2500 ...\n\u2502               \u2502       \u2514\u2500\u2500 ApiTestCase.php\n\u2502               \u2514\u2500\u2500 WEB\n\u2502                   \u2514\u2500\u2500 Tests\n\u2502                       \u251c\u2500\u2500 Functional\n\u2502                       \u2502   \u251c\u2500\u2500 LoginTest.php\n\u2502                       \u2502   \u251c\u2500\u2500 LogoutTest.php\n\u2502                       \u2502   \u2514\u2500\u2500 ...\n\u2502                       \u2514\u2500\u2500 WebTestCase.php\n\u2514\u2500\u2500 Ship\n    \u2514\u2500\u2500 Tests\n        \u251c\u2500\u2500 Unit\n        \u2502   \u251c\u2500\u2500 UrlRuleTest.php\n        \u2502   \u2514\u2500\u2500 ...\n        \u2514\u2500\u2500 TestCase.php\n")),(0,i.kt)("h2",{id:"writing-tests"},"Writing Tests"),(0,i.kt)("p",null,"Unit tests are defined in the same manner as you would define them in Laravel.\nHowever, Functional tests follow a distinct approach.\nHere's an example of how to write functional tests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Containers\\AppSection\\User\\UI\\API\\Tests\\Functional;\n\nuse App\\Containers\\AppSection\\User\\UI\\API\\Tests\\ApiTestCase;\nuse Illuminate\\Testing\\Fluent\\AssertableJson;\n\n/**\n * @group user\n * @group api\n */\nclass FindUserByIdTest extends ApiTestCase\n{\n    protected string $endpoint = 'get@v1/users/{id}';\n    protected bool $auth = true;\n    protected array $access = [\n        'permissions' => 'search-users',\n        'roles' => '',\n    ];\n\n    public function testFindUser(): void\n    {\n        $user = $this->getTestingUser();\n\n        $response = $this->injectId($user->id)->makeCall();\n\n        $response->assertOk();\n        $response->assertJson(\n            static fn (AssertableJson $json) => $json->has('data')\n                    ->where('data.id', \\Hashids::encode($user->id))\n                    ->etc()\n        );\n    }\n}\n")),(0,i.kt)("p",null,"To learn more about the properties and methods used,\nsuch as ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"makeCall"),", please read to the following section."),(0,i.kt)("h2",{id:"functional-test-helpers"},"Functional Test Helpers"),(0,i.kt)("p",null,"Apiato provides a set of helper methods that you can use to write expressive functional tests."),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("p",null,"Certain test helper methods access properties defined in your test class to execute their tasks effectively.\nBelow, we will explore these properties and their corresponding methods:"),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"endpoint"},"endpoint"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," property is used\nto define the endpoints you want to access when making a call using the ",(0,i.kt)("inlineCode",{parentName:"p"},"makeCall")," method.\nIt is defined as a string in the following format: ",(0,i.kt)("inlineCode",{parentName:"p"},"method@url"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class FindUserByIdTest extends ApiTestCase\n{\n    // highlight-start\n    protected string $endpoint = 'get@v1/profile';\n    // highlight-end\n    \n    public function testGetAuthenticatedUser(): void\n    {\n        $user = $this->getTestingUser();\n\n        $response = $this->makeCall();\n        // You can override the \"endpoint\" property in specific test methods\n        // $response = $this->endpoint('get@v1/users')->makeCall();\n                \n        $response->assertOk();\n        // other assertions...\n    }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"auth"},"auth"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," property is used to determine whether the endpoint being called requires authentication or not in your test class.\nIf you do not explicitly define the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," property in your test class, it will be defaulted to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," automatically."),(0,i.kt)("p",null,"In the context of testing, when ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," is set to true,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"makeCall")," method will handle authentication by creating a testing user\n(if one is not already available) and injecting their access token into the headers before making the API call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ListUsersTest extends ApiTestCase\n{\n    protected string $endpoint = 'get@v1/users';\n    // highlight-start\n    protected bool $auth = false;\n    // highlight-end\n    \n    public function testListUsers(): void\n    {\n        $response = $this->makeCall();\n        // You can override the \"auth\" property in specific test methods\n        // $response = $this->auth(true)->makeCall();\n        \n        $response->assertOk();\n        // other assertions...\n    }\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"access"},"access"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," property is used\nto define roles or permissions that you want to assign to your testing users within a test class.\nWhen you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"getTestingUser")," method,\nthe testing user instance will automatically inherit all the roles and permissions specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," property."),(0,i.kt)("p",null,"By setting the desired roles and permissions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," property,\nyou can conveniently configure the testing user with the necessary access rights for your test scenarios.\nThis ensures that the testing user has the appropriate privileges when interacting with the application during testing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class DeleteUserTest extends ApiTestCase\n{\n    protected string $endpoint = 'delete@v1/users/{id}';\n    // highlight-start\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => 'admin',\n    ];\n    // highlight-end\n    \n    public function testDeleteUser(): void\n    {\n        // The testing user will have the \"delete-users\" permission and \"admin\" role.\n        // highlight-start\n        $user = $this->getTestingUser();\n        // highlight-end\n    \n        $response = $this->injectId($user->id)->makeCall();\n\n        $response->assertNoContent();        \n    }\n}\n")),(0,i.kt)("h3",{id:"methods"},"Methods"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#makecall"},"makeCall"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#injectid"},"injectId"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#getTestingUser"},"getTestingUser"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#getTestingUserWithoutAccess"},"getTestingUserWithoutAccess"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#endpoint"},"endpoint"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#auth"},"auth"),"  "),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"makecall"},"makeCall"),(0,i.kt)("p",null,"To make a request to your application, you may invoke the ",(0,i.kt)("inlineCode",{parentName:"p"},"makeCall")," method within your functional test.\nThis method combines the functionalities of ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/http-tests#testing-json-apis"},"Laravel HTTP test")," helpers with the ",(0,i.kt)("a",{parentName:"p",href:"#properties"},"properties"),"\ndefined in your functional test to make a request to the application."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"makeCall")," method returns an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Illuminate\\Testing\\TestResponse"),",\nwhich provides a variety of ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/http-tests#fluent-json-testing"},"helpful assertions"),"\nthat allow you to inspect your application's responses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->makeCall();\n\n$this->makeCall([\n    'email'    => $userDetails['email'],\n    'password' => $userDetails['password'],\n]);\n\n$this->makeCall($data, $headers);\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"injectid"},"injectId"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," method enables you to inject an ID into the endpoint you want to test within your functional tests."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// user with ID 100\n// endpoint = 'get@v1/users/{id}'\n\n$this->injectId($user->id)->makeCall();\n")),(0,i.kt)("p",null,"In this example, the original endpoint is ",(0,i.kt)("inlineCode",{parentName:"p"},"'get@v1/users/{id}'"),", and the desired ID to be injected is ",(0,i.kt)("inlineCode",{parentName:"p"},"100"),".\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," method is then called with these parameters.\nThe method replaces ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," in the endpoint with the provided ID,\nresulting in the modified endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"'get@v1/users/100'"),"."),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId"),"\nwill look for a string of ",(0,i.kt)("inlineCode",{parentName:"p"},"{id}")," in the endpoint to replace with the provided id. Remember\nto provide the third parameter if your endpoint expects an id with a different name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// endpoint = 'get@v1/users/{user_id}/articles/{id}'\n// You can also chain multiple `injectId` calls!\n\n$this->injectId($articles->id)->injectId($user->id, replace: '{user_id}')->makeCall();\n")),(0,i.kt)("p",null,"When the ",(0,i.kt)("a",{parentName:"p",href:"/docs/security/hash-id"},"Hash ID")," feature is enabled,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," method will automatically encode the provided ID before injecting it into the endpoint.\nHowever, you have the option to control this behavior by using the second parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," method,\n",(0,i.kt)("inlineCode",{parentName:"p"},"skipEncoding"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// endpoint = 'get@v1/users/{user_id}'\n\n// this will encode the id automatically\n$this->injectId($user->id, skipEncoding: false, replace: '{user_id}')->makeCall($data);\n// this will skip the encoding\n$this->injectId($user->getHashedKey(), skipEncoding: true, replace: '{user_id}')->makeCall($data);\n")),(0,i.kt)("p",null,"By utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," method, you can dynamically inject an ID into the endpoint,\nallowing you to test specific resources or scenarios that depend on resource identifiers."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"gettestinguser"},"getTestingUser"),(0,i.kt)("p",null,"When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"getTestingUser")," method,\nit returns a testing user instance with randomly generated attributes and all the roles and permissions\nspecified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," property.\nThis ensures that the testing user has the appropriate access rights for the defined roles and permissions.\nHowever,\nyou also have the flexibility\nto override these attributes and access rights by passing the desired values as arguments to the method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// The testing user will be created with randomly generated attributes \n// and will inherit the roles and permissions specified in the `access` property.\n$user = $this->getTestingUser();\n\n// The testing user will be created with the provided attributes and access rights.\n$user = $this->getTestingUser([\n    'email' => 'hello@mail.test',\n    'name' => 'Hello',\n    'password' => 'secret',\n], [\n    'permissions' => 'jump',\n    'roles' => 'jumper',\n]);\n")),(0,i.kt)("p",null,"Additionally, to create an admin user, you can pass ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," as the third argument when invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"getTestingUser"),".\nThis will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," state of ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Containers/AppSection/User/Data/Factories/UserFactory.php")," to create the testing user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$user = $this->getTestingUser(null, null, true);\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getTestingUser")," method is configured to work with the default Apiato configuration.\nHowever, if you are using a custom user model,\nyou will need to update the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/apiato.php"),".\nThis configuration file allows you\nto specify your custom user model and the corresponding model factory state for testing."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"gettestinguserwithoutaccess"},"getTestingUserWithoutAccess"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getTestingUserWithoutAccess")," method allows you to obtain a testing user instance that doesn't have any assigned permissions or roles.\nIt is a shortcut for ",(0,i.kt)("inlineCode",{parentName:"p"},"getTestingUser(null, null)"),".\nThis skips all the roles and permissions defined in your test class ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," property."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$user = $this->getTestingUserWithoutAccess();\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"endpoint"},"endpoint"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," method allows you to specify the endpoint you want to test within your functional tests.\nThis method is especially useful\nwhen you need to override the default endpoint that is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," property of the test class,\nspecifically for a particular test method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->endpoint('get@v1/register')->makeCall();\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The order in which you call ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoint")," method is crucial.\nMake sure to call it before ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," method,\nor else ",(0,i.kt)("inlineCode",{parentName:"p"},"injectId")," will not replace the ID in the overridden endpoint.")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"auth"},"auth"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," method allows you\nto specify the authentication status of the endpoint you want to test within your functional tests.\nThis method is especially useful\nwhen you need to override the default authentication status that is defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," property of the test class,\nspecifically for a particular test method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->auth(false)->makeCall();\n")),(0,i.kt)("h2",{id:"available-assertions"},"Available Assertions"),(0,i.kt)("p",null,"Apiato provides a variety of custom assertion methods that you may utilize when testing your application."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#assertModelCastsIsEmpty"},"assertModelCastsIsEmpty"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#assertDatabaseTable"},"assertDatabaseTable"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#getGateMock"},"getGateMock"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"#inIds"},"inIds")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"assertmodelcastsisempty"},"assertModelCastsIsEmpty"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"assertModelCastsIsEmpty")," method allows you to assert that the ",(0,i.kt)("inlineCode",{parentName:"p"},"casts")," property of a model is empty.\nBy default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"casts")," property of a model includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and,\nif the model is soft deletable, the ",(0,i.kt)("inlineCode",{parentName:"p"},"deleted_at"),".\nThis method excludes these default values from the assertion."),(0,i.kt)("p",null,"Here's an example of how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"assertModelCastsIsEmpty"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->assertModelCastsIsEmpty($model);\n")),(0,i.kt)("p",null,"In the code snippet above, ",(0,i.kt)("inlineCode",{parentName:"p"},"$model")," represents the instance of the model you want to test.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"assertModelCastsIsEmpty")," method will verify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"casts")," property of the model is empty,\nignoring the default ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"deleted_at")," values."),(0,i.kt)("p",null,"If you want to add additional values to the ignore list,\nyou can pass them as an array to the ",(0,i.kt)("inlineCode",{parentName:"p"},"assertModelCastsIsEmpty")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->assertModelCastsIsEmpty($model, ['value1', 'value2']);\n")),(0,i.kt)("p",null,"In this case, the assertion will ignore the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"deleted_at"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"value1"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"value2")," values when verifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"casts")," property of the model."),(0,i.kt)("p",null,"By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"assertModelCastsIsEmpty")," method,\nyou can verify that the ",(0,i.kt)("inlineCode",{parentName:"p"},"casts")," property of a model does not contain any unexpected values,\nensuring that the model's attributes are not automatically casted."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"assertdatabasetable"},"assertDatabaseTable"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available in v12.1.0 and above.")),(0,i.kt)("p",null,"This method is used\nto verify\nif the database table specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"table")," has the expected columns specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"expectedColumns")," array.\nThe array should be in the format ","['column_name' => 'column_type']",",\nwhere the column type is a string representing the expected data type of the column."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$this->assertDatabaseTable('users', ['id' => 'bigint']);\n")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"getgatemock"},"getGateMock"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Available in v12.1.0 and above.")),(0,i.kt)("p",null,"This assertion helps you to test whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gate::allows")," method is invoked with the correct arguments."),(0,i.kt)("p",null,"Let's\nconsider a scenario\nwhere a request class utilizes the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," method\nto determine whether a user has the necessary permissions to access a particular resource.\nThe primary objective is\nto test whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," method correctly invokes the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gate::allows")," method with the appropriate arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"// PUT '/users/{id}'\n\n// UpdateUserRequest.php\npublic function authorize(Gate $gate): bool\n{\n    // Here, we check if the user's id sent in the request has the necessary permissions to 'update'.\n    return $gate->allows('update', [User::find($this->id)]);\n}\n\n// UpdateUserRequestTest.php  \npublic function testAuthorizeMethodGateCall(): void\n{\n    $user = $this->getTestingUserWithoutAccess();\n    $request = UpdateUserRequest::injectData([], $user)\n        ->withUrlParameters(['id' => $user->id]);\n    // If the id is sent as a body parameter in the request, you can use the following:\n    // $request = UpdateUserRequest::injectData(['id' => $user->getHashedKey()], $ user);\n    \n    $gateMock = $this->getGateMock(policyMethodName: 'update', args: [\n        // Ensure you obtain a fresh model instance; using the $user variable directly will cause the test to fail.\n        User::find($user->id),\n    ]);\n    \n    $this->assertTrue($request->authorize($gateMock));\n}\n")),(0,i.kt)("p",null,"In this code, we're examining the testing of the ",(0,i.kt)("inlineCode",{parentName:"p"},"authorize")," method within a FormRequest class.\nThe main objective is to confirm that it appropriately interacts with Laravel's Gate functionality.\nThe test ensures that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Gate::allows")," method is invoked with the correct parameters,\nchecking if users have the required permissions to perform updates.\nIf the authorization logic is correctly implemented, this test should pass,\nensuring that only users with the necessary permissions can perform updates."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"inids"},"inIds"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"inIds")," method allows you to check if the given hashed ID exists within the provided model collection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$hashedId = 'hashed_123';\n$collection = Model::all();\n\n$isInCollection = $this->inIds($hashedId, $collection);\n")),(0,i.kt)("p",null,"By leveraging the ",(0,i.kt)("inlineCode",{parentName:"p"},"inIds")," method, you can streamline your testing process when working with hashed identifiers,\nensuring that the expected hashed IDs are present within your model collections."),(0,i.kt)("admonition",{title:"Deprecation Notice",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This method will be removed in the next major release and will not be available in the test file.\nInstead, it will be transformed into a helper function that you can utilize anywhere in your application.")),(0,i.kt)("h2",{id:"faker"},"Faker"),(0,i.kt)("p",null,"An instance of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FakerPHP/Faker"},"Faker")," is automatically provided in every test class, allowing you to generate fake data easily.\nYou can access it using ",(0,i.kt)("inlineCode",{parentName:"p"},"$this->faker"),"."),(0,i.kt)("admonition",{title:"Deprecation Notice",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This feature is deprecated and will be removed in the next major release.\nYou should use the Laravel ",(0,i.kt)("inlineCode",{parentName:"p"},"fake")," helper function instead.")),(0,i.kt)("h2",{id:"create-live-testing-data"},"Create Live Testing Data"),(0,i.kt)("p",null,"To test your application using live testing data,\nsuch as creating items in an inventory, you can utilize the feature designed specifically for this purpose.\nIt allows for the automatic generation of testing data,\nwhich can be helpful during staging or when real people are testing your application."),(0,i.kt)("p",null,"To create your live testing data, navigate to the ",(0,i.kt)("inlineCode",{parentName:"p"},"app/Ship/Seeder/SeedTestingData.php")," seeder class.\nWithin this class, you can define the logic and data generation process for your testing data."),(0,i.kt)("p",null,"Once you have defined your testing data,\nyou can run the following command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"php artisan apiato:seed-test\n")),(0,i.kt)("p",null,"This command triggers the seeding process specifically for testing data,\npopulating your application with the generated data."))}u.isMDXComponent=!0}}]);