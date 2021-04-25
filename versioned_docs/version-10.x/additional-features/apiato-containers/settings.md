---
title: Settings
---

- [Installation](#installation)
- [Seed the default settings](#seed-the-default-settings)
- [Read settings](#read-settings)

## Installation {#installation}

```shell
composer require apiato/settings-container
```
Now run `php artisan migrate`

## Seed the default settings {#seed-the-default-settings}

:::caution Instructions
This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:

1- Copy the container from `Vendor` to `AppSection` (or any of your custom sections) of your project  
2- Fix the namespaces  
3- Remove `apiato/settings-container` dependency from project root composer.json
:::

Seed default settings in `app/Containers/YourSection/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php`

## Read settings {#read-settings}

```php
$value = $this->findSettingsByKeyTask->run('whateverSettingsName');
```

You can search for settings by Key as in the example above, or create a class for each setting as follows:

```php
$value = $this->findWhateverSettingsTask->run();
```
