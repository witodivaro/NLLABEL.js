import clsx from "clsx";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, className, ...props }) => {
  return (
    <button type="button" className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
