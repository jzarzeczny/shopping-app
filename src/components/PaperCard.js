import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PaperText from "./PaperText";
import { addList, addListToCurrent } from "../firebase";
import { checkForUserData } from "../utils/checkTheServerForData";

export default function PaperCard({ user }) {
  const [list, setList] = useState(null);
  useEffect(() => {
    if (user) {
      checkForUserData(user, setList, true);
    }
  }, []);
  return (
    <section className="cardContainer">
      {list &&
        (Object.keys(list.list).length > 0 ? (
          <div className="paper">
            <div className="paper__lines">
              <div className="paper__text">
                {list &&
                  Object.keys(list.list).map((key) => (
                    <PaperText data={list.list[key]} key={key} />
                  ))}
                <br />
              </div>
            </div>
          </div>
        ) : (
          <p className="paper__empty">Nie masz jeszcze swojej listy zakupów.</p>
        ))}

      {list && (
        <div className="card__links">
          {Object.keys(list).length > 0 && (
            <Link to="/add" className="btn">
              Edytuj listę
            </Link>
          )}
          <Link
            to="/add"
            className="btn btn--secondary"
            onClick={() => {
              addList(user, list.list);
              addListToCurrent(user);
            }}
          >
            Nowa lista
          </Link>
        </div>
      )}
    </section>
  );
}
