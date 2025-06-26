import React from 'react';
// Chart.js のコンポーネントをインポート
import { Bar, Line, Pie, Doughnut, Scatter, Radar, Bubble } from 'react-chartjs-2';

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
  Title
);

interface SreGenericChartProps {
  chartType: 'bar' | 'line' | 'pie' | 'doughnut' | 'scatter' | 'radar' | 'bubble';
  chartData: ChartData<SreGenericChartProps['chartType'], any[], any>;
  chartOptions?: ChartOptions<SreGenericChartProps['chartType']>;
  // 新しく追加するプロップ
  containerStyle?: React.CSSProperties; // コンテナに適用するスタイル
  maxWidth?: string; // 最大幅 (例: '800px', '70%')
}

const SreGenericChart: React.FC<SreGenericChartProps> = ({ chartType, chartData, chartOptions, containerStyle, maxWidth = '700px' }) => {
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
    switch (chartType) {
      case 'bar': return <Bar data={chartData} options={chartOptions} />;
      case 'line': return <Line data={chartData} options={chartOptions} />;
      case 'pie': return <Pie data={chartData} options={chartOptions} />;
      case 'doughnut': return <Doughnut data={chartData} options={chartOptions} />;
      case 'scatter': return <Scatter data={chartData} options={chartOptions} />;
      case 'radar': return <Radar data={chartData} options={chartOptions} />;
      case 'bubble': return <Bubble data={chartData} options={chartOptions} />;
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