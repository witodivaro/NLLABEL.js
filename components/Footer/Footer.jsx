import React from "react";
import Logo from "../Logo/Logo";

import Socials from "../Socials/Socials";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Logo className={styles["footer__logo"]}>NL Label</Logo>
      <Socials className={styles["footer__socials"]} />
      <p className={styles["footer__copyright"]}>
        © {new Date().getFullYear()}, NL Label. All Rights Reserved.
      </p>
      <p className={styles["footer__creator"]}>
        <a
          href={process.env.NEXT_PUBLIC_AUTHOR_LINK}
          className={styles["footer__link"]}
        >
          created by WITO DIVARO
        </a>
      </p>
    </footer>
  );
};

export default Footer;
