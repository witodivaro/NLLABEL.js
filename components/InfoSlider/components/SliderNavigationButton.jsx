import React from "react";

const SliderNavigationButton = ({ isActive, name, onClick, styles }) => {
  const activeClass = styles["slider__button--active"];

  return (
    <button
      className={`${styles.slider__button} ${
        styles[`slider__button--${name}`]
      } ${isActive ? activeClass : ""}`}
      onClick={onClick}
    >
      <span className={styles["visually-hidden"]}>{name}</span>
    </button>
  );
};

export default SliderNavigationButton;
