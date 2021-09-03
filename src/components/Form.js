import React from "react";
import { useForm } from "react-hook-form";

export default function Form({ addItem }) {
  const { register, handleSubmit } = useForm();

  function revisedRandId() {
    return Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(2, 10);
  }
  const onSubmit = (data) => {
    data.id = revisedRandId();
    addItem(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__control">
        <label htmlFor="item">Przedmiot</label>
        <input type="text" id="item" {...register("item")} />
      </div>
      <div className="form__control">
        <label htmlFor="type">Dział</label>
        <select name="type" id="type" {...register("type")}>
          <option value="fruits">Owoce</option>
          <option value="vegitables">Warzywa</option>
          <option value="drinks">Napoje</option>
          <option value="frozen">Mrożonki</option>
          <option value="detergents">Chemia</option>
        </select>
      </div>
      <input
        className=" btn form__submit"
        type="submit"
        value="Dodaj produkt"
      />
    </form>
  );
}
