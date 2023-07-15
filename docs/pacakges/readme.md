---
title: Overview
---

Apiato ships with a few pre-defined and pre-configured containers.
Some of these containers (e.g. [Documentation](./documentation.md)) are installed by default with a fresh Apiato project.

### Downloading and Installing Containers {#downloading-and-installing-containers}

Apiato provides an easy-to-use solution for downloading, installing and continuously updating containers from 3rd party developers.

As an application developer, you simply need to include the respective `vendor/project` to the`composer.json`.

For example, your `/composer.json` file may look something like this:

```json
{
  "require": {
    "apiato/welcome-container": "^2.0.1"
  }
}
```

You just need to call `composer update` in order to install the respective packages. The package (e.g., the container)
`apiato/settings-container` is then installed to the `app/Containers/Vendor` folder. However, the developer of the package
needs to follow some basic guidelines listed below.
:::caution Warning
**Do not** modify content within a downloaded container, as it will be overwritten if you call `composer update`.
:::

### Modifying Containers

To modify the code of this container usually you just need to copy the container to `AppSection`
(or any of your custom sections) and update the namespaces. (See each container documentation for more details)

### Developing a Container {#developing-a-container}

Developing a container that can be used by others is quite easy. Basically, you can `extract` already existing functionality
in a new container and provide the features. Note that you need to upload the container to `GitHub` and then release
it on `Packagist` in order for it to be available via `Composer`. Please see a respective tutorial how to submit a package
to `GitHub` and release it via `Packagist`.

In particular, the only thing that needs to be done, when developing a container is to provide a specific `composer.json`
file within the main folder of the container.

An example of such a `composer.json` file is shown below:

```json
{
  "name": "vendor/project",
  "description": "This is a short description for your container.",
  "type": "apiato-container",   // you must set the type to "apiato-container" here.
  "require": {
    "somevendor/somepackage" : "dev-master"
    // some other requirements here
  },
  "extra": {
    "apiato": {
      "container": {
        "name": "Foo"   // The name of the container within the /app/Containers/Vendor folder
      }
    }
  }
}
```

**Important Information:**
* You **must** add the respective `type : apiato-container` to the composer file. This way, the custom installer is used
  that allows installing/updating containers.
* You **must** provide the key `extra.apiato.container.name`. This key indicates the name of the folder (e.g., container)
  when installing the package to the `/app/Containers/Vendor` folder. In the shown example, the container would be installed to
  `app/Containers/Vendor/Foo`.
