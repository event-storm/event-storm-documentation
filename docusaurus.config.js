// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Event Storm',
  tagline: 'Store sulution with decentralized subscription',
  url: 'https://event-storm.github.io',
  baseUrl: '/event-storm-documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/event-storm.png',
  organizationName: 'event-storm',
  projectName: 'event-storm-documentation.github.io',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/event-storm/event-storm-documentation/tree/main/docs/${docPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'GTM-WXRQ7QL',
        },
      }),
      {
        gtag: {
          trackingID: 'GTM-WXRQ7QL',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: '/img/event-storm.png',
      navbar: {
        title: 'Event Storm',
        logo: {
          alt: 'Event Storm Logo',
          src: '/img/event-storm.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Documenation',
          },
          {
            type: 'doc',
            docId: 'faq',
            position: 'right',
            label: 'FAQ',
          },

          {
            type: 'doc',
            docId: 'terminology',
            position: 'right',
            label: 'Terminology',
          },
          {
            type: 'doc',
            docId: 'concepts/overview',
            position: 'right',
            label: 'Main concepts',
          },
          {
            type: 'doc',
            docId: 'bindings/overview',
            position: 'right',
            label: 'Official bindings',
          },
          {
            type: 'doc',
            docId: 'api-reference/overview',
            position: 'right',
            label: 'API Reference',
          },
          {
            href: 'https://github.com/event-storm/event-storm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Terminology',
                to: '/docs/terminology',
              },
              {
                label: 'Motivation',
                to: '/docs/motivation',
              },
              {
                label: 'Main concepts',
                to: '/docs/concepts/overview',
              },
              {
                label: 'Offical bindings',
                to: '/docs/bindings/overview',
              },
              {
                label: 'API Reference',
                to: '/docs/api-reference/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/event-storm',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/event-storm',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/event-storm',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Report an issue',
                href: 'https://github.com/event-storm/event-storm/issues',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/event-storm/event-storm',
              },
            ],
          },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} Artur Gevorgyan, Event Storm organization.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
