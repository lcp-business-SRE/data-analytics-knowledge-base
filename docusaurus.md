# SREデータ分析サイト構築ガイド（Docusaurus利用）

## 概要

本ドキュメントは、Docusaurus（バージョン3.8）を用いたSREデータ分析サイトの構築手順、設定方法、およびカスタマイズ例を体系的に解説します。

## 前提条件

- Docusaurus 3.8（2025年6月時点の最新版）を使用します。
- Node.js、npmがインストールされていることを前提とします。

## セットアップ手順

### インストール

公式ドキュメント（[インストールガイド](https://docusaurus.io/docs/installation)）に従い、以下のコマンドでプロジェクトを作成します。

```bash
npx create-docusaurus@latest my-website classic
cd my-website
```

### ディレクトリ構成

プロジェクトの主なディレクトリ構成は以下の通りです。

```plaintext
my-website/
├── blog/
├── docs/
├── src/
│   ├── css/
│   └── pages/
├── static/
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `blog/`：ブログ記事用Markdownファイル（不要な場合は削除可）
- `docs/`：ドキュメント用Markdownファイル
- `src/`：カスタムReactコンポーネントやページ
- `static/`：静的ファイル（画像等）
- `docusaurus.config.js`：サイト全体の設定ファイル
- `sidebars.js`：ドキュメントサイドバーの順序設定

詳細は[公式ガイド](https://docusaurus.io/docs/docs-introduction)を参照してください。

## デザインカスタマイズ

### カラーパレットの変更

`src/css/custom.css`に以下を追加し、カラーパレットを調整します。

```css
:root {
  --ifm-color-primary: #006290;
  --ifm-color-primary-dark: #005882;
  --ifm-color-primary-darker: #00537a;
  --ifm-color-primary-darkest: #004565;
  --ifm-color-primary-light: #006c9e;
  --ifm-color-primary-lighter: #0071a6;
  --ifm-color-primary-lightest: #007fbb;
  --ifm-background-color: #ffffff;
  --ifm-code-background: #f6f7f8;
}
[data-theme='dark'] {
  --ifm-color-primary: #7fc3e2;
  --ifm-color-primary-dark: #62b6db;
  --ifm-color-primary-darker: #54afd8;
  --ifm-color-primary-darkest: #2e99c9;
  --ifm-color-primary-light: #9cd0e9;
  --ifm-color-primary-lighter: #aad7ec;
  --ifm-color-primary-lightest: #d5ebf6;
  --ifm-background-color: #1a1a2e;
  --ifm-background-surface-color: #21213e;
  --ifm-code-background: #23233c;
  --ifm-font-color-base: #f0f0f0;
  --ifm-font-color-secondary: #aaaaaa;
  --ifm-color-emphasis-300: #44445c;
  --ifm-color-emphasis-200: #33334c;
  --ifm-color-emphasis-100: #2a2a40;
  --ifm-navbar-background-color: #21213e;
}
```

### フォントの変更

読みやすさを重視し、以下のフォント設定を`src/css/custom.css`に追加します。

```css
:root {
  --ifm-font-family-base: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "MS Pゴシック", "MS PGothic", sans-serif;
  --ifm-font-family-monospace: "游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "MS Pゴシック", "MS PGothic", sans-serif;
}
```

## YoutTube動画の埋め込みのためのパッケージ導入

DocusaurusのページにYouTube動画を表示する一番簡単で推奨される方法は、react-lite-youtube-embed という軽量なライブラリをMDXファイル内で使うことです。これにより、ページの読み込み速度を損なうことなく、簡単に動画を埋め込むことができます。

### インストール

```bash
npm install react-lite-youtube-embed
```

また、このライブラリはデフォルトのスタイルシートを必要とします。
`docusaurus.config.js` の`stylesheets`配列に、スタイルシートのパスを追加します。

```js
export default {
  // ...他の設定
  stylesheets: [
    // ...他のスタイルシート
    'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css',
  ],
};
```

### グローバルコンポーネントの登録

まず、swizzleコマンドを実行して、MDXコンポーネントをカスタマイズするためのファイルをプロジェクト内に作成します。

```bash
npx docusaurus swizzle @docusaurus/theme-classic MDXComponents
```

このコマンドにより、`src/theme/MDXComponents.js` ファイルが生成されます。
このファイルに、YouTube動画を埋め込むためのコンポーネントを追加します。

```js : src/theme/MDXComponents.js
import React from 'react';
// デフォルトのMDXComponentsをインポートします
import MDXComponents from '@theme-original/MDXComponents';
// YouTubeコンポーネントをインポートします
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

export default {
  // デフォルトのコンポーネントをすべて維持します
  ...MDXComponents,
  // 'YouTube'という名前でカスタムコンポーネントを追加します
  YouTube: LiteYouTubeEmbed,
};
```

これで、サイト全体でYouTubeというコンポーネントが使えるようになりました。

### .mdファイルでの使用

あとは、動画を埋め込みたい.mdファイルで、import文なしにコンポーネントを呼び出すだけです。

```markdown
# グローバルコンポーネントを使った例

`swizzle`で設定したので、`import`なしで使えます！

<YouTube
  id="ogfYd705cRs"
  title="What is Docusaurus?"
/>

```

とてもすっきり書けますね。

## GitHub Pagesへのデプロイ

### `docusaurus.config.js` の設定例

```js
module.exports = {
  url: 'https://<username>.github.io',
  baseUrl: '/<repository-name>/',
  // ...その他の設定
};
```

## 参考資料

- [Docusaurusカスタマイズガイド](https://docusaurus.io/docs/customization)
- [Docusaurus Markdownガイド](https://docusaurus.io/docs/markdown-features)
