function FormSelect({ data, register, errors }) {
  const { id, name, options } = data;
  return (
    <div className="form__control">
      <label htmlFor={id} className="form__label">
        {name}
      </label>
      <select className="form__select form__input" id={id} {...register(id)}>
        <option className="form__option" value="">
          Wybierz kategorię
        </option>
        {options.map((option) => (
          <option className="form__option" value={option.id} key={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      {errors[id] && <span className="form__error">To pole jest wymagane</span>}
    </div>
  );
}

export default FormSelect;
