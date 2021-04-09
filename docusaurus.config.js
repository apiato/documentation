/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Apiato',
  tagline: 'Build scalable API\'s faster | With PHP 7.4 and Laravel 8.0',
  url: 'https://apiato.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'apiato', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'v1-new-domain',
      content:
        '➡️ We are trying hard to move to version 10.0 of Apiato 🔄',
    },
    navbar: {
      title: 'Apiato',
      logo: {
        alt: 'Apiato Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: 'https://github.com/apiato/apiato/releases',
              label: 'All versions',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://github.com/moslem-deris/docs/issues',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/apiato/apiato',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/apiato',
            },
            {
              label: 'Slack',
              href: 'https://apiato.slack.com/join/shared_invite/zt-mtriung2-1__8zBAaJO_xXa_kMFsHgQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apiato/apiato',
            },
          ],
        },
      ],
      copyright: `Copyright © 2016 - ${new Date().getFullYear()} Apiato. Built with Love.`,
    },
    prism: {
      additionalLanguages: ['php'],
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    googleAnalytics: {
      trackingID: 'G-MZQHHV9P45',
      //  Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    algolia: {
      appId:'VE6XFC7CDM',
      apiKey: '091d0d3c9ca7d164fa88d5ea8fff83a2',
      indexName: 'prod_APIATO',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/moslem-deris/docs/edit/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/moslem-deris/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
