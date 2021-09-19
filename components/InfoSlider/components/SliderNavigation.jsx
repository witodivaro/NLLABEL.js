import React from "react";
import SliderNavigationButton from "./SliderNavigationButton";

const NAVIGATION_BUTTONS = ["recording", "music", "promotion"];

const SliderNavigation = ({ activeSlideIndex, onSlideChange, styles }) => {
  return (
    <ul className={styles["slider__navigation"]}>
      {NAVIGATION_BUTTONS.map((button, index) => (
        <li key={button} className={styles["slider__item"]}>
          <SliderNavigationButton
            styles={styles}
            isActive={activeSlideIndex === index}
            onClick={onSlideChange.bind(null, index)}
            name={button}
          />
        </li>
      ))}
    </ul>
  );
};

export default SliderNavigation;
