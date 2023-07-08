---
title: Tasks Scheduling
---

* Tasks Scheduler is a script executor program, such as "Cron Job". (Cron Job is a time-based script scheduler in Unix-like computer
operating systems).
* Tasks Scheduler role is to schedule the execution of CLI Commands "Artisan Commands", periodically at fixed times, dates, or
intervals.
* Laravel has a wrapper around the "Cron Job" called the Laravel scheduler. This allows the framework to schedule 
  Artisan Commands and Queued Jobs in addition to custom Shell Commands, to run later.

Below is a quick guide for how to schedule some script execution such as (custom Shell Commands, Laravel Commands,
Laravel [Jobs](https://laravel.com/docs/queues), and other classes), in order to run at specific intervals or dates.

### Server Setup

First let's set it up, by adding our single Cron entry, on the server. As follows:

1) Type `crontab -e`

2) At the last line add the following: `* * * * * php /path-to-your-project/artisan schedule:run >> /dev/null 2>&1`

Don't forget to replace the *path-to-your-project*.

More details [here](https://laravel.com/docs/scheduling#introduction).

### App Setup

First you need to create some commands that needs to be scheduled.
They can be created in the Containers `(app/Containers/{section-name}/{container-name}/UI/CLI/Commands)` or in the Ship (`app/Ship/Commands`).
See the [Commands Page](../Optional%20Components/commands).

Once you have your command ready, go to `app/Ship/Kernels/ConsoleKernel.php` and start adding the commands you need
to schedule inside the `schedule` function.

Example:

```php    
protected function schedule(Schedule $schedule)
{
     $schedule->command('apiato:welcome')->everyMinute();
     $schedule->job(new myJob)->hourly();
     $schedule->exec('touch me.txt')->dailyAt('12:00');
     // ...
}
```
More details [here](https://laravel.com/docs/scheduling#defining-schedules).

:::note
You do not need to register the commands with the `$commands` property or point to them in the `commands()`
function. Apiato will do that automatically for you.
:::

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/scheduling).
:::
