import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ setShoppingList, shoppingList }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const categories = ["fruits", "vegitables", "drinks", "frozen", "detergents"];
  function revisedRandId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(2, 10);
  }
  const onSubmit = (data) => {
    data.id = revisedRandId();
    setShoppingList((prevArray) => [...prevArray, data]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__control">
        <label htmlFor="item">Przedmiot</label>
        <input
          type="text"
          id="item"
          {...register("item", { required: true })}
        />
        {errors.item && (
          <div className="form__error">Musisz wybrać przedmiot</div>
        )}
      </div>
      <div className="form__control">
        <label htmlFor="type">Dział</label>
        <div className="form__control--radio">
          {categories.map((category) => (
            <div className="form__radio" key={category}>
              <input
                type="radio"
                id={category}
                key={category}
                value={category}
                // change into type!
                {...register("type", { required: true })}
              />

              <label
                htmlFor={category}
                className={`form__option form__option--${category}`}
              >
                {category}
              </label>
            </div>
          ))}
          {errors.type && (
            <div className="form__error">Musisz wybrać kategorię</div>
          )}
        </div>
      </div>
      <input
        className=" btn form__submit"
        type="submit"
        value="Dodaj produkt"
      />
    </form>
  );
}
