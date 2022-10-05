import { Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import FormEntry from "../../components/FormEntry/FormEntry";
import { classNames } from "../../Constants";

import { UserAuth } from "../../Context/AuthContext";

import { images } from "../../Constants";

import AnimatedContainer from "../../container/AnimatedContainer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // setError("");
    // try {
    //   await createUser(email, password, displayName);
    //   navigate("/account");
    // } catch (e) {
    //   setError(e.message);
    //   console.log(error.message);
    // }
  };

  const location = useLocation();

  useEffect(() => {
    if (!location.state) return;

    setEmail(location.state);
  }, [location]);

  return (
    <AnimatedContainer className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#16213E] rounded-xl rounded-laptop shadow-laptop dark:bg-gray-800 laptop:max-w-4xl">
      <div className="w-full px-6 py-8 md:px-8 laptop:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-400 dark:text-white">
          Welcome to{" "}
          <span className="block text-white">Job Application Dashboard</span>
        </h2>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 laptop:w-1/4"></span>

          <p className="text-xs text-center text-gray-500 uppercase select-none dark:text-gray-400">
            Sign up with email
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 laptop:w-1/4"></span>
        </div>

        <div className="mt-4">
          <Input
            color="teal"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mt-4">
          <Input color="teal" type="password" label="Password" />
        </div>

        <a
          href="#passwordForgot"
          className="ml-auto text-xs text-gray-300 dark:text-gray-300 hover:underline"
        >
          Forget Password?
        </a>

        <div className="mt-8">
          <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#4CAF50] rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Sign up
          </button>
        </div>

        <p className="mt-4 mb-0 text-sm text-center text-grey-200">
          Do you already have an account?
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/applied-jobs-dashboard/signin"
            className="text-sm text-center text-gray-500 uppercase duration-300 ease-in-out hover:scale-110 dark:text-gray-400 hover:text-white"
          >
            Login to your account
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>

      <div
        className="hidden bg-cover laptop:block laptop:w-1/2"
        style={{
          backgroundImage: `url(${images.heroSvg})`,
        }}
      ></div>
    </AnimatedContainer>
  );
};

export default SignUp;

//older version ==>
// <form
//   onSubmit={formSubmitHandler}
//   className={classNames.formEntryClassNames.form}
// >
//   <FormEntry
//     placeholder="Enter your full name"
//     inputType="text"
//     inputLabel="Full Name"
//     // inputState={(changes) => setName(changes)}
//   />
//   <FormEntry
//     placeholder="Enter your email"
//     inputType="email"
//     inputLabel="Email"
//   />
//   <FormEntry
//     placeholder="Enter your password"
//     inputType="password"
//     inputLabel="Password"
//   />
//   <FormEntry
//     placeholder="Enter repeat entered password"
//     inputType="password"
//     inputLabel="Repeat Password"
//   />

//   {/* Add google recaptcha here */}

//   <button type="button" className={classNames.formEntryClassNames.button}>
//     Sign up
//   </button>
// </form>
