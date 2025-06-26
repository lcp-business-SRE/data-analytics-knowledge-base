// src/theme/MDXComponents.js
// TypeScriptコンポーネントをインポートする際も、拡張子を省略できます
import MDXComponents from '@theme-original/MDXComponents';
import SreGenericChart from '@site/src/components/SreGenericChart'; // .tsx 拡張子は不要

export default {
  ...MDXComponents,
  SreGenericChart: SreGenericChart,
};