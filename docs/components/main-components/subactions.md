---
sidebar_position: 10
title: Sub Actions
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Sub-Actions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All SubActions MUST extend from `App\Ship\Parents\Actions\SubAction`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - Actions
                    - ValidateAddressSubAction.php
                    - BuildOrderSubAction.php
                    - ...
```

### Code Sample {#code-sample}

#### ExampleSubAction

```php
class ExampleSubAction extends SubAction
{
    public function run(SomeRequest $request)
    {
        app(SomeTask::class)->run($request);
    }
}
```

:::note
Every feature available for Actions, are also available in SubActions.
:::
