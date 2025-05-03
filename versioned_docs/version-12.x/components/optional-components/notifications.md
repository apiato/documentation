---
title: Notifications
tags:
  - component
  - optional-component
  - notification
  - queue
---

Apiato notifications are just [Laravel Notifications](https://laravel.com/docs/notifications),
and they function in the exact same way as Laravel notifications.
However, they come with additional rules and conventions specific to Apiato.

To generate new notifications, you may use the `apiato:generate:notification` interactive command:

```
php artisan apiato:generate:notification
```

## Rules

- All Notifications MUST extend the `App\Ship\Parents\Notifications\Notification` class.
- Containers MAY or MAY NOT have one or more Notification.
- Ship MAY contain Application general Notifications.

## Folder Structure


```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Notifications
│               ├── UserRegisteredNotification.php
│               └── ...
└── Ship
    └── Notifications
        ├── SystemFailureNotification.php
        └── ...
```

## Code Example

Notifications are defined exactly as you would define them in Laravel.

## Default Notification Channels

In Apiato, you have the ability to set default notification channels that will be used for all your notifications.
This configuration can be found in the `notification.php` file located in the `app/Ship/Configs` directory.

By specifying default notification channels in this configuration file,
you establish a consistent choice of channels for your notifications throughout the application.

However, should you need to customize the notification channels for specific notification classes,
or if you prefer to define channels on a per-notification basis,
you can do so by overriding the `via` method within the respective notification class.
This allows you to tailor the channel selection based on individual notification requirements or use cases.

## Database Notifications Migration

When setting up database notifications,
the usual process involves
generating a migration for notifications
using the `php artisan notifications:table` command and then running the migration.

However, Apiato already provides a migration file
named `xxxx_xx_xx_xxxxxx_create_notifications_table.php` in the `app/Ship/Migrations` directory.
As a result, you don't need to manually generate the migration file.
You can directly run the migrations using the `php artisan migrate` command,
and the notifications table will be created for you.
