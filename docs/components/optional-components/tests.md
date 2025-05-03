---
title: Tests
tags:
  - component
  - optional-component
  - test
---

Apiato is built with testing in mind.
In fact,
support for testing with PHPUnit is included out of the box
and a `phpunit.xml` file is already set up for your application.
In addition to the testing capabilities provided by Laravel,
Apiato enhances the testing experience by including convenient helper methods.
These methods enable you to write expressive tests for your applications, further enhancing the testing process.
You can refer to Laravel documentation on [HTTP tests](https://laravel.com/docs/http-tests) for more information on the available testing methods.

To generate new tests, you may use the following interactive commands:

```
php artisan apiato:make:test:unit
php artisan apiato:make:test:functional
php artisan apiato:make:test:testcase
```

## Definitions

#### Unit tests
Unit tests are tests that focus on a very small, isolated portion of your code.
In fact, most unit tests probably focus on a single method.

#### Functional tests
Functional tests may test a larger portion of your code,
including how several objects interact with each other or even a full HTTP request to a JSON endpoint.
Generally, most of your tests should be functional tests.
These types of tests provide the most confidence that your system as a whole is functioning as intended.

## Rules

- All container-specific tests:
  - MUST be placed in the `app/Containers/{Section}/{Container}/Tests` directory.
  - Functional tests:
    - MUST be placed in the `app/Containers/{Section}/{Container}/Tests/Functional` directory.
    - API tests:
      - MUST be placed in the `app/Containers/{Section}/{Container}/Tests/Functional/API` directory.
      - MUST extend the `App\Containers\{Section}\{Container}\Tests\Functional\ApiTestCase` class.
        - MUST extend the `App\Containers\{Section}\{Container}\Tests\FunctionalTestCase` class.
          - MUST extend the `App\Containers\{Section}\{Container}\Tests\ContainerTestCase` class.
    - CLI tests:
      - MUST be placed in the `app/Containers/{Section}/{Container}/Tests/Functional/CLI` directory.
      - MUST extend the `App\Containers\{Section}\{Container}\Tests\Functional\CliTestCase` class.
        - MUST extend the `App\Containers\{Section}\{Container}\Tests\FunctionalTestCase` class.
          - MUST extend the `App\Containers\{Section}\{Container}\Tests\ContainerTestCase` class.
  - Unit tests:
    - MUST be placed in the `app/Containers/{Section}/{Container}/Tests/Unit` directory.
    - MUST extend the `App\Containers\{Section}\{Container}\Tests\UnitTestCase` class.
      - MUST extend the `App\Containers\{Section}\{Container}\Tests\ContainerTestCase` class.
    - Directory structure MUST exactly match the Container's directory structure.
- All `Ship` Unit tests:
  - MUST be placed in the `app/Ship/Tests/Unit` directory.
  - MUST extend the `App\Ship\Tests\ShipTestCase` class.
- All `ContainerTestCases` & `ShipTestCase` MUST extend the `App\Ship\Parents\Tests\PhpUnit\TestCase` class.
  - The parent extension SHOULD be aliased as `ParentTestCase`.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Tests
│               ├── Functional
│               │   ├── API
│               │   │   ├── CreateUserTest.php
│               │   │   └── ...
│               │   ├── CLI
│               │   │   ├── CreateAdminCommandTest.php
│               │   │   └── ...
│               │   ├── ApiTestCase.php
│               │   └── CliTestCase.php
│               ├── Unit 
│               │   ├── Actions
│               │   │   ├── CreateUserActionTest.php
│               │   │   └── ...
│               │   ├── AnotherDirectory
│               │   │   ├── ...
│               │   │   └── ...
│               │   └── UI
│               │       ├── API
│               │       │   ├── Controllers
│               │       │   ├── Requests
│               │       │   ├── Transformers
│               │       │   └── ...
│               │       └── WEB
│               │           ├── Controllers
│               │           ├── Requests
│               │           ├── Transformers
│               │           └── ...
│               ├── ContainerTestCase.php
│               ├── FunctionalTestCase.php
│               └── UnitTestCase.php
└── Ship
    └── Tests
        ├── Unit
        │   ├── UrlRuleTest.php
        │   └── ...
        └── ShipTestCase.php
```

## Available Assertions {#available-assertions}

Apiato provides a variety of custom assertion methods that you may use when testing your application.

[assertDatabaseTable](#assertDatabaseTable)  

#### assertDatabaseTable
> Available since Core v8.5.0

This method is used
to verify
if the database table specified by `table` has the expected columns specified in the `expectedColumns` array.
The array should be in the format ['column_name' => 'column_type'],
where the column type is a string representing the expected data type of the column.

```php
$this->assertDatabaseTable('users', ['id' => 'bigint']);
```
