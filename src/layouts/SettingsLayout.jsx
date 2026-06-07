import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingsOptions from './SettingsOptions';

const SettingsLayout = () => {
  return (
    <div>
        <SettingsOptions />
        <Outlet />
    </div>
  );
}

export default SettingsLayout;