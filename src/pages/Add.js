import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import SubmitList from "../components/SubmitList";
import sorter from "../services/sorter";

export default function Add() {
  const [newElement, setNewElement] = useState();
  const [shoppingList, setShoppingList] = useState([]);
  function handleRemove(id) {
    const newList = shoppingList.filter((element) => element.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setShoppingList(newList);
  }
  const addItemToLocalStorage = (data) => {
    localStorage.setItem("list", JSON.stringify(data));
  };
  const checkLocalStorage = () => {
    const localStorageList = JSON.parse(localStorage.getItem("list"));

    if (shoppingList.length === 0 && localStorage.getItem("list") !== null) {
      setShoppingList(localStorageList);
    }
  };
  useEffect(() => {
    // const localStorageList = JSON.parse(localStorage.getItem("list"));
    // if (localStorageList !== null) {
    //   setShoppingList(localStorageList);
    // }
    if (newElement !== undefined) {
      setShoppingList((prevArray) => [...prevArray, newElement]);
      addItemToLocalStorage(shoppingList);
    }
    // checkLocalStorage();
  }, [newElement]);
  // Create an object with correct grup-value
  const localStorageList = JSON.parse(localStorage.getItem("list"));
  console.log(localStorageList);

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
      <SubmitList
        setShoppingList={setShoppingList}
        shoppingList={shoppingList}
      />
    </section>
  );
}
