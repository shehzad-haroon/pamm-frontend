import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import TradingChart from './TradingChart';
import DashboardWithWidgets from './DashboardWithWidgets';
import './Dashboard.css';

const Dashboard = () => {
  const [accountData, setAccountData] = useState({
    balance: 0,
    equity: 0,
    unrealizedPL: 0
  });

  const [tradingHistory, setTradingHistory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };

  const accountResponse = await axios.get(`${API_URL}/api/investor/account`, { headers });
        // If backend returns { balance, equity, unrealizedPL }
        setAccountData(accountResponse.data);

  const historyResponse = await axios.get(`${API_URL}/api/investor/trading-history`, { headers });
        setTradingHistory(historyResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Percentage Allocation Management Module</h1>
      
      {/* Account Overview Cards */}
      <div className="overview-cards">
        <div className="card">
          <h3>Balance</h3>
          <p>${(accountData.balance ?? accountData.user?.balance ?? 0).toFixed(2)}</p>
        </div>
        <div className="card">
          <h3>Equity</h3>
          <p>${(accountData.equity ?? accountData.user?.equity ?? 0).toFixed(2)}</p>
        </div>
        <div className="card">
          <h3>Unrealized P/L</h3>
          <p>${(accountData.unrealizedPL ?? accountData.user?.unrealizedPL ?? 0).toFixed(2)}</p>
        </div>
      </div>

      {/* Trading Chart */}
      <div className="chart-section">
        <h2>Performance Chart</h2>
        <TradingChart tradingHistory={tradingHistory} />
      </div>

      {/* Trading History Table */}
      <div className="trading-history">
        <h2>Trading History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Symbol</th>
              <th>Type</th>
              <th>Lot</th>
              <th>P/L</th>
            </tr>
          </thead>
          <tbody>
            {tradingHistory.map((trade, index) => (
              <tr key={index}>
                <td>{new Date(trade.date).toLocaleDateString()}</td>
                <td>{trade.symbol}</td>
                <td>{trade.type}</td>
                <td>{trade.lot}</td>
                <td className={trade.profitLoss >= 0 ? 'profit' : 'loss'}>
                  ${trade.profitLoss.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Market Dashboard Section */}
      <section className="live-market-section">
        <h2 className="live-market-title">Live Market Dashboard</h2>
        <DashboardWithWidgets />
      </section>
    </div>
  );
};

export default Dashboard;