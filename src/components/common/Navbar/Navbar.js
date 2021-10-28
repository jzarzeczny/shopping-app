import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <navbar__list>
          <li className="navbar__listElement">
            <NavLink to="/" className="navbar__link"></NavLink>
          </li>
          <li className="navbar__listElement">
            <NavLink to="/" className="navbar__link"></NavLink>
          </li>
          <li className="navbar__listElement">
            <NavLink to="/" className="navbar__link"></NavLink>
          </li>
          <li className="navbar__listElement">
            <NavLink to="/" className="navbar__link"></NavLink>
          </li>
        </navbar__list>
      </ul>
    </nav>
  );
}

export default Navbar;
