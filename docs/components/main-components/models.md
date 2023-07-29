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

- All Models MUST be defined in the `app\Containers\{SectionName}\{ContainerName}\Models` directory.
- All Models MUST extend `App\Ship\Parents\Models\Model`.
- The parent extension should be aliased as `ParentModel`.

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

### Model Trait {#model-trait}

If your model does not extend the `App\Ship\Parents\Models\Model` class,
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
