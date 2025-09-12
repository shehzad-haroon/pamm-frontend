import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [showSupport, setShowSupport] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Tawk.to script loader
  const handleSupportClick = () => {
    setShowSupport(true);
    if (!window.Tawk_API) {
      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68bf531c67c586192c66b892/1j4llpafv';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Deriv</h3>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
          Dashboard
        </NavLink>
        <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''}>
          Analytics
        </NavLink>
        <NavLink to="/trading-history" className={({ isActive }) => isActive ? 'active' : ''}>
          Trading History
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          Profile
        </NavLink>
        <NavLink to="/funds" className={({ isActive }) => isActive ? 'active' : ''}>
          Funds Management
        </NavLink>
        {role === 'admin' && (
          <NavLink to="/admin-dashboard/create-user" className={({ isActive }) => isActive ? 'active' : ''}>
            Admin
          </NavLink>
        )}
      </nav>
      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
        <button
          style={{
            marginTop: 20,
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            padding: '10px 20px',
            cursor: 'pointer'
          }}
          onClick={handleSupportClick}
        >
          Support
        </button>
      </div>
    </div>
  );
};

export default Sidebar;