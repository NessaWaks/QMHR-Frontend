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

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/announcement" element={<Announcement/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/familyregistration" element={<FamilyRegistration/>} />
        <Route path="/membershipregistration" element={<MembershipRegistration/>} />
      </Routes>
    </div>
  )
}

export default App