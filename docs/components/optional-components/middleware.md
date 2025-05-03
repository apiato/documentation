---
title: Middleware
tags:
  - component
  - optional-component
  - middleware
  - service-provider
  - route
  - controller
  - request
---

Apiato middleware are just [Laravel Middleware](https://laravel.com/docs/middleware),
and they function in the exact same way as Laravel middleware.
However, they come with additional rules and conventions specific to Apiato.

To generate new middleware,
you may use the `apiato:make:middleware` interactive command:

```
php artisan apiato:make:middleware
```

## Rules

- All container-specific Middleware:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Middleware` directory.
- All general Middleware:
  - MUST be placed in the `app/Ship/Middleware` directory.
- All Middleware MUST extend the `App\Ship\Parents\Middleware\Middleware` class.
  - The parent extension SHOULD be aliased as `ParentMiddleware`.

## Folder Structure

```php
app
├── Containers
│   └── Section
│       └── Container
│           └── Middleware
│               ├── DemoMiddleware.php
│               └── ...
└── Ship
    └── Middleware
        ├── AnotherMiddleware.php
        └── ...
```

## Code Example

Middleware are defined exactly as you would define them in Laravel.
