import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './naviagationbar/NavigationBar';
import Home from './home/Home';
import Registration from './pages/registration/Registration';
import Contact from './pages/contact/Contact';
import FamilyRegistration from './pages/registration/FamilyRegistration';
import MembershipRegistration from './pages/registration/MembershipRegistration';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminGate from './pages/admin/AdminGate';
import AdminLogin from './pages/admin/AdminLogin';
// import Profile from './pages/profile/Profile'
// import ForgotPassword from './pages/forgotPassword/ForgotPassword'
// import VerifyOTP from './pages/verifyOTP/VerifyOTP'
// import LogIn from './pages/logIn/LogIn';
// import Announcement from './pages/announcement/Announcement';


import './App.css';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/familyregistration" element={<FamilyRegistration />} />
        <Route path="/membershipregistration" element={<MembershipRegistration />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/logIn" element={<LogIn />} /> */}
        {/* <Route path="/announcement" element={<Announcement />} /> */}


        {/* Admin Pages */}
        <Route path="/admingate" element={<AdminGate />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminLogin" element={<AdminLogin />} />


        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} /> */}
      </Routes>
    </div>
  );
};

export default App;
