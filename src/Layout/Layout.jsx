import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <main className="layout min-w-[100vw] min-h-[100vh] w-full h-full flex flex-col justify-start align-start text-white mt-11 pt-16">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Layout;
