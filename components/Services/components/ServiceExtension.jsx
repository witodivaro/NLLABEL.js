import React, { useState } from "react";

import Checkbox from "../../Checkbox/Checkbox";

const ServiceExtension = ({ extension, onClick, styles }) => {
  const [isActive, setIsActive] = useState(false);
  const { name, price } = extension;

  const handleChange = () => {
    setIsActive(!isActive);
    onClick(price, !isActive);
  };

  return (
    <label
      className={`${styles.services__extension} ${
        isActive ? styles["services__extension--active"] : ""
      }`}
    >
      <input
        onChange={handleChange}
        type="checkbox"
        className="visually-hidden"
        value={isActive}
      />
      <Checkbox checked={isActive} fill="#ad1f54" />
      <p>{name}</p>
      <span>+ {price} р.</span>
    </label>
  );
};

export default ServiceExtension;
