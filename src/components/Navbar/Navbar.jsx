import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png.png'; // Adjust path if needed
import { Link } from 'react-scroll';
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <ul>
         <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
         <li><Link to="program" smooth={true}offset={-260} duration={500}>Program</Link></li>
         <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
         <li><Link to="gallery" smooth={true} offset={-160}duration={500}>Campus</Link></li>
         <li><Link to="testimonials" smooth={true}offset={-160} duration={500}>Testimonials</Link></li>
         <li><Link to="contact" smooth={true} offset={-260}duration={500}><button className='btn'>contact us</button></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
