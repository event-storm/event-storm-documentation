// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Event storm',
  tagline: 'Store sulution with decentralized subscription',
  url: 'https://eventstorm.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/event-storm.png',
  organizationName: 'event-storm',
  projectName: 'event-storm-documentation',
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
          editUrl: ({ docPath }) => `https://github.com/event-storm/event-storm-documentation/tree/main/${docPath}`,
        },
        blog: {
          showReadingTime: true,
          editUrl: ({ blogPath }) => `https://github.com/event-storm/event-storm-documentation/tree/main/${blogPath}`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Event Storm',
        logo: {
          alt: 'Event Storm Logo',
          src: 'img/event-storm.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
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
                label: 'Tutorial',
                to: '/docs/intro',
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
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/event-storm',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/event-storm',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/event-storm/event-storm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Event Storm, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
