import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import { NavLink } from 'react-router-dom';

const InvestorList = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      const token = localStorage.getItem('token');
  const res = await axios.get(`${API_URL}/api/admin/investors`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setInvestors(res.data);
    };
    fetchInvestors();
  }, []);

  return (
    <div>
      <h2>Investor List</h2>
      <ul>
        {investors.map(inv => (
          <li key={inv._id}>
            <NavLink to={`/admin-dashboard/investor/${inv._id}`}>{inv.name} ({inv.email})</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestorList;