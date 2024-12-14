"use strict";(self.webpackChunkapiato_documentation=self.webpackChunkapiato_documentation||[]).push([[2616],{57356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"core-features/payments","title":"Payments","description":"- Supported Payment Gateway","source":"@site/versioned_docs/version-9.x/core-features/payments.md","sourceDirName":"core-features","slug":"/core-features/payments","permalink":"/docs/9.x/core-features/payments","draft":false,"unlisted":false,"editUrl":"https://github.com/apiato/documentation/tree/master/versioned_docs/version-9.x/core-features/payments.md","tags":[],"version":"9.x","lastUpdatedBy":"Moslem Deris","lastUpdatedAt":1618748235000,"frontMatter":{"title":"Payments"},"sidebar":"docs","previous":{"title":"Pagination","permalink":"/docs/9.x/core-features/pagination"},"next":{"title":"System Settings","permalink":"/docs/9.x/core-features/system-settings"}}');var c=t(74848),s=t(28453);const r={title:"Payments"},o=void 0,i={},d=[{value:"Supported Payment Gateways",id:"supported-payment-gateways",level:2},{value:"How to charge users",id:"how-to-charge-users",level:2},{value:"Manage Payment Accounts",id:"manage-payment-accounts",level:2},{value:"Payment Transactions",id:"payment-transactions",level:2},{value:"Developing own Payment Gateway Containers",id:"developing-own-payment-gateway-containers",level:2},{value:"Mocking the real payment call for Testing",id:"mocking-the-real-payment-call-for-testing",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#supported-payment-gateways",children:"Supported Payment Gateway"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#how-to-charge-users",children:"How to charge users"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#manage-payment-accounts",children:"Manage Payment Accounts"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#payment-transactions",children:"Payment Transactions"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#developing-own-payment-gateway-containers",children:"Developing own Payment Gateway Containers"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"#mocking-the-real-payment-call-for-testing",children:"Mocking the real payment call for Testing"})}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Apiato provides a ",(0,c.jsx)(n.code,{children:"Payment"})," container that acts as ",(0,c.jsx)(n.em,{children:"gateway"})," for multiple payment providers (",(0,c.jsx)(n.code,{children:"Stripe"}),",\n",(0,c.jsx)(n.code,{children:"PayPal"}),"...)."]}),"\n",(0,c.jsx)(n.h2,{id:"supported-payment-gateways",children:"Supported Payment Gateways"}),"\n",(0,c.jsx)(n.p,{children:"Currently, Apiato Supports the following payment gateways:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"Stripe"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.code,{children:"PayPal"})}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"If your payment gateway is not supported, build it and contribute your container back."}),"\n",(0,c.jsx)(n.h2,{id:"how-to-charge-users",children:"How to charge users"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Use the ",(0,c.jsx)(n.code,{children:"App\\Containers\\Payment\\Traits\\ChargeableTrait"})," on the Model you want to charge and implement the\n",(0,c.jsx)(n.code,{children:"\\App\\Containers\\Payment\\Contracts\\ChargeableInterface"})," Interface. The ",(0,c.jsx)(n.code,{children:"User"})," by default is setup to be chargeable."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["To charge a user, the user must first create a payment account (Stripe, PayPal, WePay,...). Use the respective\nendpoints to create those endpoints (",(0,c.jsx)(n.code,{children:"createStripeAccount"}),", ",(0,c.jsx)(n.code,{children:"createWepayAccount"}),", ...). A User may have multiple\n",(0,c.jsx)(n.code,{children:"PaymentAccount"}),"."]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["Then charge the user as follows ",(0,c.jsx)(n.code,{children:"$user->charge($account, $amount);"}),". By providing the ",(0,c.jsx)(n.code,{children:"$account"})," and the ",(0,c.jsx)(n.code,{children:"$amount"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["You can get ",(0,c.jsx)(n.code,{children:"$account"})," from the user as follows ",(0,c.jsx)(n.code,{children:"$user->paymentAccounts"})," this will return a Collection of all the\nuser payments accounts to select one."]}),"\n",(0,c.jsx)(n.p,{children:"Example:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-php",children:"// in this example we are selecting a random payment account.\n$acccount = $user->paymentAccounts->first();\n\n$amount = 9.99;\n\n// charge the user with the 'USD' currency\n$user->charge($acccount, $amount, 'USD');\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"$user->paymentAccounts"})," will return a ",(0,c.jsx)(n.em,{children:"generic"})," ",(0,c.jsx)(n.code,{children:"PaymentAccount"})," which may be transformed to the dedicated\npayment account (",(0,c.jsx)(n.code,{children:"PaypalAccount"}),", ",(0,c.jsx)(n.code,{children:"StripeAccount"}),", ...). You can call the ",(0,c.jsx)(n.code,{children:"accountable()"})," function on the selected\npayment in order to do this. For more information about this, we refer to the\n",(0,c.jsx)(n.a,{href:"https://laravel.com/docs/master/eloquent-relationships#polymorphic-relations",children:"Polymorphic Relationships"})," in the\nofficial Laravel Docs."]}),"\n",(0,c.jsx)(n.h2,{id:"manage-payment-accounts",children:"Manage Payment Accounts"}),"\n",(0,c.jsxs)(n.p,{children:["Apiato already provides some generic routes in order to allow users to manage their own ",(0,c.jsx)(n.code,{children:"PaymentAccount"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"GET /user/paymentaccounts"})," : Get all available ",(0,c.jsx)(n.code,{children:"PaymentAccount"}),"s for the current ",(0,c.jsx)(n.code,{children:"User"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"GET /user/paymentaccounts/{id}"}),": Get the details of one specific ",(0,c.jsx)(n.code,{children:"PaymentAccount"}),"."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"PATCH /user/paymentaccounts/{id}"}),": Update a ",(0,c.jsx)(n.code,{children:"PaymentAccount"})," (this route does ",(0,c.jsx)(n.strong,{children:"not"})," update the credentials for the\ncorresponding payment gateway)."]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"DELETE /user/paymentaccounts/{id}"}),": Delete a ",(0,c.jsx)(n.code,{children:"PaymentAccount"})," including the payment gateway details (e.g., user\ncredentials for ",(0,c.jsx)(n.code,{children:"PayPal"}),")."]}),"\n",(0,c.jsxs)(n.li,{children:["To create payment account use the dedicated endpoint (",(0,c.jsx)(n.code,{children:"createStripeAccount"}),", ",(0,c.jsx)(n.code,{children:"createWepayAccount"}),",...) provided by\nthe payment gateway container (Stripe, WePay,...). Each payment container has its own endpoint to ",(0,c.jsx)(n.code,{children:"create"})," and\n",(0,c.jsx)(n.code,{children:"update"})," account details, since each payment requires different data."]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"payment-transactions",children:"Payment Transactions"}),"\n",(0,c.jsxs)(n.p,{children:["When charging the user with a specific gateway (e.g., Paypal, Stripe, ...), the respective ",(0,c.jsx)(n.code,{children:"Task"})," (e.g., the\n",(0,c.jsx)(n.code,{children:"\\App\\Containers\\Stripe\\Tasks\\ChargeWithStripeTask"}),") should return a ",(0,c.jsx)(n.code,{children:"PaymentTransaction"})," model. This model, in turn,\nshould contain respective information about the transaction that was made. For example, it contains the ",(0,c.jsx)(n.code,{children:"status"}),' (e.g., "paid")\nor a flag indicating if the ',(0,c.jsx)(n.code,{children:"transaction"})," was successfully handled (",(0,c.jsx)(n.code,{children:"is_successful"}),")."]}),"\n",(0,c.jsxs)(n.p,{children:['Note that some information about the transaction are "pre-filled" by the ',(0,c.jsx)(n.code,{children:"PaymentGateway"})," itself, so you don't need\nto manually do this in your ",(0,c.jsx)(n.code,{children:"CargeWithXTask"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"user_id"})," : The ",(0,c.jsx)(n.code,{children:"User"})," who started this transaction (i.e., the buyer)"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"gateway"})," : The gateway that was used for this transaction (e.g., ",(0,c.jsx)(n.code,{children:"Stripe"}),")"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"amount"})," : The amount the user was charged"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"currency"})," : The currency the transaction was executed"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["Furthermore, the gateways may add the response from the gateway to the ",(0,c.jsx)(n.code,{children:"data"})," field of the ",(0,c.jsx)(n.code,{children:"PaymentTransaction"}),". The\n",(0,c.jsx)(n.code,{children:"custom"}),' field, however, can be filled by the developer with own "custom" data.']}),"\n",(0,c.jsx)(n.h2,{id:"developing-own-payment-gateway-containers",children:"Developing own Payment Gateway Containers"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"Payment"}),' container acts as generic foundation to "plug in" different containers that interacts with specific\npayment gateways (e.g., ',(0,c.jsx)(n.code,{children:"PayPal"}),", ",(0,c.jsx)(n.code,{children:"Stripe"}),", ...). This section introduces, how these containers shall be implemented\nin order to be used via the generic ",(0,c.jsx)(n.code,{children:"Payment"})," container."]}),"\n",(0,c.jsxs)(n.p,{children:["In this example, we will develop a ",(0,c.jsx)(n.code,{children:"Foo"})," container, that connects to the fictional ",(0,c.jsx)(n.code,{children:"FooPay"})," service. As our service may\nneed to have its own ",(0,c.jsx)(n.code,{children:"Accounts"}),", we will first need to create respective logic to add and update our ",(0,c.jsx)(n.code,{children:"FooAccount"}),".\nImplement respective ",(0,c.jsx)(n.code,{children:"AddFooAccountAction"})," and ",(0,c.jsx)(n.code,{children:"UpdateFooAccountAction"})," based on the pre-shipped ",(0,c.jsx)(n.code,{children:"Stripe"})," container."]}),"\n",(0,c.jsxs)(n.p,{children:["Basically, this provides the feature for the customer to create his own ",(0,c.jsx)(n.code,{children:"FooAccount"})," within your own application. These\nactions must, for example, provide the functionality to store user credentials (e.g., the mail-address of the user for\nthis specific service). Please note that you do not need to provide a dedicated ",(0,c.jsx)(n.code,{children:"DELETE"})," task (as this is handled by\nthe ",(0,c.jsx)(n.code,{children:"Payment"})," container)."]}),"\n",(0,c.jsxs)(n.p,{children:["The most important functionality of your ",(0,c.jsx)(n.code,{children:"Foo"})," container is how to charge the ",(0,c.jsx)(n.code,{children:"User"})," with this service. You, therefore,\nneed to create your own ",(0,c.jsx)(n.code,{children:"ChargeWithFooTask"}),". This class, however, needs to implement the ",(0,c.jsx)(n.code,{children:"PaymentChargerInterface"}),"\ndistributed via the ",(0,c.jsx)(n.code,{children:"Payment"})," container. This interface, in turn, requires you to implement the ",(0,c.jsx)(n.code,{children:"charge()"})," method."]}),"\n",(0,c.jsxs)(n.p,{children:["This method needs to connect to the ",(0,c.jsx)(n.code,{children:"FooService"}),", create the payment and return a ",(0,c.jsx)(n.code,{children:"PaymentTransaction"})," model."]}),"\n",(0,c.jsxs)(n.p,{children:["Finally, you need to ",(0,c.jsx)(n.code,{children:"register"})," the new service. This can be done in the ",(0,c.jsx)(n.code,{children:"Payment\\Configs\\payment-container.php"})," file.\nFor the ",(0,c.jsx)(n.code,{children:"payment-container.gateways"})," key, add the new entry for your ",(0,c.jsx)(n.code,{children:"Foo"})," Payment Gateway. This may look like this:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-php",children:"    // ...\n    'foo' => [\n        'container'   => 'Foo',\n        'charge_task' => \\App\\Containers\\Foo\\Tasks\\ChargeWithFooTask::class,\n    ],\n    // ...\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Basically, this entry points to the ",(0,c.jsx)(n.code,{children:"charger_task"})," that handles, how to charge a ",(0,c.jsx)(n.code,{children:"User"})," with the specific ",(0,c.jsx)(n.code,{children:"Payment Gateway"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"That's all!"}),"\n",(0,c.jsx)(n.h2,{id:"mocking-the-real-payment-call-for-testing",children:"Mocking the real payment call for Testing"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-php",children:"<?php\n\n// mock the ChargeWithStripeService external API call\n$this->mockIt(ChargeWithStripeService::class)->shouldReceive('charge')->andReturn([\n   'payment_method' => 'stripe',\n   'description' => $payId\n]);\n\n// mock the ChargeWithPaypalService external API call\n$this->mockIt(ChargeWithPaypalService::class)->shouldReceive('charge')->andReturn([\n   'payment_method' => 'paypal',\n   'description' => $payId\n]);\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Checkout the ",(0,c.jsx)(n.a,{href:".././miscellaneous/tests-helpers",children:"Tests Helpers"})," page for about Testing."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(96540);const c={},s=a.createContext(c);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);