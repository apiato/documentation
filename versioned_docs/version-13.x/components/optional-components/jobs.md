---
title: Jobs
tags:
  - component
  - optional-component
  - job
  - queue
---

Apiato jobs are just [Laravel Jobs](https://laravel.com/docs/queues),
and they function in the exact same way as Laravel jobs.
However, they come with additional rules and conventions specific to Apiato.

To generate new jobs, you may use the `apiato:make:job` interactive command:

```
php artisan apiato:make:job
```

## Rules

- All container-specific Jobs MUST be placed in the `app/Containers/{Section}/{Container}/Jobs` directory.
- All general Jobs MUST be placed in the `app/Ship/Jobs` directory.
- All Jobs MUST extend the `App\Ship\Parents\Jobs\Job` class.
  - The parent extension SHOULD be aliased as `ParentJob`.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Jobs
│               ├── FooJob.php
│               ├── BarJob.php
│               └── ...
└── Ship
    └── Jobs
        ├── BazJob.php
        └── ...
```

## Code Example

Jobs are defined exactly as you would define them in Laravel.
