import React, { useState } from 'react';
import axios from 'axios';

const VerifyOtp = () => {
  const [form, setForm] = useState({ email: '', otp: '' });

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/verify-otp', form);
      alert('🎉 Account verified successfully');
    } catch (err) {
      alert(err.response?.data?.message || 'OTP verification failed');
    }
  };

  return (
    <div className="auth-form">
      <h2>Verify OTP</h2>
      <form onSubmit={handleVerify}>
        <input type="email" placeholder="Email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="text" placeholder="Enter OTP" required value={form.otp} onChange={e => setForm({ ...form, otp: e.target.value })} />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
