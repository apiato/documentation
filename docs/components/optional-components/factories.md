---
title: Factories
tags:
  - component
  - optional-component
  - factory
  - model
  - testing
  - seeder
---

Apiato factories are just Laravel model factories,
and they function in the exact same way as Laravel factories.
However, they come with additional rules and conventions specific to Apiato.

To generate new factories you may use the `apiato:generate:factory` interactive command.

```
php artisan apiato:generate:factory
```

## Rules

- Factory name MUST be the same as its corresponding model name and suffixed with `Factory`.
- All Factories:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Data/Factories` directory.
  - MUST extend the `App\Ship\Parents\Factories\Factory` class.
    - The parent extension SHOULD be aliased as `ParentFactory`.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Data
                └── Factories
                    ├── ModelFactory.php
                    └── ...
```

## Code Example

Factories are defined exactly as you would define them in Laravel.

## Model & Factory Discovery Conventions

When you use a factory, Laravel relies on conventions to determine the appropriate factory for the model.
By default,
Laravel will search for a factory in the `Database\Factories` namespace
that has a class name matching the model name and is suffixed with `Factory`.

However, in the case of Apiato, factories are distributed across the Containers,
and they are not all within the same namespace.
As a result, Apiato follows a different convention to locate the appropriate factory for a model.
This is achieved by utilizing the `Apiato\Core\Traits\FactoryLocatorTrait` trait,
which is incorporated into the `Apiato\Core\Traits\ModelTrait` trait used by all Apiato models.

Therefore,
if your model does not extend the `App\Ship\Parents\Models\Model` or the `App\Ship\Parents\Models\UserModel` class,
it is essential to include the `ModelTrait` trait in your model.
By doing so, Apiato will be able to locate the appropriate factory and use it for the model when needed.

```php
use Apiato\Core\Traits\ModelTrait;

class Demo
{
    use ModelTrait;
    ...
}
```
