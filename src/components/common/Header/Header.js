import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router";
import Hamburger from "./Hamburger/Hamburger";
import Navbar from "./Navbar/Navbar";
import PageTitle from "./PageTitle/PageTitle";
import Logo from "../Logo/Logo";
import { AuthContext } from "../../../context/FirebaseContext";

const navList = [
  { name: "", path: "/", login: false },
  { name: "Utwórz konto", path: "/register", login: false },
  { name: "Zaloguj się", path: "/login", login: false },
  { name: "Listy", path: "/lists", login: true },
  { name: "Kategorie", path: "/category", login: true },
  { name: "Konto", path: "/account", login: true },
  { name: "Wyloguj", path: "/", login: true },
  { name: "Lista zakupów", path: "/shoppingList/", login: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const determineLocation = () => {
    if (location.state) {
      console.log(location);
      return { name: location.state.listName };
    } else {
      const headerTitle = navList.filter(
        (navElement) => navElement.path === location.pathname
      );
      return headerTitle[0];
    }
  };

  useEffect(() => {
    const newLocation = determineLocation();
    setCurrentLocation(newLocation);
  }, []);

  return (
    <>
      <header className="header">
        {currentLocation && <PageTitle title={currentLocation.name} />}
        <Logo source="header" />
        <Hamburger open={open} setOpen={setOpen} />
        <Navbar
          currentUser={currentUser}
          open={open}
          setOpen={setOpen}
          navList={navList}
        />
      </header>
    </>
  );
}
