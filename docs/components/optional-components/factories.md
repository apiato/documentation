---
title: Factories
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

## Definition

Factories (are a short name for Model Factories).

Factories are used to generate some fake data with the help of Faker to be used for testing purposes.

Factories are mainly used from Tests.

## Principles

- Factories SHOULD be created in the Containers.

## Rules

- All Factories MUST extend the `App\Ship\Parents\Factories\Factory` class.

## Folder Structure

```
 - app
    - Containers
        - {Section}
            - {Container}
                 - Data
                    - Factories
                        - UserFactory.php
                        - ...
```

## Code Example

#### A User Model Factory

```php
class UserFactory extends Factory
{
    protected $model = User::class;

    public function definition(): array
    {
        static $password;

        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => $password ?: $password = Hash::make('testing-password'),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
            'is_admin' => false,
        ];
    }
}
```

#### Usage from Tests or Anywhere Else

```php
// creating 4 users
User::factory()->count(4)->create();
```

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/database-testing#defining-model-factories).
:::
