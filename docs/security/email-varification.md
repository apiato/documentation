---
sidebar_position: 5
title: Email Verification
---

## Introduction {#introduction}

Many web applications require users to verify their email addresses before using the application.
Rather than forcing you to re-implement this feature by hand for each application you create,
Apiato provides convenient built-in services for sending and verifying email verification requests.

## Configuration {#configuration}

To get started, verify that your `User` model implements the `MustVerifyEmail` contract.
This should already be done for you by the `User` model that ships with Apiato.

Next,
enable the email verification feature in the `app\Containers\AppSection\Authentication\Configs\appSection-authentication` config file.

### Sending Email Verification Notification {#sending-email-verification-notification}
Given this feature is enabled,
newly registered users will automatically be sent an email containing an email verification link.
As you can see by examining your application's App\Providers\EventServiceProvider,
Laravel already contains a SendEmailVerificationNotification listener
that is attached to the Illuminate\Auth\Events\Registered event.
This event listener will send the email verification link to the user.

If you are manually implementing registration within your application instead of using a starter kit,
you should ensure
that you are dispatching the Illuminate\Auth\Events\Registered event after a user's registration is successful:

When email verification is enabled,
the API will send an email verification link to the user's email address when the user is created.
To let only confirmed users
access a certain route you should add the `verified` middleware to that route.

:::note  
While email verification is disabled you **cannot** protect any route against unconfirmed user access by using `verified` middleware and this
middleware is ignored.
:::


When email verification is enabled and a user hits a protected endpoint, the API throws an exception, if the `User` is not yet `confirmed`.

## Process Flow
1) Add your web app email verification redirect page url e.g. `https://myapp.com/email/verify` to the
   `allowed-verify-email-urls` array of the `appSection-authentication` config.
2) Send the email verification url to the user by calling the `/email/verification-notification` endpoint using your web app and pass one of the valid urls that you added in step 1 into the `verification_url` field of the endpoint.
3) An email verification link will be sent to the user's email which looks like this: `https://myapp.test/email/verify?url=https://api.myapi.test/v1/email/verify/XbPW7awNkzl83LD6/eaabd911e2e07ede6456d3bd5725c6d4a5c2dc0b?expires=1646913047&signature=232702865b8353c445b39c50397e66db33c74df80e3db5a7c0d46ef94c8ab6a9`
4) When the user click the link, he/she will be redirected to the url you specified before, in this case `https://myapp.com/email/verify` with the `url` query string
5) `url` is the complete url your web app needs to call to verify the user. So you just call this url and the user will be verified.
6) At this point you should get a `200` OK response and the user's email is verified.

:::note  
If you are using a load balancer and having difficulty with the email verification link, e.g. app says the signature doesn't match,
set the `protected $proxies = '*'` in the `App\Ship\Middlewares\TrustProxies.php` or update it to match your needs.
:::  
