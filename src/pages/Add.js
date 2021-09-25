import React, { useEffect, useState, useContext } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Layout from "../components/Layout";
import SubmitList from "../components/SubmitList";
import sorter from "../utils/sorter";
import { AuthContext } from "../context/FirebaseContext";
import { checkForUserData } from "../utils/checkTheServerForData";
export default function Add() {
  const [listObject, setListObject] = useState({ list: [] });

  const [shoppingList, setShoppingList] = useState(listObject.list);

  const { currentUser } = useContext(AuthContext);

  function handleRemove(id) {
    const newList = listObject.list.filter((element) => element.id !== id);
    localStorage.setItem("list", JSON.stringify(newList));
    setShoppingList(newList);
  }
  const localList = JSON.parse(localStorage.getItem("list"));

  useEffect(() => {
    // Fill the shopping list after refresh
    if (localList === null) {
      if (currentUser) {
        checkForUserData(currentUser, setListObject);
        console.log("in current user");
        console.log(listObject);
        setShoppingList(listObject.list);
      } else {
        setShoppingList([]);
      }
    } else {
      setShoppingList(localList);
    }
  }, [currentUser]);
  listObject.list = shoppingList;
  if (shoppingList.length !== 0) {
    localStorage.setItem("list", JSON.stringify(listObject.list));
  }
  // console.log(shoppingList);
  // console.log(listObject);
  const list = sorter(listObject);
  return (
    <Layout>
      <section className="addContainer">
        <h2 className="add__title">Stwórz listę zakupów</h2>
        <Form setShoppingList={setShoppingList} shoppingList={shoppingList} />
        <div className="shoppingList">
          {list.list &&
            Object.keys(list.list).map((key) => (
              <List
                name={key}
                key={key}
                data={list.list[key]}
                removeElement={handleRemove}
              />
            ))}
        </div>
        <SubmitList setListObject={listObject} listObject={listObject} />
      </section>
    </Layout>
  );
}
