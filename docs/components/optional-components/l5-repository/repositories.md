---
title: Repositories
---

Repositories are used to separate the logic that retrieves the data and maps it to a Model,
from the business logic that acts on the Model.

Repositories are used to abstract the data layer, making our application more flexible to maintain.

Repositories are used to hide the implementation of data operations,
so that the business logic code is more readable and understandable.

Repositories are used to decouple the business logic and the data access layers of an application.

Repositories are used to centralize the data logic and how the data is manipulated.

To generate new repositories
you may use the `apiato:generate:repository` interactive command:

```
php artisan apiato:generate:repository
```

## Definition

The Repository classes are an implementation of the Repository Design Pattern.

Their major roles are separating the business logic from the data (or the data access Task).

Repositories save and retrieves Models to/from the underlying storage mechanism.

The Repository is used to separate the logic that retrieves the data and maps it to a Model, from the business logic that acts on the Model.

## Principles

- Every Model SHOULD have a Repository.

- A Model SHOULD always get accessed through its Repository. (Never accessed directly).

## Rules

- All Repositories MUST extend the `App\Ship\Parents\Repositories\Repository` class.
- Repository name MUST be same as it's model name (model: `Foo` -> repository: `FooRepository`).
- If a Repository belongs to a Model whose name is not equal to its Container name, then the Repository implement `model` method like [this](#model-method-example). If the name of a model differs from the container name, you must implement the `model` method in the repository.
  This method allows you to specify the correct model class that should be used for the repository operations.

## Folder Structure

```
 - app
    - Containers
        - Section
            - Container
                - Data
                - Repositories
                    - UserRepository.php
                    - ...
```

## Code Example

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

#### Different Model and Container Name {#different-model-and-container-name
The `model` method must be implemented when the model has different name than the container.

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

## Other Properties: {#other-properties}

#### API Query Parameters Property {#api-query-parameters-property}

To enable query parameters (`?search=text`,...) in your API you need to set the property `$fieldSearchable` on the Repository class, to instruct the querying on your model. More [details](query-parameters.md##using-the-request-criteria).

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
