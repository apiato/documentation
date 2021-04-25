---
title: Frequently Asked Questions
---

* [Do I have to use the Porto Architecture to benefit from Apiato](#do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato)
* [How to use my custom domain?](#how-to-use-my-custom-domain)
* [Where to put my frontend code?](#where-to-put-my-frontend-code)
* [Where do I register Service Providers and Aliases?](#where-do-i-register-service-providers-and-aliases)
* [How to change API URL?](#how-to-change-the-default-api-url)
* [Where do I define my Composer dependencies?](#where-do-i-define-my-composer-dependencies)
* [How to enable Query Caching?](#how-to-enable-query-caching)
* [Can I give my Actions REST names?](#can-i-give-my-actions-rest-names)
* [How are Service Providers auto-loaded?](#how-are-service-providers-auto-loaded)
* [Why is the Laravel 5.5 Auto-Discovery feature not working?](#why-is-the-laravel-55-auto-discovery-feature-not-working)
* [How to create third-party Containers?](#how-to-create-third-party-containers)
* [What is the default Username for authentication?](#what-is-the-default-username-for-authentication)
* [I have a question and I can't find answer!!](#other-questions)

### Do I have to use the Porto Architecture to benefit from Apiato!? {#do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato}

NO. You can still use the standard MVC (Controllers are still there) or any other architecture you prefer and you can
call the Apiato provided `Actions` and `Tasks` from your Controllers or Services or whichever classes you prefer. You
have the freedom to structure your own project anyway you like, and still use all the feature that Apiato provide.

### How to use my custom domain? {#how-to-use-my-custom-domain}

Change the default URL from `apiato.test` to `awesome.com`

1) Edit your hosts file `sudo vi ect/hosts`, and map your domain `awesome.com` to the IP address of your Virtual Host
(Localhost, Docker IP, Vagrant IP, ...)

2) Edit the `.env` file and replace `apiato.test` with `awesome.com` in `APP_URL`, and `API_URL` *(note the API domain
should be api.)*

3) Edit the `phpunit.xml` file and change `API_BASE_URL` from `apiato.test` to `awesome.com`

### Where to put my frontend code? {#where-to-put-my-frontend-code}

It's recommended that the front-end Apps code live outside apiato completely. Example in `clients/web/` directory,
separated from the Server code (apiato Code).

The front-end App should be able to run as a stand-alone App, and it can consume the Server API or other Testing API's.

You can configure NGINX to serve the Front-end and the Back-end each on a different domain or on subdomains *(Example
`app.com` for the front-end App and `api.app.com` for the API)*.

**Example project structure:**

```bash
- MyProject
  - Server
    - Api   // < apiato Code
  - Clients
    - Web
      - Main App   // < Web App code (HTML, CSS, JS, ...)
    - Mobile
      - Android   // < Android App code
      - iOS   // < iPhone App code
```

However, apiato does support serving HTML from within. So only of you prefer, you can serve HTML from apiato directly
same as serving the API.

In this case the code will live in:

```bash
- MyProject
  - app
    - Containers
      - Container-X
        - UI
          - API
          - WEB  // <<
            - Views
          - CLI
      - Container-Y
        - UI
          - API
          - WEB  // <<
            - Views
          - CLI
```

### Where do I register Service Providers and Aliases? {#where-do-i-register-service-providers-and-aliases}

Most of the third party packages Service Providers and Aliases SHOULD be registered inside the Container's Main Service
Providers, inside the `$serviceProviders` and `$aliases` properties. However, some more general Service Providers and
Aliases (application features used by all containers) CAN be registered on the Ship layer in
`app/Ship/Providers/ShipProvider.php` inside the `$serviceProviders` and `$aliases` properties.

Refer to the [Providers](./optional-components/providers) page for more details.

> **Important Information**: Laravel 5.5 introduces an `auto-discovery` feature that lets you automatically register
`ServiceProviders`. Due to the nature and structure of Apiato applications, this features **is turned off**, because
it messes up how `config` files are loaded in apiato. This means, that you still need to **manually** register
3rd-party `ServiceProviders` in the `ServiceProvider` of a `Container`.

### How to change the default API URL (Subdomain and Prefix)? {#how-to-change-the-default-api-url}

By default, Apiato uses `api.` as subdomain for all endpoints and adds only the `v1` API version as prefix.

To change this from `api.apiato.com` to `apiato.com/api/`, do the following:

1. Edit `.env`, change your api domain to `API_URL=http://apiato.com` instead of `API_URL=http://api.apiato.com` to
remove the subdomain.
2. Edit `app/Ship/Configs/apiato.php`, set prefix to `'prefix' => 'api/',`.
3. That's it. Now you might need to update your tests endpoints, if they fail. Since each test can specify which
endpoint to test, Example: In `CreateAdminTest` change `protected $endpoint = 'post@v1/admins';` to
`protected $endpoint = 'post@api/v1/admins';`, including the new prefix.

To remove the version prefix as well, set `enable_version_prefix` to `false` in `app/Ship/Configs/apiato.php`.

### Where do I define my Composer dependencies? {#where-do-i-define-my-composer-dependencies}

All the Composer dependencies should be defined in their Containers, in a `composer.json` file.

*The Ship layer dependencies live on the root of the Ship layer in a `composer.json` file.
Finally, the Framework core dependencies live on the project root `composer.json` file*.

Basically using any of the `composer.json` will do the same job. it's up to you to pick the most relevant location.

### How to enable Query Caching? {#how-to-enable-query-caching}

By default, this feature is turned off.

To turn it on, go to the `.env` file and set `ELOQUENT_QUERY_CACHE=true`. The query result will be cleared on
`create`, `update` and `delete`.

_All these configurations can be changed from `Ship/Configs/repository.php`_.

### Can I give my Actions REST names? {#can-i-give-my-actions-rest-names}

Example: `IndexAction`, `ShowAction`, `StoreAction`...

Yes, you can name anything, anyway you prefer, sa long as you’re just changing the name and not the naming format
*“like in case of routes files, they include the version number which gets applied to the api,
and the api type to help to add the route file to different docs automatically”*.

The goal of giving the Actions and Tasks… a descriptive long names is, to be able to understand what’s going on
inside the class before opening it, and there’s a feature that I will add to the generator later,
that will list all the use cases “Actions” in your system, so you can see what you already implemented and what
needs to be done. If your Action name is “ShowAction” you will see 50 of them without really knowing what
the action is doing!,

I prepend the container name before the action name, but still a maintainable code means anyone who reads it can
understand it without any explanation from the original writer!..
so I personally prefer `ShowTotalNumberOfUsersActions` than `ShowAction`.

Back to that future feature, here’s how it works:
imagine you can add all your endpoints “routes files” with no implementation and then implement them one by
one “similar to TDD/BDD” with the help of a command that tells what you already have been completed and what
needs to be completed... as well as what Tasks are available to be used from any Action..

### How are Service Providers auto-loaded? {#how-are-service-providers-auto-loaded}

Each Container has Main Provider and other Providers (Additional Providers).
When `runLoadersBoot()` is called it auto register all the Main Providers from all the Containers.

Each main provider calls its`boot()` function after being registered, which calls `loadServiceProviders()` to register
all the other container Providers. The other providers must be defined on its `$serviceProviders` property, otherwise
it will be ignored.

On the other side the `ApiatoServiceProvider` is manually registered on the `app.php` file (and it's the only one
registered there).

The `ApiatoServiceProvider` is the one who calls `runLoadersBoot()` on startup. After it calls that function it
registers `ShipProvider` which has all the other Providers defined on its `$serviceProviders` property.

> **Important Information**: Laravel 5.5 introduces an `auto-discovery` feature that lets you automatically register
`ServiceProviders`. Due to the nature and structure of Apiato applications, this features **is turned off**, because it
messes up how `config` files are loaded in apiato. This means, that you still need to **manually** register 3rd-party
`ServiceProviders` in the `ServiceProvider` of a `Container`.

### Why is the Laravel 5.5 Auto-Discovery feature not working? {#why-is-the-laravel-55-auto-discovery-feature-not-working}

That is, because this feature is turned off by default in Apiato. The Laravel `Auto-Discovery` feature registers 3rd-party
Service Providers during startup of the application and thereby messes with the way, Apiato handles / loads components.
This is especially problematic in the context of `config` files, as they are ignored.

To re-enable it go to the main `composer.json` file and remove the "*" from the `dont-discover`
```json
  "extra": {
    "laravel": {
      "dont-discover": [
        "*"
      ]
    },
```

After enabling the Auto-Discovery, you must move all the config files from the Containers and the Ship layer to the
original config folder of Laravel. Otherwise, they won't be loaded (except your custom Configs "config files that does
not belong to a composer package", they will still work fine).

> You **must** register 3rd-party Service Providers on your own in the `MainServiceProvider` of respective Container
(i.e., same like in Laravel 5.4 and before).

### How to create third-party Containers? {#how-to-create-third-party-containers}

You can create your own Containers *(use the containers generator command to quickly create them)*, and publish them
to your own repository. The only requirement is to have the package type set to `apiato-container`
(`"type": "apiato-container"`) in your `composer.json` file.

To use install the Container in your project add it as dependency to `app/Ship/composer.json`.

The `apiato/containers-installer` will download your Container to the `app/containers/` directory.

### What is the default Username for authentication? {#what-is-the-default-username-for-authentication}

The default credentials to login are:
* Username: admin@admin.com
* Password: admin

## I have a question, and I can't find answer!! {#other-questions}

If you have a question, or did not find an answer you were looking for on [StackOverflow](https://stackoverflow.com/questions/tagged/apiato). First make sure your question is related to
apiato and is not a general question. If so, then consider visiting the
[apiato's Github Issues](https://github.com/apiato/apiato/issues) and searching for *keywords* related to your
issue *(filter open and closed issues)*. Another option you have is to get help from the community on
[Slack](https://join.slack.com/t/apiato/shared_invite/zt-mtriung2-1__8zBAaJO_xXa_kMFsHgQ).

Lastly, if you got your question answered, consider sharing it, if you believe it can help others. You can submit a PR
adding the questions and answer here on the FAQ page. Or leave it somewhere on the repository or on Slack. Thanks in
advance :)
