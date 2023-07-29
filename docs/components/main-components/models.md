---
sidebar_position: 6
title: Models
tags:
  - component
  - main-component
  - model
  - repository
---

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Models)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Models MUST extend `App\Ship\Parents\Models\Model`.
- The parent extension should be aliased as `ParentModel`.

:::note
If the name of a model differs from the container name, you must implement the `model` method in the repository.
This method allows you to specify the correct model class that should be used for the repository operations.

For further information and a practical example, you can refer to the [Repository Documentation](../optional-components/repositories#model-method-example).
:::

### Folder Structure {#folder-structure}

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Models
                ├── Model.php
                └── ...
```

### Code Sample {#code-sample}

```php
use App\Ship\Parents\Models\Model as ParentModel;

class Demo extends ParentModel
{
 ...
}
```

:::note
If your model does not extend the `App\Ship\Parents\Models\Model` class,
it is essential to incorporate the `ModelTrait` trait into your model.
By doing so, your model will benefit from various functionalities provided by the trait,
such as hash ids and other features necessary for proper integration with the framework.
:::

```php
use Apiato\Core\Traits\ModelTrait;

class Demo
{
    use ModelTrait;
    ...
}
```
