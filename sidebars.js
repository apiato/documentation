module.exports = {
  docs: [
    {
      label: 'Getting Started',
      type: 'category',
      items: [
        'getting-started/requirements',
        'getting-started/installation',
        'getting-started/software-architectural-patterns',
        'getting-started/samples',
        'getting-started/requests',
        'getting-started/responses',
        'getting-started/conventions-and-principles',
        'getting-started/container-installer',
      ],
    },
    {
      'Features': [
        {
          label: 'Core Features',
          type: 'category',
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
          label: 'Additional Features',
          type: 'category',
          items: [
            'additional-features/overview',
            'additional-features/documentation',
            'additional-features/social-authentication',
            'additional-features/localization',
            'additional-features/payments',
          ],
        },
      ]
    },
    {
      'Components': [
        {
          label: 'Main Components',
          type: 'category',
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
          label: 'Optional Components',
          type: 'category',
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
            'optional-components/helpers',
            'optional-components/commands',
            'optional-components/jobs',
            'optional-components/languages',
            'optional-components/events',
            'optional-components/mails',
            'optional-components/notifications',
            'optional-components/values'
          ],
        },
      ]
    },
    {
      label: 'Miscellaneous',
      type: 'category',
      items: [
        'miscellaneous/tests-helpers',
        'miscellaneous/tasks-scheduling',
        'miscellaneous/tasks-queuing',
      ],
    },
    'upgrade-guide',
    'contribution-guide',
    'faq',
    {
      label: 'Change Log',
      type: 'link',
      href: 'https://github.com/apiato/apiato/releases'
    },
  ],
};
