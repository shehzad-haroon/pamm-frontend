import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import TradingChart from '../Dashboard/TradingChart'; // ya jahan se bhi import hota hai
import './Analytics.css';

const Analytics = () => {
  const [tradingHistory, setTradingHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
  const res = await axios.get(`${API_URL}/api/investor/trading-history`, { headers });
        setTradingHistory(res.data);
      } catch (error) {
        setTradingHistory([]);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="analytics-container">
      <div className="analytics-card">
        <h2>Performance Analytics</h2>
        <div className="analytics-chart-section">
          <TradingChart tradingHistory={tradingHistory} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;