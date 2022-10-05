import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { images } from "../../Constants";
import AnimatedContainer from "../../container/AnimatedContainer";

const Home = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <AnimatedContainer className="container flex flex-col px-6 py-10 mx-auto space-y-6 laptop:h-[32rem] laptop:py-16 laptop:flex-row laptop:items-center">
        <div className="w-full laptop:w-1/2">
          <div className="laptop:max-w-laptop">
            <h1 className="text-3xl font-bold tracking-wide text-black-500dark:text-white laptop:text-5xl">
              Easiest way to keep track of the jobs that you applied for.
            </h1>

            <div className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 text-gray-400 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">
                  Create and save your application information.
                </span>
              </p>

              <p className="flex items-center -mx-2 text-gray-400 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Edit or delete your entries.</span>
              </p>

              <p className="flex items-center -mx-2 text-gray-400 dark:text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easy to Use</span>
              </p>
            </div>
          </div>

          <div className="w-full mt-8 bg-transparent border rounded-md laptop:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col laptop:flex-row"
            >
              <Input
                type="email"
                label="Enter your email address"
                color="teal"
                className="flex-1 h-10 px-4 py-2 m-1 text-gray-400 placeholder-gray-400 bg-transparent border-none outline-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                onChange={(e) => setEmail(e.target.value)}
              />

              <Link
                // to={{
                //   pathname: "/applied-jobs-dashboard/signup",
                //   state: { email: "Hello World" },
                // }}
                to="/applied-jobs-dashboard/signup"
                state={email}
                type="button"
                className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
              >
                Start Using
              </Link>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 laptop:w-1/2">
          <img
            className="object-cover w-full h-full mx-auto rounded-md laptop:max-w-2xl"
            src={images.heroSvg}
            alt="hero"
          />
        </div>
      </AnimatedContainer>
    </>
  );
};

export default Home;
