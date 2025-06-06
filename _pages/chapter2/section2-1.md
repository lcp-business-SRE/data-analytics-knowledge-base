---
title: 2.1 Rubyのインストール
layout: single # または archive など、サイドバーをサポートするレイアウト
permalink: /chapter2/section2-1/ # _config.yml の baseurl を含めた完全なパス
sidebar:
  nav: "docs" # _data/navigation.yml で定義したナビゲーションのID
---

## 2.1 Rubyのインストール

JekyllはRubyで書かれているため、まずRubyをシステムにインストールする必要があります。Rubyのバージョン管理ツールを使うと、複数のRubyバージョンを管理できて便利です。

### Windowsの場合

Windowsでは、[RubyInstaller for Windows](https://rubyinstaller.org/) を使用するのが最も簡単です。

1.  上記サイトから、推奨されるバージョンのインストーラー（`Ruby+Devkit` バージョン）をダウンロードします。
2.  ダウンロードしたインストーラーを実行し、指示に従ってインストールを進めます。インストール中に「MSYS2開発ツールキットのインストール」のチェックボックスにチェックが入っていることを確認してください。

### macOSの場合

macOSにはRubyがプリインストールされていますが、システムRubyではなくバージョン管理ツール（`rbenv` または `rvm`）を使ってインストールすることをお勧めします。

例: `rbenv` を使用する場合

```bash
brew install rbenv ruby-build
rbenv init
echo 'eval "$(rbenv init - zsh)"' >> ~/.zshrc # もしくは ~/.bashrc
source ~/.zshrc # シェルを再起動するか、設定を再読み込み
rbenv install 3.2.2 # 最新の安定版Rubyをインストール (適宜バージョンは変更)
rbenv global 3.2.2