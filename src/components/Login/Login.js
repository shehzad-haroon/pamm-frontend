import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../api';
import { useAuth } from '../../context/AuthContext';
import './Login.css';
import derivLogo from './deriv-logo.jpeg'; // Image import

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
  const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password
      });
      
      localStorage.setItem('token', response.data.token); // <-- Yeh line zaroor likhein
      localStorage.setItem('role', response.data.user.role); // e.g. "admin" ya "investor"
      login(response.data);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <img
        src={derivLogo}
        alt="Deriv Logo"
        style={{ width: 160, marginBottom: 32 }}
      />
      <div className="login-box">
        <h2>Deriv Investors Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;