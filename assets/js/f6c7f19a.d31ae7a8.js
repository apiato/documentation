(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),s=(n(0),n(218)),o={title:"Tests"},i={unversionedId:"optional-components/tests",id:"optional-components/tests",isDocsHomePage:!1,title:"Tests",description:"* Definition",source:"@site/docs/optional-components/tests.md",sourceDirName:"optional-components",slug:"/optional-components/tests",permalink:"/docs/next/optional-components/tests",editUrl:"https://github.com/apiato/documentation/tree/master/docs/optional-components/tests.md",version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1618727269,formattedLastUpdatedAt:"4/18/2021",frontMatter:{title:"Tests"},sidebar:"docs",previous:{title:"Criterias",permalink:"/docs/next/optional-components/criterias"},next:{title:"Migrations",permalink:"/docs/next/optional-components/migrations"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Principles",id:"principles",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Folder Structure",id:"folder-structure",children:[]},{value:"Code Sample",id:"code-sample",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#definition"},"Definition")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#principles"},"Principles")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#rules"},"Rules")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),Object(s.b)("h3",{id:"definition"},"Definition"),Object(s.b)("p",null,"Tests classes are created to test if the Application classes are working as expected."),Object(s.b)("p",null,"The two most essential Test types for this architecture are the Unit Tests and the Functional Tests. However, Integration and Acceptance Tests can be used as well."),Object(s.b)("h3",{id:"principles"},"Principles"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Containers MAY be covered by all types of Tests.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Use Functional Tests to test Container Routes are doing what's expected from them.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Use Unit Tests to test Container Actions and Tasks are doing what's expected from them."))),Object(s.b)("h3",{id:"rules"},"Rules"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"All Container Test classes SHOULD extend from a Container Internal TestCase class ",Object(s.b)("inlineCode",{parentName:"li"},"{container-name}/Tests/TestCase.php"),". The container ",Object(s.b)("strong",{parentName:"li"},"TestCase")," MUST extend main TestCase on Ship layer ",Object(s.b)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tests\\PhpUnit\\TestCase"),". ",Object(s.b)("em",{parentName:"li"},"(Adding functions to the container TestCase allows sharing those functions between all Test classes of the Container)"),".")),Object(s.b)("h3",{id:"folder-structure"},"Folder Structure"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Tests\n                    - TestCase.php // the container test case\n                    - Unit\n                        - CreateUserTest.php\n                        - UpdateUserTest.php\n                        - ...\n                - UI\n                    - API\n                        - Tests\n                            - Functional\n                                - LoginTest.php\n                                - LogoutTest.php\n                                - ...\n                    - WEB\n                        - Tests\n                            - Functional\n                                - LoginTest.php\n                                - LogoutTest.php\n                                - ...\n                    - CLI\n                        - Tests\n                            - Functional\n                                - BackupDataTest.php\n                                - ...\n")),Object(s.b)("h3",{id:"code-sample"},"Code Sample"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-php"},"class DeleteUserTest extends TestCase\n{\n    protected $endpoint = 'delete@v1/users/{id}';\n    \n    protected array $access = [\n        'roles' => '',\n        'permissions' => 'delete-users',\n    ];\n    \n    public function testDeleteExistingUser()\n    {\n        $user = $this->getTestingUser();\n\n        $response = $this->injectId($user->id)->makeCall();\n\n        $response->assertStatus(204);\n    }\n}\n")),Object(s.b)("blockquote",null,Object(s.b)("p",{parentName:"blockquote"},"See the ",Object(s.b)("a",{parentName:"p",href:"../miscellaneous/tests-helpers"},"Tests Helpers")," Page")))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||s;return n?a.a.createElement(m,i(i({ref:t},l),{},{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);