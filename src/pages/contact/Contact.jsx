// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header bounce-in-top">
        <h1>Contact Queen of the Most Holy Rosary Parish</h1>
        <p>We’d love to hear from you!</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form fade-in-left">
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Parish Info */}
        <div className="parish-info fade-in-right">
          <h3>Parish Office</h3>
          <p><strong>Address:</strong> 123 Church Road, Rosary Town</p>
          <p><strong>Phone:</strong> +234 812 345 6789</p>
          <p><strong>Email:</strong> info@holyrosaryparish.org</p>
          <p><strong>Hours:</strong> Mon - Fri, 9AM - 5PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;