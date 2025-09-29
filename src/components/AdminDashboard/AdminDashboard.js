import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import AddTrade from './AddTrade';
import AddEquity from './AddEquity';
import InvestorList from './InvestorList';
import Transactions from './Transactions';
import InvestorProfile from './InvestorProfile';
import PerformanceChart from './PerformanceChart';


const sidebarStyle = {
  width: '220px',
  minHeight: '100vh',
  background: '#14281e',
  color: '#b6e2c6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 0',
  boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
};

const navLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '16px 28px',
  color: '#b6e2c6',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '1.08rem',
  borderRadius: '12px',
  marginBottom: '8px',
  transition: 'background 0.2s',
};

const activeNavLinkStyle = {
  background: '#1e3a2a',
  color: '#2ecc40',
};

const mainStyle = {
  flex: 1,
  padding: '32px',
  background: '#0c1812',
  minHeight: '100vh',
  color: '#fff',
};

const mobileSidebarStyle = {
  ...sidebarStyle,
  width: '100%',
  minHeight: 'unset',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: '12px 0',
};

const isMobile = window.innerWidth <= 700;

const AdminDashboard = () => (
  <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
    <aside style={isMobile ? mobileSidebarStyle : sidebarStyle}>
      <NavLink to="/admin-dashboard/create-user" style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Create User</NavLink>
      <NavLink to="/admin-dashboard/add-trade" style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Add Trade</NavLink>
      <NavLink to="/admin-dashboard/add-equity" style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Add Equity</NavLink>
      <NavLink to="/admin-dashboard/investors" style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Investor List</NavLink>
      <NavLink to="/admin-dashboard/transactions" style={({ isActive }) => isActive ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Transactions</NavLink>
    </aside>
    <main style={mainStyle}>
      <Routes>
        <Route path="create-user" element={<CreateUser />} />
        <Route path="add-trade" element={<AddTrade />} />
        <Route path="add-equity" element={<AddEquity />} />
        <Route path="investors" element={<InvestorList />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="investor/:id" element={<InvestorProfile />} />
        <Route path="performance/:id" element={<PerformanceChart />} />
      </Routes>
    </main>
  </div>
);

export default AdminDashboard;