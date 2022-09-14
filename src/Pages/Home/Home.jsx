import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="text-center flex flex-col m-auto w-[80%] max-w-[500px] gap-2">
          <h2 className=" text-3xl font-bold ">
            {" "}
            Welcome to Job Application Dashboard
          </h2>
          <p>
            a place where you can keep track of the applications that you have
            sent so far and just look back to them whenever you want.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
