import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token');
  const res = await axios.get(`${API_URL}/api/admin/transactions`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTransactions(res.data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>All Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>User</th><th>Type</th><th>Amount</th><th>Status</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(tx => (
            <tr key={tx._id}>
              <td>{tx.userId?.name}</td>
              <td>{tx.type}</td>
              <td>{tx.amount}</td>
              <td>{tx.status}</td>
              <td>{new Date(tx.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;