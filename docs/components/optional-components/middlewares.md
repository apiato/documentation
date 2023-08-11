---
title: Middlewares
tags:
  - component
  - optional-component
  - middleware
  - service-provider
  - route
  - controller
  - request
---

Apiato middlewares are just Laravel middlewares,
and they function in the exact same way as Laravel middlewares.
However, they come with additional rules and conventions specific to Apiato.

To generate new middlewares
you may use the `apiato:generate:middleware` interactive command.

```
php artisan apiato:generate:middleware
```

## Rules

- All container-specific Middlewares:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Middlewares` directory.
  - MUST be registered in their respective Container's `App\Containers\{Section}\{Container}\Providers\MiddlewareServiceProvider` class.
- All general Middlewares:
  - MUST be placed in the `app/Ship/Middlewares` directory.
  - MUST be registered in the `App\Ship\Kernels\HttpKernel` class.
- All non-Laravel or third-party package Middlewares MUST extend the `App\Ship\Parents\Middlewares\Middleware` class.
  - The parent extension SHOULD be aliased as `ParentMiddleware`.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           ├── Middlewares
│           │   ├── YourMiddleware.php
│           │   └── ...
│           └── Providers
│               ├── MiddlewareServiceProvider.php
│               └── ...
└── Ship
    ├── Kernels
    │   └── HttpKernel.php
    └── Middlewares
        ├── EncryptCookies.php
        └── VerifyCsrfToken.php
            └── ...
```

## Code Example

Middlewares are defined exactly as you would define them in Laravel.

## Registering Middleware

The registration process for a middleware varies depending on its intended scope within the application.
Different places are designated for different levels of middleware usage.

In essence, the decision of where to register a middleware boils down to two key factors:
the scope of middleware usage and the logical location for its registration.

### Container Middlewares

If a middleware usage is specific to a Container,
it must be registered in the `App\Containers\{Section}\{Container}\Providers\MiddlewareServiceProvider` class.

```php
use ...
use App\Ship\Parents\Providers\MiddlewareServiceProvider as ParentMiddlewareServiceProvider;

class MiddlewareServiceProvider extends ParentMiddlewareServiceProvider
{
    protected array $middlewares = [];

    protected array $middlewareGroups = [];

    protected array $middlewarePriority = [];

    protected array $middlewareAliases = [];
}
```

Remember to also register the middleware service provider in the container's MainServiceProvider:

```php
use ...
use App\Ship\Parents\Providers\MainServiceProvider as ParentMainServiceProvider;

class MainServiceProvider extends ParentMainServiceProvider
{
    protected array $serviceProviders = [
        // ... Other service providers
        MiddlewareServiceProvider::class,
    ];
}
```

### General Middlewares

General middlewares must be registered in the `App\Ship\Kernels\HttpKernel` class.

### Third Party Middlewares

When dealing with third-party packages that require middleware registration in the `App\Ship\Kernels\HttpKernel` class,
you should follow these guidelines:

- **Specific Container Usage**: If the package is used within a particular container, register its middleware in that container `App\Containers\{Section}\{Container}\Providers\MiddlewareServiceProvider` class.

- **Framework-wide Usage**: If the package is generic and used throughout the entire application, you can register its middleware in the `App\Ship\Kernels\HttpKernel` class.
