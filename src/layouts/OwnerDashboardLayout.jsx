import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import OwnerDashboardOptions from './OwnerDashboardOptions';

const OwnerDashboardLayout = () => {
  return (
    <>
      <OwnerDashboardOptions />
      <Outlet />
    </>
  );
}

export default OwnerDashboardLayout;