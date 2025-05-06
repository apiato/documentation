---
sidebar_position: 5
title: Tasks
tags:
  - component
  - main-component
  - task
  - sub-action
  - action
---

Tasks are specialized classes that hold shared business logic,
fostering code reuse and promoting efficient organization.
They play a vital role
in encapsulating functionalities that are utilized by multiple Actions
spanning various Containers within your application.

To generate new tasks you may use the `apiato:make:task` interactive command:

```shell
php artisan apiato:make:task
```

Additionally, to retrieve a list of the existing tasks in your Apiato application,
use the `apiato:list:tasks` command.

```shell
php artisan apiato:list:tasks
```

## Definition and Principles

Read [**Porto SAP Documentation (#Tasks)**](https://mahmoudz.github.io/Porto/docs/category/main-components).

## Rules

- All Tasks:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Tasks` directory.
  - MUST extend the `App\Ship\Parents\Tasks\Task` class.
    - The parent extension SHOULD be aliased as `ParentTask`.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Tasks
                ├── CreateResourceTask.php
                ├── DeleteResourceTask.php
                └── ...
```

## Code Example

```php
use App\Ship\Parents\Tasks\Task as ParentTask;

class DemoTask extends ParentTask
{
    public function run(int $a, int $b): int
    {
        return $a + $b;
    }
}
```
