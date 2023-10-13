---
title: FAQ
---

### Where do I define my Composer dependencies? {#where-do-i-define-my-composer-dependencies}

All the Composer dependencies should be defined in their Containers, in a `composer.json` file.

*The Ship layer dependencies live on the root of the Ship layer in a `composer.json` file.
Finally, the Framework core dependencies live on the project root `composer.json` file*.

Basically using any of the `composer.json` will do the same job. It's up to you to pick the most relevant location.

