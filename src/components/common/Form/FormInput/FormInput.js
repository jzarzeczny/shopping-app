// Determine the inpu type based on id prop
const typeOfInput = (id) => {
  if (id === "password" || id === "password2") {
    return "password";
  } else if (id === "email") {
    return "email";
  } else {
    return;
  }
};

function FormInput({ name, id, register, errors, required }) {
  return (
    <div className="form__control">
      <label htmlFor={name} className="form__label">
        {name}
      </label>
      <input
        className="form__input"
        id={id}
        type={typeOfInput(id)}
        {...register(`${id}`, { required: required })}
      ></input>
      {errors[id] && <span className="form__error">To pole jest wymagane</span>}
    </div>
  );
}

export default FormInput;
