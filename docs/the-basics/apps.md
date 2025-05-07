---
sidebar_position: 10
title: Apps
tags:
  - the-basics
  - apps
---

When building APIs, you may need to accommodate multiple apps, each with distinct URLs. For instance, it is common to have separate web and mobile applications, each requiring unique verification and reset password URLs.

Apiato come with a predefined `web` app, but you can create additional apps as needed.

## Creating an App

Create a class that implements the `Apiato\Ship\Apps\App` interface, then register it in the `apiato.php` config file.

```php
'apps' => [
    'web' => [
        'class' => \App\Ship\Apps\Web::class,
        'url' => env('WEB_APP_URL', 'https://myapp.com'),
    ],
    'mobile' => [
        'class' => \App\Ship\Apps\Mobile::class,
        'url' => env('MOBILE_APP_URL', 'https://myapp.test'),
    ],
],
```

In this example, we have two apps: `web` and `mobile`.

The `url` key specifies the base URL for each app. You can use environment variables to set the URLs, which allows you to easily change them in different environments (e.g., local, staging, production).

## Using the App
Retrieve the current app instance with `\App\Ship\Apps\AppFactory::current()`. The returned instance includes methods to get the base URL, verify email URL, and reset password URL.

```php
$app = AppFactory::current();

$app->url();
$app->verifyEmailUrl();
$app->resetPasswordUrl();
```

## Specifying the App in API Requests

Include an `App-Identifier` header to specify which app to use during API requests. For example, to choose the `web` app, set:
```
-H "App-Identifier: web"
```
The API will then generate links (such as verification or password reset) based on the `web` configuration.
