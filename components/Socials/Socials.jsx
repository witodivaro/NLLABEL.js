import React from "react";

import styles from "./Socials.module.scss";

const Socials = ({ className }) => {
  return (
    <ul className={`${styles.socials} ${className}`}>
      <li className={styles["socials__item"]}>
        <a
          href={process.env.NEXT_PUBLIC_VK_URL}
          target="_blank"
          rel="noreferrer"
          className={`${styles["socials__link"]} ${styles["socials__link--vk"]}`}
        >
          <span className="visually-hidden">ВКонтакте</span>
        </a>
      </li>
      <li className={styles["socials__item"]}>
        <a
          href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className={`${styles.socials__link} ${styles["socials__link--telegram"]}`}
        >
          <span className="visually-hidden">Телеграмм</span>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
