---
title: Testing
---

Apiato is built with testing in mind.
In fact,
support for testing with PHPUnit is included out of the box
and a `phpunit.xml` file is already set up for your application.
In addition to the testing capabilities provided by Laravel,
Apiato enhances the testing experience by including convenient helper methods.
These methods enable you to write expressive tests for your applications, further enhancing the testing process.
You can refer to Laravel's documentation on [HTTP tests](https://laravel.com/docs/http-tests) for more information on the available testing methods.

Apiato looks for Unit and Functional tests in [multiple locations](components/optional-components/tests.md).

**Unit tests** are tests that focus on a very small, isolated portion of your code.
In fact, most unit tests probably focus on a single method.

**Functional tests** may test a larger portion of your code,
including how several objects interact with each other or even a full HTTP request to a JSON endpoint.
Generally, most of your tests should be functional tests.
These types of tests provide the most confidence that your system as a whole is functioning as intended.

## Functional Test Helpers {#functional-test-helpers}

### Properties {#properties}
Some test helper methods read your test class properties, to perform their jobs. Below, we will see those properties
and which method them:

#### $endpoint {#endpoint}

The `$endpoint = 'verb@uri'` property is used
to define the endpoints you want to access when making a call using the `makeCall()` function.

```php
class RegisterUserTest extends ApiTestCase
{
    protected string $endpoint = 'patch@v1/users/{id}';
    protected bool $auth = false;
    protected array $access = [
        'roles'       => '',
        'permissions' => '',
    ];

    public function testUpdateExistingUser()
    {
        // prepare your post data
        $user = $this->getTestingUser([
            'name' => 'He who should not be named',
            'gender' => 'female',
        ]);
        $data = [
            'name' => 'Updated Name',
            'gender' => 'male',
            'birth' => '2015-10-15',
        ];

        // send the HTTP request
        $response = $this->injectId($user->id)->makeCall($data);

        // assert response status is correct
        $response->assertOk();
    }
}
```

To override the value of the `endpoint` property in specific test methods, you can use the `endpoint()` method:
```php
$this->endpoint('get@myEndpoint')->makeCall();
```
To inject the ID in the endpoint, you can use the `injectId()` method:
```php
$this->injectId($user->id)->makeCall();
```
By using the `endpoint()` and `injectId()` methods,
you can customize the endpoint and inject IDs as needed for specific test scenarios.

#### $auth {#auth}

The `$auth = false` property is used to determine whether the endpoint being called requires authentication or not in your test class.
By default, the `$auth` property is set to true, meaning that authentication is required for the API endpoint.

If you do not explicitly define the `$auth` property in your test class, it will be defaulted to true automatically.

In the context of testing, when `$auth` is set to true,
the `makeCall()` function will handle authentication by creating a testing user
(if one is not already available) and injecting their access token into the headers before making the API call.

It's important to use `$auth = false` only for endpoints that do not require authentication,
such as registration or login endpoints.
For protected endpoints that require authentication,
it's recommended to keep `$auth` as true to ensure the proper handling of authentication during testing.

To override the value of the `auth` property in specific test methods, you can use the `auth()` method:
```php
$response = $this->auth(false)->makeCall();
```

#### $access {#access}

The `$access` property is used
to define roles or permissions that you want to assign to your testing users within a test class.
When you use the `getTestingUser()` method,
the testing user instance will automatically inherit all the roles and permissions specified in the `$access` property.

By setting the desired roles and permissions in the `$access` property,
you can conveniently configure the testing user with the necessary access rights for your test scenarios.
This ensures that the testing user has the appropriate privileges when interacting with the application during testing.

```php
protected array $access = [
    'roles'         => 'admin', // or   ['client', 'admin']
    'permissions'   => 'delete-users',
];
```

To override the value of the `access` property in specific test methods
and assign different roles or permissions to the testing user,
you can use the `getTestingUser()` method with the desired roles and permissions as the second argument:
```php
$this->getTestingUser(null, ['permissions' => 'jump', 'roles' => 'jumper']);
```

### Methods {#methods}

[makeCall](#make-call)  
[getTestingUser](#get-testing-user)  
[endpoint](#endpoint-method)  
[auth](#auth-method)  
[injectId](#inject-id)

#### makeCall {#make-call}

> makeCall(array $data = [], array $headers = [])

To make a request to your application, you may invoke the `makeCall` method within your functional test.
This method combines the functionalities of [Laravel HTTP test](https://laravel.com/docs/http-tests#testing-json-apis) helpers with the [properties](#properties)
defined in your functional test to make a request to the application.

The `makeCall` method returns an instance of `Illuminate\Testing\TestResponse`,
which provides a variety of [helpful assertions](https://laravel.com/docs/http-tests#fluent-json-testing)
that allow you to inspect your application's responses.

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

<br/>

#### getTestingUser {#get-testing-user}

> getTestingUser($userDetails = null, $access = null, bool $createUserAsAdmin = false)

When you call `getTestingUser` method, it returns a testing user instance with randomly generated default attributes,
allowing you to quickly create a testing user for your test scenarios.

The `getTestingUser` method
automatically assigns all the roles and permissions specified in the `$access` property to the testing user.
This ensures that the testing user has the appropriate access rights for the defined roles and permissions.

```php
$user = $this->getTestingUser();
```

However,
you also have the flexibility
to override these default attributes
by providing an array of custom user details as an argument to the `getTestingUser` method.

```php
$user = $this->getTestingUser([
    'email'    => 'hello@mail.test',
    'name'     => 'Hello',
    'password' => 'secret',
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

Make sure to update the `tests` configuration to reflect your custom user model
and ensure that the testing functionality works seamlessly with your custom user model and factory state.

<br/>

#### getTestingUserWithoutAccess {#get-testing-user-without-access}

> getTestingUserWithoutAccess($userDetails = null, bool $createUserAsAdmin = false)

The `getTestingUserWithoutAccess` method allows you to obtain a testing user instance that doesn't have any assigned permissions or roles.
It is a shortcut for `getTestingUser(null, null)`.
This skips all the roles and permissions defined in your test class's access property.

```php
$user = $this->getTestingUserWithoutAccess();
```

<br/>

#### endpoint {#endpoint-method}

> endpoint(string $endpoint)

The `endpoint` method allows you to specify the endpoint you want to test within your functional tests.
This method is especially useful
when you need to override the default endpoint that is defined in the `$endpoint` property of the test class,
specifically for a particular test method.

```php
$response = $this->endpoint('get@v1/register')->makeCall();
```

<br/>

#### auth {#auth-method}

> auth(bool $auth = true)

The `auth` method allows you
to specify the authentication status of the endpoint you want to test within your functional tests.
This method is especially useful
when you need to override the default authentication status that is defined in the `$auth` property of the test class,
specifically for a particular test method.

```php
$response = $this->auth(false)->makeCall();
```

<br/>

#### injectId {#inject-id}

> injectId($id, bool $skipEncoding = false, string $replace = '{id}')

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

$this->injectId($articles->id)->injectId($user->id, false, '{user_id}')->makeCall();
```

When the [Hash ID](security/hash-id.md) feature is enabled,
the `injectId` method will automatically encode the provided ID before injecting it into the endpoint.
However, you have the option to control this behavior by using the second parameter of the `injectId` method,
`$skipEncoding`.

```php
// endpoint = 'get@v1/users/{user_id}'

// this will encode the id automatically
$this->injectId($user->id, skipEncoding: false, replace: '{user_id}')->makeCall($data);
// this will skip the encoding
$this->injectId($user->getHashedKey(), skipEncoding: true, replace: '{user_id}')->makeCall($data);
```

By utilizing the `injectId` method, you can dynamically inject an ID into the endpoint,
allowing you to test specific resources or scenarios that depend on resource identifiers.

## Available Assertions {#available-assertions}

Apiato provides a variety of custom assertion methods that you may utilize when testing your application.

[assertModelCastsIsEmpty](#assert-model-casts-is-empty)  
[assertDatabaseTable](#assert-database-table)  
[inIds](#in-ids)  

#### assertModelCastsIsEmpty {#assert-model-casts-is-empty}

> assertModelCastsIsEmpty(Model $model, array ...$extraDefaultField)

The `assertModelCastsIsEmpty` method allows you to assert that the `casts` field of a model is empty.
By default, the `casts` field of a model includes the `id` field and,
if the model is soft deletable, the `deleted_at` field.
This method excludes these default fields from the assertion.

Here's an example of how to use `assertModelCastsIsEmpty`:

```php
$this->assertModelCastsIsEmpty($model);
```

In the code snippet above, `$model` represents the instance of the model you want to test.
The `assertModelCastsIsEmpty` method will verify that the `casts` field of the model is empty,
excluding the default `id` and `deleted_at` fields.

If you want to add additional fields to the exclusion list,
you can pass them as an array to the `assertModelCastsIsEmpty` method.
For example:

```php
$this->assertModelCastsIsEmpty($model, ['field1', 'field2']);
```

In this case, the assertion will exclude the `id`, `deleted_at`, `field1`, and `field2` fields from the `casts` field of the model.

By using the `assertModelCastsIsEmpty` method,
you can verify that the `casts` field of a model does not contain any custom cast types,
ensuring that the model's attributes are not automatically casted.

<br/>

#### assertDatabaseTable {#assert-database-table}

> assertDatabaseTable(string $table, array $expectedColumns)

This method is used
to verify
if the database table specified by `$table` has the expected columns specified in the `$expectedColumns` array.
The array should be in the format ['column_name' => 'column_type'],
where the column type is a string representing the expected data type of the column.

```php
$this->assertDatabaseTable('users', ['id' => 'bigint']);
```

<br/>

#### inIds {#in-ids}

> inIds($id, Collection $collection): bool

The `inIds` method allows you to check if the given hashed ID exists within the provided model collection.

```php
$hashedId = 'hashed_123';
$collection = Model::all();

$isInCollection = $this->inIds($hashedId, $collection);
```

By leveraging the `inIds` method, you can streamline your testing process when working with hashed identifiers,
ensuring that the expected hashed IDs are present within your model collections.

:::caution Deprecation warning
This method will be removed in the next major release and will not be available in the test file.
Instead, it will be transformed into a helper function that you can utilize anywhere in your application.
:::

## Faker {#faker}

An instance of [Faker](https://github.com/FakerPHP/Faker) is automatically provided in every test class, allowing you to generate fake data easily.
You can access it using `$this->faker`.

:::caution Deprecation warning
This feature is deprecated and will be removed in the next major release. You should use the `fake()` helper function instead.
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
