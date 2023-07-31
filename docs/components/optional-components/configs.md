---
title: Configs
tags:
  - component
  - optional-component
  - config
---

Configs are a Laravel feature.

## Rules

- All custom and third-party packages config files MUST be placed in the `app/Containers/{Section}/{Container}/Configs` directory.
- All general config files MUST be placed in the `app/Ship/Configs` directory.
- All Laravel config files MUST be kept in the `app/config` directory.
- You MUST NOT add any config file to the root `config` directory.
- The container-specific config file MUST be named following a specific convention:  
  `camelCase` of their Section name followed by `-` and then the `camelCase` of their Container name.
  For example: `mySection-myContainer.php`.
- Containers MAY have as many config files as they need.

:::info
The container config name convention rule is in place to prevent conflicts between third-party packages'
configs and container-specific configs.
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
