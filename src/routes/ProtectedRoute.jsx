import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({allowedRoles}) => {
  const {user, loading} = useContext(AuthContext);

  console.log(user, user?.role, "ProtectedRoute");

  // if this true it stop here so meaning <Outlet /> will not run
  // this is used in order to let the browser have time to read the user from local storage since
  // it runs so fast it reads the initial value and not the updated one from local storage
  if (loading) {
    return <p>Loading....</p>;
  }

  // if this true it stop here so meaning <Outlet /> will not run
  if (!user) {
    return <Navigate to="/"/>;
  }

  // if this true it stop here so meaning <Outlet /> will not run
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/"/>;
  }

  return (
    /* When this run, papakawalan nya ung mga routing inside it */
    <Outlet /> 
  );
}

export default ProtectedRoute;