import React from "react";

import styles from "./ScrollUp.module.scss";

import Dropdown from "../Dropdown/Dropdown";

const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Dropdown
      onClick={handleScrollUp}
      className={styles["scroll-up"]}
      label="Верхнуться вверх"
    />
  );
};

export default ScrollUp;
