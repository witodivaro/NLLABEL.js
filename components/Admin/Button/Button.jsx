import clsx from "clsx";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
