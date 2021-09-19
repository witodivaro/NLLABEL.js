import React from "react";

import infoStyles from "../../Info/Info.module.scss";

const Slide = ({ slide, isActive, styles }) => {
  const { title, description, subHeader, info, details } = slide;

  if (!isActive) return null;

  return (
    <div className={`${styles["slider__tabcontent"]} ${styles.fadeIn}`}>
      <h2 className={`${infoStyles["info__header"]} ${styles.slider__header}`}>
        {title}
      </h2>
      <p
        className={`${infoStyles["info__description"]} ${styles.slider__description}`}
      >
        {description}
      </p>
      <div className={styles["slider__sub-content"]}>
        <h3 className={styles["slider__sub-header"]}>{subHeader}</h3>
        <div className={styles["slider__sub-wrapper"]}>
          <p className={styles["slider__info"]}>{info}</p>
          <p
            className={`${styles["slider__info"]} ${styles["slider__info--wide"]}`}
          >
            {details instanceof Array
              ? details.map((detail) => (
                  <React.Fragment key={detail}>
                    {detail}
                    <br />
                  </React.Fragment>
                ))
              : details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
