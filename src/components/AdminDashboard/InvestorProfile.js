import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import { useParams } from 'react-router-dom';

const InvestorProfile = () => {
  const { id } = useParams();
  const [investor, setInvestor] = useState(null);

  useEffect(() => {
    const fetchInvestor = async () => {
      const token = localStorage.getItem('token');
  const res = await axios.get(`${API_URL}/api/admin/investors`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const user = res.data.find(u => u._id === id);
      setInvestor(user);
    };
    fetchInvestor();
  }, [id]);

  if (!investor) return <div>Loading...</div>;

  return (
    <div>
      <h2>{investor.name}'s Profile</h2>
      <p>Email: {investor.email}</p>
      <p>Account ID: {investor.accountId}</p>
      <p>Joined: {new Date(investor.joined).toLocaleDateString()}</p>
      <p>Risk Level: {investor.riskLevel}</p>
      <p>Equity: {investor.equity}</p>
      <p>Unrealized P/L: {investor.unrealizedPL}</p>
    </div>
  );
};

export default InvestorProfile;