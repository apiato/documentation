---
sidebar_position: 2
title: Criterias
tags:
  - component
  - optional-component
  - criteria
  - repository
  - action
  - task
---

> To prevent overlap with the L5 Repository documentation, this page
> exclusively delves into Apiato distinct features and configurations,
> offering only a limited set of examples.
> To learn more about Criterias and the L5 Repository package,
> please refer to its [documentation](https://github.com/andersao/l5-repository).

Criterias are specialized classes designed to encapsulate
and apply query conditions when fetching data from a database using a [Repository](repositories.md).
Unlike adding query conditions directly to a Repository or as a scope within a Model,
Criterias offer distinct advantages.

With Criterias, you can define query conditions in a reusable and shareable way.
This means
that a single query condition can be defined once and then
utilized across multiple Models and Repositories in your application.
This approach offers the flexibility to create query conditions once
and apply them consistently anywhere in your application,
enhancing code reusability and maintainability.

## Rules

- All container-specific Criterias MUST be placed in the `app/Containers/{Section}/{Container}/Data/Criterias` directory.
- All general Criterias MUST be placed in the `app/Ship/Criterias` directory.
- All Criterias MUST extend the `App\Ship\Parents\Criterias\Criteria` class.
  - The parent extension SHOULD be aliased as `ParentCriteria`.
- Every Criteria MUST have an `apply` method.
- A Criteria MUST not contain any extra code. If it needs data, the data MUST be passed to it.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Data
│               └── Criterias
│                   ├── ColourRedCriteria.php
│                   ├── RaceCarsCriteria.php
│                   └── ...
└── Ship
    └── Criterias
        ├── CreatedTodayCriteria.php
        ├── NotNullCriteria.php
        └── ...
```

## Code Example

```php
use App\Ship\Parents\Criterias\Criteria as ParentCriteria;
use Prettus\Repository\Contracts\RepositoryInterface as PrettusRepositoryInterface;

class IsNullCriteria extends ParentCriteria
{
    public function __construct(
        private readonly string $field
    ) {
    }

    public function apply($model, PrettusRepositoryInterface $repository)
    {
        return $model->whereNull($this->field);
    }
}
```

### Applying Criteria

A Criteria can be applied to a Repository by using the `pushCriteria` method.

```php
public function __construct(
    protected readonly UserRepository $repository
) {
}
```

The `pushCriteria` method accepts an instance of a Criteria class or a string with the Criteria class name.

```php
public function run()
{
    $this->repository->pushCriteria(new IsNullCriteria('email'));
    return $this->repository->paginate();
}
```

You can also apply multiple Criterias to a Repository by using the `pushCriteria` method multiple times.

```php
public function run()
{
    $this->repository->pushCriteria(new IsNullCriteria('email'));
    $this->repository->pushCriteria(OrderByNameCriteria::class);
    return $this->repository->paginate();
}
```


