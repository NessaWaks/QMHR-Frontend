import React, { useState } from 'react';
import './NavigationBar.css';
import logo from '../assets/images/qmhr-logo.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="top-bar">
        <div className="logo-container">
          <img src={logo} alt="QMHR Logo" className="top-logo" />
          <h3 className="logo-text">QMHR</h3>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <div className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link className="a" to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link className="a" to="/profile" onClick={closeMenu}>Profile</Link></li>
          <li><Link className="a" to="/registration" onClick={closeMenu}>Registration</Link></li>
          <li><Link className="a" to="/announcement" onClick={closeMenu}>Announcement</Link></li>
          <li><Link className="a" to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link className="a" to="/logIn" onClick={closeMenu}>LogIn</Link></li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default NavigationBar;
