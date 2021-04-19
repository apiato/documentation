---
title: Debugger
---

- [Installation](#installation)
- [Enable Requests Logging](#enable-requests-logging)
- [Usage](#usage)
- [Debugger Customization](#debugger-customization)
  - [Change the Default Log File](#change-the-default-log-file)
  - [Run in Testing Environments](#run-in-testing-environments)

Apiato provides a simple and easy way to monitor and log all the HTTP requests coming to your application.

The request monitor can be very useful when testing and debugging your frontend Apps which consume your API. Especially when the frontend apps (Mobile, Web,...) are built by other developers who are far from you.

The requests monitoring is provided via the`RequestsMonitorMiddleware` middleware.

## Installation {#installation}

```shell
composer require apiato/debugger-container
```

:::tip
This container is installed by default with an Apiato fresh installation.
:::

## Enable Requests Logging {#enable-requests-logging}

Set `REQUESTS_DEBUG` and `APP_DEBUG` to true in `.env` file .

## Usage {#usage}

Log will be written to `storage/logs/debugger.log`

## Debugger Customization {#debugger-customization}

:::caution Instructions

This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps:

1- Copy the container from `VendorSection` to `AppSection` (or any of your custom sections) of your project<br/>
2- Fix the namespaces<br/>

:::

### Change the Default Log File {#change-the-default-log-file}

By default, everything is logged in the `debugger.log` file, to change the default file go to `Debugger/Configs/debugger.php` config file and set the file name:

```php
/*

 |--------------------------------------------------------------------------
 | Log File
 |--------------------------------------------------------------------------
 |
 | What to name the log file in the `storage/log` path.
 |
 */

'log_file' => 'debugger.log',

```

### Run in Testing Environments  {#run-in-testing-environments}

Request monitoring will not run in testing environments, to enable it you need to manually edit the Middleware.

