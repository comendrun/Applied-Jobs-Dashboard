import React from "react";

import { classNames } from "../../Constants";

const FormEntry = ({placeholder, inputLabel, inputType, input=true , textarea=false}) => {
  return (
    <label className={classNames.formEntryClassNames.labels}>
      <span className={classNames.formEntryClassNames.spans}>{inputLabel}</span>
      {input && <input className={classNames.formEntryClassNames.inputs} placeholder={placeholder} type={inputType} />}
      {textarea && <textarea />}
    </label>
  );
};

export default FormEntry;
