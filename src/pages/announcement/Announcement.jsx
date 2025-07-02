// Announcement.jsx
import React from 'react';
import './Announcement.css';

const Announcement = () => {
  const announcements = [
    "Mass for the Assumption of Mary will be held on Thursday at 6PM.",
    "Baptism registration closes this Sunday after the 10AM Mass.",
    "All choir members are to attend the mandatory meeting on Saturday by 4PM.",
    "Rosary prayers every Wednesday and Friday at 5PM at the grotto.",
    "The Youth Group will have a hangout next weekend – sign up in the parish office."
  ];

  return (
    <div className="announcement-page">
      <div className="header">
        <h1>Queen of the Most Holy Rosary Parish</h1>
        <p className="subtitle">This Week’s Announcements</p>
      </div>

      <div className="announcements-container">
        {announcements.map((item, index) => (
          <div key={index} className="announcement-card animate-pop">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;