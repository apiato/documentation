---
sidebar_position: 4
title: Actions
tags:
  - component
  - main-component
  - action
---

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Actions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Actions MUST extend `App\Ship\Parents\Actions\Action`.
- The parent extension should be aliased as `ParentAction`.

### Folder Structure {#folder-structure}

```markdown
app
└── Containers
    └── SectionName
        └── ContainerName
            └── Actions
                ├── CreateResourceAction.php
                ├── DeleteResourceAction.php
                └── ...
```

### Code Sample {#code-sample}

```php
namespace App\Containers\AppSection\User\Actions;

use ...
use App\Ship\Parents\Actions\Action as ParentAction;

class UpdateUserAction extends ParentAction
{
    public function __construct(
        private readonly UpdateUserTask $updateUserTask
    ) {
    }

    public function run(UpdateUserRequest $request): User
    {
        $sanitizedData = $request->sanitizeInput([
            'password',
            'name',
            'gender',
            'birth',
        ]);

        return $this->updateUserTask->run($sanitizedData, $request->id);
    }
}
```

#### Calling multiple Tasks

```php
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

:::tip
The same Action MAY be called by multiple Controllers (Web, Api, Cli).
:::

### Transactional Run {#transactional-run}

In certain scenarios, you may need to wrap a specific call within a `Database Transaction` to ensure data integrity
(see [Laravel Documentation](https://laravel.com/docs/master/database#database-transactions)).

Apiato offers a `transactionalRun(...$arguments)` method,
which internally wraps the `run` method of the action within a `DB::Transaction` and passes all the parameters "as is"
to it.

The beauty of using the `transactionalRun` method is
that if any `Exception` occurs during the execution of the `run` method,
everything performed in this context is automatically rolled back from the database.

:::note
Any file system operations
(e.g., if you uploaded a profile picture for this `Team`) would need to be handled manually.
:::
