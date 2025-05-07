---
title: Views
---

* [Definition & Principles](#definition-principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Sample](#code-sample)
- [Namespaces](#namespaces)

### Definition & Principles {#definition-principles}

Read from the [**Porto SAP Documentation (#Views)**](https://github.com/Mahmoudz/Porto#Views).

### Rules {#rules}

- Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers.

- All Views are namespaced as the lower case of the Container name.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - UI
                - WEB
                    - Views
                        - welcome.php
                        - profile.php
                        - ...
```

### Code Sample {#code-sample}

**Welcome page View**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
<div class="container">
    <div class="content">
        <div class="title">Welcome</div>
    </div>
</div>
</body>
</html>
```

**Example: Usage From Controller**

```php
<?php

namespace App\Containers\Welcome\UI\WEB\Controllers;

use App\Ship\Parents\Controllers\WebController;

class Controller extends WebController
{
    public function sayWelcome()
    {
        return view('just-welcome');
    }
}

```

## Namespaces {#namespaces}

By default, all the Container Views are namespaced to the Container name.

Example:

If a Container named *Store* has View `say-hello`, you can access the view like this `view('store::just-welcome')`. If you try to access it without the namespace `view('just-welcome')`, it will not find your View.
