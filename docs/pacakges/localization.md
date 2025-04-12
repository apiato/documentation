---
sidebar_position: 2
title: Localization
tags:
  - package
---

The Localization Container is built on top of Laravel's [localization](https://laravel.com/docs/localization) features
and provides a convenient way to create and manage translations for your application.

## Requirements

`Intl` PHP Extension is required to use this feature.

## Installation

```shell
composer require apiato/localization-container
```

## Publishing Configs
```shell
php artisan vendor:publish
```  
Config file will be placed at `app/Ship/Configs/vendor-localization.php`

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── Languages
                ├── en
                │   ├── messages.php
                │   ├── users.php
                │   └── ...
                ├── ar
                │   ├── messages.php
                │   ├── users.php
                │   └── ...
                └── ...
```

## Usage

All Translations are namespaced with the following pattern:
```shell
camelCase of its Section name + `@` + camelCase of its Container name
```

Let's say we have a `welcome` translation key in the `app/Containers/MySection/MyContainer/en/messages.php` file.

You can retrieve this translation like this:
```php
__('mySection@myContainer::messages.welcome');
```

:::note
Translation files in **Ship** folder are exception to this and will be namespaced with the word "**ship**"
instead of section name, e.g. `__('ship::messages.welcome')`
:::

## Adding New Languages

Language files can be placed in any container's `Languages` folder.
You can also place general language files in `app/Ship/Languages`.
The language files placed in the default Laravel `lang` folder are still loaded and can be used as well.

These language folders work exactly the same way as the default Laravel `lang` folder.

:::note
Just create the `Languages` folder if it does not exist in your container or the `app/Ship` directory.  
:::

## Supporting New Languages

All supported languages must be added to the `supported_languages` array in the `vendor-localization.php` config file
to prevent users from requesting unsupported languages.

```php
'supported_languages' => [
    'ar',
    'en' => [
        'en-GB',
        'en-US',
    ],
    'es',
    'fr',
    'fa',
],
```

## Requesting a Specific Language

You can select the language of the response by adding the header `Accept-Language` to the request. By default, the
`Accept-Language` is set to the language defined in `config/app.php` `locale`.

Please note
that the `Accept-Language` only declares that the client _would like_ to get the information in this specific language.
It is not a given that the API responds in that language!

:::note
Please be sure that your client does not send an `Accept-Language` header automatically. Some REST clients
(e.g., `POSTMAN`) automatically add header-fields based on the operating-systems settings. So your `Accept-Language` header
may be set automatically without you knowing!
:::

Now that we have a `Accept-Language` set,
the API will answer with the applied language in the `Content-Language` header of the response.
And if the requested language cannot be resolved (e.g., it is not defined),
an `UnsupportedLanguageException` will be thrown.

The overall workflow of the Middleware is as follows:
1) Extract the `Accept-Language` field from the request header. If none is set, use the default locale from the config file
2) Build a list of all supported localizations based on the configuration of the respective container. If a language
   (top level) contains regions (sub-level), order them like this: `['en-GB', 'en-US', 'en']` (the regions before languages,
   as regions are more specific)
3) Check if the requested language is supported.
   If the language is supported, set it as application language, if not throw an `Exception`.

## Enable/Disable Localization

To enable or disable the localization,
you can set the `LOCALIZATION_ENABLED` environment variable in the `.env` file
to `true` or `false` respectively.
This can also be done in the `vendor-localization.php` config file.

## Retrieve Available Localizations

Available localizations can be retrieved via `GET /localizations` endpoint.

You will get a response like this:
```json
{
  "data": [
    {
      "type": "Localization",
      "id": "de", // The language code (same as 'language.code')
      "language": {
        "code": "de", // The language code
        "default_name": "German", // The language name in the application's default language
        "locale_name": "Deutsch" // The language name in its native form
        "regions": [
          {
            "code": "de-DE", // The region code
            "default_name": "Germany", // The region name in the application's default language
            "locale_name": "Deutschland" // The region name in its native form
          },
          {
            "code": "de-AT", // The region code
            "default_name": "Austria", // The region name in the application's default language
            "locale_name": "Österreich" // The region name in its native form
          }
        ]
      }
    }
  ]
}
```
