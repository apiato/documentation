---
title: Configs
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

### Definition {#definition}

Configs are files that contain configurations.

In each Apiato container, there are two types of config files:
- the container specific config file (a config file that contains the container specific configurations).
- the container third party packages config files (a config file that belongs to a third party package, required by the composer file of the container).

### Principles {#principles}

- Your custom config files and third party packages config files, should be placed in the Container, unless it's too generic then it can be placed on the Ship Layer.
- Containers can have as many config files as they need.

### Rules {#rules}

- When publishing a third party package config file, move it manually to its container or to the Ship Configs folder in case it is generic.
- Framework config files (provided by Laravel) lives at the default config directory on the root of the project.
- You SHOULD NOT add any config file to the root `config` directory.
- The container specific config file, MUST be named this way:  
  camelCase of its Section name + `-` + camelCase of its Container name, to prevent conflicts between third party packages and container specific packages.  
  For example, config file inside `MySection` > `MyContainer` should be named like this: `mySection-myContainer.php`

### Folder Structure {#folder-structure}

```
- app
  - Containers
    {section-name}
      - {container-name}
        - Configs
          - {section-name}-{container-name}.php
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

#### Example simple Config file

```php
// app/Containers/{SectionName}/{ContainerName}/Configs/{section-name}-{container-name}.php
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
$value = Config::get('{section-name}-{container-name}.namespace');     // returns 'App'
$value = config('{section-name}-{container-name}.namespace');          // same, but using laravel helper function
```
For more information about the Configs read [this](https://laravel.com/docs/configuration).
