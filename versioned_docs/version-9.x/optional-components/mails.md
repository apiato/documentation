---
title: Mails
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)
* [Email Templates](#email-templates)
* [Configure Emails](#configure-emails)
* [Queueing](#queueing)

### Definition {#definition}

The Mail component allows you to describe an email and send it whenever needed. 

For more details refer to this [link](https://laravel.com/docs/mail).

### Principles {#principles}

- Containers MAY or MAY NOT have one or more Mail.

- Ship may contain general Mails.

### Rules {#rules}

- All Notifications MUST extend from `App\Ship\Parents\Mails\Mail`.
- Email Templates must be placed inside the Mail directory in a Templates directory `app/Containers/{container}/Mails/Templates`.

### Folder Structure {#folder-structure}

```
 - app
    - Containers
        - {container-name}
            - Mails
                - UserRegisteredMail.php
                - ...
                - Templates
                    - user-registered.blade.php
                    - ...
    - Ship
        - Mails
            - SomeMail.php
            - ...
            - Templates
                - some-template.blade.php
                - ...
```

### Code Samples {#code-samples}

**Example: a simple Mail**

```php
<?php

namespace App\Containers\User\Mails;

use App\Containers\User\Models\User;
use Illuminate\Bus\Queueable;
use App\Ship\Parents\Mails\Mail;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserRegisteredMail extends Mail implements ShouldQueue
{
    use Queueable;

    protected $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function build()
    {
        return $this->view('user::user-registered')
            ->to($this->user->email, $this->user->name)
            ->with([
                'name' => $this->user->name,
            ]);
    }
}
```

**Usage from an Action:**

Notifications can be sent from Actions or Tasks using the `Mail` Facade.

```php
Mail::send(new UserRegisteredMail($user));
```

## Email Templates {#email-templates}

Templates should be placed inside a folder `Templates` inside the `Mail` folder.

To access a Mail template *(same like accessing a web view)* you must call the container name then the view name.   

In the example below we're using the `user-registered.blade.php` template in the **User** Container.

```php
$this->view('user::user-registered')
```

## Configure Emails {#configure-emails}

Open the `.env` file and set the From mail and address, this will be used globally whenever the `from` function is not called in the Mail. 

```markdown
MAIL_FROM_ADDRESS=test@test.test
MAIL_FROM_NAME="apiato"
```
To use different email address in some classes add `->to($this->email, $this->name)` to the `build` function in your Mail class. 

By default Apiato is configured to use Log Driver `MAIL_DRIVER=log`, you can change that from the `.env` file.

## Queueing A Notification {#queueing}

To queue a notification you should use `Illuminate\Bus\Queueable` and implement `Illuminate\Contracts\Queue\ShouldQueue`.
