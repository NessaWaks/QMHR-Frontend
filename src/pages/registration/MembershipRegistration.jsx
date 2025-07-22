import React, { useState } from 'react';
import './MembershipRegistration.css';
import axios from 'axios';

const MembershipRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    homeAddress: '',
    phoneNumber: '',
    email: '',
    password: '',
    haveBaptism: '',
    haveReceivedCommunion: '',
    haveConfirmed: '',
    societyGroup: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const dataToSend = {
        ...formData,
        haveBaptism: formData.haveBaptism === "Yes",
        haveReceivedCommunion: formData.haveReceivedCommunion === "Yes",
        haveConfirmed: formData.haveConfirmed === "Yes",
      };
  
      const res = await axios.post('https://qmhr-backend.onrender.com/api/memberships/register', dataToSend);
      alert('🎉 Registration Successful!');
      console.log(res.data);
  
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        homeAddress: '',
        phoneNumber: '',
        email: '',
        password: '',
        haveBaptism: '',
        haveReceivedCommunion: '',
        haveConfirmed: '',
        societyGroup: '',
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('❌ Registration Failed. Please try again.');
    }
  };
  

  return (
    <div className="membership-form container mt-5 p-4 shadow">
      <h2 className="form-title text-center mb-4">Parish Membership Registration</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        {/* Personal Info */}
        <div className="col-md-6">
          <label>First Name</label>
          <input type="text" name="firstName" className="form-control" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label>Last Name</label>
          <input type="text" name="lastName" className="form-control" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label>Date of Birth</label>
          <input type="date" name="dob" className="form-control" value={formData.dob} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label>Gender</label>
          <select name="gender" className="form-control" value={formData.gender} onChange={handleChange} required>
            <option value="">-- Select Gender --</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Contact Info */}
        <div className="col-md-12">
          <label>Home Address</label>
          <input type="text" name="homeAddress" className="form-control" value={formData.homeAddress} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label>Phone Number</label>
          <input type="tel" name="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Password */}
        <div className="col-md-12">
          <label>Create Password</label>
          <input type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
        </div>

        {/* Sacraments */}
        <div className="col-md-4">
          <label>Have you received Baptism?</label>
          <select name="haveBaptism" className="form-control" value={formData.haveBaptism} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Have you received Holy Communion?</label>
          <select name="haveReceivedCommunion" className="form-control" value={formData.haveReceivedCommunion} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Have you received Confirmation?</label>
          <select name="haveConfirmed" className="form-control" value={formData.haveConfirmed} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Society Group */}
        <div className="col-md-12">
          <label>Are you part of any parish society/group?</label>
          <input type="text" name="societyGroup" className="form-control" placeholder="e.g., Legion of Mary, Choir, CWO" value={formData.societyGroup} onChange={handleChange} />
        </div>

        {/* Submit */}
        <div className="col-12 text-center mt-3">
          <button type="submit" className="btn btn-dark submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MembershipRegistration;
