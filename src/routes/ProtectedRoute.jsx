import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({allowedUser}) => {
  const {isLogin, usertype} = useContext(AuthContext);

  console.log(isLogin, usertype, "ProtectedRoute");

  if (!isLogin) {
    return <Navigate to="/"/>
  }

  if (allowedUser && usertype !== allowedUser) {
    return <Navigate to="/"/>
  }

  return (
    <Outlet/ >
  );
}

export default ProtectedRoute;