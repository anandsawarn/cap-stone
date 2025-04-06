import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link to="/admin/manage-users">Manage Users</Link>
        <Link to="/admin/manage-services">Manage Services</Link>
        <Link to="/admin/payment-management">Payment Management</Link>
      </nav>
    </div>
  );
};

export default AdminDashboard;