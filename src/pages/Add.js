import React, { useEffect, useState, useContext } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Layout from "../components/Layout";
import SubmitList from "../components/SubmitList";
import sorter from "../utils/sorter";
import { AuthContext } from "../context/FirebaseContext";
import { checkForUserData } from "../utils/checkTheServerForData";

export default function Add() {
  const [shoppingList, setShoppingList] = useState([]);

  const { currentUser } = useContext(AuthContext);

  function handleRemove(id) {
    const newList = shoppingList.filter((element) => element.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setShoppingList(newList);
  }
  const localList = JSON.parse(localStorage.getItem("list"));

  useEffect(() => {
    // Fill the shopping list after refresh
    if (localList === null) {
      if (currentUser) {
        checkForUserData(currentUser, setShoppingList);
      } else {
        setShoppingList([]);
      }
    } else {
      setShoppingList(localList);
    }
  }, [currentUser]);

  if (shoppingList.length !== 0) {
    localStorage.setItem("list", JSON.stringify(shoppingList));
  }
  // Create an object with correct grup-value
  const list = sorter(shoppingList);
  return (
    <Layout>
      <section className="addContainer">
        <h2 className="add__title">Stwórz listę zakupów</h2>
        <Form setShoppingList={setShoppingList} />
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
