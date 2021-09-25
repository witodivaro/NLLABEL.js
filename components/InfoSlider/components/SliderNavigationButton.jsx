import clsx from "clsx";
import React from "react";

const SliderNavigationButton = ({ isActive, name, onClick, styles }) => {
  const activeClass = styles["slider__button_active"];

  return (
    <button
      className={clsx(
        styles[`slider__button_${name}`],
        isActive && activeClass,
        styles.slider__button
      )}
      onClick={onClick}
    >
      <span className={styles["visually-hidden"]}>{name}</span>
    </button>
  );
};

export default SliderNavigationButton;
