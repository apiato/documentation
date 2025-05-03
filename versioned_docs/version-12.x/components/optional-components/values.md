---
title: Values
tags:
  - component
  - optional-component
  - value
  - model
---

Value Objects are short names for known "Value Objects",
which are simple objects similar to Models in terms of representing data.
However, unlike Models, Value Objects are not stored in the database and, therefore, do not have IDs.
Additionally, they do not possess functionality or modify any state; their sole purpose is to hold data.

Value Objects are particularly well-suited for use with Laravel [attributes casting](https://laravel.com/docs/eloquent-mutators#value-object-casting),
which allows us to cast a Value Object to a specific type,
enabling seamless integration with Eloquent models and database operations.

To generate new values, you may use the `apiato:generate:value` interactive command:

```
php artisan apiato:generate:value
```

## Rules

- All container-specific Values MUST be placed in the `app/Containers/{section}/{container}/Values` directory.
- All general Values MUST be placed in the `app/Ship/Values` directory.
- All Values MUST extend the `App\Ship\Parents\Values\Value` class.
  - The parent extension SHOULD be aliased as `ParentValue`.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Values
                ├── Output.php
                ├── Region.php
                └── ...
```

## Code Example

```php
class Location extends Value
{
    public function __construct(
        public float $latitude,
        public float $longitude,
    ) {
    }
}
```
