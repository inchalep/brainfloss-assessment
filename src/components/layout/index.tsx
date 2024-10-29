import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const Layout = () => {
  return (
    <div className='w-full min-h-full'>
      <Navbar />
      <div className='h-[calc(100vh-80px)] overflow-y-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
