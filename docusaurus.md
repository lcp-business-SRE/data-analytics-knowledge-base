# Docusaurus を利用したSREデータ分析サイトの構築

## はじめに

このドキュメントは、Docusaurusを使用してSREデータ分析サイトを構築するための手順と設定を提供します。
また、各種カスタイマイズした内容やページ作成時の注意点についても説明します。

## 前提条件

Docusaurusは 2025年6月時点の最新バージョンである [Docusaurus 3.8](https://docusaurus.io/blog/releases/3.8) を使用しています。

## セットアップと各種設定

### まずはインストール

基本的には[公式](https://docusaurus.io/docs/installation)の手順で構築できるが、いくつか設定する箇所があるので、以下の手順を参考にしてください。

``` bash
npx create-docusaurus@latest my-website classic
cd my-website
```

### プロジェクトのディレクトリ構成

プロジェクトのディレクトリ構成は以下のようになります。

```plaintext
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock    
```

主要ディレクトリやファイルの説明は以下。

- `/blog/`
  - ブログのMarkdownファイルが格納
  - ブログプラグインを無効にしている場合はこのディレクトリを削除できます。また、pathオプションを設定した後にディレクトリ名を変更することもできます。詳細は[ブログガイド](https://docusaurus.io/docs/blog)を参照してください。
- `/docs/`
  - ドキュメント用のMarkdownファイル
  - ドキュメントサイドバーの表示順序をカスタマイズできますsidebars.js。ドキュメントプラグインを無効にしている場合はこのディレクトリを削除できます。また、オプションを設定した後にディレクトリ名を変更することもできます。詳細は[ドキュメントガイド](https://docusaurus.io/docs/docs-introduction)をご覧ください。
- `/src/`
  - ページやカスタムReactコンポーネントなどの非ドキュメントファイル
  - 非ドキュメントファイルを厳密にここに置く必要はありませんが、集中管理されたディレクトリに置くことで、何らかのリンティングや処理が必要になった場合に指定しやすくなります。
- `/src/pages`
  - このディレクトリ内のJSX/TSX/MDXファイルはウェブサイトのページに変換されます。詳細は[ページガイド](https://docusaurus.io/docs/creating-pages)をご覧ください。
- `/static/build`
  - 静的ディレクトリ。ここにある内容はすべて最終ディレクトリのルートにコピーされます。
- `/docusaurus.config.js`
  - サイト設定を含む設定ファイル
- `/sidebars.js`
  - ドキュメントがサイドバー内のドキュメントの順序を指定するために使用されます

## GitHub Pagesへのデプロイするための必要な設定

### `docusaurus.config.js` の設定
以下の設定を `docusaurus.config.js` に追加または修正します。

```javascript:docusaurus.config.js
module.exports = {
  // ... 他の設定 ...
  url: 'https://<username>.github.io',
  baseUrl: '/<repository-name>/',
  // ... 他の設定 ...
};
```

## 新規ページ作成（Docページ）

新しいドキュメントページを作成するには、以下のコマンドを実行します。

```bash
npx docusaurus generate docs <ドキュメント名>
```

ですが、面倒なので既存のページをコピーしてください。

### 基本設定を変更する

mdファイルのヘッダ部分に以下のような記載があります。

```markdown
---
sidebar_position: 2
title: 1. データの可視化の基礎
description: データを分かりやすく表現するための基本的な知識とスキルを習得します。
tags: [データ分析, 基礎, 可視化]
custom_react_root: true # コメント有無
---
```

これらは docusaurus の設定で、以下のような意味があります。
- `sidebar_position`: サイドバーでの表示順序を指定します。数値が小さいほど上に表示されます。
- `title`: ページのタイトルを指定します。
- `description`: ページの説明を指定します。検索エンジンやSNSでのプレビューに使用されます。
- `tags`: ページに関連するタグを指定します。これにより、同じタグを持つページがグループ化されます。 
- `custom_react_root`: 対象ページにコメント入力欄を追加したくない場合は `false` にしてください。デフォルト `true` です。








## 新規ページ作成（blogページ）


## よく使うページ表現（Markdown記法など）



## 参考資料

- [公式参考](https://docusaurus.io/docs/installation)


