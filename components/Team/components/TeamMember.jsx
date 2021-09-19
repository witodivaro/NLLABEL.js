import React from "react";
import Image from "next/image";

import styles from "./TeamMember.module.scss";

const TeamMember = ({ member }) => {
  const { img, name, position, description } = member;

  return (
    <div className={styles["team-member__tabcontent"]}>
      <div className={styles["team-member__photo-container"]}>
        <Image
          src={img}
          alt={name}
          width={320}
          height={320}
          className={styles["team-member__photo"]}
        />
      </div>
      <p className={styles["team-member__name"]}>{name}</p>
      <p className={styles["team-member__position"]}>{position}</p>
      <span className={styles["team-member__pink-line"]}></span>
      <p className={styles["team-member__description"]}>{description}</p>
    </div>
  );
};

export default TeamMember;
