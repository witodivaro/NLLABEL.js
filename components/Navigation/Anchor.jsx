import React, { useEffect, useRef } from "react";

const Anchor = ({ href, className, children }) => {
  const elemRef = useRef();

  useEffect(() => {
    elemRef.current = document.querySelector(href);
  }, [href]);

  const handleClick = () => {
    elemRef?.current?.scrollIntoView();
  }

  return <button onClick={handleClick} className={className}>{children}</button>;
};

export default Anchor;
