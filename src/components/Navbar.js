import React from "react";

export default function Navbar() {
  return (
    <nav className="navigation">
      <button className="hamburger">
        <div className="hamburger-line"></div>
      </button>
      <ul className="nav__list">
        <li className="nav__element"></li>
        <li className="nav__element"></li>
        <li className="nav__element"></li>
        <li className="nav__element"></li>
      </ul>
    </nav>
  );
}
