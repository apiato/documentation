---
title: Mail
tags:
  - component
  - optional-component
  - mail
  - queue
---

Apiato mails are just Laravel mails,
and they function in the exact same way as Laravel mails.
However, they come with additional rules and conventions specific to Apiato.

To generate new mails you may use the `apiato:generate:mail` interactive command:

```
php artisan apiato:generate:mail
```

## Rules

- All container-specific Mails MUST be placed in the `app/Containers/{Section}/{Container}/Mails` directory.
- All container-specific email templates MUST be placed in the `app/Containers/{Section}/{Container}/Mails/Templates` directory.
- All general Mails MUST be placed in the `app/Ship/Mails` directory.
- All general email templates MUST be placed in the `app/Ship/Mails/Templates` directory.
- All Mails MUST extend the `App\Ship\Parents\Mails\Mail` class.
  - The parent extension SHOULD be aliased as `ParentMail`.

## Folder Structure

```markdown
app
├── Containers
│   └── Section
│       └── Container
│           └── Mails
│               ├── ForgetPassword.php
│               ├── ...
│               └── Templates
│                   ├── forgot-password.blade.php
│                   └── ...
└── Ship
    └── Mails
        └── Newsletter.php
            ├── ...
            └── Templates
                ├── newsletter.blade.php
                └── ...
```

## Code Example

```php
use ...
use App\Ship\Parents\Mails\Mail as ParentAction;

class WelcomeMail extends ParentMail ShouldQueue
{
    use Queueable;

    public function __construct(protected User $recipient)
    {
    }

    public function build()
    {
        return $this->view('appSection@user::welcome')
            ->to($this->user->email, $this->user->name)
            ->with([
                'name' => $this->user->name,
            ]);
    }
}
```

## Template Namespaces

All templates are namespaced
using the camelCase of their Section name followed by `@` and then the camelCase of their Container name.

For example,
if you have a template named `welcome` in the `app/Containers/MySection/MyContainer/Mails/Templates` directory,
you can access it like this: `view(mySection@myContainer::welcome)`.

Attempting to access the template without the namespace,
such as `view('welcome')`, will result in the template not being found.

An exception to this namespace convention is for template files
located in the `app/Ship/Mails/Templates` directory.
These templates will be namespaced using the word `ship` instead of the Section and Container names.

For example, you would access such a template like this: `view(ship::welcome)`.
