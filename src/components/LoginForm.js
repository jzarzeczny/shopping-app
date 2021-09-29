import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "../firebase";
import { useHistory } from "react-router";

export default function LoginForm() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    clearErrors();
    setError("nickname");
    try {
      await signIn(data.email, data.password);
      history.push("/");
    } catch (error) {
      console.log(error.message);
      switch (error.message) {
        case "Firebase: Error (auth/user-not-found).":
          setError("nickname", {
            type: "server",
            message: "Nie znaleziono użytkownika",
          });
          break;
        case "Firebase: Error (auth/wrong-password).":
          setError("password", {
            type: "server",

            message: "Nieprawidłowe hasło",
          });
          break;
        case "Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).":
          setError("server", {
            type: "server",

            message: "Zbyt wiele prób, poczekaj.",
          });
          break;

        default:
          setError("server", { type: "server", message: "Problem z serverem" });
          break;
      }
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
          {...register("email", {
            required: "To pole jest wymagane",
          })}
          className="form__input"
        />
        {errors.nickname && (
          <span className="form__error">{errors.nickname.message}</span>
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
        {errors.password && (
          <span className="form__error">{errors.password.message}</span>
        )}
      </div>
      <span className="label__forgot"></span>
      <input
        type="submit"
        onClick={() => clearErrors()}
        className="btn form__submit"
        value="Zaloguj się"
      />
      {errors.server && (
        <span className="form__error--final">Problem z serwerem</span>
      )}
    </form>
  );
}
