---
title: Commands
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Schedule Commands Execution](#Schedule-Commands-Execution)
* [Define Consoles Routes](#define-consoles-routes)

### Definition {#definition}

Commands:

 * is a laravel artisan command. Laravel has its own default commands, and you create your own as well.
 * provides a way to interact with the Laravel app.
 * a Command can be scheduled by a Task scheduler, like Cron Job or by the Laravel built-in wrapper of the Cron Job "laravel scheduler".
 * Commands could be Closure based or Classes.
 * "dispatch" is the term that is usually used to call a Command.

### Principles {#principles}

- Containers MAY or MAY NOT have one or more Commands.

- Every Command SHOULD call an Action to perform its job, and should not container any business logic.

- Ship may contain Application general Commands.

### Rules {#rules}

- All Commands MUST extend from `App\Ship\Parents\Commands\ConsoleCommand`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - UI
                - CLI
                    - Commands
                        - SayHelloCommand.php
                        - ...
    - Ship
        - Commands
            - GeneralCommand.php
            - ...
```

### Code Samples {#code-samples}

**Example: a simple Command**

```php
<?php

namespace App\Containers\Welcome\UI\CLI\Commands;

use App\Ship\Parents\Commands\ConsoleCommand;

/**
 * Class SayWelcomeCommand
 *
 * @author  Mahmoud Zalt  <mahmoud@zalt.me>
 */
class SayWelcomeCommand extends ConsoleCommand
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'apiato:welcome';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Just saying Welcome.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        $this->info('Welcome to apiato :)'); // green color
        // $this->line('Welcome to apiato :)'); // normal color
    }
}

```

**Usage from CLI (Terminal):**

```shell
php artisan apiato:welcome
```

### Schedule Commands Execution {#Schedule-Commands-Execution}

To Schedule the execution of a Command checkout the [Tasks Scheduling]({{ site.baseurl }}{% link _docs/miscellaneous/tasks-scheduling.md %}) page.

### Define Consoles Routes {#define-consoles-routes}

To define Console route go to `app/Ship/Commands/Routes.php`.
