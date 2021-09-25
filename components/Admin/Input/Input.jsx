import clsx from "clsx";
import React, { useCallback, useRef } from "react";

import styles from "./Input.module.scss";

const Input = ({ className, label, value, ...inputProps }) => {
  return (
    <label className={clsx(className, styles.input)}>
      {label}
      <input type="text" value={value} {...inputProps} />
    </label>
  );
};

export default Input;
