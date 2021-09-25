import React, { useState } from "react";

import Button from "../Button/Button";
import SlogansList from "../SlogansList/SlogansList";

import { saveSlogan, createSlogan, deleteSlogan } from "./actions/actions";

import styles from "./Slogans.module.scss";

const Slogans = ({ slogans }) => {
  const [localSlogans, setLocalSlogans] = useState(slogans);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingSlogan, setIsAddingSlogan] = useState(false);

  const toggleIsAddingSlogan = () => setIsAddingSlogan(!isAddingSlogan);
  const toggleIsOpen = () => {
    if (isOpen) setIsAddingSlogan(false);
    setIsOpen(!isOpen);
  };

  const handleSave = async (slogan) => {
    let updatedSlogan = null;

    try {
      if (slogan._id) {
        updatedSlogan = await saveSlogan(slogan);

        setLocalSlogans(
          localSlogans.map((localSlogan) =>
            localSlogan._id !== updatedSlogan._id ? localSlogan : updatedSlogan
          )
        );
        alert("Слоган изменен!");
      } else {
        updatedSlogan = await createSlogan(slogan);
        setIsAddingSlogan(false);
        setLocalSlogans([...localSlogans, updatedSlogan]);
        alert("Слоган добавлен!");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка!");
    }
  };

  const handleDelete = async (slogan) => {
    if (!slogan._id) return setIsAddingSlogan(false);

    try {
      const deletedSlogan = await deleteSlogan(slogan);

      setLocalSlogans(
        localSlogans.filter(({ _id }) => _id !== deletedSlogan._id)
      );
      alert("Слоган удален!");
    } catch (err) {
      console.error(err);
      alert("Ошибка!");
    }
  };

  return (
    <div className={styles.slogans}>
      <Button onClick={toggleIsOpen} className={styles.slogans__title}>
        Слоганы
      </Button>
      {isOpen && (
        <>
          <Button onClick={toggleIsAddingSlogan}>
            {isAddingSlogan ? "Отмена" : "+ Добавить слоган"}
          </Button>
          <SlogansList
            isAddingSlogan={isAddingSlogan}
            slogans={localSlogans}
            onSave={handleSave}
            onDelete={handleDelete}
            className={styles.slogans__container}
          />
        </>
      )}
    </div>
  );
};

export default Slogans;
