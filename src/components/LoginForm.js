import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../firebase";
import { useHistory } from "react-router";

export default function LoginForm() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then(history.push("/"))
      .catch((e) => console.log(e));
    // history.push("/");
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
          {...register("email", { required: true })}
          className="form__input"
        />
        {errors.nickname && (
          <span className="form__error">To pole jest wymagane</span>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="password" className="form__label">
          Hasło
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: true })}
          className="form__input"
        />
        {errors.password && (
          <span className="form__error">To pole jest wymagane</span>
        )}
      </div>
      <span className="label__forgot"></span>
      <input type="submit" className="btn form__submit" value="Zaloguj się" />
    </form>
  );
}
