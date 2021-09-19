import React from "react";

import styles from "./Dropdown.module.scss";

const Dropdown = ({ className, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.dropdown} ${className}`}
      aria-label={label}
    >
      <span className={styles["visually-hidden"]}>{label}</span>
    </button>
  );
};

export default Dropdown;
