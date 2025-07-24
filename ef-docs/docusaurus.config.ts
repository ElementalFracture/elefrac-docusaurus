import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Elemental Fracture',
  favicon: 'https://cdn.elefrac.com/assets/Logos/Socials-Logo-2.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.elefrac.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ElementalFracture', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Add this line to specify the new base path for your blog
          routeBasePath: 'patchnotes', // <--- Add this line
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'https://cdn.elefrac.com/assets/Logos/Elefrac-Logo-2025-LO.png',
    navbar: {
      logo: {
        alt: 'Elemental Fracture site logo',
        src: 'https://cdn.elefrac.com/assets/Logos/web-logo-black.png',
        srcDark: 'https://cdn.elefrac.com/assets/Logos/web-logo-white.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Quick-start Guide',
        },
        // Change the 'to' property to match your new routeBasePath
        {to: '/patchnotes', label: 'Patch Notes', position: 'left'}, // <--- Change this line
        {
          href: 'https://github.com/elementalfracture',
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
              label: 'Quick-Setup Guide',
              to: '/docs/intro',
            },
            {
              label: 'Client Documentation',
              to: '/docs/category/client-documentation',
            },
            {
              label: 'Frequently Asked Questions',
              to: '/docs/category/extra-information',
            },
            {
              label: 'Patch Notes',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://dsc.gg/elefrac',
            },
            {
              label: 'X (Formerly Twitter)',
              href: 'https://x.com/elefracture',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/elementalfracture',
            },
            {
              label: 'Twitch',
              href: 'https://twitch.tv/elementalfracture',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/elementalfracture/',
            },
            {
              label: 'Patreon',
              href: 'https://patreon.com/elementalfracture/'
            },
          ],
        },
      ],
      copyright: `<b>Elemental Fracture</b> is a community-driven project operating under the principles of <b>Fair Use</b> to preserve the online services of <i>Spellbreak</i>®, originally developed by <b>Proletariat, Inc.</b>, now a subsidiary of <b>Blizzard Entertainment</b>. <b>Elemental Fracture</b> is not affiliated with or endorsed by <b>Proletariat, Inc.</b>, and <b>all</b> individuals involved in this effort <b><i>receive no financial compensation for their participation</b></i>. Any donations made to the project are solely directed toward maintaining essential services, such as

      <a href="https://elefrac.com" target="_blank" rel="noreferrer noopener">our website</a>, game servers, and our content delivery network (CDN) for patch updates.

      While <i>Spellbreak</i>® has been abandoned by its developers, the concept of "Abandonware" <a href="https://en.wikipedia.org/wiki/Stardock_Systems,_Inc._v._Reiche" target="_blank" rel="noreferrer noopener">does not grant legal ownership or the right to republish proprietary intellectual property</a>.

      Our efforts align with the  <a href="https://en.wikipedia.org/wiki/Video_game_preservation" target="_blank" rel="noreferrer noopener">principles of video game preservation</a> and are supported by the <a href="https://www.federalregister.gov/d/2018-23241" target="_blank" rel="noreferrer noopener">2018 federal ruling</a> that provides exemptions for preserving online-only games under specific conditions.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;