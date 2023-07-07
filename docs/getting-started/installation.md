---
title: Installation
---

* [Apiato Installation](#App)
	* [Project Creation](#Project-Creation)
	* [Database](#Database)
	* [OAuth Setup](#OAuth-Setup)
	* [Documentation](#Documentation)
	* [Testing](#Testing)
* [Development Environment](#Development-Environment)
* [Let's Play](#Play)


## Apiato Application Installation {#App}

### Project Creation {#Project-Creation}

If you already have `php` and `composer` installed on your computer ([read requirements](../)) you may create a new Apiato project using the command below:

```shell
composer create-project apiato/apiato my-api
```

### Database {#Database}

Migrate and seed the Database:

```shell
php artisan migrate --seed
```

### OAuth Setup {#OAuth-Setup}

1) Create encryption keys to generate secure access tokens and create "personal access" and "password grant" clients
which will be used to generate access tokens:

```shell
php artisan passport:install
```

### Documentation {#Documentation}

Install [ApiDocJs](http://apidocjs.com/) using NPM or your favorite dependency manager:

```shell
npm install
```

Then

```shell
php artisan apiato:apidoc
```

:::tip
Visit [API Docs Generator](../additional-features/documentation.md) for more details.
:::

### Testing {#Testing}

Open `phpunit.xml` and make sure the environments are correct for your domain then run the tests.

```shell
php vendor/bin/phpunit
```

## Development Environment Setup {#Development-Environment}

You can run **Apiato** in any environment that you can run Laravel.

:::tip
Visit [Laravel Installation](https://laravel.com/docs/installation) for more details.
:::

## Let's Play {#Play}

Now let's see it in action

Open your web browser and visit:

- http://apiato.test You should see an HTML page, with `Apiato` in the middle.
- http://api.apiato.test You should see a response like this:
```json
["Welcome to Apiato"]
```

Open your HTTP client and call:

- http://api.apiato.test/ You should see a JSON response with message: `"Welcome to apiato."`,
- http://api.apiato.test/v1 You should see a JSON response with message: `"Welcome to apiato (API V1)."`,
