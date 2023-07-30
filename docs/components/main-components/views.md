---
sidebar_position: 7
title: Views
---

* [Definition & Principles](#definition-principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Sample](#code-sample)
* [Namespaces](#namespaces)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Views)**](https://github.com/Mahmoudz/Porto#definitions--principles).

### Rules {#rules}

- Views SHOULD be created inside the Containers, and they will be automatically available for use in the Web Controllers.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {Section}
            - {Container}
                - UI
                    - WEB
                        - Views
                            - welcome.php
                            - profile.php
                            - ...
```

### Code Example {#code-example}

#### Welcome page View

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

#### Usage From Controller

```php
class Controller extends WebController
{
    public function sayWelcome()
    {
        return view('just-welcome');
    }
}
```

## Namespaces {#namespaces}

- By default, all Views are namespaced as the camelCase of its Section name + `@` + camelCase of its Container name.

For example, a view named `welcome-page` inside `MySection` > `MyContainer` can be accessed like this: `view(mySection@myContainer::welcome-page)`

If you try to access it without the namespace `view('just-welcome')`, it will not find your View.

:::note
View files in the `app/Ship/views` directory are exception to this and will be namespaced with the word "**ship**" instead of section name, e.g. `view(ship::welcome-page)`
:::
