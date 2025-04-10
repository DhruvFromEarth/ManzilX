import React from 'react'; 
import '../styles/Navbar.css';// Make sure this path matches your project structure

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        Manzil<span style={{ color: 'white' }}>X</span>
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
