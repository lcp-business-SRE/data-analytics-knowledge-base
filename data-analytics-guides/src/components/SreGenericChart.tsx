import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
// Chart.js のコンポーネントをインポート
import { Bar, Line, Pie, Doughnut, Scatter, Radar, Bubble } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.js の型定義をインポート
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  BubbleController,
  ScatterController,
  Tooltip,
  Legend,
  Title,
  SubTitle,
  ChartOptions,
  ChartData,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  BubbleController,
  ScatterController,
  Tooltip,
  Legend,
  Title,
  SubTitle,
  ChartDataLabels
);

// datalabels はデフォルト非表示。chartOptions.plugins.datalabels.display で個別に有効化する
ChartJS.defaults.set('plugins.datalabels', { display: false });

interface ReferenceLine {
  y: number;
  color?: string;
  dash?: number[];
  label?: string;
  labelPosition?: 'left' | 'right'; // デフォルト: 'right'
}

interface ReferenceXLine {
  x: number;
  color?: string;
  dash?: number[];
  label?: string;
  labelPosition?: 'top' | 'bottom'; // デフォルト: 'top'
}

interface SreGenericChartProps {
  chartType: 'bar' | 'line' | 'pie' | 'doughnut' | 'scatter' | 'radar' | 'bubble';
  chartData: ChartData<SreGenericChartProps['chartType'], any[], any>;
  chartOptions?: ChartOptions<SreGenericChartProps['chartType']>;
  // 新しく追加するプロップ
  containerStyle?: React.CSSProperties; // コンテナに適用するスタイル
  maxWidth?: string; // 最大幅 (例: '800px', '70%')
  referenceLines?: ReferenceLine[]; // 水平参照線
  referenceXLines?: ReferenceXLine[]; // 垂直参照線
}

const SreGenericChart: React.FC<SreGenericChartProps> = ({ chartType, chartData, chartOptions, containerStyle, maxWidth = '700px', referenceLines, referenceXLines }) => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const textColor = isDark ? '#cccccc' : '#333333';

  const gridColor = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';
  const borderColor = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mergedOptions: any = {
    ...chartOptions,
    plugins: {
      ...chartOptions?.plugins,
      legend: {
        ...chartOptions?.plugins?.legend,
        labels: {
          color: textColor,
          ...(chartOptions?.plugins?.legend?.labels as object),
        },
      },
      title: {
        color: textColor,
        ...chartOptions?.plugins?.title,
      },
      subtitle: {
        color: textColor,
        ...chartOptions?.plugins?.subtitle,
      },
      datalabels: {
        color: textColor,
        ...chartOptions?.plugins?.datalabels,
      },
    },
    scales: (() => {
      // pie / doughnut はスケールを持たないため適用しない
      if (chartType === 'pie' || chartType === 'doughnut') {
        return undefined;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const userScales = (chartOptions?.scales as any) ?? {};

      if (chartType === 'radar') {
        const userScale = userScales.r ?? {};
        const mergedScales: Record<string, any> = {
          r: {
            ...userScale,
            ticks:  { color: textColor, ...userScale.ticks },
            grid:   { color: gridColor, ...userScale.grid },
            border: { color: borderColor, ...userScale.border },
            title:  { color: textColor, ...userScale.title },
          },
        };
        // r 以外のスケールが指定されていればそのまま引き継ぐ
        for (const key of Object.keys(userScales)) {
          if (key !== 'r') {
            mergedScales[key] = userScales[key];
          }
        }
        return mergedScales;
      }

      const mergedScales: Record<string, any> = {};
      // デフォルトの x/y をベースに生成
      for (const key of ['x', 'y']) {
        const userScale = userScales[key] ?? {};
        mergedScales[key] = {
          ...userScale,
          ticks:  { color: textColor,  ...userScale.ticks },
          grid:   { color: gridColor,  ...userScale.grid },
          border: { color: borderColor, ...userScale.border },
          title:  { color: textColor,  ...userScale.title },
        };
      }
      // x/y 以外のスケール（例: r）もそのまま引き継ぐ
      for (const key of Object.keys(userScales)) {
        if (key !== 'x' && key !== 'y') {
          mergedScales[key] = userScales[key];
        }
      }
      return mergedScales;
    })(),
  };

  if (!chartType || !chartData) {
    return <p style={{ color: 'red', fontWeight: 'bold' }}>エラー: グラフを表示するには、'chartType' と 'chartData' プロパティが必須です。</p>;
  }

  // デフォルトのコンテナスタイル
  const defaultContainerStyle: React.CSSProperties = {
    margin: 'auto', // 中央揃え
    padding: '20px', // 上下のパディング
    maxWidth: maxWidth, // 最大幅
    boxSizing: 'border-box', // パディングを幅に含める
  };

  // ユーザー定義のスタイルとデフォルトスタイルをマージ
  const finalContainerStyle = { ...defaultContainerStyle, ...containerStyle };

  const renderChart = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = chartData as any;
    // referenceLines を afterDraw で描画するインラインプラグイン
    const hasRefLines = (referenceLines && referenceLines.length > 0) || (referenceXLines && referenceXLines.length > 0);
    const refLinePlugin = hasRefLines ? [{
      id: 'referenceLines',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      afterDraw(chart: any) {
        const { ctx, chartArea, scales } = chart;
        if (!chartArea) return;
        ctx.save();
        // 水平参照線（y軸）
        if (referenceLines && scales?.y) {
          for (const line of referenceLines) {
            const yPx = scales.y.getPixelForValue(line.y);
            ctx.beginPath();
            ctx.moveTo(chartArea.left, yPx);
            ctx.lineTo(chartArea.right, yPx);
            ctx.lineWidth = 2;
            ctx.strokeStyle = line.color ?? '#555555';
            if (line.dash) ctx.setLineDash(line.dash);
            else ctx.setLineDash([6, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            if (line.label) {
              ctx.fillStyle = line.color ?? '#555555';
              ctx.font = '11px sans-serif';
              if (line.labelPosition === 'left') {
                ctx.textAlign = 'left';
                ctx.fillText(line.label, chartArea.left + 4, yPx - 4);
              } else {
                ctx.textAlign = 'right';
                ctx.fillText(line.label, chartArea.right - 4, yPx - 4);
              }
              ctx.textAlign = 'start';
            }
          }
        }
        // 垂直参照線（x軸）
        if (referenceXLines && scales?.x) {
          for (const line of referenceXLines) {
            const xPx = scales.x.getPixelForValue(line.x);
            ctx.beginPath();
            ctx.moveTo(xPx, chartArea.top);
            ctx.lineTo(xPx, chartArea.bottom);
            ctx.lineWidth = 2;
            ctx.strokeStyle = line.color ?? '#555555';
            if (line.dash) ctx.setLineDash(line.dash);
            else ctx.setLineDash([6, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
            if (line.label) {
              ctx.fillStyle = line.color ?? '#555555';
              ctx.font = '11px sans-serif';
              if (line.labelPosition === 'bottom') {
                ctx.fillText(line.label, xPx + 4, chartArea.bottom + 12);
              } else {
                ctx.fillText(line.label, xPx + 4, chartArea.top - 4);
              }
            }
          }
        }
        ctx.restore();
      },
    }] : [];
    switch (chartType) {
      case 'bar': return <Bar data={data} options={mergedOptions} plugins={refLinePlugin} />;
      case 'line': return <Line data={data} options={mergedOptions} plugins={refLinePlugin} />;
      case 'pie': return <Pie data={data} options={mergedOptions} />;
      case 'doughnut': return <Doughnut data={data} options={mergedOptions} />;
      case 'scatter': return <Scatter data={data} options={mergedOptions} plugins={refLinePlugin} />;
      case 'radar': return <Radar data={data} options={mergedOptions} />;
      case 'bubble': return <Bubble data={data} options={mergedOptions} plugins={refLinePlugin} />;
      default:
        return <p style={{ color: 'red', fontWeight: 'bold' }}>エラー: サポートされていないグラフタイプ「{chartType}」です。</p>;
    }
  };

  return (
    <div style={finalContainerStyle}>
      {renderChart()}
    </div>
  );
};

export default SreGenericChart;