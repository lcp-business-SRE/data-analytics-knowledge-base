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

## GitHub Pagesへのデプロイ

### `docusaurus.config.js` の設定例

```js
module.exports = {
  url: 'https://<username>.github.io',
  baseUrl: '/<repository-name>/',
  // ...その他の設定
};
```

## 新規ページ作成（ドキュメント）

新しいドキュメントページは、`docs/`ディレクトリにMarkdownファイルを追加することで作成できます。

ページのメタデータはファイル冒頭にFront Matter形式で記述します。

```markdown
---
sidebar_position: 2
title: 1. データの可視化の基礎
description: データを分かりやすく表現するための基本的な知識とスキルを習得します。
tags: [データ分析, 基礎, 可視化]
custom_react_root: true
---
```

各項目の意味：

- `sidebar_position`: サイドバーでの表示順序
- `title`: ページタイトル
- `description`: ページ説明（SEOやSNSプレビュー用）
- `tags`: ページ分類用タグ
- `custom_react_root`: コメント欄の有無（`false`で非表示）
- `draft`: 下書き状態（`true`で非公開）
- `hide_table_of_contents`: 目次非表示
- `hide_title`: タイトル非表示
- `hide_edit_url`: 編集リンク非表示
- `unlisted`: サイトマップ非掲載
- `slug`: URLパスのカスタマイズ

詳細は[Front Matter公式ドキュメント](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages#hide_table_of_contents)を参照してください。

## Markdown記法ガイド

Docusaurusでは標準的なMarkdown記法に加え、独自の拡張機能も利用できます。

### 主な記法例

- 見出し：`#` ～ `###`
- リスト：`-`、`*`、数字
- リンク：`[テキスト](URL)`
- 画像：`![説明](URL)`
- コードブロック：\`\`\`言語名
- Admonition（注釈）：`:::note` など
- タブ：`<Tabs>`コンポーネント
- 引用：`>`
- テーブル：`|`区切り
- 強調：`*イタリック*`、`**ボールド**`
- 水平線：`---`または`***`
- タグ：`<tag>タグ名</tag>`
- タスクリスト：`- [ ]`、`- [x]`
- 数式：`$E=mc^2$`（KaTeX対応）
- コメント：`<!-- コメント内容 -->`
- カスタムHTML/Reactコンポーネントの埋め込み

詳細な記法や拡張機能は[Markdownガイド](https://docusaurus.io/docs/markdown-features)を参照してください。

### 注意事項

- 画像やリンクのパスはプロジェクトルートからの相対パス推奨
- Docusaurusのバージョンによって記法や機能が異なる場合があるため、常に最新ドキュメントを参照してください

## 参考資料

- [Docusaurus公式インストールガイド](https://docusaurus.io/docs/installation)
- [Docusaurus設定ガイド](https://docusaurus.io/docs/configuration)
- [Docusaurusカスタマイズガイド](https://docusaurus.io/docs/customization)
- [Docusaurus Markdownガイド](https://docusaurus.io/docs/markdown-features)
