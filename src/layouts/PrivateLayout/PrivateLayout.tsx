import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "~components/custom/AppSidebar";
import { SidebarProvider } from "~components/ui/sidebar";
import './privateLayout.css'
const PrivateLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar/>
        <main className="privateLayout">
          <div className="privateLayoutContent">
          <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default PrivateLayout;
