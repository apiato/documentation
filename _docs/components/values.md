---
title: "Values"
category: "Optional Components"
order: 100
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

<a name="definition-principles"></a>
### Definition & Principles

Value Objects are simple Objects, pretty similar to Models, but they do not get stored in the DB, thus they don't have ID's. 
They also do not hold functionality or change any state, they just hold data.

A Value Object is an immutable object that is defined by its encapsulated attributes. 
We create Value Object when we need it to represent/serve/manipulate some data (attached as attributes), and w'll kill it later when we finish using it, to recreate it again when needed.  

<a name="rules"></a>
### Rules

- All Models MUST extend from `App\Ship\Parents\Values\Value`.

<a name="folder-structure"></a>
### Folder Structure

```
 - App
    - Containers
        - {container-name}
            - Values
                - OutputValue.php
                - RegionValue.php
                - ...
```

### Code Sample

```php
<?php

use App\Ship\Parents\Values\Values;

class Location extends Values
{
    private $x = null;
    
    private $y = null;

    protected $resourceKey = 'localoca';
    
    public function __construct($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public function getCoordinatesAsString()
    {
        return $this->x . ' - ' . $this->y;
    }
}
```
