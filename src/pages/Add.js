import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import sorter from "../services/sorter";

export default function Add() {
  const [newElement, setNewElement] = useState();
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    if (newElement !== undefined) {
      setShoppingList((prevArray) => [...prevArray, newElement]);
    }
  }, [newElement]);
  // console.log(shoppingList);
  const list = sorter(shoppingList);
  for (const e in list) {
    // console.log(e);
    // console.log(list[e]);
  }

  Object.keys(list).forEach((key) => console.log(list[key]));

  return (
    <section className="addContainer">
      <Form addItem={setNewElement} />
      <div className="shoppingList">
        {list &&
          Object.keys(list).map((key) => <List name={key} data={list[key]} />)}
      </div>
    </section>
  );
}
