import React from 'react';
import { useContext } from 'react';

// For css
import "./styles_layouts/Navbar.css";

// For dependencies
import {Link} from "react-router-dom";
import AuthContext from '../context/AuthContext';

// For assets for Navbar
import logo from "../assets/images/Logo.png";


const Navbar = () => {
  const {isLogin, usertype} = useContext(AuthContext);

  // Test if it works
  console.log(isLogin, usertype, "Navbar");

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

        {isLogin && usertype === "owner" && (
          <Link to="/Owner">Dashboard</Link>
        )}

        {isLogin && usertype === "tenant" && (
          <Link to="/Tenant">Dashboard</Link>
        )}
      </div>

      <div className='buttons'>
        <button className='btn btn-outline-dark'>Log in</button>
        <button className='btn btn-outline-dark'>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar