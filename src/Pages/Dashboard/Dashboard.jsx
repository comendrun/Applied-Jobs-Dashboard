import React from "react";
import { Outlet } from "react-router-dom";
import TopCard from "../../components/TopCard/TopCard";

const Dashboard = () => {
  return (
    <section className="App dashboard  flex flex-col desktop:flex-row gap-8 justify-center align-center border-2 border-blue-400">
      <TopCard />
      <div className=" m-auto w-full h-[100%] flex flex-col overflow-auto ">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
