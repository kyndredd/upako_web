import React from 'react';
import { Link } from 'react-router-dom';

const OwnerDashboardOptions = () => {
  return (
    <div>
      <Link to="/Owner">Dashboard</Link>
      <Link to="/Owner/TenantList">Tenant List</Link>
      <Link to="/Owner/RentalProperties">Rental Properties</Link>
      <Link to="/Owner/Messages">Messages</Link>
      <Link to="Owner/Payments">Payments</Link>
    </div>
  );
}

export default OwnerDashboardOptions;