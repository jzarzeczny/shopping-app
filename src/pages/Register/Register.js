import { useReducer, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import FormContainer from "../../components/common/Form/FormContainer/FormContainer";
import FormImage from "../../components/common/Form/FormImage/FormImage";
import FormIntro from "../../components/common/Form/FormIntro/FormIntro";
import Layout from "../../components/Layout/Layout";
import Question from "../../components/Register/Question/Question";
import { registerUser } from "../../firebase";
import { useHistory } from "react-router";

const inputFields = [
  { name: "Uzytkownik", id: "username" },
  { name: "E-mail", id: "email" },
  { name: "Hasło", id: "password" },
  { name: "Powtórz hasło", id: "password2" },
];

function registerReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return null;
    default:
      return null;
  }
}

function Register() {
  const [registerData, setRegisterData] = useState(null);
  const [state, dispatch] = useReducer(registerReducer, {});

  let history = useHistory();
  useEffect(() => {
    try {
      registerUser(
        registerData.email,
        registerData.password,
        registerData.username
      );
      history.push("/lists");
    } catch (e) {
      dispatch({ type: e.code });
    }
  }, [registerData]);
  return (
    <Layout>
      <FormContainer>
        <FormIntro />
        <Form
          inputFields={inputFields}
          button={"Zarejstruj się"}
          dataGetter={setRegisterData}
        />
        <Question />
        <FormImage />
      </FormContainer>
    </Layout>
  );
}

export default Register;
