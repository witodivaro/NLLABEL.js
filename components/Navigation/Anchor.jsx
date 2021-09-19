import React, { useEffect, useState } from "react";

import { isElementVisible } from "../../utils/utils";

const Anchor = ({ href, className, activeClassName, children }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const elem = document.querySelector(href);

    if (isElementVisible(elem)) setIsActive(true);

    const scrollHandler = () => {
      if (isElementVisible(elem)) {
        if (!isActive) setIsActive(true);
      } else if (isActive) setIsActive(false);
    };

    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [isActive, href]);

  return (
    <a
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </a>
  );
};

export default Anchor;
