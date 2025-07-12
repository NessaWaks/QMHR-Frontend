import React from 'react'
import NavigationBar from './naviagationbar/NavigationBar'
import Home from './home/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Announcement from './pages/announcement/Announcement'
import Registration from './pages/registration/Registration'
import Profile from './pages/profile/Profile'
import Contact from './pages/contact/Contact'
import FamilyRegistration from './pages/registration/FamilyRegistration'
import MembershipRegistration from './pages/registration/MembershipRegistration'
import LogIn from './pages/logIn/LogIn'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminRoute from './pages/admin/AdminRoute'
// import ForgotPassword from './pages/forgotPassword/ForgotPassword'
// import VerifyOTP from './pages/verifyOTP/VerifyOTP'


const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/familyregistration" element={<FamilyRegistration />} />
        <Route path="/membershipregistration" element={<MembershipRegistration />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      } />
      </Routes>
      

    </div>
  )
}

export default App