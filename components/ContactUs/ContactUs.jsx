import React from "react";
import Link from "../Link/Link";

import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <article className={styles["contact-us"]}>
      <p className={styles["contact-us__slogan"]}>
        Хотите попробовать? Напишите нам.
      </p>
      <Link color="white" className={styles["contact-us__link"]}>
        Связаться
      </Link>
    </article>
  );
};

export default ContactUs;
