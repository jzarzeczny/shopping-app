import { LoginImage, RegisterImage, AddToCart } from "../../../../images/form";

function FormImage(props) {
  const determineTheImage = (props) => {
    if (props.login) {
      return <img className="form__image" src={LoginImage} alt="login" />;
    } else if (props.cart) {
      return (
        <img
          className="form__image form__image--cart"
          src={AddToCart}
          alt="cart"
        />
      );
    } else {
      return <img className="form__image" src={RegisterImage} alt="register" />;
    }
  };

  return determineTheImage(props);
}

export default FormImage;
