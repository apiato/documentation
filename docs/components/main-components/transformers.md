---
sidebar_position: 8
title: Transformers
---

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Transformers)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All API responses MUST be formatted via a Transformer.
- All Transformers MUST extend `App\Ship\Parents\Transformers\Transformer`.
- Each Transformer MUST have a `transform()` function.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - UI
                    - API
                        - Transformers
                            - UserTransformer.php
                            - ...
```

### Code Samples {#code-samples}

#### Reward Transformer with Country relation

```php
class ItemTransformer extends Transformer
{
    protected $availableIncludes = [
        'images',
    ];

    protected $defaultIncludes = [
        'roles',
    ];

    public function transform(Item $item)
    {
        $response = [
            'object'      => $item->getResourceKey(),
            'id'          => $item->getHashedKey(),
            'name'        => $item->name,
            'description' => $item->description,
            'price'       => (float)$item->price,
            'weight'      => (float)$item->weight,
            'created_at'  => $item->created_at,
            'updated_at'  => $item->updated_at,
            'readable_created_at' => $item->created_at->diffForHumans(),
            'readable_updated_at' => $item->updated_at->diffForHumans(),
        ];

        // add more or modify data for Admins only
        $response = $this->ifAdmin([
            'real_id'    => $item->id,
            'deleted_at' => $item->deleted_at,
        ], $response);

        return $response;
    }

    public function includeImages(Item $item)
    {
        return $this->collection($item->images, new ItemImageTransformer());
    }

    public function includeRoles(User $user)
    {
        return $this->collection($user->roles, new RoleTransformer());
    }
}
```

#### Usage from Controller (Single Item)

```php
$user = $this->getUser();

$this->transform($user, UserTransformer::class);

// more options are available
```

### Relationships (include) {#relationships-include}

Loading relationships in Transformer (calling other Transformers):

This can be done in 2 ways:

1. By the User, he can specify what relations to return in response.

2. By the Developer, define what relations to include at run time.

#### From Front-end {#from-front-end}

You can request data with their relationships directly from the API call using `include=tags,user` but first the Transformer need to have the `availableIncludes` defined with their functions like this:

```php
class AccountTransformer extends Transformer
{
    protected $availableIncludes = [
        'tags',
        'user',
    ];

    public function transform(Account $account)
    {
        return [
            'id'       => (int)$account->id,
            'url'      => $account->url,
            'username' => $account->username,
            'secret'   => $account->secret,
            'note'     => $account->note,
        ];
    }

    public function includeTags(Account $account)
    {
        // use collection with `multi` relationship
        return $this->collection($account->tags, new TagTransformer());
    }

    public function includeUser(Account $account)
    {
        // use `item` with single relationship
        return $this->item($account->user, new UserTransformer());
    }
}
```

Now to get the `Tags` with the response when Accounts are requested pass the `?include=tags` parameter with the [GET] request.

To get Tags with User use the comma separator: `?include=tags,user`.

#### From Back-end {#from-back-end}

From the controller you can dynamically set the `DefaultInclude` using (`setDefaultIncludes`) anytime you want.

```php
return $this->transform($rewards, ProductsTransformer::class)->setDefaultIncludes(['tags']);
```

You need to have `includeTags` function defined on the transformer. Look at the full examples above.

If you want to include a relation with every response from this transformer you can define the relation directly in the transformer on (`$defaultIncludes`)

```php
protected $availableIncludes = [
    'users',
];

protected $defaultIncludes = [
    'tags',
];

// ..
```

You need to have `includeUser` and `includeTags` functions defined on the transformer. Look at the full examples above.

## Transformer Available helper functions: {#transformer-available-helper-functions}

- `user()`: returns current authenticated user object.

- `ifAdmin($adminResponse, $clientResponse)`: merges normal client response with the admin extra or modified results, when current authenticated user is Admin. Look at the full examples above.

- `nullableItem($model->something, new SomethingTransformer())`: it is a shorthand for 
```php
$model->something ? $this->item($model->something, new SomethingTransformer()) : $this->primitive(null)
```

For more information about the Transformers read [this](https://fractal.thephpleague.com/transformers/).
