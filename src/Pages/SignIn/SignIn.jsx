import { Input } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import FormEntry from "../../components/FormEntry/FormEntry";
import { classNames } from "../../Constants";
import { images } from "../../Constants";
import AnimatedContainer from "../../container/AnimatedContainer";

const SignIn = () => {
 

  return (
    <AnimatedContainer className="flex w-full max-w-sm mx-auto overflow-hidden bg-[#16213E] rounded-xl rounded-laptop shadow-laptop dark:bg-gray-800 laptop:max-w-4xl">
      <div
        className="hidden bg-cover laptop:block laptop:w-1/2"
        style={{
          backgroundImage: `url(${images.heroSvg})`,
        }}
      ></div>

      <div className="w-full px-6 py-8 md:px-8 laptop:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-400 dark:text-white">
          Job Application Dashboard
        </h2>

        <p className="text-xl text-center text-gray-300 dark:text-gray-200">
          Welcome back!
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 laptop:w-1/4"></span>

          <p className="text-xs text-center text-gray-500 uppercase select-none dark:text-gray-400">
            login with email
          </p>

          <span className="w-1/5 border-b dark:border-gray-400 laptop:w-1/4"></span>
        </div>

        <div className="mt-4">
          <Input color="teal" label="Email Address" />
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
            Login
          </button>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

          <Link
            to="/applied-jobs-dashboard/signup"
            className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
          >
            or sign up
          </Link>

          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default SignIn;

// old version
//  <form className={classNames.formEntryClassNames.form}>
//         <FormEntry
//           placeholder="Enter your email"
//           inputType="email"
//           inputLabel="Email"
//         />
//         <FormEntry
//           placeholder="Enter your password"
//           inputType="password"
//           inputLabel="Password"
//         />

//        Add google recaptcha here

//       <button type="button" className={classNames.formEntryClassNames.button}>
//           Sign In
//         </button>
//       </form>
