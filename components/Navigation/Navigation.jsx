import React from "react";
import Anchor from "./Anchor";

import styles from "./Navigation.module.scss";

const Navigation = ({ className }) => {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <Anchor
        href="#intro"
        className={`${styles.navigation__button} ${styles["navigation__button--active"]}`}
      >
        Привет
      </Anchor>
      <Anchor href="#about-us" className={styles.navigation__button}>
        О нас
      </Anchor>
      <Anchor href="#services" className={styles.navigation__button}>
        Услуги
      </Anchor>
      <Anchor href="#team" className={styles.navigation__button}>
        Команда
      </Anchor>
      <Anchor href="#contacts" className={styles.navigation__button}>
        Связаться с нами
      </Anchor>
    </nav>
  );
};

export default Navigation;
