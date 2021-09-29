import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../firebase";
import { useHistory } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Użyj adresu email")
      .required("Email jest wymagany"),
    password: Yup.string().required("Hasło jest wymagane"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signIn(data.email, data.password);
      setLoading(false);
      history.push("/");
    } catch (error) {
      console.log(error.code);

      switch (error.code) {
        case "auth/user-not-found":
          setError("email", {
            type: "server",
            message: "Nie znaleziono użytkownika",
          });
          break;
        case "auth/wrong-password":
          setError("password", {
            type: "server",

            message: "Nieprawidłowe hasło",
          });
          break;
        case "auth/too-many-requests":
          setError("server", {
            type: "server",

            message: "Zbyt wiele prób, poczekaj.",
          });
          break;

        default:
          setError("server", { type: "server", message: "Problem z serverem" });
          break;
      }
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login__form">
      <div className="form__control">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="form__input"
        />

        <span className="form__error">{errors.email?.message}</span>
      </div>
      <div className="form__control">
        <label htmlFor="password" className="form__label">
          Hasło
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className="form__input"
        />

        <span className="form__error">{errors.password?.message}</span>
      </div>
      <span className="label__forgot"></span>
      <button
        type="submit"
        className={`btn form__submit ${loading ? "button--loading" : null}`}
      >
        <span className="button__text">Zaloguj się</span>
      </button>

      <span className="form__error--final">{errors.server?.message}</span>
    </form>
  );
}
