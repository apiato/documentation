---
sidebar_position: 6
title: Password Reset
---

Apiato provides a password reset feature out of the box
using the [Laravel's built-in password reset](https://laravel.com/docs/passwords) functionality.

## Configuration
Make sure that you configured your apps'
[mail](https://laravel.com/docs/mail) services correctly and the rest is already configured for you.

## Routing

### Requesting The Password Reset Link
Send a `POST` request to the `forgot-password` endpoint with the user's email address to request a password reset link.
This will email the user with a link to reset their password.

### Resetting The Password
There are two main elements to handle the password reset process:

- Frontend URL 
  - Define a route in your frontend app to handle the password reset link.
- API Configuration 
  - Configure your frontend app's password reset URL by either creating a new [App](../the-basics/apps.md)
  or using the existing `App\Ship\Apps\Web` app.

Next,
read the [Process Flow](#process-flow) section to understand how this ties into the overall password reset process.

## Process Flow
Let's assume you have a frontend app with a URL like `https://myapp.com/password/reset`.
The password reset process flow is as follows:

1. The user requests a password reset link.
2. The API sends a reset password link to the user's email address.
3. The user clicks the link in the email.
4. The link redirects the user to the specified (Frontend) URL in the email.
5. The URL contains a `reset_url` query string parameter.
6. The frontend app makes a `POST` request to the `reset_url` to reset the user's password.
7. The API resets the user's password and returns a `200 OK` response.

## Password Reset URL
You may instruct the API to use a different URL for password reset by using the Apiato [Apps](../the-basics/apps.md) feature.
