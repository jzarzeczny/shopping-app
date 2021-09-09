import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { ListContext } from "../context/DisplayListContext";

export default function SubmitList({ setShoppingList, shoppingList }) {
  const { setListToDisplay } = useContext(ListContext);
  const removeTheList = () => {
    setShoppingList([]);
  };

  const saveTheList = (list) => {
    localStorage.setItem("list", JSON.stringify(list));
    setListToDisplay(list);
  };

  return (
    <div className="submitList__container">
      <Button type="red" clickHandler={removeTheList}>
        Usuń listę
      </Button>
      <Link to="/">
        <Button
          type="green"
          clickHandler={() => {
            saveTheList(shoppingList);
          }}
        >
          Zapisz listę
        </Button>
      </Link>
    </div>
  );
}
