import React from 'react';
import LoginSignUpLogo from './LoginSignUpLogo';
import { Outlet } from 'react-router-dom';

const LoginSignUpLayout = () => {
  return (
    <>
        <LoginSignUpLogo />
        <Outlet />
    </>
  );
}

export default LoginSignUpLayout;