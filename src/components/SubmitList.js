import React, { useContext } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { addListToCurrent } from "../firebase";
import { AuthContext } from "../context/FirebaseContext";

export default function SubmitList({ setListObject, listObject }) {
  const { currentUser } = useContext(AuthContext);
  const removeTheList = () => {
    setListObject({ list: [] });
    localStorage.clear();
  };
  const saveTheList = (list) => {
    localStorage.clear();
    addListToCurrent(currentUser, list);
  };

  return (
    <div className="submitList__container">
      <Button type="secondary" color="red" clickHandler={removeTheList}>
        Usuń listę
      </Button>
      <Link
        className="btn btn--secondary btn--green"
        onClick={() => {
          saveTheList(listObject);
        }}
        to="/"
      >
        Zapisz listę
      </Link>
    </div>
  );
}
