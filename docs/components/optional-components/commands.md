---
title: Commands
tags:
  - component
  - optional-component
  - command
  - action
---

## Definition

Commands are a [Laravel Artisan](https://laravel.com/docs/artisan) feature.
In addition to the commands provided with Artisan, you can also build your own custom commands.

## Principles

- Containers MAY or MAY NOT have one or more Commands.
- Every Command SHOULD call an Action to perform its job, and SHOULD NOT contain any business logic.
- Ship MAY contain Application general Commands.

## Rules

- All container specific Commands MUST be placed in the `app/Containers/{Section}/{Container}/UI/CLI/Commands` directory.
- All general Commands MUST be placed in the `app/Ship/Commands` directory.
- All Commands MUST extend the `App\Ship\Parents\Commands\ConsoleCommand` class.
- The parent extension SHOULD be aliased as `ConsoleCommand`.

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

You can define Console closure commands in `app/Ship/Commands/closures.php`.
