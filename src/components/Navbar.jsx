import React, { useState, useRef, useEffect } from 'react';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
    <div className="navbar">
      <div className="nav-logo">
        Manzil<span style={{ color: 'white' }}>X</span>
      </div>
      <div className="nav-links-container" ref={dropdownRef}>
        <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Career Paths</a></li>
          <li><a href="/">Counseling</a></li>
          <li><a href="/">Testimonials</a></li>
        </ul>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          ≡
        </button>
      </div>
    </div>
    <div style={{ height: '10vh' }} />
    </>
  );
};

export default Navbar;
