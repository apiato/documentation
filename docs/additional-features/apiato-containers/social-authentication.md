---
title: Social Authentication
---

- [Installation](#installation)
- [Default Supported Auth Provide](#default-supported-auth-provide)
- [How Social Authentication Works](#how-social-authentication-works)
- [Setup Social Authentication](#Setup-Social-Authentication)
- [Support new Auth Provide](#support-new-auth-provide)

Under the hood this container uses [Laravel Socialite](https://github.com/laravel/socialite).

## Installation{#installation}
In the following instructions we assume we have a fresh **Apiato** installation.

```shell
composer require apiato/social-auth-container
```
Now run `php artisan migrate`

Add this values to $fillable array in your `User` model

```
    protected $fillable = [
        ...
        'social_provider',
        'social_nickname',
        'social_id',
        'social_token',
        'social_token_secret',
        'social_refresh_token',
        'social_expires_in',
        'social_avatar',
        'social_avatar_original',
        ...
    ];
```

And update `UpdateUserAction.php` **sanitizeInput** method with this fields
```
    $sanitizedData = $request->sanitizeInput([
        ...
        'social_token',
        'social_expires_in',
        'social_refresh_token',
        'social_token_secret',
    ]);
```
Optionally add this to your user transformer to add social auth fields to your user repsonses:
```php
'social_auth_provider' => $user->social_provider,
    'social_nickname' => $user->social_nickname,
    'social_id' => $user->social_id,
    'social_avatar' => [
        'avatar' => $user->social_avatar,
        'original' => $user->social_avatar_original,
```
:::tip
It is recommended to have 2 separate transformers (private & public) for the User e.g. `UserPrivateProfileTransformer` & `UserTransformer` and add above data to the private transformer not the public one. By doing it this way you can hide your User's personal data.
:::

## Default Supported Auth Provide{#default-supported-auth-provide}

* Google
* Facebook
* Twitter

## How Social Authentication Works{#how-social-authentication-works}

1. The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter..).
2. The Social Auth Provider returns a Code (Tokens).
3. The Client makes a call to the server (our server) and passes the Code (Tokens) retrieved from the Provider.
4. The Server fetches the user data from the Social Auth Provider using the received Code (Tokens).
5. The Server create new User from the collected social data and return the Authenticated User (If the user already
   created then it just returns it).

## Setup Social Authentication{#Setup-Social-Authentication}

1) Create an App on the supported Social Auth provider.

- For Facebook: [https://developers.facebook.com/apps](https://developers.facebook.com/apps)
- For Twitter: [https://apps.twitter.com/app](https://apps.twitter.com/app)
- For
  Google: [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials)

For the callback URL you can use this Apiato web endpoint `http://apiato.test/auth/{provider}/callback` *(replace the
provider with any of the supported providers `facebook`, `twitter`,...)*.

2) For any supported provider you want to use, set Tokens and Secrets in the `.env`
```
AUTH_FACEBOOK_CLIENT_ID=
AUTH_FACEBOOK_CLIENT_SECRET=
AUTH_FACEBOOK_CLIENT_REDIRECT=

AUTH_TWITTER_CLIENT_ID=
AUTH_TWITTER_CLIENT_SECRET=
AUTH_TWITTER_CLIENT_REDIRECT=

AUTH_GOOGLE_CLIENT_ID=
AUTH_GOOGLE_CLIENT_SECRET=
AUTH_GOOGLE_CLIENT_REDIRECT=
```

3) Make a request from your client to get the `oauth` info. **Each Social provider returns different response and keys**

For testing purposes Apiato provides a web endpoint (`http://apiato.test/auth/{provider}` ) to act as a client.

Use that endpoint from your browser *(replace the provider with any of the supported providers `facebook`, `twitter`
,..)* to get the `oauth` info.

Example Twitter Response:

```json
User {
  tokentoken: "1212"
  tokentokenSecret: "3434"
  tokenid: "777"
  tokennickname: "John_Doe"
  tokenname: "John Doe"
  tokenemail: null
  tokenavatar: "http://pbs.twimg.com/images/888/PENrcePC.jpg"
  tokenuser:
  token"avatar_original": "http://pbs.twimg.com/images/999/PENrcePC.jpg"
}
```

NOTE: This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps.

4) Use the `oauth` info to make a call from your server to the Social Provider in order to get the User info.

Example Getting Twitter User: **Twitter requires the `oauth_token` and `oauth_secret`, other Providers might only
require the `oauth_token`**

```text
POST /v1/auth/twitter HTTP/1.1
Host: api.apiato.test
Content-Type: application/x-www-form-urlencoded
Accept: application/json

oauth_token=1212&oauth_secret=3434
```

Note: For Facebook send only the `oauth_token` which is named as `access_token` in the facebook response. For more
details about the parameters checkout the generated documentation or
visit `app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php`

5) The endpoint above should return the User and his Personal Access Token.

Example Twitter Response:

```json
{
    "data": {
        "object": "User",
        "id": "YJ5evQ20Jyzx68dK",
        "name": "John Doe",
        "email": "john.doe@test.com",
        "confirmed": null,
        "nickname": null,
        "gender": null,
        "birth": null,
        "social_auth_provider": "google",
        "social_id": "113834952367767922133",
        "social_avatar": {
            "avatar": "https:\/\/lh6.googleusercontent.com\/-OSItz6IHbSw\/AAA\/AMZuucltEs\/s96-c\/photo.jpg",
            "original": "https:\/\/lh6.googleusercontent.com\/-OSItz6IHbSw\/AAA\/AMZuucltEs\/s96-c\/photo.jpg",
        },
        "created_at": "2021-03-31T06:37:28.000000Z",
        "updated_at": "2021-03-31T06:37:28.000000Z",
        "readable_created_at": "1 second ago",
        "readable_updated_at": "1 second ago"
    },
    "meta": {
        "include": [
            "roles"
        ],
        "custom": {
            "token_type": "personal",
            "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."
        }
    }
}
```

## Support new Auth Provider{#support-new-auth-provide}

:::caution Instructions
This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:

1- Copy the container from `Vendor` to `AppSection` (or any of your custom sections) of your project  
2- Fix the namespaces  
3- Remove `apiato/social-auth-container` dependency from project root composer.json  
:::

1) Pick an Auth Provider from the supported providers by [Socialite](https://socialiteproviders.github.io/).  
2) Go to `app/Containers/YourSection/Socialauth/Tasks/FindUserSocialProfileTask.php` and support your provider.
