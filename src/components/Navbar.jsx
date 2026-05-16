import React from 'react';
import "./styles/Navbar.css";

//For <Link> to function
import {Link} from "react-router-dom";

// For assets for Navbar
import logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt='logo for website' className='logo_image'></img>
        </Link>
      </div>

      <div className='options'>
        <Link to="/FindTenants" className='links_nav'>Find Tenants</Link>
        <Link to="/FindRentals" className='links_nav'>Find Rentals</Link>
        <Link to="/Pricing" className='links_nav'>Pricing</Link>
      </div>

      <div className='buttons'>
        <button className='btn btn-outline-dark'>Log in</button>
        <button className='btn btn-outline-dark'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar