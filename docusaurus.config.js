/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Apiato',
  tagline: 'Build scalable API\'s faster | With PHP and Laravel',
  url: 'https://apiato.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'apiato',
  projectName: 'documentation',
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  themeConfig: {
    hideableSidebar: true,
    // announcementBar: {
    //   id: 'v1-new-domain',
    //   content:
    //     '➡️ We are trying hard to move to version 10.0 of Apiato 🔄',
    // },
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
          position: 'left',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            // {
            //   to: '/versions',
            //   label: 'All versions',
            // },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        //   dropdownItemsAfter: [
        //     {
        //       to: 'https://github.com/moslem-deris/docs/issues',
        //       label: 'Help Us Translate',
        //     },
        //   ],
        // },
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
              to: '/docs',
            },
            {
              label: 'Porto Architecture',
              to: 'https://github.com/Mahmoudz/Porto#porto-software-architectural-pattern',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord Server',
              href: 'https://discord.gg/ryPcV4KM5k',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/apiato/apiato/issues',
            },
          ],
        },
        {
          title: 'Contributors',
          items: [
            {
              label: 'Contribution Guide',
              href: '/docs/general/contribution-guide',
            },
            {
              label: 'Code of Conduct',
              href: 'https://github.com/apiato/apiato/blob/9.0/CODE_OF_CONDUCT.md',
            },
          ],
        },
        {
          title: 'Sponsors',
          items: [
            {
              label: 'Our Sponsors',
              href: 'https://github.com/apiato/apiato#sponsors',
            },
            {
              label: 'Become a Sponsor',
              href: 'https://opencollective.com/apiato',
            },
          ],
        },
      ],
      copyright: `Copyright © 2016 - ${new Date().getFullYear()}`,
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
      apiKey: '5a14b34a43f1bba00c8f096d48577fa8',
      indexName: 'apiato',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},
    },
  },
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/apiato/documentation/tree/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
