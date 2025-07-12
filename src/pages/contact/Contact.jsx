// Contact.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await axios.post('https://qmhr-backend.onrender.com/api/contact', form);
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header bounce-in-top">
        <h1>Contact Queen of the Most Holy Rosary Parish</h1>
        <p>We’d love to hear from you!</p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form fade-in-left" onSubmit={handleSubmit}>
          <h3>Send Us a Message</h3>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={form.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={form.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5" 
            value={form.message} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button type="submit">Send Message</button>
          <p className="status-text">{status}</p>
        </form>

        {/* Parish Info */}
        <div className="parish-info fade-in-right">
          <h3>Parish Office</h3>
          <p><strong>Address:</strong> 76 Sanya-Aguda Surulere</p>
          <p><strong>Phone:</strong> +234 9125127678</p>
          <p><strong>Email:</strong> qmhrsanya@gmail.com</p>
          <p><strong>Hours:</strong> Mon - Fri, 9AM - 5PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
