function FormIntro({ login }) {
  return (
    <div className="intro__container">
      <h3 className="intro__greetings">Witaj w Shopperze</h3>
      {login ? (
        <p className="intro__specific">miło Cię znów widzieć</p>
      ) : (
        <p className="intro__specific">stwórz konto</p>
      )}
    </div>
  );
}

export default FormIntro;
