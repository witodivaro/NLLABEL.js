import React, { useState } from "react";
import Image from "next/image";

import Link from "../../Link/Link";
import ServiceExtension from "./ServiceExtension";

const Service = ({ service, styles }) => {
  const { title, img, description, price, extensions, priceFor } = service;

  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const handleExtensionClick = (price, isActive) => {
    let multiplier = isActive ? 1 : -1;

    setCalculatedPrice((servicePrice) => servicePrice + price * multiplier);
  };

  return (
    <article className={styles["services__item"]}>
      <div className={styles["services__inner"]}>
        <h4 className={styles["services__header"]}>{title}</h4>
        <p className={styles["services__img-container"]}>
          <Image
            className={styles["services__img"]}
            src={img}
            objectFit="cover"
            alt={title}
            layout="fill"
          />
        </p>
        <p className={styles["services__description"]}>{description}</p>
      </div>
      <span className={styles["services__price"]}>
        {calculatedPrice} р
        {priceFor ? (
          <span className={styles["services__price-for"]}>/{priceFor}</span>
        ) : null}
      </span>
      {extensions ? (
        <ul className={styles["services__extensions-list"]}>
          {extensions.map((extension) => (
            <ServiceExtension
              styles={styles}
              key={extension._id}
              extension={extension}
              onClick={handleExtensionClick}
            />
          ))}
        </ul>
      ) : null}

      <Link className={styles["services__link"]} color="pink">
        Заказать
      </Link>
    </article>
  );
};

export default Service;
