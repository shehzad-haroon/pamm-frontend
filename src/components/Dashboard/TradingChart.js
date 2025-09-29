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
        borderColor: '#2ecc40', // green accent
        backgroundColor: 'rgba(44,204,64,0.15)', // subtle green fill
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff', // white legend text
          font: {
            family: 'Poppins, Segoe UI, Arial, sans-serif',
            size: 14
          }
        }
      },
      title: {
        display: true,
        text: 'Trading Performance',
        color: '#fff', // white title
        font: {
          family: 'Poppins, Segoe UI, Arial, sans-serif',
          size: 18
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(44,204,64,0.08)'
        },
        ticks: {
          color: '#fff',
          font: {
            family: 'Poppins, Segoe UI, Arial, sans-serif'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(44,204,64,0.08)'
        },
        ticks: {
          color: '#fff',
          font: {
            family: 'Poppins, Segoe UI, Arial, sans-serif'
          }
        }
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