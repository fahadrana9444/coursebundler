import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Courses from './layout/Courses';
import Footer from './layout/Footer';
import ForgetPassword from './layout/ForgetPassword';
import Header from './layout/Header';
import Home from './layout/Home';
import Login from './layout/Login';
import Register from './layout/Register';
import ResetPassword from './layout/ResetPassword';
import Contact from './layout/Contact';
import Request from './layout/Request';
import About from './layout/About';
import Subscribe from './layout/Subscribe';
import PaymentSuccess from './layout/PaymentSuccess';
import PageNotFound from './layout/PageNotFound';
import PaymentFail from './layout/PaymentFail';
import CoursePage from './layout/CoursePage';
import Profile from './layout/Profile';
import ChangePassword from './layout/ChangePassword';
import AdminDashboard from './layout/AdminDashboard';
import AdminCreateCourse from './layout/AdminCreateCourse';
import AdminCourse from './layout/AdminCourse';
import AdminUser from './layout/AdminUser';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      
        <Route path="/course/:id" element={<CoursePage />} />

        <Route path="/password/forget" element={<ForgetPassword />} />
        <Route path="/password/change" element={<ChangePassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/fail" element={<PaymentFail />} />


        {/** admin routes */}

        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/course/create' element={<AdminCreateCourse />} />
        <Route path='/admin/course' element={<AdminCourse/>} />
        <Route path='/admin/user' element={<AdminUser/>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
