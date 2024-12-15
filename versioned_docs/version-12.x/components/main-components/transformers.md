---
sidebar_position: 7
title: Transformers
tags:
  - component
  - main-component
  - transformer
  - controller
  - response
  - model
---

Transformers,
often referred to as Response Transformers, serve a similar purpose to Views, but specifically for JSON responses.
While Views are responsible for presenting data in HTML format,
Transformers take data and format it into JSON representation.

For more detailed information about transformers and their usage,
you can refer to the [official documentation of Fractal](https://fractal.thephpleague.com/transformers/),
which is the underlying library used for handling transformations in Apiato.

To generate new transformers
you may use the `apiato:generate:transformer` interactive command:

```
php artisan apiato:generate:transformer
```

## Definition & Principles

Read [**Porto SAP Documentation (#Transformers)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All Transformers:
  - MUST be placed in the `app/Containers/{Section}/{Container}/UI/API/Transformers` directory.
  - MUST extend the `App\Ship\Parents\Transformers\Transformer` class.
    - The parent extension SHOULD be aliased as `ParentTransformer`.
  - MUST have a public `transform` method returning an array.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── UI
                └── API
                    └── Transformers
                        ├── TransformerA.php
                        ├── TransformerB.php
                        └── ...
```

## Code Example

```php
use ...
use App\Ship\Parents\Transformers\Transformer as ParentTransformer;

class UserTransformer extends ParentTransformer
{
    protected $availableIncludes = [];

    protected $defaultIncludes = [];

    public function transform(User $user)
    {
        return [
            'object' => $user->getResourceKey(),
            'id' => $user->getHashedKey(),
            'name' => $user->name,
            // ...
        ];
    }
}
```

## Including Relationships

You can include model relationships for complex data structures using the `include` query parameter.
These relationships can be included in the response either [per API consumer request](#include-per-api-consumer-request) or
[by default](#include-by-default).
The `include` parameter can be used on any endpoint
that has [relationships defined](#defining-relationships) in its transformer.


### Defining Relationships

To define relationships in the transformer, follow these two steps:

1. Define the relationship method in the transformer.
2. Add the relationship to the `$availableIncludes` or `$defaultIncludes` property.

- `availableIncludes` can be included in the response per API consumer request.
- `defaultIncludes` are included in the response by default.

:::note
Any relationships not defined in the `$availableIncludes` or `$defaultIncludes` properties will be ignored.
:::

The relationship method should be named `include{RelationshipName}` and return a Fractal `Item` or `Collection` object.
The `include{RelationshipName}` method will be called automatically by the Transformer
when the relationship is requested.

For example, let's assume we have a `User` model with a `roles` relationship.
The `UserTransformer` would have an `includeRoles` method that returns a `Collection` object.

```php
public function includeRoles(User $user): Collection
{
    return $this->collection($user->roles, new RoleTransformer());
}
```

Now,
the `roles` relationship can be included in the response
by adding it to the `$availableIncludes` or `$defaultIncludes` property.

```php
protected array $availableIncludes = [
    'roles',
];

// or

protected array $defaultIncludes = [
    'roles',
];
```

### Include Per API Consumer Request
In cases where you have multiple relationships for a model, such as `User` with `Roles` and `Avatar` relationships,
you can include specific relationships in the response based on the API consumer's request.
To enable this,
you add the desired relationships to the `$availableIncludes` property in the transformer
and create corresponding methods for each relationship in the transformer to specify how to include that data.

Here's an example using a `UserTransformer` with `roles` and `avatar` relationships added to the `$availableIncludes` property:

```php
protected array $availableIncludes = [
    'roles',
    'avatar',
];

public function includeRoles(User $user): Collection
{
    return $this->collection($user->roles, new RoleTransformer());
}

public function includeAvatar(User $user): Item
{
    return $this->item($user->avatar, new AvatarTransformer());
}
```

To request the `roles` data along with the `User` resource, you can pass the `include=roles` query parameter with the request:

```
api.apiato.test/v1/users?include=roles
```

This will include the `roles` data in the response:

```json
{
  "data": [
    {
      "object": "User",
      "id": "0one37vjk49rp5ym",
      "roles": [
        {
          "object": "Role",
          "id": "bmo7y84xpgeza06k"
        },
        // ...
      ]
    },
    // ...
  ]
}
```

You can also include multiple relationships by separating them with a comma:

```
api.apiato.test/v1/users?include=roles,avatar
```

This includes both the `roles` and `avatar` relationships in the response.

Nested includes are also possible.
If, for instance, the `Avatar` model has a relationship with an `Image` object,
you can request nested includes using dot notation:

```
api.apiato.test/v1/users?include=avatar,avatar.image
```

This includes the `Avatar` relationship with the `Image` nested under it in the response.

It's important to note that for nested includes, the nested relationship must also be defined.
In this example,
the `AvatarTransformer` would need
to have an `includeImage` method defined and the `image` relationship added to it's `$availableIncludes` property.

By defining the `availableIncludes` and implementing the corresponding `include{RelationshipName}` methods,
you allow API consumers to specify which related data they want in the response,
enhancing the flexibility and efficiency of your API.

### Include By Default

To automatically include a relationship in every response generated by the transformer,
you can define the relationship in the transformer's `$defaultIncludes` property.
This means
that the specified relationship will be included by default without the need for API consumers to request it explicitly.

Here's an example using a `UserTransformer` where the `avatar` relationship is defined as a default include:

```php
protected array $defaultIncludes = [
    'avatar',
];

public function includeAvatar(User $user): Item
{
    return $this->item($user->avatar, new AvatarTransformer());
}
```

By setting the default includes in this manner,
the `avatar` relationship will automatically be included in every response created by this transformer.
This can simplify responses and reduce the need for additional API requests for related data,
ultimately enhancing the efficiency and usability of your API.

## Resource Key

The resource key is a string that helps identify the object type in the response payload.
A resource key is automatically generated based on the model's class name, but you can customize it as needed.

### Custom Resource Key

You can set the resource key on the respective model
by setting the `$resourceKey` property or overriding the `getResourceKey` method:

```php
class User extends ParentUserModel
{
    protected $resourceKey = 'User';
    // or
    public function getResourceKey(): string
    {
        return 'User';
    }
}
```

### Usage in Transformers

Retrieve the resource key from the model by calling the `getResourceKey` method.

If no `resourceKey` is defined on the model, the `getResourceKey` method will return the short class name of the model.
For instance, if no resource key is defined for `App\Containers\AppSection\User\Models\User::class`,
the default resource key will be `User`.

#### Transformer Example
```php
use App\Containers\AppSection\User\Models\User;
use App\Ship\Parents\Transformers\Transformer as ParentTransformer;

class UserTransformer extends ParentTransformer
{
    public function transform(User $user)
    {
        return [
            'object' => $user->getResourceKey(), // <-- here
            'id' => $user->getHashedKey(),
            'name' => $user->name,
        ];
    }
}
```

#### Response Example
```json
{
  "data": {
    "object": "User", // <-- ResourceKey
    "id": "XbPW7awNkzl83LD6",
    "name": "Mohammad Alavi"
  }
}
```

## Helper Methods

### nullableItem

The `nullableItem` method returns an item if the model has a specific relationship, otherwise, it returns `null`.

```php
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Primitive;

public function includeRelation(Model $model): Primitive|Item
{
    return $this->nullableItem($model->relation, new RelationTransformer();
}
```

If `$model->relation` is not null (meaning it has a related model),
the method returns an item formatted using the specified transformer.
Otherwise, it returns `null`.

The `nullableItem` method is a shortcut for the following code:

```php
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Primitive;

public function includeRelation(Model $model): Primitive|Item
{
    return $model->relation ? $this->item($model->relation, new RelationTransformer()) : $this->primitive(null)
}
```

## Response Payload

You have the flexibility to define your own custom response payload or utilize one of the supported serializers.
Serializer classes let you switch between various output formats with minimal effect on your Transformers.

Current [supported serializers](https://fractal.thephpleague.com/serializers/):
- `ArraySerializer`
- `DataArraySerializer`
- `JsonApiSerializer`

To modify the default Fractal serializer,
access the `app/Ship/Configs/fractal.php` configuration file
and update the `default_serializer` setting to your preferred serializer.

By default, Apiato uses `DataArraySerializer`.
This serializer is not to everyone’s tastes, because it adds a `data` namespace to the output.
A very basic response of the `DataArraySerializer` will look like this:

```json
{
  "data": {
    "object": "User",
    "id": "XbPW7awNkzl83LD6",
    "name": "Mohammad Alavi"
  }
}
```

The `DataArraySerializer` is handy because it allows space for `meta` data
(like pagination, or totals) in both Items and Collections.

```json
{
  "data": [ ... ],
  "meta": {
    "include": [
      "xxx",
      "yyy"
    ],
    "custom": [],
    "pagination": {
      "total": 999,
      "count": 999,
      "per_page": 999,
      "current_page": 999,
      "total_pages": 999,
      "links": {
        "next": "http://api.apiato.test/v1/accounts?page=999"
      }
    }
  }
}
```

:::info Further Reading
For more detailed information, please refer to [Fractal](https://fractal.thephpleague.com/transformers/) and [Laravel Fractal Wrapper](https://github.com/spatie/laravel-fractal) documentations.
:::
