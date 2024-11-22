import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "~components/custom/AppSidebar";
import { SidebarProvider } from "~components/ui/sidebar";

const PrivateLayout = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar/>
        <main>
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
};

export default PrivateLayout;
