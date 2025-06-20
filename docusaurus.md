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

---

## おすすめ情報

### Docusaurusの公式ドキュメント

Docusaurusの公式ドキュメントは、非常に充実しており、各種機能や設定方法について詳しく説明されています。特に、以下のセクションが役立ちます。

- [Docusaurusのインストール](https://docusaurus.io/docs/installation)
- [Docusaurusの設定](https://docusaurus.io/docs/configuration)
- [Docusaurusのカスタマイズ](https://docusaurus.io/docs/customization)
- [DocusaurusのMarkdownガイド](https://docusaurus.io/docs/markdown-features)

### ページ内マークダウン

Docusaurusでは、Markdownを使用してページを作成できます。以下は、Docusaurusでよく使われるMarkdownの記法です。

#### 見出し

見出しは`#`を使用して作成します。`#`の数が多いほど、見出しのレベルが下がります。
一般的には3つのレベルまでの使用を推奨しています。

```markdown
# 見出し1
## 見出し2 
### 見出し3
```

#### リスト

リストは、`-`、`*`、または数字を使用して作成します。

```markdown
- アイテム1
- アイテム2
1. アイテム1
2. アイテム2
```

#### リンク

リンクは、`[リンクテキスト](URL)`の形式で作成します。

```markdown
[Google](https://www.google.com)
```

#### 画像

画像は、`![代替テキスト](画像URL)`の形式で作成します。

```markdown
![画像の説明](https://example.com/image.png)
```

#### タブ

Docusaurus は、MDX<Tabs>のおかげで Markdown で使用できるコンポーネントを提供します。




#### コードブロック

コードブロックは、バッククォート3つで囲むことで作成します。

```markdown
```javascript
console.log('Hello, World!');
```
```

コードブロックの言語を指定することで、シンタックスハイライトが適用されます。
言語の後に`title=`を追加することで (間にスペースを入れてください)、コード ブロックにタイトルを追加できます。

```markdown
```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
```

#### 注釈
注釈は、`:::note`を使用して作成します。

```markdown
:::note
これは注釈です。
:::
:::tip
これはヒントです。
:::
:::warning
これは警告です。
:::
:::danger
これは危険です。
:::
:::caution
これは注意です。
:::
```

オプションでタイトルを指定することもできます。

```markdown
:::note[タイトル]
これは注釈です。
:::
```

#### タブ

Docusaurus は、MDX`<Tabs>`のおかげで Markdown で使用できるコンポーネントを提供します。

````markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

#### 引用

引用は、`>`を使用して作成します。

```markdown
> これは引用です。
```

#### テーブル

テーブルは、`|`を使用して作成します。

```markdown
| ヘッダー1 | ヘッダー2 |
| --- | --- |
| セル1 | セル2 |
```
左寄せ、中央寄せ、右寄せのセルを作成するには、`:`を使用します。

```markdown
| 左寄せ | 中央寄せ | 右寄せ |
| :--- | :---: | ---: |
| セル1 | セル2 | セル3 |
```

#### 強調

強調は、`*`または`_`を使用して作成します。
```markdown
*イタリック***ボールド**
```

#### 水平線

水平線は、`---`または`***`を使用して作成します。

```markdown
---
```

#### タグ

タグは、`<tag>`の形式で作成します。Docusaurusでは、
タグを使用してページを分類することができます。

```markdown
<tag>タグ名</tag>
```

#### タイトルと説明

タイトルと説明は、ページのメタデータとして設定できます。Docusaurusでは、以下のように設定します。

```markdown
---
title: ページのタイトル
description: ページの説明
---
```

#### タスクリスト

タスクリストは、`- [ ]`または`- [x]`を使用して作成します。

```markdown
- [ ] タスク1
- [x] タスク2
```

#### 数式

数式は、`$`で囲むことで作成します。Docusaurusでは
KaTeXを使用して数式をレンダリングします。

```markdown
$E=mc^2$
```

#### コメント

コメントは、`<!-- コメント内容 -->`の形式で作成します。
```markdown
<!-- これはコメントです -->
```

#### カスタムHTML

Docusaurusでは、Markdown内にカスタムHTMLを埋め込むこともできます。

```markdown
<div class="custom-class">
  これはカスタムHTMLです。
</div>
```

#### カスタムReactコンポーネント

Docusaurusでは、カスタムReactコンポーネントをMarkdown内で使用することもできます。

```markdown
import MyComponent from '@site/src/components/MyComponent';
<MyComponent />
```

#### 注意点

- Markdownの記法は、Docusaurusのバージョンによって異なる場合があります。最新のドキュメントを参照してください。
- Docusaurusでは、Markdownの拡張機能がいくつか提供されています。これにより、よりリッチなコンテンツを作成できます。
- Markdown内での画像やリンクのパスは、プロジェクトのルートディレクトリからの相対パスで指定することが推奨されます。
  - 例: `![画像の説明](/img/example.png)` のように、`/img/`ディレクトリに画像を配置することができます。
  - 相対パスを使用する場合は、`./`や`../`を使ってディレクトリを移動することもできます。
  - 画像やリンクのパスは、プロジェクトの構造に応じて適切に設定してください。
  - 画像やリンクのパスは、Docusaurusのビルドプロセスで正しく解決されるように、プロジェクトのルートディレクトリからの相対パスを使用することが推奨されます。


## 参考資料

- [公式参考](https://docusaurus.io/docs/installation)


