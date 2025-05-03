---
title: Helpers
tags:
  - component
  - optional-component
  - helper
---

You can create your own global "helper" PHP functions in designated directories,
and Apiato will automatically autoload them for you.

## Rules

- You MAY create as many helper files as you need per container.
- All container-specific helpers MUST be placed in the `app/Containers/{Section}/{Container}/Helpers` directory.
- All general helpers MUST be placed in the `app/Ship/Helpers` directory.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Helpers
│               ├── helpers.php
│               ├── mix.php
│               └── ...
└── Ship
    └── Helpers
        ├── another-helper.php
        ├── and-another.php
        └── ...
```

## Code Example

```php
if (!function_exists('add')) {
    function add(int $firstNumber, int $secondNumber): int
    {
        return $firstNumber + $secondNumber;
    }
}
```

## Autoloading
Apiato will automatically autoload all helper files in the `app/Containers/{Section}/{Container}/Helpers` and `app/Ship/Helpers` directories.

If these conventions do not apply to your particular application, you may configure the autoloading
via the [Apiato Configuration](../../framework-features/advance-configuration.mdx#helpers) class.
