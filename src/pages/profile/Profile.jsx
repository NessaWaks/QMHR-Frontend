import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="left-section">
          <img
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h2>{user.name || user.fullName}</h2>
          <p>{user.role || 'Catholic Member'}</p>
          <p>{user.address}</p>
          <div className="button-group">
            <button className="btn-message">Message</button>
            <button className="btn-edit">Edit</button>
          </div>
        </div>

        <div className="right-section">
          <h3>Basic Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || user.phoneNumber}</p>

          <h3>Church Details</h3>
          <p><strong>Baptism:</strong> {user.baptismDate || (user.haveBaptism ? 'Yes' : 'No')}</p>
          <p><strong>Confirmation:</strong> {user.haveConfirmed ? 'Yes' : 'No'}</p>
          <p><strong>First Communion:</strong> {user.haveReceivedCommunion ? 'Yes' : 'No'}</p>
          <p><strong>Registered Group:</strong> {user.registeredGroup || user.societyGroup}</p>
          <p><strong>Family Size:</strong> {user.familyMembers?.length || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
