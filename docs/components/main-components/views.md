---
sidebar_position: 8
title: Views
tags:
  - component
  - main-component
  - controller
---

## Definition & Principles

Read [**Porto SAP Documentation (#Views)**](https://github.com/Mahmoudz/Porto#definitions--principles).

## Rules

- All container-specific Views MUST be placed in the `app/Containers/{Section}/{Container}/UI/WEB/Views` directory.
- All general Views MUST be placed in the `app/Ship/Views` directory.

## Folder Structure

```markdown
app
└── Containers
    └── Section
        └── Container
            └── UI
                └── WEB
                    └── Views
                        ├── view-a.php
                        ├── view-b.php
                        └── ...
```

## Code Example

Views are defined exactly as you would define them in Laravel.

## Namespaces

All views are namespaced
using the camelCase of their Section name followed by `@` and then the camelCase of their Container name.

For example,
if you have a view named `welcome-page` in the `app/Containers/MySection/MyContainer/UI/WEB/Views` directory,
you can access it like this: `view(mySection@myContainer::welcome-page)`.

Attempting to access the view without the namespace,
such as `view('welcome-page')`, will result in the view not being found.

An exception to this namespace convention is for view files
located in the `app/Ship/Views` and `app/Ship/Mails/Templates` directories.
These views will be namespaced using the word `ship` instead of the Section and Container names.

For example, you would access such a view like this: `view(ship::welcome-page)`.

