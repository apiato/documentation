---
sidebar_position: 10
title: Sub Actions
tags:
  - component
  - main-component
  - sub-action
  - action
  - controller
  - request
---

SubActions are designed to eliminate code duplication within Actions.
They enable Actions to share a sequence of Tasks, thus promoting reusability.
Similar to how Tasks enable Actions to share specific functionalities,
SubActions serve to share a predefined set of Tasks.

All the features and capabilities available for regular Actions are also applicable to SubActions.

To generate new SubActions you may use the `apiato:generate:subaction` interactive command:

```
php artisan apiato:generate:subaction
```

## Definition & Principles

Read [**Porto SAP Documentation (#Sub-Actions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All SubActions:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Actions` directory.
  - MUST extend the `App\Ship\Parents\Actions\SubAction` class.
    - The parent extension SHOULD be aliased as `ParentSubAction`.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Actions
                ├── ValidateAddressSubAction.php
                ├── BuildOrderSubAction.php
                └── ...
```

## Code Example

```php
use ...
use App\Ship\Parents\Actions\SubAction as ParentSubAction;

class DemoSubAction extends ParentSubAction
{
    public function __construct(
        private readonly DemoTask $demoTask
    ) {
    }

    public function run(array $data)
    {
        return $this->demoTask->run($data);
    }
}
```
