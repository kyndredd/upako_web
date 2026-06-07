import React from 'react';
import { Link } from 'react-router-dom';

// For assets 
import logo from "../assets/images/Logo.png";
import "./styles_layouts/LoginSignup.css";

const LoginSignUpLogo = () => {
  return (
    <div className='topbar'>
        <Link to="/">
            <img src={logo} alt='logo for website' className='logo_i'></img>
        </Link>
    </div>
  );
}

export default LoginSignUpLogo;