import React from "react";
import Anchor from "./Anchor";

import styles from "./Navigation.module.scss";

const Navigation = ({ className }) => {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <Anchor
        href="#intro"
        className={styles.navigation__link}
        activeClassName={styles["navigation__link--active"]}
      >
        Привет
      </Anchor>
      <Anchor
        href="#about-us"
        className={styles.navigation__link}
        activeClassName={styles["navigation__link--active"]}
      >
        О нас
      </Anchor>
      <Anchor
        href="#services"
        className={styles.navigation__link}
        activeClassName={styles["navigation__link--active"]}
      >
        Услуги
      </Anchor>
      <Anchor
        href="#team"
        className={styles.navigation__link}
        activeClassName={styles["navigation__link--active"]}
      >
        Команда
      </Anchor>
      <Anchor
        href="#contacts"
        className={styles.navigation__link}
        activeClassName={styles["navigation__link--active"]}
      >
        Связаться с нами
      </Anchor>
    </nav>
  );
};

export default Navigation;
