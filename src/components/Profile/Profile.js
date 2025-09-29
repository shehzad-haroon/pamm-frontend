import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_URL from '../../api';
import './Profile.css'; // Apni CSS file import karen (agar hai)

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
  const res = await axios.get(`${API_URL}/api/investor/profile`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(res.data);
      } catch (error) {
        setProfile(null);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-card">
        <div><strong>Name:</strong> {profile.name}</div>
        <div><strong>Email:</strong> {profile.email}</div>
  <div><strong>Account ID:</strong> {profile.accountId || profile._id}</div>
        <div><strong>Joined:</strong> {
          (() => {
            const dateStr = profile.joined || profile.joinDate || profile.createdAt || profile.updatedAt;
            if (!dateStr) return 'N/A';
            const date = new Date(dateStr);
            return !isNaN(date.getTime()) ? date.toLocaleDateString() : 'N/A';
          })()
        }</div>
        <div><strong>Risk Level:</strong> {profile.riskLevel}</div>
        {/* Aur bhi fields apne design ke hisaab se add karen */}
      </div>
    </div>
  );
};

export default Profile;