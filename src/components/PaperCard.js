import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PaperText from "./PaperText";
import { addListToCurrent } from "../firebase";
import { AuthContext } from "../context/FirebaseContext";
import { checkForUserData } from "../utils/checkTheServerForData";

export default function PaperCard() {
  const [list, setList] = useState();
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      checkForUserData(currentUser, setList, true);
    }
  }, [currentUser]);

  return (
    <section className="cardContainer">
      {list ? (
        Object.keys(list).length > 0 ? (
          <div className="paper">
            <div className="paper__lines">
              <div className="paper__text">
                {list &&
                  Object.keys(list).map((key) => (
                    <PaperText data={list[key]} key={key} />
                  ))}
                <br />
              </div>
            </div>
          </div>
        ) : (
          <p className="paper__empty">Nie masz jeszcze swojej listy zakupów.</p>
        )
      ) : (
        <div className="card__loading">Loading...</div>
      )}

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
              addListToCurrent(currentUser, []);
            }}
          >
            Nowa lista
          </Link>
        </div>
      )}
    </section>
  );
}
