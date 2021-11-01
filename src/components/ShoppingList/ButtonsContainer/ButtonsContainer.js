function ButtonsContainer({ list }) {
  return (
    <div className="shopping__buttons">
      <div
        className={`shopping__icon shopping__cart ${
          list ? "shopping__icon--active" : ""
        }`}
      >
        <i className="shopping__icon--cart" />
      </div>
      <div
        className={`shopping__icon shopping__cart ${
          list ? "" : "shopping__icon--active"
        }`}
      >
        <i className="shopping__icon--edit" />
      </div>
      <i className="shopping__icon--sort"></i>
    </div>
  );
}

export default ButtonsContainer;
