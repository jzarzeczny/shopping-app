import React, { useEffect, useState, useContext } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Layout from "../components/Layout";
import SubmitList from "../components/SubmitList";
import sorter from "../services/sorter";
import { ListContext } from "../context/DisplayListContext";
import checkTheLocalStorage from "../utils/checkTheLocalStorage";

export default function Add() {
  const [shoppingList, setShoppingList] = useState([]);
  const { listToDisplay } = useContext(ListContext);
  function handleRemove(id) {
    const newList = shoppingList.filter((element) => element.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setShoppingList(newList);
  }

  useEffect(() => {
    // Fill the shopping list after refresh
    setShoppingList(checkTheLocalStorage(listToDisplay) || []);
  }, []);

  if (shoppingList.length !== 0) {
    localStorage.setItem("list", JSON.stringify(shoppingList));
  }

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
