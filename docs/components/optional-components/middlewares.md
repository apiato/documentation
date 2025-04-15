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

Apiato middlewares are just [Laravel Middlewares](https://laravel.com/docs/middleware),
and they function in the exact same way as Laravel middlewares.
However, they come with additional rules and conventions specific to Apiato.

To generate new middleware,
you may use the `apiato:make:middleware` interactive command:

```
php artisan apiato:make:middleware
```

## Rules

- All container-specific Middlewares:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Middlewares` directory.
- All general Middlewares:
  - MUST be placed in the `app/Ship/Middlewares` directory.
- All Middlewares MUST extend the `App\Ship\Parents\Middlewares\Middleware` class.
  - The parent extension SHOULD be aliased as `ParentMiddleware`.

## Folder Structure

```php
app
├── Containers
│   └── Section
│       └── Container
│           └── Middlewares
│               ├── DemoMiddleware.php
│               └── ...
└── Ship
    └── Middlewares
        ├── AnotherMiddleware.php
        └── ...
```

## Code Example

Middlewares are defined exactly as you would define them in Laravel.
