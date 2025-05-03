---
title: Events
tags:
  - component
  - optional-component
  - event
  - listener
  - service-provider
  - action
  - task
---

Apiato events are just [Laravel Events](https://laravel.com/docs/events),
and they function in the exact same way as Laravel events.
However, they come with additional rules and conventions specific to Apiato.

To generate new events and listeners, you may use the following interactive commands:

```
php artisan apiato:make:event
php artisan apiato:make:listener
```

## Rules

- All 
  - Events MUST extend the `App\Ship\Parents\Events\Event` class.
    - The parent extension SHOULD be aliased as `ParentEvent`.
  - Listeners MUST extend the `App\Ship\Parents\Listeners\Listener` class.
    - The parent extension SHOULD be aliased as `ParentListener`.
- All container-specific
  - Events MUST be placed in the `app/Containers/{Section}/{Container}/Events` directory.
  - Listeners MUST be placed in the `app/Containers/{Section}/{Container}/Listeners` directory.
- All general
  - Events MUST be placed in the `app/Ship/Events` directory.
  - Listeners MUST be placed in the `app/Ship/Listeners` directory.
- Listeners CAN listen to all cross-container and cross-section events.
- Events & Listeners MUST be registered in the location where you intend to handle that event. (unless using [event discovery](https://laravel.com/docs/events#event-discovery))
  - If you intend to handle an event in:
    - A container, the Listener MUST be registered in `App\Containers\{Section}\{Container}\Providers\EventServiceProvider` class.
    - The Ship, the Listener MUST be registered in `App\Ship\Providers\EventServiceProvider` class.

## Folder Structure

The highlighted sections showcase event & listener registration points:

```php
app
├── Containers
│   └── Section
│       └── Container
│           ├── Events
│           │   ├── DemoEvent.php
│           │   └── ...
│           ├── Listeners
│           │   ├── DemoListener.php
│           │   └── ...
│           └── Providers
                // highlight-start
│               ├── EventServiceProvider.php
                // highlight-end
│               └── ...
└── Ship
    ├── Events
    │   ├── ShipDemoEvent.php
    │   └── ...
    ├── Listeners
    │   ├── ShipDemoListener.php
    │   └── ...
    └── Providers
        // highlight-start
        ├── EventServiceProvider.php
        // highlight-end
        └── ...
```

## Code Example

Events and Listeners are defined exactly as you would define them in Laravel.

### Event Discovery
> Available since Core v8.15.0

Instead of registering events and listeners manually in the `$listen` array of the `EventServiceProvider`s,
you can enable Laravel's [event discovery](https://laravel.com/docs/events#event-discovery).
When event discovery is enabled,
Apiato will automatically find
and register your events and listeners
by scanning your application's `app/Containers/{Section}/{Container}/Listeners` directory.
In addition, any explicitly defined events listed your `EventServiceProvider`s will still be registered.

#### Configuration
Apiato is configured
to load all event files in the `app/Containers/{Section}/{Container}/Listeners` and `app/Ship/Listeners` directories.

If the default configuration does not suit your needs, you can customize it
via the [Apiato Configuration](../../framework-features/advance-configuration.mdx#events) class.
