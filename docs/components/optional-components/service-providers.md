---
title: Service Providers
tags:
  - component
  - optional-component
  - service-provider
  - middleware
  - event
---

Apiato service providers are just Laravel service providers,
and they function in the exact same way as Laravel service providers.
However, they come with additional rules and conventions specific to Apiato.

To generate new service providers
you may use the `apiato:generate:provider` interactive command:

```
php artisan apiato:generate:provider
```

There are two distinct types of service providers within a container:
the `Main Service Provider` and additional service providers.
The Main Service Provider serves as the central registration point for all custom service providers within the container.
It orchestrates the setup and integration of these custom providers,
ensuring the seamless functioning of your application's components.

## Rules

- You MUST NOT register any Service Provider in the `config/app.php` (except Laravel default service providers).
- Each Container:
  - MAY have one or many Service Providers.
  - MUST have a `Main Service Provider` -> `App\Containers\{Section}\{Container}\Providers\MainServiceProvider` class.
      - MUST be named `MainServiceProvider`.
      - MUST extend the `App\Ship\Parents\Providers\MainServiceProvider` class.
        - The parent extension SHOULD be aliased as `ParentMainServiceProvider`.
- All container-specific Service Providers:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Providers` directory.
  - MUST be registered in their respective container's `App\Containers\{Section}\{Container}\Providers\MainServiceProvider` class.
- All general Service Providers:
  - MUST be placed in the `app/Ship/Providers` directory.
  - MUST be registered in the `App\Ship\Prviders\ShipProvider` class.
- All non-Laravel or third-party package Service Providers:
  - MUST extend the `App\Ship\Parents\Providers\MainServiceProvider` class.
  - The parent extension SHOULD be aliased as `ParentMainServiceProvider`.
- When using Laravel [default service providers](#laravel-service-providers):
  - `AuthServiceProvider` MUST extend `App\Ship\Parents\Providers\AuthServiceProvider`.
  - `BroadcastServiceProvider` MUST extend `App\Ship\Parents\Providers\BroadcastServiceProvider`.
  - `EventServiceProvider` MUST extend `App\Ship\Parents\Providers\EventServiceProvider`.
  - `MiddlewareServiceProvider` MUST extend `App\Ship\Parents\Providers\MiddlewareServiceProvider`.
  - `RouteServiceProvider` MUST extend `App\Ship\Parents\Providers\RouteServiceProvider`.
  - The parent extension SHOULD be aliased as `Parent{ServiceProviderName}`. For example: `ParentAuthServiceProvider`.

## Folder Structure

The highlighted sections showcase service provider registration points:

- `MainServiceProvider.php` acts as the central registration point for custom service providers specific to a container.
- `ShipProvider.php` acts as the central registration point for the Ship (general) service providers.

```php
app
├── Containers
│   └── Section
│       └── Container
│           └── Providers
│               ├── AuthServiceProvider.php
│               ├── BroadcastServiceProvider.php
│               ├── EventServiceProvider.php
                // highlight-start
│               ├── MainServiceProvider.php
                // highlight-end
│               ├── MiddlewareServiceProvider.php
│               ├── RouteServiceProvider.php
│               ├── CustomServiceProvider.php
│               └── ...
└── Ship
    └── Providers
        ├── RouteServiceProvider.php
        // highlight-start
        ├── ShipProvider.php
        // highlight-end
        └── ...
```

## Code Example

#### Main Service Provider:

```php
use ...
use App\Ship\Parents\Providers\MainServiceProvider as ParentMainServiceProvider;

class MainServiceProvider extends ParentMainServiceProvider
{
    // This providers will be automatically registered
    public array $serviceProviders = [
        CustomServiceProvider::class,
        MiddlewareServiceProvider::class,
        PassportServiceProvider::class,
        // ...
    ];

    public array $aliases = [
        // ...
    ];
}
```

## Register Providers

The registration process for a service provider varies depending on its intended scope within the application.
Different places are designated for different levels of service provider usage.

In essence, the decision of where to register a service provider boils down to two key factors:
the scope of service provider usage and the logical location for its registration.

### Container Service Providers

#### Main Service Provider

A container `Main Service Provider` will be automatically registered by Apiato
so manual registration isn't necessary.
In turn,
Main Service Providers will register all service providers listed in their `serviceProviders` property.

#### Additional Service Providers

To register a provider,
add the provider's class name to the `serviceProviders` array in the `App\Containers\{Section}\{Container}\Providers\MainServiceProvider` class.

```php
public array $serviceProviders = [
    CustomServiceProvider::class,
    AnotherCustomServiceProvider::class,
    EventsServiceProvider::class,
    // ...
];
```

You can also list aliases in the `aliases` property of the `App\Containers\{Section}\{Container}\Providers\MainServiceProvider` class.

```php
public array $aliases = [
    'CustomAlias' => CustomFacade::class,
    'AnotherCustomAlias' => AnotherCustomFacade::class,
    // ...
];
```

### General Service Providers

General service providers must be registered in the `App\Ship\Providers\ShipProvider` class.
This can be done by adding the provider class name to the `serviceProviders` array.

```php
public array $serviceProviders = [
    CustomServiceProvider::class,
    AnotherCustomServiceProvider::class,
    EventsServiceProvider::class,
    // ...
];
```

### Third Party Service Providers

When dealing with third-party packages that require service provider registration in `config/app.php`,
you should follow these guidelines:

- **Specific Container Usage**: If the package is used within a particular container, register its service provider in that container `App\Containers\{Section}\{Container}\Providers\MainServiceProvider` class.

- **Framework-wide Usage**: If the package is generic and used throughout the entire application, you can register its service provider in the `App\Ship\Prviders\ShipProvider` class. However, avoid registering it directly in `config/app.php`.

## Laravel Service Providers

Apiato introduces a refined organization for Laravel service providers.
By default, Laravel standard service providers,
located in the `app/providers` directory,
have been restructured in Apiato to reside in the `app/Ship/Parents/Providers` directory.

Here's the mapping of Laravel's default service providers to their new locations in Apiato:

- `App\Providers\AppServiceProvider` → `App\Ship\Parents\Providers\MainServiceProvider`
  - Note: Laravel `AppServiceProvider` is renamed to `MainServiceProvider` in Apiato.
- `App\Providers\AuthServiceProvider` → `App\Ship\Parents\Providers\AuthServiceProvider`
- `App\Providers\BroadcastServiceProvider` → `App\Ship\Parents\Providers\BroadcastServiceProvider`
- `App\Providers\EventServiceProvider` → `App\Ship\Parents\Providers\EventServiceProvider`
- `App\Providers\RouteServiceProvider` → `App\Ship\Parents\Providers\RouteServiceProvider`

You should not modify these providers directly.
Instead, extend them within your container's `Providers` directory.
For instance,
the `App\Containers\AppSection\Authentication\Providers\AuthServiceProvider` class extends `App\Ship\Parents\Providers\AuthServiceProvider`.

Those providers are not auto registered by default,
thus writing any code there will not be available, unless you extend them.
Once extended, the child Service Provider should be registered in its container `MainServiceProvider`,
which makes it available.

:::note 
Do note that the `App\Ship\Parents\Providers\RouteServiceProvider` is a unique case.
Because it's required by Apiato, it is registered by the `App\Ship\Prviders\ShipProvider` and is loaded automatically.
:::

## Service Providers Registration Flow

If you want to understand the service provider registration process,
here is a breakdown of the registration flow.

Consider the following folder structure:

```markdown
app
├── Containers
│   └── Section
│       ├── ContainerA
│       │   └── Providers
│       │       ├── CustomServiceProvider.php ─────────►────────┐
│       │       ├── EventServiceProvider.php  ─────────►────────┤
│       │       ├── MainServiceProvider.php  ◄──registered─in─◄─┘
│       │       └── ...
│       └── ContainerB
│           └── Providers
│               ├── AnotherCustomServiceProvider.php ────────►────────┐
│               ├── EventServiceProvider.php         ────────►────────┤
│               ├── MainServiceProvider.php        ◄──registered─in─◄─┤
│               ├── MiddlewareServiceProvider.php    ────────►────────┘
│               └── ...
└── Ship
    └── Providers
        ├── CustomGeneralServiceProvider.php ────────►────────┐
        ├── RouteServiceProvider.php         ────────►────────┤
        ├── ShipProvider.php               ◄──registered─in─◄─┘
        └── ...
```

The following diagram illustrates the registration flow of service providers in the above folder structure:

```mermaid
graph TB
  subgraph ContainerB[Container B]
    BMP[MainServiceProvider]
    BEP[EventServiceProvider]
    subgraph BServiceProviders[Service Providers]
      AnotherCustomServiceProvider
      BEP
      MiddlewareServiceProvider
    end
    BMP
  end
    
  subgraph ContainerA[Container A]
    AMP[MainServiceProvider]
    subgraph AServiceProviders[Service Providers]
      CustomServiceProvider
      EventServiceProvider
    end
    AMP
  end
  
  subgraph Application
    SPLoader[[Service Provider Loader]]-- loads-->AMP
    SPLoader-- loads-->BMP
  end
  
  AMP -->|loads| AServiceProviders
  AServiceProviders -->|registered in| AMP
  BMP -->|loads| BServiceProviders
  BServiceProviders -->|registered in| BMP
```
