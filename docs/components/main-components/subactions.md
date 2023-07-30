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

Every feature available for Actions, are also available in SubActions.

## Definition & Principles

Read [**Porto SAP Documentation (#Sub-Actions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All SubActions MUST be placed in `app/Containers/{Section}/{Container}/Actions` directory.
- All SubActions MUST extend the `App\Ship\Parents\Actions\SubAction` class.
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
