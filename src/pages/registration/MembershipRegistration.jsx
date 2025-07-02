import React from 'react'
import './MembershipRegistration.css'
import Form from 'react-bootstrap/Form'

const MembershipRegistration = () => {
    return (
        <div className="membership-form container mt-5 p-4 shadow">
        <h2 className="form-title text-center mb-4">Parish Membership Registration</h2>
        <form className="row g-3">
  
          {/* Personal Info */}
          <div className="col-md-6">
            <label>First Name</label>
            <input type="text" className="form-control" placeholder="Enter First Name" />
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input type="text" className="form-control" placeholder="Enter Last Name" />
          </div>
          <div className="col-md-6">
            <label>Date of Birth</label>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-6">
            <label>Gender</label>
            <select className="form-control">
              <option>-- Select Gender --</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
  
          {/* Contact Info */}
          <div className="col-md-12">
            <label>Home Address</label>
            <input type="text" className="form-control" placeholder="Street / Area / Town" />
          </div>
          <div className="col-md-6">
            <label>Phone Number</label>
            <input type="tel" className="form-control" />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input type="email" className="form-control" />
          </div>
  
          {/* Sacraments */}
          <div className="col-md-4">
            <label>Have you received Baptism?</label>
            <select className="form-control">
              <option>-- Select --</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Have you received Holy Communion?</label>
            <select className="form-control">
              <option>-- Select --</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="col-md-4">
            <label>Have you received Confirmation?</label>
            <select className="form-control">
              <option>-- Select --</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
  
          {/* Parish Involvement */}
          <div className="col-md-12">
            <label>Are you part of any parish society/group?</label>
            <input type="text" className="form-control" placeholder="e.g., Legion of Mary, Choir, CWO" />
          </div>
  
          {/* Submit */}
          <div className="col-12 text-center mt-3">
            <button type="submit" className="btn btn-dark submit-btn">Submit</button>
          </div>
        </form>
      </div>
  
    );

}

export default MembershipRegistration