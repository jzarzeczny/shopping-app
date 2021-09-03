import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import sorter from "../services/sorter";

export default function Add() {
  const [newElement, setNewElement] = useState();
  const [shoppingList, setShoppingList] = useState([]);
  function handleRemove(id) {
    const newList = shoppingList.filter((element) => element.id !== id);
    console.log(newList);
    setShoppingList(newList);
  }
  useEffect(() => {
    if (newElement !== undefined) {
      setShoppingList((prevArray) => [...prevArray, newElement]);
    }
  }, [newElement]);
  // Create an object with correct grup-value
  console.log(shoppingList);

  const list = sorter(shoppingList);
  return (
    <section className="addContainer">
      <Form addItem={setNewElement} />
      <div className="shoppingList">
        {list &&
          Object.keys(list).map((key) => (
            <List
              name={key}
              key={key}
              data={list[key]}
              removeElement={handleRemove}
            />
          ))}
      </div>
    </section>
  );
}
