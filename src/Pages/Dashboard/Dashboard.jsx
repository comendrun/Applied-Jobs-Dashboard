import React from "react";
import { Outlet } from "react-router-dom";
import TopCard from "../../components/TopCard/TopCard";
import AnimatedContainer from "../../container/AnimatedContainer";

const Dashboard = () => {
  return (
    <AnimatedContainer className="flex flex-col justify-center gap-8 border-2 border-blue-400 App dashboard desktop:flex-row align-center">
      <TopCard />
      <div className=" m-auto w-full h-[100%] flex flex-col overflow-auto ">
        <Outlet />
      </div>
    </AnimatedContainer>
  );
};

export default Dashboard;
