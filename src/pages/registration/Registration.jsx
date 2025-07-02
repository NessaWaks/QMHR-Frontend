import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="registration-content">
        <h1>Queen of the Most Holy Rosary Church</h1>
        <p>
          Welcome to our official registration portal. Whether you're a family joining our parish community
          or an individual over 18, please choose your registration type to continue your spiritual journey with us.
        </p>

        <div className="registration-buttons">
          <Link to="/membershipRegistration" className="fill-btn">Membership Registration</Link>
          <Link to="/familyRegistration" className="fill-btn">Family Registration</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
