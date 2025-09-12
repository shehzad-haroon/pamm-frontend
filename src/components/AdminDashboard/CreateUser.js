import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';

const CreateUser = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', accountId: '', riskLevel: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/api/admin/users`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('User created!');
    } catch {
      setMessage('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
      <input name="accountId" placeholder="Account ID" onChange={handleChange} required />
      <input name="riskLevel" placeholder="Risk Level" onChange={handleChange} required />
      <button type="submit">Create User</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default CreateUser;