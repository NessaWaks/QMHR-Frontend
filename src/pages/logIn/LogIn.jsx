// import React, { useState } from 'react';
// import axios from 'axios';
// import './LogIn.css';

// const LogIn = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     otp: ''
//   });
//   const [step, setStep] = useState('signup'); // signup, verify, login, forgot
//   const [signupPasswordVisible, setSignupPasswordVisible] = useState(false);
//   const [signupConfirmVisible, setSignupConfirmVisible] = useState(false);
//   const [loginPasswordVisible, setLoginPasswordVisible] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };


//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     try {
//       await axios.post('https://qmhr-backend.onrender.com/api/auth/signup', {
//         email: formData.email,
//         password: formData.password,
//         role: 'admin' 
//       });
//       alert('OTP sent to your email');
//       setStep('verify');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Signup failed');
//     }
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://qmhr-backend.onrender.com/api/auth/verify-otp', {
//         email: formData.email,
//         otp: formData.otp
//       });
//       alert('Account verified! You can now log in.');
//       setStep('login');
//       setIsLogin(true);
//     } catch (err) {
//       alert(err.response?.data?.message || 'Verification failed');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://qmhr-backend.onrender.com/api/auth/login', {
//         email: formData.email,
//         password: formData.password
//       });
  
//       const { token, role } = res.data;
//       localStorage.setItem('token', token);
  
//       alert('Login successful');
  
//       if (role === 'admin') {
//         window.location.href = '/admin-dashboard'; // 👈 redirect admin
//       } else {
//         window.location.href = '/profile'; // 👈 redirect regular user
//       }
//     } catch (err) {
//       console.error('ERROR RESPONSE:', err.response);
//       alert(err.response?.data?.message || 'Login failed');
//     }
//   };
  

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://qmhr-backend.onrender.com/api/auth/forgot-password', {
//         email: formData.email
//       });
//       alert('OTP sent to email.');
//       setStep('verify');
//     } catch (err) {
//       alert(err.response?.data?.message || 'Failed to send OTP');
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <div className="tabs">
//           <span className={isLogin ? 'active' : ''} onClick={() => { setIsLogin(true); setStep('login'); }}>LOGIN</span>
//           <span className={!isLogin ? 'active' : ''} onClick={() => { setIsLogin(false); setStep('signup'); }}>SIGN UP</span>
//         </div>

//         {step === 'verify' ? (
//           <form className="form" onSubmit={handleVerify}>
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} readOnly className="form-control" />
//             <label>Enter OTP</label>
//             <input type="text" name="otp" value={formData.otp} onChange={handleChange} required />
//             <button className="submit-btn" type="submit">Verify</button>
//           </form>
//         ) : step === 'forgot' ? (
//           <form className="form" onSubmit={handleForgotPassword}>
//             <label>Enter your registered email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//             <button className="submit-btn" type="submit">Send OTP</button>
//           </form>
//         ) : isLogin ? (
//           <form className="form" onSubmit={handleLogin}>
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//             <label>Password</label>
//             <div className="password-field">
//               <input
//                 type={loginPasswordVisible ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="eye-icon" onClick={() => setLoginPasswordVisible(!loginPasswordVisible)}>👁️</span>
//             </div>
//             <button className="submit-btn" type="submit">LOGIN</button>
//             <p className="forgot" onClick={() => setStep('forgot')}>Forgot your password?</p>
//           </form>
//         ) : (
//           <form className="form" onSubmit={handleSignup}>
//             <label>Email</label>
//             <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//             <label>Password</label>
//             <div className="password-field">
//               <input
//                 type={signupPasswordVisible ? 'text' : 'password'}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="eye-icon" onClick={() => setSignupPasswordVisible(!signupPasswordVisible)}>👁️</span>
//             </div>
//             <label>Confirm Password</label>
//             <div className="password-field">
//               <input
//                 type={signupConfirmVisible ? 'text' : 'password'}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 required
//               />
//               <span className="eye-icon" onClick={() => setSignupConfirmVisible(!signupConfirmVisible)}>👁️</span>
//             </div>
//             <button className="submit-btn" type="submit">SIGN UP</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LogIn;
