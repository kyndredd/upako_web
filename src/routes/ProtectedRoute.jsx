import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({allowedRoles}) => {
  const {user, loading} = useContext(AuthContext);

  console.log(user, user?.role, "ProtectedRoute");

  if (loading) {
    return <p>Loading....</p>;
  }

  if (!user) {
    return <Navigate to="/"/>;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/"/>;
  }

  return (
    <Outlet/ >
  );
}

export default ProtectedRoute;