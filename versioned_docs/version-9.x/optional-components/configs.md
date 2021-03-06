---
title: Configs
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

### Definition {#definition}

Configs are files that container configurations. For more details about them check this [doc](https://laravel.com/docs/master/configuration).

In each Apiato container, there are two types of config files:
- the container specific config file (a config file that contains the container specific configurations).
- the container third party packages config files (a config file that belongs to a third party package, required by the composer file of the container).

### Principles {#principles}

- Your custom config files and third party packages config files, should be placed in the Container, unless it's too generic then it can be placed on the Ship Layer.
- Container can have as many config files as it needs.

### Rules {#rules}

- When publishing a third party package config file move it manually to its container or to the Ship Features Config folder in case it is generic.
- Framework config files (provided by laravel) lives at the default config directory on the root of the project.
- You SHOULD NOT add any config file to the `config` directory.
- The container specific config file, MUST have the same name of the container in lower letters and post-fixed with `-container`, to prevent conflicts between third party packages and container specific packages.

### Folder Structure {#folder-structure}

```
- app
    - Containers
        - {container-name}
            - Configs
                - {container-name}-container.php
                - package-config-file1.php
                - ...
    - Ship
        - Configs
            - apiato.php
            - ...
- config
    - app.php
    - ...
```

### Code Samples {#code-samples}

**Example simple Config file**

```php
<?php
// app/Containers/{ContainerName}/Configs/{container-name}-container.php
return [

    /*
    |--------------------------------------------------------------------------
    | Default Namespace
    |--------------------------------------------------------------------------
    */
    'namespace'       => 'App',

    // some other config params here...
```
You can access the respective configuration key like this:
```php
$value = Config::get('{container-name}-container.namespace');     // returns 'App'
$value = config('{container-name}-container.namespace');          // same, but using a function

$defaultValue = Config::get('{container-name}-container.unknown.key', 'defaultvalue');   // returns 'defaultvalue' as this key is not set!
```
