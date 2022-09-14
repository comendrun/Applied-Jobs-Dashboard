import React from "react";

import FormEntry from "../../components/FormEntry/FormEntry";
import { classNames } from "../../Constants";

const SignUp = () => {
  return <form className={classNames.formEntryClassNames.form}>
  <FormEntry
    placeholder="Enter your full name"
    inputType="text"
    inputLabel="Full Name"
  />
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
  <FormEntry
    placeholder="Enter repeat entered password"
    inputType="password"
    inputLabel="Repeat Password"
  />

  {/* Add google recaptcha here */}

  <button type="button" className={classNames.formEntryClassNames.button}>
    Sign up
  </button>
</form>
};

export default SignUp;
