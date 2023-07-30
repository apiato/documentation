---
title: Values
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

### Definition & Principles {#definition-principles}

Values are short names for the known "Value Objects" which are simple Objects, pretty similar to Models in the concept of representing data, but they do not get stored in the DB, thus they don't have ID's. 
They also do not hold functionality or change any state, they just hold data.

A Value Object is an immutable object that is defined by its encapsulated attributes. 
We create Value Object when we need it to represent/serve/manipulate some data (attached as attributes), and we'll kill it later when we don't need it anymore, to recreate it again when needed.  

### Rules {#rules}

- All Values MUST extend the `App\Ship\Parents\Values\Value` class.

### Folder Structure {#folder-structure}

```
- App
  - Containers
    - {Section}
      - {Container}
        - Values
          - Output.php
          - Region.php
          - ...
```

### Code Sample {#code-sample}

```php
class Location extends Value
{
    private $x = null;
    private $y = null;
    protected $resourceKey = 'locales';
    
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
