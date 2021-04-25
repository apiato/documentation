---
title: Providers
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Register Service Providers](#register-service-providers)
  + [Container's Main Service Provider](#container-s-main-service-provider)
  + [Container's Additional Service Providers](#container-s-additional-service-providers)
  + [Third party packages Service Providers](#third-party-packages-service-providers)
* [Information about Laravel Service Providers](#information-about-laravel-service-providers)

### Definition {#definition}

Providers (are short names for Service Providers).

Providers are the central place of configuring and bootstrapping a Container.

They are the place where you register things like container bindings, event listeners, middleware, routes, other providers, aliases... to the framework service container.

### Principles {#principles}

- There are 2 types of Providers in a Container, the **Main Provider** and the **Additional (Job Specific) Providers** (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider).

- A Container MAY have one or many Providers and MAY have no Provider at all.

- A Container CAN have only a single Main Provider.

- The Main Provider is where all the Job Specific Providers get registered.

- Third party packages Providers MUST be registered inside the Container Main service provider. (Same applies to Aliases).

- Providers CAN be registered on the Ship Main Provider, if they are general or are intended to be used by many containers. (Same applies to Aliases).

### Rules {#rules}

- The Main Provider will be auto registered by the Ship Engine, so no need to register it manually anywhere.

- All Main Providers MUST extend from `App\Ship\Parents\Providers\MainProvider`.

- All other types of Providers (EventsProvider, BroadcastsProvider, AuthProvider, MiddlewareProvider, RoutesProvider) must extend from their parent providers `Ship/Parents/Providers/*`.

- The Main Provider MUST be named `MainServiceProvider` in every container.

- You should not register any Provider in the framework (`config/app.php`).

### Folder Structure {#folder-structure}

#### Example: User Container `Service Providers`

```
 - app
     - Containers
        - {section-name}
            - User
                - Providers
                    - MainServiceProvider.php
                    - AuthServiceProvider.php
                    - EventsServiceProvider.php
                    - ...
```

In this example above only the `AuthServiceProvider` and `EventsServiceProvider` needs to be registered in `MainServiceProvider`. While the `MainServiceProvider` will get automatically registered.

### Code Samples {#code-samples}

#### Main Service Provider Example

```php
class MainServiceProvider extends MainProvider
{
    // These providers will we automatically registered
    public array $serviceProviders = [
        PassportServiceProvider::class,
        AuthProvider::class,
        MiddlewareServiceProvider::class
        // ...
    ];

    public array $aliases = [
        // ...
    ];
}
```

### Register Service Providers: {#register-service-providers}

#### Container's Main Service Provider {#container-s-main-service-provider}

No need to register the `MainService Provider` anywhere, it will be automatically registered, and it is responsible for registering all Container Additional (Job Specific) Providers.

#### Container's Additional Service Providers {#container-s-additional-service-providers}

You MAY add as many Additional Service Providers as you want in a Container. However, in order to get them loaded in the framework you MUST register them all in the `MainService Provider` as follows:

```php
public array $serviceProviders = [
    AuthServiceProvider::class,
    EventsServiceProvider::class,
    // ...
];
```

:::note
Same rule applies to **Aliases**.
:::

#### Third party packages Service Providers {#third-party-packages-service-providers}

If a package requires registering its service provider in the `config/app.php`, you SHOULD register its service provider in the Main container where you are using it.
However, if it's a generic package used by the entire framework and not a specific Container or feature. Then you can register that service provider in the `app/Ship/Providers/ShipProvider.php`, but never in the `config/app.php`.

### Information about Laravel Service Providers {#information-about-laravel-service-providers}

By default, Laravel provides some service providers in its `app/providers` directory.
In apiato those providers have been renamed and moved to the Ship Layer `app/Ship/Parents/Providers/*`:

- AppServiceProvider
- RouteServiceProvider
- AuthServiceProvider
- BroadcastServiceProvider
- EventsServiceProvider

:::note
You should not touch those providers, instead you have to extend them from a containers providers in order to modify them.
Example: the **app/Containers/AppSection/Authentication/Providers/AuthProvider.php** is extending the **AuthServiceProvider** to modify it.
:::

Those providers are not auto registered by default, thus writing any code there will not be available, unless you extend them.
Once extended the child Provider should be registered in its Container Main Provider, which makes its parent available.

This rule does not apply to the `RouteServiceProvider` since it's required by Apiato, this Provider is registered by the `ShipProvider`.

Check [How Service Providers are auto-loaded](../faq).

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/providers).
:::
