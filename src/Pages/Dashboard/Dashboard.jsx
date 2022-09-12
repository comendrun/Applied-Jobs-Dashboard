import React from "react";
import { Outlet } from "react-router-dom";
import TopCard from "../../components/TopCard/TopCard";

const Dashboard = () => {
  return (
    <section className="App dashboard  flex flex-col desktop:flex-row gap-8 justify-center align-center border-2 border-white">
      <h1 className="text-white font-bold text-3xl">Hello world</h1>
      <TopCard />
      <Outlet />
    </section>
  );
};

export default Dashboard;
