---
title: Tests Helpers
---

- [Tests properties](#tests-properties)
  - [$endpoint](#endpoint)
  - [$auth](#auth)
  - [$access](#access)
- [Tests functions](#tests-functions)
  - [makeCall](#make-call)
  - [getTestingUser](#get-testing-user)
- [Faker](#faker)
- [Create live Testing Data](#create-live-testing-data)
- [Debugging with PsySH](#debugging-with-PsySH)

Apiato provides additional helper functions, on top of
the [Laravel's default Tests](https://laravel.com/docs/http-tests), to make testing your API much faster and fun.

Writing functional tests, makes implementing, debugging and modifying a feature faster.

With Apiato you just prepare the data you want to send for your POST request, call the `makeCall()` function and start
asserting the response. Everything else is set for you. There are helper functions to create and prepare a testing user
with the right authorization (roles and permissions) for each request.

## Tests properties {#tests-properties}

Some test helper functions read your test class properties, to perform their jobs. below we will see those properties
and who uses them:

### $endpoint {#endpoint}

The `$endpoint = 'verb@uri';` property is where you define the endpoints you are trying to access when calling
`$this->makeCall()`.

```php
class RegisterUserTest extends ApiTestCase
{
    protected string $endpoint = 'post@register';
    protected bool $auth = false;
    protected array $access = [
        'roles'       => '',
        'permissions' => '',
    ];

    public function testRegisterNewUserWithCredentials()
    {
        // prepare your post data
        $data = [
            'email'    => 'john@doe.test',
            'name'     => 'John Doe',
            'password' => 'secret',
        ];

        // send the HTTP request
        $response = $this->makeCall($data);

        // assert response status is correct
        $this->assertEquals('200', $response->getStatusCode());

        // ... add all your assertions
    }
}
```

#### Override the `endpoint` property value in some test functions
```php
$this->endpoint('get@myEndpoint')->makeCall();
```

### $auth {#auth}

The `$auth = false;` property defines if the endpoint you are trying to call requires authentication or not. By default
`$auth` is equal to true, also when not defined on your test class it will be defaulted to true.

When `$auth` is true, the `makeCall()` will create a testing user if none already found, and it will inject his access
token in the headers, before making the call.

So only use this property when your endpoint is not protected, for example the register and login tests.

#### Override the `auth` property value in some test functions
```php
$response = $this->auth(false)->makeCall();
```

### $access {#access}

The `$access` property is where you define the permissions/roles that you need to give to your testing users in that
test class. So when using `$user = $this->getTestingUser();` it will automatically take all the roles and permissions
you gave him.

```php
protected $access = [
    'roles'         => 'admin', // or   ['client', 'admin']
    'permissions'   => 'delete-users',
];
```

#### Override the `access` property value in some test functions

Call the `getTestingUser` and pass roles and permissions as the second argument.

```php
$this->getTestingUser(null, ['permissions' => 'jump', 'roles' => 'jumper']);
```

Or you can call `getTestingUserWithoutAccess()` to get user without permissions and roles.

## Tests functions {#tests-functions}

All the test helper functions are provided by traits are living inside `vendor/apiato/core/Traits/TestsTraits/PhpUnit/*` folder,and they are all
available for usage from every test class in your application.

### makeCall {#make-call}

`makeCall(array $data = [], array $headers = [])` is one of the most important helper functions for an API.

#### Usage

```php
$response = $this->makeCall();

$response = $this->makeCall([
    'email'    => $userDetails['email'],
    'password' => $userDetails['password'],
]);

$response = $this->makeCall($data, $headers);

$response = $this->endpoint('get@register')->makeCall($data);

$response = $this->auth(false)->makeCall();

$response = $this->endpoint('get@item/{id}')->injectId($user->id)->makeCall();
```

### getTestingUser {#get-testing-user}

`getTestingUser($userDetails = null, $access = null)` is another very important helper function:

#### Usage

```php
$user = $this->getTestingUser();

$user = $this->getTestingUser([
    'email'    => 'hello@mail.test',
    'name'     => 'Hello',
    'password' => 'secret',
]);

```

## Faker {#faker}

Just use it from any test: `$this->faker->name;`

There's an instance of faker in every class.

Just use it: `$this->faker->name;`

See the [Tests](../Optional%20Components/tests) Page, for more details about the Tests components.

## Create live Testing Data {#create-live-testing-data}

To test your app with some live testing data (like creating items in an inventory) you can use this feature to
automatically generate those data. This is also helpful for staging when real people are testing your app with some
testing data.

1. Go to `app/Ship/Seeder/SeedTestingData.php` seeder class, and create your live testing data.

2. Run this command `php artisan apiato:seed-test`

## Debugging with PsySH {#debugging-with-PsySH}

For better debugging and development, you can open a runtime developer console while executing your test.

Using [PsySH](https://psysh.org/) (interactive debugger and REPL "read-eval-print loop" for PHP). *The package is
required by the Laravel Tinker Package.*

To use it set the breakpoint `eval(\Psy\sh());` anywhere you want in any Actions, Controllers, Tasks... and run your
test normally.
