import React, { useContext } from "react";
import { ListContext } from "../context/DisplayListContext";
import { Link } from "react-router-dom";
import sorter from "../services/sorter";
import PaperText from "./PaperText";
import Button from "./Button";

export default function PaperCard() {
  const { listToDisplay } = useContext(ListContext);
  const storageList = JSON.parse(localStorage.getItem("list")) || listToDisplay;

  const newList = sorter(storageList);

  return (
    <div className="cardContainer">
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
      <Link to="/add">
        <Button>Nowa lista</Button>
      </Link>
    </div>
  );
}
