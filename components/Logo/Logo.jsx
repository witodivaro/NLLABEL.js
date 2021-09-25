import clsx from "clsx";
import React from "react";

import styles from "./Logo.module.scss";

const Logo = ({ className }) => {
  return <p className={clsx(styles.logo, className)}>NL Label</p>;
};

export default Logo;
