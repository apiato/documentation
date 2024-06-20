"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7016],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>f});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return r?t.createElement(f,o(o({ref:n},u),{},{components:r})):t.createElement(f,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12682:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const s={title:"Validation"},o=void 0,i={unversionedId:"core-features/validation",id:"version-9.x/core-features/validation",title:"Validation",description:"Apiato uses the powerful Laravel validation system.",source:"@site/versioned_docs/version-9.x/core-features/validation.md",sourceDirName:"core-features",slug:"/core-features/validation",permalink:"/docs/9.x/core-features/validation",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/validation.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"Apr 18, 2021",frontMatter:{title:"Validation"},sidebar:"version-9.x/docs",previous:{title:"API Versioning",permalink:"/docs/9.x/core-features/api-versioning"},next:{title:"Search Query Parameter",permalink:"/docs/9.x/core-features/search-query-parameter"}},l={},p=[{value:"Responses",id:"responses",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apiato uses the powerful ",(0,a.yg)("a",{parentName:"p",href:"https://laravel.com/docs/validation"},"Laravel validation")," system."),(0,a.yg)("p",null,"In Apiato, validation must be defined in ",(0,a.yg)("a",{parentName:"p",href:".././main-components/requests"},"Request")," component, since every request might have different rules."),(0,a.yg)("p",null,"Validation rules are automatically applied, once injecting the Request in the Controller."),(0,a.yg)("p",null,"Requests help validating User data, accessibility, ownership and more can be added if needed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Example Request with Validation rules:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\nnamespace App\\Containers\\User\\UI\\API\\Requests;\n\nuse App\\Ship\\Parents\\Requests\\Request;\n\nclass RegisterUserRequest extends Request\n{\n    /**\n     * @return  array\n     */\n    public function rules()\n    {\n        return [\n            'email'    => 'required|email|max:200|unique:users,email',\n            'password' => 'required|min:20|max:300',\n            'name'     => 'required|min:2|max:400',\n        ];\n    }\n\n}\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage from Controller Example:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"    public function registerUser(RegisterUserRequest $request, CreateUserAction $action)\n    {\n        // if the actions takes the request object, you can pass the entire request instance as parameter\n        $user = Apiato::call('User@RegisterUserAction', [\n            [\n                $request['email'],\n                $request['password'],\n                $request['name'],\n                $request['gender'],\n                $request['birth']\n            ]\n        ]);\n        \n        return $this->transform($user, UserTransformer::class);\n    }\n")),(0,a.yg)("h2",{id:"responses"},"Responses"),(0,a.yg)("p",null,"Validation Error response format:"),(0,a.yg)("p",null,"Single Field:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": {\n    "email": [\n      "The email has already been taken."\n    ]\n  },\n  "status_code": 422,\n  "message": "The given data failed to pass validation."\n}\n')),(0,a.yg)("p",null,"Multiple Fields:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": {\n    "email": [\n      "The email field is required."\n    ],\n    "password": [\n      "The password field is required."\n    ]\n  },\n  "status_code": 422,\n  "message": "The given data failed to pass validation."\n}\n')),(0,a.yg)("p",null,"More details about requests in the ",(0,a.yg)("a",{parentName:"p",href:".././main-components/requests"},"Requests")," Page."))}d.isMDXComponent=!0}}]);