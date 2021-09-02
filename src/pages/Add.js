import React from "react";
import Form from "../components/Form";
import List from "../components/List";

export default function Add() {
  return (
    <section className="addContainer">
      <Form />
      <div className="shoppingList">
        <List />
        <List name="vegitables" />
      </div>
    </section>
  );
}
