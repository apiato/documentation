---
sidebar_position: 7
title: Hash ID
---

Hashing your internal ID's is a very helpful feature for many security reasons,
such as preventing your internal ID's from being exposed to the public, your competitors, and hackers.

## Enabling Hash ID {#enabling-hash-id}

Set the `HASH_ID=true` in the `.env` file.

:::note
BCMath PHP Extension is required to use this feature.
:::

:::tip
Make sure to always use the `getHashedKey()` on any model,
whenever you need to return an ID (mainly from [transformers](../the-basics/transformers))
weather you are using Hash ID or not.
If this feature is disabled (`HASH_ID=false`) the `getHashedKey()` will return the normal ID.

```php

'id' => $user->getHashedKey(),

```
:::

## Usage {#usage}

There are 3 ways to pass an ID to your system via the API:

In URL:
  
```php
www.apiato.test/items/abcdef
```

As query string:
    
```php
www.apiato.test/items?id=abcdef
```

Or as HTTP request body:
    
```json
{
    "id": "abcdef"
}
```
Now you need to tell your API to [decode the ID](../the-basics/requests#request-properties) for you.
This is done by setting the `$decode` and `$urlParameters` properties on your Request class.
After setting those properties,
the ID will be automatically decoded for you to apply validation rules on it or/and use it from your controller.
> `$request->id` will return the decoded ID.

:::info
Read more about [Requests](../the-basics/requests) to understand how to use them.
:::

## Configuration {#configuration}

Hash ID configuration is done in the `app/Ship/Configs/hashids.php` config file.
You can set the `HASH_ID_KEY` in the `.env` file to any random string.
Apiato defaults to the `APP_KEY` should this not be set.

:::danger
The `HASH_ID_KEY` acts as the salt during hashing of the ID. This should never be changed in production
as it renders all previously generated IDs impossible to decode.
:::

## Testing {#testing}

In your Functional tests, you must hash the ID's before making the calls,
because if you tell your Request class to decode an ID for you, it will throw an exception when the ID is not encoded.

```php
// endpoint: /users/{user_id}/roles

$user = UserFactory::new()->create();
// HTTP request body
$data = [
    'roles_ids' => [
        $roleA->getHashedKey(),
        $roleB->getHashedKey(),
    ],
];

// URL ID's
$this->injectId($user->id, skipEncoding: false, replace: '{user_id}')->makeCall($data);
// or
$this->injectId($user->getHashedKey(), skipEncoding: true, replace: '{user_id}')->makeCall($data);
```

:::tip
`injectId()` is a [test helper function](../testing/tests-helpers)
that will replace the `{user_id}` in the endpoint with the given ID.
:::
