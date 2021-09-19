import React from "react";

import styles from "./Link.module.scss";

const Link = ({ className, children, color }) => {
  return (
    <a
      href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
      target="_blank"
      rel="noreferrer"
      className={`${styles.link} ${styles[`link--${color}`]} ${className}`}
    >
      {children}
    </a>
  );
};

export default Link;
