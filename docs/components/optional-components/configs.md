---
title: Configs
tags:
  - component
  - optional-component
  - config
---

Apiato configs are just Laravel configs, and they function in the exact same way as Laravel configs.
However, they come with additional rules and conventions specific to Apiato.

To generate new configs
you may use the `apiato:make:configuration` interactive command:

```
php artisan apiato:make:configuration
```

## Rules

- Containers MAY have as many config files as they need.
- All container-specific config files MUST be placed in the `app/Containers/{Section}/{Container}/Configs` directory.
- All general config files MUST be placed in the `app/Ship/Configs` directory.
- All Laravel config files MUST be kept in the root `config` folder.
- You MUST NOT add any config files to the root `config` folder.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Configs
│               ├── section-container.php
│               ├── another.php
│               └── ...
├── Ship
│   └── Configs
│       ├── another-thing.php
│       ├── and-another.php
│       └── ...
└── config
    ├── app.php
    └── ...
```

## Code Example

Configs are defined exactly as you would define them in Laravel.

## Container Main Config File

It is recommended that each container possesses a primary configuration file.
While it is not obligatory,
adhering to this practice prevents clashes between third-party package configurations and container-specific configurations.

The primary configuration file of a container should be named in accordance with a certain convention:
`camelCase` representation of the container's Section name,
succeeded by `-`, and then the `camelCase` representation of the Container name.

For instance, if you have a container named "MyContainer" within the "MySection"
section, the configuration file would be named `mySection-myContainer.php`.
