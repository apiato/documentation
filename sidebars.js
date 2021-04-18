module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/requirements',
        'getting-started/installation',
        'getting-started/overview',
        'getting-started/requests',
        'getting-started/responses',
        'getting-started/software-architectural-patterns',
        'getting-started/conventions-and-principles'
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'core-features/code-generator',
        'core-features/authentication',
        'core-features/authorization',
        'core-features/user-registration',
        'core-features/query-parameters',
        'core-features/default-endpoints',
        'core-features/hash-id',
        'core-features/rate-limiting',
        'core-features/data-caching',
        'core-features/pagination',
        'core-features/api-versioning',
        'core-features/validation',
        'core-features/etag',
        'core-features/useful-commands',
        'core-features/profiler'
      ],
    },
    {
      type: 'category',
      label: 'Additional Features',
      items: [
        'additional-features/overview',
        'additional-features/container-installer',
        {
          'Apiato Containers': [
            'additional-features/apiato-containers/documentation',
            'additional-features/apiato-containers/debugger',
            'additional-features/apiato-containers/social-authentication',
            'additional-features/apiato-containers/localization',
            'additional-features/apiato-containers/payments',
            'additional-features/apiato-containers/settings',
          ],
        },
        {
          'Community Containers': [
            'additional-features/community-containers/overview',
            {
              type: 'link',
              label: 'Example Container',
              href: 'https://github.com/johannesschobel/apiato-null'
            },
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Main Components',
      items: [
        'main-components/routes',
        'main-components/controllers',
        'main-components/requests',
        'main-components/actions',
        'main-components/tasks',
        'main-components/models',
        'main-components/views',
        'main-components/transformers',
        'main-components/exceptions',
        'main-components/subactions'
      ],
    },
    {
      type: 'category',
      label: 'Optional Components',
      items: [
        'optional-components/providers',
        'optional-components/repositories',
        'optional-components/criterias',
        'optional-components/tests',
        'optional-components/migrations',
        'optional-components/seeders',
        'optional-components/factories',
        'optional-components/middlewares',
        'optional-components/configs',
        'optional-components/commands',
        'optional-components/jobs',
        'optional-components/languages',
        'optional-components/events',
        'optional-components/mails',
        'optional-components/notifications',
        'optional-components/values'
      ],
    },
    {
      type: 'category',
      label: 'Miscellaneous',
      items: [
        'miscellaneous/tests-helpers',
        'miscellaneous/tasks-scheduling',
        'miscellaneous/tasks-queuing',
      ],
    },
    {
      type: 'category',
      label: 'General',
      items: [
        'general/faq',
        'general/contribution-guide',
        'general/upgrade-guide',
      ],
    },
    {
      type: 'link',
      label: 'Change Log',
      href: 'https://github.com/apiato/apiato/releases'
    },
  ],
};
