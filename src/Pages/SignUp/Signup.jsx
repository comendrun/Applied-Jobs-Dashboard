import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormEntry from "../../components/FormEntry/FormEntry";
import { classNames } from "../../Constants";

import { UserAuth } from "../../Context/AuthContext";

const SignUp = () => {
  const [name, setName] = useState("");
  const [eror, setEror] = useState("");

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

  console.log(name);

  return (
    <form
      onSubmit={formSubmitHandler}
      className={classNames.formEntryClassNames.form}
    >
      <FormEntry
        placeholder="Enter your full name"
        inputType="text"
        inputLabel="Full Name"
        // inputState={(changes) => setName(changes)}
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
  );
};

export default SignUp;
