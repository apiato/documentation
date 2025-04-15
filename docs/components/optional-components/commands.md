---
title: Commands
tags:
  - component
  - optional-component
  - command
  - action
---

Apiato commands are just [Laravel Commands](https://laravel.com/docs/artisan),
and they function in the exact same way as Laravel commands.
However, they come with additional rules and conventions specific to Apiato.

## Rules

- All container-specific Commands MUST be placed in the `app/Containers/{Section}/{Container}/UI/CLI/Commands` directory.
- All general Commands MUST be placed in the `app/Ship/Commands` directory.
- All Commands:
  - MUST extend the `App\Ship\Parents\Commands\Command` class.
    - The parent extension SHOULD be aliased as `ConsoleCommand`.
  - SHOULD call an Action to perform its job, and SHOULD NOT contain any business logic.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── UI
│               └── CLI
│                   └── Commands
│                       ├── FirstCommand.php
│                       ├── SecondCommand.php
│                       └── ...
└── Ship
    └── Commands
        ├── FirstCommand.php
        ├── SecondCommand.php
        └── ...
```

## Code Example

Commands are defined exactly as you would define them in Laravel.

## Closure Commands

You can define your console closure commands in `app/Ship/Commands/closures.php`.
