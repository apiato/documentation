"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[392],{95788:(e,n,a)=>{a.d(n,{Iu:()=>d,yg:()=>y});var r=a(11504);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),p=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=t,y=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(y,l(l({ref:n},d),{},{components:a})):r.createElement(y,l({ref:n},d))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},96132:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(45072),t=(a(11504),a(95788));const i={sidebar_position:7,title:"Transformers",tags:["component","main-component","transformer","controller","response","model"]},l=void 0,o={unversionedId:"components/main-components/transformers",id:"version-12.x/components/main-components/transformers",title:"Transformers",description:"Transformers,",source:"@site/versioned_docs/version-12.x/components/main-components/transformers.md",sourceDirName:"components/main-components",slug:"/components/main-components/transformers",permalink:"/docs/components/main-components/transformers",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-12.x/components/main-components/transformers.md",tags:[{label:"component",permalink:"/docs/tags/component"},{label:"main-component",permalink:"/docs/tags/main-component"},{label:"transformer",permalink:"/docs/tags/transformer"},{label:"controller",permalink:"/docs/tags/controller"},{label:"response",permalink:"/docs/tags/response"},{label:"model",permalink:"/docs/tags/model"}],version:"12.x",lastUpdatedBy:"Mohammad Alavi",lastUpdatedAt:1707153375,formattedLastUpdatedAt:"Feb 5, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Transformers",tags:["component","main-component","transformer","controller","response","model"]},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/docs/components/main-components/models"},next:{title:"Views",permalink:"/docs/components/main-components/views"}},s={},p=[{value:"Definition &amp; Principles",id:"definition--principles",level:2},{value:"Rules",id:"rules",level:2},{value:"Folder Structure",id:"folder-structure",level:2},{value:"Code Example",id:"code-example",level:2},{value:"Including Relationships",id:"including-relationships",level:2},{value:"Defining Relationships",id:"defining-relationships",level:3},{value:"Include Per API Consumer Request",id:"include-per-api-consumer-request",level:3},{value:"Include By Default",id:"include-by-default",level:3},{value:"Resource Key",id:"resource-key",level:2},{value:"Setting the Resource Key",id:"setting-the-resource-key",level:3},{value:"Via Model",id:"via-model",level:4},{value:"Via Controller",id:"via-controller",level:4},{value:"Getting the Resource Key",id:"getting-the-resource-key",level:3},{value:"Transformer Example",id:"transformer-example",level:4},{value:"Response Example",id:"response-example",level:4},{value:"Helper Methods",id:"helper-methods",level:2},{value:"nullableItem",id:"nullableitem",level:3},{value:"Response Payload",id:"response-payload",level:2}],d={toc:p},u="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(u,(0,r.c)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Transformers,\noften referred to as Response Transformers, serve a similar purpose to Views, but specifically for JSON responses.\nWhile Views are responsible for presenting data in HTML format,\nTransformers take data and format it into JSON representation."),(0,t.yg)("p",null,"For more detailed information about transformers and their usage,\nyou can refer to the ",(0,t.yg)("a",{parentName:"p",href:"https://fractal.thephpleague.com/transformers/"},"official documentation of Fractal"),",\nwhich is the underlying library used for handling transformations in Apiato."),(0,t.yg)("p",null,"To generate new transformers\nyou may use the ",(0,t.yg)("inlineCode",{parentName:"p"},"apiato:generate:transformer")," interactive command:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"php artisan apiato:generate:transformer\n")),(0,t.yg)("h2",{id:"definition--principles"},"Definition & Principles"),(0,t.yg)("p",null,"Read ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/Mahmoudz/Porto#definitions--principles"},(0,t.yg)("strong",{parentName:"a"},"Porto SAP Documentation (#Transformers)")),"."),(0,t.yg)("h2",{id:"rules"},"Rules"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"All Transformers:",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"MUST be placed in the ",(0,t.yg)("inlineCode",{parentName:"li"},"app/Containers/{Section}/{Container}/UI/API/Transformers")," directory."),(0,t.yg)("li",{parentName:"ul"},"MUST extend the ",(0,t.yg)("inlineCode",{parentName:"li"},"App\\Ship\\Parents\\Transformers\\Transformer")," class.",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"The parent extension SHOULD be aliased as ",(0,t.yg)("inlineCode",{parentName:"li"},"ParentTransformer"),"."))),(0,t.yg)("li",{parentName:"ul"},"MUST have a public ",(0,t.yg)("inlineCode",{parentName:"li"},"transform")," method returning an array.")))),(0,t.yg)("h2",{id:"folder-structure"},"Folder Structure"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-markdown"},"app\n\u2514\u2500\u2500 Containers\n    \u2514\u2500\u2500 Section\n        \u2514\u2500\u2500 Container\n            \u2514\u2500\u2500 UI\n                \u2514\u2500\u2500 API\n                    \u2514\u2500\u2500 Transformers\n                        \u251c\u2500\u2500 TransformerA.php\n                        \u251c\u2500\u2500 TransformerB.php\n                        \u2514\u2500\u2500 ...\n")),(0,t.yg)("h2",{id:"code-example"},"Code Example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use ...\nuse App\\Ship\\Parents\\Transformers\\Transformer as ParentTransformer;\n\nclass UserTransformer extends ParentTransformer\n{\n    protected $availableIncludes = [];\n\n    protected $defaultIncludes = [];\n\n    public function transform(User $user)\n    {\n        return [\n            'object' => $user->getResourceKey(),\n            'id' => $user->getHashedKey(),\n            'name' => $user->name,\n            // ...\n        ];\n    }\n}\n")),(0,t.yg)("h2",{id:"including-relationships"},"Including Relationships"),(0,t.yg)("p",null,"You can include model relationships for complex data structures using the ",(0,t.yg)("inlineCode",{parentName:"p"},"include")," query parameter.\nThese relationships can be included in the response either ",(0,t.yg)("a",{parentName:"p",href:"#include-per-api-consumer-request"},"per API consumer request")," or\n",(0,t.yg)("a",{parentName:"p",href:"#include-by-default"},"by default"),".\nThe ",(0,t.yg)("inlineCode",{parentName:"p"},"include")," parameter can be used on any endpoint\nthat has ",(0,t.yg)("a",{parentName:"p",href:"#defining-relationships"},"relationships defined")," in its transformer."),(0,t.yg)("h3",{id:"defining-relationships"},"Defining Relationships"),(0,t.yg)("p",null,"To define relationships in the transformer, follow these two steps:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"Define the relationship method in the transformer."),(0,t.yg)("li",{parentName:"ol"},"Add the relationship to the ",(0,t.yg)("inlineCode",{parentName:"li"},"$availableIncludes")," or ",(0,t.yg)("inlineCode",{parentName:"li"},"$defaultIncludes")," property.")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"availableIncludes")," can be included in the response per API consumer request."),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"defaultIncludes")," are included in the response by default.")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"Any relationships not defined in the ",(0,t.yg)("inlineCode",{parentName:"p"},"$availableIncludes")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"$defaultIncludes")," properties will be ignored.")),(0,t.yg)("p",null,"The relationship method should be named ",(0,t.yg)("inlineCode",{parentName:"p"},"include{RelationshipName}")," and return a Fractal ",(0,t.yg)("inlineCode",{parentName:"p"},"Item")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"Collection")," object.\nThe ",(0,t.yg)("inlineCode",{parentName:"p"},"include{RelationshipName}")," method will be called automatically by the Transformer\nwhen the relationship is requested."),(0,t.yg)("p",null,"For example, let's assume we have a ",(0,t.yg)("inlineCode",{parentName:"p"},"User")," model with a ",(0,t.yg)("inlineCode",{parentName:"p"},"roles")," relationship.\nThe ",(0,t.yg)("inlineCode",{parentName:"p"},"UserTransformer")," would have an ",(0,t.yg)("inlineCode",{parentName:"p"},"includeRoles")," method that returns a ",(0,t.yg)("inlineCode",{parentName:"p"},"Collection")," object."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"public function includeRoles(User $user): Collection\n{\n    return $this->collection($user->roles, new RoleTransformer());\n}\n")),(0,t.yg)("p",null,"Now,\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"roles")," relationship can be included in the response\nby adding it to the ",(0,t.yg)("inlineCode",{parentName:"p"},"$availableIncludes")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"$defaultIncludes")," property."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"protected array $availableIncludes = [\n    'roles',\n];\n\n// or\n\nprotected array $defaultIncludes = [\n    'roles',\n];\n")),(0,t.yg)("h3",{id:"include-per-api-consumer-request"},"Include Per API Consumer Request"),(0,t.yg)("p",null,"In cases where you have multiple relationships for a model, such as ",(0,t.yg)("inlineCode",{parentName:"p"},"User")," with ",(0,t.yg)("inlineCode",{parentName:"p"},"Roles")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"Avatar")," relationships,\nyou can include specific relationships in the response based on the API consumer's request.\nTo enable this,\nyou add the desired relationships to the ",(0,t.yg)("inlineCode",{parentName:"p"},"$availableIncludes")," property in the transformer\nand create corresponding methods for each relationship in the transformer to specify how to include that data."),(0,t.yg)("p",null,"Here's an example using a ",(0,t.yg)("inlineCode",{parentName:"p"},"UserTransformer")," with ",(0,t.yg)("inlineCode",{parentName:"p"},"roles")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"avatar")," relationships added to the ",(0,t.yg)("inlineCode",{parentName:"p"},"$availableIncludes")," property:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"protected array $availableIncludes = [\n    'roles',\n    'avatar',\n];\n\npublic function includeRoles(User $user): Collection\n{\n    return $this->collection($user->roles, new RoleTransformer());\n}\n\npublic function includeAvatar(User $user): Item\n{\n    return $this->item($user->avatar, new AvatarTransformer());\n}\n")),(0,t.yg)("p",null,"To request the ",(0,t.yg)("inlineCode",{parentName:"p"},"roles")," data along with the ",(0,t.yg)("inlineCode",{parentName:"p"},"User")," resource, you can pass the ",(0,t.yg)("inlineCode",{parentName:"p"},"include=roles")," query parameter with the request:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"api.apiato.test/v1/users?include=roles\n")),(0,t.yg)("p",null,"This will include the ",(0,t.yg)("inlineCode",{parentName:"p"},"roles")," data in the response:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "object": "User",\n      "id": "0one37vjk49rp5ym",\n      "roles": [\n        {\n          "object": "Role",\n          "id": "bmo7y84xpgeza06k"\n        },\n        // ...\n      ]\n    },\n    // ...\n  ]\n}\n')),(0,t.yg)("p",null,"You can also include multiple relationships by separating them with a comma:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"api.apiato.test/v1/users?include=roles,avatar\n")),(0,t.yg)("p",null,"This includes both the ",(0,t.yg)("inlineCode",{parentName:"p"},"roles")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"avatar")," relationships in the response."),(0,t.yg)("p",null,"Nested includes are also possible.\nIf, for instance, the ",(0,t.yg)("inlineCode",{parentName:"p"},"Avatar")," model has a relationship with an ",(0,t.yg)("inlineCode",{parentName:"p"},"Image")," object,\nyou can request nested includes using dot notation:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"api.apiato.test/v1/users?include=avatar,avatar.image\n")),(0,t.yg)("p",null,"This includes the ",(0,t.yg)("inlineCode",{parentName:"p"},"Avatar")," relationship with the ",(0,t.yg)("inlineCode",{parentName:"p"},"Image")," nested under it in the response."),(0,t.yg)("p",null,"It's important to note that for nested includes, the nested relationship must also be defined.\nIn this example,\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"AvatarTransformer")," would need\nto have an ",(0,t.yg)("inlineCode",{parentName:"p"},"includeImage")," method defined and the ",(0,t.yg)("inlineCode",{parentName:"p"},"image")," relationship added to it's ",(0,t.yg)("inlineCode",{parentName:"p"},"$availableIncludes")," property."),(0,t.yg)("p",null,"By defining the ",(0,t.yg)("inlineCode",{parentName:"p"},"availableIncludes")," and implementing the corresponding ",(0,t.yg)("inlineCode",{parentName:"p"},"include{RelationshipName}")," methods,\nyou allow API consumers to specify which related data they want in the response,\nenhancing the flexibility and efficiency of your API."),(0,t.yg)("h3",{id:"include-by-default"},"Include By Default"),(0,t.yg)("p",null,"To automatically include a relationship in every response generated by the transformer,\nyou can define the relationship in the transformer's ",(0,t.yg)("inlineCode",{parentName:"p"},"$defaultIncludes")," property.\nThis means\nthat the specified relationship will be included by default without the need for API consumers to request it explicitly."),(0,t.yg)("p",null,"Here's an example using a ",(0,t.yg)("inlineCode",{parentName:"p"},"UserTransformer")," where the ",(0,t.yg)("inlineCode",{parentName:"p"},"avatar")," relationship is defined as a default include:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"protected array $defaultIncludes = [\n    'avatar',\n];\n\npublic function includeAvatar(User $user): Item\n{\n    return $this->item($user->avatar, new AvatarTransformer());\n}\n")),(0,t.yg)("p",null,"By setting the default includes in this manner,\nthe ",(0,t.yg)("inlineCode",{parentName:"p"},"avatar")," relationship will automatically be included in every response created by this transformer.\nThis can simplify responses and reduce the need for additional API requests for related data,\nultimately enhancing the efficiency and usability of your API."),(0,t.yg)("h2",{id:"resource-key"},"Resource Key"),(0,t.yg)("p",null,"The transformer allows appending a resource key to the transformed resource.\nThis is useful when you want to have a consistent response payload format for all your resources."),(0,t.yg)("h3",{id:"setting-the-resource-key"},"Setting the Resource Key"),(0,t.yg)("p",null,"You can set the resource key in your response payload in two ways:"),(0,t.yg)("h4",{id:"via-model"},"Via Model"),(0,t.yg)("p",null,"Specify the resource key on the respective model by setting the ",(0,t.yg)("inlineCode",{parentName:"p"},"$resourceKey")," property:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"class User extends ParentUserModel\n{\n    protected $resourceKey = 'User';\n}\n")),(0,t.yg)("h4",{id:"via-controller"},"Via Controller"),(0,t.yg)("p",null,"Manually set the resource key using the ",(0,t.yg)("inlineCode",{parentName:"p"},"resourceKey")," parameter in the controller's ",(0,t.yg)("inlineCode",{parentName:"p"},"transform")," method:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"$this->transform($model, ModelTransformer::class, resourceKey: 'User');\n")),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"It's important to note that setting the ",(0,t.yg)("inlineCode",{parentName:"p"},"resourceKey")," using the ",(0,t.yg)("inlineCode",{parentName:"p"},"transform")," method will only impact the ",(0,t.yg)("inlineCode",{parentName:"p"},"top level")," resource key\nand will not affect the resource keys of ",(0,t.yg)("inlineCode",{parentName:"p"},"included")," resources.")),(0,t.yg)("h3",{id:"getting-the-resource-key"},"Getting the Resource Key"),(0,t.yg)("p",null,"Retrieve the resource key from the model by calling the ",(0,t.yg)("inlineCode",{parentName:"p"},"getResourceKey")," method."),(0,t.yg)("p",null,"If no ",(0,t.yg)("inlineCode",{parentName:"p"},"resourceKey")," is defined on the model, the ",(0,t.yg)("inlineCode",{parentName:"p"},"getResourceKey")," method will return the short class name of the model.\nFor instance, if no resource key is defined for ",(0,t.yg)("inlineCode",{parentName:"p"},"App\\Containers\\AppSection\\User\\Models\\User::class"),",\nthe default resource key will be ",(0,t.yg)("inlineCode",{parentName:"p"},"User"),"."),(0,t.yg)("h4",{id:"transformer-example"},"Transformer Example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"class UserTransformer extends ParentTransformer\n{\n    // ...\n    public function transform(User $user)\n    {\n        return [\n            'object' => $user->getResourceKey(), // <-- here\n            'id' => $user->getHashedKey(),\n            'name' => $user->name,\n            // ...\n        ];\n    }\n    // ...\n}\n")),(0,t.yg)("h4",{id:"response-example"},"Response Example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User", // <-- ResourceKey\n    "id": "XbPW7awNkzl83LD6",\n    "name": "Mohammad Alavi"\n  }\n}\n')),(0,t.yg)("h2",{id:"helper-methods"},"Helper Methods"),(0,t.yg)("h3",{id:"nullableitem"},"nullableItem"),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"nullableItem")," method returns an item if the model has a specific relationship, otherwise, it returns ",(0,t.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use League\\Fractal\\Resource\\Item;\nuse League\\Fractal\\Resource\\Primitive;\n\npublic function includeRelation(Model $model): Primitive|Item\n{\n    return $this->nullableItem($model->relation, new RelationTransformer();\n}\n")),(0,t.yg)("p",null,"If ",(0,t.yg)("inlineCode",{parentName:"p"},"$model->relation")," is not null (meaning it has a related model),\nthe method returns an item formatted using the specified transformer.\nOtherwise, it returns ",(0,t.yg)("inlineCode",{parentName:"p"},"null"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"nullableItem")," method is a shortcut for the following code:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use League\\Fractal\\Resource\\Item;\nuse League\\Fractal\\Resource\\Primitive;\n\npublic function includeRelation(Model $model): Primitive|Item\n{\n    return $model->relation ? $this->item($model->relation, new RelationTransformer()) : $this->primitive(null)\n}\n")),(0,t.yg)("h2",{id:"response-payload"},"Response Payload"),(0,t.yg)("p",null,"You have the flexibility to define your own custom response payload or utilize one of the supported serializers.\nSerializer classes let you switch between various output formats with minimal effect on your Transformers."),(0,t.yg)("p",null,"Current ",(0,t.yg)("a",{parentName:"p",href:"https://fractal.thephpleague.com/serializers/"},"supported serializers"),":"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ArraySerializer")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DataArraySerializer")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"JsonApiSerializer"))),(0,t.yg)("p",null,"To modify the default Fractal serializer,\naccess the ",(0,t.yg)("inlineCode",{parentName:"p"},"app/Ship/Configs/fractal.php")," configuration file\nand update the ",(0,t.yg)("inlineCode",{parentName:"p"},"default_serializer")," setting to your preferred serializer."),(0,t.yg)("p",null,"By default, Apiato uses ",(0,t.yg)("inlineCode",{parentName:"p"},"DataArraySerializer"),".\nThis serializer is not to everyone\u2019s tastes, because it adds a ",(0,t.yg)("inlineCode",{parentName:"p"},"data")," namespace to the output.\nA very basic response of the ",(0,t.yg)("inlineCode",{parentName:"p"},"DataArraySerializer")," will look like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "object": "User",\n    "id": "XbPW7awNkzl83LD6",\n    "name": "Mohammad Alavi"\n  }\n}\n')),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"DataArraySerializer")," is handy because it allows space for ",(0,t.yg)("inlineCode",{parentName:"p"},"meta")," data\n(like pagination, or totals) in both Items and Collections."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [ ... ],\n  "meta": {\n    "include": [\n      "xxx",\n      "yyy"\n    ],\n    "custom": [],\n    "pagination": {\n      "total": 999,\n      "count": 999,\n      "per_page": 999,\n      "current_page": 999,\n      "total_pages": 999,\n      "links": {\n        "next": "http://api.apiato.test/v1/accounts?page=999"\n      }\n    }\n  }\n}\n')),(0,t.yg)("admonition",{title:"Further Reading",type:"info"},(0,t.yg)("p",{parentName:"admonition"},"For more detailed information, please refer to ",(0,t.yg)("a",{parentName:"p",href:"https://fractal.thephpleague.com/transformers/"},"Fractal")," and ",(0,t.yg)("a",{parentName:"p",href:"https://github.com/spatie/laravel-fractal"},"Laravel Fractal Wrapper")," documentations.")))}m.isMDXComponent=!0}}]);