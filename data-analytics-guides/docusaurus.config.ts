import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// import remarkMermaid from 'remark-mermaid';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SRE データ分析学習サイト',
  tagline: 'データ分析のための学習コンテンツ',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://lcp-business-SRE.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/data-analytics-knowledge-base/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lcp-business-SRE', // Usually your GitHub org/user name.
  projectName: 'data-analytics-knowledge-base', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  plugins: [
    // Google Analytics (GA4) の設定
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-LDY25SJG9H', // ★あなたのGA4測定IDに置き換えてください
        anonymizeIP: true,
      },
    ],
  ],
  // marmaidの利用設定
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor : true,    // 最終更新者の名前を表示するかどうか (boolean)。
          showLastUpdateTime : true,      // 最終更新日時を表示するかどうか (boolean)。
          breadcrumbs: true,          // パンくずリストを表示するかどうか (boolean)。 
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lcp-business-SRE/data-analytics-knowledge-base/tree/master/data-analytics-guides',
          // remarkPlugins: [remarkMermaid], // mermaid
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lcp-business-SRE/data-analytics-knowledge-base/tree/master/data-analytics-guides',
          // remarkPlugins: [remarkMermaid], // mermaid
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
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SRE DataAnalytics',
      logo: {
        alt: 'SRE データ分析学習サイト',
        src: 'img/logo.svg',
      },
      items: [
        // データ分析ドキュメントへのリンク
        {
          type: 'docSidebar', // サイドバーに紐付けるためのタイプ
          sidebarId: 'dataAnalysisSidebar', // sidebars.ts で定義したID
          position: 'left',
          label: 'データ分析', // ナビゲーションバーに表示されるテキスト
          // ドキュメントの最初のページへのリンク（オプション、設定しない場合 Docusaurus が自動で解決）
          to: '/docs/data-analysis/fundamentals/index',
        },
        // データ基盤ドキュメントへのリンク
        {
          type: 'docSidebar', // サイドバーに紐付けるためのタイプ
          sidebarId: 'dataPlatformSidebar', // sidebars.ts で定義したID
          position: 'left',
          label: 'データ基盤', // ナビゲーションバーに表示されるテキスト
          to: '/docs/data-platform/fundamentals/index',
        },
        // データ分析関連情報ドキュメントへのリンク
        {
          type: 'docSidebar', // サイドバーに紐付けるためのタイプ
          sidebarId: 'dataInformationSidebar', // sidebars.ts で定義したID
          position: 'left',
          label: '関連情報', // ナビゲーションバーに表示されるテキスト
          to: '/docs/data-informations/index',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lcp-business-SRE/data-analytics-knowledge-base',
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
              label: 'データ分析',
              to: '/docs/data-analysis/fundamentals',
            },
            {
              label: 'データ基盤',
              to: '/docs/data-platform/fundamentals',
            },
            {
              label: '関連情報',
              to: '/docs/data-informations',
            },          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'SRE Portal',
              href: 'https://sites.google.com/mb.lecip.co.jp/business-dx/dx-sol',
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
              href: 'https://github.com/lcp-business-SRE/data-analytics-knowledge-base',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SRE Data Analytics Project, Inc. Built with Docusaurus.`,
    },
    // mermaid: true, // Enable Mermaid diagrams

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
