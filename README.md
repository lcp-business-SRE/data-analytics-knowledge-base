# データ分析学習サイトプロジェクト

[![Deploy to GitHub Pages](https://github.com/lcp-business-SRE/data-analytics-knowledge-base/actions/workflows/deploy.yml/badge.svg)](https://github.com/lcp-business-SRE/data-analytics-knowledge-base/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stars](https://img.shields.io/github/stars/your-username/your-repo?style=social)](https://github.com/your-username/your-repo/stargazers)

## 概要

このプロジェクトは、データ分析に関する学習コンテンツを提供することを目的としたウェブサイトです。データ分析の基礎から応用まで、幅広いトピックをカバーしています。

## 特徴

* **学習コンテンツ**: データ分析の基礎から応用までの豊富な教材を提供。
* **インタラクティブなデモ**: 実際のデータ分析ツールを使ったデモを通じて、学習効果を高めます。
* **コミュニティサポート**: フォーラムやチャットを通じて、他の学習者と交流し、質問や情報交換が可能です。
* **オープンソース**: プロジェクトはオープンソースであり、誰でも貢献できます。

## デモ (オプション)

サイトトップ

![サイトトップ](./img/top.png)

## インストール

プロジェクトをローカル環境でセットアップし、実行するための手順を説明します。

### 前提条件

このプロジェクトは Meta社が開発している [Docusaurus](https://docusaurus.io/) を使用して構築されています。ローカル環境でプロジェクトをセットアップし、実行するためには以下のソフトウェアが必要です。


1. Gitのインストール
   - プロジェクトをクローンするために必要です。
   - [Gitのインストール方法](https://git-scm.com/book/ja/v2/はじめに-Gitをインストールする)を参照してください。
2. Node.jsのインストール
   - プロジェクトの依存関係を管理するために必要です。
   - [Node.jsのインストール方法](https://nodejs.org/ja/download/)を参照してください。

ちなみに、Docusaurusの公式サイトでは、Node.jsのバージョンは18.0以上を推奨しています。

> [!NOTE]
> Node.js version 18.0 or above (which can be checked by running node -v). You can use nvm to manage multiple Node.js versions on a single machine.
> When installing Node.js, it is recommended to check all checkboxes related to dependencies.
> - 引用元 [ Docusaurus - Installation - Requirements](https://docusaurus.io/docs/installation#requirements)

今回、静的サイトジェネレータ―として Docusaurus を選択した理由は、ドキュメントサイトに特化しており、非常に使いやすいのが特徴です。Meta (旧Facebook) が開発しており、多くのオープンソースプロジェクトのドキュメントサイトで採用されています。

[採用例 - Docusaurus Site Showcase](https://docusaurus.io/showcase?tags=favorite)

他にも、以下を試しましたが、気軽なドキュメントサイトという点では、一番使いやすいと感じました。

- Hugo（[公式](https://gohugo.io/)）
- MkDocs（[公式](https://www.mkdocs.org/)）
- jekyll（[公式](https://jekyllrb.com/)）

## Docusaurusのセットアップとローカル開発


### 手順

#### プロジェクトのリポジトリをクローン

```bash
git clone [git@github.com:lcp-business-SRE/data-analytics-knowledge-base.git](git@github.com:lcp-business-SRE/data-analytics-knowledge-base.git)
```

#### プロジェクトディレクトリへ移動

クローン後、プロジェクトディレクトリに移動します。

```bash
cd data-analytics-guides
```

#### 依存関係のインストール

Docusaurus プロジェクトには、様々なパッケージが依存関係として含まれています。これらをインストールする必要があります。通常、package.json ファイルに記載されている依存関係を npm を使ってインストールします。

```bash
npm install
```

#### ローカル開発サーバーの起動

Docusaurus では、ローカル開発サーバーを起動して、リアルタイムで変更を確認できます。

```bash
npm start
```

これにより、ブラウザが自動的に開き、ローカルサーバーでサイトを確認できます。変更は保存するたびに自動的に反映されます。

[http://localhost:3000](http://localhost:3000)


## Docusaurus事体の構築方法

この環境そのものの構築方法については、[Docusaurusセットアップ](docusaurus.md)を参照してください。

## GoogleAnalyticsを利用したアクセス解析

Google Analyticsを利用して、サイトのアクセス解析を行っています。
Google Analyticsの管理画面は以下のリンクからアクセスできます。

[GoogleAnalytics](https://analytics.google.com/analytics/web/?hl=ja#/p492893539/reports/intelligenthome?params=_u..nav%3Dmaui)

## Disqusを利用したコメント管理

Disqusを利用して、サイトにコメント機能を追加しています。

Disqusの管理画面は以下のリンクからアクセスできます。
[https://data-analytics-guides.disqus.com/admin/](https://data-analytics-guides.disqus.com/admin/)

## コントリビュート
このプロジェクトはオープンソースであり、誰でも貢献できます。管理者にお問い合わせください。
