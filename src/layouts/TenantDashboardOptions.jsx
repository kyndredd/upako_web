import React from 'react';
import { Link } from 'react-router-dom';

const TenantDashboardOptions = () => {
  return (
    <div>
        <Link to="/Tenant">Dashboard</Link>
        <Link to="Tenant/FindRentPost">Dashboard</Link>
        <Link to="/Tenant/Messages">Dashboard</Link>
        <Link to="/Tenant/Payments">Dashboard</Link>
    </div>
  );
}

export default TenantDashboardOptions;