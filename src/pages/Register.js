import React from "react";
import { Link } from "react-router-dom";
import AccountContainer from "../components/AccountContainer";
import Layout from "../components/Layout";
import RegisterForm from "../components/RegisterForm";
import registerImage from "../images/registerImage.svg";

export default function Login() {
  return (
    <Layout>
      <AccountContainer img={registerImage}>
        <h1 className="login__header">Witaj w Shopperze</h1>
        <span className="login__subheader">stwórz konto</span>

        <RegisterForm />
        <p className="form__register">
          Masz już konto?
          <Link to="/login" className="register__link">
            Zaloguj się
          </Link>
        </p>
      </AccountContainer>
    </Layout>
  );
}
