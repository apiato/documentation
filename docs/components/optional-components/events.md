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

Apiato events are just Laravel events, and they function in the exact same way as Laravel events.
However, they come with additional rules and conventions specific to Apiato.

To generate new events and listeners you may use the following interactive commands:

```
php artisan apiato:generate:event
php artisan apiato:generate:listener
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

[//]: # (  - Events & Listeners MUST be registered in their respective container's `App\Containers\{Section}\{Container}\Providers\EventServiceProvider` class.)
- All general
  - Events MUST be placed in the `app/Ship/Events` directory.
  - Listeners MUST be placed in the `app/Ship/Listeners` directory.

[//]: # (  - Events & Listeners MUST be registered in the `App\Ship\Providers\EventServiceProvider` class.)
- Listeners CAN listen to all cross-container & cross-section events.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           ├── Events
│           │   ├── SomethingHappenedEvent.php
│           │   └── ...
│           └── Listeners
│               ├── SomethingHappenedListener.php
│               └── ...
└── Ship
    ├── Events
    │   ├── GlobalStateChangedEvent.php
    │   └── ...
    └── Listeners
        ├── GlobalStateChangedListener.php
        └── ...
```

## Code Example

Events and Listeners are defined exactly as you would define them in Laravel.

## Registering Events & Listeners

The registration of events and listeners depends on where you intend to respond to events.
Listeners can be registered in both container and Ship.

### In The Container

Registering events and listeners in the container can be done
by adding them to the `listen` array in the `App\Containers\{Section}\{Container}\Providers\EventServiceProvider` class.

```php
use ...
use App\Ship\Parents\Providers\EventServiceProvider as ParentEventServiceProvider;

class EventServiceProvider extends ParentEventServiceProvider
{
    protected $listen = [
        OrderShipped::class => [
            SendShipmentNotification::class,
        ],
    ];
}
```

To generate an event service provider
you may use the `apiato:generate:provider` interactive command:

```
php artisan apiato:generate:provider
```

Remember to also register the `EventServiceProvider` in the container's `MainServiceProvider`:

```php
use ...
use App\Ship\Parents\Providers\MainServiceProvider as ParentMainServiceProvider;

class MainServiceProvider extends ParentMainServiceProvider
{
    protected array $serviceProviders = [
        // ... Other service providers
        EventServiceProvider::class,
    ];
}
```

### In The Ship

Registering events and listeners in the Ship can be done
by adding them to the `listen` array in the `App\Ship\Providers\EventServiceProvider` class.
