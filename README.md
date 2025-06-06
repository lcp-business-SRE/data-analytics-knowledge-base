# GitHub PagesとHugo


## 全体の流れ

1. Hugoのインストール
1. 新しいHugoサイトの作成
1. Bookテーマの導入
1. コンテンツの作成 (Markdown)
1. GitHubリポジトリの作成と連携
1. GitHub Actionsを使った自動デプロイの設定
1. 公開と確認

## 1. Hugoのインストール

```bash
choco install hugo -confirm
```

インストール後、ターミナルでバージョンを確認し、正しくインストールされたことを確認します。

```bash
hugo version
```

## 2. 新しいHugoサイトの作成

```bash
hugo new site my-hugo-site
cd my-hugo-site
```

## 3. Bookテーマの導入
```bash
git init
git submodule add https://github.com/alex-shpak/hugo-book themes/hugo-book
```

次に、`config.toml`ファイルを編集してテーマを設定します。

```toml


```

```bash
hugo new docs/introduction/_index.md # イントロダクションの章
hugo new docs/basic-stats/_index.md # 統計の基礎の章
hugo new docs/basic-stats/mean-median-mode.md # 平均・中央値・最頻値のページ
```
