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
* [How to create third-party Containers?](#how-to-create-third-party-containers)
* [What is the default Username for authentication?](#what-is-the-default-username-for-authentication)
* [I have a question and I can't find answer!!](#other-questions)

### Do I have to use the Porto Architecture to benefit from Apiato!? {#do-i-have-to-use-the-porto-architecture-to-benefit-from-apiato}

No. You can still use the standard MVC (Controllers are still there) or any other architecture you prefer, and you can
call the Apiato provided `Actions` and `Tasks` from your Controllers or Services or whichever classes you prefer. You
have the freedom to structure your own project anyway you like, and still use all the feature that Apiato provide.

### How to use my custom domain? {#how-to-use-my-custom-domain}

Read the [installation guide](http://localhost:3000/docs/next/getting-started/installation#Development-Environment).

### Where to put my frontend code? {#where-to-put-my-frontend-code}

It's recommended that the front-end App codes live outside apiato completely. Example in `clients/web/` directory,
separated from the Server code (apiato Code).

The front-end App should be able to run as a stand-alone App, and it can consume the Server API or other Testing API's.

You can configure NGINX to serve the Front-end and the Back-end each on a different domain or on subdomains *(Example
`app.com` for the front-end App and `api.app.com` for the API)*.

However, apiato does support serving HTML from within. So only of you prefer, you can serve HTML from apiato directly
same as serving the API.

In this case the code will live in:

```bash
- MyProject
  - app
    - Containers
      - Section-Z
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

Most of the third party package Service Providers and Aliases SHOULD be registered inside the Container's Main Service
Providers, inside the `$serviceProviders` and `$aliases` properties. However, some more general Service Providers and
Aliases (application features used by all containers) CAN be registered on the Ship layer in
`app/Ship/Providers/ShipProvider.php` inside the `$serviceProviders` and `$aliases` properties.

Refer to the [Providers](../optional-components/providers) page for more details.

### How to change the default API URL (Subdomain and Prefix)? {#how-to-change-the-default-api-url}

By default, Apiato uses `api.` as subdomain for all endpoints and adds only the `v1` API version as prefix.

To change this from `api.apiato.test` to `apiato.test/api/`, do the following:

1. Edit `.env`, change your api domain to `API_URL=http://apiato.test` instead of `API_URL=http://api.apiato.test` to
remove the subdomain.
2. Edit `app/Ship/Configs/apiato.php`, set prefix to `'prefix' => 'api/',`.
3. That's it. Now you might need to update your tests endpoints, if they fail. Since each test can specify which
endpoint to test, Example: In `app/Containers/AppSection/User/UI/API/Tests/Functional/CreateAdminTest` change `protected $endpoint = 'post@v1/admins';` to
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

_All these configurations can be changed from `app/Ship/Configs/repository.php`_.

### Can I give my Actions REST names? {#can-i-give-my-actions-rest-names}

Example: `IndexAction`, `ShowAction`, `StoreAction`...

Yes, you can name anything, anyway you prefer, sa long as you’re just changing the name and not the naming format
*“like in case of routes files, they include the version number which gets applied to the api,
and the api type to help to add the route file to different docs automatically”*.

The goal of giving the Actions and Tasks… a descriptive long names is, to be able to understand what’s going on
inside the class before opening it, and there’s `php artisan apiato:list:actions` command which list all the use cases “Actions”
in your system, so you can see what you already implemented and what needs to be done.
If your Action name is “ShowAction” you will see 50 of them without really knowing what the action is doing!

I prepend the container name before the action name, but still a maintainable code means anyone who reads it can
understand it without any explanation from the original writer!
so I personally prefer `ShowTotalNumberOfUsersAction` than `ShowAction`.

### How are Service Providers auto-loaded? {#how-are-service-providers-auto-loaded}

Each Container has Main Provider and other Providers (Additional Providers).
When `runLoadersBoot()` is called, it auto register `ShipProvider` and all the Main Providers from all the Containers.

The `ApiatoProvider` is the one who calls `runLoadersBoot()` on startup. `ApiatoProvider` is automatically registered using Laravel auto-discovery feature.

### How to create third-party Containers? {#how-to-create-third-party-containers}

Read the [Container Installer Documentation](../additional-features/container-installer).

### What is the default Username for authentication? {#what-is-the-default-username-for-authentication}

The default credentials to login are:
* Username: admin@admin.com
* Password: admin

## I have a question, and I can't find answer!! {#other-questions}

If you have a question, or did not find an answer you were looking for on [StackOverflow](https://stackoverflow.com/questions/tagged/apiato). First make sure your question is related to
Apiato and is not a general question. If so, then consider visiting the
[Apiato Github Issues](https://github.com/apiato/apiato/issues) and searching for *keywords* related to your
issue *(filter open and closed issues)*. Another option you have is to get help from the community on
[Discord](https://discord.gg/ryPcV4KM5k).

Lastly, if you got your question answered, consider sharing it, if you believe it can help others. You can submit a PR
adding the questions and answer here on the FAQ page. Or leave it somewhere on the repository or on the chat room. Thanks in
advance :)
