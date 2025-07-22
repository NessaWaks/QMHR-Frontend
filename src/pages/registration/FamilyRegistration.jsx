import React, { useState } from 'react';
import './FamilyRegistration.css';
import axios from 'axios';

const FamilyRegistration = () => {
  const [headInfo, setHeadInfo] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    address: '',
    societyGroup: ''
  });

  const [familyMembers, setFamilyMembers] = useState([
    {
      fullName: '',
      age: '',
      relationship: '',
      gender: '',
      baptized: '',
      communion: '',
      confirmed: ''
    }
  ]);

  const handleHeadChange = (e) => {
    setHeadInfo({ ...headInfo, [e.target.name]: e.target.value });
  };

  const handleMemberChange = (index, e) => {
    const updated = [...familyMembers];
    updated[index][e.target.name] = e.target.value;
    setFamilyMembers(updated);
  };

  const addFamilyMember = () => {
    setFamilyMembers([
      ...familyMembers,
      {
        fullName: '',
        age: '',
        relationship: '',
        gender: '',
        baptized: '',
        communion: '',
        confirmed: ''
      }
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...headInfo,
        familyMembers: familyMembers.map((member) => ({
          ...member,
          baptized: member.baptized === 'Yes',
          holyCommunion: member.communion === 'Yes',
          confirmed: member.confirmed === 'Yes',
          societyGroup: headInfo.societyGroup
        }))
      };

      const res = await axios.post('https://qmhr-backend.onrender.com/api/families/register', payload);
      alert('🎉 Family registered successfully!');
      console.log(res.data);

      setHeadInfo({ fullName: '', phoneNumber: '', email: '', password: '', address: '', societyGroup: '' });
      setFamilyMembers([
        { fullName: '', age: '', relationship: '', gender: '', baptized: '', communion: '', confirmed: '' }
      ]);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('❌ Registration failed. Please try again.');
    }
  };

  return (
    <div className="family-form container mt-5 p-4 shadow">
      <h2 className="form-title text-center mb-4">Parish Family Registration</h2>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="section-title">Head of Family</div>
        <div className="col-md-6">
          <label>Full Name</label>
          <input type="text" className="form-control" name="fullName" value={headInfo.fullName} onChange={handleHeadChange} required />
        </div>
        <div className="col-md-6">
          <label>Phone Number</label>
          <input type="tel" className="form-control" name="phoneNumber" value={headInfo.phoneNumber} onChange={handleHeadChange} required />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={headInfo.email} onChange={handleHeadChange} required />
        </div>
        {/* <div className="col-md-6">
          <label>Password</label>
          <input type="password" className="form-control" name="password" value={headInfo.password} onChange={handleHeadChange} required />
        </div> */}
        <div className="col-md-12">
          <label>Address</label>
          <input type="text" className="form-control" name="address" value={headInfo.address} onChange={handleHeadChange} required />
        </div>

        {familyMembers.map((member, index) => (
          <React.Fragment key={index}>
            <div className="section-title mt-4">Family Member {index + 1}</div>
            <div className="col-md-4">
              <label>Full Name</label>
              <input type="text" className="form-control" name="fullName" value={member.fullName} onChange={(e) => handleMemberChange(index, e)} required />
            </div>
            <div className="col-md-2">
              <label>Age</label>
              <input type="number" className="form-control" name="age" value={member.age} onChange={(e) => handleMemberChange(index, e)} required />
            </div>
            <div className="col-md-3">
              <label>Relationship</label>
              <input type="text" className="form-control" name="relationship" value={member.relationship} onChange={(e) => handleMemberChange(index, e)} required />
            </div>
            <div className="col-md-3">
              <label>Gender</label>
              <select className="form-control" name="gender" value={member.gender} onChange={(e) => handleMemberChange(index, e)} required>
                <option value="">-- Select --</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Baptized?</label>
              <select className="form-control" name="baptized" value={member.baptized} onChange={(e) => handleMemberChange(index, e)} required>
                <option value="">-- Select --</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Holy Communion?</label>
              <select className="form-control" name="communion" value={member.communion} onChange={(e) => handleMemberChange(index, e)} required>
                <option value="">-- Select --</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Confirmed?</label>
              <select className="form-control" name="confirmed" value={member.confirmed} onChange={(e) => handleMemberChange(index, e)} required>
                <option value="">-- Select --</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </React.Fragment>
        ))}

        <div className="col-12 text-center mt-3">
          <button type="button" onClick={addFamilyMember} className="btn btn-secondary">
            Add Another Family Member
          </button>
        </div>

        <div className="col-md-12 mt-4">
          <label>Parish Group or Society (optional)</label>
          <input type="text" className="form-control" name="societyGroup" value={headInfo.societyGroup} onChange={handleHeadChange} />
        </div>

        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-dark submit-btn">Register Family</button>
        </div>
      </form>
    </div>
  );
};

export default FamilyRegistration;
