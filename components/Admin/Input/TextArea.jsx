import clsx from "clsx";
import React from "react";

import styles from "./Input.module.scss";

const TextArea = ({ className, label, value, ...inputProps }) => {
  return (
    <label className={clsx(className, styles.input)}>
      {label}
      <textarea type="text" value={value} {...inputProps} />
    </label>
  );
};

export default TextArea;
