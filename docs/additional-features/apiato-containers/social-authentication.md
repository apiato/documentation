---
title: Social Authentication
---

- [Installation](#installation)
- [Default Supported Auth Provide](#default-supported-auth-provide)
- [How Social Authentication Works](#how-social-authentication-works)
- [Setup Social Authentication](#Setup-Social-Authentication)
- [Social Authentication Container Customization](#social-auth-customization)
  - [Support new Auth Provider](#support-new-auth-provide)
  - [Changing default used Repository, Transformer & DB user table name](#changing-defaults)


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

Optionally add this to your user transformer to add social auth fields to your user repsonses:
```php
'social_auth_provider' => $user->social_provider,
    'social_nickname' => $user->social_nickname,
    'social_id' => $user->social_id,
    'social_avatar' => [
        'avatar' => $user->social_avatar,
        'original' => $user->social_avatar_original,
    ]
```
:::tip  
It is recommended to have 2 separate transformers (private & public) for the User e.g. `UserPrivateProfileTransformer`
& `UserTransformer` and add above data to the private transformer not the public one. By doing it this way you can hide
your User's personal data.  
:::

## Default Supported Auth Provide{#default-supported-auth-provide}

* Google
* Facebook
* Twitter

## How Social Authentication Works{#how-social-authentication-works}

1. The Client (Mobile or Web) sends a request to the Social Auth Provider (Facebook, Twitter...).
2. The Social Auth Provider returns a Token.
3. The Client makes a call to the server (our server) and passes the Token.
4. The Server fetches the user data from the Social Auth Provider using Token.
5. The Server create new User from the collected social data and return the Authenticated User (If the user already
   created then it just returns it).

## Setup Social Authentication{#Setup-Social-Authentication}

1) Create an App on the supported Social Auth provider.

- For Facebook: [https://developers.facebook.com/apps](https://developers.facebook.com/apps)
- For Twitter: [https://apps.twitter.com/app](https://apps.twitter.com/app)
- For
  Google: [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials)

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

3) Make a request from your client to get the `oauth` info.  
**Each Social provider returns different response and keys**

Example Twitter Response:

```json
{
  "User": {
    "tokentoken": "1212",
    "tokentokenSecret": "3434",
    "tokenid": "777",
    "tokennickname": "John_Doe",
    "tokenname": "John Doe",
    "tokenemail": null,
    "tokenavatar": "http://pbs.twimg.com/images/888/PENrcePC.jpg",
    "tokenuser": "token",
    "avatar_original": "http://pbs.twimg.com/images/999/PENrcePC.jpg"
  }
}
```

:::note  
This step should be done by your client App, which could be a Web, Mobile or other kind of client Apps.  
:::

4) Use `auth/{provider}` route and the `oauth` info to make a call from your server to the Social Provider in order to 
get the User info. For more details about the `auth/{provider}` route parameters checkout the generated documentation or
visit `app/Containers/Vendor/Socialauth/UI/API/Routes/AuthenticateAll.v1.private.php`.

5) The endpoint above should return the User and his Personal Access Token.

Example Google Response:

```json
{
    "data": {
        // user data + additional social data if you have updated your transformer as mentioned above
        .
        .
        .
        "social_auth_provider": "google",
        "social_id": "113834952367767922133",
        "social_avatar": {
            "avatar": "https:\/\/lh6.googleusercontent.com\/-OSItz6IHbSw\/AAA\/AMZuucltEs\/s96-c\/photo.jpg",
            "original": "https:\/\/lh6.googleusercontent.com\/-OSItz6IHbSw\/AAA\/AMZuucltEs\/s96-c\/photo.jpg"
        }
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

## Social Authentication Container Customization {#social-auth-customization}
You can customize this container by publishing its config and modifying its values
```shell
php artisan vendor:publish
```  
Config file will be copied to `app/Ship/Configs/vendor-socialAuth.php`

### Support new Auth Provider {#support-new-auth-provide}
1. Publish the configs
2. Create your new auth provider by implementing `App\Containers\Vendor\SocialAuth\Contracts\SocialAuthProvider`  
You can check out supported providers here `App\Containers\Vendor\SocialAuth\SocialAuthProviders` to get an idea about
how to implement your provider.
3. Add your new provider to `providers` array in the `vendor-socialAuth` config.

### Changing default used Repository, Transformer & DB user table name {#changing-defaults}
This container depends on Apiato's default user repository, transformer & database user table name.
If you changed those defaults you can update and provide them in the configs.

