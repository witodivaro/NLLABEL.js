import clsx from "clsx";
import React from "react";

import styles from "./Quote.module.scss";

const Quote = ({ className }) => {
  return (
    <div className={clsx(styles.quote, className)}>
      <p className={styles["quote__text"]}>
        В начале своего пути каждый музыкант обязан получить поддержку, чтобы
        полностью раскрыть свой талант. Мы оказываем эту поддержку всем
        участникам нашей дружной общины.
      </p>
      <p className={styles["quote__author"]}>
        <b className={styles["quote__name"]}>- NightLoud</b>
        <span className={styles["quote__position"]}>
          Основатель <span className={styles["quote__text--pink"]}>NL L</span>
          abel
        </span>
      </p>
    </div>
  );
};

export default Quote;
