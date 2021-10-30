import Form from "../../components/common/Form/Form";
import Layout from "../../components/Layout/Layout";

const inputFields = [
  { name: "E-mail", id: "email" },
  { name: "Hasło", id: "password" },
];

function Login() {
  return (
    <Layout>
      <Form inputFields={inputFields} button="Zaloguj się" />
    </Layout>
  );
}

export default Login;
