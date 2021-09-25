import clsx from "clsx";
import React from "react";

import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={styles["contacts"]} id="contacts">
      <h2 className={styles["contacts__header"]}>Наши контакты</h2>
      <div className={styles["contacts__item"]}>
        <p
          className={clsx(styles.contacts__photo, styles.contacts__photo_email)}
        />
        <h4 className={styles["contacts__name"]}>Email</h4>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_MAIL}`}
          className={`${styles["contacts__details"]} ${styles.contacts__link}`}
        >
          {process.env.NEXT_PUBLIC_CONTACT_MAIL}
        </a>
      </div>
      <div className={styles["contacts__item"]}>
        <p
          className={clsx(
            styles.contacts__photo,
            styles.contacts__photo_telegram
          )}
        />
        <h4 className={styles["contacts__name"]}>Telegram</h4>
        <p className={styles["contacts__details"]}>
          <a
            className={styles["contacts__link"]}
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
          >
            @NLRec_CEO
          </a>{" "}
          - Артём &quot;NightLoud&quot;
        </p>
      </div>
      <div className={styles["contacts__item"]}>
        <p
          className={clsx(styles.contacts__photo, styles.contacts__photo_phone)}
        />
        <h4 className={styles["contacts__name"]}>Телефон</h4>
        <a
          href="tel:"
          className={`${styles["contacts__details"]} ${styles.contacts__link}`}
        >
          {process.env.NEXT_PUBLIC_CONTACT_PHONE}
        </a>
      </div>
    </section>
  );
};

export default Contacts;
