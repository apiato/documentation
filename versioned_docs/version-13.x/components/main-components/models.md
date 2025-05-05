---
sidebar_position: 6
title: Models
tags:
  - component
  - main-component
  - model
  - repository
---

[Models](https://laravel.com/docs/eloquent) are responsible for representing the data of the application
and providing an abstraction for interacting with that data.
They encapsulate the business logic and rules associated with the data,
as well as facilitate the communication with the underlying database.

To generate new models, you may use the `apiato:make:model` interactive command:

```
php artisan apiato:make:model
```

## Definition and Principles

Read [**Porto SAP Documentation (#Models)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All Models:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Models` directory.
  - MUST extend the `App\Ship\Parents\Models\Model` class.
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


## Resource Key {#resource-key}
The resource key is a string that helps identify the resource type.
Typically, it is used in the JSON API response to indicate the type of resource being returned.

```php
use App\Containers\AppSection\User\Models\User;
use App\Ship\Parents\Transformers\Transformer as ParentTransformer;

class UserTransformer extends ParentTransformer
{
    public function transform(User $user)
    {
        return [
            'type' => $user->getResourceKey(),
            'id' => $user->getHashedKey(),
            'name' => $user->name,
        ];
    }
}
```

A resource key is automatically generated based on the model's class name,
but you can customize it by overriding the `getResourceKey` method:

```php
use Apiato\Http\Resources\ResourceKeyAware;
use Illuminate\Database\Eloquent\Model;

class User extends Model implements ResourceKeyAware
{
    public function getResourceKey(): string
    {
        return 'User';
    }
}
```

## Custom Models {#custom-models}

If your model does not extend the `App\Ship\Parents\Models\Model` or the `App\Ship\Parents\Models\UserModel` class,
it is essential to implement the `ResourceKeyAware` interface
and use the `InteractsWithApiato` trait in your model.
By doing so, your model will benefit from various functionalities provided by the trait,
such as hash ids and other features necessary for proper integration with the framework.

```php
use Apiato\Core\Models\InteractsWithApiato;
use Apiato\Http\Resources\ResourceKeyAware;

class Demo implements ResourceKeyAware
{
    use InteractsWithApiato;
}
```
