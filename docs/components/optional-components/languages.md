---
title: Languages
---

- [Definition](#definition)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

## Definition

Languages are not real Components, they are just files that holds translations.

## Rules

- Languages CAN be placed inside the Containers. However, the default laravel `resources/lang` languages files are still loaded and can be used as well.

- All Translations are namespaced as the camelCase of its Section name + `@` + camelCase of its Container name.  
  For example, translation key inside a translation file named `messages` inside `MySection` > `MyContainer` can be accessed like this: `__(mySection@myContainer::messages.welcome)`


## Folder Structure

```
- app
  - Containers
    - {Section}
      - {Container}
        - Resources
          - Languages
            - en
              - messages.php
              - users.php
            - ar
              - messages.php
              - users.php
```

## Usage {#usage}

Nothing much to show here, here's how you use translated strings:

```php
__('mySection@myContainer::messages.welcome');
```

:::info Further reading
More info at [Localization](../../pacakges/localization.md).
:::
