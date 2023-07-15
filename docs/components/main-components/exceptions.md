---
title: Exceptions
---

* [Definition & Principles](#definition-principles)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Exceptions)**](https://github.com/Mahmoudz/Porto#Exceptions).

### Rules {#rules}

- All Exceptions MUST extend `App\Ship\Parents\Exceptions\Exception`.
- Shared (general) Exceptions between all Containers SHOULD be created in the **Exceptions Ship** folder (`app/Ship/Exceptions/*`).
- Every Exception SHOULD have two properties `code` and `message`. You can override those values while throwing the error.

### Folder Structure {#folder-structure}

```
 - App
    - Containers
        - {section-name}
            - {container-name}
                - Exceptions
                    - AccountFailedException.php
                    - ...

    - Ship
        - Exceptions
            - CreateResourceFailedException.php
            - NotFoundException.php
            - ...
```

### Code Samples {#code-samples}

#### Demo Exception

```php
class DemoException extends Exception
{
    public $code = Response::HTTP_CONFLICT;
    public $message = 'This is a demo exception.';
}
```

#### Usage from anywhere

```php
throw new AccountFailedException();
```
#### Usage with errors

```php
throw (new AccountFailedException())->withErrors(['email' => 'Email already in use']);
throw (new AccountFailedException())->withErrors(['email' => ['Email already in use', 'Another message']]);
```

#### Usage with errors and localization
For localization, you can use the [Localization Container](../../pacakges/localization.md)
```php
// translation strings are automatically translated if the translations are found.
throw (new AccountFailedException())->withErrors(['email' => 'appSection@user::exceptions.email-taken']);
```
Response:
```json
{
  "message": "The exception error message.",
  "errors": {
    "email": [
      "The email has already been taken."
    ]
  }
}
```
#### Usage with Log for Debugging

```php
throw (new AccountFailedException())->debug($e); // debug() accepts string or \Exception instance
```

#### Usage and overriding the default

```php
throw new AccountFailedException('I am the message to be displayed to the user');
```
