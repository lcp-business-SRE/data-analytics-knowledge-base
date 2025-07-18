import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {

  dataAnalysisSidebar: [
    {
      type: 'category',
      label: 'イントロダクション',
      link: {
        type: 'doc',
        id: 'data-analysis/index', // ここはindex.mdファイル
      },
      items: [], // イントロのみなら空配列
    },
    {
      type: 'category',
      label: 'データ分析の基礎',
      link: {
        type: 'doc',
        id: 'data-analysis/fundamentals/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-analysis/fundamentals',
        },
      ],
    },
    {
      type: 'category',
      label: 'データ分析の応用',
      link: {
        type: 'doc',
        id: 'data-analysis/applications/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-analysis/applications',
        },
      ],
    },
  ],

  dataPlatformSidebar: [
    {
      type: 'category',
      label: 'イントロダクション',
      link: {
        type: 'doc',
        id: 'data-platform/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'データ基盤の基礎',
      link: {
        type: 'doc',
        id: 'data-platform/fundamentals/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-platform/fundamentals',
        },
      ],
    },
    {
      type: 'category',
      label: 'データ基盤の応用',
      link: {
        type: 'doc',
        id: 'data-platform/applications/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-platform/applications',
        },
      ],
    },
  ],

  dataInformationSidebar: [
    {
      type: 'category',
      label: 'イントロダクション',
      link: {
        type: 'doc',
        id: 'data-informations/index',
      },
      items: [],
    },
    {
      type: 'category',
      label: '実践ガイド',
      link: {
        type: 'doc',
        id: 'data-informations/guides/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-informations/guides',
        },
      ],
    },
    {
      type: 'category',
      label: 'サービス・製品',
      link: {
        type: 'doc',
        id: 'data-informations/services/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-informations/services',
        },
      ],
    },
    {
      type: 'category',
      label: 'その他情報',
      link: {
        type: 'doc',
        id: 'data-informations/news/index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'data-informations/news',
        },
      ],
    },
  ],

};

export default sidebars;
