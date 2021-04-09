---
title: Languages
---

- [Definition](#definition)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

### Definition {#definition}

Languages are not real Components, they are just files that holds translations.

### Rules {#rules}

- Languages CAN be placed inside the Containers. However the default laravel `resources/lang` languages files are still loaded and can be used as well.

- All Translations are namespaced as the lower case of the Container name.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - Resources
                - Languages
                   - en
                      - messages.php
                      - users.php
                   - ar
                      - messages.php
                      - users.php
```

### Usage {#usage}

Nothing much to show here, here's how you use translated strings:

```php
<?php

__('messages.welcome');

echo __('messages.welcome');

dd(__('messages.welcome'));
```

For more info about the localization checkout the [Localization](.././features/localization) page.
