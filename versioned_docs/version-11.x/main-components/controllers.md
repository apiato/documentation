---
title: Controllers
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)
- [Controller response builder helper functions](#controller-response-builder-helper-functions)
  - [Some of the functions](#some-of-the-functions)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Controllers)**](https://github.com/Mahmoudz/Porto#Controllers).

### Rules {#rules}

- All API Controller MUST extend from `App\Ship\Parents\Controllers\ApiController`.
- All Web Controller MUST extend from `App\Ship\Parents\Controllers\WebController`.
- Controllers should only call the the `run` method of Actions.
- Controllers should pass the Request object to the Action instead of passing data from the request.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {section-name}
            - {container-name}
                - UI
                    - API
                        - Controllers
                            - Controller.php
                    - WEB
                        - Controllers
                            - Controller.php
```

### Code Sample {#code-sample}

#### Web Controller

```php
class Controller extends WebController
{
    public function sayWelcome()
    {
        return view('welcome');
    }
}
```

#### API Controller

```php
class Controller extends ApiController
{
    public function registerUser(RegisterUserRequest $request)
    {
        $user = app(RegisterUserAction::class)->run($request);
        return $this->transform($user, UserTransformer::class);
    }
}
```

:::tip
In case you want to handle the same Action differently based on the UI type (e.g. API, Web, CLI) you can set the
UI on Action with `setUI()` method.

```php
    app(WebLogoutAction::class)->setUI('Web')->run();
```

and get the UI in your Action with `getUI()` method.

```php
    $this->getUI();
```
:::

#### Usage from Routes Endpoint

```php
Route::post('login', [Controller::class, 'loginUser']);
```

### Controller response builder helper functions {#controller-response-builder-helper-functions}

Many helper function are there to help you build your response faster, those helpers exist in
the `vendor/apiato/core/Traits/ResponseTrait.php`.

#### Some functions {#some-of-the-functions}

**transform**
This is the most useful function which you will be using in most cases.

- First required parameter accepts data as object or Collection of objects.
- Second required parameter is the transformer object
- Third optional parameter take the includes that should be returned by the response, _($availableIncludes and
  $defaultIncludes in the transformer class)_.
- Fourth optional parameter accepts metadata to be injected in the response.

```php
// $user is a User Object
return $this->transform($user, UserTransformer::class);

// $orders is a Collection of Order Objects
return $this->transform($orders, OrderTransformer::class, ['products', 'recipients', 'store', 'invoice']);
```

**withMeta**
This function allows including metadata in the response.

```php
$metaData = ['total_credits', 10000];

return $this->withMeta($metaData)->transform($receipt, ReceiptTransformer::class);
```

**json**
This function allows passing array data to be represented as json.

```php
return $this->json([
    'foo': 'bar'
])
```

**Other functions**

- accepted
- deleted
- noContent
- // Some functions might not be documented, so refer to the `vendor/apiato/core/Traits/ResponseTrait.php` and see the
  public functions.
