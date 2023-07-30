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

## Form content types (W3C) {#form-content-types}

By default, Apiato is configured to encode simple text/ASCII data `x-www-form-urlencoded`. However, it does support
other types as well.

### ASCII payload {#ascii-payload}

To tell the web server that you are posting simple text/ASCII payload (`name=John+Doe&age=18`), you need to include
`Content-Type : x-www-form-urlencoded` in the request header.

### JSON payload {#json-payload}

To tell the web server that you are posting JSON-formatted payload (`{name : 'John Doe', age: 18}`), you need to
include `Content-Type = application/json` in the request header.

*(you may wish return Json data in this case as well, you can do so by changing the response serializer from
`DataArraySerializer` to `JsonApiSerializer`, more about that in the [response page](./responses)).*

## HTTP Request Headers {#http-request-headers}

| Header        | Value Sample                        | When to send it                                                              |
|---------------|-------------------------------------|------------------------------------------------------------------------------|
| Accept        | `application/json`                  | MUST be sent with every endpoint.                                            |
| Content-Type  | `application/x-www-form-urlencoded` | MUST be sent when passing Data.                                              |
| Authorization | `Bearer {Access-Token-Here}`        | MUST be sent whenever the endpoint requires (Authenticated User).            |
| If-None-Match | `811b22676b6a4a0489c920073c0df914`  | MAY be sent to indicate a specific **ETag** of an prior Request to this Endpoint. If both ETags match (i.e., are the same) a HTTP 304 (not modified) is returned. |


> #### Heads Up!
>
> Normally you should include the `Accept : application/json` HTTP header when you call a JSON API. However, in Apiato
> you can force your users to send `application/json` by setting `'force-accept-header' => true` in
> `app/Ship/Configs/apiato.php` or allow them to skip it completely by setting the `'force-accept-header' => false`.
> By default this flag is set to false.


### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Requests)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Requests MUST extend the `App\Ship\Parents\Requests\Request` class.
- The parent extension should be aliased as `ParentRequest`.
- A Request MUST have a `rules` method, returning an array and an `authorize` method to check for authorization (can return true when no authorization required).

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {Section}
            - {Container}
                - UI
                    - API
                        - Requests
                            - UpdateUserRequest.php
                            - DeleteUserRequest.php
                            - ...
                    - WEB
                        - Requests
                            - UpdateUserRequest.php
                            - DeleteUserRequest.php
                            - ...
```

### Code Samples {#code-samples}

#### Request

```php
class UpdateUserRequest extends Request
{
    protected array $access = [
        'permission' => '',
        'roles'      => 'admin',
    ];

    protected array $decode = [

    ];

    protected array $urlParameters = [

    ];

    public function rules(): array
    {
        return [
            'email'    => 'email|unique:users,email',
            'password' => 'min:100|max:200',
            'name'     => 'min:300|max:400',
        ];
    }

    public function authorize(): bool
    {
        return $this->check([
            'hasAccess',
        ]);
    }
}
```

*If you are wondering what are those properties doing on the request! keep reading*

#### Controller

```php
public function updateUser(UpdateUserRequest $updateUserRequest)
{
    ...
}
```

By just injecting the request class you already applied the validation and authorization rules.

When you need to pass data to the Action, you should pass the request Object as is to the Action's `run` method parameter.
```php
public function createAdmin(CreateAdminRequest $request)
{
    $admin = app(CreateAdminAction::class)->run($request);
    ...
}
```
You can also retrieve inputs from request like you do in Laravel
```php
public function run(CreateAdminRequest $request)
{
    $data = $updateUserRequest->all();
    $name = $updateUserRequest->name;
    $name = $updateUserRequest->input('name');
    // etc...
}
```
## Request Properties {#request-properties}

Apiato adds some new properties to the Request Class. Each of these properties are very useful for some situations, and let you achieve your goals faster and cleaner. Below we'll see a description for each property:

### **decode** {#decode}

The **$decode** property is used for decoding Hashed ID's from any Request on the fly.

If you have enabled the HashID feature, most probably you are passing or allowing your users to pass Hashed (encoded) ID's into your application.
These IDs need to be Decoded somewhere and Apiato has a property on its Requests Components where you can specify those Hashed ID's in order to decode them before applying the validation rules.

Example:

```php
class AssignUserToRoleRequest extends Request
{
    protected array $decode = [
        'user_id',
        'item_id',
    ];
}
```

**Note:** validations rules that relies on your ID like (`exists:users,id`) will not work unless you decode your ID before passing it to the validation.

### **urlParameters** {#urlparameters}

The **$urlParameters** property is used for applying validation rules on the URL parameters:

Laravel by default does not allow validating the URL parameters (`/stores/999/items`). In order to be able to apply validation rules on URL parameters you can simply define your URL parameters in the `$urlParameters` property. This will also allow you to access those parameters form the Controller in the same way you access the Request data.

Example:

```php
class ConfirmUserEmailRequest extends Request
{
    protected array $urlParameters = [
        'id',
        'code',
    ];

    public function rules(): array
    {
        return [
            'id'   => 'required|integer', // url parameter
            'code' => 'required|min:35|max:45', // url parameter
        ];
    }
}
```

### **access** {#access}

The **$access** property allows the user to define a set of Roles and Permissions that can access this endpoint.

The `$access` property is used by the `hasAccess` method defined below in the `authorize` method, to check if the user has the necessary Roles & Permissions to call this endpoint (basically access the controller function where this request object is injected).

Example:

```php
class DeleteUserRequest extends Request
{
    protected array $access = [
        'permission' => 'delete-users|another-permissions',
        'roles' => 'manager'
    ];

    public function authorize(): bool
    {
        return $this->check([
            'hasAccess|isOwner',
            'isKing',
        ]);
    }
}
```

If you do not like the `laravelish` style with `|` in order to separate the different `roles` or `permissions` (e.g., see the example above),
you can also use the `array notation`. The example from above would look like this (only part that changes):

```php
    protected $access = [
            'permission' => ['delete-users', 'another-permissions'],
            'roles' => ['manager'],
    ];
```

## How the authorize method work {#how-the-authorize-method-work}

The `authorize` method is calling a `check` method which accepts an array of method names. Each of those methods returns boolean.

In the example above we are calling three methods `hasAccess`, `isOwner` and `isKing`.

The separator `|` between the functions indicates an `OR` operation, so if any of the calls to `hasAccess` or `isOwner` returns true the user will gain access and only when both return false the user will be prevented from accessing this endpoint.

On the other side if `isKing` *(a custom function could be written by you anywhere)* returned false no matter what all other functions returns, the user will be prevented from accessing this endpoint, because the default operation between all functions in the array is `AND`.

Checkout the [hasAccess](https://apiato.readme.io/docs/requests#section-hasaccess) below.

### Add Custom Authorize Functions {#custom-authorize-functions}

The best way to add a custom authorize function is through a Trait, which can be added to your `Request` classes. In the example below we create a Trait named `IsAuthorPermissionTrait` with a single method called `isAuthor`.

The `isAuthor` method, in turn, calls a Task to verify that the current user is an author (e.g., if the user has the proper `Role` assigned).

```php
trait IsAuthorPermissionTrait
{
    public function isAuthor()
    {
        // The task needs to be implemented properly!
        return app(CheckIfUserHasProperRoleTask::class)->run($this->user(), ['author']);
    }
}
```

Now, add the newly created Trait to the Request to use the `isAuthor` function in the authorization check.
```php
class FindUserByIdRequest extends Request
{
    use IsAuthorPermissionTrait;

    // ...

    public function authorize(): bool
    {
        return $this->check([
            'isAuthor',
        ]);
    }
}
```

Now, the Request uses the newly created `isAuthor` method to check the proper access rights.

## Allow a Role to access every endpoint {#allow-a-role-to-access-every-endpoint}

You can allow some Roles to access every endpoint in the system without having to define that role in each Request object.

This is useful when you want to let users with `Admin` role access everything.

To do this, define those roles in `app/Ship/Configs/apiato.php` as follows:

```php
'requests' => [
    'allow-roles-to-access-all-routes' => ['admin',],
],
```

This will append the `admin` role to all roles access in every request object. Example: this `'roles' => 'manager'` becomes `'roles' => 'manager|admin'` (if the user is manager or admin "has any of the roles", will be allowed to access the endpoint).

## Request Helper Methods {#request-helper-methods}

### **hasAccess** {#hasaccess}

`hasAccess` method, decides if user has Access or not based on the `$access` property.

- If the user has any roles or permissions he will be given access.

- If you need more or less roles/permissions just add `|` between each permission.

- If you do not need to set a roles/permissions just set `'permission' => ''` or  `'permission' => null`.

### **getInputByKey** {#getinputbykey}

Get the data from within the `$request` by entering the name of the field. This method behaves like `$request->input('key.here')`,
however, it works on the **decoded** values instead of the original data.

Consider the following Request data in case you are passing `application/json` data instead of `x-www-form-urlencoded`:
```json
{
  "data" : {
    "name"  : "foo",
    "description" : "bar"
  },
  "id" : "a2423nadabada0"
}
```

Calling `$request->input('id')` would return `"a2423nadabada0"`, however `$request->getInputByKey('id')` would return the
decoded value (e.g., `4`).

Furthermore, one can define a `default` value to be returned, if the key is not present (or not set), like so:
`$request->getInputByKey('data.name', 'Undefined')`

### **sanitizeInput** {#sanitizeinput}

Especially for `PATCH` requests, if you like to submit only the fields, to be changed to the API in order to:

a) minimize the traffic  
b) partially update the respective resource

Checking for the presence (or absence) of specific keys in the request typically results in huge `if` blocks, like so:

```php
if($request->has('data.name')) {
   $data['name'] = $request->input('data.name'); // or use getInputByKey()
}

if($request->has('data.description')) {
   $data['description'] = $request->input('data.description'); // or use getInputByKey()
}
```

So to avoid those `if` blocks, you might use `array_filter($data)` in order to remove `empty` fields from the request.

However, in PHP `false` and `''` _(empty string)_ are also considered `empty` (which is not what you want clearly).

You can read more about this problem [here](https://github.com/apiato/apiato/issues/186).

In order to simplify sanitizing `Request Data` when using `application/json` instead of `x-www-form-urlencoded`,
apiato offers a convenient `sanitizeInput(array $fields)` method.

Consider the following Request data:

```json
{
	"data" : {
		"is_private" : false,
		"description" : "this is a rather long description text",
		"a" : null,
		"b" : 3453,
		"foo" : {
			"a" : "a",
			"b" : "b",
			"c" : 1234
		},
		"bar" : [
		    "a", "b", "c"
		]
	}
}
```

This method lets you specify a list of `$fields` to be accessed and extracted from the `$request`. This is done using the
DOT notation. Finally, call the `sanitizeInput` method on the `$request`:

```php
$fields = [
    'data.name',
    'data.description',
    'data.is_private',
    'data.blabla',
    'data.foo.c'
];
$data = $request->sanitizeInput($fields);
```

The extracted `$data` looks like this:

```php
[
  "data" => [
    "is_private" => false
    "description" => "this is a rather long description text"
    "foo" => [
      "c" => 1234
    ]
  ]
]
```

Note that `data.blabla` is not within the `$data` array, as it was not present within the `$request`. Furthermore, all
other fields from the `$request` are omitted as they are not specified. So basically, the method creates some kind of
`filter` on the `$request`, only passing the defined values. Furthermore, the DOT Notation allows you to easily specify
the fields to would like to pass through. This makes partially updating a resource quite easy!

You can also set default values while sanitizing data from the request
```php
$sanitizedData = $request->sanitizeInput([
    'name' => 'John', // if name is not provided then default value will be set
    'product.company.address' => 'Somewhere in the world', // dot notation is also supported
    'email',
    'password'
]);
```

### **mapInput** {#mapinput}

Sometimes you might want to map input from the request to other fields in order to automatically pass it to a `Action`
or `Task`. Of course, you can manually map those fields, but you can also rely on the `mapInput` method.

This helper, in turn, allows to "redefine" keys in the request for subsequent processing. Consider the following
example request:

```json
{
	"data" : {
		"name" : "John Doe"
	}
}
```

Your Task to process this data, however, requests the field `data.name` as `data.username`. You can call the helper
like this:
```php
$request->mapInput([
    'data.name' => 'data.username',
]);
```

The resulting structure would look like this:
```json
{
	"data" : {
		"username" : "John Doe"
	}
}
```

## Storing Data on the Request {#storing-data-on-the-request}

During the Request life-cycle you may want to store some data on the request object and pass it to other SubActions (or Tasks).

To store some data on the request use:

```php
$request->keep(['someKey' => $someValue]);
```

To retrieve the data back at any time during the request life-cycle use:

```php
$someValue = $request->retrieve('someKey');
```

## Unit Testing for Actions (Request) {#unit-testing-for-actions-request}

Since we're passing Request objects to Actions. When writing unit tests we need to create fake Request just to pass it to the Action with some fake data.

```php
// creating
$request = RegisterUserRequest::injectData($data);
```
Example One:

```php
$data = [
    'email'    => 'john@doe.test',
    'name'     => 'John Doe',
    'password' => 'so-secret',
];

// create request object with some data
$request = RegisterUserRequest::injectData($data);

// create instance of the Action
$action = app(RegisterUserAction::class)->run($request);

// do any kind of assertions..
$this->assertInstanceOf(User::class, $user);
```

Example Two (With Authenticated User):

```php
$data = [
   'store_id'  => $this->encode($store->id),
   'items'     => $orderItems,
   'recipient' => $receipient,
];

$user = User::factory()->create();

$request = MakeOrderRequest::injectData($data, $user);

$order = app(MakeOrderAction::class)->run($request);
```
