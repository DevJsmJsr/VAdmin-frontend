import React from 'react';
import { Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default PrivateLayout;
