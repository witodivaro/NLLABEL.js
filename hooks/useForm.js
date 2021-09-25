import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    const src = URL.createObjectURL(files[0]);

    const file = {
      src,
      file: files[0],
    };

    setValues({
      ...values,
      [name]: file,
    });
  };

  const clearValue = (field) => {
    const newValues = { ...values };

    delete newValues[field];

    setValues(newValues);
  };

  const setValue = (field, value) => {
    setValues({ ...values, [field]: value });
  };

  return { values, handleChange, handleFileChange, clearValue, setValue };
};
