import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import './TradingHistory.css';

const TradingHistory = () => {
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/api/investor/trading-history`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTrades(response.data);
      } catch (error) {
        console.error('Error fetching trades:', error);
      }
    };

    fetchTrades();
  }, []);

  return (
    <div className="trading-history-container">
      <h1>Trading History</h1>
      <div className="trades-table">
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
            {trades.map((trade, index) => (
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
    </div>
  );
};

export default TradingHistory;