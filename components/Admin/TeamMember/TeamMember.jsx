import React, { useState } from "react";
import Image from "next/image";

import styles from "./TeamMember.module.scss";

import { useForm } from "../../../hooks/useForm";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ImageCropModal from "../ImageCrop/ImageCropModal";

const TeamMember = ({ teamMember, onDelete, onSave }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const { img, description, name, position } = teamMember;

  const {
    values,
    handleChange,
    handleFileChange: handleFormFileChange,
    clearValue,
    setValue,
  } = useForm({
    description,
    name,
    position,
  });

  const handleFileChange = (e) => {
    setIsPhotoModalOpen(true);
    handleFormFileChange(e);
  };

  const handlePhotoSave = (path) => {
    setValue("img", path);
    setIsPhotoModalOpen(false);
  };

  const handlePhotoCancel = () => {
    clearValue("photo");
    setIsPhotoModalOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const finalTeamMember = { ...teamMember, ...values };
    onSave(finalTeamMember);
  };

  const handleDelete = () => {
    onDelete(teamMember);
  };

  return (
    <form onSubmit={handleSave} className={styles.member}>
      Участник: {name}
      <Input
        required
        type="text"
        label="Имя"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <Input
        required
        type="text"
        label="Позиция"
        name="position"
        value={values.position}
        onChange={handleChange}
      />
      <Input
        required
        spellCheck="false"
        elem="textarea"
        type="text"
        label="Описание"
        name="description"
        value={values.description}
        onChange={handleChange}
      />
      <Input
        type="file"
        label="Фото (300х300)"
        name="photo"
        accept="image/*"
        onChange={handleFileChange}
      />
      <div className={styles.member__photo}>
        {values.img || img ? (
          <Image src={values.img || img} alt={name} width={290} height={290} />
        ) : (
          "Нет картинки"
        )}
      </div>
      <p className={styles.slogan__buttons}>
        <Button type="submit">Сохранить</Button>
        <Button type="button" onClick={handleDelete}>
          Удалить
        </Button>
      </p>
      {isPhotoModalOpen && (
        <ImageCropModal
          photo={values.photo}
          onSave={handlePhotoSave}
          onCancel={handlePhotoCancel}
        />
      )}
    </form>
  );
};

export default TeamMember;
