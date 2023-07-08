---
title: Authentication
---

- [API Authentication (OAuth 2.0)](#api-authentication-oauth-20)
- [How to get Access Token using OAuth 2.0](#how-to-get-access-token-using-oauth-20)
- [Quick Overview](#quick-overview)
    - [A: For first-party clients](#first-party-clients)
        - [Login with Proxy for first-party clients](#login-with-proxy-for-first-party-clients)
        - [Login without Proxy for first-party clients](#login-without-proxy-for-first-party-clients)
    - [B: For third-party clients](#third-party-clients)
        - [Login without Proxy for third-party clients](#login-without-proxy-for-third-party-clients)
- [Login With Custom Attributes](#login-with-custom-attributes)
- [Logout](#logout)
- [Responses](#responses)
- [Change Tokens Expiration dates](#change-tokens-expiration-dates)
- [Web Authentication](#web-authentication)
- [Refresh Token](#refresh-token)
  - [Refresh Token with proxy for first-party clients](#refresh-token-with-proxy-for-first-party-clients)
  - [Refresh Token without proxy for first-party or third-party clients](#refresh-token-without-proxy-for-first-party-or-third-party-clients)
- [Email Verification](#email-verification)
- [Reset Password](#reset-password)
- [Social Authentication](#social-authentication)

Middlewares are the best solution to apply Authentication in your App.

In Apiato you can use these two `Authentication Middlewares`, to protect your endpoints:

- API Authentication: `auth:api`
- Web Authentication: `auth:web`

## API Authentication (OAuth 2.0) {#api-authentication-oauth-20}

To protect an **API** Endpoint from being accessible by unauthenticated users you can use the `auth:api` Middleware.

```php
Route::get('secret/info', Controller::class)
    ->middleware('auth:api');
```

All Endpoints protected with `auth:api` are accessible only when sending them a valid access token.

This Middleware is provided by the [Laravel Passport](https://laravel.com/docs/passport) package. So you can read its
documentation for more details.

## How to get Access Token using OAuth 2.0 {#how-to-get-access-token-using-oauth-20}

1) Generate `client_id` & `client_secret`. ([more details](#first-party-clients))

2) Use the generated client to call this oauth/token endpoint `http://api.apiato.test/v1/oauth/token`

All the Auth Endpoints are documented. Go to [Documentation Generator Page](../Pacakges/documentation.md)
to see how you can generate the API documentation, and read them.

## Quick Overview {#quick-overview}

OAuth lets you authenticate using different methods, these methods are called `grants`.
For how to decide which grant type you should use, check [this](https://oauth2.thephpleague.com/authorization-server/which-grant/)
and keep reading this documentation.

**Definitions:**
- The Client credentials: are the `client_id` & `client_secret`.
- The Proxy: is just an endpoint, that you should call instead of calling the Auth server endpoints directly, the proxy
endpoint will append the client credentials to your request and calls the Auth server for you, then return its response back. Each first-party client app should have its own proxy endpoints (at least one for each Login and Token Refresh). By default, Apiato provide a `Web Client` proxy endpoint.

> You can Log in to the first party app with proxy or without proxy, while for the third party you only need to log in
> without proxy. (same apply to refreshing token).
>
> For first party apps:
> - With Proxy << best and easiest way, (requires manually generating clients creating proxy endpoints for each client)
> - Without Proxy << if your frontend is not exposing the client credentials, you can call the Auth server endpoints directly without proxy.
>
> For third party apps:
> - Without Proxy << you don't need a proxy for the third party clients as they usually integrate with your API from the backend side which protects the client credentials.

## A: For first-party clients {#first-party-clients}

First-party clients (Your Frontend Mobile, Web,... Apps) usually consumes your private API (Internal API).

For first-party clients you need to use the **Resource owner credentials grant** (A.K.A. Password Grant Tokens).

When this grant type is used, your server needs to authenticate the Client App first (ensuring the request is coming
from your trusted frontend App) and then needs to check if the user credentials are correct (ensuring the user is
registered and has the right access), before issuing an access token.

**Note:**

- On register: the API returns user data. You will need to log that user in (using the same credentials he passed) to
get his Access Token and make other API calls.
- On login: the API returns the user Access Token with Refresh Token. You will need to request the User data by making
another call to the user endpoint, using his Access Token.

**How it works:**

1) Create a password type Client in your database to represent one of your Apps (ex: Mobile App). Use
`php artisan passport:client --password` to generate the client.

2) After registration, the user can enter his (username + password) in your App login screen.

3) Your App should send a **Post** request to `http://api.apiato.test/v1/oauth/token` containing the user credentials
(`username` and `password`) and the client credentials (`client_id` and `client_secret`) in addition to the `scope`
and `grant_type=password`:

**Request:**

```shell
curl --request POST \
  --url http://api.apiato.test/v1/oauth/token \
  --header 'accept: application/json' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'username=admin%40admin.com&password=admin&client_id=2&client_secret=SGUVv02b1ppQCgI7ZVeoTZDN6z8SSFLYiMOzzfiE&grant_type=password&scope='
```

**Response:**

```json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...",
  "refresh_token": "TPSPA1S6H8Wydjkjl+xt+hPGWTagL..."
}
```

4) Your Client App should save the Tokens and start requesting secure data, by sending the Access Token in the HTTP
Header `Authorization = Bearer {Access-Token}`.

More info at [Laravel Passport Here](https://laravel.com/docs/passport#password-grant-tokens)

> WARNING: the Client ID and Secret should not be stored in JavaScript or browser cache, or made accessible in any way.

So in case of Web Apps (JavaScript) you need to hide your client credentials behind a proxy. Apiato by default
provides you with a Web Login Proxy to use for all your trusted first party clients. We'll see below how you can use them.

### Login with Proxy for first-party clients {#login-with-proxy-for-first-party-clients}

Concept: create an endpoint for each trusted client, to be used for a login.

Apiato by default has one url ready for your Web client `clients/web/login`. You can add more as you
need for each of your trusted first party clients Apps (example: `clients/web/users/login`, `clients/mobile/users/login`).

Behind the scene, that endpoint is appending the corresponding client ID and Secret to your request and making another
call to your Auth server with all the required data. *(this way the client does not need to send the ID and Secret with
the request, and he is using his own URL which gives even more control to which client is accessing your Server)*. Then
it returns the Auth response back to the client with the Tokens in it.

Note: You have to manually extract the Client credentials from the DB and put them in the `.env`, for each client.

When running `passport:install` it automatically creates one client for you so you can use that for your
first app. Or you can use `php artisan passport:client --password` to generate them.

`.env` Example:

```
CLIENT_WEB_ID=101
CLIENT_WEB_SECRET=VkjYCUk5DUexJTE9yFAakytWCOqbShLgu9Ql67TI
```

### Login without Proxy for first-party clients {#login-without-proxy-for-first-party-clients}

Login from your App by sending a POST request to `http://api.apiato.test/v1/oauth/token` with `grant_type=password`,
the User credentials (`username` & `password`), Client Credentials (`client_id` & `client_secret`) and finally the
`scope` which could be empty.

## B: For third-party clients {#third-party-clients}

Third party clients (User's custom external Apps, who wants to integrate with your Software) always consumes your
public API (External API) only.

For third-party clients you need to use the **Client credentials grant** (A.K.A. Personal Access Tokens). *This grant
type is the simplest and is suitable for machine-to-machine authentication.*

With this grant type your server needs to authenticate the Client App only, before issuing an access token.

**How it works**

1) User logs in to your Clients App Interface (an external App made for your users only), go to settings, create Client
(of type `personal`) and copy the ID and Secret. *(Note this can be done via an API if you prefer)*

You may generate a personal client for testing purposes using `php artisan passport:client --personal`.

2) User add the Client credentials to his "Server Side software" and send a **Post** request to
`http://api.apiato.test/v1/oauth/token` containing the Client credentials (`client_id` and `client_secret`) in
addition to the `scope` and `grant_type=client_credentials`:

Request:

```shell
curl --request POST \
  --url http://api.apiato.test/v1/oauth/token \
  --header 'accept: application/json' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'client_id=1&client_secret=y1RbtnOvh9rpA91zPI2tiVKmFlepNy9dhHkzUKle&grant_type=client_credentials&scope='
```

Response:

```json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1Ni...",
  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."
}
```

3) The Client will be granted an Access Token to be saved. Then the Client can start requesting secure data, by sending
the Access Token in the HTTP Header `Authorization = Bearer {Access-Token}`.

More info at [Laravel Passport Here](https://laravel.com/docs/passport#personal-access-tokens)

### Login without Proxy for third-party clients {#login-without-proxy-for-third-party-clients}

We usually do not need a proxy for third-party clients as they are most likely making calls form their servers, thus
the Client ID and Secret should be secure and not exposed to the users.

Login by sending a POST request to `http://api.apiato.test/v1/oauth/token` with `grant_type=client_credentials`,
Client Credentials (`client_id` & `client_secret`) and finally the `scope` which could be empty.

Once issued, you can use that Access Token to make requests to protected resources (Endpoints).
The Access Token should be sent in the `Authorization` header of type `Bearer`
(Example: `Authorization = Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...`)

**Keep in mind there's no session state when using Tokens for Authentication**

## Login With Custom Attributes {#login-with-custom-attributes}

By default, Apiato allow users to log in with their `email` address. However, you may want to also allow users to
be able to log in using their `username`and `phone`.

Here is how to configure and use this feature.

- You may need to adapt your database accordingly (e.g., add the respective field to the `users` table).
- You may need to adapt the `Task` that `create` a `User` object (e.g., the `CreateUserByCredentialsTask`) accordingly
  to support the new fields. This may also affect your `Register` logic.
- Check the `App\Containers\AppSection\Authentication\Configs\appSection-authentication` Configuration file and check the `login`
params in order to configure this feature.

## Logout {#logout}

Logout by sending a `DELETE` request to `http://api.apiato.test/v1/logout/` containing the Token in the Header.

```json
{
  "message": "Token revoked successfully."
}
```

## Responses {#responses}

**Authentication failed JSON response:**

```json
{
  "message": "An Exception occurred when trying to authenticate the User.",
  "errors": []
}
```

**Wrong Client ID or Secret:**

```json
{
  "error": "invalid_client",
  "error_description": "Client authentication failed",
  "message": "Client authentication failed"
}
```

**Access Correct:**

```json
{
  "token_type": "Bearer",
  "expires_in": 86400,
  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",
  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."
}
```

## Change Tokens Expiration dates {#change-tokens-expiration-dates}

Go to `app/Ship/Configs/apiato.php` config file and edit this:

```php
/*
|--------------------------------------------------------------------------
| Access Token Expiration
|--------------------------------------------------------------------------
|
| In Days. Default to 3650 days = 10 years
|
*/
'expires-in' => env('API_TOKEN_EXPIRES', 3650),

/*
|--------------------------------------------------------------------------
| Refresh Token Expiration
|--------------------------------------------------------------------------
|
| In Days. Default to 3650 days = 10 years
|
*/
'refresh-expires-in' => env('API_REFRESH_TOKEN_EXPIRES', 3650),
```

To change from days to minutes you need to edit the `boot` function in `App\Containers\AppSection\Authentication\Providers\AuthProvider`.

## Web Authentication {#web-authentication}

To protect a **Web** Endpoint from being accessible by unauthenticated users you can use the `auth:web` Middleware.

Example:

```php
Route::get('private/page', Controller::class)
    ->middleware('auth:web');
```

**If authentication failed, users will be redirected to a login page**

To change the login page view go to the config file `app/Containers/AppSection/Authentication/Configs/appSection-authentication.php`, and set the name of your login page there as follows:

```php
'login-page-url' => 'login',
```

This will be looking for (login.html or login.php or login.blade.php).

## Refresh Token {#refresh-token}

In case your server is issuing a short-lived access tokens, the users will need to refresh their access tokens via the
refresh token that was provided to them when the access token was issued.

### Refresh Token with proxy for first-party clients {#refresh-token-with-proxy-for-first-party-clients}

By default, Apiato provide this endpoint `http://api.apiato.test/v1/clients/web/refresh` for the Web Client to be used
when you need to refresh the token for that client. You can of course create as many
endpoints as you want for each client. See the code of `app/Containers/AppSection/Authentication/UI/API/Routes/ProxyRefreshForWebClient.v1.public.php`
and create similar ones for each client. The most important change will be the `env('CLIENT_WEB_ID')` and
`env('CLIENT_WEB_SECRET'),` passed to the `ProxyRefreshForWebClientAction`.

Those proxy refresh endpoints work in 2 ways. Either by passing the `refresh_token` manually to the endpoint. Or by
passing it with the HttpCookie. In both cases the code will work, and the server will reply with a response similar to this:

```json
{
  "token_type": "Bearer",
  "expires_in": 31500,
  "access_token": "tnJ1eXAiOiJKV1QiLCJhbGciOiJSUzI1Zx...",
  "refresh_token": "ZFDPA1S7H8Wydjkjl+xt+hPGWTagX..."
}
```

Containing new Access Token and new Refresh Token.

### Refresh Token without proxy for first-party or third-party clients {#refresh-token-without-proxy-for-first-party-or-third-party-clients}

The request to `http://api.apiato.test/v1/oauth/token` should contain `grant_type=refresh_token`, the `client_id` &
`client_secret`, in addition to the `refresh_token` and finally the `scope` which could be empty.

## Email Verification {#email-verification}

Email verification is enabled by default but no route is protected against unconfirmed user access. To let only confirmed users
access a certain route you should add the `verified` middleware to that route. You can globally disable email verification by setting
`'require_email_verification' => false,` in `App\Containers\AppSection\Authentication\Configs\appSection-authentication.php`.

:::note  
While email verification is disabled you **cannot** protect any route against unconfirmed user access by using `verified` middleware and this
middleware is ignored.
:::  

When email verification is enabled and a user hits a protected endpoint, the API throws an exception, if the `User` is not yet `confirmed`.  

#### Process Flow
1) Add your web app email verification redirect page url e.g. `http://myapp.com/email/verify` to the
   `allowed-verify-email-urls` array of the `appSection-authentication` config.  
2) Send the email verification url to the user by calling the `/email/verification-notification` endpoint using your web app and pass one of the valid urls that you added in step 1 into the `verification_url` field of the endpoint.  
3) An email verification link will be sent to the user's email which looks like this: `http://myapp.test/email/verify?url=http://api.myapi.test/v1/email/verify/XbPW7awNkzl83LD6/eaabd911e2e07ede6456d3bd5725c6d4a5c2dc0b?expires=1646913047&signature=232702865b8353c445b39c50397e66db33c74df80e3db5a7c0d46ef94c8ab6a9`  
4) When the user click the link, he/she will be redirected to the url you specified before, in this case `http://myapp.com/email/verify` with the `url` query string   
5) `url` is the complete url your web app needs to call to verify the user. So you just call this url and the user will be verified.  
6) At this point you should get a `200` OK response and the user's email is verified.  

:::note  
If you are using a load balancer and having difficulty with the email verification link, e.g. app says the signature doesn't match, 
set the `protected $proxies = '*'` in the `App\Ship\Middlewares\TrustProxies.php` or update it to match your needs.
:::  

## Reset Password {#reset-password}

Use the  
`/password/forgot` (`app/Containers/AppSection/User/UI/API/Routes/ForgotPassword.v1.public.php`)
and  
`/password/reset`  (`app/Containers/AppSection/User/UI/API/Routes/ResetPassword.v1.public.php`)  endpoints.

#### Process Flow
1) Add your web app reset password page url e.g. `http://myapp.com/reset-password` to the
   `allowed-reset-password-urls` array of the `appSection-authentication`config.  
  
2) Call the `/password/forgot` endpoint with a **reset url** of your choice. It should be one of the urls in the `allowed-reset-password-urls` array.  
   This endpoint will email user a link like this:  
   `http://myapp.com/reset-password?email=mohammad.alavi1990@gmail.com&token=51f8d80182f3785648c9b9dc7162719d158fc418b3cca86c14963638ec83d663`  
  
3) And when user click on that link it will go to your front end app reset password page. And then from there you should get
   the user's new password and call the `/password-reset` endpoint with all the required fields to reset the password.

:::note  
You must set up the email to get this function to work, however for testing purposes set the `MAIL_MAILER=log` in
your `.env` file in order to the see the email content in the log file `storage/logs/laravel.log`.
:::

## Social Authentication {#social-authentication}

For Social Authentication visit the [Social Authentication](../Pacakges/social-authentication.md) page.
