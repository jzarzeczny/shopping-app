import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { registerUser } from "../firebase";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function RegisterForm() {
  let history = useHistory();
  const validationSchema = Yup.object().shape({
    nickname: Yup.string()
      .required("Nickname jest wymagany")
      .min(6, "Nickname musi być dłuższy"),
    email: Yup.string().email().required("Email jest wymagany"),
    password: Yup.string()
      .required("Hasło jest wymagane")
      .min(6, "Hasło musi być dłuższe"),
    password2: Yup.string()
      .required("Potwierdzenie hasła wymagane")
      .oneOf([Yup.ref("password")], "Hasła muszą być takie same"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password, data.nickname);
      history.push("/");
    } catch (error) {
      const errorCode = error.code;
      switch (errorCode) {
        case "auth/email-already-in-use":
          setError("email", {
            type: "server",
            message: "Ten email jest zajęty",
          });
          break;
        default:
          setError("server", {
            type: "server",
            message: "Server nie odpowowiada",
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login__form">
      <div className="form__control">
        <label htmlFor="username" className="form__label">
          Nickname
        </label>
        <input
          type="text"
          id="username"
          {...register("nickname", { required: "To pole jest wymagane" })}
          className="form__input"
        />
        {errors.nickname && (
          <span className="form__error">{errors.nickname?.message}</span>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "To pole jest wymagane" })}
          className="form__input"
        />
        {errors.email && (
          <span className="form__error">{errors.email.message}</span>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="password" className="form__label">
          Hasło
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "To pole jest wymagane" })}
          className="form__input"
        />

        <span className="form__error">{errors.password?.message}</span>
      </div>
      <div className="form__control">
        <label htmlFor="password2" className="form__label">
          Powtórz hasło
        </label>
        <input
          type="password"
          id="password2"
          {...register("password2", { required: "To pole jest wymagane" })}
          className="form__input"
        />
        {errors.password2 && (
          <span className="form__error">{errors.password2.message}</span>
        )}
      </div>
      <span className="label__forgot"></span>
      <input type="submit" className="btn form__submit" value="Zarejstuj się" />
      <span className="form__error--final">{errors.server?.message}</span>
    </form>
  );
}
