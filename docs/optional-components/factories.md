---
title: Factories
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

### Definition {#definition}

Factories (are a short name for Model Factories).

Factories are used to generate some fake data with the help of Faker to be used for testing purposes.

Factories are mainly used from Tests.

### Principles {#principles}

- Factories SHOULD be created in the Containers.

### Rules {#rules}

- All Factories MUST extend from `App\Ship\Parents\Factories\Factory`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                 - Data
                    - Factories
                        - UserFactory.php
                        - ...
```

### Code Samples {#code-samples}

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

For more information about the Models Factories read [this](https://laravel.com/docs/master/database-testing#defining-model-factories).
