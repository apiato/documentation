---
sidebar_position: 6
title: Password Reset
---

Most web applications provide a way for users to reset their forgotten passwords.
Rather than forcing you to re-implement this by hand for every application you create,
Apiato provides convenient services for sending password reset links and secure resetting passwords.

## Configuration

All the configuration options for the password reset feature are located in the `app/Containers/AppSection/Authorization/Configs/appSection-authentication` configuration file.

Make sure that you have configured the `MAIL_FROM_ADDRESS` in your `.env` file.

Include your web app's password reset page URL, such as `https://myapp.com/password/reset`,
in the `allowed-reset-password-urls` array within the `appSection-authentication` configuration.

## Routing

### Requesting The Password Reset Link

To request a password reset link, call the `/password/forgot` endpoint with the user's email address.

### Resetting The Password

To reset the user's password, call the `/password/reset` endpoint with the user's email address,
new password, and password reset token.

## Process Flow

1. Add your web app's password reset page URL, for example, `https://myapp.com/password/reset`, to the `allowed-reset-password-urls` array within the `appSection-authentication` configuration.

2. Call the `/password/forgot` endpoint with a **reset URL** of your choice, which should correspond to one of the URLs in the `allowed-reset-password-urls` array. This endpoint will send the user an email containing a link like this:  
   `https://myapp.com/password/resetd?email=mohammad.alavi1990@gmail.com&token=51f8d80182f3785648c9b9dc7162719d158fc418b3cca86c14963638ec83d663`

3. When the user clicks on that link, they will be directed to your front-end app's password reset page. From there, you can collect the user's new password and make a call to the `/password/reset` endpoint with all the required fields to complete the password reset.
