import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import CreateUser from './CreateUser';
import AddTrade from './AddTrade';
import AddEquity from './AddEquity';
import InvestorList from './InvestorList';
import Transactions from './Transactions';
import InvestorProfile from './InvestorProfile';
import PerformanceChart from './PerformanceChart';

const AdminDashboard = () => (
  <div style={{ display: 'flex' }}>
    <aside style={{ width: 200, background: '#eee', padding: 20 }}>
      <NavLink to="/admin-dashboard/create-user">Create User</NavLink><br />
      <NavLink to="/admin-dashboard/add-trade">Add Trade</NavLink><br />
      <NavLink to="/admin-dashboard/add-equity">Add Equity</NavLink><br />
      <NavLink to="/admin-dashboard/investors">Investor List</NavLink><br />
      <NavLink to="/admin-dashboard/transactions">Transactions</NavLink><br />
    </aside>
    <main style={{ flex: 1, padding: 20 }}>
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