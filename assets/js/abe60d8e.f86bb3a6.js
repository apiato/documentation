"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9772],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),c=r,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const i={sidebar_position:7,title:"Transformers",tags:["component","main-component","transformer","controller","response","model"]},l=void 0,o={unversionedId:"components/main-components/transformers",id:"version-12.x/components/main-components/transformers",title:"Transformers",description:"Transformers,",source:"@site/versioned_docs/version-12.x/components/main-components/transformers.md",sourceDirName:"components/main-components",slug:"/components/main-components/transformers",permalink:"/docs/components/main-components/transformers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/transformers.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"main-component",permalink:"/docs/tags/main-component"},{label:"transformer",permalink:"/docs/tags/transformer"},{label:"controller",permalink:"/docs/tags/controller"},{label:"response",permalink:"/docs/tags/response"},{label:"model",permalink:"/docs/tags/model"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1704287783,formattedLastUpdatedAt:"Jan 3, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Transformers",tags:["component","main-component","transformer","controller","response","model"]},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/docs/components/main-components/models"},next:{title:"Views",permalink:"/docs/components/main-components/views"}},s={},p=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Including Relationships",id:"including-relationships",level:2},{value:"Defining Relationships",id:"defining-relationships",level:3},{value:"Include Per API Consumer Request",id:"include-per-api-consumer-request",level:3},{value:"Include By Default",id:"include-by-default",level:3},{value:"Resource Key",id:"resource-key",level:2},{value:"Setting the Resource Key",id:"setting-the-resource-key",level:3},{value:"Via Model",id:"via-model",level:4},{value:"Via Controller",id:"via-controller",level:4},{value:"Getting the Resource Key",id:"getting-the-resource-key",level:3},{value:"Transformer Example",id:"transformer-example",level:4},{value:"Response Example",id:"response-example",level:4},{value:"Helper Methods",id:"helper-methods",level:2},{value:"ifAdmin",id:"ifadmin",level:3},{value:"nullableItem",id:"nullableitem",level:3},{value:"Response Payload",id:"response-payload",level:2}],d={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transformers,\noften referred to as Response Transformers, serve a similar purpose to Views, but specifically for JSON responses.\nWhile Views are responsible for presenting data in HTML format,\nTransformers take data and format it into JSON representation."),(0,r.kt)("p",null,"For more detailed information about transformers and their usage,\nyou can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://fractal.thephpleague.com/transformers/"},"official documentation of Fractal"),",\nwhich is the underlying library used for handling transformations in Apiato."),(0,r.kt)("p",null,"To generate new transformers\nyou may use the ",(0,r.kt)("inlineCode",{parentName:"p"},"apiato:generate:transformer")," interactive command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"php artisan apiato:generate:transformer\n")),(0,r.kt)("h2",{id:"definition--principles"},"Definition & Principles"),(0,r.kt)("p",null,"Read ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#definitions--principles"},(0,r.kt)("strong",{parentName:"a"},"Porto SAP Documentation (#Transformers)")),"."),(0,r.kt)("h2",{id:"rules"},"Rules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All Transformers:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MUST be placed in the ",(0,r.kt)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/API/Transformers")," directory."),(0,r.kt)("li",{parentName:"ul"},"MUST extend the ",(0,r.kt)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Transformers\\Transformer")," class.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,r.kt)("inlineCode",{parentName:"li"},"ParentTransformer"),"."))),(0,r.kt)("li",{parentName:"ul"},"MUST have a public ",(0,r.kt)("inlineCode",{parentName:"li"},"transform")," method returning an array.")))),(0,r.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u2514\u2500\u2500 API\n                    \u2514\u2500\u2500 Transformers\n                        \u251c\u2500\u2500 TransformerA.php\n                        \u251c\u2500\u2500 TransformerB.php\n                        \u2514\u2500\u2500 ...\n")),(0,r.kt)("h2",{id:"code-example"},"Code Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Transformers\\Transformer as ParentTransformer;\n\nclass UserTransformer extends ParentTransformer\n{\n    protected $availableIncludes = [];\n\n    protected $defaultIncludes = [];\n\n    public function transform(User $user)\n    {\n        return [\n            'object' => $user->getResourceKey(),\n            'id' => $user->getHashedKey(),\n            'name' => $user->name,\n            // ...\n        ];\n    }\n}\n")),(0,r.kt)("h2",{id:"including-relationships"},"Including Relationships"),(0,r.kt)("p",null,"You can include model relationships for complex data structures using the ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," query parameter.\nThese relationships can be included in the response either ",(0,r.kt)("a",{parentName:"p",href:"#include-per-api-consumer-request"},"per API consumer request")," or\n",(0,r.kt)("a",{parentName:"p",href:"#include-by-default"},"by default"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," parameter can be used on any endpoint\nthat has ",(0,r.kt)("a",{parentName:"p",href:"#defining-relationships"},"relationships defined")," in its transformer."),(0,r.kt)("h3",{id:"defining-relationships"},"Defining Relationships"),(0,r.kt)("p",null,"To define relationships in the transformer, follow these two steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define the relationship method in the transformer."),(0,r.kt)("li",{parentName:"ol"},"Add the relationship to the ",(0,r.kt)("inlineCode",{parentName:"li"},"$availableIncludes")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"$defaultIncludes")," property.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"availableIncludes")," can be included in the response per API consumer request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defaultIncludes")," are included in the response by default.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Any relationships not defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"$defaultIncludes")," properties will be ignored.")),(0,r.kt)("p",null,"The relationship method should be named ",(0,r.kt)("inlineCode",{parentName:"p"},"include{RelationshipName}")," and return a Fractal ",(0,r.kt)("inlineCode",{parentName:"p"},"Item")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," object.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"include{RelationshipName}")," method will be called automatically by the Transformer\nwhen the relationship is requested."),(0,r.kt)("p",null,"For example, let's assume we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," model with a ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," relationship.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"UserTransformer")," would have an ",(0,r.kt)("inlineCode",{parentName:"p"},"includeRoles")," method that returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function includeRoles(User $user): Collection\n{\n    return $this->collection($user->roles, new RoleTransformer());\n}\n")),(0,r.kt)("p",null,"Now,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," relationship can be included in the response\nby adding it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"$defaultIncludes")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"protected array $availableIncludes = [\n    'roles',\n];\n\n// or\n\nprotected array $defaultIncludes = [\n    'roles',\n];\n")),(0,r.kt)("h3",{id:"include-per-api-consumer-request"},"Include Per API Consumer Request"),(0,r.kt)("p",null,"In cases where you have multiple relationships for a model, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"Roles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," relationships,\nyou can include specific relationships in the response based on the API consumer's request.\nTo enable this,\nyou add the desired relationships to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," property in the transformer\nand create corresponding methods for each relationship in the transformer to specify how to include that data."),(0,r.kt)("p",null,"Here's an example using a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserTransformer")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")," relationships added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"protected array $availableIncludes = [\n    'roles',\n    'avatar',\n];\n\npublic function includeRoles(User $user): Collection\n{\n    return $this->collection($user->roles, new RoleTransformer());\n}\n\npublic function includeAvatar(User $user): Item\n{\n    return $this->item($user->avatar, new AvatarTransformer());\n}\n")),(0,r.kt)("p",null,"To request the ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," data along with the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," resource, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"include=roles")," query parameter with the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.apiato.test/v1/users?include=roles\n")),(0,r.kt)("p",null,"This will include the ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," data in the response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "object": "User",\n      "id": "0one37vjk49rp5ym",\n      "roles": [\n        {\n          "object": "Role",\n          "id": "bmo7y84xpgeza06k"\n        },\n        // ...\n      ]\n    },\n    // ...\n  ]\n}\n')),(0,r.kt)("p",null,"You can also include multiple relationships by separating them with a comma:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.apiato.test/v1/users?include=roles,avatar\n")),(0,r.kt)("p",null,"This includes both the ",(0,r.kt)("inlineCode",{parentName:"p"},"roles")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")," relationships in the response."),(0,r.kt)("p",null,"Nested includes are also possible.\nIf, for instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," model has a relationship with an ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," object,\nyou can request nested includes using dot notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"api.apiato.test/v1/users?include=avatar,avatar.image\n")),(0,r.kt)("p",null,"This includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," relationship with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Image")," nested under it in the response."),(0,r.kt)("p",null,"It's important to note that for nested includes, the nested relationship must also be defined.\nIn this example,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"AvatarTransformer")," would need\nto have an ",(0,r.kt)("inlineCode",{parentName:"p"},"includeImage")," method defined and the ",(0,r.kt)("inlineCode",{parentName:"p"},"image")," relationship added to it's ",(0,r.kt)("inlineCode",{parentName:"p"},"$availableIncludes")," property."),(0,r.kt)("p",null,"By defining the ",(0,r.kt)("inlineCode",{parentName:"p"},"availableIncludes")," and implementing the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"include{RelationshipName}")," methods,\nyou allow API consumers to specify which related data they want in the response,\nenhancing the flexibility and efficiency of your API."),(0,r.kt)("h3",{id:"include-by-default"},"Include By Default"),(0,r.kt)("p",null,"To automatically include a relationship in every response generated by the transformer,\nyou can define the relationship in the transformer's ",(0,r.kt)("inlineCode",{parentName:"p"},"$defaultIncludes")," property.\nThis means\nthat the specified relationship will be included by default without the need for API consumers to request it explicitly."),(0,r.kt)("p",null,"Here's an example using a ",(0,r.kt)("inlineCode",{parentName:"p"},"UserTransformer")," where the ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")," relationship is defined as a default include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"protected array $defaultIncludes = [\n    'avatar',\n];\n\npublic function includeAvatar(User $user): Item\n{\n    return $this->item($user->avatar, new AvatarTransformer());\n}\n")),(0,r.kt)("p",null,"By setting the default includes in this manner,\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"avatar")," relationship will automatically be included in every response created by this transformer.\nThis can simplify responses and reduce the need for additional API requests for related data,\nultimately enhancing the efficiency and usability of your API."),(0,r.kt)("h2",{id:"resource-key"},"Resource Key"),(0,r.kt)("p",null,"The transformer allows appending a resource key to the transformed resource.\nThis is useful when you want to have a consistent response payload format for all your resources."),(0,r.kt)("h3",{id:"setting-the-resource-key"},"Setting the Resource Key"),(0,r.kt)("p",null,"You can set the resource key in your response payload in two ways:"),(0,r.kt)("h4",{id:"via-model"},"Via Model"),(0,r.kt)("p",null,"Specify the resource key on the respective model by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"$resourceKey")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class User extends ParentUserModel\n{\n    protected $resourceKey = 'User';\n}\n")),(0,r.kt)("h4",{id:"via-controller"},"Via Controller"),(0,r.kt)("p",null,"Manually set the resource key using the ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceKey")," parameter in the controller's ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$this->transform($model, ModelTransformer::class, resourceKey: 'User');\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It's important to note that setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceKey")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"transform")," method will only impact the ",(0,r.kt)("inlineCode",{parentName:"p"},"top level")," resource key\nand will not affect the resource keys of ",(0,r.kt)("inlineCode",{parentName:"p"},"included")," resources.")),(0,r.kt)("h3",{id:"getting-the-resource-key"},"Getting the Resource Key"),(0,r.kt)("p",null,"Retrieve the resource key from the model by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getResourceKey")," method."),(0,r.kt)("p",null,"If no ",(0,r.kt)("inlineCode",{parentName:"p"},"resourceKey")," is defined on the model, the ",(0,r.kt)("inlineCode",{parentName:"p"},"getResourceKey")," method will return the short class name of the model.\nFor instance, if no resource key is defined for ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\User\\Models\\User::class"),",\nthe default resource key will be ",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"."),(0,r.kt)("h4",{id:"transformer-example"},"Transformer Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class UserTransformer extends ParentTransformer\n{\n    // ...\n    public function transform(User $user)\n    {\n        return [\n            'object' => $user->getResourceKey(), // <-- here\n            'id' => $user->getHashedKey(),\n            'name' => $user->name,\n            // ...\n        ];\n    }\n    // ...\n}\n")),(0,r.kt)("h4",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User", // <-- ResourceKey\n    "id": "XbPW7awNkzl83LD6",\n    "name": "Mohammad Alavi"\n  }\n}\n')),(0,r.kt)("h2",{id:"helper-methods"},"Helper Methods"),(0,r.kt)("h3",{id:"ifadmin"},"ifAdmin"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ifAdmin")," method is used\nto merge the normal client response with additional or modified results intended for admin users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"public function transform(Model $model)\n{\n    $response = [\n        'object' => $model->getResourceKey(),\n        'id' => $model->getHashedKey(),\n        'another_field' => $model->anotherField,\n    ];\n\n    return $this->ifAdmin([\n        'real_id' => $model->id,\n        'created_at' => $model->created_at,\n        'updated_at' => $model->updated_at,\n        'readable_created_at' => $model->created_at->diffForHumans(),\n        'readable_updated_at' => $model->updated_at->diffForHumans(),\n    ], $response);\n}\n")),(0,r.kt)("h3",{id:"nullableitem"},"nullableItem"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nullableItem")," method returns an item if the model has a specific relationship, otherwise, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use League\\Fractal\\Resource\\Item;\nuse League\\Fractal\\Resource\\Primitive;\n\npublic function includeRelation(Model $model): Primitive|Item\n{\n    return $this->nullableItem($model->relation, new RelationTransformer();\n}\n")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"$model->relation")," is not null (meaning it has a related model),\nthe method returns an item formatted using the specified transformer.\nOtherwise, it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"nullableItem")," method is a shortcut for the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use League\\Fractal\\Resource\\Item;\nuse League\\Fractal\\Resource\\Primitive;\n\npublic function includeRelation(Model $model): Primitive|Item\n{\n    return $model->relation ? $this->item($model->relation, new RelationTransformer()) : $this->primitive(null)\n}\n")),(0,r.kt)("h2",{id:"response-payload"},"Response Payload"),(0,r.kt)("p",null,"You have the flexibility to define your own custom response payload or utilize one of the supported serializers.\nSerializer classes let you switch between various output formats with minimal effect on your Transformers."),(0,r.kt)("p",null,"Current ",(0,r.kt)("a",{parentName:"p",href:"https://fractal.thephpleague.com/serializers/"},"supported serializers"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ArraySerializer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DataArraySerializer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JsonApiSerializer"))),(0,r.kt)("p",null,"To modify the default Fractal serializer,\naccess the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/Ship/Configs/fractal.php")," configuration file\nand update the ",(0,r.kt)("inlineCode",{parentName:"p"},"default_serializer")," setting to your preferred serializer."),(0,r.kt)("p",null,"By default, Apiato uses ",(0,r.kt)("inlineCode",{parentName:"p"},"DataArraySerializer"),".\nThis serializer is not to everyone\u2019s tastes, because it adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," namespace to the output.\nA very basic response of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataArraySerializer")," will look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": "Mohammad Alavi"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DataArraySerializer")," is handy because it allows space for ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," data\n(like pagination, or totals) in both Items and Collections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [ ... ],\n  "meta": {\n    "include": [\n      "xxx",\n      "yyy"\n    ],\n    "custom": [],\n    "pagination": {\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  }\n}\n')),(0,r.kt)("admonition",{title:"Further Reading",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more detailed information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://fractal.thephpleague.com/transformers/"},"Fractal")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/spatie/laravel-fractal"},"Laravel Fractal Wrapper")," documentations.")))}m.isMDXComponent=!0}}]);