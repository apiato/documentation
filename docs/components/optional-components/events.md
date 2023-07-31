---
title: Events
---

- [Definition](#definition)
- [Principles](#principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Broadcasting](#broadcasting)

## Definition

 - Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application.
 - Events are classes that can be fired from anywhere in your application.
 - An event class will usually be bound to one, or many Events Listeners Classes or has those Listeners registered to listen to it.
 - "fire" is the term that is usually used to call an Event.

## Principles

- Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended).
- Events SHOULD be created inside the Containers. However, general Events CAN be created in the Ship layer.

## Rules

- Event classes MUST be placed in `app/Containers/{Section}/{Container}/Events`.
- General Events MUST be placed in `app/Ship/Events`.
- All Events MUST extend the `App\Ship\Parents\Events\Event` class.

## Folder Structure

```
- App
  - Containers
    - {Section}
      - {Container}
        - Events
          - SomethingHappenedEvent.php
          - ...
        - Listeners
          - ListenToMusicListener.php
          - ...

  - Ship
    - Events
      - GlobalStateChanged.php
      - SomethingBiiigHappenedEvent.php
      - ...
```

## Usage {#usage}

In Laravel, you can create and register events in multiple way. Read [Laravel documentation](https://laravel.com/docs/events) to learn more about Events. 

Your custom `EventServiceProvider` needs to be registered in the containers `MainServiceProvider` as well.

## Broadcasting {#broadcasting}
To define Broadcasting channels go to `app/Ship/Boardcasts/channels.php`.

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/events).
:::
