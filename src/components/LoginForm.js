import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login__form">
      <div className="form__control">
        <label htmlFor="username" className="form__label">
          Login
        </label>
        <input
          type="text"
          id="username"
          {...register("nickname", { required: true })}
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
