---
sidebar_position: 12
title: 1-8. グラフの補助的な要素を使いこなそう
description: タイトル・軸ラベル・凡例・データラベル・注釈など、グラフの補助要素を適切に扱う方法を解説します。
tags: [データ分析, 基礎, 可視化]
custom_react_root: true # コメント有無
---

# 1-8. グラフの補助的な要素を使いこなそう

**投稿者：Yukina Matsumoto**

## グラフの「補助的な要素」、意識していますか？

これまでグラフの視覚的な要素（形・長さ・色など）の重要性を解説してきました。  
しかし、グラフにはデータそのものの視覚表現だけでなく、**読者の理解を助ける補助的な要素**も欠かせません。  
タイトル・軸ラベル・凡例・データラベル・注釈——こうした要素は一見地味ですが、  
**「何のグラフか」「何を測っているか」「どの系列か」を正しく伝えるための重要な情報源**です。  
これらを意図を持って使いこなせるようになりましょう。

## タイトルに意図を込めよう

皆さん、無意識にタイトルをつけていませんか？  
タイトルは最初に目に入る要素であり、そのグラフが何を表したものか理解するために非常に重要です。  
ここでは意外と見落としがちなタイトルのつけ方のポイントを解説します。  

### 目的に沿ったタイトルを選ぼう

タイトルは主に以下の2種類に分類できます。  
誰に向けてどんなメッセージを伝えるかを考えて、適切なタイトルをつけましょう。

- **状況説明型**：何のグラフか示す
  - 例：月次売上推移、男女別平均寿命の推移
- **主張型**：グラフで伝えたいメッセージを示す
  - 例：商品Bが前月比15％減少

基本的に状況説明型のタイトルは必須ですが、場面によっては主張型をタイトルとし、状況説明型をサブタイトルとしてつけることも有効です。

<SreGenericChart
  chartType="line"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [
          {
              label: '商品A',
              data: [100, 120, 150, 130, 170, 190],
              borderColor: '#0072B2',
              backgroundColor: 'rgba(0, 114, 178, 0.15)',
              pointRadius: 0,
          },
          {
              label: '商品B',
              data: [80, 90, 85, 70, 60, 50],
              borderColor: '#E69F00',
              backgroundColor: 'rgba(230, 159, 0, 0.15)',
              pointRadius: 0,
          },
      ],
  }}
  chartOptions={{
      layout: {
          padding: {
              right: 60,
          },
      },
      plugins: {
          legend: {
              display: false,
          },
          title: {
              display: true,
              text: '商品Aが好調、商品Bは減少傾向',
              font: {
                  size: 18,
              },
          },
          subtitle: {
              display: true,
              text: '2026年上半期 月次売上推移',
          },
          datalabels: {
              display: (context) => context.dataIndex === context.dataset.data.length - 1,
              align: 'right',
              anchor: 'end',
              formatter: (value, context) => context.dataset.label,
          },
      },
      scales: {
          x: {
              grid: {
                  display: false,
              },
              offset: true,
          },

          y: {
              beginAtZero: true,
              grid: {
                  display: true,
              },
              ticks: {
                  stepSize: 50,
              },
          },
      },
  }}
/>

特にプレゼンにおいて特定の情報を強調したい場合は、主張型のメッセージが有効です。  
一方、定期的に情報が更新されるようなダッシュボードや、客観性・正確性を重視したレポートにおいては状況説明型が適しているでしょう。  
グラフを見せる目的を考慮して、適切なタイトルをつけるようにしましょう。

### 読みやすく正確なタイトルを書こう

また、当たり前ですが**グラフの内容とタイトルが整合しているかも必ず確認しましょう**。  
タイトルに「前月比」とあるのに実際は対前年比のデータだったり、「全商品」とあるのに一部しか含まれていなかったりすると、読者を混乱させてしまいます。  

さらに、**漢字ばかりになっていないか**もチェックしましょう。  
特に状況説明型だと端的に内容を表すために漢字だけのタイトルになりがちです。  
文字数が少なければいいですが、基本的に漢字だけだと読みづらくなります。  
その場合は**区切りのいいところで半角スペース**を入れたり、**ひらがな・カタカナ・数字など密度の低い文字を含める表現**に変えたりして読みやすさを工夫しましょう。  

## ラベルを整えよう

軸には主に2つのテキスト要素があります。  
それぞれのラベルも扱い方によって伝わりやすさが変わるので、ポイントを押さえておきましょう。  

- **軸ラベル**：軸が何を表しているかを示す（例：売上（千円））
- **目盛りラベル**：目盛りに表示される値や名前（例：1月、2月、…）

### 軸ラベルは省略しすぎない

軸ラベルはグラフの内容から自明な場合は省略しても問題ありませんが、  
**単位がわからないと読み手が混乱するケース**（「売上」が円なのか百万円なのかなど）では必ず入れましょう。  
もしくは、指標が一つならタイトルに単位を入れる方法もあります。

### 文字が横向きにならないようにしよう

デフォルトの設定だとカテゴリ名や目盛りラベルの文字が横倒しになってしまうことがあります。  
横向きの文字は読みづらいので、以下の方法で対処しましょう。  

#### ① 横棒グラフに切り替える

最もすっきりした解決策です。  
縦軸と横軸を入れ替えるだけで、長い名前を横向きのまま表示できます。  
特にカテゴリ名が長い場合は積極的に横棒グラフを検討しましょう。  
以下の2つのグラフは同じデータですが、横棒グラフにするだけでラベルが格段に読みやすくなっています。

<SreGenericChart
  chartType="bar"
  chartData={{
      labels: ['北海道・東北', '関東', '中部・北陸', '近畿', '中国・四国', '九州・沖縄'],
      datasets: [
          {
              label: '売上',
              data: [120, 280, 180, 240, 100, 160],
              backgroundColor: '#0072B2',
          },
      ],
  }}
  chartOptions={{
      plugins: {
          legend: { display: false },
          title: { display: true, text: '地域別売上（縦棒）' },
      },
      scales: {
          x: {
              grid: { display: false },
              ticks: { maxRotation: 90, minRotation: 90 },
          },
          y: { beginAtZero: true, ticks: { stepSize: 50 } },
      },
  }}
/>

<SreGenericChart
  chartType="bar"
  chartData={{
      labels: ['北海道・東北', '関東', '中部・北陸', '近畿', '中国・四国', '九州・沖縄'],
      datasets: [
          {
              label: '売上',
              data: [120, 280, 180, 240, 100, 160],
              backgroundColor: '#0072B2',
          },
      ],
  }}
  chartOptions={{
      indexAxis: 'y',
      plugins: {
          legend: { display: false },
          title: { display: true, text: '地域別売上（横棒）' },
      },
      scales: {
          x: { beginAtZero: true, grid: { display: true }, ticks: { stepSize: 50 } },
          y: { grid: { display: false } },
      },
  }}
/>

#### ② ラベルを短くする・略称を使う

「2025年1月」→「1月」のように短縮するだけで解決することもあります。  
文脈から明らかな部分は省略し、必要ならタイトルや注釈で補足しましょう。

#### ③ 表示するラベルの数を間引く

時系列データで横軸の目盛りが細かすぎる場合、目盛りラベルを数本おきに表示するだけで見やすくなります。  
大まかなトレンドがつかめれば十分という場合も多いので、省略できるなら積極的に間引いてみましょう。  
BIツールによっては横幅のサイズに合わせて自動で間引いて表示されることもあります。

## 凡例の扱いを考えよう

凡例（レジェンド）はグラフ内の系列（棒グラフの棒や折れ線グラフの線など）が何を表しているかを示す要素です。  
ただし、**凡例は無条件に表示すればよいわけではありません**。  
場面に応じた扱い方を知っておきましょう。

### できるだけ省略しよう

凡例は一定のスペースをとるため、必要なければ省略したほうがすっきりします。  
どうしても凡例以外に系列の情報を伝える方法がない場合のみ用いることをおすすめします。

#### ① 凡例が1つの場合

データが1種類しかない場合、多くはタイトルで何のデータか伝えられるため、凡例は不要です。  
以下の2つのグラフを比べてみましょう。凡例を非表示にするだけでグラフがすっきりします。

<SreGenericChart
  chartType="bar"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月'],
      datasets: [
          {
              label: '月次売上（千円）',
              data: [120, 150, 130, 170, 160],
              backgroundColor: '#0072B2',
          },
      ],
  }}
  chartOptions={{
      plugins: {
          legend: { display: true },
          title: { display: true, text: '月次売上推移（千円）' },
      },
      scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, ticks: { stepSize: 50 } },
      },
  }}
/>

<SreGenericChart
  chartType="bar"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月'],
      datasets: [
          {
              label: '月次売上（千円）',
              data: [120, 150, 130, 170, 160],
              backgroundColor: '#0072B2',
          },
      ],
  }}
  chartOptions={{
      plugins: {
          legend: { display: false },
          title: { display: true, text: '月次売上推移（千円）' },
      },
      scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, ticks: { stepSize: 50 } },
      },
  }}
/>

#### ② ラベルとして直接書こう

1つのグラフに複数の折れ線グラフを表示する場合、Excelなどではデフォルトで凡例が表示されると思います。  
折れ線の数が2～4つ程度であれば、線の終端にラベルとして直接表示するとグラフがすっきりして読みやすくなります。  
ラベルにすると凡例と系列を見比べる必要もなくなるので、読者のストレスも減ります。  

ただし、同じ凡例を用いるグラフを複数並べる場合や折れ線の数が多い場合は、あえて凡例を表示したほうが全体の情報量を抑えられることもあります。  
状況に応じて読者の認知的負荷をより減らせる方法を選びましょう。

<SreGenericChart
  chartType="line"
  maxWidth="700px"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [
          {
              label: '商品A',
              data: [100, 120, 150, 130, 170, 190],
              borderColor: '#0072B2',
              backgroundColor: '#0072B2',
              pointRadius: 0,
          },
          {
              label: '商品B',
              data: [80, 90, 85, 70, 60, 75],
              borderColor: '#E69F00',
              backgroundColor: '#E69F00',
              pointRadius: 0,
          },
      ],
  }}
  chartOptions={{
      layout: {
          padding: { right: 60 },
      },
      plugins: {
          legend: { display: true, position: 'top' },
          title: { display: true, text: '月次売上推移（凡例：上部）' },
      },
      scales: {
          x: { grid: { display: false }, offset: true },
          y: { beginAtZero: true, ticks: { stepSize: 50 } },
      },
  }}
/>

<SreGenericChart
  chartType="line"
  maxWidth="700px"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [
          {
              label: '商品A',
              data: [100, 120, 150, 130, 170, 190],
              borderColor: '#0072B2',
              backgroundColor: 'rgba(0, 114, 178, 0.15)',
              pointRadius: 0,
          },
          {
              label: '商品B',
              data: [80, 90, 85, 70, 60, 75],
              borderColor: '#E69F00',
              backgroundColor: 'rgba(230, 159, 0, 0.15)',
              pointRadius: 0,
          },
      ],
  }}
  chartOptions={{
      layout: {
          padding: { right: 60 },
      },
      plugins: {
          legend: { display: false },
          title: { display: true, text: '月次売上推移（直接ラベル）' },
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
      scales: {
          x: { grid: { display: false }, offset: true },
          y: { beginAtZero: true, ticks: { stepSize: 50 } },
      },
  }}
/>

円グラフの場合も円の外に凡例を表示するより、円グラフの中に直接ラベルとして表示させることが多いです。  
この場合も凡例と系列の比較が不要でスペースも省略できるので、グラフがすっきりして読みやすくなります。

<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
<div style={{ flex: '1 1 300px' }}>


<SreGenericChart
  chartType="pie"
  maxWidth="380px"
  containerStyle={{ height: '280px' }}
  chartData={{
    labels: ['商品A', '商品B', '商品C', '商品D'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          '#0072B2',
          '#E69F00',
          '#009E73',
          '#CC79A7',
        ],
      },
    ],
  }}
  chartOptions={{
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      title: {
        display: true,
        text: '凡例あり',
      },
      subtitle: {
        display: true,
        text: '商品別売上構成比',
      },
    },
  }}
/>
</div>

<div style={{ flex: '1 1 300px' }}>

<SreGenericChart
  chartType="pie"
  maxWidth="280px"
  containerStyle={{ height: '280px' }}
  chartData={{
    labels: ['商品A', '商品B', '商品C', '商品D'],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: [
          '#0072B2',
          '#E69F00',
          '#009E73',
          '#CC79A7',
        ],
      },
    ],
  }}
  chartOptions={{
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: '凡例なし',
      },
      subtitle: {
        display: true,
        text: '商品別売上構成比',
      },
      datalabels: {
        display: true,
        color: (context) => [1, 3].includes(context.dataIndex) ? '#222222' : '#ffffff',
        font: {
          weight: 'bold',
          size: 13,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}%`;
        },
      },
    },
  }}
/>
</div>
</div>


### 位置や順番を工夫しよう

もし凡例を表示させる場合は、位置や並べ方を気を付けましょう。  

#### ① グラフの近くに表示する

凡例を表示させる場合、グラフの系列と見比べるので距離が開いていると読者のストレスになります。  
できるだけグラフの近くに表示するようにしましょう。  
特に、系列と凡例の間に別の情報が入らないようにするのがポイントです。  
位置はグラフの右側か上下が一般的です。

#### ② 系列の並びと同じ順番で表示する

100％積み上げ棒グラフであれば、積み上げている色と同じ順番に凡例を表示するのが自然です。  
例えば以下のように横向きの積み上げ棒グラフなら、凡例も左から右の順で同じ並びになるように表示するとわかりやすいです。

<SreGenericChart
  chartType="bar"
  chartData={{
    labels: ['施策A', '施策B', '施策C', '施策D', '施策E'],
    datasets: [
      {
        label: '強く賛成',
        data: [20, 10, 35, 5, 18],
        backgroundColor: '#0072B2',
      },
      {
        label: 'やや賛成',
        data: [35, 22, 30, 15, 28],
        backgroundColor: '#74B4D8',
      },
      {
        label: 'どちらでもない',
        data: [20, 18, 15, 20, 24],
        backgroundColor: '#C8C8C8',
      },
      {
        label: 'やや反対',
        data: [15, 28, 12, 30, 18],
        backgroundColor: '#F0A86A',
      },
      {
        label: '強く反対',
        data: [10, 22, 8, 30, 12],
        backgroundColor: '#D55E00',
      },
    ],
  }}
  chartOptions={{
    indexAxis: 'y',
    plugins: {
      title: { display: true, text: '各施策に対する意見' },
      legend: { display: true },
      datalabels: {
        display: true,
        color: '#fff',
        formatter: function(value) { return value > 8 ? value + '%' : ''; },
      },
    },
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: { callback: function(value) { return value + '%'; } },
        grid: { display: false },
      },
      y: {
        stacked: true,
        grid: { display: false },
      },
    },
  }}
/>

折れ線グラフの場合、グラフの右に縦に並べるなら、折れ線の終端の順番と同じように並べるとわかりやすいです。  

<SreGenericChart
  chartType="line"
  chartData={{
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        label: 'スマートフォン',
        data: [50, 60, 65, 75, 80, 90],
        borderColor: '#0072B2',
        backgroundColor: '#0072B2',
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'ノートPC',
        data: [80, 75, 70, 65, 68, 70],
        borderColor: '#E69F00',
        backgroundColor: '#E69F00',
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'タブレット',
        data: [30, 35, 42, 46, 48, 50],
        borderColor: '#009E73',
        backgroundColor: '#009E73',
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'デスクトップ',
        data: [55, 48, 42, 36, 33, 30],
        borderColor: '#D55E00',
        backgroundColor: '#D55E00',
        tension: 0,
        pointRadius: 0,
      },
      {
        label: 'その他',
        data: [25, 20, 18, 22, 18, 15],
        borderColor: '#CC79A7',
        backgroundColor: '#CC79A7',
        tension: 0,
        pointRadius: 0,
      },
    ],
  }}
  chartOptions={{
    plugins: {
      title: { display: true, text: '端末カテゴリ別月次アクセス数' },
      legend: {
        position: 'right',
      },
    },
    scales: {
      x: { grid: { display: false }, offset: true },
      y: {
        min: 0,
        max: 100,
        grid: { display: true },
        ticks: { stepSize: 20, callback: function(value) { return value + '万'; } },
      },
    },
  }}
/>

## データラベルをつけよう

棒グラフのそばや折れ線グラフの点付近に数値を表示することがあります。  
これを**データラベル**と呼びます。

### 重要なポイントにつけよう

すべてのデータにラベルをつけると数字だらけになり、かえって読みにくくなります。  
**「正確な値をすべて知りたいなら表を使えばよい」** という考え方で、グラフにデータラベルをつける目的を明確にしましょう。

折れ線グラフの場合は、極端な増減のポイントや最新のポイントなど、**読者に特に注目してほしいポイントだけにつける**のがおすすめです。

<SreGenericChart
  chartType="line"
  maxWidth="700px"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [
          {
              label: '新規会員数',
              data: [82, 74, 68, 78, 65, 58, 55, 60, 67, 72, 68, 75],
              borderColor: '#0072B2',
              backgroundColor: '#0072B2',
              pointRadius: 0,
          },
          {
              label: '退会数',
              data: [40, 43, 50, 52, 56, 65, 68, 60, 58, 54, 46, 50],
              borderColor: '#E69F00',
              backgroundColor: '#E69F00',
              pointRadius: 0,
          },
      ],
  }}
  chartOptions={{
      layout: {
          padding: { right: 50 },
      },
      plugins: {
          legend: { display: true },
          title: { display: true, text: '2026年 新規会員数・退会数の月次推移（人）' },
          datalabels: {
              display: true,
              anchor: 'end',
              align: function(context) {
                  const datasets = context.chart.data.datasets;
                  const v0 = datasets[0].data[context.dataIndex];
                  const v1 = datasets[1].data[context.dataIndex];
                  if (context.datasetIndex === 0) {
                      return v0 >= v1 ? 'top' : 'bottom';
                  } else {
                      return v1 > v0 ? 'top' : 'bottom';
                  }
              },
              offset: 4,
              formatter: function(value) { return value ; },
          },
      },
      scales: {
          x: { grid: { display: false }, offset: true },
          y: {
              min: 25,
              max: 105,
              ticks: { stepSize: 20 },
          },
      },
  }}
/>

<SreGenericChart
  chartType="line"
  maxWidth="700px"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      datasets: [
          {
              label: '新規会員数',
              data: [82, 74, 68, 78, 65, 58, 55, 60, 67, 72, 68, 75],
              borderColor: '#0072B2',
              backgroundColor: '#0072B2',
              pointRadius: 0,
          },
          {
              label: '退会数',
              data: [40, 43, 50, 52, 56, 65, 68, 60, 58, 54, 46, 50],
              borderColor: '#E69F00',
              backgroundColor: '#E69F00',
              pointRadius: 0,
          },
      ],
  }}
  chartOptions={{
      layout: {
          padding: { right: 50 },
      },
      plugins: {
          legend: { display: true },
          title: { display: true, text: '2026年 新規会員数・退会数の月次推移（人）' },
          datalabels: {
              display: function(context) {
                  return context.dataIndex === context.dataset.data.length - 1;
              },
              anchor: 'end',
              align: 'right',
              offset: 4,
              formatter: function(value) { return value ; },
          },
      },
      scales: {
          x: { grid: { display: false }, offset: true },
          y: {
              min: 25,
              max: 105,
              ticks: { stepSize: 20 },
          },
      },
  }}
/>

### 単位も一緒に表示しよう

データラベルをつけるときは、数値の意味が伝わるよう単位も一緒に表示しましょう（例：「242千円」「15%」）。  
軸タイトルやグラフタイトルに単位が書いてあれば省略できる場合もありますが、グラフ単体で意味が完結するよう意識しましょう。

## 注釈で文脈を補おう

グラフを見て「なぜここで急に変化しているんだろう？」と疑問に思ったことはないでしょうか。  
こうした疑問を解消するのが **注釈（アノテーション）** です。  
注釈は以下の場合に有用です。

- 急激な増減や外れ値がある場合の説明
- トレンドの転換点の説明
- 一部データが欠損している場合の補足

<SreGenericChart
  chartType="line"
  chartData={{
      labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
      datasets: [
          {
              label: 'サイト訪問者数',
              data: [1200, 1350, 3600, 1600, 1700, 1800],
              borderColor: '#0072B2',
              backgroundColor: 'rgba(0, 114, 178, 0.15)',
              pointRadius: 0,
          },
      ],
  }}
  chartOptions={{
      plugins: {
          legend: { display: false },
          title: { display: true, text: '月次サイト訪問者数' },
          datalabels: {
              display: function(context) {
                  return context.dataIndex === 2;
              },
              formatter: function() { return '大型セール開催'; },
              align: 'top',
              anchor: 'end',
              color: '#e05555',
          },
      },
      scales: {
          x: { grid: { display: false }, offset: true },
          y: { beginAtZero: true, ticks: { stepSize: 1000 } },
      },
  }}
/>

特に、レポートや論文のようなあとから変更できない資料では、グラフの中や近くに注釈を入れると親切です。  

### 注釈を書くときのポイント

注釈を入れる場所が決まったら、次は内容の書き方に気を付けましょう。

#### ① 事実と推測を区別する

「○月に大型セールを実施（事実）」と「競合の値下げが影響した可能性がある（推測）」では性質が異なります。  
推測の場合は「〜の可能性」「〜と考えられる」などと明示しましょう。

#### ② 原因か事実かを明示する

何が起きたかを述べるだけでなく、わかっている場合は原因も添えると読者の理解が深まります。

#### ③ 短く書く

注釈はグラフの補足であり主役ではありません。1〜2文以内に収め、詳細な説明が必要な場合は本文に誘導しましょう。

## 補助線を活用しよう

文字に加え、理解を促進するために補助線を入れるのも有効です。  
以下のような使い方ができます。

- **基準線**：目標値や平均値など、基準となる値を示す線。基準を超えたかどうかが一目でわかる。
- **トレンドライン**：データの全体的な傾向を示す線。ノイズを減らしてトレンドを把握しやすくする。
- **区切り線**：特定の期間やグループを区切る線。イベントの前後でデータを比較しやすくする。
- **注目ポイントの線**：特定のデータポイントを強調する線。重要なポイントを見逃さないようにする。

<SreGenericChart
    chartType="bar"
    chartData={{
        labels: ['事業所A', '事業所B', '事業所C', '事業所D', '事業所E'],
        datasets: [
            {
                label: '売上',
                data: [280, 242, 203, 180, 150],
                backgroundColor: ['rgba(180, 180, 180, 1)', 'rgba(180, 180, 180, 1)', 'rgba(180, 180, 180, 1)', 'rgb(210, 80, 60)', 'rgb(210, 80, 60)'],
            },
        ],
    }}
    chartOptions={{
        indexAxis: 'y',
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '事業所別売上',
            },
            datalabels: {
                display: true,
                color: function(context) {
                    return context.dataIndex < 3 ? '#222222' : '#ffffff';
                },
                formatter: function(value, context) {
                    return value + '千円';
                },
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                },
                ticks: {
                    stepSize: 50,
                    callback: function(value, index, ticks) {
                        return index < ticks.length - 1 ?
                        this.getLabelForValue(value) :
                        ['千円', this.getLabelForValue(value)];
                    },
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    }}
    referenceXLines={[{ x: 200, color: '#e05555', label: '目標: 200千円' }]}
/>

## レス・イズ・モアを意識しよう

**レス・イズ・モア（Less is more）** という言葉があります。  
**無駄な装飾をそぎ落とすことで本質を際立たせる**というデザインにおける重要な考え方です。  
グラフにおいても同じことが言えます。

タイトル・軸ラベル・凡例・データラベル・注釈——これらはすべて読者の理解を助けるための要素ですが、  
**詰め込みすぎると逆にノイズになります**。  
「このテキストがないと読者は理解できないか？」と自問しながら、  
**本当に必要な情報だけを残すことで、グラフの伝わる力は上がります**。  
足し算だけでなく、引き算の視点も持って可視化に臨みましょう。

## 参考資料

- [『データ視覚化のデザイン』](https://amzn.asia/d/eZEJuGJ)
- [『データビジュアライゼーションの教科書』](https://www.shuwasystem.co.jp/book/9784798053486.html)
- [Okabe-Ito](https://jfly.uni-koeln.de/color/#pallet)