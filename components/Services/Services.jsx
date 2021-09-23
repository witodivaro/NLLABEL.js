import React, { useState } from "react";

import Service from "./components/Service";

import { PREVIEW_SERVICES_COUNT } from "./constants";

import styles from "./Services.module.scss";

const Services = ({ services }) => {
  const [isShowingMore, setIsShowingMore] = useState(false);

  const servicesToShowCount = isShowingMore
    ? services.length
    : PREVIEW_SERVICES_COUNT;
  const shownServices = services.slice(0, servicesToShowCount);
    
  const showMore = () => setIsShowingMore(true);

  return (
    <section id="services" className={styles["services"]}>
      <div className={styles["services__wrapper"]}>
        <h3 className={styles["services__title"]}>Наши услуги</h3>
        {shownServices.map((service) => (
          <Service styles={styles} key={service._id} service={service} />
        ))}
      </div>
      {!isShowingMore && (
        <button onClick={showMore} className={styles["services__show-more"]}>
          Показать еще
        </button>
      )}
    </section>
  );
};

export default Services;
