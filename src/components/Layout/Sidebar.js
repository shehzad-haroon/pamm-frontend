import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      if (window.innerWidth > 700) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    if (isMobile) setMobileOpen(false);
  };

  const handleSupportClick = () => {
    if (isMobile) setMobileOpen(false);
    if (!window.Tawk_API) {
      const s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://embed.tawk.to/68bf531c67c586192c66b892/1j4llpafv';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.body.appendChild(s1);
    }
  };

  const handleNavClick = () => {
    if (isMobile) setMobileOpen(false);
  };

  return (
    <>
      {isMobile && (
        <button
          className="sidebar-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open sidebar"
        >
          ☰
        </button>
      )}
      <div className={isMobile ? (mobileOpen ? 'sidebar mobile open' : 'sidebar mobile') : 'sidebar'}>
        <div className="sidebar-header">
          <span style={{ fontWeight: 700, color: '#2ecc40', fontSize: '1.5rem', letterSpacing: '1px', fontFamily: 'Poppins, Segoe UI, Arial, sans-serif' }}>Deriv </span>
          {isMobile && (
            <button
              className="sidebar-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close sidebar"
            >
              ×
            </button>
          )}
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
            Dashboard
          </NavLink>
          <NavLink to="/analytics" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
            Analytics
          </NavLink>
          <NavLink to="/trading-history" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
            Trading History
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
            Profile
          </NavLink>
          <NavLink to="/funds" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
            Funds Management
          </NavLink>
          {role === 'admin' && (
            <NavLink to="/admin-dashboard/create-user" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleNavClick}>
              Admin
            </NavLink>
          )}
        </nav>
        <div className="sidebar-footer">
          <button
            onClick={handleLogout}
            className="logout-btn"
            style={{
              fontSize: '0.97rem',
              padding: '8px 12px',
              marginBottom: '8px',
              width: '100%',
              borderRadius: '8px',
              fontWeight: 500,
              fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
            }}
          >
            Logout
          </button>
          <button
            onClick={handleSupportClick}
            style={{
              fontSize: '0.97rem',
              padding: '8px 12px',
              width: '100%',
              borderRadius: '8px',
              fontWeight: 500,
              fontFamily: 'Poppins, Segoe UI, Arial, sans-serif',
            }}
          >
            Support
          </button>
        </div>
      </div>
      {isMobile && mobileOpen && <div className="sidebar-backdrop" onClick={() => setMobileOpen(false)}></div>}
    </>
  );
};

export default Sidebar;