---
title: Documentation
---

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Write PHP **docblock**](#write-php-docblock)
  - [Run Documentation Generator](#run-documentation-generator)
  - [Visit Documentation URL's](#visit-docs-urls)
  - [Shared Response](#shared-response)
- [Change Documentation Routes](#change-documentation-routes)
- [Private Documentation Protection](#private-docs-protection)
- [Documentation Container Customization](#documentation-customization)
  - [Edit Default Generated Values in Templates](#edit-default-generated-values-in-templates)
  - [Change the Documentations URL's](#change-the-documentations-urls)
  - [Edit the Documentation Header](#edit-the-documentation-header)
  - [Localization for Documentation Header](#localization-for-documentation-header)

Every great API needs a great Documentation.

Apiato make writing and generating documentations very easy with the `php artisan apiato:apidoc` command.

## Requirements {#requirements}

- Install [ApiDocJs](http://apidocjs.com/) in the project directory
    - (`npm install apidoc`)

- (Recommended) read the [Routes](../../main-components/routes) page first.

## Installation {#installation}

```shell
composer require apiato/documentation-generator-container
```

:::tip
This container is installed by default with an Apiato fresh installation.
:::

## Usage {#usage}

### Write PHP **docblock** {#write-php-docblock}

Write a PHP **docblock** on top of your endpoint like this:

*For more info about the parameters check out [ApiDocJs](http://apidocjs.com/#install) documentation*

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
 *       ...
 *   }
 *
 * @apiErrorExample  {json}       Error-Response:
 *   {
 *      "message":"401 Credentials Incorrect.",
 *      "status_code":401
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
 *      "status_code":422
 *   }
 */

use App\Containers\AppSection\Authentication\UI\API\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::post('clients/web/login', [Controller::class, 'proxyLoginForWebClient']);
```

:::note
All the Endpoint `DocBlocks` MUST be written inside Routes files, otherwise they won't be loaded.
:::

### Run Documentation Generator {#run-documentation-generator}

Run the documentation generator command from the root directory:

```shell

php artisan apiato:apidoc

```

#### Error: ApiDoc not found !!

If you get an error (`apidoc not found`),

1. Read about [container customization](#documentation-customization)
   
2. Open the container config file `app/Containers/Vendor/Documentation/Configs/vendor-documentation.php`

3. Edit the `executable` path to **`$(npm bin)/apidoc`** or to however you access the `apidoc` tool on your machine.

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

### Visit Documentation URL's {#visit-docs-urls}

Visit documentation URL's as shown in your terminal:

- Public (external) API at [http://apiato.test/docs](http://apiato.test/docs).
- Private (internal) API at [http://apiato.test/docs/private](http://apiato.test/docs/private).

:::note
Every time you change the DocBlock of a Route file you need to run the `apiato:apidoc` command, to regenerate.
:::

### Shared Response {#shared-response}

You can use shared responses to update the documentation faster, with less outdated responses and prevent duplicating the responses between routes.  

Example: `_user.v1.public.php` will contain all responses (single, multiple...) of the User:

```php
/**
 * @apiDefine UserSuccessSingleResponse
 * @apiSuccessExample {json} Success-Response:
HTTP/1.1 200 OK
{
   "data":{
      "object":"User",
      "id":eqwja3vw94kzmxr0,
   },
   "meta":{
      "include":[],
      "custom":[]
   }
}
 */
```

**Usage of the shared User response from any endpoint:**

 ```php
* @apiUse UserSuccessSingleResponse
 ```
## Change Documentation Routes {#change-documentation-routes}

You can change the documentation routes by adding `PUBLIC_DOCS_URL` & `PRIVATE_DOCS_URL` to `.env` file.

For example:
```dotenv
PUBLIC_DOCS_URL=docs/public
PRIVATE_DOCS_URL=docs/private
```
## Private Documentation Protection {#private-docs-protection}
:::note
By default, this feature is **disabled** in local environment and Private docs are not protected.  
You can change this by adding `PROTECT_PRIVATE_DOCS=true` in `.env` file.
:::

Private documentations route is protection with the `auth:web` middleware. 
In order to access it you need to have `admin` role or `access-private-docs` permission.
To modify this behavior you can remove `hasDocAccess` from `check()` in `GetPrivateDocumentationRequest` and add your own role/permissions or update `HasDocAccessTrait`.

Read Documentation Customization [Below](#documentation-container-customization):

## Documentation Container Customization {#documentation-customization}

:::caution Instructions
This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:

1- Copy the container from `Vendor` to `AppSection` (or any of your custom sections) of your project  
2- Fix the namespaces  
3- Remove `apiato/documentation-generator-container` dependency from project root composer.json  
4- Update `section_name` & `html_files` in container configs  
5- Update `apidoc.json` files in `ApiDocJs/private` & `public` folders and fix the `filename`  

```json
{
    "header": {
        "filename": "Containers/NEW_SECTION_NAME/Documentation/UI/WEB/Views/documentation/header.md"
    }
}
```
:::

### Edit Default Generated Values in Templates {#edit-default-generated-values-in-templates}

Apiato by defaults generates 2 API documentations, each one has its own `apidoc.json` file. Both can be modified from the Documentation Containers in `Containers/Vendor/Documentation/ApiDocJs/`

### Change the Documentations URL's {#change-the-documentations-urls}

Edit the config file of the Documentation Container `Containers/Vendor/Documentation/Configs/vendor-documentation.php`

### Edit the Documentation Header {#edit-the-documentation-header}

The header is usually the Overview of your API. It contains Info about authenticating users, making requests, responses, potential errors, rate limiting, pagination, query parameters and anything you want.

All this information is written in `app/Containers/Vendor/Documentation/ApiDocJs/shared/header.template.md` file, and the same file is used as header for both private and public documentations.

To edit the content just open the markdown file in any markdown editor and edit it.

You will notice some variables like `{{rate-limit}}` and `{{token-expires}}`. Those are replaced when running `apiato:apidoc` with real values from your application configuration files.

Feel free to extend them to include more info about your API from the `app/Containers/Vendor/Documentation/Tasks/RenderTemplatesTask.php` class.

### Localization for Documentation Header {#localization-for-documentation-header}

Default, the documentation title is in English `en` localization.

See which locales are supported by going in `app/Containers/Vendor/Documentation/ApiDocJs/shared/`

There will be some `header.template.{locale}.md` files in the folder.

You can change the language by adding `APIDOC_LOCALE=ru` to the `.env` file.

If you didn't find a file with your locale, you can create it. You need to modify its source code and create new file like `header.template.cn.md`
