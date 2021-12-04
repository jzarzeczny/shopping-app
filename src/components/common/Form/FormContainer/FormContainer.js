function FormContainer({ children, source }) {
  return (
    <div
      className={`form__container ${
        source ? "form__container--" + source : ""
      }`}
    >
      {children}
    </div>
  );
}

export default FormContainer;
