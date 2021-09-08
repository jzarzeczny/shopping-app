import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Layout from "../components/Layout";
import SubmitList from "../components/SubmitList";
import sorter from "../services/sorter";

export default function Add() {
  const [shoppingList, setShoppingList] = useState([]);
  function handleRemove(id) {
    const newList = shoppingList.filter((element) => element.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setShoppingList(newList);
  }

  const checkLocalStorage = () => {
    console.log("Check the local storage after rerender");
    const localStorageList = JSON.parse(localStorage.getItem("list"));
    console.log(shoppingList);

    setShoppingList(localStorageList);
  };

  useEffect(() => {
    // Fill the shopping list after refresh
    console.log("Function inside the useEffect");
    const localStorageList = JSON.parse(localStorage.getItem("list"));
    console.log(localStorageList);
    checkLocalStorage();
  }, []);
  console.log("Fucntion in the body of component");
  // Save the data to local memeory
  if (shoppingList.length !== 0) {
    console.log("Function inside the adding localsotorage");
    localStorage.setItem("list", JSON.stringify(shoppingList));
  }
  console.log(shoppingList);

  // Create an object with correct grup-value
  const list = sorter(shoppingList);
  return (
    <Layout>
      <section className="addContainer">
        <h2 className="add__title">Stwórz listę zakupów</h2>
        <Form setShoppingList={setShoppingList} shoppingList={shoppingList} />
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
    </Layout>
  );
}
