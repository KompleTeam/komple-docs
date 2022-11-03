// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Komple Documentation',
  tagline: 'Documentation for Komple',
  url: 'https://docs.komple.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KompleTeam', // Usually your GitHub org/user name.
  projectName: 'komple-docs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: 'Komple',
        logo: {
          alt: 'Komple Logo',
          src: 'img/logo.png',
          style: { borderRadius: '4px' }
        },
        items: [
          {
            type: 'doc',
            docId: 'komple-framework/overview',
            position: 'left',
            label: 'Komple Framework',
          },
          {
            type: 'doc',
            docId: 'komplejs/overview',
            position: 'left',
            label: 'KompleJS',
          },
          {
            type: 'doc',
            docId: 'marbu/overview',
            position: 'left',
            label: 'Marbu',
          },
          {
            href: 'https://github.com/KompleTeam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Komple Framework',
                to: '/komple-framework/overview',
              },
              {
                label: 'KompleJS',
                to: '/komplejs/overview',
              },
              {
                label: 'Marbu',
                to: '/marbu/overview',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/ZEud45TYf6',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/KompleSocial',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KompleTeam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Komple. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust']
      },
    }),
};

module.exports = config;
