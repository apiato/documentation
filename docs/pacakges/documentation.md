---
sidebar_position: 1
title: Documentation
tags:
  - package
---

:::info
This package is installed by default with an Apiato fresh installation.
:::

The Documentation Generator Container is a package that generates API documentation for your API Endpoints.
It uses [ApiDocJs](https://apidocjs.com/) to generate the documentation.

It is recommended
to read about the `Public` and `Private` [routes](../components/main-components/routes.mdx#public--private-routes)
before using this package.

## Requirements

This package depends on [ApiDocJs](https://apidocjs.com/).
Make sure to install it in the project directory by running:

```shell
npm install apidoc
```

## Installation

```shell
composer require apiato/documentation-generator-container
```

## Publishing Configs
```shell
php artisan vendor:publish
```  
Config file will be placed at `app/Ship/Configs/vendor-documentation.php`

## Usage

### Write the DocBlocks

Write the `DocBlocks` for your API Endpoints in your Route files.

:::info
For more info about the parameters check out [ApiDocJs](https://apidocjs.com/#install) documentation.
:::

```php
/**
 * @apiGroup           Authentication
 * @apiName            UserLogin
 * @api                {post} /clients/web/login User Login
 * @apiDescription     Description Here....
 * @apiVersion         1.0.0
 * @apiPermission      none
 *
 * @apiHeader          Accept application/json
 *
 * @apiParam           {String}     email
 * @apiParam           {String}     password
 *
 * @apiSuccessExample  {json}       Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "data": {
 *       "id": "XbPW7awNkzl83LD6",
 *       "name": "Super Admin",
 *       "email": "admin@admin.com"
 *   }
 *
 * @apiErrorExample  {json}       Error-Response:
 *   {
 *      "message":"401 Credentials Incorrect.",
 *   }
 *
 * @apiErrorExample  {json}       Error-Response:
 *   {
 *      "message":"Invalid Input.",
 *      "errors":{
 *         "email":[
 *            "The email field is required."
 *         ]
 *      },
 *   }
 */

use App\Containers\AppSection\Authentication\UI\API\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::post('clients/web/login', Controller::class);
```

:::note  
All the Endpoint `DocBlocks` MUST be written inside Routes files, otherwise they won't be loaded.  
:::

### Generate the Documentation

You can generate the API documentation by running the following command:

```shell
php artisan apiato:apidoc
```

:::info Error: ApiDoc not found
If you get the `apidoc not found` error,
you need to update the `executable` path in the `vendor-documentation.php` config file.

1. [Publish the configs](#publishing-configs)
2. Edit the `executable` path to **`$(npm bin)/apidoc`** or to however you access the `apidoc` tool on your machine.

```php    
/*
|--------------------------------------------------------------------------
| Executable
|--------------------------------------------------------------------------
|
| Specify how you run or access the `apidoc` tool on your machine.
|
*/

'executable' => 'node_modules/.bin/apidoc',
// 'executable' => 'apidoc',
```
:::

### Visit Documentation URL's

Visit the documentation URLs as shown in your terminal:

- Public (external) API at [http://apiato.test/docs](http://apiato.test/docs).
- Private (internal) API at [http://apiato.test/docs/private](http://apiato.test/docs/private).

:::tip
Don't forget to regenerate the documentation after making changes to the `DocBlocks`.
:::

## Private Documentation Protection
By default, this feature is **disabled** in local environment and **enabled** in production.  
To change this behavior, [Publish the configs](#publishing-configs) and change `protect-private-docs`.

Private documentations route is protected with the `auth:web` middleware.
You can grant users access to the protected docs by updating `access-private-docs-roles` and
`access-private-docs-permission` values in documentation config.
By default, users need `access-private-docs` permission to access private docs.

## Documentation Header Localization

The documentation header is in English `en` by default.
To see the documentation header in another language, you can change the locale in the `.env` file.

```shell
APIDOC_LOCALE=ru
```

To see the list of supported locales, check the `app/Containers/Vendor/Documentation/ApiDocJs/shared` folder.
If you want to add a new language, you can create a new file in the `shared` folder and submit a PR.
