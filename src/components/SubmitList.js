import React from "react";
import Button from "./Button";

export default function SubmitList({ setShoppingList, shoppingList }) {
  const removeTheList = () => {
    setShoppingList([]);
  };

  const saveTheList = (list) => {
    console.log(list);
  };

  return (
    <div className="submitList__container">
      <Button type="red" clickHandler={removeTheList}>
        Usuń listę
      </Button>
      <Button
        type="green"
        clickHandler={() => {
          saveTheList(shoppingList);
        }}
      >
        Zapisz listę
      </Button>
    </div>
  );
}
