import React from 'react'
import React, { useState } from 'react';
import axios from 'axios';



const resendOtp = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error verifying OTP');
    }
  };

  const handleResend = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/resend-otp', { email });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error resending OTP');
    }
  };

  return (
    <div className="form-container">
      <h2>Email Verification</h2>
      <form onSubmit={handleVerify}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} required />
        <button type="submit">Verify OTP</button>
        <button type="button" onClick={handleResend}>Resend OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default resendOtp;