import React from 'react';
import { Bar, Line, Pie, Doughnut, Scatter, Radar, Bubble } from 'react-chartjs-2';
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
// 1. BrowserOnlyをインポートします
import BrowserOnly from '@docusaurus/BrowserOnly';

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
  containerStyle?: React.CSSProperties;
  maxWidth?: string;
}

const SreGenericChart: React.FC<SreGenericChartProps> = ({ chartType, chartData, chartOptions, containerStyle, maxWidth = '700px' }) => {
  // 2. コンポーネント全体を<BrowserOnly>でラップします
  return (
    <BrowserOnly fallback={<div>グラフを読み込んでいます...</div>}>
      {() => {
        if (!chartType || !chartData) {
          return <p style={{ color: 'red', fontWeight: 'bold' }}>エラー: グラフを表示するには、'chartType' と 'chartData' プロパティが必須です。</p>;
        }

        const defaultContainerStyle: React.CSSProperties = {
          margin: 'auto',
          padding: '20px',
          maxWidth: maxWidth,
          boxSizing: 'border-box',
        };

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
      }}
    </BrowserOnly>
  );
};

export default SreGenericChart;