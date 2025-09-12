import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Profile/Profile';
import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute';
import Analytics from './components/Analytics/Analytics';
import TradingHistory from './components/TradingHistory/TradingHistory';
import FundsManagement from './components/FundsManagement/FundsManagement';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import DashboardWithWidgets from './components/Dashboard/DashboardWithWidgets';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          <Route element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="trading-history" element={<TradingHistory />} />
            <Route path="profile" element={<Profile />} />
            <Route path="funds" element={<FundsManagement />} />
            <Route path="/market-dashboard" element={<DashboardWithWidgets />} />
          </Route>
          <Route path="admin-dashboard/*" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;