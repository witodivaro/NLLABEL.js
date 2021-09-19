import React from "react";
import Logo from "../Logo/Logo";

import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.header__logo}>NL Label</Logo>

      <Navigation className={styles.header__navigation} />
    </header>
  );
};

export default Header;
