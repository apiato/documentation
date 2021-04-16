---
title: Overview
---

A curated list of awesome apiato containers or packages that helps you to kickstart developing your own (RESTful) Web Application.

> **Heads up:**
>
> Although these containers may work perfectly out of the box, they only serve as some kind of "blueprint" in order
> to get you kickstart your own application. These containers may not contain "production-ready code". Please revise them carefully!

:::caution
These containers will be installed in `app/Containers/VendorSection` using [Container Installer](./container-installer).
VendorSection contents will be overwritten and updated with every `composer update`.
To modify the code of any VendorSection container usually you just need to copy the container to `AppSection`
(or any of your custom sections) and update the namespaces.  
**Look into each container docs for more info.**
:::

## Apiato Containers
| Name | Description | Link |
|------|-------------|------|
| Welcome* | A Container to welcome user (e.g., ToDo Lists) for Eloquent Models | [GitHub](https://github.com/apiato/welcome-container) |
| Document Generator* | Creates a documentation from API annotations in your source code | [GitHub](https://github.com/apiato/documentation-generator-container) |
| Debugger* | Debugs requests and queries | [GitHub](https://github.com/apiato/debugger-container) |
| Social Auth | Adds social authentication functionality using Laravel Socialite | [GitHub](https://github.com/apiato/social-auth-container) |
| Localization | Adds localization functionality (e.g., ToDo Lists) for Eloquent Models. | [GitHub](https://github.com/apiato/localization-container) |
| Settings | Helps store and retrieving key values | [GitHub](https://github.com/apiato/settings-container) |
| Payment | An Apiato container which acts as a generic foundation to "plug in" different containers that interacts with specific payment gateways (e.g., PayPal, Stripe, ...) | [GitHub](https://github.com/apiato/payment-container) |
| Stripe Payment Gateway | Stripe Gateway for apiato Payment container | [GitHub](https://github.com/apiato/stripe-payment-gateway-container) |

_Containers with * in their name are installed by default with Apiato fresh projects._

## 3rd Party Containers
| Name | Description | Link |
|------|-------------|------|
| ActivityLog | Log Activities of Users and Models | [GitHub](https://github.com/johannesschobel/apiato-activitylog) |
| Note | A Container handling Notes (e.g., ToDo Lists) for Eloquent Models. | [GitHub](https://github.com/johannesschobel/apiato-notes) |

_Feel free to add your containers in this list._
