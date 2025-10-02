import React, { useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';

const CreateUser = () => {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    password: '', 
    accountId: '', 
    riskLevel: '',
    joinDate: new Date().toISOString().split('T')[0]  // Default to today's date
  });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      // Convert joinDate string to Date object before sending
      const formData = {
        ...form,
        joinDate: new Date(form.joinDate).toISOString()
      };
      await axios.post(`${API_URL}/api/admin/users`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage('User created!');
    } catch {
      setMessage('Error creating user');
    }
  };

  return (
    <div className="create-user-container">
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit} className="create-user-form">
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Account ID</label>
          <input
            name="accountId"
            value={form.accountId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Risk Level</label>
          <input
            name="riskLevel"
            value={form.riskLevel}
            onChange={handleChange}
            required
            placeholder="Risk Level"
          />
        </div>
        <div className="form-group">
          <label>Join Date</label>
          <input
            name="joinDate"
            type="date"
            value={form.joinDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Create User</button>
        {message && <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</div>}
      </form>
    </div>
  );
};

export default CreateUser;