---
sidebar_position: 6
title: Password Reset
---

Use the  
`/password/forgot` (`app/Containers/AppSection/User/UI/API/Routes/ForgotPassword.v1.public.php`)
and  
`/password/reset`  (`app/Containers/AppSection/User/UI/API/Routes/ResetPassword.v1.public.php`)  endpoints.

#### Process Flow
1) Add your web app reset password page url e.g. `https://myapp.com/reset-password` to the
   `allowed-reset-password-urls` array of the `appSection-authentication`config.

2) Call the `/password/forgot` endpoint with a **reset url** of your choice. It should be one of the urls in the `allowed-reset-password-urls` array.  
   This endpoint will email user a link like this:  
   `https://myapp.com/reset-password?email=mohammad.alavi1990@gmail.com&token=51f8d80182f3785648c9b9dc7162719d158fc418b3cca86c14963638ec83d663`

3) And when user click on that link it will go to your front end app reset password page. And then from there you should get
   the user's new password and call the `/password-reset` endpoint with all the required fields to reset the password.

:::note  
You must set up the email to get this function to work, however for testing purposes set the `MAIL_MAILER=log` in
your `.env` file in order to the see the email content in the log file `storage/logs/laravel.log`.
:::
