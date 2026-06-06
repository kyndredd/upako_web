import React from 'react';
import TenantDashboardOptions from './TenantDashboardOptions';
import { Outlet } from 'react-router-dom';

const TenantDashboardLayout = () => {
  return (
    <>
      <TenantDashboardOptions />
      <Outlet /> 
    </>
  );
}

export default TenantDashboardLayout;