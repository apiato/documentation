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

## Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Tasks)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules {#rules}

- All Tasks MUST be placed in `app/Containers/{Section}/{Container}/Tasks` directory.
- All Tasks MUST extend the `App\Ship\Parents\Tasks\Task` class.
- The parent extension SHOULD be aliased as `ParentTask`.

## Folder Structure {#folder-structure}

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

## Code Example {#code-example}

```php
use ...
use App\Ship\Parents\Tasks\Task as ParentTask;

class DemoTask extends ParentTask
{
    public function run(int $a, int $b): int
    {
        return $a + $b;
    }
}
```
