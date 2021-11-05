import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Form from "../../components/common/Form/Form";
import FormContainer from "../../components/common/Form/FormContainer/FormContainer";
import FormImage from "../../components/common/Form/FormImage/FormImage";
import FormIntro from "../../components/common/Form/FormIntro/FormIntro";
import Layout from "../../components/Layout/Layout";
import Question from "../../components/Register/Question/Question";
import { registerUser } from "../../firebase";
const inputFields = [
  { name: "Uzytkownik", id: "username" },
  { name: "E-mail", id: "email" },
  { name: "Hasło", id: "password" },
  { name: "Powtórz hasło", id: "password2" },
];

function Register() {
  const [registerData, setRegisterData] = useState(null);
  useEffect(() => {
    registerUser(registerData);
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
