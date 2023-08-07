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

To generate new tests you may use the following interactive commands:

```
php artisan apiato:generate:test:unit
php artisan apiato:generate:test:functional
php artisan apiato:generate:test:testcase
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

- All container-specific Unit tests MUST be placed in the `app/Containers/{Section}/{Container}/Tests/Unit` directory.
- All general and `Ship` Unit tests MUST be placed in the `app/Ship/Tests/Unit` directory.
- All API Functional tests MUST be placed in the `app/Containers/{Section}/{Container}/UI/API/Tests/Functional` directory.
- All WEB Functional tests MUST be placed in the `app/Containers/{Section}/{Container}/UI/WEB/Tests/Functional` directory.
- All container-specific Unit tests MUST extend the `App\Containers\{Section}\{Container}\Tests\UnitTestCase` class.
- All general and `Ship` Unit tests MUST extend the `App\Ship\Tests\TestCase` class.
- All API Functional tests MUST extend the `App\Containers\{Section}\{Container}\UI\API\Tests\ApiTestCase` class.
- All WEB Functional tests MUST extend the `App\Containers\{Section}\{Container}\UI\WEB\Tests\WebTestCase` class.
- All TestCases MUST extend the `App\Ship\Parents\Tests\PhpUnit\TestCase` class. e.g.:
  - `App\Ship\Tests\TestCase`
  - `App\Containers\{Section}\{Container}\Tests\UnitTestCase`
  - `App\Containers\{Section}\{Container}\UI\API\Tests\ApiTestCase`
  - `App\Containers\{Section}\{Container}\UI\WEB\Tests\WebTestCase`
  - The parent extension SHOULD be aliased as `ParentTestCase`.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           ├── Tests
│           │   ├── Unit
│           │   │   ├── CreateUserActionTest.php
│           │   │   ├── DeleteUserTaskTest.php
│           │   │   └── ...
│           │   └── UnitTestCase.php
│           └── UI
│               ├── API
│               │   └── Tests
│               │       ├── Functional
│               │       │   ├── CreateUserTest.php
│               │       │   ├── DeleteUserTest.php
│               │       │   └── ...
│               │       └── ApiTestCase.php
|               └── WEB
│                   └── Tests
│                       ├── Functional
│                       │   ├── LoginTest.php
│                       │   ├── LogoutTest.php
│                       │   └── ...
│                       └── WebTestCase.php
└── Ship
    └── Tests
        ├── Unit
        │   ├── UrlRuleTest.php
        │   └── ...
        └── TestCase.php
```

## Writing Tests

Unit tests are defined in the same manner as you would define them in Laravel.
However, Functional tests follow a distinct approach.
Here's an example of how to write functional tests:

```php
namespace App\Containers\AppSection\User\UI\API\Tests\Functional;

use App\Containers\AppSection\User\UI\API\Tests\ApiTestCase;
use Illuminate\Testing\Fluent\AssertableJson;

/**
 * @group user
 * @group api
 */
class FindUserByIdTest extends ApiTestCase
{
    protected string $endpoint = 'get@v1/users/{id}';
    protected bool $auth = true;
    protected array $access = [
        'permissions' => 'search-users',
        'roles' => '',
    ];

    public function testFindUser(): void
    {
        $user = $this->getTestingUser();

        $response = $this->injectId($user->id)->makeCall();

        $response->assertOk();
        $response->assertJson(
            static fn (AssertableJson $json) => $json->has('data')
                    ->where('data.id', \Hashids::encode($user->id))
                    ->etc()
        );
    }
}
```

To learn more about the properties and methods used,
such as `endpoint` and `makeCall`, please read to the following section.

## Functional Test Helpers

Apiato provides a set of helper methods that you can use to write expressive functional tests.

### Properties {#properties}
Certain test helper methods access properties defined in your test class to execute their tasks effectively.
Below, we will explore these properties and their corresponding methods:

> #### endpoint {#endpoint}

The `endpoint` property is used
to define the endpoints you want to access when making a call using the `makeCall` method.
It is defined as a string in the following format: `method@url`.

```php
class FindUserByIdTest extends ApiTestCase
{
    // highlight-start
    protected string $endpoint = 'get@v1/profile';
    // highlight-end
    
    public function testGetAuthenticatedUser(): void
    {
        $user = $this->getTestingUser();

        $response = $this->makeCall();
        // You can override the "endpoint" property in specific test methods
        // $response = $this->endpoint('get@v1/users')->makeCall();
                
        $response->assertOk();
        // other assertions...
    }
}
```

> #### auth {#auth}

The `auth` property is used to determine whether the endpoint being called requires authentication or not in your test class.
If you do not explicitly define the `auth` property in your test class, it will be defaulted to `true` automatically.

In the context of testing, when `auth` is set to true,
the `makeCall` method will handle authentication by creating a testing user
(if one is not already available) and injecting their access token into the headers before making the API call.

```php
class ListUsersTest extends ApiTestCase
{
    protected string $endpoint = 'get@v1/users';
    // highlight-start
    protected bool $auth = false;
    // highlight-end
    
    public function testListUsers(): void
    {
        $response = $this->makeCall();
        // You can override the "auth" property in specific test methods
        // $response = $this->auth(true)->makeCall();
        
        $response->assertOk();
        // other assertions...
    }
}
```

> #### access

The `access` property is used
to define roles or permissions that you want to assign to your testing users within a test class.
When you use the `getTestingUser` method,
the testing user instance will automatically inherit all the roles and permissions specified in the `access` property.

By setting the desired roles and permissions in the `access` property,
you can conveniently configure the testing user with the necessary access rights for your test scenarios.
This ensures that the testing user has the appropriate privileges when interacting with the application during testing.

```php
class DeleteUserTest extends ApiTestCase
{
    protected string $endpoint = 'delete@v1/users/{id}';
    // highlight-start
    protected array $access = [
        'permissions' => 'delete-users',
        'roles' => 'admin',
    ];
    // highlight-end
    
    public function testDeleteUser(): void
    {
        // The testing user will have the "delete-users" permission and "admin" role.
        // highlight-start
        $user = $this->getTestingUser();
        // highlight-end
    
        $response = $this->injectId($user->id)->makeCall();

        $response->assertNoContent();        
    }
}
```

### Methods {#methods}

[makeCall](#make-call)  
[injectId](#inject-id)  
[getTestingUser](#get-testing-user)  
[getTestingUserWithoutAccess](#get-testing-user-without-access)  
[endpoint](#endpoint-method)  
[auth](#auth-method)  

> #### makeCall {#make-call}

To make a request to your application, you may invoke the `makeCall` method within your functional test.
This method combines the functionalities of [Laravel HTTP test](https://laravel.com/docs/http-tests#testing-json-apis) helpers with the [properties](#properties)
defined in your functional test to make a request to the application.

The `makeCall` method returns an instance of `Illuminate\Testing\TestResponse`,
which provides a variety of [helpful assertions](https://laravel.com/docs/http-tests#fluent-json-testing)
that allow you to inspect your application's responses.

```php
$this->makeCall();

$this->makeCall([
    'email'    => $userDetails['email'],
    'password' => $userDetails['password'],
]);

$this->makeCall($data, $headers);
```

> #### injectId {#inject-id}

The `injectId` method enables you to inject an ID into the endpoint you want to test within your functional tests.

```php
// user with ID 100
// endpoint = 'get@v1/users/{id}'

$this->injectId($user->id)->makeCall();
```

In this example, the original endpoint is `'get@v1/users/{id}'`, and the desired ID to be injected is `100`.
The `injectId` method is then called with these parameters.
The method replaces `{id}` in the endpoint with the provided ID,
resulting in the modified endpoint `'get@v1/users/100'`.

By default, `injectId`
will look for a string of `{id}` in the endpoint to replace with the provided id. Remember
to provide the third parameter if your endpoint expects an id with a different name.

```php
// endpoint = 'get@v1/users/{user_id}/articles/{id}'
// You can also chain multiple `injectId` calls!

$this->injectId($articles->id)->injectId($user->id, replace: '{user_id}')->makeCall();
```

When the [Hash ID](security/hash-id.md) feature is enabled,
the `injectId` method will automatically encode the provided ID before injecting it into the endpoint.
However, you have the option to control this behavior by using the second parameter of the `injectId` method,
`skipEncoding`.

```php
// endpoint = 'get@v1/users/{user_id}'

// this will encode the id automatically
$this->injectId($user->id, skipEncoding: false, replace: '{user_id}')->makeCall($data);
// this will skip the encoding
$this->injectId($user->getHashedKey(), skipEncoding: true, replace: '{user_id}')->makeCall($data);
```

By utilizing the `injectId` method, you can dynamically inject an ID into the endpoint,
allowing you to test specific resources or scenarios that depend on resource identifiers.

> #### getTestingUser {#get-testing-user}

When you call `getTestingUser` method,
it returns a testing user instance with randomly generated attributes and all the roles and permissions
specified in the `access` property.
This ensures that the testing user has the appropriate access rights for the defined roles and permissions.
However,
you also have the flexibility
to override these attributes and access rights by passing the desired values as arguments to the method.

```php
// The testing user will be created with randomly generated attributes 
// and will inherit the roles and permissions specified in the `access` property.
$user = $this->getTestingUser();

// The testing user will be created with the provided attributes and access rights.
$user = $this->getTestingUser([
    'email' => 'hello@mail.test',
    'name' => 'Hello',
    'password' => 'secret',
], [
    'permissions' => 'jump',
    'roles' => 'jumper',
]);
```

Additionally, to create an admin user, you can pass `true` as the third argument when invoking `getTestingUser`.
This will use the `admin` state of `app/Containers/AppSection/User/Data/Factories/UserFactory.php` to create the testing user.

```php
$user = $this->getTestingUser(null, null, true);
```

The `getTestingUser` method is configured to work with the default Apiato configuration.
However, if you are using a custom user model,
you will need to update the `tests` configuration in `app/Ship/Configs/apiato.php`.
This configuration file allows you
to specify your custom user model and the corresponding model factory state for testing.

> #### getTestingUserWithoutAccess {#get-testing-user-without-access}

The `getTestingUserWithoutAccess` method allows you to obtain a testing user instance that doesn't have any assigned permissions or roles.
It is a shortcut for `getTestingUser(null, null)`.
This skips all the roles and permissions defined in your test class `access` property.

```php
$user = $this->getTestingUserWithoutAccess();
```

> #### endpoint {#endpoint-method}

The `endpoint` method allows you to specify the endpoint you want to test within your functional tests.
This method is especially useful
when you need to override the default endpoint that is defined in the `endpoint` property of the test class,
specifically for a particular test method.

```php
$this->endpoint('get@v1/register')->makeCall();
```

> #### auth {#auth-method}

The `auth` method allows you
to specify the authentication status of the endpoint you want to test within your functional tests.
This method is especially useful
when you need to override the default authentication status that is defined in the `auth` property of the test class,
specifically for a particular test method.

```php
$this->auth(false)->makeCall();
```

## Available Assertions {#available-assertions}

Apiato provides a variety of custom assertion methods that you may utilize when testing your application.

[assertModelCastsIsEmpty](#assert-model-casts-is-empty)  
[assertDatabaseTable](#assert-database-table)  
[inIds](#in-ids)

> #### assertModelCastsIsEmpty {#assert-model-casts-is-empty}

The `assertModelCastsIsEmpty` method allows you to assert that the `casts` property of a model is empty.
By default, the `casts` property of a model includes the `id` and,
if the model is soft deletable, the `deleted_at`.
This method excludes these default values from the assertion.

Here's an example of how to use `assertModelCastsIsEmpty`:

```php
$this->assertModelCastsIsEmpty($model);
```

In the code snippet above, `$model` represents the instance of the model you want to test.
The `assertModelCastsIsEmpty` method will verify that the `casts` property of the model is empty,
ignoring the default `id` and `deleted_at` values.

If you want to add additional values to the ignore list,
you can pass them as an array to the `assertModelCastsIsEmpty` method.

```php
$this->assertModelCastsIsEmpty($model, ['value1', 'value2']);
```

In this case, the assertion will ignore the `id`, `deleted_at`,
`value1`, and `value2` values when verifying the `casts` property of the model.

By using the `assertModelCastsIsEmpty` method,
you can verify that the `casts` property of a model does not contain any unexpected values,
ensuring that the model's attributes are not automatically casted.

> #### assertDatabaseTable {#assert-database-table}

This method is used
to verify
if the database table specified by `table` has the expected columns specified in the `expectedColumns` array.
The array should be in the format ['column_name' => 'column_type'],
where the column type is a string representing the expected data type of the column.

```php
$this->assertDatabaseTable('users', ['id' => 'bigint']);
```

> #### inIds {#in-ids}

The `inIds` method allows you to check if the given hashed ID exists within the provided model collection.

```php
$hashedId = 'hashed_123';
$collection = Model::all();

$isInCollection = $this->inIds($hashedId, $collection);
```

By leveraging the `inIds` method, you can streamline your testing process when working with hashed identifiers,
ensuring that the expected hashed IDs are present within your model collections.

:::caution Deprecation Notice
This method will be removed in the next major release and will not be available in the test file.
Instead, it will be transformed into a helper function that you can utilize anywhere in your application.
:::

## Faker {#faker}

An instance of [Faker](https://github.com/FakerPHP/Faker) is automatically provided in every test class, allowing you to generate fake data easily.
You can access it using `$this->faker`.

:::caution Deprecation Notice
This feature is deprecated and will be removed in the next major release.
You should use the Laravel `fake` helper function instead.
:::

## Create Live Testing Data {#create-live-testing-data}

To test your application using live testing data,
such as creating items in an inventory, you can utilize the feature designed specifically for this purpose.
It allows for the automatic generation of testing data,
which can be helpful during staging or when real people are testing your application.

To create your live testing data, navigate to the `app/Ship/Seeder/SeedTestingData.php` seeder class.
Within this class, you can define the logic and data generation process for your testing data.

Once you have defined your testing data,
you can run the following command in your terminal:

```
php artisan apiato:seed-test
```

This command triggers the seeding process specifically for testing data,
populating your application with the generated data.
