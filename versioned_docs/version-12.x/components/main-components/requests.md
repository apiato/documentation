---
sidebar_position: 3
title: Requests
tags:
  - component
  - main-component
  - request
  - route
  - controller
  - action
---

[Requests](https://laravel.com/docs/requests) components are a way to interact with the current HTTP request
being handled by your application as well as retrieve the input,
cookies, and files that were submitted with the request.

To generate new requests you may use the `apiato:generate:request` interactive command:

```
php artisan apiato:generate:request
```

## Definition & Principles

Read [**Porto SAP Documentation (#Requests)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- Validation rules MUST be defined in the `rules` method.
- All API Requests MUST be placed in the `app/Containers/{Section}/{Container}/UI/API/Requests` directory.
- All Web Requests MUST be placed in the `app/Containers/{Section}/{Container}/UI/WEB/Requests` directory.
- All Requests:
  - MUST extend the `App\Ship\Parents\Requests\Request` class.
    - The parent extension SHOULD be aliased as `ParentRequest`.
  - MUST have a public `rules` method, returning an array of validation rules.
  - MUST have a public `authorize` method, returning a boolean value.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── UI
                ├── API
                │   └── Requests
                │       ├── CreateUserRequest.php
                │       ├── DeleteUserRequest.php
                │       └── ...
                └── WEB
                    └── Requests
                        ├── Login.php
                        ├── Logout.php
                        └── ...
```

## Code Example

```php
use App\Ship\Parents\Requests\Request as ParentRequest;

class DemoRequest extends ParentRequest
{
    protected array $access = [];
    protected array $decode = [];
    protected array $urlParameters = [];

    public function rules(): array
    {
        return [
            'field' => 'min:3|max:50',
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
```

## Validation

In Apiato,
validation of incoming requests follows the
Laravel [Form Request Validation](https://laravel.com/docs/validation#form-request-validation) approach.

Validation rules are defined within the respective Request class.
These rules are automatically enforced when a Request is injected into a Controller.

Here's an example of a Request class with validation rules:

```php
use App\Ship\Parents\Requests\Request as ParentRequest;

class RegisterUserRequest extends ParentRequest
{
    public function rules(): array
    {
        return [
            'email'    => 'required|email|max:200|unique:users,email',
            'password' => 'required|min:20|max:300',
            'name'     => ['required', 'min:2', 'max:400'],
        ];
    }

}
```

And here's how you would use this Request class within a Controller:

```php
public function __invoke(RegisterUserRequest $request)
{
    $user = app(RegisterUserAction::class)->run($request);
    
    return $this->transform($user, UserTransformer::class);
}
```

In this example,
the validation rules defined in `RegisterUserRequest` will be automatically applied
before the `__invoke` method is executed.
If the validation fails, an appropriate error response will be generated.

## Request Properties

Apiato introduces new properties to the Request Class that enhance its functionality.

### access

The `$access` property allows you to define Roles and Permissions that can access a specific endpoint.
It's used by the `hasAccess` method to check if a user has the required Roles and Permissions to use that endpoint.

```php
class DemoRequest extends ParentRequest
{
    protected array $access = [
        'permissions' => 'delete-users',
        'roles' => 'manager'
    ];

    public function authorize(): bool
    {
        return $this->hasAccess();
    }
}
```

You can also use the `array notation` or `pipe` to define multiple Roles and Permissions.

```php
class DemoRequest extends ParentRequest
{
    protected $access = [
        'permissions' => ['delete-users', 'another-permissions'],
        'roles' => 'manager|admin',
    ];
        
    // ...
}
```

:::tip
If there's no need to set any roles or permissions,
you can simply set the `$permissions` or `$roles` property to an empty string `''`, an empty array `[]`, or `null`.
:::

### decode

The `$decode` property is used to handle the decoding of Hashed IDs from the incoming Request.

When you enable the [Hash ID](../../security/hash-id.md) feature, your application can receive Hashed IDs from users.
These Hashed IDs need to be decoded before they can be effectively validated.
Apiato facilitates this process
by providing a property in its Requests class where you can specify which Hashed IDs need to be decoded.
This ensures that the validation procedure seamlessly integrates with Hashed IDs.

```php
class DemoRequest extends ParentRequest
{
    protected array $decode = [
        'user_id',
        'item_id',
    ];
    
    // ...
}
```

:::note
Keep in mind that validation rules relying on your ID, such as `exists:users,id`,
will not function correctly unless you decode the ID before passing it to the validation process.
:::

### urlParameters

The `$urlParameters` property simplifies the process of applying validation rules to URL parameters.

By default, Laravel doesn't provide validation for URL parameters (`/stores/999/items`).
However, by using the `$urlParameters` property, you can enable validation for these parameters.
By specifying the desired URL parameters within this property,
you not only enable validation but also gain direct access to these parameters from the Request object.

```php
// URL: /stores/{id}/items
// GET /stores/999/items
class DemoRequest extends ParentRequest
{
    protected array $urlParameters = [
        'id',
    ];

    public function rules(): array
    {
        return [
            'id'   => 'integer', // url parameter
        ];
    }
}
```

## Helper Methods

### hasAccess

The `hasAccess` method assesses a user's access rights based on the Request's `$access` property.
If the user has any of the specified Roles or Permissions, the method will return `true` otherwise it will
return `false`.

### sanitizeInput

The `sanitizeInput` method is employed to cleanse request data before its utilization within the application.

Particularly useful for `PATCH` requests,
where you may want
to submit only the fields
intended for modification to minimize traffic or perform partial updates to the corresponding database resource.
Traditional checks for the presence or absence of specific keys in the request can lead to extensive `if` blocks,
such as:

```php
if ($request->has('data.name')) {
   $data['name'] = $request->input('data.name');
}
```

To circumvent these `if` blocks, you might utilize `array_filter($data)` to remove empty fields from the request.
However, be aware that in PHP, both `false` and an empty string `''` are considered as `empty`.

For streamlining data sanitization when using `application/json` instead of `x-www-form-urlencoded`,
Apiato provides the convenient `sanitizeInput` method.

Consider the following request:

```json
{
  "data": {
    "name": "Demo",
    "description": "Some description",
    "is_private": false,
    "address": "",
    "foo": {
      "number": 1,
      "bar": "bar"
    }
  },
  "meta": "some meta data"
}
```

The `sanitizeInput` method enables you to specify a list of fields,
employing dot notation, to be accessed and extracted from the request.

```php
$data = $request->sanitizeInput([
    'data.description',
    'data.is_private',
    'data.address',
    'data.foo.number',
    'email', // will be ignored
    'meta',
]);
```

The extracted data will appear as follows:

```php
[
  "data" => [
    "description" => "Some description"
    "is_private" => false,
    "address" => null, // empty string is converted to null by Laravel
    "foo" => [
      "number" => 1,
    ]
  ],
  "meta" => "some meta data",
]
```

Note that `email` is excluded from the sanitized array, as it was absent in the request.
Additionally, any other fields not specified are omitted.
In essence, the method filters the request, retaining only the defined values.

You can also assign default values during the data sanitization process:

```php
$sanitizedData = $request->sanitizeInput([
    'name' => 'John', // If name is not provided, the default value will be set
    'product.company.address' => 'Somewhere in the world', // dot notation is supported
    'email',
    'password'
]);
```

### getInputByKey

The `getInputByKey` method retrieves data from the `request` by specifying the field name.
Similar to `$request->input('key.here')`, this method operates on the `decoded` values instead of the original data.

Consider the following request:

```json
{
  "id": "XbPW7awNkzl83LD6"
}
```

While `$request->input('id')` would return `"XbPW7awNkzl83LD6"`,
`$request->getInputByKey('id')` would return the decoded value
(e.g., `4`).

Moreover, you can set a `default` value to be returned if the key is absent or unset, like this:

```php
$request->getInputByKey('data.name', 'Undefined')
```

### mapInput

In certain cases, you might need to remap input from the request to different fields.
While manual field mapping is possible, you can also leverage the `mapInput` method for this purpose.
This helper method allows you to "redefine" keys within the request, making subsequent processing easier.

Consider the following request:

```json
{
  "data": {
    "name": "John Doe"
  }
}
```

However, for processing purposes, you require the `username` field instead of `data.name`.

You can use the helper as follows:

```php
$request->mapInput([
    'data.name' => 'username',
]);
```

The resulting structure would be:

```json
{
  "username": "John Doe"
}
```

And you can access the value as follows:

```php
$request->input('username');
```

### injectData

The `injectData` method allows you to inject data into the request.
This can be particularly helpful during testing
when you wish to provide data directly to the request instead of sending it through the request body.

```php
$request = RegisterUserRequest::injectData($data);
```

### withUrlParameters

The `withUrlParameters` method enables you to inject URL parameters into the request.
This is especially useful when you need to include properties in the request that are not part of the request body
but are required for the request to be processed.
This method is often used in conjunction with the `injectData` method.

```php
$request = RegisterUserRequest::injectData($data)
    ->withUrlParameters(['id' => 123]);
```

## Bypassing Authorization

To grant certain Roles access to all endpoints within the system without the need
to define the role in each Request object,
you can follow this approach.
This is particularly beneficial when you want to provide unrestricted access to users with the `admin` role.
To implement this, define the relevant roles in `app/Ship/Configs/apiato.php` as shown below:

```php
'requests' => [
    'allow-roles-to-access-all-routes' => ['admin'],
],
```

## Force Accept Header

Typically, when making calls to a JSON API, you should include the `accept: application/json` HTTP header.
In Apiato, you have the option to either enforce users to send this header or allow them to skip it.

To enforce the `accept: application/json` header,
navigate to the `app/Ship/Configs/apiato.php` configuration file and set the `force-accept-header` to `true`.

Conversely, if you wish to allow users to skip this header, set `force-accept-header` to `false`.

:::info
Forcing the accept header is disabled by default.
:::


## Etag

The **ETag** or **entity tag** is part of HTTP, the protocol for the World Wide Web.
It is one of several mechanisms that HTTP provides for Web cache validation,
which allows a client to make conditional requests.
This mechanism allows caches to be more efficient and saves bandwidth,
as a Web server does not need to send a full response if the content has not changed.
([Wikipedia](https://en.wikipedia.org/wiki/HTTP_ETag))

Apiato offers support for Etag through the `Apiato\Core\Middlewares\HttpProcessETagHeadersMiddleware` middleware,
which employs the Shallow technique.
This middleware can be particularly valuable in reducing bandwidth usage for clients, especially on mobile devices.

Please note that this feature is **disabled by default**. To enable it, follow these steps:

1. Navigate to the `app/Ship/Configs/apiato.php` configuration file.
2. Inside the configuration file, locate the `use-etag` configuration parameter.
3. Set the `use-etag` parameter to `true`.

Keep in mind that for this feature to function correctly, the client must include the `If-None-Match` HTTP header,
which corresponds to the ETag value, in their request.

