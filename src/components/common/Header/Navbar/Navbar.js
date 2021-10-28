import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__listElement">
          <NavLink to="/" className="navbar__link">
            Link a
          </NavLink>
        </li>
        <li className="navbar__listElement">
          <NavLink to="/" className="navbar__link">
            Link b
          </NavLink>
        </li>
        <li className="navbar__listElement">
          <NavLink to="/" className="navbar__link">
            Link c
          </NavLink>
        </li>
        <li className="navbar__listElement">
          <NavLink to="/" className="navbar__link">
            Link d
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
