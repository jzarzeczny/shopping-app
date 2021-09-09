import React, { useContext } from "react";
import { ListContext } from "../context/DisplayListContext";
import { Link } from "react-router-dom";
import sorter from "../services/sorter";
import PaperText from "./PaperText";

export default function PaperCard() {
  const { listToDisplay } = useContext(ListContext);
  const checkTheLocalStorage = () => {
    if (listToDisplay.length > 0) {
      console.log(listToDisplay);
      return listToDisplay;
    } else {
      try {
        return JSON.parse(localStorage.getItem("list"));
      } finally {
        return [];
      }
    }
  };

  const storageList = checkTheLocalStorage();

  const newList = sorter(storageList);
  console.log(newList);

  return (
    <div className="cardContainer">
      {Object.keys(newList).length > 0 ? (
        <div className="paper">
          <div className="paper__lines">
            <div className="paper__text">
              {newList &&
                Object.keys(newList).map((key) => (
                  <PaperText data={newList[key]} key={key} />
                ))}
              <br />
            </div>
          </div>
        </div>
      ) : (
        <p className="paper__empty">Nie masz jeszcze swojej listy zakupów.</p>
      )}

      <Link to="/add" className="btn" onClick={() => localStorage.clear()}>
        Nowa lista
      </Link>
    </div>
  );
}
