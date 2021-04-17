---
title: Sub Actions
---

- [Definition & Principles](#definition-principles)
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Code Sample](#code-sample)

### Definition & Principles {#definition-principles}

Read [**Porto SAP Documentation (#Sub-Actions)**](https://github.com/Mahmoudz/Porto#Sub-Actions).

### Rules {#rules}

- All SubActions MUST extend from `App\Ship\Parents\Actions\SubAction`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - Actions
                - ValidateAddressSubAction.php
                - BuildOrderSubAction.php
                - ...
```

### Code Sample {#code-sample}

**ValidateAddressSubAction User Action:**

```php
namespace App\Containers\Shipment\Actions;

use App\Containers\Recipient\Models\Recipient;
use App\Containers\Recipient\Tasks\UpdateRecipientTask;
use App\Containers\Shipment\Tasks\ValidateAddressWithEasyPostTask;
use App\Containers\Shipment\Tasks\ValidateAddressWithMelissaDataTask;
use App\Ship\Parents\Actions\SubAction;

class ValidateAddressSubAction extends SubAction
{
    public function run(Recipient $recipient)
    {
        $hasValidAddress = true;

        $easyPostResponse = Apiato::call(ValidateAddressWithEasyPostTask::class, [$recipient]);

        ...
    }
}
```

**Every feature available for Actions, is also available in SubActions.**
