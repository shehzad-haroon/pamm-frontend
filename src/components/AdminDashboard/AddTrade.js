import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';

const AddTrade = () => {
  const [form, setForm] = useState({ 
    email: '', 
    symbol: '', 
    type: '', 
    lot: '', 
    price: '',
    profitLoss: '', 
    balance: '',
    date: new Date().toISOString().split('T')[0]  // Default to today
  });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const formData = {
        ...form,
        date: new Date(form.date).toISOString()
      };
      await axios.post(`${API_URL}/api/admin/trading-history`, formData, {
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
      <input name="price" placeholder="Price" onChange={handleChange} required />
      <input name="profitLoss" placeholder="P/L" onChange={handleChange} required />
      <input name="balance" placeholder="Balance" onChange={handleChange} required />
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <button type="submit">Add Trade</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default AddTrade;