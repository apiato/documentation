---
title: Configs
tags:
  - component
  - optional-component
  - config
---

## Definition

Configs are a Laravel feature.

## Principles

- Containers MAY have as many config files as they need.

## Rules

- All custom and third party packages config files MUST be placed in the `app/Containers/{Section}/{Container}/Configs` directory.
- All general config files MUST be placed in the `app/Ship/Configs` directory.
- All Laravel config files MUST be kept in the `app/config` directory.
- You MUST NOT add any config file to the root `config` directory.
- The container specific config file MUST be named in a specific way:  
  camelCase of their Section name followed by `-` and then the camelCase of their Container name.
  for example: `mySection-myContainer.php`.

:::info
Container name convention rule is to prevent conflicts between third party packages and container specific packages.
:::
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
