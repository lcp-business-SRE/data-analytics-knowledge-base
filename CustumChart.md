# SRE ガイドサイトにおけるグラフ表示機能

このREADMEは、DocusaurusベースのSREガイドサイトにおけるグラフ表示機能のセットアップ方法、利用方法、および開発者向けの設計情報を提供します。
※すでに組み込まれているため、参考情報としてご覧ください。

## 1. 概要

本サイトでは、ドキュメントにグラフを組み込むことで、データやメトリクスを視覚的に分かりやすく表現することを目的としています。グラフの描画には、市場で広く利用され、使い勝手と見栄えの良いChart.jsライブラリを使用し、ReactコンポーネントとしてDocusaurusのMarkdown（MDX）ファイルから直接利用できるように設計されています。

また、開発効率と型安全性を高めるため、TypeScriptで実装されています。

## 2. 開発者向け設計書

### 2.1. アーキテクチャ

- **Chart.js + React-Chartjs-2**: グラフ描画のコアライブラリとしてChart.jsを使用し、React環境で効率的に利用するためにreact-chartjs-2ラッパーを使用しています。

- **TypeScript**: コンポーネントおよび関連する型定義はTypeScriptで記述されており、堅牢性と開発体験を向上させています。

- **汎用コンポーネント (SreGenericChart.tsx)**: グラフの種類（棒、折れ線、円など）、データ、および表示オプションをプロパティとして受け取る単一のコンポーネントとして設計されています。これにより、グラフ描画ロジックが一元管理され、Markdownの記述をシンプルに保ちます。

- **MDXProviderによるグローバル登録**: Docusaurusのテーマシャドウイング機能を利用し、src/theme/MDXComponents.jsでSreGenericChartコンポーネントをグローバルに登録しています。これにより、各Markdown（MDX）ファイルで個別にimport文を記述する必要がなくなります。

- **表示位置とスタイリング**: グラフのコンテナ要素は、中央揃え、最大幅、左右のマージンをデフォルトで適用するように設計されています。MarkdownからmaxWidthやcontainerStyleプロップを渡すことで、個別のグラフ表示をカスタマイズできます。

- **補助線**: `referenceLines`（水平）と `referenceXLines`（垂直）プロパティで、目標値や平均値などの基準線をグラフに追加できます。各補助線には `y`/`x`（値）、`color`（色）、`label`（ラベルテキスト）、`labelPosition`（ラベル位置: 水平線は `'left'`/`'right'`、垂直線は `'top'`/`'bottom'`）を指定できます。

- **データラベル**: `chartjs-plugin-datalabels` を組み込んでおり、`chartOptions.plugins.datalabels` でデータポイントへの直接ラベル表示が可能です。デフォルトは非表示（`display: false`）です。`display: true` または条件式で有効化できます。

### 2.2. セットアップ手順

この機能を利用・開発するために必要な手順です。

1. **必要なnpmパッケージのインストール**

``` bash
//プロジェクトルートへの移動
cd data-analytics-guides

// グラフ表示機能の依存関係をインストール
// Chart.js v4 は型定義を同梱しているため、@types/chart.js は不要です。
npm install chart.js react-chartjs-2
npm install --save-dev typescript @types/react @types/node

// 既存環境で @types/chart.js を入れている場合は削除
npm uninstall @types/chart.js

// データラベル表示プラグインのインストール
npm install chartjs-plugin-datalabels
```

`package.json` と `package-lock.json` が更新されます。
これにより、GitHubPagesへのビルドは自動的に新しい依存関係を含むようになります。

2. **汎用グラフコンポーネントの作成**

チャートカスタムコンポーネントを作成します。

> src/components/SreGenericChart.tsx

グローバルコンポーネントとしての登録します。

> src/theme/MDXComponents.js

を作成しています。

以上により、マークダウンファイルで直接グラフを表現する環境が整っています。

### 2.3. データラベルの使い方

`chartjs-plugin-datalabels` を利用して、バーや折れ線の各データポイントに直接ラベルを表示できます。

デフォルトは非表示です。`chartOptions.plugins.datalabels` で設定を追加することで有効化されます。

**全ポイントに値を表示する例:**

```jsx
chartOptions={{
  plugins: {
    datalabels: {
      display: true,
      formatter: function(value) { return value + '千円'; },
    },
  },
}}
```

**特定のポイントだけ表示する例（最後のポイントのみ）:**

```jsx
chartOptions={{
  plugins: {
    datalabels: {
      display: function(context) {
        return context.dataIndex === context.dataset.data.length - 1;
      },
      formatter: function(value, context) {
        return context.dataset.label;
      },
      align: 'right',
      anchor: 'end',
    },
  },
}}
```

**最大値・最小値のみ表示する例:**

```jsx
chartOptions={{
  plugins: {
    datalabels: {
      display: function(context) {
        const data = context.dataset.data;
        const value = data[context.dataIndex];
        return value === Math.max(...data) || value === Math.min(...data);
      },
      formatter: function(value) { return value + '件'; },
    },
  },
}}
```

主なオプションは以下のとおりです。詳細は [chartjs-plugin-datalabels 公式ドキュメント](https://chartjs-plugin-datalabels.netlify.app/) を参照してください。

| オプション | 型 | 説明 |
|---|---|---|
| `display` | `boolean \| function` | 表示するかどうか。関数でコンテキスト（dataIndex など）に応じた制御が可能 |
| `formatter` | `function(value, context)` | ラベルとして表示する文字列を返す関数 |
| `color` | `string` | ラベルの文字色 |
| `align` | `string` | アンカー点に対するラベルの方向（`'top'`, `'bottom'`, `'left'`, `'right'`, `'center'` など）|
| `anchor` | `string` | データポイントのどこを基準にするか（`'start'`, `'center'`, `'end'`）|
