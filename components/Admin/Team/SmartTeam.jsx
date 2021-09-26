import React, { useState } from "react";

import Button from "../Button/Button";
import DumbTeam from "./DumbTeam";

import {
  updateTeamMember,
  createTeamMember,
  deleteTeamMember,
} from "./actions/actions";

import styles from "./Team.module.scss";
import { getUpdatedArray } from "../../../utils/utils";

const SmartTeam = ({ team }) => {
  const [localTeam, setLocalTeam] = useState(team);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingTeamMember, setIsAddingTeamMember] = useState(false);

  const toggleIsAddingTeamMember = () =>
    setIsAddingTeamMember(!isAddingTeamMember);
  const toggleIsOpen = () => {
    if (isOpen) setIsAddingTeamMember(false);
    setIsOpen(!isOpen);
  };

  const handleSave = async (update) => {
    let updatedTeamMember = null;

    let newTeam = [...localTeam];

    try {
      if (update._id) {
        updatedTeamMember = await updateTeamMember(update);
        newTeam = getUpdatedArray(localTeam, updatedTeamMember, "_id");
        setLocalTeam(newTeam);
        alert("Участник изменен!");
      } else {
        updatedTeamMember = await createTeamMember(update);
        setIsAddingTeamMember(false);
        newTeam.push(updatedTeamMember);
        alert("Участник добавлен!");
      }

      setLocalTeam(newTeam);
    } catch (err) {
      console.error(err);
      alert("Ошибка!");
    }
  };

  const handleDelete = async (member) => {
    if (!member._id) return setIsAddingTeamMember(false);

    try {
      const deletedTeamMember = await deleteTeamMember(member);

      setLocalTeam(
        localTeam.filter(({ _id }) => _id !== deletedTeamMember._id)
      );
      alert("Участник удален!");
    } catch (err) {
      console.error(err);
      alert("Ошибка!");
    }
  };

  return (
    <div className={styles.team}>
      <Button onClick={toggleIsOpen} className={styles.team__title}>
        Участники
      </Button>
      {isOpen && (
        <>
          <Button onClick={toggleIsAddingTeamMember}>
            {isAddingTeamMember ? "Отмена" : "+ Добавить"}
          </Button>
          <DumbTeam
            isAddingTeamMember={isAddingTeamMember}
            team={localTeam}
            onSave={handleSave}
            onDelete={handleDelete}
            className={styles.team__container}
          />
        </>
      )}
    </div>
  );
};

export default SmartTeam;
