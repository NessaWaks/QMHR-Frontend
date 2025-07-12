import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error sending reset code');
    }
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgot}>
        <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Send Reset Code</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPassword;

