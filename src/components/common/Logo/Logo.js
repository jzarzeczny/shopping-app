import logoImage from "../../../images/shoppingLogo.svg";

function Logo({ source }) {
  console.log(source);
  return (
    <div className={`logo__container ${"logo__container--" + source} `}>
      <h2 className="logo__title">Shopper</h2>
      <img className="logo__image " src={logoImage} alt="Shopping cart" />
    </div>
  );
}

export default Logo;
