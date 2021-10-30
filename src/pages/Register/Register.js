import Form from "../../components/common/Form/Form";
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
      <Form inputFields={inputFields} button={"Zarejstruj się"} />
      <Question />
    </Layout>
  );
}

export default Register;
