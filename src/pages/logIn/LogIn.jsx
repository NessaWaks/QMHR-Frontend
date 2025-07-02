import React, { useState } from 'react';
import './LogIn.css';

const LogIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="tabs">
          <span className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
            LOGIN
          </span>
          <span className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
            SIGN UP
          </span>
        </div>

        {isLogin ? (
          <form className="form">
            <label>Username</label>
            <input type="text" placeholder="Enter username" />
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
            <div className="checkbox-row ">
              <input type="checkbox" id="keepSignedIn" />
              <label htmlFor="keepSignedIn">Keep me signed in</label>
            </div>
            <button className="submit-btn">LOGIN</button>
            <p className="forgot">Forgot your password?</p>
          </form>
        ) : (
          <form className="form">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" />
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
            <label>Password</label>
            <input type="password" placeholder="Create password" />
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
            <button className="submit-btn">SIGN UP</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LogIn;
