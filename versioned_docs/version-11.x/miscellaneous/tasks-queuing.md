---
title: Tasks Queuing
---

* Queues System, which executes the Jobs classes one by one once it receives it or once it's scheduled (after being 
serialized and stored in a string somewhere). 
* To be able to queue the Jobs you need a Queuing System such as Beanstalkd, Redis, Amazon SQS or simply the DB.
* Laravel has a "queue worker" that will process new Jobs as they are pushed onto the queue system, ("queue:work" and 
"queue:listen"). Its job is to push the jobs to the queue system in order to be executed.
* To keep the "queue:work" artisan command, running permanently in the background, you should use a 
process monitor such as "Supervisor" to ensure that the queue worker does not stop running. It will simply make sure 
to execute the "php artisan queue:work" command.
* So its role is to schedule the execution of Artisan Command, Jobs, Event Listeners, and some other classes, at 
specific intervals or dates using the third party Queueing System.
  
The only addition to the Laravel's queues in Apiato, is that by default, apiato detects which queue driver you are 
planning to use (based on the configs), to create the migration files required, in case type `database` is used.

```php
if (Config::get('queue.default') == 'database')
{
   // do something
}
```

(refer to `app/Ship/Migrations/` folder for more details).

## Beanstalkd

In order to use Beanstalkd as your queue driver, you need to require the `"pda/pheanstalk": "^4.0"` package first. You 
can include this in any `composer.json` file you want.

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/queues).
:::
