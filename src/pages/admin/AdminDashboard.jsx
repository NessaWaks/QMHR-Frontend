import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';


const AdminDashboard = () => {
  const [members, setMembers] = useState([]);
  const [families, setFamilies] = useState([]);
  const [editMemberId, setEditMemberId] = useState(null);
  const [editFamilyId, setEditFamilyId] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const memberRes = await axios.get('https://qmhr-backend-2.onrender.com/api/memberships');
      const familyRes = await axios.get('https://qmhr-backend-2.onrender.com/api/families');
      setMembers(memberRes.data);
      setFamilies(familyRes.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const handleEditClick = (user, type) => {
    setEditForm(user);
    if (type === 'member') setEditMemberId(user._id);
    else setEditFamilyId(user._id);
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (type) => {
    try {
      const url = type === 'member'
        ? `https://qmhr-backend-2.onrender.com/api/memberships/${editMemberId}`
        : `https://qmhr-backend-2.onrender.com/api/families/${editFamilyId}`;
      await axios.put(url, editForm);
      alert('Updated successfully');
      setEditMemberId(null);
      setEditFamilyId(null);
      fetchAllData();
    } catch (err) {
      alert('Update failed');
    }
  };

  const handleDelete = async (id, type) => {
    try {
      const url = type === 'member'
        ? `https://qmhr-backend-2.onrender.com/api/memberships/${id}`
        : `https://qmhr-backend-2.onrender.com/api/families/${id}`;
      await axios.delete(url);
      alert('Deleted successfully');
      fetchAllData();
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="section">
        <h2>Memberships</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Group</th>
              <th>Action</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {members.map((m) => (
              <tr key={m._id}>
                <td>{m.firstName} {m.lastName}</td>
                <td>{m.email}</td>
                <td>{m.societyGroup}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditClick(m, 'member')}>Edit</button>
                  <button className="edit-btn" onClick={() => handleDelete(m._id, 'member')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editMemberId && (
          <div className="edit-form">
            <input name="firstName" value={editForm.firstName || ''} onChange={handleChange} />
            <input name="lastName" value={editForm.lastName || ''} onChange={handleChange} />
            <input name="email" value={editForm.email || ''} onChange={handleChange} />
            <input name="societyGroup" value={editForm.societyGroup || ''} onChange={handleChange} />
            <button onClick={() => handleUpdate('member')}>Update</button>
          </div>
        )}
      </div>

      <div className="section">
        <h2>Families</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {families.map((f) => (
              <tr key={f._id}>
                <td>{f.fullName}</td>
                <td>{f.email}</td>
                <td>{f.address}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditClick(f, 'family')}>Edit</button>
                  <button className="edit-btn" onClick={() => handleDelete(f._id, 'family')}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {editFamilyId && (
          <div className="edit-form">
            <input name="fullName" value={editForm.fullName || ''} onChange={handleChange} />
            <input name="email" value={editForm.email || ''} onChange={handleChange} />
            <input name="address" value={editForm.address || ''} onChange={handleChange} />
            <button onClick={() => handleUpdate('family')}>Update</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
