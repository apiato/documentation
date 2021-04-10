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

Jobs:

 * are simple classes that can do one thing or multiple related things. 
 * Job is a name given to a class that is usually created to be queued (it's execution is usually deferred for later, after the execution of previous Jobs are completed).
 * Jobs can be scheduled to be executed later by a queuing mechanism (queue system like beanstalkd).
 * When a Job class is dispatched, it performs its specific job and dies.
 * Laravel's queue worker will process every Job as it's pushed onto the queue.
 
More info [here](https://laravel.com/docs/queues).

### Principles {#principles}

- A Container MAY have more than one Job.

### Rules {#rules}

- All Jobs MUST extend from `App\Ship\Parents\Jobs\Job`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - Jobs
                - DoSomethingJob.php
                - DoSomethingElseJob.php
```

### Code Samples {#code-samples}

**CreateAndValidateAddress with third party `Job`:**

```php
<?php

namespace App\Containers\Shipment\Jobs;

use App\Port\Job\Abstracts\Job;

class CreateAndValidateAddressJob extends Job
{
    private $recipients;

    public function __construct(array $recipients)
    {
        $this->recipients = $recipients;
    }

    public function handle()
    {
        foreach ($this->recipients as $recipient) {
            // do whatever you like
        }
    }
}
```

Check the parent Job class.

**Usage from `Action`:**

```php
<?php

// using helper function
dispatch(new CreateAndValidateAddressJob($recipients));

// manually
App::make(\Illuminate\Contracts\Bus\Dispatcher\Dispatcher::class)->dispatch(New StatusChangedJob($object));
```

### Execute Jobs Execution {#execute-jobs-execution}

For running your Jobs checkout the [Tasks Queuing](.././miscellaneous/tasks-queuing) page.

