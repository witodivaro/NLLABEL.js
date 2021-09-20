import React from "react";
import { Swiper, SwiperSlide } from "swiper/swiper-react.cjs";

import TeamMember from "./components/TeamMember";

import styles from "./Team.module.scss";

const Team = ({ team }) => {
  return (
    <section className={styles["team"]} id="team">
      <h2 className={styles["team__header"]}>Команда</h2>
      <p className={styles["team__info"]}>
        Ознакомьтесь с нашей профессиональной командой
      </p>
      <Swiper
        autoplay
        className={styles["team__slider"]}
        spaceBetween={50}
        slidesPerView={1}
      >
        {team.map((member) => (
          <SwiperSlide key={member.name}>
            <TeamMember member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
