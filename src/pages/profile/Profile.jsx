import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'John Doe',
    role: 'Adult Catholic Member',
    email: 'johndoe@example.com',
    phone: '(123) 456-7890',
    address: 'Queen of the most holy rosary Parish, Lagos, Nigeria',
    baptismDate: 'March 20, 2010',
    confirmationName: 'Anthony',
    communionDate: 'June 15, 2012',
    registeredGroup: 'Sacred Heart of Jesus',
    familySize: 0,
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="left-section">
          <img
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <p>{user.address}</p>
          <div className="button-group">
            <button className="btn-message">Message</button>
            <button className="btn-edit">Edit</button>
          </div>
        </div>

        <div className="right-section">
          <h3>Basic Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>

          <h3>Church Details</h3>
          <p><strong>Baptism Date:</strong> {user.baptismDate}</p>
          <p><strong>Confirmation Name:</strong> {user.confirmationName}</p>
          <p><strong>First Communion:</strong> {user.communionDate}</p>
          <p><strong>Registered Group:</strong> {user.registeredGroup}</p>
          <p><strong>Family Size:</strong> {user.familySize}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
