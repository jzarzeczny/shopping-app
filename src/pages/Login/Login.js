import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState, useReducer } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import FormContainer from "../../components/common/Form/FormContainer/FormContainer";
import FormImage from "../../components/common/Form/FormImage/FormImage";
import FormIntro from "../../components/common/Form/FormIntro/FormIntro";
import Layout from "../../components/Layout/Layout";
import { auth } from "../../firebase";

const inputFields = [
  { name: "E-mail", id: "email" },
  { name: "Hasło", id: "password" },
];

const errors = { username: null, password: null };

function reducer(state, action) {
  switch (action.type) {
    case "auth/user-not-found":
      return { ...state, username: "Nie znaleziono uzytkownika" };
    default:
      return "Unknown error";
  }
}

function Login() {
  const [loginData, setLoginData] = useState(null);
  const [state, dispath] = useReducer(reducer, errors);

  useEffect(() => {
    loginAttempt(loginData);
  }, [loginData]);
  console.log(state);

  const loginAttempt = async (loginData) => {
    if (loginData) {
      try {
        await signInWithEmailAndPassword(
          auth,
          loginData.email,
          loginData.password
        );
      } catch (error) {
        dispath({ type: error.code });
      }
    } else return;
  };
  return (
    <Layout>
      <FormContainer>
        <FormIntro login />
        <Form
          inputFields={inputFields}
          button="Zaloguj się"
          dataGetter={setLoginData}
        />
        <FormImage login />
      </FormContainer>
    </Layout>
  );
}

export default Login;
