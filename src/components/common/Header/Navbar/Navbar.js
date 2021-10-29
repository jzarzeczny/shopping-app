import { NavLink } from "react-router-dom";

function Navbar({ open, setOpen, navList }) {
  return (
    <nav className={`navbar ${open && "navbar--open"}`}>
      <ul className="navbar__list">
        {navList.map((element, index) => (
          <li className="navbar__listElement" key={index}>
            <NavLink to={element.path} className="navbar__link">
              {element.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
