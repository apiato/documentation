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

1) Copy the container from `VendorSection` to a section of your project and fix the namespaces.
2) Seed default settings in `app/Containers/YourSection/Settings/Database/Seeders/DefaultSystemSettingsSeeder.php`

## Read settings {#read-settings}

```php
<?php
$value = $this->findSettingsByKeyTask->run('whateverSettingsName');
```

You can search for settings by Key as in the example above, or create a class for each settings as follow:

```php
<?php
$value = $this->findWhateverSettingsTask->run();
```
