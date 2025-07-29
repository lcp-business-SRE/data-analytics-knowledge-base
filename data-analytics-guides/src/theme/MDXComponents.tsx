import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import SreGenericChart from '@site/src/components/SreGenericChart';

export default {
  ...MDXComponents,
  YouTube: LiteYouTubeEmbed,
  // 2. グローバルコンポーネントとして登録する
  SreGenericChart: SreGenericChart,
};