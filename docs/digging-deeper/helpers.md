---
sidebar_position: 1
title: Helpers
tags:
  - framework-feature
  - helpers
---

## Introduction
Apiato includes a variety of global "helper" PHP functions. Many of these functions are used by the framework itself; however, you are free to use them in your own applications if you find them convenient.

## Available Functions

#### `apiato`
This function returns the `Apiato` instance. It is a shortcut for `Apiato::instance()`. You can use it to access the `Apiato` class and its methods. For example:

```php
// Get the app migration paths.
$paths = apiato()->migrations();
```

#### `shared_path`
The `shared_path` function returns the fully qualified path to your application's shared components' directory. You may also use the `shared_path` function to generate a fully qualified path to a file relative to the application directory:

```php
$path = shared_path();

$path = shared_path('Configs/apiato.php');
```

#### `hashids` {#hashids}
The `hashids` function returns the Hash ID instance. You may use it to encode or decode IDs. For example:

```php
$hashid = hashids()->encode(1);

$decoded = hashids()->decode($hashid);
```

