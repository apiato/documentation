---
title: Service Providers
tags:
  - component
  - optional-component
  - service-provider
  - middleware
  - event
---

Apiato service providers are just [Laravel Service Providers](https://laravel.com/docs/providers),
and they function in the exact same way as Laravel service providers.
However, they come with additional rules and conventions specific to Apiato.

To generate new service providers,
you may use the `apiato:make:provider` interactive command:

```
php artisan apiato:make:provider
```

## Rules

- You MUST NOT register any Service Provider in the `config/app.php` (except Laravel default service providers).
- Each Container:
  - MAY have one or many Service Providers.
- All container-specific Service Providers:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Providers` directory.
- All general Service Providers:
  - MUST be placed in the `app/Ship/Providers` directory.
- All Service Providers:
  - MUST extend the `App\Ship\Parents\Providers\ServiceProvider` class.
  - The parent extension SHOULD be aliased as `ParentServiceProvider`.
- When using Laravel [default service providers](#laravel-service-providers):
  - `EventServiceProvider` MUST extend `App\Ship\Parents\Providers\EventServiceProvider`.
  - `RouteServiceProvider` MUST extend `App\Ship\Parents\Providers\RouteServiceProvider`.
  - The parent extension SHOULD be aliased as `Parent{ServiceProviderName}`. For example: `ParentAuthServiceProvider`.

## Folder Structure

```php
app
├── Containers
│   └── Section
│       └── Container
│           └── Providers
│               ├── EventServiceProvider.php
│               ├── ServiceProvider.php
│               ├── CustomServiceProvider.php
│               └── ...
└── Ship
    └── Providers
        ├── ShipServiceProvider.php
        ├── CustomServiceProvider.php
        └── ...
```

## Code Example

Service Providers are defined exactly as you would define them in Laravel.

## Service Providers Registration
Normally, service providers are registered in the `bootstrap/providers.php` file.
However, in Apiato, this is handled automatically.

All providers within the `Providers` directories of Containers and Ship are automatically registered.
This means you don't need to manually register them in the `bootstrap/providers.php` file.

#### Third-Party Service Providers

When dealing with third-party packages that require service provider registration in `bootstrap/providers.php` file,
you should follow these guidelines:

- **Specific Container Usage**: If the package is used within a particular container, register its service provider in that container `App\Containers\{Section}\{Container}\Providers\ServiceProvider` class.

- **Framework-wide Usage**: If the package is generic and used throughout the entire application, you can register its service provider in the `App\Ship\Prviders\ShipServiceProvider` class. However, avoid registering it directly in `config/app.php`.
