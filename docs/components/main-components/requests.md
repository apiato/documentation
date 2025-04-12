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

To generate new requests, you may use the `apiato:make:request` interactive command:

```
php artisan apiato:make:request
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

Apiato introduces new properties to the Request Class that enhance its functionality.

## Hash ID Decoding
When you enable the [Hash ID](../../security/hash-id.md) feature, your application can receive Hashed IDs from users.
These Hashed IDs need to be decoded before they can be used.

The `$decode` property is used to handle the decoding of Hashed IDs from the incoming Request.
It is an array that contains the names of the fields in the Request that should be decoded.
When the Request is processed, Apiato will automatically decode these fields for you.

```php
class DemoRequest extends ParentRequest
{
    protected array $decode = [
        'author_id',
        'ids.*',
        'authors.*.id',
    ];
}

// Example usage
// In all cases, the author_id fields will be automatically decoded
$request->input('author_id');
$request->all('author_id');
$request->author_id

// Nested fields are also supported
$request->input('ids');
$request->input('authors.*.id')
```

You can also decode route parameters.
But the decoded values will not be available via `input` or `all`.
Instead, you can access them using the `route` method.

```php
// endpoint
/users/{id}

// request
class DemoRequest extends ParentRequest
{
    protected array $decode = [
        'id',
    ];
}

// usage
$request->route('id');
```

## Sanitizing Input

The `sanitize` method is employed to cleanse request data before its utilization within the application.

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
Apiato provides the convenient `sanitize` method.

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

The `sanitize` method enables you to specify a list of fields,
employing dot notation, to be accessed and extracted from the request.

```php
$data = $request->sanitize([
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
$sanitizedData = $request->sanitize([
    'name' => 'John', // If name is not provided, the default value will be set
    'product.company.address' => 'Somewhere in the world', // dot notation is supported
    'email',
    'password'
]);
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

