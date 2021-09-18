import React, { useContext } from "react";
import { ListContext } from "../context/DisplayListContext";
import { Link } from "react-router-dom";
import sorter from "../services/sorter";
import PaperText from "./PaperText";
import checkTheLocalStorage from "../utils/checkTheLocalStorage";

export default function PaperCard() {
  const { listToDisplay, setListToDisplay } = useContext(ListContext);

  const storageList = checkTheLocalStorage(listToDisplay) || [];

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
      <div className="card__links">
        {Object.keys(newList).length > 0 && (
          <Link to="/add" className="btn">
            Edytuj listę
          </Link>
        )}
        <Link
          to="/add"
          className="btn btn--secondary"
          onClick={() => {
            localStorage.clear();
            setListToDisplay([]);
          }}
        >
          Nowa lista
        </Link>
      </div>
    </div>
  );
}
