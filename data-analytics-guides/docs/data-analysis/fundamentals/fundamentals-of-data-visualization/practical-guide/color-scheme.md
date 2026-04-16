---
sidebar_position: 11
title: 1-7. 戦略的に色を使おう
description: グラフの色を意図的に使って、情報伝達を強化する方法を紹介します。
tags: [データ分析, 基礎, 可視化]
custom_react_root: true # コメント有無
---

# 1-7. 戦略的に色を使おう

## 色は可視化の強い味方

グラフを作成するときに重要なのが、色の使い方です。  
色は組み合わせることによってあらゆる効果を発揮し、グラフをよりわかりやすくすることができます。  
さらに、カラーユニバーサルデザイン（CUD）を意識することで、見る人の色覚の違いにかかわらず情報を正しく伝えられます。  

生成AIもグラフを作れるようになりましたが、何も指示しないと自分の意図と違う色の使い方で生成されることがあります。  
そのような場合も、こちらが色使いの意図を指示することで目的に即したグラフにできます。  

この回で**目的に応じて戦略的に色を使う**ことで、グラフの情報伝達力を高める方法を学びましょう。

## 重要事項を色で強調する

### アクセントカラー

可視化で多用するテクニックに**重要事項を色で強調する**というものがあります。  
いわゆる**アクセントカラー**です。  
アクセントカラーは、**注目させたい要素とそれ以外を区別**するために使います。  
例：自社と他社の比較、目標達成した要素の強調、全体の中の賛成の割合など

  <img
    src={require('./assets/highlight-color.png').default}
    alt="highlight color"
    style={{ width: '60%' }}
  />

具体例を見てみましょう。

<SreGenericChart
    chartType="bar"
    chartData={{
        labels: ['自社', '競合A', '競合B'],
        datasets: [
            {
                label: '売上',
                data: [242, 280, 203],
                backgroundColor: ['rgba(75, 192, 192, 1)', 'rgb(180, 180, 180)', 'rgba(180, 180, 180, 1)'],
            },
        ],
    }}
    chartOptions={{
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '売上比較',
            },
            datalabels: {
                display: true,
                formatter: function(value, context) {
                    return value + '千円';
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                },
                ticks: {
                    stepSize: 50,
                    // 縦軸 単位表示
                    callback: function(value, index, ticks) {
                    return index < ticks.length - 1 ?
                    this.getLabelForValue(value) :
                    ['千円', this.getLabelForValue(value)];
                }
                }
            },
        },
    }}
/>

上のグラフは売上を自社と競合他社で比較したものです。  
自社の売り上げをアクセントカラーにすることで、自社とそれ以外という構造で見てほしいという意図が伝わります。

## 3つの配色の使い分け

配色とは色の組み合わせのことですが、**組み合わせ方によって異なる効果**を生み出すことができます。  
ここではグラフに効果的な3パターンを紹介します。  
伝えたい内容や目的に応じて、適切な配色を選べるようになりましょう。

### 1. カテゴリカルカラー（区別する）

カテゴリカルカラーは、その名の通り**カテゴリーごとに区別**するための配色です。  
**色同士に順序や大小が存在しない**ため、**並列な関係性のデータを区別**するときに有効です。  

例：居住地域、性別、事業別など
  <img
    src={require('./assets/categorical-colors.png').default}
    alt="categorical colors"
    style={{ width: '60%' }}
  />

グラフでの使用例を見てみましょう。  

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [10, 20, 30],
        backgroundColor: ['#ee3333', '#33ee33', '#3333ee'], // カテゴリごとに色を指定
      },
    ],
  }}
  chartOptions={{ /* グラフのオプション */ }}
/>

### 2. シーケンシャルカラー（大小を表す）

シーケンシャルカラーは、同じ色のグラデーションによって**量の大小**を表す配色です。  
小さい値は淡い色、大きい値は濃い色といったように、色の濃淡で情報を伝えることができます。  
特に、**順序尺度や量的データの大小を視覚的に比較**するのに適しています。  

例：頻度、人数、金額など
  <img
    src={require('./assets/sequential-colors.png').default}
    alt="sequential colors"
    style={{ width: '60%' }}
  />

グラフでの使用例を見てみましょう。


### 3. ダイバージェントカラー（基準に対するプラス・マイナスを示す）

ダイバージェントカラーは、中間に基準値を挟んで、そこから両方向にシーケンシャルカラーを配置する配色です。  
満足～普通～不満の評価など、**プラスとマイナスに意味があるデータ**を表すのに適しています。  
対照的な色のグラデーションを使用することで、両方向に意味があるという情報を視覚的に強調することができます。  

例：利益の増減、賛否、満足度など  
  <img
    src={require('./assets/divergent-colors.png').default}
    alt="divergent colors"
    style={{ width: '60%' }}
  />

グラフでの使用例を見てみましょう。

> ダイバージェントカラーをシーケンシャルカラーとして使うこともできます。  
> 区分が多く、1色のグラデーションだと濃淡の差が小さくなってしまう場合、2色のグラデーションを使うことで区分同士の色の差をわかりやすくできます。

## 配色とアクセントカラーの使い分け

配色したいけどその中で一部の値だけ目立たせたいということもあると思います。  
そういった競合が発生する場合の使い分けを紹介します。  

### 配色をグレー系にする  

シーケンシャルカラーで配色する場合はグレー系にすることで、一部の目立たせたい部分にアクセントカラーで強調できます。  
無彩色（白、グレー、黒）と有彩色（赤、青、緑など）を組み合わせることで、アクセントカラーがより際立ちます。  

## 色覚多様性への対応

## 迷った時に使えるパレット

先人が配色のパレットを作ってくれているので、迷ったら活用してみましょう。



## まとめ

色の使い方について紹介しましたが、一番大事なのは**なぜそのような色使いをしたのか説明できる**ことです。  
説明できるということは目的をもって色を使えているということなので、まずはこの状態を目指しましょう。  

また、色は見栄えにも影響しますが、**メッセージを的確に伝える目的で色を使うとおのずと見栄えもよくなります**。  
なので、見栄えを気にするより先に、目的を果たせているかどうかを意識してみましょう。


## 参考資料

- [『データ視覚化のデザイン』](https://amzn.asia/d/eZEJuGJ)
- [データの可視化 (Data Visualization)](https://note.com/s_s286/n/ndd9552d0a4e3?sub_rt=share_pw)
- [デザイン知識がなくてもOK！グラフの配色術](https://note.com/macromill/n/nce5ada46f4ab?sub_rt=share_pw)
- [色覚バリアフリーなカラーパレット](https://note.com/masakudamatsu/n/nafb946d33ee0?sub_rt=share_sb)
- [Okabe-Ito](https://jfly.uni-koeln.de/color/#pallet)
- [ColorBrewer2](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)
- [Viridis](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html#the-color-scales)
- [Paul Tol's Colour Schemes](https://sronpersonalpages.nl/~pault/data/colourschemes.pdf)