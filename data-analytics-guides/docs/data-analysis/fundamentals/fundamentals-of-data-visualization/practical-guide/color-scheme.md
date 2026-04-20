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

:::tip ダイバージェントカラーをシーケンシャルカラーとして使う
ダイバージェントカラーをシーケンシャルカラーとして使うこともできます。  
区分が多く、1色のグラデーションだと濃淡の差が小さくなってしまう場合、2色のグラデーションを使うことで区分同士の色の差をわかりやすくできます。
:::

## 配色とアクセントカラーの使い分け

配色したいけどその中で一部の値だけ目立たせたいということもあると思います。  
そういった競合が発生する場合の使い分けを紹介します。  

### 配色をグレー系にする  

シーケンシャルカラーで配色する場合はグレー系にすることで、一部の目立たせたい部分にアクセントカラーで強調できます。  
無彩色（白、グレー、黒）と有彩色（赤、青、緑など）を組み合わせることで、アクセントカラーがより際立ちます。  

## さまざまな色覚への対応

### 色覚の違いを考慮しよう

ここまで配色の使い方を紹介しましたが、色の組み合わせはよく考える必要があります。  
色覚には個人差があり、人によっては**見分けづらい色の組み合わせ**があるからです。  

以下に赤と緑を対比させるグラフを用意しました。  
目標値の70％を超えていれば緑、下回れば赤にしています。  

一般的な色覚（C型）の人はぱっと見で赤と緑の対比を認識できて便利です。  
しかし、色覚がP型（赤を認識しづらい）やD型（緑を認識しづらい）の人は**赤と緑がどちらも茶色っぽく見えるため、対比構造が認識しづらい**です。  
しかも、この色覚の人は男性の20人に1人、女性の500人に1人程度いるとされます。  
つまり、**赤と緑で対比を表そうとしても、約5%の人には意図が伝わらないのです**。  

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#34a334', '#34a334', '#b32f2f', '#34a334', '#b32f2f', '#b32f2f'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'C型色覚（一般的な色覚）の見え方',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>


<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#a89828', '#a89828', '#6e5530', '#a89828', '#6e5530', '#6e5530'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'P型色覚の見え方（あくまで一例で、個人差があります。）',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>


<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#a89828', '#a89828', '#756c24', '#9b8d27', '#756c24', '#756c24'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'D型色覚の見え方（あくまで一例で、個人差があります。）',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>

そこで重要なのが、 **カラーユニバーサルデザイン（CUD）** の考え方です。  
CUDとは、**色覚多様性を考慮し、より多くの人に伝わりやすい配色を選ぶ**という考え方です。  

CUDを意識することで、異なる色覚の人にも同じ意図を伝えやすくなります。  
例えば、先ほどのグラフを赤と緑からオレンジと青に変えてみましょう。

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#3471a3', '#3471a3', '#e97020', '#3471a3', '#e97020', '#e97020'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'C型色覚（一般的な色覚）の見え方',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#5577aa', '#5577aa', '#aa8a34', '#5577aa', '#aa8a34', '#aa8a34'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'P型色覚の見え方（あくまで一例で、個人差があります。）',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#4665a0', '#4665a0', '#ad9e26', '#4665a0', '#ad9e26', '#ad9e26'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'D型色覚の見え方（あくまで一例で、個人差があります。）',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#1d7e8f', '#1d7e8f', '#f75252', '#1d7e8f', '#f75252', '#f75252'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: 'T型色覚の見え方（あくまで一例で、個人差があります。）',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
/>

オレンジと青に変更したことで、P型やD型の人も異なる色相として認識できるため、対比構造が認識しやすくなりました。  
さらに少数派ですが、T型（青を認識しづらい）の人も認識できるので問題ないでしょう。

### 配色以外も工夫しよう

誰もが見分けられるようなカラーパレットを使うことは重要ですが、色以外の要素を工夫することも有効な手段です。  
例えば、上記のグラフなら以下のような工夫ができます。

#### ① 目標値のラインを補助として引く

目標値を超えたかどうかで目標達成の有無を判別しやすくなります。

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: 'KPI達成率（%）',
        data: [85, 72, 63, 78, 55, 68],
        backgroundColor: [
          '#3471a3', '#3471a3', '#e97020', '#3471a3', '#e97020', '#e97020'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: '目標値のラインを引いたグラフ',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  }}
  referenceLines={[{ y: 70, label: '目標 70%' }]}
/>

#### ② 基準値からの差分を表すグラフにする

目標値を超えたか下回ったかが棒グラフの伸びる方向でわかるので、色の判別が不要になります。

<SreGenericChart
  chartType="bar"
  chartData={{ 
    labels: ['A店', 'B店', 'C店', 'D店', 'E店', 'F店'],
    datasets: [
      {
        label: '目標比（%pt）',
        data: [15, 2, -7, 8, -15, -2],
        backgroundColor: [
          '#3471a3', '#3471a3', '#e97020', '#3471a3', '#e97020', '#e97020'
        ],
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: {
        display: true,
        text: '目標との差分を表すグラフ',
      },
      legend: { display: false },
    },
    scales: {
      y: {
        min: -20,
        max: 20,
      },
    },
  }}
  referenceLines={[{ y: 0, label: '目標 70%' }]}
/>

### 迷った時に使えるパレット

色以外も工夫したほうがいいですが、やはり色のインパクトは大きいので配色には気を使いたいです。  
先人が色覚多様性を考慮したカラーパレットを作ってくれているので、どの色を使うか迷ったら活用してみましょう。  

#### Okabe-Ito Scale

![Okabe-Ito Scale](./assets/Okabe-Ito.jpg)
Fig. 16 Okabe and Ito (2002)

[Okabe-Ito Scale](https://jfly.uni-koeln.de/color/#pallet)は、岡部氏、伊藤氏によって考案された、色覚問わず見やすいカテゴリカルカラーパレットです。  
オリジナル、P型、D型、T型の色覚でそれぞれどう見えるかというサンプルが上図に示されています。  
どの色覚の人でも隣り合う色の差がわかりやすいことがわかります。

#### ColorBrewer2

![ColorBrewer2](./assets/color-brewer2.png)

[ColorBrewer2](https://colorbrewer2.org/#type=sequential&scheme=BuGn&n=3)は、マップ上での見え方をシミュレーションできるツールで、シーケンシャルカラーやダイバージェントカラーも用意されています。  
同じ配色でも3～12まで区分の数を変更でき、各色のカラーコードを確認できるのが便利です。  

colorblind safeにチェックを入れると、色覚多様性を考慮した配色に絞り込むことができます。  
マップでの見え方に特化していますが、通常のグラフの配色にも活用できます。

#### COLORS

![COLORS](./assets/COLORS.png)

[COLORS](https://colors.design4u.jp/)は、任意の画像から色を抽出して配色を作成してくれる無料ツールです。  
コーポレートカラーを使った配色を作ることも可能です。  
1～10色までの配色を作成可能で、各色の明るさの差や色相の差を直感的に編集できるのが特徴です。  
出来上がった配色のカラーコードも取得できますし、白黒で見たときにどう見えるかも確認できるため印刷物にも向いています。  

デフォルトでたくさんのパレットが用意されており、それらも色覚多様性に対応しているものが多いので、どの色を使うか迷ったときに活用できます。

## 色覚の違いをシミュレーションしてみよう

実はChromeなどのブラウザ上で、色覚のシミュレーションをすることができます。  
ご自身が作成したグラフをブラウザ上で確認できるなら試してみるといいでしょう。  

### Chromeのデベロッパーツールを使う方法

1. Chromeの右上のメニューから「その他のツール」>「デベロッパーツール」を選択（またはF12キーを押す）
![手順1](./assets/sim1.png)

2. デベロッパーツールが表示されるので、右上のメニューから「その他のツール」>「レンダリング」を選択
![手順2](./assets/sim2.png)

3. 下の段のメニューに「レンダリング」というタブが表示されるので選択し、下にスクロールすると「色覚異常をエミュレート」という項目があるので、この中からシミュレーションしたい色覚を選択する。
![手順3](./assets/sim3.png)
▲ 図のように、「2型2色覚（緑色の識別不可）」を選択すると、赤と緑が両方とも茶色っぽく見えるようになります。

あくまでシミュレーションなので実際の見え方には個人差があります。  
しかし、比較的簡単に色覚による見え方の違いを確認できるのでぜひ活用してみてください。

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
- [COLORS](https://colors.design4u.jp/)
- [Viridis](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html#the-color-scales)
- [Paul Tol's Colour Schemes](https://sronpersonalpages.nl/~pault/data/colourschemes.pdf)