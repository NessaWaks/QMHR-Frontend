// FamilyRegistration.jsx
import React from 'react';
import './FamilyRegistration.css';

const FamilyRegistration = () => {
  return (
    <div className="family-form container mt-5 p-4 shadow">
      <h2 className="form-title text-center mb-4">Parish Family Registration</h2>
      
      <form className="row g-3">
        {/* Head of Family Info */}
        <div className="section-title">Head of Family</div>
        <div className="col-md-6">
          <label>Full Name</label>
          <input type="text" className="form-control" placeholder="Enter full name" />
        </div>
        <div className="col-md-6">
          <label>Phone Number</label>
          <input type="tel" className="form-control" />
        </div>
        <div className="col-md-6">
          <label>Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="col-md-6">
          <label>Address</label>
          <input type="text" className="form-control" placeholder="Street, Town, Area" />
        </div>

        {/* Family Members */}
        <div className="section-title">Family Member 1</div>
        <div className="col-md-4">
          <label>Full Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-2">
          <label>Age</label>
          <input type="number" className="form-control" />
        </div>
        <div className="col-md-3">
          <label>Relationship</label>
          <input type="text" className="form-control" placeholder="e.g., Daughter" />
        </div>
        <div className="col-md-3">
          <label>Gender</label>
          <select className="form-control">
            <option>-- Select --</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Sacraments */}
        <div className="col-md-4">
          <label>Baptized?</label>
          <select className="form-control">
            <option>-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Holy Communion?</label>
          <select className="form-control">
            <option>-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="col-md-4">
          <label>Confirmed?</label>
          <select className="form-control">
            <option>-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Parish Group */}
        <div className="col-md-12">
          <label>Parish Group or Society (optional)</label>
          <input type="text" className="form-control" placeholder="e.g., Legion of Mary, CMO, Choir" />
        </div>

        {/* Submit */}
        <div className="col-12 text-center mt-4">
          <button type="submit" className="btn btn-dark submit-btn">Register Family</button>
        </div>
      </form>
    </div>
  );
};

export default FamilyRegistration;