---
title: Notifications
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Select Channels](#select-channels)
* [Queueing](#queueing)
* [Use DB channel](#db-channel)

### Definition {#definition}

Notifications allow you to inform the user about a state changes in your application.  

The Laravel notifications supports sending notifications across a variety channels (mail, SMS, Slack, Database...). 

When using the Database channel the notifications will be stored in a database to be displayed in your client interface.

For more details refer to this [link](https://laravel.com/docs/notifications).

## Principles {#principles}

- Containers MAY or MAY NOT have one or more Notification.

- Ship may contain Application general Notifications.

### Rules {#rules}

- All Notifications MUST extend from `App\Ship\Parents\Notifications\Notification`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - Notifications
                - UserRegisteredNotification.php
                - ...
    - Ship
        - Notifications
            - SystemFailureNotification.php
            - ...
```

### Code Samples {#code-samples}

**Example: a simple Notification**

```php
<?php

namespace App\Containers\User\Notifications;

use App\Containers\User\Models\User;
use App\Ship\Parents\Notifications\Notification;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;

class BirthdayReminderNotification extends Notification implements ShouldQueue
{

    use Queueable;

    protected $notificationMessage;

    public function __construct($notificationMessage)
    {
        $this->notificationMessage = $notificationMessage;
    }
    
    public function toArray($notifiable)
    {
        return [
            'content' => $this->notificationMessage,
        ];
    }

    public function toMail($notifiable)
    {
        // $notifiable is the object you want to notify "e.g. user"
        return (new MailMessage)
            ->subject("Hello World")
            ->line("Hi, $notifiable->name")
            ->line($this->notificationMessage);
    }

    public function toSms($notifiable)
    {
        // ...
    }
    
    // ...
}
```

**Usage from an Action or Task:**

Notifications can be sent from Actions or Tasks using the `Notification` Facade.  

```php
\Notification::send($user, new BirthdayReminderNotification($notificationMessage));
```

Alternatively you can use the `Illuminate\Notifications\Notifiable` trait on the notifiable object "e.g. User" and then call it as follows:

```php
// get any user
$user = User::firstOrCreate([
    'name' => 'Mahmoud Zalt',
    'email' => 'mail@something.com',
    'phone' => '0096123456789',
]);

// call notify, found on the Notifiable trait
$user->notify(new BirthdayReminderNotification($notificationMessage));
```

## Select Channels {#select-channels}

To select a notification channel, apiato have the `app/Ship/Configs/notification.php` config file where you can define the array of supported channels "e.g. SMS, Email, WebPush...", to be used for all your notifications.

If you want to override the configuration for some notifications classes, or if you prefer to define the channels within each notification class itself,
you can override the **via** function `public function via($notifiable)` in the notification class and define your channels. 

Checkout [laravel notification channels](http://laravel-notification-channels.com) for list of supported integrations.

## Queueing a Notification {#queueing}

To queue a notification you should use `Illuminate\Bus\Queueable` and implement `Illuminate\Contracts\Queue\ShouldQueue`.

## Use DB channel {#db-channel}

Generally you need to generate the notification migration `php artisan notifications:table`, then run `php artisan migrate`, 
however just running the migration command will do the job, since Apiato already adds the `_create_notifications_table.php` in the default migrations files directory `app/Ship/Migrations/`.
