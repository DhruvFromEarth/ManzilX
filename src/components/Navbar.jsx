import React from 'react'; 
import '../styles/Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Career Paths</a></li>
        <li><a href="#">Counseling</a></li>
        <li><a href="#">Testimonials</a></li>
      
      </ul>
      <div className="nav-logo">
        Manzil<span style={{ color: 'white' }}>X</span>
      </div>
    </div>
  );
};

export default Navbar;
