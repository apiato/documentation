---
sidebar_position: 4
title: Actions
tags:
  - component
  - main-component
  - action
  - controller
  - request
---

Actions serve as the embodiment of the application's Use Cases,
encapsulating the various operations that users or software can execute within the application.

To generate new actions, you may use the `apiato:make:action` interactive command:

```shell
php artisan apiato:make:action
```

Additionally, to retrieve a list of the existing actions in your Apiato application,
use the `apiato:list:actions` command.

```shell
php artisan apiato:list:actions
```

## Definition and Principles

Read [**Porto SAP Documentation (#Actions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All Actions:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Actions` directory.
  - MUST extend the `App\Ship\Parents\Actions\Action` class.
    - The parent extension SHOULD be aliased as `ParentAction`.
- The same Action MAY be called by multiple Controllers (API, Web, CLI)

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Actions
                ├── CreateResourceAction.php
                ├── DeleteResourceAction.php
                └── ...
```

## Code Example

```php
use ...
use App\Ship\Parents\Actions\Action as ParentAction;

class DemoAction extends ParentAction
{
    public function __construct(
        private readonly DemoTask $demoTask
    ) {
    }

    public function run(DemoRequest $request)
    {
        return $this->demoTask->run();
    }
}
```

#### Calling multiple Tasks

```php
use ...
use App\Ship\Parents\Actions\Action as ParentAction;

class DemoAction extends ParentAction
{
    public function __construct(
        private readonly DemoATask $demoATask,
        private readonly DemoBTask $demoBTask
    ) {
    }
    
    public function run($xxx, $yyy, $zzz): void
    {
        $foo = $this->demoATask->run($xxx, $yyy);
        $bar = $this->demoBTask->run($zzz);
    }
}
```

## Handling Transactions

In certain scenarios, you may need to wrap a specific call within a `Database Transaction` to ensure data integrity
(see [Laravel Documentation](https://laravel.com/docs/master/database#database-transactions)).

Apiato offers a `transactionalRun` method,
which internally wraps the `run` method of the action within a `DB::Transaction` and passes all the parameters "as is"
to it.

The beauty of using the `transactionalRun` method is
that if any `Exception` occurs during the execution of the `run` method,
everything performed in this context is automatically rolled back from the database.
However, it's important to note that not all operations may be automatically rolled back.
For example, file system operations,
such as uploading an image, are typically not covered by the database transaction and would need to be handled manually.
