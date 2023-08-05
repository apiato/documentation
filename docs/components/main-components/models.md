---
sidebar_position: 6
title: Models
tags:
  - component
  - main-component
  - model
  - repository
---

## Definition & Principles

Read [**Porto SAP Documentation (#Models)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All Models MUST be placed in the `app/Containers/{Section}/{Container}/Models` directory.
- All Models MUST extend the `App\Ship\Parents\Models\Model` class.
  - The parent extension SHOULD be aliased as `ParentModel`.
- All User Models MUST extend the `App\Ship\Parents\Models\UserModel` class.
  - The parent extension SHOULD be aliased as `ParentUserModel`.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Models
                ├── Model.php
                └── ...
```

## Code Example

Models are defined exactly as you would define them in Laravel.

## Model Trait {#model-trait}

If your model does not extend the `App\Ship\Parents\Models\Model` or the `App\Ship\Parents\Models\UserModel` class,
it is essential to incorporate the `ModelTrait` trait into your model.
By doing so, your model will benefit from various functionalities provided by the trait,
such as hash ids and other features necessary for proper integration with the framework.

```php
use Apiato\Core\Traits\ModelTrait;

class Demo
{
    use ModelTrait;
    ...
}
```
