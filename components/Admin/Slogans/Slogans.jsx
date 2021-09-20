import React, { useState } from "react";
import api from "../../../utils/axios";

import Button from "../Button/Button";
import Slogan from "../Slogan/Slogan";

import styles from "./Slogans.module.scss";

const saveSlogan = async (slogan) => {
  const { _id, text } = slogan;

  try {
    const {
      data: { slogan },
    } = await api.put("/slogans/", { _id, text });

    alert("Слоган сохранен!");

    return slogan;
  } catch (err) {
    console.log(err);
    alert("Ошибка!");
  }
};

const deleteSlogan = async (slogan) => {
  const { _id } = slogan;

  try {
    await api.delete("/slogans", { data: { _id } });

    alert("Слоган удален!");

    return slogan;
  } catch (err) {
    console.log(err);
    alert("Ошибка!");
  }
};

const createSlogan = async (slogan) => {
  const { text } = slogan;

  try {
    const {
      data: { slogan },
    } = await api.post("/slogans", { text });
    alert("Слоган создан!");
    return slogan;
  } catch (err) {
    console.log(err);
    alert("Ошибка!");
  }
};

const Slogans = ({ slogans }) => {
  const [localSlogans, setLocalSlogans] = useState(slogans);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingSlogan, setIsAddingSlogan] = useState(false);

  const toggleIsAddingSlogan = () => setIsAddingSlogan(!isAddingSlogan);
  const toggleIsOpen = () => {
    if (isOpen && isAddingSlogan) setIsAddingSlogan(false);
    setIsOpen(!isOpen);
  };

  const handleSave = async (slogan) => {
    let updatedSlogan = null;

    if (slogan._id) {
      updatedSlogan = await saveSlogan(slogan);

      setLocalSlogans(
        localSlogans.map((localSlogan) =>
          localSlogan._id !== updatedSlogan._id ? localSlogan : updatedSlogan
        )
      );
    } else {
      updatedSlogan = await createSlogan(slogan);
      setIsAddingSlogan(false);
      setLocalSlogans([...localSlogans, updatedSlogan]);
    }

    if (updatedSlogan) {
    }
  };

  const handleDelete = async (slogan) => {
    const deletedSlogan = await deleteSlogan(slogan);

    if (deletedSlogan) {
      setLocalSlogans(
        localSlogans.filter(({ _id }) => _id !== deletedSlogan._id)
      );
    }
  };

  return (
    <div className={styles.slogans}>
      <Button onClick={toggleIsOpen} className={styles.slogans__title}>
        Слоганы
      </Button>
      {isOpen && (
        <Button onClick={toggleIsAddingSlogan}>
          {isAddingSlogan ? "Отмена" : "+ Добавить слоган"}
        </Button>
      )}
      {isOpen && <div className={styles.slogans__container}>
        {isAddingSlogan && (
          <Slogan
            key="new"
            slogan={{}}
            onSave={handleSave}
            onDelete={toggleIsAddingSlogan}
          />
        )}
        {localSlogans.map((slogan) => (
          <Slogan
            key={slogan._id}
            slogan={slogan}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        ))}
      </div>}
    </div>
  );
};

export default Slogans;
