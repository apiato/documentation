// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apiato",
  tagline: "Unearth Scale, Ignite Speed, and Conquer Complexity",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://apiato.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it often is '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "apiato", // Usually your GitHub org/username.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like HTML lang.
  // For example, if your site is Chinese, you may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/apiato/documentation/tree/master",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          disableVersioning: false,
          includeCurrentVersion: true,
          versions: {
            current: {
              label: `Next 🚧`,
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-CVZBKZ36Y5", // Update with your Google Analytics ID
          anonymizeIP: true,
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        appId: "OZKEC9E27Y",
        apiKey: "94a1a71e8682dac72c8708fa75280e2a",
        indexName: "apiato",
        contextualSearch: true,
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: false,
        //... other Algolia params
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Apiato",
        logo: {
          alt: "Apiato Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started/introduction",
            position: "left",
            label: "Docs",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              // {
              //   to: '/versions',
              //   label: 'All versions',
              // },
            ],
          },
          {
            href: "https://github.com/apiato/apiato",
            position: "right",
            className: "header-github-link",
          },
          {
            href: "https://discord.com/invite/ryPcV4KM5k",
            position: "right",
            className: "header-discord-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © 2016 - ${new Date().getFullYear()} - Apiato. Maintained by <a href="https://zalt.me" target="_blank" rel="noopener noreferrer">Mahmoud Zalt</a>, also building <a href="https://sistava.com" target="_blank" rel="noopener noreferrer">Sistava</a> at <a href="https://sista.ai" target="_blank" rel="noopener noreferrer">Sista AI</a>.`,
      },
      prism: {
        additionalLanguages: [
          "php",
          "php-extras",
          "phpdoc",
          "git",
          "bash",
          "json",
          "yaml",
          "docker",
          "diff",
        ],
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      colorMode: {
        defaultMode: 'dark',
      },
    }),
};

module.exports = config;
