import logoImage from "../../../images/shoppingLogo.svg";

function Logo() {
  return (
    <div className="logo__container">
      <h2 className="logo__title">Shopper</h2>
      <img className="logo__image" src={logoImage} alt="Shopping cart" />
    </div>
  );
}

export default Logo;
