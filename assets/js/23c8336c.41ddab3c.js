"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6320],{95788:(e,n,t)=>{t.d(n,{Iu:()=>c,yg:()=>d});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(t),u=r,d=y["".concat(p,".").concat(u)]||y[u]||m[u]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[y]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},10236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(45072),r=(t(11504),t(95788));const i={title:"Payments"},o=void 0,l={unversionedId:"core-features/payments",id:"version-9.x/core-features/payments",title:"Payments",description:"- Supported Payment Gateway",source:"@site/versioned_docs/version-9.x/core-features/payments.md",sourceDirName:"core-features",slug:"/core-features/payments",permalink:"/docs/9.x/core-features/payments",draft:!1,editUrl:"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/payments.md",tags:[],version:"9.x",lastUpdatedBy:"Moslem Deris",lastUpdatedAt:1618748235,formattedLastUpdatedAt:"Apr 18, 2021",frontMatter:{title:"Payments"},sidebar:"version-9.x/docs",previous:{title:"Pagination",permalink:"/docs/9.x/core-features/pagination"},next:{title:"System Settings",permalink:"/docs/9.x/core-features/system-settings"}},p={},s=[{value:"Supported Payment Gateways",id:"supported-payment-gateways",level:2},{value:"How to charge users",id:"how-to-charge-users",level:2},{value:"Manage Payment Accounts",id:"manage-payment-accounts",level:2},{value:"Payment Transactions",id:"payment-transactions",level:2},{value:"Developing own Payment Gateway Containers",id:"developing-own-payment-gateway-containers",level:2},{value:"Mocking the real payment call for Testing",id:"mocking-the-real-payment-call-for-testing",level:2}],c={toc:s},y="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#supported-payment-gateways"},"Supported Payment Gateway")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#how-to-charge-users"},"How to charge users")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#manage-payment-accounts"},"Manage Payment Accounts")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#payment-transactions"},"Payment Transactions")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#developing-own-payment-gateway-containers"},"Developing own Payment Gateway Containers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#mocking-the-real-payment-call-for-testing"},"Mocking the real payment call for Testing"))),(0,r.yg)("p",null,"Apiato provides a ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment")," container that acts as ",(0,r.yg)("em",{parentName:"p"},"gateway")," for multiple payment providers (",(0,r.yg)("inlineCode",{parentName:"p"},"Stripe"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"PayPal"),"...)."),(0,r.yg)("h2",{id:"supported-payment-gateways"},"Supported Payment Gateways"),(0,r.yg)("p",null,"Currently, Apiato Supports the following payment gateways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Stripe")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PayPal"))),(0,r.yg)("p",null,"If your payment gateway is not supported, build it and contribute your container back."),(0,r.yg)("h2",{id:"how-to-charge-users"},"How to charge users"),(0,r.yg)("p",null,"1) Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"App\\Containers\\Payment\\Traits\\ChargeableTrait")," on the Model you want to charge and implement the\n",(0,r.yg)("inlineCode",{parentName:"p"},"\\App\\Containers\\Payment\\Contracts\\ChargeableInterface")," Interface. The ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," by default is setup to be chargeable."),(0,r.yg)("p",null,"2) To charge a user, the user must first create a payment account (Stripe, PayPal, WePay,...). Use the respective\nendpoints to create those endpoints (",(0,r.yg)("inlineCode",{parentName:"p"},"createStripeAccount"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"createWepayAccount"),", ...). A User may have multiple\n",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentAccount"),"."),(0,r.yg)("p",null,"3) Then charge the user as follows ",(0,r.yg)("inlineCode",{parentName:"p"},"$user->charge($account, $amount);"),". By providing the ",(0,r.yg)("inlineCode",{parentName:"p"},"$account")," and the ",(0,r.yg)("inlineCode",{parentName:"p"},"$amount"),"."),(0,r.yg)("p",null,"You can get ",(0,r.yg)("inlineCode",{parentName:"p"},"$account")," from the user as follows ",(0,r.yg)("inlineCode",{parentName:"p"},"$user->paymentAccounts")," this will return a Collection of all the\nuser payments accounts to select one."),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"// in this example we are selecting a random payment account.\n$acccount = $user->paymentAccounts->first();\n\n$amount = 9.99;\n\n// charge the user with the 'USD' currency\n$user->charge($acccount, $amount, 'USD');\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"$user->paymentAccounts")," will return a ",(0,r.yg)("em",{parentName:"p"},"generic")," ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentAccount")," which may be transformed to the dedicated\npayment account (",(0,r.yg)("inlineCode",{parentName:"p"},"PaypalAccount"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"StripeAccount"),", ...). You can call the ",(0,r.yg)("inlineCode",{parentName:"p"},"accountable()")," function on the selected\npayment in order to do this. For more information about this, we refer to the\n",(0,r.yg)("a",{parentName:"p",href:"https://laravel.com/docs/master/eloquent-relationships#polymorphic-relations"},"Polymorphic Relationships")," in the\nofficial Laravel Docs."),(0,r.yg)("h2",{id:"manage-payment-accounts"},"Manage Payment Accounts"),(0,r.yg)("p",null,"Apiato already provides some generic routes in order to allow users to manage their own ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentAccount"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET /user/paymentaccounts")," : Get all available ",(0,r.yg)("inlineCode",{parentName:"li"},"PaymentAccount"),"s for the current ",(0,r.yg)("inlineCode",{parentName:"li"},"User"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GET /user/paymentaccounts/{id}"),": Get the details of one specific ",(0,r.yg)("inlineCode",{parentName:"li"},"PaymentAccount"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PATCH /user/paymentaccounts/{id}"),": Update a ",(0,r.yg)("inlineCode",{parentName:"li"},"PaymentAccount")," (this route does ",(0,r.yg)("strong",{parentName:"li"},"not")," update the credentials for the\ncorresponding payment gateway)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"DELETE /user/paymentaccounts/{id}"),": Delete a ",(0,r.yg)("inlineCode",{parentName:"li"},"PaymentAccount")," including the payment gateway details (e.g., user\ncredentials for ",(0,r.yg)("inlineCode",{parentName:"li"},"PayPal"),")."),(0,r.yg)("li",{parentName:"ul"},"To create payment account use the dedicated endpoint (",(0,r.yg)("inlineCode",{parentName:"li"},"createStripeAccount"),", ",(0,r.yg)("inlineCode",{parentName:"li"},"createWepayAccount"),",...) provided by\nthe payment gateway container (Stripe, WePay,...). Each payment container has its own endpoint to ",(0,r.yg)("inlineCode",{parentName:"li"},"create")," and\n",(0,r.yg)("inlineCode",{parentName:"li"},"update")," account details, since each payment requires different data.")),(0,r.yg)("h2",{id:"payment-transactions"},"Payment Transactions"),(0,r.yg)("p",null,"When charging the user with a specific gateway (e.g., Paypal, Stripe, ...), the respective ",(0,r.yg)("inlineCode",{parentName:"p"},"Task")," (e.g., the\n",(0,r.yg)("inlineCode",{parentName:"p"},"\\App\\Containers\\Stripe\\Tasks\\ChargeWithStripeTask"),") should return a ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentTransaction")," model. This model, in turn,\nshould contain respective information about the transaction that was made. For example, it contains the ",(0,r.yg)("inlineCode",{parentName:"p"},"status"),' (e.g., "paid")\nor a flag indicating if the ',(0,r.yg)("inlineCode",{parentName:"p"},"transaction")," was successfully handled (",(0,r.yg)("inlineCode",{parentName:"p"},"is_successful"),")."),(0,r.yg)("p",null,'Note that some information about the transaction are "pre-filled" by the ',(0,r.yg)("inlineCode",{parentName:"p"},"PaymentGateway")," itself, so you don't need\nto manually do this in your ",(0,r.yg)("inlineCode",{parentName:"p"},"CargeWithXTask"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"user_id")," : The ",(0,r.yg)("inlineCode",{parentName:"li"},"User")," who started this transaction (i.e., the buyer)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"gateway")," : The gateway that was used for this transaction (e.g., ",(0,r.yg)("inlineCode",{parentName:"li"},"Stripe"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"amount")," : The amount the user was charged"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"currency")," : The currency the transaction was executed")),(0,r.yg)("p",null,"Furthermore, the gateways may add the response from the gateway to the ",(0,r.yg)("inlineCode",{parentName:"p"},"data")," field of the ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentTransaction"),". The\n",(0,r.yg)("inlineCode",{parentName:"p"},"custom"),' field, however, can be filled by the developer with own "custom" data.'),(0,r.yg)("h2",{id:"developing-own-payment-gateway-containers"},"Developing own Payment Gateway Containers"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment"),' container acts as generic foundation to "plug in" different containers that interacts with specific\npayment gateways (e.g., ',(0,r.yg)("inlineCode",{parentName:"p"},"PayPal"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Stripe"),", ...). This section introduces, how these containers shall be implemented\nin order to be used via the generic ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment")," container."),(0,r.yg)("p",null,"In this example, we will develop a ",(0,r.yg)("inlineCode",{parentName:"p"},"Foo")," container, that connects to the fictional ",(0,r.yg)("inlineCode",{parentName:"p"},"FooPay")," service. As our service may\nneed to have its own ",(0,r.yg)("inlineCode",{parentName:"p"},"Accounts"),", we will first need to create respective logic to add and update our ",(0,r.yg)("inlineCode",{parentName:"p"},"FooAccount"),".\nImplement respective ",(0,r.yg)("inlineCode",{parentName:"p"},"AddFooAccountAction")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"UpdateFooAccountAction")," based on the pre-shipped ",(0,r.yg)("inlineCode",{parentName:"p"},"Stripe")," container."),(0,r.yg)("p",null,"Basically, this provides the feature for the customer to create his own ",(0,r.yg)("inlineCode",{parentName:"p"},"FooAccount")," within your own application. These\nactions must, for example, provide the functionality to store user credentials (e.g., the mail-address of the user for\nthis specific service). Please note that you do not need to provide a dedicated ",(0,r.yg)("inlineCode",{parentName:"p"},"DELETE")," task (as this is handled by\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment")," container)."),(0,r.yg)("p",null,"The most important functionality of your ",(0,r.yg)("inlineCode",{parentName:"p"},"Foo")," container is how to charge the ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," with this service. You, therefore,\nneed to create your own ",(0,r.yg)("inlineCode",{parentName:"p"},"ChargeWithFooTask"),". This class, however, needs to implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentChargerInterface"),"\ndistributed via the ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment")," container. This interface, in turn, requires you to implement the ",(0,r.yg)("inlineCode",{parentName:"p"},"charge()")," method."),(0,r.yg)("p",null,"This method needs to connect to the ",(0,r.yg)("inlineCode",{parentName:"p"},"FooService"),", create the payment and return a ",(0,r.yg)("inlineCode",{parentName:"p"},"PaymentTransaction")," model."),(0,r.yg)("p",null,"Finally, you need to ",(0,r.yg)("inlineCode",{parentName:"p"},"register")," the new service. This can be done in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment\\Configs\\payment-container.php")," file.\nFor the ",(0,r.yg)("inlineCode",{parentName:"p"},"payment-container.gateways")," key, add the new entry for your ",(0,r.yg)("inlineCode",{parentName:"p"},"Foo")," Payment Gateway. This may look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"    // ...\n    'foo' => [\n        'container'   => 'Foo',\n        'charge_task' => \\App\\Containers\\Foo\\Tasks\\ChargeWithFooTask::class,\n    ],\n    // ...\n")),(0,r.yg)("p",null,"Basically, this entry points to the ",(0,r.yg)("inlineCode",{parentName:"p"},"charger_task")," that handles, how to charge a ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," with the specific ",(0,r.yg)("inlineCode",{parentName:"p"},"Payment Gateway"),"."),(0,r.yg)("p",null,"That's all!"),(0,r.yg)("h2",{id:"mocking-the-real-payment-call-for-testing"},"Mocking the real payment call for Testing"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\n// mock the ChargeWithStripeService external API call\n$this->mockIt(ChargeWithStripeService::class)->shouldReceive('charge')->andReturn([\n   'payment_method' => 'stripe',\n   'description' => $payId\n]);\n\n// mock the ChargeWithPaypalService external API call\n$this->mockIt(ChargeWithPaypalService::class)->shouldReceive('charge')->andReturn([\n   'payment_method' => 'paypal',\n   'description' => $payId\n]);\n")),(0,r.yg)("p",null,"Checkout the ",(0,r.yg)("a",{parentName:"p",href:".././miscellaneous/tests-helpers"},"Tests Helpers")," page for about Testing."))}m.isMDXComponent=!0}}]);