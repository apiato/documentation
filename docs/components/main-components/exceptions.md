---
sidebar_position: 9
title: Exceptions
tags:
  - component
  - main-component
  - exception
---

Exceptions are used to handle errors and exceptions in the application.

To generate new exceptions using Apiato code generator, you may use the `apiato:generate:exception` interactive command.

```
php artisan apiato:generate:exception
```

## Definition & Principles

Read [**Porto SAP Documentation (#Exceptions)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All container-specific Exceptions MUST be placed in the `app/Containers/{Section}/{Container}/Exceptions` directory.
- All general Exceptions MUST be placed in the `app/Ship/Exceptions` directory.
- All Exceptions MUST extend the `App\Ship\Parents\Exceptions\Exception` class.
  - The parent extension SHOULD be aliased as `ParentException`.
- Every Exception MUST have at least two properties: `code` and `message`.

## Folder Structure

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

## Code Example

You can override those values while throwing the error.

```php
use App\Ship\Parents\Exceptions\Exception as ParentException;

class DemoException extends ParentException
{
    protected $code = Response::HTTP_CONFLICT;
    protected $message = 'This is a demo exception.';
}
```

## Helpers Methods

### withErrors

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
### debug

The `debug` method is used for logging error messages during debugging and development.
The `debug` method accepts `string` or `\Exception` instance

```php
throw (new AccountFailedException())->debug($e);
```
