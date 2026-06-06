import React from 'react';
import {Outlet} from "react-router-dom";

// For Navbar
import Navbar from './Navbar';

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default NavbarLayout;