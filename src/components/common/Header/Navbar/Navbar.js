import { NavLink, useHistory } from "react-router-dom";

import { logout } from "../../../../firebase";

function Navbar({ open, setOpen, navList, currentUser }) {
  const navListForLoggedIn = navList.filter((listElement) => listElement.login);
  const navListForAnnons = navList.filter((listElement) => !listElement.login);

  let history = useHistory();

  const handleNavClick = (element) => {
    console.log(element.target.text);
    if (element.target.text === "Wyloguj") {
      logout();
      history.push("/");
    }
    setOpen(false);
  };

  return (
    <nav className={`navbar ${open && "navbar--open"}`}>
      <ul className="navbar__list">
        {currentUser ? (
          <>
            {navListForLoggedIn.map((element, index) => (
              <li className="navbar__listElement" key={index}>
                <NavLink
                  to={element.path}
                  onClick={handleNavClick}
                  className="navbar__link"
                >
                  {element.name}
                </NavLink>
              </li>
            ))}
          </>
        ) : (
          <>
            {navListForAnnons.map((element, index) => (
              <li className="navbar__listElement" key={index}>
                <NavLink
                  to={element.path}
                  onClick={() => setOpen(false)}
                  className="navbar__link"
                >
                  {element.name}
                </NavLink>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
