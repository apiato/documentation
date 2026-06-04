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
  // Single markdown config. (Previously declared twice — the second `markdown`
  // key silently clobbered this one, dropping the broken-link hook.)
  markdown: {
    mermaid: true,
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

  // Structured-data identity for Google Knowledge Graph + LLM citations.
  // Apiato's author Mahmoud Zalt is linked to his Wikidata item (Q140002792).
  headTags: [
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Apiato",
        alternateName: "Apiato PHP Framework",
        url: "https://apiato.io",
        sameAs: ["https://github.com/apiato/apiato"],
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "PHP API Framework",
        operatingSystem: "Linux, macOS, Windows",
        programmingLanguage: "PHP",
        softwareRequirements: "PHP, Laravel",
        license: "https://opensource.org/licenses/MIT",
        datePublished: "2016-01-01",
        isAccessibleForFree: true,
        keywords:
          "PHP, Laravel, API, framework, Porto, clean architecture, scalable API, REST API",
        image: "https://apiato.io/img/apiato.png",
        downloadUrl: "https://github.com/apiato/apiato",
        softwareHelp: "https://apiato.io/docs/getting-started/introduction",
        description:
          "A modern PHP framework built on top of Laravel for building scalable, maintainable APIs using the Porto clean-architecture pattern.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Person",
          name: "Mahmoud Zalt",
          url: "https://zalt.me",
          sameAs: ["https://www.wikidata.org/wiki/Q140002792"],
        },
      }),
    },
    {
      tagName: "script",
      attributes: { type: "application/ld+json" },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Apiato",
        url: "https://apiato.io",
        description:
          "Official documentation for Apiato, a PHP API framework built on Laravel.",
        inLanguage: "en",
        publisher: {
          "@type": "Person",
          name: "Mahmoud Zalt",
          url: "https://zalt.me",
          sameAs: ["https://www.wikidata.org/wiki/Q140002792"],
        },
      }),
    },
  ],

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
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          lastmod: "date",
          ignorePatterns: ["/search", "/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

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
      // Default social card + SEO meta (per-page frontmatter can override).
      image: "img/apiato.png",
      metadata: [
        {
          name: "keywords",
          content:
            "apiato, php framework, laravel api, porto pattern, clean architecture, rest api, scalable api, php api framework",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
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
