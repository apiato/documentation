---
title: Migrations
tags:
  - component
  - optional-component
  - migration
  - seeder
---

Apiato migrations are just Laravel migrations,
and they function in the exact same way as regular Laravel migrations.
However, they come with additional rules and conventions specific to the Apiato.

## Rules

- All container-specific Migrations MUST be placed in the `app/Containers/{Section}/{Container}/Data/Migrations` directory.
- All general Migrations MUST be placed in the `app/Ship/Migrations` directory.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Data
│               └── Migrations
│                   ├── 0000_01_01_000001_create_things_table.php
│                   └── ...
└── Ship
    └── Migrations
        ├── 0000_02_02_000002_create_another_things_table.php
        └── ...
```

## Code Example

Migrations are defined exactly as you would define them in Laravel.
