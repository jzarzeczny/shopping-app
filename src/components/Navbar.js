import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../context/FirebaseContext";
import { logout } from "../firebase";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  let history = useHistory();
  const toggle = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    await logout();
    history.push("/");
  };

  return (
    <nav className={`nav ${open && "nav--open"}`}>
      <button className="hamburger" onClick={toggle}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>
      <ul className="nav__list">
        <li className="nav__element">
          <Link to="/">Strona główna</Link>
        </li>

        {currentUser ? (
          <>
            <li className="nav__element">
              <Link to="/">Lista zakupów</Link>
            </li>
            <li className="nav__element">
              <Link className="nav__element--important" to="/add">
                Stwórz listę
              </Link>
            </li>
            <li className="nav__element nav__logout" onClick={handleLogout}>
              Wyloguj się
            </li>
          </>
        ) : (
          <>
            <li className="nav__element">
              <Link to="/login">Zaloguj się</Link>
            </li>
            <li className="nav__element">
              <Link to="/register">Zarejestruj się</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
