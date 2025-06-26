# Docusaurusで記事を書くときのマニュアル＆注意点

---

## 1. 記事執筆のためのマニュアル（執筆者向け）

### 基本ルール
- 記事は **Markdown形式（.md）** で書きます。
- 1記事＝1ファイルが基本です。
- ファイル名・タイトルは内容が分かるように。
- 先頭にYAMLフロントマター（---で囲む）を記載（例：タイトル・説明・タグなど）。
- 見出し（#）やリスト（-）などMarkdown記法を活用。
- 画像や図は `./assets/` フォルダ等に保存し、相対パスで参照。
- コードブロックや表もMarkdownで記述可能。
- 1つの記事は「目的→背景→手順→まとめ」など構成を意識。

### 執筆時の注意点
- 文章は「誰が読んでも分かる」ように、専門用語には注釈やリンクを。
- 1文1意、簡潔に。
- 画像や図はalt属性（説明文）を必ずつける。
- 変更履歴やバージョン管理はGitで自動化されるので、ファイル名やコミットメッセージも分かりやすく。
- プレビューでレイアウト崩れやリンク切れがないか必ず確認。

---

## 2. Docusaurusのファイル構成と役割（本リポジトリ例）

### `data-analytics-guides` ディレクトリ配下の構成と役割

`data-analytics-guides/` ディレクトリは、主に分析ガイドや関連ドキュメントを管理する場所です。以下のような構成になっています。

```
data-analytics-guides/
    docs/                    ← 記事・ドキュメント本体を格納
        data-analysis/         ← 分析関連の記事ディレクトリ
            fundamentals/        ← 基礎知識やコラム記事
                columns-dataanalysis-and-scenario-creation.md
                aws-cognito-for-junior.md
            ...                  ← その他のカテゴリや記事
    static/                  ← 画像や図などの静的ファイル
    ...
```

## 3. 記事作成の流れ

### 主に編集・追加する場所

- **記事を書く場合**：
  - `data-analytics-guides/docs/` 以下の適切なサブフォルダ（例：`fundamentals/`）に `.md` ファイルを新規作成
  - 画像をマークダウン記法で配置する場合は、`docs`配下のそれぞれの記事のルートディレクトリに`assets`フォルダを配置してそこを相対参照
  - ※画像をimgタグで挿入する場合は `static/` に保存し、記事から相対パスで参照

> 迷った場合は、既存のディレクトリ構成や記事を参考にしてください。

### もっとカスタマイズしたい場合

- **目次やサイドバーを編集したい場合**：
  - `sidebars.ts` で記事の並び順やカテゴリを調整
- **全体設定やカスタマイズ**：
  - `docusaurus.config.ts` でサイト名・テーマ・メニューなどを設定

---

## 4. 具体的に記事を作成する方法

基本はmarkdown形式で書くことになりますが、docusaurus特有の要素もあります。ここでは、それらを紹介します。

### 基本要素（Docusaurusにページを認識させるおまじない）

ページにメタデータを記述することで、Docusaurusがページを正しく認識することができます。
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
- `draft`: 下書き状態（`true`で非公開）
- `hide_table_of_contents`: 目次非表示
- `hide_title`: タイトル非表示
- `hide_edit_url`: 編集リンク非表示
- `unlisted`: サイトマップ非掲載
- `slug`: URLパスのカスタマイズ
- `custom_react_root`: コメント欄の有無（`false`で非表示）※SRE独自

詳細は[Front Matter公式ドキュメント](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-pages#hide_table_of_contents)を参照してください。

### Markdown記法ガイド

**主な記法例**

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


### SRE独自カスタム事項

#### ページ上にグラフを表示する方法

- グラフを表示するためのカスタムコンポーネント`SreGenericChart`を作成しています。
- セットアップされているため、マークダウン内で簡単にグラフを表現することができます。

**基本的な使い方**

`SreGenericChart`コンポーネントは、各Markdownページで`import`文を書く必要なく、直接利用できます。

基本サンプル
```markdown
<SreGenericChart
  chartType="bar"
  chartData={{ /* グラフのデータ */ }}
  chartOptions={{ /* グラフのオプション */ }}
/>
```

- `chartType` (必須): 表示したいグラフの種類を指定します。以下のいずれかの値を指定できます。
  - `"bar"`: 棒グラフ
  - `"line"`: 折れ線グラフ
  - `"pie"`: 円グラフ
  - `"doughnut"`: ドーナツグラフ
  - `"scatter"`: 散布図
  - `"radar"`: レーダーチャート
  - `"bubble"`: バブルチャート
- `chartData` (必須): グラフに表示するデータです。JSON形式で指定します。
  - データの形式は、`chartType`によって異なります。[Chart.js公式ドキュメントのデータ構造](https://www.chartjs.org/docs/latest/general/data-structures.html)を参照してください。
- `chartOptions` (オプション): グラフの表示に関する詳細なオプションです。JSON形式で指定します。
  - タイトル、凡例の位置、軸の表示、色、アニメーションなど、多岐にわたる設定が可能です。[Chart.js公式ドキュメントのオプション](https://www.chartjs.org/docs/latest/general/options.html)を参照してください。
  - 色指定: `backgroundColor`や`borderColor`などのプロパティで色を指定できます。RGBA形式 (`rgba(R, G, B, A)`) や16進数 (`#RRGGBB`)、色名 (`'red'`) などが利用可能です。

**グラフ表示位置とサイズ調整**

`SreGenericChart`は、デフォルトで中央揃えになり、最大幅が`700px`、左右に`20px`の内側余白が適用されます。これを変更したい場合は、以下のプロップを使用します。
- `maxWidth` (任意): グラフコンテナの最大幅を文字列で指定します。（例: `"800px"`, `"90%"`）。これにより、左右の余白が自動的に調整されます。
- `containerStyle` (任意): グラフを囲むdiv要素に適用されるCSSスタイルをJavaScriptオブジェクト形式で指定します。より詳細なスタイル調整が可能です。


使用例

```markdown
### 最大幅を調整した棒グラフ

<SreGenericChart
  chartType="bar"
  chartData={{
    labels: ['A', 'B', 'C'],
    datasets: [{ label: 'データ', data: [10, 20, 15], backgroundColor: 'rgba(75, 192, 192, 0.7)' }]
  }}
  chartOptions={{ plugins: { title: { display: true, text: '幅を広げたグラフ' } } }}
  maxWidth="80%" {/* ページ幅の80%に設定 */}
/>

### カスタムスタイルを適用した円グラフ

<SreGenericChart
  chartType="pie"
  chartData={{
    labels: ['部門1', '部門2'],
    datasets: [{ label: '予算', data: [60, 40], backgroundColor: ['rgba(54, 162, 235, 0.7)', 'rgba(255, 206, 86, 0.7)'] }]
  }}
  chartOptions={{ plugins: { title: { display: true, text: '背景色付きグラフ' } } }}
  containerStyle={{
    margin: '30px auto',  {/* 上下30px、左右autoで中央揃え */}
    padding: '25px',     {/* 内側のパディングを増やす */}
    backgroundColor: '#f0f8ff', {/* 背景色 */}
    borderRadius: '10px', {/* 角を丸くする */}
    boxShadow: '0 2px 5px rgba(0,0,0,0.15)' {/* 影 */}
  }}
  maxWidth="600px" {/* 具体的な最大幅を指定 */}
/>
```

### 注意事項

- 画像やリンクのパスはプロジェクトルートからの相対パス推奨
- Docusaurusのバージョンによって記法や機能が異なる場合があるため、常に最新ドキュメントを参照してください


## 参考資料

- [Docusaurusカスタマイズガイド](https://docusaurus.io/docs/customization)
- [Docusaurus Markdownガイド](https://docusaurus.io/docs/markdown-features)
