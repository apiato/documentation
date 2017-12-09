---
title: "Transporters"
category: "Main Components"
order: 3
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

<a name="definition-principles"></a>
### Definition & Principles

Transporters is a name choosen by Apiato for DTO's (Data Transfer Objects). 
Transporters are used to pass user data (comming from Requests, Commands, or other places) from place to another (Actions to Tasks / Controller to Action / Command to Action / ...).

They are very useful for reducing the number of parameters in functions, which prevents the duplication of the long parameters.   



<a name="rules"></a>
### Rules

- All Models MUST extend from `App\Ship\Parents\Transporters\Transporter`.


<a name="folder-structure"></a>
### Folder Structure

```
 - App
    - Containers
        - {container-name}
            - Data
                - Transporters
                    - CreateUserTransporter.php
                    - ...
```

### Code Sample

```php
<?php

use App\Ship\Parents\Transporters\Transporter;

class CreateUserTransporter extends Transporter
{

    // ... coming soon

}
```
