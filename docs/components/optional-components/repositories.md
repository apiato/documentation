---
title: Repositories
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Other Properties](#other-properties)
  * [API Query Parameters Property](#api-query-parameters-property)
  * [All other Properties](#all-other-properties)


### Definition {#definition}

The Repository classes are an implementation of the Repository Design Pattern.

Their major roles are separating the business logic from the data (or the data access Task).

Repositories save and retrieves Models to/from the underlying storage mechanism.

The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model.

### Principles {#principles}

- Every Model SHOULD have a Repository.

- A Model SHOULD always get accessed through its Repository. (Never accessed directly).

### Rules {#rules}

- All Repositories MUST extend from `App\Ship\Parents\Repositories\Repository`. Extending from this class will give you access to methods like (`find`, `create`, `update` and much more).

- Repository name should be same as it's model name (model: `Foo` -> repository: `FooRepository`).

- If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository implement `model()` method like [this](#model-method-example).

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - Data
                - Repositories
                    - UserRepository.php
                    - ...
```

### Code Samples {#code-samples}

#### Demo Repository

```php
class DemoRepository extends Repository
{
    protected $fieldSearchable = [
        'name'  => 'like',
        'email' => '=',
    ];
}
```

#### Usage

```php
// paginate the data by 10
$users = $userRepository->paginate(10);

// search by 1 field
$cars = $carRepository->findByField('colour', $colour);

// searching multiple fields
$offer = $offerRepository->findWhere([
    'offer_id' => $offer_id,
    'user_id'  => $user_id,
])->first();

//....
```

#### Different Model and Container Name {#model-method-example}
The `model()` method must be implemented when the model has different name than the container.

```php
class DemoRepository extends Repository
{
    // ...
    
    public function model(): string
    {
        return Demo::class;
    }
}
```

### Other Properties: {#other-properties}

#### API Query Parameters Property {#api-query-parameters-property}

To enable query parameters (`?search=text`,...) in your API you need to set the property `$fieldSearchable` on the Repository class, to instruct the querying on your model. More [details](../../core-features/query-parameters##using-the-request-criteria).

```php
	protected $fieldSearchable = [
      'name'  => 'like',
      'email' => '=',
	];
```

#### All other Properties {#all-other-properties}

Apiato uses the `l5-repository` package, to provide a lot of powerful features to the repository class.  

:::info Further reading
To learn more about all the properties you can use, visit the `andersao/l5-repository` package [documentation](https://github.com/andersao/l5-repository).
:::
