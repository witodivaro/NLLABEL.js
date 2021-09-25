import clsx from "clsx";
import React, { useCallback, useRef } from "react";

import styles from "./Input.module.scss";

const Input = ({ className, label, elem = "input", value, ...inputProps }) => {
  const Element = useRef((props) => {
    switch (elem) {
      case "textarea":
        return <textarea value={value} {...props} />;
      default:
        return <input value={value} {...props} />;
    }
  }).current;

  return (
    <label className={clsx(className, styles.input)}>
      {label}
      <Element type="text" {...inputProps} />
    </label>
  );
};

export default Input;
