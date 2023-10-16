---
sidebar_position: 7
title: Hash ID
---

Hashing your internal ID's is a very helpful feature for many security reasons,
such as preventing your internal ID's from being exposed to the public, your competitors, and hackers.

## Enabling Hash ID

Set the `HASH_ID=true` in the `.env` file.

:::note
BCMath PHP Extension is required to use this feature.
:::

Make sure to always use the `getHashedKey` method on any model,
whenever you need to return an ID (mainly from [transformers](../components/main-components/transformers))
weather you are using Hash ID or not.
If Hash ID feature is disabled, the `getHashedKey` method will return the normal ID.

```php
'id' => $user->getHashedKey(),
```

## Usage

There are three ways to pass an ID to your system via the API:

In URL:
  
```php
/items/XbPW7awNkzl83LD6
```

As query string:
    
```php
/items?id=XbPW7awNkzl83LD6
```

Or as HTTP request body:
    
```json
{
    "id": "XbPW7awNkzl83LD6"
}
```
Now you need to tell your API to [decode the ID](../components/main-components/requests#request-properties) for you.
This is done by setting the `decode` and `urlParameters` properties on your Request class.
After setting those properties,
the ID will be automatically decoded for you to apply validation rules on it or/and use it from your controller.
> `$request->id` will return the decoded ID.

## Configuration

Hash ID configuration is done in the `app/Ship/Configs/hashids.php` config file.
You can set the `HASH_ID_KEY` in the `.env` file to any random string.
Apiato defaults to the `APP_KEY` should this not be set.

:::danger
The `HASH_ID_KEY` acts as the salt during hashing of the ID. This should never be changed in production
as it renders all previously generated IDs impossible to decode.
:::


## Route Model Binding

Laravel [Route Model Binding](https://laravel.com/docs/routing#route-model-binding) feature is supported out of the box and Apiato will automatically decode the ID for you.
