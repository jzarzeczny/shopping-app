import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { registerUser } from "../firebase";

export default function RegisterForm() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      registerUser(data.email, data.password, data.nickname);
      history.push("/");
    } catch (err) {
      console.log(err);
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
          {...register("nickname", { required: true })}
          className="form__input"
        />
        {errors.nickname && (
          <span className="form__error">To pole jest wymagane</span>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="email" className="form__label">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="form__input"
        />
        {errors.password && (
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
      <div className="form__control">
        <label htmlFor="password2" className="form__label">
          Powtórz hasło
        </label>
        <input
          type="password"
          id="password2"
          {...register("password2", { required: true })}
          className="form__input"
        />
        {errors.password && (
          <span className="form__error">To pole jest wymagane</span>
        )}
      </div>

      <span className="label__forgot"></span>
      <input type="submit" className="btn form__submit" value="Zarejstuj się" />
    </form>
  );
}
