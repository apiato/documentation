---
title: "Hash ID"
category: "Features"
order: 14
---

- [Enable Hash ID](#enable-hash-id)
- [Usage](#usage)
- [Configuration](#configuration)
- [Testing](#testing)
    - [for Parameter ID's](#for-parameter-ids)
    - [for URL ID's](#for-url-ids)
- [Availability](#availability)

<br>
<br>
Hashing your internal ID's, is very helpful feature for security reasons (to prevent some hack attacks) and business reasons (to hide the real total records from your competitors).

<a name="enable-hash-id"></a>

## Enable Hash ID

Set the `HASH_ID=true` in the `.env` file.

Also with the feature make sure to always use the `getHashedKey()` on any model, whenever you need to return an ID (mainly from transformers) weather hashed ID or not.

Example:

```php

'id' => $user->getHashedKey(),

```

Note: if the feature is set to false `HASH_ID=false` the `getHashedKey()` will return the normal ID.

<a name="usage"></a>

## Usage

There are 2 ways an ID's can be passed to your system via the API:

In URL example: `www.apiato.dev/items/abcdef`.

In parameters example: [GET] or [POST] `www.apiato.dev/items?id=abcdef`.

in both cases you will need to inform your API about what's coming form the Request class.

Checkout the [Requests]({{ site.baseurl }}{% link _docs/components/requests.md %}) page. After setting the `$decode` and `$urlParameters` properties on your Request class, the ID will be automatically decoded for you, to apply validation rules on it or/and use it from your controller (`$request->id` will return the decoded ID).

<a name="configuration"></a>

## Configuration

You can change the default length and characters used in the ID from the config file `app/Ship/Configs/hashids.php`or in the `.env` file by editing the `HASH_ID_LENGTH` value.

### From Apiato Version 7.4.*
You can set the `HASH_ID_KEY` in the `.env` file to any random string. You can generate this from any of the online random string generators, or run `head /dev/urandom | tr -dc 'A-Za-z0-9!"#$%&'\''()*+,-./:;<=>?@[\]^_{|}~' | head -c 32  ; echo` on the linux commandline. Apiato defaults to the `APP_KEY` should this not be set.

The `HASH_ID_KEY` acts as the salt during hashing of the ID. This should never be changed in production as it renders all previously generated IDs quite difficult to decode and recover.   

<a name="testing"></a>

## Testing

In your tests you must hash the ID's before making the calls, because if you tell your Request class to decode an ID for you, it will throw an exception when the ID is not encoded.

<a name="for-parameter-ids"></a>

### for Parameter ID's

Always use `getHashedKey()` on your models when you want to get the ID

Example:

```php
$data = [
    'roles_ids' => [
        $role1->getHashedKey(),
        $role2->getHashedKey(),
    ],
    'user_id'   => $randomUser->getHashedKey(),
];
$response = $this->makeCall($data);
```

*Or you can do this manually `Hashids::encode($id);`. *

### for URL ID's

You can use this helper function `injectId($id, $skipEncoding = false, $replace = '{id}')`.

Example:

```php
$response = $this->injectId($admin->id)->makeCall();
```

More details on the [Tests Helpers]({{ site.baseurl }}{% link _docs/miscellaneous/tests-helpers.md %}) page.

## Availability

You can use the `Apiato\Core\Traits\HashIdTrait` to any model or class, in order to have the `encode` and `decode` functions.

By default you have access to these functions `$this->encode($id)` and  `$this->decode($id)` from all your Tests class and Controllers.
