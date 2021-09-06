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
    const localStorageList = JSON.parse(localStorage.getItem("list"));
    setShoppingList(localStorageList);
  };

  useEffect(() => {
    checkLocalStorage();
  }, []);
  // Fill the shopping list after refresh
  if (shoppingList.length !== null) {
    localStorage.setItem("list", JSON.stringify(shoppingList));
  }

  // Create an object with correct grup-value
  const list = sorter(shoppingList);
  return (
    <Layout>
      <section className="addContainer">
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
