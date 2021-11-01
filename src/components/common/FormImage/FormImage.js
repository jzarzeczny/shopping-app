import { LoginImage, RegisterImage } from "../../../images/form";

function FormImage({ login }) {
  return (
    <>
      {login ? (
        <img className="form__image" src={LoginImage} alt="login" />
      ) : (
        <img className="form__image" src={RegisterImage} alt="register" />
      )}
    </>
  );
}

export default FormImage;
