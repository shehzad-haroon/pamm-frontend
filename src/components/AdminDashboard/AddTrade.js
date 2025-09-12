import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';

const AddTrade = () => {
  const [form, setForm] = useState({ email: '', symbol: '', type: '', lot: '', profitLoss: '', balance: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/api/admin/trading-history`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Trade added!');
    } catch {
      setMessage('Error adding trade');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="User Email" onChange={handleChange} required />
      <input name="symbol" placeholder="Symbol" onChange={handleChange} required />
      <input name="type" placeholder="Type (buy/sell)" onChange={handleChange} required />
      <input name="lot" placeholder="Lot" onChange={handleChange} required />
      <input name="profitLoss" placeholder="P/L" onChange={handleChange} required />
      <input name="balance" placeholder="Balance" onChange={handleChange} required />
      <button type="submit">Add Trade</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default AddTrade;