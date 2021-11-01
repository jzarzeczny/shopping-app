import Form from "../../components/common/Form/Form";
import FormContainer from "../../components/common/FormContainer/FormContainer";
import FormImage from "../../components/common/FormImage/FormImage";
import FormIntro from "../../components/common/FormIntro/FormIntro";
import Layout from "../../components/Layout/Layout";
import Question from "../../components/Register/Question/Question";

const inputFields = [
  { name: "Uzytkownik", id: "username" },
  { name: "E-mail", id: "email" },
  { name: "Hasło", id: "password" },
  { name: "Powtórz hasło", id: "password2" },
];

function Register() {
  return (
    <Layout>
      <FormContainer>
        <FormIntro />
        <Form inputFields={inputFields} button={"Zarejstruj się"} />
        <Question />
        <FormImage />
      </FormContainer>
    </Layout>
  );
}

export default Register;
