import React, { useState, useEffect } from "react";

import { classNames } from "../../Constants";

const FormEntry = ({
  placeholder,
  inputLabel,
  inputType,
  input = true,
  textarea = false,
  inputState,
}) => {



  return (
    <label className={classNames.formEntryClassNames.labels}>
      <span className={classNames.formEntryClassNames.spans}>{inputLabel}</span>
      {input && (
        <input
          className={classNames.formEntryClassNames.inputs}
          placeholder={placeholder}
          onChange={(e) => inputState(e.target.value)}
          type={inputType}
        />
      )}
      {textarea && <textarea />}
    </label>
  );
};

export default FormEntry;
