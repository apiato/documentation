"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[4195],{74183:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(74848),i=s(28453);const r={sidebar_position:3,title:"Requests",tags:["component","main-component","request","route","controller","action"]},a=void 0,o={id:"components/main-components/requests",title:"Requests",description:"Requests components are a way to interact with the current HTTP request",source:"@site/docs/components/main-components/requests.md",sourceDirName:"components/main-components",slug:"/components/main-components/requests",permalink:"/docs/next/components/main-components/requests",draft:!1,unlisted:!1,editUrl:"https://github.com/apiato/documentation/tree/master/docs/components/main-components/requests.md",tags:[{inline:!0,label:"component",permalink:"/docs/next/tags/component"},{inline:!0,label:"main-component",permalink:"/docs/next/tags/main-component"},{inline:!0,label:"request",permalink:"/docs/next/tags/request"},{inline:!0,label:"route",permalink:"/docs/next/tags/route"},{inline:!0,label:"controller",permalink:"/docs/next/tags/controller"},{inline:!0,label:"action",permalink:"/docs/next/tags/action"}],version:"current",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1707555342e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Requests",tags:["component","main-component","request","route","controller","action"]},sidebar:"tutorialSidebar",previous:{title:"Controllers",permalink:"/docs/next/components/main-components/controllers"},next:{title:"Actions",permalink:"/docs/next/components/main-components/actions"}},l={},d=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Validation",id:"validation",level:2},{value:"Request Properties",id:"request-properties",level:2},{value:"access",id:"access",level:3},{value:"decode",id:"decode",level:3},{value:"urlParameters",id:"urlparameters",level:3},{value:"Helper Methods",id:"helper-methods",level:2},{value:"hasAccess",id:"hasaccess",level:3},{value:"sanitizeInput",id:"sanitizeinput",level:3},{value:"getInputByKey",id:"getinputbykey",level:3},{value:"mapInput",id:"mapinput",level:3},{value:"injectData",id:"injectdata",level:3},{value:"withUrlParameters",id:"withurlparameters",level:3},{value:"Bypassing Authorization",id:"bypassing-authorization",level:2},{value:"Force Accept Header",id:"force-accept-header",level:2},{value:"Etag",id:"etag",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://laravel.com/docs/requests",children:"Requests"})," components are a way to interact with the current HTTP request\nbeing handled by your application as well as retrieve the input,\ncookies, and files that were submitted with the request."]}),"\n",(0,t.jsxs)(n.p,{children:["To generate new requests you may use the ",(0,t.jsx)(n.code,{children:"apiato:generate:request"})," interactive command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan apiato:generate:request\n"})}),"\n",(0,t.jsx)(n.h2,{id:"definition--principles",children:"Definition & Principles"}),"\n",(0,t.jsxs)(n.p,{children:["Read ",(0,t.jsx)(n.a,{href:"https://github.com/Mahmoudz/Porto#definitions--principles",children:(0,t.jsx)(n.strong,{children:"Porto SAP Documentation (#Requests)"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"rules",children:"Rules"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Validation rules MUST be defined in the ",(0,t.jsx)(n.code,{children:"rules"})," method."]}),"\n",(0,t.jsxs)(n.li,{children:["All API Requests MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/UI/API/Requests"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["All Web Requests MUST be placed in the ",(0,t.jsx)(n.code,{children:"app/Containers/{Section}/{Container}/UI/WEB/Requests"})," directory."]}),"\n",(0,t.jsxs)(n.li,{children:["All Requests:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["MUST extend the ",(0,t.jsx)(n.code,{children:"App\\Ship\\Parents\\Requests\\Request"})," class.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The parent extension SHOULD be aliased as ",(0,t.jsx)(n.code,{children:"ParentRequest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["MUST have a public ",(0,t.jsx)(n.code,{children:"rules"})," method, returning an array of validation rules."]}),"\n",(0,t.jsxs)(n.li,{children:["MUST have a public ",(0,t.jsx)(n.code,{children:"authorize"})," method, returning a boolean value."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markdown",children:"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u251c\u2500\u2500 API\n                \u2502   \u2514\u2500\u2500 Requests\n                \u2502       \u251c\u2500\u2500 CreateUserRequest.php\n                \u2502       \u251c\u2500\u2500 DeleteUserRequest.php\n                \u2502       \u2514\u2500\u2500 ...\n                \u2514\u2500\u2500 WEB\n                    \u2514\u2500\u2500 Requests\n                        \u251c\u2500\u2500 Login.php\n                        \u251c\u2500\u2500 Logout.php\n                        \u2514\u2500\u2500 ...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"code-example",children:"Code Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use App\\Ship\\Parents\\Requests\\Request as ParentRequest;\n\nclass DemoRequest extends ParentRequest\n{\n    protected array $access = [];\n    protected array $decode = [];\n    protected array $urlParameters = [];\n\n    public function rules(): array\n    {\n        return [\n            'field' => 'min:3|max:50',\n        ];\n    }\n\n    public function authorize(): bool\n    {\n        return true;\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"validation",children:"Validation"}),"\n",(0,t.jsxs)(n.p,{children:["In Apiato,\nvalidation of incoming requests follows the\nLaravel ",(0,t.jsx)(n.a,{href:"https://laravel.com/docs/validation#form-request-validation",children:"Form Request Validation"})," approach."]}),"\n",(0,t.jsx)(n.p,{children:"Validation rules are defined within the respective Request class.\nThese rules are automatically enforced when a Request is injected into a Controller."}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of a Request class with validation rules:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use App\\Ship\\Parents\\Requests\\Request as ParentRequest;\n\nclass RegisterUserRequest extends ParentRequest\n{\n    public function rules(): array\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => ['required', 'min:2', 'max:400'],\n        ];\n    }\n\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"And here's how you would use this Request class within a Controller:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"public function __invoke(RegisterUserRequest $request)\n{\n    $user = app(RegisterUserAction::class)->run($request);\n    \n    return $this->transform($user, UserTransformer::class);\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example,\nthe validation rules defined in ",(0,t.jsx)(n.code,{children:"RegisterUserRequest"})," will be automatically applied\nbefore the ",(0,t.jsx)(n.code,{children:"__invoke"})," method is executed.\nIf the validation fails, an appropriate error response will be generated."]}),"\n",(0,t.jsx)(n.h2,{id:"request-properties",children:"Request Properties"}),"\n",(0,t.jsx)(n.p,{children:"Apiato introduces new properties to the Request Class that enhance its functionality."}),"\n",(0,t.jsx)(n.h3,{id:"access",children:"access"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"$access"})," property allows you to define Roles and Permissions that can access a specific endpoint.\nIt's used by the ",(0,t.jsx)(n.code,{children:"hasAccess"})," method to check if a user has the required Roles and Permissions to use that endpoint."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"class DemoRequest extends ParentRequest\n{\n    protected array $access = [\n        'permissions' => 'delete-users',\n        'roles' => 'manager'\n    ];\n\n    public function authorize(): bool\n    {\n        return $this->hasAccess();\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the ",(0,t.jsx)(n.code,{children:"array notation"})," or ",(0,t.jsx)(n.code,{children:"pipe"})," to define multiple Roles and Permissions."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"class DemoRequest extends ParentRequest\n{\n    protected $access = [\n        'permissions' => ['delete-users', 'another-permissions'],\n        'roles' => 'manager|admin',\n    ];\n        \n    // ...\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["If there's no need to set any roles or permissions,\nyou can simply set the ",(0,t.jsx)(n.code,{children:"$permissions"})," or ",(0,t.jsx)(n.code,{children:"$roles"})," property to an empty string ",(0,t.jsx)(n.code,{children:"''"}),", an empty array ",(0,t.jsx)(n.code,{children:"[]"}),", or ",(0,t.jsx)(n.code,{children:"null"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"decode",children:"decode"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"$decode"})," property is used to handle the decoding of Hashed IDs from the incoming Request."]}),"\n",(0,t.jsxs)(n.p,{children:["When you enable the ",(0,t.jsx)(n.a,{href:"/docs/next/security/hash-id",children:"Hash ID"})," feature, your application can receive Hashed IDs from users.\nThese Hashed IDs need to be decoded before they can be effectively validated.\nApiato facilitates this process\nby providing a property in its Requests class where you can specify which Hashed IDs need to be decoded.\nThis ensures that the validation procedure seamlessly integrates with Hashed IDs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"class DemoRequest extends ParentRequest\n{\n    protected array $decode = [\n        'user_id',\n        'item_id',\n    ];\n    \n    // ...\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Keep in mind that validation rules relying on your ID, such as ",(0,t.jsx)(n.code,{children:"exists:users,id"}),",\nwill not function correctly unless you decode the ID before passing it to the validation process."]})}),"\n",(0,t.jsx)(n.h3,{id:"urlparameters",children:"urlParameters"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"$urlParameters"})," property simplifies the process of applying validation rules to URL parameters."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, Laravel doesn't provide validation for URL parameters (",(0,t.jsx)(n.code,{children:"/stores/999/items"}),").\nHowever, by using the ",(0,t.jsx)(n.code,{children:"$urlParameters"})," property, you can enable validation for these parameters.\nBy specifying the desired URL parameters within this property,\nyou not only enable validation but also gain direct access to these parameters from the Request object."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"// URL: /stores/{id}/items\n// GET /stores/999/items\nclass DemoRequest extends ParentRequest\n{\n    protected array $urlParameters = [\n        'id',\n    ];\n\n    public function rules(): array\n    {\n        return [\n            'id'   => 'integer', // url parameter\n        ];\n    }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"helper-methods",children:"Helper Methods"}),"\n",(0,t.jsx)(n.h3,{id:"hasaccess",children:"hasAccess"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"hasAccess"})," method assesses a user's access rights based on the Request's ",(0,t.jsx)(n.code,{children:"$access"})," property.\nIf the user has any of the specified Roles or Permissions, the method will return ",(0,t.jsx)(n.code,{children:"true"})," otherwise it will\nreturn ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"sanitizeinput",children:"sanitizeInput"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sanitizeInput"})," method is employed to cleanse request data before its utilization within the application."]}),"\n",(0,t.jsxs)(n.p,{children:["Particularly useful for ",(0,t.jsx)(n.code,{children:"PATCH"})," requests,\nwhere you may want\nto submit only the fields\nintended for modification to minimize traffic or perform partial updates to the corresponding database resource.\nTraditional checks for the presence or absence of specific keys in the request can lead to extensive ",(0,t.jsx)(n.code,{children:"if"})," blocks,\nsuch as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"if ($request->has('data.name')) {\n   $data['name'] = $request->input('data.name');\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To circumvent these ",(0,t.jsx)(n.code,{children:"if"})," blocks, you might utilize ",(0,t.jsx)(n.code,{children:"array_filter($data)"})," to remove empty fields from the request.\nHowever, be aware that in PHP, both ",(0,t.jsx)(n.code,{children:"false"})," and an empty string ",(0,t.jsx)(n.code,{children:"''"})," are considered as ",(0,t.jsx)(n.code,{children:"empty"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For streamlining data sanitization when using ",(0,t.jsx)(n.code,{children:"application/json"})," instead of ",(0,t.jsx)(n.code,{children:"x-www-form-urlencoded"}),",\nApiato provides the convenient ",(0,t.jsx)(n.code,{children:"sanitizeInput"})," method."]}),"\n",(0,t.jsx)(n.p,{children:"Consider the following request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "name": "Demo",\n    "description": "Some description",\n    "is_private": false,\n    "address": "",\n    "foo": {\n      "number": 1,\n      "bar": "bar"\n    }\n  },\n  "meta": "some meta data"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"sanitizeInput"})," method enables you to specify a list of fields,\nemploying dot notation, to be accessed and extracted from the request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$data = $request->sanitizeInput([\n    'data.description',\n    'data.is_private',\n    'data.address',\n    'data.foo.number',\n    'email', // will be ignored\n    'meta',\n]);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The extracted data will appear as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'[\n  "data" => [\n    "description" => "Some description"\n    "is_private" => false,\n    "address" => null, // empty string is converted to null by Laravel\n    "foo" => [\n      "number" => 1,\n    ]\n  ],\n  "meta" => "some meta data",\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Note that ",(0,t.jsx)(n.code,{children:"email"})," is excluded from the sanitized array, as it was absent in the request.\nAdditionally, any other fields not specified are omitted.\nIn essence, the method filters the request, retaining only the defined values."]}),"\n",(0,t.jsx)(n.p,{children:"You can also assign default values during the data sanitization process:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$sanitizedData = $request->sanitizeInput([\n    'name' => 'John', // If name is not provided, the default value will be set\n    'product.company.address' => 'Somewhere in the world', // dot notation is supported\n    'email',\n    'password'\n]);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"getinputbykey",children:"getInputByKey"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"getInputByKey"})," method retrieves data from the ",(0,t.jsx)(n.code,{children:"request"})," by specifying the field name.\nSimilar to ",(0,t.jsx)(n.code,{children:"$request->input('key.here')"}),", this method operates on the ",(0,t.jsx)(n.code,{children:"decoded"})," values instead of the original data."]}),"\n",(0,t.jsx)(n.p,{children:"Consider the following request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "XbPW7awNkzl83LD6"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["While ",(0,t.jsx)(n.code,{children:"$request->input('id')"})," would return ",(0,t.jsx)(n.code,{children:'"XbPW7awNkzl83LD6"'}),",\n",(0,t.jsx)(n.code,{children:"$request->getInputByKey('id')"})," would return the decoded value\n(e.g., ",(0,t.jsx)(n.code,{children:"4"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["Moreover, you can set a ",(0,t.jsx)(n.code,{children:"default"})," value to be returned if the key is absent or unset, like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$request->getInputByKey('data.name', 'Undefined')\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mapinput",children:"mapInput"}),"\n",(0,t.jsxs)(n.p,{children:["In certain cases, you might need to remap input from the request to different fields.\nWhile manual field mapping is possible, you can also leverage the ",(0,t.jsx)(n.code,{children:"mapInput"}),' method for this purpose.\nThis helper method allows you to "redefine" keys within the request, making subsequent processing easier.']}),"\n",(0,t.jsx)(n.p,{children:"Consider the following request:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "name": "John Doe"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["However, for processing purposes, you require the ",(0,t.jsx)(n.code,{children:"username"})," field instead of ",(0,t.jsx)(n.code,{children:"data.name"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can use the helper as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$request->mapInput([\n    'data.name' => 'username',\n]);\n"})}),"\n",(0,t.jsx)(n.p,{children:"The resulting structure would be:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "username": "John Doe"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"And you can access the value as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$request->input('username');\n"})}),"\n",(0,t.jsx)(n.h3,{id:"injectdata",children:"injectData"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"injectData"})," method allows you to inject data into the request.\nThis can be particularly helpful during testing\nwhen you wish to provide data directly to the request instead of sending it through the request body."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$request = RegisterUserRequest::injectData($data);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"withurlparameters",children:"withUrlParameters"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"withUrlParameters"})," method enables you to inject URL parameters into the request.\nThis is especially useful when you need to include properties in the request that are not part of the request body\nbut are required for the request to be processed.\nThis method is often used in conjunction with the ",(0,t.jsx)(n.code,{children:"injectData"})," method."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"$request = RegisterUserRequest::injectData($data)\n    ->withUrlParameters(['id' => 123]);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"bypassing-authorization",children:"Bypassing Authorization"}),"\n",(0,t.jsxs)(n.p,{children:["To grant certain Roles access to all endpoints within the system without the need\nto define the role in each Request object,\nyou can follow this approach.\nThis is particularly beneficial when you want to provide unrestricted access to users with the ",(0,t.jsx)(n.code,{children:"admin"})," role.\nTo implement this, define the relevant roles in ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/apiato.php"})," as shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"'requests' => [\n    'allow-roles-to-access-all-routes' => ['admin'],\n],\n"})}),"\n",(0,t.jsx)(n.h2,{id:"force-accept-header",children:"Force Accept Header"}),"\n",(0,t.jsxs)(n.p,{children:["Typically, when making calls to a JSON API, you should include the ",(0,t.jsx)(n.code,{children:"accept: application/json"})," HTTP header.\nIn Apiato, you have the option to either enforce users to send this header or allow them to skip it."]}),"\n",(0,t.jsxs)(n.p,{children:["To enforce the ",(0,t.jsx)(n.code,{children:"accept: application/json"})," header,\nnavigate to the ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/apiato.php"})," configuration file and set the ",(0,t.jsx)(n.code,{children:"force-accept-header"})," to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Conversely, if you wish to allow users to skip this header, set ",(0,t.jsx)(n.code,{children:"force-accept-header"})," to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"Forcing the accept header is disabled by default."})}),"\n",(0,t.jsx)(n.h2,{id:"etag",children:"Etag"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"ETag"})," or ",(0,t.jsx)(n.strong,{children:"entity tag"})," is part of HTTP, the protocol for the World Wide Web.\nIt is one of several mechanisms that HTTP provides for Web cache validation,\nwhich allows a client to make conditional requests.\nThis mechanism allows caches to be more efficient and saves bandwidth,\nas a Web server does not need to send a full response if the content has not changed.\n(",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/HTTP_ETag",children:"Wikipedia"}),")"]}),"\n",(0,t.jsxs)(n.p,{children:["Apiato offers support for Etag through the ",(0,t.jsx)(n.code,{children:"Apiato\\Core\\Middlewares\\HttpProcessETagHeadersMiddleware"})," middleware,\nwhich employs the Shallow technique.\nThis middleware can be particularly valuable in reducing bandwidth usage for clients, especially on mobile devices."]}),"\n",(0,t.jsxs)(n.p,{children:["Please note that this feature is ",(0,t.jsx)(n.strong,{children:"disabled by default"}),". To enable it, follow these steps:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Navigate to the ",(0,t.jsx)(n.code,{children:"app/Ship/Configs/apiato.php"})," configuration file."]}),"\n",(0,t.jsxs)(n.li,{children:["Inside the configuration file, locate the ",(0,t.jsx)(n.code,{children:"use-etag"})," configuration parameter."]}),"\n",(0,t.jsxs)(n.li,{children:["Set the ",(0,t.jsx)(n.code,{children:"use-etag"})," parameter to ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Keep in mind that for this feature to function correctly, the client must include the ",(0,t.jsx)(n.code,{children:"If-None-Match"})," HTTP header,\nwhich corresponds to the ETag value, in their request."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);