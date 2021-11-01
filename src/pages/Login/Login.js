import Form from "../../components/common/Form/Form";
import FormContainer from "../../components/common/FormContainer/FormContainer";
import FormImage from "../../components/common/FormImage/FormImage";
import FormIntro from "../../components/common/FormIntro/FormIntro";
import Layout from "../../components/Layout/Layout";

const inputFields = [
  { name: "E-mail", id: "email" },
  { name: "Hasło", id: "password" },
];

function Login() {
  return (
    <Layout>
      <FormContainer>
        <FormIntro login />
        <Form inputFields={inputFields} button="Zaloguj się" />
        <FormImage login />
      </FormContainer>
    </Layout>
  );
}

export default Login;
