---
title: Models
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)
- [Casts](#casts)

### Definition & Principles {#definition-principles}

Read from the [**Porto SAP Documentation (#Models)**](https://github.com/Mahmoudz/Porto#Models).

### Rules {#rules}

- All Models MUST extend from `App\Ship\Parents\Models\Model`.
- If the name of a model differs from the Container name you have to set the `$container` attribute in the repository - [more details](.././optional-components/repositories).

### Folder Structure {#folder-structure}

```
 - App
    - Containers
        - {container-name}
            - Models
                - User.php
                - UserId.php
                - ...
```

### Code Sample {#code-sample}

```php
<?php

namespace App\Containers\Demo\Models;

use App\Ship\Parents\Models\Model;

class Demo extends Model
{
    protected $table = 'demos';

    protected $fillable = [
        'label',
        'user_id'
    ];

    protected $hidden = [
        'token',
    ];

    protected $casts = [
        'total_credits'     => 'float',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(\App\Containes\User\Models\User::class);
    }
}
```

Notice the Demo Model has a relationship with User Model, which lives in another Container.

### Casts {#casts}

The casts attribute can be used to parse any of the model's attributes to a specific type. In the code sample below we can cast `total_credits` to `float`.

More information about the applicable cast-types can be found in the laravel [eloquent-mutators](https://laravel.com/docs/master/eloquent-mutators) documentation.

You can place any dates inside of the `$dates` to parse those automatically.
