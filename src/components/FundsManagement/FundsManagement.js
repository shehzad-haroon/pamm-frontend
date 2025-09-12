import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import './FundsManagement.css';

const FundsManagement = () => {
  const [deposit, setDeposit] = useState({ name: '', email: '', amount: '', paymentMethod: '' });
  const [withdraw, setWithdraw] = useState({ name: '', email: '', amount: '', paymentMethod: '' });
  const [message, setMessage] = useState('');

  const handleDeposit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/api/transaction/deposit`, deposit, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Deposit request submitted!');
      setDeposit({ name: '', email: '', amount: '', paymentMethod: '' });
    } catch {
      setMessage('Deposit failed.');
    }
  };

  const handleWithdraw = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/api/transaction/withdraw`, withdraw, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Withdrawal request submitted!');
      setWithdraw({ name: '', email: '', amount: '', paymentMethod: '' });
    } catch {
      setMessage('Withdrawal failed.');
    }
  };

  return (
    <div className="funds-management">
      <h2>Deposit Funds</h2>
      <form onSubmit={handleDeposit}>
        <input
          type="text"
          placeholder="Name"
          value={deposit.name}
          onChange={e => setDeposit({ ...deposit, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={deposit.email}
          onChange={e => setDeposit({ ...deposit, email: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={deposit.amount}
          onChange={e => setDeposit({ ...deposit, amount: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Payment Method"
          value={deposit.paymentMethod}
          onChange={e => setDeposit({ ...deposit, paymentMethod: e.target.value })}
          required
        />
        <button type="submit">Deposit</button>
      </form>

      <h2>Withdraw Funds</h2>
      <form onSubmit={handleWithdraw}>
        <input
          type="text"
          placeholder="Name"
          value={withdraw.name}
          onChange={e => setWithdraw({ ...withdraw, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={withdraw.email}
          onChange={e => setWithdraw({ ...withdraw, email: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={withdraw.amount}
          onChange={e => setWithdraw({ ...withdraw, amount: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Payment Method"
          value={withdraw.paymentMethod}
          onChange={e => setWithdraw({ ...withdraw, paymentMethod: e.target.value })}
          required
        />
        <button type="submit">Withdraw</button>
      </form>

      {message && <div className="funds-message">{message}</div>}
    </div>
  );
};

export default FundsManagement;