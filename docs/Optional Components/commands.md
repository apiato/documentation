---
title: Commands
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Define Consoles Closure Commands](#define-consoles-closure-commands)

### Definition {#definition}

 * Commands are a Laravel artisan command. Laravel has its own default commands, and you can create your own as well.
 * Commands provide a way to interact with the Laravel app.
 * A Command can be scheduled by a Task scheduler, like Cron Job or by the Laravel built-in wrapper of the Cron Job "laravel scheduler".
 * Commands could be Closure based or Classes.
 * "dispatch" is the term that is usually used to call a Command.

### Principles {#principles}

- Containers MAY or MAY NOT have one or more Commands.

- Every Command SHOULD call an Action to perform its job, and should not contain any business logic.

- Ship may contain Application general Commands.

### Rules {#rules}

- All Commands MUST extend from `App\Ship\Parents\Commands\ConsoleCommand`.

### Folder Structure {#folder-structure}

```
- app
  - Containers
    - {section-name}
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

#### A Simple Command

```php
class HelloWorldCommand extends ConsoleCommand
{
    protected $signature = 'hello:world';
    protected $description = 'Hello World!';

    public function handle()
    {
        echo "Hello World :)\n";
    }
}
```

#### Usage from CLI (Terminal)

```shell
php artisan hello:world
```

### Define Consoles Closure Commands {#define-consoles-closure-commands}

To define Console closure commands go to `app/Ship/Commands/closures.php`.

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/artisan#writing-commands).
:::
