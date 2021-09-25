import React from "react";
import { useRouter } from "next/router";

import { useForm } from "../../hooks/useForm";

import axios from "../../utils/axios";

import styles from "./Login.module.scss";

const signIn = async (password) => {
  await axios.post("/login", { password });
};

const Login = () => {
  const router = useRouter();
  const { values, handleChange } = useForm({ password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(values.password);
      router.push("/admin");
    } catch (err) {
      alert("Ошибка!");
    }
  };

  return (
    <div className={styles.login}>
      <h2>Выглядит не очень, но работает отменно!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onPaste={handleChange}
            value={values.password}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
