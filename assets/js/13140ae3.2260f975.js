"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=s,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={title:"Tests"},o=void 0,i={unversionedId:"optional-components/tests",id:"version-11.x/optional-components/tests",title:"Tests",description:"* Definition",source:"@site/versioned_docs/version-11.x/optional-components/tests.md",sourceDirName:"optional-components",slug:"/optional-components/tests",permalink:"/docs/11.x/optional-components/tests",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-11.x/optional-components/tests.md",tags:[],version:"11.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1659346629,formattedLastUpdatedAt:"Aug 1, 2022",frontMatter:{title:"Tests"},sidebar:"version-11.x/docs",previous:{title:"Criterias",permalink:"/docs/11.x/optional-components/criterias"},next:{title:"Migrations",permalink:"/docs/11.x/optional-components/migrations"}},l={},p=[{value:"Definition",id:"definition",level:3},{value:"Principles",id:"principles",level:3},{value:"Rules",id:"rules",level:3},{value:"Folder Structure",id:"folder-structure",level:3},{value:"Code Sample",id:"code-sample",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#definition"},"Definition")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#principles"},"Principles")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rules"},"Rules")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#folder-structure"},"Folder Structure")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#code-sample"},"Code Sample"))),(0,s.kt)("h3",{id:"definition"},"Definition"),(0,s.kt)("p",null,"Tests classes are created to test if the Application classes are working as expected."),(0,s.kt)("p",null,"The two most essential Test types for this architecture are the Unit Tests and the Functional Tests. However, Integration and Acceptance Tests can be used as well."),(0,s.kt)("h3",{id:"principles"},"Principles"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Containers MAY be covered by all types of Tests.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use Functional Tests to test Container Routes are doing what's expected from them.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Use Unit Tests to test Container Actions and Tasks are doing what's expected from them."))),(0,s.kt)("h3",{id:"rules"},"Rules"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"All Container Test classes SHOULD extend from a Container Internal TestCase class ",(0,s.kt)("inlineCode",{parentName:"li"},"{container-name}/Tests/TestCase.php"),". The container ",(0,s.kt)("strong",{parentName:"li"},"TestCase")," MUST extend main TestCase on Ship layer ",(0,s.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Tests\\PhpUnit\\TestCase"),". ",(0,s.kt)("em",{parentName:"li"},"(Adding functions to the container TestCase allows sharing those functions between all Test classes of the Container)"),".")),(0,s.kt)("h3",{id:"folder-structure"},"Folder Structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," - app\n    - Containers\n        - {section-name}\n            - {container-name}\n                - Tests\n                    - TestCase.php // the container test case\n                    - Unit\n                        - CreateUserTest.php\n                        - UpdateUserTest.php\n                        - ...\n                - UI\n                    - API\n                        - Tests\n                            - Functional\n                                - LoginTest.php\n                                - LogoutTest.php\n                                - ...\n                    - WEB\n                        - Tests\n                            - Functional\n                                - LoginTest.php\n                                - LogoutTest.php\n                                - ...\n                    - CLI\n                        - Tests\n                            - Functional\n                                - BackupDataTest.php\n                                - ...\n")),(0,s.kt)("h3",{id:"code-sample"},"Code Sample"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"class DeleteUserTest extends TestCase\n{\n    protected $endpoint = 'delete@v1/users/{id}';\n    \n    protected array $access = [\n        'roles' => '',\n        'permissions' => 'delete-users',\n    ];\n    \n    public function testDeleteExistingUser()\n    {\n        $user = $this->getTestingUser();\n\n        $response = $this->injectId($user->id)->makeCall();\n\n        $response->assertStatus(204);\n    }\n}\n")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"See the ",(0,s.kt)("a",{parentName:"p",href:"../miscellaneous/tests-helpers"},"Tests Helpers")," Page")))}d.isMDXComponent=!0}}]);