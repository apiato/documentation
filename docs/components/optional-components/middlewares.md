---
title: Middlewares
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Sample](#code-sample)

## Definition

Middleware provide a convenient mechanism for filtering HTTP requests entering your application.

You can enable and disable Middlewares as you wish.

## Principles

- There are two types of Middlewares, General (applied on all the Routes by default) and Endpoints Middlewares (applied on some Endpoints).

- The Middlewares CAN be placed in Ship layer or Container layer depending on its roles.

## Rules

- If a Middleware is written inside a Container then it MUST be registered inside that Container.
- To register Middlewares in a Container the container needs to have a `MiddlewareServiceProvider`, and like all other Container Providers it MUST be registered in the `MainServiceProvider` of that Container.
- General Middlewares SHOULD live in `app/Ship/Middlewares` and are registered in the `App\Ship\Kernels\HttpKernel` class.

- Third Party packages Middleware CAN be registered in Containers or on the Ship layer (wherever they make more sense).
_For example the `jwt.auth` middleware "provided by the JWT package" should be registered in the Authentication Container (`app/Containers/AppSection/Authentication/Providers/MiddlewareServiceProvider.php`)_.
  
## Folder Structure

```
 - App
  - Containers
    - {Section}
      - {Container}
        - Middlewares
        - WebAuthentication.php
      - Ship
        - Middleware
          - Http
            - EncryptCookies.php
            - VerifyCsrfToken.php
```

## Code Example

#### Middleware Registration Inside the Container Example

```php
class MiddlewareServiceProvider extends MiddlewareProvider
{
    protected array $middlewares = [
        // ..
    ];

    protected array $middlewareGroups = [
        'web' => [
            // ..
        ],
        'api' => [
            // ..
        ],
    ];

    protected array $routeMiddleware = [
        // Apiato User Authentication middleware for Web Pages
        'guest' => RedirectIfAuthenticated::class
    ];
}
```

#### Middleware Registration Inside the Ship Layer (HTTP Kernel)

```php
class HttpKernel extends LaravelHttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        // Laravel middleware's
        // \App\Http\Middleware\TrustHosts::class,
        TrustProxies::class,
        HandleCors::class,
        PreventRequestsDuringMaintenance::class,
        ValidatePostSize::class,
        TrimStrings::class,
        ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            EncryptCookies::class,
            AddQueuedCookiesToResponse::class,
            StartSession::class,
//             \Illuminate\Session\Middleware\AuthenticateSession::class,
            ShareErrorsFromSession::class,
            VerifyCsrfToken::class,
            SubstituteBindings::class,
        ],

        'api' => [
            // Note: The "throttle" Middleware is registered by the RoutesLoaderTrait in the Core
            SubstituteBindings::class,
            ValidateJsonContent::class,
            ProcessETagHeadersMiddleware::class,
            ProfilerMiddleware::class,
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => Authenticate::class,
        // 'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'cache.headers' => SetCacheHeaders::class,
        // Note: The "can" Middleware is registered by MiddlewareServiceProvider in Authorization Container
        // 'can' => \Illuminate\Auth\Middleware\Authorize::class,
        // Note: The "guest" Middleware is registered by MiddlewareServiceProvider in Authentication Container
        // 'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
        'password.confirm' => RequirePassword::class,
        'signed' => ValidateSignature::class,
        'throttle' => ThrottleRequests::class,
        'verified' => EnsureEmailIsVerified::class,
    ];

    /**
     * The priority-sorted list of middleware.
     *
     * Forces non-global middleware to always be in the given order.
     *
     * @var string[]
     */
    protected $middlewarePriority = [
        EncryptCookies::class,
        StartSession::class,
        ShareErrorsFromSession::class,
        Authenticate::class,
        ThrottleRequests::class,
        AuthenticateSession::class,
        SubstituteBindings::class,
        Authorize::class,
    ];
}
```

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/middleware).
:::
