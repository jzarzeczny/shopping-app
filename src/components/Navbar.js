import React, { useState } from "react";

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
        <li className="nav__element">Strona główna</li>
        <li className="nav__element">Lista zakupów</li>
        <li className="nav__element">Stwórz listę</li>
      </ul>
    </nav>
  );
}
