# Docusaurus を利用したSREデータ分析サイトの構築

## 概要
このドキュメントは、Docusaurusを使用してSREデータ分析サイトを構築するための手順と設定を提供します。Docusaurusは、静的なウェブサイトを簡単に作成できるオープンソースのフレームワークです。
## インストール
Docusaurusを使用して新しいウェブサイトを作成するには、以下のコマンドを実行します。これにより、Docusaurusの最新バージョンがインストールされ、基本的なプロジェクト構造が生成されます。

基本的には[公式](https://docusaurus.io/docs/installation)の手順で構築できるが、いくつか設定する箇所があるので、以下の手順を参考にしてください。


``` bash
npx create-docusaurus@latest my-website classic
cd my-website
```

## プロジェクトのディレクトリ構成

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




## 参考資料

- [公式参考](https://docusaurus.io/docs/installation)


