import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TradingChart = ({ tradingHistory }) => {
  const data = {
    labels: tradingHistory.map(trade => 
      new Date(trade.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: 'Profit/Loss',
        data: tradingHistory.map(trade => trade.profitLoss),
        borderColor: '#2c7be5',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Trading Performance'
      }
    }
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default TradingChart;