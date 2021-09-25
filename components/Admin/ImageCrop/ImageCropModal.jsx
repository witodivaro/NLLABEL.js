import React, { useEffect, useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import api from "../../../utils/axios";

import { getFormDataFromObj } from "../../../utils/utils";

import styles from "./ImageCrop.module.scss";

export const cropImage = async (payload) => {
  const formData = getFormDataFromObj(payload);

  const {
    data: { path },
  } = await api.post("/crop", formData);

  return path;
};

const ImageCropModal = ({ photo, onCancel, onSave }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState(null);

  const [crop, setCrop] = useState({
    x: 25,
    y: 25,
    unit: "%",
    width: 50,
    aspect: 1,
  });

  const handleChange = (crop) => {
    setCrop(crop);
  };

  const handleSave = async () => {
    const { width, height, x, y } = crop;

    const path = await cropImage({
      width,
      height,
      top: y,
      left: x,
      photo: { file: photo.file },
      imageWidth: dimensions.width,
    });

    onSave(path);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleModalClick = (e) => {
    if (
      containerRef.current.contains(e.target) ||
      containerRef.current === e.target
    ) {
      return;
    }
    onCancel();
  };

  return (
    <div className={styles.modal} onClick={handleModalClick}>
      <div ref={containerRef} className={styles.modal__container}>
        <ReactCrop
          onImageLoaded={(e) => {
            const { width, heigth } = e;
            setDimensions({ width, heigth });
          }}
          crop={crop}
          onChange={handleChange}
          src={photo.src}
        />
        <button
          type="button"
          onClick={handleSave}
          className={styles.modal__button}
        >
          Сохранить
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={styles.modal__button}
        >
          Отменить
        </button>
      </div>
    </div>
  );
};

export default ImageCropModal;
