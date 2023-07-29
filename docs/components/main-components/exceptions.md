---
sidebar_position: 9
title: Exceptions
tags:
  - component
  - main-component
  - exception
---

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Exceptions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- All Exceptions MUST extend `App\Ship\Parents\Exceptions\Exception`.
- The parent extension should be aliased as `ParentException`.
- Shared (general) Exceptions between all Containers MUST be placed in the `app/Ship/Exceptions` directory.
- Every Exception MUST have two properties `code` and `message`.

### Folder Structure {#folder-structure}

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Exceptions
│               ├── SpecificException.php
│               ├── AnotherSpecificException.php
│               └── ...
└── Ship
    └── Exceptions
        ├── GeneralException.php
        ├── AnotherGeneralException.php
        └── ...
```

### Code Samples {#code-samples}

You can override those values while throwing the error.

```php
use App\Ship\Parents\Exceptions\Exception as ParentException;

class DemoException extends ParentException
{
    protected $code = Response::HTTP_CONFLICT;
    protected $message = 'This is a demo exception.';
}
```

### Helpers Methods {#helpers-methods}

[withErrors](#witherrors)  
[debug](#debug)

#### withErrors

```php
// Example 1
throw (new AccountFailedException())->withErrors(['email' => 'The email has already been taken.']);
// Example 2
throw (new AccountFailedException())->withErrors(['email' => ['The email has already been taken.', 'Another message']]);
```

You can also use translation strings.
Translation strings are automatically translated if the translations are found.
To handle localization, you can use the [Localization Container](../../pacakges/localization.md).

```php
// Example 1
throw (new AccountFailedException())->withErrors(['email' => 'appSection@user::exceptions.email-taken']);
// Example 2
throw (new AccountFailedException())->withErrors(['email' => 'appSection@user::exceptions.email-taken', 'Another not translated message']);
```

Response:
```json
{
  "message": "The exception error message.",
  "errors": {
    "email": [
      "The email has already been taken.",
      "Another not translated message"
    ]
  }
}
```
#### debug

The `debug` method is used for logging error messages during debugging and development.
The `debug` method accepts `string` or `\Exception` instance

```php
throw (new AccountFailedException())->debug($e);
```
