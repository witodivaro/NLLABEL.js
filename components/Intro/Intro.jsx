import React, { useEffect, useRef } from "react";

import styles from "./Intro.module.scss";

import Dropdown from "../Dropdown/Dropdown";

import animateText from "../../utils/text-animation";
import useThrottling from "../../hooks/useThrottling";
import useScroll from "../../hooks/useScroll";

const SCROLL_DELAY = 100;

const Intro = ({ slogans }) => {
  const textRef = useRef();
  const introRef = useRef();
  const aboutUsRef = useRef();

  const scrollHandle = (e, isScrollingUp) => {
    e.preventDefault();
    const introHeight = introRef?.current?.clientHeight;
    if (window.scrollY < introHeight) {
      if (isScrollingUp) {
        window.scrollTo({ top: 0 });
      } else {
        aboutUsRef.current.scrollIntoView(true);
      }
    }
  };

  const throttledScrollHandle = useThrottling(scrollHandle, SCROLL_DELAY);

  useScroll(throttledScrollHandle);

  useEffect(() => {
    aboutUsRef.current = document.querySelector('#about-us');
  }, [aboutUsRef])

  useEffect(() => {
    if (textRef.current) {
      animateText({
        container: textRef.current,
        phrases: slogans,
      });
    }
  }, [textRef, slogans]);

  const handleDropdownClick = () => {
    window.scrollTo({ top: introRef.current.clientHeight });
  };

  return (
    <section ref={introRef} className={styles.intro} id="intro">
      <div className={styles.intro__background}></div>
      <p ref={textRef} className={styles.intro__slogan}>
        {slogans[0]}
      </p>

      <Dropdown
        onClick={handleDropdownClick}
        label="Дальше"
        className={styles.intro__dropdown}
      />
    </section>
  );
};

export default Intro;
