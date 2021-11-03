function ButtonsContainer({ list, setListView }) {
  return (
    <div className="shopping__buttons">
      <div
        className={`shopping__icon shopping__cart ${
          list ? "shopping__icon--active" : ""
        }`}
        onClick={() => {
          setListView(true);
        }}
      >
        <i className="shopping__icon--cart" />
      </div>
      <div
        className={`shopping__icon shopping__cart ${
          list ? "" : "shopping__icon--active"
        }`}
        onClick={() => {
          setListView(false);
        }}
      >
        <i className="shopping__icon--edit" />
      </div>
      <i className="shopping__icon--sort"></i>
    </div>
  );
}

export default ButtonsContainer;
