---
title: Migrations
---

* [Definition](#definition)
* [Principles](#principles)
* [Rules](#rules)
* [Folder Structure](#folder-structure)
* [Code Samples](#code-samples)

### Definition {#definition}

Migrations (are the short name for Database Migrations).

Migrations are the version control of your database. They are very useful for generating and documenting the database tables.

### Principles {#principles}

- Migrations SHOULD be created inside the Containers folders.

- Migrations will be autoloaded by the framework.

### Rules {#rules}

- No need to publish the DB Migrations. Just run the `artisan migrate` command and Laravel will read the Migrations from the Containers.

### Folder Structure {#folder-structure}

```
   - app
      - Containers
          - {section-name}
              - {container-name}
                  - Data
                      - Migrations
                          - 2200_01_01_000001_create_something_table.php
                          - ...
```

### Code Samples {#code-samples}

#### User CreateDemoTable Migrations

```php
class CreateDemoTable extends Migration
{
    public function up()
    {
        Schema::create('demos', function (Blueprint $table) {
            $table->increments('id');
            // ...
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down()
    {
        Schema::drop('demos');
    }
}

```

:::info Further reading
More info at [Laravel Docs](https://laravel.com/docs/migrations).
:::
