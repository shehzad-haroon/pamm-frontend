import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';

const AddEquity = () => {
  const [form, setForm] = useState({ email: '', equity: '', unrealizedPL: '', balance: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/api/admin/equity`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('Equity/Balance updated!');
    } catch {
      setMessage('Error updating equity/balance');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="User Email" onChange={handleChange} required />
      <input name="equity" placeholder="Equity" onChange={handleChange} required />
      <input name="unrealizedPL" placeholder="Unrealized P/L" onChange={handleChange} required />
      <input name="balance" placeholder="Balance" onChange={handleChange} required />
      <button type="submit">Update Equity</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default AddEquity;