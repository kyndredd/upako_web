import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// For css
import "./styles_layouts/Navbar.css";

// For dependencies
import AuthContext from '../context/AuthContext';

// For assets for Navbar
import logo from "../assets/images/Logo.png";
import profile from "../assets/images/profile.png"


const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // Test if it works
  console.log(user, user?.role, "Navbar");

  const toggleMenu = () => {
    setOpen(!open); //set the open opposite to the current open value
  }

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

        {user && user?.role === 'owner' && (
          <Link to="/Owner/Dashboard" className='links_nav'>Dashboard</Link>
        )}

        {user && user?.role === 'tenant' && (
          <Link to="/Tenant/Dashboard" className='links_nav'>Dashboard</Link>
        )}
      </div>
      

      {!user && (
        <div className='buttons'>
          <button className='btn btn-outline-dark' onClick={() => navigate("/Login")}>Log in</button>
          <button className='btn btn-outline-dark' onClick={() => navigate("/SignUp")}>Sign Up</button>
        </div>
      )}

      {user && (
        <div>
          <img src={profile} alt='profile logo' className='profile' onClick={toggleMenu}></img>
        

          {open && user?.role === 'owner' && (
            <div className='profile_menu'>
              <button onClick={() => navigate("/Owner/Dashboard")}>Dashboard</button>
              <button onClick={() => navigate("/Settings/Profile")}>Settings</button>
              <button onClick={logout}>Log Out</button>
            </div>
          )}

          {open && user?.role === 'tenant' && (
            <div className='profile_menu'>
              <button onClick={() => navigate("/Tenant/Dashboard")}>Dashboard</button>
              <button onClick={() => navigate("/Settings/Profile")}>Settings</button>
              <button onClick={logout}>Log Out</button>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}

export default Navbar