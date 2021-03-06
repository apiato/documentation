---
title: Jobs
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Execute Jobs Execution](#execute-jobs-execution)

### Definition {#definition}

 - Jobs are simple classes that can do one thing or multiple related things. 
 - Job is a name given to a class that is usually created to be queued (it's execution is usually deferred for later, after the execution of previous Jobs are completed).
 - Jobs can be scheduled to be executed later by a queuing mechanism (a queue system like beanstalkd).
 - When a Job class is dispatched, it performs its specific job and dies.
 - Laravel's queue worker will process every Job as it's pushed onto the queue.

### Principles {#principles}

- A Container MAY have more than one Job.

### Rules {#rules}

- All Jobs MUST extend from `App\Ship\Parents\Jobs\Job`.

### Folder Structure {#folder-structure}

```
- app
  - Containers
    - {section-name}
      - {container-name}
        - Jobs
          - DoSomethingJob.php
          - DoSomethingElseJob.php
```

### Code Samples {#code-samples}

#### DemoJob

```php
class DemoJob extends Job
{
    private $something;

    public function __construct(array $someData)
    {
        $this->something = $someData;
    }

    public function handle()
    {
        foreach ($this->something as $thing) {
            // do whatever you like
        }
    }
}
```

Check the parent Job class.

# Usage from Action

```php
// using helper function
dispatch(new DemoJob($someData));

// manually
app(\Illuminate\Contracts\Bus\Dispatcher\Dispatcher::class)->dispatch(New DemoJob($someData));
```

### Execute Jobs Execution {#execute-jobs-execution}
For running your Jobs checkout the [Tasks Queuing](../miscellaneous/tasks-queuing) page.

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/queues).
:::
