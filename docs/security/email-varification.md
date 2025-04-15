---
sidebar_position: 5
title: Email Verification
---

Apiato provides an email verification feature out of the box
using the [Laravel's built-in email verification](https://laravel.com/docs/verification) functionality.

## Model Preparation
All you need to do to enable email verification is
to verify that your `User` model implements the `Illuminate\Contracts\Auth\MustVerifyEmail` contract.

## Routing

### The Email Verification Notice
If you've enabled email verification,
the API will automatically send an email verification link to the user's provided email address upon user creation.

### The Email Verification Handler
There are two main elements to handle the email verification process:

- Frontend URL 
  - Define a route in your frontend app to handle the email verification link.
- API Configuration 
  - Configure your frontend app's email verification URL by either creating a new [App](../digging-deeper/apps.md)
  or using the existing `App\Ship\Apps\Web` app.

Next,
read the [Process Flow](#process-flow) section to understand how this ties into the overall email verification process.

### Resending The Verification Email
To resend the email verification link, use the `/email/verification-notification` endpoint.

### Protecting Routes
Apply the `verified` middleware to restrict access to certain routes for confirmed users.
When email verification is enabled, unverified users trying to access protected endpoints will trigger an exception,
prompting them to confirm their email address.

Please note that if email verification is disabled,
the `verified` middleware won't protect routes against unconfirmed users and will have no effect.

## Process Flow

Let's assume you have a frontend app with a URL like `https://myapp.com/verify-email`.
The email verification process flow is as follows:

1. The user registers or updates their email address.
2. The API sends an email verification link to the user's email address. It includes a link like this: `https://myapp.com/verify-email?verification_url=https://api.myapi.com/v1/email/verify/123/d2aG21sCc112k3`.
3. The user clicks the link in the email.
4. The link redirects the user to the specified (Frontend) URL in the email.
5. The URL contains a `verification_url` query string parameter.
6. The frontend app makes a `POST` request to the `verification_url` to verify the user's email.
7. The API verifies the user's email and returns a `200 OK` response.

## Email Verification URL
You may instruct the API to use a different URL for email verification by using the Apiato [Apps](../digging-deeper/apps.md) feature.
