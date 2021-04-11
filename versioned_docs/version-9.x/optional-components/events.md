---
title: Events
---

- [Definition](#definition)
- [Principles](#principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Enabling Events](#enabling-events)
- [Usage](#usage)
- [Dispatch Events](#dispatch-events)
- [Queueing](#queueing)
- [Broadcasting](#broadcasting)

### Definition {#definition}

Events: 

 - Events provide a simple observer implementation, allowing you to subscribe and listen for various events that occur in your application.
 - Events are classes that can be fired from anywhere in your application.
 - An event class will usually be bound to one or many Events Listeners Classes or has those Listeners registered to listen to it.
 - "fire" is the term that is usually used to call an Event.

More details [here](https://laravel.com/docs/events).

### Principles {#principles}

- Events can be fired from Actions and or Tasks. It's preferable to choose one place only. (Tasks are recommended).
- Events SHOULD be created inside the Containers. However, general Events CAN be created in the Port layer.

### Rules {#rules}

- Event classes CAN be placed inside the Containers in Events folders or on the Ship for the general Events.
- All Events MUST extend from `App\Ship\Parents\Events\Event`.

### Folder Structure {#folder-structure}

```
 - App
    - Containers
        - {container-name}
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

### Enabling Events {#enabling-events}

Before you can use events you need to add the `EventServiceProvider` to the `MainServiceProvider` of the Ship (if this has not been registered so far). See example below.

```
<?php

namespace App\Containers\Car\Providers;

class MainServiceProvider extends MainProvider
{

    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
        EventServiceProvider::class,
    ];

    // ...
}

```

### Usage {#usage}

In Laravel, you can create and register events in multiple way. Below is an example of an Event that handles itself. 

Event Class Example:

```php
<?php

namespace App\Containers\User\Events;

use App\Containers\User\Models\User;
use App\Ship\Parents\Events\Event;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Log;

class UserRegisteredEvent extends Event implements ShouldQueue
{
    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function handle()
    {
        Log::info('New User registration. ID = ' . $this->user->getHashedKey() . ' | Email = ' . $this->user->email . '.');

        // ...
    }

    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
```

> Note: You will get more benefits creating Events Listeners for each Event.

To do this you will need to create a custom `EventServiceProvider` in your container extending `App\Ship\Parents\Providers\EventsProvider`.

Your custom `EventServiceProvider` needs to be registered in the containers `MainServiceProvider` as well.

```
<?php

namespace App\Containers\Car\Providers;

use App\Ship\Parents\Providers\MainProvider;

/**
 * Class MainServiceProvider.
 *
 * The Main Service Provider of this container, it will be automatically registered in the framework.
 */
class MainServiceProvider extends MainProvider
{

    /**
     * Container Service Providers.
     *
     * @var array
     */
    public $serviceProviders = [
        EventServiceProvider::class,
    ];
```

### Dispatch Events {#dispatch-events}

You can dispatch an Event from anywhere you want (ideally from Actions and Tasks).

Example: Dispatching the Event class from the example above
```php
<?php

// using helper function
event(New UserEmailChangedEvent($user));

// manually
\App::make(\Illuminate\Contracts\Bus\Dispatcher\Dispatcher::class)->dispatch(New UserEmailChangedEvent($user));
```

## Queueing an Event {#queueing}

Events can implement `Illuminate\Contracts\Queue\ShouldQueue` to be queued.

## Handling an Event
You can handle jobs on dispatching an event.

To do so, you need to implement one of the following interfaces:

`Apiato\Core\Abstracts\Events\Interfaces\ShouldHandleNow`

`Apiato\Core\Abstracts\Events\Interfaces\ShouldHandle`

This will force you to implement the `handle` method and will make apiato execute the method upon dispatching the event.

- The `ShouldHandleNow` Interface will make the event execute the handle method as soon as the event gets dispatched.

- The `ShouldHandle` Interface will create an eventjob and execute the handle method async (through laravel jobs).
    
    
```php
namespace App\Containers\Example\Events;


use Apiato\Core\Abstracts\Events\Interfaces\ShouldHandle;
use App\Ship\Parents\Events\Event;

class ExampleEvent extends Event implements ShouldHandle
{
    /**
     * If ShouldHandle interface is implemented this variable
     * sets the time (in seconds or timestamp) to wait before a job is executed
     *
     * @var \DateTimeInterface|\DateInterval|int|null $jobDelay
     */
    public $jobDelay = 60;

    /**
     * If ShouldHandle interface is implemented this variable
     * sets the name of the queue to push the job on
     *
     * @var string $jobQueue
     */
    public $jobQueue = "example_queue";

    public function handle()
    {
        // Do some handling here
    }
    
}
```

## Broadcasting {#broadcasting}

Note: to define Broadcasting route go to `app/Ship/Boardcasts/Routes.php`.
