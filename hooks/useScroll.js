import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

const preventDefault = (e) => e.preventDefault();

let rootElem = null;

export const setScrollElement = (elem) => {
  rootElem = elem;
};

const useScroll = (onScroll) => {
  if (!rootElem) throw new Error("No scroll element");

  if (!onScroll) {
    throw new Error("You must pass onScroll function to the useScroll");
  }

  const supportsPassive = useRef(false);

  try {
    rootElem.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive.current = true;
          return true;
        },
      })
    );
  } catch (e) {}

  const wheelOpt = useMemo(
    () => (supportsPassive.current ? { passive: false } : false),
    []
  );

  const handleScroll = useCallback(
    (e) => {
      const isScrollingUp = e.wheelDeltaY > 0;
      onScroll(e, isScrollingUp);
    },
    [onScroll]
  );

  const handleTouchMove = useCallback(
    (e) => {
      const start = e.changedTouches[0];

      const handleTouchEnd = (e) => {
        const end = e.changedTouches[0];
        const hasScrolled = Math.abs(end.screenY - start.screenY) > 0;
        const isScrollingUp = end.screenY - start.screenY > 0;

        if (hasScrolled) {
          onScroll(e, isScrollingUp);
        }

        rootElem.removeEventListener("touchend", handleTouchEnd);
      };

      rootElem.addEventListener("touchend", handleTouchEnd);
    },
    [onScroll]
  );

  const handleScrollKeys = useCallback(
    (e) => {
      if (keys[e.keyCode]) {
        if (blocks.current) preventDefault(e);
        onScroll(e);
      }
    },
    [onScroll]
  );

  useEffect(() => {
    rootElem.addEventListener("DOMMouseScroll", handleScroll, false); // older FF
    rootElem.addEventListener("wheel", handleScroll, wheelOpt); // modern desktop
    rootElem.addEventListener("touchstart", handleTouchMove, wheelOpt); // mobile
    rootElem.addEventListener("keydown", handleScrollKeys, false);
  }, [handleScrollKeys, handleTouchMove, wheelOpt, handleScroll]);
};

export default useScroll;
