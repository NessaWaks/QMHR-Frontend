import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminGate.css';

const AdminGate = () => {
  const [secretKey, setSecretKey] = useState('');
  const navigate = useNavigate();

  const handleAccess = async () => {
    try {
      const response = await axios.post('https://qmhr-backend.onrender.com/api/verify-key', {
        key: "Rosary123!"
        ,
      });
  
      const { token } = response.data;
      localStorage.setItem('adminToken', token);
      navigate('/admin');
    } catch (error) {
      console.error('Access error:', error);
      alert('Invalid secret key or server error.');
    }
  };

  return (
    <div className="admin-gate">
      <div className="admin-gate-box">
        <h2> Admin Access</h2>
        <input
          type="password"
          placeholder="Enter secret key"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
        />
        <button onClick={handleAccess}>Enter</button>
      </div>
    </div>
  );
};

export default AdminGate;
