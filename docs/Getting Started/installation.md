---
sidebar_position: 1
title: Installation
---

* [Your First Apiato Project](#your-first-apiato-project)
* [Documentation](#Documentation)
* [Testing](#Testing)
* [Development Environment](#Development-Environment)
* [Let's Play](#Play)

## Your First Apiato Project {#your-first-apiato-project}

Before creating your first Apiato project, you should ensure that your local machine has PHP and [Composer](https://getcomposer.org/) installed.
If you are developing on macOS, PHP and Composer can be installed via [Homebrew](https://brew.sh/).
   
After you have installed PHP and Composer, you may create a new Apiato project via the Composer create-project command:
```shell
composer create-project apiato/apiato example-app
```

If you have your environment ready, continue with the following steps,
else [set up your environment](#Development-Environment) first and then continue.

Migrate and seed the Database:
```shell
php artisan migrate --seed
```

And create encryption keys:
```shell
php artisan passport:install
```

## Documentation {#Documentation}

Install [ApiDocJs](http://apidocjs.com/) using NPM or your favorite dependency manager:
```shell
npm install
```

Then generate the API documentation:
```shell
php artisan apiato:apidoc
```

:::tip
Visit [API Docs Generator](../Pacakges/documentation.md) for more details.
:::

## Testing {#Testing}

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

http://apiato.test You should see an HTML page, with `Apiato` in the middle.  
http://api.apiato.test You should see a response like this:
```json
["Welcome to Apiato"]
```

Open your HTTP client and call:

http://api.apiato.test/ You should see a JSON response with message: `"Welcome to apiato."`  
http://api.apiato.test/v1 You should see a JSON response with message: `"Welcome to apiato (API V1)."`
