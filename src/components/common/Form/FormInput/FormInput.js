const typeOfInput = (id) => {
  if (id === "password" || id === "password2") {
    return "password";
  } else if (id === "email") {
    return "email";
  } else {
    return;
  }
};
function FormInput({ name, id, errors, register, required }) {
  return (
    <div className="form__control">
      <label htmlFor={name} className="form__label">
        {name}
      </label>
      <input
        className="form__input"
        id={id}
        type={typeOfInput(id)}
        {...register(`${id}`, required)}
      ></input>
      {errors[id] && <span className="form__error">To pole jest wymagane</span>}
    </div>
  );
}

export default FormInput;
