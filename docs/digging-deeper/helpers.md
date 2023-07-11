---
title: Helpers
---

- [Definition](#definition)
- [Principles](#principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

### Definition {#definition}

- Helpers are global PHP functions that you can call from anywhere in your application.
- Helper files are simple PHP files that hold functions.

### Principles {#principles}

- Helpers SHOULD be created inside the Containers. However, general Helpers CAN be created in the Ship layer.
- You can create as many helper files as you need, per container.
- You can implement as many helper functions as you need, per helper file.
- All Helper files will be autoloaded by the framework.

### Rules {#rules}

- Helpers CAN be placed inside the Containers in Helpers folder or on the Ship for the general Helpers.

### Folder Structure {#folder-structure}

```
- App
  - Containers
    - {section-name}
      - {container-name}
        - Helpers
          - helpers.php
          - mix.php
          - ...

  - Ship
    - Helpers
      - helpers.php
      - mix.php
      - ...
```

### Usage {#usage}

```php
if (!function_exists('add')) {
    function add(int $firstNumber, int $secondNumber): int
    {
        return $firstNumber + $secondNumber;
    }
}
```
