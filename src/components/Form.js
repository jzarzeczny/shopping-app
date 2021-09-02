import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form__control">
        <label htmlFor="item">Przedmiot</label>
        <input type="text" id="item" {...register("item")} />
      </div>
      <div className="form__control">
        <label htmlFor="type">Dział</label>
        <select name="type" id="type" {...register("destination")}>
          <option value="fruts">Owoce</option>
          <option value="vegitables">Warzywa</option>
          <option value="drinks">Napoje</option>
          <option value="frozen">Mrożonki</option>
          <option value="detergents">Chemia</option>
        </select>
      </div>
      <div className="form__control">
        <label htmlFor="number">Ilość</label>
        <input type="text" id="number" {...register("number")} />
      </div>
      <input
        className=" btn form__submit"
        type="submit"
        value="Dodaj produkt"
      />
    </form>
  );
}
