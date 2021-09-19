import React from "react";
import Link from "../Link/Link";

import styles from "./Info.module.scss";

const Info = () => {
  return (
    <section className={styles["info"]} id="about-us">
      <div className={styles["info__about-us"]}>
        <h2 className={styles["info__header"]}>Что такое NL Label?</h2>
        <p className={styles["info__description"]}>
          <span className={styles["info__description--pink"]}>NL Label</span> -
          это объединение творческих личностей, занимающихся{" "}
          <span className={styles["info__description--dark-grey"]}>
            музыкой
          </span>
          . Мы работаем с{" "}
          <span className={styles["info__description--dark-grey"]}>
            перспективными
          </span>{" "}
          исполнителями и музыкантами из{" "}
          <span className={styles["info__description--pink"]}>Минска</span>.
        </p>

        <Link className={`${styles["info__link"]} ${styles.button}`}>
          Подробнее
        </Link>

        <p className={styles["info__picture"]}></p>
      </div>
    </section>
  );
};

export default Info;
