import React from "react";

import styles from "./Slogan.module.scss";

import { useForm } from "../../../hooks/useForm";
import Button from "../Button/Button";

const Slogan = ({ slogan, onDelete, onSave }) => {
  const { text } = slogan;

  const { values, handleChange } = useForm({
    text,
  });

  const handleSave = () => {
    onSave({ ...slogan, ...values });
  };

  const handleDelete = () => {
    onDelete(slogan);
  };

  return (
    <label className={styles.slogan}>
      Слоган: {text}
      <textarea
        type="text"
        value={values.text}
        name="text"
        onChange={handleChange}
      />
      <p className={styles.slogan__buttons}>
        <Button onClick={handleSave}>Сохранить</Button>
        <Button onClick={handleDelete}>Удалить</Button>
      </p>
    </label>
  );
};

export default Slogan;
