import React from 'react';
import { Link } from 'react-router-dom';

const SettingsOptions = () => {
  return (
    <div>
        <Link to="/Settings/Profile">Profile</Link>
        <Link to="/Settings/Security">Security</Link>
        <Link to="/Settings/Notification">Notification</Link>
    </div>
  );
}

export default SettingsOptions;