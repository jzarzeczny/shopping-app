import React from "react";
import { Link } from "react-router-dom";
import AccountContainer from "../components/AccountContainer";
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import loginImage from "../images/loginImage.svg";

export default function Login() {
  return (
    <Layout>
      <AccountContainer img={loginImage}>
        <h1 className="login__header">Witaj w Shopperze</h1>
        <span className="login__subheader">miło Cię znów widzieć</span>

        <LoginForm />
        <p className="form__register">
          Nie masz konta?
          <Link to="/register" className="register__link">
            Zarejestruj się
          </Link>
        </p>
      </AccountContainer>
    </Layout>
  );
}
