import React, { useState } from "react";

import styles from "./InfoSlider.module.scss";

import Slide from "./components/Slide";
import SliderNavigation from "./components/SliderNavigation";
import { SLIDES } from "./constants";

const InfoSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className={styles["slider"]}>
      <SliderNavigation
        styles={styles}
        activeSlideIndex={activeSlideIndex}
        onSlideChange={handleSlideChange}
      />
      {SLIDES.map((slide, index) => (
        <Slide
          styles={styles}
          isActive={index === activeSlideIndex}
          key={slide.name}
          slide={slide}
        />
      ))}
    </div>
  );
};

export default InfoSlider;
