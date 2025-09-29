import React from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';
import './Layout.css';

const Layout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        {/* Removed top logout button */}
        <main>
          <Outlet />
        </main>
        {/* <NavLink to="/admin-dashboard/create-user">Manage</NavLink> */}
      </div>
    </div>
  );
};

export default Layout;