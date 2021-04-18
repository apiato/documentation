---
title: Criterias
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

### Definition {#definition}

Criterias are classes that hold and apply query condition when retrieving data from the database through a Repository.

Without using a Criteria class, you can add your query conditions to a Repository or to a Model as scope, but with Criterias, your query conditions can be shared across multiple Models and Repositories. It allows you to define the query condition once and use it anywhere in the App.

### Principles {#principles}

- Every Container MAY have its own Criterias. However, shared Criterias SHOULD be created in the Ship layer.

- A Criteria MUST not contain any extra code, if it needs data, the data SHOULD be passed to it from the Actions or the Task. It SHOULD not call any `Task` for data.

### Rules {#rules}

- All Criterias MUST extend from `App\Ship\Parents\Criterias\Criteria`.

- Every Criteria SHOULD have an `apply()` function.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - Data
                    - Criterias
                      - ColourRedCriteria.php
                      - RaceCarsCriteria.php
                      - ...
    - Ship
        - Criterias
            - CreatedTodayCriteria.php
            - NotNullCriteria.php
            - ...
```

### Code Samples {#code-samples}

#### A Shared Criteria

```php
class OrderByCreationDateDescendingCriteria extends Criteria
{
    public function apply($model, PrettusRepositoryInterface $repository)
    {
        return $model->orderBy('created_at', 'desc');
    }
}
```

#### Usage from Task

```php
public function run()
{
    $this->userRepository->pushCriteria(new OrderByCreationDateDescendingCriteria());
    return  $this->userRepository->paginate();
}
```

#### Criteria Accepting Data Input

```php
class ThisUserCriteria extends Criteria
{
    private $userId;

    public function __construct($userId)
    {
        $this->userId = $userId;
    }

    public function apply($model, PrettusRepositoryInterface $repository)
    {
        return $model->where('user_id', '=', $this->userId);
    }
}
```

#### Passing Data from Task to Criteria

```php
public function run($user)
{
    $this->accountRepository->pushCriteria(new ThisUserCriteria($user->id));
    return $this->accountRepository->paginate();
}

```

For more information about the Criteria read [this](https://github.com/andersao/l5-repository#create-a-criteria).
