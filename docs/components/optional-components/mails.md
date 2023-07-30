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

## Definition {#definition}

The Mail component allows you to describe an email and send it whenever needed. 

## Principles {#principles}

- Containers MAY or MAY NOT have one or more Mail.

- Ship may contain general Mails.

## Rules

- All Notifications MUST extend the `App\Ship\Parents\Mails\Mail` class.
- Email Templates must be placed in `app/Containers/{section}/{container}/Mails/Templates`.

## Folder Structure

```
- app
  - Containers
    - {Section}
      - {Container}
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

## Code Example

#### A simple Mail

```php
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
        return $this->view('appSection@user::user-registered')
            ->to($this->user->email, $this->user->name)
            ->with([
                'name' => $this->user->name,
            ]);
    }
}
```

#### Usage from an Action

Notifications can be sent from Actions or Tasks using the `Mail` Facade.

```php
Mail::send(new UserRegisteredMail($user));
```

## Email Templates {#email-templates}

Templates should be placed inside a folder `Templates` inside the `Mail` folder.

To access a Mail template *(same like accessing a web view)* you must call the camelCase of its Section name + `@` + camelCase of its Container name.   

In the example below we're using the `user-registered.blade.php` template in the `AppSection` Section > `User` Container.

```php
$this->view('appSection@user::user-registered');
```

## Configure Emails {#configure-emails}

Open the `.env` file and set the `from` mail and address. This will be used globally whenever the `from` method is not called in the Mail. 

```env
MAIL_FROM_ADDRESS=test@test.test
MAIL_FROM_NAME="apiato"
```
To use different email address in some classes add `->to($this->email, $this->name)` to the `build` method in your Mail class. 

By default Apiato is configured to use Log Driver `MAIL_DRIVER=log`, you can change that from the `.env` file.

## Queueing A Notification {#queueing}

To queue a notification you should use `Illuminate\Bus\Queueable` trait and implement the `Illuminate\Contracts\Queue\ShouldQueue` contract.

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/mail).
:::
