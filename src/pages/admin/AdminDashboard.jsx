// AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [members, setMembers] = useState([]);
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Access denied. Please enter your secret key.');
      window.location.href = '/adminLogin';
      return;
    }

    fetchAllData(token);
  }, []);

  const fetchAllData = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const [memberRes, familyRes] = await Promise.all([
        axios.get('https://qmhr-backend.onrender.com/api/memberships', config),
        axios.get('https://qmhr-backend.onrender.com/api/families', config),
      ]);

      setMembers(memberRes.data);
      setFamilies(familyRes.data);
    } catch (err) {
      console.error('Error fetching data:', err);
      alert('Access denied. Your token is invalid or expired.');
      localStorage.removeItem('adminToken');
      window.location.href = '/adminLogin';
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="section">
        <h2>Registered Members</h2>
        <ul>
          {members.map((m) => (
            <li key={m._id}>
              {m.firstName} {m.lastName} - {m.email}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Registered Families</h2>
        <ul>
          {families.map((f) => (
            <li key={f._id}>
              {f.fullName} - {f.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
