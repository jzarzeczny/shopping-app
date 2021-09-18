import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <nav className={`nav ${open && "nav--open"}`}>
      <button className="hamburger" onClick={toggle}>
        <div className="hamburger-line"></div>
      </button>
      <ul className="nav__list">
        <li className="nav__element">
          <Link to="/">Strona główna</Link>
        </li>
        <li className="nav__element">
          <Link to="/">Lista zakupów</Link>
        </li>
        <li className="nav__element">
          <Link class="nav__element--important" to="/add">
            Stwórz listę
          </Link>
        </li>
        <li className="nav__element">
          <Link to="/login">Zaloguj się</Link>
        </li>
        <li className="nav__element">
          <Link to="/register">Zarejestruj się</Link>
        </li>
      </ul>
    </nav>
  );
}
