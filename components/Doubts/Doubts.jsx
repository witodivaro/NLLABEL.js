import React from "react";
import Quote from "../Quote/Quote";

import styles from "./Doubts.module.scss";

const Doubts = () => {
  return (
    <section className={styles["doubts"]}>
      <div className={styles["doubts__wrapper"]}>
        <h2 className={styles["doubts__header"]}>Ещё сомневаетесь?</h2>

        <Quote className={styles["doubts__quote"]} />
        <p className={styles["doubts__imac"]}></p>
      </div>
    </section>
  );
};

export default Doubts;
