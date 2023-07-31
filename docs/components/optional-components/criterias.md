---
title: Criterias
tags:
  - component
  - optional-component
  - criteria
  - repository
  - action
  - task
---

This feature is provided by the [L5 Repositories](https://github.com/andersao/l5-repository) package.

Criterias are classes that hold and apply query condition when retrieving data from the database through a Repository.
Without using a Criteria class, you can add your query conditions to a Repository or to a Model as scope,
but with Criterias, your query conditions can be shared across multiple Models and Repositories.
It allows you to define the query condition once and use it anywhere in the App.

## Rules

- All container-specific Criterias MUST be placed in the `app/Containers/{Section}/{Container}/Data/Criterias` directory.
- All general Criterias MUST be placed in the `app/Ship/Criterias` directory.
- All Criterias MUST extend the `App\Ship\Parents\Criterias\Criteria` class.
- The parent extension SHOULD be aliased as `ParentCriteria`.
- Every Criteria MUST have an `apply` method.
- A Criteria MUST not contain any extra code. If it needs data, the data MUST be passed to it.

## Folder Structure

```
 - app
    - Containers
        - {Section}
            - {Container}
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

## Code Example

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

:::info Further reading
More info at [Laravel Docs](https://github.com/andersao/l5-repository#create-a-criteria).
:::

