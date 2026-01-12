import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';

const production = true
const domainLink = production ? 'https://beyondbedrock.org' : 'http://localhost:3000';

/** @type {import('@docusaurus/types').Config} */
export default {
  onBrokenLinks: production ? 'throw' : 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownImages: production ? 'throw' : 'warn',
      onBrokenMarkdownLinks: production ? 'throw' : 'warn',

    },
  },

  title: 'Beyond Bedrock',
  tagline: 'Add-ons, resource packs, maps, and guides for Minecraft Bedrock.',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },

  url: domainLink,
  baseUrl: '/', 

  organizationName: 'beyond-bedrock',
  projectName: 'beyond-bedrock',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  trailingSlash: false,
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Hardcoded redirects from the old website
          {from: '/posts/statistics-add-on-121-12130--ae56c092', to: '/addons/statistics-add-on',},
          {from: '/posts/way-point-lodestone-travel-any-where--61b0ec01', to: '/addons/way-point-lodestone',},
          {from: '/posts/elevator-addon-v2-be-any-block--ebca8d80', to: '/addons/elevator-addon-v2',},
          {from: '/posts/player-heads-generator-3f5310a5', to: '/addons/player-heads-generator',},
          {from: '/posts/mobs-jar-add-on-v1-12190-hold-mobs-anywhere-288959be', to: '/addons/mobs-jar-addon',},
          {from: '/posts/useful-slime-add-on-12190-a59e8001', to: '/addons/useful-slime-addon',},
          {from: '/posts/teams-addon-beta--8a216803', to: '/addons/teams-addon-beta',},
          {from: '/posts/arabic-language-fix-add-on-83e84772', to: '/addons/arabic-language-fix-addon',},
        ],
      },
    ],
    './src/plugins/content-plugin.js',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/social-card.jpg',
      metadata: [
        {
          property: 'og:title',
          content: 'Beyond Bedrock: Minecraft Bedrock Add-ons, Guides, Maps, and Resource Packs',
        },
        {
          property: 'og:description',
          content:
            'Discover high-quality Minecraft Bedrock add-ons, Guides, maps, and resource packs. Free downloads and detailed guides.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'robots',
          content: production
            ? 'index, follow'
            : 'noindex, nofollow',
        },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Beyond Bedrock',
        logo: { alt: 'Beyond Bedrock Logo', src: 'img/logo.svg' },
        items: [
          { label: 'Add-ons', to: '/addons' },
          { label: 'Resource Packs', to: '/resource-packs' },
          { label: 'Maps', to: '/maps' },
          { label: 'Guides', to: '/guides' },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [{ label: 'Home', to: '/' }],
          },
          {
            items: [{ label: 'About', to: '/about' }],
          },
          {
            items: [{ label: 'Contact', to: '/contact' }],
          },
          {
            items: [{ label: 'Terms of Service', to: '/terms' }],
          },
          {
            items: [{ label: 'Privacy Policy', to: '/privacy' }],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Beyond Bedrock.`,
      },


      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};
