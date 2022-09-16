import React from "react";
import FormEntry from "../../components/FormEntry/FormEntry";
import { classNames } from "../../Constants";

const SignIn = () => {
  return (
    <form className={classNames.formEntryClassNames.form}>
   
      <FormEntry
        placeholder="Enter your email"
        inputType="email"
        inputLabel="Email"
      />
      <FormEntry
        placeholder="Enter your password"
        inputType="password"
        inputLabel="Password"
      />

      {/* Add google recaptcha here */}

      <button type="button" className={classNames.formEntryClassNames.button}>
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
